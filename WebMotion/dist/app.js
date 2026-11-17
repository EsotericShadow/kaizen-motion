var bW="186",LJ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},IJ={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fW=0,jZ=1,hW=2;var Q7=1,xW=2,B6=3,C6=0,o8=1,b9=2,f9=0,Z7=1,vZ=2,yZ=3,bZ=4,r7=5;var A6=100,gW=101,pW=102,mW=103,t7=104,dW=200,uW=201,lW=202,cW=203,nW=204,sW=205,iW=206,oW=207,aW=208,rW=209,tW=210,eW=211,JX=212,QX=213,ZX=214,KX=0,$X=1,WX=2,fZ=3,XX=4,YX=5,HX=6,UX=7,GX=0,NX=1,DX=2,A9=0,hZ=1,xZ=2,gZ=3,pZ=4,mZ=5,dZ=6,uZ=7;var z6=301,yJ=302,e7=303,JQ=304,K7=306,qX=1000,QQ=1001,EX=1002,VJ=1003,FX=1004;var $7=1005;var a8=1006,ZQ=1007;var bJ=1008;var z9=1009,OX=1010,RX=1011,W7=1012,lZ=1013,BJ=1014,WJ=1015,h9=1016,cZ=1017,nZ=1018,P6=1020,MX=35902,LX=35899,IX=1021,VX=1022,x9=1023,fJ=1026,hJ=1027,BX=1028,sZ=1029,xJ=1030,iZ=1031;var oZ=1033,KQ=33776,$Q=33777,WQ=33778,XQ=33779,aZ=35840,rZ=35841,tZ=35842,eZ=35843,JK=36196,QK=37492,ZK=37496,KK=37488,$K=37489,YQ=37490,WK=37491,XK=37808,YK=37809,HK=37810,UK=37811,GK=37812,NK=37813,DK=37814,qK=37815,EK=37816,FK=37817,OK=37818,RK=37819,MK=37820,LK=37821,IK=36492,VK=36494,BK=36495,CK=36283,AK=36284,HQ=36285,zK=36286;var PK=0,CX=1,gJ="",AX="srgb",kK="srgb-linear",_K="linear",D8="srgb";var zX=512,PX=513,kX=514,UQ=515,_X=516,TX=517,GQ=518,wX=519;var NQ=35048;var TK="300 es",wK=2000;function BH(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function CH(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function e6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function SX(){let J=e6("canvas");return J.style.display="block",J}var qW={},I6=null;function J7(...J){let Q="THREE."+J.shift();if(I6)I6("log",Q,...J);else console.log(Q,...J)}function jX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let Z=J[1];if(Z&&Z.isStackTrace)J[0]+=" "+Z.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function y0(...J){J=jX(J);let Q="THREE."+J.shift();if(I6)I6("warn",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.warn(Z.getError(Q));else console.warn(Q,...J)}}function f0(...J){J=jX(J);let Q="THREE."+J.shift();if(I6)I6("error",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.error(Z.getError(Q));else console.error(Q,...J)}}function vJ(...J){let Q=J.join(" ");if(Q in qW)return;qW[Q]=!0,y0(...J)}function vX(J,Q,Z){return new Promise(function(K,$){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:$();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Z);break;default:K()}}setTimeout(W,Z)})}var yX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class g9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let K=Z[J];if(K!==void 0){let $=K.indexOf(Q);if($!==-1)K.splice($,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let K=Z.slice(0);for(let $=0,W=K.length;$<W;$++)K[$].call(this,J);J.target=null}}}var f8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],EW=1234567,r6=Math.PI/180,V6=180/Math.PI;function KJ(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(f8[J&255]+f8[J>>8&255]+f8[J>>16&255]+f8[J>>24&255]+"-"+f8[Q&255]+f8[Q>>8&255]+"-"+f8[Q>>16&15|64]+f8[Q>>24&255]+"-"+f8[Z&63|128]+f8[Z>>8&255]+"-"+f8[Z>>16&255]+f8[Z>>24&255]+f8[K&255]+f8[K>>8&255]+f8[K>>16&255]+f8[K>>24&255]).toLowerCase()}function p0(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function SK(J,Q){return(J%Q+Q)%Q}function AH(J,Q,Z,K,$){return K+(J-Q)*($-K)/(Z-Q)}function zH(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function t6(J,Q,Z){return(1-Z)*J+Z*Q}function PH(J,Q,Z,K){return t6(J,Q,1-Math.exp(-Z*K))}function kH(J,Q=1){return Q-Math.abs(SK(J,Q*2)-Q)}function _H(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function TH(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function wH(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function SH(J,Q){return J+Math.random()*(Q-J)}function jH(J){return J*(0.5-Math.random())}function vH(J){if(J!==void 0)EW=J;let Q=EW+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function yH(J){return J*r6}function bH(J){return J*V6}function fH(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function hH(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function xH(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function gH(J,Q,Z,K,$){let{cos:W,sin:X}=Math,Y=W(Z/2),H=X(Z/2),U=W((Q+K)/2),D=X((Q+K)/2),G=W((Q-K)/2),N=X((Q-K)/2),E=W((K-Q)/2),O=X((K-Q)/2);switch($){case"XYX":J.set(Y*D,H*G,H*N,Y*U);break;case"YZY":J.set(H*N,Y*D,H*G,Y*U);break;case"ZXZ":J.set(H*G,H*N,Y*D,Y*U);break;case"XZX":J.set(Y*D,H*O,H*E,Y*U);break;case"YXY":J.set(H*E,Y*D,H*O,Y*U);break;case"ZYZ":J.set(H*O,H*E,Y*D,Y*U);break;default:y0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+$)}}function C9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function W8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var X7={DEG2RAD:r6,RAD2DEG:V6,generateUUID:KJ,clamp:p0,euclideanModulo:SK,mapLinear:AH,inverseLerp:zH,lerp:t6,damp:PH,pingpong:kH,smoothstep:_H,smootherstep:TH,randInt:wH,randFloat:SH,randFloatSpread:jH,seededRandom:vH,degToRad:yH,radToDeg:bH,isPowerOfTwo:fH,ceilPowerOfTwo:hH,floorPowerOfTwo:xH,setQuaternionFromProperEuler:gH,normalize:W8,denormalize:C9};class x0{static{x0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*Z+K[6],this.y=K[1]*Q+K[4]*Z+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(p0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=this.x-J.x,W=this.y-J.y;return this.x=$*Z-W*K+J.x,this.y=$*K+W*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class r8{constructor(J=0,Q=0,Z=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=K}static slerpFlat(J,Q,Z,K,$,W,X){let Y=Z[K+0],H=Z[K+1],U=Z[K+2],D=Z[K+3],G=$[W+0],N=$[W+1],E=$[W+2],O=$[W+3];if(D!==O||Y!==G||H!==N||U!==E){let L=Y*G+H*N+U*E+D*O;if(L<0)G=-G,N=-N,E=-E,O=-O,L=-L;let F=1-X;if(L<0.9995){let q=Math.acos(L),R=Math.sin(q);F=Math.sin(F*q)/R,X=Math.sin(X*q)/R,Y=Y*F+G*X,H=H*F+N*X,U=U*F+E*X,D=D*F+O*X}else{Y=Y*F+G*X,H=H*F+N*X,U=U*F+E*X,D=D*F+O*X;let q=1/Math.sqrt(Y*Y+H*H+U*U+D*D);Y*=q,H*=q,U*=q,D*=q}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=D}static multiplyQuaternionsFlat(J,Q,Z,K,$,W){let X=Z[K],Y=Z[K+1],H=Z[K+2],U=Z[K+3],D=$[W],G=$[W+1],N=$[W+2],E=$[W+3];return J[Q]=X*E+U*D+Y*N-H*G,J[Q+1]=Y*E+U*G+H*D-X*N,J[Q+2]=H*E+U*N+X*G-Y*D,J[Q+3]=U*E-X*D-Y*G-H*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,K){return this._x=J,this._y=Q,this._z=Z,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:K,_z:$,_order:W}=J,X=Math.cos,Y=Math.sin,H=X(Z/2),U=X(K/2),D=X($/2),G=Y(Z/2),N=Y(K/2),E=Y($/2);switch(W){case"XYZ":this._x=G*U*D+H*N*E,this._y=H*N*D-G*U*E,this._z=H*U*E+G*N*D,this._w=H*U*D-G*N*E;break;case"YXZ":this._x=G*U*D+H*N*E,this._y=H*N*D-G*U*E,this._z=H*U*E-G*N*D,this._w=H*U*D+G*N*E;break;case"ZXY":this._x=G*U*D-H*N*E,this._y=H*N*D+G*U*E,this._z=H*U*E+G*N*D,this._w=H*U*D-G*N*E;break;case"ZYX":this._x=G*U*D-H*N*E,this._y=H*N*D+G*U*E,this._z=H*U*E-G*N*D,this._w=H*U*D+G*N*E;break;case"YZX":this._x=G*U*D+H*N*E,this._y=H*N*D+G*U*E,this._z=H*U*E-G*N*D,this._w=H*U*D-G*N*E;break;case"XZY":this._x=G*U*D-H*N*E,this._y=H*N*D-G*U*E,this._z=H*U*E+G*N*D,this._w=H*U*D+G*N*E;break;default:y0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,K=Math.sin(Z);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],K=Q[4],$=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],D=Q[10],G=Z+X+D;if(G>0){let N=0.5/Math.sqrt(G+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=($-H)*N,this._z=(W-K)*N}else if(Z>X&&Z>D){let N=2*Math.sqrt(1+Z-X-D);this._w=(U-Y)/N,this._x=0.25*N,this._y=(K+W)/N,this._z=($+H)/N}else if(X>D){let N=2*Math.sqrt(1+X-Z-D);this._w=($-H)/N,this._x=(K+W)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+D-Z-X);this._w=(W-K)/N,this._x=($+H)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(p0(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let K=Math.min(1,Q/Z);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=Z*U+W*X+K*H-$*Y,this._y=K*U+W*Y+$*X-Z*H,this._z=$*U+W*H+Z*Y-K*X,this._w=W*U-Z*X-K*Y-$*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=this.dot(J);if(X<0)Z=-Z,K=-K,$=-$,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),K=Math.sqrt(1-Z),$=Math.sqrt(Z);return this.set(K*Math.sin(J),K*Math.cos(J),$*Math.sin(Q),$*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{x.prototype.isVector3=!0}constructor(J=0,Q=0,Z=0){this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(FW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(FW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6]*K,this.y=$[1]*Q+$[4]*Z+$[7]*K,this.z=$[2]*Q+$[5]*Z+$[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements,W=1/($[3]*Q+$[7]*Z+$[11]*K+$[15]);return this.x=($[0]*Q+$[4]*Z+$[8]*K+$[12])*W,this.y=($[1]*Q+$[5]*Z+$[9]*K+$[13])*W,this.z=($[2]*Q+$[6]*Z+$[10]*K+$[14])*W,this}applyQuaternion(J){let Q=this.x,Z=this.y,K=this.z,$=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*K-X*Z),U=2*(X*Q-$*K),D=2*($*Z-W*Q);return this.x=Q+Y*H+W*D-X*U,this.y=Z+Y*U+X*H-$*D,this.z=K+Y*D+$*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[4]*Z+$[8]*K,this.y=$[1]*Q+$[5]*Z+$[9]*K,this.z=$[2]*Q+$[6]*Z+$[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:K,z:$}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-$*X,this.y=$*W-Z*Y,this.z=Z*X-K*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return NZ.copy(this).projectOnVector(J),this.sub(NZ)}reflect(J){return this.sub(NZ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(p0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,K=this.z-J.z;return Q*Q+Z*Z+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let K=Math.sin(Q)*J;return this.x=K*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=K*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var NZ=new x,FW=new r8;class g0{static{g0.prototype.isMatrix3=!0}constructor(J,Q,Z,K,$,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H)}set(J,Q,Z,K,$,W,X,Y,H){let U=this.elements;return U[0]=J,U[1]=K,U[2]=X,U[3]=Q,U[4]=$,U[5]=Y,U[6]=Z,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[3],Y=Z[6],H=Z[1],U=Z[4],D=Z[7],G=Z[2],N=Z[5],E=Z[8],O=K[0],L=K[3],F=K[6],q=K[1],R=K[4],k=K[7],V=K[2],A=K[5],P=K[8];return $[0]=W*O+X*q+Y*V,$[3]=W*L+X*R+Y*A,$[6]=W*F+X*k+Y*P,$[1]=H*O+U*q+D*V,$[4]=H*L+U*R+D*A,$[7]=H*F+U*k+D*P,$[2]=G*O+N*q+E*V,$[5]=G*L+N*R+E*A,$[8]=G*F+N*k+E*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*W*U-Q*X*H-Z*$*U+Z*X*Y+K*$*H-K*W*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],D=U*W-X*H,G=X*Y-U*$,N=H*$-W*Y,E=Q*D+Z*G+K*N;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/E;return J[0]=D*O,J[1]=(K*H-U*Z)*O,J[2]=(X*Z-K*W)*O,J[3]=G*O,J[4]=(U*Q-K*Y)*O,J[5]=(K*$-X*Q)*O,J[6]=N*O,J[7]=(Z*Y-H*Q)*O,J[8]=(W*Q-Z*$)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,K,$,W,X){let Y=Math.cos($),H=Math.sin($);return this.set(Z*Y,Z*H,-Z*(Y*W+H*X)+W+J,-K*H,K*Y,-K*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return vJ("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(DZ.makeScale(J,Q)),this}rotate(J){return vJ("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(DZ.makeRotation(-J)),this}translate(J,Q){return vJ("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(DZ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<9;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var DZ=new g0,OW=new g0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),RW=new g0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function pH(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function($,W,X){if(this.enabled===!1||W===X||!W||!X)return $;if(this.spaces[W].transfer==="srgb")$.r=$J($.r),$.g=$J($.g),$.b=$J($.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)$.applyMatrix3(this.spaces[W].toXYZ),$.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")$.r=L6($.r),$.g=L6($.g),$.b=L6($.b);return $},workingToColorSpace:function($,W){return this.convert($,this.workingColorSpace,W)},colorSpaceToWorking:function($,W){return this.convert($,W,this.workingColorSpace)},getPrimaries:function($){return this.spaces[$].primaries},getTransfer:function($){if($==="")return"linear";return this.spaces[$].transfer},getToneMappingMode:function($){return this.spaces[$].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function($,W=this.workingColorSpace){return $.fromArray(this.spaces[W].luminanceCoefficients)},define:function($){Object.assign(this.spaces,$)},_getMatrix:function($,W,X){return $.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function($){return this.spaces[$].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function($=this.workingColorSpace){return this.spaces[$].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function($,W){return vJ("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace($,W)},toWorkingColorSpace:function($,W){return vJ("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking($,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:OW,fromXYZ:RW,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:OW,fromXYZ:RW,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var o0=pH();function $J(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function L6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var $6;class jK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if($6===void 0)$6=e6("canvas");$6.width=J.width,$6.height=J.height;let K=$6.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);Z=$6}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=e6("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let K=Z.getImageData(0,0,J.width,J.height),$=K.data;for(let W=0;W<$.length;W++)$[W]=$J($[W]/255)*255;return Z.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor($J(Q[Z]/255)*255);else Q[Z]=$J(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return y0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var mH=0;class Y7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mH++}),this.uuid=KJ(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement!=="undefined"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame!=="undefined"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},K=this.data;if(K!==null){let $;if(Array.isArray(K)){$=[];for(let W=0,X=K.length;W<X;W++)if(K[W].isDataTexture)$.push(qZ(K[W].image));else $.push(qZ(K[W]))}else $=qZ(K);Z.url=$}if(!Q)J.images[this.uuid]=Z;return Z}}function qZ(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return jK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return y0("Texture: Unable to serialize Texture."),{}}var dH=0,EZ=new x;class x8 extends g9{constructor(J=x8.DEFAULT_IMAGE,Q=x8.DEFAULT_MAPPING,Z=1001,K=1001,$=1006,W=1008,X=1023,Y=1009,H=x8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:dH++}),this.uuid=KJ(),this.name="",this.source=new Y7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=K,this.magFilter=$,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new x0(0,0),this.repeat=new x0(1,1),this.center=new x0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new g0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(EZ).x}get height(){return this.source.getSize(EZ).y}get depth(){return this.source.getSize(EZ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){y0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){y0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&Z&&(K.isVector2&&Z.isVector2))K.copy(Z);else if(K&&Z&&(K.isVector3&&Z.isVector3))K.copy(Z);else if(K&&Z&&(K.isMatrix3&&Z.isMatrix3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}x8.DEFAULT_IMAGE=null;x8.DEFAULT_MAPPING=300;x8.DEFAULT_ANISOTROPY=1;class Y8{static{Y8.prototype.isVector4=!0}constructor(J=0,Q=0,Z=0,K=1){this.x=J,this.y=Q,this.z=Z,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,K){return this.x=J,this.y=Q,this.z=Z,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*K+W[12]*$,this.y=W[1]*Q+W[5]*Z+W[9]*K+W[13]*$,this.z=W[2]*Q+W[6]*Z+W[10]*K+W[14]*$,this.w=W[3]*Q+W[7]*Z+W[11]*K+W[15]*$,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,K,$,W=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],D=Y[8],G=Y[1],N=Y[5],E=Y[9],O=Y[2],L=Y[6],F=Y[10];if(Math.abs(U-G)<0.01&&Math.abs(D-O)<0.01&&Math.abs(E-L)<0.01){if(Math.abs(U+G)<0.1&&Math.abs(D+O)<0.1&&Math.abs(E+L)<0.1&&Math.abs(H+N+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let R=(H+1)/2,k=(N+1)/2,V=(F+1)/2,A=(U+G)/4,P=(D+O)/4,_=(E+L)/4;if(R>k&&R>V)if(R<0.01)Z=0,K=0.707106781,$=0.707106781;else Z=Math.sqrt(R),K=A/Z,$=P/Z;else if(k>V)if(k<0.01)Z=0.707106781,K=0,$=0.707106781;else K=Math.sqrt(k),Z=A/K,$=_/K;else if(V<0.01)Z=0.707106781,K=0.707106781,$=0;else $=Math.sqrt(V),Z=P/$,K=_/$;return this.set(Z,K,$,Q),this}let q=Math.sqrt((L-E)*(L-E)+(D-O)*(D-O)+(G-U)*(G-U));if(Math.abs(q)<0.001)q=1;return this.x=(L-E)/q,this.y=(D-O)/q,this.z=(G-U)/q,this.w=Math.acos((H+N+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this.w=p0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this.w=p0(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vK extends g9{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new Y8(0,0,J,Q),this.scissorTest=!1,this.viewport=new Y8(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:Z.depth},$=new x8(K),W=Z.count;for(let X=0;X<W;X++)this.textures[X]=$.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveColorBuffer=Z.resolveColorBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.storeMultisampledColorBuffer=Z.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Z.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Z.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview,this.useArrayDepthTexture=Z.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let K=0,$=this.textures.length;K<$;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=Z,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new Y7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $9 extends vK{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class DQ extends x8{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class yK extends x8{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class M8{static{M8.prototype.isMatrix4=!0}constructor(J,Q,Z,K,$,W,X,Y,H,U,D,G,N,E,O,L){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H,U,D,G,N,E,O,L)}set(J,Q,Z,K,$,W,X,Y,H,U,D,G,N,E,O,L){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=Z,F[12]=K,F[1]=$,F[5]=W,F[9]=X,F[13]=Y,F[2]=H,F[6]=U,F[10]=D,F[14]=G,F[3]=N,F[7]=E,F[11]=O,F[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new M8().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),Z.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,Z=J.elements,K=1/W6.setFromMatrixColumn(J,0).length(),$=1/W6.setFromMatrixColumn(J,1).length(),W=1/W6.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*K,Q[1]=Z[1]*K,Q[2]=Z[2]*K,Q[3]=0,Q[4]=Z[4]*$,Q[5]=Z[5]*$,Q[6]=Z[6]*$,Q[7]=0,Q[8]=Z[8]*W,Q[9]=Z[9]*W,Q[10]=Z[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z,W=Math.cos(Z),X=Math.sin(Z),Y=Math.cos(K),H=Math.sin(K),U=Math.cos($),D=Math.sin($);if(J.order==="XYZ"){let G=W*U,N=W*D,E=X*U,O=X*D;Q[0]=Y*U,Q[4]=-Y*D,Q[8]=H,Q[1]=N+E*H,Q[5]=G-O*H,Q[9]=-X*Y,Q[2]=O-G*H,Q[6]=E+N*H,Q[10]=W*Y}else if(J.order==="YXZ"){let G=Y*U,N=Y*D,E=H*U,O=H*D;Q[0]=G+O*X,Q[4]=E*X-N,Q[8]=W*H,Q[1]=W*D,Q[5]=W*U,Q[9]=-X,Q[2]=N*X-E,Q[6]=O+G*X,Q[10]=W*Y}else if(J.order==="ZXY"){let G=Y*U,N=Y*D,E=H*U,O=H*D;Q[0]=G-O*X,Q[4]=-W*D,Q[8]=E+N*X,Q[1]=N+E*X,Q[5]=W*U,Q[9]=O-G*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let G=W*U,N=W*D,E=X*U,O=X*D;Q[0]=Y*U,Q[4]=E*H-N,Q[8]=G*H+O,Q[1]=Y*D,Q[5]=O*H+G,Q[9]=N*H-E,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let G=W*Y,N=W*H,E=X*Y,O=X*H;Q[0]=Y*U,Q[4]=O-G*D,Q[8]=E*D+N,Q[1]=D,Q[5]=W*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=N*D+E,Q[10]=G-O*D}else if(J.order==="XZY"){let G=W*Y,N=W*H,E=X*Y,O=X*H;Q[0]=Y*U,Q[4]=-D,Q[8]=H*U,Q[1]=G*D+O,Q[5]=W*U,Q[9]=N*D-E,Q[2]=E*D-N,Q[6]=X*U,Q[10]=O*D+G}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(uH,J,lH)}lookAt(J,Q,Z){let K=this.elements;if(Z9.subVectors(J,Q),Z9.lengthSq()===0)Z9.z=1;if(Z9.normalize(),qJ.crossVectors(Z,Z9),qJ.lengthSq()===0){if(Math.abs(Z.z)===1)Z9.x+=0.0001;else Z9.z+=0.0001;Z9.normalize(),qJ.crossVectors(Z,Z9)}return qJ.normalize(),S7.crossVectors(Z9,qJ),K[0]=qJ.x,K[4]=S7.x,K[8]=Z9.x,K[1]=qJ.y,K[5]=S7.y,K[9]=Z9.y,K[2]=qJ.z,K[6]=S7.z,K[10]=Z9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[4],Y=Z[8],H=Z[12],U=Z[1],D=Z[5],G=Z[9],N=Z[13],E=Z[2],O=Z[6],L=Z[10],F=Z[14],q=Z[3],R=Z[7],k=Z[11],V=Z[15],A=K[0],P=K[4],_=K[8],I=K[12],C=K[1],p=K[5],j=K[9],y=K[13],m=K[2],T=K[6],w=K[10],n=K[14],u=K[3],$0=K[7],i=K[11],Z0=K[15];return $[0]=W*A+X*C+Y*m+H*u,$[4]=W*P+X*p+Y*T+H*$0,$[8]=W*_+X*j+Y*w+H*i,$[12]=W*I+X*y+Y*n+H*Z0,$[1]=U*A+D*C+G*m+N*u,$[5]=U*P+D*p+G*T+N*$0,$[9]=U*_+D*j+G*w+N*i,$[13]=U*I+D*y+G*n+N*Z0,$[2]=E*A+O*C+L*m+F*u,$[6]=E*P+O*p+L*T+F*$0,$[10]=E*_+O*j+L*w+F*i,$[14]=E*I+O*y+L*n+F*Z0,$[3]=q*A+R*C+k*m+V*u,$[7]=q*P+R*p+k*T+V*$0,$[11]=q*_+R*j+k*w+V*i,$[15]=q*I+R*y+k*n+V*Z0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],D=J[6],G=J[10],N=J[14],E=J[3],O=J[7],L=J[11],F=J[15],q=Y*N-H*G,R=X*N-H*D,k=X*G-Y*D,V=W*N-H*U,A=W*G-Y*U,P=W*D-X*U;return Q*(O*q-L*R+F*k)-Z*(E*q-L*V+F*A)+K*(E*R-O*V+F*P)-$*(E*k-O*A+L*P)}determinantAffine(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(W*U-X*H)-Z*($*U-X*Y)+K*($*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],D=J[9],G=J[10],N=J[11],E=J[12],O=J[13],L=J[14],F=J[15],q=Q*X-Z*W,R=Q*Y-K*W,k=Q*H-$*W,V=Z*Y-K*X,A=Z*H-$*X,P=K*H-$*Y,_=U*O-D*E,I=U*L-G*E,C=U*F-N*E,p=D*L-G*O,j=D*F-N*O,y=G*F-N*L,m=q*y-R*j+k*p+V*C-A*I+P*_;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/m;return J[0]=(X*y-Y*j+H*p)*T,J[1]=(K*j-Z*y-$*p)*T,J[2]=(O*P-L*A+F*V)*T,J[3]=(G*A-D*P-N*V)*T,J[4]=(Y*C-W*y-H*I)*T,J[5]=(Q*y-K*C+$*I)*T,J[6]=(L*k-E*P-F*R)*T,J[7]=(U*P-G*k+N*R)*T,J[8]=(W*j-X*C+H*_)*T,J[9]=(Z*C-Q*j-$*_)*T,J[10]=(E*A-O*k+F*q)*T,J[11]=(D*k-U*A-N*q)*T,J[12]=(X*I-W*p-Y*_)*T,J[13]=(Q*p-Z*I+K*_)*T,J[14]=(O*R-E*V-L*q)*T,J[15]=(U*V-D*R+G*q)*T,this}scale(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z;return Q[0]*=Z,Q[4]*=K,Q[8]*=$,Q[1]*=Z,Q[5]*=K,Q[9]*=$,Q[2]*=Z,Q[6]*=K,Q[10]*=$,Q[3]*=Z,Q[7]*=K,Q[11]*=$,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,K))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=1-Z,W=J.x,X=J.y,Y=J.z,H=$*W,U=$*X;return this.set(H*W+Z,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,U*X+Z,U*Y-K*W,0,H*Y-K*X,U*Y+K*W,$*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,K,$,W){return this.set(1,Z,$,0,J,1,W,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,Z){let K=this.elements,$=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=$+$,U=W+W,D=X+X,G=$*H,N=$*U,E=$*D,O=W*U,L=W*D,F=X*D,q=Y*H,R=Y*U,k=Y*D,V=Z.x,A=Z.y,P=Z.z;return K[0]=(1-(O+F))*V,K[1]=(N+k)*V,K[2]=(E-R)*V,K[3]=0,K[4]=(N-k)*A,K[5]=(1-(G+F))*A,K[6]=(L+q)*A,K[7]=0,K[8]=(E+R)*P,K[9]=(L-q)*P,K[10]=(1-(G+O))*P,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,Z){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let $=this.determinantAffine();if($===0)return Z.set(1,1,1),Q.identity(),this;let W=W6.set(K[0],K[1],K[2]).length(),X=W6.set(K[4],K[5],K[6]).length(),Y=W6.set(K[8],K[9],K[10]).length();if($<0)W=-W;I9.copy(this);let H=1/W,U=1/X,D=1/Y;return I9.elements[0]*=H,I9.elements[1]*=H,I9.elements[2]*=H,I9.elements[4]*=U,I9.elements[5]*=U,I9.elements[6]*=U,I9.elements[8]*=D,I9.elements[9]*=D,I9.elements[10]*=D,Q.setFromRotationMatrix(I9),Z.x=W,Z.y=X,Z.z=Y,this}makePerspective(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,U=2*$/(Q-J),D=2*$/(Z-K),G=(Q+J)/(Q-J),N=(Z+K)/(Z-K),E,O;if(Y)E=$/(W-$),O=W*$/(W-$);else if(X===2000)E=-(W+$)/(W-$),O=-2*W*$/(W-$);else if(X===2001)E=-W/(W-$),O=-W*$/(W-$);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=G,H[12]=0,H[1]=0,H[5]=D,H[9]=N,H[13]=0,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),D=2/(Z-K),G=-(Q+J)/(Q-J),N=-(Z+K)/(Z-K),E,O;if(Y)E=1/(W-$),O=W/(W-$);else if(X===2000)E=-2/(W-$),O=-(W+$)/(W-$);else if(X===2001)E=-1/(W-$),O=-$/(W-$);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=G,H[1]=0,H[5]=D,H[9]=0,H[13]=N,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<16;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var W6=new x,I9=new M8,uH=new x(0,0,0),lH=new x(1,1,1),qJ=new x,S7=new x,Z9=new x,MW=new M8,LW=new r8;class y9{constructor(J=0,Q=0,Z=0,K=y9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,K=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let K=J.elements,$=K[0],W=K[4],X=K[8],Y=K[1],H=K[5],U=K[9],D=K[2],G=K[6],N=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(p0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-W,$);else this._x=Math.atan2(G,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-p0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,N),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-D,$),this._z=0;break;case"ZXY":if(this._x=Math.asin(p0(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-D,N),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,$);break;case"ZYX":if(this._y=Math.asin(-p0(D,-1,1)),Math.abs(D)<0.9999999)this._x=Math.atan2(G,N),this._z=Math.atan2(Y,$);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(p0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-D,$);else this._x=0,this._y=Math.atan2(X,N);break;case"XZY":if(this._z=Math.asin(-p0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(G,H),this._y=Math.atan2(X,$);else this._x=Math.atan2(-U,N),this._y=0;break;default:y0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return MW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(MW,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return LW.setFromEuler(this),this.setFromQuaternion(LW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}y9.DEFAULT_ORDER="XYZ";class qQ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var cH=0,IW=new x,X6=new r8,t9=new M8,j7=new x,s6=new x,nH=new x,sH=new r8,VW=new x(1,0,0),BW=new x(0,1,0),CW=new x(0,0,1),AW={type:"added"},iH={type:"removed"},Y6={type:"childadded",child:null},FZ={type:"childremoved",child:null};class i8 extends g9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:cH++}),this.uuid=KJ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i8.DEFAULT_UP.clone();let J=new x,Q=new y9,Z=new r8,K=new x(1,1,1);function $(){Z.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange($),Z._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new M8},normalMatrix:{value:new g0}}),this.matrix=new M8,this.matrixWorld=new M8,this.matrixAutoUpdate=i8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qQ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return X6.setFromAxisAngle(J,Q),this.quaternion.multiply(X6),this}rotateOnWorldAxis(J,Q){return X6.setFromAxisAngle(J,Q),this.quaternion.premultiply(X6),this}rotateX(J){return this.rotateOnAxis(VW,J)}rotateY(J){return this.rotateOnAxis(BW,J)}rotateZ(J){return this.rotateOnAxis(CW,J)}translateOnAxis(J,Q){return IW.copy(J).applyQuaternion(this.quaternion),this.position.add(IW.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(VW,J)}translateY(J){return this.translateOnAxis(BW,J)}translateZ(J){return this.translateOnAxis(CW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(t9.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)j7.copy(J);else j7.set(J,Q,Z);let K=this.parent;if(this.updateWorldMatrix(!0,!1),s6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)t9.lookAt(s6,j7,this.up);else t9.lookAt(j7,s6,this.up);if(this.quaternion.setFromRotationMatrix(t9),K)t9.extractRotation(K.matrixWorld),X6.setFromRotationMatrix(t9),this.quaternion.premultiply(X6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return f0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(AW),Y6.child=J,this.dispatchEvent(Y6),Y6.child=null;else f0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(iH),FZ.child=J,this.dispatchEvent(FZ),FZ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),t9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),t9.multiply(J.parent.matrixWorld);return J.applyMatrix4(t9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(AW),Y6.child=J,this.dispatchEvent(Y6),Y6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,K=this.children.length;Z<K;Z++){let W=this.children[Z].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let K=this.children;for(let $=0,W=K.length;$<W;$++)K[$].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s6,J,nH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s6,sH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:Z,z:K}=J,$=this.matrix.elements;$[12]+=Q-$[0]*Q-$[4]*Z-$[8]*K,$[13]+=Z-$[1]*Q-$[5]*Z-$[9]*K,$[14]+=K-$[2]*Q-$[6]*Z-$[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q,Z=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Z){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Z=!0}if(Q===!0){let $=this.children;for(let W=0,X=$.length;W<X;W++)$[W].updateWorldMatrix(!1,!0,Z)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,K.name=this.name,K.castShadow=this.castShadow,K.receiveShadow=this.receiveShadow,K.visible=this.visible,K.frustumCulled=this.frustumCulled,K.renderOrder=this.renderOrder,K.static=this.static,K.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function $(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=$(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let D=Y[H];$(J.shapes,D)}else $(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)$(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push($(J.materials,this.material[Y]));K.material=X}else K.material=$(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push($(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),U=W(J.images),D=W(J.shapes),G=W(J.skeletons),N=W(J.animations),E=W(J.nodes);if(X.length>0)Z.geometries=X;if(Y.length>0)Z.materials=Y;if(H.length>0)Z.textures=H;if(U.length>0)Z.images=U;if(D.length>0)Z.shapes=D;if(G.length>0)Z.skeletons=G;if(N.length>0)Z.animations=N;if(E.length>0)Z.nodes=E}return Z.object=K,Z;function W(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let K=J.children[Z];this.add(K.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}i8.DEFAULT_UP=new x(0,1,0);i8.DEFAULT_MATRIX_AUTO_UPDATE=!0;i8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class MJ extends i8{constructor(){super();this.isGroup=!0,this.type="Group"}}var oH={type:"move"};class H7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new MJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new MJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new MJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let K=null,$=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let L=Q.getJointPose(O,Z),F=this._getHandJoint(H,O);if(L!==null)F.matrix.fromArray(L.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=L.radius;F.visible=L!==null}let U=H.joints["index-finger-tip"],D=H.joints["thumb-tip"],G=U.position.distanceTo(D.position),N=0.02,E=0.005;if(H.inputState.pinching&&G>N+E)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&G<=N-E)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if($=Q.getPose(J.gripSpace,Z),$!==null){if(Y.matrix.fromArray($.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,$.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy($.linearVelocity);else Y.hasLinearVelocity=!1;if($.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy($.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,Z),K===null&&$!==null)K=$;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(oH)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=$!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new MJ;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var bX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},EJ={h:0,s:0,l:0},v7={h:0,s:0,l:0};function OZ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class e0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,o0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,K=o0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,o0.colorSpaceToWorking(this,K),this}setHSL(J,Q,Z,K=o0.workingColorSpace){if(J=SK(J,1),Q=p0(Q,0,1),Z=p0(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let $=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,W=2*Z-$;this.r=OZ(W,$,J+0.3333333333333333),this.g=OZ(W,$,J),this.b=OZ(W,$,J-0.3333333333333333)}return o0.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function Z($){if($===void 0)return;if(parseFloat($)<1)y0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let $,W=K[1],X=K[2];switch(W){case"rgb":case"rgba":if($=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(255,parseInt($[1],10))/255,Math.min(255,parseInt($[2],10))/255,Math.min(255,parseInt($[3],10))/255,Q);if($=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(100,parseInt($[1],10))/100,Math.min(100,parseInt($[2],10))/100,Math.min(100,parseInt($[3],10))/100,Q);break;case"hsl":case"hsla":if($=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setHSL(parseFloat($[1])/360,parseFloat($[2])/100,parseFloat($[3])/100,Q);break;default:y0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let $=K[1],W=$.length;if(W===3)return this.setRGB(parseInt($.charAt(0),16)/15,parseInt($.charAt(1),16)/15,parseInt($.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt($,16),Q);else y0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=bX[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else y0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=$J(J.r),this.g=$J(J.g),this.b=$J(J.b),this}copyLinearToSRGB(J){return this.r=L6(J.r),this.g=L6(J.g),this.b=L6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return o0.workingToColorSpace(h8.copy(this),J),Math.round(p0(h8.r*255,0,255))*65536+Math.round(p0(h8.g*255,0,255))*256+Math.round(p0(h8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=o0.workingColorSpace){o0.workingToColorSpace(h8.copy(this),Q);let{r:Z,g:K,b:$}=h8,W=Math.max(Z,K,$),X=Math.min(Z,K,$),Y,H,U=(X+W)/2;if(X===W)Y=0,H=0;else{let D=W-X;switch(H=U<=0.5?D/(W+X):D/(2-W-X),W){case Z:Y=(K-$)/D+(K<$?6:0);break;case K:Y=($-Z)/D+2;break;case $:Y=(Z-K)/D+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=o0.workingColorSpace){return o0.workingToColorSpace(h8.copy(this),Q),J.r=h8.r,J.g=h8.g,J.b=h8.b,J}getStyle(J="srgb"){o0.workingToColorSpace(h8.copy(this),J);let{r:Q,g:Z,b:K}=h8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round(K*255)})`}offsetHSL(J,Q,Z){return this.getHSL(EJ),this.setHSL(EJ.h+J,EJ.s+Q,EJ.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(EJ),J.getHSL(v7);let Z=t6(EJ.h,v7.h,Q),K=t6(EJ.s,v7.s,Q),$=t6(EJ.l,v7.l,Q);return this.setHSL(Z,K,$),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,K=this.b,$=J.elements;return this.r=$[0]*Q+$[3]*Z+$[6]*K,this.g=$[1]*Q+$[4]*Z+$[7]*K,this.b=$[2]*Q+$[5]*Z+$[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var h8=new e0;e0.NAMES=bX;class U7{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new e0(J),this.near=Q,this.far=Z}clone(){return new U7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class EQ extends i8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new y9,this.environmentIntensity=1,this.environmentRotation=new y9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var V9=new x,e9=new x,RZ=new x,JJ=new x,H6=new x,U6=new x,zW=new x,MZ=new x,LZ=new x,IZ=new x,VZ=new Y8,BZ=new Y8,CZ=new Y8;class D9{constructor(J=new x,Q=new x,Z=new x){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,K){K.subVectors(Z,Q),V9.subVectors(J,Q),K.cross(V9);let $=K.lengthSq();if($>0)return K.multiplyScalar(1/Math.sqrt($));return K.set(0,0,0)}static getBarycoord(J,Q,Z,K,$){V9.subVectors(K,Q),e9.subVectors(Z,Q),RZ.subVectors(J,Q);let W=V9.dot(V9),X=V9.dot(e9),Y=V9.dot(RZ),H=e9.dot(e9),U=e9.dot(RZ),D=W*H-X*X;if(D===0)return $.set(0,0,0),null;let G=1/D,N=(H*Y-X*U)*G,E=(W*U-X*Y)*G;return $.set(1-N-E,E,N)}static containsPoint(J,Q,Z,K){if(this.getBarycoord(J,Q,Z,K,JJ)===null)return!1;return JJ.x>=0&&JJ.y>=0&&JJ.x+JJ.y<=1}static getInterpolation(J,Q,Z,K,$,W,X,Y){if(this.getBarycoord(J,Q,Z,K,JJ)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector($,JJ.x),Y.addScaledVector(W,JJ.y),Y.addScaledVector(X,JJ.z),Y}static getInterpolatedAttribute(J,Q,Z,K,$,W){return VZ.setScalar(0),BZ.setScalar(0),CZ.setScalar(0),VZ.fromBufferAttribute(J,Q),BZ.fromBufferAttribute(J,Z),CZ.fromBufferAttribute(J,K),W.setScalar(0),W.addScaledVector(VZ,$.x),W.addScaledVector(BZ,$.y),W.addScaledVector(CZ,$.z),W}static isFrontFacing(J,Q,Z,K){return V9.subVectors(Z,Q),e9.subVectors(J,Q),V9.cross(e9).dot(K)<0}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,K){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,Z,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return V9.subVectors(this.c,this.b),e9.subVectors(this.a,this.b),V9.cross(e9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return D9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return D9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,K,$){return D9.getInterpolation(J,this.a,this.b,this.c,Q,Z,K,$)}containsPoint(J){return D9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return D9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,K=this.b,$=this.c,W,X;H6.subVectors(K,Z),U6.subVectors($,Z),MZ.subVectors(J,Z);let Y=H6.dot(MZ),H=U6.dot(MZ);if(Y<=0&&H<=0)return Q.copy(Z);LZ.subVectors(J,K);let U=H6.dot(LZ),D=U6.dot(LZ);if(U>=0&&D<=U)return Q.copy(K);let G=Y*D-U*H;if(G<=0&&Y>=0&&U<=0)return W=Y/(Y-U),Q.copy(Z).addScaledVector(H6,W);IZ.subVectors(J,$);let N=H6.dot(IZ),E=U6.dot(IZ);if(E>=0&&N<=E)return Q.copy($);let O=N*H-Y*E;if(O<=0&&H>=0&&E<=0)return X=H/(H-E),Q.copy(Z).addScaledVector(U6,X);let L=U*E-N*D;if(L<=0&&D-U>=0&&N-E>=0)return zW.subVectors($,K),X=(D-U)/(D-U+(N-E)),Q.copy(K).addScaledVector(zW,X);let F=1/(L+O+G);return W=O*F,X=G*F,Q.copy(Z).addScaledVector(H6,W).addScaledVector(U6,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class E9{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(B9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(B9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=B9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let $=Z.getAttribute("position");if(Q===!0&&$!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=$.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,B9);else B9.fromBufferAttribute($,W);B9.applyMatrix4(J.matrixWorld),this.expandByPoint(B9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();y7.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();y7.copy(Z.boundingBox)}y7.applyMatrix4(J.matrixWorld),this.union(y7)}}let K=J.children;for(let $=0,W=K.length;$<W;$++)this.expandByObject(K[$],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,B9),B9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(i6),b7.subVectors(this.max,i6),G6.subVectors(J.a,i6),N6.subVectors(J.b,i6),D6.subVectors(J.c,i6),FJ.subVectors(N6,G6),OJ.subVectors(D6,N6),TJ.subVectors(G6,D6);let Q=[0,-FJ.z,FJ.y,0,-OJ.z,OJ.y,0,-TJ.z,TJ.y,FJ.z,0,-FJ.x,OJ.z,0,-OJ.x,TJ.z,0,-TJ.x,-FJ.y,FJ.x,0,-OJ.y,OJ.x,0,-TJ.y,TJ.x,0];if(!AZ(Q,G6,N6,D6,b7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!AZ(Q,G6,N6,D6,b7))return!1;return f7.crossVectors(FJ,OJ),Q=[f7.x,f7.y,f7.z],AZ(Q,G6,N6,D6,b7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,B9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(B9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return QJ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),QJ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),QJ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),QJ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),QJ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),QJ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),QJ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),QJ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(QJ),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var QJ=[new x,new x,new x,new x,new x,new x,new x,new x],B9=new x,y7=new E9,G6=new x,N6=new x,D6=new x,FJ=new x,OJ=new x,TJ=new x,i6=new x,b7=new x,f7=new x,wJ=new x;function AZ(J,Q,Z,K,$){for(let W=0,X=J.length-3;W<=X;W+=3){wJ.fromArray(J,W);let Y=$.x*Math.abs(wJ.x)+$.y*Math.abs(wJ.y)+$.z*Math.abs(wJ.z),H=Q.dot(wJ),U=Z.dot(wJ),D=K.dot(wJ);if(Math.max(-Math.max(H,U,D),Math.min(H,U,D))>Y)return!1}return!0}var C8=new x,h7=new x0,aH=0;class q9 extends g9{constructor(J,Q,Z=!1){super();if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let K=0,$=this.itemSize;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)h7.fromBufferAttribute(this,Q),h7.applyMatrix3(J),this.setXY(Q,h7.x,h7.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)C8.fromBufferAttribute(this,Q),C8.applyMatrix3(J),this.setXYZ(Q,C8.x,C8.y,C8.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)C8.fromBufferAttribute(this,Q),C8.applyMatrix4(J),this.setXYZ(Q,C8.x,C8.y,C8.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)C8.fromBufferAttribute(this,Q),C8.applyNormalMatrix(J),this.setXYZ(Q,C8.x,C8.y,C8.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)C8.fromBufferAttribute(this,Q),C8.transformDirection(J),this.setXYZ(Q,C8.x,C8.y,C8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=C9(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=W8(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=C9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=W8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=C9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=W8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=C9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=W8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=C9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=W8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=W8(Q,this.array),Z=W8(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J*=this.itemSize,this.normalized)Q=W8(Q,this.array),Z=W8(Z,this.array),K=W8(K,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J*=this.itemSize,this.normalized)Q=W8(Q,this.array),Z=W8(Z,this.array),K=W8(K,this.array),$=W8($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this.array[J+3]=$,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class FQ extends q9{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class OQ extends q9{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class c8 extends q9{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var rH=new E9,o6=new x,zZ=new x;class XJ{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else rH.setFromPoints(J).getCenter(Z);let K=0;for(let $=0,W=J.length;$<W;$++)K=Math.max(K,Z.distanceToSquared(J[$]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;o6.subVectors(J,this.center);let Q=o6.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),K=(Z-this.radius)*0.5;this.center.addScaledVector(o6,K/Z),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else zZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(o6.copy(J.center).add(zZ)),this.expandByPoint(o6.copy(J.center).sub(zZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var tH=0,G9=new M8,PZ=new i8,q6=new x,K9=new E9,a6=new E9,T8=new x;class F9 extends g9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tH++}),this.uuid=KJ(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((BH(J))?OQ:FQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let $=new g0().getNormalMatrix(J);Z.applyNormalMatrix($),Z.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return G9.makeRotationFromQuaternion(J),this.applyMatrix4(G9),this}rotateX(J){return G9.makeRotationX(J),this.applyMatrix4(G9),this}rotateY(J){return G9.makeRotationY(J),this.applyMatrix4(G9),this}rotateZ(J){return G9.makeRotationZ(J),this.applyMatrix4(G9),this}translate(J,Q,Z){return G9.makeTranslation(J,Q,Z),this.applyMatrix4(G9),this}scale(J,Q,Z){return G9.makeScale(J,Q,Z),this.applyMatrix4(G9),this}lookAt(J){return PZ.lookAt(J),PZ.updateMatrix(),this.applyMatrix4(PZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(q6).negate(),this.translate(q6.x,q6.y,q6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.push(W.x,W.y,W.z||0)}this.setAttribute("position",new c8(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let K=0;K<Z;K++){let $=J[K];Q.setXYZ(K,$.x,$.y,$.z||0)}if(J.length>Q.count)y0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new E9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let $=Q[Z];if(K9.setFromBufferAttribute($),this.morphTargetsRelative)T8.addVectors(this.boundingBox.min,K9.min),this.boundingBox.expandByPoint(T8),T8.addVectors(this.boundingBox.max,K9.max),this.boundingBox.expandByPoint(T8);else this.boundingBox.expandByPoint(K9.min),this.boundingBox.expandByPoint(K9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))f0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new XJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let Z=this.boundingSphere.center;if(K9.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$];if(a6.setFromBufferAttribute(X),this.morphTargetsRelative)T8.addVectors(K9.min,a6.min),K9.expandByPoint(T8),T8.addVectors(K9.max,a6.max),K9.expandByPoint(T8);else K9.expandByPoint(a6.min),K9.expandByPoint(a6.max)}K9.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)T8.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(T8));if(Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(T8.fromBufferAttribute(X,H),Y)q6.fromBufferAttribute(J,H),T8.add(q6);K=Math.max(K,Z.distanceToSquared(T8))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))f0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){f0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:K,uv:$}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==Z.count)W=new q9(new Float32Array(4*Z.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<Z.count;_++)X[_]=new x,Y[_]=new x;let H=new x,U=new x,D=new x,G=new x0,N=new x0,E=new x0,O=new x,L=new x;function F(_,I,C){H.fromBufferAttribute(Z,_),U.fromBufferAttribute(Z,I),D.fromBufferAttribute(Z,C),G.fromBufferAttribute($,_),N.fromBufferAttribute($,I),E.fromBufferAttribute($,C),U.sub(H),D.sub(H),N.sub(G),E.sub(G);let p=1/(N.x*E.y-E.x*N.y);if(!isFinite(p))return;O.copy(U).multiplyScalar(E.y).addScaledVector(D,-N.y).multiplyScalar(p),L.copy(D).multiplyScalar(N.x).addScaledVector(U,-E.x).multiplyScalar(p),X[_].add(O),X[I].add(O),X[C].add(O),Y[_].add(L),Y[I].add(L),Y[C].add(L)}let q=this.groups;if(q.length===0)q=[{start:0,count:J.count}];for(let _=0,I=q.length;_<I;++_){let C=q[_],p=C.start,j=C.count;for(let y=p,m=p+j;y<m;y+=3)F(J.getX(y+0),J.getX(y+1),J.getX(y+2))}let R=new x,k=new x,V=new x,A=new x;function P(_){V.fromBufferAttribute(K,_),A.copy(V);let I=X[_];R.copy(I),R.sub(V.multiplyScalar(V.dot(I))).normalize(),k.crossVectors(A,I);let p=k.dot(Y[_])<0?-1:1;W.setXYZW(_,R.x,R.y,R.z,p)}for(let _=0,I=q.length;_<I;++_){let C=q[_],p=C.start,j=C.count;for(let y=p,m=p+j;y<m;y+=3)P(J.getX(y+0)),P(J.getX(y+1)),P(J.getX(y+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0||Z.count!==Q.count)Z=new q9(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let G=0,N=Z.count;G<N;G++)Z.setXYZ(G,0,0,0);let K=new x,$=new x,W=new x,X=new x,Y=new x,H=new x,U=new x,D=new x;if(J)for(let G=0,N=J.count;G<N;G+=3){let E=J.getX(G+0),O=J.getX(G+1),L=J.getX(G+2);K.fromBufferAttribute(Q,E),$.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,L),U.subVectors(W,$),D.subVectors(K,$),U.cross(D),X.fromBufferAttribute(Z,E),Y.fromBufferAttribute(Z,O),H.fromBufferAttribute(Z,L),X.add(U),Y.add(U),H.add(U),Z.setXYZ(E,X.x,X.y,X.z),Z.setXYZ(O,Y.x,Y.y,Y.z),Z.setXYZ(L,H.x,H.y,H.z)}else for(let G=0,N=Q.count;G<N;G+=3)K.fromBufferAttribute(Q,G+0),$.fromBufferAttribute(Q,G+1),W.fromBufferAttribute(Q,G+2),U.subVectors(W,$),D.subVectors(K,$),U.cross(D),Z.setXYZ(G+0,U.x,U.y,U.z),Z.setXYZ(G+1,U.x,U.y,U.z),Z.setXYZ(G+2,U.x,U.y,U.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)T8.fromBufferAttribute(J,Q),T8.normalize(),J.setXYZ(Q,T8.x,T8.y,T8.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:D}=X,G=new H.constructor(Y.length*U),N=0,E=0;for(let O=0,L=Y.length;O<L;O++){if(X.isInterleavedBufferAttribute)N=Y[O]*X.data.stride+X.offset;else N=Y[O]*U;for(let F=0;F<U;F++)G[E++]=H[N++]}return new q9(G,U,D)}if(this.index===null)return y0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new F9,Z=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,Z);Q.setAttribute(X,H)}let $=this.morphAttributes;for(let X in $){let Y=[],H=$[X];for(let U=0,D=H.length;U<D;U++){let G=H[U],N=J(G,Z);Y.push(N)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let H=Z[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},$=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let D=0,G=H.length;D<G;D++){let N=H[D];U.push(N.toJSON(J.data))}if(U.length>0)K[Y]=U,$=!0}if($)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let K=J.attributes;for(let H in K){let U=K[H];this.setAttribute(H,U.clone(Q))}let $=J.morphAttributes;for(let H in $){let U=[],D=$[H];for(let G=0,N=D.length;G<N;G++)U.push(D[G].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let D=W[H];this.addGroup(D.start,D.count,D.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bK{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=KJ()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let K=0,$=this.stride;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=KJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=KJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var u8=new x;class g8{constructor(J,Q,Z,K=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=K}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)u8.fromBufferAttribute(this,Q),u8.applyMatrix4(J),this.setXYZ(Q,u8.x,u8.y,u8.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)u8.fromBufferAttribute(this,Q),u8.applyNormalMatrix(J),this.setXYZ(Q,u8.x,u8.y,u8.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)u8.fromBufferAttribute(this,Q),u8.transformDirection(J),this.setXYZ(Q,u8.x,u8.y,u8.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=C9(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=W8(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=W8(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=W8(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=W8(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=W8(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=C9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=C9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=C9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=C9(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=W8(Q,this.array),Z=W8(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=W8(Q,this.array),Z=W8(Z,this.array),K=W8(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=W8(Q,this.array),Z=W8(Z,this.array),K=W8(K,this.array),$=W8($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this.data.array[J+3]=$,this}clone(J){if(J===void 0){J7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return new q9(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new g8(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){J7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var kZ=new x,eH=new x,JU=new g0;class N9{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,K){return this.normal.set(J,Q,Z),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let K=kZ.subVectors(Z,Q).cross(eH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,Z=!0){let K=J.delta(kZ),$=this.normal.dot(K);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(Z===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(K,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||JU.getNormalMatrix(J),K=this.coplanarPoint(kZ).applyMatrix4(J),$=this.normal.applyMatrix3(Z).normalize();return this.constant=-K.dot($),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var QU=0;class k6 extends g9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:QU++}),this.uuid=KJ(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new e0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){y0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){y0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set(Z);else if(K&&K.isVector2&&(Z&&Z.isVector2)||K&&K.isEuler&&(Z&&Z.isEuler)||K&&K.isVector3&&(Z&&Z.isVector3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,Z.blending=this.blending,Z.side=this.side,Z.shadowSide=this.shadowSide,Z.vertexColors=this.vertexColors,Z.opacity=this.opacity,Z.transparent=this.transparent,Z.blendSrc=this.blendSrc,Z.blendDst=this.blendDst,Z.blendEquation=this.blendEquation,Z.blendSrcAlpha=this.blendSrcAlpha,Z.blendDstAlpha=this.blendDstAlpha,Z.blendEquationAlpha=this.blendEquationAlpha,Z.blendColor=this.blendColor.getHex(),Z.blendAlpha=this.blendAlpha,Z.depthFunc=this.depthFunc,Z.depthTest=this.depthTest,Z.depthWrite=this.depthWrite,Z.colorWrite=this.colorWrite,Z.clipIntersection=this.clipIntersection,Z.clipShadows=this.clipShadows,Z.stencilWriteMask=this.stencilWriteMask,Z.stencilFunc=this.stencilFunc,Z.stencilRef=this.stencilRef,Z.stencilFuncMask=this.stencilFuncMask,Z.stencilFail=this.stencilFail,Z.stencilZFail=this.stencilZFail,Z.stencilZPass=this.stencilZPass,Z.stencilWrite=this.stencilWrite,Z.polygonOffset=this.polygonOffset,Z.polygonOffsetFactor=this.polygonOffsetFactor,Z.polygonOffsetUnits=this.polygonOffsetUnits,Z.dithering=this.dithering,Z.alphaTest=this.alphaTest,Z.alphaHash=this.alphaHash,Z.alphaToCoverage=this.alphaToCoverage,Z.premultipliedAlpha=this.premultipliedAlpha,Z.forceSinglePass=this.forceSinglePass,Z.allowOverride=this.allowOverride,Z.visible=this.visible,Z.toneMapped=this.toneMapped,Z.name=this.name,this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Z.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Z.clippingPlanes=this.clippingPlanes.map(($)=>$.toJSON());if(this.rotation!==void 0)Z.rotation=this.rotation;if(this.depthPacking!==void 0)Z.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Z.linewidth=this.linewidth;if(this.linecap!==void 0)Z.linecap=this.linecap;if(this.linejoin!==void 0)Z.linejoin=this.linejoin;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.wireframe!==void 0)Z.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Z.flatShading=this.flatShading;if(this.fog!==void 0)Z.fog=this.fog;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function K($){let W=[];for(let X in $){let Y=$[X];delete Y.metadata,W.push(Y)}return W}if(Q){let $=K(J.textures),W=K(J.images);if($.length>0)Z.textures=$;if(W.length>0)Z.images=W}return Z}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new e0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Z)=>new N9().fromJSON(Z));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Z=J.normalScale;if(Array.isArray(Z)===!1)Z=[Z,Z];this.normalScale=new x0().fromArray(Z)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new x0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let K=Q.length;Z=new Array(K);for(let $=0;$!==K;++$)Z[$]=Q[$].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var ZJ=new x,_Z=new x,x7=new x,g7=new x;class G7{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,ZJ)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=ZJ.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return ZJ.copy(this.origin).addScaledVector(this.direction,Q),ZJ.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,K){_Z.copy(J).add(Q).multiplyScalar(0.5),x7.copy(Q).sub(J).normalize(),g7.copy(this.origin).sub(_Z);let $=J.distanceTo(Q)*0.5,W=-this.direction.dot(x7),X=g7.dot(this.direction),Y=-g7.dot(x7),H=g7.lengthSq(),U=Math.abs(1-W*W),D,G,N,E;if(U>0)if(D=W*Y-X,G=W*X-Y,E=$*U,D>=0)if(G>=-E)if(G<=E){let O=1/U;D*=O,G*=O,N=D*(D+W*G+2*X)+G*(W*D+G+2*Y)+H}else G=$,D=Math.max(0,-(W*G+X)),N=-D*D+G*(G+2*Y)+H;else G=-$,D=Math.max(0,-(W*G+X)),N=-D*D+G*(G+2*Y)+H;else if(G<=-E)D=Math.max(0,-(-W*$+X)),G=D>0?-$:Math.min(Math.max(-$,-Y),$),N=-D*D+G*(G+2*Y)+H;else if(G<=E)D=0,G=Math.min(Math.max(-$,-Y),$),N=G*(G+2*Y)+H;else D=Math.max(0,-(W*$+X)),G=D>0?$:Math.min(Math.max(-$,-Y),$),N=-D*D+G*(G+2*Y)+H;else G=W>0?-$:$,D=Math.max(0,-(W*G+X)),N=-D*D+G*(G+2*Y)+H;if(Z)Z.copy(this.origin).addScaledVector(this.direction,D);if(K)K.copy(_Z).addScaledVector(x7,G);return N}intersectSphere(J,Q){if(J.radius<0)return null;ZJ.subVectors(J.center,this.origin);let Z=ZJ.dot(this.direction),K=ZJ.dot(ZJ)-Z*Z,$=J.radius*J.radius;if(K>$)return null;let W=Math.sqrt($-K),X=Z-W,Y=Z+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,K,$,W,X,Y,H=1/this.direction.x,U=1/this.direction.y,D=1/this.direction.z,G=this.origin;if(H>=0)Z=(J.min.x-G.x)*H,K=(J.max.x-G.x)*H;else Z=(J.max.x-G.x)*H,K=(J.min.x-G.x)*H;if(U>=0)$=(J.min.y-G.y)*U,W=(J.max.y-G.y)*U;else $=(J.max.y-G.y)*U,W=(J.min.y-G.y)*U;if(Z>W||$>K)return null;if($>Z||isNaN(Z))Z=$;if(W<K||isNaN(K))K=W;if(D>=0)X=(J.min.z-G.z)*D,Y=(J.max.z-G.z)*D;else X=(J.max.z-G.z)*D,Y=(J.min.z-G.z)*D;if(Z>Y||X>K)return null;if(X>Z||Z!==Z)Z=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at(Z>=0?Z:K,Q)}intersectsBox(J){return this.intersectBox(J,ZJ)!==null}intersectTriangle(J,Q,Z,K,$){let W=this.origin,X=this.direction,Y=X.x,H=X.y,U=X.z,D=J.x-W.x,G=J.y-W.y,N=J.z-W.z,E=Q.x-W.x,O=Q.y-W.y,L=Q.z-W.z,F=Z.x-W.x,q=Z.y-W.y,R=Z.z-W.z,k=Math.abs(Y),V=Math.abs(H),A=Math.abs(U),P,_,I,C,p,j,y,m,T,w,n,u;if(k>=V&&k>=A)if(I=Y,j=D,T=E,u=F,Y>=0)P=H,_=U,C=G,p=N,y=O,m=L,w=q,n=R;else P=U,_=H,C=N,p=G,y=L,m=O,w=R,n=q;else if(V>=A)if(I=H,j=G,T=O,u=q,H>=0)P=U,_=Y,C=N,p=D,y=L,m=E,w=R,n=F;else P=Y,_=U,C=D,p=N,y=E,m=L,w=F,n=R;else if(I=U,j=N,T=L,u=R,U>=0)P=Y,_=H,C=D,p=G,y=E,m=O,w=F,n=q;else P=H,_=Y,C=G,p=D,y=O,m=E,w=q,n=F;if(I===0)return null;let $0=P/I,i=_/I,Z0=1/I,X0=C-$0*j,S0=p-i*j,T0=y-$0*T,n0=m-i*T,u0=w-$0*u,S=n-i*u,g=u0*n0-S*T0,d=X0*S-S0*u0,a=T0*S0-n0*X0;if(K){if(g<0||d<0||a<0)return null}else if((g<0||d<0||a<0)&&(g>0||d>0||a>0))return null;let Q0=g+d+a;if(Q0===0)return null;let r=Z0*(g*j+d*T+a*u);if(Q0>0?r<0:r>0)return null;return this.at(r/Q0,$)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class RQ extends k6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new e0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new y9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var PW=new M8,SJ=new G7,p7=new XJ,kW=new x,m7=new x,d7=new x,u7=new x,TZ=new x,l7=new x,_W=new x,c7=new x;class W9 extends i8{constructor(J=new F9,Q=new RQ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let $=0,W=K.length;$<W;$++){let X=K[$].name||String($);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=$}}}}getVertexPosition(J,Q){let Z=this.geometry,K=Z.attributes.position,$=Z.morphAttributes.position,W=Z.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if($&&X){l7.set(0,0,0);for(let Y=0,H=$.length;Y<H;Y++){let U=X[Y],D=$[Y];if(U===0)continue;if(TZ.fromBufferAttribute(D,J),W)l7.addScaledVector(TZ,U);else l7.addScaledVector(TZ.sub(Q),U)}Q.add(l7)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.material,$=this.matrixWorld;if(K===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(p7.copy(Z.boundingSphere),p7.applyMatrix4($),SJ.copy(J.ray).recast(J.near),p7.containsPoint(SJ.origin)===!1){if(SJ.intersectSphere(p7,kW)===null)return;if(SJ.origin.distanceToSquared(kW)>(J.far-J.near)**2)return}if(PW.copy($).invert(),SJ.copy(J.ray).applyMatrix4(PW),Z.boundingBox!==null){if(SJ.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,SJ)}_computeIntersections(J,Q,Z){let K,$=this.geometry,W=this.material,X=$.index,Y=$.attributes.position,H=$.attributes.uv,U=$.attributes.uv1,D=$.attributes.normal,G=$.groups,N=$.drawRange;if(X!==null)if(Array.isArray(W))for(let E=0,O=G.length;E<O;E++){let L=G[E],F=W[L.materialIndex],q=Math.max(L.start,N.start),R=Math.min(X.count,Math.min(L.start+L.count,N.start+N.count));for(let k=q,V=R;k<V;k+=3){let A=X.getX(k),P=X.getX(k+1),_=X.getX(k+2);if(K=n7(this,F,J,Z,H,U,D,A,P,_),K)K.faceIndex=Math.floor(k/3),K.face.materialIndex=L.materialIndex,Q.push(K)}}else{let E=Math.max(0,N.start),O=Math.min(X.count,N.start+N.count);for(let L=E,F=O;L<F;L+=3){let q=X.getX(L),R=X.getX(L+1),k=X.getX(L+2);if(K=n7(this,W,J,Z,H,U,D,q,R,k),K)K.faceIndex=Math.floor(L/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(W))for(let E=0,O=G.length;E<O;E++){let L=G[E],F=W[L.materialIndex],q=Math.max(L.start,N.start),R=Math.min(Y.count,Math.min(L.start+L.count,N.start+N.count));for(let k=q,V=R;k<V;k+=3){let A=k,P=k+1,_=k+2;if(K=n7(this,F,J,Z,H,U,D,A,P,_),K)K.faceIndex=Math.floor(k/3),K.face.materialIndex=L.materialIndex,Q.push(K)}}else{let E=Math.max(0,N.start),O=Math.min(Y.count,N.start+N.count);for(let L=E,F=O;L<F;L+=3){let q=L,R=L+1,k=L+2;if(K=n7(this,W,J,Z,H,U,D,q,R,k),K)K.faceIndex=Math.floor(L/3),Q.push(K)}}}}function ZU(J,Q,Z,K,$,W,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,W,$,!0,Y);else H=K.intersectTriangle($,W,X,Q.side===0,Y);if(H===null)return null;c7.copy(Y),c7.applyMatrix4(J.matrixWorld);let U=Z.ray.origin.distanceTo(c7);if(U<Z.near||U>Z.far)return null;return{distance:U,point:c7.clone(),object:J}}function n7(J,Q,Z,K,$,W,X,Y,H,U){J.getVertexPosition(Y,m7),J.getVertexPosition(H,d7),J.getVertexPosition(U,u7);let D=ZU(J,Q,Z,K,m7,d7,u7,_W);if(D){let G=new x;if(D9.getBarycoord(_W,m7,d7,u7,G),$)D.uv=D9.getInterpolatedAttribute($,Y,H,U,G,new x0);if(W)D.uv1=D9.getInterpolatedAttribute(W,Y,H,U,G,new x0);if(X){if(D.normal=D9.getInterpolatedAttribute(X,Y,H,U,G,new x),D.normal.dot(K.direction)>0)D.normal.multiplyScalar(-1)}let N={a:Y,b:H,c:U,normal:new x,materialIndex:0};D9.getNormal(m7,d7,u7,N.normal),D.face=N,D.barycoord=G}return D}class fK extends x8{constructor(J=null,Q=1,Z=1,K,$,W,X,Y,H=1003,U=1003,D,G){super(null,W,X,Y,H,U,K,$,D,G);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var jJ=new XJ,KU=new x0(0.5,0.5),s7=new x;class MQ{constructor(J=new N9,Q=new N9,Z=new N9,K=new N9,$=new N9,W=new N9){this.planes=[J,Q,Z,K,$,W]}set(J,Q,Z,K,$,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy(Z),X[3].copy(K),X[4].copy($),X[5].copy(W),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let K=this.planes,$=J.elements,W=$[0],X=$[1],Y=$[2],H=$[3],U=$[4],D=$[5],G=$[6],N=$[7],E=$[8],O=$[9],L=$[10],F=$[11],q=$[12],R=$[13],k=$[14],V=$[15];if(K[0].setComponents(H-W,N-U,F-E,V-q).normalize(),K[1].setComponents(H+W,N+U,F+E,V+q).normalize(),K[2].setComponents(H+X,N+D,F+O,V+R).normalize(),K[3].setComponents(H-X,N-D,F-O,V-R).normalize(),Z)K[4].setComponents(Y,G,L,k).normalize(),K[5].setComponents(H-Y,N-G,F-L,V-k).normalize();else if(K[4].setComponents(H-Y,N-G,F-L,V-k).normalize(),Q===2000)K[5].setComponents(H+Y,N+G,F+L,V+k).normalize();else if(Q===2001)K[5].setComponents(Y,G,L,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();jJ.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();jJ.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(jJ)}intersectsSprite(J){jJ.center.set(0,0,0);let Q=KU.distanceTo(J.center);return jJ.radius=0.7071067811865476+Q,jJ.applyMatrix4(J.matrixWorld),this.intersectsSphere(jJ)}intersectsSphere(J){let Q=this.planes,Z=J.center,K=-J.radius;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(Z)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let K=Q[Z];if(s7.x=K.normal.x>0?J.max.x:J.min.x,s7.y=K.normal.y>0?J.max.y:J.min.y,s7.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(s7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class LQ extends x8{constructor(J=[],Q=301,Z,K,$,W,X,Y,H,U){super(J,Q,Z,K,$,W,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class pJ extends x8{constructor(J,Q,Z=1014,K,$,W,X=1003,Y=1003,H,U=1026,D=1){if(U!==1026&&U!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let G={width:J,height:Q,depth:D};super(G,K,$,W,X,Y,U,Z,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new Y7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class hK extends pJ{constructor(J,Q=1014,Z=301,K,$,W=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},D=[U,U,U,U,U,U];super(J,J,Q,Z,K,$,W,X,Y,H);this.image=D,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class IQ extends x8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class _6 extends F9{constructor(J=1,Q=1,Z=1,K=1,$=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:K,heightSegments:$,depthSegments:W};let X=this;K=Math.floor(K),$=Math.floor($),W=Math.floor(W);let Y=[],H=[],U=[],D=[],G=0,N=0;E("z","y","x",-1,-1,Z,Q,J,W,$,0),E("z","y","x",1,-1,Z,Q,-J,W,$,1),E("x","z","y",1,1,J,Z,Q,K,W,2),E("x","z","y",1,-1,J,Z,-Q,K,W,3),E("x","y","z",1,-1,J,Q,Z,K,$,4),E("x","y","z",-1,-1,J,Q,-Z,K,$,5),this.setIndex(Y),this.setAttribute("position",new c8(H,3)),this.setAttribute("normal",new c8(U,3)),this.setAttribute("uv",new c8(D,2));function E(O,L,F,q,R,k,V,A,P,_,I){let C=k/P,p=V/_,j=k/2,y=V/2,m=A/2,T=P+1,w=_+1,n=0,u=0,$0=new x;for(let i=0;i<w;i++){let Z0=i*p-y;for(let X0=0;X0<T;X0++){let S0=X0*C-j;$0[O]=S0*q,$0[L]=Z0*R,$0[F]=m,H.push($0.x,$0.y,$0.z),$0[O]=0,$0[L]=0,$0[F]=A>0?1:-1,U.push($0.x,$0.y,$0.z),D.push(X0/P),D.push(1-i/_),n+=1}}for(let i=0;i<_;i++)for(let Z0=0;Z0<P;Z0++){let X0=G+Z0+T*i,S0=G+Z0+T*(i+1),T0=G+(Z0+1)+T*(i+1),n0=G+(Z0+1)+T*i;Y.push(X0,S0,n0),Y.push(S0,T0,n0),u+=6}X.addGroup(N,u,I),N+=u,G+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class N7 extends F9{constructor(J=1,Q=1,Z=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:K};let $=J/2,W=Q/2,X=Math.floor(Z),Y=Math.floor(K),H=X+1,U=Y+1,D=J/X,G=Q/Y,N=[],E=[],O=[],L=[];for(let F=0;F<U;F++){let q=F*G-W;for(let R=0;R<H;R++){let k=R*D-$;E.push(k,-q,0),O.push(0,0,1),L.push(R/X),L.push(1-F/Y)}}for(let F=0;F<Y;F++)for(let q=0;q<X;q++){let R=q+H*F,k=q+H*(F+1),V=q+1+H*(F+1),A=q+1+H*F;N.push(R,k,A),N.push(k,V,A)}this.setIndex(N),this.setAttribute("position",new c8(E,3)),this.setAttribute("normal",new c8(O,3)),this.setAttribute("uv",new c8(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new N7(J.width,J.height,J.widthSegments,J.heightSegments)}}class VQ extends F9{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],Z=new Set,K=new x,$=new x;if(J.index!==null){let W=J.attributes.position,X=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:X.count,materialIndex:0}];for(let H=0,U=Y.length;H<U;++H){let D=Y[H],G=D.start,N=D.count;for(let E=G,O=G+N;E<O;E+=3)for(let L=0;L<3;L++){let F=X.getX(E+L),q=X.getX(E+(L+1)%3);if(K.fromBufferAttribute(W,F),$.fromBufferAttribute(W,q),TW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}}else{let W=J.attributes.position;for(let X=0,Y=W.count/3;X<Y;X++)for(let H=0;H<3;H++){let U=3*X+H,D=3*X+(H+1)%3;if(K.fromBufferAttribute(W,U),$.fromBufferAttribute(W,D),TW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}this.setAttribute("position",new c8(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function TW(J,Q,Z){let K=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,$=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if(Z.has(K)===!0||Z.has($)===!0)return!1;else return Z.add(K),Z.add($),!0}function mJ(J){let Q={};for(let Z in J){Q[Z]={};for(let K in J[Z]){let $=J[Z][K];if(wW($))if($.isRenderTargetTexture)y0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][K]=null;else Q[Z][K]=$.clone();else if(Array.isArray($))if(wW($[0])){let W=[];for(let X=0,Y=$.length;X<Y;X++)W[X]=$[X].clone();Q[Z][K]=W}else Q[Z][K]=$.slice();else Q[Z][K]=$}}return Q}function p8(J){let Q={};for(let Z=0;Z<J.length;Z++){let K=mJ(J[Z]);for(let $ in K)Q[$]=K[$]}return Q}function wW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function $U(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function xK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return o0.workingColorSpace}var D7={clone:mJ,merge:p8},WU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class t8 extends k6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WU,this.fragmentShader=XU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=mJ(J.uniforms),this.uniformsGroups=$U(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let W=this.uniforms[K].value;if(W&&W.isTexture)Q.uniforms[K]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[K]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[K]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[K]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[K]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[K]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[K]={type:"m4",value:W.toArray()};else Q.uniforms[K]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let K in this.extensions)if(this.extensions[K]===!0)Z[K]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let Z in J.uniforms){let K=J.uniforms[Z];switch(this.uniforms[Z]={},K.type){case"t":this.uniforms[Z].value=Q[K.value]||null;break;case"c":this.uniforms[Z].value=new e0().setHex(K.value);break;case"v2":this.uniforms[Z].value=new x0().fromArray(K.value);break;case"v3":this.uniforms[Z].value=new x().fromArray(K.value);break;case"v4":this.uniforms[Z].value=new Y8().fromArray(K.value);break;case"m3":this.uniforms[Z].value=new g0().fromArray(K.value);break;case"m4":this.uniforms[Z].value=new M8().fromArray(K.value);break;default:this.uniforms[Z].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Z in J.extensions)this.extensions[Z]=J.extensions[Z];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class gK extends t8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pK extends k6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class mK extends k6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function E6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function wZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class dJ{constructor(J,Q,Z,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,K=Q[Z],$=Q[Z-1];Z:{J:{let W;Q:{K:if(!(J<K)){for(let X=Z+2;;){if(K===void 0){if(J<$)break K;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===X)break;if($=K,K=Q[++Z],J<K)break J}W=Q.length;break Q}if(!(J>=$)){let X=Q[1];if(J<X)Z=2,$=X;for(let Y=Z-2;;){if($===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if(K=$,$=Q[--Z-1],J>=$)break J}W=Z,Z=0;break Q}break Z}while(Z<W){let X=Z+W>>>1;if(J<Q[X])W=X;else Z=X+1}if(K=Q[Z],$=Q[Z-1],$===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,$,K)}return this.interpolate_(Z,$,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,K=this.valueSize,$=J*K;for(let W=0;W!==K;++W)Q[W]=Z[$+W];return Q}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class dK extends dJ{constructor(J,Q,Z,K){super(J,Q,Z,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let K=this.parameterPositions,$=J-2,W=J+1,X=K[$],Y=K[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:$=J,X=2*Q-Z;break;case 2402:$=K.length-2,X=Q+K[$]-K[$+1];break;default:$=J,X=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*Z-Q;break;case 2402:W=1,Y=Z+K[1]-K[0];break;default:W=J-1,Y=Q}let H=(Z-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-Z),this._offsetPrev=$*U,this._offsetNext=W*U}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,D=this._offsetNext,G=this._weightPrev,N=this._weightNext,E=(Z-Q)/(K-Q),O=E*E,L=O*E,F=-G*L+2*G*O-G*E,q=(1+G)*L+(-1.5-2*G)*O+(-0.5+G)*E+1,R=(-1-N)*L+(1.5+N)*O+0.5*E,k=N*L-N*O;for(let V=0;V!==X;++V)$[V]=F*W[U+V]+q*W[H+V]+R*W[Y+V]+k*W[D+V];return $}}class uK extends dJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=(Z-Q)/(K-Q),D=1-U;for(let G=0;G!==X;++G)$[G]=W[H+G]*D+W[Y+G]*U;return $}}class lK extends dJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class cK extends dJ{interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,D=this.outTangents;if(!U||!D){let E=(Z-Q)/(K-Q),O=1-E;for(let L=0;L!==X;++L)$[L]=W[H+L]*O+W[Y+L]*E;return $}let G=X*2,N=J-1;for(let E=0;E!==X;++E){let O=W[H+E],L=W[Y+E],F=N*G+E*2,q=D[F],R=D[F+1],k=J*G+E*2,V=U[k],A=U[k+1],P=HU(Z,Q,q,V,K);$[E]=fX(P,O,R,A,L)}return $}}function fX(J,Q,Z,K,$){let W=1-J;return W*W*W*Q+3*W*W*J*Z+3*W*J*J*K+J*J*J*$}function YU(J,Q,Z,K,$){let W=1-J;return 3*W*W*(Z-Q)+6*W*J*(K-Z)+3*J*J*($-K)}function HU(J,Q,Z,K,$){let W=(J-Q)/($-Q);for(let X=0;X<8;X++){let Y=fX(W,Q,Z,K,$)-J;if(Math.abs(Y)<0.0000000001)break;let H=YU(W,Q,Z,K,$);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class O9{constructor(J,Q,Z,K){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=E6(Q,this.TimeBufferType),this.values=E6(Z,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:E6(J.times,Array),values:E6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)Z.interpolation=K;if(wZ(J.settings))Z.settings={inTangents:E6(J.settings.inTangents,Array),outTangents:E6(J.settings.outTangents,Array)}}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new lK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new uK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new dK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new cK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return y0("KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]*=J;if(wZ(this.settings))SW(this.settings.inTangents,J),SW(this.settings.outTangents,J)}return this}trim(J,Q){let Z=this.times,K=Z.length,$=0,W=K-1;while($!==K&&Z[$]<J)++$;while(W!==-1&&Z[W]>Q)--W;if(++W,$!==0||W!==K){if($>=W)W=Math.max(W,1),$=W-1;let X=this.getValueSize();this.times=Z.slice($,W),this.values=this.values.slice($*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)f0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,K=this.values,$=Z.length;if($===0)f0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==$;X++){let Y=Z[X];if(typeof Y==="number"&&isNaN(Y)){f0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){f0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(K!==void 0){if(CH(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){f0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),K=this.getInterpolation()===2302,$=J.length-1,W=1;for(let X=1;X<$;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!K){let D=X*Z,G=D-Z,N=D+Z;for(let E=0;E!==Z;++E){let O=Q[D+E];if(O!==Q[G+E]||O!==Q[N+E]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let D=X*Z,G=W*Z;for(let N=0;N!==Z;++N)Q[G+N]=Q[D+N]}++W}}if($>0){J[W]=J[$];for(let X=$*Z,Y=W*Z,H=0;H!==Z;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);if(K.createInterpolant=this.createInterpolant,wZ(this.settings))K.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return K}}function SW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]*=Q}O9.prototype.ValueTypeName="";O9.prototype.TimeBufferType=Float32Array;O9.prototype.ValueBufferType=Float32Array;O9.prototype.DefaultInterpolation=2301;class uJ extends O9{constructor(J,Q,Z){super(J,Q,Z)}}uJ.prototype.ValueTypeName="bool";uJ.prototype.ValueBufferType=Array;uJ.prototype.DefaultInterpolation=2300;uJ.prototype.InterpolantFactoryMethodLinear=void 0;uJ.prototype.InterpolantFactoryMethodSmooth=void 0;class nK extends O9{constructor(J,Q,Z,K){super(J,Q,Z,K)}}nK.prototype.ValueTypeName="color";class sK extends O9{constructor(J,Q,Z,K){super(J,Q,Z,K)}}sK.prototype.ValueTypeName="number";class iK extends dJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=(Z-Q)/(K-Q),H=J*X;for(let U=H+X;H!==U;H+=4)r8.slerpFlat($,0,W,H-X,W,H,Y);return $}}class BQ extends O9{constructor(J,Q,Z,K){super(J,Q,Z,K)}InterpolantFactoryMethodLinear(J){return new iK(this.times,this.values,this.getValueSize(),J)}}BQ.prototype.ValueTypeName="quaternion";BQ.prototype.InterpolantFactoryMethodSmooth=void 0;class lJ extends O9{constructor(J,Q,Z){super(J,Q,Z)}}lJ.prototype.ValueTypeName="string";lJ.prototype.ValueBufferType=Array;lJ.prototype.DefaultInterpolation=2300;lJ.prototype.InterpolantFactoryMethodLinear=void 0;lJ.prototype.InterpolantFactoryMethodSmooth=void 0;class oK extends O9{constructor(J,Q,Z,K){super(J,Q,Z,K)}}oK.prototype.ValueTypeName="vector";class aK{constructor(J,Q,Z){let K=this,$=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this._abortController=null,this.itemStart=function(U){if(X++,$===!1){if(K.onStart!==void 0)K.onStart(U,W,X)}$=!0},this.itemEnd=function(U){if(W++,K.onProgress!==void 0)K.onProgress(U,W,X);if(W===X){if($=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(U){if(K.onError!==void 0)K.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,D){return H.push(U,D),this},this.removeHandler=function(U){let D=H.indexOf(U);if(D!==-1)H.splice(D,2);return this},this.getHandler=function(U){for(let D=0,G=H.length;D<G;D+=2){let N=H[D],E=H[D+1];if(N.global)N.lastIndex=0;if(N.test(U))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var hX=new aK;class rK{constructor(J){if(this.manager=J!==void 0?J:hX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let Z=this;return new Promise(function(K,$){Z.load(J,K,Q,$)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}rK.DEFAULT_MATERIAL_NAME="__DEFAULT";var i7=new x,o7=new r8,v9=new x;class CQ extends i8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new M8,this.projectionMatrix=new M8,this.projectionMatrixInverse=new M8,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(i7,o7,v9),v9.x===1&&v9.y===1&&v9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(i7,o7,v9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,Z=!1){if(super.updateWorldMatrix(J,Q,Z),this.matrixWorld.decompose(i7,o7,v9),v9.x===1&&v9.y===1&&v9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(i7,o7,v9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var RJ=new x,jW=new x0,vW=new x0;class l8 extends CQ{constructor(J=50,Q=1,Z=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=V6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(r6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return V6*2*Math.atan(Math.tan(r6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){RJ.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(RJ.x,RJ.y).multiplyScalar(-J/RJ.z),RJ.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(RJ.x,RJ.y).multiplyScalar(-J/RJ.z)}getViewSize(J,Q){return this.getViewBounds(J,jW,vW),Q.subVectors(vW,jW)}setViewOffset(J,Q,Z,K,$,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(r6*0.5*this.fov)/this.zoom,Z=2*Q,K=this.aspect*Z,$=-0.5*K,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;$+=W.offsetX*K/Y,Q-=W.offsetY*Z/H,K*=W.width/Y,Z*=W.height/H}let X=this.filmOffset;if(X!==0)$+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective($,$+K,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class AQ extends CQ{constructor(J=-1,Q=1,Z=1,K=-1,$=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=K,this.near=$,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,K,$,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,K=(this.top+this.bottom)/2,$=Z-J,W=Z+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;$+=H*this.view.offsetX,W=$+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic($,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class zQ extends F9{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var F6=-90,O6=1;class tK extends i8{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new l8(F6,O6,J,Q);K.layers=this.layers,this.add(K);let $=new l8(F6,O6,J,Q);$.layers=this.layers,this.add($);let W=new l8(F6,O6,J,Q);W.layers=this.layers,this.add(W);let X=new l8(F6,O6,J,Q);X.layers=this.layers,this.add(X);let Y=new l8(F6,O6,J,Q);Y.layers=this.layers,this.add(Y);let H=new l8(F6,O6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,K,$,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),$.up.set(0,0,-1),$.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),$.up.set(0,0,1),$.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[$,W,X,Y,H,U]=this.children,D=J.getRenderTarget(),G=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let O=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1;let L=!1;if(J.isWebGLRenderer===!0)L=J.state.buffers.depth.getReversed();else L=J.reversedDepthBuffer;if(J.setRenderTarget(Z,0,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,$),J.setRenderTarget(Z,1,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget(Z,2,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget(Z,3,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget(Z,4,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),Z.texture.generateMipmaps=O,J.setRenderTarget(Z,5,K),L&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(D,G,N),J.xr.enabled=E,Z.texture.needsPMREMUpdate=!0}}class eK extends l8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var J$="\\[\\]\\.:\\/",UU=new RegExp("["+J$+"]","g"),Q$="[^"+J$+"]",GU="[^"+J$.replace("\\.","")+"]",NU=/((?:WC+[\/:])*)/.source.replace("WC",Q$),DU=/(WCOD+)?/.source.replace("WCOD",GU),qU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Q$),EU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Q$),FU=new RegExp("^"+NU+DU+qU+EU+"$"),OU=["material","materials","bones","map"];class xX{constructor(J,Q,Z){let K=Z||X8.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,K=this._bindings[Z];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let K=this._targetGroup.nCachedObjects_,$=Z.length;K!==$;++K)Z[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class X8{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||X8.parseTrackName(Q),this.node=X8.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new X8(J,Q,Z);else return new X8.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(UU,"")}static parseTrackName(J){let Q=FU.exec(J);if(Q===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let $=Z.nodeName.substring(K+1);if(OU.indexOf($)!==-1)Z.nodeName=Z.nodeName.substring(0,K),Z.objectName=$}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function($){for(let W=0;W<$.length;W++){let X=$[W];if(X.name===Q||X.uuid===Q)return X;let Y=Z(X.children);if(Y)return Y}return null},K=Z(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)J[Q++]=Z[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,K=Q.propertyName,$=Q.propertyIndex;if(!J)J=X8.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){y0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let H=Q.objectIndex;switch(Z){case"materials":if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){f0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){f0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){f0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){f0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(H!==void 0){if(J[H]===void 0){f0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[K];if(W===void 0){let H=Q.nodeName;f0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if($!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[$]!==void 0)$=J.morphTargetDictionary[$]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=$}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}X8.Composite=xX;X8.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};X8.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};X8.prototype.GetterByBindingType=[X8.prototype._getValue_direct,X8.prototype._getValue_array,X8.prototype._getValue_arrayElement,X8.prototype._getValue_toArray];X8.prototype.SetterByBindingTypeAndVersioning=[[X8.prototype._setValue_direct,X8.prototype._setValue_direct_setNeedsUpdate,X8.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[X8.prototype._setValue_array,X8.prototype._setValue_array_setNeedsUpdate,X8.prototype._setValue_array_setMatrixWorldNeedsUpdate],[X8.prototype._setValue_arrayElement,X8.prototype._setValue_arrayElement_setNeedsUpdate,X8.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[X8.prototype._setValue_fromArray,X8.prototype._setValue_fromArray_setNeedsUpdate,X8.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NE=new Float32Array(1);class p9 extends bK{constructor(J,Q,Z=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class q7{constructor(J=1,Q=0,Z=0){this.radius=J,this.phi=Q,this.theta=Z}set(J,Q,Z){return this.radius=J,this.phi=Q,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=p0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){if(this.radius=Math.sqrt(J*J+Q*Q+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(p0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class Z${static{Z$.prototype.isMatrix2=!0}constructor(J,Q,Z,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,K){let $=this.elements;return $[0]=J,$[2]=Q,$[1]=Z,$[3]=K,this}}var yW=new x,a7=new x,R6=new x,M6=new x,SZ=new x,RU=new x,MU=new x;class PQ{constructor(J=new x,Q=new x){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){yW.subVectors(J,this.start),a7.subVectors(this.end,this.start);let Z=a7.dot(a7);if(Z===0)return 0;let $=a7.dot(yW)/Z;if(Q)$=p0($,0,1);return $}closestPointToPoint(J,Q,Z){let K=this.closestPointToPointParameter(J,Q);return this.delta(Z).multiplyScalar(K).add(this.start)}distanceSqToLine3(J,Q=RU,Z=MU){let $,W,X=this.start,Y=J.start,H=this.end,U=J.end;R6.subVectors(H,X),M6.subVectors(U,Y),SZ.subVectors(X,Y);let D=R6.dot(R6),G=M6.dot(M6),N=M6.dot(SZ);if(D<=0.00000000000000010000000000000001&&G<=0.00000000000000010000000000000001)return Q.copy(X),Z.copy(Y),Q.sub(Z),Q.dot(Q);if(D<=0.00000000000000010000000000000001)$=0,W=N/G,W=p0(W,0,1);else{let E=R6.dot(SZ);if(G<=0.00000000000000010000000000000001)W=0,$=p0(-E/D,0,1);else{let O=R6.dot(M6),L=D*G-O*O;if(L!==0)$=p0((O*N-E*G)/L,0,1);else $=0;if(W=(O*$+N)/G,W<0)W=0,$=p0(-E/D,0,1);else if(W>1)W=1,$=p0((O-E)/D,0,1)}}return Q.copy(X).addScaledVector(R6,$),Z.copy(Y).addScaledVector(M6,W),Q.distanceToSquared(Z)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class kQ extends g9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function K$(J,Q,Z,K){let $=LU(K);switch(Z){case 1021:return J*Q;case 1028:return J*Q/$.components*$.byteLength;case 1029:return J*Q/$.components*$.byteLength;case 1030:return J*Q*2/$.components*$.byteLength;case 1031:return J*Q*2/$.components*$.byteLength;case 1022:return J*Q*3/$.components*$.byteLength;case 1023:return J*Q*4/$.components*$.byteLength;case 1033:return J*Q*4/$.components*$.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function LU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window!=="undefined")if(window.__THREE__)y0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function XY(){let J=null,Q=!1,Z=null,K=null;function $(W,X){K=J.requestAnimationFrame($),Z(W,X)}return{start:function(){if(Q===!0)return;if(Z===null)return;if(J===null)return;K=J.requestAnimationFrame($),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(W){Z=W},setContext:function(W){J=W}}}function IU(J){let Q=new WeakMap;function Z(Y,H){let{array:U,usage:D}=Y,G=U.byteLength,N=J.createBuffer();J.bindBuffer(H,N),J.bufferData(H,U,D),Y.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array!=="undefined"&&U instanceof Float16Array)E=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:G}}function K(Y,H,U){let{array:D,updateRanges:G}=H;if(J.bindBuffer(U,Y),G.length===0)J.bufferSubData(U,0,D);else{G.sort((E,O)=>E.start-O.start);let N=0;for(let E=1;E<G.length;E++){let O=G[N],L=G[E];if(L.start<=O.start+O.count+1)O.count=Math.max(O.count,L.start+L.count-O.start);else++N,G[N]=L}G.length=N+1;for(let E=0,O=G.length;E<O;E++){let L=G[E];J.bufferSubData(U,L.start*D.BYTES_PER_ELEMENT,D,L.start,L.count)}H.clearUpdateRanges()}H.onUploadCallback()}function $(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let D=Q.get(Y);if(!D||D.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,Z(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(U.buffer,Y,H),U.version=Y.version}}return{get:$,remove:W,update:X}}var VU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BU=`#ifdef USE_ALPHAHASH
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
#endif`,AU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kU=`#ifdef USE_AOMAP
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
#endif`,_U=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TU=`#ifdef USE_BATCHING
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
#endif`,wU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yU=`#ifdef USE_IRIDESCENCE
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
#endif`,fU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lU=`#define PI 3.141592653589793
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
} // validated`,cU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nU=`vec3 transformedNormal = objectNormal;
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
#endif`,sU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rU="gl_FragColor = linearToOutputTexel( gl_FragColor );",tU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eU=`#ifdef USE_ENVMAP
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
#endif`,JG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QG=`#ifdef USE_ENVMAP
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
#endif`,ZG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KG=`#ifdef USE_ENVMAP
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
#endif`,$G=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WG=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XG=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HG=`#ifdef USE_GRADIENTMAP
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
}`,UG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DG=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qG=`#ifdef USE_ENVMAP
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
#endif`,EG=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MG=`PhysicalMaterial material;
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
#endif`,LG=`uniform sampler2D dfgLUT;
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
}`,IG=`
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
#endif`,VG=`#if defined( RE_IndirectDiffuse )
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
#endif`,BG=`#if defined( RE_IndirectDiffuse )
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
#endif`,AG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_G=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SG=`#if defined( USE_POINTS_UV )
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
#endif`,jG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yG=`#ifdef USE_INSTANCING_MORPH
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
#endif`,fG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hG=`#ifdef USE_MORPHTARGETS
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
#endif`,xG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pG=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dG=`#ifndef FLAT_SHADED
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
#endif`,lG=`#ifdef USE_NORMALMAP
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
#endif`,cG=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nG=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sG=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iG=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oG=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aG=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X5=`float getShadowMask() {
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
}`,Y5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H5=`#ifdef USE_SKINNING
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
#endif`,U5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G5=`#ifdef USE_SKINNING
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
#endif`,N5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E5=`#ifndef saturate
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
#endif`,O5=`#ifdef USE_TRANSMISSION
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
#endif`,R5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B5=`uniform sampler2D t2D;
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
}`,A5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k5=`#include <common>
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
}`,_5=`#if DEPTH_PACKING == 3200
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
}`,T5=`#define DISTANCE
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
}`,w5=`#define DISTANCE
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
}`,S5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v5=`uniform float scale;
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
}`,y5=`uniform vec3 diffuse;
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
}`,f5=`uniform vec3 diffuse;
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
}`,h5=`#define LAMBERT
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
}`,x5=`#define LAMBERT
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
}`,g5=`#define MATCAP
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
}`,p5=`#define MATCAP
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
}`,m5=`#define NORMAL
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
}`,d5=`#define NORMAL
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
}`,l5=`#define PHONG
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
}`,c5=`#define STANDARD
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
}`,n5=`#define STANDARD
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
}`,s5=`#define TOON
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
}`,i5=`#define TOON
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
}`,o5=`uniform float size;
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
}`,a5=`uniform vec3 diffuse;
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
}`,r5=`#include <common>
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
}`,t5=`uniform vec3 color;
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
}`,e5=`uniform float rotation;
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
}`,JN=`uniform vec3 diffuse;
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
}`,c0={alphahash_fragment:VU,alphahash_pars_fragment:BU,alphamap_fragment:CU,alphamap_pars_fragment:AU,alphatest_fragment:zU,alphatest_pars_fragment:PU,aomap_fragment:kU,aomap_pars_fragment:_U,batching_pars_vertex:TU,batching_vertex:wU,begin_vertex:SU,beginnormal_vertex:jU,bsdfs:vU,iridescence_fragment:yU,bumpmap_pars_fragment:bU,clipping_planes_fragment:fU,clipping_planes_pars_fragment:hU,clipping_planes_pars_vertex:xU,clipping_planes_vertex:gU,color_fragment:pU,color_pars_fragment:mU,color_pars_vertex:dU,color_vertex:uU,common:lU,cube_uv_reflection_fragment:cU,defaultnormal_vertex:nU,displacementmap_pars_vertex:sU,displacementmap_vertex:iU,emissivemap_fragment:oU,emissivemap_pars_fragment:aU,colorspace_fragment:rU,colorspace_pars_fragment:tU,envmap_fragment:eU,envmap_common_pars_fragment:JG,envmap_pars_fragment:QG,envmap_pars_vertex:ZG,envmap_physical_pars_fragment:qG,envmap_vertex:KG,fog_vertex:$G,fog_pars_vertex:WG,fog_fragment:XG,fog_pars_fragment:YG,gradientmap_pars_fragment:HG,lightmap_pars_fragment:UG,lights_lambert_fragment:GG,lights_lambert_pars_fragment:NG,lights_pars_begin:DG,lights_toon_fragment:EG,lights_toon_pars_fragment:FG,lights_phong_fragment:OG,lights_phong_pars_fragment:RG,lights_physical_fragment:MG,lights_physical_pars_fragment:LG,lights_fragment_begin:IG,lights_fragment_maps:VG,lights_fragment_end:BG,lightprobes_pars_fragment:CG,logdepthbuf_fragment:AG,logdepthbuf_pars_fragment:zG,logdepthbuf_pars_vertex:PG,logdepthbuf_vertex:kG,map_fragment:_G,map_pars_fragment:TG,map_particle_fragment:wG,map_particle_pars_fragment:SG,metalnessmap_fragment:jG,metalnessmap_pars_fragment:vG,morphinstance_vertex:yG,morphcolor_vertex:bG,morphnormal_vertex:fG,morphtarget_pars_vertex:hG,morphtarget_vertex:xG,normal_fragment_begin:gG,normal_fragment_maps:pG,normal_pars_fragment:mG,normal_pars_vertex:dG,normal_vertex:uG,normalmap_pars_fragment:lG,clearcoat_normal_fragment_begin:cG,clearcoat_normal_fragment_maps:nG,clearcoat_pars_fragment:sG,iridescence_pars_fragment:iG,opaque_fragment:oG,packing:aG,premultiplied_alpha_fragment:rG,project_vertex:tG,dithering_fragment:eG,dithering_pars_fragment:J5,roughnessmap_fragment:Q5,roughnessmap_pars_fragment:Z5,shadowmap_pars_fragment:K5,shadowmap_pars_vertex:$5,shadowmap_vertex:W5,shadowmask_pars_fragment:X5,skinbase_vertex:Y5,skinning_pars_vertex:H5,skinning_vertex:U5,skinnormal_vertex:G5,specularmap_fragment:N5,specularmap_pars_fragment:D5,tonemapping_fragment:q5,tonemapping_pars_fragment:E5,transmission_fragment:F5,transmission_pars_fragment:O5,uv_pars_fragment:R5,uv_pars_vertex:M5,uv_vertex:L5,worldpos_vertex:I5,background_vert:V5,background_frag:B5,backgroundCube_vert:C5,backgroundCube_frag:A5,cube_vert:z5,cube_frag:P5,depth_vert:k5,depth_frag:_5,distance_vert:T5,distance_frag:w5,equirect_vert:S5,equirect_frag:j5,linedashed_vert:v5,linedashed_frag:y5,meshbasic_vert:b5,meshbasic_frag:f5,meshlambert_vert:h5,meshlambert_frag:x5,meshmatcap_vert:g5,meshmatcap_frag:p5,meshnormal_vert:m5,meshnormal_frag:d5,meshphong_vert:u5,meshphong_frag:l5,meshphysical_vert:c5,meshphysical_frag:n5,meshtoon_vert:s5,meshtoon_frag:i5,points_vert:o5,points_frag:a5,shadow_vert:r5,shadow_frag:t5,sprite_vert:e5,sprite_frag:JN},D0={common:{diffuse:{value:new e0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new g0}},envmap:{envMap:{value:null},envMapRotation:{value:new g0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new g0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new g0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new g0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new g0},normalScale:{value:new x0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new g0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new g0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new g0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new g0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new e0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new e0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0},uvTransform:{value:new g0}},sprite:{diffuse:{value:new e0(16777215)},opacity:{value:1},center:{value:new x0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}}},n8={basic:{uniforms:p8([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.fog]),vertexShader:c0.meshbasic_vert,fragmentShader:c0.meshbasic_frag},lambert:{uniforms:p8([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new e0(0)},envMapIntensity:{value:1}}]),vertexShader:c0.meshlambert_vert,fragmentShader:c0.meshlambert_frag},phong:{uniforms:p8([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new e0(0)},specular:{value:new e0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:c0.meshphong_vert,fragmentShader:c0.meshphong_frag},standard:{uniforms:p8([D0.common,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.roughnessmap,D0.metalnessmap,D0.fog,D0.lights,{emissive:{value:new e0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag},toon:{uniforms:p8([D0.common,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.gradientmap,D0.fog,D0.lights,{emissive:{value:new e0(0)}}]),vertexShader:c0.meshtoon_vert,fragmentShader:c0.meshtoon_frag},matcap:{uniforms:p8([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,{matcap:{value:null}}]),vertexShader:c0.meshmatcap_vert,fragmentShader:c0.meshmatcap_frag},points:{uniforms:p8([D0.points,D0.fog]),vertexShader:c0.points_vert,fragmentShader:c0.points_frag},dashed:{uniforms:p8([D0.common,D0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:c0.linedashed_vert,fragmentShader:c0.linedashed_frag},depth:{uniforms:p8([D0.common,D0.displacementmap]),vertexShader:c0.depth_vert,fragmentShader:c0.depth_frag},normal:{uniforms:p8([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,{opacity:{value:1}}]),vertexShader:c0.meshnormal_vert,fragmentShader:c0.meshnormal_frag},sprite:{uniforms:p8([D0.sprite,D0.fog]),vertexShader:c0.sprite_vert,fragmentShader:c0.sprite_frag},background:{uniforms:{uvTransform:{value:new g0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:c0.background_vert,fragmentShader:c0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new g0}},vertexShader:c0.backgroundCube_vert,fragmentShader:c0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:c0.cube_vert,fragmentShader:c0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:c0.equirect_vert,fragmentShader:c0.equirect_frag},distance:{uniforms:p8([D0.common,D0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:c0.distance_vert,fragmentShader:c0.distance_frag},shadow:{uniforms:p8([D0.lights,D0.fog,{color:{value:new e0(0)},opacity:{value:1}}]),vertexShader:c0.shadow_vert,fragmentShader:c0.shadow_frag}};n8.physical={uniforms:p8([n8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new g0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new g0},clearcoatNormalScale:{value:new x0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new g0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new g0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new g0},sheen:{value:0},sheenColor:{value:new e0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new g0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new g0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new g0},transmissionSamplerSize:{value:new x0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new g0},attenuationDistance:{value:0},attenuationColor:{value:new e0(0)},specularColor:{value:new e0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new g0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new g0},anisotropyVector:{value:new x0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new g0}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag};var _Q={r:0,b:0,g:0},QN=new M8,YY=new g0;YY.set(-1,0,0,0,1,0,0,0,1);function ZN(J,Q,Z,K,$,W){let X=new e0(0),Y=$===!0?0:1,H,U,D=null,G=0,N=null;function E(R){let k=R.isScene===!0?R.background:null;if(k&&k.isTexture){let V=R.backgroundBlurriness>0;k=Q.get(k,V)}return k}function O(R){let k=!1,V=E(R);if(V===null)F(X,Y);else if(V&&V.isColor)F(V,1),k=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")Z.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||k)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function L(R,k){let V=E(k);if(V&&(V.isCubeTexture||V.mapping===K7)){if(U===void 0)U=new W9(new _6(1,1,1),new t8({name:"BackgroundCubeMaterial",uniforms:mJ(n8.backgroundCube.uniforms),vertexShader:n8.backgroundCube.vertexShader,fragmentShader:n8.backgroundCube.fragmentShader,side:o8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(A,P,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(QN.makeRotationFromEuler(k.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(YY);if(U.material.toneMapped=o0.getTransfer(V.colorSpace)!==D8,D!==V||G!==V.version||N!==J.toneMapping)U.material.needsUpdate=!0,D=V,G=V.version,N=J.toneMapping;U.layers.enableAll(),R.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new W9(new N7(2,2),new t8({name:"BackgroundMaterial",uniforms:mJ(n8.background.uniforms),vertexShader:n8.background.vertexShader,fragmentShader:n8.background.fragmentShader,side:C6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,H.material.toneMapped=o0.getTransfer(V.colorSpace)!==D8,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),D!==V||G!==V.version||N!==J.toneMapping)H.material.needsUpdate=!0,D=V,G=V.version,N=J.toneMapping;H.layers.enableAll(),R.unshift(H,H.geometry,H.material,0,0,null)}}function F(R,k){R.getRGB(_Q,xK(J)),Z.buffers.color.setClear(_Q.r,_Q.g,_Q.b,k,W)}function q(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(R,k=1){X.set(R),Y=k,F(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(R){Y=R,F(X,Y)},render:O,addToRenderList:L,dispose:q}}function KN(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},$=N(null),W=$,X=!1;function Y(j,y,m,T,w){let n=!1,u=G(j,T,m,y);if(W!==u)W=u,U(W.object);if(n=E(j,T,m,w),n)O(j,T,m,w);if(w!==null)Q.update(w,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,V(j,y,m,T),w!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(w).buffer)}}function H(){return J.createVertexArray()}function U(j){return J.bindVertexArray(j)}function D(j){return J.deleteVertexArray(j)}function G(j,y,m,T){let w=T.wireframe===!0,n=K[y.id];if(n===void 0)n={},K[y.id]=n;let u=j.isInstancedMesh===!0?j.id:0,$0=n[u];if($0===void 0)$0={},n[u]=$0;let i=$0[m.id];if(i===void 0)i={},$0[m.id]=i;let Z0=i[w];if(Z0===void 0)Z0=N(H()),i[w]=Z0;return Z0}function N(j){let y=[],m=[],T=[];for(let w=0;w<Z;w++)y[w]=0,m[w]=0,T[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:m,attributeDivisors:T,object:j,attributes:{},index:null}}function E(j,y,m,T){let w=W.attributes,n=y.attributes,u=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=w[i],S0=n[i];if(S0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)S0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)S0=j.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==S0)return!0;if(S0&&X0.data!==S0.data)return!0;u++}if(W.attributesNum!==u)return!0;if(W.index!==T)return!0;return!1}function O(j,y,m,T){let w={},n=y.attributes,u=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=n[i];if(X0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)X0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)X0=j.instanceColor}let S0={};if(S0.attribute=X0,X0&&X0.data)S0.data=X0.data;w[i]=S0,u++}W.attributes=w,W.attributesNum=u,W.index=T}function L(){let j=W.newAttributes;for(let y=0,m=j.length;y<m;y++)j[y]=0}function F(j){q(j,0)}function q(j,y){let{newAttributes:m,enabledAttributes:T,attributeDivisors:w}=W;if(m[j]=1,T[j]===0)J.enableVertexAttribArray(j),T[j]=1;if(w[j]!==y)J.vertexAttribDivisor(j,y),w[j]=y}function R(){let{newAttributes:j,enabledAttributes:y}=W;for(let m=0,T=y.length;m<T;m++)if(y[m]!==j[m])J.disableVertexAttribArray(m),y[m]=0}function k(j,y,m,T,w,n,u){if(u===!0)J.vertexAttribIPointer(j,y,m,w,n);else J.vertexAttribPointer(j,y,m,T,w,n)}function V(j,y,m,T){L();let w=T.attributes,n=m.getAttributes(),u=y.defaultAttributeValues;for(let $0 in n){let i=n[$0];if(i.location>=0){let Z0=w[$0];if(Z0===void 0){if($0==="instanceMatrix"&&j.instanceMatrix)Z0=j.instanceMatrix;if($0==="instanceColor"&&j.instanceColor)Z0=j.instanceColor}if(Z0!==void 0){let{normalized:X0,itemSize:S0}=Z0,T0=Q.get(Z0);if(T0===void 0)continue;let{buffer:n0,type:u0,bytesPerElement:S}=T0,g=u0===J.INT||u0===J.UNSIGNED_INT||Z0.gpuType===lZ;if(Z0.isInterleavedBufferAttribute){let d=Z0.data,a=d.stride,Q0=Z0.offset;if(d.isInstancedInterleavedBuffer){for(let r=0;r<i.locationSize;r++)q(i.location+r,d.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=d.meshPerAttribute*d.count}else for(let r=0;r<i.locationSize;r++)F(i.location+r);J.bindBuffer(J.ARRAY_BUFFER,n0);for(let r=0;r<i.locationSize;r++)k(i.location+r,S0/i.locationSize,u0,X0,a*S,(Q0+S0/i.locationSize*r)*S,g)}else{if(Z0.isInstancedBufferAttribute){for(let d=0;d<i.locationSize;d++)q(i.location+d,Z0.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let d=0;d<i.locationSize;d++)F(i.location+d);J.bindBuffer(J.ARRAY_BUFFER,n0);for(let d=0;d<i.locationSize;d++)k(i.location+d,S0/i.locationSize,u0,X0,S0*S,S0/i.locationSize*d*S,g)}}else if(u!==void 0){let X0=u[$0];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(i.location,X0);break;case 3:J.vertexAttrib3fv(i.location,X0);break;case 4:J.vertexAttrib4fv(i.location,X0);break;default:J.vertexAttrib1fv(i.location,X0)}}}}R()}function A(){C();for(let j in K){let y=K[j];for(let m in y){let T=y[m];for(let w in T){let n=T[w];for(let u in n)D(n[u].object),delete n[u];delete T[w]}}delete K[j]}}function P(j){if(K[j.id]===void 0)return;let y=K[j.id];for(let m in y){let T=y[m];for(let w in T){let n=T[w];for(let u in n)D(n[u].object),delete n[u];delete T[w]}}delete K[j.id]}function _(j){for(let y in K){let m=K[y];for(let T in m){let w=m[T];if(w[j.id]===void 0)continue;let n=w[j.id];for(let u in n)D(n[u].object),delete n[u];delete w[j.id]}}}function I(j){for(let y in K){let m=K[y],T=j.isInstancedMesh===!0?j.id:0,w=m[T];if(w===void 0)continue;for(let n in w){let u=w[n];for(let $0 in u)D(u[$0].object),delete u[$0];delete w[n]}if(delete m[T],Object.keys(m).length===0)delete K[y]}}function C(){if(p(),X=!0,W===$)return;W=$,U(W.object)}function p(){$.geometry=null,$.program=null,$.wireframe=!1}return{setup:Y,reset:C,resetDefaultState:p,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfObject:I,releaseStatesOfProgram:_,initAttributes:L,enableAttribute:F,disableUnusedAttributes:R}}function $N(J,Q,Z){let K;function $(H){K=H}function W(H,U){J.drawArrays(K,H,U),Z.update(U,K,1)}function X(H,U,D){if(D===0)return;J.drawArraysInstanced(K,H,U,D),Z.update(U,K,D)}function Y(H,U,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,U,0,D);let N=0;for(let E=0;E<D;E++)N+=U[E];Z.update(N,K,1)}this.setMode=$,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function WN(J,Q,Z,K){let $;function W(){if($!==void 0)return $;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");$=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else $=0;return $}function X(_){if(_!==x9&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let I=_===h9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==z9&&_!==WJ&&!I&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Z.precision!==void 0?Z.precision:"highp",D=H(U);if(D!==U)y0("WebGLRenderer:",U,"not supported, using",D,"instead."),U=D;let G=Z.logarithmicDepthBuffer===!0,N=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if(Z.reversedDepthBuffer===!0&&N===!1)y0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),R=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:G,reversedDepthBuffer:N,maxTextures:E,maxVertexTextures:O,maxTextureSize:L,maxCubemapSize:F,maxAttributes:q,maxVertexUniforms:R,maxVaryings:k,maxFragmentUniforms:V,maxSamples:A,samples:P}}function XN(J){let Q=this,Z=null,K=0,$=!1,W=!1,X=new N9,Y=new g0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(G,N){let E=G.length!==0||N||K!==0||$;return $=N,K=G.length,E},this.beginShadows=function(){W=!0,D(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(G,N){Z=D(G,N,0)},this.setState=function(G,N,E){let{clippingPlanes:O,clipIntersection:L,clipShadows:F}=G,q=J.get(G);if(!$||O===null||O.length===0||W&&!F)if(W)D(null);else U();else{let R=W?0:K,k=R*4,V=q.clippingState||null;H.value=V,V=D(O,N,k,E);for(let A=0;A!==k;++A)V[A]=Z[A];q.clippingState=V,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=R}};function U(){if(H.value!==Z)H.value=Z,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function D(G,N,E,O){let L=G!==null?G.length:0,F=null;if(L!==0){if(F=H.value,O!==!0||F===null){let q=E+L*4,R=N.matrixWorldInverse;if(Y.getNormalMatrix(R),F===null||F.length<q)F=new Float32Array(q);for(let k=0,V=E;k!==L;++k,V+=4)X.copy(G[k]).applyMatrix4(R,Y),X.normal.toArray(F,V),F[V+3]=X.constant}H.value=F,H.needsUpdate=!0}return Q.numPlanes=L,Q.numIntersection=0,F}}var w6=4,YN=6,HN=20,UN=256,E7=new AQ,gX=new e0,$$=null,W$=0,X$=0,Y$=!1,GN=new x,cJ=new x;class G${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,Z=0.1,K=100,$={}){let{size:W=256,position:X=GN}=$;$$=this._renderer.getRenderTarget(),W$=this._renderer.getActiveCubeFace(),X$=this._renderer.getActiveMipmapLevel(),Y$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Z,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=dX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=mX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget($$,W$,X$),this._renderer.xr.enabled=Y$,J.scissorTest=!1,T6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===z6||J.mapping===yJ)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);$$=this._renderer.getRenderTarget(),W$=this._renderer.getActiveCubeFace(),X$=this._renderer.getActiveMipmapLevel(),Y$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:a8,minFilter:a8,generateMipmaps:!1,type:h9,format:x9,colorSpace:kK,depthBuffer:!1},K=pX(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=pX(J,Q,Z);let{_lodMax:$}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NN($)),this._blurMaterial=qN($,J,Q),this._ggxMaterial=DN($,J,Q)}return K}_compileMaterial(J){let Q=new W9(new F9,J);this._renderer.compile(Q,E7)}_sceneToCubeUV(J,Q,Z,K,$){let Y=new l8(90,1,Q,Z),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],D=this._renderer,G=D.autoClear,N=D.toneMapping;if(D.getClearColor(gX),D.toneMapping=A9,D.autoClear=!1,D.state.buffers.depth.getReversed())D.setRenderTarget(K),D.clearDepth(),D.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new W9(new _6,new RQ({name:"PMREM.Background",side:o8,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,L=O.material,F=!1,q=J.background;if(q){if(q.isColor)L.color.copy(q),J.background=null,F=!0}else L.color.copy(gX),F=!0;for(let R=0;R<6;R++){let k=R%3;if(k===0)Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x+U[R],$.y,$.z);else if(k===1)Y.up.set(0,0,H[R]),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y+U[R],$.z);else Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y,$.z+U[R]);let V=this._cubeSize;if(T6(K,k*V,R>2?V:0,V,V),D.setRenderTarget(K),F)D.render(O,Y);D.render(J,Y)}D.toneMapping=N,D.autoClear=G,J.background=q}_textureToCubeUV(J,Q){let Z=this._renderer,K=J.mapping===z6||J.mapping===yJ;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=dX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=mX();let $=K?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=$;let X=$.uniforms;X.envMap.value=J;let Y=this._cubeSize;T6(Q,0,0,3*Y,2*Y),Z.setRenderTarget(Q),Z.render(W,E7)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let $=1;$<K;$++)this._applyGGXFilter(J,$-1,$);Q.autoClear=Z}_applyGGXFilter(J,Q,Z){let K=this._renderer,$=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[Z];X.material=W;let Y=W.uniforms,H=Z/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),D=Math.sqrt(H*H-U*U),G=H*1.25,N=D*G,{_lodMax:E}=this,O=this._sizeLods[Z],L=3*O*(Z>E-w6?Z-E+w6:0),F=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=N,Y.mipInt.value=E-Q,T6($,L,F,3*O,2*O),K.setRenderTarget($),K.render(X,E7),Y.envMap.value=$.texture,Y.roughness.value=0,Y.mipInt.value=E-Z,T6(J,L,F,3*O,2*O),K.setRenderTarget(J),K.render(X,E7)}_blur(J,Q,Z,K){let $=this._pingPongRenderTarget,W=Math.min(K,Math.PI)/Math.SQRT2;this._blurPass(J,$,Q,Z,W),this._blurPass($,J,Z,Z,W)}_blurPass(J,Q,Z,K,$){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[K];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=$,H.mipInt.value=this._lodMax-Z;let U=this._sizeLods[K],D=3*U*(K>this._lodMax-w6?K-this._lodMax+w6:0),G=4*(this._cubeSize-U);T6(Q,D,G,3*U,2*U),W.setRenderTarget(Q),W.render(Y,E7)}}function NN(J){let Q=[],Z=[],K=J,$=J-w6+1+YN;for(let W=0;W<$;W++){let X=Math.pow(2,K);Q.push(X);let Y=1/(X-2),H=-Y,U=1+Y,D=[H,H,U,H,U,U,H,H,U,U,H,U],G=6,N=6,E=3,O=new Float32Array(E*N*G),L=new Float32Array(E*N*G);for(let q=0;q<G;q++){let R=q%3*2/3-1,k=q>2?0:-1,V=[R,k,0,R+0.6666666666666666,k,0,R+0.6666666666666666,k+1,0,R,k,0,R+0.6666666666666666,k+1,0,R,k+1,0];O.set(V,E*N*q);for(let A=0;A<N;A++){let P=D[A*2]*2-1,_=D[A*2+1]*2-1;if(q===0)cJ.set(1,_,P);else if(q===1)cJ.set(-P,1,-_);else if(q===2)cJ.set(-P,_,1);else if(q===3)cJ.set(-1,_,-P);else if(q===4)cJ.set(-P,-1,_);else cJ.set(P,_,-1);cJ.toArray(L,(q*N+A)*E)}}let F=new F9;if(F.setAttribute("position",new q9(O,E)),F.setAttribute("outputDirection",new q9(L,E)),Z.push(new W9(F,null)),K>w6)K--}return{lodMeshes:Z,sizeLods:Q}}function pX(J,Q,Z){let K=new $9(J,Q,Z);return K.texture.mapping=K7,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function T6(J,Q,Z,K,$){J.viewport.set(Q,Z,K,$),J.scissor.set(Q,Z,K,$)}function DN(J,Q,Z){return new t8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UN,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wQ(),fragmentShader:`

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
		`,blending:f9,depthTest:!1,depthWrite:!1})}function qN(J,Q,Z){return new t8({name:"SphericalGaussianBlur",defines:{SAMPLES:HN,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wQ(),fragmentShader:`

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
		`,blending:f9,depthTest:!1,depthWrite:!1})}function mX(){return new t8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wQ(),fragmentShader:`

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
		`,blending:f9,depthTest:!1,depthWrite:!1})}function dX(){return new t8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:f9,depthTest:!1,depthWrite:!1})}function wQ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class q$ extends $9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},K=[Z,Z,Z,Z,Z,Z];this.texture=new LQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new _6(5,5,5),$=new t8({name:"CubemapFromEquirect",uniforms:mJ(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:o8,blending:f9});$.uniforms.tEquirect.value=Q;let W=new W9(K,$),X=Q.minFilter;if(Q.minFilter===bJ)Q.minFilter=a8;return new tK(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,Z=!0,K=!0){let $=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,Z,K);J.setRenderTarget($)}}function EN(J){let Q=new WeakMap,Z=new WeakMap,K=null;function $(N,E=!1){if(N===null||N===void 0)return null;if(E)return X(N);return W(N)}function W(N){if(N&&N.isTexture){let E=N.mapping;if(E===e7||E===JQ)if(Q.has(N)){let O=Q.get(N).texture;return Y(O,N.mapping)}else{let O=N.image;if(O&&O.height>0){let L=new q$(O.height);return L.fromEquirectangularTexture(J,N),Q.set(N,L),N.addEventListener("dispose",U),Y(L.texture,N.mapping)}else return null}}return N}function X(N){if(N&&N.isTexture){let E=N.mapping,O=E===e7||E===JQ,L=E===z6||E===yJ;if(O||L){let F=Z.get(N),q=F!==void 0?F.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==q){if(K===null)K=new G$(J);return F=O?K.fromEquirectangular(N,F):K.fromCubemap(N,F),F.texture.pmremVersion=N.pmremVersion,Z.set(N,F),F.texture}else if(F!==void 0)return F.texture;else{let R=N.image;if(O&&R&&R.height>0||L&&R&&H(R)){if(K===null)K=new G$(J);return F=O?K.fromEquirectangular(N):K.fromCubemap(N),F.texture.pmremVersion=N.pmremVersion,Z.set(N,F),N.addEventListener("dispose",D),F.texture}else return null}}}return N}function Y(N,E){if(E===e7)N.mapping=z6;else if(E===JQ)N.mapping=yJ;return N}function H(N){let E=0,O=6;for(let L=0;L<O;L++)if(N[L]!==void 0)E++;return E===O}function U(N){let E=N.target;E.removeEventListener("dispose",U);let O=Q.get(E);if(O!==void 0)Q.delete(E),O.dispose()}function D(N){let E=N.target;E.removeEventListener("dispose",D);let O=Z.get(E);if(O!==void 0)Z.delete(E),O.dispose()}function G(){if(Q=new WeakMap,Z=new WeakMap,K!==null)K.dispose(),K=null}return{get:$,dispose:G}}function FN(J){let Q={};function Z(K){if(Q[K]!==void 0)return Q[K];let $=J.getExtension(K);return Q[K]=$,$}return{has:function(K){return Z(K)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(K){let $=Z(K);if($===null)vJ("WebGLRenderer: "+K+" extension not supported.");return $}}}function ON(J,Q,Z,K){let $={},W=new WeakMap;function X(G){let N=G.target;if(N.index!==null)Q.remove(N.index);for(let O in N.attributes)Q.remove(N.attributes[O]);N.removeEventListener("dispose",X),delete $[N.id];let E=W.get(N);if(E)Q.remove(E),W.delete(N);if(K.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;Z.memory.geometries--}function Y(G,N){if($[N.id]===!0)return N;return N.addEventListener("dispose",X),$[N.id]=!0,Z.memory.geometries++,N}function H(G){let N=G.attributes;for(let E in N)Q.update(N[E],J.ARRAY_BUFFER)}function U(G){let N=[],E=G.index,O=G.attributes.position,L=0;if(O===void 0)return;if(E!==null){let R=E.array;L=E.version;for(let k=0,V=R.length;k<V;k+=3){let A=R[k+0],P=R[k+1],_=R[k+2];N.push(A,P,P,_,_,A)}}else{let R=O.array;L=O.version;for(let k=0,V=R.length/3-1;k<V;k+=3){let A=k+0,P=k+1,_=k+2;N.push(A,P,P,_,_,A)}}let F=new(O.count>=65535?OQ:FQ)(N,1);F.version=L;let q=W.get(G);if(q)Q.remove(q);W.set(G,F)}function D(G){let N=W.get(G);if(N){let E=G.index;if(E!==null){if(N.version<E.version)U(G)}}else U(G);return W.get(G)}return{get:Y,update:H,getWireframeAttribute:D}}function RN(J,Q,Z){let K;function $(G){K=G}let W,X;function Y(G){W=G.type,X=G.bytesPerElement}function H(G,N){J.drawElements(K,N,W,G*X),Z.update(N,K,1)}function U(G,N,E){if(E===0)return;J.drawElementsInstanced(K,N,W,G*X,E),Z.update(N,K,E)}function D(G,N,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,N,0,W,G,0,E);let L=0;for(let F=0;F<E;F++)L+=N[F];Z.update(L,K,1)}this.setMode=$,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=D}function MN(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function K(W,X,Y){switch(Z.calls++,X){case J.TRIANGLES:Z.triangles+=Y*(W/3);break;case J.LINES:Z.lines+=Y*(W/2);break;case J.LINE_STRIP:Z.lines+=Y*(W-1);break;case J.LINE_LOOP:Z.lines+=Y*W;break;case J.POINTS:Z.points+=Y*W;break;default:f0("WebGLInfo: Unknown draw mode:",X);break}}function $(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:$,update:K}}function LN(J,Q,Z){let K=new WeakMap,$=new Y8;function W(X,Y,H){let U=X.morphTargetInfluences,D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,G=D!==void 0?D.length:0,N=K.get(Y);if(N===void 0||N.count!==G){let C=function(){_.dispose(),K.delete(Y),Y.removeEventListener("dispose",C)};if(N!==void 0)N.texture.dispose();let E=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,L=Y.morphAttributes.color!==void 0,F=Y.morphAttributes.position||[],q=Y.morphAttributes.normal||[],R=Y.morphAttributes.color||[],k=0;if(E===!0)k=1;if(O===!0)k=2;if(L===!0)k=3;let V=Y.attributes.position.count*k,A=1;if(V>Q.maxTextureSize)A=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let P=new Float32Array(V*A*4*G),_=new DQ(P,V,A,G);_.type=WJ,_.needsUpdate=!0;let I=k*4;for(let p=0;p<G;p++){let j=F[p],y=q[p],m=R[p],T=V*A*4*p;for(let w=0;w<j.count;w++){let n=w*I;if(E===!0)$.fromBufferAttribute(j,w),P[T+n+0]=$.x,P[T+n+1]=$.y,P[T+n+2]=$.z,P[T+n+3]=0;if(O===!0)$.fromBufferAttribute(y,w),P[T+n+4]=$.x,P[T+n+5]=$.y,P[T+n+6]=$.z,P[T+n+7]=0;if(L===!0)$.fromBufferAttribute(m,w),P[T+n+8]=$.x,P[T+n+9]=$.y,P[T+n+10]=$.z,P[T+n+11]=m.itemSize===4?$.w:1}}N={count:G,texture:_,size:new x0(V,A)},K.set(Y,N),Y.addEventListener("dispose",C)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,Z);else{let E=0;for(let L=0;L<U.length;L++)E+=U[L];let O=Y.morphTargetsRelative?1:1-E;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",N.texture,Z),H.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:W}}function IN(J,Q,Z,K,$){let W=new WeakMap;function X(U){let D=$.render.frame,G=U.geometry,N=Q.get(U,G);if(W.get(N)!==D)Q.update(N),W.set(N,D);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==D){if(Z.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Z.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,D)}}if(U.isSkinnedMesh){let E=U.skeleton;if(W.get(E)!==D)E.update(),W.set(E,D)}return N}function Y(){W=new WeakMap}function H(U){let D=U.target;if(D.removeEventListener("dispose",H),K.releaseStatesOfObject(D),Z.remove(D.instanceMatrix),D.instanceColor!==null)Z.remove(D.instanceColor)}return{update:X,dispose:Y}}var VN={[hZ]:"LINEAR_TONE_MAPPING",[xZ]:"REINHARD_TONE_MAPPING",[gZ]:"CINEON_TONE_MAPPING",[pZ]:"ACES_FILMIC_TONE_MAPPING",[dZ]:"AGX_TONE_MAPPING",[uZ]:"NEUTRAL_TONE_MAPPING",[mZ]:"CUSTOM_TONE_MAPPING"};function BN(J,Q,Z,K,$,W){let X=new $9(Q,Z,{type:J,depthBuffer:$,stencilBuffer:W,samples:K?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,U=new F9;U.setAttribute("position",new c8([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new c8([0,2,0,0,2,0],2));let D=new gK({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),G=new W9(U,D),N=new AQ(-1,1,1,-1,0,1),E=null,O=null,L=!1,F,q=null,R=[],k=!1;this.setSize=function(V,A){if(X.setSize(V,A),Y!==null)Y.setSize(V,A);if(H!==null)H.setSize(V,A);for(let P=0;P<R.length;P++){let _=R[P];if(_.setSize)_.setSize(V,A)}},this.setEffects=function(V){R=V,k=R.length>0&&R[0].isRenderPass===!0;let{width:A,height:P}=X;if(R.length>0&&Y===null)Y=new $9(A,P,{type:h9,depthBuffer:!1,stencilBuffer:!1}),H=new $9(A,P,{type:h9,depthBuffer:!1,stencilBuffer:!1});for(let _=0;_<R.length;_++){let I=R[_];if(I.setSize)I.setSize(A,P)}},this.begin=function(V,A){if(L)return!1;if(V.toneMapping===A9&&R.length===0)return!1;if(q=A,A!==null){let{width:P,height:_}=A;if(X.width!==P||X.height!==_)this.setSize(P,_)}if(k===!1)V.setRenderTarget(X);return F=V.toneMapping,V.toneMapping=A9,!0},this.hasRenderPass=function(){return k},this.end=function(V,A){V.toneMapping=F,L=!0;let P=X,_=Y;for(let I=0;I<R.length;I++){let C=R[I];if(C.enabled===!1)continue;if(C.render(V,_,P,A),C.needsSwap!==!1)P=_,_=_===Y?H:Y}if(E!==V.outputColorSpace||O!==V.toneMapping){if(E=V.outputColorSpace,O=V.toneMapping,D.defines={},o0.getTransfer(E)===D8)D.defines.SRGB_TRANSFER="";let I=VN[O];if(I)D.defines[I]="";D.needsUpdate=!0}D.uniforms.tDiffuse.value=P.texture,V.setRenderTarget(q),V.render(G,N),q=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();U.dispose(),D.dispose()}}var HY=new x8,N$=new pJ(1,1),UY=new DQ,GY=new yK,NY=new LQ,uX=[],lX=[],cX=new Float32Array(16),nX=new Float32Array(9),sX=new Float32Array(4);function S6(J,Q,Z){let K=J[0];if(K<=0||K>0)return J;let $=Q*Z,W=uX[$];if(W===void 0)W=new Float32Array($),uX[$]=W;if(Q!==0){K.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=Z,J[X].toArray(W,Y)}return W}function z8(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,K=J.length;Z<K;Z++)if(J[Z]!==Q[Z])return!1;return!0}function P8(J,Q){for(let Z=0,K=Q.length;Z<K;Z++)J[Z]=Q[Z]}function SQ(J,Q){let Z=lX[Q];if(Z===void 0)Z=new Int32Array(Q),lX[Q]=Z;for(let K=0;K!==Q;++K)Z[K]=J.allocateTextureUnit();return Z}function CN(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function AN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z8(Z,Q))return;J.uniform2fv(this.addr,Q),P8(Z,Q)}}function zN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(z8(Z,Q))return;J.uniform3fv(this.addr,Q),P8(Z,Q)}}function PN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z8(Z,Q))return;J.uniform4fv(this.addr,Q),P8(Z,Q)}}function kN(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z8(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),P8(Z,Q)}else{if(z8(Z,K))return;sX.set(K),J.uniformMatrix2fv(this.addr,!1,sX),P8(Z,K)}}function _N(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z8(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),P8(Z,Q)}else{if(z8(Z,K))return;nX.set(K),J.uniformMatrix3fv(this.addr,!1,nX),P8(Z,K)}}function TN(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z8(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),P8(Z,Q)}else{if(z8(Z,K))return;cX.set(K),J.uniformMatrix4fv(this.addr,!1,cX),P8(Z,K)}}function wN(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function SN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z8(Z,Q))return;J.uniform2iv(this.addr,Q),P8(Z,Q)}}function jN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(z8(Z,Q))return;J.uniform3iv(this.addr,Q),P8(Z,Q)}}function vN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z8(Z,Q))return;J.uniform4iv(this.addr,Q),P8(Z,Q)}}function yN(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function bN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z8(Z,Q))return;J.uniform2uiv(this.addr,Q),P8(Z,Q)}}function fN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(z8(Z,Q))return;J.uniform3uiv(this.addr,Q),P8(Z,Q)}}function hN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z8(Z,Q))return;J.uniform4uiv(this.addr,Q),P8(Z,Q)}}function xN(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_2D_SHADOW)N$.compareFunction=Z.isReversedDepthBuffer()?GQ:UQ,W=N$;else W=HY;Z.setTexture2D(Q||W,$)}function gN(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture3D(Q||GY,$)}function pN(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTextureCube(Q||NY,$)}function mN(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture2DArray(Q||UY,$)}function dN(J){switch(J){case 5126:return CN;case 35664:return AN;case 35665:return zN;case 35666:return PN;case 35674:return kN;case 35675:return _N;case 35676:return TN;case 5124:case 35670:return wN;case 35667:case 35671:return SN;case 35668:case 35672:return jN;case 35669:case 35673:return vN;case 5125:return yN;case 36294:return bN;case 36295:return fN;case 36296:return hN;case 35678:case 36198:case 36298:case 36306:case 35682:return xN;case 35679:case 36299:case 36307:return gN;case 35680:case 36300:case 36308:case 36293:return pN;case 36289:case 36303:case 36311:case 36292:return mN}}function uN(J,Q){J.uniform1fv(this.addr,Q)}function lN(J,Q){let Z=S6(Q,this.size,2);J.uniform2fv(this.addr,Z)}function cN(J,Q){let Z=S6(Q,this.size,3);J.uniform3fv(this.addr,Z)}function nN(J,Q){let Z=S6(Q,this.size,4);J.uniform4fv(this.addr,Z)}function sN(J,Q){let Z=S6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function iN(J,Q){let Z=S6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function oN(J,Q){let Z=S6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function aN(J,Q){J.uniform1iv(this.addr,Q)}function rN(J,Q){J.uniform2iv(this.addr,Q)}function tN(J,Q){J.uniform3iv(this.addr,Q)}function eN(J,Q){J.uniform4iv(this.addr,Q)}function JD(J,Q){J.uniform1uiv(this.addr,Q)}function QD(J,Q){J.uniform2uiv(this.addr,Q)}function ZD(J,Q){J.uniform3uiv(this.addr,Q)}function KD(J,Q){J.uniform4uiv(this.addr,Q)}function $D(J,Q,Z){let K=this.cache,$=Q.length,W=SQ(Z,$);if(!z8(K,W))J.uniform1iv(this.addr,W),P8(K,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=N$;else X=HY;for(let Y=0;Y!==$;++Y)Z.setTexture2D(Q[Y]||X,W[Y])}function WD(J,Q,Z){let K=this.cache,$=Q.length,W=SQ(Z,$);if(!z8(K,W))J.uniform1iv(this.addr,W),P8(K,W);for(let X=0;X!==$;++X)Z.setTexture3D(Q[X]||GY,W[X])}function XD(J,Q,Z){let K=this.cache,$=Q.length,W=SQ(Z,$);if(!z8(K,W))J.uniform1iv(this.addr,W),P8(K,W);for(let X=0;X!==$;++X)Z.setTextureCube(Q[X]||NY,W[X])}function YD(J,Q,Z){let K=this.cache,$=Q.length,W=SQ(Z,$);if(!z8(K,W))J.uniform1iv(this.addr,W),P8(K,W);for(let X=0;X!==$;++X)Z.setTexture2DArray(Q[X]||UY,W[X])}function HD(J){switch(J){case 5126:return uN;case 35664:return lN;case 35665:return cN;case 35666:return nN;case 35674:return sN;case 35675:return iN;case 35676:return oN;case 5124:case 35670:return aN;case 35667:case 35671:return rN;case 35668:case 35672:return tN;case 35669:case 35673:return eN;case 5125:return JD;case 36294:return QD;case 36295:return ZD;case 36296:return KD;case 35678:case 36198:case 36298:case 36306:case 35682:return $D;case 35679:case 36299:case 36307:return WD;case 35680:case 36300:case 36308:case 36293:return XD;case 36289:case 36303:case 36311:case 36292:return YD}}class DY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=dN(Q.type)}}class qY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=HD(Q.type)}}class EY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let K=this.seq;for(let $=0,W=K.length;$!==W;++$){let X=K[$];X.setValue(J,Q[X.id],Z)}}}var H$=/(\w+)(\])?(\[|\.)?/g;function iX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function UD(J,Q,Z){let K=J.name,$=K.length;H$.lastIndex=0;while(!0){let W=H$.exec(K),X=H$.lastIndex,Y=W[1],H=W[2]==="]",U=W[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===$){iX(Z,U===void 0?new DY(Y,J,Q):new qY(Y,J,Q));break}else{let G=Z.map[Y];if(G===void 0)G=new EY(Y),iX(Z,G);Z=G}}}class R7{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<Z;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);UD(X,Y,this)}let K=[],$=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(W);else $.push(W);if(K.length>0)this.seq=K.concat($)}setValue(J,Q,Z,K){let $=this.map[Q];if($!==void 0)$.setValue(J,Z,K)}setOptional(J,Q,Z){let K=Q[Z];if(K!==void 0)this.setValue(J,Z,K)}static upload(J,Q,Z,K){for(let $=0,W=Q.length;$!==W;++$){let X=Q[$],Y=Z[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let Z=[];for(let K=0,$=J.length;K!==$;++K){let W=J[K];if(W.id in Q)Z.push(W)}return Z}}function oX(J,Q,Z){let K=J.createShader(Q);return J.shaderSource(K,Z),J.compileShader(K),K}var GD=37297,ND=0;function DD(J,Q){let Z=J.split(`
`),K=[],$=Math.max(Q-6,0),W=Math.min(Q+6,Z.length);for(let X=$;X<W;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${Z[X]}`)}return K.join(`
`)}var aX=new g0;function qD(J){o0._getMatrix(aX,o0.workingColorSpace,J);let Q=`mat3( ${aX.elements.map((Z)=>Z.toFixed(4))} )`;switch(o0.getTransfer(J)){case _K:return[Q,"LinearTransferOETF"];case D8:return[Q,"sRGBTransferOETF"];default:return y0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function rX(J,Q,Z){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(K&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return Z.toUpperCase()+`

`+W+`

`+DD(J.getShaderSource(Q),Y)}else return W}function ED(J,Q){let Z=qD(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}var FD={[hZ]:"Linear",[xZ]:"Reinhard",[gZ]:"Cineon",[pZ]:"ACESFilmic",[dZ]:"AgX",[uZ]:"Neutral",[mZ]:"Custom"};function OD(J,Q){let Z=FD[Q];if(Z===void 0)return y0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var TQ=new x;function RD(){o0.getLuminanceCoefficients(TQ);let J=TQ.x.toFixed(4),Q=TQ.y.toFixed(4),Z=TQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function MD(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(O7).join(`
`)}function LD(J){let Q=[];for(let Z in J){let K=J[Z];if(K===!1)continue;Q.push("#define "+Z+" "+K)}return Q.join(`
`)}function ID(J,Q){let Z={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let $=0;$<K;$++){let W=J.getActiveAttrib(Q,$),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;Z[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return Z}function O7(J){return J!==""}function tX(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function eX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var VD=/^[ \t]*#include +<([\w\d./]+)>/gm;function D$(J){return J.replace(VD,CD)}var BD=new Map;function CD(J,Q){let Z=c0[Q];if(Z===void 0){let K=BD.get(Q);if(K!==void 0)Z=c0[K],y0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return D$(Z)}var AD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function JY(J){return J.replace(AD,zD)}function zD(J,Q,Z,K){let $="";for(let W=parseInt(Q);W<parseInt(Z);W++)$+=K.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return $}function QY(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var PD={[Q7]:"SHADOWMAP_TYPE_PCF",[B6]:"SHADOWMAP_TYPE_VSM"};function kD(J){return PD[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _D={[z6]:"ENVMAP_TYPE_CUBE",[yJ]:"ENVMAP_TYPE_CUBE",[K7]:"ENVMAP_TYPE_CUBE_UV"};function TD(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return _D[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var wD={[yJ]:"ENVMAP_MODE_REFRACTION"};function SD(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return wD[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jD={[GX]:"ENVMAP_BLENDING_MULTIPLY",[NX]:"ENVMAP_BLENDING_MIX",[DX]:"ENVMAP_BLENDING_ADD"};function vD(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return jD[J.combine]||"ENVMAP_BLENDING_NONE"}function yD(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:K,maxMip:Z}}function bD(J,Q,Z,K){let $=J.getContext(),W=Z.defines,X=Z.vertexShader,Y=Z.fragmentShader,H=kD(Z),U=TD(Z),D=SD(Z),G=vD(Z),N=yD(Z),E=MD(Z),O=LD(W),L=$.createProgram(),F,q,R=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(O7).join(`
`),F.length>0)F+=`
`;if(q=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(O7).join(`
`),q.length>0)q+=`
`}else F=[QY(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+D:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexNormals?"#define HAS_NORMAL":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(O7).join(`
`),q=[QY(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+U:"",Z.envMap?"#define "+D:"",Z.envMap?"#define "+G:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.retroreflection?"#define USE_RETROREFLECTION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor?"#define USE_COLOR":"",Z.vertexAlphas||Z.batchingColor?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==A9?"#define TONE_MAPPING":"",Z.toneMapping!==A9?c0.tonemapping_pars_fragment:"",Z.toneMapping!==A9?OD("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",c0.colorspace_pars_fragment,ED("linearToOutputTexel",Z.outputColorSpace),RD(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(O7).join(`
`);if(X=D$(X),X=tX(X,Z),X=eX(X,Z),Y=D$(Y),Y=tX(Y,Z),Y=eX(Y,Z),X=JY(X),Y=JY(Y),Z.isRawShaderMaterial!==!0)R=`#version 300 es
`,F=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,q=["#define varying in",Z.glslVersion===TK?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===TK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let k=R+F+X,V=R+q+Y,A=oX($,$.VERTEX_SHADER,k),P=oX($,$.FRAGMENT_SHADER,V);if($.attachShader(L,A),$.attachShader(L,P),Z.index0AttributeName!==void 0)$.bindAttribLocation(L,0,Z.index0AttributeName);else if(Z.hasPositionAttribute===!0)$.bindAttribLocation(L,0,"position");$.linkProgram(L);function _(j){if(J.debug.checkShaderErrors){let y=$.getProgramInfoLog(L)||"",m=$.getShaderInfoLog(A)||"",T=$.getShaderInfoLog(P)||"",w=y.trim(),n=m.trim(),u=T.trim(),$0=!0,i=!0;if($.getProgramParameter(L,$.LINK_STATUS)===!1)if($0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError($,L,A,P);else{let Z0=rX($,A,"vertex"),X0=rX($,P,"fragment");f0("WebGLProgram: Shader Error "+$.getError()+" - VALIDATE_STATUS "+$.getProgramParameter(L,$.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+w+`
`+Z0+`
`+X0)}else if(w!=="")y0("WebGLProgram: Program Info Log:",w);else if(n===""||u==="")i=!1;if(i)j.diagnostics={runnable:$0,programLog:w,vertexShader:{log:n,prefix:F},fragmentShader:{log:u,prefix:q}}}$.deleteShader(A),$.deleteShader(P),I=new R7($,L),C=ID($,L)}let I;this.getUniforms=function(){if(I===void 0)_(this);return I};let C;this.getAttributes=function(){if(C===void 0)_(this);return C};let p=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(p===!1)p=$.getProgramParameter(L,GD);return p},this.destroy=function(){K.releaseStatesOfProgram(this),$.deleteProgram(L),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=ND++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=A,this.fragmentShader=P,this}var fD=0;class FY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,Z){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new OY(J),Q.set(J,Z);return Z}}class OY{constructor(J){this.id=fD++,this.code=J,this.usedTimes=0}}function hD(J){return J===xJ||J===YQ||J===HQ}function xD(J,Q,Z,K,$,W){let X=new qQ,Y=new FY,H=new Set,U=[],D=new Map,G=K.logarithmicDepthBuffer,N=K.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(I){if(H.add(I),I===0)return"uv";return`uv${I}`}function L(I,C,p,j,y,m){let T=j.fog,w=y.geometry,n=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?j.environment:null,u=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,$0=Q.get(I.envMap||n,u),i=!!$0&&$0.mapping===K7?$0.image.height:null,Z0=E[I.type];if(I.precision!==null){if(N=K.getMaxPrecision(I.precision),N!==I.precision)y0("WebGLProgram.getParameters:",I.precision,"not supported, using",N,"instead.")}let X0=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,S0=X0!==void 0?X0.length:0,T0=0;if(w.morphAttributes.position!==void 0)T0=1;if(w.morphAttributes.normal!==void 0)T0=2;if(w.morphAttributes.color!==void 0)T0=3;let n0,u0,S,g;if(Z0){let q8=n8[Z0];n0=q8.vertexShader,u0=q8.fragmentShader}else{n0=I.vertexShader,u0=I.fragmentShader;let q8=Y.getVertexShaderStage(I),K8=Y.getFragmentShaderStage(I);Y.update(I,q8,K8),S=q8.id,g=K8.id}let d=J.getRenderTarget(),a=J.state.buffers.depth.getReversed(),Q0=y.isInstancedMesh===!0,r=y.isBatchedMesh===!0,z0=!!I.map,q0=!!I.matcap,b0=!!$0,m0=!!I.aoMap,h0=!!I.lightMap,i0=!!I.bumpMap&&I.wireframe===!1,r0=!!I.normalMap,V8=!!I.displacementMap,F8=!!I.emissiveMap,O8=!!I.metalnessMap,v=!!I.roughnessMap,A8=I.anisotropy>0,J8=I.clearcoat>0,G8=I.dispersion>0,z=I.retroreflectivity>0,M=I.iridescence>0,b=I.sheen>0,s=I.transmission>0,W0=A8&&!!I.anisotropyMap,G0=J8&&!!I.clearcoatMap,E0=J8&&!!I.clearcoatNormalMap,t=J8&&!!I.clearcoatRoughnessMap,K0=M&&!!I.iridescenceMap,R0=M&&!!I.iridescenceThicknessMap,A0=b&&!!I.sheenColorMap,N0=b&&!!I.sheenRoughnessMap,U0=!!I.specularMap,j0=!!I.specularColorMap,v0=!!I.specularIntensityMap,Q8=s&&!!I.transmissionMap,h=s&&!!I.thicknessMap,F0=!!I.gradientMap,J0=!!I.alphaMap,O0=I.alphaTest>0,V0=!!I.alphaHash,Y0=!!I.extensions,M0=A9;if(I.toneMapped){if(d===null||d.isXRRenderTarget===!0)M0=J.toneMapping}let d0={shaderID:Z0,shaderType:I.type,shaderName:I.name,vertexShader:n0,fragmentShader:u0,defines:I.defines,customVertexShaderID:S,customFragmentShaderID:g,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:N,batching:r,batchingColor:r&&y._colorsTexture!==null,instancing:Q0,instancingColor:Q0&&y.instanceColor!==null,instancingMorph:Q0&&y.morphTexture!==null,outputColorSpace:d===null?J.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:o0.workingColorSpace,alphaToCoverage:!!I.alphaToCoverage,map:z0,matcap:q0,envMap:b0,envMapMode:b0&&$0.mapping,envMapCubeUVHeight:i,aoMap:m0,lightMap:h0,bumpMap:i0,normalMap:r0,displacementMap:V8,emissiveMap:F8,normalMapObjectSpace:r0&&I.normalMapType===CX,normalMapTangentSpace:r0&&I.normalMapType===PK,packedNormalMap:r0&&I.normalMapType===PK&&hD(I.normalMap.format),metalnessMap:O8,roughnessMap:v,anisotropy:A8,anisotropyMap:W0,clearcoat:J8,clearcoatMap:G0,clearcoatNormalMap:E0,clearcoatRoughnessMap:t,dispersion:G8,retroreflection:z,iridescence:M,iridescenceMap:K0,iridescenceThicknessMap:R0,sheen:b,sheenColorMap:A0,sheenRoughnessMap:N0,specularMap:U0,specularColorMap:j0,specularIntensityMap:v0,transmission:s,transmissionMap:Q8,thicknessMap:h,gradientMap:F0,opaque:I.transparent===!1&&I.blending===Z7&&I.alphaToCoverage===!1,alphaMap:J0,alphaTest:O0,alphaHash:V0,combine:I.combine,mapUv:z0&&O(I.map.channel),aoMapUv:m0&&O(I.aoMap.channel),lightMapUv:h0&&O(I.lightMap.channel),bumpMapUv:i0&&O(I.bumpMap.channel),normalMapUv:r0&&O(I.normalMap.channel),displacementMapUv:V8&&O(I.displacementMap.channel),emissiveMapUv:F8&&O(I.emissiveMap.channel),metalnessMapUv:O8&&O(I.metalnessMap.channel),roughnessMapUv:v&&O(I.roughnessMap.channel),anisotropyMapUv:W0&&O(I.anisotropyMap.channel),clearcoatMapUv:G0&&O(I.clearcoatMap.channel),clearcoatNormalMapUv:E0&&O(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:t&&O(I.clearcoatRoughnessMap.channel),iridescenceMapUv:K0&&O(I.iridescenceMap.channel),iridescenceThicknessMapUv:R0&&O(I.iridescenceThicknessMap.channel),sheenColorMapUv:A0&&O(I.sheenColorMap.channel),sheenRoughnessMapUv:N0&&O(I.sheenRoughnessMap.channel),specularMapUv:U0&&O(I.specularMap.channel),specularColorMapUv:j0&&O(I.specularColorMap.channel),specularIntensityMapUv:v0&&O(I.specularIntensityMap.channel),transmissionMapUv:Q8&&O(I.transmissionMap.channel),thicknessMapUv:h&&O(I.thicknessMap.channel),alphaMapUv:J0&&O(I.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(r0||A8),vertexNormals:!!w.attributes.normal,vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!w.attributes.uv&&(z0||J0),fog:!!T,useFog:I.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:I.wireframe===!1&&(I.flatShading===!0||w.attributes.normal===void 0&&r0===!1&&(I.isMeshLambertMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isMeshPhysicalMaterial)),sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:G,reversedDepthBuffer:a,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:S0,morphTextureStride:T0,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:m.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:I.dithering,shadowMapEnabled:J.shadowMap.enabled&&p.length>0,shadowMapType:J.shadowMap.type,toneMapping:M0,decodeVideoTexture:z0&&I.map.isVideoTexture===!0&&o0.getTransfer(I.map.colorSpace)===D8,decodeVideoTextureEmissive:F8&&I.emissiveMap.isVideoTexture===!0&&o0.getTransfer(I.emissiveMap.colorSpace)===D8,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===b9,flipSided:I.side===o8,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Y0&&I.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y0&&I.extensions.multiDraw===!0||r)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return d0.vertexUv1s=H.has(1),d0.vertexUv2s=H.has(2),d0.vertexUv3s=H.has(3),H.clear(),d0}function F(I){let C=[];if(I.shaderID)C.push(I.shaderID);else C.push(I.customVertexShaderID),C.push(I.customFragmentShaderID);if(I.defines!==void 0)for(let p in I.defines)C.push(p),C.push(I.defines[p]);if(I.isRawShaderMaterial===!1)q(C,I),R(C,I),C.push(J.outputColorSpace);return C.push(I.customProgramCacheKey),C.join()}function q(I,C){I.push(C.precision),I.push(C.outputColorSpace),I.push(C.envMapMode),I.push(C.envMapCubeUVHeight),I.push(C.mapUv),I.push(C.alphaMapUv),I.push(C.lightMapUv),I.push(C.aoMapUv),I.push(C.bumpMapUv),I.push(C.normalMapUv),I.push(C.displacementMapUv),I.push(C.emissiveMapUv),I.push(C.metalnessMapUv),I.push(C.roughnessMapUv),I.push(C.anisotropyMapUv),I.push(C.clearcoatMapUv),I.push(C.clearcoatNormalMapUv),I.push(C.clearcoatRoughnessMapUv),I.push(C.iridescenceMapUv),I.push(C.iridescenceThicknessMapUv),I.push(C.sheenColorMapUv),I.push(C.sheenRoughnessMapUv),I.push(C.specularMapUv),I.push(C.specularColorMapUv),I.push(C.specularIntensityMapUv),I.push(C.transmissionMapUv),I.push(C.thicknessMapUv),I.push(C.combine),I.push(C.fogExp2),I.push(C.sizeAttenuation),I.push(C.morphTargetsCount),I.push(C.morphAttributeCount),I.push(C.numSunLights),I.push(C.numDirLights),I.push(C.numPointLights),I.push(C.numSpotLights),I.push(C.numSpotLightMaps),I.push(C.numHemiLights),I.push(C.numRectAreaLights),I.push(C.numSunLightShadows),I.push(C.numDirLightShadows),I.push(C.numPointLightShadows),I.push(C.numSpotLightShadows),I.push(C.numSpotLightShadowsWithMaps),I.push(C.numLightProbes),I.push(C.shadowMapType),I.push(C.toneMapping),I.push(C.numClippingPlanes),I.push(C.numClipIntersection),I.push(C.depthPacking)}function R(I,C){if(X.disableAll(),C.instancing)X.enable(0);if(C.instancingColor)X.enable(1);if(C.instancingMorph)X.enable(2);if(C.matcap)X.enable(3);if(C.envMap)X.enable(4);if(C.normalMapObjectSpace)X.enable(5);if(C.normalMapTangentSpace)X.enable(6);if(C.clearcoat)X.enable(7);if(C.iridescence)X.enable(8);if(C.alphaTest)X.enable(9);if(C.vertexColors)X.enable(10);if(C.vertexAlphas)X.enable(11);if(C.vertexUv1s)X.enable(12);if(C.vertexUv2s)X.enable(13);if(C.vertexUv3s)X.enable(14);if(C.vertexTangents)X.enable(15);if(C.anisotropy)X.enable(16);if(C.alphaHash)X.enable(17);if(C.batching)X.enable(18);if(C.dispersion)X.enable(19);if(C.retroreflection)X.enable(24);if(C.batchingColor)X.enable(20);if(C.gradientMap)X.enable(21);if(C.packedNormalMap)X.enable(22);if(C.vertexNormals)X.enable(23);if(I.push(X.mask),X.disableAll(),C.fog)X.enable(0);if(C.useFog)X.enable(1);if(C.flatShading)X.enable(2);if(C.logarithmicDepthBuffer)X.enable(3);if(C.reversedDepthBuffer)X.enable(4);if(C.skinning)X.enable(5);if(C.morphTargets)X.enable(6);if(C.morphNormals)X.enable(7);if(C.morphColors)X.enable(8);if(C.premultipliedAlpha)X.enable(9);if(C.shadowMapEnabled)X.enable(10);if(C.doubleSided)X.enable(11);if(C.flipSided)X.enable(12);if(C.useDepthPacking)X.enable(13);if(C.dithering)X.enable(14);if(C.transmission)X.enable(15);if(C.sheen)X.enable(16);if(C.opaque)X.enable(17);if(C.pointsUvs)X.enable(18);if(C.decodeVideoTexture)X.enable(19);if(C.decodeVideoTextureEmissive)X.enable(20);if(C.alphaToCoverage)X.enable(21);if(C.numLightProbeGrids>0)X.enable(22);if(C.hasPositionAttribute)X.enable(23);I.push(X.mask)}function k(I){let C=E[I.type],p;if(C){let j=n8[C];p=D7.clone(j.uniforms)}else p=I.uniforms;return p}function V(I,C){let p=D.get(C);if(p!==void 0)++p.usedTimes;else p=new bD(J,C,I,$),U.push(p),D.set(C,p);return p}function A(I){if(--I.usedTimes===0){let C=U.indexOf(I);U[C]=U[U.length-1],U.pop(),D.delete(I.cacheKey),I.destroy()}}function P(I){Y.remove(I)}function _(){Y.dispose()}return{getParameters:L,getProgramCacheKey:F,getUniforms:k,acquireProgram:V,releaseProgram:A,releaseShaderCache:P,programs:U,dispose:_}}function gD(){let J=new WeakMap;function Q(X){return J.has(X)}function Z(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function $(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:Z,remove:K,update:$,dispose:W}}function pD(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function ZY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function KY(){let J=[],Q=0,Z=[],K=[],$=[];function W(){Q=0,Z.length=0,K.length=0,$.length=0}function X(N){let E=0;if(N.isInstancedMesh)E+=2;if(N.isSkinnedMesh)E+=1;return E}function Y(N,E,O,L,F,q){let R=J[Q];if(R===void 0)R={id:N.id,object:N,geometry:E,material:O,materialVariant:X(N),groupOrder:L,renderOrder:N.renderOrder,z:F,group:q},J[Q]=R;else R.id=N.id,R.object=N,R.geometry=E,R.material=O,R.materialVariant=X(N),R.groupOrder=L,R.renderOrder=N.renderOrder,R.z=F,R.group=q;return Q++,R}function H(N,E,O,L,F,q,R){if(R.reversedDepth===!0)F=-F;let k=Y(N,E,O,L,F,q);if(O.transmission>0)K.push(k);else if(O.transparent===!0)$.push(k);else Z.push(k)}function U(N,E,O,L,F,q){let R=Y(N,E,O,L,F,q);if(O.transmission>0)K.unshift(R);else if(O.transparent===!0)$.unshift(R);else Z.unshift(R)}function D(N,E){if(Z.length>1)Z.sort(N||pD);if(K.length>1)K.sort(E||ZY);if($.length>1)$.sort(E||ZY)}function G(){for(let N=Q,E=J.length;N<E;N++){let O=J[N];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Z,transmissive:K,transparent:$,init:W,push:H,unshift:U,finish:G,sort:D}}function mD(){let J=new WeakMap;function Q(K,$){let W=J.get(K),X;if(W===void 0)X=new KY,J.set(K,[X]);else if($>=W.length)X=new KY,W.push(X);else X=W[$];return X}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function dD(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={direction:new x,color:new e0};break;case"SpotLight":Z={position:new x,direction:new x,color:new e0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new x,color:new e0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new x,skyColor:new e0,groundColor:new e0};break;case"RectAreaLight":Z={color:new e0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=Z,Z}}}function uD(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var lD=0;function cD(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function nD(J){let Q=new dD,Z=uD(),K={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)K.probe.push(new x);let $=new x,W=new M8,X=new M8;function Y(U){let D=0,G=0,N=0;for(let y=0;y<9;y++)K.probe[y].set(0,0,0);let E=0,O=0,L=0,F=0,q=0,R=0,k=0,V=0,A=0,P=0,_=0,I=0,C=0,p=0;U.sort(cD);for(let y=0,m=U.length;y<m;y++){let T=U[y],w=T.color,n=T.intensity,u=T.distance,$0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===xJ)$0=T.shadow.map.texture;else $0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)D+=w.r*n,G+=w.g*n,N+=w.b*n;else if(T.isLightProbe){for(let i=0;i<9;i++)K.probe[i].addScaledVector(T.sh.coefficients[i],n);p++}else if(T.isSunLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize.copy(Z0.mapSize).multiply(Z0.getFrameExtents()),K.sunShadow[O]=X0,K.sunShadowMap[O]=$0;let S0=Z0.getViewportCount();for(let T0=0;T0<S0;T0++)K.sunShadowMatrix[L+T0]=Z0.getMatrix(T0),K.sunShadowCascade[L+T0]=Z0._cascadeData[T0];L+=S0,O++}K.sun[E]=i,E++}else if(T.isDirectionalLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.directionalShadow[F]=X0,K.directionalShadowMap[F]=$0,K.directionalShadowMatrix[F]=T.shadow.matrix,A++}K.directional[F]=i,F++}else if(T.isSpotLight){let i=Q.get(T);i.position.setFromMatrixPosition(T.matrixWorld),i.color.copy(w).multiplyScalar(n),i.distance=u,i.coneCos=Math.cos(T.angle),i.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),i.decay=T.decay,K.spot[R]=i;let Z0=T.shadow;if(T.map){if(K.spotLightMap[I]=T.map,I++,Z0.updateMatrices(T),T.castShadow)C++}if(K.spotLightMatrix[R]=Z0.matrix,T.castShadow){let X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.spotShadow[R]=X0,K.spotShadowMap[R]=$0,_++}R++}else if(T.isRectAreaLight){let i=Q.get(T);i.color.copy(w).multiplyScalar(n),i.halfWidth.set(T.width*0.5,0,0),i.halfHeight.set(0,T.height*0.5,0),K.rectArea[k]=i,k++}else if(T.isPointLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),i.distance=T.distance,i.decay=T.decay,T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,X0.shadowCameraNear=Z0.camera.near,X0.shadowCameraFar=Z0.camera.far,K.pointShadow[q]=X0,K.pointShadowMap[q]=$0,K.pointShadowMatrix[q]=T.shadow.matrix,P++}K.point[q]=i,q++}else if(T.isHemisphereLight){let i=Q.get(T);i.skyColor.copy(T.color).multiplyScalar(n),i.groundColor.copy(T.groundColor).multiplyScalar(n),K.hemi[V]=i,V++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=D0.LTC_FLOAT_1,K.rectAreaLTC2=D0.LTC_FLOAT_2;else K.rectAreaLTC1=D0.LTC_HALF_1,K.rectAreaLTC2=D0.LTC_HALF_2;K.ambient[0]=D,K.ambient[1]=G,K.ambient[2]=N;let j=K.hash;if(j.sunLength!==E||j.directionalLength!==F||j.pointLength!==q||j.spotLength!==R||j.rectAreaLength!==k||j.hemiLength!==V||j.numSunShadows!==O||j.numDirectionalShadows!==A||j.numPointShadows!==P||j.numSpotShadows!==_||j.numSpotMaps!==I||j.numLightProbes!==p)K.sun.length=E,K.directional.length=F,K.spot.length=R,K.rectArea.length=k,K.point.length=q,K.hemi.length=V,K.sunShadow.length=O,K.sunShadowMap.length=O,K.sunShadowMatrix.length=L,K.sunShadowCascade.length=L,K.directionalShadow.length=A,K.directionalShadowMap.length=A,K.directionalShadowMatrix.length=A,K.pointShadow.length=P,K.pointShadowMap.length=P,K.pointShadowMatrix.length=P,K.spotShadow.length=_,K.spotShadowMap.length=_,K.spotLightMatrix.length=_+I-C,K.spotLightMap.length=I,K.numSpotLightShadowsWithMaps=C,K.numLightProbes=p,j.sunLength=E,j.directionalLength=F,j.pointLength=q,j.spotLength=R,j.rectAreaLength=k,j.hemiLength=V,j.numSunShadows=O,j.numDirectionalShadows=A,j.numPointShadows=P,j.numSpotShadows=_,j.numSpotMaps=I,j.numLightProbes=p,K.version=lD++}function H(U,D){let G=0,N=0,E=0,O=0,L=0,F=0,q=D.matrixWorldInverse;for(let R=0,k=U.length;R<k;R++){let V=U[R];if(V.isSunLight){let A=K.sun[G];A.direction.setFromMatrixPosition(V.matrixWorld),A.direction.transformDirection(q),G++}else if(V.isDirectionalLight){let A=K.directional[N];A.direction.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(q),N++}else if(V.isSpotLight){let A=K.spot[O];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(q),A.direction.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(q),O++}else if(V.isRectAreaLight){let A=K.rectArea[L];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(q),X.identity(),W.copy(V.matrixWorld),W.premultiply(q),X.extractRotation(W),A.halfWidth.set(V.width*0.5,0,0),A.halfHeight.set(0,V.height*0.5,0),A.halfWidth.applyMatrix4(X),A.halfHeight.applyMatrix4(X),L++}else if(V.isPointLight){let A=K.point[E];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(q),E++}else if(V.isHemisphereLight){let A=K.hemi[F];A.direction.setFromMatrixPosition(V.matrixWorld),A.direction.transformDirection(q),F++}}}return{setup:Y,setupView:H,state:K}}function $Y(J){let Q=new nD(J),Z=[],K=[],$=[];function W(N){G.camera=N,Z.length=0,K.length=0,$.length=0}function X(N){Z.push(N)}function Y(N){K.push(N)}function H(N){$.push(N)}function U(){Q.setup(Z)}function D(N){Q.setupView(Z,N)}let G={lightsArray:Z,shadowsArray:K,lightProbeGridArray:$,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:G,setupLights:U,setupLightsView:D,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function sD(J){let Q=new WeakMap;function Z($,W=0){let X=Q.get($),Y;if(X===void 0)Y=new $Y(J),Q.set($,[Y]);else if(W>=X.length)Y=new $Y(J),X.push(Y);else Y=X[W];return Y}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var iD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oD=`uniform sampler2D shadow_pass;
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
}`,aD=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],rD=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],WY=new M8,F7=new x,U$=new x;function tD(J,Q,Z){let K=new MQ,$=new x0,W=new x0,X=new Y8,Y=new pK,H=new mK,U={},D=Z.maxTextureSize,G={[C6]:o8,[o8]:C6,[b9]:b9},N=new t8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new x0},radius:{value:4}},vertexShader:iD,fragmentShader:oD}),E=N.clone();E.defines.HORIZONTAL_PASS=1;let O=new F9;O.setAttribute("position",new q9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new W9(O,N),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q7;let q=this.type;this.render=function(P,_,I){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(P.length===0)return;if(this.type===xW)y0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Q7;let C=J.getRenderTarget(),p=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),y=J.state;if(y.setBlending(f9),y.buffers.depth.getReversed()===!0)y.buffers.color.setClear(0,0,0,0);else y.buffers.color.setClear(1,1,1,1);y.buffers.depth.setTest(!0),y.setScissorTest(!1);let m=q!==this.type;if(m)_.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((w)=>w.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,w=P.length;T<w;T++){let n=P[T],u=n.shadow;if(u===void 0){y0("WebGLShadowMap:",n,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;$.copy(u.mapSize);let $0=u.getFrameExtents();if($.multiply($0),W.copy(u.mapSize),$.x>D||$.y>D){if($.x>D)W.x=Math.floor(D/$0.x),$.x=W.x*$0.x,u.mapSize.x=W.x;if($.y>D)W.y=Math.floor(D/$0.y),$.y=W.y*$0.y,u.mapSize.y=W.y}let i=J.state.buffers.depth.getReversed();if(u.camera._reversedDepth=i,u.map===null||m===!0){if(u.map!==null){if(u.map.depthTexture!==null)u.map.depthTexture.dispose(),u.map.depthTexture=null;u.map.dispose()}if(this.type===B6){if(n.isPointLight){y0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}u.map=new $9($.x,$.y,{format:xJ,type:h9,minFilter:a8,magFilter:a8,generateMipmaps:!1}),u.map.texture.name=n.name+".shadowMap",u.map.depthTexture=new pJ($.x,$.y,WJ),u.map.depthTexture.name=n.name+".shadowMapDepth",u.map.depthTexture.format=fJ,u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=VJ,u.map.depthTexture.magFilter=VJ}else{if(n.isPointLight)u.map=new q$($.x),u.map.depthTexture=new hK($.x,BJ);else u.map=new $9($.x,$.y),u.map.depthTexture=new pJ($.x,$.y,BJ);if(u.map.depthTexture.name=n.name+".shadowMap",u.map.depthTexture.format=fJ,this.type===Q7)u.map.depthTexture.compareFunction=i?GQ:UQ,u.map.depthTexture.minFilter=a8,u.map.depthTexture.magFilter=a8;else u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=VJ,u.map.depthTexture.magFilter=VJ}u.camera.updateProjectionMatrix()}if(u.map.isWebGLCubeRenderTarget!==!0&&(u.map.width!==$.x||u.map.height!==$.y))u.map.setSize($.x,$.y);let Z0=u.map.isWebGLCubeRenderTarget?6:u.getViewportCount();if(n.isPointLight!==!0)u.updateMatrices(n,I);for(let X0=0;X0<Z0;X0++){let S0=u.getCamera(X0);if(n.isPointLight){let{camera:T0,matrix:n0}=u,u0=n.distance||T0.far;if(u0!==T0.far)T0.far=u0,T0.updateProjectionMatrix();F7.setFromMatrixPosition(n.matrixWorld),T0.position.copy(F7),U$.copy(T0.position),U$.add(aD[X0]),T0.up.copy(rD[X0]),T0.lookAt(U$),T0.updateMatrixWorld(),n0.makeTranslation(-F7.x,-F7.y,-F7.z),WY.multiplyMatrices(T0.projectionMatrix,T0.matrixWorldInverse),u._frustum.setFromProjectionMatrix(WY,T0.coordinateSystem,T0.reversedDepth)}if(u.map.isWebGLCubeRenderTarget)J.setRenderTarget(u.map,X0),J.clear();else{if(X0===0)J.setRenderTarget(u.map),J.clear();let T0=u.getViewport(X0);X.set(W.x*T0.x,W.y*T0.y,W.x*T0.z,W.y*T0.w),y.viewport(X)}K=u.getFrustum(X0),V(_,I,S0,n,this.type)}if(u.isPointLightShadow!==!0&&this.type===B6)R(u,I);u.needsUpdate=!1}q=this.type,F.needsUpdate=!1,J.setRenderTarget(C,p,j)};function R(P,_){let I=Q.update(L);if(N.defines.VSM_SAMPLES!==P.blurSamples)N.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,N.needsUpdate=!0,E.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new $9($.x,$.y,{format:xJ,type:h9});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);N.uniforms.shadow_pass.value=P.map.depthTexture,N.uniforms.resolution.value.set(P.map.width,P.map.height),N.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(_,null,I,N,L,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value.set(P.map.width,P.map.height),E.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(_,null,I,E,L,null)}function k(P,_,I,C){let p=null,j=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)p=j;else if(p=I.isPointLight===!0?H:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let y=p.uuid,m=_.uuid,T=U[y];if(T===void 0)T={},U[y]=T;let w=T[m];if(w===void 0)w=p.clone(),T[m]=w,_.addEventListener("dispose",A);p=w}if(p.visible=_.visible,p.wireframe=_.wireframe,C===B6)p.side=_.shadowSide!==null?_.shadowSide:_.side;else p.side=_.shadowSide!==null?_.shadowSide:G[_.side];if(p.alphaMap=_.alphaMap,p.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,p.map=_.map,p.clipShadows=_.clipShadows,p.clippingPlanes=_.clippingPlanes,p.clipIntersection=_.clipIntersection,p.displacementMap=_.displacementMap,p.displacementScale=_.displacementScale,p.displacementBias=_.displacementBias,p.wireframeLinewidth=_.wireframeLinewidth,p.linewidth=_.linewidth,I.isPointLight===!0&&p.isMeshDistanceMaterial===!0){let y=J.properties.get(p);y.light=I}return p}function V(P,_,I,C,p){if(P.visible===!1)return;if(P.layers.test(_.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&p===B6)&&(!P.frustumCulled||P.intersectsFrustum(K))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);let m=Q.update(P),T=P.material;if(Array.isArray(T)){let w=m.groups;for(let n=0,u=w.length;n<u;n++){let $0=w[n],i=T[$0.materialIndex];if(i&&i.visible){let Z0=k(P,i,C,p);P.onBeforeShadow(J,P,_,I,m,Z0,$0),J.renderBufferDirect(I,null,m,Z0,P,$0),P.onAfterShadow(J,P,_,I,m,Z0,$0)}}}else if(T.visible){let w=k(P,T,C,p);P.onBeforeShadow(J,P,_,I,m,w,null),J.renderBufferDirect(I,null,m,w,P,null),P.onAfterShadow(J,P,_,I,m,w,null)}}}let y=P.children;for(let m=0,T=y.length;m<T;m++)V(y[m],_,I,C,p)}function A(P){P.target.removeEventListener("dispose",A);for(let I in U){let C=U[I],p=P.target.uuid;if(p in C)C[p].dispose(),delete C[p]}}}function eD(J,Q){function Z(){let h=!1,F0=new Y8,J0=null,O0=new Y8(0,0,0,0);return{setMask:function(V0){if(J0!==V0&&!h)J.colorMask(V0,V0,V0,V0),J0=V0},setLocked:function(V0){h=V0},setClear:function(V0,Y0,M0,d0,q8){if(q8===!0)V0*=d0,Y0*=d0,M0*=d0;if(F0.set(V0,Y0,M0,d0),O0.equals(F0)===!1)J.clearColor(V0,Y0,M0,d0),O0.copy(F0)},reset:function(){h=!1,J0=null,O0.set(-1,0,0,0)}}}function K(){let h=!1,F0=!1,J0=null,O0=null,V0=null;return{setReversed:function(Y0){if(F0!==Y0){let M0=Q.get("EXT_clip_control");if(Y0)M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.ZERO_TO_ONE_EXT);else M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.NEGATIVE_ONE_TO_ONE_EXT);F0=Y0;let d0=V0;V0=null,this.setClear(d0)}},getReversed:function(){return F0},setTest:function(Y0){if(Y0)d(J.DEPTH_TEST);else a(J.DEPTH_TEST)},setMask:function(Y0){if(J0!==Y0&&!h)J.depthMask(Y0),J0=Y0},setFunc:function(Y0){if(F0)Y0=yX[Y0];if(O0!==Y0){switch(Y0){case KX:J.depthFunc(J.NEVER);break;case $X:J.depthFunc(J.ALWAYS);break;case WX:J.depthFunc(J.LESS);break;case fZ:J.depthFunc(J.LEQUAL);break;case XX:J.depthFunc(J.EQUAL);break;case YX:J.depthFunc(J.GEQUAL);break;case HX:J.depthFunc(J.GREATER);break;case UX:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}O0=Y0}},setLocked:function(Y0){h=Y0},setClear:function(Y0){if(V0!==Y0){if(V0=Y0,F0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){h=!1,J0=null,O0=null,V0=null,F0=!1}}}function $(){let h=!1,F0=null,J0=null,O0=null,V0=null,Y0=null,M0=null,d0=null,q8=null;return{setTest:function(K8){if(!h)if(K8)d(J.STENCIL_TEST);else a(J.STENCIL_TEST)},setMask:function(K8){if(F0!==K8&&!h)J.stencilMask(K8),F0=K8},setFunc:function(K8,S9,r9){if(J0!==K8||O0!==S9||V0!==r9)J.stencilFunc(K8,S9,r9),J0=K8,O0=S9,V0=r9},setOp:function(K8,S9,r9){if(Y0!==K8||M0!==S9||d0!==r9)J.stencilOp(K8,S9,r9),Y0=K8,M0=S9,d0=r9},setLocked:function(K8){h=K8},setClear:function(K8){if(q8!==K8)J.clearStencil(K8),q8=K8},reset:function(){h=!1,F0=null,J0=null,O0=null,V0=null,Y0=null,M0=null,d0=null,q8=null}}}let W=new Z,X=new K,Y=new $,H=new WeakMap,U=new WeakMap,D={},G={},N={},E=new WeakMap,O=[],L=null,F=!1,q=null,R=null,k=null,V=null,A=null,P=null,_=null,I=new e0(0,0,0),C=0,p=!1,j=null,y=null,m=null,T=null,w=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,$0=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)$0=parseFloat(/^WebGL (\d)/.exec(i)[1]),u=$0>=1;else if(i.indexOf("OpenGL ES")!==-1)$0=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),u=$0>=2;let Z0=null,X0={},S0=J.getParameter(J.SCISSOR_BOX),T0=J.getParameter(J.VIEWPORT),n0=new Y8().fromArray(S0),u0=new Y8().fromArray(T0);function S(h,F0,J0,O0){let V0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(h,Y0),J.texParameteri(h,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(h,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let M0=0;M0<J0;M0++)if(h===J.TEXTURE_3D||h===J.TEXTURE_2D_ARRAY)J.texImage3D(F0,0,J.RGBA,1,1,O0,0,J.RGBA,J.UNSIGNED_BYTE,V0);else J.texImage2D(F0+M0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,V0);return Y0}let g={};g[J.TEXTURE_2D]=S(J.TEXTURE_2D,J.TEXTURE_2D,1),g[J.TEXTURE_CUBE_MAP]=S(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),g[J.TEXTURE_2D_ARRAY]=S(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),g[J.TEXTURE_3D]=S(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),d(J.DEPTH_TEST),X.setFunc(fZ),i0(!1),r0(jZ),d(J.CULL_FACE),m0(f9);function d(h){if(D[h]!==!0)J.enable(h),D[h]=!0}function a(h){if(D[h]!==!1)J.disable(h),D[h]=!1}function Q0(h,F0){if(N[h]!==F0){if(J.bindFramebuffer(h,F0),N[h]=F0,h===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=F0;if(h===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=F0;return!0}return!1}function r(h,F0){let J0=O,O0=!1;if(h){if(J0=E.get(F0),J0===void 0)J0=[],E.set(F0,J0);let V0=h.textures;if(J0.length!==V0.length||J0[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,M0=V0.length;Y0<M0;Y0++)J0[Y0]=J.COLOR_ATTACHMENT0+Y0;J0.length=V0.length,O0=!0}}else if(J0[0]!==J.BACK)J0[0]=J.BACK,O0=!0;if(O0)J.drawBuffers(J0)}function z0(h){if(L!==h)return J.useProgram(h),L=h,!0;return!1}let q0={[A6]:J.FUNC_ADD,[gW]:J.FUNC_SUBTRACT,[pW]:J.FUNC_REVERSE_SUBTRACT};q0[mW]=J.MIN,q0[t7]=J.MAX;let b0={[dW]:J.ZERO,[uW]:J.ONE,[lW]:J.SRC_COLOR,[nW]:J.SRC_ALPHA,[tW]:J.SRC_ALPHA_SATURATE,[aW]:J.DST_COLOR,[iW]:J.DST_ALPHA,[cW]:J.ONE_MINUS_SRC_COLOR,[sW]:J.ONE_MINUS_SRC_ALPHA,[rW]:J.ONE_MINUS_DST_COLOR,[oW]:J.ONE_MINUS_DST_ALPHA,[eW]:J.CONSTANT_COLOR,[JX]:J.ONE_MINUS_CONSTANT_COLOR,[QX]:J.CONSTANT_ALPHA,[ZX]:J.ONE_MINUS_CONSTANT_ALPHA};function m0(h,F0,J0,O0,V0,Y0,M0,d0,q8,K8){if(h===f9){if(F===!0)a(J.BLEND),F=!1;return}if(F===!1)d(J.BLEND),F=!0;if(h!==r7){if(h!==q||K8!==p){if(R!==A6||A!==A6)J.blendEquation(J.FUNC_ADD),R=A6,A=A6;if(K8)switch(h){case Z7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case vZ:J.blendFunc(J.ONE,J.ONE);break;case yZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case bZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:f0("WebGLState: Invalid blending: ",h);break}else switch(h){case Z7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case vZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case yZ:f0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bZ:f0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:f0("WebGLState: Invalid blending: ",h);break}k=null,V=null,P=null,_=null,I.set(0,0,0),C=0,q=h,p=K8}return}if(V0=V0||F0,Y0=Y0||J0,M0=M0||O0,F0!==R||V0!==A)J.blendEquationSeparate(q0[F0],q0[V0]),R=F0,A=V0;if(J0!==k||O0!==V||Y0!==P||M0!==_)J.blendFuncSeparate(b0[J0],b0[O0],b0[Y0],b0[M0]),k=J0,V=O0,P=Y0,_=M0;if(d0.equals(I)===!1||q8!==C)J.blendColor(d0.r,d0.g,d0.b,q8),I.copy(d0),C=q8;q=h,p=!1}function h0(h,F0){h.side===b9?a(J.CULL_FACE):d(J.CULL_FACE);let J0=h.side===o8;if(F0)J0=!J0;i0(J0),h.blending===Z7&&h.transparent===!1?m0(f9):m0(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),X.setFunc(h.depthFunc),X.setTest(h.depthTest),X.setMask(h.depthWrite),W.setMask(h.colorWrite);let O0=h.stencilWrite;if(Y.setTest(O0),O0)Y.setMask(h.stencilWriteMask),Y.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),Y.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass);F8(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?d(J.SAMPLE_ALPHA_TO_COVERAGE):a(J.SAMPLE_ALPHA_TO_COVERAGE)}function i0(h){if(j!==h){if(h)J.frontFace(J.CW);else J.frontFace(J.CCW);j=h}}function r0(h){if(h!==fW){if(d(J.CULL_FACE),h!==y)if(h===jZ)J.cullFace(J.BACK);else if(h===hW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a(J.CULL_FACE);y=h}function V8(h){if(h!==m){if(u)J.lineWidth(h);m=h}}function F8(h,F0,J0){if(h){if(d(J.POLYGON_OFFSET_FILL),T!==F0||w!==J0){if(T=F0,w=J0,X.getReversed())F0=-F0;J.polygonOffset(F0,J0)}}else a(J.POLYGON_OFFSET_FILL)}function O8(h){if(h)d(J.SCISSOR_TEST);else a(J.SCISSOR_TEST)}function v(h){if(h===void 0)h=J.TEXTURE0+n-1;if(Z0!==h)J.activeTexture(h),Z0=h}function A8(h,F0,J0){if(J0===void 0)if(Z0===null)J0=J.TEXTURE0+n-1;else J0=Z0;let O0=X0[J0];if(O0===void 0)O0={type:void 0,texture:void 0},X0[J0]=O0;if(O0.type!==h||O0.texture!==F0){if(Z0!==J0)J.activeTexture(J0),Z0=J0;J.bindTexture(h,F0||g[h]),O0.type=h,O0.texture=F0}}function J8(){let h=X0[Z0];if(h!==void 0&&h.type!==void 0)J.bindTexture(h.type,null),h.type=void 0,h.texture=void 0}function G8(){try{J.compressedTexImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function M(){try{J.texSubImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function b(){try{J.texSubImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function W0(){try{J.compressedTexSubImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function G0(){try{J.texStorage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function E0(){try{J.texStorage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function t(){try{J.texImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function K0(){try{J.texImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function R0(h){if(G[h]!==void 0)return G[h];else return J.getParameter(h)}function A0(h,F0){if(G[h]!==F0)J.pixelStorei(h,F0),G[h]=F0}function N0(h){if(n0.equals(h)===!1)J.scissor(h.x,h.y,h.z,h.w),n0.copy(h)}function U0(h){if(u0.equals(h)===!1)J.viewport(h.x,h.y,h.z,h.w),u0.copy(h)}function j0(h,F0){let J0=U.get(F0);if(J0===void 0)J0=new WeakMap,U.set(F0,J0);let O0=J0.get(h);if(O0===void 0)O0=J.getUniformBlockIndex(F0,h.name),J0.set(h,O0)}function v0(h,F0){let O0=U.get(F0).get(h);if(H.get(F0)!==O0)J.uniformBlockBinding(F0,O0,h.__bindingPointIndex),H.set(F0,O0)}function Q8(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),D={},G={},Z0=null,X0={},N={},E=new WeakMap,O=[],L=null,F=!1,q=null,R=null,k=null,V=null,A=null,P=null,_=null,I=new e0(0,0,0),C=0,p=!1,j=null,y=null,m=null,T=null,w=null,n0.set(0,0,J.canvas.width,J.canvas.height),u0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:d,disable:a,bindFramebuffer:Q0,drawBuffers:r,useProgram:z0,setBlending:m0,setMaterial:h0,setFlipSided:i0,setCullFace:r0,setLineWidth:V8,setPolygonOffset:F8,setScissorTest:O8,activeTexture:v,bindTexture:A8,unbindTexture:J8,compressedTexImage2D:G8,compressedTexImage3D:z,texImage2D:t,texImage3D:K0,pixelStorei:A0,getParameter:R0,updateUBOMapping:j0,uniformBlockBinding:v0,texStorage2D:G0,texStorage3D:E0,texSubImage2D:M,texSubImage3D:b,compressedTexSubImage2D:s,compressedTexSubImage3D:W0,scissor:N0,viewport:U0,reset:Q8}}function Jq(J,Q,Z,K,$,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new x0,D=new WeakMap,G=new Set,N,E=new WeakMap,O=!1;try{O=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function L(z,M){return O?new OffscreenCanvas(z,M):e6("canvas")}function F(z,M,b){let s=1,W0=G8(z);if(W0.width>b||W0.height>b)s=b/Math.max(W0.width,W0.height);if(s<1)if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&z instanceof VideoFrame){let G0=Math.floor(s*W0.width),E0=Math.floor(s*W0.height);if(N===void 0)N=L(G0,E0);let t=M?L(G0,E0):N;return t.width=G0,t.height=E0,t.getContext("2d").drawImage(z,0,0,G0,E0),y0("WebGLRenderer: Texture has been resized from ("+W0.width+"x"+W0.height+") to ("+G0+"x"+E0+")."),t}else{if("data"in z)y0("WebGLRenderer: Image in DataTexture is too big ("+W0.width+"x"+W0.height+").");return z}return z}function q(z){return z.generateMipmaps}function R(z){J.generateMipmap(z)}function k(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(z,M,b,s,W0,G0=!1){if(z!==null){if(J[z]!==void 0)return J[z];y0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let E0;if(s){if(E0=Q.get("EXT_texture_norm16"),!E0)y0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let t=M;if(M===J.RED){if(b===J.FLOAT)t=J.R32F;if(b===J.HALF_FLOAT)t=J.R16F;if(b===J.UNSIGNED_BYTE)t=J.R8;if(b===J.UNSIGNED_SHORT&&E0)t=E0.R16_EXT;if(b===J.SHORT&&E0)t=E0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.R8UI;if(b===J.UNSIGNED_SHORT)t=J.R16UI;if(b===J.UNSIGNED_INT)t=J.R32UI;if(b===J.BYTE)t=J.R8I;if(b===J.SHORT)t=J.R16I;if(b===J.INT)t=J.R32I}if(M===J.RG){if(b===J.FLOAT)t=J.RG32F;if(b===J.HALF_FLOAT)t=J.RG16F;if(b===J.UNSIGNED_BYTE)t=J.RG8;if(b===J.UNSIGNED_SHORT&&E0)t=E0.RG16_EXT;if(b===J.SHORT&&E0)t=E0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RG8UI;if(b===J.UNSIGNED_SHORT)t=J.RG16UI;if(b===J.UNSIGNED_INT)t=J.RG32UI;if(b===J.BYTE)t=J.RG8I;if(b===J.SHORT)t=J.RG16I;if(b===J.INT)t=J.RG32I}if(M===J.RGB_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RGB8UI;if(b===J.UNSIGNED_SHORT)t=J.RGB16UI;if(b===J.UNSIGNED_INT)t=J.RGB32UI;if(b===J.BYTE)t=J.RGB8I;if(b===J.SHORT)t=J.RGB16I;if(b===J.INT)t=J.RGB32I}if(M===J.RGBA_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RGBA8UI;if(b===J.UNSIGNED_SHORT)t=J.RGBA16UI;if(b===J.UNSIGNED_INT)t=J.RGBA32UI;if(b===J.BYTE)t=J.RGBA8I;if(b===J.SHORT)t=J.RGBA16I;if(b===J.INT)t=J.RGBA32I}if(M===J.RGB){if(b===J.UNSIGNED_SHORT&&E0)t=E0.RGB16_EXT;if(b===J.SHORT&&E0)t=E0.RGB16_SNORM_EXT;if(b===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5;if(b===J.UNSIGNED_INT_10F_11F_11F_REV)t=J.R11F_G11F_B10F}if(M===J.RGBA){let K0=G0?_K:o0.getTransfer(W0);if(b===J.FLOAT)t=J.RGBA32F;if(b===J.HALF_FLOAT)t=J.RGBA16F;if(b===J.UNSIGNED_BYTE)t=K0===D8?J.SRGB8_ALPHA8:J.RGBA8;if(b===J.UNSIGNED_SHORT&&E0)t=E0.RGBA16_EXT;if(b===J.SHORT&&E0)t=E0.RGBA16_SNORM_EXT;if(b===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(b===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function A(z,M){let b;if(z){if(M===null||M===BJ||M===P6)b=J.DEPTH24_STENCIL8;else if(M===WJ)b=J.DEPTH32F_STENCIL8;else if(M===W7)b=J.DEPTH24_STENCIL8,y0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===BJ||M===P6)b=J.DEPTH_COMPONENT24;else if(M===WJ)b=J.DEPTH_COMPONENT32F;else if(M===W7)b=J.DEPTH_COMPONENT16;return b}function P(z,M){if(q(z)===!0||z.isFramebufferTexture&&z.minFilter!==VJ&&z.minFilter!==a8)return Math.log2(Math.max(M.width,M.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return M.mipmaps.length;else return 1}function _(z){let M=z.target;if(M.removeEventListener("dispose",_),C(M),M.isVideoTexture)D.delete(M);if(M.isHTMLTexture)G.delete(M)}function I(z){let M=z.target;M.removeEventListener("dispose",I),j(M)}function C(z){let M=K.get(z);if(M.__webglInit===void 0)return;let b=z.source,s=E.get(b);if(s){let W0=s[M.__cacheKey];if(W0.usedTimes--,W0.usedTimes===0)p(z);if(Object.keys(s).length===0)E.delete(b)}K.remove(z)}function p(z){let M=K.get(z);J.deleteTexture(M.__webglTexture);let b=z.source,s=E.get(b);delete s[M.__cacheKey],X.memory.textures--}function j(z){let M=K.get(z);if(z.depthTexture)z.depthTexture.dispose(),K.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(M.__webglFramebuffer[s]))for(let W0=0;W0<M.__webglFramebuffer[s].length;W0++)J.deleteFramebuffer(M.__webglFramebuffer[s][W0]);else J.deleteFramebuffer(M.__webglFramebuffer[s]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[s])}else{if(Array.isArray(M.__webglFramebuffer))for(let s=0;s<M.__webglFramebuffer.length;s++)J.deleteFramebuffer(M.__webglFramebuffer[s]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let s=0;s<M.__webglColorRenderbuffer.length;s++)if(M.__webglColorRenderbuffer[s])J.deleteRenderbuffer(M.__webglColorRenderbuffer[s])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let b=z.textures;for(let s=0,W0=b.length;s<W0;s++){let G0=K.get(b[s]);if(G0.__webglTexture)J.deleteTexture(G0.__webglTexture),X.memory.textures--;K.remove(b[s])}K.remove(z)}let y=0;function m(){y=0}function T(){return y}function w(z){y=z}function n(){let z=y;if(z>=$.maxTextures)y0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+$.maxTextures);return y+=1,z}function u(z){let M=[];return M.push(z.wrapS),M.push(z.wrapT),M.push(z.wrapR||0),M.push(z.magFilter),M.push(z.minFilter),M.push(z.anisotropy),M.push(z.internalFormat),M.push(z.format),M.push(z.type),M.push(z.generateMipmaps),M.push(z.premultiplyAlpha),M.push(z.flipY),M.push(z.unpackAlignment),M.push(z.colorSpace),M.join()}function $0(z,M){let b=K.get(z);if(z.isVideoTexture)A8(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&b.__version!==z.version){let s=z.image;if(s===null)y0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)y0("WebGLRenderer: Texture marked for update but image is incomplete");else{a(b,z,M);return}}else if(z.isExternalTexture)b.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,b.__webglTexture,J.TEXTURE0+M)}function i(z,M){let b=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&b.__version!==z.version){a(b,z,M);return}else if(z.isExternalTexture)b.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D_ARRAY,b.__webglTexture,J.TEXTURE0+M)}function Z0(z,M){let b=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&b.__version!==z.version){a(b,z,M);return}Z.bindTexture(J.TEXTURE_3D,b.__webglTexture,J.TEXTURE0+M)}function X0(z,M){let b=K.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&b.__version!==z.version){Q0(b,z,M);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,b.__webglTexture,J.TEXTURE0+M)}let S0={[qX]:J.REPEAT,[QQ]:J.CLAMP_TO_EDGE,[EX]:J.MIRRORED_REPEAT},T0={[VJ]:J.NEAREST,[FX]:J.NEAREST_MIPMAP_NEAREST,[$7]:J.NEAREST_MIPMAP_LINEAR,[a8]:J.LINEAR,[ZQ]:J.LINEAR_MIPMAP_NEAREST,[bJ]:J.LINEAR_MIPMAP_LINEAR},n0={[zX]:J.NEVER,[wX]:J.ALWAYS,[PX]:J.LESS,[UQ]:J.LEQUAL,[kX]:J.EQUAL,[GQ]:J.GEQUAL,[_X]:J.GREATER,[TX]:J.NOTEQUAL};function u0(z,M){if(M.type===WJ&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===a8||M.magFilter===ZQ||M.magFilter===$7||M.magFilter===bJ||M.minFilter===a8||M.minFilter===ZQ||M.minFilter===$7||M.minFilter===bJ))y0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,S0[M.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,S0[M.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,S0[M.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,T0[M.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,T0[M.minFilter]),M.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,n0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===VJ)return;if(M.minFilter!==$7&&M.minFilter!==bJ)return;if(M.type===WJ&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||K.get(M).__currentAnisotropy){let b=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,$.getMaxAnisotropy())),K.get(M).__currentAnisotropy=M.anisotropy}}}function S(z,M){let b=!1;if(z.__webglInit===void 0)z.__webglInit=!0,M.addEventListener("dispose",_);let s=M.source,W0=E.get(s);if(W0===void 0)W0={},E.set(s,W0);let G0=u(M);if(G0!==z.__cacheKey){if(W0[G0]===void 0)W0[G0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,b=!0;W0[G0].usedTimes++;let E0=W0[z.__cacheKey];if(E0!==void 0){if(W0[z.__cacheKey].usedTimes--,E0.usedTimes===0)p(M)}z.__cacheKey=G0,z.__webglTexture=W0[G0].texture}return b}function g(z,M,b){return Math.floor(Math.floor(z/b)/M)}function d(z,M,b,s){let G0=z.updateRanges;if(G0.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,b,s,M.data);else{G0.sort((A0,N0)=>A0.start-N0.start);let E0=0;for(let A0=1;A0<G0.length;A0++){let N0=G0[E0],U0=G0[A0],j0=N0.start+N0.count,v0=g(U0.start,M.width,4),Q8=g(N0.start,M.width,4);if(U0.start<=j0+1&&v0===Q8&&g(U0.start+U0.count-1,M.width,4)===v0)N0.count=Math.max(N0.count,U0.start+U0.count-N0.start);else++E0,G0[E0]=U0}G0.length=E0+1;let t=Z.getParameter(J.UNPACK_ROW_LENGTH),K0=Z.getParameter(J.UNPACK_SKIP_PIXELS),R0=Z.getParameter(J.UNPACK_SKIP_ROWS);Z.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let A0=0,N0=G0.length;A0<N0;A0++){let U0=G0[A0],j0=Math.floor(U0.start/4),v0=Math.ceil(U0.count/4),Q8=j0%M.width,h=Math.floor(j0/M.width),F0=v0,J0=1;Z.pixelStorei(J.UNPACK_SKIP_PIXELS,Q8),Z.pixelStorei(J.UNPACK_SKIP_ROWS,h),Z.texSubImage2D(J.TEXTURE_2D,0,Q8,h,F0,1,b,s,M.data)}z.clearUpdateRanges(),Z.pixelStorei(J.UNPACK_ROW_LENGTH,t),Z.pixelStorei(J.UNPACK_SKIP_PIXELS,K0),Z.pixelStorei(J.UNPACK_SKIP_ROWS,R0)}}function a(z,M,b){let s=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)s=J.TEXTURE_3D;let W0=S(z,M),G0=M.source;Z.bindTexture(s,z.__webglTexture,J.TEXTURE0+b);let E0=K.get(G0);if(G0.version!==E0.__version||W0===!0){if(Z.activeTexture(J.TEXTURE0+b),(typeof ImageBitmap!=="undefined"&&M.image instanceof ImageBitmap)===!1){let J0=o0.getPrimaries(o0.workingColorSpace),O0=M.colorSpace===gJ?null:o0.getPrimaries(M.colorSpace),V0=M.colorSpace===gJ||J0===O0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,V0)}Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let K0=F(M.image,!1,$.maxTextureSize);K0=J8(M,K0);let R0=W.convert(M.format,M.colorSpace),A0=W.convert(M.type),N0=V(M.internalFormat,R0,A0,M.normalized,M.colorSpace,M.isVideoTexture);u0(s,M);let U0,j0=M.mipmaps,v0=M.isVideoTexture!==!0,Q8=E0.__version===void 0||W0===!0,h=G0.dataReady,F0=P(M,K0);if(M.isDepthTexture){if(N0=A(M.format===hJ,M.type),Q8)if(v0)Z.texStorage2D(J.TEXTURE_2D,1,N0,K0.width,K0.height);else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,R0,A0,null)}else if(M.isDataTexture)if(j0.length>0){if(v0&&Q8)Z.texStorage2D(J.TEXTURE_2D,F0,N0,j0[0].width,j0[0].height);for(let J0=0,O0=j0.length;J0<O0;J0++)if(U0=j0[J0],v0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,U0.width,U0.height,R0,A0,U0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,U0.width,U0.height,0,R0,A0,U0.data);M.generateMipmaps=!1}else if(v0){if(Q8)Z.texStorage2D(J.TEXTURE_2D,F0,N0,K0.width,K0.height);if(h)d(M,K0,R0,A0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,R0,A0,K0.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(v0&&Q8)Z.texStorage3D(J.TEXTURE_2D_ARRAY,F0,N0,j0[0].width,j0[0].height,K0.depth);for(let J0=0,O0=j0.length;J0<O0;J0++)if(U0=j0[J0],M.format!==x9)if(R0!==null)if(v0){if(h)if(M.layerUpdates.size>0){let V0=K$(U0.width,U0.height,M.format,M.type);for(let Y0 of M.layerUpdates){let M0=U0.data.subarray(Y0*V0/U0.data.BYTES_PER_ELEMENT,(Y0+1)*V0/U0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,Y0,U0.width,U0.height,1,R0,M0)}}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,U0.width,U0.height,K0.depth,R0,U0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,J0,N0,U0.width,U0.height,K0.depth,0,U0.data,0,0);else y0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v0){if(h)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,U0.width,U0.height,K0.depth,R0,A0,U0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,J0,N0,U0.width,U0.height,K0.depth,0,R0,A0,U0.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(v0&&Q8)Z.texStorage2D(J.TEXTURE_2D,F0,N0,j0[0].width,j0[0].height);for(let J0=0,O0=j0.length;J0<O0;J0++)if(U0=j0[J0],M.format!==x9)if(R0!==null)if(v0){if(h)Z.compressedTexSubImage2D(J.TEXTURE_2D,J0,0,0,U0.width,U0.height,R0,U0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,J0,N0,U0.width,U0.height,0,U0.data);else y0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,U0.width,U0.height,R0,A0,U0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,U0.width,U0.height,0,R0,A0,U0.data)}else if(M.isDataArrayTexture)if(v0){if(Q8)Z.texStorage3D(J.TEXTURE_2D_ARRAY,F0,N0,K0.width,K0.height,K0.depth);if(h)if(M.layerUpdates.size>0){let J0=K$(K0.width,K0.height,M.format,M.type);for(let O0 of M.layerUpdates){let V0=K0.data.subarray(O0*J0/K0.data.BYTES_PER_ELEMENT,(O0+1)*J0/K0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,O0,K0.width,K0.height,1,R0,A0,V0)}M.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,K0.width,K0.height,K0.depth,R0,A0,K0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,N0,K0.width,K0.height,K0.depth,0,R0,A0,K0.data);else if(M.isData3DTexture)if(v0){if(Q8)Z.texStorage3D(J.TEXTURE_3D,F0,N0,K0.width,K0.height,K0.depth);if(h)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,K0.width,K0.height,K0.depth,R0,A0,K0.data)}else Z.texImage3D(J.TEXTURE_3D,0,N0,K0.width,K0.height,K0.depth,0,R0,A0,K0.data);else if(M.isFramebufferTexture){if(Q8)if(v0)Z.texStorage2D(J.TEXTURE_2D,F0,N0,K0.width,K0.height);else{let{width:J0,height:O0}=K0;for(let V0=0;V0<F0;V0++)Z.texImage2D(J.TEXTURE_2D,V0,N0,J0,O0,0,R0,A0,null),J0>>=1,O0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let J0=J.canvas;if(!J0.hasAttribute("layoutsubtree"))J0.setAttribute("layoutsubtree","true");if(K0.parentNode!==J0){J0.appendChild(K0),G.add(M),J0.onpaint=(O0)=>{let V0=O0.changedElements;for(let Y0 of G)if(V0.includes(Y0.image))Y0.needsUpdate=!0},J0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,K0);else{let{RGBA:V0,RGBA:Y0,UNSIGNED_BYTE:M0}=J;J.texElementImage2D(J.TEXTURE_2D,0,V0,Y0,M0,K0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(j0.length>0){if(v0&&Q8){let J0=G8(j0[0]);Z.texStorage2D(J.TEXTURE_2D,F0,N0,J0.width,J0.height)}for(let J0=0,O0=j0.length;J0<O0;J0++)if(U0=j0[J0],v0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,R0,A0,U0)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,R0,A0,U0);M.generateMipmaps=!1}else if(v0){if(Q8){let J0=G8(K0);Z.texStorage2D(J.TEXTURE_2D,F0,N0,J0.width,J0.height)}if(h)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,R0,A0,K0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,R0,A0,K0);if(q(M))R(s);if(E0.__version=G0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function Q0(z,M,b){if(M.image.length!==6)return;let s=S(z,M),W0=M.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+b);let G0=K.get(W0);if(W0.version!==G0.__version||s===!0){Z.activeTexture(J.TEXTURE0+b);let E0=o0.getPrimaries(o0.workingColorSpace),t=M.colorSpace===gJ?null:o0.getPrimaries(M.colorSpace),K0=M.colorSpace===gJ||E0===t?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,K0);let R0=M.isCompressedTexture||M.image[0].isCompressedTexture,A0=M.image[0]&&M.image[0].isDataTexture,N0=[];for(let Y0=0;Y0<6;Y0++){if(!R0&&!A0)N0[Y0]=F(M.image[Y0],!0,$.maxCubemapSize);else N0[Y0]=A0?M.image[Y0].image:M.image[Y0];N0[Y0]=J8(M,N0[Y0])}let U0=N0[0],j0=W.convert(M.format,M.colorSpace),v0=W.convert(M.type),Q8=V(M.internalFormat,j0,v0,M.normalized,M.colorSpace),h=M.isVideoTexture!==!0,F0=G0.__version===void 0||s===!0,J0=W0.dataReady,O0=P(M,U0);u0(J.TEXTURE_CUBE_MAP,M);let V0;if(R0){if(h&&F0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,O0,Q8,U0.width,U0.height);for(let Y0=0;Y0<6;Y0++){V0=N0[Y0].mipmaps;for(let M0=0;M0<V0.length;M0++){let d0=V0[M0];if(M.format!==x9)if(j0!==null)if(h){if(J0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0,0,0,d0.width,d0.height,j0,d0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0,Q8,d0.width,d0.height,0,d0.data);else y0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0,0,0,d0.width,d0.height,j0,v0,d0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0,Q8,d0.width,d0.height,0,j0,v0,d0.data)}}}else{if(V0=M.mipmaps,h&&F0){if(V0.length>0)O0++;let Y0=G8(N0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,O0,Q8,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(A0){if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,N0[Y0].width,N0[Y0].height,j0,v0,N0[Y0].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,Q8,N0[Y0].width,N0[Y0].height,0,j0,v0,N0[Y0].data);for(let M0=0;M0<V0.length;M0++){let q8=V0[M0].image[Y0].image;if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0+1,0,0,q8.width,q8.height,j0,v0,q8.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0+1,Q8,q8.width,q8.height,0,j0,v0,q8.data)}}else{if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,j0,v0,N0[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,Q8,j0,v0,N0[Y0]);for(let M0=0;M0<V0.length;M0++){let d0=V0[M0];if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0+1,0,0,j0,v0,d0.image[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,M0+1,Q8,j0,v0,d0.image[Y0])}}}if(q(M))R(J.TEXTURE_CUBE_MAP);if(G0.__version=W0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function r(z,M,b,s,W0,G0){let E0=W.convert(b.format,b.colorSpace),t=W.convert(b.type),K0=V(b.internalFormat,E0,t,b.normalized,b.colorSpace),R0=K.get(M),A0=K.get(b);if(A0.__renderTarget=M,!R0.__hasExternalTextures){let N0=Math.max(1,M.width>>G0),U0=Math.max(1,M.height>>G0);if(W0===J.TEXTURE_3D||W0===J.TEXTURE_2D_ARRAY)Z.texImage3D(W0,G0,K0,N0,U0,M.depth,0,E0,t,null);else Z.texImage2D(W0,G0,K0,N0,U0,0,E0,t,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,z),v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,W0,A0.__webglTexture,0,O8(M));else if(W0===J.TEXTURE_2D||W0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&W0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,W0,A0.__webglTexture,G0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function z0(z,M,b){if(J.bindRenderbuffer(J.RENDERBUFFER,z),M.depthBuffer){let s=M.depthTexture,W0=s&&s.isDepthTexture?s.type:null,G0=A(M.stencilBuffer,W0),E0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O8(M),G0,M.width,M.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,O8(M),G0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,G0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,E0,J.RENDERBUFFER,z)}else{let s=M.textures;for(let W0=0;W0<s.length;W0++){let G0=s[W0],E0=W.convert(G0.format,G0.colorSpace),t=W.convert(G0.type),K0=V(G0.internalFormat,E0,t,G0.normalized,G0.colorSpace);if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O8(M),K0,M.width,M.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,O8(M),K0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function q0(z,M,b){let s=M.isWebGLCubeRenderTarget===!0;if(Z.bindFramebuffer(J.FRAMEBUFFER,z),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W0=K.get(M.depthTexture);if(W0.__renderTarget=M,!W0.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;if(s){if(W0.__webglInit===void 0)W0.__webglInit=!0,M.depthTexture.addEventListener("dispose",_);if(W0.__webglTexture===void 0){W0.__webglTexture=J.createTexture(),Z.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),u0(J.TEXTURE_CUBE_MAP,M.depthTexture);let R0=W.convert(M.depthTexture.format),A0=W.convert(M.depthTexture.type),N0;if(M.depthTexture.format===fJ)N0=J.DEPTH_COMPONENT24;else if(M.depthTexture.format===hJ)N0=J.DEPTH24_STENCIL8;for(let U0=0;U0<6;U0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,0,N0,M.width,M.height,0,R0,A0,null)}}else $0(M.depthTexture,0);let G0=W0.__webglTexture,E0=O8(M),t=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+b:J.TEXTURE_2D,K0=M.depthTexture.format===hJ?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===fJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,G0,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,G0,0);else if(M.depthTexture.format===hJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,G0,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,G0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function b0(z){let M=K.get(z),b=z.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==z.depthTexture){let s=z.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(s){let W0=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,s.removeEventListener("dispose",W0)};s.addEventListener("dispose",W0),M.__depthDisposeCallback=W0}M.__boundDepthTexture=s}if(z.depthTexture&&!M.__autoAllocateDepthBuffer)if(b)for(let s=0;s<6;s++)q0(M.__webglFramebuffer[s],z,s);else{let s=z.texture.mipmaps;if(s&&s.length>0)q0(M.__webglFramebuffer[0],z,0);else q0(M.__webglFramebuffer,z,0)}else if(b){M.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[s]),M.__webglDepthbuffer[s]===void 0)M.__webglDepthbuffer[s]=J.createRenderbuffer(),z0(M.__webglDepthbuffer[s],z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=M.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,G0)}}else{let s=z.texture.mipmaps;if(s&&s.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),z0(M.__webglDepthbuffer,z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,G0)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function m0(z,M,b){let s=K.get(z);if(M!==void 0)r(s.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(b!==void 0)b0(z)}function h0(z){let M=z.texture,b=K.get(z),s=K.get(M);z.addEventListener("dispose",I);let W0=z.textures,G0=z.isWebGLCubeRenderTarget===!0,E0=W0.length>1;if(!E0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=M.version,X.memory.textures++}if(G0){b.__webglFramebuffer=[];for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0){b.__webglFramebuffer[t]=[];for(let K0=0;K0<M.mipmaps.length;K0++)b.__webglFramebuffer[t][K0]=J.createFramebuffer()}else b.__webglFramebuffer[t]=J.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){b.__webglFramebuffer=[];for(let t=0;t<M.mipmaps.length;t++)b.__webglFramebuffer[t]=J.createFramebuffer()}else b.__webglFramebuffer=J.createFramebuffer();if(E0)for(let t=0,K0=W0.length;t<K0;t++){let R0=K.get(W0[t]);if(R0.__webglTexture===void 0)R0.__webglTexture=J.createTexture(),X.memory.textures++}if(z.samples>0&&v(z)===!1){b.__webglMultisampledFramebuffer=J.createFramebuffer(),b.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let t=0;t<W0.length;t++){let K0=W0[t];b.__webglColorRenderbuffer[t]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,b.__webglColorRenderbuffer[t]);let R0=W.convert(K0.format,K0.colorSpace),A0=W.convert(K0.type),N0=V(K0.internalFormat,R0,A0,K0.normalized,K0.colorSpace,z.isXRRenderTarget===!0),U0=O8(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,U0,N0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+t,J.RENDERBUFFER,b.__webglColorRenderbuffer[t])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)b.__webglDepthRenderbuffer=J.createRenderbuffer(),z0(b.__webglDepthRenderbuffer,z,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(G0){Z.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),u0(J.TEXTURE_CUBE_MAP,M);for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(b.__webglFramebuffer[t][K0],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,K0);else r(b.__webglFramebuffer[t],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0);if(q(M))R(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(E0){for(let t=0,K0=W0.length;t<K0;t++){let R0=W0[t],A0=K.get(R0),N0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)N0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(N0,A0.__webglTexture),u0(N0,R0),r(b.__webglFramebuffer,z,R0,J.COLOR_ATTACHMENT0+t,N0,0),q(R0))R(N0)}Z.unbindTexture()}else{let t=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)t=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(t,s.__webglTexture),u0(t,M),M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(b.__webglFramebuffer[K0],z,M,J.COLOR_ATTACHMENT0,t,K0);else r(b.__webglFramebuffer,z,M,J.COLOR_ATTACHMENT0,t,0);if(q(M))R(t);Z.unbindTexture()}if(z.depthBuffer)b0(z)}function i0(z){let M=z.textures;for(let b=0,s=M.length;b<s;b++){let W0=M[b];if(q(W0)){let G0=k(z),E0=K.get(W0).__webglTexture;Z.bindTexture(G0,E0),R(G0),Z.unbindTexture()}}}let r0=[],V8=[];function F8(z){if(z.samples>0){if(v(z)===!1){let{textures:M,width:b,height:s}=z,W0=J.COLOR_BUFFER_BIT,G0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,E0=K.get(z),t=M.length>1;if(t)for(let R0=0;R0<M.length;R0++)Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,E0.__webglMultisampledFramebuffer);let K0=z.texture.mipmaps;if(K0&&K0.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer);for(let R0=0;R0<M.length;R0++){if(z.resolveDepthBuffer){if(z.depthBuffer)W0|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)W0|=J.STENCIL_BUFFER_BIT}if(t){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[R0]);let A0=K.get(M[R0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,A0,0)}if(J.blitFramebuffer(0,0,b,s,0,0,b,s,W0,J.NEAREST),H===!0){if(r0.length=0,V8.length=0,r0.push(J.COLOR_ATTACHMENT0+R0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)r0.push(G0),V8.push(G0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,V8);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,r0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),t)for(let R0=0;R0<M.length;R0++){Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[R0]);let A0=K.get(M[R0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.TEXTURE_2D,A0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&H){let M=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function O8(z){return Math.min($.maxSamples,z.samples)}function v(z){let M=K.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function A8(z){let M=X.render.frame;if(D.get(z)!==M)D.set(z,M),z.update()}function J8(z,M){let{colorSpace:b,format:s,type:W0}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return M;if(b!==kK&&b!==gJ)if(o0.getTransfer(b)===D8){if(s!==x9||W0!==z9)y0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else f0("WebGLTextures: Unsupported texture color space:",b);return M}function G8(z){if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement)U.width=z.naturalWidth||z.width,U.height=z.naturalHeight||z.height;else if(typeof VideoFrame!=="undefined"&&z instanceof VideoFrame)U.width=z.displayWidth,U.height=z.displayHeight;else U.width=z.width,U.height=z.height;return U}this.allocateTextureUnit=n,this.resetTextureUnits=m,this.getTextureUnits=T,this.setTextureUnits=w,this.setTexture2D=$0,this.setTexture2DArray=i,this.setTexture3D=Z0,this.setTextureCube=X0,this.rebindTextures=m0,this.setupRenderTarget=h0,this.updateRenderTargetMipmap=i0,this.updateMultisampleRenderTarget=F8,this.setupDepthRenderbuffer=b0,this.setupFrameBufferTexture=r,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return Z.buffers.depth.getReversed()}}function Qq(J,Q){function Z(K,$=gJ){let W,X=o0.getTransfer($);if(K===z9)return J.UNSIGNED_BYTE;if(K===cZ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===nZ)return J.UNSIGNED_SHORT_5_5_5_1;if(K===MX)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===LX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===OX)return J.BYTE;if(K===RX)return J.SHORT;if(K===W7)return J.UNSIGNED_SHORT;if(K===lZ)return J.INT;if(K===BJ)return J.UNSIGNED_INT;if(K===WJ)return J.FLOAT;if(K===h9)return J.HALF_FLOAT;if(K===IX)return J.ALPHA;if(K===VX)return J.RGB;if(K===x9)return J.RGBA;if(K===fJ)return J.DEPTH_COMPONENT;if(K===hJ)return J.DEPTH_STENCIL;if(K===BX)return J.RED;if(K===sZ)return J.RED_INTEGER;if(K===xJ)return J.RG;if(K===iZ)return J.RG_INTEGER;if(K===oZ)return J.RGBA_INTEGER;if(K===KQ||K===$Q||K===WQ||K===XQ)if(X===D8)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(K===KQ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===$Q)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===WQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===XQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(K===KQ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===$Q)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===WQ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===XQ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===aZ||K===rZ||K===tZ||K===eZ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(K===aZ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===rZ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===tZ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===eZ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===JK||K===QK||K===ZK||K===KK||K===$K||K===YQ||K===WK)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(K===JK||K===QK)return X===D8?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(K===ZK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(K===KK)return W.COMPRESSED_R11_EAC;if(K===$K)return W.COMPRESSED_SIGNED_R11_EAC;if(K===YQ)return W.COMPRESSED_RG11_EAC;if(K===WK)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===XK||K===YK||K===HK||K===UK||K===GK||K===NK||K===DK||K===qK||K===EK||K===FK||K===OK||K===RK||K===MK||K===LK)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(K===XK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===YK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===HK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===UK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===GK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===NK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===DK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===qK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===EK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===FK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===OK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===RK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===MK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===LK)return X===D8?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===IK||K===VK||K===BK)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(K===IK)return X===D8?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===VK)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===BK)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===CK||K===AK||K===HQ||K===zK)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(K===CK)return W.COMPRESSED_RED_RGTC1_EXT;if(K===AK)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===HQ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===zK)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===P6)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:Z}}var Zq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kq=`
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

}`;class RY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new IQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new t8({vertexShader:Zq,fragmentShader:Kq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new W9(new N7(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MY extends g9{constructor(J,Q){super();let Z=this,K=null,$=1,W=null,X="local-floor",Y=1,H=null,U=null,D=null,G=null,N=null,E=null,O=typeof XRWebGLBinding!=="undefined",L=new RY,F={},q=Q.getContextAttributes(),R=null,k=null,V=[],A=[],P=new x0,_=null,I=null,C=new l8;C.viewport=new Y8;let p=new l8;p.viewport=new Y8;let j=[C,p],y=new eK,m=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let g=V[S];if(g===void 0)g=new H7,V[S]=g;return g.getTargetRaySpace()},this.getControllerGrip=function(S){let g=V[S];if(g===void 0)g=new H7,V[S]=g;return g.getGripSpace()},this.getHand=function(S){let g=V[S];if(g===void 0)g=new H7,V[S]=g;return g.getHandSpace()};function w(S){let g=A.indexOf(S.inputSource);if(g===-1)return;let d=V[g];if(d!==void 0)d.update(S.inputSource,S.frame,H||W),d.dispatchEvent({type:S.type,data:S.inputSource})}function n(){K.removeEventListener("select",w),K.removeEventListener("selectstart",w),K.removeEventListener("selectend",w),K.removeEventListener("squeeze",w),K.removeEventListener("squeezestart",w),K.removeEventListener("squeezeend",w),K.removeEventListener("end",n),K.removeEventListener("inputsourceschange",u);for(let S=0;S<V.length;S++){let g=A[S];if(g===null)continue;A[S]=null,V[S].disconnect(g)}m=null,T=null,L.reset();for(let S in F)delete F[S];if(J.setRenderTarget(R),N=null,G=null,D=null,K=null,k=null,u0.stop(),Z.isPresenting=!1,J.setPixelRatio(_),J.setSize(P.width,P.height,!1),I!==null){let S=I.camera;S.fov=I.fov,S.zoom=I.zoom,S.updateProjectionMatrix(),I=null}Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){if($=S,Z.isPresenting===!0)y0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){if(X=S,Z.isPresenting===!0)y0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(S){H=S},this.getBaseLayer=function(){return G!==null?G:N},this.getBinding=function(){if(D===null&&O)D=new XRWebGLBinding(K,Q);return D},this.getFrame=function(){return E},this.getSession=function(){return K},this.setSession=async function(S){if(K=S,K!==null){if(R=J.getRenderTarget(),K.addEventListener("select",w),K.addEventListener("selectstart",w),K.addEventListener("selectend",w),K.addEventListener("squeeze",w),K.addEventListener("squeezestart",w),K.addEventListener("squeezeend",w),K.addEventListener("end",n),K.addEventListener("inputsourceschange",u),q.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(P),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let d={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:$};N=new XRWebGLLayer(K,Q,d),K.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),k=new $9(N.framebufferWidth,N.framebufferHeight,{format:x9,type:z9,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let d=null,a=null,Q0=null;if(q.depth)Q0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,d=q.stencil?hJ:fJ,a=q.stencil?P6:BJ;let r={colorFormat:Q.RGBA8,depthFormat:Q0,scaleFactor:$};D=this.getBinding(),G=D.createProjectionLayer(r),K.updateRenderState({layers:[G]}),J.setPixelRatio(1),J.setSize(G.textureWidth,G.textureHeight,!1),k=new $9(G.textureWidth,G.textureHeight,{format:x9,type:z9,depthTexture:new pJ(G.textureWidth,G.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,d),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await K.requestReferenceSpace(X),u0.setContext(K),u0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function u(S){for(let g=0;g<S.removed.length;g++){let d=S.removed[g],a=A.indexOf(d);if(a>=0)A[a]=null,V[a].disconnect(d)}for(let g=0;g<S.added.length;g++){let d=S.added[g],a=A.indexOf(d);if(a===-1){for(let r=0;r<V.length;r++)if(r>=A.length){A.push(d),a=r;break}else if(A[r]===null){A[r]=d,a=r;break}if(a===-1)break}let Q0=V[a];if(Q0)Q0.connect(d)}}let $0=new x,i=new x;function Z0(S,g,d){$0.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(d.matrixWorld);let a=$0.distanceTo(i),Q0=g.projectionMatrix.elements,r=d.projectionMatrix.elements,z0=Q0[14]/(Q0[10]-1),q0=Q0[14]/(Q0[10]+1),b0=(Q0[9]+1)/Q0[5],m0=(Q0[9]-1)/Q0[5],h0=(Q0[8]-1)/Q0[0],i0=(r[8]+1)/r[0],r0=z0*h0,V8=z0*i0,F8=a/(-h0+i0),O8=F8*-h0;if(g.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(O8),S.translateZ(F8),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),Q0[10]===-1)S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse);else{let v=z0+F8,A8=q0+F8,J8=r0-O8,G8=V8+(a-O8),z=b0*q0/A8*v,M=m0*q0/A8*v;S.projectionMatrix.makePerspective(J8,G8,z,M,v,A8),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function X0(S,g){if(g===null)S.matrixWorld.copy(S.matrix);else S.matrixWorld.multiplyMatrices(g.matrixWorld,S.matrix);S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(K===null)return;let{near:g,far:d}=S;if(L.texture!==null){if(L.depthNear>0)g=L.depthNear;if(L.depthFar>0)d=L.depthFar}if(y.near=p.near=C.near=g,y.far=p.far=C.far=d,m!==y.near||T!==y.far)K.updateRenderState({depthNear:y.near,depthFar:y.far}),m=y.near,T=y.far;y.layers.mask=S.layers.mask|6,C.layers.mask=y.layers.mask&-5,p.layers.mask=y.layers.mask&-3;let a=S.parent,Q0=y.cameras;X0(y,a);for(let r=0;r<Q0.length;r++)X0(Q0[r],a);if(Q0.length===2)Z0(y,C,p);else y.projectionMatrix.copy(C.projectionMatrix);if(I===null&&S.isPerspectiveCamera)I={camera:S,fov:S.fov,zoom:S.zoom};S0(S,y,a)};function S0(S,g,d){if(d===null)S.matrix.copy(g.matrixWorld);else S.matrix.copy(d.matrixWorld),S.matrix.invert(),S.matrix.multiply(g.matrixWorld);if(S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse),S.isPerspectiveCamera)S.fov=V6*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1}this.getCamera=function(){return y},this.getFoveation=function(){if(G===null&&N===null)return;return Y},this.setFoveation=function(S){if(Y=S,G!==null)G.fixedFoveation=S;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=S},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(y)},this.getCameraTexture=function(S){return F[S]};let T0=null;function n0(S,g){if(U=g.getViewerPose(H||W),E=g,U!==null){let d=U.views;if(N!==null)J.setRenderTargetFramebuffer(k,N.framebuffer),J.setRenderTarget(k);let a=!1;if(d.length!==y.cameras.length)y.cameras.length=0,a=!0;for(let q0=0;q0<d.length;q0++){let b0=d[q0],m0=null;if(N!==null)m0=N.getViewport(b0);else{let i0=D.getViewSubImage(G,b0);if(m0=i0.viewport,q0===0)J.setRenderTargetTextures(k,i0.colorTexture,i0.depthStencilTexture),J.setRenderTarget(k)}let h0=j[q0];if(h0===void 0)h0=new l8,h0.layers.enable(q0),h0.viewport=new Y8,j[q0]=h0;if(h0.matrix.fromArray(b0.transform.matrix),h0.matrix.decompose(h0.position,h0.quaternion,h0.scale),h0.projectionMatrix.fromArray(b0.projectionMatrix),h0.projectionMatrixInverse.copy(h0.projectionMatrix).invert(),h0.viewport.set(m0.x,m0.y,m0.width,m0.height),q0===0)y.matrix.copy(h0.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale);if(a===!0)y.cameras.push(h0)}let Q0=K.enabledFeatures;if(Q0&&Q0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&O){D=Z.getBinding();let q0=D.getDepthInformation(d[0]);if(q0&&q0.isValid&&q0.texture)L.init(q0,K.renderState)}if(Q0&&Q0.includes("camera-access")&&O){J.state.unbindTexture(),D=Z.getBinding();for(let q0=0;q0<d.length;q0++){let b0=d[q0].camera;if(b0){let m0=F[b0];if(!m0)m0=new IQ,F[b0]=m0;let h0=D.getCameraImage(b0);m0.sourceTexture=h0}}}}for(let d=0;d<V.length;d++){let a=A[d],Q0=V[d];if(a!==null&&Q0!==void 0)Q0.update(a,g,H||W)}if(T0)T0(S,g);if(g.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:g});E=null}let u0=new XY;u0.setAnimationLoop(n0),this.setAnimationLoop=function(S){T0=S},this.dispose=function(){}}}var $q=new M8,LY=new g0;LY.set(-1,0,0,0,1,0,0,0,1);function Wq(J,Q){function Z(F,q){if(F.matrixAutoUpdate===!0)F.updateMatrix();q.value.copy(F.matrix)}function K(F,q){if(q.color.getRGB(F.fogColor.value,xK(J)),q.isFog)F.fogNear.value=q.near,F.fogFar.value=q.far;else if(q.isFogExp2)F.fogDensity.value=q.density}function $(F,q,R,k,V){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)W(F,q);else if(q.isMeshLambertMaterial){if(W(F,q),q.envMap)F.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)W(F,q),G(F,q);else if(q.isMeshPhongMaterial){if(W(F,q),D(F,q),q.envMap)F.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(W(F,q),N(F,q),q.isMeshPhysicalMaterial)E(F,q,V)}else if(q.isMeshMatcapMaterial)W(F,q),O(F,q);else if(q.isMeshDepthMaterial)W(F,q);else if(q.isMeshDistanceMaterial)W(F,q),L(F,q);else if(q.isMeshNormalMaterial)W(F,q);else if(q.isLineBasicMaterial){if(X(F,q),q.isLineDashedMaterial)Y(F,q)}else if(q.isPointsMaterial)H(F,q,R,k);else if(q.isSpriteMaterial)U(F,q);else if(q.isShadowMaterial)F.color.value.copy(q.color),F.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function W(F,q){if(F.opacity.value=q.opacity,q.color)F.diffuse.value.copy(q.color);if(q.emissive)F.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)F.map.value=q.map,Z(q.map,F.mapTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,Z(q.alphaMap,F.alphaMapTransform);if(q.bumpMap){if(F.bumpMap.value=q.bumpMap,Z(q.bumpMap,F.bumpMapTransform),F.bumpScale.value=q.bumpScale,q.side===o8)F.bumpScale.value*=-1}if(q.normalMap){if(F.normalMap.value=q.normalMap,Z(q.normalMap,F.normalMapTransform),F.normalScale.value.copy(q.normalScale),q.side===o8)F.normalScale.value.negate()}if(q.displacementMap)F.displacementMap.value=q.displacementMap,Z(q.displacementMap,F.displacementMapTransform),F.displacementScale.value=q.displacementScale,F.displacementBias.value=q.displacementBias;if(q.emissiveMap)F.emissiveMap.value=q.emissiveMap,Z(q.emissiveMap,F.emissiveMapTransform);if(q.specularMap)F.specularMap.value=q.specularMap,Z(q.specularMap,F.specularMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest;let R=Q.get(q),k=R.envMap,V=R.envMapRotation;if(k){if(F.envMap.value=k,F.envMapRotation.value.setFromMatrix4($q.makeRotationFromEuler(V)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)F.envMapRotation.value.premultiply(LY);F.reflectivity.value=q.reflectivity,F.ior.value=q.ior,F.refractionRatio.value=q.refractionRatio}if(q.lightMap)F.lightMap.value=q.lightMap,F.lightMapIntensity.value=q.lightMapIntensity,Z(q.lightMap,F.lightMapTransform);if(q.aoMap)F.aoMap.value=q.aoMap,F.aoMapIntensity.value=q.aoMapIntensity,Z(q.aoMap,F.aoMapTransform)}function X(F,q){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,q.map)F.map.value=q.map,Z(q.map,F.mapTransform)}function Y(F,q){F.dashSize.value=q.dashSize,F.totalSize.value=q.dashSize+q.gapSize,F.scale.value=q.scale}function H(F,q,R,k){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,F.size.value=q.size*R,F.scale.value=k*0.5,q.map)F.map.value=q.map,Z(q.map,F.uvTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,Z(q.alphaMap,F.alphaMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest}function U(F,q){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,F.rotation.value=q.rotation,q.map)F.map.value=q.map,Z(q.map,F.mapTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,Z(q.alphaMap,F.alphaMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest}function D(F,q){F.specular.value.copy(q.specular),F.shininess.value=Math.max(q.shininess,0.0001)}function G(F,q){if(q.gradientMap)F.gradientMap.value=q.gradientMap}function N(F,q){if(F.metalness.value=q.metalness,q.metalnessMap)F.metalnessMap.value=q.metalnessMap,Z(q.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=q.roughness,q.roughnessMap)F.roughnessMap.value=q.roughnessMap,Z(q.roughnessMap,F.roughnessMapTransform);if(q.envMap)F.envMapIntensity.value=q.envMapIntensity}function E(F,q,R){if(F.ior.value=q.ior,q.sheen>0){if(F.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),F.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)F.sheenColorMap.value=q.sheenColorMap,Z(q.sheenColorMap,F.sheenColorMapTransform);if(q.sheenRoughnessMap)F.sheenRoughnessMap.value=q.sheenRoughnessMap,Z(q.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(F.clearcoat.value=q.clearcoat,F.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)F.clearcoatMap.value=q.clearcoatMap,Z(q.clearcoatMap,F.clearcoatMapTransform);if(q.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,Z(q.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(F.clearcoatNormalMap.value=q.clearcoatNormalMap,Z(q.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===o8)F.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)F.dispersion.value=q.dispersion;if(q.retroreflectivity>0)F.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(F.iridescence.value=q.iridescence,F.iridescenceIOR.value=q.iridescenceIOR,F.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],F.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)F.iridescenceMap.value=q.iridescenceMap,Z(q.iridescenceMap,F.iridescenceMapTransform);if(q.iridescenceThicknessMap)F.iridescenceThicknessMap.value=q.iridescenceThicknessMap,Z(q.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(q.transmission>0){if(F.transmission.value=q.transmission,F.transmissionSamplerMap.value=R.texture,F.transmissionSamplerSize.value.set(R.width,R.height),q.transmissionMap)F.transmissionMap.value=q.transmissionMap,Z(q.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=q.thickness,q.thicknessMap)F.thicknessMap.value=q.thicknessMap,Z(q.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=q.attenuationDistance,F.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(F.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)F.anisotropyMap.value=q.anisotropyMap,Z(q.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=q.specularIntensity,F.specularColor.value.copy(q.specularColor),q.specularColorMap)F.specularColorMap.value=q.specularColorMap,Z(q.specularColorMap,F.specularColorMapTransform);if(q.specularIntensityMap)F.specularIntensityMap.value=q.specularIntensityMap,Z(q.specularIntensityMap,F.specularIntensityMapTransform)}function O(F,q){if(q.matcap)F.matcap.value=q.matcap}function L(F,q){let R=Q.get(q).light;F.referencePosition.value.setFromMatrixPosition(R.matrixWorld),F.nearDistance.value=R.shadow.camera.near,F.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:$}}function Xq(J,Q,Z,K){let $={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,A){let P=A.program;K.uniformBlockBinding(V,P)}function U(V,A){let P=$[V.id];if(P===void 0)F(V),P=D(V),$[V.id]=P,V.addEventListener("dispose",R);let _=A.program;K.updateUBOMapping(V,_);let I=Q.render.frame;if(W[V.id]!==I)N(V),W[V.id]=I}function D(V){let A=G();V.__bindingPointIndex=A;let P=J.createBuffer(),_=V.__size,I=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,_,I),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,P),P}function G(){for(let V=0;V<Y;V++)if(X.indexOf(V)===-1)return X.push(V),V;return f0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(V){let A=$[V.id],P=V.uniforms,_=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let I=0,C=P.length;I<C;I++){let p=P[I];if(Array.isArray(p))for(let j=0,y=p.length;j<y;j++)E(p[j],I,j,_);else E(p,I,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(V,A,P,_){if(L(V,A,P,_)===!0){let{__offset:I,value:C}=V;if(Array.isArray(C)){let p=0;for(let j=0;j<C.length;j++){let y=C[j],m=q(y);if(O(y,V.__data,p),typeof y!=="number"&&typeof y!=="boolean"&&!y.isMatrix3&&!ArrayBuffer.isView(y))p+=m.storage/Float32Array.BYTES_PER_ELEMENT}}else O(C,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,I,V.__data)}}function O(V,A,P){if(typeof V==="number"||typeof V==="boolean")A[0]=V;else if(V.isMatrix3)A[0]=V.elements[0],A[1]=V.elements[1],A[2]=V.elements[2],A[3]=0,A[4]=V.elements[3],A[5]=V.elements[4],A[6]=V.elements[5],A[7]=0,A[8]=V.elements[6],A[9]=V.elements[7],A[10]=V.elements[8],A[11]=0;else if(ArrayBuffer.isView(V))A.set(new V.constructor(V.buffer,V.byteOffset,A.length));else V.toArray(A,P)}function L(V,A,P,_){let I=V.value,C=A+"_"+P;if(_[C]===void 0){if(typeof I==="number"||typeof I==="boolean")_[C]=I;else if(ArrayBuffer.isView(I))_[C]=I.slice();else _[C]=I.clone();return!0}else{let p=_[C];if(typeof I==="number"||typeof I==="boolean"){if(p!==I)return _[C]=I,!0}else if(ArrayBuffer.isView(I))return!0;else if(p.equals(I)===!1)return p.copy(I),!0}return!1}function F(V){let A=V.uniforms,P=0,_=16;for(let C=0,p=A.length;C<p;C++){let j=Array.isArray(A[C])?A[C]:[A[C]];for(let y=0,m=j.length;y<m;y++){let T=j[y],w=Array.isArray(T.value)?T.value:[T.value];for(let n=0,u=w.length;n<u;n++){let $0=w[n],i=q($0),Z0=P%_,X0=Z0%i.boundary,S0=Z0+X0;if(P+=X0,S0!==0&&_-S0<i.storage)P+=_-S0;T.__data=new Float32Array(i.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=P,P+=i.storage}}}let I=P%_;if(I>0)P+=_-I;return V.__size=P,V.__cache={},this}function q(V){let A={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")A.boundary=4,A.storage=4;else if(V.isVector2)A.boundary=8,A.storage=8;else if(V.isVector3||V.isColor)A.boundary=16,A.storage=12;else if(V.isVector4)A.boundary=16,A.storage=16;else if(V.isMatrix3)A.boundary=48,A.storage=48;else if(V.isMatrix4)A.boundary=64,A.storage=64;else if(V.isTexture)y0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))A.boundary=16,A.storage=V.byteLength;else y0("WebGLRenderer: Unsupported uniform value type.",V);return A}function R(V){let A=V.target;A.removeEventListener("dispose",R);let P=X.indexOf(A.__bindingPointIndex);X.splice(P,1),J.deleteBuffer($[A.id]),delete $[A.id],delete W[A.id]}function k(){for(let V in $)J.deleteBuffer($[V]);X=[],$={},W={}}return{bind:H,update:U,dispose:k}}var Yq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),m9=null;function Hq(){if(m9===null)m9=new fK(Yq,16,16,xJ,h9),m9.name="DFG_LUT",m9.minFilter=a8,m9.magFilter=a8,m9.wrapS=QQ,m9.wrapT=QQ,m9.generateMipmaps=!1,m9.needsUpdate=!0;return m9}class E${constructor(J={}){let{canvas:Q=SX(),context:Z=null,depth:K=!0,stencil:$=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:D=!1,reversedDepthBuffer:G=!1,outputBufferType:N=z9}=J;this.isWebGLRenderer=!0;let E;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=Z.getContextAttributes().alpha}else E=W;let O=N,L=new Set([oZ,iZ,sZ]),F=new Set([z9,BJ,W7,P6,cZ,nZ]),q=new Uint32Array(4),R=new Int32Array(4),k=new x,V=null,A=null,P=[],_=[],I=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=A9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,p=!1,j=null,y=null,m=null,T=null;this._outputColorSpace=AX;let w=0,n=0,u=null,$0=-1,i=null,Z0=new Y8,X0=new Y8,S0=null,T0=new e0(0),n0=0,u0=Q.width,S=Q.height,g=1,d=null,a=null,Q0=new Y8(0,0,u0,S),r=new Y8(0,0,u0,S),z0=!1,q0=new MQ,b0=!1,m0=!1,h0=new M8,i0=new x,r0=new Y8,V8={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F8=!1;function O8(){return u===null?g:1}let v=Z;function A8(B,f){return Q.getContext(B,f)}let J8,G8,z,M,b,s,W0,G0,E0,t,K0,R0,A0,N0,U0,j0,v0,Q8,h,F0,J0,O0,V0;try{let B={alpha:!0,depth:K,stencil:$,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:D};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${bW}`);if(Q.addEventListener("webglcontextlost",d0,!1),Q.addEventListener("webglcontextrestored",q8,!1),Q.addEventListener("webglcontextcreationerror",K8,!1),v===null){if(v=A8("webgl2",B),v===null)if(A8("webgl2"))throw new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y0()}catch(B){throw Q.removeEventListener("webglcontextlost",d0,!1),Q.removeEventListener("webglcontextrestored",q8,!1),Q.removeEventListener("webglcontextcreationerror",K8,!1),f0("WebGLRenderer: "+B.message),B}function Y0(){if(J8=new FN(v),J8.init(),J0=new Qq(v,J8),G8=new WN(v,J8,J,J0),z=new eD(v,J8),G8.reversedDepthBuffer&&G)z.buffers.depth.setReversed(!0);y=v.createFramebuffer(),m=v.createFramebuffer(),T=v.createFramebuffer(),M=new MN(v),b=new gD,s=new Jq(v,J8,z,b,G8,J0,M),W0=new EN(C),G0=new IU(v),O0=new KN(v,G0),E0=new ON(v,G0,M,O0),t=new IN(v,E0,G0,O0,M),Q8=new LN(v,G8,s),U0=new XN(b),K0=new xD(C,W0,J8,G8,O0,U0),R0=new Wq(C,b),A0=new mD,N0=new sD(J8),v0=new ZN(C,W0,z,t,E,Y),j0=new tD(C,t,G8),V0=new Xq(v,M,G8,z),h=new $N(v,J8,M),F0=new RN(v,J8,M),M.programs=K0.programs,C.capabilities=G8,C.extensions=J8,C.properties=b,C.renderLists=A0,C.shadowMap=j0,C.state=z,C.info=M}if(O!==z9)I=new BN(O,Q.width,Q.height,X,K,$);let M0=new MY(C,v);this.xr=M0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let B=J8.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=J8.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return g},this.setPixelRatio=function(B){if(B===void 0)return;g=B,this.setSize(u0,S,!1)},this.getSize=function(B){return B.set(u0,S)},this.setSize=function(B,f,o=!0){if(M0.isPresenting){y0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(u0=B,S=f,Q.width=Math.floor(B*g),Q.height=Math.floor(f*g),o===!0)Q.style.width=B+"px",Q.style.height=f+"px";if(I!==null)I.setSize(Q.width,Q.height);this.setViewport(0,0,B,f)},this.getDrawingBufferSize=function(B){return B.set(u0*g,S*g).floor()},this.setDrawingBufferSize=function(B,f,o){u0=B,S=f,g=o,Q.width=Math.floor(B*o),Q.height=Math.floor(f*o),this.setViewport(0,0,B,f)},this.setEffects=function(B){if(O===z9){f0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let f=0;f<B.length;f++)if(B[f].isOutputPass===!0){y0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(Z0)},this.getViewport=function(B){return B.copy(Q0)},this.setViewport=function(B,f,o,l){if(B.isVector4)Q0.set(B.x,B.y,B.z,B.w);else Q0.set(B,f,o,l);z.viewport(Z0.copy(Q0).multiplyScalar(g).round())},this.getScissor=function(B){return B.copy(r)},this.setScissor=function(B,f,o,l){if(B.isVector4)r.set(B.x,B.y,B.z,B.w);else r.set(B,f,o,l);z.scissor(X0.copy(r).multiplyScalar(g).round())},this.getScissorTest=function(){return z0},this.setScissorTest=function(B){z.setScissorTest(z0=B)},this.setOpaqueSort=function(B){d=B},this.setTransparentSort=function(B){a=B},this.getClearColor=function(B){return B.copy(v0.getClearColor())},this.setClearColor=function(){v0.setClearColor(...arguments)},this.getClearAlpha=function(){return v0.getClearAlpha()},this.setClearAlpha=function(){v0.setClearAlpha(...arguments)},this.clear=function(B=!0,f=!0,o=!0){let l=0;if(B){let c=!1;if(u!==null){let I0=u.texture.format;c=L.has(I0)}if(c){let I0=u.texture.type,C0=F.has(I0),L0=v0.getClearColor(),P0=v0.getClearAlpha(),_0=L0.r,l0=L0.g,s0=L0.b;if(C0)q[0]=_0,q[1]=l0,q[2]=s0,q[3]=P0,v.clearBufferuiv(v.COLOR,0,q);else R[0]=_0,R[1]=l0,R[2]=s0,R[3]=P0,v.clearBufferiv(v.COLOR,0,R)}else l|=v.COLOR_BUFFER_BIT}if(f)l|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(o)l|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(l!==0)v.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),j=B},this.dispose=function(){Q.removeEventListener("webglcontextlost",d0,!1),Q.removeEventListener("webglcontextrestored",q8,!1),Q.removeEventListener("webglcontextcreationerror",K8,!1),v0.dispose(),A0.dispose(),N0.dispose(),b.dispose(),W0.dispose(),t.dispose(),O0.dispose(),V0.dispose(),K0.dispose(),M0.dispose(),M0.removeEventListener("sessionstart",$W),M0.removeEventListener("sessionend",WW),_J.stop()};function d0(B){B.preventDefault(),J7("WebGLRenderer: Context Lost."),p=!0}function q8(){J7("WebGLRenderer: Context Restored."),p=!1;let B=M.autoReset,f=j0.enabled,o=j0.autoUpdate,l=j0.needsUpdate,c=j0.type;Y0(),M.autoReset=B,j0.enabled=f,j0.autoUpdate=o,j0.needsUpdate=l,j0.type=c}function K8(B){f0("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function S9(B){let f=B.target;f.removeEventListener("dispose",S9),r9(f)}function r9(B){OH(B),b.remove(B)}function OH(B){let f=b.get(B).programs;if(f!==void 0){if(f.forEach(function(o){K0.releaseProgram(o)}),B.isShaderMaterial)K0.releaseShaderCache(B)}}this.renderBufferDirect=function(B,f,o,l,c,I0){if(f===null)f=V8;let C0=c.isMesh&&c.matrixWorld.determinantAffine()<0,L0=LH(B,f,o,l,c);z.setMaterial(l,C0);let P0=o.index,_0=1;if(l.wireframe===!0){if(P0=E0.getWireframeAttribute(o),P0===void 0)return;_0=2}let l0=o.drawRange,s0=o.attributes.position,k0=l0.start*_0,$8=(l0.start+l0.count)*_0;if(I0!==null)k0=Math.max(k0,I0.start*_0),$8=Math.min($8,(I0.start+I0.count)*_0);if(P0!==null)k0=Math.max(k0,0),$8=Math.min($8,P0.count);else if(s0!==void 0&&s0!==null)k0=Math.max(k0,0),$8=Math.min($8,s0.count);let B8=$8-k0;if(B8<0||B8===1/0)return;O0.setup(c,l,L0,o,P0);let R8,N8=h;if(P0!==null)R8=G0.get(P0),N8=F0,N8.setIndex(R8);if(c.isMesh)if(l.wireframe===!0)z.setLineWidth(l.wireframeLinewidth*O8()),N8.setMode(v.LINES);else N8.setMode(v.TRIANGLES);else if(c.isLine){let b8=l.linewidth;if(b8===void 0)b8=1;if(z.setLineWidth(b8*O8()),c.isLineSegments)N8.setMode(v.LINES);else if(c.isLineLoop)N8.setMode(v.LINE_LOOP);else N8.setMode(v.LINE_STRIP)}else if(c.isPoints)N8.setMode(v.POINTS);else if(c.isSprite)N8.setMode(v.TRIANGLES);if(c.isBatchedMesh)if(!J8.get("WEBGL_multi_draw")){let{_multiDrawStarts:b8,_multiDrawCounts:B0,_multiDrawCount:d8}=c,t0=P0?G0.get(P0).bytesPerElement:1,U9=b.get(l).currentProgram.getUniforms();for(let j9=0;j9<d8;j9++)U9.setValue(v,"_gl_DrawID",j9),N8.render(b8[j9]/t0,B0[j9])}else N8.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else if(c.isInstancedMesh)N8.renderInstances(k0,B8,c.count);else if(o.isInstancedBufferGeometry){let b8=o._maxInstanceCount!==void 0?o._maxInstanceCount:1/0,B0=Math.min(o.instanceCount,b8);N8.renderInstances(k0,B8,B0)}else N8.render(k0,B8)};function KW(B,f,o,l){if(j!==null&&B.isNodeMaterial)j.setObject(l,B);if(b0===!0)U0.setState(B,o,!1);if(B.transparent===!0&&B.side===b9&&B.forceSinglePass===!1)B.side=o8,B.needsUpdate=!0,w7(B,f,l),B.side=C6,B.needsUpdate=!0,w7(B,f,l),B.side=b9;else w7(B,f,l)}this.compile=function(B,f,o=null){if(o===null)o=B;if(j!==null)j.renderStart(B,f,o);if(A=N0.get(o),A.init(f),_.push(A),o.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}}),B!==o)B.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}});if(A.setupLights(),j!==null)j.updateLights(A.state.lightsArray);if(m0=this.localClippingEnabled,b0=U0.init(this.clippingPlanes,m0),b0===!0)U0.setGlobalState(this.clippingPlanes,f);if(j!==null)j0.render(A.state.shadowsArray,o,f);let l=new Set;if(B.traverse(function(c){if(!(c.isMesh||c.isPoints||c.isLine||c.isSprite))return;let I0=c.material;if(I0)if(Array.isArray(I0))for(let C0=0;C0<I0.length;C0++){let L0=I0[C0];KW(L0,o,f,c),l.add(L0)}else KW(I0,o,f,c),l.add(I0)}),A=_.pop(),j!==null)j.renderEnd();return l},this.compileAsync=function(B,f,o=null){let l=this.compile(B,f,o);return new Promise((c)=>{function I0(){if(l.forEach(function(C0){let P0=b.get(C0).currentProgram;if(P0===void 0||P0.isReady())l.delete(C0)}),l.size===0){c(B);return}setTimeout(I0,10)}if(J8.get("KHR_parallel_shader_compile")!==null)I0();else setTimeout(I0,10)})};let UZ=null;function RH(B){if(UZ)UZ(B)}function $W(){_J.stop()}function WW(){_J.start()}let _J=new XY;if(_J.setAnimationLoop(RH),typeof self!=="undefined")_J.setContext(self);this.setAnimationLoop=function(B){UZ=B,M0.setAnimationLoop(B),B===null?_J.stop():_J.start()},M0.addEventListener("sessionstart",$W),M0.addEventListener("sessionend",WW),this.render=function(B,f){if(f!==void 0&&f.isCamera!==!0){f0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(j!==null)j.renderStart(B,f);let o=M0.enabled===!0&&M0.isPresenting===!0,l=I!==null&&(u===null||o)&&I.begin(C,u);if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(M0.enabled===!0&&M0.isPresenting===!0&&(I===null||I.isCompositing()===!1)){if(M0.cameraAutoUpdate===!0)M0.updateCamera(f);f=M0.getCamera()}if(B.isScene===!0)B.onBeforeRender(C,B,f,u);if(A=N0.get(B,_.length),A.init(f),A.state.textureUnits=s.getTextureUnits(),_.push(A),h0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),q0.setFromProjectionMatrix(h0,wK,f.reversedDepth),m0=this.localClippingEnabled,b0=U0.init(this.clippingPlanes,m0),V=A0.get(B,P.length),V.init(),P.push(V),M0.enabled===!0&&M0.isPresenting===!0){let C0=C.xr.getDepthSensingMesh();if(C0!==null)GZ(C0,f,-1/0,C.sortObjects)}if(GZ(B,f,0,C.sortObjects),V.finish(),j!==null)j.updateLights(A.state.lightsArray);if(C.sortObjects===!0)V.sort(d,a);if(F8=M0.enabled===!1||M0.isPresenting===!1||M0.hasDepthSensing()===!1,F8)v0.addToRenderList(V,B);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(b0===!0)U0.beginShadows();let c=A.state.shadowsArray;if(j0.render(c,B,f),b0===!0)U0.endShadows();if((l&&I.hasRenderPass())===!1){let{opaque:C0,transmissive:L0}=V;if(A.setupLights(),f.isArrayCamera){let P0=f.cameras;if(L0.length>0)for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0];YW(C0,L0,B,s0)}if(F8)v0.render(B);for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0];XW(V,B,s0,s0.viewport)}}else{if(L0.length>0)YW(C0,L0,B,f);if(F8)v0.render(B);XW(V,B,f)}}if(u!==null&&n===0)s.updateMultisampleRenderTarget(u),s.updateRenderTargetMipmap(u);if(l)I.end(C);if(B.isScene===!0)B.onAfterRender(C,B,f);if(O0.resetDefaultState(),$0=-1,i=null,_.pop(),_.length>0){if(A=_[_.length-1],s.setTextureUnits(A.state.textureUnits),b0===!0)U0.setGlobalState(C.clippingPlanes,A.state.camera)}else A=null;if(P.pop(),P.length>0)V=P[P.length-1];else V=null;if(j!==null)j.renderEnd()};function GZ(B,f,o,l){if(B.visible===!1)return;if(B.layers.test(f.layers)){if(B.isGroup)o=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(f)}else if(B.isLightProbeGrid)A.pushLightProbeGrid(B);else if(B.isLight){if(A.pushLight(B),B.castShadow)A.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(q0)){if(l)r0.setFromMatrixPosition(B.matrixWorld).applyMatrix4(h0);let C0=t.update(B),L0=B.material;if(L0.visible)V.push(B,C0,L0,o,r0.z,null,f)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||B.intersectsFrustum(q0)){let C0=t.update(B),L0=B.material;if(l){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();r0.copy(B.boundingSphere.center)}else{if(C0.boundingSphere===null)C0.computeBoundingSphere();r0.copy(C0.boundingSphere.center)}r0.applyMatrix4(B.matrixWorld).applyMatrix4(h0)}if(Array.isArray(L0)){let P0=C0.groups;for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0],k0=L0[s0.materialIndex];if(k0&&k0.visible)V.push(B,C0,k0,o,r0.z,s0,f)}}else if(L0.visible)V.push(B,C0,L0,o,r0.z,null,f)}}}let I0=B.children;for(let C0=0,L0=I0.length;C0<L0;C0++)GZ(I0[C0],f,o,l)}function XW(B,f,o,l){let{opaque:c,transmissive:I0,transparent:C0}=B;if(A.setupLightsView(o),b0===!0)U0.setGlobalState(C.clippingPlanes,o);if(l)z.viewport(Z0.copy(l));if(c.length>0)T7(c,f,o);if(I0.length>0)T7(I0,f,o);if(C0.length>0)T7(C0,f,o);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function YW(B,f,o,l){if((o.isScene===!0?o.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[l.id]===void 0){let k0=J8.has("EXT_color_buffer_half_float")||J8.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[l.id]=new $9(1,1,{generateMipmaps:!0,type:k0?h9:z9,minFilter:bJ,samples:Math.max(4,G8.samples),stencilBuffer:$,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:o0.workingColorSpace})}let I0=A.state.transmissionRenderTarget[l.id],C0=l.viewport||Z0;I0.setSize(C0.z*C.transmissionResolutionScale,C0.w*C.transmissionResolutionScale);let L0=C.getRenderTarget(),P0=C.getActiveCubeFace(),_0=C.getActiveMipmapLevel();if(C.setRenderTarget(I0),C.getClearColor(T0),n0=C.getClearAlpha(),n0<1)C.setClearColor(16777215,0.5);if(C.clear(),F8)v0.render(o);let l0=C.toneMapping;C.toneMapping=A9;let s0=l.viewport;if(l.viewport!==void 0)l.viewport=void 0;if(A.setupLightsView(l),b0===!0)U0.setGlobalState(C.clippingPlanes,l);if(T7(B,o,l),s.updateMultisampleRenderTarget(I0),s.updateRenderTargetMipmap(I0),J8.has("WEBGL_multisampled_render_to_texture")===!1){let k0=!1;for(let $8=0,B8=f.length;$8<B8;$8++){let R8=f[$8],{object:N8,geometry:b8,material:B0,group:d8}=R8;if(B0.side===b9&&N8.layers.test(l.layers)){let t0=B0.side;B0.side=o8,B0.needsUpdate=!0,HW(N8,o,l,b8,B0,d8),B0.side=t0,B0.needsUpdate=!0,k0=!0}}if(k0===!0)s.updateMultisampleRenderTarget(I0),s.updateRenderTargetMipmap(I0)}if(C.setRenderTarget(L0,P0,_0),C.setClearColor(T0,n0),s0!==void 0)l.viewport=s0;C.toneMapping=l0}function T7(B,f,o){let l=f.isScene===!0?f.overrideMaterial:null;for(let c=0,I0=B.length;c<I0;c++){let C0=B[c],{object:L0,geometry:P0,group:_0}=C0,l0=C0.material;if(l0.allowOverride===!0&&l!==null)l0=l;if(L0.layers.test(o.layers))HW(L0,f,o,P0,l0,_0)}}function HW(B,f,o,l,c,I0){if(j!==null&&c.isNodeMaterial)j.setObject(B,c);if(B.onBeforeRender(C,f,o,l,c,I0),B.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),c.onBeforeRender(C,f,o,l,B,I0),c.transparent===!0&&c.side===b9&&c.forceSinglePass===!1)c.side=o8,c.needsUpdate=!0,C.renderBufferDirect(o,f,l,c,B,I0),c.side=C6,c.needsUpdate=!0,C.renderBufferDirect(o,f,l,c,B,I0),c.side=b9;else C.renderBufferDirect(o,f,l,c,B,I0);B.onAfterRender(C,f,o,l,c,I0)}function w7(B,f,o){if(f.isScene!==!0)f=V8;let l=b.get(B),c=A.state.lights,I0=A.state.shadowsArray,C0=c.state.version,L0=K0.getParameters(B,c.state,I0,f,o,A.state.lightProbeGridArray),P0=K0.getProgramCacheKey(L0),_0=l.programs;l.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?f.environment:null,l.fog=f.fog;let l0=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;if(l.envMap=W0.get(B.envMap||l.environment,l0),l.envMapRotation=l.environment!==null&&B.envMap===null?f.environmentRotation:B.envMapRotation,_0===void 0)B.addEventListener("dispose",S9),_0=new Map,l.programs=_0;let s0=_0.get(P0);if(s0!==void 0){if(l.currentProgram===s0&&l.lightsStateVersion===C0)return GW(B,L0),s0}else{if(L0.uniforms=K0.getUniforms(B),j!==null&&B.isNodeMaterial)j.build(B,o,L0);B.onBeforeCompile(L0,C),s0=K0.acquireProgram(L0,P0),_0.set(P0,s0),l.uniforms=L0.uniforms}let k0=l.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)k0.clippingPlanes=U0.uniform;if(GW(B,L0),l.needsLights=VH(B),l.lightsStateVersion=C0,l.needsLights)k0.ambientLightColor.value=c.state.ambient,k0.lightProbe.value=c.state.probe,k0.sunLights.value=c.state.sun,k0.sunLightShadows.value=c.state.sunShadow,k0.directionalLights.value=c.state.directional,k0.directionalLightShadows.value=c.state.directionalShadow,k0.spotLights.value=c.state.spot,k0.spotLightShadows.value=c.state.spotShadow,k0.rectAreaLights.value=c.state.rectArea,k0.ltc_1.value=c.state.rectAreaLTC1,k0.ltc_2.value=c.state.rectAreaLTC2,k0.pointLights.value=c.state.point,k0.pointLightShadows.value=c.state.pointShadow,k0.hemisphereLights.value=c.state.hemi,k0.sunShadowMatrix.value=c.state.sunShadowMatrix,k0.sunShadowCascade.value=c.state.sunShadowCascade,k0.directionalShadowMatrix.value=c.state.directionalShadowMatrix,k0.spotLightMatrix.value=c.state.spotLightMatrix,k0.spotLightMap.value=c.state.spotLightMap,k0.pointShadowMatrix.value=c.state.pointShadowMatrix;return l.lightProbeGrid=A.state.lightProbeGridArray.length>0,l.currentProgram=s0,l.uniformsList=null,s0}function UW(B){if(B.uniformsList===null){let f=B.currentProgram.getUniforms();B.uniformsList=R7.seqWithValue(f.seq,B.uniforms)}return B.uniformsList}function GW(B,f){let o=b.get(B);o.outputColorSpace=f.outputColorSpace,o.batching=f.batching,o.batchingColor=f.batchingColor,o.instancing=f.instancing,o.instancingColor=f.instancingColor,o.instancingMorph=f.instancingMorph,o.skinning=f.skinning,o.morphTargets=f.morphTargets,o.morphNormals=f.morphNormals,o.morphColors=f.morphColors,o.morphTargetsCount=f.morphTargetsCount,o.numClippingPlanes=f.numClippingPlanes,o.numIntersection=f.numClipIntersection,o.vertexAlphas=f.vertexAlphas,o.vertexTangents=f.vertexTangents,o.toneMapping=f.toneMapping}function MH(B,f){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;k.setFromMatrixPosition(f.matrixWorld);for(let o=0,l=B.length;o<l;o++){let c=B[o];if(c.texture!==null&&c.boundingBox.containsPoint(k))return c}return null}function LH(B,f,o,l,c){if(f.isScene!==!0)f=V8;s.resetTextureUnits();let I0=f.fog,C0=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?f.environment:null,L0=u===null?C.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:o0.workingColorSpace,P0=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap,_0=W0.get(l.envMap||C0,P0),l0=l.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,s0=!!o.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),k0=!!o.morphAttributes.position,$8=!!o.morphAttributes.normal,B8=!!o.morphAttributes.color,R8=A9;if(l.toneMapped){if(u===null||u.isXRRenderTarget===!0)R8=C.toneMapping}let N8=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,b8=N8!==void 0?N8.length:0,B0=b.get(l),d8=A.state.lights;if(b0===!0){if(m0===!0||B!==i){let E8=B===i&&l.id===$0;U0.setState(l,B,E8)}}let t0=!1;if(l.version===B0.__version){if(B0.needsLights&&B0.lightsStateVersion!==d8.state.version)t0=!0;else if(B0.outputColorSpace!==L0)t0=!0;else if(c.isBatchedMesh&&B0.batching===!1)t0=!0;else if(!c.isBatchedMesh&&B0.batching===!0)t0=!0;else if(c.isBatchedMesh&&B0.batchingColor===!0&&c._colorsTexture===null)t0=!0;else if(c.isBatchedMesh&&B0.batchingColor===!1&&c._colorsTexture!==null)t0=!0;else if(c.isInstancedMesh&&B0.instancing===!1)t0=!0;else if(!c.isInstancedMesh&&B0.instancing===!0)t0=!0;else if(c.isSkinnedMesh&&B0.skinning===!1)t0=!0;else if(!c.isSkinnedMesh&&B0.skinning===!0)t0=!0;else if(c.isInstancedMesh&&B0.instancingColor===!0&&c.instanceColor===null)t0=!0;else if(c.isInstancedMesh&&B0.instancingColor===!1&&c.instanceColor!==null)t0=!0;else if(c.isInstancedMesh&&B0.instancingMorph===!0&&c.morphTexture===null)t0=!0;else if(c.isInstancedMesh&&B0.instancingMorph===!1&&c.morphTexture!==null)t0=!0;else if(B0.envMap!==_0)t0=!0;else if(l.fog===!0&&B0.fog!==I0)t0=!0;else if(B0.numClippingPlanes!==void 0&&(B0.numClippingPlanes!==U0.numPlanes||B0.numIntersection!==U0.numIntersection))t0=!0;else if(B0.vertexAlphas!==l0)t0=!0;else if(B0.vertexTangents!==s0)t0=!0;else if(B0.morphTargets!==k0)t0=!0;else if(B0.morphNormals!==$8)t0=!0;else if(B0.morphColors!==B8)t0=!0;else if(B0.toneMapping!==R8)t0=!0;else if(B0.morphTargetsCount!==b8)t0=!0;else if(!!B0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)t0=!0}else t0=!0,B0.__version=l.version;let U9=B0.currentProgram;if(t0===!0){if(U9=w7(l,f,c),j&&l.isNodeMaterial)j.onUpdateProgram(l,U9,B0)}let j9=!1,GJ=!1,Z6=!1,U8=U9.getUniforms(),L8=B0.uniforms;if(z.useProgram(U9.program))j9=!0,GJ=!0,Z6=!0;if(l.id!==$0)$0=l.id,GJ=!0;if(B0.needsLights){let E8=MH(A.state.lightProbeGridArray,c);if(B0.lightProbeGrid!==E8)B0.lightProbeGrid=E8,GJ=!0}if(j9||i!==B){if(z.buffers.depth.getReversed()&&B.reversedDepth!==!0)B._reversedDepth=!0,B.updateProjectionMatrix();U8.setValue(v,"projectionMatrix",B.projectionMatrix),U8.setValue(v,"viewMatrix",B.matrixWorldInverse);let DJ=U8.map.cameraPosition;if(DJ!==void 0)DJ.setValue(v,i0.setFromMatrixPosition(B.matrixWorld));if(G8.logarithmicDepthBuffer)U8.setValue(v,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)U8.setValue(v,"isOrthographic",B.isOrthographicCamera===!0);if(i!==B)i=B,GJ=!0,Z6=!0}if(B0.needsLights){if(d8.state.sunShadowMap.length>0)U8.setValue(v,"sunShadowMap",d8.state.sunShadowMap,s);if(d8.state.directionalShadowMap.length>0)U8.setValue(v,"directionalShadowMap",d8.state.directionalShadowMap,s);if(d8.state.spotShadowMap.length>0)U8.setValue(v,"spotShadowMap",d8.state.spotShadowMap,s);if(d8.state.pointShadowMap.length>0)U8.setValue(v,"pointShadowMap",d8.state.pointShadowMap,s)}if(c.isSkinnedMesh){U8.setOptional(v,c,"bindMatrix"),U8.setOptional(v,c,"bindMatrixInverse");let E8=c.skeleton;if(E8){if(E8.boneTexture===null)E8.computeBoneTexture();U8.setValue(v,"boneTexture",E8.boneTexture,s)}}if(c.isBatchedMesh){if(U8.setOptional(v,c,"batchingTexture"),U8.setValue(v,"batchingTexture",c._matricesTexture,s),U8.setOptional(v,c,"batchingIdTexture"),U8.setValue(v,"batchingIdTexture",c._indirectTexture,s),U8.setOptional(v,c,"batchingColorTexture"),c._colorsTexture!==null)U8.setValue(v,"batchingColorTexture",c._colorsTexture,s)}let NJ=o.morphAttributes;if(NJ.position!==void 0||NJ.normal!==void 0||NJ.color!==void 0)Q8.update(c,o,U9);if(GJ||B0.receiveShadow!==c.receiveShadow)B0.receiveShadow=c.receiveShadow,U8.setValue(v,"receiveShadow",c.receiveShadow);if((l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial)&&l.envMap===null&&f.environment!==null)L8.envMapIntensity.value=f.environmentIntensity;if(L8.dfgLUT!==void 0)L8.dfgLUT.value=Hq();if(GJ){if(U8.setValue(v,"toneMappingExposure",C.toneMappingExposure),B0.needsLights)IH(L8,Z6);if(I0&&l.fog===!0)R0.refreshFogUniforms(L8,I0);if(R0.refreshMaterialUniforms(L8,l,g,S,A.state.transmissionRenderTarget[B.id]),B0.needsLights&&B0.lightProbeGrid){let E8=B0.lightProbeGrid;L8.probesSH.value=E8.texture,L8.probesMin.value.copy(E8.boundingBox.min),L8.probesMax.value.copy(E8.boundingBox.max),L8.probesResolution.value.copy(E8.resolution)}R7.upload(v,UW(B0),L8,s)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)R7.upload(v,UW(B0),L8,s),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)U8.setValue(v,"center",c.center);if(U8.setValue(v,"modelViewMatrix",c.modelViewMatrix),U8.setValue(v,"normalMatrix",c.normalMatrix),U8.setValue(v,"modelMatrix",c.matrixWorld),l.uniformsGroups!==void 0){let E8=l.uniformsGroups;for(let DJ=0,K6=E8.length;DJ<K6;DJ++){let DW=E8[DJ];V0.update(DW,U9),V0.bind(DW,U9)}}return U9}function IH(B,f){B.ambientLightColor.needsUpdate=f,B.lightProbe.needsUpdate=f,B.sunLights.needsUpdate=f,B.sunLightShadows.needsUpdate=f,B.directionalLights.needsUpdate=f,B.directionalLightShadows.needsUpdate=f,B.pointLights.needsUpdate=f,B.pointLightShadows.needsUpdate=f,B.spotLights.needsUpdate=f,B.spotLightShadows.needsUpdate=f,B.rectAreaLights.needsUpdate=f,B.hemisphereLights.needsUpdate=f}function VH(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(B,f,o){let l=b.get(B);if(l.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,l.__autoAllocateDepthBuffer===!1)l.__useRenderToTexture=!1;b.get(B.texture).__webglTexture=f,b.get(B.depthTexture).__webglTexture=l.__autoAllocateDepthBuffer?void 0:o,l.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,f){let o=b.get(B);o.__webglFramebuffer=f,o.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(B,f=0,o=0){u=B,w=f,n=o;let l=null,c=!1,I0=!1;if(B){let L0=b.get(B);if(L0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(v.FRAMEBUFFER,L0.__webglFramebuffer),Z0.copy(B.viewport),X0.copy(B.scissor),S0=B.scissorTest,z.viewport(Z0),z.scissor(X0),z.setScissorTest(S0),$0=-1;return}else if(L0.__webglFramebuffer===void 0)s.setupRenderTarget(B);else if(L0.__hasExternalTextures)s.rebindTextures(B,b.get(B.texture).__webglTexture,b.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let l0=B.depthTexture;if(L0.__boundDepthTexture!==l0){if(l0!==null&&b.has(l0)&&(B.width!==l0.image.width||B.height!==l0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s.setupDepthRenderbuffer(B)}}let P0=B.texture;if(P0.isData3DTexture||P0.isDataArrayTexture||P0.isCompressedArrayTexture)I0=!0;let _0=b.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(_0[f]))l=_0[f][o];else l=_0[f];c=!0}else if(B.samples>0&&s.useMultisampledRTT(B)===!1)l=b.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(_0))l=_0[o];else l=_0;Z0.copy(B.viewport),X0.copy(B.scissor),S0=B.scissorTest}else Z0.copy(Q0).multiplyScalar(g).floor(),X0.copy(r).multiplyScalar(g).floor(),S0=z0;if(o!==0)l=y;if(z.bindFramebuffer(v.FRAMEBUFFER,l))z.drawBuffers(B,l);if(z.viewport(Z0),z.scissor(X0),z.setScissorTest(S0),c){let L0=b.get(B.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+f,L0.__webglTexture,o)}else if(I0){let L0=f;for(let P0=0;P0<B.textures.length;P0++){let _0=b.get(B.textures[P0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+P0,_0.__webglTexture,o,L0)}}else if(B!==null&&o!==0){let L0=b.get(B.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,L0.__webglTexture,o)}$0=-1};function NW(B){let f=b.get(B);if(f.__readFormat!==B.format||f.__readType!==B.type)f.__readFormat=B.format,f.__readType=B.type,f.__formatReadable=G8.textureFormatReadable(B.format),f.__typeReadable=G8.textureTypeReadable(B.type);return f}if(this.readRenderTargetPixels=function(B,f,o,l,c,I0,C0,L0=0){if(!(B&&B.isWebGLRenderTarget)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P0=b.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&C0!==void 0)P0=P0[C0];if(P0){z.bindFramebuffer(v.FRAMEBUFFER,P0);try{let _0=B.textures[L0],l0=_0.format,s0=_0.type;if(B.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+L0);let k0=NW(_0);if(k0.__formatReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(k0.__typeReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=B.width-l&&(o>=0&&o<=B.height-c))v.readPixels(f,o,l,c,J0.convert(l0),J0.convert(s0),I0)}finally{let _0=u!==null?b.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,_0)}}},this.readRenderTargetPixelsAsync=async function(B,f,o,l,c,I0,C0,L0=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let P0=b.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&C0!==void 0)P0=P0[C0];if(P0)if(f>=0&&f<=B.width-l&&(o>=0&&o<=B.height-c)){z.bindFramebuffer(v.FRAMEBUFFER,P0);let _0=B.textures[L0],l0=_0.format,s0=_0.type;if(B.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+L0);let k0=NW(_0);if(k0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(k0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $8=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,$8),v.bufferData(v.PIXEL_PACK_BUFFER,I0.byteLength,v.STREAM_READ),v.readPixels(f,o,l,c,J0.convert(l0),J0.convert(s0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let B8=u!==null?b.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,B8);let R8=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await vX(v,R8,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,$8),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,I0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer($8),v.deleteSync(R8),I0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,f=null,o=0){let l=Math.pow(2,-o),c=Math.floor(B.image.width*l),I0=Math.floor(B.image.height*l),C0=f!==null?f.x:0,L0=f!==null?f.y:0;s.setTexture2D(B,0),v.copyTexSubImage2D(v.TEXTURE_2D,o,0,0,C0,L0,c,I0),z.unbindTexture()},this.copyTextureToTexture=function(B,f,o=null,l=null,c=0,I0=0){let C0,L0,P0,_0,l0,s0,k0,$8,B8,R8=B.isCompressedTexture?B.mipmaps[I0]:B.image;if(o!==null)C0=o.max.x-o.min.x,L0=o.max.y-o.min.y,P0=o.isBox3?o.max.z-o.min.z:1,_0=o.min.x,l0=o.min.y,s0=o.isBox3?o.min.z:0;else{let L8=Math.pow(2,-c);if(C0=Math.floor(R8.width*L8),L0=Math.floor(R8.height*L8),B.isDataArrayTexture)P0=R8.depth;else if(B.isData3DTexture)P0=Math.floor(R8.depth*L8);else P0=1;_0=0,l0=0,s0=0}if(l!==null)k0=l.x,$8=l.y,B8=l.z;else k0=0,$8=0,B8=0;let N8=J0.convert(f.format),b8=J0.convert(f.type),B0;if(f.isData3DTexture)s.setTexture3D(f,0),B0=v.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)s.setTexture2DArray(f,0),B0=v.TEXTURE_2D_ARRAY;else s.setTexture2D(f,0),B0=v.TEXTURE_2D;z.activeTexture(v.TEXTURE0),z.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,f.flipY),z.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),z.pixelStorei(v.UNPACK_ALIGNMENT,f.unpackAlignment);let d8=z.getParameter(v.UNPACK_ROW_LENGTH),t0=z.getParameter(v.UNPACK_IMAGE_HEIGHT),U9=z.getParameter(v.UNPACK_SKIP_PIXELS),j9=z.getParameter(v.UNPACK_SKIP_ROWS),GJ=z.getParameter(v.UNPACK_SKIP_IMAGES);z.pixelStorei(v.UNPACK_ROW_LENGTH,R8.width),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,R8.height),z.pixelStorei(v.UNPACK_SKIP_PIXELS,_0),z.pixelStorei(v.UNPACK_SKIP_ROWS,l0),z.pixelStorei(v.UNPACK_SKIP_IMAGES,s0);let Z6=B.isDataArrayTexture||B.isData3DTexture,U8=f.isDataArrayTexture||f.isData3DTexture;if(B.isDepthTexture){let L8=b.get(B),NJ=b.get(f),E8=b.get(L8.__renderTarget),DJ=b.get(NJ.__renderTarget);z.bindFramebuffer(v.READ_FRAMEBUFFER,E8.__webglFramebuffer),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,DJ.__webglFramebuffer);for(let K6=0;K6<P0;K6++){if(Z6)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,b.get(B).__webglTexture,c,s0+K6),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,b.get(f).__webglTexture,I0,B8+K6);v.blitFramebuffer(_0,l0,C0,L0,k0,$8,C0,L0,v.DEPTH_BUFFER_BIT,v.NEAREST)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(c!==0||B.isRenderTargetTexture||b.has(B)){let L8=b.get(B),NJ=b.get(f);z.bindFramebuffer(v.READ_FRAMEBUFFER,m),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,T);for(let E8=0;E8<P0;E8++){if(Z6)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,L8.__webglTexture,c,s0+E8);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,L8.__webglTexture,c);if(U8)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,NJ.__webglTexture,I0,B8+E8);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,NJ.__webglTexture,I0);if(c!==0)v.blitFramebuffer(_0,l0,C0,L0,k0,$8,C0,L0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(U8)v.copyTexSubImage3D(B0,I0,k0,$8,B8+E8,_0,l0,C0,L0);else v.copyTexSubImage2D(B0,I0,k0,$8,_0,l0,C0,L0)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(U8)if(B.isDataTexture||B.isData3DTexture)v.texSubImage3D(B0,I0,k0,$8,B8,C0,L0,P0,N8,b8,R8.data);else if(f.isCompressedArrayTexture)v.compressedTexSubImage3D(B0,I0,k0,$8,B8,C0,L0,P0,N8,R8.data);else v.texSubImage3D(B0,I0,k0,$8,B8,C0,L0,P0,N8,b8,R8);else if(B.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,I0,k0,$8,C0,L0,N8,b8,R8.data);else if(B.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,I0,k0,$8,R8.width,R8.height,N8,R8.data);else v.texSubImage2D(v.TEXTURE_2D,I0,k0,$8,C0,L0,N8,b8,R8);if(z.pixelStorei(v.UNPACK_ROW_LENGTH,d8),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,t0),z.pixelStorei(v.UNPACK_SKIP_PIXELS,U9),z.pixelStorei(v.UNPACK_SKIP_ROWS,j9),z.pixelStorei(v.UNPACK_SKIP_IMAGES,GJ),I0===0&&f.generateMipmaps)v.generateMipmap(B0);z.unbindTexture()},this.initRenderTarget=function(B){if(b.get(B).__webglFramebuffer===void 0)s.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)s.setTextureCube(B,0);else if(B.isData3DTexture)s.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)s.setTexture2DArray(B,0);else s.setTexture2D(B,0);z.unbindTexture()},this.resetState=function(){w=0,n=0,u=null,z.reset(),O0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=o0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=o0._getUnpackColorSpace()}}var IY={type:"change"},R$={type:"start"},BY={type:"end"},jQ=new G7,VY=new N9,Uq=Math.cos(70*X7.DEG2RAD),k8=new x,e8=2*Math.PI,H8={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},O$=0.000001;class M$ extends kQ{constructor(J,Q=null){super(J,Q);if(this.state=H8.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:LJ.ROTATE,MIDDLE:LJ.DOLLY,RIGHT:LJ.PAN},this.touches={ONE:IJ.ROTATE,TWO:IJ.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new r8,this._lastTargetPosition=new x,this._quat=new r8().setFromUnitVectors(J.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q7,this._sphericalDelta=new q7,this._scale=1,this._panOffset=new x,this._rotateStart=new x0,this._rotateEnd=new x0,this._rotateDelta=new x0,this._panStart=new x0,this._panEnd=new x0,this._panDelta=new x0,this._dollyStart=new x0,this._dollyEnd=new x0,this._dollyDelta=new x0,this._dollyDirection=new x,this._mouse=new x0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nq.bind(this),this._onPointerDown=Gq.bind(this),this._onPointerUp=Dq.bind(this),this._onContextMenu=Lq.bind(this),this._onMouseWheel=Fq.bind(this),this._onKeyDown=Oq.bind(this),this._onTouchStart=Rq.bind(this),this._onTouchMove=Mq.bind(this),this._onMouseDown=qq.bind(this),this._onMouseMove=Eq.bind(this),this._interceptControlDown=Iq.bind(this),this._interceptControlUp=Vq.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=H8.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(IY),this.update(),this.state=H8.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(k8.copy(Q).sub(this.target),k8.applyQuaternion(this._quat),this._spherical.setFromVector3(k8),this.autoRotate&&this.state===H8.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Z=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite(Z)&&isFinite(K)){if(Z<-Math.PI)Z+=e8;else if(Z>Math.PI)Z-=e8;if(K<-Math.PI)K+=e8;else if(K>Math.PI)K-=e8;if(Z<=K)this._spherical.theta=Math.max(Z,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Z+K)/2?Math.max(Z,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let $=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),$=W!=this._spherical.radius}if(k8.setFromSpherical(this._spherical),k8.applyQuaternion(this._quatInverse),Q.copy(this.target).add(k8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=k8.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),$=!!Y}else if(this.object.isOrthographicCamera){let X=new x(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),$=Y!==this.object.zoom;let H=new x(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),W=k8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(jQ.origin.copy(this.object.position),jQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jQ.direction))<Uq)this.object.lookAt(this.target);else VY.setFromNormalAndCoplanarPoint(this.object.up,this.target),jQ.intersectPlane(VY,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),$=!0}if(this._scale=1,this._performCursorZoom=!1,$||this._lastPosition.distanceToSquared(this.object.position)>O$||8*(1-this._lastQuaternion.dot(this.object.quaternion))>O$||this._lastTargetPosition.distanceToSquared(this.target)>O$)return this.dispatchEvent(IY),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return e8/60*this.autoRotateSpeed*J;else return e8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){k8.setFromMatrixColumn(Q,0),k8.multiplyScalar(-J),this._panOffset.add(k8)}_panUp(J,Q){if(this.screenSpacePanning===!0)k8.setFromMatrixColumn(Q,1);else k8.setFromMatrixColumn(Q,0),k8.crossVectors(this.object.up,k8);k8.multiplyScalar(J),this._panOffset.add(k8)}_pan(J,Q){let Z=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;k8.copy(K).sub(this.target);let $=k8.length();$*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*$/Z.clientHeight,this.object.matrix),this._panUp(2*Q*$/Z.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Z.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/Z.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Z=this.domElement.getBoundingClientRect(),K=J-Z.left,$=Q-Z.top,W=Z.width,X=Z.height;this._mouse.x=K/W*2-1,this._mouse.y=-($/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(e8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(e8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(e8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-e8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(e8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-e8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set(Z,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set(Z,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyStart.set(0,$)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Z=this._getSecondPointerPosition(J),K=0.5*(J.pageX+Z.x),$=0.5*(J.pageY+Z.y);this._rotateEnd.set(K,$)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(e8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(e8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set(Z,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyEnd.set(0,$),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new x0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,Z={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Z.deltaY*=10;return Z}}function Gq(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function Nq(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function Dq(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(BY),this.state=H8.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],Z=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:Z.x,pageY:Z.y});break}}function qq(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case LJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=H8.DOLLY;break;case LJ.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H8.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H8.ROTATE}break;case LJ.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H8.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H8.PAN}break;default:this.state=H8.NONE}if(this.state!==H8.NONE)this.dispatchEvent(R$)}function Eq(J){switch(this.state){case H8.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case H8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case H8.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function Fq(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==H8.NONE)return;J.preventDefault(),this.dispatchEvent(R$),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(BY)}function Oq(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function Rq(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case IJ.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=H8.TOUCH_ROTATE;break;case IJ.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=H8.TOUCH_PAN;break;default:this.state=H8.NONE}break;case 2:switch(this.touches.TWO){case IJ.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=H8.TOUCH_DOLLY_PAN;break;case IJ.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=H8.TOUCH_DOLLY_ROTATE;break;default:this.state=H8.NONE}break;default:this.state=H8.NONE}if(this.state!==H8.NONE)this.dispatchEvent(R$)}function Mq(J){switch(this._trackPointer(J),this.state){case H8.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case H8.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case H8.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case H8.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=H8.NONE}}function Lq(J){if(this.enabled===!1)return;J.preventDefault()}function Iq(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Vq(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var vQ={jaw:0.6,tbX:2.9,tbY:6.85,ttX:6.45,ttY:7.3,ttCurl:0,root:0,lipAp:0.7,lipProt:0.2,lipWidth:0.5,labiodental:0,velum:-0.15,larynx:0,epilarynx:0,ventricular:0,lateral:0,dorsum:0};var e={blue:"#4fb6f2",blueMid:"#3487c4",blueDim:"#1f5f8c",frame:"#133954",green:"#5be381",red:"#ff5d40",pink:"#ff73cf",white:"#eef6f8",amber:"#ffb340"},WR=[e.green,e.red,e.pink,e.white],yQ={primary:"#effbff",secondary:"#e2f5fc"};function CY(J,Q,Z){let K=parseInt(J.slice(1),16),$=parseInt(Q.slice(1),16),W=(X)=>Math.round((K>>X&255)*(1-Z)+($>>X&255)*Z);return"#"+[16,8,0].map((X)=>W(X).toString(16).padStart(2,"0")).join("")}var bQ=(J)=>CY(J,"#ffffff",0.55),YJ=[[0,"#3a2408"],[0.35,"#c9822a"],[0.6,"#ffb340"],[0.82,"#ffe39a"],[1,"#fff8ec"]];function fQ(J){let Q=Math.max(0,Math.min(1,J));for(let Z=1;Z<YJ.length;Z++)if(Q<=YJ[Z][0])return CY(YJ[Z-1][1],YJ[Z][1],(Q-YJ[Z-1][0])/(YJ[Z][0]-YJ[Z-1][0]));return YJ[YJ.length-1][1]}var XR={black:"#000000",console:"#000000",inset:"#000000",line:e.frame,text:e.blue,textDim:e.blueMid,caliper:e.amber,caliperDim:"rgba(255, 179, 64, 0.45)",fat:"#bdbdbd",skin:"#a8a8a8",muscle:"#5d5d5d",tongue:"#6b6b6b",brain:"#7c7c7c",marrow:"#b2b2b2",cortex:"#1c1c1c",cartilage:"#3e3e3e",mucosa:"#8f8f8f",tooth:"#101010"};var hQ=(J)=>{if(!(J>0))return 0;let Q=Math.log10(40),Z=Math.log10(4000);return Math.max(0,Math.min(1,(Math.log10(J)-Q)/(Z-Q)))};var AY=(J,Q)=>Math.hypot(J.x-Q.x,J.y-Q.y);var xQ=(J,Q,Z)=>{let K=Math.sin(Z),$=Math.cos(Z),W=J.x-Q.x,X=J.y-Q.y;return{x:Q.x+W*$-X*K,y:Q.y+W*K+X*$}};function P9(J,Q){if(J.length<3)return J.slice();let Z=[];for(let K=0;K<J.length-1;K++){let $=J[Math.max(0,K-1)],W=J[K],X=J[K+1],Y=J[Math.min(J.length-1,K+2)];for(let H=0;H<Q;H++){let U=H/Q,D=U*U,G=D*U;Z.push({x:0.5*(2*W.x+(-$.x+X.x)*U+(2*$.x-5*W.x+4*X.x-Y.x)*D+(-$.x+3*W.x-3*X.x+Y.x)*G),y:0.5*(2*W.y+(-$.y+X.y)*U+(2*$.y-5*W.y+4*X.y-Y.y)*D+(-$.y+3*W.y-3*X.y+Y.y)*G)})}}return Z.push(J[J.length-1]),Z}var Bq='"Hershey", "Archivo", system-ui, sans-serif',zY=(J,Q="l")=>`${Q==="m"?500:300} ${J}px ${Bq}`,Cq=typeof CanvasRenderingContext2D!=="undefined"&&"letterSpacing"in CanvasRenderingContext2D.prototype;function Aq(J,Q=!1){let Z=new Path2D;if(J.length===0)return Z;Z.moveTo(J[0][0],J[0][1]);for(let K=1;K<J.length;K++)Z.lineTo(J[K][0],J[K][1]);if(Q)Z.closePath();return Z}function j6(J,Q,Z,K,$={}){if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.lineJoin="round",J.lineCap="round",J.setLineDash($.dash??[]),J.strokeStyle=Z,J.lineWidth=K,J.stroke(Q),$.hot)J.globalCompositeOperation="source-over",J.strokeStyle=bQ(Z),J.lineWidth=K*0.42,J.stroke(Q);J.restore()}function nJ(J,Q,Z,K,$={}){if(Q.length<2)return;j6(J,Aq(Q,$.close),Z,K,$)}function M7(J,Q,Z,K,$,W,X,Y={}){let H=new Path2D;H.moveTo(Q,Z),H.lineTo(K,$),j6(J,H,W,X,Y)}function PY(J,Q,Z,K,$,W=1.2,X={}){let Y=new Path2D;Y.arc(Q,Z,K,0,Math.PI*2),j6(J,Y,$,W,X)}function L7(J,Q,Z,K,$,W=1){J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=W,J.fillStyle=$,J.beginPath(),J.arc(Q,Z,K,0,Math.PI*2),J.fill(),J.restore()}function kY(J,Q,Z,K,$=7,W=1){let Y=new Path2D;Y.arc(Q,Z,$,0,Math.PI*2),Y.moveTo(Q-$-4,Z),Y.lineTo(Q-$+2,Z),Y.moveTo(Q+$-2,Z),Y.lineTo(Q+$+4,Z),Y.moveTo(Q,Z-$-4),Y.lineTo(Q,Z-$+2),Y.moveTo(Q,Z+$-2),Y.lineTo(Q,Z+$+4),j6(J,Y,K,1.25,{alpha:W})}function w8(J,Q,Z,K,$={}){let W=$.size??11;if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.font=zY(W,$.weight),Cq)J.letterSpacing=`${(($.ls??0.14)*W).toFixed(2)}px`;J.textAlign=$.align??"left",J.textBaseline=$.baseline??"alphabetic",J.fillStyle=$.color??e.blue;let X=J;if($.moving)X.layoutMoving=!0;J.fillText(Q,Z,K),X.layoutMoving=void 0,J.restore()}function sJ(J,Q=2){let Z=J.length>1&&J[0][0]===J[J.length-1][0]&&J[0][1]===J[J.length-1][1]?J.slice(0,-1):J.slice();for(let K=0;K<Q;K++){let $=[];for(let W=0;W<Z.length;W++){let X=Z[W],Y=Z[(W+1)%Z.length];$.push([X[0]*0.75+Y[0]*0.25,X[1]*0.75+Y[1]*0.25],[X[0]*0.25+Y[0]*0.75,X[1]*0.25+Y[1]*0.75])}Z=$}return Z.length?[...Z,Z[0]]:Z}function L$(J,Q,Z,K,$,W,X=1){let Y=$*0.5,H=Y*0.48,U=Z-Y/2,D=Math.max(0.9,$*0.07),G=(q)=>q.toFixed(2),N=(q)=>{J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.strokeStyle=W,J.lineWidth=D,J.lineCap="round",J.lineJoin="round",J.stroke(new Path2D(q)),J.restore()},E=(q,R)=>{if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.font=zY($),J.textAlign="center",J.textBaseline="alphabetic",J.fillStyle=W,R)R(J);J.fillText(q,R?0:Q,R?0:Z),J.restore()},O=(q)=>{q.translate(Q,U),q.rotate(Math.PI),q.translate(0,Y/2)},L=(q)=>{q.translate(Q,Z),q.scale(-1,1)},F=(q)=>`M${G(q+H)} ${G(U)}A${G(H)} ${G(Y/2)} 0 1 0 ${G(q-H)} ${G(U)}A${G(H)} ${G(Y/2)} 0 1 0 ${G(q+H)} ${G(U)}`;switch(K){case"ɑ":{let q=Q-0.06*$;return N(F(q)+`M${G(q+H)} ${G(Z-Y)}L${G(q+H)} ${G(Z)}`)}case"ɒ":{let q=Q+0.06*$;return N(F(q)+`M${G(q-H)} ${G(Z-Y)}L${G(q-H)} ${G(Z)}`)}case"ɪ":return N(`M${G(Q)} ${G(Z-Y)}L${G(Q)} ${G(Z)}M${G(Q-Y*0.3)} ${G(Z-Y)}L${G(Q+Y*0.3)} ${G(Z-Y)}M${G(Q-Y*0.3)} ${G(Z)}L${G(Q+Y*0.3)} ${G(Z)}`);case"ɛ":return N(`M${G(Q+H*0.9)} ${G(Z-Y*0.92)}Q${G(Q-H*1.1)} ${G(Z-Y*1.08)} ${G(Q-H*0.25)} ${G(U)}Q${G(Q-H*1.3)} ${G(Z+Y*0.1)} ${G(Q+H*0.95)} ${G(Z-Y*0.06)}`);case"ɜ":return N(`M${G(Q-H*0.9)} ${G(Z-Y*0.92)}Q${G(Q+H*1.1)} ${G(Z-Y*1.08)} ${G(Q+H*0.25)} ${G(U)}Q${G(Q+H*1.3)} ${G(Z+Y*0.1)} ${G(Q-H*0.95)} ${G(Z-Y*0.06)}`);case"ɝ":return N(`M${G(Q-H*0.9)} ${G(Z-Y*0.92)}Q${G(Q+H*1.1)} ${G(Z-Y*1.08)} ${G(Q+H*0.25)} ${G(U)}Q${G(Q+H*1.3)} ${G(Z+Y*0.1)} ${G(Q-H*0.95)} ${G(Z-Y*0.06)}M${G(Q+H*0.55)} ${G(U-Y*0.1)}Q${G(Q+H*1.4)} ${G(U-Y*0.5)} ${G(Q+H*1.5)} ${G(U-Y*0.15)}`);case"ʊ":return N(`M${G(Q-H*1.15)} ${G(Z-Y)}Q${G(Q-H*0.5)} ${G(Z-Y*0.9)} ${G(Q-H*0.75)} ${G(U)}Q${G(Q-H)} ${G(Z)} ${G(Q)} ${G(Z)}Q${G(Q+H)} ${G(Z)} ${G(Q+H*0.75)} ${G(U)}Q${G(Q+H*0.5)} ${G(Z-Y*0.9)} ${G(Q+H*1.15)} ${G(Z-Y)}`);case"ʌ":return N(`M${G(Q-H)} ${G(Z)}L${G(Q)} ${G(Z-Y)}L${G(Q+H)} ${G(Z)}`);case"ɤ":return N(`M${G(Q-H)} ${G(Z-Y)}L${G(Q)} ${G(Z-Y*0.1)}L${G(Q+H)} ${G(Z-Y)}M${G(Q)} ${G(Z-Y*0.1)}Q${G(Q-H*0.5)} ${G(Z+Y*0.4)} ${G(Q)} ${G(Z+Y*0.45)}Q${G(Q+H*0.5)} ${G(Z+Y*0.4)} ${G(Q)} ${G(Z-Y*0.1)}`);case"ʃ":return N(`M${G(Q+H*0.9)} ${G(Z-Y*1.9)}Q${G(Q)} ${G(Z-Y*2.2)} ${G(Q)} ${G(Z-Y)}L${G(Q)} ${G(Z+Y*0.3)}Q${G(Q)} ${G(Z+Y*0.95)} ${G(Q-H*0.9)} ${G(Z+Y*0.7)}`);case"θ":return N(`M${G(Q+H)} ${G(Z-Y)}A${G(H)} ${G(Y)} 0 1 0 ${G(Q-H)} ${G(Z-Y)}A${G(H)} ${G(Y)} 0 1 0 ${G(Q+H)} ${G(Z-Y)}M${G(Q-H)} ${G(Z-Y)}L${G(Q+H)} ${G(Z-Y)}`);case"ŋ":return N(`M${G(Q-H)} ${G(Z)}L${G(Q-H)} ${G(Z-Y)}M${G(Q-H)} ${G(Z-Y*0.6)}Q${G(Q-H*0.2)} ${G(Z-Y*1.1)} ${G(Q+H*0.6)} ${G(Z-Y*0.9)}Q${G(Q+H)} ${G(Z-Y*0.75)} ${G(Q+H)} ${G(Z-Y*0.4)}L${G(Q+H)} ${G(Z+Y*0.4)}Q${G(Q+H)} ${G(Z+Y*0.85)} ${G(Q+H*0.3)} ${G(Z+Y*0.8)}`);case"ə":return N(`M${G(Q-H)} ${G(U)}L${G(Q+H)} ${G(U)}A${G(H)} ${G(Y/2)} 0 1 1 ${G(Q-H*0.75)} ${G(Z-Y*0.85)}`);case"ɐ":return E("a",O);case"ɔ":return E("c",L);case"ɯ":return E("m",O);case"ɨ":return E("i"),N(`M${G(Q-H*0.8)} ${G(U)}L${G(Q+H*0.8)} ${G(U)}`);case"ø":return E("o"),N(`M${G(Q-H*1.1)} ${G(Z+Y*0.1)}L${G(Q+H*1.1)} ${G(Z-Y*1.1)}`);case"æ":return E("æ");case"œ":return E("œ");default:return E(K)}}var _Y=new E9,gQ=new x;class v6 extends zQ{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let J=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],Q=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],Z=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(Z),this.setAttribute("position",new c8(J,3)),this.setAttribute("uv",new c8(Q,2))}applyMatrix4(J){let Q=this.attributes.instanceStart,Z=this.attributes.instanceEnd;if(Q!==void 0)Q.applyMatrix4(J),Z.applyMatrix4(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new p9(Q,6,1);return this.setAttribute("instanceStart",new g8(Z,3,0)),this.setAttribute("instanceEnd",new g8(Z,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new p9(Q,6,1);return this.setAttribute("instanceColorStart",new g8(Z,3,0)),this.setAttribute("instanceColorEnd",new g8(Z,3,3)),this}fromWireframeGeometry(J){return this.setPositions(J.attributes.position.array),this}fromEdgesGeometry(J){return this.setPositions(J.attributes.position.array),this}fromMesh(J){return this.fromWireframeGeometry(new VQ(J.geometry)),this}fromLineSegments(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new E9;let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0)this.boundingBox.setFromBufferAttribute(J),_Y.setFromBufferAttribute(Q),this.boundingBox.union(_Y)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new XJ;if(this.boundingBox===null)this.computeBoundingBox();let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0){let Z=this.boundingSphere.center;this.boundingBox.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)gQ.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(gQ)),gQ.fromBufferAttribute(Q,$),K=Math.max(K,Z.distanceToSquared(gQ));if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}D0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new x0},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};n8.line={uniforms:D7.merge([D0.common,D0.fog,D0.line]),vertexShader:`
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
		`};class I7 extends t8{constructor(J){super({type:"LineMaterial",uniforms:D7.clone(n8.line.uniforms),vertexShader:n8.line.vertexShader,fragmentShader:n8.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(J)}get color(){return this.uniforms.diffuse.value}set color(J){this.uniforms.diffuse.value=J}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(J){if(J===!0!==this.worldUnits)this.needsUpdate=!0;if(J===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(J){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=J}get dashed(){return"USE_DASH"in this.defines}set dashed(J){if(J===!0!==this.dashed)this.needsUpdate=!0;if(J===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(J){this.uniforms.dashScale.value=J}get dashSize(){return this.uniforms.dashSize.value}set dashSize(J){this.uniforms.dashSize.value=J}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(J){this.uniforms.dashOffset.value=J}get gapSize(){return this.uniforms.gapSize.value}set gapSize(J){this.uniforms.gapSize.value=J}get opacity(){return this.uniforms.opacity.value}set opacity(J){if(!this.uniforms)return;this.uniforms.opacity.value=J}get resolution(){return this.uniforms.resolution.value}set resolution(J){this.uniforms.resolution.value.copy(J)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(J){if(!this.defines)return;if(J===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(J===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}var I$=new Y8,TY=new x,wY=new x,j8=new Y8,v8=new Y8,d9=new Y8,V$=new x,B$=new M8,y8=new PQ,SY=new x,pQ=new E9,mQ=new XJ,u9=new Y8,l9,iJ;function jY(J,Q,Z){return u9.set(0,0,-Q,1).applyMatrix4(J.projectionMatrix),u9.multiplyScalar(1/u9.w),u9.x=iJ/Z.width,u9.y=iJ/Z.height,u9.applyMatrix4(J.projectionMatrixInverse),u9.multiplyScalar(1/u9.w),Math.abs(Math.max(u9.x,u9.y))}function zq(J,Q){let{matrixWorld:Z,geometry:K}=J,$=K.attributes.instanceStart,W=K.attributes.instanceEnd,X=Math.min(K.instanceCount,$.count);for(let Y=0,H=X;Y<H;Y++){y8.start.fromBufferAttribute($,Y),y8.end.fromBufferAttribute(W,Y),y8.applyMatrix4(Z);let U=new x,D=new x;if(l9.distanceSqToSegment(y8.start,y8.end,D,U),D.distanceTo(U)<iJ*0.5)Q.push({point:D,pointOnLine:U,distance:l9.origin.distanceTo(D),object:J,face:null,faceIndex:Y,uv:null,uv1:null})}}function Pq(J,Q,Z){let K=Q.projectionMatrix,W=J.material.resolution,X=J.matrixWorld,Y=J.geometry,H=Y.attributes.instanceStart,U=Y.attributes.instanceEnd,D=Math.min(Y.instanceCount,H.count),G=-Q.near;l9.at(1,d9),d9.w=1,d9.applyMatrix4(Q.matrixWorldInverse),d9.applyMatrix4(K),d9.multiplyScalar(1/d9.w),d9.x*=W.x/2,d9.y*=W.y/2,d9.z=0,V$.copy(d9),B$.multiplyMatrices(Q.matrixWorldInverse,X);for(let N=0,E=D;N<E;N++){if(j8.fromBufferAttribute(H,N),v8.fromBufferAttribute(U,N),j8.w=1,v8.w=1,j8.applyMatrix4(B$),v8.applyMatrix4(B$),j8.z>G&&v8.z>G)continue;if(j8.z>G){let k=j8.z-v8.z,V=(j8.z-G)/k;j8.lerp(v8,V)}else if(v8.z>G){let k=v8.z-j8.z,V=(v8.z-G)/k;v8.lerp(j8,V)}j8.applyMatrix4(K),v8.applyMatrix4(K),j8.multiplyScalar(1/j8.w),v8.multiplyScalar(1/v8.w),j8.x*=W.x/2,j8.y*=W.y/2,v8.x*=W.x/2,v8.y*=W.y/2,y8.start.copy(j8),y8.start.z=0,y8.end.copy(v8),y8.end.z=0;let L=y8.closestPointToPointParameter(V$,!0);y8.at(L,SY);let F=X7.lerp(j8.z,v8.z,L),q=F>=-1&&F<=1,R=V$.distanceTo(SY)<iJ*0.5;if(q&&R){y8.start.fromBufferAttribute(H,N),y8.end.fromBufferAttribute(U,N),y8.start.applyMatrix4(X),y8.end.applyMatrix4(X);let k=new x,V=new x;l9.distanceSqToSegment(y8.start,y8.end,V,k),Z.push({point:V,pointOnLine:k,distance:l9.origin.distanceTo(V),object:J,face:null,faceIndex:N,uv:null,uv1:null})}}}class C$ extends W9{constructor(J=new v6,Q=new I7({color:Math.random()*16777215})){super(J,Q);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let J=this.geometry,Q=J.attributes.instanceStart,Z=J.attributes.instanceEnd,K=new Float32Array(2*Q.count);for(let W=0,X=0,Y=Q.count;W<Y;W++,X+=2)TY.fromBufferAttribute(Q,W),wY.fromBufferAttribute(Z,W),K[X]=X===0?0:K[X-1],K[X+1]=K[X]+TY.distanceTo(wY);let $=new p9(K,2,1);return J.setAttribute("instanceDistanceStart",new g8($,1,0)),J.setAttribute("instanceDistanceEnd",new g8($,1,1)),this}raycast(J,Q){let Z=this.material.worldUnits,K=J.camera;if(K===null&&!Z)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');if(Z===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let $=J.params.Line2!==void 0?J.params.Line2.threshold||0:0;l9=J.ray;let W=this.matrixWorld,X=this.geometry,Y=this.material;if(iJ=Y.linewidth+$,X.boundingSphere===null)X.computeBoundingSphere();mQ.copy(X.boundingSphere).applyMatrix4(W);let H;if(Z)H=iJ*0.5;else{let D=Math.max(K.near,mQ.distanceToPoint(l9.origin));H=jY(K,D,Y.resolution)}if(mQ.radius+=H,l9.intersectsSphere(mQ)===!1)return;if(X.boundingBox===null)X.computeBoundingBox();pQ.copy(X.boundingBox).applyMatrix4(W);let U;if(Z)U=iJ*0.5;else{let D=Math.max(K.near,pQ.distanceToPoint(l9.origin));U=jY(K,D,Y.resolution)}if(pQ.expandByScalar(U),l9.intersectsBox(pQ)===!1)return;if(Z)zq(this,Q);else Pq(this,K,Q)}onBeforeRender(J){let Q=this.material.uniforms;if(Q&&Q.resolution)J.getViewport(I$),this.material.uniforms.resolution.value.set(I$.z,I$.w)}}var dQ=[0.6,0.85,1.05,1.3,1.6,2.1];class z${a=new Float32Array(768);n=0;reset(){return this.n=0,this}p(J,Q,Z){if(3*this.n+3>this.a.length){let $=new Float32Array(this.a.length*2);$.set(this.a),this.a=$}let K=3*this.n++;return this.a[K]=J,this.a[K+1]=Q,this.a[K+2]=Z,this}}class yY{material;mesh;geo=new v6;pos=new Float32Array(0);col=new Float32Array(0);pb=null;cb=null;cap=0;n=0;constructor(J){this.material=J;this.mesh=new C$(this.geo,J),this.mesh.frustumCulled=!1,this.grow(2048)}grow(J){let Q=new Float32Array(J*6),Z=new Float32Array(J*6);Q.set(this.pos.subarray(0,this.n*6)),Z.set(this.col.subarray(0,this.n*6)),this.pos=Q,this.col=Z,this.cap=J,this.geo.dispose(),this.geo=new v6;let K=this.pb=new p9(Q,6,1).setUsage(NQ),$=this.cb=new p9(Z,6,1).setUsage(NQ);this.geo.setAttribute("instanceStart",new g8(K,3,0)),this.geo.setAttribute("instanceEnd",new g8(K,3,3)),this.geo.setAttribute("instanceColorStart",new g8($,3,0)),this.geo.setAttribute("instanceColorEnd",new g8($,3,3)),this.mesh.geometry=this.geo}seg(J,Q,Z,K,$,W,X,Y,H){if(this.n>=this.cap)this.grow(this.cap*2);let U=this.n++*6,D=this.pos,G=this.col;D[U]=J,D[U+1]=Q,D[U+2]=Z,D[U+3]=K,D[U+4]=$,D[U+5]=W,G[U]=G[U+3]=X,G[U+1]=G[U+4]=Y,G[U+2]=G[U+5]=H}commit(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0;for(let J of[this.pb,this.cb])J.clearUpdateRanges(),J.addUpdateRange(0,this.n*6),J.needsUpdate=!0}dispose(){this.geo.dispose(),this.material.dispose()}}var vY=new Map;function A$(J){let Q=vY.get(J);if(!Q){let Z=parseInt(J.slice(1),16);Q=[(Z>>16&255)/255,(Z>>8&255)/255,(Z&255)/255],vY.set(J,Q)}return Q}class P${group=new MJ;batches;constructor(){this.batches=dQ.map((J)=>{let Q=new I7({linewidth:J,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});Q.blending=r7,Q.blendEquation=t7,Q.fog=!0;let Z=new yY(Q);return this.group.add(Z.mesh),Z})}setResolution(J,Q){for(let Z of this.batches)Z.material.resolution.set(J,Q)}begin(){for(let J of this.batches)J.n=0}end(){for(let J of this.batches)J.commit()}batch(J){let Q=0;for(let Z=1;Z<dQ.length;Z++)if(Math.abs(dQ[Z]-J)<Math.abs(dQ[Q]-J))Q=Z;return this.batches[Q]}line(J,Q,Z,K,$={}){if(Q<2)return;let W=$.alpha??1;if(this.strokes(J,Q,A$(Z),W,this.batch(K),$.close??!1),$.hot)this.strokes(J,Q,A$(bQ(Z)),W,this.batch(K*0.42),$.close??!1)}poly(J,Q,Z,K={}){this.line(J.a,J.n,Q,Z,K)}seg(J,Q,Z,K,$,W,X,Y,H=1){let[U,D,G]=A$(X);this.batch(Y).seg(J,Q,Z,K,$,W,U*H,D*H,G*H)}strokes(J,Q,[Z,K,$],W,X,Y){Z*=W,K*=W,$*=W;for(let H=0;H<Q-1;H++){let U=3*H;X.seg(J[U],J[U+1],J[U+2],J[U+3],J[U+4],J[U+5],Z,K,$)}if(Y){let H=3*(Q-1);X.seg(J[H],J[H+1],J[H+2],J[0],J[1],J[2],Z,K,$)}}dispose(){for(let J of this.batches)J.dispose()}}var _$={x0:-7.5,x1:10.25,y0:-4.55,y1:19.9};function T$(J,Q){let Z=J.tract;return-Math.max(-0.2,Math.min(3,Q))*Z.scale/AY(Z.P(-2.5,10.5),Z.P(6.95,7.75))}function w$(J,Q){let Z=J.tract,K=Z.P(-2.5,10.5),$=T$(J,Q.jaw);return(W,X)=>xQ(Z.P(W,X),K,$)}function k$(J,Q,Z,K=0,$=40){let W=Math.cos(-K),X=Math.sin(-K),Y=[];for(let H=0;H<=$;H++){let U=H/$*Math.PI*2,D=Math.cos(U)*Q,G=Math.sin(U)*Z;Y.push({x:J.x+D*W-G*X,y:J.y+D*X+G*W})}return Y}function kq(J,Q,Z){let K=Math.min(J.x,Q.x),$=Math.max(J.x,Q.x),W=Math.min(J.y,Q.y),X=Math.max(J.y,Q.y),Y=Math.min(Z,($-K)/2,(X-W)/2),H=[],U=(D,G,N)=>{for(let E=0;E<=6;E++){let O=N+E/6*(Math.PI/2);H.push({x:D+Math.cos(O)*Y,y:G+Math.sin(O)*Y})}};return U($-Y,X-Y,0),U(K+Y,X-Y,Math.PI/2),U(K+Y,W+Y,Math.PI),U($-Y,W+Y,3*Math.PI/2),H.push(H[0]),H}var uQ=(J)=>-1.2-0.025*J;function S$(J){let Q=J.tract.scale,Z=J.bodyParams.pharynx;return(K,$)=>({x:K*Q,y:($<7?7-(7-$)*Z:$)*Q})}function V7(J,Q,Z){let K=J.tract,$=(C,p)=>K.P(C,p),W=w$(J,Z),X=K.scale,Y=Z.larynx*X,H=S$(J),U=Q.upperLip.slice(7),D=Q.lowerLip.slice(7),G=P9([H(2.3,-4.6),H(2.38,-1.5),H(2.52,0.4),H(3,1.7),W(5.3,3),W(7.25,3.35),W(7.95,4.6),W(7.55,5.7)],4),N=P9([U[U.length-1],H(7.05,10.6),H(7.75,10.78),H(8.75,11.05),H(9.25,11.65),H(8.95,12.6),H(8.35,13.9),H(7.7,15),H(7.95,16.1),H(7.9,18.1),H(6.9,20.5)],4),E=P9([H(6.9,20.5),H(3,22.9),H(-2.2,22.7),H(-6.9,19.6),H(-8.7,15.4),H(-8.3,11.9),H(-7.4,8.9),H(-6.8,4.8),H(-6.6,0),H(-6.6,-4.6)],4),O=[];for(let C=0;C<9;C++){let p=-4.4+C*1.75;if(p>10.5)break;let j=uQ(p)-2.25;O.push(kq($(j,p+1.4),$(j+1.6,p),0.32*X))}let F=[[1,9.6],[1.8,9.92],[2.7,10.18],[3.6,10.3],[4.4,10.25],[5.1,10.05],[5.7,9.72],[6.15,9.36],[6.55,9.15],[7,9.6]].map(([C,p])=>K.P(C,p)),q=Q.jawBone.filter((C)=>C.x>0.8*X),R=Q.glottis,k={x:$(1.6,0).x,y:$(0,2.9).y+0.6*Y},V=[];for(let C=0;C<4;C++){let p=R.y-(0.9+C*1)*X;if(p<-4.4)break;V.push([{x:R.x+0.8*X,y:p},{x:R.x+1.05*X,y:p-0.05},{x:R.x+1.05*X,y:p-0.5*X},{x:R.x+0.82*X,y:p-0.45*X},{x:R.x+0.8*X,y:p}])}let A=W(6,5.45),P=Q.tongueCenter,_=[];for(let C=0;C<=16;C++){let p=Math.PI*(0.18+0.9*C/16),j={x:P.x+Math.cos(p)*Q.tongueRadius*1.25,y:P.y+Math.sin(p)*Q.tongueRadius*1.25},y={x:P.x,y:(P.y+A.y)/2},m=[];for(let T=0;T<=12;T++){let w=T/12;m.push({x:(1-w)*(1-w)*A.x+2*(1-w)*w*y.x+w*w*j.x,y:(1-w)*(1-w)*A.y+2*(1-w)*w*y.y+w*w*j.y})}_.push(m)}let I={x:uQ(R.y/X)*X,y:R.y};return{f:Q,model:J,skinLower:[...G,...D.slice().reverse()],skinUpper:[...U,...N.slice(1),...E.slice(1)],inset:P9([H(1.85,-4.6),H(1.9,-0.8),H(2.3,1.6),W(5.2,3.6),W(6.9,3.9),W(7.4,4.9),W(7.2,5.9),H(6.6,9.9),H(7.6,10.9),H(8.55,11.5),H(8.1,13.4),H(7.25,15.2),H(7.45,18),H(3,22.2),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.6,12),H(-6.7,8.7),H(-6.1,4.6),H(-6,-4.6)],3),skull:P9([H(7,16.2),H(7.3,18.5),H(6,20.7),H(3,22.1),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.4,12.6),H(-4.6,12.2),H(-2.2,13.3),H(1,13.7),H(4.1,14.1),H(6.2,14.9)],4),brain:P9([H(6.55,16.3),H(6.75,18.4),H(5.5,20.1),H(2.8,21.4),H(-1.9,21.3),H(-5.8,18.8),H(-7.1,15.4),H(-6.7,13.1),H(-4.4,12.8),H(-2.1,13.9),H(1,14.3),H(4,14.7),H(5.9,15.4)],4),sulcus:P9([H(5.4,19.4),H(2.4,20.5),H(-1.4,20.4),H(-4.8,18.4)],4),eye:k$(H(6.5,15.4),1.1*X,0.95*X),eyeC:H(6.5,15.4),vertebrae:O,cords:[[$(-5.3,-4.6),$(-4.5,-4.6),$(-4.5,11.8),$(-5.1,12.4),$(-5.6,11.6)],[$(-5.1,-4.6),$(-4.7,-4.6),$(-4.72,11.4),$(-5.15,11.6)]],nasal:P9([H(0.3,11.2),H(1.1,10.25),H(2.7,10.75),H(4.6,10.85),H(6.4,10.65),H(7.6,10.85),H(8.45,11.3),H(8,12.2),H(6.7,13.4),H(4.4,13.9),H(1.8,13.6),H(0.2,12.6)],4),turbinates:[[3,11.45,2.1,0.32],[3.5,12.45,1.9,0.3],[4,13.3,1.45,0.22]].map(([C,p,j,y])=>k$(H(C,p),j*X,y*X,-0.04)),palOral:F,palNasal:F.map((C)=>({x:C.x,y:C.y+0.55*X})),jawLower:q,jawUpper:q.map((C)=>({x:C.x,y:C.y+0.75*X})),hyoid:k$(k,0.5*X,0.28*X,0.3,28),thyroid:[{x:R.x+0.75*X,y:R.y-1.6*X},{x:R.x+1.75*X,y:R.y-0.6*X},{x:R.x+1.95*X,y:R.y+1.2*X},{x:R.x+1.45*X,y:R.y+1.9*X},{x:R.x+1.15*X,y:R.y+1.1*X},{x:R.x+1.3*X,y:R.y-0.4*X},{x:R.x+0.75*X,y:R.y-1.6*X}],trachea:[[{x:R.x-0.65*X,y:R.y},{x:R.x-0.75*X,y:-4.8}],[{x:R.x+0.75*X,y:R.y},{x:R.x+0.95*X,y:-4.8}]],rings:V,outerWall:Q.outer.filter((C)=>C.y>R.y||C.x>0),glottisWall:[I,Q.outer.find((C)=>C.y>R.y)??I],fibres:_,folds:[[{x:R.x-0.62*X,y:R.y+0.05},{x:R.x-0.1,y:R.y+0.12*X},{x:R.x-0.62*X,y:R.y+0.32*X},{x:R.x-0.62*X,y:R.y+0.05}],[{x:R.x+0.72*X,y:R.y+0.05},{x:R.x+0.12,y:R.y+0.12*X},{x:R.x+0.72*X,y:R.y+0.32*X},{x:R.x+0.72*X,y:R.y+0.05}]],lowerTeeth:[...Q.lowerTeeth,W(6.8,6),W(6.4,6.2),Q.lowerTeeth[0]]}}class B7{pitch=0;yaw=0;toPitch=0;toYaw=0;next=2;update(J,Q){if(J>=this.next){let K=Math.random()<0.35;this.toPitch=K?0:(Math.random()*2-1)*0.55,this.toYaw=K?0:(Math.random()*2-1)*0.9,this.next=J+1.2+Math.random()*3.5}let Z=1-Math.exp(-Q*28);this.pitch+=(this.toPitch-this.pitch)*Z,this.yaw+=(this.toYaw-this.yaw)*Z}}function bY(J,Q,Z,K,$){if(Q.compact)return _q(J,Q,Z,K,$);let{w:W,h:X}=Q,Y=W-18,H=26;if(Z.length>=3)["F1","F2","F3"].forEach((O,L)=>{w8(J,O,Y-78,H+L*22,{size:12,color:e.amber,ls:0.12,alpha:0.75}),w8(J,String(Math.round(Z[L])),Y,H+L*22,{size:15,color:e.amber,align:"right",ls:0.08})}),w8(J,"HZ",Y,H+64,{size:10,color:e.amber,align:"right",alpha:0.6}),H+=110;for(let O of K)w8(J,O,Y,H,{size:10,color:yQ.secondary,align:"right",ls:0.14}),H+=16;if(!$.length)return;let{slotX:U,slotY:D}=Q,G=Math.max(60,(W-14-U)/2),N=Math.max(56,Math.min(112,(X-8-D)/2)),E=Math.max(22,Math.min(44,N*0.4,G*0.32));$.slice(0,4).forEach((O,L)=>{let F=U+L%2*G,q=D+Math.floor(L/2)*N;L7(J,F+6,q+4,4,O.color),w8(J,O.label.toUpperCase(),F+16,q+8,{size:11,color:O.color,ls:0.2,alpha:0.85});let R=q+18+E*1.1;if(O.ipa)L$(J,F+E*0.6,R,O.value,E*1.45,O.color);else w8(J,O.value.toUpperCase(),F,R,{size:O.value.length>3?E*0.82:E,color:O.color,weight:"m",ls:0.04});if(O.unit)w8(J,O.unit.toUpperCase(),O.ipa?F+E*1.5:F+(O.value.length>3?0:E*1.64),O.ipa||O.value.length<=3?R:R+18,{size:11,color:O.color,ls:0.16,alpha:0.7})})}function _q(J,Q,Z,K,$){let{w:W,h:X}=Q;if(Z.length>=3){let G=(W-24)/3;["F1","F2","F3"].forEach((N,E)=>{w8(J,N,12+E*G,18,{size:10,color:e.amber,ls:0.12,alpha:0.75}),w8(J,String(Math.round(Z[E])),12+E*G+26,18,{size:13,color:e.amber,ls:0.06})})}if(w8(J,K.slice(0,2).join("   "),12,36,{size:9,color:yQ.secondary,ls:0.12}),K.length>2)w8(J,K.slice(2).join("   "),12,50,{size:9,color:yQ.secondary,ls:0.12});let Y=$.slice(0,4);if(!Y.length)return;let H=(W-24)/Y.length,U=X-82,D=Math.max(16,Math.min(30,H*0.28));Y.forEach((G,N)=>{let E=12+N*H;L7(J,E+4,U,3,G.color),w8(J,G.label.toUpperCase(),E+12,U+3,{size:8,color:G.color,ls:0.14,alpha:0.85});let O=U+18+D;if(G.ipa)L$(J,E+D*0.5,O,G.value,D*1.4,G.color);else w8(J,G.value.toUpperCase(),E,O,{size:G.value.length>3?D*0.62:D,color:G.color,weight:"m",ls:0.02});if(G.unit)w8(J,G.unit.toUpperCase(),E,O+16,{size:8,color:G.color,ls:0.14,alpha:0.7})})}var lQ=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},j$=(J,Q,Z)=>Math.max(Q,Math.min(Z,J)),cQ=(J,Q,Z,K)=>J+(Q-J)*(1-Math.exp(-K/Z));class nQ{hz;damping;x=0;v=0;constructor(J,Q){this.hz=J;this.damping=Q}step(J,Q){let Z=2*Math.PI*this.hz,K=Math.max(1,Math.ceil(Q/0.008)),$=Q/K;for(let W=0;W<K;W++)this.v+=(Z*Z*(J-this.x)-2*this.damping*Z*this.v)*$,this.x+=this.v*$;return this.x}}function Tq(J){let Q=J.t.pressureRms,Z=J.nPh+J.nOr-3;return Z>=J.nPh&&Z<Q.length?Q[Z]/980.665:0}class y6{puff=0;brow=0;lid=0;lookUp=0;content=0;nod=0;tilt=0;clock=0;cheeks=new nQ(6.5,0.32);nodSpring=new nQ(2.4,0.42);tiltSpring=new nQ(3.2,0.3);ref=NaN;fast=NaN;held=0;hold=0;nextBlink=1.5+Math.random()*2;blinkAt=-1;secondBlink=!1;lastStep=-1;update(J,Q){this.clock+=Q;let Z=J?.t,K=!!Z&&Z.voicing>0.45&&Z.gate>0.3&&Z.f0>30&&Z.outRms>0.004,$=J?lQ(1.5,7,Tq(J)):0;this.puff=j$(this.cheeks.step($,Q),-0.35,1.25);let W=0,X=0;if(K){let E=Math.log2(Z.f0);if(!Number.isFinite(this.ref)||Math.abs(12*(E-this.ref))>14)this.ref=this.fast=E;if(this.ref=cQ(this.ref,E,5,Q),Math.abs(12*(E-this.fast))>2.5)this.fast=E,this.held=0;this.fast=cQ(this.fast,E,0.35,Q),this.held+=Q,W=12*(E-this.ref),X=12*(E-this.fast)}else this.held=0;let Y=(K?j$(W/6,-0.7,1):0)+0.3*this.content;this.brow=cQ(this.brow,Y,K?0.12:0.45,Q),this.lookUp=0.32*Math.max(0,this.brow);let H=K?0.92*lQ(0.9,1.9,this.held)*lQ(0.15,0.55,this.brow):0;if(this.hold=cQ(this.hold,H,H>this.hold?0.35:0.08,Q),this.clock>=this.nextBlink&&this.hold<0.2)this.blinkAt=this.clock,this.secondBlink=!this.secondBlink&&Math.random()<0.18,this.nextBlink=this.clock+(this.secondBlink?0.28:2+Math.random()*4.5);let U=(this.clock-this.blinkAt)/0.17,D=this.blinkAt>=0&&U<1?Math.sin(Math.PI*U)**0.7:0;this.lid=Math.max(D,this.hold,0.95*this.content);let G=J?.beatStep??-1;if(G>=0&&this.lastStep>=0&&G!==this.lastStep){let E=G<this.lastStep;if(E||Math.floor(G/4)!==Math.floor(this.lastStep/4))this.nodSpring.v-=E||Math.floor(G/16)!==Math.floor(this.lastStep/16)?1.3:0.8}this.lastStep=G,this.nod=this.nodSpring.step(0.13*this.brow,Q);let N=lQ(0.6,2,this.held)*0.07*Math.sin(this.clock*1.7);this.tilt=this.tiltSpring.step(N+0.05*j$(X,-1.5,1.5),Q)}}function sQ(J,Q,Z){let K=J.tract,$=w$(J,Z),W={x:(Q.upperLip[6].x+Q.lowerLip[6].x)/2+0.15,y:(Q.upperLip[6].y+Q.lowerLip[6].y)/2};return[{id:"tongue",pos:Q.tongueCenter,label:"Tongue body"},{id:"tip",pos:Q.tip,label:"Tongue tip"},{id:"jaw",pos:$(7.5,4.9),label:"Jaw"},{id:"lips",pos:W,label:"Lips"},{id:"velum",pos:Q.velum[Math.floor(Q.velum.length/2)],label:"Soft palate"},{id:"larynx",pos:{x:Q.glottis.x+1.2*K.scale,y:Q.glottis.y},label:"Larynx"}]}var wq=[0.09,0.06,0.03],c9={x0:-9.4,x1:_$.x1,y0:_$.y0,y1:23.5},v$=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)};function Sq(J,Q,Z){let K=1.22*Q,$=1.08*Q,W=(O,L)=>{let F=[];for(let q=0;q<=14;q++){let R=O+(L-O)*q/14;F.push({x:J.x+K*Math.cos(R),y:J.y+$*Math.sin(R)})}return F},X=Math.PI/180,Y=Math.max(0,Z.brow),H=30*X+14*X*Y,U=-32*X,D=H+(U-H)*Z.lid,G=[],N=0.42*Q*Z.brow,E=0.3*Q*Math.max(0,-Z.brow);for(let O=0;O<=12;O++){let L=-1+O/6,F=(1+L)/2;G.push({x:J.x+0.1*Q+0.9*Q*L,y:J.y+1.4*Q+0.2*Q*(1-L*L)+N-E*F})}return[{pts:W(100*X,D),w:1.15,alpha:0.9},{pts:W(-78*X,U),w:1,alpha:0.75},{pts:G,w:1.4,alpha:0.85}]}function jq(J,Q,Z){if(Math.abs(Z)<0.01)return null;let K={x:(J.upperLip[6].x+J.lowerLip[6].x)/2,y:(J.upperLip[6].y+J.lowerLip[6].y)/2},$=0.6*Q*Z;return(W)=>{let X=Math.abs(W.y-K.y)/(2.6*Q);if(X>=1)return W;let Y=(1-X*X)**2*v$(0.03,0.45,X)*v$(K.x-1.2*Q,K.x-0.5*Q,W.x);return Y?{x:W.x+$*Y,y:W.y}:W}}class vq{particles=[];scale=20;ox=0;oy=0;w=0;h=0;compact=!1;sparkSeed=1;geo=null;echoes=[];clock=0;lastEcho=-1;gaze=new B7;face=new y6;constructor(){for(let J=0;J<170;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN})}resize(J,Q){this.w=J,this.h=Q,this.compact=J<560;let Z=12,K=this.compact?62:10,$=this.compact?92:8;this.scale=Math.max(1,Math.min((J-2*Z)/(c9.x1-c9.x0),(Q-K-$)/(c9.y1-c9.y0)));let W=J-2*Z-(c9.x1-c9.x0)*this.scale;this.ox=Z+(this.compact?W/2:Math.min(W/2,Math.max(0,W-220)))-c9.x0*this.scale,this.oy=K+Math.max(0,(Q-K-$-(c9.y1-c9.y0)*this.scale)/2)+c9.y1*this.scale;for(let X of this.particles)X.px=NaN}X(J){return this.ox+J.x*this.scale}Y(J){return this.oy-J.y*this.scale}P(J){return[this.ox+J.x*this.scale,this.oy-J.y*this.scale]}toBody(J,Q){return{x:(J-this.ox)/this.scale,y:(this.oy-Q)/this.scale}}get pxPerCm(){return this.scale}handles(J,Q,Z){return sQ(J,Q,Z)}geometry(J,Q,Z){if(this.geo&&this.geo.f===Q&&this.geo.model===J)return this.geo;return this.geo=V7(J,Q,Z)}lens(J,Q,Z){let K=this.gaze;K.update(this.clock,Z);let $=0.85*Q*Math.cos(K.yaw),W=K.pitch+this.face.lookUp,X=Math.cos(W),Y=Math.sin(W),H={x:J.x+$*X,y:J.y+$*Y},U=(0.18+0.2*Math.abs(Math.sin(K.yaw)))*Q,D=0.42*Q,G=[];for(let N=0;N<=20;N++){let E=N/20*Math.PI*2,O=Math.cos(E)*U,L=Math.sin(E)*D;G.push({x:H.x+O*X-L*Y,y:H.y+O*Y+L*X})}return G}draw(J,Q,Z,K,$,W,X){this.clock+=X.dt;let Y=this.geometry(Q,Z,K),H=(F)=>F.map((q)=>this.P(q)),U=(F,q,R,k={})=>nJ(J,H(F),q,R,k);U(Y.inset,e.blueDim,0.9,{alpha:0.9}),U(Y.skull,e.blueDim,0.9,{close:!0}),U(Y.brain,e.blueMid,1.1,{close:!0}),U(Y.sulcus,e.blueDim,0.9),U(Y.eye,e.blueMid,1.1);let D=Q.tract.scale,G=jq(Z,D,this.face.puff),N=(F)=>G?F.map(G):F;U(this.lens(Y.eyeC,D,X.dt),e.blueDim,0.9,{alpha:1-v$(0.45,0.9,this.face.lid)});for(let F of Sq(Y.eyeC,D,this.face))U(F.pts,e.blue,F.w,{alpha:F.alpha});for(let F of Y.vertebrae)U(F,e.blueDim,1);U(Y.cords[0],e.blueDim,0.8,{alpha:0.8}),U(Y.cords[1],e.blueDim,0.8,{alpha:0.6}),U(Y.nasal,e.blueMid,1,{close:!0});for(let F of Y.turbinates)U(F,e.blueDim,0.9);U(Y.palOral,e.blueMid,1.1),U(Y.palNasal,e.blueMid,1.1),U(Y.hyoid,e.blueDim,1),U(Y.thyroid,e.blueDim,1);for(let F of Y.trachea)U(F,e.blueMid,1);for(let F of Y.rings)U(F,e.blueDim,0.9);if(W.pressure&&$)this.drawPressure(J,Q,Z,$);else if(W.grid)for(let F of Z.grid)M7(J,this.X(F.inner),this.Y(F.inner),this.X(F.outer),this.Y(F.outer),e.blueDim,0.9,{alpha:0.7});if(W.particles&&$)this.drawParticles(J,Q,Z,$,X.dt);if($&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock,this.echoes.push({t:this.clock,tongue:Z.tongue.slice(),jaw:Y.jawLower,upperLip:sJ(N(Z.upperLip).map((F)=>[F.x,F.y])),lowerLip:sJ(N(Z.lowerLip).map((F)=>[F.x,F.y]))});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if($)wq.forEach((F,q)=>{let R=this.nearestEcho(this.clock-F);if(!R)return;let k=0.1+0.07*q;U(R.tongue,e.green,1,{alpha:k}),U(R.jaw,e.red,1,{alpha:k*0.9});let V=(A)=>nJ(J,A.map(([P,_])=>[this.ox+P*this.scale,this.oy-_*this.scale]),e.pink,1,{alpha:k*0.9});V(R.upperLip),V(R.lowerLip)});U(N(Y.skinLower),e.blue,1.7,{hot:!0}),U(N(Y.skinUpper),e.blue,1.7,{hot:!0}),U(Y.outerWall,e.blue,1.4,{hot:!0}),U(Z.inner,e.blue,1.3,{alpha:0.9}),U(Y.glottisWall,e.blue,1.2,{alpha:0.8}),U(Z.epiglottis.slice(0,3),e.blue,2.2,{alpha:0.85}),U(Z.upperTeeth,e.blueMid,1.1,{close:!0}),U(Y.lowerTeeth,e.blueMid,1.1);for(let F of Y.folds)U(F,e.blue,1);let E=H(Z.tongue);J.save();let O=new Path2D;E.forEach(([F,q],R)=>R?O.lineTo(F,q):O.moveTo(F,q)),O.closePath(),J.clip(O);for(let F of Y.fibres)U(F,e.green,0.8,{alpha:0.32});J.restore(),nJ(J,E,e.green,1.6,{hot:!0}),U(Y.jawLower,e.red,1.5,{hot:!0}),U(Y.jawUpper,e.red,1,{alpha:0.45});let L=(F,q)=>sJ(F.map((R)=>this.P(R)),q);if(nJ(J,L(N(Z.upperLip),2),e.pink,1.5,{hot:!0}),nJ(J,L(N(Z.lowerLip),2),e.pink,1.5,{hot:!0}),nJ(J,L(Z.velum,3),e.white,1.25,{alpha:0.92}),$)this.drawTurbulence(J,Q,Z,$);if(W.calipers)this.drawCalipers(J,Z);this.drawHandles(J,Q,Z,K,X.hover,X.drag),this.drawReadouts(J,X.formants,X.info,X.slots)}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}gridPoint(J,Q,Z){let K=J.grid;if(K.length<2)return null;if(Q<=K[0].s){let N=Math.max(0,Q/Math.max(0.01,K[0].s)),E=J.glottis,O={x:(K[0].inner.x+K[0].outer.x)/2,y:(K[0].inner.y+K[0].outer.y)/2},L=0.35;return{x:E.x+(O.x-E.x)*N+Z*0.35*0.5,y:E.y+(O.y-E.y)*N}}let $=0,W=K.length-1;if(Q>=K[W].s)return null;while(W-$>1){let N=$+W>>1;if(K[N].s<=Q)$=N;else W=N}let X=(Q-K[$].s)/Math.max(0.000001,K[W].s-K[$].s),Y=K[$].inner.x+(K[W].inner.x-K[$].inner.x)*X,H=K[$].inner.y+(K[W].inner.y-K[$].inner.y)*X,U=K[$].outer.x+(K[W].outer.x-K[$].outer.x)*X,D=K[$].outer.y+(K[W].outer.y-K[$].outer.y)*X,G=0.5+0.5*Z*0.82;return{x:Y+(U-Y)*G,y:H+(D-H)*G}}nodeValueAtS(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}drawPressure(J,Q,Z,K){let $=K.t,W=Q.nodeS($.phLen,$.orLen);if(W.length!==$.pressureRms.length)return;for(let X of Z.grid){let Y=Math.pow(hQ(this.nodeValueAtS($.pressureRms,W,X.s)),0.85);M7(J,this.X(X.inner),this.Y(X.inner),this.X(X.outer),this.Y(X.outer),fQ(Y),1.15,{alpha:0.35+0.65*Y})}}drawParticles(J,Q,Z,K,$){let W=K.t,X=Q.nodeS(W.phLen,W.orLen),Y=new Float32Array(W.phAreas.length+W.orAreas.length);Y.set(W.phAreas,0),Y.set(W.orAreas,W.phAreas.length);let H=Z.lipS,U=[new Path2D,new Path2D,new Path2D];for(let D of this.particles){let G=this.nodeValueAtS(W.flow,X,D.s),N=Math.max(0.05,this.nodeValueAtS(Y,X,D.s)),E=G/N,O=Math.sign(E)*2.2*Math.log1p(Math.abs(E)/30);if(D.s+=O*$,D.life-=$*0.25,D.s>H||D.s<0||D.life<=0||Math.abs(E)<3){if(!(Math.abs(E)<3&&D.life>0)){D.s=Math.random()*0.8,D.u=Math.random()*2-1,D.life=0.6+Math.random()*0.8,D.px=NaN;continue}}let L=this.gridPoint(Z,D.s,D.u);if(!L)continue;let F=this.X(L),q=this.Y(L);if(Number.isFinite(D.px)){let R=Math.min(2,Math.floor(Math.min(1,Math.abs(O)/6)*Math.min(1,D.life)*3));U[R].moveTo(D.px,D.py),U[R].lineTo(F,q)}D.px=F,D.py=q}U.forEach((D,G)=>j6(J,D,"#ffe2a8",1.1,{alpha:0.16+0.2*G}))}drawTurbulence(J,Q,Z,K){let $=K.t;if(!($.noiseLevel>1)||$.noiseNode<0)return;let W=Q.branchS($.noiseNode,$.phLen,$.orLen);if(W<0)return;let X=Math.min(1,Math.log10($.noiseLevel)/3.2);if(X<=0.05)return;let Y=this.sparkSeed=this.sparkSeed*16807%2147483647,H=()=>(Y=Y*16807%2147483647)/2147483647;for(let U=0;U<30;U++){let D=this.gridPoint(Z,W+0.2+H()*1.2,H()*2-1);if(!D)continue;L7(J,this.X(D),this.Y(D),0.6+H()*1.4,"#f4fbff",0.15+0.7*X*H())}}drawCalipers(J,Q){let Z=-1,K=1/0;for(let q=2;q<Q.grid.length-1;q++)if(Q.grid[q].area<K)K=Q.grid[q].area,Z=q;if(Z<0||K>=1.2)return;let $=Q.grid[Z],[W,X]=this.P($.inner),[Y,H]=this.P($.outer);M7(J,W,X,Y,H,e.white,1.4,{hot:!0});let U=-(H-X),D=Y-W,G=Math.hypot(U,D)||1;for(let[q,R]of[[W,X],[Y,H]])M7(J,q-U/G*4,R-D/G*4,q+U/G*4,R+D/G*4,e.white,1.2);let N=Q.grid[Q.grid.length-1],O=Math.max(this.P(N.inner)[0],this.P(N.outer)[0])-Math.max(W,Y)<1.5*this.pxPerCm,L=O?Math.min(W,Y)-10:Math.max(W,Y)+10,F=Math.min(X,H)-4;w8(J,K<=0.0005?"CLOSED":`${K.toFixed(2)} CM²`,L,F,{size:11,color:e.white,ls:0.12,align:O?"right":"left"})}drawHandles(J,Q,Z,K,$,W){let X={tongue:e.green,jaw:e.red,lips:e.pink,velum:e.white,tip:e.blueMid,larynx:e.blueMid},Y={tongue:8,jaw:7,lips:7,velum:6,tip:5,larynx:5};for(let H of this.handles(Q,Z,K)){let U=this.X(H.pos),D=this.Y(H.pos),G=H.id===W||H.id===$;if(kY(J,U,D,X[H.id],Y[H.id]+(G?2:0),G?1:0.9),G)PY(J,U,D,28,X[H.id],1,{alpha:0.75}),w8(J,H.label.toUpperCase(),U+32,D-18,{size:12,color:X[H.id],ls:0.18})}}drawReadouts(J,Q,Z,K){bY(J,{w:this.w,h:this.h,compact:this.compact,slotX:this.X({x:3.35,y:0}),slotY:this.Y({x:0,y:2.05})},Q,Z,K)}}var n9=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},fY=(J)=>Math.max(0,Math.min(1,J));function HJ(J,Q){if(Q<=J[0][0])return J[0][1];for(let Z=1;Z<J.length;Z++)if(Q<=J[Z][0]){let[K,$]=J[Z-1],[W,X]=J[Z];return $+(X-$)*(Q-K)/(W-K)}return J[J.length-1][1]}var yq=[[-4.6,5.3],[0,5.4],[2.5,5.5],[4.5,5.25],[6.5,5.5],[8.5,6.1],[10.5,6.6],[12.5,7],[15,7.3],[17.5,7.65],[19.5,7.4],[21,6.5],[22.2,4.6],[23,1]],bq=[[3.4,5.9],[4.6,6.2],[5.7,6.15],[6.5,6.2],[8,6.35],[9.5,6.35],[10.6,6.55],[11.6,6.75],[12.6,6.9],[13.9,7.15],[15,7.45],[16.1,7.95]],fq=[[3.4,2],[4.6,2.2],[5.7,2.4],[6.5,2.6],[10.6,1.7],[11,1.75],[11.65,1.2],[12.6,0.95],[13.9,0.75],[15,0.9],[16.1,1.6]],hq=[[-4.6,0.5],[3,0.5],[6,0.42],[12,0.42],[16,0.45],[23,0.45]],xq=[[-3,8.5],[-1.6,8],[-0.6,6.4],[1.2,4.6],[3.5,3.6],[5.3,3],[7.3,3.3],[8.6,4.4]],gq=[[6,-0.6],[7.4,-0.8],[9.6,-1.9],[10.6,-2.5],[12,-2.6]],pq=[[12.3,4],[13,5.6],[14.5,6.4],[16.5,6.9],[18.5,6.6],[20,5.4],[21,3.6],[21.45,0.5]],mq=[[0,1.5],[0.15,1.9],[0.35,2.35],[0.6,2.45],[0.8,2.2],[0.92,1.5],[1,0.55]],dq=[[0,1.3],[0.35,1.1],[0.7,0.9],[0.9,0.55],[1,0.25]],uq=[[0.85,1.05,0.7],[0.68,0.95,0.65],[0.78,1.1,0.8],[0.7,0.85,0.9],[0.68,0.8,0.9],[1,0.75,1.1],[0.92,0.7,1.05]],lq=[[0.54,0.9,0.6],[0.6,0.92,0.62],[0.7,1,0.75],[0.7,0.85,0.8],[0.72,0.8,0.85],[1.1,0.72,1.05],[1.05,0.7,1]],cq=3,oJ=2.2,mY=(J)=>Math.abs(J)<1?(1-J*J)**2:0;function oQ(J,Q,Z=!1){let K=Math.min(1,Math.abs(Q)/J.W),$=Math.pow(1-Math.pow(K,J.pf),1/J.pf);return J.xw+(J.Fs-J.xw)*$+(Z?0:J.E*mY(Q/J.wf))}function nq(J,Q){let Z=Q>J.xw,K=Z?(Q-J.xw)/Math.max(0.000001,J.Fs-J.xw):(J.xw-Q)/Math.max(0.000001,J.xw-J.Bk),$=Z?J.pf:oJ;return J.W*Math.pow(Math.max(0,1-Math.pow(Math.min(1,K),$)),1/$)}function sq(J,Q,Z){Z.length=0;let K=12,$=10,W=16;for(let Y=0;Y<K;Y++){let H=Math.PI-Y/K*(Math.PI/2);Z.push(J.xw-(J.xw-J.Bk)*Math.pow(Math.abs(Math.cos(H)),2/oJ),J.W*Math.pow(Math.sin(H),2/oJ))}let X=Math.asin(Math.min(1,Math.pow(Q/J.W,J.pf/2)));for(let Y=0;Y<$;Y++){let H=Math.PI/2-Y/$*(Math.PI/2-X),U=J.W*Math.pow(Math.sin(H),2/J.pf);Z.push(J.xw+(J.Fs-J.xw)*Math.pow(Math.cos(H),2/J.pf)+J.E*mY(U/J.wf),U)}for(let Y=0;Y<=W;Y++){let H=Q*(1-Y/W);Z.push(oQ(J,H),H)}}class b${dy;rows=[];y0;y1;constructor(J,Q,Z){this.dy=Q;let K=1/0,$=-1/0;for(let W of J)K=Math.min(K,W.y),$=Math.max($,W.y);this.y0=K,this.y1=$;for(let W=K;W<=$;W+=Q){let X=-1/0,Y=1/0;for(let H=0;H<J.length-1;H++){let U=J[H],D=J[H+1];if(U.y>W===D.y>W)continue;let G=U.x+(D.x-U.x)*(W-U.y)/(D.y-U.y);X=Math.max(X,G),Y=Math.min(Y,G)}this.rows.push(X>Y?Z(W,X,Y):null)}}at(J){let Q=(J-this.y0)/this.dy,Z=Math.floor(Q);if(Z<0||Z>=this.rows.length-1)return null;let K=this.rows[Z],$=this.rows[Z+1];if(!K||!$)return K??$;let W=Q-Z,X=(Y,H)=>Y+(H-Y)*W;return{F:X(K.F,$.F),Bk:X(K.Bk,$.Bk),Fs:X(K.Fs,$.Fs),W:X(K.W,$.W),xw:X(K.xw,$.xw),E:X(K.E,$.E),wf:X(K.wf,$.wf),pf:X(K.pf,$.pf)}}}class CJ{lines=[];cur=[];p(J,Q,Z){return this.cur.push(J,Q,Z),this}end(J=!1){if(J&&this.cur.length>=3)this.cur.push(this.cur[0],this.cur[1],this.cur[2]);if(this.cur.length>=6)this.lines.push(new Float32Array(this.cur));this.cur=[]}ellipse(J,Q,Z,K=24,$=0,W=Math.PI*2){for(let X=0;X<=K;X++){let Y=$+(W-$)*X/K,H=Math.cos(Y),U=Math.sin(Y);this.p(J[0]+Q[0]*H+Z[0]*U,J[1]+Q[1]*H+Z[1]*U,J[2]+Q[2]*H+Z[2]*U)}this.end()}}function dY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=1-n9(7.6,9.1,X),H=HJ(xq,$),U=n9(H-1.5,H+0.15,X),D=HJ(gq,X),G=n9(D-0.7,D+0.9,$);return Y*U*G}var iq=1.7,oq=0.55;function uY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=(($-5.2)/2.3)**2+((X-8.3)/2.4)**2;return Y<1?(1-Y)**2:0}function hY(J,Q,Z,K){if(Q===0||K===0)return[0,0];let $=Q*K*J;return[oq*$,Math.sign(Z)*iq*$*n9(0.4*J,2.6*J,Math.abs(Z))]}function aq(J,Q,Z){let K=Q.length;if(Q.every(Boolean))return[Z?[...J,J[0],J[1],J[2]]:J];let $=[],W=Z?Q.indexOf(!1)+1:0,X=[];for(let Y=0;Y<K;Y++){let H=(W+Y)%K;if(Q[H])X.push(J[3*H],J[3*H+1],J[3*H+2]);else{if(X.length>=6)$.push(X);X=[]}}if(X.length>=6)$.push(X);return $}function rq(J,Q){let Z=[0];for(let X=1;X<J.length;X++)Z.push(Z[X-1]+Math.hypot(J[X].x-J[X-1].x,J[X].y-J[X-1].y));let K=Z[Z.length-1],$=[],W=0;for(let X=0;X<Q;X++){let Y=K*X/(Q-1);while(W<J.length-2&&Z[W+1]<Y)W++;let H=(Y-Z[W])/Math.max(0.000000001,Z[W+1]-Z[W]);$.push({x:J[W].x+(J[W+1].x-J[W].x)*H,y:J[W].y+(J[W+1].y-J[W].y)*H})}return $}function iQ(J,Q,Z){let K=Z*Q[Q.length-1],$=0;while($<J.length-2&&Q[$+1]<K)$++;let W=(K-Q[$])/Math.max(0.000000001,Q[$+1]-Q[$]);return{x:J[$].x+(J[$+1].x-J[$].x)*W,y:J[$].y+(J[$+1].y-J[$].y)*W}}var f$=(J)=>{let Q=[0];for(let Z=1;Z<J.length;Z++)Q.push(Q[Z-1]+Math.hypot(J[Z].x-J[Z-1].x,J[Z].y-J[Z-1].y));return Q};function tq(J){let Q=J.tract,Z=Q.scale,K=J.bodyParams.pharynx,$=S$(J),W=(S)=>$(0,S).y,X=(S)=>S/Z>=7?S/Z:7-(7-S/Z)/K,Y=(S,g)=>Q.P(S,g),H={...vQ,jaw:0,lipAp:0,labiodental:0},U=J.frame(H),D=V7(J,U,H),G=[...D.skinLower,...D.skinUpper],N=new b$(G,0.08*Z,(S,g,d)=>{let a=X(S),Q0=a>=3.4&&a<=16.1?HJ(bq,a)*Z:1/0,r=Math.min(g,Q0),z0=2.2+0.4*n9(2.5,3.5,a)*(1-n9(17,18.5,a));return{F:g,Bk:d,Fs:r,W:HJ(yq,a)*Z,xw:d+(r-d)*HJ(hq,a),E:g-r,wf:HJ(fq,a)*Z,pf:z0}}),E=Y(-2.5,10.5),O=U.upperLip[U.upperLip.length-1].y,L=U.lowerLip[U.lowerLip.length-1].y,F=cq*Z,q=(S,g,d,a)=>g>L&&g<O&&Math.abs(d)<F&&S>a.xw,R=[],k=(S,g,d)=>{for(let a of aq(S,g,d)){let Q0=a.length/3,r=new Float32Array(Q0),z0=new Float32Array(Q0);for(let q0=0;q0<Q0;q0++)r[q0]=dY(Z,K,a[3*q0],a[3*q0+1]),z0[q0]=uY(Z,K,a[3*q0],a[3*q0+1]);R.push({a:new Float32Array(a),w:r,c:z0})}},V=[],A=1.4*Z;for(let S=N.y0+0.25*Z;S<N.y1-0.2*Z;S+=A){let g=N.at(S);if(!g||g.W<0.2*Z)continue;sq(g,Math.min(0.6*g.W,3.6*Z),V);let d=[],a=[],Q0=V.length/2;for(let r=0;r<Q0;r++)d.push(V[2*r],S,V[2*r+1]);for(let r=Q0-2;r>0;r--)d.push(V[2*r],S,-V[2*r+1]);for(let r=0;r<d.length/3;r++)a.push(!q(d[3*r],S,d[3*r+2],g));k(d,a,!0)}let P=0.3*Z;for(let S of[-3.6,-2.4,-1.2,1.2,2.4,3.6].map((g)=>g*Z)){let g=[],d=[];for(let a=N.y0+0.1*Z;a<=N.y1;a+=P){let Q0=N.at(a);if(!Q0||Math.abs(S)>0.97*Q0.W){k(g,d,!1),g=[],d=[];continue}let r=oQ(Q0,S);g.push(r,a,S),d.push(!q(r,a,S,Q0))}k(g,d,!1)}for(let S of[0.5,0.8].map((g)=>g*Math.PI))for(let g of[1,-1]){let d=[],a=[];for(let Q0=N.y0+0.1*Z;Q0<=N.y1;Q0+=P){let r=N.at(Q0);if(!r||r.W<0.2*Z)continue;d.push(r.xw-(r.xw-r.Bk)*Math.pow(Math.abs(Math.cos(S)),2/oJ),Q0,g*r.W*Math.pow(Math.sin(S),2/oJ)),a.push(!0)}k(d,a,!1)}let _=[],I=[],C=(S,g,d,a,Q0,r=!1)=>{let z0=new CJ;Q0(z0),S.push({lines:z0.lines,color:g,width:d,alpha:a,hot:r})},p=(S,g,d,a)=>{let Q0=P9(g.map(([r,z0])=>$(r,z0)),4);Q0.forEach((r,z0)=>{let q0=N.at(r.y);S.p(r.x,r.y,a*((q0?nq(q0,r.x):0)+d(z0,Q0.length)))}),S.end()};C(_,e.blueDim,1.05,0.9,(S)=>{for(let g of[1,-1]){p(S,[[-2.55,13.4],[-2.85,14.75],[-3.65,15.45],[-4.6,15.25],[-5.2,14.25],[-5.4,12.8],[-5.05,11.3],[-4.55,10.2],[-3.95,9.55],[-3.35,9.65],[-3,10.35]],(a,Q0)=>(0.25+1.2*Math.sin(Math.PI*a/(Q0-1))**1.5)*Z,g),p(S,[[-3.15,14.3],[-3.95,14.45],[-4.55,13.5],[-4.6,12.1],[-4.15,11.05]],()=>0.55*Z,g),p(S,[[-2.7,11.2],[-2.55,11.85],[-2.75,12.35]],()=>0.35*Z,g);let d=[];for(let a=0;a<=16;a++)d.push([-3.5+0.6*Math.cos(a/16*Math.PI*2),12+0.85*Math.sin(a/16*Math.PI*2)]);p(S,d,()=>0.12*Z,g)}}),C(_,e.blueMid,1,0.8,(S)=>{for(let g of[1,-1]){for(let a=14.6;a>=11.3;a-=0.15){let Q0=W(a),r=N.at(Q0);if(!r)continue;let z0=g*(0.3+1.05*(14.6-a)/3.3)*Z;S.p(oQ(r,z0),Q0,z0)}S.end();let d=[[7.95,11.05,0.95],[7.4,11.15,1.45],[7.25,11.6,1.55],[7.55,12.1,1.35],[8.2,12.15,1]];for(let[a,Q0,r]of d)S.p(a*Z,W(Q0),g*r*Z);S.end()}}),C(_,e.blueMid,1,0.9,(S)=>{for(let g of[1,-1])S.ellipse([8.05*Z,W(10.98),g*0.62*Z],[0.42*Z,0.04*Z,0],[0,0,0.26*Z],16)});let j=new b$(D.brain,0.08*Z,(S,g,d)=>({F:g,Bk:d,Fs:g,W:HJ(pq,X(S))*Z,xw:d+(g-d)*0.48,E:0,wf:1,pf:2.3}));C(_,e.blueMid,0.85,0.32,(S)=>{for(let g=j.y0+0.6*Z;g<j.y1-0.15*Z;g+=1.5*Z){let d=j.at(g);if(!d)continue;for(let a=0;a<=48;a++){let Q0=a/48*Math.PI*2,r=Math.cos(Q0),z0=Math.sin(Q0),q0=r>=0?d.pf:oJ,b0=r>=0?d.xw+(d.Fs-d.xw)*Math.pow(r,2/q0):d.xw-(d.xw-d.Bk)*Math.pow(-r,2/q0);S.p(b0,g,Math.sign(z0)*d.W*Math.pow(Math.abs(z0),2/q0))}S.end()}for(let g of[0.3,0.7].map((d)=>d*Math.PI))for(let d of[1,-1]){for(let a=j.y0;a<=j.y1;a+=0.3*Z){let Q0=j.at(a);if(!Q0)continue;let r=Math.cos(g),z0=Math.sin(g),q0=r>=0?Q0.pf:oJ,b0=r>=0?Q0.xw+(Q0.Fs-Q0.xw)*Math.pow(r,2/q0):Q0.xw-(Q0.xw-Q0.Bk)*Math.pow(-r,2/q0);S.p(b0,a,d*Q0.W*Math.pow(z0,2/q0))}S.end()}}),C(_,e.blueDim,0.9,0.6,(S)=>{for(let g=0;g<9;g++){let d=-4.4+g*1.75;if(d>10.5)break;let a=uQ(d)-2.25,Q0=Y(a,d+0.08),r=Y(a,d+1.32),z0=Y(a+0.8,0).x,q0=0.8*Z,b0=1.05*Z;for(let i0 of[Q0.y,r.y])S.ellipse([z0,i0,0],[q0,0,0],[0,0,b0],24);for(let i0 of[0.25,0.75,1.25,1.75].map((r0)=>r0*Math.PI))S.p(z0+q0*Math.cos(i0),Q0.y,b0*Math.sin(i0)).p(z0+q0*Math.cos(i0),r.y,b0*Math.sin(i0)).end();let m0=(Q0.y+r.y)/2,h0=z0-2.15*Z;S.ellipse([h0,m0,0],[0.72*Z,0,0],[0,0,0.88*Z],20);for(let i0 of[1,-1])S.p(z0-0.7*Z,m0,i0*0.55*Z).p(h0+0.45*Z,m0,i0*0.72*Z).end(),S.p(z0-0.5*Z,m0,i0*0.95*Z).p(z0-0.9*Z,m0-0.1*Z,i0*2.3*Z).end();S.p(h0-0.72*Z,m0,0).p(h0-1.8*Z,m0-0.55*Z,0).end()}}),C(_,e.blueDim,0.85,0.5,(S)=>{let g=Y(-4.9,0).x;for(let d=-4.4;d<=11;d+=1.75)S.ellipse([g,Y(0,d).y,0],[0.42*Z,0,0],[0,0,0.6*Z],16);for(let d of[1,-1])S.p(g,Y(0,-4.6).y,d*0.6*Z).p(g,Y(0,11.4).y,d*0.6*Z).end()}),C(_,e.blueDim,0.9,0.7,(S)=>{for(let g of[1,-1]){for(let d of D.nasal)S.p(d.x,d.y,g*1.2*Z);S.end(!0);for(let d of D.turbinates){for(let a of d)S.p(a.x,a.y,g*0.95*Z);S.end()}}});let y=(S,g,d)=>{let a=[];for(let Q0=0;Q0<=60;Q0++){let r=d*Q0/60;a.push({x:S-g*Math.pow(r/d,1.85),y:r})}return{pts:a,cum:f$(a)}},m=(S,g,d,a,Q0,r,z0)=>{let q0=y(g,d,a),b0=q0.cum[q0.cum.length-1],m0=Q0.reduce((i0,r0)=>i0+r0[0],0),h0=0.97*b0/(m0*Z);for(let i0 of[1,-1]){let r0=0;for(let[V8,F8,O8]of Q0){let v=V8*Z*h0,A8=F8*Z,J8=O8*Z,G8=(r0+v/2)/b0;r0+=v;let z=iQ(q0.pts,q0.cum,G8),M=iQ(q0.pts,q0.cum,Math.min(1,G8+0.01)),b=iQ(q0.pts,q0.cum,Math.max(0,G8-0.01)),s=M.x-b.x,W0=M.y-b.y,G0=Math.hypot(s,W0)||1;s/=G0,W0/=G0;let E0=W0,t=-s,K0=r(z.y/a),R0=(A0,N0,U0=0)=>[z.x+s*A0-E0*U0,K0+z0*N0,i0*(z.y+W0*A0-t*U0)];for(let[A0,N0]of[[-0.5,0],[-0.5,0.55],[-0.38,1],[0,1.08],[0.38,1],[0.5,0.55],[0.5,0]])S.p(...R0(A0*v,N0*A8));S.end(!0);for(let[A0,N0]of[[-0.45,0.1],[0.45,0.1],[0.45,0.9],[-0.45,0.9]])S.p(...R0(A0*v,0,N0*J8));S.end(!0)}}},T=Y(7.3,0).x,w=4.2*Z,n=2.65*Z;C(_,e.blue,1,0.8,(S)=>m(S,T,w,n,uq,(g)=>(7.95+0.3*g*g)*Z,1)),C(_,e.blueMid,1,0.6,(S)=>{for(let g of[0,2,4,5,6,7]){let d=D.palOral[g],a=Math.max(0,(T-d.x)/w),Q0=(a>=1?n:n*Math.pow(a,0.5405405405405405))-0.45*Z,r=(8.95+0.3*Math.min(1,Q0/n)**2)*Z;if(Q0<0.6*Z||d.y<r+0.15*Z)continue;for(let z0=0;z0<=20;z0++){let q0=Q0*(z0/10-1);S.p(d.x,r+(d.y-r)*Math.pow(1-Math.pow(Math.abs(q0)/Q0,2.4),0.7),q0)}S.end()}});let u=(S,g,d)=>{let a=Y(S,g);return[a.x,a.y,d*Z]},$0=(S,g,d)=>{let a=g.map(([Q0,r,z0])=>u(Q0,r,d*z0));for(let Q0=0;Q0<a.length-1;Q0++){let r=a[Math.max(0,Q0-1)],z0=a[Q0],q0=a[Q0+1],b0=a[Math.min(a.length-1,Q0+2)];for(let m0=0;m0<4;m0++){let h0=m0/4,i0=h0*h0,r0=i0*h0,V8=(F8,O8,v,A8)=>0.5*(2*O8+(-F8+v)*h0+(2*F8-5*O8+4*v-A8)*i0+(-F8+3*O8-3*v+A8)*r0);S.p(V8(r[0],z0[0],q0[0],b0[0]),V8(r[1],z0[1],q0[1],b0[1]),V8(r[2],z0[2],q0[2],b0[2]))}}S.p(...a[a.length-1]),S.end()};C(I,e.red,1.25,0.9,(S)=>{for(let g of[1,-1]){$0(S,[[6.4,4.6,0],[5.6,4.45,1.5],[4.5,4.4,2.6],[3.2,4.5,3.5],[1.8,4.85,4.15],[0.4,5.6,4.6],[-0.55,6.6,4.85],[-0.9,7.6,4.9],[-1.45,8.9,4.95],[-1.9,9.7,5],[-2.15,10.2,5]],g),$0(S,[[-1.8,10.25,4.95],[-0.9,9.4,4.85],[0.15,10.1,4.6],[0.6,8.9,4.35],[1.1,7.7,4],[1.9,7.2,3.55]],g);let d=u(-2.5,10.5,g*4.95);S.ellipse(d,[0.45*Z,0,0],[0,0.12*Z,0.85*Z],16)}}),C(I,e.red,1,0.55,(S)=>{for(let g of[1,-1]){$0(S,[[1.9,7.2,3.55],[3,7.15,3.15],[4.3,7.1,2.6],[5.4,7.05,1.85],[6.2,7.05,1.05],[6.72,7.15,0]],g);for(let[d,a,Q0,r,z0]of[[3,3.15,3.2,4.5,3.5],[5.4,1.85,5.6,4.45,1.5],[1.9,3.55,1.8,4.85,4.15]])$0(S,[[d,7.15,a],[(d+Q0)/2,5.9,(a+z0)/2+0.15],[Q0,r,z0]],g)}});let i=new CJ;$0(i,[[7.25,6.75,0],[7.4,5.4,0],[6.4,4.6,0],[5.6,5,0],[5.9,6.2,0],[6.45,6.55,0]],1);let Z0=i.lines[0],X0=Y(6.98,0).x,S0=4*Z,T0=2.5*Z;C(I,e.blue,1,0.8,(S)=>m(S,X0,S0,T0,lq,(g)=>(7.75+0.45*Math.pow(g,1.5))*Z,-1));let n0=$(6.15,15.35),u0=new x(0.3*Z,(N.y0+N.y1)/2,0);return{model:J,head:N,condyle:E,lipHalf:F,center:u0,shell:R,fixed:_,jaw:I,chin:Z0,eyes:[[n0.x,n0.y,3.15*Z],[n0.x,n0.y,-3.15*Z]],eyeR:1.05*Z}}var eq=[0.09,0.06,0.03];class h${scene=new EQ;camera=new l8(24,1,5,2000);beams=new P$;rest=null;w=1;h=1;compact=!1;centred=!1;facing=1;clock=0;gaze=new B7;face=new y6;eye=new x;turn=new r8;euler=new y9;strobe=0;tmp=new z$;particles=[];echoes=[];lastEcho=-1;sparkSeed=7;k=1;ring={n:0,s:new Float64Array(80),cx:new Float64Array(80),cy:new Float64Array(80),ux:new Float64Array(80),uy:new Float64Array(80),a:new Float64Array(80),b:new Float64Array(80)};v3=new x;caliper=null;constructor(){this.scene.add(this.beams.group),this.scene.fog=new U7(0,50,100);for(let J=0;J<200;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,v:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN,pz:NaN})}dispose(){this.beams.dispose()}resetMotion(){this.face=new y6,this.echoes=[],this.lastEcho=-1,this.strobe=0;for(let J of this.particles)J.px=NaN}resize(J,Q){if(this.w=J,this.h=Q,this.compact=J<560,this.camera.aspect=J/Q,this.compact||this.centred)this.camera.clearViewOffset();else this.camera.setViewOffset(J,Q,0.1*J,0,J,Q);this.camera.updateProjectionMatrix(),this.beams.setResolution(J,Q);for(let Z of this.particles)Z.px=NaN}poses(J){let Q=this.restFor(J),Z=Math.tan(this.camera.fov*Math.PI/360),K=1.1*Math.max(15.2/Z,11/(Z*Math.max(0.3,this.camera.aspect))),$=Q.center.clone(),W=this.facing>0?0.62:Math.PI-0.62,X=0.2;return{target:$,home:$.clone().add(new x(Math.sin(W)*Math.cos(0.2),Math.sin(0.2),Math.cos(W)*Math.cos(0.2)).multiplyScalar(K)),side:$.clone().add(new x(0,0,this.facing*K))}}restFor(J){if(!this.rest||this.rest.model!==J)this.rest=tq(J);return this.rest}project(J,Q,Z){let K=this.v3.set(J,Q,Z).applyMatrix4(this.beams.group.matrixWorld).project(this.camera);return[(K.x+1)/2*this.w,(1-K.y)/2*this.h]}pxPerCmAt(J,Q,Z){let K=this.camera.matrixWorld.elements,[$,W]=this.project(J,Q,Z),[X,Y]=this.project(J+K[0],Q+K[1],Z+K[2]);return Math.hypot(X-$,Y-W)}crown(J){let Q=this.restFor(J),Z=J.tract.scale,K=Q.head.at(Q.head.y1-1.2*Z),$=K?(K.F+K.Bk)/2:Q.center.x,[W,X]=this.project($,Q.head.y1,0);return{x:W,y:X,cmPx:this.pxPerCmAt($,Q.head.y1,0)}}faceView(J,Q,Z){let K=sQ(J,Q,Z).find(($)=>$.id==="lips").pos;return{handles:sQ,X:($)=>this.project($.x,$.y,0)[0],Y:($)=>this.project($.x,$.y,0)[1],pxPerCm:this.pxPerCmAt(K.x,K.y,0)}}update(J,Q,Z,K,$,W){this.clock+=W;let X=this.restFor(J),Y=J.tract.scale,H=this.face;this.headPose(X,Y);let U=T$(J,Z.jaw),D=X.condyle,G=this.beams,N=this.camera.position.distanceTo(X.center),E=this.scene.fog;E.near=N-3*Y,E.far=N+30*Y,G.begin();let O=(m,T=0)=>{let w=new Float32Array(m.length*3);return m.forEach((n,u)=>{w[3*u]=n.x,w[3*u+1]=n.y,w[3*u+2]=T}),w},L=this.v3.copy(this.eye).sub(X.center).normalize(),F=n9(0.25,0.8,Math.abs(L.z)),q=0.22+0.78*F,R=0.45+0.55*F,k=(m,T,w,n={},u=q)=>G.line(O(m),m.length,T,w,{...n,alpha:(n.alpha??1)*u}),V=(m,T,w)=>w===0?[m,T]:xY(m,T,D,w);this.k=Y;for(let m of X.fixed)for(let T of m.lines)G.line(T,T.length/3,m.color,m.width,{alpha:m.alpha,hot:m.hot});for(let m of X.jaw)for(let T of m.lines){let w=this.tmp.reset();for(let n=0;n<T.length;n+=3){let[u,$0]=V(T[n],T[n+1],U);w.p(u,$0,T[n+2])}G.poly(w,m.color,m.width,{alpha:m.alpha,hot:m.hot})}for(let m of X.shell){let T=this.tmp.reset();for(let w=0;w<m.w.length;w++){let n=m.a[3*w+2],[u,$0]=hY(Y,m.c[w],n,H.puff),[i,Z0]=V(m.a[3*w]+u,m.a[3*w+1],U*m.w[w]);T.p(i,Z0,n+$0)}G.poly(T,e.blueDim,0.85,{alpha:0.42})}let A=V7(J,Q,Z);k(A.inset,e.blueDim,0.9,{alpha:0.5}),k(A.skull,e.blueDim,0.9,{close:!0,alpha:0.6}),k(A.brain,e.blueMid,1,{close:!0,alpha:0.75}),k(A.sulcus,e.blueDim,0.9),k(A.nasal,e.blueMid,1,{close:!0}),k(A.palOral,e.blueMid,1.1),k(A.palNasal,e.blueMid,1.1),k(A.skinLower,e.blue,1.5),k(A.skinUpper,e.blue,1.5),k(A.outerWall,e.blue,1.4,{hot:!0}),k(Q.inner,e.blue,1.3,{alpha:0.9}),k(A.glottisWall,e.blue,1.2,{alpha:0.8}),this.eyes(X,W),this.airway(J,Q,K,$,Y),this.velum(Q,Y),this.epiglottis(Q,Y,R),this.larynx(J,Q,Z,K,Y,W,X.head.y0,q);let P=O(Q.tongue),_=(m,T)=>O(sJ(m.map((w)=>[w.x,w.y]),T).map(([w,n])=>({x:w,y:n}))),I=_(Q.upperLip,2),C=_(Q.lowerLip,2),p=this.lips(X,J,Q,Z,U),j=X.chin,y=new Float32Array(j.length);for(let m=0;m<j.length;m+=3){let[T,w]=V(j[m],j[m+1],U);y[m]=T,y[m+1]=w}if(K&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock;let m=[{a:P,color:e.green},{a:y,color:e.red},{a:I,color:e.pink},{a:C,color:e.pink}];if(p)m.push({a:p,color:e.pink});this.echoes.push({t:this.clock,lines:m});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if(K)eq.forEach((m,T)=>{let w=this.nearestEcho(this.clock-m);if(!w)return;for(let n of w.lines)G.line(n.a,n.a.length/3,n.color,1,{alpha:(0.1+0.07*T)*R})});if(this.tongue(Q,Z,Y),G.line(y,y.length/3,e.red,1.5,{hot:!0,alpha:R}),G.line(P,Q.tongue.length,e.green,1.6,{hot:!0,alpha:R}),G.line(I,I.length/3,e.pink,1.5,{hot:!0,alpha:R}),G.line(C,C.length/3,e.pink,1.5,{hot:!0,alpha:R}),k(sJ(Q.velum.map((m)=>[m.x,m.y]),3).map(([m,T])=>({x:m,y:T})),e.white,1.25,{alpha:0.92},R),$.particles&&K)this.drawParticles(J,Q,K,W);if(K)this.drawTurbulence(J,Q,K);if(this.caliper=null,$.calipers)this.drawCaliper(Q);G.end()}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}headPose(J,Q){let Z=this.beams.group,K=this.v3.set(-2.4*Q,J.head.y0+0.42*(J.condyle.y-J.head.y0),0);this.turn.setFromEuler(this.euler.set(this.face.tilt,0,this.face.nod)),Z.quaternion.copy(this.turn),Z.position.copy(K).sub(K.applyQuaternion(this.turn)),Z.updateMatrixWorld(!0),this.eye.copy(this.camera.position),Z.worldToLocal(this.eye)}eyes(J,Q){let Z=this.gaze,K=this.face;Z.update(this.clock,Q);let $=J.eyeR,W=Z.pitch+1.3*K.lookUp,X=[Math.cos(W)*Math.cos(Z.yaw),Math.sin(W),Math.cos(W)*Math.sin(Z.yaw)],Y=(G)=>{let N=Math.abs(G[1])>0.9?[1,0,0]:[0,1,0],E=pY(gY(N,G));return[E,gY(G,E)]},H=this.eye,U=1-n9(0.4,0.9,K.lid),D=Math.max(0,K.brow);for(let G of J.eyes){let N=pY([H.x-G[0],H.y-G[1],H.z-G[2]]),[E,O]=Y(N),L=new CJ;L.ellipse(G,b6(E,$),b6(O,$),36);let[F,q]=Y(X),R=[G[0]+X[0]*$*0.86,G[1]+X[1]*$*0.86,G[2]+X[2]*$*0.86];L.ellipse(R,b6(F,$*0.5),b6(q,$*0.5),24);let k=[G[0]+X[0]*$*0.97,G[1]+X[1]*$*0.97,G[2]+X[2]*$*0.97];L.ellipse(k,b6(F,$*0.2),b6(q,$*0.2),14);let V=Math.sign(G[2]),A=(j,y,m)=>j*(1-y*y)+0.06*y*V*m,P=(j)=>{for(let y=0;y<=16;y++){let m=-1+y/8,T=V*m*0.95,w=A(-0.36,m,-1),n=j?A(0.5+0.2*D,m,1)*(1-K.lid)+(w+0.03)*K.lid:w;L.p(G[0]+1.04*$*Math.cos(n)*Math.cos(T),G[1]+1.04*$*Math.sin(n),G[2]+1.04*$*Math.cos(n)*Math.sin(T))}L.end()};P(!0),P(!1);let _=0.3*K.brow,I=0.28*Math.max(0,-K.brow),C=0.22*K.lid*D;for(let j=0;j<=12;j++){let y=-1+j/6,m=V*(0.15+y*0.62),T=(1-y)/2,w=0.82+0.12*(1-y*y)-0.06*y+_+(C-I)*T;L.p(G[0]+1.32*$*Math.cos(w)*Math.cos(m),G[1]+1.32*$*Math.sin(w),G[2]+1.32*$*Math.cos(w)*Math.sin(m))}L.end();let p=[[e.blueMid,1,0.35],[e.blue,1,0.9*U],[e.blue,1,0.7*U],[e.blue,1.25,0.95],[e.blue,1.05,0.75],[e.blueMid,1.3,0.8]];L.lines.forEach((j,y)=>this.beams.line(j,j.length/3,p[y][0],p[y][1],{alpha:p[y][2]}))}}lips(J,Q,Z,K,$){let W=Q.tract.scale,X=J.condyle,Y=J.head,H=this.beams,U=Q.bodyParams.pharynx,D=J.lipHalf,G=Math.max(0.3*W,(1.1+(Q.bodyParams.lipWidth-1.1)*fY(K.lipWidth))*W/2),N=Z.upperLip.slice(6),E=Z.lowerLip.slice(6).map((w)=>xQ(w,X,-$)),O=f$(N),L=f$(E),F=N[0],q=E[0],R=(F.y+q.y)/2,k=(w,n)=>{let u=Y.at(w);return u?oQ(u,n,!0):0},V=F.x-k(F.y,0),A=q.x-k(q.y,0),P=(V+A)/2,_=N[N.length-1].y,I=E[E.length-1].y,C=this.tmp,p=(w,n,u)=>{let $0=Math.sqrt(Math.max(0,1-(u/G)**2)),i=iQ(w?N:E,w?O:L,n),Z0=w?F:q,X0=w?_:I,S0=R+(Z0.y-R)*$0,T0=X0-Z0.y,n0=S0+(i.y-Z0.y)*(X0-S0)/(Math.abs(T0)<0.0001?0.0001:T0),u0=Math.pow(Math.max(0,1-(u/D)**2),1.5),S=i.x-k(i.y,0)+(P-(w?V:A))*(1-$0)*(1-n),g=k(n0,u)+S*u0,d=w?0.5*(1-$0)*(1-n):0.5*(1+$0)+0.5*(1-$0)*n,a=d+(dY(W,U,g,n0)-d)*n9(G,D,Math.abs(u)),[Q0,r]=hY(W,uY(W,U,g,n0),u,this.face.puff),[z0,q0]=a?xY(g+Q0,n0,X,$*a):[g+Q0,n0];return[z0,q0,u+r]},j=(w,n,u,$0,i)=>{C.reset();for(let Z0=0;Z0<=i;Z0++){let X0=u+($0-u)*Z0/i;C.p(...p(w,n(X0),X0))}return C},y=[0.66,0.88];for(let w of[!0,!1]){for(let $0 of y)H.poly(j(w,()=>$0,-D,D,24),e.blueDim,0.85,{alpha:0.42});for(let $0 of[-0.8,-0.5,0.5,0.8].map((i)=>i*D)){C.reset();for(let i=0;i<=8;i++)C.p(...p(w,0.45+0.55*i/8,$0));H.poly(C,e.blueDim,0.85,{alpha:0.42})}let n=Math.min(D,G+0.3*W),u=($0)=>{let i=Math.sqrt(Math.max(0,1-($0/n)**2)),Z0=w?-0.07*Math.exp(-(($0/(0.32*W))**2))+0.05*Math.exp(-(((Math.abs($0)-0.55*W)/(0.3*W))**2)):0;return Math.max(0,(w?0.42:0.45)*i+Z0*i)};H.poly(j(w,u,-n,n,28),e.pink,1.3,{alpha:0.95}),H.poly(j(w,($0)=>0.45*u($0),-n,n,28),e.pink,1,{alpha:0.45})}for(let w of[1,-1])H.poly(j(!0,()=>0,w*G,w*D,6),e.pink,1,{alpha:0.6});let m=Z.upperLip[6].y-Z.lowerLip[6].y>0.02*W,T=24;C.reset();for(let w=0;w<=T;w++)C.p(...p(!0,0,-G+2*G*w/T));if(m)for(let w=T-1;w>0;w--)C.p(...p(!1,0,-G+2*G*w/T));return H.poly(C,e.pink,2.1,{hot:!0,close:m}),m?C.a.slice(0,C.n*3):null}tongue(J,Q,Z){let K=J.tongue,$=0,W=1/0;K.forEach((N,E)=>{let O=(N.x-J.tip.x)**2+(N.y-J.tip.y)**2;if(O<W)W=O,$=E});let X=22,Y=rq(K.slice(0,$+1),X),H=fY(Q.lateral),U=Y.map((N,E)=>{let O=Y[Math.max(0,E-1)],L=Y[Math.min(X-1,E+1)],F=L.x-O.x,q=L.y-O.y,R=Math.hypot(F,q)||1;F/=R,q/=R;let k=E/(X-1);return{p:N,nx:-q,ny:F,W:HJ(mq,k)*Z,h:(HJ(dq,k)+0.8*H*n9(0.45,0.8,k))*Z}}),D=(N,E)=>{let O=N.h*(1-Math.cos(E));return[N.p.x-N.nx*O,N.p.y-N.ny*O,N.W*Math.sin(E)]},G=this.tmp;for(let N=1;N<X-1;N+=2){G.reset();for(let E=0;E<=12;E++)G.p(...D(U[N],-Math.PI/2+Math.PI*E/12));this.beams.poly(G,e.green,1,{alpha:0.5})}for(let N of[-Math.PI/2,-Math.PI/4,Math.PI/4,Math.PI/2]){G.reset();for(let E of U)G.p(...D(E,N));this.beams.poly(G,e.green,Math.abs(N)>1?1.25:1,{alpha:Math.abs(N)>1?0.8:0.45})}}airway(J,Q,Z,K,$){let W=Q.grid,X=this.ring;if(X.n=0,W.length<2)return;let Y=Z?J.nodeS(Z.t.phLen,Z.t.orLen):null,H=K.pressure&&Z&&Y&&Y.length===Z.t.pressureRms.length,U=-1,D=0;for(let O=0;O<W.length&&X.n<X.s.length;O++){let L=W[O],F=L.outer.x-L.inner.x,q=L.outer.y-L.inner.y,R=Math.hypot(F,q);if(R>0.0001)U=F/R,D=q/R;let k=L.d/2,V=X.n++;X.s[V]=L.s,X.cx[V]=L.outer.x-U*k,X.cy[V]=L.outer.y-D*k,X.ux[V]=U,X.uy[V]=D,X.a[V]=k,X.b[V]=L.d>0.01?Math.min(3.5*$,2*L.area/(Math.PI*L.d)):0}let G=this.tmp,N=this.eye;for(let O=0;O<X.n;O+=2){G.reset();for(let V=0;V<=24;V++){let A=V/24*Math.PI*2,P=Math.cos(A)*X.a[O],_=Math.sin(A)*X.b[O];G.p(X.cx[O]+X.ux[O]*P,X.cy[O]+X.uy[O]*P,_)}let L=N.x-X.cx[O],F=N.y-X.cy[O],q=N.z,R=Math.abs(X.uy[O]*L-X.ux[O]*F)/(Math.hypot(L,F,q)||1),k=1-0.65*R*R;if(H){let V=Math.pow(hQ(y$(Z.t.pressureRms,Y,X.s[O])),0.85);this.beams.poly(G,fQ(V),0.85,{alpha:(0.25+0.65*V)*k})}else this.beams.poly(G,e.blueDim,0.85,{alpha:(K.grid?0.8:0.45)*k})}for(let O of[1,-1]){G.reset();for(let L=0;L<X.n;L++)G.p(X.cx[L],X.cy[L],O*X.b[L]);this.beams.poly(G,e.blue,1,{alpha:0.55})}let E=Q.glottis;for(let O of[0.3,0.65]){let L=E.x+(X.cx[0]-E.x)*O,F=E.y+(X.cy[0]-E.y)*O,q=(0.55+0.25*O)*$;G.reset();for(let R=0;R<=20;R++)G.p(L+q*Math.cos(R/20*Math.PI*2),F,q*Math.sin(R/20*Math.PI*2));this.beams.poly(G,e.blueDim,0.9,{alpha:0.6})}}airPoint(J,Q,Z,K){let $=this.ring;if($.n<2)return null;if(Q<=$.s[0]){let G=Math.max(0,Q/Math.max(0.01,$.s[0])),N=J.glottis;return[N.x+($.cx[0]-N.x)*G+Z*0.3*this.k,N.y+($.cy[0]-N.y)*G,K*0.45*this.k]}let W=0,X=$.n-1;if(Q>=$.s[X])return null;while(X-W>1){let G=W+X>>1;if($.s[G]<=Q)W=G;else X=G}let Y=(Q-$.s[W])/Math.max(0.000001,$.s[X]-$.s[W]),H=(G)=>G[W]+(G[X]-G[W])*Y,U=H($.a)*Z*0.82,D=H($.b)*K*0.82;return[H($.cx)+H($.ux)*U,H($.cy)+H($.uy)*U,D]}drawParticles(J,Q,Z,K){let $=Z.t,W=J.nodeS($.phLen,$.orLen),X=new Float32Array($.phAreas.length+$.orAreas.length);X.set($.phAreas,0),X.set($.orAreas,$.phAreas.length);let Y=Q.lipS;for(let H of this.particles){let U=y$($.flow,W,H.s),D=Math.max(0.05,y$(X,W,H.s)),G=U/D,N=Math.sign(G)*2.2*Math.log1p(Math.abs(G)/30);if(H.s+=N*K,H.life-=K*0.25,H.s>Y||H.s<0||H.life<=0||Math.abs(G)<3){if(!(Math.abs(G)<3&&H.life>0)){H.s=Math.random()*0.8,H.u=Math.random()*2-1,H.v=Math.random()*2-1,H.life=0.6+Math.random()*0.8,H.px=NaN;continue}}let E=this.airPoint(Q,H.s,H.u,H.v);if(!E)continue;if(Number.isFinite(H.px)){let O=Math.min(2,Math.floor(Math.min(1,Math.abs(N)/6)*Math.min(1,H.life)*3));this.beams.seg(H.px,H.py,H.pz,E[0],E[1],E[2],"#ffe2a8",1.05,0.16+0.2*O)}[H.px,H.py,H.pz]=E}}drawTurbulence(J,Q,Z){let K=Z.t;if(!(K.noiseLevel>1)||K.noiseNode<0)return;let $=J.branchS(K.noiseNode,K.phLen,K.orLen);if($<0)return;let W=Math.min(1,Math.log10(K.noiseLevel)/3.2);if(W<=0.05)return;let X=this.sparkSeed=this.sparkSeed*16807%2147483647,Y=()=>(X=X*16807%2147483647)/2147483647;for(let H=0;H<40;H++){let U=this.airPoint(Q,$+0.2+Y()*1.2,Y()*2-1,Y()*2-1);if(!U)continue;let D=0.02+Y()*0.05;this.beams.seg(U[0]-D,U[1],U[2],U[0]+D,U[1],U[2],"#f4fbff",1.6,0.15+0.7*W*Y())}}drawCaliper(J){let Q=this.ring,Z=-1,K=1/0;for(let X=2;X<J.grid.length-1;X++)if(J.grid[X].area<K)K=J.grid[X].area,Z=X;if(Z<0||K>=1.2||Z>=Q.n)return;let $=this.tmp.reset();for(let X=0;X<=24;X++){let Y=X/24*Math.PI*2,H=Math.cos(Y)*Q.a[Z],U=Math.sin(Y)*Q.b[Z];$.p(Q.cx[Z]+Q.ux[Z]*H,Q.cy[Z]+Q.uy[Z]*H,U)}this.beams.poly($,e.white,1.3,{hot:!0});let W=J.grid[Z];this.caliper={x:W.outer.x,y:W.outer.y,z:0,area:K}}velum(J,Q){let Z=J.velum,K=Math.floor(Z.length/2)-1,$=[];for(let Y=0;Y<=K;Y++){let H=Z[Y],U=Z[Z.length-1-Y],D=H.x-U.x,G=H.y-U.y,N=Math.hypot(D,G)||1;D/=N,G/=N;let E=Y/K;$.push({x:(H.x+U.x)/2,y:(H.y+U.y)/2,nx:D,ny:G,W:(1.95-1.5*Math.pow(E,1.5))*Q,droop:0.45*Q*E})}let W=(Y,H)=>{let U=0.12*Q*(1-H*H)-Y.droop*H*H;return[Y.x+Y.nx*U,Y.y+Y.ny*U,Y.W*H]},X=this.tmp;for(let Y of[1,3,5,7,9].filter((H)=>H<=K)){X.reset();for(let H=0;H<=12;H++)X.p(...W($[Y],-1+H/6));this.beams.poly(X,e.white,1,{alpha:0.5})}for(let Y of[-1,1]){X.reset();for(let H of $)X.p(...W(H,Y));this.beams.poly(X,e.white,1,{alpha:0.65})}}epiglottis(J,Q,Z){let[K,$]=J.epiglottis,W=$.x-K.x,X=$.y-K.y,Y=Math.hypot(W,X)||1;W/=Y,X/=Y;let H={x:-X,y:W},U=(N)=>(0.22+0.9*Math.pow(Math.sin(N*Math.PI/2),1.3))*Q,D=this.tmp.reset(),G=10;for(let N=0;N<=G;N++){let E=N/G,O=U(E),L=0.28*Q*(O/(1.12*Q));D.p(K.x+W*Y*E+H.x*L,K.y+X*Y*E+H.y*L,O)}for(let N=1;N<12;N++){let E=U(1)*(1-2*N/12),O=0.28*Q*(Math.abs(E)/(1.12*Q))**2;D.p($.x+H.x*O+W*0.08*Q*(1-(E/U(1))**2),$.y+H.y*O+X*0.08*Q*(1-(E/U(1))**2),E)}for(let N=G;N>=0;N--){let E=N/G,O=U(E),L=0.28*Q*(O/(1.12*Q));D.p(K.x+W*Y*E+H.x*L,K.y+X*Y*E+H.y*L,-O)}this.beams.poly(D,e.blue,1.1,{alpha:0.75}),this.beams.line(new Float32Array([K.x,K.y,0,$.x,$.y,0]),2,e.blue,2.1,{alpha:0.85*Z})}larynx(J,Q,Z,K,$,W,X,Y){let H=Q.glottis,U=this.beams,D=new CJ,G=(A,P,_)=>[H.x+A*$,H.y+P*$,_*$],N=(A,P=!1)=>{for(let[_,I,C]of A)D.p(...G(_,I,C));D.end(P)};for(let A of[1,-1])N([[1.45,1.75,0],[0.75,2,A*1.2],[-0.5,1.95,A*1.9],[-0.6,-0.6,A*1.85],[0.25,-0.85,A*1.5],[1.05,-0.8,A*0.55],[1.2,-0.75,0],[1.6,0.05,0],[1.9,1.15,0],[1.45,1.75,0]]),N([[-0.5,1.95,A*1.9],[-0.7,2.85,A*1.85]]),N([[-0.6,-0.6,A*1.85],[-0.45,-1.25,A*1.7]]);for(let[A,P]of[[-1.75,0.15],[-1.4,1.1]]){for(let _=0;_<=28;_++){let I=_/28*Math.PI*2;D.p(...G(0.1+1*Math.cos(I),A+P*(1-Math.cos(I))/2,1.1*Math.sin(I)))}D.end()}for(let A of D.lines)U.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let E=new CJ,O=H.y-2.1*$,L=H.x+0.08*$;for(let A=O;A>X;A-=0.5*$)E.ellipse([L,A,0],[0.82*$,0,0],[0,0,0.95*$],20,-0.8*Math.PI,0.8*Math.PI);for(let A of[1,-1])E.p(L,O,A*0.95*$).p(L,X,A*0.95*$).end();for(let A of E.lines)U.line(A,A.length/3,e.blueDim,0.9,{alpha:0.85});for(let A of[1,-1])U.line(new Float32Array([L+A*0.82*$,H.y,0,L+A*0.82*$,X,0]),2,e.blueMid,1,{alpha:Y});let F=new CJ,q={x:J.tract.P(1.6,0).x,y:J.tract.P(0,2.9).y+0.6*Z.larynx*$};for(let A of[-0.16,0.16]){for(let P=0;P<=20;P++){let _=-1+P/10;F.p(q.x+(0.35-0.65*_*_)*$,q.y+A*$,1.15*_*$)}F.end();for(let P of[1,-1])F.p(q.x-0.3*$,q.y+A*$,P*1.15*$).p(q.x-2.8*$,q.y+(0.7+A)*$,P*2.05*$).end()}for(let A of F.lines)U.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let R=K?.t.glottalArea,k=0;if(R&&R.length){this.strobe=(this.strobe+W/1.8)%1;let A=0.02;for(let P=0;P<R.length;P++)A=Math.max(A,R[P]);if(k=Math.min(0.45*$,R[Math.floor(this.strobe*R.length)%R.length]/(1.3*$)*2.2),!Number.isFinite(k))k=0}let V=new CJ;for(let A of[1,-1])V.p(...G(0.72,0.1,0)).p(...G(-0.55,0.1,A*(0.06+k/$))).end(),V.p(...G(0.72,0,0)).p(...G(-0.6,0,A*0.62)).end(),V.p(...G(0.65,0.45,0)).p(...G(-0.5,0.45,A*0.45)).end(),V.ellipse(G(-0.72,0.15,A*(0.3+k/$)),[0.18*$,0,0],[0,0.12*$,0.12*$],10);V.lines.forEach((A,P)=>U.line(A,A.length/3,P%4===0?e.white:e.blueMid,P%4===0?1.3:1,{alpha:P%4===2?0.6:0.9,hot:P%4===0}))}}function xY(J,Q,Z,K){let $=J-Z.x,W=Q-Z.y,X=Math.cos(K),Y=Math.sin(K);return[Z.x+$*X-W*Y,Z.y+$*Y+W*X]}var gY=(J,Q)=>[J[1]*Q[2]-J[2]*Q[1],J[2]*Q[0]-J[0]*Q[2],J[0]*Q[1]-J[1]*Q[0]],pY=(J)=>{let Q=Math.hypot(J[0],J[1],J[2])||1;return[J[0]/Q,J[1]/Q,J[2]/Q]},b6=(J,Q)=>[J[0]*Q,J[1]*Q,J[2]*Q];function y$(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}var x$=null,g$=null,f6=null;function lY(J){if(f6)return f6;return f6=(async()=>{let Q;if(J&&typeof J!=="string")Q=await WebAssembly.compile(J);else{let Z=J??"./chimera.wasm",K=await fetch(Z);if(!K.ok)throw new Error(`engine: ${Z}: HTTP ${K.status}`);Q=await WebAssembly.compile(await K.arrayBuffer())}if(WebAssembly.Module.imports(Q).length)throw new Error("engine: the wasm module must not have imports");g$=(await WebAssembly.instantiate(Q,{})).exports,x$=Q})(),f6.catch(()=>f6=null),f6}function cY(){if(!x$)throw new Error("engine not loaded (await initChimera())");return x$}function JE(){if(!g$)throw new Error("engine not loaded (await initChimera())");return g$}var QE=new TextEncoder,ZE=new TextDecoder;function aQ(J,Q={}){let Z=JE(),K=QE.encode(JSON.stringify({fn:J,...Q})),$=Z.chimera_alloc(K.length);new Uint8Array(Z.memory.buffer,$,K.length).set(K);let W=Z.chimera_call($,K.length);Z.chimera_free($,K.length);let X=ZE.decode(new Uint8Array(Z.memory.buffer,Z.chimera_result_ptr(),Z.chimera_result_len())),Y=JSON.parse(X);if(W!==0)throw new Error(`engine ${J}: ${Y.error}`);return Y}var I8=(J,Q,Z)=>Math.max(Q,Math.min(Z,J));class p${grains=Array.from({length:64},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,r:0.25}));pulses=Array.from({length:6},()=>({x:0,y:0,t:-100,strength:0}));count=36;w=0.045;h=0.052;d=0.024;radius=0.0008;shape="box";quiet=0;seed=12345;wallEnergy=new Float64Array(6);collisionEnergy=0;collisions=0;agitation=0;constructor(){this.reset(36)}random(){return this.seed^=this.seed<<13,this.seed^=this.seed>>>17,this.seed^=this.seed<<5,(this.seed>>>0)/4294967296}reset(J){this.count=I8(J|0,1,64);for(let Q=0;Q<64;Q++){let Z=this.random()*Math.PI*2,K=Math.sqrt(this.random())*0.28,$=this.grains[Q];$.x=Math.cos(Z)*this.w*K,$.y=Math.sin(Z)*this.h*K,$.z=(this.random()-0.5)*this.d*0.65,$.vx=$.vy=$.vz=0,$.r=0.18+this.random()*0.2}for(let Q of this.pulses)Q.t=-100;this.quiet=0,this.agitation=0,this.collisionEnergy=this.collisions=0}contact(J,Q,Z,K){if(Q<0.025||this.agitation<0.008)return;this.collisions++,this.collisionEnergy+=Q*Q/this.count,this.wallEnergy[Z]+=Q*Q/this.count;let $=this.pulses[Z];$.x=J.x,$.y=J.y,$.t=K,$.strength=Q}step(J,Q,Z,K,$){if(this.collisionEnergy=this.collisions=0,this.wallEnergy.fill(0),J>0.1){for(let L=0;L<this.count;L++){let F=this.grains[L];F.vx=F.vy=F.vz=0}return}if(this.agitation=Math.max(K,this.agitation*Math.exp(-J/0.11)),this.quiet=K<0.012?this.quiet+J:0,this.quiet>0.6){for(let L=0;L<this.count;L++){let F=this.grains[L];F.vx=F.vy=F.vz=0}return}let W=Math.max(1,Math.ceil(J/0.0042)),X=J/W,Y=Math.exp(-X*10),H=this.radius,U=(-Q[0]+Z[0]*0.35)*9.80665,D=(-Q[1]+Z[1]*0.35)*9.80665-1.6,G=-Q[2]*9.80665,N=Math.max(0.003,this.w/2-H),E=Math.max(0.003,this.h/2-H),O=Math.max(0.003,this.d/2-H);for(let L=0;L<W;L++){for(let q=0;q<this.count;q++){let R=this.grains[q];if(R.vx=I8((R.vx+U*X)*Y,-3,3),R.vy=I8((R.vy+D*X)*Y,-3,3),R.vz=I8((R.vz+G*X)*Y,-3,3),R.x+=R.vx*X,R.y+=R.vy*X,R.z+=R.vz*X,this.shape==="box"){if(Math.abs(R.x)>N)this.contact(R,Math.abs(R.vx),R.x>0?1:0,$),R.x=Math.sign(R.x)*N,R.vx=-R.vx*R.r,R.vy*=0.92,R.vz*=0.92;if(Math.abs(R.y)>E)this.contact(R,Math.abs(R.vy),R.y>0?2:3,$),R.y=Math.sign(R.y)*E,R.vy=-R.vy*R.r,R.vx*=0.92,R.vz*=0.92}else{let k=R.x*R.x/(N*N)+R.y*R.y/(E*E);if(k>1){let V=Math.sqrt(k);R.x/=V,R.y/=V;let A=R.x/(N*N),P=R.y/(E*E),_=Math.hypot(A,P);A/=_,P/=_;let I=R.vx*A+R.vy*P;if(I>0)this.contact(R,I,Math.abs(A)>Math.abs(P)?A>0?1:0:P>0?2:3,$),R.vx-=(1+R.r)*I*A,R.vy-=(1+R.r)*I*P}}if(Math.abs(R.z)>O)this.contact(R,Math.abs(R.vz),R.z>0?4:5,$),R.z=Math.sign(R.z)*O,R.vz=-R.vz*R.r,R.vx*=0.95,R.vy*=0.95}let F=H*2;for(let q=0;q<this.count;q++)for(let R=q+1;R<this.count;R++){let k=this.grains[q],V=this.grains[R],A=V.x-k.x,P=V.y-k.y,_=V.z-k.z,I=A*A+P*P+_*_;if(I>=F*F||I<0.0000000000000001)continue;let C=Math.sqrt(I),p=A/C,j=P/C,y=_/C,m=(V.vx-k.vx)*p+(V.vy-k.vy)*j+(V.vz-k.vz)*y,T=(F-C)*0.35;if(k.x-=p*T,k.y-=j*T,k.z-=y*T,V.x+=p*T,V.y+=j*T,V.z+=y*T,m<0){let w=-m*0.6;k.vx-=w*p,k.vy-=w*j,k.vz-=w*y,V.vx+=w*p,V.vy+=w*j,V.vz+=w*y}}for(let q=0;q<this.count;q++){let R=this.grains[q];if(R.z=I8(R.z,-O,O),this.shape==="box")R.x=I8(R.x,-N,N),R.y=I8(R.y,-E,E);else{let k=R.x*R.x/(N*N)+R.y*R.y/(E*E);if(k>1){let V=Math.sqrt(k);R.x/=V,R.y/=V}}}}}}class m${x=null;y=null;center(J){let Q=Math.hypot(...J);if(Q<0.5)return;J=J.map(($)=>$/Q);let Z=[1-J[0]*J[0],-J[0]*J[1],-J[0]*J[2]],K=Math.hypot(...Z);if(K<0.1)Z=[-J[1]*J[0],1-J[1]*J[1],-J[1]*J[2]],K=Math.hypot(...Z);this.x=Z.map(($)=>$/K),this.y=[J[1]*this.x[2]-J[2]*this.x[1],J[2]*this.x[0]-J[0]*this.x[2],J[0]*this.x[1]-J[1]*this.x[0]]}project(J){if(!this.x)this.center(J);let Q=Math.hypot(...J);if(!this.x||!this.y||Q<0.5)return[0,0];return[J.reduce((Z,K,$)=>Z+K*this.x[$],0)/Q,J.reduce((Z,K,$)=>Z+K*this.y[$],0)/Q]}}var d$=[{name:"Theremin",tag:"VOWEL",description:"Continuous pitch and OO–AH–EE colour."},{name:"Velvet",tag:"WARMTH",description:"Warm sine layers with an octave below."},{name:"Glass",tag:"SHIMMER",description:"Clear, bell-like partials that bloom with tilt."},{name:"Orbit",tag:"SPREAD",description:"A drifting, detuned ensemble in your hand."},{name:"Reed",tag:"BRIGHTNESS",description:"A woody harmonic voice that opens into a buzz."}],AJ=Math.PI*2,KE=[1,2.756,5.404,8.933],$E=[1,0.3,0.16,0.09];class WE{rate;phase=0;phases=new Float64Array([0,0.9,1.7,2.6]);clock=0;weights=new Float64Array(16);desired=new Float64Array(16);weightMix;constructor(J){this.rate=J;this.weightMix=1-Math.exp(-1/(J*0.012))}prepare(J,Q){let Z=Q*2,K=Z<1?0:1,$=Z-K,W=[[350,900,2200],[800,1250,2900],[300,2300,3100]],X=[180,280,450],Y=0;for(let U=0;U<16;U++){let D=J*(U+1),G=0.045/(U+1);for(let N=0;N<3;N++){let E=W[K][N]*(1-$)+W[K+1][N]*$,O=(D-E)/X[N];G+=Math.exp(-0.5*O*O)*(N===0?1:0.65)/Math.sqrt(U+1)}if(U===0)G+=0.3;this.desired[U]=G,Y+=G*G}let H=1/Math.sqrt(Y);for(let U=0;U<16;U++)this.desired[U]*=H}fade(J){return Math.max(0,Math.min(1,(this.rate*0.45-J)/(this.rate*0.07)))}render(J,Q,Z){let K=this.weightMix;this.clock+=1/this.rate,this.phase=(this.phase+AJ*J/this.rate)%AJ;let $=0;if(Z===0){for(let Y=0;Y<16;Y++)this.weights[Y]+=(this.desired[Y]-this.weights[Y])*K,$+=Math.sin(this.phase*(Y+1))*this.weights[Y]*this.fade(J*(Y+1));return $*0.24}if(Z===1)return this.phases[0]=(this.phases[0]+AJ*J*0.5/this.rate)%AJ,(Math.sin(this.phase)*0.8+Math.sin(this.phases[0])*0.25+Math.sin(this.phase*2)*Q*0.25*this.fade(J*2)+Math.sin(this.phase*3)*Q*0.1*this.fade(J*3))*0.3;if(Z===2){let Y=KE,H=$E;for(let U=0;U<4;U++){let D=J*Y[U];this.phases[U]=(this.phases[U]+AJ*D/this.rate)%AJ,$+=Math.sin(this.phases[U])*H[U]*(U===0?1:0.1+Q)*this.fade(D)}return $*0.27}if(Z===3){let Y=0.001+Q*0.009;for(let H=0;H<4;H++){let U=J*(H===3?0.5:1+(H-1)*Y);this.phases[H]=(this.phases[H]+AJ*U/this.rate)%AJ,$+=Math.sin(this.phases[H])*(0.85+Math.sin(this.clock*(0.7+H*0.17)+H)*0.15)}return $*0.12}let W=400+Q*6500,X=0;for(let Y=1;Y<=12;Y++){let H=J*Y,U=(Y%2?1:0.25)/Y*Math.exp(-H/W)*this.fade(H);$+=Math.sin(this.phase*Y)*U,X+=U*U}return $/Math.sqrt(Math.max(0.05,X))*0.25}}var rQ=(J)=>document.getElementById(J);function nY(J,Q){for(let Z of["feedback","beta"]){let K=rQ(Z+"-dialog"),$=rQ(Z+"-form"),W=rQ(Z+"-status");rQ(Z+"-open").addEventListener("click",()=>{W.textContent="",Q(),K.showModal()}),K.querySelector("[data-close]").addEventListener("click",()=>K.close()),$.addEventListener("submit",async(X)=>{if(X.preventDefault(),!$.reportValidity())return;let Y=new FormData($),H=$.querySelector("[type=submit]"),U={email:String(Y.get("email")||""),website:String(Y.get("website")||""),version:"web-08"};if(Z==="beta"){let D=Y.getAll("platform");if(!D.length){W.textContent="Choose at least one platform.";return}Object.assign(U,{name:String(Y.get("name")||""),platforms:D,consent:Y.get("consent")==="on"})}else Object.assign(U,{category:String(Y.get("category")||"other"),message:String(Y.get("message")||""),includeDetails:Y.get("details")==="on",details:Y.get("details")==="on"?{...J(),browser:navigator.userAgent}:void 0});H.disabled=!0,W.textContent="Saving…";try{let D=await fetch("https://kaizendsp.com/api/motion/"+Z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U),credentials:"omit"}),G=await D.json().catch(()=>({}));if(!D.ok||!G.ok)throw new Error(G.error||"Could not save this. Please try again.");W.textContent=Z==="beta"?"Request saved. We’ll use this address for Motion beta access and testing updates.":"Feedback saved—thank you. It goes directly to the Motion development team.",$.reset()}catch(D){W.textContent=D instanceof Error?D.message:"Could not save this. Please try again."}finally{H.disabled=!1}})}}var XE=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],R9=(J)=>440*Math.pow(2,(J-69)/12);function C7(J){let Q=69+12*Math.log2(J/440),Z=Math.round(Q);return{midi:Z,label:XE[(Z%12+12)%12]+(Math.floor(Z/12)-1),cents:Math.round((Q-Z)*100)}}var sY={chromatic:[0,1,2,3,4,5,6,7,8,9,10,11],major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],majorPentatonic:[0,2,4,7,9],minorPentatonic:[0,3,5,7,10],dorian:[0,2,3,5,7,9,10]},aJ=(J)=>(J%12+12)%12;function h6(J,Q){return new Set((sY[Q]??sY.chromatic).map((Z)=>(Z+J)%12))}function YE(J,Q,Z,K=null){let $=69+12*Math.log2(J/440),W=null,X=1/0;for(let Y=45;Y<=93;Y++)if(R9(Y)<=Z+0.000001&&Q.has(aJ(Y))){let H=Math.abs(Y-$);if(H<X)W=Y,X=H}if(W===null)throw new Error("Keep at least one playable pitch enabled.");if(K!==null&&K>=45&&R9(K)<=Z+0.000001&&Q.has(aJ(K))&&Math.abs(K-$)<=X+0.08)return K;return W}class u${held=null;previous=null;hold(J){this.held=J,this.previous=J}followMotion(){this.held=null,this.previous=null}frequency(J,Q,Z,K){let $=this.held===null?J:Math.min(K,R9(this.held));if(!Q)return this.previous=null,$;return this.previous=YE($,Z,K,this.held??this.previous),R9(this.previous)}}class iY{seconds=0;last=null;update(J,Q){if(this.last!==null)this.seconds+=Math.max(0,(J-this.last)/1000);return this.last=Q?J:null,Math.floor(this.seconds)}}function oY(){let J=document.getElementById("usage-consent"),Q=document.getElementById("usage-status"),Z=new iY,K=null,$=!1,W=0,X=(L,F)=>{try{return L.getItem(F)}catch{return null}},Y=(L,F,q)=>{try{if(q===null)L.removeItem(F);else L.setItem(F,q)}catch{}},H,U;try{H=localStorage,U=sessionStorage}catch{}let D=(L,F)=>L?X(L,F):null,G=(L,F,q)=>{if(L)Y(L,F,q)};function N(){let L=Date.now(),F;try{let q=JSON.parse(D(H,"motion-usage-browser-v1")||"null");if(q&&L-q.created<7776000000&&/^[0-9a-f-]{36}$/.test(q.id))F=q.id}catch{}if(!F)F=crypto.randomUUID(),G(H,"motion-usage-browser-v1",JSON.stringify({id:F,created:L}));try{let q=JSON.parse(D(U,"motion-usage-session-v1")||"null");if(q?.visitor===F&&Number.isFinite(q.updated)&&L>=q.updated&&L-q.updated<1800000&&Number.isFinite(q.seconds)&&q.seconds>=0&&q.seconds<14400&&/^[0-9a-f-]{36}$/.test(q.session))K=q}catch{}K??={visitor:F,session:crypto.randomUUID(),seconds:0,updated:L},Z.seconds=K.seconds,Z.last=document.hidden?null:performance.now()}function E(L=!1){if(!$||!K)return;let F=Math.min(14400,Z.update(performance.now(),!document.hidden));K.seconds=F,K.updated=Date.now(),G(U,"motion-usage-session-v1",JSON.stringify(K));let q=JSON.stringify({visitor:K.visitor,session:K.session,seconds:F,consent:!0});if(L&&navigator.sendBeacon?.("https://kaizendsp.com/api/motion/usage",new Blob([q],{type:"application/json"})))return;fetch("https://kaizendsp.com/api/motion/usage",{method:"POST",headers:{"Content-Type":"application/json"},body:q,credentials:"omit",referrerPolicy:"no-referrer",keepalive:L}).then((R)=>{if($)Q.textContent=R.ok?"On · counting anonymous visits and visible time":"On · counts temporarily unavailable"}).catch(()=>{if($)Q.textContent="On · counts temporarily unavailable"})}function O(){$=!0,N(),Q.textContent="On · counting anonymous visits and visible time",E()}if(J.checked=D(H,"motion-usage-consent-v1")==="yes",J.checked)O();J.addEventListener("change",()=>{if(G(H,"motion-usage-consent-v1",J.checked?"yes":"no"),J.checked)O();else $=!1,K=null,Z.seconds=0,Z.last=null,G(H,"motion-usage-browser-v1",null),G(U,"motion-usage-session-v1",null),Q.textContent="Off · browser ID cleared on this device"}),setInterval(()=>{if($&&!document.hidden){if(Z.seconds>=14400)E(!0),K=null,G(U,"motion-usage-session-v1",null),N();E()}},15000),document.addEventListener("visibilitychange",()=>{if(!$)return;if(document.hidden)W=Date.now(),E(!0),Z.last=null;else{if(W&&Date.now()-W>1800000)K=null,G(U,"motion-usage-session-v1",null),N();Z.last=performance.now(),E()}}),addEventListener("pagehide",()=>{E(!0),Z.last=null}),addEventListener("pageshow",()=>{if($&&!document.hidden)Z.last=performance.now()}),addEventListener("storage",(L)=>{if(L.key==="motion-usage-consent-v1"&&L.newValue!=="yes")$=!1,K=null,Z.seconds=0,Z.last=null,J.checked=!1,G(U,"motion-usage-session-v1",null),Q.textContent="Off · disabled in another tab"})}var aY=(J,Q)=>Math.min(...J.filter((Z)=>typeof Z==="number"&&Number.isFinite(Z)&&Z>0),Q);function HE(J,Q=!1){let Z=Math.floor(aY([J.width,J.visualWidth],J.width)),K=aY([J.height,J.clientHeight,J.visualHeight],J.height),$=Math.floor(Q?Math.min(K,Math.max(440,K*0.6)):K);return{width:Z,height:$,left:Math.max(0,J.offsetLeft??0)+Math.max(0,(Z-760)/2),top:Math.max(0,J.offsetTop??0),compact:$<650}}function rY(){let J=document.documentElement,Q=!1,Z=!1,K="";try{Z=sessionStorage.getItem("motion-compact-view")==="yes"}catch{}function $(){Q=!1;let Y=window.visualViewport,H=HE({width:innerWidth,height:innerHeight,clientHeight:J.clientHeight,visualWidth:Y?.width,visualHeight:Y?.height,offsetLeft:Y?.offsetLeft,offsetTop:Y?.offsetTop},Z),U=JSON.stringify(H);if(U===K)return;K=U,J.style.setProperty("--app-height",`${H.height}px`),J.style.setProperty("--app-width",`${H.width}px`),J.style.setProperty("--app-left",`${H.left}px`),J.style.setProperty("--app-top",`${H.top}px`),J.classList.toggle("viewport-compact",H.compact)}function W(){if(!Q)Q=!0,requestAnimationFrame($)}addEventListener("resize",W),addEventListener("pageshow",W),window.visualViewport?.addEventListener("resize",W),window.visualViewport?.addEventListener("scroll",W),document.addEventListener("visibilitychange",W);let X=document.getElementById("compact-view");X.checked=Z,X.addEventListener("change",()=>{Z=X.checked;try{if(Z)sessionStorage.setItem("motion-compact-view","yes");else sessionStorage.removeItem("motion-compact-view")}catch{}$()}),$()}class l${velocity=new Float64Array(3);level=0;lastSample=-1/0;lastRead=-1/0;speed=0;reset(){this.velocity.fill(0),this.level=this.speed=0,this.lastSample=this.lastRead=-1/0}update(J,Q,Z){let K=(Z-this.lastSample)/1000;if(K>0.2)this.velocity.fill(0);let $=Number.isFinite(K)&&K>0?Math.min(0.05,K):0.016666666666666666,W=Math.exp(-$/0.35);for(let Y=0;Y<3;Y++){let H=Number.isFinite(J[Y])?Math.max(-6,Math.min(6,J[Y]))*9.80665:0,U=Math.abs(H)>0.12?H-Math.sign(H)*0.12:0;this.velocity[Y]=this.velocity[Y]*W+U*$}let X=Math.hypot(...Q.map((Y)=>Number.isFinite(Y)?Math.max(-25,Math.min(25,Y)):0));this.speed=Math.max(Math.hypot(...this.velocity),Math.max(0,X-0.04)*0.12),this.lastSample=Z}value(J,Q){let Z=Number.isFinite(this.lastRead)?Math.max(0,Math.min(0.1,(J-this.lastRead)/1000)):0.016666666666666666;this.lastRead=J;let K=J-this.lastSample<150?this.speed:0,$=Math.sqrt(Math.max(0,Math.min(1,(K-0.012)*(0.5+Q)/0.45)));if(this.level+=($-this.level)*(1-Math.exp(-Z/($>this.level?0.018:0.065))),$===0&&this.level<0.003)this.level=0;return this.level}}var H0=(J)=>document.getElementById(J),x6=H0("field"),a0=x6.getContext("2d"),k7=H0("start"),JW=H0("touch-start"),eQ=H0("pause"),Z8=new p$,KZ=new m$,o$=["jaw","tbX","tbY","ttX","ttY","ttCurl","root","lipAp","lipProt","lipWidth","labiodental","velum","larynx","epilarynx","ventricular","lateral","dorsum"],Y9,S8,w0=2,_8=!1,c$=!1,KH=!1,rJ=0,tY=0,A7=new Float32Array(512),JZ=0,n$,a$,QZ,$H,r$={...vQ},s8,s9,zJ,tJ,z7=[0,-1,0],o9=[0,0,0],ZZ=[0,0,0],m6=[0,0],L9=0,PJ=0.5,d6=0.5,l6=0,c6=0,UJ=0,eY=performance.now(),t$=0,s$=0,kJ=0.62,tQ=[0,-9.80665,0],JH=0,g6=0.5,P7=0.5,w9=!1,$Z=!0,WH=0,k9=360,_9=240,i$=!1,M9=null,XH=null,QW=0;var m8=new u$,i9=4,J6=!1,YH=311,a9=!1,e$=0,u6="major",X9=h6(0,"major"),p6=!0,J9=!1,Q6=new l$,WZ=0,XZ=-1/0,HH={frequency:311,vowel:0.5,breath:0.55};k7.disabled=JW.disabled=!0;var UE=(async()=>{await lY("./chimera.wasm"),n$=aQ("catalog");let J=n$.vowelTargets.male;$H=["u","a","i"].map((K)=>o$.map(($)=>J[K]?.artic[$]??n$.neutral[$]));let[Q,Z]=await Promise.all([fetch("./shaker-strokes.pcm"),fetch("./shaker-bank.json")]);if(!Q.ok||!Z.ok)throw new Error("Shaker recordings could not load.");if([a$,QZ]=await Promise.all([Q.arrayBuffer(),Z.json()]),a$.byteLength!==QZ.count*QZ.frames_per_stroke*2)throw new Error("Incomplete shaker recordings.");if(KH=!0,w0===2)DH();k7.disabled=JW.disabled=!1,H0("load-status").textContent="Ready. Start with your volume low."})().catch((J)=>{throw H9("The instruments could not load. Check your connection and reload."),H0("load-status").textContent=String(J),J}),QH;function H9(J){H0("notice").textContent=J,clearTimeout(QH),QH=setTimeout(()=>{H0("notice").textContent=""},4500)}function T9(){H0("status").textContent=S8?_8?"SOUND ON":"SOUND PAUSED":"READY TO PLAY",H0("live-led").classList.toggle("on",_8),eQ.disabled=!S8,eQ.textContent=_8?"Ⅱ":"▶",eQ.setAttribute("aria-label",_8?"Pause sound":"Resume sound"),H0("sensor-status").textContent=!S8?"SOUND ON THIS DEVICE":L9&&performance.now()-L9<2000?"MOTION LIVE · PHONE SOUND":w9?"WAITING FOR MOTION":"TOUCH / MOUSE · PHONE SOUND"}function UH(){let{DeviceMotionEvent:J,DeviceOrientationEvent:Q}=window;if(!J)return Promise.resolve(!1);let Z=[];if(typeof J.requestPermission==="function")Z.push(J.requestPermission());if(typeof Q?.requestPermission==="function")Z.push(Q.requestPermission());return Z.length?Promise.all(Z).then((K)=>K.every(($)=>$==="granted")):Promise.resolve(!0)}async function YZ(J){if(c$)return;c$=!0,k7.textContent="Opening the instruments…";try{if("audioSession"in navigator)try{navigator.audioSession.type="playback"}catch{}Y9??=new AudioContext({latencyHint:"interactive"});let Q=Y9.resume(),Z=J?UH().catch(()=>!1):Promise.resolve(!1);await Promise.all([Q,UE]),w9=await Z,Q6.reset(),await Y9.audioWorklet.addModule("./audio-worklet.js"),S8=new AudioWorkletNode(Y9,"motion-audio",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{module:cY(),pcm:a$,shakerBank:QZ,vowels:$H}}),S8.onprocessorerror=()=>{_8=!1,T9(),H9("The audio engine stopped. Reload to restart it.")},S8.port.onmessage=($)=>{if(Number.isFinite($.data.frequency)&&$.data.frequency>0)YH=$.data.frequency;if($.data.type==="scope")A7=$.data.values,JZ=$.data.writeIndex;if($.data.type==="artic")for(let W=0;W<o$.length;W++)r$[o$[W]]=$.data.values[W];if($.data.type==="grains"){Z8.count=$.data.count;let W=$.data.positions,X=performance.now()/1000;for(let Y=0;Y<Z8.count;Y++){let H=Z8.grains[Y];H.x=W[Y*3],H.y=W[Y*3+1],H.z=W[Y*3+2]}for(let Y=0;Y<6;Y++){let H=Z8.pulses[Y],U=Y*4;H.x=$.data.impacts[U],H.y=$.data.impacts[U+1],H.t=X-$.data.impacts[U+2],H.strength=$.data.impacts[U+3]}}if($.data.type==="error")_8=!1,T9(),H9("The audio engine stopped. Reload to restart it.")};let K=Y9.createGain();if(K.gain.value=0.8,S8.connect(K),K.connect(Y9.destination),EH(),_8=!0,H0("welcome").hidden=!0,H0("gesture-caption").hidden=!1,w9)$Z=!0,KZ.x=null,H9("Hold comfortably and tap CENTRE. Move to breathe; faster movement gives stronger excitation. Stop to fall silent.");else H9(J?"Motion is unavailable or permission was declined. Drag to play; try opening this link in Safari or Chrome.":"Drag across the display to play. On a phone, open More → Enable motion to use its sensors.");T9(),Q9(!0)}catch(Q){H9(`Could not start sound: ${Q instanceof Error?Q.message:String(Q)}. Try Safari or Chrome.`),k7.textContent="Try enabling sound again"}finally{c$=!1}}k7.addEventListener("click",()=>YZ(!0));JW.addEventListener("click",()=>YZ(!1));eQ.addEventListener("click",async()=>{if(!Y9)return;await Y9.resume(),_8=!_8,T9(),Q9(!0)});H0("centre").addEventListener("click",()=>{Q6.reset(),m8.held=null,J6=!1,eJ(),KZ.center(z7),XH=QW,PJ=d6=0.5,g6=P7=0.5,H9("Centred on this grip.")});H0("test").addEventListener("click",async()=>{if(m8.held=null,eJ(),!S8){if(await YZ(!1),!S8)return}if(Y9?.state!=="running")await Y9?.resume();_8=!0,PJ=0.5,d6=0.5,l6=performance.now()+1000,c6=performance.now()+220,WH=performance.now(),T9(),Q9(!0)});H0("sensitivity").addEventListener("input",(J)=>{kJ=Number(J.target.value)/100,H0("sensitivity-output").textContent=String(Math.round(kJ*100)).padStart(2,"0")});document.querySelectorAll("[data-mode]").forEach((J)=>J.addEventListener("click",()=>GH(Number(J.dataset.mode))));function GH(J){if(w0=J,Q6.reset(),WZ=0,XZ=-1/0,m8.held!==null&&R9(m8.held)>(w0===2?880:1760))m8.held=null;if(UJ=0,c6=0,Z8.reset(Z8.count),document.querySelectorAll("[data-mode]").forEach((Q)=>{let Z=Number(Q.dataset.mode)===w0;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),H0("excitation-controls").hidden=w0!==2,H0("note-panel").hidden=w0===0,H0("shaker-options").hidden=w0!==0,H0("note-plane").hidden=w0===0,H0("mode-hint").hidden=w0===1,n6(),H0("chamber").hidden=w0!==0,H0("touch-pad").hidden=w0===0,H0("synth-bank").hidden=w0!==1,H0("touch-pad").setAttribute("aria-valuemax",w0===2?"880":"1760"),H0("screen-name").textContent=["LOOSE GRAIN CHAMBER","CONTINUOUS THEREMIN","LIVE VOCAL ANATOMY"][w0],H0("screen-detail").textContent=["XYZ","110—1760 HZ","CHIMERA"][w0],H0("mode-hint").textContent=w0===0?"Shake in any direction.":"Move to breathe · tilt for pitch.",H0("gesture-caption").textContent=w0===0?"SHAKE IN ANY DIRECTION · DRAG TO RATTLE":w0===1?"SIDE TILT: PITCH · FORWARD / BACK: VOWEL":"MOVE TO BREATHE · TILT FOR PITCH",H0("description").innerHTML=["A handful of grains.<br>A chamber in your hand.<br>Every movement has a texture.","A continuous voice.<br>No keys. No steps.<br>Just the shape of a gesture.","A living vocal tract.<br>Tongue, lips and breath.<br>Play the anatomy of a voice."][w0],H0("voice-credit").textContent=w0===2?"CHIMERA · JAMESON HODGE":"PLAYED BY MOVEMENT",H0("x-label").textContent=w0===0?"X / Y":"PITCH",H0("y-label").textContent=w0===0?"ENERGY":"VOWEL",H0("z-label").textContent=w0===0?"Z":w0===2?"EXCITATION":"BREATH Z",x6.hidden=w0===2,H0("head").hidden=w0!==2,w0===2&&KH)DH();if(w0===1)NH();T9(),Q9(!0)}function NH(){let J=d$[rJ];document.querySelectorAll("[data-synth]").forEach((Q)=>{let Z=Number(Q.dataset.synth)===rJ;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),H0("screen-name").textContent=J.name.toUpperCase()+" / CONTINUOUS SYNTH",H0("y-label").textContent=J.tag,H0("description").textContent=J.description,H0("gesture-caption").textContent="SIDE TILT: PITCH · FORWARD / BACK: "+J.tag,H0("touch-pad").querySelector("span:last-child").textContent=rJ===0?"LOW ↔ HIGH · OO ↕ EE":"X: PITCH · Y: COLOUR"}document.querySelectorAll("[data-synth]").forEach((J)=>J.addEventListener("click",()=>{rJ=Number(J.dataset.synth),NH(),Q9(!0)}));function DH(){if(s9)return;try{let J=H0("head");s9=new E$({alpha:!0,antialias:!0,powerPreference:"low-power"}),s9.setPixelRatio(Math.min(devicePixelRatio,1.5)),s9.setClearColor(0,0),J.appendChild(s9.domElement),s8=new h$,s8.centred=!0;let Q=aQ("model",{body:{female:0,child:0},sampleRate:Y9?.sampleRate??48000}),Z=Q.body.scale,K=Q.body.pharynx;tJ={bodyParams:Q.body,tract:{scale:Z,P:(W,X)=>({x:(W>0.5?0.5+(W-0.5)*0.86:W)*Z,y:(X<7?7-(7-X)*K:X)*Z}),unP:(W,X)=>({x:W/Z>0.5?0.5+(W/Z-0.5)/0.86:W/Z,y:X/Z<7?7-(7-X/Z)/K:X/Z})},frame:(W)=>aQ("frame",{model:Q.model,artic:W})},HZ();let $=s8.poses(tJ);s8.camera.position.copy($.home),s8.camera.lookAt($.target),zJ=new M$(s8.camera,s9.domElement),zJ.target.copy($.target),zJ.enablePan=zJ.enableZoom=!1,zJ.update()}catch(J){H9("The 3D view is unavailable in this browser. The voice can still play."),console.error(J)}}function HZ(){let J=x6.getBoundingClientRect(),Q=H0("glass");k9=Q.clientWidth,_9=Q.clientHeight-83;let Z=Math.min(devicePixelRatio,2);if(x6.width=Math.round(k9*Z),x6.height=Math.round(_9*Z),a0.setTransform(Z,0,0,Z,0,0),s9&&s8){if(s9.setSize(k9,_9),s8.resize(k9,_9),tJ&&zJ){let K=s8.poses(tJ);s8.camera.position.copy(K.home),zJ.target.copy(K.target),zJ.update()}}}addEventListener("resize",HZ);new ResizeObserver(HZ).observe(H0("glass"));HZ();addEventListener("devicemotion",(J)=>{if(!w9)return;let{acceleration:Q,accelerationIncludingGravity:Z}=J;if(!Z||Z.x==null||Z.y==null||Z.z==null)return;let K=performance.now();L9=K;let $=Math.min(0.05,Math.max(0.005,(K-JH)/1000));JH=K;let W=[Z.x,Z.y,Z.z];for(let Y=0;Y<3;Y++)tQ[Y]+=(W[Y]-tQ[Y])*(1-Math.exp(-$/0.22));if(Q?.x!=null&&Q?.y!=null&&Q?.z!=null)o9=[Q.x,Q.y,Q.z].map((Y)=>Y/9.80665),z7=[Z.x-Q.x,Z.y-Q.y,Z.z-Q.z].map((Y)=>Y/9.80665);else o9=W.map((Y,H)=>(Y-tQ[H])/9.80665),z7=tQ.map((Y)=>Y/9.80665);if(ZZ=[J.rotationRate?.alpha??0,J.rotationRate?.beta??0,J.rotationRate?.gamma??0].map((Y)=>Y*Math.PI/180),$Z)KZ.center(z7),XH=QW,$Z=!1;m6=KZ.project(z7),Q6.update(o9,ZZ,K);let X=Math.max(0,Math.hypot(...o9)-0.035)*1.8+Math.max(0,Math.hypot(...ZZ)-0.15)*0.08;UJ=Math.max(UJ,I8(X*(0.5+kJ),0,1)),Q9(!1)},{passive:!0});addEventListener("deviceorientation",(J)=>{if(J.gamma!=null)QW=J.gamma},{passive:!0});function qH(J=performance.now()){let Q=J<l6||!w9||J-L9>1500,Z=Q?PJ:I8(0.5+Math.asin(I8(m6[0],-1,1))/Math.PI*(0.5+kJ),0,1),K=Q?d6:I8(0.5-m6[1]*(0.7+kJ),0,1);return g6+=(Z-g6)*0.35,P7+=(K-P7)*0.35,{frequency:m8.frequency(110*Math.pow(2,g6*(w0===2?3:4)),a9&&w0!==0,X9,w0===2?880:1760),vowel:P7,breath:I8(0.55-o9[2]*0.65,0.05,1),excitation:w0===2?w9&&L9>0&&J-L9<1500?Q6.value(J,kJ):Math.max(J<c6?0.65:0,WZ*Math.exp(-Math.max(0,J-XZ)/85)):void 0}}function Q9(J){if(!S8)return;let Q=performance.now();if(!J&&Q-t$<9)return;t$=Q;let Z=qH(Q);HH=Z,S8.port.postMessage({type:"state",mode:w0,voice:rJ,enabled:_8,...Z,acceleration:o9.map((K)=>K*(0.45+kJ*1.55)),tilt:m6,pulse:Q<c6})}function ZH(J){m8.held=null,eJ();let Q=J.currentTarget,Z=Q.getBoundingClientRect(),K=I8((J.clientX-Z.left)/Z.width,0,1),$=I8((J.clientY-Z.top)/Z.height,0,1),W=performance.now();if(PJ=K,d6=1-$,l6=W+2000,WH=W,w0===2&&(!w9||!L9||W-L9>1500)){let Y=M9?Math.max(8,W-M9.t)/1000:0;WZ=M9?I8(Math.hypot(K-M9.x,$-M9.y)/Y*0.4,0,1):0.45,XZ=W}if(M9&&w0===0){let Y=Math.max(8,W-M9.t),H=(K-M9.x)/Y*1000,U=($-M9.y)/Y*1000;UJ=Math.max(UJ,I8(Math.hypot(H,U)*0.13,0,1)),o9=[I8(H*0.3,-2,2),I8(-U*0.3,-2,2),0]}M9={x:K,y:$,t:W};let X=H0("touch-pad").querySelector("i");X.style.left=`${K*100}%`,X.style.top=`${$*100}%`,H0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,K*(w0===2?3:4))))),Q9(!0)}for(let J of[x6,H0("touch-pad")]){J.addEventListener("pointerdown",(Z)=>{if(!S8)return;i$=!0,M9=null,J.setPointerCapture(Z.pointerId),ZH(Z)}),J.addEventListener("pointermove",(Z)=>{if(i$)ZH(Z)});let Q=()=>{i$=!1,M9=null};J.addEventListener("pointerup",Q),J.addEventListener("pointercancel",Q)}H0("touch-pad").addEventListener("keydown",(J)=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(J.key))J.preventDefault(),m8.held=null,eJ(),PJ=I8(PJ+(J.key==="ArrowRight"?0.025:J.key==="ArrowLeft"?-0.025:0),0,1),d6=I8(d6+(J.key==="ArrowUp"?0.05:J.key==="ArrowDown"?-0.05:0),0,1),l6=performance.now()+3000,H0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,PJ*(w0===2?3:4))))),Q9(!0)});function EH(){let J=Number(H0("size").value)/1000;Z8.shape=H0("shape").value,Z8.w=J,Z8.h=Z8.shape==="circle"?J:Z8.shape==="oval"?J*0.62:J*1.12,Z8.radius=Number(H0("grain-size").value)/2000,Z8.reset(Number(H0("fill").value)),S8?.port.postMessage({type:"geometry",shape:Z8.shape,width:Z8.w,height:Z8.h,depth:Z8.d,radius:Z8.radius,count:Z8.count,material:Number(H0("material").value)})}for(let J of["shape","fill","size","grain-size","material"])H0(J).addEventListener("input",EH);function GE(J,Q){if(a0.clearRect(0,0,k9,_9),a0.save(),a0.translate(k9/2,_9/2),w0===0){let Z=Math.min((k9-70)/Z8.w,(_9-48)/Z8.h),K=Z8.w*Z/2,$=Z8.h*Z/2;if(a0.lineWidth=1,a0.strokeStyle="#8b9b6e77",a0.beginPath(),Z8.shape==="box")a0.roundRect(-K,-$,K*2,$*2,12);else a0.ellipse(0,0,K,$,0,0,Math.PI*2);a0.stroke();for(let X of Z8.pulses){let Y=J/1000-X.t;if(Y<0||Y>0.35)continue;a0.strokeStyle=`rgba(233,180,94,${(1-Y/0.35)*0.5})`,a0.lineWidth=1,a0.beginPath(),a0.arc(X.x*Z,-X.y*Z,3+Y*90,0,Math.PI*2),a0.stroke()}let W=Z8.grains.slice(0,Z8.count).sort((X,Y)=>X.z-Y.z);for(let X of W){let Y=1+X.z*4;a0.fillStyle=`rgba(216,202,150,${0.4+(X.z/Z8.d+0.5)*0.5})`,a0.beginPath(),a0.arc(X.x*Z,-X.y*Z,Math.max(1.5,Z8.radius*Z)*Y,0,Math.PI*2),a0.fill()}}else{a0.strokeStyle="#70876233",a0.lineWidth=1;for(let H=-2;H<=2;H++)a0.beginPath(),a0.moveTo(-k9*0.4,H*_9*0.14),a0.lineTo(k9*0.4,H*_9*0.14),a0.stroke();let Z=qH(J),K=_8?1:0.2;a0.strokeStyle=`rgba(209,195,145,${K})`,a0.lineWidth=1.4,a0.beginPath();let $=0,W=0.1;for(let H=0;H<512;H++)W=Math.max(W,Math.abs(A7[H]));for(let H=1;H<128;H++)if(A7[JZ+H-1&511]<=0&&A7[JZ+H&511]>0){$=H;break}for(let H=0;H<384;H++){let U=(H/383-0.5)*k9*0.84,D=-A7[JZ+$+H&511]/Math.max(0.2,W)*_9*0.25;if(H===0)a0.moveTo(U,D);else a0.lineTo(U,D)}a0.stroke();let X=(g6-0.5)*k9*0.7,Y=(0.5-P7)*_9*0.65;a0.fillStyle="#ead9aa",a0.beginPath(),a0.arc(X,Y,4,0,Math.PI*2),a0.fill()}a0.restore()}function FH(J){requestAnimationFrame(FH);let Q=Math.min(0.05,(J-eY)/1000);if(eY=J,UJ*=Math.exp(-Q/0.06),UJ<0.004)UJ=0;if(!L9||J-L9>500)o9=o9.map((K)=>K*Math.exp(-Q/0.05)),ZZ=[0,0,0];let Z=Math.max(UJ,J<c6?0.65:0);if(S8&&J-tY>40)tY=J,S8.port.postMessage({type:"snapshot"});if(w0===0||w0===1)GE(J,Q);else if(s8&&s9&&tJ&&J-s$>40){let K=Math.min(0.08,(J-s$)/1000);s$=J,s8.face.update(null,K),s8.update(tJ,tJ.frame(r$),r$,null,{pressure:!1,particles:!1,calipers:!1,grid:!1},K),s9.render(s8.scene,s8.camera)}if(J-t$>30)Q9(!1);if(Math.floor(J/100)!==Math.floor((J-Q*1000)/100)){T9();let K=HH,$=_8?YH:K.frequency,W=C7($),X=Math.max(2,Math.min(w0===2?5:6,Math.floor(W.midi/12)-1));if(w0!==0&&_8&&m8.held===null&&!J6&&!J9&&X!==i9)i9=X,n6();if(H0("note-value").textContent=w0===0?"":`${W.label} ${W.cents>0?"+":""}${W.cents}¢`,document.querySelectorAll("[data-note]").forEach((Y)=>{let H=Number(Y.dataset.note)===C7(a9?K.frequency:$).midi;Y.classList.toggle("sounding",_8&&H&&(w0!==2||(K.excitation??0)>0.005)),Y.setAttribute("aria-current",_8&&H?"true":"false")}),H0("xy-value").textContent=w0===0?`${Math.round(m6[0]*99).toString().padStart(2,"0")} / ${Math.round(m6[1]*99).toString().padStart(2,"0")}`:`${Math.round($)} HZ`,H0("energy-value").textContent=w0===0?String(Math.round(Z*127)).padStart(3,"0"):w0===1&&rJ!==0?String(Math.round(K.vowel*127)).padStart(3,"0"):["OO","OO–AH","AH","AH–EE","EE"][Math.min(4,Math.floor(K.vowel*5))],H0("z-value").textContent=String(Math.round((w0===0?Math.abs(o9[2]):w0===2?K.excitation??0:K.breath)*100)).padStart(3,"0"),w0===2){let Y=K.excitation??0;H0("excitation-meter").value=Y,H0("excitation-output").textContent=`${Math.round(Y*100)}%`}}}requestAnimationFrame(FH);document.addEventListener("visibilitychange",()=>{if(document.hidden&&S8)Q6.reset(),WZ=0,XZ=-1/0,_8=!1,Q9(!0),T9(),Y9?.suspend(),H9("Sound paused while you were away. Tap ▶ to resume.")});H0("share").addEventListener("click",async()=>{try{let J=location.origin+location.pathname;if(navigator.share)await navigator.share({title:"Kaizen Motion",text:"Your phone is an instrument. Shake, tilt, play.",url:J});else await navigator.clipboard.writeText(J),H9("Link copied. Share it anywhere.")}catch(J){if(J.name!=="AbortError")H9("Copy this page’s address to share Motion.")}});var ZW=document.createElement("button");ZW.textContent="Enable motion";ZW.addEventListener("click",async()=>{w9=await UH().catch(()=>!1),Q6.reset(),$Z=!0,H9(w9?"Motion enabled. Hold comfortably and tap CENTRE.":"Motion permission is unavailable here. Open in Safari/Chrome or keep playing with touch."),T9()});document.querySelector("footer nav")?.appendChild(ZW);function eJ(){H0("follow-motion").disabled=m8.held===null&&!J6,H0("note-help").textContent=J9?"Tap pitches to allow or block. Applies in every octave.":m8.held!==null?`Holding ${C7(R9(m8.held)).label} · move to breathe.`:a9?"Pitch follows the enabled scale notes.":"Continuous pitch · tap a note to hold.",document.querySelectorAll("[data-note]").forEach((J)=>J.setAttribute("aria-pressed",String(J9?X9.has(aJ(Number(J.dataset.note))):Number(J.dataset.note)===m8.held)))}function n6(){let J=w0===2?880:1760;i9=Math.max(2,Math.min(w0===2?5:6,i9));let Q=H0("note-grid");Q.replaceChildren(),Q.hidden=!p6,H0("show-notes").setAttribute("aria-pressed",String(p6)),H0("edit-notes").setAttribute("aria-pressed",String(J9)),H0("edit-notes").textContent=J9?"Done":"Edit",H0("edit-notes").setAttribute("aria-label",J9?"Finish editing notes":"Edit enabled notes");for(let Z of Array.from({length:12},(K,$)=>(i9+1)*12+$)){let K=document.createElement("button"),$=C7(R9(Z)).label,W=R9(Z)>=109.999999&&R9(Z)<=J+0.000001,X=!a9||X9.has(aJ(Z));K.type="button",K.dataset.note=String(Z),K.textContent=$,K.classList.toggle("excluded",!X),K.classList.toggle("outside-range",!W),K.disabled=!J9&&(!W||!X),K.setAttribute("aria-label",J9?`${X9.has(aJ(Z))?"Exclude":"Include"} ${$.replace(/-?\d+$/,"")} in every octave`:`${X?"Play":"Excluded"} ${$}, ${R9(Z).toFixed(1)} hertz`),K.addEventListener("click",async()=>{if(J9){if(!a9)X9=h6(0,"chromatic"),a9=!0,H0("scale-enabled").checked=!0;let Y=aJ(Z);if(X9.has(Y)){if(X9.size===1){H9("Keep at least one pitch enabled.");return}X9.delete(Y)}else X9.add(Y);u6="custom",H0("scale-preset").value="custom",_7();return}if(!W||!X)return;if(!S8){if(await YZ(w9),!S8)return}else await Y9?.resume();if(m8.hold(Z),!w9||!L9||performance.now()-L9>1500)c6=performance.now()+220;_8=!0,g6=PJ=Math.log2(R9(Z)/110)/(w0===2?3:4),eJ(),T9(),Q9(!0)}),Q.appendChild(K)}H0("note-octave").textContent=String(i9),H0("octave-down").disabled=i9===2,H0("octave-up").disabled=i9===(w0===2?5:6),eJ()}function _7(){m8.followMotion(),l6=0,J6=!1,n6(),Q9(!0)}H0("scale-enabled").addEventListener("change",()=>{if(a9=H0("scale-enabled").checked,!a9)J9=!1;_7()});H0("scale-root").addEventListener("change",()=>{let J=Number(H0("scale-root").value);X9=u6==="custom"?new Set([...X9].map((Q)=>(Q+J-e$+12)%12)):h6(J,u6),e$=J,_7()});H0("scale-preset").addEventListener("change",()=>{u6=H0("scale-preset").value,X9=h6(e$,u6),_7()});H0("show-notes").addEventListener("click",()=>{if(p6=!p6,!p6)J9=!1;n6()});H0("edit-notes").addEventListener("click",()=>{if(J9=!J9,J9){if(p6=!0,!a9)a9=!0,X9=h6(0,"chromatic"),u6="custom",H0("scale-enabled").checked=!0,H0("scale-preset").value="custom"}_7()});H0("more-open").addEventListener("click",()=>H0("more-dialog").showModal());H0("more-close").addEventListener("click",()=>H0("more-dialog").close());H0("octave-down").addEventListener("click",()=>{J6=!0,i9--,n6()});H0("octave-up").addEventListener("click",()=>{J6=!0,i9++,n6()});H0("follow-motion").addEventListener("click",()=>{m8.followMotion(),l6=0,J6=!1,eJ(),Q9(!0)});oY();rY();GH(2);nY(()=>({instrument:["Shaker","Synth","CHIMERA"][w0],voice:w0===1?d$[rJ].name:w0===2?"CHIMERA":"Shaker",sensitivity:Math.round(kJ*100),shape:Z8.shape,grainCount:Z8.count}),()=>{H0("more-dialog").close(),_8=!1,Q9(!0),T9()});
