var fW="186",LJ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},IJ={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hW=0,vZ=1,xW=2;var Q7=1,gW=2,V6=3,C6=0,o9=1,f8=2,h8=0,Z7=1,bZ=2,yZ=3,fZ=4,r7=5;var B6=100,pW=101,mW=102,uW=103,t7=104,dW=200,lW=201,cW=202,nW=203,sW=204,iW=205,oW=206,aW=207,rW=208,tW=209,eW=210,JX=211,QX=212,ZX=213,KX=214,$X=0,WX=1,XX=2,hZ=3,YX=4,HX=5,UX=6,GX=7,NX=0,DX=1,qX=2,A8=0,xZ=1,gZ=2,pZ=3,mZ=4,uZ=5,dZ=6,lZ=7;var A6=301,bJ=302,e7=303,JQ=304,K7=306,FX=1000,QQ=1001,EX=1002,VJ=1003,OX=1004;var $7=1005;var a9=1006,ZQ=1007;var yJ=1008;var z8=1009,RX=1010,MX=1011,W7=1012,cZ=1013,CJ=1014,WJ=1015,x8=1016,nZ=1017,sZ=1018,z6=1020,LX=35902,IX=35899,VX=1021,CX=1022,g8=1023,fJ=1026,hJ=1027,BX=1028,iZ=1029,xJ=1030,oZ=1031;var aZ=1033,KQ=33776,$Q=33777,WQ=33778,XQ=33779,rZ=35840,tZ=35841,eZ=35842,JK=35843,QK=36196,ZK=37492,KK=37496,$K=37488,WK=37489,YQ=37490,XK=37491,YK=37808,HK=37809,UK=37810,GK=37811,NK=37812,DK=37813,qK=37814,FK=37815,EK=37816,OK=37817,RK=37818,MK=37819,LK=37820,IK=37821,VK=36492,CK=36494,BK=36495,AK=36283,zK=36284,HQ=36285,PK=36286;var kK=0,AX=1,gJ="",zX="srgb",_K="srgb-linear",TK="linear",D9="srgb";var PX=512,kX=513,_X=514,UQ=515,TX=516,wX=517,GQ=518,SX=519;var NQ=35048;var wK="300 es",SK=2000;function VH(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function CH(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function e6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function jX(){let J=e6("canvas");return J.style.display="block",J}var FW={},L6=null;function J7(...J){let Q="THREE."+J.shift();if(L6)L6("log",Q,...J);else console.log(Q,...J)}function vX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let Z=J[1];if(Z&&Z.isStackTrace)J[0]+=" "+Z.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function b0(...J){J=vX(J);let Q="THREE."+J.shift();if(L6)L6("warn",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.warn(Z.getError(Q));else console.warn(Q,...J)}}function f0(...J){J=vX(J);let Q="THREE."+J.shift();if(L6)L6("error",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.error(Z.getError(Q));else console.error(Q,...J)}}function vJ(...J){let Q=J.join(" ");if(Q in FW)return;FW[Q]=!0,b0(...J)}function bX(J,Q,Z){return new Promise(function(K,$){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:$();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Z);break;default:K()}}setTimeout(W,Z)})}var yX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class p8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let K=Z[J];if(K!==void 0){let $=K.indexOf(Q);if($!==-1)K.splice($,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let K=Z.slice(0);for(let $=0,W=K.length;$<W;$++)K[$].call(this,J);J.target=null}}}var h9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],EW=1234567,r6=Math.PI/180,I6=180/Math.PI;function KJ(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(h9[J&255]+h9[J>>8&255]+h9[J>>16&255]+h9[J>>24&255]+"-"+h9[Q&255]+h9[Q>>8&255]+"-"+h9[Q>>16&15|64]+h9[Q>>24&255]+"-"+h9[Z&63|128]+h9[Z>>8&255]+"-"+h9[Z>>16&255]+h9[Z>>24&255]+h9[K&255]+h9[K>>8&255]+h9[K>>16&255]+h9[K>>24&255]).toLowerCase()}function p0(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function jK(J,Q){return(J%Q+Q)%Q}function BH(J,Q,Z,K,$){return K+(J-Q)*($-K)/(Z-Q)}function AH(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function t6(J,Q,Z){return(1-Z)*J+Z*Q}function zH(J,Q,Z,K){return t6(J,Q,1-Math.exp(-Z*K))}function PH(J,Q=1){return Q-Math.abs(jK(J,Q*2)-Q)}function kH(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function _H(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function TH(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function wH(J,Q){return J+Math.random()*(Q-J)}function SH(J){return J*(0.5-Math.random())}function jH(J){if(J!==void 0)EW=J;let Q=EW+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function vH(J){return J*r6}function bH(J){return J*I6}function yH(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function fH(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function hH(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function xH(J,Q,Z,K,$){let{cos:W,sin:X}=Math,Y=W(Z/2),H=X(Z/2),G=W((Q+K)/2),D=X((Q+K)/2),U=W((Q-K)/2),N=X((Q-K)/2),F=W((K-Q)/2),O=X((K-Q)/2);switch($){case"XYX":J.set(Y*D,H*U,H*N,Y*G);break;case"YZY":J.set(H*N,Y*D,H*U,Y*G);break;case"ZXZ":J.set(H*U,H*N,Y*D,Y*G);break;case"XZX":J.set(Y*D,H*O,H*F,Y*G);break;case"YXY":J.set(H*F,Y*D,H*O,Y*G);break;case"ZYZ":J.set(H*O,H*F,Y*D,Y*G);break;default:b0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+$)}}function B8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function W9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var X7={DEG2RAD:r6,RAD2DEG:I6,generateUUID:KJ,clamp:p0,euclideanModulo:jK,mapLinear:BH,inverseLerp:AH,lerp:t6,damp:zH,pingpong:PH,smoothstep:kH,smootherstep:_H,randInt:TH,randFloat:wH,randFloatSpread:SH,seededRandom:jH,degToRad:vH,radToDeg:bH,isPowerOfTwo:yH,ceilPowerOfTwo:fH,floorPowerOfTwo:hH,setQuaternionFromProperEuler:xH,normalize:W9,denormalize:B8};class x0{static{x0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*Z+K[6],this.y=K[1]*Q+K[4]*Z+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(p0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=this.x-J.x,W=this.y-J.y;return this.x=$*Z-W*K+J.x,this.y=$*K+W*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class r9{constructor(J=0,Q=0,Z=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=K}static slerpFlat(J,Q,Z,K,$,W,X){let Y=Z[K+0],H=Z[K+1],G=Z[K+2],D=Z[K+3],U=$[W+0],N=$[W+1],F=$[W+2],O=$[W+3];if(D!==O||Y!==U||H!==N||G!==F){let L=Y*U+H*N+G*F+D*O;if(L<0)U=-U,N=-N,F=-F,O=-O,L=-L;let E=1-X;if(L<0.9995){let q=Math.acos(L),R=Math.sin(q);E=Math.sin(E*q)/R,X=Math.sin(X*q)/R,Y=Y*E+U*X,H=H*E+N*X,G=G*E+F*X,D=D*E+O*X}else{Y=Y*E+U*X,H=H*E+N*X,G=G*E+F*X,D=D*E+O*X;let q=1/Math.sqrt(Y*Y+H*H+G*G+D*D);Y*=q,H*=q,G*=q,D*=q}}J[Q]=Y,J[Q+1]=H,J[Q+2]=G,J[Q+3]=D}static multiplyQuaternionsFlat(J,Q,Z,K,$,W){let X=Z[K],Y=Z[K+1],H=Z[K+2],G=Z[K+3],D=$[W],U=$[W+1],N=$[W+2],F=$[W+3];return J[Q]=X*F+G*D+Y*N-H*U,J[Q+1]=Y*F+G*U+H*D-X*N,J[Q+2]=H*F+G*N+X*U-Y*D,J[Q+3]=G*F-X*D-Y*U-H*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,K){return this._x=J,this._y=Q,this._z=Z,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:K,_z:$,_order:W}=J,X=Math.cos,Y=Math.sin,H=X(Z/2),G=X(K/2),D=X($/2),U=Y(Z/2),N=Y(K/2),F=Y($/2);switch(W){case"XYZ":this._x=U*G*D+H*N*F,this._y=H*N*D-U*G*F,this._z=H*G*F+U*N*D,this._w=H*G*D-U*N*F;break;case"YXZ":this._x=U*G*D+H*N*F,this._y=H*N*D-U*G*F,this._z=H*G*F-U*N*D,this._w=H*G*D+U*N*F;break;case"ZXY":this._x=U*G*D-H*N*F,this._y=H*N*D+U*G*F,this._z=H*G*F+U*N*D,this._w=H*G*D-U*N*F;break;case"ZYX":this._x=U*G*D-H*N*F,this._y=H*N*D+U*G*F,this._z=H*G*F-U*N*D,this._w=H*G*D+U*N*F;break;case"YZX":this._x=U*G*D+H*N*F,this._y=H*N*D+U*G*F,this._z=H*G*F-U*N*D,this._w=H*G*D-U*N*F;break;case"XZY":this._x=U*G*D-H*N*F,this._y=H*N*D-U*G*F,this._z=H*G*F+U*N*D,this._w=H*G*D+U*N*F;break;default:b0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,K=Math.sin(Z);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],K=Q[4],$=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],G=Q[6],D=Q[10],U=Z+X+D;if(U>0){let N=0.5/Math.sqrt(U+1);this._w=0.25/N,this._x=(G-Y)*N,this._y=($-H)*N,this._z=(W-K)*N}else if(Z>X&&Z>D){let N=2*Math.sqrt(1+Z-X-D);this._w=(G-Y)/N,this._x=0.25*N,this._y=(K+W)/N,this._z=($+H)/N}else if(X>D){let N=2*Math.sqrt(1+X-Z-D);this._w=($-H)/N,this._x=(K+W)/N,this._y=0.25*N,this._z=(Y+G)/N}else{let N=2*Math.sqrt(1+D-Z-X);this._w=(W-K)/N,this._x=($+H)/N,this._y=(Y+G)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(p0(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let K=Math.min(1,Q/Z);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,G=Q._w;return this._x=Z*G+W*X+K*H-$*Y,this._y=K*G+W*Y+$*X-Z*H,this._z=$*G+W*H+Z*Y-K*X,this._w=W*G-Z*X-K*Y-$*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=this.dot(J);if(X<0)Z=-Z,K=-K,$=-$,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),G=Math.sin(H);Y=Math.sin(Y*H)/G,Q=Math.sin(Q*H)/G,this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),K=Math.sqrt(1-Z),$=Math.sqrt(Z);return this.set(K*Math.sin(J),K*Math.cos(J),$*Math.sin(Q),$*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{x.prototype.isVector3=!0}constructor(J=0,Q=0,Z=0){this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(OW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(OW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6]*K,this.y=$[1]*Q+$[4]*Z+$[7]*K,this.z=$[2]*Q+$[5]*Z+$[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements,W=1/($[3]*Q+$[7]*Z+$[11]*K+$[15]);return this.x=($[0]*Q+$[4]*Z+$[8]*K+$[12])*W,this.y=($[1]*Q+$[5]*Z+$[9]*K+$[13])*W,this.z=($[2]*Q+$[6]*Z+$[10]*K+$[14])*W,this}applyQuaternion(J){let Q=this.x,Z=this.y,K=this.z,$=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*K-X*Z),G=2*(X*Q-$*K),D=2*($*Z-W*Q);return this.x=Q+Y*H+W*D-X*G,this.y=Z+Y*G+X*H-$*D,this.z=K+Y*D+$*G-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[4]*Z+$[8]*K,this.y=$[1]*Q+$[5]*Z+$[9]*K,this.z=$[2]*Q+$[6]*Z+$[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:K,z:$}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-$*X,this.y=$*W-Z*Y,this.z=Z*X-K*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return DZ.copy(this).projectOnVector(J),this.sub(DZ)}reflect(J){return this.sub(DZ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(p0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,K=this.z-J.z;return Q*Q+Z*Z+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let K=Math.sin(Q)*J;return this.x=K*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=K*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var DZ=new x,OW=new r9;class g0{static{g0.prototype.isMatrix3=!0}constructor(J,Q,Z,K,$,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H)}set(J,Q,Z,K,$,W,X,Y,H){let G=this.elements;return G[0]=J,G[1]=K,G[2]=X,G[3]=Q,G[4]=$,G[5]=Y,G[6]=Z,G[7]=W,G[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[3],Y=Z[6],H=Z[1],G=Z[4],D=Z[7],U=Z[2],N=Z[5],F=Z[8],O=K[0],L=K[3],E=K[6],q=K[1],R=K[4],k=K[7],V=K[2],A=K[5],P=K[8];return $[0]=W*O+X*q+Y*V,$[3]=W*L+X*R+Y*A,$[6]=W*E+X*k+Y*P,$[1]=H*O+G*q+D*V,$[4]=H*L+G*R+D*A,$[7]=H*E+G*k+D*P,$[2]=U*O+N*q+F*V,$[5]=U*L+N*R+F*A,$[8]=U*E+N*k+F*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],G=J[8];return Q*W*G-Q*X*H-Z*$*G+Z*X*Y+K*$*H-K*W*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],G=J[8],D=G*W-X*H,U=X*Y-G*$,N=H*$-W*Y,F=Q*D+Z*U+K*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/F;return J[0]=D*O,J[1]=(K*H-G*Z)*O,J[2]=(X*Z-K*W)*O,J[3]=U*O,J[4]=(G*Q-K*Y)*O,J[5]=(K*$-X*Q)*O,J[6]=N*O,J[7]=(Z*Y-H*Q)*O,J[8]=(W*Q-Z*$)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,K,$,W,X){let Y=Math.cos($),H=Math.sin($);return this.set(Z*Y,Z*H,-Z*(Y*W+H*X)+W+J,-K*H,K*Y,-K*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return vJ("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qZ.makeScale(J,Q)),this}rotate(J){return vJ("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qZ.makeRotation(-J)),this}translate(J,Q){return vJ("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qZ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<9;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var qZ=new g0,RW=new g0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),MW=new g0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function gH(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function($,W,X){if(this.enabled===!1||W===X||!W||!X)return $;if(this.spaces[W].transfer==="srgb")$.r=$J($.r),$.g=$J($.g),$.b=$J($.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)$.applyMatrix3(this.spaces[W].toXYZ),$.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")$.r=M6($.r),$.g=M6($.g),$.b=M6($.b);return $},workingToColorSpace:function($,W){return this.convert($,this.workingColorSpace,W)},colorSpaceToWorking:function($,W){return this.convert($,W,this.workingColorSpace)},getPrimaries:function($){return this.spaces[$].primaries},getTransfer:function($){if($==="")return"linear";return this.spaces[$].transfer},getToneMappingMode:function($){return this.spaces[$].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function($,W=this.workingColorSpace){return $.fromArray(this.spaces[W].luminanceCoefficients)},define:function($){Object.assign(this.spaces,$)},_getMatrix:function($,W,X){return $.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function($){return this.spaces[$].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function($=this.workingColorSpace){return this.spaces[$].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function($,W){return vJ("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace($,W)},toWorkingColorSpace:function($,W){return vJ("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking($,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:RW,fromXYZ:MW,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:RW,fromXYZ:MW,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var o0=gH();function $J(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function M6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var K6;class vK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(K6===void 0)K6=e6("canvas");K6.width=J.width,K6.height=J.height;let K=K6.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);Z=K6}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=e6("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let K=Z.getImageData(0,0,J.width,J.height),$=K.data;for(let W=0;W<$.length;W++)$[W]=$J($[W]/255)*255;return Z.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor($J(Q[Z]/255)*255);else Q[Z]=$J(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return b0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var pH=0;class Y7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pH++}),this.uuid=KJ(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement!=="undefined"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame!=="undefined"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},K=this.data;if(K!==null){let $;if(Array.isArray(K)){$=[];for(let W=0,X=K.length;W<X;W++)if(K[W].isDataTexture)$.push(FZ(K[W].image));else $.push(FZ(K[W]))}else $=FZ(K);Z.url=$}if(!Q)J.images[this.uuid]=Z;return Z}}function FZ(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return vK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return b0("Texture: Unable to serialize Texture."),{}}var mH=0,EZ=new x;class g9 extends p8{constructor(J=g9.DEFAULT_IMAGE,Q=g9.DEFAULT_MAPPING,Z=1001,K=1001,$=1006,W=1008,X=1023,Y=1009,H=g9.DEFAULT_ANISOTROPY,G=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:mH++}),this.uuid=KJ(),this.name="",this.source=new Y7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=K,this.magFilter=$,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new x0(0,0),this.repeat=new x0(1,1),this.center=new x0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new g0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=G,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(EZ).x}get height(){return this.source.getSize(EZ).y}get depth(){return this.source.getSize(EZ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){b0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){b0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&Z&&(K.isVector2&&Z.isVector2))K.copy(Z);else if(K&&Z&&(K.isVector3&&Z.isVector3))K.copy(Z);else if(K&&Z&&(K.isMatrix3&&Z.isMatrix3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}g9.DEFAULT_IMAGE=null;g9.DEFAULT_MAPPING=300;g9.DEFAULT_ANISOTROPY=1;class Y9{static{Y9.prototype.isVector4=!0}constructor(J=0,Q=0,Z=0,K=1){this.x=J,this.y=Q,this.z=Z,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,K){return this.x=J,this.y=Q,this.z=Z,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*K+W[12]*$,this.y=W[1]*Q+W[5]*Z+W[9]*K+W[13]*$,this.z=W[2]*Q+W[6]*Z+W[10]*K+W[14]*$,this.w=W[3]*Q+W[7]*Z+W[11]*K+W[15]*$,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,K,$,W=0.01,X=0.1,Y=J.elements,H=Y[0],G=Y[4],D=Y[8],U=Y[1],N=Y[5],F=Y[9],O=Y[2],L=Y[6],E=Y[10];if(Math.abs(G-U)<0.01&&Math.abs(D-O)<0.01&&Math.abs(F-L)<0.01){if(Math.abs(G+U)<0.1&&Math.abs(D+O)<0.1&&Math.abs(F+L)<0.1&&Math.abs(H+N+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let R=(H+1)/2,k=(N+1)/2,V=(E+1)/2,A=(G+U)/4,P=(D+O)/4,_=(F+L)/4;if(R>k&&R>V)if(R<0.01)Z=0,K=0.707106781,$=0.707106781;else Z=Math.sqrt(R),K=A/Z,$=P/Z;else if(k>V)if(k<0.01)Z=0.707106781,K=0,$=0.707106781;else K=Math.sqrt(k),Z=A/K,$=_/K;else if(V<0.01)Z=0.707106781,K=0.707106781,$=0;else $=Math.sqrt(V),Z=P/$,K=_/$;return this.set(Z,K,$,Q),this}let q=Math.sqrt((L-F)*(L-F)+(D-O)*(D-O)+(U-G)*(U-G));if(Math.abs(q)<0.001)q=1;return this.x=(L-F)/q,this.y=(D-O)/q,this.z=(U-G)/q,this.w=Math.acos((H+N+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this.w=p0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this.w=p0(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bK extends p8{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new Y9(0,0,J,Q),this.scissorTest=!1,this.viewport=new Y9(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:Z.depth},$=new g9(K),W=Z.count;for(let X=0;X<W;X++)this.textures[X]=$.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveColorBuffer=Z.resolveColorBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.storeMultisampledColorBuffer=Z.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Z.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Z.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview,this.useArrayDepthTexture=Z.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let K=0,$=this.textures.length;K<$;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=Z,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new Y7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $8 extends bK{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class DQ extends g9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class yK extends g9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class M9{static{M9.prototype.isMatrix4=!0}constructor(J,Q,Z,K,$,W,X,Y,H,G,D,U,N,F,O,L){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H,G,D,U,N,F,O,L)}set(J,Q,Z,K,$,W,X,Y,H,G,D,U,N,F,O,L){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=Z,E[12]=K,E[1]=$,E[5]=W,E[9]=X,E[13]=Y,E[2]=H,E[6]=G,E[10]=D,E[14]=U,E[3]=N,E[7]=F,E[11]=O,E[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new M9().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),Z.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,Z=J.elements,K=1/$6.setFromMatrixColumn(J,0).length(),$=1/$6.setFromMatrixColumn(J,1).length(),W=1/$6.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*K,Q[1]=Z[1]*K,Q[2]=Z[2]*K,Q[3]=0,Q[4]=Z[4]*$,Q[5]=Z[5]*$,Q[6]=Z[6]*$,Q[7]=0,Q[8]=Z[8]*W,Q[9]=Z[9]*W,Q[10]=Z[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z,W=Math.cos(Z),X=Math.sin(Z),Y=Math.cos(K),H=Math.sin(K),G=Math.cos($),D=Math.sin($);if(J.order==="XYZ"){let U=W*G,N=W*D,F=X*G,O=X*D;Q[0]=Y*G,Q[4]=-Y*D,Q[8]=H,Q[1]=N+F*H,Q[5]=U-O*H,Q[9]=-X*Y,Q[2]=O-U*H,Q[6]=F+N*H,Q[10]=W*Y}else if(J.order==="YXZ"){let U=Y*G,N=Y*D,F=H*G,O=H*D;Q[0]=U+O*X,Q[4]=F*X-N,Q[8]=W*H,Q[1]=W*D,Q[5]=W*G,Q[9]=-X,Q[2]=N*X-F,Q[6]=O+U*X,Q[10]=W*Y}else if(J.order==="ZXY"){let U=Y*G,N=Y*D,F=H*G,O=H*D;Q[0]=U-O*X,Q[4]=-W*D,Q[8]=F+N*X,Q[1]=N+F*X,Q[5]=W*G,Q[9]=O-U*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let U=W*G,N=W*D,F=X*G,O=X*D;Q[0]=Y*G,Q[4]=F*H-N,Q[8]=U*H+O,Q[1]=Y*D,Q[5]=O*H+U,Q[9]=N*H-F,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let U=W*Y,N=W*H,F=X*Y,O=X*H;Q[0]=Y*G,Q[4]=O-U*D,Q[8]=F*D+N,Q[1]=D,Q[5]=W*G,Q[9]=-X*G,Q[2]=-H*G,Q[6]=N*D+F,Q[10]=U-O*D}else if(J.order==="XZY"){let U=W*Y,N=W*H,F=X*Y,O=X*H;Q[0]=Y*G,Q[4]=-D,Q[8]=H*G,Q[1]=U*D+O,Q[5]=W*G,Q[9]=N*D-F,Q[2]=F*D-N,Q[6]=X*G,Q[10]=O*D+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(uH,J,dH)}lookAt(J,Q,Z){let K=this.elements;if(Z8.subVectors(J,Q),Z8.lengthSq()===0)Z8.z=1;if(Z8.normalize(),qJ.crossVectors(Z,Z8),qJ.lengthSq()===0){if(Math.abs(Z.z)===1)Z8.x+=0.0001;else Z8.z+=0.0001;Z8.normalize(),qJ.crossVectors(Z,Z8)}return qJ.normalize(),S7.crossVectors(Z8,qJ),K[0]=qJ.x,K[4]=S7.x,K[8]=Z8.x,K[1]=qJ.y,K[5]=S7.y,K[9]=Z8.y,K[2]=qJ.z,K[6]=S7.z,K[10]=Z8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[4],Y=Z[8],H=Z[12],G=Z[1],D=Z[5],U=Z[9],N=Z[13],F=Z[2],O=Z[6],L=Z[10],E=Z[14],q=Z[3],R=Z[7],k=Z[11],V=Z[15],A=K[0],P=K[4],_=K[8],I=K[12],B=K[1],p=K[5],j=K[9],b=K[13],m=K[2],T=K[6],w=K[10],n=K[14],d=K[3],$0=K[7],i=K[11],Z0=K[15];return $[0]=W*A+X*B+Y*m+H*d,$[4]=W*P+X*p+Y*T+H*$0,$[8]=W*_+X*j+Y*w+H*i,$[12]=W*I+X*b+Y*n+H*Z0,$[1]=G*A+D*B+U*m+N*d,$[5]=G*P+D*p+U*T+N*$0,$[9]=G*_+D*j+U*w+N*i,$[13]=G*I+D*b+U*n+N*Z0,$[2]=F*A+O*B+L*m+E*d,$[6]=F*P+O*p+L*T+E*$0,$[10]=F*_+O*j+L*w+E*i,$[14]=F*I+O*b+L*n+E*Z0,$[3]=q*A+R*B+k*m+V*d,$[7]=q*P+R*p+k*T+V*$0,$[11]=q*_+R*j+k*w+V*i,$[15]=q*I+R*b+k*n+V*Z0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],G=J[2],D=J[6],U=J[10],N=J[14],F=J[3],O=J[7],L=J[11],E=J[15],q=Y*N-H*U,R=X*N-H*D,k=X*U-Y*D,V=W*N-H*G,A=W*U-Y*G,P=W*D-X*G;return Q*(O*q-L*R+E*k)-Z*(F*q-L*V+E*A)+K*(F*R-O*V+E*P)-$*(F*k-O*A+L*P)}determinantAffine(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],G=J[10];return Q*(W*G-X*H)-Z*($*G-X*Y)+K*($*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],G=J[8],D=J[9],U=J[10],N=J[11],F=J[12],O=J[13],L=J[14],E=J[15],q=Q*X-Z*W,R=Q*Y-K*W,k=Q*H-$*W,V=Z*Y-K*X,A=Z*H-$*X,P=K*H-$*Y,_=G*O-D*F,I=G*L-U*F,B=G*E-N*F,p=D*L-U*O,j=D*E-N*O,b=U*E-N*L,m=q*b-R*j+k*p+V*B-A*I+P*_;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/m;return J[0]=(X*b-Y*j+H*p)*T,J[1]=(K*j-Z*b-$*p)*T,J[2]=(O*P-L*A+E*V)*T,J[3]=(U*A-D*P-N*V)*T,J[4]=(Y*B-W*b-H*I)*T,J[5]=(Q*b-K*B+$*I)*T,J[6]=(L*k-F*P-E*R)*T,J[7]=(G*P-U*k+N*R)*T,J[8]=(W*j-X*B+H*_)*T,J[9]=(Z*B-Q*j-$*_)*T,J[10]=(F*A-O*k+E*q)*T,J[11]=(D*k-G*A-N*q)*T,J[12]=(X*I-W*p-Y*_)*T,J[13]=(Q*p-Z*I+K*_)*T,J[14]=(O*R-F*V-L*q)*T,J[15]=(G*V-D*R+U*q)*T,this}scale(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z;return Q[0]*=Z,Q[4]*=K,Q[8]*=$,Q[1]*=Z,Q[5]*=K,Q[9]*=$,Q[2]*=Z,Q[6]*=K,Q[10]*=$,Q[3]*=Z,Q[7]*=K,Q[11]*=$,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,K))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=1-Z,W=J.x,X=J.y,Y=J.z,H=$*W,G=$*X;return this.set(H*W+Z,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,G*X+Z,G*Y-K*W,0,H*Y-K*X,G*Y+K*W,$*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,K,$,W){return this.set(1,Z,$,0,J,1,W,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,Z){let K=this.elements,$=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=$+$,G=W+W,D=X+X,U=$*H,N=$*G,F=$*D,O=W*G,L=W*D,E=X*D,q=Y*H,R=Y*G,k=Y*D,V=Z.x,A=Z.y,P=Z.z;return K[0]=(1-(O+E))*V,K[1]=(N+k)*V,K[2]=(F-R)*V,K[3]=0,K[4]=(N-k)*A,K[5]=(1-(U+E))*A,K[6]=(L+q)*A,K[7]=0,K[8]=(F+R)*P,K[9]=(L-q)*P,K[10]=(1-(U+O))*P,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,Z){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let $=this.determinantAffine();if($===0)return Z.set(1,1,1),Q.identity(),this;let W=$6.set(K[0],K[1],K[2]).length(),X=$6.set(K[4],K[5],K[6]).length(),Y=$6.set(K[8],K[9],K[10]).length();if($<0)W=-W;I8.copy(this);let H=1/W,G=1/X,D=1/Y;return I8.elements[0]*=H,I8.elements[1]*=H,I8.elements[2]*=H,I8.elements[4]*=G,I8.elements[5]*=G,I8.elements[6]*=G,I8.elements[8]*=D,I8.elements[9]*=D,I8.elements[10]*=D,Q.setFromRotationMatrix(I8),Z.x=W,Z.y=X,Z.z=Y,this}makePerspective(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,G=2*$/(Q-J),D=2*$/(Z-K),U=(Q+J)/(Q-J),N=(Z+K)/(Z-K),F,O;if(Y)F=$/(W-$),O=W*$/(W-$);else if(X===2000)F=-(W+$)/(W-$),O=-2*W*$/(W-$);else if(X===2001)F=-W/(W-$),O=-W*$/(W-$);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=G,H[4]=0,H[8]=U,H[12]=0,H[1]=0,H[5]=D,H[9]=N,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,G=2/(Q-J),D=2/(Z-K),U=-(Q+J)/(Q-J),N=-(Z+K)/(Z-K),F,O;if(Y)F=1/(W-$),O=W/(W-$);else if(X===2000)F=-2/(W-$),O=-(W+$)/(W-$);else if(X===2001)F=-1/(W-$),O=-$/(W-$);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=G,H[4]=0,H[8]=0,H[12]=U,H[1]=0,H[5]=D,H[9]=0,H[13]=N,H[2]=0,H[6]=0,H[10]=F,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<16;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var $6=new x,I8=new M9,uH=new x(0,0,0),dH=new x(1,1,1),qJ=new x,S7=new x,Z8=new x,LW=new M9,IW=new r9;class y8{constructor(J=0,Q=0,Z=0,K=y8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,K=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let K=J.elements,$=K[0],W=K[4],X=K[8],Y=K[1],H=K[5],G=K[9],D=K[2],U=K[6],N=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(p0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-G,N),this._z=Math.atan2(-W,$);else this._x=Math.atan2(U,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-p0(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(X,N),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-D,$),this._z=0;break;case"ZXY":if(this._x=Math.asin(p0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-D,N),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,$);break;case"ZYX":if(this._y=Math.asin(-p0(D,-1,1)),Math.abs(D)<0.9999999)this._x=Math.atan2(U,N),this._z=Math.atan2(Y,$);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(p0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-G,H),this._y=Math.atan2(-D,$);else this._x=0,this._y=Math.atan2(X,N);break;case"XZY":if(this._z=Math.asin(-p0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(U,H),this._y=Math.atan2(X,$);else this._x=Math.atan2(-G,N),this._y=0;break;default:b0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return LW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(LW,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return IW.setFromEuler(this),this.setFromQuaternion(IW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}y8.DEFAULT_ORDER="XYZ";class qQ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var lH=0,VW=new x,W6=new r9,t8=new M9,j7=new x,s6=new x,cH=new x,nH=new r9,CW=new x(1,0,0),BW=new x(0,1,0),AW=new x(0,0,1),zW={type:"added"},sH={type:"removed"},X6={type:"childadded",child:null},OZ={type:"childremoved",child:null};class i9 extends p8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:lH++}),this.uuid=KJ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i9.DEFAULT_UP.clone();let J=new x,Q=new y8,Z=new r9,K=new x(1,1,1);function $(){Z.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange($),Z._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new M9},normalMatrix:{value:new g0}}),this.matrix=new M9,this.matrixWorld=new M9,this.matrixAutoUpdate=i9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qQ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return W6.setFromAxisAngle(J,Q),this.quaternion.multiply(W6),this}rotateOnWorldAxis(J,Q){return W6.setFromAxisAngle(J,Q),this.quaternion.premultiply(W6),this}rotateX(J){return this.rotateOnAxis(CW,J)}rotateY(J){return this.rotateOnAxis(BW,J)}rotateZ(J){return this.rotateOnAxis(AW,J)}translateOnAxis(J,Q){return VW.copy(J).applyQuaternion(this.quaternion),this.position.add(VW.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(CW,J)}translateY(J){return this.translateOnAxis(BW,J)}translateZ(J){return this.translateOnAxis(AW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(t8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)j7.copy(J);else j7.set(J,Q,Z);let K=this.parent;if(this.updateWorldMatrix(!0,!1),s6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)t8.lookAt(s6,j7,this.up);else t8.lookAt(j7,s6,this.up);if(this.quaternion.setFromRotationMatrix(t8),K)t8.extractRotation(K.matrixWorld),W6.setFromRotationMatrix(t8),this.quaternion.premultiply(W6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return f0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(zW),X6.child=J,this.dispatchEvent(X6),X6.child=null;else f0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(sH),OZ.child=J,this.dispatchEvent(OZ),OZ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),t8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),t8.multiply(J.parent.matrixWorld);return J.applyMatrix4(t8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(zW),X6.child=J,this.dispatchEvent(X6),X6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,K=this.children.length;Z<K;Z++){let W=this.children[Z].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let K=this.children;for(let $=0,W=K.length;$<W;$++)K[$].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s6,J,cH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s6,nH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:Z,z:K}=J,$=this.matrix.elements;$[12]+=Q-$[0]*Q-$[4]*Z-$[8]*K,$[13]+=Z-$[1]*Q-$[5]*Z-$[9]*K,$[14]+=K-$[2]*Q-$[6]*Z-$[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q,Z=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Z){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Z=!0}if(Q===!0){let $=this.children;for(let W=0,X=$.length;W<X;W++)$[W].updateWorldMatrix(!1,!0,Z)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,K.name=this.name,K.castShadow=this.castShadow,K.receiveShadow=this.receiveShadow,K.visible=this.visible,K.frustumCulled=this.frustumCulled,K.renderOrder=this.renderOrder,K.static=this.static,K.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function $(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=$(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,G=Y.length;H<G;H++){let D=Y[H];$(J.shapes,D)}else $(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)$(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push($(J.materials,this.material[Y]));K.material=X}else K.material=$(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push($(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),G=W(J.images),D=W(J.shapes),U=W(J.skeletons),N=W(J.animations),F=W(J.nodes);if(X.length>0)Z.geometries=X;if(Y.length>0)Z.materials=Y;if(H.length>0)Z.textures=H;if(G.length>0)Z.images=G;if(D.length>0)Z.shapes=D;if(U.length>0)Z.skeletons=U;if(N.length>0)Z.animations=N;if(F.length>0)Z.nodes=F}return Z.object=K,Z;function W(X){let Y=[];for(let H in X){let G=X[H];delete G.metadata,Y.push(G)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let K=J.children[Z];this.add(K.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}i9.DEFAULT_UP=new x(0,1,0);i9.DEFAULT_MATRIX_AUTO_UPDATE=!0;i9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class MJ extends i9{constructor(){super();this.isGroup=!0,this.type="Group"}}var iH={type:"move"};class H7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new MJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new MJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new MJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let K=null,$=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let L=Q.getJointPose(O,Z),E=this._getHandJoint(H,O);if(L!==null)E.matrix.fromArray(L.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=L.radius;E.visible=L!==null}let G=H.joints["index-finger-tip"],D=H.joints["thumb-tip"],U=G.position.distanceTo(D.position),N=0.02,F=0.005;if(H.inputState.pinching&&U>N+F)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&U<=N-F)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if($=Q.getPose(J.gripSpace,Z),$!==null){if(Y.matrix.fromArray($.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,$.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy($.linearVelocity);else Y.hasLinearVelocity=!1;if($.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy($.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,Z),K===null&&$!==null)K=$;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(iH)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=$!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new MJ;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var fX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},FJ={h:0,s:0,l:0},v7={h:0,s:0,l:0};function RZ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class e0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,o0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,K=o0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,o0.colorSpaceToWorking(this,K),this}setHSL(J,Q,Z,K=o0.workingColorSpace){if(J=jK(J,1),Q=p0(Q,0,1),Z=p0(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let $=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,W=2*Z-$;this.r=RZ(W,$,J+0.3333333333333333),this.g=RZ(W,$,J),this.b=RZ(W,$,J-0.3333333333333333)}return o0.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function Z($){if($===void 0)return;if(parseFloat($)<1)b0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let $,W=K[1],X=K[2];switch(W){case"rgb":case"rgba":if($=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(255,parseInt($[1],10))/255,Math.min(255,parseInt($[2],10))/255,Math.min(255,parseInt($[3],10))/255,Q);if($=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(100,parseInt($[1],10))/100,Math.min(100,parseInt($[2],10))/100,Math.min(100,parseInt($[3],10))/100,Q);break;case"hsl":case"hsla":if($=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setHSL(parseFloat($[1])/360,parseFloat($[2])/100,parseFloat($[3])/100,Q);break;default:b0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let $=K[1],W=$.length;if(W===3)return this.setRGB(parseInt($.charAt(0),16)/15,parseInt($.charAt(1),16)/15,parseInt($.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt($,16),Q);else b0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=fX[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else b0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=$J(J.r),this.g=$J(J.g),this.b=$J(J.b),this}copyLinearToSRGB(J){return this.r=M6(J.r),this.g=M6(J.g),this.b=M6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return o0.workingToColorSpace(x9.copy(this),J),Math.round(p0(x9.r*255,0,255))*65536+Math.round(p0(x9.g*255,0,255))*256+Math.round(p0(x9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=o0.workingColorSpace){o0.workingToColorSpace(x9.copy(this),Q);let{r:Z,g:K,b:$}=x9,W=Math.max(Z,K,$),X=Math.min(Z,K,$),Y,H,G=(X+W)/2;if(X===W)Y=0,H=0;else{let D=W-X;switch(H=G<=0.5?D/(W+X):D/(2-W-X),W){case Z:Y=(K-$)/D+(K<$?6:0);break;case K:Y=($-Z)/D+2;break;case $:Y=(Z-K)/D+4;break}Y/=6}return J.h=Y,J.s=H,J.l=G,J}getRGB(J,Q=o0.workingColorSpace){return o0.workingToColorSpace(x9.copy(this),Q),J.r=x9.r,J.g=x9.g,J.b=x9.b,J}getStyle(J="srgb"){o0.workingToColorSpace(x9.copy(this),J);let{r:Q,g:Z,b:K}=x9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round(K*255)})`}offsetHSL(J,Q,Z){return this.getHSL(FJ),this.setHSL(FJ.h+J,FJ.s+Q,FJ.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(FJ),J.getHSL(v7);let Z=t6(FJ.h,v7.h,Q),K=t6(FJ.s,v7.s,Q),$=t6(FJ.l,v7.l,Q);return this.setHSL(Z,K,$),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,K=this.b,$=J.elements;return this.r=$[0]*Q+$[3]*Z+$[6]*K,this.g=$[1]*Q+$[4]*Z+$[7]*K,this.b=$[2]*Q+$[5]*Z+$[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var x9=new e0;e0.NAMES=fX;class U7{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new e0(J),this.near=Q,this.far=Z}clone(){return new U7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class FQ extends i9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new y8,this.environmentIntensity=1,this.environmentRotation=new y8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var V8=new x,e8=new x,MZ=new x,JJ=new x,Y6=new x,H6=new x,PW=new x,LZ=new x,IZ=new x,VZ=new x,CZ=new Y9,BZ=new Y9,AZ=new Y9;class q8{constructor(J=new x,Q=new x,Z=new x){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,K){K.subVectors(Z,Q),V8.subVectors(J,Q),K.cross(V8);let $=K.lengthSq();if($>0)return K.multiplyScalar(1/Math.sqrt($));return K.set(0,0,0)}static getBarycoord(J,Q,Z,K,$){V8.subVectors(K,Q),e8.subVectors(Z,Q),MZ.subVectors(J,Q);let W=V8.dot(V8),X=V8.dot(e8),Y=V8.dot(MZ),H=e8.dot(e8),G=e8.dot(MZ),D=W*H-X*X;if(D===0)return $.set(0,0,0),null;let U=1/D,N=(H*Y-X*G)*U,F=(W*G-X*Y)*U;return $.set(1-N-F,F,N)}static containsPoint(J,Q,Z,K){if(this.getBarycoord(J,Q,Z,K,JJ)===null)return!1;return JJ.x>=0&&JJ.y>=0&&JJ.x+JJ.y<=1}static getInterpolation(J,Q,Z,K,$,W,X,Y){if(this.getBarycoord(J,Q,Z,K,JJ)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector($,JJ.x),Y.addScaledVector(W,JJ.y),Y.addScaledVector(X,JJ.z),Y}static getInterpolatedAttribute(J,Q,Z,K,$,W){return CZ.setScalar(0),BZ.setScalar(0),AZ.setScalar(0),CZ.fromBufferAttribute(J,Q),BZ.fromBufferAttribute(J,Z),AZ.fromBufferAttribute(J,K),W.setScalar(0),W.addScaledVector(CZ,$.x),W.addScaledVector(BZ,$.y),W.addScaledVector(AZ,$.z),W}static isFrontFacing(J,Q,Z,K){return V8.subVectors(Z,Q),e8.subVectors(J,Q),V8.cross(e8).dot(K)<0}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,K){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,Z,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return V8.subVectors(this.c,this.b),e8.subVectors(this.a,this.b),V8.cross(e8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return q8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return q8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,K,$){return q8.getInterpolation(J,this.a,this.b,this.c,Q,Z,K,$)}containsPoint(J){return q8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return q8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,K=this.b,$=this.c,W,X;Y6.subVectors(K,Z),H6.subVectors($,Z),LZ.subVectors(J,Z);let Y=Y6.dot(LZ),H=H6.dot(LZ);if(Y<=0&&H<=0)return Q.copy(Z);IZ.subVectors(J,K);let G=Y6.dot(IZ),D=H6.dot(IZ);if(G>=0&&D<=G)return Q.copy(K);let U=Y*D-G*H;if(U<=0&&Y>=0&&G<=0)return W=Y/(Y-G),Q.copy(Z).addScaledVector(Y6,W);VZ.subVectors(J,$);let N=Y6.dot(VZ),F=H6.dot(VZ);if(F>=0&&N<=F)return Q.copy($);let O=N*H-Y*F;if(O<=0&&H>=0&&F<=0)return X=H/(H-F),Q.copy(Z).addScaledVector(H6,X);let L=G*F-N*D;if(L<=0&&D-G>=0&&N-F>=0)return PW.subVectors($,K),X=(D-G)/(D-G+(N-F)),Q.copy(K).addScaledVector(PW,X);let E=1/(L+O+U);return W=O*E,X=U*E,Q.copy(Z).addScaledVector(Y6,W).addScaledVector(H6,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class E8{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(C8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(C8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=C8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let $=Z.getAttribute("position");if(Q===!0&&$!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=$.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,C8);else C8.fromBufferAttribute($,W);C8.applyMatrix4(J.matrixWorld),this.expandByPoint(C8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();b7.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();b7.copy(Z.boundingBox)}b7.applyMatrix4(J.matrixWorld),this.union(b7)}}let K=J.children;for(let $=0,W=K.length;$<W;$++)this.expandByObject(K[$],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,C8),C8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(i6),y7.subVectors(this.max,i6),U6.subVectors(J.a,i6),G6.subVectors(J.b,i6),N6.subVectors(J.c,i6),EJ.subVectors(G6,U6),OJ.subVectors(N6,G6),TJ.subVectors(U6,N6);let Q=[0,-EJ.z,EJ.y,0,-OJ.z,OJ.y,0,-TJ.z,TJ.y,EJ.z,0,-EJ.x,OJ.z,0,-OJ.x,TJ.z,0,-TJ.x,-EJ.y,EJ.x,0,-OJ.y,OJ.x,0,-TJ.y,TJ.x,0];if(!zZ(Q,U6,G6,N6,y7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!zZ(Q,U6,G6,N6,y7))return!1;return f7.crossVectors(EJ,OJ),Q=[f7.x,f7.y,f7.z],zZ(Q,U6,G6,N6,y7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,C8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(C8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return QJ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),QJ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),QJ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),QJ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),QJ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),QJ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),QJ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),QJ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(QJ),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var QJ=[new x,new x,new x,new x,new x,new x,new x,new x],C8=new x,b7=new E8,U6=new x,G6=new x,N6=new x,EJ=new x,OJ=new x,TJ=new x,i6=new x,y7=new x,f7=new x,wJ=new x;function zZ(J,Q,Z,K,$){for(let W=0,X=J.length-3;W<=X;W+=3){wJ.fromArray(J,W);let Y=$.x*Math.abs(wJ.x)+$.y*Math.abs(wJ.y)+$.z*Math.abs(wJ.z),H=Q.dot(wJ),G=Z.dot(wJ),D=K.dot(wJ);if(Math.max(-Math.max(H,G,D),Math.min(H,G,D))>Y)return!1}return!0}var B9=new x,h7=new x0,oH=0;class F8 extends p8{constructor(J,Q,Z=!1){super();if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let K=0,$=this.itemSize;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)h7.fromBufferAttribute(this,Q),h7.applyMatrix3(J),this.setXY(Q,h7.x,h7.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.applyMatrix3(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.applyMatrix4(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.applyNormalMatrix(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.transformDirection(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=B8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=W9(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=B8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=B8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=B8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=B8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J*=this.itemSize,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J*=this.itemSize,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array),$=W9($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this.array[J+3]=$,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class EQ extends F8{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class OQ extends F8{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class c9 extends F8{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var aH=new E8,o6=new x,PZ=new x;class XJ{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else aH.setFromPoints(J).getCenter(Z);let K=0;for(let $=0,W=J.length;$<W;$++)K=Math.max(K,Z.distanceToSquared(J[$]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;o6.subVectors(J,this.center);let Q=o6.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),K=(Z-this.radius)*0.5;this.center.addScaledVector(o6,K/Z),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else PZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(o6.copy(J.center).add(PZ)),this.expandByPoint(o6.copy(J.center).sub(PZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var rH=0,N8=new M9,kZ=new i9,D6=new x,K8=new E8,a6=new E8,w9=new x;class O8 extends p8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rH++}),this.uuid=KJ(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((VH(J))?OQ:EQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let $=new g0().getNormalMatrix(J);Z.applyNormalMatrix($),Z.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return N8.makeRotationFromQuaternion(J),this.applyMatrix4(N8),this}rotateX(J){return N8.makeRotationX(J),this.applyMatrix4(N8),this}rotateY(J){return N8.makeRotationY(J),this.applyMatrix4(N8),this}rotateZ(J){return N8.makeRotationZ(J),this.applyMatrix4(N8),this}translate(J,Q,Z){return N8.makeTranslation(J,Q,Z),this.applyMatrix4(N8),this}scale(J,Q,Z){return N8.makeScale(J,Q,Z),this.applyMatrix4(N8),this}lookAt(J){return kZ.lookAt(J),kZ.updateMatrix(),this.applyMatrix4(kZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(D6).negate(),this.translate(D6.x,D6.y,D6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.push(W.x,W.y,W.z||0)}this.setAttribute("position",new c9(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let K=0;K<Z;K++){let $=J[K];Q.setXYZ(K,$.x,$.y,$.z||0)}if(J.length>Q.count)b0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new E8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let $=Q[Z];if(K8.setFromBufferAttribute($),this.morphTargetsRelative)w9.addVectors(this.boundingBox.min,K8.min),this.boundingBox.expandByPoint(w9),w9.addVectors(this.boundingBox.max,K8.max),this.boundingBox.expandByPoint(w9);else this.boundingBox.expandByPoint(K8.min),this.boundingBox.expandByPoint(K8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))f0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new XJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let Z=this.boundingSphere.center;if(K8.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$];if(a6.setFromBufferAttribute(X),this.morphTargetsRelative)w9.addVectors(K8.min,a6.min),K8.expandByPoint(w9),w9.addVectors(K8.max,a6.max),K8.expandByPoint(w9);else K8.expandByPoint(a6.min),K8.expandByPoint(a6.max)}K8.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)w9.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(w9));if(Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$],Y=this.morphTargetsRelative;for(let H=0,G=X.count;H<G;H++){if(w9.fromBufferAttribute(X,H),Y)D6.fromBufferAttribute(J,H),w9.add(D6);K=Math.max(K,Z.distanceToSquared(w9))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))f0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){f0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:K,uv:$}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==Z.count)W=new F8(new Float32Array(4*Z.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<Z.count;_++)X[_]=new x,Y[_]=new x;let H=new x,G=new x,D=new x,U=new x0,N=new x0,F=new x0,O=new x,L=new x;function E(_,I,B){H.fromBufferAttribute(Z,_),G.fromBufferAttribute(Z,I),D.fromBufferAttribute(Z,B),U.fromBufferAttribute($,_),N.fromBufferAttribute($,I),F.fromBufferAttribute($,B),G.sub(H),D.sub(H),N.sub(U),F.sub(U);let p=1/(N.x*F.y-F.x*N.y);if(!isFinite(p))return;O.copy(G).multiplyScalar(F.y).addScaledVector(D,-N.y).multiplyScalar(p),L.copy(D).multiplyScalar(N.x).addScaledVector(G,-F.x).multiplyScalar(p),X[_].add(O),X[I].add(O),X[B].add(O),Y[_].add(L),Y[I].add(L),Y[B].add(L)}let q=this.groups;if(q.length===0)q=[{start:0,count:J.count}];for(let _=0,I=q.length;_<I;++_){let B=q[_],p=B.start,j=B.count;for(let b=p,m=p+j;b<m;b+=3)E(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let R=new x,k=new x,V=new x,A=new x;function P(_){V.fromBufferAttribute(K,_),A.copy(V);let I=X[_];R.copy(I),R.sub(V.multiplyScalar(V.dot(I))).normalize(),k.crossVectors(A,I);let p=k.dot(Y[_])<0?-1:1;W.setXYZW(_,R.x,R.y,R.z,p)}for(let _=0,I=q.length;_<I;++_){let B=q[_],p=B.start,j=B.count;for(let b=p,m=p+j;b<m;b+=3)P(J.getX(b+0)),P(J.getX(b+1)),P(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0||Z.count!==Q.count)Z=new F8(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let U=0,N=Z.count;U<N;U++)Z.setXYZ(U,0,0,0);let K=new x,$=new x,W=new x,X=new x,Y=new x,H=new x,G=new x,D=new x;if(J)for(let U=0,N=J.count;U<N;U+=3){let F=J.getX(U+0),O=J.getX(U+1),L=J.getX(U+2);K.fromBufferAttribute(Q,F),$.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,L),G.subVectors(W,$),D.subVectors(K,$),G.cross(D),X.fromBufferAttribute(Z,F),Y.fromBufferAttribute(Z,O),H.fromBufferAttribute(Z,L),X.add(G),Y.add(G),H.add(G),Z.setXYZ(F,X.x,X.y,X.z),Z.setXYZ(O,Y.x,Y.y,Y.z),Z.setXYZ(L,H.x,H.y,H.z)}else for(let U=0,N=Q.count;U<N;U+=3)K.fromBufferAttribute(Q,U+0),$.fromBufferAttribute(Q,U+1),W.fromBufferAttribute(Q,U+2),G.subVectors(W,$),D.subVectors(K,$),G.cross(D),Z.setXYZ(U+0,G.x,G.y,G.z),Z.setXYZ(U+1,G.x,G.y,G.z),Z.setXYZ(U+2,G.x,G.y,G.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)w9.fromBufferAttribute(J,Q),w9.normalize(),J.setXYZ(Q,w9.x,w9.y,w9.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:G,normalized:D}=X,U=new H.constructor(Y.length*G),N=0,F=0;for(let O=0,L=Y.length;O<L;O++){if(X.isInterleavedBufferAttribute)N=Y[O]*X.data.stride+X.offset;else N=Y[O]*G;for(let E=0;E<G;E++)U[F++]=H[N++]}return new F8(U,G,D)}if(this.index===null)return b0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new O8,Z=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,Z);Q.setAttribute(X,H)}let $=this.morphAttributes;for(let X in $){let Y=[],H=$[X];for(let G=0,D=H.length;G<D;G++){let U=H[G],N=J(U,Z);Y.push(N)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let H=Z[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},$=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],G=[];for(let D=0,U=H.length;D<U;D++){let N=H[D];G.push(N.toJSON(J.data))}if(G.length>0)K[Y]=G,$=!0}if($)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let K=J.attributes;for(let H in K){let G=K[H];this.setAttribute(H,G.clone(Q))}let $=J.morphAttributes;for(let H in $){let G=[],D=$[H];for(let U=0,N=D.length;U<N;U++)G.push(D[U].clone(Q));this.morphAttributes[H]=G}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,G=W.length;H<G;H++){let D=W[H];this.addGroup(D.start,D.count,D.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fK{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=KJ()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let K=0,$=this.stride;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=KJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=KJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var d9=new x;class p9{constructor(J,Q,Z,K=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=K}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)d9.fromBufferAttribute(this,Q),d9.applyMatrix4(J),this.setXYZ(Q,d9.x,d9.y,d9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)d9.fromBufferAttribute(this,Q),d9.applyNormalMatrix(J),this.setXYZ(Q,d9.x,d9.y,d9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)d9.fromBufferAttribute(this,Q),d9.transformDirection(J),this.setXYZ(Q,d9.x,d9.y,d9.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=B8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=W9(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=B8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=B8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=B8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=B8(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array),$=W9($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this.data.array[J+3]=$,this}clone(J){if(J===void 0){J7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return new F8(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new p9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){J7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var _Z=new x,tH=new x,eH=new g0;class D8{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,K){return this.normal.set(J,Q,Z),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let K=_Z.subVectors(Z,Q).cross(tH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,Z=!0){let K=J.delta(_Z),$=this.normal.dot(K);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(Z===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(K,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||eH.getNormalMatrix(J),K=this.coplanarPoint(_Z).applyMatrix4(J),$=this.normal.applyMatrix3(Z).normalize();return this.constant=-K.dot($),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var JU=0;class P6 extends p8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:JU++}),this.uuid=KJ(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new e0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){b0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){b0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set(Z);else if(K&&K.isVector2&&(Z&&Z.isVector2)||K&&K.isEuler&&(Z&&Z.isEuler)||K&&K.isVector3&&(Z&&Z.isVector3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,Z.blending=this.blending,Z.side=this.side,Z.shadowSide=this.shadowSide,Z.vertexColors=this.vertexColors,Z.opacity=this.opacity,Z.transparent=this.transparent,Z.blendSrc=this.blendSrc,Z.blendDst=this.blendDst,Z.blendEquation=this.blendEquation,Z.blendSrcAlpha=this.blendSrcAlpha,Z.blendDstAlpha=this.blendDstAlpha,Z.blendEquationAlpha=this.blendEquationAlpha,Z.blendColor=this.blendColor.getHex(),Z.blendAlpha=this.blendAlpha,Z.depthFunc=this.depthFunc,Z.depthTest=this.depthTest,Z.depthWrite=this.depthWrite,Z.colorWrite=this.colorWrite,Z.clipIntersection=this.clipIntersection,Z.clipShadows=this.clipShadows,Z.stencilWriteMask=this.stencilWriteMask,Z.stencilFunc=this.stencilFunc,Z.stencilRef=this.stencilRef,Z.stencilFuncMask=this.stencilFuncMask,Z.stencilFail=this.stencilFail,Z.stencilZFail=this.stencilZFail,Z.stencilZPass=this.stencilZPass,Z.stencilWrite=this.stencilWrite,Z.polygonOffset=this.polygonOffset,Z.polygonOffsetFactor=this.polygonOffsetFactor,Z.polygonOffsetUnits=this.polygonOffsetUnits,Z.dithering=this.dithering,Z.alphaTest=this.alphaTest,Z.alphaHash=this.alphaHash,Z.alphaToCoverage=this.alphaToCoverage,Z.premultipliedAlpha=this.premultipliedAlpha,Z.forceSinglePass=this.forceSinglePass,Z.allowOverride=this.allowOverride,Z.visible=this.visible,Z.toneMapped=this.toneMapped,Z.name=this.name,this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Z.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Z.clippingPlanes=this.clippingPlanes.map(($)=>$.toJSON());if(this.rotation!==void 0)Z.rotation=this.rotation;if(this.depthPacking!==void 0)Z.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Z.linewidth=this.linewidth;if(this.linecap!==void 0)Z.linecap=this.linecap;if(this.linejoin!==void 0)Z.linejoin=this.linejoin;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.wireframe!==void 0)Z.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Z.flatShading=this.flatShading;if(this.fog!==void 0)Z.fog=this.fog;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function K($){let W=[];for(let X in $){let Y=$[X];delete Y.metadata,W.push(Y)}return W}if(Q){let $=K(J.textures),W=K(J.images);if($.length>0)Z.textures=$;if(W.length>0)Z.images=W}return Z}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new e0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Z)=>new D8().fromJSON(Z));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Z=J.normalScale;if(Array.isArray(Z)===!1)Z=[Z,Z];this.normalScale=new x0().fromArray(Z)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new x0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let K=Q.length;Z=new Array(K);for(let $=0;$!==K;++$)Z[$]=Q[$].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var ZJ=new x,TZ=new x,x7=new x,g7=new x;class G7{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,ZJ)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=ZJ.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return ZJ.copy(this.origin).addScaledVector(this.direction,Q),ZJ.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,K){TZ.copy(J).add(Q).multiplyScalar(0.5),x7.copy(Q).sub(J).normalize(),g7.copy(this.origin).sub(TZ);let $=J.distanceTo(Q)*0.5,W=-this.direction.dot(x7),X=g7.dot(this.direction),Y=-g7.dot(x7),H=g7.lengthSq(),G=Math.abs(1-W*W),D,U,N,F;if(G>0)if(D=W*Y-X,U=W*X-Y,F=$*G,D>=0)if(U>=-F)if(U<=F){let O=1/G;D*=O,U*=O,N=D*(D+W*U+2*X)+U*(W*D+U+2*Y)+H}else U=$,D=Math.max(0,-(W*U+X)),N=-D*D+U*(U+2*Y)+H;else U=-$,D=Math.max(0,-(W*U+X)),N=-D*D+U*(U+2*Y)+H;else if(U<=-F)D=Math.max(0,-(-W*$+X)),U=D>0?-$:Math.min(Math.max(-$,-Y),$),N=-D*D+U*(U+2*Y)+H;else if(U<=F)D=0,U=Math.min(Math.max(-$,-Y),$),N=U*(U+2*Y)+H;else D=Math.max(0,-(W*$+X)),U=D>0?$:Math.min(Math.max(-$,-Y),$),N=-D*D+U*(U+2*Y)+H;else U=W>0?-$:$,D=Math.max(0,-(W*U+X)),N=-D*D+U*(U+2*Y)+H;if(Z)Z.copy(this.origin).addScaledVector(this.direction,D);if(K)K.copy(TZ).addScaledVector(x7,U);return N}intersectSphere(J,Q){if(J.radius<0)return null;ZJ.subVectors(J.center,this.origin);let Z=ZJ.dot(this.direction),K=ZJ.dot(ZJ)-Z*Z,$=J.radius*J.radius;if(K>$)return null;let W=Math.sqrt($-K),X=Z-W,Y=Z+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,K,$,W,X,Y,H=1/this.direction.x,G=1/this.direction.y,D=1/this.direction.z,U=this.origin;if(H>=0)Z=(J.min.x-U.x)*H,K=(J.max.x-U.x)*H;else Z=(J.max.x-U.x)*H,K=(J.min.x-U.x)*H;if(G>=0)$=(J.min.y-U.y)*G,W=(J.max.y-U.y)*G;else $=(J.max.y-U.y)*G,W=(J.min.y-U.y)*G;if(Z>W||$>K)return null;if($>Z||isNaN(Z))Z=$;if(W<K||isNaN(K))K=W;if(D>=0)X=(J.min.z-U.z)*D,Y=(J.max.z-U.z)*D;else X=(J.max.z-U.z)*D,Y=(J.min.z-U.z)*D;if(Z>Y||X>K)return null;if(X>Z||Z!==Z)Z=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at(Z>=0?Z:K,Q)}intersectsBox(J){return this.intersectBox(J,ZJ)!==null}intersectTriangle(J,Q,Z,K,$){let W=this.origin,X=this.direction,Y=X.x,H=X.y,G=X.z,D=J.x-W.x,U=J.y-W.y,N=J.z-W.z,F=Q.x-W.x,O=Q.y-W.y,L=Q.z-W.z,E=Z.x-W.x,q=Z.y-W.y,R=Z.z-W.z,k=Math.abs(Y),V=Math.abs(H),A=Math.abs(G),P,_,I,B,p,j,b,m,T,w,n,d;if(k>=V&&k>=A)if(I=Y,j=D,T=F,d=E,Y>=0)P=H,_=G,B=U,p=N,b=O,m=L,w=q,n=R;else P=G,_=H,B=N,p=U,b=L,m=O,w=R,n=q;else if(V>=A)if(I=H,j=U,T=O,d=q,H>=0)P=G,_=Y,B=N,p=D,b=L,m=F,w=R,n=E;else P=Y,_=G,B=D,p=N,b=F,m=L,w=E,n=R;else if(I=G,j=N,T=L,d=R,G>=0)P=Y,_=H,B=D,p=U,b=F,m=O,w=E,n=q;else P=H,_=Y,B=U,p=D,b=O,m=F,w=q,n=E;if(I===0)return null;let $0=P/I,i=_/I,Z0=1/I,X0=B-$0*j,S0=p-i*j,w0=b-$0*T,n0=m-i*T,d0=w-$0*d,S=n-i*d,g=d0*n0-S*w0,u=X0*S-S0*d0,a=w0*S0-n0*X0;if(K){if(g<0||u<0||a<0)return null}else if((g<0||u<0||a<0)&&(g>0||u>0||a>0))return null;let Q0=g+u+a;if(Q0===0)return null;let r=Z0*(g*j+u*T+a*d);if(Q0>0?r<0:r>0)return null;return this.at(r/Q0,$)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class RQ extends P6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new e0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new y8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var kW=new M9,SJ=new G7,p7=new XJ,_W=new x,m7=new x,u7=new x,d7=new x,wZ=new x,l7=new x,TW=new x,c7=new x;class W8 extends i9{constructor(J=new O8,Q=new RQ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let $=0,W=K.length;$<W;$++){let X=K[$].name||String($);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=$}}}}getVertexPosition(J,Q){let Z=this.geometry,K=Z.attributes.position,$=Z.morphAttributes.position,W=Z.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if($&&X){l7.set(0,0,0);for(let Y=0,H=$.length;Y<H;Y++){let G=X[Y],D=$[Y];if(G===0)continue;if(wZ.fromBufferAttribute(D,J),W)l7.addScaledVector(wZ,G);else l7.addScaledVector(wZ.sub(Q),G)}Q.add(l7)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.material,$=this.matrixWorld;if(K===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(p7.copy(Z.boundingSphere),p7.applyMatrix4($),SJ.copy(J.ray).recast(J.near),p7.containsPoint(SJ.origin)===!1){if(SJ.intersectSphere(p7,_W)===null)return;if(SJ.origin.distanceToSquared(_W)>(J.far-J.near)**2)return}if(kW.copy($).invert(),SJ.copy(J.ray).applyMatrix4(kW),Z.boundingBox!==null){if(SJ.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,SJ)}_computeIntersections(J,Q,Z){let K,$=this.geometry,W=this.material,X=$.index,Y=$.attributes.position,H=$.attributes.uv,G=$.attributes.uv1,D=$.attributes.normal,U=$.groups,N=$.drawRange;if(X!==null)if(Array.isArray(W))for(let F=0,O=U.length;F<O;F++){let L=U[F],E=W[L.materialIndex],q=Math.max(L.start,N.start),R=Math.min(X.count,Math.min(L.start+L.count,N.start+N.count));for(let k=q,V=R;k<V;k+=3){let A=X.getX(k),P=X.getX(k+1),_=X.getX(k+2);if(K=n7(this,E,J,Z,H,G,D,A,P,_),K)K.faceIndex=Math.floor(k/3),K.face.materialIndex=L.materialIndex,Q.push(K)}}else{let F=Math.max(0,N.start),O=Math.min(X.count,N.start+N.count);for(let L=F,E=O;L<E;L+=3){let q=X.getX(L),R=X.getX(L+1),k=X.getX(L+2);if(K=n7(this,W,J,Z,H,G,D,q,R,k),K)K.faceIndex=Math.floor(L/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(W))for(let F=0,O=U.length;F<O;F++){let L=U[F],E=W[L.materialIndex],q=Math.max(L.start,N.start),R=Math.min(Y.count,Math.min(L.start+L.count,N.start+N.count));for(let k=q,V=R;k<V;k+=3){let A=k,P=k+1,_=k+2;if(K=n7(this,E,J,Z,H,G,D,A,P,_),K)K.faceIndex=Math.floor(k/3),K.face.materialIndex=L.materialIndex,Q.push(K)}}else{let F=Math.max(0,N.start),O=Math.min(Y.count,N.start+N.count);for(let L=F,E=O;L<E;L+=3){let q=L,R=L+1,k=L+2;if(K=n7(this,W,J,Z,H,G,D,q,R,k),K)K.faceIndex=Math.floor(L/3),Q.push(K)}}}}function QU(J,Q,Z,K,$,W,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,W,$,!0,Y);else H=K.intersectTriangle($,W,X,Q.side===0,Y);if(H===null)return null;c7.copy(Y),c7.applyMatrix4(J.matrixWorld);let G=Z.ray.origin.distanceTo(c7);if(G<Z.near||G>Z.far)return null;return{distance:G,point:c7.clone(),object:J}}function n7(J,Q,Z,K,$,W,X,Y,H,G){J.getVertexPosition(Y,m7),J.getVertexPosition(H,u7),J.getVertexPosition(G,d7);let D=QU(J,Q,Z,K,m7,u7,d7,TW);if(D){let U=new x;if(q8.getBarycoord(TW,m7,u7,d7,U),$)D.uv=q8.getInterpolatedAttribute($,Y,H,G,U,new x0);if(W)D.uv1=q8.getInterpolatedAttribute(W,Y,H,G,U,new x0);if(X){if(D.normal=q8.getInterpolatedAttribute(X,Y,H,G,U,new x),D.normal.dot(K.direction)>0)D.normal.multiplyScalar(-1)}let N={a:Y,b:H,c:G,normal:new x,materialIndex:0};q8.getNormal(m7,u7,d7,N.normal),D.face=N,D.barycoord=U}return D}class hK extends g9{constructor(J=null,Q=1,Z=1,K,$,W,X,Y,H=1003,G=1003,D,U){super(null,W,X,Y,H,G,K,$,D,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var jJ=new XJ,ZU=new x0(0.5,0.5),s7=new x;class MQ{constructor(J=new D8,Q=new D8,Z=new D8,K=new D8,$=new D8,W=new D8){this.planes=[J,Q,Z,K,$,W]}set(J,Q,Z,K,$,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy(Z),X[3].copy(K),X[4].copy($),X[5].copy(W),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let K=this.planes,$=J.elements,W=$[0],X=$[1],Y=$[2],H=$[3],G=$[4],D=$[5],U=$[6],N=$[7],F=$[8],O=$[9],L=$[10],E=$[11],q=$[12],R=$[13],k=$[14],V=$[15];if(K[0].setComponents(H-W,N-G,E-F,V-q).normalize(),K[1].setComponents(H+W,N+G,E+F,V+q).normalize(),K[2].setComponents(H+X,N+D,E+O,V+R).normalize(),K[3].setComponents(H-X,N-D,E-O,V-R).normalize(),Z)K[4].setComponents(Y,U,L,k).normalize(),K[5].setComponents(H-Y,N-U,E-L,V-k).normalize();else if(K[4].setComponents(H-Y,N-U,E-L,V-k).normalize(),Q===2000)K[5].setComponents(H+Y,N+U,E+L,V+k).normalize();else if(Q===2001)K[5].setComponents(Y,U,L,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();jJ.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();jJ.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(jJ)}intersectsSprite(J){jJ.center.set(0,0,0);let Q=ZU.distanceTo(J.center);return jJ.radius=0.7071067811865476+Q,jJ.applyMatrix4(J.matrixWorld),this.intersectsSphere(jJ)}intersectsSphere(J){let Q=this.planes,Z=J.center,K=-J.radius;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(Z)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let K=Q[Z];if(s7.x=K.normal.x>0?J.max.x:J.min.x,s7.y=K.normal.y>0?J.max.y:J.min.y,s7.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(s7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class LQ extends g9{constructor(J=[],Q=301,Z,K,$,W,X,Y,H,G){super(J,Q,Z,K,$,W,X,Y,H,G);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class pJ extends g9{constructor(J,Q,Z=1014,K,$,W,X=1003,Y=1003,H,G=1026,D=1){if(G!==1026&&G!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let U={width:J,height:Q,depth:D};super(U,K,$,W,X,Y,G,Z,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new Y7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class xK extends pJ{constructor(J,Q=1014,Z=301,K,$,W=1003,X=1003,Y,H=1026){let G={width:J,height:J,depth:1},D=[G,G,G,G,G,G];super(J,J,Q,Z,K,$,W,X,Y,H);this.image=D,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class IQ extends g9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class k6 extends O8{constructor(J=1,Q=1,Z=1,K=1,$=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:K,heightSegments:$,depthSegments:W};let X=this;K=Math.floor(K),$=Math.floor($),W=Math.floor(W);let Y=[],H=[],G=[],D=[],U=0,N=0;F("z","y","x",-1,-1,Z,Q,J,W,$,0),F("z","y","x",1,-1,Z,Q,-J,W,$,1),F("x","z","y",1,1,J,Z,Q,K,W,2),F("x","z","y",1,-1,J,Z,-Q,K,W,3),F("x","y","z",1,-1,J,Q,Z,K,$,4),F("x","y","z",-1,-1,J,Q,-Z,K,$,5),this.setIndex(Y),this.setAttribute("position",new c9(H,3)),this.setAttribute("normal",new c9(G,3)),this.setAttribute("uv",new c9(D,2));function F(O,L,E,q,R,k,V,A,P,_,I){let B=k/P,p=V/_,j=k/2,b=V/2,m=A/2,T=P+1,w=_+1,n=0,d=0,$0=new x;for(let i=0;i<w;i++){let Z0=i*p-b;for(let X0=0;X0<T;X0++){let S0=X0*B-j;$0[O]=S0*q,$0[L]=Z0*R,$0[E]=m,H.push($0.x,$0.y,$0.z),$0[O]=0,$0[L]=0,$0[E]=A>0?1:-1,G.push($0.x,$0.y,$0.z),D.push(X0/P),D.push(1-i/_),n+=1}}for(let i=0;i<_;i++)for(let Z0=0;Z0<P;Z0++){let X0=U+Z0+T*i,S0=U+Z0+T*(i+1),w0=U+(Z0+1)+T*(i+1),n0=U+(Z0+1)+T*i;Y.push(X0,S0,n0),Y.push(S0,w0,n0),d+=6}X.addGroup(N,d,I),N+=d,U+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new k6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class N7 extends O8{constructor(J=1,Q=1,Z=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:K};let $=J/2,W=Q/2,X=Math.floor(Z),Y=Math.floor(K),H=X+1,G=Y+1,D=J/X,U=Q/Y,N=[],F=[],O=[],L=[];for(let E=0;E<G;E++){let q=E*U-W;for(let R=0;R<H;R++){let k=R*D-$;F.push(k,-q,0),O.push(0,0,1),L.push(R/X),L.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let q=0;q<X;q++){let R=q+H*E,k=q+H*(E+1),V=q+1+H*(E+1),A=q+1+H*E;N.push(R,k,A),N.push(k,V,A)}this.setIndex(N),this.setAttribute("position",new c9(F,3)),this.setAttribute("normal",new c9(O,3)),this.setAttribute("uv",new c9(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new N7(J.width,J.height,J.widthSegments,J.heightSegments)}}class VQ extends O8{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],Z=new Set,K=new x,$=new x;if(J.index!==null){let W=J.attributes.position,X=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:X.count,materialIndex:0}];for(let H=0,G=Y.length;H<G;++H){let D=Y[H],U=D.start,N=D.count;for(let F=U,O=U+N;F<O;F+=3)for(let L=0;L<3;L++){let E=X.getX(F+L),q=X.getX(F+(L+1)%3);if(K.fromBufferAttribute(W,E),$.fromBufferAttribute(W,q),wW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}}else{let W=J.attributes.position;for(let X=0,Y=W.count/3;X<Y;X++)for(let H=0;H<3;H++){let G=3*X+H,D=3*X+(H+1)%3;if(K.fromBufferAttribute(W,G),$.fromBufferAttribute(W,D),wW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}this.setAttribute("position",new c9(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function wW(J,Q,Z){let K=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,$=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if(Z.has(K)===!0||Z.has($)===!0)return!1;else return Z.add(K),Z.add($),!0}function mJ(J){let Q={};for(let Z in J){Q[Z]={};for(let K in J[Z]){let $=J[Z][K];if(SW($))if($.isRenderTargetTexture)b0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][K]=null;else Q[Z][K]=$.clone();else if(Array.isArray($))if(SW($[0])){let W=[];for(let X=0,Y=$.length;X<Y;X++)W[X]=$[X].clone();Q[Z][K]=W}else Q[Z][K]=$.slice();else Q[Z][K]=$}}return Q}function m9(J){let Q={};for(let Z=0;Z<J.length;Z++){let K=mJ(J[Z]);for(let $ in K)Q[$]=K[$]}return Q}function SW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function KU(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function gK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return o0.workingColorSpace}var D7={clone:mJ,merge:m9},$U=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class t9 extends P6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$U,this.fragmentShader=WU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=mJ(J.uniforms),this.uniformsGroups=KU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let W=this.uniforms[K].value;if(W&&W.isTexture)Q.uniforms[K]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[K]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[K]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[K]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[K]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[K]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[K]={type:"m4",value:W.toArray()};else Q.uniforms[K]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let K in this.extensions)if(this.extensions[K]===!0)Z[K]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let Z in J.uniforms){let K=J.uniforms[Z];switch(this.uniforms[Z]={},K.type){case"t":this.uniforms[Z].value=Q[K.value]||null;break;case"c":this.uniforms[Z].value=new e0().setHex(K.value);break;case"v2":this.uniforms[Z].value=new x0().fromArray(K.value);break;case"v3":this.uniforms[Z].value=new x().fromArray(K.value);break;case"v4":this.uniforms[Z].value=new Y9().fromArray(K.value);break;case"m3":this.uniforms[Z].value=new g0().fromArray(K.value);break;case"m4":this.uniforms[Z].value=new M9().fromArray(K.value);break;default:this.uniforms[Z].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Z in J.extensions)this.extensions[Z]=J.extensions[Z];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class pK extends t9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mK extends P6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class uK extends P6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function q6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function SZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class uJ{constructor(J,Q,Z,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,K=Q[Z],$=Q[Z-1];Z:{J:{let W;Q:{K:if(!(J<K)){for(let X=Z+2;;){if(K===void 0){if(J<$)break K;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===X)break;if($=K,K=Q[++Z],J<K)break J}W=Q.length;break Q}if(!(J>=$)){let X=Q[1];if(J<X)Z=2,$=X;for(let Y=Z-2;;){if($===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if(K=$,$=Q[--Z-1],J>=$)break J}W=Z,Z=0;break Q}break Z}while(Z<W){let X=Z+W>>>1;if(J<Q[X])W=X;else Z=X+1}if(K=Q[Z],$=Q[Z-1],$===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,$,K)}return this.interpolate_(Z,$,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,K=this.valueSize,$=J*K;for(let W=0;W!==K;++W)Q[W]=Z[$+W];return Q}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class dK extends uJ{constructor(J,Q,Z,K){super(J,Q,Z,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let K=this.parameterPositions,$=J-2,W=J+1,X=K[$],Y=K[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:$=J,X=2*Q-Z;break;case 2402:$=K.length-2,X=Q+K[$]-K[$+1];break;default:$=J,X=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*Z-Q;break;case 2402:W=1,Y=Z+K[1]-K[0];break;default:W=J-1,Y=Q}let H=(Z-Q)*0.5,G=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-Z),this._offsetPrev=$*G,this._offsetNext=W*G}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,G=this._offsetPrev,D=this._offsetNext,U=this._weightPrev,N=this._weightNext,F=(Z-Q)/(K-Q),O=F*F,L=O*F,E=-U*L+2*U*O-U*F,q=(1+U)*L+(-1.5-2*U)*O+(-0.5+U)*F+1,R=(-1-N)*L+(1.5+N)*O+0.5*F,k=N*L-N*O;for(let V=0;V!==X;++V)$[V]=E*W[G+V]+q*W[H+V]+R*W[Y+V]+k*W[D+V];return $}}class lK extends uJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,G=(Z-Q)/(K-Q),D=1-G;for(let U=0;U!==X;++U)$[U]=W[H+U]*D+W[Y+U]*G;return $}}class cK extends uJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class nK extends uJ{interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,G=this.inTangents,D=this.outTangents;if(!G||!D){let F=(Z-Q)/(K-Q),O=1-F;for(let L=0;L!==X;++L)$[L]=W[H+L]*O+W[Y+L]*F;return $}let U=X*2,N=J-1;for(let F=0;F!==X;++F){let O=W[H+F],L=W[Y+F],E=N*U+F*2,q=D[E],R=D[E+1],k=J*U+F*2,V=G[k],A=G[k+1],P=YU(Z,Q,q,V,K);$[F]=hX(P,O,R,A,L)}return $}}function hX(J,Q,Z,K,$){let W=1-J;return W*W*W*Q+3*W*W*J*Z+3*W*J*J*K+J*J*J*$}function XU(J,Q,Z,K,$){let W=1-J;return 3*W*W*(Z-Q)+6*W*J*(K-Z)+3*J*J*($-K)}function YU(J,Q,Z,K,$){let W=(J-Q)/($-Q);for(let X=0;X<8;X++){let Y=hX(W,Q,Z,K,$)-J;if(Math.abs(Y)<0.0000000001)break;let H=XU(W,Q,Z,K,$);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class R8{constructor(J,Q,Z,K){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=q6(Q,this.TimeBufferType),this.values=q6(Z,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:q6(J.times,Array),values:q6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)Z.interpolation=K;if(SZ(J.settings))Z.settings={inTangents:q6(J.settings.inTangents,Array),outTangents:q6(J.settings.outTangents,Array)}}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new cK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new lK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new dK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new nK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return b0("KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]*=J;if(SZ(this.settings))jW(this.settings.inTangents,J),jW(this.settings.outTangents,J)}return this}trim(J,Q){let Z=this.times,K=Z.length,$=0,W=K-1;while($!==K&&Z[$]<J)++$;while(W!==-1&&Z[W]>Q)--W;if(++W,$!==0||W!==K){if($>=W)W=Math.max(W,1),$=W-1;let X=this.getValueSize();this.times=Z.slice($,W),this.values=this.values.slice($*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)f0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,K=this.values,$=Z.length;if($===0)f0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==$;X++){let Y=Z[X];if(typeof Y==="number"&&isNaN(Y)){f0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){f0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(K!==void 0){if(CH(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){f0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),K=this.getInterpolation()===2302,$=J.length-1,W=1;for(let X=1;X<$;++X){let Y=!1,H=J[X],G=J[X+1];if(H!==G&&(X!==1||H!==J[0]))if(!K){let D=X*Z,U=D-Z,N=D+Z;for(let F=0;F!==Z;++F){let O=Q[D+F];if(O!==Q[U+F]||O!==Q[N+F]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let D=X*Z,U=W*Z;for(let N=0;N!==Z;++N)Q[U+N]=Q[D+N]}++W}}if($>0){J[W]=J[$];for(let X=$*Z,Y=W*Z,H=0;H!==Z;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);if(K.createInterpolant=this.createInterpolant,SZ(this.settings))K.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return K}}function jW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]*=Q}R8.prototype.ValueTypeName="";R8.prototype.TimeBufferType=Float32Array;R8.prototype.ValueBufferType=Float32Array;R8.prototype.DefaultInterpolation=2301;class dJ extends R8{constructor(J,Q,Z){super(J,Q,Z)}}dJ.prototype.ValueTypeName="bool";dJ.prototype.ValueBufferType=Array;dJ.prototype.DefaultInterpolation=2300;dJ.prototype.InterpolantFactoryMethodLinear=void 0;dJ.prototype.InterpolantFactoryMethodSmooth=void 0;class sK extends R8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}sK.prototype.ValueTypeName="color";class iK extends R8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}iK.prototype.ValueTypeName="number";class oK extends uJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=(Z-Q)/(K-Q),H=J*X;for(let G=H+X;H!==G;H+=4)r9.slerpFlat($,0,W,H-X,W,H,Y);return $}}class CQ extends R8{constructor(J,Q,Z,K){super(J,Q,Z,K)}InterpolantFactoryMethodLinear(J){return new oK(this.times,this.values,this.getValueSize(),J)}}CQ.prototype.ValueTypeName="quaternion";CQ.prototype.InterpolantFactoryMethodSmooth=void 0;class lJ extends R8{constructor(J,Q,Z){super(J,Q,Z)}}lJ.prototype.ValueTypeName="string";lJ.prototype.ValueBufferType=Array;lJ.prototype.DefaultInterpolation=2300;lJ.prototype.InterpolantFactoryMethodLinear=void 0;lJ.prototype.InterpolantFactoryMethodSmooth=void 0;class aK extends R8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}aK.prototype.ValueTypeName="vector";class rK{constructor(J,Q,Z){let K=this,$=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this._abortController=null,this.itemStart=function(G){if(X++,$===!1){if(K.onStart!==void 0)K.onStart(G,W,X)}$=!0},this.itemEnd=function(G){if(W++,K.onProgress!==void 0)K.onProgress(G,W,X);if(W===X){if($=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(G){if(K.onError!==void 0)K.onError(G)},this.resolveURL=function(G){if(G=G.normalize("NFC"),Y)return Y(G);return G},this.setURLModifier=function(G){return Y=G,this},this.addHandler=function(G,D){return H.push(G,D),this},this.removeHandler=function(G){let D=H.indexOf(G);if(D!==-1)H.splice(D,2);return this},this.getHandler=function(G){for(let D=0,U=H.length;D<U;D+=2){let N=H[D],F=H[D+1];if(N.global)N.lastIndex=0;if(N.test(G))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var xX=new rK;class tK{constructor(J){if(this.manager=J!==void 0?J:xX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let Z=this;return new Promise(function(K,$){Z.load(J,K,Q,$)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}tK.DEFAULT_MATERIAL_NAME="__DEFAULT";var i7=new x,o7=new r9,b8=new x;class BQ extends i9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new M9,this.projectionMatrix=new M9,this.projectionMatrixInverse=new M9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(i7,o7,b8),b8.x===1&&b8.y===1&&b8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(i7,o7,b8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,Z=!1){if(super.updateWorldMatrix(J,Q,Z),this.matrixWorld.decompose(i7,o7,b8),b8.x===1&&b8.y===1&&b8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(i7,o7,b8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var RJ=new x,vW=new x0,bW=new x0;class l9 extends BQ{constructor(J=50,Q=1,Z=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=I6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(r6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return I6*2*Math.atan(Math.tan(r6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){RJ.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(RJ.x,RJ.y).multiplyScalar(-J/RJ.z),RJ.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(RJ.x,RJ.y).multiplyScalar(-J/RJ.z)}getViewSize(J,Q){return this.getViewBounds(J,vW,bW),Q.subVectors(bW,vW)}setViewOffset(J,Q,Z,K,$,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(r6*0.5*this.fov)/this.zoom,Z=2*Q,K=this.aspect*Z,$=-0.5*K,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;$+=W.offsetX*K/Y,Q-=W.offsetY*Z/H,K*=W.width/Y,Z*=W.height/H}let X=this.filmOffset;if(X!==0)$+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective($,$+K,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class AQ extends BQ{constructor(J=-1,Q=1,Z=1,K=-1,$=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=K,this.near=$,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,K,$,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,K=(this.top+this.bottom)/2,$=Z-J,W=Z+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,G=(this.top-this.bottom)/this.view.fullHeight/this.zoom;$+=H*this.view.offsetX,W=$+H*this.view.width,X-=G*this.view.offsetY,Y=X-G*this.view.height}this.projectionMatrix.makeOrthographic($,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class zQ extends O8{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var F6=-90,E6=1;class eK extends i9{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new l9(F6,E6,J,Q);K.layers=this.layers,this.add(K);let $=new l9(F6,E6,J,Q);$.layers=this.layers,this.add($);let W=new l9(F6,E6,J,Q);W.layers=this.layers,this.add(W);let X=new l9(F6,E6,J,Q);X.layers=this.layers,this.add(X);let Y=new l9(F6,E6,J,Q);Y.layers=this.layers,this.add(Y);let H=new l9(F6,E6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,K,$,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),$.up.set(0,0,-1),$.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),$.up.set(0,0,1),$.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[$,W,X,Y,H,G]=this.children,D=J.getRenderTarget(),U=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let O=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1;let L=!1;if(J.isWebGLRenderer===!0)L=J.state.buffers.depth.getReversed();else L=J.reversedDepthBuffer;if(J.setRenderTarget(Z,0,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,$),J.setRenderTarget(Z,1,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget(Z,2,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget(Z,3,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget(Z,4,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),Z.texture.generateMipmaps=O,J.setRenderTarget(Z,5,K),L&&J.autoClear===!1)J.clearDepth();J.render(Q,G),J.setRenderTarget(D,U,N),J.xr.enabled=F,Z.texture.needsPMREMUpdate=!0}}class J$ extends l9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var Q$="\\[\\]\\.:\\/",HU=new RegExp("["+Q$+"]","g"),Z$="[^"+Q$+"]",UU="[^"+Q$.replace("\\.","")+"]",GU=/((?:WC+[\/:])*)/.source.replace("WC",Z$),NU=/(WCOD+)?/.source.replace("WCOD",UU),DU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Z$),qU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Z$),FU=new RegExp("^"+GU+NU+DU+qU+"$"),EU=["material","materials","bones","map"];class gX{constructor(J,Q,Z){let K=Z||X9.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,K=this._bindings[Z];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let K=this._targetGroup.nCachedObjects_,$=Z.length;K!==$;++K)Z[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class X9{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||X9.parseTrackName(Q),this.node=X9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new X9(J,Q,Z);else return new X9.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(HU,"")}static parseTrackName(J){let Q=FU.exec(J);if(Q===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let $=Z.nodeName.substring(K+1);if(EU.indexOf($)!==-1)Z.nodeName=Z.nodeName.substring(0,K),Z.objectName=$}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function($){for(let W=0;W<$.length;W++){let X=$[W];if(X.name===Q||X.uuid===Q)return X;let Y=Z(X.children);if(Y)return Y}return null},K=Z(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)J[Q++]=Z[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,K=Q.propertyName,$=Q.propertyIndex;if(!J)J=X9.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){b0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let H=Q.objectIndex;switch(Z){case"materials":if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){f0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){f0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let G=0;G<J.length;G++)if(J[G].name===H){H=G;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){f0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){f0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(H!==void 0){if(J[H]===void 0){f0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[K];if(W===void 0){let H=Q.nodeName;f0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if($!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[$]!==void 0)$=J.morphTargetDictionary[$]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=$}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}X9.Composite=gX;X9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};X9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};X9.prototype.GetterByBindingType=[X9.prototype._getValue_direct,X9.prototype._getValue_array,X9.prototype._getValue_arrayElement,X9.prototype._getValue_toArray];X9.prototype.SetterByBindingTypeAndVersioning=[[X9.prototype._setValue_direct,X9.prototype._setValue_direct_setNeedsUpdate,X9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_array,X9.prototype._setValue_array_setNeedsUpdate,X9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_arrayElement,X9.prototype._setValue_arrayElement_setNeedsUpdate,X9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_fromArray,X9.prototype._setValue_fromArray_setNeedsUpdate,X9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var HF=new Float32Array(1);class m8 extends fK{constructor(J,Q,Z=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class q7{constructor(J=1,Q=0,Z=0){this.radius=J,this.phi=Q,this.theta=Z}set(J,Q,Z){return this.radius=J,this.phi=Q,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=p0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){if(this.radius=Math.sqrt(J*J+Q*Q+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(p0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class K${static{K$.prototype.isMatrix2=!0}constructor(J,Q,Z,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,K){let $=this.elements;return $[0]=J,$[2]=Q,$[1]=Z,$[3]=K,this}}var yW=new x,a7=new x,O6=new x,R6=new x,jZ=new x,OU=new x,RU=new x;class PQ{constructor(J=new x,Q=new x){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){yW.subVectors(J,this.start),a7.subVectors(this.end,this.start);let Z=a7.dot(a7);if(Z===0)return 0;let $=a7.dot(yW)/Z;if(Q)$=p0($,0,1);return $}closestPointToPoint(J,Q,Z){let K=this.closestPointToPointParameter(J,Q);return this.delta(Z).multiplyScalar(K).add(this.start)}distanceSqToLine3(J,Q=OU,Z=RU){let $,W,X=this.start,Y=J.start,H=this.end,G=J.end;O6.subVectors(H,X),R6.subVectors(G,Y),jZ.subVectors(X,Y);let D=O6.dot(O6),U=R6.dot(R6),N=R6.dot(jZ);if(D<=0.00000000000000010000000000000001&&U<=0.00000000000000010000000000000001)return Q.copy(X),Z.copy(Y),Q.sub(Z),Q.dot(Q);if(D<=0.00000000000000010000000000000001)$=0,W=N/U,W=p0(W,0,1);else{let F=O6.dot(jZ);if(U<=0.00000000000000010000000000000001)W=0,$=p0(-F/D,0,1);else{let O=O6.dot(R6),L=D*U-O*O;if(L!==0)$=p0((O*N-F*U)/L,0,1);else $=0;if(W=(O*$+N)/U,W<0)W=0,$=p0(-F/D,0,1);else if(W>1)W=1,$=p0((O-F)/D,0,1)}}return Q.copy(X).addScaledVector(O6,$),Z.copy(Y).addScaledVector(R6,W),Q.distanceToSquared(Z)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class kQ extends p8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function $$(J,Q,Z,K){let $=MU(K);switch(Z){case 1021:return J*Q;case 1028:return J*Q/$.components*$.byteLength;case 1029:return J*Q/$.components*$.byteLength;case 1030:return J*Q*2/$.components*$.byteLength;case 1031:return J*Q*2/$.components*$.byteLength;case 1022:return J*Q*3/$.components*$.byteLength;case 1023:return J*Q*4/$.components*$.byteLength;case 1033:return J*Q*4/$.components*$.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function MU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window!=="undefined")if(window.__THREE__)b0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function YY(){let J=null,Q=!1,Z=null,K=null;function $(W,X){K=J.requestAnimationFrame($),Z(W,X)}return{start:function(){if(Q===!0)return;if(Z===null)return;if(J===null)return;K=J.requestAnimationFrame($),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(W){Z=W},setContext:function(W){J=W}}}function LU(J){let Q=new WeakMap;function Z(Y,H){let{array:G,usage:D}=Y,U=G.byteLength,N=J.createBuffer();J.bindBuffer(H,N),J.bufferData(H,G,D),Y.onUploadCallback();let F;if(G instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array!=="undefined"&&G instanceof Float16Array)F=J.HALF_FLOAT;else if(G instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(G instanceof Int16Array)F=J.SHORT;else if(G instanceof Uint32Array)F=J.UNSIGNED_INT;else if(G instanceof Int32Array)F=J.INT;else if(G instanceof Int8Array)F=J.BYTE;else if(G instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:N,type:F,bytesPerElement:G.BYTES_PER_ELEMENT,version:Y.version,size:U}}function K(Y,H,G){let{array:D,updateRanges:U}=H;if(J.bindBuffer(G,Y),U.length===0)J.bufferSubData(G,0,D);else{U.sort((F,O)=>F.start-O.start);let N=0;for(let F=1;F<U.length;F++){let O=U[N],L=U[F];if(L.start<=O.start+O.count+1)O.count=Math.max(O.count,L.start+L.count-O.start);else++N,U[N]=L}U.length=N+1;for(let F=0,O=U.length;F<O;F++){let L=U[F];J.bufferSubData(G,L.start*D.BYTES_PER_ELEMENT,D,L.start,L.count)}H.clearUpdateRanges()}H.onUploadCallback()}function $(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let D=Q.get(Y);if(!D||D.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let G=Q.get(Y);if(G===void 0)Q.set(Y,Z(Y,H));else if(G.version<Y.version){if(G.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(G.buffer,Y,H),G.version=Y.version}}return{get:$,remove:W,update:X}}var IU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VU=`#ifdef USE_ALPHAHASH
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
#endif`,CU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PU=`#ifdef USE_AOMAP
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
#endif`,kU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_U=`#ifdef USE_BATCHING
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
#endif`,TU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vU=`#ifdef USE_IRIDESCENCE
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
#endif`,bU=`#ifdef USE_BUMPMAP
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
#endif`,yU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dU=`#define PI 3.141592653589793
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
} // validated`,lU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cU=`vec3 transformedNormal = objectNormal;
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
#endif`,nU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aU="gl_FragColor = linearToOutputTexel( gl_FragColor );",rU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tU=`#ifdef USE_ENVMAP
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
#endif`,eU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JG=`#ifdef USE_ENVMAP
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
#endif`,QG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZG=`#ifdef USE_ENVMAP
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
#endif`,KG=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$G=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WG=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YG=`#ifdef USE_GRADIENTMAP
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
}`,HG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NG=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,DG=`#ifdef USE_ENVMAP
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
#endif`,qG=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RG=`PhysicalMaterial material;
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
#endif`,MG=`uniform sampler2D dfgLUT;
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
}`,LG=`
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
#endif`,IG=`#if defined( RE_IndirectDiffuse )
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
#endif`,VG=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CG=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,BG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_G=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wG=`#if defined( USE_POINTS_UV )
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
#endif`,SG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vG=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bG=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fG=`#ifdef USE_MORPHTARGETS
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
#endif`,hG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gG=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dG=`#ifdef USE_NORMALMAP
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
#endif`,lG=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cG=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nG=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sG=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iG=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oG=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eG=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W5=`float getShadowMask() {
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
}`,X5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y5=`#ifdef USE_SKINNING
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
#endif`,H5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U5=`#ifdef USE_SKINNING
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
#endif`,G5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F5=`#ifdef USE_TRANSMISSION
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
#endif`,E5=`#ifdef USE_TRANSMISSION
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
#endif`,O5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V5=`uniform sampler2D t2D;
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
}`,C5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P5=`#include <common>
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
}`,k5=`#if DEPTH_PACKING == 3200
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
}`,_5=`#define DISTANCE
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
}`,T5=`#define DISTANCE
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
}`,w5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j5=`uniform float scale;
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
}`,v5=`uniform vec3 diffuse;
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
}`,b5=`#include <common>
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
}`,y5=`uniform vec3 diffuse;
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
}`,f5=`#define LAMBERT
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
}`,h5=`#define LAMBERT
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
}`,x5=`#define MATCAP
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
}`,g5=`#define MATCAP
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
}`,p5=`#define NORMAL
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
}`,m5=`#define NORMAL
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
}`,u5=`#define PHONG
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
}`,d5=`#define PHONG
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
}`,l5=`#define STANDARD
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
}`,c5=`#define STANDARD
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
}`,n5=`#define TOON
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
}`,s5=`#define TOON
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
}`,i5=`uniform float size;
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
}`,o5=`uniform vec3 diffuse;
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
}`,a5=`#include <common>
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
}`,r5=`uniform vec3 color;
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
}`,t5=`uniform float rotation;
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
}`,e5=`uniform vec3 diffuse;
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
}`,c0={alphahash_fragment:IU,alphahash_pars_fragment:VU,alphamap_fragment:CU,alphamap_pars_fragment:BU,alphatest_fragment:AU,alphatest_pars_fragment:zU,aomap_fragment:PU,aomap_pars_fragment:kU,batching_pars_vertex:_U,batching_vertex:TU,begin_vertex:wU,beginnormal_vertex:SU,bsdfs:jU,iridescence_fragment:vU,bumpmap_pars_fragment:bU,clipping_planes_fragment:yU,clipping_planes_pars_fragment:fU,clipping_planes_pars_vertex:hU,clipping_planes_vertex:xU,color_fragment:gU,color_pars_fragment:pU,color_pars_vertex:mU,color_vertex:uU,common:dU,cube_uv_reflection_fragment:lU,defaultnormal_vertex:cU,displacementmap_pars_vertex:nU,displacementmap_vertex:sU,emissivemap_fragment:iU,emissivemap_pars_fragment:oU,colorspace_fragment:aU,colorspace_pars_fragment:rU,envmap_fragment:tU,envmap_common_pars_fragment:eU,envmap_pars_fragment:JG,envmap_pars_vertex:QG,envmap_physical_pars_fragment:DG,envmap_vertex:ZG,fog_vertex:KG,fog_pars_vertex:$G,fog_fragment:WG,fog_pars_fragment:XG,gradientmap_pars_fragment:YG,lightmap_pars_fragment:HG,lights_lambert_fragment:UG,lights_lambert_pars_fragment:GG,lights_pars_begin:NG,lights_toon_fragment:qG,lights_toon_pars_fragment:FG,lights_phong_fragment:EG,lights_phong_pars_fragment:OG,lights_physical_fragment:RG,lights_physical_pars_fragment:MG,lights_fragment_begin:LG,lights_fragment_maps:IG,lights_fragment_end:VG,lightprobes_pars_fragment:CG,logdepthbuf_fragment:BG,logdepthbuf_pars_fragment:AG,logdepthbuf_pars_vertex:zG,logdepthbuf_vertex:PG,map_fragment:kG,map_pars_fragment:_G,map_particle_fragment:TG,map_particle_pars_fragment:wG,metalnessmap_fragment:SG,metalnessmap_pars_fragment:jG,morphinstance_vertex:vG,morphcolor_vertex:bG,morphnormal_vertex:yG,morphtarget_pars_vertex:fG,morphtarget_vertex:hG,normal_fragment_begin:xG,normal_fragment_maps:gG,normal_pars_fragment:pG,normal_pars_vertex:mG,normal_vertex:uG,normalmap_pars_fragment:dG,clearcoat_normal_fragment_begin:lG,clearcoat_normal_fragment_maps:cG,clearcoat_pars_fragment:nG,iridescence_pars_fragment:sG,opaque_fragment:iG,packing:oG,premultiplied_alpha_fragment:aG,project_vertex:rG,dithering_fragment:tG,dithering_pars_fragment:eG,roughnessmap_fragment:J5,roughnessmap_pars_fragment:Q5,shadowmap_pars_fragment:Z5,shadowmap_pars_vertex:K5,shadowmap_vertex:$5,shadowmask_pars_fragment:W5,skinbase_vertex:X5,skinning_pars_vertex:Y5,skinning_vertex:H5,skinnormal_vertex:U5,specularmap_fragment:G5,specularmap_pars_fragment:N5,tonemapping_fragment:D5,tonemapping_pars_fragment:q5,transmission_fragment:F5,transmission_pars_fragment:E5,uv_pars_fragment:O5,uv_pars_vertex:R5,uv_vertex:M5,worldpos_vertex:L5,background_vert:I5,background_frag:V5,backgroundCube_vert:C5,backgroundCube_frag:B5,cube_vert:A5,cube_frag:z5,depth_vert:P5,depth_frag:k5,distance_vert:_5,distance_frag:T5,equirect_vert:w5,equirect_frag:S5,linedashed_vert:j5,linedashed_frag:v5,meshbasic_vert:b5,meshbasic_frag:y5,meshlambert_vert:f5,meshlambert_frag:h5,meshmatcap_vert:x5,meshmatcap_frag:g5,meshnormal_vert:p5,meshnormal_frag:m5,meshphong_vert:u5,meshphong_frag:d5,meshphysical_vert:l5,meshphysical_frag:c5,meshtoon_vert:n5,meshtoon_frag:s5,points_vert:i5,points_frag:o5,shadow_vert:a5,shadow_frag:r5,sprite_vert:t5,sprite_frag:e5},D0={common:{diffuse:{value:new e0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new g0}},envmap:{envMap:{value:null},envMapRotation:{value:new g0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new g0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new g0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new g0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new g0},normalScale:{value:new x0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new g0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new g0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new g0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new g0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new e0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new e0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0},uvTransform:{value:new g0}},sprite:{diffuse:{value:new e0(16777215)},opacity:{value:1},center:{value:new x0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}}},n9={basic:{uniforms:m9([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.fog]),vertexShader:c0.meshbasic_vert,fragmentShader:c0.meshbasic_frag},lambert:{uniforms:m9([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new e0(0)},envMapIntensity:{value:1}}]),vertexShader:c0.meshlambert_vert,fragmentShader:c0.meshlambert_frag},phong:{uniforms:m9([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new e0(0)},specular:{value:new e0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:c0.meshphong_vert,fragmentShader:c0.meshphong_frag},standard:{uniforms:m9([D0.common,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.roughnessmap,D0.metalnessmap,D0.fog,D0.lights,{emissive:{value:new e0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag},toon:{uniforms:m9([D0.common,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.gradientmap,D0.fog,D0.lights,{emissive:{value:new e0(0)}}]),vertexShader:c0.meshtoon_vert,fragmentShader:c0.meshtoon_frag},matcap:{uniforms:m9([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,{matcap:{value:null}}]),vertexShader:c0.meshmatcap_vert,fragmentShader:c0.meshmatcap_frag},points:{uniforms:m9([D0.points,D0.fog]),vertexShader:c0.points_vert,fragmentShader:c0.points_frag},dashed:{uniforms:m9([D0.common,D0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:c0.linedashed_vert,fragmentShader:c0.linedashed_frag},depth:{uniforms:m9([D0.common,D0.displacementmap]),vertexShader:c0.depth_vert,fragmentShader:c0.depth_frag},normal:{uniforms:m9([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,{opacity:{value:1}}]),vertexShader:c0.meshnormal_vert,fragmentShader:c0.meshnormal_frag},sprite:{uniforms:m9([D0.sprite,D0.fog]),vertexShader:c0.sprite_vert,fragmentShader:c0.sprite_frag},background:{uniforms:{uvTransform:{value:new g0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:c0.background_vert,fragmentShader:c0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new g0}},vertexShader:c0.backgroundCube_vert,fragmentShader:c0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:c0.cube_vert,fragmentShader:c0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:c0.equirect_vert,fragmentShader:c0.equirect_frag},distance:{uniforms:m9([D0.common,D0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:c0.distance_vert,fragmentShader:c0.distance_frag},shadow:{uniforms:m9([D0.lights,D0.fog,{color:{value:new e0(0)},opacity:{value:1}}]),vertexShader:c0.shadow_vert,fragmentShader:c0.shadow_frag}};n9.physical={uniforms:m9([n9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new g0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new g0},clearcoatNormalScale:{value:new x0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new g0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new g0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new g0},sheen:{value:0},sheenColor:{value:new e0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new g0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new g0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new g0},transmissionSamplerSize:{value:new x0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new g0},attenuationDistance:{value:0},attenuationColor:{value:new e0(0)},specularColor:{value:new e0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new g0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new g0},anisotropyVector:{value:new x0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new g0}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag};var _Q={r:0,b:0,g:0},JN=new M9,HY=new g0;HY.set(-1,0,0,0,1,0,0,0,1);function QN(J,Q,Z,K,$,W){let X=new e0(0),Y=$===!0?0:1,H,G,D=null,U=0,N=null;function F(R){let k=R.isScene===!0?R.background:null;if(k&&k.isTexture){let V=R.backgroundBlurriness>0;k=Q.get(k,V)}return k}function O(R){let k=!1,V=F(R);if(V===null)E(X,Y);else if(V&&V.isColor)E(V,1),k=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")Z.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||k)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function L(R,k){let V=F(k);if(V&&(V.isCubeTexture||V.mapping===K7)){if(G===void 0)G=new W8(new k6(1,1,1),new t9({name:"BackgroundCubeMaterial",uniforms:mJ(n9.backgroundCube.uniforms),vertexShader:n9.backgroundCube.vertexShader,fragmentShader:n9.backgroundCube.fragmentShader,side:o9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(A,P,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(G);if(G.material.uniforms.envMap.value=V,G.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(JN.makeRotationFromEuler(k.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)G.material.uniforms.backgroundRotation.value.premultiply(HY);if(G.material.toneMapped=o0.getTransfer(V.colorSpace)!==D9,D!==V||U!==V.version||N!==J.toneMapping)G.material.needsUpdate=!0,D=V,U=V.version,N=J.toneMapping;G.layers.enableAll(),R.unshift(G,G.geometry,G.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new W8(new N7(2,2),new t9({name:"BackgroundMaterial",uniforms:mJ(n9.background.uniforms),vertexShader:n9.background.vertexShader,fragmentShader:n9.background.fragmentShader,side:C6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,H.material.toneMapped=o0.getTransfer(V.colorSpace)!==D9,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),D!==V||U!==V.version||N!==J.toneMapping)H.material.needsUpdate=!0,D=V,U=V.version,N=J.toneMapping;H.layers.enableAll(),R.unshift(H,H.geometry,H.material,0,0,null)}}function E(R,k){R.getRGB(_Q,gK(J)),Z.buffers.color.setClear(_Q.r,_Q.g,_Q.b,k,W)}function q(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(R,k=1){X.set(R),Y=k,E(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(R){Y=R,E(X,Y)},render:O,addToRenderList:L,dispose:q}}function ZN(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},$=N(null),W=$,X=!1;function Y(j,b,m,T,w){let n=!1,d=U(j,T,m,b);if(W!==d)W=d,G(W.object);if(n=F(j,T,m,w),n)O(j,T,m,w);if(w!==null)Q.update(w,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,V(j,b,m,T),w!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(w).buffer)}}function H(){return J.createVertexArray()}function G(j){return J.bindVertexArray(j)}function D(j){return J.deleteVertexArray(j)}function U(j,b,m,T){let w=T.wireframe===!0,n=K[b.id];if(n===void 0)n={},K[b.id]=n;let d=j.isInstancedMesh===!0?j.id:0,$0=n[d];if($0===void 0)$0={},n[d]=$0;let i=$0[m.id];if(i===void 0)i={},$0[m.id]=i;let Z0=i[w];if(Z0===void 0)Z0=N(H()),i[w]=Z0;return Z0}function N(j){let b=[],m=[],T=[];for(let w=0;w<Z;w++)b[w]=0,m[w]=0,T[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:m,attributeDivisors:T,object:j,attributes:{},index:null}}function F(j,b,m,T){let w=W.attributes,n=b.attributes,d=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=w[i],S0=n[i];if(S0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)S0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)S0=j.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==S0)return!0;if(S0&&X0.data!==S0.data)return!0;d++}if(W.attributesNum!==d)return!0;if(W.index!==T)return!0;return!1}function O(j,b,m,T){let w={},n=b.attributes,d=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=n[i];if(X0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)X0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)X0=j.instanceColor}let S0={};if(S0.attribute=X0,X0&&X0.data)S0.data=X0.data;w[i]=S0,d++}W.attributes=w,W.attributesNum=d,W.index=T}function L(){let j=W.newAttributes;for(let b=0,m=j.length;b<m;b++)j[b]=0}function E(j){q(j,0)}function q(j,b){let{newAttributes:m,enabledAttributes:T,attributeDivisors:w}=W;if(m[j]=1,T[j]===0)J.enableVertexAttribArray(j),T[j]=1;if(w[j]!==b)J.vertexAttribDivisor(j,b),w[j]=b}function R(){let{newAttributes:j,enabledAttributes:b}=W;for(let m=0,T=b.length;m<T;m++)if(b[m]!==j[m])J.disableVertexAttribArray(m),b[m]=0}function k(j,b,m,T,w,n,d){if(d===!0)J.vertexAttribIPointer(j,b,m,w,n);else J.vertexAttribPointer(j,b,m,T,w,n)}function V(j,b,m,T){L();let w=T.attributes,n=m.getAttributes(),d=b.defaultAttributeValues;for(let $0 in n){let i=n[$0];if(i.location>=0){let Z0=w[$0];if(Z0===void 0){if($0==="instanceMatrix"&&j.instanceMatrix)Z0=j.instanceMatrix;if($0==="instanceColor"&&j.instanceColor)Z0=j.instanceColor}if(Z0!==void 0){let{normalized:X0,itemSize:S0}=Z0,w0=Q.get(Z0);if(w0===void 0)continue;let{buffer:n0,type:d0,bytesPerElement:S}=w0,g=d0===J.INT||d0===J.UNSIGNED_INT||Z0.gpuType===cZ;if(Z0.isInterleavedBufferAttribute){let u=Z0.data,a=u.stride,Q0=Z0.offset;if(u.isInstancedInterleavedBuffer){for(let r=0;r<i.locationSize;r++)q(i.location+r,u.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=u.meshPerAttribute*u.count}else for(let r=0;r<i.locationSize;r++)E(i.location+r);J.bindBuffer(J.ARRAY_BUFFER,n0);for(let r=0;r<i.locationSize;r++)k(i.location+r,S0/i.locationSize,d0,X0,a*S,(Q0+S0/i.locationSize*r)*S,g)}else{if(Z0.isInstancedBufferAttribute){for(let u=0;u<i.locationSize;u++)q(i.location+u,Z0.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let u=0;u<i.locationSize;u++)E(i.location+u);J.bindBuffer(J.ARRAY_BUFFER,n0);for(let u=0;u<i.locationSize;u++)k(i.location+u,S0/i.locationSize,d0,X0,S0*S,S0/i.locationSize*u*S,g)}}else if(d!==void 0){let X0=d[$0];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(i.location,X0);break;case 3:J.vertexAttrib3fv(i.location,X0);break;case 4:J.vertexAttrib4fv(i.location,X0);break;default:J.vertexAttrib1fv(i.location,X0)}}}}R()}function A(){B();for(let j in K){let b=K[j];for(let m in b){let T=b[m];for(let w in T){let n=T[w];for(let d in n)D(n[d].object),delete n[d];delete T[w]}}delete K[j]}}function P(j){if(K[j.id]===void 0)return;let b=K[j.id];for(let m in b){let T=b[m];for(let w in T){let n=T[w];for(let d in n)D(n[d].object),delete n[d];delete T[w]}}delete K[j.id]}function _(j){for(let b in K){let m=K[b];for(let T in m){let w=m[T];if(w[j.id]===void 0)continue;let n=w[j.id];for(let d in n)D(n[d].object),delete n[d];delete w[j.id]}}}function I(j){for(let b in K){let m=K[b],T=j.isInstancedMesh===!0?j.id:0,w=m[T];if(w===void 0)continue;for(let n in w){let d=w[n];for(let $0 in d)D(d[$0].object),delete d[$0];delete w[n]}if(delete m[T],Object.keys(m).length===0)delete K[b]}}function B(){if(p(),X=!0,W===$)return;W=$,G(W.object)}function p(){$.geometry=null,$.program=null,$.wireframe=!1}return{setup:Y,reset:B,resetDefaultState:p,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfObject:I,releaseStatesOfProgram:_,initAttributes:L,enableAttribute:E,disableUnusedAttributes:R}}function KN(J,Q,Z){let K;function $(H){K=H}function W(H,G){J.drawArrays(K,H,G),Z.update(G,K,1)}function X(H,G,D){if(D===0)return;J.drawArraysInstanced(K,H,G,D),Z.update(G,K,D)}function Y(H,G,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,G,0,D);let N=0;for(let F=0;F<D;F++)N+=G[F];Z.update(N,K,1)}this.setMode=$,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function $N(J,Q,Z,K){let $;function W(){if($!==void 0)return $;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");$=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else $=0;return $}function X(_){if(_!==g8&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let I=_===x8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==z8&&_!==WJ&&!I&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let G=Z.precision!==void 0?Z.precision:"highp",D=H(G);if(D!==G)b0("WebGLRenderer:",G,"not supported, using",D,"instead."),G=D;let U=Z.logarithmicDepthBuffer===!0,N=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if(Z.reversedDepthBuffer===!0&&N===!1)b0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),R=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:G,logarithmicDepthBuffer:U,reversedDepthBuffer:N,maxTextures:F,maxVertexTextures:O,maxTextureSize:L,maxCubemapSize:E,maxAttributes:q,maxVertexUniforms:R,maxVaryings:k,maxFragmentUniforms:V,maxSamples:A,samples:P}}function WN(J){let Q=this,Z=null,K=0,$=!1,W=!1,X=new D8,Y=new g0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(U,N){let F=U.length!==0||N||K!==0||$;return $=N,K=U.length,F},this.beginShadows=function(){W=!0,D(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(U,N){Z=D(U,N,0)},this.setState=function(U,N,F){let{clippingPlanes:O,clipIntersection:L,clipShadows:E}=U,q=J.get(U);if(!$||O===null||O.length===0||W&&!E)if(W)D(null);else G();else{let R=W?0:K,k=R*4,V=q.clippingState||null;H.value=V,V=D(O,N,k,F);for(let A=0;A!==k;++A)V[A]=Z[A];q.clippingState=V,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=R}};function G(){if(H.value!==Z)H.value=Z,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function D(U,N,F,O){let L=U!==null?U.length:0,E=null;if(L!==0){if(E=H.value,O!==!0||E===null){let q=F+L*4,R=N.matrixWorldInverse;if(Y.getNormalMatrix(R),E===null||E.length<q)E=new Float32Array(q);for(let k=0,V=F;k!==L;++k,V+=4)X.copy(U[k]).applyMatrix4(R,Y),X.normal.toArray(E,V),E[V+3]=X.constant}H.value=E,H.needsUpdate=!0}return Q.numPlanes=L,Q.numIntersection=0,E}}var T6=4,XN=6,YN=20,HN=256,F7=new AQ,pX=new e0,W$=null,X$=0,Y$=0,H$=!1,UN=new x,cJ=new x;class N${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,Z=0.1,K=100,$={}){let{size:W=256,position:X=UN}=$;W$=this._renderer.getRenderTarget(),X$=this._renderer.getActiveCubeFace(),Y$=this._renderer.getActiveMipmapLevel(),H$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Z,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=dX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=uX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(W$,X$,Y$),this._renderer.xr.enabled=H$,J.scissorTest=!1,_6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===A6||J.mapping===bJ)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);W$=this._renderer.getRenderTarget(),X$=this._renderer.getActiveCubeFace(),Y$=this._renderer.getActiveMipmapLevel(),H$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:a9,minFilter:a9,generateMipmaps:!1,type:x8,format:g8,colorSpace:_K,depthBuffer:!1},K=mX(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=mX(J,Q,Z);let{_lodMax:$}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=GN($)),this._blurMaterial=DN($,J,Q),this._ggxMaterial=NN($,J,Q)}return K}_compileMaterial(J){let Q=new W8(new O8,J);this._renderer.compile(Q,F7)}_sceneToCubeUV(J,Q,Z,K,$){let Y=new l9(90,1,Q,Z),H=[1,-1,1,1,1,1],G=[1,1,1,-1,-1,-1],D=this._renderer,U=D.autoClear,N=D.toneMapping;if(D.getClearColor(pX),D.toneMapping=A8,D.autoClear=!1,D.state.buffers.depth.getReversed())D.setRenderTarget(K),D.clearDepth(),D.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new W8(new k6,new RQ({name:"PMREM.Background",side:o9,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,L=O.material,E=!1,q=J.background;if(q){if(q.isColor)L.color.copy(q),J.background=null,E=!0}else L.color.copy(pX),E=!0;for(let R=0;R<6;R++){let k=R%3;if(k===0)Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x+G[R],$.y,$.z);else if(k===1)Y.up.set(0,0,H[R]),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y+G[R],$.z);else Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y,$.z+G[R]);let V=this._cubeSize;if(_6(K,k*V,R>2?V:0,V,V),D.setRenderTarget(K),E)D.render(O,Y);D.render(J,Y)}D.toneMapping=N,D.autoClear=U,J.background=q}_textureToCubeUV(J,Q){let Z=this._renderer,K=J.mapping===A6||J.mapping===bJ;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=dX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=uX();let $=K?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=$;let X=$.uniforms;X.envMap.value=J;let Y=this._cubeSize;_6(Q,0,0,3*Y,2*Y),Z.setRenderTarget(Q),Z.render(W,F7)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let $=1;$<K;$++)this._applyGGXFilter(J,$-1,$);Q.autoClear=Z}_applyGGXFilter(J,Q,Z){let K=this._renderer,$=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[Z];X.material=W;let Y=W.uniforms,H=Z/(this._lodMeshes.length-1),G=Q/(this._lodMeshes.length-1),D=Math.sqrt(H*H-G*G),U=H*1.25,N=D*U,{_lodMax:F}=this,O=this._sizeLods[Z],L=3*O*(Z>F-T6?Z-F+T6:0),E=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=N,Y.mipInt.value=F-Q,_6($,L,E,3*O,2*O),K.setRenderTarget($),K.render(X,F7),Y.envMap.value=$.texture,Y.roughness.value=0,Y.mipInt.value=F-Z,_6(J,L,E,3*O,2*O),K.setRenderTarget(J),K.render(X,F7)}_blur(J,Q,Z,K){let $=this._pingPongRenderTarget,W=Math.min(K,Math.PI)/Math.SQRT2;this._blurPass(J,$,Q,Z,W),this._blurPass($,J,Z,Z,W)}_blurPass(J,Q,Z,K,$){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[K];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=$,H.mipInt.value=this._lodMax-Z;let G=this._sizeLods[K],D=3*G*(K>this._lodMax-T6?K-this._lodMax+T6:0),U=4*(this._cubeSize-G);_6(Q,D,U,3*G,2*G),W.setRenderTarget(Q),W.render(Y,F7)}}function GN(J){let Q=[],Z=[],K=J,$=J-T6+1+XN;for(let W=0;W<$;W++){let X=Math.pow(2,K);Q.push(X);let Y=1/(X-2),H=-Y,G=1+Y,D=[H,H,G,H,G,G,H,H,G,G,H,G],U=6,N=6,F=3,O=new Float32Array(F*N*U),L=new Float32Array(F*N*U);for(let q=0;q<U;q++){let R=q%3*2/3-1,k=q>2?0:-1,V=[R,k,0,R+0.6666666666666666,k,0,R+0.6666666666666666,k+1,0,R,k,0,R+0.6666666666666666,k+1,0,R,k+1,0];O.set(V,F*N*q);for(let A=0;A<N;A++){let P=D[A*2]*2-1,_=D[A*2+1]*2-1;if(q===0)cJ.set(1,_,P);else if(q===1)cJ.set(-P,1,-_);else if(q===2)cJ.set(-P,_,1);else if(q===3)cJ.set(-1,_,-P);else if(q===4)cJ.set(-P,-1,_);else cJ.set(P,_,-1);cJ.toArray(L,(q*N+A)*F)}}let E=new O8;if(E.setAttribute("position",new F8(O,F)),E.setAttribute("outputDirection",new F8(L,F)),Z.push(new W8(E,null)),K>T6)K--}return{lodMeshes:Z,sizeLods:Q}}function mX(J,Q,Z){let K=new $8(J,Q,Z);return K.texture.mapping=K7,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function _6(J,Q,Z,K,$){J.viewport.set(Q,Z,K,$),J.scissor.set(Q,Z,K,$)}function NN(J,Q,Z){return new t9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HN,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wQ(),fragmentShader:`

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
		`,blending:h8,depthTest:!1,depthWrite:!1})}function DN(J,Q,Z){return new t9({name:"SphericalGaussianBlur",defines:{SAMPLES:YN,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wQ(),fragmentShader:`

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
		`,blending:h8,depthTest:!1,depthWrite:!1})}function uX(){return new t9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wQ(),fragmentShader:`

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
		`,blending:h8,depthTest:!1,depthWrite:!1})}function dX(){return new t9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:h8,depthTest:!1,depthWrite:!1})}function wQ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class F$ extends $8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},K=[Z,Z,Z,Z,Z,Z];this.texture=new LQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new k6(5,5,5),$=new t9({name:"CubemapFromEquirect",uniforms:mJ(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:o9,blending:h8});$.uniforms.tEquirect.value=Q;let W=new W8(K,$),X=Q.minFilter;if(Q.minFilter===yJ)Q.minFilter=a9;return new eK(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,Z=!0,K=!0){let $=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,Z,K);J.setRenderTarget($)}}function qN(J){let Q=new WeakMap,Z=new WeakMap,K=null;function $(N,F=!1){if(N===null||N===void 0)return null;if(F)return X(N);return W(N)}function W(N){if(N&&N.isTexture){let F=N.mapping;if(F===e7||F===JQ)if(Q.has(N)){let O=Q.get(N).texture;return Y(O,N.mapping)}else{let O=N.image;if(O&&O.height>0){let L=new F$(O.height);return L.fromEquirectangularTexture(J,N),Q.set(N,L),N.addEventListener("dispose",G),Y(L.texture,N.mapping)}else return null}}return N}function X(N){if(N&&N.isTexture){let F=N.mapping,O=F===e7||F===JQ,L=F===A6||F===bJ;if(O||L){let E=Z.get(N),q=E!==void 0?E.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==q){if(K===null)K=new N$(J);return E=O?K.fromEquirectangular(N,E):K.fromCubemap(N,E),E.texture.pmremVersion=N.pmremVersion,Z.set(N,E),E.texture}else if(E!==void 0)return E.texture;else{let R=N.image;if(O&&R&&R.height>0||L&&R&&H(R)){if(K===null)K=new N$(J);return E=O?K.fromEquirectangular(N):K.fromCubemap(N),E.texture.pmremVersion=N.pmremVersion,Z.set(N,E),N.addEventListener("dispose",D),E.texture}else return null}}}return N}function Y(N,F){if(F===e7)N.mapping=A6;else if(F===JQ)N.mapping=bJ;return N}function H(N){let F=0,O=6;for(let L=0;L<O;L++)if(N[L]!==void 0)F++;return F===O}function G(N){let F=N.target;F.removeEventListener("dispose",G);let O=Q.get(F);if(O!==void 0)Q.delete(F),O.dispose()}function D(N){let F=N.target;F.removeEventListener("dispose",D);let O=Z.get(F);if(O!==void 0)Z.delete(F),O.dispose()}function U(){if(Q=new WeakMap,Z=new WeakMap,K!==null)K.dispose(),K=null}return{get:$,dispose:U}}function FN(J){let Q={};function Z(K){if(Q[K]!==void 0)return Q[K];let $=J.getExtension(K);return Q[K]=$,$}return{has:function(K){return Z(K)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(K){let $=Z(K);if($===null)vJ("WebGLRenderer: "+K+" extension not supported.");return $}}}function EN(J,Q,Z,K){let $={},W=new WeakMap;function X(U){let N=U.target;if(N.index!==null)Q.remove(N.index);for(let O in N.attributes)Q.remove(N.attributes[O]);N.removeEventListener("dispose",X),delete $[N.id];let F=W.get(N);if(F)Q.remove(F),W.delete(N);if(K.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;Z.memory.geometries--}function Y(U,N){if($[N.id]===!0)return N;return N.addEventListener("dispose",X),$[N.id]=!0,Z.memory.geometries++,N}function H(U){let N=U.attributes;for(let F in N)Q.update(N[F],J.ARRAY_BUFFER)}function G(U){let N=[],F=U.index,O=U.attributes.position,L=0;if(O===void 0)return;if(F!==null){let R=F.array;L=F.version;for(let k=0,V=R.length;k<V;k+=3){let A=R[k+0],P=R[k+1],_=R[k+2];N.push(A,P,P,_,_,A)}}else{let R=O.array;L=O.version;for(let k=0,V=R.length/3-1;k<V;k+=3){let A=k+0,P=k+1,_=k+2;N.push(A,P,P,_,_,A)}}let E=new(O.count>=65535?OQ:EQ)(N,1);E.version=L;let q=W.get(U);if(q)Q.remove(q);W.set(U,E)}function D(U){let N=W.get(U);if(N){let F=U.index;if(F!==null){if(N.version<F.version)G(U)}}else G(U);return W.get(U)}return{get:Y,update:H,getWireframeAttribute:D}}function ON(J,Q,Z){let K;function $(U){K=U}let W,X;function Y(U){W=U.type,X=U.bytesPerElement}function H(U,N){J.drawElements(K,N,W,U*X),Z.update(N,K,1)}function G(U,N,F){if(F===0)return;J.drawElementsInstanced(K,N,W,U*X,F),Z.update(N,K,F)}function D(U,N,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,N,0,W,U,0,F);let L=0;for(let E=0;E<F;E++)L+=N[E];Z.update(L,K,1)}this.setMode=$,this.setIndex=Y,this.render=H,this.renderInstances=G,this.renderMultiDraw=D}function RN(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function K(W,X,Y){switch(Z.calls++,X){case J.TRIANGLES:Z.triangles+=Y*(W/3);break;case J.LINES:Z.lines+=Y*(W/2);break;case J.LINE_STRIP:Z.lines+=Y*(W-1);break;case J.LINE_LOOP:Z.lines+=Y*W;break;case J.POINTS:Z.points+=Y*W;break;default:f0("WebGLInfo: Unknown draw mode:",X);break}}function $(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:$,update:K}}function MN(J,Q,Z){let K=new WeakMap,$=new Y9;function W(X,Y,H){let G=X.morphTargetInfluences,D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,U=D!==void 0?D.length:0,N=K.get(Y);if(N===void 0||N.count!==U){let B=function(){_.dispose(),K.delete(Y),Y.removeEventListener("dispose",B)};if(N!==void 0)N.texture.dispose();let F=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,L=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],q=Y.morphAttributes.normal||[],R=Y.morphAttributes.color||[],k=0;if(F===!0)k=1;if(O===!0)k=2;if(L===!0)k=3;let V=Y.attributes.position.count*k,A=1;if(V>Q.maxTextureSize)A=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let P=new Float32Array(V*A*4*U),_=new DQ(P,V,A,U);_.type=WJ,_.needsUpdate=!0;let I=k*4;for(let p=0;p<U;p++){let j=E[p],b=q[p],m=R[p],T=V*A*4*p;for(let w=0;w<j.count;w++){let n=w*I;if(F===!0)$.fromBufferAttribute(j,w),P[T+n+0]=$.x,P[T+n+1]=$.y,P[T+n+2]=$.z,P[T+n+3]=0;if(O===!0)$.fromBufferAttribute(b,w),P[T+n+4]=$.x,P[T+n+5]=$.y,P[T+n+6]=$.z,P[T+n+7]=0;if(L===!0)$.fromBufferAttribute(m,w),P[T+n+8]=$.x,P[T+n+9]=$.y,P[T+n+10]=$.z,P[T+n+11]=m.itemSize===4?$.w:1}}N={count:U,texture:_,size:new x0(V,A)},K.set(Y,N),Y.addEventListener("dispose",B)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,Z);else{let F=0;for(let L=0;L<G.length;L++)F+=G[L];let O=Y.morphTargetsRelative?1:1-F;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",G)}H.getUniforms().setValue(J,"morphTargetsTexture",N.texture,Z),H.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:W}}function LN(J,Q,Z,K,$){let W=new WeakMap;function X(G){let D=$.render.frame,U=G.geometry,N=Q.get(G,U);if(W.get(N)!==D)Q.update(N),W.set(N,D);if(G.isInstancedMesh){if(G.hasEventListener("dispose",H)===!1)G.addEventListener("dispose",H);if(W.get(G)!==D){if(Z.update(G.instanceMatrix,J.ARRAY_BUFFER),G.instanceColor!==null)Z.update(G.instanceColor,J.ARRAY_BUFFER);W.set(G,D)}}if(G.isSkinnedMesh){let F=G.skeleton;if(W.get(F)!==D)F.update(),W.set(F,D)}return N}function Y(){W=new WeakMap}function H(G){let D=G.target;if(D.removeEventListener("dispose",H),K.releaseStatesOfObject(D),Z.remove(D.instanceMatrix),D.instanceColor!==null)Z.remove(D.instanceColor)}return{update:X,dispose:Y}}var IN={[xZ]:"LINEAR_TONE_MAPPING",[gZ]:"REINHARD_TONE_MAPPING",[pZ]:"CINEON_TONE_MAPPING",[mZ]:"ACES_FILMIC_TONE_MAPPING",[dZ]:"AGX_TONE_MAPPING",[lZ]:"NEUTRAL_TONE_MAPPING",[uZ]:"CUSTOM_TONE_MAPPING"};function VN(J,Q,Z,K,$,W){let X=new $8(Q,Z,{type:J,depthBuffer:$,stencilBuffer:W,samples:K?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,G=new O8;G.setAttribute("position",new c9([-1,3,0,-1,-1,0,3,-1,0],3)),G.setAttribute("uv",new c9([0,2,0,0,2,0],2));let D=new pK({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),U=new W8(G,D),N=new AQ(-1,1,1,-1,0,1),F=null,O=null,L=!1,E,q=null,R=[],k=!1;this.setSize=function(V,A){if(X.setSize(V,A),Y!==null)Y.setSize(V,A);if(H!==null)H.setSize(V,A);for(let P=0;P<R.length;P++){let _=R[P];if(_.setSize)_.setSize(V,A)}},this.setEffects=function(V){R=V,k=R.length>0&&R[0].isRenderPass===!0;let{width:A,height:P}=X;if(R.length>0&&Y===null)Y=new $8(A,P,{type:x8,depthBuffer:!1,stencilBuffer:!1}),H=new $8(A,P,{type:x8,depthBuffer:!1,stencilBuffer:!1});for(let _=0;_<R.length;_++){let I=R[_];if(I.setSize)I.setSize(A,P)}},this.begin=function(V,A){if(L)return!1;if(V.toneMapping===A8&&R.length===0)return!1;if(q=A,A!==null){let{width:P,height:_}=A;if(X.width!==P||X.height!==_)this.setSize(P,_)}if(k===!1)V.setRenderTarget(X);return E=V.toneMapping,V.toneMapping=A8,!0},this.hasRenderPass=function(){return k},this.end=function(V,A){V.toneMapping=E,L=!0;let P=X,_=Y;for(let I=0;I<R.length;I++){let B=R[I];if(B.enabled===!1)continue;if(B.render(V,_,P,A),B.needsSwap!==!1)P=_,_=_===Y?H:Y}if(F!==V.outputColorSpace||O!==V.toneMapping){if(F=V.outputColorSpace,O=V.toneMapping,D.defines={},o0.getTransfer(F)===D9)D.defines.SRGB_TRANSFER="";let I=IN[O];if(I)D.defines[I]="";D.needsUpdate=!0}D.uniforms.tDiffuse.value=P.texture,V.setRenderTarget(q),V.render(U,N),q=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();G.dispose(),D.dispose()}}var UY=new g9,D$=new pJ(1,1),GY=new DQ,NY=new yK,DY=new LQ,lX=[],cX=[],nX=new Float32Array(16),sX=new Float32Array(9),iX=new Float32Array(4);function w6(J,Q,Z){let K=J[0];if(K<=0||K>0)return J;let $=Q*Z,W=lX[$];if(W===void 0)W=new Float32Array($),lX[$]=W;if(Q!==0){K.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=Z,J[X].toArray(W,Y)}return W}function P9(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,K=J.length;Z<K;Z++)if(J[Z]!==Q[Z])return!1;return!0}function k9(J,Q){for(let Z=0,K=Q.length;Z<K;Z++)J[Z]=Q[Z]}function SQ(J,Q){let Z=cX[Q];if(Z===void 0)Z=new Int32Array(Q),cX[Q]=Z;for(let K=0;K!==Q;++K)Z[K]=J.allocateTextureUnit();return Z}function CN(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function BN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(P9(Z,Q))return;J.uniform2fv(this.addr,Q),k9(Z,Q)}}function AN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(P9(Z,Q))return;J.uniform3fv(this.addr,Q),k9(Z,Q)}}function zN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(P9(Z,Q))return;J.uniform4fv(this.addr,Q),k9(Z,Q)}}function PN(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(P9(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),k9(Z,Q)}else{if(P9(Z,K))return;iX.set(K),J.uniformMatrix2fv(this.addr,!1,iX),k9(Z,K)}}function kN(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(P9(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),k9(Z,Q)}else{if(P9(Z,K))return;sX.set(K),J.uniformMatrix3fv(this.addr,!1,sX),k9(Z,K)}}function _N(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(P9(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),k9(Z,Q)}else{if(P9(Z,K))return;nX.set(K),J.uniformMatrix4fv(this.addr,!1,nX),k9(Z,K)}}function TN(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function wN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(P9(Z,Q))return;J.uniform2iv(this.addr,Q),k9(Z,Q)}}function SN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(P9(Z,Q))return;J.uniform3iv(this.addr,Q),k9(Z,Q)}}function jN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(P9(Z,Q))return;J.uniform4iv(this.addr,Q),k9(Z,Q)}}function vN(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function bN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(P9(Z,Q))return;J.uniform2uiv(this.addr,Q),k9(Z,Q)}}function yN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(P9(Z,Q))return;J.uniform3uiv(this.addr,Q),k9(Z,Q)}}function fN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(P9(Z,Q))return;J.uniform4uiv(this.addr,Q),k9(Z,Q)}}function hN(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_2D_SHADOW)D$.compareFunction=Z.isReversedDepthBuffer()?GQ:UQ,W=D$;else W=UY;Z.setTexture2D(Q||W,$)}function xN(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture3D(Q||NY,$)}function gN(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTextureCube(Q||DY,$)}function pN(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture2DArray(Q||GY,$)}function mN(J){switch(J){case 5126:return CN;case 35664:return BN;case 35665:return AN;case 35666:return zN;case 35674:return PN;case 35675:return kN;case 35676:return _N;case 5124:case 35670:return TN;case 35667:case 35671:return wN;case 35668:case 35672:return SN;case 35669:case 35673:return jN;case 5125:return vN;case 36294:return bN;case 36295:return yN;case 36296:return fN;case 35678:case 36198:case 36298:case 36306:case 35682:return hN;case 35679:case 36299:case 36307:return xN;case 35680:case 36300:case 36308:case 36293:return gN;case 36289:case 36303:case 36311:case 36292:return pN}}function uN(J,Q){J.uniform1fv(this.addr,Q)}function dN(J,Q){let Z=w6(Q,this.size,2);J.uniform2fv(this.addr,Z)}function lN(J,Q){let Z=w6(Q,this.size,3);J.uniform3fv(this.addr,Z)}function cN(J,Q){let Z=w6(Q,this.size,4);J.uniform4fv(this.addr,Z)}function nN(J,Q){let Z=w6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function sN(J,Q){let Z=w6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function iN(J,Q){let Z=w6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function oN(J,Q){J.uniform1iv(this.addr,Q)}function aN(J,Q){J.uniform2iv(this.addr,Q)}function rN(J,Q){J.uniform3iv(this.addr,Q)}function tN(J,Q){J.uniform4iv(this.addr,Q)}function eN(J,Q){J.uniform1uiv(this.addr,Q)}function JD(J,Q){J.uniform2uiv(this.addr,Q)}function QD(J,Q){J.uniform3uiv(this.addr,Q)}function ZD(J,Q){J.uniform4uiv(this.addr,Q)}function KD(J,Q,Z){let K=this.cache,$=Q.length,W=SQ(Z,$);if(!P9(K,W))J.uniform1iv(this.addr,W),k9(K,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=D$;else X=UY;for(let Y=0;Y!==$;++Y)Z.setTexture2D(Q[Y]||X,W[Y])}function $D(J,Q,Z){let K=this.cache,$=Q.length,W=SQ(Z,$);if(!P9(K,W))J.uniform1iv(this.addr,W),k9(K,W);for(let X=0;X!==$;++X)Z.setTexture3D(Q[X]||NY,W[X])}function WD(J,Q,Z){let K=this.cache,$=Q.length,W=SQ(Z,$);if(!P9(K,W))J.uniform1iv(this.addr,W),k9(K,W);for(let X=0;X!==$;++X)Z.setTextureCube(Q[X]||DY,W[X])}function XD(J,Q,Z){let K=this.cache,$=Q.length,W=SQ(Z,$);if(!P9(K,W))J.uniform1iv(this.addr,W),k9(K,W);for(let X=0;X!==$;++X)Z.setTexture2DArray(Q[X]||GY,W[X])}function YD(J){switch(J){case 5126:return uN;case 35664:return dN;case 35665:return lN;case 35666:return cN;case 35674:return nN;case 35675:return sN;case 35676:return iN;case 5124:case 35670:return oN;case 35667:case 35671:return aN;case 35668:case 35672:return rN;case 35669:case 35673:return tN;case 5125:return eN;case 36294:return JD;case 36295:return QD;case 36296:return ZD;case 35678:case 36198:case 36298:case 36306:case 35682:return KD;case 35679:case 36299:case 36307:return $D;case 35680:case 36300:case 36308:case 36293:return WD;case 36289:case 36303:case 36311:case 36292:return XD}}class qY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=mN(Q.type)}}class FY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=YD(Q.type)}}class EY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let K=this.seq;for(let $=0,W=K.length;$!==W;++$){let X=K[$];X.setValue(J,Q[X.id],Z)}}}var U$=/(\w+)(\])?(\[|\.)?/g;function oX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function HD(J,Q,Z){let K=J.name,$=K.length;U$.lastIndex=0;while(!0){let W=U$.exec(K),X=U$.lastIndex,Y=W[1],H=W[2]==="]",G=W[3];if(H)Y=Y|0;if(G===void 0||G==="["&&X+2===$){oX(Z,G===void 0?new qY(Y,J,Q):new FY(Y,J,Q));break}else{let U=Z.map[Y];if(U===void 0)U=new EY(Y),oX(Z,U);Z=U}}}class R7{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<Z;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);HD(X,Y,this)}let K=[],$=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(W);else $.push(W);if(K.length>0)this.seq=K.concat($)}setValue(J,Q,Z,K){let $=this.map[Q];if($!==void 0)$.setValue(J,Z,K)}setOptional(J,Q,Z){let K=Q[Z];if(K!==void 0)this.setValue(J,Z,K)}static upload(J,Q,Z,K){for(let $=0,W=Q.length;$!==W;++$){let X=Q[$],Y=Z[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let Z=[];for(let K=0,$=J.length;K!==$;++K){let W=J[K];if(W.id in Q)Z.push(W)}return Z}}function aX(J,Q,Z){let K=J.createShader(Q);return J.shaderSource(K,Z),J.compileShader(K),K}var UD=37297,GD=0;function ND(J,Q){let Z=J.split(`
`),K=[],$=Math.max(Q-6,0),W=Math.min(Q+6,Z.length);for(let X=$;X<W;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${Z[X]}`)}return K.join(`
`)}var rX=new g0;function DD(J){o0._getMatrix(rX,o0.workingColorSpace,J);let Q=`mat3( ${rX.elements.map((Z)=>Z.toFixed(4))} )`;switch(o0.getTransfer(J)){case TK:return[Q,"LinearTransferOETF"];case D9:return[Q,"sRGBTransferOETF"];default:return b0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function tX(J,Q,Z){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(K&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return Z.toUpperCase()+`

`+W+`

`+ND(J.getShaderSource(Q),Y)}else return W}function qD(J,Q){let Z=DD(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}var FD={[xZ]:"Linear",[gZ]:"Reinhard",[pZ]:"Cineon",[mZ]:"ACESFilmic",[dZ]:"AgX",[lZ]:"Neutral",[uZ]:"Custom"};function ED(J,Q){let Z=FD[Q];if(Z===void 0)return b0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var TQ=new x;function OD(){o0.getLuminanceCoefficients(TQ);let J=TQ.x.toFixed(4),Q=TQ.y.toFixed(4),Z=TQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function RD(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(O7).join(`
`)}function MD(J){let Q=[];for(let Z in J){let K=J[Z];if(K===!1)continue;Q.push("#define "+Z+" "+K)}return Q.join(`
`)}function LD(J,Q){let Z={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let $=0;$<K;$++){let W=J.getActiveAttrib(Q,$),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;Z[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return Z}function O7(J){return J!==""}function eX(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function JY(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var ID=/^[ \t]*#include +<([\w\d./]+)>/gm;function q$(J){return J.replace(ID,CD)}var VD=new Map;function CD(J,Q){let Z=c0[Q];if(Z===void 0){let K=VD.get(Q);if(K!==void 0)Z=c0[K],b0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return q$(Z)}var BD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function QY(J){return J.replace(BD,AD)}function AD(J,Q,Z,K){let $="";for(let W=parseInt(Q);W<parseInt(Z);W++)$+=K.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return $}function ZY(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var zD={[Q7]:"SHADOWMAP_TYPE_PCF",[V6]:"SHADOWMAP_TYPE_VSM"};function PD(J){return zD[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kD={[A6]:"ENVMAP_TYPE_CUBE",[bJ]:"ENVMAP_TYPE_CUBE",[K7]:"ENVMAP_TYPE_CUBE_UV"};function _D(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return kD[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var TD={[bJ]:"ENVMAP_MODE_REFRACTION"};function wD(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return TD[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var SD={[NX]:"ENVMAP_BLENDING_MULTIPLY",[DX]:"ENVMAP_BLENDING_MIX",[qX]:"ENVMAP_BLENDING_ADD"};function jD(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return SD[J.combine]||"ENVMAP_BLENDING_NONE"}function vD(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:K,maxMip:Z}}function bD(J,Q,Z,K){let $=J.getContext(),W=Z.defines,X=Z.vertexShader,Y=Z.fragmentShader,H=PD(Z),G=_D(Z),D=wD(Z),U=jD(Z),N=vD(Z),F=RD(Z),O=MD(W),L=$.createProgram(),E,q,R=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(O7).join(`
`),E.length>0)E+=`
`;if(q=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(O7).join(`
`),q.length>0)q+=`
`}else E=[ZY(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+D:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexNormals?"#define HAS_NORMAL":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(O7).join(`
`),q=[ZY(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+G:"",Z.envMap?"#define "+D:"",Z.envMap?"#define "+U:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.retroreflection?"#define USE_RETROREFLECTION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor?"#define USE_COLOR":"",Z.vertexAlphas||Z.batchingColor?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==A8?"#define TONE_MAPPING":"",Z.toneMapping!==A8?c0.tonemapping_pars_fragment:"",Z.toneMapping!==A8?ED("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",c0.colorspace_pars_fragment,qD("linearToOutputTexel",Z.outputColorSpace),OD(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(O7).join(`
`);if(X=q$(X),X=eX(X,Z),X=JY(X,Z),Y=q$(Y),Y=eX(Y,Z),Y=JY(Y,Z),X=QY(X),Y=QY(Y),Z.isRawShaderMaterial!==!0)R=`#version 300 es
`,E=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,q=["#define varying in",Z.glslVersion===wK?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===wK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let k=R+E+X,V=R+q+Y,A=aX($,$.VERTEX_SHADER,k),P=aX($,$.FRAGMENT_SHADER,V);if($.attachShader(L,A),$.attachShader(L,P),Z.index0AttributeName!==void 0)$.bindAttribLocation(L,0,Z.index0AttributeName);else if(Z.hasPositionAttribute===!0)$.bindAttribLocation(L,0,"position");$.linkProgram(L);function _(j){if(J.debug.checkShaderErrors){let b=$.getProgramInfoLog(L)||"",m=$.getShaderInfoLog(A)||"",T=$.getShaderInfoLog(P)||"",w=b.trim(),n=m.trim(),d=T.trim(),$0=!0,i=!0;if($.getProgramParameter(L,$.LINK_STATUS)===!1)if($0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError($,L,A,P);else{let Z0=tX($,A,"vertex"),X0=tX($,P,"fragment");f0("WebGLProgram: Shader Error "+$.getError()+" - VALIDATE_STATUS "+$.getProgramParameter(L,$.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+w+`
`+Z0+`
`+X0)}else if(w!=="")b0("WebGLProgram: Program Info Log:",w);else if(n===""||d==="")i=!1;if(i)j.diagnostics={runnable:$0,programLog:w,vertexShader:{log:n,prefix:E},fragmentShader:{log:d,prefix:q}}}$.deleteShader(A),$.deleteShader(P),I=new R7($,L),B=LD($,L)}let I;this.getUniforms=function(){if(I===void 0)_(this);return I};let B;this.getAttributes=function(){if(B===void 0)_(this);return B};let p=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(p===!1)p=$.getProgramParameter(L,UD);return p},this.destroy=function(){K.releaseStatesOfProgram(this),$.deleteProgram(L),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=GD++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=A,this.fragmentShader=P,this}var yD=0;class OY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,Z){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new RY(J),Q.set(J,Z);return Z}}class RY{constructor(J){this.id=yD++,this.code=J,this.usedTimes=0}}function fD(J){return J===xJ||J===YQ||J===HQ}function hD(J,Q,Z,K,$,W){let X=new qQ,Y=new OY,H=new Set,G=[],D=new Map,U=K.logarithmicDepthBuffer,N=K.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(I){if(H.add(I),I===0)return"uv";return`uv${I}`}function L(I,B,p,j,b,m){let T=j.fog,w=b.geometry,n=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?j.environment:null,d=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,$0=Q.get(I.envMap||n,d),i=!!$0&&$0.mapping===K7?$0.image.height:null,Z0=F[I.type];if(I.precision!==null){if(N=K.getMaxPrecision(I.precision),N!==I.precision)b0("WebGLProgram.getParameters:",I.precision,"not supported, using",N,"instead.")}let X0=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,S0=X0!==void 0?X0.length:0,w0=0;if(w.morphAttributes.position!==void 0)w0=1;if(w.morphAttributes.normal!==void 0)w0=2;if(w.morphAttributes.color!==void 0)w0=3;let n0,d0,S,g;if(Z0){let q9=n9[Z0];n0=q9.vertexShader,d0=q9.fragmentShader}else{n0=I.vertexShader,d0=I.fragmentShader;let q9=Y.getVertexShaderStage(I),K9=Y.getFragmentShaderStage(I);Y.update(I,q9,K9),S=q9.id,g=K9.id}let u=J.getRenderTarget(),a=J.state.buffers.depth.getReversed(),Q0=b.isInstancedMesh===!0,r=b.isBatchedMesh===!0,z0=!!I.map,q0=!!I.matcap,y0=!!$0,m0=!!I.aoMap,h0=!!I.lightMap,i0=!!I.bumpMap&&I.wireframe===!1,r0=!!I.normalMap,V9=!!I.displacementMap,E9=!!I.emissiveMap,O9=!!I.metalnessMap,v=!!I.roughnessMap,z9=I.anisotropy>0,J9=I.clearcoat>0,G9=I.dispersion>0,z=I.retroreflectivity>0,M=I.iridescence>0,y=I.sheen>0,s=I.transmission>0,W0=z9&&!!I.anisotropyMap,G0=J9&&!!I.clearcoatMap,F0=J9&&!!I.clearcoatNormalMap,t=J9&&!!I.clearcoatRoughnessMap,K0=M&&!!I.iridescenceMap,R0=M&&!!I.iridescenceThicknessMap,A0=y&&!!I.sheenColorMap,N0=y&&!!I.sheenRoughnessMap,U0=!!I.specularMap,j0=!!I.specularColorMap,v0=!!I.specularIntensityMap,Q9=s&&!!I.transmissionMap,h=s&&!!I.thicknessMap,E0=!!I.gradientMap,J0=!!I.alphaMap,O0=I.alphaTest>0,V0=!!I.alphaHash,Y0=!!I.extensions,M0=A8;if(I.toneMapped){if(u===null||u.isXRRenderTarget===!0)M0=J.toneMapping}let u0={shaderID:Z0,shaderType:I.type,shaderName:I.name,vertexShader:n0,fragmentShader:d0,defines:I.defines,customVertexShaderID:S,customFragmentShaderID:g,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:N,batching:r,batchingColor:r&&b._colorsTexture!==null,instancing:Q0,instancingColor:Q0&&b.instanceColor!==null,instancingMorph:Q0&&b.morphTexture!==null,outputColorSpace:u===null?J.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:o0.workingColorSpace,alphaToCoverage:!!I.alphaToCoverage,map:z0,matcap:q0,envMap:y0,envMapMode:y0&&$0.mapping,envMapCubeUVHeight:i,aoMap:m0,lightMap:h0,bumpMap:i0,normalMap:r0,displacementMap:V9,emissiveMap:E9,normalMapObjectSpace:r0&&I.normalMapType===AX,normalMapTangentSpace:r0&&I.normalMapType===kK,packedNormalMap:r0&&I.normalMapType===kK&&fD(I.normalMap.format),metalnessMap:O9,roughnessMap:v,anisotropy:z9,anisotropyMap:W0,clearcoat:J9,clearcoatMap:G0,clearcoatNormalMap:F0,clearcoatRoughnessMap:t,dispersion:G9,retroreflection:z,iridescence:M,iridescenceMap:K0,iridescenceThicknessMap:R0,sheen:y,sheenColorMap:A0,sheenRoughnessMap:N0,specularMap:U0,specularColorMap:j0,specularIntensityMap:v0,transmission:s,transmissionMap:Q9,thicknessMap:h,gradientMap:E0,opaque:I.transparent===!1&&I.blending===Z7&&I.alphaToCoverage===!1,alphaMap:J0,alphaTest:O0,alphaHash:V0,combine:I.combine,mapUv:z0&&O(I.map.channel),aoMapUv:m0&&O(I.aoMap.channel),lightMapUv:h0&&O(I.lightMap.channel),bumpMapUv:i0&&O(I.bumpMap.channel),normalMapUv:r0&&O(I.normalMap.channel),displacementMapUv:V9&&O(I.displacementMap.channel),emissiveMapUv:E9&&O(I.emissiveMap.channel),metalnessMapUv:O9&&O(I.metalnessMap.channel),roughnessMapUv:v&&O(I.roughnessMap.channel),anisotropyMapUv:W0&&O(I.anisotropyMap.channel),clearcoatMapUv:G0&&O(I.clearcoatMap.channel),clearcoatNormalMapUv:F0&&O(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:t&&O(I.clearcoatRoughnessMap.channel),iridescenceMapUv:K0&&O(I.iridescenceMap.channel),iridescenceThicknessMapUv:R0&&O(I.iridescenceThicknessMap.channel),sheenColorMapUv:A0&&O(I.sheenColorMap.channel),sheenRoughnessMapUv:N0&&O(I.sheenRoughnessMap.channel),specularMapUv:U0&&O(I.specularMap.channel),specularColorMapUv:j0&&O(I.specularColorMap.channel),specularIntensityMapUv:v0&&O(I.specularIntensityMap.channel),transmissionMapUv:Q9&&O(I.transmissionMap.channel),thicknessMapUv:h&&O(I.thicknessMap.channel),alphaMapUv:J0&&O(I.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(r0||z9),vertexNormals:!!w.attributes.normal,vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!w.attributes.uv&&(z0||J0),fog:!!T,useFog:I.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:I.wireframe===!1&&(I.flatShading===!0||w.attributes.normal===void 0&&r0===!1&&(I.isMeshLambertMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isMeshPhysicalMaterial)),sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:U,reversedDepthBuffer:a,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:S0,morphTextureStride:w0,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:m.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:I.dithering,shadowMapEnabled:J.shadowMap.enabled&&p.length>0,shadowMapType:J.shadowMap.type,toneMapping:M0,decodeVideoTexture:z0&&I.map.isVideoTexture===!0&&o0.getTransfer(I.map.colorSpace)===D9,decodeVideoTextureEmissive:E9&&I.emissiveMap.isVideoTexture===!0&&o0.getTransfer(I.emissiveMap.colorSpace)===D9,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===f8,flipSided:I.side===o9,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Y0&&I.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y0&&I.extensions.multiDraw===!0||r)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return u0.vertexUv1s=H.has(1),u0.vertexUv2s=H.has(2),u0.vertexUv3s=H.has(3),H.clear(),u0}function E(I){let B=[];if(I.shaderID)B.push(I.shaderID);else B.push(I.customVertexShaderID),B.push(I.customFragmentShaderID);if(I.defines!==void 0)for(let p in I.defines)B.push(p),B.push(I.defines[p]);if(I.isRawShaderMaterial===!1)q(B,I),R(B,I),B.push(J.outputColorSpace);return B.push(I.customProgramCacheKey),B.join()}function q(I,B){I.push(B.precision),I.push(B.outputColorSpace),I.push(B.envMapMode),I.push(B.envMapCubeUVHeight),I.push(B.mapUv),I.push(B.alphaMapUv),I.push(B.lightMapUv),I.push(B.aoMapUv),I.push(B.bumpMapUv),I.push(B.normalMapUv),I.push(B.displacementMapUv),I.push(B.emissiveMapUv),I.push(B.metalnessMapUv),I.push(B.roughnessMapUv),I.push(B.anisotropyMapUv),I.push(B.clearcoatMapUv),I.push(B.clearcoatNormalMapUv),I.push(B.clearcoatRoughnessMapUv),I.push(B.iridescenceMapUv),I.push(B.iridescenceThicknessMapUv),I.push(B.sheenColorMapUv),I.push(B.sheenRoughnessMapUv),I.push(B.specularMapUv),I.push(B.specularColorMapUv),I.push(B.specularIntensityMapUv),I.push(B.transmissionMapUv),I.push(B.thicknessMapUv),I.push(B.combine),I.push(B.fogExp2),I.push(B.sizeAttenuation),I.push(B.morphTargetsCount),I.push(B.morphAttributeCount),I.push(B.numSunLights),I.push(B.numDirLights),I.push(B.numPointLights),I.push(B.numSpotLights),I.push(B.numSpotLightMaps),I.push(B.numHemiLights),I.push(B.numRectAreaLights),I.push(B.numSunLightShadows),I.push(B.numDirLightShadows),I.push(B.numPointLightShadows),I.push(B.numSpotLightShadows),I.push(B.numSpotLightShadowsWithMaps),I.push(B.numLightProbes),I.push(B.shadowMapType),I.push(B.toneMapping),I.push(B.numClippingPlanes),I.push(B.numClipIntersection),I.push(B.depthPacking)}function R(I,B){if(X.disableAll(),B.instancing)X.enable(0);if(B.instancingColor)X.enable(1);if(B.instancingMorph)X.enable(2);if(B.matcap)X.enable(3);if(B.envMap)X.enable(4);if(B.normalMapObjectSpace)X.enable(5);if(B.normalMapTangentSpace)X.enable(6);if(B.clearcoat)X.enable(7);if(B.iridescence)X.enable(8);if(B.alphaTest)X.enable(9);if(B.vertexColors)X.enable(10);if(B.vertexAlphas)X.enable(11);if(B.vertexUv1s)X.enable(12);if(B.vertexUv2s)X.enable(13);if(B.vertexUv3s)X.enable(14);if(B.vertexTangents)X.enable(15);if(B.anisotropy)X.enable(16);if(B.alphaHash)X.enable(17);if(B.batching)X.enable(18);if(B.dispersion)X.enable(19);if(B.retroreflection)X.enable(24);if(B.batchingColor)X.enable(20);if(B.gradientMap)X.enable(21);if(B.packedNormalMap)X.enable(22);if(B.vertexNormals)X.enable(23);if(I.push(X.mask),X.disableAll(),B.fog)X.enable(0);if(B.useFog)X.enable(1);if(B.flatShading)X.enable(2);if(B.logarithmicDepthBuffer)X.enable(3);if(B.reversedDepthBuffer)X.enable(4);if(B.skinning)X.enable(5);if(B.morphTargets)X.enable(6);if(B.morphNormals)X.enable(7);if(B.morphColors)X.enable(8);if(B.premultipliedAlpha)X.enable(9);if(B.shadowMapEnabled)X.enable(10);if(B.doubleSided)X.enable(11);if(B.flipSided)X.enable(12);if(B.useDepthPacking)X.enable(13);if(B.dithering)X.enable(14);if(B.transmission)X.enable(15);if(B.sheen)X.enable(16);if(B.opaque)X.enable(17);if(B.pointsUvs)X.enable(18);if(B.decodeVideoTexture)X.enable(19);if(B.decodeVideoTextureEmissive)X.enable(20);if(B.alphaToCoverage)X.enable(21);if(B.numLightProbeGrids>0)X.enable(22);if(B.hasPositionAttribute)X.enable(23);I.push(X.mask)}function k(I){let B=F[I.type],p;if(B){let j=n9[B];p=D7.clone(j.uniforms)}else p=I.uniforms;return p}function V(I,B){let p=D.get(B);if(p!==void 0)++p.usedTimes;else p=new bD(J,B,I,$),G.push(p),D.set(B,p);return p}function A(I){if(--I.usedTimes===0){let B=G.indexOf(I);G[B]=G[G.length-1],G.pop(),D.delete(I.cacheKey),I.destroy()}}function P(I){Y.remove(I)}function _(){Y.dispose()}return{getParameters:L,getProgramCacheKey:E,getUniforms:k,acquireProgram:V,releaseProgram:A,releaseShaderCache:P,programs:G,dispose:_}}function xD(){let J=new WeakMap;function Q(X){return J.has(X)}function Z(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function $(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:Z,remove:K,update:$,dispose:W}}function gD(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function KY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function $Y(){let J=[],Q=0,Z=[],K=[],$=[];function W(){Q=0,Z.length=0,K.length=0,$.length=0}function X(N){let F=0;if(N.isInstancedMesh)F+=2;if(N.isSkinnedMesh)F+=1;return F}function Y(N,F,O,L,E,q){let R=J[Q];if(R===void 0)R={id:N.id,object:N,geometry:F,material:O,materialVariant:X(N),groupOrder:L,renderOrder:N.renderOrder,z:E,group:q},J[Q]=R;else R.id=N.id,R.object=N,R.geometry=F,R.material=O,R.materialVariant=X(N),R.groupOrder=L,R.renderOrder=N.renderOrder,R.z=E,R.group=q;return Q++,R}function H(N,F,O,L,E,q,R){if(R.reversedDepth===!0)E=-E;let k=Y(N,F,O,L,E,q);if(O.transmission>0)K.push(k);else if(O.transparent===!0)$.push(k);else Z.push(k)}function G(N,F,O,L,E,q){let R=Y(N,F,O,L,E,q);if(O.transmission>0)K.unshift(R);else if(O.transparent===!0)$.unshift(R);else Z.unshift(R)}function D(N,F){if(Z.length>1)Z.sort(N||gD);if(K.length>1)K.sort(F||KY);if($.length>1)$.sort(F||KY)}function U(){for(let N=Q,F=J.length;N<F;N++){let O=J[N];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Z,transmissive:K,transparent:$,init:W,push:H,unshift:G,finish:U,sort:D}}function pD(){let J=new WeakMap;function Q(K,$){let W=J.get(K),X;if(W===void 0)X=new $Y,J.set(K,[X]);else if($>=W.length)X=new $Y,W.push(X);else X=W[$];return X}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function mD(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={direction:new x,color:new e0};break;case"SpotLight":Z={position:new x,direction:new x,color:new e0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new x,color:new e0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new x,skyColor:new e0,groundColor:new e0};break;case"RectAreaLight":Z={color:new e0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=Z,Z}}}function uD(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var dD=0;function lD(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function cD(J){let Q=new mD,Z=uD(),K={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let G=0;G<9;G++)K.probe.push(new x);let $=new x,W=new M9,X=new M9;function Y(G){let D=0,U=0,N=0;for(let b=0;b<9;b++)K.probe[b].set(0,0,0);let F=0,O=0,L=0,E=0,q=0,R=0,k=0,V=0,A=0,P=0,_=0,I=0,B=0,p=0;G.sort(lD);for(let b=0,m=G.length;b<m;b++){let T=G[b],w=T.color,n=T.intensity,d=T.distance,$0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===xJ)$0=T.shadow.map.texture;else $0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)D+=w.r*n,U+=w.g*n,N+=w.b*n;else if(T.isLightProbe){for(let i=0;i<9;i++)K.probe[i].addScaledVector(T.sh.coefficients[i],n);p++}else if(T.isSunLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize.copy(Z0.mapSize).multiply(Z0.getFrameExtents()),K.sunShadow[O]=X0,K.sunShadowMap[O]=$0;let S0=Z0.getViewportCount();for(let w0=0;w0<S0;w0++)K.sunShadowMatrix[L+w0]=Z0.getMatrix(w0),K.sunShadowCascade[L+w0]=Z0._cascadeData[w0];L+=S0,O++}K.sun[F]=i,F++}else if(T.isDirectionalLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.directionalShadow[E]=X0,K.directionalShadowMap[E]=$0,K.directionalShadowMatrix[E]=T.shadow.matrix,A++}K.directional[E]=i,E++}else if(T.isSpotLight){let i=Q.get(T);i.position.setFromMatrixPosition(T.matrixWorld),i.color.copy(w).multiplyScalar(n),i.distance=d,i.coneCos=Math.cos(T.angle),i.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),i.decay=T.decay,K.spot[R]=i;let Z0=T.shadow;if(T.map){if(K.spotLightMap[I]=T.map,I++,Z0.updateMatrices(T),T.castShadow)B++}if(K.spotLightMatrix[R]=Z0.matrix,T.castShadow){let X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.spotShadow[R]=X0,K.spotShadowMap[R]=$0,_++}R++}else if(T.isRectAreaLight){let i=Q.get(T);i.color.copy(w).multiplyScalar(n),i.halfWidth.set(T.width*0.5,0,0),i.halfHeight.set(0,T.height*0.5,0),K.rectArea[k]=i,k++}else if(T.isPointLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),i.distance=T.distance,i.decay=T.decay,T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,X0.shadowCameraNear=Z0.camera.near,X0.shadowCameraFar=Z0.camera.far,K.pointShadow[q]=X0,K.pointShadowMap[q]=$0,K.pointShadowMatrix[q]=T.shadow.matrix,P++}K.point[q]=i,q++}else if(T.isHemisphereLight){let i=Q.get(T);i.skyColor.copy(T.color).multiplyScalar(n),i.groundColor.copy(T.groundColor).multiplyScalar(n),K.hemi[V]=i,V++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=D0.LTC_FLOAT_1,K.rectAreaLTC2=D0.LTC_FLOAT_2;else K.rectAreaLTC1=D0.LTC_HALF_1,K.rectAreaLTC2=D0.LTC_HALF_2;K.ambient[0]=D,K.ambient[1]=U,K.ambient[2]=N;let j=K.hash;if(j.sunLength!==F||j.directionalLength!==E||j.pointLength!==q||j.spotLength!==R||j.rectAreaLength!==k||j.hemiLength!==V||j.numSunShadows!==O||j.numDirectionalShadows!==A||j.numPointShadows!==P||j.numSpotShadows!==_||j.numSpotMaps!==I||j.numLightProbes!==p)K.sun.length=F,K.directional.length=E,K.spot.length=R,K.rectArea.length=k,K.point.length=q,K.hemi.length=V,K.sunShadow.length=O,K.sunShadowMap.length=O,K.sunShadowMatrix.length=L,K.sunShadowCascade.length=L,K.directionalShadow.length=A,K.directionalShadowMap.length=A,K.directionalShadowMatrix.length=A,K.pointShadow.length=P,K.pointShadowMap.length=P,K.pointShadowMatrix.length=P,K.spotShadow.length=_,K.spotShadowMap.length=_,K.spotLightMatrix.length=_+I-B,K.spotLightMap.length=I,K.numSpotLightShadowsWithMaps=B,K.numLightProbes=p,j.sunLength=F,j.directionalLength=E,j.pointLength=q,j.spotLength=R,j.rectAreaLength=k,j.hemiLength=V,j.numSunShadows=O,j.numDirectionalShadows=A,j.numPointShadows=P,j.numSpotShadows=_,j.numSpotMaps=I,j.numLightProbes=p,K.version=dD++}function H(G,D){let U=0,N=0,F=0,O=0,L=0,E=0,q=D.matrixWorldInverse;for(let R=0,k=G.length;R<k;R++){let V=G[R];if(V.isSunLight){let A=K.sun[U];A.direction.setFromMatrixPosition(V.matrixWorld),A.direction.transformDirection(q),U++}else if(V.isDirectionalLight){let A=K.directional[N];A.direction.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(q),N++}else if(V.isSpotLight){let A=K.spot[O];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(q),A.direction.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(q),O++}else if(V.isRectAreaLight){let A=K.rectArea[L];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(q),X.identity(),W.copy(V.matrixWorld),W.premultiply(q),X.extractRotation(W),A.halfWidth.set(V.width*0.5,0,0),A.halfHeight.set(0,V.height*0.5,0),A.halfWidth.applyMatrix4(X),A.halfHeight.applyMatrix4(X),L++}else if(V.isPointLight){let A=K.point[F];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(q),F++}else if(V.isHemisphereLight){let A=K.hemi[E];A.direction.setFromMatrixPosition(V.matrixWorld),A.direction.transformDirection(q),E++}}}return{setup:Y,setupView:H,state:K}}function WY(J){let Q=new cD(J),Z=[],K=[],$=[];function W(N){U.camera=N,Z.length=0,K.length=0,$.length=0}function X(N){Z.push(N)}function Y(N){K.push(N)}function H(N){$.push(N)}function G(){Q.setup(Z)}function D(N){Q.setupView(Z,N)}let U={lightsArray:Z,shadowsArray:K,lightProbeGridArray:$,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:U,setupLights:G,setupLightsView:D,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function nD(J){let Q=new WeakMap;function Z($,W=0){let X=Q.get($),Y;if(X===void 0)Y=new WY(J),Q.set($,[Y]);else if(W>=X.length)Y=new WY(J),X.push(Y);else Y=X[W];return Y}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var sD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iD=`uniform sampler2D shadow_pass;
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
}`,oD=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],aD=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],XY=new M9,E7=new x,G$=new x;function rD(J,Q,Z){let K=new MQ,$=new x0,W=new x0,X=new Y9,Y=new mK,H=new uK,G={},D=Z.maxTextureSize,U={[C6]:o9,[o9]:C6,[f8]:f8},N=new t9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new x0},radius:{value:4}},vertexShader:sD,fragmentShader:iD}),F=N.clone();F.defines.HORIZONTAL_PASS=1;let O=new O8;O.setAttribute("position",new F8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new W8(O,N),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q7;let q=this.type;this.render=function(P,_,I){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(P.length===0)return;if(this.type===gW)b0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Q7;let B=J.getRenderTarget(),p=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(h8),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let m=q!==this.type;if(m)_.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((w)=>w.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,w=P.length;T<w;T++){let n=P[T],d=n.shadow;if(d===void 0){b0("WebGLShadowMap:",n,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;$.copy(d.mapSize);let $0=d.getFrameExtents();if($.multiply($0),W.copy(d.mapSize),$.x>D||$.y>D){if($.x>D)W.x=Math.floor(D/$0.x),$.x=W.x*$0.x,d.mapSize.x=W.x;if($.y>D)W.y=Math.floor(D/$0.y),$.y=W.y*$0.y,d.mapSize.y=W.y}let i=J.state.buffers.depth.getReversed();if(d.camera._reversedDepth=i,d.map===null||m===!0){if(d.map!==null){if(d.map.depthTexture!==null)d.map.depthTexture.dispose(),d.map.depthTexture=null;d.map.dispose()}if(this.type===V6){if(n.isPointLight){b0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}d.map=new $8($.x,$.y,{format:xJ,type:x8,minFilter:a9,magFilter:a9,generateMipmaps:!1}),d.map.texture.name=n.name+".shadowMap",d.map.depthTexture=new pJ($.x,$.y,WJ),d.map.depthTexture.name=n.name+".shadowMapDepth",d.map.depthTexture.format=fJ,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=VJ,d.map.depthTexture.magFilter=VJ}else{if(n.isPointLight)d.map=new F$($.x),d.map.depthTexture=new xK($.x,CJ);else d.map=new $8($.x,$.y),d.map.depthTexture=new pJ($.x,$.y,CJ);if(d.map.depthTexture.name=n.name+".shadowMap",d.map.depthTexture.format=fJ,this.type===Q7)d.map.depthTexture.compareFunction=i?GQ:UQ,d.map.depthTexture.minFilter=a9,d.map.depthTexture.magFilter=a9;else d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=VJ,d.map.depthTexture.magFilter=VJ}d.camera.updateProjectionMatrix()}if(d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==$.x||d.map.height!==$.y))d.map.setSize($.x,$.y);let Z0=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();if(n.isPointLight!==!0)d.updateMatrices(n,I);for(let X0=0;X0<Z0;X0++){let S0=d.getCamera(X0);if(n.isPointLight){let{camera:w0,matrix:n0}=d,d0=n.distance||w0.far;if(d0!==w0.far)w0.far=d0,w0.updateProjectionMatrix();E7.setFromMatrixPosition(n.matrixWorld),w0.position.copy(E7),G$.copy(w0.position),G$.add(oD[X0]),w0.up.copy(aD[X0]),w0.lookAt(G$),w0.updateMatrixWorld(),n0.makeTranslation(-E7.x,-E7.y,-E7.z),XY.multiplyMatrices(w0.projectionMatrix,w0.matrixWorldInverse),d._frustum.setFromProjectionMatrix(XY,w0.coordinateSystem,w0.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)J.setRenderTarget(d.map,X0),J.clear();else{if(X0===0)J.setRenderTarget(d.map),J.clear();let w0=d.getViewport(X0);X.set(W.x*w0.x,W.y*w0.y,W.x*w0.z,W.y*w0.w),b.viewport(X)}K=d.getFrustum(X0),V(_,I,S0,n,this.type)}if(d.isPointLightShadow!==!0&&this.type===V6)R(d,I);d.needsUpdate=!1}q=this.type,E.needsUpdate=!1,J.setRenderTarget(B,p,j)};function R(P,_){let I=Q.update(L);if(N.defines.VSM_SAMPLES!==P.blurSamples)N.defines.VSM_SAMPLES=P.blurSamples,F.defines.VSM_SAMPLES=P.blurSamples,N.needsUpdate=!0,F.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new $8($.x,$.y,{format:xJ,type:x8});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);N.uniforms.shadow_pass.value=P.map.depthTexture,N.uniforms.resolution.value.set(P.map.width,P.map.height),N.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(_,null,I,N,L,null),F.uniforms.shadow_pass.value=P.mapPass.texture,F.uniforms.resolution.value.set(P.map.width,P.map.height),F.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(_,null,I,F,L,null)}function k(P,_,I,B){let p=null,j=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)p=j;else if(p=I.isPointLight===!0?H:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let b=p.uuid,m=_.uuid,T=G[b];if(T===void 0)T={},G[b]=T;let w=T[m];if(w===void 0)w=p.clone(),T[m]=w,_.addEventListener("dispose",A);p=w}if(p.visible=_.visible,p.wireframe=_.wireframe,B===V6)p.side=_.shadowSide!==null?_.shadowSide:_.side;else p.side=_.shadowSide!==null?_.shadowSide:U[_.side];if(p.alphaMap=_.alphaMap,p.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,p.map=_.map,p.clipShadows=_.clipShadows,p.clippingPlanes=_.clippingPlanes,p.clipIntersection=_.clipIntersection,p.displacementMap=_.displacementMap,p.displacementScale=_.displacementScale,p.displacementBias=_.displacementBias,p.wireframeLinewidth=_.wireframeLinewidth,p.linewidth=_.linewidth,I.isPointLight===!0&&p.isMeshDistanceMaterial===!0){let b=J.properties.get(p);b.light=I}return p}function V(P,_,I,B,p){if(P.visible===!1)return;if(P.layers.test(_.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&p===V6)&&(!P.frustumCulled||P.intersectsFrustum(K))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);let m=Q.update(P),T=P.material;if(Array.isArray(T)){let w=m.groups;for(let n=0,d=w.length;n<d;n++){let $0=w[n],i=T[$0.materialIndex];if(i&&i.visible){let Z0=k(P,i,B,p);P.onBeforeShadow(J,P,_,I,m,Z0,$0),J.renderBufferDirect(I,null,m,Z0,P,$0),P.onAfterShadow(J,P,_,I,m,Z0,$0)}}}else if(T.visible){let w=k(P,T,B,p);P.onBeforeShadow(J,P,_,I,m,w,null),J.renderBufferDirect(I,null,m,w,P,null),P.onAfterShadow(J,P,_,I,m,w,null)}}}let b=P.children;for(let m=0,T=b.length;m<T;m++)V(b[m],_,I,B,p)}function A(P){P.target.removeEventListener("dispose",A);for(let I in G){let B=G[I],p=P.target.uuid;if(p in B)B[p].dispose(),delete B[p]}}}function tD(J,Q){function Z(){let h=!1,E0=new Y9,J0=null,O0=new Y9(0,0,0,0);return{setMask:function(V0){if(J0!==V0&&!h)J.colorMask(V0,V0,V0,V0),J0=V0},setLocked:function(V0){h=V0},setClear:function(V0,Y0,M0,u0,q9){if(q9===!0)V0*=u0,Y0*=u0,M0*=u0;if(E0.set(V0,Y0,M0,u0),O0.equals(E0)===!1)J.clearColor(V0,Y0,M0,u0),O0.copy(E0)},reset:function(){h=!1,J0=null,O0.set(-1,0,0,0)}}}function K(){let h=!1,E0=!1,J0=null,O0=null,V0=null;return{setReversed:function(Y0){if(E0!==Y0){let M0=Q.get("EXT_clip_control");if(Y0)M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.ZERO_TO_ONE_EXT);else M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.NEGATIVE_ONE_TO_ONE_EXT);E0=Y0;let u0=V0;V0=null,this.setClear(u0)}},getReversed:function(){return E0},setTest:function(Y0){if(Y0)u(J.DEPTH_TEST);else a(J.DEPTH_TEST)},setMask:function(Y0){if(J0!==Y0&&!h)J.depthMask(Y0),J0=Y0},setFunc:function(Y0){if(E0)Y0=yX[Y0];if(O0!==Y0){switch(Y0){case $X:J.depthFunc(J.NEVER);break;case WX:J.depthFunc(J.ALWAYS);break;case XX:J.depthFunc(J.LESS);break;case hZ:J.depthFunc(J.LEQUAL);break;case YX:J.depthFunc(J.EQUAL);break;case HX:J.depthFunc(J.GEQUAL);break;case UX:J.depthFunc(J.GREATER);break;case GX:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}O0=Y0}},setLocked:function(Y0){h=Y0},setClear:function(Y0){if(V0!==Y0){if(V0=Y0,E0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){h=!1,J0=null,O0=null,V0=null,E0=!1}}}function $(){let h=!1,E0=null,J0=null,O0=null,V0=null,Y0=null,M0=null,u0=null,q9=null;return{setTest:function(K9){if(!h)if(K9)u(J.STENCIL_TEST);else a(J.STENCIL_TEST)},setMask:function(K9){if(E0!==K9&&!h)J.stencilMask(K9),E0=K9},setFunc:function(K9,j8,r8){if(J0!==K9||O0!==j8||V0!==r8)J.stencilFunc(K9,j8,r8),J0=K9,O0=j8,V0=r8},setOp:function(K9,j8,r8){if(Y0!==K9||M0!==j8||u0!==r8)J.stencilOp(K9,j8,r8),Y0=K9,M0=j8,u0=r8},setLocked:function(K9){h=K9},setClear:function(K9){if(q9!==K9)J.clearStencil(K9),q9=K9},reset:function(){h=!1,E0=null,J0=null,O0=null,V0=null,Y0=null,M0=null,u0=null,q9=null}}}let W=new Z,X=new K,Y=new $,H=new WeakMap,G=new WeakMap,D={},U={},N={},F=new WeakMap,O=[],L=null,E=!1,q=null,R=null,k=null,V=null,A=null,P=null,_=null,I=new e0(0,0,0),B=0,p=!1,j=null,b=null,m=null,T=null,w=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,$0=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)$0=parseFloat(/^WebGL (\d)/.exec(i)[1]),d=$0>=1;else if(i.indexOf("OpenGL ES")!==-1)$0=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),d=$0>=2;let Z0=null,X0={},S0=J.getParameter(J.SCISSOR_BOX),w0=J.getParameter(J.VIEWPORT),n0=new Y9().fromArray(S0),d0=new Y9().fromArray(w0);function S(h,E0,J0,O0){let V0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(h,Y0),J.texParameteri(h,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(h,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let M0=0;M0<J0;M0++)if(h===J.TEXTURE_3D||h===J.TEXTURE_2D_ARRAY)J.texImage3D(E0,0,J.RGBA,1,1,O0,0,J.RGBA,J.UNSIGNED_BYTE,V0);else J.texImage2D(E0+M0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,V0);return Y0}let g={};g[J.TEXTURE_2D]=S(J.TEXTURE_2D,J.TEXTURE_2D,1),g[J.TEXTURE_CUBE_MAP]=S(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),g[J.TEXTURE_2D_ARRAY]=S(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),g[J.TEXTURE_3D]=S(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),u(J.DEPTH_TEST),X.setFunc(hZ),i0(!1),r0(vZ),u(J.CULL_FACE),m0(h8);function u(h){if(D[h]!==!0)J.enable(h),D[h]=!0}function a(h){if(D[h]!==!1)J.disable(h),D[h]=!1}function Q0(h,E0){if(N[h]!==E0){if(J.bindFramebuffer(h,E0),N[h]=E0,h===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=E0;if(h===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=E0;return!0}return!1}function r(h,E0){let J0=O,O0=!1;if(h){if(J0=F.get(E0),J0===void 0)J0=[],F.set(E0,J0);let V0=h.textures;if(J0.length!==V0.length||J0[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,M0=V0.length;Y0<M0;Y0++)J0[Y0]=J.COLOR_ATTACHMENT0+Y0;J0.length=V0.length,O0=!0}}else if(J0[0]!==J.BACK)J0[0]=J.BACK,O0=!0;if(O0)J.drawBuffers(J0)}function z0(h){if(L!==h)return J.useProgram(h),L=h,!0;return!1}let q0={[B6]:J.FUNC_ADD,[pW]:J.FUNC_SUBTRACT,[mW]:J.FUNC_REVERSE_SUBTRACT};q0[uW]=J.MIN,q0[t7]=J.MAX;let y0={[dW]:J.ZERO,[lW]:J.ONE,[cW]:J.SRC_COLOR,[sW]:J.SRC_ALPHA,[eW]:J.SRC_ALPHA_SATURATE,[rW]:J.DST_COLOR,[oW]:J.DST_ALPHA,[nW]:J.ONE_MINUS_SRC_COLOR,[iW]:J.ONE_MINUS_SRC_ALPHA,[tW]:J.ONE_MINUS_DST_COLOR,[aW]:J.ONE_MINUS_DST_ALPHA,[JX]:J.CONSTANT_COLOR,[QX]:J.ONE_MINUS_CONSTANT_COLOR,[ZX]:J.CONSTANT_ALPHA,[KX]:J.ONE_MINUS_CONSTANT_ALPHA};function m0(h,E0,J0,O0,V0,Y0,M0,u0,q9,K9){if(h===h8){if(E===!0)a(J.BLEND),E=!1;return}if(E===!1)u(J.BLEND),E=!0;if(h!==r7){if(h!==q||K9!==p){if(R!==B6||A!==B6)J.blendEquation(J.FUNC_ADD),R=B6,A=B6;if(K9)switch(h){case Z7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case bZ:J.blendFunc(J.ONE,J.ONE);break;case yZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case fZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:f0("WebGLState: Invalid blending: ",h);break}else switch(h){case Z7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case bZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case yZ:f0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fZ:f0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:f0("WebGLState: Invalid blending: ",h);break}k=null,V=null,P=null,_=null,I.set(0,0,0),B=0,q=h,p=K9}return}if(V0=V0||E0,Y0=Y0||J0,M0=M0||O0,E0!==R||V0!==A)J.blendEquationSeparate(q0[E0],q0[V0]),R=E0,A=V0;if(J0!==k||O0!==V||Y0!==P||M0!==_)J.blendFuncSeparate(y0[J0],y0[O0],y0[Y0],y0[M0]),k=J0,V=O0,P=Y0,_=M0;if(u0.equals(I)===!1||q9!==B)J.blendColor(u0.r,u0.g,u0.b,q9),I.copy(u0),B=q9;q=h,p=!1}function h0(h,E0){h.side===f8?a(J.CULL_FACE):u(J.CULL_FACE);let J0=h.side===o9;if(E0)J0=!J0;i0(J0),h.blending===Z7&&h.transparent===!1?m0(h8):m0(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),X.setFunc(h.depthFunc),X.setTest(h.depthTest),X.setMask(h.depthWrite),W.setMask(h.colorWrite);let O0=h.stencilWrite;if(Y.setTest(O0),O0)Y.setMask(h.stencilWriteMask),Y.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),Y.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass);E9(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?u(J.SAMPLE_ALPHA_TO_COVERAGE):a(J.SAMPLE_ALPHA_TO_COVERAGE)}function i0(h){if(j!==h){if(h)J.frontFace(J.CW);else J.frontFace(J.CCW);j=h}}function r0(h){if(h!==hW){if(u(J.CULL_FACE),h!==b)if(h===vZ)J.cullFace(J.BACK);else if(h===xW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a(J.CULL_FACE);b=h}function V9(h){if(h!==m){if(d)J.lineWidth(h);m=h}}function E9(h,E0,J0){if(h){if(u(J.POLYGON_OFFSET_FILL),T!==E0||w!==J0){if(T=E0,w=J0,X.getReversed())E0=-E0;J.polygonOffset(E0,J0)}}else a(J.POLYGON_OFFSET_FILL)}function O9(h){if(h)u(J.SCISSOR_TEST);else a(J.SCISSOR_TEST)}function v(h){if(h===void 0)h=J.TEXTURE0+n-1;if(Z0!==h)J.activeTexture(h),Z0=h}function z9(h,E0,J0){if(J0===void 0)if(Z0===null)J0=J.TEXTURE0+n-1;else J0=Z0;let O0=X0[J0];if(O0===void 0)O0={type:void 0,texture:void 0},X0[J0]=O0;if(O0.type!==h||O0.texture!==E0){if(Z0!==J0)J.activeTexture(J0),Z0=J0;J.bindTexture(h,E0||g[h]),O0.type=h,O0.texture=E0}}function J9(){let h=X0[Z0];if(h!==void 0&&h.type!==void 0)J.bindTexture(h.type,null),h.type=void 0,h.texture=void 0}function G9(){try{J.compressedTexImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function M(){try{J.texSubImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function y(){try{J.texSubImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function W0(){try{J.compressedTexSubImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function G0(){try{J.texStorage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function F0(){try{J.texStorage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function t(){try{J.texImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function K0(){try{J.texImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function R0(h){if(U[h]!==void 0)return U[h];else return J.getParameter(h)}function A0(h,E0){if(U[h]!==E0)J.pixelStorei(h,E0),U[h]=E0}function N0(h){if(n0.equals(h)===!1)J.scissor(h.x,h.y,h.z,h.w),n0.copy(h)}function U0(h){if(d0.equals(h)===!1)J.viewport(h.x,h.y,h.z,h.w),d0.copy(h)}function j0(h,E0){let J0=G.get(E0);if(J0===void 0)J0=new WeakMap,G.set(E0,J0);let O0=J0.get(h);if(O0===void 0)O0=J.getUniformBlockIndex(E0,h.name),J0.set(h,O0)}function v0(h,E0){let O0=G.get(E0).get(h);if(H.get(E0)!==O0)J.uniformBlockBinding(E0,O0,h.__bindingPointIndex),H.set(E0,O0)}function Q9(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),D={},U={},Z0=null,X0={},N={},F=new WeakMap,O=[],L=null,E=!1,q=null,R=null,k=null,V=null,A=null,P=null,_=null,I=new e0(0,0,0),B=0,p=!1,j=null,b=null,m=null,T=null,w=null,n0.set(0,0,J.canvas.width,J.canvas.height),d0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:u,disable:a,bindFramebuffer:Q0,drawBuffers:r,useProgram:z0,setBlending:m0,setMaterial:h0,setFlipSided:i0,setCullFace:r0,setLineWidth:V9,setPolygonOffset:E9,setScissorTest:O9,activeTexture:v,bindTexture:z9,unbindTexture:J9,compressedTexImage2D:G9,compressedTexImage3D:z,texImage2D:t,texImage3D:K0,pixelStorei:A0,getParameter:R0,updateUBOMapping:j0,uniformBlockBinding:v0,texStorage2D:G0,texStorage3D:F0,texSubImage2D:M,texSubImage3D:y,compressedTexSubImage2D:s,compressedTexSubImage3D:W0,scissor:N0,viewport:U0,reset:Q9}}function eD(J,Q,Z,K,$,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new x0,D=new WeakMap,U=new Set,N,F=new WeakMap,O=!1;try{O=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function L(z,M){return O?new OffscreenCanvas(z,M):e6("canvas")}function E(z,M,y){let s=1,W0=G9(z);if(W0.width>y||W0.height>y)s=y/Math.max(W0.width,W0.height);if(s<1)if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&z instanceof VideoFrame){let G0=Math.floor(s*W0.width),F0=Math.floor(s*W0.height);if(N===void 0)N=L(G0,F0);let t=M?L(G0,F0):N;return t.width=G0,t.height=F0,t.getContext("2d").drawImage(z,0,0,G0,F0),b0("WebGLRenderer: Texture has been resized from ("+W0.width+"x"+W0.height+") to ("+G0+"x"+F0+")."),t}else{if("data"in z)b0("WebGLRenderer: Image in DataTexture is too big ("+W0.width+"x"+W0.height+").");return z}return z}function q(z){return z.generateMipmaps}function R(z){J.generateMipmap(z)}function k(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(z,M,y,s,W0,G0=!1){if(z!==null){if(J[z]!==void 0)return J[z];b0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let F0;if(s){if(F0=Q.get("EXT_texture_norm16"),!F0)b0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let t=M;if(M===J.RED){if(y===J.FLOAT)t=J.R32F;if(y===J.HALF_FLOAT)t=J.R16F;if(y===J.UNSIGNED_BYTE)t=J.R8;if(y===J.UNSIGNED_SHORT&&F0)t=F0.R16_EXT;if(y===J.SHORT&&F0)t=F0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.R8UI;if(y===J.UNSIGNED_SHORT)t=J.R16UI;if(y===J.UNSIGNED_INT)t=J.R32UI;if(y===J.BYTE)t=J.R8I;if(y===J.SHORT)t=J.R16I;if(y===J.INT)t=J.R32I}if(M===J.RG){if(y===J.FLOAT)t=J.RG32F;if(y===J.HALF_FLOAT)t=J.RG16F;if(y===J.UNSIGNED_BYTE)t=J.RG8;if(y===J.UNSIGNED_SHORT&&F0)t=F0.RG16_EXT;if(y===J.SHORT&&F0)t=F0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.RG8UI;if(y===J.UNSIGNED_SHORT)t=J.RG16UI;if(y===J.UNSIGNED_INT)t=J.RG32UI;if(y===J.BYTE)t=J.RG8I;if(y===J.SHORT)t=J.RG16I;if(y===J.INT)t=J.RG32I}if(M===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.RGB8UI;if(y===J.UNSIGNED_SHORT)t=J.RGB16UI;if(y===J.UNSIGNED_INT)t=J.RGB32UI;if(y===J.BYTE)t=J.RGB8I;if(y===J.SHORT)t=J.RGB16I;if(y===J.INT)t=J.RGB32I}if(M===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)t=J.RGBA16UI;if(y===J.UNSIGNED_INT)t=J.RGBA32UI;if(y===J.BYTE)t=J.RGBA8I;if(y===J.SHORT)t=J.RGBA16I;if(y===J.INT)t=J.RGBA32I}if(M===J.RGB){if(y===J.UNSIGNED_SHORT&&F0)t=F0.RGB16_EXT;if(y===J.SHORT&&F0)t=F0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)t=J.R11F_G11F_B10F}if(M===J.RGBA){let K0=G0?TK:o0.getTransfer(W0);if(y===J.FLOAT)t=J.RGBA32F;if(y===J.HALF_FLOAT)t=J.RGBA16F;if(y===J.UNSIGNED_BYTE)t=K0===D9?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&F0)t=F0.RGBA16_EXT;if(y===J.SHORT&&F0)t=F0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function A(z,M){let y;if(z){if(M===null||M===CJ||M===z6)y=J.DEPTH24_STENCIL8;else if(M===WJ)y=J.DEPTH32F_STENCIL8;else if(M===W7)y=J.DEPTH24_STENCIL8,b0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===CJ||M===z6)y=J.DEPTH_COMPONENT24;else if(M===WJ)y=J.DEPTH_COMPONENT32F;else if(M===W7)y=J.DEPTH_COMPONENT16;return y}function P(z,M){if(q(z)===!0||z.isFramebufferTexture&&z.minFilter!==VJ&&z.minFilter!==a9)return Math.log2(Math.max(M.width,M.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return M.mipmaps.length;else return 1}function _(z){let M=z.target;if(M.removeEventListener("dispose",_),B(M),M.isVideoTexture)D.delete(M);if(M.isHTMLTexture)U.delete(M)}function I(z){let M=z.target;M.removeEventListener("dispose",I),j(M)}function B(z){let M=K.get(z);if(M.__webglInit===void 0)return;let y=z.source,s=F.get(y);if(s){let W0=s[M.__cacheKey];if(W0.usedTimes--,W0.usedTimes===0)p(z);if(Object.keys(s).length===0)F.delete(y)}K.remove(z)}function p(z){let M=K.get(z);J.deleteTexture(M.__webglTexture);let y=z.source,s=F.get(y);delete s[M.__cacheKey],X.memory.textures--}function j(z){let M=K.get(z);if(z.depthTexture)z.depthTexture.dispose(),K.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(M.__webglFramebuffer[s]))for(let W0=0;W0<M.__webglFramebuffer[s].length;W0++)J.deleteFramebuffer(M.__webglFramebuffer[s][W0]);else J.deleteFramebuffer(M.__webglFramebuffer[s]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[s])}else{if(Array.isArray(M.__webglFramebuffer))for(let s=0;s<M.__webglFramebuffer.length;s++)J.deleteFramebuffer(M.__webglFramebuffer[s]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let s=0;s<M.__webglColorRenderbuffer.length;s++)if(M.__webglColorRenderbuffer[s])J.deleteRenderbuffer(M.__webglColorRenderbuffer[s])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let y=z.textures;for(let s=0,W0=y.length;s<W0;s++){let G0=K.get(y[s]);if(G0.__webglTexture)J.deleteTexture(G0.__webglTexture),X.memory.textures--;K.remove(y[s])}K.remove(z)}let b=0;function m(){b=0}function T(){return b}function w(z){b=z}function n(){let z=b;if(z>=$.maxTextures)b0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+$.maxTextures);return b+=1,z}function d(z){let M=[];return M.push(z.wrapS),M.push(z.wrapT),M.push(z.wrapR||0),M.push(z.magFilter),M.push(z.minFilter),M.push(z.anisotropy),M.push(z.internalFormat),M.push(z.format),M.push(z.type),M.push(z.generateMipmaps),M.push(z.premultiplyAlpha),M.push(z.flipY),M.push(z.unpackAlignment),M.push(z.colorSpace),M.join()}function $0(z,M){let y=K.get(z);if(z.isVideoTexture)z9(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&y.__version!==z.version){let s=z.image;if(s===null)b0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)b0("WebGLRenderer: Texture marked for update but image is incomplete");else{a(y,z,M);return}}else if(z.isExternalTexture)y.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+M)}function i(z,M){let y=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&y.__version!==z.version){a(y,z,M);return}else if(z.isExternalTexture)y.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+M)}function Z0(z,M){let y=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&y.__version!==z.version){a(y,z,M);return}Z.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+M)}function X0(z,M){let y=K.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&y.__version!==z.version){Q0(y,z,M);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+M)}let S0={[FX]:J.REPEAT,[QQ]:J.CLAMP_TO_EDGE,[EX]:J.MIRRORED_REPEAT},w0={[VJ]:J.NEAREST,[OX]:J.NEAREST_MIPMAP_NEAREST,[$7]:J.NEAREST_MIPMAP_LINEAR,[a9]:J.LINEAR,[ZQ]:J.LINEAR_MIPMAP_NEAREST,[yJ]:J.LINEAR_MIPMAP_LINEAR},n0={[PX]:J.NEVER,[SX]:J.ALWAYS,[kX]:J.LESS,[UQ]:J.LEQUAL,[_X]:J.EQUAL,[GQ]:J.GEQUAL,[TX]:J.GREATER,[wX]:J.NOTEQUAL};function d0(z,M){if(M.type===WJ&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===a9||M.magFilter===ZQ||M.magFilter===$7||M.magFilter===yJ||M.minFilter===a9||M.minFilter===ZQ||M.minFilter===$7||M.minFilter===yJ))b0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,S0[M.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,S0[M.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,S0[M.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,w0[M.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,w0[M.minFilter]),M.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,n0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===VJ)return;if(M.minFilter!==$7&&M.minFilter!==yJ)return;if(M.type===WJ&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||K.get(M).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,$.getMaxAnisotropy())),K.get(M).__currentAnisotropy=M.anisotropy}}}function S(z,M){let y=!1;if(z.__webglInit===void 0)z.__webglInit=!0,M.addEventListener("dispose",_);let s=M.source,W0=F.get(s);if(W0===void 0)W0={},F.set(s,W0);let G0=d(M);if(G0!==z.__cacheKey){if(W0[G0]===void 0)W0[G0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,y=!0;W0[G0].usedTimes++;let F0=W0[z.__cacheKey];if(F0!==void 0){if(W0[z.__cacheKey].usedTimes--,F0.usedTimes===0)p(M)}z.__cacheKey=G0,z.__webglTexture=W0[G0].texture}return y}function g(z,M,y){return Math.floor(Math.floor(z/y)/M)}function u(z,M,y,s){let G0=z.updateRanges;if(G0.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,y,s,M.data);else{G0.sort((A0,N0)=>A0.start-N0.start);let F0=0;for(let A0=1;A0<G0.length;A0++){let N0=G0[F0],U0=G0[A0],j0=N0.start+N0.count,v0=g(U0.start,M.width,4),Q9=g(N0.start,M.width,4);if(U0.start<=j0+1&&v0===Q9&&g(U0.start+U0.count-1,M.width,4)===v0)N0.count=Math.max(N0.count,U0.start+U0.count-N0.start);else++F0,G0[F0]=U0}G0.length=F0+1;let t=Z.getParameter(J.UNPACK_ROW_LENGTH),K0=Z.getParameter(J.UNPACK_SKIP_PIXELS),R0=Z.getParameter(J.UNPACK_SKIP_ROWS);Z.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let A0=0,N0=G0.length;A0<N0;A0++){let U0=G0[A0],j0=Math.floor(U0.start/4),v0=Math.ceil(U0.count/4),Q9=j0%M.width,h=Math.floor(j0/M.width),E0=v0,J0=1;Z.pixelStorei(J.UNPACK_SKIP_PIXELS,Q9),Z.pixelStorei(J.UNPACK_SKIP_ROWS,h),Z.texSubImage2D(J.TEXTURE_2D,0,Q9,h,E0,1,y,s,M.data)}z.clearUpdateRanges(),Z.pixelStorei(J.UNPACK_ROW_LENGTH,t),Z.pixelStorei(J.UNPACK_SKIP_PIXELS,K0),Z.pixelStorei(J.UNPACK_SKIP_ROWS,R0)}}function a(z,M,y){let s=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)s=J.TEXTURE_3D;let W0=S(z,M),G0=M.source;Z.bindTexture(s,z.__webglTexture,J.TEXTURE0+y);let F0=K.get(G0);if(G0.version!==F0.__version||W0===!0){if(Z.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap!=="undefined"&&M.image instanceof ImageBitmap)===!1){let J0=o0.getPrimaries(o0.workingColorSpace),O0=M.colorSpace===gJ?null:o0.getPrimaries(M.colorSpace),V0=M.colorSpace===gJ||J0===O0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,V0)}Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let K0=E(M.image,!1,$.maxTextureSize);K0=J9(M,K0);let R0=W.convert(M.format,M.colorSpace),A0=W.convert(M.type),N0=V(M.internalFormat,R0,A0,M.normalized,M.colorSpace,M.isVideoTexture);d0(s,M);let U0,j0=M.mipmaps,v0=M.isVideoTexture!==!0,Q9=F0.__version===void 0||W0===!0,h=G0.dataReady,E0=P(M,K0);if(M.isDepthTexture){if(N0=A(M.format===hJ,M.type),Q9)if(v0)Z.texStorage2D(J.TEXTURE_2D,1,N0,K0.width,K0.height);else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,R0,A0,null)}else if(M.isDataTexture)if(j0.length>0){if(v0&&Q9)Z.texStorage2D(J.TEXTURE_2D,E0,N0,j0[0].width,j0[0].height);for(let J0=0,O0=j0.length;J0<O0;J0++)if(U0=j0[J0],v0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,U0.width,U0.height,R0,A0,U0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,U0.width,U0.height,0,R0,A0,U0.data);M.generateMipmaps=!1}else if(v0){if(Q9)Z.texStorage2D(J.TEXTURE_2D,E0,N0,K0.width,K0.height);if(h)u(M,K0,R0,A0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,R0,A0,K0.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(v0&&Q9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,E0,N0,j0[0].width,j0[0].height,K0.depth);for(let J0=0,O0=j0.length;J0<O0;J0++)if(U0=j0[J0],M.format!==g8)if(R0!==null)if(v0){if(h)if(M.layerUpdates.size>0){let V0=$$(U0.width,U0.height,M.format,M.type);for(let Y0 of M.layerUpdates){let M0=U0.data.subarray(Y0*V0/U0.data.BYTES_PER_ELEMENT,(Y0+1)*V0/U0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,Y0,U0.width,U0.height,1,R0,M0)}}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,U0.width,U0.height,K0.depth,R0,U0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,J0,N0,U0.width,U0.height,K0.depth,0,U0.data,0,0);else b0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v0){if(h)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,U0.width,U0.height,K0.depth,R0,A0,U0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,J0,N0,U0.width,U0.height,K0.depth,0,R0,A0,U0.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(v0&&Q9)Z.texStorage2D(J.TEXTURE_2D,E0,N0,j0[0].width,j0[0].height);for(let J0=0,O0=j0.length;J0<O0;J0++)if(U0=j0[J0],M.format!==g8)if(R0!==null)if(v0){if(h)Z.compressedTexSubImage2D(J.TEXTURE_2D,J0,0,0,U0.width,U0.height,R0,U0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,J0,N0,U0.width,U0.height,0,U0.data);else b0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,U0.width,U0.height,R0,A0,U0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,U0.width,U0.height,0,R0,A0,U0.data)}else if(M.isDataArrayTexture)if(v0){if(Q9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,E0,N0,K0.width,K0.height,K0.depth);if(h)if(M.layerUpdates.size>0){let J0=$$(K0.width,K0.height,M.format,M.type);for(let O0 of M.layerUpdates){let V0=K0.data.subarray(O0*J0/K0.data.BYTES_PER_ELEMENT,(O0+1)*J0/K0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,O0,K0.width,K0.height,1,R0,A0,V0)}M.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,K0.width,K0.height,K0.depth,R0,A0,K0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,N0,K0.width,K0.height,K0.depth,0,R0,A0,K0.data);else if(M.isData3DTexture)if(v0){if(Q9)Z.texStorage3D(J.TEXTURE_3D,E0,N0,K0.width,K0.height,K0.depth);if(h)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,K0.width,K0.height,K0.depth,R0,A0,K0.data)}else Z.texImage3D(J.TEXTURE_3D,0,N0,K0.width,K0.height,K0.depth,0,R0,A0,K0.data);else if(M.isFramebufferTexture){if(Q9)if(v0)Z.texStorage2D(J.TEXTURE_2D,E0,N0,K0.width,K0.height);else{let{width:J0,height:O0}=K0;for(let V0=0;V0<E0;V0++)Z.texImage2D(J.TEXTURE_2D,V0,N0,J0,O0,0,R0,A0,null),J0>>=1,O0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let J0=J.canvas;if(!J0.hasAttribute("layoutsubtree"))J0.setAttribute("layoutsubtree","true");if(K0.parentNode!==J0){J0.appendChild(K0),U.add(M),J0.onpaint=(O0)=>{let V0=O0.changedElements;for(let Y0 of U)if(V0.includes(Y0.image))Y0.needsUpdate=!0},J0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,K0);else{let{RGBA:V0,RGBA:Y0,UNSIGNED_BYTE:M0}=J;J.texElementImage2D(J.TEXTURE_2D,0,V0,Y0,M0,K0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(j0.length>0){if(v0&&Q9){let J0=G9(j0[0]);Z.texStorage2D(J.TEXTURE_2D,E0,N0,J0.width,J0.height)}for(let J0=0,O0=j0.length;J0<O0;J0++)if(U0=j0[J0],v0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,R0,A0,U0)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,R0,A0,U0);M.generateMipmaps=!1}else if(v0){if(Q9){let J0=G9(K0);Z.texStorage2D(J.TEXTURE_2D,E0,N0,J0.width,J0.height)}if(h)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,R0,A0,K0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,R0,A0,K0);if(q(M))R(s);if(F0.__version=G0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function Q0(z,M,y){if(M.image.length!==6)return;let s=S(z,M),W0=M.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+y);let G0=K.get(W0);if(W0.version!==G0.__version||s===!0){Z.activeTexture(J.TEXTURE0+y);let F0=o0.getPrimaries(o0.workingColorSpace),t=M.colorSpace===gJ?null:o0.getPrimaries(M.colorSpace),K0=M.colorSpace===gJ||F0===t?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,K0);let R0=M.isCompressedTexture||M.image[0].isCompressedTexture,A0=M.image[0]&&M.image[0].isDataTexture,N0=[];for(let Y0=0;Y0<6;Y0++){if(!R0&&!A0)N0[Y0]=E(M.image[Y0],!0,$.maxCubemapSize);else N0[Y0]=A0?M.image[Y0].image:M.image[Y0];N0[Y0]=J9(M,N0[Y0])}let U0=N0[0],j0=W.convert(M.format,M.colorSpace),v0=W.convert(M.type),Q9=V(M.internalFormat,j0,v0,M.normalized,M.colorSpace),h=M.isVideoTexture!==!0,E0=G0.__version===void 0||s===!0,J0=W0.dataReady,O0=P(M,U0);d0(J.TEXTURE_CUBE_MAP,M);let V0;if(R0){if(h&&E0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,O0,Q9,U0.width,U0.height);for(let Y0=0;Y0<6;Y0++){V0=N0[Y0].mipmaps;for(let M0=0;M0<V0.length;M0++){let u0=V0[M0];if(M.format!==g8)if(j0!==null)if(h){if(J0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0,0,0,u0.width,u0.height,j0,u0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0,Q9,u0.width,u0.height,0,u0.data);else b0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0,0,0,u0.width,u0.height,j0,v0,u0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0,Q9,u0.width,u0.height,0,j0,v0,u0.data)}}}else{if(V0=M.mipmaps,h&&E0){if(V0.length>0)O0++;let Y0=G9(N0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,O0,Q9,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(A0){if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,N0[Y0].width,N0[Y0].height,j0,v0,N0[Y0].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,Q9,N0[Y0].width,N0[Y0].height,0,j0,v0,N0[Y0].data);for(let M0=0;M0<V0.length;M0++){let q9=V0[M0].image[Y0].image;if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0+1,0,0,q9.width,q9.height,j0,v0,q9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0+1,Q9,q9.width,q9.height,0,j0,v0,q9.data)}}else{if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,j0,v0,N0[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,Q9,j0,v0,N0[Y0]);for(let M0=0;M0<V0.length;M0++){let u0=V0[M0];if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0+1,0,0,j0,v0,u0.image[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0+1,Q9,j0,v0,u0.image[Y0])}}}if(q(M))R(J.TEXTURE_CUBE_MAP);if(G0.__version=W0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function r(z,M,y,s,W0,G0){let F0=W.convert(y.format,y.colorSpace),t=W.convert(y.type),K0=V(y.internalFormat,F0,t,y.normalized,y.colorSpace),R0=K.get(M),A0=K.get(y);if(A0.__renderTarget=M,!R0.__hasExternalTextures){let N0=Math.max(1,M.width>>G0),U0=Math.max(1,M.height>>G0);if(W0===J.TEXTURE_3D||W0===J.TEXTURE_2D_ARRAY)Z.texImage3D(W0,G0,K0,N0,U0,M.depth,0,F0,t,null);else Z.texImage2D(W0,G0,K0,N0,U0,0,F0,t,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,z),v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,W0,A0.__webglTexture,0,O9(M));else if(W0===J.TEXTURE_2D||W0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&W0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,W0,A0.__webglTexture,G0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function z0(z,M,y){if(J.bindRenderbuffer(J.RENDERBUFFER,z),M.depthBuffer){let s=M.depthTexture,W0=s&&s.isDepthTexture?s.type:null,G0=A(M.stencilBuffer,W0),F0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O9(M),G0,M.width,M.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,O9(M),G0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,G0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,F0,J.RENDERBUFFER,z)}else{let s=M.textures;for(let W0=0;W0<s.length;W0++){let G0=s[W0],F0=W.convert(G0.format,G0.colorSpace),t=W.convert(G0.type),K0=V(G0.internalFormat,F0,t,G0.normalized,G0.colorSpace);if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O9(M),K0,M.width,M.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,O9(M),K0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function q0(z,M,y){let s=M.isWebGLCubeRenderTarget===!0;if(Z.bindFramebuffer(J.FRAMEBUFFER,z),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W0=K.get(M.depthTexture);if(W0.__renderTarget=M,!W0.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;if(s){if(W0.__webglInit===void 0)W0.__webglInit=!0,M.depthTexture.addEventListener("dispose",_);if(W0.__webglTexture===void 0){W0.__webglTexture=J.createTexture(),Z.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),d0(J.TEXTURE_CUBE_MAP,M.depthTexture);let R0=W.convert(M.depthTexture.format),A0=W.convert(M.depthTexture.type),N0;if(M.depthTexture.format===fJ)N0=J.DEPTH_COMPONENT24;else if(M.depthTexture.format===hJ)N0=J.DEPTH24_STENCIL8;for(let U0=0;U0<6;U0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,0,N0,M.width,M.height,0,R0,A0,null)}}else $0(M.depthTexture,0);let G0=W0.__webglTexture,F0=O9(M),t=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,K0=M.depthTexture.format===hJ?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===fJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,G0,0,F0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,G0,0);else if(M.depthTexture.format===hJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,G0,0,F0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,G0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function y0(z){let M=K.get(z),y=z.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==z.depthTexture){let s=z.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(s){let W0=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,s.removeEventListener("dispose",W0)};s.addEventListener("dispose",W0),M.__depthDisposeCallback=W0}M.__boundDepthTexture=s}if(z.depthTexture&&!M.__autoAllocateDepthBuffer)if(y)for(let s=0;s<6;s++)q0(M.__webglFramebuffer[s],z,s);else{let s=z.texture.mipmaps;if(s&&s.length>0)q0(M.__webglFramebuffer[0],z,0);else q0(M.__webglFramebuffer,z,0)}else if(y){M.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[s]),M.__webglDepthbuffer[s]===void 0)M.__webglDepthbuffer[s]=J.createRenderbuffer(),z0(M.__webglDepthbuffer[s],z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=M.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,G0)}}else{let s=z.texture.mipmaps;if(s&&s.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),z0(M.__webglDepthbuffer,z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,G0)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function m0(z,M,y){let s=K.get(z);if(M!==void 0)r(s.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)y0(z)}function h0(z){let M=z.texture,y=K.get(z),s=K.get(M);z.addEventListener("dispose",I);let W0=z.textures,G0=z.isWebGLCubeRenderTarget===!0,F0=W0.length>1;if(!F0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=M.version,X.memory.textures++}if(G0){y.__webglFramebuffer=[];for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer[t]=[];for(let K0=0;K0<M.mipmaps.length;K0++)y.__webglFramebuffer[t][K0]=J.createFramebuffer()}else y.__webglFramebuffer[t]=J.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer=[];for(let t=0;t<M.mipmaps.length;t++)y.__webglFramebuffer[t]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(F0)for(let t=0,K0=W0.length;t<K0;t++){let R0=K.get(W0[t]);if(R0.__webglTexture===void 0)R0.__webglTexture=J.createTexture(),X.memory.textures++}if(z.samples>0&&v(z)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let t=0;t<W0.length;t++){let K0=W0[t];y.__webglColorRenderbuffer[t]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[t]);let R0=W.convert(K0.format,K0.colorSpace),A0=W.convert(K0.type),N0=V(K0.internalFormat,R0,A0,K0.normalized,K0.colorSpace,z.isXRRenderTarget===!0),U0=O9(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,U0,N0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+t,J.RENDERBUFFER,y.__webglColorRenderbuffer[t])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),z0(y.__webglDepthRenderbuffer,z,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(G0){Z.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),d0(J.TEXTURE_CUBE_MAP,M);for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(y.__webglFramebuffer[t][K0],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,K0);else r(y.__webglFramebuffer[t],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0);if(q(M))R(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(F0){for(let t=0,K0=W0.length;t<K0;t++){let R0=W0[t],A0=K.get(R0),N0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)N0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(N0,A0.__webglTexture),d0(N0,R0),r(y.__webglFramebuffer,z,R0,J.COLOR_ATTACHMENT0+t,N0,0),q(R0))R(N0)}Z.unbindTexture()}else{let t=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)t=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(t,s.__webglTexture),d0(t,M),M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(y.__webglFramebuffer[K0],z,M,J.COLOR_ATTACHMENT0,t,K0);else r(y.__webglFramebuffer,z,M,J.COLOR_ATTACHMENT0,t,0);if(q(M))R(t);Z.unbindTexture()}if(z.depthBuffer)y0(z)}function i0(z){let M=z.textures;for(let y=0,s=M.length;y<s;y++){let W0=M[y];if(q(W0)){let G0=k(z),F0=K.get(W0).__webglTexture;Z.bindTexture(G0,F0),R(G0),Z.unbindTexture()}}}let r0=[],V9=[];function E9(z){if(z.samples>0){if(v(z)===!1){let{textures:M,width:y,height:s}=z,W0=J.COLOR_BUFFER_BIT,G0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,F0=K.get(z),t=M.length>1;if(t)for(let R0=0;R0<M.length;R0++)Z.bindFramebuffer(J.FRAMEBUFFER,F0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,F0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,F0.__webglMultisampledFramebuffer);let K0=z.texture.mipmaps;if(K0&&K0.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglFramebuffer);for(let R0=0;R0<M.length;R0++){if(z.resolveDepthBuffer){if(z.depthBuffer)W0|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)W0|=J.STENCIL_BUFFER_BIT}if(t){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,F0.__webglColorRenderbuffer[R0]);let A0=K.get(M[R0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,A0,0)}if(J.blitFramebuffer(0,0,y,s,0,0,y,s,W0,J.NEAREST),H===!0){if(r0.length=0,V9.length=0,r0.push(J.COLOR_ATTACHMENT0+R0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)r0.push(G0),V9.push(G0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,V9);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,r0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),t)for(let R0=0;R0<M.length;R0++){Z.bindFramebuffer(J.FRAMEBUFFER,F0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.RENDERBUFFER,F0.__webglColorRenderbuffer[R0]);let A0=K.get(M[R0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,F0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.TEXTURE_2D,A0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&H){let M=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function O9(z){return Math.min($.maxSamples,z.samples)}function v(z){let M=K.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function z9(z){let M=X.render.frame;if(D.get(z)!==M)D.set(z,M),z.update()}function J9(z,M){let{colorSpace:y,format:s,type:W0}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return M;if(y!==_K&&y!==gJ)if(o0.getTransfer(y)===D9){if(s!==g8||W0!==z8)b0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else f0("WebGLTextures: Unsupported texture color space:",y);return M}function G9(z){if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement)G.width=z.naturalWidth||z.width,G.height=z.naturalHeight||z.height;else if(typeof VideoFrame!=="undefined"&&z instanceof VideoFrame)G.width=z.displayWidth,G.height=z.displayHeight;else G.width=z.width,G.height=z.height;return G}this.allocateTextureUnit=n,this.resetTextureUnits=m,this.getTextureUnits=T,this.setTextureUnits=w,this.setTexture2D=$0,this.setTexture2DArray=i,this.setTexture3D=Z0,this.setTextureCube=X0,this.rebindTextures=m0,this.setupRenderTarget=h0,this.updateRenderTargetMipmap=i0,this.updateMultisampleRenderTarget=E9,this.setupDepthRenderbuffer=y0,this.setupFrameBufferTexture=r,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return Z.buffers.depth.getReversed()}}function Jq(J,Q){function Z(K,$=gJ){let W,X=o0.getTransfer($);if(K===z8)return J.UNSIGNED_BYTE;if(K===nZ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===sZ)return J.UNSIGNED_SHORT_5_5_5_1;if(K===LX)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===IX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===RX)return J.BYTE;if(K===MX)return J.SHORT;if(K===W7)return J.UNSIGNED_SHORT;if(K===cZ)return J.INT;if(K===CJ)return J.UNSIGNED_INT;if(K===WJ)return J.FLOAT;if(K===x8)return J.HALF_FLOAT;if(K===VX)return J.ALPHA;if(K===CX)return J.RGB;if(K===g8)return J.RGBA;if(K===fJ)return J.DEPTH_COMPONENT;if(K===hJ)return J.DEPTH_STENCIL;if(K===BX)return J.RED;if(K===iZ)return J.RED_INTEGER;if(K===xJ)return J.RG;if(K===oZ)return J.RG_INTEGER;if(K===aZ)return J.RGBA_INTEGER;if(K===KQ||K===$Q||K===WQ||K===XQ)if(X===D9)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(K===KQ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===$Q)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===WQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===XQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(K===KQ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===$Q)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===WQ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===XQ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===rZ||K===tZ||K===eZ||K===JK)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(K===rZ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===tZ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===eZ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===JK)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===QK||K===ZK||K===KK||K===$K||K===WK||K===YQ||K===XK)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(K===QK||K===ZK)return X===D9?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(K===KK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(K===$K)return W.COMPRESSED_R11_EAC;if(K===WK)return W.COMPRESSED_SIGNED_R11_EAC;if(K===YQ)return W.COMPRESSED_RG11_EAC;if(K===XK)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===YK||K===HK||K===UK||K===GK||K===NK||K===DK||K===qK||K===FK||K===EK||K===OK||K===RK||K===MK||K===LK||K===IK)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(K===YK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===HK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===UK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===GK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===NK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===DK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===qK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===FK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===EK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===OK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===RK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===MK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===LK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===IK)return X===D9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===VK||K===CK||K===BK)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(K===VK)return X===D9?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===CK)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===BK)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===AK||K===zK||K===HQ||K===PK)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(K===AK)return W.COMPRESSED_RED_RGTC1_EXT;if(K===zK)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===HQ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===PK)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===z6)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:Z}}var Qq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zq=`
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

}`;class MY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new IQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new t9({vertexShader:Qq,fragmentShader:Zq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new W8(new N7(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LY extends p8{constructor(J,Q){super();let Z=this,K=null,$=1,W=null,X="local-floor",Y=1,H=null,G=null,D=null,U=null,N=null,F=null,O=typeof XRWebGLBinding!=="undefined",L=new MY,E={},q=Q.getContextAttributes(),R=null,k=null,V=[],A=[],P=new x0,_=null,I=null,B=new l9;B.viewport=new Y9;let p=new l9;p.viewport=new Y9;let j=[B,p],b=new J$,m=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let g=V[S];if(g===void 0)g=new H7,V[S]=g;return g.getTargetRaySpace()},this.getControllerGrip=function(S){let g=V[S];if(g===void 0)g=new H7,V[S]=g;return g.getGripSpace()},this.getHand=function(S){let g=V[S];if(g===void 0)g=new H7,V[S]=g;return g.getHandSpace()};function w(S){let g=A.indexOf(S.inputSource);if(g===-1)return;let u=V[g];if(u!==void 0)u.update(S.inputSource,S.frame,H||W),u.dispatchEvent({type:S.type,data:S.inputSource})}function n(){K.removeEventListener("select",w),K.removeEventListener("selectstart",w),K.removeEventListener("selectend",w),K.removeEventListener("squeeze",w),K.removeEventListener("squeezestart",w),K.removeEventListener("squeezeend",w),K.removeEventListener("end",n),K.removeEventListener("inputsourceschange",d);for(let S=0;S<V.length;S++){let g=A[S];if(g===null)continue;A[S]=null,V[S].disconnect(g)}m=null,T=null,L.reset();for(let S in E)delete E[S];if(J.setRenderTarget(R),N=null,U=null,D=null,K=null,k=null,d0.stop(),Z.isPresenting=!1,J.setPixelRatio(_),J.setSize(P.width,P.height,!1),I!==null){let S=I.camera;S.fov=I.fov,S.zoom=I.zoom,S.updateProjectionMatrix(),I=null}Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){if($=S,Z.isPresenting===!0)b0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){if(X=S,Z.isPresenting===!0)b0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(S){H=S},this.getBaseLayer=function(){return U!==null?U:N},this.getBinding=function(){if(D===null&&O)D=new XRWebGLBinding(K,Q);return D},this.getFrame=function(){return F},this.getSession=function(){return K},this.setSession=async function(S){if(K=S,K!==null){if(R=J.getRenderTarget(),K.addEventListener("select",w),K.addEventListener("selectstart",w),K.addEventListener("selectend",w),K.addEventListener("squeeze",w),K.addEventListener("squeezestart",w),K.addEventListener("squeezeend",w),K.addEventListener("end",n),K.addEventListener("inputsourceschange",d),q.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(P),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let u={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:$};N=new XRWebGLLayer(K,Q,u),K.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),k=new $8(N.framebufferWidth,N.framebufferHeight,{format:g8,type:z8,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let u=null,a=null,Q0=null;if(q.depth)Q0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,u=q.stencil?hJ:fJ,a=q.stencil?z6:CJ;let r={colorFormat:Q.RGBA8,depthFormat:Q0,scaleFactor:$};D=this.getBinding(),U=D.createProjectionLayer(r),K.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),k=new $8(U.textureWidth,U.textureHeight,{format:g8,type:z8,depthTexture:new pJ(U.textureWidth,U.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,u),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1,resolveStencilBuffer:U.ignoreDepthValues===!1,storeMultisampledDepthBuffer:U.ignoreDepthValues===!1,storeMultisampledStencilBuffer:U.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await K.requestReferenceSpace(X),d0.setContext(K),d0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function d(S){for(let g=0;g<S.removed.length;g++){let u=S.removed[g],a=A.indexOf(u);if(a>=0)A[a]=null,V[a].disconnect(u)}for(let g=0;g<S.added.length;g++){let u=S.added[g],a=A.indexOf(u);if(a===-1){for(let r=0;r<V.length;r++)if(r>=A.length){A.push(u),a=r;break}else if(A[r]===null){A[r]=u,a=r;break}if(a===-1)break}let Q0=V[a];if(Q0)Q0.connect(u)}}let $0=new x,i=new x;function Z0(S,g,u){$0.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(u.matrixWorld);let a=$0.distanceTo(i),Q0=g.projectionMatrix.elements,r=u.projectionMatrix.elements,z0=Q0[14]/(Q0[10]-1),q0=Q0[14]/(Q0[10]+1),y0=(Q0[9]+1)/Q0[5],m0=(Q0[9]-1)/Q0[5],h0=(Q0[8]-1)/Q0[0],i0=(r[8]+1)/r[0],r0=z0*h0,V9=z0*i0,E9=a/(-h0+i0),O9=E9*-h0;if(g.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(O9),S.translateZ(E9),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),Q0[10]===-1)S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse);else{let v=z0+E9,z9=q0+E9,J9=r0-O9,G9=V9+(a-O9),z=y0*q0/z9*v,M=m0*q0/z9*v;S.projectionMatrix.makePerspective(J9,G9,z,M,v,z9),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function X0(S,g){if(g===null)S.matrixWorld.copy(S.matrix);else S.matrixWorld.multiplyMatrices(g.matrixWorld,S.matrix);S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(K===null)return;let{near:g,far:u}=S;if(L.texture!==null){if(L.depthNear>0)g=L.depthNear;if(L.depthFar>0)u=L.depthFar}if(b.near=p.near=B.near=g,b.far=p.far=B.far=u,m!==b.near||T!==b.far)K.updateRenderState({depthNear:b.near,depthFar:b.far}),m=b.near,T=b.far;b.layers.mask=S.layers.mask|6,B.layers.mask=b.layers.mask&-5,p.layers.mask=b.layers.mask&-3;let a=S.parent,Q0=b.cameras;X0(b,a);for(let r=0;r<Q0.length;r++)X0(Q0[r],a);if(Q0.length===2)Z0(b,B,p);else b.projectionMatrix.copy(B.projectionMatrix);if(I===null&&S.isPerspectiveCamera)I={camera:S,fov:S.fov,zoom:S.zoom};S0(S,b,a)};function S0(S,g,u){if(u===null)S.matrix.copy(g.matrixWorld);else S.matrix.copy(u.matrixWorld),S.matrix.invert(),S.matrix.multiply(g.matrixWorld);if(S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse),S.isPerspectiveCamera)S.fov=I6*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(U===null&&N===null)return;return Y},this.setFoveation=function(S){if(Y=S,U!==null)U.fixedFoveation=S;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=S},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(b)},this.getCameraTexture=function(S){return E[S]};let w0=null;function n0(S,g){if(G=g.getViewerPose(H||W),F=g,G!==null){let u=G.views;if(N!==null)J.setRenderTargetFramebuffer(k,N.framebuffer),J.setRenderTarget(k);let a=!1;if(u.length!==b.cameras.length)b.cameras.length=0,a=!0;for(let q0=0;q0<u.length;q0++){let y0=u[q0],m0=null;if(N!==null)m0=N.getViewport(y0);else{let i0=D.getViewSubImage(U,y0);if(m0=i0.viewport,q0===0)J.setRenderTargetTextures(k,i0.colorTexture,i0.depthStencilTexture),J.setRenderTarget(k)}let h0=j[q0];if(h0===void 0)h0=new l9,h0.layers.enable(q0),h0.viewport=new Y9,j[q0]=h0;if(h0.matrix.fromArray(y0.transform.matrix),h0.matrix.decompose(h0.position,h0.quaternion,h0.scale),h0.projectionMatrix.fromArray(y0.projectionMatrix),h0.projectionMatrixInverse.copy(h0.projectionMatrix).invert(),h0.viewport.set(m0.x,m0.y,m0.width,m0.height),q0===0)b.matrix.copy(h0.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(a===!0)b.cameras.push(h0)}let Q0=K.enabledFeatures;if(Q0&&Q0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&O){D=Z.getBinding();let q0=D.getDepthInformation(u[0]);if(q0&&q0.isValid&&q0.texture)L.init(q0,K.renderState)}if(Q0&&Q0.includes("camera-access")&&O){J.state.unbindTexture(),D=Z.getBinding();for(let q0=0;q0<u.length;q0++){let y0=u[q0].camera;if(y0){let m0=E[y0];if(!m0)m0=new IQ,E[y0]=m0;let h0=D.getCameraImage(y0);m0.sourceTexture=h0}}}}for(let u=0;u<V.length;u++){let a=A[u],Q0=V[u];if(a!==null&&Q0!==void 0)Q0.update(a,g,H||W)}if(w0)w0(S,g);if(g.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:g});F=null}let d0=new YY;d0.setAnimationLoop(n0),this.setAnimationLoop=function(S){w0=S},this.dispose=function(){}}}var Kq=new M9,IY=new g0;IY.set(-1,0,0,0,1,0,0,0,1);function $q(J,Q){function Z(E,q){if(E.matrixAutoUpdate===!0)E.updateMatrix();q.value.copy(E.matrix)}function K(E,q){if(q.color.getRGB(E.fogColor.value,gK(J)),q.isFog)E.fogNear.value=q.near,E.fogFar.value=q.far;else if(q.isFogExp2)E.fogDensity.value=q.density}function $(E,q,R,k,V){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)W(E,q);else if(q.isMeshLambertMaterial){if(W(E,q),q.envMap)E.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)W(E,q),U(E,q);else if(q.isMeshPhongMaterial){if(W(E,q),D(E,q),q.envMap)E.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(W(E,q),N(E,q),q.isMeshPhysicalMaterial)F(E,q,V)}else if(q.isMeshMatcapMaterial)W(E,q),O(E,q);else if(q.isMeshDepthMaterial)W(E,q);else if(q.isMeshDistanceMaterial)W(E,q),L(E,q);else if(q.isMeshNormalMaterial)W(E,q);else if(q.isLineBasicMaterial){if(X(E,q),q.isLineDashedMaterial)Y(E,q)}else if(q.isPointsMaterial)H(E,q,R,k);else if(q.isSpriteMaterial)G(E,q);else if(q.isShadowMaterial)E.color.value.copy(q.color),E.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function W(E,q){if(E.opacity.value=q.opacity,q.color)E.diffuse.value.copy(q.color);if(q.emissive)E.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)E.map.value=q.map,Z(q.map,E.mapTransform);if(q.alphaMap)E.alphaMap.value=q.alphaMap,Z(q.alphaMap,E.alphaMapTransform);if(q.bumpMap){if(E.bumpMap.value=q.bumpMap,Z(q.bumpMap,E.bumpMapTransform),E.bumpScale.value=q.bumpScale,q.side===o9)E.bumpScale.value*=-1}if(q.normalMap){if(E.normalMap.value=q.normalMap,Z(q.normalMap,E.normalMapTransform),E.normalScale.value.copy(q.normalScale),q.side===o9)E.normalScale.value.negate()}if(q.displacementMap)E.displacementMap.value=q.displacementMap,Z(q.displacementMap,E.displacementMapTransform),E.displacementScale.value=q.displacementScale,E.displacementBias.value=q.displacementBias;if(q.emissiveMap)E.emissiveMap.value=q.emissiveMap,Z(q.emissiveMap,E.emissiveMapTransform);if(q.specularMap)E.specularMap.value=q.specularMap,Z(q.specularMap,E.specularMapTransform);if(q.alphaTest>0)E.alphaTest.value=q.alphaTest;let R=Q.get(q),k=R.envMap,V=R.envMapRotation;if(k){if(E.envMap.value=k,E.envMapRotation.value.setFromMatrix4(Kq.makeRotationFromEuler(V)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(IY);E.reflectivity.value=q.reflectivity,E.ior.value=q.ior,E.refractionRatio.value=q.refractionRatio}if(q.lightMap)E.lightMap.value=q.lightMap,E.lightMapIntensity.value=q.lightMapIntensity,Z(q.lightMap,E.lightMapTransform);if(q.aoMap)E.aoMap.value=q.aoMap,E.aoMapIntensity.value=q.aoMapIntensity,Z(q.aoMap,E.aoMapTransform)}function X(E,q){if(E.diffuse.value.copy(q.color),E.opacity.value=q.opacity,q.map)E.map.value=q.map,Z(q.map,E.mapTransform)}function Y(E,q){E.dashSize.value=q.dashSize,E.totalSize.value=q.dashSize+q.gapSize,E.scale.value=q.scale}function H(E,q,R,k){if(E.diffuse.value.copy(q.color),E.opacity.value=q.opacity,E.size.value=q.size*R,E.scale.value=k*0.5,q.map)E.map.value=q.map,Z(q.map,E.uvTransform);if(q.alphaMap)E.alphaMap.value=q.alphaMap,Z(q.alphaMap,E.alphaMapTransform);if(q.alphaTest>0)E.alphaTest.value=q.alphaTest}function G(E,q){if(E.diffuse.value.copy(q.color),E.opacity.value=q.opacity,E.rotation.value=q.rotation,q.map)E.map.value=q.map,Z(q.map,E.mapTransform);if(q.alphaMap)E.alphaMap.value=q.alphaMap,Z(q.alphaMap,E.alphaMapTransform);if(q.alphaTest>0)E.alphaTest.value=q.alphaTest}function D(E,q){E.specular.value.copy(q.specular),E.shininess.value=Math.max(q.shininess,0.0001)}function U(E,q){if(q.gradientMap)E.gradientMap.value=q.gradientMap}function N(E,q){if(E.metalness.value=q.metalness,q.metalnessMap)E.metalnessMap.value=q.metalnessMap,Z(q.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=q.roughness,q.roughnessMap)E.roughnessMap.value=q.roughnessMap,Z(q.roughnessMap,E.roughnessMapTransform);if(q.envMap)E.envMapIntensity.value=q.envMapIntensity}function F(E,q,R){if(E.ior.value=q.ior,q.sheen>0){if(E.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),E.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)E.sheenColorMap.value=q.sheenColorMap,Z(q.sheenColorMap,E.sheenColorMapTransform);if(q.sheenRoughnessMap)E.sheenRoughnessMap.value=q.sheenRoughnessMap,Z(q.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(E.clearcoat.value=q.clearcoat,E.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)E.clearcoatMap.value=q.clearcoatMap,Z(q.clearcoatMap,E.clearcoatMapTransform);if(q.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,Z(q.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(E.clearcoatNormalMap.value=q.clearcoatNormalMap,Z(q.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===o9)E.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)E.dispersion.value=q.dispersion;if(q.retroreflectivity>0)E.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(E.iridescence.value=q.iridescence,E.iridescenceIOR.value=q.iridescenceIOR,E.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)E.iridescenceMap.value=q.iridescenceMap,Z(q.iridescenceMap,E.iridescenceMapTransform);if(q.iridescenceThicknessMap)E.iridescenceThicknessMap.value=q.iridescenceThicknessMap,Z(q.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(q.transmission>0){if(E.transmission.value=q.transmission,E.transmissionSamplerMap.value=R.texture,E.transmissionSamplerSize.value.set(R.width,R.height),q.transmissionMap)E.transmissionMap.value=q.transmissionMap,Z(q.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=q.thickness,q.thicknessMap)E.thicknessMap.value=q.thicknessMap,Z(q.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=q.attenuationDistance,E.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(E.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)E.anisotropyMap.value=q.anisotropyMap,Z(q.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=q.specularIntensity,E.specularColor.value.copy(q.specularColor),q.specularColorMap)E.specularColorMap.value=q.specularColorMap,Z(q.specularColorMap,E.specularColorMapTransform);if(q.specularIntensityMap)E.specularIntensityMap.value=q.specularIntensityMap,Z(q.specularIntensityMap,E.specularIntensityMapTransform)}function O(E,q){if(q.matcap)E.matcap.value=q.matcap}function L(E,q){let R=Q.get(q).light;E.referencePosition.value.setFromMatrixPosition(R.matrixWorld),E.nearDistance.value=R.shadow.camera.near,E.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:$}}function Wq(J,Q,Z,K){let $={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,A){let P=A.program;K.uniformBlockBinding(V,P)}function G(V,A){let P=$[V.id];if(P===void 0)E(V),P=D(V),$[V.id]=P,V.addEventListener("dispose",R);let _=A.program;K.updateUBOMapping(V,_);let I=Q.render.frame;if(W[V.id]!==I)N(V),W[V.id]=I}function D(V){let A=U();V.__bindingPointIndex=A;let P=J.createBuffer(),_=V.__size,I=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,_,I),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,P),P}function U(){for(let V=0;V<Y;V++)if(X.indexOf(V)===-1)return X.push(V),V;return f0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(V){let A=$[V.id],P=V.uniforms,_=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let I=0,B=P.length;I<B;I++){let p=P[I];if(Array.isArray(p))for(let j=0,b=p.length;j<b;j++)F(p[j],I,j,_);else F(p,I,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(V,A,P,_){if(L(V,A,P,_)===!0){let{__offset:I,value:B}=V;if(Array.isArray(B)){let p=0;for(let j=0;j<B.length;j++){let b=B[j],m=q(b);if(O(b,V.__data,p),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))p+=m.storage/Float32Array.BYTES_PER_ELEMENT}}else O(B,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,I,V.__data)}}function O(V,A,P){if(typeof V==="number"||typeof V==="boolean")A[0]=V;else if(V.isMatrix3)A[0]=V.elements[0],A[1]=V.elements[1],A[2]=V.elements[2],A[3]=0,A[4]=V.elements[3],A[5]=V.elements[4],A[6]=V.elements[5],A[7]=0,A[8]=V.elements[6],A[9]=V.elements[7],A[10]=V.elements[8],A[11]=0;else if(ArrayBuffer.isView(V))A.set(new V.constructor(V.buffer,V.byteOffset,A.length));else V.toArray(A,P)}function L(V,A,P,_){let I=V.value,B=A+"_"+P;if(_[B]===void 0){if(typeof I==="number"||typeof I==="boolean")_[B]=I;else if(ArrayBuffer.isView(I))_[B]=I.slice();else _[B]=I.clone();return!0}else{let p=_[B];if(typeof I==="number"||typeof I==="boolean"){if(p!==I)return _[B]=I,!0}else if(ArrayBuffer.isView(I))return!0;else if(p.equals(I)===!1)return p.copy(I),!0}return!1}function E(V){let A=V.uniforms,P=0,_=16;for(let B=0,p=A.length;B<p;B++){let j=Array.isArray(A[B])?A[B]:[A[B]];for(let b=0,m=j.length;b<m;b++){let T=j[b],w=Array.isArray(T.value)?T.value:[T.value];for(let n=0,d=w.length;n<d;n++){let $0=w[n],i=q($0),Z0=P%_,X0=Z0%i.boundary,S0=Z0+X0;if(P+=X0,S0!==0&&_-S0<i.storage)P+=_-S0;T.__data=new Float32Array(i.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=P,P+=i.storage}}}let I=P%_;if(I>0)P+=_-I;return V.__size=P,V.__cache={},this}function q(V){let A={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")A.boundary=4,A.storage=4;else if(V.isVector2)A.boundary=8,A.storage=8;else if(V.isVector3||V.isColor)A.boundary=16,A.storage=12;else if(V.isVector4)A.boundary=16,A.storage=16;else if(V.isMatrix3)A.boundary=48,A.storage=48;else if(V.isMatrix4)A.boundary=64,A.storage=64;else if(V.isTexture)b0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))A.boundary=16,A.storage=V.byteLength;else b0("WebGLRenderer: Unsupported uniform value type.",V);return A}function R(V){let A=V.target;A.removeEventListener("dispose",R);let P=X.indexOf(A.__bindingPointIndex);X.splice(P,1),J.deleteBuffer($[A.id]),delete $[A.id],delete W[A.id]}function k(){for(let V in $)J.deleteBuffer($[V]);X=[],$={},W={}}return{bind:H,update:G,dispose:k}}var Xq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),u8=null;function Yq(){if(u8===null)u8=new hK(Xq,16,16,xJ,x8),u8.name="DFG_LUT",u8.minFilter=a9,u8.magFilter=a9,u8.wrapS=QQ,u8.wrapT=QQ,u8.generateMipmaps=!1,u8.needsUpdate=!0;return u8}class E${constructor(J={}){let{canvas:Q=jX(),context:Z=null,depth:K=!0,stencil:$=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:G="default",failIfMajorPerformanceCaveat:D=!1,reversedDepthBuffer:U=!1,outputBufferType:N=z8}=J;this.isWebGLRenderer=!0;let F;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=Z.getContextAttributes().alpha}else F=W;let O=N,L=new Set([aZ,oZ,iZ]),E=new Set([z8,CJ,W7,z6,nZ,sZ]),q=new Uint32Array(4),R=new Int32Array(4),k=new x,V=null,A=null,P=[],_=[],I=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=A8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,p=!1,j=null,b=null,m=null,T=null;this._outputColorSpace=zX;let w=0,n=0,d=null,$0=-1,i=null,Z0=new Y9,X0=new Y9,S0=null,w0=new e0(0),n0=0,d0=Q.width,S=Q.height,g=1,u=null,a=null,Q0=new Y9(0,0,d0,S),r=new Y9(0,0,d0,S),z0=!1,q0=new MQ,y0=!1,m0=!1,h0=new M9,i0=new x,r0=new Y9,V9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},E9=!1;function O9(){return d===null?g:1}let v=Z;function z9(C,f){return Q.getContext(C,f)}let J9,G9,z,M,y,s,W0,G0,F0,t,K0,R0,A0,N0,U0,j0,v0,Q9,h,E0,J0,O0,V0;try{let C={alpha:!0,depth:K,stencil:$,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:G,failIfMajorPerformanceCaveat:D};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${fW}`);if(Q.addEventListener("webglcontextlost",u0,!1),Q.addEventListener("webglcontextrestored",q9,!1),Q.addEventListener("webglcontextcreationerror",K9,!1),v===null){if(v=z9("webgl2",C),v===null)if(z9("webgl2"))throw new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y0()}catch(C){throw Q.removeEventListener("webglcontextlost",u0,!1),Q.removeEventListener("webglcontextrestored",q9,!1),Q.removeEventListener("webglcontextcreationerror",K9,!1),f0("WebGLRenderer: "+C.message),C}function Y0(){if(J9=new FN(v),J9.init(),J0=new Jq(v,J9),G9=new $N(v,J9,J,J0),z=new tD(v,J9),G9.reversedDepthBuffer&&U)z.buffers.depth.setReversed(!0);b=v.createFramebuffer(),m=v.createFramebuffer(),T=v.createFramebuffer(),M=new RN(v),y=new xD,s=new eD(v,J9,z,y,G9,J0,M),W0=new qN(B),G0=new LU(v),O0=new ZN(v,G0),F0=new EN(v,G0,M,O0),t=new LN(v,F0,G0,O0,M),Q9=new MN(v,G9,s),U0=new WN(y),K0=new hD(B,W0,J9,G9,O0,U0),R0=new $q(B,y),A0=new pD,N0=new nD(J9),v0=new QN(B,W0,z,t,F,Y),j0=new rD(B,t,G9),V0=new Wq(v,M,G9,z),h=new KN(v,J9,M),E0=new ON(v,J9,M),M.programs=K0.programs,B.capabilities=G9,B.extensions=J9,B.properties=y,B.renderLists=A0,B.shadowMap=j0,B.state=z,B.info=M}if(O!==z8)I=new VN(O,Q.width,Q.height,X,K,$);let M0=new LY(B,v);this.xr=M0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let C=J9.get("WEBGL_lose_context");if(C)C.loseContext()},this.forceContextRestore=function(){let C=J9.get("WEBGL_lose_context");if(C)C.restoreContext()},this.getPixelRatio=function(){return g},this.setPixelRatio=function(C){if(C===void 0)return;g=C,this.setSize(d0,S,!1)},this.getSize=function(C){return C.set(d0,S)},this.setSize=function(C,f,o=!0){if(M0.isPresenting){b0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(d0=C,S=f,Q.width=Math.floor(C*g),Q.height=Math.floor(f*g),o===!0)Q.style.width=C+"px",Q.style.height=f+"px";if(I!==null)I.setSize(Q.width,Q.height);this.setViewport(0,0,C,f)},this.getDrawingBufferSize=function(C){return C.set(d0*g,S*g).floor()},this.setDrawingBufferSize=function(C,f,o){d0=C,S=f,g=o,Q.width=Math.floor(C*o),Q.height=Math.floor(f*o),this.setViewport(0,0,C,f)},this.setEffects=function(C){if(O===z8){f0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let f=0;f<C.length;f++)if(C[f].isOutputPass===!0){b0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z0)},this.getViewport=function(C){return C.copy(Q0)},this.setViewport=function(C,f,o,l){if(C.isVector4)Q0.set(C.x,C.y,C.z,C.w);else Q0.set(C,f,o,l);z.viewport(Z0.copy(Q0).multiplyScalar(g).round())},this.getScissor=function(C){return C.copy(r)},this.setScissor=function(C,f,o,l){if(C.isVector4)r.set(C.x,C.y,C.z,C.w);else r.set(C,f,o,l);z.scissor(X0.copy(r).multiplyScalar(g).round())},this.getScissorTest=function(){return z0},this.setScissorTest=function(C){z.setScissorTest(z0=C)},this.setOpaqueSort=function(C){u=C},this.setTransparentSort=function(C){a=C},this.getClearColor=function(C){return C.copy(v0.getClearColor())},this.setClearColor=function(){v0.setClearColor(...arguments)},this.getClearAlpha=function(){return v0.getClearAlpha()},this.setClearAlpha=function(){v0.setClearAlpha(...arguments)},this.clear=function(C=!0,f=!0,o=!0){let l=0;if(C){let c=!1;if(d!==null){let I0=d.texture.format;c=L.has(I0)}if(c){let I0=d.texture.type,B0=E.has(I0),L0=v0.getClearColor(),P0=v0.getClearAlpha(),_0=L0.r,l0=L0.g,s0=L0.b;if(B0)q[0]=_0,q[1]=l0,q[2]=s0,q[3]=P0,v.clearBufferuiv(v.COLOR,0,q);else R[0]=_0,R[1]=l0,R[2]=s0,R[3]=P0,v.clearBufferiv(v.COLOR,0,R)}else l|=v.COLOR_BUFFER_BIT}if(f)l|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(o)l|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(l!==0)v.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){Q.removeEventListener("webglcontextlost",u0,!1),Q.removeEventListener("webglcontextrestored",q9,!1),Q.removeEventListener("webglcontextcreationerror",K9,!1),v0.dispose(),A0.dispose(),N0.dispose(),y.dispose(),W0.dispose(),t.dispose(),O0.dispose(),V0.dispose(),K0.dispose(),M0.dispose(),M0.removeEventListener("sessionstart",WW),M0.removeEventListener("sessionend",XW),_J.stop()};function u0(C){C.preventDefault(),J7("WebGLRenderer: Context Lost."),p=!0}function q9(){J7("WebGLRenderer: Context Restored."),p=!1;let C=M.autoReset,f=j0.enabled,o=j0.autoUpdate,l=j0.needsUpdate,c=j0.type;Y0(),M.autoReset=C,j0.enabled=f,j0.autoUpdate=o,j0.needsUpdate=l,j0.type=c}function K9(C){f0("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function j8(C){let f=C.target;f.removeEventListener("dispose",j8),r8(f)}function r8(C){EH(C),y.remove(C)}function EH(C){let f=y.get(C).programs;if(f!==void 0){if(f.forEach(function(o){K0.releaseProgram(o)}),C.isShaderMaterial)K0.releaseShaderCache(C)}}this.renderBufferDirect=function(C,f,o,l,c,I0){if(f===null)f=V9;let B0=c.isMesh&&c.matrixWorld.determinantAffine()<0,L0=MH(C,f,o,l,c);z.setMaterial(l,B0);let P0=o.index,_0=1;if(l.wireframe===!0){if(P0=F0.getWireframeAttribute(o),P0===void 0)return;_0=2}let l0=o.drawRange,s0=o.attributes.position,k0=l0.start*_0,$9=(l0.start+l0.count)*_0;if(I0!==null)k0=Math.max(k0,I0.start*_0),$9=Math.min($9,(I0.start+I0.count)*_0);if(P0!==null)k0=Math.max(k0,0),$9=Math.min($9,P0.count);else if(s0!==void 0&&s0!==null)k0=Math.max(k0,0),$9=Math.min($9,s0.count);let C9=$9-k0;if(C9<0||C9===1/0)return;O0.setup(c,l,L0,o,P0);let R9,N9=h;if(P0!==null)R9=G0.get(P0),N9=E0,N9.setIndex(R9);if(c.isMesh)if(l.wireframe===!0)z.setLineWidth(l.wireframeLinewidth*O9()),N9.setMode(v.LINES);else N9.setMode(v.TRIANGLES);else if(c.isLine){let f9=l.linewidth;if(f9===void 0)f9=1;if(z.setLineWidth(f9*O9()),c.isLineSegments)N9.setMode(v.LINES);else if(c.isLineLoop)N9.setMode(v.LINE_LOOP);else N9.setMode(v.LINE_STRIP)}else if(c.isPoints)N9.setMode(v.POINTS);else if(c.isSprite)N9.setMode(v.TRIANGLES);if(c.isBatchedMesh)if(!J9.get("WEBGL_multi_draw")){let{_multiDrawStarts:f9,_multiDrawCounts:C0,_multiDrawCount:u9}=c,t0=P0?G0.get(P0).bytesPerElement:1,G8=y.get(l).currentProgram.getUniforms();for(let v8=0;v8<u9;v8++)G8.setValue(v,"_gl_DrawID",v8),N9.render(f9[v8]/t0,C0[v8])}else N9.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else if(c.isInstancedMesh)N9.renderInstances(k0,C9,c.count);else if(o.isInstancedBufferGeometry){let f9=o._maxInstanceCount!==void 0?o._maxInstanceCount:1/0,C0=Math.min(o.instanceCount,f9);N9.renderInstances(k0,C9,C0)}else N9.render(k0,C9)};function $W(C,f,o,l){if(j!==null&&C.isNodeMaterial)j.setObject(l,C);if(y0===!0)U0.setState(C,o,!1);if(C.transparent===!0&&C.side===f8&&C.forceSinglePass===!1)C.side=o9,C.needsUpdate=!0,w7(C,f,l),C.side=C6,C.needsUpdate=!0,w7(C,f,l),C.side=f8;else w7(C,f,l)}this.compile=function(C,f,o=null){if(o===null)o=C;if(j!==null)j.renderStart(C,f,o);if(A=N0.get(o),A.init(f),_.push(A),o.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}}),C!==o)C.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}});if(A.setupLights(),j!==null)j.updateLights(A.state.lightsArray);if(m0=this.localClippingEnabled,y0=U0.init(this.clippingPlanes,m0),y0===!0)U0.setGlobalState(this.clippingPlanes,f);if(j!==null)j0.render(A.state.shadowsArray,o,f);let l=new Set;if(C.traverse(function(c){if(!(c.isMesh||c.isPoints||c.isLine||c.isSprite))return;let I0=c.material;if(I0)if(Array.isArray(I0))for(let B0=0;B0<I0.length;B0++){let L0=I0[B0];$W(L0,o,f,c),l.add(L0)}else $W(I0,o,f,c),l.add(I0)}),A=_.pop(),j!==null)j.renderEnd();return l},this.compileAsync=function(C,f,o=null){let l=this.compile(C,f,o);return new Promise((c)=>{function I0(){if(l.forEach(function(B0){let P0=y.get(B0).currentProgram;if(P0===void 0||P0.isReady())l.delete(B0)}),l.size===0){c(C);return}setTimeout(I0,10)}if(J9.get("KHR_parallel_shader_compile")!==null)I0();else setTimeout(I0,10)})};let GZ=null;function OH(C){if(GZ)GZ(C)}function WW(){_J.stop()}function XW(){_J.start()}let _J=new YY;if(_J.setAnimationLoop(OH),typeof self!=="undefined")_J.setContext(self);this.setAnimationLoop=function(C){GZ=C,M0.setAnimationLoop(C),C===null?_J.stop():_J.start()},M0.addEventListener("sessionstart",WW),M0.addEventListener("sessionend",XW),this.render=function(C,f){if(f!==void 0&&f.isCamera!==!0){f0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(j!==null)j.renderStart(C,f);let o=M0.enabled===!0&&M0.isPresenting===!0,l=I!==null&&(d===null||o)&&I.begin(B,d);if(C.matrixWorldAutoUpdate===!0)C.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(M0.enabled===!0&&M0.isPresenting===!0&&(I===null||I.isCompositing()===!1)){if(M0.cameraAutoUpdate===!0)M0.updateCamera(f);f=M0.getCamera()}if(C.isScene===!0)C.onBeforeRender(B,C,f,d);if(A=N0.get(C,_.length),A.init(f),A.state.textureUnits=s.getTextureUnits(),_.push(A),h0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),q0.setFromProjectionMatrix(h0,SK,f.reversedDepth),m0=this.localClippingEnabled,y0=U0.init(this.clippingPlanes,m0),V=A0.get(C,P.length),V.init(),P.push(V),M0.enabled===!0&&M0.isPresenting===!0){let B0=B.xr.getDepthSensingMesh();if(B0!==null)NZ(B0,f,-1/0,B.sortObjects)}if(NZ(C,f,0,B.sortObjects),V.finish(),j!==null)j.updateLights(A.state.lightsArray);if(B.sortObjects===!0)V.sort(u,a);if(E9=M0.enabled===!1||M0.isPresenting===!1||M0.hasDepthSensing()===!1,E9)v0.addToRenderList(V,C);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(y0===!0)U0.beginShadows();let c=A.state.shadowsArray;if(j0.render(c,C,f),y0===!0)U0.endShadows();if((l&&I.hasRenderPass())===!1){let{opaque:B0,transmissive:L0}=V;if(A.setupLights(),f.isArrayCamera){let P0=f.cameras;if(L0.length>0)for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0];HW(B0,L0,C,s0)}if(E9)v0.render(C);for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0];YW(V,C,s0,s0.viewport)}}else{if(L0.length>0)HW(B0,L0,C,f);if(E9)v0.render(C);YW(V,C,f)}}if(d!==null&&n===0)s.updateMultisampleRenderTarget(d),s.updateRenderTargetMipmap(d);if(l)I.end(B);if(C.isScene===!0)C.onAfterRender(B,C,f);if(O0.resetDefaultState(),$0=-1,i=null,_.pop(),_.length>0){if(A=_[_.length-1],s.setTextureUnits(A.state.textureUnits),y0===!0)U0.setGlobalState(B.clippingPlanes,A.state.camera)}else A=null;if(P.pop(),P.length>0)V=P[P.length-1];else V=null;if(j!==null)j.renderEnd()};function NZ(C,f,o,l){if(C.visible===!1)return;if(C.layers.test(f.layers)){if(C.isGroup)o=C.renderOrder;else if(C.isLOD){if(C.autoUpdate===!0)C.update(f)}else if(C.isLightProbeGrid)A.pushLightProbeGrid(C);else if(C.isLight){if(A.pushLight(C),C.castShadow)A.pushShadow(C)}else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(q0)){if(l)r0.setFromMatrixPosition(C.matrixWorld).applyMatrix4(h0);let B0=t.update(C),L0=C.material;if(L0.visible)V.push(C,B0,L0,o,r0.z,null,f)}}else if(C.isMesh||C.isLine||C.isPoints){if(!C.frustumCulled||C.intersectsFrustum(q0)){let B0=t.update(C),L0=C.material;if(l){if(C.boundingSphere!==void 0){if(C.boundingSphere===null)C.computeBoundingSphere();r0.copy(C.boundingSphere.center)}else{if(B0.boundingSphere===null)B0.computeBoundingSphere();r0.copy(B0.boundingSphere.center)}r0.applyMatrix4(C.matrixWorld).applyMatrix4(h0)}if(Array.isArray(L0)){let P0=B0.groups;for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0],k0=L0[s0.materialIndex];if(k0&&k0.visible)V.push(C,B0,k0,o,r0.z,s0,f)}}else if(L0.visible)V.push(C,B0,L0,o,r0.z,null,f)}}}let I0=C.children;for(let B0=0,L0=I0.length;B0<L0;B0++)NZ(I0[B0],f,o,l)}function YW(C,f,o,l){let{opaque:c,transmissive:I0,transparent:B0}=C;if(A.setupLightsView(o),y0===!0)U0.setGlobalState(B.clippingPlanes,o);if(l)z.viewport(Z0.copy(l));if(c.length>0)T7(c,f,o);if(I0.length>0)T7(I0,f,o);if(B0.length>0)T7(B0,f,o);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function HW(C,f,o,l){if((o.isScene===!0?o.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[l.id]===void 0){let k0=J9.has("EXT_color_buffer_half_float")||J9.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[l.id]=new $8(1,1,{generateMipmaps:!0,type:k0?x8:z8,minFilter:yJ,samples:Math.max(4,G9.samples),stencilBuffer:$,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:o0.workingColorSpace})}let I0=A.state.transmissionRenderTarget[l.id],B0=l.viewport||Z0;I0.setSize(B0.z*B.transmissionResolutionScale,B0.w*B.transmissionResolutionScale);let L0=B.getRenderTarget(),P0=B.getActiveCubeFace(),_0=B.getActiveMipmapLevel();if(B.setRenderTarget(I0),B.getClearColor(w0),n0=B.getClearAlpha(),n0<1)B.setClearColor(16777215,0.5);if(B.clear(),E9)v0.render(o);let l0=B.toneMapping;B.toneMapping=A8;let s0=l.viewport;if(l.viewport!==void 0)l.viewport=void 0;if(A.setupLightsView(l),y0===!0)U0.setGlobalState(B.clippingPlanes,l);if(T7(C,o,l),s.updateMultisampleRenderTarget(I0),s.updateRenderTargetMipmap(I0),J9.has("WEBGL_multisampled_render_to_texture")===!1){let k0=!1;for(let $9=0,C9=f.length;$9<C9;$9++){let R9=f[$9],{object:N9,geometry:f9,material:C0,group:u9}=R9;if(C0.side===f8&&N9.layers.test(l.layers)){let t0=C0.side;C0.side=o9,C0.needsUpdate=!0,UW(N9,o,l,f9,C0,u9),C0.side=t0,C0.needsUpdate=!0,k0=!0}}if(k0===!0)s.updateMultisampleRenderTarget(I0),s.updateRenderTargetMipmap(I0)}if(B.setRenderTarget(L0,P0,_0),B.setClearColor(w0,n0),s0!==void 0)l.viewport=s0;B.toneMapping=l0}function T7(C,f,o){let l=f.isScene===!0?f.overrideMaterial:null;for(let c=0,I0=C.length;c<I0;c++){let B0=C[c],{object:L0,geometry:P0,group:_0}=B0,l0=B0.material;if(l0.allowOverride===!0&&l!==null)l0=l;if(L0.layers.test(o.layers))UW(L0,f,o,P0,l0,_0)}}function UW(C,f,o,l,c,I0){if(j!==null&&c.isNodeMaterial)j.setObject(C,c);if(C.onBeforeRender(B,f,o,l,c,I0),C.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),c.onBeforeRender(B,f,o,l,C,I0),c.transparent===!0&&c.side===f8&&c.forceSinglePass===!1)c.side=o9,c.needsUpdate=!0,B.renderBufferDirect(o,f,l,c,C,I0),c.side=C6,c.needsUpdate=!0,B.renderBufferDirect(o,f,l,c,C,I0),c.side=f8;else B.renderBufferDirect(o,f,l,c,C,I0);C.onAfterRender(B,f,o,l,c,I0)}function w7(C,f,o){if(f.isScene!==!0)f=V9;let l=y.get(C),c=A.state.lights,I0=A.state.shadowsArray,B0=c.state.version,L0=K0.getParameters(C,c.state,I0,f,o,A.state.lightProbeGridArray),P0=K0.getProgramCacheKey(L0),_0=l.programs;l.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?f.environment:null,l.fog=f.fog;let l0=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;if(l.envMap=W0.get(C.envMap||l.environment,l0),l.envMapRotation=l.environment!==null&&C.envMap===null?f.environmentRotation:C.envMapRotation,_0===void 0)C.addEventListener("dispose",j8),_0=new Map,l.programs=_0;let s0=_0.get(P0);if(s0!==void 0){if(l.currentProgram===s0&&l.lightsStateVersion===B0)return NW(C,L0),s0}else{if(L0.uniforms=K0.getUniforms(C),j!==null&&C.isNodeMaterial)j.build(C,o,L0);C.onBeforeCompile(L0,B),s0=K0.acquireProgram(L0,P0),_0.set(P0,s0),l.uniforms=L0.uniforms}let k0=l.uniforms;if(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)k0.clippingPlanes=U0.uniform;if(NW(C,L0),l.needsLights=IH(C),l.lightsStateVersion=B0,l.needsLights)k0.ambientLightColor.value=c.state.ambient,k0.lightProbe.value=c.state.probe,k0.sunLights.value=c.state.sun,k0.sunLightShadows.value=c.state.sunShadow,k0.directionalLights.value=c.state.directional,k0.directionalLightShadows.value=c.state.directionalShadow,k0.spotLights.value=c.state.spot,k0.spotLightShadows.value=c.state.spotShadow,k0.rectAreaLights.value=c.state.rectArea,k0.ltc_1.value=c.state.rectAreaLTC1,k0.ltc_2.value=c.state.rectAreaLTC2,k0.pointLights.value=c.state.point,k0.pointLightShadows.value=c.state.pointShadow,k0.hemisphereLights.value=c.state.hemi,k0.sunShadowMatrix.value=c.state.sunShadowMatrix,k0.sunShadowCascade.value=c.state.sunShadowCascade,k0.directionalShadowMatrix.value=c.state.directionalShadowMatrix,k0.spotLightMatrix.value=c.state.spotLightMatrix,k0.spotLightMap.value=c.state.spotLightMap,k0.pointShadowMatrix.value=c.state.pointShadowMatrix;return l.lightProbeGrid=A.state.lightProbeGridArray.length>0,l.currentProgram=s0,l.uniformsList=null,s0}function GW(C){if(C.uniformsList===null){let f=C.currentProgram.getUniforms();C.uniformsList=R7.seqWithValue(f.seq,C.uniforms)}return C.uniformsList}function NW(C,f){let o=y.get(C);o.outputColorSpace=f.outputColorSpace,o.batching=f.batching,o.batchingColor=f.batchingColor,o.instancing=f.instancing,o.instancingColor=f.instancingColor,o.instancingMorph=f.instancingMorph,o.skinning=f.skinning,o.morphTargets=f.morphTargets,o.morphNormals=f.morphNormals,o.morphColors=f.morphColors,o.morphTargetsCount=f.morphTargetsCount,o.numClippingPlanes=f.numClippingPlanes,o.numIntersection=f.numClipIntersection,o.vertexAlphas=f.vertexAlphas,o.vertexTangents=f.vertexTangents,o.toneMapping=f.toneMapping}function RH(C,f){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;k.setFromMatrixPosition(f.matrixWorld);for(let o=0,l=C.length;o<l;o++){let c=C[o];if(c.texture!==null&&c.boundingBox.containsPoint(k))return c}return null}function MH(C,f,o,l,c){if(f.isScene!==!0)f=V9;s.resetTextureUnits();let I0=f.fog,B0=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?f.environment:null,L0=d===null?B.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:o0.workingColorSpace,P0=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap,_0=W0.get(l.envMap||B0,P0),l0=l.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,s0=!!o.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),k0=!!o.morphAttributes.position,$9=!!o.morphAttributes.normal,C9=!!o.morphAttributes.color,R9=A8;if(l.toneMapped){if(d===null||d.isXRRenderTarget===!0)R9=B.toneMapping}let N9=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f9=N9!==void 0?N9.length:0,C0=y.get(l),u9=A.state.lights;if(y0===!0){if(m0===!0||C!==i){let F9=C===i&&l.id===$0;U0.setState(l,C,F9)}}let t0=!1;if(l.version===C0.__version){if(C0.needsLights&&C0.lightsStateVersion!==u9.state.version)t0=!0;else if(C0.outputColorSpace!==L0)t0=!0;else if(c.isBatchedMesh&&C0.batching===!1)t0=!0;else if(!c.isBatchedMesh&&C0.batching===!0)t0=!0;else if(c.isBatchedMesh&&C0.batchingColor===!0&&c._colorsTexture===null)t0=!0;else if(c.isBatchedMesh&&C0.batchingColor===!1&&c._colorsTexture!==null)t0=!0;else if(c.isInstancedMesh&&C0.instancing===!1)t0=!0;else if(!c.isInstancedMesh&&C0.instancing===!0)t0=!0;else if(c.isSkinnedMesh&&C0.skinning===!1)t0=!0;else if(!c.isSkinnedMesh&&C0.skinning===!0)t0=!0;else if(c.isInstancedMesh&&C0.instancingColor===!0&&c.instanceColor===null)t0=!0;else if(c.isInstancedMesh&&C0.instancingColor===!1&&c.instanceColor!==null)t0=!0;else if(c.isInstancedMesh&&C0.instancingMorph===!0&&c.morphTexture===null)t0=!0;else if(c.isInstancedMesh&&C0.instancingMorph===!1&&c.morphTexture!==null)t0=!0;else if(C0.envMap!==_0)t0=!0;else if(l.fog===!0&&C0.fog!==I0)t0=!0;else if(C0.numClippingPlanes!==void 0&&(C0.numClippingPlanes!==U0.numPlanes||C0.numIntersection!==U0.numIntersection))t0=!0;else if(C0.vertexAlphas!==l0)t0=!0;else if(C0.vertexTangents!==s0)t0=!0;else if(C0.morphTargets!==k0)t0=!0;else if(C0.morphNormals!==$9)t0=!0;else if(C0.morphColors!==C9)t0=!0;else if(C0.toneMapping!==R9)t0=!0;else if(C0.morphTargetsCount!==f9)t0=!0;else if(!!C0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)t0=!0}else t0=!0,C0.__version=l.version;let G8=C0.currentProgram;if(t0===!0){if(G8=w7(l,f,c),j&&l.isNodeMaterial)j.onUpdateProgram(l,G8,C0)}let v8=!1,GJ=!1,Q6=!1,U9=G8.getUniforms(),L9=C0.uniforms;if(z.useProgram(G8.program))v8=!0,GJ=!0,Q6=!0;if(l.id!==$0)$0=l.id,GJ=!0;if(C0.needsLights){let F9=RH(A.state.lightProbeGridArray,c);if(C0.lightProbeGrid!==F9)C0.lightProbeGrid=F9,GJ=!0}if(v8||i!==C){if(z.buffers.depth.getReversed()&&C.reversedDepth!==!0)C._reversedDepth=!0,C.updateProjectionMatrix();U9.setValue(v,"projectionMatrix",C.projectionMatrix),U9.setValue(v,"viewMatrix",C.matrixWorldInverse);let DJ=U9.map.cameraPosition;if(DJ!==void 0)DJ.setValue(v,i0.setFromMatrixPosition(C.matrixWorld));if(G9.logarithmicDepthBuffer)U9.setValue(v,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)U9.setValue(v,"isOrthographic",C.isOrthographicCamera===!0);if(i!==C)i=C,GJ=!0,Q6=!0}if(C0.needsLights){if(u9.state.sunShadowMap.length>0)U9.setValue(v,"sunShadowMap",u9.state.sunShadowMap,s);if(u9.state.directionalShadowMap.length>0)U9.setValue(v,"directionalShadowMap",u9.state.directionalShadowMap,s);if(u9.state.spotShadowMap.length>0)U9.setValue(v,"spotShadowMap",u9.state.spotShadowMap,s);if(u9.state.pointShadowMap.length>0)U9.setValue(v,"pointShadowMap",u9.state.pointShadowMap,s)}if(c.isSkinnedMesh){U9.setOptional(v,c,"bindMatrix"),U9.setOptional(v,c,"bindMatrixInverse");let F9=c.skeleton;if(F9){if(F9.boneTexture===null)F9.computeBoneTexture();U9.setValue(v,"boneTexture",F9.boneTexture,s)}}if(c.isBatchedMesh){if(U9.setOptional(v,c,"batchingTexture"),U9.setValue(v,"batchingTexture",c._matricesTexture,s),U9.setOptional(v,c,"batchingIdTexture"),U9.setValue(v,"batchingIdTexture",c._indirectTexture,s),U9.setOptional(v,c,"batchingColorTexture"),c._colorsTexture!==null)U9.setValue(v,"batchingColorTexture",c._colorsTexture,s)}let NJ=o.morphAttributes;if(NJ.position!==void 0||NJ.normal!==void 0||NJ.color!==void 0)Q9.update(c,o,G8);if(GJ||C0.receiveShadow!==c.receiveShadow)C0.receiveShadow=c.receiveShadow,U9.setValue(v,"receiveShadow",c.receiveShadow);if((l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial)&&l.envMap===null&&f.environment!==null)L9.envMapIntensity.value=f.environmentIntensity;if(L9.dfgLUT!==void 0)L9.dfgLUT.value=Yq();if(GJ){if(U9.setValue(v,"toneMappingExposure",B.toneMappingExposure),C0.needsLights)LH(L9,Q6);if(I0&&l.fog===!0)R0.refreshFogUniforms(L9,I0);if(R0.refreshMaterialUniforms(L9,l,g,S,A.state.transmissionRenderTarget[C.id]),C0.needsLights&&C0.lightProbeGrid){let F9=C0.lightProbeGrid;L9.probesSH.value=F9.texture,L9.probesMin.value.copy(F9.boundingBox.min),L9.probesMax.value.copy(F9.boundingBox.max),L9.probesResolution.value.copy(F9.resolution)}R7.upload(v,GW(C0),L9,s)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)R7.upload(v,GW(C0),L9,s),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)U9.setValue(v,"center",c.center);if(U9.setValue(v,"modelViewMatrix",c.modelViewMatrix),U9.setValue(v,"normalMatrix",c.normalMatrix),U9.setValue(v,"modelMatrix",c.matrixWorld),l.uniformsGroups!==void 0){let F9=l.uniformsGroups;for(let DJ=0,Z6=F9.length;DJ<Z6;DJ++){let qW=F9[DJ];V0.update(qW,G8),V0.bind(qW,G8)}}return G8}function LH(C,f){C.ambientLightColor.needsUpdate=f,C.lightProbe.needsUpdate=f,C.sunLights.needsUpdate=f,C.sunLightShadows.needsUpdate=f,C.directionalLights.needsUpdate=f,C.directionalLightShadows.needsUpdate=f,C.pointLights.needsUpdate=f,C.pointLightShadows.needsUpdate=f,C.spotLights.needsUpdate=f,C.spotLightShadows.needsUpdate=f,C.rectAreaLights.needsUpdate=f,C.hemisphereLights.needsUpdate=f}function IH(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(C,f,o){let l=y.get(C);if(l.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,l.__autoAllocateDepthBuffer===!1)l.__useRenderToTexture=!1;y.get(C.texture).__webglTexture=f,y.get(C.depthTexture).__webglTexture=l.__autoAllocateDepthBuffer?void 0:o,l.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,f){let o=y.get(C);o.__webglFramebuffer=f,o.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(C,f=0,o=0){d=C,w=f,n=o;let l=null,c=!1,I0=!1;if(C){let L0=y.get(C);if(L0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(v.FRAMEBUFFER,L0.__webglFramebuffer),Z0.copy(C.viewport),X0.copy(C.scissor),S0=C.scissorTest,z.viewport(Z0),z.scissor(X0),z.setScissorTest(S0),$0=-1;return}else if(L0.__webglFramebuffer===void 0)s.setupRenderTarget(C);else if(L0.__hasExternalTextures)s.rebindTextures(C,y.get(C.texture).__webglTexture,y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let l0=C.depthTexture;if(L0.__boundDepthTexture!==l0){if(l0!==null&&y.has(l0)&&(C.width!==l0.image.width||C.height!==l0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s.setupDepthRenderbuffer(C)}}let P0=C.texture;if(P0.isData3DTexture||P0.isDataArrayTexture||P0.isCompressedArrayTexture)I0=!0;let _0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget){if(Array.isArray(_0[f]))l=_0[f][o];else l=_0[f];c=!0}else if(C.samples>0&&s.useMultisampledRTT(C)===!1)l=y.get(C).__webglMultisampledFramebuffer;else if(Array.isArray(_0))l=_0[o];else l=_0;Z0.copy(C.viewport),X0.copy(C.scissor),S0=C.scissorTest}else Z0.copy(Q0).multiplyScalar(g).floor(),X0.copy(r).multiplyScalar(g).floor(),S0=z0;if(o!==0)l=b;if(z.bindFramebuffer(v.FRAMEBUFFER,l))z.drawBuffers(C,l);if(z.viewport(Z0),z.scissor(X0),z.setScissorTest(S0),c){let L0=y.get(C.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+f,L0.__webglTexture,o)}else if(I0){let L0=f;for(let P0=0;P0<C.textures.length;P0++){let _0=y.get(C.textures[P0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+P0,_0.__webglTexture,o,L0)}}else if(C!==null&&o!==0){let L0=y.get(C.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,L0.__webglTexture,o)}$0=-1};function DW(C){let f=y.get(C);if(f.__readFormat!==C.format||f.__readType!==C.type)f.__readFormat=C.format,f.__readType=C.type,f.__formatReadable=G9.textureFormatReadable(C.format),f.__typeReadable=G9.textureTypeReadable(C.type);return f}if(this.readRenderTargetPixels=function(C,f,o,l,c,I0,B0,L0=0){if(!(C&&C.isWebGLRenderTarget)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&B0!==void 0)P0=P0[B0];if(P0){z.bindFramebuffer(v.FRAMEBUFFER,P0);try{let _0=C.textures[L0],l0=_0.format,s0=_0.type;if(C.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+L0);let k0=DW(_0);if(k0.__formatReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(k0.__typeReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=C.width-l&&(o>=0&&o<=C.height-c))v.readPixels(f,o,l,c,J0.convert(l0),J0.convert(s0),I0)}finally{let _0=d!==null?y.get(d).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,_0)}}},this.readRenderTargetPixelsAsync=async function(C,f,o,l,c,I0,B0,L0=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let P0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&B0!==void 0)P0=P0[B0];if(P0)if(f>=0&&f<=C.width-l&&(o>=0&&o<=C.height-c)){z.bindFramebuffer(v.FRAMEBUFFER,P0);let _0=C.textures[L0],l0=_0.format,s0=_0.type;if(C.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+L0);let k0=DW(_0);if(k0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(k0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $9=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,$9),v.bufferData(v.PIXEL_PACK_BUFFER,I0.byteLength,v.STREAM_READ),v.readPixels(f,o,l,c,J0.convert(l0),J0.convert(s0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let C9=d!==null?y.get(d).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,C9);let R9=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await bX(v,R9,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,$9),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,I0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer($9),v.deleteSync(R9),I0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,f=null,o=0){let l=Math.pow(2,-o),c=Math.floor(C.image.width*l),I0=Math.floor(C.image.height*l),B0=f!==null?f.x:0,L0=f!==null?f.y:0;s.setTexture2D(C,0),v.copyTexSubImage2D(v.TEXTURE_2D,o,0,0,B0,L0,c,I0),z.unbindTexture()},this.copyTextureToTexture=function(C,f,o=null,l=null,c=0,I0=0){let B0,L0,P0,_0,l0,s0,k0,$9,C9,R9=C.isCompressedTexture?C.mipmaps[I0]:C.image;if(o!==null)B0=o.max.x-o.min.x,L0=o.max.y-o.min.y,P0=o.isBox3?o.max.z-o.min.z:1,_0=o.min.x,l0=o.min.y,s0=o.isBox3?o.min.z:0;else{let L9=Math.pow(2,-c);if(B0=Math.floor(R9.width*L9),L0=Math.floor(R9.height*L9),C.isDataArrayTexture)P0=R9.depth;else if(C.isData3DTexture)P0=Math.floor(R9.depth*L9);else P0=1;_0=0,l0=0,s0=0}if(l!==null)k0=l.x,$9=l.y,C9=l.z;else k0=0,$9=0,C9=0;let N9=J0.convert(f.format),f9=J0.convert(f.type),C0;if(f.isData3DTexture)s.setTexture3D(f,0),C0=v.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)s.setTexture2DArray(f,0),C0=v.TEXTURE_2D_ARRAY;else s.setTexture2D(f,0),C0=v.TEXTURE_2D;z.activeTexture(v.TEXTURE0),z.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,f.flipY),z.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),z.pixelStorei(v.UNPACK_ALIGNMENT,f.unpackAlignment);let u9=z.getParameter(v.UNPACK_ROW_LENGTH),t0=z.getParameter(v.UNPACK_IMAGE_HEIGHT),G8=z.getParameter(v.UNPACK_SKIP_PIXELS),v8=z.getParameter(v.UNPACK_SKIP_ROWS),GJ=z.getParameter(v.UNPACK_SKIP_IMAGES);z.pixelStorei(v.UNPACK_ROW_LENGTH,R9.width),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,R9.height),z.pixelStorei(v.UNPACK_SKIP_PIXELS,_0),z.pixelStorei(v.UNPACK_SKIP_ROWS,l0),z.pixelStorei(v.UNPACK_SKIP_IMAGES,s0);let Q6=C.isDataArrayTexture||C.isData3DTexture,U9=f.isDataArrayTexture||f.isData3DTexture;if(C.isDepthTexture){let L9=y.get(C),NJ=y.get(f),F9=y.get(L9.__renderTarget),DJ=y.get(NJ.__renderTarget);z.bindFramebuffer(v.READ_FRAMEBUFFER,F9.__webglFramebuffer),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,DJ.__webglFramebuffer);for(let Z6=0;Z6<P0;Z6++){if(Q6)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,y.get(C).__webglTexture,c,s0+Z6),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,y.get(f).__webglTexture,I0,C9+Z6);v.blitFramebuffer(_0,l0,B0,L0,k0,$9,B0,L0,v.DEPTH_BUFFER_BIT,v.NEAREST)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(c!==0||C.isRenderTargetTexture||y.has(C)){let L9=y.get(C),NJ=y.get(f);z.bindFramebuffer(v.READ_FRAMEBUFFER,m),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,T);for(let F9=0;F9<P0;F9++){if(Q6)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,L9.__webglTexture,c,s0+F9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,L9.__webglTexture,c);if(U9)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,NJ.__webglTexture,I0,C9+F9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,NJ.__webglTexture,I0);if(c!==0)v.blitFramebuffer(_0,l0,B0,L0,k0,$9,B0,L0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(U9)v.copyTexSubImage3D(C0,I0,k0,$9,C9+F9,_0,l0,B0,L0);else v.copyTexSubImage2D(C0,I0,k0,$9,_0,l0,B0,L0)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(U9)if(C.isDataTexture||C.isData3DTexture)v.texSubImage3D(C0,I0,k0,$9,C9,B0,L0,P0,N9,f9,R9.data);else if(f.isCompressedArrayTexture)v.compressedTexSubImage3D(C0,I0,k0,$9,C9,B0,L0,P0,N9,R9.data);else v.texSubImage3D(C0,I0,k0,$9,C9,B0,L0,P0,N9,f9,R9);else if(C.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,I0,k0,$9,B0,L0,N9,f9,R9.data);else if(C.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,I0,k0,$9,R9.width,R9.height,N9,R9.data);else v.texSubImage2D(v.TEXTURE_2D,I0,k0,$9,B0,L0,N9,f9,R9);if(z.pixelStorei(v.UNPACK_ROW_LENGTH,u9),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,t0),z.pixelStorei(v.UNPACK_SKIP_PIXELS,G8),z.pixelStorei(v.UNPACK_SKIP_ROWS,v8),z.pixelStorei(v.UNPACK_SKIP_IMAGES,GJ),I0===0&&f.generateMipmaps)v.generateMipmap(C0);z.unbindTexture()},this.initRenderTarget=function(C){if(y.get(C).__webglFramebuffer===void 0)s.setupRenderTarget(C)},this.initTexture=function(C){if(C.isCubeTexture)s.setTextureCube(C,0);else if(C.isData3DTexture)s.setTexture3D(C,0);else if(C.isDataArrayTexture||C.isCompressedArrayTexture)s.setTexture2DArray(C,0);else s.setTexture2D(C,0);z.unbindTexture()},this.resetState=function(){w=0,n=0,d=null,z.reset(),O0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return SK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=o0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=o0._getUnpackColorSpace()}}var VY={type:"change"},M$={type:"start"},BY={type:"end"},jQ=new G7,CY=new D8,Hq=Math.cos(70*X7.DEG2RAD),_9=new x,e9=2*Math.PI,H9={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},R$=0.000001;class L$ extends kQ{constructor(J,Q=null){super(J,Q);if(this.state=H9.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:LJ.ROTATE,MIDDLE:LJ.DOLLY,RIGHT:LJ.PAN},this.touches={ONE:IJ.ROTATE,TWO:IJ.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new r9,this._lastTargetPosition=new x,this._quat=new r9().setFromUnitVectors(J.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q7,this._sphericalDelta=new q7,this._scale=1,this._panOffset=new x,this._rotateStart=new x0,this._rotateEnd=new x0,this._rotateDelta=new x0,this._panStart=new x0,this._panEnd=new x0,this._panDelta=new x0,this._dollyStart=new x0,this._dollyEnd=new x0,this._dollyDelta=new x0,this._dollyDirection=new x,this._mouse=new x0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gq.bind(this),this._onPointerDown=Uq.bind(this),this._onPointerUp=Nq.bind(this),this._onContextMenu=Mq.bind(this),this._onMouseWheel=Fq.bind(this),this._onKeyDown=Eq.bind(this),this._onTouchStart=Oq.bind(this),this._onTouchMove=Rq.bind(this),this._onMouseDown=Dq.bind(this),this._onMouseMove=qq.bind(this),this._interceptControlDown=Lq.bind(this),this._interceptControlUp=Iq.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=H9.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(VY),this.update(),this.state=H9.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(_9.copy(Q).sub(this.target),_9.applyQuaternion(this._quat),this._spherical.setFromVector3(_9),this.autoRotate&&this.state===H9.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Z=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite(Z)&&isFinite(K)){if(Z<-Math.PI)Z+=e9;else if(Z>Math.PI)Z-=e9;if(K<-Math.PI)K+=e9;else if(K>Math.PI)K-=e9;if(Z<=K)this._spherical.theta=Math.max(Z,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Z+K)/2?Math.max(Z,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let $=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),$=W!=this._spherical.radius}if(_9.setFromSpherical(this._spherical),_9.applyQuaternion(this._quatInverse),Q.copy(this.target).add(_9),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=_9.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),$=!!Y}else if(this.object.isOrthographicCamera){let X=new x(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),$=Y!==this.object.zoom;let H=new x(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),W=_9.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(jQ.origin.copy(this.object.position),jQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jQ.direction))<Hq)this.object.lookAt(this.target);else CY.setFromNormalAndCoplanarPoint(this.object.up,this.target),jQ.intersectPlane(CY,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),$=!0}if(this._scale=1,this._performCursorZoom=!1,$||this._lastPosition.distanceToSquared(this.object.position)>R$||8*(1-this._lastQuaternion.dot(this.object.quaternion))>R$||this._lastTargetPosition.distanceToSquared(this.target)>R$)return this.dispatchEvent(VY),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return e9/60*this.autoRotateSpeed*J;else return e9/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){_9.setFromMatrixColumn(Q,0),_9.multiplyScalar(-J),this._panOffset.add(_9)}_panUp(J,Q){if(this.screenSpacePanning===!0)_9.setFromMatrixColumn(Q,1);else _9.setFromMatrixColumn(Q,0),_9.crossVectors(this.object.up,_9);_9.multiplyScalar(J),this._panOffset.add(_9)}_pan(J,Q){let Z=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;_9.copy(K).sub(this.target);let $=_9.length();$*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*$/Z.clientHeight,this.object.matrix),this._panUp(2*Q*$/Z.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Z.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/Z.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Z=this.domElement.getBoundingClientRect(),K=J-Z.left,$=Q-Z.top,W=Z.width,X=Z.height;this._mouse.x=K/W*2-1,this._mouse.y=-($/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(e9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(e9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(e9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-e9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(e9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-e9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set(Z,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set(Z,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyStart.set(0,$)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Z=this._getSecondPointerPosition(J),K=0.5*(J.pageX+Z.x),$=0.5*(J.pageY+Z.y);this._rotateEnd.set(K,$)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(e9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(e9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set(Z,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyEnd.set(0,$),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new x0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,Z={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Z.deltaY*=10;return Z}}function Uq(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function Gq(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function Nq(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(BY),this.state=H9.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],Z=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:Z.x,pageY:Z.y});break}}function Dq(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case LJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=H9.DOLLY;break;case LJ.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H9.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H9.ROTATE}break;case LJ.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H9.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H9.PAN}break;default:this.state=H9.NONE}if(this.state!==H9.NONE)this.dispatchEvent(M$)}function qq(J){switch(this.state){case H9.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case H9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case H9.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function Fq(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==H9.NONE)return;J.preventDefault(),this.dispatchEvent(M$),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(BY)}function Eq(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function Oq(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case IJ.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=H9.TOUCH_ROTATE;break;case IJ.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=H9.TOUCH_PAN;break;default:this.state=H9.NONE}break;case 2:switch(this.touches.TWO){case IJ.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=H9.TOUCH_DOLLY_PAN;break;case IJ.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=H9.TOUCH_DOLLY_ROTATE;break;default:this.state=H9.NONE}break;default:this.state=H9.NONE}if(this.state!==H9.NONE)this.dispatchEvent(M$)}function Rq(J){switch(this._trackPointer(J),this.state){case H9.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case H9.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case H9.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case H9.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=H9.NONE}}function Mq(J){if(this.enabled===!1)return;J.preventDefault()}function Lq(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Iq(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var vQ={jaw:0.6,tbX:2.9,tbY:6.85,ttX:6.45,ttY:7.3,ttCurl:0,root:0,lipAp:0.7,lipProt:0.2,lipWidth:0.5,labiodental:0,velum:-0.15,larynx:0,epilarynx:0,ventricular:0,lateral:0,dorsum:0};var e={blue:"#4fb6f2",blueMid:"#3487c4",blueDim:"#1f5f8c",frame:"#133954",green:"#5be381",red:"#ff5d40",pink:"#ff73cf",white:"#eef6f8",amber:"#ffb340"},ZR=[e.green,e.red,e.pink,e.white],bQ={primary:"#effbff",secondary:"#e2f5fc"};function AY(J,Q,Z){let K=parseInt(J.slice(1),16),$=parseInt(Q.slice(1),16),W=(X)=>Math.round((K>>X&255)*(1-Z)+($>>X&255)*Z);return"#"+[16,8,0].map((X)=>W(X).toString(16).padStart(2,"0")).join("")}var yQ=(J)=>AY(J,"#ffffff",0.55),YJ=[[0,"#3a2408"],[0.35,"#c9822a"],[0.6,"#ffb340"],[0.82,"#ffe39a"],[1,"#fff8ec"]];function fQ(J){let Q=Math.max(0,Math.min(1,J));for(let Z=1;Z<YJ.length;Z++)if(Q<=YJ[Z][0])return AY(YJ[Z-1][1],YJ[Z][1],(Q-YJ[Z-1][0])/(YJ[Z][0]-YJ[Z-1][0]));return YJ[YJ.length-1][1]}var KR={black:"#000000",console:"#000000",inset:"#000000",line:e.frame,text:e.blue,textDim:e.blueMid,caliper:e.amber,caliperDim:"rgba(255, 179, 64, 0.45)",fat:"#bdbdbd",skin:"#a8a8a8",muscle:"#5d5d5d",tongue:"#6b6b6b",brain:"#7c7c7c",marrow:"#b2b2b2",cortex:"#1c1c1c",cartilage:"#3e3e3e",mucosa:"#8f8f8f",tooth:"#101010"};var hQ=(J)=>{if(!(J>0))return 0;let Q=Math.log10(40),Z=Math.log10(4000);return Math.max(0,Math.min(1,(Math.log10(J)-Q)/(Z-Q)))};var zY=(J,Q)=>Math.hypot(J.x-Q.x,J.y-Q.y);var xQ=(J,Q,Z)=>{let K=Math.sin(Z),$=Math.cos(Z),W=J.x-Q.x,X=J.y-Q.y;return{x:Q.x+W*$-X*K,y:Q.y+W*K+X*$}};function P8(J,Q){if(J.length<3)return J.slice();let Z=[];for(let K=0;K<J.length-1;K++){let $=J[Math.max(0,K-1)],W=J[K],X=J[K+1],Y=J[Math.min(J.length-1,K+2)];for(let H=0;H<Q;H++){let G=H/Q,D=G*G,U=D*G;Z.push({x:0.5*(2*W.x+(-$.x+X.x)*G+(2*$.x-5*W.x+4*X.x-Y.x)*D+(-$.x+3*W.x-3*X.x+Y.x)*U),y:0.5*(2*W.y+(-$.y+X.y)*G+(2*$.y-5*W.y+4*X.y-Y.y)*D+(-$.y+3*W.y-3*X.y+Y.y)*U)})}}return Z.push(J[J.length-1]),Z}var Vq='"Hershey", "Archivo", system-ui, sans-serif',PY=(J,Q="l")=>`${Q==="m"?500:300} ${J}px ${Vq}`,Cq=typeof CanvasRenderingContext2D!=="undefined"&&"letterSpacing"in CanvasRenderingContext2D.prototype;function Bq(J,Q=!1){let Z=new Path2D;if(J.length===0)return Z;Z.moveTo(J[0][0],J[0][1]);for(let K=1;K<J.length;K++)Z.lineTo(J[K][0],J[K][1]);if(Q)Z.closePath();return Z}function S6(J,Q,Z,K,$={}){if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.lineJoin="round",J.lineCap="round",J.setLineDash($.dash??[]),J.strokeStyle=Z,J.lineWidth=K,J.stroke(Q),$.hot)J.globalCompositeOperation="source-over",J.strokeStyle=yQ(Z),J.lineWidth=K*0.42,J.stroke(Q);J.restore()}function nJ(J,Q,Z,K,$={}){if(Q.length<2)return;S6(J,Bq(Q,$.close),Z,K,$)}function M7(J,Q,Z,K,$,W,X,Y={}){let H=new Path2D;H.moveTo(Q,Z),H.lineTo(K,$),S6(J,H,W,X,Y)}function kY(J,Q,Z,K,$,W=1.2,X={}){let Y=new Path2D;Y.arc(Q,Z,K,0,Math.PI*2),S6(J,Y,$,W,X)}function L7(J,Q,Z,K,$,W=1){J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=W,J.fillStyle=$,J.beginPath(),J.arc(Q,Z,K,0,Math.PI*2),J.fill(),J.restore()}function _Y(J,Q,Z,K,$=7,W=1){let Y=new Path2D;Y.arc(Q,Z,$,0,Math.PI*2),Y.moveTo(Q-$-4,Z),Y.lineTo(Q-$+2,Z),Y.moveTo(Q+$-2,Z),Y.lineTo(Q+$+4,Z),Y.moveTo(Q,Z-$-4),Y.lineTo(Q,Z-$+2),Y.moveTo(Q,Z+$-2),Y.lineTo(Q,Z+$+4),S6(J,Y,K,1.25,{alpha:W})}function S9(J,Q,Z,K,$={}){let W=$.size??11;if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.font=PY(W,$.weight),Cq)J.letterSpacing=`${(($.ls??0.14)*W).toFixed(2)}px`;J.textAlign=$.align??"left",J.textBaseline=$.baseline??"alphabetic",J.fillStyle=$.color??e.blue;let X=J;if($.moving)X.layoutMoving=!0;J.fillText(Q,Z,K),X.layoutMoving=void 0,J.restore()}function sJ(J,Q=2){let Z=J.length>1&&J[0][0]===J[J.length-1][0]&&J[0][1]===J[J.length-1][1]?J.slice(0,-1):J.slice();for(let K=0;K<Q;K++){let $=[];for(let W=0;W<Z.length;W++){let X=Z[W],Y=Z[(W+1)%Z.length];$.push([X[0]*0.75+Y[0]*0.25,X[1]*0.75+Y[1]*0.25],[X[0]*0.25+Y[0]*0.75,X[1]*0.25+Y[1]*0.75])}Z=$}return Z.length?[...Z,Z[0]]:Z}function I$(J,Q,Z,K,$,W,X=1){let Y=$*0.5,H=Y*0.48,G=Z-Y/2,D=Math.max(0.9,$*0.07),U=(q)=>q.toFixed(2),N=(q)=>{J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.strokeStyle=W,J.lineWidth=D,J.lineCap="round",J.lineJoin="round",J.stroke(new Path2D(q)),J.restore()},F=(q,R)=>{if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.font=PY($),J.textAlign="center",J.textBaseline="alphabetic",J.fillStyle=W,R)R(J);J.fillText(q,R?0:Q,R?0:Z),J.restore()},O=(q)=>{q.translate(Q,G),q.rotate(Math.PI),q.translate(0,Y/2)},L=(q)=>{q.translate(Q,Z),q.scale(-1,1)},E=(q)=>`M${U(q+H)} ${U(G)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(q-H)} ${U(G)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(q+H)} ${U(G)}`;switch(K){case"ɑ":{let q=Q-0.06*$;return N(E(q)+`M${U(q+H)} ${U(Z-Y)}L${U(q+H)} ${U(Z)}`)}case"ɒ":{let q=Q+0.06*$;return N(E(q)+`M${U(q-H)} ${U(Z-Y)}L${U(q-H)} ${U(Z)}`)}case"ɪ":return N(`M${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z)}M${U(Q-Y*0.3)} ${U(Z-Y)}L${U(Q+Y*0.3)} ${U(Z-Y)}M${U(Q-Y*0.3)} ${U(Z)}L${U(Q+Y*0.3)} ${U(Z)}`);case"ɛ":return N(`M${U(Q+H*0.9)} ${U(Z-Y*0.92)}Q${U(Q-H*1.1)} ${U(Z-Y*1.08)} ${U(Q-H*0.25)} ${U(G)}Q${U(Q-H*1.3)} ${U(Z+Y*0.1)} ${U(Q+H*0.95)} ${U(Z-Y*0.06)}`);case"ɜ":return N(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(G)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}`);case"ɝ":return N(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(G)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}M${U(Q+H*0.55)} ${U(G-Y*0.1)}Q${U(Q+H*1.4)} ${U(G-Y*0.5)} ${U(Q+H*1.5)} ${U(G-Y*0.15)}`);case"ʊ":return N(`M${U(Q-H*1.15)} ${U(Z-Y)}Q${U(Q-H*0.5)} ${U(Z-Y*0.9)} ${U(Q-H*0.75)} ${U(G)}Q${U(Q-H)} ${U(Z)} ${U(Q)} ${U(Z)}Q${U(Q+H)} ${U(Z)} ${U(Q+H*0.75)} ${U(G)}Q${U(Q+H*0.5)} ${U(Z-Y*0.9)} ${U(Q+H*1.15)} ${U(Z-Y)}`);case"ʌ":return N(`M${U(Q-H)} ${U(Z)}L${U(Q)} ${U(Z-Y)}L${U(Q+H)} ${U(Z)}`);case"ɤ":return N(`M${U(Q-H)} ${U(Z-Y)}L${U(Q)} ${U(Z-Y*0.1)}L${U(Q+H)} ${U(Z-Y)}M${U(Q)} ${U(Z-Y*0.1)}Q${U(Q-H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z+Y*0.45)}Q${U(Q+H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z-Y*0.1)}`);case"ʃ":return N(`M${U(Q+H*0.9)} ${U(Z-Y*1.9)}Q${U(Q)} ${U(Z-Y*2.2)} ${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z+Y*0.3)}Q${U(Q)} ${U(Z+Y*0.95)} ${U(Q-H*0.9)} ${U(Z+Y*0.7)}`);case"θ":return N(`M${U(Q+H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q-H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q+H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y)}L${U(Q+H)} ${U(Z-Y)}`);case"ŋ":return N(`M${U(Q-H)} ${U(Z)}L${U(Q-H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y*0.6)}Q${U(Q-H*0.2)} ${U(Z-Y*1.1)} ${U(Q+H*0.6)} ${U(Z-Y*0.9)}Q${U(Q+H)} ${U(Z-Y*0.75)} ${U(Q+H)} ${U(Z-Y*0.4)}L${U(Q+H)} ${U(Z+Y*0.4)}Q${U(Q+H)} ${U(Z+Y*0.85)} ${U(Q+H*0.3)} ${U(Z+Y*0.8)}`);case"ə":return N(`M${U(Q-H)} ${U(G)}L${U(Q+H)} ${U(G)}A${U(H)} ${U(Y/2)} 0 1 1 ${U(Q-H*0.75)} ${U(Z-Y*0.85)}`);case"ɐ":return F("a",O);case"ɔ":return F("c",L);case"ɯ":return F("m",O);case"ɨ":return F("i"),N(`M${U(Q-H*0.8)} ${U(G)}L${U(Q+H*0.8)} ${U(G)}`);case"ø":return F("o"),N(`M${U(Q-H*1.1)} ${U(Z+Y*0.1)}L${U(Q+H*1.1)} ${U(Z-Y*1.1)}`);case"æ":return F("æ");case"œ":return F("œ");default:return F(K)}}var TY=new E8,gQ=new x;class j6 extends zQ{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let J=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],Q=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],Z=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(Z),this.setAttribute("position",new c9(J,3)),this.setAttribute("uv",new c9(Q,2))}applyMatrix4(J){let Q=this.attributes.instanceStart,Z=this.attributes.instanceEnd;if(Q!==void 0)Q.applyMatrix4(J),Z.applyMatrix4(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new m8(Q,6,1);return this.setAttribute("instanceStart",new p9(Z,3,0)),this.setAttribute("instanceEnd",new p9(Z,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new m8(Q,6,1);return this.setAttribute("instanceColorStart",new p9(Z,3,0)),this.setAttribute("instanceColorEnd",new p9(Z,3,3)),this}fromWireframeGeometry(J){return this.setPositions(J.attributes.position.array),this}fromEdgesGeometry(J){return this.setPositions(J.attributes.position.array),this}fromMesh(J){return this.fromWireframeGeometry(new VQ(J.geometry)),this}fromLineSegments(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new E8;let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0)this.boundingBox.setFromBufferAttribute(J),TY.setFromBufferAttribute(Q),this.boundingBox.union(TY)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new XJ;if(this.boundingBox===null)this.computeBoundingBox();let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0){let Z=this.boundingSphere.center;this.boundingBox.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)gQ.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(gQ)),gQ.fromBufferAttribute(Q,$),K=Math.max(K,Z.distanceToSquared(gQ));if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}D0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new x0},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};n9.line={uniforms:D7.merge([D0.common,D0.fog,D0.line]),vertexShader:`
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
		`};class I7 extends t9{constructor(J){super({type:"LineMaterial",uniforms:D7.clone(n9.line.uniforms),vertexShader:n9.line.vertexShader,fragmentShader:n9.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(J)}get color(){return this.uniforms.diffuse.value}set color(J){this.uniforms.diffuse.value=J}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(J){if(J===!0!==this.worldUnits)this.needsUpdate=!0;if(J===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(J){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=J}get dashed(){return"USE_DASH"in this.defines}set dashed(J){if(J===!0!==this.dashed)this.needsUpdate=!0;if(J===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(J){this.uniforms.dashScale.value=J}get dashSize(){return this.uniforms.dashSize.value}set dashSize(J){this.uniforms.dashSize.value=J}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(J){this.uniforms.dashOffset.value=J}get gapSize(){return this.uniforms.gapSize.value}set gapSize(J){this.uniforms.gapSize.value=J}get opacity(){return this.uniforms.opacity.value}set opacity(J){if(!this.uniforms)return;this.uniforms.opacity.value=J}get resolution(){return this.uniforms.resolution.value}set resolution(J){this.uniforms.resolution.value.copy(J)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(J){if(!this.defines)return;if(J===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(J===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}var V$=new Y9,wY=new x,SY=new x,v9=new Y9,b9=new Y9,d8=new Y9,C$=new x,B$=new M9,y9=new PQ,jY=new x,pQ=new E8,mQ=new XJ,l8=new Y9,c8,iJ;function vY(J,Q,Z){return l8.set(0,0,-Q,1).applyMatrix4(J.projectionMatrix),l8.multiplyScalar(1/l8.w),l8.x=iJ/Z.width,l8.y=iJ/Z.height,l8.applyMatrix4(J.projectionMatrixInverse),l8.multiplyScalar(1/l8.w),Math.abs(Math.max(l8.x,l8.y))}function Aq(J,Q){let{matrixWorld:Z,geometry:K}=J,$=K.attributes.instanceStart,W=K.attributes.instanceEnd,X=Math.min(K.instanceCount,$.count);for(let Y=0,H=X;Y<H;Y++){y9.start.fromBufferAttribute($,Y),y9.end.fromBufferAttribute(W,Y),y9.applyMatrix4(Z);let G=new x,D=new x;if(c8.distanceSqToSegment(y9.start,y9.end,D,G),D.distanceTo(G)<iJ*0.5)Q.push({point:D,pointOnLine:G,distance:c8.origin.distanceTo(D),object:J,face:null,faceIndex:Y,uv:null,uv1:null})}}function zq(J,Q,Z){let K=Q.projectionMatrix,W=J.material.resolution,X=J.matrixWorld,Y=J.geometry,H=Y.attributes.instanceStart,G=Y.attributes.instanceEnd,D=Math.min(Y.instanceCount,H.count),U=-Q.near;c8.at(1,d8),d8.w=1,d8.applyMatrix4(Q.matrixWorldInverse),d8.applyMatrix4(K),d8.multiplyScalar(1/d8.w),d8.x*=W.x/2,d8.y*=W.y/2,d8.z=0,C$.copy(d8),B$.multiplyMatrices(Q.matrixWorldInverse,X);for(let N=0,F=D;N<F;N++){if(v9.fromBufferAttribute(H,N),b9.fromBufferAttribute(G,N),v9.w=1,b9.w=1,v9.applyMatrix4(B$),b9.applyMatrix4(B$),v9.z>U&&b9.z>U)continue;if(v9.z>U){let k=v9.z-b9.z,V=(v9.z-U)/k;v9.lerp(b9,V)}else if(b9.z>U){let k=b9.z-v9.z,V=(b9.z-U)/k;b9.lerp(v9,V)}v9.applyMatrix4(K),b9.applyMatrix4(K),v9.multiplyScalar(1/v9.w),b9.multiplyScalar(1/b9.w),v9.x*=W.x/2,v9.y*=W.y/2,b9.x*=W.x/2,b9.y*=W.y/2,y9.start.copy(v9),y9.start.z=0,y9.end.copy(b9),y9.end.z=0;let L=y9.closestPointToPointParameter(C$,!0);y9.at(L,jY);let E=X7.lerp(v9.z,b9.z,L),q=E>=-1&&E<=1,R=C$.distanceTo(jY)<iJ*0.5;if(q&&R){y9.start.fromBufferAttribute(H,N),y9.end.fromBufferAttribute(G,N),y9.start.applyMatrix4(X),y9.end.applyMatrix4(X);let k=new x,V=new x;c8.distanceSqToSegment(y9.start,y9.end,V,k),Z.push({point:V,pointOnLine:k,distance:c8.origin.distanceTo(V),object:J,face:null,faceIndex:N,uv:null,uv1:null})}}}class A$ extends W8{constructor(J=new j6,Q=new I7({color:Math.random()*16777215})){super(J,Q);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let J=this.geometry,Q=J.attributes.instanceStart,Z=J.attributes.instanceEnd,K=new Float32Array(2*Q.count);for(let W=0,X=0,Y=Q.count;W<Y;W++,X+=2)wY.fromBufferAttribute(Q,W),SY.fromBufferAttribute(Z,W),K[X]=X===0?0:K[X-1],K[X+1]=K[X]+wY.distanceTo(SY);let $=new m8(K,2,1);return J.setAttribute("instanceDistanceStart",new p9($,1,0)),J.setAttribute("instanceDistanceEnd",new p9($,1,1)),this}raycast(J,Q){let Z=this.material.worldUnits,K=J.camera;if(K===null&&!Z)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');if(Z===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let $=J.params.Line2!==void 0?J.params.Line2.threshold||0:0;c8=J.ray;let W=this.matrixWorld,X=this.geometry,Y=this.material;if(iJ=Y.linewidth+$,X.boundingSphere===null)X.computeBoundingSphere();mQ.copy(X.boundingSphere).applyMatrix4(W);let H;if(Z)H=iJ*0.5;else{let D=Math.max(K.near,mQ.distanceToPoint(c8.origin));H=vY(K,D,Y.resolution)}if(mQ.radius+=H,c8.intersectsSphere(mQ)===!1)return;if(X.boundingBox===null)X.computeBoundingBox();pQ.copy(X.boundingBox).applyMatrix4(W);let G;if(Z)G=iJ*0.5;else{let D=Math.max(K.near,pQ.distanceToPoint(c8.origin));G=vY(K,D,Y.resolution)}if(pQ.expandByScalar(G),c8.intersectsBox(pQ)===!1)return;if(Z)Aq(this,Q);else zq(this,K,Q)}onBeforeRender(J){let Q=this.material.uniforms;if(Q&&Q.resolution)J.getViewport(V$),this.material.uniforms.resolution.value.set(V$.z,V$.w)}}var uQ=[0.6,0.85,1.05,1.3,1.6,2.1];class P${a=new Float32Array(768);n=0;reset(){return this.n=0,this}p(J,Q,Z){if(3*this.n+3>this.a.length){let $=new Float32Array(this.a.length*2);$.set(this.a),this.a=$}let K=3*this.n++;return this.a[K]=J,this.a[K+1]=Q,this.a[K+2]=Z,this}}class yY{material;mesh;geo=new j6;pos=new Float32Array(0);col=new Float32Array(0);pb=null;cb=null;cap=0;n=0;constructor(J){this.material=J;this.mesh=new A$(this.geo,J),this.mesh.frustumCulled=!1,this.grow(2048)}grow(J){let Q=new Float32Array(J*6),Z=new Float32Array(J*6);Q.set(this.pos.subarray(0,this.n*6)),Z.set(this.col.subarray(0,this.n*6)),this.pos=Q,this.col=Z,this.cap=J,this.geo.dispose(),this.geo=new j6;let K=this.pb=new m8(Q,6,1).setUsage(NQ),$=this.cb=new m8(Z,6,1).setUsage(NQ);this.geo.setAttribute("instanceStart",new p9(K,3,0)),this.geo.setAttribute("instanceEnd",new p9(K,3,3)),this.geo.setAttribute("instanceColorStart",new p9($,3,0)),this.geo.setAttribute("instanceColorEnd",new p9($,3,3)),this.mesh.geometry=this.geo}seg(J,Q,Z,K,$,W,X,Y,H){if(this.n>=this.cap)this.grow(this.cap*2);let G=this.n++*6,D=this.pos,U=this.col;D[G]=J,D[G+1]=Q,D[G+2]=Z,D[G+3]=K,D[G+4]=$,D[G+5]=W,U[G]=U[G+3]=X,U[G+1]=U[G+4]=Y,U[G+2]=U[G+5]=H}commit(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0;for(let J of[this.pb,this.cb])J.clearUpdateRanges(),J.addUpdateRange(0,this.n*6),J.needsUpdate=!0}dispose(){this.geo.dispose(),this.material.dispose()}}var bY=new Map;function z$(J){let Q=bY.get(J);if(!Q){let Z=parseInt(J.slice(1),16);Q=[(Z>>16&255)/255,(Z>>8&255)/255,(Z&255)/255],bY.set(J,Q)}return Q}class k${group=new MJ;batches;constructor(){this.batches=uQ.map((J)=>{let Q=new I7({linewidth:J,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});Q.blending=r7,Q.blendEquation=t7,Q.fog=!0;let Z=new yY(Q);return this.group.add(Z.mesh),Z})}setResolution(J,Q){for(let Z of this.batches)Z.material.resolution.set(J,Q)}begin(){for(let J of this.batches)J.n=0}end(){for(let J of this.batches)J.commit()}batch(J){let Q=0;for(let Z=1;Z<uQ.length;Z++)if(Math.abs(uQ[Z]-J)<Math.abs(uQ[Q]-J))Q=Z;return this.batches[Q]}line(J,Q,Z,K,$={}){if(Q<2)return;let W=$.alpha??1;if(this.strokes(J,Q,z$(Z),W,this.batch(K),$.close??!1),$.hot)this.strokes(J,Q,z$(yQ(Z)),W,this.batch(K*0.42),$.close??!1)}poly(J,Q,Z,K={}){this.line(J.a,J.n,Q,Z,K)}seg(J,Q,Z,K,$,W,X,Y,H=1){let[G,D,U]=z$(X);this.batch(Y).seg(J,Q,Z,K,$,W,G*H,D*H,U*H)}strokes(J,Q,[Z,K,$],W,X,Y){Z*=W,K*=W,$*=W;for(let H=0;H<Q-1;H++){let G=3*H;X.seg(J[G],J[G+1],J[G+2],J[G+3],J[G+4],J[G+5],Z,K,$)}if(Y){let H=3*(Q-1);X.seg(J[H],J[H+1],J[H+2],J[0],J[1],J[2],Z,K,$)}}dispose(){for(let J of this.batches)J.dispose()}}var T$={x0:-7.5,x1:10.25,y0:-4.55,y1:19.9};function w$(J,Q){let Z=J.tract;return-Math.max(-0.2,Math.min(3,Q))*Z.scale/zY(Z.P(-2.5,10.5),Z.P(6.95,7.75))}function S$(J,Q){let Z=J.tract,K=Z.P(-2.5,10.5),$=w$(J,Q.jaw);return(W,X)=>xQ(Z.P(W,X),K,$)}function _$(J,Q,Z,K=0,$=40){let W=Math.cos(-K),X=Math.sin(-K),Y=[];for(let H=0;H<=$;H++){let G=H/$*Math.PI*2,D=Math.cos(G)*Q,U=Math.sin(G)*Z;Y.push({x:J.x+D*W-U*X,y:J.y+D*X+U*W})}return Y}function Pq(J,Q,Z){let K=Math.min(J.x,Q.x),$=Math.max(J.x,Q.x),W=Math.min(J.y,Q.y),X=Math.max(J.y,Q.y),Y=Math.min(Z,($-K)/2,(X-W)/2),H=[],G=(D,U,N)=>{for(let F=0;F<=6;F++){let O=N+F/6*(Math.PI/2);H.push({x:D+Math.cos(O)*Y,y:U+Math.sin(O)*Y})}};return G($-Y,X-Y,0),G(K+Y,X-Y,Math.PI/2),G(K+Y,W+Y,Math.PI),G($-Y,W+Y,3*Math.PI/2),H.push(H[0]),H}var dQ=(J)=>-1.2-0.025*J;function j$(J){let Q=J.tract.scale,Z=J.bodyParams.pharynx;return(K,$)=>({x:K*Q,y:($<7?7-(7-$)*Z:$)*Q})}function V7(J,Q,Z){let K=J.tract,$=(B,p)=>K.P(B,p),W=S$(J,Z),X=K.scale,Y=Z.larynx*X,H=j$(J),G=Q.upperLip.slice(7),D=Q.lowerLip.slice(7),U=P8([H(2.3,-4.6),H(2.38,-1.5),H(2.52,0.4),H(3,1.7),W(5.3,3),W(7.25,3.35),W(7.95,4.6),W(7.55,5.7)],4),N=P8([G[G.length-1],H(7.05,10.6),H(7.75,10.78),H(8.75,11.05),H(9.25,11.65),H(8.95,12.6),H(8.35,13.9),H(7.7,15),H(7.95,16.1),H(7.9,18.1),H(6.9,20.5)],4),F=P8([H(6.9,20.5),H(3,22.9),H(-2.2,22.7),H(-6.9,19.6),H(-8.7,15.4),H(-8.3,11.9),H(-7.4,8.9),H(-6.8,4.8),H(-6.6,0),H(-6.6,-4.6)],4),O=[];for(let B=0;B<9;B++){let p=-4.4+B*1.75;if(p>10.5)break;let j=dQ(p)-2.25;O.push(Pq($(j,p+1.4),$(j+1.6,p),0.32*X))}let E=[[1,9.6],[1.8,9.92],[2.7,10.18],[3.6,10.3],[4.4,10.25],[5.1,10.05],[5.7,9.72],[6.15,9.36],[6.55,9.15],[7,9.6]].map(([B,p])=>K.P(B,p)),q=Q.jawBone.filter((B)=>B.x>0.8*X),R=Q.glottis,k={x:$(1.6,0).x,y:$(0,2.9).y+0.6*Y},V=[];for(let B=0;B<4;B++){let p=R.y-(0.9+B*1)*X;if(p<-4.4)break;V.push([{x:R.x+0.8*X,y:p},{x:R.x+1.05*X,y:p-0.05},{x:R.x+1.05*X,y:p-0.5*X},{x:R.x+0.82*X,y:p-0.45*X},{x:R.x+0.8*X,y:p}])}let A=W(6,5.45),P=Q.tongueCenter,_=[];for(let B=0;B<=16;B++){let p=Math.PI*(0.18+0.9*B/16),j={x:P.x+Math.cos(p)*Q.tongueRadius*1.25,y:P.y+Math.sin(p)*Q.tongueRadius*1.25},b={x:P.x,y:(P.y+A.y)/2},m=[];for(let T=0;T<=12;T++){let w=T/12;m.push({x:(1-w)*(1-w)*A.x+2*(1-w)*w*b.x+w*w*j.x,y:(1-w)*(1-w)*A.y+2*(1-w)*w*b.y+w*w*j.y})}_.push(m)}let I={x:dQ(R.y/X)*X,y:R.y};return{f:Q,model:J,skinLower:[...U,...D.slice().reverse()],skinUpper:[...G,...N.slice(1),...F.slice(1)],inset:P8([H(1.85,-4.6),H(1.9,-0.8),H(2.3,1.6),W(5.2,3.6),W(6.9,3.9),W(7.4,4.9),W(7.2,5.9),H(6.6,9.9),H(7.6,10.9),H(8.55,11.5),H(8.1,13.4),H(7.25,15.2),H(7.45,18),H(3,22.2),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.6,12),H(-6.7,8.7),H(-6.1,4.6),H(-6,-4.6)],3),skull:P8([H(7,16.2),H(7.3,18.5),H(6,20.7),H(3,22.1),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.4,12.6),H(-4.6,12.2),H(-2.2,13.3),H(1,13.7),H(4.1,14.1),H(6.2,14.9)],4),brain:P8([H(6.55,16.3),H(6.75,18.4),H(5.5,20.1),H(2.8,21.4),H(-1.9,21.3),H(-5.8,18.8),H(-7.1,15.4),H(-6.7,13.1),H(-4.4,12.8),H(-2.1,13.9),H(1,14.3),H(4,14.7),H(5.9,15.4)],4),sulcus:P8([H(5.4,19.4),H(2.4,20.5),H(-1.4,20.4),H(-4.8,18.4)],4),eye:_$(H(6.5,15.4),1.1*X,0.95*X),eyeC:H(6.5,15.4),vertebrae:O,cords:[[$(-5.3,-4.6),$(-4.5,-4.6),$(-4.5,11.8),$(-5.1,12.4),$(-5.6,11.6)],[$(-5.1,-4.6),$(-4.7,-4.6),$(-4.72,11.4),$(-5.15,11.6)]],nasal:P8([H(0.3,11.2),H(1.1,10.25),H(2.7,10.75),H(4.6,10.85),H(6.4,10.65),H(7.6,10.85),H(8.45,11.3),H(8,12.2),H(6.7,13.4),H(4.4,13.9),H(1.8,13.6),H(0.2,12.6)],4),turbinates:[[3,11.45,2.1,0.32],[3.5,12.45,1.9,0.3],[4,13.3,1.45,0.22]].map(([B,p,j,b])=>_$(H(B,p),j*X,b*X,-0.04)),palOral:E,palNasal:E.map((B)=>({x:B.x,y:B.y+0.55*X})),jawLower:q,jawUpper:q.map((B)=>({x:B.x,y:B.y+0.75*X})),hyoid:_$(k,0.5*X,0.28*X,0.3,28),thyroid:[{x:R.x+0.75*X,y:R.y-1.6*X},{x:R.x+1.75*X,y:R.y-0.6*X},{x:R.x+1.95*X,y:R.y+1.2*X},{x:R.x+1.45*X,y:R.y+1.9*X},{x:R.x+1.15*X,y:R.y+1.1*X},{x:R.x+1.3*X,y:R.y-0.4*X},{x:R.x+0.75*X,y:R.y-1.6*X}],trachea:[[{x:R.x-0.65*X,y:R.y},{x:R.x-0.75*X,y:-4.8}],[{x:R.x+0.75*X,y:R.y},{x:R.x+0.95*X,y:-4.8}]],rings:V,outerWall:Q.outer.filter((B)=>B.y>R.y||B.x>0),glottisWall:[I,Q.outer.find((B)=>B.y>R.y)??I],fibres:_,folds:[[{x:R.x-0.62*X,y:R.y+0.05},{x:R.x-0.1,y:R.y+0.12*X},{x:R.x-0.62*X,y:R.y+0.32*X},{x:R.x-0.62*X,y:R.y+0.05}],[{x:R.x+0.72*X,y:R.y+0.05},{x:R.x+0.12,y:R.y+0.12*X},{x:R.x+0.72*X,y:R.y+0.32*X},{x:R.x+0.72*X,y:R.y+0.05}]],lowerTeeth:[...Q.lowerTeeth,W(6.8,6),W(6.4,6.2),Q.lowerTeeth[0]]}}class C7{pitch=0;yaw=0;toPitch=0;toYaw=0;next=2;update(J,Q){if(J>=this.next){let K=Math.random()<0.35;this.toPitch=K?0:(Math.random()*2-1)*0.55,this.toYaw=K?0:(Math.random()*2-1)*0.9,this.next=J+1.2+Math.random()*3.5}let Z=1-Math.exp(-Q*28);this.pitch+=(this.toPitch-this.pitch)*Z,this.yaw+=(this.toYaw-this.yaw)*Z}}function fY(J,Q,Z,K,$){if(Q.compact)return kq(J,Q,Z,K,$);let{w:W,h:X}=Q,Y=W-18,H=26;if(Z.length>=3)["F1","F2","F3"].forEach((O,L)=>{S9(J,O,Y-78,H+L*22,{size:12,color:e.amber,ls:0.12,alpha:0.75}),S9(J,String(Math.round(Z[L])),Y,H+L*22,{size:15,color:e.amber,align:"right",ls:0.08})}),S9(J,"HZ",Y,H+64,{size:10,color:e.amber,align:"right",alpha:0.6}),H+=110;for(let O of K)S9(J,O,Y,H,{size:10,color:bQ.secondary,align:"right",ls:0.14}),H+=16;if(!$.length)return;let{slotX:G,slotY:D}=Q,U=Math.max(60,(W-14-G)/2),N=Math.max(56,Math.min(112,(X-8-D)/2)),F=Math.max(22,Math.min(44,N*0.4,U*0.32));$.slice(0,4).forEach((O,L)=>{let E=G+L%2*U,q=D+Math.floor(L/2)*N;L7(J,E+6,q+4,4,O.color),S9(J,O.label.toUpperCase(),E+16,q+8,{size:11,color:O.color,ls:0.2,alpha:0.85});let R=q+18+F*1.1;if(O.ipa)I$(J,E+F*0.6,R,O.value,F*1.45,O.color);else S9(J,O.value.toUpperCase(),E,R,{size:O.value.length>3?F*0.82:F,color:O.color,weight:"m",ls:0.04});if(O.unit)S9(J,O.unit.toUpperCase(),O.ipa?E+F*1.5:E+(O.value.length>3?0:F*1.64),O.ipa||O.value.length<=3?R:R+18,{size:11,color:O.color,ls:0.16,alpha:0.7})})}function kq(J,Q,Z,K,$){let{w:W,h:X}=Q;if(Z.length>=3){let U=(W-24)/3;["F1","F2","F3"].forEach((N,F)=>{S9(J,N,12+F*U,18,{size:10,color:e.amber,ls:0.12,alpha:0.75}),S9(J,String(Math.round(Z[F])),12+F*U+26,18,{size:13,color:e.amber,ls:0.06})})}if(S9(J,K.slice(0,2).join("   "),12,36,{size:9,color:bQ.secondary,ls:0.12}),K.length>2)S9(J,K.slice(2).join("   "),12,50,{size:9,color:bQ.secondary,ls:0.12});let Y=$.slice(0,4);if(!Y.length)return;let H=(W-24)/Y.length,G=X-82,D=Math.max(16,Math.min(30,H*0.28));Y.forEach((U,N)=>{let F=12+N*H;L7(J,F+4,G,3,U.color),S9(J,U.label.toUpperCase(),F+12,G+3,{size:8,color:U.color,ls:0.14,alpha:0.85});let O=G+18+D;if(U.ipa)I$(J,F+D*0.5,O,U.value,D*1.4,U.color);else S9(J,U.value.toUpperCase(),F,O,{size:U.value.length>3?D*0.62:D,color:U.color,weight:"m",ls:0.02});if(U.unit)S9(J,U.unit.toUpperCase(),F,O+16,{size:8,color:U.color,ls:0.14,alpha:0.7})})}var lQ=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},v$=(J,Q,Z)=>Math.max(Q,Math.min(Z,J)),cQ=(J,Q,Z,K)=>J+(Q-J)*(1-Math.exp(-K/Z));class nQ{hz;damping;x=0;v=0;constructor(J,Q){this.hz=J;this.damping=Q}step(J,Q){let Z=2*Math.PI*this.hz,K=Math.max(1,Math.ceil(Q/0.008)),$=Q/K;for(let W=0;W<K;W++)this.v+=(Z*Z*(J-this.x)-2*this.damping*Z*this.v)*$,this.x+=this.v*$;return this.x}}function _q(J){let Q=J.t.pressureRms,Z=J.nPh+J.nOr-3;return Z>=J.nPh&&Z<Q.length?Q[Z]/980.665:0}class v6{puff=0;brow=0;lid=0;lookUp=0;content=0;nod=0;tilt=0;clock=0;cheeks=new nQ(6.5,0.32);nodSpring=new nQ(2.4,0.42);tiltSpring=new nQ(3.2,0.3);ref=NaN;fast=NaN;held=0;hold=0;nextBlink=1.5+Math.random()*2;blinkAt=-1;secondBlink=!1;lastStep=-1;update(J,Q){this.clock+=Q;let Z=J?.t,K=!!Z&&Z.voicing>0.45&&Z.gate>0.3&&Z.f0>30&&Z.outRms>0.004,$=J?lQ(1.5,7,_q(J)):0;this.puff=v$(this.cheeks.step($,Q),-0.35,1.25);let W=0,X=0;if(K){let F=Math.log2(Z.f0);if(!Number.isFinite(this.ref)||Math.abs(12*(F-this.ref))>14)this.ref=this.fast=F;if(this.ref=cQ(this.ref,F,5,Q),Math.abs(12*(F-this.fast))>2.5)this.fast=F,this.held=0;this.fast=cQ(this.fast,F,0.35,Q),this.held+=Q,W=12*(F-this.ref),X=12*(F-this.fast)}else this.held=0;let Y=(K?v$(W/6,-0.7,1):0)+0.3*this.content;this.brow=cQ(this.brow,Y,K?0.12:0.45,Q),this.lookUp=0.32*Math.max(0,this.brow);let H=K?0.92*lQ(0.9,1.9,this.held)*lQ(0.15,0.55,this.brow):0;if(this.hold=cQ(this.hold,H,H>this.hold?0.35:0.08,Q),this.clock>=this.nextBlink&&this.hold<0.2)this.blinkAt=this.clock,this.secondBlink=!this.secondBlink&&Math.random()<0.18,this.nextBlink=this.clock+(this.secondBlink?0.28:2+Math.random()*4.5);let G=(this.clock-this.blinkAt)/0.17,D=this.blinkAt>=0&&G<1?Math.sin(Math.PI*G)**0.7:0;this.lid=Math.max(D,this.hold,0.95*this.content);let U=J?.beatStep??-1;if(U>=0&&this.lastStep>=0&&U!==this.lastStep){let F=U<this.lastStep;if(F||Math.floor(U/4)!==Math.floor(this.lastStep/4))this.nodSpring.v-=F||Math.floor(U/16)!==Math.floor(this.lastStep/16)?1.3:0.8}this.lastStep=U,this.nod=this.nodSpring.step(0.13*this.brow,Q);let N=lQ(0.6,2,this.held)*0.07*Math.sin(this.clock*1.7);this.tilt=this.tiltSpring.step(N+0.05*v$(X,-1.5,1.5),Q)}}function sQ(J,Q,Z){let K=J.tract,$=S$(J,Z),W={x:(Q.upperLip[6].x+Q.lowerLip[6].x)/2+0.15,y:(Q.upperLip[6].y+Q.lowerLip[6].y)/2};return[{id:"tongue",pos:Q.tongueCenter,label:"Tongue body"},{id:"tip",pos:Q.tip,label:"Tongue tip"},{id:"jaw",pos:$(7.5,4.9),label:"Jaw"},{id:"lips",pos:W,label:"Lips"},{id:"velum",pos:Q.velum[Math.floor(Q.velum.length/2)],label:"Soft palate"},{id:"larynx",pos:{x:Q.glottis.x+1.2*K.scale,y:Q.glottis.y},label:"Larynx"}]}var Tq=[0.09,0.06,0.03],n8={x0:-9.4,x1:T$.x1,y0:T$.y0,y1:23.5},b$=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)};function wq(J,Q,Z){let K=1.22*Q,$=1.08*Q,W=(O,L)=>{let E=[];for(let q=0;q<=14;q++){let R=O+(L-O)*q/14;E.push({x:J.x+K*Math.cos(R),y:J.y+$*Math.sin(R)})}return E},X=Math.PI/180,Y=Math.max(0,Z.brow),H=30*X+14*X*Y,G=-32*X,D=H+(G-H)*Z.lid,U=[],N=0.42*Q*Z.brow,F=0.3*Q*Math.max(0,-Z.brow);for(let O=0;O<=12;O++){let L=-1+O/6,E=(1+L)/2;U.push({x:J.x+0.1*Q+0.9*Q*L,y:J.y+1.4*Q+0.2*Q*(1-L*L)+N-F*E})}return[{pts:W(100*X,D),w:1.15,alpha:0.9},{pts:W(-78*X,G),w:1,alpha:0.75},{pts:U,w:1.4,alpha:0.85}]}function Sq(J,Q,Z){if(Math.abs(Z)<0.01)return null;let K={x:(J.upperLip[6].x+J.lowerLip[6].x)/2,y:(J.upperLip[6].y+J.lowerLip[6].y)/2},$=0.6*Q*Z;return(W)=>{let X=Math.abs(W.y-K.y)/(2.6*Q);if(X>=1)return W;let Y=(1-X*X)**2*b$(0.03,0.45,X)*b$(K.x-1.2*Q,K.x-0.5*Q,W.x);return Y?{x:W.x+$*Y,y:W.y}:W}}class jq{particles=[];scale=20;ox=0;oy=0;w=0;h=0;compact=!1;sparkSeed=1;geo=null;echoes=[];clock=0;lastEcho=-1;gaze=new C7;face=new v6;constructor(){for(let J=0;J<170;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN})}resize(J,Q){this.w=J,this.h=Q,this.compact=J<560;let Z=12,K=this.compact?62:10,$=this.compact?92:8;this.scale=Math.max(1,Math.min((J-2*Z)/(n8.x1-n8.x0),(Q-K-$)/(n8.y1-n8.y0)));let W=J-2*Z-(n8.x1-n8.x0)*this.scale;this.ox=Z+(this.compact?W/2:Math.min(W/2,Math.max(0,W-220)))-n8.x0*this.scale,this.oy=K+Math.max(0,(Q-K-$-(n8.y1-n8.y0)*this.scale)/2)+n8.y1*this.scale;for(let X of this.particles)X.px=NaN}X(J){return this.ox+J.x*this.scale}Y(J){return this.oy-J.y*this.scale}P(J){return[this.ox+J.x*this.scale,this.oy-J.y*this.scale]}toBody(J,Q){return{x:(J-this.ox)/this.scale,y:(this.oy-Q)/this.scale}}get pxPerCm(){return this.scale}handles(J,Q,Z){return sQ(J,Q,Z)}geometry(J,Q,Z){if(this.geo&&this.geo.f===Q&&this.geo.model===J)return this.geo;return this.geo=V7(J,Q,Z)}lens(J,Q,Z){let K=this.gaze;K.update(this.clock,Z);let $=0.85*Q*Math.cos(K.yaw),W=K.pitch+this.face.lookUp,X=Math.cos(W),Y=Math.sin(W),H={x:J.x+$*X,y:J.y+$*Y},G=(0.18+0.2*Math.abs(Math.sin(K.yaw)))*Q,D=0.42*Q,U=[];for(let N=0;N<=20;N++){let F=N/20*Math.PI*2,O=Math.cos(F)*G,L=Math.sin(F)*D;U.push({x:H.x+O*X-L*Y,y:H.y+O*Y+L*X})}return U}draw(J,Q,Z,K,$,W,X){this.clock+=X.dt;let Y=this.geometry(Q,Z,K),H=(E)=>E.map((q)=>this.P(q)),G=(E,q,R,k={})=>nJ(J,H(E),q,R,k);G(Y.inset,e.blueDim,0.9,{alpha:0.9}),G(Y.skull,e.blueDim,0.9,{close:!0}),G(Y.brain,e.blueMid,1.1,{close:!0}),G(Y.sulcus,e.blueDim,0.9),G(Y.eye,e.blueMid,1.1);let D=Q.tract.scale,U=Sq(Z,D,this.face.puff),N=(E)=>U?E.map(U):E;G(this.lens(Y.eyeC,D,X.dt),e.blueDim,0.9,{alpha:1-b$(0.45,0.9,this.face.lid)});for(let E of wq(Y.eyeC,D,this.face))G(E.pts,e.blue,E.w,{alpha:E.alpha});for(let E of Y.vertebrae)G(E,e.blueDim,1);G(Y.cords[0],e.blueDim,0.8,{alpha:0.8}),G(Y.cords[1],e.blueDim,0.8,{alpha:0.6}),G(Y.nasal,e.blueMid,1,{close:!0});for(let E of Y.turbinates)G(E,e.blueDim,0.9);G(Y.palOral,e.blueMid,1.1),G(Y.palNasal,e.blueMid,1.1),G(Y.hyoid,e.blueDim,1),G(Y.thyroid,e.blueDim,1);for(let E of Y.trachea)G(E,e.blueMid,1);for(let E of Y.rings)G(E,e.blueDim,0.9);if(W.pressure&&$)this.drawPressure(J,Q,Z,$);else if(W.grid)for(let E of Z.grid)M7(J,this.X(E.inner),this.Y(E.inner),this.X(E.outer),this.Y(E.outer),e.blueDim,0.9,{alpha:0.7});if(W.particles&&$)this.drawParticles(J,Q,Z,$,X.dt);if($&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock,this.echoes.push({t:this.clock,tongue:Z.tongue.slice(),jaw:Y.jawLower,upperLip:sJ(N(Z.upperLip).map((E)=>[E.x,E.y])),lowerLip:sJ(N(Z.lowerLip).map((E)=>[E.x,E.y]))});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if($)Tq.forEach((E,q)=>{let R=this.nearestEcho(this.clock-E);if(!R)return;let k=0.1+0.07*q;G(R.tongue,e.green,1,{alpha:k}),G(R.jaw,e.red,1,{alpha:k*0.9});let V=(A)=>nJ(J,A.map(([P,_])=>[this.ox+P*this.scale,this.oy-_*this.scale]),e.pink,1,{alpha:k*0.9});V(R.upperLip),V(R.lowerLip)});G(N(Y.skinLower),e.blue,1.7,{hot:!0}),G(N(Y.skinUpper),e.blue,1.7,{hot:!0}),G(Y.outerWall,e.blue,1.4,{hot:!0}),G(Z.inner,e.blue,1.3,{alpha:0.9}),G(Y.glottisWall,e.blue,1.2,{alpha:0.8}),G(Z.epiglottis.slice(0,3),e.blue,2.2,{alpha:0.85}),G(Z.upperTeeth,e.blueMid,1.1,{close:!0}),G(Y.lowerTeeth,e.blueMid,1.1);for(let E of Y.folds)G(E,e.blue,1);let F=H(Z.tongue);J.save();let O=new Path2D;F.forEach(([E,q],R)=>R?O.lineTo(E,q):O.moveTo(E,q)),O.closePath(),J.clip(O);for(let E of Y.fibres)G(E,e.green,0.8,{alpha:0.32});J.restore(),nJ(J,F,e.green,1.6,{hot:!0}),G(Y.jawLower,e.red,1.5,{hot:!0}),G(Y.jawUpper,e.red,1,{alpha:0.45});let L=(E,q)=>sJ(E.map((R)=>this.P(R)),q);if(nJ(J,L(N(Z.upperLip),2),e.pink,1.5,{hot:!0}),nJ(J,L(N(Z.lowerLip),2),e.pink,1.5,{hot:!0}),nJ(J,L(Z.velum,3),e.white,1.25,{alpha:0.92}),$)this.drawTurbulence(J,Q,Z,$);if(W.calipers)this.drawCalipers(J,Z);this.drawHandles(J,Q,Z,K,X.hover,X.drag),this.drawReadouts(J,X.formants,X.info,X.slots)}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}gridPoint(J,Q,Z){let K=J.grid;if(K.length<2)return null;if(Q<=K[0].s){let N=Math.max(0,Q/Math.max(0.01,K[0].s)),F=J.glottis,O={x:(K[0].inner.x+K[0].outer.x)/2,y:(K[0].inner.y+K[0].outer.y)/2},L=0.35;return{x:F.x+(O.x-F.x)*N+Z*0.35*0.5,y:F.y+(O.y-F.y)*N}}let $=0,W=K.length-1;if(Q>=K[W].s)return null;while(W-$>1){let N=$+W>>1;if(K[N].s<=Q)$=N;else W=N}let X=(Q-K[$].s)/Math.max(0.000001,K[W].s-K[$].s),Y=K[$].inner.x+(K[W].inner.x-K[$].inner.x)*X,H=K[$].inner.y+(K[W].inner.y-K[$].inner.y)*X,G=K[$].outer.x+(K[W].outer.x-K[$].outer.x)*X,D=K[$].outer.y+(K[W].outer.y-K[$].outer.y)*X,U=0.5+0.5*Z*0.82;return{x:Y+(G-Y)*U,y:H+(D-H)*U}}nodeValueAtS(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}drawPressure(J,Q,Z,K){let $=K.t,W=Q.nodeS($.phLen,$.orLen);if(W.length!==$.pressureRms.length)return;for(let X of Z.grid){let Y=Math.pow(hQ(this.nodeValueAtS($.pressureRms,W,X.s)),0.85);M7(J,this.X(X.inner),this.Y(X.inner),this.X(X.outer),this.Y(X.outer),fQ(Y),1.15,{alpha:0.35+0.65*Y})}}drawParticles(J,Q,Z,K,$){let W=K.t,X=Q.nodeS(W.phLen,W.orLen),Y=new Float32Array(W.phAreas.length+W.orAreas.length);Y.set(W.phAreas,0),Y.set(W.orAreas,W.phAreas.length);let H=Z.lipS,G=[new Path2D,new Path2D,new Path2D];for(let D of this.particles){let U=this.nodeValueAtS(W.flow,X,D.s),N=Math.max(0.05,this.nodeValueAtS(Y,X,D.s)),F=U/N,O=Math.sign(F)*2.2*Math.log1p(Math.abs(F)/30);if(D.s+=O*$,D.life-=$*0.25,D.s>H||D.s<0||D.life<=0||Math.abs(F)<3){if(!(Math.abs(F)<3&&D.life>0)){D.s=Math.random()*0.8,D.u=Math.random()*2-1,D.life=0.6+Math.random()*0.8,D.px=NaN;continue}}let L=this.gridPoint(Z,D.s,D.u);if(!L)continue;let E=this.X(L),q=this.Y(L);if(Number.isFinite(D.px)){let R=Math.min(2,Math.floor(Math.min(1,Math.abs(O)/6)*Math.min(1,D.life)*3));G[R].moveTo(D.px,D.py),G[R].lineTo(E,q)}D.px=E,D.py=q}G.forEach((D,U)=>S6(J,D,"#ffe2a8",1.1,{alpha:0.16+0.2*U}))}drawTurbulence(J,Q,Z,K){let $=K.t;if(!($.noiseLevel>1)||$.noiseNode<0)return;let W=Q.branchS($.noiseNode,$.phLen,$.orLen);if(W<0)return;let X=Math.min(1,Math.log10($.noiseLevel)/3.2);if(X<=0.05)return;let Y=this.sparkSeed=this.sparkSeed*16807%2147483647,H=()=>(Y=Y*16807%2147483647)/2147483647;for(let G=0;G<30;G++){let D=this.gridPoint(Z,W+0.2+H()*1.2,H()*2-1);if(!D)continue;L7(J,this.X(D),this.Y(D),0.6+H()*1.4,"#f4fbff",0.15+0.7*X*H())}}drawCalipers(J,Q){let Z=-1,K=1/0;for(let q=2;q<Q.grid.length-1;q++)if(Q.grid[q].area<K)K=Q.grid[q].area,Z=q;if(Z<0||K>=1.2)return;let $=Q.grid[Z],[W,X]=this.P($.inner),[Y,H]=this.P($.outer);M7(J,W,X,Y,H,e.white,1.4,{hot:!0});let G=-(H-X),D=Y-W,U=Math.hypot(G,D)||1;for(let[q,R]of[[W,X],[Y,H]])M7(J,q-G/U*4,R-D/U*4,q+G/U*4,R+D/U*4,e.white,1.2);let N=Q.grid[Q.grid.length-1],O=Math.max(this.P(N.inner)[0],this.P(N.outer)[0])-Math.max(W,Y)<1.5*this.pxPerCm,L=O?Math.min(W,Y)-10:Math.max(W,Y)+10,E=Math.min(X,H)-4;S9(J,K<=0.0005?"CLOSED":`${K.toFixed(2)} CM²`,L,E,{size:11,color:e.white,ls:0.12,align:O?"right":"left"})}drawHandles(J,Q,Z,K,$,W){let X={tongue:e.green,jaw:e.red,lips:e.pink,velum:e.white,tip:e.blueMid,larynx:e.blueMid},Y={tongue:8,jaw:7,lips:7,velum:6,tip:5,larynx:5};for(let H of this.handles(Q,Z,K)){let G=this.X(H.pos),D=this.Y(H.pos),U=H.id===W||H.id===$;if(_Y(J,G,D,X[H.id],Y[H.id]+(U?2:0),U?1:0.9),U)kY(J,G,D,28,X[H.id],1,{alpha:0.75}),S9(J,H.label.toUpperCase(),G+32,D-18,{size:12,color:X[H.id],ls:0.18})}}drawReadouts(J,Q,Z,K){fY(J,{w:this.w,h:this.h,compact:this.compact,slotX:this.X({x:3.35,y:0}),slotY:this.Y({x:0,y:2.05})},Q,Z,K)}}var s8=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},hY=(J)=>Math.max(0,Math.min(1,J));function HJ(J,Q){if(Q<=J[0][0])return J[0][1];for(let Z=1;Z<J.length;Z++)if(Q<=J[Z][0]){let[K,$]=J[Z-1],[W,X]=J[Z];return $+(X-$)*(Q-K)/(W-K)}return J[J.length-1][1]}var vq=[[-4.6,5.3],[0,5.4],[2.5,5.5],[4.5,5.25],[6.5,5.5],[8.5,6.1],[10.5,6.6],[12.5,7],[15,7.3],[17.5,7.65],[19.5,7.4],[21,6.5],[22.2,4.6],[23,1]],bq=[[3.4,5.9],[4.6,6.2],[5.7,6.15],[6.5,6.2],[8,6.35],[9.5,6.35],[10.6,6.55],[11.6,6.75],[12.6,6.9],[13.9,7.15],[15,7.45],[16.1,7.95]],yq=[[3.4,2],[4.6,2.2],[5.7,2.4],[6.5,2.6],[10.6,1.7],[11,1.75],[11.65,1.2],[12.6,0.95],[13.9,0.75],[15,0.9],[16.1,1.6]],fq=[[-4.6,0.5],[3,0.5],[6,0.42],[12,0.42],[16,0.45],[23,0.45]],hq=[[-3,8.5],[-1.6,8],[-0.6,6.4],[1.2,4.6],[3.5,3.6],[5.3,3],[7.3,3.3],[8.6,4.4]],xq=[[6,-0.6],[7.4,-0.8],[9.6,-1.9],[10.6,-2.5],[12,-2.6]],gq=[[12.3,4],[13,5.6],[14.5,6.4],[16.5,6.9],[18.5,6.6],[20,5.4],[21,3.6],[21.45,0.5]],pq=[[0,1.5],[0.15,1.9],[0.35,2.35],[0.6,2.45],[0.8,2.2],[0.92,1.5],[1,0.55]],mq=[[0,1.3],[0.35,1.1],[0.7,0.9],[0.9,0.55],[1,0.25]],uq=[[0.85,1.05,0.7],[0.68,0.95,0.65],[0.78,1.1,0.8],[0.7,0.85,0.9],[0.68,0.8,0.9],[1,0.75,1.1],[0.92,0.7,1.05]],dq=[[0.54,0.9,0.6],[0.6,0.92,0.62],[0.7,1,0.75],[0.7,0.85,0.8],[0.72,0.8,0.85],[1.1,0.72,1.05],[1.05,0.7,1]],lq=3,oJ=2.2,uY=(J)=>Math.abs(J)<1?(1-J*J)**2:0;function oQ(J,Q,Z=!1){let K=Math.min(1,Math.abs(Q)/J.W),$=Math.pow(1-Math.pow(K,J.pf),1/J.pf);return J.xw+(J.Fs-J.xw)*$+(Z?0:J.E*uY(Q/J.wf))}function cq(J,Q){let Z=Q>J.xw,K=Z?(Q-J.xw)/Math.max(0.000001,J.Fs-J.xw):(J.xw-Q)/Math.max(0.000001,J.xw-J.Bk),$=Z?J.pf:oJ;return J.W*Math.pow(Math.max(0,1-Math.pow(Math.min(1,K),$)),1/$)}function nq(J,Q,Z){Z.length=0;let K=12,$=10,W=16;for(let Y=0;Y<K;Y++){let H=Math.PI-Y/K*(Math.PI/2);Z.push(J.xw-(J.xw-J.Bk)*Math.pow(Math.abs(Math.cos(H)),2/oJ),J.W*Math.pow(Math.sin(H),2/oJ))}let X=Math.asin(Math.min(1,Math.pow(Q/J.W,J.pf/2)));for(let Y=0;Y<$;Y++){let H=Math.PI/2-Y/$*(Math.PI/2-X),G=J.W*Math.pow(Math.sin(H),2/J.pf);Z.push(J.xw+(J.Fs-J.xw)*Math.pow(Math.cos(H),2/J.pf)+J.E*uY(G/J.wf),G)}for(let Y=0;Y<=W;Y++){let H=Q*(1-Y/W);Z.push(oQ(J,H),H)}}class f${dy;rows=[];y0;y1;constructor(J,Q,Z){this.dy=Q;let K=1/0,$=-1/0;for(let W of J)K=Math.min(K,W.y),$=Math.max($,W.y);this.y0=K,this.y1=$;for(let W=K;W<=$;W+=Q){let X=-1/0,Y=1/0;for(let H=0;H<J.length-1;H++){let G=J[H],D=J[H+1];if(G.y>W===D.y>W)continue;let U=G.x+(D.x-G.x)*(W-G.y)/(D.y-G.y);X=Math.max(X,U),Y=Math.min(Y,U)}this.rows.push(X>Y?Z(W,X,Y):null)}}at(J){let Q=(J-this.y0)/this.dy,Z=Math.floor(Q);if(Z<0||Z>=this.rows.length-1)return null;let K=this.rows[Z],$=this.rows[Z+1];if(!K||!$)return K??$;let W=Q-Z,X=(Y,H)=>Y+(H-Y)*W;return{F:X(K.F,$.F),Bk:X(K.Bk,$.Bk),Fs:X(K.Fs,$.Fs),W:X(K.W,$.W),xw:X(K.xw,$.xw),E:X(K.E,$.E),wf:X(K.wf,$.wf),pf:X(K.pf,$.pf)}}}class BJ{lines=[];cur=[];p(J,Q,Z){return this.cur.push(J,Q,Z),this}end(J=!1){if(J&&this.cur.length>=3)this.cur.push(this.cur[0],this.cur[1],this.cur[2]);if(this.cur.length>=6)this.lines.push(new Float32Array(this.cur));this.cur=[]}ellipse(J,Q,Z,K=24,$=0,W=Math.PI*2){for(let X=0;X<=K;X++){let Y=$+(W-$)*X/K,H=Math.cos(Y),G=Math.sin(Y);this.p(J[0]+Q[0]*H+Z[0]*G,J[1]+Q[1]*H+Z[1]*G,J[2]+Q[2]*H+Z[2]*G)}this.end()}}function dY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=1-s8(7.6,9.1,X),H=HJ(hq,$),G=s8(H-1.5,H+0.15,X),D=HJ(xq,X),U=s8(D-0.7,D+0.9,$);return Y*G*U}var sq=1.7,iq=0.55;function lY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=(($-5.2)/2.3)**2+((X-8.3)/2.4)**2;return Y<1?(1-Y)**2:0}function xY(J,Q,Z,K){if(Q===0||K===0)return[0,0];let $=Q*K*J;return[iq*$,Math.sign(Z)*sq*$*s8(0.4*J,2.6*J,Math.abs(Z))]}function oq(J,Q,Z){let K=Q.length;if(Q.every(Boolean))return[Z?[...J,J[0],J[1],J[2]]:J];let $=[],W=Z?Q.indexOf(!1)+1:0,X=[];for(let Y=0;Y<K;Y++){let H=(W+Y)%K;if(Q[H])X.push(J[3*H],J[3*H+1],J[3*H+2]);else{if(X.length>=6)$.push(X);X=[]}}if(X.length>=6)$.push(X);return $}function aq(J,Q){let Z=[0];for(let X=1;X<J.length;X++)Z.push(Z[X-1]+Math.hypot(J[X].x-J[X-1].x,J[X].y-J[X-1].y));let K=Z[Z.length-1],$=[],W=0;for(let X=0;X<Q;X++){let Y=K*X/(Q-1);while(W<J.length-2&&Z[W+1]<Y)W++;let H=(Y-Z[W])/Math.max(0.000000001,Z[W+1]-Z[W]);$.push({x:J[W].x+(J[W+1].x-J[W].x)*H,y:J[W].y+(J[W+1].y-J[W].y)*H})}return $}function iQ(J,Q,Z){let K=Z*Q[Q.length-1],$=0;while($<J.length-2&&Q[$+1]<K)$++;let W=(K-Q[$])/Math.max(0.000000001,Q[$+1]-Q[$]);return{x:J[$].x+(J[$+1].x-J[$].x)*W,y:J[$].y+(J[$+1].y-J[$].y)*W}}var h$=(J)=>{let Q=[0];for(let Z=1;Z<J.length;Z++)Q.push(Q[Z-1]+Math.hypot(J[Z].x-J[Z-1].x,J[Z].y-J[Z-1].y));return Q};function rq(J){let Q=J.tract,Z=Q.scale,K=J.bodyParams.pharynx,$=j$(J),W=(S)=>$(0,S).y,X=(S)=>S/Z>=7?S/Z:7-(7-S/Z)/K,Y=(S,g)=>Q.P(S,g),H={...vQ,jaw:0,lipAp:0,labiodental:0},G=J.frame(H),D=V7(J,G,H),U=[...D.skinLower,...D.skinUpper],N=new f$(U,0.08*Z,(S,g,u)=>{let a=X(S),Q0=a>=3.4&&a<=16.1?HJ(bq,a)*Z:1/0,r=Math.min(g,Q0),z0=2.2+0.4*s8(2.5,3.5,a)*(1-s8(17,18.5,a));return{F:g,Bk:u,Fs:r,W:HJ(vq,a)*Z,xw:u+(r-u)*HJ(fq,a),E:g-r,wf:HJ(yq,a)*Z,pf:z0}}),F=Y(-2.5,10.5),O=G.upperLip[G.upperLip.length-1].y,L=G.lowerLip[G.lowerLip.length-1].y,E=lq*Z,q=(S,g,u,a)=>g>L&&g<O&&Math.abs(u)<E&&S>a.xw,R=[],k=(S,g,u)=>{for(let a of oq(S,g,u)){let Q0=a.length/3,r=new Float32Array(Q0),z0=new Float32Array(Q0);for(let q0=0;q0<Q0;q0++)r[q0]=dY(Z,K,a[3*q0],a[3*q0+1]),z0[q0]=lY(Z,K,a[3*q0],a[3*q0+1]);R.push({a:new Float32Array(a),w:r,c:z0})}},V=[],A=1.4*Z;for(let S=N.y0+0.25*Z;S<N.y1-0.2*Z;S+=A){let g=N.at(S);if(!g||g.W<0.2*Z)continue;nq(g,Math.min(0.6*g.W,3.6*Z),V);let u=[],a=[],Q0=V.length/2;for(let r=0;r<Q0;r++)u.push(V[2*r],S,V[2*r+1]);for(let r=Q0-2;r>0;r--)u.push(V[2*r],S,-V[2*r+1]);for(let r=0;r<u.length/3;r++)a.push(!q(u[3*r],S,u[3*r+2],g));k(u,a,!0)}let P=0.3*Z;for(let S of[-3.6,-2.4,-1.2,1.2,2.4,3.6].map((g)=>g*Z)){let g=[],u=[];for(let a=N.y0+0.1*Z;a<=N.y1;a+=P){let Q0=N.at(a);if(!Q0||Math.abs(S)>0.97*Q0.W){k(g,u,!1),g=[],u=[];continue}let r=oQ(Q0,S);g.push(r,a,S),u.push(!q(r,a,S,Q0))}k(g,u,!1)}for(let S of[0.5,0.8].map((g)=>g*Math.PI))for(let g of[1,-1]){let u=[],a=[];for(let Q0=N.y0+0.1*Z;Q0<=N.y1;Q0+=P){let r=N.at(Q0);if(!r||r.W<0.2*Z)continue;u.push(r.xw-(r.xw-r.Bk)*Math.pow(Math.abs(Math.cos(S)),2/oJ),Q0,g*r.W*Math.pow(Math.sin(S),2/oJ)),a.push(!0)}k(u,a,!1)}let _=[],I=[],B=(S,g,u,a,Q0,r=!1)=>{let z0=new BJ;Q0(z0),S.push({lines:z0.lines,color:g,width:u,alpha:a,hot:r})},p=(S,g,u,a)=>{let Q0=P8(g.map(([r,z0])=>$(r,z0)),4);Q0.forEach((r,z0)=>{let q0=N.at(r.y);S.p(r.x,r.y,a*((q0?cq(q0,r.x):0)+u(z0,Q0.length)))}),S.end()};B(_,e.blueDim,1.05,0.9,(S)=>{for(let g of[1,-1]){p(S,[[-2.55,13.4],[-2.85,14.75],[-3.65,15.45],[-4.6,15.25],[-5.2,14.25],[-5.4,12.8],[-5.05,11.3],[-4.55,10.2],[-3.95,9.55],[-3.35,9.65],[-3,10.35]],(a,Q0)=>(0.25+1.2*Math.sin(Math.PI*a/(Q0-1))**1.5)*Z,g),p(S,[[-3.15,14.3],[-3.95,14.45],[-4.55,13.5],[-4.6,12.1],[-4.15,11.05]],()=>0.55*Z,g),p(S,[[-2.7,11.2],[-2.55,11.85],[-2.75,12.35]],()=>0.35*Z,g);let u=[];for(let a=0;a<=16;a++)u.push([-3.5+0.6*Math.cos(a/16*Math.PI*2),12+0.85*Math.sin(a/16*Math.PI*2)]);p(S,u,()=>0.12*Z,g)}}),B(_,e.blueMid,1,0.8,(S)=>{for(let g of[1,-1]){for(let a=14.6;a>=11.3;a-=0.15){let Q0=W(a),r=N.at(Q0);if(!r)continue;let z0=g*(0.3+1.05*(14.6-a)/3.3)*Z;S.p(oQ(r,z0),Q0,z0)}S.end();let u=[[7.95,11.05,0.95],[7.4,11.15,1.45],[7.25,11.6,1.55],[7.55,12.1,1.35],[8.2,12.15,1]];for(let[a,Q0,r]of u)S.p(a*Z,W(Q0),g*r*Z);S.end()}}),B(_,e.blueMid,1,0.9,(S)=>{for(let g of[1,-1])S.ellipse([8.05*Z,W(10.98),g*0.62*Z],[0.42*Z,0.04*Z,0],[0,0,0.26*Z],16)});let j=new f$(D.brain,0.08*Z,(S,g,u)=>({F:g,Bk:u,Fs:g,W:HJ(gq,X(S))*Z,xw:u+(g-u)*0.48,E:0,wf:1,pf:2.3}));B(_,e.blueMid,0.85,0.32,(S)=>{for(let g=j.y0+0.6*Z;g<j.y1-0.15*Z;g+=1.5*Z){let u=j.at(g);if(!u)continue;for(let a=0;a<=48;a++){let Q0=a/48*Math.PI*2,r=Math.cos(Q0),z0=Math.sin(Q0),q0=r>=0?u.pf:oJ,y0=r>=0?u.xw+(u.Fs-u.xw)*Math.pow(r,2/q0):u.xw-(u.xw-u.Bk)*Math.pow(-r,2/q0);S.p(y0,g,Math.sign(z0)*u.W*Math.pow(Math.abs(z0),2/q0))}S.end()}for(let g of[0.3,0.7].map((u)=>u*Math.PI))for(let u of[1,-1]){for(let a=j.y0;a<=j.y1;a+=0.3*Z){let Q0=j.at(a);if(!Q0)continue;let r=Math.cos(g),z0=Math.sin(g),q0=r>=0?Q0.pf:oJ,y0=r>=0?Q0.xw+(Q0.Fs-Q0.xw)*Math.pow(r,2/q0):Q0.xw-(Q0.xw-Q0.Bk)*Math.pow(-r,2/q0);S.p(y0,a,u*Q0.W*Math.pow(z0,2/q0))}S.end()}}),B(_,e.blueDim,0.9,0.6,(S)=>{for(let g=0;g<9;g++){let u=-4.4+g*1.75;if(u>10.5)break;let a=dQ(u)-2.25,Q0=Y(a,u+0.08),r=Y(a,u+1.32),z0=Y(a+0.8,0).x,q0=0.8*Z,y0=1.05*Z;for(let i0 of[Q0.y,r.y])S.ellipse([z0,i0,0],[q0,0,0],[0,0,y0],24);for(let i0 of[0.25,0.75,1.25,1.75].map((r0)=>r0*Math.PI))S.p(z0+q0*Math.cos(i0),Q0.y,y0*Math.sin(i0)).p(z0+q0*Math.cos(i0),r.y,y0*Math.sin(i0)).end();let m0=(Q0.y+r.y)/2,h0=z0-2.15*Z;S.ellipse([h0,m0,0],[0.72*Z,0,0],[0,0,0.88*Z],20);for(let i0 of[1,-1])S.p(z0-0.7*Z,m0,i0*0.55*Z).p(h0+0.45*Z,m0,i0*0.72*Z).end(),S.p(z0-0.5*Z,m0,i0*0.95*Z).p(z0-0.9*Z,m0-0.1*Z,i0*2.3*Z).end();S.p(h0-0.72*Z,m0,0).p(h0-1.8*Z,m0-0.55*Z,0).end()}}),B(_,e.blueDim,0.85,0.5,(S)=>{let g=Y(-4.9,0).x;for(let u=-4.4;u<=11;u+=1.75)S.ellipse([g,Y(0,u).y,0],[0.42*Z,0,0],[0,0,0.6*Z],16);for(let u of[1,-1])S.p(g,Y(0,-4.6).y,u*0.6*Z).p(g,Y(0,11.4).y,u*0.6*Z).end()}),B(_,e.blueDim,0.9,0.7,(S)=>{for(let g of[1,-1]){for(let u of D.nasal)S.p(u.x,u.y,g*1.2*Z);S.end(!0);for(let u of D.turbinates){for(let a of u)S.p(a.x,a.y,g*0.95*Z);S.end()}}});let b=(S,g,u)=>{let a=[];for(let Q0=0;Q0<=60;Q0++){let r=u*Q0/60;a.push({x:S-g*Math.pow(r/u,1.85),y:r})}return{pts:a,cum:h$(a)}},m=(S,g,u,a,Q0,r,z0)=>{let q0=b(g,u,a),y0=q0.cum[q0.cum.length-1],m0=Q0.reduce((i0,r0)=>i0+r0[0],0),h0=0.97*y0/(m0*Z);for(let i0 of[1,-1]){let r0=0;for(let[V9,E9,O9]of Q0){let v=V9*Z*h0,z9=E9*Z,J9=O9*Z,G9=(r0+v/2)/y0;r0+=v;let z=iQ(q0.pts,q0.cum,G9),M=iQ(q0.pts,q0.cum,Math.min(1,G9+0.01)),y=iQ(q0.pts,q0.cum,Math.max(0,G9-0.01)),s=M.x-y.x,W0=M.y-y.y,G0=Math.hypot(s,W0)||1;s/=G0,W0/=G0;let F0=W0,t=-s,K0=r(z.y/a),R0=(A0,N0,U0=0)=>[z.x+s*A0-F0*U0,K0+z0*N0,i0*(z.y+W0*A0-t*U0)];for(let[A0,N0]of[[-0.5,0],[-0.5,0.55],[-0.38,1],[0,1.08],[0.38,1],[0.5,0.55],[0.5,0]])S.p(...R0(A0*v,N0*z9));S.end(!0);for(let[A0,N0]of[[-0.45,0.1],[0.45,0.1],[0.45,0.9],[-0.45,0.9]])S.p(...R0(A0*v,0,N0*J9));S.end(!0)}}},T=Y(7.3,0).x,w=4.2*Z,n=2.65*Z;B(_,e.blue,1,0.8,(S)=>m(S,T,w,n,uq,(g)=>(7.95+0.3*g*g)*Z,1)),B(_,e.blueMid,1,0.6,(S)=>{for(let g of[0,2,4,5,6,7]){let u=D.palOral[g],a=Math.max(0,(T-u.x)/w),Q0=(a>=1?n:n*Math.pow(a,0.5405405405405405))-0.45*Z,r=(8.95+0.3*Math.min(1,Q0/n)**2)*Z;if(Q0<0.6*Z||u.y<r+0.15*Z)continue;for(let z0=0;z0<=20;z0++){let q0=Q0*(z0/10-1);S.p(u.x,r+(u.y-r)*Math.pow(1-Math.pow(Math.abs(q0)/Q0,2.4),0.7),q0)}S.end()}});let d=(S,g,u)=>{let a=Y(S,g);return[a.x,a.y,u*Z]},$0=(S,g,u)=>{let a=g.map(([Q0,r,z0])=>d(Q0,r,u*z0));for(let Q0=0;Q0<a.length-1;Q0++){let r=a[Math.max(0,Q0-1)],z0=a[Q0],q0=a[Q0+1],y0=a[Math.min(a.length-1,Q0+2)];for(let m0=0;m0<4;m0++){let h0=m0/4,i0=h0*h0,r0=i0*h0,V9=(E9,O9,v,z9)=>0.5*(2*O9+(-E9+v)*h0+(2*E9-5*O9+4*v-z9)*i0+(-E9+3*O9-3*v+z9)*r0);S.p(V9(r[0],z0[0],q0[0],y0[0]),V9(r[1],z0[1],q0[1],y0[1]),V9(r[2],z0[2],q0[2],y0[2]))}}S.p(...a[a.length-1]),S.end()};B(I,e.red,1.25,0.9,(S)=>{for(let g of[1,-1]){$0(S,[[6.4,4.6,0],[5.6,4.45,1.5],[4.5,4.4,2.6],[3.2,4.5,3.5],[1.8,4.85,4.15],[0.4,5.6,4.6],[-0.55,6.6,4.85],[-0.9,7.6,4.9],[-1.45,8.9,4.95],[-1.9,9.7,5],[-2.15,10.2,5]],g),$0(S,[[-1.8,10.25,4.95],[-0.9,9.4,4.85],[0.15,10.1,4.6],[0.6,8.9,4.35],[1.1,7.7,4],[1.9,7.2,3.55]],g);let u=d(-2.5,10.5,g*4.95);S.ellipse(u,[0.45*Z,0,0],[0,0.12*Z,0.85*Z],16)}}),B(I,e.red,1,0.55,(S)=>{for(let g of[1,-1]){$0(S,[[1.9,7.2,3.55],[3,7.15,3.15],[4.3,7.1,2.6],[5.4,7.05,1.85],[6.2,7.05,1.05],[6.72,7.15,0]],g);for(let[u,a,Q0,r,z0]of[[3,3.15,3.2,4.5,3.5],[5.4,1.85,5.6,4.45,1.5],[1.9,3.55,1.8,4.85,4.15]])$0(S,[[u,7.15,a],[(u+Q0)/2,5.9,(a+z0)/2+0.15],[Q0,r,z0]],g)}});let i=new BJ;$0(i,[[7.25,6.75,0],[7.4,5.4,0],[6.4,4.6,0],[5.6,5,0],[5.9,6.2,0],[6.45,6.55,0]],1);let Z0=i.lines[0],X0=Y(6.98,0).x,S0=4*Z,w0=2.5*Z;B(I,e.blue,1,0.8,(S)=>m(S,X0,S0,w0,dq,(g)=>(7.75+0.45*Math.pow(g,1.5))*Z,-1));let n0=$(6.15,15.35),d0=new x(0.3*Z,(N.y0+N.y1)/2,0);return{model:J,head:N,condyle:F,lipHalf:E,center:d0,shell:R,fixed:_,jaw:I,chin:Z0,eyes:[[n0.x,n0.y,3.15*Z],[n0.x,n0.y,-3.15*Z]],eyeR:1.05*Z}}var tq=[0.09,0.06,0.03];class x${scene=new FQ;camera=new l9(24,1,5,2000);beams=new k$;rest=null;w=1;h=1;compact=!1;centred=!1;facing=1;clock=0;gaze=new C7;face=new v6;eye=new x;turn=new r9;euler=new y8;strobe=0;tmp=new P$;particles=[];echoes=[];lastEcho=-1;sparkSeed=7;k=1;ring={n:0,s:new Float64Array(80),cx:new Float64Array(80),cy:new Float64Array(80),ux:new Float64Array(80),uy:new Float64Array(80),a:new Float64Array(80),b:new Float64Array(80)};v3=new x;caliper=null;constructor(){this.scene.add(this.beams.group),this.scene.fog=new U7(0,50,100);for(let J=0;J<200;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,v:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN,pz:NaN})}dispose(){this.beams.dispose()}resetMotion(){this.face=new v6,this.echoes=[],this.lastEcho=-1,this.strobe=0;for(let J of this.particles)J.px=NaN}resize(J,Q){if(this.w=J,this.h=Q,this.compact=J<560,this.camera.aspect=J/Q,this.compact||this.centred)this.camera.clearViewOffset();else this.camera.setViewOffset(J,Q,0.1*J,0,J,Q);this.camera.updateProjectionMatrix(),this.beams.setResolution(J,Q);for(let Z of this.particles)Z.px=NaN}poses(J){let Q=this.restFor(J),Z=Math.tan(this.camera.fov*Math.PI/360),K=1.1*Math.max(15.2/Z,11/(Z*Math.max(0.3,this.camera.aspect))),$=Q.center.clone(),W=this.facing>0?0.62:Math.PI-0.62,X=0.2;return{target:$,home:$.clone().add(new x(Math.sin(W)*Math.cos(0.2),Math.sin(0.2),Math.cos(W)*Math.cos(0.2)).multiplyScalar(K)),side:$.clone().add(new x(0,0,this.facing*K))}}restFor(J){if(!this.rest||this.rest.model!==J)this.rest=rq(J);return this.rest}project(J,Q,Z){let K=this.v3.set(J,Q,Z).applyMatrix4(this.beams.group.matrixWorld).project(this.camera);return[(K.x+1)/2*this.w,(1-K.y)/2*this.h]}pxPerCmAt(J,Q,Z){let K=this.camera.matrixWorld.elements,[$,W]=this.project(J,Q,Z),[X,Y]=this.project(J+K[0],Q+K[1],Z+K[2]);return Math.hypot(X-$,Y-W)}crown(J){let Q=this.restFor(J),Z=J.tract.scale,K=Q.head.at(Q.head.y1-1.2*Z),$=K?(K.F+K.Bk)/2:Q.center.x,[W,X]=this.project($,Q.head.y1,0);return{x:W,y:X,cmPx:this.pxPerCmAt($,Q.head.y1,0)}}faceView(J,Q,Z){let K=sQ(J,Q,Z).find(($)=>$.id==="lips").pos;return{handles:sQ,X:($)=>this.project($.x,$.y,0)[0],Y:($)=>this.project($.x,$.y,0)[1],pxPerCm:this.pxPerCmAt(K.x,K.y,0)}}update(J,Q,Z,K,$,W){this.clock+=W;let X=this.restFor(J),Y=J.tract.scale,H=this.face;this.headPose(X,Y);let G=w$(J,Z.jaw),D=X.condyle,U=this.beams,N=this.camera.position.distanceTo(X.center),F=this.scene.fog;F.near=N-3*Y,F.far=N+30*Y,U.begin();let O=(m,T=0)=>{let w=new Float32Array(m.length*3);return m.forEach((n,d)=>{w[3*d]=n.x,w[3*d+1]=n.y,w[3*d+2]=T}),w},L=this.v3.copy(this.eye).sub(X.center).normalize(),E=s8(0.25,0.8,Math.abs(L.z)),q=0.22+0.78*E,R=0.45+0.55*E,k=(m,T,w,n={},d=q)=>U.line(O(m),m.length,T,w,{...n,alpha:(n.alpha??1)*d}),V=(m,T,w)=>w===0?[m,T]:gY(m,T,D,w);this.k=Y;for(let m of X.fixed)for(let T of m.lines)U.line(T,T.length/3,m.color,m.width,{alpha:m.alpha,hot:m.hot});for(let m of X.jaw)for(let T of m.lines){let w=this.tmp.reset();for(let n=0;n<T.length;n+=3){let[d,$0]=V(T[n],T[n+1],G);w.p(d,$0,T[n+2])}U.poly(w,m.color,m.width,{alpha:m.alpha,hot:m.hot})}for(let m of X.shell){let T=this.tmp.reset();for(let w=0;w<m.w.length;w++){let n=m.a[3*w+2],[d,$0]=xY(Y,m.c[w],n,H.puff),[i,Z0]=V(m.a[3*w]+d,m.a[3*w+1],G*m.w[w]);T.p(i,Z0,n+$0)}U.poly(T,e.blueDim,0.85,{alpha:0.42})}let A=V7(J,Q,Z);k(A.inset,e.blueDim,0.9,{alpha:0.5}),k(A.skull,e.blueDim,0.9,{close:!0,alpha:0.6}),k(A.brain,e.blueMid,1,{close:!0,alpha:0.75}),k(A.sulcus,e.blueDim,0.9),k(A.nasal,e.blueMid,1,{close:!0}),k(A.palOral,e.blueMid,1.1),k(A.palNasal,e.blueMid,1.1),k(A.skinLower,e.blue,1.5),k(A.skinUpper,e.blue,1.5),k(A.outerWall,e.blue,1.4,{hot:!0}),k(Q.inner,e.blue,1.3,{alpha:0.9}),k(A.glottisWall,e.blue,1.2,{alpha:0.8}),this.eyes(X,W),this.airway(J,Q,K,$,Y),this.velum(Q,Y),this.epiglottis(Q,Y,R),this.larynx(J,Q,Z,K,Y,W,X.head.y0,q);let P=O(Q.tongue),_=(m,T)=>O(sJ(m.map((w)=>[w.x,w.y]),T).map(([w,n])=>({x:w,y:n}))),I=_(Q.upperLip,2),B=_(Q.lowerLip,2),p=this.lips(X,J,Q,Z,G),j=X.chin,b=new Float32Array(j.length);for(let m=0;m<j.length;m+=3){let[T,w]=V(j[m],j[m+1],G);b[m]=T,b[m+1]=w}if(K&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock;let m=[{a:P,color:e.green},{a:b,color:e.red},{a:I,color:e.pink},{a:B,color:e.pink}];if(p)m.push({a:p,color:e.pink});this.echoes.push({t:this.clock,lines:m});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if(K)tq.forEach((m,T)=>{let w=this.nearestEcho(this.clock-m);if(!w)return;for(let n of w.lines)U.line(n.a,n.a.length/3,n.color,1,{alpha:(0.1+0.07*T)*R})});if(this.tongue(Q,Z,Y),U.line(b,b.length/3,e.red,1.5,{hot:!0,alpha:R}),U.line(P,Q.tongue.length,e.green,1.6,{hot:!0,alpha:R}),U.line(I,I.length/3,e.pink,1.5,{hot:!0,alpha:R}),U.line(B,B.length/3,e.pink,1.5,{hot:!0,alpha:R}),k(sJ(Q.velum.map((m)=>[m.x,m.y]),3).map(([m,T])=>({x:m,y:T})),e.white,1.25,{alpha:0.92},R),$.particles&&K)this.drawParticles(J,Q,K,W);if(K)this.drawTurbulence(J,Q,K);if(this.caliper=null,$.calipers)this.drawCaliper(Q);U.end()}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}headPose(J,Q){let Z=this.beams.group,K=this.v3.set(-2.4*Q,J.head.y0+0.42*(J.condyle.y-J.head.y0),0);this.turn.setFromEuler(this.euler.set(this.face.tilt,0,this.face.nod)),Z.quaternion.copy(this.turn),Z.position.copy(K).sub(K.applyQuaternion(this.turn)),Z.updateMatrixWorld(!0),this.eye.copy(this.camera.position),Z.worldToLocal(this.eye)}eyes(J,Q){let Z=this.gaze,K=this.face;Z.update(this.clock,Q);let $=J.eyeR,W=Z.pitch+1.3*K.lookUp,X=[Math.cos(W)*Math.cos(Z.yaw),Math.sin(W),Math.cos(W)*Math.sin(Z.yaw)],Y=(U)=>{let N=Math.abs(U[1])>0.9?[1,0,0]:[0,1,0],F=mY(pY(N,U));return[F,pY(U,F)]},H=this.eye,G=1-s8(0.4,0.9,K.lid),D=Math.max(0,K.brow);for(let U of J.eyes){let N=mY([H.x-U[0],H.y-U[1],H.z-U[2]]),[F,O]=Y(N),L=new BJ;L.ellipse(U,b6(F,$),b6(O,$),36);let[E,q]=Y(X),R=[U[0]+X[0]*$*0.86,U[1]+X[1]*$*0.86,U[2]+X[2]*$*0.86];L.ellipse(R,b6(E,$*0.5),b6(q,$*0.5),24);let k=[U[0]+X[0]*$*0.97,U[1]+X[1]*$*0.97,U[2]+X[2]*$*0.97];L.ellipse(k,b6(E,$*0.2),b6(q,$*0.2),14);let V=Math.sign(U[2]),A=(j,b,m)=>j*(1-b*b)+0.06*b*V*m,P=(j)=>{for(let b=0;b<=16;b++){let m=-1+b/8,T=V*m*0.95,w=A(-0.36,m,-1),n=j?A(0.5+0.2*D,m,1)*(1-K.lid)+(w+0.03)*K.lid:w;L.p(U[0]+1.04*$*Math.cos(n)*Math.cos(T),U[1]+1.04*$*Math.sin(n),U[2]+1.04*$*Math.cos(n)*Math.sin(T))}L.end()};P(!0),P(!1);let _=0.3*K.brow,I=0.28*Math.max(0,-K.brow),B=0.22*K.lid*D;for(let j=0;j<=12;j++){let b=-1+j/6,m=V*(0.15+b*0.62),T=(1-b)/2,w=0.82+0.12*(1-b*b)-0.06*b+_+(B-I)*T;L.p(U[0]+1.32*$*Math.cos(w)*Math.cos(m),U[1]+1.32*$*Math.sin(w),U[2]+1.32*$*Math.cos(w)*Math.sin(m))}L.end();let p=[[e.blueMid,1,0.35],[e.blue,1,0.9*G],[e.blue,1,0.7*G],[e.blue,1.25,0.95],[e.blue,1.05,0.75],[e.blueMid,1.3,0.8]];L.lines.forEach((j,b)=>this.beams.line(j,j.length/3,p[b][0],p[b][1],{alpha:p[b][2]}))}}lips(J,Q,Z,K,$){let W=Q.tract.scale,X=J.condyle,Y=J.head,H=this.beams,G=Q.bodyParams.pharynx,D=J.lipHalf,U=Math.max(0.3*W,(1.1+(Q.bodyParams.lipWidth-1.1)*hY(K.lipWidth))*W/2),N=Z.upperLip.slice(6),F=Z.lowerLip.slice(6).map((w)=>xQ(w,X,-$)),O=h$(N),L=h$(F),E=N[0],q=F[0],R=(E.y+q.y)/2,k=(w,n)=>{let d=Y.at(w);return d?oQ(d,n,!0):0},V=E.x-k(E.y,0),A=q.x-k(q.y,0),P=(V+A)/2,_=N[N.length-1].y,I=F[F.length-1].y,B=this.tmp,p=(w,n,d)=>{let $0=Math.sqrt(Math.max(0,1-(d/U)**2)),i=iQ(w?N:F,w?O:L,n),Z0=w?E:q,X0=w?_:I,S0=R+(Z0.y-R)*$0,w0=X0-Z0.y,n0=S0+(i.y-Z0.y)*(X0-S0)/(Math.abs(w0)<0.0001?0.0001:w0),d0=Math.pow(Math.max(0,1-(d/D)**2),1.5),S=i.x-k(i.y,0)+(P-(w?V:A))*(1-$0)*(1-n),g=k(n0,d)+S*d0,u=w?0.5*(1-$0)*(1-n):0.5*(1+$0)+0.5*(1-$0)*n,a=u+(dY(W,G,g,n0)-u)*s8(U,D,Math.abs(d)),[Q0,r]=xY(W,lY(W,G,g,n0),d,this.face.puff),[z0,q0]=a?gY(g+Q0,n0,X,$*a):[g+Q0,n0];return[z0,q0,d+r]},j=(w,n,d,$0,i)=>{B.reset();for(let Z0=0;Z0<=i;Z0++){let X0=d+($0-d)*Z0/i;B.p(...p(w,n(X0),X0))}return B},b=[0.66,0.88];for(let w of[!0,!1]){for(let $0 of b)H.poly(j(w,()=>$0,-D,D,24),e.blueDim,0.85,{alpha:0.42});for(let $0 of[-0.8,-0.5,0.5,0.8].map((i)=>i*D)){B.reset();for(let i=0;i<=8;i++)B.p(...p(w,0.45+0.55*i/8,$0));H.poly(B,e.blueDim,0.85,{alpha:0.42})}let n=Math.min(D,U+0.3*W),d=($0)=>{let i=Math.sqrt(Math.max(0,1-($0/n)**2)),Z0=w?-0.07*Math.exp(-(($0/(0.32*W))**2))+0.05*Math.exp(-(((Math.abs($0)-0.55*W)/(0.3*W))**2)):0;return Math.max(0,(w?0.42:0.45)*i+Z0*i)};H.poly(j(w,d,-n,n,28),e.pink,1.3,{alpha:0.95}),H.poly(j(w,($0)=>0.45*d($0),-n,n,28),e.pink,1,{alpha:0.45})}for(let w of[1,-1])H.poly(j(!0,()=>0,w*U,w*D,6),e.pink,1,{alpha:0.6});let m=Z.upperLip[6].y-Z.lowerLip[6].y>0.02*W,T=24;B.reset();for(let w=0;w<=T;w++)B.p(...p(!0,0,-U+2*U*w/T));if(m)for(let w=T-1;w>0;w--)B.p(...p(!1,0,-U+2*U*w/T));return H.poly(B,e.pink,2.1,{hot:!0,close:m}),m?B.a.slice(0,B.n*3):null}tongue(J,Q,Z){let K=J.tongue,$=0,W=1/0;K.forEach((N,F)=>{let O=(N.x-J.tip.x)**2+(N.y-J.tip.y)**2;if(O<W)W=O,$=F});let X=22,Y=aq(K.slice(0,$+1),X),H=hY(Q.lateral),G=Y.map((N,F)=>{let O=Y[Math.max(0,F-1)],L=Y[Math.min(X-1,F+1)],E=L.x-O.x,q=L.y-O.y,R=Math.hypot(E,q)||1;E/=R,q/=R;let k=F/(X-1);return{p:N,nx:-q,ny:E,W:HJ(pq,k)*Z,h:(HJ(mq,k)+0.8*H*s8(0.45,0.8,k))*Z}}),D=(N,F)=>{let O=N.h*(1-Math.cos(F));return[N.p.x-N.nx*O,N.p.y-N.ny*O,N.W*Math.sin(F)]},U=this.tmp;for(let N=1;N<X-1;N+=2){U.reset();for(let F=0;F<=12;F++)U.p(...D(G[N],-Math.PI/2+Math.PI*F/12));this.beams.poly(U,e.green,1,{alpha:0.5})}for(let N of[-Math.PI/2,-Math.PI/4,Math.PI/4,Math.PI/2]){U.reset();for(let F of G)U.p(...D(F,N));this.beams.poly(U,e.green,Math.abs(N)>1?1.25:1,{alpha:Math.abs(N)>1?0.8:0.45})}}airway(J,Q,Z,K,$){let W=Q.grid,X=this.ring;if(X.n=0,W.length<2)return;let Y=Z?J.nodeS(Z.t.phLen,Z.t.orLen):null,H=K.pressure&&Z&&Y&&Y.length===Z.t.pressureRms.length,G=-1,D=0;for(let O=0;O<W.length&&X.n<X.s.length;O++){let L=W[O],E=L.outer.x-L.inner.x,q=L.outer.y-L.inner.y,R=Math.hypot(E,q);if(R>0.0001)G=E/R,D=q/R;let k=L.d/2,V=X.n++;X.s[V]=L.s,X.cx[V]=L.outer.x-G*k,X.cy[V]=L.outer.y-D*k,X.ux[V]=G,X.uy[V]=D,X.a[V]=k,X.b[V]=L.d>0.01?Math.min(3.5*$,2*L.area/(Math.PI*L.d)):0}let U=this.tmp,N=this.eye;for(let O=0;O<X.n;O+=2){U.reset();for(let V=0;V<=24;V++){let A=V/24*Math.PI*2,P=Math.cos(A)*X.a[O],_=Math.sin(A)*X.b[O];U.p(X.cx[O]+X.ux[O]*P,X.cy[O]+X.uy[O]*P,_)}let L=N.x-X.cx[O],E=N.y-X.cy[O],q=N.z,R=Math.abs(X.uy[O]*L-X.ux[O]*E)/(Math.hypot(L,E,q)||1),k=1-0.65*R*R;if(H){let V=Math.pow(hQ(y$(Z.t.pressureRms,Y,X.s[O])),0.85);this.beams.poly(U,fQ(V),0.85,{alpha:(0.25+0.65*V)*k})}else this.beams.poly(U,e.blueDim,0.85,{alpha:(K.grid?0.8:0.45)*k})}for(let O of[1,-1]){U.reset();for(let L=0;L<X.n;L++)U.p(X.cx[L],X.cy[L],O*X.b[L]);this.beams.poly(U,e.blue,1,{alpha:0.55})}let F=Q.glottis;for(let O of[0.3,0.65]){let L=F.x+(X.cx[0]-F.x)*O,E=F.y+(X.cy[0]-F.y)*O,q=(0.55+0.25*O)*$;U.reset();for(let R=0;R<=20;R++)U.p(L+q*Math.cos(R/20*Math.PI*2),E,q*Math.sin(R/20*Math.PI*2));this.beams.poly(U,e.blueDim,0.9,{alpha:0.6})}}airPoint(J,Q,Z,K){let $=this.ring;if($.n<2)return null;if(Q<=$.s[0]){let U=Math.max(0,Q/Math.max(0.01,$.s[0])),N=J.glottis;return[N.x+($.cx[0]-N.x)*U+Z*0.3*this.k,N.y+($.cy[0]-N.y)*U,K*0.45*this.k]}let W=0,X=$.n-1;if(Q>=$.s[X])return null;while(X-W>1){let U=W+X>>1;if($.s[U]<=Q)W=U;else X=U}let Y=(Q-$.s[W])/Math.max(0.000001,$.s[X]-$.s[W]),H=(U)=>U[W]+(U[X]-U[W])*Y,G=H($.a)*Z*0.82,D=H($.b)*K*0.82;return[H($.cx)+H($.ux)*G,H($.cy)+H($.uy)*G,D]}drawParticles(J,Q,Z,K){let $=Z.t,W=J.nodeS($.phLen,$.orLen),X=new Float32Array($.phAreas.length+$.orAreas.length);X.set($.phAreas,0),X.set($.orAreas,$.phAreas.length);let Y=Q.lipS;for(let H of this.particles){let G=y$($.flow,W,H.s),D=Math.max(0.05,y$(X,W,H.s)),U=G/D,N=Math.sign(U)*2.2*Math.log1p(Math.abs(U)/30);if(H.s+=N*K,H.life-=K*0.25,H.s>Y||H.s<0||H.life<=0||Math.abs(U)<3){if(!(Math.abs(U)<3&&H.life>0)){H.s=Math.random()*0.8,H.u=Math.random()*2-1,H.v=Math.random()*2-1,H.life=0.6+Math.random()*0.8,H.px=NaN;continue}}let F=this.airPoint(Q,H.s,H.u,H.v);if(!F)continue;if(Number.isFinite(H.px)){let O=Math.min(2,Math.floor(Math.min(1,Math.abs(N)/6)*Math.min(1,H.life)*3));this.beams.seg(H.px,H.py,H.pz,F[0],F[1],F[2],"#ffe2a8",1.05,0.16+0.2*O)}[H.px,H.py,H.pz]=F}}drawTurbulence(J,Q,Z){let K=Z.t;if(!(K.noiseLevel>1)||K.noiseNode<0)return;let $=J.branchS(K.noiseNode,K.phLen,K.orLen);if($<0)return;let W=Math.min(1,Math.log10(K.noiseLevel)/3.2);if(W<=0.05)return;let X=this.sparkSeed=this.sparkSeed*16807%2147483647,Y=()=>(X=X*16807%2147483647)/2147483647;for(let H=0;H<40;H++){let G=this.airPoint(Q,$+0.2+Y()*1.2,Y()*2-1,Y()*2-1);if(!G)continue;let D=0.02+Y()*0.05;this.beams.seg(G[0]-D,G[1],G[2],G[0]+D,G[1],G[2],"#f4fbff",1.6,0.15+0.7*W*Y())}}drawCaliper(J){let Q=this.ring,Z=-1,K=1/0;for(let X=2;X<J.grid.length-1;X++)if(J.grid[X].area<K)K=J.grid[X].area,Z=X;if(Z<0||K>=1.2||Z>=Q.n)return;let $=this.tmp.reset();for(let X=0;X<=24;X++){let Y=X/24*Math.PI*2,H=Math.cos(Y)*Q.a[Z],G=Math.sin(Y)*Q.b[Z];$.p(Q.cx[Z]+Q.ux[Z]*H,Q.cy[Z]+Q.uy[Z]*H,G)}this.beams.poly($,e.white,1.3,{hot:!0});let W=J.grid[Z];this.caliper={x:W.outer.x,y:W.outer.y,z:0,area:K}}velum(J,Q){let Z=J.velum,K=Math.floor(Z.length/2)-1,$=[];for(let Y=0;Y<=K;Y++){let H=Z[Y],G=Z[Z.length-1-Y],D=H.x-G.x,U=H.y-G.y,N=Math.hypot(D,U)||1;D/=N,U/=N;let F=Y/K;$.push({x:(H.x+G.x)/2,y:(H.y+G.y)/2,nx:D,ny:U,W:(1.95-1.5*Math.pow(F,1.5))*Q,droop:0.45*Q*F})}let W=(Y,H)=>{let G=0.12*Q*(1-H*H)-Y.droop*H*H;return[Y.x+Y.nx*G,Y.y+Y.ny*G,Y.W*H]},X=this.tmp;for(let Y of[1,3,5,7,9].filter((H)=>H<=K)){X.reset();for(let H=0;H<=12;H++)X.p(...W($[Y],-1+H/6));this.beams.poly(X,e.white,1,{alpha:0.5})}for(let Y of[-1,1]){X.reset();for(let H of $)X.p(...W(H,Y));this.beams.poly(X,e.white,1,{alpha:0.65})}}epiglottis(J,Q,Z){let[K,$]=J.epiglottis,W=$.x-K.x,X=$.y-K.y,Y=Math.hypot(W,X)||1;W/=Y,X/=Y;let H={x:-X,y:W},G=(N)=>(0.22+0.9*Math.pow(Math.sin(N*Math.PI/2),1.3))*Q,D=this.tmp.reset(),U=10;for(let N=0;N<=U;N++){let F=N/U,O=G(F),L=0.28*Q*(O/(1.12*Q));D.p(K.x+W*Y*F+H.x*L,K.y+X*Y*F+H.y*L,O)}for(let N=1;N<12;N++){let F=G(1)*(1-2*N/12),O=0.28*Q*(Math.abs(F)/(1.12*Q))**2;D.p($.x+H.x*O+W*0.08*Q*(1-(F/G(1))**2),$.y+H.y*O+X*0.08*Q*(1-(F/G(1))**2),F)}for(let N=U;N>=0;N--){let F=N/U,O=G(F),L=0.28*Q*(O/(1.12*Q));D.p(K.x+W*Y*F+H.x*L,K.y+X*Y*F+H.y*L,-O)}this.beams.poly(D,e.blue,1.1,{alpha:0.75}),this.beams.line(new Float32Array([K.x,K.y,0,$.x,$.y,0]),2,e.blue,2.1,{alpha:0.85*Z})}larynx(J,Q,Z,K,$,W,X,Y){let H=Q.glottis,G=this.beams,D=new BJ,U=(A,P,_)=>[H.x+A*$,H.y+P*$,_*$],N=(A,P=!1)=>{for(let[_,I,B]of A)D.p(...U(_,I,B));D.end(P)};for(let A of[1,-1])N([[1.45,1.75,0],[0.75,2,A*1.2],[-0.5,1.95,A*1.9],[-0.6,-0.6,A*1.85],[0.25,-0.85,A*1.5],[1.05,-0.8,A*0.55],[1.2,-0.75,0],[1.6,0.05,0],[1.9,1.15,0],[1.45,1.75,0]]),N([[-0.5,1.95,A*1.9],[-0.7,2.85,A*1.85]]),N([[-0.6,-0.6,A*1.85],[-0.45,-1.25,A*1.7]]);for(let[A,P]of[[-1.75,0.15],[-1.4,1.1]]){for(let _=0;_<=28;_++){let I=_/28*Math.PI*2;D.p(...U(0.1+1*Math.cos(I),A+P*(1-Math.cos(I))/2,1.1*Math.sin(I)))}D.end()}for(let A of D.lines)G.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let F=new BJ,O=H.y-2.1*$,L=H.x+0.08*$;for(let A=O;A>X;A-=0.5*$)F.ellipse([L,A,0],[0.82*$,0,0],[0,0,0.95*$],20,-0.8*Math.PI,0.8*Math.PI);for(let A of[1,-1])F.p(L,O,A*0.95*$).p(L,X,A*0.95*$).end();for(let A of F.lines)G.line(A,A.length/3,e.blueDim,0.9,{alpha:0.85});for(let A of[1,-1])G.line(new Float32Array([L+A*0.82*$,H.y,0,L+A*0.82*$,X,0]),2,e.blueMid,1,{alpha:Y});let E=new BJ,q={x:J.tract.P(1.6,0).x,y:J.tract.P(0,2.9).y+0.6*Z.larynx*$};for(let A of[-0.16,0.16]){for(let P=0;P<=20;P++){let _=-1+P/10;E.p(q.x+(0.35-0.65*_*_)*$,q.y+A*$,1.15*_*$)}E.end();for(let P of[1,-1])E.p(q.x-0.3*$,q.y+A*$,P*1.15*$).p(q.x-2.8*$,q.y+(0.7+A)*$,P*2.05*$).end()}for(let A of E.lines)G.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let R=K?.t.glottalArea,k=0;if(R&&R.length){this.strobe=(this.strobe+W/1.8)%1;let A=0.02;for(let P=0;P<R.length;P++)A=Math.max(A,R[P]);if(k=Math.min(0.45*$,R[Math.floor(this.strobe*R.length)%R.length]/(1.3*$)*2.2),!Number.isFinite(k))k=0}let V=new BJ;for(let A of[1,-1])V.p(...U(0.72,0.1,0)).p(...U(-0.55,0.1,A*(0.06+k/$))).end(),V.p(...U(0.72,0,0)).p(...U(-0.6,0,A*0.62)).end(),V.p(...U(0.65,0.45,0)).p(...U(-0.5,0.45,A*0.45)).end(),V.ellipse(U(-0.72,0.15,A*(0.3+k/$)),[0.18*$,0,0],[0,0.12*$,0.12*$],10);V.lines.forEach((A,P)=>G.line(A,A.length/3,P%4===0?e.white:e.blueMid,P%4===0?1.3:1,{alpha:P%4===2?0.6:0.9,hot:P%4===0}))}}function gY(J,Q,Z,K){let $=J-Z.x,W=Q-Z.y,X=Math.cos(K),Y=Math.sin(K);return[Z.x+$*X-W*Y,Z.y+$*Y+W*X]}var pY=(J,Q)=>[J[1]*Q[2]-J[2]*Q[1],J[2]*Q[0]-J[0]*Q[2],J[0]*Q[1]-J[1]*Q[0]],mY=(J)=>{let Q=Math.hypot(J[0],J[1],J[2])||1;return[J[0]/Q,J[1]/Q,J[2]/Q]},b6=(J,Q)=>[J[0]*Q,J[1]*Q,J[2]*Q];function y$(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}var g$=null,p$=null,y6=null;function cY(J){if(y6)return y6;return y6=(async()=>{let Q;if(J&&typeof J!=="string")Q=await WebAssembly.compile(J);else{let Z=J??"./chimera.wasm",K=await fetch(Z);if(!K.ok)throw new Error(`engine: ${Z}: HTTP ${K.status}`);Q=await WebAssembly.compile(await K.arrayBuffer())}if(WebAssembly.Module.imports(Q).length)throw new Error("engine: the wasm module must not have imports");p$=(await WebAssembly.instantiate(Q,{})).exports,g$=Q})(),y6.catch(()=>y6=null),y6}function nY(){if(!g$)throw new Error("engine not loaded (await initChimera())");return g$}function eq(){if(!p$)throw new Error("engine not loaded (await initChimera())");return p$}var JF=new TextEncoder,QF=new TextDecoder;function aQ(J,Q={}){let Z=eq(),K=JF.encode(JSON.stringify({fn:J,...Q})),$=Z.chimera_alloc(K.length);new Uint8Array(Z.memory.buffer,$,K.length).set(K);let W=Z.chimera_call($,K.length);Z.chimera_free($,K.length);let X=QF.decode(new Uint8Array(Z.memory.buffer,Z.chimera_result_ptr(),Z.chimera_result_len())),Y=JSON.parse(X);if(W!==0)throw new Error(`engine ${J}: ${Y.error}`);return Y}var I9=(J,Q,Z)=>Math.max(Q,Math.min(Z,J));class m${grains=Array.from({length:64},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,r:0.25}));pulses=Array.from({length:6},()=>({x:0,y:0,t:-100,strength:0}));count=36;w=0.045;h=0.052;d=0.024;radius=0.0008;shape="box";quiet=0;seed=12345;wallEnergy=new Float64Array(6);collisionEnergy=0;collisions=0;agitation=0;constructor(){this.reset(36)}random(){return this.seed^=this.seed<<13,this.seed^=this.seed>>>17,this.seed^=this.seed<<5,(this.seed>>>0)/4294967296}reset(J){this.count=I9(J|0,1,64);for(let Q=0;Q<64;Q++){let Z=this.random()*Math.PI*2,K=Math.sqrt(this.random())*0.28,$=this.grains[Q];$.x=Math.cos(Z)*this.w*K,$.y=Math.sin(Z)*this.h*K,$.z=(this.random()-0.5)*this.d*0.65,$.vx=$.vy=$.vz=0,$.r=0.18+this.random()*0.2}for(let Q of this.pulses)Q.t=-100;this.quiet=0,this.agitation=0,this.collisionEnergy=this.collisions=0}contact(J,Q,Z,K){if(Q<0.025||this.agitation<0.008)return;this.collisions++,this.collisionEnergy+=Q*Q/this.count,this.wallEnergy[Z]+=Q*Q/this.count;let $=this.pulses[Z];$.x=J.x,$.y=J.y,$.t=K,$.strength=Q}step(J,Q,Z,K,$){if(this.collisionEnergy=this.collisions=0,this.wallEnergy.fill(0),J>0.1){for(let L=0;L<this.count;L++){let E=this.grains[L];E.vx=E.vy=E.vz=0}return}if(this.agitation=Math.max(K,this.agitation*Math.exp(-J/0.11)),this.quiet=K<0.012?this.quiet+J:0,this.quiet>0.6){for(let L=0;L<this.count;L++){let E=this.grains[L];E.vx=E.vy=E.vz=0}return}let W=Math.max(1,Math.ceil(J/0.0042)),X=J/W,Y=Math.exp(-X*10),H=this.radius,G=(-Q[0]+Z[0]*0.35)*9.80665,D=(-Q[1]+Z[1]*0.35)*9.80665-1.6,U=-Q[2]*9.80665,N=Math.max(0.003,this.w/2-H),F=Math.max(0.003,this.h/2-H),O=Math.max(0.003,this.d/2-H);for(let L=0;L<W;L++){for(let q=0;q<this.count;q++){let R=this.grains[q];if(R.vx=I9((R.vx+G*X)*Y,-3,3),R.vy=I9((R.vy+D*X)*Y,-3,3),R.vz=I9((R.vz+U*X)*Y,-3,3),R.x+=R.vx*X,R.y+=R.vy*X,R.z+=R.vz*X,this.shape==="box"){if(Math.abs(R.x)>N)this.contact(R,Math.abs(R.vx),R.x>0?1:0,$),R.x=Math.sign(R.x)*N,R.vx=-R.vx*R.r,R.vy*=0.92,R.vz*=0.92;if(Math.abs(R.y)>F)this.contact(R,Math.abs(R.vy),R.y>0?2:3,$),R.y=Math.sign(R.y)*F,R.vy=-R.vy*R.r,R.vx*=0.92,R.vz*=0.92}else{let k=R.x*R.x/(N*N)+R.y*R.y/(F*F);if(k>1){let V=Math.sqrt(k);R.x/=V,R.y/=V;let A=R.x/(N*N),P=R.y/(F*F),_=Math.hypot(A,P);A/=_,P/=_;let I=R.vx*A+R.vy*P;if(I>0)this.contact(R,I,Math.abs(A)>Math.abs(P)?A>0?1:0:P>0?2:3,$),R.vx-=(1+R.r)*I*A,R.vy-=(1+R.r)*I*P}}if(Math.abs(R.z)>O)this.contact(R,Math.abs(R.vz),R.z>0?4:5,$),R.z=Math.sign(R.z)*O,R.vz=-R.vz*R.r,R.vx*=0.95,R.vy*=0.95}let E=H*2;for(let q=0;q<this.count;q++)for(let R=q+1;R<this.count;R++){let k=this.grains[q],V=this.grains[R],A=V.x-k.x,P=V.y-k.y,_=V.z-k.z,I=A*A+P*P+_*_;if(I>=E*E||I<0.0000000000000001)continue;let B=Math.sqrt(I),p=A/B,j=P/B,b=_/B,m=(V.vx-k.vx)*p+(V.vy-k.vy)*j+(V.vz-k.vz)*b,T=(E-B)*0.35;if(k.x-=p*T,k.y-=j*T,k.z-=b*T,V.x+=p*T,V.y+=j*T,V.z+=b*T,m<0){let w=-m*0.6;k.vx-=w*p,k.vy-=w*j,k.vz-=w*b,V.vx+=w*p,V.vy+=w*j,V.vz+=w*b}}for(let q=0;q<this.count;q++){let R=this.grains[q];if(R.z=I9(R.z,-O,O),this.shape==="box")R.x=I9(R.x,-N,N),R.y=I9(R.y,-F,F);else{let k=R.x*R.x/(N*N)+R.y*R.y/(F*F);if(k>1){let V=Math.sqrt(k);R.x/=V,R.y/=V}}}}}}class u${x=null;y=null;center(J){let Q=Math.hypot(...J);if(Q<0.5)return;J=J.map(($)=>$/Q);let Z=[1-J[0]*J[0],-J[0]*J[1],-J[0]*J[2]],K=Math.hypot(...Z);if(K<0.1)Z=[-J[1]*J[0],1-J[1]*J[1],-J[1]*J[2]],K=Math.hypot(...Z);this.x=Z.map(($)=>$/K),this.y=[J[1]*this.x[2]-J[2]*this.x[1],J[2]*this.x[0]-J[0]*this.x[2],J[0]*this.x[1]-J[1]*this.x[0]]}project(J){if(!this.x)this.center(J);let Q=Math.hypot(...J);if(!this.x||!this.y||Q<0.5)return[0,0];return[J.reduce((Z,K,$)=>Z+K*this.x[$],0)/Q,J.reduce((Z,K,$)=>Z+K*this.y[$],0)/Q]}}var d$=[{name:"Theremin",tag:"VOWEL",description:"Continuous pitch and OO–AH–EE colour."},{name:"Velvet",tag:"WARMTH",description:"Warm sine layers with an octave below."},{name:"Glass",tag:"SHIMMER",description:"Clear, bell-like partials that bloom with tilt."},{name:"Orbit",tag:"SPREAD",description:"A drifting, detuned ensemble in your hand."},{name:"Reed",tag:"BRIGHTNESS",description:"A woody harmonic voice that opens into a buzz."}],AJ=Math.PI*2,ZF=[1,2.756,5.404,8.933],KF=[1,0.3,0.16,0.09];class $F{rate;phase=0;phases=new Float64Array([0,0.9,1.7,2.6]);clock=0;weights=new Float64Array(16);desired=new Float64Array(16);weightMix;constructor(J){this.rate=J;this.weightMix=1-Math.exp(-1/(J*0.012))}prepare(J,Q){let Z=Q*2,K=Z<1?0:1,$=Z-K,W=[[350,900,2200],[800,1250,2900],[300,2300,3100]],X=[180,280,450],Y=0;for(let G=0;G<16;G++){let D=J*(G+1),U=0.045/(G+1);for(let N=0;N<3;N++){let F=W[K][N]*(1-$)+W[K+1][N]*$,O=(D-F)/X[N];U+=Math.exp(-0.5*O*O)*(N===0?1:0.65)/Math.sqrt(G+1)}if(G===0)U+=0.3;this.desired[G]=U,Y+=U*U}let H=1/Math.sqrt(Y);for(let G=0;G<16;G++)this.desired[G]*=H}fade(J){return Math.max(0,Math.min(1,(this.rate*0.45-J)/(this.rate*0.07)))}render(J,Q,Z){let K=this.weightMix;this.clock+=1/this.rate,this.phase=(this.phase+AJ*J/this.rate)%AJ;let $=0;if(Z===0){for(let Y=0;Y<16;Y++)this.weights[Y]+=(this.desired[Y]-this.weights[Y])*K,$+=Math.sin(this.phase*(Y+1))*this.weights[Y]*this.fade(J*(Y+1));return $*0.24}if(Z===1)return this.phases[0]=(this.phases[0]+AJ*J*0.5/this.rate)%AJ,(Math.sin(this.phase)*0.8+Math.sin(this.phases[0])*0.25+Math.sin(this.phase*2)*Q*0.25*this.fade(J*2)+Math.sin(this.phase*3)*Q*0.1*this.fade(J*3))*0.3;if(Z===2){let Y=ZF,H=KF;for(let G=0;G<4;G++){let D=J*Y[G];this.phases[G]=(this.phases[G]+AJ*D/this.rate)%AJ,$+=Math.sin(this.phases[G])*H[G]*(G===0?1:0.1+Q)*this.fade(D)}return $*0.27}if(Z===3){let Y=0.001+Q*0.009;for(let H=0;H<4;H++){let G=J*(H===3?0.5:1+(H-1)*Y);this.phases[H]=(this.phases[H]+AJ*G/this.rate)%AJ,$+=Math.sin(this.phases[H])*(0.85+Math.sin(this.clock*(0.7+H*0.17)+H)*0.15)}return $*0.12}let W=400+Q*6500,X=0;for(let Y=1;Y<=12;Y++){let H=J*Y,G=(Y%2?1:0.25)/Y*Math.exp(-H/W)*this.fade(H);$+=Math.sin(this.phase*Y)*G,X+=G*G}return $/Math.sqrt(Math.max(0.05,X))*0.25}}var rQ=(J)=>document.getElementById(J);function sY(J,Q){for(let Z of["feedback","beta"]){let K=rQ(Z+"-dialog"),$=rQ(Z+"-form"),W=rQ(Z+"-status");rQ(Z+"-open").addEventListener("click",()=>{W.textContent="",Q(),K.showModal()}),K.querySelector("[data-close]").addEventListener("click",()=>K.close()),$.addEventListener("submit",async(X)=>{if(X.preventDefault(),!$.reportValidity())return;let Y=new FormData($),H=$.querySelector("[type=submit]"),G={email:String(Y.get("email")||""),website:String(Y.get("website")||""),version:"web-07"};if(Z==="beta"){let D=Y.getAll("platform");if(!D.length){W.textContent="Choose at least one platform.";return}Object.assign(G,{name:String(Y.get("name")||""),platforms:D,consent:Y.get("consent")==="on"})}else Object.assign(G,{category:String(Y.get("category")||"other"),message:String(Y.get("message")||""),includeDetails:Y.get("details")==="on",details:Y.get("details")==="on"?{...J(),browser:navigator.userAgent}:void 0});H.disabled=!0,W.textContent="Saving…";try{let D=await fetch("https://kaizendsp.com/api/motion/"+Z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G),credentials:"omit"}),U=await D.json().catch(()=>({}));if(!D.ok||!U.ok)throw new Error(U.error||"Could not save this. Please try again.");W.textContent=Z==="beta"?"Request saved. We’ll use this address for Motion beta access and testing updates.":"Feedback saved—thank you. It goes directly to the Motion development team.",$.reset()}catch(D){W.textContent=D instanceof Error?D.message:"Could not save this. Please try again."}finally{H.disabled=!1}})}}var WF=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],X8=(J)=>440*Math.pow(2,(J-69)/12);function B7(J){let Q=69+12*Math.log2(J/440),Z=Math.round(Q);return{midi:Z,label:WF[(Z%12+12)%12]+(Math.floor(Z/12)-1),cents:Math.round((Q-Z)*100)}}var iY={chromatic:[0,1,2,3,4,5,6,7,8,9,10,11],major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],majorPentatonic:[0,2,4,7,9],minorPentatonic:[0,3,5,7,10],dorian:[0,2,3,5,7,9,10]},aJ=(J)=>(J%12+12)%12;function f6(J,Q){return new Set((iY[Q]??iY.chromatic).map((Z)=>(Z+J)%12))}function l$(J,Q,Z,K=null){let $=69+12*Math.log2(J/440),W=null,X=1/0;for(let Y=45;Y<=93;Y++)if(X8(Y)<=Z+0.000001&&Q.has(aJ(Y))){let H=Math.abs(Y-$);if(H<X)W=Y,X=H}if(W===null)throw new Error("Keep at least one playable pitch enabled.");if(K!==null&&K>=45&&X8(K)<=Z+0.000001&&Q.has(aJ(K))&&Math.abs(K-$)<=X+0.08)return K;return W}class oY{seconds=0;last=null;update(J,Q){if(this.last!==null)this.seconds+=Math.max(0,(J-this.last)/1000);return this.last=Q?J:null,Math.floor(this.seconds)}}function aY(){let J=document.getElementById("usage-consent"),Q=document.getElementById("usage-status"),Z=new oY,K=null,$=!1,W=0,X=(L,E)=>{try{return L.getItem(E)}catch{return null}},Y=(L,E,q)=>{try{if(q===null)L.removeItem(E);else L.setItem(E,q)}catch{}},H,G;try{H=localStorage,G=sessionStorage}catch{}let D=(L,E)=>L?X(L,E):null,U=(L,E,q)=>{if(L)Y(L,E,q)};function N(){let L=Date.now(),E;try{let q=JSON.parse(D(H,"motion-usage-browser-v1")||"null");if(q&&L-q.created<7776000000&&/^[0-9a-f-]{36}$/.test(q.id))E=q.id}catch{}if(!E)E=crypto.randomUUID(),U(H,"motion-usage-browser-v1",JSON.stringify({id:E,created:L}));try{let q=JSON.parse(D(G,"motion-usage-session-v1")||"null");if(q?.visitor===E&&Number.isFinite(q.updated)&&L>=q.updated&&L-q.updated<1800000&&Number.isFinite(q.seconds)&&q.seconds>=0&&q.seconds<14400&&/^[0-9a-f-]{36}$/.test(q.session))K=q}catch{}K??={visitor:E,session:crypto.randomUUID(),seconds:0,updated:L},Z.seconds=K.seconds,Z.last=document.hidden?null:performance.now()}function F(L=!1){if(!$||!K)return;let E=Math.min(14400,Z.update(performance.now(),!document.hidden));K.seconds=E,K.updated=Date.now(),U(G,"motion-usage-session-v1",JSON.stringify(K));let q=JSON.stringify({visitor:K.visitor,session:K.session,seconds:E,consent:!0});if(L&&navigator.sendBeacon?.("https://kaizendsp.com/api/motion/usage",new Blob([q],{type:"application/json"})))return;fetch("https://kaizendsp.com/api/motion/usage",{method:"POST",headers:{"Content-Type":"application/json"},body:q,credentials:"omit",referrerPolicy:"no-referrer",keepalive:L}).then((R)=>{if($)Q.textContent=R.ok?"On · counting anonymous visits and visible time":"On · counts temporarily unavailable"}).catch(()=>{if($)Q.textContent="On · counts temporarily unavailable"})}function O(){$=!0,N(),Q.textContent="On · counting anonymous visits and visible time",F()}if(J.checked=D(H,"motion-usage-consent-v1")==="yes",J.checked)O();J.addEventListener("change",()=>{if(U(H,"motion-usage-consent-v1",J.checked?"yes":"no"),J.checked)O();else $=!1,K=null,Z.seconds=0,Z.last=null,U(H,"motion-usage-browser-v1",null),U(G,"motion-usage-session-v1",null),Q.textContent="Off · browser ID cleared on this device"}),setInterval(()=>{if($&&!document.hidden){if(Z.seconds>=14400)F(!0),K=null,U(G,"motion-usage-session-v1",null),N();F()}},15000),document.addEventListener("visibilitychange",()=>{if(!$)return;if(document.hidden)W=Date.now(),F(!0),Z.last=null;else{if(W&&Date.now()-W>1800000)K=null,U(G,"motion-usage-session-v1",null),N();Z.last=performance.now(),F()}}),addEventListener("pagehide",()=>{F(!0),Z.last=null}),addEventListener("pageshow",()=>{if($&&!document.hidden)Z.last=performance.now()}),addEventListener("storage",(L)=>{if(L.key==="motion-usage-consent-v1"&&L.newValue!=="yes")$=!1,K=null,Z.seconds=0,Z.last=null,J.checked=!1,U(G,"motion-usage-session-v1",null),Q.textContent="Off · disabled in another tab"})}class c${velocity=new Float64Array(3);level=0;lastSample=-1/0;lastRead=-1/0;speed=0;reset(){this.velocity.fill(0),this.level=this.speed=0,this.lastSample=this.lastRead=-1/0}update(J,Q,Z){let K=(Z-this.lastSample)/1000;if(K>0.2)this.velocity.fill(0);let $=Number.isFinite(K)&&K>0?Math.min(0.05,K):0.016666666666666666,W=Math.exp(-$/0.35);for(let Y=0;Y<3;Y++){let H=Number.isFinite(J[Y])?Math.max(-6,Math.min(6,J[Y]))*9.80665:0,G=Math.abs(H)>0.12?H-Math.sign(H)*0.12:0;this.velocity[Y]=this.velocity[Y]*W+G*$}let X=Math.hypot(...Q.map((Y)=>Number.isFinite(Y)?Math.max(-25,Math.min(25,Y)):0));this.speed=Math.max(Math.hypot(...this.velocity),Math.max(0,X-0.04)*0.12),this.lastSample=Z}value(J,Q){let Z=Number.isFinite(this.lastRead)?Math.max(0,Math.min(0.1,(J-this.lastRead)/1000)):0.016666666666666666;this.lastRead=J;let K=J-this.lastSample<150?this.speed:0,$=Math.sqrt(Math.max(0,Math.min(1,(K-0.012)*(0.5+Q)/0.45)));if(this.level+=($-this.level)*(1-Math.exp(-Z/($>this.level?0.018:0.065))),$===0&&this.level<0.003)this.level=0;return this.level}}var H0=(J)=>document.getElementById(J),x6=H0("field"),a0=x6.getContext("2d"),k7=H0("start"),QW=H0("touch-start"),eQ=H0("pause"),Z9=new m$,KZ=new u$,a$=["jaw","tbX","tbY","ttX","ttY","ttCurl","root","lipAp","lipProt","lipWidth","labiodental","velum","larynx","epilarynx","ventricular","lateral","dorsum"],Y8,j9,T0=2,T9=!1,n$=!1,ZH=!1,rJ=0,rY=0,A7=new Float32Array(512),JZ=0,s$,r$,QZ,KH,t$={...vQ},s9,i8,zJ,tJ,z7=[0,-1,0],a8=[0,0,0],ZZ=[0,0,0],m6=[0,0],L8=0,PJ=0.5,u6=0.5,WZ=0,l6=0,UJ=0,tY=performance.now(),e$=0,i$=0,kJ=0.62,tQ=[0,-9.80665,0],eY=0,g6=0.5,P7=0.5,S8=!1,$Z=!0,$H=0,k8=360,_8=240,o$=!1,M8=null,WH=null,ZW=0;var A9=null,o8=4,c6=!1,XH=311,T8=!1,JW=0,d6="major",J8=f6(0,"major"),h6=null,p6=!0,H8=!1,J6=new c$,XZ=0,YZ=-1/0,YH={frequency:311,vowel:0.5,breath:0.55};k7.disabled=QW.disabled=!0;var XF=(async()=>{await cY("./chimera.wasm"),s$=aQ("catalog");let J=s$.vowelTargets.male;KH=["u","a","i"].map((K)=>a$.map(($)=>J[K]?.artic[$]??s$.neutral[$]));let[Q,Z]=await Promise.all([fetch("./shaker-strokes.pcm"),fetch("./shaker-bank.json")]);if(!Q.ok||!Z.ok)throw new Error("Shaker recordings could not load.");if([r$,QZ]=await Promise.all([Q.arrayBuffer(),Z.json()]),r$.byteLength!==QZ.count*QZ.frames_per_stroke*2)throw new Error("Incomplete shaker recordings.");if(ZH=!0,T0===2)NH();k7.disabled=QW.disabled=!1,H0("load-status").textContent="Ready. Start with your volume low."})().catch((J)=>{throw U8("The instruments could not load. Check your connection and reload."),H0("load-status").textContent=String(J),J}),JH;function U8(J){H0("notice").textContent=J,clearTimeout(JH),JH=setTimeout(()=>{H0("notice").textContent=""},4500)}function w8(){H0("status").textContent=j9?T9?"SOUND ON":"SOUND PAUSED":"READY TO PLAY",H0("live-led").classList.toggle("on",T9),eQ.disabled=!j9,eQ.textContent=T9?"Ⅱ":"▶",eQ.setAttribute("aria-label",T9?"Pause sound":"Resume sound"),H0("sensor-status").textContent=!j9?"SOUND ON THIS DEVICE":L8&&performance.now()-L8<2000?"MOTION LIVE · PHONE SOUND":S8?"WAITING FOR MOTION":"TOUCH / MOUSE · PHONE SOUND"}function HH(){let{DeviceMotionEvent:J,DeviceOrientationEvent:Q}=window;if(!J)return Promise.resolve(!1);let Z=[];if(typeof J.requestPermission==="function")Z.push(J.requestPermission());if(typeof Q?.requestPermission==="function")Z.push(Q.requestPermission());return Z.length?Promise.all(Z).then((K)=>K.every(($)=>$==="granted")):Promise.resolve(!0)}async function HZ(J){if(n$)return;n$=!0,k7.textContent="Opening the instruments…";try{if("audioSession"in navigator)try{navigator.audioSession.type="playback"}catch{}Y8??=new AudioContext({latencyHint:"interactive"});let Q=Y8.resume(),Z=J?HH().catch(()=>!1):Promise.resolve(!1);await Promise.all([Q,XF]),S8=await Z,J6.reset(),await Y8.audioWorklet.addModule("./audio-worklet.js"),j9=new AudioWorkletNode(Y8,"motion-audio",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{module:nY(),pcm:r$,shakerBank:QZ,vowels:KH}}),j9.onprocessorerror=()=>{T9=!1,w8(),U8("The audio engine stopped. Reload to restart it.")},j9.port.onmessage=($)=>{if(Number.isFinite($.data.frequency)&&$.data.frequency>0)XH=$.data.frequency;if($.data.type==="scope")A7=$.data.values,JZ=$.data.writeIndex;if($.data.type==="artic")for(let W=0;W<a$.length;W++)t$[a$[W]]=$.data.values[W];if($.data.type==="grains"){Z9.count=$.data.count;let W=$.data.positions,X=performance.now()/1000;for(let Y=0;Y<Z9.count;Y++){let H=Z9.grains[Y];H.x=W[Y*3],H.y=W[Y*3+1],H.z=W[Y*3+2]}for(let Y=0;Y<6;Y++){let H=Z9.pulses[Y],G=Y*4;H.x=$.data.impacts[G],H.y=$.data.impacts[G+1],H.t=X-$.data.impacts[G+2],H.strength=$.data.impacts[G+3]}}if($.data.type==="error")T9=!1,w8(),U8("The audio engine stopped. Reload to restart it.")};let K=Y8.createGain();if(K.gain.value=0.8,j9.connect(K),K.connect(Y8.destination),qH(),T9=!0,H0("welcome").hidden=!0,H0("gesture-caption").hidden=!1,S8)$Z=!0,KZ.x=null,U8("Hold comfortably and tap CENTRE. Move to breathe; faster movement gives stronger excitation. Stop to fall silent.");else U8(J?"Motion is unavailable or permission was declined. Drag to play; try opening this link in Safari or Chrome.":"Drag across the display to play. On a phone, tap “Enable motion” below to use its sensors.");w8(),Q8(!0)}catch(Q){U8(`Could not start sound: ${Q instanceof Error?Q.message:String(Q)}. Try Safari or Chrome.`),k7.textContent="Try enabling sound again"}finally{n$=!1}}k7.addEventListener("click",()=>HZ(!0));QW.addEventListener("click",()=>HZ(!1));eQ.addEventListener("click",async()=>{if(!Y8)return;await Y8.resume(),T9=!T9,w8(),Q8(!0)});H0("centre").addEventListener("click",()=>{J6.reset(),A9=null,c6=!1,eJ(),KZ.center(z7),WH=ZW,PJ=u6=0.5,g6=P7=0.5,U8("Centred on this grip.")});H0("test").addEventListener("click",async()=>{if(A9=null,eJ(),!j9){if(await HZ(!1),!j9)return}if(Y8?.state!=="running")await Y8?.resume();T9=!0,PJ=0.5,u6=0.5,WZ=performance.now()+1000,l6=performance.now()+220,$H=performance.now(),w8(),Q8(!0)});H0("sensitivity").addEventListener("input",(J)=>{kJ=Number(J.target.value)/100,H0("sensitivity-output").textContent=String(Math.round(kJ*100)).padStart(2,"0")});document.querySelectorAll("[data-mode]").forEach((J)=>J.addEventListener("click",()=>UH(Number(J.dataset.mode))));function UH(J){if(T0=J,J6.reset(),XZ=0,YZ=-1/0,A9!==null&&X8(A9)>(T0===2?880:1760))A9=null;if(UJ=0,l6=0,Z9.reset(Z9.count),document.querySelectorAll("[data-mode]").forEach((Q)=>{let Z=Number(Q.dataset.mode)===T0;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),H0("excitation-controls").hidden=T0!==2,H0("note-panel").hidden=T0===0,H0("shaker-options").hidden=T0!==0,H0("note-plane").hidden=T0===0,H0("mode-hint").hidden=T0===1,n6(),H0("chamber").hidden=T0!==0,H0("touch-pad").hidden=T0===0,H0("synth-bank").hidden=T0!==1,H0("touch-pad").setAttribute("aria-valuemax",T0===2?"880":"1760"),H0("screen-name").textContent=["LOOSE GRAIN CHAMBER","CONTINUOUS THEREMIN","LIVE VOCAL ANATOMY"][T0],H0("screen-detail").textContent=["XYZ","110—1760 HZ","CHIMERA"][T0],H0("mode-hint").textContent=T0===0?"Shake in any direction.":"Move to breathe · tilt for pitch.",H0("gesture-caption").textContent=T0===0?"SHAKE IN ANY DIRECTION · DRAG TO RATTLE":T0===1?"SIDE TILT: PITCH · FORWARD / BACK: VOWEL":"MOVE TO BREATHE · TILT FOR PITCH",H0("description").innerHTML=["A handful of grains.<br>A chamber in your hand.<br>Every movement has a texture.","A continuous voice.<br>No keys. No steps.<br>Just the shape of a gesture.","A living vocal tract.<br>Tongue, lips and breath.<br>Play the anatomy of a voice."][T0],H0("voice-credit").textContent=T0===2?"CHIMERA · JAMESON HODGE":"PLAYED BY MOVEMENT",H0("x-label").textContent=T0===0?"X / Y":"PITCH",H0("y-label").textContent=T0===0?"ENERGY":"VOWEL",H0("z-label").textContent=T0===0?"Z":T0===2?"EXCITATION":"BREATH Z",x6.hidden=T0===2,H0("head").hidden=T0!==2,T0===2&&ZH)NH();if(T0===1)GH();w8(),Q8(!0)}function GH(){let J=d$[rJ];document.querySelectorAll("[data-synth]").forEach((Q)=>{let Z=Number(Q.dataset.synth)===rJ;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),H0("screen-name").textContent=J.name.toUpperCase()+" / CONTINUOUS SYNTH",H0("y-label").textContent=J.tag,H0("description").textContent=J.description,H0("gesture-caption").textContent="SIDE TILT: PITCH · FORWARD / BACK: "+J.tag,H0("touch-pad").querySelector("span:last-child").textContent=rJ===0?"LOW ↔ HIGH · OO ↕ EE":"X: PITCH · Y: COLOUR"}document.querySelectorAll("[data-synth]").forEach((J)=>J.addEventListener("click",()=>{rJ=Number(J.dataset.synth),GH(),Q8(!0)}));function NH(){if(i8)return;try{let J=H0("head");i8=new E$({alpha:!0,antialias:!0,powerPreference:"low-power"}),i8.setPixelRatio(Math.min(devicePixelRatio,1.5)),i8.setClearColor(0,0),J.appendChild(i8.domElement),s9=new x$,s9.centred=!0;let Q=aQ("model",{body:{female:0,child:0},sampleRate:Y8?.sampleRate??48000}),Z=Q.body.scale,K=Q.body.pharynx;tJ={bodyParams:Q.body,tract:{scale:Z,P:(W,X)=>({x:(W>0.5?0.5+(W-0.5)*0.86:W)*Z,y:(X<7?7-(7-X)*K:X)*Z}),unP:(W,X)=>({x:W/Z>0.5?0.5+(W/Z-0.5)/0.86:W/Z,y:X/Z<7?7-(7-X/Z)/K:X/Z})},frame:(W)=>aQ("frame",{model:Q.model,artic:W})},UZ();let $=s9.poses(tJ);s9.camera.position.copy($.home),s9.camera.lookAt($.target),zJ=new L$(s9.camera,i8.domElement),zJ.target.copy($.target),zJ.enablePan=zJ.enableZoom=!1,zJ.update()}catch(J){U8("The 3D view is unavailable in this browser. The voice can still play."),console.error(J)}}function UZ(){let J=x6.getBoundingClientRect(),Q=H0("glass");k8=Q.clientWidth,_8=Q.clientHeight-83;let Z=Math.min(devicePixelRatio,2);if(x6.width=Math.round(k8*Z),x6.height=Math.round(_8*Z),a0.setTransform(Z,0,0,Z,0,0),i8&&s9){if(i8.setSize(k8,_8),s9.resize(k8,_8),tJ&&zJ){let K=s9.poses(tJ);s9.camera.position.copy(K.home),zJ.target.copy(K.target),zJ.update()}}}addEventListener("resize",UZ);new ResizeObserver(UZ).observe(H0("glass"));UZ();addEventListener("devicemotion",(J)=>{if(!S8)return;let{acceleration:Q,accelerationIncludingGravity:Z}=J;if(!Z||Z.x==null||Z.y==null||Z.z==null)return;let K=performance.now();L8=K;let $=Math.min(0.05,Math.max(0.005,(K-eY)/1000));eY=K;let W=[Z.x,Z.y,Z.z];for(let Y=0;Y<3;Y++)tQ[Y]+=(W[Y]-tQ[Y])*(1-Math.exp(-$/0.22));if(Q?.x!=null&&Q?.y!=null&&Q?.z!=null)a8=[Q.x,Q.y,Q.z].map((Y)=>Y/9.80665),z7=[Z.x-Q.x,Z.y-Q.y,Z.z-Q.z].map((Y)=>Y/9.80665);else a8=W.map((Y,H)=>(Y-tQ[H])/9.80665),z7=tQ.map((Y)=>Y/9.80665);if(ZZ=[J.rotationRate?.alpha??0,J.rotationRate?.beta??0,J.rotationRate?.gamma??0].map((Y)=>Y*Math.PI/180),$Z)KZ.center(z7),WH=ZW,$Z=!1;m6=KZ.project(z7),J6.update(a8,ZZ,K);let X=Math.max(0,Math.hypot(...a8)-0.035)*1.8+Math.max(0,Math.hypot(...ZZ)-0.15)*0.08;UJ=Math.max(UJ,I9(X*(0.5+kJ),0,1)),Q8(!1)},{passive:!0});addEventListener("deviceorientation",(J)=>{if(J.gamma!=null)ZW=J.gamma},{passive:!0});function DH(J=performance.now()){let Q=J<WZ||!S8||J-L8>1500,Z=Q?PJ:I9(0.5+Math.asin(I9(m6[0],-1,1))/Math.PI*(0.5+kJ),0,1),K=Q?u6:I9(0.5-m6[1]*(0.7+kJ),0,1);g6+=(Z-g6)*0.35,P7+=(K-P7)*0.35;let $=A9===null?110*Math.pow(2,g6*(T0===2?3:4)):Math.min(T0===2?880:1760,X8(A9));if(T8&&T0!==0)h6=l$($,J8,T0===2?880:1760,A9??h6),$=X8(h6);else h6=null;return{frequency:$,vowel:P7,breath:I9(0.55-a8[2]*0.65,0.05,1),excitation:T0===2?S8&&L8>0&&J-L8<1500?J6.value(J,kJ):Math.max(J<l6?0.65:0,XZ*Math.exp(-Math.max(0,J-YZ)/85)):void 0}}function Q8(J){if(!j9)return;let Q=performance.now();if(!J&&Q-e$<9)return;e$=Q;let Z=DH(Q);YH=Z,j9.port.postMessage({type:"state",mode:T0,voice:rJ,enabled:T9,...Z,acceleration:a8.map((K)=>K*(0.45+kJ*1.55)),tilt:m6,pulse:Q<l6})}function QH(J){A9=null,eJ();let Q=J.currentTarget,Z=Q.getBoundingClientRect(),K=I9((J.clientX-Z.left)/Z.width,0,1),$=I9((J.clientY-Z.top)/Z.height,0,1),W=performance.now();if(PJ=K,u6=1-$,WZ=W+2000,$H=W,T0===2&&(!S8||!L8||W-L8>1500)){let Y=M8?Math.max(8,W-M8.t)/1000:0;XZ=M8?I9(Math.hypot(K-M8.x,$-M8.y)/Y*0.4,0,1):0.45,YZ=W}if(M8&&T0===0){let Y=Math.max(8,W-M8.t),H=(K-M8.x)/Y*1000,G=($-M8.y)/Y*1000;UJ=Math.max(UJ,I9(Math.hypot(H,G)*0.13,0,1)),a8=[I9(H*0.3,-2,2),I9(-G*0.3,-2,2),0]}M8={x:K,y:$,t:W};let X=H0("touch-pad").querySelector("i");X.style.left=`${K*100}%`,X.style.top=`${$*100}%`,H0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,K*(T0===2?3:4))))),Q8(!0)}for(let J of[x6,H0("touch-pad")]){J.addEventListener("pointerdown",(Z)=>{if(!j9)return;o$=!0,M8=null,J.setPointerCapture(Z.pointerId),QH(Z)}),J.addEventListener("pointermove",(Z)=>{if(o$)QH(Z)});let Q=()=>{o$=!1,M8=null};J.addEventListener("pointerup",Q),J.addEventListener("pointercancel",Q)}H0("touch-pad").addEventListener("keydown",(J)=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(J.key))J.preventDefault(),A9=null,eJ(),PJ=I9(PJ+(J.key==="ArrowRight"?0.025:J.key==="ArrowLeft"?-0.025:0),0,1),u6=I9(u6+(J.key==="ArrowUp"?0.05:J.key==="ArrowDown"?-0.05:0),0,1),WZ=performance.now()+3000,H0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,PJ*(T0===2?3:4))))),Q8(!0)});function qH(){let J=Number(H0("size").value)/1000;Z9.shape=H0("shape").value,Z9.w=J,Z9.h=Z9.shape==="circle"?J:Z9.shape==="oval"?J*0.62:J*1.12,Z9.radius=Number(H0("grain-size").value)/2000,Z9.reset(Number(H0("fill").value)),j9?.port.postMessage({type:"geometry",shape:Z9.shape,width:Z9.w,height:Z9.h,depth:Z9.d,radius:Z9.radius,count:Z9.count,material:Number(H0("material").value)})}for(let J of["shape","fill","size","grain-size","material"])H0(J).addEventListener("input",qH);function YF(J,Q){if(a0.clearRect(0,0,k8,_8),a0.save(),a0.translate(k8/2,_8/2),T0===0){let Z=Math.min((k8-70)/Z9.w,(_8-48)/Z9.h),K=Z9.w*Z/2,$=Z9.h*Z/2;if(a0.lineWidth=1,a0.strokeStyle="#8b9b6e77",a0.beginPath(),Z9.shape==="box")a0.roundRect(-K,-$,K*2,$*2,12);else a0.ellipse(0,0,K,$,0,0,Math.PI*2);a0.stroke();for(let X of Z9.pulses){let Y=J/1000-X.t;if(Y<0||Y>0.35)continue;a0.strokeStyle=`rgba(233,180,94,${(1-Y/0.35)*0.5})`,a0.lineWidth=1,a0.beginPath(),a0.arc(X.x*Z,-X.y*Z,3+Y*90,0,Math.PI*2),a0.stroke()}let W=Z9.grains.slice(0,Z9.count).sort((X,Y)=>X.z-Y.z);for(let X of W){let Y=1+X.z*4;a0.fillStyle=`rgba(216,202,150,${0.4+(X.z/Z9.d+0.5)*0.5})`,a0.beginPath(),a0.arc(X.x*Z,-X.y*Z,Math.max(1.5,Z9.radius*Z)*Y,0,Math.PI*2),a0.fill()}}else{a0.strokeStyle="#70876233",a0.lineWidth=1;for(let H=-2;H<=2;H++)a0.beginPath(),a0.moveTo(-k8*0.4,H*_8*0.14),a0.lineTo(k8*0.4,H*_8*0.14),a0.stroke();let Z=DH(J),K=T9?1:0.2;a0.strokeStyle=`rgba(209,195,145,${K})`,a0.lineWidth=1.4,a0.beginPath();let $=0,W=0.1;for(let H=0;H<512;H++)W=Math.max(W,Math.abs(A7[H]));for(let H=1;H<128;H++)if(A7[JZ+H-1&511]<=0&&A7[JZ+H&511]>0){$=H;break}for(let H=0;H<384;H++){let G=(H/383-0.5)*k8*0.84,D=-A7[JZ+$+H&511]/Math.max(0.2,W)*_8*0.25;if(H===0)a0.moveTo(G,D);else a0.lineTo(G,D)}a0.stroke();let X=(g6-0.5)*k8*0.7,Y=(0.5-P7)*_8*0.65;a0.fillStyle="#ead9aa",a0.beginPath(),a0.arc(X,Y,4,0,Math.PI*2),a0.fill()}a0.restore()}function FH(J){requestAnimationFrame(FH);let Q=Math.min(0.05,(J-tY)/1000);if(tY=J,UJ*=Math.exp(-Q/0.06),UJ<0.004)UJ=0;if(!L8||J-L8>500)a8=a8.map((K)=>K*Math.exp(-Q/0.05)),ZZ=[0,0,0];let Z=Math.max(UJ,J<l6?0.65:0);if(j9&&J-rY>40)rY=J,j9.port.postMessage({type:"snapshot"});if(T0===0||T0===1)YF(J,Q);else if(s9&&i8&&tJ&&J-i$>40){let K=Math.min(0.08,(J-i$)/1000);i$=J,s9.face.update(null,K),s9.update(tJ,tJ.frame(t$),t$,null,{pressure:!1,particles:!1,calipers:!1,grid:!1},K),i8.render(s9.scene,s9.camera)}if(J-e$>30)Q8(!1);if(Math.floor(J/100)!==Math.floor((J-Q*1000)/100)){w8();let K=YH,$=T9?XH:K.frequency,W=B7($),X=Math.max(2,Math.min(T0===2?5:6,Math.floor(W.midi/12)-1));if(T0!==0&&T9&&A9===null&&!c6&&X!==o8)o8=X,n6();if(H0("note-value").textContent=T0===0?"":`${W.label} ${W.cents>0?"+":""}${W.cents}¢`,document.querySelectorAll("[data-note]").forEach((Y)=>{let H=Number(Y.dataset.note)===B7(T8?K.frequency:$).midi;Y.classList.toggle("sounding",T9&&H&&(T0!==2||(K.excitation??0)>0.005)),Y.setAttribute("aria-current",T9&&H?"true":"false")}),H0("xy-value").textContent=T0===0?`${Math.round(m6[0]*99).toString().padStart(2,"0")} / ${Math.round(m6[1]*99).toString().padStart(2,"0")}`:`${Math.round($)} HZ`,H0("energy-value").textContent=T0===0?String(Math.round(Z*127)).padStart(3,"0"):T0===1&&rJ!==0?String(Math.round(K.vowel*127)).padStart(3,"0"):["OO","OO–AH","AH","AH–EE","EE"][Math.min(4,Math.floor(K.vowel*5))],H0("z-value").textContent=String(Math.round((T0===0?Math.abs(a8[2]):T0===2?K.excitation??0:K.breath)*100)).padStart(3,"0"),T0===2){let Y=K.excitation??0;H0("excitation-meter").value=Y,H0("excitation-output").textContent=`${Math.round(Y*100)}%`}}}requestAnimationFrame(FH);document.addEventListener("visibilitychange",()=>{if(document.hidden&&j9)J6.reset(),XZ=0,YZ=-1/0,T9=!1,Q8(!0),w8(),Y8?.suspend(),U8("Sound paused while you were away. Tap ▶ to resume.")});H0("share").addEventListener("click",async()=>{try{let J=location.origin+location.pathname;if(navigator.share)await navigator.share({title:"Kaizen Motion",text:"Your phone is an instrument. Shake, tilt, play.",url:J});else await navigator.clipboard.writeText(J),U8("Link copied. Share it anywhere.")}catch(J){if(J.name!=="AbortError")U8("Copy this page’s address to share Motion.")}});var KW=document.createElement("button");KW.textContent="Enable motion";KW.addEventListener("click",async()=>{S8=await HH().catch(()=>!1),J6.reset(),$Z=!0,U8(S8?"Motion enabled. Hold comfortably and tap CENTRE.":"Motion permission is unavailable here. Open in Safari/Chrome or keep playing with touch."),w8()});document.querySelector("footer nav")?.appendChild(KW);function eJ(){H0("follow-motion").disabled=A9===null&&!c6,H0("note-help").textContent=H8?"Tap pitches to allow or block. Applies in every octave.":A9!==null?`Holding ${B7(X8(A9)).label} · move to breathe.`:T8?"Pitch follows the enabled scale notes.":"Continuous pitch · tap a note to hold.",document.querySelectorAll("[data-note]").forEach((J)=>J.setAttribute("aria-pressed",String(H8?J8.has(aJ(Number(J.dataset.note))):Number(J.dataset.note)===A9)))}function n6(){let J=T0===2?880:1760;o8=Math.max(2,Math.min(T0===2?5:6,o8));let Q=H0("note-grid");Q.replaceChildren(),Q.hidden=!p6,H0("show-notes").setAttribute("aria-pressed",String(p6)),H0("edit-notes").setAttribute("aria-pressed",String(H8)),H0("edit-notes").textContent=H8?"Done":"Edit",H0("edit-notes").setAttribute("aria-label",H8?"Finish editing notes":"Edit enabled notes");for(let Z of Array.from({length:12},(K,$)=>(o8+1)*12+$)){let K=document.createElement("button"),$=B7(X8(Z)).label,W=X8(Z)>=109.999999&&X8(Z)<=J+0.000001,X=!T8||J8.has(aJ(Z));K.type="button",K.dataset.note=String(Z),K.textContent=$,K.classList.toggle("excluded",!X),K.classList.toggle("outside-range",!W),K.disabled=!H8&&(!W||!X),K.setAttribute("aria-label",H8?`${J8.has(aJ(Z))?"Exclude":"Include"} ${$.replace(/-?\d+$/,"")} in every octave`:`${X?"Play":"Excluded"} ${$}, ${X8(Z).toFixed(1)} hertz`),K.addEventListener("click",async()=>{if(H8){if(!T8)J8=f6(0,"chromatic"),T8=!0,H0("scale-enabled").checked=!0;let Y=aJ(Z);if(J8.has(Y)){if(J8.size===1){U8("Keep at least one pitch enabled.");return}J8.delete(Y)}else J8.add(Y);d6="custom",H0("scale-preset").value="custom",_7();return}if(!W||!X)return;if(!j9){if(await HZ(S8),!j9)return}else await Y8?.resume();if(A9=Z,h6=Z,!S8||!L8||performance.now()-L8>1500)l6=performance.now()+220;T9=!0,g6=PJ=Math.log2(X8(Z)/110)/(T0===2?3:4),eJ(),w8(),Q8(!0)}),Q.appendChild(K)}H0("note-octave").textContent=String(o8),H0("octave-down").disabled=o8===2,H0("octave-up").disabled=o8===(T0===2?5:6),eJ()}function _7(){if(h6=null,T8&&A9!==null)A9=l$(X8(A9),J8,T0===2?880:1760);n6(),Q8(!0)}H0("scale-enabled").addEventListener("change",()=>{if(T8=H0("scale-enabled").checked,!T8)H8=!1;_7()});H0("scale-root").addEventListener("change",()=>{let J=Number(H0("scale-root").value);J8=d6==="custom"?new Set([...J8].map((Q)=>(Q+J-JW+12)%12)):f6(J,d6),JW=J,_7()});H0("scale-preset").addEventListener("change",()=>{d6=H0("scale-preset").value,J8=f6(JW,d6),_7()});H0("show-notes").addEventListener("click",()=>{if(p6=!p6,!p6)H8=!1;n6()});H0("edit-notes").addEventListener("click",()=>{if(H8=!H8,H8){if(p6=!0,!T8)T8=!0,J8=f6(0,"chromatic"),d6="custom",H0("scale-enabled").checked=!0,H0("scale-preset").value="custom"}_7()});H0("more-open").addEventListener("click",()=>H0("more-dialog").showModal());H0("more-close").addEventListener("click",()=>H0("more-dialog").close());H0("octave-down").addEventListener("click",()=>{c6=!0,o8--,n6()});H0("octave-up").addEventListener("click",()=>{c6=!0,o8++,n6()});H0("follow-motion").addEventListener("click",()=>{A9=null,c6=!1,eJ(),Q8(!0)});aY();UH(2);sY(()=>({instrument:["Shaker","Synth","CHIMERA"][T0],voice:T0===1?d$[rJ].name:T0===2?"CHIMERA":"Shaker",sensitivity:Math.round(kJ*100),shape:Z9.shape,grainCount:Z9.count}),()=>{H0("more-dialog").close(),T9=!1,Q8(!0),w8()});
