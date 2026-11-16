var qW="186",NJ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},GJ={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FW=0,NZ=1,DW=2;var x6=1,EW=2,U6=3,N6=0,s9=1,k8=2,P8=0,g6=1,GZ=2,qZ=3,FZ=4,v7=5;var G6=100,OW=101,RW=102,MW=103,b7=104,LW=200,IW=201,VW=202,BW=203,CW=204,AW=205,zW=206,kW=207,PW=208,_W=209,TW=210,wW=211,SW=212,jW=213,vW=214,bW=0,yW=1,fW=2,DZ=3,hW=4,xW=5,gW=6,pW=7,mW=0,dW=1,uW=2,R8=0,EZ=1,OZ=2,RZ=3,MZ=4,LZ=5,IZ=6,VZ=7;var q6=301,CJ=302,y7=303,f7=304,p6=306,lW=1000,h7=1001,cW=1002,qJ=1003,nW=1004;var m6=1005;var i9=1006,x7=1007;var AJ=1008;var M8=1009,sW=1010,iW=1011,d6=1012,BZ=1013,FJ=1014,i8=1015,_8=1016,CZ=1017,AZ=1018,F6=1020,oW=35902,aW=35899,rW=1021,tW=1022,T8=1023,zJ=1026,kJ=1027,eW=1028,zZ=1029,PJ=1030,kZ=1031;var PZ=1033,g7=33776,p7=33777,m7=33778,d7=33779,_Z=35840,TZ=35841,wZ=35842,SZ=35843,jZ=36196,vZ=37492,bZ=37496,yZ=37488,fZ=37489,u7=37490,hZ=37491,xZ=37808,gZ=37809,pZ=37810,mZ=37811,dZ=37812,uZ=37813,lZ=37814,cZ=37815,nZ=37816,sZ=37817,iZ=37818,oZ=37819,aZ=37820,rZ=37821,tZ=36492,eZ=36494,JK=36495,QK=36283,ZK=36284,l7=36285,KK=36286;var $K=0,JX=1,_J="",QX="srgb",WK="srgb-linear",XK="linear",q9="srgb";var ZX=512,KX=513,$X=514,c7=515,WX=516,XX=517,n7=518,YX=519;var s7=35048;var YK="300 es",HK=2000;function lY(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function cY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function f6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function HX(){let J=f6("canvas");return J.style.display="block",J}var l$={},Y6=null;function h6(...J){let Q="THREE."+J.shift();if(Y6)Y6("log",Q,...J);else console.log(Q,...J)}function UX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let Z=J[1];if(Z&&Z.isStackTrace)J[0]+=" "+Z.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function v0(...J){J=UX(J);let Q="THREE."+J.shift();if(Y6)Y6("warn",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.warn(Z.getError(Q));else console.warn(Q,...J)}}function y0(...J){J=UX(J);let Q="THREE."+J.shift();if(Y6)Y6("error",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.error(Z.getError(Q));else console.error(Q,...J)}}function BJ(...J){let Q=J.join(" ");if(Q in l$)return;l$[Q]=!0,v0(...J)}function NX(J,Q,Z){return new Promise(function(K,$){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:$();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Z);break;default:K()}}setTimeout(W,Z)})}var GX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class w8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let K=Z[J];if(K!==void 0){let $=K.indexOf(Q);if($!==-1)K.splice($,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let K=Z.slice(0);for(let $=0,W=K.length;$<W;$++)K[$].call(this,J);J.target=null}}}var b9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],c$=1234567,b6=Math.PI/180,H6=180/Math.PI;function n8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(b9[J&255]+b9[J>>8&255]+b9[J>>16&255]+b9[J>>24&255]+"-"+b9[Q&255]+b9[Q>>8&255]+"-"+b9[Q>>16&15|64]+b9[Q>>24&255]+"-"+b9[Z&63|128]+b9[Z>>8&255]+"-"+b9[Z>>16&255]+b9[Z>>24&255]+b9[K&255]+b9[K>>8&255]+b9[K>>16&255]+b9[K>>24&255]).toLowerCase()}function g0(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function UK(J,Q){return(J%Q+Q)%Q}function nY(J,Q,Z,K,$){return K+(J-Q)*($-K)/(Z-Q)}function sY(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function y6(J,Q,Z){return(1-Z)*J+Z*Q}function iY(J,Q,Z,K){return y6(J,Q,1-Math.exp(-Z*K))}function oY(J,Q=1){return Q-Math.abs(UK(J,Q*2)-Q)}function aY(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function rY(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function tY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function eY(J,Q){return J+Math.random()*(Q-J)}function JH(J){return J*(0.5-Math.random())}function QH(J){if(J!==void 0)c$=J;let Q=c$+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function ZH(J){return J*b6}function KH(J){return J*H6}function $H(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function WH(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function XH(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function YH(J,Q,Z,K,$){let{cos:W,sin:X}=Math,Y=W(Z/2),H=X(Z/2),N=W((Q+K)/2),q=X((Q+K)/2),U=W((Q-K)/2),G=X((Q-K)/2),D=W((K-Q)/2),O=X((K-Q)/2);switch($){case"XYX":J.set(Y*q,H*U,H*G,Y*N);break;case"YZY":J.set(H*G,Y*q,H*U,Y*N);break;case"ZXZ":J.set(H*U,H*G,Y*q,Y*N);break;case"XZX":J.set(Y*q,H*O,H*D,Y*N);break;case"YXY":J.set(H*D,Y*q,H*O,Y*N);break;case"ZYZ":J.set(H*O,H*D,Y*q,Y*N);break;default:v0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+$)}}function O8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var u6={DEG2RAD:b6,RAD2DEG:H6,generateUUID:n8,clamp:g0,euclideanModulo:UK,mapLinear:nY,inverseLerp:sY,lerp:y6,damp:iY,pingpong:oY,smoothstep:aY,smootherstep:rY,randInt:tY,randFloat:eY,randFloatSpread:JH,seededRandom:QH,degToRad:ZH,radToDeg:KH,isPowerOfTwo:$H,ceilPowerOfTwo:WH,floorPowerOfTwo:XH,setQuaternionFromProperEuler:YH,normalize:$9,denormalize:O8};class h0{static{h0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*Z+K[6],this.y=K[1]*Q+K[4]*Z+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(g0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(g0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=this.x-J.x,W=this.y-J.y;return this.x=$*Z-W*K+J.x,this.y=$*K+W*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class o9{constructor(J=0,Q=0,Z=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=K}static slerpFlat(J,Q,Z,K,$,W,X){let Y=Z[K+0],H=Z[K+1],N=Z[K+2],q=Z[K+3],U=$[W+0],G=$[W+1],D=$[W+2],O=$[W+3];if(q!==O||Y!==U||H!==G||N!==D){let B=Y*U+H*G+N*D+q*O;if(B<0)U=-U,G=-G,D=-D,O=-O,B=-B;let E=1-X;if(B<0.9995){let F=Math.acos(B),R=Math.sin(F);E=Math.sin(E*F)/R,X=Math.sin(X*F)/R,Y=Y*E+U*X,H=H*E+G*X,N=N*E+D*X,q=q*E+O*X}else{Y=Y*E+U*X,H=H*E+G*X,N=N*E+D*X,q=q*E+O*X;let F=1/Math.sqrt(Y*Y+H*H+N*N+q*q);Y*=F,H*=F,N*=F,q*=F}}J[Q]=Y,J[Q+1]=H,J[Q+2]=N,J[Q+3]=q}static multiplyQuaternionsFlat(J,Q,Z,K,$,W){let X=Z[K],Y=Z[K+1],H=Z[K+2],N=Z[K+3],q=$[W],U=$[W+1],G=$[W+2],D=$[W+3];return J[Q]=X*D+N*q+Y*G-H*U,J[Q+1]=Y*D+N*U+H*q-X*G,J[Q+2]=H*D+N*G+X*U-Y*q,J[Q+3]=N*D-X*q-Y*U-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,K){return this._x=J,this._y=Q,this._z=Z,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:K,_z:$,_order:W}=J,X=Math.cos,Y=Math.sin,H=X(Z/2),N=X(K/2),q=X($/2),U=Y(Z/2),G=Y(K/2),D=Y($/2);switch(W){case"XYZ":this._x=U*N*q+H*G*D,this._y=H*G*q-U*N*D,this._z=H*N*D+U*G*q,this._w=H*N*q-U*G*D;break;case"YXZ":this._x=U*N*q+H*G*D,this._y=H*G*q-U*N*D,this._z=H*N*D-U*G*q,this._w=H*N*q+U*G*D;break;case"ZXY":this._x=U*N*q-H*G*D,this._y=H*G*q+U*N*D,this._z=H*N*D+U*G*q,this._w=H*N*q-U*G*D;break;case"ZYX":this._x=U*N*q-H*G*D,this._y=H*G*q+U*N*D,this._z=H*N*D-U*G*q,this._w=H*N*q+U*G*D;break;case"YZX":this._x=U*N*q+H*G*D,this._y=H*G*q+U*N*D,this._z=H*N*D-U*G*q,this._w=H*N*q-U*G*D;break;case"XZY":this._x=U*N*q-H*G*D,this._y=H*G*q-U*N*D,this._z=H*N*D+U*G*q,this._w=H*N*q+U*G*D;break;default:v0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,K=Math.sin(Z);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],K=Q[4],$=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],N=Q[6],q=Q[10],U=Z+X+q;if(U>0){let G=0.5/Math.sqrt(U+1);this._w=0.25/G,this._x=(N-Y)*G,this._y=($-H)*G,this._z=(W-K)*G}else if(Z>X&&Z>q){let G=2*Math.sqrt(1+Z-X-q);this._w=(N-Y)/G,this._x=0.25*G,this._y=(K+W)/G,this._z=($+H)/G}else if(X>q){let G=2*Math.sqrt(1+X-Z-q);this._w=($-H)/G,this._x=(K+W)/G,this._y=0.25*G,this._z=(Y+N)/G}else{let G=2*Math.sqrt(1+q-Z-X);this._w=(W-K)/G,this._x=($+H)/G,this._y=(Y+N)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(g0(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let K=Math.min(1,Q/Z);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,N=Q._w;return this._x=Z*N+W*X+K*H-$*Y,this._y=K*N+W*Y+$*X-Z*H,this._z=$*N+W*H+Z*Y-K*X,this._w=W*N-Z*X-K*Y-$*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=this.dot(J);if(X<0)Z=-Z,K=-K,$=-$,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),N=Math.sin(H);Y=Math.sin(Y*H)/N,Q=Math.sin(Q*H)/N,this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),K=Math.sqrt(1-Z),$=Math.sqrt(Z);return this.set(K*Math.sin(J),K*Math.cos(J),$*Math.sin(Q),$*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{x.prototype.isVector3=!0}constructor(J=0,Q=0,Z=0){this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(n$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(n$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6]*K,this.y=$[1]*Q+$[4]*Z+$[7]*K,this.z=$[2]*Q+$[5]*Z+$[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements,W=1/($[3]*Q+$[7]*Z+$[11]*K+$[15]);return this.x=($[0]*Q+$[4]*Z+$[8]*K+$[12])*W,this.y=($[1]*Q+$[5]*Z+$[9]*K+$[13])*W,this.z=($[2]*Q+$[6]*Z+$[10]*K+$[14])*W,this}applyQuaternion(J){let Q=this.x,Z=this.y,K=this.z,$=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*K-X*Z),N=2*(X*Q-$*K),q=2*($*Z-W*Q);return this.x=Q+Y*H+W*q-X*N,this.y=Z+Y*N+X*H-$*q,this.z=K+Y*q+$*N-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[4]*Z+$[8]*K,this.y=$[1]*Q+$[5]*Z+$[9]*K,this.z=$[2]*Q+$[6]*Z+$[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(g0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:K,z:$}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-$*X,this.y=$*W-Z*Y,this.z=Z*X-K*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return uQ.copy(this).projectOnVector(J),this.sub(uQ)}reflect(J){return this.sub(uQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(g0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,K=this.z-J.z;return Q*Q+Z*Z+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let K=Math.sin(Q)*J;return this.x=K*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=K*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var uQ=new x,n$=new o9;class x0{static{x0.prototype.isMatrix3=!0}constructor(J,Q,Z,K,$,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H)}set(J,Q,Z,K,$,W,X,Y,H){let N=this.elements;return N[0]=J,N[1]=K,N[2]=X,N[3]=Q,N[4]=$,N[5]=Y,N[6]=Z,N[7]=W,N[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[3],Y=Z[6],H=Z[1],N=Z[4],q=Z[7],U=Z[2],G=Z[5],D=Z[8],O=K[0],B=K[3],E=K[6],F=K[1],R=K[4],P=K[7],I=K[2],A=K[5],k=K[8];return $[0]=W*O+X*F+Y*I,$[3]=W*B+X*R+Y*A,$[6]=W*E+X*P+Y*k,$[1]=H*O+N*F+q*I,$[4]=H*B+N*R+q*A,$[7]=H*E+N*P+q*k,$[2]=U*O+G*F+D*I,$[5]=U*B+G*R+D*A,$[8]=U*E+G*P+D*k,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8];return Q*W*N-Q*X*H-Z*$*N+Z*X*Y+K*$*H-K*W*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=N*W-X*H,U=X*Y-N*$,G=H*$-W*Y,D=Q*q+Z*U+K*G;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/D;return J[0]=q*O,J[1]=(K*H-N*Z)*O,J[2]=(X*Z-K*W)*O,J[3]=U*O,J[4]=(N*Q-K*Y)*O,J[5]=(K*$-X*Q)*O,J[6]=G*O,J[7]=(Z*Y-H*Q)*O,J[8]=(W*Q-Z*$)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,K,$,W,X){let Y=Math.cos($),H=Math.sin($);return this.set(Z*Y,Z*H,-Z*(Y*W+H*X)+W+J,-K*H,K*Y,-K*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return BJ("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lQ.makeScale(J,Q)),this}rotate(J){return BJ("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lQ.makeRotation(-J)),this}translate(J,Q){return BJ("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<9;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var lQ=new x0,s$=new x0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),i$=new x0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function HH(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function($,W,X){if(this.enabled===!1||W===X||!W||!X)return $;if(this.spaces[W].transfer==="srgb")$.r=s8($.r),$.g=s8($.g),$.b=s8($.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)$.applyMatrix3(this.spaces[W].toXYZ),$.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")$.r=X6($.r),$.g=X6($.g),$.b=X6($.b);return $},workingToColorSpace:function($,W){return this.convert($,this.workingColorSpace,W)},colorSpaceToWorking:function($,W){return this.convert($,W,this.workingColorSpace)},getPrimaries:function($){return this.spaces[$].primaries},getTransfer:function($){if($==="")return"linear";return this.spaces[$].transfer},getToneMappingMode:function($){return this.spaces[$].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function($,W=this.workingColorSpace){return $.fromArray(this.spaces[W].luminanceCoefficients)},define:function($){Object.assign(this.spaces,$)},_getMatrix:function($,W,X){return $.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function($){return this.spaces[$].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function($=this.workingColorSpace){return this.spaces[$].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function($,W){return BJ("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace($,W)},toWorkingColorSpace:function($,W){return BJ("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking($,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:s$,fromXYZ:i$,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:s$,fromXYZ:i$,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var i0=HH();function s8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function X6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var cJ;class NK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(cJ===void 0)cJ=f6("canvas");cJ.width=J.width,cJ.height=J.height;let K=cJ.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);Z=cJ}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=f6("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let K=Z.getImageData(0,0,J.width,J.height),$=K.data;for(let W=0;W<$.length;W++)$[W]=s8($[W]/255)*255;return Z.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(s8(Q[Z]/255)*255);else Q[Z]=s8(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return v0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var UH=0;class l6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:UH++}),this.uuid=n8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement!=="undefined"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame!=="undefined"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},K=this.data;if(K!==null){let $;if(Array.isArray(K)){$=[];for(let W=0,X=K.length;W<X;W++)if(K[W].isDataTexture)$.push(cQ(K[W].image));else $.push(cQ(K[W]))}else $=cQ(K);Z.url=$}if(!Q)J.images[this.uuid]=Z;return Z}}function cQ(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return NK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return v0("Texture: Unable to serialize Texture."),{}}var NH=0,nQ=new x;class f9 extends w8{constructor(J=f9.DEFAULT_IMAGE,Q=f9.DEFAULT_MAPPING,Z=1001,K=1001,$=1006,W=1008,X=1023,Y=1009,H=f9.DEFAULT_ANISOTROPY,N=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:NH++}),this.uuid=n8(),this.name="",this.source=new l6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=K,this.magFilter=$,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new h0(0,0),this.repeat=new h0(1,1),this.center=new h0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new x0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=N,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nQ).x}get height(){return this.source.getSize(nQ).y}get depth(){return this.source.getSize(nQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){v0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){v0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&Z&&(K.isVector2&&Z.isVector2))K.copy(Z);else if(K&&Z&&(K.isVector3&&Z.isVector3))K.copy(Z);else if(K&&Z&&(K.isMatrix3&&Z.isMatrix3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}f9.DEFAULT_IMAGE=null;f9.DEFAULT_MAPPING=300;f9.DEFAULT_ANISOTROPY=1;class X9{static{X9.prototype.isVector4=!0}constructor(J=0,Q=0,Z=0,K=1){this.x=J,this.y=Q,this.z=Z,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,K){return this.x=J,this.y=Q,this.z=Z,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*K+W[12]*$,this.y=W[1]*Q+W[5]*Z+W[9]*K+W[13]*$,this.z=W[2]*Q+W[6]*Z+W[10]*K+W[14]*$,this.w=W[3]*Q+W[7]*Z+W[11]*K+W[15]*$,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,K,$,W=0.01,X=0.1,Y=J.elements,H=Y[0],N=Y[4],q=Y[8],U=Y[1],G=Y[5],D=Y[9],O=Y[2],B=Y[6],E=Y[10];if(Math.abs(N-U)<0.01&&Math.abs(q-O)<0.01&&Math.abs(D-B)<0.01){if(Math.abs(N+U)<0.1&&Math.abs(q+O)<0.1&&Math.abs(D+B)<0.1&&Math.abs(H+G+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let R=(H+1)/2,P=(G+1)/2,I=(E+1)/2,A=(N+U)/4,k=(q+O)/4,_=(D+B)/4;if(R>P&&R>I)if(R<0.01)Z=0,K=0.707106781,$=0.707106781;else Z=Math.sqrt(R),K=A/Z,$=k/Z;else if(P>I)if(P<0.01)Z=0.707106781,K=0,$=0.707106781;else K=Math.sqrt(P),Z=A/K,$=_/K;else if(I<0.01)Z=0.707106781,K=0.707106781,$=0;else $=Math.sqrt(I),Z=k/$,K=_/$;return this.set(Z,K,$,Q),this}let F=Math.sqrt((B-D)*(B-D)+(q-O)*(q-O)+(U-N)*(U-N));if(Math.abs(F)<0.001)F=1;return this.x=(B-D)/F,this.y=(q-O)/F,this.z=(U-N)/F,this.w=Math.acos((H+G+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this.w=g0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this.w=g0(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(g0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GK extends w8{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new X9(0,0,J,Q),this.scissorTest=!1,this.viewport=new X9(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:Z.depth},$=new f9(K),W=Z.count;for(let X=0;X<W;X++)this.textures[X]=$.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveColorBuffer=Z.resolveColorBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.storeMultisampledColorBuffer=Z.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Z.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Z.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview,this.useArrayDepthTexture=Z.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let K=0,$=this.textures.length;K<$;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=Z,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new l6(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class J8 extends GK{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class i7 extends f9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class qK extends f9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class M9{static{M9.prototype.isMatrix4=!0}constructor(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,D,O,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,D,O,B)}set(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,D,O,B){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=Z,E[12]=K,E[1]=$,E[5]=W,E[9]=X,E[13]=Y,E[2]=H,E[6]=N,E[10]=q,E[14]=U,E[3]=G,E[7]=D,E[11]=O,E[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new M9().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),Z.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,Z=J.elements,K=1/nJ.setFromMatrixColumn(J,0).length(),$=1/nJ.setFromMatrixColumn(J,1).length(),W=1/nJ.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*K,Q[1]=Z[1]*K,Q[2]=Z[2]*K,Q[3]=0,Q[4]=Z[4]*$,Q[5]=Z[5]*$,Q[6]=Z[6]*$,Q[7]=0,Q[8]=Z[8]*W,Q[9]=Z[9]*W,Q[10]=Z[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z,W=Math.cos(Z),X=Math.sin(Z),Y=Math.cos(K),H=Math.sin(K),N=Math.cos($),q=Math.sin($);if(J.order==="XYZ"){let U=W*N,G=W*q,D=X*N,O=X*q;Q[0]=Y*N,Q[4]=-Y*q,Q[8]=H,Q[1]=G+D*H,Q[5]=U-O*H,Q[9]=-X*Y,Q[2]=O-U*H,Q[6]=D+G*H,Q[10]=W*Y}else if(J.order==="YXZ"){let U=Y*N,G=Y*q,D=H*N,O=H*q;Q[0]=U+O*X,Q[4]=D*X-G,Q[8]=W*H,Q[1]=W*q,Q[5]=W*N,Q[9]=-X,Q[2]=G*X-D,Q[6]=O+U*X,Q[10]=W*Y}else if(J.order==="ZXY"){let U=Y*N,G=Y*q,D=H*N,O=H*q;Q[0]=U-O*X,Q[4]=-W*q,Q[8]=D+G*X,Q[1]=G+D*X,Q[5]=W*N,Q[9]=O-U*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let U=W*N,G=W*q,D=X*N,O=X*q;Q[0]=Y*N,Q[4]=D*H-G,Q[8]=U*H+O,Q[1]=Y*q,Q[5]=O*H+U,Q[9]=G*H-D,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let U=W*Y,G=W*H,D=X*Y,O=X*H;Q[0]=Y*N,Q[4]=O-U*q,Q[8]=D*q+G,Q[1]=q,Q[5]=W*N,Q[9]=-X*N,Q[2]=-H*N,Q[6]=G*q+D,Q[10]=U-O*q}else if(J.order==="XZY"){let U=W*Y,G=W*H,D=X*Y,O=X*H;Q[0]=Y*N,Q[4]=-q,Q[8]=H*N,Q[1]=U*q+O,Q[5]=W*N,Q[9]=G*q-D,Q[2]=D*q-G,Q[6]=X*N,Q[10]=O*q+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(GH,J,qH)}lookAt(J,Q,Z){let K=this.elements;if(t9.subVectors(J,Q),t9.lengthSq()===0)t9.z=1;if(t9.normalize(),$J.crossVectors(Z,t9),$J.lengthSq()===0){if(Math.abs(Z.z)===1)t9.x+=0.0001;else t9.z+=0.0001;t9.normalize(),$J.crossVectors(Z,t9)}return $J.normalize(),F7.crossVectors(t9,$J),K[0]=$J.x,K[4]=F7.x,K[8]=t9.x,K[1]=$J.y,K[5]=F7.y,K[9]=t9.y,K[2]=$J.z,K[6]=F7.z,K[10]=t9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[4],Y=Z[8],H=Z[12],N=Z[1],q=Z[5],U=Z[9],G=Z[13],D=Z[2],O=Z[6],B=Z[10],E=Z[14],F=Z[3],R=Z[7],P=Z[11],I=Z[15],A=K[0],k=K[4],_=K[8],L=K[12],C=K[1],p=K[5],j=K[9],b=K[13],m=K[2],T=K[6],w=K[10],n=K[14],u=K[3],$0=K[7],i=K[11],Z0=K[15];return $[0]=W*A+X*C+Y*m+H*u,$[4]=W*k+X*p+Y*T+H*$0,$[8]=W*_+X*j+Y*w+H*i,$[12]=W*L+X*b+Y*n+H*Z0,$[1]=N*A+q*C+U*m+G*u,$[5]=N*k+q*p+U*T+G*$0,$[9]=N*_+q*j+U*w+G*i,$[13]=N*L+q*b+U*n+G*Z0,$[2]=D*A+O*C+B*m+E*u,$[6]=D*k+O*p+B*T+E*$0,$[10]=D*_+O*j+B*w+E*i,$[14]=D*L+O*b+B*n+E*Z0,$[3]=F*A+R*C+P*m+I*u,$[7]=F*k+R*p+P*T+I*$0,$[11]=F*_+R*j+P*w+I*i,$[15]=F*L+R*b+P*n+I*Z0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],N=J[2],q=J[6],U=J[10],G=J[14],D=J[3],O=J[7],B=J[11],E=J[15],F=Y*G-H*U,R=X*G-H*q,P=X*U-Y*q,I=W*G-H*N,A=W*U-Y*N,k=W*q-X*N;return Q*(O*F-B*R+E*P)-Z*(D*F-B*I+E*A)+K*(D*R-O*I+E*k)-$*(D*P-O*A+B*k)}determinantAffine(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],N=J[10];return Q*(W*N-X*H)-Z*($*N-X*Y)+K*($*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=J[9],U=J[10],G=J[11],D=J[12],O=J[13],B=J[14],E=J[15],F=Q*X-Z*W,R=Q*Y-K*W,P=Q*H-$*W,I=Z*Y-K*X,A=Z*H-$*X,k=K*H-$*Y,_=N*O-q*D,L=N*B-U*D,C=N*E-G*D,p=q*B-U*O,j=q*E-G*O,b=U*E-G*B,m=F*b-R*j+P*p+I*C-A*L+k*_;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/m;return J[0]=(X*b-Y*j+H*p)*T,J[1]=(K*j-Z*b-$*p)*T,J[2]=(O*k-B*A+E*I)*T,J[3]=(U*A-q*k-G*I)*T,J[4]=(Y*C-W*b-H*L)*T,J[5]=(Q*b-K*C+$*L)*T,J[6]=(B*P-D*k-E*R)*T,J[7]=(N*k-U*P+G*R)*T,J[8]=(W*j-X*C+H*_)*T,J[9]=(Z*C-Q*j-$*_)*T,J[10]=(D*A-O*P+E*F)*T,J[11]=(q*P-N*A-G*F)*T,J[12]=(X*L-W*p-Y*_)*T,J[13]=(Q*p-Z*L+K*_)*T,J[14]=(O*R-D*I-B*F)*T,J[15]=(N*I-q*R+U*F)*T,this}scale(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z;return Q[0]*=Z,Q[4]*=K,Q[8]*=$,Q[1]*=Z,Q[5]*=K,Q[9]*=$,Q[2]*=Z,Q[6]*=K,Q[10]*=$,Q[3]*=Z,Q[7]*=K,Q[11]*=$,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,K))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=1-Z,W=J.x,X=J.y,Y=J.z,H=$*W,N=$*X;return this.set(H*W+Z,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,N*X+Z,N*Y-K*W,0,H*Y-K*X,N*Y+K*W,$*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,K,$,W){return this.set(1,Z,$,0,J,1,W,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,Z){let K=this.elements,$=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=$+$,N=W+W,q=X+X,U=$*H,G=$*N,D=$*q,O=W*N,B=W*q,E=X*q,F=Y*H,R=Y*N,P=Y*q,I=Z.x,A=Z.y,k=Z.z;return K[0]=(1-(O+E))*I,K[1]=(G+P)*I,K[2]=(D-R)*I,K[3]=0,K[4]=(G-P)*A,K[5]=(1-(U+E))*A,K[6]=(B+F)*A,K[7]=0,K[8]=(D+R)*k,K[9]=(B-F)*k,K[10]=(1-(U+O))*k,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,Z){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let $=this.determinantAffine();if($===0)return Z.set(1,1,1),Q.identity(),this;let W=nJ.set(K[0],K[1],K[2]).length(),X=nJ.set(K[4],K[5],K[6]).length(),Y=nJ.set(K[8],K[9],K[10]).length();if($<0)W=-W;F8.copy(this);let H=1/W,N=1/X,q=1/Y;return F8.elements[0]*=H,F8.elements[1]*=H,F8.elements[2]*=H,F8.elements[4]*=N,F8.elements[5]*=N,F8.elements[6]*=N,F8.elements[8]*=q,F8.elements[9]*=q,F8.elements[10]*=q,Q.setFromRotationMatrix(F8),Z.x=W,Z.y=X,Z.z=Y,this}makePerspective(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,N=2*$/(Q-J),q=2*$/(Z-K),U=(Q+J)/(Q-J),G=(Z+K)/(Z-K),D,O;if(Y)D=$/(W-$),O=W*$/(W-$);else if(X===2000)D=-(W+$)/(W-$),O=-2*W*$/(W-$);else if(X===2001)D=-W/(W-$),O=-W*$/(W-$);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=U,H[12]=0,H[1]=0,H[5]=q,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=D,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,N=2/(Q-J),q=2/(Z-K),U=-(Q+J)/(Q-J),G=-(Z+K)/(Z-K),D,O;if(Y)D=1/(W-$),O=W/(W-$);else if(X===2000)D=-2/(W-$),O=-(W+$)/(W-$);else if(X===2001)D=-1/(W-$),O=-$/(W-$);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=0,H[12]=U,H[1]=0,H[5]=q,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=D,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<16;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var nJ=new x,F8=new M9,GH=new x(0,0,0),qH=new x(1,1,1),$J=new x,F7=new x,t9=new x,o$=new M9,a$=new o9;class z8{constructor(J=0,Q=0,Z=0,K=z8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,K=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let K=J.elements,$=K[0],W=K[4],X=K[8],Y=K[1],H=K[5],N=K[9],q=K[2],U=K[6],G=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(g0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-N,G),this._z=Math.atan2(-W,$);else this._x=Math.atan2(U,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-g0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(X,G),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-q,$),this._z=0;break;case"ZXY":if(this._x=Math.asin(g0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-q,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,$);break;case"ZYX":if(this._y=Math.asin(-g0(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(U,G),this._z=Math.atan2(Y,$);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(g0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-N,H),this._y=Math.atan2(-q,$);else this._x=0,this._y=Math.atan2(X,G);break;case"XZY":if(this._z=Math.asin(-g0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(U,H),this._y=Math.atan2(X,$);else this._x=Math.atan2(-N,G),this._y=0;break;default:v0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return o$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(o$,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return a$.setFromEuler(this),this.setFromQuaternion(a$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}z8.DEFAULT_ORDER="XYZ";class o7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var FH=0,r$=new x,sJ=new o9,m8=new M9,D7=new x,w6=new x,DH=new x,EH=new o9,t$=new x(1,0,0),e$=new x(0,1,0),JW=new x(0,0,1),QW={type:"added"},OH={type:"removed"},iJ={type:"childadded",child:null},sQ={type:"childremoved",child:null};class n9 extends w8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:FH++}),this.uuid=n8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n9.DEFAULT_UP.clone();let J=new x,Q=new z8,Z=new o9,K=new x(1,1,1);function $(){Z.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange($),Z._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new M9},normalMatrix:{value:new x0}}),this.matrix=new M9,this.matrixWorld=new M9,this.matrixAutoUpdate=n9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return sJ.setFromAxisAngle(J,Q),this.quaternion.multiply(sJ),this}rotateOnWorldAxis(J,Q){return sJ.setFromAxisAngle(J,Q),this.quaternion.premultiply(sJ),this}rotateX(J){return this.rotateOnAxis(t$,J)}rotateY(J){return this.rotateOnAxis(e$,J)}rotateZ(J){return this.rotateOnAxis(JW,J)}translateOnAxis(J,Q){return r$.copy(J).applyQuaternion(this.quaternion),this.position.add(r$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(t$,J)}translateY(J){return this.translateOnAxis(e$,J)}translateZ(J){return this.translateOnAxis(JW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(m8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)D7.copy(J);else D7.set(J,Q,Z);let K=this.parent;if(this.updateWorldMatrix(!0,!1),w6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)m8.lookAt(w6,D7,this.up);else m8.lookAt(D7,w6,this.up);if(this.quaternion.setFromRotationMatrix(m8),K)m8.extractRotation(K.matrixWorld),sJ.setFromRotationMatrix(m8),this.quaternion.premultiply(sJ.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return y0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(QW),iJ.child=J,this.dispatchEvent(iJ),iJ.child=null;else y0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(OH),sQ.child=J,this.dispatchEvent(sQ),sQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),m8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),m8.multiply(J.parent.matrixWorld);return J.applyMatrix4(m8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(QW),iJ.child=J,this.dispatchEvent(iJ),iJ.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,K=this.children.length;Z<K;Z++){let W=this.children[Z].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let K=this.children;for(let $=0,W=K.length;$<W;$++)K[$].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(w6,J,DH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(w6,EH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:Z,z:K}=J,$=this.matrix.elements;$[12]+=Q-$[0]*Q-$[4]*Z-$[8]*K,$[13]+=Z-$[1]*Q-$[5]*Z-$[9]*K,$[14]+=K-$[2]*Q-$[6]*Z-$[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q,Z=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Z){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Z=!0}if(Q===!0){let $=this.children;for(let W=0,X=$.length;W<X;W++)$[W].updateWorldMatrix(!1,!0,Z)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,K.name=this.name,K.castShadow=this.castShadow,K.receiveShadow=this.receiveShadow,K.visible=this.visible,K.frustumCulled=this.frustumCulled,K.renderOrder=this.renderOrder,K.static=this.static,K.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function $(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=$(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,N=Y.length;H<N;H++){let q=Y[H];$(J.shapes,q)}else $(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)$(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push($(J.materials,this.material[Y]));K.material=X}else K.material=$(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push($(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),N=W(J.images),q=W(J.shapes),U=W(J.skeletons),G=W(J.animations),D=W(J.nodes);if(X.length>0)Z.geometries=X;if(Y.length>0)Z.materials=Y;if(H.length>0)Z.textures=H;if(N.length>0)Z.images=N;if(q.length>0)Z.shapes=q;if(U.length>0)Z.skeletons=U;if(G.length>0)Z.animations=G;if(D.length>0)Z.nodes=D}return Z.object=K,Z;function W(X){let Y=[];for(let H in X){let N=X[H];delete N.metadata,Y.push(N)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let K=J.children[Z];this.add(K.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}n9.DEFAULT_UP=new x(0,1,0);n9.DEFAULT_MATRIX_AUTO_UPDATE=!0;n9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class UJ extends n9{constructor(){super();this.isGroup=!0,this.type="Group"}}var RH={type:"move"};class c6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new UJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new UJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new UJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let K=null,$=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let B=Q.getJointPose(O,Z),E=this._getHandJoint(H,O);if(B!==null)E.matrix.fromArray(B.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=B.radius;E.visible=B!==null}let N=H.joints["index-finger-tip"],q=H.joints["thumb-tip"],U=N.position.distanceTo(q.position),G=0.02,D=0.005;if(H.inputState.pinching&&U>G+D)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&U<=G-D)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if($=Q.getPose(J.gripSpace,Z),$!==null){if(Y.matrix.fromArray($.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,$.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy($.linearVelocity);else Y.hasLinearVelocity=!1;if($.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy($.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,Z),K===null&&$!==null)K=$;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(RH)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=$!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new UJ;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var qX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},WJ={h:0,s:0,l:0},E7={h:0,s:0,l:0};function iQ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class t0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,i0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,K=i0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,i0.colorSpaceToWorking(this,K),this}setHSL(J,Q,Z,K=i0.workingColorSpace){if(J=UK(J,1),Q=g0(Q,0,1),Z=g0(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let $=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,W=2*Z-$;this.r=iQ(W,$,J+0.3333333333333333),this.g=iQ(W,$,J),this.b=iQ(W,$,J-0.3333333333333333)}return i0.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function Z($){if($===void 0)return;if(parseFloat($)<1)v0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let $,W=K[1],X=K[2];switch(W){case"rgb":case"rgba":if($=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(255,parseInt($[1],10))/255,Math.min(255,parseInt($[2],10))/255,Math.min(255,parseInt($[3],10))/255,Q);if($=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(100,parseInt($[1],10))/100,Math.min(100,parseInt($[2],10))/100,Math.min(100,parseInt($[3],10))/100,Q);break;case"hsl":case"hsla":if($=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setHSL(parseFloat($[1])/360,parseFloat($[2])/100,parseFloat($[3])/100,Q);break;default:v0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let $=K[1],W=$.length;if(W===3)return this.setRGB(parseInt($.charAt(0),16)/15,parseInt($.charAt(1),16)/15,parseInt($.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt($,16),Q);else v0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=qX[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else v0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=s8(J.r),this.g=s8(J.g),this.b=s8(J.b),this}copyLinearToSRGB(J){return this.r=X6(J.r),this.g=X6(J.g),this.b=X6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return i0.workingToColorSpace(y9.copy(this),J),Math.round(g0(y9.r*255,0,255))*65536+Math.round(g0(y9.g*255,0,255))*256+Math.round(g0(y9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=i0.workingColorSpace){i0.workingToColorSpace(y9.copy(this),Q);let{r:Z,g:K,b:$}=y9,W=Math.max(Z,K,$),X=Math.min(Z,K,$),Y,H,N=(X+W)/2;if(X===W)Y=0,H=0;else{let q=W-X;switch(H=N<=0.5?q/(W+X):q/(2-W-X),W){case Z:Y=(K-$)/q+(K<$?6:0);break;case K:Y=($-Z)/q+2;break;case $:Y=(Z-K)/q+4;break}Y/=6}return J.h=Y,J.s=H,J.l=N,J}getRGB(J,Q=i0.workingColorSpace){return i0.workingToColorSpace(y9.copy(this),Q),J.r=y9.r,J.g=y9.g,J.b=y9.b,J}getStyle(J="srgb"){i0.workingToColorSpace(y9.copy(this),J);let{r:Q,g:Z,b:K}=y9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round(K*255)})`}offsetHSL(J,Q,Z){return this.getHSL(WJ),this.setHSL(WJ.h+J,WJ.s+Q,WJ.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(WJ),J.getHSL(E7);let Z=y6(WJ.h,E7.h,Q),K=y6(WJ.s,E7.s,Q),$=y6(WJ.l,E7.l,Q);return this.setHSL(Z,K,$),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,K=this.b,$=J.elements;return this.r=$[0]*Q+$[3]*Z+$[6]*K,this.g=$[1]*Q+$[4]*Z+$[7]*K,this.b=$[2]*Q+$[5]*Z+$[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var y9=new t0;t0.NAMES=qX;class n6{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new t0(J),this.near=Q,this.far=Z}clone(){return new n6(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class a7 extends n9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new z8,this.environmentIntensity=1,this.environmentRotation=new z8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var D8=new x,d8=new x,oQ=new x,u8=new x,oJ=new x,aJ=new x,ZW=new x,aQ=new x,rQ=new x,tQ=new x,eQ=new X9,JZ=new X9,QZ=new X9;class X8{constructor(J=new x,Q=new x,Z=new x){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,K){K.subVectors(Z,Q),D8.subVectors(J,Q),K.cross(D8);let $=K.lengthSq();if($>0)return K.multiplyScalar(1/Math.sqrt($));return K.set(0,0,0)}static getBarycoord(J,Q,Z,K,$){D8.subVectors(K,Q),d8.subVectors(Z,Q),oQ.subVectors(J,Q);let W=D8.dot(D8),X=D8.dot(d8),Y=D8.dot(oQ),H=d8.dot(d8),N=d8.dot(oQ),q=W*H-X*X;if(q===0)return $.set(0,0,0),null;let U=1/q,G=(H*Y-X*N)*U,D=(W*N-X*Y)*U;return $.set(1-G-D,D,G)}static containsPoint(J,Q,Z,K){if(this.getBarycoord(J,Q,Z,K,u8)===null)return!1;return u8.x>=0&&u8.y>=0&&u8.x+u8.y<=1}static getInterpolation(J,Q,Z,K,$,W,X,Y){if(this.getBarycoord(J,Q,Z,K,u8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector($,u8.x),Y.addScaledVector(W,u8.y),Y.addScaledVector(X,u8.z),Y}static getInterpolatedAttribute(J,Q,Z,K,$,W){return eQ.setScalar(0),JZ.setScalar(0),QZ.setScalar(0),eQ.fromBufferAttribute(J,Q),JZ.fromBufferAttribute(J,Z),QZ.fromBufferAttribute(J,K),W.setScalar(0),W.addScaledVector(eQ,$.x),W.addScaledVector(JZ,$.y),W.addScaledVector(QZ,$.z),W}static isFrontFacing(J,Q,Z,K){return D8.subVectors(Z,Q),d8.subVectors(J,Q),D8.cross(d8).dot(K)<0}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,K){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,Z,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return D8.subVectors(this.c,this.b),d8.subVectors(this.a,this.b),D8.cross(d8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return X8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return X8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,K,$){return X8.getInterpolation(J,this.a,this.b,this.c,Q,Z,K,$)}containsPoint(J){return X8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return X8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,K=this.b,$=this.c,W,X;oJ.subVectors(K,Z),aJ.subVectors($,Z),aQ.subVectors(J,Z);let Y=oJ.dot(aQ),H=aJ.dot(aQ);if(Y<=0&&H<=0)return Q.copy(Z);rQ.subVectors(J,K);let N=oJ.dot(rQ),q=aJ.dot(rQ);if(N>=0&&q<=N)return Q.copy(K);let U=Y*q-N*H;if(U<=0&&Y>=0&&N<=0)return W=Y/(Y-N),Q.copy(Z).addScaledVector(oJ,W);tQ.subVectors(J,$);let G=oJ.dot(tQ),D=aJ.dot(tQ);if(D>=0&&G<=D)return Q.copy($);let O=G*H-Y*D;if(O<=0&&H>=0&&D<=0)return X=H/(H-D),Q.copy(Z).addScaledVector(aJ,X);let B=N*D-G*q;if(B<=0&&q-N>=0&&G-D>=0)return ZW.subVectors($,K),X=(q-N)/(q-N+(G-D)),Q.copy(K).addScaledVector(ZW,X);let E=1/(B+O+U);return W=O*E,X=U*E,Q.copy(Z).addScaledVector(oJ,W).addScaledVector(aJ,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class H8{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(E8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(E8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=E8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let $=Z.getAttribute("position");if(Q===!0&&$!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=$.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,E8);else E8.fromBufferAttribute($,W);E8.applyMatrix4(J.matrixWorld),this.expandByPoint(E8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();O7.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();O7.copy(Z.boundingBox)}O7.applyMatrix4(J.matrixWorld),this.union(O7)}}let K=J.children;for(let $=0,W=K.length;$<W;$++)this.expandByObject(K[$],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,E8),E8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(S6),R7.subVectors(this.max,S6),rJ.subVectors(J.a,S6),tJ.subVectors(J.b,S6),eJ.subVectors(J.c,S6),XJ.subVectors(tJ,rJ),YJ.subVectors(eJ,tJ),MJ.subVectors(rJ,eJ);let Q=[0,-XJ.z,XJ.y,0,-YJ.z,YJ.y,0,-MJ.z,MJ.y,XJ.z,0,-XJ.x,YJ.z,0,-YJ.x,MJ.z,0,-MJ.x,-XJ.y,XJ.x,0,-YJ.y,YJ.x,0,-MJ.y,MJ.x,0];if(!ZZ(Q,rJ,tJ,eJ,R7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!ZZ(Q,rJ,tJ,eJ,R7))return!1;return M7.crossVectors(XJ,YJ),Q=[M7.x,M7.y,M7.z],ZZ(Q,rJ,tJ,eJ,R7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,E8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(E8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return l8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),l8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),l8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),l8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),l8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),l8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),l8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),l8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(l8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var l8=[new x,new x,new x,new x,new x,new x,new x,new x],E8=new x,O7=new H8,rJ=new x,tJ=new x,eJ=new x,XJ=new x,YJ=new x,MJ=new x,S6=new x,R7=new x,M7=new x,LJ=new x;function ZZ(J,Q,Z,K,$){for(let W=0,X=J.length-3;W<=X;W+=3){LJ.fromArray(J,W);let Y=$.x*Math.abs(LJ.x)+$.y*Math.abs(LJ.y)+$.z*Math.abs(LJ.z),H=Q.dot(LJ),N=Z.dot(LJ),q=K.dot(LJ);if(Math.max(-Math.max(H,N,q),Math.min(H,N,q))>Y)return!1}return!0}var B9=new x,L7=new h0,MH=0;class Y8 extends w8{constructor(J,Q,Z=!1){super();if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let K=0,$=this.itemSize;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)L7.fromBufferAttribute(this,Q),L7.applyMatrix3(J),this.setXY(Q,L7.x,L7.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.applyMatrix3(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.applyMatrix4(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.applyNormalMatrix(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.transformDirection(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=O8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=$9(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=O8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=O8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=O8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=O8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=$9(Q,this.array),Z=$9(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J*=this.itemSize,this.normalized)Q=$9(Q,this.array),Z=$9(Z,this.array),K=$9(K,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J*=this.itemSize,this.normalized)Q=$9(Q,this.array),Z=$9(Z,this.array),K=$9(K,this.array),$=$9($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this.array[J+3]=$,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class r7 extends Y8{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class t7 extends Y8{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class u9 extends Y8{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var LH=new H8,j6=new x,KZ=new x;class o8{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else LH.setFromPoints(J).getCenter(Z);let K=0;for(let $=0,W=J.length;$<W;$++)K=Math.max(K,Z.distanceToSquared(J[$]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;j6.subVectors(J,this.center);let Q=j6.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),K=(Z-this.radius)*0.5;this.center.addScaledVector(j6,K/Z),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else KZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(j6.copy(J.center).add(KZ)),this.expandByPoint(j6.copy(J.center).sub(KZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var IH=0,$8=new M9,$Z=new n9,J6=new x,e9=new H8,v6=new H8,_9=new x;class U8 extends w8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IH++}),this.uuid=n8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((lY(J))?t7:r7)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let $=new x0().getNormalMatrix(J);Z.applyNormalMatrix($),Z.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return $8.makeRotationFromQuaternion(J),this.applyMatrix4($8),this}rotateX(J){return $8.makeRotationX(J),this.applyMatrix4($8),this}rotateY(J){return $8.makeRotationY(J),this.applyMatrix4($8),this}rotateZ(J){return $8.makeRotationZ(J),this.applyMatrix4($8),this}translate(J,Q,Z){return $8.makeTranslation(J,Q,Z),this.applyMatrix4($8),this}scale(J,Q,Z){return $8.makeScale(J,Q,Z),this.applyMatrix4($8),this}lookAt(J){return $Z.lookAt(J),$Z.updateMatrix(),this.applyMatrix4($Z.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(J6).negate(),this.translate(J6.x,J6.y,J6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.push(W.x,W.y,W.z||0)}this.setAttribute("position",new u9(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let K=0;K<Z;K++){let $=J[K];Q.setXYZ(K,$.x,$.y,$.z||0)}if(J.length>Q.count)v0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new H8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){y0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let $=Q[Z];if(e9.setFromBufferAttribute($),this.morphTargetsRelative)_9.addVectors(this.boundingBox.min,e9.min),this.boundingBox.expandByPoint(_9),_9.addVectors(this.boundingBox.max,e9.max),this.boundingBox.expandByPoint(_9);else this.boundingBox.expandByPoint(e9.min),this.boundingBox.expandByPoint(e9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))y0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new o8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){y0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let Z=this.boundingSphere.center;if(e9.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$];if(v6.setFromBufferAttribute(X),this.morphTargetsRelative)_9.addVectors(e9.min,v6.min),e9.expandByPoint(_9),_9.addVectors(e9.max,v6.max),e9.expandByPoint(_9);else e9.expandByPoint(v6.min),e9.expandByPoint(v6.max)}e9.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)_9.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(_9));if(Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$],Y=this.morphTargetsRelative;for(let H=0,N=X.count;H<N;H++){if(_9.fromBufferAttribute(X,H),Y)J6.fromBufferAttribute(J,H),_9.add(J6);K=Math.max(K,Z.distanceToSquared(_9))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))y0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){y0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:K,uv:$}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==Z.count)W=new Y8(new Float32Array(4*Z.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<Z.count;_++)X[_]=new x,Y[_]=new x;let H=new x,N=new x,q=new x,U=new h0,G=new h0,D=new h0,O=new x,B=new x;function E(_,L,C){H.fromBufferAttribute(Z,_),N.fromBufferAttribute(Z,L),q.fromBufferAttribute(Z,C),U.fromBufferAttribute($,_),G.fromBufferAttribute($,L),D.fromBufferAttribute($,C),N.sub(H),q.sub(H),G.sub(U),D.sub(U);let p=1/(G.x*D.y-D.x*G.y);if(!isFinite(p))return;O.copy(N).multiplyScalar(D.y).addScaledVector(q,-G.y).multiplyScalar(p),B.copy(q).multiplyScalar(G.x).addScaledVector(N,-D.x).multiplyScalar(p),X[_].add(O),X[L].add(O),X[C].add(O),Y[_].add(B),Y[L].add(B),Y[C].add(B)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let _=0,L=F.length;_<L;++_){let C=F[_],p=C.start,j=C.count;for(let b=p,m=p+j;b<m;b+=3)E(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let R=new x,P=new x,I=new x,A=new x;function k(_){I.fromBufferAttribute(K,_),A.copy(I);let L=X[_];R.copy(L),R.sub(I.multiplyScalar(I.dot(L))).normalize(),P.crossVectors(A,L);let p=P.dot(Y[_])<0?-1:1;W.setXYZW(_,R.x,R.y,R.z,p)}for(let _=0,L=F.length;_<L;++_){let C=F[_],p=C.start,j=C.count;for(let b=p,m=p+j;b<m;b+=3)k(J.getX(b+0)),k(J.getX(b+1)),k(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0||Z.count!==Q.count)Z=new Y8(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let U=0,G=Z.count;U<G;U++)Z.setXYZ(U,0,0,0);let K=new x,$=new x,W=new x,X=new x,Y=new x,H=new x,N=new x,q=new x;if(J)for(let U=0,G=J.count;U<G;U+=3){let D=J.getX(U+0),O=J.getX(U+1),B=J.getX(U+2);K.fromBufferAttribute(Q,D),$.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,B),N.subVectors(W,$),q.subVectors(K,$),N.cross(q),X.fromBufferAttribute(Z,D),Y.fromBufferAttribute(Z,O),H.fromBufferAttribute(Z,B),X.add(N),Y.add(N),H.add(N),Z.setXYZ(D,X.x,X.y,X.z),Z.setXYZ(O,Y.x,Y.y,Y.z),Z.setXYZ(B,H.x,H.y,H.z)}else for(let U=0,G=Q.count;U<G;U+=3)K.fromBufferAttribute(Q,U+0),$.fromBufferAttribute(Q,U+1),W.fromBufferAttribute(Q,U+2),N.subVectors(W,$),q.subVectors(K,$),N.cross(q),Z.setXYZ(U+0,N.x,N.y,N.z),Z.setXYZ(U+1,N.x,N.y,N.z),Z.setXYZ(U+2,N.x,N.y,N.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)_9.fromBufferAttribute(J,Q),_9.normalize(),J.setXYZ(Q,_9.x,_9.y,_9.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:N,normalized:q}=X,U=new H.constructor(Y.length*N),G=0,D=0;for(let O=0,B=Y.length;O<B;O++){if(X.isInterleavedBufferAttribute)G=Y[O]*X.data.stride+X.offset;else G=Y[O]*N;for(let E=0;E<N;E++)U[D++]=H[G++]}return new Y8(U,N,q)}if(this.index===null)return v0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new U8,Z=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,Z);Q.setAttribute(X,H)}let $=this.morphAttributes;for(let X in $){let Y=[],H=$[X];for(let N=0,q=H.length;N<q;N++){let U=H[N],G=J(U,Z);Y.push(G)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let H=Z[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},$=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],N=[];for(let q=0,U=H.length;q<U;q++){let G=H[q];N.push(G.toJSON(J.data))}if(N.length>0)K[Y]=N,$=!0}if($)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let K=J.attributes;for(let H in K){let N=K[H];this.setAttribute(H,N.clone(Q))}let $=J.morphAttributes;for(let H in $){let N=[],q=$[H];for(let U=0,G=q.length;U<G;U++)N.push(q[U].clone(Q));this.morphAttributes[H]=N}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,N=W.length;H<N;H++){let q=W[H];this.addGroup(q.start,q.count,q.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class FK{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=n8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let K=0,$=this.stride;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=n8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=n8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var m9=new x;class h9{constructor(J,Q,Z,K=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=K}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)m9.fromBufferAttribute(this,Q),m9.applyMatrix4(J),this.setXYZ(Q,m9.x,m9.y,m9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)m9.fromBufferAttribute(this,Q),m9.applyNormalMatrix(J),this.setXYZ(Q,m9.x,m9.y,m9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)m9.fromBufferAttribute(this,Q),m9.transformDirection(J),this.setXYZ(Q,m9.x,m9.y,m9.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=O8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=$9(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=O8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=O8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=O8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=O8(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=$9(Q,this.array),Z=$9(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=$9(Q,this.array),Z=$9(Z,this.array),K=$9(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=$9(Q,this.array),Z=$9(Z,this.array),K=$9(K,this.array),$=$9($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this.data.array[J+3]=$,this}clone(J){if(J===void 0){h6("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return new Y8(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new h9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){h6("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var WZ=new x,VH=new x,BH=new x0;class W8{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,K){return this.normal.set(J,Q,Z),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let K=WZ.subVectors(Z,Q).cross(VH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,Z=!0){let K=J.delta(WZ),$=this.normal.dot(K);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(Z===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(K,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||BH.getNormalMatrix(J),K=this.coplanarPoint(WZ).applyMatrix4(J),$=this.normal.applyMatrix3(Z).normalize();return this.constant=-K.dot($),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var CH=0;class D6 extends w8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:CH++}),this.uuid=n8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new t0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){v0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){v0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set(Z);else if(K&&K.isVector2&&(Z&&Z.isVector2)||K&&K.isEuler&&(Z&&Z.isEuler)||K&&K.isVector3&&(Z&&Z.isVector3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,Z.blending=this.blending,Z.side=this.side,Z.shadowSide=this.shadowSide,Z.vertexColors=this.vertexColors,Z.opacity=this.opacity,Z.transparent=this.transparent,Z.blendSrc=this.blendSrc,Z.blendDst=this.blendDst,Z.blendEquation=this.blendEquation,Z.blendSrcAlpha=this.blendSrcAlpha,Z.blendDstAlpha=this.blendDstAlpha,Z.blendEquationAlpha=this.blendEquationAlpha,Z.blendColor=this.blendColor.getHex(),Z.blendAlpha=this.blendAlpha,Z.depthFunc=this.depthFunc,Z.depthTest=this.depthTest,Z.depthWrite=this.depthWrite,Z.colorWrite=this.colorWrite,Z.clipIntersection=this.clipIntersection,Z.clipShadows=this.clipShadows,Z.stencilWriteMask=this.stencilWriteMask,Z.stencilFunc=this.stencilFunc,Z.stencilRef=this.stencilRef,Z.stencilFuncMask=this.stencilFuncMask,Z.stencilFail=this.stencilFail,Z.stencilZFail=this.stencilZFail,Z.stencilZPass=this.stencilZPass,Z.stencilWrite=this.stencilWrite,Z.polygonOffset=this.polygonOffset,Z.polygonOffsetFactor=this.polygonOffsetFactor,Z.polygonOffsetUnits=this.polygonOffsetUnits,Z.dithering=this.dithering,Z.alphaTest=this.alphaTest,Z.alphaHash=this.alphaHash,Z.alphaToCoverage=this.alphaToCoverage,Z.premultipliedAlpha=this.premultipliedAlpha,Z.forceSinglePass=this.forceSinglePass,Z.allowOverride=this.allowOverride,Z.visible=this.visible,Z.toneMapped=this.toneMapped,Z.name=this.name,this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Z.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Z.clippingPlanes=this.clippingPlanes.map(($)=>$.toJSON());if(this.rotation!==void 0)Z.rotation=this.rotation;if(this.depthPacking!==void 0)Z.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Z.linewidth=this.linewidth;if(this.linecap!==void 0)Z.linecap=this.linecap;if(this.linejoin!==void 0)Z.linejoin=this.linejoin;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.wireframe!==void 0)Z.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Z.flatShading=this.flatShading;if(this.fog!==void 0)Z.fog=this.fog;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function K($){let W=[];for(let X in $){let Y=$[X];delete Y.metadata,W.push(Y)}return W}if(Q){let $=K(J.textures),W=K(J.images);if($.length>0)Z.textures=$;if(W.length>0)Z.images=W}return Z}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new t0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Z)=>new W8().fromJSON(Z));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Z=J.normalScale;if(Array.isArray(Z)===!1)Z=[Z,Z];this.normalScale=new h0().fromArray(Z)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new h0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let K=Q.length;Z=new Array(K);for(let $=0;$!==K;++$)Z[$]=Q[$].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var c8=new x,XZ=new x,I7=new x,V7=new x;class s6{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,c8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=c8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return c8.copy(this.origin).addScaledVector(this.direction,Q),c8.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,K){XZ.copy(J).add(Q).multiplyScalar(0.5),I7.copy(Q).sub(J).normalize(),V7.copy(this.origin).sub(XZ);let $=J.distanceTo(Q)*0.5,W=-this.direction.dot(I7),X=V7.dot(this.direction),Y=-V7.dot(I7),H=V7.lengthSq(),N=Math.abs(1-W*W),q,U,G,D;if(N>0)if(q=W*Y-X,U=W*X-Y,D=$*N,q>=0)if(U>=-D)if(U<=D){let O=1/N;q*=O,U*=O,G=q*(q+W*U+2*X)+U*(W*q+U+2*Y)+H}else U=$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else U=-$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else if(U<=-D)q=Math.max(0,-(-W*$+X)),U=q>0?-$:Math.min(Math.max(-$,-Y),$),G=-q*q+U*(U+2*Y)+H;else if(U<=D)q=0,U=Math.min(Math.max(-$,-Y),$),G=U*(U+2*Y)+H;else q=Math.max(0,-(W*$+X)),U=q>0?$:Math.min(Math.max(-$,-Y),$),G=-q*q+U*(U+2*Y)+H;else U=W>0?-$:$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;if(Z)Z.copy(this.origin).addScaledVector(this.direction,q);if(K)K.copy(XZ).addScaledVector(I7,U);return G}intersectSphere(J,Q){if(J.radius<0)return null;c8.subVectors(J.center,this.origin);let Z=c8.dot(this.direction),K=c8.dot(c8)-Z*Z,$=J.radius*J.radius;if(K>$)return null;let W=Math.sqrt($-K),X=Z-W,Y=Z+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,K,$,W,X,Y,H=1/this.direction.x,N=1/this.direction.y,q=1/this.direction.z,U=this.origin;if(H>=0)Z=(J.min.x-U.x)*H,K=(J.max.x-U.x)*H;else Z=(J.max.x-U.x)*H,K=(J.min.x-U.x)*H;if(N>=0)$=(J.min.y-U.y)*N,W=(J.max.y-U.y)*N;else $=(J.max.y-U.y)*N,W=(J.min.y-U.y)*N;if(Z>W||$>K)return null;if($>Z||isNaN(Z))Z=$;if(W<K||isNaN(K))K=W;if(q>=0)X=(J.min.z-U.z)*q,Y=(J.max.z-U.z)*q;else X=(J.max.z-U.z)*q,Y=(J.min.z-U.z)*q;if(Z>Y||X>K)return null;if(X>Z||Z!==Z)Z=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at(Z>=0?Z:K,Q)}intersectsBox(J){return this.intersectBox(J,c8)!==null}intersectTriangle(J,Q,Z,K,$){let W=this.origin,X=this.direction,Y=X.x,H=X.y,N=X.z,q=J.x-W.x,U=J.y-W.y,G=J.z-W.z,D=Q.x-W.x,O=Q.y-W.y,B=Q.z-W.z,E=Z.x-W.x,F=Z.y-W.y,R=Z.z-W.z,P=Math.abs(Y),I=Math.abs(H),A=Math.abs(N),k,_,L,C,p,j,b,m,T,w,n,u;if(P>=I&&P>=A)if(L=Y,j=q,T=D,u=E,Y>=0)k=H,_=N,C=U,p=G,b=O,m=B,w=F,n=R;else k=N,_=H,C=G,p=U,b=B,m=O,w=R,n=F;else if(I>=A)if(L=H,j=U,T=O,u=F,H>=0)k=N,_=Y,C=G,p=q,b=B,m=D,w=R,n=E;else k=Y,_=N,C=q,p=G,b=D,m=B,w=E,n=R;else if(L=N,j=G,T=B,u=R,N>=0)k=Y,_=H,C=q,p=U,b=D,m=O,w=E,n=F;else k=H,_=Y,C=U,p=q,b=O,m=D,w=F,n=E;if(L===0)return null;let $0=k/L,i=_/L,Z0=1/L,X0=C-$0*j,T0=p-i*j,_0=b-$0*T,c0=m-i*T,d0=w-$0*u,S=n-i*u,g=d0*c0-S*_0,d=X0*S-T0*d0,a=_0*T0-c0*X0;if(K){if(g<0||d<0||a<0)return null}else if((g<0||d<0||a<0)&&(g>0||d>0||a>0))return null;let Q0=g+d+a;if(Q0===0)return null;let r=Z0*(g*j+d*T+a*u);if(Q0>0?r<0:r>0)return null;return this.at(r/Q0,$)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class e7 extends D6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new t0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new z8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var KW=new M9,IJ=new s6,B7=new o8,$W=new x,C7=new x,A7=new x,z7=new x,YZ=new x,k7=new x,WW=new x,P7=new x;class Q8 extends n9{constructor(J=new U8,Q=new e7){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let $=0,W=K.length;$<W;$++){let X=K[$].name||String($);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=$}}}}getVertexPosition(J,Q){let Z=this.geometry,K=Z.attributes.position,$=Z.morphAttributes.position,W=Z.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if($&&X){k7.set(0,0,0);for(let Y=0,H=$.length;Y<H;Y++){let N=X[Y],q=$[Y];if(N===0)continue;if(YZ.fromBufferAttribute(q,J),W)k7.addScaledVector(YZ,N);else k7.addScaledVector(YZ.sub(Q),N)}Q.add(k7)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.material,$=this.matrixWorld;if(K===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(B7.copy(Z.boundingSphere),B7.applyMatrix4($),IJ.copy(J.ray).recast(J.near),B7.containsPoint(IJ.origin)===!1){if(IJ.intersectSphere(B7,$W)===null)return;if(IJ.origin.distanceToSquared($W)>(J.far-J.near)**2)return}if(KW.copy($).invert(),IJ.copy(J.ray).applyMatrix4(KW),Z.boundingBox!==null){if(IJ.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,IJ)}_computeIntersections(J,Q,Z){let K,$=this.geometry,W=this.material,X=$.index,Y=$.attributes.position,H=$.attributes.uv,N=$.attributes.uv1,q=$.attributes.normal,U=$.groups,G=$.drawRange;if(X!==null)if(Array.isArray(W))for(let D=0,O=U.length;D<O;D++){let B=U[D],E=W[B.materialIndex],F=Math.max(B.start,G.start),R=Math.min(X.count,Math.min(B.start+B.count,G.start+G.count));for(let P=F,I=R;P<I;P+=3){let A=X.getX(P),k=X.getX(P+1),_=X.getX(P+2);if(K=_7(this,E,J,Z,H,N,q,A,k,_),K)K.faceIndex=Math.floor(P/3),K.face.materialIndex=B.materialIndex,Q.push(K)}}else{let D=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let B=D,E=O;B<E;B+=3){let F=X.getX(B),R=X.getX(B+1),P=X.getX(B+2);if(K=_7(this,W,J,Z,H,N,q,F,R,P),K)K.faceIndex=Math.floor(B/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(W))for(let D=0,O=U.length;D<O;D++){let B=U[D],E=W[B.materialIndex],F=Math.max(B.start,G.start),R=Math.min(Y.count,Math.min(B.start+B.count,G.start+G.count));for(let P=F,I=R;P<I;P+=3){let A=P,k=P+1,_=P+2;if(K=_7(this,E,J,Z,H,N,q,A,k,_),K)K.faceIndex=Math.floor(P/3),K.face.materialIndex=B.materialIndex,Q.push(K)}}else{let D=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let B=D,E=O;B<E;B+=3){let F=B,R=B+1,P=B+2;if(K=_7(this,W,J,Z,H,N,q,F,R,P),K)K.faceIndex=Math.floor(B/3),Q.push(K)}}}}function AH(J,Q,Z,K,$,W,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,W,$,!0,Y);else H=K.intersectTriangle($,W,X,Q.side===0,Y);if(H===null)return null;P7.copy(Y),P7.applyMatrix4(J.matrixWorld);let N=Z.ray.origin.distanceTo(P7);if(N<Z.near||N>Z.far)return null;return{distance:N,point:P7.clone(),object:J}}function _7(J,Q,Z,K,$,W,X,Y,H,N){J.getVertexPosition(Y,C7),J.getVertexPosition(H,A7),J.getVertexPosition(N,z7);let q=AH(J,Q,Z,K,C7,A7,z7,WW);if(q){let U=new x;if(X8.getBarycoord(WW,C7,A7,z7,U),$)q.uv=X8.getInterpolatedAttribute($,Y,H,N,U,new h0);if(W)q.uv1=X8.getInterpolatedAttribute(W,Y,H,N,U,new h0);if(X){if(q.normal=X8.getInterpolatedAttribute(X,Y,H,N,U,new x),q.normal.dot(K.direction)>0)q.normal.multiplyScalar(-1)}let G={a:Y,b:H,c:N,normal:new x,materialIndex:0};X8.getNormal(C7,A7,z7,G.normal),q.face=G,q.barycoord=U}return q}class DK extends f9{constructor(J=null,Q=1,Z=1,K,$,W,X,Y,H=1003,N=1003,q,U){super(null,W,X,Y,H,N,K,$,q,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var VJ=new o8,zH=new h0(0.5,0.5),T7=new x;class JQ{constructor(J=new W8,Q=new W8,Z=new W8,K=new W8,$=new W8,W=new W8){this.planes=[J,Q,Z,K,$,W]}set(J,Q,Z,K,$,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy(Z),X[3].copy(K),X[4].copy($),X[5].copy(W),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let K=this.planes,$=J.elements,W=$[0],X=$[1],Y=$[2],H=$[3],N=$[4],q=$[5],U=$[6],G=$[7],D=$[8],O=$[9],B=$[10],E=$[11],F=$[12],R=$[13],P=$[14],I=$[15];if(K[0].setComponents(H-W,G-N,E-D,I-F).normalize(),K[1].setComponents(H+W,G+N,E+D,I+F).normalize(),K[2].setComponents(H+X,G+q,E+O,I+R).normalize(),K[3].setComponents(H-X,G-q,E-O,I-R).normalize(),Z)K[4].setComponents(Y,U,B,P).normalize(),K[5].setComponents(H-Y,G-U,E-B,I-P).normalize();else if(K[4].setComponents(H-Y,G-U,E-B,I-P).normalize(),Q===2000)K[5].setComponents(H+Y,G+U,E+B,I+P).normalize();else if(Q===2001)K[5].setComponents(Y,U,B,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();VJ.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();VJ.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(VJ)}intersectsSprite(J){VJ.center.set(0,0,0);let Q=zH.distanceTo(J.center);return VJ.radius=0.7071067811865476+Q,VJ.applyMatrix4(J.matrixWorld),this.intersectsSphere(VJ)}intersectsSphere(J){let Q=this.planes,Z=J.center,K=-J.radius;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(Z)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let K=Q[Z];if(T7.x=K.normal.x>0?J.max.x:J.min.x,T7.y=K.normal.y>0?J.max.y:J.min.y,T7.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(T7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class QQ extends f9{constructor(J=[],Q=301,Z,K,$,W,X,Y,H,N){super(J,Q,Z,K,$,W,X,Y,H,N);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class TJ extends f9{constructor(J,Q,Z=1014,K,$,W,X=1003,Y=1003,H,N=1026,q=1){if(N!==1026&&N!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let U={width:J,height:Q,depth:q};super(U,K,$,W,X,Y,N,Z,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new l6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class EK extends TJ{constructor(J,Q=1014,Z=301,K,$,W=1003,X=1003,Y,H=1026){let N={width:J,height:J,depth:1},q=[N,N,N,N,N,N];super(J,J,Q,Z,K,$,W,X,Y,H);this.image=q,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class ZQ extends f9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class E6 extends U8{constructor(J=1,Q=1,Z=1,K=1,$=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:K,heightSegments:$,depthSegments:W};let X=this;K=Math.floor(K),$=Math.floor($),W=Math.floor(W);let Y=[],H=[],N=[],q=[],U=0,G=0;D("z","y","x",-1,-1,Z,Q,J,W,$,0),D("z","y","x",1,-1,Z,Q,-J,W,$,1),D("x","z","y",1,1,J,Z,Q,K,W,2),D("x","z","y",1,-1,J,Z,-Q,K,W,3),D("x","y","z",1,-1,J,Q,Z,K,$,4),D("x","y","z",-1,-1,J,Q,-Z,K,$,5),this.setIndex(Y),this.setAttribute("position",new u9(H,3)),this.setAttribute("normal",new u9(N,3)),this.setAttribute("uv",new u9(q,2));function D(O,B,E,F,R,P,I,A,k,_,L){let C=P/k,p=I/_,j=P/2,b=I/2,m=A/2,T=k+1,w=_+1,n=0,u=0,$0=new x;for(let i=0;i<w;i++){let Z0=i*p-b;for(let X0=0;X0<T;X0++){let T0=X0*C-j;$0[O]=T0*F,$0[B]=Z0*R,$0[E]=m,H.push($0.x,$0.y,$0.z),$0[O]=0,$0[B]=0,$0[E]=A>0?1:-1,N.push($0.x,$0.y,$0.z),q.push(X0/k),q.push(1-i/_),n+=1}}for(let i=0;i<_;i++)for(let Z0=0;Z0<k;Z0++){let X0=U+Z0+T*i,T0=U+Z0+T*(i+1),_0=U+(Z0+1)+T*(i+1),c0=U+(Z0+1)+T*i;Y.push(X0,T0,c0),Y.push(T0,_0,c0),u+=6}X.addGroup(G,u,L),G+=u,U+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new E6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class i6 extends U8{constructor(J=1,Q=1,Z=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:K};let $=J/2,W=Q/2,X=Math.floor(Z),Y=Math.floor(K),H=X+1,N=Y+1,q=J/X,U=Q/Y,G=[],D=[],O=[],B=[];for(let E=0;E<N;E++){let F=E*U-W;for(let R=0;R<H;R++){let P=R*q-$;D.push(P,-F,0),O.push(0,0,1),B.push(R/X),B.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let F=0;F<X;F++){let R=F+H*E,P=F+H*(E+1),I=F+1+H*(E+1),A=F+1+H*E;G.push(R,P,A),G.push(P,I,A)}this.setIndex(G),this.setAttribute("position",new u9(D,3)),this.setAttribute("normal",new u9(O,3)),this.setAttribute("uv",new u9(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new i6(J.width,J.height,J.widthSegments,J.heightSegments)}}class KQ extends U8{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],Z=new Set,K=new x,$=new x;if(J.index!==null){let W=J.attributes.position,X=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:X.count,materialIndex:0}];for(let H=0,N=Y.length;H<N;++H){let q=Y[H],U=q.start,G=q.count;for(let D=U,O=U+G;D<O;D+=3)for(let B=0;B<3;B++){let E=X.getX(D+B),F=X.getX(D+(B+1)%3);if(K.fromBufferAttribute(W,E),$.fromBufferAttribute(W,F),XW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}}else{let W=J.attributes.position;for(let X=0,Y=W.count/3;X<Y;X++)for(let H=0;H<3;H++){let N=3*X+H,q=3*X+(H+1)%3;if(K.fromBufferAttribute(W,N),$.fromBufferAttribute(W,q),XW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}this.setAttribute("position",new u9(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function XW(J,Q,Z){let K=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,$=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if(Z.has(K)===!0||Z.has($)===!0)return!1;else return Z.add(K),Z.add($),!0}function wJ(J){let Q={};for(let Z in J){Q[Z]={};for(let K in J[Z]){let $=J[Z][K];if(YW($))if($.isRenderTargetTexture)v0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][K]=null;else Q[Z][K]=$.clone();else if(Array.isArray($))if(YW($[0])){let W=[];for(let X=0,Y=$.length;X<Y;X++)W[X]=$[X].clone();Q[Z][K]=W}else Q[Z][K]=$.slice();else Q[Z][K]=$}}return Q}function x9(J){let Q={};for(let Z=0;Z<J.length;Z++){let K=wJ(J[Z]);for(let $ in K)Q[$]=K[$]}return Q}function YW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function kH(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function OK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return i0.workingColorSpace}var o6={clone:wJ,merge:x9},PH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_H=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class a9 extends D6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PH,this.fragmentShader=_H,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=wJ(J.uniforms),this.uniformsGroups=kH(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let W=this.uniforms[K].value;if(W&&W.isTexture)Q.uniforms[K]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[K]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[K]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[K]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[K]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[K]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[K]={type:"m4",value:W.toArray()};else Q.uniforms[K]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let K in this.extensions)if(this.extensions[K]===!0)Z[K]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let Z in J.uniforms){let K=J.uniforms[Z];switch(this.uniforms[Z]={},K.type){case"t":this.uniforms[Z].value=Q[K.value]||null;break;case"c":this.uniforms[Z].value=new t0().setHex(K.value);break;case"v2":this.uniforms[Z].value=new h0().fromArray(K.value);break;case"v3":this.uniforms[Z].value=new x().fromArray(K.value);break;case"v4":this.uniforms[Z].value=new X9().fromArray(K.value);break;case"m3":this.uniforms[Z].value=new x0().fromArray(K.value);break;case"m4":this.uniforms[Z].value=new M9().fromArray(K.value);break;default:this.uniforms[Z].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Z in J.extensions)this.extensions[Z]=J.extensions[Z];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class RK extends a9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MK extends D6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class LK extends D6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function Q6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function HZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class SJ{constructor(J,Q,Z,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,K=Q[Z],$=Q[Z-1];Z:{J:{let W;Q:{K:if(!(J<K)){for(let X=Z+2;;){if(K===void 0){if(J<$)break K;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===X)break;if($=K,K=Q[++Z],J<K)break J}W=Q.length;break Q}if(!(J>=$)){let X=Q[1];if(J<X)Z=2,$=X;for(let Y=Z-2;;){if($===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if(K=$,$=Q[--Z-1],J>=$)break J}W=Z,Z=0;break Q}break Z}while(Z<W){let X=Z+W>>>1;if(J<Q[X])W=X;else Z=X+1}if(K=Q[Z],$=Q[Z-1],$===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,$,K)}return this.interpolate_(Z,$,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,K=this.valueSize,$=J*K;for(let W=0;W!==K;++W)Q[W]=Z[$+W];return Q}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class IK extends SJ{constructor(J,Q,Z,K){super(J,Q,Z,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let K=this.parameterPositions,$=J-2,W=J+1,X=K[$],Y=K[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:$=J,X=2*Q-Z;break;case 2402:$=K.length-2,X=Q+K[$]-K[$+1];break;default:$=J,X=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*Z-Q;break;case 2402:W=1,Y=Z+K[1]-K[0];break;default:W=J-1,Y=Q}let H=(Z-Q)*0.5,N=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-Z),this._offsetPrev=$*N,this._offsetNext=W*N}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this._offsetPrev,q=this._offsetNext,U=this._weightPrev,G=this._weightNext,D=(Z-Q)/(K-Q),O=D*D,B=O*D,E=-U*B+2*U*O-U*D,F=(1+U)*B+(-1.5-2*U)*O+(-0.5+U)*D+1,R=(-1-G)*B+(1.5+G)*O+0.5*D,P=G*B-G*O;for(let I=0;I!==X;++I)$[I]=E*W[N+I]+F*W[H+I]+R*W[Y+I]+P*W[q+I];return $}}class VK extends SJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=(Z-Q)/(K-Q),q=1-N;for(let U=0;U!==X;++U)$[U]=W[H+U]*q+W[Y+U]*N;return $}}class BK extends SJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class CK extends SJ{interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this.inTangents,q=this.outTangents;if(!N||!q){let D=(Z-Q)/(K-Q),O=1-D;for(let B=0;B!==X;++B)$[B]=W[H+B]*O+W[Y+B]*D;return $}let U=X*2,G=J-1;for(let D=0;D!==X;++D){let O=W[H+D],B=W[Y+D],E=G*U+D*2,F=q[E],R=q[E+1],P=J*U+D*2,I=N[P],A=N[P+1],k=wH(Z,Q,F,I,K);$[D]=FX(k,O,R,A,B)}return $}}function FX(J,Q,Z,K,$){let W=1-J;return W*W*W*Q+3*W*W*J*Z+3*W*J*J*K+J*J*J*$}function TH(J,Q,Z,K,$){let W=1-J;return 3*W*W*(Z-Q)+6*W*J*(K-Z)+3*J*J*($-K)}function wH(J,Q,Z,K,$){let W=(J-Q)/($-Q);for(let X=0;X<8;X++){let Y=FX(W,Q,Z,K,$)-J;if(Math.abs(Y)<0.0000000001)break;let H=TH(W,Q,Z,K,$);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class N8{constructor(J,Q,Z,K){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=Q6(Q,this.TimeBufferType),this.values=Q6(Z,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:Q6(J.times,Array),values:Q6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)Z.interpolation=K;if(HZ(J.settings))Z.settings={inTangents:Q6(J.settings.inTangents,Array),outTangents:Q6(J.settings.outTangents,Array)}}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new BK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new VK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new IK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new CK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return v0("KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]*=J;if(HZ(this.settings))HW(this.settings.inTangents,J),HW(this.settings.outTangents,J)}return this}trim(J,Q){let Z=this.times,K=Z.length,$=0,W=K-1;while($!==K&&Z[$]<J)++$;while(W!==-1&&Z[W]>Q)--W;if(++W,$!==0||W!==K){if($>=W)W=Math.max(W,1),$=W-1;let X=this.getValueSize();this.times=Z.slice($,W),this.values=this.values.slice($*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)y0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,K=this.values,$=Z.length;if($===0)y0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==$;X++){let Y=Z[X];if(typeof Y==="number"&&isNaN(Y)){y0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){y0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(K!==void 0){if(cY(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){y0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),K=this.getInterpolation()===2302,$=J.length-1,W=1;for(let X=1;X<$;++X){let Y=!1,H=J[X],N=J[X+1];if(H!==N&&(X!==1||H!==J[0]))if(!K){let q=X*Z,U=q-Z,G=q+Z;for(let D=0;D!==Z;++D){let O=Q[q+D];if(O!==Q[U+D]||O!==Q[G+D]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let q=X*Z,U=W*Z;for(let G=0;G!==Z;++G)Q[U+G]=Q[q+G]}++W}}if($>0){J[W]=J[$];for(let X=$*Z,Y=W*Z,H=0;H!==Z;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);if(K.createInterpolant=this.createInterpolant,HZ(this.settings))K.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return K}}function HW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]*=Q}N8.prototype.ValueTypeName="";N8.prototype.TimeBufferType=Float32Array;N8.prototype.ValueBufferType=Float32Array;N8.prototype.DefaultInterpolation=2301;class jJ extends N8{constructor(J,Q,Z){super(J,Q,Z)}}jJ.prototype.ValueTypeName="bool";jJ.prototype.ValueBufferType=Array;jJ.prototype.DefaultInterpolation=2300;jJ.prototype.InterpolantFactoryMethodLinear=void 0;jJ.prototype.InterpolantFactoryMethodSmooth=void 0;class AK extends N8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}AK.prototype.ValueTypeName="color";class zK extends N8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}zK.prototype.ValueTypeName="number";class kK extends SJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=(Z-Q)/(K-Q),H=J*X;for(let N=H+X;H!==N;H+=4)o9.slerpFlat($,0,W,H-X,W,H,Y);return $}}class $Q extends N8{constructor(J,Q,Z,K){super(J,Q,Z,K)}InterpolantFactoryMethodLinear(J){return new kK(this.times,this.values,this.getValueSize(),J)}}$Q.prototype.ValueTypeName="quaternion";$Q.prototype.InterpolantFactoryMethodSmooth=void 0;class vJ extends N8{constructor(J,Q,Z){super(J,Q,Z)}}vJ.prototype.ValueTypeName="string";vJ.prototype.ValueBufferType=Array;vJ.prototype.DefaultInterpolation=2300;vJ.prototype.InterpolantFactoryMethodLinear=void 0;vJ.prototype.InterpolantFactoryMethodSmooth=void 0;class PK extends N8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}PK.prototype.ValueTypeName="vector";class _K{constructor(J,Q,Z){let K=this,$=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this._abortController=null,this.itemStart=function(N){if(X++,$===!1){if(K.onStart!==void 0)K.onStart(N,W,X)}$=!0},this.itemEnd=function(N){if(W++,K.onProgress!==void 0)K.onProgress(N,W,X);if(W===X){if($=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(N){if(K.onError!==void 0)K.onError(N)},this.resolveURL=function(N){if(N=N.normalize("NFC"),Y)return Y(N);return N},this.setURLModifier=function(N){return Y=N,this},this.addHandler=function(N,q){return H.push(N,q),this},this.removeHandler=function(N){let q=H.indexOf(N);if(q!==-1)H.splice(q,2);return this},this.getHandler=function(N){for(let q=0,U=H.length;q<U;q+=2){let G=H[q],D=H[q+1];if(G.global)G.lastIndex=0;if(G.test(N))return D}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var DX=new _K;class TK{constructor(J){if(this.manager=J!==void 0?J:DX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let Z=this;return new Promise(function(K,$){Z.load(J,K,Q,$)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}TK.DEFAULT_MATERIAL_NAME="__DEFAULT";var w7=new x,S7=new o9,A8=new x;class WQ extends n9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new M9,this.projectionMatrix=new M9,this.projectionMatrixInverse=new M9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(w7,S7,A8),A8.x===1&&A8.y===1&&A8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(w7,S7,A8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,Z=!1){if(super.updateWorldMatrix(J,Q,Z),this.matrixWorld.decompose(w7,S7,A8),A8.x===1&&A8.y===1&&A8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(w7,S7,A8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var HJ=new x,UW=new h0,NW=new h0;class d9 extends WQ{constructor(J=50,Q=1,Z=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=H6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(b6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return H6*2*Math.atan(Math.tan(b6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){HJ.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(HJ.x,HJ.y).multiplyScalar(-J/HJ.z),HJ.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(HJ.x,HJ.y).multiplyScalar(-J/HJ.z)}getViewSize(J,Q){return this.getViewBounds(J,UW,NW),Q.subVectors(NW,UW)}setViewOffset(J,Q,Z,K,$,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(b6*0.5*this.fov)/this.zoom,Z=2*Q,K=this.aspect*Z,$=-0.5*K,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;$+=W.offsetX*K/Y,Q-=W.offsetY*Z/H,K*=W.width/Y,Z*=W.height/H}let X=this.filmOffset;if(X!==0)$+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective($,$+K,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class XQ extends WQ{constructor(J=-1,Q=1,Z=1,K=-1,$=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=K,this.near=$,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,K,$,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,K=(this.top+this.bottom)/2,$=Z-J,W=Z+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,N=(this.top-this.bottom)/this.view.fullHeight/this.zoom;$+=H*this.view.offsetX,W=$+H*this.view.width,X-=N*this.view.offsetY,Y=X-N*this.view.height}this.projectionMatrix.makeOrthographic($,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class YQ extends U8{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var Z6=-90,K6=1;class wK extends n9{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new d9(Z6,K6,J,Q);K.layers=this.layers,this.add(K);let $=new d9(Z6,K6,J,Q);$.layers=this.layers,this.add($);let W=new d9(Z6,K6,J,Q);W.layers=this.layers,this.add(W);let X=new d9(Z6,K6,J,Q);X.layers=this.layers,this.add(X);let Y=new d9(Z6,K6,J,Q);Y.layers=this.layers,this.add(Y);let H=new d9(Z6,K6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,K,$,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),$.up.set(0,0,-1),$.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),$.up.set(0,0,1),$.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[$,W,X,Y,H,N]=this.children,q=J.getRenderTarget(),U=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),D=J.xr.enabled;J.xr.enabled=!1;let O=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget(Z,0,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,$),J.setRenderTarget(Z,1,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget(Z,2,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget(Z,3,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget(Z,4,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),Z.texture.generateMipmaps=O,J.setRenderTarget(Z,5,K),B&&J.autoClear===!1)J.clearDepth();J.render(Q,N),J.setRenderTarget(q,U,G),J.xr.enabled=D,Z.texture.needsPMREMUpdate=!0}}class SK extends d9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var jK="\\[\\]\\.:\\/",SH=new RegExp("["+jK+"]","g"),vK="[^"+jK+"]",jH="[^"+jK.replace("\\.","")+"]",vH=/((?:WC+[\/:])*)/.source.replace("WC",vK),bH=/(WCOD+)?/.source.replace("WCOD",jH),yH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vK),fH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vK),hH=new RegExp("^"+vH+bH+yH+fH+"$"),xH=["material","materials","bones","map"];class EX{constructor(J,Q,Z){let K=Z||W9.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,K=this._bindings[Z];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let K=this._targetGroup.nCachedObjects_,$=Z.length;K!==$;++K)Z[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class W9{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||W9.parseTrackName(Q),this.node=W9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new W9(J,Q,Z);else return new W9.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(SH,"")}static parseTrackName(J){let Q=hH.exec(J);if(Q===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let $=Z.nodeName.substring(K+1);if(xH.indexOf($)!==-1)Z.nodeName=Z.nodeName.substring(0,K),Z.objectName=$}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function($){for(let W=0;W<$.length;W++){let X=$[W];if(X.name===Q||X.uuid===Q)return X;let Y=Z(X.children);if(Y)return Y}return null},K=Z(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)J[Q++]=Z[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,K=Q.propertyName,$=Q.propertyIndex;if(!J)J=W9.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){v0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let H=Q.objectIndex;switch(Z){case"materials":if(!J.material){y0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){y0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){y0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let N=0;N<J.length;N++)if(J[N].name===H){H=N;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){y0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){y0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){y0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(H!==void 0){if(J[H]===void 0){y0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[K];if(W===void 0){let H=Q.nodeName;y0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if($!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){y0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){y0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[$]!==void 0)$=J.morphTargetDictionary[$]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=$}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}W9.Composite=EX;W9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};W9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};W9.prototype.GetterByBindingType=[W9.prototype._getValue_direct,W9.prototype._getValue_array,W9.prototype._getValue_arrayElement,W9.prototype._getValue_toArray];W9.prototype.SetterByBindingTypeAndVersioning=[[W9.prototype._setValue_direct,W9.prototype._setValue_direct_setNeedsUpdate,W9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[W9.prototype._setValue_array,W9.prototype._setValue_array_setNeedsUpdate,W9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[W9.prototype._setValue_arrayElement,W9.prototype._setValue_arrayElement_setNeedsUpdate,W9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[W9.prototype._setValue_fromArray,W9.prototype._setValue_fromArray_setNeedsUpdate,W9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wF=new Float32Array(1);class S8 extends FK{constructor(J,Q,Z=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class a6{constructor(J=1,Q=0,Z=0){this.radius=J,this.phi=Q,this.theta=Z}set(J,Q,Z){return this.radius=J,this.phi=Q,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=g0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){if(this.radius=Math.sqrt(J*J+Q*Q+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(g0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class bK{static{bK.prototype.isMatrix2=!0}constructor(J,Q,Z,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,K){let $=this.elements;return $[0]=J,$[2]=Q,$[1]=Z,$[3]=K,this}}var GW=new x,j7=new x,$6=new x,W6=new x,UZ=new x,gH=new x,pH=new x;class HQ{constructor(J=new x,Q=new x){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){GW.subVectors(J,this.start),j7.subVectors(this.end,this.start);let Z=j7.dot(j7);if(Z===0)return 0;let $=j7.dot(GW)/Z;if(Q)$=g0($,0,1);return $}closestPointToPoint(J,Q,Z){let K=this.closestPointToPointParameter(J,Q);return this.delta(Z).multiplyScalar(K).add(this.start)}distanceSqToLine3(J,Q=gH,Z=pH){let $,W,X=this.start,Y=J.start,H=this.end,N=J.end;$6.subVectors(H,X),W6.subVectors(N,Y),UZ.subVectors(X,Y);let q=$6.dot($6),U=W6.dot(W6),G=W6.dot(UZ);if(q<=0.00000000000000010000000000000001&&U<=0.00000000000000010000000000000001)return Q.copy(X),Z.copy(Y),Q.sub(Z),Q.dot(Q);if(q<=0.00000000000000010000000000000001)$=0,W=G/U,W=g0(W,0,1);else{let D=$6.dot(UZ);if(U<=0.00000000000000010000000000000001)W=0,$=g0(-D/q,0,1);else{let O=$6.dot(W6),B=q*U-O*O;if(B!==0)$=g0((O*G-D*U)/B,0,1);else $=0;if(W=(O*$+G)/U,W<0)W=0,$=g0(-D/q,0,1);else if(W>1)W=1,$=g0((O-D)/q,0,1)}}return Q.copy(X).addScaledVector($6,$),Z.copy(Y).addScaledVector(W6,W),Q.distanceToSquared(Z)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class UQ extends w8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function yK(J,Q,Z,K){let $=mH(K);switch(Z){case 1021:return J*Q;case 1028:return J*Q/$.components*$.byteLength;case 1029:return J*Q/$.components*$.byteLength;case 1030:return J*Q*2/$.components*$.byteLength;case 1031:return J*Q*2/$.components*$.byteLength;case 1022:return J*Q*3/$.components*$.byteLength;case 1023:return J*Q*4/$.components*$.byteLength;case 1033:return J*Q*4/$.components*$.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function mH(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window!=="undefined")if(window.__THREE__)v0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function hX(){let J=null,Q=!1,Z=null,K=null;function $(W,X){K=J.requestAnimationFrame($),Z(W,X)}return{start:function(){if(Q===!0)return;if(Z===null)return;if(J===null)return;K=J.requestAnimationFrame($),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(W){Z=W},setContext:function(W){J=W}}}function dH(J){let Q=new WeakMap;function Z(Y,H){let{array:N,usage:q}=Y,U=N.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,N,q),Y.onUploadCallback();let D;if(N instanceof Float32Array)D=J.FLOAT;else if(typeof Float16Array!=="undefined"&&N instanceof Float16Array)D=J.HALF_FLOAT;else if(N instanceof Uint16Array)if(Y.isFloat16BufferAttribute)D=J.HALF_FLOAT;else D=J.UNSIGNED_SHORT;else if(N instanceof Int16Array)D=J.SHORT;else if(N instanceof Uint32Array)D=J.UNSIGNED_INT;else if(N instanceof Int32Array)D=J.INT;else if(N instanceof Int8Array)D=J.BYTE;else if(N instanceof Uint8Array)D=J.UNSIGNED_BYTE;else if(N instanceof Uint8ClampedArray)D=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+N);return{buffer:G,type:D,bytesPerElement:N.BYTES_PER_ELEMENT,version:Y.version,size:U}}function K(Y,H,N){let{array:q,updateRanges:U}=H;if(J.bindBuffer(N,Y),U.length===0)J.bufferSubData(N,0,q);else{U.sort((D,O)=>D.start-O.start);let G=0;for(let D=1;D<U.length;D++){let O=U[G],B=U[D];if(B.start<=O.start+O.count+1)O.count=Math.max(O.count,B.start+B.count-O.start);else++G,U[G]=B}U.length=G+1;for(let D=0,O=U.length;D<O;D++){let B=U[D];J.bufferSubData(N,B.start*q.BYTES_PER_ELEMENT,q,B.start,B.count)}H.clearUpdateRanges()}H.onUploadCallback()}function $(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let q=Q.get(Y);if(!q||q.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let N=Q.get(Y);if(N===void 0)Q.set(Y,Z(Y,H));else if(N.version<Y.version){if(N.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(N.buffer,Y,H),N.version=Y.version}}return{get:$,remove:W,update:X}}var uH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lH=`#ifdef USE_ALPHAHASH
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
#endif`,cH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oH=`#ifdef USE_AOMAP
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
#endif`,aH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rH=`#ifdef USE_BATCHING
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
#endif`,tH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZU=`#ifdef USE_IRIDESCENCE
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
#endif`,KU=`#ifdef USE_BUMPMAP
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
#endif`,$U=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qU=`#define PI 3.141592653589793
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
} // validated`,FU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DU=`vec3 transformedNormal = objectNormal;
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
#endif`,EU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LU="gl_FragColor = linearToOutputTexel( gl_FragColor );",IU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VU=`#ifdef USE_ENVMAP
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
#endif`,BU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CU=`#ifdef USE_ENVMAP
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
#endif`,AU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zU=`#ifdef USE_ENVMAP
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
#endif`,kU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_U=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wU=`#ifdef USE_GRADIENTMAP
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
}`,SU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bU=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,mU=`uniform sampler2D dfgLUT;
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
	vec3 f0 = material.specularColorBlended;
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,dU=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,lU=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cU=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,nU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eU=`#if defined( USE_POINTS_UV )
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
#endif`,JN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$N=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WN=`#ifdef USE_MORPHTARGETS
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
#endif`,XN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qN=`#ifdef USE_NORMALMAP
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
#endif`,FN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ON=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,kN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_N=`float getShadowMask() {
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
}`,TN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wN=`#ifdef USE_SKINNING
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
#endif`,SN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jN=`#ifdef USE_SKINNING
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
#endif`,vN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hN=`#ifdef USE_TRANSMISSION
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
#endif`,xN=`#ifdef USE_TRANSMISSION
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
#endif`,gN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lN=`uniform sampler2D t2D;
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
}`,cN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oN=`#include <common>
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
}`,aN=`#if DEPTH_PACKING == 3200
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
}`,rN=`#define DISTANCE
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
}`,tN=`#define DISTANCE
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
}`,eN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QG=`uniform float scale;
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
}`,ZG=`uniform vec3 diffuse;
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
}`,KG=`#include <common>
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
}`,$G=`uniform vec3 diffuse;
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
}`,WG=`#define LAMBERT
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
}`,XG=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,YG=`#define MATCAP
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
}`,HG=`#define MATCAP
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
}`,UG=`#define NORMAL
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
}`,NG=`#define NORMAL
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
}`,GG=`#define PHONG
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
}`,qG=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,FG=`#define STANDARD
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
}`,DG=`#define STANDARD
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
}`,EG=`#define TOON
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
}`,OG=`#define TOON
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
}`,RG=`uniform float size;
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
}`,MG=`uniform vec3 diffuse;
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
}`,LG=`#include <common>
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
}`,IG=`uniform vec3 color;
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
}`,VG=`uniform float rotation;
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
}`,BG=`uniform vec3 diffuse;
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
}`,l0={alphahash_fragment:uH,alphahash_pars_fragment:lH,alphamap_fragment:cH,alphamap_pars_fragment:nH,alphatest_fragment:sH,alphatest_pars_fragment:iH,aomap_fragment:oH,aomap_pars_fragment:aH,batching_pars_vertex:rH,batching_vertex:tH,begin_vertex:eH,beginnormal_vertex:JU,bsdfs:QU,iridescence_fragment:ZU,bumpmap_pars_fragment:KU,clipping_planes_fragment:$U,clipping_planes_pars_fragment:WU,clipping_planes_pars_vertex:XU,clipping_planes_vertex:YU,color_fragment:HU,color_pars_fragment:UU,color_pars_vertex:NU,color_vertex:GU,common:qU,cube_uv_reflection_fragment:FU,defaultnormal_vertex:DU,displacementmap_pars_vertex:EU,displacementmap_vertex:OU,emissivemap_fragment:RU,emissivemap_pars_fragment:MU,colorspace_fragment:LU,colorspace_pars_fragment:IU,envmap_fragment:VU,envmap_common_pars_fragment:BU,envmap_pars_fragment:CU,envmap_pars_vertex:AU,envmap_physical_pars_fragment:yU,envmap_vertex:zU,fog_vertex:kU,fog_pars_vertex:PU,fog_fragment:_U,fog_pars_fragment:TU,gradientmap_pars_fragment:wU,lightmap_pars_fragment:SU,lights_lambert_fragment:jU,lights_lambert_pars_fragment:vU,lights_pars_begin:bU,lights_toon_fragment:fU,lights_toon_pars_fragment:hU,lights_phong_fragment:xU,lights_phong_pars_fragment:gU,lights_physical_fragment:pU,lights_physical_pars_fragment:mU,lights_fragment_begin:dU,lights_fragment_maps:uU,lights_fragment_end:lU,lightprobes_pars_fragment:cU,logdepthbuf_fragment:nU,logdepthbuf_pars_fragment:sU,logdepthbuf_pars_vertex:iU,logdepthbuf_vertex:oU,map_fragment:aU,map_pars_fragment:rU,map_particle_fragment:tU,map_particle_pars_fragment:eU,metalnessmap_fragment:JN,metalnessmap_pars_fragment:QN,morphinstance_vertex:ZN,morphcolor_vertex:KN,morphnormal_vertex:$N,morphtarget_pars_vertex:WN,morphtarget_vertex:XN,normal_fragment_begin:YN,normal_fragment_maps:HN,normal_pars_fragment:UN,normal_pars_vertex:NN,normal_vertex:GN,normalmap_pars_fragment:qN,clearcoat_normal_fragment_begin:FN,clearcoat_normal_fragment_maps:DN,clearcoat_pars_fragment:EN,iridescence_pars_fragment:ON,opaque_fragment:RN,packing:MN,premultiplied_alpha_fragment:LN,project_vertex:IN,dithering_fragment:VN,dithering_pars_fragment:BN,roughnessmap_fragment:CN,roughnessmap_pars_fragment:AN,shadowmap_pars_fragment:zN,shadowmap_pars_vertex:kN,shadowmap_vertex:PN,shadowmask_pars_fragment:_N,skinbase_vertex:TN,skinning_pars_vertex:wN,skinning_vertex:SN,skinnormal_vertex:jN,specularmap_fragment:vN,specularmap_pars_fragment:bN,tonemapping_fragment:yN,tonemapping_pars_fragment:fN,transmission_fragment:hN,transmission_pars_fragment:xN,uv_pars_fragment:gN,uv_pars_vertex:pN,uv_vertex:mN,worldpos_vertex:dN,background_vert:uN,background_frag:lN,backgroundCube_vert:cN,backgroundCube_frag:nN,cube_vert:sN,cube_frag:iN,depth_vert:oN,depth_frag:aN,distance_vert:rN,distance_frag:tN,equirect_vert:eN,equirect_frag:JG,linedashed_vert:QG,linedashed_frag:ZG,meshbasic_vert:KG,meshbasic_frag:$G,meshlambert_vert:WG,meshlambert_frag:XG,meshmatcap_vert:YG,meshmatcap_frag:HG,meshnormal_vert:UG,meshnormal_frag:NG,meshphong_vert:GG,meshphong_frag:qG,meshphysical_vert:FG,meshphysical_frag:DG,meshtoon_vert:EG,meshtoon_frag:OG,points_vert:RG,points_frag:MG,shadow_vert:LG,shadow_frag:IG,sprite_vert:VG,sprite_frag:BG},G0={common:{diffuse:{value:new t0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new x0},alphaMap:{value:null},alphaMapTransform:{value:new x0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new x0}},envmap:{envMap:{value:null},envMapRotation:{value:new x0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new x0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new x0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new x0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new x0},normalScale:{value:new h0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new x0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new x0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new x0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new x0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new t0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new t0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new x0},alphaTest:{value:0},uvTransform:{value:new x0}},sprite:{diffuse:{value:new t0(16777215)},opacity:{value:1},center:{value:new h0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new x0},alphaMap:{value:null},alphaMapTransform:{value:new x0},alphaTest:{value:0}}},l9={basic:{uniforms:x9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:l0.meshbasic_vert,fragmentShader:l0.meshbasic_frag},lambert:{uniforms:x9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new t0(0)},envMapIntensity:{value:1}}]),vertexShader:l0.meshlambert_vert,fragmentShader:l0.meshlambert_frag},phong:{uniforms:x9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new t0(0)},specular:{value:new t0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:l0.meshphong_vert,fragmentShader:l0.meshphong_frag},standard:{uniforms:x9([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new t0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag},toon:{uniforms:x9([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new t0(0)}}]),vertexShader:l0.meshtoon_vert,fragmentShader:l0.meshtoon_frag},matcap:{uniforms:x9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:l0.meshmatcap_vert,fragmentShader:l0.meshmatcap_frag},points:{uniforms:x9([G0.points,G0.fog]),vertexShader:l0.points_vert,fragmentShader:l0.points_frag},dashed:{uniforms:x9([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:l0.linedashed_vert,fragmentShader:l0.linedashed_frag},depth:{uniforms:x9([G0.common,G0.displacementmap]),vertexShader:l0.depth_vert,fragmentShader:l0.depth_frag},normal:{uniforms:x9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:l0.meshnormal_vert,fragmentShader:l0.meshnormal_frag},sprite:{uniforms:x9([G0.sprite,G0.fog]),vertexShader:l0.sprite_vert,fragmentShader:l0.sprite_frag},background:{uniforms:{uvTransform:{value:new x0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:l0.background_vert,fragmentShader:l0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new x0}},vertexShader:l0.backgroundCube_vert,fragmentShader:l0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:l0.cube_vert,fragmentShader:l0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:l0.equirect_vert,fragmentShader:l0.equirect_frag},distance:{uniforms:x9([G0.common,G0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:l0.distance_vert,fragmentShader:l0.distance_frag},shadow:{uniforms:x9([G0.lights,G0.fog,{color:{value:new t0(0)},opacity:{value:1}}]),vertexShader:l0.shadow_vert,fragmentShader:l0.shadow_frag}};l9.physical={uniforms:x9([l9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new x0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new x0},clearcoatNormalScale:{value:new h0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new x0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new x0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new x0},sheen:{value:0},sheenColor:{value:new t0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new x0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new x0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new x0},transmissionSamplerSize:{value:new h0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new x0},attenuationDistance:{value:0},attenuationColor:{value:new t0(0)},specularColor:{value:new t0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new x0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new x0},anisotropyVector:{value:new h0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new x0}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag};var NQ={r:0,b:0,g:0},CG=new M9,xX=new x0;xX.set(-1,0,0,0,1,0,0,0,1);function AG(J,Q,Z,K,$,W){let X=new t0(0),Y=$===!0?0:1,H,N,q=null,U=0,G=null;function D(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){let I=R.backgroundBlurriness>0;P=Q.get(P,I)}return P}function O(R){let P=!1,I=D(R);if(I===null)E(X,Y);else if(I&&I.isColor)E(I,1),P=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")Z.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||P)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(R,P){let I=D(P);if(I&&(I.isCubeTexture||I.mapping===p6)){if(N===void 0)N=new Q8(new E6(1,1,1),new a9({name:"BackgroundCubeMaterial",uniforms:wJ(l9.backgroundCube.uniforms),vertexShader:l9.backgroundCube.vertexShader,fragmentShader:l9.backgroundCube.fragmentShader,side:s9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),N.geometry.deleteAttribute("normal"),N.geometry.deleteAttribute("uv"),N.onBeforeRender=function(A,k,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(N.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(N);if(N.material.uniforms.envMap.value=I,N.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,N.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,N.material.uniforms.backgroundRotation.value.setFromMatrix4(CG.makeRotationFromEuler(P.backgroundRotation)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1)N.material.uniforms.backgroundRotation.value.premultiply(xX);if(N.material.toneMapped=i0.getTransfer(I.colorSpace)!==q9,q!==I||U!==I.version||G!==J.toneMapping)N.material.needsUpdate=!0,q=I,U=I.version,G=J.toneMapping;N.layers.enableAll(),R.unshift(N,N.geometry,N.material,0,0,null)}else if(I&&I.isTexture){if(H===void 0)H=new Q8(new i6(2,2),new a9({name:"BackgroundMaterial",uniforms:wJ(l9.background.uniforms),vertexShader:l9.background.vertexShader,fragmentShader:l9.background.fragmentShader,side:N6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=I,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.toneMapped=i0.getTransfer(I.colorSpace)!==q9,I.matrixAutoUpdate===!0)I.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(I.matrix),q!==I||U!==I.version||G!==J.toneMapping)H.material.needsUpdate=!0,q=I,U=I.version,G=J.toneMapping;H.layers.enableAll(),R.unshift(H,H.geometry,H.material,0,0,null)}}function E(R,P){R.getRGB(NQ,OK(J)),Z.buffers.color.setClear(NQ.r,NQ.g,NQ.b,P,W)}function F(){if(N!==void 0)N.geometry.dispose(),N.material.dispose(),N=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(R,P=1){X.set(R),Y=P,E(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(R){Y=R,E(X,Y)},render:O,addToRenderList:B,dispose:F}}function zG(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},$=G(null),W=$,X=!1;function Y(j,b,m,T,w){let n=!1,u=U(j,T,m,b);if(W!==u)W=u,N(W.object);if(n=D(j,T,m,w),n)O(j,T,m,w);if(w!==null)Q.update(w,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,I(j,b,m,T),w!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(w).buffer)}}function H(){return J.createVertexArray()}function N(j){return J.bindVertexArray(j)}function q(j){return J.deleteVertexArray(j)}function U(j,b,m,T){let w=T.wireframe===!0,n=K[b.id];if(n===void 0)n={},K[b.id]=n;let u=j.isInstancedMesh===!0?j.id:0,$0=n[u];if($0===void 0)$0={},n[u]=$0;let i=$0[m.id];if(i===void 0)i={},$0[m.id]=i;let Z0=i[w];if(Z0===void 0)Z0=G(H()),i[w]=Z0;return Z0}function G(j){let b=[],m=[],T=[];for(let w=0;w<Z;w++)b[w]=0,m[w]=0,T[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:m,attributeDivisors:T,object:j,attributes:{},index:null}}function D(j,b,m,T){let w=W.attributes,n=b.attributes,u=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=w[i],T0=n[i];if(T0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)T0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)T0=j.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==T0)return!0;if(T0&&X0.data!==T0.data)return!0;u++}if(W.attributesNum!==u)return!0;if(W.index!==T)return!0;return!1}function O(j,b,m,T){let w={},n=b.attributes,u=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=n[i];if(X0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)X0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)X0=j.instanceColor}let T0={};if(T0.attribute=X0,X0&&X0.data)T0.data=X0.data;w[i]=T0,u++}W.attributes=w,W.attributesNum=u,W.index=T}function B(){let j=W.newAttributes;for(let b=0,m=j.length;b<m;b++)j[b]=0}function E(j){F(j,0)}function F(j,b){let{newAttributes:m,enabledAttributes:T,attributeDivisors:w}=W;if(m[j]=1,T[j]===0)J.enableVertexAttribArray(j),T[j]=1;if(w[j]!==b)J.vertexAttribDivisor(j,b),w[j]=b}function R(){let{newAttributes:j,enabledAttributes:b}=W;for(let m=0,T=b.length;m<T;m++)if(b[m]!==j[m])J.disableVertexAttribArray(m),b[m]=0}function P(j,b,m,T,w,n,u){if(u===!0)J.vertexAttribIPointer(j,b,m,w,n);else J.vertexAttribPointer(j,b,m,T,w,n)}function I(j,b,m,T){B();let w=T.attributes,n=m.getAttributes(),u=b.defaultAttributeValues;for(let $0 in n){let i=n[$0];if(i.location>=0){let Z0=w[$0];if(Z0===void 0){if($0==="instanceMatrix"&&j.instanceMatrix)Z0=j.instanceMatrix;if($0==="instanceColor"&&j.instanceColor)Z0=j.instanceColor}if(Z0!==void 0){let{normalized:X0,itemSize:T0}=Z0,_0=Q.get(Z0);if(_0===void 0)continue;let{buffer:c0,type:d0,bytesPerElement:S}=_0,g=d0===J.INT||d0===J.UNSIGNED_INT||Z0.gpuType===BZ;if(Z0.isInterleavedBufferAttribute){let d=Z0.data,a=d.stride,Q0=Z0.offset;if(d.isInstancedInterleavedBuffer){for(let r=0;r<i.locationSize;r++)F(i.location+r,d.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=d.meshPerAttribute*d.count}else for(let r=0;r<i.locationSize;r++)E(i.location+r);J.bindBuffer(J.ARRAY_BUFFER,c0);for(let r=0;r<i.locationSize;r++)P(i.location+r,T0/i.locationSize,d0,X0,a*S,(Q0+T0/i.locationSize*r)*S,g)}else{if(Z0.isInstancedBufferAttribute){for(let d=0;d<i.locationSize;d++)F(i.location+d,Z0.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let d=0;d<i.locationSize;d++)E(i.location+d);J.bindBuffer(J.ARRAY_BUFFER,c0);for(let d=0;d<i.locationSize;d++)P(i.location+d,T0/i.locationSize,d0,X0,T0*S,T0/i.locationSize*d*S,g)}}else if(u!==void 0){let X0=u[$0];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(i.location,X0);break;case 3:J.vertexAttrib3fv(i.location,X0);break;case 4:J.vertexAttrib4fv(i.location,X0);break;default:J.vertexAttrib1fv(i.location,X0)}}}}R()}function A(){C();for(let j in K){let b=K[j];for(let m in b){let T=b[m];for(let w in T){let n=T[w];for(let u in n)q(n[u].object),delete n[u];delete T[w]}}delete K[j]}}function k(j){if(K[j.id]===void 0)return;let b=K[j.id];for(let m in b){let T=b[m];for(let w in T){let n=T[w];for(let u in n)q(n[u].object),delete n[u];delete T[w]}}delete K[j.id]}function _(j){for(let b in K){let m=K[b];for(let T in m){let w=m[T];if(w[j.id]===void 0)continue;let n=w[j.id];for(let u in n)q(n[u].object),delete n[u];delete w[j.id]}}}function L(j){for(let b in K){let m=K[b],T=j.isInstancedMesh===!0?j.id:0,w=m[T];if(w===void 0)continue;for(let n in w){let u=w[n];for(let $0 in u)q(u[$0].object),delete u[$0];delete w[n]}if(delete m[T],Object.keys(m).length===0)delete K[b]}}function C(){if(p(),X=!0,W===$)return;W=$,N(W.object)}function p(){$.geometry=null,$.program=null,$.wireframe=!1}return{setup:Y,reset:C,resetDefaultState:p,dispose:A,releaseStatesOfGeometry:k,releaseStatesOfObject:L,releaseStatesOfProgram:_,initAttributes:B,enableAttribute:E,disableUnusedAttributes:R}}function kG(J,Q,Z){let K;function $(H){K=H}function W(H,N){J.drawArrays(K,H,N),Z.update(N,K,1)}function X(H,N,q){if(q===0)return;J.drawArraysInstanced(K,H,N,q),Z.update(N,K,q)}function Y(H,N,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,N,0,q);let G=0;for(let D=0;D<q;D++)G+=N[D];Z.update(G,K,1)}this.setMode=$,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function PG(J,Q,Z,K){let $;function W(){if($!==void 0)return $;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");$=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else $=0;return $}function X(_){if(_!==T8&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let L=_===_8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==M8&&_!==i8&&!L&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let N=Z.precision!==void 0?Z.precision:"highp",q=H(N);if(q!==N)v0("WebGLRenderer:",N,"not supported, using",q,"instead."),N=q;let U=Z.logarithmicDepthBuffer===!0,G=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if(Z.reversedDepthBuffer===!0&&G===!1)v0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let D=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),R=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),I=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),k=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:N,logarithmicDepthBuffer:U,reversedDepthBuffer:G,maxTextures:D,maxVertexTextures:O,maxTextureSize:B,maxCubemapSize:E,maxAttributes:F,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:I,maxSamples:A,samples:k}}function _G(J){let Q=this,Z=null,K=0,$=!1,W=!1,X=new W8,Y=new x0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(U,G){let D=U.length!==0||G||K!==0||$;return $=G,K=U.length,D},this.beginShadows=function(){W=!0,q(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(U,G){Z=q(U,G,0)},this.setState=function(U,G,D){let{clippingPlanes:O,clipIntersection:B,clipShadows:E}=U,F=J.get(U);if(!$||O===null||O.length===0||W&&!E)if(W)q(null);else N();else{let R=W?0:K,P=R*4,I=F.clippingState||null;H.value=I,I=q(O,G,P,D);for(let A=0;A!==P;++A)I[A]=Z[A];F.clippingState=I,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=R}};function N(){if(H.value!==Z)H.value=Z,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function q(U,G,D,O){let B=U!==null?U.length:0,E=null;if(B!==0){if(E=H.value,O!==!0||E===null){let F=D+B*4,R=G.matrixWorldInverse;if(Y.getNormalMatrix(R),E===null||E.length<F)E=new Float32Array(F);for(let P=0,I=D;P!==B;++P,I+=4)X.copy(U[P]).applyMatrix4(R,Y),X.normal.toArray(E,I),E[I+3]=X.constant}H.value=E,H.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,E}}var R6=4,TG=6,wG=20,SG=256,r6=new XQ,OX=new t0,fK=null,hK=0,xK=0,gK=!1,jG=new x,bJ=new x;class dK{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,Z=0.1,K=100,$={}){let{size:W=256,position:X=jG}=$;fK=this._renderer.getRenderTarget(),hK=this._renderer.getActiveCubeFace(),xK=this._renderer.getActiveMipmapLevel(),gK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Z,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=LX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=MX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(fK,hK,xK),this._renderer.xr.enabled=gK,J.scissorTest=!1,O6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===q6||J.mapping===CJ)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);fK=this._renderer.getRenderTarget(),hK=this._renderer.getActiveCubeFace(),xK=this._renderer.getActiveMipmapLevel(),gK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:i9,minFilter:i9,generateMipmaps:!1,type:_8,format:T8,colorSpace:WK,depthBuffer:!1},K=RX(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=RX(J,Q,Z);let{_lodMax:$}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vG($)),this._blurMaterial=yG($,J,Q),this._ggxMaterial=bG($,J,Q)}return K}_compileMaterial(J){let Q=new Q8(new U8,J);this._renderer.compile(Q,r6)}_sceneToCubeUV(J,Q,Z,K,$){let Y=new d9(90,1,Q,Z),H=[1,-1,1,1,1,1],N=[1,1,1,-1,-1,-1],q=this._renderer,U=q.autoClear,G=q.toneMapping;if(q.getClearColor(OX),q.toneMapping=R8,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(K),q.clearDepth(),q.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Q8(new E6,new e7({name:"PMREM.Background",side:s9,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,B=O.material,E=!1,F=J.background;if(F){if(F.isColor)B.color.copy(F),J.background=null,E=!0}else B.color.copy(OX),E=!0;for(let R=0;R<6;R++){let P=R%3;if(P===0)Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x+N[R],$.y,$.z);else if(P===1)Y.up.set(0,0,H[R]),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y+N[R],$.z);else Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y,$.z+N[R]);let I=this._cubeSize;if(O6(K,P*I,R>2?I:0,I,I),q.setRenderTarget(K),E)q.render(O,Y);q.render(J,Y)}q.toneMapping=G,q.autoClear=U,J.background=F}_textureToCubeUV(J,Q){let Z=this._renderer,K=J.mapping===q6||J.mapping===CJ;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=LX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=MX();let $=K?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=$;let X=$.uniforms;X.envMap.value=J;let Y=this._cubeSize;O6(Q,0,0,3*Y,2*Y),Z.setRenderTarget(Q),Z.render(W,r6)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let $=1;$<K;$++)this._applyGGXFilter(J,$-1,$);Q.autoClear=Z}_applyGGXFilter(J,Q,Z){let K=this._renderer,$=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[Z];X.material=W;let Y=W.uniforms,H=Z/(this._lodMeshes.length-1),N=Q/(this._lodMeshes.length-1),q=Math.sqrt(H*H-N*N),U=H*1.25,G=q*U,{_lodMax:D}=this,O=this._sizeLods[Z],B=3*O*(Z>D-R6?Z-D+R6:0),E=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=D-Q,O6($,B,E,3*O,2*O),K.setRenderTarget($),K.render(X,r6),Y.envMap.value=$.texture,Y.roughness.value=0,Y.mipInt.value=D-Z,O6(J,B,E,3*O,2*O),K.setRenderTarget(J),K.render(X,r6)}_blur(J,Q,Z,K){let $=this._pingPongRenderTarget,W=Math.min(K,Math.PI)/Math.SQRT2;this._blurPass(J,$,Q,Z,W),this._blurPass($,J,Z,Z,W)}_blurPass(J,Q,Z,K,$){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[K];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=$,H.mipInt.value=this._lodMax-Z;let N=this._sizeLods[K],q=3*N*(K>this._lodMax-R6?K-this._lodMax+R6:0),U=4*(this._cubeSize-N);O6(Q,q,U,3*N,2*N),W.setRenderTarget(Q),W.render(Y,r6)}}function vG(J){let Q=[],Z=[],K=J,$=J-R6+1+TG;for(let W=0;W<$;W++){let X=Math.pow(2,K);Q.push(X);let Y=1/(X-2),H=-Y,N=1+Y,q=[H,H,N,H,N,N,H,H,N,N,H,N],U=6,G=6,D=3,O=new Float32Array(D*G*U),B=new Float32Array(D*G*U);for(let F=0;F<U;F++){let R=F%3*2/3-1,P=F>2?0:-1,I=[R,P,0,R+0.6666666666666666,P,0,R+0.6666666666666666,P+1,0,R,P,0,R+0.6666666666666666,P+1,0,R,P+1,0];O.set(I,D*G*F);for(let A=0;A<G;A++){let k=q[A*2]*2-1,_=q[A*2+1]*2-1;if(F===0)bJ.set(1,_,k);else if(F===1)bJ.set(-k,1,-_);else if(F===2)bJ.set(-k,_,1);else if(F===3)bJ.set(-1,_,-k);else if(F===4)bJ.set(-k,-1,_);else bJ.set(k,_,-1);bJ.toArray(B,(F*G+A)*D)}}let E=new U8;if(E.setAttribute("position",new Y8(O,D)),E.setAttribute("outputDirection",new Y8(B,D)),Z.push(new Q8(E,null)),K>R6)K--}return{lodMeshes:Z,sizeLods:Q}}function RX(J,Q,Z){let K=new J8(J,Q,Z);return K.texture.mapping=p6,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function O6(J,Q,Z,K,$){J.viewport.set(Q,Z,K,$),J.scissor.set(Q,Z,K,$)}function bG(J,Q,Z){return new a9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:P8,depthTest:!1,depthWrite:!1})}function yG(J,Q,Z){return new a9({name:"SphericalGaussianBlur",defines:{SAMPLES:wG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:P8,depthTest:!1,depthWrite:!1})}function MX(){return new a9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qQ(),fragmentShader:`

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
		`,blending:P8,depthTest:!1,depthWrite:!1})}function LX(){return new a9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:P8,depthTest:!1,depthWrite:!1})}function qQ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class cK extends J8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},K=[Z,Z,Z,Z,Z,Z];this.texture=new QQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new E6(5,5,5),$=new a9({name:"CubemapFromEquirect",uniforms:wJ(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:s9,blending:P8});$.uniforms.tEquirect.value=Q;let W=new Q8(K,$),X=Q.minFilter;if(Q.minFilter===AJ)Q.minFilter=i9;return new wK(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,Z=!0,K=!0){let $=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,Z,K);J.setRenderTarget($)}}function fG(J){let Q=new WeakMap,Z=new WeakMap,K=null;function $(G,D=!1){if(G===null||G===void 0)return null;if(D)return X(G);return W(G)}function W(G){if(G&&G.isTexture){let D=G.mapping;if(D===y7||D===f7)if(Q.has(G)){let O=Q.get(G).texture;return Y(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let B=new cK(O.height);return B.fromEquirectangularTexture(J,G),Q.set(G,B),G.addEventListener("dispose",N),Y(B.texture,G.mapping)}else return null}}return G}function X(G){if(G&&G.isTexture){let D=G.mapping,O=D===y7||D===f7,B=D===q6||D===CJ;if(O||B){let E=Z.get(G),F=E!==void 0?E.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==F){if(K===null)K=new dK(J);return E=O?K.fromEquirectangular(G,E):K.fromCubemap(G,E),E.texture.pmremVersion=G.pmremVersion,Z.set(G,E),E.texture}else if(E!==void 0)return E.texture;else{let R=G.image;if(O&&R&&R.height>0||B&&R&&H(R)){if(K===null)K=new dK(J);return E=O?K.fromEquirectangular(G):K.fromCubemap(G),E.texture.pmremVersion=G.pmremVersion,Z.set(G,E),G.addEventListener("dispose",q),E.texture}else return null}}}return G}function Y(G,D){if(D===y7)G.mapping=q6;else if(D===f7)G.mapping=CJ;return G}function H(G){let D=0,O=6;for(let B=0;B<O;B++)if(G[B]!==void 0)D++;return D===O}function N(G){let D=G.target;D.removeEventListener("dispose",N);let O=Q.get(D);if(O!==void 0)Q.delete(D),O.dispose()}function q(G){let D=G.target;D.removeEventListener("dispose",q);let O=Z.get(D);if(O!==void 0)Z.delete(D),O.dispose()}function U(){if(Q=new WeakMap,Z=new WeakMap,K!==null)K.dispose(),K=null}return{get:$,dispose:U}}function hG(J){let Q={};function Z(K){if(Q[K]!==void 0)return Q[K];let $=J.getExtension(K);return Q[K]=$,$}return{has:function(K){return Z(K)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(K){let $=Z(K);if($===null)BJ("WebGLRenderer: "+K+" extension not supported.");return $}}}function xG(J,Q,Z,K){let $={},W=new WeakMap;function X(U){let G=U.target;if(G.index!==null)Q.remove(G.index);for(let O in G.attributes)Q.remove(G.attributes[O]);G.removeEventListener("dispose",X),delete $[G.id];let D=W.get(G);if(D)Q.remove(D),W.delete(G);if(K.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;Z.memory.geometries--}function Y(U,G){if($[G.id]===!0)return G;return G.addEventListener("dispose",X),$[G.id]=!0,Z.memory.geometries++,G}function H(U){let G=U.attributes;for(let D in G)Q.update(G[D],J.ARRAY_BUFFER)}function N(U){let G=[],D=U.index,O=U.attributes.position,B=0;if(O===void 0)return;if(D!==null){let R=D.array;B=D.version;for(let P=0,I=R.length;P<I;P+=3){let A=R[P+0],k=R[P+1],_=R[P+2];G.push(A,k,k,_,_,A)}}else{let R=O.array;B=O.version;for(let P=0,I=R.length/3-1;P<I;P+=3){let A=P+0,k=P+1,_=P+2;G.push(A,k,k,_,_,A)}}let E=new(O.count>=65535?t7:r7)(G,1);E.version=B;let F=W.get(U);if(F)Q.remove(F);W.set(U,E)}function q(U){let G=W.get(U);if(G){let D=U.index;if(D!==null){if(G.version<D.version)N(U)}}else N(U);return W.get(U)}return{get:Y,update:H,getWireframeAttribute:q}}function gG(J,Q,Z){let K;function $(U){K=U}let W,X;function Y(U){W=U.type,X=U.bytesPerElement}function H(U,G){J.drawElements(K,G,W,U*X),Z.update(G,K,1)}function N(U,G,D){if(D===0)return;J.drawElementsInstanced(K,G,W,U*X,D),Z.update(G,K,D)}function q(U,G,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,G,0,W,U,0,D);let B=0;for(let E=0;E<D;E++)B+=G[E];Z.update(B,K,1)}this.setMode=$,this.setIndex=Y,this.render=H,this.renderInstances=N,this.renderMultiDraw=q}function pG(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function K(W,X,Y){switch(Z.calls++,X){case J.TRIANGLES:Z.triangles+=Y*(W/3);break;case J.LINES:Z.lines+=Y*(W/2);break;case J.LINE_STRIP:Z.lines+=Y*(W-1);break;case J.LINE_LOOP:Z.lines+=Y*W;break;case J.POINTS:Z.points+=Y*W;break;default:y0("WebGLInfo: Unknown draw mode:",X);break}}function $(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:$,update:K}}function mG(J,Q,Z){let K=new WeakMap,$=new X9;function W(X,Y,H){let N=X.morphTargetInfluences,q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,U=q!==void 0?q.length:0,G=K.get(Y);if(G===void 0||G.count!==U){let C=function(){_.dispose(),K.delete(Y),Y.removeEventListener("dispose",C)};if(G!==void 0)G.texture.dispose();let D=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],R=Y.morphAttributes.color||[],P=0;if(D===!0)P=1;if(O===!0)P=2;if(B===!0)P=3;let I=Y.attributes.position.count*P,A=1;if(I>Q.maxTextureSize)A=Math.ceil(I/Q.maxTextureSize),I=Q.maxTextureSize;let k=new Float32Array(I*A*4*U),_=new i7(k,I,A,U);_.type=i8,_.needsUpdate=!0;let L=P*4;for(let p=0;p<U;p++){let j=E[p],b=F[p],m=R[p],T=I*A*4*p;for(let w=0;w<j.count;w++){let n=w*L;if(D===!0)$.fromBufferAttribute(j,w),k[T+n+0]=$.x,k[T+n+1]=$.y,k[T+n+2]=$.z,k[T+n+3]=0;if(O===!0)$.fromBufferAttribute(b,w),k[T+n+4]=$.x,k[T+n+5]=$.y,k[T+n+6]=$.z,k[T+n+7]=0;if(B===!0)$.fromBufferAttribute(m,w),k[T+n+8]=$.x,k[T+n+9]=$.y,k[T+n+10]=$.z,k[T+n+11]=m.itemSize===4?$.w:1}}G={count:U,texture:_,size:new h0(I,A)},K.set(Y,G),Y.addEventListener("dispose",C)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,Z);else{let D=0;for(let B=0;B<N.length;B++)D+=N[B];let O=Y.morphTargetsRelative?1:1-D;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",N)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Z),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function dG(J,Q,Z,K,$){let W=new WeakMap;function X(N){let q=$.render.frame,U=N.geometry,G=Q.get(N,U);if(W.get(G)!==q)Q.update(G),W.set(G,q);if(N.isInstancedMesh){if(N.hasEventListener("dispose",H)===!1)N.addEventListener("dispose",H);if(W.get(N)!==q){if(Z.update(N.instanceMatrix,J.ARRAY_BUFFER),N.instanceColor!==null)Z.update(N.instanceColor,J.ARRAY_BUFFER);W.set(N,q)}}if(N.isSkinnedMesh){let D=N.skeleton;if(W.get(D)!==q)D.update(),W.set(D,q)}return G}function Y(){W=new WeakMap}function H(N){let q=N.target;if(q.removeEventListener("dispose",H),K.releaseStatesOfObject(q),Z.remove(q.instanceMatrix),q.instanceColor!==null)Z.remove(q.instanceColor)}return{update:X,dispose:Y}}var uG={[EZ]:"LINEAR_TONE_MAPPING",[OZ]:"REINHARD_TONE_MAPPING",[RZ]:"CINEON_TONE_MAPPING",[MZ]:"ACES_FILMIC_TONE_MAPPING",[IZ]:"AGX_TONE_MAPPING",[VZ]:"NEUTRAL_TONE_MAPPING",[LZ]:"CUSTOM_TONE_MAPPING"};function lG(J,Q,Z,K,$,W){let X=new J8(Q,Z,{type:J,depthBuffer:$,stencilBuffer:W,samples:K?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,N=new U8;N.setAttribute("position",new u9([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new u9([0,2,0,0,2,0],2));let q=new RK({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),U=new Q8(N,q),G=new XQ(-1,1,1,-1,0,1),D=null,O=null,B=!1,E,F=null,R=[],P=!1;this.setSize=function(I,A){if(X.setSize(I,A),Y!==null)Y.setSize(I,A);if(H!==null)H.setSize(I,A);for(let k=0;k<R.length;k++){let _=R[k];if(_.setSize)_.setSize(I,A)}},this.setEffects=function(I){R=I,P=R.length>0&&R[0].isRenderPass===!0;let{width:A,height:k}=X;if(R.length>0&&Y===null)Y=new J8(A,k,{type:_8,depthBuffer:!1,stencilBuffer:!1}),H=new J8(A,k,{type:_8,depthBuffer:!1,stencilBuffer:!1});for(let _=0;_<R.length;_++){let L=R[_];if(L.setSize)L.setSize(A,k)}},this.begin=function(I,A){if(B)return!1;if(I.toneMapping===R8&&R.length===0)return!1;if(F=A,A!==null){let{width:k,height:_}=A;if(X.width!==k||X.height!==_)this.setSize(k,_)}if(P===!1)I.setRenderTarget(X);return E=I.toneMapping,I.toneMapping=R8,!0},this.hasRenderPass=function(){return P},this.end=function(I,A){I.toneMapping=E,B=!0;let k=X,_=Y;for(let L=0;L<R.length;L++){let C=R[L];if(C.enabled===!1)continue;if(C.render(I,_,k,A),C.needsSwap!==!1)k=_,_=_===Y?H:Y}if(D!==I.outputColorSpace||O!==I.toneMapping){if(D=I.outputColorSpace,O=I.toneMapping,q.defines={},i0.getTransfer(D)===q9)q.defines.SRGB_TRANSFER="";let L=uG[O];if(L)q.defines[L]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=k.texture,I.setRenderTarget(F),I.render(U,G),F=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();N.dispose(),q.dispose()}}var gX=new f9,uK=new TJ(1,1),pX=new i7,mX=new qK,dX=new QQ,IX=[],VX=[],BX=new Float32Array(16),CX=new Float32Array(9),AX=new Float32Array(4);function M6(J,Q,Z){let K=J[0];if(K<=0||K>0)return J;let $=Q*Z,W=IX[$];if(W===void 0)W=new Float32Array($),IX[$]=W;if(Q!==0){K.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=Z,J[X].toArray(W,Y)}return W}function z9(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,K=J.length;Z<K;Z++)if(J[Z]!==Q[Z])return!1;return!0}function k9(J,Q){for(let Z=0,K=Q.length;Z<K;Z++)J[Z]=Q[Z]}function FQ(J,Q){let Z=VX[Q];if(Z===void 0)Z=new Int32Array(Q),VX[Q]=Z;for(let K=0;K!==Q;++K)Z[K]=J.allocateTextureUnit();return Z}function cG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function nG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z9(Z,Q))return;J.uniform2fv(this.addr,Q),k9(Z,Q)}}function sG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(z9(Z,Q))return;J.uniform3fv(this.addr,Q),k9(Z,Q)}}function iG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z9(Z,Q))return;J.uniform4fv(this.addr,Q),k9(Z,Q)}}function oG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z9(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),k9(Z,Q)}else{if(z9(Z,K))return;AX.set(K),J.uniformMatrix2fv(this.addr,!1,AX),k9(Z,K)}}function aG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z9(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),k9(Z,Q)}else{if(z9(Z,K))return;CX.set(K),J.uniformMatrix3fv(this.addr,!1,CX),k9(Z,K)}}function rG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z9(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),k9(Z,Q)}else{if(z9(Z,K))return;BX.set(K),J.uniformMatrix4fv(this.addr,!1,BX),k9(Z,K)}}function tG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function eG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z9(Z,Q))return;J.uniform2iv(this.addr,Q),k9(Z,Q)}}function J5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(z9(Z,Q))return;J.uniform3iv(this.addr,Q),k9(Z,Q)}}function Q5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z9(Z,Q))return;J.uniform4iv(this.addr,Q),k9(Z,Q)}}function Z5(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function K5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z9(Z,Q))return;J.uniform2uiv(this.addr,Q),k9(Z,Q)}}function $5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(z9(Z,Q))return;J.uniform3uiv(this.addr,Q),k9(Z,Q)}}function W5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z9(Z,Q))return;J.uniform4uiv(this.addr,Q),k9(Z,Q)}}function X5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_2D_SHADOW)uK.compareFunction=Z.isReversedDepthBuffer()?n7:c7,W=uK;else W=gX;Z.setTexture2D(Q||W,$)}function Y5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture3D(Q||mX,$)}function H5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTextureCube(Q||dX,$)}function U5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture2DArray(Q||pX,$)}function N5(J){switch(J){case 5126:return cG;case 35664:return nG;case 35665:return sG;case 35666:return iG;case 35674:return oG;case 35675:return aG;case 35676:return rG;case 5124:case 35670:return tG;case 35667:case 35671:return eG;case 35668:case 35672:return J5;case 35669:case 35673:return Q5;case 5125:return Z5;case 36294:return K5;case 36295:return $5;case 36296:return W5;case 35678:case 36198:case 36298:case 36306:case 35682:return X5;case 35679:case 36299:case 36307:return Y5;case 35680:case 36300:case 36308:case 36293:return H5;case 36289:case 36303:case 36311:case 36292:return U5}}function G5(J,Q){J.uniform1fv(this.addr,Q)}function q5(J,Q){let Z=M6(Q,this.size,2);J.uniform2fv(this.addr,Z)}function F5(J,Q){let Z=M6(Q,this.size,3);J.uniform3fv(this.addr,Z)}function D5(J,Q){let Z=M6(Q,this.size,4);J.uniform4fv(this.addr,Z)}function E5(J,Q){let Z=M6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function O5(J,Q){let Z=M6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function R5(J,Q){let Z=M6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function M5(J,Q){J.uniform1iv(this.addr,Q)}function L5(J,Q){J.uniform2iv(this.addr,Q)}function I5(J,Q){J.uniform3iv(this.addr,Q)}function V5(J,Q){J.uniform4iv(this.addr,Q)}function B5(J,Q){J.uniform1uiv(this.addr,Q)}function C5(J,Q){J.uniform2uiv(this.addr,Q)}function A5(J,Q){J.uniform3uiv(this.addr,Q)}function z5(J,Q){J.uniform4uiv(this.addr,Q)}function k5(J,Q,Z){let K=this.cache,$=Q.length,W=FQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),k9(K,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=uK;else X=gX;for(let Y=0;Y!==$;++Y)Z.setTexture2D(Q[Y]||X,W[Y])}function P5(J,Q,Z){let K=this.cache,$=Q.length,W=FQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),k9(K,W);for(let X=0;X!==$;++X)Z.setTexture3D(Q[X]||mX,W[X])}function _5(J,Q,Z){let K=this.cache,$=Q.length,W=FQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),k9(K,W);for(let X=0;X!==$;++X)Z.setTextureCube(Q[X]||dX,W[X])}function T5(J,Q,Z){let K=this.cache,$=Q.length,W=FQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),k9(K,W);for(let X=0;X!==$;++X)Z.setTexture2DArray(Q[X]||pX,W[X])}function w5(J){switch(J){case 5126:return G5;case 35664:return q5;case 35665:return F5;case 35666:return D5;case 35674:return E5;case 35675:return O5;case 35676:return R5;case 5124:case 35670:return M5;case 35667:case 35671:return L5;case 35668:case 35672:return I5;case 35669:case 35673:return V5;case 5125:return B5;case 36294:return C5;case 36295:return A5;case 36296:return z5;case 35678:case 36198:case 36298:case 36306:case 35682:return k5;case 35679:case 36299:case 36307:return P5;case 35680:case 36300:case 36308:case 36293:return _5;case 36289:case 36303:case 36311:case 36292:return T5}}class uX{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=N5(Q.type)}}class lX{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=w5(Q.type)}}class cX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let K=this.seq;for(let $=0,W=K.length;$!==W;++$){let X=K[$];X.setValue(J,Q[X.id],Z)}}}var pK=/(\w+)(\])?(\[|\.)?/g;function zX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function S5(J,Q,Z){let K=J.name,$=K.length;pK.lastIndex=0;while(!0){let W=pK.exec(K),X=pK.lastIndex,Y=W[1],H=W[2]==="]",N=W[3];if(H)Y=Y|0;if(N===void 0||N==="["&&X+2===$){zX(Z,N===void 0?new uX(Y,J,Q):new lX(Y,J,Q));break}else{let U=Z.map[Y];if(U===void 0)U=new cX(Y),zX(Z,U);Z=U}}}class J7{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<Z;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);S5(X,Y,this)}let K=[],$=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(W);else $.push(W);if(K.length>0)this.seq=K.concat($)}setValue(J,Q,Z,K){let $=this.map[Q];if($!==void 0)$.setValue(J,Z,K)}setOptional(J,Q,Z){let K=Q[Z];if(K!==void 0)this.setValue(J,Z,K)}static upload(J,Q,Z,K){for(let $=0,W=Q.length;$!==W;++$){let X=Q[$],Y=Z[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let Z=[];for(let K=0,$=J.length;K!==$;++K){let W=J[K];if(W.id in Q)Z.push(W)}return Z}}function kX(J,Q,Z){let K=J.createShader(Q);return J.shaderSource(K,Z),J.compileShader(K),K}var j5=37297,v5=0;function b5(J,Q){let Z=J.split(`
`),K=[],$=Math.max(Q-6,0),W=Math.min(Q+6,Z.length);for(let X=$;X<W;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${Z[X]}`)}return K.join(`
`)}var PX=new x0;function y5(J){i0._getMatrix(PX,i0.workingColorSpace,J);let Q=`mat3( ${PX.elements.map((Z)=>Z.toFixed(4))} )`;switch(i0.getTransfer(J)){case XK:return[Q,"LinearTransferOETF"];case q9:return[Q,"sRGBTransferOETF"];default:return v0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function _X(J,Q,Z){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(K&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return Z.toUpperCase()+`

`+W+`

`+b5(J.getShaderSource(Q),Y)}else return W}function f5(J,Q){let Z=y5(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}var h5={[EZ]:"Linear",[OZ]:"Reinhard",[RZ]:"Cineon",[MZ]:"ACESFilmic",[IZ]:"AgX",[VZ]:"Neutral",[LZ]:"Custom"};function x5(J,Q){let Z=h5[Q];if(Z===void 0)return v0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var GQ=new x;function g5(){i0.getLuminanceCoefficients(GQ);let J=GQ.x.toFixed(4),Q=GQ.y.toFixed(4),Z=GQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function p5(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(e6).join(`
`)}function m5(J){let Q=[];for(let Z in J){let K=J[Z];if(K===!1)continue;Q.push("#define "+Z+" "+K)}return Q.join(`
`)}function d5(J,Q){let Z={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let $=0;$<K;$++){let W=J.getActiveAttrib(Q,$),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;Z[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return Z}function e6(J){return J!==""}function TX(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function wX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var u5=/^[ \t]*#include +<([\w\d./]+)>/gm;function lK(J){return J.replace(u5,c5)}var l5=new Map;function c5(J,Q){let Z=l0[Q];if(Z===void 0){let K=l5.get(Q);if(K!==void 0)Z=l0[K],v0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return lK(Z)}var n5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function SX(J){return J.replace(n5,s5)}function s5(J,Q,Z,K){let $="";for(let W=parseInt(Q);W<parseInt(Z);W++)$+=K.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return $}function jX(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var i5={[x6]:"SHADOWMAP_TYPE_PCF",[U6]:"SHADOWMAP_TYPE_VSM"};function o5(J){return i5[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var a5={[q6]:"ENVMAP_TYPE_CUBE",[CJ]:"ENVMAP_TYPE_CUBE",[p6]:"ENVMAP_TYPE_CUBE_UV"};function r5(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return a5[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var t5={[CJ]:"ENVMAP_MODE_REFRACTION"};function e5(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return t5[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Jq={[mW]:"ENVMAP_BLENDING_MULTIPLY",[dW]:"ENVMAP_BLENDING_MIX",[uW]:"ENVMAP_BLENDING_ADD"};function Qq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Jq[J.combine]||"ENVMAP_BLENDING_NONE"}function Zq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:K,maxMip:Z}}function Kq(J,Q,Z,K){let $=J.getContext(),W=Z.defines,X=Z.vertexShader,Y=Z.fragmentShader,H=o5(Z),N=r5(Z),q=e5(Z),U=Qq(Z),G=Zq(Z),D=p5(Z),O=m5(W),B=$.createProgram(),E,F,R=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(e6).join(`
`),E.length>0)E+=`
`;if(F=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(e6).join(`
`),F.length>0)F+=`
`}else E=[jX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+q:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexNormals?"#define HAS_NORMAL":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(e6).join(`
`),F=[jX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+N:"",Z.envMap?"#define "+q:"",Z.envMap?"#define "+U:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.retroreflection?"#define USE_RETROREFLECTION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor?"#define USE_COLOR":"",Z.vertexAlphas||Z.batchingColor?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==R8?"#define TONE_MAPPING":"",Z.toneMapping!==R8?l0.tonemapping_pars_fragment:"",Z.toneMapping!==R8?x5("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",l0.colorspace_pars_fragment,f5("linearToOutputTexel",Z.outputColorSpace),g5(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(e6).join(`
`);if(X=lK(X),X=TX(X,Z),X=wX(X,Z),Y=lK(Y),Y=TX(Y,Z),Y=wX(Y,Z),X=SX(X),Y=SX(Y),Z.isRawShaderMaterial!==!0)R=`#version 300 es
`,E=[D,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,F=["#define varying in",Z.glslVersion===YK?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===YK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let P=R+E+X,I=R+F+Y,A=kX($,$.VERTEX_SHADER,P),k=kX($,$.FRAGMENT_SHADER,I);if($.attachShader(B,A),$.attachShader(B,k),Z.index0AttributeName!==void 0)$.bindAttribLocation(B,0,Z.index0AttributeName);else if(Z.hasPositionAttribute===!0)$.bindAttribLocation(B,0,"position");$.linkProgram(B);function _(j){if(J.debug.checkShaderErrors){let b=$.getProgramInfoLog(B)||"",m=$.getShaderInfoLog(A)||"",T=$.getShaderInfoLog(k)||"",w=b.trim(),n=m.trim(),u=T.trim(),$0=!0,i=!0;if($.getProgramParameter(B,$.LINK_STATUS)===!1)if($0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError($,B,A,k);else{let Z0=_X($,A,"vertex"),X0=_X($,k,"fragment");y0("WebGLProgram: Shader Error "+$.getError()+" - VALIDATE_STATUS "+$.getProgramParameter(B,$.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+w+`
`+Z0+`
`+X0)}else if(w!=="")v0("WebGLProgram: Program Info Log:",w);else if(n===""||u==="")i=!1;if(i)j.diagnostics={runnable:$0,programLog:w,vertexShader:{log:n,prefix:E},fragmentShader:{log:u,prefix:F}}}$.deleteShader(A),$.deleteShader(k),L=new J7($,B),C=d5($,B)}let L;this.getUniforms=function(){if(L===void 0)_(this);return L};let C;this.getAttributes=function(){if(C===void 0)_(this);return C};let p=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(p===!1)p=$.getProgramParameter(B,j5);return p},this.destroy=function(){K.releaseStatesOfProgram(this),$.deleteProgram(B),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=v5++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=A,this.fragmentShader=k,this}var $q=0;class nX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,Z){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new sX(J),Q.set(J,Z);return Z}}class sX{constructor(J){this.id=$q++,this.code=J,this.usedTimes=0}}function Wq(J){return J===PJ||J===u7||J===l7}function Xq(J,Q,Z,K,$,W){let X=new o7,Y=new nX,H=new Set,N=[],q=new Map,U=K.logarithmicDepthBuffer,G=K.precision,D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(L){if(H.add(L),L===0)return"uv";return`uv${L}`}function B(L,C,p,j,b,m){let T=j.fog,w=b.geometry,n=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?j.environment:null,u=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,$0=Q.get(L.envMap||n,u),i=!!$0&&$0.mapping===p6?$0.image.height:null,Z0=D[L.type];if(L.precision!==null){if(G=K.getMaxPrecision(L.precision),G!==L.precision)v0("WebGLProgram.getParameters:",L.precision,"not supported, using",G,"instead.")}let X0=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,T0=X0!==void 0?X0.length:0,_0=0;if(w.morphAttributes.position!==void 0)_0=1;if(w.morphAttributes.normal!==void 0)_0=2;if(w.morphAttributes.color!==void 0)_0=3;let c0,d0,S,g;if(Z0){let F9=l9[Z0];c0=F9.vertexShader,d0=F9.fragmentShader}else{c0=L.vertexShader,d0=L.fragmentShader;let F9=Y.getVertexShaderStage(L),Z9=Y.getFragmentShaderStage(L);Y.update(L,F9,Z9),S=F9.id,g=Z9.id}let d=J.getRenderTarget(),a=J.state.buffers.depth.getReversed(),Q0=b.isInstancedMesh===!0,r=b.isBatchedMesh===!0,A0=!!L.map,q0=!!L.matcap,b0=!!$0,p0=!!L.aoMap,f0=!!L.lightMap,s0=!!L.bumpMap&&L.wireframe===!1,a0=!!L.normalMap,I9=!!L.displacementMap,E9=!!L.emissiveMap,O9=!!L.metalnessMap,v=!!L.roughnessMap,A9=L.anisotropy>0,e0=L.clearcoat>0,N9=L.dispersion>0,z=L.retroreflectivity>0,M=L.iridescence>0,y=L.sheen>0,s=L.transmission>0,W0=A9&&!!L.anisotropyMap,U0=e0&&!!L.clearcoatMap,F0=e0&&!!L.clearcoatNormalMap,t=e0&&!!L.clearcoatRoughnessMap,K0=M&&!!L.iridescenceMap,O0=M&&!!L.iridescenceThicknessMap,C0=y&&!!L.sheenColorMap,N0=y&&!!L.sheenRoughnessMap,H0=!!L.specularMap,w0=!!L.specularColorMap,j0=!!L.specularIntensityMap,J9=s&&!!L.transmissionMap,h=s&&!!L.thicknessMap,D0=!!L.gradientMap,J0=!!L.alphaMap,E0=L.alphaTest>0,I0=!!L.alphaHash,Y0=!!L.extensions,R0=R8;if(L.toneMapped){if(d===null||d.isXRRenderTarget===!0)R0=J.toneMapping}let m0={shaderID:Z0,shaderType:L.type,shaderName:L.name,vertexShader:c0,fragmentShader:d0,defines:L.defines,customVertexShaderID:S,customFragmentShaderID:g,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:G,batching:r,batchingColor:r&&b._colorsTexture!==null,instancing:Q0,instancingColor:Q0&&b.instanceColor!==null,instancingMorph:Q0&&b.morphTexture!==null,outputColorSpace:d===null?J.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:i0.workingColorSpace,alphaToCoverage:!!L.alphaToCoverage,map:A0,matcap:q0,envMap:b0,envMapMode:b0&&$0.mapping,envMapCubeUVHeight:i,aoMap:p0,lightMap:f0,bumpMap:s0,normalMap:a0,displacementMap:I9,emissiveMap:E9,normalMapObjectSpace:a0&&L.normalMapType===JX,normalMapTangentSpace:a0&&L.normalMapType===$K,packedNormalMap:a0&&L.normalMapType===$K&&Wq(L.normalMap.format),metalnessMap:O9,roughnessMap:v,anisotropy:A9,anisotropyMap:W0,clearcoat:e0,clearcoatMap:U0,clearcoatNormalMap:F0,clearcoatRoughnessMap:t,dispersion:N9,retroreflection:z,iridescence:M,iridescenceMap:K0,iridescenceThicknessMap:O0,sheen:y,sheenColorMap:C0,sheenRoughnessMap:N0,specularMap:H0,specularColorMap:w0,specularIntensityMap:j0,transmission:s,transmissionMap:J9,thicknessMap:h,gradientMap:D0,opaque:L.transparent===!1&&L.blending===g6&&L.alphaToCoverage===!1,alphaMap:J0,alphaTest:E0,alphaHash:I0,combine:L.combine,mapUv:A0&&O(L.map.channel),aoMapUv:p0&&O(L.aoMap.channel),lightMapUv:f0&&O(L.lightMap.channel),bumpMapUv:s0&&O(L.bumpMap.channel),normalMapUv:a0&&O(L.normalMap.channel),displacementMapUv:I9&&O(L.displacementMap.channel),emissiveMapUv:E9&&O(L.emissiveMap.channel),metalnessMapUv:O9&&O(L.metalnessMap.channel),roughnessMapUv:v&&O(L.roughnessMap.channel),anisotropyMapUv:W0&&O(L.anisotropyMap.channel),clearcoatMapUv:U0&&O(L.clearcoatMap.channel),clearcoatNormalMapUv:F0&&O(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:t&&O(L.clearcoatRoughnessMap.channel),iridescenceMapUv:K0&&O(L.iridescenceMap.channel),iridescenceThicknessMapUv:O0&&O(L.iridescenceThicknessMap.channel),sheenColorMapUv:C0&&O(L.sheenColorMap.channel),sheenRoughnessMapUv:N0&&O(L.sheenRoughnessMap.channel),specularMapUv:H0&&O(L.specularMap.channel),specularColorMapUv:w0&&O(L.specularColorMap.channel),specularIntensityMapUv:j0&&O(L.specularIntensityMap.channel),transmissionMapUv:J9&&O(L.transmissionMap.channel),thicknessMapUv:h&&O(L.thicknessMap.channel),alphaMapUv:J0&&O(L.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(a0||A9),vertexNormals:!!w.attributes.normal,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!w.attributes.uv&&(A0||J0),fog:!!T,useFog:L.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:L.wireframe===!1&&(L.flatShading===!0||w.attributes.normal===void 0&&a0===!1&&(L.isMeshLambertMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isMeshPhysicalMaterial)),sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:U,reversedDepthBuffer:a,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:T0,morphTextureStride:_0,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:m.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&p.length>0,shadowMapType:J.shadowMap.type,toneMapping:R0,decodeVideoTexture:A0&&L.map.isVideoTexture===!0&&i0.getTransfer(L.map.colorSpace)===q9,decodeVideoTextureEmissive:E9&&L.emissiveMap.isVideoTexture===!0&&i0.getTransfer(L.emissiveMap.colorSpace)===q9,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===k8,flipSided:L.side===s9,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Y0&&L.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y0&&L.extensions.multiDraw===!0||r)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return m0.vertexUv1s=H.has(1),m0.vertexUv2s=H.has(2),m0.vertexUv3s=H.has(3),H.clear(),m0}function E(L){let C=[];if(L.shaderID)C.push(L.shaderID);else C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let p in L.defines)C.push(p),C.push(L.defines[p]);if(L.isRawShaderMaterial===!1)F(C,L),R(C,L),C.push(J.outputColorSpace);return C.push(L.customProgramCacheKey),C.join()}function F(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numSunLights),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numSunLightShadows),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function R(L,C){if(X.disableAll(),C.instancing)X.enable(0);if(C.instancingColor)X.enable(1);if(C.instancingMorph)X.enable(2);if(C.matcap)X.enable(3);if(C.envMap)X.enable(4);if(C.normalMapObjectSpace)X.enable(5);if(C.normalMapTangentSpace)X.enable(6);if(C.clearcoat)X.enable(7);if(C.iridescence)X.enable(8);if(C.alphaTest)X.enable(9);if(C.vertexColors)X.enable(10);if(C.vertexAlphas)X.enable(11);if(C.vertexUv1s)X.enable(12);if(C.vertexUv2s)X.enable(13);if(C.vertexUv3s)X.enable(14);if(C.vertexTangents)X.enable(15);if(C.anisotropy)X.enable(16);if(C.alphaHash)X.enable(17);if(C.batching)X.enable(18);if(C.dispersion)X.enable(19);if(C.retroreflection)X.enable(24);if(C.batchingColor)X.enable(20);if(C.gradientMap)X.enable(21);if(C.packedNormalMap)X.enable(22);if(C.vertexNormals)X.enable(23);if(L.push(X.mask),X.disableAll(),C.fog)X.enable(0);if(C.useFog)X.enable(1);if(C.flatShading)X.enable(2);if(C.logarithmicDepthBuffer)X.enable(3);if(C.reversedDepthBuffer)X.enable(4);if(C.skinning)X.enable(5);if(C.morphTargets)X.enable(6);if(C.morphNormals)X.enable(7);if(C.morphColors)X.enable(8);if(C.premultipliedAlpha)X.enable(9);if(C.shadowMapEnabled)X.enable(10);if(C.doubleSided)X.enable(11);if(C.flipSided)X.enable(12);if(C.useDepthPacking)X.enable(13);if(C.dithering)X.enable(14);if(C.transmission)X.enable(15);if(C.sheen)X.enable(16);if(C.opaque)X.enable(17);if(C.pointsUvs)X.enable(18);if(C.decodeVideoTexture)X.enable(19);if(C.decodeVideoTextureEmissive)X.enable(20);if(C.alphaToCoverage)X.enable(21);if(C.numLightProbeGrids>0)X.enable(22);if(C.hasPositionAttribute)X.enable(23);L.push(X.mask)}function P(L){let C=D[L.type],p;if(C){let j=l9[C];p=o6.clone(j.uniforms)}else p=L.uniforms;return p}function I(L,C){let p=q.get(C);if(p!==void 0)++p.usedTimes;else p=new Kq(J,C,L,$),N.push(p),q.set(C,p);return p}function A(L){if(--L.usedTimes===0){let C=N.indexOf(L);N[C]=N[N.length-1],N.pop(),q.delete(L.cacheKey),L.destroy()}}function k(L){Y.remove(L)}function _(){Y.dispose()}return{getParameters:B,getProgramCacheKey:E,getUniforms:P,acquireProgram:I,releaseProgram:A,releaseShaderCache:k,programs:N,dispose:_}}function Yq(){let J=new WeakMap;function Q(X){return J.has(X)}function Z(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function $(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:Z,remove:K,update:$,dispose:W}}function Hq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function vX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function bX(){let J=[],Q=0,Z=[],K=[],$=[];function W(){Q=0,Z.length=0,K.length=0,$.length=0}function X(G){let D=0;if(G.isInstancedMesh)D+=2;if(G.isSkinnedMesh)D+=1;return D}function Y(G,D,O,B,E,F){let R=J[Q];if(R===void 0)R={id:G.id,object:G,geometry:D,material:O,materialVariant:X(G),groupOrder:B,renderOrder:G.renderOrder,z:E,group:F},J[Q]=R;else R.id=G.id,R.object=G,R.geometry=D,R.material=O,R.materialVariant=X(G),R.groupOrder=B,R.renderOrder=G.renderOrder,R.z=E,R.group=F;return Q++,R}function H(G,D,O,B,E,F,R){if(R.reversedDepth===!0)E=-E;let P=Y(G,D,O,B,E,F);if(O.transmission>0)K.push(P);else if(O.transparent===!0)$.push(P);else Z.push(P)}function N(G,D,O,B,E,F){let R=Y(G,D,O,B,E,F);if(O.transmission>0)K.unshift(R);else if(O.transparent===!0)$.unshift(R);else Z.unshift(R)}function q(G,D){if(Z.length>1)Z.sort(G||Hq);if(K.length>1)K.sort(D||vX);if($.length>1)$.sort(D||vX)}function U(){for(let G=Q,D=J.length;G<D;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Z,transmissive:K,transparent:$,init:W,push:H,unshift:N,finish:U,sort:q}}function Uq(){let J=new WeakMap;function Q(K,$){let W=J.get(K),X;if(W===void 0)X=new bX,J.set(K,[X]);else if($>=W.length)X=new bX,W.push(X);else X=W[$];return X}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function Nq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={direction:new x,color:new t0};break;case"SpotLight":Z={position:new x,direction:new x,color:new t0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new x,color:new t0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new x,skyColor:new t0,groundColor:new t0};break;case"RectAreaLight":Z={color:new t0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=Z,Z}}}function Gq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var qq=0;function Fq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function Dq(J){let Q=new Nq,Z=Gq(),K={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let N=0;N<9;N++)K.probe.push(new x);let $=new x,W=new M9,X=new M9;function Y(N){let q=0,U=0,G=0;for(let b=0;b<9;b++)K.probe[b].set(0,0,0);let D=0,O=0,B=0,E=0,F=0,R=0,P=0,I=0,A=0,k=0,_=0,L=0,C=0,p=0;N.sort(Fq);for(let b=0,m=N.length;b<m;b++){let T=N[b],w=T.color,n=T.intensity,u=T.distance,$0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===PJ)$0=T.shadow.map.texture;else $0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)q+=w.r*n,U+=w.g*n,G+=w.b*n;else if(T.isLightProbe){for(let i=0;i<9;i++)K.probe[i].addScaledVector(T.sh.coefficients[i],n);p++}else if(T.isSunLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize.copy(Z0.mapSize).multiply(Z0.getFrameExtents()),K.sunShadow[O]=X0,K.sunShadowMap[O]=$0;let T0=Z0.getViewportCount();for(let _0=0;_0<T0;_0++)K.sunShadowMatrix[B+_0]=Z0.getMatrix(_0),K.sunShadowCascade[B+_0]=Z0._cascadeData[_0];B+=T0,O++}K.sun[D]=i,D++}else if(T.isDirectionalLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.directionalShadow[E]=X0,K.directionalShadowMap[E]=$0,K.directionalShadowMatrix[E]=T.shadow.matrix,A++}K.directional[E]=i,E++}else if(T.isSpotLight){let i=Q.get(T);i.position.setFromMatrixPosition(T.matrixWorld),i.color.copy(w).multiplyScalar(n),i.distance=u,i.coneCos=Math.cos(T.angle),i.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),i.decay=T.decay,K.spot[R]=i;let Z0=T.shadow;if(T.map){if(K.spotLightMap[L]=T.map,L++,Z0.updateMatrices(T),T.castShadow)C++}if(K.spotLightMatrix[R]=Z0.matrix,T.castShadow){let X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.spotShadow[R]=X0,K.spotShadowMap[R]=$0,_++}R++}else if(T.isRectAreaLight){let i=Q.get(T);i.color.copy(w).multiplyScalar(n),i.halfWidth.set(T.width*0.5,0,0),i.halfHeight.set(0,T.height*0.5,0),K.rectArea[P]=i,P++}else if(T.isPointLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),i.distance=T.distance,i.decay=T.decay,T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,X0.shadowCameraNear=Z0.camera.near,X0.shadowCameraFar=Z0.camera.far,K.pointShadow[F]=X0,K.pointShadowMap[F]=$0,K.pointShadowMatrix[F]=T.shadow.matrix,k++}K.point[F]=i,F++}else if(T.isHemisphereLight){let i=Q.get(T);i.skyColor.copy(T.color).multiplyScalar(n),i.groundColor.copy(T.groundColor).multiplyScalar(n),K.hemi[I]=i,I++}}if(P>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=G0.LTC_FLOAT_1,K.rectAreaLTC2=G0.LTC_FLOAT_2;else K.rectAreaLTC1=G0.LTC_HALF_1,K.rectAreaLTC2=G0.LTC_HALF_2;K.ambient[0]=q,K.ambient[1]=U,K.ambient[2]=G;let j=K.hash;if(j.sunLength!==D||j.directionalLength!==E||j.pointLength!==F||j.spotLength!==R||j.rectAreaLength!==P||j.hemiLength!==I||j.numSunShadows!==O||j.numDirectionalShadows!==A||j.numPointShadows!==k||j.numSpotShadows!==_||j.numSpotMaps!==L||j.numLightProbes!==p)K.sun.length=D,K.directional.length=E,K.spot.length=R,K.rectArea.length=P,K.point.length=F,K.hemi.length=I,K.sunShadow.length=O,K.sunShadowMap.length=O,K.sunShadowMatrix.length=B,K.sunShadowCascade.length=B,K.directionalShadow.length=A,K.directionalShadowMap.length=A,K.directionalShadowMatrix.length=A,K.pointShadow.length=k,K.pointShadowMap.length=k,K.pointShadowMatrix.length=k,K.spotShadow.length=_,K.spotShadowMap.length=_,K.spotLightMatrix.length=_+L-C,K.spotLightMap.length=L,K.numSpotLightShadowsWithMaps=C,K.numLightProbes=p,j.sunLength=D,j.directionalLength=E,j.pointLength=F,j.spotLength=R,j.rectAreaLength=P,j.hemiLength=I,j.numSunShadows=O,j.numDirectionalShadows=A,j.numPointShadows=k,j.numSpotShadows=_,j.numSpotMaps=L,j.numLightProbes=p,K.version=qq++}function H(N,q){let U=0,G=0,D=0,O=0,B=0,E=0,F=q.matrixWorldInverse;for(let R=0,P=N.length;R<P;R++){let I=N[R];if(I.isSunLight){let A=K.sun[U];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(F),U++}else if(I.isDirectionalLight){let A=K.directional[G];A.direction.setFromMatrixPosition(I.matrixWorld),$.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(F),G++}else if(I.isSpotLight){let A=K.spot[O];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(F),A.direction.setFromMatrixPosition(I.matrixWorld),$.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(F),O++}else if(I.isRectAreaLight){let A=K.rectArea[B];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(F),X.identity(),W.copy(I.matrixWorld),W.premultiply(F),X.extractRotation(W),A.halfWidth.set(I.width*0.5,0,0),A.halfHeight.set(0,I.height*0.5,0),A.halfWidth.applyMatrix4(X),A.halfHeight.applyMatrix4(X),B++}else if(I.isPointLight){let A=K.point[D];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(F),D++}else if(I.isHemisphereLight){let A=K.hemi[E];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(F),E++}}}return{setup:Y,setupView:H,state:K}}function yX(J){let Q=new Dq(J),Z=[],K=[],$=[];function W(G){U.camera=G,Z.length=0,K.length=0,$.length=0}function X(G){Z.push(G)}function Y(G){K.push(G)}function H(G){$.push(G)}function N(){Q.setup(Z)}function q(G){Q.setupView(Z,G)}let U={lightsArray:Z,shadowsArray:K,lightProbeGridArray:$,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:U,setupLights:N,setupLightsView:q,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function Eq(J){let Q=new WeakMap;function Z($,W=0){let X=Q.get($),Y;if(X===void 0)Y=new yX(J),Q.set($,[Y]);else if(W>=X.length)Y=new yX(J),X.push(Y);else Y=X[W];return Y}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var Oq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rq=`uniform sampler2D shadow_pass;
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
}`,Mq=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],Lq=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],fX=new M9,t6=new x,mK=new x;function Iq(J,Q,Z){let K=new JQ,$=new h0,W=new h0,X=new X9,Y=new MK,H=new LK,N={},q=Z.maxTextureSize,U={[N6]:s9,[s9]:N6,[k8]:k8},G=new a9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new h0},radius:{value:4}},vertexShader:Oq,fragmentShader:Rq}),D=G.clone();D.defines.HORIZONTAL_PASS=1;let O=new U8;O.setAttribute("position",new Y8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new Q8(O,G),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x6;let F=this.type;this.render=function(k,_,L){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(k.length===0)return;if(this.type===EW)v0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=x6;let C=J.getRenderTarget(),p=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(P8),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let m=F!==this.type;if(m)_.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((w)=>w.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,w=k.length;T<w;T++){let n=k[T],u=n.shadow;if(u===void 0){v0("WebGLShadowMap:",n,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;$.copy(u.mapSize);let $0=u.getFrameExtents();if($.multiply($0),W.copy(u.mapSize),$.x>q||$.y>q){if($.x>q)W.x=Math.floor(q/$0.x),$.x=W.x*$0.x,u.mapSize.x=W.x;if($.y>q)W.y=Math.floor(q/$0.y),$.y=W.y*$0.y,u.mapSize.y=W.y}let i=J.state.buffers.depth.getReversed();if(u.camera._reversedDepth=i,u.map===null||m===!0){if(u.map!==null){if(u.map.depthTexture!==null)u.map.depthTexture.dispose(),u.map.depthTexture=null;u.map.dispose()}if(this.type===U6){if(n.isPointLight){v0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}u.map=new J8($.x,$.y,{format:PJ,type:_8,minFilter:i9,magFilter:i9,generateMipmaps:!1}),u.map.texture.name=n.name+".shadowMap",u.map.depthTexture=new TJ($.x,$.y,i8),u.map.depthTexture.name=n.name+".shadowMapDepth",u.map.depthTexture.format=zJ,u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=qJ,u.map.depthTexture.magFilter=qJ}else{if(n.isPointLight)u.map=new cK($.x),u.map.depthTexture=new EK($.x,FJ);else u.map=new J8($.x,$.y),u.map.depthTexture=new TJ($.x,$.y,FJ);if(u.map.depthTexture.name=n.name+".shadowMap",u.map.depthTexture.format=zJ,this.type===x6)u.map.depthTexture.compareFunction=i?n7:c7,u.map.depthTexture.minFilter=i9,u.map.depthTexture.magFilter=i9;else u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=qJ,u.map.depthTexture.magFilter=qJ}u.camera.updateProjectionMatrix()}if(u.map.isWebGLCubeRenderTarget!==!0&&(u.map.width!==$.x||u.map.height!==$.y))u.map.setSize($.x,$.y);let Z0=u.map.isWebGLCubeRenderTarget?6:u.getViewportCount();if(n.isPointLight!==!0)u.updateMatrices(n,L);for(let X0=0;X0<Z0;X0++){let T0=u.getCamera(X0);if(n.isPointLight){let{camera:_0,matrix:c0}=u,d0=n.distance||_0.far;if(d0!==_0.far)_0.far=d0,_0.updateProjectionMatrix();t6.setFromMatrixPosition(n.matrixWorld),_0.position.copy(t6),mK.copy(_0.position),mK.add(Mq[X0]),_0.up.copy(Lq[X0]),_0.lookAt(mK),_0.updateMatrixWorld(),c0.makeTranslation(-t6.x,-t6.y,-t6.z),fX.multiplyMatrices(_0.projectionMatrix,_0.matrixWorldInverse),u._frustum.setFromProjectionMatrix(fX,_0.coordinateSystem,_0.reversedDepth)}if(u.map.isWebGLCubeRenderTarget)J.setRenderTarget(u.map,X0),J.clear();else{if(X0===0)J.setRenderTarget(u.map),J.clear();let _0=u.getViewport(X0);X.set(W.x*_0.x,W.y*_0.y,W.x*_0.z,W.y*_0.w),b.viewport(X)}K=u.getFrustum(X0),I(_,L,T0,n,this.type)}if(u.isPointLightShadow!==!0&&this.type===U6)R(u,L);u.needsUpdate=!1}F=this.type,E.needsUpdate=!1,J.setRenderTarget(C,p,j)};function R(k,_){let L=Q.update(B);if(G.defines.VSM_SAMPLES!==k.blurSamples)G.defines.VSM_SAMPLES=k.blurSamples,D.defines.VSM_SAMPLES=k.blurSamples,G.needsUpdate=!0,D.needsUpdate=!0;if(k.mapPass===null)k.mapPass=new J8($.x,$.y,{format:PJ,type:_8});else if(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)k.mapPass.setSize(k.map.width,k.map.height);G.uniforms.shadow_pass.value=k.map.depthTexture,G.uniforms.resolution.value.set(k.map.width,k.map.height),G.uniforms.radius.value=k.radius,J.setRenderTarget(k.mapPass),J.clear(),J.renderBufferDirect(_,null,L,G,B,null),D.uniforms.shadow_pass.value=k.mapPass.texture,D.uniforms.resolution.value.set(k.map.width,k.map.height),D.uniforms.radius.value=k.radius,J.setRenderTarget(k.map),J.clear(),J.renderBufferDirect(_,null,L,D,B,null)}function P(k,_,L,C){let p=null,j=L.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(j!==void 0)p=j;else if(p=L.isPointLight===!0?H:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let b=p.uuid,m=_.uuid,T=N[b];if(T===void 0)T={},N[b]=T;let w=T[m];if(w===void 0)w=p.clone(),T[m]=w,_.addEventListener("dispose",A);p=w}if(p.visible=_.visible,p.wireframe=_.wireframe,C===U6)p.side=_.shadowSide!==null?_.shadowSide:_.side;else p.side=_.shadowSide!==null?_.shadowSide:U[_.side];if(p.alphaMap=_.alphaMap,p.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,p.map=_.map,p.clipShadows=_.clipShadows,p.clippingPlanes=_.clippingPlanes,p.clipIntersection=_.clipIntersection,p.displacementMap=_.displacementMap,p.displacementScale=_.displacementScale,p.displacementBias=_.displacementBias,p.wireframeLinewidth=_.wireframeLinewidth,p.linewidth=_.linewidth,L.isPointLight===!0&&p.isMeshDistanceMaterial===!0){let b=J.properties.get(p);b.light=L}return p}function I(k,_,L,C,p){if(k.visible===!1)return;if(k.layers.test(_.layers)&&(k.isMesh||k.isLine||k.isPoints)){if((k.castShadow||k.receiveShadow&&p===U6)&&(!k.frustumCulled||k.intersectsFrustum(K))){k.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,k.matrixWorld);let m=Q.update(k),T=k.material;if(Array.isArray(T)){let w=m.groups;for(let n=0,u=w.length;n<u;n++){let $0=w[n],i=T[$0.materialIndex];if(i&&i.visible){let Z0=P(k,i,C,p);k.onBeforeShadow(J,k,_,L,m,Z0,$0),J.renderBufferDirect(L,null,m,Z0,k,$0),k.onAfterShadow(J,k,_,L,m,Z0,$0)}}}else if(T.visible){let w=P(k,T,C,p);k.onBeforeShadow(J,k,_,L,m,w,null),J.renderBufferDirect(L,null,m,w,k,null),k.onAfterShadow(J,k,_,L,m,w,null)}}}let b=k.children;for(let m=0,T=b.length;m<T;m++)I(b[m],_,L,C,p)}function A(k){k.target.removeEventListener("dispose",A);for(let L in N){let C=N[L],p=k.target.uuid;if(p in C)C[p].dispose(),delete C[p]}}}function Vq(J,Q){function Z(){let h=!1,D0=new X9,J0=null,E0=new X9(0,0,0,0);return{setMask:function(I0){if(J0!==I0&&!h)J.colorMask(I0,I0,I0,I0),J0=I0},setLocked:function(I0){h=I0},setClear:function(I0,Y0,R0,m0,F9){if(F9===!0)I0*=m0,Y0*=m0,R0*=m0;if(D0.set(I0,Y0,R0,m0),E0.equals(D0)===!1)J.clearColor(I0,Y0,R0,m0),E0.copy(D0)},reset:function(){h=!1,J0=null,E0.set(-1,0,0,0)}}}function K(){let h=!1,D0=!1,J0=null,E0=null,I0=null;return{setReversed:function(Y0){if(D0!==Y0){let R0=Q.get("EXT_clip_control");if(Y0)R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.ZERO_TO_ONE_EXT);else R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.NEGATIVE_ONE_TO_ONE_EXT);D0=Y0;let m0=I0;I0=null,this.setClear(m0)}},getReversed:function(){return D0},setTest:function(Y0){if(Y0)d(J.DEPTH_TEST);else a(J.DEPTH_TEST)},setMask:function(Y0){if(J0!==Y0&&!h)J.depthMask(Y0),J0=Y0},setFunc:function(Y0){if(D0)Y0=GX[Y0];if(E0!==Y0){switch(Y0){case bW:J.depthFunc(J.NEVER);break;case yW:J.depthFunc(J.ALWAYS);break;case fW:J.depthFunc(J.LESS);break;case DZ:J.depthFunc(J.LEQUAL);break;case hW:J.depthFunc(J.EQUAL);break;case xW:J.depthFunc(J.GEQUAL);break;case gW:J.depthFunc(J.GREATER);break;case pW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}E0=Y0}},setLocked:function(Y0){h=Y0},setClear:function(Y0){if(I0!==Y0){if(I0=Y0,D0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){h=!1,J0=null,E0=null,I0=null,D0=!1}}}function $(){let h=!1,D0=null,J0=null,E0=null,I0=null,Y0=null,R0=null,m0=null,F9=null;return{setTest:function(Z9){if(!h)if(Z9)d(J.STENCIL_TEST);else a(J.STENCIL_TEST)},setMask:function(Z9){if(D0!==Z9&&!h)J.stencilMask(Z9),D0=Z9},setFunc:function(Z9,B8,p8){if(J0!==Z9||E0!==B8||I0!==p8)J.stencilFunc(Z9,B8,p8),J0=Z9,E0=B8,I0=p8},setOp:function(Z9,B8,p8){if(Y0!==Z9||R0!==B8||m0!==p8)J.stencilOp(Z9,B8,p8),Y0=Z9,R0=B8,m0=p8},setLocked:function(Z9){h=Z9},setClear:function(Z9){if(F9!==Z9)J.clearStencil(Z9),F9=Z9},reset:function(){h=!1,D0=null,J0=null,E0=null,I0=null,Y0=null,R0=null,m0=null,F9=null}}}let W=new Z,X=new K,Y=new $,H=new WeakMap,N=new WeakMap,q={},U={},G={},D=new WeakMap,O=[],B=null,E=!1,F=null,R=null,P=null,I=null,A=null,k=null,_=null,L=new t0(0,0,0),C=0,p=!1,j=null,b=null,m=null,T=null,w=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,$0=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)$0=parseFloat(/^WebGL (\d)/.exec(i)[1]),u=$0>=1;else if(i.indexOf("OpenGL ES")!==-1)$0=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),u=$0>=2;let Z0=null,X0={},T0=J.getParameter(J.SCISSOR_BOX),_0=J.getParameter(J.VIEWPORT),c0=new X9().fromArray(T0),d0=new X9().fromArray(_0);function S(h,D0,J0,E0){let I0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(h,Y0),J.texParameteri(h,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(h,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let R0=0;R0<J0;R0++)if(h===J.TEXTURE_3D||h===J.TEXTURE_2D_ARRAY)J.texImage3D(D0,0,J.RGBA,1,1,E0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(D0+R0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return Y0}let g={};g[J.TEXTURE_2D]=S(J.TEXTURE_2D,J.TEXTURE_2D,1),g[J.TEXTURE_CUBE_MAP]=S(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),g[J.TEXTURE_2D_ARRAY]=S(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),g[J.TEXTURE_3D]=S(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),d(J.DEPTH_TEST),X.setFunc(DZ),s0(!1),a0(NZ),d(J.CULL_FACE),p0(P8);function d(h){if(q[h]!==!0)J.enable(h),q[h]=!0}function a(h){if(q[h]!==!1)J.disable(h),q[h]=!1}function Q0(h,D0){if(G[h]!==D0){if(J.bindFramebuffer(h,D0),G[h]=D0,h===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=D0;if(h===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=D0;return!0}return!1}function r(h,D0){let J0=O,E0=!1;if(h){if(J0=D.get(D0),J0===void 0)J0=[],D.set(D0,J0);let I0=h.textures;if(J0.length!==I0.length||J0[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,R0=I0.length;Y0<R0;Y0++)J0[Y0]=J.COLOR_ATTACHMENT0+Y0;J0.length=I0.length,E0=!0}}else if(J0[0]!==J.BACK)J0[0]=J.BACK,E0=!0;if(E0)J.drawBuffers(J0)}function A0(h){if(B!==h)return J.useProgram(h),B=h,!0;return!1}let q0={[G6]:J.FUNC_ADD,[OW]:J.FUNC_SUBTRACT,[RW]:J.FUNC_REVERSE_SUBTRACT};q0[MW]=J.MIN,q0[b7]=J.MAX;let b0={[LW]:J.ZERO,[IW]:J.ONE,[VW]:J.SRC_COLOR,[CW]:J.SRC_ALPHA,[TW]:J.SRC_ALPHA_SATURATE,[PW]:J.DST_COLOR,[zW]:J.DST_ALPHA,[BW]:J.ONE_MINUS_SRC_COLOR,[AW]:J.ONE_MINUS_SRC_ALPHA,[_W]:J.ONE_MINUS_DST_COLOR,[kW]:J.ONE_MINUS_DST_ALPHA,[wW]:J.CONSTANT_COLOR,[SW]:J.ONE_MINUS_CONSTANT_COLOR,[jW]:J.CONSTANT_ALPHA,[vW]:J.ONE_MINUS_CONSTANT_ALPHA};function p0(h,D0,J0,E0,I0,Y0,R0,m0,F9,Z9){if(h===P8){if(E===!0)a(J.BLEND),E=!1;return}if(E===!1)d(J.BLEND),E=!0;if(h!==v7){if(h!==F||Z9!==p){if(R!==G6||A!==G6)J.blendEquation(J.FUNC_ADD),R=G6,A=G6;if(Z9)switch(h){case g6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case GZ:J.blendFunc(J.ONE,J.ONE);break;case qZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case FZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:y0("WebGLState: Invalid blending: ",h);break}else switch(h){case g6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case GZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case qZ:y0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case FZ:y0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:y0("WebGLState: Invalid blending: ",h);break}P=null,I=null,k=null,_=null,L.set(0,0,0),C=0,F=h,p=Z9}return}if(I0=I0||D0,Y0=Y0||J0,R0=R0||E0,D0!==R||I0!==A)J.blendEquationSeparate(q0[D0],q0[I0]),R=D0,A=I0;if(J0!==P||E0!==I||Y0!==k||R0!==_)J.blendFuncSeparate(b0[J0],b0[E0],b0[Y0],b0[R0]),P=J0,I=E0,k=Y0,_=R0;if(m0.equals(L)===!1||F9!==C)J.blendColor(m0.r,m0.g,m0.b,F9),L.copy(m0),C=F9;F=h,p=!1}function f0(h,D0){h.side===k8?a(J.CULL_FACE):d(J.CULL_FACE);let J0=h.side===s9;if(D0)J0=!J0;s0(J0),h.blending===g6&&h.transparent===!1?p0(P8):p0(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),X.setFunc(h.depthFunc),X.setTest(h.depthTest),X.setMask(h.depthWrite),W.setMask(h.colorWrite);let E0=h.stencilWrite;if(Y.setTest(E0),E0)Y.setMask(h.stencilWriteMask),Y.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),Y.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass);E9(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?d(J.SAMPLE_ALPHA_TO_COVERAGE):a(J.SAMPLE_ALPHA_TO_COVERAGE)}function s0(h){if(j!==h){if(h)J.frontFace(J.CW);else J.frontFace(J.CCW);j=h}}function a0(h){if(h!==FW){if(d(J.CULL_FACE),h!==b)if(h===NZ)J.cullFace(J.BACK);else if(h===DW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a(J.CULL_FACE);b=h}function I9(h){if(h!==m){if(u)J.lineWidth(h);m=h}}function E9(h,D0,J0){if(h){if(d(J.POLYGON_OFFSET_FILL),T!==D0||w!==J0){if(T=D0,w=J0,X.getReversed())D0=-D0;J.polygonOffset(D0,J0)}}else a(J.POLYGON_OFFSET_FILL)}function O9(h){if(h)d(J.SCISSOR_TEST);else a(J.SCISSOR_TEST)}function v(h){if(h===void 0)h=J.TEXTURE0+n-1;if(Z0!==h)J.activeTexture(h),Z0=h}function A9(h,D0,J0){if(J0===void 0)if(Z0===null)J0=J.TEXTURE0+n-1;else J0=Z0;let E0=X0[J0];if(E0===void 0)E0={type:void 0,texture:void 0},X0[J0]=E0;if(E0.type!==h||E0.texture!==D0){if(Z0!==J0)J.activeTexture(J0),Z0=J0;J.bindTexture(h,D0||g[h]),E0.type=h,E0.texture=D0}}function e0(){let h=X0[Z0];if(h!==void 0&&h.type!==void 0)J.bindTexture(h.type,null),h.type=void 0,h.texture=void 0}function N9(){try{J.compressedTexImage2D(...arguments)}catch(h){y0("WebGLState:",h)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(h){y0("WebGLState:",h)}}function M(){try{J.texSubImage2D(...arguments)}catch(h){y0("WebGLState:",h)}}function y(){try{J.texSubImage3D(...arguments)}catch(h){y0("WebGLState:",h)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(h){y0("WebGLState:",h)}}function W0(){try{J.compressedTexSubImage3D(...arguments)}catch(h){y0("WebGLState:",h)}}function U0(){try{J.texStorage2D(...arguments)}catch(h){y0("WebGLState:",h)}}function F0(){try{J.texStorage3D(...arguments)}catch(h){y0("WebGLState:",h)}}function t(){try{J.texImage2D(...arguments)}catch(h){y0("WebGLState:",h)}}function K0(){try{J.texImage3D(...arguments)}catch(h){y0("WebGLState:",h)}}function O0(h){if(U[h]!==void 0)return U[h];else return J.getParameter(h)}function C0(h,D0){if(U[h]!==D0)J.pixelStorei(h,D0),U[h]=D0}function N0(h){if(c0.equals(h)===!1)J.scissor(h.x,h.y,h.z,h.w),c0.copy(h)}function H0(h){if(d0.equals(h)===!1)J.viewport(h.x,h.y,h.z,h.w),d0.copy(h)}function w0(h,D0){let J0=N.get(D0);if(J0===void 0)J0=new WeakMap,N.set(D0,J0);let E0=J0.get(h);if(E0===void 0)E0=J.getUniformBlockIndex(D0,h.name),J0.set(h,E0)}function j0(h,D0){let E0=N.get(D0).get(h);if(H.get(D0)!==E0)J.uniformBlockBinding(D0,E0,h.__bindingPointIndex),H.set(D0,E0)}function J9(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),q={},U={},Z0=null,X0={},G={},D=new WeakMap,O=[],B=null,E=!1,F=null,R=null,P=null,I=null,A=null,k=null,_=null,L=new t0(0,0,0),C=0,p=!1,j=null,b=null,m=null,T=null,w=null,c0.set(0,0,J.canvas.width,J.canvas.height),d0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:d,disable:a,bindFramebuffer:Q0,drawBuffers:r,useProgram:A0,setBlending:p0,setMaterial:f0,setFlipSided:s0,setCullFace:a0,setLineWidth:I9,setPolygonOffset:E9,setScissorTest:O9,activeTexture:v,bindTexture:A9,unbindTexture:e0,compressedTexImage2D:N9,compressedTexImage3D:z,texImage2D:t,texImage3D:K0,pixelStorei:C0,getParameter:O0,updateUBOMapping:w0,uniformBlockBinding:j0,texStorage2D:U0,texStorage3D:F0,texSubImage2D:M,texSubImage3D:y,compressedTexSubImage2D:s,compressedTexSubImage3D:W0,scissor:N0,viewport:H0,reset:J9}}function Bq(J,Q,Z,K,$,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),N=new h0,q=new WeakMap,U=new Set,G,D=new WeakMap,O=!1;try{O=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function B(z,M){return O?new OffscreenCanvas(z,M):f6("canvas")}function E(z,M,y){let s=1,W0=N9(z);if(W0.width>y||W0.height>y)s=y/Math.max(W0.width,W0.height);if(s<1)if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&z instanceof VideoFrame){let U0=Math.floor(s*W0.width),F0=Math.floor(s*W0.height);if(G===void 0)G=B(U0,F0);let t=M?B(U0,F0):G;return t.width=U0,t.height=F0,t.getContext("2d").drawImage(z,0,0,U0,F0),v0("WebGLRenderer: Texture has been resized from ("+W0.width+"x"+W0.height+") to ("+U0+"x"+F0+")."),t}else{if("data"in z)v0("WebGLRenderer: Image in DataTexture is too big ("+W0.width+"x"+W0.height+").");return z}return z}function F(z){return z.generateMipmaps}function R(z){J.generateMipmap(z)}function P(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function I(z,M,y,s,W0,U0=!1){if(z!==null){if(J[z]!==void 0)return J[z];v0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let F0;if(s){if(F0=Q.get("EXT_texture_norm16"),!F0)v0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let t=M;if(M===J.RED){if(y===J.FLOAT)t=J.R32F;if(y===J.HALF_FLOAT)t=J.R16F;if(y===J.UNSIGNED_BYTE)t=J.R8;if(y===J.UNSIGNED_SHORT&&F0)t=F0.R16_EXT;if(y===J.SHORT&&F0)t=F0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.R8UI;if(y===J.UNSIGNED_SHORT)t=J.R16UI;if(y===J.UNSIGNED_INT)t=J.R32UI;if(y===J.BYTE)t=J.R8I;if(y===J.SHORT)t=J.R16I;if(y===J.INT)t=J.R32I}if(M===J.RG){if(y===J.FLOAT)t=J.RG32F;if(y===J.HALF_FLOAT)t=J.RG16F;if(y===J.UNSIGNED_BYTE)t=J.RG8;if(y===J.UNSIGNED_SHORT&&F0)t=F0.RG16_EXT;if(y===J.SHORT&&F0)t=F0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.RG8UI;if(y===J.UNSIGNED_SHORT)t=J.RG16UI;if(y===J.UNSIGNED_INT)t=J.RG32UI;if(y===J.BYTE)t=J.RG8I;if(y===J.SHORT)t=J.RG16I;if(y===J.INT)t=J.RG32I}if(M===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.RGB8UI;if(y===J.UNSIGNED_SHORT)t=J.RGB16UI;if(y===J.UNSIGNED_INT)t=J.RGB32UI;if(y===J.BYTE)t=J.RGB8I;if(y===J.SHORT)t=J.RGB16I;if(y===J.INT)t=J.RGB32I}if(M===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)t=J.RGBA16UI;if(y===J.UNSIGNED_INT)t=J.RGBA32UI;if(y===J.BYTE)t=J.RGBA8I;if(y===J.SHORT)t=J.RGBA16I;if(y===J.INT)t=J.RGBA32I}if(M===J.RGB){if(y===J.UNSIGNED_SHORT&&F0)t=F0.RGB16_EXT;if(y===J.SHORT&&F0)t=F0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)t=J.R11F_G11F_B10F}if(M===J.RGBA){let K0=U0?XK:i0.getTransfer(W0);if(y===J.FLOAT)t=J.RGBA32F;if(y===J.HALF_FLOAT)t=J.RGBA16F;if(y===J.UNSIGNED_BYTE)t=K0===q9?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&F0)t=F0.RGBA16_EXT;if(y===J.SHORT&&F0)t=F0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function A(z,M){let y;if(z){if(M===null||M===FJ||M===F6)y=J.DEPTH24_STENCIL8;else if(M===i8)y=J.DEPTH32F_STENCIL8;else if(M===d6)y=J.DEPTH24_STENCIL8,v0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===FJ||M===F6)y=J.DEPTH_COMPONENT24;else if(M===i8)y=J.DEPTH_COMPONENT32F;else if(M===d6)y=J.DEPTH_COMPONENT16;return y}function k(z,M){if(F(z)===!0||z.isFramebufferTexture&&z.minFilter!==qJ&&z.minFilter!==i9)return Math.log2(Math.max(M.width,M.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return M.mipmaps.length;else return 1}function _(z){let M=z.target;if(M.removeEventListener("dispose",_),C(M),M.isVideoTexture)q.delete(M);if(M.isHTMLTexture)U.delete(M)}function L(z){let M=z.target;M.removeEventListener("dispose",L),j(M)}function C(z){let M=K.get(z);if(M.__webglInit===void 0)return;let y=z.source,s=D.get(y);if(s){let W0=s[M.__cacheKey];if(W0.usedTimes--,W0.usedTimes===0)p(z);if(Object.keys(s).length===0)D.delete(y)}K.remove(z)}function p(z){let M=K.get(z);J.deleteTexture(M.__webglTexture);let y=z.source,s=D.get(y);delete s[M.__cacheKey],X.memory.textures--}function j(z){let M=K.get(z);if(z.depthTexture)z.depthTexture.dispose(),K.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(M.__webglFramebuffer[s]))for(let W0=0;W0<M.__webglFramebuffer[s].length;W0++)J.deleteFramebuffer(M.__webglFramebuffer[s][W0]);else J.deleteFramebuffer(M.__webglFramebuffer[s]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[s])}else{if(Array.isArray(M.__webglFramebuffer))for(let s=0;s<M.__webglFramebuffer.length;s++)J.deleteFramebuffer(M.__webglFramebuffer[s]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let s=0;s<M.__webglColorRenderbuffer.length;s++)if(M.__webglColorRenderbuffer[s])J.deleteRenderbuffer(M.__webglColorRenderbuffer[s])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let y=z.textures;for(let s=0,W0=y.length;s<W0;s++){let U0=K.get(y[s]);if(U0.__webglTexture)J.deleteTexture(U0.__webglTexture),X.memory.textures--;K.remove(y[s])}K.remove(z)}let b=0;function m(){b=0}function T(){return b}function w(z){b=z}function n(){let z=b;if(z>=$.maxTextures)v0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+$.maxTextures);return b+=1,z}function u(z){let M=[];return M.push(z.wrapS),M.push(z.wrapT),M.push(z.wrapR||0),M.push(z.magFilter),M.push(z.minFilter),M.push(z.anisotropy),M.push(z.internalFormat),M.push(z.format),M.push(z.type),M.push(z.generateMipmaps),M.push(z.premultiplyAlpha),M.push(z.flipY),M.push(z.unpackAlignment),M.push(z.colorSpace),M.join()}function $0(z,M){let y=K.get(z);if(z.isVideoTexture)A9(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&y.__version!==z.version){let s=z.image;if(s===null)v0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)v0("WebGLRenderer: Texture marked for update but image is incomplete");else{a(y,z,M);return}}else if(z.isExternalTexture)y.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+M)}function i(z,M){let y=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&y.__version!==z.version){a(y,z,M);return}else if(z.isExternalTexture)y.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+M)}function Z0(z,M){let y=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&y.__version!==z.version){a(y,z,M);return}Z.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+M)}function X0(z,M){let y=K.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&y.__version!==z.version){Q0(y,z,M);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+M)}let T0={[lW]:J.REPEAT,[h7]:J.CLAMP_TO_EDGE,[cW]:J.MIRRORED_REPEAT},_0={[qJ]:J.NEAREST,[nW]:J.NEAREST_MIPMAP_NEAREST,[m6]:J.NEAREST_MIPMAP_LINEAR,[i9]:J.LINEAR,[x7]:J.LINEAR_MIPMAP_NEAREST,[AJ]:J.LINEAR_MIPMAP_LINEAR},c0={[ZX]:J.NEVER,[YX]:J.ALWAYS,[KX]:J.LESS,[c7]:J.LEQUAL,[$X]:J.EQUAL,[n7]:J.GEQUAL,[WX]:J.GREATER,[XX]:J.NOTEQUAL};function d0(z,M){if(M.type===i8&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===i9||M.magFilter===x7||M.magFilter===m6||M.magFilter===AJ||M.minFilter===i9||M.minFilter===x7||M.minFilter===m6||M.minFilter===AJ))v0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,T0[M.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,T0[M.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,T0[M.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,_0[M.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,_0[M.minFilter]),M.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,c0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qJ)return;if(M.minFilter!==m6&&M.minFilter!==AJ)return;if(M.type===i8&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||K.get(M).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,$.getMaxAnisotropy())),K.get(M).__currentAnisotropy=M.anisotropy}}}function S(z,M){let y=!1;if(z.__webglInit===void 0)z.__webglInit=!0,M.addEventListener("dispose",_);let s=M.source,W0=D.get(s);if(W0===void 0)W0={},D.set(s,W0);let U0=u(M);if(U0!==z.__cacheKey){if(W0[U0]===void 0)W0[U0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,y=!0;W0[U0].usedTimes++;let F0=W0[z.__cacheKey];if(F0!==void 0){if(W0[z.__cacheKey].usedTimes--,F0.usedTimes===0)p(M)}z.__cacheKey=U0,z.__webglTexture=W0[U0].texture}return y}function g(z,M,y){return Math.floor(Math.floor(z/y)/M)}function d(z,M,y,s){let U0=z.updateRanges;if(U0.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,y,s,M.data);else{U0.sort((C0,N0)=>C0.start-N0.start);let F0=0;for(let C0=1;C0<U0.length;C0++){let N0=U0[F0],H0=U0[C0],w0=N0.start+N0.count,j0=g(H0.start,M.width,4),J9=g(N0.start,M.width,4);if(H0.start<=w0+1&&j0===J9&&g(H0.start+H0.count-1,M.width,4)===j0)N0.count=Math.max(N0.count,H0.start+H0.count-N0.start);else++F0,U0[F0]=H0}U0.length=F0+1;let t=Z.getParameter(J.UNPACK_ROW_LENGTH),K0=Z.getParameter(J.UNPACK_SKIP_PIXELS),O0=Z.getParameter(J.UNPACK_SKIP_ROWS);Z.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let C0=0,N0=U0.length;C0<N0;C0++){let H0=U0[C0],w0=Math.floor(H0.start/4),j0=Math.ceil(H0.count/4),J9=w0%M.width,h=Math.floor(w0/M.width),D0=j0,J0=1;Z.pixelStorei(J.UNPACK_SKIP_PIXELS,J9),Z.pixelStorei(J.UNPACK_SKIP_ROWS,h),Z.texSubImage2D(J.TEXTURE_2D,0,J9,h,D0,1,y,s,M.data)}z.clearUpdateRanges(),Z.pixelStorei(J.UNPACK_ROW_LENGTH,t),Z.pixelStorei(J.UNPACK_SKIP_PIXELS,K0),Z.pixelStorei(J.UNPACK_SKIP_ROWS,O0)}}function a(z,M,y){let s=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)s=J.TEXTURE_3D;let W0=S(z,M),U0=M.source;Z.bindTexture(s,z.__webglTexture,J.TEXTURE0+y);let F0=K.get(U0);if(U0.version!==F0.__version||W0===!0){if(Z.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap!=="undefined"&&M.image instanceof ImageBitmap)===!1){let J0=i0.getPrimaries(i0.workingColorSpace),E0=M.colorSpace===_J?null:i0.getPrimaries(M.colorSpace),I0=M.colorSpace===_J||J0===E0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0)}Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let K0=E(M.image,!1,$.maxTextureSize);K0=e0(M,K0);let O0=W.convert(M.format,M.colorSpace),C0=W.convert(M.type),N0=I(M.internalFormat,O0,C0,M.normalized,M.colorSpace,M.isVideoTexture);d0(s,M);let H0,w0=M.mipmaps,j0=M.isVideoTexture!==!0,J9=F0.__version===void 0||W0===!0,h=U0.dataReady,D0=k(M,K0);if(M.isDepthTexture){if(N0=A(M.format===kJ,M.type),J9)if(j0)Z.texStorage2D(J.TEXTURE_2D,1,N0,K0.width,K0.height);else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,O0,C0,null)}else if(M.isDataTexture)if(w0.length>0){if(j0&&J9)Z.texStorage2D(J.TEXTURE_2D,D0,N0,w0[0].width,w0[0].height);for(let J0=0,E0=w0.length;J0<E0;J0++)if(H0=w0[J0],j0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,C0,H0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,C0,H0.data);M.generateMipmaps=!1}else if(j0){if(J9)Z.texStorage2D(J.TEXTURE_2D,D0,N0,K0.width,K0.height);if(h)d(M,K0,O0,C0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,O0,C0,K0.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(j0&&J9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,D0,N0,w0[0].width,w0[0].height,K0.depth);for(let J0=0,E0=w0.length;J0<E0;J0++)if(H0=w0[J0],M.format!==T8)if(O0!==null)if(j0){if(h)if(M.layerUpdates.size>0){let I0=yK(H0.width,H0.height,M.format,M.type);for(let Y0 of M.layerUpdates){let R0=H0.data.subarray(Y0*I0/H0.data.BYTES_PER_ELEMENT,(Y0+1)*I0/H0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,Y0,H0.width,H0.height,1,O0,R0)}}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,K0.depth,O0,H0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,K0.depth,0,H0.data,0,0);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j0){if(h)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,K0.depth,O0,C0,H0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,K0.depth,0,O0,C0,H0.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(j0&&J9)Z.texStorage2D(J.TEXTURE_2D,D0,N0,w0[0].width,w0[0].height);for(let J0=0,E0=w0.length;J0<E0;J0++)if(H0=w0[J0],M.format!==T8)if(O0!==null)if(j0){if(h)Z.compressedTexSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,H0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,H0.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,C0,H0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,C0,H0.data)}else if(M.isDataArrayTexture)if(j0){if(J9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,D0,N0,K0.width,K0.height,K0.depth);if(h)if(M.layerUpdates.size>0){let J0=yK(K0.width,K0.height,M.format,M.type);for(let E0 of M.layerUpdates){let I0=K0.data.subarray(E0*J0/K0.data.BYTES_PER_ELEMENT,(E0+1)*J0/K0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,E0,K0.width,K0.height,1,O0,C0,I0)}M.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,K0.width,K0.height,K0.depth,O0,C0,K0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,N0,K0.width,K0.height,K0.depth,0,O0,C0,K0.data);else if(M.isData3DTexture)if(j0){if(J9)Z.texStorage3D(J.TEXTURE_3D,D0,N0,K0.width,K0.height,K0.depth);if(h)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,K0.width,K0.height,K0.depth,O0,C0,K0.data)}else Z.texImage3D(J.TEXTURE_3D,0,N0,K0.width,K0.height,K0.depth,0,O0,C0,K0.data);else if(M.isFramebufferTexture){if(J9)if(j0)Z.texStorage2D(J.TEXTURE_2D,D0,N0,K0.width,K0.height);else{let{width:J0,height:E0}=K0;for(let I0=0;I0<D0;I0++)Z.texImage2D(J.TEXTURE_2D,I0,N0,J0,E0,0,O0,C0,null),J0>>=1,E0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let J0=J.canvas;if(!J0.hasAttribute("layoutsubtree"))J0.setAttribute("layoutsubtree","true");if(K0.parentNode!==J0){J0.appendChild(K0),U.add(M),J0.onpaint=(E0)=>{let I0=E0.changedElements;for(let Y0 of U)if(I0.includes(Y0.image))Y0.needsUpdate=!0},J0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,K0);else{let{RGBA:I0,RGBA:Y0,UNSIGNED_BYTE:R0}=J;J.texElementImage2D(J.TEXTURE_2D,0,I0,Y0,R0,K0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(w0.length>0){if(j0&&J9){let J0=N9(w0[0]);Z.texStorage2D(J.TEXTURE_2D,D0,N0,J0.width,J0.height)}for(let J0=0,E0=w0.length;J0<E0;J0++)if(H0=w0[J0],j0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,O0,C0,H0)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,O0,C0,H0);M.generateMipmaps=!1}else if(j0){if(J9){let J0=N9(K0);Z.texStorage2D(J.TEXTURE_2D,D0,N0,J0.width,J0.height)}if(h)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,O0,C0,K0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,O0,C0,K0);if(F(M))R(s);if(F0.__version=U0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function Q0(z,M,y){if(M.image.length!==6)return;let s=S(z,M),W0=M.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+y);let U0=K.get(W0);if(W0.version!==U0.__version||s===!0){Z.activeTexture(J.TEXTURE0+y);let F0=i0.getPrimaries(i0.workingColorSpace),t=M.colorSpace===_J?null:i0.getPrimaries(M.colorSpace),K0=M.colorSpace===_J||F0===t?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,K0);let O0=M.isCompressedTexture||M.image[0].isCompressedTexture,C0=M.image[0]&&M.image[0].isDataTexture,N0=[];for(let Y0=0;Y0<6;Y0++){if(!O0&&!C0)N0[Y0]=E(M.image[Y0],!0,$.maxCubemapSize);else N0[Y0]=C0?M.image[Y0].image:M.image[Y0];N0[Y0]=e0(M,N0[Y0])}let H0=N0[0],w0=W.convert(M.format,M.colorSpace),j0=W.convert(M.type),J9=I(M.internalFormat,w0,j0,M.normalized,M.colorSpace),h=M.isVideoTexture!==!0,D0=U0.__version===void 0||s===!0,J0=W0.dataReady,E0=k(M,H0);d0(J.TEXTURE_CUBE_MAP,M);let I0;if(O0){if(h&&D0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,E0,J9,H0.width,H0.height);for(let Y0=0;Y0<6;Y0++){I0=N0[Y0].mipmaps;for(let R0=0;R0<I0.length;R0++){let m0=I0[R0];if(M.format!==T8)if(w0!==null)if(h){if(J0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,m0.width,m0.height,w0,m0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,J9,m0.width,m0.height,0,m0.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,m0.width,m0.height,w0,j0,m0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,J9,m0.width,m0.height,0,w0,j0,m0.data)}}}else{if(I0=M.mipmaps,h&&D0){if(I0.length>0)E0++;let Y0=N9(N0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,E0,J9,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(C0){if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,N0[Y0].width,N0[Y0].height,w0,j0,N0[Y0].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,J9,N0[Y0].width,N0[Y0].height,0,w0,j0,N0[Y0].data);for(let R0=0;R0<I0.length;R0++){let F9=I0[R0].image[Y0].image;if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,F9.width,F9.height,w0,j0,F9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,J9,F9.width,F9.height,0,w0,j0,F9.data)}}else{if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,w0,j0,N0[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,J9,w0,j0,N0[Y0]);for(let R0=0;R0<I0.length;R0++){let m0=I0[R0];if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,w0,j0,m0.image[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,J9,w0,j0,m0.image[Y0])}}}if(F(M))R(J.TEXTURE_CUBE_MAP);if(U0.__version=W0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function r(z,M,y,s,W0,U0){let F0=W.convert(y.format,y.colorSpace),t=W.convert(y.type),K0=I(y.internalFormat,F0,t,y.normalized,y.colorSpace),O0=K.get(M),C0=K.get(y);if(C0.__renderTarget=M,!O0.__hasExternalTextures){let N0=Math.max(1,M.width>>U0),H0=Math.max(1,M.height>>U0);if(W0===J.TEXTURE_3D||W0===J.TEXTURE_2D_ARRAY)Z.texImage3D(W0,U0,K0,N0,H0,M.depth,0,F0,t,null);else Z.texImage2D(W0,U0,K0,N0,H0,0,F0,t,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,z),v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,W0,C0.__webglTexture,0,O9(M));else if(W0===J.TEXTURE_2D||W0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&W0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,W0,C0.__webglTexture,U0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function A0(z,M,y){if(J.bindRenderbuffer(J.RENDERBUFFER,z),M.depthBuffer){let s=M.depthTexture,W0=s&&s.isDepthTexture?s.type:null,U0=A(M.stencilBuffer,W0),F0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O9(M),U0,M.width,M.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,O9(M),U0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,F0,J.RENDERBUFFER,z)}else{let s=M.textures;for(let W0=0;W0<s.length;W0++){let U0=s[W0],F0=W.convert(U0.format,U0.colorSpace),t=W.convert(U0.type),K0=I(U0.internalFormat,F0,t,U0.normalized,U0.colorSpace);if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O9(M),K0,M.width,M.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,O9(M),K0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function q0(z,M,y){let s=M.isWebGLCubeRenderTarget===!0;if(Z.bindFramebuffer(J.FRAMEBUFFER,z),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W0=K.get(M.depthTexture);if(W0.__renderTarget=M,!W0.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;if(s){if(W0.__webglInit===void 0)W0.__webglInit=!0,M.depthTexture.addEventListener("dispose",_);if(W0.__webglTexture===void 0){W0.__webglTexture=J.createTexture(),Z.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),d0(J.TEXTURE_CUBE_MAP,M.depthTexture);let O0=W.convert(M.depthTexture.format),C0=W.convert(M.depthTexture.type),N0;if(M.depthTexture.format===zJ)N0=J.DEPTH_COMPONENT24;else if(M.depthTexture.format===kJ)N0=J.DEPTH24_STENCIL8;for(let H0=0;H0<6;H0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,N0,M.width,M.height,0,O0,C0,null)}}else $0(M.depthTexture,0);let U0=W0.__webglTexture,F0=O9(M),t=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,K0=M.depthTexture.format===kJ?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===zJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,U0,0,F0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,U0,0);else if(M.depthTexture.format===kJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,U0,0,F0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,U0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function b0(z){let M=K.get(z),y=z.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==z.depthTexture){let s=z.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(s){let W0=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,s.removeEventListener("dispose",W0)};s.addEventListener("dispose",W0),M.__depthDisposeCallback=W0}M.__boundDepthTexture=s}if(z.depthTexture&&!M.__autoAllocateDepthBuffer)if(y)for(let s=0;s<6;s++)q0(M.__webglFramebuffer[s],z,s);else{let s=z.texture.mipmaps;if(s&&s.length>0)q0(M.__webglFramebuffer[0],z,0);else q0(M.__webglFramebuffer,z,0)}else if(y){M.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[s]),M.__webglDepthbuffer[s]===void 0)M.__webglDepthbuffer[s]=J.createRenderbuffer(),A0(M.__webglDepthbuffer[s],z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}else{let s=z.texture.mipmaps;if(s&&s.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),A0(M.__webglDepthbuffer,z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function p0(z,M,y){let s=K.get(z);if(M!==void 0)r(s.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)b0(z)}function f0(z){let M=z.texture,y=K.get(z),s=K.get(M);z.addEventListener("dispose",L);let W0=z.textures,U0=z.isWebGLCubeRenderTarget===!0,F0=W0.length>1;if(!F0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=M.version,X.memory.textures++}if(U0){y.__webglFramebuffer=[];for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer[t]=[];for(let K0=0;K0<M.mipmaps.length;K0++)y.__webglFramebuffer[t][K0]=J.createFramebuffer()}else y.__webglFramebuffer[t]=J.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer=[];for(let t=0;t<M.mipmaps.length;t++)y.__webglFramebuffer[t]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(F0)for(let t=0,K0=W0.length;t<K0;t++){let O0=K.get(W0[t]);if(O0.__webglTexture===void 0)O0.__webglTexture=J.createTexture(),X.memory.textures++}if(z.samples>0&&v(z)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let t=0;t<W0.length;t++){let K0=W0[t];y.__webglColorRenderbuffer[t]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[t]);let O0=W.convert(K0.format,K0.colorSpace),C0=W.convert(K0.type),N0=I(K0.internalFormat,O0,C0,K0.normalized,K0.colorSpace,z.isXRRenderTarget===!0),H0=O9(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,H0,N0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+t,J.RENDERBUFFER,y.__webglColorRenderbuffer[t])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),A0(y.__webglDepthRenderbuffer,z,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){Z.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),d0(J.TEXTURE_CUBE_MAP,M);for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(y.__webglFramebuffer[t][K0],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,K0);else r(y.__webglFramebuffer[t],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0);if(F(M))R(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(F0){for(let t=0,K0=W0.length;t<K0;t++){let O0=W0[t],C0=K.get(O0),N0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)N0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(N0,C0.__webglTexture),d0(N0,O0),r(y.__webglFramebuffer,z,O0,J.COLOR_ATTACHMENT0+t,N0,0),F(O0))R(N0)}Z.unbindTexture()}else{let t=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)t=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(t,s.__webglTexture),d0(t,M),M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(y.__webglFramebuffer[K0],z,M,J.COLOR_ATTACHMENT0,t,K0);else r(y.__webglFramebuffer,z,M,J.COLOR_ATTACHMENT0,t,0);if(F(M))R(t);Z.unbindTexture()}if(z.depthBuffer)b0(z)}function s0(z){let M=z.textures;for(let y=0,s=M.length;y<s;y++){let W0=M[y];if(F(W0)){let U0=P(z),F0=K.get(W0).__webglTexture;Z.bindTexture(U0,F0),R(U0),Z.unbindTexture()}}}let a0=[],I9=[];function E9(z){if(z.samples>0){if(v(z)===!1){let{textures:M,width:y,height:s}=z,W0=J.COLOR_BUFFER_BIT,U0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,F0=K.get(z),t=M.length>1;if(t)for(let O0=0;O0<M.length;O0++)Z.bindFramebuffer(J.FRAMEBUFFER,F0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,F0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,F0.__webglMultisampledFramebuffer);let K0=z.texture.mipmaps;if(K0&&K0.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglFramebuffer);for(let O0=0;O0<M.length;O0++){if(z.resolveDepthBuffer){if(z.depthBuffer)W0|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)W0|=J.STENCIL_BUFFER_BIT}if(t){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,F0.__webglColorRenderbuffer[O0]);let C0=K.get(M[O0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,C0,0)}if(J.blitFramebuffer(0,0,y,s,0,0,y,s,W0,J.NEAREST),H===!0){if(a0.length=0,I9.length=0,a0.push(J.COLOR_ATTACHMENT0+O0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)a0.push(U0),I9.push(U0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,I9);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,a0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),t)for(let O0=0;O0<M.length;O0++){Z.bindFramebuffer(J.FRAMEBUFFER,F0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,F0.__webglColorRenderbuffer[O0]);let C0=K.get(M[O0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,F0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,C0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&H){let M=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function O9(z){return Math.min($.maxSamples,z.samples)}function v(z){let M=K.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function A9(z){let M=X.render.frame;if(q.get(z)!==M)q.set(z,M),z.update()}function e0(z,M){let{colorSpace:y,format:s,type:W0}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return M;if(y!==WK&&y!==_J)if(i0.getTransfer(y)===q9){if(s!==T8||W0!==M8)v0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else y0("WebGLTextures: Unsupported texture color space:",y);return M}function N9(z){if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement)N.width=z.naturalWidth||z.width,N.height=z.naturalHeight||z.height;else if(typeof VideoFrame!=="undefined"&&z instanceof VideoFrame)N.width=z.displayWidth,N.height=z.displayHeight;else N.width=z.width,N.height=z.height;return N}this.allocateTextureUnit=n,this.resetTextureUnits=m,this.getTextureUnits=T,this.setTextureUnits=w,this.setTexture2D=$0,this.setTexture2DArray=i,this.setTexture3D=Z0,this.setTextureCube=X0,this.rebindTextures=p0,this.setupRenderTarget=f0,this.updateRenderTargetMipmap=s0,this.updateMultisampleRenderTarget=E9,this.setupDepthRenderbuffer=b0,this.setupFrameBufferTexture=r,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return Z.buffers.depth.getReversed()}}function Cq(J,Q){function Z(K,$=_J){let W,X=i0.getTransfer($);if(K===M8)return J.UNSIGNED_BYTE;if(K===CZ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===AZ)return J.UNSIGNED_SHORT_5_5_5_1;if(K===oW)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===aW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===sW)return J.BYTE;if(K===iW)return J.SHORT;if(K===d6)return J.UNSIGNED_SHORT;if(K===BZ)return J.INT;if(K===FJ)return J.UNSIGNED_INT;if(K===i8)return J.FLOAT;if(K===_8)return J.HALF_FLOAT;if(K===rW)return J.ALPHA;if(K===tW)return J.RGB;if(K===T8)return J.RGBA;if(K===zJ)return J.DEPTH_COMPONENT;if(K===kJ)return J.DEPTH_STENCIL;if(K===eW)return J.RED;if(K===zZ)return J.RED_INTEGER;if(K===PJ)return J.RG;if(K===kZ)return J.RG_INTEGER;if(K===PZ)return J.RGBA_INTEGER;if(K===g7||K===p7||K===m7||K===d7)if(X===q9)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(K===g7)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===p7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===m7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===d7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(K===g7)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===p7)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===m7)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===d7)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===_Z||K===TZ||K===wZ||K===SZ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(K===_Z)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===TZ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===wZ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===SZ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===jZ||K===vZ||K===bZ||K===yZ||K===fZ||K===u7||K===hZ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(K===jZ||K===vZ)return X===q9?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(K===bZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(K===yZ)return W.COMPRESSED_R11_EAC;if(K===fZ)return W.COMPRESSED_SIGNED_R11_EAC;if(K===u7)return W.COMPRESSED_RG11_EAC;if(K===hZ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===xZ||K===gZ||K===pZ||K===mZ||K===dZ||K===uZ||K===lZ||K===cZ||K===nZ||K===sZ||K===iZ||K===oZ||K===aZ||K===rZ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(K===xZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===gZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===pZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===mZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===dZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===uZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===lZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===cZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===nZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===sZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===iZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===oZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===aZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===rZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===tZ||K===eZ||K===JK)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(K===tZ)return X===q9?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===eZ)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===JK)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===QK||K===ZK||K===l7||K===KK)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(K===QK)return W.COMPRESSED_RED_RGTC1_EXT;if(K===ZK)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===l7)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===KK)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===F6)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:Z}}var Aq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zq=`
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

}`;class iX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new ZQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new a9({vertexShader:Aq,fragmentShader:zq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new Q8(new i6(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oX extends w8{constructor(J,Q){super();let Z=this,K=null,$=1,W=null,X="local-floor",Y=1,H=null,N=null,q=null,U=null,G=null,D=null,O=typeof XRWebGLBinding!=="undefined",B=new iX,E={},F=Q.getContextAttributes(),R=null,P=null,I=[],A=[],k=new h0,_=null,L=null,C=new d9;C.viewport=new X9;let p=new d9;p.viewport=new X9;let j=[C,p],b=new SK,m=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let g=I[S];if(g===void 0)g=new c6,I[S]=g;return g.getTargetRaySpace()},this.getControllerGrip=function(S){let g=I[S];if(g===void 0)g=new c6,I[S]=g;return g.getGripSpace()},this.getHand=function(S){let g=I[S];if(g===void 0)g=new c6,I[S]=g;return g.getHandSpace()};function w(S){let g=A.indexOf(S.inputSource);if(g===-1)return;let d=I[g];if(d!==void 0)d.update(S.inputSource,S.frame,H||W),d.dispatchEvent({type:S.type,data:S.inputSource})}function n(){K.removeEventListener("select",w),K.removeEventListener("selectstart",w),K.removeEventListener("selectend",w),K.removeEventListener("squeeze",w),K.removeEventListener("squeezestart",w),K.removeEventListener("squeezeend",w),K.removeEventListener("end",n),K.removeEventListener("inputsourceschange",u);for(let S=0;S<I.length;S++){let g=A[S];if(g===null)continue;A[S]=null,I[S].disconnect(g)}m=null,T=null,B.reset();for(let S in E)delete E[S];if(J.setRenderTarget(R),G=null,U=null,q=null,K=null,P=null,d0.stop(),Z.isPresenting=!1,J.setPixelRatio(_),J.setSize(k.width,k.height,!1),L!==null){let S=L.camera;S.fov=L.fov,S.zoom=L.zoom,S.updateProjectionMatrix(),L=null}Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){if($=S,Z.isPresenting===!0)v0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){if(X=S,Z.isPresenting===!0)v0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(S){H=S},this.getBaseLayer=function(){return U!==null?U:G},this.getBinding=function(){if(q===null&&O)q=new XRWebGLBinding(K,Q);return q},this.getFrame=function(){return D},this.getSession=function(){return K},this.setSession=async function(S){if(K=S,K!==null){if(R=J.getRenderTarget(),K.addEventListener("select",w),K.addEventListener("selectstart",w),K.addEventListener("selectend",w),K.addEventListener("squeeze",w),K.addEventListener("squeezestart",w),K.addEventListener("squeezeend",w),K.addEventListener("end",n),K.addEventListener("inputsourceschange",u),F.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(k),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let d={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:$};G=new XRWebGLLayer(K,Q,d),K.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),P=new J8(G.framebufferWidth,G.framebufferHeight,{format:T8,type:M8,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let d=null,a=null,Q0=null;if(F.depth)Q0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,d=F.stencil?kJ:zJ,a=F.stencil?F6:FJ;let r={colorFormat:Q.RGBA8,depthFormat:Q0,scaleFactor:$};q=this.getBinding(),U=q.createProjectionLayer(r),K.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),P=new J8(U.textureWidth,U.textureHeight,{format:T8,type:M8,depthTexture:new TJ(U.textureWidth,U.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,d),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1,resolveStencilBuffer:U.ignoreDepthValues===!1,storeMultisampledDepthBuffer:U.ignoreDepthValues===!1,storeMultisampledStencilBuffer:U.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await K.requestReferenceSpace(X),d0.setContext(K),d0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function u(S){for(let g=0;g<S.removed.length;g++){let d=S.removed[g],a=A.indexOf(d);if(a>=0)A[a]=null,I[a].disconnect(d)}for(let g=0;g<S.added.length;g++){let d=S.added[g],a=A.indexOf(d);if(a===-1){for(let r=0;r<I.length;r++)if(r>=A.length){A.push(d),a=r;break}else if(A[r]===null){A[r]=d,a=r;break}if(a===-1)break}let Q0=I[a];if(Q0)Q0.connect(d)}}let $0=new x,i=new x;function Z0(S,g,d){$0.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(d.matrixWorld);let a=$0.distanceTo(i),Q0=g.projectionMatrix.elements,r=d.projectionMatrix.elements,A0=Q0[14]/(Q0[10]-1),q0=Q0[14]/(Q0[10]+1),b0=(Q0[9]+1)/Q0[5],p0=(Q0[9]-1)/Q0[5],f0=(Q0[8]-1)/Q0[0],s0=(r[8]+1)/r[0],a0=A0*f0,I9=A0*s0,E9=a/(-f0+s0),O9=E9*-f0;if(g.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(O9),S.translateZ(E9),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),Q0[10]===-1)S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse);else{let v=A0+E9,A9=q0+E9,e0=a0-O9,N9=I9+(a-O9),z=b0*q0/A9*v,M=p0*q0/A9*v;S.projectionMatrix.makePerspective(e0,N9,z,M,v,A9),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function X0(S,g){if(g===null)S.matrixWorld.copy(S.matrix);else S.matrixWorld.multiplyMatrices(g.matrixWorld,S.matrix);S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(K===null)return;let{near:g,far:d}=S;if(B.texture!==null){if(B.depthNear>0)g=B.depthNear;if(B.depthFar>0)d=B.depthFar}if(b.near=p.near=C.near=g,b.far=p.far=C.far=d,m!==b.near||T!==b.far)K.updateRenderState({depthNear:b.near,depthFar:b.far}),m=b.near,T=b.far;b.layers.mask=S.layers.mask|6,C.layers.mask=b.layers.mask&-5,p.layers.mask=b.layers.mask&-3;let a=S.parent,Q0=b.cameras;X0(b,a);for(let r=0;r<Q0.length;r++)X0(Q0[r],a);if(Q0.length===2)Z0(b,C,p);else b.projectionMatrix.copy(C.projectionMatrix);if(L===null&&S.isPerspectiveCamera)L={camera:S,fov:S.fov,zoom:S.zoom};T0(S,b,a)};function T0(S,g,d){if(d===null)S.matrix.copy(g.matrixWorld);else S.matrix.copy(d.matrixWorld),S.matrix.invert(),S.matrix.multiply(g.matrixWorld);if(S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse),S.isPerspectiveCamera)S.fov=H6*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(U===null&&G===null)return;return Y},this.setFoveation=function(S){if(Y=S,U!==null)U.fixedFoveation=S;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=S},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(b)},this.getCameraTexture=function(S){return E[S]};let _0=null;function c0(S,g){if(N=g.getViewerPose(H||W),D=g,N!==null){let d=N.views;if(G!==null)J.setRenderTargetFramebuffer(P,G.framebuffer),J.setRenderTarget(P);let a=!1;if(d.length!==b.cameras.length)b.cameras.length=0,a=!0;for(let q0=0;q0<d.length;q0++){let b0=d[q0],p0=null;if(G!==null)p0=G.getViewport(b0);else{let s0=q.getViewSubImage(U,b0);if(p0=s0.viewport,q0===0)J.setRenderTargetTextures(P,s0.colorTexture,s0.depthStencilTexture),J.setRenderTarget(P)}let f0=j[q0];if(f0===void 0)f0=new d9,f0.layers.enable(q0),f0.viewport=new X9,j[q0]=f0;if(f0.matrix.fromArray(b0.transform.matrix),f0.matrix.decompose(f0.position,f0.quaternion,f0.scale),f0.projectionMatrix.fromArray(b0.projectionMatrix),f0.projectionMatrixInverse.copy(f0.projectionMatrix).invert(),f0.viewport.set(p0.x,p0.y,p0.width,p0.height),q0===0)b.matrix.copy(f0.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(a===!0)b.cameras.push(f0)}let Q0=K.enabledFeatures;if(Q0&&Q0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&O){q=Z.getBinding();let q0=q.getDepthInformation(d[0]);if(q0&&q0.isValid&&q0.texture)B.init(q0,K.renderState)}if(Q0&&Q0.includes("camera-access")&&O){J.state.unbindTexture(),q=Z.getBinding();for(let q0=0;q0<d.length;q0++){let b0=d[q0].camera;if(b0){let p0=E[b0];if(!p0)p0=new ZQ,E[b0]=p0;let f0=q.getCameraImage(b0);p0.sourceTexture=f0}}}}for(let d=0;d<I.length;d++){let a=A[d],Q0=I[d];if(a!==null&&Q0!==void 0)Q0.update(a,g,H||W)}if(_0)_0(S,g);if(g.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:g});D=null}let d0=new hX;d0.setAnimationLoop(c0),this.setAnimationLoop=function(S){_0=S},this.dispose=function(){}}}var kq=new M9,aX=new x0;aX.set(-1,0,0,0,1,0,0,0,1);function Pq(J,Q){function Z(E,F){if(E.matrixAutoUpdate===!0)E.updateMatrix();F.value.copy(E.matrix)}function K(E,F){if(F.color.getRGB(E.fogColor.value,OK(J)),F.isFog)E.fogNear.value=F.near,E.fogFar.value=F.far;else if(F.isFogExp2)E.fogDensity.value=F.density}function $(E,F,R,P,I){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)W(E,F);else if(F.isMeshLambertMaterial){if(W(E,F),F.envMap)E.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)W(E,F),U(E,F);else if(F.isMeshPhongMaterial){if(W(E,F),q(E,F),F.envMap)E.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(W(E,F),G(E,F),F.isMeshPhysicalMaterial)D(E,F,I)}else if(F.isMeshMatcapMaterial)W(E,F),O(E,F);else if(F.isMeshDepthMaterial)W(E,F);else if(F.isMeshDistanceMaterial)W(E,F),B(E,F);else if(F.isMeshNormalMaterial)W(E,F);else if(F.isLineBasicMaterial){if(X(E,F),F.isLineDashedMaterial)Y(E,F)}else if(F.isPointsMaterial)H(E,F,R,P);else if(F.isSpriteMaterial)N(E,F);else if(F.isShadowMaterial)E.color.value.copy(F.color),E.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function W(E,F){if(E.opacity.value=F.opacity,F.color)E.diffuse.value.copy(F.color);if(F.emissive)E.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)E.map.value=F.map,Z(F.map,E.mapTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,Z(F.alphaMap,E.alphaMapTransform);if(F.bumpMap){if(E.bumpMap.value=F.bumpMap,Z(F.bumpMap,E.bumpMapTransform),E.bumpScale.value=F.bumpScale,F.side===s9)E.bumpScale.value*=-1}if(F.normalMap){if(E.normalMap.value=F.normalMap,Z(F.normalMap,E.normalMapTransform),E.normalScale.value.copy(F.normalScale),F.side===s9)E.normalScale.value.negate()}if(F.displacementMap)E.displacementMap.value=F.displacementMap,Z(F.displacementMap,E.displacementMapTransform),E.displacementScale.value=F.displacementScale,E.displacementBias.value=F.displacementBias;if(F.emissiveMap)E.emissiveMap.value=F.emissiveMap,Z(F.emissiveMap,E.emissiveMapTransform);if(F.specularMap)E.specularMap.value=F.specularMap,Z(F.specularMap,E.specularMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest;let R=Q.get(F),P=R.envMap,I=R.envMapRotation;if(P){if(E.envMap.value=P,E.envMapRotation.value.setFromMatrix4(kq.makeRotationFromEuler(I)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(aX);E.reflectivity.value=F.reflectivity,E.ior.value=F.ior,E.refractionRatio.value=F.refractionRatio}if(F.lightMap)E.lightMap.value=F.lightMap,E.lightMapIntensity.value=F.lightMapIntensity,Z(F.lightMap,E.lightMapTransform);if(F.aoMap)E.aoMap.value=F.aoMap,E.aoMapIntensity.value=F.aoMapIntensity,Z(F.aoMap,E.aoMapTransform)}function X(E,F){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,F.map)E.map.value=F.map,Z(F.map,E.mapTransform)}function Y(E,F){E.dashSize.value=F.dashSize,E.totalSize.value=F.dashSize+F.gapSize,E.scale.value=F.scale}function H(E,F,R,P){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,E.size.value=F.size*R,E.scale.value=P*0.5,F.map)E.map.value=F.map,Z(F.map,E.uvTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,Z(F.alphaMap,E.alphaMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest}function N(E,F){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,E.rotation.value=F.rotation,F.map)E.map.value=F.map,Z(F.map,E.mapTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,Z(F.alphaMap,E.alphaMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest}function q(E,F){E.specular.value.copy(F.specular),E.shininess.value=Math.max(F.shininess,0.0001)}function U(E,F){if(F.gradientMap)E.gradientMap.value=F.gradientMap}function G(E,F){if(E.metalness.value=F.metalness,F.metalnessMap)E.metalnessMap.value=F.metalnessMap,Z(F.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=F.roughness,F.roughnessMap)E.roughnessMap.value=F.roughnessMap,Z(F.roughnessMap,E.roughnessMapTransform);if(F.envMap)E.envMapIntensity.value=F.envMapIntensity}function D(E,F,R){if(E.ior.value=F.ior,F.sheen>0){if(E.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),E.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)E.sheenColorMap.value=F.sheenColorMap,Z(F.sheenColorMap,E.sheenColorMapTransform);if(F.sheenRoughnessMap)E.sheenRoughnessMap.value=F.sheenRoughnessMap,Z(F.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(E.clearcoat.value=F.clearcoat,E.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)E.clearcoatMap.value=F.clearcoatMap,Z(F.clearcoatMap,E.clearcoatMapTransform);if(F.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,Z(F.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(E.clearcoatNormalMap.value=F.clearcoatNormalMap,Z(F.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===s9)E.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)E.dispersion.value=F.dispersion;if(F.retroreflectivity>0)E.retroreflectivity.value=F.retroreflectivity;if(F.iridescence>0){if(E.iridescence.value=F.iridescence,E.iridescenceIOR.value=F.iridescenceIOR,E.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)E.iridescenceMap.value=F.iridescenceMap,Z(F.iridescenceMap,E.iridescenceMapTransform);if(F.iridescenceThicknessMap)E.iridescenceThicknessMap.value=F.iridescenceThicknessMap,Z(F.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(F.transmission>0){if(E.transmission.value=F.transmission,E.transmissionSamplerMap.value=R.texture,E.transmissionSamplerSize.value.set(R.width,R.height),F.transmissionMap)E.transmissionMap.value=F.transmissionMap,Z(F.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=F.thickness,F.thicknessMap)E.thicknessMap.value=F.thicknessMap,Z(F.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=F.attenuationDistance,E.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(E.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)E.anisotropyMap.value=F.anisotropyMap,Z(F.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=F.specularIntensity,E.specularColor.value.copy(F.specularColor),F.specularColorMap)E.specularColorMap.value=F.specularColorMap,Z(F.specularColorMap,E.specularColorMapTransform);if(F.specularIntensityMap)E.specularIntensityMap.value=F.specularIntensityMap,Z(F.specularIntensityMap,E.specularIntensityMapTransform)}function O(E,F){if(F.matcap)E.matcap.value=F.matcap}function B(E,F){let R=Q.get(F).light;E.referencePosition.value.setFromMatrixPosition(R.matrixWorld),E.nearDistance.value=R.shadow.camera.near,E.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:$}}function _q(J,Q,Z,K){let $={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(I,A){let k=A.program;K.uniformBlockBinding(I,k)}function N(I,A){let k=$[I.id];if(k===void 0)E(I),k=q(I),$[I.id]=k,I.addEventListener("dispose",R);let _=A.program;K.updateUBOMapping(I,_);let L=Q.render.frame;if(W[I.id]!==L)G(I),W[I.id]=L}function q(I){let A=U();I.__bindingPointIndex=A;let k=J.createBuffer(),_=I.__size,L=I.usage;return J.bindBuffer(J.UNIFORM_BUFFER,k),J.bufferData(J.UNIFORM_BUFFER,_,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,k),k}function U(){for(let I=0;I<Y;I++)if(X.indexOf(I)===-1)return X.push(I),I;return y0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(I){let A=$[I.id],k=I.uniforms,_=I.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let L=0,C=k.length;L<C;L++){let p=k[L];if(Array.isArray(p))for(let j=0,b=p.length;j<b;j++)D(p[j],L,j,_);else D(p,L,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function D(I,A,k,_){if(B(I,A,k,_)===!0){let{__offset:L,value:C}=I;if(Array.isArray(C)){let p=0;for(let j=0;j<C.length;j++){let b=C[j],m=F(b);if(O(b,I.__data,p),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))p+=m.storage/Float32Array.BYTES_PER_ELEMENT}}else O(C,I.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,L,I.__data)}}function O(I,A,k){if(typeof I==="number"||typeof I==="boolean")A[0]=I;else if(I.isMatrix3)A[0]=I.elements[0],A[1]=I.elements[1],A[2]=I.elements[2],A[3]=0,A[4]=I.elements[3],A[5]=I.elements[4],A[6]=I.elements[5],A[7]=0,A[8]=I.elements[6],A[9]=I.elements[7],A[10]=I.elements[8],A[11]=0;else if(ArrayBuffer.isView(I))A.set(new I.constructor(I.buffer,I.byteOffset,A.length));else I.toArray(A,k)}function B(I,A,k,_){let L=I.value,C=A+"_"+k;if(_[C]===void 0){if(typeof L==="number"||typeof L==="boolean")_[C]=L;else if(ArrayBuffer.isView(L))_[C]=L.slice();else _[C]=L.clone();return!0}else{let p=_[C];if(typeof L==="number"||typeof L==="boolean"){if(p!==L)return _[C]=L,!0}else if(ArrayBuffer.isView(L))return!0;else if(p.equals(L)===!1)return p.copy(L),!0}return!1}function E(I){let A=I.uniforms,k=0,_=16;for(let C=0,p=A.length;C<p;C++){let j=Array.isArray(A[C])?A[C]:[A[C]];for(let b=0,m=j.length;b<m;b++){let T=j[b],w=Array.isArray(T.value)?T.value:[T.value];for(let n=0,u=w.length;n<u;n++){let $0=w[n],i=F($0),Z0=k%_,X0=Z0%i.boundary,T0=Z0+X0;if(k+=X0,T0!==0&&_-T0<i.storage)k+=_-T0;T.__data=new Float32Array(i.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=k,k+=i.storage}}}let L=k%_;if(L>0)k+=_-L;return I.__size=k,I.__cache={},this}function F(I){let A={boundary:0,storage:0};if(typeof I==="number"||typeof I==="boolean")A.boundary=4,A.storage=4;else if(I.isVector2)A.boundary=8,A.storage=8;else if(I.isVector3||I.isColor)A.boundary=16,A.storage=12;else if(I.isVector4)A.boundary=16,A.storage=16;else if(I.isMatrix3)A.boundary=48,A.storage=48;else if(I.isMatrix4)A.boundary=64,A.storage=64;else if(I.isTexture)v0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(I))A.boundary=16,A.storage=I.byteLength;else v0("WebGLRenderer: Unsupported uniform value type.",I);return A}function R(I){let A=I.target;A.removeEventListener("dispose",R);let k=X.indexOf(A.__bindingPointIndex);X.splice(k,1),J.deleteBuffer($[A.id]),delete $[A.id],delete W[A.id]}function P(){for(let I in $)J.deleteBuffer($[I]);X=[],$={},W={}}return{bind:H,update:N,dispose:P}}var Tq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),j8=null;function wq(){if(j8===null)j8=new DK(Tq,16,16,PJ,_8),j8.name="DFG_LUT",j8.minFilter=i9,j8.magFilter=i9,j8.wrapS=h7,j8.wrapT=h7,j8.generateMipmaps=!1,j8.needsUpdate=!0;return j8}class nK{constructor(J={}){let{canvas:Q=HX(),context:Z=null,depth:K=!0,stencil:$=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:N="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:U=!1,outputBufferType:G=M8}=J;this.isWebGLRenderer=!0;let D;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");D=Z.getContextAttributes().alpha}else D=W;let O=G,B=new Set([PZ,kZ,zZ]),E=new Set([M8,FJ,d6,F6,CZ,AZ]),F=new Uint32Array(4),R=new Int32Array(4),P=new x,I=null,A=null,k=[],_=[],L=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=R8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,p=!1,j=null,b=null,m=null,T=null;this._outputColorSpace=QX;let w=0,n=0,u=null,$0=-1,i=null,Z0=new X9,X0=new X9,T0=null,_0=new t0(0),c0=0,d0=Q.width,S=Q.height,g=1,d=null,a=null,Q0=new X9(0,0,d0,S),r=new X9(0,0,d0,S),A0=!1,q0=new JQ,b0=!1,p0=!1,f0=new M9,s0=new x,a0=new X9,I9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},E9=!1;function O9(){return u===null?g:1}let v=Z;function A9(V,f){return Q.getContext(V,f)}let e0,N9,z,M,y,s,W0,U0,F0,t,K0,O0,C0,N0,H0,w0,j0,J9,h,D0,J0,E0,I0;try{let V={alpha:!0,depth:K,stencil:$,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:N,failIfMajorPerformanceCaveat:q};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${qW}`);if(Q.addEventListener("webglcontextlost",m0,!1),Q.addEventListener("webglcontextrestored",F9,!1),Q.addEventListener("webglcontextcreationerror",Z9,!1),v===null){if(v=A9("webgl2",V),v===null)if(A9("webgl2"))throw new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y0()}catch(V){throw Q.removeEventListener("webglcontextlost",m0,!1),Q.removeEventListener("webglcontextrestored",F9,!1),Q.removeEventListener("webglcontextcreationerror",Z9,!1),y0("WebGLRenderer: "+V.message),V}function Y0(){if(e0=new hG(v),e0.init(),J0=new Cq(v,e0),N9=new PG(v,e0,J,J0),z=new Vq(v,e0),N9.reversedDepthBuffer&&U)z.buffers.depth.setReversed(!0);b=v.createFramebuffer(),m=v.createFramebuffer(),T=v.createFramebuffer(),M=new pG(v),y=new Yq,s=new Bq(v,e0,z,y,N9,J0,M),W0=new fG(C),U0=new dH(v),E0=new zG(v,U0),F0=new xG(v,U0,M,E0),t=new dG(v,F0,U0,E0,M),J9=new mG(v,N9,s),H0=new _G(y),K0=new Xq(C,W0,e0,N9,E0,H0),O0=new Pq(C,y),C0=new Uq,N0=new Eq(e0),j0=new AG(C,W0,z,t,D,Y),w0=new Iq(C,t,N9),I0=new _q(v,M,N9,z),h=new kG(v,e0,M),D0=new gG(v,e0,M),M.programs=K0.programs,C.capabilities=N9,C.extensions=e0,C.properties=y,C.renderLists=C0,C.shadowMap=w0,C.state=z,C.info=M}if(O!==M8)L=new lG(O,Q.width,Q.height,X,K,$);let R0=new oX(C,v);this.xr=R0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let V=e0.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=e0.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return g},this.setPixelRatio=function(V){if(V===void 0)return;g=V,this.setSize(d0,S,!1)},this.getSize=function(V){return V.set(d0,S)},this.setSize=function(V,f,o=!0){if(R0.isPresenting){v0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(d0=V,S=f,Q.width=Math.floor(V*g),Q.height=Math.floor(f*g),o===!0)Q.style.width=V+"px",Q.style.height=f+"px";if(L!==null)L.setSize(Q.width,Q.height);this.setViewport(0,0,V,f)},this.getDrawingBufferSize=function(V){return V.set(d0*g,S*g).floor()},this.setDrawingBufferSize=function(V,f,o){d0=V,S=f,g=o,Q.width=Math.floor(V*o),Q.height=Math.floor(f*o),this.setViewport(0,0,V,f)},this.setEffects=function(V){if(O===M8){y0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(V){for(let f=0;f<V.length;f++)if(V[f].isOutputPass===!0){v0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(V||[])},this.getCurrentViewport=function(V){return V.copy(Z0)},this.getViewport=function(V){return V.copy(Q0)},this.setViewport=function(V,f,o,l){if(V.isVector4)Q0.set(V.x,V.y,V.z,V.w);else Q0.set(V,f,o,l);z.viewport(Z0.copy(Q0).multiplyScalar(g).round())},this.getScissor=function(V){return V.copy(r)},this.setScissor=function(V,f,o,l){if(V.isVector4)r.set(V.x,V.y,V.z,V.w);else r.set(V,f,o,l);z.scissor(X0.copy(r).multiplyScalar(g).round())},this.getScissorTest=function(){return A0},this.setScissorTest=function(V){z.setScissorTest(A0=V)},this.setOpaqueSort=function(V){d=V},this.setTransparentSort=function(V){a=V},this.getClearColor=function(V){return V.copy(j0.getClearColor())},this.setClearColor=function(){j0.setClearColor(...arguments)},this.getClearAlpha=function(){return j0.getClearAlpha()},this.setClearAlpha=function(){j0.setClearAlpha(...arguments)},this.clear=function(V=!0,f=!0,o=!0){let l=0;if(V){let c=!1;if(u!==null){let L0=u.texture.format;c=B.has(L0)}if(c){let L0=u.texture.type,B0=E.has(L0),M0=j0.getClearColor(),z0=j0.getClearAlpha(),P0=M0.r,u0=M0.g,n0=M0.b;if(B0)F[0]=P0,F[1]=u0,F[2]=n0,F[3]=z0,v.clearBufferuiv(v.COLOR,0,F);else R[0]=P0,R[1]=u0,R[2]=n0,R[3]=z0,v.clearBufferiv(v.COLOR,0,R)}else l|=v.COLOR_BUFFER_BIT}if(f)l|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(o)l|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(l!==0)v.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(V){V.setRenderer(this),j=V},this.dispose=function(){Q.removeEventListener("webglcontextlost",m0,!1),Q.removeEventListener("webglcontextrestored",F9,!1),Q.removeEventListener("webglcontextcreationerror",Z9,!1),j0.dispose(),C0.dispose(),N0.dispose(),y.dispose(),W0.dispose(),t.dispose(),E0.dispose(),I0.dispose(),K0.dispose(),R0.dispose(),R0.removeEventListener("sessionstart",y$),R0.removeEventListener("sessionend",f$),RJ.stop()};function m0(V){V.preventDefault(),h6("WebGLRenderer: Context Lost."),p=!0}function F9(){h6("WebGLRenderer: Context Restored."),p=!1;let V=M.autoReset,f=w0.enabled,o=w0.autoUpdate,l=w0.needsUpdate,c=w0.type;Y0(),M.autoReset=V,w0.enabled=f,w0.autoUpdate=o,w0.needsUpdate=l,w0.type=c}function Z9(V){y0("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function B8(V){let f=V.target;f.removeEventListener("dispose",B8),p8(f)}function p8(V){xY(V),y.remove(V)}function xY(V){let f=y.get(V).programs;if(f!==void 0){if(f.forEach(function(o){K0.releaseProgram(o)}),V.isShaderMaterial)K0.releaseShaderCache(V)}}this.renderBufferDirect=function(V,f,o,l,c,L0){if(f===null)f=I9;let B0=c.isMesh&&c.matrixWorld.determinantAffine()<0,M0=mY(V,f,o,l,c);z.setMaterial(l,B0);let z0=o.index,P0=1;if(l.wireframe===!0){if(z0=F0.getWireframeAttribute(o),z0===void 0)return;P0=2}let u0=o.drawRange,n0=o.attributes.position,k0=u0.start*P0,K9=(u0.start+u0.count)*P0;if(L0!==null)k0=Math.max(k0,L0.start*P0),K9=Math.min(K9,(L0.start+L0.count)*P0);if(z0!==null)k0=Math.max(k0,0),K9=Math.min(K9,z0.count);else if(n0!==void 0&&n0!==null)k0=Math.max(k0,0),K9=Math.min(K9,n0.count);let V9=K9-k0;if(V9<0||V9===1/0)return;E0.setup(c,l,M0,o,z0);let R9,G9=h;if(z0!==null)R9=U0.get(z0),G9=D0,G9.setIndex(R9);if(c.isMesh)if(l.wireframe===!0)z.setLineWidth(l.wireframeLinewidth*O9()),G9.setMode(v.LINES);else G9.setMode(v.TRIANGLES);else if(c.isLine){let v9=l.linewidth;if(v9===void 0)v9=1;if(z.setLineWidth(v9*O9()),c.isLineSegments)G9.setMode(v.LINES);else if(c.isLineLoop)G9.setMode(v.LINE_LOOP);else G9.setMode(v.LINE_STRIP)}else if(c.isPoints)G9.setMode(v.POINTS);else if(c.isSprite)G9.setMode(v.TRIANGLES);if(c.isBatchedMesh)if(!e0.get("WEBGL_multi_draw")){let{_multiDrawStarts:v9,_multiDrawCounts:V0,_multiDrawCount:p9}=c,r0=z0?U0.get(z0).bytesPerElement:1,K8=y.get(l).currentProgram.getUniforms();for(let C8=0;C8<p9;C8++)K8.setValue(v,"_gl_DrawID",C8),G9.render(v9[C8]/r0,V0[C8])}else G9.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else if(c.isInstancedMesh)G9.renderInstances(k0,V9,c.count);else if(o.isInstancedBufferGeometry){let v9=o._maxInstanceCount!==void 0?o._maxInstanceCount:1/0,V0=Math.min(o.instanceCount,v9);G9.renderInstances(k0,V9,V0)}else G9.render(k0,V9)};function b$(V,f,o,l){if(j!==null&&V.isNodeMaterial)j.setObject(l,V);if(b0===!0)H0.setState(V,o,!1);if(V.transparent===!0&&V.side===k8&&V.forceSinglePass===!1)V.side=s9,V.needsUpdate=!0,q7(V,f,l),V.side=N6,V.needsUpdate=!0,q7(V,f,l),V.side=k8;else q7(V,f,l)}this.compile=function(V,f,o=null){if(o===null)o=V;if(j!==null)j.renderStart(V,f,o);if(A=N0.get(o),A.init(f),_.push(A),o.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}}),V!==o)V.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}});if(A.setupLights(),j!==null)j.updateLights(A.state.lightsArray);if(p0=this.localClippingEnabled,b0=H0.init(this.clippingPlanes,p0),b0===!0)H0.setGlobalState(this.clippingPlanes,f);if(j!==null)w0.render(A.state.shadowsArray,o,f);let l=new Set;if(V.traverse(function(c){if(!(c.isMesh||c.isPoints||c.isLine||c.isSprite))return;let L0=c.material;if(L0)if(Array.isArray(L0))for(let B0=0;B0<L0.length;B0++){let M0=L0[B0];b$(M0,o,f,c),l.add(M0)}else b$(L0,o,f,c),l.add(L0)}),A=_.pop(),j!==null)j.renderEnd();return l},this.compileAsync=function(V,f,o=null){let l=this.compile(V,f,o);return new Promise((c)=>{function L0(){if(l.forEach(function(B0){let z0=y.get(B0).currentProgram;if(z0===void 0||z0.isReady())l.delete(B0)}),l.size===0){c(V);return}setTimeout(L0,10)}if(e0.get("KHR_parallel_shader_compile")!==null)L0();else setTimeout(L0,10)})};let mQ=null;function gY(V){if(mQ)mQ(V)}function y$(){RJ.stop()}function f$(){RJ.start()}let RJ=new hX;if(RJ.setAnimationLoop(gY),typeof self!=="undefined")RJ.setContext(self);this.setAnimationLoop=function(V){mQ=V,R0.setAnimationLoop(V),V===null?RJ.stop():RJ.start()},R0.addEventListener("sessionstart",y$),R0.addEventListener("sessionend",f$),this.render=function(V,f){if(f!==void 0&&f.isCamera!==!0){y0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(j!==null)j.renderStart(V,f);let o=R0.enabled===!0&&R0.isPresenting===!0,l=L!==null&&(u===null||o)&&L.begin(C,u);if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(R0.enabled===!0&&R0.isPresenting===!0&&(L===null||L.isCompositing()===!1)){if(R0.cameraAutoUpdate===!0)R0.updateCamera(f);f=R0.getCamera()}if(V.isScene===!0)V.onBeforeRender(C,V,f,u);if(A=N0.get(V,_.length),A.init(f),A.state.textureUnits=s.getTextureUnits(),_.push(A),f0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),q0.setFromProjectionMatrix(f0,HK,f.reversedDepth),p0=this.localClippingEnabled,b0=H0.init(this.clippingPlanes,p0),I=C0.get(V,k.length),I.init(),k.push(I),R0.enabled===!0&&R0.isPresenting===!0){let B0=C.xr.getDepthSensingMesh();if(B0!==null)dQ(B0,f,-1/0,C.sortObjects)}if(dQ(V,f,0,C.sortObjects),I.finish(),j!==null)j.updateLights(A.state.lightsArray);if(C.sortObjects===!0)I.sort(d,a);if(E9=R0.enabled===!1||R0.isPresenting===!1||R0.hasDepthSensing()===!1,E9)j0.addToRenderList(I,V);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(b0===!0)H0.beginShadows();let c=A.state.shadowsArray;if(w0.render(c,V,f),b0===!0)H0.endShadows();if((l&&L.hasRenderPass())===!1){let{opaque:B0,transmissive:M0}=I;if(A.setupLights(),f.isArrayCamera){let z0=f.cameras;if(M0.length>0)for(let P0=0,u0=z0.length;P0<u0;P0++){let n0=z0[P0];x$(B0,M0,V,n0)}if(E9)j0.render(V);for(let P0=0,u0=z0.length;P0<u0;P0++){let n0=z0[P0];h$(I,V,n0,n0.viewport)}}else{if(M0.length>0)x$(B0,M0,V,f);if(E9)j0.render(V);h$(I,V,f)}}if(u!==null&&n===0)s.updateMultisampleRenderTarget(u),s.updateRenderTargetMipmap(u);if(l)L.end(C);if(V.isScene===!0)V.onAfterRender(C,V,f);if(E0.resetDefaultState(),$0=-1,i=null,_.pop(),_.length>0){if(A=_[_.length-1],s.setTextureUnits(A.state.textureUnits),b0===!0)H0.setGlobalState(C.clippingPlanes,A.state.camera)}else A=null;if(k.pop(),k.length>0)I=k[k.length-1];else I=null;if(j!==null)j.renderEnd()};function dQ(V,f,o,l){if(V.visible===!1)return;if(V.layers.test(f.layers)){if(V.isGroup)o=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(f)}else if(V.isLightProbeGrid)A.pushLightProbeGrid(V);else if(V.isLight){if(A.pushLight(V),V.castShadow)A.pushShadow(V)}else if(V.isSprite){if(!V.frustumCulled||V.intersectsFrustum(q0)){if(l)a0.setFromMatrixPosition(V.matrixWorld).applyMatrix4(f0);let B0=t.update(V),M0=V.material;if(M0.visible)I.push(V,B0,M0,o,a0.z,null,f)}}else if(V.isMesh||V.isLine||V.isPoints){if(!V.frustumCulled||V.intersectsFrustum(q0)){let B0=t.update(V),M0=V.material;if(l){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();a0.copy(V.boundingSphere.center)}else{if(B0.boundingSphere===null)B0.computeBoundingSphere();a0.copy(B0.boundingSphere.center)}a0.applyMatrix4(V.matrixWorld).applyMatrix4(f0)}if(Array.isArray(M0)){let z0=B0.groups;for(let P0=0,u0=z0.length;P0<u0;P0++){let n0=z0[P0],k0=M0[n0.materialIndex];if(k0&&k0.visible)I.push(V,B0,k0,o,a0.z,n0,f)}}else if(M0.visible)I.push(V,B0,M0,o,a0.z,null,f)}}}let L0=V.children;for(let B0=0,M0=L0.length;B0<M0;B0++)dQ(L0[B0],f,o,l)}function h$(V,f,o,l){let{opaque:c,transmissive:L0,transparent:B0}=V;if(A.setupLightsView(o),b0===!0)H0.setGlobalState(C.clippingPlanes,o);if(l)z.viewport(Z0.copy(l));if(c.length>0)G7(c,f,o);if(L0.length>0)G7(L0,f,o);if(B0.length>0)G7(B0,f,o);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function x$(V,f,o,l){if((o.isScene===!0?o.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[l.id]===void 0){let k0=e0.has("EXT_color_buffer_half_float")||e0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[l.id]=new J8(1,1,{generateMipmaps:!0,type:k0?_8:M8,minFilter:AJ,samples:Math.max(4,N9.samples),stencilBuffer:$,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:i0.workingColorSpace})}let L0=A.state.transmissionRenderTarget[l.id],B0=l.viewport||Z0;L0.setSize(B0.z*C.transmissionResolutionScale,B0.w*C.transmissionResolutionScale);let M0=C.getRenderTarget(),z0=C.getActiveCubeFace(),P0=C.getActiveMipmapLevel();if(C.setRenderTarget(L0),C.getClearColor(_0),c0=C.getClearAlpha(),c0<1)C.setClearColor(16777215,0.5);if(C.clear(),E9)j0.render(o);let u0=C.toneMapping;C.toneMapping=R8;let n0=l.viewport;if(l.viewport!==void 0)l.viewport=void 0;if(A.setupLightsView(l),b0===!0)H0.setGlobalState(C.clippingPlanes,l);if(G7(V,o,l),s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0),e0.has("WEBGL_multisampled_render_to_texture")===!1){let k0=!1;for(let K9=0,V9=f.length;K9<V9;K9++){let R9=f[K9],{object:G9,geometry:v9,material:V0,group:p9}=R9;if(V0.side===k8&&G9.layers.test(l.layers)){let r0=V0.side;V0.side=s9,V0.needsUpdate=!0,g$(G9,o,l,v9,V0,p9),V0.side=r0,V0.needsUpdate=!0,k0=!0}}if(k0===!0)s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0)}if(C.setRenderTarget(M0,z0,P0),C.setClearColor(_0,c0),n0!==void 0)l.viewport=n0;C.toneMapping=u0}function G7(V,f,o){let l=f.isScene===!0?f.overrideMaterial:null;for(let c=0,L0=V.length;c<L0;c++){let B0=V[c],{object:M0,geometry:z0,group:P0}=B0,u0=B0.material;if(u0.allowOverride===!0&&l!==null)u0=l;if(M0.layers.test(o.layers))g$(M0,f,o,z0,u0,P0)}}function g$(V,f,o,l,c,L0){if(j!==null&&c.isNodeMaterial)j.setObject(V,c);if(V.onBeforeRender(C,f,o,l,c,L0),V.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),c.onBeforeRender(C,f,o,l,V,L0),c.transparent===!0&&c.side===k8&&c.forceSinglePass===!1)c.side=s9,c.needsUpdate=!0,C.renderBufferDirect(o,f,l,c,V,L0),c.side=N6,c.needsUpdate=!0,C.renderBufferDirect(o,f,l,c,V,L0),c.side=k8;else C.renderBufferDirect(o,f,l,c,V,L0);V.onAfterRender(C,f,o,l,c,L0)}function q7(V,f,o){if(f.isScene!==!0)f=I9;let l=y.get(V),c=A.state.lights,L0=A.state.shadowsArray,B0=c.state.version,M0=K0.getParameters(V,c.state,L0,f,o,A.state.lightProbeGridArray),z0=K0.getProgramCacheKey(M0),P0=l.programs;l.environment=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?f.environment:null,l.fog=f.fog;let u0=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap;if(l.envMap=W0.get(V.envMap||l.environment,u0),l.envMapRotation=l.environment!==null&&V.envMap===null?f.environmentRotation:V.envMapRotation,P0===void 0)V.addEventListener("dispose",B8),P0=new Map,l.programs=P0;let n0=P0.get(z0);if(n0!==void 0){if(l.currentProgram===n0&&l.lightsStateVersion===B0)return m$(V,M0),n0}else{if(M0.uniforms=K0.getUniforms(V),j!==null&&V.isNodeMaterial)j.build(V,o,M0);V.onBeforeCompile(M0,C),n0=K0.acquireProgram(M0,z0),P0.set(z0,n0),l.uniforms=M0.uniforms}let k0=l.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)k0.clippingPlanes=H0.uniform;if(m$(V,M0),l.needsLights=uY(V),l.lightsStateVersion=B0,l.needsLights)k0.ambientLightColor.value=c.state.ambient,k0.lightProbe.value=c.state.probe,k0.sunLights.value=c.state.sun,k0.sunLightShadows.value=c.state.sunShadow,k0.directionalLights.value=c.state.directional,k0.directionalLightShadows.value=c.state.directionalShadow,k0.spotLights.value=c.state.spot,k0.spotLightShadows.value=c.state.spotShadow,k0.rectAreaLights.value=c.state.rectArea,k0.ltc_1.value=c.state.rectAreaLTC1,k0.ltc_2.value=c.state.rectAreaLTC2,k0.pointLights.value=c.state.point,k0.pointLightShadows.value=c.state.pointShadow,k0.hemisphereLights.value=c.state.hemi,k0.sunShadowMatrix.value=c.state.sunShadowMatrix,k0.sunShadowCascade.value=c.state.sunShadowCascade,k0.directionalShadowMatrix.value=c.state.directionalShadowMatrix,k0.spotLightMatrix.value=c.state.spotLightMatrix,k0.spotLightMap.value=c.state.spotLightMap,k0.pointShadowMatrix.value=c.state.pointShadowMatrix;return l.lightProbeGrid=A.state.lightProbeGridArray.length>0,l.currentProgram=n0,l.uniformsList=null,n0}function p$(V){if(V.uniformsList===null){let f=V.currentProgram.getUniforms();V.uniformsList=J7.seqWithValue(f.seq,V.uniforms)}return V.uniformsList}function m$(V,f){let o=y.get(V);o.outputColorSpace=f.outputColorSpace,o.batching=f.batching,o.batchingColor=f.batchingColor,o.instancing=f.instancing,o.instancingColor=f.instancingColor,o.instancingMorph=f.instancingMorph,o.skinning=f.skinning,o.morphTargets=f.morphTargets,o.morphNormals=f.morphNormals,o.morphColors=f.morphColors,o.morphTargetsCount=f.morphTargetsCount,o.numClippingPlanes=f.numClippingPlanes,o.numIntersection=f.numClipIntersection,o.vertexAlphas=f.vertexAlphas,o.vertexTangents=f.vertexTangents,o.toneMapping=f.toneMapping}function pY(V,f){if(V.length===0)return null;if(V.length===1)return V[0].texture!==null?V[0]:null;P.setFromMatrixPosition(f.matrixWorld);for(let o=0,l=V.length;o<l;o++){let c=V[o];if(c.texture!==null&&c.boundingBox.containsPoint(P))return c}return null}function mY(V,f,o,l,c){if(f.isScene!==!0)f=I9;s.resetTextureUnits();let L0=f.fog,B0=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?f.environment:null,M0=u===null?C.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:i0.workingColorSpace,z0=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap,P0=W0.get(l.envMap||B0,z0),u0=l.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,n0=!!o.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),k0=!!o.morphAttributes.position,K9=!!o.morphAttributes.normal,V9=!!o.morphAttributes.color,R9=R8;if(l.toneMapped){if(u===null||u.isXRRenderTarget===!0)R9=C.toneMapping}let G9=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,v9=G9!==void 0?G9.length:0,V0=y.get(l),p9=A.state.lights;if(b0===!0){if(p0===!0||V!==i){let D9=V===i&&l.id===$0;H0.setState(l,V,D9)}}let r0=!1;if(l.version===V0.__version){if(V0.needsLights&&V0.lightsStateVersion!==p9.state.version)r0=!0;else if(V0.outputColorSpace!==M0)r0=!0;else if(c.isBatchedMesh&&V0.batching===!1)r0=!0;else if(!c.isBatchedMesh&&V0.batching===!0)r0=!0;else if(c.isBatchedMesh&&V0.batchingColor===!0&&c._colorsTexture===null)r0=!0;else if(c.isBatchedMesh&&V0.batchingColor===!1&&c._colorsTexture!==null)r0=!0;else if(c.isInstancedMesh&&V0.instancing===!1)r0=!0;else if(!c.isInstancedMesh&&V0.instancing===!0)r0=!0;else if(c.isSkinnedMesh&&V0.skinning===!1)r0=!0;else if(!c.isSkinnedMesh&&V0.skinning===!0)r0=!0;else if(c.isInstancedMesh&&V0.instancingColor===!0&&c.instanceColor===null)r0=!0;else if(c.isInstancedMesh&&V0.instancingColor===!1&&c.instanceColor!==null)r0=!0;else if(c.isInstancedMesh&&V0.instancingMorph===!0&&c.morphTexture===null)r0=!0;else if(c.isInstancedMesh&&V0.instancingMorph===!1&&c.morphTexture!==null)r0=!0;else if(V0.envMap!==P0)r0=!0;else if(l.fog===!0&&V0.fog!==L0)r0=!0;else if(V0.numClippingPlanes!==void 0&&(V0.numClippingPlanes!==H0.numPlanes||V0.numIntersection!==H0.numIntersection))r0=!0;else if(V0.vertexAlphas!==u0)r0=!0;else if(V0.vertexTangents!==n0)r0=!0;else if(V0.morphTargets!==k0)r0=!0;else if(V0.morphNormals!==K9)r0=!0;else if(V0.morphColors!==V9)r0=!0;else if(V0.toneMapping!==R9)r0=!0;else if(V0.morphTargetsCount!==v9)r0=!0;else if(!!V0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)r0=!0}else r0=!0,V0.__version=l.version;let K8=V0.currentProgram;if(r0===!0){if(K8=q7(l,f,c),j&&l.isNodeMaterial)j.onUpdateProgram(l,K8,V0)}let C8=!1,QJ=!1,uJ=!1,U9=K8.getUniforms(),L9=V0.uniforms;if(z.useProgram(K8.program))C8=!0,QJ=!0,uJ=!0;if(l.id!==$0)$0=l.id,QJ=!0;if(V0.needsLights){let D9=pY(A.state.lightProbeGridArray,c);if(V0.lightProbeGrid!==D9)V0.lightProbeGrid=D9,QJ=!0}if(C8||i!==V){if(z.buffers.depth.getReversed()&&V.reversedDepth!==!0)V._reversedDepth=!0,V.updateProjectionMatrix();U9.setValue(v,"projectionMatrix",V.projectionMatrix),U9.setValue(v,"viewMatrix",V.matrixWorldInverse);let KJ=U9.map.cameraPosition;if(KJ!==void 0)KJ.setValue(v,s0.setFromMatrixPosition(V.matrixWorld));if(N9.logarithmicDepthBuffer)U9.setValue(v,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)U9.setValue(v,"isOrthographic",V.isOrthographicCamera===!0);if(i!==V)i=V,QJ=!0,uJ=!0}if(V0.needsLights){if(p9.state.sunShadowMap.length>0)U9.setValue(v,"sunShadowMap",p9.state.sunShadowMap,s);if(p9.state.directionalShadowMap.length>0)U9.setValue(v,"directionalShadowMap",p9.state.directionalShadowMap,s);if(p9.state.spotShadowMap.length>0)U9.setValue(v,"spotShadowMap",p9.state.spotShadowMap,s);if(p9.state.pointShadowMap.length>0)U9.setValue(v,"pointShadowMap",p9.state.pointShadowMap,s)}if(c.isSkinnedMesh){U9.setOptional(v,c,"bindMatrix"),U9.setOptional(v,c,"bindMatrixInverse");let D9=c.skeleton;if(D9){if(D9.boneTexture===null)D9.computeBoneTexture();U9.setValue(v,"boneTexture",D9.boneTexture,s)}}if(c.isBatchedMesh){if(U9.setOptional(v,c,"batchingTexture"),U9.setValue(v,"batchingTexture",c._matricesTexture,s),U9.setOptional(v,c,"batchingIdTexture"),U9.setValue(v,"batchingIdTexture",c._indirectTexture,s),U9.setOptional(v,c,"batchingColorTexture"),c._colorsTexture!==null)U9.setValue(v,"batchingColorTexture",c._colorsTexture,s)}let ZJ=o.morphAttributes;if(ZJ.position!==void 0||ZJ.normal!==void 0||ZJ.color!==void 0)J9.update(c,o,K8);if(QJ||V0.receiveShadow!==c.receiveShadow)V0.receiveShadow=c.receiveShadow,U9.setValue(v,"receiveShadow",c.receiveShadow);if((l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial)&&l.envMap===null&&f.environment!==null)L9.envMapIntensity.value=f.environmentIntensity;if(L9.dfgLUT!==void 0)L9.dfgLUT.value=wq();if(QJ){if(U9.setValue(v,"toneMappingExposure",C.toneMappingExposure),V0.needsLights)dY(L9,uJ);if(L0&&l.fog===!0)O0.refreshFogUniforms(L9,L0);if(O0.refreshMaterialUniforms(L9,l,g,S,A.state.transmissionRenderTarget[V.id]),V0.needsLights&&V0.lightProbeGrid){let D9=V0.lightProbeGrid;L9.probesSH.value=D9.texture,L9.probesMin.value.copy(D9.boundingBox.min),L9.probesMax.value.copy(D9.boundingBox.max),L9.probesResolution.value.copy(D9.resolution)}J7.upload(v,p$(V0),L9,s)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)J7.upload(v,p$(V0),L9,s),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)U9.setValue(v,"center",c.center);if(U9.setValue(v,"modelViewMatrix",c.modelViewMatrix),U9.setValue(v,"normalMatrix",c.normalMatrix),U9.setValue(v,"modelMatrix",c.matrixWorld),l.uniformsGroups!==void 0){let D9=l.uniformsGroups;for(let KJ=0,lJ=D9.length;KJ<lJ;KJ++){let u$=D9[KJ];I0.update(u$,K8),I0.bind(u$,K8)}}return K8}function dY(V,f){V.ambientLightColor.needsUpdate=f,V.lightProbe.needsUpdate=f,V.sunLights.needsUpdate=f,V.sunLightShadows.needsUpdate=f,V.directionalLights.needsUpdate=f,V.directionalLightShadows.needsUpdate=f,V.pointLights.needsUpdate=f,V.pointLightShadows.needsUpdate=f,V.spotLights.needsUpdate=f,V.spotLightShadows.needsUpdate=f,V.rectAreaLights.needsUpdate=f,V.hemisphereLights.needsUpdate=f}function uY(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(V,f,o){let l=y.get(V);if(l.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,l.__autoAllocateDepthBuffer===!1)l.__useRenderToTexture=!1;y.get(V.texture).__webglTexture=f,y.get(V.depthTexture).__webglTexture=l.__autoAllocateDepthBuffer?void 0:o,l.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,f){let o=y.get(V);o.__webglFramebuffer=f,o.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(V,f=0,o=0){u=V,w=f,n=o;let l=null,c=!1,L0=!1;if(V){let M0=y.get(V);if(M0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(v.FRAMEBUFFER,M0.__webglFramebuffer),Z0.copy(V.viewport),X0.copy(V.scissor),T0=V.scissorTest,z.viewport(Z0),z.scissor(X0),z.setScissorTest(T0),$0=-1;return}else if(M0.__webglFramebuffer===void 0)s.setupRenderTarget(V);else if(M0.__hasExternalTextures)s.rebindTextures(V,y.get(V.texture).__webglTexture,y.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let u0=V.depthTexture;if(M0.__boundDepthTexture!==u0){if(u0!==null&&y.has(u0)&&(V.width!==u0.image.width||V.height!==u0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s.setupDepthRenderbuffer(V)}}let z0=V.texture;if(z0.isData3DTexture||z0.isDataArrayTexture||z0.isCompressedArrayTexture)L0=!0;let P0=y.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(P0[f]))l=P0[f][o];else l=P0[f];c=!0}else if(V.samples>0&&s.useMultisampledRTT(V)===!1)l=y.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(P0))l=P0[o];else l=P0;Z0.copy(V.viewport),X0.copy(V.scissor),T0=V.scissorTest}else Z0.copy(Q0).multiplyScalar(g).floor(),X0.copy(r).multiplyScalar(g).floor(),T0=A0;if(o!==0)l=b;if(z.bindFramebuffer(v.FRAMEBUFFER,l))z.drawBuffers(V,l);if(z.viewport(Z0),z.scissor(X0),z.setScissorTest(T0),c){let M0=y.get(V.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+f,M0.__webglTexture,o)}else if(L0){let M0=f;for(let z0=0;z0<V.textures.length;z0++){let P0=y.get(V.textures[z0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+z0,P0.__webglTexture,o,M0)}}else if(V!==null&&o!==0){let M0=y.get(V.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,M0.__webglTexture,o)}$0=-1};function d$(V){let f=y.get(V);if(f.__readFormat!==V.format||f.__readType!==V.type)f.__readFormat=V.format,f.__readType=V.type,f.__formatReadable=N9.textureFormatReadable(V.format),f.__typeReadable=N9.textureTypeReadable(V.type);return f}if(this.readRenderTargetPixels=function(V,f,o,l,c,L0,B0,M0=0){if(!(V&&V.isWebGLRenderTarget)){y0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z0=y.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&B0!==void 0)z0=z0[B0];if(z0){z.bindFramebuffer(v.FRAMEBUFFER,z0);try{let P0=V.textures[M0],u0=P0.format,n0=P0.type;if(V.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let k0=d$(P0);if(k0.__formatReadable===!1){y0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(k0.__typeReadable===!1){y0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=V.width-l&&(o>=0&&o<=V.height-c))v.readPixels(f,o,l,c,J0.convert(u0),J0.convert(n0),L0)}finally{let P0=u!==null?y.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,P0)}}},this.readRenderTargetPixelsAsync=async function(V,f,o,l,c,L0,B0,M0=0){if(!(V&&V.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z0=y.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&B0!==void 0)z0=z0[B0];if(z0)if(f>=0&&f<=V.width-l&&(o>=0&&o<=V.height-c)){z.bindFramebuffer(v.FRAMEBUFFER,z0);let P0=V.textures[M0],u0=P0.format,n0=P0.type;if(V.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let k0=d$(P0);if(k0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(k0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let K9=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,K9),v.bufferData(v.PIXEL_PACK_BUFFER,L0.byteLength,v.STREAM_READ),v.readPixels(f,o,l,c,J0.convert(u0),J0.convert(n0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let V9=u!==null?y.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,V9);let R9=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await NX(v,R9,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,K9),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,L0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(K9),v.deleteSync(R9),L0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,f=null,o=0){let l=Math.pow(2,-o),c=Math.floor(V.image.width*l),L0=Math.floor(V.image.height*l),B0=f!==null?f.x:0,M0=f!==null?f.y:0;s.setTexture2D(V,0),v.copyTexSubImage2D(v.TEXTURE_2D,o,0,0,B0,M0,c,L0),z.unbindTexture()},this.copyTextureToTexture=function(V,f,o=null,l=null,c=0,L0=0){let B0,M0,z0,P0,u0,n0,k0,K9,V9,R9=V.isCompressedTexture?V.mipmaps[L0]:V.image;if(o!==null)B0=o.max.x-o.min.x,M0=o.max.y-o.min.y,z0=o.isBox3?o.max.z-o.min.z:1,P0=o.min.x,u0=o.min.y,n0=o.isBox3?o.min.z:0;else{let L9=Math.pow(2,-c);if(B0=Math.floor(R9.width*L9),M0=Math.floor(R9.height*L9),V.isDataArrayTexture)z0=R9.depth;else if(V.isData3DTexture)z0=Math.floor(R9.depth*L9);else z0=1;P0=0,u0=0,n0=0}if(l!==null)k0=l.x,K9=l.y,V9=l.z;else k0=0,K9=0,V9=0;let G9=J0.convert(f.format),v9=J0.convert(f.type),V0;if(f.isData3DTexture)s.setTexture3D(f,0),V0=v.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)s.setTexture2DArray(f,0),V0=v.TEXTURE_2D_ARRAY;else s.setTexture2D(f,0),V0=v.TEXTURE_2D;z.activeTexture(v.TEXTURE0),z.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,f.flipY),z.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),z.pixelStorei(v.UNPACK_ALIGNMENT,f.unpackAlignment);let p9=z.getParameter(v.UNPACK_ROW_LENGTH),r0=z.getParameter(v.UNPACK_IMAGE_HEIGHT),K8=z.getParameter(v.UNPACK_SKIP_PIXELS),C8=z.getParameter(v.UNPACK_SKIP_ROWS),QJ=z.getParameter(v.UNPACK_SKIP_IMAGES);z.pixelStorei(v.UNPACK_ROW_LENGTH,R9.width),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,R9.height),z.pixelStorei(v.UNPACK_SKIP_PIXELS,P0),z.pixelStorei(v.UNPACK_SKIP_ROWS,u0),z.pixelStorei(v.UNPACK_SKIP_IMAGES,n0);let uJ=V.isDataArrayTexture||V.isData3DTexture,U9=f.isDataArrayTexture||f.isData3DTexture;if(V.isDepthTexture){let L9=y.get(V),ZJ=y.get(f),D9=y.get(L9.__renderTarget),KJ=y.get(ZJ.__renderTarget);z.bindFramebuffer(v.READ_FRAMEBUFFER,D9.__webglFramebuffer),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,KJ.__webglFramebuffer);for(let lJ=0;lJ<z0;lJ++){if(uJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,y.get(V).__webglTexture,c,n0+lJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,y.get(f).__webglTexture,L0,V9+lJ);v.blitFramebuffer(P0,u0,B0,M0,k0,K9,B0,M0,v.DEPTH_BUFFER_BIT,v.NEAREST)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(c!==0||V.isRenderTargetTexture||y.has(V)){let L9=y.get(V),ZJ=y.get(f);z.bindFramebuffer(v.READ_FRAMEBUFFER,m),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,T);for(let D9=0;D9<z0;D9++){if(uJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,L9.__webglTexture,c,n0+D9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,L9.__webglTexture,c);if(U9)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ZJ.__webglTexture,L0,V9+D9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,ZJ.__webglTexture,L0);if(c!==0)v.blitFramebuffer(P0,u0,B0,M0,k0,K9,B0,M0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(U9)v.copyTexSubImage3D(V0,L0,k0,K9,V9+D9,P0,u0,B0,M0);else v.copyTexSubImage2D(V0,L0,k0,K9,P0,u0,B0,M0)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(U9)if(V.isDataTexture||V.isData3DTexture)v.texSubImage3D(V0,L0,k0,K9,V9,B0,M0,z0,G9,v9,R9.data);else if(f.isCompressedArrayTexture)v.compressedTexSubImage3D(V0,L0,k0,K9,V9,B0,M0,z0,G9,R9.data);else v.texSubImage3D(V0,L0,k0,K9,V9,B0,M0,z0,G9,v9,R9);else if(V.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,L0,k0,K9,B0,M0,G9,v9,R9.data);else if(V.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,L0,k0,K9,R9.width,R9.height,G9,R9.data);else v.texSubImage2D(v.TEXTURE_2D,L0,k0,K9,B0,M0,G9,v9,R9);if(z.pixelStorei(v.UNPACK_ROW_LENGTH,p9),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,r0),z.pixelStorei(v.UNPACK_SKIP_PIXELS,K8),z.pixelStorei(v.UNPACK_SKIP_ROWS,C8),z.pixelStorei(v.UNPACK_SKIP_IMAGES,QJ),L0===0&&f.generateMipmaps)v.generateMipmap(V0);z.unbindTexture()},this.initRenderTarget=function(V){if(y.get(V).__webglFramebuffer===void 0)s.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)s.setTextureCube(V,0);else if(V.isData3DTexture)s.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)s.setTexture2DArray(V,0);else s.setTexture2D(V,0);z.unbindTexture()},this.resetState=function(){w=0,n=0,u=null,z.reset(),E0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return HK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=i0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=i0._getUnpackColorSpace()}}var rX={type:"change"},oK={type:"start"},eX={type:"end"},DQ=new s6,tX=new W8,Sq=Math.cos(70*u6.DEG2RAD),P9=new x,r9=2*Math.PI,Y9={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},iK=0.000001;class aK extends UQ{constructor(J,Q=null){super(J,Q);if(this.state=Y9.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:NJ.ROTATE,MIDDLE:NJ.DOLLY,RIGHT:NJ.PAN},this.touches={ONE:GJ.ROTATE,TWO:GJ.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new o9,this._lastTargetPosition=new x,this._quat=new o9().setFromUnitVectors(J.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new a6,this._sphericalDelta=new a6,this._scale=1,this._panOffset=new x,this._rotateStart=new h0,this._rotateEnd=new h0,this._rotateDelta=new h0,this._panStart=new h0,this._panEnd=new h0,this._panDelta=new h0,this._dollyStart=new h0,this._dollyEnd=new h0,this._dollyDelta=new h0,this._dollyDirection=new x,this._mouse=new h0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vq.bind(this),this._onPointerDown=jq.bind(this),this._onPointerUp=bq.bind(this),this._onContextMenu=mq.bind(this),this._onMouseWheel=hq.bind(this),this._onKeyDown=xq.bind(this),this._onTouchStart=gq.bind(this),this._onTouchMove=pq.bind(this),this._onMouseDown=yq.bind(this),this._onMouseMove=fq.bind(this),this._interceptControlDown=dq.bind(this),this._interceptControlUp=uq.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Y9.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rX),this.update(),this.state=Y9.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(P9.copy(Q).sub(this.target),P9.applyQuaternion(this._quat),this._spherical.setFromVector3(P9),this.autoRotate&&this.state===Y9.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Z=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite(Z)&&isFinite(K)){if(Z<-Math.PI)Z+=r9;else if(Z>Math.PI)Z-=r9;if(K<-Math.PI)K+=r9;else if(K>Math.PI)K-=r9;if(Z<=K)this._spherical.theta=Math.max(Z,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Z+K)/2?Math.max(Z,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let $=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),$=W!=this._spherical.radius}if(P9.setFromSpherical(this._spherical),P9.applyQuaternion(this._quatInverse),Q.copy(this.target).add(P9),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=P9.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),$=!!Y}else if(this.object.isOrthographicCamera){let X=new x(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),$=Y!==this.object.zoom;let H=new x(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),W=P9.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(DQ.origin.copy(this.object.position),DQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(DQ.direction))<Sq)this.object.lookAt(this.target);else tX.setFromNormalAndCoplanarPoint(this.object.up,this.target),DQ.intersectPlane(tX,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),$=!0}if(this._scale=1,this._performCursorZoom=!1,$||this._lastPosition.distanceToSquared(this.object.position)>iK||8*(1-this._lastQuaternion.dot(this.object.quaternion))>iK||this._lastTargetPosition.distanceToSquared(this.target)>iK)return this.dispatchEvent(rX),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return r9/60*this.autoRotateSpeed*J;else return r9/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){P9.setFromMatrixColumn(Q,0),P9.multiplyScalar(-J),this._panOffset.add(P9)}_panUp(J,Q){if(this.screenSpacePanning===!0)P9.setFromMatrixColumn(Q,1);else P9.setFromMatrixColumn(Q,0),P9.crossVectors(this.object.up,P9);P9.multiplyScalar(J),this._panOffset.add(P9)}_pan(J,Q){let Z=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;P9.copy(K).sub(this.target);let $=P9.length();$*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*$/Z.clientHeight,this.object.matrix),this._panUp(2*Q*$/Z.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Z.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/Z.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Z=this.domElement.getBoundingClientRect(),K=J-Z.left,$=Q-Z.top,W=Z.width,X=Z.height;this._mouse.x=K/W*2-1,this._mouse.y=-($/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(r9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(r9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(r9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-r9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(r9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-r9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set(Z,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set(Z,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyStart.set(0,$)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Z=this._getSecondPointerPosition(J),K=0.5*(J.pageX+Z.x),$=0.5*(J.pageY+Z.y);this._rotateEnd.set(K,$)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(r9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(r9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set(Z,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyEnd.set(0,$),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new h0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,Z={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Z.deltaY*=10;return Z}}function jq(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function vq(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function bq(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eX),this.state=Y9.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],Z=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:Z.x,pageY:Z.y});break}}function yq(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case NJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=Y9.DOLLY;break;case NJ.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=Y9.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=Y9.ROTATE}break;case NJ.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=Y9.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=Y9.PAN}break;default:this.state=Y9.NONE}if(this.state!==Y9.NONE)this.dispatchEvent(oK)}function fq(J){switch(this.state){case Y9.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case Y9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case Y9.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function hq(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==Y9.NONE)return;J.preventDefault(),this.dispatchEvent(oK),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(eX)}function xq(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function gq(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case GJ.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=Y9.TOUCH_ROTATE;break;case GJ.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=Y9.TOUCH_PAN;break;default:this.state=Y9.NONE}break;case 2:switch(this.touches.TWO){case GJ.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=Y9.TOUCH_DOLLY_PAN;break;case GJ.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=Y9.TOUCH_DOLLY_ROTATE;break;default:this.state=Y9.NONE}break;default:this.state=Y9.NONE}if(this.state!==Y9.NONE)this.dispatchEvent(oK)}function pq(J){switch(this._trackPointer(J),this.state){case Y9.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case Y9.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case Y9.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case Y9.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=Y9.NONE}}function mq(J){if(this.enabled===!1)return;J.preventDefault()}function dq(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function uq(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var EQ={jaw:0.6,tbX:2.9,tbY:6.85,ttX:6.45,ttY:7.3,ttCurl:0,root:0,lipAp:0.7,lipProt:0.2,lipWidth:0.5,labiodental:0,velum:-0.15,larynx:0,epilarynx:0,ventricular:0,lateral:0,dorsum:0};var e={blue:"#4fb6f2",blueMid:"#3487c4",blueDim:"#1f5f8c",frame:"#133954",green:"#5be381",red:"#ff5d40",pink:"#ff73cf",white:"#eef6f8",amber:"#ffb340"},A1=[e.green,e.red,e.pink,e.white],OQ={primary:"#effbff",secondary:"#e2f5fc"};function JY(J,Q,Z){let K=parseInt(J.slice(1),16),$=parseInt(Q.slice(1),16),W=(X)=>Math.round((K>>X&255)*(1-Z)+($>>X&255)*Z);return"#"+[16,8,0].map((X)=>W(X).toString(16).padStart(2,"0")).join("")}var RQ=(J)=>JY(J,"#ffffff",0.55),a8=[[0,"#3a2408"],[0.35,"#c9822a"],[0.6,"#ffb340"],[0.82,"#ffe39a"],[1,"#fff8ec"]];function MQ(J){let Q=Math.max(0,Math.min(1,J));for(let Z=1;Z<a8.length;Z++)if(Q<=a8[Z][0])return JY(a8[Z-1][1],a8[Z][1],(Q-a8[Z-1][0])/(a8[Z][0]-a8[Z-1][0]));return a8[a8.length-1][1]}var z1={black:"#000000",console:"#000000",inset:"#000000",line:e.frame,text:e.blue,textDim:e.blueMid,caliper:e.amber,caliperDim:"rgba(255, 179, 64, 0.45)",fat:"#bdbdbd",skin:"#a8a8a8",muscle:"#5d5d5d",tongue:"#6b6b6b",brain:"#7c7c7c",marrow:"#b2b2b2",cortex:"#1c1c1c",cartilage:"#3e3e3e",mucosa:"#8f8f8f",tooth:"#101010"};var LQ=(J)=>{if(!(J>0))return 0;let Q=Math.log10(40),Z=Math.log10(4000);return Math.max(0,Math.min(1,(Math.log10(J)-Q)/(Z-Q)))};var QY=(J,Q)=>Math.hypot(J.x-Q.x,J.y-Q.y);var IQ=(J,Q,Z)=>{let K=Math.sin(Z),$=Math.cos(Z),W=J.x-Q.x,X=J.y-Q.y;return{x:Q.x+W*$-X*K,y:Q.y+W*K+X*$}};function L8(J,Q){if(J.length<3)return J.slice();let Z=[];for(let K=0;K<J.length-1;K++){let $=J[Math.max(0,K-1)],W=J[K],X=J[K+1],Y=J[Math.min(J.length-1,K+2)];for(let H=0;H<Q;H++){let N=H/Q,q=N*N,U=q*N;Z.push({x:0.5*(2*W.x+(-$.x+X.x)*N+(2*$.x-5*W.x+4*X.x-Y.x)*q+(-$.x+3*W.x-3*X.x+Y.x)*U),y:0.5*(2*W.y+(-$.y+X.y)*N+(2*$.y-5*W.y+4*X.y-Y.y)*q+(-$.y+3*W.y-3*X.y+Y.y)*U)})}}return Z.push(J[J.length-1]),Z}var lq='"Hershey", "Archivo", system-ui, sans-serif',ZY=(J,Q="l")=>`${Q==="m"?500:300} ${J}px ${lq}`,cq=typeof CanvasRenderingContext2D!=="undefined"&&"letterSpacing"in CanvasRenderingContext2D.prototype;function nq(J,Q=!1){let Z=new Path2D;if(J.length===0)return Z;Z.moveTo(J[0][0],J[0][1]);for(let K=1;K<J.length;K++)Z.lineTo(J[K][0],J[K][1]);if(Q)Z.closePath();return Z}function L6(J,Q,Z,K,$={}){if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.lineJoin="round",J.lineCap="round",J.setLineDash($.dash??[]),J.strokeStyle=Z,J.lineWidth=K,J.stroke(Q),$.hot)J.globalCompositeOperation="source-over",J.strokeStyle=RQ(Z),J.lineWidth=K*0.42,J.stroke(Q);J.restore()}function yJ(J,Q,Z,K,$={}){if(Q.length<2)return;L6(J,nq(Q,$.close),Z,K,$)}function Q7(J,Q,Z,K,$,W,X,Y={}){let H=new Path2D;H.moveTo(Q,Z),H.lineTo(K,$),L6(J,H,W,X,Y)}function KY(J,Q,Z,K,$,W=1.2,X={}){let Y=new Path2D;Y.arc(Q,Z,K,0,Math.PI*2),L6(J,Y,$,W,X)}function Z7(J,Q,Z,K,$,W=1){J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=W,J.fillStyle=$,J.beginPath(),J.arc(Q,Z,K,0,Math.PI*2),J.fill(),J.restore()}function $Y(J,Q,Z,K,$=7,W=1){let Y=new Path2D;Y.arc(Q,Z,$,0,Math.PI*2),Y.moveTo(Q-$-4,Z),Y.lineTo(Q-$+2,Z),Y.moveTo(Q+$-2,Z),Y.lineTo(Q+$+4,Z),Y.moveTo(Q,Z-$-4),Y.lineTo(Q,Z-$+2),Y.moveTo(Q,Z+$-2),Y.lineTo(Q,Z+$+4),L6(J,Y,K,1.25,{alpha:W})}function T9(J,Q,Z,K,$={}){let W=$.size??11;if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.font=ZY(W,$.weight),cq)J.letterSpacing=`${(($.ls??0.14)*W).toFixed(2)}px`;J.textAlign=$.align??"left",J.textBaseline=$.baseline??"alphabetic",J.fillStyle=$.color??e.blue;let X=J;if($.moving)X.layoutMoving=!0;J.fillText(Q,Z,K),X.layoutMoving=void 0,J.restore()}function fJ(J,Q=2){let Z=J.length>1&&J[0][0]===J[J.length-1][0]&&J[0][1]===J[J.length-1][1]?J.slice(0,-1):J.slice();for(let K=0;K<Q;K++){let $=[];for(let W=0;W<Z.length;W++){let X=Z[W],Y=Z[(W+1)%Z.length];$.push([X[0]*0.75+Y[0]*0.25,X[1]*0.75+Y[1]*0.25],[X[0]*0.25+Y[0]*0.75,X[1]*0.25+Y[1]*0.75])}Z=$}return Z.length?[...Z,Z[0]]:Z}function rK(J,Q,Z,K,$,W,X=1){let Y=$*0.5,H=Y*0.48,N=Z-Y/2,q=Math.max(0.9,$*0.07),U=(F)=>F.toFixed(2),G=(F)=>{J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.strokeStyle=W,J.lineWidth=q,J.lineCap="round",J.lineJoin="round",J.stroke(new Path2D(F)),J.restore()},D=(F,R)=>{if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.font=ZY($),J.textAlign="center",J.textBaseline="alphabetic",J.fillStyle=W,R)R(J);J.fillText(F,R?0:Q,R?0:Z),J.restore()},O=(F)=>{F.translate(Q,N),F.rotate(Math.PI),F.translate(0,Y/2)},B=(F)=>{F.translate(Q,Z),F.scale(-1,1)},E=(F)=>`M${U(F+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(F-H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(F+H)} ${U(N)}`;switch(K){case"ɑ":{let F=Q-0.06*$;return G(E(F)+`M${U(F+H)} ${U(Z-Y)}L${U(F+H)} ${U(Z)}`)}case"ɒ":{let F=Q+0.06*$;return G(E(F)+`M${U(F-H)} ${U(Z-Y)}L${U(F-H)} ${U(Z)}`)}case"ɪ":return G(`M${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z)}M${U(Q-Y*0.3)} ${U(Z-Y)}L${U(Q+Y*0.3)} ${U(Z-Y)}M${U(Q-Y*0.3)} ${U(Z)}L${U(Q+Y*0.3)} ${U(Z)}`);case"ɛ":return G(`M${U(Q+H*0.9)} ${U(Z-Y*0.92)}Q${U(Q-H*1.1)} ${U(Z-Y*1.08)} ${U(Q-H*0.25)} ${U(N)}Q${U(Q-H*1.3)} ${U(Z+Y*0.1)} ${U(Q+H*0.95)} ${U(Z-Y*0.06)}`);case"ɜ":return G(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}`);case"ɝ":return G(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}M${U(Q+H*0.55)} ${U(N-Y*0.1)}Q${U(Q+H*1.4)} ${U(N-Y*0.5)} ${U(Q+H*1.5)} ${U(N-Y*0.15)}`);case"ʊ":return G(`M${U(Q-H*1.15)} ${U(Z-Y)}Q${U(Q-H*0.5)} ${U(Z-Y*0.9)} ${U(Q-H*0.75)} ${U(N)}Q${U(Q-H)} ${U(Z)} ${U(Q)} ${U(Z)}Q${U(Q+H)} ${U(Z)} ${U(Q+H*0.75)} ${U(N)}Q${U(Q+H*0.5)} ${U(Z-Y*0.9)} ${U(Q+H*1.15)} ${U(Z-Y)}`);case"ʌ":return G(`M${U(Q-H)} ${U(Z)}L${U(Q)} ${U(Z-Y)}L${U(Q+H)} ${U(Z)}`);case"ɤ":return G(`M${U(Q-H)} ${U(Z-Y)}L${U(Q)} ${U(Z-Y*0.1)}L${U(Q+H)} ${U(Z-Y)}M${U(Q)} ${U(Z-Y*0.1)}Q${U(Q-H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z+Y*0.45)}Q${U(Q+H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z-Y*0.1)}`);case"ʃ":return G(`M${U(Q+H*0.9)} ${U(Z-Y*1.9)}Q${U(Q)} ${U(Z-Y*2.2)} ${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z+Y*0.3)}Q${U(Q)} ${U(Z+Y*0.95)} ${U(Q-H*0.9)} ${U(Z+Y*0.7)}`);case"θ":return G(`M${U(Q+H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q-H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q+H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y)}L${U(Q+H)} ${U(Z-Y)}`);case"ŋ":return G(`M${U(Q-H)} ${U(Z)}L${U(Q-H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y*0.6)}Q${U(Q-H*0.2)} ${U(Z-Y*1.1)} ${U(Q+H*0.6)} ${U(Z-Y*0.9)}Q${U(Q+H)} ${U(Z-Y*0.75)} ${U(Q+H)} ${U(Z-Y*0.4)}L${U(Q+H)} ${U(Z+Y*0.4)}Q${U(Q+H)} ${U(Z+Y*0.85)} ${U(Q+H*0.3)} ${U(Z+Y*0.8)}`);case"ə":return G(`M${U(Q-H)} ${U(N)}L${U(Q+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 1 ${U(Q-H*0.75)} ${U(Z-Y*0.85)}`);case"ɐ":return D("a",O);case"ɔ":return D("c",B);case"ɯ":return D("m",O);case"ɨ":return D("i"),G(`M${U(Q-H*0.8)} ${U(N)}L${U(Q+H*0.8)} ${U(N)}`);case"ø":return D("o"),G(`M${U(Q-H*1.1)} ${U(Z+Y*0.1)}L${U(Q+H*1.1)} ${U(Z-Y*1.1)}`);case"æ":return D("æ");case"œ":return D("œ");default:return D(K)}}var WY=new H8,VQ=new x;class I6 extends YQ{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let J=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],Q=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],Z=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(Z),this.setAttribute("position",new u9(J,3)),this.setAttribute("uv",new u9(Q,2))}applyMatrix4(J){let Q=this.attributes.instanceStart,Z=this.attributes.instanceEnd;if(Q!==void 0)Q.applyMatrix4(J),Z.applyMatrix4(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new S8(Q,6,1);return this.setAttribute("instanceStart",new h9(Z,3,0)),this.setAttribute("instanceEnd",new h9(Z,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new S8(Q,6,1);return this.setAttribute("instanceColorStart",new h9(Z,3,0)),this.setAttribute("instanceColorEnd",new h9(Z,3,3)),this}fromWireframeGeometry(J){return this.setPositions(J.attributes.position.array),this}fromEdgesGeometry(J){return this.setPositions(J.attributes.position.array),this}fromMesh(J){return this.fromWireframeGeometry(new KQ(J.geometry)),this}fromLineSegments(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new H8;let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0)this.boundingBox.setFromBufferAttribute(J),WY.setFromBufferAttribute(Q),this.boundingBox.union(WY)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new o8;if(this.boundingBox===null)this.computeBoundingBox();let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0){let Z=this.boundingSphere.center;this.boundingBox.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)VQ.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(VQ)),VQ.fromBufferAttribute(Q,$),K=Math.max(K,Z.distanceToSquared(VQ));if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}G0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new h0},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};l9.line={uniforms:o6.merge([G0.common,G0.fog,G0.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class K7 extends a9{constructor(J){super({type:"LineMaterial",uniforms:o6.clone(l9.line.uniforms),vertexShader:l9.line.vertexShader,fragmentShader:l9.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(J)}get color(){return this.uniforms.diffuse.value}set color(J){this.uniforms.diffuse.value=J}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(J){if(J===!0!==this.worldUnits)this.needsUpdate=!0;if(J===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(J){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=J}get dashed(){return"USE_DASH"in this.defines}set dashed(J){if(J===!0!==this.dashed)this.needsUpdate=!0;if(J===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(J){this.uniforms.dashScale.value=J}get dashSize(){return this.uniforms.dashSize.value}set dashSize(J){this.uniforms.dashSize.value=J}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(J){this.uniforms.dashOffset.value=J}get gapSize(){return this.uniforms.gapSize.value}set gapSize(J){this.uniforms.gapSize.value=J}get opacity(){return this.uniforms.opacity.value}set opacity(J){if(!this.uniforms)return;this.uniforms.opacity.value=J}get resolution(){return this.uniforms.resolution.value}set resolution(J){this.uniforms.resolution.value.copy(J)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(J){if(!this.defines)return;if(J===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(J===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}var tK=new X9,XY=new x,YY=new x,w9=new X9,S9=new X9,v8=new X9,eK=new x,J$=new M9,j9=new HQ,HY=new x,BQ=new H8,CQ=new o8,b8=new X9,y8,hJ;function UY(J,Q,Z){return b8.set(0,0,-Q,1).applyMatrix4(J.projectionMatrix),b8.multiplyScalar(1/b8.w),b8.x=hJ/Z.width,b8.y=hJ/Z.height,b8.applyMatrix4(J.projectionMatrixInverse),b8.multiplyScalar(1/b8.w),Math.abs(Math.max(b8.x,b8.y))}function sq(J,Q){let{matrixWorld:Z,geometry:K}=J,$=K.attributes.instanceStart,W=K.attributes.instanceEnd,X=Math.min(K.instanceCount,$.count);for(let Y=0,H=X;Y<H;Y++){j9.start.fromBufferAttribute($,Y),j9.end.fromBufferAttribute(W,Y),j9.applyMatrix4(Z);let N=new x,q=new x;if(y8.distanceSqToSegment(j9.start,j9.end,q,N),q.distanceTo(N)<hJ*0.5)Q.push({point:q,pointOnLine:N,distance:y8.origin.distanceTo(q),object:J,face:null,faceIndex:Y,uv:null,uv1:null})}}function iq(J,Q,Z){let K=Q.projectionMatrix,W=J.material.resolution,X=J.matrixWorld,Y=J.geometry,H=Y.attributes.instanceStart,N=Y.attributes.instanceEnd,q=Math.min(Y.instanceCount,H.count),U=-Q.near;y8.at(1,v8),v8.w=1,v8.applyMatrix4(Q.matrixWorldInverse),v8.applyMatrix4(K),v8.multiplyScalar(1/v8.w),v8.x*=W.x/2,v8.y*=W.y/2,v8.z=0,eK.copy(v8),J$.multiplyMatrices(Q.matrixWorldInverse,X);for(let G=0,D=q;G<D;G++){if(w9.fromBufferAttribute(H,G),S9.fromBufferAttribute(N,G),w9.w=1,S9.w=1,w9.applyMatrix4(J$),S9.applyMatrix4(J$),w9.z>U&&S9.z>U)continue;if(w9.z>U){let P=w9.z-S9.z,I=(w9.z-U)/P;w9.lerp(S9,I)}else if(S9.z>U){let P=S9.z-w9.z,I=(S9.z-U)/P;S9.lerp(w9,I)}w9.applyMatrix4(K),S9.applyMatrix4(K),w9.multiplyScalar(1/w9.w),S9.multiplyScalar(1/S9.w),w9.x*=W.x/2,w9.y*=W.y/2,S9.x*=W.x/2,S9.y*=W.y/2,j9.start.copy(w9),j9.start.z=0,j9.end.copy(S9),j9.end.z=0;let B=j9.closestPointToPointParameter(eK,!0);j9.at(B,HY);let E=u6.lerp(w9.z,S9.z,B),F=E>=-1&&E<=1,R=eK.distanceTo(HY)<hJ*0.5;if(F&&R){j9.start.fromBufferAttribute(H,G),j9.end.fromBufferAttribute(N,G),j9.start.applyMatrix4(X),j9.end.applyMatrix4(X);let P=new x,I=new x;y8.distanceSqToSegment(j9.start,j9.end,I,P),Z.push({point:I,pointOnLine:P,distance:y8.origin.distanceTo(I),object:J,face:null,faceIndex:G,uv:null,uv1:null})}}}class Q$ extends Q8{constructor(J=new I6,Q=new K7({color:Math.random()*16777215})){super(J,Q);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let J=this.geometry,Q=J.attributes.instanceStart,Z=J.attributes.instanceEnd,K=new Float32Array(2*Q.count);for(let W=0,X=0,Y=Q.count;W<Y;W++,X+=2)XY.fromBufferAttribute(Q,W),YY.fromBufferAttribute(Z,W),K[X]=X===0?0:K[X-1],K[X+1]=K[X]+XY.distanceTo(YY);let $=new S8(K,2,1);return J.setAttribute("instanceDistanceStart",new h9($,1,0)),J.setAttribute("instanceDistanceEnd",new h9($,1,1)),this}raycast(J,Q){let Z=this.material.worldUnits,K=J.camera;if(K===null&&!Z)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');if(Z===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let $=J.params.Line2!==void 0?J.params.Line2.threshold||0:0;y8=J.ray;let W=this.matrixWorld,X=this.geometry,Y=this.material;if(hJ=Y.linewidth+$,X.boundingSphere===null)X.computeBoundingSphere();CQ.copy(X.boundingSphere).applyMatrix4(W);let H;if(Z)H=hJ*0.5;else{let q=Math.max(K.near,CQ.distanceToPoint(y8.origin));H=UY(K,q,Y.resolution)}if(CQ.radius+=H,y8.intersectsSphere(CQ)===!1)return;if(X.boundingBox===null)X.computeBoundingBox();BQ.copy(X.boundingBox).applyMatrix4(W);let N;if(Z)N=hJ*0.5;else{let q=Math.max(K.near,BQ.distanceToPoint(y8.origin));N=UY(K,q,Y.resolution)}if(BQ.expandByScalar(N),y8.intersectsBox(BQ)===!1)return;if(Z)sq(this,Q);else iq(this,K,Q)}onBeforeRender(J){let Q=this.material.uniforms;if(Q&&Q.resolution)J.getViewport(tK),this.material.uniforms.resolution.value.set(tK.z,tK.w)}}var AQ=[0.6,0.85,1.05,1.3,1.6,2.1];class K${a=new Float32Array(768);n=0;reset(){return this.n=0,this}p(J,Q,Z){if(3*this.n+3>this.a.length){let $=new Float32Array(this.a.length*2);$.set(this.a),this.a=$}let K=3*this.n++;return this.a[K]=J,this.a[K+1]=Q,this.a[K+2]=Z,this}}class GY{material;mesh;geo=new I6;pos=new Float32Array(0);col=new Float32Array(0);pb=null;cb=null;cap=0;n=0;constructor(J){this.material=J;this.mesh=new Q$(this.geo,J),this.mesh.frustumCulled=!1,this.grow(2048)}grow(J){let Q=new Float32Array(J*6),Z=new Float32Array(J*6);Q.set(this.pos.subarray(0,this.n*6)),Z.set(this.col.subarray(0,this.n*6)),this.pos=Q,this.col=Z,this.cap=J,this.geo.dispose(),this.geo=new I6;let K=this.pb=new S8(Q,6,1).setUsage(s7),$=this.cb=new S8(Z,6,1).setUsage(s7);this.geo.setAttribute("instanceStart",new h9(K,3,0)),this.geo.setAttribute("instanceEnd",new h9(K,3,3)),this.geo.setAttribute("instanceColorStart",new h9($,3,0)),this.geo.setAttribute("instanceColorEnd",new h9($,3,3)),this.mesh.geometry=this.geo}seg(J,Q,Z,K,$,W,X,Y,H){if(this.n>=this.cap)this.grow(this.cap*2);let N=this.n++*6,q=this.pos,U=this.col;q[N]=J,q[N+1]=Q,q[N+2]=Z,q[N+3]=K,q[N+4]=$,q[N+5]=W,U[N]=U[N+3]=X,U[N+1]=U[N+4]=Y,U[N+2]=U[N+5]=H}commit(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0;for(let J of[this.pb,this.cb])J.clearUpdateRanges(),J.addUpdateRange(0,this.n*6),J.needsUpdate=!0}dispose(){this.geo.dispose(),this.material.dispose()}}var NY=new Map;function Z$(J){let Q=NY.get(J);if(!Q){let Z=parseInt(J.slice(1),16);Q=[(Z>>16&255)/255,(Z>>8&255)/255,(Z&255)/255],NY.set(J,Q)}return Q}class $${group=new UJ;batches;constructor(){this.batches=AQ.map((J)=>{let Q=new K7({linewidth:J,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});Q.blending=v7,Q.blendEquation=b7,Q.fog=!0;let Z=new GY(Q);return this.group.add(Z.mesh),Z})}setResolution(J,Q){for(let Z of this.batches)Z.material.resolution.set(J,Q)}begin(){for(let J of this.batches)J.n=0}end(){for(let J of this.batches)J.commit()}batch(J){let Q=0;for(let Z=1;Z<AQ.length;Z++)if(Math.abs(AQ[Z]-J)<Math.abs(AQ[Q]-J))Q=Z;return this.batches[Q]}line(J,Q,Z,K,$={}){if(Q<2)return;let W=$.alpha??1;if(this.strokes(J,Q,Z$(Z),W,this.batch(K),$.close??!1),$.hot)this.strokes(J,Q,Z$(RQ(Z)),W,this.batch(K*0.42),$.close??!1)}poly(J,Q,Z,K={}){this.line(J.a,J.n,Q,Z,K)}seg(J,Q,Z,K,$,W,X,Y,H=1){let[N,q,U]=Z$(X);this.batch(Y).seg(J,Q,Z,K,$,W,N*H,q*H,U*H)}strokes(J,Q,[Z,K,$],W,X,Y){Z*=W,K*=W,$*=W;for(let H=0;H<Q-1;H++){let N=3*H;X.seg(J[N],J[N+1],J[N+2],J[N+3],J[N+4],J[N+5],Z,K,$)}if(Y){let H=3*(Q-1);X.seg(J[H],J[H+1],J[H+2],J[0],J[1],J[2],Z,K,$)}}dispose(){for(let J of this.batches)J.dispose()}}var X$={x0:-7.5,x1:10.25,y0:-4.55,y1:19.9};function Y$(J,Q){let Z=J.tract;return-Math.max(-0.2,Math.min(3,Q))*Z.scale/QY(Z.P(-2.5,10.5),Z.P(6.95,7.75))}function H$(J,Q){let Z=J.tract,K=Z.P(-2.5,10.5),$=Y$(J,Q.jaw);return(W,X)=>IQ(Z.P(W,X),K,$)}function W$(J,Q,Z,K=0,$=40){let W=Math.cos(-K),X=Math.sin(-K),Y=[];for(let H=0;H<=$;H++){let N=H/$*Math.PI*2,q=Math.cos(N)*Q,U=Math.sin(N)*Z;Y.push({x:J.x+q*W-U*X,y:J.y+q*X+U*W})}return Y}function oq(J,Q,Z){let K=Math.min(J.x,Q.x),$=Math.max(J.x,Q.x),W=Math.min(J.y,Q.y),X=Math.max(J.y,Q.y),Y=Math.min(Z,($-K)/2,(X-W)/2),H=[],N=(q,U,G)=>{for(let D=0;D<=6;D++){let O=G+D/6*(Math.PI/2);H.push({x:q+Math.cos(O)*Y,y:U+Math.sin(O)*Y})}};return N($-Y,X-Y,0),N(K+Y,X-Y,Math.PI/2),N(K+Y,W+Y,Math.PI),N($-Y,W+Y,3*Math.PI/2),H.push(H[0]),H}var zQ=(J)=>-1.2-0.025*J;function U$(J){let Q=J.tract.scale,Z=J.bodyParams.pharynx;return(K,$)=>({x:K*Q,y:($<7?7-(7-$)*Z:$)*Q})}function $7(J,Q,Z){let K=J.tract,$=(C,p)=>K.P(C,p),W=H$(J,Z),X=K.scale,Y=Z.larynx*X,H=U$(J),N=Q.upperLip.slice(7),q=Q.lowerLip.slice(7),U=L8([H(2.3,-4.6),H(2.38,-1.5),H(2.52,0.4),H(3,1.7),W(5.3,3),W(7.25,3.35),W(7.95,4.6),W(7.55,5.7)],4),G=L8([N[N.length-1],H(7.05,10.6),H(7.75,10.78),H(8.75,11.05),H(9.25,11.65),H(8.95,12.6),H(8.35,13.9),H(7.7,15),H(7.95,16.1),H(7.9,18.1),H(6.9,20.5)],4),D=L8([H(6.9,20.5),H(3,22.9),H(-2.2,22.7),H(-6.9,19.6),H(-8.7,15.4),H(-8.3,11.9),H(-7.4,8.9),H(-6.8,4.8),H(-6.6,0),H(-6.6,-4.6)],4),O=[];for(let C=0;C<9;C++){let p=-4.4+C*1.75;if(p>10.5)break;let j=zQ(p)-2.25;O.push(oq($(j,p+1.4),$(j+1.6,p),0.32*X))}let E=[[1,9.6],[1.8,9.92],[2.7,10.18],[3.6,10.3],[4.4,10.25],[5.1,10.05],[5.7,9.72],[6.15,9.36],[6.55,9.15],[7,9.6]].map(([C,p])=>K.P(C,p)),F=Q.jawBone.filter((C)=>C.x>0.8*X),R=Q.glottis,P={x:$(1.6,0).x,y:$(0,2.9).y+0.6*Y},I=[];for(let C=0;C<4;C++){let p=R.y-(0.9+C*1)*X;if(p<-4.4)break;I.push([{x:R.x+0.8*X,y:p},{x:R.x+1.05*X,y:p-0.05},{x:R.x+1.05*X,y:p-0.5*X},{x:R.x+0.82*X,y:p-0.45*X},{x:R.x+0.8*X,y:p}])}let A=W(6,5.45),k=Q.tongueCenter,_=[];for(let C=0;C<=16;C++){let p=Math.PI*(0.18+0.9*C/16),j={x:k.x+Math.cos(p)*Q.tongueRadius*1.25,y:k.y+Math.sin(p)*Q.tongueRadius*1.25},b={x:k.x,y:(k.y+A.y)/2},m=[];for(let T=0;T<=12;T++){let w=T/12;m.push({x:(1-w)*(1-w)*A.x+2*(1-w)*w*b.x+w*w*j.x,y:(1-w)*(1-w)*A.y+2*(1-w)*w*b.y+w*w*j.y})}_.push(m)}let L={x:zQ(R.y/X)*X,y:R.y};return{f:Q,model:J,skinLower:[...U,...q.slice().reverse()],skinUpper:[...N,...G.slice(1),...D.slice(1)],inset:L8([H(1.85,-4.6),H(1.9,-0.8),H(2.3,1.6),W(5.2,3.6),W(6.9,3.9),W(7.4,4.9),W(7.2,5.9),H(6.6,9.9),H(7.6,10.9),H(8.55,11.5),H(8.1,13.4),H(7.25,15.2),H(7.45,18),H(3,22.2),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.6,12),H(-6.7,8.7),H(-6.1,4.6),H(-6,-4.6)],3),skull:L8([H(7,16.2),H(7.3,18.5),H(6,20.7),H(3,22.1),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.4,12.6),H(-4.6,12.2),H(-2.2,13.3),H(1,13.7),H(4.1,14.1),H(6.2,14.9)],4),brain:L8([H(6.55,16.3),H(6.75,18.4),H(5.5,20.1),H(2.8,21.4),H(-1.9,21.3),H(-5.8,18.8),H(-7.1,15.4),H(-6.7,13.1),H(-4.4,12.8),H(-2.1,13.9),H(1,14.3),H(4,14.7),H(5.9,15.4)],4),sulcus:L8([H(5.4,19.4),H(2.4,20.5),H(-1.4,20.4),H(-4.8,18.4)],4),eye:W$(H(6.5,15.4),1.1*X,0.95*X),eyeC:H(6.5,15.4),vertebrae:O,cords:[[$(-5.3,-4.6),$(-4.5,-4.6),$(-4.5,11.8),$(-5.1,12.4),$(-5.6,11.6)],[$(-5.1,-4.6),$(-4.7,-4.6),$(-4.72,11.4),$(-5.15,11.6)]],nasal:L8([H(0.3,11.2),H(1.1,10.25),H(2.7,10.75),H(4.6,10.85),H(6.4,10.65),H(7.6,10.85),H(8.45,11.3),H(8,12.2),H(6.7,13.4),H(4.4,13.9),H(1.8,13.6),H(0.2,12.6)],4),turbinates:[[3,11.45,2.1,0.32],[3.5,12.45,1.9,0.3],[4,13.3,1.45,0.22]].map(([C,p,j,b])=>W$(H(C,p),j*X,b*X,-0.04)),palOral:E,palNasal:E.map((C)=>({x:C.x,y:C.y+0.55*X})),jawLower:F,jawUpper:F.map((C)=>({x:C.x,y:C.y+0.75*X})),hyoid:W$(P,0.5*X,0.28*X,0.3,28),thyroid:[{x:R.x+0.75*X,y:R.y-1.6*X},{x:R.x+1.75*X,y:R.y-0.6*X},{x:R.x+1.95*X,y:R.y+1.2*X},{x:R.x+1.45*X,y:R.y+1.9*X},{x:R.x+1.15*X,y:R.y+1.1*X},{x:R.x+1.3*X,y:R.y-0.4*X},{x:R.x+0.75*X,y:R.y-1.6*X}],trachea:[[{x:R.x-0.65*X,y:R.y},{x:R.x-0.75*X,y:-4.8}],[{x:R.x+0.75*X,y:R.y},{x:R.x+0.95*X,y:-4.8}]],rings:I,outerWall:Q.outer.filter((C)=>C.y>R.y||C.x>0),glottisWall:[L,Q.outer.find((C)=>C.y>R.y)??L],fibres:_,folds:[[{x:R.x-0.62*X,y:R.y+0.05},{x:R.x-0.1,y:R.y+0.12*X},{x:R.x-0.62*X,y:R.y+0.32*X},{x:R.x-0.62*X,y:R.y+0.05}],[{x:R.x+0.72*X,y:R.y+0.05},{x:R.x+0.12,y:R.y+0.12*X},{x:R.x+0.72*X,y:R.y+0.32*X},{x:R.x+0.72*X,y:R.y+0.05}]],lowerTeeth:[...Q.lowerTeeth,W(6.8,6),W(6.4,6.2),Q.lowerTeeth[0]]}}class W7{pitch=0;yaw=0;toPitch=0;toYaw=0;next=2;update(J,Q){if(J>=this.next){let K=Math.random()<0.35;this.toPitch=K?0:(Math.random()*2-1)*0.55,this.toYaw=K?0:(Math.random()*2-1)*0.9,this.next=J+1.2+Math.random()*3.5}let Z=1-Math.exp(-Q*28);this.pitch+=(this.toPitch-this.pitch)*Z,this.yaw+=(this.toYaw-this.yaw)*Z}}function qY(J,Q,Z,K,$){if(Q.compact)return aq(J,Q,Z,K,$);let{w:W,h:X}=Q,Y=W-18,H=26;if(Z.length>=3)["F1","F2","F3"].forEach((O,B)=>{T9(J,O,Y-78,H+B*22,{size:12,color:e.amber,ls:0.12,alpha:0.75}),T9(J,String(Math.round(Z[B])),Y,H+B*22,{size:15,color:e.amber,align:"right",ls:0.08})}),T9(J,"HZ",Y,H+64,{size:10,color:e.amber,align:"right",alpha:0.6}),H+=110;for(let O of K)T9(J,O,Y,H,{size:10,color:OQ.secondary,align:"right",ls:0.14}),H+=16;if(!$.length)return;let{slotX:N,slotY:q}=Q,U=Math.max(60,(W-14-N)/2),G=Math.max(56,Math.min(112,(X-8-q)/2)),D=Math.max(22,Math.min(44,G*0.4,U*0.32));$.slice(0,4).forEach((O,B)=>{let E=N+B%2*U,F=q+Math.floor(B/2)*G;Z7(J,E+6,F+4,4,O.color),T9(J,O.label.toUpperCase(),E+16,F+8,{size:11,color:O.color,ls:0.2,alpha:0.85});let R=F+18+D*1.1;if(O.ipa)rK(J,E+D*0.6,R,O.value,D*1.45,O.color);else T9(J,O.value.toUpperCase(),E,R,{size:O.value.length>3?D*0.82:D,color:O.color,weight:"m",ls:0.04});if(O.unit)T9(J,O.unit.toUpperCase(),O.ipa?E+D*1.5:E+(O.value.length>3?0:D*1.64),O.ipa||O.value.length<=3?R:R+18,{size:11,color:O.color,ls:0.16,alpha:0.7})})}function aq(J,Q,Z,K,$){let{w:W,h:X}=Q;if(Z.length>=3){let U=(W-24)/3;["F1","F2","F3"].forEach((G,D)=>{T9(J,G,12+D*U,18,{size:10,color:e.amber,ls:0.12,alpha:0.75}),T9(J,String(Math.round(Z[D])),12+D*U+26,18,{size:13,color:e.amber,ls:0.06})})}if(T9(J,K.slice(0,2).join("   "),12,36,{size:9,color:OQ.secondary,ls:0.12}),K.length>2)T9(J,K.slice(2).join("   "),12,50,{size:9,color:OQ.secondary,ls:0.12});let Y=$.slice(0,4);if(!Y.length)return;let H=(W-24)/Y.length,N=X-82,q=Math.max(16,Math.min(30,H*0.28));Y.forEach((U,G)=>{let D=12+G*H;Z7(J,D+4,N,3,U.color),T9(J,U.label.toUpperCase(),D+12,N+3,{size:8,color:U.color,ls:0.14,alpha:0.85});let O=N+18+q;if(U.ipa)rK(J,D+q*0.5,O,U.value,q*1.4,U.color);else T9(J,U.value.toUpperCase(),D,O,{size:U.value.length>3?q*0.62:q,color:U.color,weight:"m",ls:0.02});if(U.unit)T9(J,U.unit.toUpperCase(),D,O+16,{size:8,color:U.color,ls:0.14,alpha:0.7})})}var kQ=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},N$=(J,Q,Z)=>Math.max(Q,Math.min(Z,J)),PQ=(J,Q,Z,K)=>J+(Q-J)*(1-Math.exp(-K/Z));class _Q{hz;damping;x=0;v=0;constructor(J,Q){this.hz=J;this.damping=Q}step(J,Q){let Z=2*Math.PI*this.hz,K=Math.max(1,Math.ceil(Q/0.008)),$=Q/K;for(let W=0;W<K;W++)this.v+=(Z*Z*(J-this.x)-2*this.damping*Z*this.v)*$,this.x+=this.v*$;return this.x}}function rq(J){let Q=J.t.pressureRms,Z=J.nPh+J.nOr-3;return Z>=J.nPh&&Z<Q.length?Q[Z]/980.665:0}class V6{puff=0;brow=0;lid=0;lookUp=0;content=0;nod=0;tilt=0;clock=0;cheeks=new _Q(6.5,0.32);nodSpring=new _Q(2.4,0.42);tiltSpring=new _Q(3.2,0.3);ref=NaN;fast=NaN;held=0;hold=0;nextBlink=1.5+Math.random()*2;blinkAt=-1;secondBlink=!1;lastStep=-1;update(J,Q){this.clock+=Q;let Z=J?.t,K=!!Z&&Z.voicing>0.45&&Z.gate>0.3&&Z.f0>30&&Z.outRms>0.004,$=J?kQ(1.5,7,rq(J)):0;this.puff=N$(this.cheeks.step($,Q),-0.35,1.25);let W=0,X=0;if(K){let D=Math.log2(Z.f0);if(!Number.isFinite(this.ref)||Math.abs(12*(D-this.ref))>14)this.ref=this.fast=D;if(this.ref=PQ(this.ref,D,5,Q),Math.abs(12*(D-this.fast))>2.5)this.fast=D,this.held=0;this.fast=PQ(this.fast,D,0.35,Q),this.held+=Q,W=12*(D-this.ref),X=12*(D-this.fast)}else this.held=0;let Y=(K?N$(W/6,-0.7,1):0)+0.3*this.content;this.brow=PQ(this.brow,Y,K?0.12:0.45,Q),this.lookUp=0.32*Math.max(0,this.brow);let H=K?0.92*kQ(0.9,1.9,this.held)*kQ(0.15,0.55,this.brow):0;if(this.hold=PQ(this.hold,H,H>this.hold?0.35:0.08,Q),this.clock>=this.nextBlink&&this.hold<0.2)this.blinkAt=this.clock,this.secondBlink=!this.secondBlink&&Math.random()<0.18,this.nextBlink=this.clock+(this.secondBlink?0.28:2+Math.random()*4.5);let N=(this.clock-this.blinkAt)/0.17,q=this.blinkAt>=0&&N<1?Math.sin(Math.PI*N)**0.7:0;this.lid=Math.max(q,this.hold,0.95*this.content);let U=J?.beatStep??-1;if(U>=0&&this.lastStep>=0&&U!==this.lastStep){let D=U<this.lastStep;if(D||Math.floor(U/4)!==Math.floor(this.lastStep/4))this.nodSpring.v-=D||Math.floor(U/16)!==Math.floor(this.lastStep/16)?1.3:0.8}this.lastStep=U,this.nod=this.nodSpring.step(0.13*this.brow,Q);let G=kQ(0.6,2,this.held)*0.07*Math.sin(this.clock*1.7);this.tilt=this.tiltSpring.step(G+0.05*N$(X,-1.5,1.5),Q)}}function TQ(J,Q,Z){let K=J.tract,$=H$(J,Z),W={x:(Q.upperLip[6].x+Q.lowerLip[6].x)/2+0.15,y:(Q.upperLip[6].y+Q.lowerLip[6].y)/2};return[{id:"tongue",pos:Q.tongueCenter,label:"Tongue body"},{id:"tip",pos:Q.tip,label:"Tongue tip"},{id:"jaw",pos:$(7.5,4.9),label:"Jaw"},{id:"lips",pos:W,label:"Lips"},{id:"velum",pos:Q.velum[Math.floor(Q.velum.length/2)],label:"Soft palate"},{id:"larynx",pos:{x:Q.glottis.x+1.2*K.scale,y:Q.glottis.y},label:"Larynx"}]}var tq=[0.09,0.06,0.03],f8={x0:-9.4,x1:X$.x1,y0:X$.y0,y1:23.5},G$=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)};function eq(J,Q,Z){let K=1.22*Q,$=1.08*Q,W=(O,B)=>{let E=[];for(let F=0;F<=14;F++){let R=O+(B-O)*F/14;E.push({x:J.x+K*Math.cos(R),y:J.y+$*Math.sin(R)})}return E},X=Math.PI/180,Y=Math.max(0,Z.brow),H=30*X+14*X*Y,N=-32*X,q=H+(N-H)*Z.lid,U=[],G=0.42*Q*Z.brow,D=0.3*Q*Math.max(0,-Z.brow);for(let O=0;O<=12;O++){let B=-1+O/6,E=(1+B)/2;U.push({x:J.x+0.1*Q+0.9*Q*B,y:J.y+1.4*Q+0.2*Q*(1-B*B)+G-D*E})}return[{pts:W(100*X,q),w:1.15,alpha:0.9},{pts:W(-78*X,N),w:1,alpha:0.75},{pts:U,w:1.4,alpha:0.85}]}function JF(J,Q,Z){if(Math.abs(Z)<0.01)return null;let K={x:(J.upperLip[6].x+J.lowerLip[6].x)/2,y:(J.upperLip[6].y+J.lowerLip[6].y)/2},$=0.6*Q*Z;return(W)=>{let X=Math.abs(W.y-K.y)/(2.6*Q);if(X>=1)return W;let Y=(1-X*X)**2*G$(0.03,0.45,X)*G$(K.x-1.2*Q,K.x-0.5*Q,W.x);return Y?{x:W.x+$*Y,y:W.y}:W}}class QF{particles=[];scale=20;ox=0;oy=0;w=0;h=0;compact=!1;sparkSeed=1;geo=null;echoes=[];clock=0;lastEcho=-1;gaze=new W7;face=new V6;constructor(){for(let J=0;J<170;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN})}resize(J,Q){this.w=J,this.h=Q,this.compact=J<560;let Z=12,K=this.compact?62:10,$=this.compact?92:8;this.scale=Math.max(1,Math.min((J-2*Z)/(f8.x1-f8.x0),(Q-K-$)/(f8.y1-f8.y0)));let W=J-2*Z-(f8.x1-f8.x0)*this.scale;this.ox=Z+(this.compact?W/2:Math.min(W/2,Math.max(0,W-220)))-f8.x0*this.scale,this.oy=K+Math.max(0,(Q-K-$-(f8.y1-f8.y0)*this.scale)/2)+f8.y1*this.scale;for(let X of this.particles)X.px=NaN}X(J){return this.ox+J.x*this.scale}Y(J){return this.oy-J.y*this.scale}P(J){return[this.ox+J.x*this.scale,this.oy-J.y*this.scale]}toBody(J,Q){return{x:(J-this.ox)/this.scale,y:(this.oy-Q)/this.scale}}get pxPerCm(){return this.scale}handles(J,Q,Z){return TQ(J,Q,Z)}geometry(J,Q,Z){if(this.geo&&this.geo.f===Q&&this.geo.model===J)return this.geo;return this.geo=$7(J,Q,Z)}lens(J,Q,Z){let K=this.gaze;K.update(this.clock,Z);let $=0.85*Q*Math.cos(K.yaw),W=K.pitch+this.face.lookUp,X=Math.cos(W),Y=Math.sin(W),H={x:J.x+$*X,y:J.y+$*Y},N=(0.18+0.2*Math.abs(Math.sin(K.yaw)))*Q,q=0.42*Q,U=[];for(let G=0;G<=20;G++){let D=G/20*Math.PI*2,O=Math.cos(D)*N,B=Math.sin(D)*q;U.push({x:H.x+O*X-B*Y,y:H.y+O*Y+B*X})}return U}draw(J,Q,Z,K,$,W,X){this.clock+=X.dt;let Y=this.geometry(Q,Z,K),H=(E)=>E.map((F)=>this.P(F)),N=(E,F,R,P={})=>yJ(J,H(E),F,R,P);N(Y.inset,e.blueDim,0.9,{alpha:0.9}),N(Y.skull,e.blueDim,0.9,{close:!0}),N(Y.brain,e.blueMid,1.1,{close:!0}),N(Y.sulcus,e.blueDim,0.9),N(Y.eye,e.blueMid,1.1);let q=Q.tract.scale,U=JF(Z,q,this.face.puff),G=(E)=>U?E.map(U):E;N(this.lens(Y.eyeC,q,X.dt),e.blueDim,0.9,{alpha:1-G$(0.45,0.9,this.face.lid)});for(let E of eq(Y.eyeC,q,this.face))N(E.pts,e.blue,E.w,{alpha:E.alpha});for(let E of Y.vertebrae)N(E,e.blueDim,1);N(Y.cords[0],e.blueDim,0.8,{alpha:0.8}),N(Y.cords[1],e.blueDim,0.8,{alpha:0.6}),N(Y.nasal,e.blueMid,1,{close:!0});for(let E of Y.turbinates)N(E,e.blueDim,0.9);N(Y.palOral,e.blueMid,1.1),N(Y.palNasal,e.blueMid,1.1),N(Y.hyoid,e.blueDim,1),N(Y.thyroid,e.blueDim,1);for(let E of Y.trachea)N(E,e.blueMid,1);for(let E of Y.rings)N(E,e.blueDim,0.9);if(W.pressure&&$)this.drawPressure(J,Q,Z,$);else if(W.grid)for(let E of Z.grid)Q7(J,this.X(E.inner),this.Y(E.inner),this.X(E.outer),this.Y(E.outer),e.blueDim,0.9,{alpha:0.7});if(W.particles&&$)this.drawParticles(J,Q,Z,$,X.dt);if($&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock,this.echoes.push({t:this.clock,tongue:Z.tongue.slice(),jaw:Y.jawLower,upperLip:fJ(G(Z.upperLip).map((E)=>[E.x,E.y])),lowerLip:fJ(G(Z.lowerLip).map((E)=>[E.x,E.y]))});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if($)tq.forEach((E,F)=>{let R=this.nearestEcho(this.clock-E);if(!R)return;let P=0.1+0.07*F;N(R.tongue,e.green,1,{alpha:P}),N(R.jaw,e.red,1,{alpha:P*0.9});let I=(A)=>yJ(J,A.map(([k,_])=>[this.ox+k*this.scale,this.oy-_*this.scale]),e.pink,1,{alpha:P*0.9});I(R.upperLip),I(R.lowerLip)});N(G(Y.skinLower),e.blue,1.7,{hot:!0}),N(G(Y.skinUpper),e.blue,1.7,{hot:!0}),N(Y.outerWall,e.blue,1.4,{hot:!0}),N(Z.inner,e.blue,1.3,{alpha:0.9}),N(Y.glottisWall,e.blue,1.2,{alpha:0.8}),N(Z.epiglottis.slice(0,3),e.blue,2.2,{alpha:0.85}),N(Z.upperTeeth,e.blueMid,1.1,{close:!0}),N(Y.lowerTeeth,e.blueMid,1.1);for(let E of Y.folds)N(E,e.blue,1);let D=H(Z.tongue);J.save();let O=new Path2D;D.forEach(([E,F],R)=>R?O.lineTo(E,F):O.moveTo(E,F)),O.closePath(),J.clip(O);for(let E of Y.fibres)N(E,e.green,0.8,{alpha:0.32});J.restore(),yJ(J,D,e.green,1.6,{hot:!0}),N(Y.jawLower,e.red,1.5,{hot:!0}),N(Y.jawUpper,e.red,1,{alpha:0.45});let B=(E,F)=>fJ(E.map((R)=>this.P(R)),F);if(yJ(J,B(G(Z.upperLip),2),e.pink,1.5,{hot:!0}),yJ(J,B(G(Z.lowerLip),2),e.pink,1.5,{hot:!0}),yJ(J,B(Z.velum,3),e.white,1.25,{alpha:0.92}),$)this.drawTurbulence(J,Q,Z,$);if(W.calipers)this.drawCalipers(J,Z);this.drawHandles(J,Q,Z,K,X.hover,X.drag),this.drawReadouts(J,X.formants,X.info,X.slots)}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}gridPoint(J,Q,Z){let K=J.grid;if(K.length<2)return null;if(Q<=K[0].s){let G=Math.max(0,Q/Math.max(0.01,K[0].s)),D=J.glottis,O={x:(K[0].inner.x+K[0].outer.x)/2,y:(K[0].inner.y+K[0].outer.y)/2},B=0.35;return{x:D.x+(O.x-D.x)*G+Z*0.35*0.5,y:D.y+(O.y-D.y)*G}}let $=0,W=K.length-1;if(Q>=K[W].s)return null;while(W-$>1){let G=$+W>>1;if(K[G].s<=Q)$=G;else W=G}let X=(Q-K[$].s)/Math.max(0.000001,K[W].s-K[$].s),Y=K[$].inner.x+(K[W].inner.x-K[$].inner.x)*X,H=K[$].inner.y+(K[W].inner.y-K[$].inner.y)*X,N=K[$].outer.x+(K[W].outer.x-K[$].outer.x)*X,q=K[$].outer.y+(K[W].outer.y-K[$].outer.y)*X,U=0.5+0.5*Z*0.82;return{x:Y+(N-Y)*U,y:H+(q-H)*U}}nodeValueAtS(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}drawPressure(J,Q,Z,K){let $=K.t,W=Q.nodeS($.phLen,$.orLen);if(W.length!==$.pressureRms.length)return;for(let X of Z.grid){let Y=Math.pow(LQ(this.nodeValueAtS($.pressureRms,W,X.s)),0.85);Q7(J,this.X(X.inner),this.Y(X.inner),this.X(X.outer),this.Y(X.outer),MQ(Y),1.15,{alpha:0.35+0.65*Y})}}drawParticles(J,Q,Z,K,$){let W=K.t,X=Q.nodeS(W.phLen,W.orLen),Y=new Float32Array(W.phAreas.length+W.orAreas.length);Y.set(W.phAreas,0),Y.set(W.orAreas,W.phAreas.length);let H=Z.lipS,N=[new Path2D,new Path2D,new Path2D];for(let q of this.particles){let U=this.nodeValueAtS(W.flow,X,q.s),G=Math.max(0.05,this.nodeValueAtS(Y,X,q.s)),D=U/G,O=Math.sign(D)*2.2*Math.log1p(Math.abs(D)/30);if(q.s+=O*$,q.life-=$*0.25,q.s>H||q.s<0||q.life<=0||Math.abs(D)<3){if(!(Math.abs(D)<3&&q.life>0)){q.s=Math.random()*0.8,q.u=Math.random()*2-1,q.life=0.6+Math.random()*0.8,q.px=NaN;continue}}let B=this.gridPoint(Z,q.s,q.u);if(!B)continue;let E=this.X(B),F=this.Y(B);if(Number.isFinite(q.px)){let R=Math.min(2,Math.floor(Math.min(1,Math.abs(O)/6)*Math.min(1,q.life)*3));N[R].moveTo(q.px,q.py),N[R].lineTo(E,F)}q.px=E,q.py=F}N.forEach((q,U)=>L6(J,q,"#ffe2a8",1.1,{alpha:0.16+0.2*U}))}drawTurbulence(J,Q,Z,K){let $=K.t;if(!($.noiseLevel>1)||$.noiseNode<0)return;let W=Q.branchS($.noiseNode,$.phLen,$.orLen);if(W<0)return;let X=Math.min(1,Math.log10($.noiseLevel)/3.2);if(X<=0.05)return;let Y=this.sparkSeed=this.sparkSeed*16807%2147483647,H=()=>(Y=Y*16807%2147483647)/2147483647;for(let N=0;N<30;N++){let q=this.gridPoint(Z,W+0.2+H()*1.2,H()*2-1);if(!q)continue;Z7(J,this.X(q),this.Y(q),0.6+H()*1.4,"#f4fbff",0.15+0.7*X*H())}}drawCalipers(J,Q){let Z=-1,K=1/0;for(let F=2;F<Q.grid.length-1;F++)if(Q.grid[F].area<K)K=Q.grid[F].area,Z=F;if(Z<0||K>=1.2)return;let $=Q.grid[Z],[W,X]=this.P($.inner),[Y,H]=this.P($.outer);Q7(J,W,X,Y,H,e.white,1.4,{hot:!0});let N=-(H-X),q=Y-W,U=Math.hypot(N,q)||1;for(let[F,R]of[[W,X],[Y,H]])Q7(J,F-N/U*4,R-q/U*4,F+N/U*4,R+q/U*4,e.white,1.2);let G=Q.grid[Q.grid.length-1],O=Math.max(this.P(G.inner)[0],this.P(G.outer)[0])-Math.max(W,Y)<1.5*this.pxPerCm,B=O?Math.min(W,Y)-10:Math.max(W,Y)+10,E=Math.min(X,H)-4;T9(J,K<=0.0005?"CLOSED":`${K.toFixed(2)} CM²`,B,E,{size:11,color:e.white,ls:0.12,align:O?"right":"left"})}drawHandles(J,Q,Z,K,$,W){let X={tongue:e.green,jaw:e.red,lips:e.pink,velum:e.white,tip:e.blueMid,larynx:e.blueMid},Y={tongue:8,jaw:7,lips:7,velum:6,tip:5,larynx:5};for(let H of this.handles(Q,Z,K)){let N=this.X(H.pos),q=this.Y(H.pos),U=H.id===W||H.id===$;if($Y(J,N,q,X[H.id],Y[H.id]+(U?2:0),U?1:0.9),U)KY(J,N,q,28,X[H.id],1,{alpha:0.75}),T9(J,H.label.toUpperCase(),N+32,q-18,{size:12,color:X[H.id],ls:0.18})}}drawReadouts(J,Q,Z,K){qY(J,{w:this.w,h:this.h,compact:this.compact,slotX:this.X({x:3.35,y:0}),slotY:this.Y({x:0,y:2.05})},Q,Z,K)}}var h8=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},FY=(J)=>Math.max(0,Math.min(1,J));function r8(J,Q){if(Q<=J[0][0])return J[0][1];for(let Z=1;Z<J.length;Z++)if(Q<=J[Z][0]){let[K,$]=J[Z-1],[W,X]=J[Z];return $+(X-$)*(Q-K)/(W-K)}return J[J.length-1][1]}var ZF=[[-4.6,5.3],[0,5.4],[2.5,5.5],[4.5,5.25],[6.5,5.5],[8.5,6.1],[10.5,6.6],[12.5,7],[15,7.3],[17.5,7.65],[19.5,7.4],[21,6.5],[22.2,4.6],[23,1]],KF=[[3.4,5.9],[4.6,6.2],[5.7,6.15],[6.5,6.2],[8,6.35],[9.5,6.35],[10.6,6.55],[11.6,6.75],[12.6,6.9],[13.9,7.15],[15,7.45],[16.1,7.95]],$F=[[3.4,2],[4.6,2.2],[5.7,2.4],[6.5,2.6],[10.6,1.7],[11,1.75],[11.65,1.2],[12.6,0.95],[13.9,0.75],[15,0.9],[16.1,1.6]],WF=[[-4.6,0.5],[3,0.5],[6,0.42],[12,0.42],[16,0.45],[23,0.45]],XF=[[-3,8.5],[-1.6,8],[-0.6,6.4],[1.2,4.6],[3.5,3.6],[5.3,3],[7.3,3.3],[8.6,4.4]],YF=[[6,-0.6],[7.4,-0.8],[9.6,-1.9],[10.6,-2.5],[12,-2.6]],HF=[[12.3,4],[13,5.6],[14.5,6.4],[16.5,6.9],[18.5,6.6],[20,5.4],[21,3.6],[21.45,0.5]],UF=[[0,1.5],[0.15,1.9],[0.35,2.35],[0.6,2.45],[0.8,2.2],[0.92,1.5],[1,0.55]],NF=[[0,1.3],[0.35,1.1],[0.7,0.9],[0.9,0.55],[1,0.25]],GF=[[0.85,1.05,0.7],[0.68,0.95,0.65],[0.78,1.1,0.8],[0.7,0.85,0.9],[0.68,0.8,0.9],[1,0.75,1.1],[0.92,0.7,1.05]],qF=[[0.54,0.9,0.6],[0.6,0.92,0.62],[0.7,1,0.75],[0.7,0.85,0.8],[0.72,0.8,0.85],[1.1,0.72,1.05],[1.05,0.7,1]],FF=3,xJ=2.2,MY=(J)=>Math.abs(J)<1?(1-J*J)**2:0;function SQ(J,Q,Z=!1){let K=Math.min(1,Math.abs(Q)/J.W),$=Math.pow(1-Math.pow(K,J.pf),1/J.pf);return J.xw+(J.Fs-J.xw)*$+(Z?0:J.E*MY(Q/J.wf))}function DF(J,Q){let Z=Q>J.xw,K=Z?(Q-J.xw)/Math.max(0.000001,J.Fs-J.xw):(J.xw-Q)/Math.max(0.000001,J.xw-J.Bk),$=Z?J.pf:xJ;return J.W*Math.pow(Math.max(0,1-Math.pow(Math.min(1,K),$)),1/$)}function EF(J,Q,Z){Z.length=0;let K=12,$=10,W=16;for(let Y=0;Y<K;Y++){let H=Math.PI-Y/K*(Math.PI/2);Z.push(J.xw-(J.xw-J.Bk)*Math.pow(Math.abs(Math.cos(H)),2/xJ),J.W*Math.pow(Math.sin(H),2/xJ))}let X=Math.asin(Math.min(1,Math.pow(Q/J.W,J.pf/2)));for(let Y=0;Y<$;Y++){let H=Math.PI/2-Y/$*(Math.PI/2-X),N=J.W*Math.pow(Math.sin(H),2/J.pf);Z.push(J.xw+(J.Fs-J.xw)*Math.pow(Math.cos(H),2/J.pf)+J.E*MY(N/J.wf),N)}for(let Y=0;Y<=W;Y++){let H=Q*(1-Y/W);Z.push(SQ(J,H),H)}}class F${dy;rows=[];y0;y1;constructor(J,Q,Z){this.dy=Q;let K=1/0,$=-1/0;for(let W of J)K=Math.min(K,W.y),$=Math.max($,W.y);this.y0=K,this.y1=$;for(let W=K;W<=$;W+=Q){let X=-1/0,Y=1/0;for(let H=0;H<J.length-1;H++){let N=J[H],q=J[H+1];if(N.y>W===q.y>W)continue;let U=N.x+(q.x-N.x)*(W-N.y)/(q.y-N.y);X=Math.max(X,U),Y=Math.min(Y,U)}this.rows.push(X>Y?Z(W,X,Y):null)}}at(J){let Q=(J-this.y0)/this.dy,Z=Math.floor(Q);if(Z<0||Z>=this.rows.length-1)return null;let K=this.rows[Z],$=this.rows[Z+1];if(!K||!$)return K??$;let W=Q-Z,X=(Y,H)=>Y+(H-Y)*W;return{F:X(K.F,$.F),Bk:X(K.Bk,$.Bk),Fs:X(K.Fs,$.Fs),W:X(K.W,$.W),xw:X(K.xw,$.xw),E:X(K.E,$.E),wf:X(K.wf,$.wf),pf:X(K.pf,$.pf)}}}class DJ{lines=[];cur=[];p(J,Q,Z){return this.cur.push(J,Q,Z),this}end(J=!1){if(J&&this.cur.length>=3)this.cur.push(this.cur[0],this.cur[1],this.cur[2]);if(this.cur.length>=6)this.lines.push(new Float32Array(this.cur));this.cur=[]}ellipse(J,Q,Z,K=24,$=0,W=Math.PI*2){for(let X=0;X<=K;X++){let Y=$+(W-$)*X/K,H=Math.cos(Y),N=Math.sin(Y);this.p(J[0]+Q[0]*H+Z[0]*N,J[1]+Q[1]*H+Z[1]*N,J[2]+Q[2]*H+Z[2]*N)}this.end()}}function LY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=1-h8(7.6,9.1,X),H=r8(XF,$),N=h8(H-1.5,H+0.15,X),q=r8(YF,X),U=h8(q-0.7,q+0.9,$);return Y*N*U}var OF=1.7,RF=0.55;function IY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=(($-5.2)/2.3)**2+((X-8.3)/2.4)**2;return Y<1?(1-Y)**2:0}function DY(J,Q,Z,K){if(Q===0||K===0)return[0,0];let $=Q*K*J;return[RF*$,Math.sign(Z)*OF*$*h8(0.4*J,2.6*J,Math.abs(Z))]}function MF(J,Q,Z){let K=Q.length;if(Q.every(Boolean))return[Z?[...J,J[0],J[1],J[2]]:J];let $=[],W=Z?Q.indexOf(!1)+1:0,X=[];for(let Y=0;Y<K;Y++){let H=(W+Y)%K;if(Q[H])X.push(J[3*H],J[3*H+1],J[3*H+2]);else{if(X.length>=6)$.push(X);X=[]}}if(X.length>=6)$.push(X);return $}function LF(J,Q){let Z=[0];for(let X=1;X<J.length;X++)Z.push(Z[X-1]+Math.hypot(J[X].x-J[X-1].x,J[X].y-J[X-1].y));let K=Z[Z.length-1],$=[],W=0;for(let X=0;X<Q;X++){let Y=K*X/(Q-1);while(W<J.length-2&&Z[W+1]<Y)W++;let H=(Y-Z[W])/Math.max(0.000000001,Z[W+1]-Z[W]);$.push({x:J[W].x+(J[W+1].x-J[W].x)*H,y:J[W].y+(J[W+1].y-J[W].y)*H})}return $}function wQ(J,Q,Z){let K=Z*Q[Q.length-1],$=0;while($<J.length-2&&Q[$+1]<K)$++;let W=(K-Q[$])/Math.max(0.000000001,Q[$+1]-Q[$]);return{x:J[$].x+(J[$+1].x-J[$].x)*W,y:J[$].y+(J[$+1].y-J[$].y)*W}}var D$=(J)=>{let Q=[0];for(let Z=1;Z<J.length;Z++)Q.push(Q[Z-1]+Math.hypot(J[Z].x-J[Z-1].x,J[Z].y-J[Z-1].y));return Q};function IF(J){let Q=J.tract,Z=Q.scale,K=J.bodyParams.pharynx,$=U$(J),W=(S)=>$(0,S).y,X=(S)=>S/Z>=7?S/Z:7-(7-S/Z)/K,Y=(S,g)=>Q.P(S,g),H={...EQ,jaw:0,lipAp:0,labiodental:0},N=J.frame(H),q=$7(J,N,H),U=[...q.skinLower,...q.skinUpper],G=new F$(U,0.08*Z,(S,g,d)=>{let a=X(S),Q0=a>=3.4&&a<=16.1?r8(KF,a)*Z:1/0,r=Math.min(g,Q0),A0=2.2+0.4*h8(2.5,3.5,a)*(1-h8(17,18.5,a));return{F:g,Bk:d,Fs:r,W:r8(ZF,a)*Z,xw:d+(r-d)*r8(WF,a),E:g-r,wf:r8($F,a)*Z,pf:A0}}),D=Y(-2.5,10.5),O=N.upperLip[N.upperLip.length-1].y,B=N.lowerLip[N.lowerLip.length-1].y,E=FF*Z,F=(S,g,d,a)=>g>B&&g<O&&Math.abs(d)<E&&S>a.xw,R=[],P=(S,g,d)=>{for(let a of MF(S,g,d)){let Q0=a.length/3,r=new Float32Array(Q0),A0=new Float32Array(Q0);for(let q0=0;q0<Q0;q0++)r[q0]=LY(Z,K,a[3*q0],a[3*q0+1]),A0[q0]=IY(Z,K,a[3*q0],a[3*q0+1]);R.push({a:new Float32Array(a),w:r,c:A0})}},I=[],A=1.4*Z;for(let S=G.y0+0.25*Z;S<G.y1-0.2*Z;S+=A){let g=G.at(S);if(!g||g.W<0.2*Z)continue;EF(g,Math.min(0.6*g.W,3.6*Z),I);let d=[],a=[],Q0=I.length/2;for(let r=0;r<Q0;r++)d.push(I[2*r],S,I[2*r+1]);for(let r=Q0-2;r>0;r--)d.push(I[2*r],S,-I[2*r+1]);for(let r=0;r<d.length/3;r++)a.push(!F(d[3*r],S,d[3*r+2],g));P(d,a,!0)}let k=0.3*Z;for(let S of[-3.6,-2.4,-1.2,1.2,2.4,3.6].map((g)=>g*Z)){let g=[],d=[];for(let a=G.y0+0.1*Z;a<=G.y1;a+=k){let Q0=G.at(a);if(!Q0||Math.abs(S)>0.97*Q0.W){P(g,d,!1),g=[],d=[];continue}let r=SQ(Q0,S);g.push(r,a,S),d.push(!F(r,a,S,Q0))}P(g,d,!1)}for(let S of[0.5,0.8].map((g)=>g*Math.PI))for(let g of[1,-1]){let d=[],a=[];for(let Q0=G.y0+0.1*Z;Q0<=G.y1;Q0+=k){let r=G.at(Q0);if(!r||r.W<0.2*Z)continue;d.push(r.xw-(r.xw-r.Bk)*Math.pow(Math.abs(Math.cos(S)),2/xJ),Q0,g*r.W*Math.pow(Math.sin(S),2/xJ)),a.push(!0)}P(d,a,!1)}let _=[],L=[],C=(S,g,d,a,Q0,r=!1)=>{let A0=new DJ;Q0(A0),S.push({lines:A0.lines,color:g,width:d,alpha:a,hot:r})},p=(S,g,d,a)=>{let Q0=L8(g.map(([r,A0])=>$(r,A0)),4);Q0.forEach((r,A0)=>{let q0=G.at(r.y);S.p(r.x,r.y,a*((q0?DF(q0,r.x):0)+d(A0,Q0.length)))}),S.end()};C(_,e.blueDim,1.05,0.9,(S)=>{for(let g of[1,-1]){p(S,[[-2.55,13.4],[-2.85,14.75],[-3.65,15.45],[-4.6,15.25],[-5.2,14.25],[-5.4,12.8],[-5.05,11.3],[-4.55,10.2],[-3.95,9.55],[-3.35,9.65],[-3,10.35]],(a,Q0)=>(0.25+1.2*Math.sin(Math.PI*a/(Q0-1))**1.5)*Z,g),p(S,[[-3.15,14.3],[-3.95,14.45],[-4.55,13.5],[-4.6,12.1],[-4.15,11.05]],()=>0.55*Z,g),p(S,[[-2.7,11.2],[-2.55,11.85],[-2.75,12.35]],()=>0.35*Z,g);let d=[];for(let a=0;a<=16;a++)d.push([-3.5+0.6*Math.cos(a/16*Math.PI*2),12+0.85*Math.sin(a/16*Math.PI*2)]);p(S,d,()=>0.12*Z,g)}}),C(_,e.blueMid,1,0.8,(S)=>{for(let g of[1,-1]){for(let a=14.6;a>=11.3;a-=0.15){let Q0=W(a),r=G.at(Q0);if(!r)continue;let A0=g*(0.3+1.05*(14.6-a)/3.3)*Z;S.p(SQ(r,A0),Q0,A0)}S.end();let d=[[7.95,11.05,0.95],[7.4,11.15,1.45],[7.25,11.6,1.55],[7.55,12.1,1.35],[8.2,12.15,1]];for(let[a,Q0,r]of d)S.p(a*Z,W(Q0),g*r*Z);S.end()}}),C(_,e.blueMid,1,0.9,(S)=>{for(let g of[1,-1])S.ellipse([8.05*Z,W(10.98),g*0.62*Z],[0.42*Z,0.04*Z,0],[0,0,0.26*Z],16)});let j=new F$(q.brain,0.08*Z,(S,g,d)=>({F:g,Bk:d,Fs:g,W:r8(HF,X(S))*Z,xw:d+(g-d)*0.48,E:0,wf:1,pf:2.3}));C(_,e.blueMid,0.85,0.32,(S)=>{for(let g=j.y0+0.6*Z;g<j.y1-0.15*Z;g+=1.5*Z){let d=j.at(g);if(!d)continue;for(let a=0;a<=48;a++){let Q0=a/48*Math.PI*2,r=Math.cos(Q0),A0=Math.sin(Q0),q0=r>=0?d.pf:xJ,b0=r>=0?d.xw+(d.Fs-d.xw)*Math.pow(r,2/q0):d.xw-(d.xw-d.Bk)*Math.pow(-r,2/q0);S.p(b0,g,Math.sign(A0)*d.W*Math.pow(Math.abs(A0),2/q0))}S.end()}for(let g of[0.3,0.7].map((d)=>d*Math.PI))for(let d of[1,-1]){for(let a=j.y0;a<=j.y1;a+=0.3*Z){let Q0=j.at(a);if(!Q0)continue;let r=Math.cos(g),A0=Math.sin(g),q0=r>=0?Q0.pf:xJ,b0=r>=0?Q0.xw+(Q0.Fs-Q0.xw)*Math.pow(r,2/q0):Q0.xw-(Q0.xw-Q0.Bk)*Math.pow(-r,2/q0);S.p(b0,a,d*Q0.W*Math.pow(A0,2/q0))}S.end()}}),C(_,e.blueDim,0.9,0.6,(S)=>{for(let g=0;g<9;g++){let d=-4.4+g*1.75;if(d>10.5)break;let a=zQ(d)-2.25,Q0=Y(a,d+0.08),r=Y(a,d+1.32),A0=Y(a+0.8,0).x,q0=0.8*Z,b0=1.05*Z;for(let s0 of[Q0.y,r.y])S.ellipse([A0,s0,0],[q0,0,0],[0,0,b0],24);for(let s0 of[0.25,0.75,1.25,1.75].map((a0)=>a0*Math.PI))S.p(A0+q0*Math.cos(s0),Q0.y,b0*Math.sin(s0)).p(A0+q0*Math.cos(s0),r.y,b0*Math.sin(s0)).end();let p0=(Q0.y+r.y)/2,f0=A0-2.15*Z;S.ellipse([f0,p0,0],[0.72*Z,0,0],[0,0,0.88*Z],20);for(let s0 of[1,-1])S.p(A0-0.7*Z,p0,s0*0.55*Z).p(f0+0.45*Z,p0,s0*0.72*Z).end(),S.p(A0-0.5*Z,p0,s0*0.95*Z).p(A0-0.9*Z,p0-0.1*Z,s0*2.3*Z).end();S.p(f0-0.72*Z,p0,0).p(f0-1.8*Z,p0-0.55*Z,0).end()}}),C(_,e.blueDim,0.85,0.5,(S)=>{let g=Y(-4.9,0).x;for(let d=-4.4;d<=11;d+=1.75)S.ellipse([g,Y(0,d).y,0],[0.42*Z,0,0],[0,0,0.6*Z],16);for(let d of[1,-1])S.p(g,Y(0,-4.6).y,d*0.6*Z).p(g,Y(0,11.4).y,d*0.6*Z).end()}),C(_,e.blueDim,0.9,0.7,(S)=>{for(let g of[1,-1]){for(let d of q.nasal)S.p(d.x,d.y,g*1.2*Z);S.end(!0);for(let d of q.turbinates){for(let a of d)S.p(a.x,a.y,g*0.95*Z);S.end()}}});let b=(S,g,d)=>{let a=[];for(let Q0=0;Q0<=60;Q0++){let r=d*Q0/60;a.push({x:S-g*Math.pow(r/d,1.85),y:r})}return{pts:a,cum:D$(a)}},m=(S,g,d,a,Q0,r,A0)=>{let q0=b(g,d,a),b0=q0.cum[q0.cum.length-1],p0=Q0.reduce((s0,a0)=>s0+a0[0],0),f0=0.97*b0/(p0*Z);for(let s0 of[1,-1]){let a0=0;for(let[I9,E9,O9]of Q0){let v=I9*Z*f0,A9=E9*Z,e0=O9*Z,N9=(a0+v/2)/b0;a0+=v;let z=wQ(q0.pts,q0.cum,N9),M=wQ(q0.pts,q0.cum,Math.min(1,N9+0.01)),y=wQ(q0.pts,q0.cum,Math.max(0,N9-0.01)),s=M.x-y.x,W0=M.y-y.y,U0=Math.hypot(s,W0)||1;s/=U0,W0/=U0;let F0=W0,t=-s,K0=r(z.y/a),O0=(C0,N0,H0=0)=>[z.x+s*C0-F0*H0,K0+A0*N0,s0*(z.y+W0*C0-t*H0)];for(let[C0,N0]of[[-0.5,0],[-0.5,0.55],[-0.38,1],[0,1.08],[0.38,1],[0.5,0.55],[0.5,0]])S.p(...O0(C0*v,N0*A9));S.end(!0);for(let[C0,N0]of[[-0.45,0.1],[0.45,0.1],[0.45,0.9],[-0.45,0.9]])S.p(...O0(C0*v,0,N0*e0));S.end(!0)}}},T=Y(7.3,0).x,w=4.2*Z,n=2.65*Z;C(_,e.blue,1,0.8,(S)=>m(S,T,w,n,GF,(g)=>(7.95+0.3*g*g)*Z,1)),C(_,e.blueMid,1,0.6,(S)=>{for(let g of[0,2,4,5,6,7]){let d=q.palOral[g],a=Math.max(0,(T-d.x)/w),Q0=(a>=1?n:n*Math.pow(a,0.5405405405405405))-0.45*Z,r=(8.95+0.3*Math.min(1,Q0/n)**2)*Z;if(Q0<0.6*Z||d.y<r+0.15*Z)continue;for(let A0=0;A0<=20;A0++){let q0=Q0*(A0/10-1);S.p(d.x,r+(d.y-r)*Math.pow(1-Math.pow(Math.abs(q0)/Q0,2.4),0.7),q0)}S.end()}});let u=(S,g,d)=>{let a=Y(S,g);return[a.x,a.y,d*Z]},$0=(S,g,d)=>{let a=g.map(([Q0,r,A0])=>u(Q0,r,d*A0));for(let Q0=0;Q0<a.length-1;Q0++){let r=a[Math.max(0,Q0-1)],A0=a[Q0],q0=a[Q0+1],b0=a[Math.min(a.length-1,Q0+2)];for(let p0=0;p0<4;p0++){let f0=p0/4,s0=f0*f0,a0=s0*f0,I9=(E9,O9,v,A9)=>0.5*(2*O9+(-E9+v)*f0+(2*E9-5*O9+4*v-A9)*s0+(-E9+3*O9-3*v+A9)*a0);S.p(I9(r[0],A0[0],q0[0],b0[0]),I9(r[1],A0[1],q0[1],b0[1]),I9(r[2],A0[2],q0[2],b0[2]))}}S.p(...a[a.length-1]),S.end()};C(L,e.red,1.25,0.9,(S)=>{for(let g of[1,-1]){$0(S,[[6.4,4.6,0],[5.6,4.45,1.5],[4.5,4.4,2.6],[3.2,4.5,3.5],[1.8,4.85,4.15],[0.4,5.6,4.6],[-0.55,6.6,4.85],[-0.9,7.6,4.9],[-1.45,8.9,4.95],[-1.9,9.7,5],[-2.15,10.2,5]],g),$0(S,[[-1.8,10.25,4.95],[-0.9,9.4,4.85],[0.15,10.1,4.6],[0.6,8.9,4.35],[1.1,7.7,4],[1.9,7.2,3.55]],g);let d=u(-2.5,10.5,g*4.95);S.ellipse(d,[0.45*Z,0,0],[0,0.12*Z,0.85*Z],16)}}),C(L,e.red,1,0.55,(S)=>{for(let g of[1,-1]){$0(S,[[1.9,7.2,3.55],[3,7.15,3.15],[4.3,7.1,2.6],[5.4,7.05,1.85],[6.2,7.05,1.05],[6.72,7.15,0]],g);for(let[d,a,Q0,r,A0]of[[3,3.15,3.2,4.5,3.5],[5.4,1.85,5.6,4.45,1.5],[1.9,3.55,1.8,4.85,4.15]])$0(S,[[d,7.15,a],[(d+Q0)/2,5.9,(a+A0)/2+0.15],[Q0,r,A0]],g)}});let i=new DJ;$0(i,[[7.25,6.75,0],[7.4,5.4,0],[6.4,4.6,0],[5.6,5,0],[5.9,6.2,0],[6.45,6.55,0]],1);let Z0=i.lines[0],X0=Y(6.98,0).x,T0=4*Z,_0=2.5*Z;C(L,e.blue,1,0.8,(S)=>m(S,X0,T0,_0,qF,(g)=>(7.75+0.45*Math.pow(g,1.5))*Z,-1));let c0=$(6.15,15.35),d0=new x(0.3*Z,(G.y0+G.y1)/2,0);return{model:J,head:G,condyle:D,lipHalf:E,center:d0,shell:R,fixed:_,jaw:L,chin:Z0,eyes:[[c0.x,c0.y,3.15*Z],[c0.x,c0.y,-3.15*Z]],eyeR:1.05*Z}}var VF=[0.09,0.06,0.03];class E${scene=new a7;camera=new d9(24,1,5,2000);beams=new $$;rest=null;w=1;h=1;compact=!1;centred=!1;facing=1;clock=0;gaze=new W7;face=new V6;eye=new x;turn=new o9;euler=new z8;strobe=0;tmp=new K$;particles=[];echoes=[];lastEcho=-1;sparkSeed=7;k=1;ring={n:0,s:new Float64Array(80),cx:new Float64Array(80),cy:new Float64Array(80),ux:new Float64Array(80),uy:new Float64Array(80),a:new Float64Array(80),b:new Float64Array(80)};v3=new x;caliper=null;constructor(){this.scene.add(this.beams.group),this.scene.fog=new n6(0,50,100);for(let J=0;J<200;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,v:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN,pz:NaN})}dispose(){this.beams.dispose()}resetMotion(){this.face=new V6,this.echoes=[],this.lastEcho=-1,this.strobe=0;for(let J of this.particles)J.px=NaN}resize(J,Q){if(this.w=J,this.h=Q,this.compact=J<560,this.camera.aspect=J/Q,this.compact||this.centred)this.camera.clearViewOffset();else this.camera.setViewOffset(J,Q,0.1*J,0,J,Q);this.camera.updateProjectionMatrix(),this.beams.setResolution(J,Q);for(let Z of this.particles)Z.px=NaN}poses(J){let Q=this.restFor(J),Z=Math.tan(this.camera.fov*Math.PI/360),K=1.1*Math.max(15.2/Z,11/(Z*Math.max(0.3,this.camera.aspect))),$=Q.center.clone(),W=this.facing>0?0.62:Math.PI-0.62,X=0.2;return{target:$,home:$.clone().add(new x(Math.sin(W)*Math.cos(0.2),Math.sin(0.2),Math.cos(W)*Math.cos(0.2)).multiplyScalar(K)),side:$.clone().add(new x(0,0,this.facing*K))}}restFor(J){if(!this.rest||this.rest.model!==J)this.rest=IF(J);return this.rest}project(J,Q,Z){let K=this.v3.set(J,Q,Z).applyMatrix4(this.beams.group.matrixWorld).project(this.camera);return[(K.x+1)/2*this.w,(1-K.y)/2*this.h]}pxPerCmAt(J,Q,Z){let K=this.camera.matrixWorld.elements,[$,W]=this.project(J,Q,Z),[X,Y]=this.project(J+K[0],Q+K[1],Z+K[2]);return Math.hypot(X-$,Y-W)}crown(J){let Q=this.restFor(J),Z=J.tract.scale,K=Q.head.at(Q.head.y1-1.2*Z),$=K?(K.F+K.Bk)/2:Q.center.x,[W,X]=this.project($,Q.head.y1,0);return{x:W,y:X,cmPx:this.pxPerCmAt($,Q.head.y1,0)}}faceView(J,Q,Z){let K=TQ(J,Q,Z).find(($)=>$.id==="lips").pos;return{handles:TQ,X:($)=>this.project($.x,$.y,0)[0],Y:($)=>this.project($.x,$.y,0)[1],pxPerCm:this.pxPerCmAt(K.x,K.y,0)}}update(J,Q,Z,K,$,W){this.clock+=W;let X=this.restFor(J),Y=J.tract.scale,H=this.face;this.headPose(X,Y);let N=Y$(J,Z.jaw),q=X.condyle,U=this.beams,G=this.camera.position.distanceTo(X.center),D=this.scene.fog;D.near=G-3*Y,D.far=G+30*Y,U.begin();let O=(m,T=0)=>{let w=new Float32Array(m.length*3);return m.forEach((n,u)=>{w[3*u]=n.x,w[3*u+1]=n.y,w[3*u+2]=T}),w},B=this.v3.copy(this.eye).sub(X.center).normalize(),E=h8(0.25,0.8,Math.abs(B.z)),F=0.22+0.78*E,R=0.45+0.55*E,P=(m,T,w,n={},u=F)=>U.line(O(m),m.length,T,w,{...n,alpha:(n.alpha??1)*u}),I=(m,T,w)=>w===0?[m,T]:EY(m,T,q,w);this.k=Y;for(let m of X.fixed)for(let T of m.lines)U.line(T,T.length/3,m.color,m.width,{alpha:m.alpha,hot:m.hot});for(let m of X.jaw)for(let T of m.lines){let w=this.tmp.reset();for(let n=0;n<T.length;n+=3){let[u,$0]=I(T[n],T[n+1],N);w.p(u,$0,T[n+2])}U.poly(w,m.color,m.width,{alpha:m.alpha,hot:m.hot})}for(let m of X.shell){let T=this.tmp.reset();for(let w=0;w<m.w.length;w++){let n=m.a[3*w+2],[u,$0]=DY(Y,m.c[w],n,H.puff),[i,Z0]=I(m.a[3*w]+u,m.a[3*w+1],N*m.w[w]);T.p(i,Z0,n+$0)}U.poly(T,e.blueDim,0.85,{alpha:0.42})}let A=$7(J,Q,Z);P(A.inset,e.blueDim,0.9,{alpha:0.5}),P(A.skull,e.blueDim,0.9,{close:!0,alpha:0.6}),P(A.brain,e.blueMid,1,{close:!0,alpha:0.75}),P(A.sulcus,e.blueDim,0.9),P(A.nasal,e.blueMid,1,{close:!0}),P(A.palOral,e.blueMid,1.1),P(A.palNasal,e.blueMid,1.1),P(A.skinLower,e.blue,1.5),P(A.skinUpper,e.blue,1.5),P(A.outerWall,e.blue,1.4,{hot:!0}),P(Q.inner,e.blue,1.3,{alpha:0.9}),P(A.glottisWall,e.blue,1.2,{alpha:0.8}),this.eyes(X,W),this.airway(J,Q,K,$,Y),this.velum(Q,Y),this.epiglottis(Q,Y,R),this.larynx(J,Q,Z,K,Y,W,X.head.y0,F);let k=O(Q.tongue),_=(m,T)=>O(fJ(m.map((w)=>[w.x,w.y]),T).map(([w,n])=>({x:w,y:n}))),L=_(Q.upperLip,2),C=_(Q.lowerLip,2),p=this.lips(X,J,Q,Z,N),j=X.chin,b=new Float32Array(j.length);for(let m=0;m<j.length;m+=3){let[T,w]=I(j[m],j[m+1],N);b[m]=T,b[m+1]=w}if(K&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock;let m=[{a:k,color:e.green},{a:b,color:e.red},{a:L,color:e.pink},{a:C,color:e.pink}];if(p)m.push({a:p,color:e.pink});this.echoes.push({t:this.clock,lines:m});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if(K)VF.forEach((m,T)=>{let w=this.nearestEcho(this.clock-m);if(!w)return;for(let n of w.lines)U.line(n.a,n.a.length/3,n.color,1,{alpha:(0.1+0.07*T)*R})});if(this.tongue(Q,Z,Y),U.line(b,b.length/3,e.red,1.5,{hot:!0,alpha:R}),U.line(k,Q.tongue.length,e.green,1.6,{hot:!0,alpha:R}),U.line(L,L.length/3,e.pink,1.5,{hot:!0,alpha:R}),U.line(C,C.length/3,e.pink,1.5,{hot:!0,alpha:R}),P(fJ(Q.velum.map((m)=>[m.x,m.y]),3).map(([m,T])=>({x:m,y:T})),e.white,1.25,{alpha:0.92},R),$.particles&&K)this.drawParticles(J,Q,K,W);if(K)this.drawTurbulence(J,Q,K);if(this.caliper=null,$.calipers)this.drawCaliper(Q);U.end()}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}headPose(J,Q){let Z=this.beams.group,K=this.v3.set(-2.4*Q,J.head.y0+0.42*(J.condyle.y-J.head.y0),0);this.turn.setFromEuler(this.euler.set(this.face.tilt,0,this.face.nod)),Z.quaternion.copy(this.turn),Z.position.copy(K).sub(K.applyQuaternion(this.turn)),Z.updateMatrixWorld(!0),this.eye.copy(this.camera.position),Z.worldToLocal(this.eye)}eyes(J,Q){let Z=this.gaze,K=this.face;Z.update(this.clock,Q);let $=J.eyeR,W=Z.pitch+1.3*K.lookUp,X=[Math.cos(W)*Math.cos(Z.yaw),Math.sin(W),Math.cos(W)*Math.sin(Z.yaw)],Y=(U)=>{let G=Math.abs(U[1])>0.9?[1,0,0]:[0,1,0],D=RY(OY(G,U));return[D,OY(U,D)]},H=this.eye,N=1-h8(0.4,0.9,K.lid),q=Math.max(0,K.brow);for(let U of J.eyes){let G=RY([H.x-U[0],H.y-U[1],H.z-U[2]]),[D,O]=Y(G),B=new DJ;B.ellipse(U,B6(D,$),B6(O,$),36);let[E,F]=Y(X),R=[U[0]+X[0]*$*0.86,U[1]+X[1]*$*0.86,U[2]+X[2]*$*0.86];B.ellipse(R,B6(E,$*0.5),B6(F,$*0.5),24);let P=[U[0]+X[0]*$*0.97,U[1]+X[1]*$*0.97,U[2]+X[2]*$*0.97];B.ellipse(P,B6(E,$*0.2),B6(F,$*0.2),14);let I=Math.sign(U[2]),A=(j,b,m)=>j*(1-b*b)+0.06*b*I*m,k=(j)=>{for(let b=0;b<=16;b++){let m=-1+b/8,T=I*m*0.95,w=A(-0.36,m,-1),n=j?A(0.5+0.2*q,m,1)*(1-K.lid)+(w+0.03)*K.lid:w;B.p(U[0]+1.04*$*Math.cos(n)*Math.cos(T),U[1]+1.04*$*Math.sin(n),U[2]+1.04*$*Math.cos(n)*Math.sin(T))}B.end()};k(!0),k(!1);let _=0.3*K.brow,L=0.28*Math.max(0,-K.brow),C=0.22*K.lid*q;for(let j=0;j<=12;j++){let b=-1+j/6,m=I*(0.15+b*0.62),T=(1-b)/2,w=0.82+0.12*(1-b*b)-0.06*b+_+(C-L)*T;B.p(U[0]+1.32*$*Math.cos(w)*Math.cos(m),U[1]+1.32*$*Math.sin(w),U[2]+1.32*$*Math.cos(w)*Math.sin(m))}B.end();let p=[[e.blueMid,1,0.35],[e.blue,1,0.9*N],[e.blue,1,0.7*N],[e.blue,1.25,0.95],[e.blue,1.05,0.75],[e.blueMid,1.3,0.8]];B.lines.forEach((j,b)=>this.beams.line(j,j.length/3,p[b][0],p[b][1],{alpha:p[b][2]}))}}lips(J,Q,Z,K,$){let W=Q.tract.scale,X=J.condyle,Y=J.head,H=this.beams,N=Q.bodyParams.pharynx,q=J.lipHalf,U=Math.max(0.3*W,(1.1+(Q.bodyParams.lipWidth-1.1)*FY(K.lipWidth))*W/2),G=Z.upperLip.slice(6),D=Z.lowerLip.slice(6).map((w)=>IQ(w,X,-$)),O=D$(G),B=D$(D),E=G[0],F=D[0],R=(E.y+F.y)/2,P=(w,n)=>{let u=Y.at(w);return u?SQ(u,n,!0):0},I=E.x-P(E.y,0),A=F.x-P(F.y,0),k=(I+A)/2,_=G[G.length-1].y,L=D[D.length-1].y,C=this.tmp,p=(w,n,u)=>{let $0=Math.sqrt(Math.max(0,1-(u/U)**2)),i=wQ(w?G:D,w?O:B,n),Z0=w?E:F,X0=w?_:L,T0=R+(Z0.y-R)*$0,_0=X0-Z0.y,c0=T0+(i.y-Z0.y)*(X0-T0)/(Math.abs(_0)<0.0001?0.0001:_0),d0=Math.pow(Math.max(0,1-(u/q)**2),1.5),S=i.x-P(i.y,0)+(k-(w?I:A))*(1-$0)*(1-n),g=P(c0,u)+S*d0,d=w?0.5*(1-$0)*(1-n):0.5*(1+$0)+0.5*(1-$0)*n,a=d+(LY(W,N,g,c0)-d)*h8(U,q,Math.abs(u)),[Q0,r]=DY(W,IY(W,N,g,c0),u,this.face.puff),[A0,q0]=a?EY(g+Q0,c0,X,$*a):[g+Q0,c0];return[A0,q0,u+r]},j=(w,n,u,$0,i)=>{C.reset();for(let Z0=0;Z0<=i;Z0++){let X0=u+($0-u)*Z0/i;C.p(...p(w,n(X0),X0))}return C},b=[0.66,0.88];for(let w of[!0,!1]){for(let $0 of b)H.poly(j(w,()=>$0,-q,q,24),e.blueDim,0.85,{alpha:0.42});for(let $0 of[-0.8,-0.5,0.5,0.8].map((i)=>i*q)){C.reset();for(let i=0;i<=8;i++)C.p(...p(w,0.45+0.55*i/8,$0));H.poly(C,e.blueDim,0.85,{alpha:0.42})}let n=Math.min(q,U+0.3*W),u=($0)=>{let i=Math.sqrt(Math.max(0,1-($0/n)**2)),Z0=w?-0.07*Math.exp(-(($0/(0.32*W))**2))+0.05*Math.exp(-(((Math.abs($0)-0.55*W)/(0.3*W))**2)):0;return Math.max(0,(w?0.42:0.45)*i+Z0*i)};H.poly(j(w,u,-n,n,28),e.pink,1.3,{alpha:0.95}),H.poly(j(w,($0)=>0.45*u($0),-n,n,28),e.pink,1,{alpha:0.45})}for(let w of[1,-1])H.poly(j(!0,()=>0,w*U,w*q,6),e.pink,1,{alpha:0.6});let m=Z.upperLip[6].y-Z.lowerLip[6].y>0.02*W,T=24;C.reset();for(let w=0;w<=T;w++)C.p(...p(!0,0,-U+2*U*w/T));if(m)for(let w=T-1;w>0;w--)C.p(...p(!1,0,-U+2*U*w/T));return H.poly(C,e.pink,2.1,{hot:!0,close:m}),m?C.a.slice(0,C.n*3):null}tongue(J,Q,Z){let K=J.tongue,$=0,W=1/0;K.forEach((G,D)=>{let O=(G.x-J.tip.x)**2+(G.y-J.tip.y)**2;if(O<W)W=O,$=D});let X=22,Y=LF(K.slice(0,$+1),X),H=FY(Q.lateral),N=Y.map((G,D)=>{let O=Y[Math.max(0,D-1)],B=Y[Math.min(X-1,D+1)],E=B.x-O.x,F=B.y-O.y,R=Math.hypot(E,F)||1;E/=R,F/=R;let P=D/(X-1);return{p:G,nx:-F,ny:E,W:r8(UF,P)*Z,h:(r8(NF,P)+0.8*H*h8(0.45,0.8,P))*Z}}),q=(G,D)=>{let O=G.h*(1-Math.cos(D));return[G.p.x-G.nx*O,G.p.y-G.ny*O,G.W*Math.sin(D)]},U=this.tmp;for(let G=1;G<X-1;G+=2){U.reset();for(let D=0;D<=12;D++)U.p(...q(N[G],-Math.PI/2+Math.PI*D/12));this.beams.poly(U,e.green,1,{alpha:0.5})}for(let G of[-Math.PI/2,-Math.PI/4,Math.PI/4,Math.PI/2]){U.reset();for(let D of N)U.p(...q(D,G));this.beams.poly(U,e.green,Math.abs(G)>1?1.25:1,{alpha:Math.abs(G)>1?0.8:0.45})}}airway(J,Q,Z,K,$){let W=Q.grid,X=this.ring;if(X.n=0,W.length<2)return;let Y=Z?J.nodeS(Z.t.phLen,Z.t.orLen):null,H=K.pressure&&Z&&Y&&Y.length===Z.t.pressureRms.length,N=-1,q=0;for(let O=0;O<W.length&&X.n<X.s.length;O++){let B=W[O],E=B.outer.x-B.inner.x,F=B.outer.y-B.inner.y,R=Math.hypot(E,F);if(R>0.0001)N=E/R,q=F/R;let P=B.d/2,I=X.n++;X.s[I]=B.s,X.cx[I]=B.outer.x-N*P,X.cy[I]=B.outer.y-q*P,X.ux[I]=N,X.uy[I]=q,X.a[I]=P,X.b[I]=B.d>0.01?Math.min(3.5*$,2*B.area/(Math.PI*B.d)):0}let U=this.tmp,G=this.eye;for(let O=0;O<X.n;O+=2){U.reset();for(let I=0;I<=24;I++){let A=I/24*Math.PI*2,k=Math.cos(A)*X.a[O],_=Math.sin(A)*X.b[O];U.p(X.cx[O]+X.ux[O]*k,X.cy[O]+X.uy[O]*k,_)}let B=G.x-X.cx[O],E=G.y-X.cy[O],F=G.z,R=Math.abs(X.uy[O]*B-X.ux[O]*E)/(Math.hypot(B,E,F)||1),P=1-0.65*R*R;if(H){let I=Math.pow(LQ(q$(Z.t.pressureRms,Y,X.s[O])),0.85);this.beams.poly(U,MQ(I),0.85,{alpha:(0.25+0.65*I)*P})}else this.beams.poly(U,e.blueDim,0.85,{alpha:(K.grid?0.8:0.45)*P})}for(let O of[1,-1]){U.reset();for(let B=0;B<X.n;B++)U.p(X.cx[B],X.cy[B],O*X.b[B]);this.beams.poly(U,e.blue,1,{alpha:0.55})}let D=Q.glottis;for(let O of[0.3,0.65]){let B=D.x+(X.cx[0]-D.x)*O,E=D.y+(X.cy[0]-D.y)*O,F=(0.55+0.25*O)*$;U.reset();for(let R=0;R<=20;R++)U.p(B+F*Math.cos(R/20*Math.PI*2),E,F*Math.sin(R/20*Math.PI*2));this.beams.poly(U,e.blueDim,0.9,{alpha:0.6})}}airPoint(J,Q,Z,K){let $=this.ring;if($.n<2)return null;if(Q<=$.s[0]){let U=Math.max(0,Q/Math.max(0.01,$.s[0])),G=J.glottis;return[G.x+($.cx[0]-G.x)*U+Z*0.3*this.k,G.y+($.cy[0]-G.y)*U,K*0.45*this.k]}let W=0,X=$.n-1;if(Q>=$.s[X])return null;while(X-W>1){let U=W+X>>1;if($.s[U]<=Q)W=U;else X=U}let Y=(Q-$.s[W])/Math.max(0.000001,$.s[X]-$.s[W]),H=(U)=>U[W]+(U[X]-U[W])*Y,N=H($.a)*Z*0.82,q=H($.b)*K*0.82;return[H($.cx)+H($.ux)*N,H($.cy)+H($.uy)*N,q]}drawParticles(J,Q,Z,K){let $=Z.t,W=J.nodeS($.phLen,$.orLen),X=new Float32Array($.phAreas.length+$.orAreas.length);X.set($.phAreas,0),X.set($.orAreas,$.phAreas.length);let Y=Q.lipS;for(let H of this.particles){let N=q$($.flow,W,H.s),q=Math.max(0.05,q$(X,W,H.s)),U=N/q,G=Math.sign(U)*2.2*Math.log1p(Math.abs(U)/30);if(H.s+=G*K,H.life-=K*0.25,H.s>Y||H.s<0||H.life<=0||Math.abs(U)<3){if(!(Math.abs(U)<3&&H.life>0)){H.s=Math.random()*0.8,H.u=Math.random()*2-1,H.v=Math.random()*2-1,H.life=0.6+Math.random()*0.8,H.px=NaN;continue}}let D=this.airPoint(Q,H.s,H.u,H.v);if(!D)continue;if(Number.isFinite(H.px)){let O=Math.min(2,Math.floor(Math.min(1,Math.abs(G)/6)*Math.min(1,H.life)*3));this.beams.seg(H.px,H.py,H.pz,D[0],D[1],D[2],"#ffe2a8",1.05,0.16+0.2*O)}[H.px,H.py,H.pz]=D}}drawTurbulence(J,Q,Z){let K=Z.t;if(!(K.noiseLevel>1)||K.noiseNode<0)return;let $=J.branchS(K.noiseNode,K.phLen,K.orLen);if($<0)return;let W=Math.min(1,Math.log10(K.noiseLevel)/3.2);if(W<=0.05)return;let X=this.sparkSeed=this.sparkSeed*16807%2147483647,Y=()=>(X=X*16807%2147483647)/2147483647;for(let H=0;H<40;H++){let N=this.airPoint(Q,$+0.2+Y()*1.2,Y()*2-1,Y()*2-1);if(!N)continue;let q=0.02+Y()*0.05;this.beams.seg(N[0]-q,N[1],N[2],N[0]+q,N[1],N[2],"#f4fbff",1.6,0.15+0.7*W*Y())}}drawCaliper(J){let Q=this.ring,Z=-1,K=1/0;for(let X=2;X<J.grid.length-1;X++)if(J.grid[X].area<K)K=J.grid[X].area,Z=X;if(Z<0||K>=1.2||Z>=Q.n)return;let $=this.tmp.reset();for(let X=0;X<=24;X++){let Y=X/24*Math.PI*2,H=Math.cos(Y)*Q.a[Z],N=Math.sin(Y)*Q.b[Z];$.p(Q.cx[Z]+Q.ux[Z]*H,Q.cy[Z]+Q.uy[Z]*H,N)}this.beams.poly($,e.white,1.3,{hot:!0});let W=J.grid[Z];this.caliper={x:W.outer.x,y:W.outer.y,z:0,area:K}}velum(J,Q){let Z=J.velum,K=Math.floor(Z.length/2)-1,$=[];for(let Y=0;Y<=K;Y++){let H=Z[Y],N=Z[Z.length-1-Y],q=H.x-N.x,U=H.y-N.y,G=Math.hypot(q,U)||1;q/=G,U/=G;let D=Y/K;$.push({x:(H.x+N.x)/2,y:(H.y+N.y)/2,nx:q,ny:U,W:(1.95-1.5*Math.pow(D,1.5))*Q,droop:0.45*Q*D})}let W=(Y,H)=>{let N=0.12*Q*(1-H*H)-Y.droop*H*H;return[Y.x+Y.nx*N,Y.y+Y.ny*N,Y.W*H]},X=this.tmp;for(let Y of[1,3,5,7,9].filter((H)=>H<=K)){X.reset();for(let H=0;H<=12;H++)X.p(...W($[Y],-1+H/6));this.beams.poly(X,e.white,1,{alpha:0.5})}for(let Y of[-1,1]){X.reset();for(let H of $)X.p(...W(H,Y));this.beams.poly(X,e.white,1,{alpha:0.65})}}epiglottis(J,Q,Z){let[K,$]=J.epiglottis,W=$.x-K.x,X=$.y-K.y,Y=Math.hypot(W,X)||1;W/=Y,X/=Y;let H={x:-X,y:W},N=(G)=>(0.22+0.9*Math.pow(Math.sin(G*Math.PI/2),1.3))*Q,q=this.tmp.reset(),U=10;for(let G=0;G<=U;G++){let D=G/U,O=N(D),B=0.28*Q*(O/(1.12*Q));q.p(K.x+W*Y*D+H.x*B,K.y+X*Y*D+H.y*B,O)}for(let G=1;G<12;G++){let D=N(1)*(1-2*G/12),O=0.28*Q*(Math.abs(D)/(1.12*Q))**2;q.p($.x+H.x*O+W*0.08*Q*(1-(D/N(1))**2),$.y+H.y*O+X*0.08*Q*(1-(D/N(1))**2),D)}for(let G=U;G>=0;G--){let D=G/U,O=N(D),B=0.28*Q*(O/(1.12*Q));q.p(K.x+W*Y*D+H.x*B,K.y+X*Y*D+H.y*B,-O)}this.beams.poly(q,e.blue,1.1,{alpha:0.75}),this.beams.line(new Float32Array([K.x,K.y,0,$.x,$.y,0]),2,e.blue,2.1,{alpha:0.85*Z})}larynx(J,Q,Z,K,$,W,X,Y){let H=Q.glottis,N=this.beams,q=new DJ,U=(A,k,_)=>[H.x+A*$,H.y+k*$,_*$],G=(A,k=!1)=>{for(let[_,L,C]of A)q.p(...U(_,L,C));q.end(k)};for(let A of[1,-1])G([[1.45,1.75,0],[0.75,2,A*1.2],[-0.5,1.95,A*1.9],[-0.6,-0.6,A*1.85],[0.25,-0.85,A*1.5],[1.05,-0.8,A*0.55],[1.2,-0.75,0],[1.6,0.05,0],[1.9,1.15,0],[1.45,1.75,0]]),G([[-0.5,1.95,A*1.9],[-0.7,2.85,A*1.85]]),G([[-0.6,-0.6,A*1.85],[-0.45,-1.25,A*1.7]]);for(let[A,k]of[[-1.75,0.15],[-1.4,1.1]]){for(let _=0;_<=28;_++){let L=_/28*Math.PI*2;q.p(...U(0.1+1*Math.cos(L),A+k*(1-Math.cos(L))/2,1.1*Math.sin(L)))}q.end()}for(let A of q.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let D=new DJ,O=H.y-2.1*$,B=H.x+0.08*$;for(let A=O;A>X;A-=0.5*$)D.ellipse([B,A,0],[0.82*$,0,0],[0,0,0.95*$],20,-0.8*Math.PI,0.8*Math.PI);for(let A of[1,-1])D.p(B,O,A*0.95*$).p(B,X,A*0.95*$).end();for(let A of D.lines)N.line(A,A.length/3,e.blueDim,0.9,{alpha:0.85});for(let A of[1,-1])N.line(new Float32Array([B+A*0.82*$,H.y,0,B+A*0.82*$,X,0]),2,e.blueMid,1,{alpha:Y});let E=new DJ,F={x:J.tract.P(1.6,0).x,y:J.tract.P(0,2.9).y+0.6*Z.larynx*$};for(let A of[-0.16,0.16]){for(let k=0;k<=20;k++){let _=-1+k/10;E.p(F.x+(0.35-0.65*_*_)*$,F.y+A*$,1.15*_*$)}E.end();for(let k of[1,-1])E.p(F.x-0.3*$,F.y+A*$,k*1.15*$).p(F.x-2.8*$,F.y+(0.7+A)*$,k*2.05*$).end()}for(let A of E.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let R=K?.t.glottalArea,P=0;if(R&&R.length){this.strobe=(this.strobe+W/1.8)%1;let A=0.02;for(let k=0;k<R.length;k++)A=Math.max(A,R[k]);if(P=Math.min(0.45*$,R[Math.floor(this.strobe*R.length)%R.length]/(1.3*$)*2.2),!Number.isFinite(P))P=0}let I=new DJ;for(let A of[1,-1])I.p(...U(0.72,0.1,0)).p(...U(-0.55,0.1,A*(0.06+P/$))).end(),I.p(...U(0.72,0,0)).p(...U(-0.6,0,A*0.62)).end(),I.p(...U(0.65,0.45,0)).p(...U(-0.5,0.45,A*0.45)).end(),I.ellipse(U(-0.72,0.15,A*(0.3+P/$)),[0.18*$,0,0],[0,0.12*$,0.12*$],10);I.lines.forEach((A,k)=>N.line(A,A.length/3,k%4===0?e.white:e.blueMid,k%4===0?1.3:1,{alpha:k%4===2?0.6:0.9,hot:k%4===0}))}}function EY(J,Q,Z,K){let $=J-Z.x,W=Q-Z.y,X=Math.cos(K),Y=Math.sin(K);return[Z.x+$*X-W*Y,Z.y+$*Y+W*X]}var OY=(J,Q)=>[J[1]*Q[2]-J[2]*Q[1],J[2]*Q[0]-J[0]*Q[2],J[0]*Q[1]-J[1]*Q[0]],RY=(J)=>{let Q=Math.hypot(J[0],J[1],J[2])||1;return[J[0]/Q,J[1]/Q,J[2]/Q]},B6=(J,Q)=>[J[0]*Q,J[1]*Q,J[2]*Q];function q$(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}var O$=null,R$=null,C6=null;function VY(J){if(C6)return C6;return C6=(async()=>{let Q;if(J&&typeof J!=="string")Q=await WebAssembly.compile(J);else{let Z=J??"./chimera.wasm",K=await fetch(Z);if(!K.ok)throw new Error(`engine: ${Z}: HTTP ${K.status}`);Q=await WebAssembly.compile(await K.arrayBuffer())}if(WebAssembly.Module.imports(Q).length)throw new Error("engine: the wasm module must not have imports");R$=(await WebAssembly.instantiate(Q,{})).exports,O$=Q})(),C6.catch(()=>C6=null),C6}function BY(){if(!O$)throw new Error("engine not loaded (await initChimera())");return O$}function BF(){if(!R$)throw new Error("engine not loaded (await initChimera())");return R$}var CF=new TextEncoder,AF=new TextDecoder;function jQ(J,Q={}){let Z=BF(),K=CF.encode(JSON.stringify({fn:J,...Q})),$=Z.chimera_alloc(K.length);new Uint8Array(Z.memory.buffer,$,K.length).set(K);let W=Z.chimera_call($,K.length);Z.chimera_free($,K.length);let X=AF.decode(new Uint8Array(Z.memory.buffer,Z.chimera_result_ptr(),Z.chimera_result_len())),Y=JSON.parse(X);if(W!==0)throw new Error(`engine ${J}: ${Y.error}`);return Y}var C9=(J,Q,Z)=>Math.max(Q,Math.min(Z,J));class M${grains=Array.from({length:64},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,r:0.25}));pulses=Array.from({length:6},()=>({x:0,y:0,t:-100,strength:0}));count=36;w=0.045;h=0.052;d=0.024;radius=0.0008;shape="box";quiet=0;seed=12345;collisionEnergy=0;collisions=0;agitation=0;constructor(){this.reset(36)}random(){return this.seed^=this.seed<<13,this.seed^=this.seed>>>17,this.seed^=this.seed<<5,(this.seed>>>0)/4294967296}reset(J){this.count=C9(J|0,1,64);for(let Q=0;Q<64;Q++){let Z=this.random()*Math.PI*2,K=Math.sqrt(this.random())*0.28,$=this.grains[Q];$.x=Math.cos(Z)*this.w*K,$.y=Math.sin(Z)*this.h*K,$.z=(this.random()-0.5)*this.d*0.65,$.vx=$.vy=$.vz=0,$.r=0.18+this.random()*0.2}for(let Q of this.pulses)Q.t=-100;this.quiet=0,this.agitation=0,this.collisionEnergy=this.collisions=0}contact(J,Q,Z,K){if(Q<0.025||this.agitation<0.008)return;this.collisions++,this.collisionEnergy+=Q*Q/this.count;let $=this.pulses[Z];$.x=J.x,$.y=J.y,$.t=K,$.strength=Q}step(J,Q,Z,K,$){if(this.collisionEnergy=this.collisions=0,J>0.1){for(let B=0;B<this.count;B++){let E=this.grains[B];E.vx=E.vy=E.vz=0}return}if(this.agitation=Math.max(K,this.agitation*Math.exp(-J/0.11)),this.quiet=K<0.012?this.quiet+J:0,this.quiet>0.6){for(let B=0;B<this.count;B++){let E=this.grains[B];E.vx=E.vy=E.vz=0}return}let W=Math.max(1,Math.ceil(J/0.0042)),X=J/W,Y=Math.exp(-X*10),H=this.radius,N=(-Q[0]+Z[0]*0.35)*9.80665,q=(-Q[1]+Z[1]*0.35)*9.80665-1.6,U=-Q[2]*9.80665,G=Math.max(0.003,this.w/2-H),D=Math.max(0.003,this.h/2-H),O=Math.max(0.003,this.d/2-H);for(let B=0;B<W;B++){for(let F=0;F<this.count;F++){let R=this.grains[F];if(R.vx=C9((R.vx+N*X)*Y,-3,3),R.vy=C9((R.vy+q*X)*Y,-3,3),R.vz=C9((R.vz+U*X)*Y,-3,3),R.x+=R.vx*X,R.y+=R.vy*X,R.z+=R.vz*X,this.shape==="box"){if(Math.abs(R.x)>G)this.contact(R,Math.abs(R.vx),R.x>0?1:0,$),R.x=Math.sign(R.x)*G,R.vx=-R.vx*R.r,R.vy*=0.92,R.vz*=0.92;if(Math.abs(R.y)>D)this.contact(R,Math.abs(R.vy),R.y>0?2:3,$),R.y=Math.sign(R.y)*D,R.vy=-R.vy*R.r,R.vx*=0.92,R.vz*=0.92}else{let P=R.x*R.x/(G*G)+R.y*R.y/(D*D);if(P>1){let I=Math.sqrt(P);R.x/=I,R.y/=I;let A=R.x/(G*G),k=R.y/(D*D),_=Math.hypot(A,k);A/=_,k/=_;let L=R.vx*A+R.vy*k;if(L>0)this.contact(R,L,Math.abs(A)>Math.abs(k)?A>0?1:0:k>0?2:3,$),R.vx-=(1+R.r)*L*A,R.vy-=(1+R.r)*L*k}}if(Math.abs(R.z)>O)this.contact(R,Math.abs(R.vz),R.z>0?4:5,$),R.z=Math.sign(R.z)*O,R.vz=-R.vz*R.r,R.vx*=0.95,R.vy*=0.95}let E=H*2;for(let F=0;F<this.count;F++)for(let R=F+1;R<this.count;R++){let P=this.grains[F],I=this.grains[R],A=I.x-P.x,k=I.y-P.y,_=I.z-P.z,L=A*A+k*k+_*_;if(L>=E*E||L<0.0000000000000001)continue;let C=Math.sqrt(L),p=A/C,j=k/C,b=_/C,m=(I.vx-P.vx)*p+(I.vy-P.vy)*j+(I.vz-P.vz)*b,T=(E-C)*0.35;if(P.x-=p*T,P.y-=j*T,P.z-=b*T,I.x+=p*T,I.y+=j*T,I.z+=b*T,m<0){let w=-m*0.6;P.vx-=w*p,P.vy-=w*j,P.vz-=w*b,I.vx+=w*p,I.vy+=w*j,I.vz+=w*b}}for(let F=0;F<this.count;F++){let R=this.grains[F];if(R.z=C9(R.z,-O,O),this.shape==="box")R.x=C9(R.x,-G,G),R.y=C9(R.y,-D,D);else{let P=R.x*R.x/(G*G)+R.y*R.y/(D*D);if(P>1){let I=Math.sqrt(P);R.x/=I,R.y/=I}}}}}}class L${x=null;y=null;center(J){let Q=Math.hypot(...J);if(Q<0.5)return;J=J.map(($)=>$/Q);let Z=[1-J[0]*J[0],-J[0]*J[1],-J[0]*J[2]],K=Math.hypot(...Z);if(K<0.1)Z=[-J[1]*J[0],1-J[1]*J[1],-J[1]*J[2]],K=Math.hypot(...Z);this.x=Z.map(($)=>$/K),this.y=[J[1]*this.x[2]-J[2]*this.x[1],J[2]*this.x[0]-J[0]*this.x[2],J[0]*this.x[1]-J[1]*this.x[0]]}project(J){if(!this.x)this.center(J);let Q=Math.hypot(...J);if(!this.x||!this.y||Q<0.5)return[0,0];return[J.reduce((Z,K,$)=>Z+K*this.x[$],0)/Q,J.reduce((Z,K,$)=>Z+K*this.y[$],0)/Q]}}var CY=[{name:"Theremin",tag:"VOWEL",description:"Continuous pitch and OO–AH–EE colour."},{name:"Velvet",tag:"WARMTH",description:"Warm sine layers with an octave below."},{name:"Glass",tag:"SHIMMER",description:"Clear, bell-like partials that bloom with tilt."},{name:"Orbit",tag:"SPREAD",description:"A drifting, detuned ensemble in your hand."},{name:"Reed",tag:"BRIGHTNESS",description:"A woody harmonic voice that opens into a buzz."}],EJ=Math.PI*2,zF=[1,2.756,5.404,8.933],kF=[1,0.3,0.16,0.09];class PF{rate;phase=0;phases=new Float64Array([0,0.9,1.7,2.6]);clock=0;weights=new Float64Array(16);desired=new Float64Array(16);weightMix;constructor(J){this.rate=J;this.weightMix=1-Math.exp(-1/(J*0.012))}prepare(J,Q){let Z=Q*2,K=Z<1?0:1,$=Z-K,W=[[350,900,2200],[800,1250,2900],[300,2300,3100]],X=[180,280,450],Y=0;for(let N=0;N<16;N++){let q=J*(N+1),U=0.045/(N+1);for(let G=0;G<3;G++){let D=W[K][G]*(1-$)+W[K+1][G]*$,O=(q-D)/X[G];U+=Math.exp(-0.5*O*O)*(G===0?1:0.65)/Math.sqrt(N+1)}if(N===0)U+=0.3;this.desired[N]=U,Y+=U*U}let H=1/Math.sqrt(Y);for(let N=0;N<16;N++)this.desired[N]*=H}fade(J){return Math.max(0,Math.min(1,(this.rate*0.45-J)/(this.rate*0.07)))}render(J,Q,Z){let K=this.weightMix;this.clock+=1/this.rate,this.phase=(this.phase+EJ*J/this.rate)%EJ;let $=0;if(Z===0){for(let Y=0;Y<16;Y++)this.weights[Y]+=(this.desired[Y]-this.weights[Y])*K,$+=Math.sin(this.phase*(Y+1))*this.weights[Y]*this.fade(J*(Y+1));return $*0.24}if(Z===1)return this.phases[0]=(this.phases[0]+EJ*J*0.5/this.rate)%EJ,(Math.sin(this.phase)*0.8+Math.sin(this.phases[0])*0.25+Math.sin(this.phase*2)*Q*0.25*this.fade(J*2)+Math.sin(this.phase*3)*Q*0.1*this.fade(J*3))*0.3;if(Z===2){let Y=zF,H=kF;for(let N=0;N<4;N++){let q=J*Y[N];this.phases[N]=(this.phases[N]+EJ*q/this.rate)%EJ,$+=Math.sin(this.phases[N])*H[N]*(N===0?1:0.1+Q)*this.fade(q)}return $*0.27}if(Z===3){let Y=0.001+Q*0.009;for(let H=0;H<4;H++){let N=J*(H===3?0.5:1+(H-1)*Y);this.phases[H]=(this.phases[H]+EJ*N/this.rate)%EJ,$+=Math.sin(this.phases[H])*(0.85+Math.sin(this.clock*(0.7+H*0.17)+H)*0.15)}return $*0.12}let W=400+Q*6500,X=0;for(let Y=1;Y<=12;Y++){let H=J*Y,N=(Y%2?1:0.25)/Y*Math.exp(-H/W)*this.fade(H);$+=Math.sin(this.phase*Y)*N,X+=N*N}return $/Math.sqrt(Math.max(0.05,X))*0.25}}var S0=(J)=>document.getElementById(J),A6=S0("field"),o0=A6.getContext("2d"),N7=S0("start"),T$=S0("touch-start"),bQ=S0("pause"),H9=new M$,fQ=new L$,A$=["jaw","tbX","tbY","ttX","ttY","ttCurl","root","lipAp","lipProt","lipWidth","labiodental","velum","larynx","epilarynx","ventricular","lateral","dorsum"],G8,g9,Q9=2,Z8=!1,I$=!1,_Y=!1,z6=0,AY=0,X7=new Float32Array(512),yQ=0,V$,z$,TY,k$={...EQ},c9,x8,OJ,pJ,Y7=[0,-1,0],e8=[0,0,0],P$=[0,0,0],k6=[0,0],P6=0,mJ=0.5,_6=0.5,xQ=0,gQ=0,t8=0,zY=performance.now(),_$=0,B$=0,T6=0.62,vQ=[0,-9.80665,0],kY=0,H7=0.5,U7=0.5,dJ=!1,hQ=!0,wY=0,I8=360,V8=240,C$=!1,gJ=null,SY=null,w$=0;N7.disabled=T$.disabled=!0;var _F=(async()=>{await VY("./chimera.wasm"),V$=jQ("catalog");let J=V$.vowelTargets.male;TY=["u","a","i"].map((Z)=>A$.map((K)=>J[Z]?.artic[K]??V$.neutral[K]));let Q=await fetch("./shaker.pcm");if(!Q.ok)throw new Error("Shaker samples could not load.");if(z$=await Q.arrayBuffer(),z$.byteLength!==262144)throw new Error("Incomplete shaker samples.");if(_Y=!0,Q9===2)yY();N7.disabled=T$.disabled=!1,S0("load-status").textContent="Ready. Start with your volume low."})().catch((J)=>{throw q8("The instruments could not load. Check your connection and reload."),S0("load-status").textContent=String(J),J});function q8(J){S0("notice").textContent=J}function JJ(){S0("status").textContent=g9?Z8?"SOUND ON":"SOUND PAUSED":"READY TO PLAY",S0("live-led").classList.toggle("on",Z8),bQ.disabled=!g9,bQ.textContent=Z8?"Ⅱ":"▶",bQ.setAttribute("aria-label",Z8?"Pause sound":"Resume sound"),S0("sensor-status").textContent=!g9?"SOUND ON THIS DEVICE":P6&&performance.now()-P6<2000?"MOTION LIVE · PHONE SOUND":dJ?"WAITING FOR MOTION":"TOUCH / MOUSE · PHONE SOUND"}function jY(){let{DeviceMotionEvent:J,DeviceOrientationEvent:Q}=window;if(!J)return Promise.resolve(!1);let Z=[];if(typeof J.requestPermission==="function")Z.push(J.requestPermission());if(typeof Q?.requestPermission==="function")Z.push(Q.requestPermission());return Z.length?Promise.all(Z).then((K)=>K.every(($)=>$==="granted")):Promise.resolve(!0)}async function S$(J){if(I$)return;I$=!0,N7.textContent="Opening the instruments…";try{if("audioSession"in navigator)try{navigator.audioSession.type="playback"}catch{}G8??=new AudioContext({latencyHint:"interactive"});let Q=G8.resume(),Z=J?jY().catch(()=>!1):Promise.resolve(!1);await Promise.all([Q,_F]),dJ=await Z,await G8.audioWorklet.addModule("./audio-worklet.js"),g9=new AudioWorkletNode(G8,"motion-audio",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{module:BY(),pcm:z$,vowels:TY}}),g9.onprocessorerror=()=>{Z8=!1,JJ(),q8("The audio engine stopped. Reload to restart it.")},g9.port.onmessage=($)=>{if($.data.type==="scope")X7=$.data.values,yQ=$.data.writeIndex;if($.data.type==="artic")for(let W=0;W<A$.length;W++)k$[A$[W]]=$.data.values[W];if($.data.type==="grains"){H9.count=$.data.count;let W=$.data.positions,X=performance.now()/1000;for(let Y=0;Y<H9.count;Y++){let H=H9.grains[Y];H.x=W[Y*3],H.y=W[Y*3+1],H.z=W[Y*3+2]}for(let Y=0;Y<6;Y++){let H=H9.pulses[Y],N=Y*4;H.x=$.data.impacts[N],H.y=$.data.impacts[N+1],H.t=X-$.data.impacts[N+2],H.strength=$.data.impacts[N+3]}}if($.data.type==="error")Z8=!1,JJ(),q8("The audio engine stopped. Reload to restart it.")};let K=G8.createGain();if(K.gain.value=0.8,g9.connect(K),K.connect(G8.destination),fY(),Z8=!0,S0("welcome").hidden=!0,S0("gesture-caption").hidden=!1,dJ)hQ=!0,fQ.x=null,q8("Hold your phone comfortably, tap CENTRE, then move gently.");else q8(J?"Motion is unavailable or permission was declined. Drag to play; try opening this link in Safari or Chrome.":"Drag across the display to play. On a phone, tap “Enable motion” below to use its sensors.");JJ(),g8(!0)}catch(Q){q8(`Could not start sound: ${Q instanceof Error?Q.message:String(Q)}. Try Safari or Chrome.`),N7.textContent="Try enabling sound again"}finally{I$=!1}}N7.addEventListener("click",()=>S$(!0));T$.addEventListener("click",()=>S$(!1));bQ.addEventListener("click",async()=>{if(!G8)return;await G8.resume(),Z8=!Z8,JJ(),g8(!0)});S0("centre").addEventListener("click",()=>{fQ.center(Y7),SY=w$,mJ=_6=0.5,H7=U7=0.5,q8("Centred on this grip.")});S0("test").addEventListener("click",async()=>{if(!g9){if(await S$(!1),!g9)return}if(G8?.state!=="running")await G8?.resume();Z8=!0,mJ=0.5,_6=0.5,xQ=performance.now()+1000,gQ=performance.now()+220,wY=performance.now(),JJ(),g8(!0)});S0("sensitivity").addEventListener("input",(J)=>{T6=Number(J.target.value)/100,S0("sensitivity-output").textContent=String(Math.round(T6*100)).padStart(2,"0")});document.querySelectorAll("[data-mode]").forEach((J)=>J.addEventListener("click",()=>vY(Number(J.dataset.mode))));function vY(J){if(Q9=J,t8=0,gQ=0,H9.reset(H9.count),document.querySelectorAll("[data-mode]").forEach((Q)=>{let Z=Number(Q.dataset.mode)===Q9;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),S0("chamber").hidden=Q9!==0,S0("touch-pad").hidden=Q9===0,S0("synth-bank").hidden=Q9!==1,S0("touch-pad").setAttribute("aria-valuemax",Q9===2?"880":"1760"),S0("screen-name").textContent=["LOOSE GRAIN CHAMBER","CONTINUOUS THEREMIN","LIVE VOCAL ANATOMY"][Q9],S0("screen-detail").textContent=["XYZ","110—1760 HZ","CHIMERA"][Q9],S0("gesture-caption").textContent=Q9===0?"SHAKE IN ANY DIRECTION · DRAG TO RATTLE":Q9===1?"SIDE TILT: PITCH · FORWARD / BACK: VOWEL":"TILT TO SING · DRAG THE HEAD TO ROTATE",S0("description").innerHTML=["A handful of grains.<br>A chamber in your hand.<br>Every movement has a texture.","A continuous voice.<br>No keys. No steps.<br>Just the shape of a gesture.","A living vocal tract.<br>Tongue, lips and breath.<br>Play the anatomy of a voice."][Q9],S0("voice-credit").textContent=Q9===2?"CHIMERA · JAMESON HODGE":"PLAYED BY MOVEMENT",S0("x-label").textContent=Q9===0?"X / Y":"PITCH",S0("y-label").textContent=Q9===0?"ENERGY":"VOWEL",S0("z-label").textContent=Q9===0?"Z":"BREATH Z",A6.hidden=Q9===2,S0("head").hidden=Q9!==2,Q9===2&&_Y)yY();if(Q9===1)bY();JJ(),g8(!0)}function bY(){let J=CY[z6];document.querySelectorAll("[data-synth]").forEach((Q)=>{let Z=Number(Q.dataset.synth)===z6;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),S0("screen-name").textContent=J.name.toUpperCase()+" / CONTINUOUS SYNTH",S0("y-label").textContent=J.tag,S0("description").textContent=J.description,S0("gesture-caption").textContent="SIDE TILT: PITCH · FORWARD / BACK: "+J.tag,S0("touch-pad").querySelector("span:last-child").textContent=z6===0?"LOW ↔ HIGH · OO ↕ EE":"X: PITCH · Y: COLOUR"}document.querySelectorAll("[data-synth]").forEach((J)=>J.addEventListener("click",()=>{z6=Number(J.dataset.synth),bY(),g8(!0)}));function yY(){if(x8)return;try{let J=S0("head");x8=new nK({alpha:!0,antialias:!0,powerPreference:"low-power"}),x8.setPixelRatio(Math.min(devicePixelRatio,1.5)),x8.setClearColor(0,0),J.appendChild(x8.domElement),c9=new E$,c9.centred=!0;let Q=jQ("model",{body:{female:0,child:0},sampleRate:G8?.sampleRate??48000}),Z=Q.body.scale,K=Q.body.pharynx;pJ={bodyParams:Q.body,tract:{scale:Z,P:(W,X)=>({x:(W>0.5?0.5+(W-0.5)*0.86:W)*Z,y:(X<7?7-(7-X)*K:X)*Z}),unP:(W,X)=>({x:W/Z>0.5?0.5+(W/Z-0.5)/0.86:W/Z,y:X/Z<7?7-(7-X/Z)/K:X/Z})},frame:(W)=>jQ("frame",{model:Q.model,artic:W})},pQ();let $=c9.poses(pJ);c9.camera.position.copy($.home),c9.camera.lookAt($.target),OJ=new aK(c9.camera,x8.domElement),OJ.target.copy($.target),OJ.enablePan=OJ.enableZoom=!1,OJ.update()}catch(J){q8("The 3D view is unavailable in this browser. The voice can still play."),console.error(J)}}function pQ(){let J=A6.getBoundingClientRect(),Q=S0("glass");I8=Q.clientWidth,V8=Q.clientHeight-71;let Z=Math.min(devicePixelRatio,2);if(A6.width=Math.round(I8*Z),A6.height=Math.round(V8*Z),o0.setTransform(Z,0,0,Z,0,0),x8&&c9){if(x8.setSize(I8,V8),c9.resize(I8,V8),pJ&&OJ){let K=c9.poses(pJ);c9.camera.position.copy(K.home),OJ.target.copy(K.target),OJ.update()}}}addEventListener("resize",pQ);new ResizeObserver(pQ).observe(S0("glass"));pQ();addEventListener("devicemotion",(J)=>{if(!dJ)return;let{acceleration:Q,accelerationIncludingGravity:Z}=J;if(!Z||Z.x==null||Z.y==null||Z.z==null)return;let K=performance.now();P6=K;let $=Math.min(0.05,Math.max(0.005,(K-kY)/1000));kY=K;let W=[Z.x,Z.y,Z.z];for(let Y=0;Y<3;Y++)vQ[Y]+=(W[Y]-vQ[Y])*(1-Math.exp(-$/0.22));if(Q?.x!=null&&Q?.y!=null&&Q?.z!=null)e8=[Q.x,Q.y,Q.z].map((Y)=>Y/9.80665),Y7=[Z.x-Q.x,Z.y-Q.y,Z.z-Q.z].map((Y)=>Y/9.80665);else e8=W.map((Y,H)=>(Y-vQ[H])/9.80665),Y7=vQ.map((Y)=>Y/9.80665);if(P$=[J.rotationRate?.alpha??0,J.rotationRate?.beta??0,J.rotationRate?.gamma??0].map((Y)=>Y*Math.PI/180),hQ)fQ.center(Y7),SY=w$,hQ=!1;k6=fQ.project(Y7);let X=Math.max(0,Math.hypot(...e8)-0.035)*1.8+Math.max(0,Math.hypot(...P$)-0.15)*0.08;t8=Math.max(t8,C9(X*(0.5+T6),0,1)),g8(!1)},{passive:!0});addEventListener("deviceorientation",(J)=>{if(J.gamma!=null)w$=J.gamma},{passive:!0});function j$(J=performance.now()){let Q=J<xQ||!dJ||J-P6>1500,Z=Q?mJ:C9(0.5+Math.asin(C9(k6[0],-1,1))/Math.PI*(0.5+T6),0,1),K=Q?_6:C9(0.5-k6[1]*(0.7+T6),0,1);return H7+=(Z-H7)*0.35,U7+=(K-U7)*0.35,{frequency:110*Math.pow(2,H7*(Q9===2?3:4)),vowel:U7,breath:C9(0.55-e8[2]*0.65,0.05,1)}}function g8(J){if(!g9)return;let Q=performance.now();if(!J&&Q-_$<9)return;_$=Q;let Z=j$(Q);g9.port.postMessage({type:"state",mode:Q9,voice:z6,enabled:Z8,...Z,acceleration:e8.map((K)=>K*(0.45+T6*1.55)),tilt:k6,pulse:Q<gQ})}function PY(J){let Q=J.currentTarget,Z=Q.getBoundingClientRect(),K=C9((J.clientX-Z.left)/Z.width,0,1),$=C9((J.clientY-Z.top)/Z.height,0,1),W=performance.now();if(mJ=K,_6=1-$,xQ=W+2000,wY=W,gJ&&Q9===0){let Y=Math.max(8,W-gJ.t),H=(K-gJ.x)/Y*1000,N=($-gJ.y)/Y*1000;t8=Math.max(t8,C9(Math.hypot(H,N)*0.13,0,1)),e8=[C9(H*0.3,-2,2),C9(-N*0.3,-2,2),0]}gJ={x:K,y:$,t:W};let X=S0("touch-pad").querySelector("i");X.style.left=`${K*100}%`,X.style.top=`${$*100}%`,S0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,K*(Q9===2?3:4))))),g8(!0)}for(let J of[A6,S0("touch-pad")]){J.addEventListener("pointerdown",(Z)=>{if(!g9)return;C$=!0,gJ=null,J.setPointerCapture(Z.pointerId),PY(Z)}),J.addEventListener("pointermove",(Z)=>{if(C$)PY(Z)});let Q=()=>{C$=!1,gJ=null};J.addEventListener("pointerup",Q),J.addEventListener("pointercancel",Q)}S0("touch-pad").addEventListener("keydown",(J)=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(J.key))J.preventDefault(),mJ=C9(mJ+(J.key==="ArrowRight"?0.025:J.key==="ArrowLeft"?-0.025:0),0,1),_6=C9(_6+(J.key==="ArrowUp"?0.05:J.key==="ArrowDown"?-0.05:0),0,1),xQ=performance.now()+3000,S0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,mJ*(Q9===2?3:4))))),g8(!0)});function fY(){let J=Number(S0("size").value)/1000;H9.shape=S0("shape").value,H9.w=J,H9.h=H9.shape==="circle"?J:H9.shape==="oval"?J*0.62:J*1.12,H9.radius=Number(S0("grain-size").value)/2000,H9.reset(Number(S0("fill").value)),g9?.port.postMessage({type:"geometry",shape:H9.shape,width:H9.w,height:H9.h,depth:H9.d,radius:H9.radius,count:H9.count,material:Number(S0("material").value)})}for(let J of["shape","fill","size","grain-size","material"])S0(J).addEventListener("input",fY);function TF(J,Q){if(o0.clearRect(0,0,I8,V8),o0.save(),o0.translate(I8/2,V8/2),Q9===0){let Z=Math.min((I8-70)/H9.w,(V8-48)/H9.h),K=H9.w*Z/2,$=H9.h*Z/2;if(o0.lineWidth=1,o0.strokeStyle="#8b9b6e77",o0.beginPath(),H9.shape==="box")o0.roundRect(-K,-$,K*2,$*2,12);else o0.ellipse(0,0,K,$,0,0,Math.PI*2);o0.stroke();for(let X of H9.pulses){let Y=J/1000-X.t;if(Y<0||Y>0.35)continue;o0.strokeStyle=`rgba(233,180,94,${(1-Y/0.35)*0.5})`,o0.lineWidth=1,o0.beginPath(),o0.arc(X.x*Z,-X.y*Z,3+Y*90,0,Math.PI*2),o0.stroke()}let W=H9.grains.slice(0,H9.count).sort((X,Y)=>X.z-Y.z);for(let X of W){let Y=1+X.z*4;o0.fillStyle=`rgba(216,202,150,${0.4+(X.z/H9.d+0.5)*0.5})`,o0.beginPath(),o0.arc(X.x*Z,-X.y*Z,Math.max(1.5,H9.radius*Z)*Y,0,Math.PI*2),o0.fill()}}else{o0.strokeStyle="#70876233",o0.lineWidth=1;for(let H=-2;H<=2;H++)o0.beginPath(),o0.moveTo(-I8*0.4,H*V8*0.14),o0.lineTo(I8*0.4,H*V8*0.14),o0.stroke();let Z=j$(J),K=Z8?1:0.2;o0.strokeStyle=`rgba(209,195,145,${K})`,o0.lineWidth=1.4,o0.beginPath();let $=0,W=0.1;for(let H=0;H<512;H++)W=Math.max(W,Math.abs(X7[H]));for(let H=1;H<128;H++)if(X7[yQ+H-1&511]<=0&&X7[yQ+H&511]>0){$=H;break}for(let H=0;H<384;H++){let N=(H/383-0.5)*I8*0.84,q=-X7[yQ+$+H&511]/Math.max(0.2,W)*V8*0.25;if(H===0)o0.moveTo(N,q);else o0.lineTo(N,q)}o0.stroke();let X=(H7-0.5)*I8*0.7,Y=(0.5-U7)*V8*0.65;o0.fillStyle="#ead9aa",o0.beginPath(),o0.arc(X,Y,4,0,Math.PI*2),o0.fill()}o0.restore()}function hY(J){requestAnimationFrame(hY);let Q=Math.min(0.05,(J-zY)/1000);if(zY=J,t8*=Math.exp(-Q/0.06),t8<0.004)t8=0;if(!P6||J-P6>500)e8=e8.map((K)=>K*Math.exp(-Q/0.05)),P$=[0,0,0];let Z=Math.max(t8,J<gQ?0.65:0);if(g9&&J-AY>40)AY=J,g9.port.postMessage({type:"snapshot"});if(Q9===0||Q9===1)TF(J,Q);else if(c9&&x8&&pJ&&J-B$>40){let K=Math.min(0.08,(J-B$)/1000);B$=J,c9.face.update(null,K),c9.update(pJ,pJ.frame(k$),k$,null,{pressure:!1,particles:!1,calipers:!1,grid:!1},K),x8.render(c9.scene,c9.camera)}if(J-_$>30)g8(!1);if(Math.floor(J/100)!==Math.floor((J-Q*1000)/100)){JJ();let K=j$(J);S0("xy-value").textContent=Q9===0?`${Math.round(k6[0]*99).toString().padStart(2,"0")} / ${Math.round(k6[1]*99).toString().padStart(2,"0")}`:`${Math.round(K.frequency)} HZ`,S0("energy-value").textContent=Q9===0?String(Math.round(Z*127)).padStart(3,"0"):Q9===1&&z6!==0?String(Math.round(K.vowel*127)).padStart(3,"0"):["OO","OO–AH","AH","AH–EE","EE"][Math.min(4,Math.floor(K.vowel*5))],S0("z-value").textContent=String(Math.round((Q9===0?Math.abs(e8[2]):K.breath)*100)).padStart(3,"0")}}requestAnimationFrame(hY);document.addEventListener("visibilitychange",()=>{if(document.hidden&&g9)Z8=!1,g8(!0),JJ(),G8?.suspend(),q8("Sound paused while you were away. Tap ▶ to resume.")});S0("share").addEventListener("click",async()=>{try{let J=location.origin+location.pathname;if(navigator.share)await navigator.share({title:"Kaizen Motion",text:"Your phone is an instrument. Shake, tilt, play.",url:J});else await navigator.clipboard.writeText(J),q8("Link copied. Share it anywhere.")}catch(J){if(J.name!=="AbortError")q8("Copy this page’s address to share Motion.")}});var v$=document.createElement("button");v$.textContent="Enable motion";v$.addEventListener("click",async()=>{dJ=await jY().catch(()=>!1),hQ=!0,q8(dJ?"Motion enabled. Hold comfortably and tap CENTRE.":"Motion permission is unavailable here. Open in Safari/Chrome or keep playing with touch."),JJ()});document.querySelector("footer nav")?.appendChild(v$);vY(2);
