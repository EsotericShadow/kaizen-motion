var BW="186",EJ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},DJ={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AW=0,CZ=1,zW=2;var l6=1,PW=2,F6=3,O6=0,a9=1,T8=2,w8=0,c6=1,BZ=2,AZ=3,zZ=4,g7=5;var R6=100,kW=101,_W=102,TW=103,p7=104,wW=200,SW=201,jW=202,vW=203,yW=204,bW=205,fW=206,hW=207,xW=208,gW=209,pW=210,mW=211,dW=212,uW=213,lW=214,cW=0,nW=1,sW=2,PZ=3,iW=4,oW=5,aW=6,rW=7,tW=0,eW=1,JX=2,L8=0,kZ=1,_Z=2,TZ=3,wZ=4,SZ=5,jZ=6,vZ=7;var M6=301,kJ=302,m7=303,d7=304,n6=306,QX=1000,u7=1001,ZX=1002,FJ=1003,KX=1004;var s6=1005;var r9=1006,l7=1007;var _J=1008;var I8=1009,$X=1010,WX=1011,i6=1012,yZ=1013,OJ=1014,r8=1015,S8=1016,bZ=1017,fZ=1018,L6=1020,XX=35902,YX=35899,HX=1021,UX=1022,j8=1023,TJ=1026,wJ=1027,NX=1028,hZ=1029,SJ=1030,xZ=1031;var gZ=1033,c7=33776,n7=33777,s7=33778,i7=33779,pZ=35840,mZ=35841,dZ=35842,uZ=35843,lZ=36196,cZ=37492,nZ=37496,sZ=37488,iZ=37489,o7=37490,oZ=37491,aZ=37808,rZ=37809,tZ=37810,eZ=37811,JK=37812,QK=37813,ZK=37814,KK=37815,$K=37816,WK=37817,XK=37818,YK=37819,HK=37820,UK=37821,NK=36492,GK=36494,qK=36495,EK=36283,DK=36284,a7=36285,FK=36286;var OK=0,GX=1,jJ="",qX="srgb",RK="srgb-linear",MK="linear",q9="srgb";var EX=512,DX=513,FX=514,r7=515,OX=516,RX=517,t7=518,MX=519;var e7=35048;var LK="300 es",IK=2000;function YH(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function HH(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function d6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function LX(){let J=d6("canvas");return J.style.display="block",J}var QW={},E6=null;function u6(...J){let Q="THREE."+J.shift();if(E6)E6("log",Q,...J);else console.log(Q,...J)}function IX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let Z=J[1];if(Z&&Z.isStackTrace)J[0]+=" "+Z.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function v0(...J){J=IX(J);let Q="THREE."+J.shift();if(E6)E6("warn",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.warn(Z.getError(Q));else console.warn(Q,...J)}}function f0(...J){J=IX(J);let Q="THREE."+J.shift();if(E6)E6("error",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.error(Z.getError(Q));else console.error(Q,...J)}}function PJ(...J){let Q=J.join(" ");if(Q in QW)return;QW[Q]=!0,v0(...J)}function VX(J,Q,Z){return new Promise(function(K,$){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:$();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Z);break;default:K()}}setTimeout(W,Z)})}var CX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class v8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let K=Z[J];if(K!==void 0){let $=K.indexOf(Q);if($!==-1)K.splice($,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let K=Z.slice(0);for(let $=0,W=K.length;$<W;$++)K[$].call(this,J);J.target=null}}}var f9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ZW=1234567,p6=Math.PI/180,D6=180/Math.PI;function o8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(f9[J&255]+f9[J>>8&255]+f9[J>>16&255]+f9[J>>24&255]+"-"+f9[Q&255]+f9[Q>>8&255]+"-"+f9[Q>>16&15|64]+f9[Q>>24&255]+"-"+f9[Z&63|128]+f9[Z>>8&255]+"-"+f9[Z>>16&255]+f9[Z>>24&255]+f9[K&255]+f9[K>>8&255]+f9[K>>16&255]+f9[K>>24&255]).toLowerCase()}function p0(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function VK(J,Q){return(J%Q+Q)%Q}function UH(J,Q,Z,K,$){return K+(J-Q)*($-K)/(Z-Q)}function NH(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function m6(J,Q,Z){return(1-Z)*J+Z*Q}function GH(J,Q,Z,K){return m6(J,Q,1-Math.exp(-Z*K))}function qH(J,Q=1){return Q-Math.abs(VK(J,Q*2)-Q)}function EH(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function DH(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function FH(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function OH(J,Q){return J+Math.random()*(Q-J)}function RH(J){return J*(0.5-Math.random())}function MH(J){if(J!==void 0)ZW=J;let Q=ZW+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function LH(J){return J*p6}function IH(J){return J*D6}function VH(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function CH(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function BH(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function AH(J,Q,Z,K,$){let{cos:W,sin:X}=Math,Y=W(Z/2),H=X(Z/2),N=W((Q+K)/2),q=X((Q+K)/2),U=W((Q-K)/2),G=X((Q-K)/2),D=W((K-Q)/2),O=X((K-Q)/2);switch($){case"XYX":J.set(Y*q,H*U,H*G,Y*N);break;case"YZY":J.set(H*G,Y*q,H*U,Y*N);break;case"ZXZ":J.set(H*U,H*G,Y*q,Y*N);break;case"XZX":J.set(Y*q,H*O,H*D,Y*N);break;case"YXY":J.set(H*D,Y*q,H*O,Y*N);break;case"ZYZ":J.set(H*O,H*D,Y*q,Y*N);break;default:v0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+$)}}function M8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function W9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var o6={DEG2RAD:p6,RAD2DEG:D6,generateUUID:o8,clamp:p0,euclideanModulo:VK,mapLinear:UH,inverseLerp:NH,lerp:m6,damp:GH,pingpong:qH,smoothstep:EH,smootherstep:DH,randInt:FH,randFloat:OH,randFloatSpread:RH,seededRandom:MH,degToRad:LH,radToDeg:IH,isPowerOfTwo:VH,ceilPowerOfTwo:CH,floorPowerOfTwo:BH,setQuaternionFromProperEuler:AH,normalize:W9,denormalize:M8};class x0{static{x0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*Z+K[6],this.y=K[1]*Q+K[4]*Z+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(p0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=this.x-J.x,W=this.y-J.y;return this.x=$*Z-W*K+J.x,this.y=$*K+W*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class t9{constructor(J=0,Q=0,Z=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=K}static slerpFlat(J,Q,Z,K,$,W,X){let Y=Z[K+0],H=Z[K+1],N=Z[K+2],q=Z[K+3],U=$[W+0],G=$[W+1],D=$[W+2],O=$[W+3];if(q!==O||Y!==U||H!==G||N!==D){let L=Y*U+H*G+N*D+q*O;if(L<0)U=-U,G=-G,D=-D,O=-O,L=-L;let F=1-X;if(L<0.9995){let E=Math.acos(L),R=Math.sin(E);F=Math.sin(F*E)/R,X=Math.sin(X*E)/R,Y=Y*F+U*X,H=H*F+G*X,N=N*F+D*X,q=q*F+O*X}else{Y=Y*F+U*X,H=H*F+G*X,N=N*F+D*X,q=q*F+O*X;let E=1/Math.sqrt(Y*Y+H*H+N*N+q*q);Y*=E,H*=E,N*=E,q*=E}}J[Q]=Y,J[Q+1]=H,J[Q+2]=N,J[Q+3]=q}static multiplyQuaternionsFlat(J,Q,Z,K,$,W){let X=Z[K],Y=Z[K+1],H=Z[K+2],N=Z[K+3],q=$[W],U=$[W+1],G=$[W+2],D=$[W+3];return J[Q]=X*D+N*q+Y*G-H*U,J[Q+1]=Y*D+N*U+H*q-X*G,J[Q+2]=H*D+N*G+X*U-Y*q,J[Q+3]=N*D-X*q-Y*U-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,K){return this._x=J,this._y=Q,this._z=Z,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:K,_z:$,_order:W}=J,X=Math.cos,Y=Math.sin,H=X(Z/2),N=X(K/2),q=X($/2),U=Y(Z/2),G=Y(K/2),D=Y($/2);switch(W){case"XYZ":this._x=U*N*q+H*G*D,this._y=H*G*q-U*N*D,this._z=H*N*D+U*G*q,this._w=H*N*q-U*G*D;break;case"YXZ":this._x=U*N*q+H*G*D,this._y=H*G*q-U*N*D,this._z=H*N*D-U*G*q,this._w=H*N*q+U*G*D;break;case"ZXY":this._x=U*N*q-H*G*D,this._y=H*G*q+U*N*D,this._z=H*N*D+U*G*q,this._w=H*N*q-U*G*D;break;case"ZYX":this._x=U*N*q-H*G*D,this._y=H*G*q+U*N*D,this._z=H*N*D-U*G*q,this._w=H*N*q+U*G*D;break;case"YZX":this._x=U*N*q+H*G*D,this._y=H*G*q+U*N*D,this._z=H*N*D-U*G*q,this._w=H*N*q-U*G*D;break;case"XZY":this._x=U*N*q-H*G*D,this._y=H*G*q-U*N*D,this._z=H*N*D+U*G*q,this._w=H*N*q+U*G*D;break;default:v0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,K=Math.sin(Z);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],K=Q[4],$=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],N=Q[6],q=Q[10],U=Z+X+q;if(U>0){let G=0.5/Math.sqrt(U+1);this._w=0.25/G,this._x=(N-Y)*G,this._y=($-H)*G,this._z=(W-K)*G}else if(Z>X&&Z>q){let G=2*Math.sqrt(1+Z-X-q);this._w=(N-Y)/G,this._x=0.25*G,this._y=(K+W)/G,this._z=($+H)/G}else if(X>q){let G=2*Math.sqrt(1+X-Z-q);this._w=($-H)/G,this._x=(K+W)/G,this._y=0.25*G,this._z=(Y+N)/G}else{let G=2*Math.sqrt(1+q-Z-X);this._w=(W-K)/G,this._x=($+H)/G,this._y=(Y+N)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(p0(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let K=Math.min(1,Q/Z);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,N=Q._w;return this._x=Z*N+W*X+K*H-$*Y,this._y=K*N+W*Y+$*X-Z*H,this._z=$*N+W*H+Z*Y-K*X,this._w=W*N-Z*X-K*Y-$*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=this.dot(J);if(X<0)Z=-Z,K=-K,$=-$,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),N=Math.sin(H);Y=Math.sin(Y*H)/N,Q=Math.sin(Q*H)/N,this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),K=Math.sqrt(1-Z),$=Math.sqrt(Z);return this.set(K*Math.sin(J),K*Math.cos(J),$*Math.sin(Q),$*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{x.prototype.isVector3=!0}constructor(J=0,Q=0,Z=0){this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(KW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(KW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6]*K,this.y=$[1]*Q+$[4]*Z+$[7]*K,this.z=$[2]*Q+$[5]*Z+$[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements,W=1/($[3]*Q+$[7]*Z+$[11]*K+$[15]);return this.x=($[0]*Q+$[4]*Z+$[8]*K+$[12])*W,this.y=($[1]*Q+$[5]*Z+$[9]*K+$[13])*W,this.z=($[2]*Q+$[6]*Z+$[10]*K+$[14])*W,this}applyQuaternion(J){let Q=this.x,Z=this.y,K=this.z,$=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*K-X*Z),N=2*(X*Q-$*K),q=2*($*Z-W*Q);return this.x=Q+Y*H+W*q-X*N,this.y=Z+Y*N+X*H-$*q,this.z=K+Y*q+$*N-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[4]*Z+$[8]*K,this.y=$[1]*Q+$[5]*Z+$[9]*K,this.z=$[2]*Q+$[6]*Z+$[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:K,z:$}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-$*X,this.y=$*W-Z*Y,this.z=Z*X-K*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return QZ.copy(this).projectOnVector(J),this.sub(QZ)}reflect(J){return this.sub(QZ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(p0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,K=this.z-J.z;return Q*Q+Z*Z+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let K=Math.sin(Q)*J;return this.x=K*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=K*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var QZ=new x,KW=new t9;class g0{static{g0.prototype.isMatrix3=!0}constructor(J,Q,Z,K,$,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H)}set(J,Q,Z,K,$,W,X,Y,H){let N=this.elements;return N[0]=J,N[1]=K,N[2]=X,N[3]=Q,N[4]=$,N[5]=Y,N[6]=Z,N[7]=W,N[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[3],Y=Z[6],H=Z[1],N=Z[4],q=Z[7],U=Z[2],G=Z[5],D=Z[8],O=K[0],L=K[3],F=K[6],E=K[1],R=K[4],k=K[7],V=K[2],A=K[5],P=K[8];return $[0]=W*O+X*E+Y*V,$[3]=W*L+X*R+Y*A,$[6]=W*F+X*k+Y*P,$[1]=H*O+N*E+q*V,$[4]=H*L+N*R+q*A,$[7]=H*F+N*k+q*P,$[2]=U*O+G*E+D*V,$[5]=U*L+G*R+D*A,$[8]=U*F+G*k+D*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8];return Q*W*N-Q*X*H-Z*$*N+Z*X*Y+K*$*H-K*W*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=N*W-X*H,U=X*Y-N*$,G=H*$-W*Y,D=Q*q+Z*U+K*G;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/D;return J[0]=q*O,J[1]=(K*H-N*Z)*O,J[2]=(X*Z-K*W)*O,J[3]=U*O,J[4]=(N*Q-K*Y)*O,J[5]=(K*$-X*Q)*O,J[6]=G*O,J[7]=(Z*Y-H*Q)*O,J[8]=(W*Q-Z*$)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,K,$,W,X){let Y=Math.cos($),H=Math.sin($);return this.set(Z*Y,Z*H,-Z*(Y*W+H*X)+W+J,-K*H,K*Y,-K*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return PJ("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ZZ.makeScale(J,Q)),this}rotate(J){return PJ("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ZZ.makeRotation(-J)),this}translate(J,Q){return PJ("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ZZ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<9;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var ZZ=new g0,$W=new g0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),WW=new g0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function zH(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function($,W,X){if(this.enabled===!1||W===X||!W||!X)return $;if(this.spaces[W].transfer==="srgb")$.r=a8($.r),$.g=a8($.g),$.b=a8($.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)$.applyMatrix3(this.spaces[W].toXYZ),$.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")$.r=q6($.r),$.g=q6($.g),$.b=q6($.b);return $},workingToColorSpace:function($,W){return this.convert($,this.workingColorSpace,W)},colorSpaceToWorking:function($,W){return this.convert($,W,this.workingColorSpace)},getPrimaries:function($){return this.spaces[$].primaries},getTransfer:function($){if($==="")return"linear";return this.spaces[$].transfer},getToneMappingMode:function($){return this.spaces[$].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function($,W=this.workingColorSpace){return $.fromArray(this.spaces[W].luminanceCoefficients)},define:function($){Object.assign(this.spaces,$)},_getMatrix:function($,W,X){return $.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function($){return this.spaces[$].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function($=this.workingColorSpace){return this.spaces[$].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function($,W){return PJ("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace($,W)},toWorkingColorSpace:function($,W){return PJ("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking($,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:$W,fromXYZ:WW,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:$W,fromXYZ:WW,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var o0=zH();function a8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function q6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var rJ;class CK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(rJ===void 0)rJ=d6("canvas");rJ.width=J.width,rJ.height=J.height;let K=rJ.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);Z=rJ}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=d6("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let K=Z.getImageData(0,0,J.width,J.height),$=K.data;for(let W=0;W<$.length;W++)$[W]=a8($[W]/255)*255;return Z.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(a8(Q[Z]/255)*255);else Q[Z]=a8(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return v0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var PH=0;class a6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:PH++}),this.uuid=o8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement!=="undefined"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame!=="undefined"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},K=this.data;if(K!==null){let $;if(Array.isArray(K)){$=[];for(let W=0,X=K.length;W<X;W++)if(K[W].isDataTexture)$.push(KZ(K[W].image));else $.push(KZ(K[W]))}else $=KZ(K);Z.url=$}if(!Q)J.images[this.uuid]=Z;return Z}}function KZ(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return CK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return v0("Texture: Unable to serialize Texture."),{}}var kH=0,$Z=new x;class x9 extends v8{constructor(J=x9.DEFAULT_IMAGE,Q=x9.DEFAULT_MAPPING,Z=1001,K=1001,$=1006,W=1008,X=1023,Y=1009,H=x9.DEFAULT_ANISOTROPY,N=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:kH++}),this.uuid=o8(),this.name="",this.source=new a6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=K,this.magFilter=$,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new x0(0,0),this.repeat=new x0(1,1),this.center=new x0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new g0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=N,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($Z).x}get height(){return this.source.getSize($Z).y}get depth(){return this.source.getSize($Z).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){v0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){v0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&Z&&(K.isVector2&&Z.isVector2))K.copy(Z);else if(K&&Z&&(K.isVector3&&Z.isVector3))K.copy(Z);else if(K&&Z&&(K.isMatrix3&&Z.isMatrix3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}x9.DEFAULT_IMAGE=null;x9.DEFAULT_MAPPING=300;x9.DEFAULT_ANISOTROPY=1;class Y9{static{Y9.prototype.isVector4=!0}constructor(J=0,Q=0,Z=0,K=1){this.x=J,this.y=Q,this.z=Z,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,K){return this.x=J,this.y=Q,this.z=Z,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*K+W[12]*$,this.y=W[1]*Q+W[5]*Z+W[9]*K+W[13]*$,this.z=W[2]*Q+W[6]*Z+W[10]*K+W[14]*$,this.w=W[3]*Q+W[7]*Z+W[11]*K+W[15]*$,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,K,$,W=0.01,X=0.1,Y=J.elements,H=Y[0],N=Y[4],q=Y[8],U=Y[1],G=Y[5],D=Y[9],O=Y[2],L=Y[6],F=Y[10];if(Math.abs(N-U)<0.01&&Math.abs(q-O)<0.01&&Math.abs(D-L)<0.01){if(Math.abs(N+U)<0.1&&Math.abs(q+O)<0.1&&Math.abs(D+L)<0.1&&Math.abs(H+G+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let R=(H+1)/2,k=(G+1)/2,V=(F+1)/2,A=(N+U)/4,P=(q+O)/4,_=(D+L)/4;if(R>k&&R>V)if(R<0.01)Z=0,K=0.707106781,$=0.707106781;else Z=Math.sqrt(R),K=A/Z,$=P/Z;else if(k>V)if(k<0.01)Z=0.707106781,K=0,$=0.707106781;else K=Math.sqrt(k),Z=A/K,$=_/K;else if(V<0.01)Z=0.707106781,K=0.707106781,$=0;else $=Math.sqrt(V),Z=P/$,K=_/$;return this.set(Z,K,$,Q),this}let E=Math.sqrt((L-D)*(L-D)+(q-O)*(q-O)+(U-N)*(U-N));if(Math.abs(E)<0.001)E=1;return this.x=(L-D)/E,this.y=(q-O)/E,this.z=(U-N)/E,this.w=Math.acos((H+G+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this.w=p0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this.w=p0(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(p0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BK extends v8{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new Y9(0,0,J,Q),this.scissorTest=!1,this.viewport=new Y9(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:Z.depth},$=new x9(K),W=Z.count;for(let X=0;X<W;X++)this.textures[X]=$.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveColorBuffer=Z.resolveColorBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.storeMultisampledColorBuffer=Z.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Z.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Z.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview,this.useArrayDepthTexture=Z.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let K=0,$=this.textures.length;K<$;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=Z,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new a6(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class K8 extends BK{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class JQ extends x9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class AK extends x9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class M9{static{M9.prototype.isMatrix4=!0}constructor(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,D,O,L){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,D,O,L)}set(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,D,O,L){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=Z,F[12]=K,F[1]=$,F[5]=W,F[9]=X,F[13]=Y,F[2]=H,F[6]=N,F[10]=q,F[14]=U,F[3]=G,F[7]=D,F[11]=O,F[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new M9().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),Z.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,Z=J.elements,K=1/tJ.setFromMatrixColumn(J,0).length(),$=1/tJ.setFromMatrixColumn(J,1).length(),W=1/tJ.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*K,Q[1]=Z[1]*K,Q[2]=Z[2]*K,Q[3]=0,Q[4]=Z[4]*$,Q[5]=Z[5]*$,Q[6]=Z[6]*$,Q[7]=0,Q[8]=Z[8]*W,Q[9]=Z[9]*W,Q[10]=Z[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z,W=Math.cos(Z),X=Math.sin(Z),Y=Math.cos(K),H=Math.sin(K),N=Math.cos($),q=Math.sin($);if(J.order==="XYZ"){let U=W*N,G=W*q,D=X*N,O=X*q;Q[0]=Y*N,Q[4]=-Y*q,Q[8]=H,Q[1]=G+D*H,Q[5]=U-O*H,Q[9]=-X*Y,Q[2]=O-U*H,Q[6]=D+G*H,Q[10]=W*Y}else if(J.order==="YXZ"){let U=Y*N,G=Y*q,D=H*N,O=H*q;Q[0]=U+O*X,Q[4]=D*X-G,Q[8]=W*H,Q[1]=W*q,Q[5]=W*N,Q[9]=-X,Q[2]=G*X-D,Q[6]=O+U*X,Q[10]=W*Y}else if(J.order==="ZXY"){let U=Y*N,G=Y*q,D=H*N,O=H*q;Q[0]=U-O*X,Q[4]=-W*q,Q[8]=D+G*X,Q[1]=G+D*X,Q[5]=W*N,Q[9]=O-U*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let U=W*N,G=W*q,D=X*N,O=X*q;Q[0]=Y*N,Q[4]=D*H-G,Q[8]=U*H+O,Q[1]=Y*q,Q[5]=O*H+U,Q[9]=G*H-D,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let U=W*Y,G=W*H,D=X*Y,O=X*H;Q[0]=Y*N,Q[4]=O-U*q,Q[8]=D*q+G,Q[1]=q,Q[5]=W*N,Q[9]=-X*N,Q[2]=-H*N,Q[6]=G*q+D,Q[10]=U-O*q}else if(J.order==="XZY"){let U=W*Y,G=W*H,D=X*Y,O=X*H;Q[0]=Y*N,Q[4]=-q,Q[8]=H*N,Q[1]=U*q+O,Q[5]=W*N,Q[9]=G*q-D,Q[2]=D*q-G,Q[6]=X*N,Q[10]=O*q+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(_H,J,TH)}lookAt(J,Q,Z){let K=this.elements;if(Q8.subVectors(J,Q),Q8.lengthSq()===0)Q8.z=1;if(Q8.normalize(),YJ.crossVectors(Z,Q8),YJ.lengthSq()===0){if(Math.abs(Z.z)===1)Q8.x+=0.0001;else Q8.z+=0.0001;Q8.normalize(),YJ.crossVectors(Z,Q8)}return YJ.normalize(),L7.crossVectors(Q8,YJ),K[0]=YJ.x,K[4]=L7.x,K[8]=Q8.x,K[1]=YJ.y,K[5]=L7.y,K[9]=Q8.y,K[2]=YJ.z,K[6]=L7.z,K[10]=Q8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[4],Y=Z[8],H=Z[12],N=Z[1],q=Z[5],U=Z[9],G=Z[13],D=Z[2],O=Z[6],L=Z[10],F=Z[14],E=Z[3],R=Z[7],k=Z[11],V=Z[15],A=K[0],P=K[4],_=K[8],I=K[12],B=K[1],p=K[5],j=K[9],y=K[13],m=K[2],T=K[6],w=K[10],n=K[14],u=K[3],$0=K[7],i=K[11],Z0=K[15];return $[0]=W*A+X*B+Y*m+H*u,$[4]=W*P+X*p+Y*T+H*$0,$[8]=W*_+X*j+Y*w+H*i,$[12]=W*I+X*y+Y*n+H*Z0,$[1]=N*A+q*B+U*m+G*u,$[5]=N*P+q*p+U*T+G*$0,$[9]=N*_+q*j+U*w+G*i,$[13]=N*I+q*y+U*n+G*Z0,$[2]=D*A+O*B+L*m+F*u,$[6]=D*P+O*p+L*T+F*$0,$[10]=D*_+O*j+L*w+F*i,$[14]=D*I+O*y+L*n+F*Z0,$[3]=E*A+R*B+k*m+V*u,$[7]=E*P+R*p+k*T+V*$0,$[11]=E*_+R*j+k*w+V*i,$[15]=E*I+R*y+k*n+V*Z0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],N=J[2],q=J[6],U=J[10],G=J[14],D=J[3],O=J[7],L=J[11],F=J[15],E=Y*G-H*U,R=X*G-H*q,k=X*U-Y*q,V=W*G-H*N,A=W*U-Y*N,P=W*q-X*N;return Q*(O*E-L*R+F*k)-Z*(D*E-L*V+F*A)+K*(D*R-O*V+F*P)-$*(D*k-O*A+L*P)}determinantAffine(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],N=J[10];return Q*(W*N-X*H)-Z*($*N-X*Y)+K*($*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=J[9],U=J[10],G=J[11],D=J[12],O=J[13],L=J[14],F=J[15],E=Q*X-Z*W,R=Q*Y-K*W,k=Q*H-$*W,V=Z*Y-K*X,A=Z*H-$*X,P=K*H-$*Y,_=N*O-q*D,I=N*L-U*D,B=N*F-G*D,p=q*L-U*O,j=q*F-G*O,y=U*F-G*L,m=E*y-R*j+k*p+V*B-A*I+P*_;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/m;return J[0]=(X*y-Y*j+H*p)*T,J[1]=(K*j-Z*y-$*p)*T,J[2]=(O*P-L*A+F*V)*T,J[3]=(U*A-q*P-G*V)*T,J[4]=(Y*B-W*y-H*I)*T,J[5]=(Q*y-K*B+$*I)*T,J[6]=(L*k-D*P-F*R)*T,J[7]=(N*P-U*k+G*R)*T,J[8]=(W*j-X*B+H*_)*T,J[9]=(Z*B-Q*j-$*_)*T,J[10]=(D*A-O*k+F*E)*T,J[11]=(q*k-N*A-G*E)*T,J[12]=(X*I-W*p-Y*_)*T,J[13]=(Q*p-Z*I+K*_)*T,J[14]=(O*R-D*V-L*E)*T,J[15]=(N*V-q*R+U*E)*T,this}scale(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z;return Q[0]*=Z,Q[4]*=K,Q[8]*=$,Q[1]*=Z,Q[5]*=K,Q[9]*=$,Q[2]*=Z,Q[6]*=K,Q[10]*=$,Q[3]*=Z,Q[7]*=K,Q[11]*=$,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,K))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=1-Z,W=J.x,X=J.y,Y=J.z,H=$*W,N=$*X;return this.set(H*W+Z,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,N*X+Z,N*Y-K*W,0,H*Y-K*X,N*Y+K*W,$*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,K,$,W){return this.set(1,Z,$,0,J,1,W,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,Z){let K=this.elements,$=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=$+$,N=W+W,q=X+X,U=$*H,G=$*N,D=$*q,O=W*N,L=W*q,F=X*q,E=Y*H,R=Y*N,k=Y*q,V=Z.x,A=Z.y,P=Z.z;return K[0]=(1-(O+F))*V,K[1]=(G+k)*V,K[2]=(D-R)*V,K[3]=0,K[4]=(G-k)*A,K[5]=(1-(U+F))*A,K[6]=(L+E)*A,K[7]=0,K[8]=(D+R)*P,K[9]=(L-E)*P,K[10]=(1-(U+O))*P,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,Z){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let $=this.determinantAffine();if($===0)return Z.set(1,1,1),Q.identity(),this;let W=tJ.set(K[0],K[1],K[2]).length(),X=tJ.set(K[4],K[5],K[6]).length(),Y=tJ.set(K[8],K[9],K[10]).length();if($<0)W=-W;F8.copy(this);let H=1/W,N=1/X,q=1/Y;return F8.elements[0]*=H,F8.elements[1]*=H,F8.elements[2]*=H,F8.elements[4]*=N,F8.elements[5]*=N,F8.elements[6]*=N,F8.elements[8]*=q,F8.elements[9]*=q,F8.elements[10]*=q,Q.setFromRotationMatrix(F8),Z.x=W,Z.y=X,Z.z=Y,this}makePerspective(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,N=2*$/(Q-J),q=2*$/(Z-K),U=(Q+J)/(Q-J),G=(Z+K)/(Z-K),D,O;if(Y)D=$/(W-$),O=W*$/(W-$);else if(X===2000)D=-(W+$)/(W-$),O=-2*W*$/(W-$);else if(X===2001)D=-W/(W-$),O=-W*$/(W-$);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=U,H[12]=0,H[1]=0,H[5]=q,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=D,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,N=2/(Q-J),q=2/(Z-K),U=-(Q+J)/(Q-J),G=-(Z+K)/(Z-K),D,O;if(Y)D=1/(W-$),O=W/(W-$);else if(X===2000)D=-2/(W-$),O=-(W+$)/(W-$);else if(X===2001)D=-1/(W-$),O=-$/(W-$);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=0,H[12]=U,H[1]=0,H[5]=q,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=D,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<16;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var tJ=new x,F8=new M9,_H=new x(0,0,0),TH=new x(1,1,1),YJ=new x,L7=new x,Q8=new x,XW=new M9,YW=new t9;class _8{constructor(J=0,Q=0,Z=0,K=_8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,K=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let K=J.elements,$=K[0],W=K[4],X=K[8],Y=K[1],H=K[5],N=K[9],q=K[2],U=K[6],G=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(p0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-N,G),this._z=Math.atan2(-W,$);else this._x=Math.atan2(U,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-p0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(X,G),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-q,$),this._z=0;break;case"ZXY":if(this._x=Math.asin(p0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-q,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,$);break;case"ZYX":if(this._y=Math.asin(-p0(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(U,G),this._z=Math.atan2(Y,$);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(p0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-N,H),this._y=Math.atan2(-q,$);else this._x=0,this._y=Math.atan2(X,G);break;case"XZY":if(this._z=Math.asin(-p0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(U,H),this._y=Math.atan2(X,$);else this._x=Math.atan2(-N,G),this._y=0;break;default:v0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return XW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(XW,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return YW.setFromEuler(this),this.setFromQuaternion(YW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_8.DEFAULT_ORDER="XYZ";class QQ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var wH=0,HW=new x,eJ=new t9,l8=new M9,I7=new x,f6=new x,SH=new x,jH=new t9,UW=new x(1,0,0),NW=new x(0,1,0),GW=new x(0,0,1),qW={type:"added"},vH={type:"removed"},J6={type:"childadded",child:null},WZ={type:"childremoved",child:null};class o9 extends v8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:wH++}),this.uuid=o8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=o9.DEFAULT_UP.clone();let J=new x,Q=new _8,Z=new t9,K=new x(1,1,1);function $(){Z.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange($),Z._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new M9},normalMatrix:{value:new g0}}),this.matrix=new M9,this.matrixWorld=new M9,this.matrixAutoUpdate=o9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=o9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new QQ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return eJ.setFromAxisAngle(J,Q),this.quaternion.multiply(eJ),this}rotateOnWorldAxis(J,Q){return eJ.setFromAxisAngle(J,Q),this.quaternion.premultiply(eJ),this}rotateX(J){return this.rotateOnAxis(UW,J)}rotateY(J){return this.rotateOnAxis(NW,J)}rotateZ(J){return this.rotateOnAxis(GW,J)}translateOnAxis(J,Q){return HW.copy(J).applyQuaternion(this.quaternion),this.position.add(HW.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(UW,J)}translateY(J){return this.translateOnAxis(NW,J)}translateZ(J){return this.translateOnAxis(GW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(l8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)I7.copy(J);else I7.set(J,Q,Z);let K=this.parent;if(this.updateWorldMatrix(!0,!1),f6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)l8.lookAt(f6,I7,this.up);else l8.lookAt(I7,f6,this.up);if(this.quaternion.setFromRotationMatrix(l8),K)l8.extractRotation(K.matrixWorld),eJ.setFromRotationMatrix(l8),this.quaternion.premultiply(eJ.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return f0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(qW),J6.child=J,this.dispatchEvent(J6),J6.child=null;else f0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(vH),WZ.child=J,this.dispatchEvent(WZ),WZ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),l8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),l8.multiply(J.parent.matrixWorld);return J.applyMatrix4(l8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(qW),J6.child=J,this.dispatchEvent(J6),J6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,K=this.children.length;Z<K;Z++){let W=this.children[Z].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let K=this.children;for(let $=0,W=K.length;$<W;$++)K[$].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(f6,J,SH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(f6,jH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:Z,z:K}=J,$=this.matrix.elements;$[12]+=Q-$[0]*Q-$[4]*Z-$[8]*K,$[13]+=Z-$[1]*Q-$[5]*Z-$[9]*K,$[14]+=K-$[2]*Q-$[6]*Z-$[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q,Z=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Z){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Z=!0}if(Q===!0){let $=this.children;for(let W=0,X=$.length;W<X;W++)$[W].updateWorldMatrix(!1,!0,Z)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,K.name=this.name,K.castShadow=this.castShadow,K.receiveShadow=this.receiveShadow,K.visible=this.visible,K.frustumCulled=this.frustumCulled,K.renderOrder=this.renderOrder,K.static=this.static,K.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function $(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=$(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,N=Y.length;H<N;H++){let q=Y[H];$(J.shapes,q)}else $(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)$(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push($(J.materials,this.material[Y]));K.material=X}else K.material=$(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push($(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),N=W(J.images),q=W(J.shapes),U=W(J.skeletons),G=W(J.animations),D=W(J.nodes);if(X.length>0)Z.geometries=X;if(Y.length>0)Z.materials=Y;if(H.length>0)Z.textures=H;if(N.length>0)Z.images=N;if(q.length>0)Z.shapes=q;if(U.length>0)Z.skeletons=U;if(G.length>0)Z.animations=G;if(D.length>0)Z.nodes=D}return Z.object=K,Z;function W(X){let Y=[];for(let H in X){let N=X[H];delete N.metadata,Y.push(N)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let K=J.children[Z];this.add(K.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}o9.DEFAULT_UP=new x(0,1,0);o9.DEFAULT_MATRIX_AUTO_UPDATE=!0;o9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qJ extends o9{constructor(){super();this.isGroup=!0,this.type="Group"}}var yH={type:"move"};class r6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new qJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new qJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new qJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let K=null,$=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let L=Q.getJointPose(O,Z),F=this._getHandJoint(H,O);if(L!==null)F.matrix.fromArray(L.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=L.radius;F.visible=L!==null}let N=H.joints["index-finger-tip"],q=H.joints["thumb-tip"],U=N.position.distanceTo(q.position),G=0.02,D=0.005;if(H.inputState.pinching&&U>G+D)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&U<=G-D)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if($=Q.getPose(J.gripSpace,Z),$!==null){if(Y.matrix.fromArray($.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,$.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy($.linearVelocity);else Y.hasLinearVelocity=!1;if($.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy($.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,Z),K===null&&$!==null)K=$;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(yH)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=$!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new qJ;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var BX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},HJ={h:0,s:0,l:0},V7={h:0,s:0,l:0};function XZ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class e0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,o0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,K=o0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,o0.colorSpaceToWorking(this,K),this}setHSL(J,Q,Z,K=o0.workingColorSpace){if(J=VK(J,1),Q=p0(Q,0,1),Z=p0(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let $=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,W=2*Z-$;this.r=XZ(W,$,J+0.3333333333333333),this.g=XZ(W,$,J),this.b=XZ(W,$,J-0.3333333333333333)}return o0.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function Z($){if($===void 0)return;if(parseFloat($)<1)v0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let $,W=K[1],X=K[2];switch(W){case"rgb":case"rgba":if($=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(255,parseInt($[1],10))/255,Math.min(255,parseInt($[2],10))/255,Math.min(255,parseInt($[3],10))/255,Q);if($=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(100,parseInt($[1],10))/100,Math.min(100,parseInt($[2],10))/100,Math.min(100,parseInt($[3],10))/100,Q);break;case"hsl":case"hsla":if($=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setHSL(parseFloat($[1])/360,parseFloat($[2])/100,parseFloat($[3])/100,Q);break;default:v0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let $=K[1],W=$.length;if(W===3)return this.setRGB(parseInt($.charAt(0),16)/15,parseInt($.charAt(1),16)/15,parseInt($.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt($,16),Q);else v0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=BX[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else v0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=a8(J.r),this.g=a8(J.g),this.b=a8(J.b),this}copyLinearToSRGB(J){return this.r=q6(J.r),this.g=q6(J.g),this.b=q6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return o0.workingToColorSpace(h9.copy(this),J),Math.round(p0(h9.r*255,0,255))*65536+Math.round(p0(h9.g*255,0,255))*256+Math.round(p0(h9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=o0.workingColorSpace){o0.workingToColorSpace(h9.copy(this),Q);let{r:Z,g:K,b:$}=h9,W=Math.max(Z,K,$),X=Math.min(Z,K,$),Y,H,N=(X+W)/2;if(X===W)Y=0,H=0;else{let q=W-X;switch(H=N<=0.5?q/(W+X):q/(2-W-X),W){case Z:Y=(K-$)/q+(K<$?6:0);break;case K:Y=($-Z)/q+2;break;case $:Y=(Z-K)/q+4;break}Y/=6}return J.h=Y,J.s=H,J.l=N,J}getRGB(J,Q=o0.workingColorSpace){return o0.workingToColorSpace(h9.copy(this),Q),J.r=h9.r,J.g=h9.g,J.b=h9.b,J}getStyle(J="srgb"){o0.workingToColorSpace(h9.copy(this),J);let{r:Q,g:Z,b:K}=h9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round(K*255)})`}offsetHSL(J,Q,Z){return this.getHSL(HJ),this.setHSL(HJ.h+J,HJ.s+Q,HJ.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(HJ),J.getHSL(V7);let Z=m6(HJ.h,V7.h,Q),K=m6(HJ.s,V7.s,Q),$=m6(HJ.l,V7.l,Q);return this.setHSL(Z,K,$),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,K=this.b,$=J.elements;return this.r=$[0]*Q+$[3]*Z+$[6]*K,this.g=$[1]*Q+$[4]*Z+$[7]*K,this.b=$[2]*Q+$[5]*Z+$[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var h9=new e0;e0.NAMES=BX;class t6{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new e0(J),this.near=Q,this.far=Z}clone(){return new t6(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ZQ extends o9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _8,this.environmentIntensity=1,this.environmentRotation=new _8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var O8=new x,c8=new x,YZ=new x,n8=new x,Q6=new x,Z6=new x,EW=new x,HZ=new x,UZ=new x,NZ=new x,GZ=new Y9,qZ=new Y9,EZ=new Y9;class U8{constructor(J=new x,Q=new x,Z=new x){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,K){K.subVectors(Z,Q),O8.subVectors(J,Q),K.cross(O8);let $=K.lengthSq();if($>0)return K.multiplyScalar(1/Math.sqrt($));return K.set(0,0,0)}static getBarycoord(J,Q,Z,K,$){O8.subVectors(K,Q),c8.subVectors(Z,Q),YZ.subVectors(J,Q);let W=O8.dot(O8),X=O8.dot(c8),Y=O8.dot(YZ),H=c8.dot(c8),N=c8.dot(YZ),q=W*H-X*X;if(q===0)return $.set(0,0,0),null;let U=1/q,G=(H*Y-X*N)*U,D=(W*N-X*Y)*U;return $.set(1-G-D,D,G)}static containsPoint(J,Q,Z,K){if(this.getBarycoord(J,Q,Z,K,n8)===null)return!1;return n8.x>=0&&n8.y>=0&&n8.x+n8.y<=1}static getInterpolation(J,Q,Z,K,$,W,X,Y){if(this.getBarycoord(J,Q,Z,K,n8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector($,n8.x),Y.addScaledVector(W,n8.y),Y.addScaledVector(X,n8.z),Y}static getInterpolatedAttribute(J,Q,Z,K,$,W){return GZ.setScalar(0),qZ.setScalar(0),EZ.setScalar(0),GZ.fromBufferAttribute(J,Q),qZ.fromBufferAttribute(J,Z),EZ.fromBufferAttribute(J,K),W.setScalar(0),W.addScaledVector(GZ,$.x),W.addScaledVector(qZ,$.y),W.addScaledVector(EZ,$.z),W}static isFrontFacing(J,Q,Z,K){return O8.subVectors(Z,Q),c8.subVectors(J,Q),O8.cross(c8).dot(K)<0}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,K){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,Z,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return O8.subVectors(this.c,this.b),c8.subVectors(this.a,this.b),O8.cross(c8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return U8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return U8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,K,$){return U8.getInterpolation(J,this.a,this.b,this.c,Q,Z,K,$)}containsPoint(J){return U8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return U8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,K=this.b,$=this.c,W,X;Q6.subVectors(K,Z),Z6.subVectors($,Z),HZ.subVectors(J,Z);let Y=Q6.dot(HZ),H=Z6.dot(HZ);if(Y<=0&&H<=0)return Q.copy(Z);UZ.subVectors(J,K);let N=Q6.dot(UZ),q=Z6.dot(UZ);if(N>=0&&q<=N)return Q.copy(K);let U=Y*q-N*H;if(U<=0&&Y>=0&&N<=0)return W=Y/(Y-N),Q.copy(Z).addScaledVector(Q6,W);NZ.subVectors(J,$);let G=Q6.dot(NZ),D=Z6.dot(NZ);if(D>=0&&G<=D)return Q.copy($);let O=G*H-Y*D;if(O<=0&&H>=0&&D<=0)return X=H/(H-D),Q.copy(Z).addScaledVector(Z6,X);let L=N*D-G*q;if(L<=0&&q-N>=0&&G-D>=0)return EW.subVectors($,K),X=(q-N)/(q-N+(G-D)),Q.copy(K).addScaledVector(EW,X);let F=1/(L+O+U);return W=O*F,X=U*F,Q.copy(Z).addScaledVector(Q6,W).addScaledVector(Z6,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class G8{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(R8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(R8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=R8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let $=Z.getAttribute("position");if(Q===!0&&$!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=$.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,R8);else R8.fromBufferAttribute($,W);R8.applyMatrix4(J.matrixWorld),this.expandByPoint(R8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();C7.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();C7.copy(Z.boundingBox)}C7.applyMatrix4(J.matrixWorld),this.union(C7)}}let K=J.children;for(let $=0,W=K.length;$<W;$++)this.expandByObject(K[$],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,R8),R8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(h6),B7.subVectors(this.max,h6),K6.subVectors(J.a,h6),$6.subVectors(J.b,h6),W6.subVectors(J.c,h6),UJ.subVectors($6,K6),NJ.subVectors(W6,$6),CJ.subVectors(K6,W6);let Q=[0,-UJ.z,UJ.y,0,-NJ.z,NJ.y,0,-CJ.z,CJ.y,UJ.z,0,-UJ.x,NJ.z,0,-NJ.x,CJ.z,0,-CJ.x,-UJ.y,UJ.x,0,-NJ.y,NJ.x,0,-CJ.y,CJ.x,0];if(!DZ(Q,K6,$6,W6,B7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!DZ(Q,K6,$6,W6,B7))return!1;return A7.crossVectors(UJ,NJ),Q=[A7.x,A7.y,A7.z],DZ(Q,K6,$6,W6,B7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,R8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(R8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return s8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),s8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),s8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),s8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),s8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),s8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),s8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),s8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(s8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var s8=[new x,new x,new x,new x,new x,new x,new x,new x],R8=new x,C7=new G8,K6=new x,$6=new x,W6=new x,UJ=new x,NJ=new x,CJ=new x,h6=new x,B7=new x,A7=new x,BJ=new x;function DZ(J,Q,Z,K,$){for(let W=0,X=J.length-3;W<=X;W+=3){BJ.fromArray(J,W);let Y=$.x*Math.abs(BJ.x)+$.y*Math.abs(BJ.y)+$.z*Math.abs(BJ.z),H=Q.dot(BJ),N=Z.dot(BJ),q=K.dot(BJ);if(Math.max(-Math.max(H,N,q),Math.min(H,N,q))>Y)return!1}return!0}var C9=new x,z7=new x0,bH=0;class N8 extends v8{constructor(J,Q,Z=!1){super();if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let K=0,$=this.itemSize;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)z7.fromBufferAttribute(this,Q),z7.applyMatrix3(J),this.setXY(Q,z7.x,z7.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)C9.fromBufferAttribute(this,Q),C9.applyMatrix3(J),this.setXYZ(Q,C9.x,C9.y,C9.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)C9.fromBufferAttribute(this,Q),C9.applyMatrix4(J),this.setXYZ(Q,C9.x,C9.y,C9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)C9.fromBufferAttribute(this,Q),C9.applyNormalMatrix(J),this.setXYZ(Q,C9.x,C9.y,C9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)C9.fromBufferAttribute(this,Q),C9.transformDirection(J),this.setXYZ(Q,C9.x,C9.y,C9.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=M8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=W9(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=M8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=M8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=M8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=M8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J*=this.itemSize,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J*=this.itemSize,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array),$=W9($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this.array[J+3]=$,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class KQ extends N8{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class $Q extends N8{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class c9 extends N8{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var fH=new G8,x6=new x,FZ=new x;class t8{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else fH.setFromPoints(J).getCenter(Z);let K=0;for(let $=0,W=J.length;$<W;$++)K=Math.max(K,Z.distanceToSquared(J[$]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;x6.subVectors(J,this.center);let Q=x6.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),K=(Z-this.radius)*0.5;this.center.addScaledVector(x6,K/Z),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else FZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(x6.copy(J.center).add(FZ)),this.expandByPoint(x6.copy(J.center).sub(FZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var hH=0,Y8=new M9,OZ=new o9,X6=new x,Z8=new G8,g6=new G8,T9=new x;class q8 extends v8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hH++}),this.uuid=o8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((YH(J))?$Q:KQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let $=new g0().getNormalMatrix(J);Z.applyNormalMatrix($),Z.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return Y8.makeRotationFromQuaternion(J),this.applyMatrix4(Y8),this}rotateX(J){return Y8.makeRotationX(J),this.applyMatrix4(Y8),this}rotateY(J){return Y8.makeRotationY(J),this.applyMatrix4(Y8),this}rotateZ(J){return Y8.makeRotationZ(J),this.applyMatrix4(Y8),this}translate(J,Q,Z){return Y8.makeTranslation(J,Q,Z),this.applyMatrix4(Y8),this}scale(J,Q,Z){return Y8.makeScale(J,Q,Z),this.applyMatrix4(Y8),this}lookAt(J){return OZ.lookAt(J),OZ.updateMatrix(),this.applyMatrix4(OZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(X6).negate(),this.translate(X6.x,X6.y,X6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.push(W.x,W.y,W.z||0)}this.setAttribute("position",new c9(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let K=0;K<Z;K++){let $=J[K];Q.setXYZ(K,$.x,$.y,$.z||0)}if(J.length>Q.count)v0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new G8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let $=Q[Z];if(Z8.setFromBufferAttribute($),this.morphTargetsRelative)T9.addVectors(this.boundingBox.min,Z8.min),this.boundingBox.expandByPoint(T9),T9.addVectors(this.boundingBox.max,Z8.max),this.boundingBox.expandByPoint(T9);else this.boundingBox.expandByPoint(Z8.min),this.boundingBox.expandByPoint(Z8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))f0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new t8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let Z=this.boundingSphere.center;if(Z8.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$];if(g6.setFromBufferAttribute(X),this.morphTargetsRelative)T9.addVectors(Z8.min,g6.min),Z8.expandByPoint(T9),T9.addVectors(Z8.max,g6.max),Z8.expandByPoint(T9);else Z8.expandByPoint(g6.min),Z8.expandByPoint(g6.max)}Z8.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)T9.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(T9));if(Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$],Y=this.morphTargetsRelative;for(let H=0,N=X.count;H<N;H++){if(T9.fromBufferAttribute(X,H),Y)X6.fromBufferAttribute(J,H),T9.add(X6);K=Math.max(K,Z.distanceToSquared(T9))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))f0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){f0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:K,uv:$}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==Z.count)W=new N8(new Float32Array(4*Z.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<Z.count;_++)X[_]=new x,Y[_]=new x;let H=new x,N=new x,q=new x,U=new x0,G=new x0,D=new x0,O=new x,L=new x;function F(_,I,B){H.fromBufferAttribute(Z,_),N.fromBufferAttribute(Z,I),q.fromBufferAttribute(Z,B),U.fromBufferAttribute($,_),G.fromBufferAttribute($,I),D.fromBufferAttribute($,B),N.sub(H),q.sub(H),G.sub(U),D.sub(U);let p=1/(G.x*D.y-D.x*G.y);if(!isFinite(p))return;O.copy(N).multiplyScalar(D.y).addScaledVector(q,-G.y).multiplyScalar(p),L.copy(q).multiplyScalar(G.x).addScaledVector(N,-D.x).multiplyScalar(p),X[_].add(O),X[I].add(O),X[B].add(O),Y[_].add(L),Y[I].add(L),Y[B].add(L)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let _=0,I=E.length;_<I;++_){let B=E[_],p=B.start,j=B.count;for(let y=p,m=p+j;y<m;y+=3)F(J.getX(y+0),J.getX(y+1),J.getX(y+2))}let R=new x,k=new x,V=new x,A=new x;function P(_){V.fromBufferAttribute(K,_),A.copy(V);let I=X[_];R.copy(I),R.sub(V.multiplyScalar(V.dot(I))).normalize(),k.crossVectors(A,I);let p=k.dot(Y[_])<0?-1:1;W.setXYZW(_,R.x,R.y,R.z,p)}for(let _=0,I=E.length;_<I;++_){let B=E[_],p=B.start,j=B.count;for(let y=p,m=p+j;y<m;y+=3)P(J.getX(y+0)),P(J.getX(y+1)),P(J.getX(y+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0||Z.count!==Q.count)Z=new N8(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let U=0,G=Z.count;U<G;U++)Z.setXYZ(U,0,0,0);let K=new x,$=new x,W=new x,X=new x,Y=new x,H=new x,N=new x,q=new x;if(J)for(let U=0,G=J.count;U<G;U+=3){let D=J.getX(U+0),O=J.getX(U+1),L=J.getX(U+2);K.fromBufferAttribute(Q,D),$.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,L),N.subVectors(W,$),q.subVectors(K,$),N.cross(q),X.fromBufferAttribute(Z,D),Y.fromBufferAttribute(Z,O),H.fromBufferAttribute(Z,L),X.add(N),Y.add(N),H.add(N),Z.setXYZ(D,X.x,X.y,X.z),Z.setXYZ(O,Y.x,Y.y,Y.z),Z.setXYZ(L,H.x,H.y,H.z)}else for(let U=0,G=Q.count;U<G;U+=3)K.fromBufferAttribute(Q,U+0),$.fromBufferAttribute(Q,U+1),W.fromBufferAttribute(Q,U+2),N.subVectors(W,$),q.subVectors(K,$),N.cross(q),Z.setXYZ(U+0,N.x,N.y,N.z),Z.setXYZ(U+1,N.x,N.y,N.z),Z.setXYZ(U+2,N.x,N.y,N.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)T9.fromBufferAttribute(J,Q),T9.normalize(),J.setXYZ(Q,T9.x,T9.y,T9.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:N,normalized:q}=X,U=new H.constructor(Y.length*N),G=0,D=0;for(let O=0,L=Y.length;O<L;O++){if(X.isInterleavedBufferAttribute)G=Y[O]*X.data.stride+X.offset;else G=Y[O]*N;for(let F=0;F<N;F++)U[D++]=H[G++]}return new N8(U,N,q)}if(this.index===null)return v0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new q8,Z=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,Z);Q.setAttribute(X,H)}let $=this.morphAttributes;for(let X in $){let Y=[],H=$[X];for(let N=0,q=H.length;N<q;N++){let U=H[N],G=J(U,Z);Y.push(G)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let H=Z[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},$=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],N=[];for(let q=0,U=H.length;q<U;q++){let G=H[q];N.push(G.toJSON(J.data))}if(N.length>0)K[Y]=N,$=!0}if($)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let K=J.attributes;for(let H in K){let N=K[H];this.setAttribute(H,N.clone(Q))}let $=J.morphAttributes;for(let H in $){let N=[],q=$[H];for(let U=0,G=q.length;U<G;U++)N.push(q[U].clone(Q));this.morphAttributes[H]=N}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,N=W.length;H<N;H++){let q=W[H];this.addGroup(q.start,q.count,q.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zK{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=o8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let K=0,$=this.stride;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=o8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=o8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var u9=new x;class g9{constructor(J,Q,Z,K=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=K}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)u9.fromBufferAttribute(this,Q),u9.applyMatrix4(J),this.setXYZ(Q,u9.x,u9.y,u9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)u9.fromBufferAttribute(this,Q),u9.applyNormalMatrix(J),this.setXYZ(Q,u9.x,u9.y,u9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)u9.fromBufferAttribute(this,Q),u9.transformDirection(J),this.setXYZ(Q,u9.x,u9.y,u9.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=M8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=W9(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=W9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=M8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=M8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=M8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=M8(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=W9(Q,this.array),Z=W9(Z,this.array),K=W9(K,this.array),$=W9($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this.data.array[J+3]=$,this}clone(J){if(J===void 0){u6("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return new N8(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new g9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){u6("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var RZ=new x,xH=new x,gH=new g0;class H8{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,K){return this.normal.set(J,Q,Z),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let K=RZ.subVectors(Z,Q).cross(xH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,Z=!0){let K=J.delta(RZ),$=this.normal.dot(K);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(Z===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(K,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||gH.getNormalMatrix(J),K=this.coplanarPoint(RZ).applyMatrix4(J),$=this.normal.applyMatrix3(Z).normalize();return this.constant=-K.dot($),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var pH=0;class I6 extends v8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:pH++}),this.uuid=o8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new e0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){v0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){v0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set(Z);else if(K&&K.isVector2&&(Z&&Z.isVector2)||K&&K.isEuler&&(Z&&Z.isEuler)||K&&K.isVector3&&(Z&&Z.isVector3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,Z.blending=this.blending,Z.side=this.side,Z.shadowSide=this.shadowSide,Z.vertexColors=this.vertexColors,Z.opacity=this.opacity,Z.transparent=this.transparent,Z.blendSrc=this.blendSrc,Z.blendDst=this.blendDst,Z.blendEquation=this.blendEquation,Z.blendSrcAlpha=this.blendSrcAlpha,Z.blendDstAlpha=this.blendDstAlpha,Z.blendEquationAlpha=this.blendEquationAlpha,Z.blendColor=this.blendColor.getHex(),Z.blendAlpha=this.blendAlpha,Z.depthFunc=this.depthFunc,Z.depthTest=this.depthTest,Z.depthWrite=this.depthWrite,Z.colorWrite=this.colorWrite,Z.clipIntersection=this.clipIntersection,Z.clipShadows=this.clipShadows,Z.stencilWriteMask=this.stencilWriteMask,Z.stencilFunc=this.stencilFunc,Z.stencilRef=this.stencilRef,Z.stencilFuncMask=this.stencilFuncMask,Z.stencilFail=this.stencilFail,Z.stencilZFail=this.stencilZFail,Z.stencilZPass=this.stencilZPass,Z.stencilWrite=this.stencilWrite,Z.polygonOffset=this.polygonOffset,Z.polygonOffsetFactor=this.polygonOffsetFactor,Z.polygonOffsetUnits=this.polygonOffsetUnits,Z.dithering=this.dithering,Z.alphaTest=this.alphaTest,Z.alphaHash=this.alphaHash,Z.alphaToCoverage=this.alphaToCoverage,Z.premultipliedAlpha=this.premultipliedAlpha,Z.forceSinglePass=this.forceSinglePass,Z.allowOverride=this.allowOverride,Z.visible=this.visible,Z.toneMapped=this.toneMapped,Z.name=this.name,this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Z.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Z.clippingPlanes=this.clippingPlanes.map(($)=>$.toJSON());if(this.rotation!==void 0)Z.rotation=this.rotation;if(this.depthPacking!==void 0)Z.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Z.linewidth=this.linewidth;if(this.linecap!==void 0)Z.linecap=this.linecap;if(this.linejoin!==void 0)Z.linejoin=this.linejoin;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.wireframe!==void 0)Z.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Z.flatShading=this.flatShading;if(this.fog!==void 0)Z.fog=this.fog;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function K($){let W=[];for(let X in $){let Y=$[X];delete Y.metadata,W.push(Y)}return W}if(Q){let $=K(J.textures),W=K(J.images);if($.length>0)Z.textures=$;if(W.length>0)Z.images=W}return Z}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new e0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Z)=>new H8().fromJSON(Z));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Z=J.normalScale;if(Array.isArray(Z)===!1)Z=[Z,Z];this.normalScale=new x0().fromArray(Z)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new x0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let K=Q.length;Z=new Array(K);for(let $=0;$!==K;++$)Z[$]=Q[$].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var i8=new x,MZ=new x,P7=new x,k7=new x;class e6{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,i8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=i8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return i8.copy(this.origin).addScaledVector(this.direction,Q),i8.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,K){MZ.copy(J).add(Q).multiplyScalar(0.5),P7.copy(Q).sub(J).normalize(),k7.copy(this.origin).sub(MZ);let $=J.distanceTo(Q)*0.5,W=-this.direction.dot(P7),X=k7.dot(this.direction),Y=-k7.dot(P7),H=k7.lengthSq(),N=Math.abs(1-W*W),q,U,G,D;if(N>0)if(q=W*Y-X,U=W*X-Y,D=$*N,q>=0)if(U>=-D)if(U<=D){let O=1/N;q*=O,U*=O,G=q*(q+W*U+2*X)+U*(W*q+U+2*Y)+H}else U=$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else U=-$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else if(U<=-D)q=Math.max(0,-(-W*$+X)),U=q>0?-$:Math.min(Math.max(-$,-Y),$),G=-q*q+U*(U+2*Y)+H;else if(U<=D)q=0,U=Math.min(Math.max(-$,-Y),$),G=U*(U+2*Y)+H;else q=Math.max(0,-(W*$+X)),U=q>0?$:Math.min(Math.max(-$,-Y),$),G=-q*q+U*(U+2*Y)+H;else U=W>0?-$:$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;if(Z)Z.copy(this.origin).addScaledVector(this.direction,q);if(K)K.copy(MZ).addScaledVector(P7,U);return G}intersectSphere(J,Q){if(J.radius<0)return null;i8.subVectors(J.center,this.origin);let Z=i8.dot(this.direction),K=i8.dot(i8)-Z*Z,$=J.radius*J.radius;if(K>$)return null;let W=Math.sqrt($-K),X=Z-W,Y=Z+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,K,$,W,X,Y,H=1/this.direction.x,N=1/this.direction.y,q=1/this.direction.z,U=this.origin;if(H>=0)Z=(J.min.x-U.x)*H,K=(J.max.x-U.x)*H;else Z=(J.max.x-U.x)*H,K=(J.min.x-U.x)*H;if(N>=0)$=(J.min.y-U.y)*N,W=(J.max.y-U.y)*N;else $=(J.max.y-U.y)*N,W=(J.min.y-U.y)*N;if(Z>W||$>K)return null;if($>Z||isNaN(Z))Z=$;if(W<K||isNaN(K))K=W;if(q>=0)X=(J.min.z-U.z)*q,Y=(J.max.z-U.z)*q;else X=(J.max.z-U.z)*q,Y=(J.min.z-U.z)*q;if(Z>Y||X>K)return null;if(X>Z||Z!==Z)Z=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at(Z>=0?Z:K,Q)}intersectsBox(J){return this.intersectBox(J,i8)!==null}intersectTriangle(J,Q,Z,K,$){let W=this.origin,X=this.direction,Y=X.x,H=X.y,N=X.z,q=J.x-W.x,U=J.y-W.y,G=J.z-W.z,D=Q.x-W.x,O=Q.y-W.y,L=Q.z-W.z,F=Z.x-W.x,E=Z.y-W.y,R=Z.z-W.z,k=Math.abs(Y),V=Math.abs(H),A=Math.abs(N),P,_,I,B,p,j,y,m,T,w,n,u;if(k>=V&&k>=A)if(I=Y,j=q,T=D,u=F,Y>=0)P=H,_=N,B=U,p=G,y=O,m=L,w=E,n=R;else P=N,_=H,B=G,p=U,y=L,m=O,w=R,n=E;else if(V>=A)if(I=H,j=U,T=O,u=E,H>=0)P=N,_=Y,B=G,p=q,y=L,m=D,w=R,n=F;else P=Y,_=N,B=q,p=G,y=D,m=L,w=F,n=R;else if(I=N,j=G,T=L,u=R,N>=0)P=Y,_=H,B=q,p=U,y=D,m=O,w=F,n=E;else P=H,_=Y,B=U,p=q,y=O,m=D,w=E,n=F;if(I===0)return null;let $0=P/I,i=_/I,Z0=1/I,X0=B-$0*j,w0=p-i*j,T0=y-$0*T,n0=m-i*T,u0=w-$0*u,S=n-i*u,g=u0*n0-S*T0,d=X0*S-w0*u0,a=T0*w0-n0*X0;if(K){if(g<0||d<0||a<0)return null}else if((g<0||d<0||a<0)&&(g>0||d>0||a>0))return null;let Q0=g+d+a;if(Q0===0)return null;let r=Z0*(g*j+d*T+a*u);if(Q0>0?r<0:r>0)return null;return this.at(r/Q0,$)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class WQ extends I6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new e0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var DW=new M9,AJ=new e6,_7=new t8,FW=new x,T7=new x,w7=new x,S7=new x,LZ=new x,j7=new x,OW=new x,v7=new x;class $8 extends o9{constructor(J=new q8,Q=new WQ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let $=0,W=K.length;$<W;$++){let X=K[$].name||String($);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=$}}}}getVertexPosition(J,Q){let Z=this.geometry,K=Z.attributes.position,$=Z.morphAttributes.position,W=Z.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if($&&X){j7.set(0,0,0);for(let Y=0,H=$.length;Y<H;Y++){let N=X[Y],q=$[Y];if(N===0)continue;if(LZ.fromBufferAttribute(q,J),W)j7.addScaledVector(LZ,N);else j7.addScaledVector(LZ.sub(Q),N)}Q.add(j7)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.material,$=this.matrixWorld;if(K===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(_7.copy(Z.boundingSphere),_7.applyMatrix4($),AJ.copy(J.ray).recast(J.near),_7.containsPoint(AJ.origin)===!1){if(AJ.intersectSphere(_7,FW)===null)return;if(AJ.origin.distanceToSquared(FW)>(J.far-J.near)**2)return}if(DW.copy($).invert(),AJ.copy(J.ray).applyMatrix4(DW),Z.boundingBox!==null){if(AJ.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,AJ)}_computeIntersections(J,Q,Z){let K,$=this.geometry,W=this.material,X=$.index,Y=$.attributes.position,H=$.attributes.uv,N=$.attributes.uv1,q=$.attributes.normal,U=$.groups,G=$.drawRange;if(X!==null)if(Array.isArray(W))for(let D=0,O=U.length;D<O;D++){let L=U[D],F=W[L.materialIndex],E=Math.max(L.start,G.start),R=Math.min(X.count,Math.min(L.start+L.count,G.start+G.count));for(let k=E,V=R;k<V;k+=3){let A=X.getX(k),P=X.getX(k+1),_=X.getX(k+2);if(K=y7(this,F,J,Z,H,N,q,A,P,_),K)K.faceIndex=Math.floor(k/3),K.face.materialIndex=L.materialIndex,Q.push(K)}}else{let D=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let L=D,F=O;L<F;L+=3){let E=X.getX(L),R=X.getX(L+1),k=X.getX(L+2);if(K=y7(this,W,J,Z,H,N,q,E,R,k),K)K.faceIndex=Math.floor(L/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(W))for(let D=0,O=U.length;D<O;D++){let L=U[D],F=W[L.materialIndex],E=Math.max(L.start,G.start),R=Math.min(Y.count,Math.min(L.start+L.count,G.start+G.count));for(let k=E,V=R;k<V;k+=3){let A=k,P=k+1,_=k+2;if(K=y7(this,F,J,Z,H,N,q,A,P,_),K)K.faceIndex=Math.floor(k/3),K.face.materialIndex=L.materialIndex,Q.push(K)}}else{let D=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let L=D,F=O;L<F;L+=3){let E=L,R=L+1,k=L+2;if(K=y7(this,W,J,Z,H,N,q,E,R,k),K)K.faceIndex=Math.floor(L/3),Q.push(K)}}}}function mH(J,Q,Z,K,$,W,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,W,$,!0,Y);else H=K.intersectTriangle($,W,X,Q.side===0,Y);if(H===null)return null;v7.copy(Y),v7.applyMatrix4(J.matrixWorld);let N=Z.ray.origin.distanceTo(v7);if(N<Z.near||N>Z.far)return null;return{distance:N,point:v7.clone(),object:J}}function y7(J,Q,Z,K,$,W,X,Y,H,N){J.getVertexPosition(Y,T7),J.getVertexPosition(H,w7),J.getVertexPosition(N,S7);let q=mH(J,Q,Z,K,T7,w7,S7,OW);if(q){let U=new x;if(U8.getBarycoord(OW,T7,w7,S7,U),$)q.uv=U8.getInterpolatedAttribute($,Y,H,N,U,new x0);if(W)q.uv1=U8.getInterpolatedAttribute(W,Y,H,N,U,new x0);if(X){if(q.normal=U8.getInterpolatedAttribute(X,Y,H,N,U,new x),q.normal.dot(K.direction)>0)q.normal.multiplyScalar(-1)}let G={a:Y,b:H,c:N,normal:new x,materialIndex:0};U8.getNormal(T7,w7,S7,G.normal),q.face=G,q.barycoord=U}return q}class PK extends x9{constructor(J=null,Q=1,Z=1,K,$,W,X,Y,H=1003,N=1003,q,U){super(null,W,X,Y,H,N,K,$,q,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var zJ=new t8,dH=new x0(0.5,0.5),b7=new x;class XQ{constructor(J=new H8,Q=new H8,Z=new H8,K=new H8,$=new H8,W=new H8){this.planes=[J,Q,Z,K,$,W]}set(J,Q,Z,K,$,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy(Z),X[3].copy(K),X[4].copy($),X[5].copy(W),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let K=this.planes,$=J.elements,W=$[0],X=$[1],Y=$[2],H=$[3],N=$[4],q=$[5],U=$[6],G=$[7],D=$[8],O=$[9],L=$[10],F=$[11],E=$[12],R=$[13],k=$[14],V=$[15];if(K[0].setComponents(H-W,G-N,F-D,V-E).normalize(),K[1].setComponents(H+W,G+N,F+D,V+E).normalize(),K[2].setComponents(H+X,G+q,F+O,V+R).normalize(),K[3].setComponents(H-X,G-q,F-O,V-R).normalize(),Z)K[4].setComponents(Y,U,L,k).normalize(),K[5].setComponents(H-Y,G-U,F-L,V-k).normalize();else if(K[4].setComponents(H-Y,G-U,F-L,V-k).normalize(),Q===2000)K[5].setComponents(H+Y,G+U,F+L,V+k).normalize();else if(Q===2001)K[5].setComponents(Y,U,L,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();zJ.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();zJ.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(zJ)}intersectsSprite(J){zJ.center.set(0,0,0);let Q=dH.distanceTo(J.center);return zJ.radius=0.7071067811865476+Q,zJ.applyMatrix4(J.matrixWorld),this.intersectsSphere(zJ)}intersectsSphere(J){let Q=this.planes,Z=J.center,K=-J.radius;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(Z)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let K=Q[Z];if(b7.x=K.normal.x>0?J.max.x:J.min.x,b7.y=K.normal.y>0?J.max.y:J.min.y,b7.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(b7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class YQ extends x9{constructor(J=[],Q=301,Z,K,$,W,X,Y,H,N){super(J,Q,Z,K,$,W,X,Y,H,N);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class vJ extends x9{constructor(J,Q,Z=1014,K,$,W,X=1003,Y=1003,H,N=1026,q=1){if(N!==1026&&N!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let U={width:J,height:Q,depth:q};super(U,K,$,W,X,Y,N,Z,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new a6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class kK extends vJ{constructor(J,Q=1014,Z=301,K,$,W=1003,X=1003,Y,H=1026){let N={width:J,height:J,depth:1},q=[N,N,N,N,N,N];super(J,J,Q,Z,K,$,W,X,Y,H);this.image=q,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class HQ extends x9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class V6 extends q8{constructor(J=1,Q=1,Z=1,K=1,$=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:K,heightSegments:$,depthSegments:W};let X=this;K=Math.floor(K),$=Math.floor($),W=Math.floor(W);let Y=[],H=[],N=[],q=[],U=0,G=0;D("z","y","x",-1,-1,Z,Q,J,W,$,0),D("z","y","x",1,-1,Z,Q,-J,W,$,1),D("x","z","y",1,1,J,Z,Q,K,W,2),D("x","z","y",1,-1,J,Z,-Q,K,W,3),D("x","y","z",1,-1,J,Q,Z,K,$,4),D("x","y","z",-1,-1,J,Q,-Z,K,$,5),this.setIndex(Y),this.setAttribute("position",new c9(H,3)),this.setAttribute("normal",new c9(N,3)),this.setAttribute("uv",new c9(q,2));function D(O,L,F,E,R,k,V,A,P,_,I){let B=k/P,p=V/_,j=k/2,y=V/2,m=A/2,T=P+1,w=_+1,n=0,u=0,$0=new x;for(let i=0;i<w;i++){let Z0=i*p-y;for(let X0=0;X0<T;X0++){let w0=X0*B-j;$0[O]=w0*E,$0[L]=Z0*R,$0[F]=m,H.push($0.x,$0.y,$0.z),$0[O]=0,$0[L]=0,$0[F]=A>0?1:-1,N.push($0.x,$0.y,$0.z),q.push(X0/P),q.push(1-i/_),n+=1}}for(let i=0;i<_;i++)for(let Z0=0;Z0<P;Z0++){let X0=U+Z0+T*i,w0=U+Z0+T*(i+1),T0=U+(Z0+1)+T*(i+1),n0=U+(Z0+1)+T*i;Y.push(X0,w0,n0),Y.push(w0,T0,n0),u+=6}X.addGroup(G,u,I),G+=u,U+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new V6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class J7 extends q8{constructor(J=1,Q=1,Z=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:K};let $=J/2,W=Q/2,X=Math.floor(Z),Y=Math.floor(K),H=X+1,N=Y+1,q=J/X,U=Q/Y,G=[],D=[],O=[],L=[];for(let F=0;F<N;F++){let E=F*U-W;for(let R=0;R<H;R++){let k=R*q-$;D.push(k,-E,0),O.push(0,0,1),L.push(R/X),L.push(1-F/Y)}}for(let F=0;F<Y;F++)for(let E=0;E<X;E++){let R=E+H*F,k=E+H*(F+1),V=E+1+H*(F+1),A=E+1+H*F;G.push(R,k,A),G.push(k,V,A)}this.setIndex(G),this.setAttribute("position",new c9(D,3)),this.setAttribute("normal",new c9(O,3)),this.setAttribute("uv",new c9(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new J7(J.width,J.height,J.widthSegments,J.heightSegments)}}class UQ extends q8{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],Z=new Set,K=new x,$=new x;if(J.index!==null){let W=J.attributes.position,X=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:X.count,materialIndex:0}];for(let H=0,N=Y.length;H<N;++H){let q=Y[H],U=q.start,G=q.count;for(let D=U,O=U+G;D<O;D+=3)for(let L=0;L<3;L++){let F=X.getX(D+L),E=X.getX(D+(L+1)%3);if(K.fromBufferAttribute(W,F),$.fromBufferAttribute(W,E),RW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}}else{let W=J.attributes.position;for(let X=0,Y=W.count/3;X<Y;X++)for(let H=0;H<3;H++){let N=3*X+H,q=3*X+(H+1)%3;if(K.fromBufferAttribute(W,N),$.fromBufferAttribute(W,q),RW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}this.setAttribute("position",new c9(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function RW(J,Q,Z){let K=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,$=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if(Z.has(K)===!0||Z.has($)===!0)return!1;else return Z.add(K),Z.add($),!0}function yJ(J){let Q={};for(let Z in J){Q[Z]={};for(let K in J[Z]){let $=J[Z][K];if(MW($))if($.isRenderTargetTexture)v0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][K]=null;else Q[Z][K]=$.clone();else if(Array.isArray($))if(MW($[0])){let W=[];for(let X=0,Y=$.length;X<Y;X++)W[X]=$[X].clone();Q[Z][K]=W}else Q[Z][K]=$.slice();else Q[Z][K]=$}}return Q}function p9(J){let Q={};for(let Z=0;Z<J.length;Z++){let K=yJ(J[Z]);for(let $ in K)Q[$]=K[$]}return Q}function MW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function uH(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function _K(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return o0.workingColorSpace}var Q7={clone:yJ,merge:p9},lH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cH=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class e9 extends I6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lH,this.fragmentShader=cH,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=yJ(J.uniforms),this.uniformsGroups=uH(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let W=this.uniforms[K].value;if(W&&W.isTexture)Q.uniforms[K]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[K]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[K]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[K]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[K]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[K]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[K]={type:"m4",value:W.toArray()};else Q.uniforms[K]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let K in this.extensions)if(this.extensions[K]===!0)Z[K]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let Z in J.uniforms){let K=J.uniforms[Z];switch(this.uniforms[Z]={},K.type){case"t":this.uniforms[Z].value=Q[K.value]||null;break;case"c":this.uniforms[Z].value=new e0().setHex(K.value);break;case"v2":this.uniforms[Z].value=new x0().fromArray(K.value);break;case"v3":this.uniforms[Z].value=new x().fromArray(K.value);break;case"v4":this.uniforms[Z].value=new Y9().fromArray(K.value);break;case"m3":this.uniforms[Z].value=new g0().fromArray(K.value);break;case"m4":this.uniforms[Z].value=new M9().fromArray(K.value);break;default:this.uniforms[Z].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Z in J.extensions)this.extensions[Z]=J.extensions[Z];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class TK extends e9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wK extends I6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class SK extends I6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function Y6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function IZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class bJ{constructor(J,Q,Z,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,K=Q[Z],$=Q[Z-1];Z:{J:{let W;Q:{K:if(!(J<K)){for(let X=Z+2;;){if(K===void 0){if(J<$)break K;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===X)break;if($=K,K=Q[++Z],J<K)break J}W=Q.length;break Q}if(!(J>=$)){let X=Q[1];if(J<X)Z=2,$=X;for(let Y=Z-2;;){if($===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if(K=$,$=Q[--Z-1],J>=$)break J}W=Z,Z=0;break Q}break Z}while(Z<W){let X=Z+W>>>1;if(J<Q[X])W=X;else Z=X+1}if(K=Q[Z],$=Q[Z-1],$===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,$,K)}return this.interpolate_(Z,$,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,K=this.valueSize,$=J*K;for(let W=0;W!==K;++W)Q[W]=Z[$+W];return Q}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class jK extends bJ{constructor(J,Q,Z,K){super(J,Q,Z,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let K=this.parameterPositions,$=J-2,W=J+1,X=K[$],Y=K[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:$=J,X=2*Q-Z;break;case 2402:$=K.length-2,X=Q+K[$]-K[$+1];break;default:$=J,X=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*Z-Q;break;case 2402:W=1,Y=Z+K[1]-K[0];break;default:W=J-1,Y=Q}let H=(Z-Q)*0.5,N=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-Z),this._offsetPrev=$*N,this._offsetNext=W*N}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this._offsetPrev,q=this._offsetNext,U=this._weightPrev,G=this._weightNext,D=(Z-Q)/(K-Q),O=D*D,L=O*D,F=-U*L+2*U*O-U*D,E=(1+U)*L+(-1.5-2*U)*O+(-0.5+U)*D+1,R=(-1-G)*L+(1.5+G)*O+0.5*D,k=G*L-G*O;for(let V=0;V!==X;++V)$[V]=F*W[N+V]+E*W[H+V]+R*W[Y+V]+k*W[q+V];return $}}class vK extends bJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=(Z-Q)/(K-Q),q=1-N;for(let U=0;U!==X;++U)$[U]=W[H+U]*q+W[Y+U]*N;return $}}class yK extends bJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class bK extends bJ{interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this.inTangents,q=this.outTangents;if(!N||!q){let D=(Z-Q)/(K-Q),O=1-D;for(let L=0;L!==X;++L)$[L]=W[H+L]*O+W[Y+L]*D;return $}let U=X*2,G=J-1;for(let D=0;D!==X;++D){let O=W[H+D],L=W[Y+D],F=G*U+D*2,E=q[F],R=q[F+1],k=J*U+D*2,V=N[k],A=N[k+1],P=sH(Z,Q,E,V,K);$[D]=AX(P,O,R,A,L)}return $}}function AX(J,Q,Z,K,$){let W=1-J;return W*W*W*Q+3*W*W*J*Z+3*W*J*J*K+J*J*J*$}function nH(J,Q,Z,K,$){let W=1-J;return 3*W*W*(Z-Q)+6*W*J*(K-Z)+3*J*J*($-K)}function sH(J,Q,Z,K,$){let W=(J-Q)/($-Q);for(let X=0;X<8;X++){let Y=AX(W,Q,Z,K,$)-J;if(Math.abs(Y)<0.0000000001)break;let H=nH(W,Q,Z,K,$);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class E8{constructor(J,Q,Z,K){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=Y6(Q,this.TimeBufferType),this.values=Y6(Z,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:Y6(J.times,Array),values:Y6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)Z.interpolation=K;if(IZ(J.settings))Z.settings={inTangents:Y6(J.settings.inTangents,Array),outTangents:Y6(J.settings.outTangents,Array)}}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new yK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new vK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new jK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new bK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return v0("KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]*=J;if(IZ(this.settings))LW(this.settings.inTangents,J),LW(this.settings.outTangents,J)}return this}trim(J,Q){let Z=this.times,K=Z.length,$=0,W=K-1;while($!==K&&Z[$]<J)++$;while(W!==-1&&Z[W]>Q)--W;if(++W,$!==0||W!==K){if($>=W)W=Math.max(W,1),$=W-1;let X=this.getValueSize();this.times=Z.slice($,W),this.values=this.values.slice($*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)f0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,K=this.values,$=Z.length;if($===0)f0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==$;X++){let Y=Z[X];if(typeof Y==="number"&&isNaN(Y)){f0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){f0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(K!==void 0){if(HH(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){f0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),K=this.getInterpolation()===2302,$=J.length-1,W=1;for(let X=1;X<$;++X){let Y=!1,H=J[X],N=J[X+1];if(H!==N&&(X!==1||H!==J[0]))if(!K){let q=X*Z,U=q-Z,G=q+Z;for(let D=0;D!==Z;++D){let O=Q[q+D];if(O!==Q[U+D]||O!==Q[G+D]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let q=X*Z,U=W*Z;for(let G=0;G!==Z;++G)Q[U+G]=Q[q+G]}++W}}if($>0){J[W]=J[$];for(let X=$*Z,Y=W*Z,H=0;H!==Z;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);if(K.createInterpolant=this.createInterpolant,IZ(this.settings))K.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return K}}function LW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]*=Q}E8.prototype.ValueTypeName="";E8.prototype.TimeBufferType=Float32Array;E8.prototype.ValueBufferType=Float32Array;E8.prototype.DefaultInterpolation=2301;class fJ extends E8{constructor(J,Q,Z){super(J,Q,Z)}}fJ.prototype.ValueTypeName="bool";fJ.prototype.ValueBufferType=Array;fJ.prototype.DefaultInterpolation=2300;fJ.prototype.InterpolantFactoryMethodLinear=void 0;fJ.prototype.InterpolantFactoryMethodSmooth=void 0;class fK extends E8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}fK.prototype.ValueTypeName="color";class hK extends E8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}hK.prototype.ValueTypeName="number";class xK extends bJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=(Z-Q)/(K-Q),H=J*X;for(let N=H+X;H!==N;H+=4)t9.slerpFlat($,0,W,H-X,W,H,Y);return $}}class NQ extends E8{constructor(J,Q,Z,K){super(J,Q,Z,K)}InterpolantFactoryMethodLinear(J){return new xK(this.times,this.values,this.getValueSize(),J)}}NQ.prototype.ValueTypeName="quaternion";NQ.prototype.InterpolantFactoryMethodSmooth=void 0;class hJ extends E8{constructor(J,Q,Z){super(J,Q,Z)}}hJ.prototype.ValueTypeName="string";hJ.prototype.ValueBufferType=Array;hJ.prototype.DefaultInterpolation=2300;hJ.prototype.InterpolantFactoryMethodLinear=void 0;hJ.prototype.InterpolantFactoryMethodSmooth=void 0;class gK extends E8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}gK.prototype.ValueTypeName="vector";class pK{constructor(J,Q,Z){let K=this,$=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this._abortController=null,this.itemStart=function(N){if(X++,$===!1){if(K.onStart!==void 0)K.onStart(N,W,X)}$=!0},this.itemEnd=function(N){if(W++,K.onProgress!==void 0)K.onProgress(N,W,X);if(W===X){if($=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(N){if(K.onError!==void 0)K.onError(N)},this.resolveURL=function(N){if(N=N.normalize("NFC"),Y)return Y(N);return N},this.setURLModifier=function(N){return Y=N,this},this.addHandler=function(N,q){return H.push(N,q),this},this.removeHandler=function(N){let q=H.indexOf(N);if(q!==-1)H.splice(q,2);return this},this.getHandler=function(N){for(let q=0,U=H.length;q<U;q+=2){let G=H[q],D=H[q+1];if(G.global)G.lastIndex=0;if(G.test(N))return D}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var zX=new pK;class mK{constructor(J){if(this.manager=J!==void 0?J:zX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let Z=this;return new Promise(function(K,$){Z.load(J,K,Q,$)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}mK.DEFAULT_MATERIAL_NAME="__DEFAULT";var f7=new x,h7=new t9,k8=new x;class GQ extends o9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new M9,this.projectionMatrix=new M9,this.projectionMatrixInverse=new M9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(f7,h7,k8),k8.x===1&&k8.y===1&&k8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(f7,h7,k8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,Z=!1){if(super.updateWorldMatrix(J,Q,Z),this.matrixWorld.decompose(f7,h7,k8),k8.x===1&&k8.y===1&&k8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(f7,h7,k8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var GJ=new x,IW=new x0,VW=new x0;class l9 extends GQ{constructor(J=50,Q=1,Z=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=D6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(p6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return D6*2*Math.atan(Math.tan(p6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){GJ.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(GJ.x,GJ.y).multiplyScalar(-J/GJ.z),GJ.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(GJ.x,GJ.y).multiplyScalar(-J/GJ.z)}getViewSize(J,Q){return this.getViewBounds(J,IW,VW),Q.subVectors(VW,IW)}setViewOffset(J,Q,Z,K,$,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(p6*0.5*this.fov)/this.zoom,Z=2*Q,K=this.aspect*Z,$=-0.5*K,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;$+=W.offsetX*K/Y,Q-=W.offsetY*Z/H,K*=W.width/Y,Z*=W.height/H}let X=this.filmOffset;if(X!==0)$+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective($,$+K,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class qQ extends GQ{constructor(J=-1,Q=1,Z=1,K=-1,$=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=K,this.near=$,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,K,$,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,K=(this.top+this.bottom)/2,$=Z-J,W=Z+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,N=(this.top-this.bottom)/this.view.fullHeight/this.zoom;$+=H*this.view.offsetX,W=$+H*this.view.width,X-=N*this.view.offsetY,Y=X-N*this.view.height}this.projectionMatrix.makeOrthographic($,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class EQ extends q8{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var H6=-90,U6=1;class dK extends o9{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new l9(H6,U6,J,Q);K.layers=this.layers,this.add(K);let $=new l9(H6,U6,J,Q);$.layers=this.layers,this.add($);let W=new l9(H6,U6,J,Q);W.layers=this.layers,this.add(W);let X=new l9(H6,U6,J,Q);X.layers=this.layers,this.add(X);let Y=new l9(H6,U6,J,Q);Y.layers=this.layers,this.add(Y);let H=new l9(H6,U6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,K,$,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),$.up.set(0,0,-1),$.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),$.up.set(0,0,1),$.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[$,W,X,Y,H,N]=this.children,q=J.getRenderTarget(),U=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),D=J.xr.enabled;J.xr.enabled=!1;let O=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1;let L=!1;if(J.isWebGLRenderer===!0)L=J.state.buffers.depth.getReversed();else L=J.reversedDepthBuffer;if(J.setRenderTarget(Z,0,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,$),J.setRenderTarget(Z,1,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget(Z,2,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget(Z,3,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget(Z,4,K),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),Z.texture.generateMipmaps=O,J.setRenderTarget(Z,5,K),L&&J.autoClear===!1)J.clearDepth();J.render(Q,N),J.setRenderTarget(q,U,G),J.xr.enabled=D,Z.texture.needsPMREMUpdate=!0}}class uK extends l9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var lK="\\[\\]\\.:\\/",iH=new RegExp("["+lK+"]","g"),cK="[^"+lK+"]",oH="[^"+lK.replace("\\.","")+"]",aH=/((?:WC+[\/:])*)/.source.replace("WC",cK),rH=/(WCOD+)?/.source.replace("WCOD",oH),tH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cK),eH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cK),JU=new RegExp("^"+aH+rH+tH+eH+"$"),QU=["material","materials","bones","map"];class PX{constructor(J,Q,Z){let K=Z||X9.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,K=this._bindings[Z];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let K=this._targetGroup.nCachedObjects_,$=Z.length;K!==$;++K)Z[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class X9{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||X9.parseTrackName(Q),this.node=X9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new X9(J,Q,Z);else return new X9.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(iH,"")}static parseTrackName(J){let Q=JU.exec(J);if(Q===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let $=Z.nodeName.substring(K+1);if(QU.indexOf($)!==-1)Z.nodeName=Z.nodeName.substring(0,K),Z.objectName=$}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function($){for(let W=0;W<$.length;W++){let X=$[W];if(X.name===Q||X.uuid===Q)return X;let Y=Z(X.children);if(Y)return Y}return null},K=Z(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)J[Q++]=Z[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,K=Q.propertyName,$=Q.propertyIndex;if(!J)J=X9.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){v0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let H=Q.objectIndex;switch(Z){case"materials":if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){f0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){f0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let N=0;N<J.length;N++)if(J[N].name===H){H=N;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){f0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){f0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(H!==void 0){if(J[H]===void 0){f0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[K];if(W===void 0){let H=Q.nodeName;f0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if($!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[$]!==void 0)$=J.morphTargetDictionary[$]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=$}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}X9.Composite=PX;X9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};X9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};X9.prototype.GetterByBindingType=[X9.prototype._getValue_direct,X9.prototype._getValue_array,X9.prototype._getValue_arrayElement,X9.prototype._getValue_toArray];X9.prototype.SetterByBindingTypeAndVersioning=[[X9.prototype._setValue_direct,X9.prototype._setValue_direct_setNeedsUpdate,X9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_array,X9.prototype._setValue_array_setNeedsUpdate,X9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_arrayElement,X9.prototype._setValue_arrayElement_setNeedsUpdate,X9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[X9.prototype._setValue_fromArray,X9.prototype._setValue_fromArray_setNeedsUpdate,X9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iE=new Float32Array(1);class y8 extends zK{constructor(J,Q,Z=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class Z7{constructor(J=1,Q=0,Z=0){this.radius=J,this.phi=Q,this.theta=Z}set(J,Q,Z){return this.radius=J,this.phi=Q,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=p0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){if(this.radius=Math.sqrt(J*J+Q*Q+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(p0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class nK{static{nK.prototype.isMatrix2=!0}constructor(J,Q,Z,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,K){let $=this.elements;return $[0]=J,$[2]=Q,$[1]=Z,$[3]=K,this}}var CW=new x,x7=new x,N6=new x,G6=new x,VZ=new x,ZU=new x,KU=new x;class DQ{constructor(J=new x,Q=new x){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){CW.subVectors(J,this.start),x7.subVectors(this.end,this.start);let Z=x7.dot(x7);if(Z===0)return 0;let $=x7.dot(CW)/Z;if(Q)$=p0($,0,1);return $}closestPointToPoint(J,Q,Z){let K=this.closestPointToPointParameter(J,Q);return this.delta(Z).multiplyScalar(K).add(this.start)}distanceSqToLine3(J,Q=ZU,Z=KU){let $,W,X=this.start,Y=J.start,H=this.end,N=J.end;N6.subVectors(H,X),G6.subVectors(N,Y),VZ.subVectors(X,Y);let q=N6.dot(N6),U=G6.dot(G6),G=G6.dot(VZ);if(q<=0.00000000000000010000000000000001&&U<=0.00000000000000010000000000000001)return Q.copy(X),Z.copy(Y),Q.sub(Z),Q.dot(Q);if(q<=0.00000000000000010000000000000001)$=0,W=G/U,W=p0(W,0,1);else{let D=N6.dot(VZ);if(U<=0.00000000000000010000000000000001)W=0,$=p0(-D/q,0,1);else{let O=N6.dot(G6),L=q*U-O*O;if(L!==0)$=p0((O*G-D*U)/L,0,1);else $=0;if(W=(O*$+G)/U,W<0)W=0,$=p0(-D/q,0,1);else if(W>1)W=1,$=p0((O-D)/q,0,1)}}return Q.copy(X).addScaledVector(N6,$),Z.copy(Y).addScaledVector(G6,W),Q.distanceToSquared(Z)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class FQ extends v8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function sK(J,Q,Z,K){let $=$U(K);switch(Z){case 1021:return J*Q;case 1028:return J*Q/$.components*$.byteLength;case 1029:return J*Q/$.components*$.byteLength;case 1030:return J*Q*2/$.components*$.byteLength;case 1031:return J*Q*2/$.components*$.byteLength;case 1022:return J*Q*3/$.components*$.byteLength;case 1023:return J*Q*4/$.components*$.byteLength;case 1033:return J*Q*4/$.components*$.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function $U(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window!=="undefined")if(window.__THREE__)v0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function iX(){let J=null,Q=!1,Z=null,K=null;function $(W,X){K=J.requestAnimationFrame($),Z(W,X)}return{start:function(){if(Q===!0)return;if(Z===null)return;if(J===null)return;K=J.requestAnimationFrame($),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(W){Z=W},setContext:function(W){J=W}}}function WU(J){let Q=new WeakMap;function Z(Y,H){let{array:N,usage:q}=Y,U=N.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,N,q),Y.onUploadCallback();let D;if(N instanceof Float32Array)D=J.FLOAT;else if(typeof Float16Array!=="undefined"&&N instanceof Float16Array)D=J.HALF_FLOAT;else if(N instanceof Uint16Array)if(Y.isFloat16BufferAttribute)D=J.HALF_FLOAT;else D=J.UNSIGNED_SHORT;else if(N instanceof Int16Array)D=J.SHORT;else if(N instanceof Uint32Array)D=J.UNSIGNED_INT;else if(N instanceof Int32Array)D=J.INT;else if(N instanceof Int8Array)D=J.BYTE;else if(N instanceof Uint8Array)D=J.UNSIGNED_BYTE;else if(N instanceof Uint8ClampedArray)D=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+N);return{buffer:G,type:D,bytesPerElement:N.BYTES_PER_ELEMENT,version:Y.version,size:U}}function K(Y,H,N){let{array:q,updateRanges:U}=H;if(J.bindBuffer(N,Y),U.length===0)J.bufferSubData(N,0,q);else{U.sort((D,O)=>D.start-O.start);let G=0;for(let D=1;D<U.length;D++){let O=U[G],L=U[D];if(L.start<=O.start+O.count+1)O.count=Math.max(O.count,L.start+L.count-O.start);else++G,U[G]=L}U.length=G+1;for(let D=0,O=U.length;D<O;D++){let L=U[D];J.bufferSubData(N,L.start*q.BYTES_PER_ELEMENT,q,L.start,L.count)}H.clearUpdateRanges()}H.onUploadCallback()}function $(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let q=Q.get(Y);if(!q||q.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let N=Q.get(Y);if(N===void 0)Q.set(Y,Z(Y,H));else if(N.version<Y.version){if(N.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(N.buffer,Y,H),N.version=Y.version}}return{get:$,remove:W,update:X}}var XU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YU=`#ifdef USE_ALPHAHASH
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
#endif`,HU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qU=`#ifdef USE_AOMAP
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
#endif`,DU=`#ifdef USE_BATCHING
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
#endif`,FU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LU=`#ifdef USE_IRIDESCENCE
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
#endif`,IU=`#ifdef USE_BUMPMAP
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
#endif`,VU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_U=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,TU=`#define PI 3.141592653589793
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
} // validated`,wU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SU=`vec3 transformedNormal = objectNormal;
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
#endif`,jU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fU="gl_FragColor = linearToOutputTexel( gl_FragColor );",hU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xU=`#ifdef USE_ENVMAP
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
#endif`,gU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pU=`#ifdef USE_ENVMAP
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
#endif`,mU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dU=`#ifdef USE_ENVMAP
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
#endif`,uU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sU=`#ifdef USE_GRADIENTMAP
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
}`,iU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rU=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tU=`#ifdef USE_ENVMAP
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
#endif`,eU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KN=`PhysicalMaterial material;
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
#endif`,$N=`uniform sampler2D dfgLUT;
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
}`,WN=`
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
#endif`,XN=`#if defined( RE_IndirectDiffuse )
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
#endif`,YN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HN=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,UN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ON=`#if defined( USE_POINTS_UV )
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
#endif`,RN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CN=`#ifdef USE_MORPHTARGETS
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
#endif`,BN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_N=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,TN=`#ifdef USE_NORMALMAP
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
#endif`,wN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cN=`float getShadowMask() {
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
}`,nN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sN=`#ifdef USE_SKINNING
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
#endif`,iN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oN=`#ifdef USE_SKINNING
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
#endif`,aN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JG=`#ifdef USE_TRANSMISSION
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
#endif`,QG=`#ifdef USE_TRANSMISSION
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
#endif`,ZG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$G=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,XG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YG=`uniform sampler2D t2D;
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
}`,HG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UG=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qG=`#include <common>
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
}`,DG=`#define DISTANCE
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
}`,FG=`#define DISTANCE
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
}`,OG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MG=`uniform float scale;
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
}`,LG=`uniform vec3 diffuse;
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
}`,IG=`#include <common>
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
}`,VG=`uniform vec3 diffuse;
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
}`,CG=`#define LAMBERT
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
}`,BG=`#define LAMBERT
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
}`,AG=`#define MATCAP
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
}`,zG=`#define MATCAP
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
}`,PG=`#define NORMAL
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
}`,kG=`#define NORMAL
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
}`,_G=`#define PHONG
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
}`,TG=`#define PHONG
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
}`,wG=`#define STANDARD
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
}`,SG=`#define STANDARD
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
}`,jG=`#define TOON
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
}`,vG=`#define TOON
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
}`,yG=`uniform float size;
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
}`,bG=`uniform vec3 diffuse;
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
}`,fG=`#include <common>
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
}`,hG=`uniform vec3 color;
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
}`,xG=`uniform float rotation;
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
}`,gG=`uniform vec3 diffuse;
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
}`,c0={alphahash_fragment:XU,alphahash_pars_fragment:YU,alphamap_fragment:HU,alphamap_pars_fragment:UU,alphatest_fragment:NU,alphatest_pars_fragment:GU,aomap_fragment:qU,aomap_pars_fragment:EU,batching_pars_vertex:DU,batching_vertex:FU,begin_vertex:OU,beginnormal_vertex:RU,bsdfs:MU,iridescence_fragment:LU,bumpmap_pars_fragment:IU,clipping_planes_fragment:VU,clipping_planes_pars_fragment:CU,clipping_planes_pars_vertex:BU,clipping_planes_vertex:AU,color_fragment:zU,color_pars_fragment:PU,color_pars_vertex:kU,color_vertex:_U,common:TU,cube_uv_reflection_fragment:wU,defaultnormal_vertex:SU,displacementmap_pars_vertex:jU,displacementmap_vertex:vU,emissivemap_fragment:yU,emissivemap_pars_fragment:bU,colorspace_fragment:fU,colorspace_pars_fragment:hU,envmap_fragment:xU,envmap_common_pars_fragment:gU,envmap_pars_fragment:pU,envmap_pars_vertex:mU,envmap_physical_pars_fragment:tU,envmap_vertex:dU,fog_vertex:uU,fog_pars_vertex:lU,fog_fragment:cU,fog_pars_fragment:nU,gradientmap_pars_fragment:sU,lightmap_pars_fragment:iU,lights_lambert_fragment:oU,lights_lambert_pars_fragment:aU,lights_pars_begin:rU,lights_toon_fragment:eU,lights_toon_pars_fragment:JN,lights_phong_fragment:QN,lights_phong_pars_fragment:ZN,lights_physical_fragment:KN,lights_physical_pars_fragment:$N,lights_fragment_begin:WN,lights_fragment_maps:XN,lights_fragment_end:YN,lightprobes_pars_fragment:HN,logdepthbuf_fragment:UN,logdepthbuf_pars_fragment:NN,logdepthbuf_pars_vertex:GN,logdepthbuf_vertex:qN,map_fragment:EN,map_pars_fragment:DN,map_particle_fragment:FN,map_particle_pars_fragment:ON,metalnessmap_fragment:RN,metalnessmap_pars_fragment:MN,morphinstance_vertex:LN,morphcolor_vertex:IN,morphnormal_vertex:VN,morphtarget_pars_vertex:CN,morphtarget_vertex:BN,normal_fragment_begin:AN,normal_fragment_maps:zN,normal_pars_fragment:PN,normal_pars_vertex:kN,normal_vertex:_N,normalmap_pars_fragment:TN,clearcoat_normal_fragment_begin:wN,clearcoat_normal_fragment_maps:SN,clearcoat_pars_fragment:jN,iridescence_pars_fragment:vN,opaque_fragment:yN,packing:bN,premultiplied_alpha_fragment:fN,project_vertex:hN,dithering_fragment:xN,dithering_pars_fragment:gN,roughnessmap_fragment:pN,roughnessmap_pars_fragment:mN,shadowmap_pars_fragment:dN,shadowmap_pars_vertex:uN,shadowmap_vertex:lN,shadowmask_pars_fragment:cN,skinbase_vertex:nN,skinning_pars_vertex:sN,skinning_vertex:iN,skinnormal_vertex:oN,specularmap_fragment:aN,specularmap_pars_fragment:rN,tonemapping_fragment:tN,tonemapping_pars_fragment:eN,transmission_fragment:JG,transmission_pars_fragment:QG,uv_pars_fragment:ZG,uv_pars_vertex:KG,uv_vertex:$G,worldpos_vertex:WG,background_vert:XG,background_frag:YG,backgroundCube_vert:HG,backgroundCube_frag:UG,cube_vert:NG,cube_frag:GG,depth_vert:qG,depth_frag:EG,distance_vert:DG,distance_frag:FG,equirect_vert:OG,equirect_frag:RG,linedashed_vert:MG,linedashed_frag:LG,meshbasic_vert:IG,meshbasic_frag:VG,meshlambert_vert:CG,meshlambert_frag:BG,meshmatcap_vert:AG,meshmatcap_frag:zG,meshnormal_vert:PG,meshnormal_frag:kG,meshphong_vert:_G,meshphong_frag:TG,meshphysical_vert:wG,meshphysical_frag:SG,meshtoon_vert:jG,meshtoon_frag:vG,points_vert:yG,points_frag:bG,shadow_vert:fG,shadow_frag:hG,sprite_vert:xG,sprite_frag:gG},G0={common:{diffuse:{value:new e0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new g0}},envmap:{envMap:{value:null},envMapRotation:{value:new g0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new g0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new g0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new g0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new g0},normalScale:{value:new x0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new g0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new g0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new g0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new g0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new e0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new e0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0},uvTransform:{value:new g0}},sprite:{diffuse:{value:new e0(16777215)},opacity:{value:1},center:{value:new x0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new g0},alphaMap:{value:null},alphaMapTransform:{value:new g0},alphaTest:{value:0}}},n9={basic:{uniforms:p9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:c0.meshbasic_vert,fragmentShader:c0.meshbasic_frag},lambert:{uniforms:p9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new e0(0)},envMapIntensity:{value:1}}]),vertexShader:c0.meshlambert_vert,fragmentShader:c0.meshlambert_frag},phong:{uniforms:p9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new e0(0)},specular:{value:new e0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:c0.meshphong_vert,fragmentShader:c0.meshphong_frag},standard:{uniforms:p9([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new e0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag},toon:{uniforms:p9([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new e0(0)}}]),vertexShader:c0.meshtoon_vert,fragmentShader:c0.meshtoon_frag},matcap:{uniforms:p9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:c0.meshmatcap_vert,fragmentShader:c0.meshmatcap_frag},points:{uniforms:p9([G0.points,G0.fog]),vertexShader:c0.points_vert,fragmentShader:c0.points_frag},dashed:{uniforms:p9([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:c0.linedashed_vert,fragmentShader:c0.linedashed_frag},depth:{uniforms:p9([G0.common,G0.displacementmap]),vertexShader:c0.depth_vert,fragmentShader:c0.depth_frag},normal:{uniforms:p9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:c0.meshnormal_vert,fragmentShader:c0.meshnormal_frag},sprite:{uniforms:p9([G0.sprite,G0.fog]),vertexShader:c0.sprite_vert,fragmentShader:c0.sprite_frag},background:{uniforms:{uvTransform:{value:new g0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:c0.background_vert,fragmentShader:c0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new g0}},vertexShader:c0.backgroundCube_vert,fragmentShader:c0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:c0.cube_vert,fragmentShader:c0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:c0.equirect_vert,fragmentShader:c0.equirect_frag},distance:{uniforms:p9([G0.common,G0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:c0.distance_vert,fragmentShader:c0.distance_frag},shadow:{uniforms:p9([G0.lights,G0.fog,{color:{value:new e0(0)},opacity:{value:1}}]),vertexShader:c0.shadow_vert,fragmentShader:c0.shadow_frag}};n9.physical={uniforms:p9([n9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new g0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new g0},clearcoatNormalScale:{value:new x0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new g0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new g0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new g0},sheen:{value:0},sheenColor:{value:new e0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new g0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new g0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new g0},transmissionSamplerSize:{value:new x0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new g0},attenuationDistance:{value:0},attenuationColor:{value:new e0(0)},specularColor:{value:new e0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new g0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new g0},anisotropyVector:{value:new x0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new g0}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag};var OQ={r:0,b:0,g:0},pG=new M9,oX=new g0;oX.set(-1,0,0,0,1,0,0,0,1);function mG(J,Q,Z,K,$,W){let X=new e0(0),Y=$===!0?0:1,H,N,q=null,U=0,G=null;function D(R){let k=R.isScene===!0?R.background:null;if(k&&k.isTexture){let V=R.backgroundBlurriness>0;k=Q.get(k,V)}return k}function O(R){let k=!1,V=D(R);if(V===null)F(X,Y);else if(V&&V.isColor)F(V,1),k=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")Z.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||k)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function L(R,k){let V=D(k);if(V&&(V.isCubeTexture||V.mapping===n6)){if(N===void 0)N=new $8(new V6(1,1,1),new e9({name:"BackgroundCubeMaterial",uniforms:yJ(n9.backgroundCube.uniforms),vertexShader:n9.backgroundCube.vertexShader,fragmentShader:n9.backgroundCube.fragmentShader,side:a9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),N.geometry.deleteAttribute("normal"),N.geometry.deleteAttribute("uv"),N.onBeforeRender=function(A,P,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(N.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(N);if(N.material.uniforms.envMap.value=V,N.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,N.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,N.material.uniforms.backgroundRotation.value.setFromMatrix4(pG.makeRotationFromEuler(k.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)N.material.uniforms.backgroundRotation.value.premultiply(oX);if(N.material.toneMapped=o0.getTransfer(V.colorSpace)!==q9,q!==V||U!==V.version||G!==J.toneMapping)N.material.needsUpdate=!0,q=V,U=V.version,G=J.toneMapping;N.layers.enableAll(),R.unshift(N,N.geometry,N.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new $8(new J7(2,2),new e9({name:"BackgroundMaterial",uniforms:yJ(n9.background.uniforms),vertexShader:n9.background.vertexShader,fragmentShader:n9.background.fragmentShader,side:O6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,H.material.toneMapped=o0.getTransfer(V.colorSpace)!==q9,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),q!==V||U!==V.version||G!==J.toneMapping)H.material.needsUpdate=!0,q=V,U=V.version,G=J.toneMapping;H.layers.enableAll(),R.unshift(H,H.geometry,H.material,0,0,null)}}function F(R,k){R.getRGB(OQ,_K(J)),Z.buffers.color.setClear(OQ.r,OQ.g,OQ.b,k,W)}function E(){if(N!==void 0)N.geometry.dispose(),N.material.dispose(),N=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(R,k=1){X.set(R),Y=k,F(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(R){Y=R,F(X,Y)},render:O,addToRenderList:L,dispose:E}}function dG(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},$=G(null),W=$,X=!1;function Y(j,y,m,T,w){let n=!1,u=U(j,T,m,y);if(W!==u)W=u,N(W.object);if(n=D(j,T,m,w),n)O(j,T,m,w);if(w!==null)Q.update(w,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,V(j,y,m,T),w!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(w).buffer)}}function H(){return J.createVertexArray()}function N(j){return J.bindVertexArray(j)}function q(j){return J.deleteVertexArray(j)}function U(j,y,m,T){let w=T.wireframe===!0,n=K[y.id];if(n===void 0)n={},K[y.id]=n;let u=j.isInstancedMesh===!0?j.id:0,$0=n[u];if($0===void 0)$0={},n[u]=$0;let i=$0[m.id];if(i===void 0)i={},$0[m.id]=i;let Z0=i[w];if(Z0===void 0)Z0=G(H()),i[w]=Z0;return Z0}function G(j){let y=[],m=[],T=[];for(let w=0;w<Z;w++)y[w]=0,m[w]=0,T[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:m,attributeDivisors:T,object:j,attributes:{},index:null}}function D(j,y,m,T){let w=W.attributes,n=y.attributes,u=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=w[i],w0=n[i];if(w0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)w0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)w0=j.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==w0)return!0;if(w0&&X0.data!==w0.data)return!0;u++}if(W.attributesNum!==u)return!0;if(W.index!==T)return!0;return!1}function O(j,y,m,T){let w={},n=y.attributes,u=0,$0=m.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=n[i];if(X0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)X0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)X0=j.instanceColor}let w0={};if(w0.attribute=X0,X0&&X0.data)w0.data=X0.data;w[i]=w0,u++}W.attributes=w,W.attributesNum=u,W.index=T}function L(){let j=W.newAttributes;for(let y=0,m=j.length;y<m;y++)j[y]=0}function F(j){E(j,0)}function E(j,y){let{newAttributes:m,enabledAttributes:T,attributeDivisors:w}=W;if(m[j]=1,T[j]===0)J.enableVertexAttribArray(j),T[j]=1;if(w[j]!==y)J.vertexAttribDivisor(j,y),w[j]=y}function R(){let{newAttributes:j,enabledAttributes:y}=W;for(let m=0,T=y.length;m<T;m++)if(y[m]!==j[m])J.disableVertexAttribArray(m),y[m]=0}function k(j,y,m,T,w,n,u){if(u===!0)J.vertexAttribIPointer(j,y,m,w,n);else J.vertexAttribPointer(j,y,m,T,w,n)}function V(j,y,m,T){L();let w=T.attributes,n=m.getAttributes(),u=y.defaultAttributeValues;for(let $0 in n){let i=n[$0];if(i.location>=0){let Z0=w[$0];if(Z0===void 0){if($0==="instanceMatrix"&&j.instanceMatrix)Z0=j.instanceMatrix;if($0==="instanceColor"&&j.instanceColor)Z0=j.instanceColor}if(Z0!==void 0){let{normalized:X0,itemSize:w0}=Z0,T0=Q.get(Z0);if(T0===void 0)continue;let{buffer:n0,type:u0,bytesPerElement:S}=T0,g=u0===J.INT||u0===J.UNSIGNED_INT||Z0.gpuType===yZ;if(Z0.isInterleavedBufferAttribute){let d=Z0.data,a=d.stride,Q0=Z0.offset;if(d.isInstancedInterleavedBuffer){for(let r=0;r<i.locationSize;r++)E(i.location+r,d.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=d.meshPerAttribute*d.count}else for(let r=0;r<i.locationSize;r++)F(i.location+r);J.bindBuffer(J.ARRAY_BUFFER,n0);for(let r=0;r<i.locationSize;r++)k(i.location+r,w0/i.locationSize,u0,X0,a*S,(Q0+w0/i.locationSize*r)*S,g)}else{if(Z0.isInstancedBufferAttribute){for(let d=0;d<i.locationSize;d++)E(i.location+d,Z0.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let d=0;d<i.locationSize;d++)F(i.location+d);J.bindBuffer(J.ARRAY_BUFFER,n0);for(let d=0;d<i.locationSize;d++)k(i.location+d,w0/i.locationSize,u0,X0,w0*S,w0/i.locationSize*d*S,g)}}else if(u!==void 0){let X0=u[$0];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(i.location,X0);break;case 3:J.vertexAttrib3fv(i.location,X0);break;case 4:J.vertexAttrib4fv(i.location,X0);break;default:J.vertexAttrib1fv(i.location,X0)}}}}R()}function A(){B();for(let j in K){let y=K[j];for(let m in y){let T=y[m];for(let w in T){let n=T[w];for(let u in n)q(n[u].object),delete n[u];delete T[w]}}delete K[j]}}function P(j){if(K[j.id]===void 0)return;let y=K[j.id];for(let m in y){let T=y[m];for(let w in T){let n=T[w];for(let u in n)q(n[u].object),delete n[u];delete T[w]}}delete K[j.id]}function _(j){for(let y in K){let m=K[y];for(let T in m){let w=m[T];if(w[j.id]===void 0)continue;let n=w[j.id];for(let u in n)q(n[u].object),delete n[u];delete w[j.id]}}}function I(j){for(let y in K){let m=K[y],T=j.isInstancedMesh===!0?j.id:0,w=m[T];if(w===void 0)continue;for(let n in w){let u=w[n];for(let $0 in u)q(u[$0].object),delete u[$0];delete w[n]}if(delete m[T],Object.keys(m).length===0)delete K[y]}}function B(){if(p(),X=!0,W===$)return;W=$,N(W.object)}function p(){$.geometry=null,$.program=null,$.wireframe=!1}return{setup:Y,reset:B,resetDefaultState:p,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfObject:I,releaseStatesOfProgram:_,initAttributes:L,enableAttribute:F,disableUnusedAttributes:R}}function uG(J,Q,Z){let K;function $(H){K=H}function W(H,N){J.drawArrays(K,H,N),Z.update(N,K,1)}function X(H,N,q){if(q===0)return;J.drawArraysInstanced(K,H,N,q),Z.update(N,K,q)}function Y(H,N,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,N,0,q);let G=0;for(let D=0;D<q;D++)G+=N[D];Z.update(G,K,1)}this.setMode=$,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function lG(J,Q,Z,K){let $;function W(){if($!==void 0)return $;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");$=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else $=0;return $}function X(_){if(_!==j8&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let I=_===S8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==I8&&_!==r8&&!I&&K.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let N=Z.precision!==void 0?Z.precision:"highp",q=H(N);if(q!==N)v0("WebGLRenderer:",N,"not supported, using",q,"instead."),N=q;let U=Z.logarithmicDepthBuffer===!0,G=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if(Z.reversedDepthBuffer===!0&&G===!1)v0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let D=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),R=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:N,logarithmicDepthBuffer:U,reversedDepthBuffer:G,maxTextures:D,maxVertexTextures:O,maxTextureSize:L,maxCubemapSize:F,maxAttributes:E,maxVertexUniforms:R,maxVaryings:k,maxFragmentUniforms:V,maxSamples:A,samples:P}}function cG(J){let Q=this,Z=null,K=0,$=!1,W=!1,X=new H8,Y=new g0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(U,G){let D=U.length!==0||G||K!==0||$;return $=G,K=U.length,D},this.beginShadows=function(){W=!0,q(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(U,G){Z=q(U,G,0)},this.setState=function(U,G,D){let{clippingPlanes:O,clipIntersection:L,clipShadows:F}=U,E=J.get(U);if(!$||O===null||O.length===0||W&&!F)if(W)q(null);else N();else{let R=W?0:K,k=R*4,V=E.clippingState||null;H.value=V,V=q(O,G,k,D);for(let A=0;A!==k;++A)V[A]=Z[A];E.clippingState=V,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=R}};function N(){if(H.value!==Z)H.value=Z,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function q(U,G,D,O){let L=U!==null?U.length:0,F=null;if(L!==0){if(F=H.value,O!==!0||F===null){let E=D+L*4,R=G.matrixWorldInverse;if(Y.getNormalMatrix(R),F===null||F.length<E)F=new Float32Array(E);for(let k=0,V=D;k!==L;++k,V+=4)X.copy(U[k]).applyMatrix4(R,Y),X.normal.toArray(F,V),F[V+3]=X.constant}H.value=F,H.needsUpdate=!0}return Q.numPlanes=L,Q.numIntersection=0,F}}var B6=4,nG=6,sG=20,iG=256,K7=new qQ,kX=new e0,iK=null,oK=0,aK=0,rK=!1,oG=new x,xJ=new x;class J${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,Z=0.1,K=100,$={}){let{size:W=256,position:X=oG}=$;iK=this._renderer.getRenderTarget(),oK=this._renderer.getActiveCubeFace(),aK=this._renderer.getActiveMipmapLevel(),rK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Z,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=wX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=TX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(iK,oK,aK),this._renderer.xr.enabled=rK,J.scissorTest=!1,C6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===M6||J.mapping===kJ)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);iK=this._renderer.getRenderTarget(),oK=this._renderer.getActiveCubeFace(),aK=this._renderer.getActiveMipmapLevel(),rK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:r9,minFilter:r9,generateMipmaps:!1,type:S8,format:j8,colorSpace:RK,depthBuffer:!1},K=_X(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=_X(J,Q,Z);let{_lodMax:$}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=aG($)),this._blurMaterial=tG($,J,Q),this._ggxMaterial=rG($,J,Q)}return K}_compileMaterial(J){let Q=new $8(new q8,J);this._renderer.compile(Q,K7)}_sceneToCubeUV(J,Q,Z,K,$){let Y=new l9(90,1,Q,Z),H=[1,-1,1,1,1,1],N=[1,1,1,-1,-1,-1],q=this._renderer,U=q.autoClear,G=q.toneMapping;if(q.getClearColor(kX),q.toneMapping=L8,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(K),q.clearDepth(),q.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new $8(new V6,new WQ({name:"PMREM.Background",side:a9,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,L=O.material,F=!1,E=J.background;if(E){if(E.isColor)L.color.copy(E),J.background=null,F=!0}else L.color.copy(kX),F=!0;for(let R=0;R<6;R++){let k=R%3;if(k===0)Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x+N[R],$.y,$.z);else if(k===1)Y.up.set(0,0,H[R]),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y+N[R],$.z);else Y.up.set(0,H[R],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y,$.z+N[R]);let V=this._cubeSize;if(C6(K,k*V,R>2?V:0,V,V),q.setRenderTarget(K),F)q.render(O,Y);q.render(J,Y)}q.toneMapping=G,q.autoClear=U,J.background=E}_textureToCubeUV(J,Q){let Z=this._renderer,K=J.mapping===M6||J.mapping===kJ;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=wX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=TX();let $=K?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=$;let X=$.uniforms;X.envMap.value=J;let Y=this._cubeSize;C6(Q,0,0,3*Y,2*Y),Z.setRenderTarget(Q),Z.render(W,K7)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let $=1;$<K;$++)this._applyGGXFilter(J,$-1,$);Q.autoClear=Z}_applyGGXFilter(J,Q,Z){let K=this._renderer,$=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[Z];X.material=W;let Y=W.uniforms,H=Z/(this._lodMeshes.length-1),N=Q/(this._lodMeshes.length-1),q=Math.sqrt(H*H-N*N),U=H*1.25,G=q*U,{_lodMax:D}=this,O=this._sizeLods[Z],L=3*O*(Z>D-B6?Z-D+B6:0),F=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=D-Q,C6($,L,F,3*O,2*O),K.setRenderTarget($),K.render(X,K7),Y.envMap.value=$.texture,Y.roughness.value=0,Y.mipInt.value=D-Z,C6(J,L,F,3*O,2*O),K.setRenderTarget(J),K.render(X,K7)}_blur(J,Q,Z,K){let $=this._pingPongRenderTarget,W=Math.min(K,Math.PI)/Math.SQRT2;this._blurPass(J,$,Q,Z,W),this._blurPass($,J,Z,Z,W)}_blurPass(J,Q,Z,K,$){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[K];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=$,H.mipInt.value=this._lodMax-Z;let N=this._sizeLods[K],q=3*N*(K>this._lodMax-B6?K-this._lodMax+B6:0),U=4*(this._cubeSize-N);C6(Q,q,U,3*N,2*N),W.setRenderTarget(Q),W.render(Y,K7)}}function aG(J){let Q=[],Z=[],K=J,$=J-B6+1+nG;for(let W=0;W<$;W++){let X=Math.pow(2,K);Q.push(X);let Y=1/(X-2),H=-Y,N=1+Y,q=[H,H,N,H,N,N,H,H,N,N,H,N],U=6,G=6,D=3,O=new Float32Array(D*G*U),L=new Float32Array(D*G*U);for(let E=0;E<U;E++){let R=E%3*2/3-1,k=E>2?0:-1,V=[R,k,0,R+0.6666666666666666,k,0,R+0.6666666666666666,k+1,0,R,k,0,R+0.6666666666666666,k+1,0,R,k+1,0];O.set(V,D*G*E);for(let A=0;A<G;A++){let P=q[A*2]*2-1,_=q[A*2+1]*2-1;if(E===0)xJ.set(1,_,P);else if(E===1)xJ.set(-P,1,-_);else if(E===2)xJ.set(-P,_,1);else if(E===3)xJ.set(-1,_,-P);else if(E===4)xJ.set(-P,-1,_);else xJ.set(P,_,-1);xJ.toArray(L,(E*G+A)*D)}}let F=new q8;if(F.setAttribute("position",new N8(O,D)),F.setAttribute("outputDirection",new N8(L,D)),Z.push(new $8(F,null)),K>B6)K--}return{lodMeshes:Z,sizeLods:Q}}function _X(J,Q,Z){let K=new K8(J,Q,Z);return K.texture.mapping=n6,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function C6(J,Q,Z,K,$){J.viewport.set(Q,Z,K,$),J.scissor.set(Q,Z,K,$)}function rG(J,Q,Z){return new e9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:MQ(),fragmentShader:`

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
		`,blending:w8,depthTest:!1,depthWrite:!1})}function tG(J,Q,Z){return new e9({name:"SphericalGaussianBlur",defines:{SAMPLES:sG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:MQ(),fragmentShader:`

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
		`,blending:w8,depthTest:!1,depthWrite:!1})}function TX(){return new e9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:MQ(),fragmentShader:`

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
		`,blending:w8,depthTest:!1,depthWrite:!1})}function wX(){return new e9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:MQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:w8,depthTest:!1,depthWrite:!1})}function MQ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class K$ extends K8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},K=[Z,Z,Z,Z,Z,Z];this.texture=new YQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new V6(5,5,5),$=new e9({name:"CubemapFromEquirect",uniforms:yJ(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:a9,blending:w8});$.uniforms.tEquirect.value=Q;let W=new $8(K,$),X=Q.minFilter;if(Q.minFilter===_J)Q.minFilter=r9;return new dK(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,Z=!0,K=!0){let $=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,Z,K);J.setRenderTarget($)}}function eG(J){let Q=new WeakMap,Z=new WeakMap,K=null;function $(G,D=!1){if(G===null||G===void 0)return null;if(D)return X(G);return W(G)}function W(G){if(G&&G.isTexture){let D=G.mapping;if(D===m7||D===d7)if(Q.has(G)){let O=Q.get(G).texture;return Y(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let L=new K$(O.height);return L.fromEquirectangularTexture(J,G),Q.set(G,L),G.addEventListener("dispose",N),Y(L.texture,G.mapping)}else return null}}return G}function X(G){if(G&&G.isTexture){let D=G.mapping,O=D===m7||D===d7,L=D===M6||D===kJ;if(O||L){let F=Z.get(G),E=F!==void 0?F.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==E){if(K===null)K=new J$(J);return F=O?K.fromEquirectangular(G,F):K.fromCubemap(G,F),F.texture.pmremVersion=G.pmremVersion,Z.set(G,F),F.texture}else if(F!==void 0)return F.texture;else{let R=G.image;if(O&&R&&R.height>0||L&&R&&H(R)){if(K===null)K=new J$(J);return F=O?K.fromEquirectangular(G):K.fromCubemap(G),F.texture.pmremVersion=G.pmremVersion,Z.set(G,F),G.addEventListener("dispose",q),F.texture}else return null}}}return G}function Y(G,D){if(D===m7)G.mapping=M6;else if(D===d7)G.mapping=kJ;return G}function H(G){let D=0,O=6;for(let L=0;L<O;L++)if(G[L]!==void 0)D++;return D===O}function N(G){let D=G.target;D.removeEventListener("dispose",N);let O=Q.get(D);if(O!==void 0)Q.delete(D),O.dispose()}function q(G){let D=G.target;D.removeEventListener("dispose",q);let O=Z.get(D);if(O!==void 0)Z.delete(D),O.dispose()}function U(){if(Q=new WeakMap,Z=new WeakMap,K!==null)K.dispose(),K=null}return{get:$,dispose:U}}function J5(J){let Q={};function Z(K){if(Q[K]!==void 0)return Q[K];let $=J.getExtension(K);return Q[K]=$,$}return{has:function(K){return Z(K)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(K){let $=Z(K);if($===null)PJ("WebGLRenderer: "+K+" extension not supported.");return $}}}function Q5(J,Q,Z,K){let $={},W=new WeakMap;function X(U){let G=U.target;if(G.index!==null)Q.remove(G.index);for(let O in G.attributes)Q.remove(G.attributes[O]);G.removeEventListener("dispose",X),delete $[G.id];let D=W.get(G);if(D)Q.remove(D),W.delete(G);if(K.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;Z.memory.geometries--}function Y(U,G){if($[G.id]===!0)return G;return G.addEventListener("dispose",X),$[G.id]=!0,Z.memory.geometries++,G}function H(U){let G=U.attributes;for(let D in G)Q.update(G[D],J.ARRAY_BUFFER)}function N(U){let G=[],D=U.index,O=U.attributes.position,L=0;if(O===void 0)return;if(D!==null){let R=D.array;L=D.version;for(let k=0,V=R.length;k<V;k+=3){let A=R[k+0],P=R[k+1],_=R[k+2];G.push(A,P,P,_,_,A)}}else{let R=O.array;L=O.version;for(let k=0,V=R.length/3-1;k<V;k+=3){let A=k+0,P=k+1,_=k+2;G.push(A,P,P,_,_,A)}}let F=new(O.count>=65535?$Q:KQ)(G,1);F.version=L;let E=W.get(U);if(E)Q.remove(E);W.set(U,F)}function q(U){let G=W.get(U);if(G){let D=U.index;if(D!==null){if(G.version<D.version)N(U)}}else N(U);return W.get(U)}return{get:Y,update:H,getWireframeAttribute:q}}function Z5(J,Q,Z){let K;function $(U){K=U}let W,X;function Y(U){W=U.type,X=U.bytesPerElement}function H(U,G){J.drawElements(K,G,W,U*X),Z.update(G,K,1)}function N(U,G,D){if(D===0)return;J.drawElementsInstanced(K,G,W,U*X,D),Z.update(G,K,D)}function q(U,G,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,G,0,W,U,0,D);let L=0;for(let F=0;F<D;F++)L+=G[F];Z.update(L,K,1)}this.setMode=$,this.setIndex=Y,this.render=H,this.renderInstances=N,this.renderMultiDraw=q}function K5(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function K(W,X,Y){switch(Z.calls++,X){case J.TRIANGLES:Z.triangles+=Y*(W/3);break;case J.LINES:Z.lines+=Y*(W/2);break;case J.LINE_STRIP:Z.lines+=Y*(W-1);break;case J.LINE_LOOP:Z.lines+=Y*W;break;case J.POINTS:Z.points+=Y*W;break;default:f0("WebGLInfo: Unknown draw mode:",X);break}}function $(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:$,update:K}}function $5(J,Q,Z){let K=new WeakMap,$=new Y9;function W(X,Y,H){let N=X.morphTargetInfluences,q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,U=q!==void 0?q.length:0,G=K.get(Y);if(G===void 0||G.count!==U){let B=function(){_.dispose(),K.delete(Y),Y.removeEventListener("dispose",B)};if(G!==void 0)G.texture.dispose();let D=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,L=Y.morphAttributes.color!==void 0,F=Y.morphAttributes.position||[],E=Y.morphAttributes.normal||[],R=Y.morphAttributes.color||[],k=0;if(D===!0)k=1;if(O===!0)k=2;if(L===!0)k=3;let V=Y.attributes.position.count*k,A=1;if(V>Q.maxTextureSize)A=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let P=new Float32Array(V*A*4*U),_=new JQ(P,V,A,U);_.type=r8,_.needsUpdate=!0;let I=k*4;for(let p=0;p<U;p++){let j=F[p],y=E[p],m=R[p],T=V*A*4*p;for(let w=0;w<j.count;w++){let n=w*I;if(D===!0)$.fromBufferAttribute(j,w),P[T+n+0]=$.x,P[T+n+1]=$.y,P[T+n+2]=$.z,P[T+n+3]=0;if(O===!0)$.fromBufferAttribute(y,w),P[T+n+4]=$.x,P[T+n+5]=$.y,P[T+n+6]=$.z,P[T+n+7]=0;if(L===!0)$.fromBufferAttribute(m,w),P[T+n+8]=$.x,P[T+n+9]=$.y,P[T+n+10]=$.z,P[T+n+11]=m.itemSize===4?$.w:1}}G={count:U,texture:_,size:new x0(V,A)},K.set(Y,G),Y.addEventListener("dispose",B)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,Z);else{let D=0;for(let L=0;L<N.length;L++)D+=N[L];let O=Y.morphTargetsRelative?1:1-D;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",N)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Z),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function W5(J,Q,Z,K,$){let W=new WeakMap;function X(N){let q=$.render.frame,U=N.geometry,G=Q.get(N,U);if(W.get(G)!==q)Q.update(G),W.set(G,q);if(N.isInstancedMesh){if(N.hasEventListener("dispose",H)===!1)N.addEventListener("dispose",H);if(W.get(N)!==q){if(Z.update(N.instanceMatrix,J.ARRAY_BUFFER),N.instanceColor!==null)Z.update(N.instanceColor,J.ARRAY_BUFFER);W.set(N,q)}}if(N.isSkinnedMesh){let D=N.skeleton;if(W.get(D)!==q)D.update(),W.set(D,q)}return G}function Y(){W=new WeakMap}function H(N){let q=N.target;if(q.removeEventListener("dispose",H),K.releaseStatesOfObject(q),Z.remove(q.instanceMatrix),q.instanceColor!==null)Z.remove(q.instanceColor)}return{update:X,dispose:Y}}var X5={[kZ]:"LINEAR_TONE_MAPPING",[_Z]:"REINHARD_TONE_MAPPING",[TZ]:"CINEON_TONE_MAPPING",[wZ]:"ACES_FILMIC_TONE_MAPPING",[jZ]:"AGX_TONE_MAPPING",[vZ]:"NEUTRAL_TONE_MAPPING",[SZ]:"CUSTOM_TONE_MAPPING"};function Y5(J,Q,Z,K,$,W){let X=new K8(Q,Z,{type:J,depthBuffer:$,stencilBuffer:W,samples:K?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,N=new q8;N.setAttribute("position",new c9([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new c9([0,2,0,0,2,0],2));let q=new TK({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),U=new $8(N,q),G=new qQ(-1,1,1,-1,0,1),D=null,O=null,L=!1,F,E=null,R=[],k=!1;this.setSize=function(V,A){if(X.setSize(V,A),Y!==null)Y.setSize(V,A);if(H!==null)H.setSize(V,A);for(let P=0;P<R.length;P++){let _=R[P];if(_.setSize)_.setSize(V,A)}},this.setEffects=function(V){R=V,k=R.length>0&&R[0].isRenderPass===!0;let{width:A,height:P}=X;if(R.length>0&&Y===null)Y=new K8(A,P,{type:S8,depthBuffer:!1,stencilBuffer:!1}),H=new K8(A,P,{type:S8,depthBuffer:!1,stencilBuffer:!1});for(let _=0;_<R.length;_++){let I=R[_];if(I.setSize)I.setSize(A,P)}},this.begin=function(V,A){if(L)return!1;if(V.toneMapping===L8&&R.length===0)return!1;if(E=A,A!==null){let{width:P,height:_}=A;if(X.width!==P||X.height!==_)this.setSize(P,_)}if(k===!1)V.setRenderTarget(X);return F=V.toneMapping,V.toneMapping=L8,!0},this.hasRenderPass=function(){return k},this.end=function(V,A){V.toneMapping=F,L=!0;let P=X,_=Y;for(let I=0;I<R.length;I++){let B=R[I];if(B.enabled===!1)continue;if(B.render(V,_,P,A),B.needsSwap!==!1)P=_,_=_===Y?H:Y}if(D!==V.outputColorSpace||O!==V.toneMapping){if(D=V.outputColorSpace,O=V.toneMapping,q.defines={},o0.getTransfer(D)===q9)q.defines.SRGB_TRANSFER="";let I=X5[O];if(I)q.defines[I]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=P.texture,V.setRenderTarget(E),V.render(U,G),E=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();N.dispose(),q.dispose()}}var aX=new x9,Q$=new vJ(1,1),rX=new JQ,tX=new AK,eX=new YQ,SX=[],jX=[],vX=new Float32Array(16),yX=new Float32Array(9),bX=new Float32Array(4);function A6(J,Q,Z){let K=J[0];if(K<=0||K>0)return J;let $=Q*Z,W=SX[$];if(W===void 0)W=new Float32Array($),SX[$]=W;if(Q!==0){K.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=Z,J[X].toArray(W,Y)}return W}function z9(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,K=J.length;Z<K;Z++)if(J[Z]!==Q[Z])return!1;return!0}function P9(J,Q){for(let Z=0,K=Q.length;Z<K;Z++)J[Z]=Q[Z]}function LQ(J,Q){let Z=jX[Q];if(Z===void 0)Z=new Int32Array(Q),jX[Q]=Z;for(let K=0;K!==Q;++K)Z[K]=J.allocateTextureUnit();return Z}function H5(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function U5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z9(Z,Q))return;J.uniform2fv(this.addr,Q),P9(Z,Q)}}function N5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(z9(Z,Q))return;J.uniform3fv(this.addr,Q),P9(Z,Q)}}function G5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z9(Z,Q))return;J.uniform4fv(this.addr,Q),P9(Z,Q)}}function q5(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z9(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),P9(Z,Q)}else{if(z9(Z,K))return;bX.set(K),J.uniformMatrix2fv(this.addr,!1,bX),P9(Z,K)}}function E5(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z9(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),P9(Z,Q)}else{if(z9(Z,K))return;yX.set(K),J.uniformMatrix3fv(this.addr,!1,yX),P9(Z,K)}}function D5(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(z9(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),P9(Z,Q)}else{if(z9(Z,K))return;vX.set(K),J.uniformMatrix4fv(this.addr,!1,vX),P9(Z,K)}}function F5(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function O5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z9(Z,Q))return;J.uniform2iv(this.addr,Q),P9(Z,Q)}}function R5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(z9(Z,Q))return;J.uniform3iv(this.addr,Q),P9(Z,Q)}}function M5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z9(Z,Q))return;J.uniform4iv(this.addr,Q),P9(Z,Q)}}function L5(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function I5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(z9(Z,Q))return;J.uniform2uiv(this.addr,Q),P9(Z,Q)}}function V5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(z9(Z,Q))return;J.uniform3uiv(this.addr,Q),P9(Z,Q)}}function C5(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(z9(Z,Q))return;J.uniform4uiv(this.addr,Q),P9(Z,Q)}}function B5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_2D_SHADOW)Q$.compareFunction=Z.isReversedDepthBuffer()?t7:r7,W=Q$;else W=aX;Z.setTexture2D(Q||W,$)}function A5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture3D(Q||tX,$)}function z5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTextureCube(Q||eX,$)}function P5(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture2DArray(Q||rX,$)}function k5(J){switch(J){case 5126:return H5;case 35664:return U5;case 35665:return N5;case 35666:return G5;case 35674:return q5;case 35675:return E5;case 35676:return D5;case 5124:case 35670:return F5;case 35667:case 35671:return O5;case 35668:case 35672:return R5;case 35669:case 35673:return M5;case 5125:return L5;case 36294:return I5;case 36295:return V5;case 36296:return C5;case 35678:case 36198:case 36298:case 36306:case 35682:return B5;case 35679:case 36299:case 36307:return A5;case 35680:case 36300:case 36308:case 36293:return z5;case 36289:case 36303:case 36311:case 36292:return P5}}function _5(J,Q){J.uniform1fv(this.addr,Q)}function T5(J,Q){let Z=A6(Q,this.size,2);J.uniform2fv(this.addr,Z)}function w5(J,Q){let Z=A6(Q,this.size,3);J.uniform3fv(this.addr,Z)}function S5(J,Q){let Z=A6(Q,this.size,4);J.uniform4fv(this.addr,Z)}function j5(J,Q){let Z=A6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function v5(J,Q){let Z=A6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function y5(J,Q){let Z=A6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function b5(J,Q){J.uniform1iv(this.addr,Q)}function f5(J,Q){J.uniform2iv(this.addr,Q)}function h5(J,Q){J.uniform3iv(this.addr,Q)}function x5(J,Q){J.uniform4iv(this.addr,Q)}function g5(J,Q){J.uniform1uiv(this.addr,Q)}function p5(J,Q){J.uniform2uiv(this.addr,Q)}function m5(J,Q){J.uniform3uiv(this.addr,Q)}function d5(J,Q){J.uniform4uiv(this.addr,Q)}function u5(J,Q,Z){let K=this.cache,$=Q.length,W=LQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),P9(K,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=Q$;else X=aX;for(let Y=0;Y!==$;++Y)Z.setTexture2D(Q[Y]||X,W[Y])}function l5(J,Q,Z){let K=this.cache,$=Q.length,W=LQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),P9(K,W);for(let X=0;X!==$;++X)Z.setTexture3D(Q[X]||tX,W[X])}function c5(J,Q,Z){let K=this.cache,$=Q.length,W=LQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),P9(K,W);for(let X=0;X!==$;++X)Z.setTextureCube(Q[X]||eX,W[X])}function n5(J,Q,Z){let K=this.cache,$=Q.length,W=LQ(Z,$);if(!z9(K,W))J.uniform1iv(this.addr,W),P9(K,W);for(let X=0;X!==$;++X)Z.setTexture2DArray(Q[X]||rX,W[X])}function s5(J){switch(J){case 5126:return _5;case 35664:return T5;case 35665:return w5;case 35666:return S5;case 35674:return j5;case 35675:return v5;case 35676:return y5;case 5124:case 35670:return b5;case 35667:case 35671:return f5;case 35668:case 35672:return h5;case 35669:case 35673:return x5;case 5125:return g5;case 36294:return p5;case 36295:return m5;case 36296:return d5;case 35678:case 36198:case 36298:case 36306:case 35682:return u5;case 35679:case 36299:case 36307:return l5;case 35680:case 36300:case 36308:case 36293:return c5;case 36289:case 36303:case 36311:case 36292:return n5}}class JY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=k5(Q.type)}}class QY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=s5(Q.type)}}class ZY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let K=this.seq;for(let $=0,W=K.length;$!==W;++$){let X=K[$];X.setValue(J,Q[X.id],Z)}}}var tK=/(\w+)(\])?(\[|\.)?/g;function fX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function i5(J,Q,Z){let K=J.name,$=K.length;tK.lastIndex=0;while(!0){let W=tK.exec(K),X=tK.lastIndex,Y=W[1],H=W[2]==="]",N=W[3];if(H)Y=Y|0;if(N===void 0||N==="["&&X+2===$){fX(Z,N===void 0?new JY(Y,J,Q):new QY(Y,J,Q));break}else{let U=Z.map[Y];if(U===void 0)U=new ZY(Y),fX(Z,U);Z=U}}}class X7{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<Z;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);i5(X,Y,this)}let K=[],$=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(W);else $.push(W);if(K.length>0)this.seq=K.concat($)}setValue(J,Q,Z,K){let $=this.map[Q];if($!==void 0)$.setValue(J,Z,K)}setOptional(J,Q,Z){let K=Q[Z];if(K!==void 0)this.setValue(J,Z,K)}static upload(J,Q,Z,K){for(let $=0,W=Q.length;$!==W;++$){let X=Q[$],Y=Z[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let Z=[];for(let K=0,$=J.length;K!==$;++K){let W=J[K];if(W.id in Q)Z.push(W)}return Z}}function hX(J,Q,Z){let K=J.createShader(Q);return J.shaderSource(K,Z),J.compileShader(K),K}var o5=37297,a5=0;function r5(J,Q){let Z=J.split(`
`),K=[],$=Math.max(Q-6,0),W=Math.min(Q+6,Z.length);for(let X=$;X<W;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${Z[X]}`)}return K.join(`
`)}var xX=new g0;function t5(J){o0._getMatrix(xX,o0.workingColorSpace,J);let Q=`mat3( ${xX.elements.map((Z)=>Z.toFixed(4))} )`;switch(o0.getTransfer(J)){case MK:return[Q,"LinearTransferOETF"];case q9:return[Q,"sRGBTransferOETF"];default:return v0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function gX(J,Q,Z){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(K&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return Z.toUpperCase()+`

`+W+`

`+r5(J.getShaderSource(Q),Y)}else return W}function e5(J,Q){let Z=t5(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}var Jq={[kZ]:"Linear",[_Z]:"Reinhard",[TZ]:"Cineon",[wZ]:"ACESFilmic",[jZ]:"AgX",[vZ]:"Neutral",[SZ]:"Custom"};function Qq(J,Q){let Z=Jq[Q];if(Z===void 0)return v0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var RQ=new x;function Zq(){o0.getLuminanceCoefficients(RQ);let J=RQ.x.toFixed(4),Q=RQ.y.toFixed(4),Z=RQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Kq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(W7).join(`
`)}function $q(J){let Q=[];for(let Z in J){let K=J[Z];if(K===!1)continue;Q.push("#define "+Z+" "+K)}return Q.join(`
`)}function Wq(J,Q){let Z={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let $=0;$<K;$++){let W=J.getActiveAttrib(Q,$),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;Z[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return Z}function W7(J){return J!==""}function pX(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function mX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Xq=/^[ \t]*#include +<([\w\d./]+)>/gm;function Z$(J){return J.replace(Xq,Hq)}var Yq=new Map;function Hq(J,Q){let Z=c0[Q];if(Z===void 0){let K=Yq.get(Q);if(K!==void 0)Z=c0[K],v0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return Z$(Z)}var Uq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dX(J){return J.replace(Uq,Nq)}function Nq(J,Q,Z,K){let $="";for(let W=parseInt(Q);W<parseInt(Z);W++)$+=K.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return $}function uX(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Gq={[l6]:"SHADOWMAP_TYPE_PCF",[F6]:"SHADOWMAP_TYPE_VSM"};function qq(J){return Gq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Eq={[M6]:"ENVMAP_TYPE_CUBE",[kJ]:"ENVMAP_TYPE_CUBE",[n6]:"ENVMAP_TYPE_CUBE_UV"};function Dq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Eq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fq={[kJ]:"ENVMAP_MODE_REFRACTION"};function Oq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Fq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rq={[tW]:"ENVMAP_BLENDING_MULTIPLY",[eW]:"ENVMAP_BLENDING_MIX",[JX]:"ENVMAP_BLENDING_ADD"};function Mq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Rq[J.combine]||"ENVMAP_BLENDING_NONE"}function Lq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:K,maxMip:Z}}function Iq(J,Q,Z,K){let $=J.getContext(),W=Z.defines,X=Z.vertexShader,Y=Z.fragmentShader,H=qq(Z),N=Dq(Z),q=Oq(Z),U=Mq(Z),G=Lq(Z),D=Kq(Z),O=$q(W),L=$.createProgram(),F,E,R=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(W7).join(`
`),F.length>0)F+=`
`;if(E=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(W7).join(`
`),E.length>0)E+=`
`}else F=[uX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+q:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexNormals?"#define HAS_NORMAL":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(W7).join(`
`),E=[uX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+N:"",Z.envMap?"#define "+q:"",Z.envMap?"#define "+U:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.retroreflection?"#define USE_RETROREFLECTION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor?"#define USE_COLOR":"",Z.vertexAlphas||Z.batchingColor?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==L8?"#define TONE_MAPPING":"",Z.toneMapping!==L8?c0.tonemapping_pars_fragment:"",Z.toneMapping!==L8?Qq("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",c0.colorspace_pars_fragment,e5("linearToOutputTexel",Z.outputColorSpace),Zq(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(W7).join(`
`);if(X=Z$(X),X=pX(X,Z),X=mX(X,Z),Y=Z$(Y),Y=pX(Y,Z),Y=mX(Y,Z),X=dX(X),Y=dX(Y),Z.isRawShaderMaterial!==!0)R=`#version 300 es
`,F=[D,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,E=["#define varying in",Z.glslVersion===LK?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===LK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let k=R+F+X,V=R+E+Y,A=hX($,$.VERTEX_SHADER,k),P=hX($,$.FRAGMENT_SHADER,V);if($.attachShader(L,A),$.attachShader(L,P),Z.index0AttributeName!==void 0)$.bindAttribLocation(L,0,Z.index0AttributeName);else if(Z.hasPositionAttribute===!0)$.bindAttribLocation(L,0,"position");$.linkProgram(L);function _(j){if(J.debug.checkShaderErrors){let y=$.getProgramInfoLog(L)||"",m=$.getShaderInfoLog(A)||"",T=$.getShaderInfoLog(P)||"",w=y.trim(),n=m.trim(),u=T.trim(),$0=!0,i=!0;if($.getProgramParameter(L,$.LINK_STATUS)===!1)if($0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError($,L,A,P);else{let Z0=gX($,A,"vertex"),X0=gX($,P,"fragment");f0("WebGLProgram: Shader Error "+$.getError()+" - VALIDATE_STATUS "+$.getProgramParameter(L,$.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+w+`
`+Z0+`
`+X0)}else if(w!=="")v0("WebGLProgram: Program Info Log:",w);else if(n===""||u==="")i=!1;if(i)j.diagnostics={runnable:$0,programLog:w,vertexShader:{log:n,prefix:F},fragmentShader:{log:u,prefix:E}}}$.deleteShader(A),$.deleteShader(P),I=new X7($,L),B=Wq($,L)}let I;this.getUniforms=function(){if(I===void 0)_(this);return I};let B;this.getAttributes=function(){if(B===void 0)_(this);return B};let p=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(p===!1)p=$.getProgramParameter(L,o5);return p},this.destroy=function(){K.releaseStatesOfProgram(this),$.deleteProgram(L),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=a5++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=A,this.fragmentShader=P,this}var Vq=0;class KY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,Z){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new $Y(J),Q.set(J,Z);return Z}}class $Y{constructor(J){this.id=Vq++,this.code=J,this.usedTimes=0}}function Cq(J){return J===SJ||J===o7||J===a7}function Bq(J,Q,Z,K,$,W){let X=new QQ,Y=new KY,H=new Set,N=[],q=new Map,U=K.logarithmicDepthBuffer,G=K.precision,D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(I){if(H.add(I),I===0)return"uv";return`uv${I}`}function L(I,B,p,j,y,m){let T=j.fog,w=y.geometry,n=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?j.environment:null,u=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,$0=Q.get(I.envMap||n,u),i=!!$0&&$0.mapping===n6?$0.image.height:null,Z0=D[I.type];if(I.precision!==null){if(G=K.getMaxPrecision(I.precision),G!==I.precision)v0("WebGLProgram.getParameters:",I.precision,"not supported, using",G,"instead.")}let X0=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,w0=X0!==void 0?X0.length:0,T0=0;if(w.morphAttributes.position!==void 0)T0=1;if(w.morphAttributes.normal!==void 0)T0=2;if(w.morphAttributes.color!==void 0)T0=3;let n0,u0,S,g;if(Z0){let E9=n9[Z0];n0=E9.vertexShader,u0=E9.fragmentShader}else{n0=I.vertexShader,u0=I.fragmentShader;let E9=Y.getVertexShaderStage(I),K9=Y.getFragmentShaderStage(I);Y.update(I,E9,K9),S=E9.id,g=K9.id}let d=J.getRenderTarget(),a=J.state.buffers.depth.getReversed(),Q0=y.isInstancedMesh===!0,r=y.isBatchedMesh===!0,z0=!!I.map,q0=!!I.matcap,y0=!!$0,m0=!!I.aoMap,h0=!!I.lightMap,i0=!!I.bumpMap&&I.wireframe===!1,r0=!!I.normalMap,I9=!!I.displacementMap,F9=!!I.emissiveMap,O9=!!I.metalnessMap,v=!!I.roughnessMap,A9=I.anisotropy>0,J9=I.clearcoat>0,N9=I.dispersion>0,z=I.retroreflectivity>0,M=I.iridescence>0,b=I.sheen>0,s=I.transmission>0,W0=A9&&!!I.anisotropyMap,U0=J9&&!!I.clearcoatMap,E0=J9&&!!I.clearcoatNormalMap,t=J9&&!!I.clearcoatRoughnessMap,K0=M&&!!I.iridescenceMap,O0=M&&!!I.iridescenceThicknessMap,A0=b&&!!I.sheenColorMap,N0=b&&!!I.sheenRoughnessMap,H0=!!I.specularMap,S0=!!I.specularColorMap,j0=!!I.specularIntensityMap,Q9=s&&!!I.transmissionMap,h=s&&!!I.thicknessMap,D0=!!I.gradientMap,J0=!!I.alphaMap,F0=I.alphaTest>0,V0=!!I.alphaHash,Y0=!!I.extensions,R0=L8;if(I.toneMapped){if(d===null||d.isXRRenderTarget===!0)R0=J.toneMapping}let d0={shaderID:Z0,shaderType:I.type,shaderName:I.name,vertexShader:n0,fragmentShader:u0,defines:I.defines,customVertexShaderID:S,customFragmentShaderID:g,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:G,batching:r,batchingColor:r&&y._colorsTexture!==null,instancing:Q0,instancingColor:Q0&&y.instanceColor!==null,instancingMorph:Q0&&y.morphTexture!==null,outputColorSpace:d===null?J.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:o0.workingColorSpace,alphaToCoverage:!!I.alphaToCoverage,map:z0,matcap:q0,envMap:y0,envMapMode:y0&&$0.mapping,envMapCubeUVHeight:i,aoMap:m0,lightMap:h0,bumpMap:i0,normalMap:r0,displacementMap:I9,emissiveMap:F9,normalMapObjectSpace:r0&&I.normalMapType===GX,normalMapTangentSpace:r0&&I.normalMapType===OK,packedNormalMap:r0&&I.normalMapType===OK&&Cq(I.normalMap.format),metalnessMap:O9,roughnessMap:v,anisotropy:A9,anisotropyMap:W0,clearcoat:J9,clearcoatMap:U0,clearcoatNormalMap:E0,clearcoatRoughnessMap:t,dispersion:N9,retroreflection:z,iridescence:M,iridescenceMap:K0,iridescenceThicknessMap:O0,sheen:b,sheenColorMap:A0,sheenRoughnessMap:N0,specularMap:H0,specularColorMap:S0,specularIntensityMap:j0,transmission:s,transmissionMap:Q9,thicknessMap:h,gradientMap:D0,opaque:I.transparent===!1&&I.blending===c6&&I.alphaToCoverage===!1,alphaMap:J0,alphaTest:F0,alphaHash:V0,combine:I.combine,mapUv:z0&&O(I.map.channel),aoMapUv:m0&&O(I.aoMap.channel),lightMapUv:h0&&O(I.lightMap.channel),bumpMapUv:i0&&O(I.bumpMap.channel),normalMapUv:r0&&O(I.normalMap.channel),displacementMapUv:I9&&O(I.displacementMap.channel),emissiveMapUv:F9&&O(I.emissiveMap.channel),metalnessMapUv:O9&&O(I.metalnessMap.channel),roughnessMapUv:v&&O(I.roughnessMap.channel),anisotropyMapUv:W0&&O(I.anisotropyMap.channel),clearcoatMapUv:U0&&O(I.clearcoatMap.channel),clearcoatNormalMapUv:E0&&O(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:t&&O(I.clearcoatRoughnessMap.channel),iridescenceMapUv:K0&&O(I.iridescenceMap.channel),iridescenceThicknessMapUv:O0&&O(I.iridescenceThicknessMap.channel),sheenColorMapUv:A0&&O(I.sheenColorMap.channel),sheenRoughnessMapUv:N0&&O(I.sheenRoughnessMap.channel),specularMapUv:H0&&O(I.specularMap.channel),specularColorMapUv:S0&&O(I.specularColorMap.channel),specularIntensityMapUv:j0&&O(I.specularIntensityMap.channel),transmissionMapUv:Q9&&O(I.transmissionMap.channel),thicknessMapUv:h&&O(I.thicknessMap.channel),alphaMapUv:J0&&O(I.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(r0||A9),vertexNormals:!!w.attributes.normal,vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!w.attributes.uv&&(z0||J0),fog:!!T,useFog:I.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:I.wireframe===!1&&(I.flatShading===!0||w.attributes.normal===void 0&&r0===!1&&(I.isMeshLambertMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isMeshPhysicalMaterial)),sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:U,reversedDepthBuffer:a,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:w0,morphTextureStride:T0,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:m.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:I.dithering,shadowMapEnabled:J.shadowMap.enabled&&p.length>0,shadowMapType:J.shadowMap.type,toneMapping:R0,decodeVideoTexture:z0&&I.map.isVideoTexture===!0&&o0.getTransfer(I.map.colorSpace)===q9,decodeVideoTextureEmissive:F9&&I.emissiveMap.isVideoTexture===!0&&o0.getTransfer(I.emissiveMap.colorSpace)===q9,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===T8,flipSided:I.side===a9,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Y0&&I.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y0&&I.extensions.multiDraw===!0||r)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return d0.vertexUv1s=H.has(1),d0.vertexUv2s=H.has(2),d0.vertexUv3s=H.has(3),H.clear(),d0}function F(I){let B=[];if(I.shaderID)B.push(I.shaderID);else B.push(I.customVertexShaderID),B.push(I.customFragmentShaderID);if(I.defines!==void 0)for(let p in I.defines)B.push(p),B.push(I.defines[p]);if(I.isRawShaderMaterial===!1)E(B,I),R(B,I),B.push(J.outputColorSpace);return B.push(I.customProgramCacheKey),B.join()}function E(I,B){I.push(B.precision),I.push(B.outputColorSpace),I.push(B.envMapMode),I.push(B.envMapCubeUVHeight),I.push(B.mapUv),I.push(B.alphaMapUv),I.push(B.lightMapUv),I.push(B.aoMapUv),I.push(B.bumpMapUv),I.push(B.normalMapUv),I.push(B.displacementMapUv),I.push(B.emissiveMapUv),I.push(B.metalnessMapUv),I.push(B.roughnessMapUv),I.push(B.anisotropyMapUv),I.push(B.clearcoatMapUv),I.push(B.clearcoatNormalMapUv),I.push(B.clearcoatRoughnessMapUv),I.push(B.iridescenceMapUv),I.push(B.iridescenceThicknessMapUv),I.push(B.sheenColorMapUv),I.push(B.sheenRoughnessMapUv),I.push(B.specularMapUv),I.push(B.specularColorMapUv),I.push(B.specularIntensityMapUv),I.push(B.transmissionMapUv),I.push(B.thicknessMapUv),I.push(B.combine),I.push(B.fogExp2),I.push(B.sizeAttenuation),I.push(B.morphTargetsCount),I.push(B.morphAttributeCount),I.push(B.numSunLights),I.push(B.numDirLights),I.push(B.numPointLights),I.push(B.numSpotLights),I.push(B.numSpotLightMaps),I.push(B.numHemiLights),I.push(B.numRectAreaLights),I.push(B.numSunLightShadows),I.push(B.numDirLightShadows),I.push(B.numPointLightShadows),I.push(B.numSpotLightShadows),I.push(B.numSpotLightShadowsWithMaps),I.push(B.numLightProbes),I.push(B.shadowMapType),I.push(B.toneMapping),I.push(B.numClippingPlanes),I.push(B.numClipIntersection),I.push(B.depthPacking)}function R(I,B){if(X.disableAll(),B.instancing)X.enable(0);if(B.instancingColor)X.enable(1);if(B.instancingMorph)X.enable(2);if(B.matcap)X.enable(3);if(B.envMap)X.enable(4);if(B.normalMapObjectSpace)X.enable(5);if(B.normalMapTangentSpace)X.enable(6);if(B.clearcoat)X.enable(7);if(B.iridescence)X.enable(8);if(B.alphaTest)X.enable(9);if(B.vertexColors)X.enable(10);if(B.vertexAlphas)X.enable(11);if(B.vertexUv1s)X.enable(12);if(B.vertexUv2s)X.enable(13);if(B.vertexUv3s)X.enable(14);if(B.vertexTangents)X.enable(15);if(B.anisotropy)X.enable(16);if(B.alphaHash)X.enable(17);if(B.batching)X.enable(18);if(B.dispersion)X.enable(19);if(B.retroreflection)X.enable(24);if(B.batchingColor)X.enable(20);if(B.gradientMap)X.enable(21);if(B.packedNormalMap)X.enable(22);if(B.vertexNormals)X.enable(23);if(I.push(X.mask),X.disableAll(),B.fog)X.enable(0);if(B.useFog)X.enable(1);if(B.flatShading)X.enable(2);if(B.logarithmicDepthBuffer)X.enable(3);if(B.reversedDepthBuffer)X.enable(4);if(B.skinning)X.enable(5);if(B.morphTargets)X.enable(6);if(B.morphNormals)X.enable(7);if(B.morphColors)X.enable(8);if(B.premultipliedAlpha)X.enable(9);if(B.shadowMapEnabled)X.enable(10);if(B.doubleSided)X.enable(11);if(B.flipSided)X.enable(12);if(B.useDepthPacking)X.enable(13);if(B.dithering)X.enable(14);if(B.transmission)X.enable(15);if(B.sheen)X.enable(16);if(B.opaque)X.enable(17);if(B.pointsUvs)X.enable(18);if(B.decodeVideoTexture)X.enable(19);if(B.decodeVideoTextureEmissive)X.enable(20);if(B.alphaToCoverage)X.enable(21);if(B.numLightProbeGrids>0)X.enable(22);if(B.hasPositionAttribute)X.enable(23);I.push(X.mask)}function k(I){let B=D[I.type],p;if(B){let j=n9[B];p=Q7.clone(j.uniforms)}else p=I.uniforms;return p}function V(I,B){let p=q.get(B);if(p!==void 0)++p.usedTimes;else p=new Iq(J,B,I,$),N.push(p),q.set(B,p);return p}function A(I){if(--I.usedTimes===0){let B=N.indexOf(I);N[B]=N[N.length-1],N.pop(),q.delete(I.cacheKey),I.destroy()}}function P(I){Y.remove(I)}function _(){Y.dispose()}return{getParameters:L,getProgramCacheKey:F,getUniforms:k,acquireProgram:V,releaseProgram:A,releaseShaderCache:P,programs:N,dispose:_}}function Aq(){let J=new WeakMap;function Q(X){return J.has(X)}function Z(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function $(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:Z,remove:K,update:$,dispose:W}}function zq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function lX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function cX(){let J=[],Q=0,Z=[],K=[],$=[];function W(){Q=0,Z.length=0,K.length=0,$.length=0}function X(G){let D=0;if(G.isInstancedMesh)D+=2;if(G.isSkinnedMesh)D+=1;return D}function Y(G,D,O,L,F,E){let R=J[Q];if(R===void 0)R={id:G.id,object:G,geometry:D,material:O,materialVariant:X(G),groupOrder:L,renderOrder:G.renderOrder,z:F,group:E},J[Q]=R;else R.id=G.id,R.object=G,R.geometry=D,R.material=O,R.materialVariant=X(G),R.groupOrder=L,R.renderOrder=G.renderOrder,R.z=F,R.group=E;return Q++,R}function H(G,D,O,L,F,E,R){if(R.reversedDepth===!0)F=-F;let k=Y(G,D,O,L,F,E);if(O.transmission>0)K.push(k);else if(O.transparent===!0)$.push(k);else Z.push(k)}function N(G,D,O,L,F,E){let R=Y(G,D,O,L,F,E);if(O.transmission>0)K.unshift(R);else if(O.transparent===!0)$.unshift(R);else Z.unshift(R)}function q(G,D){if(Z.length>1)Z.sort(G||zq);if(K.length>1)K.sort(D||lX);if($.length>1)$.sort(D||lX)}function U(){for(let G=Q,D=J.length;G<D;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Z,transmissive:K,transparent:$,init:W,push:H,unshift:N,finish:U,sort:q}}function Pq(){let J=new WeakMap;function Q(K,$){let W=J.get(K),X;if(W===void 0)X=new cX,J.set(K,[X]);else if($>=W.length)X=new cX,W.push(X);else X=W[$];return X}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function kq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={direction:new x,color:new e0};break;case"SpotLight":Z={position:new x,direction:new x,color:new e0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new x,color:new e0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new x,skyColor:new e0,groundColor:new e0};break;case"RectAreaLight":Z={color:new e0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=Z,Z}}}function _q(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var Tq=0;function wq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function Sq(J){let Q=new kq,Z=_q(),K={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let N=0;N<9;N++)K.probe.push(new x);let $=new x,W=new M9,X=new M9;function Y(N){let q=0,U=0,G=0;for(let y=0;y<9;y++)K.probe[y].set(0,0,0);let D=0,O=0,L=0,F=0,E=0,R=0,k=0,V=0,A=0,P=0,_=0,I=0,B=0,p=0;N.sort(wq);for(let y=0,m=N.length;y<m;y++){let T=N[y],w=T.color,n=T.intensity,u=T.distance,$0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===SJ)$0=T.shadow.map.texture;else $0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)q+=w.r*n,U+=w.g*n,G+=w.b*n;else if(T.isLightProbe){for(let i=0;i<9;i++)K.probe[i].addScaledVector(T.sh.coefficients[i],n);p++}else if(T.isSunLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize.copy(Z0.mapSize).multiply(Z0.getFrameExtents()),K.sunShadow[O]=X0,K.sunShadowMap[O]=$0;let w0=Z0.getViewportCount();for(let T0=0;T0<w0;T0++)K.sunShadowMatrix[L+T0]=Z0.getMatrix(T0),K.sunShadowCascade[L+T0]=Z0._cascadeData[T0];L+=w0,O++}K.sun[D]=i,D++}else if(T.isDirectionalLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.directionalShadow[F]=X0,K.directionalShadowMap[F]=$0,K.directionalShadowMatrix[F]=T.shadow.matrix,A++}K.directional[F]=i,F++}else if(T.isSpotLight){let i=Q.get(T);i.position.setFromMatrixPosition(T.matrixWorld),i.color.copy(w).multiplyScalar(n),i.distance=u,i.coneCos=Math.cos(T.angle),i.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),i.decay=T.decay,K.spot[R]=i;let Z0=T.shadow;if(T.map){if(K.spotLightMap[I]=T.map,I++,Z0.updateMatrices(T),T.castShadow)B++}if(K.spotLightMatrix[R]=Z0.matrix,T.castShadow){let X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.spotShadow[R]=X0,K.spotShadowMap[R]=$0,_++}R++}else if(T.isRectAreaLight){let i=Q.get(T);i.color.copy(w).multiplyScalar(n),i.halfWidth.set(T.width*0.5,0,0),i.halfHeight.set(0,T.height*0.5,0),K.rectArea[k]=i,k++}else if(T.isPointLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),i.distance=T.distance,i.decay=T.decay,T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,X0.shadowCameraNear=Z0.camera.near,X0.shadowCameraFar=Z0.camera.far,K.pointShadow[E]=X0,K.pointShadowMap[E]=$0,K.pointShadowMatrix[E]=T.shadow.matrix,P++}K.point[E]=i,E++}else if(T.isHemisphereLight){let i=Q.get(T);i.skyColor.copy(T.color).multiplyScalar(n),i.groundColor.copy(T.groundColor).multiplyScalar(n),K.hemi[V]=i,V++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=G0.LTC_FLOAT_1,K.rectAreaLTC2=G0.LTC_FLOAT_2;else K.rectAreaLTC1=G0.LTC_HALF_1,K.rectAreaLTC2=G0.LTC_HALF_2;K.ambient[0]=q,K.ambient[1]=U,K.ambient[2]=G;let j=K.hash;if(j.sunLength!==D||j.directionalLength!==F||j.pointLength!==E||j.spotLength!==R||j.rectAreaLength!==k||j.hemiLength!==V||j.numSunShadows!==O||j.numDirectionalShadows!==A||j.numPointShadows!==P||j.numSpotShadows!==_||j.numSpotMaps!==I||j.numLightProbes!==p)K.sun.length=D,K.directional.length=F,K.spot.length=R,K.rectArea.length=k,K.point.length=E,K.hemi.length=V,K.sunShadow.length=O,K.sunShadowMap.length=O,K.sunShadowMatrix.length=L,K.sunShadowCascade.length=L,K.directionalShadow.length=A,K.directionalShadowMap.length=A,K.directionalShadowMatrix.length=A,K.pointShadow.length=P,K.pointShadowMap.length=P,K.pointShadowMatrix.length=P,K.spotShadow.length=_,K.spotShadowMap.length=_,K.spotLightMatrix.length=_+I-B,K.spotLightMap.length=I,K.numSpotLightShadowsWithMaps=B,K.numLightProbes=p,j.sunLength=D,j.directionalLength=F,j.pointLength=E,j.spotLength=R,j.rectAreaLength=k,j.hemiLength=V,j.numSunShadows=O,j.numDirectionalShadows=A,j.numPointShadows=P,j.numSpotShadows=_,j.numSpotMaps=I,j.numLightProbes=p,K.version=Tq++}function H(N,q){let U=0,G=0,D=0,O=0,L=0,F=0,E=q.matrixWorldInverse;for(let R=0,k=N.length;R<k;R++){let V=N[R];if(V.isSunLight){let A=K.sun[U];A.direction.setFromMatrixPosition(V.matrixWorld),A.direction.transformDirection(E),U++}else if(V.isDirectionalLight){let A=K.directional[G];A.direction.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(E),G++}else if(V.isSpotLight){let A=K.spot[O];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(E),A.direction.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(E),O++}else if(V.isRectAreaLight){let A=K.rectArea[L];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(E),X.identity(),W.copy(V.matrixWorld),W.premultiply(E),X.extractRotation(W),A.halfWidth.set(V.width*0.5,0,0),A.halfHeight.set(0,V.height*0.5,0),A.halfWidth.applyMatrix4(X),A.halfHeight.applyMatrix4(X),L++}else if(V.isPointLight){let A=K.point[D];A.position.setFromMatrixPosition(V.matrixWorld),A.position.applyMatrix4(E),D++}else if(V.isHemisphereLight){let A=K.hemi[F];A.direction.setFromMatrixPosition(V.matrixWorld),A.direction.transformDirection(E),F++}}}return{setup:Y,setupView:H,state:K}}function nX(J){let Q=new Sq(J),Z=[],K=[],$=[];function W(G){U.camera=G,Z.length=0,K.length=0,$.length=0}function X(G){Z.push(G)}function Y(G){K.push(G)}function H(G){$.push(G)}function N(){Q.setup(Z)}function q(G){Q.setupView(Z,G)}let U={lightsArray:Z,shadowsArray:K,lightProbeGridArray:$,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:U,setupLights:N,setupLightsView:q,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function jq(J){let Q=new WeakMap;function Z($,W=0){let X=Q.get($),Y;if(X===void 0)Y=new nX(J),Q.set($,[Y]);else if(W>=X.length)Y=new nX(J),X.push(Y);else Y=X[W];return Y}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var vq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yq=`uniform sampler2D shadow_pass;
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
}`,bq=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],fq=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],sX=new M9,$7=new x,eK=new x;function hq(J,Q,Z){let K=new XQ,$=new x0,W=new x0,X=new Y9,Y=new wK,H=new SK,N={},q=Z.maxTextureSize,U={[O6]:a9,[a9]:O6,[T8]:T8},G=new e9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new x0},radius:{value:4}},vertexShader:vq,fragmentShader:yq}),D=G.clone();D.defines.HORIZONTAL_PASS=1;let O=new q8;O.setAttribute("position",new N8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new $8(O,G),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l6;let E=this.type;this.render=function(P,_,I){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(P.length===0)return;if(this.type===PW)v0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=l6;let B=J.getRenderTarget(),p=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),y=J.state;if(y.setBlending(w8),y.buffers.depth.getReversed()===!0)y.buffers.color.setClear(0,0,0,0);else y.buffers.color.setClear(1,1,1,1);y.buffers.depth.setTest(!0),y.setScissorTest(!1);let m=E!==this.type;if(m)_.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((w)=>w.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,w=P.length;T<w;T++){let n=P[T],u=n.shadow;if(u===void 0){v0("WebGLShadowMap:",n,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;$.copy(u.mapSize);let $0=u.getFrameExtents();if($.multiply($0),W.copy(u.mapSize),$.x>q||$.y>q){if($.x>q)W.x=Math.floor(q/$0.x),$.x=W.x*$0.x,u.mapSize.x=W.x;if($.y>q)W.y=Math.floor(q/$0.y),$.y=W.y*$0.y,u.mapSize.y=W.y}let i=J.state.buffers.depth.getReversed();if(u.camera._reversedDepth=i,u.map===null||m===!0){if(u.map!==null){if(u.map.depthTexture!==null)u.map.depthTexture.dispose(),u.map.depthTexture=null;u.map.dispose()}if(this.type===F6){if(n.isPointLight){v0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}u.map=new K8($.x,$.y,{format:SJ,type:S8,minFilter:r9,magFilter:r9,generateMipmaps:!1}),u.map.texture.name=n.name+".shadowMap",u.map.depthTexture=new vJ($.x,$.y,r8),u.map.depthTexture.name=n.name+".shadowMapDepth",u.map.depthTexture.format=TJ,u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=FJ,u.map.depthTexture.magFilter=FJ}else{if(n.isPointLight)u.map=new K$($.x),u.map.depthTexture=new kK($.x,OJ);else u.map=new K8($.x,$.y),u.map.depthTexture=new vJ($.x,$.y,OJ);if(u.map.depthTexture.name=n.name+".shadowMap",u.map.depthTexture.format=TJ,this.type===l6)u.map.depthTexture.compareFunction=i?t7:r7,u.map.depthTexture.minFilter=r9,u.map.depthTexture.magFilter=r9;else u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=FJ,u.map.depthTexture.magFilter=FJ}u.camera.updateProjectionMatrix()}if(u.map.isWebGLCubeRenderTarget!==!0&&(u.map.width!==$.x||u.map.height!==$.y))u.map.setSize($.x,$.y);let Z0=u.map.isWebGLCubeRenderTarget?6:u.getViewportCount();if(n.isPointLight!==!0)u.updateMatrices(n,I);for(let X0=0;X0<Z0;X0++){let w0=u.getCamera(X0);if(n.isPointLight){let{camera:T0,matrix:n0}=u,u0=n.distance||T0.far;if(u0!==T0.far)T0.far=u0,T0.updateProjectionMatrix();$7.setFromMatrixPosition(n.matrixWorld),T0.position.copy($7),eK.copy(T0.position),eK.add(bq[X0]),T0.up.copy(fq[X0]),T0.lookAt(eK),T0.updateMatrixWorld(),n0.makeTranslation(-$7.x,-$7.y,-$7.z),sX.multiplyMatrices(T0.projectionMatrix,T0.matrixWorldInverse),u._frustum.setFromProjectionMatrix(sX,T0.coordinateSystem,T0.reversedDepth)}if(u.map.isWebGLCubeRenderTarget)J.setRenderTarget(u.map,X0),J.clear();else{if(X0===0)J.setRenderTarget(u.map),J.clear();let T0=u.getViewport(X0);X.set(W.x*T0.x,W.y*T0.y,W.x*T0.z,W.y*T0.w),y.viewport(X)}K=u.getFrustum(X0),V(_,I,w0,n,this.type)}if(u.isPointLightShadow!==!0&&this.type===F6)R(u,I);u.needsUpdate=!1}E=this.type,F.needsUpdate=!1,J.setRenderTarget(B,p,j)};function R(P,_){let I=Q.update(L);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,D.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,D.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new K8($.x,$.y,{format:SJ,type:S8});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(_,null,I,G,L,null),D.uniforms.shadow_pass.value=P.mapPass.texture,D.uniforms.resolution.value.set(P.map.width,P.map.height),D.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(_,null,I,D,L,null)}function k(P,_,I,B){let p=null,j=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)p=j;else if(p=I.isPointLight===!0?H:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let y=p.uuid,m=_.uuid,T=N[y];if(T===void 0)T={},N[y]=T;let w=T[m];if(w===void 0)w=p.clone(),T[m]=w,_.addEventListener("dispose",A);p=w}if(p.visible=_.visible,p.wireframe=_.wireframe,B===F6)p.side=_.shadowSide!==null?_.shadowSide:_.side;else p.side=_.shadowSide!==null?_.shadowSide:U[_.side];if(p.alphaMap=_.alphaMap,p.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,p.map=_.map,p.clipShadows=_.clipShadows,p.clippingPlanes=_.clippingPlanes,p.clipIntersection=_.clipIntersection,p.displacementMap=_.displacementMap,p.displacementScale=_.displacementScale,p.displacementBias=_.displacementBias,p.wireframeLinewidth=_.wireframeLinewidth,p.linewidth=_.linewidth,I.isPointLight===!0&&p.isMeshDistanceMaterial===!0){let y=J.properties.get(p);y.light=I}return p}function V(P,_,I,B,p){if(P.visible===!1)return;if(P.layers.test(_.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&p===F6)&&(!P.frustumCulled||P.intersectsFrustum(K))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);let m=Q.update(P),T=P.material;if(Array.isArray(T)){let w=m.groups;for(let n=0,u=w.length;n<u;n++){let $0=w[n],i=T[$0.materialIndex];if(i&&i.visible){let Z0=k(P,i,B,p);P.onBeforeShadow(J,P,_,I,m,Z0,$0),J.renderBufferDirect(I,null,m,Z0,P,$0),P.onAfterShadow(J,P,_,I,m,Z0,$0)}}}else if(T.visible){let w=k(P,T,B,p);P.onBeforeShadow(J,P,_,I,m,w,null),J.renderBufferDirect(I,null,m,w,P,null),P.onAfterShadow(J,P,_,I,m,w,null)}}}let y=P.children;for(let m=0,T=y.length;m<T;m++)V(y[m],_,I,B,p)}function A(P){P.target.removeEventListener("dispose",A);for(let I in N){let B=N[I],p=P.target.uuid;if(p in B)B[p].dispose(),delete B[p]}}}function xq(J,Q){function Z(){let h=!1,D0=new Y9,J0=null,F0=new Y9(0,0,0,0);return{setMask:function(V0){if(J0!==V0&&!h)J.colorMask(V0,V0,V0,V0),J0=V0},setLocked:function(V0){h=V0},setClear:function(V0,Y0,R0,d0,E9){if(E9===!0)V0*=d0,Y0*=d0,R0*=d0;if(D0.set(V0,Y0,R0,d0),F0.equals(D0)===!1)J.clearColor(V0,Y0,R0,d0),F0.copy(D0)},reset:function(){h=!1,J0=null,F0.set(-1,0,0,0)}}}function K(){let h=!1,D0=!1,J0=null,F0=null,V0=null;return{setReversed:function(Y0){if(D0!==Y0){let R0=Q.get("EXT_clip_control");if(Y0)R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.ZERO_TO_ONE_EXT);else R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.NEGATIVE_ONE_TO_ONE_EXT);D0=Y0;let d0=V0;V0=null,this.setClear(d0)}},getReversed:function(){return D0},setTest:function(Y0){if(Y0)d(J.DEPTH_TEST);else a(J.DEPTH_TEST)},setMask:function(Y0){if(J0!==Y0&&!h)J.depthMask(Y0),J0=Y0},setFunc:function(Y0){if(D0)Y0=CX[Y0];if(F0!==Y0){switch(Y0){case cW:J.depthFunc(J.NEVER);break;case nW:J.depthFunc(J.ALWAYS);break;case sW:J.depthFunc(J.LESS);break;case PZ:J.depthFunc(J.LEQUAL);break;case iW:J.depthFunc(J.EQUAL);break;case oW:J.depthFunc(J.GEQUAL);break;case aW:J.depthFunc(J.GREATER);break;case rW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}F0=Y0}},setLocked:function(Y0){h=Y0},setClear:function(Y0){if(V0!==Y0){if(V0=Y0,D0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){h=!1,J0=null,F0=null,V0=null,D0=!1}}}function $(){let h=!1,D0=null,J0=null,F0=null,V0=null,Y0=null,R0=null,d0=null,E9=null;return{setTest:function(K9){if(!h)if(K9)d(J.STENCIL_TEST);else a(J.STENCIL_TEST)},setMask:function(K9){if(D0!==K9&&!h)J.stencilMask(K9),D0=K9},setFunc:function(K9,z8,u8){if(J0!==K9||F0!==z8||V0!==u8)J.stencilFunc(K9,z8,u8),J0=K9,F0=z8,V0=u8},setOp:function(K9,z8,u8){if(Y0!==K9||R0!==z8||d0!==u8)J.stencilOp(K9,z8,u8),Y0=K9,R0=z8,d0=u8},setLocked:function(K9){h=K9},setClear:function(K9){if(E9!==K9)J.clearStencil(K9),E9=K9},reset:function(){h=!1,D0=null,J0=null,F0=null,V0=null,Y0=null,R0=null,d0=null,E9=null}}}let W=new Z,X=new K,Y=new $,H=new WeakMap,N=new WeakMap,q={},U={},G={},D=new WeakMap,O=[],L=null,F=!1,E=null,R=null,k=null,V=null,A=null,P=null,_=null,I=new e0(0,0,0),B=0,p=!1,j=null,y=null,m=null,T=null,w=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,$0=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)$0=parseFloat(/^WebGL (\d)/.exec(i)[1]),u=$0>=1;else if(i.indexOf("OpenGL ES")!==-1)$0=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),u=$0>=2;let Z0=null,X0={},w0=J.getParameter(J.SCISSOR_BOX),T0=J.getParameter(J.VIEWPORT),n0=new Y9().fromArray(w0),u0=new Y9().fromArray(T0);function S(h,D0,J0,F0){let V0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(h,Y0),J.texParameteri(h,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(h,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let R0=0;R0<J0;R0++)if(h===J.TEXTURE_3D||h===J.TEXTURE_2D_ARRAY)J.texImage3D(D0,0,J.RGBA,1,1,F0,0,J.RGBA,J.UNSIGNED_BYTE,V0);else J.texImage2D(D0+R0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,V0);return Y0}let g={};g[J.TEXTURE_2D]=S(J.TEXTURE_2D,J.TEXTURE_2D,1),g[J.TEXTURE_CUBE_MAP]=S(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),g[J.TEXTURE_2D_ARRAY]=S(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),g[J.TEXTURE_3D]=S(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),d(J.DEPTH_TEST),X.setFunc(PZ),i0(!1),r0(CZ),d(J.CULL_FACE),m0(w8);function d(h){if(q[h]!==!0)J.enable(h),q[h]=!0}function a(h){if(q[h]!==!1)J.disable(h),q[h]=!1}function Q0(h,D0){if(G[h]!==D0){if(J.bindFramebuffer(h,D0),G[h]=D0,h===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=D0;if(h===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=D0;return!0}return!1}function r(h,D0){let J0=O,F0=!1;if(h){if(J0=D.get(D0),J0===void 0)J0=[],D.set(D0,J0);let V0=h.textures;if(J0.length!==V0.length||J0[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,R0=V0.length;Y0<R0;Y0++)J0[Y0]=J.COLOR_ATTACHMENT0+Y0;J0.length=V0.length,F0=!0}}else if(J0[0]!==J.BACK)J0[0]=J.BACK,F0=!0;if(F0)J.drawBuffers(J0)}function z0(h){if(L!==h)return J.useProgram(h),L=h,!0;return!1}let q0={[R6]:J.FUNC_ADD,[kW]:J.FUNC_SUBTRACT,[_W]:J.FUNC_REVERSE_SUBTRACT};q0[TW]=J.MIN,q0[p7]=J.MAX;let y0={[wW]:J.ZERO,[SW]:J.ONE,[jW]:J.SRC_COLOR,[yW]:J.SRC_ALPHA,[pW]:J.SRC_ALPHA_SATURATE,[xW]:J.DST_COLOR,[fW]:J.DST_ALPHA,[vW]:J.ONE_MINUS_SRC_COLOR,[bW]:J.ONE_MINUS_SRC_ALPHA,[gW]:J.ONE_MINUS_DST_COLOR,[hW]:J.ONE_MINUS_DST_ALPHA,[mW]:J.CONSTANT_COLOR,[dW]:J.ONE_MINUS_CONSTANT_COLOR,[uW]:J.CONSTANT_ALPHA,[lW]:J.ONE_MINUS_CONSTANT_ALPHA};function m0(h,D0,J0,F0,V0,Y0,R0,d0,E9,K9){if(h===w8){if(F===!0)a(J.BLEND),F=!1;return}if(F===!1)d(J.BLEND),F=!0;if(h!==g7){if(h!==E||K9!==p){if(R!==R6||A!==R6)J.blendEquation(J.FUNC_ADD),R=R6,A=R6;if(K9)switch(h){case c6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case BZ:J.blendFunc(J.ONE,J.ONE);break;case AZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case zZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:f0("WebGLState: Invalid blending: ",h);break}else switch(h){case c6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case BZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case AZ:f0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zZ:f0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:f0("WebGLState: Invalid blending: ",h);break}k=null,V=null,P=null,_=null,I.set(0,0,0),B=0,E=h,p=K9}return}if(V0=V0||D0,Y0=Y0||J0,R0=R0||F0,D0!==R||V0!==A)J.blendEquationSeparate(q0[D0],q0[V0]),R=D0,A=V0;if(J0!==k||F0!==V||Y0!==P||R0!==_)J.blendFuncSeparate(y0[J0],y0[F0],y0[Y0],y0[R0]),k=J0,V=F0,P=Y0,_=R0;if(d0.equals(I)===!1||E9!==B)J.blendColor(d0.r,d0.g,d0.b,E9),I.copy(d0),B=E9;E=h,p=!1}function h0(h,D0){h.side===T8?a(J.CULL_FACE):d(J.CULL_FACE);let J0=h.side===a9;if(D0)J0=!J0;i0(J0),h.blending===c6&&h.transparent===!1?m0(w8):m0(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),X.setFunc(h.depthFunc),X.setTest(h.depthTest),X.setMask(h.depthWrite),W.setMask(h.colorWrite);let F0=h.stencilWrite;if(Y.setTest(F0),F0)Y.setMask(h.stencilWriteMask),Y.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),Y.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass);F9(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?d(J.SAMPLE_ALPHA_TO_COVERAGE):a(J.SAMPLE_ALPHA_TO_COVERAGE)}function i0(h){if(j!==h){if(h)J.frontFace(J.CW);else J.frontFace(J.CCW);j=h}}function r0(h){if(h!==AW){if(d(J.CULL_FACE),h!==y)if(h===CZ)J.cullFace(J.BACK);else if(h===zW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a(J.CULL_FACE);y=h}function I9(h){if(h!==m){if(u)J.lineWidth(h);m=h}}function F9(h,D0,J0){if(h){if(d(J.POLYGON_OFFSET_FILL),T!==D0||w!==J0){if(T=D0,w=J0,X.getReversed())D0=-D0;J.polygonOffset(D0,J0)}}else a(J.POLYGON_OFFSET_FILL)}function O9(h){if(h)d(J.SCISSOR_TEST);else a(J.SCISSOR_TEST)}function v(h){if(h===void 0)h=J.TEXTURE0+n-1;if(Z0!==h)J.activeTexture(h),Z0=h}function A9(h,D0,J0){if(J0===void 0)if(Z0===null)J0=J.TEXTURE0+n-1;else J0=Z0;let F0=X0[J0];if(F0===void 0)F0={type:void 0,texture:void 0},X0[J0]=F0;if(F0.type!==h||F0.texture!==D0){if(Z0!==J0)J.activeTexture(J0),Z0=J0;J.bindTexture(h,D0||g[h]),F0.type=h,F0.texture=D0}}function J9(){let h=X0[Z0];if(h!==void 0&&h.type!==void 0)J.bindTexture(h.type,null),h.type=void 0,h.texture=void 0}function N9(){try{J.compressedTexImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function M(){try{J.texSubImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function b(){try{J.texSubImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function W0(){try{J.compressedTexSubImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function U0(){try{J.texStorage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function E0(){try{J.texStorage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function t(){try{J.texImage2D(...arguments)}catch(h){f0("WebGLState:",h)}}function K0(){try{J.texImage3D(...arguments)}catch(h){f0("WebGLState:",h)}}function O0(h){if(U[h]!==void 0)return U[h];else return J.getParameter(h)}function A0(h,D0){if(U[h]!==D0)J.pixelStorei(h,D0),U[h]=D0}function N0(h){if(n0.equals(h)===!1)J.scissor(h.x,h.y,h.z,h.w),n0.copy(h)}function H0(h){if(u0.equals(h)===!1)J.viewport(h.x,h.y,h.z,h.w),u0.copy(h)}function S0(h,D0){let J0=N.get(D0);if(J0===void 0)J0=new WeakMap,N.set(D0,J0);let F0=J0.get(h);if(F0===void 0)F0=J.getUniformBlockIndex(D0,h.name),J0.set(h,F0)}function j0(h,D0){let F0=N.get(D0).get(h);if(H.get(D0)!==F0)J.uniformBlockBinding(D0,F0,h.__bindingPointIndex),H.set(D0,F0)}function Q9(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),q={},U={},Z0=null,X0={},G={},D=new WeakMap,O=[],L=null,F=!1,E=null,R=null,k=null,V=null,A=null,P=null,_=null,I=new e0(0,0,0),B=0,p=!1,j=null,y=null,m=null,T=null,w=null,n0.set(0,0,J.canvas.width,J.canvas.height),u0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:d,disable:a,bindFramebuffer:Q0,drawBuffers:r,useProgram:z0,setBlending:m0,setMaterial:h0,setFlipSided:i0,setCullFace:r0,setLineWidth:I9,setPolygonOffset:F9,setScissorTest:O9,activeTexture:v,bindTexture:A9,unbindTexture:J9,compressedTexImage2D:N9,compressedTexImage3D:z,texImage2D:t,texImage3D:K0,pixelStorei:A0,getParameter:O0,updateUBOMapping:S0,uniformBlockBinding:j0,texStorage2D:U0,texStorage3D:E0,texSubImage2D:M,texSubImage3D:b,compressedTexSubImage2D:s,compressedTexSubImage3D:W0,scissor:N0,viewport:H0,reset:Q9}}function gq(J,Q,Z,K,$,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),N=new x0,q=new WeakMap,U=new Set,G,D=new WeakMap,O=!1;try{O=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function L(z,M){return O?new OffscreenCanvas(z,M):d6("canvas")}function F(z,M,b){let s=1,W0=N9(z);if(W0.width>b||W0.height>b)s=b/Math.max(W0.width,W0.height);if(s<1)if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&z instanceof VideoFrame){let U0=Math.floor(s*W0.width),E0=Math.floor(s*W0.height);if(G===void 0)G=L(U0,E0);let t=M?L(U0,E0):G;return t.width=U0,t.height=E0,t.getContext("2d").drawImage(z,0,0,U0,E0),v0("WebGLRenderer: Texture has been resized from ("+W0.width+"x"+W0.height+") to ("+U0+"x"+E0+")."),t}else{if("data"in z)v0("WebGLRenderer: Image in DataTexture is too big ("+W0.width+"x"+W0.height+").");return z}return z}function E(z){return z.generateMipmaps}function R(z){J.generateMipmap(z)}function k(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(z,M,b,s,W0,U0=!1){if(z!==null){if(J[z]!==void 0)return J[z];v0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let E0;if(s){if(E0=Q.get("EXT_texture_norm16"),!E0)v0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let t=M;if(M===J.RED){if(b===J.FLOAT)t=J.R32F;if(b===J.HALF_FLOAT)t=J.R16F;if(b===J.UNSIGNED_BYTE)t=J.R8;if(b===J.UNSIGNED_SHORT&&E0)t=E0.R16_EXT;if(b===J.SHORT&&E0)t=E0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.R8UI;if(b===J.UNSIGNED_SHORT)t=J.R16UI;if(b===J.UNSIGNED_INT)t=J.R32UI;if(b===J.BYTE)t=J.R8I;if(b===J.SHORT)t=J.R16I;if(b===J.INT)t=J.R32I}if(M===J.RG){if(b===J.FLOAT)t=J.RG32F;if(b===J.HALF_FLOAT)t=J.RG16F;if(b===J.UNSIGNED_BYTE)t=J.RG8;if(b===J.UNSIGNED_SHORT&&E0)t=E0.RG16_EXT;if(b===J.SHORT&&E0)t=E0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RG8UI;if(b===J.UNSIGNED_SHORT)t=J.RG16UI;if(b===J.UNSIGNED_INT)t=J.RG32UI;if(b===J.BYTE)t=J.RG8I;if(b===J.SHORT)t=J.RG16I;if(b===J.INT)t=J.RG32I}if(M===J.RGB_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RGB8UI;if(b===J.UNSIGNED_SHORT)t=J.RGB16UI;if(b===J.UNSIGNED_INT)t=J.RGB32UI;if(b===J.BYTE)t=J.RGB8I;if(b===J.SHORT)t=J.RGB16I;if(b===J.INT)t=J.RGB32I}if(M===J.RGBA_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RGBA8UI;if(b===J.UNSIGNED_SHORT)t=J.RGBA16UI;if(b===J.UNSIGNED_INT)t=J.RGBA32UI;if(b===J.BYTE)t=J.RGBA8I;if(b===J.SHORT)t=J.RGBA16I;if(b===J.INT)t=J.RGBA32I}if(M===J.RGB){if(b===J.UNSIGNED_SHORT&&E0)t=E0.RGB16_EXT;if(b===J.SHORT&&E0)t=E0.RGB16_SNORM_EXT;if(b===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5;if(b===J.UNSIGNED_INT_10F_11F_11F_REV)t=J.R11F_G11F_B10F}if(M===J.RGBA){let K0=U0?MK:o0.getTransfer(W0);if(b===J.FLOAT)t=J.RGBA32F;if(b===J.HALF_FLOAT)t=J.RGBA16F;if(b===J.UNSIGNED_BYTE)t=K0===q9?J.SRGB8_ALPHA8:J.RGBA8;if(b===J.UNSIGNED_SHORT&&E0)t=E0.RGBA16_EXT;if(b===J.SHORT&&E0)t=E0.RGBA16_SNORM_EXT;if(b===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(b===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function A(z,M){let b;if(z){if(M===null||M===OJ||M===L6)b=J.DEPTH24_STENCIL8;else if(M===r8)b=J.DEPTH32F_STENCIL8;else if(M===i6)b=J.DEPTH24_STENCIL8,v0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===OJ||M===L6)b=J.DEPTH_COMPONENT24;else if(M===r8)b=J.DEPTH_COMPONENT32F;else if(M===i6)b=J.DEPTH_COMPONENT16;return b}function P(z,M){if(E(z)===!0||z.isFramebufferTexture&&z.minFilter!==FJ&&z.minFilter!==r9)return Math.log2(Math.max(M.width,M.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return M.mipmaps.length;else return 1}function _(z){let M=z.target;if(M.removeEventListener("dispose",_),B(M),M.isVideoTexture)q.delete(M);if(M.isHTMLTexture)U.delete(M)}function I(z){let M=z.target;M.removeEventListener("dispose",I),j(M)}function B(z){let M=K.get(z);if(M.__webglInit===void 0)return;let b=z.source,s=D.get(b);if(s){let W0=s[M.__cacheKey];if(W0.usedTimes--,W0.usedTimes===0)p(z);if(Object.keys(s).length===0)D.delete(b)}K.remove(z)}function p(z){let M=K.get(z);J.deleteTexture(M.__webglTexture);let b=z.source,s=D.get(b);delete s[M.__cacheKey],X.memory.textures--}function j(z){let M=K.get(z);if(z.depthTexture)z.depthTexture.dispose(),K.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(M.__webglFramebuffer[s]))for(let W0=0;W0<M.__webglFramebuffer[s].length;W0++)J.deleteFramebuffer(M.__webglFramebuffer[s][W0]);else J.deleteFramebuffer(M.__webglFramebuffer[s]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[s])}else{if(Array.isArray(M.__webglFramebuffer))for(let s=0;s<M.__webglFramebuffer.length;s++)J.deleteFramebuffer(M.__webglFramebuffer[s]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let s=0;s<M.__webglColorRenderbuffer.length;s++)if(M.__webglColorRenderbuffer[s])J.deleteRenderbuffer(M.__webglColorRenderbuffer[s])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let b=z.textures;for(let s=0,W0=b.length;s<W0;s++){let U0=K.get(b[s]);if(U0.__webglTexture)J.deleteTexture(U0.__webglTexture),X.memory.textures--;K.remove(b[s])}K.remove(z)}let y=0;function m(){y=0}function T(){return y}function w(z){y=z}function n(){let z=y;if(z>=$.maxTextures)v0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+$.maxTextures);return y+=1,z}function u(z){let M=[];return M.push(z.wrapS),M.push(z.wrapT),M.push(z.wrapR||0),M.push(z.magFilter),M.push(z.minFilter),M.push(z.anisotropy),M.push(z.internalFormat),M.push(z.format),M.push(z.type),M.push(z.generateMipmaps),M.push(z.premultiplyAlpha),M.push(z.flipY),M.push(z.unpackAlignment),M.push(z.colorSpace),M.join()}function $0(z,M){let b=K.get(z);if(z.isVideoTexture)A9(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&b.__version!==z.version){let s=z.image;if(s===null)v0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)v0("WebGLRenderer: Texture marked for update but image is incomplete");else{a(b,z,M);return}}else if(z.isExternalTexture)b.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,b.__webglTexture,J.TEXTURE0+M)}function i(z,M){let b=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&b.__version!==z.version){a(b,z,M);return}else if(z.isExternalTexture)b.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D_ARRAY,b.__webglTexture,J.TEXTURE0+M)}function Z0(z,M){let b=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&b.__version!==z.version){a(b,z,M);return}Z.bindTexture(J.TEXTURE_3D,b.__webglTexture,J.TEXTURE0+M)}function X0(z,M){let b=K.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&b.__version!==z.version){Q0(b,z,M);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,b.__webglTexture,J.TEXTURE0+M)}let w0={[QX]:J.REPEAT,[u7]:J.CLAMP_TO_EDGE,[ZX]:J.MIRRORED_REPEAT},T0={[FJ]:J.NEAREST,[KX]:J.NEAREST_MIPMAP_NEAREST,[s6]:J.NEAREST_MIPMAP_LINEAR,[r9]:J.LINEAR,[l7]:J.LINEAR_MIPMAP_NEAREST,[_J]:J.LINEAR_MIPMAP_LINEAR},n0={[EX]:J.NEVER,[MX]:J.ALWAYS,[DX]:J.LESS,[r7]:J.LEQUAL,[FX]:J.EQUAL,[t7]:J.GEQUAL,[OX]:J.GREATER,[RX]:J.NOTEQUAL};function u0(z,M){if(M.type===r8&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===r9||M.magFilter===l7||M.magFilter===s6||M.magFilter===_J||M.minFilter===r9||M.minFilter===l7||M.minFilter===s6||M.minFilter===_J))v0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,w0[M.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,w0[M.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,w0[M.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,T0[M.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,T0[M.minFilter]),M.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,n0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===FJ)return;if(M.minFilter!==s6&&M.minFilter!==_J)return;if(M.type===r8&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||K.get(M).__currentAnisotropy){let b=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,$.getMaxAnisotropy())),K.get(M).__currentAnisotropy=M.anisotropy}}}function S(z,M){let b=!1;if(z.__webglInit===void 0)z.__webglInit=!0,M.addEventListener("dispose",_);let s=M.source,W0=D.get(s);if(W0===void 0)W0={},D.set(s,W0);let U0=u(M);if(U0!==z.__cacheKey){if(W0[U0]===void 0)W0[U0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,b=!0;W0[U0].usedTimes++;let E0=W0[z.__cacheKey];if(E0!==void 0){if(W0[z.__cacheKey].usedTimes--,E0.usedTimes===0)p(M)}z.__cacheKey=U0,z.__webglTexture=W0[U0].texture}return b}function g(z,M,b){return Math.floor(Math.floor(z/b)/M)}function d(z,M,b,s){let U0=z.updateRanges;if(U0.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,b,s,M.data);else{U0.sort((A0,N0)=>A0.start-N0.start);let E0=0;for(let A0=1;A0<U0.length;A0++){let N0=U0[E0],H0=U0[A0],S0=N0.start+N0.count,j0=g(H0.start,M.width,4),Q9=g(N0.start,M.width,4);if(H0.start<=S0+1&&j0===Q9&&g(H0.start+H0.count-1,M.width,4)===j0)N0.count=Math.max(N0.count,H0.start+H0.count-N0.start);else++E0,U0[E0]=H0}U0.length=E0+1;let t=Z.getParameter(J.UNPACK_ROW_LENGTH),K0=Z.getParameter(J.UNPACK_SKIP_PIXELS),O0=Z.getParameter(J.UNPACK_SKIP_ROWS);Z.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let A0=0,N0=U0.length;A0<N0;A0++){let H0=U0[A0],S0=Math.floor(H0.start/4),j0=Math.ceil(H0.count/4),Q9=S0%M.width,h=Math.floor(S0/M.width),D0=j0,J0=1;Z.pixelStorei(J.UNPACK_SKIP_PIXELS,Q9),Z.pixelStorei(J.UNPACK_SKIP_ROWS,h),Z.texSubImage2D(J.TEXTURE_2D,0,Q9,h,D0,1,b,s,M.data)}z.clearUpdateRanges(),Z.pixelStorei(J.UNPACK_ROW_LENGTH,t),Z.pixelStorei(J.UNPACK_SKIP_PIXELS,K0),Z.pixelStorei(J.UNPACK_SKIP_ROWS,O0)}}function a(z,M,b){let s=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)s=J.TEXTURE_3D;let W0=S(z,M),U0=M.source;Z.bindTexture(s,z.__webglTexture,J.TEXTURE0+b);let E0=K.get(U0);if(U0.version!==E0.__version||W0===!0){if(Z.activeTexture(J.TEXTURE0+b),(typeof ImageBitmap!=="undefined"&&M.image instanceof ImageBitmap)===!1){let J0=o0.getPrimaries(o0.workingColorSpace),F0=M.colorSpace===jJ?null:o0.getPrimaries(M.colorSpace),V0=M.colorSpace===jJ||J0===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,V0)}Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let K0=F(M.image,!1,$.maxTextureSize);K0=J9(M,K0);let O0=W.convert(M.format,M.colorSpace),A0=W.convert(M.type),N0=V(M.internalFormat,O0,A0,M.normalized,M.colorSpace,M.isVideoTexture);u0(s,M);let H0,S0=M.mipmaps,j0=M.isVideoTexture!==!0,Q9=E0.__version===void 0||W0===!0,h=U0.dataReady,D0=P(M,K0);if(M.isDepthTexture){if(N0=A(M.format===wJ,M.type),Q9)if(j0)Z.texStorage2D(J.TEXTURE_2D,1,N0,K0.width,K0.height);else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,O0,A0,null)}else if(M.isDataTexture)if(S0.length>0){if(j0&&Q9)Z.texStorage2D(J.TEXTURE_2D,D0,N0,S0[0].width,S0[0].height);for(let J0=0,F0=S0.length;J0<F0;J0++)if(H0=S0[J0],j0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,A0,H0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,A0,H0.data);M.generateMipmaps=!1}else if(j0){if(Q9)Z.texStorage2D(J.TEXTURE_2D,D0,N0,K0.width,K0.height);if(h)d(M,K0,O0,A0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,O0,A0,K0.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(j0&&Q9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,D0,N0,S0[0].width,S0[0].height,K0.depth);for(let J0=0,F0=S0.length;J0<F0;J0++)if(H0=S0[J0],M.format!==j8)if(O0!==null)if(j0){if(h)if(M.layerUpdates.size>0){let V0=sK(H0.width,H0.height,M.format,M.type);for(let Y0 of M.layerUpdates){let R0=H0.data.subarray(Y0*V0/H0.data.BYTES_PER_ELEMENT,(Y0+1)*V0/H0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,Y0,H0.width,H0.height,1,O0,R0)}}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,K0.depth,O0,H0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,K0.depth,0,H0.data,0,0);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j0){if(h)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,K0.depth,O0,A0,H0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,K0.depth,0,O0,A0,H0.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(j0&&Q9)Z.texStorage2D(J.TEXTURE_2D,D0,N0,S0[0].width,S0[0].height);for(let J0=0,F0=S0.length;J0<F0;J0++)if(H0=S0[J0],M.format!==j8)if(O0!==null)if(j0){if(h)Z.compressedTexSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,H0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,H0.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,A0,H0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,A0,H0.data)}else if(M.isDataArrayTexture)if(j0){if(Q9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,D0,N0,K0.width,K0.height,K0.depth);if(h)if(M.layerUpdates.size>0){let J0=sK(K0.width,K0.height,M.format,M.type);for(let F0 of M.layerUpdates){let V0=K0.data.subarray(F0*J0/K0.data.BYTES_PER_ELEMENT,(F0+1)*J0/K0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,F0,K0.width,K0.height,1,O0,A0,V0)}M.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,K0.width,K0.height,K0.depth,O0,A0,K0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,N0,K0.width,K0.height,K0.depth,0,O0,A0,K0.data);else if(M.isData3DTexture)if(j0){if(Q9)Z.texStorage3D(J.TEXTURE_3D,D0,N0,K0.width,K0.height,K0.depth);if(h)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,K0.width,K0.height,K0.depth,O0,A0,K0.data)}else Z.texImage3D(J.TEXTURE_3D,0,N0,K0.width,K0.height,K0.depth,0,O0,A0,K0.data);else if(M.isFramebufferTexture){if(Q9)if(j0)Z.texStorage2D(J.TEXTURE_2D,D0,N0,K0.width,K0.height);else{let{width:J0,height:F0}=K0;for(let V0=0;V0<D0;V0++)Z.texImage2D(J.TEXTURE_2D,V0,N0,J0,F0,0,O0,A0,null),J0>>=1,F0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let J0=J.canvas;if(!J0.hasAttribute("layoutsubtree"))J0.setAttribute("layoutsubtree","true");if(K0.parentNode!==J0){J0.appendChild(K0),U.add(M),J0.onpaint=(F0)=>{let V0=F0.changedElements;for(let Y0 of U)if(V0.includes(Y0.image))Y0.needsUpdate=!0},J0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,K0);else{let{RGBA:V0,RGBA:Y0,UNSIGNED_BYTE:R0}=J;J.texElementImage2D(J.TEXTURE_2D,0,V0,Y0,R0,K0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(S0.length>0){if(j0&&Q9){let J0=N9(S0[0]);Z.texStorage2D(J.TEXTURE_2D,D0,N0,J0.width,J0.height)}for(let J0=0,F0=S0.length;J0<F0;J0++)if(H0=S0[J0],j0){if(h)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,O0,A0,H0)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,O0,A0,H0);M.generateMipmaps=!1}else if(j0){if(Q9){let J0=N9(K0);Z.texStorage2D(J.TEXTURE_2D,D0,N0,J0.width,J0.height)}if(h)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,O0,A0,K0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,O0,A0,K0);if(E(M))R(s);if(E0.__version=U0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function Q0(z,M,b){if(M.image.length!==6)return;let s=S(z,M),W0=M.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+b);let U0=K.get(W0);if(W0.version!==U0.__version||s===!0){Z.activeTexture(J.TEXTURE0+b);let E0=o0.getPrimaries(o0.workingColorSpace),t=M.colorSpace===jJ?null:o0.getPrimaries(M.colorSpace),K0=M.colorSpace===jJ||E0===t?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,K0);let O0=M.isCompressedTexture||M.image[0].isCompressedTexture,A0=M.image[0]&&M.image[0].isDataTexture,N0=[];for(let Y0=0;Y0<6;Y0++){if(!O0&&!A0)N0[Y0]=F(M.image[Y0],!0,$.maxCubemapSize);else N0[Y0]=A0?M.image[Y0].image:M.image[Y0];N0[Y0]=J9(M,N0[Y0])}let H0=N0[0],S0=W.convert(M.format,M.colorSpace),j0=W.convert(M.type),Q9=V(M.internalFormat,S0,j0,M.normalized,M.colorSpace),h=M.isVideoTexture!==!0,D0=U0.__version===void 0||s===!0,J0=W0.dataReady,F0=P(M,H0);u0(J.TEXTURE_CUBE_MAP,M);let V0;if(O0){if(h&&D0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,F0,Q9,H0.width,H0.height);for(let Y0=0;Y0<6;Y0++){V0=N0[Y0].mipmaps;for(let R0=0;R0<V0.length;R0++){let d0=V0[R0];if(M.format!==j8)if(S0!==null)if(h){if(J0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,d0.width,d0.height,S0,d0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,Q9,d0.width,d0.height,0,d0.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,d0.width,d0.height,S0,j0,d0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,Q9,d0.width,d0.height,0,S0,j0,d0.data)}}}else{if(V0=M.mipmaps,h&&D0){if(V0.length>0)F0++;let Y0=N9(N0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,F0,Q9,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(A0){if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,N0[Y0].width,N0[Y0].height,S0,j0,N0[Y0].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,Q9,N0[Y0].width,N0[Y0].height,0,S0,j0,N0[Y0].data);for(let R0=0;R0<V0.length;R0++){let E9=V0[R0].image[Y0].image;if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,E9.width,E9.height,S0,j0,E9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,Q9,E9.width,E9.height,0,S0,j0,E9.data)}}else{if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,S0,j0,N0[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,Q9,S0,j0,N0[Y0]);for(let R0=0;R0<V0.length;R0++){let d0=V0[R0];if(h){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,S0,j0,d0.image[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,Q9,S0,j0,d0.image[Y0])}}}if(E(M))R(J.TEXTURE_CUBE_MAP);if(U0.__version=W0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function r(z,M,b,s,W0,U0){let E0=W.convert(b.format,b.colorSpace),t=W.convert(b.type),K0=V(b.internalFormat,E0,t,b.normalized,b.colorSpace),O0=K.get(M),A0=K.get(b);if(A0.__renderTarget=M,!O0.__hasExternalTextures){let N0=Math.max(1,M.width>>U0),H0=Math.max(1,M.height>>U0);if(W0===J.TEXTURE_3D||W0===J.TEXTURE_2D_ARRAY)Z.texImage3D(W0,U0,K0,N0,H0,M.depth,0,E0,t,null);else Z.texImage2D(W0,U0,K0,N0,H0,0,E0,t,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,z),v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,W0,A0.__webglTexture,0,O9(M));else if(W0===J.TEXTURE_2D||W0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&W0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,W0,A0.__webglTexture,U0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function z0(z,M,b){if(J.bindRenderbuffer(J.RENDERBUFFER,z),M.depthBuffer){let s=M.depthTexture,W0=s&&s.isDepthTexture?s.type:null,U0=A(M.stencilBuffer,W0),E0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O9(M),U0,M.width,M.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,O9(M),U0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,E0,J.RENDERBUFFER,z)}else{let s=M.textures;for(let W0=0;W0<s.length;W0++){let U0=s[W0],E0=W.convert(U0.format,U0.colorSpace),t=W.convert(U0.type),K0=V(U0.internalFormat,E0,t,U0.normalized,U0.colorSpace);if(v(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O9(M),K0,M.width,M.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,O9(M),K0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function q0(z,M,b){let s=M.isWebGLCubeRenderTarget===!0;if(Z.bindFramebuffer(J.FRAMEBUFFER,z),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W0=K.get(M.depthTexture);if(W0.__renderTarget=M,!W0.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;if(s){if(W0.__webglInit===void 0)W0.__webglInit=!0,M.depthTexture.addEventListener("dispose",_);if(W0.__webglTexture===void 0){W0.__webglTexture=J.createTexture(),Z.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),u0(J.TEXTURE_CUBE_MAP,M.depthTexture);let O0=W.convert(M.depthTexture.format),A0=W.convert(M.depthTexture.type),N0;if(M.depthTexture.format===TJ)N0=J.DEPTH_COMPONENT24;else if(M.depthTexture.format===wJ)N0=J.DEPTH24_STENCIL8;for(let H0=0;H0<6;H0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,N0,M.width,M.height,0,O0,A0,null)}}else $0(M.depthTexture,0);let U0=W0.__webglTexture,E0=O9(M),t=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+b:J.TEXTURE_2D,K0=M.depthTexture.format===wJ?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===TJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,U0,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,U0,0);else if(M.depthTexture.format===wJ)if(v(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,U0,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,U0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function y0(z){let M=K.get(z),b=z.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==z.depthTexture){let s=z.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(s){let W0=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,s.removeEventListener("dispose",W0)};s.addEventListener("dispose",W0),M.__depthDisposeCallback=W0}M.__boundDepthTexture=s}if(z.depthTexture&&!M.__autoAllocateDepthBuffer)if(b)for(let s=0;s<6;s++)q0(M.__webglFramebuffer[s],z,s);else{let s=z.texture.mipmaps;if(s&&s.length>0)q0(M.__webglFramebuffer[0],z,0);else q0(M.__webglFramebuffer,z,0)}else if(b){M.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[s]),M.__webglDepthbuffer[s]===void 0)M.__webglDepthbuffer[s]=J.createRenderbuffer(),z0(M.__webglDepthbuffer[s],z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}else{let s=z.texture.mipmaps;if(s&&s.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),z0(M.__webglDepthbuffer,z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function m0(z,M,b){let s=K.get(z);if(M!==void 0)r(s.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(b!==void 0)y0(z)}function h0(z){let M=z.texture,b=K.get(z),s=K.get(M);z.addEventListener("dispose",I);let W0=z.textures,U0=z.isWebGLCubeRenderTarget===!0,E0=W0.length>1;if(!E0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=M.version,X.memory.textures++}if(U0){b.__webglFramebuffer=[];for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0){b.__webglFramebuffer[t]=[];for(let K0=0;K0<M.mipmaps.length;K0++)b.__webglFramebuffer[t][K0]=J.createFramebuffer()}else b.__webglFramebuffer[t]=J.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){b.__webglFramebuffer=[];for(let t=0;t<M.mipmaps.length;t++)b.__webglFramebuffer[t]=J.createFramebuffer()}else b.__webglFramebuffer=J.createFramebuffer();if(E0)for(let t=0,K0=W0.length;t<K0;t++){let O0=K.get(W0[t]);if(O0.__webglTexture===void 0)O0.__webglTexture=J.createTexture(),X.memory.textures++}if(z.samples>0&&v(z)===!1){b.__webglMultisampledFramebuffer=J.createFramebuffer(),b.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let t=0;t<W0.length;t++){let K0=W0[t];b.__webglColorRenderbuffer[t]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,b.__webglColorRenderbuffer[t]);let O0=W.convert(K0.format,K0.colorSpace),A0=W.convert(K0.type),N0=V(K0.internalFormat,O0,A0,K0.normalized,K0.colorSpace,z.isXRRenderTarget===!0),H0=O9(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,H0,N0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+t,J.RENDERBUFFER,b.__webglColorRenderbuffer[t])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)b.__webglDepthRenderbuffer=J.createRenderbuffer(),z0(b.__webglDepthRenderbuffer,z,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){Z.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),u0(J.TEXTURE_CUBE_MAP,M);for(let t=0;t<6;t++)if(M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(b.__webglFramebuffer[t][K0],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,K0);else r(b.__webglFramebuffer[t],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0);if(E(M))R(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(E0){for(let t=0,K0=W0.length;t<K0;t++){let O0=W0[t],A0=K.get(O0),N0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)N0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(N0,A0.__webglTexture),u0(N0,O0),r(b.__webglFramebuffer,z,O0,J.COLOR_ATTACHMENT0+t,N0,0),E(O0))R(N0)}Z.unbindTexture()}else{let t=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)t=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(t,s.__webglTexture),u0(t,M),M.mipmaps&&M.mipmaps.length>0)for(let K0=0;K0<M.mipmaps.length;K0++)r(b.__webglFramebuffer[K0],z,M,J.COLOR_ATTACHMENT0,t,K0);else r(b.__webglFramebuffer,z,M,J.COLOR_ATTACHMENT0,t,0);if(E(M))R(t);Z.unbindTexture()}if(z.depthBuffer)y0(z)}function i0(z){let M=z.textures;for(let b=0,s=M.length;b<s;b++){let W0=M[b];if(E(W0)){let U0=k(z),E0=K.get(W0).__webglTexture;Z.bindTexture(U0,E0),R(U0),Z.unbindTexture()}}}let r0=[],I9=[];function F9(z){if(z.samples>0){if(v(z)===!1){let{textures:M,width:b,height:s}=z,W0=J.COLOR_BUFFER_BIT,U0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,E0=K.get(z),t=M.length>1;if(t)for(let O0=0;O0<M.length;O0++)Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,E0.__webglMultisampledFramebuffer);let K0=z.texture.mipmaps;if(K0&&K0.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer);for(let O0=0;O0<M.length;O0++){if(z.resolveDepthBuffer){if(z.depthBuffer)W0|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)W0|=J.STENCIL_BUFFER_BIT}if(t){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[O0]);let A0=K.get(M[O0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,A0,0)}if(J.blitFramebuffer(0,0,b,s,0,0,b,s,W0,J.NEAREST),H===!0){if(r0.length=0,I9.length=0,r0.push(J.COLOR_ATTACHMENT0+O0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)r0.push(U0),I9.push(U0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,I9);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,r0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),t)for(let O0=0;O0<M.length;O0++){Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[O0]);let A0=K.get(M[O0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,A0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&H){let M=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function O9(z){return Math.min($.maxSamples,z.samples)}function v(z){let M=K.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function A9(z){let M=X.render.frame;if(q.get(z)!==M)q.set(z,M),z.update()}function J9(z,M){let{colorSpace:b,format:s,type:W0}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return M;if(b!==RK&&b!==jJ)if(o0.getTransfer(b)===q9){if(s!==j8||W0!==I8)v0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else f0("WebGLTextures: Unsupported texture color space:",b);return M}function N9(z){if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement)N.width=z.naturalWidth||z.width,N.height=z.naturalHeight||z.height;else if(typeof VideoFrame!=="undefined"&&z instanceof VideoFrame)N.width=z.displayWidth,N.height=z.displayHeight;else N.width=z.width,N.height=z.height;return N}this.allocateTextureUnit=n,this.resetTextureUnits=m,this.getTextureUnits=T,this.setTextureUnits=w,this.setTexture2D=$0,this.setTexture2DArray=i,this.setTexture3D=Z0,this.setTextureCube=X0,this.rebindTextures=m0,this.setupRenderTarget=h0,this.updateRenderTargetMipmap=i0,this.updateMultisampleRenderTarget=F9,this.setupDepthRenderbuffer=y0,this.setupFrameBufferTexture=r,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return Z.buffers.depth.getReversed()}}function pq(J,Q){function Z(K,$=jJ){let W,X=o0.getTransfer($);if(K===I8)return J.UNSIGNED_BYTE;if(K===bZ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===fZ)return J.UNSIGNED_SHORT_5_5_5_1;if(K===XX)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===YX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===$X)return J.BYTE;if(K===WX)return J.SHORT;if(K===i6)return J.UNSIGNED_SHORT;if(K===yZ)return J.INT;if(K===OJ)return J.UNSIGNED_INT;if(K===r8)return J.FLOAT;if(K===S8)return J.HALF_FLOAT;if(K===HX)return J.ALPHA;if(K===UX)return J.RGB;if(K===j8)return J.RGBA;if(K===TJ)return J.DEPTH_COMPONENT;if(K===wJ)return J.DEPTH_STENCIL;if(K===NX)return J.RED;if(K===hZ)return J.RED_INTEGER;if(K===SJ)return J.RG;if(K===xZ)return J.RG_INTEGER;if(K===gZ)return J.RGBA_INTEGER;if(K===c7||K===n7||K===s7||K===i7)if(X===q9)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(K===c7)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===n7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===s7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===i7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(K===c7)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===n7)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===s7)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===i7)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===pZ||K===mZ||K===dZ||K===uZ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(K===pZ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===mZ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===dZ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===uZ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===lZ||K===cZ||K===nZ||K===sZ||K===iZ||K===o7||K===oZ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(K===lZ||K===cZ)return X===q9?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(K===nZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(K===sZ)return W.COMPRESSED_R11_EAC;if(K===iZ)return W.COMPRESSED_SIGNED_R11_EAC;if(K===o7)return W.COMPRESSED_RG11_EAC;if(K===oZ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===aZ||K===rZ||K===tZ||K===eZ||K===JK||K===QK||K===ZK||K===KK||K===$K||K===WK||K===XK||K===YK||K===HK||K===UK)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(K===aZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===rZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===tZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===eZ)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===JK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===QK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===ZK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===KK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===$K)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===WK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===XK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===YK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===HK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===UK)return X===q9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===NK||K===GK||K===qK)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(K===NK)return X===q9?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===GK)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===qK)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===EK||K===DK||K===a7||K===FK)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(K===EK)return W.COMPRESSED_RED_RGTC1_EXT;if(K===DK)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===a7)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===FK)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===L6)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:Z}}var mq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dq=`
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

}`;class WY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new HQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new e9({vertexShader:mq,fragmentShader:dq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new $8(new J7(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XY extends v8{constructor(J,Q){super();let Z=this,K=null,$=1,W=null,X="local-floor",Y=1,H=null,N=null,q=null,U=null,G=null,D=null,O=typeof XRWebGLBinding!=="undefined",L=new WY,F={},E=Q.getContextAttributes(),R=null,k=null,V=[],A=[],P=new x0,_=null,I=null,B=new l9;B.viewport=new Y9;let p=new l9;p.viewport=new Y9;let j=[B,p],y=new uK,m=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let g=V[S];if(g===void 0)g=new r6,V[S]=g;return g.getTargetRaySpace()},this.getControllerGrip=function(S){let g=V[S];if(g===void 0)g=new r6,V[S]=g;return g.getGripSpace()},this.getHand=function(S){let g=V[S];if(g===void 0)g=new r6,V[S]=g;return g.getHandSpace()};function w(S){let g=A.indexOf(S.inputSource);if(g===-1)return;let d=V[g];if(d!==void 0)d.update(S.inputSource,S.frame,H||W),d.dispatchEvent({type:S.type,data:S.inputSource})}function n(){K.removeEventListener("select",w),K.removeEventListener("selectstart",w),K.removeEventListener("selectend",w),K.removeEventListener("squeeze",w),K.removeEventListener("squeezestart",w),K.removeEventListener("squeezeend",w),K.removeEventListener("end",n),K.removeEventListener("inputsourceschange",u);for(let S=0;S<V.length;S++){let g=A[S];if(g===null)continue;A[S]=null,V[S].disconnect(g)}m=null,T=null,L.reset();for(let S in F)delete F[S];if(J.setRenderTarget(R),G=null,U=null,q=null,K=null,k=null,u0.stop(),Z.isPresenting=!1,J.setPixelRatio(_),J.setSize(P.width,P.height,!1),I!==null){let S=I.camera;S.fov=I.fov,S.zoom=I.zoom,S.updateProjectionMatrix(),I=null}Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){if($=S,Z.isPresenting===!0)v0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){if(X=S,Z.isPresenting===!0)v0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(S){H=S},this.getBaseLayer=function(){return U!==null?U:G},this.getBinding=function(){if(q===null&&O)q=new XRWebGLBinding(K,Q);return q},this.getFrame=function(){return D},this.getSession=function(){return K},this.setSession=async function(S){if(K=S,K!==null){if(R=J.getRenderTarget(),K.addEventListener("select",w),K.addEventListener("selectstart",w),K.addEventListener("selectend",w),K.addEventListener("squeeze",w),K.addEventListener("squeezestart",w),K.addEventListener("squeezeend",w),K.addEventListener("end",n),K.addEventListener("inputsourceschange",u),E.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(P),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let d={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:$};G=new XRWebGLLayer(K,Q,d),K.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),k=new K8(G.framebufferWidth,G.framebufferHeight,{format:j8,type:I8,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let d=null,a=null,Q0=null;if(E.depth)Q0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,d=E.stencil?wJ:TJ,a=E.stencil?L6:OJ;let r={colorFormat:Q.RGBA8,depthFormat:Q0,scaleFactor:$};q=this.getBinding(),U=q.createProjectionLayer(r),K.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),k=new K8(U.textureWidth,U.textureHeight,{format:j8,type:I8,depthTexture:new vJ(U.textureWidth,U.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,d),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1,resolveStencilBuffer:U.ignoreDepthValues===!1,storeMultisampledDepthBuffer:U.ignoreDepthValues===!1,storeMultisampledStencilBuffer:U.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await K.requestReferenceSpace(X),u0.setContext(K),u0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function u(S){for(let g=0;g<S.removed.length;g++){let d=S.removed[g],a=A.indexOf(d);if(a>=0)A[a]=null,V[a].disconnect(d)}for(let g=0;g<S.added.length;g++){let d=S.added[g],a=A.indexOf(d);if(a===-1){for(let r=0;r<V.length;r++)if(r>=A.length){A.push(d),a=r;break}else if(A[r]===null){A[r]=d,a=r;break}if(a===-1)break}let Q0=V[a];if(Q0)Q0.connect(d)}}let $0=new x,i=new x;function Z0(S,g,d){$0.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(d.matrixWorld);let a=$0.distanceTo(i),Q0=g.projectionMatrix.elements,r=d.projectionMatrix.elements,z0=Q0[14]/(Q0[10]-1),q0=Q0[14]/(Q0[10]+1),y0=(Q0[9]+1)/Q0[5],m0=(Q0[9]-1)/Q0[5],h0=(Q0[8]-1)/Q0[0],i0=(r[8]+1)/r[0],r0=z0*h0,I9=z0*i0,F9=a/(-h0+i0),O9=F9*-h0;if(g.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(O9),S.translateZ(F9),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),Q0[10]===-1)S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse);else{let v=z0+F9,A9=q0+F9,J9=r0-O9,N9=I9+(a-O9),z=y0*q0/A9*v,M=m0*q0/A9*v;S.projectionMatrix.makePerspective(J9,N9,z,M,v,A9),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function X0(S,g){if(g===null)S.matrixWorld.copy(S.matrix);else S.matrixWorld.multiplyMatrices(g.matrixWorld,S.matrix);S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(K===null)return;let{near:g,far:d}=S;if(L.texture!==null){if(L.depthNear>0)g=L.depthNear;if(L.depthFar>0)d=L.depthFar}if(y.near=p.near=B.near=g,y.far=p.far=B.far=d,m!==y.near||T!==y.far)K.updateRenderState({depthNear:y.near,depthFar:y.far}),m=y.near,T=y.far;y.layers.mask=S.layers.mask|6,B.layers.mask=y.layers.mask&-5,p.layers.mask=y.layers.mask&-3;let a=S.parent,Q0=y.cameras;X0(y,a);for(let r=0;r<Q0.length;r++)X0(Q0[r],a);if(Q0.length===2)Z0(y,B,p);else y.projectionMatrix.copy(B.projectionMatrix);if(I===null&&S.isPerspectiveCamera)I={camera:S,fov:S.fov,zoom:S.zoom};w0(S,y,a)};function w0(S,g,d){if(d===null)S.matrix.copy(g.matrixWorld);else S.matrix.copy(d.matrixWorld),S.matrix.invert(),S.matrix.multiply(g.matrixWorld);if(S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(g.projectionMatrix),S.projectionMatrixInverse.copy(g.projectionMatrixInverse),S.isPerspectiveCamera)S.fov=D6*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1}this.getCamera=function(){return y},this.getFoveation=function(){if(U===null&&G===null)return;return Y},this.setFoveation=function(S){if(Y=S,U!==null)U.fixedFoveation=S;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=S},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(y)},this.getCameraTexture=function(S){return F[S]};let T0=null;function n0(S,g){if(N=g.getViewerPose(H||W),D=g,N!==null){let d=N.views;if(G!==null)J.setRenderTargetFramebuffer(k,G.framebuffer),J.setRenderTarget(k);let a=!1;if(d.length!==y.cameras.length)y.cameras.length=0,a=!0;for(let q0=0;q0<d.length;q0++){let y0=d[q0],m0=null;if(G!==null)m0=G.getViewport(y0);else{let i0=q.getViewSubImage(U,y0);if(m0=i0.viewport,q0===0)J.setRenderTargetTextures(k,i0.colorTexture,i0.depthStencilTexture),J.setRenderTarget(k)}let h0=j[q0];if(h0===void 0)h0=new l9,h0.layers.enable(q0),h0.viewport=new Y9,j[q0]=h0;if(h0.matrix.fromArray(y0.transform.matrix),h0.matrix.decompose(h0.position,h0.quaternion,h0.scale),h0.projectionMatrix.fromArray(y0.projectionMatrix),h0.projectionMatrixInverse.copy(h0.projectionMatrix).invert(),h0.viewport.set(m0.x,m0.y,m0.width,m0.height),q0===0)y.matrix.copy(h0.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale);if(a===!0)y.cameras.push(h0)}let Q0=K.enabledFeatures;if(Q0&&Q0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&O){q=Z.getBinding();let q0=q.getDepthInformation(d[0]);if(q0&&q0.isValid&&q0.texture)L.init(q0,K.renderState)}if(Q0&&Q0.includes("camera-access")&&O){J.state.unbindTexture(),q=Z.getBinding();for(let q0=0;q0<d.length;q0++){let y0=d[q0].camera;if(y0){let m0=F[y0];if(!m0)m0=new HQ,F[y0]=m0;let h0=q.getCameraImage(y0);m0.sourceTexture=h0}}}}for(let d=0;d<V.length;d++){let a=A[d],Q0=V[d];if(a!==null&&Q0!==void 0)Q0.update(a,g,H||W)}if(T0)T0(S,g);if(g.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:g});D=null}let u0=new iX;u0.setAnimationLoop(n0),this.setAnimationLoop=function(S){T0=S},this.dispose=function(){}}}var uq=new M9,YY=new g0;YY.set(-1,0,0,0,1,0,0,0,1);function lq(J,Q){function Z(F,E){if(F.matrixAutoUpdate===!0)F.updateMatrix();E.value.copy(F.matrix)}function K(F,E){if(E.color.getRGB(F.fogColor.value,_K(J)),E.isFog)F.fogNear.value=E.near,F.fogFar.value=E.far;else if(E.isFogExp2)F.fogDensity.value=E.density}function $(F,E,R,k,V){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(F,E);else if(E.isMeshLambertMaterial){if(W(F,E),E.envMap)F.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(F,E),U(F,E);else if(E.isMeshPhongMaterial){if(W(F,E),q(F,E),E.envMap)F.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(F,E),G(F,E),E.isMeshPhysicalMaterial)D(F,E,V)}else if(E.isMeshMatcapMaterial)W(F,E),O(F,E);else if(E.isMeshDepthMaterial)W(F,E);else if(E.isMeshDistanceMaterial)W(F,E),L(F,E);else if(E.isMeshNormalMaterial)W(F,E);else if(E.isLineBasicMaterial){if(X(F,E),E.isLineDashedMaterial)Y(F,E)}else if(E.isPointsMaterial)H(F,E,R,k);else if(E.isSpriteMaterial)N(F,E);else if(E.isShadowMaterial)F.color.value.copy(E.color),F.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(F,E){if(F.opacity.value=E.opacity,E.color)F.diffuse.value.copy(E.color);if(E.emissive)F.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)F.map.value=E.map,Z(E.map,F.mapTransform);if(E.alphaMap)F.alphaMap.value=E.alphaMap,Z(E.alphaMap,F.alphaMapTransform);if(E.bumpMap){if(F.bumpMap.value=E.bumpMap,Z(E.bumpMap,F.bumpMapTransform),F.bumpScale.value=E.bumpScale,E.side===a9)F.bumpScale.value*=-1}if(E.normalMap){if(F.normalMap.value=E.normalMap,Z(E.normalMap,F.normalMapTransform),F.normalScale.value.copy(E.normalScale),E.side===a9)F.normalScale.value.negate()}if(E.displacementMap)F.displacementMap.value=E.displacementMap,Z(E.displacementMap,F.displacementMapTransform),F.displacementScale.value=E.displacementScale,F.displacementBias.value=E.displacementBias;if(E.emissiveMap)F.emissiveMap.value=E.emissiveMap,Z(E.emissiveMap,F.emissiveMapTransform);if(E.specularMap)F.specularMap.value=E.specularMap,Z(E.specularMap,F.specularMapTransform);if(E.alphaTest>0)F.alphaTest.value=E.alphaTest;let R=Q.get(E),k=R.envMap,V=R.envMapRotation;if(k){if(F.envMap.value=k,F.envMapRotation.value.setFromMatrix4(uq.makeRotationFromEuler(V)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)F.envMapRotation.value.premultiply(YY);F.reflectivity.value=E.reflectivity,F.ior.value=E.ior,F.refractionRatio.value=E.refractionRatio}if(E.lightMap)F.lightMap.value=E.lightMap,F.lightMapIntensity.value=E.lightMapIntensity,Z(E.lightMap,F.lightMapTransform);if(E.aoMap)F.aoMap.value=E.aoMap,F.aoMapIntensity.value=E.aoMapIntensity,Z(E.aoMap,F.aoMapTransform)}function X(F,E){if(F.diffuse.value.copy(E.color),F.opacity.value=E.opacity,E.map)F.map.value=E.map,Z(E.map,F.mapTransform)}function Y(F,E){F.dashSize.value=E.dashSize,F.totalSize.value=E.dashSize+E.gapSize,F.scale.value=E.scale}function H(F,E,R,k){if(F.diffuse.value.copy(E.color),F.opacity.value=E.opacity,F.size.value=E.size*R,F.scale.value=k*0.5,E.map)F.map.value=E.map,Z(E.map,F.uvTransform);if(E.alphaMap)F.alphaMap.value=E.alphaMap,Z(E.alphaMap,F.alphaMapTransform);if(E.alphaTest>0)F.alphaTest.value=E.alphaTest}function N(F,E){if(F.diffuse.value.copy(E.color),F.opacity.value=E.opacity,F.rotation.value=E.rotation,E.map)F.map.value=E.map,Z(E.map,F.mapTransform);if(E.alphaMap)F.alphaMap.value=E.alphaMap,Z(E.alphaMap,F.alphaMapTransform);if(E.alphaTest>0)F.alphaTest.value=E.alphaTest}function q(F,E){F.specular.value.copy(E.specular),F.shininess.value=Math.max(E.shininess,0.0001)}function U(F,E){if(E.gradientMap)F.gradientMap.value=E.gradientMap}function G(F,E){if(F.metalness.value=E.metalness,E.metalnessMap)F.metalnessMap.value=E.metalnessMap,Z(E.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=E.roughness,E.roughnessMap)F.roughnessMap.value=E.roughnessMap,Z(E.roughnessMap,F.roughnessMapTransform);if(E.envMap)F.envMapIntensity.value=E.envMapIntensity}function D(F,E,R){if(F.ior.value=E.ior,E.sheen>0){if(F.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),F.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)F.sheenColorMap.value=E.sheenColorMap,Z(E.sheenColorMap,F.sheenColorMapTransform);if(E.sheenRoughnessMap)F.sheenRoughnessMap.value=E.sheenRoughnessMap,Z(E.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(F.clearcoat.value=E.clearcoat,F.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)F.clearcoatMap.value=E.clearcoatMap,Z(E.clearcoatMap,F.clearcoatMapTransform);if(E.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,Z(E.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(F.clearcoatNormalMap.value=E.clearcoatNormalMap,Z(E.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===a9)F.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)F.dispersion.value=E.dispersion;if(E.retroreflectivity>0)F.retroreflectivity.value=E.retroreflectivity;if(E.iridescence>0){if(F.iridescence.value=E.iridescence,F.iridescenceIOR.value=E.iridescenceIOR,F.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],F.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)F.iridescenceMap.value=E.iridescenceMap,Z(E.iridescenceMap,F.iridescenceMapTransform);if(E.iridescenceThicknessMap)F.iridescenceThicknessMap.value=E.iridescenceThicknessMap,Z(E.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(E.transmission>0){if(F.transmission.value=E.transmission,F.transmissionSamplerMap.value=R.texture,F.transmissionSamplerSize.value.set(R.width,R.height),E.transmissionMap)F.transmissionMap.value=E.transmissionMap,Z(E.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=E.thickness,E.thicknessMap)F.thicknessMap.value=E.thicknessMap,Z(E.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=E.attenuationDistance,F.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(F.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)F.anisotropyMap.value=E.anisotropyMap,Z(E.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=E.specularIntensity,F.specularColor.value.copy(E.specularColor),E.specularColorMap)F.specularColorMap.value=E.specularColorMap,Z(E.specularColorMap,F.specularColorMapTransform);if(E.specularIntensityMap)F.specularIntensityMap.value=E.specularIntensityMap,Z(E.specularIntensityMap,F.specularIntensityMapTransform)}function O(F,E){if(E.matcap)F.matcap.value=E.matcap}function L(F,E){let R=Q.get(E).light;F.referencePosition.value.setFromMatrixPosition(R.matrixWorld),F.nearDistance.value=R.shadow.camera.near,F.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:$}}function cq(J,Q,Z,K){let $={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,A){let P=A.program;K.uniformBlockBinding(V,P)}function N(V,A){let P=$[V.id];if(P===void 0)F(V),P=q(V),$[V.id]=P,V.addEventListener("dispose",R);let _=A.program;K.updateUBOMapping(V,_);let I=Q.render.frame;if(W[V.id]!==I)G(V),W[V.id]=I}function q(V){let A=U();V.__bindingPointIndex=A;let P=J.createBuffer(),_=V.__size,I=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,_,I),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,P),P}function U(){for(let V=0;V<Y;V++)if(X.indexOf(V)===-1)return X.push(V),V;return f0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(V){let A=$[V.id],P=V.uniforms,_=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let I=0,B=P.length;I<B;I++){let p=P[I];if(Array.isArray(p))for(let j=0,y=p.length;j<y;j++)D(p[j],I,j,_);else D(p,I,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function D(V,A,P,_){if(L(V,A,P,_)===!0){let{__offset:I,value:B}=V;if(Array.isArray(B)){let p=0;for(let j=0;j<B.length;j++){let y=B[j],m=E(y);if(O(y,V.__data,p),typeof y!=="number"&&typeof y!=="boolean"&&!y.isMatrix3&&!ArrayBuffer.isView(y))p+=m.storage/Float32Array.BYTES_PER_ELEMENT}}else O(B,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,I,V.__data)}}function O(V,A,P){if(typeof V==="number"||typeof V==="boolean")A[0]=V;else if(V.isMatrix3)A[0]=V.elements[0],A[1]=V.elements[1],A[2]=V.elements[2],A[3]=0,A[4]=V.elements[3],A[5]=V.elements[4],A[6]=V.elements[5],A[7]=0,A[8]=V.elements[6],A[9]=V.elements[7],A[10]=V.elements[8],A[11]=0;else if(ArrayBuffer.isView(V))A.set(new V.constructor(V.buffer,V.byteOffset,A.length));else V.toArray(A,P)}function L(V,A,P,_){let I=V.value,B=A+"_"+P;if(_[B]===void 0){if(typeof I==="number"||typeof I==="boolean")_[B]=I;else if(ArrayBuffer.isView(I))_[B]=I.slice();else _[B]=I.clone();return!0}else{let p=_[B];if(typeof I==="number"||typeof I==="boolean"){if(p!==I)return _[B]=I,!0}else if(ArrayBuffer.isView(I))return!0;else if(p.equals(I)===!1)return p.copy(I),!0}return!1}function F(V){let A=V.uniforms,P=0,_=16;for(let B=0,p=A.length;B<p;B++){let j=Array.isArray(A[B])?A[B]:[A[B]];for(let y=0,m=j.length;y<m;y++){let T=j[y],w=Array.isArray(T.value)?T.value:[T.value];for(let n=0,u=w.length;n<u;n++){let $0=w[n],i=E($0),Z0=P%_,X0=Z0%i.boundary,w0=Z0+X0;if(P+=X0,w0!==0&&_-w0<i.storage)P+=_-w0;T.__data=new Float32Array(i.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=P,P+=i.storage}}}let I=P%_;if(I>0)P+=_-I;return V.__size=P,V.__cache={},this}function E(V){let A={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")A.boundary=4,A.storage=4;else if(V.isVector2)A.boundary=8,A.storage=8;else if(V.isVector3||V.isColor)A.boundary=16,A.storage=12;else if(V.isVector4)A.boundary=16,A.storage=16;else if(V.isMatrix3)A.boundary=48,A.storage=48;else if(V.isMatrix4)A.boundary=64,A.storage=64;else if(V.isTexture)v0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))A.boundary=16,A.storage=V.byteLength;else v0("WebGLRenderer: Unsupported uniform value type.",V);return A}function R(V){let A=V.target;A.removeEventListener("dispose",R);let P=X.indexOf(A.__bindingPointIndex);X.splice(P,1),J.deleteBuffer($[A.id]),delete $[A.id],delete W[A.id]}function k(){for(let V in $)J.deleteBuffer($[V]);X=[],$={},W={}}return{bind:H,update:N,dispose:k}}var nq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),b8=null;function sq(){if(b8===null)b8=new PK(nq,16,16,SJ,S8),b8.name="DFG_LUT",b8.minFilter=r9,b8.magFilter=r9,b8.wrapS=u7,b8.wrapT=u7,b8.generateMipmaps=!1,b8.needsUpdate=!0;return b8}class $${constructor(J={}){let{canvas:Q=LX(),context:Z=null,depth:K=!0,stencil:$=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:N="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:U=!1,outputBufferType:G=I8}=J;this.isWebGLRenderer=!0;let D;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");D=Z.getContextAttributes().alpha}else D=W;let O=G,L=new Set([gZ,xZ,hZ]),F=new Set([I8,OJ,i6,L6,bZ,fZ]),E=new Uint32Array(4),R=new Int32Array(4),k=new x,V=null,A=null,P=[],_=[],I=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=L8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,p=!1,j=null,y=null,m=null,T=null;this._outputColorSpace=qX;let w=0,n=0,u=null,$0=-1,i=null,Z0=new Y9,X0=new Y9,w0=null,T0=new e0(0),n0=0,u0=Q.width,S=Q.height,g=1,d=null,a=null,Q0=new Y9(0,0,u0,S),r=new Y9(0,0,u0,S),z0=!1,q0=new XQ,y0=!1,m0=!1,h0=new M9,i0=new x,r0=new Y9,I9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F9=!1;function O9(){return u===null?g:1}let v=Z;function A9(C,f){return Q.getContext(C,f)}let J9,N9,z,M,b,s,W0,U0,E0,t,K0,O0,A0,N0,H0,S0,j0,Q9,h,D0,J0,F0,V0;try{let C={alpha:!0,depth:K,stencil:$,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:N,failIfMajorPerformanceCaveat:q};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${BW}`);if(Q.addEventListener("webglcontextlost",d0,!1),Q.addEventListener("webglcontextrestored",E9,!1),Q.addEventListener("webglcontextcreationerror",K9,!1),v===null){if(v=A9("webgl2",C),v===null)if(A9("webgl2"))throw new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y0()}catch(C){throw Q.removeEventListener("webglcontextlost",d0,!1),Q.removeEventListener("webglcontextrestored",E9,!1),Q.removeEventListener("webglcontextcreationerror",K9,!1),f0("WebGLRenderer: "+C.message),C}function Y0(){if(J9=new J5(v),J9.init(),J0=new pq(v,J9),N9=new lG(v,J9,J,J0),z=new xq(v,J9),N9.reversedDepthBuffer&&U)z.buffers.depth.setReversed(!0);y=v.createFramebuffer(),m=v.createFramebuffer(),T=v.createFramebuffer(),M=new K5(v),b=new Aq,s=new gq(v,J9,z,b,N9,J0,M),W0=new eG(B),U0=new WU(v),F0=new dG(v,U0),E0=new Q5(v,U0,M,F0),t=new W5(v,E0,U0,F0,M),Q9=new $5(v,N9,s),H0=new cG(b),K0=new Bq(B,W0,J9,N9,F0,H0),O0=new lq(B,b),A0=new Pq,N0=new jq(J9),j0=new mG(B,W0,z,t,D,Y),S0=new hq(B,t,N9),V0=new cq(v,M,N9,z),h=new uG(v,J9,M),D0=new Z5(v,J9,M),M.programs=K0.programs,B.capabilities=N9,B.extensions=J9,B.properties=b,B.renderLists=A0,B.shadowMap=S0,B.state=z,B.info=M}if(O!==I8)I=new Y5(O,Q.width,Q.height,X,K,$);let R0=new XY(B,v);this.xr=R0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let C=J9.get("WEBGL_lose_context");if(C)C.loseContext()},this.forceContextRestore=function(){let C=J9.get("WEBGL_lose_context");if(C)C.restoreContext()},this.getPixelRatio=function(){return g},this.setPixelRatio=function(C){if(C===void 0)return;g=C,this.setSize(u0,S,!1)},this.getSize=function(C){return C.set(u0,S)},this.setSize=function(C,f,o=!0){if(R0.isPresenting){v0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(u0=C,S=f,Q.width=Math.floor(C*g),Q.height=Math.floor(f*g),o===!0)Q.style.width=C+"px",Q.style.height=f+"px";if(I!==null)I.setSize(Q.width,Q.height);this.setViewport(0,0,C,f)},this.getDrawingBufferSize=function(C){return C.set(u0*g,S*g).floor()},this.setDrawingBufferSize=function(C,f,o){u0=C,S=f,g=o,Q.width=Math.floor(C*o),Q.height=Math.floor(f*o),this.setViewport(0,0,C,f)},this.setEffects=function(C){if(O===I8){f0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let f=0;f<C.length;f++)if(C[f].isOutputPass===!0){v0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z0)},this.getViewport=function(C){return C.copy(Q0)},this.setViewport=function(C,f,o,l){if(C.isVector4)Q0.set(C.x,C.y,C.z,C.w);else Q0.set(C,f,o,l);z.viewport(Z0.copy(Q0).multiplyScalar(g).round())},this.getScissor=function(C){return C.copy(r)},this.setScissor=function(C,f,o,l){if(C.isVector4)r.set(C.x,C.y,C.z,C.w);else r.set(C,f,o,l);z.scissor(X0.copy(r).multiplyScalar(g).round())},this.getScissorTest=function(){return z0},this.setScissorTest=function(C){z.setScissorTest(z0=C)},this.setOpaqueSort=function(C){d=C},this.setTransparentSort=function(C){a=C},this.getClearColor=function(C){return C.copy(j0.getClearColor())},this.setClearColor=function(){j0.setClearColor(...arguments)},this.getClearAlpha=function(){return j0.getClearAlpha()},this.setClearAlpha=function(){j0.setClearAlpha(...arguments)},this.clear=function(C=!0,f=!0,o=!0){let l=0;if(C){let c=!1;if(u!==null){let L0=u.texture.format;c=L.has(L0)}if(c){let L0=u.texture.type,B0=F.has(L0),M0=j0.getClearColor(),P0=j0.getClearAlpha(),_0=M0.r,l0=M0.g,s0=M0.b;if(B0)E[0]=_0,E[1]=l0,E[2]=s0,E[3]=P0,v.clearBufferuiv(v.COLOR,0,E);else R[0]=_0,R[1]=l0,R[2]=s0,R[3]=P0,v.clearBufferiv(v.COLOR,0,R)}else l|=v.COLOR_BUFFER_BIT}if(f)l|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(o)l|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(l!==0)v.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){Q.removeEventListener("webglcontextlost",d0,!1),Q.removeEventListener("webglcontextrestored",E9,!1),Q.removeEventListener("webglcontextcreationerror",K9,!1),j0.dispose(),A0.dispose(),N0.dispose(),b.dispose(),W0.dispose(),t.dispose(),F0.dispose(),V0.dispose(),K0.dispose(),R0.dispose(),R0.removeEventListener("sessionstart",n$),R0.removeEventListener("sessionend",s$),VJ.stop()};function d0(C){C.preventDefault(),u6("WebGLRenderer: Context Lost."),p=!0}function E9(){u6("WebGLRenderer: Context Restored."),p=!1;let C=M.autoReset,f=S0.enabled,o=S0.autoUpdate,l=S0.needsUpdate,c=S0.type;Y0(),M.autoReset=C,S0.enabled=f,S0.autoUpdate=o,S0.needsUpdate=l,S0.type=c}function K9(C){f0("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function z8(C){let f=C.target;f.removeEventListener("dispose",z8),u8(f)}function u8(C){QH(C),b.remove(C)}function QH(C){let f=b.get(C).programs;if(f!==void 0){if(f.forEach(function(o){K0.releaseProgram(o)}),C.isShaderMaterial)K0.releaseShaderCache(C)}}this.renderBufferDirect=function(C,f,o,l,c,L0){if(f===null)f=I9;let B0=c.isMesh&&c.matrixWorld.determinantAffine()<0,M0=$H(C,f,o,l,c);z.setMaterial(l,B0);let P0=o.index,_0=1;if(l.wireframe===!0){if(P0=E0.getWireframeAttribute(o),P0===void 0)return;_0=2}let l0=o.drawRange,s0=o.attributes.position,k0=l0.start*_0,$9=(l0.start+l0.count)*_0;if(L0!==null)k0=Math.max(k0,L0.start*_0),$9=Math.min($9,(L0.start+L0.count)*_0);if(P0!==null)k0=Math.max(k0,0),$9=Math.min($9,P0.count);else if(s0!==void 0&&s0!==null)k0=Math.max(k0,0),$9=Math.min($9,s0.count);let V9=$9-k0;if(V9<0||V9===1/0)return;F0.setup(c,l,M0,o,P0);let R9,G9=h;if(P0!==null)R9=U0.get(P0),G9=D0,G9.setIndex(R9);if(c.isMesh)if(l.wireframe===!0)z.setLineWidth(l.wireframeLinewidth*O9()),G9.setMode(v.LINES);else G9.setMode(v.TRIANGLES);else if(c.isLine){let b9=l.linewidth;if(b9===void 0)b9=1;if(z.setLineWidth(b9*O9()),c.isLineSegments)G9.setMode(v.LINES);else if(c.isLineLoop)G9.setMode(v.LINE_LOOP);else G9.setMode(v.LINE_STRIP)}else if(c.isPoints)G9.setMode(v.POINTS);else if(c.isSprite)G9.setMode(v.TRIANGLES);if(c.isBatchedMesh)if(!J9.get("WEBGL_multi_draw")){let{_multiDrawStarts:b9,_multiDrawCounts:C0,_multiDrawCount:d9}=c,t0=P0?U0.get(P0).bytesPerElement:1,X8=b.get(l).currentProgram.getUniforms();for(let P8=0;P8<d9;P8++)X8.setValue(v,"_gl_DrawID",P8),G9.render(b9[P8]/t0,C0[P8])}else G9.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else if(c.isInstancedMesh)G9.renderInstances(k0,V9,c.count);else if(o.isInstancedBufferGeometry){let b9=o._maxInstanceCount!==void 0?o._maxInstanceCount:1/0,C0=Math.min(o.instanceCount,b9);G9.renderInstances(k0,V9,C0)}else G9.render(k0,V9)};function c$(C,f,o,l){if(j!==null&&C.isNodeMaterial)j.setObject(l,C);if(y0===!0)H0.setState(C,o,!1);if(C.transparent===!0&&C.side===T8&&C.forceSinglePass===!1)C.side=a9,C.needsUpdate=!0,M7(C,f,l),C.side=O6,C.needsUpdate=!0,M7(C,f,l),C.side=T8;else M7(C,f,l)}this.compile=function(C,f,o=null){if(o===null)o=C;if(j!==null)j.renderStart(C,f,o);if(A=N0.get(o),A.init(f),_.push(A),o.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}}),C!==o)C.traverseVisible(function(c){if(c.isLight&&c.layers.test(f.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}});if(A.setupLights(),j!==null)j.updateLights(A.state.lightsArray);if(m0=this.localClippingEnabled,y0=H0.init(this.clippingPlanes,m0),y0===!0)H0.setGlobalState(this.clippingPlanes,f);if(j!==null)S0.render(A.state.shadowsArray,o,f);let l=new Set;if(C.traverse(function(c){if(!(c.isMesh||c.isPoints||c.isLine||c.isSprite))return;let L0=c.material;if(L0)if(Array.isArray(L0))for(let B0=0;B0<L0.length;B0++){let M0=L0[B0];c$(M0,o,f,c),l.add(M0)}else c$(L0,o,f,c),l.add(L0)}),A=_.pop(),j!==null)j.renderEnd();return l},this.compileAsync=function(C,f,o=null){let l=this.compile(C,f,o);return new Promise((c)=>{function L0(){if(l.forEach(function(B0){let P0=b.get(B0).currentProgram;if(P0===void 0||P0.isReady())l.delete(B0)}),l.size===0){c(C);return}setTimeout(L0,10)}if(J9.get("KHR_parallel_shader_compile")!==null)L0();else setTimeout(L0,10)})};let eQ=null;function ZH(C){if(eQ)eQ(C)}function n$(){VJ.stop()}function s$(){VJ.start()}let VJ=new iX;if(VJ.setAnimationLoop(ZH),typeof self!=="undefined")VJ.setContext(self);this.setAnimationLoop=function(C){eQ=C,R0.setAnimationLoop(C),C===null?VJ.stop():VJ.start()},R0.addEventListener("sessionstart",n$),R0.addEventListener("sessionend",s$),this.render=function(C,f){if(f!==void 0&&f.isCamera!==!0){f0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(j!==null)j.renderStart(C,f);let o=R0.enabled===!0&&R0.isPresenting===!0,l=I!==null&&(u===null||o)&&I.begin(B,u);if(C.matrixWorldAutoUpdate===!0)C.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(R0.enabled===!0&&R0.isPresenting===!0&&(I===null||I.isCompositing()===!1)){if(R0.cameraAutoUpdate===!0)R0.updateCamera(f);f=R0.getCamera()}if(C.isScene===!0)C.onBeforeRender(B,C,f,u);if(A=N0.get(C,_.length),A.init(f),A.state.textureUnits=s.getTextureUnits(),_.push(A),h0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),q0.setFromProjectionMatrix(h0,IK,f.reversedDepth),m0=this.localClippingEnabled,y0=H0.init(this.clippingPlanes,m0),V=A0.get(C,P.length),V.init(),P.push(V),R0.enabled===!0&&R0.isPresenting===!0){let B0=B.xr.getDepthSensingMesh();if(B0!==null)JZ(B0,f,-1/0,B.sortObjects)}if(JZ(C,f,0,B.sortObjects),V.finish(),j!==null)j.updateLights(A.state.lightsArray);if(B.sortObjects===!0)V.sort(d,a);if(F9=R0.enabled===!1||R0.isPresenting===!1||R0.hasDepthSensing()===!1,F9)j0.addToRenderList(V,C);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(y0===!0)H0.beginShadows();let c=A.state.shadowsArray;if(S0.render(c,C,f),y0===!0)H0.endShadows();if((l&&I.hasRenderPass())===!1){let{opaque:B0,transmissive:M0}=V;if(A.setupLights(),f.isArrayCamera){let P0=f.cameras;if(M0.length>0)for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0];o$(B0,M0,C,s0)}if(F9)j0.render(C);for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0];i$(V,C,s0,s0.viewport)}}else{if(M0.length>0)o$(B0,M0,C,f);if(F9)j0.render(C);i$(V,C,f)}}if(u!==null&&n===0)s.updateMultisampleRenderTarget(u),s.updateRenderTargetMipmap(u);if(l)I.end(B);if(C.isScene===!0)C.onAfterRender(B,C,f);if(F0.resetDefaultState(),$0=-1,i=null,_.pop(),_.length>0){if(A=_[_.length-1],s.setTextureUnits(A.state.textureUnits),y0===!0)H0.setGlobalState(B.clippingPlanes,A.state.camera)}else A=null;if(P.pop(),P.length>0)V=P[P.length-1];else V=null;if(j!==null)j.renderEnd()};function JZ(C,f,o,l){if(C.visible===!1)return;if(C.layers.test(f.layers)){if(C.isGroup)o=C.renderOrder;else if(C.isLOD){if(C.autoUpdate===!0)C.update(f)}else if(C.isLightProbeGrid)A.pushLightProbeGrid(C);else if(C.isLight){if(A.pushLight(C),C.castShadow)A.pushShadow(C)}else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(q0)){if(l)r0.setFromMatrixPosition(C.matrixWorld).applyMatrix4(h0);let B0=t.update(C),M0=C.material;if(M0.visible)V.push(C,B0,M0,o,r0.z,null,f)}}else if(C.isMesh||C.isLine||C.isPoints){if(!C.frustumCulled||C.intersectsFrustum(q0)){let B0=t.update(C),M0=C.material;if(l){if(C.boundingSphere!==void 0){if(C.boundingSphere===null)C.computeBoundingSphere();r0.copy(C.boundingSphere.center)}else{if(B0.boundingSphere===null)B0.computeBoundingSphere();r0.copy(B0.boundingSphere.center)}r0.applyMatrix4(C.matrixWorld).applyMatrix4(h0)}if(Array.isArray(M0)){let P0=B0.groups;for(let _0=0,l0=P0.length;_0<l0;_0++){let s0=P0[_0],k0=M0[s0.materialIndex];if(k0&&k0.visible)V.push(C,B0,k0,o,r0.z,s0,f)}}else if(M0.visible)V.push(C,B0,M0,o,r0.z,null,f)}}}let L0=C.children;for(let B0=0,M0=L0.length;B0<M0;B0++)JZ(L0[B0],f,o,l)}function i$(C,f,o,l){let{opaque:c,transmissive:L0,transparent:B0}=C;if(A.setupLightsView(o),y0===!0)H0.setGlobalState(B.clippingPlanes,o);if(l)z.viewport(Z0.copy(l));if(c.length>0)R7(c,f,o);if(L0.length>0)R7(L0,f,o);if(B0.length>0)R7(B0,f,o);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function o$(C,f,o,l){if((o.isScene===!0?o.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[l.id]===void 0){let k0=J9.has("EXT_color_buffer_half_float")||J9.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[l.id]=new K8(1,1,{generateMipmaps:!0,type:k0?S8:I8,minFilter:_J,samples:Math.max(4,N9.samples),stencilBuffer:$,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:o0.workingColorSpace})}let L0=A.state.transmissionRenderTarget[l.id],B0=l.viewport||Z0;L0.setSize(B0.z*B.transmissionResolutionScale,B0.w*B.transmissionResolutionScale);let M0=B.getRenderTarget(),P0=B.getActiveCubeFace(),_0=B.getActiveMipmapLevel();if(B.setRenderTarget(L0),B.getClearColor(T0),n0=B.getClearAlpha(),n0<1)B.setClearColor(16777215,0.5);if(B.clear(),F9)j0.render(o);let l0=B.toneMapping;B.toneMapping=L8;let s0=l.viewport;if(l.viewport!==void 0)l.viewport=void 0;if(A.setupLightsView(l),y0===!0)H0.setGlobalState(B.clippingPlanes,l);if(R7(C,o,l),s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0),J9.has("WEBGL_multisampled_render_to_texture")===!1){let k0=!1;for(let $9=0,V9=f.length;$9<V9;$9++){let R9=f[$9],{object:G9,geometry:b9,material:C0,group:d9}=R9;if(C0.side===T8&&G9.layers.test(l.layers)){let t0=C0.side;C0.side=a9,C0.needsUpdate=!0,a$(G9,o,l,b9,C0,d9),C0.side=t0,C0.needsUpdate=!0,k0=!0}}if(k0===!0)s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0)}if(B.setRenderTarget(M0,P0,_0),B.setClearColor(T0,n0),s0!==void 0)l.viewport=s0;B.toneMapping=l0}function R7(C,f,o){let l=f.isScene===!0?f.overrideMaterial:null;for(let c=0,L0=C.length;c<L0;c++){let B0=C[c],{object:M0,geometry:P0,group:_0}=B0,l0=B0.material;if(l0.allowOverride===!0&&l!==null)l0=l;if(M0.layers.test(o.layers))a$(M0,f,o,P0,l0,_0)}}function a$(C,f,o,l,c,L0){if(j!==null&&c.isNodeMaterial)j.setObject(C,c);if(C.onBeforeRender(B,f,o,l,c,L0),C.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),c.onBeforeRender(B,f,o,l,C,L0),c.transparent===!0&&c.side===T8&&c.forceSinglePass===!1)c.side=a9,c.needsUpdate=!0,B.renderBufferDirect(o,f,l,c,C,L0),c.side=O6,c.needsUpdate=!0,B.renderBufferDirect(o,f,l,c,C,L0),c.side=T8;else B.renderBufferDirect(o,f,l,c,C,L0);C.onAfterRender(B,f,o,l,c,L0)}function M7(C,f,o){if(f.isScene!==!0)f=I9;let l=b.get(C),c=A.state.lights,L0=A.state.shadowsArray,B0=c.state.version,M0=K0.getParameters(C,c.state,L0,f,o,A.state.lightProbeGridArray),P0=K0.getProgramCacheKey(M0),_0=l.programs;l.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?f.environment:null,l.fog=f.fog;let l0=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;if(l.envMap=W0.get(C.envMap||l.environment,l0),l.envMapRotation=l.environment!==null&&C.envMap===null?f.environmentRotation:C.envMapRotation,_0===void 0)C.addEventListener("dispose",z8),_0=new Map,l.programs=_0;let s0=_0.get(P0);if(s0!==void 0){if(l.currentProgram===s0&&l.lightsStateVersion===B0)return t$(C,M0),s0}else{if(M0.uniforms=K0.getUniforms(C),j!==null&&C.isNodeMaterial)j.build(C,o,M0);C.onBeforeCompile(M0,B),s0=K0.acquireProgram(M0,P0),_0.set(P0,s0),l.uniforms=M0.uniforms}let k0=l.uniforms;if(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)k0.clippingPlanes=H0.uniform;if(t$(C,M0),l.needsLights=XH(C),l.lightsStateVersion=B0,l.needsLights)k0.ambientLightColor.value=c.state.ambient,k0.lightProbe.value=c.state.probe,k0.sunLights.value=c.state.sun,k0.sunLightShadows.value=c.state.sunShadow,k0.directionalLights.value=c.state.directional,k0.directionalLightShadows.value=c.state.directionalShadow,k0.spotLights.value=c.state.spot,k0.spotLightShadows.value=c.state.spotShadow,k0.rectAreaLights.value=c.state.rectArea,k0.ltc_1.value=c.state.rectAreaLTC1,k0.ltc_2.value=c.state.rectAreaLTC2,k0.pointLights.value=c.state.point,k0.pointLightShadows.value=c.state.pointShadow,k0.hemisphereLights.value=c.state.hemi,k0.sunShadowMatrix.value=c.state.sunShadowMatrix,k0.sunShadowCascade.value=c.state.sunShadowCascade,k0.directionalShadowMatrix.value=c.state.directionalShadowMatrix,k0.spotLightMatrix.value=c.state.spotLightMatrix,k0.spotLightMap.value=c.state.spotLightMap,k0.pointShadowMatrix.value=c.state.pointShadowMatrix;return l.lightProbeGrid=A.state.lightProbeGridArray.length>0,l.currentProgram=s0,l.uniformsList=null,s0}function r$(C){if(C.uniformsList===null){let f=C.currentProgram.getUniforms();C.uniformsList=X7.seqWithValue(f.seq,C.uniforms)}return C.uniformsList}function t$(C,f){let o=b.get(C);o.outputColorSpace=f.outputColorSpace,o.batching=f.batching,o.batchingColor=f.batchingColor,o.instancing=f.instancing,o.instancingColor=f.instancingColor,o.instancingMorph=f.instancingMorph,o.skinning=f.skinning,o.morphTargets=f.morphTargets,o.morphNormals=f.morphNormals,o.morphColors=f.morphColors,o.morphTargetsCount=f.morphTargetsCount,o.numClippingPlanes=f.numClippingPlanes,o.numIntersection=f.numClipIntersection,o.vertexAlphas=f.vertexAlphas,o.vertexTangents=f.vertexTangents,o.toneMapping=f.toneMapping}function KH(C,f){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;k.setFromMatrixPosition(f.matrixWorld);for(let o=0,l=C.length;o<l;o++){let c=C[o];if(c.texture!==null&&c.boundingBox.containsPoint(k))return c}return null}function $H(C,f,o,l,c){if(f.isScene!==!0)f=I9;s.resetTextureUnits();let L0=f.fog,B0=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?f.environment:null,M0=u===null?B.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:o0.workingColorSpace,P0=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap,_0=W0.get(l.envMap||B0,P0),l0=l.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,s0=!!o.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),k0=!!o.morphAttributes.position,$9=!!o.morphAttributes.normal,V9=!!o.morphAttributes.color,R9=L8;if(l.toneMapped){if(u===null||u.isXRRenderTarget===!0)R9=B.toneMapping}let G9=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,b9=G9!==void 0?G9.length:0,C0=b.get(l),d9=A.state.lights;if(y0===!0){if(m0===!0||C!==i){let D9=C===i&&l.id===$0;H0.setState(l,C,D9)}}let t0=!1;if(l.version===C0.__version){if(C0.needsLights&&C0.lightsStateVersion!==d9.state.version)t0=!0;else if(C0.outputColorSpace!==M0)t0=!0;else if(c.isBatchedMesh&&C0.batching===!1)t0=!0;else if(!c.isBatchedMesh&&C0.batching===!0)t0=!0;else if(c.isBatchedMesh&&C0.batchingColor===!0&&c._colorsTexture===null)t0=!0;else if(c.isBatchedMesh&&C0.batchingColor===!1&&c._colorsTexture!==null)t0=!0;else if(c.isInstancedMesh&&C0.instancing===!1)t0=!0;else if(!c.isInstancedMesh&&C0.instancing===!0)t0=!0;else if(c.isSkinnedMesh&&C0.skinning===!1)t0=!0;else if(!c.isSkinnedMesh&&C0.skinning===!0)t0=!0;else if(c.isInstancedMesh&&C0.instancingColor===!0&&c.instanceColor===null)t0=!0;else if(c.isInstancedMesh&&C0.instancingColor===!1&&c.instanceColor!==null)t0=!0;else if(c.isInstancedMesh&&C0.instancingMorph===!0&&c.morphTexture===null)t0=!0;else if(c.isInstancedMesh&&C0.instancingMorph===!1&&c.morphTexture!==null)t0=!0;else if(C0.envMap!==_0)t0=!0;else if(l.fog===!0&&C0.fog!==L0)t0=!0;else if(C0.numClippingPlanes!==void 0&&(C0.numClippingPlanes!==H0.numPlanes||C0.numIntersection!==H0.numIntersection))t0=!0;else if(C0.vertexAlphas!==l0)t0=!0;else if(C0.vertexTangents!==s0)t0=!0;else if(C0.morphTargets!==k0)t0=!0;else if(C0.morphNormals!==$9)t0=!0;else if(C0.morphColors!==V9)t0=!0;else if(C0.toneMapping!==R9)t0=!0;else if(C0.morphTargetsCount!==b9)t0=!0;else if(!!C0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)t0=!0}else t0=!0,C0.__version=l.version;let X8=C0.currentProgram;if(t0===!0){if(X8=M7(l,f,c),j&&l.isNodeMaterial)j.onUpdateProgram(l,X8,C0)}let P8=!1,$J=!1,oJ=!1,U9=X8.getUniforms(),L9=C0.uniforms;if(z.useProgram(X8.program))P8=!0,$J=!0,oJ=!0;if(l.id!==$0)$0=l.id,$J=!0;if(C0.needsLights){let D9=KH(A.state.lightProbeGridArray,c);if(C0.lightProbeGrid!==D9)C0.lightProbeGrid=D9,$J=!0}if(P8||i!==C){if(z.buffers.depth.getReversed()&&C.reversedDepth!==!0)C._reversedDepth=!0,C.updateProjectionMatrix();U9.setValue(v,"projectionMatrix",C.projectionMatrix),U9.setValue(v,"viewMatrix",C.matrixWorldInverse);let XJ=U9.map.cameraPosition;if(XJ!==void 0)XJ.setValue(v,i0.setFromMatrixPosition(C.matrixWorld));if(N9.logarithmicDepthBuffer)U9.setValue(v,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)U9.setValue(v,"isOrthographic",C.isOrthographicCamera===!0);if(i!==C)i=C,$J=!0,oJ=!0}if(C0.needsLights){if(d9.state.sunShadowMap.length>0)U9.setValue(v,"sunShadowMap",d9.state.sunShadowMap,s);if(d9.state.directionalShadowMap.length>0)U9.setValue(v,"directionalShadowMap",d9.state.directionalShadowMap,s);if(d9.state.spotShadowMap.length>0)U9.setValue(v,"spotShadowMap",d9.state.spotShadowMap,s);if(d9.state.pointShadowMap.length>0)U9.setValue(v,"pointShadowMap",d9.state.pointShadowMap,s)}if(c.isSkinnedMesh){U9.setOptional(v,c,"bindMatrix"),U9.setOptional(v,c,"bindMatrixInverse");let D9=c.skeleton;if(D9){if(D9.boneTexture===null)D9.computeBoneTexture();U9.setValue(v,"boneTexture",D9.boneTexture,s)}}if(c.isBatchedMesh){if(U9.setOptional(v,c,"batchingTexture"),U9.setValue(v,"batchingTexture",c._matricesTexture,s),U9.setOptional(v,c,"batchingIdTexture"),U9.setValue(v,"batchingIdTexture",c._indirectTexture,s),U9.setOptional(v,c,"batchingColorTexture"),c._colorsTexture!==null)U9.setValue(v,"batchingColorTexture",c._colorsTexture,s)}let WJ=o.morphAttributes;if(WJ.position!==void 0||WJ.normal!==void 0||WJ.color!==void 0)Q9.update(c,o,X8);if($J||C0.receiveShadow!==c.receiveShadow)C0.receiveShadow=c.receiveShadow,U9.setValue(v,"receiveShadow",c.receiveShadow);if((l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial)&&l.envMap===null&&f.environment!==null)L9.envMapIntensity.value=f.environmentIntensity;if(L9.dfgLUT!==void 0)L9.dfgLUT.value=sq();if($J){if(U9.setValue(v,"toneMappingExposure",B.toneMappingExposure),C0.needsLights)WH(L9,oJ);if(L0&&l.fog===!0)O0.refreshFogUniforms(L9,L0);if(O0.refreshMaterialUniforms(L9,l,g,S,A.state.transmissionRenderTarget[C.id]),C0.needsLights&&C0.lightProbeGrid){let D9=C0.lightProbeGrid;L9.probesSH.value=D9.texture,L9.probesMin.value.copy(D9.boundingBox.min),L9.probesMax.value.copy(D9.boundingBox.max),L9.probesResolution.value.copy(D9.resolution)}X7.upload(v,r$(C0),L9,s)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)X7.upload(v,r$(C0),L9,s),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)U9.setValue(v,"center",c.center);if(U9.setValue(v,"modelViewMatrix",c.modelViewMatrix),U9.setValue(v,"normalMatrix",c.normalMatrix),U9.setValue(v,"modelMatrix",c.matrixWorld),l.uniformsGroups!==void 0){let D9=l.uniformsGroups;for(let XJ=0,aJ=D9.length;XJ<aJ;XJ++){let JW=D9[XJ];V0.update(JW,X8),V0.bind(JW,X8)}}return X8}function WH(C,f){C.ambientLightColor.needsUpdate=f,C.lightProbe.needsUpdate=f,C.sunLights.needsUpdate=f,C.sunLightShadows.needsUpdate=f,C.directionalLights.needsUpdate=f,C.directionalLightShadows.needsUpdate=f,C.pointLights.needsUpdate=f,C.pointLightShadows.needsUpdate=f,C.spotLights.needsUpdate=f,C.spotLightShadows.needsUpdate=f,C.rectAreaLights.needsUpdate=f,C.hemisphereLights.needsUpdate=f}function XH(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(C,f,o){let l=b.get(C);if(l.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,l.__autoAllocateDepthBuffer===!1)l.__useRenderToTexture=!1;b.get(C.texture).__webglTexture=f,b.get(C.depthTexture).__webglTexture=l.__autoAllocateDepthBuffer?void 0:o,l.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,f){let o=b.get(C);o.__webglFramebuffer=f,o.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(C,f=0,o=0){u=C,w=f,n=o;let l=null,c=!1,L0=!1;if(C){let M0=b.get(C);if(M0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(v.FRAMEBUFFER,M0.__webglFramebuffer),Z0.copy(C.viewport),X0.copy(C.scissor),w0=C.scissorTest,z.viewport(Z0),z.scissor(X0),z.setScissorTest(w0),$0=-1;return}else if(M0.__webglFramebuffer===void 0)s.setupRenderTarget(C);else if(M0.__hasExternalTextures)s.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let l0=C.depthTexture;if(M0.__boundDepthTexture!==l0){if(l0!==null&&b.has(l0)&&(C.width!==l0.image.width||C.height!==l0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s.setupDepthRenderbuffer(C)}}let P0=C.texture;if(P0.isData3DTexture||P0.isDataArrayTexture||P0.isCompressedArrayTexture)L0=!0;let _0=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget){if(Array.isArray(_0[f]))l=_0[f][o];else l=_0[f];c=!0}else if(C.samples>0&&s.useMultisampledRTT(C)===!1)l=b.get(C).__webglMultisampledFramebuffer;else if(Array.isArray(_0))l=_0[o];else l=_0;Z0.copy(C.viewport),X0.copy(C.scissor),w0=C.scissorTest}else Z0.copy(Q0).multiplyScalar(g).floor(),X0.copy(r).multiplyScalar(g).floor(),w0=z0;if(o!==0)l=y;if(z.bindFramebuffer(v.FRAMEBUFFER,l))z.drawBuffers(C,l);if(z.viewport(Z0),z.scissor(X0),z.setScissorTest(w0),c){let M0=b.get(C.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+f,M0.__webglTexture,o)}else if(L0){let M0=f;for(let P0=0;P0<C.textures.length;P0++){let _0=b.get(C.textures[P0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+P0,_0.__webglTexture,o,M0)}}else if(C!==null&&o!==0){let M0=b.get(C.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,M0.__webglTexture,o)}$0=-1};function e$(C){let f=b.get(C);if(f.__readFormat!==C.format||f.__readType!==C.type)f.__readFormat=C.format,f.__readType=C.type,f.__formatReadable=N9.textureFormatReadable(C.format),f.__typeReadable=N9.textureTypeReadable(C.type);return f}if(this.readRenderTargetPixels=function(C,f,o,l,c,L0,B0,M0=0){if(!(C&&C.isWebGLRenderTarget)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P0=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&B0!==void 0)P0=P0[B0];if(P0){z.bindFramebuffer(v.FRAMEBUFFER,P0);try{let _0=C.textures[M0],l0=_0.format,s0=_0.type;if(C.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let k0=e$(_0);if(k0.__formatReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(k0.__typeReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=C.width-l&&(o>=0&&o<=C.height-c))v.readPixels(f,o,l,c,J0.convert(l0),J0.convert(s0),L0)}finally{let _0=u!==null?b.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,_0)}}},this.readRenderTargetPixelsAsync=async function(C,f,o,l,c,L0,B0,M0=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let P0=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&B0!==void 0)P0=P0[B0];if(P0)if(f>=0&&f<=C.width-l&&(o>=0&&o<=C.height-c)){z.bindFramebuffer(v.FRAMEBUFFER,P0);let _0=C.textures[M0],l0=_0.format,s0=_0.type;if(C.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let k0=e$(_0);if(k0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(k0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $9=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,$9),v.bufferData(v.PIXEL_PACK_BUFFER,L0.byteLength,v.STREAM_READ),v.readPixels(f,o,l,c,J0.convert(l0),J0.convert(s0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let V9=u!==null?b.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,V9);let R9=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await VX(v,R9,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,$9),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,L0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer($9),v.deleteSync(R9),L0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,f=null,o=0){let l=Math.pow(2,-o),c=Math.floor(C.image.width*l),L0=Math.floor(C.image.height*l),B0=f!==null?f.x:0,M0=f!==null?f.y:0;s.setTexture2D(C,0),v.copyTexSubImage2D(v.TEXTURE_2D,o,0,0,B0,M0,c,L0),z.unbindTexture()},this.copyTextureToTexture=function(C,f,o=null,l=null,c=0,L0=0){let B0,M0,P0,_0,l0,s0,k0,$9,V9,R9=C.isCompressedTexture?C.mipmaps[L0]:C.image;if(o!==null)B0=o.max.x-o.min.x,M0=o.max.y-o.min.y,P0=o.isBox3?o.max.z-o.min.z:1,_0=o.min.x,l0=o.min.y,s0=o.isBox3?o.min.z:0;else{let L9=Math.pow(2,-c);if(B0=Math.floor(R9.width*L9),M0=Math.floor(R9.height*L9),C.isDataArrayTexture)P0=R9.depth;else if(C.isData3DTexture)P0=Math.floor(R9.depth*L9);else P0=1;_0=0,l0=0,s0=0}if(l!==null)k0=l.x,$9=l.y,V9=l.z;else k0=0,$9=0,V9=0;let G9=J0.convert(f.format),b9=J0.convert(f.type),C0;if(f.isData3DTexture)s.setTexture3D(f,0),C0=v.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)s.setTexture2DArray(f,0),C0=v.TEXTURE_2D_ARRAY;else s.setTexture2D(f,0),C0=v.TEXTURE_2D;z.activeTexture(v.TEXTURE0),z.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,f.flipY),z.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),z.pixelStorei(v.UNPACK_ALIGNMENT,f.unpackAlignment);let d9=z.getParameter(v.UNPACK_ROW_LENGTH),t0=z.getParameter(v.UNPACK_IMAGE_HEIGHT),X8=z.getParameter(v.UNPACK_SKIP_PIXELS),P8=z.getParameter(v.UNPACK_SKIP_ROWS),$J=z.getParameter(v.UNPACK_SKIP_IMAGES);z.pixelStorei(v.UNPACK_ROW_LENGTH,R9.width),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,R9.height),z.pixelStorei(v.UNPACK_SKIP_PIXELS,_0),z.pixelStorei(v.UNPACK_SKIP_ROWS,l0),z.pixelStorei(v.UNPACK_SKIP_IMAGES,s0);let oJ=C.isDataArrayTexture||C.isData3DTexture,U9=f.isDataArrayTexture||f.isData3DTexture;if(C.isDepthTexture){let L9=b.get(C),WJ=b.get(f),D9=b.get(L9.__renderTarget),XJ=b.get(WJ.__renderTarget);z.bindFramebuffer(v.READ_FRAMEBUFFER,D9.__webglFramebuffer),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,XJ.__webglFramebuffer);for(let aJ=0;aJ<P0;aJ++){if(oJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,b.get(C).__webglTexture,c,s0+aJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,b.get(f).__webglTexture,L0,V9+aJ);v.blitFramebuffer(_0,l0,B0,M0,k0,$9,B0,M0,v.DEPTH_BUFFER_BIT,v.NEAREST)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(c!==0||C.isRenderTargetTexture||b.has(C)){let L9=b.get(C),WJ=b.get(f);z.bindFramebuffer(v.READ_FRAMEBUFFER,m),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,T);for(let D9=0;D9<P0;D9++){if(oJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,L9.__webglTexture,c,s0+D9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,L9.__webglTexture,c);if(U9)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,WJ.__webglTexture,L0,V9+D9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,WJ.__webglTexture,L0);if(c!==0)v.blitFramebuffer(_0,l0,B0,M0,k0,$9,B0,M0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(U9)v.copyTexSubImage3D(C0,L0,k0,$9,V9+D9,_0,l0,B0,M0);else v.copyTexSubImage2D(C0,L0,k0,$9,_0,l0,B0,M0)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(U9)if(C.isDataTexture||C.isData3DTexture)v.texSubImage3D(C0,L0,k0,$9,V9,B0,M0,P0,G9,b9,R9.data);else if(f.isCompressedArrayTexture)v.compressedTexSubImage3D(C0,L0,k0,$9,V9,B0,M0,P0,G9,R9.data);else v.texSubImage3D(C0,L0,k0,$9,V9,B0,M0,P0,G9,b9,R9);else if(C.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,L0,k0,$9,B0,M0,G9,b9,R9.data);else if(C.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,L0,k0,$9,R9.width,R9.height,G9,R9.data);else v.texSubImage2D(v.TEXTURE_2D,L0,k0,$9,B0,M0,G9,b9,R9);if(z.pixelStorei(v.UNPACK_ROW_LENGTH,d9),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,t0),z.pixelStorei(v.UNPACK_SKIP_PIXELS,X8),z.pixelStorei(v.UNPACK_SKIP_ROWS,P8),z.pixelStorei(v.UNPACK_SKIP_IMAGES,$J),L0===0&&f.generateMipmaps)v.generateMipmap(C0);z.unbindTexture()},this.initRenderTarget=function(C){if(b.get(C).__webglFramebuffer===void 0)s.setupRenderTarget(C)},this.initTexture=function(C){if(C.isCubeTexture)s.setTextureCube(C,0);else if(C.isData3DTexture)s.setTexture3D(C,0);else if(C.isDataArrayTexture||C.isCompressedArrayTexture)s.setTexture2DArray(C,0);else s.setTexture2D(C,0);z.unbindTexture()},this.resetState=function(){w=0,n=0,u=null,z.reset(),F0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return IK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=o0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=o0._getUnpackColorSpace()}}var HY={type:"change"},Y$={type:"start"},NY={type:"end"},IQ=new e6,UY=new H8,iq=Math.cos(70*o6.DEG2RAD),k9=new x,J8=2*Math.PI,H9={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},X$=0.000001;class H$ extends FQ{constructor(J,Q=null){super(J,Q);if(this.state=H9.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:EJ.ROTATE,MIDDLE:EJ.DOLLY,RIGHT:EJ.PAN},this.touches={ONE:DJ.ROTATE,TWO:DJ.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new t9,this._lastTargetPosition=new x,this._quat=new t9().setFromUnitVectors(J.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Z7,this._sphericalDelta=new Z7,this._scale=1,this._panOffset=new x,this._rotateStart=new x0,this._rotateEnd=new x0,this._rotateDelta=new x0,this._panStart=new x0,this._panEnd=new x0,this._panDelta=new x0,this._dollyStart=new x0,this._dollyEnd=new x0,this._dollyDelta=new x0,this._dollyDirection=new x,this._mouse=new x0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aq.bind(this),this._onPointerDown=oq.bind(this),this._onPointerUp=rq.bind(this),this._onContextMenu=$E.bind(this),this._onMouseWheel=JE.bind(this),this._onKeyDown=QE.bind(this),this._onTouchStart=ZE.bind(this),this._onTouchMove=KE.bind(this),this._onMouseDown=tq.bind(this),this._onMouseMove=eq.bind(this),this._interceptControlDown=WE.bind(this),this._interceptControlUp=XE.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=H9.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(HY),this.update(),this.state=H9.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(k9.copy(Q).sub(this.target),k9.applyQuaternion(this._quat),this._spherical.setFromVector3(k9),this.autoRotate&&this.state===H9.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Z=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite(Z)&&isFinite(K)){if(Z<-Math.PI)Z+=J8;else if(Z>Math.PI)Z-=J8;if(K<-Math.PI)K+=J8;else if(K>Math.PI)K-=J8;if(Z<=K)this._spherical.theta=Math.max(Z,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Z+K)/2?Math.max(Z,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let $=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),$=W!=this._spherical.radius}if(k9.setFromSpherical(this._spherical),k9.applyQuaternion(this._quatInverse),Q.copy(this.target).add(k9),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=k9.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),$=!!Y}else if(this.object.isOrthographicCamera){let X=new x(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),$=Y!==this.object.zoom;let H=new x(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),W=k9.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(IQ.origin.copy(this.object.position),IQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(IQ.direction))<iq)this.object.lookAt(this.target);else UY.setFromNormalAndCoplanarPoint(this.object.up,this.target),IQ.intersectPlane(UY,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),$=!0}if(this._scale=1,this._performCursorZoom=!1,$||this._lastPosition.distanceToSquared(this.object.position)>X$||8*(1-this._lastQuaternion.dot(this.object.quaternion))>X$||this._lastTargetPosition.distanceToSquared(this.target)>X$)return this.dispatchEvent(HY),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return J8/60*this.autoRotateSpeed*J;else return J8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){k9.setFromMatrixColumn(Q,0),k9.multiplyScalar(-J),this._panOffset.add(k9)}_panUp(J,Q){if(this.screenSpacePanning===!0)k9.setFromMatrixColumn(Q,1);else k9.setFromMatrixColumn(Q,0),k9.crossVectors(this.object.up,k9);k9.multiplyScalar(J),this._panOffset.add(k9)}_pan(J,Q){let Z=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;k9.copy(K).sub(this.target);let $=k9.length();$*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*$/Z.clientHeight,this.object.matrix),this._panUp(2*Q*$/Z.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Z.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/Z.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Z=this.domElement.getBoundingClientRect(),K=J-Z.left,$=Q-Z.top,W=Z.width,X=Z.height;this._mouse.x=K/W*2-1,this._mouse.y=-($/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(J8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(J8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(J8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-J8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(J8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-J8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set(Z,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set(Z,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyStart.set(0,$)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Z=this._getSecondPointerPosition(J),K=0.5*(J.pageX+Z.x),$=0.5*(J.pageY+Z.y);this._rotateEnd.set(K,$)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(J8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(J8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set(Z,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyEnd.set(0,$),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new x0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,Z={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Z.deltaY*=10;return Z}}function oq(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function aq(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function rq(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(NY),this.state=H9.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],Z=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:Z.x,pageY:Z.y});break}}function tq(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case EJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=H9.DOLLY;break;case EJ.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H9.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H9.ROTATE}break;case EJ.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H9.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H9.PAN}break;default:this.state=H9.NONE}if(this.state!==H9.NONE)this.dispatchEvent(Y$)}function eq(J){switch(this.state){case H9.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case H9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case H9.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function JE(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==H9.NONE)return;J.preventDefault(),this.dispatchEvent(Y$),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(NY)}function QE(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function ZE(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case DJ.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=H9.TOUCH_ROTATE;break;case DJ.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=H9.TOUCH_PAN;break;default:this.state=H9.NONE}break;case 2:switch(this.touches.TWO){case DJ.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=H9.TOUCH_DOLLY_PAN;break;case DJ.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=H9.TOUCH_DOLLY_ROTATE;break;default:this.state=H9.NONE}break;default:this.state=H9.NONE}if(this.state!==H9.NONE)this.dispatchEvent(Y$)}function KE(J){switch(this._trackPointer(J),this.state){case H9.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case H9.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case H9.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case H9.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=H9.NONE}}function $E(J){if(this.enabled===!1)return;J.preventDefault()}function WE(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function XE(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var VQ={jaw:0.6,tbX:2.9,tbY:6.85,ttX:6.45,ttY:7.3,ttCurl:0,root:0,lipAp:0.7,lipProt:0.2,lipWidth:0.5,labiodental:0,velum:-0.15,larynx:0,epilarynx:0,ventricular:0,lateral:0,dorsum:0};var e={blue:"#4fb6f2",blueMid:"#3487c4",blueDim:"#1f5f8c",frame:"#133954",green:"#5be381",red:"#ff5d40",pink:"#ff73cf",white:"#eef6f8",amber:"#ffb340"},d1=[e.green,e.red,e.pink,e.white],CQ={primary:"#effbff",secondary:"#e2f5fc"};function GY(J,Q,Z){let K=parseInt(J.slice(1),16),$=parseInt(Q.slice(1),16),W=(X)=>Math.round((K>>X&255)*(1-Z)+($>>X&255)*Z);return"#"+[16,8,0].map((X)=>W(X).toString(16).padStart(2,"0")).join("")}var BQ=(J)=>GY(J,"#ffffff",0.55),e8=[[0,"#3a2408"],[0.35,"#c9822a"],[0.6,"#ffb340"],[0.82,"#ffe39a"],[1,"#fff8ec"]];function AQ(J){let Q=Math.max(0,Math.min(1,J));for(let Z=1;Z<e8.length;Z++)if(Q<=e8[Z][0])return GY(e8[Z-1][1],e8[Z][1],(Q-e8[Z-1][0])/(e8[Z][0]-e8[Z-1][0]));return e8[e8.length-1][1]}var u1={black:"#000000",console:"#000000",inset:"#000000",line:e.frame,text:e.blue,textDim:e.blueMid,caliper:e.amber,caliperDim:"rgba(255, 179, 64, 0.45)",fat:"#bdbdbd",skin:"#a8a8a8",muscle:"#5d5d5d",tongue:"#6b6b6b",brain:"#7c7c7c",marrow:"#b2b2b2",cortex:"#1c1c1c",cartilage:"#3e3e3e",mucosa:"#8f8f8f",tooth:"#101010"};var zQ=(J)=>{if(!(J>0))return 0;let Q=Math.log10(40),Z=Math.log10(4000);return Math.max(0,Math.min(1,(Math.log10(J)-Q)/(Z-Q)))};var qY=(J,Q)=>Math.hypot(J.x-Q.x,J.y-Q.y);var PQ=(J,Q,Z)=>{let K=Math.sin(Z),$=Math.cos(Z),W=J.x-Q.x,X=J.y-Q.y;return{x:Q.x+W*$-X*K,y:Q.y+W*K+X*$}};function V8(J,Q){if(J.length<3)return J.slice();let Z=[];for(let K=0;K<J.length-1;K++){let $=J[Math.max(0,K-1)],W=J[K],X=J[K+1],Y=J[Math.min(J.length-1,K+2)];for(let H=0;H<Q;H++){let N=H/Q,q=N*N,U=q*N;Z.push({x:0.5*(2*W.x+(-$.x+X.x)*N+(2*$.x-5*W.x+4*X.x-Y.x)*q+(-$.x+3*W.x-3*X.x+Y.x)*U),y:0.5*(2*W.y+(-$.y+X.y)*N+(2*$.y-5*W.y+4*X.y-Y.y)*q+(-$.y+3*W.y-3*X.y+Y.y)*U)})}}return Z.push(J[J.length-1]),Z}var YE='"Hershey", "Archivo", system-ui, sans-serif',EY=(J,Q="l")=>`${Q==="m"?500:300} ${J}px ${YE}`,HE=typeof CanvasRenderingContext2D!=="undefined"&&"letterSpacing"in CanvasRenderingContext2D.prototype;function UE(J,Q=!1){let Z=new Path2D;if(J.length===0)return Z;Z.moveTo(J[0][0],J[0][1]);for(let K=1;K<J.length;K++)Z.lineTo(J[K][0],J[K][1]);if(Q)Z.closePath();return Z}function z6(J,Q,Z,K,$={}){if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.lineJoin="round",J.lineCap="round",J.setLineDash($.dash??[]),J.strokeStyle=Z,J.lineWidth=K,J.stroke(Q),$.hot)J.globalCompositeOperation="source-over",J.strokeStyle=BQ(Z),J.lineWidth=K*0.42,J.stroke(Q);J.restore()}function gJ(J,Q,Z,K,$={}){if(Q.length<2)return;z6(J,UE(Q,$.close),Z,K,$)}function Y7(J,Q,Z,K,$,W,X,Y={}){let H=new Path2D;H.moveTo(Q,Z),H.lineTo(K,$),z6(J,H,W,X,Y)}function DY(J,Q,Z,K,$,W=1.2,X={}){let Y=new Path2D;Y.arc(Q,Z,K,0,Math.PI*2),z6(J,Y,$,W,X)}function H7(J,Q,Z,K,$,W=1){J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=W,J.fillStyle=$,J.beginPath(),J.arc(Q,Z,K,0,Math.PI*2),J.fill(),J.restore()}function FY(J,Q,Z,K,$=7,W=1){let Y=new Path2D;Y.arc(Q,Z,$,0,Math.PI*2),Y.moveTo(Q-$-4,Z),Y.lineTo(Q-$+2,Z),Y.moveTo(Q+$-2,Z),Y.lineTo(Q+$+4,Z),Y.moveTo(Q,Z-$-4),Y.lineTo(Q,Z-$+2),Y.moveTo(Q,Z+$-2),Y.lineTo(Q,Z+$+4),z6(J,Y,K,1.25,{alpha:W})}function w9(J,Q,Z,K,$={}){let W=$.size??11;if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.font=EY(W,$.weight),HE)J.letterSpacing=`${(($.ls??0.14)*W).toFixed(2)}px`;J.textAlign=$.align??"left",J.textBaseline=$.baseline??"alphabetic",J.fillStyle=$.color??e.blue;let X=J;if($.moving)X.layoutMoving=!0;J.fillText(Q,Z,K),X.layoutMoving=void 0,J.restore()}function pJ(J,Q=2){let Z=J.length>1&&J[0][0]===J[J.length-1][0]&&J[0][1]===J[J.length-1][1]?J.slice(0,-1):J.slice();for(let K=0;K<Q;K++){let $=[];for(let W=0;W<Z.length;W++){let X=Z[W],Y=Z[(W+1)%Z.length];$.push([X[0]*0.75+Y[0]*0.25,X[1]*0.75+Y[1]*0.25],[X[0]*0.25+Y[0]*0.75,X[1]*0.25+Y[1]*0.75])}Z=$}return Z.length?[...Z,Z[0]]:Z}function U$(J,Q,Z,K,$,W,X=1){let Y=$*0.5,H=Y*0.48,N=Z-Y/2,q=Math.max(0.9,$*0.07),U=(E)=>E.toFixed(2),G=(E)=>{J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.strokeStyle=W,J.lineWidth=q,J.lineCap="round",J.lineJoin="round",J.stroke(new Path2D(E)),J.restore()},D=(E,R)=>{if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.font=EY($),J.textAlign="center",J.textBaseline="alphabetic",J.fillStyle=W,R)R(J);J.fillText(E,R?0:Q,R?0:Z),J.restore()},O=(E)=>{E.translate(Q,N),E.rotate(Math.PI),E.translate(0,Y/2)},L=(E)=>{E.translate(Q,Z),E.scale(-1,1)},F=(E)=>`M${U(E+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(E-H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(E+H)} ${U(N)}`;switch(K){case"ɑ":{let E=Q-0.06*$;return G(F(E)+`M${U(E+H)} ${U(Z-Y)}L${U(E+H)} ${U(Z)}`)}case"ɒ":{let E=Q+0.06*$;return G(F(E)+`M${U(E-H)} ${U(Z-Y)}L${U(E-H)} ${U(Z)}`)}case"ɪ":return G(`M${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z)}M${U(Q-Y*0.3)} ${U(Z-Y)}L${U(Q+Y*0.3)} ${U(Z-Y)}M${U(Q-Y*0.3)} ${U(Z)}L${U(Q+Y*0.3)} ${U(Z)}`);case"ɛ":return G(`M${U(Q+H*0.9)} ${U(Z-Y*0.92)}Q${U(Q-H*1.1)} ${U(Z-Y*1.08)} ${U(Q-H*0.25)} ${U(N)}Q${U(Q-H*1.3)} ${U(Z+Y*0.1)} ${U(Q+H*0.95)} ${U(Z-Y*0.06)}`);case"ɜ":return G(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}`);case"ɝ":return G(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}M${U(Q+H*0.55)} ${U(N-Y*0.1)}Q${U(Q+H*1.4)} ${U(N-Y*0.5)} ${U(Q+H*1.5)} ${U(N-Y*0.15)}`);case"ʊ":return G(`M${U(Q-H*1.15)} ${U(Z-Y)}Q${U(Q-H*0.5)} ${U(Z-Y*0.9)} ${U(Q-H*0.75)} ${U(N)}Q${U(Q-H)} ${U(Z)} ${U(Q)} ${U(Z)}Q${U(Q+H)} ${U(Z)} ${U(Q+H*0.75)} ${U(N)}Q${U(Q+H*0.5)} ${U(Z-Y*0.9)} ${U(Q+H*1.15)} ${U(Z-Y)}`);case"ʌ":return G(`M${U(Q-H)} ${U(Z)}L${U(Q)} ${U(Z-Y)}L${U(Q+H)} ${U(Z)}`);case"ɤ":return G(`M${U(Q-H)} ${U(Z-Y)}L${U(Q)} ${U(Z-Y*0.1)}L${U(Q+H)} ${U(Z-Y)}M${U(Q)} ${U(Z-Y*0.1)}Q${U(Q-H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z+Y*0.45)}Q${U(Q+H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z-Y*0.1)}`);case"ʃ":return G(`M${U(Q+H*0.9)} ${U(Z-Y*1.9)}Q${U(Q)} ${U(Z-Y*2.2)} ${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z+Y*0.3)}Q${U(Q)} ${U(Z+Y*0.95)} ${U(Q-H*0.9)} ${U(Z+Y*0.7)}`);case"θ":return G(`M${U(Q+H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q-H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q+H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y)}L${U(Q+H)} ${U(Z-Y)}`);case"ŋ":return G(`M${U(Q-H)} ${U(Z)}L${U(Q-H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y*0.6)}Q${U(Q-H*0.2)} ${U(Z-Y*1.1)} ${U(Q+H*0.6)} ${U(Z-Y*0.9)}Q${U(Q+H)} ${U(Z-Y*0.75)} ${U(Q+H)} ${U(Z-Y*0.4)}L${U(Q+H)} ${U(Z+Y*0.4)}Q${U(Q+H)} ${U(Z+Y*0.85)} ${U(Q+H*0.3)} ${U(Z+Y*0.8)}`);case"ə":return G(`M${U(Q-H)} ${U(N)}L${U(Q+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 1 ${U(Q-H*0.75)} ${U(Z-Y*0.85)}`);case"ɐ":return D("a",O);case"ɔ":return D("c",L);case"ɯ":return D("m",O);case"ɨ":return D("i"),G(`M${U(Q-H*0.8)} ${U(N)}L${U(Q+H*0.8)} ${U(N)}`);case"ø":return D("o"),G(`M${U(Q-H*1.1)} ${U(Z+Y*0.1)}L${U(Q+H*1.1)} ${U(Z-Y*1.1)}`);case"æ":return D("æ");case"œ":return D("œ");default:return D(K)}}var OY=new G8,kQ=new x;class P6 extends EQ{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let J=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],Q=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],Z=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(Z),this.setAttribute("position",new c9(J,3)),this.setAttribute("uv",new c9(Q,2))}applyMatrix4(J){let Q=this.attributes.instanceStart,Z=this.attributes.instanceEnd;if(Q!==void 0)Q.applyMatrix4(J),Z.applyMatrix4(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new y8(Q,6,1);return this.setAttribute("instanceStart",new g9(Z,3,0)),this.setAttribute("instanceEnd",new g9(Z,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new y8(Q,6,1);return this.setAttribute("instanceColorStart",new g9(Z,3,0)),this.setAttribute("instanceColorEnd",new g9(Z,3,3)),this}fromWireframeGeometry(J){return this.setPositions(J.attributes.position.array),this}fromEdgesGeometry(J){return this.setPositions(J.attributes.position.array),this}fromMesh(J){return this.fromWireframeGeometry(new UQ(J.geometry)),this}fromLineSegments(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new G8;let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0)this.boundingBox.setFromBufferAttribute(J),OY.setFromBufferAttribute(Q),this.boundingBox.union(OY)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new t8;if(this.boundingBox===null)this.computeBoundingBox();let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0){let Z=this.boundingSphere.center;this.boundingBox.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)kQ.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(kQ)),kQ.fromBufferAttribute(Q,$),K=Math.max(K,Z.distanceToSquared(kQ));if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}G0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new x0},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};n9.line={uniforms:Q7.merge([G0.common,G0.fog,G0.line]),vertexShader:`
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
		`};class U7 extends e9{constructor(J){super({type:"LineMaterial",uniforms:Q7.clone(n9.line.uniforms),vertexShader:n9.line.vertexShader,fragmentShader:n9.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(J)}get color(){return this.uniforms.diffuse.value}set color(J){this.uniforms.diffuse.value=J}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(J){if(J===!0!==this.worldUnits)this.needsUpdate=!0;if(J===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(J){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=J}get dashed(){return"USE_DASH"in this.defines}set dashed(J){if(J===!0!==this.dashed)this.needsUpdate=!0;if(J===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(J){this.uniforms.dashScale.value=J}get dashSize(){return this.uniforms.dashSize.value}set dashSize(J){this.uniforms.dashSize.value=J}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(J){this.uniforms.dashOffset.value=J}get gapSize(){return this.uniforms.gapSize.value}set gapSize(J){this.uniforms.gapSize.value=J}get opacity(){return this.uniforms.opacity.value}set opacity(J){if(!this.uniforms)return;this.uniforms.opacity.value=J}get resolution(){return this.uniforms.resolution.value}set resolution(J){this.uniforms.resolution.value.copy(J)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(J){if(!this.defines)return;if(J===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(J===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}var N$=new Y9,RY=new x,MY=new x,j9=new Y9,v9=new Y9,f8=new Y9,G$=new x,q$=new M9,y9=new DQ,LY=new x,_Q=new G8,TQ=new t8,h8=new Y9,x8,mJ;function IY(J,Q,Z){return h8.set(0,0,-Q,1).applyMatrix4(J.projectionMatrix),h8.multiplyScalar(1/h8.w),h8.x=mJ/Z.width,h8.y=mJ/Z.height,h8.applyMatrix4(J.projectionMatrixInverse),h8.multiplyScalar(1/h8.w),Math.abs(Math.max(h8.x,h8.y))}function NE(J,Q){let{matrixWorld:Z,geometry:K}=J,$=K.attributes.instanceStart,W=K.attributes.instanceEnd,X=Math.min(K.instanceCount,$.count);for(let Y=0,H=X;Y<H;Y++){y9.start.fromBufferAttribute($,Y),y9.end.fromBufferAttribute(W,Y),y9.applyMatrix4(Z);let N=new x,q=new x;if(x8.distanceSqToSegment(y9.start,y9.end,q,N),q.distanceTo(N)<mJ*0.5)Q.push({point:q,pointOnLine:N,distance:x8.origin.distanceTo(q),object:J,face:null,faceIndex:Y,uv:null,uv1:null})}}function GE(J,Q,Z){let K=Q.projectionMatrix,W=J.material.resolution,X=J.matrixWorld,Y=J.geometry,H=Y.attributes.instanceStart,N=Y.attributes.instanceEnd,q=Math.min(Y.instanceCount,H.count),U=-Q.near;x8.at(1,f8),f8.w=1,f8.applyMatrix4(Q.matrixWorldInverse),f8.applyMatrix4(K),f8.multiplyScalar(1/f8.w),f8.x*=W.x/2,f8.y*=W.y/2,f8.z=0,G$.copy(f8),q$.multiplyMatrices(Q.matrixWorldInverse,X);for(let G=0,D=q;G<D;G++){if(j9.fromBufferAttribute(H,G),v9.fromBufferAttribute(N,G),j9.w=1,v9.w=1,j9.applyMatrix4(q$),v9.applyMatrix4(q$),j9.z>U&&v9.z>U)continue;if(j9.z>U){let k=j9.z-v9.z,V=(j9.z-U)/k;j9.lerp(v9,V)}else if(v9.z>U){let k=v9.z-j9.z,V=(v9.z-U)/k;v9.lerp(j9,V)}j9.applyMatrix4(K),v9.applyMatrix4(K),j9.multiplyScalar(1/j9.w),v9.multiplyScalar(1/v9.w),j9.x*=W.x/2,j9.y*=W.y/2,v9.x*=W.x/2,v9.y*=W.y/2,y9.start.copy(j9),y9.start.z=0,y9.end.copy(v9),y9.end.z=0;let L=y9.closestPointToPointParameter(G$,!0);y9.at(L,LY);let F=o6.lerp(j9.z,v9.z,L),E=F>=-1&&F<=1,R=G$.distanceTo(LY)<mJ*0.5;if(E&&R){y9.start.fromBufferAttribute(H,G),y9.end.fromBufferAttribute(N,G),y9.start.applyMatrix4(X),y9.end.applyMatrix4(X);let k=new x,V=new x;x8.distanceSqToSegment(y9.start,y9.end,V,k),Z.push({point:V,pointOnLine:k,distance:x8.origin.distanceTo(V),object:J,face:null,faceIndex:G,uv:null,uv1:null})}}}class E$ extends $8{constructor(J=new P6,Q=new U7({color:Math.random()*16777215})){super(J,Q);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let J=this.geometry,Q=J.attributes.instanceStart,Z=J.attributes.instanceEnd,K=new Float32Array(2*Q.count);for(let W=0,X=0,Y=Q.count;W<Y;W++,X+=2)RY.fromBufferAttribute(Q,W),MY.fromBufferAttribute(Z,W),K[X]=X===0?0:K[X-1],K[X+1]=K[X]+RY.distanceTo(MY);let $=new y8(K,2,1);return J.setAttribute("instanceDistanceStart",new g9($,1,0)),J.setAttribute("instanceDistanceEnd",new g9($,1,1)),this}raycast(J,Q){let Z=this.material.worldUnits,K=J.camera;if(K===null&&!Z)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');if(Z===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let $=J.params.Line2!==void 0?J.params.Line2.threshold||0:0;x8=J.ray;let W=this.matrixWorld,X=this.geometry,Y=this.material;if(mJ=Y.linewidth+$,X.boundingSphere===null)X.computeBoundingSphere();TQ.copy(X.boundingSphere).applyMatrix4(W);let H;if(Z)H=mJ*0.5;else{let q=Math.max(K.near,TQ.distanceToPoint(x8.origin));H=IY(K,q,Y.resolution)}if(TQ.radius+=H,x8.intersectsSphere(TQ)===!1)return;if(X.boundingBox===null)X.computeBoundingBox();_Q.copy(X.boundingBox).applyMatrix4(W);let N;if(Z)N=mJ*0.5;else{let q=Math.max(K.near,_Q.distanceToPoint(x8.origin));N=IY(K,q,Y.resolution)}if(_Q.expandByScalar(N),x8.intersectsBox(_Q)===!1)return;if(Z)NE(this,Q);else GE(this,K,Q)}onBeforeRender(J){let Q=this.material.uniforms;if(Q&&Q.resolution)J.getViewport(N$),this.material.uniforms.resolution.value.set(N$.z,N$.w)}}var wQ=[0.6,0.85,1.05,1.3,1.6,2.1];class F${a=new Float32Array(768);n=0;reset(){return this.n=0,this}p(J,Q,Z){if(3*this.n+3>this.a.length){let $=new Float32Array(this.a.length*2);$.set(this.a),this.a=$}let K=3*this.n++;return this.a[K]=J,this.a[K+1]=Q,this.a[K+2]=Z,this}}class CY{material;mesh;geo=new P6;pos=new Float32Array(0);col=new Float32Array(0);pb=null;cb=null;cap=0;n=0;constructor(J){this.material=J;this.mesh=new E$(this.geo,J),this.mesh.frustumCulled=!1,this.grow(2048)}grow(J){let Q=new Float32Array(J*6),Z=new Float32Array(J*6);Q.set(this.pos.subarray(0,this.n*6)),Z.set(this.col.subarray(0,this.n*6)),this.pos=Q,this.col=Z,this.cap=J,this.geo.dispose(),this.geo=new P6;let K=this.pb=new y8(Q,6,1).setUsage(e7),$=this.cb=new y8(Z,6,1).setUsage(e7);this.geo.setAttribute("instanceStart",new g9(K,3,0)),this.geo.setAttribute("instanceEnd",new g9(K,3,3)),this.geo.setAttribute("instanceColorStart",new g9($,3,0)),this.geo.setAttribute("instanceColorEnd",new g9($,3,3)),this.mesh.geometry=this.geo}seg(J,Q,Z,K,$,W,X,Y,H){if(this.n>=this.cap)this.grow(this.cap*2);let N=this.n++*6,q=this.pos,U=this.col;q[N]=J,q[N+1]=Q,q[N+2]=Z,q[N+3]=K,q[N+4]=$,q[N+5]=W,U[N]=U[N+3]=X,U[N+1]=U[N+4]=Y,U[N+2]=U[N+5]=H}commit(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0;for(let J of[this.pb,this.cb])J.clearUpdateRanges(),J.addUpdateRange(0,this.n*6),J.needsUpdate=!0}dispose(){this.geo.dispose(),this.material.dispose()}}var VY=new Map;function D$(J){let Q=VY.get(J);if(!Q){let Z=parseInt(J.slice(1),16);Q=[(Z>>16&255)/255,(Z>>8&255)/255,(Z&255)/255],VY.set(J,Q)}return Q}class O${group=new qJ;batches;constructor(){this.batches=wQ.map((J)=>{let Q=new U7({linewidth:J,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});Q.blending=g7,Q.blendEquation=p7,Q.fog=!0;let Z=new CY(Q);return this.group.add(Z.mesh),Z})}setResolution(J,Q){for(let Z of this.batches)Z.material.resolution.set(J,Q)}begin(){for(let J of this.batches)J.n=0}end(){for(let J of this.batches)J.commit()}batch(J){let Q=0;for(let Z=1;Z<wQ.length;Z++)if(Math.abs(wQ[Z]-J)<Math.abs(wQ[Q]-J))Q=Z;return this.batches[Q]}line(J,Q,Z,K,$={}){if(Q<2)return;let W=$.alpha??1;if(this.strokes(J,Q,D$(Z),W,this.batch(K),$.close??!1),$.hot)this.strokes(J,Q,D$(BQ(Z)),W,this.batch(K*0.42),$.close??!1)}poly(J,Q,Z,K={}){this.line(J.a,J.n,Q,Z,K)}seg(J,Q,Z,K,$,W,X,Y,H=1){let[N,q,U]=D$(X);this.batch(Y).seg(J,Q,Z,K,$,W,N*H,q*H,U*H)}strokes(J,Q,[Z,K,$],W,X,Y){Z*=W,K*=W,$*=W;for(let H=0;H<Q-1;H++){let N=3*H;X.seg(J[N],J[N+1],J[N+2],J[N+3],J[N+4],J[N+5],Z,K,$)}if(Y){let H=3*(Q-1);X.seg(J[H],J[H+1],J[H+2],J[0],J[1],J[2],Z,K,$)}}dispose(){for(let J of this.batches)J.dispose()}}var M$={x0:-7.5,x1:10.25,y0:-4.55,y1:19.9};function L$(J,Q){let Z=J.tract;return-Math.max(-0.2,Math.min(3,Q))*Z.scale/qY(Z.P(-2.5,10.5),Z.P(6.95,7.75))}function I$(J,Q){let Z=J.tract,K=Z.P(-2.5,10.5),$=L$(J,Q.jaw);return(W,X)=>PQ(Z.P(W,X),K,$)}function R$(J,Q,Z,K=0,$=40){let W=Math.cos(-K),X=Math.sin(-K),Y=[];for(let H=0;H<=$;H++){let N=H/$*Math.PI*2,q=Math.cos(N)*Q,U=Math.sin(N)*Z;Y.push({x:J.x+q*W-U*X,y:J.y+q*X+U*W})}return Y}function qE(J,Q,Z){let K=Math.min(J.x,Q.x),$=Math.max(J.x,Q.x),W=Math.min(J.y,Q.y),X=Math.max(J.y,Q.y),Y=Math.min(Z,($-K)/2,(X-W)/2),H=[],N=(q,U,G)=>{for(let D=0;D<=6;D++){let O=G+D/6*(Math.PI/2);H.push({x:q+Math.cos(O)*Y,y:U+Math.sin(O)*Y})}};return N($-Y,X-Y,0),N(K+Y,X-Y,Math.PI/2),N(K+Y,W+Y,Math.PI),N($-Y,W+Y,3*Math.PI/2),H.push(H[0]),H}var SQ=(J)=>-1.2-0.025*J;function V$(J){let Q=J.tract.scale,Z=J.bodyParams.pharynx;return(K,$)=>({x:K*Q,y:($<7?7-(7-$)*Z:$)*Q})}function N7(J,Q,Z){let K=J.tract,$=(B,p)=>K.P(B,p),W=I$(J,Z),X=K.scale,Y=Z.larynx*X,H=V$(J),N=Q.upperLip.slice(7),q=Q.lowerLip.slice(7),U=V8([H(2.3,-4.6),H(2.38,-1.5),H(2.52,0.4),H(3,1.7),W(5.3,3),W(7.25,3.35),W(7.95,4.6),W(7.55,5.7)],4),G=V8([N[N.length-1],H(7.05,10.6),H(7.75,10.78),H(8.75,11.05),H(9.25,11.65),H(8.95,12.6),H(8.35,13.9),H(7.7,15),H(7.95,16.1),H(7.9,18.1),H(6.9,20.5)],4),D=V8([H(6.9,20.5),H(3,22.9),H(-2.2,22.7),H(-6.9,19.6),H(-8.7,15.4),H(-8.3,11.9),H(-7.4,8.9),H(-6.8,4.8),H(-6.6,0),H(-6.6,-4.6)],4),O=[];for(let B=0;B<9;B++){let p=-4.4+B*1.75;if(p>10.5)break;let j=SQ(p)-2.25;O.push(qE($(j,p+1.4),$(j+1.6,p),0.32*X))}let F=[[1,9.6],[1.8,9.92],[2.7,10.18],[3.6,10.3],[4.4,10.25],[5.1,10.05],[5.7,9.72],[6.15,9.36],[6.55,9.15],[7,9.6]].map(([B,p])=>K.P(B,p)),E=Q.jawBone.filter((B)=>B.x>0.8*X),R=Q.glottis,k={x:$(1.6,0).x,y:$(0,2.9).y+0.6*Y},V=[];for(let B=0;B<4;B++){let p=R.y-(0.9+B*1)*X;if(p<-4.4)break;V.push([{x:R.x+0.8*X,y:p},{x:R.x+1.05*X,y:p-0.05},{x:R.x+1.05*X,y:p-0.5*X},{x:R.x+0.82*X,y:p-0.45*X},{x:R.x+0.8*X,y:p}])}let A=W(6,5.45),P=Q.tongueCenter,_=[];for(let B=0;B<=16;B++){let p=Math.PI*(0.18+0.9*B/16),j={x:P.x+Math.cos(p)*Q.tongueRadius*1.25,y:P.y+Math.sin(p)*Q.tongueRadius*1.25},y={x:P.x,y:(P.y+A.y)/2},m=[];for(let T=0;T<=12;T++){let w=T/12;m.push({x:(1-w)*(1-w)*A.x+2*(1-w)*w*y.x+w*w*j.x,y:(1-w)*(1-w)*A.y+2*(1-w)*w*y.y+w*w*j.y})}_.push(m)}let I={x:SQ(R.y/X)*X,y:R.y};return{f:Q,model:J,skinLower:[...U,...q.slice().reverse()],skinUpper:[...N,...G.slice(1),...D.slice(1)],inset:V8([H(1.85,-4.6),H(1.9,-0.8),H(2.3,1.6),W(5.2,3.6),W(6.9,3.9),W(7.4,4.9),W(7.2,5.9),H(6.6,9.9),H(7.6,10.9),H(8.55,11.5),H(8.1,13.4),H(7.25,15.2),H(7.45,18),H(3,22.2),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.6,12),H(-6.7,8.7),H(-6.1,4.6),H(-6,-4.6)],3),skull:V8([H(7,16.2),H(7.3,18.5),H(6,20.7),H(3,22.1),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.4,12.6),H(-4.6,12.2),H(-2.2,13.3),H(1,13.7),H(4.1,14.1),H(6.2,14.9)],4),brain:V8([H(6.55,16.3),H(6.75,18.4),H(5.5,20.1),H(2.8,21.4),H(-1.9,21.3),H(-5.8,18.8),H(-7.1,15.4),H(-6.7,13.1),H(-4.4,12.8),H(-2.1,13.9),H(1,14.3),H(4,14.7),H(5.9,15.4)],4),sulcus:V8([H(5.4,19.4),H(2.4,20.5),H(-1.4,20.4),H(-4.8,18.4)],4),eye:R$(H(6.5,15.4),1.1*X,0.95*X),eyeC:H(6.5,15.4),vertebrae:O,cords:[[$(-5.3,-4.6),$(-4.5,-4.6),$(-4.5,11.8),$(-5.1,12.4),$(-5.6,11.6)],[$(-5.1,-4.6),$(-4.7,-4.6),$(-4.72,11.4),$(-5.15,11.6)]],nasal:V8([H(0.3,11.2),H(1.1,10.25),H(2.7,10.75),H(4.6,10.85),H(6.4,10.65),H(7.6,10.85),H(8.45,11.3),H(8,12.2),H(6.7,13.4),H(4.4,13.9),H(1.8,13.6),H(0.2,12.6)],4),turbinates:[[3,11.45,2.1,0.32],[3.5,12.45,1.9,0.3],[4,13.3,1.45,0.22]].map(([B,p,j,y])=>R$(H(B,p),j*X,y*X,-0.04)),palOral:F,palNasal:F.map((B)=>({x:B.x,y:B.y+0.55*X})),jawLower:E,jawUpper:E.map((B)=>({x:B.x,y:B.y+0.75*X})),hyoid:R$(k,0.5*X,0.28*X,0.3,28),thyroid:[{x:R.x+0.75*X,y:R.y-1.6*X},{x:R.x+1.75*X,y:R.y-0.6*X},{x:R.x+1.95*X,y:R.y+1.2*X},{x:R.x+1.45*X,y:R.y+1.9*X},{x:R.x+1.15*X,y:R.y+1.1*X},{x:R.x+1.3*X,y:R.y-0.4*X},{x:R.x+0.75*X,y:R.y-1.6*X}],trachea:[[{x:R.x-0.65*X,y:R.y},{x:R.x-0.75*X,y:-4.8}],[{x:R.x+0.75*X,y:R.y},{x:R.x+0.95*X,y:-4.8}]],rings:V,outerWall:Q.outer.filter((B)=>B.y>R.y||B.x>0),glottisWall:[I,Q.outer.find((B)=>B.y>R.y)??I],fibres:_,folds:[[{x:R.x-0.62*X,y:R.y+0.05},{x:R.x-0.1,y:R.y+0.12*X},{x:R.x-0.62*X,y:R.y+0.32*X},{x:R.x-0.62*X,y:R.y+0.05}],[{x:R.x+0.72*X,y:R.y+0.05},{x:R.x+0.12,y:R.y+0.12*X},{x:R.x+0.72*X,y:R.y+0.32*X},{x:R.x+0.72*X,y:R.y+0.05}]],lowerTeeth:[...Q.lowerTeeth,W(6.8,6),W(6.4,6.2),Q.lowerTeeth[0]]}}class G7{pitch=0;yaw=0;toPitch=0;toYaw=0;next=2;update(J,Q){if(J>=this.next){let K=Math.random()<0.35;this.toPitch=K?0:(Math.random()*2-1)*0.55,this.toYaw=K?0:(Math.random()*2-1)*0.9,this.next=J+1.2+Math.random()*3.5}let Z=1-Math.exp(-Q*28);this.pitch+=(this.toPitch-this.pitch)*Z,this.yaw+=(this.toYaw-this.yaw)*Z}}function BY(J,Q,Z,K,$){if(Q.compact)return EE(J,Q,Z,K,$);let{w:W,h:X}=Q,Y=W-18,H=26;if(Z.length>=3)["F1","F2","F3"].forEach((O,L)=>{w9(J,O,Y-78,H+L*22,{size:12,color:e.amber,ls:0.12,alpha:0.75}),w9(J,String(Math.round(Z[L])),Y,H+L*22,{size:15,color:e.amber,align:"right",ls:0.08})}),w9(J,"HZ",Y,H+64,{size:10,color:e.amber,align:"right",alpha:0.6}),H+=110;for(let O of K)w9(J,O,Y,H,{size:10,color:CQ.secondary,align:"right",ls:0.14}),H+=16;if(!$.length)return;let{slotX:N,slotY:q}=Q,U=Math.max(60,(W-14-N)/2),G=Math.max(56,Math.min(112,(X-8-q)/2)),D=Math.max(22,Math.min(44,G*0.4,U*0.32));$.slice(0,4).forEach((O,L)=>{let F=N+L%2*U,E=q+Math.floor(L/2)*G;H7(J,F+6,E+4,4,O.color),w9(J,O.label.toUpperCase(),F+16,E+8,{size:11,color:O.color,ls:0.2,alpha:0.85});let R=E+18+D*1.1;if(O.ipa)U$(J,F+D*0.6,R,O.value,D*1.45,O.color);else w9(J,O.value.toUpperCase(),F,R,{size:O.value.length>3?D*0.82:D,color:O.color,weight:"m",ls:0.04});if(O.unit)w9(J,O.unit.toUpperCase(),O.ipa?F+D*1.5:F+(O.value.length>3?0:D*1.64),O.ipa||O.value.length<=3?R:R+18,{size:11,color:O.color,ls:0.16,alpha:0.7})})}function EE(J,Q,Z,K,$){let{w:W,h:X}=Q;if(Z.length>=3){let U=(W-24)/3;["F1","F2","F3"].forEach((G,D)=>{w9(J,G,12+D*U,18,{size:10,color:e.amber,ls:0.12,alpha:0.75}),w9(J,String(Math.round(Z[D])),12+D*U+26,18,{size:13,color:e.amber,ls:0.06})})}if(w9(J,K.slice(0,2).join("   "),12,36,{size:9,color:CQ.secondary,ls:0.12}),K.length>2)w9(J,K.slice(2).join("   "),12,50,{size:9,color:CQ.secondary,ls:0.12});let Y=$.slice(0,4);if(!Y.length)return;let H=(W-24)/Y.length,N=X-82,q=Math.max(16,Math.min(30,H*0.28));Y.forEach((U,G)=>{let D=12+G*H;H7(J,D+4,N,3,U.color),w9(J,U.label.toUpperCase(),D+12,N+3,{size:8,color:U.color,ls:0.14,alpha:0.85});let O=N+18+q;if(U.ipa)U$(J,D+q*0.5,O,U.value,q*1.4,U.color);else w9(J,U.value.toUpperCase(),D,O,{size:U.value.length>3?q*0.62:q,color:U.color,weight:"m",ls:0.02});if(U.unit)w9(J,U.unit.toUpperCase(),D,O+16,{size:8,color:U.color,ls:0.14,alpha:0.7})})}var jQ=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},C$=(J,Q,Z)=>Math.max(Q,Math.min(Z,J)),vQ=(J,Q,Z,K)=>J+(Q-J)*(1-Math.exp(-K/Z));class yQ{hz;damping;x=0;v=0;constructor(J,Q){this.hz=J;this.damping=Q}step(J,Q){let Z=2*Math.PI*this.hz,K=Math.max(1,Math.ceil(Q/0.008)),$=Q/K;for(let W=0;W<K;W++)this.v+=(Z*Z*(J-this.x)-2*this.damping*Z*this.v)*$,this.x+=this.v*$;return this.x}}function DE(J){let Q=J.t.pressureRms,Z=J.nPh+J.nOr-3;return Z>=J.nPh&&Z<Q.length?Q[Z]/980.665:0}class k6{puff=0;brow=0;lid=0;lookUp=0;content=0;nod=0;tilt=0;clock=0;cheeks=new yQ(6.5,0.32);nodSpring=new yQ(2.4,0.42);tiltSpring=new yQ(3.2,0.3);ref=NaN;fast=NaN;held=0;hold=0;nextBlink=1.5+Math.random()*2;blinkAt=-1;secondBlink=!1;lastStep=-1;update(J,Q){this.clock+=Q;let Z=J?.t,K=!!Z&&Z.voicing>0.45&&Z.gate>0.3&&Z.f0>30&&Z.outRms>0.004,$=J?jQ(1.5,7,DE(J)):0;this.puff=C$(this.cheeks.step($,Q),-0.35,1.25);let W=0,X=0;if(K){let D=Math.log2(Z.f0);if(!Number.isFinite(this.ref)||Math.abs(12*(D-this.ref))>14)this.ref=this.fast=D;if(this.ref=vQ(this.ref,D,5,Q),Math.abs(12*(D-this.fast))>2.5)this.fast=D,this.held=0;this.fast=vQ(this.fast,D,0.35,Q),this.held+=Q,W=12*(D-this.ref),X=12*(D-this.fast)}else this.held=0;let Y=(K?C$(W/6,-0.7,1):0)+0.3*this.content;this.brow=vQ(this.brow,Y,K?0.12:0.45,Q),this.lookUp=0.32*Math.max(0,this.brow);let H=K?0.92*jQ(0.9,1.9,this.held)*jQ(0.15,0.55,this.brow):0;if(this.hold=vQ(this.hold,H,H>this.hold?0.35:0.08,Q),this.clock>=this.nextBlink&&this.hold<0.2)this.blinkAt=this.clock,this.secondBlink=!this.secondBlink&&Math.random()<0.18,this.nextBlink=this.clock+(this.secondBlink?0.28:2+Math.random()*4.5);let N=(this.clock-this.blinkAt)/0.17,q=this.blinkAt>=0&&N<1?Math.sin(Math.PI*N)**0.7:0;this.lid=Math.max(q,this.hold,0.95*this.content);let U=J?.beatStep??-1;if(U>=0&&this.lastStep>=0&&U!==this.lastStep){let D=U<this.lastStep;if(D||Math.floor(U/4)!==Math.floor(this.lastStep/4))this.nodSpring.v-=D||Math.floor(U/16)!==Math.floor(this.lastStep/16)?1.3:0.8}this.lastStep=U,this.nod=this.nodSpring.step(0.13*this.brow,Q);let G=jQ(0.6,2,this.held)*0.07*Math.sin(this.clock*1.7);this.tilt=this.tiltSpring.step(G+0.05*C$(X,-1.5,1.5),Q)}}function bQ(J,Q,Z){let K=J.tract,$=I$(J,Z),W={x:(Q.upperLip[6].x+Q.lowerLip[6].x)/2+0.15,y:(Q.upperLip[6].y+Q.lowerLip[6].y)/2};return[{id:"tongue",pos:Q.tongueCenter,label:"Tongue body"},{id:"tip",pos:Q.tip,label:"Tongue tip"},{id:"jaw",pos:$(7.5,4.9),label:"Jaw"},{id:"lips",pos:W,label:"Lips"},{id:"velum",pos:Q.velum[Math.floor(Q.velum.length/2)],label:"Soft palate"},{id:"larynx",pos:{x:Q.glottis.x+1.2*K.scale,y:Q.glottis.y},label:"Larynx"}]}var FE=[0.09,0.06,0.03],g8={x0:-9.4,x1:M$.x1,y0:M$.y0,y1:23.5},B$=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)};function OE(J,Q,Z){let K=1.22*Q,$=1.08*Q,W=(O,L)=>{let F=[];for(let E=0;E<=14;E++){let R=O+(L-O)*E/14;F.push({x:J.x+K*Math.cos(R),y:J.y+$*Math.sin(R)})}return F},X=Math.PI/180,Y=Math.max(0,Z.brow),H=30*X+14*X*Y,N=-32*X,q=H+(N-H)*Z.lid,U=[],G=0.42*Q*Z.brow,D=0.3*Q*Math.max(0,-Z.brow);for(let O=0;O<=12;O++){let L=-1+O/6,F=(1+L)/2;U.push({x:J.x+0.1*Q+0.9*Q*L,y:J.y+1.4*Q+0.2*Q*(1-L*L)+G-D*F})}return[{pts:W(100*X,q),w:1.15,alpha:0.9},{pts:W(-78*X,N),w:1,alpha:0.75},{pts:U,w:1.4,alpha:0.85}]}function RE(J,Q,Z){if(Math.abs(Z)<0.01)return null;let K={x:(J.upperLip[6].x+J.lowerLip[6].x)/2,y:(J.upperLip[6].y+J.lowerLip[6].y)/2},$=0.6*Q*Z;return(W)=>{let X=Math.abs(W.y-K.y)/(2.6*Q);if(X>=1)return W;let Y=(1-X*X)**2*B$(0.03,0.45,X)*B$(K.x-1.2*Q,K.x-0.5*Q,W.x);return Y?{x:W.x+$*Y,y:W.y}:W}}class ME{particles=[];scale=20;ox=0;oy=0;w=0;h=0;compact=!1;sparkSeed=1;geo=null;echoes=[];clock=0;lastEcho=-1;gaze=new G7;face=new k6;constructor(){for(let J=0;J<170;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN})}resize(J,Q){this.w=J,this.h=Q,this.compact=J<560;let Z=12,K=this.compact?62:10,$=this.compact?92:8;this.scale=Math.max(1,Math.min((J-2*Z)/(g8.x1-g8.x0),(Q-K-$)/(g8.y1-g8.y0)));let W=J-2*Z-(g8.x1-g8.x0)*this.scale;this.ox=Z+(this.compact?W/2:Math.min(W/2,Math.max(0,W-220)))-g8.x0*this.scale,this.oy=K+Math.max(0,(Q-K-$-(g8.y1-g8.y0)*this.scale)/2)+g8.y1*this.scale;for(let X of this.particles)X.px=NaN}X(J){return this.ox+J.x*this.scale}Y(J){return this.oy-J.y*this.scale}P(J){return[this.ox+J.x*this.scale,this.oy-J.y*this.scale]}toBody(J,Q){return{x:(J-this.ox)/this.scale,y:(this.oy-Q)/this.scale}}get pxPerCm(){return this.scale}handles(J,Q,Z){return bQ(J,Q,Z)}geometry(J,Q,Z){if(this.geo&&this.geo.f===Q&&this.geo.model===J)return this.geo;return this.geo=N7(J,Q,Z)}lens(J,Q,Z){let K=this.gaze;K.update(this.clock,Z);let $=0.85*Q*Math.cos(K.yaw),W=K.pitch+this.face.lookUp,X=Math.cos(W),Y=Math.sin(W),H={x:J.x+$*X,y:J.y+$*Y},N=(0.18+0.2*Math.abs(Math.sin(K.yaw)))*Q,q=0.42*Q,U=[];for(let G=0;G<=20;G++){let D=G/20*Math.PI*2,O=Math.cos(D)*N,L=Math.sin(D)*q;U.push({x:H.x+O*X-L*Y,y:H.y+O*Y+L*X})}return U}draw(J,Q,Z,K,$,W,X){this.clock+=X.dt;let Y=this.geometry(Q,Z,K),H=(F)=>F.map((E)=>this.P(E)),N=(F,E,R,k={})=>gJ(J,H(F),E,R,k);N(Y.inset,e.blueDim,0.9,{alpha:0.9}),N(Y.skull,e.blueDim,0.9,{close:!0}),N(Y.brain,e.blueMid,1.1,{close:!0}),N(Y.sulcus,e.blueDim,0.9),N(Y.eye,e.blueMid,1.1);let q=Q.tract.scale,U=RE(Z,q,this.face.puff),G=(F)=>U?F.map(U):F;N(this.lens(Y.eyeC,q,X.dt),e.blueDim,0.9,{alpha:1-B$(0.45,0.9,this.face.lid)});for(let F of OE(Y.eyeC,q,this.face))N(F.pts,e.blue,F.w,{alpha:F.alpha});for(let F of Y.vertebrae)N(F,e.blueDim,1);N(Y.cords[0],e.blueDim,0.8,{alpha:0.8}),N(Y.cords[1],e.blueDim,0.8,{alpha:0.6}),N(Y.nasal,e.blueMid,1,{close:!0});for(let F of Y.turbinates)N(F,e.blueDim,0.9);N(Y.palOral,e.blueMid,1.1),N(Y.palNasal,e.blueMid,1.1),N(Y.hyoid,e.blueDim,1),N(Y.thyroid,e.blueDim,1);for(let F of Y.trachea)N(F,e.blueMid,1);for(let F of Y.rings)N(F,e.blueDim,0.9);if(W.pressure&&$)this.drawPressure(J,Q,Z,$);else if(W.grid)for(let F of Z.grid)Y7(J,this.X(F.inner),this.Y(F.inner),this.X(F.outer),this.Y(F.outer),e.blueDim,0.9,{alpha:0.7});if(W.particles&&$)this.drawParticles(J,Q,Z,$,X.dt);if($&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock,this.echoes.push({t:this.clock,tongue:Z.tongue.slice(),jaw:Y.jawLower,upperLip:pJ(G(Z.upperLip).map((F)=>[F.x,F.y])),lowerLip:pJ(G(Z.lowerLip).map((F)=>[F.x,F.y]))});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if($)FE.forEach((F,E)=>{let R=this.nearestEcho(this.clock-F);if(!R)return;let k=0.1+0.07*E;N(R.tongue,e.green,1,{alpha:k}),N(R.jaw,e.red,1,{alpha:k*0.9});let V=(A)=>gJ(J,A.map(([P,_])=>[this.ox+P*this.scale,this.oy-_*this.scale]),e.pink,1,{alpha:k*0.9});V(R.upperLip),V(R.lowerLip)});N(G(Y.skinLower),e.blue,1.7,{hot:!0}),N(G(Y.skinUpper),e.blue,1.7,{hot:!0}),N(Y.outerWall,e.blue,1.4,{hot:!0}),N(Z.inner,e.blue,1.3,{alpha:0.9}),N(Y.glottisWall,e.blue,1.2,{alpha:0.8}),N(Z.epiglottis.slice(0,3),e.blue,2.2,{alpha:0.85}),N(Z.upperTeeth,e.blueMid,1.1,{close:!0}),N(Y.lowerTeeth,e.blueMid,1.1);for(let F of Y.folds)N(F,e.blue,1);let D=H(Z.tongue);J.save();let O=new Path2D;D.forEach(([F,E],R)=>R?O.lineTo(F,E):O.moveTo(F,E)),O.closePath(),J.clip(O);for(let F of Y.fibres)N(F,e.green,0.8,{alpha:0.32});J.restore(),gJ(J,D,e.green,1.6,{hot:!0}),N(Y.jawLower,e.red,1.5,{hot:!0}),N(Y.jawUpper,e.red,1,{alpha:0.45});let L=(F,E)=>pJ(F.map((R)=>this.P(R)),E);if(gJ(J,L(G(Z.upperLip),2),e.pink,1.5,{hot:!0}),gJ(J,L(G(Z.lowerLip),2),e.pink,1.5,{hot:!0}),gJ(J,L(Z.velum,3),e.white,1.25,{alpha:0.92}),$)this.drawTurbulence(J,Q,Z,$);if(W.calipers)this.drawCalipers(J,Z);this.drawHandles(J,Q,Z,K,X.hover,X.drag),this.drawReadouts(J,X.formants,X.info,X.slots)}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}gridPoint(J,Q,Z){let K=J.grid;if(K.length<2)return null;if(Q<=K[0].s){let G=Math.max(0,Q/Math.max(0.01,K[0].s)),D=J.glottis,O={x:(K[0].inner.x+K[0].outer.x)/2,y:(K[0].inner.y+K[0].outer.y)/2},L=0.35;return{x:D.x+(O.x-D.x)*G+Z*0.35*0.5,y:D.y+(O.y-D.y)*G}}let $=0,W=K.length-1;if(Q>=K[W].s)return null;while(W-$>1){let G=$+W>>1;if(K[G].s<=Q)$=G;else W=G}let X=(Q-K[$].s)/Math.max(0.000001,K[W].s-K[$].s),Y=K[$].inner.x+(K[W].inner.x-K[$].inner.x)*X,H=K[$].inner.y+(K[W].inner.y-K[$].inner.y)*X,N=K[$].outer.x+(K[W].outer.x-K[$].outer.x)*X,q=K[$].outer.y+(K[W].outer.y-K[$].outer.y)*X,U=0.5+0.5*Z*0.82;return{x:Y+(N-Y)*U,y:H+(q-H)*U}}nodeValueAtS(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}drawPressure(J,Q,Z,K){let $=K.t,W=Q.nodeS($.phLen,$.orLen);if(W.length!==$.pressureRms.length)return;for(let X of Z.grid){let Y=Math.pow(zQ(this.nodeValueAtS($.pressureRms,W,X.s)),0.85);Y7(J,this.X(X.inner),this.Y(X.inner),this.X(X.outer),this.Y(X.outer),AQ(Y),1.15,{alpha:0.35+0.65*Y})}}drawParticles(J,Q,Z,K,$){let W=K.t,X=Q.nodeS(W.phLen,W.orLen),Y=new Float32Array(W.phAreas.length+W.orAreas.length);Y.set(W.phAreas,0),Y.set(W.orAreas,W.phAreas.length);let H=Z.lipS,N=[new Path2D,new Path2D,new Path2D];for(let q of this.particles){let U=this.nodeValueAtS(W.flow,X,q.s),G=Math.max(0.05,this.nodeValueAtS(Y,X,q.s)),D=U/G,O=Math.sign(D)*2.2*Math.log1p(Math.abs(D)/30);if(q.s+=O*$,q.life-=$*0.25,q.s>H||q.s<0||q.life<=0||Math.abs(D)<3){if(!(Math.abs(D)<3&&q.life>0)){q.s=Math.random()*0.8,q.u=Math.random()*2-1,q.life=0.6+Math.random()*0.8,q.px=NaN;continue}}let L=this.gridPoint(Z,q.s,q.u);if(!L)continue;let F=this.X(L),E=this.Y(L);if(Number.isFinite(q.px)){let R=Math.min(2,Math.floor(Math.min(1,Math.abs(O)/6)*Math.min(1,q.life)*3));N[R].moveTo(q.px,q.py),N[R].lineTo(F,E)}q.px=F,q.py=E}N.forEach((q,U)=>z6(J,q,"#ffe2a8",1.1,{alpha:0.16+0.2*U}))}drawTurbulence(J,Q,Z,K){let $=K.t;if(!($.noiseLevel>1)||$.noiseNode<0)return;let W=Q.branchS($.noiseNode,$.phLen,$.orLen);if(W<0)return;let X=Math.min(1,Math.log10($.noiseLevel)/3.2);if(X<=0.05)return;let Y=this.sparkSeed=this.sparkSeed*16807%2147483647,H=()=>(Y=Y*16807%2147483647)/2147483647;for(let N=0;N<30;N++){let q=this.gridPoint(Z,W+0.2+H()*1.2,H()*2-1);if(!q)continue;H7(J,this.X(q),this.Y(q),0.6+H()*1.4,"#f4fbff",0.15+0.7*X*H())}}drawCalipers(J,Q){let Z=-1,K=1/0;for(let E=2;E<Q.grid.length-1;E++)if(Q.grid[E].area<K)K=Q.grid[E].area,Z=E;if(Z<0||K>=1.2)return;let $=Q.grid[Z],[W,X]=this.P($.inner),[Y,H]=this.P($.outer);Y7(J,W,X,Y,H,e.white,1.4,{hot:!0});let N=-(H-X),q=Y-W,U=Math.hypot(N,q)||1;for(let[E,R]of[[W,X],[Y,H]])Y7(J,E-N/U*4,R-q/U*4,E+N/U*4,R+q/U*4,e.white,1.2);let G=Q.grid[Q.grid.length-1],O=Math.max(this.P(G.inner)[0],this.P(G.outer)[0])-Math.max(W,Y)<1.5*this.pxPerCm,L=O?Math.min(W,Y)-10:Math.max(W,Y)+10,F=Math.min(X,H)-4;w9(J,K<=0.0005?"CLOSED":`${K.toFixed(2)} CM²`,L,F,{size:11,color:e.white,ls:0.12,align:O?"right":"left"})}drawHandles(J,Q,Z,K,$,W){let X={tongue:e.green,jaw:e.red,lips:e.pink,velum:e.white,tip:e.blueMid,larynx:e.blueMid},Y={tongue:8,jaw:7,lips:7,velum:6,tip:5,larynx:5};for(let H of this.handles(Q,Z,K)){let N=this.X(H.pos),q=this.Y(H.pos),U=H.id===W||H.id===$;if(FY(J,N,q,X[H.id],Y[H.id]+(U?2:0),U?1:0.9),U)DY(J,N,q,28,X[H.id],1,{alpha:0.75}),w9(J,H.label.toUpperCase(),N+32,q-18,{size:12,color:X[H.id],ls:0.18})}}drawReadouts(J,Q,Z,K){BY(J,{w:this.w,h:this.h,compact:this.compact,slotX:this.X({x:3.35,y:0}),slotY:this.Y({x:0,y:2.05})},Q,Z,K)}}var p8=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},AY=(J)=>Math.max(0,Math.min(1,J));function JJ(J,Q){if(Q<=J[0][0])return J[0][1];for(let Z=1;Z<J.length;Z++)if(Q<=J[Z][0]){let[K,$]=J[Z-1],[W,X]=J[Z];return $+(X-$)*(Q-K)/(W-K)}return J[J.length-1][1]}var LE=[[-4.6,5.3],[0,5.4],[2.5,5.5],[4.5,5.25],[6.5,5.5],[8.5,6.1],[10.5,6.6],[12.5,7],[15,7.3],[17.5,7.65],[19.5,7.4],[21,6.5],[22.2,4.6],[23,1]],IE=[[3.4,5.9],[4.6,6.2],[5.7,6.15],[6.5,6.2],[8,6.35],[9.5,6.35],[10.6,6.55],[11.6,6.75],[12.6,6.9],[13.9,7.15],[15,7.45],[16.1,7.95]],VE=[[3.4,2],[4.6,2.2],[5.7,2.4],[6.5,2.6],[10.6,1.7],[11,1.75],[11.65,1.2],[12.6,0.95],[13.9,0.75],[15,0.9],[16.1,1.6]],CE=[[-4.6,0.5],[3,0.5],[6,0.42],[12,0.42],[16,0.45],[23,0.45]],BE=[[-3,8.5],[-1.6,8],[-0.6,6.4],[1.2,4.6],[3.5,3.6],[5.3,3],[7.3,3.3],[8.6,4.4]],AE=[[6,-0.6],[7.4,-0.8],[9.6,-1.9],[10.6,-2.5],[12,-2.6]],zE=[[12.3,4],[13,5.6],[14.5,6.4],[16.5,6.9],[18.5,6.6],[20,5.4],[21,3.6],[21.45,0.5]],PE=[[0,1.5],[0.15,1.9],[0.35,2.35],[0.6,2.45],[0.8,2.2],[0.92,1.5],[1,0.55]],kE=[[0,1.3],[0.35,1.1],[0.7,0.9],[0.9,0.55],[1,0.25]],_E=[[0.85,1.05,0.7],[0.68,0.95,0.65],[0.78,1.1,0.8],[0.7,0.85,0.9],[0.68,0.8,0.9],[1,0.75,1.1],[0.92,0.7,1.05]],TE=[[0.54,0.9,0.6],[0.6,0.92,0.62],[0.7,1,0.75],[0.7,0.85,0.8],[0.72,0.8,0.85],[1.1,0.72,1.05],[1.05,0.7,1]],wE=3,dJ=2.2,TY=(J)=>Math.abs(J)<1?(1-J*J)**2:0;function hQ(J,Q,Z=!1){let K=Math.min(1,Math.abs(Q)/J.W),$=Math.pow(1-Math.pow(K,J.pf),1/J.pf);return J.xw+(J.Fs-J.xw)*$+(Z?0:J.E*TY(Q/J.wf))}function SE(J,Q){let Z=Q>J.xw,K=Z?(Q-J.xw)/Math.max(0.000001,J.Fs-J.xw):(J.xw-Q)/Math.max(0.000001,J.xw-J.Bk),$=Z?J.pf:dJ;return J.W*Math.pow(Math.max(0,1-Math.pow(Math.min(1,K),$)),1/$)}function jE(J,Q,Z){Z.length=0;let K=12,$=10,W=16;for(let Y=0;Y<K;Y++){let H=Math.PI-Y/K*(Math.PI/2);Z.push(J.xw-(J.xw-J.Bk)*Math.pow(Math.abs(Math.cos(H)),2/dJ),J.W*Math.pow(Math.sin(H),2/dJ))}let X=Math.asin(Math.min(1,Math.pow(Q/J.W,J.pf/2)));for(let Y=0;Y<$;Y++){let H=Math.PI/2-Y/$*(Math.PI/2-X),N=J.W*Math.pow(Math.sin(H),2/J.pf);Z.push(J.xw+(J.Fs-J.xw)*Math.pow(Math.cos(H),2/J.pf)+J.E*TY(N/J.wf),N)}for(let Y=0;Y<=W;Y++){let H=Q*(1-Y/W);Z.push(hQ(J,H),H)}}class z${dy;rows=[];y0;y1;constructor(J,Q,Z){this.dy=Q;let K=1/0,$=-1/0;for(let W of J)K=Math.min(K,W.y),$=Math.max($,W.y);this.y0=K,this.y1=$;for(let W=K;W<=$;W+=Q){let X=-1/0,Y=1/0;for(let H=0;H<J.length-1;H++){let N=J[H],q=J[H+1];if(N.y>W===q.y>W)continue;let U=N.x+(q.x-N.x)*(W-N.y)/(q.y-N.y);X=Math.max(X,U),Y=Math.min(Y,U)}this.rows.push(X>Y?Z(W,X,Y):null)}}at(J){let Q=(J-this.y0)/this.dy,Z=Math.floor(Q);if(Z<0||Z>=this.rows.length-1)return null;let K=this.rows[Z],$=this.rows[Z+1];if(!K||!$)return K??$;let W=Q-Z,X=(Y,H)=>Y+(H-Y)*W;return{F:X(K.F,$.F),Bk:X(K.Bk,$.Bk),Fs:X(K.Fs,$.Fs),W:X(K.W,$.W),xw:X(K.xw,$.xw),E:X(K.E,$.E),wf:X(K.wf,$.wf),pf:X(K.pf,$.pf)}}}class RJ{lines=[];cur=[];p(J,Q,Z){return this.cur.push(J,Q,Z),this}end(J=!1){if(J&&this.cur.length>=3)this.cur.push(this.cur[0],this.cur[1],this.cur[2]);if(this.cur.length>=6)this.lines.push(new Float32Array(this.cur));this.cur=[]}ellipse(J,Q,Z,K=24,$=0,W=Math.PI*2){for(let X=0;X<=K;X++){let Y=$+(W-$)*X/K,H=Math.cos(Y),N=Math.sin(Y);this.p(J[0]+Q[0]*H+Z[0]*N,J[1]+Q[1]*H+Z[1]*N,J[2]+Q[2]*H+Z[2]*N)}this.end()}}function wY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=1-p8(7.6,9.1,X),H=JJ(BE,$),N=p8(H-1.5,H+0.15,X),q=JJ(AE,X),U=p8(q-0.7,q+0.9,$);return Y*N*U}var vE=1.7,yE=0.55;function SY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=(($-5.2)/2.3)**2+((X-8.3)/2.4)**2;return Y<1?(1-Y)**2:0}function zY(J,Q,Z,K){if(Q===0||K===0)return[0,0];let $=Q*K*J;return[yE*$,Math.sign(Z)*vE*$*p8(0.4*J,2.6*J,Math.abs(Z))]}function bE(J,Q,Z){let K=Q.length;if(Q.every(Boolean))return[Z?[...J,J[0],J[1],J[2]]:J];let $=[],W=Z?Q.indexOf(!1)+1:0,X=[];for(let Y=0;Y<K;Y++){let H=(W+Y)%K;if(Q[H])X.push(J[3*H],J[3*H+1],J[3*H+2]);else{if(X.length>=6)$.push(X);X=[]}}if(X.length>=6)$.push(X);return $}function fE(J,Q){let Z=[0];for(let X=1;X<J.length;X++)Z.push(Z[X-1]+Math.hypot(J[X].x-J[X-1].x,J[X].y-J[X-1].y));let K=Z[Z.length-1],$=[],W=0;for(let X=0;X<Q;X++){let Y=K*X/(Q-1);while(W<J.length-2&&Z[W+1]<Y)W++;let H=(Y-Z[W])/Math.max(0.000000001,Z[W+1]-Z[W]);$.push({x:J[W].x+(J[W+1].x-J[W].x)*H,y:J[W].y+(J[W+1].y-J[W].y)*H})}return $}function fQ(J,Q,Z){let K=Z*Q[Q.length-1],$=0;while($<J.length-2&&Q[$+1]<K)$++;let W=(K-Q[$])/Math.max(0.000000001,Q[$+1]-Q[$]);return{x:J[$].x+(J[$+1].x-J[$].x)*W,y:J[$].y+(J[$+1].y-J[$].y)*W}}var P$=(J)=>{let Q=[0];for(let Z=1;Z<J.length;Z++)Q.push(Q[Z-1]+Math.hypot(J[Z].x-J[Z-1].x,J[Z].y-J[Z-1].y));return Q};function hE(J){let Q=J.tract,Z=Q.scale,K=J.bodyParams.pharynx,$=V$(J),W=(S)=>$(0,S).y,X=(S)=>S/Z>=7?S/Z:7-(7-S/Z)/K,Y=(S,g)=>Q.P(S,g),H={...VQ,jaw:0,lipAp:0,labiodental:0},N=J.frame(H),q=N7(J,N,H),U=[...q.skinLower,...q.skinUpper],G=new z$(U,0.08*Z,(S,g,d)=>{let a=X(S),Q0=a>=3.4&&a<=16.1?JJ(IE,a)*Z:1/0,r=Math.min(g,Q0),z0=2.2+0.4*p8(2.5,3.5,a)*(1-p8(17,18.5,a));return{F:g,Bk:d,Fs:r,W:JJ(LE,a)*Z,xw:d+(r-d)*JJ(CE,a),E:g-r,wf:JJ(VE,a)*Z,pf:z0}}),D=Y(-2.5,10.5),O=N.upperLip[N.upperLip.length-1].y,L=N.lowerLip[N.lowerLip.length-1].y,F=wE*Z,E=(S,g,d,a)=>g>L&&g<O&&Math.abs(d)<F&&S>a.xw,R=[],k=(S,g,d)=>{for(let a of bE(S,g,d)){let Q0=a.length/3,r=new Float32Array(Q0),z0=new Float32Array(Q0);for(let q0=0;q0<Q0;q0++)r[q0]=wY(Z,K,a[3*q0],a[3*q0+1]),z0[q0]=SY(Z,K,a[3*q0],a[3*q0+1]);R.push({a:new Float32Array(a),w:r,c:z0})}},V=[],A=1.4*Z;for(let S=G.y0+0.25*Z;S<G.y1-0.2*Z;S+=A){let g=G.at(S);if(!g||g.W<0.2*Z)continue;jE(g,Math.min(0.6*g.W,3.6*Z),V);let d=[],a=[],Q0=V.length/2;for(let r=0;r<Q0;r++)d.push(V[2*r],S,V[2*r+1]);for(let r=Q0-2;r>0;r--)d.push(V[2*r],S,-V[2*r+1]);for(let r=0;r<d.length/3;r++)a.push(!E(d[3*r],S,d[3*r+2],g));k(d,a,!0)}let P=0.3*Z;for(let S of[-3.6,-2.4,-1.2,1.2,2.4,3.6].map((g)=>g*Z)){let g=[],d=[];for(let a=G.y0+0.1*Z;a<=G.y1;a+=P){let Q0=G.at(a);if(!Q0||Math.abs(S)>0.97*Q0.W){k(g,d,!1),g=[],d=[];continue}let r=hQ(Q0,S);g.push(r,a,S),d.push(!E(r,a,S,Q0))}k(g,d,!1)}for(let S of[0.5,0.8].map((g)=>g*Math.PI))for(let g of[1,-1]){let d=[],a=[];for(let Q0=G.y0+0.1*Z;Q0<=G.y1;Q0+=P){let r=G.at(Q0);if(!r||r.W<0.2*Z)continue;d.push(r.xw-(r.xw-r.Bk)*Math.pow(Math.abs(Math.cos(S)),2/dJ),Q0,g*r.W*Math.pow(Math.sin(S),2/dJ)),a.push(!0)}k(d,a,!1)}let _=[],I=[],B=(S,g,d,a,Q0,r=!1)=>{let z0=new RJ;Q0(z0),S.push({lines:z0.lines,color:g,width:d,alpha:a,hot:r})},p=(S,g,d,a)=>{let Q0=V8(g.map(([r,z0])=>$(r,z0)),4);Q0.forEach((r,z0)=>{let q0=G.at(r.y);S.p(r.x,r.y,a*((q0?SE(q0,r.x):0)+d(z0,Q0.length)))}),S.end()};B(_,e.blueDim,1.05,0.9,(S)=>{for(let g of[1,-1]){p(S,[[-2.55,13.4],[-2.85,14.75],[-3.65,15.45],[-4.6,15.25],[-5.2,14.25],[-5.4,12.8],[-5.05,11.3],[-4.55,10.2],[-3.95,9.55],[-3.35,9.65],[-3,10.35]],(a,Q0)=>(0.25+1.2*Math.sin(Math.PI*a/(Q0-1))**1.5)*Z,g),p(S,[[-3.15,14.3],[-3.95,14.45],[-4.55,13.5],[-4.6,12.1],[-4.15,11.05]],()=>0.55*Z,g),p(S,[[-2.7,11.2],[-2.55,11.85],[-2.75,12.35]],()=>0.35*Z,g);let d=[];for(let a=0;a<=16;a++)d.push([-3.5+0.6*Math.cos(a/16*Math.PI*2),12+0.85*Math.sin(a/16*Math.PI*2)]);p(S,d,()=>0.12*Z,g)}}),B(_,e.blueMid,1,0.8,(S)=>{for(let g of[1,-1]){for(let a=14.6;a>=11.3;a-=0.15){let Q0=W(a),r=G.at(Q0);if(!r)continue;let z0=g*(0.3+1.05*(14.6-a)/3.3)*Z;S.p(hQ(r,z0),Q0,z0)}S.end();let d=[[7.95,11.05,0.95],[7.4,11.15,1.45],[7.25,11.6,1.55],[7.55,12.1,1.35],[8.2,12.15,1]];for(let[a,Q0,r]of d)S.p(a*Z,W(Q0),g*r*Z);S.end()}}),B(_,e.blueMid,1,0.9,(S)=>{for(let g of[1,-1])S.ellipse([8.05*Z,W(10.98),g*0.62*Z],[0.42*Z,0.04*Z,0],[0,0,0.26*Z],16)});let j=new z$(q.brain,0.08*Z,(S,g,d)=>({F:g,Bk:d,Fs:g,W:JJ(zE,X(S))*Z,xw:d+(g-d)*0.48,E:0,wf:1,pf:2.3}));B(_,e.blueMid,0.85,0.32,(S)=>{for(let g=j.y0+0.6*Z;g<j.y1-0.15*Z;g+=1.5*Z){let d=j.at(g);if(!d)continue;for(let a=0;a<=48;a++){let Q0=a/48*Math.PI*2,r=Math.cos(Q0),z0=Math.sin(Q0),q0=r>=0?d.pf:dJ,y0=r>=0?d.xw+(d.Fs-d.xw)*Math.pow(r,2/q0):d.xw-(d.xw-d.Bk)*Math.pow(-r,2/q0);S.p(y0,g,Math.sign(z0)*d.W*Math.pow(Math.abs(z0),2/q0))}S.end()}for(let g of[0.3,0.7].map((d)=>d*Math.PI))for(let d of[1,-1]){for(let a=j.y0;a<=j.y1;a+=0.3*Z){let Q0=j.at(a);if(!Q0)continue;let r=Math.cos(g),z0=Math.sin(g),q0=r>=0?Q0.pf:dJ,y0=r>=0?Q0.xw+(Q0.Fs-Q0.xw)*Math.pow(r,2/q0):Q0.xw-(Q0.xw-Q0.Bk)*Math.pow(-r,2/q0);S.p(y0,a,d*Q0.W*Math.pow(z0,2/q0))}S.end()}}),B(_,e.blueDim,0.9,0.6,(S)=>{for(let g=0;g<9;g++){let d=-4.4+g*1.75;if(d>10.5)break;let a=SQ(d)-2.25,Q0=Y(a,d+0.08),r=Y(a,d+1.32),z0=Y(a+0.8,0).x,q0=0.8*Z,y0=1.05*Z;for(let i0 of[Q0.y,r.y])S.ellipse([z0,i0,0],[q0,0,0],[0,0,y0],24);for(let i0 of[0.25,0.75,1.25,1.75].map((r0)=>r0*Math.PI))S.p(z0+q0*Math.cos(i0),Q0.y,y0*Math.sin(i0)).p(z0+q0*Math.cos(i0),r.y,y0*Math.sin(i0)).end();let m0=(Q0.y+r.y)/2,h0=z0-2.15*Z;S.ellipse([h0,m0,0],[0.72*Z,0,0],[0,0,0.88*Z],20);for(let i0 of[1,-1])S.p(z0-0.7*Z,m0,i0*0.55*Z).p(h0+0.45*Z,m0,i0*0.72*Z).end(),S.p(z0-0.5*Z,m0,i0*0.95*Z).p(z0-0.9*Z,m0-0.1*Z,i0*2.3*Z).end();S.p(h0-0.72*Z,m0,0).p(h0-1.8*Z,m0-0.55*Z,0).end()}}),B(_,e.blueDim,0.85,0.5,(S)=>{let g=Y(-4.9,0).x;for(let d=-4.4;d<=11;d+=1.75)S.ellipse([g,Y(0,d).y,0],[0.42*Z,0,0],[0,0,0.6*Z],16);for(let d of[1,-1])S.p(g,Y(0,-4.6).y,d*0.6*Z).p(g,Y(0,11.4).y,d*0.6*Z).end()}),B(_,e.blueDim,0.9,0.7,(S)=>{for(let g of[1,-1]){for(let d of q.nasal)S.p(d.x,d.y,g*1.2*Z);S.end(!0);for(let d of q.turbinates){for(let a of d)S.p(a.x,a.y,g*0.95*Z);S.end()}}});let y=(S,g,d)=>{let a=[];for(let Q0=0;Q0<=60;Q0++){let r=d*Q0/60;a.push({x:S-g*Math.pow(r/d,1.85),y:r})}return{pts:a,cum:P$(a)}},m=(S,g,d,a,Q0,r,z0)=>{let q0=y(g,d,a),y0=q0.cum[q0.cum.length-1],m0=Q0.reduce((i0,r0)=>i0+r0[0],0),h0=0.97*y0/(m0*Z);for(let i0 of[1,-1]){let r0=0;for(let[I9,F9,O9]of Q0){let v=I9*Z*h0,A9=F9*Z,J9=O9*Z,N9=(r0+v/2)/y0;r0+=v;let z=fQ(q0.pts,q0.cum,N9),M=fQ(q0.pts,q0.cum,Math.min(1,N9+0.01)),b=fQ(q0.pts,q0.cum,Math.max(0,N9-0.01)),s=M.x-b.x,W0=M.y-b.y,U0=Math.hypot(s,W0)||1;s/=U0,W0/=U0;let E0=W0,t=-s,K0=r(z.y/a),O0=(A0,N0,H0=0)=>[z.x+s*A0-E0*H0,K0+z0*N0,i0*(z.y+W0*A0-t*H0)];for(let[A0,N0]of[[-0.5,0],[-0.5,0.55],[-0.38,1],[0,1.08],[0.38,1],[0.5,0.55],[0.5,0]])S.p(...O0(A0*v,N0*A9));S.end(!0);for(let[A0,N0]of[[-0.45,0.1],[0.45,0.1],[0.45,0.9],[-0.45,0.9]])S.p(...O0(A0*v,0,N0*J9));S.end(!0)}}},T=Y(7.3,0).x,w=4.2*Z,n=2.65*Z;B(_,e.blue,1,0.8,(S)=>m(S,T,w,n,_E,(g)=>(7.95+0.3*g*g)*Z,1)),B(_,e.blueMid,1,0.6,(S)=>{for(let g of[0,2,4,5,6,7]){let d=q.palOral[g],a=Math.max(0,(T-d.x)/w),Q0=(a>=1?n:n*Math.pow(a,0.5405405405405405))-0.45*Z,r=(8.95+0.3*Math.min(1,Q0/n)**2)*Z;if(Q0<0.6*Z||d.y<r+0.15*Z)continue;for(let z0=0;z0<=20;z0++){let q0=Q0*(z0/10-1);S.p(d.x,r+(d.y-r)*Math.pow(1-Math.pow(Math.abs(q0)/Q0,2.4),0.7),q0)}S.end()}});let u=(S,g,d)=>{let a=Y(S,g);return[a.x,a.y,d*Z]},$0=(S,g,d)=>{let a=g.map(([Q0,r,z0])=>u(Q0,r,d*z0));for(let Q0=0;Q0<a.length-1;Q0++){let r=a[Math.max(0,Q0-1)],z0=a[Q0],q0=a[Q0+1],y0=a[Math.min(a.length-1,Q0+2)];for(let m0=0;m0<4;m0++){let h0=m0/4,i0=h0*h0,r0=i0*h0,I9=(F9,O9,v,A9)=>0.5*(2*O9+(-F9+v)*h0+(2*F9-5*O9+4*v-A9)*i0+(-F9+3*O9-3*v+A9)*r0);S.p(I9(r[0],z0[0],q0[0],y0[0]),I9(r[1],z0[1],q0[1],y0[1]),I9(r[2],z0[2],q0[2],y0[2]))}}S.p(...a[a.length-1]),S.end()};B(I,e.red,1.25,0.9,(S)=>{for(let g of[1,-1]){$0(S,[[6.4,4.6,0],[5.6,4.45,1.5],[4.5,4.4,2.6],[3.2,4.5,3.5],[1.8,4.85,4.15],[0.4,5.6,4.6],[-0.55,6.6,4.85],[-0.9,7.6,4.9],[-1.45,8.9,4.95],[-1.9,9.7,5],[-2.15,10.2,5]],g),$0(S,[[-1.8,10.25,4.95],[-0.9,9.4,4.85],[0.15,10.1,4.6],[0.6,8.9,4.35],[1.1,7.7,4],[1.9,7.2,3.55]],g);let d=u(-2.5,10.5,g*4.95);S.ellipse(d,[0.45*Z,0,0],[0,0.12*Z,0.85*Z],16)}}),B(I,e.red,1,0.55,(S)=>{for(let g of[1,-1]){$0(S,[[1.9,7.2,3.55],[3,7.15,3.15],[4.3,7.1,2.6],[5.4,7.05,1.85],[6.2,7.05,1.05],[6.72,7.15,0]],g);for(let[d,a,Q0,r,z0]of[[3,3.15,3.2,4.5,3.5],[5.4,1.85,5.6,4.45,1.5],[1.9,3.55,1.8,4.85,4.15]])$0(S,[[d,7.15,a],[(d+Q0)/2,5.9,(a+z0)/2+0.15],[Q0,r,z0]],g)}});let i=new RJ;$0(i,[[7.25,6.75,0],[7.4,5.4,0],[6.4,4.6,0],[5.6,5,0],[5.9,6.2,0],[6.45,6.55,0]],1);let Z0=i.lines[0],X0=Y(6.98,0).x,w0=4*Z,T0=2.5*Z;B(I,e.blue,1,0.8,(S)=>m(S,X0,w0,T0,TE,(g)=>(7.75+0.45*Math.pow(g,1.5))*Z,-1));let n0=$(6.15,15.35),u0=new x(0.3*Z,(G.y0+G.y1)/2,0);return{model:J,head:G,condyle:D,lipHalf:F,center:u0,shell:R,fixed:_,jaw:I,chin:Z0,eyes:[[n0.x,n0.y,3.15*Z],[n0.x,n0.y,-3.15*Z]],eyeR:1.05*Z}}var xE=[0.09,0.06,0.03];class k${scene=new ZQ;camera=new l9(24,1,5,2000);beams=new O$;rest=null;w=1;h=1;compact=!1;centred=!1;facing=1;clock=0;gaze=new G7;face=new k6;eye=new x;turn=new t9;euler=new _8;strobe=0;tmp=new F$;particles=[];echoes=[];lastEcho=-1;sparkSeed=7;k=1;ring={n:0,s:new Float64Array(80),cx:new Float64Array(80),cy:new Float64Array(80),ux:new Float64Array(80),uy:new Float64Array(80),a:new Float64Array(80),b:new Float64Array(80)};v3=new x;caliper=null;constructor(){this.scene.add(this.beams.group),this.scene.fog=new t6(0,50,100);for(let J=0;J<200;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,v:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN,pz:NaN})}dispose(){this.beams.dispose()}resetMotion(){this.face=new k6,this.echoes=[],this.lastEcho=-1,this.strobe=0;for(let J of this.particles)J.px=NaN}resize(J,Q){if(this.w=J,this.h=Q,this.compact=J<560,this.camera.aspect=J/Q,this.compact||this.centred)this.camera.clearViewOffset();else this.camera.setViewOffset(J,Q,0.1*J,0,J,Q);this.camera.updateProjectionMatrix(),this.beams.setResolution(J,Q);for(let Z of this.particles)Z.px=NaN}poses(J){let Q=this.restFor(J),Z=Math.tan(this.camera.fov*Math.PI/360),K=1.1*Math.max(15.2/Z,11/(Z*Math.max(0.3,this.camera.aspect))),$=Q.center.clone(),W=this.facing>0?0.62:Math.PI-0.62,X=0.2;return{target:$,home:$.clone().add(new x(Math.sin(W)*Math.cos(0.2),Math.sin(0.2),Math.cos(W)*Math.cos(0.2)).multiplyScalar(K)),side:$.clone().add(new x(0,0,this.facing*K))}}restFor(J){if(!this.rest||this.rest.model!==J)this.rest=hE(J);return this.rest}project(J,Q,Z){let K=this.v3.set(J,Q,Z).applyMatrix4(this.beams.group.matrixWorld).project(this.camera);return[(K.x+1)/2*this.w,(1-K.y)/2*this.h]}pxPerCmAt(J,Q,Z){let K=this.camera.matrixWorld.elements,[$,W]=this.project(J,Q,Z),[X,Y]=this.project(J+K[0],Q+K[1],Z+K[2]);return Math.hypot(X-$,Y-W)}crown(J){let Q=this.restFor(J),Z=J.tract.scale,K=Q.head.at(Q.head.y1-1.2*Z),$=K?(K.F+K.Bk)/2:Q.center.x,[W,X]=this.project($,Q.head.y1,0);return{x:W,y:X,cmPx:this.pxPerCmAt($,Q.head.y1,0)}}faceView(J,Q,Z){let K=bQ(J,Q,Z).find(($)=>$.id==="lips").pos;return{handles:bQ,X:($)=>this.project($.x,$.y,0)[0],Y:($)=>this.project($.x,$.y,0)[1],pxPerCm:this.pxPerCmAt(K.x,K.y,0)}}update(J,Q,Z,K,$,W){this.clock+=W;let X=this.restFor(J),Y=J.tract.scale,H=this.face;this.headPose(X,Y);let N=L$(J,Z.jaw),q=X.condyle,U=this.beams,G=this.camera.position.distanceTo(X.center),D=this.scene.fog;D.near=G-3*Y,D.far=G+30*Y,U.begin();let O=(m,T=0)=>{let w=new Float32Array(m.length*3);return m.forEach((n,u)=>{w[3*u]=n.x,w[3*u+1]=n.y,w[3*u+2]=T}),w},L=this.v3.copy(this.eye).sub(X.center).normalize(),F=p8(0.25,0.8,Math.abs(L.z)),E=0.22+0.78*F,R=0.45+0.55*F,k=(m,T,w,n={},u=E)=>U.line(O(m),m.length,T,w,{...n,alpha:(n.alpha??1)*u}),V=(m,T,w)=>w===0?[m,T]:PY(m,T,q,w);this.k=Y;for(let m of X.fixed)for(let T of m.lines)U.line(T,T.length/3,m.color,m.width,{alpha:m.alpha,hot:m.hot});for(let m of X.jaw)for(let T of m.lines){let w=this.tmp.reset();for(let n=0;n<T.length;n+=3){let[u,$0]=V(T[n],T[n+1],N);w.p(u,$0,T[n+2])}U.poly(w,m.color,m.width,{alpha:m.alpha,hot:m.hot})}for(let m of X.shell){let T=this.tmp.reset();for(let w=0;w<m.w.length;w++){let n=m.a[3*w+2],[u,$0]=zY(Y,m.c[w],n,H.puff),[i,Z0]=V(m.a[3*w]+u,m.a[3*w+1],N*m.w[w]);T.p(i,Z0,n+$0)}U.poly(T,e.blueDim,0.85,{alpha:0.42})}let A=N7(J,Q,Z);k(A.inset,e.blueDim,0.9,{alpha:0.5}),k(A.skull,e.blueDim,0.9,{close:!0,alpha:0.6}),k(A.brain,e.blueMid,1,{close:!0,alpha:0.75}),k(A.sulcus,e.blueDim,0.9),k(A.nasal,e.blueMid,1,{close:!0}),k(A.palOral,e.blueMid,1.1),k(A.palNasal,e.blueMid,1.1),k(A.skinLower,e.blue,1.5),k(A.skinUpper,e.blue,1.5),k(A.outerWall,e.blue,1.4,{hot:!0}),k(Q.inner,e.blue,1.3,{alpha:0.9}),k(A.glottisWall,e.blue,1.2,{alpha:0.8}),this.eyes(X,W),this.airway(J,Q,K,$,Y),this.velum(Q,Y),this.epiglottis(Q,Y,R),this.larynx(J,Q,Z,K,Y,W,X.head.y0,E);let P=O(Q.tongue),_=(m,T)=>O(pJ(m.map((w)=>[w.x,w.y]),T).map(([w,n])=>({x:w,y:n}))),I=_(Q.upperLip,2),B=_(Q.lowerLip,2),p=this.lips(X,J,Q,Z,N),j=X.chin,y=new Float32Array(j.length);for(let m=0;m<j.length;m+=3){let[T,w]=V(j[m],j[m+1],N);y[m]=T,y[m+1]=w}if(K&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock;let m=[{a:P,color:e.green},{a:y,color:e.red},{a:I,color:e.pink},{a:B,color:e.pink}];if(p)m.push({a:p,color:e.pink});this.echoes.push({t:this.clock,lines:m});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if(K)xE.forEach((m,T)=>{let w=this.nearestEcho(this.clock-m);if(!w)return;for(let n of w.lines)U.line(n.a,n.a.length/3,n.color,1,{alpha:(0.1+0.07*T)*R})});if(this.tongue(Q,Z,Y),U.line(y,y.length/3,e.red,1.5,{hot:!0,alpha:R}),U.line(P,Q.tongue.length,e.green,1.6,{hot:!0,alpha:R}),U.line(I,I.length/3,e.pink,1.5,{hot:!0,alpha:R}),U.line(B,B.length/3,e.pink,1.5,{hot:!0,alpha:R}),k(pJ(Q.velum.map((m)=>[m.x,m.y]),3).map(([m,T])=>({x:m,y:T})),e.white,1.25,{alpha:0.92},R),$.particles&&K)this.drawParticles(J,Q,K,W);if(K)this.drawTurbulence(J,Q,K);if(this.caliper=null,$.calipers)this.drawCaliper(Q);U.end()}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}headPose(J,Q){let Z=this.beams.group,K=this.v3.set(-2.4*Q,J.head.y0+0.42*(J.condyle.y-J.head.y0),0);this.turn.setFromEuler(this.euler.set(this.face.tilt,0,this.face.nod)),Z.quaternion.copy(this.turn),Z.position.copy(K).sub(K.applyQuaternion(this.turn)),Z.updateMatrixWorld(!0),this.eye.copy(this.camera.position),Z.worldToLocal(this.eye)}eyes(J,Q){let Z=this.gaze,K=this.face;Z.update(this.clock,Q);let $=J.eyeR,W=Z.pitch+1.3*K.lookUp,X=[Math.cos(W)*Math.cos(Z.yaw),Math.sin(W),Math.cos(W)*Math.sin(Z.yaw)],Y=(U)=>{let G=Math.abs(U[1])>0.9?[1,0,0]:[0,1,0],D=_Y(kY(G,U));return[D,kY(U,D)]},H=this.eye,N=1-p8(0.4,0.9,K.lid),q=Math.max(0,K.brow);for(let U of J.eyes){let G=_Y([H.x-U[0],H.y-U[1],H.z-U[2]]),[D,O]=Y(G),L=new RJ;L.ellipse(U,_6(D,$),_6(O,$),36);let[F,E]=Y(X),R=[U[0]+X[0]*$*0.86,U[1]+X[1]*$*0.86,U[2]+X[2]*$*0.86];L.ellipse(R,_6(F,$*0.5),_6(E,$*0.5),24);let k=[U[0]+X[0]*$*0.97,U[1]+X[1]*$*0.97,U[2]+X[2]*$*0.97];L.ellipse(k,_6(F,$*0.2),_6(E,$*0.2),14);let V=Math.sign(U[2]),A=(j,y,m)=>j*(1-y*y)+0.06*y*V*m,P=(j)=>{for(let y=0;y<=16;y++){let m=-1+y/8,T=V*m*0.95,w=A(-0.36,m,-1),n=j?A(0.5+0.2*q,m,1)*(1-K.lid)+(w+0.03)*K.lid:w;L.p(U[0]+1.04*$*Math.cos(n)*Math.cos(T),U[1]+1.04*$*Math.sin(n),U[2]+1.04*$*Math.cos(n)*Math.sin(T))}L.end()};P(!0),P(!1);let _=0.3*K.brow,I=0.28*Math.max(0,-K.brow),B=0.22*K.lid*q;for(let j=0;j<=12;j++){let y=-1+j/6,m=V*(0.15+y*0.62),T=(1-y)/2,w=0.82+0.12*(1-y*y)-0.06*y+_+(B-I)*T;L.p(U[0]+1.32*$*Math.cos(w)*Math.cos(m),U[1]+1.32*$*Math.sin(w),U[2]+1.32*$*Math.cos(w)*Math.sin(m))}L.end();let p=[[e.blueMid,1,0.35],[e.blue,1,0.9*N],[e.blue,1,0.7*N],[e.blue,1.25,0.95],[e.blue,1.05,0.75],[e.blueMid,1.3,0.8]];L.lines.forEach((j,y)=>this.beams.line(j,j.length/3,p[y][0],p[y][1],{alpha:p[y][2]}))}}lips(J,Q,Z,K,$){let W=Q.tract.scale,X=J.condyle,Y=J.head,H=this.beams,N=Q.bodyParams.pharynx,q=J.lipHalf,U=Math.max(0.3*W,(1.1+(Q.bodyParams.lipWidth-1.1)*AY(K.lipWidth))*W/2),G=Z.upperLip.slice(6),D=Z.lowerLip.slice(6).map((w)=>PQ(w,X,-$)),O=P$(G),L=P$(D),F=G[0],E=D[0],R=(F.y+E.y)/2,k=(w,n)=>{let u=Y.at(w);return u?hQ(u,n,!0):0},V=F.x-k(F.y,0),A=E.x-k(E.y,0),P=(V+A)/2,_=G[G.length-1].y,I=D[D.length-1].y,B=this.tmp,p=(w,n,u)=>{let $0=Math.sqrt(Math.max(0,1-(u/U)**2)),i=fQ(w?G:D,w?O:L,n),Z0=w?F:E,X0=w?_:I,w0=R+(Z0.y-R)*$0,T0=X0-Z0.y,n0=w0+(i.y-Z0.y)*(X0-w0)/(Math.abs(T0)<0.0001?0.0001:T0),u0=Math.pow(Math.max(0,1-(u/q)**2),1.5),S=i.x-k(i.y,0)+(P-(w?V:A))*(1-$0)*(1-n),g=k(n0,u)+S*u0,d=w?0.5*(1-$0)*(1-n):0.5*(1+$0)+0.5*(1-$0)*n,a=d+(wY(W,N,g,n0)-d)*p8(U,q,Math.abs(u)),[Q0,r]=zY(W,SY(W,N,g,n0),u,this.face.puff),[z0,q0]=a?PY(g+Q0,n0,X,$*a):[g+Q0,n0];return[z0,q0,u+r]},j=(w,n,u,$0,i)=>{B.reset();for(let Z0=0;Z0<=i;Z0++){let X0=u+($0-u)*Z0/i;B.p(...p(w,n(X0),X0))}return B},y=[0.66,0.88];for(let w of[!0,!1]){for(let $0 of y)H.poly(j(w,()=>$0,-q,q,24),e.blueDim,0.85,{alpha:0.42});for(let $0 of[-0.8,-0.5,0.5,0.8].map((i)=>i*q)){B.reset();for(let i=0;i<=8;i++)B.p(...p(w,0.45+0.55*i/8,$0));H.poly(B,e.blueDim,0.85,{alpha:0.42})}let n=Math.min(q,U+0.3*W),u=($0)=>{let i=Math.sqrt(Math.max(0,1-($0/n)**2)),Z0=w?-0.07*Math.exp(-(($0/(0.32*W))**2))+0.05*Math.exp(-(((Math.abs($0)-0.55*W)/(0.3*W))**2)):0;return Math.max(0,(w?0.42:0.45)*i+Z0*i)};H.poly(j(w,u,-n,n,28),e.pink,1.3,{alpha:0.95}),H.poly(j(w,($0)=>0.45*u($0),-n,n,28),e.pink,1,{alpha:0.45})}for(let w of[1,-1])H.poly(j(!0,()=>0,w*U,w*q,6),e.pink,1,{alpha:0.6});let m=Z.upperLip[6].y-Z.lowerLip[6].y>0.02*W,T=24;B.reset();for(let w=0;w<=T;w++)B.p(...p(!0,0,-U+2*U*w/T));if(m)for(let w=T-1;w>0;w--)B.p(...p(!1,0,-U+2*U*w/T));return H.poly(B,e.pink,2.1,{hot:!0,close:m}),m?B.a.slice(0,B.n*3):null}tongue(J,Q,Z){let K=J.tongue,$=0,W=1/0;K.forEach((G,D)=>{let O=(G.x-J.tip.x)**2+(G.y-J.tip.y)**2;if(O<W)W=O,$=D});let X=22,Y=fE(K.slice(0,$+1),X),H=AY(Q.lateral),N=Y.map((G,D)=>{let O=Y[Math.max(0,D-1)],L=Y[Math.min(X-1,D+1)],F=L.x-O.x,E=L.y-O.y,R=Math.hypot(F,E)||1;F/=R,E/=R;let k=D/(X-1);return{p:G,nx:-E,ny:F,W:JJ(PE,k)*Z,h:(JJ(kE,k)+0.8*H*p8(0.45,0.8,k))*Z}}),q=(G,D)=>{let O=G.h*(1-Math.cos(D));return[G.p.x-G.nx*O,G.p.y-G.ny*O,G.W*Math.sin(D)]},U=this.tmp;for(let G=1;G<X-1;G+=2){U.reset();for(let D=0;D<=12;D++)U.p(...q(N[G],-Math.PI/2+Math.PI*D/12));this.beams.poly(U,e.green,1,{alpha:0.5})}for(let G of[-Math.PI/2,-Math.PI/4,Math.PI/4,Math.PI/2]){U.reset();for(let D of N)U.p(...q(D,G));this.beams.poly(U,e.green,Math.abs(G)>1?1.25:1,{alpha:Math.abs(G)>1?0.8:0.45})}}airway(J,Q,Z,K,$){let W=Q.grid,X=this.ring;if(X.n=0,W.length<2)return;let Y=Z?J.nodeS(Z.t.phLen,Z.t.orLen):null,H=K.pressure&&Z&&Y&&Y.length===Z.t.pressureRms.length,N=-1,q=0;for(let O=0;O<W.length&&X.n<X.s.length;O++){let L=W[O],F=L.outer.x-L.inner.x,E=L.outer.y-L.inner.y,R=Math.hypot(F,E);if(R>0.0001)N=F/R,q=E/R;let k=L.d/2,V=X.n++;X.s[V]=L.s,X.cx[V]=L.outer.x-N*k,X.cy[V]=L.outer.y-q*k,X.ux[V]=N,X.uy[V]=q,X.a[V]=k,X.b[V]=L.d>0.01?Math.min(3.5*$,2*L.area/(Math.PI*L.d)):0}let U=this.tmp,G=this.eye;for(let O=0;O<X.n;O+=2){U.reset();for(let V=0;V<=24;V++){let A=V/24*Math.PI*2,P=Math.cos(A)*X.a[O],_=Math.sin(A)*X.b[O];U.p(X.cx[O]+X.ux[O]*P,X.cy[O]+X.uy[O]*P,_)}let L=G.x-X.cx[O],F=G.y-X.cy[O],E=G.z,R=Math.abs(X.uy[O]*L-X.ux[O]*F)/(Math.hypot(L,F,E)||1),k=1-0.65*R*R;if(H){let V=Math.pow(zQ(A$(Z.t.pressureRms,Y,X.s[O])),0.85);this.beams.poly(U,AQ(V),0.85,{alpha:(0.25+0.65*V)*k})}else this.beams.poly(U,e.blueDim,0.85,{alpha:(K.grid?0.8:0.45)*k})}for(let O of[1,-1]){U.reset();for(let L=0;L<X.n;L++)U.p(X.cx[L],X.cy[L],O*X.b[L]);this.beams.poly(U,e.blue,1,{alpha:0.55})}let D=Q.glottis;for(let O of[0.3,0.65]){let L=D.x+(X.cx[0]-D.x)*O,F=D.y+(X.cy[0]-D.y)*O,E=(0.55+0.25*O)*$;U.reset();for(let R=0;R<=20;R++)U.p(L+E*Math.cos(R/20*Math.PI*2),F,E*Math.sin(R/20*Math.PI*2));this.beams.poly(U,e.blueDim,0.9,{alpha:0.6})}}airPoint(J,Q,Z,K){let $=this.ring;if($.n<2)return null;if(Q<=$.s[0]){let U=Math.max(0,Q/Math.max(0.01,$.s[0])),G=J.glottis;return[G.x+($.cx[0]-G.x)*U+Z*0.3*this.k,G.y+($.cy[0]-G.y)*U,K*0.45*this.k]}let W=0,X=$.n-1;if(Q>=$.s[X])return null;while(X-W>1){let U=W+X>>1;if($.s[U]<=Q)W=U;else X=U}let Y=(Q-$.s[W])/Math.max(0.000001,$.s[X]-$.s[W]),H=(U)=>U[W]+(U[X]-U[W])*Y,N=H($.a)*Z*0.82,q=H($.b)*K*0.82;return[H($.cx)+H($.ux)*N,H($.cy)+H($.uy)*N,q]}drawParticles(J,Q,Z,K){let $=Z.t,W=J.nodeS($.phLen,$.orLen),X=new Float32Array($.phAreas.length+$.orAreas.length);X.set($.phAreas,0),X.set($.orAreas,$.phAreas.length);let Y=Q.lipS;for(let H of this.particles){let N=A$($.flow,W,H.s),q=Math.max(0.05,A$(X,W,H.s)),U=N/q,G=Math.sign(U)*2.2*Math.log1p(Math.abs(U)/30);if(H.s+=G*K,H.life-=K*0.25,H.s>Y||H.s<0||H.life<=0||Math.abs(U)<3){if(!(Math.abs(U)<3&&H.life>0)){H.s=Math.random()*0.8,H.u=Math.random()*2-1,H.v=Math.random()*2-1,H.life=0.6+Math.random()*0.8,H.px=NaN;continue}}let D=this.airPoint(Q,H.s,H.u,H.v);if(!D)continue;if(Number.isFinite(H.px)){let O=Math.min(2,Math.floor(Math.min(1,Math.abs(G)/6)*Math.min(1,H.life)*3));this.beams.seg(H.px,H.py,H.pz,D[0],D[1],D[2],"#ffe2a8",1.05,0.16+0.2*O)}[H.px,H.py,H.pz]=D}}drawTurbulence(J,Q,Z){let K=Z.t;if(!(K.noiseLevel>1)||K.noiseNode<0)return;let $=J.branchS(K.noiseNode,K.phLen,K.orLen);if($<0)return;let W=Math.min(1,Math.log10(K.noiseLevel)/3.2);if(W<=0.05)return;let X=this.sparkSeed=this.sparkSeed*16807%2147483647,Y=()=>(X=X*16807%2147483647)/2147483647;for(let H=0;H<40;H++){let N=this.airPoint(Q,$+0.2+Y()*1.2,Y()*2-1,Y()*2-1);if(!N)continue;let q=0.02+Y()*0.05;this.beams.seg(N[0]-q,N[1],N[2],N[0]+q,N[1],N[2],"#f4fbff",1.6,0.15+0.7*W*Y())}}drawCaliper(J){let Q=this.ring,Z=-1,K=1/0;for(let X=2;X<J.grid.length-1;X++)if(J.grid[X].area<K)K=J.grid[X].area,Z=X;if(Z<0||K>=1.2||Z>=Q.n)return;let $=this.tmp.reset();for(let X=0;X<=24;X++){let Y=X/24*Math.PI*2,H=Math.cos(Y)*Q.a[Z],N=Math.sin(Y)*Q.b[Z];$.p(Q.cx[Z]+Q.ux[Z]*H,Q.cy[Z]+Q.uy[Z]*H,N)}this.beams.poly($,e.white,1.3,{hot:!0});let W=J.grid[Z];this.caliper={x:W.outer.x,y:W.outer.y,z:0,area:K}}velum(J,Q){let Z=J.velum,K=Math.floor(Z.length/2)-1,$=[];for(let Y=0;Y<=K;Y++){let H=Z[Y],N=Z[Z.length-1-Y],q=H.x-N.x,U=H.y-N.y,G=Math.hypot(q,U)||1;q/=G,U/=G;let D=Y/K;$.push({x:(H.x+N.x)/2,y:(H.y+N.y)/2,nx:q,ny:U,W:(1.95-1.5*Math.pow(D,1.5))*Q,droop:0.45*Q*D})}let W=(Y,H)=>{let N=0.12*Q*(1-H*H)-Y.droop*H*H;return[Y.x+Y.nx*N,Y.y+Y.ny*N,Y.W*H]},X=this.tmp;for(let Y of[1,3,5,7,9].filter((H)=>H<=K)){X.reset();for(let H=0;H<=12;H++)X.p(...W($[Y],-1+H/6));this.beams.poly(X,e.white,1,{alpha:0.5})}for(let Y of[-1,1]){X.reset();for(let H of $)X.p(...W(H,Y));this.beams.poly(X,e.white,1,{alpha:0.65})}}epiglottis(J,Q,Z){let[K,$]=J.epiglottis,W=$.x-K.x,X=$.y-K.y,Y=Math.hypot(W,X)||1;W/=Y,X/=Y;let H={x:-X,y:W},N=(G)=>(0.22+0.9*Math.pow(Math.sin(G*Math.PI/2),1.3))*Q,q=this.tmp.reset(),U=10;for(let G=0;G<=U;G++){let D=G/U,O=N(D),L=0.28*Q*(O/(1.12*Q));q.p(K.x+W*Y*D+H.x*L,K.y+X*Y*D+H.y*L,O)}for(let G=1;G<12;G++){let D=N(1)*(1-2*G/12),O=0.28*Q*(Math.abs(D)/(1.12*Q))**2;q.p($.x+H.x*O+W*0.08*Q*(1-(D/N(1))**2),$.y+H.y*O+X*0.08*Q*(1-(D/N(1))**2),D)}for(let G=U;G>=0;G--){let D=G/U,O=N(D),L=0.28*Q*(O/(1.12*Q));q.p(K.x+W*Y*D+H.x*L,K.y+X*Y*D+H.y*L,-O)}this.beams.poly(q,e.blue,1.1,{alpha:0.75}),this.beams.line(new Float32Array([K.x,K.y,0,$.x,$.y,0]),2,e.blue,2.1,{alpha:0.85*Z})}larynx(J,Q,Z,K,$,W,X,Y){let H=Q.glottis,N=this.beams,q=new RJ,U=(A,P,_)=>[H.x+A*$,H.y+P*$,_*$],G=(A,P=!1)=>{for(let[_,I,B]of A)q.p(...U(_,I,B));q.end(P)};for(let A of[1,-1])G([[1.45,1.75,0],[0.75,2,A*1.2],[-0.5,1.95,A*1.9],[-0.6,-0.6,A*1.85],[0.25,-0.85,A*1.5],[1.05,-0.8,A*0.55],[1.2,-0.75,0],[1.6,0.05,0],[1.9,1.15,0],[1.45,1.75,0]]),G([[-0.5,1.95,A*1.9],[-0.7,2.85,A*1.85]]),G([[-0.6,-0.6,A*1.85],[-0.45,-1.25,A*1.7]]);for(let[A,P]of[[-1.75,0.15],[-1.4,1.1]]){for(let _=0;_<=28;_++){let I=_/28*Math.PI*2;q.p(...U(0.1+1*Math.cos(I),A+P*(1-Math.cos(I))/2,1.1*Math.sin(I)))}q.end()}for(let A of q.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let D=new RJ,O=H.y-2.1*$,L=H.x+0.08*$;for(let A=O;A>X;A-=0.5*$)D.ellipse([L,A,0],[0.82*$,0,0],[0,0,0.95*$],20,-0.8*Math.PI,0.8*Math.PI);for(let A of[1,-1])D.p(L,O,A*0.95*$).p(L,X,A*0.95*$).end();for(let A of D.lines)N.line(A,A.length/3,e.blueDim,0.9,{alpha:0.85});for(let A of[1,-1])N.line(new Float32Array([L+A*0.82*$,H.y,0,L+A*0.82*$,X,0]),2,e.blueMid,1,{alpha:Y});let F=new RJ,E={x:J.tract.P(1.6,0).x,y:J.tract.P(0,2.9).y+0.6*Z.larynx*$};for(let A of[-0.16,0.16]){for(let P=0;P<=20;P++){let _=-1+P/10;F.p(E.x+(0.35-0.65*_*_)*$,E.y+A*$,1.15*_*$)}F.end();for(let P of[1,-1])F.p(E.x-0.3*$,E.y+A*$,P*1.15*$).p(E.x-2.8*$,E.y+(0.7+A)*$,P*2.05*$).end()}for(let A of F.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let R=K?.t.glottalArea,k=0;if(R&&R.length){this.strobe=(this.strobe+W/1.8)%1;let A=0.02;for(let P=0;P<R.length;P++)A=Math.max(A,R[P]);if(k=Math.min(0.45*$,R[Math.floor(this.strobe*R.length)%R.length]/(1.3*$)*2.2),!Number.isFinite(k))k=0}let V=new RJ;for(let A of[1,-1])V.p(...U(0.72,0.1,0)).p(...U(-0.55,0.1,A*(0.06+k/$))).end(),V.p(...U(0.72,0,0)).p(...U(-0.6,0,A*0.62)).end(),V.p(...U(0.65,0.45,0)).p(...U(-0.5,0.45,A*0.45)).end(),V.ellipse(U(-0.72,0.15,A*(0.3+k/$)),[0.18*$,0,0],[0,0.12*$,0.12*$],10);V.lines.forEach((A,P)=>N.line(A,A.length/3,P%4===0?e.white:e.blueMid,P%4===0?1.3:1,{alpha:P%4===2?0.6:0.9,hot:P%4===0}))}}function PY(J,Q,Z,K){let $=J-Z.x,W=Q-Z.y,X=Math.cos(K),Y=Math.sin(K);return[Z.x+$*X-W*Y,Z.y+$*Y+W*X]}var kY=(J,Q)=>[J[1]*Q[2]-J[2]*Q[1],J[2]*Q[0]-J[0]*Q[2],J[0]*Q[1]-J[1]*Q[0]],_Y=(J)=>{let Q=Math.hypot(J[0],J[1],J[2])||1;return[J[0]/Q,J[1]/Q,J[2]/Q]},_6=(J,Q)=>[J[0]*Q,J[1]*Q,J[2]*Q];function A$(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}var _$=null,T$=null,T6=null;function jY(J){if(T6)return T6;return T6=(async()=>{let Q;if(J&&typeof J!=="string")Q=await WebAssembly.compile(J);else{let Z=J??"./chimera.wasm",K=await fetch(Z);if(!K.ok)throw new Error(`engine: ${Z}: HTTP ${K.status}`);Q=await WebAssembly.compile(await K.arrayBuffer())}if(WebAssembly.Module.imports(Q).length)throw new Error("engine: the wasm module must not have imports");T$=(await WebAssembly.instantiate(Q,{})).exports,_$=Q})(),T6.catch(()=>T6=null),T6}function vY(){if(!_$)throw new Error("engine not loaded (await initChimera())");return _$}function gE(){if(!T$)throw new Error("engine not loaded (await initChimera())");return T$}var pE=new TextEncoder,mE=new TextDecoder;function xQ(J,Q={}){let Z=gE(),K=pE.encode(JSON.stringify({fn:J,...Q})),$=Z.chimera_alloc(K.length);new Uint8Array(Z.memory.buffer,$,K.length).set(K);let W=Z.chimera_call($,K.length);Z.chimera_free($,K.length);let X=mE.decode(new Uint8Array(Z.memory.buffer,Z.chimera_result_ptr(),Z.chimera_result_len())),Y=JSON.parse(X);if(W!==0)throw new Error(`engine ${J}: ${Y.error}`);return Y}var B9=(J,Q,Z)=>Math.max(Q,Math.min(Z,J));class w${grains=Array.from({length:64},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,r:0.25}));pulses=Array.from({length:6},()=>({x:0,y:0,t:-100,strength:0}));count=36;w=0.045;h=0.052;d=0.024;radius=0.0008;shape="box";quiet=0;seed=12345;wallEnergy=new Float64Array(6);collisionEnergy=0;collisions=0;agitation=0;constructor(){this.reset(36)}random(){return this.seed^=this.seed<<13,this.seed^=this.seed>>>17,this.seed^=this.seed<<5,(this.seed>>>0)/4294967296}reset(J){this.count=B9(J|0,1,64);for(let Q=0;Q<64;Q++){let Z=this.random()*Math.PI*2,K=Math.sqrt(this.random())*0.28,$=this.grains[Q];$.x=Math.cos(Z)*this.w*K,$.y=Math.sin(Z)*this.h*K,$.z=(this.random()-0.5)*this.d*0.65,$.vx=$.vy=$.vz=0,$.r=0.18+this.random()*0.2}for(let Q of this.pulses)Q.t=-100;this.quiet=0,this.agitation=0,this.collisionEnergy=this.collisions=0}contact(J,Q,Z,K){if(Q<0.025||this.agitation<0.008)return;this.collisions++,this.collisionEnergy+=Q*Q/this.count,this.wallEnergy[Z]+=Q*Q/this.count;let $=this.pulses[Z];$.x=J.x,$.y=J.y,$.t=K,$.strength=Q}step(J,Q,Z,K,$){if(this.collisionEnergy=this.collisions=0,this.wallEnergy.fill(0),J>0.1){for(let L=0;L<this.count;L++){let F=this.grains[L];F.vx=F.vy=F.vz=0}return}if(this.agitation=Math.max(K,this.agitation*Math.exp(-J/0.11)),this.quiet=K<0.012?this.quiet+J:0,this.quiet>0.6){for(let L=0;L<this.count;L++){let F=this.grains[L];F.vx=F.vy=F.vz=0}return}let W=Math.max(1,Math.ceil(J/0.0042)),X=J/W,Y=Math.exp(-X*10),H=this.radius,N=(-Q[0]+Z[0]*0.35)*9.80665,q=(-Q[1]+Z[1]*0.35)*9.80665-1.6,U=-Q[2]*9.80665,G=Math.max(0.003,this.w/2-H),D=Math.max(0.003,this.h/2-H),O=Math.max(0.003,this.d/2-H);for(let L=0;L<W;L++){for(let E=0;E<this.count;E++){let R=this.grains[E];if(R.vx=B9((R.vx+N*X)*Y,-3,3),R.vy=B9((R.vy+q*X)*Y,-3,3),R.vz=B9((R.vz+U*X)*Y,-3,3),R.x+=R.vx*X,R.y+=R.vy*X,R.z+=R.vz*X,this.shape==="box"){if(Math.abs(R.x)>G)this.contact(R,Math.abs(R.vx),R.x>0?1:0,$),R.x=Math.sign(R.x)*G,R.vx=-R.vx*R.r,R.vy*=0.92,R.vz*=0.92;if(Math.abs(R.y)>D)this.contact(R,Math.abs(R.vy),R.y>0?2:3,$),R.y=Math.sign(R.y)*D,R.vy=-R.vy*R.r,R.vx*=0.92,R.vz*=0.92}else{let k=R.x*R.x/(G*G)+R.y*R.y/(D*D);if(k>1){let V=Math.sqrt(k);R.x/=V,R.y/=V;let A=R.x/(G*G),P=R.y/(D*D),_=Math.hypot(A,P);A/=_,P/=_;let I=R.vx*A+R.vy*P;if(I>0)this.contact(R,I,Math.abs(A)>Math.abs(P)?A>0?1:0:P>0?2:3,$),R.vx-=(1+R.r)*I*A,R.vy-=(1+R.r)*I*P}}if(Math.abs(R.z)>O)this.contact(R,Math.abs(R.vz),R.z>0?4:5,$),R.z=Math.sign(R.z)*O,R.vz=-R.vz*R.r,R.vx*=0.95,R.vy*=0.95}let F=H*2;for(let E=0;E<this.count;E++)for(let R=E+1;R<this.count;R++){let k=this.grains[E],V=this.grains[R],A=V.x-k.x,P=V.y-k.y,_=V.z-k.z,I=A*A+P*P+_*_;if(I>=F*F||I<0.0000000000000001)continue;let B=Math.sqrt(I),p=A/B,j=P/B,y=_/B,m=(V.vx-k.vx)*p+(V.vy-k.vy)*j+(V.vz-k.vz)*y,T=(F-B)*0.35;if(k.x-=p*T,k.y-=j*T,k.z-=y*T,V.x+=p*T,V.y+=j*T,V.z+=y*T,m<0){let w=-m*0.6;k.vx-=w*p,k.vy-=w*j,k.vz-=w*y,V.vx+=w*p,V.vy+=w*j,V.vz+=w*y}}for(let E=0;E<this.count;E++){let R=this.grains[E];if(R.z=B9(R.z,-O,O),this.shape==="box")R.x=B9(R.x,-G,G),R.y=B9(R.y,-D,D);else{let k=R.x*R.x/(G*G)+R.y*R.y/(D*D);if(k>1){let V=Math.sqrt(k);R.x/=V,R.y/=V}}}}}}class S${x=null;y=null;center(J){let Q=Math.hypot(...J);if(Q<0.5)return;J=J.map(($)=>$/Q);let Z=[1-J[0]*J[0],-J[0]*J[1],-J[0]*J[2]],K=Math.hypot(...Z);if(K<0.1)Z=[-J[1]*J[0],1-J[1]*J[1],-J[1]*J[2]],K=Math.hypot(...Z);this.x=Z.map(($)=>$/K),this.y=[J[1]*this.x[2]-J[2]*this.x[1],J[2]*this.x[0]-J[0]*this.x[2],J[0]*this.x[1]-J[1]*this.x[0]]}project(J){if(!this.x)this.center(J);let Q=Math.hypot(...J);if(!this.x||!this.y||Q<0.5)return[0,0];return[J.reduce((Z,K,$)=>Z+K*this.x[$],0)/Q,J.reduce((Z,K,$)=>Z+K*this.y[$],0)/Q]}}var j$=[{name:"Theremin",tag:"VOWEL",description:"Continuous pitch and OO–AH–EE colour."},{name:"Velvet",tag:"WARMTH",description:"Warm sine layers with an octave below."},{name:"Glass",tag:"SHIMMER",description:"Clear, bell-like partials that bloom with tilt."},{name:"Orbit",tag:"SPREAD",description:"A drifting, detuned ensemble in your hand."},{name:"Reed",tag:"BRIGHTNESS",description:"A woody harmonic voice that opens into a buzz."}],MJ=Math.PI*2,dE=[1,2.756,5.404,8.933],uE=[1,0.3,0.16,0.09];class lE{rate;phase=0;phases=new Float64Array([0,0.9,1.7,2.6]);clock=0;weights=new Float64Array(16);desired=new Float64Array(16);weightMix;constructor(J){this.rate=J;this.weightMix=1-Math.exp(-1/(J*0.012))}prepare(J,Q){let Z=Q*2,K=Z<1?0:1,$=Z-K,W=[[350,900,2200],[800,1250,2900],[300,2300,3100]],X=[180,280,450],Y=0;for(let N=0;N<16;N++){let q=J*(N+1),U=0.045/(N+1);for(let G=0;G<3;G++){let D=W[K][G]*(1-$)+W[K+1][G]*$,O=(q-D)/X[G];U+=Math.exp(-0.5*O*O)*(G===0?1:0.65)/Math.sqrt(N+1)}if(N===0)U+=0.3;this.desired[N]=U,Y+=U*U}let H=1/Math.sqrt(Y);for(let N=0;N<16;N++)this.desired[N]*=H}fade(J){return Math.max(0,Math.min(1,(this.rate*0.45-J)/(this.rate*0.07)))}render(J,Q,Z){let K=this.weightMix;this.clock+=1/this.rate,this.phase=(this.phase+MJ*J/this.rate)%MJ;let $=0;if(Z===0){for(let Y=0;Y<16;Y++)this.weights[Y]+=(this.desired[Y]-this.weights[Y])*K,$+=Math.sin(this.phase*(Y+1))*this.weights[Y]*this.fade(J*(Y+1));return $*0.24}if(Z===1)return this.phases[0]=(this.phases[0]+MJ*J*0.5/this.rate)%MJ,(Math.sin(this.phase)*0.8+Math.sin(this.phases[0])*0.25+Math.sin(this.phase*2)*Q*0.25*this.fade(J*2)+Math.sin(this.phase*3)*Q*0.1*this.fade(J*3))*0.3;if(Z===2){let Y=dE,H=uE;for(let N=0;N<4;N++){let q=J*Y[N];this.phases[N]=(this.phases[N]+MJ*q/this.rate)%MJ,$+=Math.sin(this.phases[N])*H[N]*(N===0?1:0.1+Q)*this.fade(q)}return $*0.27}if(Z===3){let Y=0.001+Q*0.009;for(let H=0;H<4;H++){let N=J*(H===3?0.5:1+(H-1)*Y);this.phases[H]=(this.phases[H]+MJ*N/this.rate)%MJ,$+=Math.sin(this.phases[H])*(0.85+Math.sin(this.clock*(0.7+H*0.17)+H)*0.15)}return $*0.12}let W=400+Q*6500,X=0;for(let Y=1;Y<=12;Y++){let H=J*Y,N=(Y%2?1:0.25)/Y*Math.exp(-H/W)*this.fade(H);$+=Math.sin(this.phase*Y)*N,X+=N*N}return $/Math.sqrt(Math.max(0.05,X))*0.25}}var gQ=(J)=>document.getElementById(J);function yY(J,Q){for(let Z of["feedback","beta"]){let K=gQ(Z+"-dialog"),$=gQ(Z+"-form"),W=gQ(Z+"-status");gQ(Z+"-open").addEventListener("click",()=>{W.textContent="",Q(),K.showModal()}),K.querySelector("[data-close]").addEventListener("click",()=>K.close()),$.addEventListener("submit",async(X)=>{if(X.preventDefault(),!$.reportValidity())return;let Y=new FormData($),H=$.querySelector("[type=submit]"),N={email:String(Y.get("email")||""),website:String(Y.get("website")||""),version:"web-03"};if(Z==="beta"){let q=Y.getAll("platform");if(!q.length){W.textContent="Choose at least one platform.";return}Object.assign(N,{name:String(Y.get("name")||""),platforms:q,consent:Y.get("consent")==="on"})}else Object.assign(N,{category:String(Y.get("category")||"other"),message:String(Y.get("message")||""),includeDetails:Y.get("details")==="on",details:Y.get("details")==="on"?{...J(),browser:navigator.userAgent}:void 0});H.disabled=!0,W.textContent="Saving…";try{let q=await fetch("https://kaizendsp.com/api/motion/"+Z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N),credentials:"omit"}),U=await q.json().catch(()=>({}));if(!q.ok||!U.ok)throw new Error(U.error||"Could not save this. Please try again.");W.textContent=Z==="beta"?"Request saved. We’ll use this address for Motion beta access and testing updates.":"Feedback saved—thank you. It goes directly to the Motion development team.",$.reset()}catch(q){W.textContent=q instanceof Error?q.message:"Could not save this. Please try again."}finally{H.disabled=!1}})}}var cE=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],QJ=(J)=>440*Math.pow(2,(J-69)/12);function pQ(J){let Q=69+12*Math.log2(J/440),Z=Math.round(Q);return{midi:Z,label:cE[(Z%12+12)%12]+(Math.floor(Z/12)-1),cents:Math.round((Q-Z)*100)}}function bY(J,Q){return Array.from({length:12},(Z,K)=>12*(J+1)+K).filter((Z)=>QJ(Z)>=109.999999&&QJ(Z)<=Q+0.000001)}class fY{seconds=0;last=null;update(J,Q){if(this.last!==null)this.seconds+=Math.max(0,(J-this.last)/1000);return this.last=Q?J:null,Math.floor(this.seconds)}}function hY(){let J=document.getElementById("usage-consent"),Q=document.getElementById("usage-status"),Z=new fY,K=null,$=!1,W=0,X=(L,F)=>{try{return L.getItem(F)}catch{return null}},Y=(L,F,E)=>{try{if(E===null)L.removeItem(F);else L.setItem(F,E)}catch{}},H,N;try{H=localStorage,N=sessionStorage}catch{}let q=(L,F)=>L?X(L,F):null,U=(L,F,E)=>{if(L)Y(L,F,E)};function G(){let L=Date.now(),F;try{let E=JSON.parse(q(H,"motion-usage-browser-v1")||"null");if(E&&L-E.created<7776000000&&/^[0-9a-f-]{36}$/.test(E.id))F=E.id}catch{}if(!F)F=crypto.randomUUID(),U(H,"motion-usage-browser-v1",JSON.stringify({id:F,created:L}));try{let E=JSON.parse(q(N,"motion-usage-session-v1")||"null");if(E?.visitor===F&&Number.isFinite(E.updated)&&L>=E.updated&&L-E.updated<1800000&&Number.isFinite(E.seconds)&&E.seconds>=0&&E.seconds<14400&&/^[0-9a-f-]{36}$/.test(E.session))K=E}catch{}K??={visitor:F,session:crypto.randomUUID(),seconds:0,updated:L},Z.seconds=K.seconds,Z.last=document.hidden?null:performance.now()}function D(L=!1){if(!$||!K)return;let F=Math.min(14400,Z.update(performance.now(),!document.hidden));K.seconds=F,K.updated=Date.now(),U(N,"motion-usage-session-v1",JSON.stringify(K));let E=JSON.stringify({visitor:K.visitor,session:K.session,seconds:F,consent:!0});if(L&&navigator.sendBeacon?.("https://kaizendsp.com/api/motion/usage",new Blob([E],{type:"application/json"})))return;fetch("https://kaizendsp.com/api/motion/usage",{method:"POST",headers:{"Content-Type":"application/json"},body:E,credentials:"omit",referrerPolicy:"no-referrer",keepalive:L}).then((R)=>{if($)Q.textContent=R.ok?"On · counting anonymous visits and visible time":"On · counts temporarily unavailable"}).catch(()=>{if($)Q.textContent="On · counts temporarily unavailable"})}function O(){$=!0,G(),Q.textContent="On · counting anonymous visits and visible time",D()}if(J.checked=q(H,"motion-usage-consent-v1")==="yes",J.checked)O();J.addEventListener("change",()=>{if(U(H,"motion-usage-consent-v1",J.checked?"yes":"no"),J.checked)O();else $=!1,K=null,Z.seconds=0,Z.last=null,U(H,"motion-usage-browser-v1",null),U(N,"motion-usage-session-v1",null),Q.textContent="Off · browser ID cleared on this device"}),setInterval(()=>{if($&&!document.hidden){if(Z.seconds>=14400)D(!0),K=null,U(N,"motion-usage-session-v1",null),G();D()}},15000),document.addEventListener("visibilitychange",()=>{if(!$)return;if(document.hidden)W=Date.now(),D(!0),Z.last=null;else{if(W&&Date.now()-W>1800000)K=null,U(N,"motion-usage-session-v1",null),G();Z.last=performance.now(),D()}}),addEventListener("pagehide",()=>{D(!0),Z.last=null}),addEventListener("pageshow",()=>{if($&&!document.hidden)Z.last=performance.now()}),addEventListener("storage",(L)=>{if(L.key==="motion-usage-consent-v1"&&L.newValue!=="yes")$=!1,K=null,Z.seconds=0,Z.last=null,J.checked=!1,U(N,"motion-usage-session-v1",null),Q.textContent="Off · disabled in another tab"})}var I0=(J)=>document.getElementById(J),w6=I0("field"),a0=w6.getContext("2d"),F7=I0("start"),d$=I0("touch-start"),dQ=I0("pause"),Z9=new w$,cQ=new S$,h$=["jaw","tbX","tbY","ttX","ttY","ttCurl","root","lipAp","lipProt","lipWidth","labiodental","velum","larynx","epilarynx","ventricular","lateral","dorsum"],W8,S9,b0=2,_9=!1,v$=!1,dY=!1,lJ=0,xY=0,q7=new Float32Array(512),uQ=0,y$,x$,lQ,uY,g$={...VQ},s9,m8,LJ,cJ,E7=[0,-1,0],KJ=[0,0,0],p$=[0,0,0],j6=[0,0],v6=0,IJ=0.5,y6=0.5,iQ=0,oQ=0,ZJ=0,gY=performance.now(),m$=0,b$=0,nJ=0.62,mQ=[0,-9.80665,0],pY=0,S6=0.5,D7=0.5,sJ=!1,nQ=!0,lY=0,C8=360,B8=240,f$=!1,uJ=null,cY=null,u$=0;var m9=null,d8=4,b6=!1,nY=311,O7=!0,sQ=0.7,sY={frequency:311,vowel:0.5,breath:0.55};F7.disabled=d$.disabled=!0;var nE=(async()=>{await jY("./chimera.wasm"),y$=xQ("catalog");let J=y$.vowelTargets.male;uY=["u","a","i"].map((K)=>h$.map(($)=>J[K]?.artic[$]??y$.neutral[$]));let[Q,Z]=await Promise.all([fetch("./shaker-strokes.pcm"),fetch("./shaker-bank.json")]);if(!Q.ok||!Z.ok)throw new Error("Shaker recordings could not load.");if([x$,lQ]=await Promise.all([Q.arrayBuffer(),Z.json()]),x$.byteLength!==lQ.count*lQ.frames_per_stroke*2)throw new Error("Incomplete shaker recordings.");if(dY=!0,b0===2)rY();F7.disabled=d$.disabled=!1,I0("load-status").textContent="Ready. Start with your volume low."})().catch((J)=>{throw D8("The instruments could not load. Check your connection and reload."),I0("load-status").textContent=String(J),J});function D8(J){I0("notice").textContent=J}function A8(){I0("status").textContent=S9?_9?"SOUND ON":"SOUND PAUSED":"READY TO PLAY",I0("live-led").classList.toggle("on",_9),dQ.disabled=!S9,dQ.textContent=_9?"Ⅱ":"▶",dQ.setAttribute("aria-label",_9?"Pause sound":"Resume sound"),I0("sensor-status").textContent=!S9?"SOUND ON THIS DEVICE":v6&&performance.now()-v6<2000?"MOTION LIVE · PHONE SOUND":sJ?"WAITING FOR MOTION":"TOUCH / MOUSE · PHONE SOUND"}function iY(){let{DeviceMotionEvent:J,DeviceOrientationEvent:Q}=window;if(!J)return Promise.resolve(!1);let Z=[];if(typeof J.requestPermission==="function")Z.push(J.requestPermission());if(typeof Q?.requestPermission==="function")Z.push(Q.requestPermission());return Z.length?Promise.all(Z).then((K)=>K.every(($)=>$==="granted")):Promise.resolve(!0)}async function aQ(J){if(v$)return;v$=!0,F7.textContent="Opening the instruments…";try{if("audioSession"in navigator)try{navigator.audioSession.type="playback"}catch{}W8??=new AudioContext({latencyHint:"interactive"});let Q=W8.resume(),Z=J?iY().catch(()=>!1):Promise.resolve(!1);await Promise.all([Q,nE]),sJ=await Z,await W8.audioWorklet.addModule("./audio-worklet.js"),S9=new AudioWorkletNode(W8,"motion-audio",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{module:vY(),pcm:x$,shakerBank:lQ,vowels:uY}}),S9.onprocessorerror=()=>{_9=!1,A8(),D8("The audio engine stopped. Reload to restart it.")},S9.port.onmessage=($)=>{if(Number.isFinite($.data.frequency)&&$.data.frequency>0)nY=$.data.frequency;if($.data.type==="scope")q7=$.data.values,uQ=$.data.writeIndex;if($.data.type==="artic")for(let W=0;W<h$.length;W++)g$[h$[W]]=$.data.values[W];if($.data.type==="grains"){Z9.count=$.data.count;let W=$.data.positions,X=performance.now()/1000;for(let Y=0;Y<Z9.count;Y++){let H=Z9.grains[Y];H.x=W[Y*3],H.y=W[Y*3+1],H.z=W[Y*3+2]}for(let Y=0;Y<6;Y++){let H=Z9.pulses[Y],N=Y*4;H.x=$.data.impacts[N],H.y=$.data.impacts[N+1],H.t=X-$.data.impacts[N+2],H.strength=$.data.impacts[N+3]}}if($.data.type==="error")_9=!1,A8(),D8("The audio engine stopped. Reload to restart it.")};let K=W8.createGain();if(K.gain.value=0.8,S9.connect(K),K.connect(W8.destination),eY(),_9=!0,I0("welcome").hidden=!0,I0("gesture-caption").hidden=!1,sJ)nQ=!0,cQ.x=null,D8("Hold your phone comfortably, tap CENTRE, then move gently.");else D8(J?"Motion is unavailable or permission was declined. Drag to play; try opening this link in Safari or Chrome.":"Drag across the display to play. On a phone, tap “Enable motion” below to use its sensors.");A8(),i9(!0)}catch(Q){D8(`Could not start sound: ${Q instanceof Error?Q.message:String(Q)}. Try Safari or Chrome.`),F7.textContent="Try enabling sound again"}finally{v$=!1}}F7.addEventListener("click",()=>aQ(!0));d$.addEventListener("click",()=>aQ(!1));dQ.addEventListener("click",async()=>{if(!W8)return;await W8.resume(),_9=!_9,A8(),i9(!0)});I0("centre").addEventListener("click",()=>{m9=null,b6=!1,iJ(),cQ.center(E7),cY=u$,IJ=y6=0.5,S6=D7=0.5,D8("Centred on this grip.")});I0("test").addEventListener("click",async()=>{if(m9=null,iJ(),!S9){if(await aQ(!1),!S9)return}if(W8?.state!=="running")await W8?.resume();_9=!0,IJ=0.5,y6=0.5,iQ=performance.now()+1000,oQ=performance.now()+220,lY=performance.now(),A8(),i9(!0)});I0("sensitivity").addEventListener("input",(J)=>{nJ=Number(J.target.value)/100,I0("sensitivity-output").textContent=String(Math.round(nJ*100)).padStart(2,"0")});document.querySelectorAll("[data-mode]").forEach((J)=>J.addEventListener("click",()=>oY(Number(J.dataset.mode))));function oY(J){if(b0=J,m9!==null&&QJ(m9)>(b0===2?880:1760))m9=null;if(ZJ=0,oQ=0,Z9.reset(Z9.count),document.querySelectorAll("[data-mode]").forEach((Q)=>{let Z=Number(Q.dataset.mode)===b0;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),I0("excitation-controls").hidden=b0!==2,I0("note-panel").hidden=b0===0,tQ(),I0("chamber").hidden=b0!==0,I0("touch-pad").hidden=b0===0,I0("synth-bank").hidden=b0!==1,I0("touch-pad").setAttribute("aria-valuemax",b0===2?"880":"1760"),I0("screen-name").textContent=["LOOSE GRAIN CHAMBER","CONTINUOUS THEREMIN","LIVE VOCAL ANATOMY"][b0],I0("screen-detail").textContent=["XYZ","110—1760 HZ","CHIMERA"][b0],I0("gesture-caption").textContent=b0===0?"SHAKE IN ANY DIRECTION · DRAG TO RATTLE":b0===1?"SIDE TILT: PITCH · FORWARD / BACK: VOWEL":"TILT TO SING · DRAG THE HEAD TO ROTATE",I0("description").innerHTML=["A handful of grains.<br>A chamber in your hand.<br>Every movement has a texture.","A continuous voice.<br>No keys. No steps.<br>Just the shape of a gesture.","A living vocal tract.<br>Tongue, lips and breath.<br>Play the anatomy of a voice."][b0],I0("voice-credit").textContent=b0===2?"CHIMERA · JAMESON HODGE":"PLAYED BY MOVEMENT",I0("x-label").textContent=b0===0?"X / Y":"PITCH",I0("y-label").textContent=b0===0?"ENERGY":"VOWEL",I0("z-label").textContent=b0===0?"Z":"BREATH Z",w6.hidden=b0===2,I0("head").hidden=b0!==2,b0===2&&dY)rY();if(b0===1)aY();A8(),i9(!0)}function aY(){let J=j$[lJ];document.querySelectorAll("[data-synth]").forEach((Q)=>{let Z=Number(Q.dataset.synth)===lJ;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),I0("screen-name").textContent=J.name.toUpperCase()+" / CONTINUOUS SYNTH",I0("y-label").textContent=J.tag,I0("description").textContent=J.description,I0("gesture-caption").textContent="SIDE TILT: PITCH · FORWARD / BACK: "+J.tag,I0("touch-pad").querySelector("span:last-child").textContent=lJ===0?"LOW ↔ HIGH · OO ↕ EE":"X: PITCH · Y: COLOUR"}document.querySelectorAll("[data-synth]").forEach((J)=>J.addEventListener("click",()=>{lJ=Number(J.dataset.synth),aY(),i9(!0)}));function rY(){if(m8)return;try{let J=I0("head");m8=new $$({alpha:!0,antialias:!0,powerPreference:"low-power"}),m8.setPixelRatio(Math.min(devicePixelRatio,1.5)),m8.setClearColor(0,0),J.appendChild(m8.domElement),s9=new k$,s9.centred=!0;let Q=xQ("model",{body:{female:0,child:0},sampleRate:W8?.sampleRate??48000}),Z=Q.body.scale,K=Q.body.pharynx;cJ={bodyParams:Q.body,tract:{scale:Z,P:(W,X)=>({x:(W>0.5?0.5+(W-0.5)*0.86:W)*Z,y:(X<7?7-(7-X)*K:X)*Z}),unP:(W,X)=>({x:W/Z>0.5?0.5+(W/Z-0.5)/0.86:W/Z,y:X/Z<7?7-(7-X/Z)/K:X/Z})},frame:(W)=>xQ("frame",{model:Q.model,artic:W})},rQ();let $=s9.poses(cJ);s9.camera.position.copy($.home),s9.camera.lookAt($.target),LJ=new H$(s9.camera,m8.domElement),LJ.target.copy($.target),LJ.enablePan=LJ.enableZoom=!1,LJ.update()}catch(J){D8("The 3D view is unavailable in this browser. The voice can still play."),console.error(J)}}function rQ(){let J=w6.getBoundingClientRect(),Q=I0("glass");C8=Q.clientWidth,B8=Q.clientHeight-71;let Z=Math.min(devicePixelRatio,2);if(w6.width=Math.round(C8*Z),w6.height=Math.round(B8*Z),a0.setTransform(Z,0,0,Z,0,0),m8&&s9){if(m8.setSize(C8,B8),s9.resize(C8,B8),cJ&&LJ){let K=s9.poses(cJ);s9.camera.position.copy(K.home),LJ.target.copy(K.target),LJ.update()}}}addEventListener("resize",rQ);new ResizeObserver(rQ).observe(I0("glass"));rQ();addEventListener("devicemotion",(J)=>{if(!sJ)return;let{acceleration:Q,accelerationIncludingGravity:Z}=J;if(!Z||Z.x==null||Z.y==null||Z.z==null)return;let K=performance.now();v6=K;let $=Math.min(0.05,Math.max(0.005,(K-pY)/1000));pY=K;let W=[Z.x,Z.y,Z.z];for(let Y=0;Y<3;Y++)mQ[Y]+=(W[Y]-mQ[Y])*(1-Math.exp(-$/0.22));if(Q?.x!=null&&Q?.y!=null&&Q?.z!=null)KJ=[Q.x,Q.y,Q.z].map((Y)=>Y/9.80665),E7=[Z.x-Q.x,Z.y-Q.y,Z.z-Q.z].map((Y)=>Y/9.80665);else KJ=W.map((Y,H)=>(Y-mQ[H])/9.80665),E7=mQ.map((Y)=>Y/9.80665);if(p$=[J.rotationRate?.alpha??0,J.rotationRate?.beta??0,J.rotationRate?.gamma??0].map((Y)=>Y*Math.PI/180),nQ)cQ.center(E7),cY=u$,nQ=!1;j6=cQ.project(E7);let X=Math.max(0,Math.hypot(...KJ)-0.035)*1.8+Math.max(0,Math.hypot(...p$)-0.15)*0.08;ZJ=Math.max(ZJ,B9(X*(0.5+nJ),0,1)),i9(!1)},{passive:!0});addEventListener("deviceorientation",(J)=>{if(J.gamma!=null)u$=J.gamma},{passive:!0});function tY(J=performance.now()){let Q=J<iQ||!sJ||J-v6>1500,Z=Q?IJ:B9(0.5+Math.asin(B9(j6[0],-1,1))/Math.PI*(0.5+nJ),0,1),K=Q?y6:B9(0.5-j6[1]*(0.7+nJ),0,1);return S6+=(Z-S6)*0.35,D7+=(K-D7)*0.35,{frequency:m9===null?110*Math.pow(2,S6*(b0===2?3:4)):Math.min(b0===2?880:1760,QJ(m9)),vowel:D7,breath:B9(0.55-KJ[2]*0.65,0.05,1),excitation:b0===2&&!O7?sQ:void 0}}function i9(J){if(!S9)return;let Q=performance.now();if(!J&&Q-m$<9)return;m$=Q;let Z=tY(Q);sY=Z,S9.port.postMessage({type:"state",mode:b0,voice:lJ,enabled:_9,...Z,acceleration:KJ.map((K)=>K*(0.45+nJ*1.55)),tilt:j6,pulse:Q<oQ})}function mY(J){m9=null,iJ();let Q=J.currentTarget,Z=Q.getBoundingClientRect(),K=B9((J.clientX-Z.left)/Z.width,0,1),$=B9((J.clientY-Z.top)/Z.height,0,1),W=performance.now();if(IJ=K,y6=1-$,iQ=W+2000,lY=W,uJ&&b0===0){let Y=Math.max(8,W-uJ.t),H=(K-uJ.x)/Y*1000,N=($-uJ.y)/Y*1000;ZJ=Math.max(ZJ,B9(Math.hypot(H,N)*0.13,0,1)),KJ=[B9(H*0.3,-2,2),B9(-N*0.3,-2,2),0]}uJ={x:K,y:$,t:W};let X=I0("touch-pad").querySelector("i");X.style.left=`${K*100}%`,X.style.top=`${$*100}%`,I0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,K*(b0===2?3:4))))),i9(!0)}for(let J of[w6,I0("touch-pad")]){J.addEventListener("pointerdown",(Z)=>{if(!S9)return;f$=!0,uJ=null,J.setPointerCapture(Z.pointerId),mY(Z)}),J.addEventListener("pointermove",(Z)=>{if(f$)mY(Z)});let Q=()=>{f$=!1,uJ=null};J.addEventListener("pointerup",Q),J.addEventListener("pointercancel",Q)}I0("touch-pad").addEventListener("keydown",(J)=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(J.key))J.preventDefault(),m9=null,iJ(),IJ=B9(IJ+(J.key==="ArrowRight"?0.025:J.key==="ArrowLeft"?-0.025:0),0,1),y6=B9(y6+(J.key==="ArrowUp"?0.05:J.key==="ArrowDown"?-0.05:0),0,1),iQ=performance.now()+3000,I0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,IJ*(b0===2?3:4))))),i9(!0)});function eY(){let J=Number(I0("size").value)/1000;Z9.shape=I0("shape").value,Z9.w=J,Z9.h=Z9.shape==="circle"?J:Z9.shape==="oval"?J*0.62:J*1.12,Z9.radius=Number(I0("grain-size").value)/2000,Z9.reset(Number(I0("fill").value)),S9?.port.postMessage({type:"geometry",shape:Z9.shape,width:Z9.w,height:Z9.h,depth:Z9.d,radius:Z9.radius,count:Z9.count,material:Number(I0("material").value)})}for(let J of["shape","fill","size","grain-size","material"])I0(J).addEventListener("input",eY);function sE(J,Q){if(a0.clearRect(0,0,C8,B8),a0.save(),a0.translate(C8/2,B8/2),b0===0){let Z=Math.min((C8-70)/Z9.w,(B8-48)/Z9.h),K=Z9.w*Z/2,$=Z9.h*Z/2;if(a0.lineWidth=1,a0.strokeStyle="#8b9b6e77",a0.beginPath(),Z9.shape==="box")a0.roundRect(-K,-$,K*2,$*2,12);else a0.ellipse(0,0,K,$,0,0,Math.PI*2);a0.stroke();for(let X of Z9.pulses){let Y=J/1000-X.t;if(Y<0||Y>0.35)continue;a0.strokeStyle=`rgba(233,180,94,${(1-Y/0.35)*0.5})`,a0.lineWidth=1,a0.beginPath(),a0.arc(X.x*Z,-X.y*Z,3+Y*90,0,Math.PI*2),a0.stroke()}let W=Z9.grains.slice(0,Z9.count).sort((X,Y)=>X.z-Y.z);for(let X of W){let Y=1+X.z*4;a0.fillStyle=`rgba(216,202,150,${0.4+(X.z/Z9.d+0.5)*0.5})`,a0.beginPath(),a0.arc(X.x*Z,-X.y*Z,Math.max(1.5,Z9.radius*Z)*Y,0,Math.PI*2),a0.fill()}}else{a0.strokeStyle="#70876233",a0.lineWidth=1;for(let H=-2;H<=2;H++)a0.beginPath(),a0.moveTo(-C8*0.4,H*B8*0.14),a0.lineTo(C8*0.4,H*B8*0.14),a0.stroke();let Z=tY(J),K=_9?1:0.2;a0.strokeStyle=`rgba(209,195,145,${K})`,a0.lineWidth=1.4,a0.beginPath();let $=0,W=0.1;for(let H=0;H<512;H++)W=Math.max(W,Math.abs(q7[H]));for(let H=1;H<128;H++)if(q7[uQ+H-1&511]<=0&&q7[uQ+H&511]>0){$=H;break}for(let H=0;H<384;H++){let N=(H/383-0.5)*C8*0.84,q=-q7[uQ+$+H&511]/Math.max(0.2,W)*B8*0.25;if(H===0)a0.moveTo(N,q);else a0.lineTo(N,q)}a0.stroke();let X=(S6-0.5)*C8*0.7,Y=(0.5-D7)*B8*0.65;a0.fillStyle="#ead9aa",a0.beginPath(),a0.arc(X,Y,4,0,Math.PI*2),a0.fill()}a0.restore()}function JH(J){requestAnimationFrame(JH);let Q=Math.min(0.05,(J-gY)/1000);if(gY=J,ZJ*=Math.exp(-Q/0.06),ZJ<0.004)ZJ=0;if(!v6||J-v6>500)KJ=KJ.map((K)=>K*Math.exp(-Q/0.05)),p$=[0,0,0];let Z=Math.max(ZJ,J<oQ?0.65:0);if(S9&&J-xY>40)xY=J,S9.port.postMessage({type:"snapshot"});if(b0===0||b0===1)sE(J,Q);else if(s9&&m8&&cJ&&J-b$>40){let K=Math.min(0.08,(J-b$)/1000);b$=J,s9.face.update(null,K),s9.update(cJ,cJ.frame(g$),g$,null,{pressure:!1,particles:!1,calipers:!1,grid:!1},K),m8.render(s9.scene,s9.camera)}if(J-m$>30)i9(!1);if(Math.floor(J/100)!==Math.floor((J-Q*1000)/100)){A8();let K=sY,$=_9?nY:K.frequency,W=pQ($),X=Math.max(2,Math.min(b0===2?5:6,Math.floor(W.midi/12)-1));if(b0!==0&&_9&&m9===null&&!b6&&X!==d8)d8=X,tQ();if(I0("note-value").textContent=b0===0?"":`${W.label} ${W.cents>0?"+":""}${W.cents}¢`,document.querySelectorAll("[data-note]").forEach((Y)=>{let H=Number(Y.dataset.note)===W.midi;Y.classList.toggle("sounding",_9&&H),Y.setAttribute("aria-current",_9&&H?"true":"false")}),I0("xy-value").textContent=b0===0?`${Math.round(j6[0]*99).toString().padStart(2,"0")} / ${Math.round(j6[1]*99).toString().padStart(2,"0")}`:`${Math.round($)} HZ`,I0("energy-value").textContent=b0===0?String(Math.round(Z*127)).padStart(3,"0"):b0===1&&lJ!==0?String(Math.round(K.vowel*127)).padStart(3,"0"):["OO","OO–AH","AH","AH–EE","EE"][Math.min(4,Math.floor(K.vowel*5))],I0("z-value").textContent=String(Math.round((b0===0?Math.abs(KJ[2]):b0===2?K.excitation??(4+8*K.breath)/12:K.breath)*100)).padStart(3,"0"),b0===2&&O7){let Y=Math.round((4+8*K.breath)/12*100);I0("excitation").value=String(Y),I0("excitation-output").textContent=`${Y}%`}}}requestAnimationFrame(JH);document.addEventListener("visibilitychange",()=>{if(document.hidden&&S9)_9=!1,i9(!0),A8(),W8?.suspend(),D8("Sound paused while you were away. Tap ▶ to resume.")});I0("share").addEventListener("click",async()=>{try{let J=location.origin+location.pathname;if(navigator.share)await navigator.share({title:"Kaizen Motion",text:"Your phone is an instrument. Shake, tilt, play.",url:J});else await navigator.clipboard.writeText(J),D8("Link copied. Share it anywhere.")}catch(J){if(J.name!=="AbortError")D8("Copy this page’s address to share Motion.")}});var l$=document.createElement("button");l$.textContent="Enable motion";l$.addEventListener("click",async()=>{sJ=await iY().catch(()=>!1),nQ=!0,D8(sJ?"Motion enabled. Hold comfortably and tap CENTRE.":"Motion permission is unavailable here. Open in Safari/Chrome or keep playing with touch."),A8()});document.querySelector("footer nav")?.appendChild(l$);function iJ(){I0("follow-motion").disabled=m9===null&&!b6,I0("note-help").textContent=m9===null?"Tilt or drag freely. Tap a note to hold its pitch.":`Holding ${pQ(QJ(m9)).label}. Tilt still changes tone. “Follow motion” releases pitch.`,document.querySelectorAll("[data-note]").forEach((J)=>J.setAttribute("aria-pressed",String(Number(J.dataset.note)===m9)))}function tQ(){let J=b0===2?880:1760;d8=Math.max(2,Math.min(b0===2?5:6,d8));let Q=I0("note-grid");Q.replaceChildren();for(let Z of bY(d8,J)){let K=document.createElement("button");K.type="button",K.dataset.note=String(Z),K.textContent=pQ(QJ(Z)).label,K.setAttribute("aria-label",`Play ${K.textContent}, ${QJ(Z).toFixed(1)} hertz`),K.addEventListener("click",async()=>{if(!S9){if(await aQ(!1),!S9)return}else await W8?.resume();m9=Z,_9=!0,S6=IJ=Math.log2(QJ(Z)/110)/(b0===2?3:4),iJ(),A8(),i9(!0)}),Q.appendChild(K)}I0("note-octave").textContent=`OCTAVE ${d8}`,I0("octave-down").disabled=d8===2,I0("octave-up").disabled=d8===(b0===2?5:6),iJ()}I0("octave-down").addEventListener("click",()=>{b6=!0,d8--,tQ()});I0("octave-up").addEventListener("click",()=>{b6=!0,d8++,tQ()});I0("excitation").addEventListener("input",()=>{O7=!1,I0("excitation-motion").checked=!1,sQ=Number(I0("excitation").value)/100,I0("excitation-output").textContent=`${Math.round(sQ*100)}%`,i9(!0)});I0("excitation-motion").addEventListener("change",()=>{if(O7=I0("excitation-motion").checked,!O7)sQ=Number(I0("excitation").value)/100;i9(!0)});I0("follow-motion").addEventListener("click",()=>{m9=null,b6=!1,iJ(),i9(!0)});hY();oY(2);yY(()=>({instrument:["Shaker","Synth","CHIMERA"][b0],voice:b0===1?j$[lJ].name:b0===2?"CHIMERA":"Shaker",sensitivity:Math.round(nJ*100),shape:Z9.shape,grainCount:Z9.count}),()=>{_9=!1,i9(!0),A8()});
