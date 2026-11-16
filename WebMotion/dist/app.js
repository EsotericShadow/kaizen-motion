var YW="186",UJ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},NJ={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},HW=0,WZ=1,UW=2;var h7=1,NW=2,H7=3,U7=0,s9=1,z8=2,k8=0,f7=1,XZ=2,YZ=3,HZ=4,T6=5;var N7=100,GW=101,qW=102,EW=103,w6=104,FW=200,DW=201,OW=202,RW=203,MW=204,LW=205,IW=206,VW=207,BW=208,CW=209,AW=210,zW=211,kW=212,PW=213,_W=214,TW=0,wW=1,SW=2,UZ=3,jW=4,vW=5,bW=6,yW=7,hW=0,fW=1,xW=2,R8=0,NZ=1,GZ=2,qZ=3,EZ=4,FZ=5,DZ=6,OZ=7;var G7=301,BJ=302,S6=303,j6=304,x7=306,gW=1000,v6=1001,pW=1002,GJ=1003,mW=1004;var g7=1005;var i9=1006,b6=1007;var CJ=1008;var M8=1009,dW=1010,uW=1011,p7=1012,RZ=1013,qJ=1014,i8=1015,P8=1016,MZ=1017,LZ=1018,q7=1020,lW=35902,cW=35899,nW=1021,sW=1022,_8=1023,AJ=1026,zJ=1027,iW=1028,IZ=1029,kJ=1030,VZ=1031;var BZ=1033,y6=33776,h6=33777,f6=33778,x6=33779,CZ=35840,AZ=35841,zZ=35842,kZ=35843,PZ=36196,_Z=37492,TZ=37496,wZ=37488,SZ=37489,g6=37490,jZ=37491,vZ=37808,bZ=37809,yZ=37810,hZ=37811,fZ=37812,xZ=37813,gZ=37814,pZ=37815,mZ=37816,dZ=37817,uZ=37818,lZ=37819,cZ=37820,nZ=37821,sZ=36492,iZ=36494,oZ=36495,aZ=36283,rZ=36284,p6=36285,tZ=36286;var eZ=0,oW=1,PJ="",aW="srgb",JK="srgb-linear",QK="linear",G9="srgb";var rW=512,tW=513,eW=514,m6=515,JX=516,QX=517,d6=518,ZX=519;var u6=35048;var ZK="300 es",KK=2000;function jY(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function vY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function b7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function KX(){let J=b7("canvas");return J.style.display="block",J}var g$={},X7=null;function y7(...J){let Q="THREE."+J.shift();if(X7)X7("log",Q,...J);else console.log(Q,...J)}function $X(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let Z=J[1];if(Z&&Z.isStackTrace)J[0]+=" "+Z.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function j0(...J){J=$X(J);let Q="THREE."+J.shift();if(X7)X7("warn",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.warn(Z.getError(Q));else console.warn(Q,...J)}}function b0(...J){J=$X(J);let Q="THREE."+J.shift();if(X7)X7("error",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.error(Z.getError(Q));else console.error(Q,...J)}}function VJ(...J){let Q=J.join(" ");if(Q in g$)return;g$[Q]=!0,j0(...J)}function WX(J,Q,Z){return new Promise(function(K,$){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:$();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Z);break;default:K()}}setTimeout(W,Z)})}var XX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class T8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let K=Z[J];if(K!==void 0){let $=K.indexOf(Q);if($!==-1)K.splice($,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let K=Z.slice(0);for(let $=0,W=K.length;$<W;$++)K[$].call(this,J);J.target=null}}}var v9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],p$=1234567,j7=Math.PI/180,Y7=180/Math.PI;function n8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(v9[J&255]+v9[J>>8&255]+v9[J>>16&255]+v9[J>>24&255]+"-"+v9[Q&255]+v9[Q>>8&255]+"-"+v9[Q>>16&15|64]+v9[Q>>24&255]+"-"+v9[Z&63|128]+v9[Z>>8&255]+"-"+v9[Z>>16&255]+v9[Z>>24&255]+v9[K&255]+v9[K>>8&255]+v9[K>>16&255]+v9[K>>24&255]).toLowerCase()}function g0(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function $K(J,Q){return(J%Q+Q)%Q}function bY(J,Q,Z,K,$){return K+(J-Q)*($-K)/(Z-Q)}function yY(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function v7(J,Q,Z){return(1-Z)*J+Z*Q}function hY(J,Q,Z,K){return v7(J,Q,1-Math.exp(-Z*K))}function fY(J,Q=1){return Q-Math.abs($K(J,Q*2)-Q)}function xY(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function gY(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function pY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function mY(J,Q){return J+Math.random()*(Q-J)}function dY(J){return J*(0.5-Math.random())}function uY(J){if(J!==void 0)p$=J;let Q=p$+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function lY(J){return J*j7}function cY(J){return J*Y7}function nY(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function sY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function iY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function oY(J,Q,Z,K,$){let{cos:W,sin:X}=Math,Y=W(Z/2),H=X(Z/2),N=W((Q+K)/2),q=X((Q+K)/2),U=W((Q-K)/2),G=X((Q-K)/2),D=W((K-Q)/2),O=X((K-Q)/2);switch($){case"XYX":J.set(Y*q,H*U,H*G,Y*N);break;case"YZY":J.set(H*G,Y*q,H*U,Y*N);break;case"ZXZ":J.set(H*U,H*G,Y*q,Y*N);break;case"XZX":J.set(Y*q,H*O,H*D,Y*N);break;case"YXY":J.set(H*D,Y*q,H*O,Y*N);break;case"ZYZ":J.set(H*O,H*D,Y*q,Y*N);break;default:j0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+$)}}function O8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function K9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var m7={DEG2RAD:j7,RAD2DEG:Y7,generateUUID:n8,clamp:g0,euclideanModulo:$K,mapLinear:bY,inverseLerp:yY,lerp:v7,damp:hY,pingpong:fY,smoothstep:xY,smootherstep:gY,randInt:pY,randFloat:mY,randFloatSpread:dY,seededRandom:uY,degToRad:lY,radToDeg:cY,isPowerOfTwo:nY,ceilPowerOfTwo:sY,floorPowerOfTwo:iY,setQuaternionFromProperEuler:oY,normalize:K9,denormalize:O8};class h0{static{h0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*Z+K[6],this.y=K[1]*Q+K[4]*Z+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(g0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(g0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=this.x-J.x,W=this.y-J.y;return this.x=$*Z-W*K+J.x,this.y=$*K+W*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class o9{constructor(J=0,Q=0,Z=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=K}static slerpFlat(J,Q,Z,K,$,W,X){let Y=Z[K+0],H=Z[K+1],N=Z[K+2],q=Z[K+3],U=$[W+0],G=$[W+1],D=$[W+2],O=$[W+3];if(q!==O||Y!==U||H!==G||N!==D){let V=Y*U+H*G+N*D+q*O;if(V<0)U=-U,G=-G,D=-D,O=-O,V=-V;let E=1-X;if(V<0.9995){let F=Math.acos(V),C=Math.sin(F);E=Math.sin(E*F)/C,X=Math.sin(X*F)/C,Y=Y*E+U*X,H=H*E+G*X,N=N*E+D*X,q=q*E+O*X}else{Y=Y*E+U*X,H=H*E+G*X,N=N*E+D*X,q=q*E+O*X;let F=1/Math.sqrt(Y*Y+H*H+N*N+q*q);Y*=F,H*=F,N*=F,q*=F}}J[Q]=Y,J[Q+1]=H,J[Q+2]=N,J[Q+3]=q}static multiplyQuaternionsFlat(J,Q,Z,K,$,W){let X=Z[K],Y=Z[K+1],H=Z[K+2],N=Z[K+3],q=$[W],U=$[W+1],G=$[W+2],D=$[W+3];return J[Q]=X*D+N*q+Y*G-H*U,J[Q+1]=Y*D+N*U+H*q-X*G,J[Q+2]=H*D+N*G+X*U-Y*q,J[Q+3]=N*D-X*q-Y*U-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,K){return this._x=J,this._y=Q,this._z=Z,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:K,_z:$,_order:W}=J,X=Math.cos,Y=Math.sin,H=X(Z/2),N=X(K/2),q=X($/2),U=Y(Z/2),G=Y(K/2),D=Y($/2);switch(W){case"XYZ":this._x=U*N*q+H*G*D,this._y=H*G*q-U*N*D,this._z=H*N*D+U*G*q,this._w=H*N*q-U*G*D;break;case"YXZ":this._x=U*N*q+H*G*D,this._y=H*G*q-U*N*D,this._z=H*N*D-U*G*q,this._w=H*N*q+U*G*D;break;case"ZXY":this._x=U*N*q-H*G*D,this._y=H*G*q+U*N*D,this._z=H*N*D+U*G*q,this._w=H*N*q-U*G*D;break;case"ZYX":this._x=U*N*q-H*G*D,this._y=H*G*q+U*N*D,this._z=H*N*D-U*G*q,this._w=H*N*q+U*G*D;break;case"YZX":this._x=U*N*q+H*G*D,this._y=H*G*q+U*N*D,this._z=H*N*D-U*G*q,this._w=H*N*q-U*G*D;break;case"XZY":this._x=U*N*q-H*G*D,this._y=H*G*q-U*N*D,this._z=H*N*D+U*G*q,this._w=H*N*q+U*G*D;break;default:j0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,K=Math.sin(Z);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],K=Q[4],$=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],N=Q[6],q=Q[10],U=Z+X+q;if(U>0){let G=0.5/Math.sqrt(U+1);this._w=0.25/G,this._x=(N-Y)*G,this._y=($-H)*G,this._z=(W-K)*G}else if(Z>X&&Z>q){let G=2*Math.sqrt(1+Z-X-q);this._w=(N-Y)/G,this._x=0.25*G,this._y=(K+W)/G,this._z=($+H)/G}else if(X>q){let G=2*Math.sqrt(1+X-Z-q);this._w=($-H)/G,this._x=(K+W)/G,this._y=0.25*G,this._z=(Y+N)/G}else{let G=2*Math.sqrt(1+q-Z-X);this._w=(W-K)/G,this._x=($+H)/G,this._y=(Y+N)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(g0(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let K=Math.min(1,Q/Z);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,N=Q._w;return this._x=Z*N+W*X+K*H-$*Y,this._y=K*N+W*Y+$*X-Z*H,this._z=$*N+W*H+Z*Y-K*X,this._w=W*N-Z*X-K*Y-$*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=this.dot(J);if(X<0)Z=-Z,K=-K,$=-$,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),N=Math.sin(H);Y=Math.sin(Y*H)/N,Q=Math.sin(Q*H)/N,this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),K=Math.sqrt(1-Z),$=Math.sqrt(Z);return this.set(K*Math.sin(J),K*Math.cos(J),$*Math.sin(Q),$*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{x.prototype.isVector3=!0}constructor(J=0,Q=0,Z=0){this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(m$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(m$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6]*K,this.y=$[1]*Q+$[4]*Z+$[7]*K,this.z=$[2]*Q+$[5]*Z+$[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements,W=1/($[3]*Q+$[7]*Z+$[11]*K+$[15]);return this.x=($[0]*Q+$[4]*Z+$[8]*K+$[12])*W,this.y=($[1]*Q+$[5]*Z+$[9]*K+$[13])*W,this.z=($[2]*Q+$[6]*Z+$[10]*K+$[14])*W,this}applyQuaternion(J){let Q=this.x,Z=this.y,K=this.z,$=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*K-X*Z),N=2*(X*Q-$*K),q=2*($*Z-W*Q);return this.x=Q+Y*H+W*q-X*N,this.y=Z+Y*N+X*H-$*q,this.z=K+Y*q+$*N-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[4]*Z+$[8]*K,this.y=$[1]*Q+$[5]*Z+$[9]*K,this.z=$[2]*Q+$[6]*Z+$[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(g0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:K,z:$}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-$*X,this.y=$*W-Z*Y,this.z=Z*X-K*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return xQ.copy(this).projectOnVector(J),this.sub(xQ)}reflect(J){return this.sub(xQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(g0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,K=this.z-J.z;return Q*Q+Z*Z+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let K=Math.sin(Q)*J;return this.x=K*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=K*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var xQ=new x,m$=new o9;class f0{static{f0.prototype.isMatrix3=!0}constructor(J,Q,Z,K,$,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H)}set(J,Q,Z,K,$,W,X,Y,H){let N=this.elements;return N[0]=J,N[1]=K,N[2]=X,N[3]=Q,N[4]=$,N[5]=Y,N[6]=Z,N[7]=W,N[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[3],Y=Z[6],H=Z[1],N=Z[4],q=Z[7],U=Z[2],G=Z[5],D=Z[8],O=K[0],V=K[3],E=K[6],F=K[1],C=K[4],_=K[7],I=K[2],A=K[5],k=K[8];return $[0]=W*O+X*F+Y*I,$[3]=W*V+X*C+Y*A,$[6]=W*E+X*_+Y*k,$[1]=H*O+N*F+q*I,$[4]=H*V+N*C+q*A,$[7]=H*E+N*_+q*k,$[2]=U*O+G*F+D*I,$[5]=U*V+G*C+D*A,$[8]=U*E+G*_+D*k,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8];return Q*W*N-Q*X*H-Z*$*N+Z*X*Y+K*$*H-K*W*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=N*W-X*H,U=X*Y-N*$,G=H*$-W*Y,D=Q*q+Z*U+K*G;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/D;return J[0]=q*O,J[1]=(K*H-N*Z)*O,J[2]=(X*Z-K*W)*O,J[3]=U*O,J[4]=(N*Q-K*Y)*O,J[5]=(K*$-X*Q)*O,J[6]=G*O,J[7]=(Z*Y-H*Q)*O,J[8]=(W*Q-Z*$)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,K,$,W,X){let Y=Math.cos($),H=Math.sin($);return this.set(Z*Y,Z*H,-Z*(Y*W+H*X)+W+J,-K*H,K*Y,-K*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return VJ("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gQ.makeScale(J,Q)),this}rotate(J){return VJ("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gQ.makeRotation(-J)),this}translate(J,Q){return VJ("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<9;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var gQ=new f0,d$=new f0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),u$=new f0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function aY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function($,W,X){if(this.enabled===!1||W===X||!W||!X)return $;if(this.spaces[W].transfer==="srgb")$.r=s8($.r),$.g=s8($.g),$.b=s8($.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)$.applyMatrix3(this.spaces[W].toXYZ),$.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")$.r=W7($.r),$.g=W7($.g),$.b=W7($.b);return $},workingToColorSpace:function($,W){return this.convert($,this.workingColorSpace,W)},colorSpaceToWorking:function($,W){return this.convert($,W,this.workingColorSpace)},getPrimaries:function($){return this.spaces[$].primaries},getTransfer:function($){if($==="")return"linear";return this.spaces[$].transfer},getToneMappingMode:function($){return this.spaces[$].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function($,W=this.workingColorSpace){return $.fromArray(this.spaces[W].luminanceCoefficients)},define:function($){Object.assign(this.spaces,$)},_getMatrix:function($,W,X){return $.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function($){return this.spaces[$].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function($=this.workingColorSpace){return this.spaces[$].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function($,W){return VJ("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace($,W)},toWorkingColorSpace:function($,W){return VJ("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking($,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:d$,fromXYZ:u$,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:d$,fromXYZ:u$,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var i0=aY();function s8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function W7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var lJ;class WK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(lJ===void 0)lJ=b7("canvas");lJ.width=J.width,lJ.height=J.height;let K=lJ.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);Z=lJ}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=b7("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let K=Z.getImageData(0,0,J.width,J.height),$=K.data;for(let W=0;W<$.length;W++)$[W]=s8($[W]/255)*255;return Z.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(s8(Q[Z]/255)*255);else Q[Z]=s8(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return j0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var rY=0;class d7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rY++}),this.uuid=n8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement!=="undefined"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame!=="undefined"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},K=this.data;if(K!==null){let $;if(Array.isArray(K)){$=[];for(let W=0,X=K.length;W<X;W++)if(K[W].isDataTexture)$.push(pQ(K[W].image));else $.push(pQ(K[W]))}else $=pQ(K);Z.url=$}if(!Q)J.images[this.uuid]=Z;return Z}}function pQ(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return WK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return j0("Texture: Unable to serialize Texture."),{}}var tY=0,mQ=new x;class y9 extends T8{constructor(J=y9.DEFAULT_IMAGE,Q=y9.DEFAULT_MAPPING,Z=1001,K=1001,$=1006,W=1008,X=1023,Y=1009,H=y9.DEFAULT_ANISOTROPY,N=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:tY++}),this.uuid=n8(),this.name="",this.source=new d7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=K,this.magFilter=$,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new h0(0,0),this.repeat=new h0(1,1),this.center=new h0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new f0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=N,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mQ).x}get height(){return this.source.getSize(mQ).y}get depth(){return this.source.getSize(mQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){j0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){j0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&Z&&(K.isVector2&&Z.isVector2))K.copy(Z);else if(K&&Z&&(K.isVector3&&Z.isVector3))K.copy(Z);else if(K&&Z&&(K.isMatrix3&&Z.isMatrix3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}y9.DEFAULT_IMAGE=null;y9.DEFAULT_MAPPING=300;y9.DEFAULT_ANISOTROPY=1;class W9{static{W9.prototype.isVector4=!0}constructor(J=0,Q=0,Z=0,K=1){this.x=J,this.y=Q,this.z=Z,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,K){return this.x=J,this.y=Q,this.z=Z,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*K+W[12]*$,this.y=W[1]*Q+W[5]*Z+W[9]*K+W[13]*$,this.z=W[2]*Q+W[6]*Z+W[10]*K+W[14]*$,this.w=W[3]*Q+W[7]*Z+W[11]*K+W[15]*$,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,K,$,W=0.01,X=0.1,Y=J.elements,H=Y[0],N=Y[4],q=Y[8],U=Y[1],G=Y[5],D=Y[9],O=Y[2],V=Y[6],E=Y[10];if(Math.abs(N-U)<0.01&&Math.abs(q-O)<0.01&&Math.abs(D-V)<0.01){if(Math.abs(N+U)<0.1&&Math.abs(q+O)<0.1&&Math.abs(D+V)<0.1&&Math.abs(H+G+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(H+1)/2,_=(G+1)/2,I=(E+1)/2,A=(N+U)/4,k=(q+O)/4,P=(D+V)/4;if(C>_&&C>I)if(C<0.01)Z=0,K=0.707106781,$=0.707106781;else Z=Math.sqrt(C),K=A/Z,$=k/Z;else if(_>I)if(_<0.01)Z=0.707106781,K=0,$=0.707106781;else K=Math.sqrt(_),Z=A/K,$=P/K;else if(I<0.01)Z=0.707106781,K=0.707106781,$=0;else $=Math.sqrt(I),Z=k/$,K=P/$;return this.set(Z,K,$,Q),this}let F=Math.sqrt((V-D)*(V-D)+(q-O)*(q-O)+(U-N)*(U-N));if(Math.abs(F)<0.001)F=1;return this.x=(V-D)/F,this.y=(q-O)/F,this.z=(U-N)/F,this.w=Math.acos((H+G+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this.w=g0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this.w=g0(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(g0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XK extends T8{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new W9(0,0,J,Q),this.scissorTest=!1,this.viewport=new W9(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:Z.depth},$=new y9(K),W=Z.count;for(let X=0;X<W;X++)this.textures[X]=$.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveColorBuffer=Z.resolveColorBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.storeMultisampledColorBuffer=Z.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Z.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Z.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview,this.useArrayDepthTexture=Z.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let K=0,$=this.textures.length;K<$;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=Z,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new d7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class J8 extends XK{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class l6 extends y9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class YK extends y9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class R9{static{R9.prototype.isMatrix4=!0}constructor(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,D,O,V){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,D,O,V)}set(J,Q,Z,K,$,W,X,Y,H,N,q,U,G,D,O,V){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=Z,E[12]=K,E[1]=$,E[5]=W,E[9]=X,E[13]=Y,E[2]=H,E[6]=N,E[10]=q,E[14]=U,E[3]=G,E[7]=D,E[11]=O,E[15]=V,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new R9().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),Z.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,Z=J.elements,K=1/cJ.setFromMatrixColumn(J,0).length(),$=1/cJ.setFromMatrixColumn(J,1).length(),W=1/cJ.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*K,Q[1]=Z[1]*K,Q[2]=Z[2]*K,Q[3]=0,Q[4]=Z[4]*$,Q[5]=Z[5]*$,Q[6]=Z[6]*$,Q[7]=0,Q[8]=Z[8]*W,Q[9]=Z[9]*W,Q[10]=Z[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z,W=Math.cos(Z),X=Math.sin(Z),Y=Math.cos(K),H=Math.sin(K),N=Math.cos($),q=Math.sin($);if(J.order==="XYZ"){let U=W*N,G=W*q,D=X*N,O=X*q;Q[0]=Y*N,Q[4]=-Y*q,Q[8]=H,Q[1]=G+D*H,Q[5]=U-O*H,Q[9]=-X*Y,Q[2]=O-U*H,Q[6]=D+G*H,Q[10]=W*Y}else if(J.order==="YXZ"){let U=Y*N,G=Y*q,D=H*N,O=H*q;Q[0]=U+O*X,Q[4]=D*X-G,Q[8]=W*H,Q[1]=W*q,Q[5]=W*N,Q[9]=-X,Q[2]=G*X-D,Q[6]=O+U*X,Q[10]=W*Y}else if(J.order==="ZXY"){let U=Y*N,G=Y*q,D=H*N,O=H*q;Q[0]=U-O*X,Q[4]=-W*q,Q[8]=D+G*X,Q[1]=G+D*X,Q[5]=W*N,Q[9]=O-U*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let U=W*N,G=W*q,D=X*N,O=X*q;Q[0]=Y*N,Q[4]=D*H-G,Q[8]=U*H+O,Q[1]=Y*q,Q[5]=O*H+U,Q[9]=G*H-D,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let U=W*Y,G=W*H,D=X*Y,O=X*H;Q[0]=Y*N,Q[4]=O-U*q,Q[8]=D*q+G,Q[1]=q,Q[5]=W*N,Q[9]=-X*N,Q[2]=-H*N,Q[6]=G*q+D,Q[10]=U-O*q}else if(J.order==="XZY"){let U=W*Y,G=W*H,D=X*Y,O=X*H;Q[0]=Y*N,Q[4]=-q,Q[8]=H*N,Q[1]=U*q+O,Q[5]=W*N,Q[9]=G*q-D,Q[2]=D*q-G,Q[6]=X*N,Q[10]=O*q+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(eY,J,JH)}lookAt(J,Q,Z){let K=this.elements;if(t9.subVectors(J,Q),t9.lengthSq()===0)t9.z=1;if(t9.normalize(),KJ.crossVectors(Z,t9),KJ.lengthSq()===0){if(Math.abs(Z.z)===1)t9.x+=0.0001;else t9.z+=0.0001;t9.normalize(),KJ.crossVectors(Z,t9)}return KJ.normalize(),U6.crossVectors(t9,KJ),K[0]=KJ.x,K[4]=U6.x,K[8]=t9.x,K[1]=KJ.y,K[5]=U6.y,K[9]=t9.y,K[2]=KJ.z,K[6]=U6.z,K[10]=t9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[4],Y=Z[8],H=Z[12],N=Z[1],q=Z[5],U=Z[9],G=Z[13],D=Z[2],O=Z[6],V=Z[10],E=Z[14],F=Z[3],C=Z[7],_=Z[11],I=Z[15],A=K[0],k=K[4],P=K[8],L=K[12],B=K[1],m=K[5],j=K[9],y=K[13],d=K[2],T=K[6],S=K[10],n=K[14],u=K[3],$0=K[7],i=K[11],Z0=K[15];return $[0]=W*A+X*B+Y*d+H*u,$[4]=W*k+X*m+Y*T+H*$0,$[8]=W*P+X*j+Y*S+H*i,$[12]=W*L+X*y+Y*n+H*Z0,$[1]=N*A+q*B+U*d+G*u,$[5]=N*k+q*m+U*T+G*$0,$[9]=N*P+q*j+U*S+G*i,$[13]=N*L+q*y+U*n+G*Z0,$[2]=D*A+O*B+V*d+E*u,$[6]=D*k+O*m+V*T+E*$0,$[10]=D*P+O*j+V*S+E*i,$[14]=D*L+O*y+V*n+E*Z0,$[3]=F*A+C*B+_*d+I*u,$[7]=F*k+C*m+_*T+I*$0,$[11]=F*P+C*j+_*S+I*i,$[15]=F*L+C*y+_*n+I*Z0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],N=J[2],q=J[6],U=J[10],G=J[14],D=J[3],O=J[7],V=J[11],E=J[15],F=Y*G-H*U,C=X*G-H*q,_=X*U-Y*q,I=W*G-H*N,A=W*U-Y*N,k=W*q-X*N;return Q*(O*F-V*C+E*_)-Z*(D*F-V*I+E*A)+K*(D*C-O*I+E*k)-$*(D*_-O*A+V*k)}determinantAffine(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],N=J[10];return Q*(W*N-X*H)-Z*($*N-X*Y)+K*($*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=J[9],U=J[10],G=J[11],D=J[12],O=J[13],V=J[14],E=J[15],F=Q*X-Z*W,C=Q*Y-K*W,_=Q*H-$*W,I=Z*Y-K*X,A=Z*H-$*X,k=K*H-$*Y,P=N*O-q*D,L=N*V-U*D,B=N*E-G*D,m=q*V-U*O,j=q*E-G*O,y=U*E-G*V,d=F*y-C*j+_*m+I*B-A*L+k*P;if(d===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/d;return J[0]=(X*y-Y*j+H*m)*T,J[1]=(K*j-Z*y-$*m)*T,J[2]=(O*k-V*A+E*I)*T,J[3]=(U*A-q*k-G*I)*T,J[4]=(Y*B-W*y-H*L)*T,J[5]=(Q*y-K*B+$*L)*T,J[6]=(V*_-D*k-E*C)*T,J[7]=(N*k-U*_+G*C)*T,J[8]=(W*j-X*B+H*P)*T,J[9]=(Z*B-Q*j-$*P)*T,J[10]=(D*A-O*_+E*F)*T,J[11]=(q*_-N*A-G*F)*T,J[12]=(X*L-W*m-Y*P)*T,J[13]=(Q*m-Z*L+K*P)*T,J[14]=(O*C-D*I-V*F)*T,J[15]=(N*I-q*C+U*F)*T,this}scale(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z;return Q[0]*=Z,Q[4]*=K,Q[8]*=$,Q[1]*=Z,Q[5]*=K,Q[9]*=$,Q[2]*=Z,Q[6]*=K,Q[10]*=$,Q[3]*=Z,Q[7]*=K,Q[11]*=$,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,K))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=1-Z,W=J.x,X=J.y,Y=J.z,H=$*W,N=$*X;return this.set(H*W+Z,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,N*X+Z,N*Y-K*W,0,H*Y-K*X,N*Y+K*W,$*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,K,$,W){return this.set(1,Z,$,0,J,1,W,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,Z){let K=this.elements,$=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=$+$,N=W+W,q=X+X,U=$*H,G=$*N,D=$*q,O=W*N,V=W*q,E=X*q,F=Y*H,C=Y*N,_=Y*q,I=Z.x,A=Z.y,k=Z.z;return K[0]=(1-(O+E))*I,K[1]=(G+_)*I,K[2]=(D-C)*I,K[3]=0,K[4]=(G-_)*A,K[5]=(1-(U+E))*A,K[6]=(V+F)*A,K[7]=0,K[8]=(D+C)*k,K[9]=(V-F)*k,K[10]=(1-(U+O))*k,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,Z){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let $=this.determinantAffine();if($===0)return Z.set(1,1,1),Q.identity(),this;let W=cJ.set(K[0],K[1],K[2]).length(),X=cJ.set(K[4],K[5],K[6]).length(),Y=cJ.set(K[8],K[9],K[10]).length();if($<0)W=-W;E8.copy(this);let H=1/W,N=1/X,q=1/Y;return E8.elements[0]*=H,E8.elements[1]*=H,E8.elements[2]*=H,E8.elements[4]*=N,E8.elements[5]*=N,E8.elements[6]*=N,E8.elements[8]*=q,E8.elements[9]*=q,E8.elements[10]*=q,Q.setFromRotationMatrix(E8),Z.x=W,Z.y=X,Z.z=Y,this}makePerspective(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,N=2*$/(Q-J),q=2*$/(Z-K),U=(Q+J)/(Q-J),G=(Z+K)/(Z-K),D,O;if(Y)D=$/(W-$),O=W*$/(W-$);else if(X===2000)D=-(W+$)/(W-$),O=-2*W*$/(W-$);else if(X===2001)D=-W/(W-$),O=-W*$/(W-$);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=U,H[12]=0,H[1]=0,H[5]=q,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=D,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,N=2/(Q-J),q=2/(Z-K),U=-(Q+J)/(Q-J),G=-(Z+K)/(Z-K),D,O;if(Y)D=1/(W-$),O=W/(W-$);else if(X===2000)D=-2/(W-$),O=-(W+$)/(W-$);else if(X===2001)D=-1/(W-$),O=-$/(W-$);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=0,H[12]=U,H[1]=0,H[5]=q,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=D,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<16;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var cJ=new x,E8=new R9,eY=new x(0,0,0),JH=new x(1,1,1),KJ=new x,U6=new x,t9=new x,l$=new R9,c$=new o9;class A8{constructor(J=0,Q=0,Z=0,K=A8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,K=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let K=J.elements,$=K[0],W=K[4],X=K[8],Y=K[1],H=K[5],N=K[9],q=K[2],U=K[6],G=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(g0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-N,G),this._z=Math.atan2(-W,$);else this._x=Math.atan2(U,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-g0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(X,G),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-q,$),this._z=0;break;case"ZXY":if(this._x=Math.asin(g0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-q,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,$);break;case"ZYX":if(this._y=Math.asin(-g0(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(U,G),this._z=Math.atan2(Y,$);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(g0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-N,H),this._y=Math.atan2(-q,$);else this._x=0,this._y=Math.atan2(X,G);break;case"XZY":if(this._z=Math.asin(-g0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(U,H),this._y=Math.atan2(X,$);else this._x=Math.atan2(-N,G),this._y=0;break;default:j0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return l$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(l$,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return c$.setFromEuler(this),this.setFromQuaternion(c$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}A8.DEFAULT_ORDER="XYZ";class c6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var QH=0,n$=new x,nJ=new o9,m8=new R9,N6=new x,_7=new x,ZH=new x,KH=new o9,s$=new x(1,0,0),i$=new x(0,1,0),o$=new x(0,0,1),a$={type:"added"},$H={type:"removed"},sJ={type:"childadded",child:null},dQ={type:"childremoved",child:null};class n9 extends T8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:QH++}),this.uuid=n8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n9.DEFAULT_UP.clone();let J=new x,Q=new A8,Z=new o9,K=new x(1,1,1);function $(){Z.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange($),Z._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new R9},normalMatrix:{value:new f0}}),this.matrix=new R9,this.matrixWorld=new R9,this.matrixAutoUpdate=n9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return nJ.setFromAxisAngle(J,Q),this.quaternion.multiply(nJ),this}rotateOnWorldAxis(J,Q){return nJ.setFromAxisAngle(J,Q),this.quaternion.premultiply(nJ),this}rotateX(J){return this.rotateOnAxis(s$,J)}rotateY(J){return this.rotateOnAxis(i$,J)}rotateZ(J){return this.rotateOnAxis(o$,J)}translateOnAxis(J,Q){return n$.copy(J).applyQuaternion(this.quaternion),this.position.add(n$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(s$,J)}translateY(J){return this.translateOnAxis(i$,J)}translateZ(J){return this.translateOnAxis(o$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(m8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)N6.copy(J);else N6.set(J,Q,Z);let K=this.parent;if(this.updateWorldMatrix(!0,!1),_7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)m8.lookAt(_7,N6,this.up);else m8.lookAt(N6,_7,this.up);if(this.quaternion.setFromRotationMatrix(m8),K)m8.extractRotation(K.matrixWorld),nJ.setFromRotationMatrix(m8),this.quaternion.premultiply(nJ.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return b0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(a$),sJ.child=J,this.dispatchEvent(sJ),sJ.child=null;else b0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent($H),dQ.child=J,this.dispatchEvent(dQ),dQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),m8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),m8.multiply(J.parent.matrixWorld);return J.applyMatrix4(m8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(a$),sJ.child=J,this.dispatchEvent(sJ),sJ.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,K=this.children.length;Z<K;Z++){let W=this.children[Z].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let K=this.children;for(let $=0,W=K.length;$<W;$++)K[$].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_7,J,ZH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_7,KH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:Z,z:K}=J,$=this.matrix.elements;$[12]+=Q-$[0]*Q-$[4]*Z-$[8]*K,$[13]+=Z-$[1]*Q-$[5]*Z-$[9]*K,$[14]+=K-$[2]*Q-$[6]*Z-$[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q,Z=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Z){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Z=!0}if(Q===!0){let $=this.children;for(let W=0,X=$.length;W<X;W++)$[W].updateWorldMatrix(!1,!0,Z)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,K.name=this.name,K.castShadow=this.castShadow,K.receiveShadow=this.receiveShadow,K.visible=this.visible,K.frustumCulled=this.frustumCulled,K.renderOrder=this.renderOrder,K.static=this.static,K.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function $(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=$(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,N=Y.length;H<N;H++){let q=Y[H];$(J.shapes,q)}else $(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)$(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push($(J.materials,this.material[Y]));K.material=X}else K.material=$(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push($(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),N=W(J.images),q=W(J.shapes),U=W(J.skeletons),G=W(J.animations),D=W(J.nodes);if(X.length>0)Z.geometries=X;if(Y.length>0)Z.materials=Y;if(H.length>0)Z.textures=H;if(N.length>0)Z.images=N;if(q.length>0)Z.shapes=q;if(U.length>0)Z.skeletons=U;if(G.length>0)Z.animations=G;if(D.length>0)Z.nodes=D}return Z.object=K,Z;function W(X){let Y=[];for(let H in X){let N=X[H];delete N.metadata,Y.push(N)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let K=J.children[Z];this.add(K.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}n9.DEFAULT_UP=new x(0,1,0);n9.DEFAULT_MATRIX_AUTO_UPDATE=!0;n9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class HJ extends n9{constructor(){super();this.isGroup=!0,this.type="Group"}}var WH={type:"move"};class u7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new HJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new HJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new HJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let K=null,$=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let V=Q.getJointPose(O,Z),E=this._getHandJoint(H,O);if(V!==null)E.matrix.fromArray(V.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=V.radius;E.visible=V!==null}let N=H.joints["index-finger-tip"],q=H.joints["thumb-tip"],U=N.position.distanceTo(q.position),G=0.02,D=0.005;if(H.inputState.pinching&&U>G+D)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&U<=G-D)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if($=Q.getPose(J.gripSpace,Z),$!==null){if(Y.matrix.fromArray($.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,$.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy($.linearVelocity);else Y.hasLinearVelocity=!1;if($.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy($.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,Z),K===null&&$!==null)K=$;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(WH)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=$!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new HJ;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var YX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$J={h:0,s:0,l:0},G6={h:0,s:0,l:0};function uQ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class t0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,i0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,K=i0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,i0.colorSpaceToWorking(this,K),this}setHSL(J,Q,Z,K=i0.workingColorSpace){if(J=$K(J,1),Q=g0(Q,0,1),Z=g0(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let $=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,W=2*Z-$;this.r=uQ(W,$,J+0.3333333333333333),this.g=uQ(W,$,J),this.b=uQ(W,$,J-0.3333333333333333)}return i0.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function Z($){if($===void 0)return;if(parseFloat($)<1)j0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let $,W=K[1],X=K[2];switch(W){case"rgb":case"rgba":if($=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(255,parseInt($[1],10))/255,Math.min(255,parseInt($[2],10))/255,Math.min(255,parseInt($[3],10))/255,Q);if($=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(100,parseInt($[1],10))/100,Math.min(100,parseInt($[2],10))/100,Math.min(100,parseInt($[3],10))/100,Q);break;case"hsl":case"hsla":if($=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z($[4]),this.setHSL(parseFloat($[1])/360,parseFloat($[2])/100,parseFloat($[3])/100,Q);break;default:j0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let $=K[1],W=$.length;if(W===3)return this.setRGB(parseInt($.charAt(0),16)/15,parseInt($.charAt(1),16)/15,parseInt($.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt($,16),Q);else j0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=YX[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else j0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=s8(J.r),this.g=s8(J.g),this.b=s8(J.b),this}copyLinearToSRGB(J){return this.r=W7(J.r),this.g=W7(J.g),this.b=W7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return i0.workingToColorSpace(b9.copy(this),J),Math.round(g0(b9.r*255,0,255))*65536+Math.round(g0(b9.g*255,0,255))*256+Math.round(g0(b9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=i0.workingColorSpace){i0.workingToColorSpace(b9.copy(this),Q);let{r:Z,g:K,b:$}=b9,W=Math.max(Z,K,$),X=Math.min(Z,K,$),Y,H,N=(X+W)/2;if(X===W)Y=0,H=0;else{let q=W-X;switch(H=N<=0.5?q/(W+X):q/(2-W-X),W){case Z:Y=(K-$)/q+(K<$?6:0);break;case K:Y=($-Z)/q+2;break;case $:Y=(Z-K)/q+4;break}Y/=6}return J.h=Y,J.s=H,J.l=N,J}getRGB(J,Q=i0.workingColorSpace){return i0.workingToColorSpace(b9.copy(this),Q),J.r=b9.r,J.g=b9.g,J.b=b9.b,J}getStyle(J="srgb"){i0.workingToColorSpace(b9.copy(this),J);let{r:Q,g:Z,b:K}=b9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round(K*255)})`}offsetHSL(J,Q,Z){return this.getHSL($J),this.setHSL($J.h+J,$J.s+Q,$J.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL($J),J.getHSL(G6);let Z=v7($J.h,G6.h,Q),K=v7($J.s,G6.s,Q),$=v7($J.l,G6.l,Q);return this.setHSL(Z,K,$),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,K=this.b,$=J.elements;return this.r=$[0]*Q+$[3]*Z+$[6]*K,this.g=$[1]*Q+$[4]*Z+$[7]*K,this.b=$[2]*Q+$[5]*Z+$[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var b9=new t0;t0.NAMES=YX;class l7{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new t0(J),this.near=Q,this.far=Z}clone(){return new l7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class n6 extends n9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new A8,this.environmentIntensity=1,this.environmentRotation=new A8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var F8=new x,d8=new x,lQ=new x,u8=new x,iJ=new x,oJ=new x,r$=new x,cQ=new x,nQ=new x,sQ=new x,iQ=new W9,oQ=new W9,aQ=new W9;class X8{constructor(J=new x,Q=new x,Z=new x){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,K){K.subVectors(Z,Q),F8.subVectors(J,Q),K.cross(F8);let $=K.lengthSq();if($>0)return K.multiplyScalar(1/Math.sqrt($));return K.set(0,0,0)}static getBarycoord(J,Q,Z,K,$){F8.subVectors(K,Q),d8.subVectors(Z,Q),lQ.subVectors(J,Q);let W=F8.dot(F8),X=F8.dot(d8),Y=F8.dot(lQ),H=d8.dot(d8),N=d8.dot(lQ),q=W*H-X*X;if(q===0)return $.set(0,0,0),null;let U=1/q,G=(H*Y-X*N)*U,D=(W*N-X*Y)*U;return $.set(1-G-D,D,G)}static containsPoint(J,Q,Z,K){if(this.getBarycoord(J,Q,Z,K,u8)===null)return!1;return u8.x>=0&&u8.y>=0&&u8.x+u8.y<=1}static getInterpolation(J,Q,Z,K,$,W,X,Y){if(this.getBarycoord(J,Q,Z,K,u8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector($,u8.x),Y.addScaledVector(W,u8.y),Y.addScaledVector(X,u8.z),Y}static getInterpolatedAttribute(J,Q,Z,K,$,W){return iQ.setScalar(0),oQ.setScalar(0),aQ.setScalar(0),iQ.fromBufferAttribute(J,Q),oQ.fromBufferAttribute(J,Z),aQ.fromBufferAttribute(J,K),W.setScalar(0),W.addScaledVector(iQ,$.x),W.addScaledVector(oQ,$.y),W.addScaledVector(aQ,$.z),W}static isFrontFacing(J,Q,Z,K){return F8.subVectors(Z,Q),d8.subVectors(J,Q),F8.cross(d8).dot(K)<0}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,K){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,Z,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return F8.subVectors(this.c,this.b),d8.subVectors(this.a,this.b),F8.cross(d8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return X8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return X8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,K,$){return X8.getInterpolation(J,this.a,this.b,this.c,Q,Z,K,$)}containsPoint(J){return X8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return X8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,K=this.b,$=this.c,W,X;iJ.subVectors(K,Z),oJ.subVectors($,Z),cQ.subVectors(J,Z);let Y=iJ.dot(cQ),H=oJ.dot(cQ);if(Y<=0&&H<=0)return Q.copy(Z);nQ.subVectors(J,K);let N=iJ.dot(nQ),q=oJ.dot(nQ);if(N>=0&&q<=N)return Q.copy(K);let U=Y*q-N*H;if(U<=0&&Y>=0&&N<=0)return W=Y/(Y-N),Q.copy(Z).addScaledVector(iJ,W);sQ.subVectors(J,$);let G=iJ.dot(sQ),D=oJ.dot(sQ);if(D>=0&&G<=D)return Q.copy($);let O=G*H-Y*D;if(O<=0&&H>=0&&D<=0)return X=H/(H-D),Q.copy(Z).addScaledVector(oJ,X);let V=N*D-G*q;if(V<=0&&q-N>=0&&G-D>=0)return r$.subVectors($,K),X=(q-N)/(q-N+(G-D)),Q.copy(K).addScaledVector(r$,X);let E=1/(V+O+U);return W=O*E,X=U*E,Q.copy(Z).addScaledVector(iJ,W).addScaledVector(oJ,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class H8{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(D8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(D8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=D8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let $=Z.getAttribute("position");if(Q===!0&&$!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=$.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,D8);else D8.fromBufferAttribute($,W);D8.applyMatrix4(J.matrixWorld),this.expandByPoint(D8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();q6.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();q6.copy(Z.boundingBox)}q6.applyMatrix4(J.matrixWorld),this.union(q6)}}let K=J.children;for(let $=0,W=K.length;$<W;$++)this.expandByObject(K[$],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,D8),D8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(T7),E6.subVectors(this.max,T7),aJ.subVectors(J.a,T7),rJ.subVectors(J.b,T7),tJ.subVectors(J.c,T7),WJ.subVectors(rJ,aJ),XJ.subVectors(tJ,rJ),RJ.subVectors(aJ,tJ);let Q=[0,-WJ.z,WJ.y,0,-XJ.z,XJ.y,0,-RJ.z,RJ.y,WJ.z,0,-WJ.x,XJ.z,0,-XJ.x,RJ.z,0,-RJ.x,-WJ.y,WJ.x,0,-XJ.y,XJ.x,0,-RJ.y,RJ.x,0];if(!rQ(Q,aJ,rJ,tJ,E6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!rQ(Q,aJ,rJ,tJ,E6))return!1;return F6.crossVectors(WJ,XJ),Q=[F6.x,F6.y,F6.z],rQ(Q,aJ,rJ,tJ,E6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,D8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(D8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return l8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),l8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),l8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),l8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),l8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),l8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),l8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),l8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(l8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var l8=[new x,new x,new x,new x,new x,new x,new x,new x],D8=new x,q6=new H8,aJ=new x,rJ=new x,tJ=new x,WJ=new x,XJ=new x,RJ=new x,T7=new x,E6=new x,F6=new x,MJ=new x;function rQ(J,Q,Z,K,$){for(let W=0,X=J.length-3;W<=X;W+=3){MJ.fromArray(J,W);let Y=$.x*Math.abs(MJ.x)+$.y*Math.abs(MJ.y)+$.z*Math.abs(MJ.z),H=Q.dot(MJ),N=Z.dot(MJ),q=K.dot(MJ);if(Math.max(-Math.max(H,N,q),Math.min(H,N,q))>Y)return!1}return!0}var V9=new x,D6=new h0,XH=0;class Y8 extends T8{constructor(J,Q,Z=!1){super();if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let K=0,$=this.itemSize;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)D6.fromBufferAttribute(this,Q),D6.applyMatrix3(J),this.setXY(Q,D6.x,D6.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)V9.fromBufferAttribute(this,Q),V9.applyMatrix3(J),this.setXYZ(Q,V9.x,V9.y,V9.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)V9.fromBufferAttribute(this,Q),V9.applyMatrix4(J),this.setXYZ(Q,V9.x,V9.y,V9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)V9.fromBufferAttribute(this,Q),V9.applyNormalMatrix(J),this.setXYZ(Q,V9.x,V9.y,V9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)V9.fromBufferAttribute(this,Q),V9.transformDirection(J),this.setXYZ(Q,V9.x,V9.y,V9.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=O8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=K9(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=O8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=O8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=O8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=O8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=K9(Q,this.array),Z=K9(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J*=this.itemSize,this.normalized)Q=K9(Q,this.array),Z=K9(Z,this.array),K=K9(K,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J*=this.itemSize,this.normalized)Q=K9(Q,this.array),Z=K9(Z,this.array),K=K9(K,this.array),$=K9($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this.array[J+3]=$,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class s6 extends Y8{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class i6 extends Y8{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class d9 extends Y8{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var YH=new H8,w7=new x,tQ=new x;class o8{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else YH.setFromPoints(J).getCenter(Z);let K=0;for(let $=0,W=J.length;$<W;$++)K=Math.max(K,Z.distanceToSquared(J[$]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;w7.subVectors(J,this.center);let Q=w7.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),K=(Z-this.radius)*0.5;this.center.addScaledVector(w7,K/Z),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else tQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(w7.copy(J.center).add(tQ)),this.expandByPoint(w7.copy(J.center).sub(tQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var HH=0,$8=new R9,eQ=new n9,eJ=new x,e9=new H8,S7=new H8,P9=new x;class U8 extends T8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HH++}),this.uuid=n8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((jY(J))?i6:s6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let $=new f0().getNormalMatrix(J);Z.applyNormalMatrix($),Z.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return $8.makeRotationFromQuaternion(J),this.applyMatrix4($8),this}rotateX(J){return $8.makeRotationX(J),this.applyMatrix4($8),this}rotateY(J){return $8.makeRotationY(J),this.applyMatrix4($8),this}rotateZ(J){return $8.makeRotationZ(J),this.applyMatrix4($8),this}translate(J,Q,Z){return $8.makeTranslation(J,Q,Z),this.applyMatrix4($8),this}scale(J,Q,Z){return $8.makeScale(J,Q,Z),this.applyMatrix4($8),this}lookAt(J){return eQ.lookAt(J),eQ.updateMatrix(),this.applyMatrix4(eQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eJ).negate(),this.translate(eJ.x,eJ.y,eJ.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.push(W.x,W.y,W.z||0)}this.setAttribute("position",new d9(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let K=0;K<Z;K++){let $=J[K];Q.setXYZ(K,$.x,$.y,$.z||0)}if(J.length>Q.count)j0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new H8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){b0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let $=Q[Z];if(e9.setFromBufferAttribute($),this.morphTargetsRelative)P9.addVectors(this.boundingBox.min,e9.min),this.boundingBox.expandByPoint(P9),P9.addVectors(this.boundingBox.max,e9.max),this.boundingBox.expandByPoint(P9);else this.boundingBox.expandByPoint(e9.min),this.boundingBox.expandByPoint(e9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))b0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new o8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){b0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let Z=this.boundingSphere.center;if(e9.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$];if(S7.setFromBufferAttribute(X),this.morphTargetsRelative)P9.addVectors(e9.min,S7.min),e9.expandByPoint(P9),P9.addVectors(e9.max,S7.max),e9.expandByPoint(P9);else e9.expandByPoint(S7.min),e9.expandByPoint(S7.max)}e9.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)P9.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(P9));if(Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$],Y=this.morphTargetsRelative;for(let H=0,N=X.count;H<N;H++){if(P9.fromBufferAttribute(X,H),Y)eJ.fromBufferAttribute(J,H),P9.add(eJ);K=Math.max(K,Z.distanceToSquared(P9))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))b0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){b0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:K,uv:$}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==Z.count)W=new Y8(new Float32Array(4*Z.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let P=0;P<Z.count;P++)X[P]=new x,Y[P]=new x;let H=new x,N=new x,q=new x,U=new h0,G=new h0,D=new h0,O=new x,V=new x;function E(P,L,B){H.fromBufferAttribute(Z,P),N.fromBufferAttribute(Z,L),q.fromBufferAttribute(Z,B),U.fromBufferAttribute($,P),G.fromBufferAttribute($,L),D.fromBufferAttribute($,B),N.sub(H),q.sub(H),G.sub(U),D.sub(U);let m=1/(G.x*D.y-D.x*G.y);if(!isFinite(m))return;O.copy(N).multiplyScalar(D.y).addScaledVector(q,-G.y).multiplyScalar(m),V.copy(q).multiplyScalar(G.x).addScaledVector(N,-D.x).multiplyScalar(m),X[P].add(O),X[L].add(O),X[B].add(O),Y[P].add(V),Y[L].add(V),Y[B].add(V)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let P=0,L=F.length;P<L;++P){let B=F[P],m=B.start,j=B.count;for(let y=m,d=m+j;y<d;y+=3)E(J.getX(y+0),J.getX(y+1),J.getX(y+2))}let C=new x,_=new x,I=new x,A=new x;function k(P){I.fromBufferAttribute(K,P),A.copy(I);let L=X[P];C.copy(L),C.sub(I.multiplyScalar(I.dot(L))).normalize(),_.crossVectors(A,L);let m=_.dot(Y[P])<0?-1:1;W.setXYZW(P,C.x,C.y,C.z,m)}for(let P=0,L=F.length;P<L;++P){let B=F[P],m=B.start,j=B.count;for(let y=m,d=m+j;y<d;y+=3)k(J.getX(y+0)),k(J.getX(y+1)),k(J.getX(y+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0||Z.count!==Q.count)Z=new Y8(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let U=0,G=Z.count;U<G;U++)Z.setXYZ(U,0,0,0);let K=new x,$=new x,W=new x,X=new x,Y=new x,H=new x,N=new x,q=new x;if(J)for(let U=0,G=J.count;U<G;U+=3){let D=J.getX(U+0),O=J.getX(U+1),V=J.getX(U+2);K.fromBufferAttribute(Q,D),$.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,V),N.subVectors(W,$),q.subVectors(K,$),N.cross(q),X.fromBufferAttribute(Z,D),Y.fromBufferAttribute(Z,O),H.fromBufferAttribute(Z,V),X.add(N),Y.add(N),H.add(N),Z.setXYZ(D,X.x,X.y,X.z),Z.setXYZ(O,Y.x,Y.y,Y.z),Z.setXYZ(V,H.x,H.y,H.z)}else for(let U=0,G=Q.count;U<G;U+=3)K.fromBufferAttribute(Q,U+0),$.fromBufferAttribute(Q,U+1),W.fromBufferAttribute(Q,U+2),N.subVectors(W,$),q.subVectors(K,$),N.cross(q),Z.setXYZ(U+0,N.x,N.y,N.z),Z.setXYZ(U+1,N.x,N.y,N.z),Z.setXYZ(U+2,N.x,N.y,N.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)P9.fromBufferAttribute(J,Q),P9.normalize(),J.setXYZ(Q,P9.x,P9.y,P9.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:N,normalized:q}=X,U=new H.constructor(Y.length*N),G=0,D=0;for(let O=0,V=Y.length;O<V;O++){if(X.isInterleavedBufferAttribute)G=Y[O]*X.data.stride+X.offset;else G=Y[O]*N;for(let E=0;E<N;E++)U[D++]=H[G++]}return new Y8(U,N,q)}if(this.index===null)return j0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new U8,Z=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,Z);Q.setAttribute(X,H)}let $=this.morphAttributes;for(let X in $){let Y=[],H=$[X];for(let N=0,q=H.length;N<q;N++){let U=H[N],G=J(U,Z);Y.push(G)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let H=Z[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},$=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],N=[];for(let q=0,U=H.length;q<U;q++){let G=H[q];N.push(G.toJSON(J.data))}if(N.length>0)K[Y]=N,$=!0}if($)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let K=J.attributes;for(let H in K){let N=K[H];this.setAttribute(H,N.clone(Q))}let $=J.morphAttributes;for(let H in $){let N=[],q=$[H];for(let U=0,G=q.length;U<G;U++)N.push(q[U].clone(Q));this.morphAttributes[H]=N}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,N=W.length;H<N;H++){let q=W[H];this.addGroup(q.start,q.count,q.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class HK{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=n8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let K=0,$=this.stride;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=n8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=n8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var p9=new x;class h9{constructor(J,Q,Z,K=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=K}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)p9.fromBufferAttribute(this,Q),p9.applyMatrix4(J),this.setXYZ(Q,p9.x,p9.y,p9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)p9.fromBufferAttribute(this,Q),p9.applyNormalMatrix(J),this.setXYZ(Q,p9.x,p9.y,p9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)p9.fromBufferAttribute(this,Q),p9.transformDirection(J),this.setXYZ(Q,p9.x,p9.y,p9.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=O8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=K9(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=K9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=O8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=O8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=O8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=O8(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=K9(Q,this.array),Z=K9(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=K9(Q,this.array),Z=K9(Z,this.array),K=K9(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=K9(Q,this.array),Z=K9(Z,this.array),K=K9(K,this.array),$=K9($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this.data.array[J+3]=$,this}clone(J){if(J===void 0){y7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return new Y8(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new h9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){y7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var JZ=new x,UH=new x,NH=new f0;class W8{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,K){return this.normal.set(J,Q,Z),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let K=JZ.subVectors(Z,Q).cross(UH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,Z=!0){let K=J.delta(JZ),$=this.normal.dot(K);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(Z===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(K,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||NH.getNormalMatrix(J),K=this.coplanarPoint(JZ).applyMatrix4(J),$=this.normal.applyMatrix3(Z).normalize();return this.constant=-K.dot($),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var GH=0;class E7 extends T8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:GH++}),this.uuid=n8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new t0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){j0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){j0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set(Z);else if(K&&K.isVector2&&(Z&&Z.isVector2)||K&&K.isEuler&&(Z&&Z.isEuler)||K&&K.isVector3&&(Z&&Z.isVector3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,Z.blending=this.blending,Z.side=this.side,Z.shadowSide=this.shadowSide,Z.vertexColors=this.vertexColors,Z.opacity=this.opacity,Z.transparent=this.transparent,Z.blendSrc=this.blendSrc,Z.blendDst=this.blendDst,Z.blendEquation=this.blendEquation,Z.blendSrcAlpha=this.blendSrcAlpha,Z.blendDstAlpha=this.blendDstAlpha,Z.blendEquationAlpha=this.blendEquationAlpha,Z.blendColor=this.blendColor.getHex(),Z.blendAlpha=this.blendAlpha,Z.depthFunc=this.depthFunc,Z.depthTest=this.depthTest,Z.depthWrite=this.depthWrite,Z.colorWrite=this.colorWrite,Z.clipIntersection=this.clipIntersection,Z.clipShadows=this.clipShadows,Z.stencilWriteMask=this.stencilWriteMask,Z.stencilFunc=this.stencilFunc,Z.stencilRef=this.stencilRef,Z.stencilFuncMask=this.stencilFuncMask,Z.stencilFail=this.stencilFail,Z.stencilZFail=this.stencilZFail,Z.stencilZPass=this.stencilZPass,Z.stencilWrite=this.stencilWrite,Z.polygonOffset=this.polygonOffset,Z.polygonOffsetFactor=this.polygonOffsetFactor,Z.polygonOffsetUnits=this.polygonOffsetUnits,Z.dithering=this.dithering,Z.alphaTest=this.alphaTest,Z.alphaHash=this.alphaHash,Z.alphaToCoverage=this.alphaToCoverage,Z.premultipliedAlpha=this.premultipliedAlpha,Z.forceSinglePass=this.forceSinglePass,Z.allowOverride=this.allowOverride,Z.visible=this.visible,Z.toneMapped=this.toneMapped,Z.name=this.name,this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Z.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Z.clippingPlanes=this.clippingPlanes.map(($)=>$.toJSON());if(this.rotation!==void 0)Z.rotation=this.rotation;if(this.depthPacking!==void 0)Z.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Z.linewidth=this.linewidth;if(this.linecap!==void 0)Z.linecap=this.linecap;if(this.linejoin!==void 0)Z.linejoin=this.linejoin;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.wireframe!==void 0)Z.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Z.flatShading=this.flatShading;if(this.fog!==void 0)Z.fog=this.fog;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function K($){let W=[];for(let X in $){let Y=$[X];delete Y.metadata,W.push(Y)}return W}if(Q){let $=K(J.textures),W=K(J.images);if($.length>0)Z.textures=$;if(W.length>0)Z.images=W}return Z}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new t0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Z)=>new W8().fromJSON(Z));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Z=J.normalScale;if(Array.isArray(Z)===!1)Z=[Z,Z];this.normalScale=new h0().fromArray(Z)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new h0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let K=Q.length;Z=new Array(K);for(let $=0;$!==K;++$)Z[$]=Q[$].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var c8=new x,QZ=new x,O6=new x,R6=new x;class c7{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,c8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=c8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return c8.copy(this.origin).addScaledVector(this.direction,Q),c8.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,K){QZ.copy(J).add(Q).multiplyScalar(0.5),O6.copy(Q).sub(J).normalize(),R6.copy(this.origin).sub(QZ);let $=J.distanceTo(Q)*0.5,W=-this.direction.dot(O6),X=R6.dot(this.direction),Y=-R6.dot(O6),H=R6.lengthSq(),N=Math.abs(1-W*W),q,U,G,D;if(N>0)if(q=W*Y-X,U=W*X-Y,D=$*N,q>=0)if(U>=-D)if(U<=D){let O=1/N;q*=O,U*=O,G=q*(q+W*U+2*X)+U*(W*q+U+2*Y)+H}else U=$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else U=-$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else if(U<=-D)q=Math.max(0,-(-W*$+X)),U=q>0?-$:Math.min(Math.max(-$,-Y),$),G=-q*q+U*(U+2*Y)+H;else if(U<=D)q=0,U=Math.min(Math.max(-$,-Y),$),G=U*(U+2*Y)+H;else q=Math.max(0,-(W*$+X)),U=q>0?$:Math.min(Math.max(-$,-Y),$),G=-q*q+U*(U+2*Y)+H;else U=W>0?-$:$,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;if(Z)Z.copy(this.origin).addScaledVector(this.direction,q);if(K)K.copy(QZ).addScaledVector(O6,U);return G}intersectSphere(J,Q){if(J.radius<0)return null;c8.subVectors(J.center,this.origin);let Z=c8.dot(this.direction),K=c8.dot(c8)-Z*Z,$=J.radius*J.radius;if(K>$)return null;let W=Math.sqrt($-K),X=Z-W,Y=Z+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,K,$,W,X,Y,H=1/this.direction.x,N=1/this.direction.y,q=1/this.direction.z,U=this.origin;if(H>=0)Z=(J.min.x-U.x)*H,K=(J.max.x-U.x)*H;else Z=(J.max.x-U.x)*H,K=(J.min.x-U.x)*H;if(N>=0)$=(J.min.y-U.y)*N,W=(J.max.y-U.y)*N;else $=(J.max.y-U.y)*N,W=(J.min.y-U.y)*N;if(Z>W||$>K)return null;if($>Z||isNaN(Z))Z=$;if(W<K||isNaN(K))K=W;if(q>=0)X=(J.min.z-U.z)*q,Y=(J.max.z-U.z)*q;else X=(J.max.z-U.z)*q,Y=(J.min.z-U.z)*q;if(Z>Y||X>K)return null;if(X>Z||Z!==Z)Z=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at(Z>=0?Z:K,Q)}intersectsBox(J){return this.intersectBox(J,c8)!==null}intersectTriangle(J,Q,Z,K,$){let W=this.origin,X=this.direction,Y=X.x,H=X.y,N=X.z,q=J.x-W.x,U=J.y-W.y,G=J.z-W.z,D=Q.x-W.x,O=Q.y-W.y,V=Q.z-W.z,E=Z.x-W.x,F=Z.y-W.y,C=Z.z-W.z,_=Math.abs(Y),I=Math.abs(H),A=Math.abs(N),k,P,L,B,m,j,y,d,T,S,n,u;if(_>=I&&_>=A)if(L=Y,j=q,T=D,u=E,Y>=0)k=H,P=N,B=U,m=G,y=O,d=V,S=F,n=C;else k=N,P=H,B=G,m=U,y=V,d=O,S=C,n=F;else if(I>=A)if(L=H,j=U,T=O,u=F,H>=0)k=N,P=Y,B=G,m=q,y=V,d=D,S=C,n=E;else k=Y,P=N,B=q,m=G,y=D,d=V,S=E,n=C;else if(L=N,j=G,T=V,u=C,N>=0)k=Y,P=H,B=q,m=U,y=D,d=O,S=E,n=F;else k=H,P=Y,B=U,m=q,y=O,d=D,S=F,n=E;if(L===0)return null;let $0=k/L,i=P/L,Z0=1/L,X0=B-$0*j,T0=m-i*j,_0=y-$0*T,c0=d-i*T,d0=S-$0*u,w=n-i*u,g=d0*c0-w*_0,p=X0*w-T0*d0,a=_0*T0-c0*X0;if(K){if(g<0||p<0||a<0)return null}else if((g<0||p<0||a<0)&&(g>0||p>0||a>0))return null;let Q0=g+p+a;if(Q0===0)return null;let r=Z0*(g*j+p*T+a*u);if(Q0>0?r<0:r>0)return null;return this.at(r/Q0,$)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class o6 extends E7{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new t0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new A8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var t$=new R9,LJ=new c7,M6=new o8,e$=new x,L6=new x,I6=new x,V6=new x,ZZ=new x,B6=new x,JW=new x,C6=new x;class Q8 extends n9{constructor(J=new U8,Q=new o6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let $=0,W=K.length;$<W;$++){let X=K[$].name||String($);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=$}}}}getVertexPosition(J,Q){let Z=this.geometry,K=Z.attributes.position,$=Z.morphAttributes.position,W=Z.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if($&&X){B6.set(0,0,0);for(let Y=0,H=$.length;Y<H;Y++){let N=X[Y],q=$[Y];if(N===0)continue;if(ZZ.fromBufferAttribute(q,J),W)B6.addScaledVector(ZZ,N);else B6.addScaledVector(ZZ.sub(Q),N)}Q.add(B6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.material,$=this.matrixWorld;if(K===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(M6.copy(Z.boundingSphere),M6.applyMatrix4($),LJ.copy(J.ray).recast(J.near),M6.containsPoint(LJ.origin)===!1){if(LJ.intersectSphere(M6,e$)===null)return;if(LJ.origin.distanceToSquared(e$)>(J.far-J.near)**2)return}if(t$.copy($).invert(),LJ.copy(J.ray).applyMatrix4(t$),Z.boundingBox!==null){if(LJ.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,LJ)}_computeIntersections(J,Q,Z){let K,$=this.geometry,W=this.material,X=$.index,Y=$.attributes.position,H=$.attributes.uv,N=$.attributes.uv1,q=$.attributes.normal,U=$.groups,G=$.drawRange;if(X!==null)if(Array.isArray(W))for(let D=0,O=U.length;D<O;D++){let V=U[D],E=W[V.materialIndex],F=Math.max(V.start,G.start),C=Math.min(X.count,Math.min(V.start+V.count,G.start+G.count));for(let _=F,I=C;_<I;_+=3){let A=X.getX(_),k=X.getX(_+1),P=X.getX(_+2);if(K=A6(this,E,J,Z,H,N,q,A,k,P),K)K.faceIndex=Math.floor(_/3),K.face.materialIndex=V.materialIndex,Q.push(K)}}else{let D=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let V=D,E=O;V<E;V+=3){let F=X.getX(V),C=X.getX(V+1),_=X.getX(V+2);if(K=A6(this,W,J,Z,H,N,q,F,C,_),K)K.faceIndex=Math.floor(V/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(W))for(let D=0,O=U.length;D<O;D++){let V=U[D],E=W[V.materialIndex],F=Math.max(V.start,G.start),C=Math.min(Y.count,Math.min(V.start+V.count,G.start+G.count));for(let _=F,I=C;_<I;_+=3){let A=_,k=_+1,P=_+2;if(K=A6(this,E,J,Z,H,N,q,A,k,P),K)K.faceIndex=Math.floor(_/3),K.face.materialIndex=V.materialIndex,Q.push(K)}}else{let D=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let V=D,E=O;V<E;V+=3){let F=V,C=V+1,_=V+2;if(K=A6(this,W,J,Z,H,N,q,F,C,_),K)K.faceIndex=Math.floor(V/3),Q.push(K)}}}}function qH(J,Q,Z,K,$,W,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,W,$,!0,Y);else H=K.intersectTriangle($,W,X,Q.side===0,Y);if(H===null)return null;C6.copy(Y),C6.applyMatrix4(J.matrixWorld);let N=Z.ray.origin.distanceTo(C6);if(N<Z.near||N>Z.far)return null;return{distance:N,point:C6.clone(),object:J}}function A6(J,Q,Z,K,$,W,X,Y,H,N){J.getVertexPosition(Y,L6),J.getVertexPosition(H,I6),J.getVertexPosition(N,V6);let q=qH(J,Q,Z,K,L6,I6,V6,JW);if(q){let U=new x;if(X8.getBarycoord(JW,L6,I6,V6,U),$)q.uv=X8.getInterpolatedAttribute($,Y,H,N,U,new h0);if(W)q.uv1=X8.getInterpolatedAttribute(W,Y,H,N,U,new h0);if(X){if(q.normal=X8.getInterpolatedAttribute(X,Y,H,N,U,new x),q.normal.dot(K.direction)>0)q.normal.multiplyScalar(-1)}let G={a:Y,b:H,c:N,normal:new x,materialIndex:0};X8.getNormal(L6,I6,V6,G.normal),q.face=G,q.barycoord=U}return q}class UK extends y9{constructor(J=null,Q=1,Z=1,K,$,W,X,Y,H=1003,N=1003,q,U){super(null,W,X,Y,H,N,K,$,q,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var IJ=new o8,EH=new h0(0.5,0.5),z6=new x;class a6{constructor(J=new W8,Q=new W8,Z=new W8,K=new W8,$=new W8,W=new W8){this.planes=[J,Q,Z,K,$,W]}set(J,Q,Z,K,$,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy(Z),X[3].copy(K),X[4].copy($),X[5].copy(W),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let K=this.planes,$=J.elements,W=$[0],X=$[1],Y=$[2],H=$[3],N=$[4],q=$[5],U=$[6],G=$[7],D=$[8],O=$[9],V=$[10],E=$[11],F=$[12],C=$[13],_=$[14],I=$[15];if(K[0].setComponents(H-W,G-N,E-D,I-F).normalize(),K[1].setComponents(H+W,G+N,E+D,I+F).normalize(),K[2].setComponents(H+X,G+q,E+O,I+C).normalize(),K[3].setComponents(H-X,G-q,E-O,I-C).normalize(),Z)K[4].setComponents(Y,U,V,_).normalize(),K[5].setComponents(H-Y,G-U,E-V,I-_).normalize();else if(K[4].setComponents(H-Y,G-U,E-V,I-_).normalize(),Q===2000)K[5].setComponents(H+Y,G+U,E+V,I+_).normalize();else if(Q===2001)K[5].setComponents(Y,U,V,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();IJ.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();IJ.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(IJ)}intersectsSprite(J){IJ.center.set(0,0,0);let Q=EH.distanceTo(J.center);return IJ.radius=0.7071067811865476+Q,IJ.applyMatrix4(J.matrixWorld),this.intersectsSphere(IJ)}intersectsSphere(J){let Q=this.planes,Z=J.center,K=-J.radius;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(Z)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let K=Q[Z];if(z6.x=K.normal.x>0?J.max.x:J.min.x,z6.y=K.normal.y>0?J.max.y:J.min.y,z6.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(z6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class r6 extends y9{constructor(J=[],Q=301,Z,K,$,W,X,Y,H,N){super(J,Q,Z,K,$,W,X,Y,H,N);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class _J extends y9{constructor(J,Q,Z=1014,K,$,W,X=1003,Y=1003,H,N=1026,q=1){if(N!==1026&&N!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let U={width:J,height:Q,depth:q};super(U,K,$,W,X,Y,N,Z,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new d7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class NK extends _J{constructor(J,Q=1014,Z=301,K,$,W=1003,X=1003,Y,H=1026){let N={width:J,height:J,depth:1},q=[N,N,N,N,N,N];super(J,J,Q,Z,K,$,W,X,Y,H);this.image=q,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class t6 extends y9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class F7 extends U8{constructor(J=1,Q=1,Z=1,K=1,$=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:K,heightSegments:$,depthSegments:W};let X=this;K=Math.floor(K),$=Math.floor($),W=Math.floor(W);let Y=[],H=[],N=[],q=[],U=0,G=0;D("z","y","x",-1,-1,Z,Q,J,W,$,0),D("z","y","x",1,-1,Z,Q,-J,W,$,1),D("x","z","y",1,1,J,Z,Q,K,W,2),D("x","z","y",1,-1,J,Z,-Q,K,W,3),D("x","y","z",1,-1,J,Q,Z,K,$,4),D("x","y","z",-1,-1,J,Q,-Z,K,$,5),this.setIndex(Y),this.setAttribute("position",new d9(H,3)),this.setAttribute("normal",new d9(N,3)),this.setAttribute("uv",new d9(q,2));function D(O,V,E,F,C,_,I,A,k,P,L){let B=_/k,m=I/P,j=_/2,y=I/2,d=A/2,T=k+1,S=P+1,n=0,u=0,$0=new x;for(let i=0;i<S;i++){let Z0=i*m-y;for(let X0=0;X0<T;X0++){let T0=X0*B-j;$0[O]=T0*F,$0[V]=Z0*C,$0[E]=d,H.push($0.x,$0.y,$0.z),$0[O]=0,$0[V]=0,$0[E]=A>0?1:-1,N.push($0.x,$0.y,$0.z),q.push(X0/k),q.push(1-i/P),n+=1}}for(let i=0;i<P;i++)for(let Z0=0;Z0<k;Z0++){let X0=U+Z0+T*i,T0=U+Z0+T*(i+1),_0=U+(Z0+1)+T*(i+1),c0=U+(Z0+1)+T*i;Y.push(X0,T0,c0),Y.push(T0,_0,c0),u+=6}X.addGroup(G,u,L),G+=u,U+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new F7(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class n7 extends U8{constructor(J=1,Q=1,Z=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:K};let $=J/2,W=Q/2,X=Math.floor(Z),Y=Math.floor(K),H=X+1,N=Y+1,q=J/X,U=Q/Y,G=[],D=[],O=[],V=[];for(let E=0;E<N;E++){let F=E*U-W;for(let C=0;C<H;C++){let _=C*q-$;D.push(_,-F,0),O.push(0,0,1),V.push(C/X),V.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let F=0;F<X;F++){let C=F+H*E,_=F+H*(E+1),I=F+1+H*(E+1),A=F+1+H*E;G.push(C,_,A),G.push(_,I,A)}this.setIndex(G),this.setAttribute("position",new d9(D,3)),this.setAttribute("normal",new d9(O,3)),this.setAttribute("uv",new d9(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new n7(J.width,J.height,J.widthSegments,J.heightSegments)}}class e6 extends U8{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],Z=new Set,K=new x,$=new x;if(J.index!==null){let W=J.attributes.position,X=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:X.count,materialIndex:0}];for(let H=0,N=Y.length;H<N;++H){let q=Y[H],U=q.start,G=q.count;for(let D=U,O=U+G;D<O;D+=3)for(let V=0;V<3;V++){let E=X.getX(D+V),F=X.getX(D+(V+1)%3);if(K.fromBufferAttribute(W,E),$.fromBufferAttribute(W,F),QW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}}else{let W=J.attributes.position;for(let X=0,Y=W.count/3;X<Y;X++)for(let H=0;H<3;H++){let N=3*X+H,q=3*X+(H+1)%3;if(K.fromBufferAttribute(W,N),$.fromBufferAttribute(W,q),QW(K,$,Z)===!0)Q.push(K.x,K.y,K.z),Q.push($.x,$.y,$.z)}}this.setAttribute("position",new d9(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function QW(J,Q,Z){let K=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,$=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if(Z.has(K)===!0||Z.has($)===!0)return!1;else return Z.add(K),Z.add($),!0}function TJ(J){let Q={};for(let Z in J){Q[Z]={};for(let K in J[Z]){let $=J[Z][K];if(ZW($))if($.isRenderTargetTexture)j0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][K]=null;else Q[Z][K]=$.clone();else if(Array.isArray($))if(ZW($[0])){let W=[];for(let X=0,Y=$.length;X<Y;X++)W[X]=$[X].clone();Q[Z][K]=W}else Q[Z][K]=$.slice();else Q[Z][K]=$}}return Q}function f9(J){let Q={};for(let Z=0;Z<J.length;Z++){let K=TJ(J[Z]);for(let $ in K)Q[$]=K[$]}return Q}function ZW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function FH(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function GK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return i0.workingColorSpace}var s7={clone:TJ,merge:f9},DH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OH=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class a9 extends E7{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DH,this.fragmentShader=OH,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=TJ(J.uniforms),this.uniformsGroups=FH(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let W=this.uniforms[K].value;if(W&&W.isTexture)Q.uniforms[K]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[K]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[K]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[K]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[K]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[K]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[K]={type:"m4",value:W.toArray()};else Q.uniforms[K]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let K in this.extensions)if(this.extensions[K]===!0)Z[K]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let Z in J.uniforms){let K=J.uniforms[Z];switch(this.uniforms[Z]={},K.type){case"t":this.uniforms[Z].value=Q[K.value]||null;break;case"c":this.uniforms[Z].value=new t0().setHex(K.value);break;case"v2":this.uniforms[Z].value=new h0().fromArray(K.value);break;case"v3":this.uniforms[Z].value=new x().fromArray(K.value);break;case"v4":this.uniforms[Z].value=new W9().fromArray(K.value);break;case"m3":this.uniforms[Z].value=new f0().fromArray(K.value);break;case"m4":this.uniforms[Z].value=new R9().fromArray(K.value);break;default:this.uniforms[Z].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Z in J.extensions)this.extensions[Z]=J.extensions[Z];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class qK extends a9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class EK extends E7{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class FK extends E7{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function J7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function KZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class wJ{constructor(J,Q,Z,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,K=Q[Z],$=Q[Z-1];Z:{J:{let W;Q:{K:if(!(J<K)){for(let X=Z+2;;){if(K===void 0){if(J<$)break K;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===X)break;if($=K,K=Q[++Z],J<K)break J}W=Q.length;break Q}if(!(J>=$)){let X=Q[1];if(J<X)Z=2,$=X;for(let Y=Z-2;;){if($===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if(K=$,$=Q[--Z-1],J>=$)break J}W=Z,Z=0;break Q}break Z}while(Z<W){let X=Z+W>>>1;if(J<Q[X])W=X;else Z=X+1}if(K=Q[Z],$=Q[Z-1],$===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,$,K)}return this.interpolate_(Z,$,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,K=this.valueSize,$=J*K;for(let W=0;W!==K;++W)Q[W]=Z[$+W];return Q}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class DK extends wJ{constructor(J,Q,Z,K){super(J,Q,Z,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let K=this.parameterPositions,$=J-2,W=J+1,X=K[$],Y=K[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:$=J,X=2*Q-Z;break;case 2402:$=K.length-2,X=Q+K[$]-K[$+1];break;default:$=J,X=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*Z-Q;break;case 2402:W=1,Y=Z+K[1]-K[0];break;default:W=J-1,Y=Q}let H=(Z-Q)*0.5,N=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-Z),this._offsetPrev=$*N,this._offsetNext=W*N}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this._offsetPrev,q=this._offsetNext,U=this._weightPrev,G=this._weightNext,D=(Z-Q)/(K-Q),O=D*D,V=O*D,E=-U*V+2*U*O-U*D,F=(1+U)*V+(-1.5-2*U)*O+(-0.5+U)*D+1,C=(-1-G)*V+(1.5+G)*O+0.5*D,_=G*V-G*O;for(let I=0;I!==X;++I)$[I]=E*W[N+I]+F*W[H+I]+C*W[Y+I]+_*W[q+I];return $}}class OK extends wJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=(Z-Q)/(K-Q),q=1-N;for(let U=0;U!==X;++U)$[U]=W[H+U]*q+W[Y+U]*N;return $}}class RK extends wJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class MK extends wJ{interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this.inTangents,q=this.outTangents;if(!N||!q){let D=(Z-Q)/(K-Q),O=1-D;for(let V=0;V!==X;++V)$[V]=W[H+V]*O+W[Y+V]*D;return $}let U=X*2,G=J-1;for(let D=0;D!==X;++D){let O=W[H+D],V=W[Y+D],E=G*U+D*2,F=q[E],C=q[E+1],_=J*U+D*2,I=N[_],A=N[_+1],k=MH(Z,Q,F,I,K);$[D]=HX(k,O,C,A,V)}return $}}function HX(J,Q,Z,K,$){let W=1-J;return W*W*W*Q+3*W*W*J*Z+3*W*J*J*K+J*J*J*$}function RH(J,Q,Z,K,$){let W=1-J;return 3*W*W*(Z-Q)+6*W*J*(K-Z)+3*J*J*($-K)}function MH(J,Q,Z,K,$){let W=(J-Q)/($-Q);for(let X=0;X<8;X++){let Y=HX(W,Q,Z,K,$)-J;if(Math.abs(Y)<0.0000000001)break;let H=RH(W,Q,Z,K,$);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class N8{constructor(J,Q,Z,K){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=J7(Q,this.TimeBufferType),this.values=J7(Z,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:J7(J.times,Array),values:J7(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)Z.interpolation=K;if(KZ(J.settings))Z.settings={inTangents:J7(J.settings.inTangents,Array),outTangents:J7(J.settings.outTangents,Array)}}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new RK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new OK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new DK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new MK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return j0("KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]*=J;if(KZ(this.settings))KW(this.settings.inTangents,J),KW(this.settings.outTangents,J)}return this}trim(J,Q){let Z=this.times,K=Z.length,$=0,W=K-1;while($!==K&&Z[$]<J)++$;while(W!==-1&&Z[W]>Q)--W;if(++W,$!==0||W!==K){if($>=W)W=Math.max(W,1),$=W-1;let X=this.getValueSize();this.times=Z.slice($,W),this.values=this.values.slice($*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)b0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,K=this.values,$=Z.length;if($===0)b0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==$;X++){let Y=Z[X];if(typeof Y==="number"&&isNaN(Y)){b0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){b0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(K!==void 0){if(vY(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){b0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),K=this.getInterpolation()===2302,$=J.length-1,W=1;for(let X=1;X<$;++X){let Y=!1,H=J[X],N=J[X+1];if(H!==N&&(X!==1||H!==J[0]))if(!K){let q=X*Z,U=q-Z,G=q+Z;for(let D=0;D!==Z;++D){let O=Q[q+D];if(O!==Q[U+D]||O!==Q[G+D]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let q=X*Z,U=W*Z;for(let G=0;G!==Z;++G)Q[U+G]=Q[q+G]}++W}}if($>0){J[W]=J[$];for(let X=$*Z,Y=W*Z,H=0;H!==Z;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);if(K.createInterpolant=this.createInterpolant,KZ(this.settings))K.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return K}}function KW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]*=Q}N8.prototype.ValueTypeName="";N8.prototype.TimeBufferType=Float32Array;N8.prototype.ValueBufferType=Float32Array;N8.prototype.DefaultInterpolation=2301;class SJ extends N8{constructor(J,Q,Z){super(J,Q,Z)}}SJ.prototype.ValueTypeName="bool";SJ.prototype.ValueBufferType=Array;SJ.prototype.DefaultInterpolation=2300;SJ.prototype.InterpolantFactoryMethodLinear=void 0;SJ.prototype.InterpolantFactoryMethodSmooth=void 0;class LK extends N8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}LK.prototype.ValueTypeName="color";class IK extends N8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}IK.prototype.ValueTypeName="number";class VK extends wJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=(Z-Q)/(K-Q),H=J*X;for(let N=H+X;H!==N;H+=4)o9.slerpFlat($,0,W,H-X,W,H,Y);return $}}class JQ extends N8{constructor(J,Q,Z,K){super(J,Q,Z,K)}InterpolantFactoryMethodLinear(J){return new VK(this.times,this.values,this.getValueSize(),J)}}JQ.prototype.ValueTypeName="quaternion";JQ.prototype.InterpolantFactoryMethodSmooth=void 0;class jJ extends N8{constructor(J,Q,Z){super(J,Q,Z)}}jJ.prototype.ValueTypeName="string";jJ.prototype.ValueBufferType=Array;jJ.prototype.DefaultInterpolation=2300;jJ.prototype.InterpolantFactoryMethodLinear=void 0;jJ.prototype.InterpolantFactoryMethodSmooth=void 0;class BK extends N8{constructor(J,Q,Z,K){super(J,Q,Z,K)}}BK.prototype.ValueTypeName="vector";class CK{constructor(J,Q,Z){let K=this,$=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this._abortController=null,this.itemStart=function(N){if(X++,$===!1){if(K.onStart!==void 0)K.onStart(N,W,X)}$=!0},this.itemEnd=function(N){if(W++,K.onProgress!==void 0)K.onProgress(N,W,X);if(W===X){if($=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(N){if(K.onError!==void 0)K.onError(N)},this.resolveURL=function(N){if(N=N.normalize("NFC"),Y)return Y(N);return N},this.setURLModifier=function(N){return Y=N,this},this.addHandler=function(N,q){return H.push(N,q),this},this.removeHandler=function(N){let q=H.indexOf(N);if(q!==-1)H.splice(q,2);return this},this.getHandler=function(N){for(let q=0,U=H.length;q<U;q+=2){let G=H[q],D=H[q+1];if(G.global)G.lastIndex=0;if(G.test(N))return D}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var UX=new CK;class AK{constructor(J){if(this.manager=J!==void 0?J:UX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let Z=this;return new Promise(function(K,$){Z.load(J,K,Q,$)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}AK.DEFAULT_MATERIAL_NAME="__DEFAULT";var k6=new x,P6=new o9,C8=new x;class QQ extends n9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new R9,this.projectionMatrix=new R9,this.projectionMatrixInverse=new R9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(k6,P6,C8),C8.x===1&&C8.y===1&&C8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(k6,P6,C8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,Z=!1){if(super.updateWorldMatrix(J,Q,Z),this.matrixWorld.decompose(k6,P6,C8),C8.x===1&&C8.y===1&&C8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(k6,P6,C8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var YJ=new x,$W=new h0,WW=new h0;class m9 extends QQ{constructor(J=50,Q=1,Z=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=Y7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(j7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return Y7*2*Math.atan(Math.tan(j7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){YJ.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(YJ.x,YJ.y).multiplyScalar(-J/YJ.z),YJ.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(YJ.x,YJ.y).multiplyScalar(-J/YJ.z)}getViewSize(J,Q){return this.getViewBounds(J,$W,WW),Q.subVectors(WW,$W)}setViewOffset(J,Q,Z,K,$,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(j7*0.5*this.fov)/this.zoom,Z=2*Q,K=this.aspect*Z,$=-0.5*K,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;$+=W.offsetX*K/Y,Q-=W.offsetY*Z/H,K*=W.width/Y,Z*=W.height/H}let X=this.filmOffset;if(X!==0)$+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective($,$+K,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class ZQ extends QQ{constructor(J=-1,Q=1,Z=1,K=-1,$=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=K,this.near=$,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,K,$,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,K=(this.top+this.bottom)/2,$=Z-J,W=Z+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,N=(this.top-this.bottom)/this.view.fullHeight/this.zoom;$+=H*this.view.offsetX,W=$+H*this.view.width,X-=N*this.view.offsetY,Y=X-N*this.view.height}this.projectionMatrix.makeOrthographic($,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class KQ extends U8{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var Q7=-90,Z7=1;class zK extends n9{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new m9(Q7,Z7,J,Q);K.layers=this.layers,this.add(K);let $=new m9(Q7,Z7,J,Q);$.layers=this.layers,this.add($);let W=new m9(Q7,Z7,J,Q);W.layers=this.layers,this.add(W);let X=new m9(Q7,Z7,J,Q);X.layers=this.layers,this.add(X);let Y=new m9(Q7,Z7,J,Q);Y.layers=this.layers,this.add(Y);let H=new m9(Q7,Z7,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,K,$,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),$.up.set(0,0,-1),$.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),$.up.set(0,0,1),$.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[$,W,X,Y,H,N]=this.children,q=J.getRenderTarget(),U=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),D=J.xr.enabled;J.xr.enabled=!1;let O=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1;let V=!1;if(J.isWebGLRenderer===!0)V=J.state.buffers.depth.getReversed();else V=J.reversedDepthBuffer;if(J.setRenderTarget(Z,0,K),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,$),J.setRenderTarget(Z,1,K),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget(Z,2,K),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget(Z,3,K),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget(Z,4,K),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),Z.texture.generateMipmaps=O,J.setRenderTarget(Z,5,K),V&&J.autoClear===!1)J.clearDepth();J.render(Q,N),J.setRenderTarget(q,U,G),J.xr.enabled=D,Z.texture.needsPMREMUpdate=!0}}class kK extends m9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var PK="\\[\\]\\.:\\/",LH=new RegExp("["+PK+"]","g"),_K="[^"+PK+"]",IH="[^"+PK.replace("\\.","")+"]",VH=/((?:WC+[\/:])*)/.source.replace("WC",_K),BH=/(WCOD+)?/.source.replace("WCOD",IH),CH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_K),AH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_K),zH=new RegExp("^"+VH+BH+CH+AH+"$"),kH=["material","materials","bones","map"];class NX{constructor(J,Q,Z){let K=Z||$9.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,K=this._bindings[Z];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let K=this._targetGroup.nCachedObjects_,$=Z.length;K!==$;++K)Z[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class $9{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||$9.parseTrackName(Q),this.node=$9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new $9(J,Q,Z);else return new $9.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(LH,"")}static parseTrackName(J){let Q=zH.exec(J);if(Q===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let $=Z.nodeName.substring(K+1);if(kH.indexOf($)!==-1)Z.nodeName=Z.nodeName.substring(0,K),Z.objectName=$}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function($){for(let W=0;W<$.length;W++){let X=$[W];if(X.name===Q||X.uuid===Q)return X;let Y=Z(X.children);if(Y)return Y}return null},K=Z(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)J[Q++]=Z[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,K=Q.propertyName,$=Q.propertyIndex;if(!J)J=$9.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){j0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let H=Q.objectIndex;switch(Z){case"materials":if(!J.material){b0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){b0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){b0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let N=0;N<J.length;N++)if(J[N].name===H){H=N;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){b0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){b0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){b0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(H!==void 0){if(J[H]===void 0){b0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[K];if(W===void 0){let H=Q.nodeName;b0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if($!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){b0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){b0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[$]!==void 0)$=J.morphTargetDictionary[$]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=$}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$9.Composite=NX;$9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$9.prototype.GetterByBindingType=[$9.prototype._getValue_direct,$9.prototype._getValue_array,$9.prototype._getValue_arrayElement,$9.prototype._getValue_toArray];$9.prototype.SetterByBindingTypeAndVersioning=[[$9.prototype._setValue_direct,$9.prototype._setValue_direct_setNeedsUpdate,$9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$9.prototype._setValue_array,$9.prototype._setValue_array_setNeedsUpdate,$9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$9.prototype._setValue_arrayElement,$9.prototype._setValue_arrayElement_setNeedsUpdate,$9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$9.prototype._setValue_fromArray,$9.prototype._setValue_fromArray_setNeedsUpdate,$9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ME=new Float32Array(1);class w8 extends HK{constructor(J,Q,Z=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class i7{constructor(J=1,Q=0,Z=0){this.radius=J,this.phi=Q,this.theta=Z}set(J,Q,Z){return this.radius=J,this.phi=Q,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=g0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){if(this.radius=Math.sqrt(J*J+Q*Q+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(g0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class TK{static{TK.prototype.isMatrix2=!0}constructor(J,Q,Z,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,K){let $=this.elements;return $[0]=J,$[2]=Q,$[1]=Z,$[3]=K,this}}var XW=new x,_6=new x,K7=new x,$7=new x,$Z=new x,PH=new x,_H=new x;class $Q{constructor(J=new x,Q=new x){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){XW.subVectors(J,this.start),_6.subVectors(this.end,this.start);let Z=_6.dot(_6);if(Z===0)return 0;let $=_6.dot(XW)/Z;if(Q)$=g0($,0,1);return $}closestPointToPoint(J,Q,Z){let K=this.closestPointToPointParameter(J,Q);return this.delta(Z).multiplyScalar(K).add(this.start)}distanceSqToLine3(J,Q=PH,Z=_H){let $,W,X=this.start,Y=J.start,H=this.end,N=J.end;K7.subVectors(H,X),$7.subVectors(N,Y),$Z.subVectors(X,Y);let q=K7.dot(K7),U=$7.dot($7),G=$7.dot($Z);if(q<=0.00000000000000010000000000000001&&U<=0.00000000000000010000000000000001)return Q.copy(X),Z.copy(Y),Q.sub(Z),Q.dot(Q);if(q<=0.00000000000000010000000000000001)$=0,W=G/U,W=g0(W,0,1);else{let D=K7.dot($Z);if(U<=0.00000000000000010000000000000001)W=0,$=g0(-D/q,0,1);else{let O=K7.dot($7),V=q*U-O*O;if(V!==0)$=g0((O*G-D*U)/V,0,1);else $=0;if(W=(O*$+G)/U,W<0)W=0,$=g0(-D/q,0,1);else if(W>1)W=1,$=g0((O-D)/q,0,1)}}return Q.copy(X).addScaledVector(K7,$),Z.copy(Y).addScaledVector($7,W),Q.distanceToSquared(Z)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class WQ extends T8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function wK(J,Q,Z,K){let $=TH(K);switch(Z){case 1021:return J*Q;case 1028:return J*Q/$.components*$.byteLength;case 1029:return J*Q/$.components*$.byteLength;case 1030:return J*Q*2/$.components*$.byteLength;case 1031:return J*Q*2/$.components*$.byteLength;case 1022:return J*Q*3/$.components*$.byteLength;case 1023:return J*Q*4/$.components*$.byteLength;case 1033:return J*Q*4/$.components*$.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function TH(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window!=="undefined")if(window.__THREE__)j0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function jX(){let J=null,Q=!1,Z=null,K=null;function $(W,X){K=J.requestAnimationFrame($),Z(W,X)}return{start:function(){if(Q===!0)return;if(Z===null)return;if(J===null)return;K=J.requestAnimationFrame($),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(W){Z=W},setContext:function(W){J=W}}}function wH(J){let Q=new WeakMap;function Z(Y,H){let{array:N,usage:q}=Y,U=N.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,N,q),Y.onUploadCallback();let D;if(N instanceof Float32Array)D=J.FLOAT;else if(typeof Float16Array!=="undefined"&&N instanceof Float16Array)D=J.HALF_FLOAT;else if(N instanceof Uint16Array)if(Y.isFloat16BufferAttribute)D=J.HALF_FLOAT;else D=J.UNSIGNED_SHORT;else if(N instanceof Int16Array)D=J.SHORT;else if(N instanceof Uint32Array)D=J.UNSIGNED_INT;else if(N instanceof Int32Array)D=J.INT;else if(N instanceof Int8Array)D=J.BYTE;else if(N instanceof Uint8Array)D=J.UNSIGNED_BYTE;else if(N instanceof Uint8ClampedArray)D=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+N);return{buffer:G,type:D,bytesPerElement:N.BYTES_PER_ELEMENT,version:Y.version,size:U}}function K(Y,H,N){let{array:q,updateRanges:U}=H;if(J.bindBuffer(N,Y),U.length===0)J.bufferSubData(N,0,q);else{U.sort((D,O)=>D.start-O.start);let G=0;for(let D=1;D<U.length;D++){let O=U[G],V=U[D];if(V.start<=O.start+O.count+1)O.count=Math.max(O.count,V.start+V.count-O.start);else++G,U[G]=V}U.length=G+1;for(let D=0,O=U.length;D<O;D++){let V=U[D];J.bufferSubData(N,V.start*q.BYTES_PER_ELEMENT,q,V.start,V.count)}H.clearUpdateRanges()}H.onUploadCallback()}function $(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let q=Q.get(Y);if(!q||q.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let N=Q.get(Y);if(N===void 0)Q.set(Y,Z(Y,H));else if(N.version<Y.version){if(N.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(N.buffer,Y,H),N.version=Y.version}}return{get:$,remove:W,update:X}}var SH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jH=`#ifdef USE_ALPHAHASH
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
#endif`,vH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fH=`#ifdef USE_AOMAP
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
#endif`,xH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gH=`#ifdef USE_BATCHING
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
#endif`,pH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uH=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lH=`#ifdef USE_IRIDESCENCE
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
#endif`,cH=`#ifdef USE_BUMPMAP
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
#endif`,nH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,JU=`#define PI 3.141592653589793
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
} // validated`,QU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZU=`vec3 transformedNormal = objectNormal;
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
#endif`,KU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$U=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YU="gl_FragColor = linearToOutputTexel( gl_FragColor );",HU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UU=`#ifdef USE_ENVMAP
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
#endif`,NU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GU=`#ifdef USE_ENVMAP
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
#endif`,qU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EU=`#ifdef USE_ENVMAP
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
#endif`,FU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MU=`#ifdef USE_GRADIENTMAP
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
}`,LU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BU=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,CU=`#ifdef USE_ENVMAP
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
#endif`,AU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_U=`PhysicalMaterial material;
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
#endif`,TU=`uniform sampler2D dfgLUT;
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
}`,wU=`
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
#endif`,SU=`#if defined( RE_IndirectDiffuse )
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
#endif`,jU=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vU=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mU=`#if defined( USE_POINTS_UV )
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
#endif`,dU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cU=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sU=`#ifdef USE_MORPHTARGETS
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
#endif`,iU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aU=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,JN=`#ifdef USE_NORMALMAP
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
#endif`,QN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$N=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ON=`float getShadowMask() {
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
}`,RN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MN=`#ifdef USE_SKINNING
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
#endif`,LN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IN=`#ifdef USE_SKINNING
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
#endif`,VN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zN=`#ifdef USE_TRANSMISSION
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
#endif`,kN=`#ifdef USE_TRANSMISSION
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
#endif`,PN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_N=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,SN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jN=`uniform sampler2D t2D;
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
}`,vN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fN=`#include <common>
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
}`,xN=`#if DEPTH_PACKING == 3200
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
}`,gN=`#define DISTANCE
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
}`,pN=`#define DISTANCE
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
}`,mN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uN=`uniform float scale;
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
}`,lN=`uniform vec3 diffuse;
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
}`,cN=`#include <common>
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
}`,nN=`uniform vec3 diffuse;
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
}`,sN=`#define LAMBERT
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
}`,iN=`#define LAMBERT
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
}`,oN=`#define MATCAP
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
}`,aN=`#define MATCAP
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
}`,rN=`#define NORMAL
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
}`,tN=`#define NORMAL
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
}`,eN=`#define PHONG
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
}`,JG=`#define PHONG
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
}`,QG=`#define STANDARD
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
}`,ZG=`#define STANDARD
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
}`,KG=`#define TOON
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
}`,$G=`#define TOON
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
}`,WG=`uniform float size;
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
}`,XG=`uniform vec3 diffuse;
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
}`,YG=`#include <common>
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
}`,HG=`uniform vec3 color;
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
}`,UG=`uniform float rotation;
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
}`,NG=`uniform vec3 diffuse;
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
}`,l0={alphahash_fragment:SH,alphahash_pars_fragment:jH,alphamap_fragment:vH,alphamap_pars_fragment:bH,alphatest_fragment:yH,alphatest_pars_fragment:hH,aomap_fragment:fH,aomap_pars_fragment:xH,batching_pars_vertex:gH,batching_vertex:pH,begin_vertex:mH,beginnormal_vertex:dH,bsdfs:uH,iridescence_fragment:lH,bumpmap_pars_fragment:cH,clipping_planes_fragment:nH,clipping_planes_pars_fragment:sH,clipping_planes_pars_vertex:iH,clipping_planes_vertex:oH,color_fragment:aH,color_pars_fragment:rH,color_pars_vertex:tH,color_vertex:eH,common:JU,cube_uv_reflection_fragment:QU,defaultnormal_vertex:ZU,displacementmap_pars_vertex:KU,displacementmap_vertex:$U,emissivemap_fragment:WU,emissivemap_pars_fragment:XU,colorspace_fragment:YU,colorspace_pars_fragment:HU,envmap_fragment:UU,envmap_common_pars_fragment:NU,envmap_pars_fragment:GU,envmap_pars_vertex:qU,envmap_physical_pars_fragment:CU,envmap_vertex:EU,fog_vertex:FU,fog_pars_vertex:DU,fog_fragment:OU,fog_pars_fragment:RU,gradientmap_pars_fragment:MU,lightmap_pars_fragment:LU,lights_lambert_fragment:IU,lights_lambert_pars_fragment:VU,lights_pars_begin:BU,lights_toon_fragment:AU,lights_toon_pars_fragment:zU,lights_phong_fragment:kU,lights_phong_pars_fragment:PU,lights_physical_fragment:_U,lights_physical_pars_fragment:TU,lights_fragment_begin:wU,lights_fragment_maps:SU,lights_fragment_end:jU,lightprobes_pars_fragment:vU,logdepthbuf_fragment:bU,logdepthbuf_pars_fragment:yU,logdepthbuf_pars_vertex:hU,logdepthbuf_vertex:fU,map_fragment:xU,map_pars_fragment:gU,map_particle_fragment:pU,map_particle_pars_fragment:mU,metalnessmap_fragment:dU,metalnessmap_pars_fragment:uU,morphinstance_vertex:lU,morphcolor_vertex:cU,morphnormal_vertex:nU,morphtarget_pars_vertex:sU,morphtarget_vertex:iU,normal_fragment_begin:oU,normal_fragment_maps:aU,normal_pars_fragment:rU,normal_pars_vertex:tU,normal_vertex:eU,normalmap_pars_fragment:JN,clearcoat_normal_fragment_begin:QN,clearcoat_normal_fragment_maps:ZN,clearcoat_pars_fragment:KN,iridescence_pars_fragment:$N,opaque_fragment:WN,packing:XN,premultiplied_alpha_fragment:YN,project_vertex:HN,dithering_fragment:UN,dithering_pars_fragment:NN,roughnessmap_fragment:GN,roughnessmap_pars_fragment:qN,shadowmap_pars_fragment:EN,shadowmap_pars_vertex:FN,shadowmap_vertex:DN,shadowmask_pars_fragment:ON,skinbase_vertex:RN,skinning_pars_vertex:MN,skinning_vertex:LN,skinnormal_vertex:IN,specularmap_fragment:VN,specularmap_pars_fragment:BN,tonemapping_fragment:CN,tonemapping_pars_fragment:AN,transmission_fragment:zN,transmission_pars_fragment:kN,uv_pars_fragment:PN,uv_pars_vertex:_N,uv_vertex:TN,worldpos_vertex:wN,background_vert:SN,background_frag:jN,backgroundCube_vert:vN,backgroundCube_frag:bN,cube_vert:yN,cube_frag:hN,depth_vert:fN,depth_frag:xN,distance_vert:gN,distance_frag:pN,equirect_vert:mN,equirect_frag:dN,linedashed_vert:uN,linedashed_frag:lN,meshbasic_vert:cN,meshbasic_frag:nN,meshlambert_vert:sN,meshlambert_frag:iN,meshmatcap_vert:oN,meshmatcap_frag:aN,meshnormal_vert:rN,meshnormal_frag:tN,meshphong_vert:eN,meshphong_frag:JG,meshphysical_vert:QG,meshphysical_frag:ZG,meshtoon_vert:KG,meshtoon_frag:$G,points_vert:WG,points_frag:XG,shadow_vert:YG,shadow_frag:HG,sprite_vert:UG,sprite_frag:NG},G0={common:{diffuse:{value:new t0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new f0}},envmap:{envMap:{value:null},envMapRotation:{value:new f0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new f0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new f0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new f0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new f0},normalScale:{value:new h0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new f0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new f0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new f0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new f0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new t0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new t0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0},uvTransform:{value:new f0}},sprite:{diffuse:{value:new t0(16777215)},opacity:{value:1},center:{value:new h0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}}},u9={basic:{uniforms:f9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:l0.meshbasic_vert,fragmentShader:l0.meshbasic_frag},lambert:{uniforms:f9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new t0(0)},envMapIntensity:{value:1}}]),vertexShader:l0.meshlambert_vert,fragmentShader:l0.meshlambert_frag},phong:{uniforms:f9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new t0(0)},specular:{value:new t0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:l0.meshphong_vert,fragmentShader:l0.meshphong_frag},standard:{uniforms:f9([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new t0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag},toon:{uniforms:f9([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new t0(0)}}]),vertexShader:l0.meshtoon_vert,fragmentShader:l0.meshtoon_frag},matcap:{uniforms:f9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:l0.meshmatcap_vert,fragmentShader:l0.meshmatcap_frag},points:{uniforms:f9([G0.points,G0.fog]),vertexShader:l0.points_vert,fragmentShader:l0.points_frag},dashed:{uniforms:f9([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:l0.linedashed_vert,fragmentShader:l0.linedashed_frag},depth:{uniforms:f9([G0.common,G0.displacementmap]),vertexShader:l0.depth_vert,fragmentShader:l0.depth_frag},normal:{uniforms:f9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:l0.meshnormal_vert,fragmentShader:l0.meshnormal_frag},sprite:{uniforms:f9([G0.sprite,G0.fog]),vertexShader:l0.sprite_vert,fragmentShader:l0.sprite_frag},background:{uniforms:{uvTransform:{value:new f0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:l0.background_vert,fragmentShader:l0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new f0}},vertexShader:l0.backgroundCube_vert,fragmentShader:l0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:l0.cube_vert,fragmentShader:l0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:l0.equirect_vert,fragmentShader:l0.equirect_frag},distance:{uniforms:f9([G0.common,G0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:l0.distance_vert,fragmentShader:l0.distance_frag},shadow:{uniforms:f9([G0.lights,G0.fog,{color:{value:new t0(0)},opacity:{value:1}}]),vertexShader:l0.shadow_vert,fragmentShader:l0.shadow_frag}};u9.physical={uniforms:f9([u9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new f0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new f0},clearcoatNormalScale:{value:new h0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new f0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new f0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new f0},sheen:{value:0},sheenColor:{value:new t0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new f0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new f0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new f0},transmissionSamplerSize:{value:new h0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new f0},attenuationDistance:{value:0},attenuationColor:{value:new t0(0)},specularColor:{value:new t0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new f0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new f0},anisotropyVector:{value:new h0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new f0}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag};var XQ={r:0,b:0,g:0},GG=new R9,vX=new f0;vX.set(-1,0,0,0,1,0,0,0,1);function qG(J,Q,Z,K,$,W){let X=new t0(0),Y=$===!0?0:1,H,N,q=null,U=0,G=null;function D(C){let _=C.isScene===!0?C.background:null;if(_&&_.isTexture){let I=C.backgroundBlurriness>0;_=Q.get(_,I)}return _}function O(C){let _=!1,I=D(C);if(I===null)E(X,Y);else if(I&&I.isColor)E(I,1),_=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")Z.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||_)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(C,_){let I=D(_);if(I&&(I.isCubeTexture||I.mapping===x7)){if(N===void 0)N=new Q8(new F7(1,1,1),new a9({name:"BackgroundCubeMaterial",uniforms:TJ(u9.backgroundCube.uniforms),vertexShader:u9.backgroundCube.vertexShader,fragmentShader:u9.backgroundCube.fragmentShader,side:s9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),N.geometry.deleteAttribute("normal"),N.geometry.deleteAttribute("uv"),N.onBeforeRender=function(A,k,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(N.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(N);if(N.material.uniforms.envMap.value=I,N.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,N.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,N.material.uniforms.backgroundRotation.value.setFromMatrix4(GG.makeRotationFromEuler(_.backgroundRotation)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1)N.material.uniforms.backgroundRotation.value.premultiply(vX);if(N.material.toneMapped=i0.getTransfer(I.colorSpace)!==G9,q!==I||U!==I.version||G!==J.toneMapping)N.material.needsUpdate=!0,q=I,U=I.version,G=J.toneMapping;N.layers.enableAll(),C.unshift(N,N.geometry,N.material,0,0,null)}else if(I&&I.isTexture){if(H===void 0)H=new Q8(new n7(2,2),new a9({name:"BackgroundMaterial",uniforms:TJ(u9.background.uniforms),vertexShader:u9.background.vertexShader,fragmentShader:u9.background.fragmentShader,side:U7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=I,H.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,H.material.toneMapped=i0.getTransfer(I.colorSpace)!==G9,I.matrixAutoUpdate===!0)I.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(I.matrix),q!==I||U!==I.version||G!==J.toneMapping)H.material.needsUpdate=!0,q=I,U=I.version,G=J.toneMapping;H.layers.enableAll(),C.unshift(H,H.geometry,H.material,0,0,null)}}function E(C,_){C.getRGB(XQ,GK(J)),Z.buffers.color.setClear(XQ.r,XQ.g,XQ.b,_,W)}function F(){if(N!==void 0)N.geometry.dispose(),N.material.dispose(),N=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(C,_=1){X.set(C),Y=_,E(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(C){Y=C,E(X,Y)},render:O,addToRenderList:V,dispose:F}}function EG(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},$=G(null),W=$,X=!1;function Y(j,y,d,T,S){let n=!1,u=U(j,T,d,y);if(W!==u)W=u,N(W.object);if(n=D(j,T,d,S),n)O(j,T,d,S);if(S!==null)Q.update(S,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,I(j,y,d,T),S!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(S).buffer)}}function H(){return J.createVertexArray()}function N(j){return J.bindVertexArray(j)}function q(j){return J.deleteVertexArray(j)}function U(j,y,d,T){let S=T.wireframe===!0,n=K[y.id];if(n===void 0)n={},K[y.id]=n;let u=j.isInstancedMesh===!0?j.id:0,$0=n[u];if($0===void 0)$0={},n[u]=$0;let i=$0[d.id];if(i===void 0)i={},$0[d.id]=i;let Z0=i[S];if(Z0===void 0)Z0=G(H()),i[S]=Z0;return Z0}function G(j){let y=[],d=[],T=[];for(let S=0;S<Z;S++)y[S]=0,d[S]=0,T[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:d,attributeDivisors:T,object:j,attributes:{},index:null}}function D(j,y,d,T){let S=W.attributes,n=y.attributes,u=0,$0=d.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=S[i],T0=n[i];if(T0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)T0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)T0=j.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==T0)return!0;if(T0&&X0.data!==T0.data)return!0;u++}if(W.attributesNum!==u)return!0;if(W.index!==T)return!0;return!1}function O(j,y,d,T){let S={},n=y.attributes,u=0,$0=d.getAttributes();for(let i in $0)if($0[i].location>=0){let X0=n[i];if(X0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)X0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)X0=j.instanceColor}let T0={};if(T0.attribute=X0,X0&&X0.data)T0.data=X0.data;S[i]=T0,u++}W.attributes=S,W.attributesNum=u,W.index=T}function V(){let j=W.newAttributes;for(let y=0,d=j.length;y<d;y++)j[y]=0}function E(j){F(j,0)}function F(j,y){let{newAttributes:d,enabledAttributes:T,attributeDivisors:S}=W;if(d[j]=1,T[j]===0)J.enableVertexAttribArray(j),T[j]=1;if(S[j]!==y)J.vertexAttribDivisor(j,y),S[j]=y}function C(){let{newAttributes:j,enabledAttributes:y}=W;for(let d=0,T=y.length;d<T;d++)if(y[d]!==j[d])J.disableVertexAttribArray(d),y[d]=0}function _(j,y,d,T,S,n,u){if(u===!0)J.vertexAttribIPointer(j,y,d,S,n);else J.vertexAttribPointer(j,y,d,T,S,n)}function I(j,y,d,T){V();let S=T.attributes,n=d.getAttributes(),u=y.defaultAttributeValues;for(let $0 in n){let i=n[$0];if(i.location>=0){let Z0=S[$0];if(Z0===void 0){if($0==="instanceMatrix"&&j.instanceMatrix)Z0=j.instanceMatrix;if($0==="instanceColor"&&j.instanceColor)Z0=j.instanceColor}if(Z0!==void 0){let{normalized:X0,itemSize:T0}=Z0,_0=Q.get(Z0);if(_0===void 0)continue;let{buffer:c0,type:d0,bytesPerElement:w}=_0,g=d0===J.INT||d0===J.UNSIGNED_INT||Z0.gpuType===RZ;if(Z0.isInterleavedBufferAttribute){let p=Z0.data,a=p.stride,Q0=Z0.offset;if(p.isInstancedInterleavedBuffer){for(let r=0;r<i.locationSize;r++)F(i.location+r,p.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=p.meshPerAttribute*p.count}else for(let r=0;r<i.locationSize;r++)E(i.location+r);J.bindBuffer(J.ARRAY_BUFFER,c0);for(let r=0;r<i.locationSize;r++)_(i.location+r,T0/i.locationSize,d0,X0,a*w,(Q0+T0/i.locationSize*r)*w,g)}else{if(Z0.isInstancedBufferAttribute){for(let p=0;p<i.locationSize;p++)F(i.location+p,Z0.meshPerAttribute);if(j.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let p=0;p<i.locationSize;p++)E(i.location+p);J.bindBuffer(J.ARRAY_BUFFER,c0);for(let p=0;p<i.locationSize;p++)_(i.location+p,T0/i.locationSize,d0,X0,T0*w,T0/i.locationSize*p*w,g)}}else if(u!==void 0){let X0=u[$0];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(i.location,X0);break;case 3:J.vertexAttrib3fv(i.location,X0);break;case 4:J.vertexAttrib4fv(i.location,X0);break;default:J.vertexAttrib1fv(i.location,X0)}}}}C()}function A(){B();for(let j in K){let y=K[j];for(let d in y){let T=y[d];for(let S in T){let n=T[S];for(let u in n)q(n[u].object),delete n[u];delete T[S]}}delete K[j]}}function k(j){if(K[j.id]===void 0)return;let y=K[j.id];for(let d in y){let T=y[d];for(let S in T){let n=T[S];for(let u in n)q(n[u].object),delete n[u];delete T[S]}}delete K[j.id]}function P(j){for(let y in K){let d=K[y];for(let T in d){let S=d[T];if(S[j.id]===void 0)continue;let n=S[j.id];for(let u in n)q(n[u].object),delete n[u];delete S[j.id]}}}function L(j){for(let y in K){let d=K[y],T=j.isInstancedMesh===!0?j.id:0,S=d[T];if(S===void 0)continue;for(let n in S){let u=S[n];for(let $0 in u)q(u[$0].object),delete u[$0];delete S[n]}if(delete d[T],Object.keys(d).length===0)delete K[y]}}function B(){if(m(),X=!0,W===$)return;W=$,N(W.object)}function m(){$.geometry=null,$.program=null,$.wireframe=!1}return{setup:Y,reset:B,resetDefaultState:m,dispose:A,releaseStatesOfGeometry:k,releaseStatesOfObject:L,releaseStatesOfProgram:P,initAttributes:V,enableAttribute:E,disableUnusedAttributes:C}}function FG(J,Q,Z){let K;function $(H){K=H}function W(H,N){J.drawArrays(K,H,N),Z.update(N,K,1)}function X(H,N,q){if(q===0)return;J.drawArraysInstanced(K,H,N,q),Z.update(N,K,q)}function Y(H,N,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,N,0,q);let G=0;for(let D=0;D<q;D++)G+=N[D];Z.update(G,K,1)}this.setMode=$,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function DG(J,Q,Z,K){let $;function W(){if($!==void 0)return $;if(Q.has("EXT_texture_filter_anisotropic")===!0){let P=Q.get("EXT_texture_filter_anisotropic");$=J.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else $=0;return $}function X(P){if(P!==_8&&K.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(P){let L=P===P8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(P!==M8&&P!==i8&&!L&&K.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(P){if(P==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let N=Z.precision!==void 0?Z.precision:"highp",q=H(N);if(q!==N)j0("WebGLRenderer:",N,"not supported, using",q,"instead."),N=q;let U=Z.logarithmicDepthBuffer===!0,G=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if(Z.reversedDepthBuffer===!0&&G===!1)j0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let D=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),_=J.getParameter(J.MAX_VARYING_VECTORS),I=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),k=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:N,logarithmicDepthBuffer:U,reversedDepthBuffer:G,maxTextures:D,maxVertexTextures:O,maxTextureSize:V,maxCubemapSize:E,maxAttributes:F,maxVertexUniforms:C,maxVaryings:_,maxFragmentUniforms:I,maxSamples:A,samples:k}}function OG(J){let Q=this,Z=null,K=0,$=!1,W=!1,X=new W8,Y=new f0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(U,G){let D=U.length!==0||G||K!==0||$;return $=G,K=U.length,D},this.beginShadows=function(){W=!0,q(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(U,G){Z=q(U,G,0)},this.setState=function(U,G,D){let{clippingPlanes:O,clipIntersection:V,clipShadows:E}=U,F=J.get(U);if(!$||O===null||O.length===0||W&&!E)if(W)q(null);else N();else{let C=W?0:K,_=C*4,I=F.clippingState||null;H.value=I,I=q(O,G,_,D);for(let A=0;A!==_;++A)I[A]=Z[A];F.clippingState=I,this.numIntersection=V?this.numPlanes:0,this.numPlanes+=C}};function N(){if(H.value!==Z)H.value=Z,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function q(U,G,D,O){let V=U!==null?U.length:0,E=null;if(V!==0){if(E=H.value,O!==!0||E===null){let F=D+V*4,C=G.matrixWorldInverse;if(Y.getNormalMatrix(C),E===null||E.length<F)E=new Float32Array(F);for(let _=0,I=D;_!==V;++_,I+=4)X.copy(U[_]).applyMatrix4(C,Y),X.normal.toArray(E,I),E[I+3]=X.constant}H.value=E,H.needsUpdate=!0}return Q.numPlanes=V,Q.numIntersection=0,E}}var O7=4,RG=6,MG=20,LG=256,o7=new ZQ,GX=new t0,SK=null,jK=0,vK=0,bK=!1,IG=new x,vJ=new x;class fK{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,Z=0.1,K=100,$={}){let{size:W=256,position:X=IG}=$;SK=this._renderer.getRenderTarget(),jK=this._renderer.getActiveCubeFace(),vK=this._renderer.getActiveMipmapLevel(),bK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Z,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=FX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=EX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(SK,jK,vK),this._renderer.xr.enabled=bK,J.scissorTest=!1,D7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===G7||J.mapping===BJ)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);SK=this._renderer.getRenderTarget(),jK=this._renderer.getActiveCubeFace(),vK=this._renderer.getActiveMipmapLevel(),bK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:i9,minFilter:i9,generateMipmaps:!1,type:P8,format:_8,colorSpace:JK,depthBuffer:!1},K=qX(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=qX(J,Q,Z);let{_lodMax:$}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=VG($)),this._blurMaterial=CG($,J,Q),this._ggxMaterial=BG($,J,Q)}return K}_compileMaterial(J){let Q=new Q8(new U8,J);this._renderer.compile(Q,o7)}_sceneToCubeUV(J,Q,Z,K,$){let Y=new m9(90,1,Q,Z),H=[1,-1,1,1,1,1],N=[1,1,1,-1,-1,-1],q=this._renderer,U=q.autoClear,G=q.toneMapping;if(q.getClearColor(GX),q.toneMapping=R8,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(K),q.clearDepth(),q.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Q8(new F7,new o6({name:"PMREM.Background",side:s9,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,V=O.material,E=!1,F=J.background;if(F){if(F.isColor)V.color.copy(F),J.background=null,E=!0}else V.color.copy(GX),E=!0;for(let C=0;C<6;C++){let _=C%3;if(_===0)Y.up.set(0,H[C],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x+N[C],$.y,$.z);else if(_===1)Y.up.set(0,0,H[C]),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y+N[C],$.z);else Y.up.set(0,H[C],0),Y.position.set($.x,$.y,$.z),Y.lookAt($.x,$.y,$.z+N[C]);let I=this._cubeSize;if(D7(K,_*I,C>2?I:0,I,I),q.setRenderTarget(K),E)q.render(O,Y);q.render(J,Y)}q.toneMapping=G,q.autoClear=U,J.background=F}_textureToCubeUV(J,Q){let Z=this._renderer,K=J.mapping===G7||J.mapping===BJ;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=FX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=EX();let $=K?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=$;let X=$.uniforms;X.envMap.value=J;let Y=this._cubeSize;D7(Q,0,0,3*Y,2*Y),Z.setRenderTarget(Q),Z.render(W,o7)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let $=1;$<K;$++)this._applyGGXFilter(J,$-1,$);Q.autoClear=Z}_applyGGXFilter(J,Q,Z){let K=this._renderer,$=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[Z];X.material=W;let Y=W.uniforms,H=Z/(this._lodMeshes.length-1),N=Q/(this._lodMeshes.length-1),q=Math.sqrt(H*H-N*N),U=H*1.25,G=q*U,{_lodMax:D}=this,O=this._sizeLods[Z],V=3*O*(Z>D-O7?Z-D+O7:0),E=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=D-Q,D7($,V,E,3*O,2*O),K.setRenderTarget($),K.render(X,o7),Y.envMap.value=$.texture,Y.roughness.value=0,Y.mipInt.value=D-Z,D7(J,V,E,3*O,2*O),K.setRenderTarget(J),K.render(X,o7)}_blur(J,Q,Z,K){let $=this._pingPongRenderTarget,W=Math.min(K,Math.PI)/Math.SQRT2;this._blurPass(J,$,Q,Z,W),this._blurPass($,J,Z,Z,W)}_blurPass(J,Q,Z,K,$){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[K];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=$,H.mipInt.value=this._lodMax-Z;let N=this._sizeLods[K],q=3*N*(K>this._lodMax-O7?K-this._lodMax+O7:0),U=4*(this._cubeSize-N);D7(Q,q,U,3*N,2*N),W.setRenderTarget(Q),W.render(Y,o7)}}function VG(J){let Q=[],Z=[],K=J,$=J-O7+1+RG;for(let W=0;W<$;W++){let X=Math.pow(2,K);Q.push(X);let Y=1/(X-2),H=-Y,N=1+Y,q=[H,H,N,H,N,N,H,H,N,N,H,N],U=6,G=6,D=3,O=new Float32Array(D*G*U),V=new Float32Array(D*G*U);for(let F=0;F<U;F++){let C=F%3*2/3-1,_=F>2?0:-1,I=[C,_,0,C+0.6666666666666666,_,0,C+0.6666666666666666,_+1,0,C,_,0,C+0.6666666666666666,_+1,0,C,_+1,0];O.set(I,D*G*F);for(let A=0;A<G;A++){let k=q[A*2]*2-1,P=q[A*2+1]*2-1;if(F===0)vJ.set(1,P,k);else if(F===1)vJ.set(-k,1,-P);else if(F===2)vJ.set(-k,P,1);else if(F===3)vJ.set(-1,P,-k);else if(F===4)vJ.set(-k,-1,P);else vJ.set(k,P,-1);vJ.toArray(V,(F*G+A)*D)}}let E=new U8;if(E.setAttribute("position",new Y8(O,D)),E.setAttribute("outputDirection",new Y8(V,D)),Z.push(new Q8(E,null)),K>O7)K--}return{lodMeshes:Z,sizeLods:Q}}function qX(J,Q,Z){let K=new J8(J,Q,Z);return K.texture.mapping=x7,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function D7(J,Q,Z,K,$){J.viewport.set(Q,Z,K,$),J.scissor.set(Q,Z,K,$)}function BG(J,Q,Z){return new a9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:HQ(),fragmentShader:`

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
		`,blending:k8,depthTest:!1,depthWrite:!1})}function CG(J,Q,Z){return new a9({name:"SphericalGaussianBlur",defines:{SAMPLES:MG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:HQ(),fragmentShader:`

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
		`,blending:k8,depthTest:!1,depthWrite:!1})}function EX(){return new a9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:HQ(),fragmentShader:`

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
		`,blending:k8,depthTest:!1,depthWrite:!1})}function FX(){return new a9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:HQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:k8,depthTest:!1,depthWrite:!1})}function HQ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pK extends J8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},K=[Z,Z,Z,Z,Z,Z];this.texture=new r6(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new F7(5,5,5),$=new a9({name:"CubemapFromEquirect",uniforms:TJ(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:s9,blending:k8});$.uniforms.tEquirect.value=Q;let W=new Q8(K,$),X=Q.minFilter;if(Q.minFilter===CJ)Q.minFilter=i9;return new zK(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,Z=!0,K=!0){let $=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,Z,K);J.setRenderTarget($)}}function AG(J){let Q=new WeakMap,Z=new WeakMap,K=null;function $(G,D=!1){if(G===null||G===void 0)return null;if(D)return X(G);return W(G)}function W(G){if(G&&G.isTexture){let D=G.mapping;if(D===S6||D===j6)if(Q.has(G)){let O=Q.get(G).texture;return Y(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let V=new pK(O.height);return V.fromEquirectangularTexture(J,G),Q.set(G,V),G.addEventListener("dispose",N),Y(V.texture,G.mapping)}else return null}}return G}function X(G){if(G&&G.isTexture){let D=G.mapping,O=D===S6||D===j6,V=D===G7||D===BJ;if(O||V){let E=Z.get(G),F=E!==void 0?E.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==F){if(K===null)K=new fK(J);return E=O?K.fromEquirectangular(G,E):K.fromCubemap(G,E),E.texture.pmremVersion=G.pmremVersion,Z.set(G,E),E.texture}else if(E!==void 0)return E.texture;else{let C=G.image;if(O&&C&&C.height>0||V&&C&&H(C)){if(K===null)K=new fK(J);return E=O?K.fromEquirectangular(G):K.fromCubemap(G),E.texture.pmremVersion=G.pmremVersion,Z.set(G,E),G.addEventListener("dispose",q),E.texture}else return null}}}return G}function Y(G,D){if(D===S6)G.mapping=G7;else if(D===j6)G.mapping=BJ;return G}function H(G){let D=0,O=6;for(let V=0;V<O;V++)if(G[V]!==void 0)D++;return D===O}function N(G){let D=G.target;D.removeEventListener("dispose",N);let O=Q.get(D);if(O!==void 0)Q.delete(D),O.dispose()}function q(G){let D=G.target;D.removeEventListener("dispose",q);let O=Z.get(D);if(O!==void 0)Z.delete(D),O.dispose()}function U(){if(Q=new WeakMap,Z=new WeakMap,K!==null)K.dispose(),K=null}return{get:$,dispose:U}}function zG(J){let Q={};function Z(K){if(Q[K]!==void 0)return Q[K];let $=J.getExtension(K);return Q[K]=$,$}return{has:function(K){return Z(K)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(K){let $=Z(K);if($===null)VJ("WebGLRenderer: "+K+" extension not supported.");return $}}}function kG(J,Q,Z,K){let $={},W=new WeakMap;function X(U){let G=U.target;if(G.index!==null)Q.remove(G.index);for(let O in G.attributes)Q.remove(G.attributes[O]);G.removeEventListener("dispose",X),delete $[G.id];let D=W.get(G);if(D)Q.remove(D),W.delete(G);if(K.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;Z.memory.geometries--}function Y(U,G){if($[G.id]===!0)return G;return G.addEventListener("dispose",X),$[G.id]=!0,Z.memory.geometries++,G}function H(U){let G=U.attributes;for(let D in G)Q.update(G[D],J.ARRAY_BUFFER)}function N(U){let G=[],D=U.index,O=U.attributes.position,V=0;if(O===void 0)return;if(D!==null){let C=D.array;V=D.version;for(let _=0,I=C.length;_<I;_+=3){let A=C[_+0],k=C[_+1],P=C[_+2];G.push(A,k,k,P,P,A)}}else{let C=O.array;V=O.version;for(let _=0,I=C.length/3-1;_<I;_+=3){let A=_+0,k=_+1,P=_+2;G.push(A,k,k,P,P,A)}}let E=new(O.count>=65535?i6:s6)(G,1);E.version=V;let F=W.get(U);if(F)Q.remove(F);W.set(U,E)}function q(U){let G=W.get(U);if(G){let D=U.index;if(D!==null){if(G.version<D.version)N(U)}}else N(U);return W.get(U)}return{get:Y,update:H,getWireframeAttribute:q}}function PG(J,Q,Z){let K;function $(U){K=U}let W,X;function Y(U){W=U.type,X=U.bytesPerElement}function H(U,G){J.drawElements(K,G,W,U*X),Z.update(G,K,1)}function N(U,G,D){if(D===0)return;J.drawElementsInstanced(K,G,W,U*X,D),Z.update(G,K,D)}function q(U,G,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,G,0,W,U,0,D);let V=0;for(let E=0;E<D;E++)V+=G[E];Z.update(V,K,1)}this.setMode=$,this.setIndex=Y,this.render=H,this.renderInstances=N,this.renderMultiDraw=q}function _G(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function K(W,X,Y){switch(Z.calls++,X){case J.TRIANGLES:Z.triangles+=Y*(W/3);break;case J.LINES:Z.lines+=Y*(W/2);break;case J.LINE_STRIP:Z.lines+=Y*(W-1);break;case J.LINE_LOOP:Z.lines+=Y*W;break;case J.POINTS:Z.points+=Y*W;break;default:b0("WebGLInfo: Unknown draw mode:",X);break}}function $(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:$,update:K}}function TG(J,Q,Z){let K=new WeakMap,$=new W9;function W(X,Y,H){let N=X.morphTargetInfluences,q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,U=q!==void 0?q.length:0,G=K.get(Y);if(G===void 0||G.count!==U){let B=function(){P.dispose(),K.delete(Y),Y.removeEventListener("dispose",B)};if(G!==void 0)G.texture.dispose();let D=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,V=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],C=Y.morphAttributes.color||[],_=0;if(D===!0)_=1;if(O===!0)_=2;if(V===!0)_=3;let I=Y.attributes.position.count*_,A=1;if(I>Q.maxTextureSize)A=Math.ceil(I/Q.maxTextureSize),I=Q.maxTextureSize;let k=new Float32Array(I*A*4*U),P=new l6(k,I,A,U);P.type=i8,P.needsUpdate=!0;let L=_*4;for(let m=0;m<U;m++){let j=E[m],y=F[m],d=C[m],T=I*A*4*m;for(let S=0;S<j.count;S++){let n=S*L;if(D===!0)$.fromBufferAttribute(j,S),k[T+n+0]=$.x,k[T+n+1]=$.y,k[T+n+2]=$.z,k[T+n+3]=0;if(O===!0)$.fromBufferAttribute(y,S),k[T+n+4]=$.x,k[T+n+5]=$.y,k[T+n+6]=$.z,k[T+n+7]=0;if(V===!0)$.fromBufferAttribute(d,S),k[T+n+8]=$.x,k[T+n+9]=$.y,k[T+n+10]=$.z,k[T+n+11]=d.itemSize===4?$.w:1}}G={count:U,texture:P,size:new h0(I,A)},K.set(Y,G),Y.addEventListener("dispose",B)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,Z);else{let D=0;for(let V=0;V<N.length;V++)D+=N[V];let O=Y.morphTargetsRelative?1:1-D;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",N)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Z),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function wG(J,Q,Z,K,$){let W=new WeakMap;function X(N){let q=$.render.frame,U=N.geometry,G=Q.get(N,U);if(W.get(G)!==q)Q.update(G),W.set(G,q);if(N.isInstancedMesh){if(N.hasEventListener("dispose",H)===!1)N.addEventListener("dispose",H);if(W.get(N)!==q){if(Z.update(N.instanceMatrix,J.ARRAY_BUFFER),N.instanceColor!==null)Z.update(N.instanceColor,J.ARRAY_BUFFER);W.set(N,q)}}if(N.isSkinnedMesh){let D=N.skeleton;if(W.get(D)!==q)D.update(),W.set(D,q)}return G}function Y(){W=new WeakMap}function H(N){let q=N.target;if(q.removeEventListener("dispose",H),K.releaseStatesOfObject(q),Z.remove(q.instanceMatrix),q.instanceColor!==null)Z.remove(q.instanceColor)}return{update:X,dispose:Y}}var SG={[NZ]:"LINEAR_TONE_MAPPING",[GZ]:"REINHARD_TONE_MAPPING",[qZ]:"CINEON_TONE_MAPPING",[EZ]:"ACES_FILMIC_TONE_MAPPING",[DZ]:"AGX_TONE_MAPPING",[OZ]:"NEUTRAL_TONE_MAPPING",[FZ]:"CUSTOM_TONE_MAPPING"};function jG(J,Q,Z,K,$,W){let X=new J8(Q,Z,{type:J,depthBuffer:$,stencilBuffer:W,samples:K?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,N=new U8;N.setAttribute("position",new d9([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new d9([0,2,0,0,2,0],2));let q=new qK({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),U=new Q8(N,q),G=new ZQ(-1,1,1,-1,0,1),D=null,O=null,V=!1,E,F=null,C=[],_=!1;this.setSize=function(I,A){if(X.setSize(I,A),Y!==null)Y.setSize(I,A);if(H!==null)H.setSize(I,A);for(let k=0;k<C.length;k++){let P=C[k];if(P.setSize)P.setSize(I,A)}},this.setEffects=function(I){C=I,_=C.length>0&&C[0].isRenderPass===!0;let{width:A,height:k}=X;if(C.length>0&&Y===null)Y=new J8(A,k,{type:P8,depthBuffer:!1,stencilBuffer:!1}),H=new J8(A,k,{type:P8,depthBuffer:!1,stencilBuffer:!1});for(let P=0;P<C.length;P++){let L=C[P];if(L.setSize)L.setSize(A,k)}},this.begin=function(I,A){if(V)return!1;if(I.toneMapping===R8&&C.length===0)return!1;if(F=A,A!==null){let{width:k,height:P}=A;if(X.width!==k||X.height!==P)this.setSize(k,P)}if(_===!1)I.setRenderTarget(X);return E=I.toneMapping,I.toneMapping=R8,!0},this.hasRenderPass=function(){return _},this.end=function(I,A){I.toneMapping=E,V=!0;let k=X,P=Y;for(let L=0;L<C.length;L++){let B=C[L];if(B.enabled===!1)continue;if(B.render(I,P,k,A),B.needsSwap!==!1)k=P,P=P===Y?H:Y}if(D!==I.outputColorSpace||O!==I.toneMapping){if(D=I.outputColorSpace,O=I.toneMapping,q.defines={},i0.getTransfer(D)===G9)q.defines.SRGB_TRANSFER="";let L=SG[O];if(L)q.defines[L]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=k.texture,I.setRenderTarget(F),I.render(U,G),F=null,V=!1},this.isCompositing=function(){return V},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();N.dispose(),q.dispose()}}var bX=new y9,xK=new _J(1,1),yX=new l6,hX=new YK,fX=new r6,DX=[],OX=[],RX=new Float32Array(16),MX=new Float32Array(9),LX=new Float32Array(4);function R7(J,Q,Z){let K=J[0];if(K<=0||K>0)return J;let $=Q*Z,W=DX[$];if(W===void 0)W=new Float32Array($),DX[$]=W;if(Q!==0){K.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=Z,J[X].toArray(W,Y)}return W}function C9(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,K=J.length;Z<K;Z++)if(J[Z]!==Q[Z])return!1;return!0}function A9(J,Q){for(let Z=0,K=Q.length;Z<K;Z++)J[Z]=Q[Z]}function UQ(J,Q){let Z=OX[Q];if(Z===void 0)Z=new Int32Array(Q),OX[Q]=Z;for(let K=0;K!==Q;++K)Z[K]=J.allocateTextureUnit();return Z}function vG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function bG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(C9(Z,Q))return;J.uniform2fv(this.addr,Q),A9(Z,Q)}}function yG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(C9(Z,Q))return;J.uniform3fv(this.addr,Q),A9(Z,Q)}}function hG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(C9(Z,Q))return;J.uniform4fv(this.addr,Q),A9(Z,Q)}}function fG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(C9(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),A9(Z,Q)}else{if(C9(Z,K))return;LX.set(K),J.uniformMatrix2fv(this.addr,!1,LX),A9(Z,K)}}function xG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(C9(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),A9(Z,Q)}else{if(C9(Z,K))return;MX.set(K),J.uniformMatrix3fv(this.addr,!1,MX),A9(Z,K)}}function gG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(C9(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),A9(Z,Q)}else{if(C9(Z,K))return;RX.set(K),J.uniformMatrix4fv(this.addr,!1,RX),A9(Z,K)}}function pG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function mG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(C9(Z,Q))return;J.uniform2iv(this.addr,Q),A9(Z,Q)}}function dG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(C9(Z,Q))return;J.uniform3iv(this.addr,Q),A9(Z,Q)}}function uG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(C9(Z,Q))return;J.uniform4iv(this.addr,Q),A9(Z,Q)}}function lG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function cG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(C9(Z,Q))return;J.uniform2uiv(this.addr,Q),A9(Z,Q)}}function nG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(C9(Z,Q))return;J.uniform3uiv(this.addr,Q),A9(Z,Q)}}function sG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(C9(Z,Q))return;J.uniform4uiv(this.addr,Q),A9(Z,Q)}}function iG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_2D_SHADOW)xK.compareFunction=Z.isReversedDepthBuffer()?d6:m6,W=xK;else W=bX;Z.setTexture2D(Q||W,$)}function oG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture3D(Q||hX,$)}function aG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTextureCube(Q||fX,$)}function rG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture2DArray(Q||yX,$)}function tG(J){switch(J){case 5126:return vG;case 35664:return bG;case 35665:return yG;case 35666:return hG;case 35674:return fG;case 35675:return xG;case 35676:return gG;case 5124:case 35670:return pG;case 35667:case 35671:return mG;case 35668:case 35672:return dG;case 35669:case 35673:return uG;case 5125:return lG;case 36294:return cG;case 36295:return nG;case 36296:return sG;case 35678:case 36198:case 36298:case 36306:case 35682:return iG;case 35679:case 36299:case 36307:return oG;case 35680:case 36300:case 36308:case 36293:return aG;case 36289:case 36303:case 36311:case 36292:return rG}}function eG(J,Q){J.uniform1fv(this.addr,Q)}function J5(J,Q){let Z=R7(Q,this.size,2);J.uniform2fv(this.addr,Z)}function Q5(J,Q){let Z=R7(Q,this.size,3);J.uniform3fv(this.addr,Z)}function Z5(J,Q){let Z=R7(Q,this.size,4);J.uniform4fv(this.addr,Z)}function K5(J,Q){let Z=R7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function $5(J,Q){let Z=R7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function W5(J,Q){let Z=R7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function X5(J,Q){J.uniform1iv(this.addr,Q)}function Y5(J,Q){J.uniform2iv(this.addr,Q)}function H5(J,Q){J.uniform3iv(this.addr,Q)}function U5(J,Q){J.uniform4iv(this.addr,Q)}function N5(J,Q){J.uniform1uiv(this.addr,Q)}function G5(J,Q){J.uniform2uiv(this.addr,Q)}function q5(J,Q){J.uniform3uiv(this.addr,Q)}function E5(J,Q){J.uniform4uiv(this.addr,Q)}function F5(J,Q,Z){let K=this.cache,$=Q.length,W=UQ(Z,$);if(!C9(K,W))J.uniform1iv(this.addr,W),A9(K,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=xK;else X=bX;for(let Y=0;Y!==$;++Y)Z.setTexture2D(Q[Y]||X,W[Y])}function D5(J,Q,Z){let K=this.cache,$=Q.length,W=UQ(Z,$);if(!C9(K,W))J.uniform1iv(this.addr,W),A9(K,W);for(let X=0;X!==$;++X)Z.setTexture3D(Q[X]||hX,W[X])}function O5(J,Q,Z){let K=this.cache,$=Q.length,W=UQ(Z,$);if(!C9(K,W))J.uniform1iv(this.addr,W),A9(K,W);for(let X=0;X!==$;++X)Z.setTextureCube(Q[X]||fX,W[X])}function R5(J,Q,Z){let K=this.cache,$=Q.length,W=UQ(Z,$);if(!C9(K,W))J.uniform1iv(this.addr,W),A9(K,W);for(let X=0;X!==$;++X)Z.setTexture2DArray(Q[X]||yX,W[X])}function M5(J){switch(J){case 5126:return eG;case 35664:return J5;case 35665:return Q5;case 35666:return Z5;case 35674:return K5;case 35675:return $5;case 35676:return W5;case 5124:case 35670:return X5;case 35667:case 35671:return Y5;case 35668:case 35672:return H5;case 35669:case 35673:return U5;case 5125:return N5;case 36294:return G5;case 36295:return q5;case 36296:return E5;case 35678:case 36198:case 36298:case 36306:case 35682:return F5;case 35679:case 36299:case 36307:return D5;case 35680:case 36300:case 36308:case 36293:return O5;case 36289:case 36303:case 36311:case 36292:return R5}}class xX{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=tG(Q.type)}}class gX{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=M5(Q.type)}}class pX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let K=this.seq;for(let $=0,W=K.length;$!==W;++$){let X=K[$];X.setValue(J,Q[X.id],Z)}}}var yK=/(\w+)(\])?(\[|\.)?/g;function IX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function L5(J,Q,Z){let K=J.name,$=K.length;yK.lastIndex=0;while(!0){let W=yK.exec(K),X=yK.lastIndex,Y=W[1],H=W[2]==="]",N=W[3];if(H)Y=Y|0;if(N===void 0||N==="["&&X+2===$){IX(Z,N===void 0?new xX(Y,J,Q):new gX(Y,J,Q));break}else{let U=Z.map[Y];if(U===void 0)U=new pX(Y),IX(Z,U);Z=U}}}class t7{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<Z;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);L5(X,Y,this)}let K=[],$=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(W);else $.push(W);if(K.length>0)this.seq=K.concat($)}setValue(J,Q,Z,K){let $=this.map[Q];if($!==void 0)$.setValue(J,Z,K)}setOptional(J,Q,Z){let K=Q[Z];if(K!==void 0)this.setValue(J,Z,K)}static upload(J,Q,Z,K){for(let $=0,W=Q.length;$!==W;++$){let X=Q[$],Y=Z[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let Z=[];for(let K=0,$=J.length;K!==$;++K){let W=J[K];if(W.id in Q)Z.push(W)}return Z}}function VX(J,Q,Z){let K=J.createShader(Q);return J.shaderSource(K,Z),J.compileShader(K),K}var I5=37297,V5=0;function B5(J,Q){let Z=J.split(`
`),K=[],$=Math.max(Q-6,0),W=Math.min(Q+6,Z.length);for(let X=$;X<W;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${Z[X]}`)}return K.join(`
`)}var BX=new f0;function C5(J){i0._getMatrix(BX,i0.workingColorSpace,J);let Q=`mat3( ${BX.elements.map((Z)=>Z.toFixed(4))} )`;switch(i0.getTransfer(J)){case QK:return[Q,"LinearTransferOETF"];case G9:return[Q,"sRGBTransferOETF"];default:return j0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function CX(J,Q,Z){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(K&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return Z.toUpperCase()+`

`+W+`

`+B5(J.getShaderSource(Q),Y)}else return W}function A5(J,Q){let Z=C5(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}var z5={[NZ]:"Linear",[GZ]:"Reinhard",[qZ]:"Cineon",[EZ]:"ACESFilmic",[DZ]:"AgX",[OZ]:"Neutral",[FZ]:"Custom"};function k5(J,Q){let Z=z5[Q];if(Z===void 0)return j0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var YQ=new x;function P5(){i0.getLuminanceCoefficients(YQ);let J=YQ.x.toFixed(4),Q=YQ.y.toFixed(4),Z=YQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function _5(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(r7).join(`
`)}function T5(J){let Q=[];for(let Z in J){let K=J[Z];if(K===!1)continue;Q.push("#define "+Z+" "+K)}return Q.join(`
`)}function w5(J,Q){let Z={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let $=0;$<K;$++){let W=J.getActiveAttrib(Q,$),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;Z[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return Z}function r7(J){return J!==""}function AX(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function zX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var S5=/^[ \t]*#include +<([\w\d./]+)>/gm;function gK(J){return J.replace(S5,v5)}var j5=new Map;function v5(J,Q){let Z=l0[Q];if(Z===void 0){let K=j5.get(Q);if(K!==void 0)Z=l0[K],j0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return gK(Z)}var b5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kX(J){return J.replace(b5,y5)}function y5(J,Q,Z,K){let $="";for(let W=parseInt(Q);W<parseInt(Z);W++)$+=K.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return $}function PX(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var h5={[h7]:"SHADOWMAP_TYPE_PCF",[H7]:"SHADOWMAP_TYPE_VSM"};function f5(J){return h5[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x5={[G7]:"ENVMAP_TYPE_CUBE",[BJ]:"ENVMAP_TYPE_CUBE",[x7]:"ENVMAP_TYPE_CUBE_UV"};function g5(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return x5[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var p5={[BJ]:"ENVMAP_MODE_REFRACTION"};function m5(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return p5[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d5={[hW]:"ENVMAP_BLENDING_MULTIPLY",[fW]:"ENVMAP_BLENDING_MIX",[xW]:"ENVMAP_BLENDING_ADD"};function u5(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return d5[J.combine]||"ENVMAP_BLENDING_NONE"}function l5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:K,maxMip:Z}}function c5(J,Q,Z,K){let $=J.getContext(),W=Z.defines,X=Z.vertexShader,Y=Z.fragmentShader,H=f5(Z),N=g5(Z),q=m5(Z),U=u5(Z),G=l5(Z),D=_5(Z),O=T5(W),V=$.createProgram(),E,F,C=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(r7).join(`
`),E.length>0)E+=`
`;if(F=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O].filter(r7).join(`
`),F.length>0)F+=`
`}else E=[PX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+q:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexNormals?"#define HAS_NORMAL":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(r7).join(`
`),F=[PX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,O,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+N:"",Z.envMap?"#define "+q:"",Z.envMap?"#define "+U:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.retroreflection?"#define USE_RETROREFLECTION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor?"#define USE_COLOR":"",Z.vertexAlphas||Z.batchingColor?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==R8?"#define TONE_MAPPING":"",Z.toneMapping!==R8?l0.tonemapping_pars_fragment:"",Z.toneMapping!==R8?k5("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",l0.colorspace_pars_fragment,A5("linearToOutputTexel",Z.outputColorSpace),P5(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(r7).join(`
`);if(X=gK(X),X=AX(X,Z),X=zX(X,Z),Y=gK(Y),Y=AX(Y,Z),Y=zX(Y,Z),X=kX(X),Y=kX(Y),Z.isRawShaderMaterial!==!0)C=`#version 300 es
`,E=[D,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,F=["#define varying in",Z.glslVersion===ZK?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===ZK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let _=C+E+X,I=C+F+Y,A=VX($,$.VERTEX_SHADER,_),k=VX($,$.FRAGMENT_SHADER,I);if($.attachShader(V,A),$.attachShader(V,k),Z.index0AttributeName!==void 0)$.bindAttribLocation(V,0,Z.index0AttributeName);else if(Z.hasPositionAttribute===!0)$.bindAttribLocation(V,0,"position");$.linkProgram(V);function P(j){if(J.debug.checkShaderErrors){let y=$.getProgramInfoLog(V)||"",d=$.getShaderInfoLog(A)||"",T=$.getShaderInfoLog(k)||"",S=y.trim(),n=d.trim(),u=T.trim(),$0=!0,i=!0;if($.getProgramParameter(V,$.LINK_STATUS)===!1)if($0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError($,V,A,k);else{let Z0=CX($,A,"vertex"),X0=CX($,k,"fragment");b0("WebGLProgram: Shader Error "+$.getError()+" - VALIDATE_STATUS "+$.getProgramParameter(V,$.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+S+`
`+Z0+`
`+X0)}else if(S!=="")j0("WebGLProgram: Program Info Log:",S);else if(n===""||u==="")i=!1;if(i)j.diagnostics={runnable:$0,programLog:S,vertexShader:{log:n,prefix:E},fragmentShader:{log:u,prefix:F}}}$.deleteShader(A),$.deleteShader(k),L=new t7($,V),B=w5($,V)}let L;this.getUniforms=function(){if(L===void 0)P(this);return L};let B;this.getAttributes=function(){if(B===void 0)P(this);return B};let m=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(m===!1)m=$.getProgramParameter(V,I5);return m},this.destroy=function(){K.releaseStatesOfProgram(this),$.deleteProgram(V),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=V5++,this.cacheKey=Q,this.usedTimes=1,this.program=V,this.vertexShader=A,this.fragmentShader=k,this}var n5=0;class mX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,Z){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new dX(J),Q.set(J,Z);return Z}}class dX{constructor(J){this.id=n5++,this.code=J,this.usedTimes=0}}function s5(J){return J===kJ||J===g6||J===p6}function i5(J,Q,Z,K,$,W){let X=new c6,Y=new mX,H=new Set,N=[],q=new Map,U=K.logarithmicDepthBuffer,G=K.precision,D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(L){if(H.add(L),L===0)return"uv";return`uv${L}`}function V(L,B,m,j,y,d){let T=j.fog,S=y.geometry,n=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?j.environment:null,u=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,$0=Q.get(L.envMap||n,u),i=!!$0&&$0.mapping===x7?$0.image.height:null,Z0=D[L.type];if(L.precision!==null){if(G=K.getMaxPrecision(L.precision),G!==L.precision)j0("WebGLProgram.getParameters:",L.precision,"not supported, using",G,"instead.")}let X0=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,T0=X0!==void 0?X0.length:0,_0=0;if(S.morphAttributes.position!==void 0)_0=1;if(S.morphAttributes.normal!==void 0)_0=2;if(S.morphAttributes.color!==void 0)_0=3;let c0,d0,w,g;if(Z0){let q9=u9[Z0];c0=q9.vertexShader,d0=q9.fragmentShader}else{c0=L.vertexShader,d0=L.fragmentShader;let q9=Y.getVertexShaderStage(L),Q9=Y.getFragmentShaderStage(L);Y.update(L,q9,Q9),w=q9.id,g=Q9.id}let p=J.getRenderTarget(),a=J.state.buffers.depth.getReversed(),Q0=y.isInstancedMesh===!0,r=y.isBatchedMesh===!0,A0=!!L.map,q0=!!L.matcap,v0=!!$0,p0=!!L.aoMap,y0=!!L.lightMap,s0=!!L.bumpMap&&L.wireframe===!1,a0=!!L.normalMap,L9=!!L.displacementMap,F9=!!L.emissiveMap,D9=!!L.metalnessMap,v=!!L.roughnessMap,B9=L.anisotropy>0,e0=L.clearcoat>0,U9=L.dispersion>0,z=L.retroreflectivity>0,R=L.iridescence>0,b=L.sheen>0,s=L.transmission>0,W0=B9&&!!L.anisotropyMap,U0=e0&&!!L.clearcoatMap,E0=e0&&!!L.clearcoatNormalMap,t=e0&&!!L.clearcoatRoughnessMap,K0=R&&!!L.iridescenceMap,O0=R&&!!L.iridescenceThicknessMap,C0=b&&!!L.sheenColorMap,N0=b&&!!L.sheenRoughnessMap,H0=!!L.specularMap,w0=!!L.specularColorMap,S0=!!L.specularIntensityMap,J9=s&&!!L.transmissionMap,f=s&&!!L.thicknessMap,F0=!!L.gradientMap,J0=!!L.alphaMap,D0=L.alphaTest>0,I0=!!L.alphaHash,Y0=!!L.extensions,R0=R8;if(L.toneMapped){if(p===null||p.isXRRenderTarget===!0)R0=J.toneMapping}let m0={shaderID:Z0,shaderType:L.type,shaderName:L.name,vertexShader:c0,fragmentShader:d0,defines:L.defines,customVertexShaderID:w,customFragmentShaderID:g,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:G,batching:r,batchingColor:r&&y._colorsTexture!==null,instancing:Q0,instancingColor:Q0&&y.instanceColor!==null,instancingMorph:Q0&&y.morphTexture!==null,outputColorSpace:p===null?J.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:i0.workingColorSpace,alphaToCoverage:!!L.alphaToCoverage,map:A0,matcap:q0,envMap:v0,envMapMode:v0&&$0.mapping,envMapCubeUVHeight:i,aoMap:p0,lightMap:y0,bumpMap:s0,normalMap:a0,displacementMap:L9,emissiveMap:F9,normalMapObjectSpace:a0&&L.normalMapType===oW,normalMapTangentSpace:a0&&L.normalMapType===eZ,packedNormalMap:a0&&L.normalMapType===eZ&&s5(L.normalMap.format),metalnessMap:D9,roughnessMap:v,anisotropy:B9,anisotropyMap:W0,clearcoat:e0,clearcoatMap:U0,clearcoatNormalMap:E0,clearcoatRoughnessMap:t,dispersion:U9,retroreflection:z,iridescence:R,iridescenceMap:K0,iridescenceThicknessMap:O0,sheen:b,sheenColorMap:C0,sheenRoughnessMap:N0,specularMap:H0,specularColorMap:w0,specularIntensityMap:S0,transmission:s,transmissionMap:J9,thicknessMap:f,gradientMap:F0,opaque:L.transparent===!1&&L.blending===f7&&L.alphaToCoverage===!1,alphaMap:J0,alphaTest:D0,alphaHash:I0,combine:L.combine,mapUv:A0&&O(L.map.channel),aoMapUv:p0&&O(L.aoMap.channel),lightMapUv:y0&&O(L.lightMap.channel),bumpMapUv:s0&&O(L.bumpMap.channel),normalMapUv:a0&&O(L.normalMap.channel),displacementMapUv:L9&&O(L.displacementMap.channel),emissiveMapUv:F9&&O(L.emissiveMap.channel),metalnessMapUv:D9&&O(L.metalnessMap.channel),roughnessMapUv:v&&O(L.roughnessMap.channel),anisotropyMapUv:W0&&O(L.anisotropyMap.channel),clearcoatMapUv:U0&&O(L.clearcoatMap.channel),clearcoatNormalMapUv:E0&&O(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:t&&O(L.clearcoatRoughnessMap.channel),iridescenceMapUv:K0&&O(L.iridescenceMap.channel),iridescenceThicknessMapUv:O0&&O(L.iridescenceThicknessMap.channel),sheenColorMapUv:C0&&O(L.sheenColorMap.channel),sheenRoughnessMapUv:N0&&O(L.sheenRoughnessMap.channel),specularMapUv:H0&&O(L.specularMap.channel),specularColorMapUv:w0&&O(L.specularColorMap.channel),specularIntensityMapUv:S0&&O(L.specularIntensityMap.channel),transmissionMapUv:J9&&O(L.transmissionMap.channel),thicknessMapUv:f&&O(L.thicknessMap.channel),alphaMapUv:J0&&O(L.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(a0||B9),vertexNormals:!!S.attributes.normal,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!S.attributes.uv&&(A0||J0),fog:!!T,useFog:L.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:L.wireframe===!1&&(L.flatShading===!0||S.attributes.normal===void 0&&a0===!1&&(L.isMeshLambertMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isMeshPhysicalMaterial)),sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:U,reversedDepthBuffer:a,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:S.attributes.position!==void 0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:T0,morphTextureStride:_0,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:d.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&m.length>0,shadowMapType:J.shadowMap.type,toneMapping:R0,decodeVideoTexture:A0&&L.map.isVideoTexture===!0&&i0.getTransfer(L.map.colorSpace)===G9,decodeVideoTextureEmissive:F9&&L.emissiveMap.isVideoTexture===!0&&i0.getTransfer(L.emissiveMap.colorSpace)===G9,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===z8,flipSided:L.side===s9,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Y0&&L.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y0&&L.extensions.multiDraw===!0||r)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return m0.vertexUv1s=H.has(1),m0.vertexUv2s=H.has(2),m0.vertexUv3s=H.has(3),H.clear(),m0}function E(L){let B=[];if(L.shaderID)B.push(L.shaderID);else B.push(L.customVertexShaderID),B.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let m in L.defines)B.push(m),B.push(L.defines[m]);if(L.isRawShaderMaterial===!1)F(B,L),C(B,L),B.push(J.outputColorSpace);return B.push(L.customProgramCacheKey),B.join()}function F(L,B){L.push(B.precision),L.push(B.outputColorSpace),L.push(B.envMapMode),L.push(B.envMapCubeUVHeight),L.push(B.mapUv),L.push(B.alphaMapUv),L.push(B.lightMapUv),L.push(B.aoMapUv),L.push(B.bumpMapUv),L.push(B.normalMapUv),L.push(B.displacementMapUv),L.push(B.emissiveMapUv),L.push(B.metalnessMapUv),L.push(B.roughnessMapUv),L.push(B.anisotropyMapUv),L.push(B.clearcoatMapUv),L.push(B.clearcoatNormalMapUv),L.push(B.clearcoatRoughnessMapUv),L.push(B.iridescenceMapUv),L.push(B.iridescenceThicknessMapUv),L.push(B.sheenColorMapUv),L.push(B.sheenRoughnessMapUv),L.push(B.specularMapUv),L.push(B.specularColorMapUv),L.push(B.specularIntensityMapUv),L.push(B.transmissionMapUv),L.push(B.thicknessMapUv),L.push(B.combine),L.push(B.fogExp2),L.push(B.sizeAttenuation),L.push(B.morphTargetsCount),L.push(B.morphAttributeCount),L.push(B.numSunLights),L.push(B.numDirLights),L.push(B.numPointLights),L.push(B.numSpotLights),L.push(B.numSpotLightMaps),L.push(B.numHemiLights),L.push(B.numRectAreaLights),L.push(B.numSunLightShadows),L.push(B.numDirLightShadows),L.push(B.numPointLightShadows),L.push(B.numSpotLightShadows),L.push(B.numSpotLightShadowsWithMaps),L.push(B.numLightProbes),L.push(B.shadowMapType),L.push(B.toneMapping),L.push(B.numClippingPlanes),L.push(B.numClipIntersection),L.push(B.depthPacking)}function C(L,B){if(X.disableAll(),B.instancing)X.enable(0);if(B.instancingColor)X.enable(1);if(B.instancingMorph)X.enable(2);if(B.matcap)X.enable(3);if(B.envMap)X.enable(4);if(B.normalMapObjectSpace)X.enable(5);if(B.normalMapTangentSpace)X.enable(6);if(B.clearcoat)X.enable(7);if(B.iridescence)X.enable(8);if(B.alphaTest)X.enable(9);if(B.vertexColors)X.enable(10);if(B.vertexAlphas)X.enable(11);if(B.vertexUv1s)X.enable(12);if(B.vertexUv2s)X.enable(13);if(B.vertexUv3s)X.enable(14);if(B.vertexTangents)X.enable(15);if(B.anisotropy)X.enable(16);if(B.alphaHash)X.enable(17);if(B.batching)X.enable(18);if(B.dispersion)X.enable(19);if(B.retroreflection)X.enable(24);if(B.batchingColor)X.enable(20);if(B.gradientMap)X.enable(21);if(B.packedNormalMap)X.enable(22);if(B.vertexNormals)X.enable(23);if(L.push(X.mask),X.disableAll(),B.fog)X.enable(0);if(B.useFog)X.enable(1);if(B.flatShading)X.enable(2);if(B.logarithmicDepthBuffer)X.enable(3);if(B.reversedDepthBuffer)X.enable(4);if(B.skinning)X.enable(5);if(B.morphTargets)X.enable(6);if(B.morphNormals)X.enable(7);if(B.morphColors)X.enable(8);if(B.premultipliedAlpha)X.enable(9);if(B.shadowMapEnabled)X.enable(10);if(B.doubleSided)X.enable(11);if(B.flipSided)X.enable(12);if(B.useDepthPacking)X.enable(13);if(B.dithering)X.enable(14);if(B.transmission)X.enable(15);if(B.sheen)X.enable(16);if(B.opaque)X.enable(17);if(B.pointsUvs)X.enable(18);if(B.decodeVideoTexture)X.enable(19);if(B.decodeVideoTextureEmissive)X.enable(20);if(B.alphaToCoverage)X.enable(21);if(B.numLightProbeGrids>0)X.enable(22);if(B.hasPositionAttribute)X.enable(23);L.push(X.mask)}function _(L){let B=D[L.type],m;if(B){let j=u9[B];m=s7.clone(j.uniforms)}else m=L.uniforms;return m}function I(L,B){let m=q.get(B);if(m!==void 0)++m.usedTimes;else m=new c5(J,B,L,$),N.push(m),q.set(B,m);return m}function A(L){if(--L.usedTimes===0){let B=N.indexOf(L);N[B]=N[N.length-1],N.pop(),q.delete(L.cacheKey),L.destroy()}}function k(L){Y.remove(L)}function P(){Y.dispose()}return{getParameters:V,getProgramCacheKey:E,getUniforms:_,acquireProgram:I,releaseProgram:A,releaseShaderCache:k,programs:N,dispose:P}}function o5(){let J=new WeakMap;function Q(X){return J.has(X)}function Z(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function $(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:Z,remove:K,update:$,dispose:W}}function a5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function _X(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function TX(){let J=[],Q=0,Z=[],K=[],$=[];function W(){Q=0,Z.length=0,K.length=0,$.length=0}function X(G){let D=0;if(G.isInstancedMesh)D+=2;if(G.isSkinnedMesh)D+=1;return D}function Y(G,D,O,V,E,F){let C=J[Q];if(C===void 0)C={id:G.id,object:G,geometry:D,material:O,materialVariant:X(G),groupOrder:V,renderOrder:G.renderOrder,z:E,group:F},J[Q]=C;else C.id=G.id,C.object=G,C.geometry=D,C.material=O,C.materialVariant=X(G),C.groupOrder=V,C.renderOrder=G.renderOrder,C.z=E,C.group=F;return Q++,C}function H(G,D,O,V,E,F,C){if(C.reversedDepth===!0)E=-E;let _=Y(G,D,O,V,E,F);if(O.transmission>0)K.push(_);else if(O.transparent===!0)$.push(_);else Z.push(_)}function N(G,D,O,V,E,F){let C=Y(G,D,O,V,E,F);if(O.transmission>0)K.unshift(C);else if(O.transparent===!0)$.unshift(C);else Z.unshift(C)}function q(G,D){if(Z.length>1)Z.sort(G||a5);if(K.length>1)K.sort(D||_X);if($.length>1)$.sort(D||_X)}function U(){for(let G=Q,D=J.length;G<D;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Z,transmissive:K,transparent:$,init:W,push:H,unshift:N,finish:U,sort:q}}function r5(){let J=new WeakMap;function Q(K,$){let W=J.get(K),X;if(W===void 0)X=new TX,J.set(K,[X]);else if($>=W.length)X=new TX,W.push(X);else X=W[$];return X}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function t5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={direction:new x,color:new t0};break;case"SpotLight":Z={position:new x,direction:new x,color:new t0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new x,color:new t0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new x,skyColor:new t0,groundColor:new t0};break;case"RectAreaLight":Z={color:new t0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=Z,Z}}}function e5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var Jq=0;function Qq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function Zq(J){let Q=new t5,Z=e5(),K={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let N=0;N<9;N++)K.probe.push(new x);let $=new x,W=new R9,X=new R9;function Y(N){let q=0,U=0,G=0;for(let y=0;y<9;y++)K.probe[y].set(0,0,0);let D=0,O=0,V=0,E=0,F=0,C=0,_=0,I=0,A=0,k=0,P=0,L=0,B=0,m=0;N.sort(Qq);for(let y=0,d=N.length;y<d;y++){let T=N[y],S=T.color,n=T.intensity,u=T.distance,$0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===kJ)$0=T.shadow.map.texture;else $0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)q+=S.r*n,U+=S.g*n,G+=S.b*n;else if(T.isLightProbe){for(let i=0;i<9;i++)K.probe[i].addScaledVector(T.sh.coefficients[i],n);m++}else if(T.isSunLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize.copy(Z0.mapSize).multiply(Z0.getFrameExtents()),K.sunShadow[O]=X0,K.sunShadowMap[O]=$0;let T0=Z0.getViewportCount();for(let _0=0;_0<T0;_0++)K.sunShadowMatrix[V+_0]=Z0.getMatrix(_0),K.sunShadowCascade[V+_0]=Z0._cascadeData[_0];V+=T0,O++}K.sun[D]=i,D++}else if(T.isDirectionalLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.directionalShadow[E]=X0,K.directionalShadowMap[E]=$0,K.directionalShadowMatrix[E]=T.shadow.matrix,A++}K.directional[E]=i,E++}else if(T.isSpotLight){let i=Q.get(T);i.position.setFromMatrixPosition(T.matrixWorld),i.color.copy(S).multiplyScalar(n),i.distance=u,i.coneCos=Math.cos(T.angle),i.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),i.decay=T.decay,K.spot[C]=i;let Z0=T.shadow;if(T.map){if(K.spotLightMap[L]=T.map,L++,Z0.updateMatrices(T),T.castShadow)B++}if(K.spotLightMatrix[C]=Z0.matrix,T.castShadow){let X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,K.spotShadow[C]=X0,K.spotShadowMap[C]=$0,P++}C++}else if(T.isRectAreaLight){let i=Q.get(T);i.color.copy(S).multiplyScalar(n),i.halfWidth.set(T.width*0.5,0,0),i.halfHeight.set(0,T.height*0.5,0),K.rectArea[_]=i,_++}else if(T.isPointLight){let i=Q.get(T);if(i.color.copy(T.color).multiplyScalar(T.intensity),i.distance=T.distance,i.decay=T.decay,T.castShadow){let Z0=T.shadow,X0=Z.get(T);X0.shadowIntensity=Z0.intensity,X0.shadowBias=Z0.bias,X0.shadowNormalBias=Z0.normalBias,X0.shadowRadius=Z0.radius,X0.shadowMapSize=Z0.mapSize,X0.shadowCameraNear=Z0.camera.near,X0.shadowCameraFar=Z0.camera.far,K.pointShadow[F]=X0,K.pointShadowMap[F]=$0,K.pointShadowMatrix[F]=T.shadow.matrix,k++}K.point[F]=i,F++}else if(T.isHemisphereLight){let i=Q.get(T);i.skyColor.copy(T.color).multiplyScalar(n),i.groundColor.copy(T.groundColor).multiplyScalar(n),K.hemi[I]=i,I++}}if(_>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=G0.LTC_FLOAT_1,K.rectAreaLTC2=G0.LTC_FLOAT_2;else K.rectAreaLTC1=G0.LTC_HALF_1,K.rectAreaLTC2=G0.LTC_HALF_2;K.ambient[0]=q,K.ambient[1]=U,K.ambient[2]=G;let j=K.hash;if(j.sunLength!==D||j.directionalLength!==E||j.pointLength!==F||j.spotLength!==C||j.rectAreaLength!==_||j.hemiLength!==I||j.numSunShadows!==O||j.numDirectionalShadows!==A||j.numPointShadows!==k||j.numSpotShadows!==P||j.numSpotMaps!==L||j.numLightProbes!==m)K.sun.length=D,K.directional.length=E,K.spot.length=C,K.rectArea.length=_,K.point.length=F,K.hemi.length=I,K.sunShadow.length=O,K.sunShadowMap.length=O,K.sunShadowMatrix.length=V,K.sunShadowCascade.length=V,K.directionalShadow.length=A,K.directionalShadowMap.length=A,K.directionalShadowMatrix.length=A,K.pointShadow.length=k,K.pointShadowMap.length=k,K.pointShadowMatrix.length=k,K.spotShadow.length=P,K.spotShadowMap.length=P,K.spotLightMatrix.length=P+L-B,K.spotLightMap.length=L,K.numSpotLightShadowsWithMaps=B,K.numLightProbes=m,j.sunLength=D,j.directionalLength=E,j.pointLength=F,j.spotLength=C,j.rectAreaLength=_,j.hemiLength=I,j.numSunShadows=O,j.numDirectionalShadows=A,j.numPointShadows=k,j.numSpotShadows=P,j.numSpotMaps=L,j.numLightProbes=m,K.version=Jq++}function H(N,q){let U=0,G=0,D=0,O=0,V=0,E=0,F=q.matrixWorldInverse;for(let C=0,_=N.length;C<_;C++){let I=N[C];if(I.isSunLight){let A=K.sun[U];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(F),U++}else if(I.isDirectionalLight){let A=K.directional[G];A.direction.setFromMatrixPosition(I.matrixWorld),$.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(F),G++}else if(I.isSpotLight){let A=K.spot[O];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(F),A.direction.setFromMatrixPosition(I.matrixWorld),$.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub($),A.direction.transformDirection(F),O++}else if(I.isRectAreaLight){let A=K.rectArea[V];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(F),X.identity(),W.copy(I.matrixWorld),W.premultiply(F),X.extractRotation(W),A.halfWidth.set(I.width*0.5,0,0),A.halfHeight.set(0,I.height*0.5,0),A.halfWidth.applyMatrix4(X),A.halfHeight.applyMatrix4(X),V++}else if(I.isPointLight){let A=K.point[D];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(F),D++}else if(I.isHemisphereLight){let A=K.hemi[E];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(F),E++}}}return{setup:Y,setupView:H,state:K}}function wX(J){let Q=new Zq(J),Z=[],K=[],$=[];function W(G){U.camera=G,Z.length=0,K.length=0,$.length=0}function X(G){Z.push(G)}function Y(G){K.push(G)}function H(G){$.push(G)}function N(){Q.setup(Z)}function q(G){Q.setupView(Z,G)}let U={lightsArray:Z,shadowsArray:K,lightProbeGridArray:$,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:U,setupLights:N,setupLightsView:q,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function Kq(J){let Q=new WeakMap;function Z($,W=0){let X=Q.get($),Y;if(X===void 0)Y=new wX(J),Q.set($,[Y]);else if(W>=X.length)Y=new wX(J),X.push(Y);else Y=X[W];return Y}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var $q=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wq=`uniform sampler2D shadow_pass;
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
}`,Xq=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],Yq=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],SX=new R9,a7=new x,hK=new x;function Hq(J,Q,Z){let K=new a6,$=new h0,W=new h0,X=new W9,Y=new EK,H=new FK,N={},q=Z.maxTextureSize,U={[U7]:s9,[s9]:U7,[z8]:z8},G=new a9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new h0},radius:{value:4}},vertexShader:$q,fragmentShader:Wq}),D=G.clone();D.defines.HORIZONTAL_PASS=1;let O=new U8;O.setAttribute("position",new Y8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let V=new Q8(O,G),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h7;let F=this.type;this.render=function(k,P,L){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(k.length===0)return;if(this.type===NW)j0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=h7;let B=J.getRenderTarget(),m=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),y=J.state;if(y.setBlending(k8),y.buffers.depth.getReversed()===!0)y.buffers.color.setClear(0,0,0,0);else y.buffers.color.setClear(1,1,1,1);y.buffers.depth.setTest(!0),y.setScissorTest(!1);let d=F!==this.type;if(d)P.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((S)=>S.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,S=k.length;T<S;T++){let n=k[T],u=n.shadow;if(u===void 0){j0("WebGLShadowMap:",n,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;$.copy(u.mapSize);let $0=u.getFrameExtents();if($.multiply($0),W.copy(u.mapSize),$.x>q||$.y>q){if($.x>q)W.x=Math.floor(q/$0.x),$.x=W.x*$0.x,u.mapSize.x=W.x;if($.y>q)W.y=Math.floor(q/$0.y),$.y=W.y*$0.y,u.mapSize.y=W.y}let i=J.state.buffers.depth.getReversed();if(u.camera._reversedDepth=i,u.map===null||d===!0){if(u.map!==null){if(u.map.depthTexture!==null)u.map.depthTexture.dispose(),u.map.depthTexture=null;u.map.dispose()}if(this.type===H7){if(n.isPointLight){j0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}u.map=new J8($.x,$.y,{format:kJ,type:P8,minFilter:i9,magFilter:i9,generateMipmaps:!1}),u.map.texture.name=n.name+".shadowMap",u.map.depthTexture=new _J($.x,$.y,i8),u.map.depthTexture.name=n.name+".shadowMapDepth",u.map.depthTexture.format=AJ,u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=GJ,u.map.depthTexture.magFilter=GJ}else{if(n.isPointLight)u.map=new pK($.x),u.map.depthTexture=new NK($.x,qJ);else u.map=new J8($.x,$.y),u.map.depthTexture=new _J($.x,$.y,qJ);if(u.map.depthTexture.name=n.name+".shadowMap",u.map.depthTexture.format=AJ,this.type===h7)u.map.depthTexture.compareFunction=i?d6:m6,u.map.depthTexture.minFilter=i9,u.map.depthTexture.magFilter=i9;else u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=GJ,u.map.depthTexture.magFilter=GJ}u.camera.updateProjectionMatrix()}if(u.map.isWebGLCubeRenderTarget!==!0&&(u.map.width!==$.x||u.map.height!==$.y))u.map.setSize($.x,$.y);let Z0=u.map.isWebGLCubeRenderTarget?6:u.getViewportCount();if(n.isPointLight!==!0)u.updateMatrices(n,L);for(let X0=0;X0<Z0;X0++){let T0=u.getCamera(X0);if(n.isPointLight){let{camera:_0,matrix:c0}=u,d0=n.distance||_0.far;if(d0!==_0.far)_0.far=d0,_0.updateProjectionMatrix();a7.setFromMatrixPosition(n.matrixWorld),_0.position.copy(a7),hK.copy(_0.position),hK.add(Xq[X0]),_0.up.copy(Yq[X0]),_0.lookAt(hK),_0.updateMatrixWorld(),c0.makeTranslation(-a7.x,-a7.y,-a7.z),SX.multiplyMatrices(_0.projectionMatrix,_0.matrixWorldInverse),u._frustum.setFromProjectionMatrix(SX,_0.coordinateSystem,_0.reversedDepth)}if(u.map.isWebGLCubeRenderTarget)J.setRenderTarget(u.map,X0),J.clear();else{if(X0===0)J.setRenderTarget(u.map),J.clear();let _0=u.getViewport(X0);X.set(W.x*_0.x,W.y*_0.y,W.x*_0.z,W.y*_0.w),y.viewport(X)}K=u.getFrustum(X0),I(P,L,T0,n,this.type)}if(u.isPointLightShadow!==!0&&this.type===H7)C(u,L);u.needsUpdate=!1}F=this.type,E.needsUpdate=!1,J.setRenderTarget(B,m,j)};function C(k,P){let L=Q.update(V);if(G.defines.VSM_SAMPLES!==k.blurSamples)G.defines.VSM_SAMPLES=k.blurSamples,D.defines.VSM_SAMPLES=k.blurSamples,G.needsUpdate=!0,D.needsUpdate=!0;if(k.mapPass===null)k.mapPass=new J8($.x,$.y,{format:kJ,type:P8});else if(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)k.mapPass.setSize(k.map.width,k.map.height);G.uniforms.shadow_pass.value=k.map.depthTexture,G.uniforms.resolution.value.set(k.map.width,k.map.height),G.uniforms.radius.value=k.radius,J.setRenderTarget(k.mapPass),J.clear(),J.renderBufferDirect(P,null,L,G,V,null),D.uniforms.shadow_pass.value=k.mapPass.texture,D.uniforms.resolution.value.set(k.map.width,k.map.height),D.uniforms.radius.value=k.radius,J.setRenderTarget(k.map),J.clear(),J.renderBufferDirect(P,null,L,D,V,null)}function _(k,P,L,B){let m=null,j=L.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(j!==void 0)m=j;else if(m=L.isPointLight===!0?H:Y,J.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let y=m.uuid,d=P.uuid,T=N[y];if(T===void 0)T={},N[y]=T;let S=T[d];if(S===void 0)S=m.clone(),T[d]=S,P.addEventListener("dispose",A);m=S}if(m.visible=P.visible,m.wireframe=P.wireframe,B===H7)m.side=P.shadowSide!==null?P.shadowSide:P.side;else m.side=P.shadowSide!==null?P.shadowSide:U[P.side];if(m.alphaMap=P.alphaMap,m.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,m.map=P.map,m.clipShadows=P.clipShadows,m.clippingPlanes=P.clippingPlanes,m.clipIntersection=P.clipIntersection,m.displacementMap=P.displacementMap,m.displacementScale=P.displacementScale,m.displacementBias=P.displacementBias,m.wireframeLinewidth=P.wireframeLinewidth,m.linewidth=P.linewidth,L.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let y=J.properties.get(m);y.light=L}return m}function I(k,P,L,B,m){if(k.visible===!1)return;if(k.layers.test(P.layers)&&(k.isMesh||k.isLine||k.isPoints)){if((k.castShadow||k.receiveShadow&&m===H7)&&(!k.frustumCulled||k.intersectsFrustum(K))){k.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,k.matrixWorld);let d=Q.update(k),T=k.material;if(Array.isArray(T)){let S=d.groups;for(let n=0,u=S.length;n<u;n++){let $0=S[n],i=T[$0.materialIndex];if(i&&i.visible){let Z0=_(k,i,B,m);k.onBeforeShadow(J,k,P,L,d,Z0,$0),J.renderBufferDirect(L,null,d,Z0,k,$0),k.onAfterShadow(J,k,P,L,d,Z0,$0)}}}else if(T.visible){let S=_(k,T,B,m);k.onBeforeShadow(J,k,P,L,d,S,null),J.renderBufferDirect(L,null,d,S,k,null),k.onAfterShadow(J,k,P,L,d,S,null)}}}let y=k.children;for(let d=0,T=y.length;d<T;d++)I(y[d],P,L,B,m)}function A(k){k.target.removeEventListener("dispose",A);for(let L in N){let B=N[L],m=k.target.uuid;if(m in B)B[m].dispose(),delete B[m]}}}function Uq(J,Q){function Z(){let f=!1,F0=new W9,J0=null,D0=new W9(0,0,0,0);return{setMask:function(I0){if(J0!==I0&&!f)J.colorMask(I0,I0,I0,I0),J0=I0},setLocked:function(I0){f=I0},setClear:function(I0,Y0,R0,m0,q9){if(q9===!0)I0*=m0,Y0*=m0,R0*=m0;if(F0.set(I0,Y0,R0,m0),D0.equals(F0)===!1)J.clearColor(I0,Y0,R0,m0),D0.copy(F0)},reset:function(){f=!1,J0=null,D0.set(-1,0,0,0)}}}function K(){let f=!1,F0=!1,J0=null,D0=null,I0=null;return{setReversed:function(Y0){if(F0!==Y0){let R0=Q.get("EXT_clip_control");if(Y0)R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.ZERO_TO_ONE_EXT);else R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.NEGATIVE_ONE_TO_ONE_EXT);F0=Y0;let m0=I0;I0=null,this.setClear(m0)}},getReversed:function(){return F0},setTest:function(Y0){if(Y0)p(J.DEPTH_TEST);else a(J.DEPTH_TEST)},setMask:function(Y0){if(J0!==Y0&&!f)J.depthMask(Y0),J0=Y0},setFunc:function(Y0){if(F0)Y0=XX[Y0];if(D0!==Y0){switch(Y0){case TW:J.depthFunc(J.NEVER);break;case wW:J.depthFunc(J.ALWAYS);break;case SW:J.depthFunc(J.LESS);break;case UZ:J.depthFunc(J.LEQUAL);break;case jW:J.depthFunc(J.EQUAL);break;case vW:J.depthFunc(J.GEQUAL);break;case bW:J.depthFunc(J.GREATER);break;case yW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}D0=Y0}},setLocked:function(Y0){f=Y0},setClear:function(Y0){if(I0!==Y0){if(I0=Y0,F0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){f=!1,J0=null,D0=null,I0=null,F0=!1}}}function $(){let f=!1,F0=null,J0=null,D0=null,I0=null,Y0=null,R0=null,m0=null,q9=null;return{setTest:function(Q9){if(!f)if(Q9)p(J.STENCIL_TEST);else a(J.STENCIL_TEST)},setMask:function(Q9){if(F0!==Q9&&!f)J.stencilMask(Q9),F0=Q9},setFunc:function(Q9,V8,p8){if(J0!==Q9||D0!==V8||I0!==p8)J.stencilFunc(Q9,V8,p8),J0=Q9,D0=V8,I0=p8},setOp:function(Q9,V8,p8){if(Y0!==Q9||R0!==V8||m0!==p8)J.stencilOp(Q9,V8,p8),Y0=Q9,R0=V8,m0=p8},setLocked:function(Q9){f=Q9},setClear:function(Q9){if(q9!==Q9)J.clearStencil(Q9),q9=Q9},reset:function(){f=!1,F0=null,J0=null,D0=null,I0=null,Y0=null,R0=null,m0=null,q9=null}}}let W=new Z,X=new K,Y=new $,H=new WeakMap,N=new WeakMap,q={},U={},G={},D=new WeakMap,O=[],V=null,E=!1,F=null,C=null,_=null,I=null,A=null,k=null,P=null,L=new t0(0,0,0),B=0,m=!1,j=null,y=null,d=null,T=null,S=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,$0=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)$0=parseFloat(/^WebGL (\d)/.exec(i)[1]),u=$0>=1;else if(i.indexOf("OpenGL ES")!==-1)$0=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),u=$0>=2;let Z0=null,X0={},T0=J.getParameter(J.SCISSOR_BOX),_0=J.getParameter(J.VIEWPORT),c0=new W9().fromArray(T0),d0=new W9().fromArray(_0);function w(f,F0,J0,D0){let I0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(f,Y0),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let R0=0;R0<J0;R0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(F0,0,J.RGBA,1,1,D0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(F0+R0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return Y0}let g={};g[J.TEXTURE_2D]=w(J.TEXTURE_2D,J.TEXTURE_2D,1),g[J.TEXTURE_CUBE_MAP]=w(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),g[J.TEXTURE_2D_ARRAY]=w(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),g[J.TEXTURE_3D]=w(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),p(J.DEPTH_TEST),X.setFunc(UZ),s0(!1),a0(WZ),p(J.CULL_FACE),p0(k8);function p(f){if(q[f]!==!0)J.enable(f),q[f]=!0}function a(f){if(q[f]!==!1)J.disable(f),q[f]=!1}function Q0(f,F0){if(G[f]!==F0){if(J.bindFramebuffer(f,F0),G[f]=F0,f===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=F0;if(f===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=F0;return!0}return!1}function r(f,F0){let J0=O,D0=!1;if(f){if(J0=D.get(F0),J0===void 0)J0=[],D.set(F0,J0);let I0=f.textures;if(J0.length!==I0.length||J0[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,R0=I0.length;Y0<R0;Y0++)J0[Y0]=J.COLOR_ATTACHMENT0+Y0;J0.length=I0.length,D0=!0}}else if(J0[0]!==J.BACK)J0[0]=J.BACK,D0=!0;if(D0)J.drawBuffers(J0)}function A0(f){if(V!==f)return J.useProgram(f),V=f,!0;return!1}let q0={[N7]:J.FUNC_ADD,[GW]:J.FUNC_SUBTRACT,[qW]:J.FUNC_REVERSE_SUBTRACT};q0[EW]=J.MIN,q0[w6]=J.MAX;let v0={[FW]:J.ZERO,[DW]:J.ONE,[OW]:J.SRC_COLOR,[MW]:J.SRC_ALPHA,[AW]:J.SRC_ALPHA_SATURATE,[BW]:J.DST_COLOR,[IW]:J.DST_ALPHA,[RW]:J.ONE_MINUS_SRC_COLOR,[LW]:J.ONE_MINUS_SRC_ALPHA,[CW]:J.ONE_MINUS_DST_COLOR,[VW]:J.ONE_MINUS_DST_ALPHA,[zW]:J.CONSTANT_COLOR,[kW]:J.ONE_MINUS_CONSTANT_COLOR,[PW]:J.CONSTANT_ALPHA,[_W]:J.ONE_MINUS_CONSTANT_ALPHA};function p0(f,F0,J0,D0,I0,Y0,R0,m0,q9,Q9){if(f===k8){if(E===!0)a(J.BLEND),E=!1;return}if(E===!1)p(J.BLEND),E=!0;if(f!==T6){if(f!==F||Q9!==m){if(C!==N7||A!==N7)J.blendEquation(J.FUNC_ADD),C=N7,A=N7;if(Q9)switch(f){case f7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case XZ:J.blendFunc(J.ONE,J.ONE);break;case YZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case HZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:b0("WebGLState: Invalid blending: ",f);break}else switch(f){case f7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case XZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case YZ:b0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case HZ:b0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:b0("WebGLState: Invalid blending: ",f);break}_=null,I=null,k=null,P=null,L.set(0,0,0),B=0,F=f,m=Q9}return}if(I0=I0||F0,Y0=Y0||J0,R0=R0||D0,F0!==C||I0!==A)J.blendEquationSeparate(q0[F0],q0[I0]),C=F0,A=I0;if(J0!==_||D0!==I||Y0!==k||R0!==P)J.blendFuncSeparate(v0[J0],v0[D0],v0[Y0],v0[R0]),_=J0,I=D0,k=Y0,P=R0;if(m0.equals(L)===!1||q9!==B)J.blendColor(m0.r,m0.g,m0.b,q9),L.copy(m0),B=q9;F=f,m=!1}function y0(f,F0){f.side===z8?a(J.CULL_FACE):p(J.CULL_FACE);let J0=f.side===s9;if(F0)J0=!J0;s0(J0),f.blending===f7&&f.transparent===!1?p0(k8):p0(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),X.setFunc(f.depthFunc),X.setTest(f.depthTest),X.setMask(f.depthWrite),W.setMask(f.colorWrite);let D0=f.stencilWrite;if(Y.setTest(D0),D0)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);F9(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?p(J.SAMPLE_ALPHA_TO_COVERAGE):a(J.SAMPLE_ALPHA_TO_COVERAGE)}function s0(f){if(j!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);j=f}}function a0(f){if(f!==HW){if(p(J.CULL_FACE),f!==y)if(f===WZ)J.cullFace(J.BACK);else if(f===UW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a(J.CULL_FACE);y=f}function L9(f){if(f!==d){if(u)J.lineWidth(f);d=f}}function F9(f,F0,J0){if(f){if(p(J.POLYGON_OFFSET_FILL),T!==F0||S!==J0){if(T=F0,S=J0,X.getReversed())F0=-F0;J.polygonOffset(F0,J0)}}else a(J.POLYGON_OFFSET_FILL)}function D9(f){if(f)p(J.SCISSOR_TEST);else a(J.SCISSOR_TEST)}function v(f){if(f===void 0)f=J.TEXTURE0+n-1;if(Z0!==f)J.activeTexture(f),Z0=f}function B9(f,F0,J0){if(J0===void 0)if(Z0===null)J0=J.TEXTURE0+n-1;else J0=Z0;let D0=X0[J0];if(D0===void 0)D0={type:void 0,texture:void 0},X0[J0]=D0;if(D0.type!==f||D0.texture!==F0){if(Z0!==J0)J.activeTexture(J0),Z0=J0;J.bindTexture(f,F0||g[f]),D0.type=f,D0.texture=F0}}function e0(){let f=X0[Z0];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function U9(){try{J.compressedTexImage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function R(){try{J.texSubImage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function b(){try{J.texSubImage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function W0(){try{J.compressedTexSubImage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function U0(){try{J.texStorage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function E0(){try{J.texStorage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function t(){try{J.texImage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function K0(){try{J.texImage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function O0(f){if(U[f]!==void 0)return U[f];else return J.getParameter(f)}function C0(f,F0){if(U[f]!==F0)J.pixelStorei(f,F0),U[f]=F0}function N0(f){if(c0.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),c0.copy(f)}function H0(f){if(d0.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),d0.copy(f)}function w0(f,F0){let J0=N.get(F0);if(J0===void 0)J0=new WeakMap,N.set(F0,J0);let D0=J0.get(f);if(D0===void 0)D0=J.getUniformBlockIndex(F0,f.name),J0.set(f,D0)}function S0(f,F0){let D0=N.get(F0).get(f);if(H.get(F0)!==D0)J.uniformBlockBinding(F0,D0,f.__bindingPointIndex),H.set(F0,D0)}function J9(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),q={},U={},Z0=null,X0={},G={},D=new WeakMap,O=[],V=null,E=!1,F=null,C=null,_=null,I=null,A=null,k=null,P=null,L=new t0(0,0,0),B=0,m=!1,j=null,y=null,d=null,T=null,S=null,c0.set(0,0,J.canvas.width,J.canvas.height),d0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:p,disable:a,bindFramebuffer:Q0,drawBuffers:r,useProgram:A0,setBlending:p0,setMaterial:y0,setFlipSided:s0,setCullFace:a0,setLineWidth:L9,setPolygonOffset:F9,setScissorTest:D9,activeTexture:v,bindTexture:B9,unbindTexture:e0,compressedTexImage2D:U9,compressedTexImage3D:z,texImage2D:t,texImage3D:K0,pixelStorei:C0,getParameter:O0,updateUBOMapping:w0,uniformBlockBinding:S0,texStorage2D:U0,texStorage3D:E0,texSubImage2D:R,texSubImage3D:b,compressedTexSubImage2D:s,compressedTexSubImage3D:W0,scissor:N0,viewport:H0,reset:J9}}function Nq(J,Q,Z,K,$,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),N=new h0,q=new WeakMap,U=new Set,G,D=new WeakMap,O=!1;try{O=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function V(z,R){return O?new OffscreenCanvas(z,R):b7("canvas")}function E(z,R,b){let s=1,W0=U9(z);if(W0.width>b||W0.height>b)s=b/Math.max(W0.width,W0.height);if(s<1)if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&z instanceof VideoFrame){let U0=Math.floor(s*W0.width),E0=Math.floor(s*W0.height);if(G===void 0)G=V(U0,E0);let t=R?V(U0,E0):G;return t.width=U0,t.height=E0,t.getContext("2d").drawImage(z,0,0,U0,E0),j0("WebGLRenderer: Texture has been resized from ("+W0.width+"x"+W0.height+") to ("+U0+"x"+E0+")."),t}else{if("data"in z)j0("WebGLRenderer: Image in DataTexture is too big ("+W0.width+"x"+W0.height+").");return z}return z}function F(z){return z.generateMipmaps}function C(z){J.generateMipmap(z)}function _(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function I(z,R,b,s,W0,U0=!1){if(z!==null){if(J[z]!==void 0)return J[z];j0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let E0;if(s){if(E0=Q.get("EXT_texture_norm16"),!E0)j0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let t=R;if(R===J.RED){if(b===J.FLOAT)t=J.R32F;if(b===J.HALF_FLOAT)t=J.R16F;if(b===J.UNSIGNED_BYTE)t=J.R8;if(b===J.UNSIGNED_SHORT&&E0)t=E0.R16_EXT;if(b===J.SHORT&&E0)t=E0.R16_SNORM_EXT}if(R===J.RED_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.R8UI;if(b===J.UNSIGNED_SHORT)t=J.R16UI;if(b===J.UNSIGNED_INT)t=J.R32UI;if(b===J.BYTE)t=J.R8I;if(b===J.SHORT)t=J.R16I;if(b===J.INT)t=J.R32I}if(R===J.RG){if(b===J.FLOAT)t=J.RG32F;if(b===J.HALF_FLOAT)t=J.RG16F;if(b===J.UNSIGNED_BYTE)t=J.RG8;if(b===J.UNSIGNED_SHORT&&E0)t=E0.RG16_EXT;if(b===J.SHORT&&E0)t=E0.RG16_SNORM_EXT}if(R===J.RG_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RG8UI;if(b===J.UNSIGNED_SHORT)t=J.RG16UI;if(b===J.UNSIGNED_INT)t=J.RG32UI;if(b===J.BYTE)t=J.RG8I;if(b===J.SHORT)t=J.RG16I;if(b===J.INT)t=J.RG32I}if(R===J.RGB_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RGB8UI;if(b===J.UNSIGNED_SHORT)t=J.RGB16UI;if(b===J.UNSIGNED_INT)t=J.RGB32UI;if(b===J.BYTE)t=J.RGB8I;if(b===J.SHORT)t=J.RGB16I;if(b===J.INT)t=J.RGB32I}if(R===J.RGBA_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RGBA8UI;if(b===J.UNSIGNED_SHORT)t=J.RGBA16UI;if(b===J.UNSIGNED_INT)t=J.RGBA32UI;if(b===J.BYTE)t=J.RGBA8I;if(b===J.SHORT)t=J.RGBA16I;if(b===J.INT)t=J.RGBA32I}if(R===J.RGB){if(b===J.UNSIGNED_SHORT&&E0)t=E0.RGB16_EXT;if(b===J.SHORT&&E0)t=E0.RGB16_SNORM_EXT;if(b===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5;if(b===J.UNSIGNED_INT_10F_11F_11F_REV)t=J.R11F_G11F_B10F}if(R===J.RGBA){let K0=U0?QK:i0.getTransfer(W0);if(b===J.FLOAT)t=J.RGBA32F;if(b===J.HALF_FLOAT)t=J.RGBA16F;if(b===J.UNSIGNED_BYTE)t=K0===G9?J.SRGB8_ALPHA8:J.RGBA8;if(b===J.UNSIGNED_SHORT&&E0)t=E0.RGBA16_EXT;if(b===J.SHORT&&E0)t=E0.RGBA16_SNORM_EXT;if(b===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(b===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function A(z,R){let b;if(z){if(R===null||R===qJ||R===q7)b=J.DEPTH24_STENCIL8;else if(R===i8)b=J.DEPTH32F_STENCIL8;else if(R===p7)b=J.DEPTH24_STENCIL8,j0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===qJ||R===q7)b=J.DEPTH_COMPONENT24;else if(R===i8)b=J.DEPTH_COMPONENT32F;else if(R===p7)b=J.DEPTH_COMPONENT16;return b}function k(z,R){if(F(z)===!0||z.isFramebufferTexture&&z.minFilter!==GJ&&z.minFilter!==i9)return Math.log2(Math.max(R.width,R.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return R.mipmaps.length;else return 1}function P(z){let R=z.target;if(R.removeEventListener("dispose",P),B(R),R.isVideoTexture)q.delete(R);if(R.isHTMLTexture)U.delete(R)}function L(z){let R=z.target;R.removeEventListener("dispose",L),j(R)}function B(z){let R=K.get(z);if(R.__webglInit===void 0)return;let b=z.source,s=D.get(b);if(s){let W0=s[R.__cacheKey];if(W0.usedTimes--,W0.usedTimes===0)m(z);if(Object.keys(s).length===0)D.delete(b)}K.remove(z)}function m(z){let R=K.get(z);J.deleteTexture(R.__webglTexture);let b=z.source,s=D.get(b);delete s[R.__cacheKey],X.memory.textures--}function j(z){let R=K.get(z);if(z.depthTexture)z.depthTexture.dispose(),K.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(R.__webglFramebuffer[s]))for(let W0=0;W0<R.__webglFramebuffer[s].length;W0++)J.deleteFramebuffer(R.__webglFramebuffer[s][W0]);else J.deleteFramebuffer(R.__webglFramebuffer[s]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[s])}else{if(Array.isArray(R.__webglFramebuffer))for(let s=0;s<R.__webglFramebuffer.length;s++)J.deleteFramebuffer(R.__webglFramebuffer[s]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let s=0;s<R.__webglColorRenderbuffer.length;s++)if(R.__webglColorRenderbuffer[s])J.deleteRenderbuffer(R.__webglColorRenderbuffer[s])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let b=z.textures;for(let s=0,W0=b.length;s<W0;s++){let U0=K.get(b[s]);if(U0.__webglTexture)J.deleteTexture(U0.__webglTexture),X.memory.textures--;K.remove(b[s])}K.remove(z)}let y=0;function d(){y=0}function T(){return y}function S(z){y=z}function n(){let z=y;if(z>=$.maxTextures)j0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+$.maxTextures);return y+=1,z}function u(z){let R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function $0(z,R){let b=K.get(z);if(z.isVideoTexture)B9(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&b.__version!==z.version){let s=z.image;if(s===null)j0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)j0("WebGLRenderer: Texture marked for update but image is incomplete");else{a(b,z,R);return}}else if(z.isExternalTexture)b.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,b.__webglTexture,J.TEXTURE0+R)}function i(z,R){let b=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&b.__version!==z.version){a(b,z,R);return}else if(z.isExternalTexture)b.__webglTexture=z.sourceTexture?z.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D_ARRAY,b.__webglTexture,J.TEXTURE0+R)}function Z0(z,R){let b=K.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&b.__version!==z.version){a(b,z,R);return}Z.bindTexture(J.TEXTURE_3D,b.__webglTexture,J.TEXTURE0+R)}function X0(z,R){let b=K.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&b.__version!==z.version){Q0(b,z,R);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,b.__webglTexture,J.TEXTURE0+R)}let T0={[gW]:J.REPEAT,[v6]:J.CLAMP_TO_EDGE,[pW]:J.MIRRORED_REPEAT},_0={[GJ]:J.NEAREST,[mW]:J.NEAREST_MIPMAP_NEAREST,[g7]:J.NEAREST_MIPMAP_LINEAR,[i9]:J.LINEAR,[b6]:J.LINEAR_MIPMAP_NEAREST,[CJ]:J.LINEAR_MIPMAP_LINEAR},c0={[rW]:J.NEVER,[ZX]:J.ALWAYS,[tW]:J.LESS,[m6]:J.LEQUAL,[eW]:J.EQUAL,[d6]:J.GEQUAL,[JX]:J.GREATER,[QX]:J.NOTEQUAL};function d0(z,R){if(R.type===i8&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===i9||R.magFilter===b6||R.magFilter===g7||R.magFilter===CJ||R.minFilter===i9||R.minFilter===b6||R.minFilter===g7||R.minFilter===CJ))j0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,T0[R.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,T0[R.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,T0[R.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,_0[R.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,_0[R.minFilter]),R.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,c0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===GJ)return;if(R.minFilter!==g7&&R.minFilter!==CJ)return;if(R.type===i8&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||K.get(R).__currentAnisotropy){let b=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,$.getMaxAnisotropy())),K.get(R).__currentAnisotropy=R.anisotropy}}}function w(z,R){let b=!1;if(z.__webglInit===void 0)z.__webglInit=!0,R.addEventListener("dispose",P);let s=R.source,W0=D.get(s);if(W0===void 0)W0={},D.set(s,W0);let U0=u(R);if(U0!==z.__cacheKey){if(W0[U0]===void 0)W0[U0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,b=!0;W0[U0].usedTimes++;let E0=W0[z.__cacheKey];if(E0!==void 0){if(W0[z.__cacheKey].usedTimes--,E0.usedTimes===0)m(R)}z.__cacheKey=U0,z.__webglTexture=W0[U0].texture}return b}function g(z,R,b){return Math.floor(Math.floor(z/b)/R)}function p(z,R,b,s){let U0=z.updateRanges;if(U0.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,b,s,R.data);else{U0.sort((C0,N0)=>C0.start-N0.start);let E0=0;for(let C0=1;C0<U0.length;C0++){let N0=U0[E0],H0=U0[C0],w0=N0.start+N0.count,S0=g(H0.start,R.width,4),J9=g(N0.start,R.width,4);if(H0.start<=w0+1&&S0===J9&&g(H0.start+H0.count-1,R.width,4)===S0)N0.count=Math.max(N0.count,H0.start+H0.count-N0.start);else++E0,U0[E0]=H0}U0.length=E0+1;let t=Z.getParameter(J.UNPACK_ROW_LENGTH),K0=Z.getParameter(J.UNPACK_SKIP_PIXELS),O0=Z.getParameter(J.UNPACK_SKIP_ROWS);Z.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let C0=0,N0=U0.length;C0<N0;C0++){let H0=U0[C0],w0=Math.floor(H0.start/4),S0=Math.ceil(H0.count/4),J9=w0%R.width,f=Math.floor(w0/R.width),F0=S0,J0=1;Z.pixelStorei(J.UNPACK_SKIP_PIXELS,J9),Z.pixelStorei(J.UNPACK_SKIP_ROWS,f),Z.texSubImage2D(J.TEXTURE_2D,0,J9,f,F0,1,b,s,R.data)}z.clearUpdateRanges(),Z.pixelStorei(J.UNPACK_ROW_LENGTH,t),Z.pixelStorei(J.UNPACK_SKIP_PIXELS,K0),Z.pixelStorei(J.UNPACK_SKIP_ROWS,O0)}}function a(z,R,b){let s=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)s=J.TEXTURE_3D;let W0=w(z,R),U0=R.source;Z.bindTexture(s,z.__webglTexture,J.TEXTURE0+b);let E0=K.get(U0);if(U0.version!==E0.__version||W0===!0){if(Z.activeTexture(J.TEXTURE0+b),(typeof ImageBitmap!=="undefined"&&R.image instanceof ImageBitmap)===!1){let J0=i0.getPrimaries(i0.workingColorSpace),D0=R.colorSpace===PJ?null:i0.getPrimaries(R.colorSpace),I0=R.colorSpace===PJ||J0===D0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0)}Z.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment);let K0=E(R.image,!1,$.maxTextureSize);K0=e0(R,K0);let O0=W.convert(R.format,R.colorSpace),C0=W.convert(R.type),N0=I(R.internalFormat,O0,C0,R.normalized,R.colorSpace,R.isVideoTexture);d0(s,R);let H0,w0=R.mipmaps,S0=R.isVideoTexture!==!0,J9=E0.__version===void 0||W0===!0,f=U0.dataReady,F0=k(R,K0);if(R.isDepthTexture){if(N0=A(R.format===zJ,R.type),J9)if(S0)Z.texStorage2D(J.TEXTURE_2D,1,N0,K0.width,K0.height);else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,O0,C0,null)}else if(R.isDataTexture)if(w0.length>0){if(S0&&J9)Z.texStorage2D(J.TEXTURE_2D,F0,N0,w0[0].width,w0[0].height);for(let J0=0,D0=w0.length;J0<D0;J0++)if(H0=w0[J0],S0){if(f)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,C0,H0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,C0,H0.data);R.generateMipmaps=!1}else if(S0){if(J9)Z.texStorage2D(J.TEXTURE_2D,F0,N0,K0.width,K0.height);if(f)p(R,K0,O0,C0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,K0.width,K0.height,0,O0,C0,K0.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(S0&&J9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,F0,N0,w0[0].width,w0[0].height,K0.depth);for(let J0=0,D0=w0.length;J0<D0;J0++)if(H0=w0[J0],R.format!==_8)if(O0!==null)if(S0){if(f)if(R.layerUpdates.size>0){let I0=wK(H0.width,H0.height,R.format,R.type);for(let Y0 of R.layerUpdates){let R0=H0.data.subarray(Y0*I0/H0.data.BYTES_PER_ELEMENT,(Y0+1)*I0/H0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,Y0,H0.width,H0.height,1,O0,R0)}}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,K0.depth,O0,H0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,K0.depth,0,H0.data,0,0);else j0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S0){if(f)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,K0.depth,O0,C0,H0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,K0.depth,0,O0,C0,H0.data);if(R.layerUpdates.size>0)R.clearLayerUpdates()}else{if(S0&&J9)Z.texStorage2D(J.TEXTURE_2D,F0,N0,w0[0].width,w0[0].height);for(let J0=0,D0=w0.length;J0<D0;J0++)if(H0=w0[J0],R.format!==_8)if(O0!==null)if(S0){if(f)Z.compressedTexSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,H0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,H0.data);else j0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S0){if(f)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,C0,H0.data)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,C0,H0.data)}else if(R.isDataArrayTexture)if(S0){if(J9)Z.texStorage3D(J.TEXTURE_2D_ARRAY,F0,N0,K0.width,K0.height,K0.depth);if(f)if(R.layerUpdates.size>0){let J0=wK(K0.width,K0.height,R.format,R.type);for(let D0 of R.layerUpdates){let I0=K0.data.subarray(D0*J0/K0.data.BYTES_PER_ELEMENT,(D0+1)*J0/K0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,D0,K0.width,K0.height,1,O0,C0,I0)}R.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,K0.width,K0.height,K0.depth,O0,C0,K0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,N0,K0.width,K0.height,K0.depth,0,O0,C0,K0.data);else if(R.isData3DTexture)if(S0){if(J9)Z.texStorage3D(J.TEXTURE_3D,F0,N0,K0.width,K0.height,K0.depth);if(f)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,K0.width,K0.height,K0.depth,O0,C0,K0.data)}else Z.texImage3D(J.TEXTURE_3D,0,N0,K0.width,K0.height,K0.depth,0,O0,C0,K0.data);else if(R.isFramebufferTexture){if(J9)if(S0)Z.texStorage2D(J.TEXTURE_2D,F0,N0,K0.width,K0.height);else{let{width:J0,height:D0}=K0;for(let I0=0;I0<F0;I0++)Z.texImage2D(J.TEXTURE_2D,I0,N0,J0,D0,0,O0,C0,null),J0>>=1,D0>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in J){let J0=J.canvas;if(!J0.hasAttribute("layoutsubtree"))J0.setAttribute("layoutsubtree","true");if(K0.parentNode!==J0){J0.appendChild(K0),U.add(R),J0.onpaint=(D0)=>{let I0=D0.changedElements;for(let Y0 of U)if(I0.includes(Y0.image))Y0.needsUpdate=!0},J0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,K0);else{let{RGBA:I0,RGBA:Y0,UNSIGNED_BYTE:R0}=J;J.texElementImage2D(J.TEXTURE_2D,0,I0,Y0,R0,K0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(w0.length>0){if(S0&&J9){let J0=U9(w0[0]);Z.texStorage2D(J.TEXTURE_2D,F0,N0,J0.width,J0.height)}for(let J0=0,D0=w0.length;J0<D0;J0++)if(H0=w0[J0],S0){if(f)Z.texSubImage2D(J.TEXTURE_2D,J0,0,0,O0,C0,H0)}else Z.texImage2D(J.TEXTURE_2D,J0,N0,O0,C0,H0);R.generateMipmaps=!1}else if(S0){if(J9){let J0=U9(K0);Z.texStorage2D(J.TEXTURE_2D,F0,N0,J0.width,J0.height)}if(f)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,O0,C0,K0)}else Z.texImage2D(J.TEXTURE_2D,0,N0,O0,C0,K0);if(F(R))C(s);if(E0.__version=U0.version,R.onUpdate)R.onUpdate(R)}z.__version=R.version}function Q0(z,R,b){if(R.image.length!==6)return;let s=w(z,R),W0=R.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+b);let U0=K.get(W0);if(W0.version!==U0.__version||s===!0){Z.activeTexture(J.TEXTURE0+b);let E0=i0.getPrimaries(i0.workingColorSpace),t=R.colorSpace===PJ?null:i0.getPrimaries(R.colorSpace),K0=R.colorSpace===PJ||E0===t?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),Z.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,K0);let O0=R.isCompressedTexture||R.image[0].isCompressedTexture,C0=R.image[0]&&R.image[0].isDataTexture,N0=[];for(let Y0=0;Y0<6;Y0++){if(!O0&&!C0)N0[Y0]=E(R.image[Y0],!0,$.maxCubemapSize);else N0[Y0]=C0?R.image[Y0].image:R.image[Y0];N0[Y0]=e0(R,N0[Y0])}let H0=N0[0],w0=W.convert(R.format,R.colorSpace),S0=W.convert(R.type),J9=I(R.internalFormat,w0,S0,R.normalized,R.colorSpace),f=R.isVideoTexture!==!0,F0=U0.__version===void 0||s===!0,J0=W0.dataReady,D0=k(R,H0);d0(J.TEXTURE_CUBE_MAP,R);let I0;if(O0){if(f&&F0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,D0,J9,H0.width,H0.height);for(let Y0=0;Y0<6;Y0++){I0=N0[Y0].mipmaps;for(let R0=0;R0<I0.length;R0++){let m0=I0[R0];if(R.format!==_8)if(w0!==null)if(f){if(J0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,m0.width,m0.height,w0,m0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,J9,m0.width,m0.height,0,m0.data);else j0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,m0.width,m0.height,w0,S0,m0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,J9,m0.width,m0.height,0,w0,S0,m0.data)}}}else{if(I0=R.mipmaps,f&&F0){if(I0.length>0)D0++;let Y0=U9(N0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,D0,J9,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(C0){if(f){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,N0[Y0].width,N0[Y0].height,w0,S0,N0[Y0].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,J9,N0[Y0].width,N0[Y0].height,0,w0,S0,N0[Y0].data);for(let R0=0;R0<I0.length;R0++){let q9=I0[R0].image[Y0].image;if(f){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,q9.width,q9.height,w0,S0,q9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,J9,q9.width,q9.height,0,w0,S0,q9.data)}}else{if(f){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,w0,S0,N0[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,J9,w0,S0,N0[Y0]);for(let R0=0;R0<I0.length;R0++){let m0=I0[R0];if(f){if(J0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,w0,S0,m0.image[Y0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,J9,w0,S0,m0.image[Y0])}}}if(F(R))C(J.TEXTURE_CUBE_MAP);if(U0.__version=W0.version,R.onUpdate)R.onUpdate(R)}z.__version=R.version}function r(z,R,b,s,W0,U0){let E0=W.convert(b.format,b.colorSpace),t=W.convert(b.type),K0=I(b.internalFormat,E0,t,b.normalized,b.colorSpace),O0=K.get(R),C0=K.get(b);if(C0.__renderTarget=R,!O0.__hasExternalTextures){let N0=Math.max(1,R.width>>U0),H0=Math.max(1,R.height>>U0);if(W0===J.TEXTURE_3D||W0===J.TEXTURE_2D_ARRAY)Z.texImage3D(W0,U0,K0,N0,H0,R.depth,0,E0,t,null);else Z.texImage2D(W0,U0,K0,N0,H0,0,E0,t,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,z),v(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,W0,C0.__webglTexture,0,D9(R));else if(W0===J.TEXTURE_2D||W0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&W0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,W0,C0.__webglTexture,U0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function A0(z,R,b){if(J.bindRenderbuffer(J.RENDERBUFFER,z),R.depthBuffer){let s=R.depthTexture,W0=s&&s.isDepthTexture?s.type:null,U0=A(R.stencilBuffer,W0),E0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,D9(R),U0,R.width,R.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,D9(R),U0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,E0,J.RENDERBUFFER,z)}else{let s=R.textures;for(let W0=0;W0<s.length;W0++){let U0=s[W0],E0=W.convert(U0.format,U0.colorSpace),t=W.convert(U0.type),K0=I(U0.internalFormat,E0,t,U0.normalized,U0.colorSpace);if(v(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,D9(R),K0,R.width,R.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,D9(R),K0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function q0(z,R,b){let s=R.isWebGLCubeRenderTarget===!0;if(Z.bindFramebuffer(J.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W0=K.get(R.depthTexture);if(W0.__renderTarget=R,!W0.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;if(s){if(W0.__webglInit===void 0)W0.__webglInit=!0,R.depthTexture.addEventListener("dispose",P);if(W0.__webglTexture===void 0){W0.__webglTexture=J.createTexture(),Z.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),d0(J.TEXTURE_CUBE_MAP,R.depthTexture);let O0=W.convert(R.depthTexture.format),C0=W.convert(R.depthTexture.type),N0;if(R.depthTexture.format===AJ)N0=J.DEPTH_COMPONENT24;else if(R.depthTexture.format===zJ)N0=J.DEPTH24_STENCIL8;for(let H0=0;H0<6;H0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,N0,R.width,R.height,0,O0,C0,null)}}else $0(R.depthTexture,0);let U0=W0.__webglTexture,E0=D9(R),t=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+b:J.TEXTURE_2D,K0=R.depthTexture.format===zJ?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===AJ)if(v(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,U0,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,U0,0);else if(R.depthTexture.format===zJ)if(v(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,t,U0,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,K0,t,U0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function v0(z){let R=K.get(z),b=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){let s=z.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(s){let W0=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,s.removeEventListener("dispose",W0)};s.addEventListener("dispose",W0),R.__depthDisposeCallback=W0}R.__boundDepthTexture=s}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(b)for(let s=0;s<6;s++)q0(R.__webglFramebuffer[s],z,s);else{let s=z.texture.mipmaps;if(s&&s.length>0)q0(R.__webglFramebuffer[0],z,0);else q0(R.__webglFramebuffer,z,0)}else if(b){R.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[s]),R.__webglDepthbuffer[s]===void 0)R.__webglDepthbuffer[s]=J.createRenderbuffer(),A0(R.__webglDepthbuffer[s],z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=R.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}else{let s=z.texture.mipmaps;if(s&&s.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),A0(R.__webglDepthbuffer,z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function p0(z,R,b){let s=K.get(z);if(R!==void 0)r(s.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(b!==void 0)v0(z)}function y0(z){let R=z.texture,b=K.get(z),s=K.get(R);z.addEventListener("dispose",L);let W0=z.textures,U0=z.isWebGLCubeRenderTarget===!0,E0=W0.length>1;if(!E0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=R.version,X.memory.textures++}if(U0){b.__webglFramebuffer=[];for(let t=0;t<6;t++)if(R.mipmaps&&R.mipmaps.length>0){b.__webglFramebuffer[t]=[];for(let K0=0;K0<R.mipmaps.length;K0++)b.__webglFramebuffer[t][K0]=J.createFramebuffer()}else b.__webglFramebuffer[t]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){b.__webglFramebuffer=[];for(let t=0;t<R.mipmaps.length;t++)b.__webglFramebuffer[t]=J.createFramebuffer()}else b.__webglFramebuffer=J.createFramebuffer();if(E0)for(let t=0,K0=W0.length;t<K0;t++){let O0=K.get(W0[t]);if(O0.__webglTexture===void 0)O0.__webglTexture=J.createTexture(),X.memory.textures++}if(z.samples>0&&v(z)===!1){b.__webglMultisampledFramebuffer=J.createFramebuffer(),b.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let t=0;t<W0.length;t++){let K0=W0[t];b.__webglColorRenderbuffer[t]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,b.__webglColorRenderbuffer[t]);let O0=W.convert(K0.format,K0.colorSpace),C0=W.convert(K0.type),N0=I(K0.internalFormat,O0,C0,K0.normalized,K0.colorSpace,z.isXRRenderTarget===!0),H0=D9(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,H0,N0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+t,J.RENDERBUFFER,b.__webglColorRenderbuffer[t])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)b.__webglDepthRenderbuffer=J.createRenderbuffer(),A0(b.__webglDepthRenderbuffer,z,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){Z.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),d0(J.TEXTURE_CUBE_MAP,R);for(let t=0;t<6;t++)if(R.mipmaps&&R.mipmaps.length>0)for(let K0=0;K0<R.mipmaps.length;K0++)r(b.__webglFramebuffer[t][K0],z,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,K0);else r(b.__webglFramebuffer[t],z,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0);if(F(R))C(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(E0){for(let t=0,K0=W0.length;t<K0;t++){let O0=W0[t],C0=K.get(O0),N0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)N0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(N0,C0.__webglTexture),d0(N0,O0),r(b.__webglFramebuffer,z,O0,J.COLOR_ATTACHMENT0+t,N0,0),F(O0))C(N0)}Z.unbindTexture()}else{let t=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)t=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(t,s.__webglTexture),d0(t,R),R.mipmaps&&R.mipmaps.length>0)for(let K0=0;K0<R.mipmaps.length;K0++)r(b.__webglFramebuffer[K0],z,R,J.COLOR_ATTACHMENT0,t,K0);else r(b.__webglFramebuffer,z,R,J.COLOR_ATTACHMENT0,t,0);if(F(R))C(t);Z.unbindTexture()}if(z.depthBuffer)v0(z)}function s0(z){let R=z.textures;for(let b=0,s=R.length;b<s;b++){let W0=R[b];if(F(W0)){let U0=_(z),E0=K.get(W0).__webglTexture;Z.bindTexture(U0,E0),C(U0),Z.unbindTexture()}}}let a0=[],L9=[];function F9(z){if(z.samples>0){if(v(z)===!1){let{textures:R,width:b,height:s}=z,W0=J.COLOR_BUFFER_BIT,U0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,E0=K.get(z),t=R.length>1;if(t)for(let O0=0;O0<R.length;O0++)Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,E0.__webglMultisampledFramebuffer);let K0=z.texture.mipmaps;if(K0&&K0.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer);for(let O0=0;O0<R.length;O0++){if(z.resolveDepthBuffer){if(z.depthBuffer)W0|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)W0|=J.STENCIL_BUFFER_BIT}if(t){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[O0]);let C0=K.get(R[O0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,C0,0)}if(J.blitFramebuffer(0,0,b,s,0,0,b,s,W0,J.NEAREST),H===!0){if(a0.length=0,L9.length=0,a0.push(J.COLOR_ATTACHMENT0+O0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)a0.push(U0),L9.push(U0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,L9);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,a0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),t)for(let O0=0;O0<R.length;O0++){Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[O0]);let C0=K.get(R[O0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,C0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&H){let R=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function D9(z){return Math.min($.maxSamples,z.samples)}function v(z){let R=K.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function B9(z){let R=X.render.frame;if(q.get(z)!==R)q.set(z,R),z.update()}function e0(z,R){let{colorSpace:b,format:s,type:W0}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return R;if(b!==JK&&b!==PJ)if(i0.getTransfer(b)===G9){if(s!==_8||W0!==M8)j0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else b0("WebGLTextures: Unsupported texture color space:",b);return R}function U9(z){if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement)N.width=z.naturalWidth||z.width,N.height=z.naturalHeight||z.height;else if(typeof VideoFrame!=="undefined"&&z instanceof VideoFrame)N.width=z.displayWidth,N.height=z.displayHeight;else N.width=z.width,N.height=z.height;return N}this.allocateTextureUnit=n,this.resetTextureUnits=d,this.getTextureUnits=T,this.setTextureUnits=S,this.setTexture2D=$0,this.setTexture2DArray=i,this.setTexture3D=Z0,this.setTextureCube=X0,this.rebindTextures=p0,this.setupRenderTarget=y0,this.updateRenderTargetMipmap=s0,this.updateMultisampleRenderTarget=F9,this.setupDepthRenderbuffer=v0,this.setupFrameBufferTexture=r,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return Z.buffers.depth.getReversed()}}function Gq(J,Q){function Z(K,$=PJ){let W,X=i0.getTransfer($);if(K===M8)return J.UNSIGNED_BYTE;if(K===MZ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===LZ)return J.UNSIGNED_SHORT_5_5_5_1;if(K===lW)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===cW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===dW)return J.BYTE;if(K===uW)return J.SHORT;if(K===p7)return J.UNSIGNED_SHORT;if(K===RZ)return J.INT;if(K===qJ)return J.UNSIGNED_INT;if(K===i8)return J.FLOAT;if(K===P8)return J.HALF_FLOAT;if(K===nW)return J.ALPHA;if(K===sW)return J.RGB;if(K===_8)return J.RGBA;if(K===AJ)return J.DEPTH_COMPONENT;if(K===zJ)return J.DEPTH_STENCIL;if(K===iW)return J.RED;if(K===IZ)return J.RED_INTEGER;if(K===kJ)return J.RG;if(K===VZ)return J.RG_INTEGER;if(K===BZ)return J.RGBA_INTEGER;if(K===y6||K===h6||K===f6||K===x6)if(X===G9)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(K===y6)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===h6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===f6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===x6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(K===y6)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===h6)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===f6)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===x6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===CZ||K===AZ||K===zZ||K===kZ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(K===CZ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===AZ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===zZ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===kZ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===PZ||K===_Z||K===TZ||K===wZ||K===SZ||K===g6||K===jZ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(K===PZ||K===_Z)return X===G9?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(K===TZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(K===wZ)return W.COMPRESSED_R11_EAC;if(K===SZ)return W.COMPRESSED_SIGNED_R11_EAC;if(K===g6)return W.COMPRESSED_RG11_EAC;if(K===jZ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===vZ||K===bZ||K===yZ||K===hZ||K===fZ||K===xZ||K===gZ||K===pZ||K===mZ||K===dZ||K===uZ||K===lZ||K===cZ||K===nZ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(K===vZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===bZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===yZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===hZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===fZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===xZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===gZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===pZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===mZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===dZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===uZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===lZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===cZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===nZ)return X===G9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===sZ||K===iZ||K===oZ)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(K===sZ)return X===G9?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===iZ)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===oZ)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===aZ||K===rZ||K===p6||K===tZ)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(K===aZ)return W.COMPRESSED_RED_RGTC1_EXT;if(K===rZ)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===p6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===tZ)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===q7)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:Z}}var qq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eq=`
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

}`;class uX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new t6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new a9({vertexShader:qq,fragmentShader:Eq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new Q8(new n7(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lX extends T8{constructor(J,Q){super();let Z=this,K=null,$=1,W=null,X="local-floor",Y=1,H=null,N=null,q=null,U=null,G=null,D=null,O=typeof XRWebGLBinding!=="undefined",V=new uX,E={},F=Q.getContextAttributes(),C=null,_=null,I=[],A=[],k=new h0,P=null,L=null,B=new m9;B.viewport=new W9;let m=new m9;m.viewport=new W9;let j=[B,m],y=new kK,d=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let g=I[w];if(g===void 0)g=new u7,I[w]=g;return g.getTargetRaySpace()},this.getControllerGrip=function(w){let g=I[w];if(g===void 0)g=new u7,I[w]=g;return g.getGripSpace()},this.getHand=function(w){let g=I[w];if(g===void 0)g=new u7,I[w]=g;return g.getHandSpace()};function S(w){let g=A.indexOf(w.inputSource);if(g===-1)return;let p=I[g];if(p!==void 0)p.update(w.inputSource,w.frame,H||W),p.dispatchEvent({type:w.type,data:w.inputSource})}function n(){K.removeEventListener("select",S),K.removeEventListener("selectstart",S),K.removeEventListener("selectend",S),K.removeEventListener("squeeze",S),K.removeEventListener("squeezestart",S),K.removeEventListener("squeezeend",S),K.removeEventListener("end",n),K.removeEventListener("inputsourceschange",u);for(let w=0;w<I.length;w++){let g=A[w];if(g===null)continue;A[w]=null,I[w].disconnect(g)}d=null,T=null,V.reset();for(let w in E)delete E[w];if(J.setRenderTarget(C),G=null,U=null,q=null,K=null,_=null,d0.stop(),Z.isPresenting=!1,J.setPixelRatio(P),J.setSize(k.width,k.height,!1),L!==null){let w=L.camera;w.fov=L.fov,w.zoom=L.zoom,w.updateProjectionMatrix(),L=null}Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){if($=w,Z.isPresenting===!0)j0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){if(X=w,Z.isPresenting===!0)j0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(w){H=w},this.getBaseLayer=function(){return U!==null?U:G},this.getBinding=function(){if(q===null&&O)q=new XRWebGLBinding(K,Q);return q},this.getFrame=function(){return D},this.getSession=function(){return K},this.setSession=async function(w){if(K=w,K!==null){if(C=J.getRenderTarget(),K.addEventListener("select",S),K.addEventListener("selectstart",S),K.addEventListener("selectend",S),K.addEventListener("squeeze",S),K.addEventListener("squeezestart",S),K.addEventListener("squeezeend",S),K.addEventListener("end",n),K.addEventListener("inputsourceschange",u),F.xrCompatible!==!0)await Q.makeXRCompatible();if(P=J.getPixelRatio(),J.getSize(k),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let p={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:$};G=new XRWebGLLayer(K,Q,p),K.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),_=new J8(G.framebufferWidth,G.framebufferHeight,{format:_8,type:M8,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let p=null,a=null,Q0=null;if(F.depth)Q0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,p=F.stencil?zJ:AJ,a=F.stencil?q7:qJ;let r={colorFormat:Q.RGBA8,depthFormat:Q0,scaleFactor:$};q=this.getBinding(),U=q.createProjectionLayer(r),K.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),_=new J8(U.textureWidth,U.textureHeight,{format:_8,type:M8,depthTexture:new _J(U.textureWidth,U.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,p),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1,resolveStencilBuffer:U.ignoreDepthValues===!1,storeMultisampledDepthBuffer:U.ignoreDepthValues===!1,storeMultisampledStencilBuffer:U.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await K.requestReferenceSpace(X),d0.setContext(K),d0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return V.getDepthTexture()};function u(w){for(let g=0;g<w.removed.length;g++){let p=w.removed[g],a=A.indexOf(p);if(a>=0)A[a]=null,I[a].disconnect(p)}for(let g=0;g<w.added.length;g++){let p=w.added[g],a=A.indexOf(p);if(a===-1){for(let r=0;r<I.length;r++)if(r>=A.length){A.push(p),a=r;break}else if(A[r]===null){A[r]=p,a=r;break}if(a===-1)break}let Q0=I[a];if(Q0)Q0.connect(p)}}let $0=new x,i=new x;function Z0(w,g,p){$0.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(p.matrixWorld);let a=$0.distanceTo(i),Q0=g.projectionMatrix.elements,r=p.projectionMatrix.elements,A0=Q0[14]/(Q0[10]-1),q0=Q0[14]/(Q0[10]+1),v0=(Q0[9]+1)/Q0[5],p0=(Q0[9]-1)/Q0[5],y0=(Q0[8]-1)/Q0[0],s0=(r[8]+1)/r[0],a0=A0*y0,L9=A0*s0,F9=a/(-y0+s0),D9=F9*-y0;if(g.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(D9),w.translateZ(F9),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),Q0[10]===-1)w.projectionMatrix.copy(g.projectionMatrix),w.projectionMatrixInverse.copy(g.projectionMatrixInverse);else{let v=A0+F9,B9=q0+F9,e0=a0-D9,U9=L9+(a-D9),z=v0*q0/B9*v,R=p0*q0/B9*v;w.projectionMatrix.makePerspective(e0,U9,z,R,v,B9),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function X0(w,g){if(g===null)w.matrixWorld.copy(w.matrix);else w.matrixWorld.multiplyMatrices(g.matrixWorld,w.matrix);w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(K===null)return;let{near:g,far:p}=w;if(V.texture!==null){if(V.depthNear>0)g=V.depthNear;if(V.depthFar>0)p=V.depthFar}if(y.near=m.near=B.near=g,y.far=m.far=B.far=p,d!==y.near||T!==y.far)K.updateRenderState({depthNear:y.near,depthFar:y.far}),d=y.near,T=y.far;y.layers.mask=w.layers.mask|6,B.layers.mask=y.layers.mask&-5,m.layers.mask=y.layers.mask&-3;let a=w.parent,Q0=y.cameras;X0(y,a);for(let r=0;r<Q0.length;r++)X0(Q0[r],a);if(Q0.length===2)Z0(y,B,m);else y.projectionMatrix.copy(B.projectionMatrix);if(L===null&&w.isPerspectiveCamera)L={camera:w,fov:w.fov,zoom:w.zoom};T0(w,y,a)};function T0(w,g,p){if(p===null)w.matrix.copy(g.matrixWorld);else w.matrix.copy(p.matrixWorld),w.matrix.invert(),w.matrix.multiply(g.matrixWorld);if(w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(g.projectionMatrix),w.projectionMatrixInverse.copy(g.projectionMatrixInverse),w.isPerspectiveCamera)w.fov=Y7*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1}this.getCamera=function(){return y},this.getFoveation=function(){if(U===null&&G===null)return;return Y},this.setFoveation=function(w){if(Y=w,U!==null)U.fixedFoveation=w;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=w},this.hasDepthSensing=function(){return V.texture!==null},this.getDepthSensingMesh=function(){return V.getMesh(y)},this.getCameraTexture=function(w){return E[w]};let _0=null;function c0(w,g){if(N=g.getViewerPose(H||W),D=g,N!==null){let p=N.views;if(G!==null)J.setRenderTargetFramebuffer(_,G.framebuffer),J.setRenderTarget(_);let a=!1;if(p.length!==y.cameras.length)y.cameras.length=0,a=!0;for(let q0=0;q0<p.length;q0++){let v0=p[q0],p0=null;if(G!==null)p0=G.getViewport(v0);else{let s0=q.getViewSubImage(U,v0);if(p0=s0.viewport,q0===0)J.setRenderTargetTextures(_,s0.colorTexture,s0.depthStencilTexture),J.setRenderTarget(_)}let y0=j[q0];if(y0===void 0)y0=new m9,y0.layers.enable(q0),y0.viewport=new W9,j[q0]=y0;if(y0.matrix.fromArray(v0.transform.matrix),y0.matrix.decompose(y0.position,y0.quaternion,y0.scale),y0.projectionMatrix.fromArray(v0.projectionMatrix),y0.projectionMatrixInverse.copy(y0.projectionMatrix).invert(),y0.viewport.set(p0.x,p0.y,p0.width,p0.height),q0===0)y.matrix.copy(y0.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale);if(a===!0)y.cameras.push(y0)}let Q0=K.enabledFeatures;if(Q0&&Q0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&O){q=Z.getBinding();let q0=q.getDepthInformation(p[0]);if(q0&&q0.isValid&&q0.texture)V.init(q0,K.renderState)}if(Q0&&Q0.includes("camera-access")&&O){J.state.unbindTexture(),q=Z.getBinding();for(let q0=0;q0<p.length;q0++){let v0=p[q0].camera;if(v0){let p0=E[v0];if(!p0)p0=new t6,E[v0]=p0;let y0=q.getCameraImage(v0);p0.sourceTexture=y0}}}}for(let p=0;p<I.length;p++){let a=A[p],Q0=I[p];if(a!==null&&Q0!==void 0)Q0.update(a,g,H||W)}if(_0)_0(w,g);if(g.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:g});D=null}let d0=new jX;d0.setAnimationLoop(c0),this.setAnimationLoop=function(w){_0=w},this.dispose=function(){}}}var Fq=new R9,cX=new f0;cX.set(-1,0,0,0,1,0,0,0,1);function Dq(J,Q){function Z(E,F){if(E.matrixAutoUpdate===!0)E.updateMatrix();F.value.copy(E.matrix)}function K(E,F){if(F.color.getRGB(E.fogColor.value,GK(J)),F.isFog)E.fogNear.value=F.near,E.fogFar.value=F.far;else if(F.isFogExp2)E.fogDensity.value=F.density}function $(E,F,C,_,I){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)W(E,F);else if(F.isMeshLambertMaterial){if(W(E,F),F.envMap)E.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)W(E,F),U(E,F);else if(F.isMeshPhongMaterial){if(W(E,F),q(E,F),F.envMap)E.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(W(E,F),G(E,F),F.isMeshPhysicalMaterial)D(E,F,I)}else if(F.isMeshMatcapMaterial)W(E,F),O(E,F);else if(F.isMeshDepthMaterial)W(E,F);else if(F.isMeshDistanceMaterial)W(E,F),V(E,F);else if(F.isMeshNormalMaterial)W(E,F);else if(F.isLineBasicMaterial){if(X(E,F),F.isLineDashedMaterial)Y(E,F)}else if(F.isPointsMaterial)H(E,F,C,_);else if(F.isSpriteMaterial)N(E,F);else if(F.isShadowMaterial)E.color.value.copy(F.color),E.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function W(E,F){if(E.opacity.value=F.opacity,F.color)E.diffuse.value.copy(F.color);if(F.emissive)E.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)E.map.value=F.map,Z(F.map,E.mapTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,Z(F.alphaMap,E.alphaMapTransform);if(F.bumpMap){if(E.bumpMap.value=F.bumpMap,Z(F.bumpMap,E.bumpMapTransform),E.bumpScale.value=F.bumpScale,F.side===s9)E.bumpScale.value*=-1}if(F.normalMap){if(E.normalMap.value=F.normalMap,Z(F.normalMap,E.normalMapTransform),E.normalScale.value.copy(F.normalScale),F.side===s9)E.normalScale.value.negate()}if(F.displacementMap)E.displacementMap.value=F.displacementMap,Z(F.displacementMap,E.displacementMapTransform),E.displacementScale.value=F.displacementScale,E.displacementBias.value=F.displacementBias;if(F.emissiveMap)E.emissiveMap.value=F.emissiveMap,Z(F.emissiveMap,E.emissiveMapTransform);if(F.specularMap)E.specularMap.value=F.specularMap,Z(F.specularMap,E.specularMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest;let C=Q.get(F),_=C.envMap,I=C.envMapRotation;if(_){if(E.envMap.value=_,E.envMapRotation.value.setFromMatrix4(Fq.makeRotationFromEuler(I)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(cX);E.reflectivity.value=F.reflectivity,E.ior.value=F.ior,E.refractionRatio.value=F.refractionRatio}if(F.lightMap)E.lightMap.value=F.lightMap,E.lightMapIntensity.value=F.lightMapIntensity,Z(F.lightMap,E.lightMapTransform);if(F.aoMap)E.aoMap.value=F.aoMap,E.aoMapIntensity.value=F.aoMapIntensity,Z(F.aoMap,E.aoMapTransform)}function X(E,F){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,F.map)E.map.value=F.map,Z(F.map,E.mapTransform)}function Y(E,F){E.dashSize.value=F.dashSize,E.totalSize.value=F.dashSize+F.gapSize,E.scale.value=F.scale}function H(E,F,C,_){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,E.size.value=F.size*C,E.scale.value=_*0.5,F.map)E.map.value=F.map,Z(F.map,E.uvTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,Z(F.alphaMap,E.alphaMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest}function N(E,F){if(E.diffuse.value.copy(F.color),E.opacity.value=F.opacity,E.rotation.value=F.rotation,F.map)E.map.value=F.map,Z(F.map,E.mapTransform);if(F.alphaMap)E.alphaMap.value=F.alphaMap,Z(F.alphaMap,E.alphaMapTransform);if(F.alphaTest>0)E.alphaTest.value=F.alphaTest}function q(E,F){E.specular.value.copy(F.specular),E.shininess.value=Math.max(F.shininess,0.0001)}function U(E,F){if(F.gradientMap)E.gradientMap.value=F.gradientMap}function G(E,F){if(E.metalness.value=F.metalness,F.metalnessMap)E.metalnessMap.value=F.metalnessMap,Z(F.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=F.roughness,F.roughnessMap)E.roughnessMap.value=F.roughnessMap,Z(F.roughnessMap,E.roughnessMapTransform);if(F.envMap)E.envMapIntensity.value=F.envMapIntensity}function D(E,F,C){if(E.ior.value=F.ior,F.sheen>0){if(E.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),E.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)E.sheenColorMap.value=F.sheenColorMap,Z(F.sheenColorMap,E.sheenColorMapTransform);if(F.sheenRoughnessMap)E.sheenRoughnessMap.value=F.sheenRoughnessMap,Z(F.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(E.clearcoat.value=F.clearcoat,E.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)E.clearcoatMap.value=F.clearcoatMap,Z(F.clearcoatMap,E.clearcoatMapTransform);if(F.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,Z(F.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(E.clearcoatNormalMap.value=F.clearcoatNormalMap,Z(F.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===s9)E.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)E.dispersion.value=F.dispersion;if(F.retroreflectivity>0)E.retroreflectivity.value=F.retroreflectivity;if(F.iridescence>0){if(E.iridescence.value=F.iridescence,E.iridescenceIOR.value=F.iridescenceIOR,E.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)E.iridescenceMap.value=F.iridescenceMap,Z(F.iridescenceMap,E.iridescenceMapTransform);if(F.iridescenceThicknessMap)E.iridescenceThicknessMap.value=F.iridescenceThicknessMap,Z(F.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(F.transmission>0){if(E.transmission.value=F.transmission,E.transmissionSamplerMap.value=C.texture,E.transmissionSamplerSize.value.set(C.width,C.height),F.transmissionMap)E.transmissionMap.value=F.transmissionMap,Z(F.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=F.thickness,F.thicknessMap)E.thicknessMap.value=F.thicknessMap,Z(F.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=F.attenuationDistance,E.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(E.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)E.anisotropyMap.value=F.anisotropyMap,Z(F.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=F.specularIntensity,E.specularColor.value.copy(F.specularColor),F.specularColorMap)E.specularColorMap.value=F.specularColorMap,Z(F.specularColorMap,E.specularColorMapTransform);if(F.specularIntensityMap)E.specularIntensityMap.value=F.specularIntensityMap,Z(F.specularIntensityMap,E.specularIntensityMapTransform)}function O(E,F){if(F.matcap)E.matcap.value=F.matcap}function V(E,F){let C=Q.get(F).light;E.referencePosition.value.setFromMatrixPosition(C.matrixWorld),E.nearDistance.value=C.shadow.camera.near,E.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:$}}function Oq(J,Q,Z,K){let $={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(I,A){let k=A.program;K.uniformBlockBinding(I,k)}function N(I,A){let k=$[I.id];if(k===void 0)E(I),k=q(I),$[I.id]=k,I.addEventListener("dispose",C);let P=A.program;K.updateUBOMapping(I,P);let L=Q.render.frame;if(W[I.id]!==L)G(I),W[I.id]=L}function q(I){let A=U();I.__bindingPointIndex=A;let k=J.createBuffer(),P=I.__size,L=I.usage;return J.bindBuffer(J.UNIFORM_BUFFER,k),J.bufferData(J.UNIFORM_BUFFER,P,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,k),k}function U(){for(let I=0;I<Y;I++)if(X.indexOf(I)===-1)return X.push(I),I;return b0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(I){let A=$[I.id],k=I.uniforms,P=I.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let L=0,B=k.length;L<B;L++){let m=k[L];if(Array.isArray(m))for(let j=0,y=m.length;j<y;j++)D(m[j],L,j,P);else D(m,L,0,P)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function D(I,A,k,P){if(V(I,A,k,P)===!0){let{__offset:L,value:B}=I;if(Array.isArray(B)){let m=0;for(let j=0;j<B.length;j++){let y=B[j],d=F(y);if(O(y,I.__data,m),typeof y!=="number"&&typeof y!=="boolean"&&!y.isMatrix3&&!ArrayBuffer.isView(y))m+=d.storage/Float32Array.BYTES_PER_ELEMENT}}else O(B,I.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,L,I.__data)}}function O(I,A,k){if(typeof I==="number"||typeof I==="boolean")A[0]=I;else if(I.isMatrix3)A[0]=I.elements[0],A[1]=I.elements[1],A[2]=I.elements[2],A[3]=0,A[4]=I.elements[3],A[5]=I.elements[4],A[6]=I.elements[5],A[7]=0,A[8]=I.elements[6],A[9]=I.elements[7],A[10]=I.elements[8],A[11]=0;else if(ArrayBuffer.isView(I))A.set(new I.constructor(I.buffer,I.byteOffset,A.length));else I.toArray(A,k)}function V(I,A,k,P){let L=I.value,B=A+"_"+k;if(P[B]===void 0){if(typeof L==="number"||typeof L==="boolean")P[B]=L;else if(ArrayBuffer.isView(L))P[B]=L.slice();else P[B]=L.clone();return!0}else{let m=P[B];if(typeof L==="number"||typeof L==="boolean"){if(m!==L)return P[B]=L,!0}else if(ArrayBuffer.isView(L))return!0;else if(m.equals(L)===!1)return m.copy(L),!0}return!1}function E(I){let A=I.uniforms,k=0,P=16;for(let B=0,m=A.length;B<m;B++){let j=Array.isArray(A[B])?A[B]:[A[B]];for(let y=0,d=j.length;y<d;y++){let T=j[y],S=Array.isArray(T.value)?T.value:[T.value];for(let n=0,u=S.length;n<u;n++){let $0=S[n],i=F($0),Z0=k%P,X0=Z0%i.boundary,T0=Z0+X0;if(k+=X0,T0!==0&&P-T0<i.storage)k+=P-T0;T.__data=new Float32Array(i.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=k,k+=i.storage}}}let L=k%P;if(L>0)k+=P-L;return I.__size=k,I.__cache={},this}function F(I){let A={boundary:0,storage:0};if(typeof I==="number"||typeof I==="boolean")A.boundary=4,A.storage=4;else if(I.isVector2)A.boundary=8,A.storage=8;else if(I.isVector3||I.isColor)A.boundary=16,A.storage=12;else if(I.isVector4)A.boundary=16,A.storage=16;else if(I.isMatrix3)A.boundary=48,A.storage=48;else if(I.isMatrix4)A.boundary=64,A.storage=64;else if(I.isTexture)j0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(I))A.boundary=16,A.storage=I.byteLength;else j0("WebGLRenderer: Unsupported uniform value type.",I);return A}function C(I){let A=I.target;A.removeEventListener("dispose",C);let k=X.indexOf(A.__bindingPointIndex);X.splice(k,1),J.deleteBuffer($[A.id]),delete $[A.id],delete W[A.id]}function _(){for(let I in $)J.deleteBuffer($[I]);X=[],$={},W={}}return{bind:H,update:N,dispose:_}}var Rq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),S8=null;function Mq(){if(S8===null)S8=new UK(Rq,16,16,kJ,P8),S8.name="DFG_LUT",S8.minFilter=i9,S8.magFilter=i9,S8.wrapS=v6,S8.wrapT=v6,S8.generateMipmaps=!1,S8.needsUpdate=!0;return S8}class mK{constructor(J={}){let{canvas:Q=KX(),context:Z=null,depth:K=!0,stencil:$=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:N="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:U=!1,outputBufferType:G=M8}=J;this.isWebGLRenderer=!0;let D;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");D=Z.getContextAttributes().alpha}else D=W;let O=G,V=new Set([BZ,VZ,IZ]),E=new Set([M8,qJ,p7,q7,MZ,LZ]),F=new Uint32Array(4),C=new Int32Array(4),_=new x,I=null,A=null,k=[],P=[],L=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=R8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,m=!1,j=null,y=null,d=null,T=null;this._outputColorSpace=aW;let S=0,n=0,u=null,$0=-1,i=null,Z0=new W9,X0=new W9,T0=null,_0=new t0(0),c0=0,d0=Q.width,w=Q.height,g=1,p=null,a=null,Q0=new W9(0,0,d0,w),r=new W9(0,0,d0,w),A0=!1,q0=new a6,v0=!1,p0=!1,y0=new R9,s0=new x,a0=new W9,L9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F9=!1;function D9(){return u===null?g:1}let v=Z;function B9(M,h){return Q.getContext(M,h)}let e0,U9,z,R,b,s,W0,U0,E0,t,K0,O0,C0,N0,H0,w0,S0,J9,f,F0,J0,D0,I0;try{let M={alpha:!0,depth:K,stencil:$,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:N,failIfMajorPerformanceCaveat:q};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${YW}`);if(Q.addEventListener("webglcontextlost",m0,!1),Q.addEventListener("webglcontextrestored",q9,!1),Q.addEventListener("webglcontextcreationerror",Q9,!1),v===null){if(v=B9("webgl2",M),v===null)if(B9("webgl2"))throw new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y0()}catch(M){throw Q.removeEventListener("webglcontextlost",m0,!1),Q.removeEventListener("webglcontextrestored",q9,!1),Q.removeEventListener("webglcontextcreationerror",Q9,!1),b0("WebGLRenderer: "+M.message),M}function Y0(){if(e0=new zG(v),e0.init(),J0=new Gq(v,e0),U9=new DG(v,e0,J,J0),z=new Uq(v,e0),U9.reversedDepthBuffer&&U)z.buffers.depth.setReversed(!0);y=v.createFramebuffer(),d=v.createFramebuffer(),T=v.createFramebuffer(),R=new _G(v),b=new o5,s=new Nq(v,e0,z,b,U9,J0,R),W0=new AG(B),U0=new wH(v),D0=new EG(v,U0),E0=new kG(v,U0,R,D0),t=new wG(v,E0,U0,D0,R),J9=new TG(v,U9,s),H0=new OG(b),K0=new i5(B,W0,e0,U9,D0,H0),O0=new Dq(B,b),C0=new r5,N0=new Kq(e0),S0=new qG(B,W0,z,t,D,Y),w0=new Hq(B,t,U9),I0=new Oq(v,R,U9,z),f=new FG(v,e0,R),F0=new PG(v,e0,R),R.programs=K0.programs,B.capabilities=U9,B.extensions=e0,B.properties=b,B.renderLists=C0,B.shadowMap=w0,B.state=z,B.info=R}if(O!==M8)L=new jG(O,Q.width,Q.height,X,K,$);let R0=new lX(B,v);this.xr=R0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let M=e0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=e0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return g},this.setPixelRatio=function(M){if(M===void 0)return;g=M,this.setSize(d0,w,!1)},this.getSize=function(M){return M.set(d0,w)},this.setSize=function(M,h,o=!0){if(R0.isPresenting){j0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(d0=M,w=h,Q.width=Math.floor(M*g),Q.height=Math.floor(h*g),o===!0)Q.style.width=M+"px",Q.style.height=h+"px";if(L!==null)L.setSize(Q.width,Q.height);this.setViewport(0,0,M,h)},this.getDrawingBufferSize=function(M){return M.set(d0*g,w*g).floor()},this.setDrawingBufferSize=function(M,h,o){d0=M,w=h,g=o,Q.width=Math.floor(M*o),Q.height=Math.floor(h*o),this.setViewport(0,0,M,h)},this.setEffects=function(M){if(O===M8){b0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let h=0;h<M.length;h++)if(M[h].isOutputPass===!0){j0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z0)},this.getViewport=function(M){return M.copy(Q0)},this.setViewport=function(M,h,o,l){if(M.isVector4)Q0.set(M.x,M.y,M.z,M.w);else Q0.set(M,h,o,l);z.viewport(Z0.copy(Q0).multiplyScalar(g).round())},this.getScissor=function(M){return M.copy(r)},this.setScissor=function(M,h,o,l){if(M.isVector4)r.set(M.x,M.y,M.z,M.w);else r.set(M,h,o,l);z.scissor(X0.copy(r).multiplyScalar(g).round())},this.getScissorTest=function(){return A0},this.setScissorTest=function(M){z.setScissorTest(A0=M)},this.setOpaqueSort=function(M){p=M},this.setTransparentSort=function(M){a=M},this.getClearColor=function(M){return M.copy(S0.getClearColor())},this.setClearColor=function(){S0.setClearColor(...arguments)},this.getClearAlpha=function(){return S0.getClearAlpha()},this.setClearAlpha=function(){S0.setClearAlpha(...arguments)},this.clear=function(M=!0,h=!0,o=!0){let l=0;if(M){let c=!1;if(u!==null){let L0=u.texture.format;c=V.has(L0)}if(c){let L0=u.texture.type,B0=E.has(L0),M0=S0.getClearColor(),z0=S0.getClearAlpha(),P0=M0.r,u0=M0.g,n0=M0.b;if(B0)F[0]=P0,F[1]=u0,F[2]=n0,F[3]=z0,v.clearBufferuiv(v.COLOR,0,F);else C[0]=P0,C[1]=u0,C[2]=n0,C[3]=z0,v.clearBufferiv(v.COLOR,0,C)}else l|=v.COLOR_BUFFER_BIT}if(h)l|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(o)l|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(l!==0)v.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),j=M},this.dispose=function(){Q.removeEventListener("webglcontextlost",m0,!1),Q.removeEventListener("webglcontextrestored",q9,!1),Q.removeEventListener("webglcontextcreationerror",Q9,!1),S0.dispose(),C0.dispose(),N0.dispose(),b.dispose(),W0.dispose(),t.dispose(),D0.dispose(),I0.dispose(),K0.dispose(),R0.dispose(),R0.removeEventListener("sessionstart",w$),R0.removeEventListener("sessionend",S$),OJ.stop()};function m0(M){M.preventDefault(),y7("WebGLRenderer: Context Lost."),m=!0}function q9(){y7("WebGLRenderer: Context Restored."),m=!1;let M=R.autoReset,h=w0.enabled,o=w0.autoUpdate,l=w0.needsUpdate,c=w0.type;Y0(),R.autoReset=M,w0.enabled=h,w0.autoUpdate=o,w0.needsUpdate=l,w0.type=c}function Q9(M){b0("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function V8(M){let h=M.target;h.removeEventListener("dispose",V8),p8(h)}function p8(M){kY(M),b.remove(M)}function kY(M){let h=b.get(M).programs;if(h!==void 0){if(h.forEach(function(o){K0.releaseProgram(o)}),M.isShaderMaterial)K0.releaseShaderCache(M)}}this.renderBufferDirect=function(M,h,o,l,c,L0){if(h===null)h=L9;let B0=c.isMesh&&c.matrixWorld.determinantAffine()<0,M0=TY(M,h,o,l,c);z.setMaterial(l,B0);let z0=o.index,P0=1;if(l.wireframe===!0){if(z0=E0.getWireframeAttribute(o),z0===void 0)return;P0=2}let u0=o.drawRange,n0=o.attributes.position,k0=u0.start*P0,Z9=(u0.start+u0.count)*P0;if(L0!==null)k0=Math.max(k0,L0.start*P0),Z9=Math.min(Z9,(L0.start+L0.count)*P0);if(z0!==null)k0=Math.max(k0,0),Z9=Math.min(Z9,z0.count);else if(n0!==void 0&&n0!==null)k0=Math.max(k0,0),Z9=Math.min(Z9,n0.count);let I9=Z9-k0;if(I9<0||I9===1/0)return;D0.setup(c,l,M0,o,z0);let O9,N9=f;if(z0!==null)O9=U0.get(z0),N9=F0,N9.setIndex(O9);if(c.isMesh)if(l.wireframe===!0)z.setLineWidth(l.wireframeLinewidth*D9()),N9.setMode(v.LINES);else N9.setMode(v.TRIANGLES);else if(c.isLine){let j9=l.linewidth;if(j9===void 0)j9=1;if(z.setLineWidth(j9*D9()),c.isLineSegments)N9.setMode(v.LINES);else if(c.isLineLoop)N9.setMode(v.LINE_LOOP);else N9.setMode(v.LINE_STRIP)}else if(c.isPoints)N9.setMode(v.POINTS);else if(c.isSprite)N9.setMode(v.TRIANGLES);if(c.isBatchedMesh)if(!e0.get("WEBGL_multi_draw")){let{_multiDrawStarts:j9,_multiDrawCounts:V0,_multiDrawCount:g9}=c,r0=z0?U0.get(z0).bytesPerElement:1,K8=b.get(l).currentProgram.getUniforms();for(let B8=0;B8<g9;B8++)K8.setValue(v,"_gl_DrawID",B8),N9.render(j9[B8]/r0,V0[B8])}else N9.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else if(c.isInstancedMesh)N9.renderInstances(k0,I9,c.count);else if(o.isInstancedBufferGeometry){let j9=o._maxInstanceCount!==void 0?o._maxInstanceCount:1/0,V0=Math.min(o.instanceCount,j9);N9.renderInstances(k0,I9,V0)}else N9.render(k0,I9)};function T$(M,h,o,l){if(j!==null&&M.isNodeMaterial)j.setObject(l,M);if(v0===!0)H0.setState(M,o,!1);if(M.transparent===!0&&M.side===z8&&M.forceSinglePass===!1)M.side=s9,M.needsUpdate=!0,H6(M,h,l),M.side=U7,M.needsUpdate=!0,H6(M,h,l),M.side=z8;else H6(M,h,l)}this.compile=function(M,h,o=null){if(o===null)o=M;if(j!==null)j.renderStart(M,h,o);if(A=N0.get(o),A.init(h),P.push(A),o.traverseVisible(function(c){if(c.isLight&&c.layers.test(h.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}}),M!==o)M.traverseVisible(function(c){if(c.isLight&&c.layers.test(h.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}});if(A.setupLights(),j!==null)j.updateLights(A.state.lightsArray);if(p0=this.localClippingEnabled,v0=H0.init(this.clippingPlanes,p0),v0===!0)H0.setGlobalState(this.clippingPlanes,h);if(j!==null)w0.render(A.state.shadowsArray,o,h);let l=new Set;if(M.traverse(function(c){if(!(c.isMesh||c.isPoints||c.isLine||c.isSprite))return;let L0=c.material;if(L0)if(Array.isArray(L0))for(let B0=0;B0<L0.length;B0++){let M0=L0[B0];T$(M0,o,h,c),l.add(M0)}else T$(L0,o,h,c),l.add(L0)}),A=P.pop(),j!==null)j.renderEnd();return l},this.compileAsync=function(M,h,o=null){let l=this.compile(M,h,o);return new Promise((c)=>{function L0(){if(l.forEach(function(B0){let z0=b.get(B0).currentProgram;if(z0===void 0||z0.isReady())l.delete(B0)}),l.size===0){c(M);return}setTimeout(L0,10)}if(e0.get("KHR_parallel_shader_compile")!==null)L0();else setTimeout(L0,10)})};let hQ=null;function PY(M){if(hQ)hQ(M)}function w$(){OJ.stop()}function S$(){OJ.start()}let OJ=new jX;if(OJ.setAnimationLoop(PY),typeof self!=="undefined")OJ.setContext(self);this.setAnimationLoop=function(M){hQ=M,R0.setAnimationLoop(M),M===null?OJ.stop():OJ.start()},R0.addEventListener("sessionstart",w$),R0.addEventListener("sessionend",S$),this.render=function(M,h){if(h!==void 0&&h.isCamera!==!0){b0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;if(j!==null)j.renderStart(M,h);let o=R0.enabled===!0&&R0.isPresenting===!0,l=L!==null&&(u===null||o)&&L.begin(B,u);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(h.parent===null&&h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(R0.enabled===!0&&R0.isPresenting===!0&&(L===null||L.isCompositing()===!1)){if(R0.cameraAutoUpdate===!0)R0.updateCamera(h);h=R0.getCamera()}if(M.isScene===!0)M.onBeforeRender(B,M,h,u);if(A=N0.get(M,P.length),A.init(h),A.state.textureUnits=s.getTextureUnits(),P.push(A),y0.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),q0.setFromProjectionMatrix(y0,KK,h.reversedDepth),p0=this.localClippingEnabled,v0=H0.init(this.clippingPlanes,p0),I=C0.get(M,k.length),I.init(),k.push(I),R0.enabled===!0&&R0.isPresenting===!0){let B0=B.xr.getDepthSensingMesh();if(B0!==null)fQ(B0,h,-1/0,B.sortObjects)}if(fQ(M,h,0,B.sortObjects),I.finish(),j!==null)j.updateLights(A.state.lightsArray);if(B.sortObjects===!0)I.sort(p,a);if(F9=R0.enabled===!1||R0.isPresenting===!1||R0.hasDepthSensing()===!1,F9)S0.addToRenderList(I,M);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(v0===!0)H0.beginShadows();let c=A.state.shadowsArray;if(w0.render(c,M,h),v0===!0)H0.endShadows();if((l&&L.hasRenderPass())===!1){let{opaque:B0,transmissive:M0}=I;if(A.setupLights(),h.isArrayCamera){let z0=h.cameras;if(M0.length>0)for(let P0=0,u0=z0.length;P0<u0;P0++){let n0=z0[P0];v$(B0,M0,M,n0)}if(F9)S0.render(M);for(let P0=0,u0=z0.length;P0<u0;P0++){let n0=z0[P0];j$(I,M,n0,n0.viewport)}}else{if(M0.length>0)v$(B0,M0,M,h);if(F9)S0.render(M);j$(I,M,h)}}if(u!==null&&n===0)s.updateMultisampleRenderTarget(u),s.updateRenderTargetMipmap(u);if(l)L.end(B);if(M.isScene===!0)M.onAfterRender(B,M,h);if(D0.resetDefaultState(),$0=-1,i=null,P.pop(),P.length>0){if(A=P[P.length-1],s.setTextureUnits(A.state.textureUnits),v0===!0)H0.setGlobalState(B.clippingPlanes,A.state.camera)}else A=null;if(k.pop(),k.length>0)I=k[k.length-1];else I=null;if(j!==null)j.renderEnd()};function fQ(M,h,o,l){if(M.visible===!1)return;if(M.layers.test(h.layers)){if(M.isGroup)o=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(h)}else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight){if(A.pushLight(M),M.castShadow)A.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(q0)){if(l)a0.setFromMatrixPosition(M.matrixWorld).applyMatrix4(y0);let B0=t.update(M),M0=M.material;if(M0.visible)I.push(M,B0,M0,o,a0.z,null,h)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||M.intersectsFrustum(q0)){let B0=t.update(M),M0=M.material;if(l){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();a0.copy(M.boundingSphere.center)}else{if(B0.boundingSphere===null)B0.computeBoundingSphere();a0.copy(B0.boundingSphere.center)}a0.applyMatrix4(M.matrixWorld).applyMatrix4(y0)}if(Array.isArray(M0)){let z0=B0.groups;for(let P0=0,u0=z0.length;P0<u0;P0++){let n0=z0[P0],k0=M0[n0.materialIndex];if(k0&&k0.visible)I.push(M,B0,k0,o,a0.z,n0,h)}}else if(M0.visible)I.push(M,B0,M0,o,a0.z,null,h)}}}let L0=M.children;for(let B0=0,M0=L0.length;B0<M0;B0++)fQ(L0[B0],h,o,l)}function j$(M,h,o,l){let{opaque:c,transmissive:L0,transparent:B0}=M;if(A.setupLightsView(o),v0===!0)H0.setGlobalState(B.clippingPlanes,o);if(l)z.viewport(Z0.copy(l));if(c.length>0)Y6(c,h,o);if(L0.length>0)Y6(L0,h,o);if(B0.length>0)Y6(B0,h,o);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function v$(M,h,o,l){if((o.isScene===!0?o.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[l.id]===void 0){let k0=e0.has("EXT_color_buffer_half_float")||e0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[l.id]=new J8(1,1,{generateMipmaps:!0,type:k0?P8:M8,minFilter:CJ,samples:Math.max(4,U9.samples),stencilBuffer:$,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:i0.workingColorSpace})}let L0=A.state.transmissionRenderTarget[l.id],B0=l.viewport||Z0;L0.setSize(B0.z*B.transmissionResolutionScale,B0.w*B.transmissionResolutionScale);let M0=B.getRenderTarget(),z0=B.getActiveCubeFace(),P0=B.getActiveMipmapLevel();if(B.setRenderTarget(L0),B.getClearColor(_0),c0=B.getClearAlpha(),c0<1)B.setClearColor(16777215,0.5);if(B.clear(),F9)S0.render(o);let u0=B.toneMapping;B.toneMapping=R8;let n0=l.viewport;if(l.viewport!==void 0)l.viewport=void 0;if(A.setupLightsView(l),v0===!0)H0.setGlobalState(B.clippingPlanes,l);if(Y6(M,o,l),s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0),e0.has("WEBGL_multisampled_render_to_texture")===!1){let k0=!1;for(let Z9=0,I9=h.length;Z9<I9;Z9++){let O9=h[Z9],{object:N9,geometry:j9,material:V0,group:g9}=O9;if(V0.side===z8&&N9.layers.test(l.layers)){let r0=V0.side;V0.side=s9,V0.needsUpdate=!0,b$(N9,o,l,j9,V0,g9),V0.side=r0,V0.needsUpdate=!0,k0=!0}}if(k0===!0)s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0)}if(B.setRenderTarget(M0,z0,P0),B.setClearColor(_0,c0),n0!==void 0)l.viewport=n0;B.toneMapping=u0}function Y6(M,h,o){let l=h.isScene===!0?h.overrideMaterial:null;for(let c=0,L0=M.length;c<L0;c++){let B0=M[c],{object:M0,geometry:z0,group:P0}=B0,u0=B0.material;if(u0.allowOverride===!0&&l!==null)u0=l;if(M0.layers.test(o.layers))b$(M0,h,o,z0,u0,P0)}}function b$(M,h,o,l,c,L0){if(j!==null&&c.isNodeMaterial)j.setObject(M,c);if(M.onBeforeRender(B,h,o,l,c,L0),M.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),c.onBeforeRender(B,h,o,l,M,L0),c.transparent===!0&&c.side===z8&&c.forceSinglePass===!1)c.side=s9,c.needsUpdate=!0,B.renderBufferDirect(o,h,l,c,M,L0),c.side=U7,c.needsUpdate=!0,B.renderBufferDirect(o,h,l,c,M,L0),c.side=z8;else B.renderBufferDirect(o,h,l,c,M,L0);M.onAfterRender(B,h,o,l,c,L0)}function H6(M,h,o){if(h.isScene!==!0)h=L9;let l=b.get(M),c=A.state.lights,L0=A.state.shadowsArray,B0=c.state.version,M0=K0.getParameters(M,c.state,L0,h,o,A.state.lightProbeGridArray),z0=K0.getProgramCacheKey(M0),P0=l.programs;l.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?h.environment:null,l.fog=h.fog;let u0=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(l.envMap=W0.get(M.envMap||l.environment,u0),l.envMapRotation=l.environment!==null&&M.envMap===null?h.environmentRotation:M.envMapRotation,P0===void 0)M.addEventListener("dispose",V8),P0=new Map,l.programs=P0;let n0=P0.get(z0);if(n0!==void 0){if(l.currentProgram===n0&&l.lightsStateVersion===B0)return h$(M,M0),n0}else{if(M0.uniforms=K0.getUniforms(M),j!==null&&M.isNodeMaterial)j.build(M,o,M0);M.onBeforeCompile(M0,B),n0=K0.acquireProgram(M0,z0),P0.set(z0,n0),l.uniforms=M0.uniforms}let k0=l.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)k0.clippingPlanes=H0.uniform;if(h$(M,M0),l.needsLights=SY(M),l.lightsStateVersion=B0,l.needsLights)k0.ambientLightColor.value=c.state.ambient,k0.lightProbe.value=c.state.probe,k0.sunLights.value=c.state.sun,k0.sunLightShadows.value=c.state.sunShadow,k0.directionalLights.value=c.state.directional,k0.directionalLightShadows.value=c.state.directionalShadow,k0.spotLights.value=c.state.spot,k0.spotLightShadows.value=c.state.spotShadow,k0.rectAreaLights.value=c.state.rectArea,k0.ltc_1.value=c.state.rectAreaLTC1,k0.ltc_2.value=c.state.rectAreaLTC2,k0.pointLights.value=c.state.point,k0.pointLightShadows.value=c.state.pointShadow,k0.hemisphereLights.value=c.state.hemi,k0.sunShadowMatrix.value=c.state.sunShadowMatrix,k0.sunShadowCascade.value=c.state.sunShadowCascade,k0.directionalShadowMatrix.value=c.state.directionalShadowMatrix,k0.spotLightMatrix.value=c.state.spotLightMatrix,k0.spotLightMap.value=c.state.spotLightMap,k0.pointShadowMatrix.value=c.state.pointShadowMatrix;return l.lightProbeGrid=A.state.lightProbeGridArray.length>0,l.currentProgram=n0,l.uniformsList=null,n0}function y$(M){if(M.uniformsList===null){let h=M.currentProgram.getUniforms();M.uniformsList=t7.seqWithValue(h.seq,M.uniforms)}return M.uniformsList}function h$(M,h){let o=b.get(M);o.outputColorSpace=h.outputColorSpace,o.batching=h.batching,o.batchingColor=h.batchingColor,o.instancing=h.instancing,o.instancingColor=h.instancingColor,o.instancingMorph=h.instancingMorph,o.skinning=h.skinning,o.morphTargets=h.morphTargets,o.morphNormals=h.morphNormals,o.morphColors=h.morphColors,o.morphTargetsCount=h.morphTargetsCount,o.numClippingPlanes=h.numClippingPlanes,o.numIntersection=h.numClipIntersection,o.vertexAlphas=h.vertexAlphas,o.vertexTangents=h.vertexTangents,o.toneMapping=h.toneMapping}function _Y(M,h){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(h.matrixWorld);for(let o=0,l=M.length;o<l;o++){let c=M[o];if(c.texture!==null&&c.boundingBox.containsPoint(_))return c}return null}function TY(M,h,o,l,c){if(h.isScene!==!0)h=L9;s.resetTextureUnits();let L0=h.fog,B0=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?h.environment:null,M0=u===null?B.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:i0.workingColorSpace,z0=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap,P0=W0.get(l.envMap||B0,z0),u0=l.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,n0=!!o.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),k0=!!o.morphAttributes.position,Z9=!!o.morphAttributes.normal,I9=!!o.morphAttributes.color,O9=R8;if(l.toneMapped){if(u===null||u.isXRRenderTarget===!0)O9=B.toneMapping}let N9=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,j9=N9!==void 0?N9.length:0,V0=b.get(l),g9=A.state.lights;if(v0===!0){if(p0===!0||M!==i){let E9=M===i&&l.id===$0;H0.setState(l,M,E9)}}let r0=!1;if(l.version===V0.__version){if(V0.needsLights&&V0.lightsStateVersion!==g9.state.version)r0=!0;else if(V0.outputColorSpace!==M0)r0=!0;else if(c.isBatchedMesh&&V0.batching===!1)r0=!0;else if(!c.isBatchedMesh&&V0.batching===!0)r0=!0;else if(c.isBatchedMesh&&V0.batchingColor===!0&&c._colorsTexture===null)r0=!0;else if(c.isBatchedMesh&&V0.batchingColor===!1&&c._colorsTexture!==null)r0=!0;else if(c.isInstancedMesh&&V0.instancing===!1)r0=!0;else if(!c.isInstancedMesh&&V0.instancing===!0)r0=!0;else if(c.isSkinnedMesh&&V0.skinning===!1)r0=!0;else if(!c.isSkinnedMesh&&V0.skinning===!0)r0=!0;else if(c.isInstancedMesh&&V0.instancingColor===!0&&c.instanceColor===null)r0=!0;else if(c.isInstancedMesh&&V0.instancingColor===!1&&c.instanceColor!==null)r0=!0;else if(c.isInstancedMesh&&V0.instancingMorph===!0&&c.morphTexture===null)r0=!0;else if(c.isInstancedMesh&&V0.instancingMorph===!1&&c.morphTexture!==null)r0=!0;else if(V0.envMap!==P0)r0=!0;else if(l.fog===!0&&V0.fog!==L0)r0=!0;else if(V0.numClippingPlanes!==void 0&&(V0.numClippingPlanes!==H0.numPlanes||V0.numIntersection!==H0.numIntersection))r0=!0;else if(V0.vertexAlphas!==u0)r0=!0;else if(V0.vertexTangents!==n0)r0=!0;else if(V0.morphTargets!==k0)r0=!0;else if(V0.morphNormals!==Z9)r0=!0;else if(V0.morphColors!==I9)r0=!0;else if(V0.toneMapping!==O9)r0=!0;else if(V0.morphTargetsCount!==j9)r0=!0;else if(!!V0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)r0=!0}else r0=!0,V0.__version=l.version;let K8=V0.currentProgram;if(r0===!0){if(K8=H6(l,h,c),j&&l.isNodeMaterial)j.onUpdateProgram(l,K8,V0)}let B8=!1,JJ=!1,dJ=!1,Y9=K8.getUniforms(),M9=V0.uniforms;if(z.useProgram(K8.program))B8=!0,JJ=!0,dJ=!0;if(l.id!==$0)$0=l.id,JJ=!0;if(V0.needsLights){let E9=_Y(A.state.lightProbeGridArray,c);if(V0.lightProbeGrid!==E9)V0.lightProbeGrid=E9,JJ=!0}if(B8||i!==M){if(z.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();Y9.setValue(v,"projectionMatrix",M.projectionMatrix),Y9.setValue(v,"viewMatrix",M.matrixWorldInverse);let ZJ=Y9.map.cameraPosition;if(ZJ!==void 0)ZJ.setValue(v,s0.setFromMatrixPosition(M.matrixWorld));if(U9.logarithmicDepthBuffer)Y9.setValue(v,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)Y9.setValue(v,"isOrthographic",M.isOrthographicCamera===!0);if(i!==M)i=M,JJ=!0,dJ=!0}if(V0.needsLights){if(g9.state.sunShadowMap.length>0)Y9.setValue(v,"sunShadowMap",g9.state.sunShadowMap,s);if(g9.state.directionalShadowMap.length>0)Y9.setValue(v,"directionalShadowMap",g9.state.directionalShadowMap,s);if(g9.state.spotShadowMap.length>0)Y9.setValue(v,"spotShadowMap",g9.state.spotShadowMap,s);if(g9.state.pointShadowMap.length>0)Y9.setValue(v,"pointShadowMap",g9.state.pointShadowMap,s)}if(c.isSkinnedMesh){Y9.setOptional(v,c,"bindMatrix"),Y9.setOptional(v,c,"bindMatrixInverse");let E9=c.skeleton;if(E9){if(E9.boneTexture===null)E9.computeBoneTexture();Y9.setValue(v,"boneTexture",E9.boneTexture,s)}}if(c.isBatchedMesh){if(Y9.setOptional(v,c,"batchingTexture"),Y9.setValue(v,"batchingTexture",c._matricesTexture,s),Y9.setOptional(v,c,"batchingIdTexture"),Y9.setValue(v,"batchingIdTexture",c._indirectTexture,s),Y9.setOptional(v,c,"batchingColorTexture"),c._colorsTexture!==null)Y9.setValue(v,"batchingColorTexture",c._colorsTexture,s)}let QJ=o.morphAttributes;if(QJ.position!==void 0||QJ.normal!==void 0||QJ.color!==void 0)J9.update(c,o,K8);if(JJ||V0.receiveShadow!==c.receiveShadow)V0.receiveShadow=c.receiveShadow,Y9.setValue(v,"receiveShadow",c.receiveShadow);if((l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial)&&l.envMap===null&&h.environment!==null)M9.envMapIntensity.value=h.environmentIntensity;if(M9.dfgLUT!==void 0)M9.dfgLUT.value=Mq();if(JJ){if(Y9.setValue(v,"toneMappingExposure",B.toneMappingExposure),V0.needsLights)wY(M9,dJ);if(L0&&l.fog===!0)O0.refreshFogUniforms(M9,L0);if(O0.refreshMaterialUniforms(M9,l,g,w,A.state.transmissionRenderTarget[M.id]),V0.needsLights&&V0.lightProbeGrid){let E9=V0.lightProbeGrid;M9.probesSH.value=E9.texture,M9.probesMin.value.copy(E9.boundingBox.min),M9.probesMax.value.copy(E9.boundingBox.max),M9.probesResolution.value.copy(E9.resolution)}t7.upload(v,y$(V0),M9,s)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)t7.upload(v,y$(V0),M9,s),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)Y9.setValue(v,"center",c.center);if(Y9.setValue(v,"modelViewMatrix",c.modelViewMatrix),Y9.setValue(v,"normalMatrix",c.normalMatrix),Y9.setValue(v,"modelMatrix",c.matrixWorld),l.uniformsGroups!==void 0){let E9=l.uniformsGroups;for(let ZJ=0,uJ=E9.length;ZJ<uJ;ZJ++){let x$=E9[ZJ];I0.update(x$,K8),I0.bind(x$,K8)}}return K8}function wY(M,h){M.ambientLightColor.needsUpdate=h,M.lightProbe.needsUpdate=h,M.sunLights.needsUpdate=h,M.sunLightShadows.needsUpdate=h,M.directionalLights.needsUpdate=h,M.directionalLightShadows.needsUpdate=h,M.pointLights.needsUpdate=h,M.pointLightShadows.needsUpdate=h,M.spotLights.needsUpdate=h,M.spotLightShadows.needsUpdate=h,M.rectAreaLights.needsUpdate=h,M.hemisphereLights.needsUpdate=h}function SY(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(M,h,o){let l=b.get(M);if(l.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,l.__autoAllocateDepthBuffer===!1)l.__useRenderToTexture=!1;b.get(M.texture).__webglTexture=h,b.get(M.depthTexture).__webglTexture=l.__autoAllocateDepthBuffer?void 0:o,l.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,h){let o=b.get(M);o.__webglFramebuffer=h,o.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(M,h=0,o=0){u=M,S=h,n=o;let l=null,c=!1,L0=!1;if(M){let M0=b.get(M);if(M0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(v.FRAMEBUFFER,M0.__webglFramebuffer),Z0.copy(M.viewport),X0.copy(M.scissor),T0=M.scissorTest,z.viewport(Z0),z.scissor(X0),z.setScissorTest(T0),$0=-1;return}else if(M0.__webglFramebuffer===void 0)s.setupRenderTarget(M);else if(M0.__hasExternalTextures)s.rebindTextures(M,b.get(M.texture).__webglTexture,b.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let u0=M.depthTexture;if(M0.__boundDepthTexture!==u0){if(u0!==null&&b.has(u0)&&(M.width!==u0.image.width||M.height!==u0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s.setupDepthRenderbuffer(M)}}let z0=M.texture;if(z0.isData3DTexture||z0.isDataArrayTexture||z0.isCompressedArrayTexture)L0=!0;let P0=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(P0[h]))l=P0[h][o];else l=P0[h];c=!0}else if(M.samples>0&&s.useMultisampledRTT(M)===!1)l=b.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(P0))l=P0[o];else l=P0;Z0.copy(M.viewport),X0.copy(M.scissor),T0=M.scissorTest}else Z0.copy(Q0).multiplyScalar(g).floor(),X0.copy(r).multiplyScalar(g).floor(),T0=A0;if(o!==0)l=y;if(z.bindFramebuffer(v.FRAMEBUFFER,l))z.drawBuffers(M,l);if(z.viewport(Z0),z.scissor(X0),z.setScissorTest(T0),c){let M0=b.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+h,M0.__webglTexture,o)}else if(L0){let M0=h;for(let z0=0;z0<M.textures.length;z0++){let P0=b.get(M.textures[z0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+z0,P0.__webglTexture,o,M0)}}else if(M!==null&&o!==0){let M0=b.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,M0.__webglTexture,o)}$0=-1};function f$(M){let h=b.get(M);if(h.__readFormat!==M.format||h.__readType!==M.type)h.__readFormat=M.format,h.__readType=M.type,h.__formatReadable=U9.textureFormatReadable(M.format),h.__typeReadable=U9.textureTypeReadable(M.type);return h}if(this.readRenderTargetPixels=function(M,h,o,l,c,L0,B0,M0=0){if(!(M&&M.isWebGLRenderTarget)){b0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z0=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&B0!==void 0)z0=z0[B0];if(z0){z.bindFramebuffer(v.FRAMEBUFFER,z0);try{let P0=M.textures[M0],u0=P0.format,n0=P0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let k0=f$(P0);if(k0.__formatReadable===!1){b0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(k0.__typeReadable===!1){b0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(h>=0&&h<=M.width-l&&(o>=0&&o<=M.height-c))v.readPixels(h,o,l,c,J0.convert(u0),J0.convert(n0),L0)}finally{let P0=u!==null?b.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,P0)}}},this.readRenderTargetPixelsAsync=async function(M,h,o,l,c,L0,B0,M0=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z0=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&B0!==void 0)z0=z0[B0];if(z0)if(h>=0&&h<=M.width-l&&(o>=0&&o<=M.height-c)){z.bindFramebuffer(v.FRAMEBUFFER,z0);let P0=M.textures[M0],u0=P0.format,n0=P0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let k0=f$(P0);if(k0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(k0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Z9=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Z9),v.bufferData(v.PIXEL_PACK_BUFFER,L0.byteLength,v.STREAM_READ),v.readPixels(h,o,l,c,J0.convert(u0),J0.convert(n0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let I9=u!==null?b.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,I9);let O9=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await WX(v,O9,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Z9),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,L0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(Z9),v.deleteSync(O9),L0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,h=null,o=0){let l=Math.pow(2,-o),c=Math.floor(M.image.width*l),L0=Math.floor(M.image.height*l),B0=h!==null?h.x:0,M0=h!==null?h.y:0;s.setTexture2D(M,0),v.copyTexSubImage2D(v.TEXTURE_2D,o,0,0,B0,M0,c,L0),z.unbindTexture()},this.copyTextureToTexture=function(M,h,o=null,l=null,c=0,L0=0){let B0,M0,z0,P0,u0,n0,k0,Z9,I9,O9=M.isCompressedTexture?M.mipmaps[L0]:M.image;if(o!==null)B0=o.max.x-o.min.x,M0=o.max.y-o.min.y,z0=o.isBox3?o.max.z-o.min.z:1,P0=o.min.x,u0=o.min.y,n0=o.isBox3?o.min.z:0;else{let M9=Math.pow(2,-c);if(B0=Math.floor(O9.width*M9),M0=Math.floor(O9.height*M9),M.isDataArrayTexture)z0=O9.depth;else if(M.isData3DTexture)z0=Math.floor(O9.depth*M9);else z0=1;P0=0,u0=0,n0=0}if(l!==null)k0=l.x,Z9=l.y,I9=l.z;else k0=0,Z9=0,I9=0;let N9=J0.convert(h.format),j9=J0.convert(h.type),V0;if(h.isData3DTexture)s.setTexture3D(h,0),V0=v.TEXTURE_3D;else if(h.isDataArrayTexture||h.isCompressedArrayTexture)s.setTexture2DArray(h,0),V0=v.TEXTURE_2D_ARRAY;else s.setTexture2D(h,0),V0=v.TEXTURE_2D;z.activeTexture(v.TEXTURE0),z.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,h.flipY),z.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),z.pixelStorei(v.UNPACK_ALIGNMENT,h.unpackAlignment);let g9=z.getParameter(v.UNPACK_ROW_LENGTH),r0=z.getParameter(v.UNPACK_IMAGE_HEIGHT),K8=z.getParameter(v.UNPACK_SKIP_PIXELS),B8=z.getParameter(v.UNPACK_SKIP_ROWS),JJ=z.getParameter(v.UNPACK_SKIP_IMAGES);z.pixelStorei(v.UNPACK_ROW_LENGTH,O9.width),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,O9.height),z.pixelStorei(v.UNPACK_SKIP_PIXELS,P0),z.pixelStorei(v.UNPACK_SKIP_ROWS,u0),z.pixelStorei(v.UNPACK_SKIP_IMAGES,n0);let dJ=M.isDataArrayTexture||M.isData3DTexture,Y9=h.isDataArrayTexture||h.isData3DTexture;if(M.isDepthTexture){let M9=b.get(M),QJ=b.get(h),E9=b.get(M9.__renderTarget),ZJ=b.get(QJ.__renderTarget);z.bindFramebuffer(v.READ_FRAMEBUFFER,E9.__webglFramebuffer),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,ZJ.__webglFramebuffer);for(let uJ=0;uJ<z0;uJ++){if(dJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,b.get(M).__webglTexture,c,n0+uJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,b.get(h).__webglTexture,L0,I9+uJ);v.blitFramebuffer(P0,u0,B0,M0,k0,Z9,B0,M0,v.DEPTH_BUFFER_BIT,v.NEAREST)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(c!==0||M.isRenderTargetTexture||b.has(M)){let M9=b.get(M),QJ=b.get(h);z.bindFramebuffer(v.READ_FRAMEBUFFER,d),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,T);for(let E9=0;E9<z0;E9++){if(dJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,M9.__webglTexture,c,n0+E9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,M9.__webglTexture,c);if(Y9)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,QJ.__webglTexture,L0,I9+E9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,QJ.__webglTexture,L0);if(c!==0)v.blitFramebuffer(P0,u0,B0,M0,k0,Z9,B0,M0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(Y9)v.copyTexSubImage3D(V0,L0,k0,Z9,I9+E9,P0,u0,B0,M0);else v.copyTexSubImage2D(V0,L0,k0,Z9,P0,u0,B0,M0)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(Y9)if(M.isDataTexture||M.isData3DTexture)v.texSubImage3D(V0,L0,k0,Z9,I9,B0,M0,z0,N9,j9,O9.data);else if(h.isCompressedArrayTexture)v.compressedTexSubImage3D(V0,L0,k0,Z9,I9,B0,M0,z0,N9,O9.data);else v.texSubImage3D(V0,L0,k0,Z9,I9,B0,M0,z0,N9,j9,O9);else if(M.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,L0,k0,Z9,B0,M0,N9,j9,O9.data);else if(M.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,L0,k0,Z9,O9.width,O9.height,N9,O9.data);else v.texSubImage2D(v.TEXTURE_2D,L0,k0,Z9,B0,M0,N9,j9,O9);if(z.pixelStorei(v.UNPACK_ROW_LENGTH,g9),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,r0),z.pixelStorei(v.UNPACK_SKIP_PIXELS,K8),z.pixelStorei(v.UNPACK_SKIP_ROWS,B8),z.pixelStorei(v.UNPACK_SKIP_IMAGES,JJ),L0===0&&h.generateMipmaps)v.generateMipmap(V0);z.unbindTexture()},this.initRenderTarget=function(M){if(b.get(M).__webglFramebuffer===void 0)s.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)s.setTextureCube(M,0);else if(M.isData3DTexture)s.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)s.setTexture2DArray(M,0);else s.setTexture2D(M,0);z.unbindTexture()},this.resetState=function(){S=0,n=0,u=null,z.reset(),D0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return KK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=i0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=i0._getUnpackColorSpace()}}var nX={type:"change"},lK={type:"start"},iX={type:"end"},NQ=new c7,sX=new W8,Lq=Math.cos(70*m7.DEG2RAD),z9=new x,r9=2*Math.PI,X9={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uK=0.000001;class cK extends WQ{constructor(J,Q=null){super(J,Q);if(this.state=X9.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:UJ.ROTATE,MIDDLE:UJ.DOLLY,RIGHT:UJ.PAN},this.touches={ONE:NJ.ROTATE,TWO:NJ.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new o9,this._lastTargetPosition=new x,this._quat=new o9().setFromUnitVectors(J.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new i7,this._sphericalDelta=new i7,this._scale=1,this._panOffset=new x,this._rotateStart=new h0,this._rotateEnd=new h0,this._rotateDelta=new h0,this._panStart=new h0,this._panEnd=new h0,this._panDelta=new h0,this._dollyStart=new h0,this._dollyEnd=new h0,this._dollyDelta=new h0,this._dollyDirection=new x,this._mouse=new h0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vq.bind(this),this._onPointerDown=Iq.bind(this),this._onPointerUp=Bq.bind(this),this._onContextMenu=Tq.bind(this),this._onMouseWheel=zq.bind(this),this._onKeyDown=kq.bind(this),this._onTouchStart=Pq.bind(this),this._onTouchMove=_q.bind(this),this._onMouseDown=Cq.bind(this),this._onMouseMove=Aq.bind(this),this._interceptControlDown=wq.bind(this),this._interceptControlUp=Sq.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=X9.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nX),this.update(),this.state=X9.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(z9.copy(Q).sub(this.target),z9.applyQuaternion(this._quat),this._spherical.setFromVector3(z9),this.autoRotate&&this.state===X9.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Z=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite(Z)&&isFinite(K)){if(Z<-Math.PI)Z+=r9;else if(Z>Math.PI)Z-=r9;if(K<-Math.PI)K+=r9;else if(K>Math.PI)K-=r9;if(Z<=K)this._spherical.theta=Math.max(Z,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Z+K)/2?Math.max(Z,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let $=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),$=W!=this._spherical.radius}if(z9.setFromSpherical(this._spherical),z9.applyQuaternion(this._quatInverse),Q.copy(this.target).add(z9),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=z9.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),$=!!Y}else if(this.object.isOrthographicCamera){let X=new x(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),$=Y!==this.object.zoom;let H=new x(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),W=z9.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(NQ.origin.copy(this.object.position),NQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(NQ.direction))<Lq)this.object.lookAt(this.target);else sX.setFromNormalAndCoplanarPoint(this.object.up,this.target),NQ.intersectPlane(sX,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),$=!0}if(this._scale=1,this._performCursorZoom=!1,$||this._lastPosition.distanceToSquared(this.object.position)>uK||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uK||this._lastTargetPosition.distanceToSquared(this.target)>uK)return this.dispatchEvent(nX),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return r9/60*this.autoRotateSpeed*J;else return r9/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){z9.setFromMatrixColumn(Q,0),z9.multiplyScalar(-J),this._panOffset.add(z9)}_panUp(J,Q){if(this.screenSpacePanning===!0)z9.setFromMatrixColumn(Q,1);else z9.setFromMatrixColumn(Q,0),z9.crossVectors(this.object.up,z9);z9.multiplyScalar(J),this._panOffset.add(z9)}_pan(J,Q){let Z=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;z9.copy(K).sub(this.target);let $=z9.length();$*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*$/Z.clientHeight,this.object.matrix),this._panUp(2*Q*$/Z.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Z.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/Z.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Z=this.domElement.getBoundingClientRect(),K=J-Z.left,$=Q-Z.top,W=Z.width,X=Z.height;this._mouse.x=K/W*2-1,this._mouse.y=-($/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(r9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(r9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(r9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-r9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(r9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-r9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set(Z,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set(Z,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyStart.set(0,$)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Z=this._getSecondPointerPosition(J),K=0.5*(J.pageX+Z.x),$=0.5*(J.pageY+Z.y);this._rotateEnd.set(K,$)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(r9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(r9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set(Z,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),Z=J.pageX-Q.x,K=J.pageY-Q.y,$=Math.sqrt(Z*Z+K*K);this._dollyEnd.set(0,$),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new h0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,Z={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Z.deltaY*=10;return Z}}function Iq(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function Vq(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function Bq(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(iX),this.state=X9.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],Z=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:Z.x,pageY:Z.y});break}}function Cq(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case UJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=X9.DOLLY;break;case UJ.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=X9.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=X9.ROTATE}break;case UJ.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=X9.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=X9.PAN}break;default:this.state=X9.NONE}if(this.state!==X9.NONE)this.dispatchEvent(lK)}function Aq(J){switch(this.state){case X9.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case X9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case X9.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function zq(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==X9.NONE)return;J.preventDefault(),this.dispatchEvent(lK),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(iX)}function kq(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function Pq(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case NJ.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=X9.TOUCH_ROTATE;break;case NJ.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=X9.TOUCH_PAN;break;default:this.state=X9.NONE}break;case 2:switch(this.touches.TWO){case NJ.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=X9.TOUCH_DOLLY_PAN;break;case NJ.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=X9.TOUCH_DOLLY_ROTATE;break;default:this.state=X9.NONE}break;default:this.state=X9.NONE}if(this.state!==X9.NONE)this.dispatchEvent(lK)}function _q(J){switch(this._trackPointer(J),this.state){case X9.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case X9.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case X9.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case X9.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=X9.NONE}}function Tq(J){if(this.enabled===!1)return;J.preventDefault()}function wq(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Sq(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var GQ={jaw:0.6,tbX:2.9,tbY:6.85,ttX:6.45,ttY:7.3,ttCurl:0,root:0,lipAp:0.7,lipProt:0.2,lipWidth:0.5,labiodental:0,velum:-0.15,larynx:0,epilarynx:0,ventricular:0,lateral:0,dorsum:0};var e={blue:"#4fb6f2",blueMid:"#3487c4",blueDim:"#1f5f8c",frame:"#133954",green:"#5be381",red:"#ff5d40",pink:"#ff73cf",white:"#eef6f8",amber:"#ffb340"},q1=[e.green,e.red,e.pink,e.white],qQ={primary:"#effbff",secondary:"#e2f5fc"};function oX(J,Q,Z){let K=parseInt(J.slice(1),16),$=parseInt(Q.slice(1),16),W=(X)=>Math.round((K>>X&255)*(1-Z)+($>>X&255)*Z);return"#"+[16,8,0].map((X)=>W(X).toString(16).padStart(2,"0")).join("")}var EQ=(J)=>oX(J,"#ffffff",0.55),a8=[[0,"#3a2408"],[0.35,"#c9822a"],[0.6,"#ffb340"],[0.82,"#ffe39a"],[1,"#fff8ec"]];function FQ(J){let Q=Math.max(0,Math.min(1,J));for(let Z=1;Z<a8.length;Z++)if(Q<=a8[Z][0])return oX(a8[Z-1][1],a8[Z][1],(Q-a8[Z-1][0])/(a8[Z][0]-a8[Z-1][0]));return a8[a8.length-1][1]}var E1={black:"#000000",console:"#000000",inset:"#000000",line:e.frame,text:e.blue,textDim:e.blueMid,caliper:e.amber,caliperDim:"rgba(255, 179, 64, 0.45)",fat:"#bdbdbd",skin:"#a8a8a8",muscle:"#5d5d5d",tongue:"#6b6b6b",brain:"#7c7c7c",marrow:"#b2b2b2",cortex:"#1c1c1c",cartilage:"#3e3e3e",mucosa:"#8f8f8f",tooth:"#101010"};var DQ=(J)=>{if(!(J>0))return 0;let Q=Math.log10(40),Z=Math.log10(4000);return Math.max(0,Math.min(1,(Math.log10(J)-Q)/(Z-Q)))};var aX=(J,Q)=>Math.hypot(J.x-Q.x,J.y-Q.y);var OQ=(J,Q,Z)=>{let K=Math.sin(Z),$=Math.cos(Z),W=J.x-Q.x,X=J.y-Q.y;return{x:Q.x+W*$-X*K,y:Q.y+W*K+X*$}};function L8(J,Q){if(J.length<3)return J.slice();let Z=[];for(let K=0;K<J.length-1;K++){let $=J[Math.max(0,K-1)],W=J[K],X=J[K+1],Y=J[Math.min(J.length-1,K+2)];for(let H=0;H<Q;H++){let N=H/Q,q=N*N,U=q*N;Z.push({x:0.5*(2*W.x+(-$.x+X.x)*N+(2*$.x-5*W.x+4*X.x-Y.x)*q+(-$.x+3*W.x-3*X.x+Y.x)*U),y:0.5*(2*W.y+(-$.y+X.y)*N+(2*$.y-5*W.y+4*X.y-Y.y)*q+(-$.y+3*W.y-3*X.y+Y.y)*U)})}}return Z.push(J[J.length-1]),Z}var jq='"Hershey", "Archivo", system-ui, sans-serif',rX=(J,Q="l")=>`${Q==="m"?500:300} ${J}px ${jq}`,vq=typeof CanvasRenderingContext2D!=="undefined"&&"letterSpacing"in CanvasRenderingContext2D.prototype;function bq(J,Q=!1){let Z=new Path2D;if(J.length===0)return Z;Z.moveTo(J[0][0],J[0][1]);for(let K=1;K<J.length;K++)Z.lineTo(J[K][0],J[K][1]);if(Q)Z.closePath();return Z}function M7(J,Q,Z,K,$={}){if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.lineJoin="round",J.lineCap="round",J.setLineDash($.dash??[]),J.strokeStyle=Z,J.lineWidth=K,J.stroke(Q),$.hot)J.globalCompositeOperation="source-over",J.strokeStyle=EQ(Z),J.lineWidth=K*0.42,J.stroke(Q);J.restore()}function bJ(J,Q,Z,K,$={}){if(Q.length<2)return;M7(J,bq(Q,$.close),Z,K,$)}function e7(J,Q,Z,K,$,W,X,Y={}){let H=new Path2D;H.moveTo(Q,Z),H.lineTo(K,$),M7(J,H,W,X,Y)}function tX(J,Q,Z,K,$,W=1.2,X={}){let Y=new Path2D;Y.arc(Q,Z,K,0,Math.PI*2),M7(J,Y,$,W,X)}function J6(J,Q,Z,K,$,W=1){J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=W,J.fillStyle=$,J.beginPath(),J.arc(Q,Z,K,0,Math.PI*2),J.fill(),J.restore()}function eX(J,Q,Z,K,$=7,W=1){let Y=new Path2D;Y.arc(Q,Z,$,0,Math.PI*2),Y.moveTo(Q-$-4,Z),Y.lineTo(Q-$+2,Z),Y.moveTo(Q+$-2,Z),Y.lineTo(Q+$+4,Z),Y.moveTo(Q,Z-$-4),Y.lineTo(Q,Z-$+2),Y.moveTo(Q,Z+$-2),Y.lineTo(Q,Z+$+4),M7(J,Y,K,1.25,{alpha:W})}function _9(J,Q,Z,K,$={}){let W=$.size??11;if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=$.alpha??1,J.font=rX(W,$.weight),vq)J.letterSpacing=`${(($.ls??0.14)*W).toFixed(2)}px`;J.textAlign=$.align??"left",J.textBaseline=$.baseline??"alphabetic",J.fillStyle=$.color??e.blue;let X=J;if($.moving)X.layoutMoving=!0;J.fillText(Q,Z,K),X.layoutMoving=void 0,J.restore()}function yJ(J,Q=2){let Z=J.length>1&&J[0][0]===J[J.length-1][0]&&J[0][1]===J[J.length-1][1]?J.slice(0,-1):J.slice();for(let K=0;K<Q;K++){let $=[];for(let W=0;W<Z.length;W++){let X=Z[W],Y=Z[(W+1)%Z.length];$.push([X[0]*0.75+Y[0]*0.25,X[1]*0.75+Y[1]*0.25],[X[0]*0.25+Y[0]*0.75,X[1]*0.25+Y[1]*0.75])}Z=$}return Z.length?[...Z,Z[0]]:Z}function nK(J,Q,Z,K,$,W,X=1){let Y=$*0.5,H=Y*0.48,N=Z-Y/2,q=Math.max(0.9,$*0.07),U=(F)=>F.toFixed(2),G=(F)=>{J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.strokeStyle=W,J.lineWidth=q,J.lineCap="round",J.lineJoin="round",J.stroke(new Path2D(F)),J.restore()},D=(F,C)=>{if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.font=rX($),J.textAlign="center",J.textBaseline="alphabetic",J.fillStyle=W,C)C(J);J.fillText(F,C?0:Q,C?0:Z),J.restore()},O=(F)=>{F.translate(Q,N),F.rotate(Math.PI),F.translate(0,Y/2)},V=(F)=>{F.translate(Q,Z),F.scale(-1,1)},E=(F)=>`M${U(F+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(F-H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(F+H)} ${U(N)}`;switch(K){case"ɑ":{let F=Q-0.06*$;return G(E(F)+`M${U(F+H)} ${U(Z-Y)}L${U(F+H)} ${U(Z)}`)}case"ɒ":{let F=Q+0.06*$;return G(E(F)+`M${U(F-H)} ${U(Z-Y)}L${U(F-H)} ${U(Z)}`)}case"ɪ":return G(`M${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z)}M${U(Q-Y*0.3)} ${U(Z-Y)}L${U(Q+Y*0.3)} ${U(Z-Y)}M${U(Q-Y*0.3)} ${U(Z)}L${U(Q+Y*0.3)} ${U(Z)}`);case"ɛ":return G(`M${U(Q+H*0.9)} ${U(Z-Y*0.92)}Q${U(Q-H*1.1)} ${U(Z-Y*1.08)} ${U(Q-H*0.25)} ${U(N)}Q${U(Q-H*1.3)} ${U(Z+Y*0.1)} ${U(Q+H*0.95)} ${U(Z-Y*0.06)}`);case"ɜ":return G(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}`);case"ɝ":return G(`M${U(Q-H*0.9)} ${U(Z-Y*0.92)}Q${U(Q+H*1.1)} ${U(Z-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U(Z+Y*0.1)} ${U(Q-H*0.95)} ${U(Z-Y*0.06)}M${U(Q+H*0.55)} ${U(N-Y*0.1)}Q${U(Q+H*1.4)} ${U(N-Y*0.5)} ${U(Q+H*1.5)} ${U(N-Y*0.15)}`);case"ʊ":return G(`M${U(Q-H*1.15)} ${U(Z-Y)}Q${U(Q-H*0.5)} ${U(Z-Y*0.9)} ${U(Q-H*0.75)} ${U(N)}Q${U(Q-H)} ${U(Z)} ${U(Q)} ${U(Z)}Q${U(Q+H)} ${U(Z)} ${U(Q+H*0.75)} ${U(N)}Q${U(Q+H*0.5)} ${U(Z-Y*0.9)} ${U(Q+H*1.15)} ${U(Z-Y)}`);case"ʌ":return G(`M${U(Q-H)} ${U(Z)}L${U(Q)} ${U(Z-Y)}L${U(Q+H)} ${U(Z)}`);case"ɤ":return G(`M${U(Q-H)} ${U(Z-Y)}L${U(Q)} ${U(Z-Y*0.1)}L${U(Q+H)} ${U(Z-Y)}M${U(Q)} ${U(Z-Y*0.1)}Q${U(Q-H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z+Y*0.45)}Q${U(Q+H*0.5)} ${U(Z+Y*0.4)} ${U(Q)} ${U(Z-Y*0.1)}`);case"ʃ":return G(`M${U(Q+H*0.9)} ${U(Z-Y*1.9)}Q${U(Q)} ${U(Z-Y*2.2)} ${U(Q)} ${U(Z-Y)}L${U(Q)} ${U(Z+Y*0.3)}Q${U(Q)} ${U(Z+Y*0.95)} ${U(Q-H*0.9)} ${U(Z+Y*0.7)}`);case"θ":return G(`M${U(Q+H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q-H)} ${U(Z-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q+H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y)}L${U(Q+H)} ${U(Z-Y)}`);case"ŋ":return G(`M${U(Q-H)} ${U(Z)}L${U(Q-H)} ${U(Z-Y)}M${U(Q-H)} ${U(Z-Y*0.6)}Q${U(Q-H*0.2)} ${U(Z-Y*1.1)} ${U(Q+H*0.6)} ${U(Z-Y*0.9)}Q${U(Q+H)} ${U(Z-Y*0.75)} ${U(Q+H)} ${U(Z-Y*0.4)}L${U(Q+H)} ${U(Z+Y*0.4)}Q${U(Q+H)} ${U(Z+Y*0.85)} ${U(Q+H*0.3)} ${U(Z+Y*0.8)}`);case"ə":return G(`M${U(Q-H)} ${U(N)}L${U(Q+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 1 ${U(Q-H*0.75)} ${U(Z-Y*0.85)}`);case"ɐ":return D("a",O);case"ɔ":return D("c",V);case"ɯ":return D("m",O);case"ɨ":return D("i"),G(`M${U(Q-H*0.8)} ${U(N)}L${U(Q+H*0.8)} ${U(N)}`);case"ø":return D("o"),G(`M${U(Q-H*1.1)} ${U(Z+Y*0.1)}L${U(Q+H*1.1)} ${U(Z-Y*1.1)}`);case"æ":return D("æ");case"œ":return D("œ");default:return D(K)}}var JY=new H8,RQ=new x;class L7 extends KQ{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let J=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],Q=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],Z=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(Z),this.setAttribute("position",new d9(J,3)),this.setAttribute("uv",new d9(Q,2))}applyMatrix4(J){let Q=this.attributes.instanceStart,Z=this.attributes.instanceEnd;if(Q!==void 0)Q.applyMatrix4(J),Z.applyMatrix4(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new w8(Q,6,1);return this.setAttribute("instanceStart",new h9(Z,3,0)),this.setAttribute("instanceEnd",new h9(Z,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let Z=new w8(Q,6,1);return this.setAttribute("instanceColorStart",new h9(Z,3,0)),this.setAttribute("instanceColorEnd",new h9(Z,3,3)),this}fromWireframeGeometry(J){return this.setPositions(J.attributes.position.array),this}fromEdgesGeometry(J){return this.setPositions(J.attributes.position.array),this}fromMesh(J){return this.fromWireframeGeometry(new e6(J.geometry)),this}fromLineSegments(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new H8;let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0)this.boundingBox.setFromBufferAttribute(J),JY.setFromBufferAttribute(Q),this.boundingBox.union(JY)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new o8;if(this.boundingBox===null)this.computeBoundingBox();let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0){let Z=this.boundingSphere.center;this.boundingBox.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)RQ.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(RQ)),RQ.fromBufferAttribute(Q,$),K=Math.max(K,Z.distanceToSquared(RQ));if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}G0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new h0},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};u9.line={uniforms:s7.merge([G0.common,G0.fog,G0.line]),vertexShader:`
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
		`};class Q6 extends a9{constructor(J){super({type:"LineMaterial",uniforms:s7.clone(u9.line.uniforms),vertexShader:u9.line.vertexShader,fragmentShader:u9.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(J)}get color(){return this.uniforms.diffuse.value}set color(J){this.uniforms.diffuse.value=J}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(J){if(J===!0!==this.worldUnits)this.needsUpdate=!0;if(J===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(J){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=J}get dashed(){return"USE_DASH"in this.defines}set dashed(J){if(J===!0!==this.dashed)this.needsUpdate=!0;if(J===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(J){this.uniforms.dashScale.value=J}get dashSize(){return this.uniforms.dashSize.value}set dashSize(J){this.uniforms.dashSize.value=J}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(J){this.uniforms.dashOffset.value=J}get gapSize(){return this.uniforms.gapSize.value}set gapSize(J){this.uniforms.gapSize.value=J}get opacity(){return this.uniforms.opacity.value}set opacity(J){if(!this.uniforms)return;this.uniforms.opacity.value=J}get resolution(){return this.uniforms.resolution.value}set resolution(J){this.uniforms.resolution.value.copy(J)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(J){if(!this.defines)return;if(J===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(J===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}var sK=new W9,QY=new x,ZY=new x,T9=new W9,w9=new W9,j8=new W9,iK=new x,oK=new R9,S9=new $Q,KY=new x,MQ=new H8,LQ=new o8,v8=new W9,b8,hJ;function $Y(J,Q,Z){return v8.set(0,0,-Q,1).applyMatrix4(J.projectionMatrix),v8.multiplyScalar(1/v8.w),v8.x=hJ/Z.width,v8.y=hJ/Z.height,v8.applyMatrix4(J.projectionMatrixInverse),v8.multiplyScalar(1/v8.w),Math.abs(Math.max(v8.x,v8.y))}function yq(J,Q){let{matrixWorld:Z,geometry:K}=J,$=K.attributes.instanceStart,W=K.attributes.instanceEnd,X=Math.min(K.instanceCount,$.count);for(let Y=0,H=X;Y<H;Y++){S9.start.fromBufferAttribute($,Y),S9.end.fromBufferAttribute(W,Y),S9.applyMatrix4(Z);let N=new x,q=new x;if(b8.distanceSqToSegment(S9.start,S9.end,q,N),q.distanceTo(N)<hJ*0.5)Q.push({point:q,pointOnLine:N,distance:b8.origin.distanceTo(q),object:J,face:null,faceIndex:Y,uv:null,uv1:null})}}function hq(J,Q,Z){let K=Q.projectionMatrix,W=J.material.resolution,X=J.matrixWorld,Y=J.geometry,H=Y.attributes.instanceStart,N=Y.attributes.instanceEnd,q=Math.min(Y.instanceCount,H.count),U=-Q.near;b8.at(1,j8),j8.w=1,j8.applyMatrix4(Q.matrixWorldInverse),j8.applyMatrix4(K),j8.multiplyScalar(1/j8.w),j8.x*=W.x/2,j8.y*=W.y/2,j8.z=0,iK.copy(j8),oK.multiplyMatrices(Q.matrixWorldInverse,X);for(let G=0,D=q;G<D;G++){if(T9.fromBufferAttribute(H,G),w9.fromBufferAttribute(N,G),T9.w=1,w9.w=1,T9.applyMatrix4(oK),w9.applyMatrix4(oK),T9.z>U&&w9.z>U)continue;if(T9.z>U){let _=T9.z-w9.z,I=(T9.z-U)/_;T9.lerp(w9,I)}else if(w9.z>U){let _=w9.z-T9.z,I=(w9.z-U)/_;w9.lerp(T9,I)}T9.applyMatrix4(K),w9.applyMatrix4(K),T9.multiplyScalar(1/T9.w),w9.multiplyScalar(1/w9.w),T9.x*=W.x/2,T9.y*=W.y/2,w9.x*=W.x/2,w9.y*=W.y/2,S9.start.copy(T9),S9.start.z=0,S9.end.copy(w9),S9.end.z=0;let V=S9.closestPointToPointParameter(iK,!0);S9.at(V,KY);let E=m7.lerp(T9.z,w9.z,V),F=E>=-1&&E<=1,C=iK.distanceTo(KY)<hJ*0.5;if(F&&C){S9.start.fromBufferAttribute(H,G),S9.end.fromBufferAttribute(N,G),S9.start.applyMatrix4(X),S9.end.applyMatrix4(X);let _=new x,I=new x;b8.distanceSqToSegment(S9.start,S9.end,I,_),Z.push({point:I,pointOnLine:_,distance:b8.origin.distanceTo(I),object:J,face:null,faceIndex:G,uv:null,uv1:null})}}}class aK extends Q8{constructor(J=new L7,Q=new Q6({color:Math.random()*16777215})){super(J,Q);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let J=this.geometry,Q=J.attributes.instanceStart,Z=J.attributes.instanceEnd,K=new Float32Array(2*Q.count);for(let W=0,X=0,Y=Q.count;W<Y;W++,X+=2)QY.fromBufferAttribute(Q,W),ZY.fromBufferAttribute(Z,W),K[X]=X===0?0:K[X-1],K[X+1]=K[X]+QY.distanceTo(ZY);let $=new w8(K,2,1);return J.setAttribute("instanceDistanceStart",new h9($,1,0)),J.setAttribute("instanceDistanceEnd",new h9($,1,1)),this}raycast(J,Q){let Z=this.material.worldUnits,K=J.camera;if(K===null&&!Z)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');if(Z===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let $=J.params.Line2!==void 0?J.params.Line2.threshold||0:0;b8=J.ray;let W=this.matrixWorld,X=this.geometry,Y=this.material;if(hJ=Y.linewidth+$,X.boundingSphere===null)X.computeBoundingSphere();LQ.copy(X.boundingSphere).applyMatrix4(W);let H;if(Z)H=hJ*0.5;else{let q=Math.max(K.near,LQ.distanceToPoint(b8.origin));H=$Y(K,q,Y.resolution)}if(LQ.radius+=H,b8.intersectsSphere(LQ)===!1)return;if(X.boundingBox===null)X.computeBoundingBox();MQ.copy(X.boundingBox).applyMatrix4(W);let N;if(Z)N=hJ*0.5;else{let q=Math.max(K.near,MQ.distanceToPoint(b8.origin));N=$Y(K,q,Y.resolution)}if(MQ.expandByScalar(N),b8.intersectsBox(MQ)===!1)return;if(Z)yq(this,Q);else hq(this,K,Q)}onBeforeRender(J){let Q=this.material.uniforms;if(Q&&Q.resolution)J.getViewport(sK),this.material.uniforms.resolution.value.set(sK.z,sK.w)}}var IQ=[0.6,0.85,1.05,1.3,1.6,2.1];class tK{a=new Float32Array(768);n=0;reset(){return this.n=0,this}p(J,Q,Z){if(3*this.n+3>this.a.length){let $=new Float32Array(this.a.length*2);$.set(this.a),this.a=$}let K=3*this.n++;return this.a[K]=J,this.a[K+1]=Q,this.a[K+2]=Z,this}}class XY{material;mesh;geo=new L7;pos=new Float32Array(0);col=new Float32Array(0);pb=null;cb=null;cap=0;n=0;constructor(J){this.material=J;this.mesh=new aK(this.geo,J),this.mesh.frustumCulled=!1,this.grow(2048)}grow(J){let Q=new Float32Array(J*6),Z=new Float32Array(J*6);Q.set(this.pos.subarray(0,this.n*6)),Z.set(this.col.subarray(0,this.n*6)),this.pos=Q,this.col=Z,this.cap=J,this.geo.dispose(),this.geo=new L7;let K=this.pb=new w8(Q,6,1).setUsage(u6),$=this.cb=new w8(Z,6,1).setUsage(u6);this.geo.setAttribute("instanceStart",new h9(K,3,0)),this.geo.setAttribute("instanceEnd",new h9(K,3,3)),this.geo.setAttribute("instanceColorStart",new h9($,3,0)),this.geo.setAttribute("instanceColorEnd",new h9($,3,3)),this.mesh.geometry=this.geo}seg(J,Q,Z,K,$,W,X,Y,H){if(this.n>=this.cap)this.grow(this.cap*2);let N=this.n++*6,q=this.pos,U=this.col;q[N]=J,q[N+1]=Q,q[N+2]=Z,q[N+3]=K,q[N+4]=$,q[N+5]=W,U[N]=U[N+3]=X,U[N+1]=U[N+4]=Y,U[N+2]=U[N+5]=H}commit(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0;for(let J of[this.pb,this.cb])J.clearUpdateRanges(),J.addUpdateRange(0,this.n*6),J.needsUpdate=!0}dispose(){this.geo.dispose(),this.material.dispose()}}var WY=new Map;function rK(J){let Q=WY.get(J);if(!Q){let Z=parseInt(J.slice(1),16);Q=[(Z>>16&255)/255,(Z>>8&255)/255,(Z&255)/255],WY.set(J,Q)}return Q}class eK{group=new HJ;batches;constructor(){this.batches=IQ.map((J)=>{let Q=new Q6({linewidth:J,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});Q.blending=T6,Q.blendEquation=w6,Q.fog=!0;let Z=new XY(Q);return this.group.add(Z.mesh),Z})}setResolution(J,Q){for(let Z of this.batches)Z.material.resolution.set(J,Q)}begin(){for(let J of this.batches)J.n=0}end(){for(let J of this.batches)J.commit()}batch(J){let Q=0;for(let Z=1;Z<IQ.length;Z++)if(Math.abs(IQ[Z]-J)<Math.abs(IQ[Q]-J))Q=Z;return this.batches[Q]}line(J,Q,Z,K,$={}){if(Q<2)return;let W=$.alpha??1;if(this.strokes(J,Q,rK(Z),W,this.batch(K),$.close??!1),$.hot)this.strokes(J,Q,rK(EQ(Z)),W,this.batch(K*0.42),$.close??!1)}poly(J,Q,Z,K={}){this.line(J.a,J.n,Q,Z,K)}seg(J,Q,Z,K,$,W,X,Y,H=1){let[N,q,U]=rK(X);this.batch(Y).seg(J,Q,Z,K,$,W,N*H,q*H,U*H)}strokes(J,Q,[Z,K,$],W,X,Y){Z*=W,K*=W,$*=W;for(let H=0;H<Q-1;H++){let N=3*H;X.seg(J[N],J[N+1],J[N+2],J[N+3],J[N+4],J[N+5],Z,K,$)}if(Y){let H=3*(Q-1);X.seg(J[H],J[H+1],J[H+2],J[0],J[1],J[2],Z,K,$)}}dispose(){for(let J of this.batches)J.dispose()}}var Q$={x0:-7.5,x1:10.25,y0:-4.55,y1:19.9};function Z$(J,Q){let Z=J.tract;return-Math.max(-0.2,Math.min(3,Q))*Z.scale/aX(Z.P(-2.5,10.5),Z.P(6.95,7.75))}function K$(J,Q){let Z=J.tract,K=Z.P(-2.5,10.5),$=Z$(J,Q.jaw);return(W,X)=>OQ(Z.P(W,X),K,$)}function J$(J,Q,Z,K=0,$=40){let W=Math.cos(-K),X=Math.sin(-K),Y=[];for(let H=0;H<=$;H++){let N=H/$*Math.PI*2,q=Math.cos(N)*Q,U=Math.sin(N)*Z;Y.push({x:J.x+q*W-U*X,y:J.y+q*X+U*W})}return Y}function fq(J,Q,Z){let K=Math.min(J.x,Q.x),$=Math.max(J.x,Q.x),W=Math.min(J.y,Q.y),X=Math.max(J.y,Q.y),Y=Math.min(Z,($-K)/2,(X-W)/2),H=[],N=(q,U,G)=>{for(let D=0;D<=6;D++){let O=G+D/6*(Math.PI/2);H.push({x:q+Math.cos(O)*Y,y:U+Math.sin(O)*Y})}};return N($-Y,X-Y,0),N(K+Y,X-Y,Math.PI/2),N(K+Y,W+Y,Math.PI),N($-Y,W+Y,3*Math.PI/2),H.push(H[0]),H}var VQ=(J)=>-1.2-0.025*J;function $$(J){let Q=J.tract.scale,Z=J.bodyParams.pharynx;return(K,$)=>({x:K*Q,y:($<7?7-(7-$)*Z:$)*Q})}function Z6(J,Q,Z){let K=J.tract,$=(B,m)=>K.P(B,m),W=K$(J,Z),X=K.scale,Y=Z.larynx*X,H=$$(J),N=Q.upperLip.slice(7),q=Q.lowerLip.slice(7),U=L8([H(2.3,-4.6),H(2.38,-1.5),H(2.52,0.4),H(3,1.7),W(5.3,3),W(7.25,3.35),W(7.95,4.6),W(7.55,5.7)],4),G=L8([N[N.length-1],H(7.05,10.6),H(7.75,10.78),H(8.75,11.05),H(9.25,11.65),H(8.95,12.6),H(8.35,13.9),H(7.7,15),H(7.95,16.1),H(7.9,18.1),H(6.9,20.5)],4),D=L8([H(6.9,20.5),H(3,22.9),H(-2.2,22.7),H(-6.9,19.6),H(-8.7,15.4),H(-8.3,11.9),H(-7.4,8.9),H(-6.8,4.8),H(-6.6,0),H(-6.6,-4.6)],4),O=[];for(let B=0;B<9;B++){let m=-4.4+B*1.75;if(m>10.5)break;let j=VQ(m)-2.25;O.push(fq($(j,m+1.4),$(j+1.6,m),0.32*X))}let E=[[1,9.6],[1.8,9.92],[2.7,10.18],[3.6,10.3],[4.4,10.25],[5.1,10.05],[5.7,9.72],[6.15,9.36],[6.55,9.15],[7,9.6]].map(([B,m])=>K.P(B,m)),F=Q.jawBone.filter((B)=>B.x>0.8*X),C=Q.glottis,_={x:$(1.6,0).x,y:$(0,2.9).y+0.6*Y},I=[];for(let B=0;B<4;B++){let m=C.y-(0.9+B*1)*X;if(m<-4.4)break;I.push([{x:C.x+0.8*X,y:m},{x:C.x+1.05*X,y:m-0.05},{x:C.x+1.05*X,y:m-0.5*X},{x:C.x+0.82*X,y:m-0.45*X},{x:C.x+0.8*X,y:m}])}let A=W(6,5.45),k=Q.tongueCenter,P=[];for(let B=0;B<=16;B++){let m=Math.PI*(0.18+0.9*B/16),j={x:k.x+Math.cos(m)*Q.tongueRadius*1.25,y:k.y+Math.sin(m)*Q.tongueRadius*1.25},y={x:k.x,y:(k.y+A.y)/2},d=[];for(let T=0;T<=12;T++){let S=T/12;d.push({x:(1-S)*(1-S)*A.x+2*(1-S)*S*y.x+S*S*j.x,y:(1-S)*(1-S)*A.y+2*(1-S)*S*y.y+S*S*j.y})}P.push(d)}let L={x:VQ(C.y/X)*X,y:C.y};return{f:Q,model:J,skinLower:[...U,...q.slice().reverse()],skinUpper:[...N,...G.slice(1),...D.slice(1)],inset:L8([H(1.85,-4.6),H(1.9,-0.8),H(2.3,1.6),W(5.2,3.6),W(6.9,3.9),W(7.4,4.9),W(7.2,5.9),H(6.6,9.9),H(7.6,10.9),H(8.55,11.5),H(8.1,13.4),H(7.25,15.2),H(7.45,18),H(3,22.2),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.6,12),H(-6.7,8.7),H(-6.1,4.6),H(-6,-4.6)],3),skull:L8([H(7,16.2),H(7.3,18.5),H(6,20.7),H(3,22.1),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.4,12.6),H(-4.6,12.2),H(-2.2,13.3),H(1,13.7),H(4.1,14.1),H(6.2,14.9)],4),brain:L8([H(6.55,16.3),H(6.75,18.4),H(5.5,20.1),H(2.8,21.4),H(-1.9,21.3),H(-5.8,18.8),H(-7.1,15.4),H(-6.7,13.1),H(-4.4,12.8),H(-2.1,13.9),H(1,14.3),H(4,14.7),H(5.9,15.4)],4),sulcus:L8([H(5.4,19.4),H(2.4,20.5),H(-1.4,20.4),H(-4.8,18.4)],4),eye:J$(H(6.5,15.4),1.1*X,0.95*X),eyeC:H(6.5,15.4),vertebrae:O,cords:[[$(-5.3,-4.6),$(-4.5,-4.6),$(-4.5,11.8),$(-5.1,12.4),$(-5.6,11.6)],[$(-5.1,-4.6),$(-4.7,-4.6),$(-4.72,11.4),$(-5.15,11.6)]],nasal:L8([H(0.3,11.2),H(1.1,10.25),H(2.7,10.75),H(4.6,10.85),H(6.4,10.65),H(7.6,10.85),H(8.45,11.3),H(8,12.2),H(6.7,13.4),H(4.4,13.9),H(1.8,13.6),H(0.2,12.6)],4),turbinates:[[3,11.45,2.1,0.32],[3.5,12.45,1.9,0.3],[4,13.3,1.45,0.22]].map(([B,m,j,y])=>J$(H(B,m),j*X,y*X,-0.04)),palOral:E,palNasal:E.map((B)=>({x:B.x,y:B.y+0.55*X})),jawLower:F,jawUpper:F.map((B)=>({x:B.x,y:B.y+0.75*X})),hyoid:J$(_,0.5*X,0.28*X,0.3,28),thyroid:[{x:C.x+0.75*X,y:C.y-1.6*X},{x:C.x+1.75*X,y:C.y-0.6*X},{x:C.x+1.95*X,y:C.y+1.2*X},{x:C.x+1.45*X,y:C.y+1.9*X},{x:C.x+1.15*X,y:C.y+1.1*X},{x:C.x+1.3*X,y:C.y-0.4*X},{x:C.x+0.75*X,y:C.y-1.6*X}],trachea:[[{x:C.x-0.65*X,y:C.y},{x:C.x-0.75*X,y:-4.8}],[{x:C.x+0.75*X,y:C.y},{x:C.x+0.95*X,y:-4.8}]],rings:I,outerWall:Q.outer.filter((B)=>B.y>C.y||B.x>0),glottisWall:[L,Q.outer.find((B)=>B.y>C.y)??L],fibres:P,folds:[[{x:C.x-0.62*X,y:C.y+0.05},{x:C.x-0.1,y:C.y+0.12*X},{x:C.x-0.62*X,y:C.y+0.32*X},{x:C.x-0.62*X,y:C.y+0.05}],[{x:C.x+0.72*X,y:C.y+0.05},{x:C.x+0.12,y:C.y+0.12*X},{x:C.x+0.72*X,y:C.y+0.32*X},{x:C.x+0.72*X,y:C.y+0.05}]],lowerTeeth:[...Q.lowerTeeth,W(6.8,6),W(6.4,6.2),Q.lowerTeeth[0]]}}class K6{pitch=0;yaw=0;toPitch=0;toYaw=0;next=2;update(J,Q){if(J>=this.next){let K=Math.random()<0.35;this.toPitch=K?0:(Math.random()*2-1)*0.55,this.toYaw=K?0:(Math.random()*2-1)*0.9,this.next=J+1.2+Math.random()*3.5}let Z=1-Math.exp(-Q*28);this.pitch+=(this.toPitch-this.pitch)*Z,this.yaw+=(this.toYaw-this.yaw)*Z}}function YY(J,Q,Z,K,$){if(Q.compact)return xq(J,Q,Z,K,$);let{w:W,h:X}=Q,Y=W-18,H=26;if(Z.length>=3)["F1","F2","F3"].forEach((O,V)=>{_9(J,O,Y-78,H+V*22,{size:12,color:e.amber,ls:0.12,alpha:0.75}),_9(J,String(Math.round(Z[V])),Y,H+V*22,{size:15,color:e.amber,align:"right",ls:0.08})}),_9(J,"HZ",Y,H+64,{size:10,color:e.amber,align:"right",alpha:0.6}),H+=110;for(let O of K)_9(J,O,Y,H,{size:10,color:qQ.secondary,align:"right",ls:0.14}),H+=16;if(!$.length)return;let{slotX:N,slotY:q}=Q,U=Math.max(60,(W-14-N)/2),G=Math.max(56,Math.min(112,(X-8-q)/2)),D=Math.max(22,Math.min(44,G*0.4,U*0.32));$.slice(0,4).forEach((O,V)=>{let E=N+V%2*U,F=q+Math.floor(V/2)*G;J6(J,E+6,F+4,4,O.color),_9(J,O.label.toUpperCase(),E+16,F+8,{size:11,color:O.color,ls:0.2,alpha:0.85});let C=F+18+D*1.1;if(O.ipa)nK(J,E+D*0.6,C,O.value,D*1.45,O.color);else _9(J,O.value.toUpperCase(),E,C,{size:O.value.length>3?D*0.82:D,color:O.color,weight:"m",ls:0.04});if(O.unit)_9(J,O.unit.toUpperCase(),O.ipa?E+D*1.5:E+(O.value.length>3?0:D*1.64),O.ipa||O.value.length<=3?C:C+18,{size:11,color:O.color,ls:0.16,alpha:0.7})})}function xq(J,Q,Z,K,$){let{w:W,h:X}=Q;if(Z.length>=3){let U=(W-24)/3;["F1","F2","F3"].forEach((G,D)=>{_9(J,G,12+D*U,18,{size:10,color:e.amber,ls:0.12,alpha:0.75}),_9(J,String(Math.round(Z[D])),12+D*U+26,18,{size:13,color:e.amber,ls:0.06})})}if(_9(J,K.slice(0,2).join("   "),12,36,{size:9,color:qQ.secondary,ls:0.12}),K.length>2)_9(J,K.slice(2).join("   "),12,50,{size:9,color:qQ.secondary,ls:0.12});let Y=$.slice(0,4);if(!Y.length)return;let H=(W-24)/Y.length,N=X-82,q=Math.max(16,Math.min(30,H*0.28));Y.forEach((U,G)=>{let D=12+G*H;J6(J,D+4,N,3,U.color),_9(J,U.label.toUpperCase(),D+12,N+3,{size:8,color:U.color,ls:0.14,alpha:0.85});let O=N+18+q;if(U.ipa)nK(J,D+q*0.5,O,U.value,q*1.4,U.color);else _9(J,U.value.toUpperCase(),D,O,{size:U.value.length>3?q*0.62:q,color:U.color,weight:"m",ls:0.02});if(U.unit)_9(J,U.unit.toUpperCase(),D,O+16,{size:8,color:U.color,ls:0.14,alpha:0.7})})}var BQ=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},W$=(J,Q,Z)=>Math.max(Q,Math.min(Z,J)),CQ=(J,Q,Z,K)=>J+(Q-J)*(1-Math.exp(-K/Z));class AQ{hz;damping;x=0;v=0;constructor(J,Q){this.hz=J;this.damping=Q}step(J,Q){let Z=2*Math.PI*this.hz,K=Math.max(1,Math.ceil(Q/0.008)),$=Q/K;for(let W=0;W<K;W++)this.v+=(Z*Z*(J-this.x)-2*this.damping*Z*this.v)*$,this.x+=this.v*$;return this.x}}function gq(J){let Q=J.t.pressureRms,Z=J.nPh+J.nOr-3;return Z>=J.nPh&&Z<Q.length?Q[Z]/980.665:0}class I7{puff=0;brow=0;lid=0;lookUp=0;content=0;nod=0;tilt=0;clock=0;cheeks=new AQ(6.5,0.32);nodSpring=new AQ(2.4,0.42);tiltSpring=new AQ(3.2,0.3);ref=NaN;fast=NaN;held=0;hold=0;nextBlink=1.5+Math.random()*2;blinkAt=-1;secondBlink=!1;lastStep=-1;update(J,Q){this.clock+=Q;let Z=J?.t,K=!!Z&&Z.voicing>0.45&&Z.gate>0.3&&Z.f0>30&&Z.outRms>0.004,$=J?BQ(1.5,7,gq(J)):0;this.puff=W$(this.cheeks.step($,Q),-0.35,1.25);let W=0,X=0;if(K){let D=Math.log2(Z.f0);if(!Number.isFinite(this.ref)||Math.abs(12*(D-this.ref))>14)this.ref=this.fast=D;if(this.ref=CQ(this.ref,D,5,Q),Math.abs(12*(D-this.fast))>2.5)this.fast=D,this.held=0;this.fast=CQ(this.fast,D,0.35,Q),this.held+=Q,W=12*(D-this.ref),X=12*(D-this.fast)}else this.held=0;let Y=(K?W$(W/6,-0.7,1):0)+0.3*this.content;this.brow=CQ(this.brow,Y,K?0.12:0.45,Q),this.lookUp=0.32*Math.max(0,this.brow);let H=K?0.92*BQ(0.9,1.9,this.held)*BQ(0.15,0.55,this.brow):0;if(this.hold=CQ(this.hold,H,H>this.hold?0.35:0.08,Q),this.clock>=this.nextBlink&&this.hold<0.2)this.blinkAt=this.clock,this.secondBlink=!this.secondBlink&&Math.random()<0.18,this.nextBlink=this.clock+(this.secondBlink?0.28:2+Math.random()*4.5);let N=(this.clock-this.blinkAt)/0.17,q=this.blinkAt>=0&&N<1?Math.sin(Math.PI*N)**0.7:0;this.lid=Math.max(q,this.hold,0.95*this.content);let U=J?.beatStep??-1;if(U>=0&&this.lastStep>=0&&U!==this.lastStep){let D=U<this.lastStep;if(D||Math.floor(U/4)!==Math.floor(this.lastStep/4))this.nodSpring.v-=D||Math.floor(U/16)!==Math.floor(this.lastStep/16)?1.3:0.8}this.lastStep=U,this.nod=this.nodSpring.step(0.13*this.brow,Q);let G=BQ(0.6,2,this.held)*0.07*Math.sin(this.clock*1.7);this.tilt=this.tiltSpring.step(G+0.05*W$(X,-1.5,1.5),Q)}}function zQ(J,Q,Z){let K=J.tract,$=K$(J,Z),W={x:(Q.upperLip[6].x+Q.lowerLip[6].x)/2+0.15,y:(Q.upperLip[6].y+Q.lowerLip[6].y)/2};return[{id:"tongue",pos:Q.tongueCenter,label:"Tongue body"},{id:"tip",pos:Q.tip,label:"Tongue tip"},{id:"jaw",pos:$(7.5,4.9),label:"Jaw"},{id:"lips",pos:W,label:"Lips"},{id:"velum",pos:Q.velum[Math.floor(Q.velum.length/2)],label:"Soft palate"},{id:"larynx",pos:{x:Q.glottis.x+1.2*K.scale,y:Q.glottis.y},label:"Larynx"}]}var pq=[0.09,0.06,0.03],y8={x0:-9.4,x1:Q$.x1,y0:Q$.y0,y1:23.5},X$=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)};function mq(J,Q,Z){let K=1.22*Q,$=1.08*Q,W=(O,V)=>{let E=[];for(let F=0;F<=14;F++){let C=O+(V-O)*F/14;E.push({x:J.x+K*Math.cos(C),y:J.y+$*Math.sin(C)})}return E},X=Math.PI/180,Y=Math.max(0,Z.brow),H=30*X+14*X*Y,N=-32*X,q=H+(N-H)*Z.lid,U=[],G=0.42*Q*Z.brow,D=0.3*Q*Math.max(0,-Z.brow);for(let O=0;O<=12;O++){let V=-1+O/6,E=(1+V)/2;U.push({x:J.x+0.1*Q+0.9*Q*V,y:J.y+1.4*Q+0.2*Q*(1-V*V)+G-D*E})}return[{pts:W(100*X,q),w:1.15,alpha:0.9},{pts:W(-78*X,N),w:1,alpha:0.75},{pts:U,w:1.4,alpha:0.85}]}function dq(J,Q,Z){if(Math.abs(Z)<0.01)return null;let K={x:(J.upperLip[6].x+J.lowerLip[6].x)/2,y:(J.upperLip[6].y+J.lowerLip[6].y)/2},$=0.6*Q*Z;return(W)=>{let X=Math.abs(W.y-K.y)/(2.6*Q);if(X>=1)return W;let Y=(1-X*X)**2*X$(0.03,0.45,X)*X$(K.x-1.2*Q,K.x-0.5*Q,W.x);return Y?{x:W.x+$*Y,y:W.y}:W}}class uq{particles=[];scale=20;ox=0;oy=0;w=0;h=0;compact=!1;sparkSeed=1;geo=null;echoes=[];clock=0;lastEcho=-1;gaze=new K6;face=new I7;constructor(){for(let J=0;J<170;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN})}resize(J,Q){this.w=J,this.h=Q,this.compact=J<560;let Z=12,K=this.compact?62:10,$=this.compact?92:8;this.scale=Math.max(1,Math.min((J-2*Z)/(y8.x1-y8.x0),(Q-K-$)/(y8.y1-y8.y0)));let W=J-2*Z-(y8.x1-y8.x0)*this.scale;this.ox=Z+(this.compact?W/2:Math.min(W/2,Math.max(0,W-220)))-y8.x0*this.scale,this.oy=K+Math.max(0,(Q-K-$-(y8.y1-y8.y0)*this.scale)/2)+y8.y1*this.scale;for(let X of this.particles)X.px=NaN}X(J){return this.ox+J.x*this.scale}Y(J){return this.oy-J.y*this.scale}P(J){return[this.ox+J.x*this.scale,this.oy-J.y*this.scale]}toBody(J,Q){return{x:(J-this.ox)/this.scale,y:(this.oy-Q)/this.scale}}get pxPerCm(){return this.scale}handles(J,Q,Z){return zQ(J,Q,Z)}geometry(J,Q,Z){if(this.geo&&this.geo.f===Q&&this.geo.model===J)return this.geo;return this.geo=Z6(J,Q,Z)}lens(J,Q,Z){let K=this.gaze;K.update(this.clock,Z);let $=0.85*Q*Math.cos(K.yaw),W=K.pitch+this.face.lookUp,X=Math.cos(W),Y=Math.sin(W),H={x:J.x+$*X,y:J.y+$*Y},N=(0.18+0.2*Math.abs(Math.sin(K.yaw)))*Q,q=0.42*Q,U=[];for(let G=0;G<=20;G++){let D=G/20*Math.PI*2,O=Math.cos(D)*N,V=Math.sin(D)*q;U.push({x:H.x+O*X-V*Y,y:H.y+O*Y+V*X})}return U}draw(J,Q,Z,K,$,W,X){this.clock+=X.dt;let Y=this.geometry(Q,Z,K),H=(E)=>E.map((F)=>this.P(F)),N=(E,F,C,_={})=>bJ(J,H(E),F,C,_);N(Y.inset,e.blueDim,0.9,{alpha:0.9}),N(Y.skull,e.blueDim,0.9,{close:!0}),N(Y.brain,e.blueMid,1.1,{close:!0}),N(Y.sulcus,e.blueDim,0.9),N(Y.eye,e.blueMid,1.1);let q=Q.tract.scale,U=dq(Z,q,this.face.puff),G=(E)=>U?E.map(U):E;N(this.lens(Y.eyeC,q,X.dt),e.blueDim,0.9,{alpha:1-X$(0.45,0.9,this.face.lid)});for(let E of mq(Y.eyeC,q,this.face))N(E.pts,e.blue,E.w,{alpha:E.alpha});for(let E of Y.vertebrae)N(E,e.blueDim,1);N(Y.cords[0],e.blueDim,0.8,{alpha:0.8}),N(Y.cords[1],e.blueDim,0.8,{alpha:0.6}),N(Y.nasal,e.blueMid,1,{close:!0});for(let E of Y.turbinates)N(E,e.blueDim,0.9);N(Y.palOral,e.blueMid,1.1),N(Y.palNasal,e.blueMid,1.1),N(Y.hyoid,e.blueDim,1),N(Y.thyroid,e.blueDim,1);for(let E of Y.trachea)N(E,e.blueMid,1);for(let E of Y.rings)N(E,e.blueDim,0.9);if(W.pressure&&$)this.drawPressure(J,Q,Z,$);else if(W.grid)for(let E of Z.grid)e7(J,this.X(E.inner),this.Y(E.inner),this.X(E.outer),this.Y(E.outer),e.blueDim,0.9,{alpha:0.7});if(W.particles&&$)this.drawParticles(J,Q,Z,$,X.dt);if($&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock,this.echoes.push({t:this.clock,tongue:Z.tongue.slice(),jaw:Y.jawLower,upperLip:yJ(G(Z.upperLip).map((E)=>[E.x,E.y])),lowerLip:yJ(G(Z.lowerLip).map((E)=>[E.x,E.y]))});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if($)pq.forEach((E,F)=>{let C=this.nearestEcho(this.clock-E);if(!C)return;let _=0.1+0.07*F;N(C.tongue,e.green,1,{alpha:_}),N(C.jaw,e.red,1,{alpha:_*0.9});let I=(A)=>bJ(J,A.map(([k,P])=>[this.ox+k*this.scale,this.oy-P*this.scale]),e.pink,1,{alpha:_*0.9});I(C.upperLip),I(C.lowerLip)});N(G(Y.skinLower),e.blue,1.7,{hot:!0}),N(G(Y.skinUpper),e.blue,1.7,{hot:!0}),N(Y.outerWall,e.blue,1.4,{hot:!0}),N(Z.inner,e.blue,1.3,{alpha:0.9}),N(Y.glottisWall,e.blue,1.2,{alpha:0.8}),N(Z.epiglottis.slice(0,3),e.blue,2.2,{alpha:0.85}),N(Z.upperTeeth,e.blueMid,1.1,{close:!0}),N(Y.lowerTeeth,e.blueMid,1.1);for(let E of Y.folds)N(E,e.blue,1);let D=H(Z.tongue);J.save();let O=new Path2D;D.forEach(([E,F],C)=>C?O.lineTo(E,F):O.moveTo(E,F)),O.closePath(),J.clip(O);for(let E of Y.fibres)N(E,e.green,0.8,{alpha:0.32});J.restore(),bJ(J,D,e.green,1.6,{hot:!0}),N(Y.jawLower,e.red,1.5,{hot:!0}),N(Y.jawUpper,e.red,1,{alpha:0.45});let V=(E,F)=>yJ(E.map((C)=>this.P(C)),F);if(bJ(J,V(G(Z.upperLip),2),e.pink,1.5,{hot:!0}),bJ(J,V(G(Z.lowerLip),2),e.pink,1.5,{hot:!0}),bJ(J,V(Z.velum,3),e.white,1.25,{alpha:0.92}),$)this.drawTurbulence(J,Q,Z,$);if(W.calipers)this.drawCalipers(J,Z);this.drawHandles(J,Q,Z,K,X.hover,X.drag),this.drawReadouts(J,X.formants,X.info,X.slots)}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}gridPoint(J,Q,Z){let K=J.grid;if(K.length<2)return null;if(Q<=K[0].s){let G=Math.max(0,Q/Math.max(0.01,K[0].s)),D=J.glottis,O={x:(K[0].inner.x+K[0].outer.x)/2,y:(K[0].inner.y+K[0].outer.y)/2},V=0.35;return{x:D.x+(O.x-D.x)*G+Z*0.35*0.5,y:D.y+(O.y-D.y)*G}}let $=0,W=K.length-1;if(Q>=K[W].s)return null;while(W-$>1){let G=$+W>>1;if(K[G].s<=Q)$=G;else W=G}let X=(Q-K[$].s)/Math.max(0.000001,K[W].s-K[$].s),Y=K[$].inner.x+(K[W].inner.x-K[$].inner.x)*X,H=K[$].inner.y+(K[W].inner.y-K[$].inner.y)*X,N=K[$].outer.x+(K[W].outer.x-K[$].outer.x)*X,q=K[$].outer.y+(K[W].outer.y-K[$].outer.y)*X,U=0.5+0.5*Z*0.82;return{x:Y+(N-Y)*U,y:H+(q-H)*U}}nodeValueAtS(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}drawPressure(J,Q,Z,K){let $=K.t,W=Q.nodeS($.phLen,$.orLen);if(W.length!==$.pressureRms.length)return;for(let X of Z.grid){let Y=Math.pow(DQ(this.nodeValueAtS($.pressureRms,W,X.s)),0.85);e7(J,this.X(X.inner),this.Y(X.inner),this.X(X.outer),this.Y(X.outer),FQ(Y),1.15,{alpha:0.35+0.65*Y})}}drawParticles(J,Q,Z,K,$){let W=K.t,X=Q.nodeS(W.phLen,W.orLen),Y=new Float32Array(W.phAreas.length+W.orAreas.length);Y.set(W.phAreas,0),Y.set(W.orAreas,W.phAreas.length);let H=Z.lipS,N=[new Path2D,new Path2D,new Path2D];for(let q of this.particles){let U=this.nodeValueAtS(W.flow,X,q.s),G=Math.max(0.05,this.nodeValueAtS(Y,X,q.s)),D=U/G,O=Math.sign(D)*2.2*Math.log1p(Math.abs(D)/30);if(q.s+=O*$,q.life-=$*0.25,q.s>H||q.s<0||q.life<=0||Math.abs(D)<3){if(!(Math.abs(D)<3&&q.life>0)){q.s=Math.random()*0.8,q.u=Math.random()*2-1,q.life=0.6+Math.random()*0.8,q.px=NaN;continue}}let V=this.gridPoint(Z,q.s,q.u);if(!V)continue;let E=this.X(V),F=this.Y(V);if(Number.isFinite(q.px)){let C=Math.min(2,Math.floor(Math.min(1,Math.abs(O)/6)*Math.min(1,q.life)*3));N[C].moveTo(q.px,q.py),N[C].lineTo(E,F)}q.px=E,q.py=F}N.forEach((q,U)=>M7(J,q,"#ffe2a8",1.1,{alpha:0.16+0.2*U}))}drawTurbulence(J,Q,Z,K){let $=K.t;if(!($.noiseLevel>1)||$.noiseNode<0)return;let W=Q.branchS($.noiseNode,$.phLen,$.orLen);if(W<0)return;let X=Math.min(1,Math.log10($.noiseLevel)/3.2);if(X<=0.05)return;let Y=this.sparkSeed=this.sparkSeed*16807%2147483647,H=()=>(Y=Y*16807%2147483647)/2147483647;for(let N=0;N<30;N++){let q=this.gridPoint(Z,W+0.2+H()*1.2,H()*2-1);if(!q)continue;J6(J,this.X(q),this.Y(q),0.6+H()*1.4,"#f4fbff",0.15+0.7*X*H())}}drawCalipers(J,Q){let Z=-1,K=1/0;for(let F=2;F<Q.grid.length-1;F++)if(Q.grid[F].area<K)K=Q.grid[F].area,Z=F;if(Z<0||K>=1.2)return;let $=Q.grid[Z],[W,X]=this.P($.inner),[Y,H]=this.P($.outer);e7(J,W,X,Y,H,e.white,1.4,{hot:!0});let N=-(H-X),q=Y-W,U=Math.hypot(N,q)||1;for(let[F,C]of[[W,X],[Y,H]])e7(J,F-N/U*4,C-q/U*4,F+N/U*4,C+q/U*4,e.white,1.2);let G=Q.grid[Q.grid.length-1],O=Math.max(this.P(G.inner)[0],this.P(G.outer)[0])-Math.max(W,Y)<1.5*this.pxPerCm,V=O?Math.min(W,Y)-10:Math.max(W,Y)+10,E=Math.min(X,H)-4;_9(J,K<=0.0005?"CLOSED":`${K.toFixed(2)} CM²`,V,E,{size:11,color:e.white,ls:0.12,align:O?"right":"left"})}drawHandles(J,Q,Z,K,$,W){let X={tongue:e.green,jaw:e.red,lips:e.pink,velum:e.white,tip:e.blueMid,larynx:e.blueMid},Y={tongue:8,jaw:7,lips:7,velum:6,tip:5,larynx:5};for(let H of this.handles(Q,Z,K)){let N=this.X(H.pos),q=this.Y(H.pos),U=H.id===W||H.id===$;if(eX(J,N,q,X[H.id],Y[H.id]+(U?2:0),U?1:0.9),U)tX(J,N,q,28,X[H.id],1,{alpha:0.75}),_9(J,H.label.toUpperCase(),N+32,q-18,{size:12,color:X[H.id],ls:0.18})}}drawReadouts(J,Q,Z,K){YY(J,{w:this.w,h:this.h,compact:this.compact,slotX:this.X({x:3.35,y:0}),slotY:this.Y({x:0,y:2.05})},Q,Z,K)}}var h8=(J,Q,Z)=>{let K=Math.max(0,Math.min(1,(Z-J)/(Q-J)));return K*K*(3-2*K)},HY=(J)=>Math.max(0,Math.min(1,J));function r8(J,Q){if(Q<=J[0][0])return J[0][1];for(let Z=1;Z<J.length;Z++)if(Q<=J[Z][0]){let[K,$]=J[Z-1],[W,X]=J[Z];return $+(X-$)*(Q-K)/(W-K)}return J[J.length-1][1]}var lq=[[-4.6,5.3],[0,5.4],[2.5,5.5],[4.5,5.25],[6.5,5.5],[8.5,6.1],[10.5,6.6],[12.5,7],[15,7.3],[17.5,7.65],[19.5,7.4],[21,6.5],[22.2,4.6],[23,1]],cq=[[3.4,5.9],[4.6,6.2],[5.7,6.15],[6.5,6.2],[8,6.35],[9.5,6.35],[10.6,6.55],[11.6,6.75],[12.6,6.9],[13.9,7.15],[15,7.45],[16.1,7.95]],nq=[[3.4,2],[4.6,2.2],[5.7,2.4],[6.5,2.6],[10.6,1.7],[11,1.75],[11.65,1.2],[12.6,0.95],[13.9,0.75],[15,0.9],[16.1,1.6]],sq=[[-4.6,0.5],[3,0.5],[6,0.42],[12,0.42],[16,0.45],[23,0.45]],iq=[[-3,8.5],[-1.6,8],[-0.6,6.4],[1.2,4.6],[3.5,3.6],[5.3,3],[7.3,3.3],[8.6,4.4]],oq=[[6,-0.6],[7.4,-0.8],[9.6,-1.9],[10.6,-2.5],[12,-2.6]],aq=[[12.3,4],[13,5.6],[14.5,6.4],[16.5,6.9],[18.5,6.6],[20,5.4],[21,3.6],[21.45,0.5]],rq=[[0,1.5],[0.15,1.9],[0.35,2.35],[0.6,2.45],[0.8,2.2],[0.92,1.5],[1,0.55]],tq=[[0,1.3],[0.35,1.1],[0.7,0.9],[0.9,0.55],[1,0.25]],eq=[[0.85,1.05,0.7],[0.68,0.95,0.65],[0.78,1.1,0.8],[0.7,0.85,0.9],[0.68,0.8,0.9],[1,0.75,1.1],[0.92,0.7,1.05]],JE=[[0.54,0.9,0.6],[0.6,0.92,0.62],[0.7,1,0.75],[0.7,0.85,0.8],[0.72,0.8,0.85],[1.1,0.72,1.05],[1.05,0.7,1]],QE=3,fJ=2.2,EY=(J)=>Math.abs(J)<1?(1-J*J)**2:0;function PQ(J,Q,Z=!1){let K=Math.min(1,Math.abs(Q)/J.W),$=Math.pow(1-Math.pow(K,J.pf),1/J.pf);return J.xw+(J.Fs-J.xw)*$+(Z?0:J.E*EY(Q/J.wf))}function ZE(J,Q){let Z=Q>J.xw,K=Z?(Q-J.xw)/Math.max(0.000001,J.Fs-J.xw):(J.xw-Q)/Math.max(0.000001,J.xw-J.Bk),$=Z?J.pf:fJ;return J.W*Math.pow(Math.max(0,1-Math.pow(Math.min(1,K),$)),1/$)}function KE(J,Q,Z){Z.length=0;let K=12,$=10,W=16;for(let Y=0;Y<K;Y++){let H=Math.PI-Y/K*(Math.PI/2);Z.push(J.xw-(J.xw-J.Bk)*Math.pow(Math.abs(Math.cos(H)),2/fJ),J.W*Math.pow(Math.sin(H),2/fJ))}let X=Math.asin(Math.min(1,Math.pow(Q/J.W,J.pf/2)));for(let Y=0;Y<$;Y++){let H=Math.PI/2-Y/$*(Math.PI/2-X),N=J.W*Math.pow(Math.sin(H),2/J.pf);Z.push(J.xw+(J.Fs-J.xw)*Math.pow(Math.cos(H),2/J.pf)+J.E*EY(N/J.wf),N)}for(let Y=0;Y<=W;Y++){let H=Q*(1-Y/W);Z.push(PQ(J,H),H)}}class H${dy;rows=[];y0;y1;constructor(J,Q,Z){this.dy=Q;let K=1/0,$=-1/0;for(let W of J)K=Math.min(K,W.y),$=Math.max($,W.y);this.y0=K,this.y1=$;for(let W=K;W<=$;W+=Q){let X=-1/0,Y=1/0;for(let H=0;H<J.length-1;H++){let N=J[H],q=J[H+1];if(N.y>W===q.y>W)continue;let U=N.x+(q.x-N.x)*(W-N.y)/(q.y-N.y);X=Math.max(X,U),Y=Math.min(Y,U)}this.rows.push(X>Y?Z(W,X,Y):null)}}at(J){let Q=(J-this.y0)/this.dy,Z=Math.floor(Q);if(Z<0||Z>=this.rows.length-1)return null;let K=this.rows[Z],$=this.rows[Z+1];if(!K||!$)return K??$;let W=Q-Z,X=(Y,H)=>Y+(H-Y)*W;return{F:X(K.F,$.F),Bk:X(K.Bk,$.Bk),Fs:X(K.Fs,$.Fs),W:X(K.W,$.W),xw:X(K.xw,$.xw),E:X(K.E,$.E),wf:X(K.wf,$.wf),pf:X(K.pf,$.pf)}}}class EJ{lines=[];cur=[];p(J,Q,Z){return this.cur.push(J,Q,Z),this}end(J=!1){if(J&&this.cur.length>=3)this.cur.push(this.cur[0],this.cur[1],this.cur[2]);if(this.cur.length>=6)this.lines.push(new Float32Array(this.cur));this.cur=[]}ellipse(J,Q,Z,K=24,$=0,W=Math.PI*2){for(let X=0;X<=K;X++){let Y=$+(W-$)*X/K,H=Math.cos(Y),N=Math.sin(Y);this.p(J[0]+Q[0]*H+Z[0]*N,J[1]+Q[1]*H+Z[1]*N,J[2]+Q[2]*H+Z[2]*N)}this.end()}}function FY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=1-h8(7.6,9.1,X),H=r8(iq,$),N=h8(H-1.5,H+0.15,X),q=r8(oq,X),U=h8(q-0.7,q+0.9,$);return Y*N*U}var $E=1.7,WE=0.55;function DY(J,Q,Z,K){let $=Z/J,W=K/J,X=W>=7?W:7-(7-W)/Q,Y=(($-5.2)/2.3)**2+((X-8.3)/2.4)**2;return Y<1?(1-Y)**2:0}function UY(J,Q,Z,K){if(Q===0||K===0)return[0,0];let $=Q*K*J;return[WE*$,Math.sign(Z)*$E*$*h8(0.4*J,2.6*J,Math.abs(Z))]}function XE(J,Q,Z){let K=Q.length;if(Q.every(Boolean))return[Z?[...J,J[0],J[1],J[2]]:J];let $=[],W=Z?Q.indexOf(!1)+1:0,X=[];for(let Y=0;Y<K;Y++){let H=(W+Y)%K;if(Q[H])X.push(J[3*H],J[3*H+1],J[3*H+2]);else{if(X.length>=6)$.push(X);X=[]}}if(X.length>=6)$.push(X);return $}function YE(J,Q){let Z=[0];for(let X=1;X<J.length;X++)Z.push(Z[X-1]+Math.hypot(J[X].x-J[X-1].x,J[X].y-J[X-1].y));let K=Z[Z.length-1],$=[],W=0;for(let X=0;X<Q;X++){let Y=K*X/(Q-1);while(W<J.length-2&&Z[W+1]<Y)W++;let H=(Y-Z[W])/Math.max(0.000000001,Z[W+1]-Z[W]);$.push({x:J[W].x+(J[W+1].x-J[W].x)*H,y:J[W].y+(J[W+1].y-J[W].y)*H})}return $}function kQ(J,Q,Z){let K=Z*Q[Q.length-1],$=0;while($<J.length-2&&Q[$+1]<K)$++;let W=(K-Q[$])/Math.max(0.000000001,Q[$+1]-Q[$]);return{x:J[$].x+(J[$+1].x-J[$].x)*W,y:J[$].y+(J[$+1].y-J[$].y)*W}}var U$=(J)=>{let Q=[0];for(let Z=1;Z<J.length;Z++)Q.push(Q[Z-1]+Math.hypot(J[Z].x-J[Z-1].x,J[Z].y-J[Z-1].y));return Q};function HE(J){let Q=J.tract,Z=Q.scale,K=J.bodyParams.pharynx,$=$$(J),W=(w)=>$(0,w).y,X=(w)=>w/Z>=7?w/Z:7-(7-w/Z)/K,Y=(w,g)=>Q.P(w,g),H={...GQ,jaw:0,lipAp:0,labiodental:0},N=J.frame(H),q=Z6(J,N,H),U=[...q.skinLower,...q.skinUpper],G=new H$(U,0.08*Z,(w,g,p)=>{let a=X(w),Q0=a>=3.4&&a<=16.1?r8(cq,a)*Z:1/0,r=Math.min(g,Q0),A0=2.2+0.4*h8(2.5,3.5,a)*(1-h8(17,18.5,a));return{F:g,Bk:p,Fs:r,W:r8(lq,a)*Z,xw:p+(r-p)*r8(sq,a),E:g-r,wf:r8(nq,a)*Z,pf:A0}}),D=Y(-2.5,10.5),O=N.upperLip[N.upperLip.length-1].y,V=N.lowerLip[N.lowerLip.length-1].y,E=QE*Z,F=(w,g,p,a)=>g>V&&g<O&&Math.abs(p)<E&&w>a.xw,C=[],_=(w,g,p)=>{for(let a of XE(w,g,p)){let Q0=a.length/3,r=new Float32Array(Q0),A0=new Float32Array(Q0);for(let q0=0;q0<Q0;q0++)r[q0]=FY(Z,K,a[3*q0],a[3*q0+1]),A0[q0]=DY(Z,K,a[3*q0],a[3*q0+1]);C.push({a:new Float32Array(a),w:r,c:A0})}},I=[],A=1.4*Z;for(let w=G.y0+0.25*Z;w<G.y1-0.2*Z;w+=A){let g=G.at(w);if(!g||g.W<0.2*Z)continue;KE(g,Math.min(0.6*g.W,3.6*Z),I);let p=[],a=[],Q0=I.length/2;for(let r=0;r<Q0;r++)p.push(I[2*r],w,I[2*r+1]);for(let r=Q0-2;r>0;r--)p.push(I[2*r],w,-I[2*r+1]);for(let r=0;r<p.length/3;r++)a.push(!F(p[3*r],w,p[3*r+2],g));_(p,a,!0)}let k=0.3*Z;for(let w of[-3.6,-2.4,-1.2,1.2,2.4,3.6].map((g)=>g*Z)){let g=[],p=[];for(let a=G.y0+0.1*Z;a<=G.y1;a+=k){let Q0=G.at(a);if(!Q0||Math.abs(w)>0.97*Q0.W){_(g,p,!1),g=[],p=[];continue}let r=PQ(Q0,w);g.push(r,a,w),p.push(!F(r,a,w,Q0))}_(g,p,!1)}for(let w of[0.5,0.8].map((g)=>g*Math.PI))for(let g of[1,-1]){let p=[],a=[];for(let Q0=G.y0+0.1*Z;Q0<=G.y1;Q0+=k){let r=G.at(Q0);if(!r||r.W<0.2*Z)continue;p.push(r.xw-(r.xw-r.Bk)*Math.pow(Math.abs(Math.cos(w)),2/fJ),Q0,g*r.W*Math.pow(Math.sin(w),2/fJ)),a.push(!0)}_(p,a,!1)}let P=[],L=[],B=(w,g,p,a,Q0,r=!1)=>{let A0=new EJ;Q0(A0),w.push({lines:A0.lines,color:g,width:p,alpha:a,hot:r})},m=(w,g,p,a)=>{let Q0=L8(g.map(([r,A0])=>$(r,A0)),4);Q0.forEach((r,A0)=>{let q0=G.at(r.y);w.p(r.x,r.y,a*((q0?ZE(q0,r.x):0)+p(A0,Q0.length)))}),w.end()};B(P,e.blueDim,1.05,0.9,(w)=>{for(let g of[1,-1]){m(w,[[-2.55,13.4],[-2.85,14.75],[-3.65,15.45],[-4.6,15.25],[-5.2,14.25],[-5.4,12.8],[-5.05,11.3],[-4.55,10.2],[-3.95,9.55],[-3.35,9.65],[-3,10.35]],(a,Q0)=>(0.25+1.2*Math.sin(Math.PI*a/(Q0-1))**1.5)*Z,g),m(w,[[-3.15,14.3],[-3.95,14.45],[-4.55,13.5],[-4.6,12.1],[-4.15,11.05]],()=>0.55*Z,g),m(w,[[-2.7,11.2],[-2.55,11.85],[-2.75,12.35]],()=>0.35*Z,g);let p=[];for(let a=0;a<=16;a++)p.push([-3.5+0.6*Math.cos(a/16*Math.PI*2),12+0.85*Math.sin(a/16*Math.PI*2)]);m(w,p,()=>0.12*Z,g)}}),B(P,e.blueMid,1,0.8,(w)=>{for(let g of[1,-1]){for(let a=14.6;a>=11.3;a-=0.15){let Q0=W(a),r=G.at(Q0);if(!r)continue;let A0=g*(0.3+1.05*(14.6-a)/3.3)*Z;w.p(PQ(r,A0),Q0,A0)}w.end();let p=[[7.95,11.05,0.95],[7.4,11.15,1.45],[7.25,11.6,1.55],[7.55,12.1,1.35],[8.2,12.15,1]];for(let[a,Q0,r]of p)w.p(a*Z,W(Q0),g*r*Z);w.end()}}),B(P,e.blueMid,1,0.9,(w)=>{for(let g of[1,-1])w.ellipse([8.05*Z,W(10.98),g*0.62*Z],[0.42*Z,0.04*Z,0],[0,0,0.26*Z],16)});let j=new H$(q.brain,0.08*Z,(w,g,p)=>({F:g,Bk:p,Fs:g,W:r8(aq,X(w))*Z,xw:p+(g-p)*0.48,E:0,wf:1,pf:2.3}));B(P,e.blueMid,0.85,0.32,(w)=>{for(let g=j.y0+0.6*Z;g<j.y1-0.15*Z;g+=1.5*Z){let p=j.at(g);if(!p)continue;for(let a=0;a<=48;a++){let Q0=a/48*Math.PI*2,r=Math.cos(Q0),A0=Math.sin(Q0),q0=r>=0?p.pf:fJ,v0=r>=0?p.xw+(p.Fs-p.xw)*Math.pow(r,2/q0):p.xw-(p.xw-p.Bk)*Math.pow(-r,2/q0);w.p(v0,g,Math.sign(A0)*p.W*Math.pow(Math.abs(A0),2/q0))}w.end()}for(let g of[0.3,0.7].map((p)=>p*Math.PI))for(let p of[1,-1]){for(let a=j.y0;a<=j.y1;a+=0.3*Z){let Q0=j.at(a);if(!Q0)continue;let r=Math.cos(g),A0=Math.sin(g),q0=r>=0?Q0.pf:fJ,v0=r>=0?Q0.xw+(Q0.Fs-Q0.xw)*Math.pow(r,2/q0):Q0.xw-(Q0.xw-Q0.Bk)*Math.pow(-r,2/q0);w.p(v0,a,p*Q0.W*Math.pow(A0,2/q0))}w.end()}}),B(P,e.blueDim,0.9,0.6,(w)=>{for(let g=0;g<9;g++){let p=-4.4+g*1.75;if(p>10.5)break;let a=VQ(p)-2.25,Q0=Y(a,p+0.08),r=Y(a,p+1.32),A0=Y(a+0.8,0).x,q0=0.8*Z,v0=1.05*Z;for(let s0 of[Q0.y,r.y])w.ellipse([A0,s0,0],[q0,0,0],[0,0,v0],24);for(let s0 of[0.25,0.75,1.25,1.75].map((a0)=>a0*Math.PI))w.p(A0+q0*Math.cos(s0),Q0.y,v0*Math.sin(s0)).p(A0+q0*Math.cos(s0),r.y,v0*Math.sin(s0)).end();let p0=(Q0.y+r.y)/2,y0=A0-2.15*Z;w.ellipse([y0,p0,0],[0.72*Z,0,0],[0,0,0.88*Z],20);for(let s0 of[1,-1])w.p(A0-0.7*Z,p0,s0*0.55*Z).p(y0+0.45*Z,p0,s0*0.72*Z).end(),w.p(A0-0.5*Z,p0,s0*0.95*Z).p(A0-0.9*Z,p0-0.1*Z,s0*2.3*Z).end();w.p(y0-0.72*Z,p0,0).p(y0-1.8*Z,p0-0.55*Z,0).end()}}),B(P,e.blueDim,0.85,0.5,(w)=>{let g=Y(-4.9,0).x;for(let p=-4.4;p<=11;p+=1.75)w.ellipse([g,Y(0,p).y,0],[0.42*Z,0,0],[0,0,0.6*Z],16);for(let p of[1,-1])w.p(g,Y(0,-4.6).y,p*0.6*Z).p(g,Y(0,11.4).y,p*0.6*Z).end()}),B(P,e.blueDim,0.9,0.7,(w)=>{for(let g of[1,-1]){for(let p of q.nasal)w.p(p.x,p.y,g*1.2*Z);w.end(!0);for(let p of q.turbinates){for(let a of p)w.p(a.x,a.y,g*0.95*Z);w.end()}}});let y=(w,g,p)=>{let a=[];for(let Q0=0;Q0<=60;Q0++){let r=p*Q0/60;a.push({x:w-g*Math.pow(r/p,1.85),y:r})}return{pts:a,cum:U$(a)}},d=(w,g,p,a,Q0,r,A0)=>{let q0=y(g,p,a),v0=q0.cum[q0.cum.length-1],p0=Q0.reduce((s0,a0)=>s0+a0[0],0),y0=0.97*v0/(p0*Z);for(let s0 of[1,-1]){let a0=0;for(let[L9,F9,D9]of Q0){let v=L9*Z*y0,B9=F9*Z,e0=D9*Z,U9=(a0+v/2)/v0;a0+=v;let z=kQ(q0.pts,q0.cum,U9),R=kQ(q0.pts,q0.cum,Math.min(1,U9+0.01)),b=kQ(q0.pts,q0.cum,Math.max(0,U9-0.01)),s=R.x-b.x,W0=R.y-b.y,U0=Math.hypot(s,W0)||1;s/=U0,W0/=U0;let E0=W0,t=-s,K0=r(z.y/a),O0=(C0,N0,H0=0)=>[z.x+s*C0-E0*H0,K0+A0*N0,s0*(z.y+W0*C0-t*H0)];for(let[C0,N0]of[[-0.5,0],[-0.5,0.55],[-0.38,1],[0,1.08],[0.38,1],[0.5,0.55],[0.5,0]])w.p(...O0(C0*v,N0*B9));w.end(!0);for(let[C0,N0]of[[-0.45,0.1],[0.45,0.1],[0.45,0.9],[-0.45,0.9]])w.p(...O0(C0*v,0,N0*e0));w.end(!0)}}},T=Y(7.3,0).x,S=4.2*Z,n=2.65*Z;B(P,e.blue,1,0.8,(w)=>d(w,T,S,n,eq,(g)=>(7.95+0.3*g*g)*Z,1)),B(P,e.blueMid,1,0.6,(w)=>{for(let g of[0,2,4,5,6,7]){let p=q.palOral[g],a=Math.max(0,(T-p.x)/S),Q0=(a>=1?n:n*Math.pow(a,0.5405405405405405))-0.45*Z,r=(8.95+0.3*Math.min(1,Q0/n)**2)*Z;if(Q0<0.6*Z||p.y<r+0.15*Z)continue;for(let A0=0;A0<=20;A0++){let q0=Q0*(A0/10-1);w.p(p.x,r+(p.y-r)*Math.pow(1-Math.pow(Math.abs(q0)/Q0,2.4),0.7),q0)}w.end()}});let u=(w,g,p)=>{let a=Y(w,g);return[a.x,a.y,p*Z]},$0=(w,g,p)=>{let a=g.map(([Q0,r,A0])=>u(Q0,r,p*A0));for(let Q0=0;Q0<a.length-1;Q0++){let r=a[Math.max(0,Q0-1)],A0=a[Q0],q0=a[Q0+1],v0=a[Math.min(a.length-1,Q0+2)];for(let p0=0;p0<4;p0++){let y0=p0/4,s0=y0*y0,a0=s0*y0,L9=(F9,D9,v,B9)=>0.5*(2*D9+(-F9+v)*y0+(2*F9-5*D9+4*v-B9)*s0+(-F9+3*D9-3*v+B9)*a0);w.p(L9(r[0],A0[0],q0[0],v0[0]),L9(r[1],A0[1],q0[1],v0[1]),L9(r[2],A0[2],q0[2],v0[2]))}}w.p(...a[a.length-1]),w.end()};B(L,e.red,1.25,0.9,(w)=>{for(let g of[1,-1]){$0(w,[[6.4,4.6,0],[5.6,4.45,1.5],[4.5,4.4,2.6],[3.2,4.5,3.5],[1.8,4.85,4.15],[0.4,5.6,4.6],[-0.55,6.6,4.85],[-0.9,7.6,4.9],[-1.45,8.9,4.95],[-1.9,9.7,5],[-2.15,10.2,5]],g),$0(w,[[-1.8,10.25,4.95],[-0.9,9.4,4.85],[0.15,10.1,4.6],[0.6,8.9,4.35],[1.1,7.7,4],[1.9,7.2,3.55]],g);let p=u(-2.5,10.5,g*4.95);w.ellipse(p,[0.45*Z,0,0],[0,0.12*Z,0.85*Z],16)}}),B(L,e.red,1,0.55,(w)=>{for(let g of[1,-1]){$0(w,[[1.9,7.2,3.55],[3,7.15,3.15],[4.3,7.1,2.6],[5.4,7.05,1.85],[6.2,7.05,1.05],[6.72,7.15,0]],g);for(let[p,a,Q0,r,A0]of[[3,3.15,3.2,4.5,3.5],[5.4,1.85,5.6,4.45,1.5],[1.9,3.55,1.8,4.85,4.15]])$0(w,[[p,7.15,a],[(p+Q0)/2,5.9,(a+A0)/2+0.15],[Q0,r,A0]],g)}});let i=new EJ;$0(i,[[7.25,6.75,0],[7.4,5.4,0],[6.4,4.6,0],[5.6,5,0],[5.9,6.2,0],[6.45,6.55,0]],1);let Z0=i.lines[0],X0=Y(6.98,0).x,T0=4*Z,_0=2.5*Z;B(L,e.blue,1,0.8,(w)=>d(w,X0,T0,_0,JE,(g)=>(7.75+0.45*Math.pow(g,1.5))*Z,-1));let c0=$(6.15,15.35),d0=new x(0.3*Z,(G.y0+G.y1)/2,0);return{model:J,head:G,condyle:D,lipHalf:E,center:d0,shell:C,fixed:P,jaw:L,chin:Z0,eyes:[[c0.x,c0.y,3.15*Z],[c0.x,c0.y,-3.15*Z]],eyeR:1.05*Z}}var UE=[0.09,0.06,0.03];class N${scene=new n6;camera=new m9(24,1,5,2000);beams=new eK;rest=null;w=1;h=1;compact=!1;centred=!1;facing=1;clock=0;gaze=new K6;face=new I7;eye=new x;turn=new o9;euler=new A8;strobe=0;tmp=new tK;particles=[];echoes=[];lastEcho=-1;sparkSeed=7;k=1;ring={n:0,s:new Float64Array(80),cx:new Float64Array(80),cy:new Float64Array(80),ux:new Float64Array(80),uy:new Float64Array(80),a:new Float64Array(80),b:new Float64Array(80)};v3=new x;caliper=null;constructor(){this.scene.add(this.beams.group),this.scene.fog=new l7(0,50,100);for(let J=0;J<200;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,v:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN,pz:NaN})}dispose(){this.beams.dispose()}resetMotion(){this.face=new I7,this.echoes=[],this.lastEcho=-1,this.strobe=0;for(let J of this.particles)J.px=NaN}resize(J,Q){if(this.w=J,this.h=Q,this.compact=J<560,this.camera.aspect=J/Q,this.compact||this.centred)this.camera.clearViewOffset();else this.camera.setViewOffset(J,Q,0.1*J,0,J,Q);this.camera.updateProjectionMatrix(),this.beams.setResolution(J,Q);for(let Z of this.particles)Z.px=NaN}poses(J){let Q=this.restFor(J),Z=Math.tan(this.camera.fov*Math.PI/360),K=1.1*Math.max(15.2/Z,11/(Z*Math.max(0.3,this.camera.aspect))),$=Q.center.clone(),W=this.facing>0?0.62:Math.PI-0.62,X=0.2;return{target:$,home:$.clone().add(new x(Math.sin(W)*Math.cos(0.2),Math.sin(0.2),Math.cos(W)*Math.cos(0.2)).multiplyScalar(K)),side:$.clone().add(new x(0,0,this.facing*K))}}restFor(J){if(!this.rest||this.rest.model!==J)this.rest=HE(J);return this.rest}project(J,Q,Z){let K=this.v3.set(J,Q,Z).applyMatrix4(this.beams.group.matrixWorld).project(this.camera);return[(K.x+1)/2*this.w,(1-K.y)/2*this.h]}pxPerCmAt(J,Q,Z){let K=this.camera.matrixWorld.elements,[$,W]=this.project(J,Q,Z),[X,Y]=this.project(J+K[0],Q+K[1],Z+K[2]);return Math.hypot(X-$,Y-W)}crown(J){let Q=this.restFor(J),Z=J.tract.scale,K=Q.head.at(Q.head.y1-1.2*Z),$=K?(K.F+K.Bk)/2:Q.center.x,[W,X]=this.project($,Q.head.y1,0);return{x:W,y:X,cmPx:this.pxPerCmAt($,Q.head.y1,0)}}faceView(J,Q,Z){let K=zQ(J,Q,Z).find(($)=>$.id==="lips").pos;return{handles:zQ,X:($)=>this.project($.x,$.y,0)[0],Y:($)=>this.project($.x,$.y,0)[1],pxPerCm:this.pxPerCmAt(K.x,K.y,0)}}update(J,Q,Z,K,$,W){this.clock+=W;let X=this.restFor(J),Y=J.tract.scale,H=this.face;this.headPose(X,Y);let N=Z$(J,Z.jaw),q=X.condyle,U=this.beams,G=this.camera.position.distanceTo(X.center),D=this.scene.fog;D.near=G-3*Y,D.far=G+30*Y,U.begin();let O=(d,T=0)=>{let S=new Float32Array(d.length*3);return d.forEach((n,u)=>{S[3*u]=n.x,S[3*u+1]=n.y,S[3*u+2]=T}),S},V=this.v3.copy(this.eye).sub(X.center).normalize(),E=h8(0.25,0.8,Math.abs(V.z)),F=0.22+0.78*E,C=0.45+0.55*E,_=(d,T,S,n={},u=F)=>U.line(O(d),d.length,T,S,{...n,alpha:(n.alpha??1)*u}),I=(d,T,S)=>S===0?[d,T]:NY(d,T,q,S);this.k=Y;for(let d of X.fixed)for(let T of d.lines)U.line(T,T.length/3,d.color,d.width,{alpha:d.alpha,hot:d.hot});for(let d of X.jaw)for(let T of d.lines){let S=this.tmp.reset();for(let n=0;n<T.length;n+=3){let[u,$0]=I(T[n],T[n+1],N);S.p(u,$0,T[n+2])}U.poly(S,d.color,d.width,{alpha:d.alpha,hot:d.hot})}for(let d of X.shell){let T=this.tmp.reset();for(let S=0;S<d.w.length;S++){let n=d.a[3*S+2],[u,$0]=UY(Y,d.c[S],n,H.puff),[i,Z0]=I(d.a[3*S]+u,d.a[3*S+1],N*d.w[S]);T.p(i,Z0,n+$0)}U.poly(T,e.blueDim,0.85,{alpha:0.42})}let A=Z6(J,Q,Z);_(A.inset,e.blueDim,0.9,{alpha:0.5}),_(A.skull,e.blueDim,0.9,{close:!0,alpha:0.6}),_(A.brain,e.blueMid,1,{close:!0,alpha:0.75}),_(A.sulcus,e.blueDim,0.9),_(A.nasal,e.blueMid,1,{close:!0}),_(A.palOral,e.blueMid,1.1),_(A.palNasal,e.blueMid,1.1),_(A.skinLower,e.blue,1.5),_(A.skinUpper,e.blue,1.5),_(A.outerWall,e.blue,1.4,{hot:!0}),_(Q.inner,e.blue,1.3,{alpha:0.9}),_(A.glottisWall,e.blue,1.2,{alpha:0.8}),this.eyes(X,W),this.airway(J,Q,K,$,Y),this.velum(Q,Y),this.epiglottis(Q,Y,C),this.larynx(J,Q,Z,K,Y,W,X.head.y0,F);let k=O(Q.tongue),P=(d,T)=>O(yJ(d.map((S)=>[S.x,S.y]),T).map(([S,n])=>({x:S,y:n}))),L=P(Q.upperLip,2),B=P(Q.lowerLip,2),m=this.lips(X,J,Q,Z,N),j=X.chin,y=new Float32Array(j.length);for(let d=0;d<j.length;d+=3){let[T,S]=I(j[d],j[d+1],N);y[d]=T,y[d+1]=S}if(K&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock;let d=[{a:k,color:e.green},{a:y,color:e.red},{a:L,color:e.pink},{a:B,color:e.pink}];if(m)d.push({a:m,color:e.pink});this.echoes.push({t:this.clock,lines:d});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if(K)UE.forEach((d,T)=>{let S=this.nearestEcho(this.clock-d);if(!S)return;for(let n of S.lines)U.line(n.a,n.a.length/3,n.color,1,{alpha:(0.1+0.07*T)*C})});if(this.tongue(Q,Z,Y),U.line(y,y.length/3,e.red,1.5,{hot:!0,alpha:C}),U.line(k,Q.tongue.length,e.green,1.6,{hot:!0,alpha:C}),U.line(L,L.length/3,e.pink,1.5,{hot:!0,alpha:C}),U.line(B,B.length/3,e.pink,1.5,{hot:!0,alpha:C}),_(yJ(Q.velum.map((d)=>[d.x,d.y]),3).map(([d,T])=>({x:d,y:T})),e.white,1.25,{alpha:0.92},C),$.particles&&K)this.drawParticles(J,Q,K,W);if(K)this.drawTurbulence(J,Q,K);if(this.caliper=null,$.calipers)this.drawCaliper(Q);U.end()}nearestEcho(J){let Q=null,Z=0.016;for(let K of this.echoes){let $=Math.abs(K.t-J);if($<Z)Z=$,Q=K}return Q}headPose(J,Q){let Z=this.beams.group,K=this.v3.set(-2.4*Q,J.head.y0+0.42*(J.condyle.y-J.head.y0),0);this.turn.setFromEuler(this.euler.set(this.face.tilt,0,this.face.nod)),Z.quaternion.copy(this.turn),Z.position.copy(K).sub(K.applyQuaternion(this.turn)),Z.updateMatrixWorld(!0),this.eye.copy(this.camera.position),Z.worldToLocal(this.eye)}eyes(J,Q){let Z=this.gaze,K=this.face;Z.update(this.clock,Q);let $=J.eyeR,W=Z.pitch+1.3*K.lookUp,X=[Math.cos(W)*Math.cos(Z.yaw),Math.sin(W),Math.cos(W)*Math.sin(Z.yaw)],Y=(U)=>{let G=Math.abs(U[1])>0.9?[1,0,0]:[0,1,0],D=qY(GY(G,U));return[D,GY(U,D)]},H=this.eye,N=1-h8(0.4,0.9,K.lid),q=Math.max(0,K.brow);for(let U of J.eyes){let G=qY([H.x-U[0],H.y-U[1],H.z-U[2]]),[D,O]=Y(G),V=new EJ;V.ellipse(U,V7(D,$),V7(O,$),36);let[E,F]=Y(X),C=[U[0]+X[0]*$*0.86,U[1]+X[1]*$*0.86,U[2]+X[2]*$*0.86];V.ellipse(C,V7(E,$*0.5),V7(F,$*0.5),24);let _=[U[0]+X[0]*$*0.97,U[1]+X[1]*$*0.97,U[2]+X[2]*$*0.97];V.ellipse(_,V7(E,$*0.2),V7(F,$*0.2),14);let I=Math.sign(U[2]),A=(j,y,d)=>j*(1-y*y)+0.06*y*I*d,k=(j)=>{for(let y=0;y<=16;y++){let d=-1+y/8,T=I*d*0.95,S=A(-0.36,d,-1),n=j?A(0.5+0.2*q,d,1)*(1-K.lid)+(S+0.03)*K.lid:S;V.p(U[0]+1.04*$*Math.cos(n)*Math.cos(T),U[1]+1.04*$*Math.sin(n),U[2]+1.04*$*Math.cos(n)*Math.sin(T))}V.end()};k(!0),k(!1);let P=0.3*K.brow,L=0.28*Math.max(0,-K.brow),B=0.22*K.lid*q;for(let j=0;j<=12;j++){let y=-1+j/6,d=I*(0.15+y*0.62),T=(1-y)/2,S=0.82+0.12*(1-y*y)-0.06*y+P+(B-L)*T;V.p(U[0]+1.32*$*Math.cos(S)*Math.cos(d),U[1]+1.32*$*Math.sin(S),U[2]+1.32*$*Math.cos(S)*Math.sin(d))}V.end();let m=[[e.blueMid,1,0.35],[e.blue,1,0.9*N],[e.blue,1,0.7*N],[e.blue,1.25,0.95],[e.blue,1.05,0.75],[e.blueMid,1.3,0.8]];V.lines.forEach((j,y)=>this.beams.line(j,j.length/3,m[y][0],m[y][1],{alpha:m[y][2]}))}}lips(J,Q,Z,K,$){let W=Q.tract.scale,X=J.condyle,Y=J.head,H=this.beams,N=Q.bodyParams.pharynx,q=J.lipHalf,U=Math.max(0.3*W,(1.1+(Q.bodyParams.lipWidth-1.1)*HY(K.lipWidth))*W/2),G=Z.upperLip.slice(6),D=Z.lowerLip.slice(6).map((S)=>OQ(S,X,-$)),O=U$(G),V=U$(D),E=G[0],F=D[0],C=(E.y+F.y)/2,_=(S,n)=>{let u=Y.at(S);return u?PQ(u,n,!0):0},I=E.x-_(E.y,0),A=F.x-_(F.y,0),k=(I+A)/2,P=G[G.length-1].y,L=D[D.length-1].y,B=this.tmp,m=(S,n,u)=>{let $0=Math.sqrt(Math.max(0,1-(u/U)**2)),i=kQ(S?G:D,S?O:V,n),Z0=S?E:F,X0=S?P:L,T0=C+(Z0.y-C)*$0,_0=X0-Z0.y,c0=T0+(i.y-Z0.y)*(X0-T0)/(Math.abs(_0)<0.0001?0.0001:_0),d0=Math.pow(Math.max(0,1-(u/q)**2),1.5),w=i.x-_(i.y,0)+(k-(S?I:A))*(1-$0)*(1-n),g=_(c0,u)+w*d0,p=S?0.5*(1-$0)*(1-n):0.5*(1+$0)+0.5*(1-$0)*n,a=p+(FY(W,N,g,c0)-p)*h8(U,q,Math.abs(u)),[Q0,r]=UY(W,DY(W,N,g,c0),u,this.face.puff),[A0,q0]=a?NY(g+Q0,c0,X,$*a):[g+Q0,c0];return[A0,q0,u+r]},j=(S,n,u,$0,i)=>{B.reset();for(let Z0=0;Z0<=i;Z0++){let X0=u+($0-u)*Z0/i;B.p(...m(S,n(X0),X0))}return B},y=[0.66,0.88];for(let S of[!0,!1]){for(let $0 of y)H.poly(j(S,()=>$0,-q,q,24),e.blueDim,0.85,{alpha:0.42});for(let $0 of[-0.8,-0.5,0.5,0.8].map((i)=>i*q)){B.reset();for(let i=0;i<=8;i++)B.p(...m(S,0.45+0.55*i/8,$0));H.poly(B,e.blueDim,0.85,{alpha:0.42})}let n=Math.min(q,U+0.3*W),u=($0)=>{let i=Math.sqrt(Math.max(0,1-($0/n)**2)),Z0=S?-0.07*Math.exp(-(($0/(0.32*W))**2))+0.05*Math.exp(-(((Math.abs($0)-0.55*W)/(0.3*W))**2)):0;return Math.max(0,(S?0.42:0.45)*i+Z0*i)};H.poly(j(S,u,-n,n,28),e.pink,1.3,{alpha:0.95}),H.poly(j(S,($0)=>0.45*u($0),-n,n,28),e.pink,1,{alpha:0.45})}for(let S of[1,-1])H.poly(j(!0,()=>0,S*U,S*q,6),e.pink,1,{alpha:0.6});let d=Z.upperLip[6].y-Z.lowerLip[6].y>0.02*W,T=24;B.reset();for(let S=0;S<=T;S++)B.p(...m(!0,0,-U+2*U*S/T));if(d)for(let S=T-1;S>0;S--)B.p(...m(!1,0,-U+2*U*S/T));return H.poly(B,e.pink,2.1,{hot:!0,close:d}),d?B.a.slice(0,B.n*3):null}tongue(J,Q,Z){let K=J.tongue,$=0,W=1/0;K.forEach((G,D)=>{let O=(G.x-J.tip.x)**2+(G.y-J.tip.y)**2;if(O<W)W=O,$=D});let X=22,Y=YE(K.slice(0,$+1),X),H=HY(Q.lateral),N=Y.map((G,D)=>{let O=Y[Math.max(0,D-1)],V=Y[Math.min(X-1,D+1)],E=V.x-O.x,F=V.y-O.y,C=Math.hypot(E,F)||1;E/=C,F/=C;let _=D/(X-1);return{p:G,nx:-F,ny:E,W:r8(rq,_)*Z,h:(r8(tq,_)+0.8*H*h8(0.45,0.8,_))*Z}}),q=(G,D)=>{let O=G.h*(1-Math.cos(D));return[G.p.x-G.nx*O,G.p.y-G.ny*O,G.W*Math.sin(D)]},U=this.tmp;for(let G=1;G<X-1;G+=2){U.reset();for(let D=0;D<=12;D++)U.p(...q(N[G],-Math.PI/2+Math.PI*D/12));this.beams.poly(U,e.green,1,{alpha:0.5})}for(let G of[-Math.PI/2,-Math.PI/4,Math.PI/4,Math.PI/2]){U.reset();for(let D of N)U.p(...q(D,G));this.beams.poly(U,e.green,Math.abs(G)>1?1.25:1,{alpha:Math.abs(G)>1?0.8:0.45})}}airway(J,Q,Z,K,$){let W=Q.grid,X=this.ring;if(X.n=0,W.length<2)return;let Y=Z?J.nodeS(Z.t.phLen,Z.t.orLen):null,H=K.pressure&&Z&&Y&&Y.length===Z.t.pressureRms.length,N=-1,q=0;for(let O=0;O<W.length&&X.n<X.s.length;O++){let V=W[O],E=V.outer.x-V.inner.x,F=V.outer.y-V.inner.y,C=Math.hypot(E,F);if(C>0.0001)N=E/C,q=F/C;let _=V.d/2,I=X.n++;X.s[I]=V.s,X.cx[I]=V.outer.x-N*_,X.cy[I]=V.outer.y-q*_,X.ux[I]=N,X.uy[I]=q,X.a[I]=_,X.b[I]=V.d>0.01?Math.min(3.5*$,2*V.area/(Math.PI*V.d)):0}let U=this.tmp,G=this.eye;for(let O=0;O<X.n;O+=2){U.reset();for(let I=0;I<=24;I++){let A=I/24*Math.PI*2,k=Math.cos(A)*X.a[O],P=Math.sin(A)*X.b[O];U.p(X.cx[O]+X.ux[O]*k,X.cy[O]+X.uy[O]*k,P)}let V=G.x-X.cx[O],E=G.y-X.cy[O],F=G.z,C=Math.abs(X.uy[O]*V-X.ux[O]*E)/(Math.hypot(V,E,F)||1),_=1-0.65*C*C;if(H){let I=Math.pow(DQ(Y$(Z.t.pressureRms,Y,X.s[O])),0.85);this.beams.poly(U,FQ(I),0.85,{alpha:(0.25+0.65*I)*_})}else this.beams.poly(U,e.blueDim,0.85,{alpha:(K.grid?0.8:0.45)*_})}for(let O of[1,-1]){U.reset();for(let V=0;V<X.n;V++)U.p(X.cx[V],X.cy[V],O*X.b[V]);this.beams.poly(U,e.blue,1,{alpha:0.55})}let D=Q.glottis;for(let O of[0.3,0.65]){let V=D.x+(X.cx[0]-D.x)*O,E=D.y+(X.cy[0]-D.y)*O,F=(0.55+0.25*O)*$;U.reset();for(let C=0;C<=20;C++)U.p(V+F*Math.cos(C/20*Math.PI*2),E,F*Math.sin(C/20*Math.PI*2));this.beams.poly(U,e.blueDim,0.9,{alpha:0.6})}}airPoint(J,Q,Z,K){let $=this.ring;if($.n<2)return null;if(Q<=$.s[0]){let U=Math.max(0,Q/Math.max(0.01,$.s[0])),G=J.glottis;return[G.x+($.cx[0]-G.x)*U+Z*0.3*this.k,G.y+($.cy[0]-G.y)*U,K*0.45*this.k]}let W=0,X=$.n-1;if(Q>=$.s[X])return null;while(X-W>1){let U=W+X>>1;if($.s[U]<=Q)W=U;else X=U}let Y=(Q-$.s[W])/Math.max(0.000001,$.s[X]-$.s[W]),H=(U)=>U[W]+(U[X]-U[W])*Y,N=H($.a)*Z*0.82,q=H($.b)*K*0.82;return[H($.cx)+H($.ux)*N,H($.cy)+H($.uy)*N,q]}drawParticles(J,Q,Z,K){let $=Z.t,W=J.nodeS($.phLen,$.orLen),X=new Float32Array($.phAreas.length+$.orAreas.length);X.set($.phAreas,0),X.set($.orAreas,$.phAreas.length);let Y=Q.lipS;for(let H of this.particles){let N=Y$($.flow,W,H.s),q=Math.max(0.05,Y$(X,W,H.s)),U=N/q,G=Math.sign(U)*2.2*Math.log1p(Math.abs(U)/30);if(H.s+=G*K,H.life-=K*0.25,H.s>Y||H.s<0||H.life<=0||Math.abs(U)<3){if(!(Math.abs(U)<3&&H.life>0)){H.s=Math.random()*0.8,H.u=Math.random()*2-1,H.v=Math.random()*2-1,H.life=0.6+Math.random()*0.8,H.px=NaN;continue}}let D=this.airPoint(Q,H.s,H.u,H.v);if(!D)continue;if(Number.isFinite(H.px)){let O=Math.min(2,Math.floor(Math.min(1,Math.abs(G)/6)*Math.min(1,H.life)*3));this.beams.seg(H.px,H.py,H.pz,D[0],D[1],D[2],"#ffe2a8",1.05,0.16+0.2*O)}[H.px,H.py,H.pz]=D}}drawTurbulence(J,Q,Z){let K=Z.t;if(!(K.noiseLevel>1)||K.noiseNode<0)return;let $=J.branchS(K.noiseNode,K.phLen,K.orLen);if($<0)return;let W=Math.min(1,Math.log10(K.noiseLevel)/3.2);if(W<=0.05)return;let X=this.sparkSeed=this.sparkSeed*16807%2147483647,Y=()=>(X=X*16807%2147483647)/2147483647;for(let H=0;H<40;H++){let N=this.airPoint(Q,$+0.2+Y()*1.2,Y()*2-1,Y()*2-1);if(!N)continue;let q=0.02+Y()*0.05;this.beams.seg(N[0]-q,N[1],N[2],N[0]+q,N[1],N[2],"#f4fbff",1.6,0.15+0.7*W*Y())}}drawCaliper(J){let Q=this.ring,Z=-1,K=1/0;for(let X=2;X<J.grid.length-1;X++)if(J.grid[X].area<K)K=J.grid[X].area,Z=X;if(Z<0||K>=1.2||Z>=Q.n)return;let $=this.tmp.reset();for(let X=0;X<=24;X++){let Y=X/24*Math.PI*2,H=Math.cos(Y)*Q.a[Z],N=Math.sin(Y)*Q.b[Z];$.p(Q.cx[Z]+Q.ux[Z]*H,Q.cy[Z]+Q.uy[Z]*H,N)}this.beams.poly($,e.white,1.3,{hot:!0});let W=J.grid[Z];this.caliper={x:W.outer.x,y:W.outer.y,z:0,area:K}}velum(J,Q){let Z=J.velum,K=Math.floor(Z.length/2)-1,$=[];for(let Y=0;Y<=K;Y++){let H=Z[Y],N=Z[Z.length-1-Y],q=H.x-N.x,U=H.y-N.y,G=Math.hypot(q,U)||1;q/=G,U/=G;let D=Y/K;$.push({x:(H.x+N.x)/2,y:(H.y+N.y)/2,nx:q,ny:U,W:(1.95-1.5*Math.pow(D,1.5))*Q,droop:0.45*Q*D})}let W=(Y,H)=>{let N=0.12*Q*(1-H*H)-Y.droop*H*H;return[Y.x+Y.nx*N,Y.y+Y.ny*N,Y.W*H]},X=this.tmp;for(let Y of[1,3,5,7,9].filter((H)=>H<=K)){X.reset();for(let H=0;H<=12;H++)X.p(...W($[Y],-1+H/6));this.beams.poly(X,e.white,1,{alpha:0.5})}for(let Y of[-1,1]){X.reset();for(let H of $)X.p(...W(H,Y));this.beams.poly(X,e.white,1,{alpha:0.65})}}epiglottis(J,Q,Z){let[K,$]=J.epiglottis,W=$.x-K.x,X=$.y-K.y,Y=Math.hypot(W,X)||1;W/=Y,X/=Y;let H={x:-X,y:W},N=(G)=>(0.22+0.9*Math.pow(Math.sin(G*Math.PI/2),1.3))*Q,q=this.tmp.reset(),U=10;for(let G=0;G<=U;G++){let D=G/U,O=N(D),V=0.28*Q*(O/(1.12*Q));q.p(K.x+W*Y*D+H.x*V,K.y+X*Y*D+H.y*V,O)}for(let G=1;G<12;G++){let D=N(1)*(1-2*G/12),O=0.28*Q*(Math.abs(D)/(1.12*Q))**2;q.p($.x+H.x*O+W*0.08*Q*(1-(D/N(1))**2),$.y+H.y*O+X*0.08*Q*(1-(D/N(1))**2),D)}for(let G=U;G>=0;G--){let D=G/U,O=N(D),V=0.28*Q*(O/(1.12*Q));q.p(K.x+W*Y*D+H.x*V,K.y+X*Y*D+H.y*V,-O)}this.beams.poly(q,e.blue,1.1,{alpha:0.75}),this.beams.line(new Float32Array([K.x,K.y,0,$.x,$.y,0]),2,e.blue,2.1,{alpha:0.85*Z})}larynx(J,Q,Z,K,$,W,X,Y){let H=Q.glottis,N=this.beams,q=new EJ,U=(A,k,P)=>[H.x+A*$,H.y+k*$,P*$],G=(A,k=!1)=>{for(let[P,L,B]of A)q.p(...U(P,L,B));q.end(k)};for(let A of[1,-1])G([[1.45,1.75,0],[0.75,2,A*1.2],[-0.5,1.95,A*1.9],[-0.6,-0.6,A*1.85],[0.25,-0.85,A*1.5],[1.05,-0.8,A*0.55],[1.2,-0.75,0],[1.6,0.05,0],[1.9,1.15,0],[1.45,1.75,0]]),G([[-0.5,1.95,A*1.9],[-0.7,2.85,A*1.85]]),G([[-0.6,-0.6,A*1.85],[-0.45,-1.25,A*1.7]]);for(let[A,k]of[[-1.75,0.15],[-1.4,1.1]]){for(let P=0;P<=28;P++){let L=P/28*Math.PI*2;q.p(...U(0.1+1*Math.cos(L),A+k*(1-Math.cos(L))/2,1.1*Math.sin(L)))}q.end()}for(let A of q.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let D=new EJ,O=H.y-2.1*$,V=H.x+0.08*$;for(let A=O;A>X;A-=0.5*$)D.ellipse([V,A,0],[0.82*$,0,0],[0,0,0.95*$],20,-0.8*Math.PI,0.8*Math.PI);for(let A of[1,-1])D.p(V,O,A*0.95*$).p(V,X,A*0.95*$).end();for(let A of D.lines)N.line(A,A.length/3,e.blueDim,0.9,{alpha:0.85});for(let A of[1,-1])N.line(new Float32Array([V+A*0.82*$,H.y,0,V+A*0.82*$,X,0]),2,e.blueMid,1,{alpha:Y});let E=new EJ,F={x:J.tract.P(1.6,0).x,y:J.tract.P(0,2.9).y+0.6*Z.larynx*$};for(let A of[-0.16,0.16]){for(let k=0;k<=20;k++){let P=-1+k/10;E.p(F.x+(0.35-0.65*P*P)*$,F.y+A*$,1.15*P*$)}E.end();for(let k of[1,-1])E.p(F.x-0.3*$,F.y+A*$,k*1.15*$).p(F.x-2.8*$,F.y+(0.7+A)*$,k*2.05*$).end()}for(let A of E.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let C=K?.t.glottalArea,_=0;if(C&&C.length){this.strobe=(this.strobe+W/1.8)%1;let A=0.02;for(let k=0;k<C.length;k++)A=Math.max(A,C[k]);if(_=Math.min(0.45*$,C[Math.floor(this.strobe*C.length)%C.length]/(1.3*$)*2.2),!Number.isFinite(_))_=0}let I=new EJ;for(let A of[1,-1])I.p(...U(0.72,0.1,0)).p(...U(-0.55,0.1,A*(0.06+_/$))).end(),I.p(...U(0.72,0,0)).p(...U(-0.6,0,A*0.62)).end(),I.p(...U(0.65,0.45,0)).p(...U(-0.5,0.45,A*0.45)).end(),I.ellipse(U(-0.72,0.15,A*(0.3+_/$)),[0.18*$,0,0],[0,0.12*$,0.12*$],10);I.lines.forEach((A,k)=>N.line(A,A.length/3,k%4===0?e.white:e.blueMid,k%4===0?1.3:1,{alpha:k%4===2?0.6:0.9,hot:k%4===0}))}}function NY(J,Q,Z,K){let $=J-Z.x,W=Q-Z.y,X=Math.cos(K),Y=Math.sin(K);return[Z.x+$*X-W*Y,Z.y+$*Y+W*X]}var GY=(J,Q)=>[J[1]*Q[2]-J[2]*Q[1],J[2]*Q[0]-J[0]*Q[2],J[0]*Q[1]-J[1]*Q[0]],qY=(J)=>{let Q=Math.hypot(J[0],J[1],J[2])||1;return[J[0]/Q,J[1]/Q,J[2]/Q]},V7=(J,Q)=>[J[0]*Q,J[1]*Q,J[2]*Q];function Y$(J,Q,Z){let K=0,$=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-Z);if(X<$)$=X,K=W}return J[K]??0}var G$=null,q$=null,B7=null;function OY(J){if(B7)return B7;return B7=(async()=>{let Q;if(J&&typeof J!=="string")Q=await WebAssembly.compile(J);else{let Z=J??"./chimera.wasm",K=await fetch(Z);if(!K.ok)throw new Error(`engine: ${Z}: HTTP ${K.status}`);Q=await WebAssembly.compile(await K.arrayBuffer())}if(WebAssembly.Module.imports(Q).length)throw new Error("engine: the wasm module must not have imports");q$=(await WebAssembly.instantiate(Q,{})).exports,G$=Q})(),B7.catch(()=>B7=null),B7}function RY(){if(!G$)throw new Error("engine not loaded (await initChimera())");return G$}function NE(){if(!q$)throw new Error("engine not loaded (await initChimera())");return q$}var GE=new TextEncoder,qE=new TextDecoder;function _Q(J,Q={}){let Z=NE(),K=GE.encode(JSON.stringify({fn:J,...Q})),$=Z.chimera_alloc(K.length);new Uint8Array(Z.memory.buffer,$,K.length).set(K);let W=Z.chimera_call($,K.length);Z.chimera_free($,K.length);let X=qE.decode(new Uint8Array(Z.memory.buffer,Z.chimera_result_ptr(),Z.chimera_result_len())),Y=JSON.parse(X);if(W!==0)throw new Error(`engine ${J}: ${Y.error}`);return Y}var x9=(J,Q,Z)=>Math.max(Q,Math.min(Z,J));class E${grains=[];pulses=[];w=0.045;h=0.052;d=0.024;radius=0.0008;shape="box";quiet=0;seed=12345;constructor(){this.reset(36)}random(){return this.seed^=this.seed<<13,this.seed^=this.seed>>>17,this.seed^=this.seed<<5,(this.seed>>>0)/4294967296}reset(J){this.grains=[];for(let Q=0;Q<J;Q++){let Z=this.random()*Math.PI*2,K=Math.sqrt(this.random())*0.3;this.grains.push({x:Math.cos(Z)*this.w*K,y:Math.sin(Z)*this.h*K,z:(this.random()-0.5)*this.d*0.7,vx:0,vy:0,vz:0,r:0.7+this.random()*0.2})}this.pulses=[],this.quiet=0}step(J,Q,Z,K,$){if(J>0.1){for(let V of this.grains)V.vx=V.vy=V.vz=0;return}if(this.quiet=K<0.01?this.quiet+J:0,this.quiet>0.75)return;let W=Math.ceil(J/0.003),X=J/W,Y=Math.exp(-X*7),H=this.radius,N=(-Q[0]+Z[0]*1.2)*14,q=(-Q[1]+Z[1]*1.8)*14-1.8,U=-Q[2]*14,G=this.w/2-H,D=this.h/2-H,O=this.d/2-H;for(let V=0;V<W;V++)for(let E of this.grains){E.vx=x9((E.vx+N*X)*Y,-3,3),E.vy=x9((E.vy+q*X)*Y,-3,3),E.vz=x9((E.vz+U*X)*Y,-3,3),E.x+=E.vx*X,E.y+=E.vy*X,E.z+=E.vz*X;let F=0;if(this.shape==="box"){if(Math.abs(E.x)>G)E.x=Math.sign(E.x)*G,F=Math.abs(E.vx),E.vx=-E.vx*E.r;if(Math.abs(E.y)>D)E.y=Math.sign(E.y)*D,F=Math.max(F,Math.abs(E.vy)),E.vy=-E.vy*E.r}else{let C=E.x*E.x/(G*G)+E.y*E.y/(D*D);if(C>1){let _=Math.sqrt(C);E.x/=_,E.y/=_;let I=E.x/(G*G),A=E.y/(D*D),k=Math.hypot(I,A);I/=k,A/=k;let P=E.vx*I+E.vy*A;if(P>0)F=P,E.vx-=(1+E.r)*P*I,E.vy-=(1+E.r)*P*A}}if(Math.abs(E.z)>O)E.z=Math.sign(E.z)*O,F=Math.max(F,Math.abs(E.vz)),E.vz=-E.vz*E.r;if(F>0.1&&K>0.02&&this.pulses.length<20)this.pulses.push({x:E.x,y:E.y,t:$,strength:F})}this.pulses=this.pulses.filter((V)=>$-V.t<0.35)}}class F${x=null;y=null;center(J){let Q=Math.hypot(...J);if(Q<0.5)return;J=J.map(($)=>$/Q);let Z=[1-J[0]*J[0],-J[0]*J[1],-J[0]*J[2]],K=Math.hypot(...Z);if(K<0.1)Z=[-J[1]*J[0],1-J[1]*J[1],-J[1]*J[2]],K=Math.hypot(...Z);this.x=Z.map(($)=>$/K),this.y=[J[1]*this.x[2]-J[2]*this.x[1],J[2]*this.x[0]-J[0]*this.x[2],J[0]*this.x[1]-J[1]*this.x[0]]}project(J){if(!this.x)this.center(J);let Q=Math.hypot(...J);if(!this.x||!this.y||Q<0.5)return[0,0];return[J.reduce((Z,K,$)=>Z+K*this.x[$],0)/Q,J.reduce((Z,K,$)=>Z+K*this.y[$],0)/Q]}}var x0=(J)=>document.getElementById(J),C7=x0("field"),o0=C7.getContext("2d"),W6=x0("start"),A$=x0("touch-start"),TQ=x0("pause"),k9=new E$,SQ=new F$,L$=["jaw","tbX","tbY","ttX","ttY","ttCurl","root","lipAp","lipProt","lipWidth","labiodental","velum","larynx","epilarynx","ventricular","lateral","dorsum"],G8,I8,H9=0,Z8=!1,D$=!1,IY=!1,O$,I$,VY,V$={...GQ},c9,f8,FJ,gJ,wQ=[0,-1,0],DJ=[0,0,0],B$=[0,0,0],A7=[0,0],k7=0,pJ=0.5,P7=0.5,vQ=0,bQ=0,g8=0,MY=performance.now(),C$=0,R$=0,X6=0.62,$6=0.5,z7=0.5,mJ=!1,jQ=!0,BY=0,l9=360,x8=240,M$=!1,xJ=null,CY=null,z$=0;W6.disabled=A$.disabled=!0;var EE=(async()=>{await OY("./chimera.wasm"),O$=_Q("catalog");let J=O$.vowelTargets.male;VY=["u","a","i"].map((Z)=>L$.map((K)=>J[Z]?.artic[K]??O$.neutral[K]));let Q=await fetch("./shaker.pcm");if(!Q.ok)throw new Error("Shaker samples could not load.");if(I$=await Q.arrayBuffer(),I$.byteLength!==262144)throw new Error("Incomplete shaker samples.");IY=!0,W6.disabled=A$.disabled=!1,x0("load-status").textContent="Ready. Start with your volume low."})().catch((J)=>{throw q8("The instruments could not load. Check your connection and reload."),x0("load-status").textContent=String(J),J});function q8(J){x0("notice").textContent=J}function t8(){x0("status").textContent=Z8?"SOUND ON":"SOUND PAUSED",x0("live-led").classList.toggle("on",Z8),TQ.disabled=!I8,TQ.textContent=Z8?"Ⅱ":"▶",TQ.setAttribute("aria-label",Z8?"Pause sound":"Resume sound"),x0("sensor-status").textContent=k7&&performance.now()-k7<2000?"MOTION LIVE · PHONE SOUND":mJ?"WAITING FOR MOTION":"TOUCH / MOUSE · PHONE SOUND"}function AY(){let{DeviceMotionEvent:J,DeviceOrientationEvent:Q}=window;if(!J)return Promise.resolve(!1);let Z=[];if(typeof J.requestPermission==="function")Z.push(J.requestPermission());if(typeof Q?.requestPermission==="function")Z.push(Q.requestPermission());return Z.length?Promise.all(Z).then((K)=>K.every(($)=>$==="granted")):Promise.resolve(!0)}async function k$(J){if(D$)return;D$=!0,W6.textContent="Opening the instruments…";try{if("audioSession"in navigator)try{navigator.audioSession.type="playback"}catch{}G8??=new AudioContext({latencyHint:"interactive"});let Q=G8.resume(),Z=J?AY().catch(()=>!1):Promise.resolve(!1);await Promise.all([Q,EE]),mJ=await Z,await G8.audioWorklet.addModule("./audio-worklet.js"),I8=new AudioWorkletNode(G8,"motion-audio",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{module:RY(),pcm:I$,vowels:VY}}),I8.onprocessorerror=()=>{Z8=!1,t8(),q8("The audio engine stopped. Reload to restart it.")},I8.port.onmessage=($)=>{if($.data.type==="artic")for(let W=0;W<L$.length;W++)V$[L$[W]]=$.data.values[W];if($.data.type==="error")Z8=!1,t8(),q8("The audio engine stopped. Reload to restart it.")};let K=G8.createGain();if(K.gain.value=0.8,I8.connect(K),K.connect(G8.destination),Z8=!0,x0("welcome").hidden=!0,x0("gesture-caption").hidden=!1,mJ)jQ=!0,SQ.x=null,q8("Hold your phone comfortably, tap CENTRE, then move gently.");else q8(J?"Motion is unavailable or permission was declined. Drag to play; try opening this link in Safari or Chrome.":"Drag across the display to play. On a phone, tap “Enable motion” below to use its sensors.");t8(),e8(!0)}catch(Q){q8(`Could not start sound: ${Q instanceof Error?Q.message:String(Q)}. Try Safari or Chrome.`),W6.textContent="Try enabling sound again"}finally{D$=!1}}W6.addEventListener("click",()=>k$(!0));A$.addEventListener("click",()=>k$(!1));TQ.addEventListener("click",async()=>{if(!G8)return;await G8.resume(),Z8=!Z8,t8(),e8(!0)});x0("centre").addEventListener("click",()=>{SQ.center(wQ),CY=z$,pJ=P7=0.5,$6=z7=0.5,q8("Centred on this grip.")});x0("test").addEventListener("click",async()=>{if(!I8){if(await k$(!1),!I8)return}if(G8?.state!=="running")await G8?.resume();Z8=!0,pJ=0.5,P7=0.5,vQ=performance.now()+1000,bQ=performance.now()+220,BY=performance.now(),t8(),e8(!0)});x0("sensitivity").addEventListener("input",(J)=>{X6=Number(J.target.value)/100,x0("sensitivity-output").textContent=String(Math.round(X6*100)).padStart(2,"0")});document.querySelectorAll("[data-mode]").forEach((J)=>J.addEventListener("click",()=>FE(Number(J.dataset.mode))));function FE(J){if(H9=J,g8=0,bQ=0,k9.reset(k9.grains.length),document.querySelectorAll("[data-mode]").forEach((Q)=>{let Z=Number(Q.dataset.mode)===H9;Q.classList.toggle("selected",Z),Q.setAttribute("aria-pressed",String(Z))}),x0("chamber").hidden=H9!==0,x0("touch-pad").hidden=H9===0,x0("touch-pad").setAttribute("aria-valuemax",H9===2?"880":"1760"),x0("screen-name").textContent=["LOOSE GRAIN CHAMBER","CONTINUOUS THEREMIN","LIVE VOCAL ANATOMY"][H9],x0("screen-detail").textContent=["XYZ","110—1760 HZ","CHIMERA"][H9],x0("gesture-caption").textContent=H9===0?"SHAKE IN ANY DIRECTION · DRAG TO RATTLE":H9===1?"SIDE TILT: PITCH · FORWARD / BACK: VOWEL":"TILT TO SING · DRAG THE HEAD TO ROTATE",x0("description").innerHTML=["A handful of grains.<br>A chamber in your hand.<br>Every movement has a texture.","A continuous voice.<br>No keys. No steps.<br>Just the shape of a gesture.","A living vocal tract.<br>Tongue, lips and breath.<br>Play the anatomy of a voice."][H9],x0("voice-credit").textContent=H9===2?"CHIMERA · JAMESON HODGE":"PLAYED BY MOVEMENT",x0("x-label").textContent=H9===0?"X / Y":"PITCH",x0("y-label").textContent=H9===0?"ENERGY":"VOWEL",x0("z-label").textContent=H9===0?"Z":"BREATH Z",C7.hidden=H9===2,x0("head").hidden=H9!==2,H9===2&&IY)DE();t8(),e8(!0)}function DE(){if(f8)return;try{let J=x0("head");f8=new mK({alpha:!0,antialias:!0,powerPreference:"low-power"}),f8.setPixelRatio(Math.min(devicePixelRatio,1.5)),f8.setClearColor(0,0),J.appendChild(f8.domElement),c9=new N$,c9.centred=!0;let Q=_Q("model",{body:{female:0,child:0},sampleRate:G8?.sampleRate??48000}),Z=Q.body.scale,K=Q.body.pharynx;gJ={bodyParams:Q.body,tract:{scale:Z,P:(W,X)=>({x:(W>0.5?0.5+(W-0.5)*0.86:W)*Z,y:(X<7?7-(7-X)*K:X)*Z}),unP:(W,X)=>({x:W/Z>0.5?0.5+(W/Z-0.5)/0.86:W/Z,y:X/Z<7?7-(7-X/Z)/K:X/Z})},frame:(W)=>_Q("frame",{model:Q.model,artic:W})},yQ();let $=c9.poses(gJ);c9.camera.position.copy($.home),c9.camera.lookAt($.target),FJ=new cK(c9.camera,f8.domElement),FJ.target.copy($.target),FJ.enablePan=FJ.enableZoom=!1,FJ.update()}catch(J){q8("The 3D view is unavailable in this browser. The voice can still play."),console.error(J)}}function yQ(){let J=C7.getBoundingClientRect(),Q=x0("glass");l9=Q.clientWidth,x8=Q.clientHeight-71;let Z=Math.min(devicePixelRatio,2);if(C7.width=Math.round(l9*Z),C7.height=Math.round(x8*Z),o0.setTransform(Z,0,0,Z,0,0),f8&&c9){if(f8.setSize(l9,x8),c9.resize(l9,x8),gJ&&FJ){let K=c9.poses(gJ);c9.camera.position.copy(K.home),FJ.target.copy(K.target),FJ.update()}}}addEventListener("resize",yQ);new ResizeObserver(yQ).observe(x0("glass"));yQ();addEventListener("devicemotion",(J)=>{if(!mJ)return;let{acceleration:Q,accelerationIncludingGravity:Z}=J;if(!Z||Z.x==null||Z.y==null||Z.z==null)return;if(k7=performance.now(),DJ=[Q?.x??0,Q?.y??0,Q?.z??0].map((W)=>W/9.80665),wQ=[Z.x-(Q?.x??0),Z.y-(Q?.y??0),Z.z-(Q?.z??0)].map((W)=>W/9.80665),B$=[J.rotationRate?.alpha??0,J.rotationRate?.beta??0,J.rotationRate?.gamma??0].map((W)=>W*Math.PI/180),jQ)SQ.center(wQ),CY=z$,jQ=!1;A7=SQ.project(wQ);let $=Math.max(0,Math.hypot(...DJ)-0.035)*1.8+Math.max(0,Math.hypot(...B$)-0.15)*0.08;g8=Math.max(g8,x9($*(0.5+X6),0,1)),e8(!1),t8()},{passive:!0});addEventListener("deviceorientation",(J)=>{if(J.gamma!=null)z$=J.gamma},{passive:!0});function P$(J=performance.now()){let Q=J<vQ||!mJ||J-k7>1500,Z=Q?pJ:x9(0.5+Math.asin(x9(A7[0],-1,1))/Math.PI*(0.5+X6),0,1),K=Q?P7:x9(0.5-A7[1]*(0.7+X6),0,1);return $6+=(Z-$6)*0.35,z7+=(K-z7)*0.35,{frequency:110*Math.pow(2,$6*(H9===2?3:4)),vowel:z7,breath:x9(0.55-DJ[2]*0.65,0.05,1)}}function e8(J){if(!I8)return;let Q=performance.now();if(!J&&Q-C$<9)return;C$=Q;let Z=P$(Q);I8.port.postMessage({type:"state",mode:H9,enabled:Z8,...Z,effort:Math.max(g8,Q<bQ?0.65:0)})}function LY(J){let Q=J.currentTarget,Z=Q.getBoundingClientRect(),K=x9((J.clientX-Z.left)/Z.width,0,1),$=x9((J.clientY-Z.top)/Z.height,0,1),W=performance.now();if(pJ=K,P7=1-$,vQ=W+2000,BY=W,xJ&&H9===0){let Y=Math.max(8,W-xJ.t),H=(K-xJ.x)/Y*1000,N=($-xJ.y)/Y*1000;g8=Math.max(g8,x9(Math.hypot(H,N)*0.13,0,1)),DJ=[x9(H*0.3,-2,2),x9(-N*0.3,-2,2),0]}xJ={x:K,y:$,t:W};let X=x0("touch-pad").querySelector("i");X.style.left=`${K*100}%`,X.style.top=`${$*100}%`,x0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,K*(H9===2?3:4))))),e8(!0)}for(let J of[C7,x0("touch-pad")]){J.addEventListener("pointerdown",(Z)=>{if(!I8)return;M$=!0,xJ=null,J.setPointerCapture(Z.pointerId),LY(Z)}),J.addEventListener("pointermove",(Z)=>{if(M$)LY(Z)});let Q=()=>{M$=!1,xJ=null};J.addEventListener("pointerup",Q),J.addEventListener("pointercancel",Q)}x0("touch-pad").addEventListener("keydown",(J)=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(J.key))J.preventDefault(),pJ=x9(pJ+(J.key==="ArrowRight"?0.025:J.key==="ArrowLeft"?-0.025:0),0,1),P7=x9(P7+(J.key==="ArrowUp"?0.05:J.key==="ArrowDown"?-0.05:0),0,1),vQ=performance.now()+3000,x0("touch-pad").setAttribute("aria-valuenow",String(Math.round(110*Math.pow(2,pJ*(H9===2?3:4))))),e8(!0)});function OE(){let J=Number(x0("size").value)/1000;k9.shape=x0("shape").value,k9.w=J,k9.h=k9.shape==="circle"?J:k9.shape==="oval"?J*0.62:J*1.12,k9.radius=Number(x0("grain-size").value)/2000,k9.reset(Number(x0("fill").value))}for(let J of["shape","fill","size","grain-size"])x0(J).addEventListener("input",OE);function RE(J,Q){if(o0.clearRect(0,0,l9,x8),o0.save(),o0.translate(l9/2,x8/2),H9===0){let Z=Math.min((l9-70)/k9.w,(x8-48)/k9.h),K=k9.w*Z/2,$=k9.h*Z/2;if(o0.lineWidth=1,o0.strokeStyle="#8b9b6e77",o0.beginPath(),k9.shape==="box")o0.roundRect(-K,-$,K*2,$*2,12);else o0.ellipse(0,0,K,$,0,0,Math.PI*2);o0.stroke();for(let X of k9.pulses){let Y=J/1000-X.t;if(Y<0||Y>0.35)continue;o0.strokeStyle=`rgba(233,180,94,${(1-Y/0.35)*0.5})`,o0.lineWidth=1,o0.beginPath(),o0.arc(X.x*Z,-X.y*Z,3+Y*90,0,Math.PI*2),o0.stroke()}let W=[...k9.grains].sort((X,Y)=>X.z-Y.z);for(let X of W){let Y=1+X.z*4;o0.fillStyle=`rgba(216,202,150,${0.4+(X.z/k9.d+0.5)*0.5})`,o0.beginPath(),o0.arc(X.x*Z,-X.y*Z,Math.max(1.5,k9.radius*Z)*Y,0,Math.PI*2),o0.fill()}}else{o0.strokeStyle="#70876233",o0.lineWidth=1;for(let X=-2;X<=2;X++)o0.beginPath(),o0.moveTo(-l9*0.4,X*x8*0.14),o0.lineTo(l9*0.4,X*x8*0.14),o0.stroke();let Z=P$(J),K=Z8?1:0.2;o0.strokeStyle=`rgba(209,195,145,${K})`,o0.lineWidth=1.4,o0.beginPath();for(let X=-l9*0.42;X<=l9*0.42;X+=2){let Y=Math.sin((X/l9*7+J/1600)*Math.PI*2)*(12+z7*25)*Math.sin((X/l9+0.42)/0.84*Math.PI);if(X===-l9*0.42)o0.moveTo(X,Y);else o0.lineTo(X,Y)}o0.stroke();let $=($6-0.5)*l9*0.7,W=(0.5-z7)*x8*0.65;o0.fillStyle="#ead9aa",o0.beginPath(),o0.arc($,W,4,0,Math.PI*2),o0.fill()}o0.restore()}function zY(J){requestAnimationFrame(zY);let Q=Math.min(0.05,(J-MY)/1000);if(MY=J,g8*=Math.exp(-Q/0.06),g8<0.004)g8=0;if(!k7||J-k7>500)DJ=DJ.map((K)=>K*Math.exp(-Q/0.05)),B$=[0,0,0];let Z=Math.max(g8,J<bQ?0.65:0);if(k9.step(Q,DJ,A7,Z,J/1000),H9===0||H9===1)RE(J,Q);else if(c9&&f8&&gJ&&J-R$>40){let K=Math.min(0.08,(J-R$)/1000);R$=J,c9.face.update(null,K),c9.update(gJ,gJ.frame(V$),V$,null,{pressure:!1,particles:!1,calipers:!1,grid:!1},K),f8.render(c9.scene,c9.camera)}if(J-C$>30)e8(!1);if(Math.floor(J/100)!==Math.floor((J-Q*1000)/100)){let K=P$(J);x0("xy-value").textContent=H9===0?`${Math.round(A7[0]*99).toString().padStart(2,"0")} / ${Math.round(A7[1]*99).toString().padStart(2,"0")}`:`${Math.round(K.frequency)} HZ`,x0("energy-value").textContent=H9===0?String(Math.round(Z*127)).padStart(3,"0"):["OO","OO–AH","AH","AH–EE","EE"][Math.min(4,Math.floor(K.vowel*5))],x0("z-value").textContent=String(Math.round((H9===0?Math.abs(DJ[2]):K.breath)*100)).padStart(3,"0")}}requestAnimationFrame(zY);document.addEventListener("visibilitychange",()=>{if(document.hidden&&I8)Z8=!1,e8(!0),t8(),G8?.suspend(),q8("Sound paused while you were away. Tap ▶ to resume.")});x0("share").addEventListener("click",async()=>{try{let J=location.origin+location.pathname;if(navigator.share)await navigator.share({title:"Kaizen Motion",text:"Your phone is an instrument. Shake, tilt, play.",url:J});else await navigator.clipboard.writeText(J),q8("Link copied. Share it anywhere.")}catch(J){if(J.name!=="AbortError")q8("Copy this page’s address to share Motion.")}});var _$=document.createElement("button");_$.textContent="Enable motion";_$.addEventListener("click",async()=>{mJ=await AY().catch(()=>!1),jQ=!0,q8(mJ?"Motion enabled. Hold comfortably and tap CENTRE.":"Motion permission is unavailable here. Open in Safari/Chrome or keep playing with touch."),t8()});document.querySelector("footer nav")?.appendChild(_$);
