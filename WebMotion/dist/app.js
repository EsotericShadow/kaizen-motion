var zW="186",OJ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},RJ={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},PW=0,AZ=1,kW=2;var n6=1,_W=2,R6=3,M6=0,o9=1,j8=2,v8=0,s6=1,zZ=2,PZ=3,kZ=4,p7=5;var L6=100,TW=101,wW=102,SW=103,m7=104,jW=200,vW=201,bW=202,yW=203,fW=204,hW=205,xW=206,gW=207,pW=208,mW=209,dW=210,uW=211,lW=212,cW=213,nW=214,sW=0,iW=1,oW=2,_Z=3,aW=4,rW=5,tW=6,eW=7,JX=0,QX=1,ZX=2,V8=0,TZ=1,wZ=2,SZ=3,jZ=4,vZ=5,bZ=6,yZ=7;var I6=301,SJ=302,d7=303,u7=304,i6=306,KX=1000,l7=1001,$X=1002,MJ=1003,WX=1004;var o6=1005;var a9=1006,c7=1007;var jJ=1008;var C8=1009,XX=1010,YX=1011,a6=1012,fZ=1013,LJ=1014,QJ=1015,b8=1016,hZ=1017,xZ=1018,V6=1020,HX=35902,UX=35899,NX=1021,GX=1022,y8=1023,vJ=1026,bJ=1027,qX=1028,gZ=1029,yJ=1030,pZ=1031;var mZ=1033,n7=33776,s7=33777,i7=33778,o7=33779,dZ=35840,uZ=35841,lZ=35842,cZ=35843,nZ=36196,sZ=37492,iZ=37496,oZ=37488,aZ=37489,a7=37490,rZ=37491,tZ=37808,eZ=37809,JK=37810,QK=37811,ZK=37812,KK=37813,$K=37814,WK=37815,XK=37816,YK=37817,HK=37818,UK=37819,NK=37820,GK=37821,qK=36492,DK=36494,FK=36495,EK=36283,OK=36284,r7=36285,RK=36286;var MK=0,DX=1,fJ="",FX="srgb",LK="srgb-linear",IK="linear",q9="srgb";var EX=512,OX=513,RX=514,t7=515,MX=516,LX=517,e7=518,IX=519;var JQ=35048;var VK="300 es",CK=2000;function UH(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function NH(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function l6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function VX(){let J=l6("canvas");return J.style.display="block",J}var KW={},E6=null;function c6(...J){let Q="THREE."+J.shift();if(E6)E6("log",Q,...J);else console.log(Q,...J)}function CX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let Z=J[1];if(Z&&Z.isStackTrace)J[0]+=" "+Z.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function b0(...J){J=CX(J);let Q="THREE."+J.shift();if(E6)E6("warn",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.warn(Z.getError(Q));else console.warn(Q,...J)}}function f0(...J){J=CX(J);let Q="THREE."+J.shift();if(E6)E6("error",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.error(Z.getError(Q));else console.error(Q,...J)}}function wJ(...J){let Q=J.join(" ");if(Q in KW)return;KW[Q]=!0,b0(...J)}function BX(J,Q,Z){return new Promise(function(K,$){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:$();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Z);break;default:K()}}setTimeout(W,Z)})}var AX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class f8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let K=Z[J];if(K!==void 0){let $=K.indexOf(Q);if($!==-1)K.splice($,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let K=Z.slice(0);for(let $=0,W=K.length;$<W;$++)K[$].call(this,J);J.target=null}}}var f9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$W=1234567,d6=Math.PI/180,O6=180/Math.PI;function e8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(f9[J&255]+f9[J>>8&255]+f9[J>>16&255]+f9[J>>24&255]+"-"+f9[Q&255]+f9[Q>>8&255]+"-"+f9[Q>>16&15|64]+f9[Q>>24&255]+"-"+f9[Z&63|128]+f9[Z>>8&255]+"-"+f9[Z>>16&255]+f9[Z>>24&255]+f9[K&255]+f9[K>>8&255]+f9[K>>16&255]+f9[K>>24&255]).toLowerCase()}function p0(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function BK(J,Q){return(J%Q+Q)%Q}function GH(J,Q,Z,K,$){return K+(J-Q)*($-K)/(Z-Q)}function qH(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function u6(J,Q,Z){return(1-Z)*J+Z*Q}function DH(J,Q,Z,K){return u6(J,Q,1-Math.exp(-Z*K))}function FH(J,Q=1){return Q-Math.abs(BK(J,Q*2)-Q)}function EH(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function OH(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function RH(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function MH(J,Q){return J+Math.random()*(Q-J)}function LH(J){return J*(0.5-Math.random())}function IH(J){if(J!==void 0)$W=J;let Q=$W+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function VH(J){return J*d6}function CH(J){return J*O6}function BH(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function AH(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function zH(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function PH(J,Q,Z,K,$){let{cos:W,sin:X}=Math,Y=W(Z/2),H=X(Z/2),N=W((Q+K)/2),q=X((Q+K)/2),U=W((Q-K)/2),G=X((Q-K)/2),F=W((K-Q)/2),O=X((K-Q)/2);switch($){case"XYX":J.set(Y*q,H*U,H*G,Y*N);break;case"YZY":J.set(H*G,Y*q,H*U,Y*N);break;case"ZXZ":J.set(H*U,H*G,Y*q,Y*N);break;case"XZX":J.set(Y*q,H*O,H*F,Y*N);break;case"YXY":J.set(H*F,Y*q,H*O,Y*N);break;case"ZYZ":J.set(H*O,H*F,Y*q,Y*N);break;default:b0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+$)}}function I8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function W9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var r6={DEG2RAD:d6,RAD2DEG:O6,generateUUID:e8,clamp:p0,euclideanModulo:BK,mapLinear:GH,inverseLerp:qH,lerp:u6,damp:DH,pingpong:FH,smoothstep:EH,smootherstep:OH,randInt:RH,randFloat:MH,randFloatSpread:LH,seededRandom:IH,degToRad:VH,radToDeg:CH,isPowerOfTwo:BH,ceilPowerOfTwo:AH,floorPowerOfTwo:zH,setQuaternionFromProperEuler:PH,normalize:W9,denormalize:I8};class x0{static{x0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*Z+K[6],this.y=K[1]*Q+K[4]*Z+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(p0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=this.x-J.x,W=this.y-J.y;return this.x=$*Z-W*K+J.x,this.y=$*K+W*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class r9{constructor(J=0,Q=0,Z=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=K}static slerpFlat(J,Q,Z,K,$,W,X){let Y=Z[K+0],H=Z[K+1],N=Z[K+2],q=Z[K+3],U=$[W+0],G=$[W+1],F=$[W+2],O=$[W+3];if(q!==O||Y!==U||H!==G||N!==F){let L=Y*U+H*G+N*F+q*O;if(L<0)U=-U,G=-G,F=-F,O=-O,L=-L;let E=1-X;if(L<0.9995){let D=Math.acos(L),R=Math.sin(D);E=Math.sin(E*D)/R,X=Math.sin(X*D)/R,Y=Y*E+U*X,H=H*E+G*X,N=N*E+F*X,q=q*E+O*X}else{Y=Y*E+U*X,H=H*E+G*X,N=N*E+F*X,q=q*E+O*X;let D=1/Math.sqrt(Y*Y+H*H+N*N+q*q);Y*=D,H*=D,N*=D,q*=D}}J[Q]=Y,J[Q+1]=H,J[Q+2]=N,J[Q+3]=q}static multiplyQuaternionsFlat(J,Q,Z,K,$,W){let X=Z[K],Y=Z[K+1],H=Z[K+2],N=Z[K+3],q=$[W],U=$[W+1],G=$[W+2],F=$[W+3];return J[Q]=X*F+N*q+Y*G-H*U,J[Q+1]=Y*F+N*U+H*q-X*G,J[Q+2]=H*F+N*G+X*U-Y*q,J[Q+3]=N*F-X*q-Y*U-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,K){return this._x=J,this._y=Q,this._z=Z,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:K,_z:$,_order:W}=J,X=Math.cos,Y=Math.sin,H=X(Z/2),N=X(K/2),q=X($/2),U=Y(Z/2),G=Y(K/2),F=Y($/2);switch(W){case"XYZ":this._x=U*N*q+H*G*F,this._y=H*G*q-U*N*F,this._z=H*N*F+U*G*q,this._w=H*N*q-U*G*F;break;case"YXZ":this._x=U*N*q+H*G*F,this._y=H*G*q-U*N*F,this._z=H*N*F-U*G*q,this._w=H*N*q+U*G*F;break;case"ZXY":this._x=U*N*q-H*G*F,this._y=H*G*q+U*N*F,this._z=H*N*F+U*G*q,this._w=H*N*q-U*G*F;break;case"ZYX":this._x=U*N*q-H*G*F,this._y=H*G*q+U*N*F,this._z=H*N*F-U*G*q,this._w=H*N*q+U*G*F;break;case"YZX":this._x=U*N*q+H*G*F,this._y=H*G*q+U*N*F,this._z=H*N*F-U*G*q,this._w=H*N*q-U*G*F;break;case"XZY":this._x=U*N*q-H*G*F,this._y=H*G*q-U*N*F,this._z=H*N*F+U*G*q,this._w=H*N*q+U*G*F;break;default:b0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,K=Math.sin(Z);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],K=Q[4],$=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],N=Q[6],q=Q[10],U=Z+X+q;if(U>0){let G=0.5/Math.sqrt(U+1);this._w=0.25/G,this._x=(N-Y)*G,this._y=($-H)*G,this._z=(W-K)*G}else if(Z>X&&Z>q){let G=2*Math.sqrt(1+Z-X-q);this._w=(N-Y)/G,this._x=0.25*G,this._y=(K+W)/G,this._z=($+H)/G}else if(X>q){let G=2*Math.sqrt(1+X-Z-q);this._w=($-H)/G,this._x=(K+W)/G,this._y=0.25*G,this._z=(Y+N)/G}else{let G=2*Math.sqrt(1+q-Z-X);this._w=(W-K)/G,this._x=($+H)/G,this._y=(Y+N)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(p0(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let K=Math.min(1,Q/Z);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,N=Q._w;return this._x=Z*N+W*X+K*H-$*Y,this._y=K*N+W*Y+$*X-Z*H,this._z=$*N+W*H+Z*Y-K*X,this._w=W*N-Z*X-K*Y-$*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=this.dot(J);if(X<0)Z=-Z,K=-K,$=-$,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),N=Math.sin(H);Y=Math.sin(Y*H)/N,Q=Math.sin(Q*H)/N,this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),K=Math.sqrt(1-Z),$=Math.sqrt(Z);return this.set(K*Math.sin(J),K*Math.cos(J),$*Math.sin(Q),$*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{x.prototype.isVector3=!0}constructor(J=0,Q=0,Z=0){this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(WW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(WW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6]*K,this.y=$[1]*Q+$[4]*Z+$[7]*K,this.z=$[2]*Q+$[5]*Z+$[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements,W=1/($[3]*Q+$[7]*Z+$[11]*K+$[15]);return this.x=($[0]*Q+$[4]*Z+$[8]*K+$[12])*W,this.y=($[1]*Q+$[5]*Z+$[9]*K+$[13])*W,this.z=($[2]*Q+$[6]*Z+$[10]*K+$[14])*W,this}applyQuaternion(J){let Q=this.x,Z=this.y,K=this.z,$=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*K-X*Z),N=2*(X*Q-$*K),q=2*($*Z-W*Q);return this.x=Q+Y*H+W*q-X*N,this.y=Z+Y*N+X*H-$*q,this.z=K+Y*q+$*N-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[4]*Z+$[8]*K,this.y=$[1]*Q+$[5]*Z+$[9]*K,this.z=$[2]*Q+$[6]*Z+$[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:K,z:$}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-$*X,this.y=$*W-Z*Y,this.z=Z*X-K*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return KZ.copy(this).projectOnVector(J),this.sub(KZ)}reflect(J){return this.sub(KZ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(p0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,K=this.z-J.z;return Q*Q+Z*Z+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let K=Math.sin(Q)*J;return this.x=K*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=K*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var KZ=new x,WW=new r9;class g0{static{g0.prototype.isMatrix3=!0}constructor(J,Q,Z,K,$,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H)}set(J,Q,Z,K,$,W,X,Y,H){let N=this.elements;return N[0]=J,N[1]=K,N[2]=X,N[3]=Q,N[4]=$,N[5]=Y,N[6]=Z,N[7]=W,N[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[3],Y=Z[6],H=Z[1],N=Z[4],q=Z[7],U=Z[2],G=Z[5],F=Z[8],O=K[0],L=K[3],E=K[6],D=K[1],R=K[4],k=K[7],V=K[2],A=K[5],P=K[8];return $[0]=W*O+X*D+Y*V,$[3]=W*L+X*R+Y*A,$[6]=W*E+X*k+Y*P,$[1]=H*O+N*D+q*V,$[4]=H*L+N*R+q*A,$[7]=H*E+N*k+q*P,$[2]=U*O+G*D+F*V,$[5]=U*L+G*R+F*A,$[8]=U*E+G*k+F*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8];return Q*W*N-Q*X*H-Z*$*N+Z*X*Y+K*$*H-K*W*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=N*W-X*H,U=X*Y-N*$,G=H*$-W*Y,F=Q*q+Z*U+K*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/F;return J[0]=q*O,J[1]=(K*H-N*Z)*O,J[2]=(X*Z-K*W)*O,J[3]=U*O,J[4]=(N*Q-K*Y)*O,J[5]=(K*$-X*Q)*O,J[6]=G*O,J[7]=(Z*Y-H*Q)*O,J[8]=(W*Q-Z*$)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,K,$,W,X){let Y=Math.cos($),H=Math.sin($);return this.set(Z*Y,Z*H,-Z*(Y*W+H*X)+W+J,-K*H,K*Y,-K*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return wJ("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($Z.makeScale(J,Q)),this}rotate(J){return wJ("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($Z.makeRotation(-J)),this}translate(J,Q){return wJ("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($Z.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<9;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var $Z=new g0,XW=new g0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),YW=new g0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function kH(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function($,W,X){if(this.enabled===!1||W===X||!W||!X)return $;if(this.spaces[W].transfer==="srgb")$.r=JJ($.r),$.g=JJ($.g),$.b=JJ($.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)$.applyMatrix3(this.spaces[W].toXYZ),$.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")$.r=F6($.r),$.g=F6($.g),$.b=F6($.b);return $},workingToColorSpace:function($,W){return this.convert($,this.workingColorSpace,W)},colorSpaceToWorking:function($,W){return this.convert($,W,this.workingColorSpace)},getPrimaries:function($){return this.spaces[$].primaries},getTransfer:function($){if($==="")return"linear";return this.spaces[$].transfer},getToneMappingMode:function($){return this.spaces[$].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function($,W=this.workingColorSpace){return $.fromArray(this.spaces[W].luminanceCoefficients)},define:function($){Object.assign(this.spaces,$)},_getMatrix:function($,W,X){return $.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function($){return this.spaces[$].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function($=this.workingColorSpace){return this.spaces[$].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function($,W){return wJ("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace($,W)},toWorkingColorSpace:function($,W){return wJ("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking($,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:XW,fromXYZ:YW,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:XW,fromXYZ:YW,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var o0=kH();function JJ(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function F6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var eJ;class AK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(eJ===void 0)eJ=l6("canvas");eJ.width=J.width,eJ.height=J.height;let K=eJ.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);Z=eJ}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=l6("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let K=Z.getImageData(0,0,J.width,J.height),$=K.data;for(let W=0;W<$.length;W++)$[W]=JJ($[W]/255)*255;return Z.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(JJ(Q[Z]/255)*255);else Q[Z]=JJ(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return b0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var _H=0;class t6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_H++}),this.uuid=e8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement!=="undefined"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame!=="undefined"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},K=this.data;if(K!==null){let $;if(Array.isArray(K)){$=[];for(let W=0,X=K.length;W<X;W++)if(K[W].isDataTexture)$.push(WZ(K[W].image));else $.push(WZ(K[W]))}else $=WZ(K);Z.url=$}if(!Q)J.images[this.uuid]=Z;return Z}}function WZ(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return AK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return b0("Texture: Unable to serialize Texture."),{}}var TH=0,XZ=new x;class x9 extends f8{constructor(J=x9.DEFAULT_IMAGE,Q=x9.DEFAULT_MAPPING,Z=1001,K=1001,$=1006,W=1008,X=1023,Y=1009,H=x9.DEFAULT_ANISOTROPY,N=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:TH++}),this.uuid=e8(),this.name="",this.source=new t6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=K,this.magFilter=$,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new x0(0,0),this.repeat=new x0(1,1),this.center=new x0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new g0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=N,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(XZ).x}get height(){return this.source.getSize(XZ).y}get depth(){return this.source.getSize(XZ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){b0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){b0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&Z&&(K.isVector2&&Z.isVector2))K.copy(Z);else if(K&&Z&&(K.isVector3&&Z.isVector3))K.copy(Z);else if(K&&Z&&(K.isMatrix3&&Z.isMatrix3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}x9.DEFAULT_IMAGE=null;x9.DEFAULT_MAPPING=300;x9.DEFAULT_ANISOTROPY=1;class Y9{static{Y9.prototype.isVector4=!0}constructor(J=0,Q=0,Z=0,K=1){this.x=J,this.y=Q,this.z=Z,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,K){return this.x=J,this.y=Q,this.z=Z,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*K+W[12]*$,this.y=W[1]*Q+W[5]*Z+W[9]*K+W[13]*$,this.z=W[2]*Q+W[6]*Z+W[10]*K+W[14]*$,this.w=W[3]*Q+W[7]*Z+W[11]*K+W[15]*$,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,K,$,W=0.01,X=0.1,Y=J.elements,H=Y[0],N=Y[4],q=Y[8],U=Y[1],G=Y[5],F=Y[9],O=Y[2],L=Y[6],E=Y[10];if(Math.abs(N-U)<0.01&&Math.abs(q-O)<0.01&&Math.abs(F-L)<0.01){if(Math.abs(N+U)<0.1&&Math.abs(q+O)<0.1&&Math.abs(F+L)<0.1&&Math.abs(H+G+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let R=(H+1)/2,k=(G+1)/2,V=(E+1)/2,A=(N+U)/4,P=(q+O)/4,_=(F+L)/4;if(R>k&&R>V)if(R<0.01)Z=0,K=0.707106781,$=0.707106781;else Z=Math.sqrt(R),K=A/Z,$=P/Z;else if(k>V)if(k<0.01)Z=0.707106781,K=0,$=0.707106781;else K=Math.sqrt(k),Z=A/K,$=_/K;else if(V<0.01)Z=0.707106781,K=0.707106781,$=0;else $=Math.sqrt(V),Z=P/$,K=_/$;return this.set(Z,K,$,Q),this}let D=Math.sqrt((L-F)*(L-F)+(q-O)*(q-O)+(U-N)*(U-N));if(Math.abs(D)<0.001)D=1;return this.x=(L-F)/D,this.y=(q-O)/D,this.z=(U-N)/D,this.w=Math.acos((H+G+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this.w=p0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this.w=p0(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zK extends f8{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new Y9(0,0,J,Q),this.scissorTest=!1,this.viewport=new Y9(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:Z.depth},$=new x9(K),W=Z.count;for(let X=0;X<W;X++)this.textures[X]=$.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveColorBuffer=Z.resolveColorBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.storeMultisampledColorBuffer=Z.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Z.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Z.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview,this.useArrayDepthTexture=Z.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let K=0,$=this.textures.length;K<$;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=Z,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new t6(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z8 extends zK{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class QQ extends x9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class PK extends x9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class M9{static{M9.prototype.isMatrix4=!0}constructor(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,F,O,L){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,F,O,L)}set(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,F,O,L){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=Z,E[12]=K,E[1]=$,E[5]=W,E[9]=X,E[13]=Y,E[2]=H,E[6]=N,E[10]=q,E[14]=U,E[3]=G,E[7]=F,E[11]=O,E[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new M9().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),Z.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,Z=J.elements,K=1/J6.setFromMatrixColumn(J,0).length(),$=1/J6.setFromMatrixColumn(J,1).length(),W=1/J6.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*K,Q[1]=Z[1]*K,Q[2]=Z[2]*K,Q[3]=0,Q[4]=Z[4]*$,Q[5]=Z[5]*$,Q[6]=Z[6]*$,Q[7]=0,Q[8]=Z[8]*W,Q[9]=Z[9]*W,Q[10]=Z[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z,W=Math.cos(Z),X=Math.sin(Z),Y=Math.cos(K),H=Math.sin(K),N=Math.cos($),q=Math.sin($);if(J.order==="XYZ"){let U=W*N,G=W*q,F=X*N,O=X*q;Q[0]=Y*N,Q[4]=-Y*q,Q[8]=H,Q[1]=G+F*H,Q[5]=U-O*H,Q[9]=-X*Y,Q[2]=O-U*H,Q[6]=F+G*H,Q[10]=W*Y}else if(J.order==="YXZ"){let U=Y*N,G=Y*q,F=H*N,O=H*q;Q[0]=U+O*X,Q[4]=F*X-G,Q[8]=W*H,Q[1]=W*q,Q[5]=W*N,Q[9]=-X,Q[2]=G*X-F,Q[6]=O+U*X,Q[10]=W*Y}else if(J.order==="ZXY"){let U=Y*N,G=Y*q,F=H*N,O=H*q;Q[0]=U-O*X,Q[4]=-W*q,Q[8]=F+G*X,Q[1]=G+F*X,Q[5]=W*N,Q[9]=O-U*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let U=W*N,G=W*q,F=X*N,O=X*q;Q[0]=Y*N,Q[4]=F*H-G,Q[8]=U*H+O,Q[1]=Y*q,Q[5]=O*H+U,Q[9]=G*H-F,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let U=W*Y,G=W*H,F=X*Y,O=X*H;Q[0]=Y*N,Q[4]=O-U*q,Q[8]=F*q+G,Q[1]=q,Q[5]=W*N,Q[9]=-X*N,Q[2]=-H*N,Q[6]=G*q+F,Q[10]=U-O*q}else if(J.order==="XZY"){let U=W*Y,G=W*H,F=X*Y,O=X*H;Q[0]=Y*N,Q[4]=-q,Q[8]=H*N,Q[1]=U*q+O,Q[5]=W*N,Q[9]=G*q-F,Q[2]=F*q-G,Q[6]=X*N,Q[10]=O*q+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(wH,J,SH)}lookAt(J,Q,Z){let K=this.elements;if(J8.subVectors(J,Q),J8.lengthSq()===0)J8.z=1;if(J8.normalize(),NJ.crossVectors(Z,J8),NJ.lengthSq()===0){if(Math.abs(Z.z)===1)J8.x+=0.0001;else J8.z+=0.0001;J8.normalize(),NJ.crossVectors(Z,J8)}return NJ.normalize(),I7.crossVectors(J8,NJ),K[0]=NJ.x,K[4]=I7.x,K[8]=J8.x,K[1]=NJ.y,K[5]=I7.y,K[9]=J8.y,K[2]=NJ.z,K[6]=I7.z,K[10]=J8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[4],Y=Z[8],H=Z[12],N=Z[1],q=Z[5],U=Z[9],G=Z[13],F=Z[2],O=Z[6],L=Z[10],E=Z[14],D=Z[3],R=Z[7],k=Z[11],V=Z[15],A=K[0],P=K[4],_=K[8],I=K[12],B=K[1],p=K[5],j=K[9],b=K[13],m=K[2],T=K[6],w=K[10],n=K[14],u=K[3],$0=K[7],i=K[11],Z0=K[15];return $[0]=W*A+X*B+Y*m+H*u,$[4]=W*P+X*p+Y*T+H*$0,$[8]=W*_+X*j+Y*w+H*i,$[12]=W*I+X*b+Y*n+H*Z0,$[1]=N*A+q*B+U*m+G*u,$[5]=N*P+q*p+U*T+G*$0,$[9]=N*_+q*j+U*w+G*i,$[13]=N*I+q*b+U*n+G*Z0,$[2]=F*A+O*B+L*m+E*u,$[6]=F*P+O*p+L*T+E*$0,$[10]=F*_+O*j+L*w+E*i,$[14]=F*I+O*b+L*n+E*Z0,$[3]=D*A+R*B+k*m+V*u,$[7]=D*P+R*p+k*T+V*$0,$[11]=D*_+R*j+k*w+V*i,$[15]=D*I+R*b+k*n+V*Z0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],N=J[2],q=J[6],U=J[10],G=J[14],F=J[3],O=J[7],L=J[11],E=J[15],D=Y*G-H*U,R=X*G-H*q,k=X*U-Y*q,V=W*G-H*N,A=W*U-Y*N,P=W*q-X*N;return Q*(O*D-L*R+E*k)-Z*(F*D-L*V+E*A)+K*(F*R-O*V+E*P)-$*(F*k-O*A+L*P)}determinantAffine(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],N=J[10];return Q*(W*N-X*H)-Z*($*N-X*Y)+K*($*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=J[9],U=J[10],G=J[11],F=J[12],O=J[13],L=J[14],E=J[15],D=Q*X-Z*W,R=Q*Y-K*W,k=Q*H-$*W,V=Z*Y-K*X,A=Z*H-$*X,P=K*H-$*Y,_=N*O-q*F,I=N*L-U*F,B=N*E-G*F,p=q*L-U*O,j=q*E-G*O,b=U*E-G*L,m=D*b-R*j+k*p+V*B-A*I+P*_;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/m;return J[0]=(X*b-Y*j+H*p)*T,J[1]=(K*j-Z*b-$*p)*T,J[2]=(O*P-L*A+E*V)*T,J[3]=(U*A-q*P-G*V)*T,J[4]=(Y*B-W*b-H*I)*T,J[5]=(Q*b-K*B+$*I)*T,J[6]=(L*k-F*P-E*R)*T,J[7]=(N*P-U*k+G*R)*T,J[8]=(W*j-X*B+H*_)*T,J[9]=(Z*B-Q*j-$*_)*T,J[10]=(F*A-O*k+E*D)*T,J[11]=(q*k-N*A-G*D)*T,J[12]=(X*I-W*p-Y*_)*T,J[13]=(Q*p-Z*I+K*_)*T,J[14]=(O*R-F*V-L*D)*T,J[15]=(N*V-q*R+U*D)*T,this}scale(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z;return Q[0]*=Z,Q[4]*=K,Q[8]*=$,Q[1]*=Z,Q[5]*=K,Q[9]*=$,Q[2]*=Z,Q[6]*=K,Q[10]*=$,Q[3]*=Z,Q[7]*=K,Q[11]*=$,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,K))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=1-Z,W=J.x,X=J.y,Y=J.z,H=$*W,N=$*X;return this.set(H*W+Z,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,N*X+Z,N*Y-K*W,0,H*Y-K*X,N*Y+K*W,$*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,K,$,W){return this.set(1,Z,$,0,J,1,W,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,Z){let K=this.elements,$=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=$+$,N=W+W,q=X+X,U=$*H,G=$*N,F=$*q,O=W*N,L=W*q,E=X*q,D=Y*H,R=Y*N,k=Y*q,V=Z.x,A=Z.y,P=Z.z;return K[0]=(1-(O+E))*V,K[1]=(G+k)*V,K[2]=(F-R)*V,K[3]=0,K[4]=(G-k)*A,K[5]=(1-(U+E))*A,K[6]=(L+D)*A,K[7]=0,K[8]=(F+R)*P,K[9]=(L-D)*P,K[10]=(1-(U+O))*P,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,Z){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let $=this.determinantAffine();if($===0)return Z.set(1,1,1),Q.identity(),this;let W=J6.set(K[0],K[1],K[2]).length(),X=J6.set(K[4],K[5],K[6]).length(),Y=J6.set(K[8],K[9],K[10]).length();if($<0)W=-W;R8.copy(this);let H=1/W,N=1/X,q=1/Y;return R8.elements[0]*=H,R8.elements[1]*=H,R8.elements[2]*=H,R8.elements[4]*=N,R8.elements[5]*=N,R8.elements[6]*=N,R8.elements[8]*=q,R8.elements[9]*=q,R8.elements[10]*=q,Q.setFromRotationMatrix(R8),Z.x=W,Z.y=X,Z.z=Y,this}makePerspective(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,N=2*$/(Q-J),q=2*$/(Z-K),U=(Q+J)/(Q-J),G=(Z+K)/(Z-K),F,O;if(Y)F=$/(W-$),O=W*$/(W-$);else if(X===2000)F=-(W+$)/(W-$),O=-2*W*$/(W-$);else if(X===2001)F=-W/(W-$),O=-W*$/(W-$);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=U,H[12]=0,H[1]=0,H[5]=q,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,N=2/(Q-J),q=2/(Z-K),U=-(Q+J)/(Q-J),G=-(Z+K)/(Z-K),F,O;if(Y)F=1/(W-$),O=W/(W-$);else if(X===2000)F=-2/(W-$),O=-(W+$)/(W-$);else if(X===2001)F=-1/(W-$),O=-$/(W-$);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=0,H[12]=U,H[1]=0,H[5]=q,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=F,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<16;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var J6=new x,R8=new M9,wH=new x(0,0,0),SH=new x(1,1,1),NJ=new x,I7=new x,J8=new x,HW=new M9,UW=new r9;class S8{constructor(J=0,Q=0,Z=0,K=S8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,K=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let K=J.elements,$=K[0],W=K[4],X=K[8],Y=K[1],H=K[5],N=K[9],q=K[2],U=K[6],G=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(p0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-N,G),this._z=Math.atan2(-W,$);else this._x=Math.atan2(U,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-p0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(X,G),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-q,$),this._z=0;break;case"ZXY":if(this._x=Math.asin(p0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-q,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,$);break;case"ZYX":if(this._y=Math.asin(-p0(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(U,G),this._z=Math.atan2(Y,$);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(p0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-N,H),this._y=Math.atan2(-q,$);else this._x=0,this._y=Math.atan2(X,G);break;case"XZY":if(this._z=Math.asin(-p0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(U,H),this._y=Math.atan2(X,$);else this._x=Math.atan2(-N,G),this._y=0;break;default:b0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return HW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(HW,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return UW.setFromEuler(this),this.setFromQuaternion(UW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}S8.DEFAULT_ORDER="XYZ";class ZQ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var jH=0,NW=new x,Q6=new r9,i8=new M9,V7=new x,x6=new x,vH=new x,bH=new r9,GW=new x(1,0,0),qW=new x(0,1,0),DW=new x(0,0,1),FW={type:"added"},yH={type:"removed"},Z6={type:"childadded",child:null},YZ={type:"childremoved",child:null};class i9 extends f8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:jH++}),this.uuid=e8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i9.DEFAULT_UP.clone();let J=new x,Q=new S8,Z=new r9,K=new x(1,1,1);function $(){Z.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange($),Z._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new M9},normalMatrix:{value:new g0}}),this.matrix=new M9,this.matrixWorld=new M9,this.matrixAutoUpdate=i9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ZQ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return Q6.setFromAxisAngle(J,Q),this.quaternion.multiply(Q6),this}rotateOnWorldAxis(J,Q){return Q6.setFromAxisAngle(J,Q),this.quaternion.premultiply(Q6),this}rotateX(J){return this.rotateOnAxis(GW,J)}rotateY(J){return this.rotateOnAxis(qW,J)}rotateZ(J){return this.rotateOnAxis(DW,J)}translateOnAxis(J,Q){return NW.copy(J).applyQuaternion(this.quaternion),this.position.add(NW.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(GW,J)}translateY(J){return this.translateOnAxis(qW,J)}translateZ(J){return this.translateOnAxis(DW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(i8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)V7.copy(J);else V7.set(J,Q,Z);let K=this.parent;if(this.updateWorldMatrix(!0,!1),x6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)i8.lookAt(x6,V7,this.up);else i8.lookAt(V7,x6,this.up);if(this.quaternion.setFromRotationMatrix(i8),K)i8.extractRotation(K.matrixWorld),Q6.setFromRotationMatrix(i8),this.quaternion.premultiply(Q6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return f0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(FW),Z6.child=J,this.dispatchEvent(Z6),Z6.child=null;else f0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(yH),YZ.child=J,this.dispatchEvent(YZ),YZ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),i8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),i8.multiply(J.parent.matrixWorld);return J.applyMatrix4(i8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(FW),Z6.child=J,this.dispatchEvent(Z6),Z6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,K=this.children.length;Z<K;Z++){let W=this.children[Z].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let K=this.children;for(let $=0,W=K.length;$<W;$++)K[$].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(x6,J,vH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(x6,bH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:Z,z:K}=J,$=this.matrix.elements;$[12]+=Q-$[0]*Q-$[4]*Z-$[8]*K,$[13]+=Z-$[1]*Q-$[5]*Z-$[9]*K,$[14]+=K-$[2]*Q-$[6]*Z-$[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q,Z=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Z){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Z=!0}if(Q===!0){let $=this.children;for(let W=0,X=$.length;W<X;W++)$[W].updateWorldMatrix(!1,!0,Z)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,K.name=this.name,K.castShadow=this.castShadow,K.receiveShadow=this.receiveShadow,K.visible=this.visible,K.frustumCulled=this.frustumCulled,K.renderOrder=this.renderOrder,K.static=this.static,K.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function $(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=$(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,N=Y.length;H<N;H++){let q=Y[H];$(J.shapes,q)}else $(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)$(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push($(J.materials,this.material[Y]));K.material=X}else K.material=$(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push($(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),N=W(J.images),q=W(J.shapes),U=W(J.skeletons),G=W(J.animations),F=W(J.nodes);if(X.length>0)Z.geometries=X;if(Y.length>0)Z.materials=Y;if(H.length>0)Z.textures=H;if(N.length>0)Z.images=N;if(q.length>0)Z.shapes=q;if(U.length>0)Z.skeletons=U;if(G.length>0)Z.animations=G;if(F.length>0)Z.nodes=F}return Z.object=K,Z;function W(X){let Y=[];for(let H in X){let N=X[H];delete N.metadata,Y.push(N)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let K=J.children[Z];this.add(K.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}i9.DEFAULT_UP=new x(0,1,0);i9.DEFAULT_MATRIX_AUTO_UPDATE=!0;i9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class EJ extends i9{constructor(){super();this.isGroup=!0,this.type="Group"}}var fH={type:"move"};class e6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new EJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new EJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new EJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let K=null,$=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let L=Q.getJointPose(O,Z),E=this._getHandJoint(H,O);if(L!==null)E.matrix.fromArray(L.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=L.radius;E.visible=L!==null}let N=H.joints["index-finger-tip"],q=H.joints["thumb-tip"],U=N.position.distanceTo(q.position),G=0.02,F=0.005;if(H.inputState.pinching&&U>G+F)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&U<=G-F)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if($=Q.getPose(J.gripSpace,Z),$!==null){if(Y.matrix.fromArray($.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,$.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy($.linearVelocity);else Y.hasLinearVelocity=!1;if($.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy($.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,Z),K===null&&$!==null)K=$;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(fH)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=$!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new EJ;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var zX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},GJ={h:0,s:0,l:0},C7={h:0,s:0,l:0};function HZ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class e0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,o0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,K=o0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,o0.colorSpaceToWorking(this,K),this}setHSL(J,Q,Z,K=o0.workingColorSpace){if(J=BK(J,1),Q=p0(Q,0,1),Z=p0(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let $=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,W=2*Z-$;this.r=HZ(W,$,J+0.3333333333333333),this.g=HZ(W,$,J),this.b=HZ(W,$,J-0.3333333333333333)}return o0.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function Z($){if($===void 0)return;if(parseFloat($)<1)b0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let $,W=K[1],X=K[2];switch(W){case"rgb":case"rgba":if($=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(255,parseInt($[1],10))/255,Math.min(255,parseInt($[2],10))/255,Math.min(255,parseInt($[3],10))/255,Q);if($=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(100,parseInt($[1],10))/100,Math.min(100,parseInt($[2],10))/100,Math.min(100,parseInt($[3],10))/100,Q);break;case"hsl":case"hsla":if($=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setHSL(parseFloat($[1])/360,parseFloat($[2])/100,parseFloat($[3])/100,Q);break;default:b0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let $=K[1],W=$.length;if(W===3)return this.setRGB(parseInt($.charAt(0),16)/15,parseInt($.charAt(1),16)/15,parseInt($.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt($,16),Q);else b0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=zX[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else b0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=JJ(J.r),this.g=JJ(J.g),this.b=JJ(J.b),this}copyLinearToSRGB(J){return this.r=F6(J.r),this.g=F6(J.g),this.b=F6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return o0.workingToColorSpace(h9.copy(this),J),Math.round(p0(h9.r*255,0,255))*65536+Math.round(p0(h9.g*255,0,255))*256+Math.round(p0(h9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=o0.workingColorSpace){o0.workingToColorSpace(h9.copy(this),Q);let{r:Z,g:K,b:$}=h9,W=Math.max(Z,K,$),X=Math.min(Z,K,$),Y,H,N=(X+W)/2;if(X===W)Y=0,H=0;else{let q=W-X;switch(H=N<=0.5?q/(W+X):q/(2-W-X),W){case Z:Y=(K-$)/q+(K<$?6:0);break;case K:Y=($-Z)/q+2;break;case $:Y=(Z-K)/q+4;break}Y/=6}return J.h=Y,J.s=H,J.l=N,J}getRGB(J,Q=o0.workingColorSpace){return o0.workingToColorSpace(h9.copy(this),Q),J.r=h9.r,J.g=h9.g,J.b=h9.b,J}getStyle(J="srgb"){o0.workingToColorSpace(h9.copy(this),J);let{r:Q,g:Z,b:K}=h9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round(K*255)})`}offsetHSL(J,Q,Z){return this.getHSL(GJ),this.setHSL(GJ.h+J,GJ.s+Q,GJ.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(GJ),J.getHSL(C7);let Z=u6(GJ.h,C7.h,Q),K=u6(GJ.s,C7.s,Q),$=u6(GJ.l,C7.l,Q);return this.setHSL(Z,K,$),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,K=this.b,$=J.elements;return this.r=$[0]*Q+$[3]*Z+$[6]*K,this.g=$[1]*Q+$[4]*Z+$[7]*K,this.b=$[2]*Q+$[5]*Z+$[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var h9=new e0;e0.NAMES=zX;class J7{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new e0(J),this.near=Q,this.far=Z}clone(){return new J7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class KQ extends i9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new S8,this.environmentIntensity=1,this.environmentRotation=new S8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var M8=new x,o8=new x,UZ=new x,a8=new x,K6=new x,$6=new x,EW=new x,NZ=new x,GZ=new x,qZ=new x,DZ=new Y9,FZ=new Y9,EZ=new Y9;class U8{constructor(J=new x,Q=new x,Z=new x){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,K){K.subVectors(Z,Q),M8.subVectors(J,Q),K.cross(M8);let $=K.lengthSq();if($>0)return K.multiplyScalar(1/Math.sqrt($));return K.set(0,0,0)}static getBarycoord(J,Q,Z,K,$){M8.subVectors(K,Q),o8.subVectors(Z,Q),UZ.subVectors(J,Q);let W=M8.dot(M8),X=M8.dot(o8),Y=M8.dot(UZ),H=o8.dot(o8),N=o8.dot(UZ),q=W*H-X*X;if(q===0)return $.set(0,0,0),null;let U=1/q,G=(H*Y-X*N)*U,F=(W*N-X*Y)*U;return $.set(1-G-F,F,G)}static containsPoint(J,Q,Z,K){if(this.getBarycoord(J,Q,Z,K,a8)===null)return!1;return a8.x>=0&&a8.y>=0&&a8.x+a8.y<=1}static getInterpolation(J,Q,Z,K,$,W,X,Y){if(this.getBarycoord(J,Q,Z,K,a8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector($,a8.x),Y.addScaledVector(W,a8.y),Y.addScaledVector(X,a8.z),Y}static getInterpolatedAttribute(J,Q,Z,K,$,W){return DZ.setScalar(0),FZ.setScalar(0),EZ.setScalar(0),DZ.fromBufferAttribute(J,Q),FZ.fromBufferAttribute(J,Z),EZ.fromBufferAttribute(J,K),W.setScalar(0),W.addScaledVector(DZ,$.x),W.addScaledVector(FZ,$.y),W.addScaledVector(EZ,$.z),W}static isFrontFacing(J,Q,Z,K){return M8.subVectors(Z,Q),o8.subVectors(J,Q),M8.cross(o8).dot(K)<0}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,K){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,Z,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return M8.subVectors(this.c,this.b),o8.subVectors(this.a,this.b),M8.cross(o8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return U8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return U8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,K,$){return U8.getInterpolation(J,this.a,this.b,this.c,Q,Z,K,$)}containsPoint(J){return U8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return U8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,K=this.b,$=this.c,W,X;K6.subVectors(K,Z),$6.subVectors($,Z),NZ.subVectors(J,Z);let Y=K6.dot(NZ),H=$6.dot(NZ);if(Y<=0&&H<=0)return Q.copy(Z);GZ.subVectors(J,K);let N=K6.dot(GZ),q=$6.dot(GZ);if(N>=0&&q<=N)return Q.copy(K);let U=Y*q-N*H;if(U<=0&&Y>=0&&N<=0)return W=Y/(Y-N),Q.copy(Z).addScaledVector(K6,W);qZ.subVectors(J,$);let G=K6.dot(qZ),F=$6.dot(qZ);if(F>=0&&G<=F)return Q.copy($);let O=G*H-Y*F;if(O<=0&&H>=0&&F<=0)return X=H/(H-F),Q.copy(Z).addScaledVector($6,X);let L=N*F-G*q;if(L<=0&&q-N>=0&&G-F>=0)return EW.subVectors($,K),X=(q-N)/(q-N+(G-F)),Q.copy(K).addScaledVector(EW,X);let E=1/(L+O+U);return W=O*E,X=U*E,Q.copy(Z).addScaledVector(K6,W).addScaledVector($6,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class G8{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(L8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(L8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=L8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let $=Z.getAttribute("position");if(Q===!0&&$!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=$.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,L8);else L8.fromBufferAttribute($,W);L8.applyMatrix4(J.matrixWorld),this.expandByPoint(L8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();B7.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();B7.copy(Z.boundingBox)}B7.applyMatrix4(J.matrixWorld),this.union(B7)}}let K=J.children;for(let $=0,W=K.length;$<W;$++)this.expandByObject(K[$],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,L8),L8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(g6),A7.subVectors(this.max,g6),W6.subVectors(J.a,g6),X6.subVectors(J.b,g6),Y6.subVectors(J.c,g6),qJ.subVectors(X6,W6),DJ.subVectors(Y6,X6),PJ.subVectors(W6,Y6);let Q=[0,-qJ.z,qJ.y,0,-DJ.z,DJ.y,0,-PJ.z,PJ.y,qJ.z,0,-qJ.x,DJ.z,0,-DJ.x,PJ.z,0,-PJ.x,-qJ.y,qJ.x,0,-DJ.y,DJ.x,0,-PJ.y,PJ.x,0];if(!OZ(Q,W6,X6,Y6,A7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!OZ(Q,W6,X6,Y6,A7))return!1;return z7.crossVectors(qJ,DJ),Q=[z7.x,z7.y,z7.z],OZ(Q,W6,X6,Y6,A7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,L8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(L8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return r8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),r8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),r8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),r8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),r8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),r8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),r8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),r8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(r8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var r8=[new x,new x,new x,new x,new x,new x,new x,new x],L8=new x,B7=new G8,W6=new x,X6=new x,Y6=new x,qJ=new x,DJ=new x,PJ=new x,g6=new x,A7=new x,z7=new x,kJ=new x;function OZ(J,Q,Z,K,$){for(let W=0,X=J.length-3;W<=X;W+=3){kJ.fromArray(J,W);let Y=$.x*Math.abs(kJ.x)+$.y*Math.abs(kJ.y)+$.z*Math.abs(kJ.z),H=Q.dot(kJ),N=Z.dot(kJ),q=K.dot(kJ);if(Math.max(-Math.max(H,N,q),Math.min(H,N,q))>Y)return!1}return!0}var B9=new x,P7=new x0,hH=0;class N8 extends f8{constructor(J,Q,Z=!1){super();if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let K=0,$=this.itemSize;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)P7.fromBufferAttribute(this,Q),P7.applyMatrix3(J),this.setXY(Q,P7.x,P7.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.applyMatrix3(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.applyMatrix4(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.applyNormalMatrix(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)B9.fromBufferAttribute(this,Q),B9.transformDirection(J),this.setXYZ(Q,B9.x,B9.y,B9.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=I8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=W9(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=I8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=I8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=I8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=I8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J*=this.itemSize,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J*=this.itemSize,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array),$=W9($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this.array[J+3]=$,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class $Q extends N8{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class WQ extends N8{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class c9 extends N8{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var xH=new G8,p6=new x,RZ=new x;class ZJ{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else xH.setFromPoints(J).getCenter(Z);let K=0;for(let $=0,W=J.length;$<W;$++)K=Math.max(K,Z.distanceToSquared(J[$]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;p6.subVectors(J,this.center);let Q=p6.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),K=(Z-this.radius)*0.5;this.center.addScaledVector(p6,K/Z),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else RZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(p6.copy(J.center).add(RZ)),this.expandByPoint(p6.copy(J.center).sub(RZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var gH=0,Y8=new M9,MZ=new i9,H6=new x,Q8=new G8,m6=new G8,T9=new x;class q8 extends f8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gH++}),this.uuid=e8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((UH(J))?WQ:$Q)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let $=new g0().getNormalMatrix(J);Z.applyNormalMatrix($),Z.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return Y8.makeRotationFromQuaternion(J),this.applyMatrix4(Y8),this}rotateX(J){return Y8.makeRotationX(J),this.applyMatrix4(Y8),this}rotateY(J){return Y8.makeRotationY(J),this.applyMatrix4(Y8),this}rotateZ(J){return Y8.makeRotationZ(J),this.applyMatrix4(Y8),this}translate(J,Q,Z){return Y8.makeTranslation(J,Q,Z),this.applyMatrix4(Y8),this}scale(J,Q,Z){return Y8.makeScale(J,Q,Z),this.applyMatrix4(Y8),this}lookAt(J){return MZ.lookAt(J),MZ.updateMatrix(),this.applyMatrix4(MZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(H6).negate(),this.translate(H6.x,H6.y,H6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.push(W.x,W.y,W.z||0)}this.setAttribute("position",new c9(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let K=0;K<Z;K++){let $=J[K];Q.setXYZ(K,$.x,$.y,$.z||0)}if(J.length>Q.count)b0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new G8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let $=Q[Z];if(Q8.setFromBufferAttribute($),this.morphTargetsRelative)T9.addVectors(this.boundingBox.min,Q8.min),this.boundingBox.expandByPoint(T9),T9.addVectors(this.boundingBox.max,Q8.max),this.boundingBox.expandByPoint(T9);else this.boundingBox.expandByPoint(Q8.min),this.boundingBox.expandByPoint(Q8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))f0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ZJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let Z=this.boundingSphere.center;if(Q8.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$];if(m6.setFromBufferAttribute(X),this.morphTargetsRelative)T9.addVectors(Q8.min,m6.min),Q8.expandByPoint(T9),T9.addVectors(Q8.max,m6.max),Q8.expandByPoint(T9);else Q8.expandByPoint(m6.min),Q8.expandByPoint(m6.max)}Q8.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)T9.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(T9));if(Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$],Y=this.morphTargetsRelative;for(let H=0,N=X.count;H<N;H++){if(T9.fromBufferAttribute(X,H),Y)H6.fromBufferAttribute(J,H),T9.add(H6);K=Math.max(K,Z.distanceToSquared(T9))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))f0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){f0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:K,uv:$}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==Z.count)W=new N8(new Float32Array(4*Z.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<Z.count;_++)X[_]=new x,Y[_]=new x;let H=new x,N=new x,q=new x,U=new x0,G=new x0,F=new x0,O=new x,L=new x;function E(_,I,B){H.fromBufferAttribute(Z,_),N.fromBufferAttribute(Z,I),q.fromBufferAttribute(Z,B),U.fromBufferAttribute($,_),G.fromBufferAttribute($,I),F.fromBufferAttribute($,B),N.sub(H),q.sub(H),G.sub(U),F.sub(U);let p=1/(G.x*F.y-F.x*G.y);if(!isFinite(p))return;O.copy(N).multiplyScalar(F.y).addScaledVector(q,-G.y).multiplyScalar(p),L.copy(q).multiplyScalar(G.x).addScaledVector(N,-F.x).multiplyScalar(p),X[_].add(O),X[I].add(O),X[B].add(O),Y[_].add(L),Y[I].add(L),Y[B].add(L)}let D=this.groups;if(D.length===0)D=[{start:0,count:J.count}];for(let _=0,I=D.length;_<I;++_){let B=D[_],p=B.start,j=B.count;for(let b=p,m=p+j;b<m;b+=3)E(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let R=new x,k=new x,V=new x,A=new x;function P(_){V.fromBufferAttribute(K,_),A.copy(V);let I=X[_];R.copy(I),R.sub(V.multiplyScalar(V.dot(I))).normalize(),k.crossVectors(A,I);let p=k.dot(Y[_])<0?-1:1;W.setXYZW(_,R.x,R.y,R.z,p)}for(let _=0,I=D.length;_<I;++_){let B=D[_],p=B.start,j=B.count;for(let b=p,m=p+j;b<m;b+=3)P(J.getX(b+0)),P(J.getX(b+1)),P(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0||Z.count!==Q.count)Z=new N8(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let U=0,G=Z.count;U<G;U++)Z.setXYZ(U,0,0,0);let K=new x,$=new x,W=new x,X=new x,Y=new x,H=new x,N=new x,q=new x;if(J)for(let U=0,G=J.count;U<G;U+=3){let F=J.getX(U+0),O=J.getX(U+1),L=J.getX(U+2);K.fromBufferAttribute(Q,F),$.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,L),N.subVectors(W,$),q.subVectors(K,$),N.cross(q),X.fromBufferAttribute(Z,F),Y.fromBufferAttribute(Z,O),H.fromBufferAttribute(Z,L),X.add(N),Y.add(N),H.add(N),Z.setXYZ(F,X.x,X.y,X.z),Z.setXYZ(O,Y.x,Y.y,Y.z),Z.setXYZ(L,H.x,H.y,H.z)}else for(let U=0,G=Q.count;U<G;U+=3)K.fromBufferAttribute(Q,U+0),$.fromBufferAttribute(Q,U+1),W.fromBufferAttribute(Q,U+2),N.subVectors(W,$),q.subVectors(K,$),N.cross(q),Z.setXYZ(U+0,N.x,N.y,N.z),Z.setXYZ(U+1,N.x,N.y,N.z),Z.setXYZ(U+2,N.x,N.y,N.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)T9.fromBufferAttribute(J,Q),T9.normalize(),J.setXYZ(Q,T9.x,T9.y,T9.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:N,normalized:q}=X,U=new H.constructor(Y.length*N),G=0,F=0;for(let O=0,L=Y.length;O<L;O++){if(X.isInterleavedBufferAttribute)G=Y[O]*X.data.stride+X.offset;else G=Y[O]*N;for(let E=0;E<N;E++)U[F++]=H[G++]}return new N8(U,N,q)}if(this.index===null)return b0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new q8,Z=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,Z);Q.setAttribute(X,H)}let $=this.morphAttributes;for(let X in $){let Y=[],H=$[X];for(let N=0,q=H.length;N<q;N++){let U=H[N],G=J(U,Z);Y.push(G)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let H=Z[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},$=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],N=[];for(let q=0,U=H.length;q<U;q++){let G=H[q];N.push(G.toJSON(J.data))}if(N.length>0)K[Y]=N,$=!0}if($)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let K=J.attributes;for(let H in K){let N=K[H];this.setAttribute(H,N.clone(Q))}let $=J.morphAttributes;for(let H in $){let N=[],q=$[H];for(let U=0,G=q.length;U<G;U++)N.push(q[U].clone(Q));this.morphAttributes[H]=N}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,N=W.length;H<N;H++){let q=W[H];this.addGroup(q.start,q.count,q.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kK{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=e8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let K=0,$=this.stride;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=e8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=e8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var u9=new x;class g9{constructor(J,Q,Z,K=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=K}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)u9.fromBufferAttribute(this,Q),u9.applyMatrix4(J),this.setXYZ(Q,u9.x,u9.y,u9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)u9.fromBufferAttribute(this,Q),u9.applyNormalMatrix(J),this.setXYZ(Q,u9.x,u9.y,u9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)u9.fromBufferAttribute(this,Q),u9.transformDirection(J),this.setXYZ(Q,u9.x,u9.y,u9.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=I8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=W9(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=I8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=I8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=I8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=I8(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array),$=W9($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this.data.array[J+3]=$,this}clone(J){if(J===void 0){c6("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return new N8(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new g9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){c6("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var LZ=new x,pH=new x,mH=new g0;class H8{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,K){return this.normal.set(J,Q,Z),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let K=LZ.subVectors(Z,Q).cross(pH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,Z=!0){let K=J.delta(LZ),$=this.normal.dot(K);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(Z===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(K,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||mH.getNormalMatrix(J),K=this.coplanarPoint(LZ).applyMatrix4(J),$=this.normal.applyMatrix3(Z).normalize();return this.constant=-K.dot($),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var dH=0;class C6 extends f8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:dH++}),this.uuid=e8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new e0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){b0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){b0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set(Z);else if(K&&K.isVector2&&(Z&&Z.isVector2)||K&&K.isEuler&&(Z&&Z.isEuler)||K&&K.isVector3&&(Z&&Z.isVector3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,Z.blending=this.blending,Z.side=this.side,Z.shadowSide=this.shadowSide,Z.vertexColors=this.vertexColors,Z.opacity=this.opacity,Z.transparent=this.transparent,Z.blendSrc=this.blendSrc,Z.blendDst=this.blendDst,Z.blendEquation=this.blendEquation,Z.blendSrcAlpha=this.blendSrcAlpha,Z.blendDstAlpha=this.blendDstAlpha,Z.blendEquationAlpha=this.blendEquationAlpha,Z.blendColor=this.blendColor.getHex(),Z.blendAlpha=this.blendAlpha,Z.depthFunc=this.depthFunc,Z.depthTest=this.depthTest,Z.depthWrite=this.depthWrite,Z.colorWrite=this.colorWrite,Z.clipIntersection=this.clipIntersection,Z.clipShadows=this.clipShadows,Z.stencilWriteMask=this.stencilWriteMask,Z.stencilFunc=this.stencilFunc,Z.stencilRef=this.stencilRef,Z.stencilFuncMask=this.stencilFuncMask,Z.stencilFail=this.stencilFail,Z.stencilZFail=this.stencilZFail,Z.stencilZPass=this.stencilZPass,Z.stencilWrite=this.stencilWrite,Z.polygonOffset=this.polygonOffset,Z.polygonOffsetFactor=this.polygonOffsetFactor,Z.polygonOffsetUnits=this.polygonOffsetUnits,Z.dithering=this.dithering,Z.alphaTest=this.alphaTest,Z.alphaHash=this.alphaHash,Z.alphaToCoverage=this.alphaToCoverage,Z.premultipliedAlpha=this.premultipliedAlpha,Z.forceSinglePass=this.forceSinglePass,Z.allowOverride=this.allowOverride,Z.visible=this.visible,Z.toneMapped=this.toneMapped,Z.name=this.name,this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Z.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Z.clippingPlanes=this.clippingPlanes.map(($)=>$.toJSON());if(this.rotation!==void 0)Z.rotation=this.rotation;if(this.depthPacking!==void 0)Z.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Z.linewidth=this.linewidth;if(this.linecap!==void 0)Z.linecap=this.linecap;if(this.linejoin!==void 0)Z.linejoin=this.linejoin;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.wireframe!==void 0)Z.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Z.flatShading=this.flatShading;if(this.fog!==void 0)Z.fog=this.fog;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function K($){let W=[];for(let X in $){let Y=$[X];delete Y.metadata,W.push(Y)}return W}if(Q){let $=K(J.textures),W=K(J.images);if($.length>0)Z.textures=$;if(W.length>0)Z.images=W}return Z}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new e0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Z)=>new H8().fromJSON(Z));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Z=J.normalScale;if(Array.isArray(Z)===!1)Z=[Z,Z];this.normalScale=new x0().fromArray(Z)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new x0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let K=Q.length;Z=new Array(K);for(let $=0;$!==K;++$)Z[$]=Q[$].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var t8=new x,IZ=new x,k7=new x,_7=new x;class Q7{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,t8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=t8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return t8.copy(this.origin).addScaledVector(this.direction,Q),t8.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,K){IZ.copy(J).add(Q).multiplyScalar(0.5),k7.copy(Q).sub(J).normalize(),_7.copy(this.origin).sub(IZ);let $=J.distanceTo(Q)*0.5,W=-this.direction.dot(k7),X=_7.dot(this.direction),Y=-_7.dot(k7),H=_7.lengthSq(),N=Math.abs(1-W*W),q,U,G,F;if(N>0)if(q=W*Y-X,U=W*X-Y,F=$*N,q>=0)if(U>=-F)if(U<=F){let O=1/N;q*=O,U*=O,G=q*(q+W*U+2*X)+U*(W*q+U+2*Y)+H}else U=$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else U=-$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else if(U<=-F)q=Math.max(0,-(-W*$+X)),U=q>0?-$:Math.min(Math.max(-$,-Y),$),G=-q*q+U*(U+2*Y)+H;else if(U<=F)q=0,U=Math.min(Math.max(-$,-Y),$),G=U*(U+2*Y)+H;else q=Math.max(0,-(W*$+X)),U=q>0?$:Math.min(Math.max(-$,-Y),$),G=-q*q+U*(U+2*Y)+H;else U=W>0?-$:$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;if(Z)Z.copy(this.origin).addScaledVector(this.direction,q);if(K)K.copy(IZ).addScaledVector(k7,U);return G}intersectSphere(J,Q){if(J.radius<0)return null;t8.subVectors(J.center,this.origin);let Z=t8.dot(this.direction),K=t8.dot(t8)-Z*Z,$=J.radius*J.radius;if(K>$)return null;let W=Math.sqrt($-K),X=Z-W,Y=Z+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,K,$,W,X,Y,H=1/this.direction.x,N=1/this.direction.y,q=1/this.direction.z,U=this.origin;if(H>=0)Z=(J.min.x-U.x)*H,K=(J.max.x-U.x)*H;else Z=(J.max.x-U.x)*H,K=(J.min.x-U.x)*H;if(N>=0)$=(J.min.y-U.y)*N,W=(J.max.y-U.y)*N;else $=(J.max.y-U.y)*N,W=(J.min.y-U.y)*N;if(Z>W||$>K)return null;if($>Z||isNaN(Z))Z=$;if(W<K||isNaN(K))K=W;if(q>=0)X=(J.min.z-U.z)*q,Y=(J.max.z-U.z)*q;else X=(J.max.z-U.z)*q,Y=(J.min.z-U.z)*q;if(Z>Y||X>K)return null;if(X>Z||Z!==Z)Z=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at(Z>=0?Z:K,Q)}intersectsBox(J){return this.intersectBox(J,t8)!==null}intersectTriangle(J,Q,Z,K,$){let W=this.origin,X=this.direction,Y=X.x,H=X.y,N=X.z,q=J.x-W.x,U=J.y-W.y,G=J.z-W.z,F=Q.x-W.x,O=Q.y-W.y,L=Q.z-W.z,E=Z.x-W.x,D=Z.y-W.y,R=Z.z-W.z,k=Math.abs(Y),V=Math.abs(H),A=Math.abs(N),P,_,I,B,p,j,b,m,T,w,n,u;if(k>=V&&k>=A)if(I=Y,j=q,T=F,u=E,Y>=0)P=H,_=N,B=U,p=G,b=O,m=L,w=D,n=R;else P=N,_=H,B=G,p=U,b=L,m=O,w=R,n=D;else if(V>=A)if(I=H,j=U,T=O,u=D,H>=0)P=N,_=Y,B=G,p=q,b=L,m=F,w=R,n=E;else P=Y,_=N,B=q,p=G,b=F,m=L,w=E,n=R;else if(I=N,j=G,T=L,u=R,N>=0)P=Y,_=H,B=q,p=U,b=F,m=O,w=E,n=D;else P=H,_=Y,B=U,p=q,b=O,m=F,w=D,n=E;if(I===0)return null;let $0=P/I,i=_/I,Z0=1/I,X0=B-$0*j,w0=p-i*j,T0=b-$0*T,n0=m-i*T,u0=w-$0*u,S=n-i*u,g=u0*n0-S*T0,d=X0*S-w0*u0,a=T0*w0-n0*X0;if(K){if(g<0||d<0||a<0)return null}else if((g<0||d<0||a<0)&&(g>0||d>0||a>0))return null;let Q0=g+d+a;if(Q0===0)return null;let r=Z0*(g*j+d*T+a*u);if(Q0>0?r<0:r>0)return null;return this.at(r/Q0,$)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class XQ extends C6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new e0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new S8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var OW=new M9,_J=new Q7,T7=new ZJ,RW=new x,w7=new x,S7=new x,j7=new x,VZ=new x,v7=new x,MW=new x,b7=new x;class K8 extends i9{constructor(J=new q8,Q=new XQ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let $=0,W=K.length;$<W;$++){let X=K[$].name||String($);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=$}}}}getVertexPosition(J,Q){let Z=this.geometry,K=Z.attributes.position,$=Z.morphAttributes.position,W=Z.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if($&&X){v7.set(0,0,0);for(let Y=0,H=$.length;Y<H;Y++){let N=X[Y],q=$[Y];if(N===0)continue;if(VZ.fromBufferAttribute(q,J),W)v7.addScaledVector(VZ,N);else v7.addScaledVector(VZ.sub(Q),N)}Q.add(v7)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.material,$=this.matrixWorld;if(K===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(T7.copy(Z.boundingSphere),T7.applyMatrix4($),_J.copy(J.ray).recast(J.near),T7.containsPoint(_J.origin)===!1){if(_J.intersectSphere(T7,RW)===null)return;if(_J.origin.distanceToSquared(RW)>(J.far-J.near)**2)return}if(OW.copy($).invert(),_J.copy(J.ray).applyMatrix4(OW),Z.boundingBox!==null){if(_J.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,_J)}_computeIntersections(J,Q,Z){let K,$=this.geometry,W=this.material,X=$.index,Y=$.attributes.position,H=$.attributes.uv,N=$.attributes.uv1,q=$.attributes.normal,U=$.groups,G=$.drawRange;if(X!==null)if(Array.isArray(W))for(let F=0,O=U.length;F<O;F++){let L=U[F],E=W[L.materialIndex],D=Math.max(L.start,G.start),R=Math.min(X.count,Math.min(L.start+L.count,G.start+G.count));for(let k=D,V=R;k<V;k+=3){let A=X.getX(k),P=X.getX(k+1),_=X.getX(k+2);if(K=y7(this,E,J,Z,H,N,q,A,P,_),K)K.faceIndex=Math.floor(k/3),K.face.materialIndex=L.materialIndex,Q.push(K)}}else{let F=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let L=F,E=O;L<E;L+=3){let D=X.getX(L),R=X.getX(L+1),k=X.getX(L+2);if(K=y7(this,W,J,Z,H,N,q,D,R,k),K)K.faceIndex=Math.floor(L/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(W))for(let F=0,O=U.length;F<O;F++){let L=U[F],E=W[L.materialIndex],D=Math.max(L.start,G.start),R=Math.min(Y.count,Math.min(L.start+L.count,G.start+G.count));for(let k=D,V=R;k<V;k+=3){let A=k,P=k+1,_=k+2;if(K=y7(this,E,J,Z,H,N,q,A,P,_),K)K.faceIndex=Math.floor(k/3),K.face.materialIndex=L.materialIndex,Q.push(K)}}else{let F=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let L=F,E=O;L<E;L+=3){let D=L,R=L+1,k=L+2;if(K=y7(this,W,J,Z,H,N,q,D,R,k),K)K.faceIndex=Math.floor(L/3),Q.push(K)}}}}function uH(J,Q,Z,K,$,W,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,W,$,!0,Y);else H=K.intersectTriangle($,W,X,Q.side===0,Y);if(H===null)return null;b7.copy(Y),b7.applyMatrix4(J.matrixWorld);let N=Z.ray.origin.distanceTo(b7);if(N<Z.near||N>Z.far)return null;return{distance:N,point:b7.clone(),object:J}}function y7(J,Q,Z,K,$,W,X,Y,H,N){J.getVertexPosition(Y,w7),J.getVertexPosition(H,S7),J.getVertexPosition(N,j7);let q=uH(J,Q,Z,K,w7,S7,j7,MW);if(q){let U=new x;if(U8.getBarycoord(MW,w7,S7,j7,U),$)q.uv=U8.getInterpolatedAttribute($,Y,H,N,U,new x0);if(W)q.uv1=U8.getInterpolatedAttribute(W,Y,H,N,U,new x0);if(X){if(q.normal=U8.getInterpolatedAttribute(X,Y,H,N,U,new x),q.normal.dot(K.direction)>0)q.normal.multiplyScalar(-1)}let G={a:Y,b:H,c:N,normal:new x,materialIndex:0};U8.getNormal(w7,S7,j7,G.normal),q.face=G,q.barycoord=U}return q}class _K extends x9{constructor(J=null,Q=1,Z=1,K,$,W,X,Y,H=1003,N=1003,q,U){super(null,W,X,Y,H,N,K,$,q,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var TJ=new ZJ,lH=new x0(0.5,0.5),f7=new x;class YQ{constructor(J=new H8,Q=new H8,Z=new H8,K=new H8,$=new H8,W=new H8){this.planes=[J,Q,Z,K,$,W]}set(J,Q,Z,K,$,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy(Z),X[3].copy(K),X[4].copy($),X[5].copy(W),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let K=this.planes,$=J.elements,W=$[0],X=$[1],Y=$[2],H=$[3],N=$[4],q=$[5],U=$[6],G=$[7],F=$[8],O=$[9],L=$[10],E=$[11],D=$[12],R=$[13],k=$[14],V=$[15];if(K[0].setComponents(H-W,G-N,E-F,V-D).normalize(),K[1].setComponents(H+W,G+N,E+F,V+D).normalize(),K[2].setComponents(H+X,G+q,E+O,V+R).normalize(),K[3].setComponents(H-X,G-q,E-O,V-R).normalize(),Z)K[4].setComponents(Y,U,L,k).normalize(),K[5].setComponents(H-Y,G-U,E-L,V-k).normalize();else if(K[4].setComponents(H-Y,G-U,E-L,V-k).normalize(),Q===2000)K[5].setComponents(H+Y,G+U,E+L,V+k).normalize();else if(Q===2001)K[5].setComponents(Y,U,L,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();TJ.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();TJ.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(TJ)}intersectsSprite(J){TJ.center.set(0,0,0);let Q=lH.distanceTo(J.center);return TJ.radius=0.7071067811865476+Q,TJ.applyMatrix4(J.matrixWorld),this.intersectsSphere(TJ)}intersectsSphere(J){let Q=this.planes,Z=J.center,K=-J.radius;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(Z)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let K=Q[Z];if(f7.x=K.normal.x>0?J.max.x:J.min.x,f7.y=K.normal.y>0?J.max.y:J.min.y,f7.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(f7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class HQ extends x9{constructor(J=[],Q=301,Z,K,$,W,X,Y,H,N){super(J,Q,Z,K,$,W,X,Y,H,N);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class hJ extends x9{constructor(J,Q,Z=1014,K,$,W,X=1003,Y=1003,H,N=1026,q=1){if(N!==1026&&N!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let U={width:J,height:Q,depth:q};super(U,K,$,W,X,Y,N,Z,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new t6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class TK extends hJ{constructor(J,Q=1014,Z=301,K,$,W=1003,X=1003,Y,H=1026){let N={width:J,height:J,depth:1},q=[N,N,N,N,N,N];super(J,J,Q,Z,K,$,W,X,Y,H);this.image=q,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class UQ extends x9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class B6 extends q8{constructor(J=1,Q=1,Z=1,K=1,$=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:K,heightSegments:$,depthSegments:W};let X=this;K=Math.floor(K),$=Math.floor($),W=Math.floor(W);let Y=[],H=[],N=[],q=[],U=0,G=0;F("z","y","x",-1,-1,Z,Q,J,W,$,0),F("z","y","x",1,-1,Z,Q,-J,W,$,1),F("x","z","y",1,1,J,Z,Q,K,W,2),F("x","z","y",1,-1,J,Z,-Q,K,W,3),F("x","y","z",1,-1,J,Q,Z,K,$,4),F("x","y","z",-1,-1,J,Q,-Z,K,$,5),this.setIndex(Y),this.setAttribute("position",new c9(H,3)),this.setAttribute("normal",new c9(N,3)),this.setAttribute("uv",new c9(q,2));function F(O,L,E,D,R,k,V,A,P,_,I){let B=k/P,p=V/_,j=k/2,b=V/2,m=A/2,T=P+1,w=_+1,n=0,u=0,$0=new x;for(let i=0;i<w;i++){let Z0=i*p-b;for(let X0=0;X0<T;X0++){let w0=X0*B-j;$0[O]=w0*D,$0[L]=Z0*R,$0[E]=m,H.push($0.x,$0.y,$0.z),$0[O]=0,$0[L]=0,$0[E]=A>0?1:-1,N.push($0.x,$0.y,$0.z),q.push(X0/P),q.push(1-i/_),n+=1}}for(let i=0;i<_;i++)for(let Z0=0;Z0<P;Z0++){let X0=U+Z0+T*i,w0=U+Z0+T*(i+1),T0=U+(Z0+1)+T*(i+1),n0=U+(Z0+1)+T*i;Y.push(X0,w0,n0),Y.push(w0,T0,n0),u+=6}X.addGroup(G,u,I),G+=u,U+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new B6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class Z7 extends q8{constructor(J=1,Q=1,Z=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:K};let $=J/2,W=Q/2,X=Math.floor(Z),Y=Math.floor(K),H=X+1,N=Y+1,q=J/X,U=Q/Y,G=[],F=[],O=[],L=[];for(let E=0;E<N;E++){let D=E*U-W;for(let R=0;R<H;R++){let k=R*q-$;F.push(k,-D,0),O.push(0,0,1),L.push(R/X),L.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let D=0;D<X;D++){let R=D+H*E,k=D+H*(E+1),V=D+1+H*(E+1),A=D+1+H*E;G.push(R,k,A),G.push(k,V,A)}this.setIndex(G),this.setAttribute("position",new c9(F,3)),this.setAttribute("normal",new c9(O,3)),this.setAttribute("uv",new c9(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Z7(J.width,J.height,J.widthSegments,J.heightSegments)}}class NQ extends q8{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],Z=new Set,K=new x,$=new x;if(J.index!==null){let W=J.attributes.position,X=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:X.count,materialIndex:0}];for(let H=0,N=Y.length;H<N;++H){let q=Y[H],U=q.start,G=q.count;for(let F=U,O=U+G;F<O;F+=3)for(let L=0;L<3;L++){let E=X.getX(F+L),D=X.getX(F+(L+1)%3);if(K.fromBufferAttribute(W,E),$.fromBufferAttribute(W,D),LW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}}else{let W=J.attributes.position;for(let X=0,Y=W.count/3;X<Y;X++)for(let H=0;H<3;H++){let N=3*X+H,q=3*X+(H+1)%3;if(K.fromBufferAttribute(W,N),$.fromBufferAttribute(W,q),LW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}this.setAttribute("position",new c9(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function LW(J,Q,Z){let K=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,$=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if(Z.has(K)===!0||Z.has($)===!0)return!1;else return Z.add(K),Z.add($),!0}function xJ(J){let Q={};for(let Z in J){Q[Z]={};for(let K in J[Z]){let $=J[Z][K];if(IW($))if($.isRenderTargetTexture)b0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][K]=null;else Q[Z][K]=$.clone();else if(Array.isArray($))if(IW($[0])){let W=[];for(let X=0,Y=$.length;X<Y;X++)W[X]=$[X].clone();Q[Z][K]=W}else Q[Z][K]=$.slice();else Q[Z][K]=$}}return Q}function p9(J){let Q={};for(let Z=0;Z<J.length;Z++){let K=xJ(J[Z]);for(let $ in K)Q[$]=K[$]}return Q}function IW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function cH(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function wK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return o0.workingColorSpace}var K7={clone:xJ,merge:p9},nH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sH=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class t9 extends C6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nH,this.fragmentShader=sH,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=xJ(J.uniforms),this.uniformsGroups=cH(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let W=this.uniforms[K].value;if(W&&W.isTexture)Q.uniforms[K]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[K]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[K]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[K]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[K]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[K]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[K]={type:"m4",value:W.toArray()};else Q.uniforms[K]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let K in this.extensions)if(this.extensions[K]===!0)Z[K]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let Z in J.uniforms){let K=J.uniforms[Z];switch(this.uniforms[Z]={},K.type){case"t":this.uniforms[Z].value=Q[K.value]||null;break;case"c":this.uniforms[Z].value=new e0().setHex(K.value);break;case"v2":this.uniforms[Z].value=new x0().fromArray(K.value);break;case"v3":this.uniforms[Z].value=new x().fromArray(K.value);break;case"v4":this.uniforms[Z].value=new Y9().fromArray(K.value);break;case"m3":this.uniforms[Z].value=new g0().fromArray(K.value);break;case"m4":this.uniforms[Z].value=new M9().fromArray(K.value);break;default:this.uniforms[Z].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Z in J.extensions)this.extensions[Z]=J.extensions[Z];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class SK extends t9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jK extends C6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class vK extends C6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function U6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function CZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class gJ{constructor(J,Q,Z,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,K=Q[Z],$=Q[Z-1];Z:{J:{let W;Q:{K:if(!(J<K)){for(let X=Z+2;;){if(K===void 0){if(J<$)break K;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===X)break;if($=K,K=Q[++Z],J<K)break J}W=Q.length;break Q}if(!(J>=$)){let X=Q[1];if(J<X)Z=2,$=X;for(let Y=Z-2;;){if($===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if(K=$,$=Q[--Z-1],J>=$)break J}W=Z,Z=0;break Q}break Z}while(Z<W){let X=Z+W>>>1;if(J<Q[X])W=X;else Z=X+1}if(K=Q[Z],$=Q[Z-1],$===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,$,K)}return this.interpolate_(Z,$,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,K=this.valueSize,$=J*K;for(let W=0;W!==K;++W)Q[W]=Z[$+W];return Q}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class bK extends gJ{constructor(J,Q,Z,K){super(J,Q,Z,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let K=this.parameterPositions,$=J-2,W=J+1,X=K[$],Y=K[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:$=J,X=2*Q-Z;break;case 2402:$=K.length-2,X=Q+K[$]-K[$+1];break;default:$=J,X=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*Z-Q;break;case 2402:W=1,Y=Z+K[1]-K[0];break;default:W=J-1,Y=Q}let H=(Z-Q)*0.5,N=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-Z),this._offsetPrev=$*N,this._offsetNext=W*N}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this._offsetPrev,q=this._offsetNext,U=this._weightPrev,G=this._weightNext,F=(Z-Q)/(K-Q),O=F*F,L=O*F,E=-U*L+2*U*O-U*F,D=(1+U)*L+(-1.5-2*U)*O+(-0.5+U)*F+1,R=(-1-G)*L+(1.5+G)*O+0.5*F,k=G*L-G*O;for(let V=0;V!==X;++V)$[V]=E*W[N+V]+D*W[H+V]+R*W[Y+V]+k*W[q+V];return $}}class yK extends gJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=(Z-Q)/(K-Q),q=1-N;for(let U=0;U!==X;++U)$[U]=W[H+U]*q+W[Y+U]*N;return $}}class fK extends gJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class hK extends gJ{interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this.inTangents,q=this.outTangents;if(!N||!q){let F=(Z-Q)/(K-Q),O=1-F;for(let L=0;L!==X;++L)$[L]=W[H+L]*O+W[Y+L]*F;return $}let U=X*2,G=J-1;for(let F=0;F!==X;++F){let O=W[H+F],L=W[Y+F],E=G*U+F*2,D=q[E],R=q[E+1],k=J*U+F*2,V=N[k],A=N[k+1],P=oH(Z,Q,D,V,K);$[F]=PX(P,O,R,A,L)}return $}}function PX(J,Q,Z,K,$){let W=1-J;return W*W*W*Q+3*W*W*J*Z+3*W*J*J*K+J*J*J*$}function iH(J,Q,Z,K,$){let W=1-J;return 3*W*W*(Z-Q)+6*W*J*(K-Z)+3*J*J*($-K)}function oH(J,Q,Z,K,$){let W=(J-Q)/($-Q);for(let X=0;X<8;X++){let Y=PX(W,Q,Z,K,$)-J;if(Math.abs(Y)<0.0000000001)break;let H=iH(W,Q,Z,K,$);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class D8{constructor(J,Q,Z,K){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=U6(Q,this.TimeBufferType),this.values=U6(Z,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:U6(J.times,Array),values:U6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)Z.interpolation=K;if(CZ(J.settings))Z.settings={inTangents:U6(J.settings.inTangents,Array),outTangents:U6(J.settings.outTangents,Array)}}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new fK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new yK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new bK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new hK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return b0("KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]*=J;if(CZ(this.settings))VW(this.settings.inTangents,J),VW(this.settings.outTangents,J)}return this}trim(J,Q){let Z=this.times,K=Z.length,$=0,W=K-1;while($!==K&&Z[$]<J)++$;while(W!==-1&&Z[W]>Q)--W;if(++W,$!==0||W!==K){if($>=W)W=Math.max(W,1),$=W-1;let X=this.getValueSize();this.times=Z.slice($,W),this.values=this.values.slice($*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)f0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,K=this.values,$=Z.length;if($===0)f0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==$;X++){let Y=Z[X];if(typeof Y==="number"&&isNaN(Y)){f0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){f0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(K!==void 0){if(NH(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){f0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),K=this.getInterpolation()===2302,$=J.length-1,W=1;for(let X=1;X<$;++X){let Y=!1,H=J[X],N=J[X+1];if(H!==N&&(X!==1||H!==J[0]))if(!K){let q=X*Z,U=q-Z,G=q+Z;for(let F=0;F!==Z;++F){let O=Q[q+F];if(O!==Q[U+F]||O!==Q[G+F]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let q=X*Z,U=W*Z;for(let G=0;G!==Z;++G)Q[U+G]=Q[q+G]}++W}}if($>0){J[W]=J[$];for(let X=$*Z,Y=W*Z,H=0;H!==Z;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);if(K.createInterpolant=this.createInterpolant,CZ(this.settings))K.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return K}}function VW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]*=Q}D8.prototype.ValueTypeName="";D8.prototype.TimeBufferType=Float32Array;D8.prototype.ValueBufferType=Float32Array;D8.prototype.DefaultInterpolation=2301;class pJ extends D8{constructor(J,Q,Z){super(J,Q,Z)}}pJ.prototype.ValueTypeName="bool";pJ.prototype.ValueBufferType=Array;pJ.prototype.DefaultInterpolation=2300;pJ.prototype.InterpolantFactoryMethodLinear=void 0;pJ.prototype.InterpolantFactoryMethodSmooth=void 0;class xK extends D8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}xK.prototype.ValueTypeName="color";class gK extends D8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}gK.prototype.ValueTypeName="number";class pK extends gJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=(Z-Q)/(K-Q),H=J*X;for(let N=H+X;H!==N;H+=4)r9.slerpFlat($,0,W,H-X,W,H,Y);return $}}class GQ extends D8{constructor(J,Q,Z,K){super(J,Q,Z,K)}InterpolantFactoryMethodLinear(J){return new pK(this.times,this.values,this.getValueSize(),J)}}GQ.prototype.ValueTypeName="quaternion";GQ.prototype.InterpolantFactoryMethodSmooth=void 0;class mJ extends D8{constructor(J,Q,Z){super(J,Q,Z)}}mJ.prototype.ValueTypeName="string";mJ.prototype.ValueBufferType=Array;mJ.prototype.DefaultInterpolation=2300;mJ.prototype.InterpolantFactoryMethodLinear=void 0;mJ.prototype.InterpolantFactoryMethodSmooth=void 0;class mK extends D8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}mK.prototype.ValueTypeName="vector";class dK{constructor(J,Q,Z){let K=this,$=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this._abortController=null,this.itemStart=function(N){if(X++,$===!1){if(K.onStart!==void 0)K.onStart(N,W,X)}$=!0},this.itemEnd=function(N){if(W++,K.onProgress!==void 0)K.onProgress(N,W,X);if(W===X){if($=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(N){if(K.onError!==void 0)K.onError(N)},this.resolveURL=function(N){if(N=N.normalize("NFC"),Y)return Y(N);return N},this.setURLModifier=function(N){return Y=N,this},this.addHandler=function(N,q){return H.push(N,q),this},this.removeHandler=function(N){let q=H.indexOf(N);if(q!==-1)H.splice(q,2);return this},this.getHandler=function(N){for(let q=0,U=H.length;q<U;q+=2){let G=H[q],F=H[q+1];if(G.global)G.lastIndex=0;if(G.test(N))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var kX=new dK;class uK{constructor(J){if(this.manager=J!==void 0?J:kX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let Z=this;return new Promise(function(K,$){Z.load(J,K,Q,$)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}uK.DEFAULT_MATERIAL_NAME="__DEFAULT";var h7=new x,x7=new r9,w8=new x;class qQ extends i9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new M9,this.projectionMatrix=new M9,this.projectionMatrixInverse=new M9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(h7,x7,w8),w8.x===1&&w8.y===1&&w8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(h7,x7,w8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,Z=!1){if(super.updateWorldMatrix(J,Q,Z),this.matrixWorld.decompose(h7,x7,w8),w8.x===1&&w8.y===1&&w8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(h7,x7,w8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var FJ=new x,CW=new x0,BW=new x0;class l9 extends qQ{constructor(J=50,Q=1,Z=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=O6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(d6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return O6*2*Math.atan(Math.tan(d6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){FJ.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(FJ.x,FJ.y).multiplyScalar(-J/FJ.z),FJ.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(FJ.x,FJ.y).multiplyScalar(-J/FJ.z)}getViewSize(J,Q){return this.getViewBounds(J,CW,BW),Q.subVectors(BW,CW)}setViewOffset(J,Q,Z,K,$,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(d6*0.5*this.fov)/this.zoom,Z=2*Q,K=this.aspect*Z,$=-0.5*K,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;$+=W.offsetX*K/Y,Q-=W.offsetY*Z/H,K*=W.width/Y,Z*=W.height/H}let X=this.filmOffset;if(X!==0)$+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective($,$+K,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class DQ extends qQ{constructor(J=-1,Q=1,Z=1,K=-1,$=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=K,this.near=$,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,K,$,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,K=(this.top+this.bottom)/2,$=Z-J,W=Z+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,N=(this.top-this.bottom)/this.view.fullHeight/this.zoom;$+=H*this.view.offsetX,W=$+H*this.view.width,X-=N*this.view.offsetY,Y=X-N*this.view.height}this.projectionMatrix.makeOrthographic($,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class FQ extends q8{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var N6=-90,G6=1;class lK extends i9{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new l9(N6,G6,J,Q);K.layers=this.layers,this.add(K);let $=new l9(N6,G6,J,Q);$.layers=this.layers,this.add($);let W=new l9(N6,G6,J,Q);W.layers=this.layers,this.add(W);let X=new l9(N6,G6,J,Q);X.layers=this.layers,this.add(X);let Y=new l9(N6,G6,J,Q);Y.layers=this.layers,this.add(Y);let H=new l9(N6,G6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,K,$,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),$.up.set(0,0,-1),$.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),$.up.set(0,0,1),$.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[$,W,X,Y,H,N]=this.children,q=J.getRenderTarget(),U=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let O=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1;let L=!1;if(J.isWebGLRenderer===!0)L=J.state.buffers.depth.getReversed();else L=J.reversedDepthBuffer;if(J.setRenderTarget(Z,0,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,$),J.setRenderTarget(Z,1,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget(Z,2,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget(Z,3,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget(Z,4,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),Z.texture.generateMipmaps=O,J.setRenderTarget(Z,5,K),L&&J.autoClear===!1)J.clearDepth();J.render(Q,N),J.setRenderTarget(q,U,G),J.xr.enabled=F,Z.texture.needsPMREMUpdate=!0}}class cK extends l9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var nK="\\[\\]\\.:\\/",aH=new RegExp("["+nK+"]","g"),sK="[^"+nK+"]",rH="[^"+nK.replace("\\.","")+"]",tH=/((?:WC+[\/:])*)/.source.replace("WC",sK),eH=/(WCOD+)?/.source.replace("WCOD",rH),JU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sK),QU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sK),ZU=new RegExp("^"+tH+eH+JU+QU+"$"),KU=["material","materials","bones","map"];class _X{constructor(J,Q,Z){let K=Z||X9.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,K=this._bindings[Z];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let K=this._targetGroup.nCachedObjects_,$=Z.length;K!==$;++K)Z[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class X9{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||X9.parseTrackName(Q),this.node=X9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new X9(J,Q,Z);else return new X9.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(aH,"")}static parseTrackName(J){let Q=ZU.exec(J);if(Q===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let $=Z.nodeName.substring(K+1);if(KU.indexOf($)!==-1)Z.nodeName=Z.nodeName.substring(0,K),Z.objectName=$}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function($){for(let W=0;W<$.length;W++){let X=$[W];if(X.name===Q||X.uuid===Q)return X;let Y=Z(X.children);if(Y)return Y}return null},K=Z(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)J[Q++]=Z[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,K=Q.propertyName,$=Q.propertyIndex;if(!J)J=X9.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){b0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let H=Q.objectIndex;switch(Z){case"materials":if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){f0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){f0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let N=0;N<J.length;N++)if(J[N].name===H){H=N;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){f0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){f0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(H!==void 0){if(J[H]===void 0){f0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[K];if(W===void 0){let H=Q.nodeName;f0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if($!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[$]!==void 0)$=J.morphTargetDictionary[$]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=$}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}X9.Composite=_X;X9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};X9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};X9.prototype.GetterByBindingType=[X9.prototype._getValue_direct,X9.prototype._getValue_array,X9.prototype._getValue_arrayElement,X9.prototype._getValue_toArray];X9.prototype.SetterByBindingTypeAndVersioning=[[X9.prototype._setValue_direct,X9.prototype._setValue_direct_setNeedsUpdate,X9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_array,X9.prototype._setValue_array_setNeedsUpdate,X9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_arrayElement,X9.prototype._setValue_arrayElement_setNeedsUpdate,X9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_fromArray,X9.prototype._setValue_fromArray_setNeedsUpdate,X9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aD=new Float32Array(1);class h8 extends kK{constructor(J,Q,Z=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class $7{constructor(J=1,Q=0,Z=0){this.radius=J,this.phi=Q,this.theta=Z}set(J,Q,Z){return this.radius=J,this.phi=Q,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=p0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){if(this.radius=Math.sqrt(J*J+Q*Q+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(p0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class iK{static{iK.prototype.isMatrix2=!0}constructor(J,Q,Z,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,K){let $=this.elements;return $[0]=J,$[2]=Q,$[1]=Z,$[3]=K,this}}var AW=new x,g7=new x,q6=new x,D6=new x,BZ=new x,$U=new x,WU=new x;class EQ{constructor(J=new x,Q=new x){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){AW.subVectors(J,this.start),g7.subVectors(this.end,this.start);let Z=g7.dot(g7);if(Z===0)return 0;let $=g7.dot(AW)/Z;if(Q)$=p0($,0,1);return $}closestPointToPoint(J,Q,Z){let K=this.closestPointToPointParameter(J,Q);return this.delta(Z).multiplyScalar(K).add(this.start)}distanceSqToLine3(J,Q=$U,Z=WU){let $,W,X=this.start,Y=J.start,H=this.end,N=J.end;q6.subVectors(H,X),D6.subVectors(N,Y),BZ.subVectors(X,Y);let q=q6.dot(q6),U=D6.dot(D6),G=D6.dot(BZ);if(q<=0.00000000000000010000000000000001&&U<=0.00000000000000010000000000000001)return Q.copy(X),Z.copy(Y),Q.sub(Z),Q.dot(Q);if(q<=0.00000000000000010000000000000001)$=0,W=G/U,W=p0(W,0,1);else{let F=q6.dot(BZ);if(U<=0.00000000000000010000000000000001)W=0,$=p0(-F/q,0,1);else{let O=q6.dot(D6),L=q*U-O*O;if(L!==0)$=p0((O*G-F*U)/L,0,1);else $=0;if(W=(O*$+G)/U,W<0)W=0,$=p0(-F/q,0,1);else if(W>1)W=1,$=p0((O-F)/q,0,1)}}return Q.copy(X).addScaledVector(q6,$),Z.copy(Y).addScaledVector(D6,W),Q.distanceToSquared(Z)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class OQ extends f8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function oK(J,Q,Z,K){let $=XU(K);switch(Z){case 1021:return J*Q;case 1028:return J*Q/$.components*$.byteLength;case 1029:return J*Q/$.components*$.byteLength;case 1030:return J*Q*2/$.components*$.byteLength;case 1031:return J*Q*2/$.components*$.byteLength;case 1022:return J*Q*3/$.components*$.byteLength;case 1023:return J*Q*4/$.components*$.byteLength;case 1033:return J*Q*4/$.components*$.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function XU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window!=="undefined")if(window.__THREE__)b0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function aX(){let J=null,Q=!1,Z=null,K=null;function $(W,X){K=J.requestAnimationFrame($),Z(W,X)}return{start:function(){if(Q===!0)return;if(Z===null)return;if(J===null)return;K=J.requestAnimationFrame($),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(W){Z=W},setContext:function(W){J=W}}}function YU(J){let Q=new WeakMap;function Z(Y,H){let{array:N,usage:q}=Y,U=N.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,N,q),Y.onUploadCallback();let F;if(N instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array!=="undefined"&&N instanceof Float16Array)F=J.HALF_FLOAT;else if(N instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(N instanceof Int16Array)F=J.SHORT;else if(N instanceof Uint32Array)F=J.UNSIGNED_INT;else if(N instanceof Int32Array)F=J.INT;else if(N instanceof Int8Array)F=J.BYTE;else if(N instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(N instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+N);return{buffer:G,type:F,bytesPerElement:N.BYTES_PER_ELEMENT,version:Y.version,size:U}}function K(Y,H,N){let{array:q,updateRanges:U}=H;if(J.bindBuffer(N,Y),U.length===0)J.bufferSubData(N,0,q);else{U.sort((F,O)=>F.start-O.start);let G=0;for(let F=1;F<U.length;F++){let O=U[G],L=U[F];if(L.start<=O.start+O.count+1)O.count=Math.max(O.count,L.start+L.count-O.start);else++G,U[G]=L}U.length=G+1;for(let F=0,O=U.length;F<O;F++){let L=U[F];J.bufferSubData(N,L.start*q.BYTES_PER_ELEMENT,q,L.start,L.count)}H.clearUpdateRanges()}H.onUploadCallback()}function $(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let q=Q.get(Y);if(!q||q.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let N=Q.get(Y);if(N===void 0)Q.set(Y,Z(Y,H));else if(N.version<Y.version){if(N.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(N.buffer,Y,H),N.version=Y.version}}return{get:$,remove:W,update:X}}var HU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UU=`#ifdef USE_ALPHAHASH
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
#endif`,NU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FU=`#ifdef USE_AOMAP
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
#endif`,EU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OU=`#ifdef USE_BATCHING
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
#endif`,RU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VU=`#ifdef USE_IRIDESCENCE
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
#endif`,CU=`#ifdef USE_BUMPMAP
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
#endif`,BU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_U=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SU=`#define PI 3.141592653589793
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
} // validated`,jU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vU=`vec3 transformedNormal = objectNormal;
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
#endif`,bU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xU="gl_FragColor = linearToOutputTexel( gl_FragColor );",gU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pU=`#ifdef USE_ENVMAP
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
#endif`,mU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dU=`#ifdef USE_ENVMAP
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
#endif`,uU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lU=`#ifdef USE_ENVMAP
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
#endif`,cU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oU=`#ifdef USE_GRADIENTMAP
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
}`,aU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eU=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,JN=`#ifdef USE_ENVMAP
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
#endif`,QN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$N=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WN=`PhysicalMaterial material;
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
#endif`,XN=`uniform sampler2D dfgLUT;
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
}`,YN=`
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
#endif`,HN=`#if defined( RE_IndirectDiffuse )
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
#endif`,UN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NN=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,GN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ON=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MN=`#if defined( USE_POINTS_UV )
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
#endif`,LN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AN=`#ifdef USE_MORPHTARGETS
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
#endif`,zN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_N=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,SN=`#ifdef USE_NORMALMAP
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
#endif`,jN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sN=`float getShadowMask() {
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
}`,iN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oN=`#ifdef USE_SKINNING
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
#endif`,aN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rN=`#ifdef USE_SKINNING
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
#endif`,tN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JG=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QG=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZG=`#ifdef USE_TRANSMISSION
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
#endif`,KG=`#ifdef USE_TRANSMISSION
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
#endif`,$G=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UG=`uniform sampler2D t2D;
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
}`,NG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GG=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FG=`#include <common>
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
}`,EG=`#if DEPTH_PACKING == 3200
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
}`,OG=`#define DISTANCE
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
}`,RG=`#define DISTANCE
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
}`,MG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IG=`uniform float scale;
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
}`,VG=`uniform vec3 diffuse;
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
}`,CG=`#include <common>
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
}`,BG=`uniform vec3 diffuse;
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
}`,AG=`#define LAMBERT
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
}`,zG=`#define LAMBERT
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
}`,PG=`#define MATCAP
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
}`,kG=`#define MATCAP
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
}`,_G=`#define NORMAL
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
}`,TG=`#define NORMAL
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
}`,wG=`#define PHONG
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
}`,SG=`#define PHONG
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
}`,jG=`#define STANDARD
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
}`,vG=`#define STANDARD
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
}`,bG=`#define TOON
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
}`,yG=`#define TOON
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
}`,fG=`uniform float size;
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
}`,hG=`uniform vec3 diffuse;
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
}`,xG=`#include <common>
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
}`,gG=`uniform vec3 color;
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
}`,pG=`uniform float rotation;
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
}`,mG=`uniform vec3 diffuse;
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
}`,c0={alphahash_fragment:HU,alphahash_pars_fragment:UU,alphamap_fragment:NU,alphamap_pars_fragment:GU,alphatest_fragment:qU,alphatest_pars_fragment:DU,aomap_fragment:FU,aomap_pars_fragment:EU,batching_pars_vertex:OU,batching_vertex:RU,begin_vertex:MU,beginnormal_vertex:LU,bsdfs:IU,iridescence_fragment:VU,bumpmap_pars_fragment:CU,clipping_planes_fragment:BU,clipping_planes_pars_fragment:AU,clipping_planes_pars_vertex:zU,clipping_planes_vertex:PU,color_fragment:kU,color_pars_fragment:_U,color_pars_vertex:TU,color_vertex:wU,common:SU,cube_uv_reflection_fragment:jU,defaultnormal_vertex:vU,displacementmap_pars_vertex:bU,displacementmap_vertex:yU,emissivemap_fragment:fU,emissivemap_pars_fragment:hU,colorspace_fragment:xU,colorspace_pars_fragment:gU,envmap_fragment:pU,envmap_common_pars_fragment:mU,envmap_pars_fragment:dU,envmap_pars_vertex:uU,envmap_physical_pars_fragment:JN,envmap_vertex:lU,fog_vertex:cU,fog_pars_vertex:nU,fog_fragment:sU,fog_pars_fragment:iU,gradientmap_pars_fragment:oU,lightmap_pars_fragment:aU,lights_lambert_fragment:rU,lights_lambert_pars_fragment:tU,lights_pars_begin:eU,lights_toon_fragment:QN,lights_toon_pars_fragment:ZN,lights_phong_fragment:KN,lights_phong_pars_fragment:$N,lights_physical_fragment:WN,lights_physical_pars_fragment:XN,lights_fragment_begin:YN,lights_fragment_maps:HN,lights_fragment_end:UN,lightprobes_pars_fragment:NN,logdepthbuf_fragment:GN,logdepthbuf_pars_fragment:qN,logdepthbuf_pars_vertex:DN,logdepthbuf_vertex:FN,map_fragment:EN,map_pars_fragment:ON,map_particle_fragment:RN,map_particle_pars_fragment:MN,metalnessmap_fragment:LN,metalnessmap_pars_fragment:IN,morphinstance_vertex:VN,morphcolor_vertex:CN,morphnormal_vertex:BN,morphtarget_pars_vertex:AN,morphtarget_vertex:zN,normal_fragment_begin:PN,normal_fragment_maps:kN,normal_pars_fragment:_N,normal_pars_vertex:TN,normal_vertex:wN,normalmap_pars_fragment:SN,clearcoat_normal_fragment_begin:jN,clearcoat_normal_fragment_maps:vN,clearcoat_pars_fragment:bN,iridescence_pars_fragment:yN,opaque_fragment:fN,packing:hN,premultiplied_alpha_fragment:xN,project_vertex:gN,dithering_fragment:pN,dithering_pars_fragment:mN,roughnessmap_fragment:dN,roughnessmap_pars_fragment:uN,shadowmap_pars_fragment:lN,shadowmap_pars_vertex:cN,shadowmap_vertex:nN,shadowmask_pars_fragment:sN,skinbase_vertex:iN,skinning_pars_vertex:oN,skinning_vertex:aN,skinnormal_vertex:rN,specularmap_fragment:tN,specularmap_pars_fragment:eN,tonemapping_fragment:JG,tonemapping_pars_fragment:QG,transmission_fragment:ZG,transmission_pars_fragment:KG,uv_pars_fragment:$G,uv_pars_vertex:WG,uv_vertex:XG,worldpos_vertex:YG,background_vert:HG,background_frag:UG,backgroundCube_vert:NG,backgroundCube_frag:GG,cube_vert:qG,cube_frag:DG,depth_vert:FG,depth_frag:EG,distance_vert:OG,distance_frag:RG,equirect_vert:MG,equirect_frag:LG,linedashed_vert:IG,linedashed_frag:VG,meshbasic_vert:CG,meshbasic_frag:BG,meshlambert_vert:AG,meshlambert_frag:zG,meshmatcap_vert:PG,meshmatcap_frag:kG,meshnormal_vert:_G,meshnormal_frag:TG,meshphong_vert:wG,meshphong_frag:SG,meshphysical_vert:jG,meshphysical_frag:vG,meshtoon_vert:bG,meshtoon_frag:yG,points_vert:fG,points_frag:hG,shadow_vert:xG,shadow_frag:gG,sprite_vert:pG,sprite_frag:mG},G0={common:{diffuse:{value:new e0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new g0}},envmap:{envMap:{value:null},envMapRotation:{value:new g0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new g0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new g0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new g0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new g0},normalScale:{value:new x0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new g0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new g0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new g0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new g0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new e0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new e0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0},uvTransform:{value:new g0}},sprite:{diffuse:{value:new e0(16777215)},opacity:{value:1},center:{value:new x0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}}},n9={basic:{uniforms:p9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:c0.meshbasic_vert,fragmentShader:c0.meshbasic_frag},lambert:{uniforms:p9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new e0(0)},envMapIntensity:{value:1}}]),vertexShader:c0.meshlambert_vert,fragmentShader:c0.meshlambert_frag},phong:{uniforms:p9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new e0(0)},specular:{value:new e0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:c0.meshphong_vert,fragmentShader:c0.meshphong_frag},standard:{uniforms:p9([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new e0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag},toon:{uniforms:p9([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new e0(0)}}]),vertexShader:c0.meshtoon_vert,fragmentShader:c0.meshtoon_frag},matcap:{uniforms:p9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:c0.meshmatcap_vert,fragmentShader:c0.meshmatcap_frag},points:{uniforms:p9([G0.points,G0.fog]),vertexShader:c0.points_vert,fragmentShader:c0.points_frag},dashed:{uniforms:p9([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:c0.linedashed_vert,fragmentShader:c0.linedashed_frag},depth:{uniforms:p9([G0.common,G0.displacementmap]),vertexShader:c0.depth_vert,fragmentShader:c0.depth_frag},normal:{uniforms:p9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:c0.meshnormal_vert,fragmentShader:c0.meshnormal_frag},sprite:{uniforms:p9([G0.sprite,G0.fog]),vertexShader:c0.sprite_vert,fragmentShader:c0.sprite_frag},background:{uniforms:{uvTransform:{value:new g0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:c0.background_vert,fragmentShader:c0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new g0}},vertexShader:c0.backgroundCube_vert,fragmentShader:c0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:c0.cube_vert,fragmentShader:c0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:c0.equirect_vert,fragmentShader:c0.equirect_frag},distance:{uniforms:p9([G0.common,G0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:c0.distance_vert,fragmentShader:c0.distance_frag},shadow:{uniforms:p9([G0.lights,G0.fog,{color:{value:new e0(0)},opacity:{value:1}}]),vertexShader:c0.shadow_vert,fragmentShader:c0.shadow_frag}};n9.physical={uniforms:p9([n9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new g0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new g0},clearcoatNormalScale:{value:new x0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new g0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new g0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new g0},sheen:{value:0},sheenColor:{value:new e0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new g0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new g0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new g0},transmissionSamplerSize:{value:new x0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new g0},attenuationDistance:{value:0},attenuationColor:{value:new e0(0)},specularColor:{value:new e0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new g0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new g0},anisotropyVector:{value:new x0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new g0}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag};var RQ={r:0,b:0,g:0},dG=new M9,rX=new g0;rX.set(-1,0,0,0,1,0,0,0,1);function uG(J,Q,Z,K,$,W){let X=new e0(0),Y=$===!0?0:1,H,N,q=null,U=0,G=null;function F(R){let k=R.isScene===!0?R.background:null;if(k&&k.isTexture){let V=R.backgroundBlurriness>0;k=Q.get(k,V)}return k}function O(R){let k=!1,V=F(R);if(V===null)E(X,Y);else if(V&&V.isColor)E(V,1),k=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")Z.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||k)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function L(R,k){let V=F(k);if(V&&(V.isCubeTexture||V.mapping===i6)){if(N===void 0)N=new K8(new B6(1,1,1),new t9({name:"BackgroundCubeMaterial",uniforms:xJ(n9.backgroundCube.uniforms),vertexShader:n9.backgroundCube.vertexShader,fragmentShader:n9.backgroundCube.fragmentShader,side:o9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),N.geometry.deleteAttribute("normal"),N.geometry.deleteAttribute("uv"),N.onBeforeRender=function(A,P,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(N.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(N);if(N.material.uniforms.envMap.value=V,N.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,N.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,N.material.uniforms.backgroundRotation.value.setFromMatrix4(dG.makeRotationFromEuler(k.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)N.material.uniforms.backgroundRotation.value.premultiply(rX);if(N.material.toneMapped=o0.getTransfer(V.colorSpace)!==q9,q!==V||U!==V.version||G!==J.toneMapping)N.material.needsUpdate=!0,q=V,U=V.version,G=J.toneMapping;N.layers.enableAll(),R.unshift(N,N.geometry,N.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new K8(new Z7(2,2),new t9({name:"BackgroundMaterial",uniforms:xJ(n9.background.uniforms),vertexShader:n9.background.vertexShader,fragmentShader:n9.background.fragmentShader,side:M6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,H.material.toneMapped=o0.getTransfer(V.colorSpace)!==q9,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),q!==V||U!==V.version||G!==J.toneMapping)H.material.needsUpdate=!0,q=V,U=V.version,G=J.toneMapping;H.layers.enableAll(),R.unshift(H,H.geometry,H.material,0,0,null)}}function E(R,k){R.getRGB(RQ,wK(J)),Z.buffers.color.setClear(RQ.r,RQ.g,RQ.b,k,W)}function D(){if(N!==void 0)N.geometry.dispose(),N.material.dispose(),N=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(R,k=1){X.set(R),Y=k,E(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(R){Y=R,E(X,Y)},render:O,addToRenderList:L,dispose:D}}function lG(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},$=G(null),W=$,X=!1;function Y(j,b,m,T,w){let n=!1,u=U(j,T,m,b);if(W!==u)W=u,N(W.object);if(n=F(j,T,m,w),n)O(j,T,m,w);if(w!==null)Q.update(w,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,V(j,b,m,T),w!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(w).buffer)}}function H(){return J.createVertexArray()}function N(j){return J.bindVertexArray(j)}function q(j){return J.deleteVertexArray(j)}function U(j,b,m,T){let w=T.wireframe===!0,n=K[b.id];if(n===void 0)n={},K[b.id]=n;let u=j.isInstancedMesh===!0?j.id:0,$0=n[u];if($0===void 0)$0={},n[u]=$0;let i=$0[m.id];if(i===void 0)i={},$0[m.id]=i;let Z0=i[w];if(Z0===void 0)Z0=G(H()),i[w]=Z0;return Z0}function G(j){let b=[],m=[],T=[];for(let w=0;w<Z;w++)b[w]=0,m[w]=0,T[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:m,attributeDivisors:T,object:j,attributes:{},index:null}}function F(j,b,m,T){let w=W.attributes,n=b.attributes,u=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=w[i],w0=n[i];if(w0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)w0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)w0=j.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==w0)return!0;if(w0&&X0.data!==w0.data)return!0;u++}if(W.attributesNum!==u)return!0;if(W.index!==T)return!0;return!1}function O(j,b,m,T){let w={},n=b.attributes,u=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=n[i];if(X0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)X0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)X0=j.instanceColor}let w0={};if(w0.attribute=X0,X0&&X0.data)w0.data=X0.data;w[i]=w0,u++}W.attributes=w,W.attributesNum=u,W.index=T}function L(){let j=W.newAttributes;for(let b=0,m=j.length;b<m;b++)j[b]=0}function E(j){D(j,0)}function D(j,b){let{newAttributes:m,enabledAttributes:T,attributeDivisors:w}=W;if(m[j]=1,T[j]===0)J.enableVertexAttribArray(j),T[j]=1;if(w[j]!==b)J.vertexAttribDivisor(j,b),w[j]=b}function R(){let{newAttributes:j,enabledAttributes:b}=W;for(let m=0,T=b.length;m<T;m++)if(b[m]!==j[m])J.disableVertexAttribArray(m),b[m]=0}function k(j,b,m,T,w,n,u){if(u===!0)J.vertexAttribIPointer(j,b,m,w,n);else J.vertexAttribPointer(j,b,m,T,w,n)}function V(j,b,m,T){L();let w=T.attributes,n=m.getAttributes(),u=b.defaultAttributeValues;for(let $0 in n){let i=n[$0];if(i.location>=0){let Z0=w[$0];if(Z0===void 0){if($0==="instanceMatrix"&&j.instanceMatrix)Z0=j.instanceMatrix;if($0==="instanceColor"&&j.instanceColor)Z0=j.instanceColor}if(Z0!==void 0){let{normalized:X0,itemSize:w0}=Z0,T0=Q.get(Z0);if(T0===void 0)continue;let{buffer:n0,type:u0,bytesPerElement:S}=T0,g=u0===J.INT||u0===J.UNSIGNED_INT||Z0.gpuType===fZ;if(Z0.isInterleavedBufferAttribute){let d=Z0.data,a=d.stride,Q0=Z0.offset;if(d.isInstancedInterleavedBuffer){for(let r=0;r<i.locationSize;r++)D(i.location+r,d.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=d.meshPerAttribute*d.count}else for(let r=0;r<i.locationSize;r++)E(i.location+r);J.bindBuffer(J.ARRAY_BUFFER,n0);for(let r=0;r<i.locationSize;r++)k(i.location+r,w0/i.locationSize,u0,X0,a*S,(Q0+w0/i.locationSize*r)*S,g)}else{if(Z0.isInstancedBufferAttribute){for(let d=0;d<i.locationSize;d++)D(i.location+d,Z0.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let d=0;d<i.locationSize;d++)E(i.location+d);J.bindBuffer(J.ARRAY_BUFFER,n0);for(let d=0;d<i.locationSize;d++)k(i.location+d,w0/i.locationSize,u0,X0,w0*S,w0/i.locationSize*d*S,g)}}else if(u!==void 0){let X0=u[$0];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(i.location,X0);break;case 3:J.vertexAttrib3fv(i.location,X0);break;case 4:J.vertexAttrib4fv(i.location,X0);break;default:J.vertexAttrib1fv(i.location,X0)}}}}R()}function A(){B();for(let j in K){let b=K[j];for(let m in b){let T=b[m];for(let w in T){let n=T[w];for(let u in n)q(n[u].object),delete n[u];delete T[w]}}delete K[j]}}function P(j){if(K[j.id]===void 0)return;let b=K[j.id];for(let m in b){let T=b[m];for(let w in T){let n=T[w];for(let u in n)q(n[u].object),delete n[u];delete T[w]}}delete K[j.id]}function _(j){for(let b in K){let m=K[b];for(let T in m){let w=m[T];if(w[j.id]===void 0)continue;let n=w[j.id];for(let u in n)q(n[u].object),delete n[u];delete w[j.id]}}}function I(j){for(let b in K){let m=K[b],T=j.isInstancedMesh===!0?j.id:0,w=m[T];if(w===void 0)continue;for(let n in w){let u=w[n];for(let $0 in u)q(u[$0].object),delete u[$0];delete w[n]}if(delete m[T],Object.keys(m).length===0)delete K[b]}}function B(){if(p(),X=!0,W===$)return;W=$,N(W.object)}function p(){$.geometry=null,$.program=null,$.wireframe=!1}return{setup:Y,reset:B,resetDefaultState:p,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfObject:I,releaseStatesOfProgram:_,initAttributes:L,enableAttribute:E,disableUnusedAttributes:R}}function cG(J,Q,Z){let K;function $(H){K=H}function W(H,N){J.drawArrays(K,H,N),Z.update(N,K,1)}function X(H,N,q){if(q===0)return;J.drawArraysInstanced(K,H,N,q),Z.update(N,K,q)}function Y(H,N,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,N,0,q);let G=0;for(let F=0;F<q;F++)G+=N[F];Z.update(G,K,1)}this.setMode=$,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function nG(J,Q,Z,K){let $;function W(){if($!==void 0)return $;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");$=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else $=0;return $}function X(_){if(_!==y8&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let I=_===b8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==C8&&_!==QJ&&!I&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let N=Z.precision!==void 0?Z.precision:"highp",q=H(N);if(q!==N)b0("WebGLRenderer:",N,"not supported, using",q,"instead."),N=q;let U=Z.logarithmicDepthBuffer===!0,G=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if(Z.reversedDepthBuffer===!0&&G===!1)b0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),D=J.getParameter(J.MAX_VERTEX_ATTRIBS),R=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:N,logarithmicDepthBuffer:U,reversedDepthBuffer:G,maxTextures:F,maxVertexTextures:O,maxTextureSize:L,maxCubemapSize:E,maxAttributes:D,maxVertexUniforms:R,maxVaryings:k,maxFragmentUniforms:V,maxSamples:A,samples:P}}function sG(J){let Q=this,Z=null,K=0,$=!1,W=!1,X=new H8,Y=new g0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(U,G){let F=U.length!==0||G||K!==0||$;return $=G,K=U.length,F},this.beginShadows=function(){W=!0,q(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(U,G){Z=q(U,G,0)},this.setState=function(U,G,F){let{clippingPlanes:O,clipIntersection:L,clipShadows:E}=U,D=J.get(U);if(!$||O===null||O.length===0||W&&!E)if(W)q(null);else N();else{let R=W?0:K,k=R*4,V=D.clippingState||null;H.value=V,V=q(O,G,k,F);for(let A=0;A!==k;++A)V[A]=Z[A];D.clippingState=V,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=R}};function N(){if(H.value!==Z)H.value=Z,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function q(U,G,F,O){let L=U!==null?U.length:0,E=null;if(L!==0){if(E=H.value,O!==!0||E===null){let D=F+L*4,R=G.matrixWorldInverse;if(Y.getNormalMatrix(R),E===null||E.length<D)E=new Float32Array(D);for(let k=0,V=F;k!==L;++k,V+=4)X.copy(U[k]).applyMatrix4(R,Y),X.normal.toArray(E,V),E[V+3]=X.constant}H.value=E,H.needsUpdate=!0}return Q.numPlanes=L,Q.numIntersection=0,E}}var z6=4,iG=6,oG=20,aG=256,W7=new DQ,TX=new e0,aK=null,rK=0,tK=0,eK=!1,rG=new x,dJ=new x;class Z${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,Z=0.1,K=100,$={}){let{size:W=256,position:X=rG}=$;aK=this._renderer.getRenderTarget(),rK=this._renderer.getActiveCubeFace(),tK=this._renderer.getActiveMipmapLevel(),eK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Z,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=jX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=SX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(aK,rK,tK),this._renderer.xr.enabled=eK,J.scissorTest=!1,A6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===I6||J.mapping===SJ)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);aK=this._renderer.getRenderTarget(),rK=this._renderer.getActiveCubeFace(),tK=this._renderer.getActiveMipmapLevel(),eK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:a9,minFilter:a9,generateMipmaps:!1,type:b8,format:y8,colorSpace:LK,depthBuffer:!1},K=wX(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=wX(J,Q,Z);let{_lodMax:$}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tG($)),this._blurMaterial=J5($,J,Q),this._ggxMaterial=eG($,J,Q)}return K}_compileMaterial(J){let Q=new K8(new q8,J);this._renderer.compile(Q,W7)}_sceneToCubeUV(J,Q,Z,K,$){let Y=new l9(90,1,Q,Z),H=[1,-1,1,1,1,1],N=[1,1,1,-1,-1,-1],q=this._renderer,U=q.autoClear,G=q.toneMapping;if(q.getClearColor(TX),q.toneMapping=V8,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(K),q.clearDepth(),q.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new K8(new B6,new XQ({name:"PMREM.Background",side:o9,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,L=O.material,E=!1,D=J.background;if(D){if(D.isColor)L.color.copy(D),J.background=null,E=!0}else L.color.copy(TX),E=!0;for(let R=0;R<6;R++){let k=R%3;if(k===0)Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x+N[R],$.y,$.z);else if(k===1)Y.up.set(0,0,H[R]),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y+N[R],$.z);else Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y,$.z+N[R]);let V=this._cubeSize;if(A6(K,k*V,R>2?V:0,V,V),q.setRenderTarget(K),E)q.render(O,Y);q.render(J,Y)}q.toneMapping=G,q.autoClear=U,J.background=D}_textureToCubeUV(J,Q){let Z=this._renderer,K=J.mapping===I6||J.mapping===SJ;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=jX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=SX();let $=K?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=$;let X=$.uniforms;X.envMap.value=J;let Y=this._cubeSize;A6(Q,0,0,3*Y,2*Y),Z.setRenderTarget(Q),Z.render(W,W7)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let $=1;$<K;$++)this._applyGGXFilter(J,$-1,$);Q.autoClear=Z}_applyGGXFilter(J,Q,Z){let K=this._renderer,$=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[Z];X.material=W;let Y=W.uniforms,H=Z/(this._lodMeshes.length-1),N=Q/(this._lodMeshes.length-1),q=Math.sqrt(H*H-N*N),U=H*1.25,G=q*U,{_lodMax:F}=this,O=this._sizeLods[Z],L=3*O*(Z>F-z6?Z-F+z6:0),E=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=F-Q,A6($,L,E,3*O,2*O),K.setRenderTarget($),K.render(X,W7),Y.envMap.value=$.texture,Y.roughness.value=0,Y.mipInt.value=F-Z,A6(J,L,E,3*O,2*O),K.setRenderTarget(J),K.render(X,W7)}_blur(J,Q,Z,K){let $=this._pingPongRenderTarget,W=Math.min(K,Math.PI)/Math.SQRT2;this._blurPass(J,$,Q,Z,W),this._blurPass($,J,Z,Z,W)}_blurPass(J,Q,Z,K,$){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[K];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=$,H.mipInt.value=this._lodMax-Z;let N=this._sizeLods[K],q=3*N*(K>this._lodMax-z6?K-this._lodMax+z6:0),U=4*(this._cubeSize-N);A6(Q,q,U,3*N,2*N),W.setRenderTarget(Q),W.render(Y,W7)}}function tG(J){let Q=[],Z=[],K=J,$=J-z6+1+iG;for(let W=0;W<$;W++){let X=Math.pow(2,K);Q.push(X);let Y=1/(X-2),H=-Y,N=1+Y,q=[H,H,N,H,N,N,H,H,N,N,H,N],U=6,G=6,F=3,O=new Float32Array(F*G*U),L=new Float32Array(F*G*U);for(let D=0;D<U;D++){let R=D%3*2/3-1,k=D>2?0:-1,V=[R,k,0,R+0.6666666666666666,k,0,R+0.6666666666666666,k+1,0,R,k,0,R+0.6666666666666666,k+1,0,R,k+1,0];O.set(V,F*G*D);for(let A=0;A<G;A++){let P=q[A*2]*2-1,_=q[A*2+1]*2-1;if(D===0)dJ.set(1,_,P);else if(D===1)dJ.set(-P,1,-_);else if(D===2)dJ.set(-P,_,1);else if(D===3)dJ.set(-1,_,-P);else if(D===4)dJ.set(-P,-1,_);else dJ.set(P,_,-1);dJ.toArray(L,(D*G+A)*F)}}let E=new q8;if(E.setAttribute("position",new N8(O,F)),E.setAttribute("outputDirection",new N8(L,F)),Z.push(new K8(E,null)),K>z6)K--}return{lodMeshes:Z,sizeLods:Q}}function wX(J,Q,Z){let K=new Z8(J,Q,Z);return K.texture.mapping=i6,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function A6(J,Q,Z,K,$){J.viewport.set(Q,Z,K,$),J.scissor.set(Q,Z,K,$)}function eG(J,Q,Z){return new t9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:LQ(),fragmentShader:`

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
		`,blending:v8,depthTest:!1,depthWrite:!1})}function J5(J,Q,Z){return new t9({name:"SphericalGaussianBlur",defines:{SAMPLES:oG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:LQ(),fragmentShader:`

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
		`,blending:v8,depthTest:!1,depthWrite:!1})}function SX(){return new t9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:LQ(),fragmentShader:`

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
		`,blending:v8,depthTest:!1,depthWrite:!1})}function jX(){return new t9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:LQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:v8,depthTest:!1,depthWrite:!1})}function LQ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class W$ extends Z8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},K=[Z,Z,Z,Z,Z,Z];this.texture=new HQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new B6(5,5,5),$=new t9({name:"CubemapFromEquirect",uniforms:xJ(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:o9,blending:v8});$.uniforms.tEquirect.value=Q;let W=new K8(K,$),X=Q.minFilter;if(Q.minFilter===jJ)Q.minFilter=a9;return new lK(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,Z=!0,K=!0){let $=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,Z,K);J.setRenderTarget($)}}function Q5(J){let Q=new WeakMap,Z=new WeakMap,K=null;function $(G,F=!1){if(G===null||G===void 0)return null;if(F)return X(G);return W(G)}function W(G){if(G&&G.isTexture){let F=G.mapping;if(F===d7||F===u7)if(Q.has(G)){let O=Q.get(G).texture;return Y(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let L=new W$(O.height);return L.fromEquirectangularTexture(J,G),Q.set(G,L),G.addEventListener("dispose",N),Y(L.texture,G.mapping)}else return null}}return G}function X(G){if(G&&G.isTexture){let F=G.mapping,O=F===d7||F===u7,L=F===I6||F===SJ;if(O||L){let E=Z.get(G),D=E!==void 0?E.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==D){if(K===null)K=new Z$(J);return E=O?K.fromEquirectangular(G,E):K.fromCubemap(G,E),E.texture.pmremVersion=G.pmremVersion,Z.set(G,E),E.texture}else if(E!==void 0)return E.texture;else{let R=G.image;if(O&&R&&R.height>0||L&&R&&H(R)){if(K===null)K=new Z$(J);return E=O?K.fromEquirectangular(G):K.fromCubemap(G),E.texture.pmremVersion=G.pmremVersion,Z.set(G,E),G.addEventListener("dispose",q),E.texture}else return null}}}return G}function Y(G,F){if(F===d7)G.mapping=I6;else if(F===u7)G.mapping=SJ;return G}function H(G){let F=0,O=6;for(let L=0;L<O;L++)if(G[L]!==void 0)F++;return F===O}function N(G){let F=G.target;F.removeEventListener("dispose",N);let O=Q.get(F);if(O!==void 0)Q.delete(F),O.dispose()}function q(G){let F=G.target;F.removeEventListener("dispose",q);let O=Z.get(F);if(O!==void 0)Z.delete(F),O.dispose()}function U(){if(Q=new WeakMap,Z=new WeakMap,K!==null)K.dispose(),K=null}return{get:$,dispose:U}}function Z5(J){let Q={};function Z(K){if(Q[K]!==void 0)return Q[K];let $=J.getExtension(K);return Q[K]=$,$}return{has:function(K){return Z(K)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(K){let $=Z(K);if($===null)wJ("WebGLRenderer: "+K+" extension not supported.");return $}}}function K5(J,Q,Z,K){let $={},W=new WeakMap;function X(U){let G=U.target;if(G.index!==null)Q.remove(G.index);for(let O in G.attributes)Q.remove(G.attributes[O]);G.removeEventListener("dispose",X),delete $[G.id];let F=W.get(G);if(F)Q.remove(F),W.delete(G);if(K.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;Z.memory.geometries--}function Y(U,G){if($[G.id]===!0)return G;return G.addEventListener("dispose",X),$[G.id]=!0,Z.memory.geometries++,G}function H(U){let G=U.attributes;for(let F in G)Q.update(G[F],J.ARRAY_BUFFER)}function N(U){let G=[],F=U.index,O=U.attributes.position,L=0;if(O===void 0)return;if(F!==null){let R=F.array;L=F.version;for(let k=0,V=R.length;k<V;k+=3){let A=R[k+0],P=R[k+1],_=R[k+2];G.push(A,P,P,_,_,A)}}else{let R=O.array;L=O.version;for(let k=0,V=R.length/3-1;k<V;k+=3){let A=k+0,P=k+1,_=k+2;G.push(A,P,P,_,_,A)}}let E=new(O.count>=65535?WQ:$Q)(G,1);E.version=L;let D=W.get(U);if(D)Q.remove(D);W.set(U,E)}function q(U){let G=W.get(U);if(G){let F=U.index;if(F!==null){if(G.version<F.version)N(U)}}else N(U);return W.get(U)}return{get:Y,update:H,getWireframeAttribute:q}}function $5(J,Q,Z){let K;function $(U){K=U}let W,X;function Y(U){W=U.type,X=U.bytesPerElement}function H(U,G){J.drawElements(K,G,W,U*X),Z.update(G,K,1)}function N(U,G,F){if(F===0)return;J.drawElementsInstanced(K,G,W,U*X,F),Z.update(G,K,F)}function q(U,G,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,G,0,W,U,0,F);let L=0;for(let E=0;E<F;E++)L+=G[E];Z.update(L,K,1)}this.setMode=$,this.setIndex=Y,this.render=H,this.renderInstances=N,this.renderMultiDraw=q}function W5(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function K(W,X,Y){switch(Z.calls++,X){case J.TRIANGLES:Z.triangles+=Y*(W/3);break;case J.LINES:Z.lines+=Y*(W/2);break;case J.LINE_STRIP:Z.lines+=Y*(W-1);break;case J.LINE_LOOP:Z.lines+=Y*W;break;case J.POINTS:Z.points+=Y*W;break;default:f0("WebGLInfo: Unknown draw mode:",X);break}}function $(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:$,update:K}}function X5(J,Q,Z){let K=new WeakMap,$=new Y9;function W(X,Y,H){let N=X.morphTargetInfluences,q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,U=q!==void 0?q.length:0,G=K.get(Y);if(G===void 0||G.count!==U){let B=function(){_.dispose(),K.delete(Y),Y.removeEventListener("dispose",B)};if(G!==void 0)G.texture.dispose();let F=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,L=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],D=Y.morphAttributes.normal||[],R=Y.morphAttributes.color||[],k=0;if(F===!0)k=1;if(O===!0)k=2;if(L===!0)k=3;let V=Y.attributes.position.count*k,A=1;if(V>Q.maxTextureSize)A=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let P=new Float32Array(V*A*4*U),_=new QQ(P,V,A,U);_.type=QJ,_.needsUpdate=!0;let I=k*4;for(let p=0;p<U;p++){let j=E[p],b=D[p],m=R[p],T=V*A*4*p;for(let w=0;w<j.count;w++){let n=w*I;if(F===!0)$.fromBufferAttribute(j,w),P[T+n+0]=$.x,P[T+n+1]=$.y,P[T+n+2]=$.z,P[T+n+3]=0;if(O===!0)$.fromBufferAttribute(b,w),P[T+n+4]=$.x,P[T+n+5]=$.y,P[T+n+6]=$.z,P[T+n+7]=0;if(L===!0)$.fromBufferAttribute(m,w),P[T+n+8]=$.x,P[T+n+9]=$.y,P[T+n+10]=$.z,P[T+n+11]=m.itemSize===4?$.w:1}}G={count:U,texture:_,size:new x0(V,A)},K.set(Y,G),Y.addEventListener("dispose",B)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,Z);else{let F=0;for(let L=0;L<N.length;L++)F+=N[L];let O=Y.morphTargetsRelative?1:1-F;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",N)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Z),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function Y5(J,Q,Z,K,$){let W=new WeakMap;function X(N){let q=$.render.frame,U=N.geometry,G=Q.get(N,U);if(W.get(G)!==q)Q.update(G),W.set(G,q);if(N.isInstancedMesh){if(N.hasEventListener("dispose",H)===!1)N.addEventListener("dispose",H);if(W.get(N)!==q){if(Z.update(N.instanceMatrix,J.ARRAY_BUFFER),N.instanceColor!==null)Z.update(N.instanceColor,J.ARRAY_BUFFER);W.set(N,q)}}if(N.isSkinnedMesh){let F=N.skeleton;if(W.get(F)!==q)F.update(),W.set(F,q)}return G}function Y(){W=new WeakMap}function H(N){let q=N.target;if(q.removeEventListener("dispose",H),K.releaseStatesOfObject(q),Z.remove(q.instanceMatrix),q.instanceColor!==null)Z.remove(q.instanceColor)}return{update:X,dispose:Y}}var H5={[TZ]:"LINEAR_TONE_MAPPING",[wZ]:"REINHARD_TONE_MAPPING",[SZ]:"CINEON_TONE_MAPPING",[jZ]:"ACES_FILMIC_TONE_MAPPING",[bZ]:"AGX_TONE_MAPPING",[yZ]:"NEUTRAL_TONE_MAPPING",[vZ]:"CUSTOM_TONE_MAPPING"};function U5(J,Q,Z,K,$,W){let X=new Z8(Q,Z,{type:J,depthBuffer:$,stencilBuffer:W,samples:K?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,N=new q8;N.setAttribute("position",new c9([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new c9([0,2,0,0,2,0],2));let q=new SK({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),U=new K8(N,q),G=new DQ(-1,1,1,-1,0,1),F=null,O=null,L=!1,E,D=null,R=[],k=!1;this.setSize=function(V,A){if(X.setSize(V,A),Y!==null)Y.setSize(V,A);if(H!==null)H.setSize(V,A);for(let P=0;P<R.length;P++){let _=R[P];if(_.setSize)_.setSize(V,A)}},this.setEffects=function(V){R=V,k=R.length>0&&R[0].isRenderPass===!0;let{width:A,height:P}=X;if(R.length>0&&Y===null)Y=new Z8(A,P,{type:b8,depthBuffer:!1,stencilBuffer:!1}),H=new Z8(A,P,{type:b8,depthBuffer:!1,stencilBuffer:!1});for(let _=0;_<R.length;_++){let I=R[_];if(I.setSize)I.setSize(A,P)}},this.begin=function(V,A){if(L)return!1;if(V.toneMapping===V8&&R.length===0)return!1;if(D=A,A!==null){let{width:P,height:_}=A;if(X.width!==P||X.height!==_)this.setSize(P,_)}if(k===!1)V.setRenderTarget(X);return E=V.toneMapping,V.toneMapping=V8,!0},this.hasRenderPass=function(){return k},this.end=function(V,A){V.toneMapping=E,L=!0;let P=X,_=Y;for(let I=0;I<R.length;I++){let B=R[I];if(B.enabled===!1)continue;if(B.render(V,_,P,A),B.needsSwap!==!1)P=_,_=_===Y?H:Y}if(F!==V.outputColorSpace||O!==V.toneMapping){if(F=V.outputColorSpace,O=V.toneMapping,q.defines={},o0.getTransfer(F)===q9)q.defines.SRGB_TRANSFER="";let I=H5[O];if(I)q.defines[I]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=P.texture,V.setRenderTarget(D),V.render(U,G),D=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();N.dispose(),q.dispose()}}var tX=new x9,K$=new hJ(1,1),eX=new QQ,JY=new PK,QY=new HQ,vX=[],bX=[],yX=new Float32Array(16),fX=new Float32Array(9),hX=new Float32Array(4);function P6(J,Q,Z){let K=J[0];if(K<=0||K>0)return J;let $=Q*Z,W=vX[$];if(W===void 0)W=new Float32Array($),vX[$]=W;if(Q!==0){K.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=Z,J[X].toArray(W,Y)}return W}function z9(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,K=J.length;Z<K;Z++)if(J[Z]!==Q[Z])return!1;return!0}function P9(J,Q){for(let Z=0,K=Q.length;Z<K;Z++)J[Z]=Q[Z]}function IQ(J,Q){let Z=bX[Q];if(Z===void 0)Z=new Int32Array(Q),bX[Q]=Z;for(let K=0;K!==Q;++K)Z[K]=J.allocateTextureUnit();return Z}function N5(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function G5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z9(Z,Q))return;J.uniform2fv(this.addr,Q),P9(Z,Q)}}function q5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(z9(Z,Q))return;J.uniform3fv(this.addr,Q),P9(Z,Q)}}function D5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z9(Z,Q))return;J.uniform4fv(this.addr,Q),P9(Z,Q)}}function F5(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z9(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),P9(Z,Q)}else{if(z9(Z,K))return;hX.set(K),J.uniformMatrix2fv(this.addr,!1,hX),P9(Z,K)}}function E5(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z9(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),P9(Z,Q)}else{if(z9(Z,K))return;fX.set(K),J.uniformMatrix3fv(this.addr,!1,fX),P9(Z,K)}}function O5(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z9(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),P9(Z,Q)}else{if(z9(Z,K))return;yX.set(K),J.uniformMatrix4fv(this.addr,!1,yX),P9(Z,K)}}function R5(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function M5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z9(Z,Q))return;J.uniform2iv(this.addr,Q),P9(Z,Q)}}function L5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(z9(Z,Q))return;J.uniform3iv(this.addr,Q),P9(Z,Q)}}function I5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z9(Z,Q))return;J.uniform4iv(this.addr,Q),P9(Z,Q)}}function V5(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function C5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z9(Z,Q))return;J.uniform2uiv(this.addr,Q),P9(Z,Q)}}function B5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(z9(Z,Q))return;J.uniform3uiv(this.addr,Q),P9(Z,Q)}}function A5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z9(Z,Q))return;J.uniform4uiv(this.addr,Q),P9(Z,Q)}}function z5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_2D_SHADOW)K$.compareFunction=Z.isReversedDepthBuffer()?e7:t7,W=K$;else W=tX;Z.setTexture2D(Q||W,$)}function P5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture3D(Q||JY,$)}function k5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTextureCube(Q||QY,$)}function _5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture2DArray(Q||eX,$)}function T5(J){switch(J){case 5126:return N5;case 35664:return G5;case 35665:return q5;case 35666:return D5;case 35674:return F5;case 35675:return E5;case 35676:return O5;case 5124:case 35670:return R5;case 35667:case 35671:return M5;case 35668:case 35672:return L5;case 35669:case 35673:return I5;case 5125:return V5;case 36294:return C5;case 36295:return B5;case 36296:return A5;case 35678:case 36198:case 36298:case 36306:case 35682:return z5;case 35679:case 36299:case 36307:return P5;case 35680:case 36300:case 36308:case 36293:return k5;case 36289:case 36303:case 36311:case 36292:return _5}}function w5(J,Q){J.uniform1fv(this.addr,Q)}function S5(J,Q){let Z=P6(Q,this.size,2);J.uniform2fv(this.addr,Z)}function j5(J,Q){let Z=P6(Q,this.size,3);J.uniform3fv(this.addr,Z)}function v5(J,Q){let Z=P6(Q,this.size,4);J.uniform4fv(this.addr,Z)}function b5(J,Q){let Z=P6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function y5(J,Q){let Z=P6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function f5(J,Q){let Z=P6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function h5(J,Q){J.uniform1iv(this.addr,Q)}function x5(J,Q){J.uniform2iv(this.addr,Q)}function g5(J,Q){J.uniform3iv(this.addr,Q)}function p5(J,Q){J.uniform4iv(this.addr,Q)}function m5(J,Q){J.uniform1uiv(this.addr,Q)}function d5(J,Q){J.uniform2uiv(this.addr,Q)}function u5(J,Q){J.uniform3uiv(this.addr,Q)}function l5(J,Q){J.uniform4uiv(this.addr,Q)}function c5(J,Q,Z){let K=this.cache,$=Q.length,W=IQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),P9(K,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=K$;else X=tX;for(let Y=0;Y!==$;++Y)Z.setTexture2D(Q[Y]||X,W[Y])}function n5(J,Q,Z){let K=this.cache,$=Q.length,W=IQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),P9(K,W);for(let X=0;X!==$;++X)Z.setTexture3D(Q[X]||JY,W[X])}function s5(J,Q,Z){let K=this.cache,$=Q.length,W=IQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),P9(K,W);for(let X=0;X!==$;++X)Z.setTextureCube(Q[X]||QY,W[X])}function i5(J,Q,Z){let K=this.cache,$=Q.length,W=IQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),P9(K,W);for(let X=0;X!==$;++X)Z.setTexture2DArray(Q[X]||eX,W[X])}function o5(J){switch(J){case 5126:return w5;case 35664:return S5;case 35665:return j5;case 35666:return v5;case 35674:return b5;case 35675:return y5;case 35676:return f5;case 5124:case 35670:return h5;case 35667:case 35671:return x5;case 35668:case 35672:return g5;case 35669:case 35673:return p5;case 5125:return m5;case 36294:return d5;case 36295:return u5;case 36296:return l5;case 35678:case 36198:case 36298:case 36306:case 35682:return c5;case 35679:case 36299:case 36307:return n5;case 35680:case 36300:case 36308:case 36293:return s5;case 36289:case 36303:case 36311:case 36292:return i5}}class ZY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=T5(Q.type)}}class KY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=o5(Q.type)}}class $Y{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let K=this.seq;for(let $=0,W=K.length;$!==W;++$){let X=K[$];X.setValue(J,Q[X.id],Z)}}}var J$=/(\w+)(\])?(\[|\.)?/g;function xX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function a5(J,Q,Z){let K=J.name,$=K.length;J$.lastIndex=0;while(!0){let W=J$.exec(K),X=J$.lastIndex,Y=W[1],H=W[2]==="]",N=W[3];if(H)Y=Y|0;if(N===void 0||N==="["&&X+2===$){xX(Z,N===void 0?new ZY(Y,J,Q):new KY(Y,J,Q));break}else{let U=Z.map[Y];if(U===void 0)U=new $Y(Y),xX(Z,U);Z=U}}}class H7{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<Z;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);a5(X,Y,this)}let K=[],$=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(W);else $.push(W);if(K.length>0)this.seq=K.concat($)}setValue(J,Q,Z,K){let $=this.map[Q];if($!==void 0)$.setValue(J,Z,K)}setOptional(J,Q,Z){let K=Q[Z];if(K!==void 0)this.setValue(J,Z,K)}static upload(J,Q,Z,K){for(let $=0,W=Q.length;$!==W;++$){let X=Q[$],Y=Z[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let Z=[];for(let K=0,$=J.length;K!==$;++K){let W=J[K];if(W.id in Q)Z.push(W)}return Z}}function gX(J,Q,Z){let K=J.createShader(Q);return J.shaderSource(K,Z),J.compileShader(K),K}var r5=37297,t5=0;function e5(J,Q){let Z=J.split(`
`),K=[],$=Math.max(Q-6,0),W=Math.min(Q+6,Z.length);for(let X=$;X<W;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${Z[X]}`)}return K.join(`
`)}var pX=new g0;function Jq(J){o0._getMatrix(pX,o0.workingColorSpace,J);let Q=`mat3( ${pX.elements.map((Z)=>Z.toFixed(4))} )`;switch(o0.getTransfer(J)){case IK:return[Q,"LinearTransferOETF"];case q9:return[Q,"sRGBTransferOETF"];default:return b0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function mX(J,Q,Z){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(K&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return Z.toUpperCase()+`

`+W+`

`+e5(J.getShaderSource(Q),Y)}else return W}function Qq(J,Q){let Z=Jq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}var Zq={[TZ]:"Linear",[wZ]:"Reinhard",[SZ]:"Cineon",[jZ]:"ACESFilmic",[bZ]:"AgX",[yZ]:"Neutral",[vZ]:"Custom"};function Kq(J,Q){let Z=Zq[Q];if(Z===void 0)return b0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var MQ=new x;function $q(){o0.getLuminanceCoefficients(MQ);let J=MQ.x.toFixed(4),Q=MQ.y.toFixed(4),Z=MQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Wq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Y7).join(`
`)}function Xq(J){let Q=[];for(let Z in J){let K=J[Z];if(K===!1)continue;Q.push("#define "+Z+" "+K)}return Q.join(`
`)}function Yq(J,Q){let Z={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let $=0;$<K;$++){let W=J.getActiveAttrib(Q,$),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;Z[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return Z}function Y7(J){return J!==""}function dX(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function uX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Hq=/^[ \t]*#include +<([\w\d./]+)>/gm;function $$(J){return J.replace(Hq,Nq)}var Uq=new Map;function Nq(J,Q){let Z=c0[Q];if(Z===void 0){let K=Uq.get(Q);if(K!==void 0)Z=c0[K],b0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return $$(Z)}var Gq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lX(J){return J.replace(Gq,qq)}function qq(J,Q,Z,K){let $="";for(let W=parseInt(Q);W<parseInt(Z);W++)$+=K.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return $}function cX(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Dq={[n6]:"SHADOWMAP_TYPE_PCF",[R6]:"SHADOWMAP_TYPE_VSM"};function Fq(J){return Dq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Eq={[I6]:"ENVMAP_TYPE_CUBE",[SJ]:"ENVMAP_TYPE_CUBE",[i6]:"ENVMAP_TYPE_CUBE_UV"};function Oq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Eq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rq={[SJ]:"ENVMAP_MODE_REFRACTION"};function Mq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Rq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lq={[JX]:"ENVMAP_BLENDING_MULTIPLY",[QX]:"ENVMAP_BLENDING_MIX",[ZX]:"ENVMAP_BLENDING_ADD"};function Iq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Lq[J.combine]||"ENVMAP_BLENDING_NONE"}function Vq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:K,maxMip:Z}}function Cq(J,Q,Z,K){let $=J.getContext(),W=Z.defines,X=Z.vertexShader,Y=Z.fragmentShader,H=Fq(Z),N=Oq(Z),q=Mq(Z),U=Iq(Z),G=Vq(Z),F=Wq(Z),O=Xq(W),L=$.createProgram(),E,D,R=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(Y7).join(`
`),E.length>0)E+=`
`;if(D=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(Y7).join(`
`),D.length>0)D+=`
`}else E=[cX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+q:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexNormals?"#define HAS_NORMAL":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Y7).join(`
`),D=[cX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+N:"",Z.envMap?"#define "+q:"",Z.envMap?"#define "+U:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.retroreflection?"#define USE_RETROREFLECTION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor?"#define USE_COLOR":"",Z.vertexAlphas||Z.batchingColor?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==V8?"#define TONE_MAPPING":"",Z.toneMapping!==V8?c0.tonemapping_pars_fragment:"",Z.toneMapping!==V8?Kq("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",c0.colorspace_pars_fragment,Qq("linearToOutputTexel",Z.outputColorSpace),$q(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(Y7).join(`
`);if(X=$$(X),X=dX(X,Z),X=uX(X,Z),Y=$$(Y),Y=dX(Y,Z),Y=uX(Y,Z),X=lX(X),Y=lX(Y),Z.isRawShaderMaterial!==!0)R=`#version 300 es
`,E=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,D=["#define varying in",Z.glslVersion===VK?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===VK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D;let k=R+E+X,V=R+D+Y,A=gX($,$.VERTEX_SHADER,k),P=gX($,$.FRAGMENT_SHADER,V);if($.attachShader(L,A),$.attachShader(L,P),Z.index0AttributeName!==void 0)$.bindAttribLocation(L,0,Z.index0AttributeName);else if(Z.hasPositionAttribute===!0)$.bindAttribLocation(L,0,"position");$.linkProgram(L);function _(j){if(J.debug.checkShaderErrors){let b=$.getProgramInfoLog(L)||"",m=$.getShaderInfoLog(A)||"",T=$.getShaderInfoLog(P)||"",w=b.trim(),n=m.trim(),u=T.trim(),$0=!0,i=!0;if($.getProgramParameter(L,$.LINK_STATUS)===!1)if($0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError($,L,A,P);else{let Z0=mX($,A,"vertex"),X0=mX($,P,"fragment");f0("WebGLProgram: Shader Error "+$.getError()+" - VALIDATE_STATUS "+$.getProgramParameter(L,$.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+w+`
`+Z0+`
`+X0)}else if(w!=="")b0("WebGLProgram: Program Info Log:",w);else if(n===""||u==="")i=!1;if(i)j.diagnostics={runnable:$0,programLog:w,vertexShader:{log:n,prefix:E},fragmentShader:{log:u,prefix:D}}}$.deleteShader(A),$.deleteShader(P),I=new H7($,L),B=Yq($,L)}let I;this.getUniforms=function(){if(I===void 0)_(this);return I};let B;this.getAttributes=function(){if(B===void 0)_(this);return B};let p=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(p===!1)p=$.getProgramParameter(L,r5);return p},this.destroy=function(){K.releaseStatesOfProgram(this),$.deleteProgram(L),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=t5++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=A,this.fragmentShader=P,this}var Bq=0;class WY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,Z){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new XY(J),Q.set(J,Z);return Z}}class XY{constructor(J){this.id=Bq++,this.code=J,this.usedTimes=0}}function Aq(J){return J===yJ||J===a7||J===r7}function zq(J,Q,Z,K,$,W){let X=new ZQ,Y=new WY,H=new Set,N=[],q=new Map,U=K.logarithmicDepthBuffer,G=K.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(I){if(H.add(I),I===0)return"uv";return`uv${I}`}function L(I,B,p,j,b,m){let T=j.fog,w=b.geometry,n=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?j.environment:null,u=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,$0=Q.get(I.envMap||n,u),i=!!$0&&$0.mapping===i6?$0.image.height:null,Z0=F[I.type];if(I.precision!==null){if(G=K.getMaxPrecision(I.precision),G!==I.precision)b0("WebGLProgram.getParameters:",I.precision,"not supported, using",G,"instead.")}let X0=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,w0=X0!==void 0?X0.length:0,T0=0;if(w.morphAttributes.position!==void 0)T0=1;if(w.morphAttributes.normal!==void 0)T0=2;if(w.morphAttributes.color!==void 0)T0=3;let n0,u0,S,g;if(Z0){let D9=n9[Z0];n0=D9.vertexShader,u0=D9.fragmentShader}else{n0=I.vertexShader,u0=I.fragmentShader;let D9=Y.getVertexShaderStage(I),K9=Y.getFragmentShaderStage(I);Y.update(I,D9,K9),S=D9.id,g=K9.id}let d=J.getRenderTarget(),a=J.state.buffers.depth.getReversed(),Q0=b.isInstancedMesh===!0,r=b.isBatchedMesh===!0,z0=!!I.map,q0=!!I.matcap,y0=!!$0,m0=!!I.aoMap,h0=!!I.lightMap,i0=!!I.bumpMap&&I.wireframe===!1,r0=!!I.normalMap,V9=!!I.displacementMap,E9=!!I.emissiveMap,O9=!!I.metalnessMap,v=!!I.roughnessMap,A9=I.anisotropy>0,J9=I.clearcoat>0,N9=I.dispersion>0,z=I.retroreflectivity>0,M=I.iridescence>0,y=I.sheen>0,s=I.transmission>0,W0=A9&&!!I.anisotropyMap,U0=J9&&!!I.clearcoatMap,D0=J9&&!!I.clearcoatNormalMap,t=J9&&!!I.clearcoatRoughnessMap,K0=M&&!!I.iridescenceMap,O0=M&&!!I.iridescenceThicknessMap,A0=y&&!!I.sheenColorMap,N0=y&&!!I.sheenRoughnessMap,H0=!!I.specularMap,S0=!!I.specularColorMap,j0=!!I.specularIntensityMap,Q9=s&&!!I.transmissionMap,h=s&&!!I.thicknessMap,F0=!!I.gradientMap,J0=!!I.alphaMap,E0=I.alphaTest>0,I0=!!I.alphaHash,Y0=!!I.extensions,R0=V8;if(I.toneMapped){if(d===null||d.isXRRenderTarget===!0)R0=J.toneMapping}let d0={shaderID:Z0,shaderType:I.type,shaderName:I.name,vertexShader:n0,fragmentShader:u0,defines:I.defines,customVertexShaderID:S,customFragmentShaderID:g,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:G,batching:r,batchingColor:r&&b._colorsTexture!==null,instancing:Q0,instancingColor:Q0&&b.instanceColor!==null,instancingMorph:Q0&&b.morphTexture!==null,outputColorSpace:d===null?J.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:o0.workingColorSpace,alphaToCoverage:!!I.alphaToCoverage,map:z0,matcap:q0,envMap:y0,envMapMode:y0&&$0.mapping,envMapCubeUVHeight:i,aoMap:m0,lightMap:h0,bumpMap:i0,normalMap:r0,displacementMap:V9,emissiveMap:E9,normalMapObjectSpace:r0&&I.normalMapType===DX,normalMapTangentSpace:r0&&I.normalMapType===MK,packedNormalMap:r0&&I.normalMapType===MK&&Aq(I.normalMap.format),metalnessMap:O9,roughnessMap:v,anisotropy:A9,anisotropyMap:W0,clearcoat:J9,clearcoatMap:U0,clearcoatNormalMap:D0,clearcoatRoughnessMap:t,dispersion:N9,retroreflection:z,iridescence:M,iridescenceMap:K0,iridescenceThicknessMap:O0,sheen:y,sheenColorMap:A0,sheenRoughnessMap:N0,specularMap:H0,specularColorMap:S0,specularIntensityMap:j0,transmission:s,transmissionMap:Q9,thicknessMap:h,gradientMap:F0,opaque:I.transparent===!1&&I.blending===s6&&I.alphaToCoverage===!1,alphaMap:J0,alphaTest:E0,alphaHash:I0,combine:I.combine,mapUv:z0&&O(I.map.channel),aoMapUv:m0&&O(I.aoMap.channel),lightMapUv:h0&&O(I.lightMap.channel),bumpMapUv:i0&&O(I.bumpMap.channel),normalMapUv:r0&&O(I.normalMap.channel),displacementMapUv:V9&&O(I.displacementMap.channel),emissiveMapUv:E9&&O(I.emissiveMap.channel),metalnessMapUv:O9&&O(I.metalnessMap.channel),roughnessMapUv:v&&O(I.roughnessMap.channel),anisotropyMapUv:W0&&O(I.anisotropyMap.channel),clearcoatMapUv:U0&&O(I.clearcoatMap.channel),clearcoatNormalMapUv:D0&&O(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:t&&O(I.clearcoatRoughnessMap.channel),iridescenceMapUv:K0&&O(I.iridescenceMap.channel),iridescenceThicknessMapUv:O0&&O(I.iridescenceThicknessMap.channel),sheenColorMapUv:A0&&O(I.sheenColorMap.channel),sheenRoughnessMapUv:N0&&O(I.sheenRoughnessMap.channel),specularMapUv:H0&&O(I.specularMap.channel),specularColorMapUv:S0&&O(I.specularColorMap.channel),specularIntensityMapUv:j0&&O(I.specularIntensityMap.channel),transmissionMapUv:Q9&&O(I.transmissionMap.channel),thicknessMapUv:h&&O(I.thicknessMap.channel),alphaMapUv:J0&&O(I.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(r0||A9),vertexNormals:!!w.attributes.normal,vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!w.attributes.uv&&(z0||J0),fog:!!T,useFog:I.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:I.wireframe===!1&&(I.flatShading===!0||w.attributes.normal===void 0&&r0===!1&&(I.isMeshLambertMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isMeshPhysicalMaterial)),sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:U,reversedDepthBuffer:a,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:w0,morphTextureStride:T0,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:m.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:I.dithering,shadowMapEnabled:J.shadowMap.enabled&&p.length>0,shadowMapType:J.shadowMap.type,toneMapping:R0,decodeVideoTexture:z0&&I.map.isVideoTexture===!0&&o0.getTransfer(I.map.colorSpace)===q9,decodeVideoTextureEmissive:E9&&I.emissiveMap.isVideoTexture===!0&&o0.getTransfer(I.emissiveMap.colorSpace)===q9,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===j8,flipSided:I.side===o9,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Y0&&I.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y0&&I.extensions.multiDraw===!0||r)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return d0.vertexUv1s=H.has(1),d0.vertexUv2s=H.has(2),d0.vertexUv3s=H.has(3),H.clear(),d0}function E(I){let B=[];if(I.shaderID)B.push(I.shaderID);else B.push(I.customVertexShaderID),B.push(I.customFragmentShaderID);if(I.defines!==void 0)for(let p in I.defines)B.push(p),B.push(I.defines[p]);if(I.isRawShaderMaterial===!1)D(B,I),R(B,I),B.push(J.outputColorSpace);return B.push(I.customProgramCacheKey),B.join()}function D(I,B){I.push(B.precision),I.push(B.outputColorSpace),I.push(B.envMapMode),I.push(B.envMapCubeUVHeight),I.push(B.mapUv),I.push(B.alphaMapUv),I.push(B.lightMapUv),I.push(B.aoMapUv),I.push(B.bumpMapUv),I.push(B.normalMapUv),I.push(B.displacementMapUv),I.push(B.emissiveMapUv),I.push(B.metalnessMapUv),I.push(B.roughnessMapUv),I.push(B.anisotropyMapUv),I.push(B.clearcoatMapUv),I.push(B.clearcoatNormalMapUv),I.push(B.clearcoatRoughnessMapUv),I.push(B.iridescenceMapUv),I.push(B.iridescenceThicknessMapUv),I.push(B.sheenColorMapUv),I.push(B.sheenRoughnessMapUv),I.push(B.specularMapUv),I.push(B.specularColorMapUv),I.push(B.specularIntensityMapUv),I.push(B.transmissionMapUv),I.push(B.thicknessMapUv),I.push(B.combine),I.push(B.fogExp2),I.push(B.sizeAttenuation),I.push(B.morphTargetsCount),I.push(B.morphAttributeCount),I.push(B.numSunLights),I.push(B.numDirLights),I.push(B.numPointLights),I.push(B.numSpotLights),I.push(B.numSpotLightMaps),I.push(B.numHemiLights),I.push(B.numRectAreaLights),I.push(B.numSunLightShadows),I.push(B.numDirLightShadows),I.push(B.numPointLightShadows),I.push(B.numSpotLightShadows),I.push(B.numSpotLightShadowsWithMaps),I.push(B.numLightProbes),I.push(B.shadowMapType),I.push(B.toneMapping),I.push(B.numClippingPlanes),I.push(B.numClipIntersection),I.push(B.depthPacking)}function R(I,B){if(X.disableAll(),B.instancing)X.enable(0);if(B.instancingColor)X.enable(1);if(B.instancingMorph)X.enable(2);if(B.matcap)X.enable(3);if(B.envMap)X.enable(4);if(B.normalMapObjectSpace)X.enable(5);if(B.normalMapTangentSpace)X.enable(6);if(B.clearcoat)X.enable(7);if(B.iridescence)X.enable(8);if(B.alphaTest)X.enable(9);if(B.vertexColors)X.enable(10);if(B.vertexAlphas)X.enable(11);if(B.vertexUv1s)X.enable(12);if(B.vertexUv2s)X.enable(13);if(B.vertexUv3s)X.enable(14);if(B.vertexTangents)X.enable(15);if(B.anisotropy)X.enable(16);if(B.alphaHash)X.enable(17);if(B.batching)X.enable(18);if(B.dispersion)X.enable(19);if(B.retroreflection)X.enable(24);if(B.batchingColor)X.enable(20);if(B.gradientMap)X.enable(21);if(B.packedNormalMap)X.enable(22);if(B.vertexNormals)X.enable(23);if(I.push(X.mask),X.disableAll(),B.fog)X.enable(0);if(B.useFog)X.enable(1);if(B.flatShading)X.enable(2);if(B.logarithmicDepthBuffer)X.enable(3);if(B.reversedDepthBuffer)X.enable(4);if(B.skinning)X.enable(5);if(B.morphTargets)X.enable(6);if(B.morphNormals)X.enable(7);if(B.morphColors)X.enable(8);if(B.premultipliedAlpha)X.enable(9);if(B.shadowMapEnabled)X.enable(10);if(B.doubleSided)X.enable(11);if(B.flipSided)X.enable(12);if(B.useDepthPacking)X.enable(13);if(B.dithering)X.enable(14);if(B.transmission)X.enable(15);if(B.sheen)X.enable(16);if(B.opaque)X.enable(17);if(B.pointsUvs)X.enable(18);if(B.decodeVideoTexture)X.enable(19);if(B.decodeVideoTextureEmissive)X.enable(20);if(B.alphaToCoverage)X.enable(21);if(B.numLightProbeGrids>0)X.enable(22);if(B.hasPositionAttribute)X.enable(23);I.push(X.mask)}function k(I){let B=F[I.type],p;if(B){let j=n9[B];p=K7.clone(j.uniforms)}else p=I.uniforms;return p}function V(I,B){let p=q.get(B);if(p!==void 0)++p.usedTimes;else p=new Cq(J,B,I,$),N.push(p),q.set(B,p);return p}function A(I){if(--I.usedTimes===0){let B=N.indexOf(I);N[B]=N[N.length-1],N.pop(),q.delete(I.cacheKey),I.destroy()}}function P(I){Y.remove(I)}function _(){Y.dispose()}return{getParameters:L,getProgramCacheKey:E,getUniforms:k,acquireProgram:V,releaseProgram:A,releaseShaderCache:P,programs:N,dispose:_}}function Pq(){let J=new WeakMap;function Q(X){return J.has(X)}function Z(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function $(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:Z,remove:K,update:$,dispose:W}}function kq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function nX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function sX(){let J=[],Q=0,Z=[],K=[],$=[];function W(){Q=0,Z.length=0,K.length=0,$.length=0}function X(G){let F=0;if(G.isInstancedMesh)F+=2;if(G.isSkinnedMesh)F+=1;return F}function Y(G,F,O,L,E,D){let R=J[Q];if(R===void 0)R={id:G.id,object:G,geometry:F,material:O,materialVariant:X(G),groupOrder:L,renderOrder:G.renderOrder,z:E,group:D},J[Q]=R;else R.id=G.id,R.object=G,R.geometry=F,R.material=O,R.materialVariant=X(G),R.groupOrder=L,R.renderOrder=G.renderOrder,R.z=E,R.group=D;return Q++,R}function H(G,F,O,L,E,D,R){if(R.reversedDepth===!0)E=-E;let k=Y(G,F,O,L,E,D);if(O.transmission>0)K.push(k);else if(O.transparent===!0)$.push(k);else Z.push(k)}function N(G,F,O,L,E,D){let R=Y(G,F,O,L,E,D);if(O.transmission>0)K.unshift(R);else if(O.transparent===!0)$.unshift(R);else Z.unshift(R)}function q(G,F){if(Z.length>1)Z.sort(G||kq);if(K.length>1)K.sort(F||nX);if($.length>1)$.sort(F||nX)}function U(){for(let G=Q,F=J.length;G<F;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Z,transmissive:K,transparent:$,init:W,push:H,unshift:N,finish:U,sort:q}}function _q(){let J=new WeakMap;function Q(K,$){let W=J.get(K),X;if(W===void 0)X=new sX,J.set(K,[X]);else if($>=W.length)X=new sX,W.push(X);else X=W[$];return X}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function Tq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={direction:new x,color:new e0};break;case"SpotLight":Z={position:new x,direction:new x,color:new e0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new x,color:new e0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new x,skyColor:new e0,groundColor:new e0};break;case"RectAreaLight":Z={color:new e0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=Z,Z}}}function wq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var Sq=0;function jq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function vq(J){let Q=new Tq,Z=wq(),K={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let N=0;N<9;N++)K.probe.push(new x);let $=new x,W=new M9,X=new M9;function Y(N){let q=0,U=0,G=0;for(let b=0;b<9;b++)K.probe[b].set(0,0,0);let F=0,O=0,L=0,E=0,D=0,R=0,k=0,V=0,A=0,P=0,_=0,I=0,B=0,p=0;N.sort(jq);for(let b=0,m=N.length;b<m;b++){let T=N[b],w=T.color,n=T.intensity,u=T.distance,$0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===yJ)$0=T.shadow.map.texture;else $0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)q+=w.r*n,U+=w.g*n,G+=w.b*n;else if(T.isLightProbe){for(let i=0;i<9;i++)K.probe[i].addScaledVector(T.sh.coefficients[i],n);p++}else if(T.isSunLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize.copy(Z0.mapSize).multiply(Z0.getFrameExtents()),K.sunShadow[O]=X0,K.sunShadowMap[O]=$0;let w0=Z0.getViewportCount();for(let T0=0;T0<w0;T0++)K.sunShadowMatrix[L+T0]=Z0.getMatrix(T0),K.sunShadowCascade[L+T0]=Z0._cascadeData[T0];L+=w0,O++}K.sun[F]=i,F++}else if(T.isDirectionalLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.directionalShadow[E]=X0,K.directionalShadowMap[E]=$0,K.directionalShadowMatrix[E]=T.shadow.matrix,A++}K.directional[E]=i,E++}else if(T.isSpotLight){let i=Q.get(T);i.position.setFromMatrixPosition(T.matrixWorld),i.color.copy(w).multiplyScalar(n),i.distance=u,i.coneCos=Math.cos(T.angle),i.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),i.decay=T.decay,K.spot[R]=i;let Z0=T.shadow;if(T.map){if(K.spotLightMap[I]=T.map,I++,Z0.updateMatrices(T),T.castShadow)B++}if(K.spotLightMatrix[R]=Z0.matrix,T.castShadow){let X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.spotShadow[R]=X0,K.spotShadowMap[R]=$0,_++}R++}else if(T.isRectAreaLight){let i=Q.get(T);i.color.copy(w).multiplyScalar(n),i.halfWidth.set(T.width*0.5,0,0),i.halfHeight.set(0,T.height*0.5,0),K.rectArea[k]=i,k++}else if(T.isPointLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),i.distance=T.distance,i.decay=T.decay,T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,X0.shadowCameraNear=Z0.camera.near,X0.shadowCameraFar=Z0.camera.far,K.pointShadow[D]=X0,K.pointShadowMap[D]=$0,K.pointShadowMatrix[D]=T.shadow.matrix,P++}K.point[D]=i,D++}else if(T.isHemisphereLight){let i=Q.get(T);i.skyColor.copy(T.color).multiplyScalar(n),i.groundColor.copy(T.groundColor).multiplyScalar(n),K.hemi[V]=i,V++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=G0.LTC_FLOAT_1,K.rectAreaLTC2=G0.LTC_FLOAT_2;else K.rectAreaLTC1=G0.LTC_HALF_1,K.rectAreaLTC2=G0.LTC_HALF_2;K.ambient[0]=q,K.ambient[1]=U,K.ambient[2]=G;let j=K.hash;if(j.sunLength!==F||j.directionalLength!==E||j.pointLength!==D||j.spotLength!==R||j.rectAreaLength!==k||j.hemiLength!==V||j.numSunShadows!==O||j.numDirectionalShadows!==A||j.numPointShadows!==P||j.numSpotShadows!==_||j.numSpotMaps!==I||j.numLightProbes!==p)K.sun.length=F,K.directional.length=E,K.spot.length=R,K.rectArea.length=k,K.point.length=D,K.hemi.length=V,K.sunShadow.length=O,K.sunShadowMap.length=O,K.sunShadowMatrix.length=L,K.sunShadowCascade.length=L,K.directionalShadow.length=A,K.directionalShadowMap.length=A,K.directionalShadowMatrix.length=A,K.pointShadow.length=P,K.pointShadowMap.length=P,K.pointShadowMatrix.length=P,K.spotShadow.length=_,K.spotShadowMap.length=_,K.spotLightMatrix.length=_+I-B,K.spotLightMap.length=I,K.numSpotLightShadowsWithMaps=B,K.numLightProbes=p,j.sunLength=F,j.directionalLength=E,j.pointLength=D,j.spotLength=R,j.rectAreaLength=k,j.hemiLength=V,j.numSunShadows=O,j.numDirectionalShadows=A,j.numPointShadows=P,j.numSpotShadows=_,j.numSpotMaps=I,j.numLightProbes=p,K.version=Sq++}function H(N,q){let U=0,G=0,F=0,O=0,L=0,E=0,D=q.matrixWorldInverse;for(let R=0,k=N.length;R<k;R++){let V=N[R];if(V.isSunLight){let A=K.sun[U];A.direction.setFromMatrixPosition(V.matrixWorld),A.direction.transformDirection(D),U++}else if(V.isDirectionalLight){let A=K.directional[G];A.direction.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(D),G++}else if(V.isSpotLight){let A=K.spot[O];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(D),A.direction.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(D),O++}else if(V.isRectAreaLight){let A=K.rectArea[L];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(D),X.identity(),W.copy(V.matrixWorld),W.premultiply(D),X.extractRotation(W),A.halfWidth.set(V.width*0.5,0,0),A.halfHeight.set(0,V.height*0.5,0),A.halfWidth.applyMatrix4(X),A.halfHeight.applyMatrix4(X),L++}else if(V.isPointLight){let A=K.point[F];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(D),F++}else if(V.isHemisphereLight){let A=K.hemi[E];A.direction.setFromMatrixPosition(V.matrixWorld),A.direction.transformDirection(D),E++}}}return{setup:Y,setupView:H,state:K}}function iX(J){let Q=new vq(J),Z=[],K=[],$=[];function W(G){U.camera=G,Z.length=0,K.length=0,$.length=0}function X(G){Z.push(G)}function Y(G){K.push(G)}function H(G){$.push(G)}function N(){Q.setup(Z)}function q(G){Q.setupView(Z,G)}let U={lightsArray:Z,shadowsArray:K,lightProbeGridArray:$,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:U,setupLights:N,setupLightsView:q,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function bq(J){let Q=new WeakMap;function Z($,W=0){let X=Q.get($),Y;if(X===void 0)Y=new iX(J),Q.set($,[Y]);else if(W>=X.length)Y=new iX(J),X.push(Y);else Y=X[W];return Y}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var yq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fq=`uniform sampler2D shadow_pass;
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
}`,hq=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],xq=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],oX=new M9,X7=new x,Q$=new x;function gq(J,Q,Z){let K=new YQ,$=new x0,W=new x0,X=new Y9,Y=new jK,H=new vK,N={},q=Z.maxTextureSize,U={[M6]:o9,[o9]:M6,[j8]:j8},G=new t9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new x0},radius:{value:4}},vertexShader:yq,fragmentShader:fq}),F=G.clone();F.defines.HORIZONTAL_PASS=1;let O=new q8;O.setAttribute("position",new N8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new K8(O,G),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n6;let D=this.type;this.render=function(P,_,I){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(P.length===0)return;if(this.type===_W)b0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=n6;let B=J.getRenderTarget(),p=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(v8),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let m=D!==this.type;if(m)_.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((w)=>w.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,w=P.length;T<w;T++){let n=P[T],u=n.shadow;if(u===void 0){b0("WebGLShadowMap:",n,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;$.copy(u.mapSize);let $0=u.getFrameExtents();if($.multiply($0),W.copy(u.mapSize),$.x>q||$.y>q){if($.x>q)W.x=Math.floor(q/$0.x),$.x=W.x*$0.x,u.mapSize.x=W.x;if($.y>q)W.y=Math.floor(q/$0.y),$.y=W.y*$0.y,u.mapSize.y=W.y}let i=J.state.buffers.depth.getReversed();if(u.camera._reversedDepth=i,u.map===null||m===!0){if(u.map!==null){if(u.map.depthTexture!==null)u.map.depthTexture.dispose(),u.map.depthTexture=null;u.map.dispose()}if(this.type===R6){if(n.isPointLight){b0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}u.map=new Z8($.x,$.y,{format:yJ,type:b8,minFilter:a9,magFilter:a9,generateMipmaps:!1}),u.map.texture.name=n.name+".shadowMap",u.map.depthTexture=new hJ($.x,$.y,QJ),u.map.depthTexture.name=n.name+".shadowMapDepth",u.map.depthTexture.format=vJ,u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=MJ,u.map.depthTexture.magFilter=MJ}else{if(n.isPointLight)u.map=new W$($.x),u.map.depthTexture=new TK($.x,LJ);else u.map=new Z8($.x,$.y),u.map.depthTexture=new hJ($.x,$.y,LJ);if(u.map.depthTexture.name=n.name+".shadowMap",u.map.depthTexture.format=vJ,this.type===n6)u.map.depthTexture.compareFunction=i?e7:t7,u.map.depthTexture.minFilter=a9,u.map.depthTexture.magFilter=a9;else u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=MJ,u.map.depthTexture.magFilter=MJ}u.camera.updateProjectionMatrix()}if(u.map.isWebGLCubeRenderTarget!==!0&&(u.map.width!==$.x||u.map.height!==$.y))u.map.setSize($.x,$.y);let Z0=u.map.isWebGLCubeRenderTarget?6:u.getViewportCount();if(n.isPointLight!==!0)u.updateMatrices(n,I);for(let X0=0;X0<Z0;X0++){let w0=u.getCamera(X0);if(n.isPointLight){let{camera:T0,matrix:n0}=u,u0=n.distance||T0.far;if(u0!==T0.far)T0.far=u0,T0.updateProjectionMatrix();X7.setFromMatrixPosition(n.matrixWorld),T0.position.copy(X7),Q$.copy(T0.position),Q$.add(hq[X0]),T0.up.copy(xq[X0]),T0.lookAt(Q$),T0.updateMatrixWorld(),n0.makeTranslation(-X7.x,-X7.y,-X7.z),oX.multiplyMatrices(T0.projectionMatrix,T0.matrixWorldInverse),u._frustum.setFromProjectionMatrix(oX,T0.coordinateSystem,T0.reversedDepth)}if(u.map.isWebGLCubeRenderTarget)J.setRenderTarget(u.map,X0),J.clear();else{if(X0===0)J.setRenderTarget(u.map),J.clear();let T0=u.getViewport(X0);X.set(W.x*T0.x,W.y*T0.y,W.x*T0.z,W.y*T0.w),b.viewport(X)}K=u.getFrustum(X0),V(_,I,w0,n,this.type)}if(u.isPointLightShadow!==!0&&this.type===R6)R(u,I);u.needsUpdate=!1}D=this.type,E.needsUpdate=!1,J.setRenderTarget(B,p,j)};function R(P,_){let I=Q.update(L);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,F.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,F.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new Z8($.x,$.y,{format:yJ,type:b8});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(_,null,I,G,L,null),F.uniforms.shadow_pass.value=P.mapPass.texture,F.uniforms.resolution.value.set(P.map.width,P.map.height),F.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(_,null,I,F,L,null)}function k(P,_,I,B){let p=null,j=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)p=j;else if(p=I.isPointLight===!0?H:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let b=p.uuid,m=_.uuid,T=N[b];if(T===void 0)T={},N[b]=T;let w=T[m];if(w===void 0)w=p.clone(),T[m]=w,_.addEventListener("dispose",A);p=w}if(p.visible=_.visible,p.wireframe=_.wireframe,B===R6)p.side=_.shadowSide!==null?_.shadowSide:_.side;else p.side=_.shadowSide!==null?_.shadowSide:U[_.side];if(p.alphaMap=_.alphaMap,p.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,p.map=_.map,p.clipShadows=_.clipShadows,p.clippingPlanes=_.clippingPlanes,p.clipIntersection=_.clipIntersection,p.displacementMap=_.displacementMap,p.displacementScale=_.displacementScale,p.displacementBias=_.displacementBias,p.wireframeLinewidth=_.wireframeLinewidth,p.linewidth=_.linewidth,I.isPointLight===!0&&p.isMeshDistanceMaterial===!0){let b=J.properties.get(p);b.light=I}return p}function V(P,_,I,B,p){if(P.visible===!1)return;if(P.layers.test(_.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&p===R6)&&(!P.frustumCulled||P.intersectsFrustum(K))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);let m=Q.update(P),T=P.material;if(Array.isArray(T)){let w=m.groups;for(let n=0,u=w.length;n<u;n++){let $0=w[n],i=T[$0.materialIndex];if(i&&i.visible){let Z0=k(P,i,B,p);P.onBeforeShadow(J,P,_,I,m,Z0,$0),J.renderBufferDirect(I,null,m,Z0,P,$0),P.onAfterShadow(J,P,_,I,m,Z0,$0)}}}else if(T.visible){let w=k(P,T,B,p);P.onBeforeShadow(J,P,_,I,m,w,null),J.renderBufferDirect(I,null,m,w,P,null),P.onAfterShadow(J,P,_,I,m,w,null)}}}let b=P.children;for(let m=0,T=b.length;m<T;m++)V(b[m],_,I,B,p)}function A(P){P.target.removeEventListener("dispose",A);for(let I in N){let B=N[I],p=P.target.uuid;if(p in B)B[p].dispose(),delete B[p]}}}function pq(J,Q){function Z(){let h=!1,F0=new Y9,J0=null,E0=new Y9(0,0,0,0);return{setMask:function(I0){if(J0!==I0&&!h)J.colorMask(I0,I0,I0,I0),J0=I0},setLocked:function(I0){h=I0},setClear:function(I0,Y0,R0,d0,D9){if(D9===!0)I0*=d0,Y0*=d0,R0*=d0;if(F0.set(I0,Y0,R0,d0),E0.equals(F0)===!1)J.clearColor(I0,Y0,R0,d0),E0.copy(F0)},reset:function(){h=!1,J0=null,E0.set(-1,0,0,0)}}}function K(){let h=!1,F0=!1,J0=null,E0=null,I0=null;return{setReversed:function(Y0){if(F0!==Y0){let R0=Q.get("EXT_clip_control");if(Y0)R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.ZERO_TO_ONE_EXT);else R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.NEGATIVE_ONE_TO_ONE_EXT);F0=Y0;let d0=I0;I0=null,this.setClear(d0)}},getReversed:function(){return F0},setTest:function(Y0){if(Y0)d(J.DEPTH_TEST);else a(J.DEPTH_TEST)},setMask:function(Y0){if(J0!==Y0&&!h)J.depthMask(Y0),J0=Y0},setFunc:function(Y0){if(F0)Y0=AX[Y0];if(E0!==Y0){switch(Y0){case sW:J.depthFunc(J.NEVER);break;case iW:J.depthFunc(J.ALWAYS);break;case oW:J.depthFunc(J.LESS);break;case _Z:J.depthFunc(J.LEQUAL);break;case aW:J.depthFunc(J.EQUAL);break;case rW:J.depthFunc(J.GEQUAL);break;case tW:J.depthFunc(J.GREATER);break;case eW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}E0=Y0}},setLocked:function(Y0){h=Y0},setClear:function(Y0){if(I0!==Y0){if(I0=Y0,F0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){h=!1,J0=null,E0=null,I0=null,F0=!1}}}function $(){let h=!1,F0=null,J0=null,E0=null,I0=null,Y0=null,R0=null,d0=null,D9=null;return{setTest:function(K9){if(!h)if(K9)d(J.STENCIL_TEST);else a(J.STENCIL_TEST)},setMask:function(K9){if(F0!==K9&&!h)J.stencilMask(K9),F0=K9},setFunc:function(K9,_8,s8){if(J0!==K9||E0!==_8||I0!==s8)J.stencilFunc(K9,_8,s8),J0=K9,E0=_8,I0=s8},setOp:function(K9,_8,s8){if(Y0!==K9||R0!==_8||d0!==s8)J.stencilOp(K9,_8,s8),Y0=K9,R0=_8,d0=s8},setLocked:function(K9){h=K9},setClear:function(K9){if(D9!==K9)J.clearStencil(K9),D9=K9},reset:function(){h=!1,F0=null,J0=null,E0=null,I0=null,Y0=null,R0=null,d0=null,D9=null}}}let W=new Z,X=new K,Y=new $,H=new WeakMap,N=new WeakMap,q={},U={},G={},F=new WeakMap,O=[],L=null,E=!1,D=null,R=null,k=null,V=null,A=null,P=null,_=null,I=new e0(0,0,0),B=0,p=!1,j=null,b=null,m=null,T=null,w=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,$0=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)$0=parseFloat(/^WebGL (\d)/.exec(i)[1]),u=$0>=1;else if(i.indexOf("OpenGL ES")!==-1)$0=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),u=$0>=2;let Z0=null,X0={},w0=J.getParameter(J.SCISSOR_BOX),T0=J.getParameter(J.VIEWPORT),n0=new Y9().fromArray(w0),u0=new Y9().fromArray(T0);function S(h,F0,J0,E0){let I0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(h,Y0),J.texParameteri(h,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(h,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let R0=0;R0<J0;R0++)if(h===J.TEXTURE_3D||h===J.TEXTURE_2D_ARRAY)J.texImage3D(F0,0,J.RGBA,1,1,E0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(F0+R0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return Y0}let g={};g[J.TEXTURE_2D]=S(J.TEXTURE_2D,J.TEXTURE_2D,1),g[J.TEXTURE_CUBE_MAP]=S(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),g[J.TEXTURE_2D_ARRAY]=S(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),g[J.TEXTURE_3D]=S(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),d(J.DEPTH_TEST),X.setFunc(_Z),i0(!1),r0(AZ),d(J.CULL_FACE),m0(v8);function d(h){if(q[h]!==!0)J.enable(h),q[h]=!0}function a(h){if(q[h]!==!1)J.disable(h),q[h]=!1}function Q0(h,F0){if(G[h]!==F0){if(J.bindFramebuffer(h,F0),G[h]=F0,h===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=F0;if(h===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=F0;return!0}return!1}function r(h,F0){let J0=O,E0=!1;if(h){if(J0=F.get(F0),J0===void 0)J0=[],F.set(F0,J0);let I0=h.textures;if(J0.length!==I0.length||J0[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,R0=I0.length;Y0<R0;Y0++)J0[Y0]=J.COLOR_ATTACHMENT0+Y0;J0.length=I0.length,E0=!0}}else if(J0[0]!==J.BACK)J0[0]=J.BACK,E0=!0;if(E0)J.drawBuffers(J0)}function z0(h){if(L!==h)return J.useProgram(h),L=h,!0;return!1}let q0={[L6]:J.FUNC_ADD,[TW]:J.FUNC_SUBTRACT,[wW]:J.FUNC_REVERSE_SUBTRACT};q0[SW]=J.MIN,q0[m7]=J.MAX;let y0={[jW]:J.ZERO,[vW]:J.ONE,[bW]:J.SRC_COLOR,[fW]:J.SRC_ALPHA,[dW]:J.SRC_ALPHA_SATURATE,[pW]:J.DST_COLOR,[xW]:J.DST_ALPHA,[yW]:J.ONE_MINUS_SRC_COLOR,[hW]:J.ONE_MINUS_SRC_ALPHA,[mW]:J.ONE_MINUS_DST_COLOR,[gW]:J.ONE_MINUS_DST_ALPHA,[uW]:J.CONSTANT_COLOR,[lW]:J.ONE_MINUS_CONSTANT_COLOR,[cW]:J.CONSTANT_ALPHA,[nW]:J.ONE_MINUS_CONSTANT_ALPHA};function m0(h,F0,J0,E0,I0,Y0,R0,d0,D9,K9){if(h===v8){if(E===!0)a(J.BLEND),E=!1;return}if(E===!1)d(J.BLEND),E=!0;if(h!==p7){if(h!==D||K9!==p){if(R!==L6||A!==L6)J.blendEquation(J.FUNC_ADD),R=L6,A=L6;if(K9)switch(h){case s6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case zZ:J.blendFunc(J.ONE,J.ONE);break;case PZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case kZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:f0("WebGLState: Invalid blending: ",h);break}else switch(h){case s6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case zZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case PZ:f0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kZ:f0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:f0("WebGLState: Invalid blending: ",h);break}k=null,V=null,P=null,_=null,I.set(0,0,0),B=0,D=h,p=K9}return}if(I0=I0||F0,Y0=Y0||J0,R0=R0||E0,F0!==R||I0!==A)J.blendEquationSeparate(q0[F0],q0[I0]),R=F0,A=I0;if(J0!==k||E0!==V||Y0!==P||R0!==_)J.blendFuncSeparate(y0[J0],y0[E0],y0[Y0],y0[R0]),k=J0,V=E0,P=Y0,_=R0;if(d0.equals(I)===!1||D9!==B)J.blendColor(d0.r,d0.g,d0.b,D9),I.copy(d0),B=D9;D=h,p=!1}function h0(h,F0){h.side===j8?a(J.CULL_FACE):d(J.CULL_FACE);let J0=h.side===o9;if(F0)J0=!J0;i0(J0),h.blending===s6&&h.transparent===!1?m0(v8):m0(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),X.setFunc(h.depthFunc),X.setTest(h.depthTest),X.setMask(h.depthWrite),W.setMask(h.colorWrite);let E0=h.stencilWrite;if(Y.setTest(E0),E0)Y.setMask(h.stencilWriteMask),Y.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),Y.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass);E9(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?d(J.SAMPLE_ALPHA_TO_COVERAGE):a(J.SAMPLE_ALPHA_TO_COVERAGE)}function i0(h){if(j!==h){if(h)J.frontFace(J.CW);else J.frontFace(J.CCW);j=h}}function r0(h){if(h!==PW){if(d(J.CULL_FACE),h!==b)if(h===AZ)J.cullFace(J.BACK);else if(h===kW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a(J.CULL_FACE);b=h}function V9(h){if(h!==m){if(u)J.lineWidth(h);m=h}}function E9(h,F0,J0){if(h){if(d(J.POLYGON_OFFSET_FILL),T!==F0||w!==J0){if(T=F0,w=J0,X.getReversed())F0=-F0;J.polygonOffset(F0,J0)}}else a(J.POLYGON_OFFSET_FILL)}function O9(h){if(h)d(J.SCISSOR_TEST);else a(J.SCISSOR_TEST)}function v(h){if(h===void 0)h=J.TEXTURE0+n-1;if(Z0!==h)J.activeTexture(h),Z0=h}function A9(h,F0,J0){if(J0===void 0)if(Z0===null)J0=J.TEXTURE0+n-1;else J0=Z0;let E0=X0[J0];if(E0===void 0)E0={type:void 0,texture:void 0},X0[J0]=E0;if(E0.type!==h||E0.texture!==F0){if(Z0!==J0)J.activeTexture(J0),Z0=J0;J.bindTexture(h,F0||g[h]),E0.type=h,E0.texture=F0}}function J9(){let h=X0[Z0];if(h!==void 0&&h.type!==void 0)J.bindTexture(h.type,null),h.type=void 0,h.texture=void 0}function N9(){try{J.compressedTexImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function M(){try{J.texSubImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function y(){try{J.texSubImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function W0(){try{J.compressedTexSubImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function U0(){try{J.texStorage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function D0(){try{J.texStorage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function t(){try{J.texImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function K0(){try{J.texImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function O0(h){if(U[h]!==void 0)return U[h];else return J.getParameter(h)}function A0(h,F0){if(U[h]!==F0)J.pixelStorei(h,F0),U[h]=F0}function N0(h){if(n0.equals(h)===!1)J.scissor(h.x,h.y,h.z,h.w),n0.copy(h)}function H0(h){if(u0.equals(h)===!1)J.viewport(h.x,h.y,h.z,h.w),u0.copy(h)}function S0(h,F0){let J0=N.get(F0);if(J0===void 0)J0=new WeakMap,N.set(F0,J0);let E0=J0.get(h);if(E0===void 0)E0=J.getUniformBlockIndex(F0,h.name),J0.set(h,E0)}function j0(h,F0){let E0=N.get(F0).get(h);if(H.get(F0)!==E0)J.uniformBlockBinding(F0,E0,h.__bindingPointIndex),H.set(F0,E0)}function Q9(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),q={},U={},Z0=null,X0={},G={},F=new WeakMap,O=[],L=null,E=!1,D=null,R=null,k=null,V=null,A=null,P=null,_=null,I=new e0(0,0,0),B=0,p=!1,j=null,b=null,m=null,T=null,w=null,n0.set(0,0,J.canvas.width,J.canvas.height),u0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:d,disable:a,bindFramebuffer:Q0,drawBuffers:r,useProgram:z0,setBlending:m0,setMaterial:h0,setFlipSided:i0,setCullFace:r0,setLineWidth:V9,setPolygonOffset:E9,setScissorTest:O9,activeTexture:v,bindTexture:A9,unbindTexture:J9,compressedTexImage2D:N9,compressedTexImage3D:z,texImage2D:t,texImage3D:K0,pixelStorei:A0,getParameter:O0,updateUBOMapping:S0,uniformBlockBinding:j0,texStorage2D:U0,texStorage3D:D0,texSubImage2D:M,texSubImage3D:y,compressedTexSubImage2D:s,compressedTexSubImage3D:W0,scissor:N0,viewport:H0,reset:Q9}}function mq(J,Q,Z,K,$,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),N=new x0,q=new WeakMap,U=new Set,G,F=new WeakMap,O=!1;try{O=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function L(z,M){return O?new OffscreenCanvas(z,M):l6("canvas")}function E(z,M,y){let s=1,W0=N9(z);if(W0.width>y||W0.height>y)s=y/Math.max(W0.width,W0.height);if(s<1)if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&z instanceof VideoFrame){let U0=Math.floor(s*W0.width),D0=Math.floor(s*W0.height);if(G===void 0)G=L(U0,D0);let t=M?L(U0,D0):G;return t.width=U0,t.height=D0,t.getContext("2d").drawImage(z,0,0,U0,D0),b0("WebGLRenderer: Texture has been resized from ("+W0.width+"x"+W0.height+") to ("+U0+"x"+D0+")."),t}else{if("data"in z)b0("WebGLRenderer: Image in DataTexture is too big ("+W0.width+"x"+W0.height+").");return z}return z}function D(z){return z.generateMipmaps}function R(z){J.generateMipmap(z)}function k(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(z,M,y,s,W0,U0=!1){if(z!==null){if(J[z]!==void 0)return J[z];b0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let D0;if(s){if(D0=Q.get("EXT_texture_norm16"),!D0)b0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let t=M;if(M===J.RED){if(y===J.FLOAT)t=J.R32F;if(y===J.HALF_FLOAT)t=J.R16F;if(y===J.UNSIGNED_BYTE)t=J.R8;if(y===J.UNSIGNED_SHORT&&D0)t=D0.R16_EXT;if(y===J.SHORT&&D0)t=D0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.R8UI;if(y===J.UNSIGNED_SHORT)t=J.R16UI;if(y===J.UNSIGNED_INT)t=J.R32UI;if(y===J.BYTE)t=J.R8I;if(y===J.SHORT)t=J.R16I;if(y===J.INT)t=J.R32I}if(M===J.RG){if(y===J.FLOAT)t=J.RG32F;if(y===J.HALF_FLOAT)t=J.RG16F;if(y===J.UNSIGNED_BYTE)t=J.RG8;if(y===J.UNSIGNED_SHORT&&D0)t=D0.RG16_EXT;if(y===J.SHORT&&D0)t=D0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.RG8UI;if(y===J.UNSIGNED_SHORT)t=J.RG16UI;if(y===J.UNSIGNED_INT)t=J.RG32UI;if(y===J.BYTE)t=J.RG8I;if(y===J.SHORT)t=J.RG16I;if(y===J.INT)t=J.RG32I}if(M===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.RGB8UI;if(y===J.UNSIGNED_SHORT)t=J.RGB16UI;if(y===J.UNSIGNED_INT)t=J.RGB32UI;if(y===J.BYTE)t=J.RGB8I;if(y===J.SHORT)t=J.RGB16I;if(y===J.INT)t=J.RGB32I}if(M===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)t=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)t=J.RGBA16UI;if(y===J.UNSIGNED_INT)t=J.RGBA32UI;if(y===J.BYTE)t=J.RGBA8I;if(y===J.SHORT)t=J.RGBA16I;if(y===J.INT)t=J.RGBA32I}if(M===J.RGB){if(y===J.UNSIGNED_SHORT&&D0)t=D0.RGB16_EXT;if(y===J.SHORT&&D0)t=D0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)t=J.R11F_G11F_B10F}if(M===J.RGBA){let K0=U0?IK:o0.getTransfer(W0);if(y===J.FLOAT)t=J.RGBA32F;if(y===J.HALF_FLOAT)t=J.RGBA16F;if(y===J.UNSIGNED_BYTE)t=K0===q9?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&D0)t=D0.RGBA16_EXT;if(y===J.SHORT&&D0)t=D0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function A(z,M){let y;if(z){if(M===null||M===LJ||M===V6)y=J.DEPTH24_STENCIL8;else if(M===QJ)y=J.DEPTH32F_STENCIL8;else if(M===a6)y=J.DEPTH24_STENCIL8,b0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===LJ||M===V6)y=J.DEPTH_COMPONENT24;else if(M===QJ)y=J.DEPTH_COMPONENT32F;else if(M===a6)y=J.DEPTH_COMPONENT16;return y}function P(z,M){if(D(z)===!0||z.isFramebufferTexture&&z.minFilter!==MJ&&z.minFilter!==a9)return Math.log2(Math.max(M.width,M.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return M.mipmaps.length;else return 1}function _(z){let M=z.target;if(M.removeEventListener("dispose",_),B(M),M.isVideoTexture)q.delete(M);if(M.isHTMLTexture)U.delete(M)}function I(z){let M=z.target;M.removeEventListener("dispose",I),j(M)}function B(z){let M=K.get(z);if(M.__webglInit===void 0)return;let y=z.source,s=F.get(y);if(s){let W0=s[M.__cacheKey];if(W0.usedTimes--,W0.usedTimes===0)p(z);if(Object.keys(s).length===0)F.delete(y)}K.remove(z)}function p(z){let M=K.get(z);J.deleteTexture(M.__webglTexture);let y=z.source,s=F.get(y);delete s[M.__cacheKey],X.memory.textures--}function j(z){let M=K.get(z);if(z.depthTexture)z.depthTexture.dispose(),K.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(M.__webglFramebuffer[s]))for(let W0=0;W0<M.__webglFramebuffer[s].length;W0++)J.deleteFramebuffer(M.__webglFramebuffer[s][W0]);else J.deleteFramebuffer(M.__webglFramebuffer[s]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[s])}else{if(Array.isArray(M.__webglFramebuffer))for(let s=0;s<M.__webglFramebuffer.length;s++)J.deleteFramebuffer(M.__webglFramebuffer[s]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let s=0;s<M.__webglColorRenderbuffer.length;s++)if(M.__webglColorRenderbuffer[s])J.deleteRenderbuffer(M.__webglColorRenderbuffer[s])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let y=z.textures;for(let s=0,W0=y.length;s<W0;s++){let U0=K.get(y[s]);if(U0.__webglTexture)J.deleteTexture(U0.__webglTexture),X.memory.textures--;K.remove(y[s])}K.remove(z)}let b=0;function m(){b=0}function T(){return b}function w(z){b=z}function n(){let z=b;if(z>=$.maxTextures)b0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+$.maxTextures);return b+=1,z}function u(z){let M=[];return M.push(z.wrapS),M.push(z.wrapT),M.push(z.wrapR||0),M.push(z.magFilter),M.push(z.minFilter),M.push(z.anisotropy),M.push(z.internalFormat),M.push(z.format),M.push(z.type),M.push(z.generateMipmaps),M.push(z.premultiplyAlpha),M.push(z.flipY),M.push(z.unpackAlignment),M.push(z.colorSpace),M.join()}function $0(z,M){let y=K.get(z);if(z.isVideoTexture)A9(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&y.__version!==z.version){let s=z.image;if(s===null)b0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)b0("WebGLRenderer: Texture marked for update but image is incomplete");else{a(y,z,M);return}}else if(z.isExternalTexture)y.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+M)}function i(z,M){let y=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&y.__version!==z.version){a(y,z,M);return}else if(z.isExternalTexture)y.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+M)}function Z0(z,M){let y=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&y.__version!==z.version){a(y,z,M);return}Z.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+M)}function X0(z,M){let y=K.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&y.__version!==z.version){Q0(y,z,M);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+M)}let w0={[KX]:J.REPEAT,[l7]:J.CLAMP_TO_EDGE,[$X]:J.MIRRORED_REPEAT},T0={[MJ]:J.NEAREST,[WX]:J.NEAREST_MIPMAP_NEAREST,[o6]:J.NEAREST_MIPMAP_LINEAR,[a9]:J.LINEAR,[c7]:J.LINEAR_MIPMAP_NEAREST,[jJ]:J.LINEAR_MIPMAP_LINEAR},n0={[EX]:J.NEVER,[IX]:J.ALWAYS,[OX]:J.LESS,[t7]:J.LEQUAL,[RX]:J.EQUAL,[e7]:J.GEQUAL,[MX]:J.GREATER,[LX]:J.NOTEQUAL};function u0(z,M){if(M.type===QJ&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===a9||M.magFilter===c7||M.magFilter===o6||M.magFilter===jJ||M.minFilter===a9||M.minFilter===c7||M.minFilter===o6||M.minFilter===jJ))b0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,w0[M.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,w0[M.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,w0[M.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,T0[M.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,T0[M.minFilter]),M.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,n0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===MJ)return;if(M.minFilter!==o6&&M.minFilter!==jJ)return;if(M.type===QJ&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||K.get(M).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,$.getMaxAnisotropy())),K.get(M).__currentAnisotropy=M.anisotropy}}}function S(z,M){let y=!1;if(z.__webglInit===void 0)z.__webglInit=!0,M.addEventListener("dispose",_);let s=M.source,W0=F.get(s);if(W0===void 0)W0={},F.set(s,W0);let U0=u(M);if(U0!==z.__cacheKey){if(W0[U0]===void 0)W0[U0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,y=!0;W0[U0].usedTimes++;let D0=W0[z.__cacheKey];if(D0!==void 0){if(W0[z.__cacheKey].usedTimes--,D0.usedTimes===0)p(M)}z.__cacheKey=U0,z.__webglTexture=W0[U0].texture}return y}function g(z,M,y){return Math.floor(Math.floor(z/y)/M)}function d(z,M,y,s){let U0=z.updateRanges;if(U0.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,y,s,M.data);else{U0.sort((A0,N0)=>A0.start-N0.start);let D0=0;for(let A0=1;A0<U0.length;A0++){let N0=U0[D0],H0=U0[A0],S0=N0.start+N0.count,j0=g(H0.start,M.width,4),Q9=g(N0.start,M.width,4);if(H0.start<=S0+1&&j0===Q9&&g(H0.start+H0.count-1,M.width,4)===j0)N0.count=Math.max(N0.count,H0.start+H0.count-N0.start);else++D0,U0[D0]=H0}U0.length=D0+1;let t=Z.getParameter(J.UNPACK_ROW_LENGTH),K0=Z.getParameter(J.UNPACK_SKIP_PIXELS),O0=Z.getParameter(J.UNPACK_SKIP_ROWS);Z.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let A0=0,N0=U0.length;A0<N0;A0++){let H0=U0[A0],S0=Math.floor(H0.start/4),j0=Math.ceil(H0.count/4),Q9=S0%M.width,h=Math.floor(S0/M.width),F0=j0,J0=1;Z.pixelStorei(J.UNPACK_SKIP_PIXELS,Q9),Z.pixelStorei(J.UNPACK_SKIP_ROWS,h),Z.texSubImage2D(J.TEXTURE_2D,0,Q9,h,F0,1,y,s,M.data)}z.clearUpdateRanges(),Z.pixelStorei(J.UNPACK_ROW_LENGTH,t),Z.pixelStorei(J.UNPACK_SKIP_PIXELS,K0),Z.pixelStorei(J.UNPACK_SKIP_ROWS,O0)}}function a(z,M,y){let s=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)s=J.TEXTURE_3D;let W0=S(z,M),U0=M.source;Z.bindTexture(s,z.__webglTexture,J.TEXTURE0+y);let D0=K.get(U0);if(U0.version!==D0.__version||W0===!0){if(Z.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap!=="undefined"&&M.image instanceof ImageBitmap)===!1){let J0=o0.getPrimaries(o0.workingColorSpace),E0=M.colorSpace===fJ?null:o0.getPrimaries(M.colorSpace),I0=M.colorSpace===fJ||J0===E0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0)}Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let K0=E(M.image,!1,$.maxTextureSize);K0=J9(M,K0);let O0=W.convert(M.format,M.colorSpace),A0=W.convert(M.type),N0=V(M.internalFormat,O0,A0,M.normalized,M.colorSpace,M.isVideoTexture);u0(s,M);let H0,S0=M.mipmaps,j0=M.isVideoTexture!==!0,Q9=D0.__version===void 0||W0===!0,h=U0.dataReady,F0=P(M,K0);if(M.isDepthTexture){if(N0=A(M.format===bJ,M.type),Q9)if(j0)Z.texStorage2D(J.TEXTURE_2D,1,N0,K0.width,K0.height);else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,O0,A0,null)}else if(M.isDataTexture)if(S0.length>0){if(j0&&Q9)Z.texStorage2D(J.TEXTURE_2D,F0,N0,S0[0].width,S0[0].height);for(let J0=0,E0=S0.length;J0<E0;J0++)if(H0=S0[J0],j0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,A0,H0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,A0,H0.data);M.generateMipmaps=!1}else if(j0){if(Q9)Z.texStorage2D(J.TEXTURE_2D,F0,N0,K0.width,K0.height);if(h)d(M,K0,O0,A0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,O0,A0,K0.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(j0&&Q9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,F0,N0,S0[0].width,S0[0].height,K0.depth);for(let J0=0,E0=S0.length;J0<E0;J0++)if(H0=S0[J0],M.format!==y8)if(O0!==null)if(j0){if(h)if(M.layerUpdates.size>0){let I0=oK(H0.width,H0.height,M.format,M.type);for(let Y0 of M.layerUpdates){let R0=H0.data.subarray(Y0*I0/H0.data.BYTES_PER_ELEMENT,(Y0+1)*I0/H0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,Y0,H0.width,H0.height,1,O0,R0)}}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,K0.depth,O0,H0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,K0.depth,0,H0.data,0,0);else b0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j0){if(h)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,K0.depth,O0,A0,H0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,K0.depth,0,O0,A0,H0.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(j0&&Q9)Z.texStorage2D(J.TEXTURE_2D,F0,N0,S0[0].width,S0[0].height);for(let J0=0,E0=S0.length;J0<E0;J0++)if(H0=S0[J0],M.format!==y8)if(O0!==null)if(j0){if(h)Z.compressedTexSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,H0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,H0.data);else b0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,A0,H0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,A0,H0.data)}else if(M.isDataArrayTexture)if(j0){if(Q9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,F0,N0,K0.width,K0.height,K0.depth);if(h)if(M.layerUpdates.size>0){let J0=oK(K0.width,K0.height,M.format,M.type);for(let E0 of M.layerUpdates){let I0=K0.data.subarray(E0*J0/K0.data.BYTES_PER_ELEMENT,(E0+1)*J0/K0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,E0,K0.width,K0.height,1,O0,A0,I0)}M.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,K0.width,K0.height,K0.depth,O0,A0,K0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,N0,K0.width,K0.height,K0.depth,0,O0,A0,K0.data);else if(M.isData3DTexture)if(j0){if(Q9)Z.texStorage3D(J.TEXTURE_3D,F0,N0,K0.width,K0.height,K0.depth);if(h)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,K0.width,K0.height,K0.depth,O0,A0,K0.data)}else Z.texImage3D(J.TEXTURE_3D,0,N0,K0.width,K0.height,K0.depth,0,O0,A0,K0.data);else if(M.isFramebufferTexture){if(Q9)if(j0)Z.texStorage2D(J.TEXTURE_2D,F0,N0,K0.width,K0.height);else{let{width:J0,height:E0}=K0;for(let I0=0;I0<F0;I0++)Z.texImage2D(J.TEXTURE_2D,I0,N0,J0,E0,0,O0,A0,null),J0>>=1,E0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let J0=J.canvas;if(!J0.hasAttribute("layoutsubtree"))J0.setAttribute("layoutsubtree","true");if(K0.parentNode!==J0){J0.appendChild(K0),U.add(M),J0.onpaint=(E0)=>{let I0=E0.changedElements;for(let Y0 of U)if(I0.includes(Y0.image))Y0.needsUpdate=!0},J0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,K0);else{let{RGBA:I0,RGBA:Y0,UNSIGNED_BYTE:R0}=J;J.texElementImage2D(J.TEXTURE_2D,0,I0,Y0,R0,K0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(S0.length>0){if(j0&&Q9){let J0=N9(S0[0]);Z.texStorage2D(J.TEXTURE_2D,F0,N0,J0.width,J0.height)}for(let J0=0,E0=S0.length;J0<E0;J0++)if(H0=S0[J0],j0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,O0,A0,H0)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,O0,A0,H0);M.generateMipmaps=!1}else if(j0){if(Q9){let J0=N9(K0);Z.texStorage2D(J.TEXTURE_2D,F0,N0,J0.width,J0.height)}if(h)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,O0,A0,K0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,O0,A0,K0);if(D(M))R(s);if(D0.__version=U0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function Q0(z,M,y){if(M.image.length!==6)return;let s=S(z,M),W0=M.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+y);let U0=K.get(W0);if(W0.version!==U0.__version||s===!0){Z.activeTexture(J.TEXTURE0+y);let D0=o0.getPrimaries(o0.workingColorSpace),t=M.colorSpace===fJ?null:o0.getPrimaries(M.colorSpace),K0=M.colorSpace===fJ||D0===t?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,K0);let O0=M.isCompressedTexture||M.image[0].isCompressedTexture,A0=M.image[0]&&M.image[0].isDataTexture,N0=[];for(let Y0=0;Y0<6;Y0++){if(!O0&&!A0)N0[Y0]=E(M.image[Y0],!0,$.maxCubemapSize);else N0[Y0]=A0?M.image[Y0].image:M.image[Y0];N0[Y0]=J9(M,N0[Y0])}let H0=N0[0],S0=W.convert(M.format,M.colorSpace),j0=W.convert(M.type),Q9=V(M.internalFormat,S0,j0,M.normalized,M.colorSpace),h=M.isVideoTexture!==!0,F0=U0.__version===void 0||s===!0,J0=W0.dataReady,E0=P(M,H0);u0(J.TEXTURE_CUBE_MAP,M);let I0;if(O0){if(h&&F0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,E0,Q9,H0.width,H0.height);for(let Y0=0;Y0<6;Y0++){I0=N0[Y0].mipmaps;for(let R0=0;R0<I0.length;R0++){let d0=I0[R0];if(M.format!==y8)if(S0!==null)if(h){if(J0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,d0.width,d0.height,S0,d0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,Q9,d0.width,d0.height,0,d0.data);else b0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,d0.width,d0.height,S0,j0,d0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,Q9,d0.width,d0.height,0,S0,j0,d0.data)}}}else{if(I0=M.mipmaps,h&&F0){if(I0.length>0)E0++;let Y0=N9(N0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,E0,Q9,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(A0){if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,N0[Y0].width,N0[Y0].height,S0,j0,N0[Y0].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,Q9,N0[Y0].width,N0[Y0].height,0,S0,j0,N0[Y0].data);for(let R0=0;R0<I0.length;R0++){let D9=I0[R0].image[Y0].image;if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,D9.width,D9.height,S0,j0,D9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,Q9,D9.width,D9.height,0,S0,j0,D9.data)}}else{if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,S0,j0,N0[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,Q9,S0,j0,N0[Y0]);for(let R0=0;R0<I0.length;R0++){let d0=I0[R0];if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,S0,j0,d0.image[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,Q9,S0,j0,d0.image[Y0])}}}if(D(M))R(J.TEXTURE_CUBE_MAP);if(U0.__version=W0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function r(z,M,y,s,W0,U0){let D0=W.convert(y.format,y.colorSpace),t=W.convert(y.type),K0=V(y.internalFormat,D0,t,y.normalized,y.colorSpace),O0=K.get(M),A0=K.get(y);if(A0.__renderTarget=M,!O0.__hasExternalTextures){let N0=Math.max(1,M.width>>U0),H0=Math.max(1,M.height>>U0);if(W0===J.TEXTURE_3D||W0===J.TEXTURE_2D_ARRAY)Z.texImage3D(W0,U0,K0,N0,H0,M.depth,0,D0,t,null);else Z.texImage2D(W0,U0,K0,N0,H0,0,D0,t,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,z),v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,W0,A0.__webglTexture,0,O9(M));else if(W0===J.TEXTURE_2D||W0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&W0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,W0,A0.__webglTexture,U0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function z0(z,M,y){if(J.bindRenderbuffer(J.RENDERBUFFER,z),M.depthBuffer){let s=M.depthTexture,W0=s&&s.isDepthTexture?s.type:null,U0=A(M.stencilBuffer,W0),D0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O9(M),U0,M.width,M.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,O9(M),U0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,D0,J.RENDERBUFFER,z)}else{let s=M.textures;for(let W0=0;W0<s.length;W0++){let U0=s[W0],D0=W.convert(U0.format,U0.colorSpace),t=W.convert(U0.type),K0=V(U0.internalFormat,D0,t,U0.normalized,U0.colorSpace);if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O9(M),K0,M.width,M.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,O9(M),K0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function q0(z,M,y){let s=M.isWebGLCubeRenderTarget===!0;if(Z.bindFramebuffer(J.FRAMEBUFFER,z),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W0=K.get(M.depthTexture);if(W0.__renderTarget=M,!W0.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;if(s){if(W0.__webglInit===void 0)W0.__webglInit=!0,M.depthTexture.addEventListener("dispose",_);if(W0.__webglTexture===void 0){W0.__webglTexture=J.createTexture(),Z.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),u0(J.TEXTURE_CUBE_MAP,M.depthTexture);let O0=W.convert(M.depthTexture.format),A0=W.convert(M.depthTexture.type),N0;if(M.depthTexture.format===vJ)N0=J.DEPTH_COMPONENT24;else if(M.depthTexture.format===bJ)N0=J.DEPTH24_STENCIL8;for(let H0=0;H0<6;H0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,N0,M.width,M.height,0,O0,A0,null)}}else $0(M.depthTexture,0);let U0=W0.__webglTexture,D0=O9(M),t=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,K0=M.depthTexture.format===bJ?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===vJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,U0,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,U0,0);else if(M.depthTexture.format===bJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,U0,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,U0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function y0(z){let M=K.get(z),y=z.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==z.depthTexture){let s=z.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(s){let W0=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,s.removeEventListener("dispose",W0)};s.addEventListener("dispose",W0),M.__depthDisposeCallback=W0}M.__boundDepthTexture=s}if(z.depthTexture&&!M.__autoAllocateDepthBuffer)if(y)for(let s=0;s<6;s++)q0(M.__webglFramebuffer[s],z,s);else{let s=z.texture.mipmaps;if(s&&s.length>0)q0(M.__webglFramebuffer[0],z,0);else q0(M.__webglFramebuffer,z,0)}else if(y){M.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[s]),M.__webglDepthbuffer[s]===void 0)M.__webglDepthbuffer[s]=J.createRenderbuffer(),z0(M.__webglDepthbuffer[s],z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}else{let s=z.texture.mipmaps;if(s&&s.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),z0(M.__webglDepthbuffer,z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function m0(z,M,y){let s=K.get(z);if(M!==void 0)r(s.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)y0(z)}function h0(z){let M=z.texture,y=K.get(z),s=K.get(M);z.addEventListener("dispose",I);let W0=z.textures,U0=z.isWebGLCubeRenderTarget===!0,D0=W0.length>1;if(!D0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=M.version,X.memory.textures++}if(U0){y.__webglFramebuffer=[];for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer[t]=[];for(let K0=0;K0<M.mipmaps.length;K0++)y.__webglFramebuffer[t][K0]=J.createFramebuffer()}else y.__webglFramebuffer[t]=J.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer=[];for(let t=0;t<M.mipmaps.length;t++)y.__webglFramebuffer[t]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(D0)for(let t=0,K0=W0.length;t<K0;t++){let O0=K.get(W0[t]);if(O0.__webglTexture===void 0)O0.__webglTexture=J.createTexture(),X.memory.textures++}if(z.samples>0&&v(z)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let t=0;t<W0.length;t++){let K0=W0[t];y.__webglColorRenderbuffer[t]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[t]);let O0=W.convert(K0.format,K0.colorSpace),A0=W.convert(K0.type),N0=V(K0.internalFormat,O0,A0,K0.normalized,K0.colorSpace,z.isXRRenderTarget===!0),H0=O9(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,H0,N0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+t,J.RENDERBUFFER,y.__webglColorRenderbuffer[t])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),z0(y.__webglDepthRenderbuffer,z,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){Z.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),u0(J.TEXTURE_CUBE_MAP,M);for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(y.__webglFramebuffer[t][K0],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,K0);else r(y.__webglFramebuffer[t],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0);if(D(M))R(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(D0){for(let t=0,K0=W0.length;t<K0;t++){let O0=W0[t],A0=K.get(O0),N0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)N0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(N0,A0.__webglTexture),u0(N0,O0),r(y.__webglFramebuffer,z,O0,J.COLOR_ATTACHMENT0+t,N0,0),D(O0))R(N0)}Z.unbindTexture()}else{let t=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)t=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(t,s.__webglTexture),u0(t,M),M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(y.__webglFramebuffer[K0],z,M,J.COLOR_ATTACHMENT0,t,K0);else r(y.__webglFramebuffer,z,M,J.COLOR_ATTACHMENT0,t,0);if(D(M))R(t);Z.unbindTexture()}if(z.depthBuffer)y0(z)}function i0(z){let M=z.textures;for(let y=0,s=M.length;y<s;y++){let W0=M[y];if(D(W0)){let U0=k(z),D0=K.get(W0).__webglTexture;Z.bindTexture(U0,D0),R(U0),Z.unbindTexture()}}}let r0=[],V9=[];function E9(z){if(z.samples>0){if(v(z)===!1){let{textures:M,width:y,height:s}=z,W0=J.COLOR_BUFFER_BIT,U0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,D0=K.get(z),t=M.length>1;if(t)for(let O0=0;O0<M.length;O0++)Z.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,D0.__webglMultisampledFramebuffer);let K0=z.texture.mipmaps;if(K0&&K0.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer);for(let O0=0;O0<M.length;O0++){if(z.resolveDepthBuffer){if(z.depthBuffer)W0|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)W0|=J.STENCIL_BUFFER_BIT}if(t){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[O0]);let A0=K.get(M[O0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,A0,0)}if(J.blitFramebuffer(0,0,y,s,0,0,y,s,W0,J.NEAREST),H===!0){if(r0.length=0,V9.length=0,r0.push(J.COLOR_ATTACHMENT0+O0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)r0.push(U0),V9.push(U0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,V9);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,r0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),t)for(let O0=0;O0<M.length;O0++){Z.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[O0]);let A0=K.get(M[O0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,A0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&H){let M=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function O9(z){return Math.min($.maxSamples,z.samples)}function v(z){let M=K.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function A9(z){let M=X.render.frame;if(q.get(z)!==M)q.set(z,M),z.update()}function J9(z,M){let{colorSpace:y,format:s,type:W0}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return M;if(y!==LK&&y!==fJ)if(o0.getTransfer(y)===q9){if(s!==y8||W0!==C8)b0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else f0("WebGLTextures: Unsupported texture color space:",y);return M}function N9(z){if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement)N.width=z.naturalWidth||z.width,N.height=z.naturalHeight||z.height;else if(typeof VideoFrame!=="undefined"&&z instanceof VideoFrame)N.width=z.displayWidth,N.height=z.displayHeight;else N.width=z.width,N.height=z.height;return N}this.allocateTextureUnit=n,this.resetTextureUnits=m,this.getTextureUnits=T,this.setTextureUnits=w,this.setTexture2D=$0,this.setTexture2DArray=i,this.setTexture3D=Z0,this.setTextureCube=X0,this.rebindTextures=m0,this.setupRenderTarget=h0,this.updateRenderTargetMipmap=i0,this.updateMultisampleRenderTarget=E9,this.setupDepthRenderbuffer=y0,this.setupFrameBufferTexture=r,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return Z.buffers.depth.getReversed()}}function dq(J,Q){function Z(K,$=fJ){let W,X=o0.getTransfer($);if(K===C8)return J.UNSIGNED_BYTE;if(K===hZ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===xZ)return J.UNSIGNED_SHORT_5_5_5_1;if(K===HX)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===UX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===XX)return J.BYTE;if(K===YX)return J.SHORT;if(K===a6)return J.UNSIGNED_SHORT;if(K===fZ)return J.INT;if(K===LJ)return J.UNSIGNED_INT;if(K===QJ)return J.FLOAT;if(K===b8)return J.HALF_FLOAT;if(K===NX)return J.ALPHA;if(K===GX)return J.RGB;if(K===y8)return J.RGBA;if(K===vJ)return J.DEPTH_COMPONENT;if(K===bJ)return J.DEPTH_STENCIL;if(K===qX)return J.RED;if(K===gZ)return J.RED_INTEGER;if(K===yJ)return J.RG;if(K===pZ)return J.RG_INTEGER;if(K===mZ)return J.RGBA_INTEGER;if(K===n7||K===s7||K===i7||K===o7)if(X===q9)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(K===n7)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===s7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===i7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===o7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(K===n7)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===s7)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===i7)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===o7)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===dZ||K===uZ||K===lZ||K===cZ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(K===dZ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===uZ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===lZ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===cZ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===nZ||K===sZ||K===iZ||K===oZ||K===aZ||K===a7||K===rZ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(K===nZ||K===sZ)return X===q9?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(K===iZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(K===oZ)return W.COMPRESSED_R11_EAC;if(K===aZ)return W.COMPRESSED_SIGNED_R11_EAC;if(K===a7)return W.COMPRESSED_RG11_EAC;if(K===rZ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===tZ||K===eZ||K===JK||K===QK||K===ZK||K===KK||K===$K||K===WK||K===XK||K===YK||K===HK||K===UK||K===NK||K===GK)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(K===tZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===eZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===JK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===QK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===ZK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===KK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===$K)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===WK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===XK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===YK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===HK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===UK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===NK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===GK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===qK||K===DK||K===FK)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(K===qK)return X===q9?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===DK)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===FK)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===EK||K===OK||K===r7||K===RK)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(K===EK)return W.COMPRESSED_RED_RGTC1_EXT;if(K===OK)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===r7)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===RK)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===V6)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:Z}}var uq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lq=`
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

}`;class YY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new UQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new t9({vertexShader:uq,fragmentShader:lq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new K8(new Z7(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HY extends f8{constructor(J,Q){super();let Z=this,K=null,$=1,W=null,X="local-floor",Y=1,H=null,N=null,q=null,U=null,G=null,F=null,O=typeof XRWebGLBinding!=="undefined",L=new YY,E={},D=Q.getContextAttributes(),R=null,k=null,V=[],A=[],P=new x0,_=null,I=null,B=new l9;B.viewport=new Y9;let p=new l9;p.viewport=new Y9;let j=[B,p],b=new cK,m=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let g=V[S];if(g===void 0)g=new e6,V[S]=g;return g.getTargetRaySpace()},this.getControllerGrip=function(S){let g=V[S];if(g===void 0)g=new e6,V[S]=g;return g.getGripSpace()},this.getHand=function(S){let g=V[S];if(g===void 0)g=new e6,V[S]=g;return g.getHandSpace()};function w(S){let g=A.indexOf(S.inputSource);if(g===-1)return;let d=V[g];if(d!==void 0)d.update(S.inputSource,S.frame,H||W),d.dispatchEvent({type:S.type,data:S.inputSource})}function n(){K.removeEventListener("select",w),K.removeEventListener("selectstart",w),K.removeEventListener("selectend",w),K.removeEventListener("squeeze",w),K.removeEventListener("squeezestart",w),K.removeEventListener("squeezeend",w),K.removeEventListener("end",n),K.removeEventListener("inputsourceschange",u);for(let S=0;S<V.length;S++){let g=A[S];if(g===null)continue;A[S]=null,V[S].disconnect(g)}m=null,T=null,L.reset();for(let S in E)delete E[S];if(J.setRenderTarget(R),G=null,U=null,q=null,K=null,k=null,u0.stop(),Z.isPresenting=!1,J.setPixelRatio(_),J.setSize(P.width,P.height,!1),I!==null){let S=I.camera;S.fov=I.fov,S.zoom=I.zoom,S.updateProjectionMatrix(),I=null}Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){if($=S,Z.isPresenting===!0)b0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){if(X=S,Z.isPresenting===!0)b0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(S){H=S},this.getBaseLayer=function(){return U!==null?U:G},this.getBinding=function(){if(q===null&&O)q=new XRWebGLBinding(K,Q);return q},this.getFrame=function(){return F},this.getSession=function(){return K},this.setSession=async function(S){if(K=S,K!==null){if(R=J.getRenderTarget(),K.addEventListener("select",w),K.addEventListener("selectstart",w),K.addEventListener("selectend",w),K.addEventListener("squeeze",w),K.addEventListener("squeezestart",w),K.addEventListener("squeezeend",w),K.addEventListener("end",n),K.addEventListener("inputsourceschange",u),D.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(P),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let d={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:$};G=new XRWebGLLayer(K,Q,d),K.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),k=new Z8(G.framebufferWidth,G.framebufferHeight,{format:y8,type:C8,colorSpace:J.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let d=null,a=null,Q0=null;if(D.depth)Q0=D.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,d=D.stencil?bJ:vJ,a=D.stencil?V6:LJ;let r={colorFormat:Q.RGBA8,depthFormat:Q0,scaleFactor:$};q=this.getBinding(),U=q.createProjectionLayer(r),K.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),k=new Z8(U.textureWidth,U.textureHeight,{format:y8,type:C8,depthTexture:new hJ(U.textureWidth,U.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,d),stencilBuffer:D.stencil,colorSpace:J.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1,resolveStencilBuffer:U.ignoreDepthValues===!1,storeMultisampledDepthBuffer:U.ignoreDepthValues===!1,storeMultisampledStencilBuffer:U.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await K.requestReferenceSpace(X),u0.setContext(K),u0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function u(S){for(let g=0;g<S.removed.length;g++){let d=S.removed[g],a=A.indexOf(d);if(a>=0)A[a]=null,V[a].disconnect(d)}for(let g=0;g<S.added.length;g++){let d=S.added[g],a=A.indexOf(d);if(a===-1){for(let r=0;r<V.length;r++)if(r>=A.length){A.push(d),a=r;break}else if(A[r]===null){A[r]=d,a=r;break}if(a===-1)break}let Q0=V[a];if(Q0)Q0.connect(d)}}let $0=new x,i=new x;function Z0(S,g,d){$0.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(d.matrixWorld);let a=$0.distanceTo(i),Q0=g.projectionMatrix.elements,r=d.projectionMatrix.elements,z0=Q0[14]/(Q0[10]-1),q0=Q0[14]/(Q0[10]+1),y0=(Q0[9]+1)/Q0[5],m0=(Q0[9]-1)/Q0[5],h0=(Q0[8]-1)/Q0[0],i0=(r[8]+1)/r[0],r0=z0*h0,V9=z0*i0,E9=a/(-h0+i0),O9=E9*-h0;if(g.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(O9),S.translateZ(E9),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),Q0[10]===-1)S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse);else{let v=z0+E9,A9=q0+E9,J9=r0-O9,N9=V9+(a-O9),z=y0*q0/A9*v,M=m0*q0/A9*v;S.projectionMatrix.makePerspective(J9,N9,z,M,v,A9),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function X0(S,g){if(g===null)S.matrixWorld.copy(S.matrix);else S.matrixWorld.multiplyMatrices(g.matrixWorld,S.matrix);S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(K===null)return;let{near:g,far:d}=S;if(L.texture!==null){if(L.depthNear>0)g=L.depthNear;if(L.depthFar>0)d=L.depthFar}if(b.near=p.near=B.near=g,b.far=p.far=B.far=d,m!==b.near||T!==b.far)K.updateRenderState({depthNear:b.near,depthFar:b.far}),m=b.near,T=b.far;b.layers.mask=S.layers.mask|6,B.layers.mask=b.layers.mask&-5,p.layers.mask=b.layers.mask&-3;let a=S.parent,Q0=b.cameras;X0(b,a);for(let r=0;r<Q0.length;r++)X0(Q0[r],a);if(Q0.length===2)Z0(b,B,p);else b.projectionMatrix.copy(B.projectionMatrix);if(I===null&&S.isPerspectiveCamera)I={camera:S,fov:S.fov,zoom:S.zoom};w0(S,b,a)};function w0(S,g,d){if(d===null)S.matrix.copy(g.matrixWorld);else S.matrix.copy(d.matrixWorld),S.matrix.invert(),S.matrix.multiply(g.matrixWorld);if(S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse),S.isPerspectiveCamera)S.fov=O6*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(U===null&&G===null)return;return Y},this.setFoveation=function(S){if(Y=S,U!==null)U.fixedFoveation=S;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=S},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(b)},this.getCameraTexture=function(S){return E[S]};let T0=null;function n0(S,g){if(N=g.getViewerPose(H||W),F=g,N!==null){let d=N.views;if(G!==null)J.setRenderTargetFramebuffer(k,G.framebuffer),J.setRenderTarget(k);let a=!1;if(d.length!==b.cameras.length)b.cameras.length=0,a=!0;for(let q0=0;q0<d.length;q0++){let y0=d[q0],m0=null;if(G!==null)m0=G.getViewport(y0);else{let i0=q.getViewSubImage(U,y0);if(m0=i0.viewport,q0===0)J.setRenderTargetTextures(k,i0.colorTexture,i0.depthStencilTexture),J.setRenderTarget(k)}let h0=j[q0];if(h0===void 0)h0=new l9,h0.layers.enable(q0),h0.viewport=new Y9,j[q0]=h0;if(h0.matrix.fromArray(y0.transform.matrix),h0.matrix.decompose(h0.position,h0.quaternion,h0.scale),h0.projectionMatrix.fromArray(y0.projectionMatrix),h0.projectionMatrixInverse.copy(h0.projectionMatrix).invert(),h0.viewport.set(m0.x,m0.y,m0.width,m0.height),q0===0)b.matrix.copy(h0.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(a===!0)b.cameras.push(h0)}let Q0=K.enabledFeatures;if(Q0&&Q0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&O){q=Z.getBinding();let q0=q.getDepthInformation(d[0]);if(q0&&q0.isValid&&q0.texture)L.init(q0,K.renderState)}if(Q0&&Q0.includes("camera-access")&&O){J.state.unbindTexture(),q=Z.getBinding();for(let q0=0;q0<d.length;q0++){let y0=d[q0].camera;if(y0){let m0=E[y0];if(!m0)m0=new UQ,E[y0]=m0;let h0=q.getCameraImage(y0);m0.sourceTexture=h0}}}}for(let d=0;d<V.length;d++){let a=A[d],Q0=V[d];if(a!==null&&Q0!==void 0)Q0.update(a,g,H||W)}if(T0)T0(S,g);if(g.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:g});F=null}let u0=new aX;u0.setAnimationLoop(n0),this.setAnimationLoop=function(S){T0=S},this.dispose=function(){}}}var cq=new M9,UY=new g0;UY.set(-1,0,0,0,1,0,0,0,1);function nq(J,Q){function Z(E,D){if(E.matrixAutoUpdate===!0)E.updateMatrix();D.value.copy(E.matrix)}function K(E,D){if(D.color.getRGB(E.fogColor.value,wK(J)),D.isFog)E.fogNear.value=D.near,E.fogFar.value=D.far;else if(D.isFogExp2)E.fogDensity.value=D.density}function $(E,D,R,k,V){if(D.isNodeMaterial)D.uniformsNeedUpdate=!1;else if(D.isMeshBasicMaterial)W(E,D);else if(D.isMeshLambertMaterial){if(W(E,D),D.envMap)E.envMapIntensity.value=D.envMapIntensity}else if(D.isMeshToonMaterial)W(E,D),U(E,D);else if(D.isMeshPhongMaterial){if(W(E,D),q(E,D),D.envMap)E.envMapIntensity.value=D.envMapIntensity}else if(D.isMeshStandardMaterial){if(W(E,D),G(E,D),D.isMeshPhysicalMaterial)F(E,D,V)}else if(D.isMeshMatcapMaterial)W(E,D),O(E,D);else if(D.isMeshDepthMaterial)W(E,D);else if(D.isMeshDistanceMaterial)W(E,D),L(E,D);else if(D.isMeshNormalMaterial)W(E,D);else if(D.isLineBasicMaterial){if(X(E,D),D.isLineDashedMaterial)Y(E,D)}else if(D.isPointsMaterial)H(E,D,R,k);else if(D.isSpriteMaterial)N(E,D);else if(D.isShadowMaterial)E.color.value.copy(D.color),E.opacity.value=D.opacity;else if(D.isShaderMaterial)D.uniformsNeedUpdate=!1}function W(E,D){if(E.opacity.value=D.opacity,D.color)E.diffuse.value.copy(D.color);if(D.emissive)E.emissive.value.copy(D.emissive).multiplyScalar(D.emissiveIntensity);if(D.map)E.map.value=D.map,Z(D.map,E.mapTransform);if(D.alphaMap)E.alphaMap.value=D.alphaMap,Z(D.alphaMap,E.alphaMapTransform);if(D.bumpMap){if(E.bumpMap.value=D.bumpMap,Z(D.bumpMap,E.bumpMapTransform),E.bumpScale.value=D.bumpScale,D.side===o9)E.bumpScale.value*=-1}if(D.normalMap){if(E.normalMap.value=D.normalMap,Z(D.normalMap,E.normalMapTransform),E.normalScale.value.copy(D.normalScale),D.side===o9)E.normalScale.value.negate()}if(D.displacementMap)E.displacementMap.value=D.displacementMap,Z(D.displacementMap,E.displacementMapTransform),E.displacementScale.value=D.displacementScale,E.displacementBias.value=D.displacementBias;if(D.emissiveMap)E.emissiveMap.value=D.emissiveMap,Z(D.emissiveMap,E.emissiveMapTransform);if(D.specularMap)E.specularMap.value=D.specularMap,Z(D.specularMap,E.specularMapTransform);if(D.alphaTest>0)E.alphaTest.value=D.alphaTest;let R=Q.get(D),k=R.envMap,V=R.envMapRotation;if(k){if(E.envMap.value=k,E.envMapRotation.value.setFromMatrix4(cq.makeRotationFromEuler(V)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(UY);E.reflectivity.value=D.reflectivity,E.ior.value=D.ior,E.refractionRatio.value=D.refractionRatio}if(D.lightMap)E.lightMap.value=D.lightMap,E.lightMapIntensity.value=D.lightMapIntensity,Z(D.lightMap,E.lightMapTransform);if(D.aoMap)E.aoMap.value=D.aoMap,E.aoMapIntensity.value=D.aoMapIntensity,Z(D.aoMap,E.aoMapTransform)}function X(E,D){if(E.diffuse.value.copy(D.color),E.opacity.value=D.opacity,D.map)E.map.value=D.map,Z(D.map,E.mapTransform)}function Y(E,D){E.dashSize.value=D.dashSize,E.totalSize.value=D.dashSize+D.gapSize,E.scale.value=D.scale}function H(E,D,R,k){if(E.diffuse.value.copy(D.color),E.opacity.value=D.opacity,E.size.value=D.size*R,E.scale.value=k*0.5,D.map)E.map.value=D.map,Z(D.map,E.uvTransform);if(D.alphaMap)E.alphaMap.value=D.alphaMap,Z(D.alphaMap,E.alphaMapTransform);if(D.alphaTest>0)E.alphaTest.value=D.alphaTest}function N(E,D){if(E.diffuse.value.copy(D.color),E.opacity.value=D.opacity,E.rotation.value=D.rotation,D.map)E.map.value=D.map,Z(D.map,E.mapTransform);if(D.alphaMap)E.alphaMap.value=D.alphaMap,Z(D.alphaMap,E.alphaMapTransform);if(D.alphaTest>0)E.alphaTest.value=D.alphaTest}function q(E,D){E.specular.value.copy(D.specular),E.shininess.value=Math.max(D.shininess,0.0001)}function U(E,D){if(D.gradientMap)E.gradientMap.value=D.gradientMap}function G(E,D){if(E.metalness.value=D.metalness,D.metalnessMap)E.metalnessMap.value=D.metalnessMap,Z(D.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=D.roughness,D.roughnessMap)E.roughnessMap.value=D.roughnessMap,Z(D.roughnessMap,E.roughnessMapTransform);if(D.envMap)E.envMapIntensity.value=D.envMapIntensity}function F(E,D,R){if(E.ior.value=D.ior,D.sheen>0){if(E.sheenColor.value.copy(D.sheenColor).multiplyScalar(D.sheen),E.sheenRoughness.value=D.sheenRoughness,D.sheenColorMap)E.sheenColorMap.value=D.sheenColorMap,Z(D.sheenColorMap,E.sheenColorMapTransform);if(D.sheenRoughnessMap)E.sheenRoughnessMap.value=D.sheenRoughnessMap,Z(D.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(D.clearcoat>0){if(E.clearcoat.value=D.clearcoat,E.clearcoatRoughness.value=D.clearcoatRoughness,D.clearcoatMap)E.clearcoatMap.value=D.clearcoatMap,Z(D.clearcoatMap,E.clearcoatMapTransform);if(D.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=D.clearcoatRoughnessMap,Z(D.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(D.clearcoatNormalMap){if(E.clearcoatNormalMap.value=D.clearcoatNormalMap,Z(D.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(D.clearcoatNormalScale),D.side===o9)E.clearcoatNormalScale.value.negate()}}if(D.dispersion>0)E.dispersion.value=D.dispersion;if(D.retroreflectivity>0)E.retroreflectivity.value=D.retroreflectivity;if(D.iridescence>0){if(E.iridescence.value=D.iridescence,E.iridescenceIOR.value=D.iridescenceIOR,E.iridescenceThicknessMinimum.value=D.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=D.iridescenceThicknessRange[1],D.iridescenceMap)E.iridescenceMap.value=D.iridescenceMap,Z(D.iridescenceMap,E.iridescenceMapTransform);if(D.iridescenceThicknessMap)E.iridescenceThicknessMap.value=D.iridescenceThicknessMap,Z(D.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(D.transmission>0){if(E.transmission.value=D.transmission,E.transmissionSamplerMap.value=R.texture,E.transmissionSamplerSize.value.set(R.width,R.height),D.transmissionMap)E.transmissionMap.value=D.transmissionMap,Z(D.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=D.thickness,D.thicknessMap)E.thicknessMap.value=D.thicknessMap,Z(D.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=D.attenuationDistance,E.attenuationColor.value.copy(D.attenuationColor)}if(D.anisotropy>0){if(E.anisotropyVector.value.set(D.anisotropy*Math.cos(D.anisotropyRotation),D.anisotropy*Math.sin(D.anisotropyRotation)),D.anisotropyMap)E.anisotropyMap.value=D.anisotropyMap,Z(D.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=D.specularIntensity,E.specularColor.value.copy(D.specularColor),D.specularColorMap)E.specularColorMap.value=D.specularColorMap,Z(D.specularColorMap,E.specularColorMapTransform);if(D.specularIntensityMap)E.specularIntensityMap.value=D.specularIntensityMap,Z(D.specularIntensityMap,E.specularIntensityMapTransform)}function O(E,D){if(D.matcap)E.matcap.value=D.matcap}function L(E,D){let R=Q.get(D).light;E.referencePosition.value.setFromMatrixPosition(R.matrixWorld),E.nearDistance.value=R.shadow.camera.near,E.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:$}}function sq(J,Q,Z,K){let $={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,A){let P=A.program;K.uniformBlockBinding(V,P)}function N(V,A){let P=$[V.id];if(P===void 0)E(V),P=q(V),$[V.id]=P,V.addEventListener("dispose",R);let _=A.program;K.updateUBOMapping(V,_);let I=Q.render.frame;if(W[V.id]!==I)G(V),W[V.id]=I}function q(V){let A=U();V.__bindingPointIndex=A;let P=J.createBuffer(),_=V.__size,I=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,_,I),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,P),P}function U(){for(let V=0;V<Y;V++)if(X.indexOf(V)===-1)return X.push(V),V;return f0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(V){let A=$[V.id],P=V.uniforms,_=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let I=0,B=P.length;I<B;I++){let p=P[I];if(Array.isArray(p))for(let j=0,b=p.length;j<b;j++)F(p[j],I,j,_);else F(p,I,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(V,A,P,_){if(L(V,A,P,_)===!0){let{__offset:I,value:B}=V;if(Array.isArray(B)){let p=0;for(let j=0;j<B.length;j++){let b=B[j],m=D(b);if(O(b,V.__data,p),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))p+=m.storage/Float32Array.BYTES_PER_ELEMENT}}else O(B,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,I,V.__data)}}function O(V,A,P){if(typeof V==="number"||typeof V==="boolean")A[0]=V;else if(V.isMatrix3)A[0]=V.elements[0],A[1]=V.elements[1],A[2]=V.elements[2],A[3]=0,A[4]=V.elements[3],A[5]=V.elements[4],A[6]=V.elements[5],A[7]=0,A[8]=V.elements[6],A[9]=V.elements[7],A[10]=V.elements[8],A[11]=0;else if(ArrayBuffer.isView(V))A.set(new V.constructor(V.buffer,V.byteOffset,A.length));else V.toArray(A,P)}function L(V,A,P,_){let I=V.value,B=A+"_"+P;if(_[B]===void 0){if(typeof I==="number"||typeof I==="boolean")_[B]=I;else if(ArrayBuffer.isView(I))_[B]=I.slice();else _[B]=I.clone();return!0}else{let p=_[B];if(typeof I==="number"||typeof I==="boolean"){if(p!==I)return _[B]=I,!0}else if(ArrayBuffer.isView(I))return!0;else if(p.equals(I)===!1)return p.copy(I),!0}return!1}function E(V){let A=V.uniforms,P=0,_=16;for(let B=0,p=A.length;B<p;B++){let j=Array.isArray(A[B])?A[B]:[A[B]];for(let b=0,m=j.length;b<m;b++){let T=j[b],w=Array.isArray(T.value)?T.value:[T.value];for(let n=0,u=w.length;n<u;n++){let $0=w[n],i=D($0),Z0=P%_,X0=Z0%i.boundary,w0=Z0+X0;if(P+=X0,w0!==0&&_-w0<i.storage)P+=_-w0;T.__data=new Float32Array(i.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=P,P+=i.storage}}}let I=P%_;if(I>0)P+=_-I;return V.__size=P,V.__cache={},this}function D(V){let A={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")A.boundary=4,A.storage=4;else if(V.isVector2)A.boundary=8,A.storage=8;else if(V.isVector3||V.isColor)A.boundary=16,A.storage=12;else if(V.isVector4)A.boundary=16,A.storage=16;else if(V.isMatrix3)A.boundary=48,A.storage=48;else if(V.isMatrix4)A.boundary=64,A.storage=64;else if(V.isTexture)b0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))A.boundary=16,A.storage=V.byteLength;else b0("WebGLRenderer: Unsupported uniform value type.",V);return A}function R(V){let A=V.target;A.removeEventListener("dispose",R);let P=X.indexOf(A.__bindingPointIndex);X.splice(P,1),J.deleteBuffer($[A.id]),delete $[A.id],delete W[A.id]}function k(){for(let V in $)J.deleteBuffer($[V]);X=[],$={},W={}}return{bind:H,update:N,dispose:k}}var iq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),x8=null;function oq(){if(x8===null)x8=new _K(iq,16,16,yJ,b8),x8.name="DFG_LUT",x8.minFilter=a9,x8.magFilter=a9,x8.wrapS=l7,x8.wrapT=l7,x8.generateMipmaps=!1,x8.needsUpdate=!0;return x8}class X${constructor(J={}){let{canvas:Q=VX(),context:Z=null,depth:K=!0,stencil:$=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:N="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:U=!1,outputBufferType:G=C8}=J;this.isWebGLRenderer=!0;let F;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=Z.getContextAttributes().alpha}else F=W;let O=G,L=new Set([mZ,pZ,gZ]),E=new Set([C8,LJ,a6,V6,hZ,xZ]),D=new Uint32Array(4),R=new Int32Array(4),k=new x,V=null,A=null,P=[],_=[],I=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=V8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,p=!1,j=null,b=null,m=null,T=null;this._outputColorSpace=FX;let w=0,n=0,u=null,$0=-1,i=null,Z0=new Y9,X0=new Y9,w0=null,T0=new e0(0),n0=0,u0=Q.width,S=Q.height,g=1,d=null,a=null,Q0=new Y9(0,0,u0,S),r=new Y9(0,0,u0,S),z0=!1,q0=new YQ,y0=!1,m0=!1,h0=new M9,i0=new x,r0=new Y9,V9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},E9=!1;function O9(){return u===null?g:1}let v=Z;function A9(C,f){return Q.getContext(C,f)}let J9,N9,z,M,y,s,W0,U0,D0,t,K0,O0,A0,N0,H0,S0,j0,Q9,h,F0,J0,E0,I0;try{let C={alpha:!0,depth:K,stencil:$,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:N,failIfMajorPerformanceCaveat:q};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${zW}`);if(Q.addEventListener("webglcontextlost",d0,!1),Q.addEventListener("webglcontextrestored",D9,!1),Q.addEventListener("webglcontextcreationerror",K9,!1),v===null){if(v=A9("webgl2",C),v===null)if(A9("webgl2"))throw new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y0()}catch(C){throw Q.removeEventListener("webglcontextlost",d0,!1),Q.removeEventListener("webglcontextrestored",D9,!1),Q.removeEventListener("webglcontextcreationerror",K9,!1),f0("WebGLRenderer: "+C.message),C}function Y0(){if(J9=new Z5(v),J9.init(),J0=new dq(v,J9),N9=new nG(v,J9,J,J0),z=new pq(v,J9),N9.reversedDepthBuffer&&U)z.buffers.depth.setReversed(!0);b=v.createFramebuffer(),m=v.createFramebuffer(),T=v.createFramebuffer(),M=new W5(v),y=new Pq,s=new mq(v,J9,z,y,N9,J0,M),W0=new Q5(B),U0=new YU(v),E0=new lG(v,U0),D0=new K5(v,U0,M,E0),t=new Y5(v,D0,U0,E0,M),Q9=new X5(v,N9,s),H0=new sG(y),K0=new zq(B,W0,J9,N9,E0,H0),O0=new nq(B,y),A0=new _q,N0=new bq(J9),j0=new uG(B,W0,z,t,F,Y),S0=new gq(B,t,N9),I0=new sq(v,M,N9,z),h=new cG(v,J9,M),F0=new $5(v,J9,M),M.programs=K0.programs,B.capabilities=N9,B.extensions=J9,B.properties=y,B.renderLists=A0,B.shadowMap=S0,B.state=z,B.info=M}if(O!==C8)I=new U5(O,Q.width,Q.height,X,K,$);let R0=new HY(B,v);this.xr=R0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let C=J9.get("WEBGL_lose_context");if(C)C.loseContext()},this.forceContextRestore=function(){let C=J9.get("WEBGL_lose_context");if(C)C.restoreContext()},this.getPixelRatio=function(){return g},this.setPixelRatio=function(C){if(C===void 0)return;g=C,this.setSize(u0,S,!1)},this.getSize=function(C){return C.set(u0,S)},this.setSize=function(C,f,o=!0){if(R0.isPresenting){b0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(u0=C,S=f,Q.width=Math.floor(C*g),Q.height=Math.floor(f*g),o===!0)Q.style.width=C+"px",Q.style.height=f+"px";if(I!==null)I.setSize(Q.width,Q.height);this.setViewport(0,0,C,f)},this.getDrawingBufferSize=function(C){return C.set(u0*g,S*g).floor()},this.setDrawingBufferSize=function(C,f,o){u0=C,S=f,g=o,Q.width=Math.floor(C*o),Q.height=Math.floor(f*o),this.setViewport(0,0,C,f)},this.setEffects=function(C){if(O===C8){f0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let f=0;f<C.length;f++)if(C[f].isOutputPass===!0){b0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z0)},this.getViewport=function(C){return C.copy(Q0)},this.setViewport=function(C,f,o,l){if(C.isVector4)Q0.set(C.x,C.y,C.z,C.w);else Q0.set(C,f,o,l);z.viewport(Z0.copy(Q0).multiplyScalar(g).round())},this.getScissor=function(C){return C.copy(r)},this.setScissor=function(C,f,o,l){if(C.isVector4)r.set(C.x,C.y,C.z,C.w);else r.set(C,f,o,l);z.scissor(X0.copy(r).multiplyScalar(g).round())},this.getScissorTest=function(){return z0},this.setScissorTest=function(C){z.setScissorTest(z0=C)},this.setOpaqueSort=function(C){d=C},this.setTransparentSort=function(C){a=C},this.getClearColor=function(C){return C.copy(j0.getClearColor())},this.setClearColor=function(){j0.setClearColor(...arguments)},this.getClearAlpha=function(){return j0.getClearAlpha()},this.setClearAlpha=function(){j0.setClearAlpha(...arguments)},this.clear=function(C=!0,f=!0,o=!0){let l=0;if(C){let c=!1;if(u!==null){let L0=u.texture.format;c=L.has(L0)}if(c){let L0=u.texture.type,C0=E.has(L0),M0=j0.getClearColor(),P0=j0.getClearAlpha(),_0=M0.r,l0=M0.g,s0=M0.b;if(C0)D[0]=_0,D[1]=l0,D[2]=s0,D[3]=P0,v.clearBufferuiv(v.COLOR,0,D);else R[0]=_0,R[1]=l0,R[2]=s0,R[3]=P0,v.clearBufferiv(v.COLOR,0,R)}else l|=v.COLOR_BUFFER_BIT}if(f)l|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(o)l|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(l!==0)v.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){Q.removeEventListener("webglcontextlost",d0,!1),Q.removeEventListener("webglcontextrestored",D9,!1),Q.removeEventListener("webglcontextcreationerror",K9,!1),j0.dispose(),A0.dispose(),N0.dispose(),y.dispose(),W0.dispose(),t.dispose(),E0.dispose(),I0.dispose(),K0.dispose(),R0.dispose(),R0.removeEventListener("sessionstart",i$),R0.removeEventListener("sessionend",o$),zJ.stop()};function d0(C){C.preventDefault(),c6("WebGLRenderer: Context Lost."),p=!0}function D9(){c6("WebGLRenderer: Context Restored."),p=!1;let C=M.autoReset,f=S0.enabled,o=S0.autoUpdate,l=S0.needsUpdate,c=S0.type;Y0(),M.autoReset=C,S0.enabled=f,S0.autoUpdate=o,S0.needsUpdate=l,S0.type=c}function K9(C){f0("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function _8(C){let f=C.target;f.removeEventListener("dispose",_8),s8(f)}function s8(C){KH(C),y.remove(C)}function KH(C){let f=y.get(C).programs;if(f!==void 0){if(f.forEach(function(o){K0.releaseProgram(o)}),C.isShaderMaterial)K0.releaseShaderCache(C)}}this.renderBufferDirect=function(C,f,o,l,c,L0){if(f===null)f=V9;let C0=c.isMesh&&c.matrixWorld.determinantAffine()<0,M0=XH(C,f,o,l,c);z.setMaterial(l,C0);let P0=o.index,_0=1;if(l.wireframe===!0){if(P0=D0.getWireframeAttribute(o),P0===void 0)return;_0=2}let l0=o.drawRange,s0=o.attributes.position,k0=l0.start*_0,$9=(l0.start+l0.count)*_0;if(L0!==null)k0=Math.max(k0,L0.start*_0),$9=Math.min($9,(L0.start+L0.count)*_0);if(P0!==null)k0=Math.max(k0,0),$9=Math.min($9,P0.count);else if(s0!==void 0&&s0!==null)k0=Math.max(k0,0),$9=Math.min($9,s0.count);let C9=$9-k0;if(C9<0||C9===1/0)return;E0.setup(c,l,M0,o,P0);let R9,G9=h;if(P0!==null)R9=U0.get(P0),G9=F0,G9.setIndex(R9);if(c.isMesh)if(l.wireframe===!0)z.setLineWidth(l.wireframeLinewidth*O9()),G9.setMode(v.LINES);else G9.setMode(v.TRIANGLES);else if(c.isLine){let y9=l.linewidth;if(y9===void 0)y9=1;if(z.setLineWidth(y9*O9()),c.isLineSegments)G9.setMode(v.LINES);else if(c.isLineLoop)G9.setMode(v.LINE_LOOP);else G9.setMode(v.LINE_STRIP)}else if(c.isPoints)G9.setMode(v.POINTS);else if(c.isSprite)G9.setMode(v.TRIANGLES);if(c.isBatchedMesh)if(!J9.get("WEBGL_multi_draw")){let{_multiDrawStarts:y9,_multiDrawCounts:V0,_multiDrawCount:d9}=c,t0=P0?U0.get(P0).bytesPerElement:1,X8=y.get(l).currentProgram.getUniforms();for(let T8=0;T8<d9;T8++)X8.setValue(v,"_gl_DrawID",T8),G9.render(y9[T8]/t0,V0[T8])}else G9.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else if(c.isInstancedMesh)G9.renderInstances(k0,C9,c.count);else if(o.isInstancedBufferGeometry){let y9=o._maxInstanceCount!==void 0?o._maxInstanceCount:1/0,V0=Math.min(o.instanceCount,y9);G9.renderInstances(k0,C9,V0)}else G9.render(k0,C9)};function s$(C,f,o,l){if(j!==null&&C.isNodeMaterial)j.setObject(l,C);if(y0===!0)H0.setState(C,o,!1);if(C.transparent===!0&&C.side===j8&&C.forceSinglePass===!1)C.side=o9,C.needsUpdate=!0,L7(C,f,l),C.side=M6,C.needsUpdate=!0,L7(C,f,l),C.side=j8;else L7(C,f,l)}this.compile=function(C,f,o=null){if(o===null)o=C;if(j!==null)j.renderStart(C,f,o);if(A=N0.get(o),A.init(f),_.push(A),o.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}}),C!==o)C.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}});if(A.setupLights(),j!==null)j.updateLights(A.state.lightsArray);if(m0=this.localClippingEnabled,y0=H0.init(this.clippingPlanes,m0),y0===!0)H0.setGlobalState(this.clippingPlanes,f);if(j!==null)S0.render(A.state.shadowsArray,o,f);let l=new Set;if(C.traverse(function(c){if(!(c.isMesh||c.isPoints||c.isLine||c.isSprite))return;let L0=c.material;if(L0)if(Array.isArray(L0))for(let C0=0;C0<L0.length;C0++){let M0=L0[C0];s$(M0,o,f,c),l.add(M0)}else s$(L0,o,f,c),l.add(L0)}),A=_.pop(),j!==null)j.renderEnd();return l},this.compileAsync=function(C,f,o=null){let l=this.compile(C,f,o);return new Promise((c)=>{function L0(){if(l.forEach(function(C0){let P0=y.get(C0).currentProgram;if(P0===void 0||P0.isReady())l.delete(C0)}),l.size===0){c(C);return}setTimeout(L0,10)}if(J9.get("KHR_parallel_shader_compile")!==null)L0();else setTimeout(L0,10)})};let QZ=null;function $H(C){if(QZ)QZ(C)}function i$(){zJ.stop()}function o$(){zJ.start()}let zJ=new aX;if(zJ.setAnimationLoop($H),typeof self!=="undefined")zJ.setContext(self);this.setAnimationLoop=function(C){QZ=C,R0.setAnimationLoop(C),C===null?zJ.stop():zJ.start()},R0.addEventListener("sessionstart",i$),R0.addEventListener("sessionend",o$),this.render=function(C,f){if(f!==void 0&&f.isCamera!==!0){f0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(j!==null)j.renderStart(C,f);let o=R0.enabled===!0&&R0.isPresenting===!0,l=I!==null&&(u===null||o)&&I.begin(B,u);if(C.matrixWorldAutoUpdate===!0)C.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(R0.enabled===!0&&R0.isPresenting===!0&&(I===null||I.isCompositing()===!1)){if(R0.cameraAutoUpdate===!0)R0.updateCamera(f);f=R0.getCamera()}if(C.isScene===!0)C.onBeforeRender(B,C,f,u);if(A=N0.get(C,_.length),A.init(f),A.state.textureUnits=s.getTextureUnits(),_.push(A),h0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),q0.setFromProjectionMatrix(h0,CK,f.reversedDepth),m0=this.localClippingEnabled,y0=H0.init(this.clippingPlanes,m0),V=A0.get(C,P.length),V.init(),P.push(V),R0.enabled===!0&&R0.isPresenting===!0){let C0=B.xr.getDepthSensingMesh();if(C0!==null)ZZ(C0,f,-1/0,B.sortObjects)}if(ZZ(C,f,0,B.sortObjects),V.finish(),j!==null)j.updateLights(A.state.lightsArray);if(B.sortObjects===!0)V.sort(d,a);if(E9=R0.enabled===!1||R0.isPresenting===!1||R0.hasDepthSensing()===!1,E9)j0.addToRenderList(V,C);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(y0===!0)H0.beginShadows();let c=A.state.shadowsArray;if(S0.render(c,C,f),y0===!0)H0.endShadows();if((l&&I.hasRenderPass())===!1){let{opaque:C0,transmissive:M0}=V;if(A.setupLights(),f.isArrayCamera){let P0=f.cameras;if(M0.length>0)for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0];r$(C0,M0,C,s0)}if(E9)j0.render(C);for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0];a$(V,C,s0,s0.viewport)}}else{if(M0.length>0)r$(C0,M0,C,f);if(E9)j0.render(C);a$(V,C,f)}}if(u!==null&&n===0)s.updateMultisampleRenderTarget(u),s.updateRenderTargetMipmap(u);if(l)I.end(B);if(C.isScene===!0)C.onAfterRender(B,C,f);if(E0.resetDefaultState(),$0=-1,i=null,_.pop(),_.length>0){if(A=_[_.length-1],s.setTextureUnits(A.state.textureUnits),y0===!0)H0.setGlobalState(B.clippingPlanes,A.state.camera)}else A=null;if(P.pop(),P.length>0)V=P[P.length-1];else V=null;if(j!==null)j.renderEnd()};function ZZ(C,f,o,l){if(C.visible===!1)return;if(C.layers.test(f.layers)){if(C.isGroup)o=C.renderOrder;else if(C.isLOD){if(C.autoUpdate===!0)C.update(f)}else if(C.isLightProbeGrid)A.pushLightProbeGrid(C);else if(C.isLight){if(A.pushLight(C),C.castShadow)A.pushShadow(C)}else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(q0)){if(l)r0.setFromMatrixPosition(C.matrixWorld).applyMatrix4(h0);let C0=t.update(C),M0=C.material;if(M0.visible)V.push(C,C0,M0,o,r0.z,null,f)}}else if(C.isMesh||C.isLine||C.isPoints){if(!C.frustumCulled||C.intersectsFrustum(q0)){let C0=t.update(C),M0=C.material;if(l){if(C.boundingSphere!==void 0){if(C.boundingSphere===null)C.computeBoundingSphere();r0.copy(C.boundingSphere.center)}else{if(C0.boundingSphere===null)C0.computeBoundingSphere();r0.copy(C0.boundingSphere.center)}r0.applyMatrix4(C.matrixWorld).applyMatrix4(h0)}if(Array.isArray(M0)){let P0=C0.groups;for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0],k0=M0[s0.materialIndex];if(k0&&k0.visible)V.push(C,C0,k0,o,r0.z,s0,f)}}else if(M0.visible)V.push(C,C0,M0,o,r0.z,null,f)}}}let L0=C.children;for(let C0=0,M0=L0.length;C0<M0;C0++)ZZ(L0[C0],f,o,l)}function a$(C,f,o,l){let{opaque:c,transmissive:L0,transparent:C0}=C;if(A.setupLightsView(o),y0===!0)H0.setGlobalState(B.clippingPlanes,o);if(l)z.viewport(Z0.copy(l));if(c.length>0)M7(c,f,o);if(L0.length>0)M7(L0,f,o);if(C0.length>0)M7(C0,f,o);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function r$(C,f,o,l){if((o.isScene===!0?o.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[l.id]===void 0){let k0=J9.has("EXT_color_buffer_half_float")||J9.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[l.id]=new Z8(1,1,{generateMipmaps:!0,type:k0?b8:C8,minFilter:jJ,samples:Math.max(4,N9.samples),stencilBuffer:$,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:o0.workingColorSpace})}let L0=A.state.transmissionRenderTarget[l.id],C0=l.viewport||Z0;L0.setSize(C0.z*B.transmissionResolutionScale,C0.w*B.transmissionResolutionScale);let M0=B.getRenderTarget(),P0=B.getActiveCubeFace(),_0=B.getActiveMipmapLevel();if(B.setRenderTarget(L0),B.getClearColor(T0),n0=B.getClearAlpha(),n0<1)B.setClearColor(16777215,0.5);if(B.clear(),E9)j0.render(o);let l0=B.toneMapping;B.toneMapping=V8;let s0=l.viewport;if(l.viewport!==void 0)l.viewport=void 0;if(A.setupLightsView(l),y0===!0)H0.setGlobalState(B.clippingPlanes,l);if(M7(C,o,l),s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0),J9.has("WEBGL_multisampled_render_to_texture")===!1){let k0=!1;for(let $9=0,C9=f.length;$9<C9;$9++){let R9=f[$9],{object:G9,geometry:y9,material:V0,group:d9}=R9;if(V0.side===j8&&G9.layers.test(l.layers)){let t0=V0.side;V0.side=o9,V0.needsUpdate=!0,t$(G9,o,l,y9,V0,d9),V0.side=t0,V0.needsUpdate=!0,k0=!0}}if(k0===!0)s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0)}if(B.setRenderTarget(M0,P0,_0),B.setClearColor(T0,n0),s0!==void 0)l.viewport=s0;B.toneMapping=l0}function M7(C,f,o){let l=f.isScene===!0?f.overrideMaterial:null;for(let c=0,L0=C.length;c<L0;c++){let C0=C[c],{object:M0,geometry:P0,group:_0}=C0,l0=C0.material;if(l0.allowOverride===!0&&l!==null)l0=l;if(M0.layers.test(o.layers))t$(M0,f,o,P0,l0,_0)}}function t$(C,f,o,l,c,L0){if(j!==null&&c.isNodeMaterial)j.setObject(C,c);if(C.onBeforeRender(B,f,o,l,c,L0),C.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),c.onBeforeRender(B,f,o,l,C,L0),c.transparent===!0&&c.side===j8&&c.forceSinglePass===!1)c.side=o9,c.needsUpdate=!0,B.renderBufferDirect(o,f,l,c,C,L0),c.side=M6,c.needsUpdate=!0,B.renderBufferDirect(o,f,l,c,C,L0),c.side=j8;else B.renderBufferDirect(o,f,l,c,C,L0);C.onAfterRender(B,f,o,l,c,L0)}function L7(C,f,o){if(f.isScene!==!0)f=V9;let l=y.get(C),c=A.state.lights,L0=A.state.shadowsArray,C0=c.state.version,M0=K0.getParameters(C,c.state,L0,f,o,A.state.lightProbeGridArray),P0=K0.getProgramCacheKey(M0),_0=l.programs;l.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?f.environment:null,l.fog=f.fog;let l0=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;if(l.envMap=W0.get(C.envMap||l.environment,l0),l.envMapRotation=l.environment!==null&&C.envMap===null?f.environmentRotation:C.envMapRotation,_0===void 0)C.addEventListener("dispose",_8),_0=new Map,l.programs=_0;let s0=_0.get(P0);if(s0!==void 0){if(l.currentProgram===s0&&l.lightsStateVersion===C0)return JW(C,M0),s0}else{if(M0.uniforms=K0.getUniforms(C),j!==null&&C.isNodeMaterial)j.build(C,o,M0);C.onBeforeCompile(M0,B),s0=K0.acquireProgram(M0,P0),_0.set(P0,s0),l.uniforms=M0.uniforms}let k0=l.uniforms;if(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)k0.clippingPlanes=H0.uniform;if(JW(C,M0),l.needsLights=HH(C),l.lightsStateVersion=C0,l.needsLights)k0.ambientLightColor.value=c.state.ambient,k0.lightProbe.value=c.state.probe,k0.sunLights.value=c.state.sun,k0.sunLightShadows.value=c.state.sunShadow,k0.directionalLights.value=c.state.directional,k0.directionalLightShadows.value=c.state.directionalShadow,k0.spotLights.value=c.state.spot,k0.spotLightShadows.value=c.state.spotShadow,k0.rectAreaLights.value=c.state.rectArea,k0.ltc_1.value=c.state.rectAreaLTC1,k0.ltc_2.value=c.state.rectAreaLTC2,k0.pointLights.value=c.state.point,k0.pointLightShadows.value=c.state.pointShadow,k0.hemisphereLights.value=c.state.hemi,k0.sunShadowMatrix.value=c.state.sunShadowMatrix,k0.sunShadowCascade.value=c.state.sunShadowCascade,k0.directionalShadowMatrix.value=c.state.directionalShadowMatrix,k0.spotLightMatrix.value=c.state.spotLightMatrix,k0.spotLightMap.value=c.state.spotLightMap,k0.pointShadowMatrix.value=c.state.pointShadowMatrix;return l.lightProbeGrid=A.state.lightProbeGridArray.length>0,l.currentProgram=s0,l.uniformsList=null,s0}function e$(C){if(C.uniformsList===null){let f=C.currentProgram.getUniforms();C.uniformsList=H7.seqWithValue(f.seq,C.uniforms)}return C.uniformsList}function JW(C,f){let o=y.get(C);o.outputColorSpace=f.outputColorSpace,o.batching=f.batching,o.batchingColor=f.batchingColor,o.instancing=f.instancing,o.instancingColor=f.instancingColor,o.instancingMorph=f.instancingMorph,o.skinning=f.skinning,o.morphTargets=f.morphTargets,o.morphNormals=f.morphNormals,o.morphColors=f.morphColors,o.morphTargetsCount=f.morphTargetsCount,o.numClippingPlanes=f.numClippingPlanes,o.numIntersection=f.numClipIntersection,o.vertexAlphas=f.vertexAlphas,o.vertexTangents=f.vertexTangents,o.toneMapping=f.toneMapping}function WH(C,f){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;k.setFromMatrixPosition(f.matrixWorld);for(let o=0,l=C.length;o<l;o++){let c=C[o];if(c.texture!==null&&c.boundingBox.containsPoint(k))return c}return null}function XH(C,f,o,l,c){if(f.isScene!==!0)f=V9;s.resetTextureUnits();let L0=f.fog,C0=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?f.environment:null,M0=u===null?B.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:o0.workingColorSpace,P0=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap,_0=W0.get(l.envMap||C0,P0),l0=l.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,s0=!!o.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),k0=!!o.morphAttributes.position,$9=!!o.morphAttributes.normal,C9=!!o.morphAttributes.color,R9=V8;if(l.toneMapped){if(u===null||u.isXRRenderTarget===!0)R9=B.toneMapping}let G9=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,y9=G9!==void 0?G9.length:0,V0=y.get(l),d9=A.state.lights;if(y0===!0){if(m0===!0||C!==i){let F9=C===i&&l.id===$0;H0.setState(l,C,F9)}}let t0=!1;if(l.version===V0.__version){if(V0.needsLights&&V0.lightsStateVersion!==d9.state.version)t0=!0;else if(V0.outputColorSpace!==M0)t0=!0;else if(c.isBatchedMesh&&V0.batching===!1)t0=!0;else if(!c.isBatchedMesh&&V0.batching===!0)t0=!0;else if(c.isBatchedMesh&&V0.batchingColor===!0&&c._colorsTexture===null)t0=!0;else if(c.isBatchedMesh&&V0.batchingColor===!1&&c._colorsTexture!==null)t0=!0;else if(c.isInstancedMesh&&V0.instancing===!1)t0=!0;else if(!c.isInstancedMesh&&V0.instancing===!0)t0=!0;else if(c.isSkinnedMesh&&V0.skinning===!1)t0=!0;else if(!c.isSkinnedMesh&&V0.skinning===!0)t0=!0;else if(c.isInstancedMesh&&V0.instancingColor===!0&&c.instanceColor===null)t0=!0;else if(c.isInstancedMesh&&V0.instancingColor===!1&&c.instanceColor!==null)t0=!0;else if(c.isInstancedMesh&&V0.instancingMorph===!0&&c.morphTexture===null)t0=!0;else if(c.isInstancedMesh&&V0.instancingMorph===!1&&c.morphTexture!==null)t0=!0;else if(V0.envMap!==_0)t0=!0;else if(l.fog===!0&&V0.fog!==L0)t0=!0;else if(V0.numClippingPlanes!==void 0&&(V0.numClippingPlanes!==H0.numPlanes||V0.numIntersection!==H0.numIntersection))t0=!0;else if(V0.vertexAlphas!==l0)t0=!0;else if(V0.vertexTangents!==s0)t0=!0;else if(V0.morphTargets!==k0)t0=!0;else if(V0.morphNormals!==$9)t0=!0;else if(V0.morphColors!==C9)t0=!0;else if(V0.toneMapping!==R9)t0=!0;else if(V0.morphTargetsCount!==y9)t0=!0;else if(!!V0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)t0=!0}else t0=!0,V0.__version=l.version;let X8=V0.currentProgram;if(t0===!0){if(X8=L7(l,f,c),j&&l.isNodeMaterial)j.onUpdateProgram(l,X8,V0)}let T8=!1,YJ=!1,rJ=!1,U9=X8.getUniforms(),L9=V0.uniforms;if(z.useProgram(X8.program))T8=!0,YJ=!0,rJ=!0;if(l.id!==$0)$0=l.id,YJ=!0;if(V0.needsLights){let F9=WH(A.state.lightProbeGridArray,c);if(V0.lightProbeGrid!==F9)V0.lightProbeGrid=F9,YJ=!0}if(T8||i!==C){if(z.buffers.depth.getReversed()&&C.reversedDepth!==!0)C._reversedDepth=!0,C.updateProjectionMatrix();U9.setValue(v,"projectionMatrix",C.projectionMatrix),U9.setValue(v,"viewMatrix",C.matrixWorldInverse);let UJ=U9.map.cameraPosition;if(UJ!==void 0)UJ.setValue(v,i0.setFromMatrixPosition(C.matrixWorld));if(N9.logarithmicDepthBuffer)U9.setValue(v,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)U9.setValue(v,"isOrthographic",C.isOrthographicCamera===!0);if(i!==C)i=C,YJ=!0,rJ=!0}if(V0.needsLights){if(d9.state.sunShadowMap.length>0)U9.setValue(v,"sunShadowMap",d9.state.sunShadowMap,s);if(d9.state.directionalShadowMap.length>0)U9.setValue(v,"directionalShadowMap",d9.state.directionalShadowMap,s);if(d9.state.spotShadowMap.length>0)U9.setValue(v,"spotShadowMap",d9.state.spotShadowMap,s);if(d9.state.pointShadowMap.length>0)U9.setValue(v,"pointShadowMap",d9.state.pointShadowMap,s)}if(c.isSkinnedMesh){U9.setOptional(v,c,"bindMatrix"),U9.setOptional(v,c,"bindMatrixInverse");let F9=c.skeleton;if(F9){if(F9.boneTexture===null)F9.computeBoneTexture();U9.setValue(v,"boneTexture",F9.boneTexture,s)}}if(c.isBatchedMesh){if(U9.setOptional(v,c,"batchingTexture"),U9.setValue(v,"batchingTexture",c._matricesTexture,s),U9.setOptional(v,c,"batchingIdTexture"),U9.setValue(v,"batchingIdTexture",c._indirectTexture,s),U9.setOptional(v,c,"batchingColorTexture"),c._colorsTexture!==null)U9.setValue(v,"batchingColorTexture",c._colorsTexture,s)}let HJ=o.morphAttributes;if(HJ.position!==void 0||HJ.normal!==void 0||HJ.color!==void 0)Q9.update(c,o,X8);if(YJ||V0.receiveShadow!==c.receiveShadow)V0.receiveShadow=c.receiveShadow,U9.setValue(v,"receiveShadow",c.receiveShadow);if((l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial)&&l.envMap===null&&f.environment!==null)L9.envMapIntensity.value=f.environmentIntensity;if(L9.dfgLUT!==void 0)L9.dfgLUT.value=oq();if(YJ){if(U9.setValue(v,"toneMappingExposure",B.toneMappingExposure),V0.needsLights)YH(L9,rJ);if(L0&&l.fog===!0)O0.refreshFogUniforms(L9,L0);if(O0.refreshMaterialUniforms(L9,l,g,S,A.state.transmissionRenderTarget[C.id]),V0.needsLights&&V0.lightProbeGrid){let F9=V0.lightProbeGrid;L9.probesSH.value=F9.texture,L9.probesMin.value.copy(F9.boundingBox.min),L9.probesMax.value.copy(F9.boundingBox.max),L9.probesResolution.value.copy(F9.resolution)}H7.upload(v,e$(V0),L9,s)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)H7.upload(v,e$(V0),L9,s),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)U9.setValue(v,"center",c.center);if(U9.setValue(v,"modelViewMatrix",c.modelViewMatrix),U9.setValue(v,"normalMatrix",c.normalMatrix),U9.setValue(v,"modelMatrix",c.matrixWorld),l.uniformsGroups!==void 0){let F9=l.uniformsGroups;for(let UJ=0,tJ=F9.length;UJ<tJ;UJ++){let ZW=F9[UJ];I0.update(ZW,X8),I0.bind(ZW,X8)}}return X8}function YH(C,f){C.ambientLightColor.needsUpdate=f,C.lightProbe.needsUpdate=f,C.sunLights.needsUpdate=f,C.sunLightShadows.needsUpdate=f,C.directionalLights.needsUpdate=f,C.directionalLightShadows.needsUpdate=f,C.pointLights.needsUpdate=f,C.pointLightShadows.needsUpdate=f,C.spotLights.needsUpdate=f,C.spotLightShadows.needsUpdate=f,C.rectAreaLights.needsUpdate=f,C.hemisphereLights.needsUpdate=f}function HH(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(C,f,o){let l=y.get(C);if(l.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,l.__autoAllocateDepthBuffer===!1)l.__useRenderToTexture=!1;y.get(C.texture).__webglTexture=f,y.get(C.depthTexture).__webglTexture=l.__autoAllocateDepthBuffer?void 0:o,l.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,f){let o=y.get(C);o.__webglFramebuffer=f,o.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(C,f=0,o=0){u=C,w=f,n=o;let l=null,c=!1,L0=!1;if(C){let M0=y.get(C);if(M0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(v.FRAMEBUFFER,M0.__webglFramebuffer),Z0.copy(C.viewport),X0.copy(C.scissor),w0=C.scissorTest,z.viewport(Z0),z.scissor(X0),z.setScissorTest(w0),$0=-1;return}else if(M0.__webglFramebuffer===void 0)s.setupRenderTarget(C);else if(M0.__hasExternalTextures)s.rebindTextures(C,y.get(C.texture).__webglTexture,y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let l0=C.depthTexture;if(M0.__boundDepthTexture!==l0){if(l0!==null&&y.has(l0)&&(C.width!==l0.image.width||C.height!==l0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s.setupDepthRenderbuffer(C)}}let P0=C.texture;if(P0.isData3DTexture||P0.isDataArrayTexture||P0.isCompressedArrayTexture)L0=!0;let _0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget){if(Array.isArray(_0[f]))l=_0[f][o];else l=_0[f];c=!0}else if(C.samples>0&&s.useMultisampledRTT(C)===!1)l=y.get(C).__webglMultisampledFramebuffer;else if(Array.isArray(_0))l=_0[o];else l=_0;Z0.copy(C.viewport),X0.copy(C.scissor),w0=C.scissorTest}else Z0.copy(Q0).multiplyScalar(g).floor(),X0.copy(r).multiplyScalar(g).floor(),w0=z0;if(o!==0)l=b;if(z.bindFramebuffer(v.FRAMEBUFFER,l))z.drawBuffers(C,l);if(z.viewport(Z0),z.scissor(X0),z.setScissorTest(w0),c){let M0=y.get(C.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+f,M0.__webglTexture,o)}else if(L0){let M0=f;for(let P0=0;P0<C.textures.length;P0++){let _0=y.get(C.textures[P0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+P0,_0.__webglTexture,o,M0)}}else if(C!==null&&o!==0){let M0=y.get(C.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,M0.__webglTexture,o)}$0=-1};function QW(C){let f=y.get(C);if(f.__readFormat!==C.format||f.__readType!==C.type)f.__readFormat=C.format,f.__readType=C.type,f.__formatReadable=N9.textureFormatReadable(C.format),f.__typeReadable=N9.textureTypeReadable(C.type);return f}if(this.readRenderTargetPixels=function(C,f,o,l,c,L0,C0,M0=0){if(!(C&&C.isWebGLRenderTarget)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&C0!==void 0)P0=P0[C0];if(P0){z.bindFramebuffer(v.FRAMEBUFFER,P0);try{let _0=C.textures[M0],l0=_0.format,s0=_0.type;if(C.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let k0=QW(_0);if(k0.__formatReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(k0.__typeReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=C.width-l&&(o>=0&&o<=C.height-c))v.readPixels(f,o,l,c,J0.convert(l0),J0.convert(s0),L0)}finally{let _0=u!==null?y.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,_0)}}},this.readRenderTargetPixelsAsync=async function(C,f,o,l,c,L0,C0,M0=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let P0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&C0!==void 0)P0=P0[C0];if(P0)if(f>=0&&f<=C.width-l&&(o>=0&&o<=C.height-c)){z.bindFramebuffer(v.FRAMEBUFFER,P0);let _0=C.textures[M0],l0=_0.format,s0=_0.type;if(C.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let k0=QW(_0);if(k0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(k0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $9=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,$9),v.bufferData(v.PIXEL_PACK_BUFFER,L0.byteLength,v.STREAM_READ),v.readPixels(f,o,l,c,J0.convert(l0),J0.convert(s0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let C9=u!==null?y.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,C9);let R9=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await BX(v,R9,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,$9),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,L0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer($9),v.deleteSync(R9),L0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,f=null,o=0){let l=Math.pow(2,-o),c=Math.floor(C.image.width*l),L0=Math.floor(C.image.height*l),C0=f!==null?f.x:0,M0=f!==null?f.y:0;s.setTexture2D(C,0),v.copyTexSubImage2D(v.TEXTURE_2D,o,0,0,C0,M0,c,L0),z.unbindTexture()},this.copyTextureToTexture=function(C,f,o=null,l=null,c=0,L0=0){let C0,M0,P0,_0,l0,s0,k0,$9,C9,R9=C.isCompressedTexture?C.mipmaps[L0]:C.image;if(o!==null)C0=o.max.x-o.min.x,M0=o.max.y-o.min.y,P0=o.isBox3?o.max.z-o.min.z:1,_0=o.min.x,l0=o.min.y,s0=o.isBox3?o.min.z:0;else{let L9=Math.pow(2,-c);if(C0=Math.floor(R9.width*L9),M0=Math.floor(R9.height*L9),C.isDataArrayTexture)P0=R9.depth;else if(C.isData3DTexture)P0=Math.floor(R9.depth*L9);else P0=1;_0=0,l0=0,s0=0}if(l!==null)k0=l.x,$9=l.y,C9=l.z;else k0=0,$9=0,C9=0;let G9=J0.convert(f.format),y9=J0.convert(f.type),V0;if(f.isData3DTexture)s.setTexture3D(f,0),V0=v.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)s.setTexture2DArray(f,0),V0=v.TEXTURE_2D_ARRAY;else s.setTexture2D(f,0),V0=v.TEXTURE_2D;z.activeTexture(v.TEXTURE0),z.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,f.flipY),z.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),z.pixelStorei(v.UNPACK_ALIGNMENT,f.unpackAlignment);let d9=z.getParameter(v.UNPACK_ROW_LENGTH),t0=z.getParameter(v.UNPACK_IMAGE_HEIGHT),X8=z.getParameter(v.UNPACK_SKIP_PIXELS),T8=z.getParameter(v.UNPACK_SKIP_ROWS),YJ=z.getParameter(v.UNPACK_SKIP_IMAGES);z.pixelStorei(v.UNPACK_ROW_LENGTH,R9.width),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,R9.height),z.pixelStorei(v.UNPACK_SKIP_PIXELS,_0),z.pixelStorei(v.UNPACK_SKIP_ROWS,l0),z.pixelStorei(v.UNPACK_SKIP_IMAGES,s0);let rJ=C.isDataArrayTexture||C.isData3DTexture,U9=f.isDataArrayTexture||f.isData3DTexture;if(C.isDepthTexture){let L9=y.get(C),HJ=y.get(f),F9=y.get(L9.__renderTarget),UJ=y.get(HJ.__renderTarget);z.bindFramebuffer(v.READ_FRAMEBUFFER,F9.__webglFramebuffer),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,UJ.__webglFramebuffer);for(let tJ=0;tJ<P0;tJ++){if(rJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,y.get(C).__webglTexture,c,s0+tJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,y.get(f).__webglTexture,L0,C9+tJ);v.blitFramebuffer(_0,l0,C0,M0,k0,$9,C0,M0,v.DEPTH_BUFFER_BIT,v.NEAREST)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(c!==0||C.isRenderTargetTexture||y.has(C)){let L9=y.get(C),HJ=y.get(f);z.bindFramebuffer(v.READ_FRAMEBUFFER,m),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,T);for(let F9=0;F9<P0;F9++){if(rJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,L9.__webglTexture,c,s0+F9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,L9.__webglTexture,c);if(U9)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,HJ.__webglTexture,L0,C9+F9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,HJ.__webglTexture,L0);if(c!==0)v.blitFramebuffer(_0,l0,C0,M0,k0,$9,C0,M0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(U9)v.copyTexSubImage3D(V0,L0,k0,$9,C9+F9,_0,l0,C0,M0);else v.copyTexSubImage2D(V0,L0,k0,$9,_0,l0,C0,M0)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(U9)if(C.isDataTexture||C.isData3DTexture)v.texSubImage3D(V0,L0,k0,$9,C9,C0,M0,P0,G9,y9,R9.data);else if(f.isCompressedArrayTexture)v.compressedTexSubImage3D(V0,L0,k0,$9,C9,C0,M0,P0,G9,R9.data);else v.texSubImage3D(V0,L0,k0,$9,C9,C0,M0,P0,G9,y9,R9);else if(C.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,L0,k0,$9,C0,M0,G9,y9,R9.data);else if(C.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,L0,k0,$9,R9.width,R9.height,G9,R9.data);else v.texSubImage2D(v.TEXTURE_2D,L0,k0,$9,C0,M0,G9,y9,R9);if(z.pixelStorei(v.UNPACK_ROW_LENGTH,d9),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,t0),z.pixelStorei(v.UNPACK_SKIP_PIXELS,X8),z.pixelStorei(v.UNPACK_SKIP_ROWS,T8),z.pixelStorei(v.UNPACK_SKIP_IMAGES,YJ),L0===0&&f.generateMipmaps)v.generateMipmap(V0);z.unbindTexture()},this.initRenderTarget=function(C){if(y.get(C).__webglFramebuffer===void 0)s.setupRenderTarget(C)},this.initTexture=function(C){if(C.isCubeTexture)s.setTextureCube(C,0);else if(C.isData3DTexture)s.setTexture3D(C,0);else if(C.isDataArrayTexture||C.isCompressedArrayTexture)s.setTexture2DArray(C,0);else s.setTexture2D(C,0);z.unbindTexture()},this.resetState=function(){w=0,n=0,u=null,z.reset(),E0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return CK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=o0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=o0._getUnpackColorSpace()}}var NY={type:"change"},U$={type:"start"},qY={type:"end"},VQ=new Q7,GY=new H8,aq=Math.cos(70*r6.DEG2RAD),k9=new x,e9=2*Math.PI,H9={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},H$=0.000001;class N$ extends OQ{constructor(J,Q=null){super(J,Q);if(this.state=H9.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:OJ.ROTATE,MIDDLE:OJ.DOLLY,RIGHT:OJ.PAN},this.touches={ONE:RJ.ROTATE,TWO:RJ.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new r9,this._lastTargetPosition=new x,this._quat=new r9().setFromUnitVectors(J.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $7,this._sphericalDelta=new $7,this._scale=1,this._panOffset=new x,this._rotateStart=new x0,this._rotateEnd=new x0,this._rotateDelta=new x0,this._panStart=new x0,this._panEnd=new x0,this._panDelta=new x0,this._dollyStart=new x0,this._dollyEnd=new x0,this._dollyDelta=new x0,this._dollyDirection=new x,this._mouse=new x0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tq.bind(this),this._onPointerDown=rq.bind(this),this._onPointerUp=eq.bind(this),this._onContextMenu=XD.bind(this),this._onMouseWheel=ZD.bind(this),this._onKeyDown=KD.bind(this),this._onTouchStart=$D.bind(this),this._onTouchMove=WD.bind(this),this._onMouseDown=JD.bind(this),this._onMouseMove=QD.bind(this),this._interceptControlDown=YD.bind(this),this._interceptControlUp=HD.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=H9.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(NY),this.update(),this.state=H9.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(k9.copy(Q).sub(this.target),k9.applyQuaternion(this._quat),this._spherical.setFromVector3(k9),this.autoRotate&&this.state===H9.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Z=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite(Z)&&isFinite(K)){if(Z<-Math.PI)Z+=e9;else if(Z>Math.PI)Z-=e9;if(K<-Math.PI)K+=e9;else if(K>Math.PI)K-=e9;if(Z<=K)this._spherical.theta=Math.max(Z,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Z+K)/2?Math.max(Z,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let $=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),$=W!=this._spherical.radius}if(k9.setFromSpherical(this._spherical),k9.applyQuaternion(this._quatInverse),Q.copy(this.target).add(k9),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=k9.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),$=!!Y}else if(this.object.isOrthographicCamera){let X=new x(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),$=Y!==this.object.zoom;let H=new x(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),W=k9.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(VQ.origin.copy(this.object.position),VQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(VQ.direction))<aq)this.object.lookAt(this.target);else GY.setFromNormalAndCoplanarPoint(this.object.up,this.target),VQ.intersectPlane(GY,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),$=!0}if(this._scale=1,this._performCursorZoom=!1,$||this._lastPosition.distanceToSquared(this.object.position)>H$||8*(1-this._lastQuaternion.dot(this.object.quaternion))>H$||this._lastTargetPosition.distanceToSquared(this.target)>H$)return this.dispatchEvent(NY),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return e9/60*this.autoRotateSpeed*J;else return e9/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){k9.setFromMatrixColumn(Q,0),k9.multiplyScalar(-J),this._panOffset.add(k9)}_panUp(J,Q){if(this.screenSpacePanning===!0)k9.setFromMatrixColumn(Q,1);else k9.setFromMatrixColumn(Q,0),k9.crossVectors(this.object.up,k9);k9.multiplyScalar(J),this._panOffset.add(k9)}_pan(J,Q){let Z=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;k9.copy(K).sub(this.target);let $=k9.length();$*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*$/Z.clientHeight,this.object.matrix),this._panUp(2*Q*$/Z.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Z.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/Z.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Z=this.domElement.getBoundingClientRect(),K=J-Z.left,$=Q-Z.top,W=Z.width,X=Z.height;this._mouse.x=K/W*2-1,this._mouse.y=-($/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(e9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(e9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(e9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-e9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(e9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-e9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set(Z,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set(Z,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyStart.set(0,$)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Z=this._getSecondPointerPosition(J),K=0.5*(J.pageX+Z.x),$=0.5*(J.pageY+Z.y);this._rotateEnd.set(K,$)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(e9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(e9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set(Z,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyEnd.set(0,$),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new x0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,Z={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Z.deltaY*=10;return Z}}function rq(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function tq(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function eq(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qY),this.state=H9.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],Z=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:Z.x,pageY:Z.y});break}}function JD(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case OJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=H9.DOLLY;break;case OJ.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H9.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H9.ROTATE}break;case OJ.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H9.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H9.PAN}break;default:this.state=H9.NONE}if(this.state!==H9.NONE)this.dispatchEvent(U$)}function QD(J){switch(this.state){case H9.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case H9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case H9.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function ZD(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==H9.NONE)return;J.preventDefault(),this.dispatchEvent(U$),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(qY)}function KD(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function $D(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case RJ.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=H9.TOUCH_ROTATE;break;case RJ.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=H9.TOUCH_PAN;break;default:this.state=H9.NONE}break;case 2:switch(this.touches.TWO){case RJ.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=H9.TOUCH_DOLLY_PAN;break;case RJ.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=H9.TOUCH_DOLLY_ROTATE;break;default:this.state=H9.NONE}break;default:this.state=H9.NONE}if(this.state!==H9.NONE)this.dispatchEvent(U$)}function WD(J){switch(this._trackPointer(J),this.state){case H9.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case H9.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case H9.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case H9.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=H9.NONE}}function XD(J){if(this.enabled===!1)return;J.preventDefault()}function YD(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function HD(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var CQ={jaw:0.6,tbX:2.9,tbY:6.85,ttX:6.45,ttY:7.3,ttCurl:0,root:0,lipAp:0.7,lipProt:0.2,lipWidth:0.5,labiodental:0,velum:-0.15,larynx:0,epilarynx:0,ventricular:0,lateral:0,dorsum:0};var e={blue:"#4fb6f2",blueMid:"#3487c4",blueDim:"#1f5f8c",frame:"#133954",green:"#5be381",red:"#ff5d40",pink:"#ff73cf",white:"#eef6f8",amber:"#ffb340"},l1=[e.green,e.red,e.pink,e.white],BQ={primary:"#effbff",secondary:"#e2f5fc"};function DY(J,Q,Z){let K=parseInt(J.slice(1),16),$=parseInt(Q.slice(1),16),W=(X)=>Math.round((K>>X&255)*(1-Z)+($>>X&255)*Z);return"#"+[16,8,0].map((X)=>W(X).toString(16).padStart(2,"0")).join("")}var AQ=(J)=>DY(J,"#ffffff",0.55),KJ=[[0,"#3a2408"],[0.35,"#c9822a"],[0.6,"#ffb340"],[0.82,"#ffe39a"],[1,"#fff8ec"]];function zQ(J){let Q=Math.max(0,Math.min(1,J));for(let Z=1;Z<KJ.length;Z++)if(Q<=KJ[Z][0])return DY(KJ[Z-1][1],KJ[Z][1],(Q-KJ[Z-1][0])/(KJ[Z][0]-KJ[Z-1][0]));return KJ[KJ.length-1][1]}var c1={black:"#000000",console:"#000000",inset:"#000000",line:e.frame,text:e.blue,textDim:e.blueMid,caliper:e.amber,caliperDim:"rgba(255, 179, 64, 0.45)",fat:"#bdbdbd",skin:"#a8a8a8",muscle:"#5d5d5d",tongue:"#6b6b6b",brain:"#7c7c7c",marrow:"#b2b2b2",cortex:"#1c1c1c",cartilage:"#3e3e3e",mucosa:"#8f8f8f",tooth:"#101010"};var PQ=(J)=>{if(!(J>0))return 0;let Q=Math.log10(40),Z=Math.log10(4000);return Math.max(0,Math.min(1,(Math.log10(J)-Q)/(Z-Q)))};var FY=(J,Q)=>Math.hypot(J.x-Q.x,J.y-Q.y);var kQ=(J,Q,Z)=>{let K=Math.sin(Z),$=Math.cos(Z),W=J.x-Q.x,X=J.y-Q.y;return{x:Q.x+W*$-X*K,y:Q.y+W*K+X*$}};function B8(J,Q){if(J.length<3)return J.slice();let Z=[];for(let K=0;K<J.length-1;K++){let $=J[Math.max(0,K-1)],W=J[K],X=J[K+1],Y=J[Math.min(J.length-1,K+2)];for(let H=0;H<Q;H++){let N=H/Q,q=N*N,U=q*N;Z.push({x:0.5*(2*W.x+(-$.x+X.x)*N+(2*$.x-5*W.x+4*X.x-Y.x)*q+(-$.x+3*W.x-3*X.x+Y.x)*U),y:0.5*(2*W.y+(-$.y+X.y)*N+(2*$.y-5*W.y+4*X.y-Y.y)*q+(-$.y+3*W.y-3*X.y+Y.y)*U)})}}return Z.push(J[J.length-1]),Z}var UD='"Hershey", "Archivo", system-ui, sans-serif',EY=(J,Q="l")=>`${Q==="m"?500:300} ${J}px ${UD}`,ND=typeof CanvasRenderingContext2D!=="undefined"&&"letterSpacing"in CanvasRenderingContext2D.prototype;function GD(J,Q=!1){let Z=new Path2D;if(J.length===0)return Z;Z.moveTo(J[0][0],J[0][1]);for(let K=1;K<J.length;K++)Z.lineTo(J[K][0],J[K][1]);if(Q)Z.closePath();return Z}function k6(J,Q,Z,K,$={}){if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.lineJoin="round",J.lineCap="round",J.setLineDash($.dash??[]),J.strokeStyle=Z,J.lineWidth=K,J.stroke(Q),$.hot)J.globalCompositeOperation="source-over",J.strokeStyle=AQ(Z),J.lineWidth=K*0.42,J.stroke(Q);J.restore()}function uJ(J,Q,Z,K,$={}){if(Q.length<2)return;k6(J,GD(Q,$.close),Z,K,$)}function U7(J,Q,Z,K,$,W,X,Y={}){let H=new Path2D;H.moveTo(Q,Z),H.lineTo(K,$),k6(J,H,W,X,Y)}function OY(J,Q,Z,K,$,W=1.2,X={}){let Y=new Path2D;Y.arc(Q,Z,K,0,Math.PI*2),k6(J,Y,$,W,X)}function N7(J,Q,Z,K,$,W=1){J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=W,J.fillStyle=$,J.beginPath(),J.arc(Q,Z,K,0,Math.PI*2),J.fill(),J.restore()}function RY(J,Q,Z,K,$=7,W=1){let Y=new Path2D;Y.arc(Q,Z,$,0,Math.PI*2),Y.moveTo(Q-$-4,Z),Y.lineTo(Q-$+2,Z),Y.moveTo(Q+$-2,Z),Y.lineTo(Q+$+4,Z),Y.moveTo(Q,Z-$-4),Y.lineTo(Q,Z-$+2),Y.moveTo(Q,Z+$-2),Y.lineTo(Q,Z+$+4),k6(J,Y,K,1.25,{alpha:W})}function w9(J,Q,Z,K,$={}){let W=$.size??11;if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.font=EY(W,$.weight),ND)J.letterSpacing=`${(($.ls??0.14)*W).toFixed(2)}px`;J.textAlign=$.align??"left",J.textBaseline=$.baseline??"alphabetic",J.fillStyle=$.color??e.blue;let X=J;if($.moving)X.layoutMoving=!0;J.fillText(Q,Z,K),X.layoutMoving=void 0,J.restore()}function lJ(J,Q=2){let Z=J.length>1&&J[0][0]===J[J.length-1][0]&&J[0][1]===J[J.length-1][1]?J.slice(0,-1):J.slice();for(let K=0;K<Q;K++){let $=[];for(let W=0;W<Z.length;W++){let X=Z[W],Y=Z[(W+1)%Z.length];$.push([X[0]*0.75+Y[0]*0.25,X[1]*0.75+Y[1]*0.25],[X[0]*0.25+Y[0]*0.75,X[1]*0.25+Y[1]*0.75])}Z=$}return Z.length?[...Z,Z[0]]:Z}function G$(J,Q,Z,K,$,W,X=1){let Y=$*0.5,H=Y*0.48,N=Z-Y/2,q=Math.max(0.9,$*0.07),U=(D)=>D.toFixed(2),G=(D)=>{J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.strokeStyle=W,J.lineWidth=q,J.lineCap="round",J.lineJoin="round",J.stroke(new Path2D(D)),J.restore()},F=(D,R)=>{if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.font=EY($),J.textAlign="center",J.textBaseline="alphabetic",J.fillStyle=W,R)R(J);J.fillText(D,R?0:Q,R?0:Z),J.restore()},O=(D)=>{D.translate(Q,N),D.rotate(Math.PI),D.translate(0,Y/2)},L=(D)=>{D.translate(Q,Z),D.scale(-1,1)},E=(D)=>`M${U(D+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(D-H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(D+H)} ${U(N)}`;switch(K){case"ɑ":{let D=Q-0.06*$;return G(E(D)+`M${U(D+H)} ${U(Z-Y)}L${U(D+H)} ${U(Z)}`)}case"ɒ":{let D=Q+0.06*$;return G(E(D)+`M${U(D-H)} ${U(Z-Y)}L${U(D-H)} ${U(Z)}`)}case"ɪ":return G(`M${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z)}M${U(Q-Y*0.3)} ${U(Z-Y)}L${U(Q+Y*0.3)} ${U(Z-Y)}M${U(Q-Y*0.3)} ${U(Z)}L${U(Q+Y*0.3)} ${U(Z)}`);case"ɛ":return G(`M${U(Q+H*0.9)} ${U(Z-Y*0.92)}Q${U(Q-H*1.1)} ${U(Z-Y*1.08)} ${U(Q-H*0.25)} ${U(N)}Q${U(Q-H*1.3)} ${U(Z+Y*0.1)} ${U(Q+H*0.95)} ${U(Z-Y*0.06)}`);case"ɜ":return G(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}`);case"ɝ":return G(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}M${U(Q+H*0.55)} ${U(N-Y*0.1)}Q${U(Q+H*1.4)} ${U(N-Y*0.5)} ${U(Q+H*1.5)} ${U(N-Y*0.15)}`);case"ʊ":return G(`M${U(Q-H*1.15)} ${U(Z-Y)}Q${U(Q-H*0.5)} ${U(Z-Y*0.9)} ${U(Q-H*0.75)} ${U(N)}Q${U(Q-H)} ${U(Z)} ${U(Q)} ${U(Z)}Q${U(Q+H)} ${U(Z)} ${U(Q+H*0.75)} ${U(N)}Q${U(Q+H*0.5)} ${U(Z-Y*0.9)} ${U(Q+H*1.15)} ${U(Z-Y)}`);case"ʌ":return G(`M${U(Q-H)} ${U(Z)}L${U(Q)} ${U(Z-Y)}L${U(Q+H)} ${U(Z)}`);case"ɤ":return G(`M${U(Q-H)} ${U(Z-Y)}L${U(Q)} ${U(Z-Y*0.1)}L${U(Q+H)} ${U(Z-Y)}M${U(Q)} ${U(Z-Y*0.1)}Q${U(Q-H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z+Y*0.45)}Q${U(Q+H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z-Y*0.1)}`);case"ʃ":return G(`M${U(Q+H*0.9)} ${U(Z-Y*1.9)}Q${U(Q)} ${U(Z-Y*2.2)} ${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z+Y*0.3)}Q${U(Q)} ${U(Z+Y*0.95)} ${U(Q-H*0.9)} ${U(Z+Y*0.7)}`);case"θ":return G(`M${U(Q+H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q-H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q+H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y)}L${U(Q+H)} ${U(Z-Y)}`);case"ŋ":return G(`M${U(Q-H)} ${U(Z)}L${U(Q-H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y*0.6)}Q${U(Q-H*0.2)} ${U(Z-Y*1.1)} ${U(Q+H*0.6)} ${U(Z-Y*0.9)}Q${U(Q+H)} ${U(Z-Y*0.75)} ${U(Q+H)} ${U(Z-Y*0.4)}L${U(Q+H)} ${U(Z+Y*0.4)}Q${U(Q+H)} ${U(Z+Y*0.85)} ${U(Q+H*0.3)} ${U(Z+Y*0.8)}`);case"ə":return G(`M${U(Q-H)} ${U(N)}L${U(Q+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 1 ${U(Q-H*0.75)} ${U(Z-Y*0.85)}`);case"ɐ":return F("a",O);case"ɔ":return F("c",L);case"ɯ":return F("m",O);case"ɨ":return F("i"),G(`M${U(Q-H*0.8)} ${U(N)}L${U(Q+H*0.8)} ${U(N)}`);case"ø":return F("o"),G(`M${U(Q-H*1.1)} ${U(Z+Y*0.1)}L${U(Q+H*1.1)} ${U(Z-Y*1.1)}`);case"æ":return F("æ");case"œ":return F("œ");default:return F(K)}}var MY=new G8,_Q=new x;class _6 extends FQ{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let J=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],Q=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],Z=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(Z),this.setAttribute("position",new c9(J,3)),this.setAttribute("uv",new c9(Q,2))}applyMatrix4(J){let Q=this.attributes.instanceStart,Z=this.attributes.instanceEnd;if(Q!==void 0)Q.applyMatrix4(J),Z.applyMatrix4(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new h8(Q,6,1);return this.setAttribute("instanceStart",new g9(Z,3,0)),this.setAttribute("instanceEnd",new g9(Z,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new h8(Q,6,1);return this.setAttribute("instanceColorStart",new g9(Z,3,0)),this.setAttribute("instanceColorEnd",new g9(Z,3,3)),this}fromWireframeGeometry(J){return this.setPositions(J.attributes.position.array),this}fromEdgesGeometry(J){return this.setPositions(J.attributes.position.array),this}fromMesh(J){return this.fromWireframeGeometry(new NQ(J.geometry)),this}fromLineSegments(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new G8;let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0)this.boundingBox.setFromBufferAttribute(J),MY.setFromBufferAttribute(Q),this.boundingBox.union(MY)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ZJ;if(this.boundingBox===null)this.computeBoundingBox();let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0){let Z=this.boundingSphere.center;this.boundingBox.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)_Q.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(_Q)),_Q.fromBufferAttribute(Q,$),K=Math.max(K,Z.distanceToSquared(_Q));if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}G0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new x0},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};n9.line={uniforms:K7.merge([G0.common,G0.fog,G0.line]),vertexShader:`
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
		`};class G7 extends t9{constructor(J){super({type:"LineMaterial",uniforms:K7.clone(n9.line.uniforms),vertexShader:n9.line.vertexShader,fragmentShader:n9.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(J)}get color(){return this.uniforms.diffuse.value}set color(J){this.uniforms.diffuse.value=J}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(J){if(J===!0!==this.worldUnits)this.needsUpdate=!0;if(J===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(J){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=J}get dashed(){return"USE_DASH"in this.defines}set dashed(J){if(J===!0!==this.dashed)this.needsUpdate=!0;if(J===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(J){this.uniforms.dashScale.value=J}get dashSize(){return this.uniforms.dashSize.value}set dashSize(J){this.uniforms.dashSize.value=J}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(J){this.uniforms.dashOffset.value=J}get gapSize(){return this.uniforms.gapSize.value}set gapSize(J){this.uniforms.gapSize.value=J}get opacity(){return this.uniforms.opacity.value}set opacity(J){if(!this.uniforms)return;this.uniforms.opacity.value=J}get resolution(){return this.uniforms.resolution.value}set resolution(J){this.uniforms.resolution.value.copy(J)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(J){if(!this.defines)return;if(J===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(J===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}var q$=new Y9,LY=new x,IY=new x,j9=new Y9,v9=new Y9,g8=new Y9,D$=new x,F$=new M9,b9=new EQ,VY=new x,TQ=new G8,wQ=new ZJ,p8=new Y9,m8,cJ;function CY(J,Q,Z){return p8.set(0,0,-Q,1).applyMatrix4(J.projectionMatrix),p8.multiplyScalar(1/p8.w),p8.x=cJ/Z.width,p8.y=cJ/Z.height,p8.applyMatrix4(J.projectionMatrixInverse),p8.multiplyScalar(1/p8.w),Math.abs(Math.max(p8.x,p8.y))}function qD(J,Q){let{matrixWorld:Z,geometry:K}=J,$=K.attributes.instanceStart,W=K.attributes.instanceEnd,X=Math.min(K.instanceCount,$.count);for(let Y=0,H=X;Y<H;Y++){b9.start.fromBufferAttribute($,Y),b9.end.fromBufferAttribute(W,Y),b9.applyMatrix4(Z);let N=new x,q=new x;if(m8.distanceSqToSegment(b9.start,b9.end,q,N),q.distanceTo(N)<cJ*0.5)Q.push({point:q,pointOnLine:N,distance:m8.origin.distanceTo(q),object:J,face:null,faceIndex:Y,uv:null,uv1:null})}}function DD(J,Q,Z){let K=Q.projectionMatrix,W=J.material.resolution,X=J.matrixWorld,Y=J.geometry,H=Y.attributes.instanceStart,N=Y.attributes.instanceEnd,q=Math.min(Y.instanceCount,H.count),U=-Q.near;m8.at(1,g8),g8.w=1,g8.applyMatrix4(Q.matrixWorldInverse),g8.applyMatrix4(K),g8.multiplyScalar(1/g8.w),g8.x*=W.x/2,g8.y*=W.y/2,g8.z=0,D$.copy(g8),F$.multiplyMatrices(Q.matrixWorldInverse,X);for(let G=0,F=q;G<F;G++){if(j9.fromBufferAttribute(H,G),v9.fromBufferAttribute(N,G),j9.w=1,v9.w=1,j9.applyMatrix4(F$),v9.applyMatrix4(F$),j9.z>U&&v9.z>U)continue;if(j9.z>U){let k=j9.z-v9.z,V=(j9.z-U)/k;j9.lerp(v9,V)}else if(v9.z>U){let k=v9.z-j9.z,V=(v9.z-U)/k;v9.lerp(j9,V)}j9.applyMatrix4(K),v9.applyMatrix4(K),j9.multiplyScalar(1/j9.w),v9.multiplyScalar(1/v9.w),j9.x*=W.x/2,j9.y*=W.y/2,v9.x*=W.x/2,v9.y*=W.y/2,b9.start.copy(j9),b9.start.z=0,b9.end.copy(v9),b9.end.z=0;let L=b9.closestPointToPointParameter(D$,!0);b9.at(L,VY);let E=r6.lerp(j9.z,v9.z,L),D=E>=-1&&E<=1,R=D$.distanceTo(VY)<cJ*0.5;if(D&&R){b9.start.fromBufferAttribute(H,G),b9.end.fromBufferAttribute(N,G),b9.start.applyMatrix4(X),b9.end.applyMatrix4(X);let k=new x,V=new x;m8.distanceSqToSegment(b9.start,b9.end,V,k),Z.push({point:V,pointOnLine:k,distance:m8.origin.distanceTo(V),object:J,face:null,faceIndex:G,uv:null,uv1:null})}}}class E$ extends K8{constructor(J=new _6,Q=new G7({color:Math.random()*16777215})){super(J,Q);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let J=this.geometry,Q=J.attributes.instanceStart,Z=J.attributes.instanceEnd,K=new Float32Array(2*Q.count);for(let W=0,X=0,Y=Q.count;W<Y;W++,X+=2)LY.fromBufferAttribute(Q,W),IY.fromBufferAttribute(Z,W),K[X]=X===0?0:K[X-1],K[X+1]=K[X]+LY.distanceTo(IY);let $=new h8(K,2,1);return J.setAttribute("instanceDistanceStart",new g9($,1,0)),J.setAttribute("instanceDistanceEnd",new g9($,1,1)),this}raycast(J,Q){let Z=this.material.worldUnits,K=J.camera;if(K===null&&!Z)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');if(Z===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let $=J.params.Line2!==void 0?J.params.Line2.threshold||0:0;m8=J.ray;let W=this.matrixWorld,X=this.geometry,Y=this.material;if(cJ=Y.linewidth+$,X.boundingSphere===null)X.computeBoundingSphere();wQ.copy(X.boundingSphere).applyMatrix4(W);let H;if(Z)H=cJ*0.5;else{let q=Math.max(K.near,wQ.distanceToPoint(m8.origin));H=CY(K,q,Y.resolution)}if(wQ.radius+=H,m8.intersectsSphere(wQ)===!1)return;if(X.boundingBox===null)X.computeBoundingBox();TQ.copy(X.boundingBox).applyMatrix4(W);let N;if(Z)N=cJ*0.5;else{let q=Math.max(K.near,TQ.distanceToPoint(m8.origin));N=CY(K,q,Y.resolution)}if(TQ.expandByScalar(N),m8.intersectsBox(TQ)===!1)return;if(Z)qD(this,Q);else DD(this,K,Q)}onBeforeRender(J){let Q=this.material.uniforms;if(Q&&Q.resolution)J.getViewport(q$),this.material.uniforms.resolution.value.set(q$.z,q$.w)}}var SQ=[0.6,0.85,1.05,1.3,1.6,2.1];class R${a=new Float32Array(768);n=0;reset(){return this.n=0,this}p(J,Q,Z){if(3*this.n+3>this.a.length){let $=new Float32Array(this.a.length*2);$.set(this.a),this.a=$}let K=3*this.n++;return this.a[K]=J,this.a[K+1]=Q,this.a[K+2]=Z,this}}class AY{material;mesh;geo=new _6;pos=new Float32Array(0);col=new Float32Array(0);pb=null;cb=null;cap=0;n=0;constructor(J){this.material=J;this.mesh=new E$(this.geo,J),this.mesh.frustumCulled=!1,this.grow(2048)}grow(J){let Q=new Float32Array(J*6),Z=new Float32Array(J*6);Q.set(this.pos.subarray(0,this.n*6)),Z.set(this.col.subarray(0,this.n*6)),this.pos=Q,this.col=Z,this.cap=J,this.geo.dispose(),this.geo=new _6;let K=this.pb=new h8(Q,6,1).setUsage(JQ),$=this.cb=new h8(Z,6,1).setUsage(JQ);this.geo.setAttribute("instanceStart",new g9(K,3,0)),this.geo.setAttribute("instanceEnd",new g9(K,3,3)),this.geo.setAttribute("instanceColorStart",new g9($,3,0)),this.geo.setAttribute("instanceColorEnd",new g9($,3,3)),this.mesh.geometry=this.geo}seg(J,Q,Z,K,$,W,X,Y,H){if(this.n>=this.cap)this.grow(this.cap*2);let N=this.n++*6,q=this.pos,U=this.col;q[N]=J,q[N+1]=Q,q[N+2]=Z,q[N+3]=K,q[N+4]=$,q[N+5]=W,U[N]=U[N+3]=X,U[N+1]=U[N+4]=Y,U[N+2]=U[N+5]=H}commit(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0;for(let J of[this.pb,this.cb])J.clearUpdateRanges(),J.addUpdateRange(0,this.n*6),J.needsUpdate=!0}dispose(){this.geo.dispose(),this.material.dispose()}}var BY=new Map;function O$(J){let Q=BY.get(J);if(!Q){let Z=parseInt(J.slice(1),16);Q=[(Z>>16&255)/255,(Z>>8&255)/255,(Z&255)/255],BY.set(J,Q)}return Q}class M${group=new EJ;batches;constructor(){this.batches=SQ.map((J)=>{let Q=new G7({linewidth:J,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});Q.blending=p7,Q.blendEquation=m7,Q.fog=!0;let Z=new AY(Q);return this.group.add(Z.mesh),Z})}setResolution(J,Q){for(let Z of this.batches)Z.material.resolution.set(J,Q)}begin(){for(let J of this.batches)J.n=0}end(){for(let J of this.batches)J.commit()}batch(J){let Q=0;for(let Z=1;Z<SQ.length;Z++)if(Math.abs(SQ[Z]-J)<Math.abs(SQ[Q]-J))Q=Z;return this.batches[Q]}line(J,Q,Z,K,$={}){if(Q<2)return;let W=$.alpha??1;if(this.strokes(J,Q,O$(Z),W,this.batch(K),$.close??!1),$.hot)this.strokes(J,Q,O$(AQ(Z)),W,this.batch(K*0.42),$.close??!1)}poly(J,Q,Z,K={}){this.line(J.a,J.n,Q,Z,K)}seg(J,Q,Z,K,$,W,X,Y,H=1){let[N,q,U]=O$(X);this.batch(Y).seg(J,Q,Z,K,$,W,N*H,q*H,U*H)}strokes(J,Q,[Z,K,$],W,X,Y){Z*=W,K*=W,$*=W;for(let H=0;H<Q-1;H++){let N=3*H;X.seg(J[N],J[N+1],J[N+2],J[N+3],J[N+4],J[N+5],Z,K,$)}if(Y){let H=3*(Q-1);X.seg(J[H],J[H+1],J[H+2],J[0],J[1],J[2],Z,K,$)}}dispose(){for(let J of this.batches)J.dispose()}}var I$={x0:-7.5,x1:10.25,y0:-4.55,y1:19.9};function V$(J,Q){let Z=J.tract;return-Math.max(-0.2,Math.min(3,Q))*Z.scale/FY(Z.P(-2.5,10.5),Z.P(6.95,7.75))}function C$(J,Q){let Z=J.tract,K=Z.P(-2.5,10.5),$=V$(J,Q.jaw);return(W,X)=>kQ(Z.P(W,X),K,$)}function L$(J,Q,Z,K=0,$=40){let W=Math.cos(-K),X=Math.sin(-K),Y=[];for(let H=0;H<=$;H++){let N=H/$*Math.PI*2,q=Math.cos(N)*Q,U=Math.sin(N)*Z;Y.push({x:J.x+q*W-U*X,y:J.y+q*X+U*W})}return Y}function FD(J,Q,Z){let K=Math.min(J.x,Q.x),$=Math.max(J.x,Q.x),W=Math.min(J.y,Q.y),X=Math.max(J.y,Q.y),Y=Math.min(Z,($-K)/2,(X-W)/2),H=[],N=(q,U,G)=>{for(let F=0;F<=6;F++){let O=G+F/6*(Math.PI/2);H.push({x:q+Math.cos(O)*Y,y:U+Math.sin(O)*Y})}};return N($-Y,X-Y,0),N(K+Y,X-Y,Math.PI/2),N(K+Y,W+Y,Math.PI),N($-Y,W+Y,3*Math.PI/2),H.push(H[0]),H}var jQ=(J)=>-1.2-0.025*J;function B$(J){let Q=J.tract.scale,Z=J.bodyParams.pharynx;return(K,$)=>({x:K*Q,y:($<7?7-(7-$)*Z:$)*Q})}function q7(J,Q,Z){let K=J.tract,$=(B,p)=>K.P(B,p),W=C$(J,Z),X=K.scale,Y=Z.larynx*X,H=B$(J),N=Q.upperLip.slice(7),q=Q.lowerLip.slice(7),U=B8([H(2.3,-4.6),H(2.38,-1.5),H(2.52,0.4),H(3,1.7),W(5.3,3),W(7.25,3.35),W(7.95,4.6),W(7.55,5.7)],4),G=B8([N[N.length-1],H(7.05,10.6),H(7.75,10.78),H(8.75,11.05),H(9.25,11.65),H(8.95,12.6),H(8.35,13.9),H(7.7,15),H(7.95,16.1),H(7.9,18.1),H(6.9,20.5)],4),F=B8([H(6.9,20.5),H(3,22.9),H(-2.2,22.7),H(-6.9,19.6),H(-8.7,15.4),H(-8.3,11.9),H(-7.4,8.9),H(-6.8,4.8),H(-6.6,0),H(-6.6,-4.6)],4),O=[];for(let B=0;B<9;B++){let p=-4.4+B*1.75;if(p>10.5)break;let j=jQ(p)-2.25;O.push(FD($(j,p+1.4),$(j+1.6,p),0.32*X))}let E=[[1,9.6],[1.8,9.92],[2.7,10.18],[3.6,10.3],[4.4,10.25],[5.1,10.05],[5.7,9.72],[6.15,9.36],[6.55,9.15],[7,9.6]].map(([B,p])=>K.P(B,p)),D=Q.jawBone.filter((B)=>B.x>0.8*X),R=Q.glottis,k={x:$(1.6,0).x,y:$(0,2.9).y+0.6*Y},V=[];for(let B=0;B<4;B++){let p=R.y-(0.9+B*1)*X;if(p<-4.4)break;V.push([{x:R.x+0.8*X,y:p},{x:R.x+1.05*X,y:p-0.05},{x:R.x+1.05*X,y:p-0.5*X},{x:R.x+0.82*X,y:p-0.45*X},{x:R.x+0.8*X,y:p}])}let A=W(6,5.45),P=Q.tongueCenter,_=[];for(let B=0;B<=16;B++){let p=Math.PI*(0.18+0.9*B/16),j={x:P.x+Math.cos(p)*Q.tongueRadius*1.25,y:P.y+Math.sin(p)*Q.tongueRadius*1.25},b={x:P.x,y:(P.y+A.y)/2},m=[];for(let T=0;T<=12;T++){let w=T/12;m.push({x:(1-w)*(1-w)*A.x+2*(1-w)*w*b.x+w*w*j.x,y:(1-w)*(1-w)*A.y+2*(1-w)*w*b.y+w*w*j.y})}_.push(m)}let I={x:jQ(R.y/X)*X,y:R.y};return{f:Q,model:J,skinLower:[...U,...q.slice().reverse()],skinUpper:[...N,...G.slice(1),...F.slice(1)],inset:B8([H(1.85,-4.6),H(1.9,-0.8),H(2.3,1.6),W(5.2,3.6),W(6.9,3.9),W(7.4,4.9),W(7.2,5.9),H(6.6,9.9),H(7.6,10.9),H(8.55,11.5),H(8.1,13.4),H(7.25,15.2),H(7.45,18),H(3,22.2),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.6,12),H(-6.7,8.7),H(-6.1,4.6),H(-6,-4.6)],3),skull:B8([H(7,16.2),H(7.3,18.5),H(6,20.7),H(3,22.1),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.4,12.6),H(-4.6,12.2),H(-2.2,13.3),H(1,13.7),H(4.1,14.1),H(6.2,14.9)],4),brain:B8([H(6.55,16.3),H(6.75,18.4),H(5.5,20.1),H(2.8,21.4),H(-1.9,21.3),H(-5.8,18.8),H(-7.1,15.4),H(-6.7,13.1),H(-4.4,12.8),H(-2.1,13.9),H(1,14.3),H(4,14.7),H(5.9,15.4)],4),sulcus:B8([H(5.4,19.4),H(2.4,20.5),H(-1.4,20.4),H(-4.8,18.4)],4),eye:L$(H(6.5,15.4),1.1*X,0.95*X),eyeC:H(6.5,15.4),vertebrae:O,cords:[[$(-5.3,-4.6),$(-4.5,-4.6),$(-4.5,11.8),$(-5.1,12.4),$(-5.6,11.6)],[$(-5.1,-4.6),$(-4.7,-4.6),$(-4.72,11.4),$(-5.15,11.6)]],nasal:B8([H(0.3,11.2),H(1.1,10.25),H(2.7,10.75),H(4.6,10.85),H(6.4,10.65),H(7.6,10.85),H(8.45,11.3),H(8,12.2),H(6.7,13.4),H(4.4,13.9),H(1.8,13.6),H(0.2,12.6)],4),turbinates:[[3,11.45,2.1,0.32],[3.5,12.45,1.9,0.3],[4,13.3,1.45,0.22]].map(([B,p,j,b])=>L$(H(B,p),j*X,b*X,-0.04)),palOral:E,palNasal:E.map((B)=>({x:B.x,y:B.y+0.55*X})),jawLower:D,jawUpper:D.map((B)=>({x:B.x,y:B.y+0.75*X})),hyoid:L$(k,0.5*X,0.28*X,0.3,28),thyroid:[{x:R.x+0.75*X,y:R.y-1.6*X},{x:R.x+1.75*X,y:R.y-0.6*X},{x:R.x+1.95*X,y:R.y+1.2*X},{x:R.x+1.45*X,y:R.y+1.9*X},{x:R.x+1.15*X,y:R.y+1.1*X},{x:R.x+1.3*X,y:R.y-0.4*X},{x:R.x+0.75*X,y:R.y-1.6*X}],trachea:[[{x:R.x-0.65*X,y:R.y},{x:R.x-0.75*X,y:-4.8}],[{x:R.x+0.75*X,y:R.y},{x:R.x+0.95*X,y:-4.8}]],rings:V,outerWall:Q.outer.filter((B)=>B.y>R.y||B.x>0),glottisWall:[I,Q.outer.find((B)=>B.y>R.y)??I],fibres:_,folds:[[{x:R.x-0.62*X,y:R.y+0.05},{x:R.x-0.1,y:R.y+0.12*X},{x:R.x-0.62*X,y:R.y+0.32*X},{x:R.x-0.62*X,y:R.y+0.05}],[{x:R.x+0.72*X,y:R.y+0.05},{x:R.x+0.12,y:R.y+0.12*X},{x:R.x+0.72*X,y:R.y+0.32*X},{x:R.x+0.72*X,y:R.y+0.05}]],lowerTeeth:[...Q.lowerTeeth,W(6.8,6),W(6.4,6.2),Q.lowerTeeth[0]]}}class D7{pitch=0;yaw=0;toPitch=0;toYaw=0;next=2;update(J,Q){if(J>=this.next){let K=Math.random()<0.35;this.toPitch=K?0:(Math.random()*2-1)*0.55,this.toYaw=K?0:(Math.random()*2-1)*0.9,this.next=J+1.2+Math.random()*3.5}let Z=1-Math.exp(-Q*28);this.pitch+=(this.toPitch-this.pitch)*Z,this.yaw+=(this.toYaw-this.yaw)*Z}}function zY(J,Q,Z,K,$){if(Q.compact)return ED(J,Q,Z,K,$);let{w:W,h:X}=Q,Y=W-18,H=26;if(Z.length>=3)["F1","F2","F3"].forEach((O,L)=>{w9(J,O,Y-78,H+L*22,{size:12,color:e.amber,ls:0.12,alpha:0.75}),w9(J,String(Math.round(Z[L])),Y,H+L*22,{size:15,color:e.amber,align:"right",ls:0.08})}),w9(J,"HZ",Y,H+64,{size:10,color:e.amber,align:"right",alpha:0.6}),H+=110;for(let O of K)w9(J,O,Y,H,{size:10,color:BQ.secondary,align:"right",ls:0.14}),H+=16;if(!$.length)return;let{slotX:N,slotY:q}=Q,U=Math.max(60,(W-14-N)/2),G=Math.max(56,Math.min(112,(X-8-q)/2)),F=Math.max(22,Math.min(44,G*0.4,U*0.32));$.slice(0,4).forEach((O,L)=>{let E=N+L%2*U,D=q+Math.floor(L/2)*G;N7(J,E+6,D+4,4,O.color),w9(J,O.label.toUpperCase(),E+16,D+8,{size:11,color:O.color,ls:0.2,alpha:0.85});let R=D+18+F*1.1;if(O.ipa)G$(J,E+F*0.6,R,O.value,F*1.45,O.color);else w9(J,O.value.toUpperCase(),E,R,{size:O.value.length>3?F*0.82:F,color:O.color,weight:"m",ls:0.04});if(O.unit)w9(J,O.unit.toUpperCase(),O.ipa?E+F*1.5:E+(O.value.length>3?0:F*1.64),O.ipa||O.value.length<=3?R:R+18,{size:11,color:O.color,ls:0.16,alpha:0.7})})}function ED(J,Q,Z,K,$){let{w:W,h:X}=Q;if(Z.length>=3){let U=(W-24)/3;["F1","F2","F3"].forEach((G,F)=>{w9(J,G,12+F*U,18,{size:10,color:e.amber,ls:0.12,alpha:0.75}),w9(J,String(Math.round(Z[F])),12+F*U+26,18,{size:13,color:e.amber,ls:0.06})})}if(w9(J,K.slice(0,2).join("   "),12,36,{size:9,color:BQ.secondary,ls:0.12}),K.length>2)w9(J,K.slice(2).join("   "),12,50,{size:9,color:BQ.secondary,ls:0.12});let Y=$.slice(0,4);if(!Y.length)return;let H=(W-24)/Y.length,N=X-82,q=Math.max(16,Math.min(30,H*0.28));Y.forEach((U,G)=>{let F=12+G*H;N7(J,F+4,N,3,U.color),w9(J,U.label.toUpperCase(),F+12,N+3,{size:8,color:U.color,ls:0.14,alpha:0.85});let O=N+18+q;if(U.ipa)G$(J,F+q*0.5,O,U.value,q*1.4,U.color);else w9(J,U.value.toUpperCase(),F,O,{size:U.value.length>3?q*0.62:q,color:U.color,weight:"m",ls:0.02});if(U.unit)w9(J,U.unit.toUpperCase(),F,O+16,{size:8,color:U.color,ls:0.14,alpha:0.7})})}var vQ=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},A$=(J,Q,Z)=>Math.max(Q,Math.min(Z,J)),bQ=(J,Q,Z,K)=>J+(Q-J)*(1-Math.exp(-K/Z));class yQ{hz;damping;x=0;v=0;constructor(J,Q){this.hz=J;this.damping=Q}step(J,Q){let Z=2*Math.PI*this.hz,K=Math.max(1,Math.ceil(Q/0.008)),$=Q/K;for(let W=0;W<K;W++)this.v+=(Z*Z*(J-this.x)-2*this.damping*Z*this.v)*$,this.x+=this.v*$;return this.x}}function OD(J){let Q=J.t.pressureRms,Z=J.nPh+J.nOr-3;return Z>=J.nPh&&Z<Q.length?Q[Z]/980.665:0}class T6{puff=0;brow=0;lid=0;lookUp=0;content=0;nod=0;tilt=0;clock=0;cheeks=new yQ(6.5,0.32);nodSpring=new yQ(2.4,0.42);tiltSpring=new yQ(3.2,0.3);ref=NaN;fast=NaN;held=0;hold=0;nextBlink=1.5+Math.random()*2;blinkAt=-1;secondBlink=!1;lastStep=-1;update(J,Q){this.clock+=Q;let Z=J?.t,K=!!Z&&Z.voicing>0.45&&Z.gate>0.3&&Z.f0>30&&Z.outRms>0.004,$=J?vQ(1.5,7,OD(J)):0;this.puff=A$(this.cheeks.step($,Q),-0.35,1.25);let W=0,X=0;if(K){let F=Math.log2(Z.f0);if(!Number.isFinite(this.ref)||Math.abs(12*(F-this.ref))>14)this.ref=this.fast=F;if(this.ref=bQ(this.ref,F,5,Q),Math.abs(12*(F-this.fast))>2.5)this.fast=F,this.held=0;this.fast=bQ(this.fast,F,0.35,Q),this.held+=Q,W=12*(F-this.ref),X=12*(F-this.fast)}else this.held=0;let Y=(K?A$(W/6,-0.7,1):0)+0.3*this.content;this.brow=bQ(this.brow,Y,K?0.12:0.45,Q),this.lookUp=0.32*Math.max(0,this.brow);let H=K?0.92*vQ(0.9,1.9,this.held)*vQ(0.15,0.55,this.brow):0;if(this.hold=bQ(this.hold,H,H>this.hold?0.35:0.08,Q),this.clock>=this.nextBlink&&this.hold<0.2)this.blinkAt=this.clock,this.secondBlink=!this.secondBlink&&Math.random()<0.18,this.nextBlink=this.clock+(this.secondBlink?0.28:2+Math.random()*4.5);let N=(this.clock-this.blinkAt)/0.17,q=this.blinkAt>=0&&N<1?Math.sin(Math.PI*N)**0.7:0;this.lid=Math.max(q,this.hold,0.95*this.content);let U=J?.beatStep??-1;if(U>=0&&this.lastStep>=0&&U!==this.lastStep){let F=U<this.lastStep;if(F||Math.floor(U/4)!==Math.floor(this.lastStep/4))this.nodSpring.v-=F||Math.floor(U/16)!==Math.floor(this.lastStep/16)?1.3:0.8}this.lastStep=U,this.nod=this.nodSpring.step(0.13*this.brow,Q);let G=vQ(0.6,2,this.held)*0.07*Math.sin(this.clock*1.7);this.tilt=this.tiltSpring.step(G+0.05*A$(X,-1.5,1.5),Q)}}function fQ(J,Q,Z){let K=J.tract,$=C$(J,Z),W={x:(Q.upperLip[6].x+Q.lowerLip[6].x)/2+0.15,y:(Q.upperLip[6].y+Q.lowerLip[6].y)/2};return[{id:"tongue",pos:Q.tongueCenter,label:"Tongue body"},{id:"tip",pos:Q.tip,label:"Tongue tip"},{id:"jaw",pos:$(7.5,4.9),label:"Jaw"},{id:"lips",pos:W,label:"Lips"},{id:"velum",pos:Q.velum[Math.floor(Q.velum.length/2)],label:"Soft palate"},{id:"larynx",pos:{x:Q.glottis.x+1.2*K.scale,y:Q.glottis.y},label:"Larynx"}]}var RD=[0.09,0.06,0.03],d8={x0:-9.4,x1:I$.x1,y0:I$.y0,y1:23.5},z$=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)};function MD(J,Q,Z){let K=1.22*Q,$=1.08*Q,W=(O,L)=>{let E=[];for(let D=0;D<=14;D++){let R=O+(L-O)*D/14;E.push({x:J.x+K*Math.cos(R),y:J.y+$*Math.sin(R)})}return E},X=Math.PI/180,Y=Math.max(0,Z.brow),H=30*X+14*X*Y,N=-32*X,q=H+(N-H)*Z.lid,U=[],G=0.42*Q*Z.brow,F=0.3*Q*Math.max(0,-Z.brow);for(let O=0;O<=12;O++){let L=-1+O/6,E=(1+L)/2;U.push({x:J.x+0.1*Q+0.9*Q*L,y:J.y+1.4*Q+0.2*Q*(1-L*L)+G-F*E})}return[{pts:W(100*X,q),w:1.15,alpha:0.9},{pts:W(-78*X,N),w:1,alpha:0.75},{pts:U,w:1.4,alpha:0.85}]}function LD(J,Q,Z){if(Math.abs(Z)<0.01)return null;let K={x:(J.upperLip[6].x+J.lowerLip[6].x)/2,y:(J.upperLip[6].y+J.lowerLip[6].y)/2},$=0.6*Q*Z;return(W)=>{let X=Math.abs(W.y-K.y)/(2.6*Q);if(X>=1)return W;let Y=(1-X*X)**2*z$(0.03,0.45,X)*z$(K.x-1.2*Q,K.x-0.5*Q,W.x);return Y?{x:W.x+$*Y,y:W.y}:W}}class ID{particles=[];scale=20;ox=0;oy=0;w=0;h=0;compact=!1;sparkSeed=1;geo=null;echoes=[];clock=0;lastEcho=-1;gaze=new D7;face=new T6;constructor(){for(let J=0;J<170;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN})}resize(J,Q){this.w=J,this.h=Q,this.compact=J<560;let Z=12,K=this.compact?62:10,$=this.compact?92:8;this.scale=Math.max(1,Math.min((J-2*Z)/(d8.x1-d8.x0),(Q-K-$)/(d8.y1-d8.y0)));let W=J-2*Z-(d8.x1-d8.x0)*this.scale;this.ox=Z+(this.compact?W/2:Math.min(W/2,Math.max(0,W-220)))-d8.x0*this.scale,this.oy=K+Math.max(0,(Q-K-$-(d8.y1-d8.y0)*this.scale)/2)+d8.y1*this.scale;for(let X of this.particles)X.px=NaN}X(J){return this.ox+J.x*this.scale}Y(J){return this.oy-J.y*this.scale}P(J){return[this.ox+J.x*this.scale,this.oy-J.y*this.scale]}toBody(J,Q){return{x:(J-this.ox)/this.scale,y:(this.oy-Q)/this.scale}}get pxPerCm(){return this.scale}handles(J,Q,Z){return fQ(J,Q,Z)}geometry(J,Q,Z){if(this.geo&&this.geo.f===Q&&this.geo.model===J)return this.geo;return this.geo=q7(J,Q,Z)}lens(J,Q,Z){let K=this.gaze;K.update(this.clock,Z);let $=0.85*Q*Math.cos(K.yaw),W=K.pitch+this.face.lookUp,X=Math.cos(W),Y=Math.sin(W),H={x:J.x+$*X,y:J.y+$*Y},N=(0.18+0.2*Math.abs(Math.sin(K.yaw)))*Q,q=0.42*Q,U=[];for(let G=0;G<=20;G++){let F=G/20*Math.PI*2,O=Math.cos(F)*N,L=Math.sin(F)*q;U.push({x:H.x+O*X-L*Y,y:H.y+O*Y+L*X})}return U}draw(J,Q,Z,K,$,W,X){this.clock+=X.dt;let Y=this.geometry(Q,Z,K),H=(E)=>E.map((D)=>this.P(D)),N=(E,D,R,k={})=>uJ(J,H(E),D,R,k);N(Y.inset,e.blueDim,0.9,{alpha:0.9}),N(Y.skull,e.blueDim,0.9,{close:!0}),N(Y.brain,e.blueMid,1.1,{close:!0}),N(Y.sulcus,e.blueDim,0.9),N(Y.eye,e.blueMid,1.1);let q=Q.tract.scale,U=LD(Z,q,this.face.puff),G=(E)=>U?E.map(U):E;N(this.lens(Y.eyeC,q,X.dt),e.blueDim,0.9,{alpha:1-z$(0.45,0.9,this.face.lid)});for(let E of MD(Y.eyeC,q,this.face))N(E.pts,e.blue,E.w,{alpha:E.alpha});for(let E of Y.vertebrae)N(E,e.blueDim,1);N(Y.cords[0],e.blueDim,0.8,{alpha:0.8}),N(Y.cords[1],e.blueDim,0.8,{alpha:0.6}),N(Y.nasal,e.blueMid,1,{close:!0});for(let E of Y.turbinates)N(E,e.blueDim,0.9);N(Y.palOral,e.blueMid,1.1),N(Y.palNasal,e.blueMid,1.1),N(Y.hyoid,e.blueDim,1),N(Y.thyroid,e.blueDim,1);for(let E of Y.trachea)N(E,e.blueMid,1);for(let E of Y.rings)N(E,e.blueDim,0.9);if(W.pressure&&$)this.drawPressure(J,Q,Z,$);else if(W.grid)for(let E of Z.grid)U7(J,this.X(E.inner),this.Y(E.inner),this.X(E.outer),this.Y(E.outer),e.blueDim,0.9,{alpha:0.7});if(W.particles&&$)this.drawParticles(J,Q,Z,$,X.dt);if($&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock,this.echoes.push({t:this.clock,tongue:Z.tongue.slice(),jaw:Y.jawLower,upperLip:lJ(G(Z.upperLip).map((E)=>[E.x,E.y])),lowerLip:lJ(G(Z.lowerLip).map((E)=>[E.x,E.y]))});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if($)RD.forEach((E,D)=>{let R=this.nearestEcho(this.clock-E);if(!R)return;let k=0.1+0.07*D;N(R.tongue,e.green,1,{alpha:k}),N(R.jaw,e.red,1,{alpha:k*0.9});let V=(A)=>uJ(J,A.map(([P,_])=>[this.ox+P*this.scale,this.oy-_*this.scale]),e.pink,1,{alpha:k*0.9});V(R.upperLip),V(R.lowerLip)});N(G(Y.skinLower),e.blue,1.7,{hot:!0}),N(G(Y.skinUpper),e.blue,1.7,{hot:!0}),N(Y.outerWall,e.blue,1.4,{hot:!0}),N(Z.inner,e.blue,1.3,{alpha:0.9}),N(Y.glottisWall,e.blue,1.2,{alpha:0.8}),N(Z.epiglottis.slice(0,3),e.blue,2.2,{alpha:0.85}),N(Z.upperTeeth,e.blueMid,1.1,{close:!0}),N(Y.lowerTeeth,e.blueMid,1.1);for(let E of Y.folds)N(E,e.blue,1);let F=H(Z.tongue);J.save();let O=new Path2D;F.forEach(([E,D],R)=>R?O.lineTo(E,D):O.moveTo(E,D)),O.closePath(),J.clip(O);for(let E of Y.fibres)N(E,e.green,0.8,{alpha:0.32});J.restore(),uJ(J,F,e.green,1.6,{hot:!0}),N(Y.jawLower,e.red,1.5,{hot:!0}),N(Y.jawUpper,e.red,1,{alpha:0.45});let L=(E,D)=>lJ(E.map((R)=>this.P(R)),D);if(uJ(J,L(G(Z.upperLip),2),e.pink,1.5,{hot:!0}),uJ(J,L(G(Z.lowerLip),2),e.pink,1.5,{hot:!0}),uJ(J,L(Z.velum,3),e.white,1.25,{alpha:0.92}),$)this.drawTurbulence(J,Q,Z,$);if(W.calipers)this.drawCalipers(J,Z);this.drawHandles(J,Q,Z,K,X.hover,X.drag),this.drawReadouts(J,X.formants,X.info,X.slots)}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}gridPoint(J,Q,Z){let K=J.grid;if(K.length<2)return null;if(Q<=K[0].s){let G=Math.max(0,Q/Math.max(0.01,K[0].s)),F=J.glottis,O={x:(K[0].inner.x+K[0].outer.x)/2,y:(K[0].inner.y+K[0].outer.y)/2},L=0.35;return{x:F.x+(O.x-F.x)*G+Z*0.35*0.5,y:F.y+(O.y-F.y)*G}}let $=0,W=K.length-1;if(Q>=K[W].s)return null;while(W-$>1){let G=$+W>>1;if(K[G].s<=Q)$=G;else W=G}let X=(Q-K[$].s)/Math.max(0.000001,K[W].s-K[$].s),Y=K[$].inner.x+(K[W].inner.x-K[$].inner.x)*X,H=K[$].inner.y+(K[W].inner.y-K[$].inner.y)*X,N=K[$].outer.x+(K[W].outer.x-K[$].outer.x)*X,q=K[$].outer.y+(K[W].outer.y-K[$].outer.y)*X,U=0.5+0.5*Z*0.82;return{x:Y+(N-Y)*U,y:H+(q-H)*U}}nodeValueAtS(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}drawPressure(J,Q,Z,K){let $=K.t,W=Q.nodeS($.phLen,$.orLen);if(W.length!==$.pressureRms.length)return;for(let X of Z.grid){let Y=Math.pow(PQ(this.nodeValueAtS($.pressureRms,W,X.s)),0.85);U7(J,this.X(X.inner),this.Y(X.inner),this.X(X.outer),this.Y(X.outer),zQ(Y),1.15,{alpha:0.35+0.65*Y})}}drawParticles(J,Q,Z,K,$){let W=K.t,X=Q.nodeS(W.phLen,W.orLen),Y=new Float32Array(W.phAreas.length+W.orAreas.length);Y.set(W.phAreas,0),Y.set(W.orAreas,W.phAreas.length);let H=Z.lipS,N=[new Path2D,new Path2D,new Path2D];for(let q of this.particles){let U=this.nodeValueAtS(W.flow,X,q.s),G=Math.max(0.05,this.nodeValueAtS(Y,X,q.s)),F=U/G,O=Math.sign(F)*2.2*Math.log1p(Math.abs(F)/30);if(q.s+=O*$,q.life-=$*0.25,q.s>H||q.s<0||q.life<=0||Math.abs(F)<3){if(!(Math.abs(F)<3&&q.life>0)){q.s=Math.random()*0.8,q.u=Math.random()*2-1,q.life=0.6+Math.random()*0.8,q.px=NaN;continue}}let L=this.gridPoint(Z,q.s,q.u);if(!L)continue;let E=this.X(L),D=this.Y(L);if(Number.isFinite(q.px)){let R=Math.min(2,Math.floor(Math.min(1,Math.abs(O)/6)*Math.min(1,q.life)*3));N[R].moveTo(q.px,q.py),N[R].lineTo(E,D)}q.px=E,q.py=D}N.forEach((q,U)=>k6(J,q,"#ffe2a8",1.1,{alpha:0.16+0.2*U}))}drawTurbulence(J,Q,Z,K){let $=K.t;if(!($.noiseLevel>1)||$.noiseNode<0)return;let W=Q.branchS($.noiseNode,$.phLen,$.orLen);if(W<0)return;let X=Math.min(1,Math.log10($.noiseLevel)/3.2);if(X<=0.05)return;let Y=this.sparkSeed=this.sparkSeed*16807%2147483647,H=()=>(Y=Y*16807%2147483647)/2147483647;for(let N=0;N<30;N++){let q=this.gridPoint(Z,W+0.2+H()*1.2,H()*2-1);if(!q)continue;N7(J,this.X(q),this.Y(q),0.6+H()*1.4,"#f4fbff",0.15+0.7*X*H())}}drawCalipers(J,Q){let Z=-1,K=1/0;for(let D=2;D<Q.grid.length-1;D++)if(Q.grid[D].area<K)K=Q.grid[D].area,Z=D;if(Z<0||K>=1.2)return;let $=Q.grid[Z],[W,X]=this.P($.inner),[Y,H]=this.P($.outer);U7(J,W,X,Y,H,e.white,1.4,{hot:!0});let N=-(H-X),q=Y-W,U=Math.hypot(N,q)||1;for(let[D,R]of[[W,X],[Y,H]])U7(J,D-N/U*4,R-q/U*4,D+N/U*4,R+q/U*4,e.white,1.2);let G=Q.grid[Q.grid.length-1],O=Math.max(this.P(G.inner)[0],this.P(G.outer)[0])-Math.max(W,Y)<1.5*this.pxPerCm,L=O?Math.min(W,Y)-10:Math.max(W,Y)+10,E=Math.min(X,H)-4;w9(J,K<=0.0005?"CLOSED":`${K.toFixed(2)} CM²`,L,E,{size:11,color:e.white,ls:0.12,align:O?"right":"left"})}drawHandles(J,Q,Z,K,$,W){let X={tongue:e.green,jaw:e.red,lips:e.pink,velum:e.white,tip:e.blueMid,larynx:e.blueMid},Y={tongue:8,jaw:7,lips:7,velum:6,tip:5,larynx:5};for(let H of this.handles(Q,Z,K)){let N=this.X(H.pos),q=this.Y(H.pos),U=H.id===W||H.id===$;if(RY(J,N,q,X[H.id],Y[H.id]+(U?2:0),U?1:0.9),U)OY(J,N,q,28,X[H.id],1,{alpha:0.75}),w9(J,H.label.toUpperCase(),N+32,q-18,{size:12,color:X[H.id],ls:0.18})}}drawReadouts(J,Q,Z,K){zY(J,{w:this.w,h:this.h,compact:this.compact,slotX:this.X({x:3.35,y:0}),slotY:this.Y({x:0,y:2.05})},Q,Z,K)}}var u8=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},PY=(J)=>Math.max(0,Math.min(1,J));function $J(J,Q){if(Q<=J[0][0])return J[0][1];for(let Z=1;Z<J.length;Z++)if(Q<=J[Z][0]){let[K,$]=J[Z-1],[W,X]=J[Z];return $+(X-$)*(Q-K)/(W-K)}return J[J.length-1][1]}var VD=[[-4.6,5.3],[0,5.4],[2.5,5.5],[4.5,5.25],[6.5,5.5],[8.5,6.1],[10.5,6.6],[12.5,7],[15,7.3],[17.5,7.65],[19.5,7.4],[21,6.5],[22.2,4.6],[23,1]],CD=[[3.4,5.9],[4.6,6.2],[5.7,6.15],[6.5,6.2],[8,6.35],[9.5,6.35],[10.6,6.55],[11.6,6.75],[12.6,6.9],[13.9,7.15],[15,7.45],[16.1,7.95]],BD=[[3.4,2],[4.6,2.2],[5.7,2.4],[6.5,2.6],[10.6,1.7],[11,1.75],[11.65,1.2],[12.6,0.95],[13.9,0.75],[15,0.9],[16.1,1.6]],AD=[[-4.6,0.5],[3,0.5],[6,0.42],[12,0.42],[16,0.45],[23,0.45]],zD=[[-3,8.5],[-1.6,8],[-0.6,6.4],[1.2,4.6],[3.5,3.6],[5.3,3],[7.3,3.3],[8.6,4.4]],PD=[[6,-0.6],[7.4,-0.8],[9.6,-1.9],[10.6,-2.5],[12,-2.6]],kD=[[12.3,4],[13,5.6],[14.5,6.4],[16.5,6.9],[18.5,6.6],[20,5.4],[21,3.6],[21.45,0.5]],_D=[[0,1.5],[0.15,1.9],[0.35,2.35],[0.6,2.45],[0.8,2.2],[0.92,1.5],[1,0.55]],TD=[[0,1.3],[0.35,1.1],[0.7,0.9],[0.9,0.55],[1,0.25]],wD=[[0.85,1.05,0.7],[0.68,0.95,0.65],[0.78,1.1,0.8],[0.7,0.85,0.9],[0.68,0.8,0.9],[1,0.75,1.1],[0.92,0.7,1.05]],SD=[[0.54,0.9,0.6],[0.6,0.92,0.62],[0.7,1,0.75],[0.7,0.85,0.8],[0.72,0.8,0.85],[1.1,0.72,1.05],[1.05,0.7,1]],jD=3,nJ=2.2,SY=(J)=>Math.abs(J)<1?(1-J*J)**2:0;function xQ(J,Q,Z=!1){let K=Math.min(1,Math.abs(Q)/J.W),$=Math.pow(1-Math.pow(K,J.pf),1/J.pf);return J.xw+(J.Fs-J.xw)*$+(Z?0:J.E*SY(Q/J.wf))}function vD(J,Q){let Z=Q>J.xw,K=Z?(Q-J.xw)/Math.max(0.000001,J.Fs-J.xw):(J.xw-Q)/Math.max(0.000001,J.xw-J.Bk),$=Z?J.pf:nJ;return J.W*Math.pow(Math.max(0,1-Math.pow(Math.min(1,K),$)),1/$)}function bD(J,Q,Z){Z.length=0;let K=12,$=10,W=16;for(let Y=0;Y<K;Y++){let H=Math.PI-Y/K*(Math.PI/2);Z.push(J.xw-(J.xw-J.Bk)*Math.pow(Math.abs(Math.cos(H)),2/nJ),J.W*Math.pow(Math.sin(H),2/nJ))}let X=Math.asin(Math.min(1,Math.pow(Q/J.W,J.pf/2)));for(let Y=0;Y<$;Y++){let H=Math.PI/2-Y/$*(Math.PI/2-X),N=J.W*Math.pow(Math.sin(H),2/J.pf);Z.push(J.xw+(J.Fs-J.xw)*Math.pow(Math.cos(H),2/J.pf)+J.E*SY(N/J.wf),N)}for(let Y=0;Y<=W;Y++){let H=Q*(1-Y/W);Z.push(xQ(J,H),H)}}class k${dy;rows=[];y0;y1;constructor(J,Q,Z){this.dy=Q;let K=1/0,$=-1/0;for(let W of J)K=Math.min(K,W.y),$=Math.max($,W.y);this.y0=K,this.y1=$;for(let W=K;W<=$;W+=Q){let X=-1/0,Y=1/0;for(let H=0;H<J.length-1;H++){let N=J[H],q=J[H+1];if(N.y>W===q.y>W)continue;let U=N.x+(q.x-N.x)*(W-N.y)/(q.y-N.y);X=Math.max(X,U),Y=Math.min(Y,U)}this.rows.push(X>Y?Z(W,X,Y):null)}}at(J){let Q=(J-this.y0)/this.dy,Z=Math.floor(Q);if(Z<0||Z>=this.rows.length-1)return null;let K=this.rows[Z],$=this.rows[Z+1];if(!K||!$)return K??$;let W=Q-Z,X=(Y,H)=>Y+(H-Y)*W;return{F:X(K.F,$.F),Bk:X(K.Bk,$.Bk),Fs:X(K.Fs,$.Fs),W:X(K.W,$.W),xw:X(K.xw,$.xw),E:X(K.E,$.E),wf:X(K.wf,$.wf),pf:X(K.pf,$.pf)}}}class IJ{lines=[];cur=[];p(J,Q,Z){return this.cur.push(J,Q,Z),this}end(J=!1){if(J&&this.cur.length>=3)this.cur.push(this.cur[0],this.cur[1],this.cur[2]);if(this.cur.length>=6)this.lines.push(new Float32Array(this.cur));this.cur=[]}ellipse(J,Q,Z,K=24,$=0,W=Math.PI*2){for(let X=0;X<=K;X++){let Y=$+(W-$)*X/K,H=Math.cos(Y),N=Math.sin(Y);this.p(J[0]+Q[0]*H+Z[0]*N,J[1]+Q[1]*H+Z[1]*N,J[2]+Q[2]*H+Z[2]*N)}this.end()}}function jY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=1-u8(7.6,9.1,X),H=$J(zD,$),N=u8(H-1.5,H+0.15,X),q=$J(PD,X),U=u8(q-0.7,q+0.9,$);return Y*N*U}var yD=1.7,fD=0.55;function vY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=(($-5.2)/2.3)**2+((X-8.3)/2.4)**2;return Y<1?(1-Y)**2:0}function kY(J,Q,Z,K){if(Q===0||K===0)return[0,0];let $=Q*K*J;return[fD*$,Math.sign(Z)*yD*$*u8(0.4*J,2.6*J,Math.abs(Z))]}function hD(J,Q,Z){let K=Q.length;if(Q.every(Boolean))return[Z?[...J,J[0],J[1],J[2]]:J];let $=[],W=Z?Q.indexOf(!1)+1:0,X=[];for(let Y=0;Y<K;Y++){let H=(W+Y)%K;if(Q[H])X.push(J[3*H],J[3*H+1],J[3*H+2]);else{if(X.length>=6)$.push(X);X=[]}}if(X.length>=6)$.push(X);return $}function xD(J,Q){let Z=[0];for(let X=1;X<J.length;X++)Z.push(Z[X-1]+Math.hypot(J[X].x-J[X-1].x,J[X].y-J[X-1].y));let K=Z[Z.length-1],$=[],W=0;for(let X=0;X<Q;X++){let Y=K*X/(Q-1);while(W<J.length-2&&Z[W+1]<Y)W++;let H=(Y-Z[W])/Math.max(0.000000001,Z[W+1]-Z[W]);$.push({x:J[W].x+(J[W+1].x-J[W].x)*H,y:J[W].y+(J[W+1].y-J[W].y)*H})}return $}function hQ(J,Q,Z){let K=Z*Q[Q.length-1],$=0;while($<J.length-2&&Q[$+1]<K)$++;let W=(K-Q[$])/Math.max(0.000000001,Q[$+1]-Q[$]);return{x:J[$].x+(J[$+1].x-J[$].x)*W,y:J[$].y+(J[$+1].y-J[$].y)*W}}var _$=(J)=>{let Q=[0];for(let Z=1;Z<J.length;Z++)Q.push(Q[Z-1]+Math.hypot(J[Z].x-J[Z-1].x,J[Z].y-J[Z-1].y));return Q};function gD(J){let Q=J.tract,Z=Q.scale,K=J.bodyParams.pharynx,$=B$(J),W=(S)=>$(0,S).y,X=(S)=>S/Z>=7?S/Z:7-(7-S/Z)/K,Y=(S,g)=>Q.P(S,g),H={...CQ,jaw:0,lipAp:0,labiodental:0},N=J.frame(H),q=q7(J,N,H),U=[...q.skinLower,...q.skinUpper],G=new k$(U,0.08*Z,(S,g,d)=>{let a=X(S),Q0=a>=3.4&&a<=16.1?$J(CD,a)*Z:1/0,r=Math.min(g,Q0),z0=2.2+0.4*u8(2.5,3.5,a)*(1-u8(17,18.5,a));return{F:g,Bk:d,Fs:r,W:$J(VD,a)*Z,xw:d+(r-d)*$J(AD,a),E:g-r,wf:$J(BD,a)*Z,pf:z0}}),F=Y(-2.5,10.5),O=N.upperLip[N.upperLip.length-1].y,L=N.lowerLip[N.lowerLip.length-1].y,E=jD*Z,D=(S,g,d,a)=>g>L&&g<O&&Math.abs(d)<E&&S>a.xw,R=[],k=(S,g,d)=>{for(let a of hD(S,g,d)){let Q0=a.length/3,r=new Float32Array(Q0),z0=new Float32Array(Q0);for(let q0=0;q0<Q0;q0++)r[q0]=jY(Z,K,a[3*q0],a[3*q0+1]),z0[q0]=vY(Z,K,a[3*q0],a[3*q0+1]);R.push({a:new Float32Array(a),w:r,c:z0})}},V=[],A=1.4*Z;for(let S=G.y0+0.25*Z;S<G.y1-0.2*Z;S+=A){let g=G.at(S);if(!g||g.W<0.2*Z)continue;bD(g,Math.min(0.6*g.W,3.6*Z),V);let d=[],a=[],Q0=V.length/2;for(let r=0;r<Q0;r++)d.push(V[2*r],S,V[2*r+1]);for(let r=Q0-2;r>0;r--)d.push(V[2*r],S,-V[2*r+1]);for(let r=0;r<d.length/3;r++)a.push(!D(d[3*r],S,d[3*r+2],g));k(d,a,!0)}let P=0.3*Z;for(let S of[-3.6,-2.4,-1.2,1.2,2.4,3.6].map((g)=>g*Z)){let g=[],d=[];for(let a=G.y0+0.1*Z;a<=G.y1;a+=P){let Q0=G.at(a);if(!Q0||Math.abs(S)>0.97*Q0.W){k(g,d,!1),g=[],d=[];continue}let r=xQ(Q0,S);g.push(r,a,S),d.push(!D(r,a,S,Q0))}k(g,d,!1)}for(let S of[0.5,0.8].map((g)=>g*Math.PI))for(let g of[1,-1]){let d=[],a=[];for(let Q0=G.y0+0.1*Z;Q0<=G.y1;Q0+=P){let r=G.at(Q0);if(!r||r.W<0.2*Z)continue;d.push(r.xw-(r.xw-r.Bk)*Math.pow(Math.abs(Math.cos(S)),2/nJ),Q0,g*r.W*Math.pow(Math.sin(S),2/nJ)),a.push(!0)}k(d,a,!1)}let _=[],I=[],B=(S,g,d,a,Q0,r=!1)=>{let z0=new IJ;Q0(z0),S.push({lines:z0.lines,color:g,width:d,alpha:a,hot:r})},p=(S,g,d,a)=>{let Q0=B8(g.map(([r,z0])=>$(r,z0)),4);Q0.forEach((r,z0)=>{let q0=G.at(r.y);S.p(r.x,r.y,a*((q0?vD(q0,r.x):0)+d(z0,Q0.length)))}),S.end()};B(_,e.blueDim,1.05,0.9,(S)=>{for(let g of[1,-1]){p(S,[[-2.55,13.4],[-2.85,14.75],[-3.65,15.45],[-4.6,15.25],[-5.2,14.25],[-5.4,12.8],[-5.05,11.3],[-4.55,10.2],[-3.95,9.55],[-3.35,9.65],[-3,10.35]],(a,Q0)=>(0.25+1.2*Math.sin(Math.PI*a/(Q0-1))**1.5)*Z,g),p(S,[[-3.15,14.3],[-3.95,14.45],[-4.55,13.5],[-4.6,12.1],[-4.15,11.05]],()=>0.55*Z,g),p(S,[[-2.7,11.2],[-2.55,11.85],[-2.75,12.35]],()=>0.35*Z,g);let d=[];for(let a=0;a<=16;a++)d.push([-3.5+0.6*Math.cos(a/16*Math.PI*2),12+0.85*Math.sin(a/16*Math.PI*2)]);p(S,d,()=>0.12*Z,g)}}),B(_,e.blueMid,1,0.8,(S)=>{for(let g of[1,-1]){for(let a=14.6;a>=11.3;a-=0.15){let Q0=W(a),r=G.at(Q0);if(!r)continue;let z0=g*(0.3+1.05*(14.6-a)/3.3)*Z;S.p(xQ(r,z0),Q0,z0)}S.end();let d=[[7.95,11.05,0.95],[7.4,11.15,1.45],[7.25,11.6,1.55],[7.55,12.1,1.35],[8.2,12.15,1]];for(let[a,Q0,r]of d)S.p(a*Z,W(Q0),g*r*Z);S.end()}}),B(_,e.blueMid,1,0.9,(S)=>{for(let g of[1,-1])S.ellipse([8.05*Z,W(10.98),g*0.62*Z],[0.42*Z,0.04*Z,0],[0,0,0.26*Z],16)});let j=new k$(q.brain,0.08*Z,(S,g,d)=>({F:g,Bk:d,Fs:g,W:$J(kD,X(S))*Z,xw:d+(g-d)*0.48,E:0,wf:1,pf:2.3}));B(_,e.blueMid,0.85,0.32,(S)=>{for(let g=j.y0+0.6*Z;g<j.y1-0.15*Z;g+=1.5*Z){let d=j.at(g);if(!d)continue;for(let a=0;a<=48;a++){let Q0=a/48*Math.PI*2,r=Math.cos(Q0),z0=Math.sin(Q0),q0=r>=0?d.pf:nJ,y0=r>=0?d.xw+(d.Fs-d.xw)*Math.pow(r,2/q0):d.xw-(d.xw-d.Bk)*Math.pow(-r,2/q0);S.p(y0,g,Math.sign(z0)*d.W*Math.pow(Math.abs(z0),2/q0))}S.end()}for(let g of[0.3,0.7].map((d)=>d*Math.PI))for(let d of[1,-1]){for(let a=j.y0;a<=j.y1;a+=0.3*Z){let Q0=j.at(a);if(!Q0)continue;let r=Math.cos(g),z0=Math.sin(g),q0=r>=0?Q0.pf:nJ,y0=r>=0?Q0.xw+(Q0.Fs-Q0.xw)*Math.pow(r,2/q0):Q0.xw-(Q0.xw-Q0.Bk)*Math.pow(-r,2/q0);S.p(y0,a,d*Q0.W*Math.pow(z0,2/q0))}S.end()}}),B(_,e.blueDim,0.9,0.6,(S)=>{for(let g=0;g<9;g++){let d=-4.4+g*1.75;if(d>10.5)break;let a=jQ(d)-2.25,Q0=Y(a,d+0.08),r=Y(a,d+1.32),z0=Y(a+0.8,0).x,q0=0.8*Z,y0=1.05*Z;for(let i0 of[Q0.y,r.y])S.ellipse([z0,i0,0],[q0,0,0],[0,0,y0],24);for(let i0 of[0.25,0.75,1.25,1.75].map((r0)=>r0*Math.PI))S.p(z0+q0*Math.cos(i0),Q0.y,y0*Math.sin(i0)).p(z0+q0*Math.cos(i0),r.y,y0*Math.sin(i0)).end();let m0=(Q0.y+r.y)/2,h0=z0-2.15*Z;S.ellipse([h0,m0,0],[0.72*Z,0,0],[0,0,0.88*Z],20);for(let i0 of[1,-1])S.p(z0-0.7*Z,m0,i0*0.55*Z).p(h0+0.45*Z,m0,i0*0.72*Z).end(),S.p(z0-0.5*Z,m0,i0*0.95*Z).p(z0-0.9*Z,m0-0.1*Z,i0*2.3*Z).end();S.p(h0-0.72*Z,m0,0).p(h0-1.8*Z,m0-0.55*Z,0).end()}}),B(_,e.blueDim,0.85,0.5,(S)=>{let g=Y(-4.9,0).x;for(let d=-4.4;d<=11;d+=1.75)S.ellipse([g,Y(0,d).y,0],[0.42*Z,0,0],[0,0,0.6*Z],16);for(let d of[1,-1])S.p(g,Y(0,-4.6).y,d*0.6*Z).p(g,Y(0,11.4).y,d*0.6*Z).end()}),B(_,e.blueDim,0.9,0.7,(S)=>{for(let g of[1,-1]){for(let d of q.nasal)S.p(d.x,d.y,g*1.2*Z);S.end(!0);for(let d of q.turbinates){for(let a of d)S.p(a.x,a.y,g*0.95*Z);S.end()}}});let b=(S,g,d)=>{let a=[];for(let Q0=0;Q0<=60;Q0++){let r=d*Q0/60;a.push({x:S-g*Math.pow(r/d,1.85),y:r})}return{pts:a,cum:_$(a)}},m=(S,g,d,a,Q0,r,z0)=>{let q0=b(g,d,a),y0=q0.cum[q0.cum.length-1],m0=Q0.reduce((i0,r0)=>i0+r0[0],0),h0=0.97*y0/(m0*Z);for(let i0 of[1,-1]){let r0=0;for(let[V9,E9,O9]of Q0){let v=V9*Z*h0,A9=E9*Z,J9=O9*Z,N9=(r0+v/2)/y0;r0+=v;let z=hQ(q0.pts,q0.cum,N9),M=hQ(q0.pts,q0.cum,Math.min(1,N9+0.01)),y=hQ(q0.pts,q0.cum,Math.max(0,N9-0.01)),s=M.x-y.x,W0=M.y-y.y,U0=Math.hypot(s,W0)||1;s/=U0,W0/=U0;let D0=W0,t=-s,K0=r(z.y/a),O0=(A0,N0,H0=0)=>[z.x+s*A0-D0*H0,K0+z0*N0,i0*(z.y+W0*A0-t*H0)];for(let[A0,N0]of[[-0.5,0],[-0.5,0.55],[-0.38,1],[0,1.08],[0.38,1],[0.5,0.55],[0.5,0]])S.p(...O0(A0*v,N0*A9));S.end(!0);for(let[A0,N0]of[[-0.45,0.1],[0.45,0.1],[0.45,0.9],[-0.45,0.9]])S.p(...O0(A0*v,0,N0*J9));S.end(!0)}}},T=Y(7.3,0).x,w=4.2*Z,n=2.65*Z;B(_,e.blue,1,0.8,(S)=>m(S,T,w,n,wD,(g)=>(7.95+0.3*g*g)*Z,1)),B(_,e.blueMid,1,0.6,(S)=>{for(let g of[0,2,4,5,6,7]){let d=q.palOral[g],a=Math.max(0,(T-d.x)/w),Q0=(a>=1?n:n*Math.pow(a,0.5405405405405405))-0.45*Z,r=(8.95+0.3*Math.min(1,Q0/n)**2)*Z;if(Q0<0.6*Z||d.y<r+0.15*Z)continue;for(let z0=0;z0<=20;z0++){let q0=Q0*(z0/10-1);S.p(d.x,r+(d.y-r)*Math.pow(1-Math.pow(Math.abs(q0)/Q0,2.4),0.7),q0)}S.end()}});let u=(S,g,d)=>{let a=Y(S,g);return[a.x,a.y,d*Z]},$0=(S,g,d)=>{let a=g.map(([Q0,r,z0])=>u(Q0,r,d*z0));for(let Q0=0;Q0<a.length-1;Q0++){let r=a[Math.max(0,Q0-1)],z0=a[Q0],q0=a[Q0+1],y0=a[Math.min(a.length-1,Q0+2)];for(let m0=0;m0<4;m0++){let h0=m0/4,i0=h0*h0,r0=i0*h0,V9=(E9,O9,v,A9)=>0.5*(2*O9+(-E9+v)*h0+(2*E9-5*O9+4*v-A9)*i0+(-E9+3*O9-3*v+A9)*r0);S.p(V9(r[0],z0[0],q0[0],y0[0]),V9(r[1],z0[1],q0[1],y0[1]),V9(r[2],z0[2],q0[2],y0[2]))}}S.p(...a[a.length-1]),S.end()};B(I,e.red,1.25,0.9,(S)=>{for(let g of[1,-1]){$0(S,[[6.4,4.6,0],[5.6,4.45,1.5],[4.5,4.4,2.6],[3.2,4.5,3.5],[1.8,4.85,4.15],[0.4,5.6,4.6],[-0.55,6.6,4.85],[-0.9,7.6,4.9],[-1.45,8.9,4.95],[-1.9,9.7,5],[-2.15,10.2,5]],g),$0(S,[[-1.8,10.25,4.95],[-0.9,9.4,4.85],[0.15,10.1,4.6],[0.6,8.9,4.35],[1.1,7.7,4],[1.9,7.2,3.55]],g);let d=u(-2.5,10.5,g*4.95);S.ellipse(d,[0.45*Z,0,0],[0,0.12*Z,0.85*Z],16)}}),B(I,e.red,1,0.55,(S)=>{for(let g of[1,-1]){$0(S,[[1.9,7.2,3.55],[3,7.15,3.15],[4.3,7.1,2.6],[5.4,7.05,1.85],[6.2,7.05,1.05],[6.72,7.15,0]],g);for(let[d,a,Q0,r,z0]of[[3,3.15,3.2,4.5,3.5],[5.4,1.85,5.6,4.45,1.5],[1.9,3.55,1.8,4.85,4.15]])$0(S,[[d,7.15,a],[(d+Q0)/2,5.9,(a+z0)/2+0.15],[Q0,r,z0]],g)}});let i=new IJ;$0(i,[[7.25,6.75,0],[7.4,5.4,0],[6.4,4.6,0],[5.6,5,0],[5.9,6.2,0],[6.45,6.55,0]],1);let Z0=i.lines[0],X0=Y(6.98,0).x,w0=4*Z,T0=2.5*Z;B(I,e.blue,1,0.8,(S)=>m(S,X0,w0,T0,SD,(g)=>(7.75+0.45*Math.pow(g,1.5))*Z,-1));let n0=$(6.15,15.35),u0=new x(0.3*Z,(G.y0+G.y1)/2,0);return{model:J,head:G,condyle:F,lipHalf:E,center:u0,shell:R,fixed:_,jaw:I,chin:Z0,eyes:[[n0.x,n0.y,3.15*Z],[n0.x,n0.y,-3.15*Z]],eyeR:1.05*Z}}var pD=[0.09,0.06,0.03];class T${scene=new KQ;camera=new l9(24,1,5,2000);beams=new M$;rest=null;w=1;h=1;compact=!1;centred=!1;facing=1;clock=0;gaze=new D7;face=new T6;eye=new x;turn=new r9;euler=new S8;strobe=0;tmp=new R$;particles=[];echoes=[];lastEcho=-1;sparkSeed=7;k=1;ring={n:0,s:new Float64Array(80),cx:new Float64Array(80),cy:new Float64Array(80),ux:new Float64Array(80),uy:new Float64Array(80),a:new Float64Array(80),b:new Float64Array(80)};v3=new x;caliper=null;constructor(){this.scene.add(this.beams.group),this.scene.fog=new J7(0,50,100);for(let J=0;J<200;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,v:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN,pz:NaN})}dispose(){this.beams.dispose()}resetMotion(){this.face=new T6,this.echoes=[],this.lastEcho=-1,this.strobe=0;for(let J of this.particles)J.px=NaN}resize(J,Q){if(this.w=J,this.h=Q,this.compact=J<560,this.camera.aspect=J/Q,this.compact||this.centred)this.camera.clearViewOffset();else this.camera.setViewOffset(J,Q,0.1*J,0,J,Q);this.camera.updateProjectionMatrix(),this.beams.setResolution(J,Q);for(let Z of this.particles)Z.px=NaN}poses(J){let Q=this.restFor(J),Z=Math.tan(this.camera.fov*Math.PI/360),K=1.1*Math.max(15.2/Z,11/(Z*Math.max(0.3,this.camera.aspect))),$=Q.center.clone(),W=this.facing>0?0.62:Math.PI-0.62,X=0.2;return{target:$,home:$.clone().add(new x(Math.sin(W)*Math.cos(0.2),Math.sin(0.2),Math.cos(W)*Math.cos(0.2)).multiplyScalar(K)),side:$.clone().add(new x(0,0,this.facing*K))}}restFor(J){if(!this.rest||this.rest.model!==J)this.rest=gD(J);return this.rest}project(J,Q,Z){let K=this.v3.set(J,Q,Z).applyMatrix4(this.beams.group.matrixWorld).project(this.camera);return[(K.x+1)/2*this.w,(1-K.y)/2*this.h]}pxPerCmAt(J,Q,Z){let K=this.camera.matrixWorld.elements,[$,W]=this.project(J,Q,Z),[X,Y]=this.project(J+K[0],Q+K[1],Z+K[2]);return Math.hypot(X-$,Y-W)}crown(J){let Q=this.restFor(J),Z=J.tract.scale,K=Q.head.at(Q.head.y1-1.2*Z),$=K?(K.F+K.Bk)/2:Q.center.x,[W,X]=this.project($,Q.head.y1,0);return{x:W,y:X,cmPx:this.pxPerCmAt($,Q.head.y1,0)}}faceView(J,Q,Z){let K=fQ(J,Q,Z).find(($)=>$.id==="lips").pos;return{handles:fQ,X:($)=>this.project($.x,$.y,0)[0],Y:($)=>this.project($.x,$.y,0)[1],pxPerCm:this.pxPerCmAt(K.x,K.y,0)}}update(J,Q,Z,K,$,W){this.clock+=W;let X=this.restFor(J),Y=J.tract.scale,H=this.face;this.headPose(X,Y);let N=V$(J,Z.jaw),q=X.condyle,U=this.beams,G=this.camera.position.distanceTo(X.center),F=this.scene.fog;F.near=G-3*Y,F.far=G+30*Y,U.begin();let O=(m,T=0)=>{let w=new Float32Array(m.length*3);return m.forEach((n,u)=>{w[3*u]=n.x,w[3*u+1]=n.y,w[3*u+2]=T}),w},L=this.v3.copy(this.eye).sub(X.center).normalize(),E=u8(0.25,0.8,Math.abs(L.z)),D=0.22+0.78*E,R=0.45+0.55*E,k=(m,T,w,n={},u=D)=>U.line(O(m),m.length,T,w,{...n,alpha:(n.alpha??1)*u}),V=(m,T,w)=>w===0?[m,T]:_Y(m,T,q,w);this.k=Y;for(let m of X.fixed)for(let T of m.lines)U.line(T,T.length/3,m.color,m.width,{alpha:m.alpha,hot:m.hot});for(let m of X.jaw)for(let T of m.lines){let w=this.tmp.reset();for(let n=0;n<T.length;n+=3){let[u,$0]=V(T[n],T[n+1],N);w.p(u,$0,T[n+2])}U.poly(w,m.color,m.width,{alpha:m.alpha,hot:m.hot})}for(let m of X.shell){let T=this.tmp.reset();for(let w=0;w<m.w.length;w++){let n=m.a[3*w+2],[u,$0]=kY(Y,m.c[w],n,H.puff),[i,Z0]=V(m.a[3*w]+u,m.a[3*w+1],N*m.w[w]);T.p(i,Z0,n+$0)}U.poly(T,e.blueDim,0.85,{alpha:0.42})}let A=q7(J,Q,Z);k(A.inset,e.blueDim,0.9,{alpha:0.5}),k(A.skull,e.blueDim,0.9,{close:!0,alpha:0.6}),k(A.brain,e.blueMid,1,{close:!0,alpha:0.75}),k(A.sulcus,e.blueDim,0.9),k(A.nasal,e.blueMid,1,{close:!0}),k(A.palOral,e.blueMid,1.1),k(A.palNasal,e.blueMid,1.1),k(A.skinLower,e.blue,1.5),k(A.skinUpper,e.blue,1.5),k(A.outerWall,e.blue,1.4,{hot:!0}),k(Q.inner,e.blue,1.3,{alpha:0.9}),k(A.glottisWall,e.blue,1.2,{alpha:0.8}),this.eyes(X,W),this.airway(J,Q,K,$,Y),this.velum(Q,Y),this.epiglottis(Q,Y,R),this.larynx(J,Q,Z,K,Y,W,X.head.y0,D);let P=O(Q.tongue),_=(m,T)=>O(lJ(m.map((w)=>[w.x,w.y]),T).map(([w,n])=>({x:w,y:n}))),I=_(Q.upperLip,2),B=_(Q.lowerLip,2),p=this.lips(X,J,Q,Z,N),j=X.chin,b=new Float32Array(j.length);for(let m=0;m<j.length;m+=3){let[T,w]=V(j[m],j[m+1],N);b[m]=T,b[m+1]=w}if(K&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock;let m=[{a:P,color:e.green},{a:b,color:e.red},{a:I,color:e.pink},{a:B,color:e.pink}];if(p)m.push({a:p,color:e.pink});this.echoes.push({t:this.clock,lines:m});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if(K)pD.forEach((m,T)=>{let w=this.nearestEcho(this.clock-m);if(!w)return;for(let n of w.lines)U.line(n.a,n.a.length/3,n.color,1,{alpha:(0.1+0.07*T)*R})});if(this.tongue(Q,Z,Y),U.line(b,b.length/3,e.red,1.5,{hot:!0,alpha:R}),U.line(P,Q.tongue.length,e.green,1.6,{hot:!0,alpha:R}),U.line(I,I.length/3,e.pink,1.5,{hot:!0,alpha:R}),U.line(B,B.length/3,e.pink,1.5,{hot:!0,alpha:R}),k(lJ(Q.velum.map((m)=>[m.x,m.y]),3).map(([m,T])=>({x:m,y:T})),e.white,1.25,{alpha:0.92},R),$.particles&&K)this.drawParticles(J,Q,K,W);if(K)this.drawTurbulence(J,Q,K);if(this.caliper=null,$.calipers)this.drawCaliper(Q);U.end()}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}headPose(J,Q){let Z=this.beams.group,K=this.v3.set(-2.4*Q,J.head.y0+0.42*(J.condyle.y-J.head.y0),0);this.turn.setFromEuler(this.euler.set(this.face.tilt,0,this.face.nod)),Z.quaternion.copy(this.turn),Z.position.copy(K).sub(K.applyQuaternion(this.turn)),Z.updateMatrixWorld(!0),this.eye.copy(this.camera.position),Z.worldToLocal(this.eye)}eyes(J,Q){let Z=this.gaze,K=this.face;Z.update(this.clock,Q);let $=J.eyeR,W=Z.pitch+1.3*K.lookUp,X=[Math.cos(W)*Math.cos(Z.yaw),Math.sin(W),Math.cos(W)*Math.sin(Z.yaw)],Y=(U)=>{let G=Math.abs(U[1])>0.9?[1,0,0]:[0,1,0],F=wY(TY(G,U));return[F,TY(U,F)]},H=this.eye,N=1-u8(0.4,0.9,K.lid),q=Math.max(0,K.brow);for(let U of J.eyes){let G=wY([H.x-U[0],H.y-U[1],H.z-U[2]]),[F,O]=Y(G),L=new IJ;L.ellipse(U,w6(F,$),w6(O,$),36);let[E,D]=Y(X),R=[U[0]+X[0]*$*0.86,U[1]+X[1]*$*0.86,U[2]+X[2]*$*0.86];L.ellipse(R,w6(E,$*0.5),w6(D,$*0.5),24);let k=[U[0]+X[0]*$*0.97,U[1]+X[1]*$*0.97,U[2]+X[2]*$*0.97];L.ellipse(k,w6(E,$*0.2),w6(D,$*0.2),14);let V=Math.sign(U[2]),A=(j,b,m)=>j*(1-b*b)+0.06*b*V*m,P=(j)=>{for(let b=0;b<=16;b++){let m=-1+b/8,T=V*m*0.95,w=A(-0.36,m,-1),n=j?A(0.5+0.2*q,m,1)*(1-K.lid)+(w+0.03)*K.lid:w;L.p(U[0]+1.04*$*Math.cos(n)*Math.cos(T),U[1]+1.04*$*Math.sin(n),U[2]+1.04*$*Math.cos(n)*Math.sin(T))}L.end()};P(!0),P(!1);let _=0.3*K.brow,I=0.28*Math.max(0,-K.brow),B=0.22*K.lid*q;for(let j=0;j<=12;j++){let b=-1+j/6,m=V*(0.15+b*0.62),T=(1-b)/2,w=0.82+0.12*(1-b*b)-0.06*b+_+(B-I)*T;L.p(U[0]+1.32*$*Math.cos(w)*Math.cos(m),U[1]+1.32*$*Math.sin(w),U[2]+1.32*$*Math.cos(w)*Math.sin(m))}L.end();let p=[[e.blueMid,1,0.35],[e.blue,1,0.9*N],[e.blue,1,0.7*N],[e.blue,1.25,0.95],[e.blue,1.05,0.75],[e.blueMid,1.3,0.8]];L.lines.forEach((j,b)=>this.beams.line(j,j.length/3,p[b][0],p[b][1],{alpha:p[b][2]}))}}lips(J,Q,Z,K,$){let W=Q.tract.scale,X=J.condyle,Y=J.head,H=this.beams,N=Q.bodyParams.pharynx,q=J.lipHalf,U=Math.max(0.3*W,(1.1+(Q.bodyParams.lipWidth-1.1)*PY(K.lipWidth))*W/2),G=Z.upperLip.slice(6),F=Z.lowerLip.slice(6).map((w)=>kQ(w,X,-$)),O=_$(G),L=_$(F),E=G[0],D=F[0],R=(E.y+D.y)/2,k=(w,n)=>{let u=Y.at(w);return u?xQ(u,n,!0):0},V=E.x-k(E.y,0),A=D.x-k(D.y,0),P=(V+A)/2,_=G[G.length-1].y,I=F[F.length-1].y,B=this.tmp,p=(w,n,u)=>{let $0=Math.sqrt(Math.max(0,1-(u/U)**2)),i=hQ(w?G:F,w?O:L,n),Z0=w?E:D,X0=w?_:I,w0=R+(Z0.y-R)*$0,T0=X0-Z0.y,n0=w0+(i.y-Z0.y)*(X0-w0)/(Math.abs(T0)<0.0001?0.0001:T0),u0=Math.pow(Math.max(0,1-(u/q)**2),1.5),S=i.x-k(i.y,0)+(P-(w?V:A))*(1-$0)*(1-n),g=k(n0,u)+S*u0,d=w?0.5*(1-$0)*(1-n):0.5*(1+$0)+0.5*(1-$0)*n,a=d+(jY(W,N,g,n0)-d)*u8(U,q,Math.abs(u)),[Q0,r]=kY(W,vY(W,N,g,n0),u,this.face.puff),[z0,q0]=a?_Y(g+Q0,n0,X,$*a):[g+Q0,n0];return[z0,q0,u+r]},j=(w,n,u,$0,i)=>{B.reset();for(let Z0=0;Z0<=i;Z0++){let X0=u+($0-u)*Z0/i;B.p(...p(w,n(X0),X0))}return B},b=[0.66,0.88];for(let w of[!0,!1]){for(let $0 of b)H.poly(j(w,()=>$0,-q,q,24),e.blueDim,0.85,{alpha:0.42});for(let $0 of[-0.8,-0.5,0.5,0.8].map((i)=>i*q)){B.reset();for(let i=0;i<=8;i++)B.p(...p(w,0.45+0.55*i/8,$0));H.poly(B,e.blueDim,0.85,{alpha:0.42})}let n=Math.min(q,U+0.3*W),u=($0)=>{let i=Math.sqrt(Math.max(0,1-($0/n)**2)),Z0=w?-0.07*Math.exp(-(($0/(0.32*W))**2))+0.05*Math.exp(-(((Math.abs($0)-0.55*W)/(0.3*W))**2)):0;return Math.max(0,(w?0.42:0.45)*i+Z0*i)};H.poly(j(w,u,-n,n,28),e.pink,1.3,{alpha:0.95}),H.poly(j(w,($0)=>0.45*u($0),-n,n,28),e.pink,1,{alpha:0.45})}for(let w of[1,-1])H.poly(j(!0,()=>0,w*U,w*q,6),e.pink,1,{alpha:0.6});let m=Z.upperLip[6].y-Z.lowerLip[6].y>0.02*W,T=24;B.reset();for(let w=0;w<=T;w++)B.p(...p(!0,0,-U+2*U*w/T));if(m)for(let w=T-1;w>0;w--)B.p(...p(!1,0,-U+2*U*w/T));return H.poly(B,e.pink,2.1,{hot:!0,close:m}),m?B.a.slice(0,B.n*3):null}tongue(J,Q,Z){let K=J.tongue,$=0,W=1/0;K.forEach((G,F)=>{let O=(G.x-J.tip.x)**2+(G.y-J.tip.y)**2;if(O<W)W=O,$=F});let X=22,Y=xD(K.slice(0,$+1),X),H=PY(Q.lateral),N=Y.map((G,F)=>{let O=Y[Math.max(0,F-1)],L=Y[Math.min(X-1,F+1)],E=L.x-O.x,D=L.y-O.y,R=Math.hypot(E,D)||1;E/=R,D/=R;let k=F/(X-1);return{p:G,nx:-D,ny:E,W:$J(_D,k)*Z,h:($J(TD,k)+0.8*H*u8(0.45,0.8,k))*Z}}),q=(G,F)=>{let O=G.h*(1-Math.cos(F));return[G.p.x-G.nx*O,G.p.y-G.ny*O,G.W*Math.sin(F)]},U=this.tmp;for(let G=1;G<X-1;G+=2){U.reset();for(let F=0;F<=12;F++)U.p(...q(N[G],-Math.PI/2+Math.PI*F/12));this.beams.poly(U,e.green,1,{alpha:0.5})}for(let G of[-Math.PI/2,-Math.PI/4,Math.PI/4,Math.PI/2]){U.reset();for(let F of N)U.p(...q(F,G));this.beams.poly(U,e.green,Math.abs(G)>1?1.25:1,{alpha:Math.abs(G)>1?0.8:0.45})}}airway(J,Q,Z,K,$){let W=Q.grid,X=this.ring;if(X.n=0,W.length<2)return;let Y=Z?J.nodeS(Z.t.phLen,Z.t.orLen):null,H=K.pressure&&Z&&Y&&Y.length===Z.t.pressureRms.length,N=-1,q=0;for(let O=0;O<W.length&&X.n<X.s.length;O++){let L=W[O],E=L.outer.x-L.inner.x,D=L.outer.y-L.inner.y,R=Math.hypot(E,D);if(R>0.0001)N=E/R,q=D/R;let k=L.d/2,V=X.n++;X.s[V]=L.s,X.cx[V]=L.outer.x-N*k,X.cy[V]=L.outer.y-q*k,X.ux[V]=N,X.uy[V]=q,X.a[V]=k,X.b[V]=L.d>0.01?Math.min(3.5*$,2*L.area/(Math.PI*L.d)):0}let U=this.tmp,G=this.eye;for(let O=0;O<X.n;O+=2){U.reset();for(let V=0;V<=24;V++){let A=V/24*Math.PI*2,P=Math.cos(A)*X.a[O],_=Math.sin(A)*X.b[O];U.p(X.cx[O]+X.ux[O]*P,X.cy[O]+X.uy[O]*P,_)}let L=G.x-X.cx[O],E=G.y-X.cy[O],D=G.z,R=Math.abs(X.uy[O]*L-X.ux[O]*E)/(Math.hypot(L,E,D)||1),k=1-0.65*R*R;if(H){let V=Math.pow(PQ(P$(Z.t.pressureRms,Y,X.s[O])),0.85);this.beams.poly(U,zQ(V),0.85,{alpha:(0.25+0.65*V)*k})}else this.beams.poly(U,e.blueDim,0.85,{alpha:(K.grid?0.8:0.45)*k})}for(let O of[1,-1]){U.reset();for(let L=0;L<X.n;L++)U.p(X.cx[L],X.cy[L],O*X.b[L]);this.beams.poly(U,e.blue,1,{alpha:0.55})}let F=Q.glottis;for(let O of[0.3,0.65]){let L=F.x+(X.cx[0]-F.x)*O,E=F.y+(X.cy[0]-F.y)*O,D=(0.55+0.25*O)*$;U.reset();for(let R=0;R<=20;R++)U.p(L+D*Math.cos(R/20*Math.PI*2),E,D*Math.sin(R/20*Math.PI*2));this.beams.poly(U,e.blueDim,0.9,{alpha:0.6})}}airPoint(J,Q,Z,K){let $=this.ring;if($.n<2)return null;if(Q<=$.s[0]){let U=Math.max(0,Q/Math.max(0.01,$.s[0])),G=J.glottis;return[G.x+($.cx[0]-G.x)*U+Z*0.3*this.k,G.y+($.cy[0]-G.y)*U,K*0.45*this.k]}let W=0,X=$.n-1;if(Q>=$.s[X])return null;while(X-W>1){let U=W+X>>1;if($.s[U]<=Q)W=U;else X=U}let Y=(Q-$.s[W])/Math.max(0.000001,$.s[X]-$.s[W]),H=(U)=>U[W]+(U[X]-U[W])*Y,N=H($.a)*Z*0.82,q=H($.b)*K*0.82;return[H($.cx)+H($.ux)*N,H($.cy)+H($.uy)*N,q]}drawParticles(J,Q,Z,K){let $=Z.t,W=J.nodeS($.phLen,$.orLen),X=new Float32Array($.phAreas.length+$.orAreas.length);X.set($.phAreas,0),X.set($.orAreas,$.phAreas.length);let Y=Q.lipS;for(let H of this.particles){let N=P$($.flow,W,H.s),q=Math.max(0.05,P$(X,W,H.s)),U=N/q,G=Math.sign(U)*2.2*Math.log1p(Math.abs(U)/30);if(H.s+=G*K,H.life-=K*0.25,H.s>Y||H.s<0||H.life<=0||Math.abs(U)<3){if(!(Math.abs(U)<3&&H.life>0)){H.s=Math.random()*0.8,H.u=Math.random()*2-1,H.v=Math.random()*2-1,H.life=0.6+Math.random()*0.8,H.px=NaN;continue}}let F=this.airPoint(Q,H.s,H.u,H.v);if(!F)continue;if(Number.isFinite(H.px)){let O=Math.min(2,Math.floor(Math.min(1,Math.abs(G)/6)*Math.min(1,H.life)*3));this.beams.seg(H.px,H.py,H.pz,F[0],F[1],F[2],"#ffe2a8",1.05,0.16+0.2*O)}[H.px,H.py,H.pz]=F}}drawTurbulence(J,Q,Z){let K=Z.t;if(!(K.noiseLevel>1)||K.noiseNode<0)return;let $=J.branchS(K.noiseNode,K.phLen,K.orLen);if($<0)return;let W=Math.min(1,Math.log10(K.noiseLevel)/3.2);if(W<=0.05)return;let X=this.sparkSeed=this.sparkSeed*16807%2147483647,Y=()=>(X=X*16807%2147483647)/2147483647;for(let H=0;H<40;H++){let N=this.airPoint(Q,$+0.2+Y()*1.2,Y()*2-1,Y()*2-1);if(!N)continue;let q=0.02+Y()*0.05;this.beams.seg(N[0]-q,N[1],N[2],N[0]+q,N[1],N[2],"#f4fbff",1.6,0.15+0.7*W*Y())}}drawCaliper(J){let Q=this.ring,Z=-1,K=1/0;for(let X=2;X<J.grid.length-1;X++)if(J.grid[X].area<K)K=J.grid[X].area,Z=X;if(Z<0||K>=1.2||Z>=Q.n)return;let $=this.tmp.reset();for(let X=0;X<=24;X++){let Y=X/24*Math.PI*2,H=Math.cos(Y)*Q.a[Z],N=Math.sin(Y)*Q.b[Z];$.p(Q.cx[Z]+Q.ux[Z]*H,Q.cy[Z]+Q.uy[Z]*H,N)}this.beams.poly($,e.white,1.3,{hot:!0});let W=J.grid[Z];this.caliper={x:W.outer.x,y:W.outer.y,z:0,area:K}}velum(J,Q){let Z=J.velum,K=Math.floor(Z.length/2)-1,$=[];for(let Y=0;Y<=K;Y++){let H=Z[Y],N=Z[Z.length-1-Y],q=H.x-N.x,U=H.y-N.y,G=Math.hypot(q,U)||1;q/=G,U/=G;let F=Y/K;$.push({x:(H.x+N.x)/2,y:(H.y+N.y)/2,nx:q,ny:U,W:(1.95-1.5*Math.pow(F,1.5))*Q,droop:0.45*Q*F})}let W=(Y,H)=>{let N=0.12*Q*(1-H*H)-Y.droop*H*H;return[Y.x+Y.nx*N,Y.y+Y.ny*N,Y.W*H]},X=this.tmp;for(let Y of[1,3,5,7,9].filter((H)=>H<=K)){X.reset();for(let H=0;H<=12;H++)X.p(...W($[Y],-1+H/6));this.beams.poly(X,e.white,1,{alpha:0.5})}for(let Y of[-1,1]){X.reset();for(let H of $)X.p(...W(H,Y));this.beams.poly(X,e.white,1,{alpha:0.65})}}epiglottis(J,Q,Z){let[K,$]=J.epiglottis,W=$.x-K.x,X=$.y-K.y,Y=Math.hypot(W,X)||1;W/=Y,X/=Y;let H={x:-X,y:W},N=(G)=>(0.22+0.9*Math.pow(Math.sin(G*Math.PI/2),1.3))*Q,q=this.tmp.reset(),U=10;for(let G=0;G<=U;G++){let F=G/U,O=N(F),L=0.28*Q*(O/(1.12*Q));q.p(K.x+W*Y*F+H.x*L,K.y+X*Y*F+H.y*L,O)}for(let G=1;G<12;G++){let F=N(1)*(1-2*G/12),O=0.28*Q*(Math.abs(F)/(1.12*Q))**2;q.p($.x+H.x*O+W*0.08*Q*(1-(F/N(1))**2),$.y+H.y*O+X*0.08*Q*(1-(F/N(1))**2),F)}for(let G=U;G>=0;G--){let F=G/U,O=N(F),L=0.28*Q*(O/(1.12*Q));q.p(K.x+W*Y*F+H.x*L,K.y+X*Y*F+H.y*L,-O)}this.beams.poly(q,e.blue,1.1,{alpha:0.75}),this.beams.line(new Float32Array([K.x,K.y,0,$.x,$.y,0]),2,e.blue,2.1,{alpha:0.85*Z})}larynx(J,Q,Z,K,$,W,X,Y){let H=Q.glottis,N=this.beams,q=new IJ,U=(A,P,_)=>[H.x+A*$,H.y+P*$,_*$],G=(A,P=!1)=>{for(let[_,I,B]of A)q.p(...U(_,I,B));q.end(P)};for(let A of[1,-1])G([[1.45,1.75,0],[0.75,2,A*1.2],[-0.5,1.95,A*1.9],[-0.6,-0.6,A*1.85],[0.25,-0.85,A*1.5],[1.05,-0.8,A*0.55],[1.2,-0.75,0],[1.6,0.05,0],[1.9,1.15,0],[1.45,1.75,0]]),G([[-0.5,1.95,A*1.9],[-0.7,2.85,A*1.85]]),G([[-0.6,-0.6,A*1.85],[-0.45,-1.25,A*1.7]]);for(let[A,P]of[[-1.75,0.15],[-1.4,1.1]]){for(let _=0;_<=28;_++){let I=_/28*Math.PI*2;q.p(...U(0.1+1*Math.cos(I),A+P*(1-Math.cos(I))/2,1.1*Math.sin(I)))}q.end()}for(let A of q.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let F=new IJ,O=H.y-2.1*$,L=H.x+0.08*$;for(let A=O;A>X;A-=0.5*$)F.ellipse([L,A,0],[0.82*$,0,0],[0,0,0.95*$],20,-0.8*Math.PI,0.8*Math.PI);for(let A of[1,-1])F.p(L,O,A*0.95*$).p(L,X,A*0.95*$).end();for(let A of F.lines)N.line(A,A.length/3,e.blueDim,0.9,{alpha:0.85});for(let A of[1,-1])N.line(new Float32Array([L+A*0.82*$,H.y,0,L+A*0.82*$,X,0]),2,e.blueMid,1,{alpha:Y});let E=new IJ,D={x:J.tract.P(1.6,0).x,y:J.tract.P(0,2.9).y+0.6*Z.larynx*$};for(let A of[-0.16,0.16]){for(let P=0;P<=20;P++){let _=-1+P/10;E.p(D.x+(0.35-0.65*_*_)*$,D.y+A*$,1.15*_*$)}E.end();for(let P of[1,-1])E.p(D.x-0.3*$,D.y+A*$,P*1.15*$).p(D.x-2.8*$,D.y+(0.7+A)*$,P*2.05*$).end()}for(let A of E.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let R=K?.t.glottalArea,k=0;if(R&&R.length){this.strobe=(this.strobe+W/1.8)%1;let A=0.02;for(let P=0;P<R.length;P++)A=Math.max(A,R[P]);if(k=Math.min(0.45*$,R[Math.floor(this.strobe*R.length)%R.length]/(1.3*$)*2.2),!Number.isFinite(k))k=0}let V=new IJ;for(let A of[1,-1])V.p(...U(0.72,0.1,0)).p(...U(-0.55,0.1,A*(0.06+k/$))).end(),V.p(...U(0.72,0,0)).p(...U(-0.6,0,A*0.62)).end(),V.p(...U(0.65,0.45,0)).p(...U(-0.5,0.45,A*0.45)).end(),V.ellipse(U(-0.72,0.15,A*(0.3+k/$)),[0.18*$,0,0],[0,0.12*$,0.12*$],10);V.lines.forEach((A,P)=>N.line(A,A.length/3,P%4===0?e.white:e.blueMid,P%4===0?1.3:1,{alpha:P%4===2?0.6:0.9,hot:P%4===0}))}}function _Y(J,Q,Z,K){let $=J-Z.x,W=Q-Z.y,X=Math.cos(K),Y=Math.sin(K);return[Z.x+$*X-W*Y,Z.y+$*Y+W*X]}var TY=(J,Q)=>[J[1]*Q[2]-J[2]*Q[1],J[2]*Q[0]-J[0]*Q[2],J[0]*Q[1]-J[1]*Q[0]],wY=(J)=>{let Q=Math.hypot(J[0],J[1],J[2])||1;return[J[0]/Q,J[1]/Q,J[2]/Q]},w6=(J,Q)=>[J[0]*Q,J[1]*Q,J[2]*Q];function P$(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}var w$=null,S$=null,S6=null;function bY(J){if(S6)return S6;return S6=(async()=>{let Q;if(J&&typeof J!=="string")Q=await WebAssembly.compile(J);else{let Z=J??"./chimera.wasm",K=await fetch(Z);if(!K.ok)throw new Error(`engine: ${Z}: HTTP ${K.status}`);Q=await WebAssembly.compile(await K.arrayBuffer())}if(WebAssembly.Module.imports(Q).length)throw new Error("engine: the wasm module must not have imports");S$=(await WebAssembly.instantiate(Q,{})).exports,w$=Q})(),S6.catch(()=>S6=null),S6}function yY(){if(!w$)throw new Error("engine not loaded (await initChimera())");return w$}function mD(){if(!S$)throw new Error("engine not loaded (await initChimera())");return S$}var dD=new TextEncoder,uD=new TextDecoder;function gQ(J,Q={}){let Z=mD(),K=dD.encode(JSON.stringify({fn:J,...Q})),$=Z.chimera_alloc(K.length);new Uint8Array(Z.memory.buffer,$,K.length).set(K);let W=Z.chimera_call($,K.length);Z.chimera_free($,K.length);let X=uD.decode(new Uint8Array(Z.memory.buffer,Z.chimera_result_ptr(),Z.chimera_result_len())),Y=JSON.parse(X);if(W!==0)throw new Error(`engine ${J}: ${Y.error}`);return Y}var I9=(J,Q,Z)=>Math.max(Q,Math.min(Z,J));class j${grains=Array.from({length:64},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,r:0.25}));pulses=Array.from({length:6},()=>({x:0,y:0,t:-100,strength:0}));count=36;w=0.045;h=0.052;d=0.024;radius=0.0008;shape="box";quiet=0;seed=12345;wallEnergy=new Float64Array(6);collisionEnergy=0;collisions=0;agitation=0;constructor(){this.reset(36)}random(){return this.seed^=this.seed<<13,this.seed^=this.seed>>>17,this.seed^=this.seed<<5,(this.seed>>>0)/4294967296}reset(J){this.count=I9(J|0,1,64);for(let Q=0;Q<64;Q++){let Z=this.random()*Math.PI*2,K=Math.sqrt(this.random())*0.28,$=this.grains[Q];$.x=Math.cos(Z)*this.w*K,$.y=Math.sin(Z)*this.h*K,$.z=(this.random()-0.5)*this.d*0.65,$.vx=$.vy=$.vz=0,$.r=0.18+this.random()*0.2}for(let Q of this.pulses)Q.t=-100;this.quiet=0,this.agitation=0,this.collisionEnergy=this.collisions=0}contact(J,Q,Z,K){if(Q<0.025||this.agitation<0.008)return;this.collisions++,this.collisionEnergy+=Q*Q/this.count,this.wallEnergy[Z]+=Q*Q/this.count;let $=this.pulses[Z];$.x=J.x,$.y=J.y,$.t=K,$.strength=Q}step(J,Q,Z,K,$){if(this.collisionEnergy=this.collisions=0,this.wallEnergy.fill(0),J>0.1){for(let L=0;L<this.count;L++){let E=this.grains[L];E.vx=E.vy=E.vz=0}return}if(this.agitation=Math.max(K,this.agitation*Math.exp(-J/0.11)),this.quiet=K<0.012?this.quiet+J:0,this.quiet>0.6){for(let L=0;L<this.count;L++){let E=this.grains[L];E.vx=E.vy=E.vz=0}return}let W=Math.max(1,Math.ceil(J/0.0042)),X=J/W,Y=Math.exp(-X*10),H=this.radius,N=(-Q[0]+Z[0]*0.35)*9.80665,q=(-Q[1]+Z[1]*0.35)*9.80665-1.6,U=-Q[2]*9.80665,G=Math.max(0.003,this.w/2-H),F=Math.max(0.003,this.h/2-H),O=Math.max(0.003,this.d/2-H);for(let L=0;L<W;L++){for(let D=0;D<this.count;D++){let R=this.grains[D];if(R.vx=I9((R.vx+N*X)*Y,-3,3),R.vy=I9((R.vy+q*X)*Y,-3,3),R.vz=I9((R.vz+U*X)*Y,-3,3),R.x+=R.vx*X,R.y+=R.vy*X,R.z+=R.vz*X,this.shape==="box"){if(Math.abs(R.x)>G)this.contact(R,Math.abs(R.vx),R.x>0?1:0,$),R.x=Math.sign(R.x)*G,R.vx=-R.vx*R.r,R.vy*=0.92,R.vz*=0.92;if(Math.abs(R.y)>F)this.contact(R,Math.abs(R.vy),R.y>0?2:3,$),R.y=Math.sign(R.y)*F,R.vy=-R.vy*R.r,R.vx*=0.92,R.vz*=0.92}else{let k=R.x*R.x/(G*G)+R.y*R.y/(F*F);if(k>1){let V=Math.sqrt(k);R.x/=V,R.y/=V;let A=R.x/(G*G),P=R.y/(F*F),_=Math.hypot(A,P);A/=_,P/=_;let I=R.vx*A+R.vy*P;if(I>0)this.contact(R,I,Math.abs(A)>Math.abs(P)?A>0?1:0:P>0?2:3,$),R.vx-=(1+R.r)*I*A,R.vy-=(1+R.r)*I*P}}if(Math.abs(R.z)>O)this.contact(R,Math.abs(R.vz),R.z>0?4:5,$),R.z=Math.sign(R.z)*O,R.vz=-R.vz*R.r,R.vx*=0.95,R.vy*=0.95}let E=H*2;for(let D=0;D<this.count;D++)for(let R=D+1;R<this.count;R++){let k=this.grains[D],V=this.grains[R],A=V.x-k.x,P=V.y-k.y,_=V.z-k.z,I=A*A+P*P+_*_;if(I>=E*E||I<0.0000000000000001)continue;let B=Math.sqrt(I),p=A/B,j=P/B,b=_/B,m=(V.vx-k.vx)*p+(V.vy-k.vy)*j+(V.vz-k.vz)*b,T=(E-B)*0.35;if(k.x-=p*T,k.y-=j*T,k.z-=b*T,V.x+=p*T,V.y+=j*T,V.z+=b*T,m<0){let w=-m*0.6;k.vx-=w*p,k.vy-=w*j,k.vz-=w*b,V.vx+=w*p,V.vy+=w*j,V.vz+=w*b}}for(let D=0;D<this.count;D++){let R=this.grains[D];if(R.z=I9(R.z,-O,O),this.shape==="box")R.x=I9(R.x,-G,G),R.y=I9(R.y,-F,F);else{let k=R.x*R.x/(G*G)+R.y*R.y/(F*F);if(k>1){let V=Math.sqrt(k);R.x/=V,R.y/=V}}}}}}class v${x=null;y=null;center(J){let Q=Math.hypot(...J);if(Q<0.5)return;J=J.map(($)=>$/Q);let Z=[1-J[0]*J[0],-J[0]*J[1],-J[0]*J[2]],K=Math.hypot(...Z);if(K<0.1)Z=[-J[1]*J[0],1-J[1]*J[1],-J[1]*J[2]],K=Math.hypot(...Z);this.x=Z.map(($)=>$/K),this.y=[J[1]*this.x[2]-J[2]*this.x[1],J[2]*this.x[0]-J[0]*this.x[2],J[0]*this.x[1]-J[1]*this.x[0]]}project(J){if(!this.x)this.center(J);let Q=Math.hypot(...J);if(!this.x||!this.y||Q<0.5)return[0,0];return[J.reduce((Z,K,$)=>Z+K*this.x[$],0)/Q,J.reduce((Z,K,$)=>Z+K*this.y[$],0)/Q]}}var b$=[{name:"Theremin",tag:"VOWEL",description:"Continuous pitch and OO–AH–EE colour."},{name:"Velvet",tag:"WARMTH",description:"Warm sine layers with an octave below."},{name:"Glass",tag:"SHIMMER",description:"Clear, bell-like partials that bloom with tilt."},{name:"Orbit",tag:"SPREAD",description:"A drifting, detuned ensemble in your hand."},{name:"Reed",tag:"BRIGHTNESS",description:"A woody harmonic voice that opens into a buzz."}],VJ=Math.PI*2,lD=[1,2.756,5.404,8.933],cD=[1,0.3,0.16,0.09];class nD{rate;phase=0;phases=new Float64Array([0,0.9,1.7,2.6]);clock=0;weights=new Float64Array(16);desired=new Float64Array(16);weightMix;constructor(J){this.rate=J;this.weightMix=1-Math.exp(-1/(J*0.012))}prepare(J,Q){let Z=Q*2,K=Z<1?0:1,$=Z-K,W=[[350,900,2200],[800,1250,2900],[300,2300,3100]],X=[180,280,450],Y=0;for(let N=0;N<16;N++){let q=J*(N+1),U=0.045/(N+1);for(let G=0;G<3;G++){let F=W[K][G]*(1-$)+W[K+1][G]*$,O=(q-F)/X[G];U+=Math.exp(-0.5*O*O)*(G===0?1:0.65)/Math.sqrt(N+1)}if(N===0)U+=0.3;this.desired[N]=U,Y+=U*U}let H=1/Math.sqrt(Y);for(let N=0;N<16;N++)this.desired[N]*=H}fade(J){return Math.max(0,Math.min(1,(this.rate*0.45-J)/(this.rate*0.07)))}render(J,Q,Z){let K=this.weightMix;this.clock+=1/this.rate,this.phase=(this.phase+VJ*J/this.rate)%VJ;let $=0;if(Z===0){for(let Y=0;Y<16;Y++)this.weights[Y]+=(this.desired[Y]-this.weights[Y])*K,$+=Math.sin(this.phase*(Y+1))*this.weights[Y]*this.fade(J*(Y+1));return $*0.24}if(Z===1)return this.phases[0]=(this.phases[0]+VJ*J*0.5/this.rate)%VJ,(Math.sin(this.phase)*0.8+Math.sin(this.phases[0])*0.25+Math.sin(this.phase*2)*Q*0.25*this.fade(J*2)+Math.sin(this.phase*3)*Q*0.1*this.fade(J*3))*0.3;if(Z===2){let Y=lD,H=cD;for(let N=0;N<4;N++){let q=J*Y[N];this.phases[N]=(this.phases[N]+VJ*q/this.rate)%VJ,$+=Math.sin(this.phases[N])*H[N]*(N===0?1:0.1+Q)*this.fade(q)}return $*0.27}if(Z===3){let Y=0.001+Q*0.009;for(let H=0;H<4;H++){let N=J*(H===3?0.5:1+(H-1)*Y);this.phases[H]=(this.phases[H]+VJ*N/this.rate)%VJ,$+=Math.sin(this.phases[H])*(0.85+Math.sin(this.clock*(0.7+H*0.17)+H)*0.15)}return $*0.12}let W=400+Q*6500,X=0;for(let Y=1;Y<=12;Y++){let H=J*Y,N=(Y%2?1:0.25)/Y*Math.exp(-H/W)*this.fade(H);$+=Math.sin(this.phase*Y)*N,X+=N*N}return $/Math.sqrt(Math.max(0.05,X))*0.25}}var pQ=(J)=>document.getElementById(J);function fY(J,Q){for(let Z of["feedback","beta"]){let K=pQ(Z+"-dialog"),$=pQ(Z+"-form"),W=pQ(Z+"-status");pQ(Z+"-open").addEventListener("click",()=>{W.textContent="",Q(),K.showModal()}),K.querySelector("[data-close]").addEventListener("click",()=>K.close()),$.addEventListener("submit",async(X)=>{if(X.preventDefault(),!$.reportValidity())return;let Y=new FormData($),H=$.querySelector("[type=submit]"),N={email:String(Y.get("email")||""),website:String(Y.get("website")||""),version:"web-03"};if(Z==="beta"){let q=Y.getAll("platform");if(!q.length){W.textContent="Choose at least one platform.";return}Object.assign(N,{name:String(Y.get("name")||""),platforms:q,consent:Y.get("consent")==="on"})}else Object.assign(N,{category:String(Y.get("category")||"other"),message:String(Y.get("message")||""),includeDetails:Y.get("details")==="on",details:Y.get("details")==="on"?{...J(),browser:navigator.userAgent}:void 0});H.disabled=!0,W.textContent="Saving…";try{let q=await fetch("https://kaizendsp.com/api/motion/"+Z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N),credentials:"omit"}),U=await q.json().catch(()=>({}));if(!q.ok||!U.ok)throw new Error(U.error||"Could not save this. Please try again.");W.textContent=Z==="beta"?"Request saved. We’ll use this address for Motion beta access and testing updates.":"Feedback saved—thank you. It goes directly to the Motion development team.",$.reset()}catch(q){W.textContent=q instanceof Error?q.message:"Could not save this. Please try again."}finally{H.disabled=!1}})}}var sD=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],WJ=(J)=>440*Math.pow(2,(J-69)/12);function mQ(J){let Q=69+12*Math.log2(J/440),Z=Math.round(Q);return{midi:Z,label:sD[(Z%12+12)%12]+(Math.floor(Z/12)-1),cents:Math.round((Q-Z)*100)}}function hY(J,Q){return Array.from({length:12},(Z,K)=>12*(J+1)+K).filter((Z)=>WJ(Z)>=109.999999&&WJ(Z)<=Q+0.000001)}class xY{seconds=0;last=null;update(J,Q){if(this.last!==null)this.seconds+=Math.max(0,(J-this.last)/1000);return this.last=Q?J:null,Math.floor(this.seconds)}}function gY(){let J=document.getElementById("usage-consent"),Q=document.getElementById("usage-status"),Z=new xY,K=null,$=!1,W=0,X=(L,E)=>{try{return L.getItem(E)}catch{return null}},Y=(L,E,D)=>{try{if(D===null)L.removeItem(E);else L.setItem(E,D)}catch{}},H,N;try{H=localStorage,N=sessionStorage}catch{}let q=(L,E)=>L?X(L,E):null,U=(L,E,D)=>{if(L)Y(L,E,D)};function G(){let L=Date.now(),E;try{let D=JSON.parse(q(H,"motion-usage-browser-v1")||"null");if(D&&L-D.created<7776000000&&/^[0-9a-f-]{36}$/.test(D.id))E=D.id}catch{}if(!E)E=crypto.randomUUID(),U(H,"motion-usage-browser-v1",JSON.stringify({id:E,created:L}));try{let D=JSON.parse(q(N,"motion-usage-session-v1")||"null");if(D?.visitor===E&&Number.isFinite(D.updated)&&L>=D.updated&&L-D.updated<1800000&&Number.isFinite(D.seconds)&&D.seconds>=0&&D.seconds<14400&&/^[0-9a-f-]{36}$/.test(D.session))K=D}catch{}K??={visitor:E,session:crypto.randomUUID(),seconds:0,updated:L},Z.seconds=K.seconds,Z.last=document.hidden?null:performance.now()}function F(L=!1){if(!$||!K)return;let E=Math.min(14400,Z.update(performance.now(),!document.hidden));K.seconds=E,K.updated=Date.now(),U(N,"motion-usage-session-v1",JSON.stringify(K));let D=JSON.stringify({visitor:K.visitor,session:K.session,seconds:E,consent:!0});if(L&&navigator.sendBeacon?.("https://kaizendsp.com/api/motion/usage",new Blob([D],{type:"application/json"})))return;fetch("https://kaizendsp.com/api/motion/usage",{method:"POST",headers:{"Content-Type":"application/json"},body:D,credentials:"omit",referrerPolicy:"no-referrer",keepalive:L}).then((R)=>{if($)Q.textContent=R.ok?"On · counting anonymous visits and visible time":"On · counts temporarily unavailable"}).catch(()=>{if($)Q.textContent="On · counts temporarily unavailable"})}function O(){$=!0,G(),Q.textContent="On · counting anonymous visits and visible time",F()}if(J.checked=q(H,"motion-usage-consent-v1")==="yes",J.checked)O();J.addEventListener("change",()=>{if(U(H,"motion-usage-consent-v1",J.checked?"yes":"no"),J.checked)O();else $=!1,K=null,Z.seconds=0,Z.last=null,U(H,"motion-usage-browser-v1",null),U(N,"motion-usage-session-v1",null),Q.textContent="Off · browser ID cleared on this device"}),setInterval(()=>{if($&&!document.hidden){if(Z.seconds>=14400)F(!0),K=null,U(N,"motion-usage-session-v1",null),G();F()}},15000),document.addEventListener("visibilitychange",()=>{if(!$)return;if(document.hidden)W=Date.now(),F(!0),Z.last=null;else{if(W&&Date.now()-W>1800000)K=null,U(N,"motion-usage-session-v1",null),G();Z.last=performance.now(),F()}}),addEventListener("pagehide",()=>{F(!0),Z.last=null}),addEventListener("pageshow",()=>{if($&&!document.hidden)Z.last=performance.now()}),addEventListener("storage",(L)=>{if(L.key==="motion-usage-consent-v1"&&L.newValue!=="yes")$=!1,K=null,Z.seconds=0,Z.last=null,J.checked=!1,U(N,"motion-usage-session-v1",null),Q.textContent="Off · disabled in another tab"})}class y${velocity=new Float64Array(3);level=0;lastSample=-1/0;lastRead=-1/0;speed=0;reset(){this.velocity.fill(0),this.level=this.speed=0,this.lastSample=this.lastRead=-1/0}update(J,Q,Z){let K=(Z-this.lastSample)/1000;if(K>0.2)this.velocity.fill(0);let $=Number.isFinite(K)&&K>0?Math.min(0.05,K):0.016666666666666666,W=Math.exp(-$/0.35);for(let Y=0;Y<3;Y++){let H=Number.isFinite(J[Y])?Math.max(-6,Math.min(6,J[Y]))*9.80665:0,N=Math.abs(H)>0.12?H-Math.sign(H)*0.12:0;this.velocity[Y]=this.velocity[Y]*W+N*$}let X=Math.hypot(...Q.map((Y)=>Number.isFinite(Y)?Math.max(-25,Math.min(25,Y)):0));this.speed=Math.max(Math.hypot(...this.velocity),Math.max(0,X-0.04)*0.12),this.lastSample=Z}value(J,Q){let Z=Number.isFinite(this.lastRead)?Math.max(0,Math.min(0.1,(J-this.lastRead)/1000)):0.016666666666666666;this.lastRead=J;let K=J-this.lastSample<150?this.speed:0,$=Math.sqrt(Math.max(0,Math.min(1,(K-0.012)*(0.5+Q)/0.45)));if(this.level+=($-this.level)*(1-Math.exp(-Z/($>this.level?0.018:0.065))),$===0&&this.level<0.003)this.level=0;return this.level}}var B0=(J)=>document.getElementById(J),j6=B0("field"),a0=j6.getContext("2d"),R7=B0("start"),l$=B0("touch-start"),uQ=B0("pause"),Z9=new j$,sQ=new v$,p$=["jaw","tbX","tbY","ttX","ttY","ttCurl","root","lipAp","lipProt","lipWidth","labiodental","velum","larynx","epilarynx","ventricular","lateral","dorsum"],$8,S9,v0=2,_9=!1,f$=!1,lY=!1,sJ=0,pY=0,F7=new Float32Array(512),lQ=0,h$,m$,cQ,cY,d$={...CQ},s9,l8,CJ,iJ,E7=[0,-1,0],n8=[0,0,0],nQ=[0,0,0],b6=[0,0],O8=0,BJ=0.5,y6=0.5,oQ=0,f6=0,XJ=0,mY=performance.now(),u$=0,x$=0,AJ=0.62,dQ=[0,-9.80665,0],dY=0,v6=0.5,O7=0.5,k8=!1,iQ=!0,nY=0,A8=360,z8=240,g$=!1,F8=null,sY=null,c$=0;var m9=null,c8=4,h6=!1,iY=311,aJ=new y$,aQ=0,rQ=-1/0,oY={frequency:311,vowel:0.5,breath:0.55};R7.disabled=l$.disabled=!0;var iD=(async()=>{await bY("./chimera.wasm"),h$=gQ("catalog");let J=h$.vowelTargets.male;cY=["u","a","i"].map((K)=>p$.map(($)=>J[K]?.artic[$]??h$.neutral[$]));let[Q,Z]=await Promise.all([fetch("./shaker-strokes.pcm"),fetch("./shaker-bank.json")]);if(!Q.ok||!Z.ok)throw new Error("Shaker recordings could not load.");if([m$,cQ]=await Promise.all([Q.arrayBuffer(),Z.json()]),m$.byteLength!==cQ.count*cQ.frames_per_stroke*2)throw new Error("Incomplete shaker recordings.");if(lY=!0,v0===2)eY();R7.disabled=l$.disabled=!1,B0("load-status").textContent="Ready. Start with your volume low."})().catch((J)=>{throw E8("The instruments could not load. Check your connection and reload."),B0("load-status").textContent=String(J),J});function E8(J){B0("notice").textContent=J}function P8(){B0("status").textContent=S9?_9?"SOUND ON":"SOUND PAUSED":"READY TO PLAY",B0("live-led").classList.toggle("on",_9),uQ.disabled=!S9,uQ.textContent=_9?"Ⅱ":"▶",uQ.setAttribute("aria-label",_9?"Pause sound":"Resume sound"),B0("sensor-status").textContent=!S9?"SOUND ON THIS DEVICE":O8&&performance.now()-O8<2000?"MOTION LIVE · PHONE SOUND":k8?"WAITING FOR MOTION":"TOUCH / MOUSE · PHONE SOUND"}function aY(){let{DeviceMotionEvent:J,DeviceOrientationEvent:Q}=window;if(!J)return Promise.resolve(!1);let Z=[];if(typeof J.requestPermission==="function")Z.push(J.requestPermission());if(typeof Q?.requestPermission==="function")Z.push(Q.requestPermission());return Z.length?Promise.all(Z).then((K)=>K.every(($)=>$==="granted")):Promise.resolve(!0)}async function tQ(J){if(f$)return;f$=!0,R7.textContent="Opening the instruments…";try{if("audioSession"in navigator)try{navigator.audioSession.type="playback"}catch{}$8??=new AudioContext({latencyHint:"interactive"});let Q=$8.resume(),Z=J?aY().catch(()=>!1):Promise.resolve(!1);await Promise.all([Q,iD]),k8=await Z,aJ.reset(),await $8.audioWorklet.addModule("./audio-worklet.js"),S9=new AudioWorkletNode($8,"motion-audio",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{module:yY(),pcm:m$,shakerBank:cQ,vowels:cY}}),S9.onprocessorerror=()=>{_9=!1,P8(),E8("The audio engine stopped. Reload to restart it.")},S9.port.onmessage=($)=>{if(Number.isFinite($.data.frequency)&&$.data.frequency>0)iY=$.data.frequency;if($.data.type==="scope")F7=$.data.values,lQ=$.data.writeIndex;if($.data.type==="artic")for(let W=0;W<p$.length;W++)d$[p$[W]]=$.data.values[W];if($.data.type==="grains"){Z9.count=$.data.count;let W=$.data.positions,X=performance.now()/1000;for(let Y=0;Y<Z9.count;Y++){let H=Z9.grains[Y];H.x=W[Y*3],H.y=W[Y*3+1],H.z=W[Y*3+2]}for(let Y=0;Y<6;Y++){let H=Z9.pulses[Y],N=Y*4;H.x=$.data.impacts[N],H.y=$.data.impacts[N+1],H.t=X-$.data.impacts[N+2],H.strength=$.data.impacts[N+3]}}if($.data.type==="error")_9=!1,P8(),E8("The audio engine stopped. Reload to restart it.")};let K=$8.createGain();if(K.gain.value=0.8,S9.connect(K),K.connect($8.destination),QH(),_9=!0,B0("welcome").hidden=!0,B0("gesture-caption").hidden=!1,k8)iQ=!0,sQ.x=null,E8("Hold comfortably and tap CENTRE. Move to breathe; faster movement gives stronger excitation. Stop to fall silent.");else E8(J?"Motion is unavailable or permission was declined. Drag to play; try opening this link in Safari or Chrome.":"Drag across the display to play. On a phone, tap “Enable motion” below to use its sensors.");P8(),W8(!0)}catch(Q){E8(`Could not start sound: ${Q instanceof Error?Q.message:String(Q)}. Try Safari or Chrome.`),R7.textContent="Try enabling sound again"}finally{f$=!1}}R7.addEventListener("click",()=>tQ(!0));l$.addEventListener("click",()=>tQ(!1));uQ.addEventListener("click",async()=>{if(!$8)return;await $8.resume(),_9=!_9,P8(),W8(!0)});B0("centre").addEventListener("click",()=>{aJ.reset(),m9=null,h6=!1,oJ(),sQ.center(E7),sY=c$,BJ=y6=0.5,v6=O7=0.5,E8("Centred on this grip.")});B0("test").addEventListener("click",async()=>{if(m9=null,oJ(),!S9){if(await tQ(!1),!S9)return}if($8?.state!=="running")await $8?.resume();_9=!0,BJ=0.5,y6=0.5,oQ=performance.now()+1000,f6=performance.now()+220,nY=performance.now(),P8(),W8(!0)});B0("sensitivity").addEventListener("input",(J)=>{AJ=Number(J.target.value)/100,B0("sensitivity-output").textContent=String(Math.round(AJ*100)).padStart(2,"0")});document.querySelectorAll("[data-mode]").forEach((J)=>J.addEventListener("click",()=>rY(Number(J.dataset.mode))));function rY(J){if(v0=J,aJ.reset(),aQ=0,rQ=-1/0,m9!==null&&WJ(m9)>(v0===2?880:1760))m9=null;if(XJ=0,f6=0,Z9.reset(Z9.count),document.querySelectorAll("[data-mode]").forEach((Q)=>{let Z=Number(Q.dataset.mode)===v0;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),B0("excitation-controls").hidden=v0!==2,B0("note-panel").hidden=v0===0,JZ(),B0("chamber").hidden=v0!==0,B0("touch-pad").hidden=v0===0,B0("synth-bank").hidden=v0!==1,B0("touch-pad").setAttribute("aria-valuemax",v0===2?"880":"1760"),B0("screen-name").textContent=["LOOSE GRAIN CHAMBER","CONTINUOUS THEREMIN","LIVE VOCAL ANATOMY"][v0],B0("screen-detail").textContent=["XYZ","110—1760 HZ","CHIMERA"][v0],B0("gesture-caption").textContent=v0===0?"SHAKE IN ANY DIRECTION · DRAG TO RATTLE":v0===1?"SIDE TILT: PITCH · FORWARD / BACK: VOWEL":"MOVE TO BREATHE · TILT FOR PITCH",B0("description").innerHTML=["A handful of grains.<br>A chamber in your hand.<br>Every movement has a texture.","A continuous voice.<br>No keys. No steps.<br>Just the shape of a gesture.","A living vocal tract.<br>Tongue, lips and breath.<br>Play the anatomy of a voice."][v0],B0("voice-credit").textContent=v0===2?"CHIMERA · JAMESON HODGE":"PLAYED BY MOVEMENT",B0("x-label").textContent=v0===0?"X / Y":"PITCH",B0("y-label").textContent=v0===0?"ENERGY":"VOWEL",B0("z-label").textContent=v0===0?"Z":v0===2?"EXCITATION":"BREATH Z",j6.hidden=v0===2,B0("head").hidden=v0!==2,v0===2&&lY)eY();if(v0===1)tY();P8(),W8(!0)}function tY(){let J=b$[sJ];document.querySelectorAll("[data-synth]").forEach((Q)=>{let Z=Number(Q.dataset.synth)===sJ;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),B0("screen-name").textContent=J.name.toUpperCase()+" / CONTINUOUS SYNTH",B0("y-label").textContent=J.tag,B0("description").textContent=J.description,B0("gesture-caption").textContent="SIDE TILT: PITCH · FORWARD / BACK: "+J.tag,B0("touch-pad").querySelector("span:last-child").textContent=sJ===0?"LOW ↔ HIGH · OO ↕ EE":"X: PITCH · Y: COLOUR"}document.querySelectorAll("[data-synth]").forEach((J)=>J.addEventListener("click",()=>{sJ=Number(J.dataset.synth),tY(),W8(!0)}));function eY(){if(l8)return;try{let J=B0("head");l8=new X$({alpha:!0,antialias:!0,powerPreference:"low-power"}),l8.setPixelRatio(Math.min(devicePixelRatio,1.5)),l8.setClearColor(0,0),J.appendChild(l8.domElement),s9=new T$,s9.centred=!0;let Q=gQ("model",{body:{female:0,child:0},sampleRate:$8?.sampleRate??48000}),Z=Q.body.scale,K=Q.body.pharynx;iJ={bodyParams:Q.body,tract:{scale:Z,P:(W,X)=>({x:(W>0.5?0.5+(W-0.5)*0.86:W)*Z,y:(X<7?7-(7-X)*K:X)*Z}),unP:(W,X)=>({x:W/Z>0.5?0.5+(W/Z-0.5)/0.86:W/Z,y:X/Z<7?7-(7-X/Z)/K:X/Z})},frame:(W)=>gQ("frame",{model:Q.model,artic:W})},eQ();let $=s9.poses(iJ);s9.camera.position.copy($.home),s9.camera.lookAt($.target),CJ=new N$(s9.camera,l8.domElement),CJ.target.copy($.target),CJ.enablePan=CJ.enableZoom=!1,CJ.update()}catch(J){E8("The 3D view is unavailable in this browser. The voice can still play."),console.error(J)}}function eQ(){let J=j6.getBoundingClientRect(),Q=B0("glass");A8=Q.clientWidth,z8=Q.clientHeight-71;let Z=Math.min(devicePixelRatio,2);if(j6.width=Math.round(A8*Z),j6.height=Math.round(z8*Z),a0.setTransform(Z,0,0,Z,0,0),l8&&s9){if(l8.setSize(A8,z8),s9.resize(A8,z8),iJ&&CJ){let K=s9.poses(iJ);s9.camera.position.copy(K.home),CJ.target.copy(K.target),CJ.update()}}}addEventListener("resize",eQ);new ResizeObserver(eQ).observe(B0("glass"));eQ();addEventListener("devicemotion",(J)=>{if(!k8)return;let{acceleration:Q,accelerationIncludingGravity:Z}=J;if(!Z||Z.x==null||Z.y==null||Z.z==null)return;let K=performance.now();O8=K;let $=Math.min(0.05,Math.max(0.005,(K-dY)/1000));dY=K;let W=[Z.x,Z.y,Z.z];for(let Y=0;Y<3;Y++)dQ[Y]+=(W[Y]-dQ[Y])*(1-Math.exp(-$/0.22));if(Q?.x!=null&&Q?.y!=null&&Q?.z!=null)n8=[Q.x,Q.y,Q.z].map((Y)=>Y/9.80665),E7=[Z.x-Q.x,Z.y-Q.y,Z.z-Q.z].map((Y)=>Y/9.80665);else n8=W.map((Y,H)=>(Y-dQ[H])/9.80665),E7=dQ.map((Y)=>Y/9.80665);if(nQ=[J.rotationRate?.alpha??0,J.rotationRate?.beta??0,J.rotationRate?.gamma??0].map((Y)=>Y*Math.PI/180),iQ)sQ.center(E7),sY=c$,iQ=!1;b6=sQ.project(E7),aJ.update(n8,nQ,K);let X=Math.max(0,Math.hypot(...n8)-0.035)*1.8+Math.max(0,Math.hypot(...nQ)-0.15)*0.08;XJ=Math.max(XJ,I9(X*(0.5+AJ),0,1)),W8(!1)},{passive:!0});addEventListener("deviceorientation",(J)=>{if(J.gamma!=null)c$=J.gamma},{passive:!0});function JH(J=performance.now()){let Q=J<oQ||!k8||J-O8>1500,Z=Q?BJ:I9(0.5+Math.asin(I9(b6[0],-1,1))/Math.PI*(0.5+AJ),0,1),K=Q?y6:I9(0.5-b6[1]*(0.7+AJ),0,1);return v6+=(Z-v6)*0.35,O7+=(K-O7)*0.35,{frequency:m9===null?110*Math.pow(2,v6*(v0===2?3:4)):Math.min(v0===2?880:1760,WJ(m9)),vowel:O7,breath:I9(0.55-n8[2]*0.65,0.05,1),excitation:v0===2?k8&&O8>0&&J-O8<1500?aJ.value(J,AJ):Math.max(J<f6?0.65:0,aQ*Math.exp(-Math.max(0,J-rQ)/85)):void 0}}function W8(J){if(!S9)return;let Q=performance.now();if(!J&&Q-u$<9)return;u$=Q;let Z=JH(Q);oY=Z,S9.port.postMessage({type:"state",mode:v0,voice:sJ,enabled:_9,...Z,acceleration:n8.map((K)=>K*(0.45+AJ*1.55)),tilt:b6,pulse:Q<f6})}function uY(J){m9=null,oJ();let Q=J.currentTarget,Z=Q.getBoundingClientRect(),K=I9((J.clientX-Z.left)/Z.width,0,1),$=I9((J.clientY-Z.top)/Z.height,0,1),W=performance.now();if(BJ=K,y6=1-$,oQ=W+2000,nY=W,v0===2&&(!k8||!O8||W-O8>1500)){let Y=F8?Math.max(8,W-F8.t)/1000:0;aQ=F8?I9(Math.hypot(K-F8.x,$-F8.y)/Y*0.4,0,1):0.45,rQ=W}if(F8&&v0===0){let Y=Math.max(8,W-F8.t),H=(K-F8.x)/Y*1000,N=($-F8.y)/Y*1000;XJ=Math.max(XJ,I9(Math.hypot(H,N)*0.13,0,1)),n8=[I9(H*0.3,-2,2),I9(-N*0.3,-2,2),0]}F8={x:K,y:$,t:W};let X=B0("touch-pad").querySelector("i");X.style.left=`${K*100}%`,X.style.top=`${$*100}%`,B0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,K*(v0===2?3:4))))),W8(!0)}for(let J of[j6,B0("touch-pad")]){J.addEventListener("pointerdown",(Z)=>{if(!S9)return;g$=!0,F8=null,J.setPointerCapture(Z.pointerId),uY(Z)}),J.addEventListener("pointermove",(Z)=>{if(g$)uY(Z)});let Q=()=>{g$=!1,F8=null};J.addEventListener("pointerup",Q),J.addEventListener("pointercancel",Q)}B0("touch-pad").addEventListener("keydown",(J)=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(J.key))J.preventDefault(),m9=null,oJ(),BJ=I9(BJ+(J.key==="ArrowRight"?0.025:J.key==="ArrowLeft"?-0.025:0),0,1),y6=I9(y6+(J.key==="ArrowUp"?0.05:J.key==="ArrowDown"?-0.05:0),0,1),oQ=performance.now()+3000,B0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,BJ*(v0===2?3:4))))),W8(!0)});function QH(){let J=Number(B0("size").value)/1000;Z9.shape=B0("shape").value,Z9.w=J,Z9.h=Z9.shape==="circle"?J:Z9.shape==="oval"?J*0.62:J*1.12,Z9.radius=Number(B0("grain-size").value)/2000,Z9.reset(Number(B0("fill").value)),S9?.port.postMessage({type:"geometry",shape:Z9.shape,width:Z9.w,height:Z9.h,depth:Z9.d,radius:Z9.radius,count:Z9.count,material:Number(B0("material").value)})}for(let J of["shape","fill","size","grain-size","material"])B0(J).addEventListener("input",QH);function oD(J,Q){if(a0.clearRect(0,0,A8,z8),a0.save(),a0.translate(A8/2,z8/2),v0===0){let Z=Math.min((A8-70)/Z9.w,(z8-48)/Z9.h),K=Z9.w*Z/2,$=Z9.h*Z/2;if(a0.lineWidth=1,a0.strokeStyle="#8b9b6e77",a0.beginPath(),Z9.shape==="box")a0.roundRect(-K,-$,K*2,$*2,12);else a0.ellipse(0,0,K,$,0,0,Math.PI*2);a0.stroke();for(let X of Z9.pulses){let Y=J/1000-X.t;if(Y<0||Y>0.35)continue;a0.strokeStyle=`rgba(233,180,94,${(1-Y/0.35)*0.5})`,a0.lineWidth=1,a0.beginPath(),a0.arc(X.x*Z,-X.y*Z,3+Y*90,0,Math.PI*2),a0.stroke()}let W=Z9.grains.slice(0,Z9.count).sort((X,Y)=>X.z-Y.z);for(let X of W){let Y=1+X.z*4;a0.fillStyle=`rgba(216,202,150,${0.4+(X.z/Z9.d+0.5)*0.5})`,a0.beginPath(),a0.arc(X.x*Z,-X.y*Z,Math.max(1.5,Z9.radius*Z)*Y,0,Math.PI*2),a0.fill()}}else{a0.strokeStyle="#70876233",a0.lineWidth=1;for(let H=-2;H<=2;H++)a0.beginPath(),a0.moveTo(-A8*0.4,H*z8*0.14),a0.lineTo(A8*0.4,H*z8*0.14),a0.stroke();let Z=JH(J),K=_9?1:0.2;a0.strokeStyle=`rgba(209,195,145,${K})`,a0.lineWidth=1.4,a0.beginPath();let $=0,W=0.1;for(let H=0;H<512;H++)W=Math.max(W,Math.abs(F7[H]));for(let H=1;H<128;H++)if(F7[lQ+H-1&511]<=0&&F7[lQ+H&511]>0){$=H;break}for(let H=0;H<384;H++){let N=(H/383-0.5)*A8*0.84,q=-F7[lQ+$+H&511]/Math.max(0.2,W)*z8*0.25;if(H===0)a0.moveTo(N,q);else a0.lineTo(N,q)}a0.stroke();let X=(v6-0.5)*A8*0.7,Y=(0.5-O7)*z8*0.65;a0.fillStyle="#ead9aa",a0.beginPath(),a0.arc(X,Y,4,0,Math.PI*2),a0.fill()}a0.restore()}function ZH(J){requestAnimationFrame(ZH);let Q=Math.min(0.05,(J-mY)/1000);if(mY=J,XJ*=Math.exp(-Q/0.06),XJ<0.004)XJ=0;if(!O8||J-O8>500)n8=n8.map((K)=>K*Math.exp(-Q/0.05)),nQ=[0,0,0];let Z=Math.max(XJ,J<f6?0.65:0);if(S9&&J-pY>40)pY=J,S9.port.postMessage({type:"snapshot"});if(v0===0||v0===1)oD(J,Q);else if(s9&&l8&&iJ&&J-x$>40){let K=Math.min(0.08,(J-x$)/1000);x$=J,s9.face.update(null,K),s9.update(iJ,iJ.frame(d$),d$,null,{pressure:!1,particles:!1,calipers:!1,grid:!1},K),l8.render(s9.scene,s9.camera)}if(J-u$>30)W8(!1);if(Math.floor(J/100)!==Math.floor((J-Q*1000)/100)){P8();let K=oY,$=_9?iY:K.frequency,W=mQ($),X=Math.max(2,Math.min(v0===2?5:6,Math.floor(W.midi/12)-1));if(v0!==0&&_9&&m9===null&&!h6&&X!==c8)c8=X,JZ();if(B0("note-value").textContent=v0===0?"":`${W.label} ${W.cents>0?"+":""}${W.cents}¢`,document.querySelectorAll("[data-note]").forEach((Y)=>{let H=Number(Y.dataset.note)===W.midi;Y.classList.toggle("sounding",_9&&H),Y.setAttribute("aria-current",_9&&H?"true":"false")}),B0("xy-value").textContent=v0===0?`${Math.round(b6[0]*99).toString().padStart(2,"0")} / ${Math.round(b6[1]*99).toString().padStart(2,"0")}`:`${Math.round($)} HZ`,B0("energy-value").textContent=v0===0?String(Math.round(Z*127)).padStart(3,"0"):v0===1&&sJ!==0?String(Math.round(K.vowel*127)).padStart(3,"0"):["OO","OO–AH","AH","AH–EE","EE"][Math.min(4,Math.floor(K.vowel*5))],B0("z-value").textContent=String(Math.round((v0===0?Math.abs(n8[2]):v0===2?K.excitation??0:K.breath)*100)).padStart(3,"0"),v0===2){let Y=K.excitation??0;B0("excitation-meter").value=Y,B0("excitation-output").textContent=`${Math.round(Y*100)}%`}}}requestAnimationFrame(ZH);document.addEventListener("visibilitychange",()=>{if(document.hidden&&S9)aJ.reset(),aQ=0,rQ=-1/0,_9=!1,W8(!0),P8(),$8?.suspend(),E8("Sound paused while you were away. Tap ▶ to resume.")});B0("share").addEventListener("click",async()=>{try{let J=location.origin+location.pathname;if(navigator.share)await navigator.share({title:"Kaizen Motion",text:"Your phone is an instrument. Shake, tilt, play.",url:J});else await navigator.clipboard.writeText(J),E8("Link copied. Share it anywhere.")}catch(J){if(J.name!=="AbortError")E8("Copy this page’s address to share Motion.")}});var n$=document.createElement("button");n$.textContent="Enable motion";n$.addEventListener("click",async()=>{k8=await aY().catch(()=>!1),aJ.reset(),iQ=!0,E8(k8?"Motion enabled. Hold comfortably and tap CENTRE.":"Motion permission is unavailable here. Open in Safari/Chrome or keep playing with touch."),P8()});document.querySelector("footer nav")?.appendChild(n$);function oJ(){B0("follow-motion").disabled=m9===null&&!h6,B0("note-help").textContent=m9===null?"Tilt or drag freely. Tap a note to hold its pitch.":`Holding ${mQ(WJ(m9)).label}. Move to breathe. “Follow motion” releases pitch.`,document.querySelectorAll("[data-note]").forEach((J)=>J.setAttribute("aria-pressed",String(Number(J.dataset.note)===m9)))}function JZ(){let J=v0===2?880:1760;c8=Math.max(2,Math.min(v0===2?5:6,c8));let Q=B0("note-grid");Q.replaceChildren();for(let Z of hY(c8,J)){let K=document.createElement("button");K.type="button",K.dataset.note=String(Z),K.textContent=mQ(WJ(Z)).label,K.setAttribute("aria-label",`Play ${K.textContent}, ${WJ(Z).toFixed(1)} hertz`),K.addEventListener("click",async()=>{if(!S9){if(await tQ(k8),!S9)return}else await $8?.resume();if(m9=Z,!k8||!O8||performance.now()-O8>1500)f6=performance.now()+220;_9=!0,v6=BJ=Math.log2(WJ(Z)/110)/(v0===2?3:4),oJ(),P8(),W8(!0)}),Q.appendChild(K)}B0("note-octave").textContent=`OCTAVE ${c8}`,B0("octave-down").disabled=c8===2,B0("octave-up").disabled=c8===(v0===2?5:6),oJ()}B0("octave-down").addEventListener("click",()=>{h6=!0,c8--,JZ()});B0("octave-up").addEventListener("click",()=>{h6=!0,c8++,JZ()});B0("follow-motion").addEventListener("click",()=>{m9=null,h6=!1,oJ(),W8(!0)});gY();rY(2);fY(()=>({instrument:["Shaker","Synth","CHIMERA"][v0],voice:v0===1?b$[sJ].name:v0===2?"CHIMERA":"Shaker",sensitivity:Math.round(AJ*100),shape:Z9.shape,grainCount:Z9.count}),()=>{_9=!1,W8(!0),P8()});
