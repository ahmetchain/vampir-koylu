var VKWorld=(()=>{var nh=Object.defineProperty;var ig=Object.getOwnPropertyDescriptor;var sg=Object.getOwnPropertyNames;var rg=Object.prototype.hasOwnProperty;var Uf=(s,e)=>{for(var t in e)nh(s,t,{get:e[t],enumerable:!0})},og=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of sg(e))!rg.call(s,i)&&i!==t&&nh(s,i,{get:()=>e[i],enumerable:!(n=ig(e,i))||n.enumerable});return s};var ag=s=>og(nh({},"__esModule",{value:!0}),s);var rS={};Uf(rS,{COLORS:()=>rm,HATS:()=>om,SKINS:()=>am,create:()=>Wm,preview:()=>qm,setAssetBase:()=>sS,supported:()=>Rf,version:()=>iS});var Ed=0,zh=1,Ad=2;var Ys=1,Rd=2,Wr=3,bi=0,pn=1,$t=2,Ks=0,ui=1,Un=2,Bh=3,kh=4,Cd=5;var Zs=100,Id=101,Pd=102,Ld=103,Nd=104,Dd=200,Ud=201,Fd=202,Od=203,Hh=204,Gh=205,zd=206,Bd=207,kd=208,Hd=209,Gd=210,Vd=211,Wd=212,Xd=213,qd=214,rl=0,ol=1,al=2,Rr=3,ll=4,cl=5,hl=6,ul=7,Ll=0,Yd=1,Kd=2,wi=0,Vh=1,Wh=2,Xh=3,qh=4,Yh=5,Kh=6,Js=7,Rh="attached",Zd="detached",Zh=300,$s=301,Xr=302,Nl=303,Dl=304,us=1e3,Ln=1001,Cr=1002,Zt=1003,Ul=1004;var js=1005;var sn=1006,qr=1007;var jn=1008;var Fn=1009,Jh=1010,$h=1011,Yr=1012,Fl=1013,fi=1014,Wn=1015,di=1016,Ol=1017,zl=1018,Qs=1020,jh=35902,Qh=35899,eu=1021,tu=1022,Qn=1023,Yi=1026,ts=1027,Bl=1028,kl=1029,xs=1030,Hl=1031;var Gl=1033,Zo=33776,Jo=33777,$o=33778,jo=33779,Vl=35840,Wl=35841,Xl=35842,ql=35843,Yl=36196,Kl=37492,Zl=37496,Jl=37488,$l=37489,Qo=37490,jl=37491,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,lc=37817,cc=37818,hc=37819,uc=37820,fc=37821,dc=36492,pc=36494,mc=36495,gc=36283,xc=36284,ea=36285,_c=36286,ta=2200,Jd=2201,$d=2202,Ls=2300,Ns=2301,il=2302,Ch=2303,Cs=2400,Is=2401,wo=2402,vc=2500,jd=2501,nu=0,na=1,Kr=2,Qd=3200;var ia=0,ep=1,ns="",Ft="srgb",En="srgb-linear",To="linear",Ot="srgb";var sl=7680;var tp=519,np=512,ip=513,sp=514,iu=515,rp=516,op=517,su=518,ru=519,ou=35044,sa=35048;var au="300 es",Zn=2e3,Ir=2001;function lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ap(){let s=Pr("canvas");return s.style.display="block",s}var Ff={},Lr=null;function Eo(...s){let e="THREE."+s.shift();Lr?Lr("log",e,...s):console.log(e,...s)}function lp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function je(...s){s=lp(s);let e="THREE."+s.shift();if(Lr)Lr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ot(...s){s=lp(s);let e="THREE."+s.shift();if(Lr)Lr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ps(...s){let e=s.join(" ");e in Ff||(Ff[e]=!0,je(...s))}function cp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var hp={[rl]:rl,[al]:hl,[ll]:ll,[Rr]:cl,[ol]:ol,[hl]:al,[ul]:ul,[cl]:Rr},oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=1234567,So=Math.PI/180,Ds=180/Math.PI;function Ti(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function lu(s,e){return(s%e+e)%e}function hg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ug(s,e,t){return s!==e?(t-s)/(e-s):0}function bo(s,e,t){return(1-t)*s+t*e}function fg(s,e,t,n){return bo(s,e,1-Math.exp(-t*n))}function dg(s,e=1){return e-Math.abs(lu(s,e*2)-e)}function pg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xg(s,e){return s+Math.random()*(e-s)}function _g(s){return s*(.5-Math.random())}function vg(s){s!==void 0&&(Of=s);let e=Of+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yg(s){return s*So}function Mg(s){return s*Ds}function Sg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function bg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wg(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*u,a*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hu(s,e){if(e.constructor===Float32Array)return s;let t=yc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function uu(s,e){if(e.constructor===Float32Array)return s;let t=yc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Mc={DEG2RAD:So,RAD2DEG:Ds,generateUUID:Ti,clamp:At,euclideanModulo:lu,mapLinear:hg,inverseLerp:ug,lerp:bo,damp:fg,pingpong:dg,smoothstep:pg,smootherstep:mg,randInt:gg,randFloat:xg,randFloatSpread:_g,seededRandom:vg,degToRad:yg,radToDeg:Mg,isPowerOfTwo:Sg,ceilPowerOfTwo:bg,floorPowerOfTwo:cu,setQuaternionFromProperEuler:wg,normalize:uu,denormalize:hu},gu=class gu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gu.prototype.isVector2=!0;var et=gu,Kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(h!==v||l!==f||c!==d||u!==m){let x=l*f+c*d+u*m+h*v;x<0&&(f=-f,d=-d,m=-m,v=-v,x=-x);let g=1-a;if(x<.9995){let S=Math.acos(x),N=Math.sin(S);g=Math.sin(g*S)/N,a=Math.sin(a*S)/N,l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+v*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+v*a;let S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xu=class xu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xu.prototype.isVector3=!0;var H=xu,ih=new H,zf=new Kt,_u=class _u{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],v=i[0],x=i[3],g=i[6],S=i[1],N=i[4],M=i[7],L=i[2],A=i[5],p=i[8];return r[0]=o*v+a*S+l*L,r[3]=o*x+a*N+l*A,r[6]=o*g+a*M+l*p,r[1]=c*v+u*S+h*L,r[4]=c*x+u*N+h*A,r[7]=c*g+u*M+h*p,r[2]=f*v+d*S+m*L,r[5]=f*x+d*N+m*A,r[8]=f*g+d*M+m*p,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_u.prototype.isMatrix3=!0;var at=_u,sh=new at,Bf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kf=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tg(){let s={enabled:!0,workingColorSpace:En,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ot&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ns?To:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[En]:{primaries:e,whitePoint:n,transfer:To,toXYZ:Bf,fromXYZ:kf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:Bf,fromXYZ:kf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}var St=Tg();function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cr,fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cr===void 0&&(cr=Pr("canvas")),cr.width=e.width,cr.height=e.height;let i=cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=cr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eg=0,Nr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(rh(i[o].image)):r.push(rh(i[o]))}else r=rh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function rh(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?fl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Ag=0,oh=new H,rn=class s extends oi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ln,i=Ln,r=sn,o=jn,a=Qn,l=Fn,c=s.DEFAULT_ANISOTROPY,u=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Ti(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Zh;rn.DEFAULT_ANISOTROPY=1;var vu=class vu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],v=l[2],x=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let N=(c+1)/2,M=(d+1)/2,L=(g+1)/2,A=(u+f)/4,p=(h+v)/4,_=(m+x)/4;return N>M&&N>L?N<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(N),i=A/n,r=p/n):M>L?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=_/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=p/r,i=_/r),this.set(n,i,r,t),this}let S=Math.sqrt((x-m)*(x-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(x-m)/S,this.y=(h-v)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vu.prototype.isVector4=!0;var Bt=vu,dl=class extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new rn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Nr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ao=class extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pl=class Pl{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,m,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,m,v,x)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,m,v,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=v,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,v=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Cg)}lookAt(e,t,n){let i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),rs.crossVectors(n,Bn),rs.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),rs.crossVectors(n,Bn)),rs.normalize(),Ca.crossVectors(Bn,rs),i[0]=rs.x,i[4]=Ca.x,i[8]=Bn.x,i[1]=rs.y,i[5]=Ca.y,i[9]=Bn.y,i[2]=rs.z,i[6]=Ca.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],v=n[6],x=n[10],g=n[14],S=n[3],N=n[7],M=n[11],L=n[15],A=i[0],p=i[4],_=i[8],C=i[12],D=i[1],z=i[5],B=i[9],b=i[13],y=i[2],E=i[6],T=i[10],R=i[14],F=i[3],O=i[7],V=i[11],Y=i[15];return r[0]=o*A+a*D+l*y+c*F,r[4]=o*p+a*z+l*E+c*O,r[8]=o*_+a*B+l*T+c*V,r[12]=o*C+a*b+l*R+c*Y,r[1]=u*A+h*D+f*y+d*F,r[5]=u*p+h*z+f*E+d*O,r[9]=u*_+h*B+f*T+d*V,r[13]=u*C+h*b+f*R+d*Y,r[2]=m*A+v*D+x*y+g*F,r[6]=m*p+v*z+x*E+g*O,r[10]=m*_+v*B+x*T+g*V,r[14]=m*C+v*b+x*R+g*Y,r[3]=S*A+N*D+M*y+L*F,r[7]=S*p+N*z+M*E+L*O,r[11]=S*_+N*B+M*T+L*V,r[15]=S*C+N*b+M*R+L*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],x=e[11],g=e[15],S=l*d-c*f,N=a*d-c*h,M=a*f-l*h,L=o*d-c*u,A=o*f-l*u,p=o*h-a*u;return t*(v*S-x*N+g*M)-n*(m*S-x*L+g*A)+i*(m*N-v*L+g*p)-r*(m*M-v*A+x*p)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],x=e[14],g=e[15],S=t*a-n*o,N=t*l-i*o,M=t*c-r*o,L=n*l-i*a,A=n*c-r*a,p=i*c-r*l,_=u*v-h*m,C=u*x-f*m,D=u*g-d*m,z=h*x-f*v,B=h*g-d*v,b=f*g-d*x,y=S*b-N*B+M*z+L*D-A*C+p*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/y;return e[0]=(a*b-l*B+c*z)*E,e[1]=(i*B-n*b-r*z)*E,e[2]=(v*p-x*A+g*L)*E,e[3]=(f*A-h*p-d*L)*E,e[4]=(l*D-o*b-c*C)*E,e[5]=(t*b-i*D+r*C)*E,e[6]=(x*M-m*p-g*N)*E,e[7]=(u*p-f*M+d*N)*E,e[8]=(o*B-a*D+c*_)*E,e[9]=(n*D-t*B-r*_)*E,e[10]=(m*A-v*M+g*S)*E,e[11]=(h*M-u*A-d*S)*E,e[12]=(a*C-o*z-l*_)*E,e[13]=(t*z-n*C+i*_)*E,e[14]=(v*N-m*L-x*S)*E,e[15]=(u*L-h*N+f*S)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,v=o*u,x=o*h,g=a*h,S=l*c,N=l*u,M=l*h,L=n.x,A=n.y,p=n.z;return i[0]=(1-(v+g))*L,i[1]=(d+M)*L,i[2]=(m-N)*L,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(f+g))*A,i[6]=(x+S)*A,i[7]=0,i[8]=(m+N)*p,i[9]=(x-S)*p,i[10]=(1-(f+v))*p,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=hr.set(i[0],i[1],i[2]).length(),a=hr.set(i[4],i[5],i[6]).length(),l=hr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ii.copy(this);let c=1/o,u=1/a,h=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,t.setFromRotationMatrix(ii),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Zn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Zn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ir)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Zn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Zn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ir)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Pl.prototype.isMatrix4=!0;var tt=Pl,hr=new H,ii=new tt,Rg=new H(0,0,0),Cg=new H(1,1,1),rs=new H,Ca=new H,Bn=new H,Hf=new tt,Gf=new Kt,yi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gf.setFromEuler(this),this.setFromQuaternion(Gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ig=0,Vf=new H,ur=new Kt,Bi=new tt,Ia=new H,co=new H,Pg=new H,Lg=new Kt,Wf=new H(1,0,0),Xf=new H(0,1,0),qf=new H(0,0,1),Yf={type:"added"},Ng={type:"removed"},fr={type:"childadded",child:null},ah={type:"childremoved",child:null},Gt=class s extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new H,t=new yi,n=new Kt,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new at}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(Wf,e)}rotateY(e){return this.rotateOnAxis(Xf,e)}rotateZ(e){return this.rotateOnAxis(qf,e)}translateOnAxis(e,t){return Vf.copy(e).applyQuaternion(this.quaternion),this.position.add(Vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wf,e)}translateY(e){return this.translateOnAxis(Xf,e)}translateZ(e){return this.translateOnAxis(qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ia.copy(e):Ia.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(co,Ia,this.up):Bi.lookAt(Ia,co,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),ur.setFromRotationMatrix(Bi),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yf),fr.child=e,this.dispatchEvent(fr),fr.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ng),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yf),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new H(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dg={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let x=t.getJointPose(v,n),g=this._getHandJoint(c,v);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function lh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=lu(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lh(o,r,e+1/3),this.g=lh(o,r,e),this.b=lh(o,r,e-1/3)}return St.colorSpaceToWorking(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return St.workingToColorSpace(Sn.copy(this),e),Math.round(At(Sn.r*255,0,255))*65536+Math.round(At(Sn.g*255,0,255))*256+Math.round(At(Sn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,r=Sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Ft){St.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,i=Sn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Pa);let n=bo(os.h,Pa.h,t),i=bo(os.s,Pa.s,t),r=bo(os.l,Pa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new be;be.NAMES=up;var Ro=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Us=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=new H,ki=new H,ch=new H,Hi=new H,dr=new H,pr=new H,Kf=new H,hh=new H,uh=new H,fh=new H,dh=new Bt,ph=new Bt,mh=new Bt,Xi=class s{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),si.subVectors(e,t),i.cross(si);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){si.subVectors(i,t),ki.subVectors(n,t),ch.subVectors(e,t);let o=si.dot(si),a=si.dot(ki),l=si.dot(ch),c=ki.dot(ki),u=ki.dot(ch),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(dh,r.x),o.addScaledVector(ph,r.y),o.addScaledVector(mh,r.z),o}static isFrontFacing(e,t,n,i){return si.subVectors(n,t),ki.subVectors(e,t),si.cross(ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),si.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;dr.subVectors(i,n),pr.subVectors(r,n),hh.subVectors(e,n);let l=dr.dot(hh),c=pr.dot(hh);if(l<=0&&c<=0)return t.copy(n);uh.subVectors(e,i);let u=dr.dot(uh),h=pr.dot(uh);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(dr,o);fh.subVectors(e,r);let d=dr.dot(fh),m=pr.dot(fh);if(m>=0&&d<=m)return t.copy(r);let v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(pr,a);let x=u*m-d*h;if(x<=0&&h-u>=0&&d-m>=0)return Kf.subVectors(r,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(Kf,a);let g=1/(x+v+f);return o=v*g,a=f*g,t.copy(n).addScaledVector(dr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),Na.subVectors(this.max,ho),mr.subVectors(e.a,ho),gr.subVectors(e.b,ho),xr.subVectors(e.c,ho),as.subVectors(gr,mr),ls.subVectors(xr,gr),Ts.subVectors(mr,xr);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Ts.z,Ts.y,as.z,0,-as.x,ls.z,0,-ls.x,Ts.z,0,-Ts.x,-as.y,as.x,0,-ls.y,ls.x,0,-Ts.y,Ts.x,0];return!gh(t,mr,gr,xr,Na)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,mr,gr,xr,Na))?!1:(Da.crossVectors(as,ls),t=[Da.x,Da.y,Da.z],gh(t,mr,gr,xr,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new H,new H,new H,new H,new H,new H,new H,new H],ri=new H,La=new Vn,mr=new H,gr=new H,xr=new H,as=new H,ls=new H,Ts=new H,ho=new H,Na=new H,Da=new H,Es=new H;function gh(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Es.fromArray(s,r);let a=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),l=e.dot(Es),c=t.dot(Es),u=n.dot(Es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var en=new H,Ua=new et,Ug=0,vt=class extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ug++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ou,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?yc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):uu(e,this.array)}};var Co=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Io=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fg=new Vn,uo=new H,xh=new H,Nn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);let t=uo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(uo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(xh)),this.expandByPoint(uo.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Og=0,Kn=new tt,_h=new Gt,_r=new H,kn=new Vn,fo=new Vn,fn=new H,Pt=class s extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?Io:Co)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(kn.min,fo.min),kn.expandByPoint(fn),fn.addVectors(kn.max,fo.max),kn.expandByPoint(fn)):(kn.expandByPoint(fo.min),kn.expandByPoint(fo.max))}kn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)fn.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),fn.add(_r)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new H,l[C]=new H;let u=new H,h=new H,f=new H,d=new et,m=new et,v=new et,x=new H,g=new H;function S(C,D,z){c[C]=c[D]=c[z]=1,u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,z),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,D),v.fromBufferAttribute(r,z),h.sub(u),f.sub(u),m.sub(d),v.sub(d);let B=1/(m.x*v.y-v.x*m.y);isFinite(B)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(B),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(B),a[C].add(x),a[D].add(x),a[z].add(x),l[C].add(g),l[D].add(g),l[z].add(g))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let C=0,D=N.length;C<D;++C){let z=N[C],B=z.start,b=z.count;for(let y=B,E=B+b;y<E;y+=3)S(e.getX(y+0),e.getX(y+1),e.getX(y+2))}let M=new H,L=new H,A=new H,p=new H;function _(C){A.fromBufferAttribute(i,C),p.copy(A);let D=a[C];M.copy(D),M.sub(A.multiplyScalar(A.dot(D))).normalize(),L.crossVectors(p,D);let B=L.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,B)}for(let C=0,D=n.count;C<D;++C)c[C]&&_(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),v=e.getX(f+1),x=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new vt(f,u,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ou,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Zf(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ti()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Tn=new H,fs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?yc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):uu(e,this.data.array)}},vh=new H,zg=new H,Bg=new at,Hn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=vh.subVectors(n,t).cross(zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(vh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bg.getNormalMatrix(e),i=this.coplanarPoint(vh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kg=0,bn=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=ui,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fr=class extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vr,po=new H,yr=new H,Mr=new H,Sr=new et,mo=new et,fp=new tt,Fa=new H,go=new H,Oa=new H,Jf=new et,yh=new et,$f=new et,Po=class extends Gt{constructor(e=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fs(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new fs(n,3,0,!1)),vr.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=vr,this.material=e,this.center=new et(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Mr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;za(Fa.set(-.5,-.5,0),Mr,o,yr,i,r),za(go.set(.5,-.5,0),Mr,o,yr,i,r),za(Oa.set(.5,.5,0),Mr,o,yr,i,r),Jf.set(0,0),yh.set(1,0),$f.set(1,1);let a=e.ray.intersectTriangle(Fa,go,Oa,!1,po);if(a===null&&(za(go.set(-.5,.5,0),Mr,o,yr,i,r),yh.set(0,1),a=e.ray.intersectTriangle(Fa,Oa,go,!1,po),a===null))return;let l=e.ray.origin.distanceTo(po);l<e.near||l>e.far||t.push({distance:l,point:po.clone(),uv:Xi.getInterpolation(po,Fa,go,Oa,Jf,yh,$f,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function za(s,e,t,n,i,r){Sr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(mo.x=r*Sr.x-i*Sr.y,mo.y=i*Sr.x+r*Sr.y):mo.copy(Sr),s.copy(e),s.x+=mo.x,s.y+=mo.y,s.applyMatrix4(fp)}var Vi=new H,Mh=new H,Ba=new H,ka=new H,ds=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mh.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),ka.copy(this.origin).sub(Mh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ba),a=ka.dot(this.direction),l=-ka.dot(Ba),c=ka.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Mh).addScaledVector(Ba,f),d}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),i=Vi.dot(Vi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,v=t.y-o.y,x=t.z-o.z,g=n.x-o.x,S=n.y-o.y,N=n.z-o.z,M=Math.abs(l),L=Math.abs(c),A=Math.abs(u),p,_,C,D,z,B,b,y,E,T,R,F;if(M>=L&&M>=A?(C=l,B=h,E=m,F=g,l>=0?(p=c,_=u,D=f,z=d,b=v,y=x,T=S,R=N):(p=u,_=c,D=d,z=f,b=x,y=v,T=N,R=S)):L>=A?(C=c,B=f,E=v,F=S,c>=0?(p=u,_=l,D=d,z=h,b=x,y=m,T=N,R=g):(p=l,_=u,D=h,z=d,b=m,y=x,T=g,R=N)):(C=u,B=d,E=x,F=N,u>=0?(p=l,_=c,D=h,z=f,b=m,y=v,T=g,R=S):(p=c,_=l,D=f,z=h,b=v,y=m,T=S,R=g)),C===0)return null;let O=p/C,V=_/C,Y=1/C,Z=D-O*B,oe=z-V*B,q=b-O*E,ee=y-V*E,he=T-O*F,Pe=R-V*F,ue=he*ee-Pe*q,Ce=Z*Pe-oe*he,Xe=q*oe-ee*Z;if(i){if(ue<0||Ce<0||Xe<0)return null}else if((ue<0||Ce<0||Xe<0)&&(ue>0||Ce>0||Xe>0))return null;let Ze=ue+Ce+Xe;if(Ze===0)return null;let gt=Y*(ue*B+Ce*E+Xe*F);return(Ze>0?gt<0:gt>0)?null:this.at(gt/Ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jf=new tt,As=new ds,Ha=new Nn,Qf=new H,Ga=new H,Va=new H,Wa=new H,Sh=new H,Xa=new H,ed=new H,qa=new H,xt=class extends Gt{constructor(e=new Pt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Sh.fromBufferAttribute(h,e),o?Xa.addScaledVector(Sh,u):Xa.addScaledVector(Sh.sub(t),u))}t.add(Xa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Ha.containsPoint(As.origin)===!1&&(As.intersectSphere(Ha,Qf)===null||As.origin.distanceToSquared(Qf)>(e.far-e.near)**2))&&(jf.copy(r).invert(),As.copy(e.ray).applyMatrix4(jf),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let x=f[m],g=o[x.materialIndex],S=Math.max(x.start,d.start),N=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let M=S,L=N;M<L;M+=3){let A=a.getX(M),p=a.getX(M+1),_=a.getX(M+2);i=Ya(this,g,e,n,c,u,h,A,p,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let x=m,g=v;x<g;x+=3){let S=a.getX(x),N=a.getX(x+1),M=a.getX(x+2);i=Ya(this,o,e,n,c,u,h,S,N,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let x=f[m],g=o[x.materialIndex],S=Math.max(x.start,d.start),N=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let M=S,L=N;M<L;M+=3){let A=M,p=M+1,_=M+2;i=Ya(this,g,e,n,c,u,h,A,p,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let x=m,g=v;x<g;x+=3){let S=x,N=x+1,M=x+2;i=Ya(this,o,e,n,c,u,h,S,N,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};function Hg(s,e,t,n,i,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===bi,a),l===null)return null;qa.copy(a),qa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(qa);return c<t.near||c>t.far?null:{distance:c,point:qa.clone(),object:s}}function Ya(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ga),s.getVertexPosition(l,Va),s.getVertexPosition(c,Wa);let u=Hg(s,e,t,n,Ga,Va,Wa,ed);if(u){let h=new H;Xi.getBarycoord(ed,Ga,Va,Wa,h),i&&(u.uv=Xi.getInterpolatedAttribute(i,a,l,c,h,new et)),r&&(u.uv1=Xi.getInterpolatedAttribute(r,a,l,c,h,new et)),o&&(u.normal=Xi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};Xi.getNormal(Ga,Va,Wa,f.normal),u.face=f,u.barycoord=h}return u}var xo=new Bt,td=new Bt,nd=new Bt,Gg=new Bt,id=new tt,Ka=new H,bh=new Nn,sd=new tt,wh=new ds,Lo=class extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rh,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingBox.expandByPoint(Ka)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingSphere.expandByPoint(Ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bh.copy(this.boundingSphere),bh.applyMatrix4(i),e.ray.intersectsSphere(bh)!==!1&&(sd.copy(i).invert(),wh.copy(e.ray).applyMatrix4(sd),!(this.boundingBox!==null&&wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;td.fromBufferAttribute(i.attributes.skinIndex,e),nd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(xo.copy(t),t.set(0,0,0,0)):(xo.set(t.x,t.y,t.z,1),t.set(0,0,0)),xo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=nd.getComponent(r);if(o!==0){let a=td.getComponent(r);id.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gg.copy(xo).applyMatrix4(id),o)}}return t.isVector4&&(t.w=xo.w),t.applyMatrix4(this.bindMatrixInverse)}},Or=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},zr=class extends rn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Zt,u=Zt,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rd=new tt,Vg=new tt,No=class s{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Vg;rd.multiplyMatrices(a,t[r]),rd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zr(t,e,e,Qn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(je("Skeleton: No bone found with UUID:",r),o=new Or),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},An=class extends vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new tt,od=new tt,Za=[],ad=new Vn,Wg=new tt,_o=new xt,vo=new Nn,Os=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new An(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),ad.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),vo.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,br),od.multiplyMatrices(n,br),_o.matrixWorld=od,_o.raycast(e,Za);for(let o=0,a=Za.length;o<a;o++){let l=Za[o];l.instanceId=r,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new An(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(i*this.count),i,this.count,Bl,Wn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new Nn,Xg=new et(.5,.5),Ja=new H,ps=class{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],v=r[9],x=r[10],g=r[11],S=r[12],N=r[13],M=r[14],L=r[15];if(i[0].setComponents(c-o,d-u,g-m,L-S).normalize(),i[1].setComponents(c+o,d+u,g+m,L+S).normalize(),i[2].setComponents(c+a,d+h,g+v,L+N).normalize(),i[3].setComponents(c-a,d-h,g-v,L-N).normalize(),n)i[4].setComponents(l,f,x,M).normalize(),i[5].setComponents(c-l,d-f,g-x,L-M).normalize();else if(i[4].setComponents(c-l,d-f,g-x,L-M).normalize(),t===Zn)i[5].setComponents(c+l,d+f,g+x,L+M).normalize();else if(t===Ir)i[5].setComponents(l,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=Xg.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ja.x=i.normal.x>0?e.max.x:e.min.x,Ja.y=i.normal.y>0?e.max.y:e.min.y,Ja.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ld=new tt,ml=class s{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];ld.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new ps),n[i].setFromProjectionMatrix(ld,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new ps),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Br=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gl=new H,xl=new H,cd=new tt,yo=new ds,$a=new Nn,Th=new H,hd=new H,zs=class extends Gt{constructor(e=new Pt,t=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)gl.fromBufferAttribute(t,i-1),xl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gl.distanceTo(xl);e.setAttribute("lineDistance",new Ct(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;cd.copy(i).invert(),yo.copy(e.ray).applyMatrix4(cd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,x=m-1;v<x;v+=c){let g=u.getX(v),S=u.getX(v+1),N=ja(this,e,yo,l,g,S,v);N&&t.push(N)}if(this.isLineLoop){let v=u.getX(m-1),x=u.getX(d),g=ja(this,e,yo,l,v,x,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,x=m-1;v<x;v+=c){let g=ja(this,e,yo,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=ja(this,e,yo,l,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ja(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(gl.fromBufferAttribute(a,i),xl.fromBufferAttribute(a,r),t.distanceSqToSegment(gl,xl,Th,hd)>n)return;Th.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Th);if(!(c<e.near||c>e.far))return{distance:c,point:hd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var ud=new H,fd=new H,Do=class extends zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ud.fromBufferAttribute(t,i),fd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ud.distanceTo(fd);e.setAttribute("lineDistance",new Ct(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Uo=class extends zs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},kr=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dd=new tt,Ih=new ds,Qa=new Nn,el=new H,ai=class extends Gt{constructor(e=new Pt,t=new kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(i),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;dd.copy(i).invert(),Ih.copy(e.ray).applyMatrix4(dd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,v=d;m<v;m++){let x=c.getX(m);el.fromBufferAttribute(h,x),pd(el,x,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,v=d;m<v;m++)el.fromBufferAttribute(h,m),pd(el,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pd(s,e,t,n,i,r,o){let a=Ih.distanceSqToPoint(s);if(a<t){let l=new H;Ih.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fo=class extends rn{constructor(e=[],t=$s,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bs=class extends rn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class extends rn{constructor(e,t,n=fi,i,r,o,a=Zt,l=Zt,c,u=Yi,h=1){if(u!==Yi&&u!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oo=class extends Ki{constructor(e,t=fi,n=$s,i,r,o=Zt,a=Zt,l,c=Yi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zo=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},li=class s extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function m(v,x,g,S,N,M,L,A,p,_,C){let D=M/p,z=L/_,B=M/2,b=L/2,y=A/2,E=p+1,T=_+1,R=0,F=0,O=new H;for(let V=0;V<T;V++){let Y=V*z-b;for(let Z=0;Z<E;Z++){let oe=Z*D-B;O[v]=oe*S,O[x]=Y*N,O[g]=y,c.push(O.x,O.y,O.z),O[v]=0,O[x]=0,O[g]=A>0?1:-1,u.push(O.x,O.y,O.z),h.push(Z/p),h.push(1-V/_),R+=1}}for(let V=0;V<_;V++)for(let Y=0;Y<p;Y++){let Z=f+Y+E*V,oe=f+Y+E*(V+1),q=f+(Y+1)+E*(V+1),ee=f+(Y+1)+E*V;l.push(Z,oe,ee),l.push(oe,q,ee),F+=6}a.addGroup(d,F,C),d+=F,f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ks=class s extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new H,u=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zi=class s extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,v=[],x=n/2,g=0;S(),o===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function S(){let M=new H,L=new H,A=0,p=(t-e)/n;for(let _=0;_<=r;_++){let C=[],D=_/r,z=D*(t-e)+e;for(let B=0;B<=i;B++){let b=B/i,y=b*l+a,E=Math.sin(y),T=Math.cos(y);L.x=z*E,L.y=-D*n+x,L.z=z*T,h.push(L.x,L.y,L.z),M.set(E,p,T).normalize(),f.push(M.x,M.y,M.z),d.push(b,1-D),C.push(m++)}v.push(C)}for(let _=0;_<i;_++)for(let C=0;C<r;C++){let D=v[C][_],z=v[C+1][_],B=v[C+1][_+1],b=v[C][_+1];(e>0||C!==0)&&(u.push(D,z,b),A+=3),(t>0||C!==r-1)&&(u.push(z,B,b),A+=3)}c.addGroup(g,A,0),g+=A}function N(M){let L=m,A=new et,p=new H,_=0,C=M===!0?e:t,D=M===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,x*D,0),f.push(0,D,0),d.push(.5,.5),m++;let z=m;for(let B=0;B<=i;B++){let y=B/i*l+a,E=Math.cos(y),T=Math.sin(y);p.x=C*T,p.y=x*D,p.z=C*E,h.push(p.x,p.y,p.z),f.push(0,D,0),A.x=E*.5+.5,A.y=T*.5*D+.5,d.push(A.x,A.y),m++}for(let B=0;B<i;B++){let b=L+B,y=z+B;M===!0?u.push(y,y+1,b):u.push(y+1,y,b),_+=3}c.addGroup(g,_,M===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var _l=class s extends Pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let N=new H,M=new H,L=new H;for(let A=0;A<t.length;A+=3)d(t[A+0],N),d(t[A+1],M),d(t[A+2],L),l(N,M,L,S)}function l(S,N,M,L){let A=L+1,p=[];for(let _=0;_<=A;_++){p[_]=[];let C=S.clone().lerp(M,_/A),D=N.clone().lerp(M,_/A),z=A-_;for(let B=0;B<=z;B++)B===0&&_===A?p[_][B]=C:p[_][B]=C.clone().lerp(D,B/z)}for(let _=0;_<A;_++)for(let C=0;C<2*(A-_)-1;C++){let D=Math.floor(C/2);C%2===0?(f(p[_][D+1]),f(p[_+1][D]),f(p[_][D])):(f(p[_][D+1]),f(p[_+1][D+1]),f(p[_+1][D]))}}function c(S){let N=new H;for(let M=0;M<r.length;M+=3)N.x=r[M+0],N.y=r[M+1],N.z=r[M+2],N.normalize().multiplyScalar(S),r[M+0]=N.x,r[M+1]=N.y,r[M+2]=N.z}function u(){let S=new H;for(let N=0;N<r.length;N+=3){S.x=r[N+0],S.y=r[N+1],S.z=r[N+2];let M=x(S)/2/Math.PI+.5,L=g(S)/Math.PI+.5;o.push(M,1-L)}m(),h()}function h(){for(let S=0;S<o.length;S+=6){let N=o[S+0],M=o[S+2],L=o[S+4],A=Math.max(N,M,L),p=Math.min(N,M,L);A>.9&&p<.1&&(N<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,N){let M=S*3;N.x=e[M+0],N.y=e[M+1],N.z=e[M+2]}function m(){let S=new H,N=new H,M=new H,L=new H,A=new et,p=new et,_=new et;for(let C=0,D=0;C<r.length;C+=9,D+=6){S.set(r[C+0],r[C+1],r[C+2]),N.set(r[C+3],r[C+4],r[C+5]),M.set(r[C+6],r[C+7],r[C+8]),A.set(o[D+0],o[D+1]),p.set(o[D+2],o[D+3]),_.set(o[D+4],o[D+5]),L.copy(S).add(N).add(M).divideScalar(3);let z=x(L);v(A,D+0,S,z),v(p,D+2,N,z),v(_,D+4,M,z)}}function v(S,N,M,L){L<0&&S.x===1&&(o[N]=S.x-1),M.x===0&&M.z===0&&(o[N]=L/2/Math.PI+.5)}function x(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Bo=class s extends _l{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var ci=class s extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],v=[],x=[];for(let g=0;g<u;g++){let S=g*f-o;for(let N=0;N<c;N++){let M=N*h-r;m.push(M,-S,0),v.push(0,0,1),x.push(N/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let N=S+c*g,M=S+c*(g+1),L=S+1+c*(g+1),A=S+1+c*g;d.push(N,M,A),d.push(M,L,A)}this.setIndex(d),this.setAttribute("position",new Ct(m,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ko=class s extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,d=[],m=[],v=[],x=[];for(let g=0;g<=n;g++){let S=[],N=g/n,M=o+N*a,L=e*Math.cos(M),A=Math.sqrt(e*e-L*L),p=0;g===0&&o===0?p=.5/t:g===n&&l===Math.PI&&(p=-.5/t);for(let _=0;_<=t;_++){let C=_/t,D=i+C*r;h.x=-A*Math.cos(D),h.y=L,h.z=A*Math.sin(D),m.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),x.push(C+p,1-N),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let N=u[g][S+1],M=u[g][S],L=u[g+1][S],A=u[g+1][S+1];(g!==0||o>0)&&d.push(N,M,A),(g!==n-1||l<Math.PI)&&d.push(M,L,A)}this.setIndex(d),this.setAttribute("position",new Ct(m,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ho=class s extends Pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],h=[],f=new H,d=new H,m=new H;for(let v=0;v<=n;v++){let x=o+v/n*a;for(let g=0;g<=i;g++){let S=g/i*r;d.x=(e+t*Math.cos(x))*Math.cos(S),d.y=(e+t*Math.cos(x))*Math.sin(S),d.z=t*Math.sin(x),c.push(d.x,d.y,d.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(g/i),h.push(v/n)}}for(let v=1;v<=n;v++)for(let x=1;x<=i;x++){let g=(i+1)*v+x-1,S=(i+1)*(v-1)+x-1,N=(i+1)*(v-1)+x,M=(i+1)*v+x;l.push(g,S,M),l.push(S,N,M)}this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function er(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(md(i))i.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(md(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function wn(s){let e={};for(let t=0;t<s.length;t++){let n=er(s[t]);for(let i in n)e[i]=n[i]}return e}function md(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function qg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function fu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}var dp={clone:er,merge:wn},Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=Kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new at().fromArray(i.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vl=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hs=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends Hs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var on=class extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Ll,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yl=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ml=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Mo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Zg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Jg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cs,endingEnd:Cs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Is:r=e,a=2*t-n;break;case wo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Is:o=e,l=2*n-t;break;case wo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),v=m*m,x=v*m,g=-f*x+2*f*v-f*m,S=(1+f)*x+(-1.5-2*f)*v+(-.5+f)*m+1,N=(-1-d)*x+(1.5+d)*v+.5*m,M=d*x-d*v;for(let L=0;L!==a;++L)r[L]=g*o[u+L]+S*o[c+L]+N*o[l+L]+M*o[h+L];return r}},Go=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},bl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},wl=class extends Mi{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(i-t),v=1-m;for(let x=0;x!==a;++x)r[x]=o[c+x]*v+o[l+x]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let v=o[c+m],x=o[l+m],g=d*f+m*2,S=h[g],N=h[g+1],M=e*f+m*2,L=u[M],A=u[M+1],p=jg(n,t,S,L,i);r[m]=pp(p,v,N,A,x)}return r}};function pp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function $g(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function jg(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=pp(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=$g(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Dn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Mo(e.settings)&&(n.settings={inTangents:hs(e.settings.inTangents,Array),outTangents:hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break;case Ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return Ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Mo(this.settings)&&(xd(this.settings.inTangents,e),xd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Mo(this.settings)&&(_d(this.settings.inTangents,e),_d(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ot("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&cg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===il,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let v=t[h+m];if(v!==t[f+m]||v!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Mo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function xd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function _d(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Ns;var Ji=class extends Dn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ls;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}};Vo.prototype.ValueTypeName="color";var $i=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}};$i.prototype.ValueTypeName="number";var Tl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ji=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}};ji.prototype.ValueTypeName="quaternion";ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Dn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ls;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}};ms.prototype.ValueTypeName="vector";var hi=class{constructor(e="",t=-1,n=[],i=vc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(e0(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Zg(l);l=gd(l,1,u),c=gd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new $i(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Qg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return Vo;case"quaternion":return ji;case"bool":case"boolean":return Ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function e0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Qg(s.type);if(s.times===void 0){let n=[],i=[];Jg(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Mo(s.settings)&&(t.settings={inTangents:hs(s.settings.inTangents,Float32Array),outTangents:hs(s.settings.outTangents,Float32Array)}),t}var Jn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(vd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!vd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function vd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var El=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mp=new El,Si=class{constructor(e){this.manager=e!==void 0?e:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Si.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi={},Ph=class extends Error{constructor(e,t){super(e),this.response=t}},Hr=class extends Si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Jn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:i});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&je("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Wi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,v=0,x=new ReadableStream({start(g){S();function S(){h.read().then(({done:N,value:M})=>{if(N)g.close();else{v+=M.byteLength;let L=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let A=0,p=u.length;A<p;A++){let _=u[A];_.onProgress&&_.onProgress(L)}g.enqueue(M),S()}},N=>{g.error(N)})}}});return new Response(x)}else throw new Ph(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Jn.add(`file:${e}`,c);let u=Wi[e];delete Wi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var wr=new WeakMap,Al=class extends Si{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Jn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=wr.get(o);h===void 0&&(h=[],wr.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Pr("img");function l(){u(),t&&t(this);let h=wr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}wr.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),Jn.remove(`image:${e}`);let f=wr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}wr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Jn.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Gs=class extends Si{constructor(e){super(e)}load(e,t,n,i){let r=new rn,o=new Al(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Vs=class extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ws=class extends Vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Eh=new tt,yd=new H,Md=new H,Gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Eh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ir||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tl=new H,nl=new Kt,vi=new H,Wo=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tl,nl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tl,nl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new H,Sd=new et,bd=new et,Yt=class extends Wo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,Sd,bd),t.subVectors(bd,Sd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lh=class extends Gr{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xo=class extends Vs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nh=class extends Gr{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},Xs=class extends Vs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qs=class extends Wo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dh=class extends Gr{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$n=class extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var es=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},qo=class extends Pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Ah=new WeakMap,Yo=class extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Jn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Ah.has(o)===!0?(i&&i(Ah.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ah.set(l,c),Jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Jn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Tr=-90,Er=1,Vr=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yt(Tr,Er,e,t);i.layers=this.layers,this.add(i);let r=new Yt(Tr,Er,e,t);r.layers=this.layers,this.add(r);let o=new Yt(Tr,Er,e,t);o.layers=this.layers,this.add(o);let a=new Yt(Tr,Er,e,t);a.layers=this.layers,this.add(a);let l=new Yt(Tr,Er,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Tr,Er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Rl=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Cl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Kt.multiplyQuaternionsFlat(e,o,e,t,e,n),Kt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},du="\\[\\]\\.:\\/",t0=new RegExp("["+du+"]","g"),pu="[^"+du+"]",n0="[^"+du.replace("\\.","")+"]",i0=/((?:WC+[\/:])*)/.source.replace("WC",pu),s0=/(WCOD+)?/.source.replace("WCOD",n0),r0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),o0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),a0=new RegExp("^"+i0+s0+r0+o0+"$"),l0=["material","materials","bones","map"],Uh=class{constructor(e,t,n){let i=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(e){let t=a0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);l0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=Uh;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Il=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Cs,endingEnd:Cs};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Jd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case vc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===$d;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===ta){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Is,i.endingEnd=Is):(e?i.endingStart=this.zeroSlopeAtStart?Is:Cs:i.endingStart=wo,t?i.endingEnd=this.zeroSlopeAtEnd?Is:Cs:i.endingEnd=wo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},c0=new Float32Array(1),gs=class extends oi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=i[h],d=f.name,m=u[d];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}let v=t&&t._propertyBindings[h].binding.parsedPath;m=new Cl(kt.create(n,d,v),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Go(new Float32Array(2),new Float32Array(2),1,c0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?hi.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=vc),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Il(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?hi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var wd=new tt,Ko=class{constructor(e,t,n=0,i=1/0){this.ray=new ds(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wd),this}intersectObject(e,t=!0,n=[]){return Fh(e,this,n,t),n.sort(Td),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Fh(e[i],this,n,t);return n.sort(Td),n}};function Td(s,e){return s.distance-e.distance}function Fh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Fh(r[o],e,t,!0)}}var yu=class yu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};yu.prototype.isMatrix2=!0;var Oh=yu;function mu(s,e,t,n){let i=h0(n);switch(t){case eu:return s*e;case Bl:return s*e/i.components*i.byteLength;case kl:return s*e/i.components*i.byteLength;case xs:return s*e*2/i.components*i.byteLength;case Hl:return s*e*2/i.components*i.byteLength;case tu:return s*e*3/i.components*i.byteLength;case Qn:return s*e*4/i.components*i.byteLength;case Gl:return s*e*4/i.components*i.byteLength;case Zo:case Jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $o:case jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wl:case ql:return Math.max(s,16)*Math.max(e,8)/4;case Vl:case Xl:return Math.max(s,8)*Math.max(e,8)/2;case Yl:case Kl:case Jl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Qo:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case dc:case pc:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case gc:case xc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ea:case _c:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h0(s){switch(s){case Fn:case Jh:return{byteLength:1,components:1};case Yr:case $h:case di:return{byteLength:2,components:1};case Ol:case zl:return{byteLength:2,components:4};case fi:case Fl:case Wn:return{byteLength:4,components:1};case jh:case Qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Op(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function f0(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let v=h[d];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
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
#endif`,hx=`uniform sampler2D dfgLUT;
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
}`,ux=`
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
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
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$x=`float getShadowMask() {
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
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,e_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform float backgroundBlurriness;
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
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
}`,v_=`#if DEPTH_PACKING == 3200
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
}`,y_=`#define DISTANCE
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
}`,M_=`#define DISTANCE
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
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`uniform float scale;
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
}`,T_=`uniform vec3 diffuse;
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
}`,E_=`#include <common>
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
}`,A_=`uniform vec3 diffuse;
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
}`,R_=`#define LAMBERT
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
}`,C_=`#define LAMBERT
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
}`,I_=`#define MATCAP
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
}`,P_=`#define MATCAP
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
}`,L_=`#define NORMAL
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
}`,N_=`#define NORMAL
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
}`,D_=`#define PHONG
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
}`,U_=`#define PHONG
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
}`,F_=`#define STANDARD
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
}`,O_=`#define STANDARD
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
}`,z_=`#define TOON
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
}`,B_=`#define TOON
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
}`,k_=`uniform float size;
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
}`,H_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,V_=`uniform vec3 color;
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
}`,W_=`uniform float rotation;
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
}`,X_=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:d0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:x0,alphatest_pars_fragment:_0,aomap_fragment:v0,aomap_pars_fragment:y0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:b0,beginnormal_vertex:w0,bsdfs:T0,iridescence_fragment:E0,bumpmap_pars_fragment:A0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:P0,color_fragment:L0,color_pars_fragment:N0,color_pars_vertex:D0,color_vertex:U0,common:F0,defaultnormal_vertex:O0,displacementmap_pars_vertex:z0,displacementmap_vertex:B0,emissivemap_fragment:k0,emissivemap_pars_fragment:H0,colorspace_fragment:G0,colorspace_pars_fragment:V0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:q0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:sx,envmap_vertex:K0,fog_vertex:Z0,fog_pars_vertex:J0,fog_fragment:$0,fog_pars_fragment:j0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:ex,lights_lambert_fragment:tx,lights_lambert_pars_fragment:nx,lights_pars_begin:ix,lights_toon_fragment:rx,lights_toon_pars_fragment:ox,lights_phong_fragment:ax,lights_phong_pars_fragment:lx,lights_physical_fragment:cx,lights_physical_pars_fragment:hx,lights_fragment_begin:ux,lights_fragment_maps:fx,lights_fragment_end:dx,lightprobes_pars_fragment:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:_x,map_fragment:vx,map_pars_fragment:yx,map_particle_fragment:Mx,map_particle_pars_fragment:Sx,metalnessmap_fragment:bx,metalnessmap_pars_fragment:wx,morphinstance_vertex:Tx,morphcolor_vertex:Ex,morphnormal_vertex:Ax,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Ix,normal_fragment_maps:Px,normal_pars_fragment:Lx,normal_pars_vertex:Nx,normal_vertex:Dx,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:zx,iridescence_pars_fragment:Bx,opaque_fragment:kx,packing:Hx,premultiplied_alpha_fragment:Gx,project_vertex:Vx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:Zx,shadowmap_vertex:Jx,shadowmask_pars_fragment:$x,skinbase_vertex:jx,skinning_pars_vertex:Qx,skinning_vertex:e_,skinnormal_vertex:t_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:o_,transmission_pars_fragment:a_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:h_,worldpos_vertex:u_,background_vert:f_,background_frag:d_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:x_,depth_vert:__,depth_frag:v_,distance_vert:y_,distance_frag:M_,equirect_vert:S_,equirect_frag:b_,linedashed_vert:w_,linedashed_frag:T_,meshbasic_vert:E_,meshbasic_frag:A_,meshlambert_vert:R_,meshlambert_frag:C_,meshmatcap_vert:I_,meshmatcap_frag:P_,meshnormal_vert:L_,meshnormal_frag:N_,meshphong_vert:D_,meshphong_frag:U_,meshphysical_vert:F_,meshphysical_frag:O_,meshtoon_vert:z_,meshtoon_frag:B_,points_vert:k_,points_frag:H_,shadow_vert:G_,shadow_frag:V_,sprite_vert:W_,sprite_frag:X_},ze={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ai={basic:{uniforms:wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:wn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:wn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new be(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:wn([ze.points,ze.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:wn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:wn([ze.common,ze.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:wn([ze.sprite,ze.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:wn([ze.common,ze.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:wn([ze.lights,ze.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ai.physical={uniforms:wn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var Sc={r:0,b:0,g:0},q_=new tt,zp=new at;zp.set(-1,0,0,0,1,0,0,0,1);function Y_(s,e,t,n,i,r){let o=new be(0),a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(S){let N=S.isScene===!0?S.background:null;if(N&&N.isTexture){let M=S.backgroundBlurriness>0;N=e.get(N,M)}return N}function m(S){let N=!1,M=d(S);M===null?x(o,a):M&&M.isColor&&(x(M,1),N=!0);let L=s.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(S,N){let M=d(N);M&&M.isCubeTexture?(c===void 0&&(c=new xt(new li(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:er(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,A,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(q_.makeRotationFromEuler(N.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zp),c.material.toneMapped=St.getTransfer(M.colorSpace)!==Ot,(u!==M||h!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new xt(new ci(2,2),new Jt({name:"BackgroundMaterial",uniforms:er(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=St.getTransfer(M.colorSpace)!==Ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function x(S,N){S.getRGB(Sc,fu(s)),t.buffers.color.setClear(Sc.r,Sc.g,Sc.b,N,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,N=1){o.set(S),a=N,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,x(o,a)},render:m,addToRenderList:v,dispose:g}}function K_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(z,B,b,y,E){let T=!1,R=h(z,y,b,B);r!==R&&(r=R,c(r.object)),T=d(z,y,b,E),T&&m(z,y,b,E),E!==null&&e.update(E,s.ELEMENT_ARRAY_BUFFER),(T||o)&&(o=!1,M(z,B,b,y),E!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))}function l(){return s.createVertexArray()}function c(z){return s.bindVertexArray(z)}function u(z){return s.deleteVertexArray(z)}function h(z,B,b,y){let E=y.wireframe===!0,T=n[B.id];T===void 0&&(T={},n[B.id]=T);let R=z.isInstancedMesh===!0?z.id:0,F=T[R];F===void 0&&(F={},T[R]=F);let O=F[b.id];O===void 0&&(O={},F[b.id]=O);let V=O[E];return V===void 0&&(V=f(l()),O[E]=V),V}function f(z){let B=[],b=[],y=[];for(let E=0;E<t;E++)B[E]=0,b[E]=0,y[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:b,attributeDivisors:y,object:z,attributes:{},index:null}}function d(z,B,b,y){let E=r.attributes,T=B.attributes,R=0,F=b.getAttributes();for(let O in F)if(F[O].location>=0){let Y=E[O],Z=T[O];if(Z===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),Y===void 0||Y.attribute!==Z||Z&&Y.data!==Z.data)return!0;R++}return r.attributesNum!==R||r.index!==y}function m(z,B,b,y){let E={},T=B.attributes,R=0,F=b.getAttributes();for(let O in F)if(F[O].location>=0){let Y=T[O];Y===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor));let Z={};Z.attribute=Y,Y&&Y.data&&(Z.data=Y.data),E[O]=Z,R++}r.attributes=E,r.attributesNum=R,r.index=y}function v(){let z=r.newAttributes;for(let B=0,b=z.length;B<b;B++)z[B]=0}function x(z){g(z,0)}function g(z,B){let b=r.newAttributes,y=r.enabledAttributes,E=r.attributeDivisors;b[z]=1,y[z]===0&&(s.enableVertexAttribArray(z),y[z]=1),E[z]!==B&&(s.vertexAttribDivisor(z,B),E[z]=B)}function S(){let z=r.newAttributes,B=r.enabledAttributes;for(let b=0,y=B.length;b<y;b++)B[b]!==z[b]&&(s.disableVertexAttribArray(b),B[b]=0)}function N(z,B,b,y,E,T,R){R===!0?s.vertexAttribIPointer(z,B,b,E,T):s.vertexAttribPointer(z,B,b,y,E,T)}function M(z,B,b,y){v();let E=y.attributes,T=b.getAttributes(),R=B.defaultAttributeValues;for(let F in T){let O=T[F];if(O.location>=0){let V=E[F];if(V===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(V=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(V=z.instanceColor)),V!==void 0){let Y=V.normalized,Z=V.itemSize,oe=e.get(V);if(oe===void 0)continue;let q=oe.buffer,ee=oe.type,he=oe.bytesPerElement,Pe=ee===s.INT||ee===s.UNSIGNED_INT||V.gpuType===Fl;if(V.isInterleavedBufferAttribute){let ue=V.data,Ce=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,Xe=V.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let Ze=0;Ze<O.locationSize;Ze++)g(O.location+Ze,ue.meshPerAttribute);z.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ze=0;Ze<O.locationSize;Ze++)x(O.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,q);for(let Ze=0;Ze<O.locationSize;Ze++)N(O.location+Ze,Z/O.locationSize,ee,Y,Ce*he,(Xe+Z/O.locationSize*Ze)*he,Pe)}else{if(V.isInstancedBufferAttribute){for(let ue=0;ue<O.locationSize;ue++)g(O.location+ue,V.meshPerAttribute);z.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ue=0;ue<O.locationSize;ue++)x(O.location+ue);s.bindBuffer(s.ARRAY_BUFFER,q);for(let ue=0;ue<O.locationSize;ue++)N(O.location+ue,Z/O.locationSize,ee,Y,Z*he,Z/O.locationSize*ue*he,Pe)}}else if(R!==void 0){let Y=R[F];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(O.location,Y);break;case 3:s.vertexAttrib3fv(O.location,Y);break;case 4:s.vertexAttrib4fv(O.location,Y);break;default:s.vertexAttrib1fv(O.location,Y)}}}}S()}function L(){C();for(let z in n){let B=n[z];for(let b in B){let y=B[b];for(let E in y){let T=y[E];for(let R in T)u(T[R].object),delete T[R];delete y[E]}}delete n[z]}}function A(z){if(n[z.id]===void 0)return;let B=n[z.id];for(let b in B){let y=B[b];for(let E in y){let T=y[E];for(let R in T)u(T[R].object),delete T[R];delete y[E]}}delete n[z.id]}function p(z){for(let B in n){let b=n[B];for(let y in b){let E=b[y];if(E[z.id]===void 0)continue;let T=E[z.id];for(let R in T)u(T[R].object),delete T[R];delete E[z.id]}}}function _(z){for(let B in n){let b=n[B],y=z.isInstancedMesh===!0?z.id:0,E=b[y];if(E!==void 0){for(let T in E){let R=E[T];for(let F in R)u(R[F].object),delete R[F];delete E[T]}delete b[y],Object.keys(b).length===0&&delete n[B]}}}function C(){D(),o=!0,r!==i&&(r=i,c(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:D,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:p,initAttributes:v,enableAttribute:x,disableUnusedAttributes:S}}function Z_(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function J_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let p=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(p){return!(p!==Qn&&n.convert(p)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(p){let _=p===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(p!==Fn&&p!==Wn&&!_&&n.convert(p)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(p){if(p==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:S,maxVaryings:N,maxFragmentUniforms:M,maxSamples:L,samples:A}}function $_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Hn,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,g=s.get(h);if(!i||m===null||m.length===0||r&&!x)r?u(null):c();else{let S=r?0:n,N=S*4,M=g.clippingState||null;l.value=M,M=u(m,f,N,d);for(let L=0;L!==N;++L)M[L]=t[L];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let v=h!==null?h.length:0,x=null;if(v!==0){if(x=l.value,m!==!0||x===null){let g=d+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(x===null||x.length<g)&&(x=new Float32Array(g));for(let N=0,M=d;N!==v;++N,M+=4)o.copy(h[N]).applyMatrix4(S,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}var aa=class extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new li(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Ks});r.uniforms.tEquirect.value=t;let o=new xt(i,r),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=sn),new Vr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},gp=256,j_=3,Q_=20,Bp=256,kp=16,ev=3,tv=new H,nv=new be,wc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vr(1,10,null),this._boxMesh=new xt(new li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=tv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(nv));let x=new Vr(n,i,u);return x.position.copy(a),x.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(gp,cu(e))}_fromTexture(e,t){e.mapping===$s||e.mapping===Xr?this._setSize(e.image.length===0?gp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=xp(e,!1,!1),n=Math.log2(e)-j_;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===$s||e.mapping===Xr?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_p()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=iv(),this._integrationMaterial=sv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/kp);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-ev)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Bp*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rv());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function xp(s,e,t){return new aa(s,{minFilter:jn,generateMipmaps:e,type:di,colorSpace:En,depthBuffer:t})}function la(s,e,t){return new Jt({name:s,uniforms:e,vertexShader:yt.cube_vert,fragmentShader:t,side:pn,blending:Ks,depthTest:!1,depthWrite:!1})}function iv(){return la("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bp}u

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
	`)}function sv(){return la("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kp}},`

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
	`)}function rv(){return la("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Q_}
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
	`)}function _p(){return la("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vp(){return la("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ov(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Nl||d===Dl)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let v=new aa(m.height);return v.fromEquirectangularTexture(s,f),e.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===Nl||d===Dl,v=d===$s||d===Xr;if(m||v){let x=t.get(f),g=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new wc(s)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{let S=f.image;return m&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new wc(s)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",u),x.texture):null}}}return f}function a(f,d){return d===Nl?f.mapping=$s:d===Dl&&(f.mapping=Xr),f}function l(f){let d=0,m=6;for(let v=0;v<m;v++)f[v]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function av(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ps("WebGLRenderer: "+n+" extension not supported."),i}}}function lv(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let v=r.get(m);v&&(e.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function u(m){let v=m.attributes;for(let x in v)e.update(v[x],s.ARRAY_BUFFER)}function h(m){let v=m.index,x=m.attributes.position,g=0;if(x===void 0)return;let S=v!==null?v.array.length:x.array.length/3-1,N=x.count>=65535?Io:Co,M=new N(Math.ceil(S/3)*6,1),L=M.array;if(v!==null){let p=v.array;g=v.version;for(let _=0,C=0;_<S;_+=3){let D=p[_+0],z=p[_+1],B=p[_+2];L[C++]=D,L[C++]=z,L[C++]=z,L[C++]=B,L[C++]=B,L[C++]=D}}else{g=x.version;for(let p=0,_=0;p<S;p+=3){let C=p+0,D=p+1,z=p+2;L[_++]=C,L[_++]=D,L[_++]=D,L[_++]=z,L[_++]=z,L[_++]=C}}M.version=g;let A=r.get(m);A&&e.remove(A),r.set(m,M)}function f(m){let v=r.get(m);if(v){let x=m.index;x!==null&&v.version<x.version&&h(m)}else h(m);return r.get(m)}function d(){for(let m in i){let v=i[m].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function cv(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let v=0;for(let x=0;x<d;x++)v+=f[x];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function hv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uv(s,e,t){let n=new WeakMap,i=new Bt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let C=function(){p.dispose(),n.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],N=0;d===!0&&(N=1),m===!0&&(N=2),v===!0&&(N=3);let M=a.attributes.position.count*N,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*L*4*h),p=new Ao(A,M,L,h);p.type=Wn,p.needsUpdate=!0;let _=N*4;for(let D=0;D<h;D++){let z=x[D],B=g[D],b=S[D],y=M*L*4*D;for(let E=0;E<z.count;E++){let T=E*_;d===!0&&(i.fromBufferAttribute(z,E),A[y+T+0]=i.x,A[y+T+1]=i.y,A[y+T+2]=i.z,A[y+T+3]=0),m===!0&&(i.fromBufferAttribute(B,E),A[y+T+4]=i.x,A[y+T+5]=i.y,A[y+T+6]=i.z,A[y+T+7]=0),v===!0&&(i.fromBufferAttribute(b,E),A[y+T+8]=i.x,A[y+T+9]=i.y,A[y+T+10]=i.z,A[y+T+11]=b.itemSize===4?i.w:1)}}f={count:h,texture:p,size:new et(M,L)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function fv(s,e,t,n,i){let r=new WeakMap;function o(c){let u=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var dv={[Vh]:"LINEAR_TONE_MAPPING",[Wh]:"REINHARD_TONE_MAPPING",[Xh]:"CINEON_TONE_MAPPING",[qh]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[Js]:"NEUTRAL_TONE_MAPPING",[Yh]:"CUSTOM_TONE_MAPPING"};function pv(s,e,t,n,i,r){let o=new Gn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Pt;u.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let h=new vl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new xt(u,h),d=new qs(-1,1,1,-1,0,1),m=null,v=null,x=!1,g,S=null,N=[],M=!1;this.setSize=function(L,A){o.setSize(L,A),a!==null&&a.setSize(L,A),l!==null&&l.setSize(L,A);for(let p=0;p<N.length;p++){let _=N[p];_.setSize&&_.setSize(L,A)}},this.setEffects=function(L){N=L,M=N.length>0&&N[0].isRenderPass===!0;let A=o.width,p=o.height;N.length>0&&a===null&&(a=new Gn(A,p,{type:di,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(A,p,{type:di,depthBuffer:!1,stencilBuffer:!1}));let _=i===!0&&N.some(C=>C.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&c===null&&(c=new Ki(A,p),r===!0&&(c.format=ts,c.type=Qs)),o.dispose(),o.depthTexture=_?c:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let C=0;C<N.length;C++){let D=N[C];D.setSize&&D.setSize(A,p),_&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(L,A){if(x||L.toneMapping===wi&&N.length===0)return!1;if(S=A,A!==null){let p=A.width,_=A.height;(o.width!==p||o.height!==_)&&this.setSize(p,_)}return M===!1&&L.setRenderTarget(o),g=L.toneMapping,L.toneMapping=wi,!0},this.hasRenderPass=function(){return M},this.end=function(L,A){L.toneMapping=g,x=!0;let p=o,_=a;for(let C=0;C<N.length;C++){let D=N[C];D.enabled!==!1&&(D.render(L,_,p,A),D.needsSwap!==!1&&(p=_,_=_===a?l:a))}if(m!==L.outputColorSpace||v!==L.toneMapping){m=L.outputColorSpace,v=L.toneMapping,h.defines={},St.getTransfer(m)===Ot&&(h.defines.SRGB_TRANSFER="");let C=dv[v];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=p.texture,L.setRenderTarget(S),L.render(f,d),S=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Hp=new rn,Gp=new Ki(1,1),Vp=new Oo(1),Wp=new Ao,Xp=new pl,qp=new Fo,yp=[],Mp=[],Sp=new Float32Array(16),bp=new Float32Array(9),wp=new Float32Array(4);function $r(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=yp[i];if(r===void 0&&(r=new Float32Array(i),yp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Tc(s,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function mv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function xv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function _v(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function vv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;wp.set(n),s.uniformMatrix2fv(this.addr,!1,wp),ln(t,n)}}function yv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;bp.set(n),s.uniformMatrix3fv(this.addr,!1,bp),ln(t,n)}}function Mv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Sp.set(n),s.uniformMatrix4fv(this.addr,!1,Sp),ln(t,n)}}function Sv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function bv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function wv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function Tv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function Ev(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function Rv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function Cv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function Ec(s){return s.version===0&&(s.compareFunction=ru,s.needsUpdate=!0),s}function Iv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ec(Gp):r=Hp,t.setTexture2D(e||r,i)}function Pv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xp,i)}function Lv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ec(Vp):r=qp,t.setTextureCube(e||r,i)}function Nv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wp,i)}function Dv(s){switch(s){case 5126:return mv;case 35664:return gv;case 35665:return xv;case 35666:return _v;case 35674:return vv;case 35675:return yv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return bv;case 35668:case 35672:return wv;case 35669:case 35673:return Tv;case 5125:return Ev;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Uv(s,e){s.uniform1fv(this.addr,e)}function Fv(s,e){let t=$r(e,this.size,2);s.uniform2fv(this.addr,t)}function Ov(s,e){let t=$r(e,this.size,3);s.uniform3fv(this.addr,t)}function zv(s,e){let t=$r(e,this.size,4);s.uniform4fv(this.addr,t)}function Bv(s,e){let t=$r(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kv(s,e){let t=$r(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Hv(s,e){let t=$r(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gv(s,e){s.uniform1iv(this.addr,e)}function Vv(s,e){s.uniform2iv(this.addr,e)}function Wv(s,e){s.uniform3iv(this.addr,e)}function Xv(s,e){s.uniform4iv(this.addr,e)}function qv(s,e){s.uniform1uiv(this.addr,e)}function Yv(s,e){s.uniform2uiv(this.addr,e)}function Kv(s,e){s.uniform3uiv(this.addr,e)}function Zv(s,e){s.uniform4uiv(this.addr,e)}function Jv(s,e,t){let n=this.cache,i=e.length,r=Tc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ec(Gp):o=Hp;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function $v(s,e,t){let n=this.cache,i=e.length,r=Tc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xp,r[o])}function jv(s,e,t){let n=this.cache,i=e.length,r=Tc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Ec(Vp):o=qp;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function Qv(s,e,t){let n=this.cache,i=e.length,r=Tc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wp,r[o])}function ey(s){switch(s){case 5126:return Uv;case 35664:return Fv;case 35665:return Ov;case 35666:return zv;case 35674:return Bv;case 35675:return kv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return Vv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return Kv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Qv}}var bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dv(t.type)}},wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ey(t.type)}},Tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Mu=/(\w+)(\])?(\[|\.)?/g;function Tp(s,e){s.seq.push(e),s.map[e.id]=e}function ty(s,e,t){let n=s.name,i=n.length;for(Mu.lastIndex=0;;){let r=Mu.exec(n),o=Mu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Tp(t,c===void 0?new bu(a,s,e):new wu(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Tu(a),Tp(t,h)),t=h}}}var Zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ty(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Ep(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var ny=37297,iy=0;function sy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ap=new at;function ry(s){St._getMatrix(Ap,St.workingColorSpace,s);let e=`mat3( ${Ap.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(s)){case To:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sy(s.getShaderSource(e),a)}else return r}function oy(s,e){let t=ry(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ay={[Vh]:"Linear",[Wh]:"Reinhard",[Xh]:"Cineon",[qh]:"ACESFilmic",[Kh]:"AgX",[Js]:"Neutral",[Yh]:"Custom"};function ly(s,e){let t=ay[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bc=new H;function cy(){St.getLuminanceCoefficients(bc);let s=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function uy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fy(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function oa(s){return s!==""}function Cp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ip(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(s){return s.replace(dy,py)}function py(s,e){let t=yt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Eu(t)}var my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(s){return s.replace(my,gy)}function gy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var xy={[Ys]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function _y(s){return xy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vy={[Xr]:"ENVMAP_MODE_REFRACTION"};function yy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":vy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var My={[Ll]:"ENVMAP_BLENDING_MULTIPLY",[Yd]:"ENVMAP_BLENDING_MIX",[Kd]:"ENVMAP_BLENDING_ADD"};function Sy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":My[s.combine]||"ENVMAP_BLENDING_NONE"}function by(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_y(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=yy(t),h=Sy(t),f=hy(t),d=uy(r),m=i.createProgram(),v,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(oa).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(oa).join(`
`),x.length>0&&(x+=`
`)):(v=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),x=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?yt.tonemapping_pars_fragment:"",t.toneMapping!==wi?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),o=Eu(o),o=Cp(o,t),o=Ip(o,t),a=Eu(a),a=Cp(a,t),a=Ip(a,t),o=Pp(o),a=Pp(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=g+v+o,N=g+x+a,M=Ep(i,i.VERTEX_SHADER,S),L=Ep(i,i.FRAGMENT_SHADER,N);i.attachShader(m,M),i.attachShader(m,L),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function A(D){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(m)||"",B=i.getShaderInfoLog(M)||"",b=i.getShaderInfoLog(L)||"",y=z.trim(),E=B.trim(),T=b.trim(),R=!0,F=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(R=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,M,L);else{let O=Rp(i,M,"vertex"),V=Rp(i,L,"fragment");ot("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+y+`
`+O+`
`+V)}else y!==""?je("WebGLProgram: Program Info Log:",y):(E===""||T==="")&&(F=!1);F&&(D.diagnostics={runnable:R,programLog:y,vertexShader:{log:E,prefix:v},fragmentShader:{log:T,prefix:x}})}i.deleteShader(M),i.deleteShader(L),p=new Zr(i,m),_=fy(i,m)}let p;this.getUniforms=function(){return p===void 0&&A(this),p};let _;this.getAttributes=function(){return _===void 0&&A(this),_};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(m,ny)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=L,this}var wy=0,Au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ru(e),t.set(e,n)),n}},Ru=class{constructor(e){this.id=wy++,this.code=e,this.usedTimes=0}};function Ty(s){return s===xs||s===Qo||s===ea}function Ey(s,e,t,n,i,r){let o=new Dr,a=new Au,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(p){return l.add(p),p===0?"uv":`uv${p}`}function m(p,_,C,D,z,B){let b=D.fog,y=z.geometry,E=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?D.environment:null,T=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,R=e.get(p.envMap||E,T),F=f[p.type],O=n.precision;p.precision!==null&&(O=n.getMaxPrecision(p.precision),O!==p.precision&&je("WebGLProgram.getParameters:",p.precision,"not supported, using",O,"instead."));let V=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,Y=V!==void 0?V.length:0,Z=0;y.morphAttributes.position!==void 0&&(Z=1),y.morphAttributes.normal!==void 0&&(Z=2),y.morphAttributes.color!==void 0&&(Z=3);let oe,q,ee,he;if(F){let Fe=Ai[F];oe=Fe.vertexShader,q=Fe.fragmentShader}else{oe=p.vertexShader,q=p.fragmentShader;let Fe=a.getVertexShaderStage(p),Nt=a.getFragmentShaderStage(p);a.update(p,Fe,Nt),ee=Fe.id,he=Nt.id}let Pe=s.getRenderTarget(),ue=s.state.buffers.depth.getReversed(),Ce=z.isInstancedMesh===!0,Xe=z.isBatchedMesh===!0,Ze=!!p.map,gt=!!p.matcap,It=!!R,rt=It&&R.isPMREMTexture===!0,ne=!!p.aoMap,ge=!!p.lightMap,pe=!!p.bumpMap&&p.wireframe===!1,Ue=!!p.normalMap,xe=!!p.displacementMap,ie=!!p.emissiveMap,J=!!p.metalnessMap,Me=!!p.roughnessMap,_e=p.anisotropy>0,k=p.clearcoat>0,it=p.diffuseRoughness>0,st=p.dispersion>0,Je=p.retroreflectivity>0,we=p.iridescence>0,Rt=p.sheen>0,ke=p.transmission>0,qe=_e&&!!p.anisotropyMap,I=k&&!!p.clearcoatMap,w=k&&!!p.clearcoatNormalMap,X=k&&!!p.clearcoatRoughnessMap,ae=it&&!!p.diffuseRoughnessMap,te=we&&!!p.iridescenceMap,ye=we&&!!p.iridescenceThicknessMap,me=Rt&&!!p.sheenColorMap,se=Rt&&!!p.sheenRoughnessMap,le=!!p.specularMap,Re=!!p.specularColorMap,G=!!p.specularIntensityMap,fe=ke&&!!p.transmissionMap,ce=ke&&!!p.thicknessMap,Ie=!!p.gradientMap,Ee=!!p.alphaMap,Ne=p.alphaTest>0,$e=!!p.alphaHash,ht=!!p.extensions,Te=wi;p.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Te=s.toneMapping);let Qe=rt?R.isCompressedCubeTexture?R.image[0].mipmaps:R.mipmaps:null,ut={shaderID:F,shaderType:p.type,shaderName:p.name,vertexShader:oe,fragmentShader:q,defines:p.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:O,batching:Xe,batchingColor:Xe&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:Ze,matcap:gt,envMap:It,envMapMode:It&&R.mapping,envMapPMREM:rt,envMapMaxLod:rt?Qe.length-1:null,envMapSize:rt?Qe[0].width:null,aoMap:ne,lightMap:ge,bumpMap:pe,normalMap:Ue,displacementMap:xe,emissiveMap:ie,normalMapObjectSpace:Ue&&p.normalMapType===ep,normalMapTangentSpace:Ue&&p.normalMapType===ia,packedNormalMap:Ue&&p.normalMapType===ia&&Ty(p.normalMap.format),metalnessMap:J,roughnessMap:Me,anisotropy:_e,anisotropyMap:qe,clearcoat:k,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:X,diffuseRoughness:it,diffuseRoughnessMap:ae,dispersion:st,retroreflection:Je,iridescence:we,iridescenceMap:te,iridescenceThicknessMap:ye,sheen:Rt,sheenColorMap:me,sheenRoughnessMap:se,specularMap:le,specularColorMap:Re,specularIntensityMap:G,transmission:ke,transmissionMap:fe,thicknessMap:ce,gradientMap:Ie,opaque:p.transparent===!1&&p.blending===ui&&p.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Ne,alphaHash:$e,combine:p.combine,mapUv:Ze&&d(p.map.channel),aoMapUv:ne&&d(p.aoMap.channel),lightMapUv:ge&&d(p.lightMap.channel),bumpMapUv:pe&&d(p.bumpMap.channel),normalMapUv:Ue&&d(p.normalMap.channel),displacementMapUv:xe&&d(p.displacementMap.channel),emissiveMapUv:ie&&d(p.emissiveMap.channel),metalnessMapUv:J&&d(p.metalnessMap.channel),roughnessMapUv:Me&&d(p.roughnessMap.channel),anisotropyMapUv:qe&&d(p.anisotropyMap.channel),clearcoatMapUv:I&&d(p.clearcoatMap.channel),clearcoatNormalMapUv:w&&d(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&d(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&d(p.diffuseRoughnessMap.channel),iridescenceMapUv:te&&d(p.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&d(p.iridescenceThicknessMap.channel),sheenColorMapUv:me&&d(p.sheenColorMap.channel),sheenRoughnessMapUv:se&&d(p.sheenRoughnessMap.channel),specularMapUv:le&&d(p.specularMap.channel),specularColorMapUv:Re&&d(p.specularColorMap.channel),specularIntensityMapUv:G&&d(p.specularIntensityMap.channel),transmissionMapUv:fe&&d(p.transmissionMap.channel),thicknessMapUv:ce&&d(p.thicknessMap.channel),alphaMapUv:Ee&&d(p.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(Ue||_e),vertexNormals:!!y.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!y.attributes.uv&&(Ze||Ee),fog:!!b,useFog:p.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||y.attributes.normal===void 0&&Ue===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Z,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:B.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ze&&p.map.isVideoTexture===!0&&St.getTransfer(p.map.colorSpace)===Ot,decodeVideoTextureEmissive:ie&&p.emissiveMap.isVideoTexture===!0&&St.getTransfer(p.emissiveMap.colorSpace)===Ot,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===$t,flipSided:p.side===pn,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:ht&&p.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&p.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function v(p){let _=[];if(p.shaderID?_.push(p.shaderID):(_.push(p.customVertexShaderID),_.push(p.customFragmentShaderID)),p.defines!==void 0)for(let C in p.defines)_.push(C),_.push(p.defines[C]);return p.isRawShaderMaterial===!1&&(x(_,p),g(_,p),_.push(s.outputColorSpace)),_.push(p.customProgramCacheKey),_.join()}function x(p,_){p.push(_.precision),p.push(_.outputColorSpace),p.push(_.envMapMode),p.push(_.envMapPMREM),p.push(_.envMapMaxLod),p.push(_.envMapSize),p.push(_.mapUv),p.push(_.alphaMapUv),p.push(_.lightMapUv),p.push(_.aoMapUv),p.push(_.bumpMapUv),p.push(_.normalMapUv),p.push(_.displacementMapUv),p.push(_.emissiveMapUv),p.push(_.metalnessMapUv),p.push(_.roughnessMapUv),p.push(_.anisotropyMapUv),p.push(_.clearcoatMapUv),p.push(_.clearcoatNormalMapUv),p.push(_.clearcoatRoughnessMapUv),p.push(_.diffuseRoughnessMapUv),p.push(_.iridescenceMapUv),p.push(_.iridescenceThicknessMapUv),p.push(_.sheenColorMapUv),p.push(_.sheenRoughnessMapUv),p.push(_.specularMapUv),p.push(_.specularColorMapUv),p.push(_.specularIntensityMapUv),p.push(_.transmissionMapUv),p.push(_.thicknessMapUv),p.push(_.combine),p.push(_.fogExp2),p.push(_.sizeAttenuation),p.push(_.morphTargetsCount),p.push(_.numSunLights),p.push(_.numDirLights),p.push(_.numPointLights),p.push(_.numSpotLights),p.push(_.numSpotLightMaps),p.push(_.numHemiLights),p.push(_.numRectAreaLights),p.push(_.numSunLightShadows),p.push(_.numDirLightShadows),p.push(_.numPointLightShadows),p.push(_.numSpotLightShadows),p.push(_.numSpotLightShadowsWithMaps),p.push(_.numLightProbes),p.push(_.numLightProbeGrids),p.push(_.shadowMapType),p.push(_.toneMapping),p.push(_.numClippingPlanes),p.push(_.numClipIntersection),p.push(_.depthPacking)}function g(p,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),p.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),p.push(o.mask)}function S(p){let _=f[p.type],C;if(_){let D=Ai[_];C=dp.clone(D.uniforms)}else C=p.uniforms;return C}function N(p,_){let C=u.get(_);return C!==void 0?++C.usedTimes:(C=new by(s,_,p,i),c.push(C),u.set(_,C)),C}function M(p){if(--p.usedTimes===0){let _=c.indexOf(p);c[_]=c[c.length-1],c.pop(),u.delete(p.cacheKey),p.destroy()}}function L(p){a.remove(p)}function A(){a.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:S,acquireProgram:N,releaseProgram:M,releaseShaderCache:L,programs:c,dispose:A}}function Ay(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ry(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Np(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,v,x,g){let S=s[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:x,group:g},s[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=m,S.materialVariant=o(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=x,S.group=g),e++,S}function l(f,d,m,v,x,g,S){S.reversedDepth===!0&&(x=-x);let N=a(f,d,m,v,x,g);m.transmission>0?n.push(N):m.transparent===!0?i.push(N):t.push(N)}function c(f,d,m,v,x,g){let S=a(f,d,m,v,x,g);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):t.unshift(S)}function u(f,d){t.length>1&&t.sort(f||Ry),n.length>1&&n.sort(d||Np),i.length>1&&i.sort(d||Np)}function h(){for(let f=e,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:h,sort:u}}function Cy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Dp,s.set(n,[o])):i>=r.length?(o=new Dp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Iy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new be};break;case"SpotLight":t={position:new H,direction:new H,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function Py(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Ly=0;function Ny(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dy(s){let e=new Iy,t=Py(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new tt,o=new tt;function a(c){let u=0,h=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,m=0,v=0,x=0,g=0,S=0,N=0,M=0,L=0,A=0,p=0,_=0,C=0,D=0;c.sort(Ny);for(let B=0,b=c.length;B<b;B++){let y=c[B],E=y.color,T=y.intensity,R=y.distance,F=null;if(y.shadow&&y.shadow.map&&(y.shadow.map.texture.format===xs?F=y.shadow.map.texture:F=y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)u+=E.r*T,h+=E.g*T,f+=E.b*T;else if(y.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(y.sh.coefficients[O],T);D++}else if(y.isSunLight){let O=e.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let V=y.shadow,Y=t.get(y);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[m]=Y,n.sunShadowMap[m]=F;let Z=V.getViewportCount();for(let oe=0;oe<Z;oe++)n.sunShadowMatrix[v+oe]=V.getMatrix(oe),n.sunShadowCascade[v+oe]=V._cascadeData[oe];v+=Z,m++}n.sun[d]=O,d++}else if(y.isDirectionalLight){let O=e.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let V=y.shadow,Y=t.get(y);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.directionalShadow[x]=Y,n.directionalShadowMap[x]=F,n.directionalShadowMatrix[x]=y.shadow.matrix,L++}n.directional[x]=O,x++}else if(y.isSpotLight){let O=e.get(y);O.position.setFromMatrixPosition(y.matrixWorld),O.color.copy(E).multiplyScalar(T),O.distance=R,O.coneCos=Math.cos(y.angle),O.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),O.decay=y.decay,n.spot[S]=O;let V=y.shadow;if(y.map&&(n.spotLightMap[_]=y.map,_++,V.updateMatrices(y),y.castShadow&&C++),n.spotLightMatrix[S]=V.matrix,y.castShadow){let Y=t.get(y);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=F,p++}S++}else if(y.isRectAreaLight){let O=e.get(y);O.color.copy(E).multiplyScalar(T),O.halfWidth.set(y.width*.5,0,0),O.halfHeight.set(0,y.height*.5,0),n.rectArea[N]=O,N++}else if(y.isPointLight){let O=e.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity),O.distance=y.distance,O.decay=y.decay,y.castShadow){let V=y.shadow,Y=t.get(y);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=y.shadow.matrix,A++}n.point[g]=O,g++}else if(y.isHemisphereLight){let O=e.get(y);O.skyColor.copy(y.color).multiplyScalar(T),O.groundColor.copy(y.groundColor).multiplyScalar(T),n.hemi[M]=O,M++}}N>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let z=n.hash;(z.sunLength!==d||z.directionalLength!==x||z.pointLength!==g||z.spotLength!==S||z.rectAreaLength!==N||z.hemiLength!==M||z.numSunShadows!==m||z.numDirectionalShadows!==L||z.numPointShadows!==A||z.numSpotShadows!==p||z.numSpotMaps!==_||z.numLightProbes!==D)&&(n.sun.length=d,n.directional.length=x,n.spot.length=S,n.rectArea.length=N,n.point.length=g,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=p,n.spotShadowMap.length=p,n.spotLightMatrix.length=p+_-C,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,z.sunLength=d,z.directionalLength=x,z.pointLength=g,z.spotLength=S,z.rectAreaLength=N,z.hemiLength=M,z.numSunShadows=m,z.numDirectionalShadows=L,z.numPointShadows=A,z.numSpotShadows=p,z.numSpotMaps=_,z.numLightProbes=D,n.version=Ly++)}function l(c,u){let h=0,f=0,d=0,m=0,v=0,x=0,g=u.matrixWorldInverse;for(let S=0,N=c.length;S<N;S++){let M=c[S];if(M.isSunLight){let L=n.sun[h];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(g),h++}else if(M.isDirectionalLight){let L=n.directional[f];L.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(i),L.direction.transformDirection(g),f++}else if(M.isSpotLight){let L=n.spot[m];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(g),L.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(i),L.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let L=n.rectArea[v];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let L=n.point[d];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let L=n.hemi[x];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Up(s){let e=new Dy(s),t=[],n=[],i=[];function r(h){u.camera=h,t.length=0,n.length=0,i.length=0}function o(h){h.isLightProbeGrid?i.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),i.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Uy(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Up(s),e.set(i,[a])):r>=o.length?(a=new Up(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`,zy=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],By=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Fp=new tt,ra=new H,Su=new H;function ky(s,e,t){let n=new ps,i=new et,r=new et,o=new Bt,a=new yl,l=new Ml,c={},u=t.maxTextureSize,h={[bi]:pn,[pn]:bi,[$t]:$t},f=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Fy,fragmentShader:Oy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Pt;m.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new xt(m,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let g=this.type;this.render=function(A,p,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===Rd&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);let C=s.getRenderTarget(),D=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Ks),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let b=g!==this.type;b&&p.traverse(function(y){y.material&&(Array.isArray(y.material)?y.material.forEach(E=>E.needsUpdate=!0):y.material.needsUpdate=!0)});for(let y=0,E=A.length;y<E;y++){let T=A[y],R=T.shadow;if(R===void 0){je("WebGLShadowMap:",T,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);let F=R.getFrameExtents();i.multiply(F),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/F.x),i.x=r.x*F.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/F.y),i.y=r.y*F.y,R.mapSize.y=r.y));let O=s.state.buffers.depth.getReversed();if(R.camera._reversedDepth=O,R.map===null||b===!0){if(R.map!==null&&(R.map.depthTexture!==null&&(R.map.depthTexture.dispose(),R.map.depthTexture=null),R.map.dispose()),this.type===Wr){if(T.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}R.map=new Gn(i.x,i.y,{format:xs,type:di,minFilter:sn,magFilter:sn,generateMipmaps:!1}),R.map.texture.name=T.name+".shadowMap",R.map.depthTexture=new Ki(i.x,i.y,Wn),R.map.depthTexture.name=T.name+".shadowMapDepth",R.map.depthTexture.format=Yi,R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Zt,R.map.depthTexture.magFilter=Zt}else T.isPointLight?(R.map=new aa(i.x),R.map.depthTexture=new Oo(i.x,fi)):(R.map=new Gn(i.x,i.y),R.map.depthTexture=new Ki(i.x,i.y,fi)),R.map.depthTexture.name=T.name+".shadowMap",R.map.depthTexture.format=Yi,this.type===Ys?(R.map.depthTexture.compareFunction=O?su:iu,R.map.depthTexture.minFilter=sn,R.map.depthTexture.magFilter=sn):(R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Zt,R.map.depthTexture.magFilter=Zt);R.camera.updateProjectionMatrix()}R.map.isWebGLCubeRenderTarget!==!0&&(R.map.width!==i.x||R.map.height!==i.y)&&R.map.setSize(i.x,i.y);let V=R.map.isWebGLCubeRenderTarget?6:R.getViewportCount();T.isPointLight!==!0&&R.updateMatrices(T,_);let Y=(R.camera.layers.mask&4294967294)!==0?R.camera.layers:_.layers;for(let Z=0;Z<V;Z++){let oe=R.getCamera(Z);if(T.isPointLight){let q=R.camera,ee=R.matrix,he=T.distance||q.far;he!==q.far&&(q.far=he,q.updateProjectionMatrix()),ra.setFromMatrixPosition(T.matrixWorld),q.position.copy(ra),Su.copy(q.position),Su.add(zy[Z]),q.up.copy(By[Z]),q.lookAt(Su),q.updateMatrixWorld(),ee.makeTranslation(-ra.x,-ra.y,-ra.z),Fp.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),R._frustum.setFromProjectionMatrix(Fp,q.coordinateSystem,q.reversedDepth)}if(R.map.isWebGLCubeRenderTarget)s.setRenderTarget(R.map,Z),s.clear();else{Z===0&&(s.setRenderTarget(R.map),s.clear());let q=R.getViewport(Z);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),B.viewport(o)}n=R.getFrustum(Z),M(p,_,oe,T,Y,this.type)}R.isPointLightShadow!==!0&&this.type===Wr&&S(R,_),R.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(C,D,z)};function S(A,p){let _=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Gn(i.x,i.y,{format:xs,type:di}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(p,null,_,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(p,null,_,d,v,null)}function N(A,p,_,C){let D=null,z=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)D=z;else if(D=_.isPointLight===!0?l:a,s.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let B=D.uuid,b=p.uuid,y=c[B];y===void 0&&(y={},c[B]=y);let E=y[b];E===void 0&&(E=D.clone(),y[b]=E,p.addEventListener("dispose",L)),D=E}if(D.visible=p.visible,D.wireframe=p.wireframe,C===Wr?D.side=p.shadowSide!==null?p.shadowSide:p.side:D.side=p.shadowSide!==null?p.shadowSide:h[p.side],D.alphaMap=p.alphaMap,D.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,D.map=p.map,D.clipShadows=p.clipShadows,D.clippingPlanes=p.clippingPlanes,D.clipIntersection=p.clipIntersection,D.displacementMap=p.displacementMap,D.displacementScale=p.displacementScale,D.displacementBias=p.displacementBias,D.wireframeLinewidth=p.wireframeLinewidth,D.linewidth=p.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let B=s.properties.get(D);B.light=_}return D}function M(A,p,_,C,D,z){if(A.visible===!1)return;if(A.layers.test(D)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===Wr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let y=e.update(A),E=A.material;if(Array.isArray(E)){let T=y.groups;for(let R=0,F=T.length;R<F;R++){let O=T[R],V=E[O.materialIndex];if(V&&V.visible){let Y=N(A,V,C,z);A.onBeforeShadow(s,A,p,_,y,Y,O),s.renderBufferDirect(_,null,y,Y,A,O),A.onAfterShadow(s,A,p,_,y,Y,O)}}}else if(E.visible){let T=N(A,E,C,z);A.onBeforeShadow(s,A,p,_,y,T,null),s.renderBufferDirect(_,null,y,T,A,null),A.onAfterShadow(s,A,p,_,y,T,null)}}let b=A.children;for(let y=0,E=b.length;y<E;y++)M(b[y],p,_,C,D,z)}function L(A){A.target.removeEventListener("dispose",L);for(let _ in c){let C=c[_],D=A.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function Hy(s,e){function t(){let G=!1,fe=new Bt,ce=null,Ie=new Bt(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!G&&(s.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){G=Ee},setClear:function(Ee,Ne,$e,ht,Te){Te===!0&&(Ee*=ht,Ne*=ht,$e*=ht),fe.set(Ee,Ne,$e,ht),Ie.equals(fe)===!1&&(s.clearColor(Ee,Ne,$e,ht),Ie.copy(fe))},reset:function(){G=!1,ce=null,Ie.set(-1,0,0,0)}}}function n(){let G=!1,fe=!1,ce=null,Ie=null,Ee=null;return{setReversed:function(Ne){if(fe!==Ne){let $e=e.get("EXT_clip_control");Ne?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),fe=Ne;let ht=Ee;Ee=null,this.setClear(ht)}},getReversed:function(){return fe},setTest:function(Ne){Ne?ue(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Ne){ce!==Ne&&!G&&(s.depthMask(Ne),ce=Ne)},setFunc:function(Ne){if(fe&&(Ne=hp[Ne]),Ie!==Ne){switch(Ne){case rl:s.depthFunc(s.NEVER);break;case ol:s.depthFunc(s.ALWAYS);break;case al:s.depthFunc(s.LESS);break;case Rr:s.depthFunc(s.LEQUAL);break;case ll:s.depthFunc(s.EQUAL);break;case cl:s.depthFunc(s.GEQUAL);break;case hl:s.depthFunc(s.GREATER);break;case ul:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=Ne}},setLocked:function(Ne){G=Ne},setClear:function(Ne){Ee!==Ne&&(Ee=Ne,fe&&(Ne=1-Ne),s.clearDepth(Ne))},reset:function(){G=!1,ce=null,Ie=null,Ee=null,fe=!1}}}function i(){let G=!1,fe=null,ce=null,Ie=null,Ee=null,Ne=null,$e=null,ht=null,Te=null;return{setTest:function(Qe){G||(Qe?ue(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(Qe){fe!==Qe&&!G&&(s.stencilMask(Qe),fe=Qe)},setFunc:function(Qe,ut,Fe){(ce!==Qe||Ie!==ut||Ee!==Fe)&&(s.stencilFunc(Qe,ut,Fe),ce=Qe,Ie=ut,Ee=Fe)},setOp:function(Qe,ut,Fe){(Ne!==Qe||$e!==ut||ht!==Fe)&&(s.stencilOp(Qe,ut,Fe),Ne=Qe,$e=ut,ht=Fe)},setLocked:function(Qe){G=Qe},setClear:function(Qe){Te!==Qe&&(s.clearStencil(Qe),Te=Qe)},reset:function(){G=!1,fe=null,ce=null,Ie=null,Ee=null,Ne=null,$e=null,ht=null,Te=null}}}let r=new t,o=new n,a=new i,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],v=null,x=!1,g=null,S=null,N=null,M=null,L=null,A=null,p=null,_=new be(0,0,0),C=0,D=!1,z=null,B=null,b=null,y=null,E=null,T=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,F=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),R=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),R=F>=2);let V=null,Y={},Z=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),q=new Bt().fromArray(Z),ee=new Bt().fromArray(oe);function he(G,fe,ce,Ie){let Ee=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(G,Ne),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ce;$e++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(fe+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Ne}let Pe={};Pe[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(s.DEPTH_TEST),o.setFunc(Rr),pe(!1),Ue(zh),ue(s.CULL_FACE),ne(Ks);function ue(G){u[G]!==!0&&(s.enable(G),u[G]=!0)}function Ce(G){u[G]!==!1&&(s.disable(G),u[G]=!1)}function Xe(G,fe){return f[G]!==fe?(s.bindFramebuffer(G,fe),f[G]=fe,G===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=fe),G===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ze(G,fe){let ce=m,Ie=!1;if(G){ce=d.get(fe),ce===void 0&&(ce=[],d.set(fe,ce));let Ee=G.textures;if(ce.length!==Ee.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,$e=Ee.length;Ne<$e;Ne++)ce[Ne]=s.COLOR_ATTACHMENT0+Ne;ce.length=Ee.length,Ie=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ce)}function gt(G){return v!==G?(s.useProgram(G),v=G,!0):!1}let It={[Zs]:s.FUNC_ADD,[Id]:s.FUNC_SUBTRACT,[Pd]:s.FUNC_REVERSE_SUBTRACT};It[Ld]=s.MIN,It[Nd]=s.MAX;let rt={[Dd]:s.ZERO,[Ud]:s.ONE,[Fd]:s.SRC_COLOR,[Hh]:s.SRC_ALPHA,[Gd]:s.SRC_ALPHA_SATURATE,[kd]:s.DST_COLOR,[zd]:s.DST_ALPHA,[Od]:s.ONE_MINUS_SRC_COLOR,[Gh]:s.ONE_MINUS_SRC_ALPHA,[Hd]:s.ONE_MINUS_DST_COLOR,[Bd]:s.ONE_MINUS_DST_ALPHA,[Vd]:s.CONSTANT_COLOR,[Wd]:s.ONE_MINUS_CONSTANT_COLOR,[Xd]:s.CONSTANT_ALPHA,[qd]:s.ONE_MINUS_CONSTANT_ALPHA};function ne(G,fe,ce,Ie,Ee,Ne,$e,ht,Te,Qe){if(G===Ks){x===!0&&(Ce(s.BLEND),x=!1);return}if(x===!1&&(ue(s.BLEND),x=!0),G!==Cd){if(G!==g||Qe!==D){if((S!==Zs||L!==Zs)&&(s.blendEquation(s.FUNC_ADD),S=Zs,L=Zs),Qe)switch(G){case ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Un:s.blendFunc(s.ONE,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ot("WebGLState: Invalid blending: ",G);break}else switch(G){case ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Un:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bh:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",G);break}N=null,M=null,A=null,p=null,_.set(0,0,0),C=0,g=G,D=Qe}return}Ee=Ee||fe,Ne=Ne||ce,$e=$e||Ie,(fe!==S||Ee!==L)&&(s.blendEquationSeparate(It[fe],It[Ee]),S=fe,L=Ee),(ce!==N||Ie!==M||Ne!==A||$e!==p)&&(s.blendFuncSeparate(rt[ce],rt[Ie],rt[Ne],rt[$e]),N=ce,M=Ie,A=Ne,p=$e),(ht.equals(_)===!1||Te!==C)&&(s.blendColor(ht.r,ht.g,ht.b,Te),_.copy(ht),C=Te),g=G,D=!1}function ge(G,fe){G.side===$t?Ce(s.CULL_FACE):ue(s.CULL_FACE);let ce=G.side===pn;fe&&(ce=!ce),pe(ce),G.blending===ui&&G.transparent===!1?ne(Ks):ne(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Ie=G.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function pe(G){z!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),z=G)}function Ue(G){G!==Ed?(ue(s.CULL_FACE),G!==B&&(G===zh?s.cullFace(s.BACK):G===Ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),B=G}function xe(G){G!==b&&(R&&s.lineWidth(G),b=G)}function ie(G,fe,ce){G?(ue(s.POLYGON_OFFSET_FILL),(y!==fe||E!==ce)&&(y=fe,E=ce,o.getReversed()&&(fe=-fe,ce=-ce),s.polygonOffset(fe,ce))):Ce(s.POLYGON_OFFSET_FILL)}function J(G){G?ue(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Me(G){G===void 0&&(G=s.TEXTURE0+T-1),V!==G&&(s.activeTexture(G),V=G)}function _e(G,fe,ce){ce===void 0&&(V===null?ce=s.TEXTURE0+T-1:ce=V);let Ie=Y[ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},Y[ce]=Ie),(Ie.type!==G||Ie.texture!==fe)&&(V!==ce&&(s.activeTexture(ce),V=ce),s.bindTexture(G,fe||Pe[G]),Ie.type=G,Ie.texture=fe)}function k(){let G=Y[V];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function it(){try{s.compressedTexImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function st(){try{s.compressedTexImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function Je(){try{s.texSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function we(){try{s.texSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function Rt(){try{s.compressedTexSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function ke(){try{s.compressedTexSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function qe(){try{s.texStorage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function I(){try{s.texStorage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function w(){try{s.texImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function X(){try{s.texImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function ae(G){return h[G]!==void 0?h[G]:s.getParameter(G)}function te(G,fe){h[G]!==fe&&(s.pixelStorei(G,fe),h[G]=fe)}function ye(G){q.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),q.copy(G))}function me(G){ee.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),ee.copy(G))}function se(G,fe){let ce=c.get(fe);ce===void 0&&(ce=new WeakMap,c.set(fe,ce));let Ie=ce.get(G);Ie===void 0&&(Ie=s.getUniformBlockIndex(fe,G.name),s.uniformBlockBinding(fe,Ie,Ie),ce.set(G,Ie))}function le(G,fe,ce){let Ee=c.get(fe).get(G);l[Ee]!==ce&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ee,ce),l[Ee]=ce)}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},V=null,Y={},f={},l={},d=new WeakMap,m=[],v=null,x=!1,g=null,S=null,N=null,M=null,L=null,A=null,p=null,_=new be(0,0,0),C=0,D=!1,z=null,B=null,b=null,y=null,E=null,q.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Ce,bindFramebuffer:Xe,drawBuffers:Ze,useProgram:gt,setBlending:ne,setMaterial:ge,setFlipSided:pe,setCullFace:Ue,setLineWidth:xe,setPolygonOffset:ie,setScissorTest:J,activeTexture:Me,bindTexture:_e,unbindTexture:k,compressedTexImage2D:it,compressedTexImage3D:st,texImage2D:w,texImage3D:X,pixelStorei:te,getParameter:ae,updateUBOMapping:se,uniformBlockBinding:le,texStorage2D:qe,texStorage3D:I,texSubImage2D:Je,texSubImage3D:we,compressedTexSubImage2D:Rt,compressedTexSubImage3D:ke,scissor:ye,viewport:me,reset:Re}}function Gy(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,h=new Set,f,d=new WeakMap,m=new Set,v=new FinalizationRegistry(I=>m.delete(I)),x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return x?new OffscreenCanvas(I,w):Pr("canvas")}function S(I,w,X){let ae=1,te=qe(I);if((te.width>X||te.height>X)&&(ae=X/Math.max(te.width,te.height)),ae<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let ye=Math.floor(ae*te.width),me=Math.floor(ae*te.height);f===void 0&&(f=g(ye,me));let se=w?g(ye,me):f;return se.width=ye,se.height=me,se.getContext("2d").drawImage(I,0,0,ye,me),je("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ye+"x"+me+")."),se}else return"data"in I&&je("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function N(I){return I.generateMipmaps}function M(I){s.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(I,w,X,ae,te,ye=!1){if(I!==null){if(s[I]!==void 0)return s[I];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me;ae&&(me=e.get("EXT_texture_norm16"),me||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=w;if(w===s.RED&&(X===s.FLOAT&&(se=s.R32F),X===s.HALF_FLOAT&&(se=s.R16F),X===s.UNSIGNED_BYTE&&(se=s.R8),X===s.UNSIGNED_SHORT&&me&&(se=me.R16_EXT),X===s.SHORT&&me&&(se=me.R16_SNORM_EXT)),w===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(se=s.R8UI),X===s.UNSIGNED_SHORT&&(se=s.R16UI),X===s.UNSIGNED_INT&&(se=s.R32UI),X===s.BYTE&&(se=s.R8I),X===s.SHORT&&(se=s.R16I),X===s.INT&&(se=s.R32I)),w===s.RG&&(X===s.FLOAT&&(se=s.RG32F),X===s.HALF_FLOAT&&(se=s.RG16F),X===s.UNSIGNED_BYTE&&(se=s.RG8),X===s.UNSIGNED_SHORT&&me&&(se=me.RG16_EXT),X===s.SHORT&&me&&(se=me.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(se=s.RG8UI),X===s.UNSIGNED_SHORT&&(se=s.RG16UI),X===s.UNSIGNED_INT&&(se=s.RG32UI),X===s.BYTE&&(se=s.RG8I),X===s.SHORT&&(se=s.RG16I),X===s.INT&&(se=s.RG32I)),w===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(se=s.RGB8UI),X===s.UNSIGNED_SHORT&&(se=s.RGB16UI),X===s.UNSIGNED_INT&&(se=s.RGB32UI),X===s.BYTE&&(se=s.RGB8I),X===s.SHORT&&(se=s.RGB16I),X===s.INT&&(se=s.RGB32I)),w===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),X===s.UNSIGNED_INT&&(se=s.RGBA32UI),X===s.BYTE&&(se=s.RGBA8I),X===s.SHORT&&(se=s.RGBA16I),X===s.INT&&(se=s.RGBA32I)),w===s.RGB&&(X===s.UNSIGNED_SHORT&&me&&(se=me.RGB16_EXT),X===s.SHORT&&me&&(se=me.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(se=s.R11F_G11F_B10F)),w===s.RGBA){let le=ye?To:St.getTransfer(te);X===s.FLOAT&&(se=s.RGBA32F),X===s.HALF_FLOAT&&(se=s.RGBA16F),X===s.UNSIGNED_BYTE&&(se=le===Ot?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&me&&(se=me.RGBA16_EXT),X===s.SHORT&&me&&(se=me.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function p(I,w){let X;return I?w===null||w===fi||w===Qs?X=s.DEPTH24_STENCIL8:w===Wn?X=s.DEPTH32F_STENCIL8:w===Yr&&(X=s.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===fi||w===Qs?X=s.DEPTH_COMPONENT24:w===Wn?X=s.DEPTH_COMPONENT32F:w===Yr&&(X=s.DEPTH_COMPONENT16),X}function _(I,w){return N(I)===!0||I.isFramebufferTexture&&I.minFilter!==Zt&&I.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function C(I){let w=new WeakRef(I);n.get(I).__ref=w,m.add(w),v.register(I,w,w)}function D(I){let w=n.get(I).__ref;w!==void 0&&(m.delete(w),v.unregister(w))}function z(I){b(I.target)}function B(I){y(I.target)}function b(I){I.removeEventListener("dispose",z),D(I),T(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&h.delete(I)}function y(I){I.removeEventListener("dispose",B),D(I),F(I)}function E(){for(let I of m){let w=I.deref();w!==void 0&&(w.isRenderTarget===!0?y(w):b(w))}m.clear(),h.clear()}function T(I){let w=n.get(I);if(w.__webglInit===void 0)return;let X=I.source,ae=d.get(X);if(ae){let te=ae[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(I),Object.keys(ae).length===0&&d.delete(X)}n.remove(I)}function R(I){let w=n.get(I);s.deleteTexture(w.__webglTexture);let X=I.source,ae=d.get(X);delete ae[w.__cacheKey],o.memory.textures--}function F(I){let w=n.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();let X=I.depthTexture;if(X&&X.renderTarget===I&&b(X),I.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let ye=0;ye<w.__webglFramebuffer[te].length;ye++)s.deleteFramebuffer(w.__webglFramebuffer[te][ye]);else s.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)s.deleteFramebuffer(w.__webglFramebuffer[te]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ae=I.textures;for(let te=0,ye=ae.length;te<ye;te++){let me=n.get(ae[te]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(ae[te])}n.remove(I)}let O=0;function V(){O=0}function Y(){return O}function Z(I){O=I}function oe(){let I=O;return I>=i.maxTextures&&je("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),O+=1,I}function q(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function ee(I,w){let X=n.get(I);if(I.isVideoTexture&&Rt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){let ae=I.image;if(ae===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(X,I,w);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+w)}function he(I,w){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ge(X,I,w);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+w)}function Pe(I,w){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ge(X,I,w);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+w)}function ue(I,w){let X=n.get(I);if(I.version>0&&X.__version!==I.version){pe(X,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+w)}let Ce={[us]:s.REPEAT,[Ln]:s.CLAMP_TO_EDGE,[Cr]:s.MIRRORED_REPEAT},Xe={[Zt]:s.NEAREST,[Ul]:s.NEAREST_MIPMAP_NEAREST,[js]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[qr]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},Ze={[np]:s.NEVER,[ru]:s.ALWAYS,[ip]:s.LESS,[iu]:s.LEQUAL,[sp]:s.EQUAL,[su]:s.GEQUAL,[rp]:s.GREATER,[op]:s.NOTEQUAL};function gt(I,w){if(w.type===Wn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===sn||w.magFilter===qr||w.magFilter===js||w.magFilter===jn||w.minFilter===sn||w.minFilter===qr||w.minFilter===js||w.minFilter===jn)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Ce[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Ce[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Ce[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Xe[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Xe[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ze[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Zt||w.minFilter!==js&&w.minFilter!==jn||w.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function It(I,w){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",z),C(w));let ae=w.source,te=d.get(ae);te===void 0&&(te={},d.set(ae,te));let ye=q(w);if(ye!==I.__cacheKey){te[ye]===void 0&&(te[ye]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),te[ye].usedTimes++;let me=te[I.__cacheKey];me!==void 0&&(te[I.__cacheKey].usedTimes--,me.usedTimes===0&&R(w)),I.__cacheKey=ye,I.__webglTexture=te[ye].texture}return X}function rt(I,w,X){return Math.floor(Math.floor(I/X)/w)}function ne(I,w,X,ae){let ye=I.updateRanges;if(ye.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,X,ae,w.data);else{ye.sort((G,fe)=>G.start-fe.start);let me=0;for(let G=1;G<ye.length;G++){let fe=ye[me],ce=ye[G],Ie=fe.start+fe.count,Ee=rt(ce.start,w.width,4),Ne=rt(fe.start,w.width,4);ce.start<=Ie+1&&Ee===Ne&&rt(ce.start+ce.count-1,w.width,4)===Ee?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++me,ye[me]=ce)}ye.length=me+1;let se=t.getParameter(s.UNPACK_ROW_LENGTH),le=t.getParameter(s.UNPACK_SKIP_PIXELS),Re=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let G=0,fe=ye.length;G<fe;G++){let ce=ye[G],Ie=Math.floor(ce.start/4),Ee=Math.ceil(ce.count/4),Ne=Ie%w.width,$e=Math.floor(Ie/w.width),ht=Ee,Te=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(s.TEXTURE_2D,0,Ne,$e,ht,Te,X,ae,w.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,se),t.pixelStorei(s.UNPACK_SKIP_PIXELS,le),t.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function ge(I,w,X){let ae=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=s.TEXTURE_3D);let te=It(I,w),ye=w.source;t.bindTexture(ae,I.__webglTexture,s.TEXTURE0+X);let me=n.get(ye);if(ye.version!==me.__version||te===!0){if(t.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap!="undefined"&&w.image instanceof ImageBitmap)===!1){let Te=St.getPrimaries(St.workingColorSpace),Qe=w.colorSpace===ns?null:St.getPrimaries(w.colorSpace),ut=w.colorSpace===ns||Te===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let le=S(w.image,!1,i.maxTextureSize);le=ke(w,le);let Re=r.convert(w.format,w.colorSpace),G=r.convert(w.type),fe=A(w.internalFormat,Re,G,w.normalized,w.colorSpace,w.isVideoTexture);gt(ae,w);let ce,Ie=w.mipmaps,Ee=w.isVideoTexture!==!0,Ne=me.__version===void 0||te===!0,$e=ye.dataReady,ht=_(w,le);if(w.isDepthTexture)fe=p(w.format===ts,w.type),Ne&&(Ee?t.texStorage2D(s.TEXTURE_2D,1,fe,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,fe,le.width,le.height,0,Re,G,null));else if(w.isDataTexture)if(Ie.length>0){Ee&&Ne&&t.texStorage2D(s.TEXTURE_2D,ht,fe,Ie[0].width,Ie[0].height);for(let Te=0,Qe=Ie.length;Te<Qe;Te++)ce=Ie[Te],Ee?$e&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ce.width,ce.height,Re,G,ce.data):t.texImage2D(s.TEXTURE_2D,Te,fe,ce.width,ce.height,0,Re,G,ce.data);w.generateMipmaps=!1}else Ee?(Ne&&t.texStorage2D(s.TEXTURE_2D,ht,fe,le.width,le.height),$e&&ne(w,le,Re,G)):t.texImage2D(s.TEXTURE_2D,0,fe,le.width,le.height,0,Re,G,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ee&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ht,fe,Ie[0].width,Ie[0].height,le.depth);for(let Te=0,Qe=Ie.length;Te<Qe;Te++)if(ce=Ie[Te],w.format!==Qn)if(Re!==null)if(Ee){if($e)if(w.layerUpdates.size>0){let ut=mu(ce.width,ce.height,w.format,w.type);for(let Fe of w.layerUpdates){let Nt=ce.data.subarray(Fe*ut/ce.data.BYTES_PER_ELEMENT,(Fe+1)*ut/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,Fe,ce.width,ce.height,1,Re,Nt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ce.width,ce.height,le.depth,Re,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,fe,ce.width,ce.height,le.depth,0,ce.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?$e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ce.width,ce.height,le.depth,Re,G,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,fe,ce.width,ce.height,le.depth,0,Re,G,ce.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ee&&Ne&&t.texStorage2D(s.TEXTURE_2D,ht,fe,Ie[0].width,Ie[0].height);for(let Te=0,Qe=Ie.length;Te<Qe;Te++)ce=Ie[Te],w.format!==Qn?Re!==null?Ee?$e&&t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,fe,ce.width,ce.height,0,ce.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?$e&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ce.width,ce.height,Re,G,ce.data):t.texImage2D(s.TEXTURE_2D,Te,fe,ce.width,ce.height,0,Re,G,ce.data)}else if(w.isDataArrayTexture)if(Ee){if(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ht,fe,le.width,le.height,le.depth),$e)if(w.layerUpdates.size>0){let Te=mu(le.width,le.height,w.format,w.type);for(let Qe of w.layerUpdates){let ut=le.data.subarray(Qe*Te/le.data.BYTES_PER_ELEMENT,(Qe+1)*Te/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Qe,le.width,le.height,1,Re,G,ut)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Re,G,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,fe,le.width,le.height,le.depth,0,Re,G,le.data);else if(w.isData3DTexture)Ee?(Ne&&t.texStorage3D(s.TEXTURE_3D,ht,fe,le.width,le.height,le.depth),$e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Re,G,le.data)):t.texImage3D(s.TEXTURE_3D,0,fe,le.width,le.height,le.depth,0,Re,G,le.data);else if(w.isFramebufferTexture){if(Ne)if(Ee)t.texStorage2D(s.TEXTURE_2D,ht,fe,le.width,le.height);else{let Te=le.width,Qe=le.height;for(let ut=0;ut<ht;ut++)t.texImage2D(s.TEXTURE_2D,ut,fe,Te,Qe,0,Re,G,null),Te>>=1,Qe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let Te=s.canvas;if(Te.hasAttribute("layoutsubtree")||Te.setAttribute("layoutsubtree","true"),le.parentNode!==Te){Te.appendChild(le),h.add(w),Te.onpaint=Qe=>{let ut=Qe.changedElements;for(let Fe of h)ut.includes(Fe.image)&&(Fe.needsUpdate=!0)},Te.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,le);else{let ut=s.RGBA,Fe=s.RGBA,Nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ut,Fe,Nt,le)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ee&&Ne){let Te=qe(Ie[0]);t.texStorage2D(s.TEXTURE_2D,ht,fe,Te.width,Te.height)}for(let Te=0,Qe=Ie.length;Te<Qe;Te++)ce=Ie[Te],Ee?$e&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Re,G,ce):t.texImage2D(s.TEXTURE_2D,Te,fe,Re,G,ce);w.generateMipmaps=!1}else if(Ee){if(Ne){let Te=qe(le);t.texStorage2D(s.TEXTURE_2D,ht,fe,Te.width,Te.height)}$e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,G,le)}else t.texImage2D(s.TEXTURE_2D,0,fe,Re,G,le);N(w)&&w.mipmapsAutoUpdate===!0&&M(ae),me.__version=ye.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function pe(I,w,X){if(w.image.length!==6)return;let ae=It(I,w),te=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+X);let ye=n.get(te);if(te.version!==ye.__version||ae===!0){t.activeTexture(s.TEXTURE0+X);let me=St.getPrimaries(St.workingColorSpace),se=w.colorSpace===ns?null:St.getPrimaries(w.colorSpace),le=w.colorSpace===ns||me===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Re=w.isCompressedTexture||w.image[0].isCompressedTexture,G=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let Fe=0;Fe<6;Fe++)!Re&&!G?fe[Fe]=S(w.image[Fe],!0,i.maxCubemapSize):fe[Fe]=G?w.image[Fe].image:w.image[Fe],fe[Fe]=ke(w,fe[Fe]);let ce=fe[0],Ie=r.convert(w.format,w.colorSpace),Ee=r.convert(w.type),Ne=A(w.internalFormat,Ie,Ee,w.normalized,w.colorSpace),$e=w.isVideoTexture!==!0,ht=ye.__version===void 0||ae===!0,Te=te.dataReady,Qe=_(w,ce);gt(s.TEXTURE_CUBE_MAP,w);let ut;if(w.isDepthTexture){if(Ne=p(w.format===ts,w.type),ht)if($e)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ne,ce.width,ce.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ne,ce.width,ce.height,0,Ie,Ee,null)}else if(Re){$e&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Qe,Ne,ce.width,ce.height);for(let Fe=0;Fe<6;Fe++){ut=fe[Fe].mipmaps;for(let Nt=0;Nt<ut.length;Nt++){let jt=ut[Nt];w.format!==Qn?Ie!==null?$e?Te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Nt,0,0,jt.width,jt.height,Ie,jt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Nt,Ne,jt.width,jt.height,0,jt.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Nt,0,0,jt.width,jt.height,Ie,Ee,jt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Nt,Ne,jt.width,jt.height,0,Ie,Ee,jt.data)}}}else{if(ut=w.mipmaps,$e&&ht){ut.length>0&&Qe++;let Fe=qe(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Qe,Ne,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(G){$e?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,fe[Fe].width,fe[Fe].height,Ie,Ee,fe[Fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ne,fe[Fe].width,fe[Fe].height,0,Ie,Ee,fe[Fe].data);for(let Nt=0;Nt<ut.length;Nt++){let gi=ut[Nt].image[Fe].image;$e?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Nt+1,0,0,gi.width,gi.height,Ie,Ee,gi.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Nt+1,Ne,gi.width,gi.height,0,Ie,Ee,gi.data)}}else{$e?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,Ie,Ee,fe[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ne,Ie,Ee,fe[Fe]);for(let Nt=0;Nt<ut.length;Nt++){let jt=ut[Nt];$e?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Nt+1,0,0,Ie,Ee,jt.image[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Nt+1,Ne,Ie,Ee,jt.image[Fe])}}}N(w)&&w.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),ye.__version=te.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ue(I,w,X,ae,te,ye){let me=r.convert(X.format,X.colorSpace),se=r.convert(X.type),le=A(X.internalFormat,me,se,X.normalized,X.colorSpace),Re=n.get(w),G=n.get(X);if(G.__renderTarget=w,!Re.__hasExternalTextures){let fe=Math.max(1,w.width>>ye),ce=Math.max(1,w.height>>ye);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ye,le,fe,ce,w.depth,0,me,se,null):t.texImage2D(te,ye,le,fe,ce,0,me,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),we(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,te,G.__webglTexture,0,Je(w)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,te,G.__webglTexture,ye),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(I,w,X){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){let ae=w.depthTexture,te=ae&&ae.isDepthTexture?ae.type:null,ye=p(w.stencilBuffer,te),me=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;we(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je(w),ye,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je(w),ye,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ye,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,I)}else{let ae=w.textures;for(let te=0;te<ae.length;te++){let ye=ae[te],me=r.convert(ye.format,ye.colorSpace),se=r.convert(ye.type),le=A(ye.internalFormat,me,se,ye.normalized,ye.colorSpace);we(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je(w),le,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je(w),le,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,le,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(I,w,X){let ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(w.depthTexture);te.__renderTarget=w;let ye=ae?w.depthTexture.image[0]:w.depthTexture.image;(!te.__webglTexture||ye.width!==w.width||ye.height!==w.height)&&(ye.width=w.width,ye.height=w.height,w.depthTexture.needsUpdate=!0),ae?ue(w.depthTexture,0):ee(w.depthTexture,0);let me=te.__webglTexture,se=Je(w),le=ae?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,Re=w.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Yi)we(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,le,me,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,Re,le,me,0);else if(w.depthTexture.format===ts)we(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,le,me,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,Re,le,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function J(I){let w=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let ae=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){let te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",te)};ae.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=ae}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let ae=0;ae<6;ae++)ie(w.__webglFramebuffer[ae],I,ae);else I.texture.mipmaps.length>0?ie(w.__webglFramebuffer[0],I,0):ie(w.__webglFramebuffer,I,0);else if(X){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=s.createRenderbuffer(),xe(w.__webglDepthbuffer[ae],I,!1);else{let te=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=w.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,ye)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),xe(w.__webglDepthbuffer,I,!1);else{let te=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,ye)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(I,w,X){let ae=n.get(I);w!==void 0&&Ue(ae.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&J(I)}function _e(I){let w=I.texture,X=n.get(I),ae=n.get(w);I.addEventListener("dispose",B),C(I);let te=I.textures,ye=I.isWebGLCubeRenderTarget===!0,me=te.length>1;if(me||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=w.version,o.memory.textures++),ye){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(w.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let le=0;le<w.mipmaps.length;le++)X.__webglFramebuffer[se][le]=s.createFramebuffer()}else X.__webglFramebuffer[se]=s.createFramebuffer()}else{if(w.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<w.mipmaps.length;se++)X.__webglFramebuffer[se]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(me)for(let se=0,le=te.length;se<le;se++){let Re=n.get(te[se]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&we(I)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<te.length;se++){let le=te[se];X.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[se]);let Re=r.convert(le.format,le.colorSpace),G=r.convert(le.type),fe=A(le.internalFormat,Re,G,le.normalized,le.colorSpace,I.isXRRenderTarget===!0),ce=Je(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,fe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,X.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),gt(s.TEXTURE_CUBE_MAP,w);for(let se=0;se<6;se++)if(w.mipmaps.length>0)for(let le=0;le<w.mipmaps.length;le++)Ue(X.__webglFramebuffer[se][le],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,le);else Ue(X.__webglFramebuffer[se],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);N(w)?M(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(me){for(let se=0,le=te.length;se<le;se++){let Re=te[se],G=n.get(Re),fe=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,G.__webglTexture),gt(fe,Re),Ue(X.__webglFramebuffer,I,Re,s.COLOR_ATTACHMENT0+se,fe,0),N(Re)&&M(fe)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(se=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,ae.__webglTexture),gt(se,w),w.mipmaps.length>0)for(let le=0;le<w.mipmaps.length;le++)Ue(X.__webglFramebuffer[le],I,w,s.COLOR_ATTACHMENT0,se,le);else Ue(X.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,se,0);N(w)?M(se):w.mipmaps.length>0&&s.texParameteri(se,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&J(I)}function k(I){let w=I.textures;for(let X=0,ae=w.length;X<ae;X++){let te=w[X];if(N(te)&&te.mipmapsAutoUpdate===!0){let ye=L(I),me=n.get(te).__webglTexture;t.bindTexture(ye,me),M(ye),t.unbindTexture()}}}let it=[];function st(I){if(I.samples>0){if(we(I)===!1){let w=I.textures,X=I.width,ae=I.height,te=s.COLOR_BUFFER_BIT,ye=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(I),se=w.length>1;if(se)for(let Re=0;Re<w.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Re=0;Re<w.length;Re++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[Re]);let G=n.get(w[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,G,0)}s.blitFramebuffer(0,0,X,ae,0,0,X,ae,te,s.NEAREST),l===!0&&(it.length=0,it.push(s.COLOR_ATTACHMENT0+Re),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&it.push(ye),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Re=0;Re<w.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,me.__webglColorRenderbuffer[Re]);let G=n.get(w[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,G,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Je(I){return Math.min(i.maxSamples,I.samples)}function we(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Rt(I){let w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function ke(I,w){let X=I.colorSpace,ae=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==En&&X!==ns&&(St.getTransfer(X)===Ot?(ae!==Qn||te!==Fn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",X)),w}function qe(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=oe,this.resetTextureUnits=V,this.getTextureUnits=Y,this.setTextureUnits=Z,this.setTexture2D=ee,this.setTexture2DArray=he,this.setTexture3D=Pe,this.setTextureCube=ue,this.rebindTextures=Me,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=we,this.dispose=E}function Vy(s,e){function t(n,i=ns){let r,o=St.getTransfer(i);if(n===Fn)return s.UNSIGNED_BYTE;if(n===Ol)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jh)return s.BYTE;if(n===$h)return s.SHORT;if(n===Yr)return s.UNSIGNED_SHORT;if(n===Fl)return s.INT;if(n===fi)return s.UNSIGNED_INT;if(n===Wn)return s.FLOAT;if(n===di)return s.HALF_FLOAT;if(n===eu)return s.ALPHA;if(n===tu)return s.RGB;if(n===Qn)return s.RGBA;if(n===Yi)return s.DEPTH_COMPONENT;if(n===ts)return s.DEPTH_STENCIL;if(n===Bl)return s.RED;if(n===kl)return s.RED_INTEGER;if(n===xs)return s.RG;if(n===Hl)return s.RG_INTEGER;if(n===Gl)return s.RGBA_INTEGER;if(n===Zo||n===Jo||n===$o||n===jo)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Wl||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===Kl||n===Zl||n===Jl||n===$l||n===Qo||n===jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yl||n===Kl)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jl)return r.COMPRESSED_R11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qo)return r.COMPRESSED_RG11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===pc||n===mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===xc||n===ea||n===_c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
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

}`,Cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Iu=class extends oi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,v=typeof XRWebGLBinding!="undefined",x=new Cu,g={},S=t.getContextAttributes(),N=null,M=null,L=[],A=[],p=new et,_=null,C=null,D=new Yt;D.viewport=new Bt;let z=new Yt;z.viewport=new Bt;let B=[D,z],b=new Rl,y=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=L[q];return ee===void 0&&(ee=new Ur,L[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=L[q];return ee===void 0&&(ee=new Ur,L[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=L[q];return ee===void 0&&(ee=new Ur,L[q]=ee),ee.getHandSpace()};function T(q){let ee=A.indexOf(q.inputSource);if(ee===-1)return;let he=L[ee];he!==void 0&&(he.update(q.inputSource,q.frame,c||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function R(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",F);for(let q=0;q<L.length;q++){let ee=A[q];ee!==null&&(A[q]=null,L[q].disconnect(ee))}y=null,E=null,x.reset();for(let q in g)delete g[q];if(e.setRenderTarget(N),d=null,f=null,h=null,i=null,M=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(p.width,p.height,!1),C!==null){let q=C.camera;q.fov=C.fov,q.zoom=C.zoom,q.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(N=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",R),i.addEventListener("inputsourceschange",F),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(p),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Pe=null,ue=null;S.depth&&(ue=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?ts:Yi,Pe=S.stencil?Qs:fi);let Ce={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Gn(f.textureWidth,f.textureHeight,{format:Qn,type:Fn,depthTexture:new Ki(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Gn(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(q){for(let ee=0;ee<q.removed.length;ee++){let he=q.removed[ee],Pe=A.indexOf(he);Pe>=0&&(A[Pe]=null,L[Pe].disconnect(he))}for(let ee=0;ee<q.added.length;ee++){let he=q.added[ee],Pe=A.indexOf(he);if(Pe===-1){for(let Ce=0;Ce<L.length;Ce++)if(Ce>=A.length){A.push(he),Pe=Ce;break}else if(A[Ce]===null){A[Ce]=he,Pe=Ce;break}if(Pe===-1)break}let ue=L[Pe];ue&&ue.connect(he)}}function O(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,he=q.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(he=x.depthFar)),b.near=z.near=D.near=ee,b.far=z.far=D.far=he,(y!==b.near||E!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),y=b.near,E=b.far),b.layers.mask=q.layers.mask|6,D.layers.mask=b.layers.mask&-5,z.layers.mask=b.layers.mask&-3;let Pe=q.parent,ue=b.cameras;O(b,Pe);for(let Ce=0;Ce<ue.length;Ce++)O(ue[Ce],Pe);b.projectionMatrix.copy(D.projectionMatrix),b.projectionMatrixInverse.copy(D.projectionMatrixInverse),C===null&&q.isPerspectiveCamera&&(C={camera:q,fov:q.fov,zoom:q.zoom}),V(q,b,Pe)};function V(q,ee,he){he===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ds*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)},this.getCameraTexture=function(q){return g[q]};let Y=null;function Z(q,ee){if(u=ee.getViewerPose(c||o),m=ee,u!==null){let he=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Pe=!1;he.length!==b.cameras.length&&(b.cameras.length=0,Pe=!0);for(let Ze=0;Ze<he.length;Ze++){let gt=he[Ze],It=null;if(d!==null)It=d.getViewport(gt);else{let ne=h.getViewSubImage(f,gt);It=ne.viewport,Ze===0&&(e.setRenderTargetTextures(M,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(M))}let rt=B[Ze];rt===void 0&&(rt=new Yt,rt.layers.enable(Ze),rt.viewport=new Bt,B[Ze]=rt),rt.matrix.fromArray(gt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(gt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(It.x,It.y,It.width,It.height),Ze===0&&(b.matrix.copy(rt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Pe===!0&&b.cameras.push(rt)}let ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let Ze=h.getDepthInformation(he[0]);Ze&&Ze.isValid&&Ze.texture&&x.init(Ze,i.renderState)}if(ue&&ue.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let Ze=0;Ze<he.length;Ze++){let gt=he[Ze].camera;if(gt){let It=g[gt];It||(It=new zo,g[gt]=It);let rt=h.getCameraImage(gt);It.sourceTexture=rt}}}}for(let he=0;he<L.length;he++){let Pe=A[he],ue=L[he];Pe!==null&&ue!==void 0&&ue.update(Pe,ee,c||o)}Y&&Y(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}let oe=new Op;oe.setAnimationLoop(Z),this.setAnimationLoop=function(q){Y=q},this.dispose=function(){}}},qy=new tt,Yp=new at;Yp.set(-1,0,0,0,1,0,0,0,1);function Yy(s,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,fu(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,S,N,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),h(x,g)):g.isMeshPhongMaterial?(r(x,g),u(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),f(x,g),g.isMeshPhysicalMaterial&&d(x,g,M)):g.isMeshMatcapMaterial?(r(x,g),m(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),v(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,S,N):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===pn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===pn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let S=e.get(g),N=S.envMap,M=S.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(M)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Yp),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,S,N){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*S,x.scale.value=N*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function u(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function h(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function f(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function d(x,g,S){x.ior.value=g.ior,g.diffuseRoughness>0&&(x.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,g){g.matcap&&(x.matcap.value=g.matcap)}function v(x,g){let S=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ky(s,e,t,n){let i={},r={};function o(S,N){let M=N.program;n.uniformBlockBinding(S,M,i[S.id])}function a(S,N){let M=i[S.id];M===void 0&&(m(S),M=l(S),i[S.id]=M,S.addEventListener("dispose",x));let L=N.program;n.updateUBOMapping(S,L);let A=e.render.frame;r[S.id]!==A&&(c(S),r[S.id]=A)}function l(S){let N=s.createBuffer(),M=S.__size,L=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,M,L),s.bindBuffer(s.UNIFORM_BUFFER,null),N}function c(S){let N=i[S.id],M=S.uniforms,L=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let A=0,p=M.length;A<p;A++){let _=M[A];if(Array.isArray(_))for(let C=0,D=_.length;C<D;C++)u(_[C],A,C,L);else u(_,A,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(S,N,M,L){if(f(S,N,M,L)===!0){let A=S.__offset,p=S.value;if(Array.isArray(p)){let _=0;for(let C=0;C<p.length;C++){let D=p[C],z=v(D,!0);h(D,S.__data,_),_+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else h(p,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,S.__data)}}function h(S,N,M){typeof S=="number"||typeof S=="boolean"?N[M]=S:S.isMatrix3?(N[M]=S.elements[0],N[M+1]=S.elements[1],N[M+2]=S.elements[2],N[M+3]=0,N[M+4]=S.elements[3],N[M+5]=S.elements[4],N[M+6]=S.elements[5],N[M+7]=0,N[M+8]=S.elements[6],N[M+9]=S.elements[7],N[M+10]=S.elements[8],N[M+11]=0):ArrayBuffer.isView(S)?N.set(S.subarray(0,N.length-M),M):S.toArray(N,M)}function f(S,N,M,L){let A=S.value,p=N+"_"+M;if(Array.isArray(A)){L[p]===void 0&&(L[p]=[]);let _=L[p],C=!1;for(let D=0;D<A.length;D++)d(A[D],_,D)===!0&&(C=!0);return C}return d(A,L,p)}function d(S,N,M){if(N[M]===void 0)return typeof S=="number"||typeof S=="boolean"?N[M]=S:ArrayBuffer.isView(S)?N[M]=S.slice():N[M]=S.clone(),!0;{let L=N[M];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return N[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(L.equals(S)===!1)return L.copy(S),!0}}return!1}function m(S){let N=S.uniforms,M=0,L=16;for(let p=0,_=N.length;p<_;p++){let C=Array.isArray(N[p])?N[p]:[N[p]];for(let D=0,z=C.length;D<z;D++){let B=C[D],b=Array.isArray(B.value)?B.value:[B.value],y=Array.isArray(N[p])||Array.isArray(B.value),E=M;for(let R=0,F=b.length;R<F;R++){let O=b[R],V=v(O,y),Y=M%L,Z=Y%V.boundary,oe=Y+Z;M+=Z,oe!==0&&L-oe<V.storage&&(M+=L-oe),R===0&&(E=M),M+=V.storage}let T=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new T((M-E)/Float32Array.BYTES_PER_ELEMENT),B.__offset=E}}let A=M%L;return A>0&&(M+=L-A),S.__size=M,S.__cache={},this}function v(S,N){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):je("WebGLRenderer: Unsupported uniform value type.",S),N===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function x(S){let N=S.target;N.removeEventListener("dispose",x),s.deleteBuffer(i[N.id]),delete i[N.id],delete r[N.id]}function g(){for(let S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:a,dispose:g}}var Zy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function Jy(){return Ei===null&&(Ei=new zr(Zy,16,16,xs,di),Ei.name="DFG_LUT",Ei.minFilter=sn,Ei.magFilter=sn,Ei.wrapS=Ln,Ei.wrapT=Ln,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var Jr=class{constructor(e={}){let{canvas:t=ap(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Fn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=d,x=new Set([Gl,Hl,kl]),g=new Set([Fn,fi,Yr,Qs,Ol,zl]),S=new Uint32Array(4),N=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},L=null,A=null,p=[],_=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,z=!1,B=null,b=null,y=null,E=null;this._outputColorSpace=Ft;let T=0,R=0,F=null,O=-1,V=null,Y=new Bt,Z=new Bt,oe=null,q=new be(0),ee=0,he=t.width,Pe=t.height,ue=1,Ce=null,Xe=null,Ze=new Bt(0,0,he,Pe),gt=new Bt(0,0,he,Pe),It=!1,rt=new ps,ne=new ml,ge=!1,pe=!1,Ue=new tt,xe=new H,ie=new Bt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function _e(){return F===null?ue:1}let k=n;function it(P,W){return t.getContext(P,W)}let st,Je,we,Rt,ke,qe,I,w,X,ae,te,ye,me,se,le,Re,G,fe,ce,Ie,Ee,Ne,$e;try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Qe,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),k===null){let W="webgl2";if(k=it(W,P),k===null)throw it(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(P){throw t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),ot("WebGLRenderer: "+P.message),P}function ht(){st=new av(k),st.init(),Ee=new Vy(k,st),Je=new J_(k,st,e,Ee),we=new Hy(k,st),Je.reversedDepthBuffer&&f&&we.buffers.depth.setReversed(!0),b=k.createFramebuffer(),y=k.createFramebuffer(),E=k.createFramebuffer(),Rt=new hv(k),ke=new Ay,qe=new Gy(k,st,we,ke,Je,Ee,Rt),I=new ov(D),w=new f0(k),Ne=new K_(k,w),X=new lv(k,w,Rt,Ne),ae=new fv(k,X,w,Ne,Rt),fe=new uv(k,Je,qe),le=new $_(ke),te=new Ey(D,I,st,Je,Ne,le),ye=new Yy(D,ke),me=new Cy,se=new Uy(st),G=new Y_(D,I,we,ae,m,l),Re=new ky(D,ae,Je),$e=new Ky(k,Rt,Je,we),ce=new Z_(k,st,Rt),Ie=new cv(k,st,Rt),Rt.programs=te.programs,D.capabilities=Je,D.extensions=st,D.properties=ke,D.renderLists=me,D.shadowMap=Re,D.state=we,D.info=Rt}v!==Fn&&(C=new pv(v,t.width,t.height,a,i,r));let Te=new Iu(D,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let P=st.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=st.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(P){P!==void 0&&(ue=P,this.setSize(he,Pe,!1))},this.getSize=function(P){return P.set(he,Pe)},this.setSize=function(P,W,re=!0){if(Te.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}he=P,Pe=W,t.width=Math.floor(P*ue),t.height=Math.floor(W*ue),re===!0&&(t.style.width=P+"px",t.style.height=W+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(he*ue,Pe*ue).floor()},this.setDrawingBufferSize=function(P,W,re){he=P,Pe=W,ue=re,t.width=Math.floor(P*re),t.height=Math.floor(W*re),this.setViewport(0,0,P,W)},this.setEffects=function(P){if(v===Fn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let W=0;W<P.length;W++)if(P[W].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(Y)},this.getViewport=function(P){return P.copy(Ze)},this.setViewport=function(P,W,re,$){P.isVector4?Ze.set(P.x,P.y,P.z,P.w):Ze.set(P,W,re,$),we.viewport(Y.copy(Ze).multiplyScalar(_e()).round())},this.getScissor=function(P){return P.copy(gt)},this.setScissor=function(P,W,re,$){P.isVector4?gt.set(P.x,P.y,P.z,P.w):gt.set(P,W,re,$),we.scissor(Z.copy(gt).multiplyScalar(_e()).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(P){we.setScissorTest(It=P)},this.setOpaqueSort=function(P){Ce=P},this.setTransparentSort=function(P){Xe=P},this.getClearColor=function(P){return P.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(P=!0,W=!0,re=!0){let $=0;if(P){let Q=!1;if(F!==null){let Le=F.texture.format;Q=x.has(Le)}if(Q){let Le=F.texture.type,He=g.has(Le),De=G.getClearColor(),Oe=G.getClearAlpha(),Ke=De.r,ft=De.g,wt=De.b;He?(S[0]=Ke,S[1]=ft,S[2]=wt,S[3]=Oe,k.clearBufferuiv(k.COLOR,0,S)):(N[0]=Ke,N[1]=ft,N[2]=wt,N[3]=Oe,k.clearBufferiv(k.COLOR,0,N))}else $|=k.COLOR_BUFFER_BIT}W&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),B=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),G.dispose(),me.dispose(),se.dispose(),qe.dispose(),ke.dispose(),I.dispose(),ae.dispose(),X.dispose(),Ne.dispose(),$e.dispose(),te.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ni),Te.removeEventListener("sessionend",bs),cn.stop()};function Qe(P){P.preventDefault(),Eo("WebGLRenderer: Context Lost."),z=!0}function ut(){Eo("WebGLRenderer: Context Restored."),z=!1;let P=Rt.autoReset,W=Re.enabled,re=Re.autoUpdate,$=Re.needsUpdate,Q=Re.type;ht(),Rt.autoReset=P,Re.enabled=W,Re.autoUpdate=re,Re.needsUpdate=$,Re.type=Q}function Fe(P){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Nt(P){let W=P.target;W.removeEventListener("dispose",Nt),jt(W)}function jt(P){gi(P),ke.remove(P)}function gi(P){let W=ke.get(P).programs;W!==void 0&&(W.forEach(function(re){te.releaseProgram(re)}),P.isShaderMaterial&&te.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,re,$,Q,Le){W===null&&(W=J);let He=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,De=Ta(P,W,re,$,Q);we.setMaterial($,He);let Oe=re.index,Ke=1;if($.wireframe===!0){if(Oe=X.getWireframeAttribute(re),Oe===void 0)return;Ke=2}let ft=re.drawRange,wt=re.attributes.position,Ye=ft.start*Ke,Tt=(ft.start+ft.count)*Ke;Le!==null&&(Ye=Math.max(Ye,Le.start*Ke),Tt=Math.min(Tt,(Le.start+Le.count)*Ke)),Oe!==null?(Ye=Math.max(Ye,0),Tt=Math.min(Tt,Oe.count)):wt!=null&&(Ye=Math.max(Ye,0),Tt=Math.min(Tt,wt.count));let Vt=Tt-Ye;if(Vt<0||Vt===1/0)return;Ne.setup(Q,$,De,re,Oe);let Dt,Ut=ce;if(Oe!==null&&(Dt=w.get(Oe),Ut=Ie,Ut.setIndex(Dt)),Q.isMesh)$.wireframe===!0?(we.setLineWidth($.wireframeLinewidth*_e()),Ut.setMode(k.LINES)):Ut.setMode(k.TRIANGLES);else if(Q.isLine){let hn=$.linewidth;hn===void 0&&(hn=1),we.setLineWidth(hn*_e()),Q.isLineSegments?Ut.setMode(k.LINES):Q.isLineLoop?Ut.setMode(k.LINE_LOOP):Ut.setMode(k.LINE_STRIP)}else Q.isPoints?Ut.setMode(k.POINTS):Q.isSprite&&Ut.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Ut.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let hn=Q._multiDrawStarts,Ge=Q._multiDrawCounts,un=Q._multiDrawCount,Et=Oe?w.get(Oe).bytesPerElement:1,xi=ke.get($).currentProgram.getUniforms();for(let tn=0;tn<un;tn++)xi.setValue(k,"_gl_DrawID",tn),Ut.render(hn[tn]/Et,Ge[tn])}else if(Q.isInstancedMesh)Ut.renderInstances(Ye,Vt,Q.count);else if(re.isInstancedBufferGeometry){let hn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ge=Math.min(re.instanceCount,hn);Ut.renderInstances(Ye,Vt,Ge)}else Ut.render(Ye,Vt)};function Sa(P,W,re,$){B!==null&&P.isNodeMaterial&&B.setObject($,P),ge===!0&&le.setState(P,re,!1),P.transparent===!0&&P.side===$t&&P.forceSinglePass===!1?(P.side=pn,P.needsUpdate=!0,ss(P,W,$),P.side=bi,P.needsUpdate=!0,ss(P,W,$),P.side=$t):ss(P,W,$)}this.compile=function(P,W,re=null){re===null&&(re=P),B!==null&&B.renderStart(P,W,re),A=se.get(re),A.init(W),_.push(A),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),P!==re&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),pe=this.localClippingEnabled,ge=le.init(this.clippingPlanes,pe),ge===!0&&le.setGlobalState(this.clippingPlanes,W),B!==null&&Re.render(A.state.shadowsArray,re,W);let $=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Le=Q.material;if(Le)if(Array.isArray(Le))for(let He=0;He<Le.length;He++){let De=Le[He];Sa(De,re,W,Q),$.add(De)}else Sa(Le,re,W,Q),$.add(Le)}),A=_.pop(),B!==null&&B.renderEnd(),$},this.compileAsync=function(P,W,re=null){let $=this.compile(P,W,re);return new Promise(Q=>{function Le(){if($.forEach(function(He){let Oe=ke.get(He).currentProgram;(Oe===void 0||Oe.isReady())&&$.delete(He)}),$.size===0){Q(P);return}setTimeout(Le,10)}st.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Li=null;function jc(P){Li&&Li(P)}function Ni(){cn.stop()}function bs(){cn.start()}let cn=new Op;cn.setAnimationLoop(jc),typeof self!="undefined"&&cn.setContext(self),this.setAnimationLoop=function(P){Li=P,Te.setAnimationLoop(P),P===null?cn.stop():cn.start()},Te.addEventListener("sessionstart",Ni),Te.addEventListener("sessionend",bs),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;B!==null&&B.renderStart(P,W);let re=Te.enabled===!0&&Te.isPresenting===!0,$=C!==null&&(F===null||re)&&C.begin(D,F);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(W),W=Te.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,W,F),A=se.get(P,_.length),A.init(W),A.state.textureUnits=qe.getTextureUnits(),_.push(A),Ue.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ne.setFromArrayCamera(W):rt.setFromProjectionMatrix(Ue,Zn,W.reversedDepth),pe=this.localClippingEnabled,ge=le.init(this.clippingPlanes,pe),L=me.get(P,p.length),L.init(),p.push(L),this.info.render.frame++,Te.enabled===!0&&Te.isPresenting===!0){let He=D.xr.getDepthSensingMesh();He!==null&&Di(He,W,-1/0,D.sortObjects)}Di(P,W,0,D.sortObjects),L.finish(),B!==null&&B.updateLights(A.state.lightsArray),D.sortObjects===!0&&L.sort(Ce,Xe),Me=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Me&&G.addToRenderList(L,P),this.info.autoReset===!0&&this.info.reset(),ge===!0&&le.beginShadows();let Q=A.state.shadowsArray;if(Re.render(Q,P,W),ge===!0&&le.endShadows(),($&&C.hasRenderPass())===!1){let He=L.opaque,De=L.transmissive;if(A.setupLights(),W.isArrayCamera){let Oe=W.cameras;if(De.length>0)for(let Ke=0,ft=Oe.length;Ke<ft;Ke++){let wt=Oe[Ke];ro(He,De,P,wt)}Me&&G.render(P);for(let Ke=0,ft=Oe.length;Ke<ft;Ke++){let wt=Oe[Ke];Ui(L,P,wt,wt.viewport)}}else De.length>0&&ro(He,De,P,W),Me&&G.render(P),Ui(L,P,W)}F!==null&&R===0&&(qe.updateMultisampleRenderTarget(F),qe.updateRenderTargetMipmap(F)),$&&C.end(D),P.isScene===!0&&P.onAfterRender(D,P,W),Ne.resetDefaultState(),O=-1,V=null,_.pop(),_.length>0?(A=_[_.length-1],qe.setTextureUnits(A.state.textureUnits),ge===!0&&le.setGlobalState(D.clippingPlanes,A.state.camera)):A=null,p.pop(),p.length>0?L=p[p.length-1]:L=null,B!==null&&B.renderEnd()};function Di(P,W,re,$){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)re=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)A.pushLight(P),P.castShadow&&A.pushShadow(P);else if(P.isSprite){let He=W.isArrayCamera?ne:rt;if(!P.frustumCulled||P.intersectsFrustum(He)){$&&ie.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ue);let De=ae.update(P),Oe=P.material;Oe.visible&&L.push(P,De,Oe,re,ie.z,null,W)}}else if(P.isMesh||P.isLine||P.isPoints){let He=W.isArrayCamera?ne:rt;if(!P.frustumCulled||P.intersectsFrustum(He)){let De=ae.update(P),Oe=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ie.copy(P.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ie.copy(De.boundingSphere.center)),ie.applyMatrix4(P.matrixWorld).applyMatrix4(Ue)),Array.isArray(Oe)){let Ke=De.groups;for(let ft=0,wt=Ke.length;ft<wt;ft++){let Ye=Ke[ft],Tt=Oe[Ye.materialIndex];Tt&&Tt.visible&&L.push(P,De,Tt,re,ie.z,Ye,W)}}else Oe.visible&&L.push(P,De,Oe,re,ie.z,null,W)}}}let Le=P.children;for(let He=0,De=Le.length;He<De;He++)Di(Le[He],W,re,$)}function Ui(P,W,re,$){let{opaque:Q,transmissive:Le,transparent:He}=P;A.setupLightsView(re),ge===!0&&le.setGlobalState(D.clippingPlanes,re),$&&we.viewport(Y.copy($)),Q.length>0&&ws(Q,W,re),Le.length>0&&ws(Le,W,re),He.length>0&&ws(He,W,re),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ro(P,W,re,$){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){let Ye=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new Gn(1,1,{generateMipmaps:!0,type:Ye?di:Fn,minFilter:jn,samples:Math.max(4,Je.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:St.workingColorSpace})}let Le=A.state.transmissionRenderTarget[$.id],He=$.viewport||Y;Le.setSize(He.z*D.transmissionResolutionScale,He.w*D.transmissionResolutionScale);let De=D.getRenderTarget(),Oe=D.getActiveCubeFace(),Ke=D.getActiveMipmapLevel();D.setRenderTarget(Le),D.getClearColor(q),ee=D.getClearAlpha(),ee<1&&D.setClearColor(16777215,.5),D.clear(),Me&&G.render(re);let ft=D.toneMapping;D.toneMapping=wi;let wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),ge===!0&&le.setGlobalState(D.clippingPlanes,$),ws(P,re,$),qe.updateMultisampleRenderTarget(Le),qe.updateRenderTargetMipmap(Le),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Tt=0,Vt=W.length;Tt<Vt;Tt++){let Dt=W[Tt],{object:Ut,geometry:hn,material:Ge,group:un}=Dt;if(Ge.side===$t&&Ut.layers.test($.layers)){let Et=Ge.side;Ge.side=pn,Ge.needsUpdate=!0,zn(Ut,re,$,hn,Ge,un),Ge.side=Et,Ge.needsUpdate=!0,Ye=!0}}Ye===!0&&(qe.updateMultisampleRenderTarget(Le),qe.updateRenderTargetMipmap(Le))}D.setRenderTarget(De,Oe,Ke),D.setClearColor(q,ee),wt!==void 0&&($.viewport=wt),D.toneMapping=ft}function ws(P,W,re){let $=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Le=P.length;Q<Le;Q++){let He=P[Q],{object:De,geometry:Oe,group:Ke}=He,ft=He.material;ft.allowOverride===!0&&$!==null&&(ft=$),De.layers.test(re.layers)&&zn(De,W,re,Oe,ft,Ke)}}function zn(P,W,re,$,Q,Le){B!==null&&Q.isNodeMaterial&&B.setObject(P,Q),P.onBeforeRender(D,W,re,$,Q,Le),P.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(D,W,re,$,P,Le),Q.transparent===!0&&Q.side===$t&&Q.forceSinglePass===!1?(Q.side=pn,Q.needsUpdate=!0,D.renderBufferDirect(re,W,$,Q,P,Le),Q.side=bi,Q.needsUpdate=!0,D.renderBufferDirect(re,W,$,Q,P,Le),Q.side=$t):D.renderBufferDirect(re,W,$,Q,P,Le),P.onAfterRender(D,W,re,$,Q,Le)}function Fi(P){let W=0;for(let re of P)re.texture!==null&&W++;return W}function ss(P,W,re){W.isScene!==!0&&(W=J);let $=ke.get(P),Q=A.state.lights,Le=A.state.shadowsArray,He=Q.state.version,De=te.getParameters(P,Q.state,Le,W,re,A.state.lightProbeGridArray),Oe=te.getProgramCacheKey(De),Ke=$.programs;$.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;let ft=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;$.envMap=I.get(P.envMap||$.environment,ft),$.envMapRotation=$.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,Ke===void 0&&(P.addEventListener("dispose",Nt),Ke=new Map,$.programs=Ke,$.programVariants=new Map);let wt=Ke.get(Oe);if(wt!==void 0){if($.currentProgram===wt&&$.lightsStateVersion===He)return wa(P,De),wt}else De.uniforms=te.getUniforms(P),B!==null&&P.isNodeMaterial&&B.build(P,re,De),P.onBeforeCompile(De,D),wt=te.acquireProgram(De,Oe),Ke.set(Oe,wt),$.uniforms=De.uniforms;let Ye=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ye.clippingPlanes=le.uniform),wa(P,De),$.needsLights=Qc(P),$.lightsStateVersion=He,$.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.sunLights.value=Q.state.sun,Ye.sunLightShadows.value=Q.state.sunShadow,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ye.sunShadowCascade.value=Q.state.sunShadowCascade,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.numLightProbeGrids=Fi(A.state.lightProbeGridArray),$.currentProgram=wt,$.uniformsList=null,wt}function ba(P,W,re,$,Q){let Le=ke.get(P),He=Le.currentProgram.id+","+$+","+Q,De=Le.programVariants.get(He);return De===void 0?(De=ss(P,W,re),Le.programVariants.set(He,De)):(Le.currentProgram=De,Le.uniformsList=null,Le.outputColorSpace=$,Le.toneMapping=Q),De}function oo(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=Zr.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function wa(P,W){let re=ke.get(P);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Ta(P,W,re,$,Q){W.isScene!==!0&&(W=J),qe.resetTextureUnits();let Le=W.fog,He=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,De=F===null?D.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:St.workingColorSpace,Oe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ke=I.get($.envMap||He,Oe),ft=$.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,wt=!!re.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ye=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,Vt=!!re.morphAttributes.color,Dt=wi;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Dt=D.toneMapping);let Ut=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,hn=Ut!==void 0?Ut.length:0,Ge=ke.get($),un=A.state.lights;if(ge===!0&&(pe===!0||P!==V)){let Ht=P===V&&$.id===O;le.setState($,P,Ht)}let Et=!1,xi=!1;$.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==un.state.version||Q.isBatchedMesh&&Ge.batching===!1||!Q.isBatchedMesh&&Ge.batching===!0||Q.isBatchedMesh&&Ge.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ge.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ge.instancing===!1||!Q.isInstancedMesh&&Ge.instancing===!0||Q.isSkinnedMesh&&Ge.skinning===!1||!Q.isSkinnedMesh&&Ge.skinning===!0||Q.isInstancedMesh&&Ge.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ge.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ge.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ge.instancingMorph===!1&&Q.morphTexture!==null||Ge.envMap!==Ke||$.fog===!0&&Ge.fog!==Le||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==le.numPlanes||Ge.numIntersection!==le.numIntersection)||Ge.vertexAlphas!==ft||Ge.vertexTangents!==wt||Ge.morphTargets!==Ye||Ge.morphNormals!==Tt||Ge.morphColors!==Vt||Ge.morphTargetsCount!==hn||Ge.numLightProbeGrids!==Fi(A.state.lightProbeGridArray)?Et=!0:(Ge.outputColorSpace!==De||Ge.toneMapping!==Dt)&&(xi=!0):(Et=!0,Ge.__version=$.version);let tn=Ge.currentProgram;(Et===!0||xi===!0)&&(tn=xi===!0?ba($,W,Q,De,Dt):ss($,W,Q),B&&$.isNodeMaterial&&B.onUpdateProgram($,tn,Ge));let Oi=!1,Pn=!1,_i=!1,Mt=tn.getUniforms(),Lt=Ge.uniforms;if(we.useProgram(tn.program)&&(Oi=!0,Pn=!0,_i=!0),$.id!==O&&(O=$.id,Pn=!0),Oi||V!==P){we.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Mt.setValue(k,"projectionMatrix",P.projectionMatrix),Mt.setValue(k,"viewMatrix",P.matrixWorldInverse);let nn=Mt.map.cameraPosition;nn!==void 0&&nn.setValue(k,xe.setFromMatrixPosition(P.matrixWorld)),Je.logarithmicDepthBuffer&&Mt.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),V!==P&&(V=P,Pn=!0,_i=!0)}if(Ge.needsLights&&(un.state.sunShadowMap.length>0&&Mt.setValue(k,"sunShadowMap",un.state.sunShadowMap,qe),un.state.directionalShadowMap.length>0&&Mt.setValue(k,"directionalShadowMap",un.state.directionalShadowMap,qe),un.state.spotShadowMap.length>0&&Mt.setValue(k,"spotShadowMap",un.state.spotShadowMap,qe),un.state.pointShadowMap.length>0&&Mt.setValue(k,"pointShadowMap",un.state.pointShadowMap,qe)),Q.isSkinnedMesh){Mt.setOptional(k,Q,"bindMatrix"),Mt.setOptional(k,Q,"bindMatrixInverse");let Ht=Q.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Mt.setValue(k,"boneTexture",Ht.boneTexture,qe))}Q.isBatchedMesh&&(Mt.setOptional(k,Q,"batchingTexture"),Mt.setValue(k,"batchingTexture",Q._matricesTexture,qe),Mt.setOptional(k,Q,"batchingIdTexture"),Mt.setValue(k,"batchingIdTexture",Q._indirectTexture,qe),Mt.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Mt.setValue(k,"batchingColorTexture",Q._colorsTexture,qe));let vn=re.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&fe.update(Q,re,tn),(Pn||Ge.receiveShadow!==Q.receiveShadow)&&(Ge.receiveShadow=Q.receiveShadow,Mt.setValue(k,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(Lt.envMapIntensity.value=W.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=Jy()),Pn){if(Mt.setValue(k,"toneMappingExposure",D.toneMappingExposure),Ge.needsLights&&ao(Lt,_i),Le&&$.fog===!0&&ye.refreshFogUniforms(Lt,Le),ye.refreshMaterialUniforms(Lt,$,ue,Pe,A.state.transmissionRenderTarget[P.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let Ht=M,nn=0;for(let ni of A.state.lightProbeGridArray)ni.texture!==null&&(Ht.textures[nn]=ni.texture,Ht.min[nn]=ni.boundingBox.min,Ht.max[nn]=ni.boundingBox.max,Ht.resolution[nn]=ni.resolution,nn++);for(let ni in Ht)Ht[ni].length=nn;Lt.probesSH.value=Ht.textures,Lt.probesMin.value=Ht.min,Lt.probesMax.value=Ht.max,Lt.probesResolution.value=Ht.resolution}Zr.upload(k,oo(Ge),Lt,qe)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Zr.upload(k,oo(Ge),Lt,qe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(k,"center",Q.center),Mt.setValue(k,"modelViewMatrix",Q.modelViewMatrix),Mt.setValue(k,"normalMatrix",Q.normalMatrix),Mt.setValue(k,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){let Ht=$.uniformsGroups;for(let nn=0,ni=Ht.length;nn<ni;nn++){let or=Ht[nn];$e.update(or,tn),$e.bind(or,tn)}}return tn}function ao(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.sunLights.needsUpdate=W,P.sunLightShadows.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Qc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,W,re){let $=ke.get(P);$.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ke.get(P.texture).__webglTexture=W,ke.get(P.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:re,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,W){let re=ke.get(P);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,re=0){F=P,T=W,R=re;let $=null,Q=!1,Le=!1;if(P){let De=ke.get(P);if(De.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(k.FRAMEBUFFER,De.__webglFramebuffer),Y.copy(P.viewport),Z.copy(P.scissor),oe=P.scissorTest,we.viewport(Y),we.scissor(Z),we.setScissorTest(oe),O=-1;return}else if(De.__webglFramebuffer===void 0)qe.setupRenderTarget(P);else if(De.__hasExternalTextures)qe.rebindTextures(P,ke.get(P.texture).__webglTexture,ke.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let ft=P.depthTexture;if(De.__boundDepthTexture!==ft){if(ft!==null&&ke.has(ft)&&(P.width!==ft.image.width||P.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(P)}}let Oe=P.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Le=!0);let Ke=ke.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?$=Ke[W][re]:$=Ke[W],Q=!0):P.samples>0&&qe.useMultisampledRTT(P)===!1?$=ke.get(P).__webglMultisampledFramebuffer:Array.isArray(Ke)?$=Ke[re]:$=Ke,Y.copy(P.viewport),Z.copy(P.scissor),oe=P.scissorTest}else Y.copy(Ze).multiplyScalar(ue).floor(),Z.copy(gt).multiplyScalar(ue).floor(),oe=It;if(re!==0&&($=b),we.bindFramebuffer(k.FRAMEBUFFER,$)&&we.drawBuffers(P,$),we.viewport(Y),we.scissor(Z),we.setScissorTest(oe),Q){let De=ke.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,De.__webglTexture,re)}else if(Le){let De=W;for(let Oe=0;Oe<P.textures.length;Oe++){let Ke=ke.get(P.textures[Oe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Oe,Ke.__webglTexture,re,De)}}else if(P!==null&&re!==0){let De=ke.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,De.__webglTexture,re)}O=-1};function Ea(P){let W=ke.get(P);return(W.__readFormat!==P.format||W.__readType!==P.type)&&(W.__readFormat=P.format,W.__readType=P.type,W.__formatReadable=Je.textureFormatReadable(P.format),W.__typeReadable=Je.textureTypeReadable(P.type)),W}this.readRenderTargetPixels=function(P,W,re,$,Q,Le,He,De=0){if(!(P&&P.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&He!==void 0&&(Oe=Oe[He],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){we.bindFramebuffer(k.FRAMEBUFFER,Oe);try{let Ke=P.textures[De],ft=Ke.format,wt=Ke.type;P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+De);let Ye=Ea(Ke);if(Ye.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-$&&re>=0&&re<=P.height-Q&&k.readPixels(W,re,$,Q,Ee.convert(ft),Ee.convert(wt),Le)}finally{let Ke=F!==null?ke.get(F).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(P,W,re,$,Q,Le,He,De=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&He!==void 0&&(Oe=Oe[He],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(W>=0&&W<=P.width-$&&re>=0&&re<=P.height-Q){we.bindFramebuffer(k.FRAMEBUFFER,Oe);let Ke=P.textures[De],ft=Ke.format,wt=Ke.type;P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+De);let Ye=Ea(Ke);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Tt),k.bufferData(k.PIXEL_PACK_BUFFER,Le.byteLength,k.STREAM_READ),k.readPixels(W,re,$,Q,Ee.convert(ft),Ee.convert(wt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Vt=F!==null?ke.get(F).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,Vt);let Dt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await cp(k,Dt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Tt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Le),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Tt),k.deleteSync(Dt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,W=null,re=0){let $=Math.pow(2,-re),Q=Math.floor(P.image.width*$),Le=Math.floor(P.image.height*$),He=W!==null?W.x:0,De=W!==null?W.y:0;qe.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,re,0,0,He,De,Q,Le),we.unbindTexture()},this.copyTextureToTexture=function(P,W,re=null,$=null,Q=0,Le=0){let He,De,Oe,Ke,ft,wt,Ye,Tt,Vt,Dt=P.isCompressedTexture?P.mipmaps[Le]:P.image;if(re!==null)He=re.max.x-re.min.x,De=re.max.y-re.min.y,Oe=re.isBox3?re.max.z-re.min.z:1,Ke=re.min.x,ft=re.min.y,wt=re.isBox3?re.min.z:0;else{let Mt=Math.pow(2,-Q);He=Math.floor(Dt.width*Mt),De=Math.floor(Dt.height*Mt),P.isDataArrayTexture?Oe=Dt.depth:P.isData3DTexture?Oe=Math.floor(Dt.depth*Mt):Oe=1,Ke=0,ft=0,wt=0}$!==null?(Ye=$.x,Tt=$.y,Vt=$.z):(Ye=0,Tt=0,Vt=0);let Ut=Ee.convert(W.format),hn=Ee.convert(W.type),Ge;W.isData3DTexture?(qe.setTexture3D(W,0),Ge=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(qe.setTexture2DArray(W,0),Ge=k.TEXTURE_2D_ARRAY):(qe.setTexture2D(W,0),Ge=k.TEXTURE_2D),we.activeTexture(k.TEXTURE0),we.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),we.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),we.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);let un=we.getParameter(k.UNPACK_ROW_LENGTH),Et=we.getParameter(k.UNPACK_IMAGE_HEIGHT),xi=we.getParameter(k.UNPACK_SKIP_PIXELS),tn=we.getParameter(k.UNPACK_SKIP_ROWS),Oi=we.getParameter(k.UNPACK_SKIP_IMAGES);we.pixelStorei(k.UNPACK_ROW_LENGTH,Dt.width),we.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dt.height),we.pixelStorei(k.UNPACK_SKIP_PIXELS,Ke),we.pixelStorei(k.UNPACK_SKIP_ROWS,ft),we.pixelStorei(k.UNPACK_SKIP_IMAGES,wt);let Pn=P.isDataArrayTexture||P.isData3DTexture,_i=W.isDataArrayTexture||W.isData3DTexture;if(P.isDepthTexture){let Mt=ke.get(P),Lt=ke.get(W),vn=ke.get(Mt.__renderTarget),Ht=ke.get(Lt.__renderTarget);we.bindFramebuffer(k.READ_FRAMEBUFFER,vn.__webglFramebuffer),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let nn=0;nn<Oe;nn++)Pn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(P).__webglTexture,Q,wt+nn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(W).__webglTexture,Le,Vt+nn)),k.blitFramebuffer(Ke,ft,Ke+He,ft+De,Ye,Tt,Ye+He,Tt+De,k.DEPTH_BUFFER_BIT,k.NEAREST);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||ke.has(P)){let Mt=ke.get(P),Lt=ke.get(W);we.bindFramebuffer(k.READ_FRAMEBUFFER,y),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,E);for(let vn=0;vn<Oe;vn++)Pn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Mt.__webglTexture,Q,wt+vn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Mt.__webglTexture,Q),_i?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Lt.__webglTexture,Le,Vt+vn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Lt.__webglTexture,Le),Q!==0?k.blitFramebuffer(Ke,ft,Ke+He,ft+De,Ye,Tt,Ye+He,Tt+De,k.COLOR_BUFFER_BIT,k.NEAREST):_i?k.copyTexSubImage3D(Ge,Le,Ye,Tt,Vt+vn,Ke,ft,He,De):k.copyTexSubImage2D(Ge,Le,Ye,Tt,Ke,ft,He,De);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else _i?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(Ge,Le,Ye,Tt,Vt,He,De,Oe,Ut,hn,Dt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Ge,Le,Ye,Tt,Vt,He,De,Oe,Ut,Dt.data):k.texSubImage3D(Ge,Le,Ye,Tt,Vt,He,De,Oe,Ut,hn,Dt):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Le,Ye,Tt,He,De,Ut,hn,Dt.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Le,Ye,Tt,Dt.width,Dt.height,Ut,Dt.data):k.texSubImage2D(k.TEXTURE_2D,Le,Ye,Tt,He,De,Ut,hn,Dt);we.pixelStorei(k.UNPACK_ROW_LENGTH,un),we.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et),we.pixelStorei(k.UNPACK_SKIP_PIXELS,xi),we.pixelStorei(k.UNPACK_SKIP_ROWS,tn),we.pixelStorei(k.UNPACK_SKIP_IMAGES,Oi),Le===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&k.generateMipmap(Ge),we.unbindTexture()},this.initRenderTarget=function(P){ke.get(P).__webglFramebuffer===void 0&&qe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?qe.setTextureCube(P,0):P.isData3DTexture?qe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?qe.setTexture2DArray(P,0):qe.setTexture2D(P,0),we.unbindTexture()},this.resetState=function(){T=0,R=0,F=null,we.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}};var vs={};Uf(vs,{GROUPS:()=>Qr,allMaterials:()=>dM,altKitMaterial:()=>uf,clips:()=>hf,get:()=>Ii,getBase:()=>lM,groupLoaded:()=>Nc,has:()=>Cn,load:()=>im,loadGroups:()=>nr,material:()=>cf,prop:()=>mn,releaseGPU:()=>ff,setBase:()=>Lc,tinted:()=>eo});function Zp(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Pt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in h.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Kp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][f]);let m=Kp(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Kp(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new vt(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){let v=u.getComponent(f,m);a.setComponent(f+h,m,v)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function Pu(s,e){if(e===nu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Kr||e===na){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Kr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Ac(s){let e=new Map,t=new Map,n=s.clone();return Jp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Jp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Jp(s.children[n],e.children[n],t)}var Rc=class extends Si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Cc(t,bt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cc(t,bt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ju(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=es.extractUrlBase(e);o=es.resolveURL(c,this.path)}else o=es.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Hr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===tm){try{o[bt.KHR_BINARY_GLTF]=new Qu(e)}catch(h){i&&i(h);return}r=JSON.parse(o[bt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new af(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case bt.KHR_MATERIALS_UNLIT:o[h]=new Fu;break;case bt.KHR_DRACO_MESH_COMPRESSION:o[h]=new ef(r,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:o[h]=new tf;break;case bt.KHR_MESH_QUANTIZATION:o[h]=new nf;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function jy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Wt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uu=class{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],En);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $n(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Xs(u),c.distance=h;break;case"spot":c=new Xo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Fu=class{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){let i=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],En),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}},Ou=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new et(r,r)}return Promise.all(i)}},Bu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},ku=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Hu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Gu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],En)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ft)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Vu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Wu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(r[0],r[1],r[2],En),Promise.all(i)}},Xu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},qu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(r[0],r[1],r[2],En),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ft)),Promise.all(i)}},Yu=class{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Ku=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Zu=class{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ju=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},$u=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Cc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},ju=class{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==ei.TRIANGLES&&c.mode!==ei.TRIANGLE_STRIP&&c.mode!==ei.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let v=new tt,x=new H,g=new Kt,S=new H(1,1,1),N=new Os(m.geometry,m.material,f);for(let L=0;L<f;L++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,L),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,L),l.SCALE&&S.fromBufferAttribute(l.SCALE,L),N.setMatrixAt(L,v.compose(x,g,S));let M=null;for(let L in l)if(L==="_COLOR_0"){let A=l[L];N.instanceColor=new An(A.array,A.itemSize,A.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(M===null){let p=N.geometry;M=new Pt,M.name=p.name;for(let _ in p.attributes)M.setAttribute(_,p.attributes[_]);for(let _ in p.morphAttributes)M.morphAttributes[_]=p.morphAttributes[_];p.index!==null&&M.setIndex(p.index),M.morphTargetsRelative=p.morphTargetsRelative;for(let _ of p.groups)M.addGroup(_.start,_.count,_.materialIndex);p.boundingBox!==null&&(M.boundingBox=p.boundingBox.clone()),p.boundingSphere!==null&&(M.boundingSphere=p.boundingSphere.clone()),M.drawRange.start=p.drawRange.start,M.drawRange.count=p.drawRange.count,M.userData=Object.assign({},p.userData),N.geometry=M}let A=l[L];M.setAttribute(L,new An(A.array,A.itemSize,A.normalized))}Gt.prototype.copy.call(N,m),this.parser.assignFinalMaterial(N),d.push(N)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},tm="glTF",ca=12,$p={JSON:1313821514,BIN:5130562},Qu=class{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ca,r=new DataView(e,ca),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===$p.JSON){let c=new Uint8Array(e,ca+o,a);this.content=n.decode(c)}else if(l===$p.BIN){let c=ca+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ef=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=rf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=rf[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=jr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let m in d.attributes){let v=d.attributes[m],x=l[m];x!==void 0&&(v.normalized=x)}h(d)},a,c,En,f)})})}},tf=class{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},nf=class{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}},Ic=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,v=m-c,x=-2*d+3*f,g=d-f,S=1-x,N=g-f+h;for(let M=0;M!==a;M++){let L=o[v+M+a],A=o[v+M+l]*u,p=o[m+M+a],_=o[m+M]*u;r[M]=S*L+N*A+x*p+g*_}return r}},Qy=new Kt,sf=class extends Ic{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Qy.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jp={9728:Zt,9729:sn,9984:Ul,9985:qr,9986:js,9987:jn},Qp={33071:Ln,33648:Cr,10497:us},Lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eM={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Ls},Nu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Hs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),s.DefaultMaterial}function tr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ri(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function iM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sM(s){let e,t=s.extensions&&s.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Du(t.attributes):e=s.indices+":"+Du(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Du(s.targets[n]);return e}function Du(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function of(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var oM=new tt,af=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&o<98?(this.textureLoader=new Gs(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Yo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return tr(r,a,i),Ri(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(es.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Lu[i.type],a=jr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new vt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Lu[i.type],c=jr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,v,x;if(d&&d!==h){let g=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,N=t.cache.get(S);N||(v=new c(a,g*d,i.count*d/u),N=new Fs(v,d/u),t.cache.add(S,N)),x=new fs(N,l,f%d/u,m)}else a===null?v=new c(i.count*l):v=new c(a,f,i.count*l),x=new vt(v,l,m);if(i.sparse!==void 0){let g=Lu.SCALAR,S=jr[i.sparse.indices.componentType],N=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,L=new S(o[1],N,i.sparse.count*g),A=new c(o[2],M,i.sparse.count*l);a!==null&&(x=new vt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let p=0,_=L.length;p<_;p++){let C=L[p];if(x.setX(C,A[p*l]),l>=2&&x.setY(C,A[p*l+1]),l>=3&&x.setZ(C,A[p*l+2]),l>=4&&x.setW(C,A[p*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=jp[f.magFilter]||sn,u.minFilter=jp[f.minFilter]||jn,u.wrapS=Qp[f.wrapS]||us,u.wrapT=Qp[f.wrapT]||us,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Zt&&u.minFilter!==sn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,m){t.parse(f,d,m)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,m){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){let g=new rn(x);g.needsUpdate=!0,d(g)}),t.load(es.resolveURL(f,r.path),v,void 0,m)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Ri(f,o),f.userData.mimeType=o.mimeType||rM(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[bt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new kr,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Br,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Hs}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[bt.KHR_MATERIALS_UNLIT]){let h=i[bt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],En),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=$t);let u=r.alphaMode||Nu.OPAQUE;if(u===Nu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Nu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==dn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new et(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==dn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==dn){let h=r.emissiveFactor;a.emissive=new be().setRGB(h[0],h[1],h[2],En)}return r.emissiveTexture!==void 0&&o!==dn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ri(h,r),t.associations.set(h,{materials:e}),r.extensions&&tr(i,h,r),h})}createUniqueName(e){let t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return em(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=sM(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=em(new Pt,c,t),c.mode===ei.TRIANGLE_STRIP?f=f.then(d=>Pu(d,na)):c.mode===ei.TRIANGLE_FAN&&(f=f.then(d=>Pu(d,Kr))),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?tM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let v=u[d],x=o[d],g,S=c[d];if(x.mode===ei.TRIANGLES||x.mode===ei.TRIANGLE_STRIP||x.mode===ei.TRIANGLE_FAN||x.mode===void 0){let N=r.isSkinnedMesh===!0,M=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");N&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=N&&M?new Lo(v,S):new xt(v,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(x.mode===ei.LINES)g=new Do(v,S);else if(x.mode===ei.LINE_STRIP)g=new zs(v,S);else if(x.mode===ei.LINE_LOOP)g=new Uo(v,S);else if(x.mode===ei.POINTS)g=new ai(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(g.geometry.morphAttributes).length>0&&iM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ri(g,r),x.extensions&&tr(i,g,x),t.assignFinalMaterial(g),h.push(g)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&tr(i,h[0],r),h[0];let f=new zt;r.extensions&&tr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Mc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new tt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new No(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],m=i.samplers[d.sampler],v=d.target,x=v.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,S=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",S)),c.push(m),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],v=h[3],x=h[4],g=[];for(let N=0,M=f.length;N<M;N++){let L=f[N],A=d[N],p=m[N],_=v[N],C=x[N];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();let D=n._createAnimationTracks(L,A,p,_,C);if(D)for(let z=0;z<D.length;z++)g.push(D[z])}let S=new hi(r,void 0,g);return Ri(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,oM)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new H().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Or:c.length>1?u=new zt:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ri(u,r),r.extensions&&tr(n,u,r),r.matrix!==void 0){let h=new tt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new zt;n.name&&(r.name=i.createUniqueName(n.name)),Ri(r,n),n.extensions&&tr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(Ac(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof bn||f instanceof rn)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}_s[r.path]===_s.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(_s[r.path]){case _s.weights:u=$i;break;case _s.rotation:u=ji;break;case _s.translation:case _s.scale:u=ms;break;default:n.itemSize===1?u=$i:u=ms;break}let h=i.interpolation!==void 0?eM[i.interpolation]:Ns,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let v=new u(l[d]+"."+_s[r.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=of(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ji?sf:Ic;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function aM(s,e,t){let n=e.attributes,i=new Vn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let u=of(jr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new H,l=new H;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let v=of(jr[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function em(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=rf[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return St.workingColorSpace!==En&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),Ri(s,e),aM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?nM(s,e.targets,t):s})}Jn.enabled=!0;var Pc="assets/models/";function Lc(s){Pc=s.endsWith("/")?s:s+"/"}function lM(){return Pc}var Qr={chars:[...Array.from({length:12},(s,e)=>`characters/villager-${String(e).padStart(2,"0")}.glb`),"characters/villager-anims.glb","hats/hats.glb"],village:["houses/house-0.glb","houses/house-1.glb","houses/house-2.glb","houses/house-3.glb","props/village.glb"],extra:["props/graveyard.glb","characters/ghost.glb"],cine:["interior/furniture.glb","interior/clues.glb","characters/vampire.glb","characters/bat.glb"]},is=new Map,ha=new Map,pi=new Map,lf=null,Ci=null;function cM(){return lf||(lf=new Rc),lf}function nm(s){var i;let e=s.name||"mat",t=e;if((e==="cloth"||e.startsWith("tint"))&&(t=e),pi.has(t))return pi.get(t);let n;return e==="window"?n=new dn({color:16777215,name:e,fog:!0}):(n=new on({name:e,map:s.map||null,color:s.color?s.color.clone():new be(1,1,1),side:s.side,transparent:!1}),s.emissive&&s.emissive.r+s.emissive.g+s.emissive.b>0&&(n.emissive.copy(s.emissive),n.emissiveIntensity=(i=s.emissiveIntensity)!=null?i:1)),n.map&&(n.map.colorSpace=Ft,n.map.anisotropy=2),pi.set(t,n),n}function cf(s){return pi.get(s)}function hM(s,e){e.scene.traverse(t=>{if(!t.isMesh)return;if(Array.isArray(t.material))t.material=t.material.map(nm);else{let i=t.material;t.material=nm(i),i!==t.material&&i.map&&i.map!==t.material.map&&i.map.dispose(),i!==t.material&&i.dispose()}t.isSkinnedMesh&&(t.frustumCulled=!1)}),s.includes("/villager-")&&!s.includes("anims")&&uM(e)}function uM(s){let e=[];s.scene.traverse(r=>{r.isSkinnedMesh&&e.push(r)});let t=e.filter(r=>r.material.name==="villager");if(t.length<2)return;let[n,...i]=t;try{let r=t.map(a=>{let l=a.geometry.clone();for(let c of Object.keys(l.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(c)||l.deleteAttribute(c);return l}),o=Zp(r,!1);if(!o)return;n.geometry.dispose(),n.geometry=o;for(let a of i)a.parent.remove(a),a.geometry.dispose()}catch{}}function im(s,e){if(is.has(s))return e&&e(),Promise.resolve(is.get(s));if(ha.has(s))return ha.get(s).then(n=>(e&&e(),n));let t=new Promise((n,i)=>{cM().load(Pc+s,r=>{try{hM(s,r)}catch(o){console.warn("[VKWorld] haz\u0131rlama hatas\u0131",s,o)}is.set(s,r),ha.delete(s),n(r)},void 0,r=>{ha.delete(s),i(r)})});return ha.set(s,t),t.then(n=>(e&&e(),n))}function nr(s,e){let t=[];for(let r of s)for(let o of Qr[r])t.includes(o)||t.push(o);let n=0,i=t.length;return e&&e(0,i),Promise.all(t.map(r=>im(r,()=>{n++,e&&e(n,i)})))}function Cn(s){return is.has(s)}function Ii(s){return is.get(s)}function Nc(s){return Qr[s].every(e=>is.has(e))}var fM={graveyard:"props/graveyard.glb",village:"props/village.glb",furniture:"interior/furniture.glb",clues:"interior/clues.glb"};function mn(s,e){let t=is.get(fM[s]||"props/village.glb");return t&&t.scene.getObjectByName(e)||null}function hf(){let s=is.get("characters/villager-anims.glb");return s?s.animations:[]}var ua=new Map;function eo(s,e,t){let n=s+"|"+e+(t||"");if(ua.has(n))return ua.get(n);let i=pi.get(s);if(!i)return null;let r=i.clone();return r.color.set(e),r.name=s,ua.set(n,r),r}function uf(){if(pi.has("fantasy-town-b"))return pi.get("fantasy-town-b");let s=pi.get("fantasy-town");if(!s)return null;let e=s.clone();return e.name="fantasy-town-b",Ci||(Ci=new Gs().load(Pc+"textures/fantasy-town-b.png"),Ci.flipY=!1,Ci.colorSpace=Ft,Ci.anisotropy=2,s.map&&(Ci.wrapS=s.map.wrapS,Ci.wrapT=s.map.wrapT)),e.map=Ci,pi.set("fantasy-town-b",e),e}function dM(){return[...pi.values(),...ua.values()]}function ff(){let s=new Set,e=t=>{t&&!s.has(t)&&(s.add(t),t.dispose())};for(let t of is.values())t.scene.traverse(n=>{n.geometry&&e(n.geometry);let i=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of i)e(r),r.map&&e(r.map)});for(let t of pi.values())e(t),t.map&&e(t.map);for(let t of ua.values())e(t);Ci&&e(Ci)}var gn=["#d7263d","#2b59c3","#2f9e44","#f06595","#f76707","#f2c12e","#3b3b46","#e9ecef","#7048e8","#8d5a3b","#15aabf","#94d82d","#862e3c","#ffa8c5","#1c2e6e","#868e96","#d9b99b","#ff8364","#6b7a2a","#b197fc"],pM=["K\u0131rm\u0131z\u0131","Mavi","Ye\u015Fil","Pembe","Turuncu","Sar\u0131","Siyah","Beyaz","Mor","Kahverengi","Camg\xF6be\u011Fi","F\u0131st\u0131k","Bordo","G\xFCl","Lacivert","Gri","Bej","Mercan","Zeytin","Lavanta"],df=[null,"hat-1-hasir","hat-2-bere","hat-3-cicek","hat-4-silindir","hat-5-bandana","hat-6-filiz","hat-7-kasket","hat-8-kulaklik"],mM=["\u015Eapkas\u0131z","Has\u0131r \u015Fapka","Bere","\xC7i\xE7ek","Silindir","Bandana","Filiz","Kasket","Kulakl\u0131k"],gM=["G\xF6zl\xFCkl\xFC","Topuzlu","Sakall\u0131","Bereli","Yelekli","K\u0131z\u0131l topuz","Korsan","\xD6nl\xFCkl\xFC","Tak\u0131m elbiseli","Uzun sa\xE7l\u0131","Kitap kurdu","At kuyruklu"],xM=["Ye\u015Fil g\xF6mlekli, g\xF6zl\xFCkl\xFC","Sar\u0131 ti\u015F\xF6rtl\xFC, topuzlu","Kel, sakall\u0131","Bereli, mavi g\xF6mlekli","K\u0131sa sa\xE7l\u0131, yelekli","K\u0131z\u0131l topuzlu, ceketli","G\xF6z bantl\u0131, sakall\u0131","Uzun siyah sa\xE7l\u0131, \xF6nl\xFCkl\xFC","K\u0131z\u0131l sa\xE7l\u0131, tak\u0131m elbiseli","K\u0131z\u0131l uzun sa\xE7l\u0131","G\xF6zl\xFCkl\xFC, \xF6nl\xFCkl\xFC","At kuyruklu, ask\u0131l\u0131"],sm=[0,.052,-.01,.105,0,.105,0,.045,.051,0,.005,.045],rm=gn.map((s,e)=>({id:e,hex:s,name:pM[e]})),om=mM.map((s,e)=>({id:e,name:s,node:df[e]})),am=gM.map((s,e)=>({id:e,name:s,desc:xM[e]}));var pf={vampir:!0,iftiraci:!0};var ti={vampir:{label:"\u{1FA78} Hedefin",color:"#d7263d"},iftiraci:{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"},doktor:{label:"\u{1F6E1}\uFE0F Koruman",color:"#5ef0a0"},kahin:{label:"\u{1F52E} Bak\u0131lacak",color:"#9b7bff"},gozcu:{label:"\u{1F441}\uFE0F G\xF6zleniyor",color:"#8fb4ff"},heal:{label:"\u{1F9EA} \u0130ksir",color:"#5ef0a0"},poison:{label:"\u2620\uFE0F Zehir",color:"#94d82d"},vote:{label:"\u2696\uFE0F Oyun",color:"#f2c12e"},shoot:{label:"\u{1F3AF} Hedef",color:"#ff8364"}},ct=(s,e,t)=>s<e?e:s>t?t:s,mf=(s,e,t)=>s+(e-s)*t,to=s=>s*s*(3-2*s),Xn=(s,e)=>1-Math.exp(-s*e),We=Math.PI*2;function qn(s){return s=(s+Math.PI)%We,s<0&&(s+=We),s-Math.PI}function In(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}var _M=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,vM=`
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
}`,yM=`
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
}`,MM=`
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.0, length(c));
  gl_FragColor = vec4(vec3(0.92, 0.94, 1.0), a * vA);
}`;function lm(s,e){let t=new zt;t.name="sky",s.add(t);let n=new Jt({vertexShader:_M,fragmentShader:vM,side:pn,depthWrite:!1,depthTest:!0,fog:!1,uniforms:{uTop:{value:new be},uHor:{value:new be},uSun:{value:new be},uSunDir:{value:new H(0,1,0)},uMoonDir:{value:new H(0,1,0)},uSunVis:{value:1},uMoonVis:{value:0},uGlow:{value:1},uMoonCol:{value:new be(.93,.95,1)}}}),i=new xt(new ko(450,32,16),n);i.renderOrder=-10,i.frustumCulled=!1,t.add(i);let r=In(77),o=700,a=new Float32Array(o*3),l=new Float32Array(o),c=new Float32Array(o);for(let x=0;x<o;x++){let g=r(),S=r(),N=g*We,M=.04+Math.pow(S,.8)*.96,L=Math.sqrt(1-M*M);a[x*3]=Math.cos(N)*L*420,a[x*3+1]=M*420,a[x*3+2]=Math.sin(N)*L*420,l[x]=1+Math.pow(r(),6)*3.2,c[x]=r()*3}let u=new Pt;u.setAttribute("position",new vt(a,3)),u.setAttribute("aSize",new vt(l,1)),u.setAttribute("aPhase",new vt(c,1));let h=new Jt({vertexShader:yM,fragmentShader:MM,transparent:!0,depthWrite:!1,blending:Un,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uPx:{value:1}}}),f=new ai(u,h);f.frustumCulled=!1,f.renderOrder=-9,t.add(f);let d=bM();t.add(d);let m=wM();return t.add(m),{group:t,update(x,g,S,N,M){let L=n.uniforms;M&&L.uMoonCol.value.copy(M),L.uTop.value.copy(x.top),L.uHor.value.copy(x.hor),L.uSun.value.copy(x.sun),L.uSunDir.value.copy(x.sunDir),L.uMoonDir.value.copy(x.moonDir),L.uSunVis.value=x.sunVis,L.uMoonVis.value=x.moonVis,L.uGlow.value=.6+x.dusk*1.4,h.uniforms.uTime.value=g,h.uniforms.uAlpha.value=x.stars,h.uniforms.uPx.value=N,f.visible=x.stars>.01,t.position.set(S.position.x,0,S.position.z),fa.color.copy(x.hor).lerp(x.sun,.35).lerp(SM,.55*(1-x.night)),fa.color.multiplyScalar(.55+.45*(1-x.night*.8)),d.rotation.y=g*.004,d.visible=e.clouds,no.uniforms.uFar.value.copy(x.hor),no.uniforms.uNear.value.copy(x.gnd).lerp(x.hor,.35).multiplyScalar(.9),no.uniforms.uTint.value.copy(x.sky)},dispose(){t.traverse(x=>{x.geometry&&x.geometry.dispose()}),n.dispose(),h.dispose(),fa.dispose(),no.dispose(),s.remove(t)}}}var SM=new be(1,1,1),fa=null,no=null;function bM(){let s=In(4242),e=[];for(let a=0;a<11;a++){let l=s()*We,c=210+s()*120,u=70+s()*55,h=3+Math.floor(s()*4);for(let f=0;f<h;f++){let d=new Bo(1,0),m=9+s()*12;d.scale(m*(1.3+s()*.6),m*.55,m),d.translate((f-h/2)*13+s()*5,s()*4,s()*8),d.rotateY(l+Math.PI/2),d.translate(Math.cos(l)*c,u,Math.sin(l)*c),e.push(d)}}let t=TM(e),n=t.getAttribute("position"),i=new Float32Array(n.count*3);t.computeVertexNormals();let r=t.getAttribute("normal");for(let a=0;a<n.count;a++){let l=.72+.28*Math.max(0,r.getY(a))+.08*r.getX(a);i[a*3]=l,i[a*3+1]=l,i[a*3+2]=l*1.03}t.setAttribute("color",new vt(i,3)),fa=new dn({vertexColors:!0,fog:!1,transparent:!0,opacity:.92,depthWrite:!1});let o=new xt(t,fa);return o.renderOrder=-8,o.frustumCulled=!1,o}function wM(){let s=In(9001),e=[],t=[],n=[],i=[{r:380,h:125,n:70,k:0},{r:300,h:62,n:90,k:1}];for(let a of i){let l=e.length/3,c=0;for(let u=0;u<=a.n;u++){let h=u/a.n*We,f=a.h*(.35+.65*Math.abs(Math.sin(h*3.1+a.k)*.6+Math.sin(h*7.3+1.7*a.k)*.3+(s()-.5)*.35));u===a.n&&(f=c),u===0&&(c=f);let d=Math.cos(h)*a.r,m=Math.sin(h)*a.r;if(e.push(d,-20,m,d,f,m),t.push(a.k,0,0,a.k,1,0),u<a.n){let v=l+u*2;n.push(v,v+2,v+1,v+1,v+2,v+3)}}}let r=new Pt;r.setAttribute("position",new Ct(e,3)),r.setAttribute("color",new Ct(t,3)),r.setIndex(n),no=new Jt({side:$t,fog:!1,depthWrite:!1,uniforms:{uFar:{value:new be},uNear:{value:new be},uTint:{value:new be}},vertexShader:"attribute vec3 color; varying vec2 vC; void main(){ vC = color.xy; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uFar, uNear, uTint; varying vec2 vC;
      void main(){
        // yak\u0131n s\u0131ra koyu ve tok, uzak s\u0131ra ufuk rengine yak\u0131n (hava perspektifi)
        vec3 nearC = mix(uNear * 0.8, uFar, 0.12 + 0.3 * vC.y);
        vec3 farC = mix(mix(uNear, uTint, 0.45), uFar, 0.5 + 0.3 * vC.y);
        gl_FragColor = vec4(mix(farC, nearC, vC.x), 1.0);
        #include <colorspace_fragment>
      }`});let o=new xt(r,no);return o.renderOrder=-7,o.frustumCulled=!1,o}function TM(s){let e=0;for(let r of s)e+=r.getAttribute("position").count;let t=new Float32Array(e*3),n=0;for(let r of s){let o=r.getAttribute("position").array;t.set(o,n),n+=o.length,r.dispose()}let i=new Pt;return i.setAttribute("position",new vt(t,3)),i}function Dc(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function gf(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let o=Dc(t,n),a=Dc(t+1,n),l=Dc(t,n+1),c=Dc(t+1,n+1);return o+(a-o)*i+(l-o)*r+(o-a-l+c)*i*r}function cm(s,e){return gf(s,e)*.55+gf(s*2.1,e*2.1)*.3+gf(s*4.3,e*4.3)*.15}function hm(s,e){let r=[];for(let A=0;A<=56;A++){let p=A/56;r.push(p<.5?p*2*48:48+Math.pow((p-.5)*2,1.6)*272)}let o=6721,a=new Float32Array(o*3),l=new Float32Array(o*2),c=new Float32Array(o*3),u=[];for(let A=1;A<=56;A++)for(let p=0;p<120;p++){let _=1+(A-1)*120+p,C=1+(A-1)*120+(p+1)%120;if(A===1)u.push(0,C,_);else{let D=1+(A-2)*120+p,z=1+(A-2)*120+(p+1)%120;u.push(D,z,_,z,C,_)}}let h=new Pt;h.setAttribute("position",new vt(a,3)),h.setAttribute("uv",new vt(l,2)),h.setAttribute("color",new vt(c,3)),h.setIndex(u);let f=document.createElement("canvas");f.width=f.height=e.groundTex;let d=f.getContext("2d"),m=new Bs(f);m.colorSpace=Ft,m.wrapS=m.wrapT=Ln,m.anisotropy=4;let v=new on({map:m,vertexColors:!0}),x=new xt(h,v);x.receiveShadow=!0,x.name="ground",x.renderOrder=-1,s.add(x);let g=30,S=45;function N(A,p){let _=Math.hypot(A,p);if(_<=g)return 0;let C=to(ct((_-g)/26,0,1)),D=cm(A*.018+3,p*.018-7),z=ct((_-g)/140,0,1);return C*(.6+D*3.5)+z*z*z*(8+D*14)}function M(){let A=0,p=(_,C)=>{let D=N(_,C);a[A*3]=_,a[A*3+1]=D,a[A*3+2]=C,l[A*2]=_/(2*S)+.5,l[A*2+1]=1-(C/(2*S)+.5);let z=Math.hypot(_,C),B=cm(_*.05,C*.05),b=ct((z-g)/60,0,1),y=ct(D/30,0,1),E=.92+(B-.5)*.22;c[A*3]=E*(1-b*.32)+y*.08,c[A*3+1]=E*(1-b*.22),c[A*3+2]=E*(1-b*.18)+y*.06,A++};p(0,0);for(let _=1;_<=56;_++)for(let C=0;C<120;C++){let D=C/120*We+_%2*(Math.PI/120);p(Math.cos(D)*r[_],Math.sin(D)*r[_])}h.getAttribute("position").needsUpdate=!0,h.getAttribute("uv").needsUpdate=!0,h.getAttribute("color").needsUpdate=!0,h.computeVertexNormals(),h.computeBoundingSphere()}function L(A,p){let _=!!(p&&p.snow);g=A.R+10,S=A.R+17,M();let C=f.width,D=C/(2*S),z=Y=>(Y+S)*D,B=Y=>(Y+S)*D,b=In(31337);d.globalCompositeOperation="source-over",d.globalAlpha=1,d.fillStyle=_?"#e4ebf2":"#7db457",d.fillRect(0,0,C,C);for(let Y=0;Y<260;Y++){let Z=b()*C,oe=b()*C,q=(2+b()*7)*D,ee=d.createRadialGradient(Z,oe,0,Z,oe,q),he=_?b()<.5?"255,255,255":b()<.5?"200,212,228":"176,196,170":b()<.5?"120,170,82":b()<.5?"92,136,66":"138,160,78";ee.addColorStop(0,`rgba(${he},0.45)`),ee.addColorStop(1,`rgba(${he},0)`),d.fillStyle=ee,d.fillRect(Z-q,oe-q,q*2,q*2)}for(let Y=0;Y<C*6;Y++){let Z=b()*C,oe=b()*C;d.fillStyle=_?b()<.5?"rgba(255,255,255,0.4)":"rgba(170,186,206,0.25)":b()<.5?"rgba(150,196,100,0.35)":"rgba(70,112,52,0.3)",d.fillRect(Z,oe,1+b()*1.5,1+b()*2.5)}for(let Y=0;Y<380;Y++){let Z=b()*We,oe=A.Rp+2+b()*(S-A.Rp-2),q=z(Math.cos(Z)*oe),ee=B(Math.sin(Z)*oe);d.fillStyle=["#f4e4c1","#ffd34d","#c9a0ff","#ff9fb8"][Math.floor(b()*4)],d.globalAlpha=_?0:.8,d.beginPath(),d.arc(q,ee,Math.max(1,D*.06),0,We),d.fill()}d.globalAlpha=1;for(let Y of A.houses){let Z=z(Y.x),oe=B(Y.z),q=(Y.size*.62+1.4)*D,ee=d.createRadialGradient(Z,oe,q*.3,Z,oe,q);ee.addColorStop(0,_?"rgba(150,160,176,0.6)":"rgba(58,70,40,0.75)"),ee.addColorStop(1,_?"rgba(150,160,176,0)":"rgba(58,70,40,0)"),d.fillStyle=ee,d.fillRect(Z-q,oe-q,q*2,q*2)}let y=(Y,Z,oe,q)=>{d.globalAlpha=q,d.strokeStyle=oe,d.lineWidth=Z*D,d.lineCap="round",d.lineJoin="round",d.beginPath(),d.moveTo(z(Y[0][0]),B(Y[0][1]));for(let ee=1;ee<Y.length;ee++)d.lineTo(z(Y[ee][0]),B(Y[ee][1]));d.stroke(),d.globalAlpha=1},E=[];for(let Y of A.houses){let Z=Y.door,oe=Math.atan2(Z.ax,Z.az),q=A.Rp-.5,ee=[[Z.dx,Z.dz],[Z.ax,Z.az],[Math.sin(oe)*A.Rr,Math.cos(oe)*A.Rr],[Math.sin(oe)*q,Math.cos(oe)*q]];E.push(ee)}let T=A.gateAngle,R=[[Math.sin(T)*(A.Rp-.5),Math.cos(T)*(A.Rp-.5)],[Math.sin(T)*(A.R+2),Math.cos(T)*(A.R+2)],[Math.sin(T+.05)*(A.R+12),Math.cos(T+.05)*(A.R+12)],[Math.sin(T-.02)*(S+4),Math.cos(T-.02)*(S+4)]];E.push(R);for(let Y of E)y(Y,2.6,_?"#b4b8bf":"#8f7a52",.35);for(let Y of E)y(Y,1.7,_?"#8f8476":"#a88d5e",.85);for(let Y of E)y(Y,.7,_?"#a59a8c":"#b89c6a",.5);d.globalAlpha=.28,d.strokeStyle="#a88d5e",d.lineWidth=1.6*D,d.beginPath(),d.arc(z(0),B(0),A.Rr*D,0,We),d.stroke(),d.globalAlpha=1;let F=(A.Rp+.8)*D,O=d.createRadialGradient(z(0),B(0),F*.6,z(0),B(0),F*1.08);_?(O.addColorStop(0,"rgba(170,166,160,1)"),O.addColorStop(.85,"rgba(184,186,190,0.95)"),O.addColorStop(1,"rgba(184,186,190,0)")):(O.addColorStop(0,"rgba(176,150,108,1)"),O.addColorStop(.85,"rgba(160,136,96,0.95)"),O.addColorStop(1,"rgba(160,136,96,0)")),d.fillStyle=O,d.beginPath(),d.arc(z(0),B(0),F*1.08,0,We),d.fill();let V=Math.max(2,.55*D);for(let Y=3.2;Y<A.Rp+.3;Y+=.62){let Z=Math.floor(We*Y/.66),oe=b()*We;for(let q=0;q<Z;q++){if(b()<.12)continue;let ee=oe+q/Z*We,he=z(Math.cos(ee)*Y),Pe=B(Math.sin(ee)*Y),ue=150+Math.floor(b()*40);d.fillStyle=_?`rgba(${ue+40},${ue+44},${ue+52},${.5+b()*.3})`:`rgba(${ue+12},${ue},${ue-22},${.55+b()*.3})`,d.save(),d.translate(he,Pe),d.rotate(ee+Math.PI/2),d.beginPath();let Ce=V*(.85+b()*.3),Xe=V*(.7+b()*.25);d.roundRect?d.roundRect(-Ce/2,-Xe/2,Ce,Xe,Xe*.3):d.rect(-Ce/2,-Xe/2,Ce,Xe),d.fill(),d.restore()}}if(O=d.createRadialGradient(z(0),B(0),0,z(0),B(0),3*D),O.addColorStop(0,"rgba(60,46,40,0.95)"),O.addColorStop(.5,"rgba(96,78,62,0.7)"),O.addColorStop(1,"rgba(120,100,76,0)"),d.fillStyle=O,d.beginPath(),d.arc(z(0),B(0),3*D,0,We),d.fill(),A.grave){let Y=z(A.grave.x),Z=B(A.grave.z),oe=6*D;O=d.createRadialGradient(Y,Z,0,Y,Z,oe),O.addColorStop(0,"rgba(70,84,58,0.85)"),O.addColorStop(1,"rgba(70,84,58,0)"),d.fillStyle=O,d.fillRect(Y-oe,Z-oe,oe*2,oe*2)}m.needsUpdate=!0}return{mesh:x,heightAt:N,paint:L,dispose(){h.dispose(),v.dispose(),m.dispose(),s.remove(x)}}}var Uc=[{size:5.4,hx:2.67,hz:2.56,height:5,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:5.4,hx:2.7,hz:2.6,height:5.4,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:6.7,hx:3.36,hz:3.36,height:5.7,front:2.875,door:[1.25,2.875],approach:[1.25,3.875],peek:[-1.25,-3.675],backWin:[-1.25,1.35,-2.875],frontWin:[-1.25,1.35,2.875],openSign:-1,alt:!1},{size:5.4,hx:2.7,hz:2.55,height:5.6,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0}],um=[0,1,3,2,1,0,2,3];function EM(s){let e=um[s%um.length],t=Uc[e].alt?(Math.floor(s/2)+s)%2:0;return{type:e,variant:t}}function Xt(s,e,t){let n=Math.cos(s.rotY),i=Math.sin(s.rotY);return{x:s.x+e*n+t*i,z:s.z-e*i+t*n}}function fm(s,e){let t=s.slice().sort((g,S)=>g.seat-S.seat),n=t.length,i=t.findIndex(g=>g.id===e);if(i>=0){let g=Math.floor(n/2);t=t.map((S,N)=>t[(i-g+N+n*2)%n])}let r=.78,o=Math.max(14.5,Math.max(n,1)*7.4/(We-r)),a=ct(o*.5,7.2,13.5),l=o-5.4,c=(We-r)/Math.max(n,1),u=t.findIndex(g=>g.id===e),h=g=>r/2+c*(g+.5),f=u>=0?-h(u):Math.PI,d=qn(f),m=t.map((g,S)=>{let N=qn(h(S)+f+Math.PI*0),M=EM(g.seat),L=Uc[M.type],A={id:g.id,seat:g.seat,angle:N,x:Math.sin(N)*o,z:Math.cos(N)*o,rotY:N+Math.PI,type:M.type,variant:M.variant,size:L.size},p=Xt(A,L.door[0],L.door[1]),_=Xt(A,L.approach[0],L.approach[1]);return A.door={dx:p.x,dz:p.z,ax:_.x,az:_.z},A}),v=o+6.5,x=d+7/v;return{n,R:o,Rp:a,Rr:l,step:c,gap:r,gateAngle:d,houses:m,grave:{x:Math.sin(x)*v,z:Math.cos(x)*v,angle:x,r:v}}}function xf(s,e,t){let n=(e-.5)/.5,i=(t-.5)/.5,r=Math.hypot(n,i)*s.Rp,o=Math.atan2(n,i);return r=Math.max(r,2.3),{x:Math.sin(o)*r,z:Math.cos(o)*r}}function dm(s,e,t){return{x:.5+e/s.Rp*.5,y:.5+t/s.Rp*.5}}var pm=20,mm=new tt,AM=new tt,RM=new Kt,CM=new Kt,IM=new H,gm=new H,yf=new H(0,1,0),xm=new be(.16,.11,.08),PM=new be("#ffc46b").multiplyScalar(1.25),LM=new be(.05,.045,.06),_m=new be("#c9b48a");var Fc={value:1},Oc=new Map;function NM(s){if(Oc.has(s))return Oc.get(s);let e=s.clone();return e.onBeforeCompile=t=>{t.uniforms.uGrow=Fc,t.vertexShader=`uniform float uGrow;
attribute vec3 aOrigin;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
{ float g = clamp(uGrow * 1.6 - fract(aOrigin.x * 0.137 + aOrigin.z * 0.091) * 0.6, 0.0, 1.0);
  g = g < 1.0 ? 1.0 - pow(1.0 - g, 3.0) * cos(g * 7.0) : 1.0;
  transformed = aOrigin + (transformed - aOrigin) * g; }`)},e.customProgramCacheKey=()=>"grow|"+s.uuid,Oc.set(s,e),e}function DM(){for(let s of Oc.values())s.dispose()}var vm=new at,ys=new H;function _f(s){let e=new zt,t=new Map;for(let{tpl:n,mats:i,cast:r}of s){n.updateWorldMatrix(!0,!0);let o=new tt().copy(n.matrixWorld).invert();n.traverse(a=>{if(!a.isMesh)return;let l=new tt().multiplyMatrices(o,a.matrixWorld),c=Array.isArray(a.material)?a.material[0]:a.material,u=c.uuid+(r?"|c":"");t.has(u)||t.set(u,{mat:c,cast:r,parts:[]});let h=t.get(u);for(let f of i)h.parts.push({geo:a.geometry,m:new tt().multiplyMatrices(f,l),org:new H().setFromMatrixPosition(f)})})}for(let n of t.values()){let i=0,r=0;for(let v of n.parts)i+=v.geo.attributes.position.count,r+=v.geo.index?v.geo.index.count:v.geo.attributes.position.count;let o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i*2),c=new Float32Array(i*3),u=i>65535?new Uint32Array(r):new Uint16Array(r),h=0,f=0;for(let v of n.parts){let x=v.geo,g=x.attributes.position,S=x.attributes.normal,N=x.attributes.uv;vm.getNormalMatrix(v.m);for(let M=0;M<g.count;M++)ys.fromBufferAttribute(g,M).applyMatrix4(v.m),o[(h+M)*3]=ys.x,o[(h+M)*3+1]=ys.y,o[(h+M)*3+2]=ys.z,S&&(ys.fromBufferAttribute(S,M).applyMatrix3(vm).normalize(),a[(h+M)*3]=ys.x,a[(h+M)*3+1]=ys.y,a[(h+M)*3+2]=ys.z),N&&(l[(h+M)*2]=N.getX(M),l[(h+M)*2+1]=N.getY(M)),c[(h+M)*3]=v.org.x,c[(h+M)*3+1]=v.org.y,c[(h+M)*3+2]=v.org.z;if(x.index){let M=x.index.array;for(let L=0;L<M.length;L++)u[f+L]=M[L]+h;f+=M.length}else{for(let M=0;M<g.count;M++)u[f+M]=h+M;f+=g.count}h+=g.count}let d=new Pt;d.setAttribute("position",new vt(o,3)),d.setAttribute("normal",new vt(a,3)),d.setAttribute("uv",new vt(l,2)),d.setAttribute("aOrigin",new vt(c,3)),d.setIndex(new vt(u,1)),d.computeBoundingSphere();let m=new xt(d,NM(n.mat));m.castShadow=n.cast,m.receiveShadow=!0,m.matrixAutoUpdate=!1,m.userData.merged=!0,e.add(m)}return e}function vf(s,e,t,n,i=1){return new tt().compose(new H(s,e,t),new Kt().setFromAxisAngle(yf,n),new H(i,i,i))}var Mf=class{constructor(e,t,n){this.type=e,this.variant=t,this.group=new zt,this.parts=[],this.list=[];let r=Ii(`houses/house-${e}.glb`).scene.children[0];r.updateWorldMatrix(!0,!0);let o=new tt().copy(r.matrixWorld).invert();for(let a of["body","door","banner"]){let l=r.getObjectByName(a);if(!l)continue;let c=new tt().multiplyMatrices(o,l.matrixWorld),u=new tt().copy(l.matrixWorld).invert();l.traverse(h=>{if(!h.isMesh)return;let f=new tt().multiplyMatrices(u,h.matrixWorld),d=h.material,m=null;d.name==="window"?m="window":d.name.startsWith("tint")?(m="owner",d=eo(d.name,"#ffffff")):t===1&&d.name==="fantasy-town"&&(d=uf());let v=new Os(h.geometry,d,pm);v.count=0,v.castShadow=m!=="window",v.receiveShadow=m!=="window",v.frustumCulled=!1,m&&(v.instanceColor=new An(new Float32Array(pm*3).fill(1),3)),this.group.add(v),this.parts.push({im:v,kind:a,nodeM:c,local:f,colorMode:m,nodePos:new H().setFromMatrixPosition(c),nodeQ:new Kt().setFromRotationMatrix(c)})})}n.add(this.group)}write(){let e=this.list.length;for(let t of this.parts)t.im.count=e;for(let t=0;t<e;t++){let n=this.list[t],i=AM.compose(IM.set(n.cx,0,n.cz),RM.setFromAxisAngle(yf,n.crot),gm.set(n.scale,n.scale*n.scaleY,n.scale));for(let r of this.parts){let o;if(r.kind==="door"){let a=CM.setFromAxisAngle(yf,n.doorAngle).premultiply(r.nodeQ);o=mm.compose(r.nodePos,a,gm.set(1,1,1)).multiply(r.local),o.premultiply(i)}else o=mm.multiplyMatrices(i,r.nodeM).multiply(r.local);r.im.setMatrixAt(t,o),r.colorMode==="owner"?r.im.setColorAt(t,n.ownerColor):r.colorMode==="window"&&r.im.setColorAt(t,n.winColor)}}for(let t of this.parts)t.im.instanceMatrix.needsUpdate=!0,t.im.instanceColor&&(t.im.instanceColor.needsUpdate=!0)}writeColors(){for(let e of this.parts)if(e.colorMode==="window"){for(let t=0;t<this.list.length;t++)e.im.setColorAt(t,this.list[t].winColor);e.im.instanceColor.needsUpdate=!0}}dispose(){for(let e of this.parts)e.im.dispose();this.group.parent&&this.group.parent.remove(this.group)}};function ym(s,e,t,n){let i=new zt;i.name="village",s.add(i);let r=new Map,o=new Map,a=null,l=null,c=null,u=null,h=!1,f=new Map,d=[],m=!0,v=!1,x=null,g=1,S=!1,N=new be("#ffc46b"),M=new be("#ff9a3c"),L=new be("#ffb85a");function A(ne,ge){let pe=ne+"-"+ge;return r.has(pe)||r.set(pe,new Mf(ne,ge,i)),r.get(pe)}function p(){for(let ge of r.values())ge.list.length=0;let ne=[...o.values()].sort((ge,pe)=>ge.seat-pe.seat);for(let ge of ne)A(ge.type,ge.variant).list.push(ge);m=!0}function _(ne,ge){let pe=a;a=ne;let Ue=new Set;for(let xe of ne.houses){Ue.add(xe.id);let ie=o.get(xe.id);if(!ie||ie.type!==xe.type||ie.variant!==xe.variant){let J=ie;ie={id:xe.id,seat:xe.seat,type:xe.type,variant:xe.variant,cx:xe.x,cz:xe.z,crot:xe.rotY,sx:xe.x,sz:xe.z,srot:xe.rotY,scale:ge?.01:1,scaleY:1,removing:!1,doorAngle:0,doorOpen:0,doorTarget:0,doorHold:0,lit:0,litTarget:0,dark:!1,dead:!1,ownerColor:J&&J.ownerColor||_m.clone(),winColor:xm.clone(),name:J?J.name:"",colorIdx:J?J.colorIdx:-1},o.set(xe.id,ie)}ie.seat=xe.seat,ie.sx=ie.cx,ie.sz=ie.cz,ie.srot=ie.crot,ie.tx=xe.x,ie.tz=xe.z,ie.trot=xe.rotY,ie.angle=xe.angle,ie.info=Uc[xe.type],ie.removing=!1,ge||(ie.cx=xe.x,ie.cz=xe.z,ie.crot=xe.rotY,ie.scale=1)}for(let[xe,ie]of o)Ue.has(xe)||(ge?(ie.removing=!0,ie.sx=ie.cx,ie.sz=ie.cz,ie.srot=ie.crot,ie.tx=ie.cx,ie.tz=ie.cz,ie.trot=ie.crot):o.delete(xe));g=ge?0:1,p(),!ge||!pe?D():(x=!0,S=!0)}function C(ne){let ge={x:ne.cx,z:ne.cz,rotY:ne.crot},pe=ne.info;return{door:Xt(ge,pe.door[0],pe.door[1]-.25),inside:Xt(ge,pe.door[0],pe.door[1]-1.2),approach:Xt(ge,pe.approach[0],pe.approach[1]+.2),peek:Xt(ge,pe.peek[0],pe.peek[1]),backWin:Xt(ge,pe.backWin[0],pe.backWin[2]),frontWin:Xt(ge,pe.frontWin[0],pe.frontWin[2]+.12),lantern:Xt(ge,pe.door[0]+.95,pe.front+.45),tomb:Xt(ge,pe.door[0]-2.6,pe.front+1.6),plaque:Xt(ge,0,pe.front+.3),rotY:ne.crot,height:pe.height}}function D(){l&&(i.remove(l),rt(l)),l=new zt,l.name="dressing",i.add(l),x=!1;let ne=In(2024+a.n),ge=new Map,pe=(I,w,X,ae,te=1,ye="village",me=null)=>{let se=ye+":"+I;ge.has(se)||ge.set(se,[]);let le=me==null?n.heightAt(w,X):me;ge.get(se).push(vf(w,le,X,ae,te))};d=[],pe("campfire-pit",0,0,.3,1,"village",0);let Ue=[],xe=[.55,2.35,4.15];for(let I=0;I<3;I++){let w=xe[I],X=3.35;pe(I===1?"log-small":"log",Math.sin(w)*X,Math.cos(w)*X,w+Math.PI/2,1,"village",0),Ue.push({x:Math.sin(w)*X,z:Math.cos(w)*X,a:w,small:I===1})}pe("stump",Math.sin(5.4)*3.2,Math.cos(5.4)*3.2,.4,1,"village",0),pe("campfire-stand",0,0,1.2,.85,"village",0);let ie=a.houses,J=["barrel","crate","hay-bale","crate-bottles","pumpkin","bucket","wheel","stool"];for(let I=0;I<ie.length;I++){let w=ie[I].angle,ae=ie[(I+1)%ie.length].angle-w;for(;ae<0;)ae+=We;if(ie.length===1||ae>Math.PI)continue;let te=w+ae/2,ye=a.R-3.4,me=Math.sin(te)*ye,se=Math.cos(te)*ye;pe("lamp-post",me,se,te+Math.PI,1),d.push({x:me,y:3.55,z:se});let le=a.R+.4,Re=J[Math.floor(ne()*J.length)];pe(Re,Math.sin(te)*le,Math.cos(te)*le,ne()*We,1),ne()<.6&&pe("bush",Math.sin(te+.04)*(le+1.6),Math.cos(te+.04)*(le+1.6),ne()*We,1.2+ne()*.5)}for(let I of o.values()){if(I.removing)continue;let w={x:I.tx,z:I.tz,rotY:I.trot},X=Xt(w,I.info.door[0]+.95,I.info.front+.45);pe("lantern",X.x,X.z,I.trot,.8,"village",0);let ae=Xt(w,-I.info.hx-.6,-I.info.hz+.6);ne()<.7&&pe(ne()<.5?"stump":"barrel",ae.x,ae.z,ne()*We,.9);let te=Xt(w,-I.info.hx+.2,I.info.front+1.2);ne()<.5&&pe(ne()<.5?"grass-large":"bush",te.x,te.z,ne()*We,1)}let Me=I=>{for(let X of ie)if(Math.abs(((I-X.angle+Math.PI)%We+We)%We-Math.PI)<.2)return!1;return Math.abs(((I-a.gateAngle+Math.PI)%We+We)%We-Math.PI)>.3},_e=[["stall",0],["cart",1],["bench",0],["stall-green",0],["hay-bale",0],["bench-stone",0],["cart-hay",1]],k=0;for(let I=0;I<40&&k<Math.min(4+Math.floor(a.n/5),_e.length);I++){let w=ne()*We;if(!Me(w))continue;let X=a.Rp+2.2+ne()*Math.max(.5,a.Rr-a.Rp-3.5),[ae]=_e[k];pe(ae,Math.sin(w)*X,Math.cos(w)*X,w+Math.PI+(ne()-.5)*.5,1),k++}let it=a.gateAngle,st=(I,w)=>({x:Math.sin(it+w/I)*I,z:Math.cos(it+w/I)*I}),Je=st(a.R+1,-2.4);pe("signpost",Je.x,Je.z,it+.6,1),Je=st(a.R-1,2.6),pe("banner-pole",Je.x,Je.z,it+Math.PI,1.2),Je=st(a.R+4,-2.6),pe("lantern-post-cabin",Je.x,Je.z,it+Math.PI,1),d.push({x:Je.x,y:2.9,z:Je.z,small:!0});let we=["tree-pine","tree-pine-tall","tree-round","tree-forest","tree-forest-tall","tree-autumn","tree-crooked","tree-pine"],Rt=e.trees,ke=a.R+8.5;for(let I=0;I<Rt;I++){let w=ne()*We,X=Math.pow(ne(),1.35),ae=ke+X*46,te=Math.sin(w)*ae,ye=Math.cos(w)*ae;if(Math.abs(((w-it+Math.PI)%We+We)%We-Math.PI)*ae<4.5&&ae<ke+30||a.grave&&Math.hypot(te-a.grave.x,ye-a.grave.z)<8.5)continue;let se=we[Math.floor(ne()*we.length)];pe(se,te,ye,ne()*We,.85+ne()*.55+X*.3)}for(let I=0;I<e.scatter;I++){let w=ne()*We,X=a.R+4.6+ne()*6,ae=Math.sin(w)*X,te=Math.cos(w)*X;if(Math.abs(((w-it+Math.PI)%We+We)%We-Math.PI)*X<3.5||a.grave&&Math.hypot(ae-a.grave.x,te-a.grave.z)<7)continue;let me=ne();pe(me<.4?"grass-large":me<.7?"grass":"bush",ae,te,ne()*We,.8+ne()*.6)}for(let I=0;I<14;I++){let w=ne()*We,X=a.Rp+.8+ne()*1.5;pe(ne()<.7?"grass":"grass-large",Math.sin(w)*X,Math.cos(w)*X,ne()*We,.8+ne()*.4)}for(let I=0;I<3;I++){let w=ne()*We,X=a.R+24+ne()*40;pe(ne()<.5?"rock-large":"rock-wide",Math.sin(w)*X,Math.cos(w)*X,ne()*We,.8+ne()*1)}let qe=[];for(let[I,w]of ge){let[X,ae]=I.split(":"),te=mn(X,ae);te&&qe.push({tpl:te,mats:w,cast:!/grass|patch|rock-flat|bush/.test(ae)})}l.add(_f(qe)),S&&(Fc.value=0,E=0,S=!1),R(),z=Ue,n.paint(a,b&&b.snow?{snow:!0}:null),Ce(),B++,m=!0}let z=[],B=0,b=null,y=null,E=1,T=["#ff5a5f","#ffd34d","#5ec8ff","#7ee08a","#c08bff"].map(ne=>new be(ne));function R(){if(u&&(i.remove(u),rt(u),u=null),!Cn("props/graveyard.glb")||!a||!a.grave)return;h=!0,u=new zt,u.name="graveyard";let ne=a.grave,ge=ne.angle+Math.PI,pe=(_e,k)=>Xt({x:ne.x,z:ne.z,rotY:ge},_e,k),Ue=new Map,xe=(_e,k,it,st=0,Je=1)=>{let we=pe(k,it);Ue.has(_e)||Ue.set(_e,[]),Ue.get(_e).push(vf(we.x,n.heightAt(we.x,we.z),we.z,ge+st,Je))},ie=In(66),J=["gravestone-cross","gravestone-round","gravestone-broken","cross-wood","gravestone-roof","gravestone-bevel"];for(let _e=0;_e<6;_e++)xe(J[_e],-3.2+_e*1.3+(ie()-.5)*.3,-2.6+(ie()-.5)*.4,(ie()-.5)*.3,.85);xe("crypt",3.6,-3.4,-.3,1),xe("trunk-dead",-4.6,.6,1.1,1),xe("pine-crooked",-5.2,-3.6,.4,1),xe("candles",1.8,-2.4,0,1),xe("pumpkin-carved",-2.2,1.9,.5,.8),xe("urn",2.6,.4,0,.8),xe("iron-fence-gate",0,3.2,0,1);for(let _e of[-2.5,-5,2.5,5])xe("iron-fence",_e,3.2,0,1);let Me=[];for(let[_e,k]of Ue){let it=mn("graveyard",_e);it&&Me.push({tpl:it,mats:k,cast:!0})}u.add(_f(Me)),i.add(u);for(let[_e,k]of f)V(_e,k)}let F=["gravestone-round","gravestone-cross","gravestone-bevel","gravestone-roof","gravestone-decorative"];function O(ne,ge,pe,Ue){let xe=f.has(ne);if(ge&&!xe){f.set(ne,{obj:null,mound:null,colorIdx:pe,born:performance.now()}),V(ne,f.get(ne));let ie=f.get(ne);Ue&&ie.obj&&(ie.obj.userData.drop=0,ie.obj.position.y=3.2)}else if(!ge&&xe){let ie=f.get(ne);ie.obj&&ie.obj.parent.remove(ie.obj),ie.mound&&ie.mound.parent.remove(ie.mound),f.delete(ne)}}function V(ne,ge){var Me,_e,k;ge.obj&&(ge.obj.parent&&ge.obj.parent.remove(ge.obj),ge.obj=null),ge.mound&&(ge.mound.parent&&ge.mound.parent.remove(ge.mound),ge.mound=null);let pe=o.get(ne);if(!pe||!Cn("props/graveyard.glb"))return;let Ue=mn("graveyard",F[pe.seat%F.length]);if(!Ue)return;let xe={x:(Me=pe.tx)!=null?Me:pe.cx,z:(_e=pe.tz)!=null?_e:pe.cz,rotY:(k=pe.trot)!=null?k:pe.crot},ie=Xt(xe,pe.info.door[0]-2.75,pe.info.front+1.7),J=Ue.clone();if(J.position.set(ie.x,0,ie.z),J.rotation.set(0,xe.rotY+.15,0),J.scale.setScalar(.62),J.traverse(it=>{it.isMesh&&(it.castShadow=!0,it.receiveShadow=!0)}),J.userData.pop=0,i.add(J),ge.obj=J,a&&a.grave){let it=[...f.keys()].indexOf(ne),st=mn("graveyard","grave-dirt");if(st){let Je=a.grave,we=Je.angle+Math.PI,Rt=-3.6+it%5*1.9,ke=.3+Math.floor(it/5)*2,qe=Xt({x:Je.x,z:Je.z,rotY:we},Rt,ke),I=st.clone();I.position.set(qe.x,n.heightAt(qe.x,qe.z),qe.z),I.rotation.y=we,I.scale.setScalar(.7),i.add(I),ge.mound=I}}}function Y(ne,ge,pe){let Ue=o.get(ne);Ue&&(Ue.colorIdx!==ge&&(Ue.colorIdx=ge,ge>=0?Ue.ownerColor.set(gn[ge]):Ue.ownerColor.copy(_m),m=!0),Ue.name=pe||"")}let Z=new be;function oe(ne,ge,pe){let Ue=!1;if(g<1){g=Math.min(1,g+ne/1.3);let ie=to(g);for(let[J,Me]of o){Me.cx=mf(Me.sx,Me.tx,ie),Me.cz=mf(Me.sz,Me.tz,ie);let _e=Me.trot-Me.srot;for(;_e>Math.PI;)_e-=We;for(;_e<-Math.PI;)_e+=We;Me.crot=Me.srot+_e*ie,Me.removing?Me.scale=Math.max(.01,1-ie):Me.scale=Math.min(1,Me.scale+ne*1.2)}if(g>=1){for(let[J,Me]of o)Me.removing&&o.delete(J);p(),x&&D()}Ue=!0}else for(let ie of o.values())ie.scale<1&&(ie.scale=Math.min(1,ie.scale+ne*1.5),Ue=!0);E<1&&(E=Math.min(1,E+ne/.9),Fc.value=E);for(let ie of f.values()){let J=ie.obj;if(J&&J.userData.drop!=null){let Me=J.userData.drop+=ne/.55;if(Me>=1)J.position.y=0,delete J.userData.drop,Ue=!0;else{let _e=Me<.7?3.2*(1-Me/.7*(Me/.7)):Math.sin((Me-.7)/.3*Math.PI)*.18;J.position.y=Math.max(0,_e)}}}let xe=pe.lamps;for(let ie of o.values()){ie.doorHold>0&&(ie.doorHold-=ne,ie.doorHold<=0&&(ie.doorTarget=0));let J=ie.doorOpen;ie.doorOpen+=(ie.doorTarget-ie.doorOpen)*Xn(ie.doorTarget>ie.doorOpen?9:5,ne),Math.abs(ie.doorOpen-J)>5e-4&&(Ue=!0),ie.doorAngle=ie.doorOpen*1.35*ie.info.openSign;let Me=ie.dark||ie.dead?0:Math.max(ie.litTarget,0);ie.lit+=(Me-ie.lit)*Xn(1.6,ne);let _e=ct(ie.lit*(.25+.75*xe),0,1);Z.copy(xm).lerp(LM,ct(pe.night*1.2,0,1)).lerp(PM,_e);let k=ie.winColor;Math.abs(Z.r-k.r)+Math.abs(Z.g-k.g)+Math.abs(Z.b-k.b)>.006&&(k.copy(Z),v=!0)}if(Ue&&(m=!0),m){for(let ie of r.values())ie.write();return m=!1,v=!1,!0}if(v){for(let ie of r.values())ie.writeColors();v=!1}return!1}function q(ne,ge,pe,Ue){let xe=ne.lamps;if(xe<.02)return;let ie=b&&b.dress==="fair";for(let J=0;J<d.length;J++){let Me=d[J],_e=.92+.08*Math.sin(ge*9+J*1.7),k=ie?T[J%T.length]:N;pe.add(Me.x,Me.y,Me.z,Me.small?1.4:2,k,.85*xe*_e),Ue.add(Me.x,.03,Me.z,Me.small?6:8.5,ie?k:M,.3*xe)}if(ie&&ee)for(let J=0;J<ee.length;J++){let Me=ee[J];pe.add(Me.x,Me.y,Me.z,.7,T[J%T.length],.8*xe*(.8+.2*Math.sin(ge*3+J)))}for(let J of o.values()){if(J.scale<.9)continue;let Me={x:J.cx,z:J.cz,rotY:J.crot},_e=Xt(Me,J.info.door[0]+.95,J.info.front+.45),k=J.dead?.25:1;pe.add(_e.x,.62,_e.z,.9,N,.9*xe*k),Ue.add(_e.x,.03,_e.z,3.6,M,.26*xe*k);let it=J.lit*xe*(.86+.08*Math.sin(ge*6.3+J.seat*2.1)+.06*Math.sin(ge*13.7+J.seat));if(it>.02){let st=Xt(Me,J.info.frontWin[0],J.info.frontWin[2]+.25);pe.add(st.x,1.35,st.z,1.7,L,.5*it);let Je=Xt(Me,J.info.frontWin[0],J.info.frontWin[2]+1.6);Ue.add(Je.x,.03,Je.z,4.2,L,.22*it)}}}let ee=null,he=!1;function Pe(ne){let ge=b;b=ne&&ne.id?ne:null,N.set(b&&b.lamp?b.lamp:"#ffc46b"),M.set(b&&b.lamp?b.lamp:"#ff9a3c");let pe=!!(ge&&ge.snow)!=!!(b&&b.snow);a&&pe&&n.paint(a,b&&b.snow?{snow:!0}:null),ue(!!(b&&b.snow)),Ce()}function ue(ne){if(ne===he)return;he=ne;let ge=pe=>{!pe||!pe.isMeshLambertMaterial||!pe.map||pe.name==="villager"||(ne?(pe.userData.preFrost||(pe.userData.preFrost=pe.emissive.clone()),pe.emissive.set("#a9bad0").multiplyScalar(.22)):pe.userData.preFrost&&pe.emissive.copy(pe.userData.preFrost))};s.traverse(pe=>{pe.material&&(Array.isArray(pe.material)?pe.material:[pe.material]).forEach(ge)})}function Ce(){if(y&&(i.remove(y),y.traverse(xe=>{(xe.userData.merged||xe.userData.themeGeo)&&xe.geometry.dispose(),xe.userData.themeMat&&xe.material.dispose()}),y=null),ee=null,!b||!b.dress||!a)return;y=new zt,y.name="theme";let ne=In(99+a.n),ge=new Map,pe=(xe,ie,J,Me,_e=1)=>{ge.has(xe)||ge.set(xe,[]),ge.get(xe).push(vf(ie,n.heightAt(ie,J),J,Me,_e))};if(b.dress==="harvest"){for(let J of o.values()){if(J.removing)continue;let Me={x:J.tx,z:J.tz,rotY:J.trot},_e=Xt(Me,J.info.door[0]-.9,J.info.front+.7);if(pe("pumpkin",_e.x,_e.z,ne()*We,.7+ne()*.3),ne()<.5){let k=Xt(Me,-J.info.hx+.5,J.info.front+.9);pe("hay-bale",k.x,k.z,J.trot+.3,.9)}}for(let J=0;J<6;J++){let Me=J/6*We+.4,_e=a.Rp+1.2;pe(J%2?"pumpkin":"hay-bale",Math.sin(Me)*_e,Math.cos(Me)*_e,Me,J%2?.9:1)}let xe=a.gateAngle+.5,ie=a.Rp+2.6;pe("cart-hay",Math.sin(xe)*ie,Math.cos(xe)*ie,xe+1.2,1)}else if(b.dress==="fair"){let xe=d.filter(Me=>!Me.small),ie=[],J=[];ee=[];for(let Me=0;Me<xe.length;Me++){let _e=xe[Me],k=xe[(Me+1)%xe.length];if(Math.hypot(_e.x-k.x,_e.z-k.z)>14)continue;let it=9;for(let st=0;st<it;st++){let Je=(st+.15)/it,we=(st+.85)/it,Rt=(st+.5)/it,ke=te=>3.25-Math.sin(te*Math.PI)*.9,qe=te=>[_e.x+(k.x-_e.x)*te,ke(te),_e.z+(k.z-_e.z)*te],I=qe(Je),w=qe(we),X=qe(Rt);ie.push(...I,...w,X[0],X[1]-.45,X[2]);let ae=T[(Me+st)%T.length];for(let te=0;te<3;te++)J.push(ae.r,ae.g,ae.b);st%3===1&&ee.push({x:X[0],y:X[1]+.05,z:X[2]})}}if(ie.length){let Me=new Pt;Me.setAttribute("position",new Ct(ie,3)),Me.setAttribute("color",new Ct(J,3)),Me.computeVertexNormals();let _e=new on({vertexColors:!0,side:$t}),k=new xt(Me,_e);k.userData.themeGeo=!0,k.userData.themeMat=!0,y.add(k)}for(let Me=0;Me<5;Me++){let _e=Me/5*We+.2,k=a.Rp+1.6;pe("banner-pole",Math.sin(_e)*k,Math.cos(_e)*k,_e+Math.PI,1.1)}}let Ue=[];for(let[xe,ie]of ge){let J=mn("village",xe);J&&Ue.push({tpl:J,mats:ie,cast:!0})}Ue.length&&y.add(_f(Ue)),i.add(y),he&&(he=!1,ue(!0))}function Xe(ne,ge){let pe=o.get(ne);pe&&(pe.litTarget=ge)}function Ze(ne,ge=1.2){let pe=o.get(ne);pe&&(pe.doorTarget=1,pe.doorHold=ge)}function gt(ne){let ge=null,pe=1/0,Ue=ne.origin,xe=ne.direction;for(let ie of o.values()){if(ie.removing)continue;let J=Math.cos(-ie.crot),Me=Math.sin(-ie.crot),_e=Ue.x-ie.cx,k=Ue.z-ie.cz,it=_e*J+k*Me,st=-_e*Me+k*J,Je=xe.x*J+xe.z*Me,we=-xe.x*Me+xe.z*J,Rt=[-ie.info.hx-.3,0,-ie.info.hz-.3],ke=[ie.info.hx+.3,ie.info.height,ie.info.hz+1.2],qe=[it,Ue.y,st],I=[Je,xe.y,we],w=-1/0,X=1/0;for(let ae=0;ae<3;ae++){if(Math.abs(I[ae])<1e-6){if(qe[ae]<Rt[ae]||qe[ae]>ke[ae]){w=1/0;break}continue}let te=(Rt[ae]-qe[ae])/I[ae],ye=(ke[ae]-qe[ae])/I[ae];if(te>ye){let me=te;te=ye,ye=me}w=Math.max(w,te),X=Math.min(X,ye)}w<=X&&X>0&&w<pe&&(pe=w,ge=ie)}return ge}function It(){a&&R()}function rt(ne){ne.traverse(ge=>{ge.isInstancedMesh?ge.dispose():ge.userData.merged&&ge.geometry.dispose()})}return{root:i,houses:o,get layout(){return a},get benchSlots(){return z},get busy(){return g<1},get version(){return B},lampList:()=>d,setLayout:_,setOwner:Y,setLit:Xe,setDead:O,setTheme:Pe,openDoor:Ze,anchors:C,update:oe,emitGlows:q,pickHouse:gt,onExtraLoaded:It,house:ne=>o.get(ne),tombOf:ne=>f.get(ne),dispose(){ue(!1);for(let ne of r.values())ne.dispose();l&&rt(l),u&&rt(u),y&&y.traverse(ne=>{(ne.userData.merged||ne.userData.themeGeo)&&ne.geometry.dispose(),ne.userData.themeMat&&ne.material.dispose()}),DM(),Fc.value=1,s.remove(i)}}}var UM=`
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
}`,FM={glow:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 2.4) + 0.6 * pow(max(1.0 - r * 3.2, 0.0), 2.0);",pool:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 1.7);",blob:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.15, r) * 0.85;",ring:`float r = length(vUv - 0.5) * 2.0; float pulse = 0.75 + 0.25 * sin(uTime * 4.0 + vPhase);
         float a = smoothstep(0.12, 0.0, abs(r - 0.82)) * pulse + smoothstep(0.82, 0.2, r) * 0.18 * pulse;
         a *= 1.0 - step(1.0, r);`,puff:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.35, r);"};function OM(s,e){return new Jt({vertexShader:UM,fragmentShader:`uniform float uTime; varying vec2 vUv; varying vec4 vCol; varying float vPhase;
      void main(){ ${FM[s]} if (a * vCol.a < 0.003) discard; gl_FragColor = vec4(vCol.rgb, a * vCol.a);
      #include <colorspace_fragment>
      }`,uniforms:{uTime:{value:0},uGround:{value:s==="glow"||s==="puff"?0:1}},transparent:!0,depthWrite:!1,blending:e,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}var Pi=class{constructor(e,t,n=Un){this.max=t;let i=new ci(1,1),r=new qo;r.index=i.index,r.setAttribute("position",i.getAttribute("position")),r.setAttribute("uv",i.getAttribute("uv")),this.pos=new An(new Float32Array(t*4),4),this.col=new An(new Float32Array(t*4),4),this.spin=new An(new Float32Array(t),1),this.pos.setUsage(sa),this.col.setUsage(sa),this.spin.setUsage(sa),r.setAttribute("aPos",this.pos),r.setAttribute("aCol",this.col),r.setAttribute("aSpin",this.spin),r.instanceCount=0,this.geo=r,this.mat=OM(e,n),this.mesh=new xt(r,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e==="blob"||e==="pool"?1:5,this.n=0}begin(){this.n=0}add(e,t,n,i,r,o,a=0){if(this.n>=this.max)return;let l=this.n++,c=this.pos.array,u=this.col.array;c[l*4]=e,c[l*4+1]=t,c[l*4+2]=n,c[l*4+3]=i,u[l*4]=r.r,u[l*4+1]=r.g,u[l*4+2]=r.b,u[l*4+3]=o,this.spin.array[l]=a}end(e){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0,this.n&&(this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.spin.needsUpdate=!0),this.mat.uniforms.uTime.value=e}dispose(){this.geo.dispose(),this.mat.dispose()}},Mm=`
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
}`,Sm=`
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
}`,zM=`
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
}`,BM=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r) * vA;
  gl_FragColor = vec4(1.0, 0.62, 0.22, a);
  #include <colorspace_fragment>
}`;function bm(s){let e=new zt;e.name="campfire-fx";let t=[],n=new ci(1,1);n.translate(0,.5,0);let i=[[0,0,0,1.25,1.9],[.32,.1,.18,.8,1.25],[-.3,-.12,.2,.75,1.15],[.05,.2,-.25,.7,1.05]];for(let f=0;f<i.length;f++){let[d,m,,v,x]=i[f],g=new Jt({vertexShader:Mm,fragmentShader:Sm,uniforms:{uTime:{value:0},uSeed:{value:f*3.7},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Un,side:$t,fog:!1}),S=new xt(n,g);S.position.set(d,.32,m),S.scale.set(v,x,1),S.renderOrder=6,S.frustumCulled=!1,e.add(S),t.push(S)}let r=s.sparks,o=In(5),a=new Float32Array(r*3),l=new Float32Array(r*4);for(let f=0;f<r;f++)a[f*3]=(o()-.5)*.7,a[f*3+1]=.6,a[f*3+2]=(o()-.5)*.7,l[f*4]=o(),l[f*4+1]=o(),l[f*4+2]=o(),l[f*4+3]=o()*1.2;let c=new Pt;c.setAttribute("position",new vt(a,3)),c.setAttribute("aSeed",new vt(l,4));let u=new Jt({vertexShader:zM,fragmentShader:BM,transparent:!0,depthWrite:!1,blending:Un,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uPower:{value:1}}}),h=new ai(c,u);return h.frustumCulled=!1,h.renderOrder=7,e.add(h),{group:e,update(f,d,m){for(let v of t)v.material.uniforms.uTime.value=f,v.material.uniforms.uPower.value=m;u.uniforms.uTime.value=f,u.uniforms.uPx.value=d,u.uniforms.uPower.value=Math.min(1,m*1.2)},dispose(){n.dispose(),c.dispose(),u.dispose();for(let f of t)f.material.dispose()}}}var kM=`
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
}`,HM=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = (pow(max(1.0 - r, 0.0), 3.0) + smoothstep(0.25, 0.0, r)) * vA;
  gl_FragColor = vec4(0.85, 1.0, 0.45, a);
  #include <colorspace_fragment>
}`;function wm(s){let e=In(99),t=new Float32Array(s*3),n=new Float32Array(s*4);for(let a=0;a<s;a++)n[a*4]=e(),n[a*4+1]=e(),n[a*4+2]=e(),n[a*4+3]=e();let i=new Pt;i.setAttribute("position",new vt(t,3)),i.setAttribute("aSeed",new vt(n,4));let r=new Jt({vertexShader:kM,fragmentShader:HM,transparent:!0,depthWrite:!1,blending:Un,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAlpha:{value:0}}}),o=new ai(i,r);return o.frustumCulled=!1,o.renderOrder=8,{points:o,place(a,l){let c=In(123);for(let u=0;u<s;u++){let h=c()*We,f=a+c()*(l-a);t[u*3]=Math.cos(h)*f,t[u*3+1]=.6+c()*2.2,t[u*3+2]=Math.sin(h)*f}i.getAttribute("position").needsUpdate=!0},update(a,l,c){r.uniforms.uTime.value=a,r.uniforms.uPx.value=l,r.uniforms.uAlpha.value=c,o.visible=c>.01},dispose(){i.dispose(),r.dispose()}}}var Bc=class{constructor(e=96){this.max=e,this.normal=new Pi("puff",e,ui),this.add=new Pi("glow",e,Un),this.list=[],this.tmp=new be,this.dustOn=!0}emit(e,t,n,i,r,o=14){if(this.list.length>this.max*1.6)return;let a=r?new be(r):new be(e==="poof"?"#e8e4f2":e==="dust"?"#b59a72":e==="smoke"?"#4a4652":e==="bubble"?"#94d82d":e==="mist"?"#9b7bff":"#ffd27a"),l=["#ff4b5f","#e6b85c","#5ef0a0","#7b83ff","#ff8364","#f06595","#15aabf"];for(let c=0;c<o;c++){let u=Math.random()*We,h=.6+Math.random()*1.6,f=.6+Math.random()*1.2,d=.7+Math.random()*.7,m=.25+Math.random()*.3,v=a;e==="poof"&&(m=.35+Math.random()*.35),e==="dust"&&(h=.25+Math.random()*.3,f=.15+Math.random()*.2,d=.5+Math.random()*.3,m=.14+Math.random()*.1),e==="bubble"&&(h=.15,f=.8+Math.random()*.8,d=1.2+Math.random(),m=.12+Math.random()*.12),(e==="smoke"||e==="mist")&&(h=.3+Math.random()*.5,f=.5+Math.random()*.6,d=1.4+Math.random()*.8,m=.45+Math.random()*.4),e==="confetti"&&(h=1.5+Math.random()*2.5,f=3+Math.random()*3,d=1.6+Math.random()*.8,m=.1+Math.random()*.08,v=new be(l[c%l.length])),this.list.push({kind:e,x:t+Math.cos(u)*.2,y:n+Math.random()*.4,z:i+Math.sin(u)*.2,vx:Math.cos(u)*h,vy:f,vz:Math.sin(u)*h,t:0,life:d,size:m,c:v})}}update(e,t){this.normal.begin(),this.add.begin();let n=this.list;for(let i=n.length-1;i>=0;i--){let r=n[i];if(r.t+=e,r.t>=r.life){n[i]=n[n.length-1],n.pop();continue}let o=r.t/r.life,a=Math.exp(-3*e);r.vx*=a,r.vz*=a,r.kind==="confetti"?r.vy-=6*e:r.vy*=Math.exp(-1.5*e),r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.kind==="magic"||r.kind==="bubble"?this.add.add(r.x,r.y,r.z,r.size*(1-o*.5),r.c,1-o):r.kind==="confetti"?this.normal.add(r.x,Math.max(.05,r.y),r.z,r.size,r.c,1-o*o):r.kind==="dust"?this.normal.add(r.x,r.y,r.z,r.size*(1+o*2),r.c,(1-o)*.45):this.normal.add(r.x,r.y,r.z,r.size*(1+o*1.6),r.c,(1-o)*(1-o)*(r.kind==="smoke"||r.kind==="mist"?.6:.8))}this.normal.end(t),this.add.end(t)}dispose(){this.normal.dispose(),this.add.dispose()}},zc=null;function Tm(s=.35,e=.6,t=1){zc||(zc=new ci(1,1),zc.translate(0,.5,0));let n=new Jt({vertexShader:Mm,fragmentShader:Sm,uniforms:{uTime:{value:0},uSeed:{value:t},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Un,side:$t,fog:!1}),i=new xt(zc,n);return i.scale.set(s,e,1),i.renderOrder=6,i.frustumCulled=!1,i.userData.tick=r=>{n.uniforms.uTime.value=r},i.userData.cleanup=()=>n.dispose(),i}var GM=`
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
}`,VM=`
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
}`;function Em(s){let t=In(4711),n=new Float32Array(900*3),i=new Float32Array(900*4);for(let m=0;m<900;m++)n[m*3]=(t()-.5)*46,n[m*3+1]=t()*18,n[m*3+2]=(t()-.5)*46,i[m*4]=t(),i[m*4+1]=t(),i[m*4+2]=t(),i[m*4+3]=t();let r=new Pt;r.setAttribute("position",new vt(n,3)),r.setAttribute("aSeed",new vt(i,4));let o=new Jt({vertexShader:GM,fragmentShader:VM,transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uKind:{value:0},uAlpha:{value:0},uCenter:{value:new H}}}),a=new ai(r,o);a.frustumCulled=!1,a.renderOrder=9,a.visible=!1,s.add(a);let l=new Pi("puff",40,ui);l.mesh.renderOrder=4,s.add(l.mesh);let c=[];for(let m=0;m<40;m++)c.push({a:t()*We,r:4+t()*40,y:.6+t()*1.8,s:9+t()*10,sp:.02+t()*.04});let u="none",h=0,f=0,d=new be("#c9cfd8");return{set(m){u=m||"none"},get kind(){return u},update(m,v,x,g,S,N,M){if(h+=((u==="snow"||u==="leaves"?1:0)-h)*Math.min(1,m*.8),a.visible=h>.01&&S>0,a.visible){r.setDrawRange(0,Math.min(900,S));let p=o.uniforms;p.uTime.value=v,p.uPx.value=x,p.uKind.value=u==="leaves"?1:0,p.uAlpha.value=h*(u==="snow"?.9:1),p.uCenter.value.copy(g)}if(f+=((u==="fog"?1:0)-f)*Math.min(1,m*.5),l.begin(),f>.01){d.set("#cfd6de"),N&&d.lerp(N,.5),d.multiplyScalar(1-M*.6);let p=Math.min(40,Math.max(8,Math.round(S/20)));for(let _=0;_<p;_++){let C=c[_],D=C.a+v*C.sp;l.add(Math.sin(D)*C.r,C.y,Math.cos(D)*C.r,C.s,d,.16*f)}}l.end(v)},dispose(){r.dispose(),o.dispose(),l.dispose(),s.remove(a),s.remove(l.mesh)}}}var da=1.12,bf=1.75,WM={walk:bf,brisk:2.35,sneak:1.5,sprint:3.4,stroll:1.3};var m1=new H,Sf=null,mi=class{constructor(e,t,n,i={}){this.world=e,this.id=t,this.root=new zt,this.root.name="chr-"+t,this.pos=this.root.position,this.yaw=0,this.speed=0,this.visible=!0,this.fade=1,this.isGhost=!!i.ghost,this.look=null,this.model=null,this.mixer=null,this.actions={},this.weights={},this.targets={},this.base="idle",this.once=null,this.path=null,this.mode="walk",this.steps=[],this.stepT=0,this.inside=null,this.claimed=!1,this.idleTimer=4+Math.random()*8,this.faceYaw=null,this.stepPhase=Math.random(),this.headY=1.75*da,this.seed=Math.random(),this.props=[],this.setLook(n)}setLook(e){let t=this.isGhost?"ghost|"+e.color:`${e.skin}|${e.color}|${e.hat}`;if(this.lookKey===t)return;this.lookKey=t,this.look={...e},this.model&&(this.root.remove(this.model),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model)),this.actions={},this.weights={},this.targets={},this.once=null,this.headBone=null,this.props=[],this.isGhost?this.buildGhost(e):this.buildVillager(e);let n=this.base;this.base=null,this.setBase(n||"idle",0)}buildVillager(e){let t=ct(e.skin|0,0,11),n=Ii(`characters/villager-${String(t).padStart(2,"0")}.glb`),i=Ac(n.scene),r=eo("cloth",gn[ct(e.color|0,0,19)]);i.traverse(l=>{l.isMesh&&(l.material.name==="cloth"&&r&&(l.material=r),l.castShadow=!0,l.receiveShadow=!1,l.frustumCulled=!1)});let o=i.getObjectByName("head"),a=df[e.hat|0];if(o&&a&&Cn("hats/hats.glb")){let l=Ii("hats/hats.glb").scene.getObjectByName(a);if(l){let c=l.clone();c.position.set(0,sm[t]||0,0),c.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.frustumCulled=!1)}),o.add(c)}}i.scale.multiplyScalar(da),this.model=i,this.root.add(i),this.mixer=new gs(i),this.clips=hf(),this.headBone=o||null,this.headBaseQ=o?o.quaternion.clone():null,this.armR=i.getObjectByName("arm-right"),this.armL=i.getObjectByName("arm-left"),this.headY=(1.72+(e.hat?.18:0))*da}buildGhost(e){let t=Ii("characters/ghost.glb"),n=t.scene.clone(!0),i=eo("tint-ghost",gn[ct(e.color|0,0,19)],"|ghost");i&&(i.transparent=!0,i.opacity=.62,i.depthWrite=!1,i.emissive.set(gn[e.color|0]).multiplyScalar(.25));let r=cf("graveyard");!this.ghostBodyMat&&r&&(this.ghostBodyMat=r.clone(),this.ghostBodyMat.transparent=!0,this.ghostBodyMat.opacity=.62,this.ghostBodyMat.depthWrite=!1),n.traverse(o=>{o.isMesh&&(o.material=o.material.name.startsWith("tint")?i:this.ghostBodyMat,o.castShadow=!1,o.renderOrder=3)}),n.scale.multiplyScalar(da*.95),this.model=n,this.root.add(n),this.mixer=new gs(n),Sf||(Sf=t.animations),this.clips=Sf,this.headY=1.95*da}action(e){if(this.actions[e])return this.actions[e];let t=hi.findByName(this.clips,e);if(!t)return null;let n=this.mixer.clipAction(t);return e==="die"&&(n.setLoop(ta,1),n.clampWhenFinished=!0),n.enabled=!0,n.setEffectiveWeight(0),n.play(),n.time=Math.random()*t.duration*(e==="die"?0:1),this.actions[e]=n,this.weights[e]=0,n}setBase(e,t=.3){if(this.base===e)return;this.base=e,this.fadeRate=t>0?1/t:1e3;for(let i in this.targets)this.targets[i]=0;let n=(i,r)=>{this.action(i)&&(this.targets[i]=r)};switch(e){case"walk":n("walk",1);break;case"sprint":n("sprint",1);break;case"sneak":n("walk",.6),n("crouch",.4);break;case"sit":n("sit",1);break;case"peek":n("crouch",1);break;case"cheer":n("emote-yes",1);break;case"sad":n("emote-no",1);break;case"hold":n("idle",.45),n("holding-right",.55);break;case"holdboth":n("idle",.4),n("holding-both",.6);break;case"warm":n("sit",.55),n("holding-both",.45);break;case"loom":n("crouch",.45),n("holding-both",.55);break;case"lie":{let i=this.action("die");i&&(i.reset(),i.play(),i.time=0,this.targets.die=1);break}default:e!=="idle"&&this.action(e)?n(e,1):n("idle",1)}if(e==="lie"&&t<=0&&this.actions.die&&(this.actions.die.time=this.actions.die.getClip().duration),t<=0)for(let i in this.targets)this.weights[i]=this.targets[i]}playOnce(e,{fade:t=.2,timeScale:n=1}={}){let i=this.action(e);if(!i)return 0;i.reset(),i.timeScale=n,i.setLoop(ta,1),i.clampWhenFinished=!0,i.play();let r=i.getClip().duration/n;return this.once={name:e,t:0,dur:r,fade:t},r}run(e){this.steps=e.slice(),this.stepT=0,this.path=null,this.stepStarted=!1}get busy(){return this.steps.length>0}walkTo(e,t="walk"){this.path=e.slice(),this.mode=t}setVisible(e){this.visible=e,this.root.visible=e}update(e,t){this.runSteps(e);let n=0;if(this.path&&this.path.length){let l=this.path[0],c=l.x-this.pos.x,u=l.z-this.pos.z,h=Math.hypot(c,u),f=this.path.length===1;if(this.bestD==null||h<this.bestD-.05?(this.bestD=h,this.stuckT=0):this.stuckT=(this.stuckT||0)+e,h<(f?.06:.45)||this.stuckT>.7&&(!f||h<1.2)||this.stuckT>2.5)this.path.shift(),this.bestD=null,this.stuckT=0,this.path.length||(this.path=null);else{n=WM[this.mode]||bf,f&&(n=Math.min(n,.6+h*2.2));let d=c,m=u;if(!f&&h<1.2){let _=this.path[1],C=1-h/1.2;d=c*(1-C)+(_.x-this.pos.x)*C,m=u*(1-C)+(_.z-this.pos.z)*C}let v=Math.atan2(d,m);this.yaw+=qn(v-this.yaw)*Xn(9,e);let x=Math.min(h,this.speed*e),g=Math.sin(this.yaw),S=Math.cos(this.yaw),N=c/h,M=u/h,L=g*.55+N*.45,A=S*.55+M*.45,p=Math.hypot(L,A)||1;this.pos.x+=L/p*x,this.pos.z+=A/p*x}}else this.faceYaw!=null&&(this.yaw+=qn(this.faceYaw-this.yaw)*Xn(4,e));this.speed+=(n-this.speed)*Xn(n>this.speed?6:10,e),this.speed<.02&&(this.speed=0),this.root.rotation.y=this.yaw;let i=this.speed>.15;if(this.base!=="lie"&&this.base!=="float")if(i){let l=this.mode==="sprint"?"sprint":this.mode==="sneak"?"sneak":"walk";this.base!==l&&this.setBase(l,.18)}else(this.base==="walk"||this.base==="sprint"||this.base==="sneak")&&this.setBase(this.restPose||"idle",.25);if(this.actions.walk&&(this.actions.walk.timeScale=i?ct(this.speed/bf,.5,1.6)*(this.base==="sneak"?1.25:1):1),this.actions.sprint&&(this.actions.sprint.timeScale=i?ct(this.speed/3.2,.6,1.4):1),i&&this.isMe&&this.visible&&this.world.sfxStep&&(this.stepPhase+=e*this.speed/1.4,this.stepPhase>1&&(this.stepPhase-=1,this.world.sfxStep())),!i&&this.base==="idle"&&!this.once&&!this.claimed&&(this.idleTimer-=e,this.idleTimer<0)){this.idleTimer=6+Math.random()*10;let l=Math.random();this.playOnce(l<.4?"interact-left":l<.75?"interact-right":"pick-up",{timeScale:.7})}let r=0;if(this.once&&!this.actions[this.once.name]&&(this.once=null),this.once){let l=this.once;l.t+=e;let c=l.t>=l.dur;r=Math.min(1,l.t/l.fade)*(c?0:Math.min(1,(l.dur-l.t)/l.fade+1e-4)),c&&(this.once=null,this.actions[l.name].setEffectiveWeight(0),r=0)}let o=0;for(let l in this.weights){let c=this.targets[l]||0,u=this.weights[l],h=this.fadeRate*e;u=u<c?Math.min(c,u+h):Math.max(c,u-h),this.weights[l]=u,o+=u}let a=o>1e-4?(1-r)/o:0;for(let l in this.weights){if(this.once&&l===this.once.name)continue;let c=this.actions[l];c?c.setEffectiveWeight(this.weights[l]*a):delete this.weights[l]}if(this.once&&this.actions[this.once.name].setEffectiveWeight(r),this.headBone&&this.headBone.quaternion.copy(this.headBaseQ),this.mixer.update(e),this.headBone){let l=0;if(this.lookAt&&this.base!=="lie"&&this.speed<.3){let c=Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z);l=ct(qn(c-this.yaw),-.85,.85),this.lookUntil&&t>this.lookUntil&&(this.lookAt=null)}this.headYaw=(this.headYaw||0)+(l-(this.headYaw||0))*Xn(5,e),Math.abs(this.headYaw)>.002&&this.headBone.rotateY(this.headYaw)}i&&this.visible&&this.world.footDust&&!this.isGhost&&(this.dustT=(this.dustT||0)+e*this.speed,this.dustT>1.15&&(this.dustT=0,this.world.footDust(this.pos.x,this.pos.z,this.speed))),this.isGhost&&this.model&&(this.model.position.y=.35+Math.sin(t*1.6+this.seed*9)*.12)}runSteps(e){var t;for(;this.steps.length;){let n=this.steps[0];this.stepStarted||(this.stepStarted=!0,this.stepT=0,n.walk&&(this.walkTo(n.walk,n.mode||"walk"),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad")&&this.setBase("idle",.2)),n.at&&(this.pos.x=n.at.x,this.pos.z=n.at.z,this.path=null,this.speed=0),n.face!=null&&(this.faceYaw=n.face),n.faceTo&&(this.faceYaw=Math.atan2(n.faceTo.x-this.pos.x,n.faceTo.z-this.pos.z)),n.snapFace&&(this.yaw=this.faceYaw),n.pose&&(this.restPose=n.pose==="idle"?null:n.pose,this.setBase(n.pose,(t=n.fade)!=null?t:.35)),n.once&&(this.stepDur=this.playOnce(n.once,n.opts||{})),n.hide&&this.setVisible(!1),n.show&&this.setVisible(!0),n.call&&n.call(this)),this.stepT+=e;let i=!0;if(n.walk?i=!this.path:n.wait?i=this.stepT>=n.wait:n.once?i=this.stepT>=(this.stepDur||0)*(n.part||1):n.until&&(i=n.until(this)),!i)return;this.steps.shift(),this.stepStarted=!1}}hold(e,t="right",n=[0,-.14,.04]){let i=t==="left"?this.armL:this.armR;!i||!e||(e.position.set(n[0],n[1],n[2]),e.scale.setScalar(e.userData.holdScale||.4),i.add(e),this.props.push(e))}dropProps(){for(let e of this.props)e.parent&&e.parent.remove(e);this.props=[]}gaze(e,t,n){this.lookAt=e?{x:e.x,z:e.z}:null,this.lookUntil=t?n+t:0}dispose(){this.dropProps(),this.model&&this.model.traverse(e=>{e.isSkinnedMesh&&e.skeleton&&e.skeleton.dispose()}),this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.ghostBodyMat&&this.ghostBodyMat.dispose(),this.root.parent&&this.root.parent.remove(this.root)}};var pa=new H(0,0,-620);function xn(s,e,t,n,i,r,o=0,a=1){let l=mn(e,t);if(!l)return null;let c=l.clone();return c.position.set(n,i,r),c.rotation.set(0,o*Math.PI/180,0),c.scale.setScalar(a),c.traverse(u=>{u.isMesh&&(u.castShadow=!1,u.receiveShadow=!1)}),s.add(c),c}function Am(s){let e=null,t=!1,n=null,i=null,r=new Map,o=null,a=null,l=null,c=null,u=[],h={bed:{x:-2.2,z:-1.9},sleeper:{x:-2.2,y:.66,z:-.75},bedside:{x:-1.05,z:-1.15},bedside2:{x:-1,z:-.15},bedfoot:{x:-2.2,z:.75},doorOut:{x:5.2,z:0},doorIn:{x:2,z:.1},doorStep:{x:3.1,z:.05},chest:{x:-.3,z:-2},bookcase:{x:-2.55,z:1.25},table:{x:1.55,z:-.75},rug:{x:.4,z:.6},lantern:{x:-.85,y:.75,z:-3},winOut:{x:-4,z:-.45},window:{x:-3.62,y:1.35,z:-2.5}};function f(){if(t||!Cn("interior/furniture.glb")||!Cn("interior/clues.glb"))return t;e=new zt,e.name="interior",e.position.copy(pa),e.visible=!1,s.scene.add(e);for(let y of[-2.5,0,2.5])for(let E of[-2.5,0,2.5])xn(e,"furniture","floor-planks",y,0,E);for(let y of[-2.5,0,2.5])xn(e,"furniture",y===0?"wall-wood-window":"wall-wood",y,0,-2.5,90);for(let y of[-2.5,0,2.5])xn(e,"furniture",y===-2.5?"wall-wood-window":"wall-wood",-2.5,0,y,180);for(let y of[-2.5,0,2.5])xn(e,"furniture",y===0?"wall-wood-door":"wall-wood",2.5,0,y,0);let C=new xt(new ci(40,40),new on({color:"#3f5a34"}));C.rotation.x=-Math.PI/2,C.position.y=-.02,e.add(C);let D=xn(e,"furniture","bed",h.bed.x,0,h.bed.z);D&&D.traverse(y=>{y.isMesh&&y.material&&y.material.name==="carpet"&&(a||(a=y.material.clone()),y.material=a)}),l=xn(e,"furniture","rug-round",h.rug.x,.01,h.rug.z),xn(e,"furniture","table",1.6,0,-1.5),xn(e,"furniture","chair",1.6,0,-.3,180),xn(e,"furniture","candle",1.2,.79,-1.6),xn(e,"clues","mug",1.85,.79,-1.35),xn(e,"clues","bread",2.1,.79,-1.75),c=xn(e,"furniture","chest",-.3,0,-2.8),xn(e,"furniture","bookcase",-3.4,0,1.2,90),xn(e,"furniture","lantern",h.lantern.x,0,h.lantern.z),xn(e,"furniture","coat-rack",3.05,0,-2),xn(e,"furniture","plant-pot",2.9,0,-3.05),xn(e,"furniture","barrel",-3,0,3,0,.8),o=new on({color:"#c9b48a",side:$t});let B=new xt(new li(.9,1.25,.04),o);B.position.set(1.55,1.75,-3.42),e.add(B);let b=new xt(new Zi(.03,.03,1.1,6),new on({color:"#5a3a22"}));return b.rotation.z=Math.PI/2,b.position.set(1.55,2.4,-3.4),e.add(b),t=!0,!0}let d=new H;function m(C,D=0){var z;return d.set(pa.x+C.x,pa.y+((z=C.y)!=null?z:D),pa.z+C.z).clone()}function v(C){if(!f())return!1;n=C;let D=gn[ct((C.look&&C.look.color)|0,0,19)];return o.color.set(D),a&&a.color.set(D).lerp(new be("#ffffff"),.25),i&&(i.dispose(),i=null),C.look&&(i=new mi(s,"room-sleeper",C.look),i.setBase("lie",0),i.pos.copy(m(h.sleeper)),i.yaw=0,i.root.rotation.y=0,s.scene.add(i.root)),x(),!0}function x(){l&&(l.position.set(h.rug.x,.01,h.rug.z),l.rotation.set(0,0,0));for(let C of u.splice(0))C.parent&&C.parent.remove(C)}function g(C){return v(C)?(e.visible=!0,i&&i.setVisible(!0),!0):!1}function S(){e&&(e.visible=!1),i&&(i.dispose(),i=null),L(),x(),n=null}function N(C,D,z,B,b=0){M(C);let y=new mi(s,"room-"+C,D);return y.pos.copy(m(B)),y.yaw=b,y.root.rotation.y=b,s.scene.add(y.root),r.set(C,{ch:y,name:z,color:D.color|0,label:!!z}),y}function M(C){let D=r.get(C);D&&(D.ch.dispose(),r.delete(C))}function L(){for(let C of[...r.keys()])M(C)}function A(C){return e.add(C),u.push(C),C}function p(C,D){if(!(!e||!e.visible)){i&&(i.update(C,D),i.root.position.y=pa.y+h.sleeper.y+Math.sin(D*1.7)*.015);for(let z of r.values())z.ch.update(C,D)}}function _(C,D){return C==="window"?{pos:m({x:D?-6.2:-5.6,y:1.6,z:-2.8}),look:m({x:-1.6,y:.85,z:-1.4}),fov:D?52:42}:C==="search"?{pos:m({x:D?.8:3.4,y:D?10.2:4.6,z:D?5.2:5.6}),look:m({x:-.5,y:.3,z:-.6}),fov:D?62:48}:{pos:m({x:D?.6:3.6,y:D?10.8:4.9,z:D?5:5.9}),look:m({x:D?-.5:-.9,y:.3,z:D?-.6:-1.1}),fov:D?62:48}}return{L:h,W:m,show:g,hide:S,dress:v,update:p,shot:_,addActor:N,removeActor:M,clearActors:L,addTemp:A,resetProps:x,get visible(){return!!(e&&e.visible)},get ready(){return f()},get owner(){return n},get actors(){return r},get rug(){return l},get chest(){return c},lanternWorld(){return m(h.lantern)},dispose(){S(),e&&(s.scene.remove(e),e.traverse(C=>{C.geometry&&!C.geometry.userData.shared&&(C.geometry.type==="PlaneGeometry"||C.geometry.type==="BoxGeometry"||C.geometry.type==="CylinderGeometry")&&C.geometry.dispose()})),o&&o.dispose(),a&&a.dispose()}}}var ir={cancelled:!0},Rm=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,io=s=>1-Math.pow(1-s,3);function kc(s){return s.catch(()=>{}),s}typeof window!="undefined"&&!window.__vkwCancelGuard&&(window.__vkwCancelGuard=!0,window.addEventListener("unhandledrejection",s=>{s&&s.reason===ir&&s.preventDefault()}));function Cm(s){let e=new Map,t=null,n=!1,i=0;function r(h,f,d){typeof f=="function"&&(d=f,f=null),e.set(f?h+":"+f:h,d)}function o(h){return e.get(h.kind+":"+(h.scene||""))||e.get(h.kind)}function a(h){return new Promise(f=>{if(n||!h||!h.kind){f();return}c();let d=o(h);if(!d){f();return}let m=++i;["death","hanged","shot","left"].includes(h.kind)&&s.holdDeaths((h.targets||[]).map(g=>g.id).filter(Boolean));let v=u(m,h),x={msg:h,resolve:f,ctx:v};t=x,(async()=>{try{await Promise.race([d(v,h),v.timeout(13)])}catch(g){g!==ir&&console.warn("[VKWorld] sinematik hatas\u0131",g)}l(x)})()})}function l(h){if(!h.done){h.done=!0;try{h.ctx.cleanup()}catch(f){console.warn("[VKWorld] sinematik temizli\u011Fi",f)}t===h&&(t=null),h.resolve()}}function c(){if(t){let h=t;h.ctx.cancel(),l(h)}}function u(h,f){let d=new Map,m=new Set,v=new Set,x=[],g=[],S=!1,N=!1,M=!1,L=()=>!n&&!S&&h===i,A={world:s,msg:f,alive:L,cancel(){S=!0;for(let p of v)p.reject(ir);v.clear()},wait(p){return L()?kc(new Promise((_,C)=>{let D={resolve:_,reject:C,left:p};v.add(D),s.ticker.push(z=>v.has(D)?(D.left-=z,D.left<=0?(v.delete(D),_(),!0):!1):!0)})):kc(Promise.reject(ir))},timeout(p){return new Promise(_=>{let C=setTimeout(_,p*1e3);m.add(C)})},tween(p,_,C=Rm){return L()?kc(new Promise((D,z)=>{let B=0,b={resolve:D,reject:z};v.add(b),s.ticker.push(y=>{if(!v.has(b))return!0;B=Math.min(p,B+y);try{_(C(p>0?B/p:1),y)}catch(E){console.warn(E)}return B>=p?(v.delete(b),D(),!0):!1})})):kc(Promise.reject(ir))},shot(p,_,C={}){L()&&s.rig.setOverride({pos:p.clone(),look:_.clone(),fov:C.fov||40,k:C.k||2.4})},cut(p,_,C={}){L()&&s.rig.setOverride({pos:p.clone(),look:_.clone(),fov:C.fov||40,k:60},!0)},move(p,_,C,D,z,B={}){let b=new H,y=new H;return A.cut(p,_,B),A.tween(z,E=>{b.lerpVectors(p,C,E),y.lerpVectors(_,D,E),s.rig.setOverride({pos:b,look:y,fov:B.fov||40,k:60},!0)},B.ease||Rm)},claim(p){let _=s.chars.get(p);return _?(d.has(_)||(d.set(_,{x:_.pos.x,y:_.pos.y,z:_.pos.z,yaw:_.yaw,visible:_.visible,inside:_.inside,peeking:_.peeking,base:_.base}),_.claimed=!0,_.run([])),_):null},add(p,_){return(_||s.scene).add(p),x.push(p),p},prop(p,_,C,D,z,B=0,b=1){let y=s.assets.prop(p,_);if(!y)return null;let E=y.clone();return E.position.set(C,D,z),E.rotation.y=B,E.scale.setScalar(b),E.traverse(T=>{T.isMesh&&(T.castShadow=!0)}),A.add(E)},actor(p,_,C,D,z=0,B){let b=s.makeActor(p,_,B);return b.pos.set(C,0,D),b.yaw=z,b.root.rotation.y=z,x.push({dispose:()=>s.dropActor(b)}),b},hideObj(p){p&&p.visible&&(p.visible=!1,g.push(p))},tod(p,_){M=!0,s.setTodOverride(p,_)},room(){return N=!0,s.room},fx:s.fx,sfx:(p,_)=>s.sfx(p,_),flash:(p,_)=>s.flash(p,_),cleanup(){S=!0;for(let p of m)clearTimeout(p);for(let p of v)p.reject(ir);v.clear();for(let p of x.splice(0))p.dispose&&!p.isObject3D?p.dispose():p.parent&&p.parent.remove(p),p.userData&&p.userData.cleanup&&p.userData.cleanup();for(let p of g.splice(0))p.visible=!0;for(let[p,_]of d)p.claimed=!1,p.dropProps(),p.pos.set(_.x,_.y,_.z),p.yaw=_.yaw,p.inside=_.inside,p.peeking=_.peeking,p.alive!==!1&&p.setVisible(_.visible&&!s.isDeadShown(p.id)),p.setBase(_.base==="walk"||_.base==="sprint"||_.base==="sneak"?"idle":_.base||"idle",.2),p.run([]);s.endCineRoom(),s.moonOverride(null),s.fogBoost(1),s.releaseDeaths(),M&&s.setTodOverride(null),s.rig.setOverride(null),s.flash(0),s.cineTint(null),d.size&&(d.clear(),s.reapply(!0))}};return A}return{register:r,announce:a,CANCEL:ir,get running(){return!!t},get current(){return t?t.msg:null},skip(){c()},reset(){i++,c(),s.rig.setOverride(null)},dispose(){n=!0,i++,c()}}}var nt=(s,e,t)=>new H(s,e,t),ma=s=>(s.targets||[]).map(e=>e.id).filter(Boolean);function Im(s,e){let t=()=>e.layoutR(),n=()=>e.village.layout;function i(b,y={}){var Pe;let E=e.houseAnchors(b);if(!E)return null;let T=y.back,R=T?E.backWin:{x:(E.door.x+E.frontWin.x)/2,z:(E.door.z+E.frontWin.z)/2},F=T?E.peek:E.approach,O=T?E.backWin:E.door,V=F.x-O.x,Y=F.z-O.z,Z=Math.hypot(V,Y)||1,oe=(y.dist||11)*(e.rig.portrait?1.3:1),q=(Pe=y.side)!=null?Pe:.18,ee=-Y/Z*q,he=V/Z*q;return{pos:nt(R.x+(V/Z+ee)*oe,y.height||7.2,R.z+(Y/Z+he)*oe),look:nt(R.x,y.lookY||1.8,R.z),a:E}}function r(b,y={}){let E=e.camera.position,T=E.x-b.x,R=E.z-b.z,F=Math.hypot(b.x,b.z);e.village.layout&&F>e.village.layout.Rp*.8&&(T=-b.x,R=-b.z),y.dir&&(T=y.dir.x,R=y.dir.z);let O=Math.hypot(T,R)||1,V=(y.dist||6.5)*(e.rig.portrait?1.3:1);return{pos:nt(b.x+T/O*V,y.height||3,b.z+R/O*V),look:nt(b.x,y.lookY||1.1,b.z)}}let o=()=>e.rig.portrait?54:42,a=()=>e.rig.portrait?1.6:1;function l(b,y,E){let T=0;e.ticker.push(R=>{if(!b.alive())return!0;if(T+=R,T<y)return!1;try{E()}catch(F){console.warn("[VKWorld]",F)}return!0})}async function c(b,y,E,T,R=.3,F=2.2){if(!Cn("characters/ghost.glb")||!y)return;let O=b.actor(y,"",E,T,0,"ghost");O.root.position.y=R,b.sfx("poof",{volume:.5}),await b.tween(F,V=>{O.root.position.y=R+V*2.3,O.yaw+=.02;let Y=1.3*(1-Math.max(0,V-.75)*3);O.root.scale.setScalar(Math.max(.05,Y))},io),e.fx.emit("magic",E,R+2.6,T,gn[y.color|0],12),O.setVisible(!1)}function u(b,y){e.markDead(y,{drop:!0});let E=e.houseAnchors(y);E&&l(b,.38,()=>e.fx.emit("poof",E.tomb.x,.2,E.tomb.z,"#b8a890",10)),b.sfx("poof",{volume:.6})}function h(b,y,E,T,R=10,F=2.4,O=3.5,V={x:0,z:-1},Y=1){if(!Cn("characters/bat.glb"))return Promise.resolve();let Z=Ii("characters/bat.glb").scene.children[0],oe=[];for(let ee=0;ee<R;ee++){let he=Z.clone(!0);he.scale.setScalar((1+Math.random()*.5)*Y),b.add(he),oe.push({b:he,a:ee/R*We,r:O*(.6+Math.random()*.6),h:E+(Math.random()-.5)*1.6,sp:2.2+Math.random()*1.6,wl:he.getObjectByName("wing-left"),wr:he.getObjectByName("wing-right"),ph:Math.random()*6})}b.sfx("whoosh",{volume:.6});let q=0;return b.tween(F,(ee,he)=>{q+=he;let Pe=Math.max(0,ee-.55)/.45;for(let ue of oe){ue.a+=ue.sp*he;let Ce=ue.r*(1+Pe*5),Xe=y+Math.sin(ue.a)*Ce+V.x*Pe*Pe*25,Ze=T+Math.cos(ue.a)*Ce+V.z*Pe*Pe*25,gt=ue.h+Math.sin(q*3+ue.ph)*.4+Pe*8;ue.b.position.set(Xe,gt,Ze),ue.b.rotation.y=ue.a+Math.PI/2;let It=Math.sin(q*22+ue.ph)*.9;ue.wl&&(ue.wl.rotation.z=It),ue.wr&&(ue.wr.rotation.z=-It)}},ee=>ee)}function f(b,y,E,T){if(!Cn("characters/vampire.glb"))return null;let R=Ii("characters/vampire.glb"),F=R.scene.clone(!0);F.scale.multiplyScalar(1.05),F.position.set(y,0,E),F.rotation.y=T,b.add(F);let O=new gs(F),V=null,Y=oe=>{let q=hi.findByName(R.animations,oe);if(!q)return;let ee=O.clipAction(q);V&&V!==ee&&V.fadeOut(.15),ee.reset().fadeIn(.15).play(),V=ee};Y("idle"),e.ticker.push(oe=>F.parent?(O.update(oe),!1):(O.stopAllAction(),!0));let Z=d(.5,"#ff2244");return Z.position.set(0,1.85,.25),F.add(Z),{root:F,play:Y}}function d(b,y){let E=v(),T=new Fr({map:E,color:y,transparent:!0,depthWrite:!1,blending:Un,fog:!1}),R=new Po(T);return R.scale.setScalar(b),R.userData.cleanup=()=>T.dispose(),R}let m=null;function v(){if(m)return m;let b=document.createElement("canvas");b.width=b.height=64;let y=b.getContext("2d"),E=y.createRadialGradient(32,32,0,32,32,32);return E.addColorStop(0,"rgba(255,255,255,1)"),E.addColorStop(.35,"rgba(255,255,255,0.45)"),E.addColorStop(1,"rgba(255,255,255,0)"),y.fillStyle=E,y.fillRect(0,0,64,64),m=new Bs(b),m.colorSpace=Ft,m}function x(b){let y=new zt,E=new xt(new Zi(.05,.06,.9,6),new on({color:"#6b4426"}));E.position.y=.2,y.add(E);let T=new xt(new Zi(.1,.07,.16,6),new on({color:"#3a2a20"}));T.position.y=.66,y.add(T);let R=Tm(.38,.62,Math.random()*9);R.position.y=.7,y.add(R);let F=d(1.3,"#ffb347");return F.position.y=.95,y.add(F),e.ticker.push(()=>!y.parent&&y.userData.used?!0:(R.userData.tick(e.time),!1)),y.userData.holdScale=1/1.12/2.5*1,y.userData.used=!0,y.userData.cleanup=()=>{E.geometry.dispose(),E.material.dispose(),T.geometry.dispose(),T.material.dispose(),R.userData.cleanup(),F.userData.cleanup()},y}function g(b,y,E=1){let T=mn(b,y);if(!T)return null;let R=T.clone();return R.userData.holdScale=1/(1.12*2.5)*E,R}function S(b=[],y=10){let E=[];for(let[T,R]of e.chars)if(!(!R.visible||b.includes(T)||R.isGhost)&&(E.push(R),E.length>=y))break;return E}function N(b,y){for(let E of b)E.faceYaw=Math.atan2(y.x-E.pos.x,y.z-E.pos.z),E.gaze(y,6,e.time)}function M(b,y,E=4){for(let T of b)T.gaze(y,E,e.time)}s.register("start",async b=>{let y=t(),E=S([],20);b.sfx("whoosh"),e.fx.emit("magic",0,1.2,0,"#ffd27a",24);let T=nt(0,y*1.1,y*1.3),R=nt(0,.4,0),F=nt(y*.3,4.8,y*.8+2),O=nt(0,1,0);l(b,.9,()=>M(E,e.camera.position,4)),await b.move(T,R,F,O,3,{fov:o()+4});for(let V of E)Math.random()<.6&&V.playOnce("emote-yes",{timeScale:1.2});e.fx.emit("magic",0,1.6,0,"#b197fc",20),await b.wait(1.6)}),s.register("night",async b=>{let y=t(),E=S([],20);for(let T of E)Math.random()<.7&&T.playOnce(Math.random()<.5?"interact-left":"interact-right",{timeScale:.6});b.tod(21),b.sfx("whoosh",{volume:.5}),await b.move(nt(0,3.2,y*.75),nt(0,1.2,0),nt(0,y*.55,y*1.15),nt(0,y*.9,-y*2.5),3.6,{fov:o()+6}),await b.wait(.6)}),s.register("death",async(b,y)=>{let E=(y.targets||[]).slice(0,2);b.tod(5.7);for(let T of E){let R=T.cause==="zehir"?"poison":["bite","bats","vanish"].includes(T.scene)?T.scene:"bite";await L(b,T.id,R,E.length>1?.8:1)}});async function L(b,y,E,T){let R=i(y,{dist:11,height:7.4,side:.2,lookY:2.2});if(!R)return;let F=R.a,O=e.playerById(y),V=O?O.look:null,Y=nt(R.pos.x*.88+F.door.x*.12,R.pos.y-1.2,R.pos.z*.88+F.door.z*.12);if(b.cut(R.pos,R.look,{fov:o()}),b.move(R.pos,R.look,Y,R.look,3.4*T,{fov:o()}),E==="bite"){await b.wait(.4*T),e.village.openDoor(y,1.2),b.sfx("door");let ee=f(b,F.inside.x,F.inside.z,Math.atan2(F.approach.x-F.inside.x,F.approach.z-F.inside.z));ee&&(ee.play("sprint"),await b.tween(.9*T,he=>{ee.root.position.x=F.inside.x+(F.approach.x-F.inside.x)*1.6*he,ee.root.position.z=F.inside.z+(F.approach.z-F.inside.z)*1.6*he},he=>he),e.fx.emit("smoke",ee.root.position.x,.8,ee.root.position.z,"#2a2238",16),ee.root.visible=!1,b.sfx("bite"),h(b,ee.root.position.x,1.6,ee.root.position.z,8,1.6,1.2,{x:F.approach.x-F.door.x,z:F.approach.z-F.door.z})),await b.wait(.6*T)}else if(E==="bats")b.sfx("bite"),e.flash(.35,"#d7263d"),await h(b,(F.door.x+F.backWin.x)/2,3.2,(F.door.z+F.backWin.z)/2,14,2.2*T,3.6,{x:F.approach.x-F.door.x,z:F.approach.z-F.door.z});else if(E==="vanish"){await b.wait(.3),e.village.openDoor(y,1.6);for(let ee=0;ee<4;ee++)e.fx.emit("mist",F.door.x,.4+ee*.3,F.door.z,"#9b7bff",10),await b.wait(.25*T);b.sfx("whoosh"),e.flash(.3,"#7048e8"),await b.wait(.4*T)}else if(E==="poison"){b.sfx("potion");for(let ee=0;ee<6;ee++)e.fx.emit("bubble",F.frontWin.x,1.3,F.frontWin.z,"#94d82d",6),e.fx.emit("smoke",F.door.x*.6+F.backWin.x*.4,4.6,F.door.z*.6+F.backWin.z*.4,"#6f8a3a",3),await b.wait(.22*T);e.flash(.35,"#5fbf2a")}let Z=F.door.x*.4+F.approach.x*.6,oe=F.door.z*.4+F.approach.z*.6,q=c(b,V,Z,oe,.2,2.2*T);await b.wait(.7*T),u(b,y),await q,await b.wait(.2)}s.register("safe",async b=>{let y=t();b.tod(5.4,!0),l(b,.05,()=>b.tod(7.6)),[...e.village.houses.keys()].slice(0,6).forEach((T,R)=>l(b,.7+R*.26,()=>e.village.openDoor(T,1.4))),await b.move(nt(-y*.9,y*.45,y*.95),nt(0,2,0),nt(y*.55,y*.55,y*1),nt(y*1.6,4,-y*.6),4.6,{fov:o()+4}),await b.wait(.3)}),s.register("nohang",async b=>{let y=t(),E=S([],20);M(E,nt(0,1,0),4),E.forEach((T,R)=>l(b,R*.09,()=>T.playOnce("emote-no",{timeScale:.9}))),await b.move(nt(0,4,y*.55),nt(0,1,0),nt(0,y*.8,y*1.15),nt(0,.5,0),3.8,{fov:o()+2})}),s.register("sleep",async b=>{let y=t(),E=S([],20).map(T=>b.claim(T.id)).filter(Boolean);for(let T of E)T.setBase(Math.random()<.5?"sit":"warm",.5);b.tod(19.6),await b.move(nt(0,3.4,y*.7),nt(0,1,0),nt(0,y*.45,y*1.05),nt(0,y*.8,-y*2.5),4,{fov:o()+6})}),s.register("left",async(b,y)=>{let[E]=ma(y),T=E&&e.chars.get(E);if(T&&T.visible){b.claim(E);let R=r(T.pos,{dist:6});b.shot(R.pos,R.look,{fov:o()}),T.faceYaw=Math.atan2(e.camera.position.x-T.pos.x,e.camera.position.z-T.pos.z),await b.wait(.6),T.playOnce("emote-yes",{timeScale:.8}),await b.wait(1.4),e.fx.emit("mist",T.pos.x,.4,T.pos.z,"#c9c2d3",22),b.sfx("whoosh"),e.markDead(E,{quiet:!0}),T.setVisible(!1),await b.wait(1.4)}else if(E){let R=i(E,{dist:10});R&&(b.shot(R.pos,R.look,{fov:o()}),await b.wait(1),e.fx.emit("mist",R.a.door.x,.6,R.a.door.z,"#c9c2d3",20),u(b,E),await b.wait(1.6))}}),s.register("hanged",async(b,y)=>{let[E]=ma(y),T=["gallows","exile","cellar"].includes(y.scene)?y.scene:"gallows",R=E&&e.chars.get(E);if(!R){await b.wait(1.5);return}b.claim(E),R.setVisible(!0);let F=S([E],9).map(O=>b.claim(O.id)).filter(Boolean);T==="gallows"?await _(b,R,F,E):T==="exile"?await C(b,R,F,E):await D(b,R,F,E)});function A(b,y){let E=n(),T=E.gateAngle+b,R=E.Rp*y;return{x:Math.sin(T)*R,z:Math.cos(T)*R,a:T}}function p(b,y,E,T){let R=b.length;b.forEach((F,O)=>{let V=T+Math.PI+(O-(R-1)/2)/Math.max(1,R)*2.2;F.pos.set(y.x+Math.sin(V)*E+(Math.random()-.5)*.4,0,y.z+Math.cos(V)*E+(Math.random()-.5)*.4),F.yaw=Math.atan2(y.x-F.pos.x,y.z-F.pos.z),F.faceYaw=F.yaw,F.gaze(y,8,e.time)})}async function _(b,y,E,T){let R=A(.25,.82),F=R.a+Math.PI;b.prop("village","platform-wood",R.x,0,R.z,F,1),b.prop("village","frame-wood",R.x,1.18,R.z,F,1);let O={x:Math.sin(F),z:Math.cos(F)},V={x:Math.cos(F),z:-Math.sin(F)};b.prop("village","ladder",R.x+O.x*1.5+V.x*.6,0,R.z+O.z*1.5+V.z*.6,F,.8);let Y=new xt(new Zi(.035,.035,1,6),new on({color:"#c8a46a"}));Y.position.set(R.x,1.18+2.35-.5,R.z);let Z=new xt(new Ho(.16,.035,6,12),Y.material);Z.position.set(R.x,1.18+1.75,R.z),Z.userData.cleanup=()=>{Y.geometry.dispose(),Z.geometry.dispose(),Y.material.dispose()},b.add(Y),b.add(Z);let oe={x:R.x+O.x*3.8,z:R.z+O.z*3.8};p(E,{x:R.x,z:R.z},5.2,F),y.pos.set(oe.x,0,oe.z),y.yaw=F+Math.PI,y.faceYaw=y.yaw;let q=a(),ee=nt(R.x+(V.x*10+O.x*5)*q,5.2*q,R.z+(V.z*10+O.z*5)*q),he=nt(R.x+(V.x*7.5+O.x*4)*q,3.8*q,R.z+(V.z*7.5+O.z*4)*q);b.move(ee,nt(R.x+O.x*1.5,1.6,R.z+O.z*1.5),he,nt(R.x+O.x*1.2,2,R.z+O.z*1.2),4.2,{fov:o()}),y.run([{walk:[{x:R.x+O.x*1.6,z:R.z+O.z*1.6}],mode:"walk"}]),await b.wait(1.4),await b.tween(.5,Ce=>{y.pos.y=Ce*1.2,y.pos.x=R.x+O.x*1.6*(1-Ce),y.pos.z=R.z+O.z*1.6*(1-Ce)}),y.run([]),y.faceYaw=F,y.yaw=F,y.setBase("idle",.2),await b.wait(.5),y.playOnce("emote-no",{timeScale:.9}),b.sfx("hang",{volume:.7}),await b.wait(1.2),e.flash(.45,"#f4e4c1"),e.fx.emit("poof",y.pos.x,1.4,y.pos.z,null,26),b.sfx("poof"),y.setVisible(!1);for(let Ce of E)Math.random()<.6&&Ce.playOnce(Math.random()<.5?"emote-no":"interact-right");let Pe=e.playerById(T),ue=c(b,Pe&&Pe.look,R.x,R.z,1.4,1.8);e.markDead(T,{quiet:!0,drop:!0}),await ue}async function C(b,y,E,T){let R=n(),F=R.gateAngle,O=(Ce,Xe=0)=>({x:Math.sin(F+Xe/Ce)*Ce,z:Math.cos(F+Xe/Ce)*Ce}),V=O(R.R+2),Y=O(R.R-4.5),Z=e.fogBoost(.35),oe=F+Math.PI/2,q=b.prop("graveyard","iron-fence-gate",V.x,0,V.z,oe,1);y.pos.set(Y.x,0,Y.z),y.yaw=F,y.faceYaw=F;let ee=E.slice(0,6);ee.forEach((Ce,Xe)=>{let Ze=(Xe-(ee.length-1)/2)*1.1,gt=O(R.R-7.5-Xe%2*1.2,Ze);Ce.pos.set(gt.x,0,gt.z),Ce.yaw=F,Ce.faceYaw=F,Xe%2===0?(Ce.hold(x(b),"right",[0,-.12,.02]),Ce.setBase("hold",.2)):Ce.hold(g("village","pitchfork-hoe",.9),"right",[0,-.12,.02])});for(let Ce of E.slice(6))Ce.setVisible(!1);let he=O(R.R-14,-3.5);b.cut(nt(he.x,5.6,he.z),nt(V.x,1.2,V.z),{fov:o()});let Pe=O(R.R+14);y.run([{walk:[V,Pe],mode:"walk"}]),ee.forEach((Ce,Xe)=>{let Ze=O(R.R-3.2-Xe%2,(Xe-2.5)*1.1);Ce.run([{wait:.4},{walk:[Ze],mode:"walk"},{pose:Xe%2===0?"hold":"idle"}])}),b.sfx("whoosh",{volume:.4});let ue=O(R.R-10,-2.5);if(await b.move(nt(he.x,5.6,he.z),nt(V.x,1.2,V.z),nt(ue.x,6.4,ue.z),nt(Pe.x,.8,Pe.z),4.8,{fov:o()}),e.fx.emit("mist",y.pos.x,.6,y.pos.z,"#d8dde4",16),y.setVisible(!1),q){let Ce=q.rotation.y;q.rotation.y=Ce+1.3,b.sfx("door"),await b.tween(.6,Xe=>{q.rotation.y=Ce+1.3*(1-Xe)},io)}e.markDead(T,{quiet:!0,drop:!0}),await b.wait(.8),Z()}async function D(b,y,E,T){let R=A(1.1,.9),F=R.a+Math.PI;b.prop("village","trapdoor",R.x,.01,R.z,F,.75);let O=new zt;O.position.set(R.x-Math.cos(F)*.85,.12,R.z+Math.sin(F)*.85),O.rotation.y=F;let V=new xt(new li(1.7,.1,1.7),new on({color:"#7a5232"}));V.position.x=.85;let Y=new xt(new li(1.72,.12,.18),new on({color:"#3a3a44"}));Y.position.set(.85,.01,.45),O.add(V,Y),O.userData.cleanup=()=>{V.geometry.dispose(),V.material.dispose(),Y.geometry.dispose(),Y.material.dispose()},b.add(O);let Z=new xt(new ks(.8,16),new dn({color:"#0b0910"}));Z.rotation.x=-Math.PI/2,Z.position.set(R.x,.03,R.z),Z.userData.cleanup=()=>{Z.geometry.dispose(),Z.material.dispose()},b.add(Z),p(E,R,4.2,F);let oe={x:Math.sin(F),z:Math.cos(F)},q={x:Math.cos(F),z:-Math.sin(F)};y.pos.set(R.x+oe.x*3,0,R.z+oe.z*3),b.cut(nt(R.x+(oe.x*3.5+q.x*7)*a(),4.8*a(),R.z+(oe.z*3.5+q.z*7)*a()),nt(R.x+oe.x*.8,.6,R.z+oe.z*.8),{fov:o()}),b.sfx("door"),await b.tween(.8,he=>{O.rotation.z=he*1.9},io),y.run([{walk:[{x:R.x,z:R.z}],mode:"walk"}]),await b.wait(1.8),y.run([]),y.playOnce("fall",{timeScale:.6}),await b.tween(1,he=>{y.pos.y=-2.2*he},he=>he*he),y.setVisible(!1),b.sfx("door"),await b.tween(.5,he=>{O.rotation.z=1.9*(1-he)},he=>he*he),e.fx.emit("poof",R.x,.3,R.z,"#b8a890",14);let ee=b.prop("clues","key",R.x+q.x*.6,.35,R.z+q.z*.6,F,1.4);ee&&e.fx.emit("magic",ee.position.x,.6,ee.position.z,"#ffd27a",10),e.markDead(T,{quiet:!0,drop:!0});for(let he of E)Math.random()<.5&&he.playOnce("emote-yes",{timeScale:.8});await b.wait(1.3)}function z(b,y,E){let T=g("clues","bow",1.1);T&&(T.rotation.set(0,0,0),y.hold(T,"left",[0,-.13,.05])),y.setBase("holdboth",.25),E&&(y.faceYaw=Math.atan2(E.x-y.pos.x,E.z-y.pos.z),y.yaw=y.faceYaw)}async function B(b,y,E,T=.7){let R=mn("clues","arrow");if(!R)return;let F=R.clone();F.scale.setScalar(.9),b.add(F);let O=nt(E.x-y.x,E.y-y.y,E.z-y.z);b.sfx("shot"),await b.tween(T,V=>{F.position.set(y.x+O.x*V,y.y+O.y*V+Math.sin(V*Math.PI)*1.2,y.z+O.z*V),F.rotation.y=Math.atan2(O.x,O.z),F.rotation.x=-Math.cos(V*Math.PI)*.5},V=>V)}s.register("hunter",async(b,y)=>{let[E]=ma(y),T=E&&e.chars.get(E);if(T){b.claim(E),T.setVisible(!0),z(b,T,nt(0,0,0));let R=r(T.pos,{dist:4.8,height:1.4,lookY:1.4});b.move(nt(R.pos.x,.9,R.pos.z),R.look,nt(R.pos.x*1.05,2,R.pos.z*1.05),R.look,3.4,{fov:o()}),e.flash(.3,"#ff8364"),b.sfx("hunter",{volume:.6}),await b.wait(3.4)}else await b.wait(1.5)}),s.register("shot",async(b,y)=>{let[E]=ma(y),T=y.actorId&&e.chars.get(y.actorId),R=E&&e.chars.get(E);if(!R){await b.wait(1.5);return}b.claim(E),R.setVisible(!0),T&&(b.claim(y.actorId),T.setVisible(!0),z(b,T,R.pos)),R.faceYaw=T?Math.atan2(T.pos.x-R.pos.x,T.pos.z-R.pos.z):R.yaw;let F=T?T.pos:nt(0,0,0),O=nt(F.x-R.pos.x,0,F.z-R.pos.z).normalize(),V=nt(O.z,0,-O.x),Y=nt((F.x+R.pos.x)/2,1,(F.z+R.pos.z)/2),Z=Math.max(4,Math.hypot(F.x-R.pos.x,F.z-R.pos.z)),oe=nt(-Y.x,0,-Y.z).normalize(),q=V.dot(oe)>=0?V:V.clone().multiplyScalar(-1);b.cut(nt(Y.x+q.x*(Z*.9+4),4.6+Z*.2,Y.z+q.z*(Z*.9+4)),Y,{fov:o()}),await b.wait(1),T&&T.playOnce("attack-melee-right",{timeScale:1.4});let ee=B(b,nt(F.x,1.5,F.z),nt(R.pos.x,1.1,R.pos.z),.75),he=r(R.pos,{dir:q,dist:6,height:3.6});b.shot(he.pos,he.look,{fov:o(),k:2.5}),await ee,e.flash(.4,"#ff8364"),e.fx.emit("poof",R.pos.x,.9,R.pos.z,null,22),b.sfx("poof"),R.setVisible(!1);let Pe=e.playerById(E),ue=c(b,Pe&&Pe.look,R.pos.x,R.pos.z,.3,1.8);e.markDead(E,{quiet:!0,drop:!0}),await ue,await b.wait(.4)}),s.register("nohunt",async b=>{let y=e.getState(),E=y&&y.room.hunterId,T=E&&e.chars.get(E);if(T){b.claim(E),T.setVisible(!0);let R=nt(T.pos.x*3+8,0,T.pos.z*3-30);z(b,T,R);let F=r(T.pos,{dist:5.5});b.shot(F.pos,F.look,{fov:o()}),await b.wait(.9),await B(b,nt(T.pos.x,1.5,T.pos.z),nt(R.x,6,R.z),1.1),T.dropProps(),T.setBase("idle",.2),T.playOnce("emote-no"),await b.wait(1.6)}else await b.wait(1.5)}),s.register("win",async(b,y)=>{let E=ma(y),T=t(),R=y.winner;R==="vampir"?(b.tod(23.2,!0),e.moonOverride("#ff4a4a")):R==="soytari"?b.tod(18.4):b.tod(10.2);let F=E.map(Z=>e.chars.get(Z)).filter(Z=>Z&&Z.visible).slice(0,10);for(let Z of F)b.claim(Z.id);let O=S(E,12).map(Z=>b.claim(Z.id)).filter(Boolean);if(R==="soytari"&&F[0]){let Z=F[0];Z.pos.set(0,0,3),Z.yaw=0,Z.faceYaw=0,Z.setBase("cheer",.2),p(O,{x:0,z:3},4.5,0);for(let q of O)q.setBase("sad",.3);let oe=d(4,"#f2c12e");oe.position.set(0,1.2,3),b.add(oe)}else{for(let Z of F)Z.setBase(R==="vampir"?"loom":"cheer",.3);for(let Z of O)Z.setBase("sad",.3)}R==="vampir"&&h(b,0,5,0,16,5.5,T*.5,{x:0,z:-1});let V=0,Y=R!=="vampir";await b.tween(5.6,(Z,oe)=>{let q=-.9+Z*1.6,ee=T*.85*a();if(e.rig.setOverride({pos:nt(Math.sin(q)*ee,T*.5*a(),Math.cos(q)*ee),look:nt(0,1,0),fov:o()+2,k:60},!0),V+=oe,Y&&V>.55){V=0;let he=F[Math.floor(Math.random()*Math.max(1,F.length))];he&&(e.fx.emit("confetti",he.pos.x,2.2,he.pos.z,null,14),Math.random()<.5&&he.playOnce("jump"))}},Z=>Z)}),s.register("promote",async b=>{let y=e.meId(),E=y&&e.chars.get(y);if(E&&E.visible){b.claim(y);let T=r(E.pos,{dist:6,height:4.2});b.shot(T.pos,T.look,{fov:o()}),E.setBase("loom",.3);let R=d(.6,"#ff2244");R.position.set(0,.36,.12),E.headBone&&(E.headBone.add(R),b.add(R,E.headBone)),e.flash(.5,"#d7263d"),await h(b,E.pos.x,1.8,E.pos.z,12,3.4,1.8)}else if(y){let T=i(y,{dist:10});T&&(b.shot(T.pos,T.look,{fov:o()}),e.flash(.5,"#d7263d"),await h(b,T.a.door.x,3,T.a.door.z,12,3.4,3))}await b.wait(.4)}),s.register("seer",async(b,y)=>{let E=(y.targets||[])[0];if(!E)return;let T=e.openRoom(E.id);if(!T){await b.wait(1.5);return}let R=e.playerById(e.meId()),F=T.shot("search",e.rig.portrait);b.cut(F.pos,F.look,{fov:F.fov});let O=R?T.addActor("kahin",R.look,R.name,T.L.doorOut,-Math.PI/2):null,V=ee=>T.W(ee);O&&O.run([{walk:[V(T.L.doorIn),V({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:V(T.L.bookcase)},{once:"pick-up",opts:{timeScale:.8}},{walk:[V({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:V({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.8}},{walk:[V({x:.9,z:.2})],mode:"sneak"},{faceTo:V(T.L.rug)},{pose:"peek"}]),b.sfx("door",{volume:.5}),await b.wait(4.6);let Y=E.cause==="vampir",Z=T.rug;if(Y){let ee=Z.position.x;b.tween(.7,ue=>{Z.position.x=ee+1.6*ue,Z.rotation.z=-.25*Math.sin(ue*Math.PI)},io),await b.wait(.3);let he=T.addTemp(mn("clues","coffin").clone());he.position.set(T.L.rug.x,-.4,T.L.rug.z),he.scale.setScalar(.62),he.rotation.y=.4,b.tween(.6,ue=>{he.position.y=-.4+.42*ue},io);for(let ue=0;ue<3;ue++){let Ce=T.addTemp(mn("clues","potion").clone());Ce.position.set(T.L.rug.x+.9+ue*.32,0,T.L.rug.z-.6+ue*.2);let Xe=d(.9,"#ff2244");Xe.position.y=.4,Ce.add(Xe)}let Pe=T.W({x:T.L.rug.x,z:T.L.rug.z});e.fx.emit("magic",Pe.x,.8,Pe.z,"#ff2244",30),e.flash(.55,"#d7263d"),b.sfx("seer"),h(b,Pe.x,1.2,Pe.z,3,2,.8,{x:0,z:1},.45),O&&(O.setBase("idle",.2),O.playOnce("emote-no"))}else{let ee=["bread","cheese","apple","mug"],he=T.W({x:T.L.rug.x,z:T.L.rug.z});ee.forEach((Pe,ue)=>{let Ce=mn("clues",Pe);if(!Ce)return;let Xe=T.addTemp(Ce.clone());Xe.position.set(T.L.rug.x-.5+ue*.35,.02,T.L.rug.z+.2-ue%2*.3),Xe.scale.setScalar(1.3)}),e.fx.emit("magic",he.x,.6,he.z,"#ffe08a",24),b.sfx("seer"),O&&(O.setBase("idle",.2),O.playOnce("emote-yes"))}let oe=T.shot("inside",e.rig.portrait),q=nt(oe.look.x+(oe.pos.x-oe.look.x)*.78,oe.look.y+(oe.pos.y-oe.look.y)*.8,oe.look.z+(oe.pos.z-oe.look.z)*.78);b.shot(q,T.W({x:T.L.rug.x,y:.4,z:T.L.rug.z}),{fov:oe.fov,k:2.5}),await b.wait(2.2)}),s.register("watch",async(b,y)=>{let E=(y.targets||[])[0];if(!E)return;let T=e.openRoom(E.id);if(!T){await b.wait(1.5);return}let R=T.shot("window",e.rig.portrait);b.cut(R.pos,R.look,{fov:R.fov});let F=e.playerById(e.meId());F&&T.addActor("gozcu",F.look,"",T.L.winOut,Math.PI/2).setBase("peek",0);let O=(y.visitors||[]).map(Z=>e.playerById(Z)).filter(Boolean),V=[{x:-1,z:-1.25},{x:-1.05,z:-.2},{x:-2.2,z:.85},{x:-1.4,z:.75},{x:-.5,z:-.7},{x:-2.9,z:.6}];if(!O.length){await b.wait(3.6);return}let Y=ct(4/O.length,.8,1.4);for(let Z=0;Z<O.length;Z++){let oe=O[Z],q=T.addActor("v"+Z,oe.look,oe.name,T.L.doorStep,-Math.PI/2),ee=V[Z%V.length];q.run([{walk:[T.W(T.L.doorIn),T.W(ee)],mode:"walk"},{faceTo:T.W({x:T.L.sleeper.x,z:-1.3})},{pose:"idle"}]),b.sfx("door",{volume:.35}),await b.wait(Y)}await b.wait(2.8)})}var XM={fog:1,tint:"#ffffff",tintAmt:0,moon:"#eef2ff",stars:1,weather:"none",nightTint:!1,snow:!1,dress:null,lamp:null,fogTint:null},Hc={"sisli-vadi":{fog:.42,tint:"#9aa6b4",tintAmt:.24,stars:.5,weather:"fog",fogTint:"#b8c2cc"},"kanli-ay":{moon:"#ff5244",tint:"#7a1426",tintAmt:.28,nightTint:!0},"hasat-senligi":{tint:"#e7a24a",tintAmt:.13,weather:"leaves",dress:"harvest",lamp:"#ff9a30"},"kara-kis":{tint:"#cfdcff",tintAmt:.26,weather:"snow",snow:!0,fog:.75,moon:"#e6f0ff"},"veba-soylentisi":{tint:"#8e9a62",tintAmt:.32,fog:.55,stars:.6,weather:"fog",fogTint:"#a3ae7a",lamp:"#d8e070"},panayir:{tint:"#ffd0a0",tintAmt:.05,dress:"fair"}};Hc["panayir-haftasi"]=Hc.panayir;function Pm(s){return{...XM,...Hc[s]||{},id:Hc[s]?s:null}}var ga=new H,qM=new H,Gc=class{constructor(e){this.camera=e,this.scratch=e.clone(),this.W=1,this.H=1,this.insets={top:0,bottom:0,left:0,right:0},this.shot={target:new H,az:0,el:.8,dist:30,fov:40,points:null,minDist:8,maxDist:160,margin:.9},this.cur={target:new H,az:0,el:.8,dist:30,fov:40},this.user={az:0,el:0,zoom:1,idle:0,active:!1},this.override=null,this.ovW=0,this.ovPos=new H,this.ovLook=new H,this.snapNext=!0,this.fitTimer=0,this.limits={az:1.2,elMin:-.45,elMax:.5,zMin:.45,zMax:1.7}}setSize(e,t){this.W=Math.max(1,e),this.H=Math.max(1,t),this.applyView()}setInsets(e){this.insets={top:e.top||0,bottom:e.bottom||0,left:e.left||0,right:e.right||0},this.applyView()}get portrait(){return this.H>this.W*1.1}get rect(){let e=this.insets,t=Math.max(50,this.W-e.left-e.right),n=Math.max(50,this.H-e.top-e.bottom);return{x:e.left,y:e.top,w:t,h:n,cx:e.left+t/2,cy:e.top+n/2}}applyView(e=this.camera){let t=this.rect;e.aspect=t.w/t.h,e.setViewOffset(t.w,t.h,t.w/2-t.cx,t.h/2-t.cy,this.W,this.H),e.updateProjectionMatrix()}setShot(e){let t=this.shot;e.target&&t.target.copy(e.target),e.az!=null&&(t.az=e.az),e.el!=null&&(t.el=e.el),e.fov!=null&&(t.fov=e.fov),t.points=e.points||null,t.dist=e.dist||t.dist,t.margin=e.margin||.88,t.minDist=e.minDist||8,t.maxDist=e.maxDist||220,t.kind=e.kind||t.kind,t.speed=e.speed||2.2,e.points&&(t.dist=this.fit(t.target,t.az,t.el,t.fov,e.points,t.margin,t.minDist,t.maxDist)),e.snap&&(this.snapNext=!0)}fit(e,t,n,i,r,o,a,l){let c=this.scratch;c.fov=i,this.applyView(c);let u=qM.set(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)),h=a,f=l;for(let d=0;d<22;d++){let m=(h+f)/2;c.position.copy(e).addScaledVector(u,m),c.lookAt(e),c.updateMatrixWorld(),c.matrixWorldInverse.copy(c.matrixWorld).invert();let v=!0;for(let x=0;x<r.length&&v;x++){if(ga.copy(r[x]).applyMatrix4(c.matrixWorldInverse),ga.z>-.5){v=!1;break}ga.applyMatrix4(c.projectionMatrix),(Math.abs(ga.x)>o||Math.abs(ga.y)>o)&&(v=!1)}v?f=m:h=m}return f}drag(e,t){let n=this.user;n.az=ct(n.az-e*.006,-this.limits.az,this.limits.az),n.el=ct(n.el+t*.004,this.limits.elMin,this.limits.elMax),n.idle=0,n.active=!0}zoom(e){let t=this.user;t.zoom=ct(t.zoom*e,this.limits.zMin,this.limits.zMax),t.idle=0,t.active=!0}recenter(){this.user.active=!1,this.user.idle=999}get offset(){let e=this.user;return Math.abs(e.az)>.05||Math.abs(e.el)>.04||Math.abs(e.zoom-1)>.06}setOverride(e,t){if(!e){this.override=null,t&&(this.ovW=0);return}this.override||(this.ovPos.copy(this.camera.position),this.ovLook.copy(this.lookPoint||this.cur.target)),this.override=e,t&&(this.ovPos.copy(e.pos),this.ovLook.copy(e.look),this.ovW=1,this.ovFov=e.fov)}update(e,t){let n=this.shot,i=this.cur,r=this.user;if(r.idle+=e,r.idle>14||!r.active){let g=Xn(r.active?1.2:3,e);r.az+=(0-r.az)*g,r.el+=(0-r.el)*g,r.zoom+=(1-r.zoom)*g,r.idle>14&&Math.abs(r.az)<.01&&Math.abs(r.zoom-1)<.01&&(r.active=!1)}this.fitTimer-=e,n.points&&n.dynamic&&this.fitTimer<=0&&(this.fitTimer=.25,n.dist=this.fit(n.target,n.az,n.el,n.fov,n.points,n.margin,n.minDist,n.maxDist));let o=this.snapNext?1:Xn(n.speed||2.2,e);this.snapNext=!1,i.target.lerp(n.target,o),i.az+=qn(n.az-i.az)*o,i.el+=(n.el-i.el)*o,i.dist+=(n.dist-i.dist)*o,i.fov+=(n.fov-i.fov)*o;let a=i.az+r.az,l=ct(i.el+r.el,.12,1.45),c=i.dist*r.zoom,u=this.camera,h=i.target.x+Math.sin(a)*Math.cos(l)*c,f=i.target.y+Math.sin(l)*c,d=i.target.z+Math.cos(a)*Math.cos(l)*c,m=this.override?1:0;if(this.ovW+=(m-this.ovW)*Xn(this.override?this.override.k||2.5:2,e),this.override){let g=Xn(this.override.k||2.5,e);this.ovPos.lerp(this.override.pos,g),this.ovLook.lerp(this.override.look,g)}let v=this.ovW;u.position.set(h+(this.ovPos.x-h)*v,f+(this.ovPos.y-f)*v,d+(this.ovPos.z-d)*v),this.lookPoint||(this.lookPoint=new H),this.lookPoint.copy(i.target).lerp(this.ovLook,v),u.lookAt(this.lookPoint);let x=i.fov+(this.override&&this.override.fov||i.fov)*0+((this.override&&this.override.fov||i.fov)-i.fov)*v;Math.abs(u.fov-x)>.01&&(u.fov=x,u.updateProjectionMatrix()),u.updateMatrixWorld(),!this.override&&this.ovW<.002&&(this.ovW=0)}};var YM=`
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
.vkw-recenter:not(.show){pointer-events:none}
@media (max-width:540px){.vkw-job{font-size:9.5px}.vkw-tag.sel .vkw-name{padding:3px 8px 3px 5px;font-size:12.5px}.vkw-plaque.sel{font-size:11.5px;padding:3px 7px 3px 4px}.vkw-plaque span{max-width:64px}.vkw-plaque{font-size:10.5px}}
@media (min-width:900px){.vkw-name{font-size:13px}.vkw-plaque{font-size:12px}}
`,Ms=null,Vc=0;function KM(){Vc++,!Ms&&(Ms=document.createElement("style"),Ms.id="vkw-style",Ms.textContent=YM,document.head.appendChild(Ms))}function ZM(){Vc--,Vc<=0&&Ms&&(Ms.remove(),Ms=null,Vc=0)}var wf=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),_n=new H;function Lm(s,e){KM();let t=document.createElement("div");t.className="vkw-ov",s.appendChild(t);let n=new Map,i=new Map,r=new Map,o=1,a=1,l=!1,c={top:0,bottom:0,left:0,right:0},u=0,h=document.createElement("button");h.className="vkw-recenter",h.type="button",h.title="G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla",h.setAttribute("aria-label","G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla"),h.textContent="\u2316",h.addEventListener("click",A=>{A.stopPropagation(),e.onRecenter()}),t.appendChild(h);function f(A,p){let _=0,C=0,D=0;A.addEventListener("pointerdown",z=>{_=z.clientX,C=z.clientY,D=performance.now(),z.stopPropagation()}),A.addEventListener("pointerup",z=>{z.stopPropagation(),Math.hypot(z.clientX-_,z.clientY-C)<12&&performance.now()-D<700&&p()}),A.addEventListener("click",z=>z.stopPropagation())}function d(A){let p=n.get(A);if(p)return p;let _=document.createElement("div");return _.className="vkw-tag",_.innerHTML='<span class="vkw-mark" hidden></span><span class="vkw-votes" hidden></span><span class="vkw-name"></span><span class="vkw-job" hidden></span>',t.insertBefore(_,h),p={el:_,mark:_.children[0],votes:_.children[1],name:_.children[2],job:_.children[3],sig:"",markSig:"",voteSig:"",cls:"",w:60,h:20,measured:!1,x:0,y:0,shown:!1},f(_,()=>e.onTagTap(A)),n.set(A,p),p}function m(A){let p=i.get(A);if(p)return p;let _=document.createElement("div");return _.className="vkw-plaque",t.insertBefore(_,t.firstChild),p={el:_,sig:"",cls:"",shown:!1},f(_,()=>e.onPlaqueTap(A)),i.set(A,p),p}function v(A,p){let _=d(A),C=p.name+"|"+p.job+"|"+p.color+"|"+p.badges;C!==_.sig&&(_.sig=C,_.name.innerHTML=`<i style="background:${gn[p.color]||"#999"}"></i>${p.badges?`<span>${p.badges}</span>`:""}<span>${wf(p.name)}</span>`,_.job.textContent=p.job||"",_.jobText=p.job||"",_.measured=!1);let D=p.mark?p.mark.label+p.mark.color:"";D!==_.markSig&&(_.markSig=D,_.mark.hidden=!p.mark,p.mark&&(_.mark.textContent=p.mark.label,_.mark.style.setProperty("--c",p.mark.color)),_.measured=!1);let z=p.votes?p.votes.total+":"+p.votes.dots.join(","):"";z!==_.voteSig&&(_.voteSig=z,_.votes.hidden=!p.votes,p.votes&&(_.votes.innerHTML=`<b>${p.votes.total}</b>`+p.votes.dots.map(y=>`<i style="background:${y.color}">${y.w>1?"2":""}</i>`).join("")),_.measured=!1);let B=!!_.jobText&&(!l||p.picked||p.hover);_.job.hidden===B&&(_.job.hidden=!B,_.measured=!1);let b="vkw-tag"+(l?" cmp":"")+(p.me?" me":"")+(p.off?" off":"")+(p.dead?" dead":"")+(p.sel?" sel":"")+(p.picked?" picked":"")+(p.hover?" hover":"");b!==_.cls&&(_.cls=b,_.el.className=b),p.selColor&&_.el.style.setProperty("--c",p.selColor),_.data=p}function x(A,p){let _=m(A),C=p.name+"|"+p.color+"|"+(p.mark?p.mark.label:"");C!==_.sig&&(_.sig=C,_.el.innerHTML=`<i style="background:${gn[p.color]||"#c9b48a"}"></i><span>${wf(p.name)}</span>${p.mark?`<em style="font-style:normal;font-size:10.5px;padding:0 4px;border-radius:4px;background:rgba(0,0,0,.35);color:#fff">${wf(p.mark.label)}</em>`:""}`);let D="vkw-plaque"+(p.sel?" sel":"")+(p.picked?" picked":"")+(p.dim?" dim":"")+(p.dead?" dead":"");D!==_.cls&&(_.cls=D,_.el.className=D),p.selColor&&_.el.style.setProperty("--c",p.selColor),_.data=p}function g(A,p){for(let[_,C]of A)p.has(_)||(C.el.remove(),A.delete(_))}function S(A,p,_){let C=r.get(A);if(!C){let D=document.createElement("div");D.className="vkw-bubble",t.insertBefore(D,h),C={el:D,until:0,h:30},r.set(A,C)}C.el.textContent=p.length>90?p.slice(0,88)+"\u2026":p,C.el.dataset.ch=_||"genel",C.el.classList.add("show"),C.until=performance.now()+3200+Math.min(3e3,p.length*45),C.h=0,C.seq=++u}let N=[];function M(A,p,_,C){let D=[];for(let[E,T]of n){if(!(p(E,_n)&&C(E))){T.shown&&(T.el.style.transform="translate3d(-9999px,0,0)",T.shown=!1),T.vis=!1;continue}if(_n.project(A),_n.z>1||_n.x<-1.2||_n.x>1.2||_n.y<-1.2||_n.y>1.3){T.shown&&(T.el.style.transform="translate3d(-9999px,0,0)",T.shown=!1),T.vis=!1;continue}T.measured||(T.w=T.el.offsetWidth||60,T.h=T.el.offsetHeight||20,T.measured=!0),T.sx=(_n.x*.5+.5)*o,T.sy=(-_n.y*.5+.5)*a,T.depth=_n.z,T.vis=!0,D.push(T)}D.sort((E,T)=>T.sy-E.sy),N.length=0;for(let E of D){let T=E.sx-E.w/2,R=E.sy-E.h;for(let F=0;F<6;F++){let O=!1;for(let V of N)T<V.x+V.w-2&&T+E.w>V.x+2&&R<V.y+V.h-1&&R+E.h>V.y+1&&(R=V.y-E.h-1,O=!0);if(!O)break}T=Math.max(c.left+2,Math.min(o-c.right-E.w-2,T)),R=Math.max(c.top+2,Math.min(a-c.bottom-E.h-2,R)),N.push({x:T,y:R,w:E.w,h:E.h,t:E}),E.x=T,E.y=R,E.el.style.transform=`translate3d(${T.toFixed(1)}px,${R.toFixed(1)}px,0)`,E.el.style.zIndex=String(10+Math.round((1-E.depth)*1e3)),E.shown=!0}let z=performance.now(),B=[];for(let[E,T]of r){let R=n.get(E);if(z>T.until&&T.el.classList.contains("show")&&T.el.classList.remove("show"),!R||!R.vis||z>T.until+400){T.el.style.transform="translate3d(-9999px,0,0)";continue}T.h||(T.h=T.el.offsetHeight||30,T.w=T.el.offsetWidth||100),B.push({b:T,t:R})}B.sort((E,T)=>T.b.seq-E.b.seq);let b=[];B.forEach(({b:E,t:T},R)=>{let F=Math.max(c.left+4,Math.min(o-c.right-E.w-4,T.sx-E.w/2)),O=T.y-E.h-8;for(let V=0;V<6;V++){let Y=!1;for(let Z of b)F<Z.x+Z.w&&F+E.w>Z.x&&O<Z.y+Z.h+4&&O+E.h+4>Z.y&&(O=Z.y-E.h-6,Y=!0);for(let Z of N)Z.t!==T&&F<Z.x+Z.w&&F+E.w>Z.x&&O<Z.y+Z.h+2&&O+E.h+2>Z.y&&(O=Z.y-E.h-4,Y=!0);if(!Y)break}O=Math.max(c.top+4,O),b.push({x:F,y:O,w:E.w,h:E.h}),E.el.classList.toggle("old",R>=3),E.el.style.transform=`translate3d(${F.toFixed(1)}px,${O.toFixed(1)}px,0)`,E.el.style.zIndex=String(2e3+(100-R))});let y=[];for(let[E,T]of i){if(!(_(E,_n)&&!(T.data&&T.data.hidden))){T.shown&&(T.el.style.transform="translate3d(-9999px,0,0)",T.shown=!1);continue}if(_n.project(A),_n.z>1||Math.abs(_n.x)>1.15||Math.abs(_n.y)>1.15){T.shown&&(T.el.style.transform="translate3d(-9999px,0,0)",T.shown=!1);continue}(!T.w||T.sigW!==T.sig+T.cls)&&(T.w=T.el.offsetWidth||70,T.h=T.el.offsetHeight||20,T.sigW=T.sig+T.cls),T.ax=(_n.x*.5+.5)*o,T.ay=(-_n.y*.5+.5)*a,T.px=T.ax,T.py=T.ay,y.push(T)}for(let E=0;E<5;E++){for(let T=0;T<y.length;T++){let R=y[T];for(let F=T+1;F<y.length;F++){let O=y[F],V=(R.w+O.w)/2+3-Math.abs(R.px-O.px),Y=(R.h+O.h)/2+2-Math.abs(R.py-O.py);if(V>0&&Y>0)if(Y<V){let Z=(R.py<O.py?-1:1)*Y/2;R.py+=Z,O.py-=Z}else{let Z=(R.px<O.px?-1:1)*V/2;R.px+=Z,O.px-=Z}}}for(let T of y){let R=T.px-T.ax,F=T.py-T.ay,O=Math.hypot(R,F);O>28&&(T.px=T.ax+R/O*28,T.py=T.ay+F/O*28)}}for(let E of y){let T=Math.max(c.left+2,Math.min(o-c.right-E.w-2,E.px-E.w/2)),R=Math.max(c.top+2,Math.min(a-c.bottom-E.h-2,E.py-E.h/2));E.el.style.transform=`translate3d(${T.toFixed(1)}px,${R.toFixed(1)}px,0)`,E.el.style.zIndex=E.data&&E.data.sel?"900":"5",E.shown=!0}}function L(A,p){let _=document.createElement("div");_.className="vkw-ripple",_.style.left=A+"px",_.style.top=p+"px",t.appendChild(_),setTimeout(()=>_.remove(),600)}return{el:t,setSize(A,p){o=A,a=p;for(let _ of n.values())_.measured=!1},setInsets(A){c={top:A.top||0,bottom:A.bottom||0,left:A.left||0,right:A.right||0}},setCompact(A){if(A!==l){l=A;for(let p of n.values())p.sig="",p.measured=!1}},setTag:v,setPlaque:x,bubble:S,project:M,ripple:L,tags:n,plaques:i,sync(A,p){g(n,A),g(i,p);for(let[_,C]of r)A.has(_)||(C.el.remove(),r.delete(_))},setRecenter(A,p){h.classList.toggle("show",!!A),h.style.right=12+(p.right||0)+"px",h.style.bottom=12+(p.bottom||0)+"px"},hitTag(A,p){for(let _ of n.values())if(!(!_.vis||!_.data||!_.data.sel)&&A>=_.x-6&&A<=_.x+_.w+6&&p>=_.y-6&&p<=_.y+_.h+6)return _;return null},clear(){for(let A of[n,i,r]){for(let p of A.values())p.el.remove();A.clear()}},dispose(){t.remove(),ZM()}}}var Nm=2.3;function xa(s){return{r:Math.hypot(s.x,s.z),a:Math.atan2(s.x,s.z)}}function sr(s,e){return{x:Math.sin(s)*e,z:Math.cos(s)*e}}function JM(s,e,t){let n=e.x-s.x,i=e.z-s.z,r=n*n+i*i;if(r<.01)return;let o=-(s.x*n+s.z*i)/r;if(o<=0||o>=1)return;let a=s.x+n*o,l=s.z+i*o,c=Math.hypot(a,l);if(c>=Nm)return;let u=a,h=l;c<.01&&(u=-i,h=n);let f=Math.hypot(u,h)||1,d=Nm+.25,m=n/Math.sqrt(r),v=i/Math.sqrt(r);t.push({x:u/f*d-m*1.2,z:h/f*d-v*1.2}),t.push({x:u/f*d+m*1.2,z:h/f*d+v*1.2})}function Dm(s,e){let t=s[s.length-1];t&&JM(t,e,s),s.push({x:e.x,z:e.z})}function $M(s,e,t,n){let i=qn(t-e),r=Math.max(1,Math.ceil(Math.abs(i)/.22));for(let o=1;o<=r;o++)s.push(sr(e+i*o/r,n))}function Wc(s,e,t,n){let i=[{x:e.x,z:e.z}],r=s.Rr,o=r+.4,a=e,l=xa(e).a;if(n!=null){let c=sr(n,r);i.push(c),a=c,l=n}else if(xa(e).r>o){let c=xa(e),u=sr(c.a,r);i.push(u),a=u,l=c.a}if(t.house){let c=t.angle,u=Math.abs(qn(c-l)),h=sr(c,r);if(xa(a).r>r-.8&&u<1.4?$M(i,l,c,r):Dm(i,h),t.peek){let d=t.house.peek,m=qn(xa(d).a-c)>=0?1:-1,v=(t.halfWidth||3)+1.4,x=s.R,g=sr(c+m*(v/(x-2)),x-2.2),S=sr(c+m*(v/(x+1)),x+1.2),N=sr(c+m*((v-.6)/(x+3.4)),x+3.6);i.push(g,S,N,{x:d.x,z:d.z})}else i.push({x:t.house.approach.x,z:t.house.approach.z})}else Dm(i,t);return i}function Tf(s,e,t){for(let n=0;n<e.length;n++){let i=e[n];if(i===t||i.tag===t)continue;let r=s.x-i.x,o=s.z-i.z,a=r*r+o*o,l=i.r+.32;if(a<l*l){let c=Math.sqrt(a)||.001;s.x=i.x+r/c*l,s.z=i.z+o/c*l}}}function Ef(s,e){let t={x:s.x,z:s.z};for(let n=0;n<3;n++)Tf(t,e,null);return t}var Xc=()=>typeof window!="undefined"&&window.VKRules||null;function rr(s){let e=Xc();if(e&&e.action)return e.action(s);if(!s||!s.me)return null;let{room:t,me:n}=s;return t.phase==="night"&&n.alive&&s.night?"night":t.phase==="day"&&n.alive&&s.day?"vote":t.phase==="hunter"&&t.hunterId===n.id?"shoot":null}function jM(s,e){let t=Xc();if(t&&t.witchBlocked)return t.witchBlocked(s,e);let n=s.night&&s.night.witch;return n?e==="poison"?n.poisonUsed:n.healUsed:!1}function Um(s,e,t){let n=Xc();if(n&&n.selectable)return!!n.selectable(s,e,t);let i=rr(s);if(!i||!e||!e.alive||e.left)return!1;let r=s.me,o=e.id===r.id;if(i==="vote"||i==="shoot")return!o;switch(r.role){case"vampir":return!o&&!pf[e.role];case"iftiraci":return!o&&!pf[e.role];case"doktor":return!0;case"gozcu":return!0;case"kahin":return!o;case"cadi":return jM(s,t)?!1:!(t==="poison"&&o);default:return!1}}function so(s){let e=Xc();if(e&&e.visits&&s&&s.me&&s.me.alive)try{let o=e.visits(s);if(o instanceof Map){for(let[a,l]of o)a===l&&a!==s.me.id&&o.delete(a);return o}}catch{}let t=new Map,n=s&&s.night;if(!n||s.room.phase!=="night"||!s.me.alive)return t;let i=s.me,r=new Set(s.players.filter(o=>o.alive&&!o.left).map(o=>o.id));if(n.team)for(let o of n.team)o.targetId&&r.has(o.vampId)&&t.set(o.vampId,o.targetId);if(n.witch){let o=n.witch.poison||n.witch.heal;o&&t.set(i.id,o)}else n.mySelection&&i.role!=="vampir"&&t.set(i.id,n.mySelection);if(i.role==="vampir"&&n.framer){let o=s.players.find(a=>a.role==="iftiraci"&&a.alive);o&&t.set(o.id,n.framer)}for(let[o,a]of t)o===a&&o!==i.id&&t.delete(o);return t}function qc(s,e,t){let{night:n,day:i,me:r,room:o}=s;if(n){if(n.witch){if(n.witch.poison===e.id)return ti.poison;if(n.witch.heal===e.id)return ti.heal;if((n.witch.victims||[]).includes(e.id))return{label:"\u{1FA78} Sald\u0131r\u0131 alt\u0131nda",color:"#d7263d"}}else if(n.mySelection===e.id&&ti[r.role])return ti[r.role];let a=(n.team||[]).filter(l=>l.targetId===e.id&&l.vampId!==r.id).map(l=>l.name);if(a.length)return{label:"\u{1F9DB} "+a.join(", "),color:"#d7263d"};if(r.role==="vampir"&&n.framer===e.id)return{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"}}return i&&i.myVote===e.id?ti.vote:o.phase==="hunter"&&e.id===o.hunterId?{label:"\u{1F3F9} Ni\u015Fan al\u0131yor",color:"#ff8364"}:null}function _a(s,e){let{night:t,day:n}=s;return t?t.witch?t.witch.poison===e.id||t.witch.heal===e.id:t.mySelection===e.id:n?n.myVote===e.id:!1}function Af(s,e){let t=rr(s);return t==="vote"?ti.vote.color:t==="shoot"?ti.shoot.color:t==="night"?s.me.role==="cadi"?(e==="poison"?ti.poison:ti.heal).color:(ti[s.me.role]||ti.vote).color:"#f2c12e"}function Fm(s){let e=new Map,t=null,n=new Map;function i(h){for(let f of s.village.benchSlots)if(Math.hypot(h.x-f.x,h.z-f.z)<1.25)return f;return null}function r(h,f){let d=-h,m=-f,v=Math.hypot(d,m)||1,x=s.camera.position.x-h,g=s.camera.position.z-f,S=Math.hypot(x,g)||1;return Math.atan2(d/v*.45+x/S*.55,m/v*.45+g/S*.55)}function o(h){s.village.openDoor(h,1.3),s.sfxThrottled("door",.35)}function a(h,f,d,m){let v=s.village,x=v.layout;if(!x)return;let g=[];if(m){if(h.peeking=null,f.kind==="plaza"||f.kind==="gather")h.inside=null,h.pos.set(f.x,0,f.z),h.yaw=f.face!=null?f.face:r(f.x,f.z),h.faceYaw=h.yaw,h.setVisible(!0),h.run([{pose:f.pose||"idle",fade:0}]);else if(f.kind==="house"){let M=s.houseAnchors(f.house);if(!M)return;if(f.peek){h.inside=null;let L=Wc(x,M.approach,{house:M,angle:v.house(f.house).angle,peek:!0,halfWidth:v.house(f.house).info.hx});h.pos.set(M.peek.x,0,M.peek.z),h.yaw=Math.atan2(M.backWin.x-M.peek.x,M.backWin.z-M.peek.z),h.faceYaw=h.yaw,h.peeking=f.house,h.peekPath=L.slice(-5),h.setVisible(!0),h.run([{pose:"peek",fade:0}])}else h.inside=f.house,h.pos.set(M.inside.x,0,M.inside.z),h.setVisible(!1),h.run([{pose:"idle",fade:0}])}else f.kind==="gone"&&(h.setVisible(!1),h.run([]));return}if(f.kind==="gone"){h.visible&&(s.poofAt(h.pos.x,h.pos.z),h.setVisible(!1)),h.run([]);return}if(!h.visible&&!h.inside&&!h.peeking){if(f.kind==="plaza"||f.kind==="gather"){a(h,f,0,!0),s.fx.emit("magic",f.x,.8,f.z,"#f4e4c1",10);return}v.house(h.id)&&(h.inside=h.id)}d&&g.push({wait:d});let S={x:h.pos.x,z:h.pos.z},N=null;if(h.inside){let M=h.inside,L=s.houseAnchors(M),A=v.house(M);if(L&&A){if(f.kind==="house"&&f.house===M&&!f.peek)return;g.push({at:L.inside,face:L.rotY,snapFace:!0},{call:()=>o(M)},{wait:.3},{show:!0,call:p=>{p.inside=null}},{walk:[L.approach],mode:"walk"}),S=L.approach,N=A.angle}else h.inside=null}else if(h.peeking){if(f.kind==="house"&&f.peek&&f.house===h.peeking)return;let M=(h.peekPath||[]).slice().reverse();M.length>1&&(g.push({pose:"idle",fade:.2},{walk:M.slice(1),mode:"sneak",call:L=>{L.peeking=null}}),S=M[M.length-1]),h.peeking=null}if(f.kind==="plaza"||f.kind==="gather"){let M=Ef({x:f.x,z:f.z},s.obstacles),L=Wc(x,S,M,N).map((p,_,C)=>_>0&&_<C.length-1?Ef(p,s.obstacles):p);L.shift(),L.length&&g.push({walk:L,mode:f.mode||"walk"});let A=f.face!=null?f.face:r(M.x,M.z);g.push({face:A}),f.pose?g.push({pose:f.pose}):g.push({pose:"idle"})}else if(f.kind==="house"){let M=f.house,L=s.houseAnchors(M),A=v.house(M);if(!L||!A)return;let p=Wc(x,S,{house:L,angle:A.angle,peek:!!f.peek,halfWidth:A.info.hx},N);p.shift();let _=l(S,p)>12,C=f.mode||(_?f.house===h.id?"brisk":"sprint":"walk");if(f.peek){let D=p.slice(-2),z=p.slice(0,p.length-2);z.length&&g.push({walk:z,mode:C}),g.push({walk:D,mode:"sneak"}),g.push({faceTo:L.backWin},{pose:"peek",call:B=>{B.peeking=M,B.peekPath=p.slice(-5)}})}else p.length&&g.push({walk:p,mode:C}),g.push({faceTo:L.door},{wait:.15},{call:()=>o(M)},{wait:.35},{walk:[L.inside],mode:"walk"},{hide:!0,call:D=>{D.inside=M,n.set(M,s.time+9+Math.random()*4)}})}h.run(g)}function l(h,f){let d=0,m=h;for(let v of f)d+=Math.hypot(v.x-m.x,v.z-m.z),m=v;return d}function c(h,f){let d=s.village,m=d.layout;if(!m||!h||!h.me)return;let{room:v,me:x,players:g}=h,S=v.phase,N=S==="reveal"||S==="night"||S==="day"||S==="hunter",M=!x.alive,L=S!==t;t=S;let A=so(h),p=new Set(v.winners||[]),_=g.filter(C=>C.alive&&!C.left).sort((C,D)=>C.seat-D.seat).map(C=>C.id);for(let C of g){let D=s.ensureChar(C);if(!D)continue;D.isMe=C.id===x.id;let z=!C.left&&(C.alive||S==="hunter"&&C.id===v.hunterId),B;if(!z)B={kind:"gone"};else if(S==="reveal"){let R=_.indexOf(C.id),F=Math.max(_.length,1),O=R/F*We+.3,V=4.3+(F>12?R%2*1.3:0);B={kind:"gather",x:Math.sin(O)*V,z:Math.cos(O)*V,face:O+Math.PI,pose:"warm"}}else if(S==="night"){let R=A.get(C.id);R&&R!==C.id&&d.house(R)?B={kind:"house",house:R,peek:D.isMe&&x.role==="gozcu"}:B={kind:"house",house:C.id}}else{let R=D.isMe&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,F=R?{x:R.x,z:R.z}:xf(m,C.pos?C.pos.x:.5,C.pos?C.pos.y:.8),O=null,V=null,Y=i(F);C.connected?S==="ended"?O=p.has(C.id)?"cheer":null:Y&&S!=="hunter"&&(O="sit",V=Y.a+Math.PI):O="sit",B={kind:"plaza",x:F.x,z:F.z,pose:O,face:V}}let b=B.kind+":"+(B.house||"")+":"+(B.peek?"p":"")+":"+(B.x!=null?B.x.toFixed(2)+","+B.z.toFixed(2):"")+":"+(B.pose||""),y=e.get(C.id),E=f||D.fresh;if(D.claimed&&!E){e.delete(C.id);continue}if(D.fresh=!1,y!==b||E){e.set(C.id,b);let R=0;L&&!E?S==="night"?R=D.isMe?.2:Math.random()*1.6:S==="day"||S==="hunter"?R=.3+Math.random()*2.2:S==="reveal"&&(R=Math.random()*.8):y&&y.startsWith("house")&&B.kind==="house"&&S==="night"&&!E&&(R=.1),a(D,B,R,E)}if(C.left?!1:!C.alive&&(N&&M||S==="ended")){let R=s.ensureGhost(C);if(R){let F=xf(m,C.pos?C.pos.x:.5,C.pos?C.pos.y:.8),O="g:"+F.x.toFixed(2)+","+F.z.toFixed(2);(e.get("g"+C.id)!==O||R.fresh)&&(e.set("g"+C.id,O),R.fresh&&(R.pos.set(F.x,0,F.z),R.fresh=!1,R.yaw=r(F.x,F.z),s.fx.emit("magic",F.x,1,F.z,"#d8d0ff",12)),R.isMe=C.id===x.id,R.run([{walk:[{x:F.x,z:F.z}],mode:"stroll"},{face:r(F.x,F.z)}]))}}else s.removeGhost(C.id)}for(let C of g){let D=d.house(C.id);if(D)if(D.dead=N||S==="ended"?!C.alive||C.left:!1,S==="night"){let z=(n.get(C.id)||0)>s.time?1:0;for(let[,B]of A)B===C.id&&(z=Math.max(z,.8));d.setLit(C.id,z)}else d.setLit(C.id,1)}S!=="night"&&n.clear()}function u(h){if(!h||h.room.phase!=="night")return;let f=s.village,d=so(h);for(let m of h.players){if(!f.house(m.id))continue;let v=(n.get(m.id)||0)>s.time?1:0;for(let[,x]of d)x===m.id&&(v=Math.max(v,.8));f.setLit(m.id,v)}}return{apply:c,tick:u,reset(){e.clear(),t=null,n=new Map},forget(h){e.delete(h),e.delete("g"+h)}}}var va=[{h:0,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1},{h:3.6,top:"#121434",hor:"#2c2a60",sun:"#86a4ff",si:.72,sky:"#545ca4",gnd:"#1e1a38",hi:.68,stars:.95,lamps:1,fog:[30,175],fire:1},{h:5,top:"#28356e",hor:"#7a6a9a",sun:"#a0a8e8",si:.45,sky:"#6a74b0",gnd:"#2a2238",hi:.6,stars:.4,lamps:.8,fog:[35,190],fire:.9},{h:6.1,top:"#4a6fb0",hor:"#f2b08e",sun:"#ffb284",si:1.1,sky:"#a8b6e0",gnd:"#5c4a44",hi:.75,stars:0,lamps:.25,fog:[40,220],fire:.6},{h:8,top:"#4f95dc",hor:"#cfe4f2",sun:"#fff0d4",si:2.5,sky:"#c3dcff",gnd:"#6f6a3e",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:12,top:"#3f8ae0",hor:"#d3eaff",sun:"#fffaf0",si:2.8,sky:"#cfe4ff",gnd:"#727040",hi:1.05,stars:0,lamps:0,fog:[60,280],fire:.3},{h:15.8,top:"#4b8ad6",hor:"#ebdcc4",sun:"#ffe6b8",si:2.6,sky:"#cad8f2",gnd:"#75683c",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:17.6,top:"#4a62ae",hor:"#ffbf80",sun:"#ffb066",si:2.1,sky:"#c0b0d8",gnd:"#6a4a36",hi:.85,stars:0,lamps:.15,fog:[48,240],fire:.5},{h:18.6,top:"#3a3f8a",hor:"#ff9468",sun:"#ff8a4c",si:1.35,sky:"#9a86c8",gnd:"#4a3038",hi:.7,stars:.05,lamps:.7,fog:[42,215],fire:.75},{h:19.5,top:"#252660",hor:"#b85f74",sun:"#e07a6a",si:.6,sky:"#6a5fa8",gnd:"#2a1c34",hi:.6,stars:.35,lamps:1,fog:[36,195],fire:.95},{h:20.6,top:"#15122b",hor:"#3a2a6b",sun:"#8fb4ff",si:.72,sky:"#5454a6",gnd:"#201a3a",hi:.68,stars:.9,lamps:1,fog:[30,180],fire:1},{h:24,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1}],Om=["top","hor","sun","sky","gnd"];for(let s of va)for(let e of Om)s[e]=new be(s[e]);function zm(){return{h:12,top:new be,hor:new be,sun:new be,sky:new be,gnd:new be,si:1,hi:1,stars:0,lamps:0,fogNear:50,fogFar:250,fire:.5,sunDir:new H,moonDir:new H,lightDir:new H,sunVis:0,moonVis:0,night:0,dusk:0}}function eS(s,e){let t=(s-6)/12.9,n=(.5-t)*Math.PI*.95,i=Math.sin(ct(t,-.2,1.2)*Math.PI)*1;return e.set(Math.sin(n)*Math.cos(i),Math.sin(i),Math.cos(n)*Math.cos(i)*.9+.25).normalize(),e}function tS(s,e){let t=s-19.4;t<0&&(t+=24);let n=t/10.2,i=(.5-n)*Math.PI*.9,r=Math.sin(ct(n,-.2,1.2)*Math.PI)*.95;return e.set(Math.sin(i)*Math.cos(r)*.9,Math.sin(r),Math.cos(i)*Math.cos(r)*.6-.3).normalize(),e}var Yc=new H,Kc=new H;function Bm(s,e){s=(s%24+24)%24,e.h=s;let t=0;for(;t<va.length-2&&va[t+1].h<=s;)t++;let n=va[t],i=va[t+1],r=to(ct((s-n.h)/(i.h-n.h),0,1));for(let a of Om)e[a].copy(n[a]).lerp(i[a],r);e.si=n.si+(i.si-n.si)*r,e.hi=n.hi+(i.hi-n.hi)*r,e.stars=n.stars+(i.stars-n.stars)*r,e.lamps=n.lamps+(i.lamps-n.lamps)*r,e.fire=n.fire+(i.fire-n.fire)*r,e.fogNear=n.fog[0]+(i.fog[0]-n.fog[0])*r,e.fogFar=n.fog[1]+(i.fog[1]-n.fog[1])*r,eS(s,e.sunDir),tS(s,e.moonDir),e.sunVis=ct((e.sunDir.y+.06)/.12,0,1),e.moonVis=ct((e.moonDir.y+.04)/.12,0,1)*ct(1-e.sunVis*1.2,0,1);let o=ct((e.sunDir.y+.05)/.25,0,1);return e.night=1-o,e.dusk=ct(1-Math.abs(e.sunDir.y-.05)/.22,0,1),Yc.copy(e.sunDir),Yc.y=Math.max(Yc.y,.24),Kc.copy(e.moonDir),Kc.y=Math.max(Kc.y,.45),e.lightDir.copy(Yc.normalize()).multiplyScalar(o).addScaledVector(Kc.normalize(),1-o).normalize(),e}function km(s,e,t,n){let i=e-s;for(;i>12;)i-=24;for(;i<-12;)i+=24;i<-3&&(i+=24);let r=Math.sign(i)*Math.min(Math.abs(i),Math.max(n*t,Math.abs(i)*(1-Math.exp(-1.2*t))));return((s+r)%24+24)%24}var Ma={low:{name:"low",px:1,shadows:0,fps:30,sparks:20,fireflies:14,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:220},medium:{name:"medium",px:1.5,shadows:1,fps:60,sparks:44,fireflies:32,clouds:!0,blob:!0,charShadow:!1,shadowSize:1024,weather:480},high:{name:"high",px:2,shadows:2,fps:60,sparks:70,fireflies:56,clouds:!0,blob:!1,charShadow:!0,shadowSize:2048,weather:900}},ya=["low","medium","high"];function Hm(s){return s?{trees:150,scatter:90,groundTex:1024}:{trees:260,scatter:170,groundTex:2048}}function Gm(){let s=navigator.userAgent||"";return/Android|iPhone|iPad|iPod|Mobile/i.test(s)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820}var Zc=class{constructor(e){this.level=e,this.samples=0,this.sum=0,this.windowStart=0,this.bad=0,this.good=0,this.failed=new Set}reset(){this.samples=0,this.sum=0,this.windowStart=0,this.bad=0,this.good=0}sample(e,t){if(e>250||(this.windowStart||(this.windowStart=t),this.sum+=e,this.samples++,t-this.windowStart<2e3))return null;let n=this.sum/this.samples;this.sum=0,this.samples=0,this.windowStart=t;let i=Ma[this.level],r=i.fps===30?40:38;n>r?(this.bad++,this.good=0):n<(i.fps===30?34:15)?(this.good++,this.bad=0):(this.bad=0,this.good=0);let o=ya.indexOf(this.level);return this.bad>=2&&o>0?(this.failed.add(this.level),this.level=ya[o-1],this.bad=0,this.good=0,this.level):this.good>=6&&o<ya.length-1&&!this.failed.has(ya[o+1])?(this.level=ya[o+1],this.good=0,this.level):null}};function Rf(){try{let e=document.createElement("canvas").getContext("webgl2"),t=!!e;if(e){let n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}return t}catch{return!1}}var Vm=Array.from({length:9},(s,e)=>({id:"menu-"+e,seat:e}));function Wm(s,e={}){if(!s)throw new Error("VKWorld: kapsay\u0131c\u0131 yok");if(!Rf())throw new Error("VKWorld: WebGL2 desteklenmiyor");let t=e,n=Gm(),i=Hm(n),r=document.createElement("div");r.className="vkw-root",s.appendChild(r);let o;try{o=new Jr({antialias:!n,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch{throw r.remove(),new Error("VKWorld: WebGL ba\u011Flam\u0131 a\xE7\u0131lamad\u0131")}o.outputColorSpace=Ft,o.toneMapping=Js,o.toneMappingExposure=1,o.shadowMap.type=Ys;let a=o.domElement;a.setAttribute("aria-label","K\xF6y"),r.appendChild(a);let l=document.createElement("div");l.className="vkw-vignette",r.appendChild(l);let c=document.createElement("div");c.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s;mix-blend-mode:screen",r.appendChild(c);let u=document.createElement("div");u.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;background:#07050f",r.appendChild(u);function h(){u.style.transition="none",u.style.opacity="1",u.offsetWidth,u.style.transition="opacity .38s ease-out",u.style.opacity="0"}let f=new Us;f.fog=new Ro(2475,50,250);let d=new Yt(40,1,.3,900),m=new Gc(d),v="auto",x=new Zc(n?"medium":"high"),g=Ma[x.level],S={...i,sparks:70,fireflies:56,clouds:g.clouds,trees:i.trees,scatter:i.scatter},N=new Ws(16777215,4473924,1);f.add(N);let M=new $n(16777215,2);M.shadow.bias=-6e-4,M.shadow.normalBias=.03,f.add(M),f.add(M.target);let L=new Xs(16747050,20,17,1.5);L.position.set(0,1.4,0),f.add(L);let A=lm(f,S),p=hm(f,S),_=new Pi("glow",128),C=new Pi("pool",128),D=new Pi("blob",64,ui),z=new Pi("ring",48);for(let U of[C,D,z,_])f.add(U.mesh);let B=new Bc(160);f.add(B.normal.mesh),f.add(B.add.mesh);let b=bm(S);f.add(b.group);let y=wm(56);f.add(y.points);let E=null,T=new Map,R=new Map,F=new Set,O=new Map,V=0,Y=[],Z=null,oe=null,q=null,ee="",he=null,Pe=1,ue=!1,Ce=null,Xe=null,Ze=Em(f),gt=new $n(9417983,0);f.add(gt),f.add(gt.target);let It=new Map;function rt(U,K){let j=(It.get(U)||0)+1;It.set(U,j),(j===1||j===50)&&console.warn("[VKWorld] "+U+" hatas\u0131 (yakaland\u0131, devam ediliyor):",K)}let ne={rig:m,camera:d,chars:T,scene:f,time:0,get village(){return E},fx:B,obstacles:[],localMove:null,sfx(U,K){try{window.VKAudio&&window.VKAudio.sfx&&window.VKAudio.sfx(U,K)}catch{}},sfxThrottled(U,K){let j=performance.now();(ge[U]||0)+K*1e3>j||(ge[U]=j,ne.sfx(U))},sfxStep(){ne.sfxThrottled("step",.32)},reapply(){k&&J&&_e==="game"&&Ni(!1)},ticker:Y,assets:vs,get room(){return oe},getState(){return J},playerById(U){let K=J&&J.players.find(j=>j.id===U);return K?{id:K.id,look:K.look,name:K.name,role:K.role}:null},makeActor(U,K,j){let de="cine:"+ ++V,ve=new mi(ne,de,U,{ghost:j==="ghost"});return ve.cineKey=de,f.add(ve.root),O.set(de,{ch:ve,name:K||"",color:U.color|0}),K&&(ue=!0),ve},dropActor(U){O.delete(U.cineKey),U.dispose(),ue=!0},isDeadShown(U){let K=J&&J.players.find(j=>j.id===U);return!!(K&&J.room.phase!=="lobby"&&(!K.alive||K.left)&&!(J.room.phase==="hunter"&&J.room.hunterId===U))},openRoom(U){return Qe(U,"cine")},endCineRoom(){q==="cine"&&ut()},setTodOverride(U,K){Z=U,K&&U!=null&&(ke=U)},cineTint(){},moonOverride(U){he=U?new be(U):null},fogBoost(U){return Pe=U,()=>{Pe=1}},footDust(U,K){g.name!=="low"&&_e==="game"&&B.emit("dust",U,.05,K,Xe&&Xe.snow?"#e8eef5":null,2)},houseAnchors(U){let K=E&&E.house(U);return K?E.anchors(K):null},layoutR(){return E&&E.layout?E.layout.R:15},meId(){return J&&J.me?J.me.id:null},flash(U,K){if(!U){c.style.opacity="0";return}c.style.background=`radial-gradient(ellipse at 50% 50%, ${K||"#d7263d"}55, ${K||"#d7263d"}cc)`,c.style.opacity=String(U),clearTimeout(pe),pe=setTimeout(()=>{c.style.opacity="0"},380)},poofAt(U,K){B.emit("poof",U,.4,K,null,16),ne.sfxThrottled("poof",.2)},holdDeaths(U){F.clear();for(let K of U)F.add(K)},releaseDeaths(){F.size&&(F.clear(),ne.reapply())},markDead(U,K={}){F.delete(U);let j=T.get(U);j&&j.visible&&!j.claimed&&(K.quiet||ne.poofAt(j.pos.x,j.pos.z),j.setVisible(!1)),E&&E.setDead(U,!0,j?j.look.color:0,K.drop)},ensureChar(U){if(!k)return null;let K=T.get(U.id);return K?K.setLook(U.look):(K=new mi(ne,U.id,U.look),K.fresh=!0,T.set(U.id,K),f.add(K.root),G(K)),K},ensureGhost(U){if(!Cn("characters/ghost.glb"))return null;let K=R.get(U.id);return K||(K=new mi(ne,U.id,U.look,{ghost:!0}),K.fresh=!0,R.set(U.id,K),f.add(K.root)),K},removeGhost(U){let K=R.get(U);K&&(K.dispose(),R.delete(U))}},ge={},pe=0,Ue=Lm(r,{onTagTap(U){Qc(U,!0)},onPlaqueTap(U){Je.has(U)&&ao(U)},onRecenter(){m.recenter()}}),xe=Cm(ne);Im(xe,ne);let ie=Fm(ne),J=null,Me={},_e="menu",k=!1,it=!1,st="",Je=new Set,we=new Set,Rt=null,ke=18.3,qe=18.3,I=zm(),w={fog:1,tint:new be("#ffffff"),tintAmt:0,moon:new be("#eef2ff"),stars:1,weather:"none"},X=new be,ae=!0,te=0,ye=new H,me=1,se=1,le=1,Re={top:0,bottom:0,left:0,right:0};function G(U){U.model.traverse(K=>{K.isMesh&&(K.castShadow=g.charShadow)})}function fe(U,K=!0){g=Ma[U];let j=window.devicePixelRatio||1;le=Math.min(j,g.px),o.setPixelRatio(le),o.setSize(me,se,!1);let de=g.shadows>0;o.shadowMap.enabled!==de&&(o.shadowMap.enabled=de,f.traverse(ve=>{ve.material&&(Array.isArray(ve.material)?ve.material:[ve.material]).forEach(Se=>{Se.needsUpdate=!0})})),M.castShadow=de,de&&(M.shadow.mapSize.x!==g.shadowSize&&(M.shadow.mapSize.set(g.shadowSize,g.shadowSize),M.shadow.map&&(M.shadow.map.dispose(),M.shadow.map=null)),o.shadowMap.autoUpdate=g.shadows===2);for(let ve of T.values())G(ve);if(S.clouds=g.clouds,ae=!0,K&&t.onQuality)try{t.onQuality(U)}catch{}}function ce(){let U=r.getBoundingClientRect();me=Math.max(1,Math.round(U.width)),se=Math.max(1,Math.round(U.height)),o.setSize(me,se,!1),m.setSize(me,se),Ue.setSize(me,se),Ui(!0)}let Ie=null;window.ResizeObserver&&(Ie=new ResizeObserver(()=>ce()),Ie.observe(r));let Ee=()=>ce();window.addEventListener("resize",Ee),window.addEventListener("orientationchange",Ee),fe(x.level,!1),ce();let Ne=Qr.chars.length+Qr.village.length;nr(["village","chars"],(U,K)=>{if(!it&&t.onProgress)try{t.onProgress(U,K)}catch{}}).then(()=>{if(!it){if($e(),k=!0,J&&_e==="game"&&Ni(!0),t.onReady)try{t.onReady()}catch{}return nr(["extra"]).then(()=>{if(!it)return E.onExtraLoaded(),J&&Ni(!1),nr(["cine"])})}}).catch(U=>{if(console.error("[VKWorld] varl\u0131klar y\xFCklenemedi",U),t.onError)try{t.onError(U)}catch{}});function $e(){E=ym(f,S,null,p),ht(_e==="menu"||!J?null:J),y.place(8,40),Ui(!0)}function ht(U){let K,j=null;if(!U||_e==="menu")K=Vm;else{let Be=U.room.phase==="lobby";K=U.players.filter(dt=>!(Be&&dt.left)).map(dt=>{var pt;return{id:dt.id,seat:(pt=dt.seat)!=null?pt:0}}),j=U.me?U.me.id:null,K.length||(K=Vm)}let de=K.map(Be=>Be.id+"@"+Be.seat).join(",")+"|"+j;if(de===st)return!1;let ve=!!st&&U&&U.room.phase==="lobby"&&_e==="game"&&!st.startsWith("menu-");st=de;let Se=fm(K,j);E.setLayout(Se,ve),Te(Se),y.place(Se.Rp+1,Se.R+14),ae=!0,ve||ie.reset();for(let Be of T.values())ve||(Be.fresh=!0);return!0}function Te(U){let K=[{x:0,z:0,r:1.6,tag:"fire"}];for(let j of E.benchSlots){let de=Math.cos(j.a),ve=-Math.sin(j.a);for(let Se of j.small?[-.45,.45]:[-.85,0,.85])K.push({x:j.x+de*Se,z:j.z+ve*Se,r:.3,tag:"bench"})}for(let j of E.lampList())j.small||K.push({x:j.x,z:j.z,r:.35,tag:"lamp"});ne.obstacles=K}function Qe(U,K){if(oe||(oe=Am(ne)),!oe.ready)return null;let j=ne.playerById(U)||{id:U,look:{color:0,hat:0,skin:0},name:""};return oe.hide(),oe.show(j),q=K,ue=!0,h(),oe}function ut(){oe&&oe.hide();let U=q;q=null,ee="",U&&((U==="cine"||!xe.running)&&m.setOverride(null,!0),h()),ue=!0}function Fe(){if(!J||_e!=="game"||!k||xe.running)return null;let{room:U,me:K}=J;if(U.phase!=="night"||!K.alive)return null;let j=T.get(K.id);return j?j.inside&&j.inside!==K.id&&E.house(j.inside)?{mode:"visit",house:j.inside}:j.peeking&&E.house(j.peeking)?{mode:"window",house:j.peeking}:null:null}function Nt(U,K){let j=oe.L,de=Se=>oe.W(Se),ve=[j.bedside,j.bedside2,{x:-1.6,z:.9}][K%3];switch(U){case"vampir":return[{walk:[de(ve)],mode:"sneak"},{faceTo:de({x:j.sleeper.x,z:-1.4})},{pose:"loom"},{wait:2.2+Math.random()},{once:"attack-melee-right",opts:{timeScale:.45}},{wait:1.5}];case"doktor":return[{walk:[de(j.bedfoot)],mode:"walk"},{faceTo:de({x:j.sleeper.x,z:-1.6})},{pose:"hold"},{wait:3.5},{once:"interact-left",opts:{timeScale:.6}},{wait:2}];case"kahin":return[{walk:[de({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:de(j.bookcase)},{once:"pick-up",opts:{timeScale:.7}},{walk:[de({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:de({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.7}},{walk:[de({x:1.5,z:-.6})],mode:"sneak"},{faceTo:de({x:1.6,z:-1.5})},{once:"interact-left",opts:{timeScale:.7}}];case"cadi":return[{walk:[de(ve)],mode:"sneak"},{faceTo:de({x:j.sleeper.x,z:-1.3})},{pose:"hold"},{wait:1.8},{once:"interact-right",opts:{timeScale:.5}},{wait:1.8}];case"iftiraci":return[{walk:[de({x:-.3,z:-1.75})],mode:"sneak"},{faceTo:de({x:-.3,z:-2.8})},{pose:"peek"},{wait:1.2},{once:"pick-up",opts:{timeScale:.6}},{wait:1.6}];default:return[{walk:[de(j.bedfoot)],mode:"walk"},{faceTo:de(j.bed)},{wait:3}]}}let jt={doktor:["furniture","lantern",.55],cadi:["clues","potion",.75],iftiraci:["clues","key",.9]};function gi(U,K){let j=Qe(U.house,U.mode);if(!j)return!1;let de=J.me,ve=ne.playerById(de.id),Se=m.portrait;if(U.mode==="visit"){[{id:de.id,look:ve.look,name:ve.name,role:de.role},...K.map(pt=>{let _t=ne.playerById(pt);return _t?{id:pt,look:_t.look,name:_t.name,role:_t.role||"vampir"}:null}).filter(Boolean)].forEach((pt,_t)=>{let Qt=j.addActor("a"+_t,pt.look,pt.name,j.L.doorIn,-Math.PI/2);Qt.roomRole=pt.role,Qt.roomIndex=_t;let Ve=jt[pt.role];if(Ve){let lt=mn(Ve[0],Ve[1]);if(lt){let Ae=lt.clone();Ae.userData.holdScale=Ve[2]/2.8,Qt.hold(Ae,"right",[0,-.15,.06])}}});let dt=j.shot("inside",Se);m.setOverride({pos:dt.pos,look:dt.look,fov:dt.fov,k:60},!0)}else{j.addActor("gozcu",ve.look,"",j.L.winOut,Math.PI/2).setBase("peek",0);let dt=j.shot("window",Se);m.setOverride({pos:dt.pos,look:dt.look,fov:dt.fov,k:60},!0)}return!0}function Sa(){if(!k||q==="cine")return;let U=Fe();if(U){let K=so(J),j=[];for(let[ve,Se]of K)Se===U.house&&ve!==J.me.id&&j.push(ve);let de=U.mode+":"+U.house+":"+j.join(",")+":"+(m.portrait?"p":"l");if(de!==ee&&gi(U,j)&&(ee=de),oe&&U.mode==="visit")for(let ve of oe.actors.values())ve.ch.busy||ve.ch.run(Nt(ve.ch.roomRole,ve.ch.roomIndex))}else(q==="visit"||q==="window")&&ut()}function Li(U){U!==Ce&&(Ce=U,Xe=Pm(U),w.fog=Xe.fog,w.tint.set(Xe.tint),w.tintAmt=Xe.tintAmt,w.moon.set(Xe.moon),w.stars=Xe.stars,w.weather=Xe.weather,w.nightTint=!!Xe.nightTint,Ze.set(Xe.weather),E&&E.setTheme(Xe))}function jc(U,K){if(!it&&(J=U,Me=K||{},!!k))try{Ni(!1)}catch(j){rt("durum",j)}}function Ni(U){if(!J||_e!=="game")return;let K=ht(J),{room:j,players:de}=J;Li(j.scenario&&j.phase!=="lobby"?j.scenario.id:null);let ve=j.phase!=="lobby",Se=new Set;for(let Be of de)Se.add(Be.id),E.setOwner(Be.id,Be.look?Be.look.color:-1,Be.name),E.setDead(Be.id,ve&&(!Be.alive||Be.left)&&!F.has(Be.id),Be.look?Be.look.color:0);for(let[Be,dt]of T)Se.has(Be)||(dt.dispose(),T.delete(Be),ie.forget(Be));for(let Be of[...R.keys()])Se.has(Be)||ne.removeGhost(Be);if(j.phase==="lobby")for(let Be of de)E.tombOf(Be.id)&&E.setDead(Be.id,!1);ie.apply(J,U||K&&j.phase!=="lobby"),Je=new Set(de.filter(Be=>Um(J,Be,Me.witchMode)).map(Be=>Be.id)),we=new Set(so(J).keys()),bs(),Ui(!1)}function bs(){if(!J)return;let{room:U,me:K,players:j,day:de}=J,ve=U.phase,Se=rr(J),Be=Af(J,Me.witchMode),dt=new Map(j.map(Ve=>[Ve.id,Ve])),pt=new Set,_t=new Set,Qt=j.filter(Ve=>!Ve.left).length;Ue.setCompact(Qt>7&&me<700||Qt>12);for(let Ve of j){let lt=T.get(Ve.id),Ae=R.get(Ve.id);if(lt||Ae){pt.add(Ve.id);let mt=null,qt=de&&de.votes&&de.votes[Ve.id];qt&&qt.length&&(mt={total:qt.reduce((zi,lo)=>zi+(lo.w||1),0),dots:qt.map(zi=>({color:dt.get(zi.id)?gn[dt.get(zi.id).look.color]:"#999",w:zi.w||1}))});let yn=(Ve.isHost&&ve==="lobby"?"\u{1F451}":"")+(!Ve.connected&&!Ve.left?"\u{1F4F4}":"")+(de&&de.sleeping&&de.sleeping.includes(Ve.id)?"\u{1F4A4}":"")+(de&&de.voted&&de.voted.includes(Ve.id)&&!(de.sleeping||[]).includes(Ve.id)?"\u2714":""),Yn=Se!=="night"&&Je.has(Ve.id);Ue.setTag(Ve.id,{name:Ve.name,job:Ve.job&&Ve.job.label?Ve.job.label:"",color:Ve.look.color,badges:yn,me:Ve.id===K.id,off:!Ve.connected,dead:!Ve.alive,sel:Yn,picked:_a(J,Ve)&&Se!=="night",hover:Rt===Ve.id&&Yn,selColor:Be,mark:Se!=="night"?qc(J,Ve,Me.witchMode):ve==="night"?null:qc(J,Ve,Me.witchMode),votes:mt})}if(E.house(Ve.id)){_t.add(Ve.id);let mt=Se==="night"&&Je.has(Ve.id),qt=ve==="lobby"||ve==="night"&&Se==="night"||ve==="reveal";Ue.setPlaque(Ve.id,{name:Ve.name,color:Ve.look.color,sel:mt,picked:ve==="night"&&_a(J,Ve),dim:!qt,hidden:!qt,dead:ve!=="lobby"&&(!Ve.alive||Ve.left),selColor:Be,mark:ve==="night"?qc(J,Ve,Me.witchMode):null})}}for(let[Ve,lt]of O)lt.name&&(pt.add(Ve),Ue.setTag(Ve,{name:lt.name,job:"",color:lt.color,badges:"",me:!1}));if(ne.room&&q){for(let[Ve,lt]of ne.room.actors)if(lt.name){let Ae="room:"+Ve;pt.add(Ae),Ue.setTag(Ae,{name:lt.name,job:"",color:lt.color,badges:"",me:!1})}}Ue.sync(pt,_t),ue=!1}let cn=[];for(let U=0;U<64;U++)cn.push(new H);let Di="";function Ui(U){if(!E||!E.layout){m.setShot({target:new H(0,1,0),az:.4,el:.35,dist:45,fov:42,snap:U});return}let K=E.layout,j=m.portrait,de=J&&_e==="game"?J.room.phase:"menu",ve=J&&_e==="game"?rr(J):null,Se;de==="menu"?Se="menu":de==="night"?Se=ve==="night"?"overview":"sleep":de==="reveal"?Se="gather":Se="plaza";let Be=Se!==Di;Di=Se,Be&&m.recenter();let dt=m.shot;if(Se==="menu"){let pt=K.Rp+(j?3.5:2.5);m.setShot({kind:Se,target:new H(0,j?3.4:3,0),az:dt.az,el:j?.2:.16,dist:pt,fov:j?64:50,speed:1.2}),dt.dynamic=!1}else if(Se==="overview"||Se==="sleep"){let pt=0,_t=K.R+3.6;for(let Ve=0;Ve<24;Ve++){let lt=Ve/24*We;cn[pt++].set(Math.sin(lt)*_t,0,Math.cos(lt)*_t),cn[pt++].set(Math.sin(lt)*K.R,4.5,Math.cos(lt)*K.R)}let Qt=Se==="overview"?j?1.2:.98:j?.95:.62;m.setShot({kind:Se,target:new H(0,0,Se==="overview"?0:-K.R*.08),az:Se==="sleep"?.25:0,el:Qt,fov:40,points:cn.slice(0,pt),margin:Se==="overview"?.94:1.04,snap:U,speed:1.6}),dt.dynamic=!1}else{let pt=cn,_t=0,Qt=Se==="gather"?5.6:3.2;for(let lt=0;lt<8;lt++){let Ae=lt/8*We;pt[_t++].set(Math.sin(Ae)*Qt,0,Math.cos(Ae)*Qt)}for(let lt of T.values()){if(!lt.visible||_t>60)continue;let Ae=lt.path&&lt.path.length?lt.path[lt.path.length-1]:lt.pos;Math.hypot(Ae.x,Ae.z)>K.Rp+1.5||(pt[_t++].set(Ae.x,0,Ae.z),pt[_t++].set(Ae.x,2.4,Ae.z))}for(let lt of R.values())_t<62&&(pt[_t++].set(lt.pos.x,2.6,lt.pos.z),pt[_t++].set(lt.pos.x,0,lt.pos.z));let Ve=Se==="gather"?j?.6:.5:j?.58:.54;m.setShot({kind:Se,target:Lf(pt,_t),az:0,el:Ve,fov:j?44:38,points:pt.slice(0,_t),margin:j?.92:.8,minDist:8,snap:U,speed:1.8}),dt.dynamic=!0,dt.points=pt.slice(0,_t)}}let ro=new Ko,ws=new et,zn=new H,Fi=new H,ss=new Hn(new H(0,1,0),0);function ba(U,K){return ws.set(U/me*2-1,-(K/se)*2+1),ro.setFromCamera(ws,d),ro.ray}function oo(U,K,j,de=34){let ve=null,Se=1/0;for(let[Be,dt]of T){if(!dt.visible||!j(Be)||(zn.set(dt.pos.x,.1,dt.pos.z).project(d),Fi.set(dt.pos.x,dt.headY,dt.pos.z).project(d),zn.z>1))continue;let pt=(zn.x*.5+.5)*me,_t=(-zn.y*.5+.5)*se,Qt=(Fi.x*.5+.5)*me,Ve=(-Fi.y*.5+.5)*se,lt=Qt-pt,Ae=Ve-_t,mt=lt*lt+Ae*Ae||1,qt=ct(((U-pt)*lt+(K-_t)*Ae)/mt,0,1),yn=Math.hypot(U-(pt+lt*qt),K-(_t+Ae*qt)),Yn=Math.max(de,Math.sqrt(mt)*.55);yn<Yn&&yn<Se&&(Se=yn,ve=Be)}return ve}function wa(U,K,j){let de=E.layout,ve=null,Se=1/0;for(let Ae of E.houses.values()){if(Ae.removing||j&&!Je.has(Ae.id)||(zn.set(Ae.cx,1.6,Ae.cz).project(d),zn.z>1))continue;let mt=(zn.x*.5+.5)*me,qt=(-zn.y*.5+.5)*se;Fi.set(Ae.cx+Math.cos(Ae.crot)*Ae.info.hx,1.6,Ae.cz-Math.sin(Ae.crot)*Ae.info.hx).project(d);let yn=Math.max(26,Math.hypot((Fi.x*.5+.5)*me-mt,(-Fi.y*.5+.5)*se-qt)*1.25),Yn=Math.hypot(U-mt,K-qt);Yn<yn&&Yn<Se&&(Se=Yn,ve=Ae)}if(ve)return ve.id;let Be=ba(U,K),dt=E.pickHouse(Be);if(dt&&(!j||Je.has(dt.id)))return dt.id;let pt=Be.intersectPlane(ss,zn);if(!pt)return null;let _t=Math.hypot(pt.x,pt.z);if(_t<de.Rp*.75||_t>de.R+8)return null;let Qt=Math.atan2(pt.x,pt.z),Ve=null,lt=1/0;for(let Ae of E.houses.values()){if(j&&!Je.has(Ae.id))continue;let mt=Math.abs(((Qt-Ae.angle+Math.PI)%We+We)%We-Math.PI);mt<lt&&(lt=mt,Ve=Ae)}return Ve&&lt<de.step*.5?Ve.id:null}function Ta(U,K){if(!J||_e!=="game")return null;let j=rr(J);if(j==="night"){let de=wa(U,K,!0);return de&&Je.has(de)?de:null}return j==="vote"||j==="shoot"?oo(U,K,de=>Je.has(de)):null}function ao(U){if(t.onPick)try{t.onPick(U)}catch{}}function Qc(U,K){if(!J)return;if(Je.has(U)){ao(U);return}let j=J.room.phase;U===J.me.id&&(j==="lobby"||j==="ended")&&t.onSelf&&t.onSelf()}function Ea(U,K){if(!J||_e!=="game"||!k)return;let j=Ta(U,K);if(j){ao(j),Ue.ripple(U,K);return}let de=J.room.phase,ve=J.me;if((de==="lobby"||de==="ended")&&oo(U,K,Se=>Se===ve.id,26)){t.onSelf&&t.onSelf();return}if(de==="lobby"||de==="day"||de==="ended"){let Se=ba(U,K).intersectPlane(ss,zn);if(!Se)return;let Be=E.layout,dt=Math.hypot(Se.x,Se.z);if(dt>Be.R+4)return;let pt=Math.atan2(Se.x,Se.z);dt=ct(dt,Be.Rp*.2,Be.Rp*.96);let _t=Math.sin(pt)*dt,Qt=Math.cos(pt)*dt,Ve=dm(Be,_t,Qt);if(ne.localMove={x:_t,z:Qt,until:performance.now()+1500},Ue.ripple(U,K),t.onMove)try{t.onMove(Ve.x,Ve.y)}catch{}Ni(!1)}}let P=new Map,W=!1,re=0,$=0,Q=0,Le=0;function He(U){let K=r.getBoundingClientRect();return{x:U.clientX-K.left,y:U.clientY-K.top}}function De(U){if(U.target!==a)return;a.setPointerCapture&&a.setPointerCapture(U.pointerId);let K=He(U);if(P.set(U.pointerId,K),P.size===1&&(W=!1,re=performance.now(),$=K.x,Q=K.y),P.size===2){let[j,de]=[...P.values()];Le=Math.hypot(j.x-de.x,j.y-de.y),W=!0}}function Oe(U){let K=He(U);if(!P.has(U.pointerId)){U.pointerType==="mouse"&&Ye(K.x,K.y);return}let j=P.get(U.pointerId);if(P.set(U.pointerId,K),P.size===1)!W&&Math.hypot(K.x-$,K.y-Q)>9&&(W=!0),W&&_e==="game"&&m.drag(K.x-j.x,K.y-j.y);else if(P.size===2){let[de,ve]=[...P.values()],Se=Math.hypot(de.x-ve.x,de.y-ve.y);Le>0&&Se>0&&_e==="game"&&m.zoom(Le/Se),Le=Se}}function Ke(U){if(!P.has(U.pointerId))return;let K=He(U);P.delete(U.pointerId),P.size===0&&!W&&performance.now()-re<650&&Ea(K.x,K.y),P.size<2&&(Le=0)}function ft(U){P.delete(U.pointerId)}function wt(U){_e==="game"&&(U.preventDefault(),m.zoom(Math.exp(ct(U.deltaY,-120,120)*.0015)))}function Ye(U,K){let j=Ta(U,K);j!==Rt&&(Rt=j,a.style.cursor=j?"pointer":"",bs())}a.addEventListener("pointerdown",De),a.addEventListener("pointermove",Oe),a.addEventListener("pointerup",Ke),a.addEventListener("pointercancel",ft),a.addEventListener("pointerleave",U=>{U.pointerType==="mouse"&&Rt&&(Rt=null,bs())}),a.addEventListener("wheel",wt,{passive:!1});let Tt=U=>U.preventDefault();a.addEventListener("contextmenu",Tt);let Vt=document.hidden,Dt=!1,Ut=()=>{Vt=document.hidden,Vt||(Pn=performance.now(),x.reset(),vn())};document.addEventListener("visibilitychange",Ut),a.addEventListener("webglcontextlost",U=>{U.preventDefault(),Dt=!0}),a.addEventListener("webglcontextrestored",()=>{Dt=!1,ae=!0,Pn=performance.now(),vn()});function hn(){if(Z!=null)return Z;if(_e!=="game"||!J)return 18.35;let{room:U,day:K}=J,j=Date.now()+(J.serverNow,0),de=U.deadline?Math.max(0,U.deadline-(j+tn))/1e3:null;switch(U.phase){case"lobby":return 15.2;case"reveal":return 20.2;case"night":{let ve=U.settings&&U.settings.nightSec||30;return(21.2+(de==null?.3:ct(1-de/ve,0,1))*7.6)%24}case"day":{let ve=U.settings&&U.settings.daySec||120,Se;return K&&K.shortened?(Et==null&&(Et=Ge,xi=Math.max(1,de||10)),Se=Et+(1-Et)*ct(1-(de||0)/xi,0,1)):(Et=null,Se=de==null?.2:ct(1-de/ve,0,1)),Ge=Se,7.4+Se*11.6}case"hunter":return ke>19.5||ke<6?7.6:ke;case"ended":return U.winner==="vampir"?23:U.winner==="soytari"?18.5:9.5;default:return 17}}let Ge=0,un=-1,Et=null,xi=10,tn=0,Oi=0,Pn=performance.now(),_i=0,Mt=0,Lt={fps:0,ms:0,calls:0,tris:0,frames:0};function vn(){!Oi&&!it&&(Oi=requestAnimationFrame(Ht))}function Ht(U){if(Oi=0,it||Vt||Dt||(vn(),me<2||se<2)||g.fps<=30&&U-_i<1e3/30-3)return;let K=ct((U-Pn)/1e3,0,.1),j=U-Pn;Pn=U,_i=U;let de=performance.now();try{Ym(K)}catch(Be){rt("kare",Be)}let ve=performance.now();try{o.render(f,d)}catch(Be){rt("\xE7izim",Be)}let Se=performance.now();if(Lt.stepMs=(Lt.stepMs||0)*.9+(ve-de)*.1,Lt.renderMs=(Lt.renderMs||0)*.9+(Se-ve)*.1,Lt.frames++,Mt+=j,Lt.cpu=Se-de,Mt>500&&(Lt.fps=Math.round(Lt.frames*1e3/Mt),Lt.ms=+(Mt/Lt.frames).toFixed(1),Lt.frames=0,Mt=0),Lt.calls=o.info.render.calls,Lt.tris=o.info.render.triangles,v==="auto"&&k){let Be=x.sample(j,U);Be&&Be!==g.name&&fe(Be)}}let nn=new be,ni=new be(0,0,0),or=new Map;function ar(U){return or.has(U)||or.set(U,new be(U)),or.get(U)}function Ym(U){ne.time+=U;let K=ne.time;qe=hn(),ke=km(ke,qe,U,_e==="menu"?.6:1.3),Bm(ke,I);let j=J&&_e==="game"&&J.room.phase==="ended"&&J.room.winner==="vampir";X.copy(he||w.moon),j&&(X.set("#ff6a6a"),I.sun.lerp(ar("#ff5a6a"),.35));let de=w.tintAmt*(w.nightTint?I.night:1);de>0&&(I.top.lerp(w.tint,de),I.hor.lerp(w.tint,de*.8),I.sky.lerp(w.tint,de*.5),I.gnd.lerp(w.tint,de*.3)),I.night>.3&&I.sun.lerp(X,(he||w.nightTint?.55:.3)*I.night),I.fogNear*=w.fog*Pe,I.fogFar*=w.fog*Pe,I.stars*=w.stars,f.fog.color.copy(I.hor);let ve=Math.max(0,m.cur.dist*m.user.zoom-28)*(1-.35*I.night);f.fog.near=I.fogNear+ve*.9,f.fog.far=I.fogFar+ve*1.1,gt.intensity=.9*I.night*(q?.4:1),gt.color.copy(X),gt.position.set(-d.position.x*.6,60,-d.position.z*.6-40),N.color.copy(I.sky),N.groundColor.copy(I.gnd),N.intensity=I.hi,M.color.copy(I.sun),M.intensity=I.si;let Se=E&&E.layout,Be=Se?Se.R+14:40;if(M.position.copy(I.lightDir).multiplyScalar(120),M.target.position.set(0,0,0),M.castShadow){let Ae=M.shadow.camera;Ae.right!==Be&&(Ae.left=-Be,Ae.right=Be,Ae.top=Be,Ae.bottom=-Be,Ae.near=20,Ae.far=260,Ae.updateProjectionMatrix(),ae=!0),ye.angleTo(I.lightDir)>.008&&(ye.copy(I.lightDir),ae=!0)}let dt=.82+.1*Math.sin(K*13.1)+.06*Math.sin(K*23.7+1)+.05*Math.sin(K*5.3);if(q&&oe){let Ae=q==="window"||xe.current&&xe.current.kind==="watch";if(Ae){let mt=oe.W({x:-2.4,y:2.3,z:-1.2});L.position.copy(mt)}else{let mt=oe.lanternWorld();L.position.set(mt.x,mt.y+.9,mt.z+.8)}L.intensity=(Ae?13:9+5*I.night)*dt,L.distance=12}else L.intensity=(2+17*I.night*I.night)*I.fire*dt,L.position.set(Math.sin(K*7)*.08,1.4,0),L.distance=17;b.update(K,le,.75+.25*I.fire),A.update(I,K,d,le,X),y.update(K,le,ct(I.night*1.2-.2,0,1)),l.style.opacity=String(.55+I.night*.45+(q==="window"?.4:0));for(let Ae=Y.length-1;Ae>=0;Ae--){let mt=!0;try{mt=Y[Ae](U,K)}catch(qt){rt("ticker",qt)}mt&&Y.splice(Ae,1)}try{Sa()}catch(Ae){rt("i\xE7 mek\xE2n",Ae)}if(oe&&oe.visible)try{oe.update(U,K)}catch(Ae){rt("oda",Ae)}for(let Ae of O.values())try{Ae.ch.update(U,K)}catch(mt){rt("kopya",mt)}ue&&J&&_e==="game"&&bs(),Ze.update(U,K,le,m.cur.target,_e==="game"||_e==="menu"?g.weather:0,Xe&&Xe.fogTint?ar(Xe.fogTint):null,I.night),E&&(E.update(U,K,I)&&(ae=!0),E.version!==un&&E.layout&&(un=E.version,Te(E.layout)),J&&_e==="game"&&ie.tick(J));let pt=ne.obstacles,_t=[];for(let Ae of T.values()){try{Ae.update(U,K)}catch(mt){rt("karakter",mt),If(Ae)}Ae.visible&&!Ae.claimed&&_t.push(Ae)}for(let Ae of R.values())try{Ae.update(U,K)}catch(mt){rt("hayalet",mt),If(Ae)}for(let Ae=0;Ae<_t.length;Ae++){let mt=_t[Ae];for(let qt=Ae+1;qt<_t.length;qt++){let yn=_t[qt],Yn=yn.pos.x-mt.pos.x,zi=yn.pos.z-mt.pos.z,lo=Yn*Yn+zi*zi;if(lo<.72*.72&&lo>1e-6){let th=Math.sqrt(lo),Aa=(.72-th)*.5,Nf=Yn/th,Df=zi/th,Ra=mt.speed>yn.speed?.75:.25;mt.pos.x-=Nf*Aa*Ra,mt.pos.z-=Df*Aa*Ra,yn.pos.x+=Nf*Aa*(1-Ra),yn.pos.z+=Df*Aa*(1-Ra)}}mt.peeking||Tf(mt.pos,pt,null)}_.begin(),C.begin(),D.begin(),z.begin(),_.add(0,1,0,3.4,ar("#ff8a2a"),.55*I.fire*dt),C.add(0,.04,0,13+3*I.night,ar("#ff7a1a"),(.18+.3*I.night)*I.fire*dt),E&&E.emitGlows(I,K,_,C);let Qt=g.blob?.55:.32,Ve=J?ar(Af(J,Me.witchMode)):null,lt=J&&_e==="game"?rr(J):null;for(let Ae of _t)if(D.add(Ae.pos.x,.025,Ae.pos.z,1.05,ni,Qt),lt&&lt!=="night"&&Je.has(Ae.id)){let mt=J&&_a(J,{id:Ae.id});z.add(Ae.pos.x,.05,Ae.pos.z,mt?1.9:1.5,Ve,mt?1:Rt===Ae.id?.95:.45,Ae.seed*6)}for(let Ae of R.values())_.add(Ae.pos.x,1.2,Ae.pos.z,2.2,ar(gn[Ae.look.color]),.22);if(lt==="night"&&E)for(let Ae of Je){let mt=E.house(Ae);if(!mt)continue;let qt=E.anchors(mt),yn=_a(J,{id:Ae});z.add(qt.approach.x,.05,qt.approach.z,yn?3.4:2.6,Ve,yn?1:Rt===Ae?.95:.5,mt.seat)}B.update(U,K),_.end(K),C.end(K),D.end(K),z.end(K),_e==="menu"&&(m.shot.az+=U*.045),(Di==="plaza"||Di==="gather")&&Km(),m.update(U,K),Ue.setRecenter(_e==="game"&&m.offset,Re),te-=U,M.castShadow&&g.shadows===1&&ae&&te<=0&&(o.shadowMap.needsUpdate=!0,ae=!1,te=.2),_e==="game"&&J&&Ue.project(d,Zm,$m,Jm)}function If(U){try{U.once=null;let K=U.look;U.lookKey=null,U.setLook(K),G(U)}catch{U.setVisible(!1)}}let Pf=new H;function Lf(U,K){let j=0,de=0,ve=0;for(let Se=8;Se<K;Se++)j+=U[Se].x,de+=U[Se].z,ve++;return ve?Pf.set(j/ve*.6,.9,de/ve*.6+.2):Pf.set(0,.9,.2)}let eh=0;function Km(){if(eh-=1/60,eh>0)return;eh=.3;let U=E&&E.layout;if(!U||!m.shot.points)return;let j=0,de=Di==="gather"?5.6:3.2,ve=[];for(let Se=0;Se<8;Se++){let Be=Se/8*We;ve.push(cn[j++].set(Math.sin(Be)*de,0,Math.cos(Be)*de))}for(let Se of T.values()){if(!Se.visible||j>60)continue;let Be=Se.path&&Se.path.length?Se.path[Se.path.length-1]:Se.pos;Math.hypot(Be.x,Be.z)>U.Rp+1.5||(ve.push(cn[j++].set(Be.x,0,Be.z)),ve.push(cn[j++].set(Be.x,2.4,Be.z)))}for(let Se of R.values())j<62&&(ve.push(cn[j++].set(Se.pos.x,2.6,Se.pos.z)),ve.push(cn[j++].set(Se.pos.x,0,Se.pos.z)));m.shot.points=ve,m.shot.target.copy(Lf(ve,ve.length))}function Zm(U,K){if(U.startsWith("room:")){let ve=oe&&oe.actors.get(U.slice(5));return!ve||!ve.ch.visible?!1:(K.set(ve.ch.pos.x,ve.ch.pos.y+ve.ch.headY+.15,ve.ch.pos.z),!0)}if(U.startsWith("cine:")){let ve=O.get(U);return!ve||!ve.ch.visible?!1:(K.set(ve.ch.pos.x,ve.ch.root.position.y+ve.ch.headY+.15,ve.ch.pos.z),!0)}let j=T.get(U);if(j&&j.visible)return K.set(j.pos.x,j.pos.y+j.headY+.15,j.pos.z),!0;let de=R.get(U);return de?(K.set(de.pos.x,de.headY+.5+de.model.position.y,de.pos.z),!0):!1}function Jm(U){let K=U.startsWith("room:")||U.startsWith("cine:");if(q)return K;if(K)return!0;let j=T.get(U);return R.has(U)?!0:!(!j||!j.visible||J&&J.room.phase==="night"&&U!==J.me.id&&!we.has(U))}function $m(U,K){if(q)return!1;let j=E&&E.house(U);if(!j||j.scale<.6)return!1;let de=E.layout,ve=0;de&&de.n>9&&me<700&&(ve=(j.seat%2?1:-1)*2.2);let Se=Math.hypot(j.cx,j.cz)||1;return K.set(j.cx+j.cx/Se*ve,j.info.height*.9,j.cz+j.cz/Se*ve),!0}function jm(U){if(!(U!=="menu"&&U!=="game")&&U!==_e&&(_e=U,st="",r.dataset.view=U,!!k)){if(U==="menu"){ut(),Li(null),Ue.clear();for(let K of T.values())K.dispose();T.clear();for(let K of R.values())K.dispose();R.clear(),ie.reset(),xe.reset(),ht(null);for(let K of[...E.houses.keys()])E.setDead(K,!1);for(let K of E.houses.values())K.litTarget=1,K.dead=!1}else ht(J),J&&Ni(!0);Ui(!0),m.snapNext=!1}}function Qm(){xe.reset(),ut(),Li(null),Ue.clear();for(let U of T.values())U.dispose();T.clear();for(let U of R.values())U.dispose();if(R.clear(),ie.reset(),J=null,st="",Ge=0,k){if(E)for(let U of[...E.houses.keys()])E.setDead(U,!1);ht(null)}m.recenter(),Ui(!0)}function eg(U){if(U==="auto"){v="auto",x.failed.clear(),x.reset();return}Ma[U]&&(v=U,x.level=U,fe(U))}function tg(){if(!it){it=!0,xe.dispose(),cancelAnimationFrame(Oi),document.removeEventListener("visibilitychange",Ut),window.removeEventListener("resize",Ee),window.removeEventListener("orientationchange",Ee),Ie&&Ie.disconnect();for(let U of T.values())U.dispose();for(let U of R.values())U.dispose();T.clear(),R.clear(),E&&E.dispose(),A.dispose(),p.dispose(),b.dispose(),y.dispose(),B.dispose(),Ze.dispose(),oe&&oe.dispose();for(let U of O.values())U.ch.dispose();O.clear(),Y.length=0;for(let U of[_,C,D,z])U.dispose();Ue.dispose(),M.shadow.map&&M.shadow.map.dispose(),o.dispose(),o.forceContextLoss(),ff(),r.remove(),clearTimeout(pe)}}vn();let lr={update:jc,announce(U){return it?Promise.resolve():!k||_e!=="game"?(xe.skip(),Promise.resolve()):(U&&U.kind==="start"&&U.scenario&&Li(U.scenario.id),xe.announce(U))},skip(){xe.skip()},bubble(U,K,j){if(!K)return;Ue.bubble(U,String(K),j);let de=T.get(U);if(de&&de.visible&&!de.busy&&!de.once&&de.base==="idle"&&de.playOnce(Math.random()<.5?"interact-right":"interact-left",{timeScale:.8}),de&&de.visible)for(let ve of T.values())ve!==de&&ve.visible&&Math.hypot(ve.pos.x-de.pos.x,ve.pos.z-de.pos.z)<10&&ve.gaze(de.pos,3.5,ne.time)},setView:jm,setQuality:eg,getQuality(){return v==="auto"?"auto":g.name},getTier(){return g.name},resize:ce,reset:Qm,dispose:tg,setInsets(U){Re={top:U.top||0,bottom:U.bottom||0,left:U.left||0,right:U.right||0},m.setInsets(Re),Ue.setInsets(Re),Ui(!1)},recenter(){m.recenter()},setMood(U={}){U.fog!=null&&(w.fog=ct(+U.fog,.3,2)),U.tint!=null&&w.tint.set(U.tint),U.tintAmt!=null&&(w.tintAmt=ct(+U.tintAmt,0,1)),U.moon!=null&&w.moon.set(U.moon),U.stars!=null&&(w.stars=ct(+U.stars,0,1)),U.weather!=null&&(w.weather=U.weather)},director:xe,stats(){return{...Lt,tier:g.name,mode:v,px:le,hour:+ke.toFixed(2),ready:k}},setScenario(U){Li(U)},_debug:{world:ne,scene:f,renderer:o,camera:d,rig:m,get village(){return E},get room(){return oe},get roomMode(){return q},setHour(U){ke=U}}},ng=lr.update;lr.update=(U,K)=>{U&&U.serverNow&&(tn=U.serverNow-Date.now()),ng(U,K)};for(let U of["announce","bubble","setView","setQuality","resize","reset","setInsets","recenter","setMood","skip","setScenario"]){let K=lr[U];lr[U]=function(...j){try{return K.apply(lr,j)}catch(de){return rt("api."+U,de),U==="announce"?Promise.resolve():void 0}}}return lr}var Ss=null,Jc=new Set,$c=0,Cf=0;function nS(){if(Ss)return Ss;let s=new Jr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return s.outputColorSpace=Ft,s.toneMapping=Js,s.setClearColor(0,0),Ss={renderer:s,users:0},Ss}function Xm(s){if($c=0,!Jc.size||($c=requestAnimationFrame(Xm),document.hidden)||s-Cf<1e3/24)return;let e=Math.min(.1,(s-Cf)/1e3||.04);Cf=s;for(let t of Jc)t.draw(e)}function qm(s,e,t={}){if(!s)throw new Error("VKWorld.preview: \xF6\u011Fe yok");let n=document.createElement("canvas");n.className="vkw-preview",n.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",s.appendChild(n);let i=n.getContext("2d"),r=nS();r.users++;let o=new Us,a=new Yt(30,1,.1,50);a.position.set(0,1.75,7.8),a.lookAt(0,1.22,0);let l=new Ws("#dfe8ff","#5a4a40",1.3);o.add(l);let c=new $n("#fff2dc",2.6);c.position.set(1.8,3.5,5);let u=new $n("#ffd7a8",.8);u.position.set(-3,1.5,3.5),o.add(u),o.add(c);let h=new $n("#8fb4ff",1.6);h.position.set(-3,2.5,-3),o.add(h);let f=new xt(new ks(.85,40),new dn({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.005,o.add(f);let d=null,m={...e},v=!1,x=t.yaw!=null?t.yaw:.18,g=0,S=t.yaw!=null?t.yaw:0,N=!1,M=0,L=0,A=t.turntable!==!1,p={sfxStep:null,sfx(){}};function _(){v||!Nc("chars")||(d?d.setLook(m):(d=new mi(p,"preview",m),o.add(d.root),d.idleTimer=2))}Nc("chars")?_():nr(["chars"]).then(_).catch(()=>{});let C=b=>{N=!0,M=b.clientX,L=0,n.setPointerCapture&&n.setPointerCapture(b.pointerId)},D=b=>{if(!N)return;let y=b.clientX-M;M=b.clientX,x+=y*.012,L=y*.012*24},z=()=>{N=!1};n.addEventListener("pointerdown",C),n.addEventListener("pointermove",D),n.addEventListener("pointerup",z),n.addEventListener("pointercancel",z);let B={draw(b){if(v||!d)return;let y=s.clientWidth,E=s.clientHeight;if(y<4||E<4||!n.isConnected)return;let T=Math.min(window.devicePixelRatio||1,2),R=Math.round(y*T),F=Math.round(E*T);(n.width!==R||n.height!==F)&&(n.width=R,n.height=F);let O=r.renderer,V=O.getSize(new et);(V.x<R||V.y<F)&&O.setSize(Math.max(V.x,R),Math.max(V.y,F),!1);let Y=O.getSize(new et);if(O.setViewport(0,Y.y-F,R,F),O.setScissor(0,Y.y-F,R,F),O.setScissorTest(!0),a.aspect=y/E,a.position.z=a.aspect<.8?7.8/Math.max(.55,a.aspect/.8):7.8,a.updateProjectionMatrix(),!N){g+=b,x+=L*b,L*=Math.exp(-3*b);let Z=x-S;Z=Math.atan2(Math.sin(Z),Math.cos(Z));let oe=A?Math.sin(g*.7)*.42:0;Math.abs(L)<.4&&(x=S+Z+(oe-Z)*Math.min(1,b*1.6))}d.yaw=x,d.update(b,performance.now()/1e3),O.clear(),O.render(o,a),i.clearRect(0,0,R,F),i.drawImage(O.domElement,0,Y.y-F,R,F,0,0,R,F)}};return Jc.add(B),$c||($c=requestAnimationFrame(Xm)),{setLook(b){m={...m,...b},_()},dispose(){v||(v=!0,Jc.delete(B),d&&d.dispose(),f.geometry.dispose(),f.material.dispose(),n.remove(),r.users--,r.users<=0&&Ss&&(Ss.renderer.dispose(),Ss.renderer.forceContextLoss(),Ss=null))}}}try{let s=document.currentScript&&document.currentScript.src;s&&Lc(new URL("../assets/models/",s).href)}catch{}var iS="2.0.0-faz1";function sS(s){Lc(s)}return ag(rS);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
