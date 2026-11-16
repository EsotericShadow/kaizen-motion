var NK="186",i8={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},o8={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},GK=0,AQ=1,qK=2;var N6=1,FK=2,mJ=3,dJ=0,p9=1,E8=2,D8=0,G6=1,zQ=2,PQ=3,kQ=4,Z7=5;var uJ=100,EK=101,DK=102,OK=103,K7=104,RK=200,MK=201,LK=202,IK=203,VK=204,BK=205,CK=206,AK=207,zK=208,PK=209,kK=210,_K=211,wK=212,TK=213,SK=214,jK=0,vK=1,bK=2,_Q=3,yK=4,hK=5,fK=6,xK=7,gK=0,pK=1,mK=2,Y8=0,wQ=1,TQ=2,SQ=3,jQ=4,vQ=5,bQ=6,yQ=7;var lJ=301,WJ=302,W7=303,X7=304,q6=306,dK=1000,Y7=1001,uK=1002,a8=1003,lK=1004;var F6=1005;var m9=1006,H7=1007;var XJ=1008;var H8=1009,cK=1010,nK=1011,E6=1012,hQ=1013,r8=1014,b8=1015,O8=1016,fQ=1017,xQ=1018,cJ=1020,sK=35902,iK=35899,oK=1021,aK=1022,R8=1023,YJ=1026,HJ=1027,rK=1028,gQ=1029,UJ=1030,pQ=1031;var mQ=1033,U7=33776,N7=33777,G7=33778,q7=33779,dQ=35840,uQ=35841,lQ=35842,cQ=35843,nQ=36196,sQ=37492,iQ=37496,oQ=37488,aQ=37489,F7=37490,rQ=37491,tQ=37808,eQ=37809,J$=37810,Q$=37811,$$=37812,Z$=37813,K$=37814,W$=37815,X$=37816,Y$=37817,H$=37818,U$=37819,N$=37820,G$=37821,q$=36492,F$=36494,E$=36495,D$=36283,O$=36284,E7=36285,R$=36286;var M$=0,tK=1,NJ="",eK="srgb",L$="srgb-linear",I$="linear",H9="srgb";var JW=512,QW=513,$W=514,D7=515,ZW=516,KW=517,O7=518,WW=519;var R7=35048;var V$="300 es",B$=2000;function wX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function TX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function H6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function XW(){let J=H6("canvas");return J.style.display="block",J}var dZ={},gJ=null;function U6(...J){let Q="THREE."+J.shift();if(gJ)gJ("log",Q,...J);else console.log(Q,...J)}function YW(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function j0(...J){J=YW(J);let Q="THREE."+J.shift();if(gJ)gJ("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function b0(...J){J=YW(J);let Q="THREE."+J.shift();if(gJ)gJ("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function KJ(...J){let Q=J.join(" ");if(Q in dZ)return;dZ[Q]=!0,j0(...J)}function HW(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var UW={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class M8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var w9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uZ=1234567,X6=Math.PI/180,pJ=180/Math.PI;function j8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(w9[J&255]+w9[J>>8&255]+w9[J>>16&255]+w9[J>>24&255]+"-"+w9[Q&255]+w9[Q>>8&255]+"-"+w9[Q>>16&15|64]+w9[Q>>24&255]+"-"+w9[$&63|128]+w9[$>>8&255]+"-"+w9[$>>16&255]+w9[$>>24&255]+w9[Z&255]+w9[Z>>8&255]+w9[Z>>16&255]+w9[Z>>24&255]).toLowerCase()}function x0(J,Q,$){return Math.max(Q,Math.min($,J))}function C$(J,Q){return(J%Q+Q)%Q}function SX(J,Q,$,Z,K){return Z+(J-Q)*(K-Z)/($-Q)}function jX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function Y6(J,Q,$){return(1-$)*J+$*Q}function vX(J,Q,$,Z){return Y6(J,Q,1-Math.exp(-$*Z))}function bX(J,Q=1){return Q-Math.abs(C$(J,Q*2)-Q)}function yX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function hX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function fX(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function xX(J,Q){return J+Math.random()*(Q-J)}function gX(J){return J*(0.5-Math.random())}function pX(J){if(J!==void 0)uZ=J;let Q=uZ+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function mX(J){return J*X6}function dX(J){return J*pJ}function uX(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function lX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function cX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function nX(J,Q,$,Z,K){let{cos:W,sin:X}=Math,Y=W($/2),H=X($/2),N=W((Q+Z)/2),q=X((Q+Z)/2),U=W((Q-Z)/2),G=X((Q-Z)/2),E=W((Z-Q)/2),O=X((Z-Q)/2);switch(K){case"XYX":J.set(Y*q,H*U,H*G,Y*N);break;case"YZY":J.set(H*G,Y*q,H*U,Y*N);break;case"ZXZ":J.set(H*U,H*G,Y*q,Y*N);break;case"XZX":J.set(Y*q,H*O,H*E,Y*N);break;case"YXY":J.set(H*E,Y*q,H*O,Y*N);break;case"ZYZ":J.set(H*O,H*E,Y*q,Y*N);break;default:j0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function X8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Q9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var D6={DEG2RAD:X6,RAD2DEG:pJ,generateUUID:j8,clamp:x0,euclideanModulo:C$,mapLinear:SX,inverseLerp:jX,lerp:Y6,damp:vX,pingpong:bX,smoothstep:yX,smootherstep:hX,randInt:fX,randFloat:xX,randFloatSpread:gX,seededRandom:pX,degToRad:mX,radToDeg:dX,isPowerOfTwo:uX,ceilPowerOfTwo:lX,floorPowerOfTwo:cX,setQuaternionFromProperEuler:nX,normalize:Q9,denormalize:X8};class h0{static{h0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=x0(this.x,J.x,Q.x),this.y=x0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=x0(this.x,J,Q),this.y=x0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(x0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(x0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class d9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],H=$[Z+1],N=$[Z+2],q=$[Z+3],U=K[W+0],G=K[W+1],E=K[W+2],O=K[W+3];if(q!==O||Y!==U||H!==G||N!==E){let B=Y*U+H*G+N*E+q*O;if(B<0)U=-U,G=-G,E=-E,O=-O,B=-B;let D=1-X;if(B<0.9995){let F=Math.acos(B),C=Math.sin(F);D=Math.sin(D*F)/C,X=Math.sin(X*F)/C,Y=Y*D+U*X,H=H*D+G*X,N=N*D+E*X,q=q*D+O*X}else{Y=Y*D+U*X,H=H*D+G*X,N=N*D+E*X,q=q*D+O*X;let F=1/Math.sqrt(Y*Y+H*H+N*N+q*q);Y*=F,H*=F,N*=F,q*=F}}J[Q]=Y,J[Q+1]=H,J[Q+2]=N,J[Q+3]=q}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],H=$[Z+2],N=$[Z+3],q=K[W],U=K[W+1],G=K[W+2],E=K[W+3];return J[Q]=X*E+N*q+Y*G-H*U,J[Q+1]=Y*E+N*U+H*q-X*G,J[Q+2]=H*E+N*G+X*U-Y*q,J[Q+3]=N*E-X*q-Y*U-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,H=X($/2),N=X(Z/2),q=X(K/2),U=Y($/2),G=Y(Z/2),E=Y(K/2);switch(W){case"XYZ":this._x=U*N*q+H*G*E,this._y=H*G*q-U*N*E,this._z=H*N*E+U*G*q,this._w=H*N*q-U*G*E;break;case"YXZ":this._x=U*N*q+H*G*E,this._y=H*G*q-U*N*E,this._z=H*N*E-U*G*q,this._w=H*N*q+U*G*E;break;case"ZXY":this._x=U*N*q-H*G*E,this._y=H*G*q+U*N*E,this._z=H*N*E+U*G*q,this._w=H*N*q-U*G*E;break;case"ZYX":this._x=U*N*q-H*G*E,this._y=H*G*q+U*N*E,this._z=H*N*E-U*G*q,this._w=H*N*q+U*G*E;break;case"YZX":this._x=U*N*q+H*G*E,this._y=H*G*q+U*N*E,this._z=H*N*E-U*G*q,this._w=H*N*q-U*G*E;break;case"XZY":this._x=U*N*q-H*G*E,this._y=H*G*q-U*N*E,this._z=H*N*E+U*G*q,this._w=H*N*q+U*G*E;break;default:j0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],N=Q[6],q=Q[10],U=$+X+q;if(U>0){let G=0.5/Math.sqrt(U+1);this._w=0.25/G,this._x=(N-Y)*G,this._y=(K-H)*G,this._z=(W-Z)*G}else if($>X&&$>q){let G=2*Math.sqrt(1+$-X-q);this._w=(N-Y)/G,this._x=0.25*G,this._y=(Z+W)/G,this._z=(K+H)/G}else if(X>q){let G=2*Math.sqrt(1+X-$-q);this._w=(K-H)/G,this._x=(Z+W)/G,this._y=0.25*G,this._z=(Y+N)/G}else{let G=2*Math.sqrt(1+q-$-X);this._w=(W-Z)/G,this._x=(K+H)/G,this._y=(Y+N)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(x0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,N=Q._w;return this._x=$*N+W*X+Z*H-K*Y,this._y=Z*N+W*Y+K*X-$*H,this._z=K*N+W*H+$*Y-Z*X,this._w=W*N-$*X-Z*Y-K*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),N=Math.sin(H);Y=Math.sin(Y*H)/N,Q=Math.sin(Q*H)/N,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{x.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(lZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(lZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*Z-X*$),N=2*(X*Q-K*Z),q=2*(K*$-W*Q);return this.x=Q+Y*H+W*q-X*N,this.y=$+Y*N+X*H-K*q,this.z=Z+Y*q+K*N-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=x0(this.x,J.x,Q.x),this.y=x0(this.y,J.y,Q.y),this.z=x0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=x0(this.x,J,Q),this.y=x0(this.y,J,Q),this.z=x0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(x0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return ZQ.copy(this).projectOnVector(J),this.sub(ZQ)}reflect(J){return this.sub(ZQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(x0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ZQ=new x,lZ=new d9;class f0{static{f0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,H)}set(J,Q,$,Z,K,W,X,Y,H){let N=this.elements;return N[0]=J,N[1]=Z,N[2]=X,N[3]=Q,N[4]=K,N[5]=Y,N[6]=$,N[7]=W,N[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],H=$[1],N=$[4],q=$[7],U=$[2],G=$[5],E=$[8],O=Z[0],B=Z[3],D=Z[6],F=Z[1],C=Z[4],_=Z[7],I=Z[2],A=Z[5],P=Z[8];return K[0]=W*O+X*F+Y*I,K[3]=W*B+X*C+Y*A,K[6]=W*D+X*_+Y*P,K[1]=H*O+N*F+q*I,K[4]=H*B+N*C+q*A,K[7]=H*D+N*_+q*P,K[2]=U*O+G*F+E*I,K[5]=U*B+G*C+E*A,K[8]=U*D+G*_+E*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8];return Q*W*N-Q*X*H-$*K*N+$*X*Y+Z*K*H-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=N*W-X*H,U=X*Y-N*K,G=H*K-W*Y,E=Q*q+$*U+Z*G;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/E;return J[0]=q*O,J[1]=(Z*H-N*$)*O,J[2]=(X*$-Z*W)*O,J[3]=U*O,J[4]=(N*Q-Z*Y)*O,J[5]=(Z*K-X*Q)*O,J[6]=G*O,J[7]=($*Y-H*Q)*O,J[8]=(W*Q-$*K)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),H=Math.sin(K);return this.set($*Y,$*H,-$*(Y*W+H*X)+W+J,-Z*H,Z*Y,-Z*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return KJ("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(KQ.makeScale(J,Q)),this}rotate(J){return KJ("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(KQ.makeRotation(-J)),this}translate(J,Q){return KJ("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(KQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var KQ=new f0,cZ=new f0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),nZ=new f0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function sX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=v8(K.r),K.g=v8(K.g),K.b=v8(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=xJ(K.r),K.g=xJ(K.g),K.b=xJ(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return KJ("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return KJ("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:cZ,fromXYZ:nZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:cZ,fromXYZ:nZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var s0=sX();function v8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function xJ(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var CJ;class A${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(CJ===void 0)CJ=H6("canvas");CJ.width=J.width,CJ.height=J.height;let Z=CJ.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=CJ}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=H6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=v8(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(v8(Q[$]/255)*255);else Q[$]=v8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return j0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var iX=0;class O6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iX++}),this.uuid=j8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement!=="undefined"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame!=="undefined"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(WQ(Z[W].image));else K.push(WQ(Z[W]))}else K=WQ(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function WQ(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return A$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return j0("Texture: Unable to serialize Texture."),{}}var oX=0,XQ=new x;class S9 extends M8{constructor(J=S9.DEFAULT_IMAGE,Q=S9.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,H=S9.DEFAULT_ANISOTROPY,N=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:oX++}),this.uuid=j8(),this.name="",this.source=new O6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new h0(0,0),this.repeat=new h0(1,1),this.center=new h0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new f0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=N,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(XQ).x}get height(){return this.source.getSize(XQ).y}get depth(){return this.source.getSize(XQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){j0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){j0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}S9.DEFAULT_IMAGE=null;S9.DEFAULT_MAPPING=300;S9.DEFAULT_ANISOTROPY=1;class Z9{static{Z9.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,H=Y[0],N=Y[4],q=Y[8],U=Y[1],G=Y[5],E=Y[9],O=Y[2],B=Y[6],D=Y[10];if(Math.abs(N-U)<0.01&&Math.abs(q-O)<0.01&&Math.abs(E-B)<0.01){if(Math.abs(N+U)<0.1&&Math.abs(q+O)<0.1&&Math.abs(E+B)<0.1&&Math.abs(H+G+D-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(H+1)/2,_=(G+1)/2,I=(D+1)/2,A=(N+U)/4,P=(q+O)/4,k=(E+B)/4;if(C>_&&C>I)if(C<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(C),Z=A/$,K=P/$;else if(_>I)if(_<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(_),$=A/Z,K=k/Z;else if(I<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(I),$=P/K,Z=k/K;return this.set($,Z,K,Q),this}let F=Math.sqrt((B-E)*(B-E)+(q-O)*(q-O)+(U-N)*(U-N));if(Math.abs(F)<0.001)F=1;return this.x=(B-E)/F,this.y=(q-O)/F,this.z=(U-N)/F,this.w=Math.acos((H+G+D-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=x0(this.x,J.x,Q.x),this.y=x0(this.y,J.y,Q.y),this.z=x0(this.z,J.z,Q.z),this.w=x0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=x0(this.x,J,Q),this.y=x0(this.y,J,Q),this.z=x0(this.z,J,Q),this.w=x0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(x0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z$ extends M8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new Z9(0,0,J,Q),this.scissorTest=!1,this.viewport=new Z9(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new S9(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new O6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class s9 extends z${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class M7 extends S9{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class P$ extends S9{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class E9{static{E9.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,H,N,q,U,G,E,O,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,H,N,q,U,G,E,O,B)}set(J,Q,$,Z,K,W,X,Y,H,N,q,U,G,E,O,B){let D=this.elements;return D[0]=J,D[4]=Q,D[8]=$,D[12]=Z,D[1]=K,D[5]=W,D[9]=X,D[13]=Y,D[2]=H,D[6]=N,D[10]=q,D[14]=U,D[3]=G,D[7]=E,D[11]=O,D[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new E9().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/AJ.setFromMatrixColumn(J,0).length(),K=1/AJ.setFromMatrixColumn(J,1).length(),W=1/AJ.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),H=Math.sin(Z),N=Math.cos(K),q=Math.sin(K);if(J.order==="XYZ"){let U=W*N,G=W*q,E=X*N,O=X*q;Q[0]=Y*N,Q[4]=-Y*q,Q[8]=H,Q[1]=G+E*H,Q[5]=U-O*H,Q[9]=-X*Y,Q[2]=O-U*H,Q[6]=E+G*H,Q[10]=W*Y}else if(J.order==="YXZ"){let U=Y*N,G=Y*q,E=H*N,O=H*q;Q[0]=U+O*X,Q[4]=E*X-G,Q[8]=W*H,Q[1]=W*q,Q[5]=W*N,Q[9]=-X,Q[2]=G*X-E,Q[6]=O+U*X,Q[10]=W*Y}else if(J.order==="ZXY"){let U=Y*N,G=Y*q,E=H*N,O=H*q;Q[0]=U-O*X,Q[4]=-W*q,Q[8]=E+G*X,Q[1]=G+E*X,Q[5]=W*N,Q[9]=O-U*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let U=W*N,G=W*q,E=X*N,O=X*q;Q[0]=Y*N,Q[4]=E*H-G,Q[8]=U*H+O,Q[1]=Y*q,Q[5]=O*H+U,Q[9]=G*H-E,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let U=W*Y,G=W*H,E=X*Y,O=X*H;Q[0]=Y*N,Q[4]=O-U*q,Q[8]=E*q+G,Q[1]=q,Q[5]=W*N,Q[9]=-X*N,Q[2]=-H*N,Q[6]=G*q+E,Q[10]=U-O*q}else if(J.order==="XZY"){let U=W*Y,G=W*H,E=X*Y,O=X*H;Q[0]=Y*N,Q[4]=-q,Q[8]=H*N,Q[1]=U*q+O,Q[5]=W*N,Q[9]=G*q-E,Q[2]=E*q-G,Q[6]=X*N,Q[10]=O*q+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(aX,J,rX)}lookAt(J,Q,$){let Z=this.elements;if(c9.subVectors(J,Q),c9.lengthSq()===0)c9.z=1;if(c9.normalize(),d8.crossVectors($,c9),d8.lengthSq()===0){if(Math.abs($.z)===1)c9.x+=0.0001;else c9.z+=0.0001;c9.normalize(),d8.crossVectors($,c9)}return d8.normalize(),f6.crossVectors(c9,d8),Z[0]=d8.x,Z[4]=f6.x,Z[8]=c9.x,Z[1]=d8.y,Z[5]=f6.y,Z[9]=c9.y,Z[2]=d8.z,Z[6]=f6.z,Z[10]=c9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],H=$[12],N=$[1],q=$[5],U=$[9],G=$[13],E=$[2],O=$[6],B=$[10],D=$[14],F=$[3],C=$[7],_=$[11],I=$[15],A=Z[0],P=Z[4],k=Z[8],L=Z[12],V=Z[1],m=Z[5],j=Z[9],y=Z[13],d=Z[2],w=Z[6],S=Z[10],n=Z[14],u=Z[3],K0=Z[7],i=Z[11],$0=Z[15];return K[0]=W*A+X*V+Y*d+H*u,K[4]=W*P+X*m+Y*w+H*K0,K[8]=W*k+X*j+Y*S+H*i,K[12]=W*L+X*y+Y*n+H*$0,K[1]=N*A+q*V+U*d+G*u,K[5]=N*P+q*m+U*w+G*K0,K[9]=N*k+q*j+U*S+G*i,K[13]=N*L+q*y+U*n+G*$0,K[2]=E*A+O*V+B*d+D*u,K[6]=E*P+O*m+B*w+D*K0,K[10]=E*k+O*j+B*S+D*i,K[14]=E*L+O*y+B*n+D*$0,K[3]=F*A+C*V+_*d+I*u,K[7]=F*P+C*m+_*w+I*K0,K[11]=F*k+C*j+_*S+I*i,K[15]=F*L+C*y+_*n+I*$0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],N=J[2],q=J[6],U=J[10],G=J[14],E=J[3],O=J[7],B=J[11],D=J[15],F=Y*G-H*U,C=X*G-H*q,_=X*U-Y*q,I=W*G-H*N,A=W*U-Y*N,P=W*q-X*N;return Q*(O*F-B*C+D*_)-$*(E*F-B*I+D*A)+Z*(E*C-O*I+D*P)-K*(E*_-O*A+B*P)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],N=J[10];return Q*(W*N-X*H)-$*(K*N-X*Y)+Z*(K*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],N=J[8],q=J[9],U=J[10],G=J[11],E=J[12],O=J[13],B=J[14],D=J[15],F=Q*X-$*W,C=Q*Y-Z*W,_=Q*H-K*W,I=$*Y-Z*X,A=$*H-K*X,P=Z*H-K*Y,k=N*O-q*E,L=N*B-U*E,V=N*D-G*E,m=q*B-U*O,j=q*D-G*O,y=U*D-G*B,d=F*y-C*j+_*m+I*V-A*L+P*k;if(d===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/d;return J[0]=(X*y-Y*j+H*m)*w,J[1]=(Z*j-$*y-K*m)*w,J[2]=(O*P-B*A+D*I)*w,J[3]=(U*A-q*P-G*I)*w,J[4]=(Y*V-W*y-H*L)*w,J[5]=(Q*y-Z*V+K*L)*w,J[6]=(B*_-E*P-D*C)*w,J[7]=(N*P-U*_+G*C)*w,J[8]=(W*j-X*V+H*k)*w,J[9]=($*V-Q*j-K*k)*w,J[10]=(E*A-O*_+D*F)*w,J[11]=(q*_-N*A-G*F)*w,J[12]=(X*L-W*m-Y*k)*w,J[13]=(Q*m-$*L+Z*k)*w,J[14]=(O*C-E*I-B*F)*w,J[15]=(N*I-q*C+U*F)*w,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,H=K*W,N=K*X;return this.set(H*W+$,H*X-Z*Y,H*Y+Z*X,0,H*X+Z*Y,N*X+$,N*Y-Z*W,0,H*Y-Z*X,N*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=K+K,N=W+W,q=X+X,U=K*H,G=K*N,E=K*q,O=W*N,B=W*q,D=X*q,F=Y*H,C=Y*N,_=Y*q,I=$.x,A=$.y,P=$.z;return Z[0]=(1-(O+D))*I,Z[1]=(G+_)*I,Z[2]=(E-C)*I,Z[3]=0,Z[4]=(G-_)*A,Z[5]=(1-(U+D))*A,Z[6]=(B+F)*A,Z[7]=0,Z[8]=(E+C)*P,Z[9]=(B-F)*P,Z[10]=(1-(U+O))*P,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=AJ.set(Z[0],Z[1],Z[2]).length(),X=AJ.set(Z[4],Z[5],Z[6]).length(),Y=AJ.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;Z8.copy(this);let H=1/W,N=1/X,q=1/Y;return Z8.elements[0]*=H,Z8.elements[1]*=H,Z8.elements[2]*=H,Z8.elements[4]*=N,Z8.elements[5]*=N,Z8.elements[6]*=N,Z8.elements[8]*=q,Z8.elements[9]*=q,Z8.elements[10]*=q,Q.setFromRotationMatrix(Z8),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let H=this.elements,N=2*K/(Q-J),q=2*K/($-Z),U=(Q+J)/(Q-J),G=($+Z)/($-Z),E,O;if(Y)E=K/(W-K),O=W*K/(W-K);else if(X===2000)E=-(W+K)/(W-K),O=-2*W*K/(W-K);else if(X===2001)E=-W/(W-K),O=-W*K/(W-K);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=U,H[12]=0,H[1]=0,H[5]=q,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let H=this.elements,N=2/(Q-J),q=2/($-Z),U=-(Q+J)/(Q-J),G=-($+Z)/($-Z),E,O;if(Y)E=1/(W-K),O=W/(W-K);else if(X===2000)E=-2/(W-K),O=-(W+K)/(W-K);else if(X===2001)E=-1/(W-K),O=-K/(W-K);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=N,H[4]=0,H[8]=0,H[12]=U,H[1]=0,H[5]=q,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var AJ=new x,Z8=new E9,aX=new x(0,0,0),rX=new x(1,1,1),d8=new x,f6=new x,c9=new x,sZ=new E9,iZ=new d9;class F8{constructor(J=0,Q=0,$=0,Z=F8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],H=Z[5],N=Z[9],q=Z[2],U=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(x0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-N,G),this._z=Math.atan2(-W,K);else this._x=Math.atan2(U,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-x0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(X,G),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-q,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(x0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-q,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-x0(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(U,G),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(x0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-N,H),this._y=Math.atan2(-q,K);else this._x=0,this._y=Math.atan2(X,G);break;case"XZY":if(this._z=Math.asin(-x0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(U,H),this._y=Math.atan2(X,K);else this._x=Math.atan2(-N,G),this._y=0;break;default:j0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return sZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(sZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return iZ.setFromEuler(this),this.setFromQuaternion(iZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}F8.DEFAULT_ORDER="XYZ";class L7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var tX=0,oZ=new x,zJ=new d9,k8=new E9,x6=new x,$6=new x,eX=new x,JY=new d9,aZ=new x(1,0,0),rZ=new x(0,1,0),tZ=new x(0,0,1),eZ={type:"added"},QY={type:"removed"},PJ={type:"childadded",child:null},YQ={type:"childremoved",child:null};class g9 extends M8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:tX++}),this.uuid=j8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=g9.DEFAULT_UP.clone();let J=new x,Q=new F8,$=new d9,Z=new x(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new E9},normalMatrix:{value:new f0}}),this.matrix=new E9,this.matrixWorld=new E9,this.matrixAutoUpdate=g9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=g9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return zJ.setFromAxisAngle(J,Q),this.quaternion.multiply(zJ),this}rotateOnWorldAxis(J,Q){return zJ.setFromAxisAngle(J,Q),this.quaternion.premultiply(zJ),this}rotateX(J){return this.rotateOnAxis(aZ,J)}rotateY(J){return this.rotateOnAxis(rZ,J)}rotateZ(J){return this.rotateOnAxis(tZ,J)}translateOnAxis(J,Q){return oZ.copy(J).applyQuaternion(this.quaternion),this.position.add(oZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(aZ,J)}translateY(J){return this.translateOnAxis(rZ,J)}translateZ(J){return this.translateOnAxis(tZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(k8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)x6.copy(J);else x6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),$6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)k8.lookAt($6,x6,this.up);else k8.lookAt(x6,$6,this.up);if(this.quaternion.setFromRotationMatrix(k8),Z)k8.extractRotation(Z.matrixWorld),zJ.setFromRotationMatrix(k8),this.quaternion.premultiply(zJ.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return b0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(eZ),PJ.child=J,this.dispatchEvent(PJ),PJ.child=null;else b0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(QY),YQ.child=J,this.dispatchEvent(YQ),YQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),k8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),k8.multiply(J.parent.matrixWorld);return J.applyMatrix4(k8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(eZ),PJ.child=J,this.dispatchEvent(PJ),PJ.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($6,J,eX),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($6,JY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,N=Y.length;H<N;H++){let q=Y[H];K(J.shapes,q)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),N=W(J.images),q=W(J.shapes),U=W(J.skeletons),G=W(J.animations),E=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(H.length>0)$.textures=H;if(N.length>0)$.images=N;if(q.length>0)$.shapes=q;if(U.length>0)$.skeletons=U;if(G.length>0)$.animations=G;if(E.length>0)$.nodes=E}return $.object=Z,$;function W(X){let Y=[];for(let H in X){let N=X[H];delete N.metadata,Y.push(N)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}g9.DEFAULT_UP=new x(0,1,0);g9.DEFAULT_MATRIX_AUTO_UPDATE=!0;g9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class s8 extends g9{constructor(){super();this.isGroup=!0,this.type="Group"}}var $Y={type:"move"};class R6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new s8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new s8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new s8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let B=Q.getJointPose(O,$),D=this._getHandJoint(H,O);if(B!==null)D.matrix.fromArray(B.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=B.radius;D.visible=B!==null}let N=H.joints["index-finger-tip"],q=H.joints["thumb-tip"],U=N.position.distanceTo(q.position),G=0.02,E=0.005;if(H.inputState.pinching&&U>G+E)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&U<=G-E)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent($Y)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new s8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var NW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},u8={h:0,s:0,l:0},g6={h:0,s:0,l:0};function HQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class a0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,s0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=s0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,s0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=s0.workingColorSpace){if(J=C$(J,1),Q=x0(Q,0,1),$=x0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=HQ(W,K,J+0.3333333333333333),this.g=HQ(W,K,J),this.b=HQ(W,K,J-0.3333333333333333)}return s0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)j0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:j0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else j0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=NW[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else j0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=v8(J.r),this.g=v8(J.g),this.b=v8(J.b),this}copyLinearToSRGB(J){return this.r=xJ(J.r),this.g=xJ(J.g),this.b=xJ(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return s0.workingToColorSpace(T9.copy(this),J),Math.round(x0(T9.r*255,0,255))*65536+Math.round(x0(T9.g*255,0,255))*256+Math.round(x0(T9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=s0.workingColorSpace){s0.workingToColorSpace(T9.copy(this),Q);let{r:$,g:Z,b:K}=T9,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,H,N=(X+W)/2;if(X===W)Y=0,H=0;else{let q=W-X;switch(H=N<=0.5?q/(W+X):q/(2-W-X),W){case $:Y=(Z-K)/q+(Z<K?6:0);break;case Z:Y=(K-$)/q+2;break;case K:Y=($-Z)/q+4;break}Y/=6}return J.h=Y,J.s=H,J.l=N,J}getRGB(J,Q=s0.workingColorSpace){return s0.workingToColorSpace(T9.copy(this),Q),J.r=T9.r,J.g=T9.g,J.b=T9.b,J}getStyle(J="srgb"){s0.workingToColorSpace(T9.copy(this),J);let{r:Q,g:$,b:Z}=T9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(u8),this.setHSL(u8.h+J,u8.s+Q,u8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(u8),J.getHSL(g6);let $=Y6(u8.h,g6.h,Q),Z=Y6(u8.s,g6.s,Q),K=Y6(u8.l,g6.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var T9=new a0;a0.NAMES=NW;class M6{constructor(J,Q=1,$=1000){this.isFog=!0,this.name="",this.color=new a0(J),this.near=Q,this.far=$}clone(){return new M6(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class I7 extends g9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new F8,this.environmentIntensity=1,this.environmentRotation=new F8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var K8=new x,_8=new x,UQ=new x,w8=new x,kJ=new x,_J=new x,JK=new x,NQ=new x,GQ=new x,qQ=new x,FQ=new Z9,EQ=new Z9,DQ=new Z9;class t9{constructor(J=new x,Q=new x,$=new x){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),K8.subVectors(J,Q),Z.cross(K8);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){K8.subVectors(Z,Q),_8.subVectors($,Q),UQ.subVectors(J,Q);let W=K8.dot(K8),X=K8.dot(_8),Y=K8.dot(UQ),H=_8.dot(_8),N=_8.dot(UQ),q=W*H-X*X;if(q===0)return K.set(0,0,0),null;let U=1/q,G=(H*Y-X*N)*U,E=(W*N-X*Y)*U;return K.set(1-G-E,E,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,w8)===null)return!1;return w8.x>=0&&w8.y>=0&&w8.x+w8.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,w8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,w8.x),Y.addScaledVector(W,w8.y),Y.addScaledVector(X,w8.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return FQ.setScalar(0),EQ.setScalar(0),DQ.setScalar(0),FQ.fromBufferAttribute(J,Q),EQ.fromBufferAttribute(J,$),DQ.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(FQ,K.x),W.addScaledVector(EQ,K.y),W.addScaledVector(DQ,K.z),W}static isFrontFacing(J,Q,$,Z){return K8.subVectors($,Q),_8.subVectors(J,Q),K8.cross(_8).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return K8.subVectors(this.c,this.b),_8.subVectors(this.a,this.b),K8.cross(_8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return t9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return t9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return t9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return t9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return t9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;kJ.subVectors(Z,$),_J.subVectors(K,$),NQ.subVectors(J,$);let Y=kJ.dot(NQ),H=_J.dot(NQ);if(Y<=0&&H<=0)return Q.copy($);GQ.subVectors(J,Z);let N=kJ.dot(GQ),q=_J.dot(GQ);if(N>=0&&q<=N)return Q.copy(Z);let U=Y*q-N*H;if(U<=0&&Y>=0&&N<=0)return W=Y/(Y-N),Q.copy($).addScaledVector(kJ,W);qQ.subVectors(J,K);let G=kJ.dot(qQ),E=_J.dot(qQ);if(E>=0&&G<=E)return Q.copy(K);let O=G*H-Y*E;if(O<=0&&H>=0&&E<=0)return X=H/(H-E),Q.copy($).addScaledVector(_J,X);let B=N*E-G*q;if(B<=0&&q-N>=0&&G-E>=0)return JK.subVectors(K,Z),X=(q-N)/(q-N+(G-E)),Q.copy(Z).addScaledVector(JK,X);let D=1/(B+O+U);return W=O*D,X=U*D,Q.copy($).addScaledVector(kJ,W).addScaledVector(_J,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class J8{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(W8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(W8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=W8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,W8);else W8.fromBufferAttribute(K,W);W8.applyMatrix4(J.matrixWorld),this.expandByPoint(W8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();p6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();p6.copy($.boundingBox)}p6.applyMatrix4(J.matrixWorld),this.union(p6)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,W8),W8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(Z6),m6.subVectors(this.max,Z6),wJ.subVectors(J.a,Z6),TJ.subVectors(J.b,Z6),SJ.subVectors(J.c,Z6),l8.subVectors(TJ,wJ),c8.subVectors(SJ,TJ),JJ.subVectors(wJ,SJ);let Q=[0,-l8.z,l8.y,0,-c8.z,c8.y,0,-JJ.z,JJ.y,l8.z,0,-l8.x,c8.z,0,-c8.x,JJ.z,0,-JJ.x,-l8.y,l8.x,0,-c8.y,c8.x,0,-JJ.y,JJ.x,0];if(!OQ(Q,wJ,TJ,SJ,m6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!OQ(Q,wJ,TJ,SJ,m6))return!1;return d6.crossVectors(l8,c8),Q=[d6.x,d6.y,d6.z],OQ(Q,wJ,TJ,SJ,m6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,W8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(W8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return T8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),T8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),T8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),T8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),T8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),T8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),T8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),T8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(T8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var T8=[new x,new x,new x,new x,new x,new x,new x,new x],W8=new x,p6=new J8,wJ=new x,TJ=new x,SJ=new x,l8=new x,c8=new x,JJ=new x,Z6=new x,m6=new x,d6=new x,QJ=new x;function OQ(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){QJ.fromArray(J,W);let Y=K.x*Math.abs(QJ.x)+K.y*Math.abs(QJ.y)+K.z*Math.abs(QJ.z),H=Q.dot(QJ),N=$.dot(QJ),q=Z.dot(QJ);if(Math.max(-Math.max(H,N,q),Math.min(H,N,q))>Y)return!1}return!0}var M9=new x,u6=new h0,ZY=0;class e9 extends M8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)u6.fromBufferAttribute(this,Q),u6.applyMatrix3(J),this.setXY(Q,u6.x,u6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)M9.fromBufferAttribute(this,Q),M9.applyMatrix3(J),this.setXYZ(Q,M9.x,M9.y,M9.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)M9.fromBufferAttribute(this,Q),M9.applyMatrix4(J),this.setXYZ(Q,M9.x,M9.y,M9.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)M9.fromBufferAttribute(this,Q),M9.applyNormalMatrix(J),this.setXYZ(Q,M9.x,M9.y,M9.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)M9.fromBufferAttribute(this,Q),M9.transformDirection(J),this.setXYZ(Q,M9.x,M9.y,M9.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=X8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=Q9($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=X8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=Q9(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=X8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=Q9(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=X8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=Q9(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=X8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=Q9(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=Q9(Q,this.array),$=Q9($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=Q9(Q,this.array),$=Q9($,this.array),Z=Q9(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=Q9(Q,this.array),$=Q9($,this.array),Z=Q9(Z,this.array),K=Q9(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class V7 extends e9{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class B7 extends e9{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class f9 extends e9{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var KY=new J8,K6=new x,RQ=new x;class y8{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else KY.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;K6.subVectors(J,this.center);let Q=K6.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(K6,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else RQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(K6.copy(J.center).add(RQ)),this.expandByPoint(K6.copy(J.center).sub(RQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var WY=0,a9=new E9,MQ=new g9,jJ=new x,n9=new J8,W6=new J8,C9=new x;class Q8 extends M8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WY++}),this.uuid=j8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((wX(J))?B7:V7)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new f0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return a9.makeRotationFromQuaternion(J),this.applyMatrix4(a9),this}rotateX(J){return a9.makeRotationX(J),this.applyMatrix4(a9),this}rotateY(J){return a9.makeRotationY(J),this.applyMatrix4(a9),this}rotateZ(J){return a9.makeRotationZ(J),this.applyMatrix4(a9),this}translate(J,Q,$){return a9.makeTranslation(J,Q,$),this.applyMatrix4(a9),this}scale(J,Q,$){return a9.makeScale(J,Q,$),this.applyMatrix4(a9),this}lookAt(J){return MQ.lookAt(J),MQ.updateMatrix(),this.applyMatrix4(MQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jJ).negate(),this.translate(jJ.x,jJ.y,jJ.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new f9($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)j0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new J8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){b0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(n9.setFromBufferAttribute(K),this.morphTargetsRelative)C9.addVectors(this.boundingBox.min,n9.min),this.boundingBox.expandByPoint(C9),C9.addVectors(this.boundingBox.max,n9.max),this.boundingBox.expandByPoint(C9);else this.boundingBox.expandByPoint(n9.min),this.boundingBox.expandByPoint(n9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))b0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new y8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){b0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let $=this.boundingSphere.center;if(n9.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(W6.setFromBufferAttribute(X),this.morphTargetsRelative)C9.addVectors(n9.min,W6.min),n9.expandByPoint(C9),C9.addVectors(n9.max,W6.max),n9.expandByPoint(C9);else n9.expandByPoint(W6.min),n9.expandByPoint(W6.max)}n9.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)C9.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(C9));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let H=0,N=X.count;H<N;H++){if(C9.fromBufferAttribute(X,H),Y)jJ.fromBufferAttribute(J,H),C9.add(jJ);Z=Math.max(Z,$.distanceToSquared(C9))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))b0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){b0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new e9(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let k=0;k<$.count;k++)X[k]=new x,Y[k]=new x;let H=new x,N=new x,q=new x,U=new h0,G=new h0,E=new h0,O=new x,B=new x;function D(k,L,V){H.fromBufferAttribute($,k),N.fromBufferAttribute($,L),q.fromBufferAttribute($,V),U.fromBufferAttribute(K,k),G.fromBufferAttribute(K,L),E.fromBufferAttribute(K,V),N.sub(H),q.sub(H),G.sub(U),E.sub(U);let m=1/(G.x*E.y-E.x*G.y);if(!isFinite(m))return;O.copy(N).multiplyScalar(E.y).addScaledVector(q,-G.y).multiplyScalar(m),B.copy(q).multiplyScalar(G.x).addScaledVector(N,-E.x).multiplyScalar(m),X[k].add(O),X[L].add(O),X[V].add(O),Y[k].add(B),Y[L].add(B),Y[V].add(B)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let k=0,L=F.length;k<L;++k){let V=F[k],m=V.start,j=V.count;for(let y=m,d=m+j;y<d;y+=3)D(J.getX(y+0),J.getX(y+1),J.getX(y+2))}let C=new x,_=new x,I=new x,A=new x;function P(k){I.fromBufferAttribute(Z,k),A.copy(I);let L=X[k];C.copy(L),C.sub(I.multiplyScalar(I.dot(L))).normalize(),_.crossVectors(A,L);let m=_.dot(Y[k])<0?-1:1;W.setXYZW(k,C.x,C.y,C.z,m)}for(let k=0,L=F.length;k<L;++k){let V=F[k],m=V.start,j=V.count;for(let y=m,d=m+j;y<d;y+=3)P(J.getX(y+0)),P(J.getX(y+1)),P(J.getX(y+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new e9(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let U=0,G=$.count;U<G;U++)$.setXYZ(U,0,0,0);let Z=new x,K=new x,W=new x,X=new x,Y=new x,H=new x,N=new x,q=new x;if(J)for(let U=0,G=J.count;U<G;U+=3){let E=J.getX(U+0),O=J.getX(U+1),B=J.getX(U+2);Z.fromBufferAttribute(Q,E),K.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,B),N.subVectors(W,K),q.subVectors(Z,K),N.cross(q),X.fromBufferAttribute($,E),Y.fromBufferAttribute($,O),H.fromBufferAttribute($,B),X.add(N),Y.add(N),H.add(N),$.setXYZ(E,X.x,X.y,X.z),$.setXYZ(O,Y.x,Y.y,Y.z),$.setXYZ(B,H.x,H.y,H.z)}else for(let U=0,G=Q.count;U<G;U+=3)Z.fromBufferAttribute(Q,U+0),K.fromBufferAttribute(Q,U+1),W.fromBufferAttribute(Q,U+2),N.subVectors(W,K),q.subVectors(Z,K),N.cross(q),$.setXYZ(U+0,N.x,N.y,N.z),$.setXYZ(U+1,N.x,N.y,N.z),$.setXYZ(U+2,N.x,N.y,N.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)C9.fromBufferAttribute(J,Q),C9.normalize(),J.setXYZ(Q,C9.x,C9.y,C9.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:N,normalized:q}=X,U=new H.constructor(Y.length*N),G=0,E=0;for(let O=0,B=Y.length;O<B;O++){if(X.isInterleavedBufferAttribute)G=Y[O]*X.data.stride+X.offset;else G=Y[O]*N;for(let D=0;D<N;D++)U[E++]=H[G++]}return new e9(U,N,q)}if(this.index===null)return j0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new Q8,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],H=J(Y,$);Q.setAttribute(X,H)}let K=this.morphAttributes;for(let X in K){let Y=[],H=K[X];for(let N=0,q=H.length;N<q;N++){let U=H[N],G=J(U,$);Y.push(G)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let H=$[Y];J.data.attributes[Y]=H.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],N=[];for(let q=0,U=H.length;q<U;q++){let G=H[q];N.push(G.toJSON(J.data))}if(N.length>0)Z[Y]=N,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let H in Z){let N=Z[H];this.setAttribute(H,N.clone(Q))}let K=J.morphAttributes;for(let H in K){let N=[],q=K[H];for(let U=0,G=q.length;U<G;U++)N.push(q[U].clone(Q));this.morphAttributes[H]=N}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,N=W.length;H<N;H++){let q=W[H];this.addGroup(q.start,q.count,q.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k${constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=j8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=j8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=j8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var y9=new x;class j9{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)y9.fromBufferAttribute(this,Q),y9.applyMatrix4(J),this.setXYZ(Q,y9.x,y9.y,y9.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)y9.fromBufferAttribute(this,Q),y9.applyNormalMatrix(J),this.setXYZ(Q,y9.x,y9.y,y9.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)y9.fromBufferAttribute(this,Q),y9.transformDirection(J),this.setXYZ(Q,y9.x,y9.y,y9.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=X8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=Q9($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=Q9(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=Q9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=Q9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=Q9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=X8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=X8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=X8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=X8(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=Q9(Q,this.array),$=Q9($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=Q9(Q,this.array),$=Q9($,this.array),Z=Q9(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=Q9(Q,this.array),$=Q9($,this.array),Z=Q9(Z,this.array),K=Q9(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){U6("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return new e9(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new j9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){U6("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var LQ=new x,XY=new x,YY=new f0;class r9{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=LQ.subVectors($,Q).cross(XY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(LQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||YY.getNormalMatrix(J),Z=this.coplanarPoint(LQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var HY=0;class nJ extends M8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:HY++}),this.uuid=j8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new a0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){j0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){j0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new a0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new r9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new h0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new h0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=new Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var S8=new x,IQ=new x,l6=new x,c6=new x;class L6{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,S8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=S8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return S8.copy(this.origin).addScaledVector(this.direction,Q),S8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){IQ.copy(J).add(Q).multiplyScalar(0.5),l6.copy(Q).sub(J).normalize(),c6.copy(this.origin).sub(IQ);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(l6),X=c6.dot(this.direction),Y=-c6.dot(l6),H=c6.lengthSq(),N=Math.abs(1-W*W),q,U,G,E;if(N>0)if(q=W*Y-X,U=W*X-Y,E=K*N,q>=0)if(U>=-E)if(U<=E){let O=1/N;q*=O,U*=O,G=q*(q+W*U+2*X)+U*(W*q+U+2*Y)+H}else U=K,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else U=-K,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;else if(U<=-E)q=Math.max(0,-(-W*K+X)),U=q>0?-K:Math.min(Math.max(-K,-Y),K),G=-q*q+U*(U+2*Y)+H;else if(U<=E)q=0,U=Math.min(Math.max(-K,-Y),K),G=U*(U+2*Y)+H;else q=Math.max(0,-(W*K+X)),U=q>0?K:Math.min(Math.max(-K,-Y),K),G=-q*q+U*(U+2*Y)+H;else U=W>0?-K:K,q=Math.max(0,-(W*U+X)),G=-q*q+U*(U+2*Y)+H;if($)$.copy(this.origin).addScaledVector(this.direction,q);if(Z)Z.copy(IQ).addScaledVector(l6,U);return G}intersectSphere(J,Q){if(J.radius<0)return null;S8.subVectors(J.center,this.origin);let $=S8.dot(this.direction),Z=S8.dot(S8)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,H=1/this.direction.x,N=1/this.direction.y,q=1/this.direction.z,U=this.origin;if(H>=0)$=(J.min.x-U.x)*H,Z=(J.max.x-U.x)*H;else $=(J.max.x-U.x)*H,Z=(J.min.x-U.x)*H;if(N>=0)K=(J.min.y-U.y)*N,W=(J.max.y-U.y)*N;else K=(J.max.y-U.y)*N,W=(J.min.y-U.y)*N;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(q>=0)X=(J.min.z-U.z)*q,Y=(J.max.z-U.z)*q;else X=(J.max.z-U.z)*q,Y=(J.min.z-U.z)*q;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,S8)!==null}intersectTriangle(J,Q,$,Z,K){let W=this.origin,X=this.direction,Y=X.x,H=X.y,N=X.z,q=J.x-W.x,U=J.y-W.y,G=J.z-W.z,E=Q.x-W.x,O=Q.y-W.y,B=Q.z-W.z,D=$.x-W.x,F=$.y-W.y,C=$.z-W.z,_=Math.abs(Y),I=Math.abs(H),A=Math.abs(N),P,k,L,V,m,j,y,d,w,S,n,u;if(_>=I&&_>=A)if(L=Y,j=q,w=E,u=D,Y>=0)P=H,k=N,V=U,m=G,y=O,d=B,S=F,n=C;else P=N,k=H,V=G,m=U,y=B,d=O,S=C,n=F;else if(I>=A)if(L=H,j=U,w=O,u=F,H>=0)P=N,k=Y,V=G,m=q,y=B,d=E,S=C,n=D;else P=Y,k=N,V=q,m=G,y=E,d=B,S=D,n=C;else if(L=N,j=G,w=B,u=C,N>=0)P=Y,k=H,V=q,m=U,y=E,d=O,S=D,n=F;else P=H,k=Y,V=U,m=q,y=O,d=E,S=F,n=D;if(L===0)return null;let K0=P/L,i=k/L,$0=1/L,X0=V-K0*j,w0=m-i*j,_0=y-K0*w,l0=d-i*w,m0=S-K0*u,T=n-i*u,g=m0*l0-T*_0,p=X0*T-w0*m0,a=_0*w0-l0*X0;if(Z){if(g<0||p<0||a<0)return null}else if((g<0||p<0||a<0)&&(g>0||p>0||a>0))return null;let Q0=g+p+a;if(Q0===0)return null;let r=$0*(g*j+p*w+a*u);if(Q0>0?r<0:r>0)return null;return this.at(r/Q0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class C7 extends nJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new a0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new F8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var QK=new E9,$J=new L6,n6=new y8,$K=new x,s6=new x,i6=new x,o6=new x,VQ=new x,a6=new x,ZK=new x,r6=new x;class i9 extends g9{constructor(J=new Q8,Q=new C7){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){a6.set(0,0,0);for(let Y=0,H=K.length;Y<H;Y++){let N=X[Y],q=K[Y];if(N===0)continue;if(VQ.fromBufferAttribute(q,J),W)a6.addScaledVector(VQ,N);else a6.addScaledVector(VQ.sub(Q),N)}Q.add(a6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(n6.copy($.boundingSphere),n6.applyMatrix4(K),$J.copy(J.ray).recast(J.near),n6.containsPoint($J.origin)===!1){if($J.intersectSphere(n6,$K)===null)return;if($J.origin.distanceToSquared($K)>(J.far-J.near)**2)return}if(QK.copy(K).invert(),$J.copy(J.ray).applyMatrix4(QK),$.boundingBox!==null){if($J.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,$J)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,H=K.attributes.uv,N=K.attributes.uv1,q=K.attributes.normal,U=K.groups,G=K.drawRange;if(X!==null)if(Array.isArray(W))for(let E=0,O=U.length;E<O;E++){let B=U[E],D=W[B.materialIndex],F=Math.max(B.start,G.start),C=Math.min(X.count,Math.min(B.start+B.count,G.start+G.count));for(let _=F,I=C;_<I;_+=3){let A=X.getX(_),P=X.getX(_+1),k=X.getX(_+2);if(Z=t6(this,D,J,$,H,N,q,A,P,k),Z)Z.faceIndex=Math.floor(_/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let B=E,D=O;B<D;B+=3){let F=X.getX(B),C=X.getX(B+1),_=X.getX(B+2);if(Z=t6(this,W,J,$,H,N,q,F,C,_),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let E=0,O=U.length;E<O;E++){let B=U[E],D=W[B.materialIndex],F=Math.max(B.start,G.start),C=Math.min(Y.count,Math.min(B.start+B.count,G.start+G.count));for(let _=F,I=C;_<I;_+=3){let A=_,P=_+1,k=_+2;if(Z=t6(this,D,J,$,H,N,q,A,P,k),Z)Z.faceIndex=Math.floor(_/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let B=E,D=O;B<D;B+=3){let F=B,C=B+1,_=B+2;if(Z=t6(this,W,J,$,H,N,q,F,C,_),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}}}function UY(J,Q,$,Z,K,W,X,Y){let H;if(Q.side===1)H=Z.intersectTriangle(X,W,K,!0,Y);else H=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(H===null)return null;r6.copy(Y),r6.applyMatrix4(J.matrixWorld);let N=$.ray.origin.distanceTo(r6);if(N<$.near||N>$.far)return null;return{distance:N,point:r6.clone(),object:J}}function t6(J,Q,$,Z,K,W,X,Y,H,N){J.getVertexPosition(Y,s6),J.getVertexPosition(H,i6),J.getVertexPosition(N,o6);let q=UY(J,Q,$,Z,s6,i6,o6,ZK);if(q){let U=new x;if(t9.getBarycoord(ZK,s6,i6,o6,U),K)q.uv=t9.getInterpolatedAttribute(K,Y,H,N,U,new h0);if(W)q.uv1=t9.getInterpolatedAttribute(W,Y,H,N,U,new h0);if(X){if(q.normal=t9.getInterpolatedAttribute(X,Y,H,N,U,new x),q.normal.dot(Z.direction)>0)q.normal.multiplyScalar(-1)}let G={a:Y,b:H,c:N,normal:new x,materialIndex:0};t9.getNormal(s6,i6,o6,G.normal),q.face=G,q.barycoord=U}return q}class _$ extends S9{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,H=1003,N=1003,q,U){super(null,W,X,Y,H,N,Z,K,q,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var ZJ=new y8,NY=new h0(0.5,0.5),e6=new x;class A7{constructor(J=new r9,Q=new r9,$=new r9,Z=new r9,K=new r9,W=new r9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],H=K[3],N=K[4],q=K[5],U=K[6],G=K[7],E=K[8],O=K[9],B=K[10],D=K[11],F=K[12],C=K[13],_=K[14],I=K[15];if(Z[0].setComponents(H-W,G-N,D-E,I-F).normalize(),Z[1].setComponents(H+W,G+N,D+E,I+F).normalize(),Z[2].setComponents(H+X,G+q,D+O,I+C).normalize(),Z[3].setComponents(H-X,G-q,D-O,I-C).normalize(),$)Z[4].setComponents(Y,U,B,_).normalize(),Z[5].setComponents(H-Y,G-U,D-B,I-_).normalize();else if(Z[4].setComponents(H-Y,G-U,D-B,I-_).normalize(),Q===2000)Z[5].setComponents(H+Y,G+U,D+B,I+_).normalize();else if(Q===2001)Z[5].setComponents(Y,U,B,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();ZJ.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();ZJ.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(ZJ)}intersectsSprite(J){ZJ.center.set(0,0,0);let Q=NY.distanceTo(J.center);return ZJ.radius=0.7071067811865476+Q,ZJ.applyMatrix4(J.matrixWorld),this.intersectsSphere(ZJ)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(e6.x=Z.normal.x>0?J.max.x:J.min.x,e6.y=Z.normal.y>0?J.max.y:J.min.y,e6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(e6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z7 extends S9{constructor(J=[],Q=301,$,Z,K,W,X,Y,H,N){super(J,Q,$,Z,K,W,X,Y,H,N);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class GJ extends S9{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,H,N=1026,q=1){if(N!==1026&&N!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let U={width:J,height:Q,depth:q};super(U,Z,K,W,X,Y,N,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new O6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class w$ extends GJ{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,H=1026){let N={width:J,height:J,depth:1},q=[N,N,N,N,N,N];super(J,J,Q,$,Z,K,W,X,Y,H);this.image=q,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class P7 extends S9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class sJ extends Q8{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],H=[],N=[],q=[],U=0,G=0;E("z","y","x",-1,-1,$,Q,J,W,K,0),E("z","y","x",1,-1,$,Q,-J,W,K,1),E("x","z","y",1,1,J,$,Q,Z,W,2),E("x","z","y",1,-1,J,$,-Q,Z,W,3),E("x","y","z",1,-1,J,Q,$,Z,K,4),E("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new f9(H,3)),this.setAttribute("normal",new f9(N,3)),this.setAttribute("uv",new f9(q,2));function E(O,B,D,F,C,_,I,A,P,k,L){let V=_/P,m=I/k,j=_/2,y=I/2,d=A/2,w=P+1,S=k+1,n=0,u=0,K0=new x;for(let i=0;i<S;i++){let $0=i*m-y;for(let X0=0;X0<w;X0++){let w0=X0*V-j;K0[O]=w0*F,K0[B]=$0*C,K0[D]=d,H.push(K0.x,K0.y,K0.z),K0[O]=0,K0[B]=0,K0[D]=A>0?1:-1,N.push(K0.x,K0.y,K0.z),q.push(X0/P),q.push(1-i/k),n+=1}}for(let i=0;i<k;i++)for(let $0=0;$0<P;$0++){let X0=U+$0+w*i,w0=U+$0+w*(i+1),_0=U+($0+1)+w*(i+1),l0=U+($0+1)+w*i;Y.push(X0,w0,l0),Y.push(w0,_0,l0),u+=6}X.addGroup(G,u,L),G+=u,U+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new sJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class I6 extends Q8{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),H=X+1,N=Y+1,q=J/X,U=Q/Y,G=[],E=[],O=[],B=[];for(let D=0;D<N;D++){let F=D*U-W;for(let C=0;C<H;C++){let _=C*q-K;E.push(_,-F,0),O.push(0,0,1),B.push(C/X),B.push(1-D/Y)}}for(let D=0;D<Y;D++)for(let F=0;F<X;F++){let C=F+H*D,_=F+H*(D+1),I=F+1+H*(D+1),A=F+1+H*D;G.push(C,_,A),G.push(_,I,A)}this.setIndex(G),this.setAttribute("position",new f9(E,3)),this.setAttribute("normal",new f9(O,3)),this.setAttribute("uv",new f9(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new I6(J.width,J.height,J.widthSegments,J.heightSegments)}}class k7 extends Q8{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],$=new Set,Z=new x,K=new x;if(J.index!==null){let W=J.attributes.position,X=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:X.count,materialIndex:0}];for(let H=0,N=Y.length;H<N;++H){let q=Y[H],U=q.start,G=q.count;for(let E=U,O=U+G;E<O;E+=3)for(let B=0;B<3;B++){let D=X.getX(E+B),F=X.getX(E+(B+1)%3);if(Z.fromBufferAttribute(W,D),K.fromBufferAttribute(W,F),KK(Z,K,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(K.x,K.y,K.z)}}}else{let W=J.attributes.position;for(let X=0,Y=W.count/3;X<Y;X++)for(let H=0;H<3;H++){let N=3*X+H,q=3*X+(H+1)%3;if(Z.fromBufferAttribute(W,N),K.fromBufferAttribute(W,q),KK(Z,K,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(K.x,K.y,K.z)}}this.setAttribute("position",new f9(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function KK(J,Q,$){let Z=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,K=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if($.has(Z)===!0||$.has(K)===!0)return!1;else return $.add(Z),$.add(K),!0}function qJ(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(WK(K))if(K.isRenderTargetTexture)j0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(WK(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function v9(J){let Q={};for(let $=0;$<J.length;$++){let Z=qJ(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function WK(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function GY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function T$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return s0.workingColorSpace}var V6={clone:qJ,merge:v9},qY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class u9 extends nJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qY,this.fragmentShader=FY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=qJ(J.uniforms),this.uniformsGroups=GY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new a0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new h0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new x().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new Z9().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new f0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new E9().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class S$ extends u9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class j$ extends nJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class v$ extends nJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function vJ(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function BQ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class FJ{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class b$ extends FJ{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let H=($-Q)*0.5,N=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-$),this._offsetPrev=K*N,this._offsetNext=W*N}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this._offsetPrev,q=this._offsetNext,U=this._weightPrev,G=this._weightNext,E=($-Q)/(Z-Q),O=E*E,B=O*E,D=-U*B+2*U*O-U*E,F=(1+U)*B+(-1.5-2*U)*O+(-0.5+U)*E+1,C=(-1-G)*B+(1.5+G)*O+0.5*E,_=G*B-G*O;for(let I=0;I!==X;++I)K[I]=D*W[N+I]+F*W[H+I]+C*W[Y+I]+_*W[q+I];return K}}class y$ extends FJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=($-Q)/(Z-Q),q=1-N;for(let U=0;U!==X;++U)K[U]=W[H+U]*q+W[Y+U]*N;return K}}class h$ extends FJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class f$ extends FJ{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,N=this.inTangents,q=this.outTangents;if(!N||!q){let E=($-Q)/(Z-Q),O=1-E;for(let B=0;B!==X;++B)K[B]=W[H+B]*O+W[Y+B]*E;return K}let U=X*2,G=J-1;for(let E=0;E!==X;++E){let O=W[H+E],B=W[Y+E],D=G*U+E*2,F=q[D],C=q[D+1],_=J*U+E*2,I=N[_],A=N[_+1],P=DY($,Q,F,I,Z);K[E]=GW(P,O,C,A,B)}return K}}function GW(J,Q,$,Z,K){let W=1-J;return W*W*W*Q+3*W*W*J*$+3*W*J*J*Z+J*J*J*K}function EY(J,Q,$,Z,K){let W=1-J;return 3*W*W*($-Q)+6*W*J*(Z-$)+3*J*J*(K-Z)}function DY(J,Q,$,Z,K){let W=(J-Q)/(K-Q);for(let X=0;X<8;X++){let Y=GW(W,Q,$,Z,K)-J;if(Math.abs(Y)<0.0000000001)break;let H=EY(W,Q,$,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class $8{constructor(J,Q,$,Z){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=vJ(Q,this.TimeBufferType),this.values=vJ($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:vJ(J.times,Array),values:vJ(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(BQ(J.settings))$.settings={inTangents:vJ(J.settings.inTangents,Array),outTangents:vJ(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new h$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new y$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new b$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new f$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error($);return j0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(BQ(this.settings))XK(this.settings.inTangents,J),XK(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)b0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)b0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){b0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){b0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(TX(Z))for(let X=0,Y=Z.length;X!==Y;++X){let H=Z[X];if(isNaN(H)){b0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,H=J[X],N=J[X+1];if(H!==N&&(X!==1||H!==J[0]))if(!Z){let q=X*$,U=q-$,G=q+$;for(let E=0;E!==$;++E){let O=Q[q+E];if(O!==Q[U+E]||O!==Q[G+E]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let q=X*$,U=W*$;for(let G=0;G!==$;++G)Q[U+G]=Q[q+G]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,H=0;H!==$;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,BQ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function XK(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}$8.prototype.ValueTypeName="";$8.prototype.TimeBufferType=Float32Array;$8.prototype.ValueBufferType=Float32Array;$8.prototype.DefaultInterpolation=2301;class EJ extends $8{constructor(J,Q,$){super(J,Q,$)}}EJ.prototype.ValueTypeName="bool";EJ.prototype.ValueBufferType=Array;EJ.prototype.DefaultInterpolation=2300;EJ.prototype.InterpolantFactoryMethodLinear=void 0;EJ.prototype.InterpolantFactoryMethodSmooth=void 0;class x$ extends $8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}x$.prototype.ValueTypeName="color";class g$ extends $8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}g$.prototype.ValueTypeName="number";class p$ extends FJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),H=J*X;for(let N=H+X;H!==N;H+=4)d9.slerpFlat(K,0,W,H-X,W,H,Y);return K}}class _7 extends $8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new p$(this.times,this.values,this.getValueSize(),J)}}_7.prototype.ValueTypeName="quaternion";_7.prototype.InterpolantFactoryMethodSmooth=void 0;class DJ extends $8{constructor(J,Q,$){super(J,Q,$)}}DJ.prototype.ValueTypeName="string";DJ.prototype.ValueBufferType=Array;DJ.prototype.DefaultInterpolation=2300;DJ.prototype.InterpolantFactoryMethodLinear=void 0;DJ.prototype.InterpolantFactoryMethodSmooth=void 0;class m$ extends $8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}m$.prototype.ValueTypeName="vector";class d${constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(N){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(N,W,X)}K=!0},this.itemEnd=function(N){if(W++,Z.onProgress!==void 0)Z.onProgress(N,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(N){if(Z.onError!==void 0)Z.onError(N)},this.resolveURL=function(N){if(N=N.normalize("NFC"),Y)return Y(N);return N},this.setURLModifier=function(N){return Y=N,this},this.addHandler=function(N,q){return H.push(N,q),this},this.removeHandler=function(N){let q=H.indexOf(N);if(q!==-1)H.splice(q,2);return this},this.getHandler=function(N){for(let q=0,U=H.length;q<U;q+=2){let G=H[q],E=H[q+1];if(G.global)G.lastIndex=0;if(G.test(N))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var qW=new d$;class u${constructor(J){if(this.manager=J!==void 0?J:qW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}u$.DEFAULT_MATERIAL_NAME="__DEFAULT";var J7=new x,Q7=new d9,q8=new x;class w7 extends g9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new E9,this.projectionMatrix=new E9,this.projectionMatrixInverse=new E9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(J7,Q7,q8),q8.x===1&&q8.y===1&&q8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(J7,Q7,q8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(J7,Q7,q8),q8.x===1&&q8.y===1&&q8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(J7,Q7,q8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var n8=new x,YK=new h0,HK=new h0;class h9 extends w7{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=pJ*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(X6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return pJ*2*Math.atan(Math.tan(X6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){n8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(n8.x,n8.y).multiplyScalar(-J/n8.z),n8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(n8.x,n8.y).multiplyScalar(-J/n8.z)}getViewSize(J,Q){return this.getViewBounds(J,YK,HK),Q.subVectors(HK,YK)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(X6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/H,Z*=W.width/Y,$*=W.height/H}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class T7 extends w7{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,N=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,X-=N*this.view.offsetY,Y=X-N*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class S7 extends Q8{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var bJ=-90,yJ=1;class l$ extends g9{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new h9(bJ,yJ,J,Q);Z.layers=this.layers,this.add(Z);let K=new h9(bJ,yJ,J,Q);K.layers=this.layers,this.add(K);let W=new h9(bJ,yJ,J,Q);W.layers=this.layers,this.add(W);let X=new h9(bJ,yJ,J,Q);X.layers=this.layers,this.add(X);let Y=new h9(bJ,yJ,J,Q);Y.layers=this.layers,this.add(Y);let H=new h9(bJ,yJ,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,H,N]=this.children,q=J.getRenderTarget(),U=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let O=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=O,J.setRenderTarget($,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render(Q,N),J.setRenderTarget(q,U,G),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class c$ extends h9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var n$="\\[\\]\\.:\\/",OY=new RegExp("["+n$+"]","g"),s$="[^"+n$+"]",RY="[^"+n$.replace("\\.","")+"]",MY=/((?:WC+[\/:])*)/.source.replace("WC",s$),LY=/(WCOD+)?/.source.replace("WCOD",RY),IY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",s$),VY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",s$),BY=new RegExp("^"+MY+LY+IY+VY+"$"),CY=["material","materials","bones","map"];class FW{constructor(J,Q,$){let Z=$||$9.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class $9{constructor(J,Q,$){this.path=Q,this.parsedPath=$||$9.parseTrackName(Q),this.node=$9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new $9(J,Q,$);else return new $9.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(OY,"")}static parseTrackName(J){let Q=BY.exec(J);if(Q===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(CY.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=$9.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){j0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){b0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){b0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){b0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let N=0;N<J.length;N++)if(J[N].name===H){H=N;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){b0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){b0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){b0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){b0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=Q.nodeName;b0("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){b0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){b0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$9.Composite=FW;$9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$9.prototype.GetterByBindingType=[$9.prototype._getValue_direct,$9.prototype._getValue_array,$9.prototype._getValue_arrayElement,$9.prototype._getValue_toArray];$9.prototype.SetterByBindingTypeAndVersioning=[[$9.prototype._setValue_direct,$9.prototype._setValue_direct_setNeedsUpdate,$9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$9.prototype._setValue_array,$9.prototype._setValue_array_setNeedsUpdate,$9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$9.prototype._setValue_arrayElement,$9.prototype._setValue_arrayElement_setNeedsUpdate,$9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$9.prototype._setValue_fromArray,$9.prototype._setValue_fromArray_setNeedsUpdate,$9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hq=new Float32Array(1);class L8 extends k${constructor(J,Q,$=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class B6{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=x0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(x0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class i${static{i$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}var UK=new x,$7=new x,hJ=new x,fJ=new x,CQ=new x,AY=new x,zY=new x;class j7{constructor(J=new x,Q=new x){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){UK.subVectors(J,this.start),$7.subVectors(this.end,this.start);let $=$7.dot($7);if($===0)return 0;let K=$7.dot(UK)/$;if(Q)K=x0(K,0,1);return K}closestPointToPoint(J,Q,$){let Z=this.closestPointToPointParameter(J,Q);return this.delta($).multiplyScalar(Z).add(this.start)}distanceSqToLine3(J,Q=AY,$=zY){let K,W,X=this.start,Y=J.start,H=this.end,N=J.end;hJ.subVectors(H,X),fJ.subVectors(N,Y),CQ.subVectors(X,Y);let q=hJ.dot(hJ),U=fJ.dot(fJ),G=fJ.dot(CQ);if(q<=0.00000000000000010000000000000001&&U<=0.00000000000000010000000000000001)return Q.copy(X),$.copy(Y),Q.sub($),Q.dot(Q);if(q<=0.00000000000000010000000000000001)K=0,W=G/U,W=x0(W,0,1);else{let E=hJ.dot(CQ);if(U<=0.00000000000000010000000000000001)W=0,K=x0(-E/q,0,1);else{let O=hJ.dot(fJ),B=q*U-O*O;if(B!==0)K=x0((O*G-E*U)/B,0,1);else K=0;if(W=(O*K+G)/U,W<0)W=0,K=x0(-E/q,0,1);else if(W>1)W=1,K=x0((O-E)/q,0,1)}}return Q.copy(X).addScaledVector(hJ,K),$.copy(Y).addScaledVector(fJ,W),Q.distanceToSquared($)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class v7 extends M8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function o$(J,Q,$,Z){let K=PY(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${$} format.`)}function PY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window!=="undefined")if(window.__THREE__)j0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function yW(){let J=null,Q=!1,$=null,Z=null;function K(W,X){Z=J.requestAnimationFrame(K),$(W,X)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function kY(J){let Q=new WeakMap;function $(Y,H){let{array:N,usage:q}=Y,U=N.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,N,q),Y.onUploadCallback();let E;if(N instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array!=="undefined"&&N instanceof Float16Array)E=J.HALF_FLOAT;else if(N instanceof Uint16Array)if(Y.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(N instanceof Int16Array)E=J.SHORT;else if(N instanceof Uint32Array)E=J.UNSIGNED_INT;else if(N instanceof Int32Array)E=J.INT;else if(N instanceof Int8Array)E=J.BYTE;else if(N instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(N instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+N);return{buffer:G,type:E,bytesPerElement:N.BYTES_PER_ELEMENT,version:Y.version,size:U}}function Z(Y,H,N){let{array:q,updateRanges:U}=H;if(J.bindBuffer(N,Y),U.length===0)J.bufferSubData(N,0,q);else{U.sort((E,O)=>E.start-O.start);let G=0;for(let E=1;E<U.length;E++){let O=U[G],B=U[E];if(B.start<=O.start+O.count+1)O.count=Math.max(O.count,B.start+B.count-O.start);else++G,U[G]=B}U.length=G+1;for(let E=0,O=U.length;E<O;E++){let B=U[E];J.bufferSubData(N,B.start*q.BYTES_PER_ELEMENT,q,B.start,B.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let q=Q.get(Y);if(!q||q.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let N=Q.get(Y);if(N===void 0)Q.set(Y,$(Y,H));else if(N.version<Y.version){if(N.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(N.buffer,Y,H),N.version=Y.version}}return{get:K,remove:W,update:X}}var _Y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wY=`#ifdef USE_ALPHAHASH
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
#endif`,TY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bY=`#ifdef USE_AOMAP
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
#endif`,yY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hY=`#ifdef USE_BATCHING
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
#endif`,fY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pY=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mY=`#ifdef USE_IRIDESCENCE
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
#endif`,dY=`#ifdef USE_BUMPMAP
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
#endif`,uY=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nY=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rY=`#define PI 3.141592653589793
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
} // validated`,tY=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eY=`vec3 transformedNormal = objectNormal;
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
#endif`,JH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$H=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KH="gl_FragColor = linearToOutputTexel( gl_FragColor );",WH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XH=`#ifdef USE_ENVMAP
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
#endif`,YH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HH=`#ifdef USE_ENVMAP
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
#endif`,UH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NH=`#ifdef USE_ENVMAP
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
#endif`,GH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DH=`#ifdef USE_GRADIENTMAP
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
}`,OH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LH=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,IH=`#ifdef USE_ENVMAP
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
#endif`,VH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zH=`PhysicalMaterial material;
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
#endif`,PH=`uniform sampler2D dfgLUT;
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
}`,kH=`
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
#endif`,_H=`#if defined( RE_IndirectDiffuse )
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
#endif`,wH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TH=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,SH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xH=`#if defined( USE_POINTS_UV )
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
#endif`,gH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lH=`#ifdef USE_MORPHTARGETS
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
#endif`,cH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sH=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rH=`#ifdef USE_NORMALMAP
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
#endif`,tH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$U=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FU=`float getShadowMask() {
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
}`,EU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DU=`#ifdef USE_SKINNING
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
#endif`,OU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RU=`#ifdef USE_SKINNING
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
#endif`,MU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BU=`#ifdef USE_TRANSMISSION
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
#endif`,CU=`#ifdef USE_TRANSMISSION
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
#endif`,AU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_U=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wU=`uniform sampler2D t2D;
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
}`,TU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bU=`#include <common>
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
}`,yU=`#if DEPTH_PACKING == 3200
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
}`,hU=`#define DISTANCE
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
}`,fU=`#define DISTANCE
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
}`,xU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pU=`uniform float scale;
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
}`,mU=`uniform vec3 diffuse;
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
}`,dU=`#include <common>
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
}`,uU=`uniform vec3 diffuse;
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
}`,lU=`#define LAMBERT
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
}`,cU=`#define LAMBERT
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
}`,nU=`#define MATCAP
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
}`,sU=`#define MATCAP
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
}`,iU=`#define NORMAL
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
}`,oU=`#define NORMAL
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
}`,aU=`#define PHONG
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
}`,rU=`#define PHONG
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
}`,tU=`#define STANDARD
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
}`,eU=`#define STANDARD
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
}`,JN=`#define TOON
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
}`,QN=`#define TOON
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
}`,$N=`uniform float size;
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
}`,ZN=`uniform vec3 diffuse;
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
}`,KN=`#include <common>
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
}`,WN=`uniform vec3 color;
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
}`,XN=`uniform float rotation;
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
}`,YN=`uniform vec3 diffuse;
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
}`,u0={alphahash_fragment:_Y,alphahash_pars_fragment:wY,alphamap_fragment:TY,alphamap_pars_fragment:SY,alphatest_fragment:jY,alphatest_pars_fragment:vY,aomap_fragment:bY,aomap_pars_fragment:yY,batching_pars_vertex:hY,batching_vertex:fY,begin_vertex:xY,beginnormal_vertex:gY,bsdfs:pY,iridescence_fragment:mY,bumpmap_pars_fragment:dY,clipping_planes_fragment:uY,clipping_planes_pars_fragment:lY,clipping_planes_pars_vertex:cY,clipping_planes_vertex:nY,color_fragment:sY,color_pars_fragment:iY,color_pars_vertex:oY,color_vertex:aY,common:rY,cube_uv_reflection_fragment:tY,defaultnormal_vertex:eY,displacementmap_pars_vertex:JH,displacementmap_vertex:QH,emissivemap_fragment:$H,emissivemap_pars_fragment:ZH,colorspace_fragment:KH,colorspace_pars_fragment:WH,envmap_fragment:XH,envmap_common_pars_fragment:YH,envmap_pars_fragment:HH,envmap_pars_vertex:UH,envmap_physical_pars_fragment:IH,envmap_vertex:NH,fog_vertex:GH,fog_pars_vertex:qH,fog_fragment:FH,fog_pars_fragment:EH,gradientmap_pars_fragment:DH,lightmap_pars_fragment:OH,lights_lambert_fragment:RH,lights_lambert_pars_fragment:MH,lights_pars_begin:LH,lights_toon_fragment:VH,lights_toon_pars_fragment:BH,lights_phong_fragment:CH,lights_phong_pars_fragment:AH,lights_physical_fragment:zH,lights_physical_pars_fragment:PH,lights_fragment_begin:kH,lights_fragment_maps:_H,lights_fragment_end:wH,lightprobes_pars_fragment:TH,logdepthbuf_fragment:SH,logdepthbuf_pars_fragment:jH,logdepthbuf_pars_vertex:vH,logdepthbuf_vertex:bH,map_fragment:yH,map_pars_fragment:hH,map_particle_fragment:fH,map_particle_pars_fragment:xH,metalnessmap_fragment:gH,metalnessmap_pars_fragment:pH,morphinstance_vertex:mH,morphcolor_vertex:dH,morphnormal_vertex:uH,morphtarget_pars_vertex:lH,morphtarget_vertex:cH,normal_fragment_begin:nH,normal_fragment_maps:sH,normal_pars_fragment:iH,normal_pars_vertex:oH,normal_vertex:aH,normalmap_pars_fragment:rH,clearcoat_normal_fragment_begin:tH,clearcoat_normal_fragment_maps:eH,clearcoat_pars_fragment:JU,iridescence_pars_fragment:QU,opaque_fragment:$U,packing:ZU,premultiplied_alpha_fragment:KU,project_vertex:WU,dithering_fragment:XU,dithering_pars_fragment:YU,roughnessmap_fragment:HU,roughnessmap_pars_fragment:UU,shadowmap_pars_fragment:NU,shadowmap_pars_vertex:GU,shadowmap_vertex:qU,shadowmask_pars_fragment:FU,skinbase_vertex:EU,skinning_pars_vertex:DU,skinning_vertex:OU,skinnormal_vertex:RU,specularmap_fragment:MU,specularmap_pars_fragment:LU,tonemapping_fragment:IU,tonemapping_pars_fragment:VU,transmission_fragment:BU,transmission_pars_fragment:CU,uv_pars_fragment:AU,uv_pars_vertex:zU,uv_vertex:PU,worldpos_vertex:kU,background_vert:_U,background_frag:wU,backgroundCube_vert:TU,backgroundCube_frag:SU,cube_vert:jU,cube_frag:vU,depth_vert:bU,depth_frag:yU,distance_vert:hU,distance_frag:fU,equirect_vert:xU,equirect_frag:gU,linedashed_vert:pU,linedashed_frag:mU,meshbasic_vert:dU,meshbasic_frag:uU,meshlambert_vert:lU,meshlambert_frag:cU,meshmatcap_vert:nU,meshmatcap_frag:sU,meshnormal_vert:iU,meshnormal_frag:oU,meshphong_vert:aU,meshphong_frag:rU,meshphysical_vert:tU,meshphysical_frag:eU,meshtoon_vert:JN,meshtoon_frag:QN,points_vert:$N,points_frag:ZN,shadow_vert:KN,shadow_frag:WN,sprite_vert:XN,sprite_frag:YN},G0={common:{diffuse:{value:new a0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new f0}},envmap:{envMap:{value:null},envMapRotation:{value:new f0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new f0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new f0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new f0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new f0},normalScale:{value:new h0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new f0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new f0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new f0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new f0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new a0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new a0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0},uvTransform:{value:new f0}},sprite:{diffuse:{value:new a0(16777215)},opacity:{value:1},center:{value:new h0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}}},x9={basic:{uniforms:v9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:u0.meshbasic_vert,fragmentShader:u0.meshbasic_frag},lambert:{uniforms:v9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new a0(0)},envMapIntensity:{value:1}}]),vertexShader:u0.meshlambert_vert,fragmentShader:u0.meshlambert_frag},phong:{uniforms:v9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new a0(0)},specular:{value:new a0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:u0.meshphong_vert,fragmentShader:u0.meshphong_frag},standard:{uniforms:v9([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new a0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag},toon:{uniforms:v9([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new a0(0)}}]),vertexShader:u0.meshtoon_vert,fragmentShader:u0.meshtoon_frag},matcap:{uniforms:v9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:u0.meshmatcap_vert,fragmentShader:u0.meshmatcap_frag},points:{uniforms:v9([G0.points,G0.fog]),vertexShader:u0.points_vert,fragmentShader:u0.points_frag},dashed:{uniforms:v9([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:u0.linedashed_vert,fragmentShader:u0.linedashed_frag},depth:{uniforms:v9([G0.common,G0.displacementmap]),vertexShader:u0.depth_vert,fragmentShader:u0.depth_frag},normal:{uniforms:v9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:u0.meshnormal_vert,fragmentShader:u0.meshnormal_frag},sprite:{uniforms:v9([G0.sprite,G0.fog]),vertexShader:u0.sprite_vert,fragmentShader:u0.sprite_frag},background:{uniforms:{uvTransform:{value:new f0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:u0.background_vert,fragmentShader:u0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new f0}},vertexShader:u0.backgroundCube_vert,fragmentShader:u0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:u0.cube_vert,fragmentShader:u0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:u0.equirect_vert,fragmentShader:u0.equirect_frag},distance:{uniforms:v9([G0.common,G0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:u0.distance_vert,fragmentShader:u0.distance_frag},shadow:{uniforms:v9([G0.lights,G0.fog,{color:{value:new a0(0)},opacity:{value:1}}]),vertexShader:u0.shadow_vert,fragmentShader:u0.shadow_frag}};x9.physical={uniforms:v9([x9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new f0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new f0},clearcoatNormalScale:{value:new h0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new f0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new f0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new f0},sheen:{value:0},sheenColor:{value:new a0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new f0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new f0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new f0},transmissionSamplerSize:{value:new h0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new f0},attenuationDistance:{value:0},attenuationColor:{value:new a0(0)},specularColor:{value:new a0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new f0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new f0},anisotropyVector:{value:new h0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new f0}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag};var b7={r:0,b:0,g:0},HN=new E9,hW=new f0;hW.set(-1,0,0,0,1,0,0,0,1);function UN(J,Q,$,Z,K,W){let X=new a0(0),Y=K===!0?0:1,H,N,q=null,U=0,G=null;function E(C){let _=C.isScene===!0?C.background:null;if(_&&_.isTexture){let I=C.backgroundBlurriness>0;_=Q.get(_,I)}return _}function O(C){let _=!1,I=E(C);if(I===null)D(X,Y);else if(I&&I.isColor)D(I,1),_=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||_)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(C,_){let I=E(_);if(I&&(I.isCubeTexture||I.mapping===q6)){if(N===void 0)N=new i9(new sJ(1,1,1),new u9({name:"BackgroundCubeMaterial",uniforms:qJ(x9.backgroundCube.uniforms),vertexShader:x9.backgroundCube.vertexShader,fragmentShader:x9.backgroundCube.fragmentShader,side:p9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),N.geometry.deleteAttribute("normal"),N.geometry.deleteAttribute("uv"),N.onBeforeRender=function(A,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(N.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(N);if(N.material.uniforms.envMap.value=I,N.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,N.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,N.material.uniforms.backgroundRotation.value.setFromMatrix4(HN.makeRotationFromEuler(_.backgroundRotation)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1)N.material.uniforms.backgroundRotation.value.premultiply(hW);if(N.material.toneMapped=s0.getTransfer(I.colorSpace)!==H9,q!==I||U!==I.version||G!==J.toneMapping)N.material.needsUpdate=!0,q=I,U=I.version,G=J.toneMapping;N.layers.enableAll(),C.unshift(N,N.geometry,N.material,0,0,null)}else if(I&&I.isTexture){if(H===void 0)H=new i9(new I6(2,2),new u9({name:"BackgroundMaterial",uniforms:qJ(x9.background.uniforms),vertexShader:x9.background.vertexShader,fragmentShader:x9.background.fragmentShader,side:dJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=I,H.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,H.material.toneMapped=s0.getTransfer(I.colorSpace)!==H9,I.matrixAutoUpdate===!0)I.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(I.matrix),q!==I||U!==I.version||G!==J.toneMapping)H.material.needsUpdate=!0,q=I,U=I.version,G=J.toneMapping;H.layers.enableAll(),C.unshift(H,H.geometry,H.material,0,0,null)}}function D(C,_){C.getRGB(b7,T$(J)),$.buffers.color.setClear(b7.r,b7.g,b7.b,_,W)}function F(){if(N!==void 0)N.geometry.dispose(),N.material.dispose(),N=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(C,_=1){X.set(C),Y=_,D(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(C){Y=C,D(X,Y)},render:O,addToRenderList:B,dispose:F}}function NN(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=G(null),W=K,X=!1;function Y(j,y,d,w,S){let n=!1,u=U(j,w,d,y);if(W!==u)W=u,N(W.object);if(n=E(j,w,d,S),n)O(j,w,d,S);if(S!==null)Q.update(S,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,I(j,y,d,w),S!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(S).buffer)}}function H(){return J.createVertexArray()}function N(j){return J.bindVertexArray(j)}function q(j){return J.deleteVertexArray(j)}function U(j,y,d,w){let S=w.wireframe===!0,n=Z[y.id];if(n===void 0)n={},Z[y.id]=n;let u=j.isInstancedMesh===!0?j.id:0,K0=n[u];if(K0===void 0)K0={},n[u]=K0;let i=K0[d.id];if(i===void 0)i={},K0[d.id]=i;let $0=i[S];if($0===void 0)$0=G(H()),i[S]=$0;return $0}function G(j){let y=[],d=[],w=[];for(let S=0;S<$;S++)y[S]=0,d[S]=0,w[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:d,attributeDivisors:w,object:j,attributes:{},index:null}}function E(j,y,d,w){let S=W.attributes,n=y.attributes,u=0,K0=d.getAttributes();for(let i in K0)if(K0[i].location>=0){let X0=S[i],w0=n[i];if(w0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)w0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)w0=j.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==w0)return!0;if(w0&&X0.data!==w0.data)return!0;u++}if(W.attributesNum!==u)return!0;if(W.index!==w)return!0;return!1}function O(j,y,d,w){let S={},n=y.attributes,u=0,K0=d.getAttributes();for(let i in K0)if(K0[i].location>=0){let X0=n[i];if(X0===void 0){if(i==="instanceMatrix"&&j.instanceMatrix)X0=j.instanceMatrix;if(i==="instanceColor"&&j.instanceColor)X0=j.instanceColor}let w0={};if(w0.attribute=X0,X0&&X0.data)w0.data=X0.data;S[i]=w0,u++}W.attributes=S,W.attributesNum=u,W.index=w}function B(){let j=W.newAttributes;for(let y=0,d=j.length;y<d;y++)j[y]=0}function D(j){F(j,0)}function F(j,y){let{newAttributes:d,enabledAttributes:w,attributeDivisors:S}=W;if(d[j]=1,w[j]===0)J.enableVertexAttribArray(j),w[j]=1;if(S[j]!==y)J.vertexAttribDivisor(j,y),S[j]=y}function C(){let{newAttributes:j,enabledAttributes:y}=W;for(let d=0,w=y.length;d<w;d++)if(y[d]!==j[d])J.disableVertexAttribArray(d),y[d]=0}function _(j,y,d,w,S,n,u){if(u===!0)J.vertexAttribIPointer(j,y,d,S,n);else J.vertexAttribPointer(j,y,d,w,S,n)}function I(j,y,d,w){B();let S=w.attributes,n=d.getAttributes(),u=y.defaultAttributeValues;for(let K0 in n){let i=n[K0];if(i.location>=0){let $0=S[K0];if($0===void 0){if(K0==="instanceMatrix"&&j.instanceMatrix)$0=j.instanceMatrix;if(K0==="instanceColor"&&j.instanceColor)$0=j.instanceColor}if($0!==void 0){let{normalized:X0,itemSize:w0}=$0,_0=Q.get($0);if(_0===void 0)continue;let{buffer:l0,type:m0,bytesPerElement:T}=_0,g=m0===J.INT||m0===J.UNSIGNED_INT||$0.gpuType===hQ;if($0.isInterleavedBufferAttribute){let p=$0.data,a=p.stride,Q0=$0.offset;if(p.isInstancedInterleavedBuffer){for(let r=0;r<i.locationSize;r++)F(i.location+r,p.meshPerAttribute);if(j.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=p.meshPerAttribute*p.count}else for(let r=0;r<i.locationSize;r++)D(i.location+r);J.bindBuffer(J.ARRAY_BUFFER,l0);for(let r=0;r<i.locationSize;r++)_(i.location+r,w0/i.locationSize,m0,X0,a*T,(Q0+w0/i.locationSize*r)*T,g)}else{if($0.isInstancedBufferAttribute){for(let p=0;p<i.locationSize;p++)F(i.location+p,$0.meshPerAttribute);if(j.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=$0.meshPerAttribute*$0.count}else for(let p=0;p<i.locationSize;p++)D(i.location+p);J.bindBuffer(J.ARRAY_BUFFER,l0);for(let p=0;p<i.locationSize;p++)_(i.location+p,w0/i.locationSize,m0,X0,w0*T,w0/i.locationSize*p*T,g)}}else if(u!==void 0){let X0=u[K0];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(i.location,X0);break;case 3:J.vertexAttrib3fv(i.location,X0);break;case 4:J.vertexAttrib4fv(i.location,X0);break;default:J.vertexAttrib1fv(i.location,X0)}}}}C()}function A(){V();for(let j in Z){let y=Z[j];for(let d in y){let w=y[d];for(let S in w){let n=w[S];for(let u in n)q(n[u].object),delete n[u];delete w[S]}}delete Z[j]}}function P(j){if(Z[j.id]===void 0)return;let y=Z[j.id];for(let d in y){let w=y[d];for(let S in w){let n=w[S];for(let u in n)q(n[u].object),delete n[u];delete w[S]}}delete Z[j.id]}function k(j){for(let y in Z){let d=Z[y];for(let w in d){let S=d[w];if(S[j.id]===void 0)continue;let n=S[j.id];for(let u in n)q(n[u].object),delete n[u];delete S[j.id]}}}function L(j){for(let y in Z){let d=Z[y],w=j.isInstancedMesh===!0?j.id:0,S=d[w];if(S===void 0)continue;for(let n in S){let u=S[n];for(let K0 in u)q(u[K0].object),delete u[K0];delete S[n]}if(delete d[w],Object.keys(d).length===0)delete Z[y]}}function V(){if(m(),X=!0,W===K)return;W=K,N(W.object)}function m(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:V,resetDefaultState:m,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfObject:L,releaseStatesOfProgram:k,initAttributes:B,enableAttribute:D,disableUnusedAttributes:C}}function GN(J,Q,$){let Z;function K(H){Z=H}function W(H,N){J.drawArrays(Z,H,N),$.update(N,Z,1)}function X(H,N,q){if(q===0)return;J.drawArraysInstanced(Z,H,N,q),$.update(N,Z,q)}function Y(H,N,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,N,0,q);let G=0;for(let E=0;E<q;E++)G+=N[E];$.update(G,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function qN(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let k=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(k){if(k!==R8&&Z.convert(k)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(k){let L=k===O8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(k!==H8&&k!==b8&&!L&&Z.convert(k)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(k){if(k==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";k="mediump"}if(k==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let N=$.precision!==void 0?$.precision:"highp",q=H(N);if(q!==N)j0("WebGLRenderer:",N,"not supported, using",q,"instead."),N=q;let U=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)j0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),_=J.getParameter(J.MAX_VARYING_VECTORS),I=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:N,logarithmicDepthBuffer:U,reversedDepthBuffer:G,maxTextures:E,maxVertexTextures:O,maxTextureSize:B,maxCubemapSize:D,maxAttributes:F,maxVertexUniforms:C,maxVaryings:_,maxFragmentUniforms:I,maxSamples:A,samples:P}}function FN(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new r9,Y=new f0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(U,G){let E=U.length!==0||G||Z!==0||K;return K=G,Z=U.length,E},this.beginShadows=function(){W=!0,q(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(U,G){$=q(U,G,0)},this.setState=function(U,G,E){let{clippingPlanes:O,clipIntersection:B,clipShadows:D}=U,F=J.get(U);if(!K||O===null||O.length===0||W&&!D)if(W)q(null);else N();else{let C=W?0:Z,_=C*4,I=F.clippingState||null;H.value=I,I=q(O,G,_,E);for(let A=0;A!==_;++A)I[A]=$[A];F.clippingState=I,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=C}};function N(){if(H.value!==$)H.value=$,H.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function q(U,G,E,O){let B=U!==null?U.length:0,D=null;if(B!==0){if(D=H.value,O!==!0||D===null){let F=E+B*4,C=G.matrixWorldInverse;if(Y.getNormalMatrix(C),D===null||D.length<F)D=new Float32Array(F);for(let _=0,I=E;_!==B;++_,I+=4)X.copy(U[_]).applyMatrix4(C,Y),X.normal.toArray(D,I),D[I+3]=X.constant}H.value=D,H.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,D}}var oJ=4,EN=6,DN=20,ON=256,C6=new T7,EW=new a0,a$=null,r$=0,t$=0,e$=!1,RN=new x,OJ=new x;class $Z{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=RN}=K;a$=this._renderer.getRenderTarget(),r$=this._renderer.getActiveCubeFace(),t$=this._renderer.getActiveMipmapLevel(),e$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=RW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=OW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(a$,r$,t$),this._renderer.xr.enabled=e$,J.scissorTest=!1,iJ(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===lJ||J.mapping===WJ)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);a$=this._renderer.getRenderTarget(),r$=this._renderer.getActiveCubeFace(),t$=this._renderer.getActiveMipmapLevel(),e$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:m9,minFilter:m9,generateMipmaps:!1,type:O8,format:R8,colorSpace:L$,depthBuffer:!1},Z=DW(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=DW(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=MN(K)),this._blurMaterial=IN(K,J,Q),this._ggxMaterial=LN(K,J,Q)}return Z}_compileMaterial(J){let Q=new i9(new Q8,J);this._renderer.compile(Q,C6)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new h9(90,1,Q,$),H=[1,-1,1,1,1,1],N=[1,1,1,-1,-1,-1],q=this._renderer,U=q.autoClear,G=q.toneMapping;if(q.getClearColor(EW),q.toneMapping=Y8,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(Z),q.clearDepth(),q.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new i9(new sJ,new C7({name:"PMREM.Background",side:p9,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,B=O.material,D=!1,F=J.background;if(F){if(F.isColor)B.color.copy(F),J.background=null,D=!0}else B.color.copy(EW),D=!0;for(let C=0;C<6;C++){let _=C%3;if(_===0)Y.up.set(0,H[C],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+N[C],K.y,K.z);else if(_===1)Y.up.set(0,0,H[C]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+N[C],K.z);else Y.up.set(0,H[C],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+N[C]);let I=this._cubeSize;if(iJ(Z,_*I,C>2?I:0,I,I),q.setRenderTarget(Z),D)q.render(O,Y);q.render(J,Y)}q.toneMapping=G,q.autoClear=U,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===lJ||J.mapping===WJ;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=RW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=OW();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;iJ(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,C6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,H=$/(this._lodMeshes.length-1),N=Q/(this._lodMeshes.length-1),q=Math.sqrt(H*H-N*N),U=H*1.25,G=q*U,{_lodMax:E}=this,O=this._sizeLods[$],B=3*O*($>E-oJ?$-E+oJ:0),D=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=E-Q,iJ(K,B,D,3*O,2*O),Z.setRenderTarget(K),Z.render(X,C6),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=E-$,iJ(J,B,D,3*O,2*O),Z.setRenderTarget(J),Z.render(X,C6)}_blur(J,Q,$,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,Q,$,W),this._blurPass(K,J,$,$,W)}_blurPass(J,Q,$,Z,K){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[Z];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-$;let N=this._sizeLods[Z],q=3*N*(Z>this._lodMax-oJ?Z-this._lodMax+oJ:0),U=4*(this._cubeSize-N);iJ(Q,q,U,3*N,2*N),W.setRenderTarget(Q),W.render(Y,C6)}}function MN(J){let Q=[],$=[],Z=J,K=J-oJ+1+EN;for(let W=0;W<K;W++){let X=Math.pow(2,Z);Q.push(X);let Y=1/(X-2),H=-Y,N=1+Y,q=[H,H,N,H,N,N,H,H,N,N,H,N],U=6,G=6,E=3,O=new Float32Array(E*G*U),B=new Float32Array(E*G*U);for(let F=0;F<U;F++){let C=F%3*2/3-1,_=F>2?0:-1,I=[C,_,0,C+0.6666666666666666,_,0,C+0.6666666666666666,_+1,0,C,_,0,C+0.6666666666666666,_+1,0,C,_+1,0];O.set(I,E*G*F);for(let A=0;A<G;A++){let P=q[A*2]*2-1,k=q[A*2+1]*2-1;if(F===0)OJ.set(1,k,P);else if(F===1)OJ.set(-P,1,-k);else if(F===2)OJ.set(-P,k,1);else if(F===3)OJ.set(-1,k,-P);else if(F===4)OJ.set(-P,-1,k);else OJ.set(P,k,-1);OJ.toArray(B,(F*G+A)*E)}}let D=new Q8;if(D.setAttribute("position",new e9(O,E)),D.setAttribute("outputDirection",new e9(B,E)),$.push(new i9(D,null)),Z>oJ)Z--}return{lodMeshes:$,sizeLods:Q}}function DW(J,Q,$){let Z=new s9(J,Q,$);return Z.texture.mapping=q6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function iJ(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function LN(J,Q,$){return new u9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ON,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:h7(),fragmentShader:`

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
		`,blending:D8,depthTest:!1,depthWrite:!1})}function IN(J,Q,$){return new u9({name:"SphericalGaussianBlur",defines:{SAMPLES:DN,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:h7(),fragmentShader:`

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
		`,blending:D8,depthTest:!1,depthWrite:!1})}function OW(){return new u9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:h7(),fragmentShader:`

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
		`,blending:D8,depthTest:!1,depthWrite:!1})}function RW(){return new u9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:h7(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:D8,depthTest:!1,depthWrite:!1})}function h7(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class WZ extends s9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new z7(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new sJ(5,5,5),K=new u9({name:"CubemapFromEquirect",uniforms:qJ($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:p9,blending:D8});K.uniforms.tEquirect.value=Q;let W=new i9(Z,K),X=Q.minFilter;if(Q.minFilter===XJ)Q.minFilter=m9;return new l$(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function VN(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(G,E=!1){if(G===null||G===void 0)return null;if(E)return X(G);return W(G)}function W(G){if(G&&G.isTexture){let E=G.mapping;if(E===W7||E===X7)if(Q.has(G)){let O=Q.get(G).texture;return Y(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let B=new WZ(O.height);return B.fromEquirectangularTexture(J,G),Q.set(G,B),G.addEventListener("dispose",N),Y(B.texture,G.mapping)}else return null}}return G}function X(G){if(G&&G.isTexture){let E=G.mapping,O=E===W7||E===X7,B=E===lJ||E===WJ;if(O||B){let D=$.get(G),F=D!==void 0?D.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==F){if(Z===null)Z=new $Z(J);return D=O?Z.fromEquirectangular(G,D):Z.fromCubemap(G,D),D.texture.pmremVersion=G.pmremVersion,$.set(G,D),D.texture}else if(D!==void 0)return D.texture;else{let C=G.image;if(O&&C&&C.height>0||B&&C&&H(C)){if(Z===null)Z=new $Z(J);return D=O?Z.fromEquirectangular(G):Z.fromCubemap(G),D.texture.pmremVersion=G.pmremVersion,$.set(G,D),G.addEventListener("dispose",q),D.texture}else return null}}}return G}function Y(G,E){if(E===W7)G.mapping=lJ;else if(E===X7)G.mapping=WJ;return G}function H(G){let E=0,O=6;for(let B=0;B<O;B++)if(G[B]!==void 0)E++;return E===O}function N(G){let E=G.target;E.removeEventListener("dispose",N);let O=Q.get(E);if(O!==void 0)Q.delete(E),O.dispose()}function q(G){let E=G.target;E.removeEventListener("dispose",q);let O=$.get(E);if(O!==void 0)$.delete(E),O.dispose()}function U(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:U}}function BN(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)KJ("WebGLRenderer: "+Z+" extension not supported.");return K}}}function CN(J,Q,$,Z){let K={},W=new WeakMap;function X(U){let G=U.target;if(G.index!==null)Q.remove(G.index);for(let O in G.attributes)Q.remove(G.attributes[O]);G.removeEventListener("dispose",X),delete K[G.id];let E=W.get(G);if(E)Q.remove(E),W.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(U,G){if(K[G.id]===!0)return G;return G.addEventListener("dispose",X),K[G.id]=!0,$.memory.geometries++,G}function H(U){let G=U.attributes;for(let E in G)Q.update(G[E],J.ARRAY_BUFFER)}function N(U){let G=[],E=U.index,O=U.attributes.position,B=0;if(O===void 0)return;if(E!==null){let C=E.array;B=E.version;for(let _=0,I=C.length;_<I;_+=3){let A=C[_+0],P=C[_+1],k=C[_+2];G.push(A,P,P,k,k,A)}}else{let C=O.array;B=O.version;for(let _=0,I=C.length/3-1;_<I;_+=3){let A=_+0,P=_+1,k=_+2;G.push(A,P,P,k,k,A)}}let D=new(O.count>=65535?B7:V7)(G,1);D.version=B;let F=W.get(U);if(F)Q.remove(F);W.set(U,D)}function q(U){let G=W.get(U);if(G){let E=U.index;if(E!==null){if(G.version<E.version)N(U)}}else N(U);return W.get(U)}return{get:Y,update:H,getWireframeAttribute:q}}function AN(J,Q,$){let Z;function K(U){Z=U}let W,X;function Y(U){W=U.type,X=U.bytesPerElement}function H(U,G){J.drawElements(Z,G,W,U*X),$.update(G,Z,1)}function N(U,G,E){if(E===0)return;J.drawElementsInstanced(Z,G,W,U*X,E),$.update(G,Z,E)}function q(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,W,U,0,E);let B=0;for(let D=0;D<E;D++)B+=G[D];$.update(B,Z,1)}this.setMode=K,this.setIndex=Y,this.render=H,this.renderInstances=N,this.renderMultiDraw=q}function zN(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:b0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function PN(J,Q,$){let Z=new WeakMap,K=new Z9;function W(X,Y,H){let N=X.morphTargetInfluences,q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,U=q!==void 0?q.length:0,G=Z.get(Y);if(G===void 0||G.count!==U){let V=function(){k.dispose(),Z.delete(Y),Y.removeEventListener("dispose",V)};if(G!==void 0)G.texture.dispose();let E=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,D=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],C=Y.morphAttributes.color||[],_=0;if(E===!0)_=1;if(O===!0)_=2;if(B===!0)_=3;let I=Y.attributes.position.count*_,A=1;if(I>Q.maxTextureSize)A=Math.ceil(I/Q.maxTextureSize),I=Q.maxTextureSize;let P=new Float32Array(I*A*4*U),k=new M7(P,I,A,U);k.type=b8,k.needsUpdate=!0;let L=_*4;for(let m=0;m<U;m++){let j=D[m],y=F[m],d=C[m],w=I*A*4*m;for(let S=0;S<j.count;S++){let n=S*L;if(E===!0)K.fromBufferAttribute(j,S),P[w+n+0]=K.x,P[w+n+1]=K.y,P[w+n+2]=K.z,P[w+n+3]=0;if(O===!0)K.fromBufferAttribute(y,S),P[w+n+4]=K.x,P[w+n+5]=K.y,P[w+n+6]=K.z,P[w+n+7]=0;if(B===!0)K.fromBufferAttribute(d,S),P[w+n+8]=K.x,P[w+n+9]=K.y,P[w+n+10]=K.z,P[w+n+11]=d.itemSize===4?K.w:1}}G={count:U,texture:k,size:new h0(I,A)},Z.set(Y,G),Y.addEventListener("dispose",V)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let E=0;for(let B=0;B<N.length;B++)E+=N[B];let O=Y.morphTargetsRelative?1:1-E;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",N)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function kN(J,Q,$,Z,K){let W=new WeakMap;function X(N){let q=K.render.frame,U=N.geometry,G=Q.get(N,U);if(W.get(G)!==q)Q.update(G),W.set(G,q);if(N.isInstancedMesh){if(N.hasEventListener("dispose",H)===!1)N.addEventListener("dispose",H);if(W.get(N)!==q){if($.update(N.instanceMatrix,J.ARRAY_BUFFER),N.instanceColor!==null)$.update(N.instanceColor,J.ARRAY_BUFFER);W.set(N,q)}}if(N.isSkinnedMesh){let E=N.skeleton;if(W.get(E)!==q)E.update(),W.set(E,q)}return G}function Y(){W=new WeakMap}function H(N){let q=N.target;if(q.removeEventListener("dispose",H),Z.releaseStatesOfObject(q),$.remove(q.instanceMatrix),q.instanceColor!==null)$.remove(q.instanceColor)}return{update:X,dispose:Y}}var _N={[wQ]:"LINEAR_TONE_MAPPING",[TQ]:"REINHARD_TONE_MAPPING",[SQ]:"CINEON_TONE_MAPPING",[jQ]:"ACES_FILMIC_TONE_MAPPING",[bQ]:"AGX_TONE_MAPPING",[yQ]:"NEUTRAL_TONE_MAPPING",[vQ]:"CUSTOM_TONE_MAPPING"};function wN(J,Q,$,Z,K,W){let X=new s9(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,N=new Q8;N.setAttribute("position",new f9([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new f9([0,2,0,0,2,0],2));let q=new S$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),U=new i9(N,q),G=new T7(-1,1,1,-1,0,1),E=null,O=null,B=!1,D,F=null,C=[],_=!1;this.setSize=function(I,A){if(X.setSize(I,A),Y!==null)Y.setSize(I,A);if(H!==null)H.setSize(I,A);for(let P=0;P<C.length;P++){let k=C[P];if(k.setSize)k.setSize(I,A)}},this.setEffects=function(I){C=I,_=C.length>0&&C[0].isRenderPass===!0;let{width:A,height:P}=X;if(C.length>0&&Y===null)Y=new s9(A,P,{type:O8,depthBuffer:!1,stencilBuffer:!1}),H=new s9(A,P,{type:O8,depthBuffer:!1,stencilBuffer:!1});for(let k=0;k<C.length;k++){let L=C[k];if(L.setSize)L.setSize(A,P)}},this.begin=function(I,A){if(B)return!1;if(I.toneMapping===Y8&&C.length===0)return!1;if(F=A,A!==null){let{width:P,height:k}=A;if(X.width!==P||X.height!==k)this.setSize(P,k)}if(_===!1)I.setRenderTarget(X);return D=I.toneMapping,I.toneMapping=Y8,!0},this.hasRenderPass=function(){return _},this.end=function(I,A){I.toneMapping=D,B=!0;let P=X,k=Y;for(let L=0;L<C.length;L++){let V=C[L];if(V.enabled===!1)continue;if(V.render(I,k,P,A),V.needsSwap!==!1)P=k,k=k===Y?H:Y}if(E!==I.outputColorSpace||O!==I.toneMapping){if(E=I.outputColorSpace,O=I.toneMapping,q.defines={},s0.getTransfer(E)===H9)q.defines.SRGB_TRANSFER="";let L=_N[O];if(L)q.defines[L]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=P.texture,I.setRenderTarget(F),I.render(U,G),F=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();N.dispose(),q.dispose()}}var fW=new S9,ZZ=new GJ(1,1),xW=new M7,gW=new P$,pW=new z7,MW=[],LW=[],IW=new Float32Array(16),VW=new Float32Array(9),BW=new Float32Array(4);function aJ(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=MW[K];if(W===void 0)W=new Float32Array(K),MW[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function I9(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function V9(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function f7(J,Q){let $=LW[Q];if($===void 0)$=new Int32Array(Q),LW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function TN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function SN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(I9($,Q))return;J.uniform2fv(this.addr,Q),V9($,Q)}}function jN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(I9($,Q))return;J.uniform3fv(this.addr,Q),V9($,Q)}}function vN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(I9($,Q))return;J.uniform4fv(this.addr,Q),V9($,Q)}}function bN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(I9($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),V9($,Q)}else{if(I9($,Z))return;BW.set(Z),J.uniformMatrix2fv(this.addr,!1,BW),V9($,Z)}}function yN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(I9($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),V9($,Q)}else{if(I9($,Z))return;VW.set(Z),J.uniformMatrix3fv(this.addr,!1,VW),V9($,Z)}}function hN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(I9($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),V9($,Q)}else{if(I9($,Z))return;IW.set(Z),J.uniformMatrix4fv(this.addr,!1,IW),V9($,Z)}}function fN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function xN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(I9($,Q))return;J.uniform2iv(this.addr,Q),V9($,Q)}}function gN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(I9($,Q))return;J.uniform3iv(this.addr,Q),V9($,Q)}}function pN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(I9($,Q))return;J.uniform4iv(this.addr,Q),V9($,Q)}}function mN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function dN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(I9($,Q))return;J.uniform2uiv(this.addr,Q),V9($,Q)}}function uN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(I9($,Q))return;J.uniform3uiv(this.addr,Q),V9($,Q)}}function lN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(I9($,Q))return;J.uniform4uiv(this.addr,Q),V9($,Q)}}function cN(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)ZZ.compareFunction=$.isReversedDepthBuffer()?O7:D7,W=ZZ;else W=fW;$.setTexture2D(Q||W,K)}function nN(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||gW,K)}function sN(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||pW,K)}function iN(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||xW,K)}function oN(J){switch(J){case 5126:return TN;case 35664:return SN;case 35665:return jN;case 35666:return vN;case 35674:return bN;case 35675:return yN;case 35676:return hN;case 5124:case 35670:return fN;case 35667:case 35671:return xN;case 35668:case 35672:return gN;case 35669:case 35673:return pN;case 5125:return mN;case 36294:return dN;case 36295:return uN;case 36296:return lN;case 35678:case 36198:case 36298:case 36306:case 35682:return cN;case 35679:case 36299:case 36307:return nN;case 35680:case 36300:case 36308:case 36293:return sN;case 36289:case 36303:case 36311:case 36292:return iN}}function aN(J,Q){J.uniform1fv(this.addr,Q)}function rN(J,Q){let $=aJ(Q,this.size,2);J.uniform2fv(this.addr,$)}function tN(J,Q){let $=aJ(Q,this.size,3);J.uniform3fv(this.addr,$)}function eN(J,Q){let $=aJ(Q,this.size,4);J.uniform4fv(this.addr,$)}function JG(J,Q){let $=aJ(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function QG(J,Q){let $=aJ(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function $G(J,Q){let $=aJ(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function ZG(J,Q){J.uniform1iv(this.addr,Q)}function KG(J,Q){J.uniform2iv(this.addr,Q)}function WG(J,Q){J.uniform3iv(this.addr,Q)}function XG(J,Q){J.uniform4iv(this.addr,Q)}function YG(J,Q){J.uniform1uiv(this.addr,Q)}function HG(J,Q){J.uniform2uiv(this.addr,Q)}function UG(J,Q){J.uniform3uiv(this.addr,Q)}function NG(J,Q){J.uniform4uiv(this.addr,Q)}function GG(J,Q,$){let Z=this.cache,K=Q.length,W=f7($,K);if(!I9(Z,W))J.uniform1iv(this.addr,W),V9(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=ZZ;else X=fW;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function qG(J,Q,$){let Z=this.cache,K=Q.length,W=f7($,K);if(!I9(Z,W))J.uniform1iv(this.addr,W),V9(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||gW,W[X])}function FG(J,Q,$){let Z=this.cache,K=Q.length,W=f7($,K);if(!I9(Z,W))J.uniform1iv(this.addr,W),V9(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||pW,W[X])}function EG(J,Q,$){let Z=this.cache,K=Q.length,W=f7($,K);if(!I9(Z,W))J.uniform1iv(this.addr,W),V9(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||xW,W[X])}function DG(J){switch(J){case 5126:return aN;case 35664:return rN;case 35665:return tN;case 35666:return eN;case 35674:return JG;case 35675:return QG;case 35676:return $G;case 5124:case 35670:return ZG;case 35667:case 35671:return KG;case 35668:case 35672:return WG;case 35669:case 35673:return XG;case 5125:return YG;case 36294:return HG;case 36295:return UG;case 36296:return NG;case 35678:case 36198:case 36298:case 36306:case 35682:return GG;case 35679:case 36299:case 36307:return qG;case 35680:case 36300:case 36308:case 36293:return FG;case 36289:case 36303:case 36311:case 36292:return EG}}class mW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=oN(Q.type)}}class dW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=DG(Q.type)}}class uW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var JZ=/(\w+)(\])?(\[|\.)?/g;function CW(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function OG(J,Q,$){let Z=J.name,K=Z.length;JZ.lastIndex=0;while(!0){let W=JZ.exec(Z),X=JZ.lastIndex,Y=W[1],H=W[2]==="]",N=W[3];if(H)Y=Y|0;if(N===void 0||N==="["&&X+2===K){CW($,N===void 0?new mW(Y,J,Q):new dW(Y,J,Q));break}else{let U=$.map[Y];if(U===void 0)U=new uW(Y),CW($,U);$=U}}}class P6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);OG(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function AW(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var RG=37297,MG=0;function LG(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var zW=new f0;function IG(J){s0._getMatrix(zW,s0.workingColorSpace,J);let Q=`mat3( ${zW.elements.map(($)=>$.toFixed(4))} )`;switch(s0.getTransfer(J)){case I$:return[Q,"LinearTransferOETF"];case H9:return[Q,"sRGBTransferOETF"];default:return j0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function PW(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+LG(J.getShaderSource(Q),Y)}else return W}function VG(J,Q){let $=IG(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var BG={[wQ]:"Linear",[TQ]:"Reinhard",[SQ]:"Cineon",[jQ]:"ACESFilmic",[bQ]:"AgX",[yQ]:"Neutral",[vQ]:"Custom"};function CG(J,Q){let $=BG[Q];if($===void 0)return j0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var y7=new x;function AG(){s0.getLuminanceCoefficients(y7);let J=y7.x.toFixed(4),Q=y7.y.toFixed(4),$=y7.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function zG(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(z6).join(`
`)}function PG(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function kG(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function z6(J){return J!==""}function kW(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function _W(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var _G=/^[ \t]*#include +<([\w\d./]+)>/gm;function KZ(J){return J.replace(_G,TG)}var wG=new Map;function TG(J,Q){let $=u0[Q];if($===void 0){let Z=wG.get(Q);if(Z!==void 0)$=u0[Z],j0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return KZ($)}var SG=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wW(J){return J.replace(SG,jG)}function jG(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function TW(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var vG={[N6]:"SHADOWMAP_TYPE_PCF",[mJ]:"SHADOWMAP_TYPE_VSM"};function bG(J){return vG[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yG={[lJ]:"ENVMAP_TYPE_CUBE",[WJ]:"ENVMAP_TYPE_CUBE",[q6]:"ENVMAP_TYPE_CUBE_UV"};function hG(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return yG[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var fG={[WJ]:"ENVMAP_MODE_REFRACTION"};function xG(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return fG[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gG={[gK]:"ENVMAP_BLENDING_MULTIPLY",[pK]:"ENVMAP_BLENDING_MIX",[mK]:"ENVMAP_BLENDING_ADD"};function pG(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return gG[J.combine]||"ENVMAP_BLENDING_NONE"}function mG(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function dG(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,H=bG($),N=hG($),q=xG($),U=pG($),G=mG($),E=zG($),O=PG(W),B=K.createProgram(),D,F,C=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(z6).join(`
`),D.length>0)D+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(z6).join(`
`),F.length>0)F+=`
`}else D=[TW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+q:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(z6).join(`
`),F=[TW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.envMap?"#define "+q:"",$.envMap?"#define "+U:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==Y8?"#define TONE_MAPPING":"",$.toneMapping!==Y8?u0.tonemapping_pars_fragment:"",$.toneMapping!==Y8?CG("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",u0.colorspace_pars_fragment,VG("linearToOutputTexel",$.outputColorSpace),AG(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(z6).join(`
`);if(X=KZ(X),X=kW(X,$),X=_W(X,$),Y=KZ(Y),Y=kW(Y,$),Y=_W(Y,$),X=wW(X),Y=wW(Y),$.isRawShaderMaterial!==!0)C=`#version 300 es
`,D=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,F=["#define varying in",$.glslVersion===V$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===V$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let _=C+D+X,I=C+F+Y,A=AW(K,K.VERTEX_SHADER,_),P=AW(K,K.FRAGMENT_SHADER,I);if(K.attachShader(B,A),K.attachShader(B,P),$.index0AttributeName!==void 0)K.bindAttribLocation(B,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function k(j){if(J.debug.checkShaderErrors){let y=K.getProgramInfoLog(B)||"",d=K.getShaderInfoLog(A)||"",w=K.getShaderInfoLog(P)||"",S=y.trim(),n=d.trim(),u=w.trim(),K0=!0,i=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(K0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,A,P);else{let $0=PW(K,A,"vertex"),X0=PW(K,P,"fragment");b0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+S+`
`+$0+`
`+X0)}else if(S!=="")j0("WebGLProgram: Program Info Log:",S);else if(n===""||u==="")i=!1;if(i)j.diagnostics={runnable:K0,programLog:S,vertexShader:{log:n,prefix:D},fragmentShader:{log:u,prefix:F}}}K.deleteShader(A),K.deleteShader(P),L=new P6(K,B),V=kG(K,B)}let L;this.getUniforms=function(){if(L===void 0)k(this);return L};let V;this.getAttributes=function(){if(V===void 0)k(this);return V};let m=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(m===!1)m=K.getProgramParameter(B,RG);return m},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=MG++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=A,this.fragmentShader=P,this}var uG=0;class lW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new cW(J),Q.set(J,$);return $}}class cW{constructor(J){this.id=uG++,this.code=J,this.usedTimes=0}}function lG(J){return J===UJ||J===F7||J===E7}function cG(J,Q,$,Z,K,W){let X=new L7,Y=new lW,H=new Set,N=[],q=new Map,U=Z.logarithmicDepthBuffer,G=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(L){if(H.add(L),L===0)return"uv";return`uv${L}`}function B(L,V,m,j,y,d){let w=j.fog,S=y.geometry,n=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?j.environment:null,u=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,K0=Q.get(L.envMap||n,u),i=!!K0&&K0.mapping===q6?K0.image.height:null,$0=E[L.type];if(L.precision!==null){if(G=Z.getMaxPrecision(L.precision),G!==L.precision)j0("WebGLProgram.getParameters:",L.precision,"not supported, using",G,"instead.")}let X0=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,w0=X0!==void 0?X0.length:0,_0=0;if(S.morphAttributes.position!==void 0)_0=1;if(S.morphAttributes.normal!==void 0)_0=2;if(S.morphAttributes.color!==void 0)_0=3;let l0,m0,T,g;if($0){let U9=x9[$0];l0=U9.vertexShader,m0=U9.fragmentShader}else{l0=L.vertexShader,m0=L.fragmentShader;let U9=Y.getVertexShaderStage(L),e0=Y.getFragmentShaderStage(L);Y.update(L,U9,e0),T=U9.id,g=e0.id}let p=J.getRenderTarget(),a=J.state.buffers.depth.getReversed(),Q0=y.isInstancedMesh===!0,r=y.isBatchedMesh===!0,A0=!!L.map,q0=!!L.matcap,v0=!!K0,g0=!!L.aoMap,y0=!!L.lightMap,n0=!!L.bumpMap&&L.wireframe===!1,i0=!!L.normalMap,O9=!!L.displacementMap,G9=!!L.emissiveMap,q9=!!L.metalnessMap,v=!!L.roughnessMap,L9=L.anisotropy>0,r0=L.clearcoat>0,X9=L.dispersion>0,z=L.retroreflectivity>0,R=L.iridescence>0,b=L.sheen>0,s=L.transmission>0,W0=L9&&!!L.anisotropyMap,U0=r0&&!!L.clearcoatMap,F0=r0&&!!L.clearcoatNormalMap,t=r0&&!!L.clearcoatRoughnessMap,Z0=R&&!!L.iridescenceMap,O0=R&&!!L.iridescenceThicknessMap,C0=b&&!!L.sheenColorMap,N0=b&&!!L.sheenRoughnessMap,H0=!!L.specularMap,T0=!!L.specularColorMap,S0=!!L.specularIntensityMap,t0=s&&!!L.transmissionMap,f=s&&!!L.thicknessMap,E0=!!L.gradientMap,J0=!!L.alphaMap,D0=L.alphaTest>0,I0=!!L.alphaHash,Y0=!!L.extensions,R0=Y8;if(L.toneMapped){if(p===null||p.isXRRenderTarget===!0)R0=J.toneMapping}let p0={shaderID:$0,shaderType:L.type,shaderName:L.name,vertexShader:l0,fragmentShader:m0,defines:L.defines,customVertexShaderID:T,customFragmentShaderID:g,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:G,batching:r,batchingColor:r&&y._colorsTexture!==null,instancing:Q0,instancingColor:Q0&&y.instanceColor!==null,instancingMorph:Q0&&y.morphTexture!==null,outputColorSpace:p===null?J.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:s0.workingColorSpace,alphaToCoverage:!!L.alphaToCoverage,map:A0,matcap:q0,envMap:v0,envMapMode:v0&&K0.mapping,envMapCubeUVHeight:i,aoMap:g0,lightMap:y0,bumpMap:n0,normalMap:i0,displacementMap:O9,emissiveMap:G9,normalMapObjectSpace:i0&&L.normalMapType===tK,normalMapTangentSpace:i0&&L.normalMapType===M$,packedNormalMap:i0&&L.normalMapType===M$&&lG(L.normalMap.format),metalnessMap:q9,roughnessMap:v,anisotropy:L9,anisotropyMap:W0,clearcoat:r0,clearcoatMap:U0,clearcoatNormalMap:F0,clearcoatRoughnessMap:t,dispersion:X9,retroreflection:z,iridescence:R,iridescenceMap:Z0,iridescenceThicknessMap:O0,sheen:b,sheenColorMap:C0,sheenRoughnessMap:N0,specularMap:H0,specularColorMap:T0,specularIntensityMap:S0,transmission:s,transmissionMap:t0,thicknessMap:f,gradientMap:E0,opaque:L.transparent===!1&&L.blending===G6&&L.alphaToCoverage===!1,alphaMap:J0,alphaTest:D0,alphaHash:I0,combine:L.combine,mapUv:A0&&O(L.map.channel),aoMapUv:g0&&O(L.aoMap.channel),lightMapUv:y0&&O(L.lightMap.channel),bumpMapUv:n0&&O(L.bumpMap.channel),normalMapUv:i0&&O(L.normalMap.channel),displacementMapUv:O9&&O(L.displacementMap.channel),emissiveMapUv:G9&&O(L.emissiveMap.channel),metalnessMapUv:q9&&O(L.metalnessMap.channel),roughnessMapUv:v&&O(L.roughnessMap.channel),anisotropyMapUv:W0&&O(L.anisotropyMap.channel),clearcoatMapUv:U0&&O(L.clearcoatMap.channel),clearcoatNormalMapUv:F0&&O(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:t&&O(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Z0&&O(L.iridescenceMap.channel),iridescenceThicknessMapUv:O0&&O(L.iridescenceThicknessMap.channel),sheenColorMapUv:C0&&O(L.sheenColorMap.channel),sheenRoughnessMapUv:N0&&O(L.sheenRoughnessMap.channel),specularMapUv:H0&&O(L.specularMap.channel),specularColorMapUv:T0&&O(L.specularColorMap.channel),specularIntensityMapUv:S0&&O(L.specularIntensityMap.channel),transmissionMapUv:t0&&O(L.transmissionMap.channel),thicknessMapUv:f&&O(L.thicknessMap.channel),alphaMapUv:J0&&O(L.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(i0||L9),vertexNormals:!!S.attributes.normal,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!S.attributes.uv&&(A0||J0),fog:!!w,useFog:L.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:L.wireframe===!1&&(L.flatShading===!0||S.attributes.normal===void 0&&i0===!1&&(L.isMeshLambertMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isMeshPhysicalMaterial)),sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:U,reversedDepthBuffer:a,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:S.attributes.position!==void 0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:w0,morphTextureStride:_0,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:d.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&m.length>0,shadowMapType:J.shadowMap.type,toneMapping:R0,decodeVideoTexture:A0&&L.map.isVideoTexture===!0&&s0.getTransfer(L.map.colorSpace)===H9,decodeVideoTextureEmissive:G9&&L.emissiveMap.isVideoTexture===!0&&s0.getTransfer(L.emissiveMap.colorSpace)===H9,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===E8,flipSided:L.side===p9,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Y0&&L.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y0&&L.extensions.multiDraw===!0||r)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return p0.vertexUv1s=H.has(1),p0.vertexUv2s=H.has(2),p0.vertexUv3s=H.has(3),H.clear(),p0}function D(L){let V=[];if(L.shaderID)V.push(L.shaderID);else V.push(L.customVertexShaderID),V.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let m in L.defines)V.push(m),V.push(L.defines[m]);if(L.isRawShaderMaterial===!1)F(V,L),C(V,L),V.push(J.outputColorSpace);return V.push(L.customProgramCacheKey),V.join()}function F(L,V){L.push(V.precision),L.push(V.outputColorSpace),L.push(V.envMapMode),L.push(V.envMapCubeUVHeight),L.push(V.mapUv),L.push(V.alphaMapUv),L.push(V.lightMapUv),L.push(V.aoMapUv),L.push(V.bumpMapUv),L.push(V.normalMapUv),L.push(V.displacementMapUv),L.push(V.emissiveMapUv),L.push(V.metalnessMapUv),L.push(V.roughnessMapUv),L.push(V.anisotropyMapUv),L.push(V.clearcoatMapUv),L.push(V.clearcoatNormalMapUv),L.push(V.clearcoatRoughnessMapUv),L.push(V.iridescenceMapUv),L.push(V.iridescenceThicknessMapUv),L.push(V.sheenColorMapUv),L.push(V.sheenRoughnessMapUv),L.push(V.specularMapUv),L.push(V.specularColorMapUv),L.push(V.specularIntensityMapUv),L.push(V.transmissionMapUv),L.push(V.thicknessMapUv),L.push(V.combine),L.push(V.fogExp2),L.push(V.sizeAttenuation),L.push(V.morphTargetsCount),L.push(V.morphAttributeCount),L.push(V.numSunLights),L.push(V.numDirLights),L.push(V.numPointLights),L.push(V.numSpotLights),L.push(V.numSpotLightMaps),L.push(V.numHemiLights),L.push(V.numRectAreaLights),L.push(V.numSunLightShadows),L.push(V.numDirLightShadows),L.push(V.numPointLightShadows),L.push(V.numSpotLightShadows),L.push(V.numSpotLightShadowsWithMaps),L.push(V.numLightProbes),L.push(V.shadowMapType),L.push(V.toneMapping),L.push(V.numClippingPlanes),L.push(V.numClipIntersection),L.push(V.depthPacking)}function C(L,V){if(X.disableAll(),V.instancing)X.enable(0);if(V.instancingColor)X.enable(1);if(V.instancingMorph)X.enable(2);if(V.matcap)X.enable(3);if(V.envMap)X.enable(4);if(V.normalMapObjectSpace)X.enable(5);if(V.normalMapTangentSpace)X.enable(6);if(V.clearcoat)X.enable(7);if(V.iridescence)X.enable(8);if(V.alphaTest)X.enable(9);if(V.vertexColors)X.enable(10);if(V.vertexAlphas)X.enable(11);if(V.vertexUv1s)X.enable(12);if(V.vertexUv2s)X.enable(13);if(V.vertexUv3s)X.enable(14);if(V.vertexTangents)X.enable(15);if(V.anisotropy)X.enable(16);if(V.alphaHash)X.enable(17);if(V.batching)X.enable(18);if(V.dispersion)X.enable(19);if(V.retroreflection)X.enable(24);if(V.batchingColor)X.enable(20);if(V.gradientMap)X.enable(21);if(V.packedNormalMap)X.enable(22);if(V.vertexNormals)X.enable(23);if(L.push(X.mask),X.disableAll(),V.fog)X.enable(0);if(V.useFog)X.enable(1);if(V.flatShading)X.enable(2);if(V.logarithmicDepthBuffer)X.enable(3);if(V.reversedDepthBuffer)X.enable(4);if(V.skinning)X.enable(5);if(V.morphTargets)X.enable(6);if(V.morphNormals)X.enable(7);if(V.morphColors)X.enable(8);if(V.premultipliedAlpha)X.enable(9);if(V.shadowMapEnabled)X.enable(10);if(V.doubleSided)X.enable(11);if(V.flipSided)X.enable(12);if(V.useDepthPacking)X.enable(13);if(V.dithering)X.enable(14);if(V.transmission)X.enable(15);if(V.sheen)X.enable(16);if(V.opaque)X.enable(17);if(V.pointsUvs)X.enable(18);if(V.decodeVideoTexture)X.enable(19);if(V.decodeVideoTextureEmissive)X.enable(20);if(V.alphaToCoverage)X.enable(21);if(V.numLightProbeGrids>0)X.enable(22);if(V.hasPositionAttribute)X.enable(23);L.push(X.mask)}function _(L){let V=E[L.type],m;if(V){let j=x9[V];m=V6.clone(j.uniforms)}else m=L.uniforms;return m}function I(L,V){let m=q.get(V);if(m!==void 0)++m.usedTimes;else m=new dG(J,V,L,K),N.push(m),q.set(V,m);return m}function A(L){if(--L.usedTimes===0){let V=N.indexOf(L);N[V]=N[N.length-1],N.pop(),q.delete(L.cacheKey),L.destroy()}}function P(L){Y.remove(L)}function k(){Y.dispose()}return{getParameters:B,getProgramCacheKey:D,getUniforms:_,acquireProgram:I,releaseProgram:A,releaseShaderCache:P,programs:N,dispose:k}}function nG(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function sG(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function SW(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function jW(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(G){let E=0;if(G.isInstancedMesh)E+=2;if(G.isSkinnedMesh)E+=1;return E}function Y(G,E,O,B,D,F){let C=J[Q];if(C===void 0)C={id:G.id,object:G,geometry:E,material:O,materialVariant:X(G),groupOrder:B,renderOrder:G.renderOrder,z:D,group:F},J[Q]=C;else C.id=G.id,C.object=G,C.geometry=E,C.material=O,C.materialVariant=X(G),C.groupOrder=B,C.renderOrder=G.renderOrder,C.z=D,C.group=F;return Q++,C}function H(G,E,O,B,D,F,C){if(C.reversedDepth===!0)D=-D;let _=Y(G,E,O,B,D,F);if(O.transmission>0)Z.push(_);else if(O.transparent===!0)K.push(_);else $.push(_)}function N(G,E,O,B,D,F){let C=Y(G,E,O,B,D,F);if(O.transmission>0)Z.unshift(C);else if(O.transparent===!0)K.unshift(C);else $.unshift(C)}function q(G,E){if($.length>1)$.sort(G||sG);if(Z.length>1)Z.sort(E||SW);if(K.length>1)K.sort(E||SW)}function U(){for(let G=Q,E=J.length;G<E;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:H,unshift:N,finish:U,sort:q}}function iG(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new jW,J.set(Z,[X]);else if(K>=W.length)X=new jW,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function oG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new x,color:new a0};break;case"SpotLight":$={position:new x,direction:new x,color:new a0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new x,color:new a0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new x,skyColor:new a0,groundColor:new a0};break;case"RectAreaLight":$={color:new a0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=$,$}}}function aG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var rG=0;function tG(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function eG(J){let Q=new oG,$=aG(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let N=0;N<9;N++)Z.probe.push(new x);let K=new x,W=new E9,X=new E9;function Y(N){let q=0,U=0,G=0;for(let y=0;y<9;y++)Z.probe[y].set(0,0,0);let E=0,O=0,B=0,D=0,F=0,C=0,_=0,I=0,A=0,P=0,k=0,L=0,V=0,m=0;N.sort(tG);for(let y=0,d=N.length;y<d;y++){let w=N[y],S=w.color,n=w.intensity,u=w.distance,K0=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===UJ)K0=w.shadow.map.texture;else K0=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)q+=S.r*n,U+=S.g*n,G+=S.b*n;else if(w.isLightProbe){for(let i=0;i<9;i++)Z.probe[i].addScaledVector(w.sh.coefficients[i],n);m++}else if(w.isSunLight){let i=Q.get(w);if(i.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let $0=w.shadow,X0=$.get(w);X0.shadowIntensity=$0.intensity,X0.shadowBias=$0.bias,X0.shadowNormalBias=$0.normalBias,X0.shadowRadius=$0.radius,X0.shadowMapSize.copy($0.mapSize).multiply($0.getFrameExtents()),Z.sunShadow[O]=X0,Z.sunShadowMap[O]=K0;let w0=$0.getViewportCount();for(let _0=0;_0<w0;_0++)Z.sunShadowMatrix[B+_0]=$0.getMatrix(_0),Z.sunShadowCascade[B+_0]=$0._cascadeData[_0];B+=w0,O++}Z.sun[E]=i,E++}else if(w.isDirectionalLight){let i=Q.get(w);if(i.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let $0=w.shadow,X0=$.get(w);X0.shadowIntensity=$0.intensity,X0.shadowBias=$0.bias,X0.shadowNormalBias=$0.normalBias,X0.shadowRadius=$0.radius,X0.shadowMapSize=$0.mapSize,Z.directionalShadow[D]=X0,Z.directionalShadowMap[D]=K0,Z.directionalShadowMatrix[D]=w.shadow.matrix,A++}Z.directional[D]=i,D++}else if(w.isSpotLight){let i=Q.get(w);i.position.setFromMatrixPosition(w.matrixWorld),i.color.copy(S).multiplyScalar(n),i.distance=u,i.coneCos=Math.cos(w.angle),i.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),i.decay=w.decay,Z.spot[C]=i;let $0=w.shadow;if(w.map){if(Z.spotLightMap[L]=w.map,L++,$0.updateMatrices(w),w.castShadow)V++}if(Z.spotLightMatrix[C]=$0.matrix,w.castShadow){let X0=$.get(w);X0.shadowIntensity=$0.intensity,X0.shadowBias=$0.bias,X0.shadowNormalBias=$0.normalBias,X0.shadowRadius=$0.radius,X0.shadowMapSize=$0.mapSize,Z.spotShadow[C]=X0,Z.spotShadowMap[C]=K0,k++}C++}else if(w.isRectAreaLight){let i=Q.get(w);i.color.copy(S).multiplyScalar(n),i.halfWidth.set(w.width*0.5,0,0),i.halfHeight.set(0,w.height*0.5,0),Z.rectArea[_]=i,_++}else if(w.isPointLight){let i=Q.get(w);if(i.color.copy(w.color).multiplyScalar(w.intensity),i.distance=w.distance,i.decay=w.decay,w.castShadow){let $0=w.shadow,X0=$.get(w);X0.shadowIntensity=$0.intensity,X0.shadowBias=$0.bias,X0.shadowNormalBias=$0.normalBias,X0.shadowRadius=$0.radius,X0.shadowMapSize=$0.mapSize,X0.shadowCameraNear=$0.camera.near,X0.shadowCameraFar=$0.camera.far,Z.pointShadow[F]=X0,Z.pointShadowMap[F]=K0,Z.pointShadowMatrix[F]=w.shadow.matrix,P++}Z.point[F]=i,F++}else if(w.isHemisphereLight){let i=Q.get(w);i.skyColor.copy(w.color).multiplyScalar(n),i.groundColor.copy(w.groundColor).multiplyScalar(n),Z.hemi[I]=i,I++}}if(_>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=G0.LTC_FLOAT_1,Z.rectAreaLTC2=G0.LTC_FLOAT_2;else Z.rectAreaLTC1=G0.LTC_HALF_1,Z.rectAreaLTC2=G0.LTC_HALF_2;Z.ambient[0]=q,Z.ambient[1]=U,Z.ambient[2]=G;let j=Z.hash;if(j.sunLength!==E||j.directionalLength!==D||j.pointLength!==F||j.spotLength!==C||j.rectAreaLength!==_||j.hemiLength!==I||j.numSunShadows!==O||j.numDirectionalShadows!==A||j.numPointShadows!==P||j.numSpotShadows!==k||j.numSpotMaps!==L||j.numLightProbes!==m)Z.sun.length=E,Z.directional.length=D,Z.spot.length=C,Z.rectArea.length=_,Z.point.length=F,Z.hemi.length=I,Z.sunShadow.length=O,Z.sunShadowMap.length=O,Z.sunShadowMatrix.length=B,Z.sunShadowCascade.length=B,Z.directionalShadow.length=A,Z.directionalShadowMap.length=A,Z.directionalShadowMatrix.length=A,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.pointShadowMatrix.length=P,Z.spotShadow.length=k,Z.spotShadowMap.length=k,Z.spotLightMatrix.length=k+L-V,Z.spotLightMap.length=L,Z.numSpotLightShadowsWithMaps=V,Z.numLightProbes=m,j.sunLength=E,j.directionalLength=D,j.pointLength=F,j.spotLength=C,j.rectAreaLength=_,j.hemiLength=I,j.numSunShadows=O,j.numDirectionalShadows=A,j.numPointShadows=P,j.numSpotShadows=k,j.numSpotMaps=L,j.numLightProbes=m,Z.version=rG++}function H(N,q){let U=0,G=0,E=0,O=0,B=0,D=0,F=q.matrixWorldInverse;for(let C=0,_=N.length;C<_;C++){let I=N[C];if(I.isSunLight){let A=Z.sun[U];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(F),U++}else if(I.isDirectionalLight){let A=Z.directional[G];A.direction.setFromMatrixPosition(I.matrixWorld),K.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(K),A.direction.transformDirection(F),G++}else if(I.isSpotLight){let A=Z.spot[O];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(F),A.direction.setFromMatrixPosition(I.matrixWorld),K.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(K),A.direction.transformDirection(F),O++}else if(I.isRectAreaLight){let A=Z.rectArea[B];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(F),X.identity(),W.copy(I.matrixWorld),W.premultiply(F),X.extractRotation(W),A.halfWidth.set(I.width*0.5,0,0),A.halfHeight.set(0,I.height*0.5,0),A.halfWidth.applyMatrix4(X),A.halfHeight.applyMatrix4(X),B++}else if(I.isPointLight){let A=Z.point[E];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(F),E++}else if(I.isHemisphereLight){let A=Z.hemi[D];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(F),D++}}}return{setup:Y,setupView:H,state:Z}}function vW(J){let Q=new eG(J),$=[],Z=[],K=[];function W(G){U.camera=G,$.length=0,Z.length=0,K.length=0}function X(G){$.push(G)}function Y(G){Z.push(G)}function H(G){K.push(G)}function N(){Q.setup($)}function q(G){Q.setupView($,G)}let U={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:U,setupLights:N,setupLightsView:q,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function J5(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new vW(J),Q.set(K,[Y]);else if(W>=X.length)Y=new vW(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var Q5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$5=`uniform sampler2D shadow_pass;
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
}`,Z5=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],K5=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],bW=new E9,A6=new x,QZ=new x;function W5(J,Q,$){let Z=new A7,K=new h0,W=new h0,X=new Z9,Y=new j$,H=new v$,N={},q=$.maxTextureSize,U={[dJ]:p9,[p9]:dJ,[E8]:E8},G=new u9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new h0},radius:{value:4}},vertexShader:Q5,fragmentShader:$5}),E=G.clone();E.defines.HORIZONTAL_PASS=1;let O=new Q8;O.setAttribute("position",new e9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new i9(O,G),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N6;let F=this.type;this.render=function(P,k,L){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(P.length===0)return;if(this.type===FK)j0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=N6;let V=J.getRenderTarget(),m=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),y=J.state;if(y.setBlending(D8),y.buffers.depth.getReversed()===!0)y.buffers.color.setClear(0,0,0,0);else y.buffers.color.setClear(1,1,1,1);y.buffers.depth.setTest(!0),y.setScissorTest(!1);let d=F!==this.type;if(d)k.traverse(function(w){if(w.material)if(Array.isArray(w.material))w.material.forEach((S)=>S.needsUpdate=!0);else w.material.needsUpdate=!0});for(let w=0,S=P.length;w<S;w++){let n=P[w],u=n.shadow;if(u===void 0){j0("WebGLShadowMap:",n,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;K.copy(u.mapSize);let K0=u.getFrameExtents();if(K.multiply(K0),W.copy(u.mapSize),K.x>q||K.y>q){if(K.x>q)W.x=Math.floor(q/K0.x),K.x=W.x*K0.x,u.mapSize.x=W.x;if(K.y>q)W.y=Math.floor(q/K0.y),K.y=W.y*K0.y,u.mapSize.y=W.y}let i=J.state.buffers.depth.getReversed();if(u.camera._reversedDepth=i,u.map===null||d===!0){if(u.map!==null){if(u.map.depthTexture!==null)u.map.depthTexture.dispose(),u.map.depthTexture=null;u.map.dispose()}if(this.type===mJ){if(n.isPointLight){j0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}u.map=new s9(K.x,K.y,{format:UJ,type:O8,minFilter:m9,magFilter:m9,generateMipmaps:!1}),u.map.texture.name=n.name+".shadowMap",u.map.depthTexture=new GJ(K.x,K.y,b8),u.map.depthTexture.name=n.name+".shadowMapDepth",u.map.depthTexture.format=YJ,u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=a8,u.map.depthTexture.magFilter=a8}else{if(n.isPointLight)u.map=new WZ(K.x),u.map.depthTexture=new w$(K.x,r8);else u.map=new s9(K.x,K.y),u.map.depthTexture=new GJ(K.x,K.y,r8);if(u.map.depthTexture.name=n.name+".shadowMap",u.map.depthTexture.format=YJ,this.type===N6)u.map.depthTexture.compareFunction=i?O7:D7,u.map.depthTexture.minFilter=m9,u.map.depthTexture.magFilter=m9;else u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=a8,u.map.depthTexture.magFilter=a8}u.camera.updateProjectionMatrix()}if(u.map.isWebGLCubeRenderTarget!==!0&&(u.map.width!==K.x||u.map.height!==K.y))u.map.setSize(K.x,K.y);let $0=u.map.isWebGLCubeRenderTarget?6:u.getViewportCount();if(n.isPointLight!==!0)u.updateMatrices(n,L);for(let X0=0;X0<$0;X0++){let w0=u.getCamera(X0);if(n.isPointLight){let{camera:_0,matrix:l0}=u,m0=n.distance||_0.far;if(m0!==_0.far)_0.far=m0,_0.updateProjectionMatrix();A6.setFromMatrixPosition(n.matrixWorld),_0.position.copy(A6),QZ.copy(_0.position),QZ.add(Z5[X0]),_0.up.copy(K5[X0]),_0.lookAt(QZ),_0.updateMatrixWorld(),l0.makeTranslation(-A6.x,-A6.y,-A6.z),bW.multiplyMatrices(_0.projectionMatrix,_0.matrixWorldInverse),u._frustum.setFromProjectionMatrix(bW,_0.coordinateSystem,_0.reversedDepth)}if(u.map.isWebGLCubeRenderTarget)J.setRenderTarget(u.map,X0),J.clear();else{if(X0===0)J.setRenderTarget(u.map),J.clear();let _0=u.getViewport(X0);X.set(W.x*_0.x,W.y*_0.y,W.x*_0.z,W.y*_0.w),y.viewport(X)}Z=u.getFrustum(X0),I(k,L,w0,n,this.type)}if(u.isPointLightShadow!==!0&&this.type===mJ)C(u,L);u.needsUpdate=!1}F=this.type,D.needsUpdate=!1,J.setRenderTarget(V,m,j)};function C(P,k){let L=Q.update(B);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,E.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new s9(K.x,K.y,{format:UJ,type:O8});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(k,null,L,G,B,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value.set(P.map.width,P.map.height),E.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(k,null,L,E,B,null)}function _(P,k,L,V){let m=null,j=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)m=j;else if(m=L.isPointLight===!0?H:Y,J.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){let y=m.uuid,d=k.uuid,w=N[y];if(w===void 0)w={},N[y]=w;let S=w[d];if(S===void 0)S=m.clone(),w[d]=S,k.addEventListener("dispose",A);m=S}if(m.visible=k.visible,m.wireframe=k.wireframe,V===mJ)m.side=k.shadowSide!==null?k.shadowSide:k.side;else m.side=k.shadowSide!==null?k.shadowSide:U[k.side];if(m.alphaMap=k.alphaMap,m.alphaTest=k.alphaToCoverage===!0?0.5:k.alphaTest,m.map=k.map,m.clipShadows=k.clipShadows,m.clippingPlanes=k.clippingPlanes,m.clipIntersection=k.clipIntersection,m.displacementMap=k.displacementMap,m.displacementScale=k.displacementScale,m.displacementBias=k.displacementBias,m.wireframeLinewidth=k.wireframeLinewidth,m.linewidth=k.linewidth,L.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let y=J.properties.get(m);y.light=L}return m}function I(P,k,L,V,m){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&m===mJ)&&(!P.frustumCulled||P.intersectsFrustum(Z))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);let d=Q.update(P),w=P.material;if(Array.isArray(w)){let S=d.groups;for(let n=0,u=S.length;n<u;n++){let K0=S[n],i=w[K0.materialIndex];if(i&&i.visible){let $0=_(P,i,V,m);P.onBeforeShadow(J,P,k,L,d,$0,K0),J.renderBufferDirect(L,null,d,$0,P,K0),P.onAfterShadow(J,P,k,L,d,$0,K0)}}}else if(w.visible){let S=_(P,w,V,m);P.onBeforeShadow(J,P,k,L,d,S,null),J.renderBufferDirect(L,null,d,S,P,null),P.onAfterShadow(J,P,k,L,d,S,null)}}}let y=P.children;for(let d=0,w=y.length;d<w;d++)I(y[d],k,L,V,m)}function A(P){P.target.removeEventListener("dispose",A);for(let L in N){let V=N[L],m=P.target.uuid;if(m in V)V[m].dispose(),delete V[m]}}}function X5(J,Q){function $(){let f=!1,E0=new Z9,J0=null,D0=new Z9(0,0,0,0);return{setMask:function(I0){if(J0!==I0&&!f)J.colorMask(I0,I0,I0,I0),J0=I0},setLocked:function(I0){f=I0},setClear:function(I0,Y0,R0,p0,U9){if(U9===!0)I0*=p0,Y0*=p0,R0*=p0;if(E0.set(I0,Y0,R0,p0),D0.equals(E0)===!1)J.clearColor(I0,Y0,R0,p0),D0.copy(E0)},reset:function(){f=!1,J0=null,D0.set(-1,0,0,0)}}}function Z(){let f=!1,E0=!1,J0=null,D0=null,I0=null;return{setReversed:function(Y0){if(E0!==Y0){let R0=Q.get("EXT_clip_control");if(Y0)R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.ZERO_TO_ONE_EXT);else R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.NEGATIVE_ONE_TO_ONE_EXT);E0=Y0;let p0=I0;I0=null,this.setClear(p0)}},getReversed:function(){return E0},setTest:function(Y0){if(Y0)p(J.DEPTH_TEST);else a(J.DEPTH_TEST)},setMask:function(Y0){if(J0!==Y0&&!f)J.depthMask(Y0),J0=Y0},setFunc:function(Y0){if(E0)Y0=UW[Y0];if(D0!==Y0){switch(Y0){case jK:J.depthFunc(J.NEVER);break;case vK:J.depthFunc(J.ALWAYS);break;case bK:J.depthFunc(J.LESS);break;case _Q:J.depthFunc(J.LEQUAL);break;case yK:J.depthFunc(J.EQUAL);break;case hK:J.depthFunc(J.GEQUAL);break;case fK:J.depthFunc(J.GREATER);break;case xK:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}D0=Y0}},setLocked:function(Y0){f=Y0},setClear:function(Y0){if(I0!==Y0){if(I0=Y0,E0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){f=!1,J0=null,D0=null,I0=null,E0=!1}}}function K(){let f=!1,E0=null,J0=null,D0=null,I0=null,Y0=null,R0=null,p0=null,U9=null;return{setTest:function(e0){if(!f)if(e0)p(J.STENCIL_TEST);else a(J.STENCIL_TEST)},setMask:function(e0){if(E0!==e0&&!f)J.stencilMask(e0),E0=e0},setFunc:function(e0,N8,P8){if(J0!==e0||D0!==N8||I0!==P8)J.stencilFunc(e0,N8,P8),J0=e0,D0=N8,I0=P8},setOp:function(e0,N8,P8){if(Y0!==e0||R0!==N8||p0!==P8)J.stencilOp(e0,N8,P8),Y0=e0,R0=N8,p0=P8},setLocked:function(e0){f=e0},setClear:function(e0){if(U9!==e0)J.clearStencil(e0),U9=e0},reset:function(){f=!1,E0=null,J0=null,D0=null,I0=null,Y0=null,R0=null,p0=null,U9=null}}}let W=new $,X=new Z,Y=new K,H=new WeakMap,N=new WeakMap,q={},U={},G={},E=new WeakMap,O=[],B=null,D=!1,F=null,C=null,_=null,I=null,A=null,P=null,k=null,L=new a0(0,0,0),V=0,m=!1,j=null,y=null,d=null,w=null,S=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,K0=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)K0=parseFloat(/^WebGL (\d)/.exec(i)[1]),u=K0>=1;else if(i.indexOf("OpenGL ES")!==-1)K0=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),u=K0>=2;let $0=null,X0={},w0=J.getParameter(J.SCISSOR_BOX),_0=J.getParameter(J.VIEWPORT),l0=new Z9().fromArray(w0),m0=new Z9().fromArray(_0);function T(f,E0,J0,D0){let I0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(f,Y0),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let R0=0;R0<J0;R0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(E0,0,J.RGBA,1,1,D0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(E0+R0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return Y0}let g={};g[J.TEXTURE_2D]=T(J.TEXTURE_2D,J.TEXTURE_2D,1),g[J.TEXTURE_CUBE_MAP]=T(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),g[J.TEXTURE_2D_ARRAY]=T(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),g[J.TEXTURE_3D]=T(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),p(J.DEPTH_TEST),X.setFunc(_Q),n0(!1),i0(AQ),p(J.CULL_FACE),g0(D8);function p(f){if(q[f]!==!0)J.enable(f),q[f]=!0}function a(f){if(q[f]!==!1)J.disable(f),q[f]=!1}function Q0(f,E0){if(G[f]!==E0){if(J.bindFramebuffer(f,E0),G[f]=E0,f===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=E0;if(f===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=E0;return!0}return!1}function r(f,E0){let J0=O,D0=!1;if(f){if(J0=E.get(E0),J0===void 0)J0=[],E.set(E0,J0);let I0=f.textures;if(J0.length!==I0.length||J0[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,R0=I0.length;Y0<R0;Y0++)J0[Y0]=J.COLOR_ATTACHMENT0+Y0;J0.length=I0.length,D0=!0}}else if(J0[0]!==J.BACK)J0[0]=J.BACK,D0=!0;if(D0)J.drawBuffers(J0)}function A0(f){if(B!==f)return J.useProgram(f),B=f,!0;return!1}let q0={[uJ]:J.FUNC_ADD,[EK]:J.FUNC_SUBTRACT,[DK]:J.FUNC_REVERSE_SUBTRACT};q0[OK]=J.MIN,q0[K7]=J.MAX;let v0={[RK]:J.ZERO,[MK]:J.ONE,[LK]:J.SRC_COLOR,[VK]:J.SRC_ALPHA,[kK]:J.SRC_ALPHA_SATURATE,[zK]:J.DST_COLOR,[CK]:J.DST_ALPHA,[IK]:J.ONE_MINUS_SRC_COLOR,[BK]:J.ONE_MINUS_SRC_ALPHA,[PK]:J.ONE_MINUS_DST_COLOR,[AK]:J.ONE_MINUS_DST_ALPHA,[_K]:J.CONSTANT_COLOR,[wK]:J.ONE_MINUS_CONSTANT_COLOR,[TK]:J.CONSTANT_ALPHA,[SK]:J.ONE_MINUS_CONSTANT_ALPHA};function g0(f,E0,J0,D0,I0,Y0,R0,p0,U9,e0){if(f===D8){if(D===!0)a(J.BLEND),D=!1;return}if(D===!1)p(J.BLEND),D=!0;if(f!==Z7){if(f!==F||e0!==m){if(C!==uJ||A!==uJ)J.blendEquation(J.FUNC_ADD),C=uJ,A=uJ;if(e0)switch(f){case G6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case zQ:J.blendFunc(J.ONE,J.ONE);break;case PQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case kQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:b0("WebGLState: Invalid blending: ",f);break}else switch(f){case G6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case zQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case PQ:b0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kQ:b0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:b0("WebGLState: Invalid blending: ",f);break}_=null,I=null,P=null,k=null,L.set(0,0,0),V=0,F=f,m=e0}return}if(I0=I0||E0,Y0=Y0||J0,R0=R0||D0,E0!==C||I0!==A)J.blendEquationSeparate(q0[E0],q0[I0]),C=E0,A=I0;if(J0!==_||D0!==I||Y0!==P||R0!==k)J.blendFuncSeparate(v0[J0],v0[D0],v0[Y0],v0[R0]),_=J0,I=D0,P=Y0,k=R0;if(p0.equals(L)===!1||U9!==V)J.blendColor(p0.r,p0.g,p0.b,U9),L.copy(p0),V=U9;F=f,m=!1}function y0(f,E0){f.side===E8?a(J.CULL_FACE):p(J.CULL_FACE);let J0=f.side===p9;if(E0)J0=!J0;n0(J0),f.blending===G6&&f.transparent===!1?g0(D8):g0(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),X.setFunc(f.depthFunc),X.setTest(f.depthTest),X.setMask(f.depthWrite),W.setMask(f.colorWrite);let D0=f.stencilWrite;if(Y.setTest(D0),D0)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);G9(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?p(J.SAMPLE_ALPHA_TO_COVERAGE):a(J.SAMPLE_ALPHA_TO_COVERAGE)}function n0(f){if(j!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);j=f}}function i0(f){if(f!==GK){if(p(J.CULL_FACE),f!==y)if(f===AQ)J.cullFace(J.BACK);else if(f===qK)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a(J.CULL_FACE);y=f}function O9(f){if(f!==d){if(u)J.lineWidth(f);d=f}}function G9(f,E0,J0){if(f){if(p(J.POLYGON_OFFSET_FILL),w!==E0||S!==J0){if(w=E0,S=J0,X.getReversed())E0=-E0;J.polygonOffset(E0,J0)}}else a(J.POLYGON_OFFSET_FILL)}function q9(f){if(f)p(J.SCISSOR_TEST);else a(J.SCISSOR_TEST)}function v(f){if(f===void 0)f=J.TEXTURE0+n-1;if($0!==f)J.activeTexture(f),$0=f}function L9(f,E0,J0){if(J0===void 0)if($0===null)J0=J.TEXTURE0+n-1;else J0=$0;let D0=X0[J0];if(D0===void 0)D0={type:void 0,texture:void 0},X0[J0]=D0;if(D0.type!==f||D0.texture!==E0){if($0!==J0)J.activeTexture(J0),$0=J0;J.bindTexture(f,E0||g[f]),D0.type=f,D0.texture=E0}}function r0(){let f=X0[$0];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function X9(){try{J.compressedTexImage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function R(){try{J.texSubImage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function b(){try{J.texSubImage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function W0(){try{J.compressedTexSubImage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function U0(){try{J.texStorage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function F0(){try{J.texStorage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function t(){try{J.texImage2D(...arguments)}catch(f){b0("WebGLState:",f)}}function Z0(){try{J.texImage3D(...arguments)}catch(f){b0("WebGLState:",f)}}function O0(f){if(U[f]!==void 0)return U[f];else return J.getParameter(f)}function C0(f,E0){if(U[f]!==E0)J.pixelStorei(f,E0),U[f]=E0}function N0(f){if(l0.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),l0.copy(f)}function H0(f){if(m0.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),m0.copy(f)}function T0(f,E0){let J0=N.get(E0);if(J0===void 0)J0=new WeakMap,N.set(E0,J0);let D0=J0.get(f);if(D0===void 0)D0=J.getUniformBlockIndex(E0,f.name),J0.set(f,D0)}function S0(f,E0){let D0=N.get(E0).get(f);if(H.get(E0)!==D0)J.uniformBlockBinding(E0,D0,f.__bindingPointIndex),H.set(E0,D0)}function t0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),q={},U={},$0=null,X0={},G={},E=new WeakMap,O=[],B=null,D=!1,F=null,C=null,_=null,I=null,A=null,P=null,k=null,L=new a0(0,0,0),V=0,m=!1,j=null,y=null,d=null,w=null,S=null,l0.set(0,0,J.canvas.width,J.canvas.height),m0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:p,disable:a,bindFramebuffer:Q0,drawBuffers:r,useProgram:A0,setBlending:g0,setMaterial:y0,setFlipSided:n0,setCullFace:i0,setLineWidth:O9,setPolygonOffset:G9,setScissorTest:q9,activeTexture:v,bindTexture:L9,unbindTexture:r0,compressedTexImage2D:X9,compressedTexImage3D:z,texImage2D:t,texImage3D:Z0,pixelStorei:C0,getParameter:O0,updateUBOMapping:T0,uniformBlockBinding:S0,texStorage2D:U0,texStorage3D:F0,texSubImage2D:R,texSubImage3D:b,compressedTexSubImage2D:s,compressedTexSubImage3D:W0,scissor:N0,viewport:H0,reset:t0}}function Y5(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),N=new h0,q=new WeakMap,U=new Set,G,E=new WeakMap,O=!1;try{O=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function B(z,R){return O?new OffscreenCanvas(z,R):H6("canvas")}function D(z,R,b){let s=1,W0=X9(z);if(W0.width>b||W0.height>b)s=b/Math.max(W0.width,W0.height);if(s<1)if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&z instanceof VideoFrame){let U0=Math.floor(s*W0.width),F0=Math.floor(s*W0.height);if(G===void 0)G=B(U0,F0);let t=R?B(U0,F0):G;return t.width=U0,t.height=F0,t.getContext("2d").drawImage(z,0,0,U0,F0),j0("WebGLRenderer: Texture has been resized from ("+W0.width+"x"+W0.height+") to ("+U0+"x"+F0+")."),t}else{if("data"in z)j0("WebGLRenderer: Image in DataTexture is too big ("+W0.width+"x"+W0.height+").");return z}return z}function F(z){return z.generateMipmaps}function C(z){J.generateMipmap(z)}function _(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function I(z,R,b,s,W0,U0=!1){if(z!==null){if(J[z]!==void 0)return J[z];j0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let F0;if(s){if(F0=Q.get("EXT_texture_norm16"),!F0)j0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let t=R;if(R===J.RED){if(b===J.FLOAT)t=J.R32F;if(b===J.HALF_FLOAT)t=J.R16F;if(b===J.UNSIGNED_BYTE)t=J.R8;if(b===J.UNSIGNED_SHORT&&F0)t=F0.R16_EXT;if(b===J.SHORT&&F0)t=F0.R16_SNORM_EXT}if(R===J.RED_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.R8UI;if(b===J.UNSIGNED_SHORT)t=J.R16UI;if(b===J.UNSIGNED_INT)t=J.R32UI;if(b===J.BYTE)t=J.R8I;if(b===J.SHORT)t=J.R16I;if(b===J.INT)t=J.R32I}if(R===J.RG){if(b===J.FLOAT)t=J.RG32F;if(b===J.HALF_FLOAT)t=J.RG16F;if(b===J.UNSIGNED_BYTE)t=J.RG8;if(b===J.UNSIGNED_SHORT&&F0)t=F0.RG16_EXT;if(b===J.SHORT&&F0)t=F0.RG16_SNORM_EXT}if(R===J.RG_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RG8UI;if(b===J.UNSIGNED_SHORT)t=J.RG16UI;if(b===J.UNSIGNED_INT)t=J.RG32UI;if(b===J.BYTE)t=J.RG8I;if(b===J.SHORT)t=J.RG16I;if(b===J.INT)t=J.RG32I}if(R===J.RGB_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RGB8UI;if(b===J.UNSIGNED_SHORT)t=J.RGB16UI;if(b===J.UNSIGNED_INT)t=J.RGB32UI;if(b===J.BYTE)t=J.RGB8I;if(b===J.SHORT)t=J.RGB16I;if(b===J.INT)t=J.RGB32I}if(R===J.RGBA_INTEGER){if(b===J.UNSIGNED_BYTE)t=J.RGBA8UI;if(b===J.UNSIGNED_SHORT)t=J.RGBA16UI;if(b===J.UNSIGNED_INT)t=J.RGBA32UI;if(b===J.BYTE)t=J.RGBA8I;if(b===J.SHORT)t=J.RGBA16I;if(b===J.INT)t=J.RGBA32I}if(R===J.RGB){if(b===J.UNSIGNED_SHORT&&F0)t=F0.RGB16_EXT;if(b===J.SHORT&&F0)t=F0.RGB16_SNORM_EXT;if(b===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5;if(b===J.UNSIGNED_INT_10F_11F_11F_REV)t=J.R11F_G11F_B10F}if(R===J.RGBA){let Z0=U0?I$:s0.getTransfer(W0);if(b===J.FLOAT)t=J.RGBA32F;if(b===J.HALF_FLOAT)t=J.RGBA16F;if(b===J.UNSIGNED_BYTE)t=Z0===H9?J.SRGB8_ALPHA8:J.RGBA8;if(b===J.UNSIGNED_SHORT&&F0)t=F0.RGBA16_EXT;if(b===J.SHORT&&F0)t=F0.RGBA16_SNORM_EXT;if(b===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(b===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function A(z,R){let b;if(z){if(R===null||R===r8||R===cJ)b=J.DEPTH24_STENCIL8;else if(R===b8)b=J.DEPTH32F_STENCIL8;else if(R===E6)b=J.DEPTH24_STENCIL8,j0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===r8||R===cJ)b=J.DEPTH_COMPONENT24;else if(R===b8)b=J.DEPTH_COMPONENT32F;else if(R===E6)b=J.DEPTH_COMPONENT16;return b}function P(z,R){if(F(z)===!0||z.isFramebufferTexture&&z.minFilter!==a8&&z.minFilter!==m9)return Math.log2(Math.max(R.width,R.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return R.mipmaps.length;else return 1}function k(z){let R=z.target;if(R.removeEventListener("dispose",k),V(R),R.isVideoTexture)q.delete(R);if(R.isHTMLTexture)U.delete(R)}function L(z){let R=z.target;R.removeEventListener("dispose",L),j(R)}function V(z){let R=Z.get(z);if(R.__webglInit===void 0)return;let b=z.source,s=E.get(b);if(s){let W0=s[R.__cacheKey];if(W0.usedTimes--,W0.usedTimes===0)m(z);if(Object.keys(s).length===0)E.delete(b)}Z.remove(z)}function m(z){let R=Z.get(z);J.deleteTexture(R.__webglTexture);let b=z.source,s=E.get(b);delete s[R.__cacheKey],X.memory.textures--}function j(z){let R=Z.get(z);if(z.depthTexture)z.depthTexture.dispose(),Z.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(R.__webglFramebuffer[s]))for(let W0=0;W0<R.__webglFramebuffer[s].length;W0++)J.deleteFramebuffer(R.__webglFramebuffer[s][W0]);else J.deleteFramebuffer(R.__webglFramebuffer[s]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[s])}else{if(Array.isArray(R.__webglFramebuffer))for(let s=0;s<R.__webglFramebuffer.length;s++)J.deleteFramebuffer(R.__webglFramebuffer[s]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let s=0;s<R.__webglColorRenderbuffer.length;s++)if(R.__webglColorRenderbuffer[s])J.deleteRenderbuffer(R.__webglColorRenderbuffer[s])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let b=z.textures;for(let s=0,W0=b.length;s<W0;s++){let U0=Z.get(b[s]);if(U0.__webglTexture)J.deleteTexture(U0.__webglTexture),X.memory.textures--;Z.remove(b[s])}Z.remove(z)}let y=0;function d(){y=0}function w(){return y}function S(z){y=z}function n(){let z=y;if(z>=K.maxTextures)j0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+K.maxTextures);return y+=1,z}function u(z){let R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function K0(z,R){let b=Z.get(z);if(z.isVideoTexture)L9(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&b.__version!==z.version){let s=z.image;if(s===null)j0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)j0("WebGLRenderer: Texture marked for update but image is incomplete");else{a(b,z,R);return}}else if(z.isExternalTexture)b.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,b.__webglTexture,J.TEXTURE0+R)}function i(z,R){let b=Z.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&b.__version!==z.version){a(b,z,R);return}else if(z.isExternalTexture)b.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,b.__webglTexture,J.TEXTURE0+R)}function $0(z,R){let b=Z.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&b.__version!==z.version){a(b,z,R);return}$.bindTexture(J.TEXTURE_3D,b.__webglTexture,J.TEXTURE0+R)}function X0(z,R){let b=Z.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&b.__version!==z.version){Q0(b,z,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,b.__webglTexture,J.TEXTURE0+R)}let w0={[dK]:J.REPEAT,[Y7]:J.CLAMP_TO_EDGE,[uK]:J.MIRRORED_REPEAT},_0={[a8]:J.NEAREST,[lK]:J.NEAREST_MIPMAP_NEAREST,[F6]:J.NEAREST_MIPMAP_LINEAR,[m9]:J.LINEAR,[H7]:J.LINEAR_MIPMAP_NEAREST,[XJ]:J.LINEAR_MIPMAP_LINEAR},l0={[JW]:J.NEVER,[WW]:J.ALWAYS,[QW]:J.LESS,[D7]:J.LEQUAL,[$W]:J.EQUAL,[O7]:J.GEQUAL,[ZW]:J.GREATER,[KW]:J.NOTEQUAL};function m0(z,R){if(R.type===b8&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===m9||R.magFilter===H7||R.magFilter===F6||R.magFilter===XJ||R.minFilter===m9||R.minFilter===H7||R.minFilter===F6||R.minFilter===XJ))j0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,w0[R.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,w0[R.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,w0[R.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,_0[R.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,_0[R.minFilter]),R.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,l0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===a8)return;if(R.minFilter!==F6&&R.minFilter!==XJ)return;if(R.type===b8&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let b=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,K.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function T(z,R){let b=!1;if(z.__webglInit===void 0)z.__webglInit=!0,R.addEventListener("dispose",k);let s=R.source,W0=E.get(s);if(W0===void 0)W0={},E.set(s,W0);let U0=u(R);if(U0!==z.__cacheKey){if(W0[U0]===void 0)W0[U0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,b=!0;W0[U0].usedTimes++;let F0=W0[z.__cacheKey];if(F0!==void 0){if(W0[z.__cacheKey].usedTimes--,F0.usedTimes===0)m(R)}z.__cacheKey=U0,z.__webglTexture=W0[U0].texture}return b}function g(z,R,b){return Math.floor(Math.floor(z/b)/R)}function p(z,R,b,s){let U0=z.updateRanges;if(U0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,b,s,R.data);else{U0.sort((C0,N0)=>C0.start-N0.start);let F0=0;for(let C0=1;C0<U0.length;C0++){let N0=U0[F0],H0=U0[C0],T0=N0.start+N0.count,S0=g(H0.start,R.width,4),t0=g(N0.start,R.width,4);if(H0.start<=T0+1&&S0===t0&&g(H0.start+H0.count-1,R.width,4)===S0)N0.count=Math.max(N0.count,H0.start+H0.count-N0.start);else++F0,U0[F0]=H0}U0.length=F0+1;let t=$.getParameter(J.UNPACK_ROW_LENGTH),Z0=$.getParameter(J.UNPACK_SKIP_PIXELS),O0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let C0=0,N0=U0.length;C0<N0;C0++){let H0=U0[C0],T0=Math.floor(H0.start/4),S0=Math.ceil(H0.count/4),t0=T0%R.width,f=Math.floor(T0/R.width),E0=S0,J0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,t0),$.pixelStorei(J.UNPACK_SKIP_ROWS,f),$.texSubImage2D(J.TEXTURE_2D,0,t0,f,E0,1,b,s,R.data)}z.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,t),$.pixelStorei(J.UNPACK_SKIP_PIXELS,Z0),$.pixelStorei(J.UNPACK_SKIP_ROWS,O0)}}function a(z,R,b){let s=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)s=J.TEXTURE_3D;let W0=T(z,R),U0=R.source;$.bindTexture(s,z.__webglTexture,J.TEXTURE0+b);let F0=Z.get(U0);if(U0.version!==F0.__version||W0===!0){if($.activeTexture(J.TEXTURE0+b),(typeof ImageBitmap!=="undefined"&&R.image instanceof ImageBitmap)===!1){let J0=s0.getPrimaries(s0.workingColorSpace),D0=R.colorSpace===NJ?null:s0.getPrimaries(R.colorSpace),I0=R.colorSpace===NJ||J0===D0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0)}$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment);let Z0=D(R.image,!1,K.maxTextureSize);Z0=r0(R,Z0);let O0=W.convert(R.format,R.colorSpace),C0=W.convert(R.type),N0=I(R.internalFormat,O0,C0,R.normalized,R.colorSpace,R.isVideoTexture);m0(s,R);let H0,T0=R.mipmaps,S0=R.isVideoTexture!==!0,t0=F0.__version===void 0||W0===!0,f=U0.dataReady,E0=P(R,Z0);if(R.isDepthTexture){if(N0=A(R.format===HJ,R.type),t0)if(S0)$.texStorage2D(J.TEXTURE_2D,1,N0,Z0.width,Z0.height);else $.texImage2D(J.TEXTURE_2D,0,N0,Z0.width,Z0.height,0,O0,C0,null)}else if(R.isDataTexture)if(T0.length>0){if(S0&&t0)$.texStorage2D(J.TEXTURE_2D,E0,N0,T0[0].width,T0[0].height);for(let J0=0,D0=T0.length;J0<D0;J0++)if(H0=T0[J0],S0){if(f)$.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,C0,H0.data)}else $.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,C0,H0.data);R.generateMipmaps=!1}else if(S0){if(t0)$.texStorage2D(J.TEXTURE_2D,E0,N0,Z0.width,Z0.height);if(f)p(R,Z0,O0,C0)}else $.texImage2D(J.TEXTURE_2D,0,N0,Z0.width,Z0.height,0,O0,C0,Z0.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(S0&&t0)$.texStorage3D(J.TEXTURE_2D_ARRAY,E0,N0,T0[0].width,T0[0].height,Z0.depth);for(let J0=0,D0=T0.length;J0<D0;J0++)if(H0=T0[J0],R.format!==R8)if(O0!==null)if(S0){if(f)if(R.layerUpdates.size>0){let I0=o$(H0.width,H0.height,R.format,R.type);for(let Y0 of R.layerUpdates){let R0=H0.data.subarray(Y0*I0/H0.data.BYTES_PER_ELEMENT,(Y0+1)*I0/H0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,Y0,H0.width,H0.height,1,O0,R0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,Z0.depth,O0,H0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,Z0.depth,0,H0.data,0,0);else j0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S0){if(f)$.texSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,Z0.depth,O0,C0,H0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,J0,N0,H0.width,H0.height,Z0.depth,0,O0,C0,H0.data);if(R.layerUpdates.size>0)R.clearLayerUpdates()}else{if(S0&&t0)$.texStorage2D(J.TEXTURE_2D,E0,N0,T0[0].width,T0[0].height);for(let J0=0,D0=T0.length;J0<D0;J0++)if(H0=T0[J0],R.format!==R8)if(O0!==null)if(S0){if(f)$.compressedTexSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,H0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,H0.data);else j0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S0){if(f)$.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,O0,C0,H0.data)}else $.texImage2D(J.TEXTURE_2D,J0,N0,H0.width,H0.height,0,O0,C0,H0.data)}else if(R.isDataArrayTexture)if(S0){if(t0)$.texStorage3D(J.TEXTURE_2D_ARRAY,E0,N0,Z0.width,Z0.height,Z0.depth);if(f)if(R.layerUpdates.size>0){let J0=o$(Z0.width,Z0.height,R.format,R.type);for(let D0 of R.layerUpdates){let I0=Z0.data.subarray(D0*J0/Z0.data.BYTES_PER_ELEMENT,(D0+1)*J0/Z0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,D0,Z0.width,Z0.height,1,O0,C0,I0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,Z0.width,Z0.height,Z0.depth,O0,C0,Z0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,N0,Z0.width,Z0.height,Z0.depth,0,O0,C0,Z0.data);else if(R.isData3DTexture)if(S0){if(t0)$.texStorage3D(J.TEXTURE_3D,E0,N0,Z0.width,Z0.height,Z0.depth);if(f)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,Z0.width,Z0.height,Z0.depth,O0,C0,Z0.data)}else $.texImage3D(J.TEXTURE_3D,0,N0,Z0.width,Z0.height,Z0.depth,0,O0,C0,Z0.data);else if(R.isFramebufferTexture){if(t0)if(S0)$.texStorage2D(J.TEXTURE_2D,E0,N0,Z0.width,Z0.height);else{let{width:J0,height:D0}=Z0;for(let I0=0;I0<E0;I0++)$.texImage2D(J.TEXTURE_2D,I0,N0,J0,D0,0,O0,C0,null),J0>>=1,D0>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in J){let J0=J.canvas;if(!J0.hasAttribute("layoutsubtree"))J0.setAttribute("layoutsubtree","true");if(Z0.parentNode!==J0){J0.appendChild(Z0),U.add(R),J0.onpaint=(D0)=>{let I0=D0.changedElements;for(let Y0 of U)if(I0.includes(Y0.image))Y0.needsUpdate=!0},J0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,Z0);else{let{RGBA:I0,RGBA:Y0,UNSIGNED_BYTE:R0}=J;J.texElementImage2D(J.TEXTURE_2D,0,I0,Y0,R0,Z0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(T0.length>0){if(S0&&t0){let J0=X9(T0[0]);$.texStorage2D(J.TEXTURE_2D,E0,N0,J0.width,J0.height)}for(let J0=0,D0=T0.length;J0<D0;J0++)if(H0=T0[J0],S0){if(f)$.texSubImage2D(J.TEXTURE_2D,J0,0,0,O0,C0,H0)}else $.texImage2D(J.TEXTURE_2D,J0,N0,O0,C0,H0);R.generateMipmaps=!1}else if(S0){if(t0){let J0=X9(Z0);$.texStorage2D(J.TEXTURE_2D,E0,N0,J0.width,J0.height)}if(f)$.texSubImage2D(J.TEXTURE_2D,0,0,0,O0,C0,Z0)}else $.texImage2D(J.TEXTURE_2D,0,N0,O0,C0,Z0);if(F(R))C(s);if(F0.__version=U0.version,R.onUpdate)R.onUpdate(R)}z.__version=R.version}function Q0(z,R,b){if(R.image.length!==6)return;let s=T(z,R),W0=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+b);let U0=Z.get(W0);if(W0.version!==U0.__version||s===!0){$.activeTexture(J.TEXTURE0+b);let F0=s0.getPrimaries(s0.workingColorSpace),t=R.colorSpace===NJ?null:s0.getPrimaries(R.colorSpace),Z0=R.colorSpace===NJ||F0===t?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z0);let O0=R.isCompressedTexture||R.image[0].isCompressedTexture,C0=R.image[0]&&R.image[0].isDataTexture,N0=[];for(let Y0=0;Y0<6;Y0++){if(!O0&&!C0)N0[Y0]=D(R.image[Y0],!0,K.maxCubemapSize);else N0[Y0]=C0?R.image[Y0].image:R.image[Y0];N0[Y0]=r0(R,N0[Y0])}let H0=N0[0],T0=W.convert(R.format,R.colorSpace),S0=W.convert(R.type),t0=I(R.internalFormat,T0,S0,R.normalized,R.colorSpace),f=R.isVideoTexture!==!0,E0=U0.__version===void 0||s===!0,J0=W0.dataReady,D0=P(R,H0);m0(J.TEXTURE_CUBE_MAP,R);let I0;if(O0){if(f&&E0)$.texStorage2D(J.TEXTURE_CUBE_MAP,D0,t0,H0.width,H0.height);for(let Y0=0;Y0<6;Y0++){I0=N0[Y0].mipmaps;for(let R0=0;R0<I0.length;R0++){let p0=I0[R0];if(R.format!==R8)if(T0!==null)if(f){if(J0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,p0.width,p0.height,T0,p0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,t0,p0.width,p0.height,0,p0.data);else j0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,0,0,p0.width,p0.height,T0,S0,p0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0,t0,p0.width,p0.height,0,T0,S0,p0.data)}}}else{if(I0=R.mipmaps,f&&E0){if(I0.length>0)D0++;let Y0=X9(N0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,D0,t0,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(C0){if(f){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,N0[Y0].width,N0[Y0].height,T0,S0,N0[Y0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,t0,N0[Y0].width,N0[Y0].height,0,T0,S0,N0[Y0].data);for(let R0=0;R0<I0.length;R0++){let U9=I0[R0].image[Y0].image;if(f){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,U9.width,U9.height,T0,S0,U9.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,t0,U9.width,U9.height,0,T0,S0,U9.data)}}else{if(f){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,T0,S0,N0[Y0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,t0,T0,S0,N0[Y0]);for(let R0=0;R0<I0.length;R0++){let p0=I0[R0];if(f){if(J0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,0,0,T0,S0,p0.image[Y0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,R0+1,t0,T0,S0,p0.image[Y0])}}}if(F(R))C(J.TEXTURE_CUBE_MAP);if(U0.__version=W0.version,R.onUpdate)R.onUpdate(R)}z.__version=R.version}function r(z,R,b,s,W0,U0){let F0=W.convert(b.format,b.colorSpace),t=W.convert(b.type),Z0=I(b.internalFormat,F0,t,b.normalized,b.colorSpace),O0=Z.get(R),C0=Z.get(b);if(C0.__renderTarget=R,!O0.__hasExternalTextures){let N0=Math.max(1,R.width>>U0),H0=Math.max(1,R.height>>U0);if(W0===J.TEXTURE_3D||W0===J.TEXTURE_2D_ARRAY)$.texImage3D(W0,U0,Z0,N0,H0,R.depth,0,F0,t,null);else $.texImage2D(W0,U0,Z0,N0,H0,0,F0,t,null)}if($.bindFramebuffer(J.FRAMEBUFFER,z),v(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,W0,C0.__webglTexture,0,q9(R));else if(W0===J.TEXTURE_2D||W0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&W0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,W0,C0.__webglTexture,U0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function A0(z,R,b){if(J.bindRenderbuffer(J.RENDERBUFFER,z),R.depthBuffer){let s=R.depthTexture,W0=s&&s.isDepthTexture?s.type:null,U0=A(R.stencilBuffer,W0),F0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,q9(R),U0,R.width,R.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,q9(R),U0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,F0,J.RENDERBUFFER,z)}else{let s=R.textures;for(let W0=0;W0<s.length;W0++){let U0=s[W0],F0=W.convert(U0.format,U0.colorSpace),t=W.convert(U0.type),Z0=I(U0.internalFormat,F0,t,U0.normalized,U0.colorSpace);if(v(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,q9(R),Z0,R.width,R.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,q9(R),Z0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function q0(z,R,b){let s=R.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W0=Z.get(R.depthTexture);if(W0.__renderTarget=R,!W0.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;if(s){if(W0.__webglInit===void 0)W0.__webglInit=!0,R.depthTexture.addEventListener("dispose",k);if(W0.__webglTexture===void 0){W0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),m0(J.TEXTURE_CUBE_MAP,R.depthTexture);let O0=W.convert(R.depthTexture.format),C0=W.convert(R.depthTexture.type),N0;if(R.depthTexture.format===YJ)N0=J.DEPTH_COMPONENT24;else if(R.depthTexture.format===HJ)N0=J.DEPTH24_STENCIL8;for(let H0=0;H0<6;H0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0,N0,R.width,R.height,0,O0,C0,null)}}else K0(R.depthTexture,0);let U0=W0.__webglTexture,F0=q9(R),t=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+b:J.TEXTURE_2D,Z0=R.depthTexture.format===HJ?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===YJ)if(v(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Z0,t,U0,0,F0);else J.framebufferTexture2D(J.FRAMEBUFFER,Z0,t,U0,0);else if(R.depthTexture.format===HJ)if(v(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Z0,t,U0,0,F0);else J.framebufferTexture2D(J.FRAMEBUFFER,Z0,t,U0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function v0(z){let R=Z.get(z),b=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){let s=z.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(s){let W0=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,s.removeEventListener("dispose",W0)};s.addEventListener("dispose",W0),R.__depthDisposeCallback=W0}R.__boundDepthTexture=s}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(b)for(let s=0;s<6;s++)q0(R.__webglFramebuffer[s],z,s);else{let s=z.texture.mipmaps;if(s&&s.length>0)q0(R.__webglFramebuffer[0],z,0);else q0(R.__webglFramebuffer,z,0)}else if(b){R.__webglDepthbuffer=[];for(let s=0;s<6;s++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[s]),R.__webglDepthbuffer[s]===void 0)R.__webglDepthbuffer[s]=J.createRenderbuffer(),A0(R.__webglDepthbuffer[s],z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=R.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}else{let s=z.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),A0(R.__webglDepthbuffer,z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,U0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function g0(z,R,b){let s=Z.get(z);if(R!==void 0)r(s.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(b!==void 0)v0(z)}function y0(z){let R=z.texture,b=Z.get(z),s=Z.get(R);z.addEventListener("dispose",L);let W0=z.textures,U0=z.isWebGLCubeRenderTarget===!0,F0=W0.length>1;if(!F0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=R.version,X.memory.textures++}if(U0){b.__webglFramebuffer=[];for(let t=0;t<6;t++)if(R.mipmaps&&R.mipmaps.length>0){b.__webglFramebuffer[t]=[];for(let Z0=0;Z0<R.mipmaps.length;Z0++)b.__webglFramebuffer[t][Z0]=J.createFramebuffer()}else b.__webglFramebuffer[t]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){b.__webglFramebuffer=[];for(let t=0;t<R.mipmaps.length;t++)b.__webglFramebuffer[t]=J.createFramebuffer()}else b.__webglFramebuffer=J.createFramebuffer();if(F0)for(let t=0,Z0=W0.length;t<Z0;t++){let O0=Z.get(W0[t]);if(O0.__webglTexture===void 0)O0.__webglTexture=J.createTexture(),X.memory.textures++}if(z.samples>0&&v(z)===!1){b.__webglMultisampledFramebuffer=J.createFramebuffer(),b.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let t=0;t<W0.length;t++){let Z0=W0[t];b.__webglColorRenderbuffer[t]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,b.__webglColorRenderbuffer[t]);let O0=W.convert(Z0.format,Z0.colorSpace),C0=W.convert(Z0.type),N0=I(Z0.internalFormat,O0,C0,Z0.normalized,Z0.colorSpace,z.isXRRenderTarget===!0),H0=q9(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,H0,N0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+t,J.RENDERBUFFER,b.__webglColorRenderbuffer[t])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)b.__webglDepthRenderbuffer=J.createRenderbuffer(),A0(b.__webglDepthRenderbuffer,z,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){$.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),m0(J.TEXTURE_CUBE_MAP,R);for(let t=0;t<6;t++)if(R.mipmaps&&R.mipmaps.length>0)for(let Z0=0;Z0<R.mipmaps.length;Z0++)r(b.__webglFramebuffer[t][Z0],z,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,Z0);else r(b.__webglFramebuffer[t],z,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0);if(F(R))C(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(F0){for(let t=0,Z0=W0.length;t<Z0;t++){let O0=W0[t],C0=Z.get(O0),N0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)N0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(N0,C0.__webglTexture),m0(N0,O0),r(b.__webglFramebuffer,z,O0,J.COLOR_ATTACHMENT0+t,N0,0),F(O0))C(N0)}$.unbindTexture()}else{let t=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)t=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(t,s.__webglTexture),m0(t,R),R.mipmaps&&R.mipmaps.length>0)for(let Z0=0;Z0<R.mipmaps.length;Z0++)r(b.__webglFramebuffer[Z0],z,R,J.COLOR_ATTACHMENT0,t,Z0);else r(b.__webglFramebuffer,z,R,J.COLOR_ATTACHMENT0,t,0);if(F(R))C(t);$.unbindTexture()}if(z.depthBuffer)v0(z)}function n0(z){let R=z.textures;for(let b=0,s=R.length;b<s;b++){let W0=R[b];if(F(W0)){let U0=_(z),F0=Z.get(W0).__webglTexture;$.bindTexture(U0,F0),C(U0),$.unbindTexture()}}}let i0=[],O9=[];function G9(z){if(z.samples>0){if(v(z)===!1){let{textures:R,width:b,height:s}=z,W0=J.COLOR_BUFFER_BIT,U0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,F0=Z.get(z),t=R.length>1;if(t)for(let O0=0;O0<R.length;O0++)$.bindFramebuffer(J.FRAMEBUFFER,F0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,F0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,F0.__webglMultisampledFramebuffer);let Z0=z.texture.mipmaps;if(Z0&&Z0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglFramebuffer);for(let O0=0;O0<R.length;O0++){if(z.resolveDepthBuffer){if(z.depthBuffer)W0|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)W0|=J.STENCIL_BUFFER_BIT}if(t){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,F0.__webglColorRenderbuffer[O0]);let C0=Z.get(R[O0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,C0,0)}if(J.blitFramebuffer(0,0,b,s,0,0,b,s,W0,J.NEAREST),H===!0){if(i0.length=0,O9.length=0,i0.push(J.COLOR_ATTACHMENT0+O0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)i0.push(U0),O9.push(U0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,O9);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,i0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),t)for(let O0=0;O0<R.length;O0++){$.bindFramebuffer(J.FRAMEBUFFER,F0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,F0.__webglColorRenderbuffer[O0]);let C0=Z.get(R[O0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,F0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,C0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,F0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&H){let R=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function q9(z){return Math.min(K.maxSamples,z.samples)}function v(z){let R=Z.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function L9(z){let R=X.render.frame;if(q.get(z)!==R)q.set(z,R),z.update()}function r0(z,R){let{colorSpace:b,format:s,type:W0}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return R;if(b!==L$&&b!==NJ)if(s0.getTransfer(b)===H9){if(s!==R8||W0!==H8)j0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else b0("WebGLTextures: Unsupported texture color space:",b);return R}function X9(z){if(typeof HTMLImageElement!=="undefined"&&z instanceof HTMLImageElement)N.width=z.naturalWidth||z.width,N.height=z.naturalHeight||z.height;else if(typeof VideoFrame!=="undefined"&&z instanceof VideoFrame)N.width=z.displayWidth,N.height=z.displayHeight;else N.width=z.width,N.height=z.height;return N}this.allocateTextureUnit=n,this.resetTextureUnits=d,this.getTextureUnits=w,this.setTextureUnits=S,this.setTexture2D=K0,this.setTexture2DArray=i,this.setTexture3D=$0,this.setTextureCube=X0,this.rebindTextures=g0,this.setupRenderTarget=y0,this.updateRenderTargetMipmap=n0,this.updateMultisampleRenderTarget=G9,this.setupDepthRenderbuffer=v0,this.setupFrameBufferTexture=r,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function H5(J,Q){function $(Z,K=NJ){let W,X=s0.getTransfer(K);if(Z===H8)return J.UNSIGNED_BYTE;if(Z===fQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===xQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===sK)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===iK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===cK)return J.BYTE;if(Z===nK)return J.SHORT;if(Z===E6)return J.UNSIGNED_SHORT;if(Z===hQ)return J.INT;if(Z===r8)return J.UNSIGNED_INT;if(Z===b8)return J.FLOAT;if(Z===O8)return J.HALF_FLOAT;if(Z===oK)return J.ALPHA;if(Z===aK)return J.RGB;if(Z===R8)return J.RGBA;if(Z===YJ)return J.DEPTH_COMPONENT;if(Z===HJ)return J.DEPTH_STENCIL;if(Z===rK)return J.RED;if(Z===gQ)return J.RED_INTEGER;if(Z===UJ)return J.RG;if(Z===pQ)return J.RG_INTEGER;if(Z===mQ)return J.RGBA_INTEGER;if(Z===U7||Z===N7||Z===G7||Z===q7)if(X===H9)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===U7)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===N7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===G7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===q7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===U7)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===N7)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===G7)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===q7)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===dQ||Z===uQ||Z===lQ||Z===cQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===dQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===uQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===lQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===cQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===nQ||Z===sQ||Z===iQ||Z===oQ||Z===aQ||Z===F7||Z===rQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===nQ||Z===sQ)return X===H9?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===iQ)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===oQ)return W.COMPRESSED_R11_EAC;if(Z===aQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===F7)return W.COMPRESSED_RG11_EAC;if(Z===rQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===tQ||Z===eQ||Z===J$||Z===Q$||Z===$$||Z===Z$||Z===K$||Z===W$||Z===X$||Z===Y$||Z===H$||Z===U$||Z===N$||Z===G$)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===tQ)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===eQ)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===J$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===Q$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===$$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===Z$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===K$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===W$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===X$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===Y$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===H$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===U$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===N$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===G$)return X===H9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===q$||Z===F$||Z===E$)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===q$)return X===H9?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===F$)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===E$)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===D$||Z===O$||Z===E7||Z===R$)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===D$)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===O$)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===E7)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===R$)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===cJ)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var U5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N5=`
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

}`;class nW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new P7(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new u9({vertexShader:U5,fragmentShader:N5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new i9(new I6(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sW extends M8{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,H=null,N=null,q=null,U=null,G=null,E=null,O=typeof XRWebGLBinding!=="undefined",B=new nW,D={},F=Q.getContextAttributes(),C=null,_=null,I=[],A=[],P=new h0,k=null,L=null,V=new h9;V.viewport=new Z9;let m=new h9;m.viewport=new Z9;let j=[V,m],y=new c$,d=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let g=I[T];if(g===void 0)g=new R6,I[T]=g;return g.getTargetRaySpace()},this.getControllerGrip=function(T){let g=I[T];if(g===void 0)g=new R6,I[T]=g;return g.getGripSpace()},this.getHand=function(T){let g=I[T];if(g===void 0)g=new R6,I[T]=g;return g.getHandSpace()};function S(T){let g=A.indexOf(T.inputSource);if(g===-1)return;let p=I[g];if(p!==void 0)p.update(T.inputSource,T.frame,H||W),p.dispatchEvent({type:T.type,data:T.inputSource})}function n(){Z.removeEventListener("select",S),Z.removeEventListener("selectstart",S),Z.removeEventListener("selectend",S),Z.removeEventListener("squeeze",S),Z.removeEventListener("squeezestart",S),Z.removeEventListener("squeezeend",S),Z.removeEventListener("end",n),Z.removeEventListener("inputsourceschange",u);for(let T=0;T<I.length;T++){let g=A[T];if(g===null)continue;A[T]=null,I[T].disconnect(g)}d=null,w=null,B.reset();for(let T in D)delete D[T];if(J.setRenderTarget(C),G=null,U=null,q=null,Z=null,_=null,m0.stop(),$.isPresenting=!1,J.setPixelRatio(k),J.setSize(P.width,P.height,!1),L!==null){let T=L.camera;T.fov=L.fov,T.zoom=L.zoom,T.updateProjectionMatrix(),L=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){if(K=T,$.isPresenting===!0)j0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){if(X=T,$.isPresenting===!0)j0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(T){H=T},this.getBaseLayer=function(){return U!==null?U:G},this.getBinding=function(){if(q===null&&O)q=new XRWebGLBinding(Z,Q);return q},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(T){if(Z=T,Z!==null){if(C=J.getRenderTarget(),Z.addEventListener("select",S),Z.addEventListener("selectstart",S),Z.addEventListener("selectend",S),Z.addEventListener("squeeze",S),Z.addEventListener("squeezestart",S),Z.addEventListener("squeezeend",S),Z.addEventListener("end",n),Z.addEventListener("inputsourceschange",u),F.xrCompatible!==!0)await Q.makeXRCompatible();if(k=J.getPixelRatio(),J.getSize(P),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let p={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:K};G=new XRWebGLLayer(Z,Q,p),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),_=new s9(G.framebufferWidth,G.framebufferHeight,{format:R8,type:H8,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let p=null,a=null,Q0=null;if(F.depth)Q0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,p=F.stencil?HJ:YJ,a=F.stencil?cJ:r8;let r={colorFormat:Q.RGBA8,depthFormat:Q0,scaleFactor:K};q=this.getBinding(),U=q.createProjectionLayer(r),Z.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),_=new s9(U.textureWidth,U.textureHeight,{format:R8,type:H8,depthTexture:new GJ(U.textureWidth,U.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,p),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1,resolveStencilBuffer:U.ignoreDepthValues===!1,storeMultisampledDepthBuffer:U.ignoreDepthValues===!1,storeMultisampledStencilBuffer:U.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await Z.requestReferenceSpace(X),m0.setContext(Z),m0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function u(T){for(let g=0;g<T.removed.length;g++){let p=T.removed[g],a=A.indexOf(p);if(a>=0)A[a]=null,I[a].disconnect(p)}for(let g=0;g<T.added.length;g++){let p=T.added[g],a=A.indexOf(p);if(a===-1){for(let r=0;r<I.length;r++)if(r>=A.length){A.push(p),a=r;break}else if(A[r]===null){A[r]=p,a=r;break}if(a===-1)break}let Q0=I[a];if(Q0)Q0.connect(p)}}let K0=new x,i=new x;function $0(T,g,p){K0.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(p.matrixWorld);let a=K0.distanceTo(i),Q0=g.projectionMatrix.elements,r=p.projectionMatrix.elements,A0=Q0[14]/(Q0[10]-1),q0=Q0[14]/(Q0[10]+1),v0=(Q0[9]+1)/Q0[5],g0=(Q0[9]-1)/Q0[5],y0=(Q0[8]-1)/Q0[0],n0=(r[8]+1)/r[0],i0=A0*y0,O9=A0*n0,G9=a/(-y0+n0),q9=G9*-y0;if(g.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(q9),T.translateZ(G9),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),Q0[10]===-1)T.projectionMatrix.copy(g.projectionMatrix),T.projectionMatrixInverse.copy(g.projectionMatrixInverse);else{let v=A0+G9,L9=q0+G9,r0=i0-q9,X9=O9+(a-q9),z=v0*q0/L9*v,R=g0*q0/L9*v;T.projectionMatrix.makePerspective(r0,X9,z,R,v,L9),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function X0(T,g){if(g===null)T.matrixWorld.copy(T.matrix);else T.matrixWorld.multiplyMatrices(g.matrixWorld,T.matrix);T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(Z===null)return;let{near:g,far:p}=T;if(B.texture!==null){if(B.depthNear>0)g=B.depthNear;if(B.depthFar>0)p=B.depthFar}if(y.near=m.near=V.near=g,y.far=m.far=V.far=p,d!==y.near||w!==y.far)Z.updateRenderState({depthNear:y.near,depthFar:y.far}),d=y.near,w=y.far;y.layers.mask=T.layers.mask|6,V.layers.mask=y.layers.mask&-5,m.layers.mask=y.layers.mask&-3;let a=T.parent,Q0=y.cameras;X0(y,a);for(let r=0;r<Q0.length;r++)X0(Q0[r],a);if(Q0.length===2)$0(y,V,m);else y.projectionMatrix.copy(V.projectionMatrix);if(L===null&&T.isPerspectiveCamera)L={camera:T,fov:T.fov,zoom:T.zoom};w0(T,y,a)};function w0(T,g,p){if(p===null)T.matrix.copy(g.matrixWorld);else T.matrix.copy(p.matrixWorld),T.matrix.invert(),T.matrix.multiply(g.matrixWorld);if(T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(g.projectionMatrix),T.projectionMatrixInverse.copy(g.projectionMatrixInverse),T.isPerspectiveCamera)T.fov=pJ*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1}this.getCamera=function(){return y},this.getFoveation=function(){if(U===null&&G===null)return;return Y},this.setFoveation=function(T){if(Y=T,U!==null)U.fixedFoveation=T;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=T},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(y)},this.getCameraTexture=function(T){return D[T]};let _0=null;function l0(T,g){if(N=g.getViewerPose(H||W),E=g,N!==null){let p=N.views;if(G!==null)J.setRenderTargetFramebuffer(_,G.framebuffer),J.setRenderTarget(_);let a=!1;if(p.length!==y.cameras.length)y.cameras.length=0,a=!0;for(let q0=0;q0<p.length;q0++){let v0=p[q0],g0=null;if(G!==null)g0=G.getViewport(v0);else{let n0=q.getViewSubImage(U,v0);if(g0=n0.viewport,q0===0)J.setRenderTargetTextures(_,n0.colorTexture,n0.depthStencilTexture),J.setRenderTarget(_)}let y0=j[q0];if(y0===void 0)y0=new h9,y0.layers.enable(q0),y0.viewport=new Z9,j[q0]=y0;if(y0.matrix.fromArray(v0.transform.matrix),y0.matrix.decompose(y0.position,y0.quaternion,y0.scale),y0.projectionMatrix.fromArray(v0.projectionMatrix),y0.projectionMatrixInverse.copy(y0.projectionMatrix).invert(),y0.viewport.set(g0.x,g0.y,g0.width,g0.height),q0===0)y.matrix.copy(y0.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale);if(a===!0)y.cameras.push(y0)}let Q0=Z.enabledFeatures;if(Q0&&Q0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){q=$.getBinding();let q0=q.getDepthInformation(p[0]);if(q0&&q0.isValid&&q0.texture)B.init(q0,Z.renderState)}if(Q0&&Q0.includes("camera-access")&&O){J.state.unbindTexture(),q=$.getBinding();for(let q0=0;q0<p.length;q0++){let v0=p[q0].camera;if(v0){let g0=D[v0];if(!g0)g0=new P7,D[v0]=g0;let y0=q.getCameraImage(v0);g0.sourceTexture=y0}}}}for(let p=0;p<I.length;p++){let a=A[p],Q0=I[p];if(a!==null&&Q0!==void 0)Q0.update(a,g,H||W)}if(_0)_0(T,g);if(g.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:g});E=null}let m0=new yW;m0.setAnimationLoop(l0),this.setAnimationLoop=function(T){_0=T},this.dispose=function(){}}}var G5=new E9,iW=new f0;iW.set(-1,0,0,0,1,0,0,0,1);function q5(J,Q){function $(D,F){if(D.matrixAutoUpdate===!0)D.updateMatrix();F.value.copy(D.matrix)}function Z(D,F){if(F.color.getRGB(D.fogColor.value,T$(J)),F.isFog)D.fogNear.value=F.near,D.fogFar.value=F.far;else if(F.isFogExp2)D.fogDensity.value=F.density}function K(D,F,C,_,I){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)W(D,F);else if(F.isMeshLambertMaterial){if(W(D,F),F.envMap)D.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)W(D,F),U(D,F);else if(F.isMeshPhongMaterial){if(W(D,F),q(D,F),F.envMap)D.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(W(D,F),G(D,F),F.isMeshPhysicalMaterial)E(D,F,I)}else if(F.isMeshMatcapMaterial)W(D,F),O(D,F);else if(F.isMeshDepthMaterial)W(D,F);else if(F.isMeshDistanceMaterial)W(D,F),B(D,F);else if(F.isMeshNormalMaterial)W(D,F);else if(F.isLineBasicMaterial){if(X(D,F),F.isLineDashedMaterial)Y(D,F)}else if(F.isPointsMaterial)H(D,F,C,_);else if(F.isSpriteMaterial)N(D,F);else if(F.isShadowMaterial)D.color.value.copy(F.color),D.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function W(D,F){if(D.opacity.value=F.opacity,F.color)D.diffuse.value.copy(F.color);if(F.emissive)D.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)D.map.value=F.map,$(F.map,D.mapTransform);if(F.alphaMap)D.alphaMap.value=F.alphaMap,$(F.alphaMap,D.alphaMapTransform);if(F.bumpMap){if(D.bumpMap.value=F.bumpMap,$(F.bumpMap,D.bumpMapTransform),D.bumpScale.value=F.bumpScale,F.side===p9)D.bumpScale.value*=-1}if(F.normalMap){if(D.normalMap.value=F.normalMap,$(F.normalMap,D.normalMapTransform),D.normalScale.value.copy(F.normalScale),F.side===p9)D.normalScale.value.negate()}if(F.displacementMap)D.displacementMap.value=F.displacementMap,$(F.displacementMap,D.displacementMapTransform),D.displacementScale.value=F.displacementScale,D.displacementBias.value=F.displacementBias;if(F.emissiveMap)D.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,D.emissiveMapTransform);if(F.specularMap)D.specularMap.value=F.specularMap,$(F.specularMap,D.specularMapTransform);if(F.alphaTest>0)D.alphaTest.value=F.alphaTest;let C=Q.get(F),_=C.envMap,I=C.envMapRotation;if(_){if(D.envMap.value=_,D.envMapRotation.value.setFromMatrix4(G5.makeRotationFromEuler(I)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)D.envMapRotation.value.premultiply(iW);D.reflectivity.value=F.reflectivity,D.ior.value=F.ior,D.refractionRatio.value=F.refractionRatio}if(F.lightMap)D.lightMap.value=F.lightMap,D.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,D.lightMapTransform);if(F.aoMap)D.aoMap.value=F.aoMap,D.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,D.aoMapTransform)}function X(D,F){if(D.diffuse.value.copy(F.color),D.opacity.value=F.opacity,F.map)D.map.value=F.map,$(F.map,D.mapTransform)}function Y(D,F){D.dashSize.value=F.dashSize,D.totalSize.value=F.dashSize+F.gapSize,D.scale.value=F.scale}function H(D,F,C,_){if(D.diffuse.value.copy(F.color),D.opacity.value=F.opacity,D.size.value=F.size*C,D.scale.value=_*0.5,F.map)D.map.value=F.map,$(F.map,D.uvTransform);if(F.alphaMap)D.alphaMap.value=F.alphaMap,$(F.alphaMap,D.alphaMapTransform);if(F.alphaTest>0)D.alphaTest.value=F.alphaTest}function N(D,F){if(D.diffuse.value.copy(F.color),D.opacity.value=F.opacity,D.rotation.value=F.rotation,F.map)D.map.value=F.map,$(F.map,D.mapTransform);if(F.alphaMap)D.alphaMap.value=F.alphaMap,$(F.alphaMap,D.alphaMapTransform);if(F.alphaTest>0)D.alphaTest.value=F.alphaTest}function q(D,F){D.specular.value.copy(F.specular),D.shininess.value=Math.max(F.shininess,0.0001)}function U(D,F){if(F.gradientMap)D.gradientMap.value=F.gradientMap}function G(D,F){if(D.metalness.value=F.metalness,F.metalnessMap)D.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=F.roughness,F.roughnessMap)D.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,D.roughnessMapTransform);if(F.envMap)D.envMapIntensity.value=F.envMapIntensity}function E(D,F,C){if(D.ior.value=F.ior,F.sheen>0){if(D.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),D.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)D.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,D.sheenColorMapTransform);if(F.sheenRoughnessMap)D.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(D.clearcoat.value=F.clearcoat,D.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)D.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,D.clearcoatMapTransform);if(F.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(D.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===p9)D.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)D.dispersion.value=F.dispersion;if(F.retroreflectivity>0)D.retroreflectivity.value=F.retroreflectivity;if(F.iridescence>0){if(D.iridescence.value=F.iridescence,D.iridescenceIOR.value=F.iridescenceIOR,D.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],D.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)D.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,D.iridescenceMapTransform);if(F.iridescenceThicknessMap)D.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(F.transmission>0){if(D.transmission.value=F.transmission,D.transmissionSamplerMap.value=C.texture,D.transmissionSamplerSize.value.set(C.width,C.height),F.transmissionMap)D.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=F.thickness,F.thicknessMap)D.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=F.attenuationDistance,D.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(D.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)D.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=F.specularIntensity,D.specularColor.value.copy(F.specularColor),F.specularColorMap)D.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,D.specularColorMapTransform);if(F.specularIntensityMap)D.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,D.specularIntensityMapTransform)}function O(D,F){if(F.matcap)D.matcap.value=F.matcap}function B(D,F){let C=Q.get(F).light;D.referencePosition.value.setFromMatrixPosition(C.matrixWorld),D.nearDistance.value=C.shadow.camera.near,D.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function F5(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(I,A){let P=A.program;Z.uniformBlockBinding(I,P)}function N(I,A){let P=K[I.id];if(P===void 0)D(I),P=q(I),K[I.id]=P,I.addEventListener("dispose",C);let k=A.program;Z.updateUBOMapping(I,k);let L=Q.render.frame;if(W[I.id]!==L)G(I),W[I.id]=L}function q(I){let A=U();I.__bindingPointIndex=A;let P=J.createBuffer(),k=I.__size,L=I.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,k,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,P),P}function U(){for(let I=0;I<Y;I++)if(X.indexOf(I)===-1)return X.push(I),I;return b0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(I){let A=K[I.id],P=I.uniforms,k=I.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let L=0,V=P.length;L<V;L++){let m=P[L];if(Array.isArray(m))for(let j=0,y=m.length;j<y;j++)E(m[j],L,j,k);else E(m,L,0,k)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(I,A,P,k){if(B(I,A,P,k)===!0){let{__offset:L,value:V}=I;if(Array.isArray(V)){let m=0;for(let j=0;j<V.length;j++){let y=V[j],d=F(y);if(O(y,I.__data,m),typeof y!=="number"&&typeof y!=="boolean"&&!y.isMatrix3&&!ArrayBuffer.isView(y))m+=d.storage/Float32Array.BYTES_PER_ELEMENT}}else O(V,I.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,L,I.__data)}}function O(I,A,P){if(typeof I==="number"||typeof I==="boolean")A[0]=I;else if(I.isMatrix3)A[0]=I.elements[0],A[1]=I.elements[1],A[2]=I.elements[2],A[3]=0,A[4]=I.elements[3],A[5]=I.elements[4],A[6]=I.elements[5],A[7]=0,A[8]=I.elements[6],A[9]=I.elements[7],A[10]=I.elements[8],A[11]=0;else if(ArrayBuffer.isView(I))A.set(new I.constructor(I.buffer,I.byteOffset,A.length));else I.toArray(A,P)}function B(I,A,P,k){let L=I.value,V=A+"_"+P;if(k[V]===void 0){if(typeof L==="number"||typeof L==="boolean")k[V]=L;else if(ArrayBuffer.isView(L))k[V]=L.slice();else k[V]=L.clone();return!0}else{let m=k[V];if(typeof L==="number"||typeof L==="boolean"){if(m!==L)return k[V]=L,!0}else if(ArrayBuffer.isView(L))return!0;else if(m.equals(L)===!1)return m.copy(L),!0}return!1}function D(I){let A=I.uniforms,P=0,k=16;for(let V=0,m=A.length;V<m;V++){let j=Array.isArray(A[V])?A[V]:[A[V]];for(let y=0,d=j.length;y<d;y++){let w=j[y],S=Array.isArray(w.value)?w.value:[w.value];for(let n=0,u=S.length;n<u;n++){let K0=S[n],i=F(K0),$0=P%k,X0=$0%i.boundary,w0=$0+X0;if(P+=X0,w0!==0&&k-w0<i.storage)P+=k-w0;w.__data=new Float32Array(i.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=P,P+=i.storage}}}let L=P%k;if(L>0)P+=k-L;return I.__size=P,I.__cache={},this}function F(I){let A={boundary:0,storage:0};if(typeof I==="number"||typeof I==="boolean")A.boundary=4,A.storage=4;else if(I.isVector2)A.boundary=8,A.storage=8;else if(I.isVector3||I.isColor)A.boundary=16,A.storage=12;else if(I.isVector4)A.boundary=16,A.storage=16;else if(I.isMatrix3)A.boundary=48,A.storage=48;else if(I.isMatrix4)A.boundary=64,A.storage=64;else if(I.isTexture)j0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(I))A.boundary=16,A.storage=I.byteLength;else j0("WebGLRenderer: Unsupported uniform value type.",I);return A}function C(I){let A=I.target;A.removeEventListener("dispose",C);let P=X.indexOf(A.__bindingPointIndex);X.splice(P,1),J.deleteBuffer(K[A.id]),delete K[A.id],delete W[A.id]}function _(){for(let I in K)J.deleteBuffer(K[I]);X=[],K={},W={}}return{bind:H,update:N,dispose:_}}var E5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),I8=null;function D5(){if(I8===null)I8=new _$(E5,16,16,UJ,O8),I8.name="DFG_LUT",I8.minFilter=m9,I8.magFilter=m9,I8.wrapS=Y7,I8.wrapT=Y7,I8.generateMipmaps=!1,I8.needsUpdate=!0;return I8}class XZ{constructor(J={}){let{canvas:Q=XW(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:N="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:U=!1,outputBufferType:G=H8}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext!=="undefined"&&$ instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=W;let O=G,B=new Set([mQ,pQ,gQ]),D=new Set([H8,r8,E6,cJ,fQ,xQ]),F=new Uint32Array(4),C=new Int32Array(4),_=new x,I=null,A=null,P=[],k=[],L=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Y8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,m=!1,j=null,y=null,d=null,w=null;this._outputColorSpace=eK;let S=0,n=0,u=null,K0=-1,i=null,$0=new Z9,X0=new Z9,w0=null,_0=new a0(0),l0=0,m0=Q.width,T=Q.height,g=1,p=null,a=null,Q0=new Z9(0,0,m0,T),r=new Z9(0,0,m0,T),A0=!1,q0=new A7,v0=!1,g0=!1,y0=new E9,n0=new x,i0=new Z9,O9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},G9=!1;function q9(){return u===null?g:1}let v=$;function L9(M,h){return Q.getContext(M,h)}let r0,X9,z,R,b,s,W0,U0,F0,t,Z0,O0,C0,N0,H0,T0,S0,t0,f,E0,J0,D0,I0;try{let M={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:N,failIfMajorPerformanceCaveat:q};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${NK}`);if(Q.addEventListener("webglcontextlost",p0,!1),Q.addEventListener("webglcontextrestored",U9,!1),Q.addEventListener("webglcontextcreationerror",e0,!1),v===null){if(v=L9("webgl2",M),v===null)if(L9("webgl2"))throw new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y0()}catch(M){throw Q.removeEventListener("webglcontextlost",p0,!1),Q.removeEventListener("webglcontextrestored",U9,!1),Q.removeEventListener("webglcontextcreationerror",e0,!1),b0("WebGLRenderer: "+M.message),M}function Y0(){if(r0=new BN(v),r0.init(),J0=new H5(v,r0),X9=new qN(v,r0,J,J0),z=new X5(v,r0),X9.reversedDepthBuffer&&U)z.buffers.depth.setReversed(!0);y=v.createFramebuffer(),d=v.createFramebuffer(),w=v.createFramebuffer(),R=new zN(v),b=new nG,s=new Y5(v,r0,z,b,X9,J0,R),W0=new VN(V),U0=new kY(v),D0=new NN(v,U0),F0=new CN(v,U0,R,D0),t=new kN(v,F0,U0,D0,R),t0=new PN(v,X9,s),H0=new FN(b),Z0=new cG(V,W0,r0,X9,D0,H0),O0=new q5(V,b),C0=new iG,N0=new J5(r0),S0=new UN(V,W0,z,t,E,Y),T0=new W5(V,t,X9),I0=new F5(v,R,X9,z),f=new GN(v,r0,R),E0=new AN(v,r0,R),R.programs=Z0.programs,V.capabilities=X9,V.extensions=r0,V.properties=b,V.renderLists=C0,V.shadowMap=T0,V.state=z,V.info=R}if(O!==H8)L=new wN(O,Q.width,Q.height,X,Z,K);let R0=new sW(V,v);this.xr=R0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let M=r0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=r0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return g},this.setPixelRatio=function(M){if(M===void 0)return;g=M,this.setSize(m0,T,!1)},this.getSize=function(M){return M.set(m0,T)},this.setSize=function(M,h,o=!0){if(R0.isPresenting){j0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(m0=M,T=h,Q.width=Math.floor(M*g),Q.height=Math.floor(h*g),o===!0)Q.style.width=M+"px",Q.style.height=h+"px";if(L!==null)L.setSize(Q.width,Q.height);this.setViewport(0,0,M,h)},this.getDrawingBufferSize=function(M){return M.set(m0*g,T*g).floor()},this.setDrawingBufferSize=function(M,h,o){m0=M,T=h,g=o,Q.width=Math.floor(M*o),Q.height=Math.floor(h*o),this.setViewport(0,0,M,h)},this.setEffects=function(M){if(O===H8){b0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let h=0;h<M.length;h++)if(M[h].isOutputPass===!0){j0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($0)},this.getViewport=function(M){return M.copy(Q0)},this.setViewport=function(M,h,o,l){if(M.isVector4)Q0.set(M.x,M.y,M.z,M.w);else Q0.set(M,h,o,l);z.viewport($0.copy(Q0).multiplyScalar(g).round())},this.getScissor=function(M){return M.copy(r)},this.setScissor=function(M,h,o,l){if(M.isVector4)r.set(M.x,M.y,M.z,M.w);else r.set(M,h,o,l);z.scissor(X0.copy(r).multiplyScalar(g).round())},this.getScissorTest=function(){return A0},this.setScissorTest=function(M){z.setScissorTest(A0=M)},this.setOpaqueSort=function(M){p=M},this.setTransparentSort=function(M){a=M},this.getClearColor=function(M){return M.copy(S0.getClearColor())},this.setClearColor=function(){S0.setClearColor(...arguments)},this.getClearAlpha=function(){return S0.getClearAlpha()},this.setClearAlpha=function(){S0.setClearAlpha(...arguments)},this.clear=function(M=!0,h=!0,o=!0){let l=0;if(M){let c=!1;if(u!==null){let L0=u.texture.format;c=B.has(L0)}if(c){let L0=u.texture.type,B0=D.has(L0),M0=S0.getClearColor(),z0=S0.getClearAlpha(),k0=M0.r,d0=M0.g,c0=M0.b;if(B0)F[0]=k0,F[1]=d0,F[2]=c0,F[3]=z0,v.clearBufferuiv(v.COLOR,0,F);else C[0]=k0,C[1]=d0,C[2]=c0,C[3]=z0,v.clearBufferiv(v.COLOR,0,C)}else l|=v.COLOR_BUFFER_BIT}if(h)l|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(o)l|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(l!==0)v.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),j=M},this.dispose=function(){Q.removeEventListener("webglcontextlost",p0,!1),Q.removeEventListener("webglcontextrestored",U9,!1),Q.removeEventListener("webglcontextcreationerror",e0,!1),S0.dispose(),C0.dispose(),N0.dispose(),b.dispose(),W0.dispose(),t.dispose(),D0.dispose(),I0.dispose(),Z0.dispose(),R0.dispose(),R0.removeEventListener("sessionstart",vZ),R0.removeEventListener("sessionend",bZ),e8.stop()};function p0(M){M.preventDefault(),U6("WebGLRenderer: Context Lost."),m=!0}function U9(){U6("WebGLRenderer: Context Restored."),m=!1;let M=R.autoReset,h=T0.enabled,o=T0.autoUpdate,l=T0.needsUpdate,c=T0.type;Y0(),R.autoReset=M,T0.enabled=h,T0.autoUpdate=o,T0.needsUpdate=l,T0.type=c}function e0(M){b0("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function N8(M){let h=M.target;h.removeEventListener("dispose",N8),P8(h)}function P8(M){CX(M),b.remove(M)}function CX(M){let h=b.get(M).programs;if(h!==void 0){if(h.forEach(function(o){Z0.releaseProgram(o)}),M.isShaderMaterial)Z0.releaseShaderCache(M)}}this.renderBufferDirect=function(M,h,o,l,c,L0){if(h===null)h=O9;let B0=c.isMesh&&c.matrixWorld.determinantAffine()<0,M0=PX(M,h,o,l,c);z.setMaterial(l,B0);let z0=o.index,k0=1;if(l.wireframe===!0){if(z0=F0.getWireframeAttribute(o),z0===void 0)return;k0=2}let d0=o.drawRange,c0=o.attributes.position,P0=d0.start*k0,J9=(d0.start+d0.count)*k0;if(L0!==null)P0=Math.max(P0,L0.start*k0),J9=Math.min(J9,(L0.start+L0.count)*k0);if(z0!==null)P0=Math.max(P0,0),J9=Math.min(J9,z0.count);else if(c0!==void 0&&c0!==null)P0=Math.max(P0,0),J9=Math.min(J9,c0.count);let R9=J9-P0;if(R9<0||R9===1/0)return;D0.setup(c,l,M0,o,z0);let F9,Y9=f;if(z0!==null)F9=U0.get(z0),Y9=E0,Y9.setIndex(F9);if(c.isMesh)if(l.wireframe===!0)z.setLineWidth(l.wireframeLinewidth*q9()),Y9.setMode(v.LINES);else Y9.setMode(v.TRIANGLES);else if(c.isLine){let _9=l.linewidth;if(_9===void 0)_9=1;if(z.setLineWidth(_9*q9()),c.isLineSegments)Y9.setMode(v.LINES);else if(c.isLineLoop)Y9.setMode(v.LINE_LOOP);else Y9.setMode(v.LINE_STRIP)}else if(c.isPoints)Y9.setMode(v.POINTS);else if(c.isSprite)Y9.setMode(v.TRIANGLES);if(c.isBatchedMesh)if(!r0.get("WEBGL_multi_draw")){let{_multiDrawStarts:_9,_multiDrawCounts:V0,_multiDrawCount:b9}=c,o0=z0?U0.get(z0).bytesPerElement:1,o9=b.get(l).currentProgram.getUniforms();for(let G8=0;G8<b9;G8++)o9.setValue(v,"_gl_DrawID",G8),Y9.render(_9[G8]/o0,V0[G8])}else Y9.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else if(c.isInstancedMesh)Y9.renderInstances(P0,R9,c.count);else if(o.isInstancedBufferGeometry){let _9=o._maxInstanceCount!==void 0?o._maxInstanceCount:1/0,V0=Math.min(o.instanceCount,_9);Y9.renderInstances(P0,R9,V0)}else Y9.render(P0,R9)};function jZ(M,h,o,l){if(j!==null&&M.isNodeMaterial)j.setObject(l,M);if(v0===!0)H0.setState(M,o,!1);if(M.transparent===!0&&M.side===E8&&M.forceSinglePass===!1)M.side=p9,M.needsUpdate=!0,h6(M,h,l),M.side=dJ,M.needsUpdate=!0,h6(M,h,l),M.side=E8;else h6(M,h,l)}this.compile=function(M,h,o=null){if(o===null)o=M;if(j!==null)j.renderStart(M,h,o);if(A=N0.get(o),A.init(h),k.push(A),o.traverseVisible(function(c){if(c.isLight&&c.layers.test(h.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}}),M!==o)M.traverseVisible(function(c){if(c.isLight&&c.layers.test(h.layers)){if(A.pushLight(c),c.castShadow)A.pushShadow(c)}});if(A.setupLights(),j!==null)j.updateLights(A.state.lightsArray);if(g0=this.localClippingEnabled,v0=H0.init(this.clippingPlanes,g0),v0===!0)H0.setGlobalState(this.clippingPlanes,h);if(j!==null)T0.render(A.state.shadowsArray,o,h);let l=new Set;if(M.traverse(function(c){if(!(c.isMesh||c.isPoints||c.isLine||c.isSprite))return;let L0=c.material;if(L0)if(Array.isArray(L0))for(let B0=0;B0<L0.length;B0++){let M0=L0[B0];jZ(M0,o,h,c),l.add(M0)}else jZ(L0,o,h,c),l.add(L0)}),A=k.pop(),j!==null)j.renderEnd();return l},this.compileAsync=function(M,h,o=null){let l=this.compile(M,h,o);return new Promise((c)=>{function L0(){if(l.forEach(function(B0){let z0=b.get(B0).currentProgram;if(z0===void 0||z0.isReady())l.delete(B0)}),l.size===0){c(M);return}setTimeout(L0,10)}if(r0.get("KHR_parallel_shader_compile")!==null)L0();else setTimeout(L0,10)})};let QQ=null;function AX(M){if(QQ)QQ(M)}function vZ(){e8.stop()}function bZ(){e8.start()}let e8=new yW;if(e8.setAnimationLoop(AX),typeof self!=="undefined")e8.setContext(self);this.setAnimationLoop=function(M){QQ=M,R0.setAnimationLoop(M),M===null?e8.stop():e8.start()},R0.addEventListener("sessionstart",vZ),R0.addEventListener("sessionend",bZ),this.render=function(M,h){if(h!==void 0&&h.isCamera!==!0){b0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;if(j!==null)j.renderStart(M,h);let o=R0.enabled===!0&&R0.isPresenting===!0,l=L!==null&&(u===null||o)&&L.begin(V,u);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(h.parent===null&&h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(R0.enabled===!0&&R0.isPresenting===!0&&(L===null||L.isCompositing()===!1)){if(R0.cameraAutoUpdate===!0)R0.updateCamera(h);h=R0.getCamera()}if(M.isScene===!0)M.onBeforeRender(V,M,h,u);if(A=N0.get(M,k.length),A.init(h),A.state.textureUnits=s.getTextureUnits(),k.push(A),y0.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),q0.setFromProjectionMatrix(y0,B$,h.reversedDepth),g0=this.localClippingEnabled,v0=H0.init(this.clippingPlanes,g0),I=C0.get(M,P.length),I.init(),P.push(I),R0.enabled===!0&&R0.isPresenting===!0){let B0=V.xr.getDepthSensingMesh();if(B0!==null)$Q(B0,h,-1/0,V.sortObjects)}if($Q(M,h,0,V.sortObjects),I.finish(),j!==null)j.updateLights(A.state.lightsArray);if(V.sortObjects===!0)I.sort(p,a);if(G9=R0.enabled===!1||R0.isPresenting===!1||R0.hasDepthSensing()===!1,G9)S0.addToRenderList(I,M);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(v0===!0)H0.beginShadows();let c=A.state.shadowsArray;if(T0.render(c,M,h),v0===!0)H0.endShadows();if((l&&L.hasRenderPass())===!1){let{opaque:B0,transmissive:M0}=I;if(A.setupLights(),h.isArrayCamera){let z0=h.cameras;if(M0.length>0)for(let k0=0,d0=z0.length;k0<d0;k0++){let c0=z0[k0];hZ(B0,M0,M,c0)}if(G9)S0.render(M);for(let k0=0,d0=z0.length;k0<d0;k0++){let c0=z0[k0];yZ(I,M,c0,c0.viewport)}}else{if(M0.length>0)hZ(B0,M0,M,h);if(G9)S0.render(M);yZ(I,M,h)}}if(u!==null&&n===0)s.updateMultisampleRenderTarget(u),s.updateRenderTargetMipmap(u);if(l)L.end(V);if(M.isScene===!0)M.onAfterRender(V,M,h);if(D0.resetDefaultState(),K0=-1,i=null,k.pop(),k.length>0){if(A=k[k.length-1],s.setTextureUnits(A.state.textureUnits),v0===!0)H0.setGlobalState(V.clippingPlanes,A.state.camera)}else A=null;if(P.pop(),P.length>0)I=P[P.length-1];else I=null;if(j!==null)j.renderEnd()};function $Q(M,h,o,l){if(M.visible===!1)return;if(M.layers.test(h.layers)){if(M.isGroup)o=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(h)}else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight){if(A.pushLight(M),M.castShadow)A.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(q0)){if(l)i0.setFromMatrixPosition(M.matrixWorld).applyMatrix4(y0);let B0=t.update(M),M0=M.material;if(M0.visible)I.push(M,B0,M0,o,i0.z,null,h)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||M.intersectsFrustum(q0)){let B0=t.update(M),M0=M.material;if(l){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();i0.copy(M.boundingSphere.center)}else{if(B0.boundingSphere===null)B0.computeBoundingSphere();i0.copy(B0.boundingSphere.center)}i0.applyMatrix4(M.matrixWorld).applyMatrix4(y0)}if(Array.isArray(M0)){let z0=B0.groups;for(let k0=0,d0=z0.length;k0<d0;k0++){let c0=z0[k0],P0=M0[c0.materialIndex];if(P0&&P0.visible)I.push(M,B0,P0,o,i0.z,c0,h)}}else if(M0.visible)I.push(M,B0,M0,o,i0.z,null,h)}}}let L0=M.children;for(let B0=0,M0=L0.length;B0<M0;B0++)$Q(L0[B0],h,o,l)}function yZ(M,h,o,l){let{opaque:c,transmissive:L0,transparent:B0}=M;if(A.setupLightsView(o),v0===!0)H0.setGlobalState(V.clippingPlanes,o);if(l)z.viewport($0.copy(l));if(c.length>0)y6(c,h,o);if(L0.length>0)y6(L0,h,o);if(B0.length>0)y6(B0,h,o);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function hZ(M,h,o,l){if((o.isScene===!0?o.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[l.id]===void 0){let P0=r0.has("EXT_color_buffer_half_float")||r0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[l.id]=new s9(1,1,{generateMipmaps:!0,type:P0?O8:H8,minFilter:XJ,samples:Math.max(4,X9.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:s0.workingColorSpace})}let L0=A.state.transmissionRenderTarget[l.id],B0=l.viewport||$0;L0.setSize(B0.z*V.transmissionResolutionScale,B0.w*V.transmissionResolutionScale);let M0=V.getRenderTarget(),z0=V.getActiveCubeFace(),k0=V.getActiveMipmapLevel();if(V.setRenderTarget(L0),V.getClearColor(_0),l0=V.getClearAlpha(),l0<1)V.setClearColor(16777215,0.5);if(V.clear(),G9)S0.render(o);let d0=V.toneMapping;V.toneMapping=Y8;let c0=l.viewport;if(l.viewport!==void 0)l.viewport=void 0;if(A.setupLightsView(l),v0===!0)H0.setGlobalState(V.clippingPlanes,l);if(y6(M,o,l),s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0),r0.has("WEBGL_multisampled_render_to_texture")===!1){let P0=!1;for(let J9=0,R9=h.length;J9<R9;J9++){let F9=h[J9],{object:Y9,geometry:_9,material:V0,group:b9}=F9;if(V0.side===E8&&Y9.layers.test(l.layers)){let o0=V0.side;V0.side=p9,V0.needsUpdate=!0,fZ(Y9,o,l,_9,V0,b9),V0.side=o0,V0.needsUpdate=!0,P0=!0}}if(P0===!0)s.updateMultisampleRenderTarget(L0),s.updateRenderTargetMipmap(L0)}if(V.setRenderTarget(M0,z0,k0),V.setClearColor(_0,l0),c0!==void 0)l.viewport=c0;V.toneMapping=d0}function y6(M,h,o){let l=h.isScene===!0?h.overrideMaterial:null;for(let c=0,L0=M.length;c<L0;c++){let B0=M[c],{object:M0,geometry:z0,group:k0}=B0,d0=B0.material;if(d0.allowOverride===!0&&l!==null)d0=l;if(M0.layers.test(o.layers))fZ(M0,h,o,z0,d0,k0)}}function fZ(M,h,o,l,c,L0){if(j!==null&&c.isNodeMaterial)j.setObject(M,c);if(M.onBeforeRender(V,h,o,l,c,L0),M.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),c.onBeforeRender(V,h,o,l,M,L0),c.transparent===!0&&c.side===E8&&c.forceSinglePass===!1)c.side=p9,c.needsUpdate=!0,V.renderBufferDirect(o,h,l,c,M,L0),c.side=dJ,c.needsUpdate=!0,V.renderBufferDirect(o,h,l,c,M,L0),c.side=E8;else V.renderBufferDirect(o,h,l,c,M,L0);M.onAfterRender(V,h,o,l,c,L0)}function h6(M,h,o){if(h.isScene!==!0)h=O9;let l=b.get(M),c=A.state.lights,L0=A.state.shadowsArray,B0=c.state.version,M0=Z0.getParameters(M,c.state,L0,h,o,A.state.lightProbeGridArray),z0=Z0.getProgramCacheKey(M0),k0=l.programs;l.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?h.environment:null,l.fog=h.fog;let d0=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(l.envMap=W0.get(M.envMap||l.environment,d0),l.envMapRotation=l.environment!==null&&M.envMap===null?h.environmentRotation:M.envMapRotation,k0===void 0)M.addEventListener("dispose",N8),k0=new Map,l.programs=k0;let c0=k0.get(z0);if(c0!==void 0){if(l.currentProgram===c0&&l.lightsStateVersion===B0)return gZ(M,M0),c0}else{if(M0.uniforms=Z0.getUniforms(M),j!==null&&M.isNodeMaterial)j.build(M,o,M0);M.onBeforeCompile(M0,V),c0=Z0.acquireProgram(M0,z0),k0.set(z0,c0),l.uniforms=M0.uniforms}let P0=l.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)P0.clippingPlanes=H0.uniform;if(gZ(M,M0),l.needsLights=_X(M),l.lightsStateVersion=B0,l.needsLights)P0.ambientLightColor.value=c.state.ambient,P0.lightProbe.value=c.state.probe,P0.sunLights.value=c.state.sun,P0.sunLightShadows.value=c.state.sunShadow,P0.directionalLights.value=c.state.directional,P0.directionalLightShadows.value=c.state.directionalShadow,P0.spotLights.value=c.state.spot,P0.spotLightShadows.value=c.state.spotShadow,P0.rectAreaLights.value=c.state.rectArea,P0.ltc_1.value=c.state.rectAreaLTC1,P0.ltc_2.value=c.state.rectAreaLTC2,P0.pointLights.value=c.state.point,P0.pointLightShadows.value=c.state.pointShadow,P0.hemisphereLights.value=c.state.hemi,P0.sunShadowMatrix.value=c.state.sunShadowMatrix,P0.sunShadowCascade.value=c.state.sunShadowCascade,P0.directionalShadowMatrix.value=c.state.directionalShadowMatrix,P0.spotLightMatrix.value=c.state.spotLightMatrix,P0.spotLightMap.value=c.state.spotLightMap,P0.pointShadowMatrix.value=c.state.pointShadowMatrix;return l.lightProbeGrid=A.state.lightProbeGridArray.length>0,l.currentProgram=c0,l.uniformsList=null,c0}function xZ(M){if(M.uniformsList===null){let h=M.currentProgram.getUniforms();M.uniformsList=P6.seqWithValue(h.seq,M.uniforms)}return M.uniformsList}function gZ(M,h){let o=b.get(M);o.outputColorSpace=h.outputColorSpace,o.batching=h.batching,o.batchingColor=h.batchingColor,o.instancing=h.instancing,o.instancingColor=h.instancingColor,o.instancingMorph=h.instancingMorph,o.skinning=h.skinning,o.morphTargets=h.morphTargets,o.morphNormals=h.morphNormals,o.morphColors=h.morphColors,o.morphTargetsCount=h.morphTargetsCount,o.numClippingPlanes=h.numClippingPlanes,o.numIntersection=h.numClipIntersection,o.vertexAlphas=h.vertexAlphas,o.vertexTangents=h.vertexTangents,o.toneMapping=h.toneMapping}function zX(M,h){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(h.matrixWorld);for(let o=0,l=M.length;o<l;o++){let c=M[o];if(c.texture!==null&&c.boundingBox.containsPoint(_))return c}return null}function PX(M,h,o,l,c){if(h.isScene!==!0)h=O9;s.resetTextureUnits();let L0=h.fog,B0=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?h.environment:null,M0=u===null?V.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:s0.workingColorSpace,z0=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap,k0=W0.get(l.envMap||B0,z0),d0=l.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,c0=!!o.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),P0=!!o.morphAttributes.position,J9=!!o.morphAttributes.normal,R9=!!o.morphAttributes.color,F9=Y8;if(l.toneMapped){if(u===null||u.isXRRenderTarget===!0)F9=V.toneMapping}let Y9=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,_9=Y9!==void 0?Y9.length:0,V0=b.get(l),b9=A.state.lights;if(v0===!0){if(g0===!0||M!==i){let N9=M===i&&l.id===K0;H0.setState(l,M,N9)}}let o0=!1;if(l.version===V0.__version){if(V0.needsLights&&V0.lightsStateVersion!==b9.state.version)o0=!0;else if(V0.outputColorSpace!==M0)o0=!0;else if(c.isBatchedMesh&&V0.batching===!1)o0=!0;else if(!c.isBatchedMesh&&V0.batching===!0)o0=!0;else if(c.isBatchedMesh&&V0.batchingColor===!0&&c._colorsTexture===null)o0=!0;else if(c.isBatchedMesh&&V0.batchingColor===!1&&c._colorsTexture!==null)o0=!0;else if(c.isInstancedMesh&&V0.instancing===!1)o0=!0;else if(!c.isInstancedMesh&&V0.instancing===!0)o0=!0;else if(c.isSkinnedMesh&&V0.skinning===!1)o0=!0;else if(!c.isSkinnedMesh&&V0.skinning===!0)o0=!0;else if(c.isInstancedMesh&&V0.instancingColor===!0&&c.instanceColor===null)o0=!0;else if(c.isInstancedMesh&&V0.instancingColor===!1&&c.instanceColor!==null)o0=!0;else if(c.isInstancedMesh&&V0.instancingMorph===!0&&c.morphTexture===null)o0=!0;else if(c.isInstancedMesh&&V0.instancingMorph===!1&&c.morphTexture!==null)o0=!0;else if(V0.envMap!==k0)o0=!0;else if(l.fog===!0&&V0.fog!==L0)o0=!0;else if(V0.numClippingPlanes!==void 0&&(V0.numClippingPlanes!==H0.numPlanes||V0.numIntersection!==H0.numIntersection))o0=!0;else if(V0.vertexAlphas!==d0)o0=!0;else if(V0.vertexTangents!==c0)o0=!0;else if(V0.morphTargets!==P0)o0=!0;else if(V0.morphNormals!==J9)o0=!0;else if(V0.morphColors!==R9)o0=!0;else if(V0.toneMapping!==F9)o0=!0;else if(V0.morphTargetsCount!==_9)o0=!0;else if(!!V0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)o0=!0}else o0=!0,V0.__version=l.version;let o9=V0.currentProgram;if(o0===!0){if(o9=h6(l,h,c),j&&l.isNodeMaterial)j.onUpdateProgram(l,o9,V0)}let G8=!1,g8=!1,VJ=!1,W9=o9.getUniforms(),D9=V0.uniforms;if(z.useProgram(o9.program))G8=!0,g8=!0,VJ=!0;if(l.id!==K0)K0=l.id,g8=!0;if(V0.needsLights){let N9=zX(A.state.lightProbeGridArray,c);if(V0.lightProbeGrid!==N9)V0.lightProbeGrid=N9,g8=!0}if(G8||i!==M){if(z.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();W9.setValue(v,"projectionMatrix",M.projectionMatrix),W9.setValue(v,"viewMatrix",M.matrixWorldInverse);let m8=W9.map.cameraPosition;if(m8!==void 0)m8.setValue(v,n0.setFromMatrixPosition(M.matrixWorld));if(X9.logarithmicDepthBuffer)W9.setValue(v,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)W9.setValue(v,"isOrthographic",M.isOrthographicCamera===!0);if(i!==M)i=M,g8=!0,VJ=!0}if(V0.needsLights){if(b9.state.sunShadowMap.length>0)W9.setValue(v,"sunShadowMap",b9.state.sunShadowMap,s);if(b9.state.directionalShadowMap.length>0)W9.setValue(v,"directionalShadowMap",b9.state.directionalShadowMap,s);if(b9.state.spotShadowMap.length>0)W9.setValue(v,"spotShadowMap",b9.state.spotShadowMap,s);if(b9.state.pointShadowMap.length>0)W9.setValue(v,"pointShadowMap",b9.state.pointShadowMap,s)}if(c.isSkinnedMesh){W9.setOptional(v,c,"bindMatrix"),W9.setOptional(v,c,"bindMatrixInverse");let N9=c.skeleton;if(N9){if(N9.boneTexture===null)N9.computeBoneTexture();W9.setValue(v,"boneTexture",N9.boneTexture,s)}}if(c.isBatchedMesh){if(W9.setOptional(v,c,"batchingTexture"),W9.setValue(v,"batchingTexture",c._matricesTexture,s),W9.setOptional(v,c,"batchingIdTexture"),W9.setValue(v,"batchingIdTexture",c._indirectTexture,s),W9.setOptional(v,c,"batchingColorTexture"),c._colorsTexture!==null)W9.setValue(v,"batchingColorTexture",c._colorsTexture,s)}let p8=o.morphAttributes;if(p8.position!==void 0||p8.normal!==void 0||p8.color!==void 0)t0.update(c,o,o9);if(g8||V0.receiveShadow!==c.receiveShadow)V0.receiveShadow=c.receiveShadow,W9.setValue(v,"receiveShadow",c.receiveShadow);if((l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial)&&l.envMap===null&&h.environment!==null)D9.envMapIntensity.value=h.environmentIntensity;if(D9.dfgLUT!==void 0)D9.dfgLUT.value=D5();if(g8){if(W9.setValue(v,"toneMappingExposure",V.toneMappingExposure),V0.needsLights)kX(D9,VJ);if(L0&&l.fog===!0)O0.refreshFogUniforms(D9,L0);if(O0.refreshMaterialUniforms(D9,l,g,T,A.state.transmissionRenderTarget[M.id]),V0.needsLights&&V0.lightProbeGrid){let N9=V0.lightProbeGrid;D9.probesSH.value=N9.texture,D9.probesMin.value.copy(N9.boundingBox.min),D9.probesMax.value.copy(N9.boundingBox.max),D9.probesResolution.value.copy(N9.resolution)}P6.upload(v,xZ(V0),D9,s)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)P6.upload(v,xZ(V0),D9,s),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)W9.setValue(v,"center",c.center);if(W9.setValue(v,"modelViewMatrix",c.modelViewMatrix),W9.setValue(v,"normalMatrix",c.normalMatrix),W9.setValue(v,"modelMatrix",c.matrixWorld),l.uniformsGroups!==void 0){let N9=l.uniformsGroups;for(let m8=0,BJ=N9.length;m8<BJ;m8++){let mZ=N9[m8];I0.update(mZ,o9),I0.bind(mZ,o9)}}return o9}function kX(M,h){M.ambientLightColor.needsUpdate=h,M.lightProbe.needsUpdate=h,M.sunLights.needsUpdate=h,M.sunLightShadows.needsUpdate=h,M.directionalLights.needsUpdate=h,M.directionalLightShadows.needsUpdate=h,M.pointLights.needsUpdate=h,M.pointLightShadows.needsUpdate=h,M.spotLights.needsUpdate=h,M.spotLightShadows.needsUpdate=h,M.rectAreaLights.needsUpdate=h,M.hemisphereLights.needsUpdate=h}function _X(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(M,h,o){let l=b.get(M);if(l.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,l.__autoAllocateDepthBuffer===!1)l.__useRenderToTexture=!1;b.get(M.texture).__webglTexture=h,b.get(M.depthTexture).__webglTexture=l.__autoAllocateDepthBuffer?void 0:o,l.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,h){let o=b.get(M);o.__webglFramebuffer=h,o.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(M,h=0,o=0){u=M,S=h,n=o;let l=null,c=!1,L0=!1;if(M){let M0=b.get(M);if(M0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(v.FRAMEBUFFER,M0.__webglFramebuffer),$0.copy(M.viewport),X0.copy(M.scissor),w0=M.scissorTest,z.viewport($0),z.scissor(X0),z.setScissorTest(w0),K0=-1;return}else if(M0.__webglFramebuffer===void 0)s.setupRenderTarget(M);else if(M0.__hasExternalTextures)s.rebindTextures(M,b.get(M.texture).__webglTexture,b.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let d0=M.depthTexture;if(M0.__boundDepthTexture!==d0){if(d0!==null&&b.has(d0)&&(M.width!==d0.image.width||M.height!==d0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s.setupDepthRenderbuffer(M)}}let z0=M.texture;if(z0.isData3DTexture||z0.isDataArrayTexture||z0.isCompressedArrayTexture)L0=!0;let k0=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(k0[h]))l=k0[h][o];else l=k0[h];c=!0}else if(M.samples>0&&s.useMultisampledRTT(M)===!1)l=b.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(k0))l=k0[o];else l=k0;$0.copy(M.viewport),X0.copy(M.scissor),w0=M.scissorTest}else $0.copy(Q0).multiplyScalar(g).floor(),X0.copy(r).multiplyScalar(g).floor(),w0=A0;if(o!==0)l=y;if(z.bindFramebuffer(v.FRAMEBUFFER,l))z.drawBuffers(M,l);if(z.viewport($0),z.scissor(X0),z.setScissorTest(w0),c){let M0=b.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+h,M0.__webglTexture,o)}else if(L0){let M0=h;for(let z0=0;z0<M.textures.length;z0++){let k0=b.get(M.textures[z0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+z0,k0.__webglTexture,o,M0)}}else if(M!==null&&o!==0){let M0=b.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,M0.__webglTexture,o)}K0=-1};function pZ(M){let h=b.get(M);if(h.__readFormat!==M.format||h.__readType!==M.type)h.__readFormat=M.format,h.__readType=M.type,h.__formatReadable=X9.textureFormatReadable(M.format),h.__typeReadable=X9.textureTypeReadable(M.type);return h}if(this.readRenderTargetPixels=function(M,h,o,l,c,L0,B0,M0=0){if(!(M&&M.isWebGLRenderTarget)){b0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z0=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&B0!==void 0)z0=z0[B0];if(z0){z.bindFramebuffer(v.FRAMEBUFFER,z0);try{let k0=M.textures[M0],d0=k0.format,c0=k0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let P0=pZ(k0);if(P0.__formatReadable===!1){b0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(P0.__typeReadable===!1){b0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(h>=0&&h<=M.width-l&&(o>=0&&o<=M.height-c))v.readPixels(h,o,l,c,J0.convert(d0),J0.convert(c0),L0)}finally{let k0=u!==null?b.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,k0)}}},this.readRenderTargetPixelsAsync=async function(M,h,o,l,c,L0,B0,M0=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z0=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&B0!==void 0)z0=z0[B0];if(z0)if(h>=0&&h<=M.width-l&&(o>=0&&o<=M.height-c)){z.bindFramebuffer(v.FRAMEBUFFER,z0);let k0=M.textures[M0],d0=k0.format,c0=k0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let P0=pZ(k0);if(P0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(P0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let J9=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,J9),v.bufferData(v.PIXEL_PACK_BUFFER,L0.byteLength,v.STREAM_READ),v.readPixels(h,o,l,c,J0.convert(d0),J0.convert(c0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let R9=u!==null?b.get(u).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,R9);let F9=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await HW(v,F9,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,J9),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,L0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(J9),v.deleteSync(F9),L0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,h=null,o=0){let l=Math.pow(2,-o),c=Math.floor(M.image.width*l),L0=Math.floor(M.image.height*l),B0=h!==null?h.x:0,M0=h!==null?h.y:0;s.setTexture2D(M,0),v.copyTexSubImage2D(v.TEXTURE_2D,o,0,0,B0,M0,c,L0),z.unbindTexture()},this.copyTextureToTexture=function(M,h,o=null,l=null,c=0,L0=0){let B0,M0,z0,k0,d0,c0,P0,J9,R9,F9=M.isCompressedTexture?M.mipmaps[L0]:M.image;if(o!==null)B0=o.max.x-o.min.x,M0=o.max.y-o.min.y,z0=o.isBox3?o.max.z-o.min.z:1,k0=o.min.x,d0=o.min.y,c0=o.isBox3?o.min.z:0;else{let D9=Math.pow(2,-c);if(B0=Math.floor(F9.width*D9),M0=Math.floor(F9.height*D9),M.isDataArrayTexture)z0=F9.depth;else if(M.isData3DTexture)z0=Math.floor(F9.depth*D9);else z0=1;k0=0,d0=0,c0=0}if(l!==null)P0=l.x,J9=l.y,R9=l.z;else P0=0,J9=0,R9=0;let Y9=J0.convert(h.format),_9=J0.convert(h.type),V0;if(h.isData3DTexture)s.setTexture3D(h,0),V0=v.TEXTURE_3D;else if(h.isDataArrayTexture||h.isCompressedArrayTexture)s.setTexture2DArray(h,0),V0=v.TEXTURE_2D_ARRAY;else s.setTexture2D(h,0),V0=v.TEXTURE_2D;z.activeTexture(v.TEXTURE0),z.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,h.flipY),z.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),z.pixelStorei(v.UNPACK_ALIGNMENT,h.unpackAlignment);let b9=z.getParameter(v.UNPACK_ROW_LENGTH),o0=z.getParameter(v.UNPACK_IMAGE_HEIGHT),o9=z.getParameter(v.UNPACK_SKIP_PIXELS),G8=z.getParameter(v.UNPACK_SKIP_ROWS),g8=z.getParameter(v.UNPACK_SKIP_IMAGES);z.pixelStorei(v.UNPACK_ROW_LENGTH,F9.width),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,F9.height),z.pixelStorei(v.UNPACK_SKIP_PIXELS,k0),z.pixelStorei(v.UNPACK_SKIP_ROWS,d0),z.pixelStorei(v.UNPACK_SKIP_IMAGES,c0);let VJ=M.isDataArrayTexture||M.isData3DTexture,W9=h.isDataArrayTexture||h.isData3DTexture;if(M.isDepthTexture){let D9=b.get(M),p8=b.get(h),N9=b.get(D9.__renderTarget),m8=b.get(p8.__renderTarget);z.bindFramebuffer(v.READ_FRAMEBUFFER,N9.__webglFramebuffer),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,m8.__webglFramebuffer);for(let BJ=0;BJ<z0;BJ++){if(VJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,b.get(M).__webglTexture,c,c0+BJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,b.get(h).__webglTexture,L0,R9+BJ);v.blitFramebuffer(k0,d0,B0,M0,P0,J9,B0,M0,v.DEPTH_BUFFER_BIT,v.NEAREST)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(c!==0||M.isRenderTargetTexture||b.has(M)){let D9=b.get(M),p8=b.get(h);z.bindFramebuffer(v.READ_FRAMEBUFFER,d),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,w);for(let N9=0;N9<z0;N9++){if(VJ)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,D9.__webglTexture,c,c0+N9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,D9.__webglTexture,c);if(W9)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,p8.__webglTexture,L0,R9+N9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,p8.__webglTexture,L0);if(c!==0)v.blitFramebuffer(k0,d0,B0,M0,P0,J9,B0,M0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(W9)v.copyTexSubImage3D(V0,L0,P0,J9,R9+N9,k0,d0,B0,M0);else v.copyTexSubImage2D(V0,L0,P0,J9,k0,d0,B0,M0)}z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(W9)if(M.isDataTexture||M.isData3DTexture)v.texSubImage3D(V0,L0,P0,J9,R9,B0,M0,z0,Y9,_9,F9.data);else if(h.isCompressedArrayTexture)v.compressedTexSubImage3D(V0,L0,P0,J9,R9,B0,M0,z0,Y9,F9.data);else v.texSubImage3D(V0,L0,P0,J9,R9,B0,M0,z0,Y9,_9,F9);else if(M.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,L0,P0,J9,B0,M0,Y9,_9,F9.data);else if(M.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,L0,P0,J9,F9.width,F9.height,Y9,F9.data);else v.texSubImage2D(v.TEXTURE_2D,L0,P0,J9,B0,M0,Y9,_9,F9);if(z.pixelStorei(v.UNPACK_ROW_LENGTH,b9),z.pixelStorei(v.UNPACK_IMAGE_HEIGHT,o0),z.pixelStorei(v.UNPACK_SKIP_PIXELS,o9),z.pixelStorei(v.UNPACK_SKIP_ROWS,G8),z.pixelStorei(v.UNPACK_SKIP_IMAGES,g8),L0===0&&h.generateMipmaps)v.generateMipmap(V0);z.unbindTexture()},this.initRenderTarget=function(M){if(b.get(M).__webglFramebuffer===void 0)s.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)s.setTextureCube(M,0);else if(M.isData3DTexture)s.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)s.setTexture2DArray(M,0);else s.setTexture2D(M,0);z.unbindTexture()},this.resetState=function(){S=0,n=0,u=null,z.reset(),D0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return B$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=s0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=s0._getUnpackColorSpace()}}var oW={jaw:0.6,tbX:2.9,tbY:6.85,ttX:6.45,ttY:7.3,ttCurl:0,root:0,lipAp:0.7,lipProt:0.2,lipWidth:0.5,labiodental:0,velum:-0.15,larynx:0,epilarynx:0,ventricular:0,lateral:0,dorsum:0};var e={blue:"#4fb6f2",blueMid:"#3487c4",blueDim:"#1f5f8c",frame:"#133954",green:"#5be381",red:"#ff5d40",pink:"#ff73cf",white:"#eef6f8",amber:"#ffb340"},JO=[e.green,e.red,e.pink,e.white],x7={primary:"#effbff",secondary:"#e2f5fc"};function aW(J,Q,$){let Z=parseInt(J.slice(1),16),K=parseInt(Q.slice(1),16),W=(X)=>Math.round((Z>>X&255)*(1-$)+(K>>X&255)*$);return"#"+[16,8,0].map((X)=>W(X).toString(16).padStart(2,"0")).join("")}var g7=(J)=>aW(J,"#ffffff",0.55),h8=[[0,"#3a2408"],[0.35,"#c9822a"],[0.6,"#ffb340"],[0.82,"#ffe39a"],[1,"#fff8ec"]];function p7(J){let Q=Math.max(0,Math.min(1,J));for(let $=1;$<h8.length;$++)if(Q<=h8[$][0])return aW(h8[$-1][1],h8[$][1],(Q-h8[$-1][0])/(h8[$][0]-h8[$-1][0]));return h8[h8.length-1][1]}var QO={black:"#000000",console:"#000000",inset:"#000000",line:e.frame,text:e.blue,textDim:e.blueMid,caliper:e.amber,caliperDim:"rgba(255, 179, 64, 0.45)",fat:"#bdbdbd",skin:"#a8a8a8",muscle:"#5d5d5d",tongue:"#6b6b6b",brain:"#7c7c7c",marrow:"#b2b2b2",cortex:"#1c1c1c",cartilage:"#3e3e3e",mucosa:"#8f8f8f",tooth:"#101010"};var m7=(J)=>{if(!(J>0))return 0;let Q=Math.log10(40),$=Math.log10(4000);return Math.max(0,Math.min(1,(Math.log10(J)-Q)/($-Q)))};var rW=(J,Q)=>Math.hypot(J.x-Q.x,J.y-Q.y);var d7=(J,Q,$)=>{let Z=Math.sin($),K=Math.cos($),W=J.x-Q.x,X=J.y-Q.y;return{x:Q.x+W*K-X*Z,y:Q.y+W*Z+X*K}};function U8(J,Q){if(J.length<3)return J.slice();let $=[];for(let Z=0;Z<J.length-1;Z++){let K=J[Math.max(0,Z-1)],W=J[Z],X=J[Z+1],Y=J[Math.min(J.length-1,Z+2)];for(let H=0;H<Q;H++){let N=H/Q,q=N*N,U=q*N;$.push({x:0.5*(2*W.x+(-K.x+X.x)*N+(2*K.x-5*W.x+4*X.x-Y.x)*q+(-K.x+3*W.x-3*X.x+Y.x)*U),y:0.5*(2*W.y+(-K.y+X.y)*N+(2*K.y-5*W.y+4*X.y-Y.y)*q+(-K.y+3*W.y-3*X.y+Y.y)*U)})}}return $.push(J[J.length-1]),$}var O5='"Hershey", "Archivo", system-ui, sans-serif',tW=(J,Q="l")=>`${Q==="m"?500:300} ${J}px ${O5}`,R5=typeof CanvasRenderingContext2D!=="undefined"&&"letterSpacing"in CanvasRenderingContext2D.prototype;function M5(J,Q=!1){let $=new Path2D;if(J.length===0)return $;$.moveTo(J[0][0],J[0][1]);for(let Z=1;Z<J.length;Z++)$.lineTo(J[Z][0],J[Z][1]);if(Q)$.closePath();return $}function rJ(J,Q,$,Z,K={}){if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=K.alpha??1,J.lineJoin="round",J.lineCap="round",J.setLineDash(K.dash??[]),J.strokeStyle=$,J.lineWidth=Z,J.stroke(Q),K.hot)J.globalCompositeOperation="source-over",J.strokeStyle=g7($),J.lineWidth=Z*0.42,J.stroke(Q);J.restore()}function RJ(J,Q,$,Z,K={}){if(Q.length<2)return;rJ(J,M5(Q,K.close),$,Z,K)}function k6(J,Q,$,Z,K,W,X,Y={}){let H=new Path2D;H.moveTo(Q,$),H.lineTo(Z,K),rJ(J,H,W,X,Y)}function eW(J,Q,$,Z,K,W=1.2,X={}){let Y=new Path2D;Y.arc(Q,$,Z,0,Math.PI*2),rJ(J,Y,K,W,X)}function _6(J,Q,$,Z,K,W=1){J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=W,J.fillStyle=K,J.beginPath(),J.arc(Q,$,Z,0,Math.PI*2),J.fill(),J.restore()}function JX(J,Q,$,Z,K=7,W=1){let Y=new Path2D;Y.arc(Q,$,K,0,Math.PI*2),Y.moveTo(Q-K-4,$),Y.lineTo(Q-K+2,$),Y.moveTo(Q+K-2,$),Y.lineTo(Q+K+4,$),Y.moveTo(Q,$-K-4),Y.lineTo(Q,$-K+2),Y.moveTo(Q,$+K-2),Y.lineTo(Q,$+K+4),rJ(J,Y,Z,1.25,{alpha:W})}function A9(J,Q,$,Z,K={}){let W=K.size??11;if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=K.alpha??1,J.font=tW(W,K.weight),R5)J.letterSpacing=`${((K.ls??0.14)*W).toFixed(2)}px`;J.textAlign=K.align??"left",J.textBaseline=K.baseline??"alphabetic",J.fillStyle=K.color??e.blue;let X=J;if(K.moving)X.layoutMoving=!0;J.fillText(Q,$,Z),X.layoutMoving=void 0,J.restore()}function MJ(J,Q=2){let $=J.length>1&&J[0][0]===J[J.length-1][0]&&J[0][1]===J[J.length-1][1]?J.slice(0,-1):J.slice();for(let Z=0;Z<Q;Z++){let K=[];for(let W=0;W<$.length;W++){let X=$[W],Y=$[(W+1)%$.length];K.push([X[0]*0.75+Y[0]*0.25,X[1]*0.75+Y[1]*0.25],[X[0]*0.25+Y[0]*0.75,X[1]*0.25+Y[1]*0.75])}$=K}return $.length?[...$,$[0]]:$}function HZ(J,Q,$,Z,K,W,X=1){let Y=K*0.5,H=Y*0.48,N=$-Y/2,q=Math.max(0.9,K*0.07),U=(F)=>F.toFixed(2),G=(F)=>{J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.strokeStyle=W,J.lineWidth=q,J.lineCap="round",J.lineJoin="round",J.stroke(new Path2D(F)),J.restore()},E=(F,C)=>{if(J.save(),J.globalCompositeOperation="lighter",J.globalAlpha=X,J.font=tW(K),J.textAlign="center",J.textBaseline="alphabetic",J.fillStyle=W,C)C(J);J.fillText(F,C?0:Q,C?0:$),J.restore()},O=(F)=>{F.translate(Q,N),F.rotate(Math.PI),F.translate(0,Y/2)},B=(F)=>{F.translate(Q,$),F.scale(-1,1)},D=(F)=>`M${U(F+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(F-H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 0 ${U(F+H)} ${U(N)}`;switch(Z){case"ɑ":{let F=Q-0.06*K;return G(D(F)+`M${U(F+H)} ${U($-Y)}L${U(F+H)} ${U($)}`)}case"ɒ":{let F=Q+0.06*K;return G(D(F)+`M${U(F-H)} ${U($-Y)}L${U(F-H)} ${U($)}`)}case"ɪ":return G(`M${U(Q)} ${U($-Y)}L${U(Q)} ${U($)}M${U(Q-Y*0.3)} ${U($-Y)}L${U(Q+Y*0.3)} ${U($-Y)}M${U(Q-Y*0.3)} ${U($)}L${U(Q+Y*0.3)} ${U($)}`);case"ɛ":return G(`M${U(Q+H*0.9)} ${U($-Y*0.92)}Q${U(Q-H*1.1)} ${U($-Y*1.08)} ${U(Q-H*0.25)} ${U(N)}Q${U(Q-H*1.3)} ${U($+Y*0.1)} ${U(Q+H*0.95)} ${U($-Y*0.06)}`);case"ɜ":return G(`M${U(Q-H*0.9)} ${U($-Y*0.92)}Q${U(Q+H*1.1)} ${U($-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U($+Y*0.1)} ${U(Q-H*0.95)} ${U($-Y*0.06)}`);case"ɝ":return G(`M${U(Q-H*0.9)} ${U($-Y*0.92)}Q${U(Q+H*1.1)} ${U($-Y*1.08)} ${U(Q+H*0.25)} ${U(N)}Q${U(Q+H*1.3)} ${U($+Y*0.1)} ${U(Q-H*0.95)} ${U($-Y*0.06)}M${U(Q+H*0.55)} ${U(N-Y*0.1)}Q${U(Q+H*1.4)} ${U(N-Y*0.5)} ${U(Q+H*1.5)} ${U(N-Y*0.15)}`);case"ʊ":return G(`M${U(Q-H*1.15)} ${U($-Y)}Q${U(Q-H*0.5)} ${U($-Y*0.9)} ${U(Q-H*0.75)} ${U(N)}Q${U(Q-H)} ${U($)} ${U(Q)} ${U($)}Q${U(Q+H)} ${U($)} ${U(Q+H*0.75)} ${U(N)}Q${U(Q+H*0.5)} ${U($-Y*0.9)} ${U(Q+H*1.15)} ${U($-Y)}`);case"ʌ":return G(`M${U(Q-H)} ${U($)}L${U(Q)} ${U($-Y)}L${U(Q+H)} ${U($)}`);case"ɤ":return G(`M${U(Q-H)} ${U($-Y)}L${U(Q)} ${U($-Y*0.1)}L${U(Q+H)} ${U($-Y)}M${U(Q)} ${U($-Y*0.1)}Q${U(Q-H*0.5)} ${U($+Y*0.4)} ${U(Q)} ${U($+Y*0.45)}Q${U(Q+H*0.5)} ${U($+Y*0.4)} ${U(Q)} ${U($-Y*0.1)}`);case"ʃ":return G(`M${U(Q+H*0.9)} ${U($-Y*1.9)}Q${U(Q)} ${U($-Y*2.2)} ${U(Q)} ${U($-Y)}L${U(Q)} ${U($+Y*0.3)}Q${U(Q)} ${U($+Y*0.95)} ${U(Q-H*0.9)} ${U($+Y*0.7)}`);case"θ":return G(`M${U(Q+H)} ${U($-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q-H)} ${U($-Y)}A${U(H)} ${U(Y)} 0 1 0 ${U(Q+H)} ${U($-Y)}M${U(Q-H)} ${U($-Y)}L${U(Q+H)} ${U($-Y)}`);case"ŋ":return G(`M${U(Q-H)} ${U($)}L${U(Q-H)} ${U($-Y)}M${U(Q-H)} ${U($-Y*0.6)}Q${U(Q-H*0.2)} ${U($-Y*1.1)} ${U(Q+H*0.6)} ${U($-Y*0.9)}Q${U(Q+H)} ${U($-Y*0.75)} ${U(Q+H)} ${U($-Y*0.4)}L${U(Q+H)} ${U($+Y*0.4)}Q${U(Q+H)} ${U($+Y*0.85)} ${U(Q+H*0.3)} ${U($+Y*0.8)}`);case"ə":return G(`M${U(Q-H)} ${U(N)}L${U(Q+H)} ${U(N)}A${U(H)} ${U(Y/2)} 0 1 1 ${U(Q-H*0.75)} ${U($-Y*0.85)}`);case"ɐ":return E("a",O);case"ɔ":return E("c",B);case"ɯ":return E("m",O);case"ɨ":return E("i"),G(`M${U(Q-H*0.8)} ${U(N)}L${U(Q+H*0.8)} ${U(N)}`);case"ø":return E("o"),G(`M${U(Q-H*1.1)} ${U($+Y*0.1)}L${U(Q+H*1.1)} ${U($-Y*1.1)}`);case"æ":return E("æ");case"œ":return E("œ");default:return E(Z)}}var QX=new J8,u7=new x;class tJ extends S7{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let J=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],Q=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],$=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex($),this.setAttribute("position",new f9(J,3)),this.setAttribute("uv",new f9(Q,2))}applyMatrix4(J){let Q=this.attributes.instanceStart,$=this.attributes.instanceEnd;if(Q!==void 0)Q.applyMatrix4(J),$.applyMatrix4(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let $=new L8(Q,6,1);return this.setAttribute("instanceStart",new j9($,3,0)),this.setAttribute("instanceEnd",new j9($,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let $=new L8(Q,6,1);return this.setAttribute("instanceColorStart",new j9($,3,0)),this.setAttribute("instanceColorEnd",new j9($,3,3)),this}fromWireframeGeometry(J){return this.setPositions(J.attributes.position.array),this}fromEdgesGeometry(J){return this.setPositions(J.attributes.position.array),this}fromMesh(J){return this.fromWireframeGeometry(new k7(J.geometry)),this}fromLineSegments(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new J8;let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0)this.boundingBox.setFromBufferAttribute(J),QX.setFromBufferAttribute(Q),this.boundingBox.union(QX)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new y8;if(this.boundingBox===null)this.computeBoundingBox();let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0){let $=this.boundingSphere.center;this.boundingBox.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)u7.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(u7)),u7.fromBufferAttribute(Q,K),Z=Math.max(Z,$.distanceToSquared(u7));if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}G0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new h0},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};x9.line={uniforms:V6.merge([G0.common,G0.fog,G0.line]),vertexShader:`
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
		`};class w6 extends u9{constructor(J){super({type:"LineMaterial",uniforms:V6.clone(x9.line.uniforms),vertexShader:x9.line.vertexShader,fragmentShader:x9.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(J)}get color(){return this.uniforms.diffuse.value}set color(J){this.uniforms.diffuse.value=J}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(J){if(J===!0!==this.worldUnits)this.needsUpdate=!0;if(J===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(J){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=J}get dashed(){return"USE_DASH"in this.defines}set dashed(J){if(J===!0!==this.dashed)this.needsUpdate=!0;if(J===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(J){this.uniforms.dashScale.value=J}get dashSize(){return this.uniforms.dashSize.value}set dashSize(J){this.uniforms.dashSize.value=J}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(J){this.uniforms.dashOffset.value=J}get gapSize(){return this.uniforms.gapSize.value}set gapSize(J){this.uniforms.gapSize.value=J}get opacity(){return this.uniforms.opacity.value}set opacity(J){if(!this.uniforms)return;this.uniforms.opacity.value=J}get resolution(){return this.uniforms.resolution.value}set resolution(J){this.uniforms.resolution.value.copy(J)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(J){if(!this.defines)return;if(J===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(J===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}var UZ=new Z9,$X=new x,ZX=new x,z9=new Z9,P9=new Z9,V8=new Z9,NZ=new x,GZ=new E9,k9=new j7,KX=new x,l7=new J8,c7=new y8,B8=new Z9,C8,LJ;function WX(J,Q,$){return B8.set(0,0,-Q,1).applyMatrix4(J.projectionMatrix),B8.multiplyScalar(1/B8.w),B8.x=LJ/$.width,B8.y=LJ/$.height,B8.applyMatrix4(J.projectionMatrixInverse),B8.multiplyScalar(1/B8.w),Math.abs(Math.max(B8.x,B8.y))}function L5(J,Q){let{matrixWorld:$,geometry:Z}=J,K=Z.attributes.instanceStart,W=Z.attributes.instanceEnd,X=Math.min(Z.instanceCount,K.count);for(let Y=0,H=X;Y<H;Y++){k9.start.fromBufferAttribute(K,Y),k9.end.fromBufferAttribute(W,Y),k9.applyMatrix4($);let N=new x,q=new x;if(C8.distanceSqToSegment(k9.start,k9.end,q,N),q.distanceTo(N)<LJ*0.5)Q.push({point:q,pointOnLine:N,distance:C8.origin.distanceTo(q),object:J,face:null,faceIndex:Y,uv:null,uv1:null})}}function I5(J,Q,$){let Z=Q.projectionMatrix,W=J.material.resolution,X=J.matrixWorld,Y=J.geometry,H=Y.attributes.instanceStart,N=Y.attributes.instanceEnd,q=Math.min(Y.instanceCount,H.count),U=-Q.near;C8.at(1,V8),V8.w=1,V8.applyMatrix4(Q.matrixWorldInverse),V8.applyMatrix4(Z),V8.multiplyScalar(1/V8.w),V8.x*=W.x/2,V8.y*=W.y/2,V8.z=0,NZ.copy(V8),GZ.multiplyMatrices(Q.matrixWorldInverse,X);for(let G=0,E=q;G<E;G++){if(z9.fromBufferAttribute(H,G),P9.fromBufferAttribute(N,G),z9.w=1,P9.w=1,z9.applyMatrix4(GZ),P9.applyMatrix4(GZ),z9.z>U&&P9.z>U)continue;if(z9.z>U){let _=z9.z-P9.z,I=(z9.z-U)/_;z9.lerp(P9,I)}else if(P9.z>U){let _=P9.z-z9.z,I=(P9.z-U)/_;P9.lerp(z9,I)}z9.applyMatrix4(Z),P9.applyMatrix4(Z),z9.multiplyScalar(1/z9.w),P9.multiplyScalar(1/P9.w),z9.x*=W.x/2,z9.y*=W.y/2,P9.x*=W.x/2,P9.y*=W.y/2,k9.start.copy(z9),k9.start.z=0,k9.end.copy(P9),k9.end.z=0;let B=k9.closestPointToPointParameter(NZ,!0);k9.at(B,KX);let D=D6.lerp(z9.z,P9.z,B),F=D>=-1&&D<=1,C=NZ.distanceTo(KX)<LJ*0.5;if(F&&C){k9.start.fromBufferAttribute(H,G),k9.end.fromBufferAttribute(N,G),k9.start.applyMatrix4(X),k9.end.applyMatrix4(X);let _=new x,I=new x;C8.distanceSqToSegment(k9.start,k9.end,I,_),$.push({point:I,pointOnLine:_,distance:C8.origin.distanceTo(I),object:J,face:null,faceIndex:G,uv:null,uv1:null})}}}class qZ extends i9{constructor(J=new tJ,Q=new w6({color:Math.random()*16777215})){super(J,Q);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let J=this.geometry,Q=J.attributes.instanceStart,$=J.attributes.instanceEnd,Z=new Float32Array(2*Q.count);for(let W=0,X=0,Y=Q.count;W<Y;W++,X+=2)$X.fromBufferAttribute(Q,W),ZX.fromBufferAttribute($,W),Z[X]=X===0?0:Z[X-1],Z[X+1]=Z[X]+$X.distanceTo(ZX);let K=new L8(Z,2,1);return J.setAttribute("instanceDistanceStart",new j9(K,1,0)),J.setAttribute("instanceDistanceEnd",new j9(K,1,1)),this}raycast(J,Q){let $=this.material.worldUnits,Z=J.camera;if(Z===null&&!$)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');if($===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let K=J.params.Line2!==void 0?J.params.Line2.threshold||0:0;C8=J.ray;let W=this.matrixWorld,X=this.geometry,Y=this.material;if(LJ=Y.linewidth+K,X.boundingSphere===null)X.computeBoundingSphere();c7.copy(X.boundingSphere).applyMatrix4(W);let H;if($)H=LJ*0.5;else{let q=Math.max(Z.near,c7.distanceToPoint(C8.origin));H=WX(Z,q,Y.resolution)}if(c7.radius+=H,C8.intersectsSphere(c7)===!1)return;if(X.boundingBox===null)X.computeBoundingBox();l7.copy(X.boundingBox).applyMatrix4(W);let N;if($)N=LJ*0.5;else{let q=Math.max(Z.near,l7.distanceToPoint(C8.origin));N=WX(Z,q,Y.resolution)}if(l7.expandByScalar(N),C8.intersectsBox(l7)===!1)return;if($)L5(this,Q);else I5(this,Z,Q)}onBeforeRender(J){let Q=this.material.uniforms;if(Q&&Q.resolution)J.getViewport(UZ),this.material.uniforms.resolution.value.set(UZ.z,UZ.w)}}var n7=[0.6,0.85,1.05,1.3,1.6,2.1];class EZ{a=new Float32Array(768);n=0;reset(){return this.n=0,this}p(J,Q,$){if(3*this.n+3>this.a.length){let K=new Float32Array(this.a.length*2);K.set(this.a),this.a=K}let Z=3*this.n++;return this.a[Z]=J,this.a[Z+1]=Q,this.a[Z+2]=$,this}}class YX{material;mesh;geo=new tJ;pos=new Float32Array(0);col=new Float32Array(0);pb=null;cb=null;cap=0;n=0;constructor(J){this.material=J;this.mesh=new qZ(this.geo,J),this.mesh.frustumCulled=!1,this.grow(2048)}grow(J){let Q=new Float32Array(J*6),$=new Float32Array(J*6);Q.set(this.pos.subarray(0,this.n*6)),$.set(this.col.subarray(0,this.n*6)),this.pos=Q,this.col=$,this.cap=J,this.geo.dispose(),this.geo=new tJ;let Z=this.pb=new L8(Q,6,1).setUsage(R7),K=this.cb=new L8($,6,1).setUsage(R7);this.geo.setAttribute("instanceStart",new j9(Z,3,0)),this.geo.setAttribute("instanceEnd",new j9(Z,3,3)),this.geo.setAttribute("instanceColorStart",new j9(K,3,0)),this.geo.setAttribute("instanceColorEnd",new j9(K,3,3)),this.mesh.geometry=this.geo}seg(J,Q,$,Z,K,W,X,Y,H){if(this.n>=this.cap)this.grow(this.cap*2);let N=this.n++*6,q=this.pos,U=this.col;q[N]=J,q[N+1]=Q,q[N+2]=$,q[N+3]=Z,q[N+4]=K,q[N+5]=W,U[N]=U[N+3]=X,U[N+1]=U[N+4]=Y,U[N+2]=U[N+5]=H}commit(){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0;for(let J of[this.pb,this.cb])J.clearUpdateRanges(),J.addUpdateRange(0,this.n*6),J.needsUpdate=!0}dispose(){this.geo.dispose(),this.material.dispose()}}var XX=new Map;function FZ(J){let Q=XX.get(J);if(!Q){let $=parseInt(J.slice(1),16);Q=[($>>16&255)/255,($>>8&255)/255,($&255)/255],XX.set(J,Q)}return Q}class DZ{group=new s8;batches;constructor(){this.batches=n7.map((J)=>{let Q=new w6({linewidth:J,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});Q.blending=Z7,Q.blendEquation=K7,Q.fog=!0;let $=new YX(Q);return this.group.add($.mesh),$})}setResolution(J,Q){for(let $ of this.batches)$.material.resolution.set(J,Q)}begin(){for(let J of this.batches)J.n=0}end(){for(let J of this.batches)J.commit()}batch(J){let Q=0;for(let $=1;$<n7.length;$++)if(Math.abs(n7[$]-J)<Math.abs(n7[Q]-J))Q=$;return this.batches[Q]}line(J,Q,$,Z,K={}){if(Q<2)return;let W=K.alpha??1;if(this.strokes(J,Q,FZ($),W,this.batch(Z),K.close??!1),K.hot)this.strokes(J,Q,FZ(g7($)),W,this.batch(Z*0.42),K.close??!1)}poly(J,Q,$,Z={}){this.line(J.a,J.n,Q,$,Z)}seg(J,Q,$,Z,K,W,X,Y,H=1){let[N,q,U]=FZ(X);this.batch(Y).seg(J,Q,$,Z,K,W,N*H,q*H,U*H)}strokes(J,Q,[$,Z,K],W,X,Y){$*=W,Z*=W,K*=W;for(let H=0;H<Q-1;H++){let N=3*H;X.seg(J[N],J[N+1],J[N+2],J[N+3],J[N+4],J[N+5],$,Z,K)}if(Y){let H=3*(Q-1);X.seg(J[H],J[H+1],J[H+2],J[0],J[1],J[2],$,Z,K)}}dispose(){for(let J of this.batches)J.dispose()}}var RZ={x0:-7.5,x1:10.25,y0:-4.55,y1:19.9};function MZ(J,Q){let $=J.tract;return-Math.max(-0.2,Math.min(3,Q))*$.scale/rW($.P(-2.5,10.5),$.P(6.95,7.75))}function LZ(J,Q){let $=J.tract,Z=$.P(-2.5,10.5),K=MZ(J,Q.jaw);return(W,X)=>d7($.P(W,X),Z,K)}function OZ(J,Q,$,Z=0,K=40){let W=Math.cos(-Z),X=Math.sin(-Z),Y=[];for(let H=0;H<=K;H++){let N=H/K*Math.PI*2,q=Math.cos(N)*Q,U=Math.sin(N)*$;Y.push({x:J.x+q*W-U*X,y:J.y+q*X+U*W})}return Y}function V5(J,Q,$){let Z=Math.min(J.x,Q.x),K=Math.max(J.x,Q.x),W=Math.min(J.y,Q.y),X=Math.max(J.y,Q.y),Y=Math.min($,(K-Z)/2,(X-W)/2),H=[],N=(q,U,G)=>{for(let E=0;E<=6;E++){let O=G+E/6*(Math.PI/2);H.push({x:q+Math.cos(O)*Y,y:U+Math.sin(O)*Y})}};return N(K-Y,X-Y,0),N(Z+Y,X-Y,Math.PI/2),N(Z+Y,W+Y,Math.PI),N(K-Y,W+Y,3*Math.PI/2),H.push(H[0]),H}var s7=(J)=>-1.2-0.025*J;function IZ(J){let Q=J.tract.scale,$=J.bodyParams.pharynx;return(Z,K)=>({x:Z*Q,y:(K<7?7-(7-K)*$:K)*Q})}function T6(J,Q,$){let Z=J.tract,K=(V,m)=>Z.P(V,m),W=LZ(J,$),X=Z.scale,Y=$.larynx*X,H=IZ(J),N=Q.upperLip.slice(7),q=Q.lowerLip.slice(7),U=U8([H(2.3,-4.6),H(2.38,-1.5),H(2.52,0.4),H(3,1.7),W(5.3,3),W(7.25,3.35),W(7.95,4.6),W(7.55,5.7)],4),G=U8([N[N.length-1],H(7.05,10.6),H(7.75,10.78),H(8.75,11.05),H(9.25,11.65),H(8.95,12.6),H(8.35,13.9),H(7.7,15),H(7.95,16.1),H(7.9,18.1),H(6.9,20.5)],4),E=U8([H(6.9,20.5),H(3,22.9),H(-2.2,22.7),H(-6.9,19.6),H(-8.7,15.4),H(-8.3,11.9),H(-7.4,8.9),H(-6.8,4.8),H(-6.6,0),H(-6.6,-4.6)],4),O=[];for(let V=0;V<9;V++){let m=-4.4+V*1.75;if(m>10.5)break;let j=s7(m)-2.25;O.push(V5(K(j,m+1.4),K(j+1.6,m),0.32*X))}let D=[[1,9.6],[1.8,9.92],[2.7,10.18],[3.6,10.3],[4.4,10.25],[5.1,10.05],[5.7,9.72],[6.15,9.36],[6.55,9.15],[7,9.6]].map(([V,m])=>Z.P(V,m)),F=Q.jawBone.filter((V)=>V.x>0.8*X),C=Q.glottis,_={x:K(1.6,0).x,y:K(0,2.9).y+0.6*Y},I=[];for(let V=0;V<4;V++){let m=C.y-(0.9+V*1)*X;if(m<-4.4)break;I.push([{x:C.x+0.8*X,y:m},{x:C.x+1.05*X,y:m-0.05},{x:C.x+1.05*X,y:m-0.5*X},{x:C.x+0.82*X,y:m-0.45*X},{x:C.x+0.8*X,y:m}])}let A=W(6,5.45),P=Q.tongueCenter,k=[];for(let V=0;V<=16;V++){let m=Math.PI*(0.18+0.9*V/16),j={x:P.x+Math.cos(m)*Q.tongueRadius*1.25,y:P.y+Math.sin(m)*Q.tongueRadius*1.25},y={x:P.x,y:(P.y+A.y)/2},d=[];for(let w=0;w<=12;w++){let S=w/12;d.push({x:(1-S)*(1-S)*A.x+2*(1-S)*S*y.x+S*S*j.x,y:(1-S)*(1-S)*A.y+2*(1-S)*S*y.y+S*S*j.y})}k.push(d)}let L={x:s7(C.y/X)*X,y:C.y};return{f:Q,model:J,skinLower:[...U,...q.slice().reverse()],skinUpper:[...N,...G.slice(1),...E.slice(1)],inset:U8([H(1.85,-4.6),H(1.9,-0.8),H(2.3,1.6),W(5.2,3.6),W(6.9,3.9),W(7.4,4.9),W(7.2,5.9),H(6.6,9.9),H(7.6,10.9),H(8.55,11.5),H(8.1,13.4),H(7.25,15.2),H(7.45,18),H(3,22.2),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.6,12),H(-6.7,8.7),H(-6.1,4.6),H(-6,-4.6)],3),skull:U8([H(7,16.2),H(7.3,18.5),H(6,20.7),H(3,22.1),H(-2,22),H(-6.3,19.2),H(-7.9,15.3),H(-7.4,12.6),H(-4.6,12.2),H(-2.2,13.3),H(1,13.7),H(4.1,14.1),H(6.2,14.9)],4),brain:U8([H(6.55,16.3),H(6.75,18.4),H(5.5,20.1),H(2.8,21.4),H(-1.9,21.3),H(-5.8,18.8),H(-7.1,15.4),H(-6.7,13.1),H(-4.4,12.8),H(-2.1,13.9),H(1,14.3),H(4,14.7),H(5.9,15.4)],4),sulcus:U8([H(5.4,19.4),H(2.4,20.5),H(-1.4,20.4),H(-4.8,18.4)],4),eye:OZ(H(6.5,15.4),1.1*X,0.95*X),eyeC:H(6.5,15.4),vertebrae:O,cords:[[K(-5.3,-4.6),K(-4.5,-4.6),K(-4.5,11.8),K(-5.1,12.4),K(-5.6,11.6)],[K(-5.1,-4.6),K(-4.7,-4.6),K(-4.72,11.4),K(-5.15,11.6)]],nasal:U8([H(0.3,11.2),H(1.1,10.25),H(2.7,10.75),H(4.6,10.85),H(6.4,10.65),H(7.6,10.85),H(8.45,11.3),H(8,12.2),H(6.7,13.4),H(4.4,13.9),H(1.8,13.6),H(0.2,12.6)],4),turbinates:[[3,11.45,2.1,0.32],[3.5,12.45,1.9,0.3],[4,13.3,1.45,0.22]].map(([V,m,j,y])=>OZ(H(V,m),j*X,y*X,-0.04)),palOral:D,palNasal:D.map((V)=>({x:V.x,y:V.y+0.55*X})),jawLower:F,jawUpper:F.map((V)=>({x:V.x,y:V.y+0.75*X})),hyoid:OZ(_,0.5*X,0.28*X,0.3,28),thyroid:[{x:C.x+0.75*X,y:C.y-1.6*X},{x:C.x+1.75*X,y:C.y-0.6*X},{x:C.x+1.95*X,y:C.y+1.2*X},{x:C.x+1.45*X,y:C.y+1.9*X},{x:C.x+1.15*X,y:C.y+1.1*X},{x:C.x+1.3*X,y:C.y-0.4*X},{x:C.x+0.75*X,y:C.y-1.6*X}],trachea:[[{x:C.x-0.65*X,y:C.y},{x:C.x-0.75*X,y:-4.8}],[{x:C.x+0.75*X,y:C.y},{x:C.x+0.95*X,y:-4.8}]],rings:I,outerWall:Q.outer.filter((V)=>V.y>C.y||V.x>0),glottisWall:[L,Q.outer.find((V)=>V.y>C.y)??L],fibres:k,folds:[[{x:C.x-0.62*X,y:C.y+0.05},{x:C.x-0.1,y:C.y+0.12*X},{x:C.x-0.62*X,y:C.y+0.32*X},{x:C.x-0.62*X,y:C.y+0.05}],[{x:C.x+0.72*X,y:C.y+0.05},{x:C.x+0.12,y:C.y+0.12*X},{x:C.x+0.72*X,y:C.y+0.32*X},{x:C.x+0.72*X,y:C.y+0.05}]],lowerTeeth:[...Q.lowerTeeth,W(6.8,6),W(6.4,6.2),Q.lowerTeeth[0]]}}class S6{pitch=0;yaw=0;toPitch=0;toYaw=0;next=2;update(J,Q){if(J>=this.next){let Z=Math.random()<0.35;this.toPitch=Z?0:(Math.random()*2-1)*0.55,this.toYaw=Z?0:(Math.random()*2-1)*0.9,this.next=J+1.2+Math.random()*3.5}let $=1-Math.exp(-Q*28);this.pitch+=(this.toPitch-this.pitch)*$,this.yaw+=(this.toYaw-this.yaw)*$}}function HX(J,Q,$,Z,K){if(Q.compact)return B5(J,Q,$,Z,K);let{w:W,h:X}=Q,Y=W-18,H=26;if($.length>=3)["F1","F2","F3"].forEach((O,B)=>{A9(J,O,Y-78,H+B*22,{size:12,color:e.amber,ls:0.12,alpha:0.75}),A9(J,String(Math.round($[B])),Y,H+B*22,{size:15,color:e.amber,align:"right",ls:0.08})}),A9(J,"HZ",Y,H+64,{size:10,color:e.amber,align:"right",alpha:0.6}),H+=110;for(let O of Z)A9(J,O,Y,H,{size:10,color:x7.secondary,align:"right",ls:0.14}),H+=16;if(!K.length)return;let{slotX:N,slotY:q}=Q,U=Math.max(60,(W-14-N)/2),G=Math.max(56,Math.min(112,(X-8-q)/2)),E=Math.max(22,Math.min(44,G*0.4,U*0.32));K.slice(0,4).forEach((O,B)=>{let D=N+B%2*U,F=q+Math.floor(B/2)*G;_6(J,D+6,F+4,4,O.color),A9(J,O.label.toUpperCase(),D+16,F+8,{size:11,color:O.color,ls:0.2,alpha:0.85});let C=F+18+E*1.1;if(O.ipa)HZ(J,D+E*0.6,C,O.value,E*1.45,O.color);else A9(J,O.value.toUpperCase(),D,C,{size:O.value.length>3?E*0.82:E,color:O.color,weight:"m",ls:0.04});if(O.unit)A9(J,O.unit.toUpperCase(),O.ipa?D+E*1.5:D+(O.value.length>3?0:E*1.64),O.ipa||O.value.length<=3?C:C+18,{size:11,color:O.color,ls:0.16,alpha:0.7})})}function B5(J,Q,$,Z,K){let{w:W,h:X}=Q;if($.length>=3){let U=(W-24)/3;["F1","F2","F3"].forEach((G,E)=>{A9(J,G,12+E*U,18,{size:10,color:e.amber,ls:0.12,alpha:0.75}),A9(J,String(Math.round($[E])),12+E*U+26,18,{size:13,color:e.amber,ls:0.06})})}if(A9(J,Z.slice(0,2).join("   "),12,36,{size:9,color:x7.secondary,ls:0.12}),Z.length>2)A9(J,Z.slice(2).join("   "),12,50,{size:9,color:x7.secondary,ls:0.12});let Y=K.slice(0,4);if(!Y.length)return;let H=(W-24)/Y.length,N=X-82,q=Math.max(16,Math.min(30,H*0.28));Y.forEach((U,G)=>{let E=12+G*H;_6(J,E+4,N,3,U.color),A9(J,U.label.toUpperCase(),E+12,N+3,{size:8,color:U.color,ls:0.14,alpha:0.85});let O=N+18+q;if(U.ipa)HZ(J,E+q*0.5,O,U.value,q*1.4,U.color);else A9(J,U.value.toUpperCase(),E,O,{size:U.value.length>3?q*0.62:q,color:U.color,weight:"m",ls:0.02});if(U.unit)A9(J,U.unit.toUpperCase(),E,O+16,{size:8,color:U.color,ls:0.14,alpha:0.7})})}var i7=(J,Q,$)=>{let Z=Math.max(0,Math.min(1,($-J)/(Q-J)));return Z*Z*(3-2*Z)},VZ=(J,Q,$)=>Math.max(Q,Math.min($,J)),o7=(J,Q,$,Z)=>J+(Q-J)*(1-Math.exp(-Z/$));class a7{hz;damping;x=0;v=0;constructor(J,Q){this.hz=J;this.damping=Q}step(J,Q){let $=2*Math.PI*this.hz,Z=Math.max(1,Math.ceil(Q/0.008)),K=Q/Z;for(let W=0;W<Z;W++)this.v+=($*$*(J-this.x)-2*this.damping*$*this.v)*K,this.x+=this.v*K;return this.x}}function C5(J){let Q=J.t.pressureRms,$=J.nPh+J.nOr-3;return $>=J.nPh&&$<Q.length?Q[$]/980.665:0}class eJ{puff=0;brow=0;lid=0;lookUp=0;content=0;nod=0;tilt=0;clock=0;cheeks=new a7(6.5,0.32);nodSpring=new a7(2.4,0.42);tiltSpring=new a7(3.2,0.3);ref=NaN;fast=NaN;held=0;hold=0;nextBlink=1.5+Math.random()*2;blinkAt=-1;secondBlink=!1;lastStep=-1;update(J,Q){this.clock+=Q;let $=J?.t,Z=!!$&&$.voicing>0.45&&$.gate>0.3&&$.f0>30&&$.outRms>0.004,K=J?i7(1.5,7,C5(J)):0;this.puff=VZ(this.cheeks.step(K,Q),-0.35,1.25);let W=0,X=0;if(Z){let E=Math.log2($.f0);if(!Number.isFinite(this.ref)||Math.abs(12*(E-this.ref))>14)this.ref=this.fast=E;if(this.ref=o7(this.ref,E,5,Q),Math.abs(12*(E-this.fast))>2.5)this.fast=E,this.held=0;this.fast=o7(this.fast,E,0.35,Q),this.held+=Q,W=12*(E-this.ref),X=12*(E-this.fast)}else this.held=0;let Y=(Z?VZ(W/6,-0.7,1):0)+0.3*this.content;this.brow=o7(this.brow,Y,Z?0.12:0.45,Q),this.lookUp=0.32*Math.max(0,this.brow);let H=Z?0.92*i7(0.9,1.9,this.held)*i7(0.15,0.55,this.brow):0;if(this.hold=o7(this.hold,H,H>this.hold?0.35:0.08,Q),this.clock>=this.nextBlink&&this.hold<0.2)this.blinkAt=this.clock,this.secondBlink=!this.secondBlink&&Math.random()<0.18,this.nextBlink=this.clock+(this.secondBlink?0.28:2+Math.random()*4.5);let N=(this.clock-this.blinkAt)/0.17,q=this.blinkAt>=0&&N<1?Math.sin(Math.PI*N)**0.7:0;this.lid=Math.max(q,this.hold,0.95*this.content);let U=J?.beatStep??-1;if(U>=0&&this.lastStep>=0&&U!==this.lastStep){let E=U<this.lastStep;if(E||Math.floor(U/4)!==Math.floor(this.lastStep/4))this.nodSpring.v-=E||Math.floor(U/16)!==Math.floor(this.lastStep/16)?1.3:0.8}this.lastStep=U,this.nod=this.nodSpring.step(0.13*this.brow,Q);let G=i7(0.6,2,this.held)*0.07*Math.sin(this.clock*1.7);this.tilt=this.tiltSpring.step(G+0.05*VZ(X,-1.5,1.5),Q)}}function r7(J,Q,$){let Z=J.tract,K=LZ(J,$),W={x:(Q.upperLip[6].x+Q.lowerLip[6].x)/2+0.15,y:(Q.upperLip[6].y+Q.lowerLip[6].y)/2};return[{id:"tongue",pos:Q.tongueCenter,label:"Tongue body"},{id:"tip",pos:Q.tip,label:"Tongue tip"},{id:"jaw",pos:K(7.5,4.9),label:"Jaw"},{id:"lips",pos:W,label:"Lips"},{id:"velum",pos:Q.velum[Math.floor(Q.velum.length/2)],label:"Soft palate"},{id:"larynx",pos:{x:Q.glottis.x+1.2*Z.scale,y:Q.glottis.y},label:"Larynx"}]}var A5=[0.09,0.06,0.03],A8={x0:-9.4,x1:RZ.x1,y0:RZ.y0,y1:23.5},BZ=(J,Q,$)=>{let Z=Math.max(0,Math.min(1,($-J)/(Q-J)));return Z*Z*(3-2*Z)};function z5(J,Q,$){let Z=1.22*Q,K=1.08*Q,W=(O,B)=>{let D=[];for(let F=0;F<=14;F++){let C=O+(B-O)*F/14;D.push({x:J.x+Z*Math.cos(C),y:J.y+K*Math.sin(C)})}return D},X=Math.PI/180,Y=Math.max(0,$.brow),H=30*X+14*X*Y,N=-32*X,q=H+(N-H)*$.lid,U=[],G=0.42*Q*$.brow,E=0.3*Q*Math.max(0,-$.brow);for(let O=0;O<=12;O++){let B=-1+O/6,D=(1+B)/2;U.push({x:J.x+0.1*Q+0.9*Q*B,y:J.y+1.4*Q+0.2*Q*(1-B*B)+G-E*D})}return[{pts:W(100*X,q),w:1.15,alpha:0.9},{pts:W(-78*X,N),w:1,alpha:0.75},{pts:U,w:1.4,alpha:0.85}]}function P5(J,Q,$){if(Math.abs($)<0.01)return null;let Z={x:(J.upperLip[6].x+J.lowerLip[6].x)/2,y:(J.upperLip[6].y+J.lowerLip[6].y)/2},K=0.6*Q*$;return(W)=>{let X=Math.abs(W.y-Z.y)/(2.6*Q);if(X>=1)return W;let Y=(1-X*X)**2*BZ(0.03,0.45,X)*BZ(Z.x-1.2*Q,Z.x-0.5*Q,W.x);return Y?{x:W.x+K*Y,y:W.y}:W}}class k5{particles=[];scale=20;ox=0;oy=0;w=0;h=0;compact=!1;sparkSeed=1;geo=null;echoes=[];clock=0;lastEcho=-1;gaze=new S6;face=new eJ;constructor(){for(let J=0;J<170;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN})}resize(J,Q){this.w=J,this.h=Q,this.compact=J<560;let $=12,Z=this.compact?62:10,K=this.compact?92:8;this.scale=Math.max(1,Math.min((J-2*$)/(A8.x1-A8.x0),(Q-Z-K)/(A8.y1-A8.y0)));let W=J-2*$-(A8.x1-A8.x0)*this.scale;this.ox=$+(this.compact?W/2:Math.min(W/2,Math.max(0,W-220)))-A8.x0*this.scale,this.oy=Z+Math.max(0,(Q-Z-K-(A8.y1-A8.y0)*this.scale)/2)+A8.y1*this.scale;for(let X of this.particles)X.px=NaN}X(J){return this.ox+J.x*this.scale}Y(J){return this.oy-J.y*this.scale}P(J){return[this.ox+J.x*this.scale,this.oy-J.y*this.scale]}toBody(J,Q){return{x:(J-this.ox)/this.scale,y:(this.oy-Q)/this.scale}}get pxPerCm(){return this.scale}handles(J,Q,$){return r7(J,Q,$)}geometry(J,Q,$){if(this.geo&&this.geo.f===Q&&this.geo.model===J)return this.geo;return this.geo=T6(J,Q,$)}lens(J,Q,$){let Z=this.gaze;Z.update(this.clock,$);let K=0.85*Q*Math.cos(Z.yaw),W=Z.pitch+this.face.lookUp,X=Math.cos(W),Y=Math.sin(W),H={x:J.x+K*X,y:J.y+K*Y},N=(0.18+0.2*Math.abs(Math.sin(Z.yaw)))*Q,q=0.42*Q,U=[];for(let G=0;G<=20;G++){let E=G/20*Math.PI*2,O=Math.cos(E)*N,B=Math.sin(E)*q;U.push({x:H.x+O*X-B*Y,y:H.y+O*Y+B*X})}return U}draw(J,Q,$,Z,K,W,X){this.clock+=X.dt;let Y=this.geometry(Q,$,Z),H=(D)=>D.map((F)=>this.P(F)),N=(D,F,C,_={})=>RJ(J,H(D),F,C,_);N(Y.inset,e.blueDim,0.9,{alpha:0.9}),N(Y.skull,e.blueDim,0.9,{close:!0}),N(Y.brain,e.blueMid,1.1,{close:!0}),N(Y.sulcus,e.blueDim,0.9),N(Y.eye,e.blueMid,1.1);let q=Q.tract.scale,U=P5($,q,this.face.puff),G=(D)=>U?D.map(U):D;N(this.lens(Y.eyeC,q,X.dt),e.blueDim,0.9,{alpha:1-BZ(0.45,0.9,this.face.lid)});for(let D of z5(Y.eyeC,q,this.face))N(D.pts,e.blue,D.w,{alpha:D.alpha});for(let D of Y.vertebrae)N(D,e.blueDim,1);N(Y.cords[0],e.blueDim,0.8,{alpha:0.8}),N(Y.cords[1],e.blueDim,0.8,{alpha:0.6}),N(Y.nasal,e.blueMid,1,{close:!0});for(let D of Y.turbinates)N(D,e.blueDim,0.9);N(Y.palOral,e.blueMid,1.1),N(Y.palNasal,e.blueMid,1.1),N(Y.hyoid,e.blueDim,1),N(Y.thyroid,e.blueDim,1);for(let D of Y.trachea)N(D,e.blueMid,1);for(let D of Y.rings)N(D,e.blueDim,0.9);if(W.pressure&&K)this.drawPressure(J,Q,$,K);else if(W.grid)for(let D of $.grid)k6(J,this.X(D.inner),this.Y(D.inner),this.X(D.outer),this.Y(D.outer),e.blueDim,0.9,{alpha:0.7});if(W.particles&&K)this.drawParticles(J,Q,$,K,X.dt);if(K&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock,this.echoes.push({t:this.clock,tongue:$.tongue.slice(),jaw:Y.jawLower,upperLip:MJ(G($.upperLip).map((D)=>[D.x,D.y])),lowerLip:MJ(G($.lowerLip).map((D)=>[D.x,D.y]))});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if(K)A5.forEach((D,F)=>{let C=this.nearestEcho(this.clock-D);if(!C)return;let _=0.1+0.07*F;N(C.tongue,e.green,1,{alpha:_}),N(C.jaw,e.red,1,{alpha:_*0.9});let I=(A)=>RJ(J,A.map(([P,k])=>[this.ox+P*this.scale,this.oy-k*this.scale]),e.pink,1,{alpha:_*0.9});I(C.upperLip),I(C.lowerLip)});N(G(Y.skinLower),e.blue,1.7,{hot:!0}),N(G(Y.skinUpper),e.blue,1.7,{hot:!0}),N(Y.outerWall,e.blue,1.4,{hot:!0}),N($.inner,e.blue,1.3,{alpha:0.9}),N(Y.glottisWall,e.blue,1.2,{alpha:0.8}),N($.epiglottis.slice(0,3),e.blue,2.2,{alpha:0.85}),N($.upperTeeth,e.blueMid,1.1,{close:!0}),N(Y.lowerTeeth,e.blueMid,1.1);for(let D of Y.folds)N(D,e.blue,1);let E=H($.tongue);J.save();let O=new Path2D;E.forEach(([D,F],C)=>C?O.lineTo(D,F):O.moveTo(D,F)),O.closePath(),J.clip(O);for(let D of Y.fibres)N(D,e.green,0.8,{alpha:0.32});J.restore(),RJ(J,E,e.green,1.6,{hot:!0}),N(Y.jawLower,e.red,1.5,{hot:!0}),N(Y.jawUpper,e.red,1,{alpha:0.45});let B=(D,F)=>MJ(D.map((C)=>this.P(C)),F);if(RJ(J,B(G($.upperLip),2),e.pink,1.5,{hot:!0}),RJ(J,B(G($.lowerLip),2),e.pink,1.5,{hot:!0}),RJ(J,B($.velum,3),e.white,1.25,{alpha:0.92}),K)this.drawTurbulence(J,Q,$,K);if(W.calipers)this.drawCalipers(J,$);this.drawHandles(J,Q,$,Z,X.hover,X.drag),this.drawReadouts(J,X.formants,X.info,X.slots)}nearestEcho(J){let Q=null,$=0.016;for(let Z of this.echoes){let K=Math.abs(Z.t-J);if(K<$)$=K,Q=Z}return Q}gridPoint(J,Q,$){let Z=J.grid;if(Z.length<2)return null;if(Q<=Z[0].s){let G=Math.max(0,Q/Math.max(0.01,Z[0].s)),E=J.glottis,O={x:(Z[0].inner.x+Z[0].outer.x)/2,y:(Z[0].inner.y+Z[0].outer.y)/2},B=0.35;return{x:E.x+(O.x-E.x)*G+$*0.35*0.5,y:E.y+(O.y-E.y)*G}}let K=0,W=Z.length-1;if(Q>=Z[W].s)return null;while(W-K>1){let G=K+W>>1;if(Z[G].s<=Q)K=G;else W=G}let X=(Q-Z[K].s)/Math.max(0.000001,Z[W].s-Z[K].s),Y=Z[K].inner.x+(Z[W].inner.x-Z[K].inner.x)*X,H=Z[K].inner.y+(Z[W].inner.y-Z[K].inner.y)*X,N=Z[K].outer.x+(Z[W].outer.x-Z[K].outer.x)*X,q=Z[K].outer.y+(Z[W].outer.y-Z[K].outer.y)*X,U=0.5+0.5*$*0.82;return{x:Y+(N-Y)*U,y:H+(q-H)*U}}nodeValueAtS(J,Q,$){let Z=0,K=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-$);if(X<K)K=X,Z=W}return J[Z]??0}drawPressure(J,Q,$,Z){let K=Z.t,W=Q.nodeS(K.phLen,K.orLen);if(W.length!==K.pressureRms.length)return;for(let X of $.grid){let Y=Math.pow(m7(this.nodeValueAtS(K.pressureRms,W,X.s)),0.85);k6(J,this.X(X.inner),this.Y(X.inner),this.X(X.outer),this.Y(X.outer),p7(Y),1.15,{alpha:0.35+0.65*Y})}}drawParticles(J,Q,$,Z,K){let W=Z.t,X=Q.nodeS(W.phLen,W.orLen),Y=new Float32Array(W.phAreas.length+W.orAreas.length);Y.set(W.phAreas,0),Y.set(W.orAreas,W.phAreas.length);let H=$.lipS,N=[new Path2D,new Path2D,new Path2D];for(let q of this.particles){let U=this.nodeValueAtS(W.flow,X,q.s),G=Math.max(0.05,this.nodeValueAtS(Y,X,q.s)),E=U/G,O=Math.sign(E)*2.2*Math.log1p(Math.abs(E)/30);if(q.s+=O*K,q.life-=K*0.25,q.s>H||q.s<0||q.life<=0||Math.abs(E)<3){if(!(Math.abs(E)<3&&q.life>0)){q.s=Math.random()*0.8,q.u=Math.random()*2-1,q.life=0.6+Math.random()*0.8,q.px=NaN;continue}}let B=this.gridPoint($,q.s,q.u);if(!B)continue;let D=this.X(B),F=this.Y(B);if(Number.isFinite(q.px)){let C=Math.min(2,Math.floor(Math.min(1,Math.abs(O)/6)*Math.min(1,q.life)*3));N[C].moveTo(q.px,q.py),N[C].lineTo(D,F)}q.px=D,q.py=F}N.forEach((q,U)=>rJ(J,q,"#ffe2a8",1.1,{alpha:0.16+0.2*U}))}drawTurbulence(J,Q,$,Z){let K=Z.t;if(!(K.noiseLevel>1)||K.noiseNode<0)return;let W=Q.branchS(K.noiseNode,K.phLen,K.orLen);if(W<0)return;let X=Math.min(1,Math.log10(K.noiseLevel)/3.2);if(X<=0.05)return;let Y=this.sparkSeed=this.sparkSeed*16807%2147483647,H=()=>(Y=Y*16807%2147483647)/2147483647;for(let N=0;N<30;N++){let q=this.gridPoint($,W+0.2+H()*1.2,H()*2-1);if(!q)continue;_6(J,this.X(q),this.Y(q),0.6+H()*1.4,"#f4fbff",0.15+0.7*X*H())}}drawCalipers(J,Q){let $=-1,Z=1/0;for(let F=2;F<Q.grid.length-1;F++)if(Q.grid[F].area<Z)Z=Q.grid[F].area,$=F;if($<0||Z>=1.2)return;let K=Q.grid[$],[W,X]=this.P(K.inner),[Y,H]=this.P(K.outer);k6(J,W,X,Y,H,e.white,1.4,{hot:!0});let N=-(H-X),q=Y-W,U=Math.hypot(N,q)||1;for(let[F,C]of[[W,X],[Y,H]])k6(J,F-N/U*4,C-q/U*4,F+N/U*4,C+q/U*4,e.white,1.2);let G=Q.grid[Q.grid.length-1],O=Math.max(this.P(G.inner)[0],this.P(G.outer)[0])-Math.max(W,Y)<1.5*this.pxPerCm,B=O?Math.min(W,Y)-10:Math.max(W,Y)+10,D=Math.min(X,H)-4;A9(J,Z<=0.0005?"CLOSED":`${Z.toFixed(2)} CM²`,B,D,{size:11,color:e.white,ls:0.12,align:O?"right":"left"})}drawHandles(J,Q,$,Z,K,W){let X={tongue:e.green,jaw:e.red,lips:e.pink,velum:e.white,tip:e.blueMid,larynx:e.blueMid},Y={tongue:8,jaw:7,lips:7,velum:6,tip:5,larynx:5};for(let H of this.handles(Q,$,Z)){let N=this.X(H.pos),q=this.Y(H.pos),U=H.id===W||H.id===K;if(JX(J,N,q,X[H.id],Y[H.id]+(U?2:0),U?1:0.9),U)eW(J,N,q,28,X[H.id],1,{alpha:0.75}),A9(J,H.label.toUpperCase(),N+32,q-18,{size:12,color:X[H.id],ls:0.18})}}drawReadouts(J,Q,$,Z){HX(J,{w:this.w,h:this.h,compact:this.compact,slotX:this.X({x:3.35,y:0}),slotY:this.Y({x:0,y:2.05})},Q,$,Z)}}var z8=(J,Q,$)=>{let Z=Math.max(0,Math.min(1,($-J)/(Q-J)));return Z*Z*(3-2*Z)},UX=(J)=>Math.max(0,Math.min(1,J));function f8(J,Q){if(Q<=J[0][0])return J[0][1];for(let $=1;$<J.length;$++)if(Q<=J[$][0]){let[Z,K]=J[$-1],[W,X]=J[$];return K+(X-K)*(Q-Z)/(W-Z)}return J[J.length-1][1]}var _5=[[-4.6,5.3],[0,5.4],[2.5,5.5],[4.5,5.25],[6.5,5.5],[8.5,6.1],[10.5,6.6],[12.5,7],[15,7.3],[17.5,7.65],[19.5,7.4],[21,6.5],[22.2,4.6],[23,1]],w5=[[3.4,5.9],[4.6,6.2],[5.7,6.15],[6.5,6.2],[8,6.35],[9.5,6.35],[10.6,6.55],[11.6,6.75],[12.6,6.9],[13.9,7.15],[15,7.45],[16.1,7.95]],T5=[[3.4,2],[4.6,2.2],[5.7,2.4],[6.5,2.6],[10.6,1.7],[11,1.75],[11.65,1.2],[12.6,0.95],[13.9,0.75],[15,0.9],[16.1,1.6]],S5=[[-4.6,0.5],[3,0.5],[6,0.42],[12,0.42],[16,0.45],[23,0.45]],j5=[[-3,8.5],[-1.6,8],[-0.6,6.4],[1.2,4.6],[3.5,3.6],[5.3,3],[7.3,3.3],[8.6,4.4]],v5=[[6,-0.6],[7.4,-0.8],[9.6,-1.9],[10.6,-2.5],[12,-2.6]],b5=[[12.3,4],[13,5.6],[14.5,6.4],[16.5,6.9],[18.5,6.6],[20,5.4],[21,3.6],[21.45,0.5]],y5=[[0,1.5],[0.15,1.9],[0.35,2.35],[0.6,2.45],[0.8,2.2],[0.92,1.5],[1,0.55]],h5=[[0,1.3],[0.35,1.1],[0.7,0.9],[0.9,0.55],[1,0.25]],f5=[[0.85,1.05,0.7],[0.68,0.95,0.65],[0.78,1.1,0.8],[0.7,0.85,0.9],[0.68,0.8,0.9],[1,0.75,1.1],[0.92,0.7,1.05]],x5=[[0.54,0.9,0.6],[0.6,0.92,0.62],[0.7,1,0.75],[0.7,0.85,0.8],[0.72,0.8,0.85],[1.1,0.72,1.05],[1.05,0.7,1]],g5=3,IJ=2.2,EX=(J)=>Math.abs(J)<1?(1-J*J)**2:0;function e7(J,Q,$=!1){let Z=Math.min(1,Math.abs(Q)/J.W),K=Math.pow(1-Math.pow(Z,J.pf),1/J.pf);return J.xw+(J.Fs-J.xw)*K+($?0:J.E*EX(Q/J.wf))}function p5(J,Q){let $=Q>J.xw,Z=$?(Q-J.xw)/Math.max(0.000001,J.Fs-J.xw):(J.xw-Q)/Math.max(0.000001,J.xw-J.Bk),K=$?J.pf:IJ;return J.W*Math.pow(Math.max(0,1-Math.pow(Math.min(1,Z),K)),1/K)}function m5(J,Q,$){$.length=0;let Z=12,K=10,W=16;for(let Y=0;Y<Z;Y++){let H=Math.PI-Y/Z*(Math.PI/2);$.push(J.xw-(J.xw-J.Bk)*Math.pow(Math.abs(Math.cos(H)),2/IJ),J.W*Math.pow(Math.sin(H),2/IJ))}let X=Math.asin(Math.min(1,Math.pow(Q/J.W,J.pf/2)));for(let Y=0;Y<K;Y++){let H=Math.PI/2-Y/K*(Math.PI/2-X),N=J.W*Math.pow(Math.sin(H),2/J.pf);$.push(J.xw+(J.Fs-J.xw)*Math.pow(Math.cos(H),2/J.pf)+J.E*EX(N/J.wf),N)}for(let Y=0;Y<=W;Y++){let H=Q*(1-Y/W);$.push(e7(J,H),H)}}class AZ{dy;rows=[];y0;y1;constructor(J,Q,$){this.dy=Q;let Z=1/0,K=-1/0;for(let W of J)Z=Math.min(Z,W.y),K=Math.max(K,W.y);this.y0=Z,this.y1=K;for(let W=Z;W<=K;W+=Q){let X=-1/0,Y=1/0;for(let H=0;H<J.length-1;H++){let N=J[H],q=J[H+1];if(N.y>W===q.y>W)continue;let U=N.x+(q.x-N.x)*(W-N.y)/(q.y-N.y);X=Math.max(X,U),Y=Math.min(Y,U)}this.rows.push(X>Y?$(W,X,Y):null)}}at(J){let Q=(J-this.y0)/this.dy,$=Math.floor(Q);if($<0||$>=this.rows.length-1)return null;let Z=this.rows[$],K=this.rows[$+1];if(!Z||!K)return Z??K;let W=Q-$,X=(Y,H)=>Y+(H-Y)*W;return{F:X(Z.F,K.F),Bk:X(Z.Bk,K.Bk),Fs:X(Z.Fs,K.Fs),W:X(Z.W,K.W),xw:X(Z.xw,K.xw),E:X(Z.E,K.E),wf:X(Z.wf,K.wf),pf:X(Z.pf,K.pf)}}}class t8{lines=[];cur=[];p(J,Q,$){return this.cur.push(J,Q,$),this}end(J=!1){if(J&&this.cur.length>=3)this.cur.push(this.cur[0],this.cur[1],this.cur[2]);if(this.cur.length>=6)this.lines.push(new Float32Array(this.cur));this.cur=[]}ellipse(J,Q,$,Z=24,K=0,W=Math.PI*2){for(let X=0;X<=Z;X++){let Y=K+(W-K)*X/Z,H=Math.cos(Y),N=Math.sin(Y);this.p(J[0]+Q[0]*H+$[0]*N,J[1]+Q[1]*H+$[1]*N,J[2]+Q[2]*H+$[2]*N)}this.end()}}function DX(J,Q,$,Z){let K=$/J,W=Z/J,X=W>=7?W:7-(7-W)/Q,Y=1-z8(7.6,9.1,X),H=f8(j5,K),N=z8(H-1.5,H+0.15,X),q=f8(v5,X),U=z8(q-0.7,q+0.9,K);return Y*N*U}var d5=1.7,u5=0.55;function OX(J,Q,$,Z){let K=$/J,W=Z/J,X=W>=7?W:7-(7-W)/Q,Y=((K-5.2)/2.3)**2+((X-8.3)/2.4)**2;return Y<1?(1-Y)**2:0}function NX(J,Q,$,Z){if(Q===0||Z===0)return[0,0];let K=Q*Z*J;return[u5*K,Math.sign($)*d5*K*z8(0.4*J,2.6*J,Math.abs($))]}function l5(J,Q,$){let Z=Q.length;if(Q.every(Boolean))return[$?[...J,J[0],J[1],J[2]]:J];let K=[],W=$?Q.indexOf(!1)+1:0,X=[];for(let Y=0;Y<Z;Y++){let H=(W+Y)%Z;if(Q[H])X.push(J[3*H],J[3*H+1],J[3*H+2]);else{if(X.length>=6)K.push(X);X=[]}}if(X.length>=6)K.push(X);return K}function c5(J,Q){let $=[0];for(let X=1;X<J.length;X++)$.push($[X-1]+Math.hypot(J[X].x-J[X-1].x,J[X].y-J[X-1].y));let Z=$[$.length-1],K=[],W=0;for(let X=0;X<Q;X++){let Y=Z*X/(Q-1);while(W<J.length-2&&$[W+1]<Y)W++;let H=(Y-$[W])/Math.max(0.000000001,$[W+1]-$[W]);K.push({x:J[W].x+(J[W+1].x-J[W].x)*H,y:J[W].y+(J[W+1].y-J[W].y)*H})}return K}function t7(J,Q,$){let Z=$*Q[Q.length-1],K=0;while(K<J.length-2&&Q[K+1]<Z)K++;let W=(Z-Q[K])/Math.max(0.000000001,Q[K+1]-Q[K]);return{x:J[K].x+(J[K+1].x-J[K].x)*W,y:J[K].y+(J[K+1].y-J[K].y)*W}}var zZ=(J)=>{let Q=[0];for(let $=1;$<J.length;$++)Q.push(Q[$-1]+Math.hypot(J[$].x-J[$-1].x,J[$].y-J[$-1].y));return Q};function n5(J){let Q=J.tract,$=Q.scale,Z=J.bodyParams.pharynx,K=IZ(J),W=(T)=>K(0,T).y,X=(T)=>T/$>=7?T/$:7-(7-T/$)/Z,Y=(T,g)=>Q.P(T,g),H={...oW,jaw:0,lipAp:0,labiodental:0},N=J.frame(H),q=T6(J,N,H),U=[...q.skinLower,...q.skinUpper],G=new AZ(U,0.08*$,(T,g,p)=>{let a=X(T),Q0=a>=3.4&&a<=16.1?f8(w5,a)*$:1/0,r=Math.min(g,Q0),A0=2.2+0.4*z8(2.5,3.5,a)*(1-z8(17,18.5,a));return{F:g,Bk:p,Fs:r,W:f8(_5,a)*$,xw:p+(r-p)*f8(S5,a),E:g-r,wf:f8(T5,a)*$,pf:A0}}),E=Y(-2.5,10.5),O=N.upperLip[N.upperLip.length-1].y,B=N.lowerLip[N.lowerLip.length-1].y,D=g5*$,F=(T,g,p,a)=>g>B&&g<O&&Math.abs(p)<D&&T>a.xw,C=[],_=(T,g,p)=>{for(let a of l5(T,g,p)){let Q0=a.length/3,r=new Float32Array(Q0),A0=new Float32Array(Q0);for(let q0=0;q0<Q0;q0++)r[q0]=DX($,Z,a[3*q0],a[3*q0+1]),A0[q0]=OX($,Z,a[3*q0],a[3*q0+1]);C.push({a:new Float32Array(a),w:r,c:A0})}},I=[],A=1.4*$;for(let T=G.y0+0.25*$;T<G.y1-0.2*$;T+=A){let g=G.at(T);if(!g||g.W<0.2*$)continue;m5(g,Math.min(0.6*g.W,3.6*$),I);let p=[],a=[],Q0=I.length/2;for(let r=0;r<Q0;r++)p.push(I[2*r],T,I[2*r+1]);for(let r=Q0-2;r>0;r--)p.push(I[2*r],T,-I[2*r+1]);for(let r=0;r<p.length/3;r++)a.push(!F(p[3*r],T,p[3*r+2],g));_(p,a,!0)}let P=0.3*$;for(let T of[-3.6,-2.4,-1.2,1.2,2.4,3.6].map((g)=>g*$)){let g=[],p=[];for(let a=G.y0+0.1*$;a<=G.y1;a+=P){let Q0=G.at(a);if(!Q0||Math.abs(T)>0.97*Q0.W){_(g,p,!1),g=[],p=[];continue}let r=e7(Q0,T);g.push(r,a,T),p.push(!F(r,a,T,Q0))}_(g,p,!1)}for(let T of[0.5,0.8].map((g)=>g*Math.PI))for(let g of[1,-1]){let p=[],a=[];for(let Q0=G.y0+0.1*$;Q0<=G.y1;Q0+=P){let r=G.at(Q0);if(!r||r.W<0.2*$)continue;p.push(r.xw-(r.xw-r.Bk)*Math.pow(Math.abs(Math.cos(T)),2/IJ),Q0,g*r.W*Math.pow(Math.sin(T),2/IJ)),a.push(!0)}_(p,a,!1)}let k=[],L=[],V=(T,g,p,a,Q0,r=!1)=>{let A0=new t8;Q0(A0),T.push({lines:A0.lines,color:g,width:p,alpha:a,hot:r})},m=(T,g,p,a)=>{let Q0=U8(g.map(([r,A0])=>K(r,A0)),4);Q0.forEach((r,A0)=>{let q0=G.at(r.y);T.p(r.x,r.y,a*((q0?p5(q0,r.x):0)+p(A0,Q0.length)))}),T.end()};V(k,e.blueDim,1.05,0.9,(T)=>{for(let g of[1,-1]){m(T,[[-2.55,13.4],[-2.85,14.75],[-3.65,15.45],[-4.6,15.25],[-5.2,14.25],[-5.4,12.8],[-5.05,11.3],[-4.55,10.2],[-3.95,9.55],[-3.35,9.65],[-3,10.35]],(a,Q0)=>(0.25+1.2*Math.sin(Math.PI*a/(Q0-1))**1.5)*$,g),m(T,[[-3.15,14.3],[-3.95,14.45],[-4.55,13.5],[-4.6,12.1],[-4.15,11.05]],()=>0.55*$,g),m(T,[[-2.7,11.2],[-2.55,11.85],[-2.75,12.35]],()=>0.35*$,g);let p=[];for(let a=0;a<=16;a++)p.push([-3.5+0.6*Math.cos(a/16*Math.PI*2),12+0.85*Math.sin(a/16*Math.PI*2)]);m(T,p,()=>0.12*$,g)}}),V(k,e.blueMid,1,0.8,(T)=>{for(let g of[1,-1]){for(let a=14.6;a>=11.3;a-=0.15){let Q0=W(a),r=G.at(Q0);if(!r)continue;let A0=g*(0.3+1.05*(14.6-a)/3.3)*$;T.p(e7(r,A0),Q0,A0)}T.end();let p=[[7.95,11.05,0.95],[7.4,11.15,1.45],[7.25,11.6,1.55],[7.55,12.1,1.35],[8.2,12.15,1]];for(let[a,Q0,r]of p)T.p(a*$,W(Q0),g*r*$);T.end()}}),V(k,e.blueMid,1,0.9,(T)=>{for(let g of[1,-1])T.ellipse([8.05*$,W(10.98),g*0.62*$],[0.42*$,0.04*$,0],[0,0,0.26*$],16)});let j=new AZ(q.brain,0.08*$,(T,g,p)=>({F:g,Bk:p,Fs:g,W:f8(b5,X(T))*$,xw:p+(g-p)*0.48,E:0,wf:1,pf:2.3}));V(k,e.blueMid,0.85,0.32,(T)=>{for(let g=j.y0+0.6*$;g<j.y1-0.15*$;g+=1.5*$){let p=j.at(g);if(!p)continue;for(let a=0;a<=48;a++){let Q0=a/48*Math.PI*2,r=Math.cos(Q0),A0=Math.sin(Q0),q0=r>=0?p.pf:IJ,v0=r>=0?p.xw+(p.Fs-p.xw)*Math.pow(r,2/q0):p.xw-(p.xw-p.Bk)*Math.pow(-r,2/q0);T.p(v0,g,Math.sign(A0)*p.W*Math.pow(Math.abs(A0),2/q0))}T.end()}for(let g of[0.3,0.7].map((p)=>p*Math.PI))for(let p of[1,-1]){for(let a=j.y0;a<=j.y1;a+=0.3*$){let Q0=j.at(a);if(!Q0)continue;let r=Math.cos(g),A0=Math.sin(g),q0=r>=0?Q0.pf:IJ,v0=r>=0?Q0.xw+(Q0.Fs-Q0.xw)*Math.pow(r,2/q0):Q0.xw-(Q0.xw-Q0.Bk)*Math.pow(-r,2/q0);T.p(v0,a,p*Q0.W*Math.pow(A0,2/q0))}T.end()}}),V(k,e.blueDim,0.9,0.6,(T)=>{for(let g=0;g<9;g++){let p=-4.4+g*1.75;if(p>10.5)break;let a=s7(p)-2.25,Q0=Y(a,p+0.08),r=Y(a,p+1.32),A0=Y(a+0.8,0).x,q0=0.8*$,v0=1.05*$;for(let n0 of[Q0.y,r.y])T.ellipse([A0,n0,0],[q0,0,0],[0,0,v0],24);for(let n0 of[0.25,0.75,1.25,1.75].map((i0)=>i0*Math.PI))T.p(A0+q0*Math.cos(n0),Q0.y,v0*Math.sin(n0)).p(A0+q0*Math.cos(n0),r.y,v0*Math.sin(n0)).end();let g0=(Q0.y+r.y)/2,y0=A0-2.15*$;T.ellipse([y0,g0,0],[0.72*$,0,0],[0,0,0.88*$],20);for(let n0 of[1,-1])T.p(A0-0.7*$,g0,n0*0.55*$).p(y0+0.45*$,g0,n0*0.72*$).end(),T.p(A0-0.5*$,g0,n0*0.95*$).p(A0-0.9*$,g0-0.1*$,n0*2.3*$).end();T.p(y0-0.72*$,g0,0).p(y0-1.8*$,g0-0.55*$,0).end()}}),V(k,e.blueDim,0.85,0.5,(T)=>{let g=Y(-4.9,0).x;for(let p=-4.4;p<=11;p+=1.75)T.ellipse([g,Y(0,p).y,0],[0.42*$,0,0],[0,0,0.6*$],16);for(let p of[1,-1])T.p(g,Y(0,-4.6).y,p*0.6*$).p(g,Y(0,11.4).y,p*0.6*$).end()}),V(k,e.blueDim,0.9,0.7,(T)=>{for(let g of[1,-1]){for(let p of q.nasal)T.p(p.x,p.y,g*1.2*$);T.end(!0);for(let p of q.turbinates){for(let a of p)T.p(a.x,a.y,g*0.95*$);T.end()}}});let y=(T,g,p)=>{let a=[];for(let Q0=0;Q0<=60;Q0++){let r=p*Q0/60;a.push({x:T-g*Math.pow(r/p,1.85),y:r})}return{pts:a,cum:zZ(a)}},d=(T,g,p,a,Q0,r,A0)=>{let q0=y(g,p,a),v0=q0.cum[q0.cum.length-1],g0=Q0.reduce((n0,i0)=>n0+i0[0],0),y0=0.97*v0/(g0*$);for(let n0 of[1,-1]){let i0=0;for(let[O9,G9,q9]of Q0){let v=O9*$*y0,L9=G9*$,r0=q9*$,X9=(i0+v/2)/v0;i0+=v;let z=t7(q0.pts,q0.cum,X9),R=t7(q0.pts,q0.cum,Math.min(1,X9+0.01)),b=t7(q0.pts,q0.cum,Math.max(0,X9-0.01)),s=R.x-b.x,W0=R.y-b.y,U0=Math.hypot(s,W0)||1;s/=U0,W0/=U0;let F0=W0,t=-s,Z0=r(z.y/a),O0=(C0,N0,H0=0)=>[z.x+s*C0-F0*H0,Z0+A0*N0,n0*(z.y+W0*C0-t*H0)];for(let[C0,N0]of[[-0.5,0],[-0.5,0.55],[-0.38,1],[0,1.08],[0.38,1],[0.5,0.55],[0.5,0]])T.p(...O0(C0*v,N0*L9));T.end(!0);for(let[C0,N0]of[[-0.45,0.1],[0.45,0.1],[0.45,0.9],[-0.45,0.9]])T.p(...O0(C0*v,0,N0*r0));T.end(!0)}}},w=Y(7.3,0).x,S=4.2*$,n=2.65*$;V(k,e.blue,1,0.8,(T)=>d(T,w,S,n,f5,(g)=>(7.95+0.3*g*g)*$,1)),V(k,e.blueMid,1,0.6,(T)=>{for(let g of[0,2,4,5,6,7]){let p=q.palOral[g],a=Math.max(0,(w-p.x)/S),Q0=(a>=1?n:n*Math.pow(a,0.5405405405405405))-0.45*$,r=(8.95+0.3*Math.min(1,Q0/n)**2)*$;if(Q0<0.6*$||p.y<r+0.15*$)continue;for(let A0=0;A0<=20;A0++){let q0=Q0*(A0/10-1);T.p(p.x,r+(p.y-r)*Math.pow(1-Math.pow(Math.abs(q0)/Q0,2.4),0.7),q0)}T.end()}});let u=(T,g,p)=>{let a=Y(T,g);return[a.x,a.y,p*$]},K0=(T,g,p)=>{let a=g.map(([Q0,r,A0])=>u(Q0,r,p*A0));for(let Q0=0;Q0<a.length-1;Q0++){let r=a[Math.max(0,Q0-1)],A0=a[Q0],q0=a[Q0+1],v0=a[Math.min(a.length-1,Q0+2)];for(let g0=0;g0<4;g0++){let y0=g0/4,n0=y0*y0,i0=n0*y0,O9=(G9,q9,v,L9)=>0.5*(2*q9+(-G9+v)*y0+(2*G9-5*q9+4*v-L9)*n0+(-G9+3*q9-3*v+L9)*i0);T.p(O9(r[0],A0[0],q0[0],v0[0]),O9(r[1],A0[1],q0[1],v0[1]),O9(r[2],A0[2],q0[2],v0[2]))}}T.p(...a[a.length-1]),T.end()};V(L,e.red,1.25,0.9,(T)=>{for(let g of[1,-1]){K0(T,[[6.4,4.6,0],[5.6,4.45,1.5],[4.5,4.4,2.6],[3.2,4.5,3.5],[1.8,4.85,4.15],[0.4,5.6,4.6],[-0.55,6.6,4.85],[-0.9,7.6,4.9],[-1.45,8.9,4.95],[-1.9,9.7,5],[-2.15,10.2,5]],g),K0(T,[[-1.8,10.25,4.95],[-0.9,9.4,4.85],[0.15,10.1,4.6],[0.6,8.9,4.35],[1.1,7.7,4],[1.9,7.2,3.55]],g);let p=u(-2.5,10.5,g*4.95);T.ellipse(p,[0.45*$,0,0],[0,0.12*$,0.85*$],16)}}),V(L,e.red,1,0.55,(T)=>{for(let g of[1,-1]){K0(T,[[1.9,7.2,3.55],[3,7.15,3.15],[4.3,7.1,2.6],[5.4,7.05,1.85],[6.2,7.05,1.05],[6.72,7.15,0]],g);for(let[p,a,Q0,r,A0]of[[3,3.15,3.2,4.5,3.5],[5.4,1.85,5.6,4.45,1.5],[1.9,3.55,1.8,4.85,4.15]])K0(T,[[p,7.15,a],[(p+Q0)/2,5.9,(a+A0)/2+0.15],[Q0,r,A0]],g)}});let i=new t8;K0(i,[[7.25,6.75,0],[7.4,5.4,0],[6.4,4.6,0],[5.6,5,0],[5.9,6.2,0],[6.45,6.55,0]],1);let $0=i.lines[0],X0=Y(6.98,0).x,w0=4*$,_0=2.5*$;V(L,e.blue,1,0.8,(T)=>d(T,X0,w0,_0,x5,(g)=>(7.75+0.45*Math.pow(g,1.5))*$,-1));let l0=K(6.15,15.35),m0=new x(0.3*$,(G.y0+G.y1)/2,0);return{model:J,head:G,condyle:E,lipHalf:D,center:m0,shell:C,fixed:k,jaw:L,chin:$0,eyes:[[l0.x,l0.y,3.15*$],[l0.x,l0.y,-3.15*$]],eyeR:1.05*$}}var s5=[0.09,0.06,0.03];class PZ{scene=new I7;camera=new h9(24,1,5,2000);beams=new DZ;rest=null;w=1;h=1;compact=!1;centred=!1;facing=1;clock=0;gaze=new S6;face=new eJ;eye=new x;turn=new d9;euler=new F8;strobe=0;tmp=new EZ;particles=[];echoes=[];lastEcho=-1;sparkSeed=7;k=1;ring={n:0,s:new Float64Array(80),cx:new Float64Array(80),cy:new Float64Array(80),ux:new Float64Array(80),uy:new Float64Array(80),a:new Float64Array(80),b:new Float64Array(80)};v3=new x;caliper=null;constructor(){this.scene.add(this.beams.group),this.scene.fog=new M6(0,50,100);for(let J=0;J<200;J++)this.particles.push({s:Math.random()*17,u:Math.random()*2-1,v:Math.random()*2-1,life:Math.random(),px:NaN,py:NaN,pz:NaN})}dispose(){this.beams.dispose()}resetMotion(){this.face=new eJ,this.echoes=[],this.lastEcho=-1,this.strobe=0;for(let J of this.particles)J.px=NaN}resize(J,Q){if(this.w=J,this.h=Q,this.compact=J<560,this.camera.aspect=J/Q,this.compact||this.centred)this.camera.clearViewOffset();else this.camera.setViewOffset(J,Q,0.1*J,0,J,Q);this.camera.updateProjectionMatrix(),this.beams.setResolution(J,Q);for(let $ of this.particles)$.px=NaN}poses(J){let Q=this.restFor(J),$=Math.tan(this.camera.fov*Math.PI/360),Z=1.1*Math.max(15.2/$,11/($*Math.max(0.3,this.camera.aspect))),K=Q.center.clone(),W=this.facing>0?0.62:Math.PI-0.62,X=0.2;return{target:K,home:K.clone().add(new x(Math.sin(W)*Math.cos(0.2),Math.sin(0.2),Math.cos(W)*Math.cos(0.2)).multiplyScalar(Z)),side:K.clone().add(new x(0,0,this.facing*Z))}}restFor(J){if(!this.rest||this.rest.model!==J)this.rest=n5(J);return this.rest}project(J,Q,$){let Z=this.v3.set(J,Q,$).applyMatrix4(this.beams.group.matrixWorld).project(this.camera);return[(Z.x+1)/2*this.w,(1-Z.y)/2*this.h]}pxPerCmAt(J,Q,$){let Z=this.camera.matrixWorld.elements,[K,W]=this.project(J,Q,$),[X,Y]=this.project(J+Z[0],Q+Z[1],$+Z[2]);return Math.hypot(X-K,Y-W)}crown(J){let Q=this.restFor(J),$=J.tract.scale,Z=Q.head.at(Q.head.y1-1.2*$),K=Z?(Z.F+Z.Bk)/2:Q.center.x,[W,X]=this.project(K,Q.head.y1,0);return{x:W,y:X,cmPx:this.pxPerCmAt(K,Q.head.y1,0)}}faceView(J,Q,$){let Z=r7(J,Q,$).find((K)=>K.id==="lips").pos;return{handles:r7,X:(K)=>this.project(K.x,K.y,0)[0],Y:(K)=>this.project(K.x,K.y,0)[1],pxPerCm:this.pxPerCmAt(Z.x,Z.y,0)}}update(J,Q,$,Z,K,W){this.clock+=W;let X=this.restFor(J),Y=J.tract.scale,H=this.face;this.headPose(X,Y);let N=MZ(J,$.jaw),q=X.condyle,U=this.beams,G=this.camera.position.distanceTo(X.center),E=this.scene.fog;E.near=G-3*Y,E.far=G+30*Y,U.begin();let O=(d,w=0)=>{let S=new Float32Array(d.length*3);return d.forEach((n,u)=>{S[3*u]=n.x,S[3*u+1]=n.y,S[3*u+2]=w}),S},B=this.v3.copy(this.eye).sub(X.center).normalize(),D=z8(0.25,0.8,Math.abs(B.z)),F=0.22+0.78*D,C=0.45+0.55*D,_=(d,w,S,n={},u=F)=>U.line(O(d),d.length,w,S,{...n,alpha:(n.alpha??1)*u}),I=(d,w,S)=>S===0?[d,w]:GX(d,w,q,S);this.k=Y;for(let d of X.fixed)for(let w of d.lines)U.line(w,w.length/3,d.color,d.width,{alpha:d.alpha,hot:d.hot});for(let d of X.jaw)for(let w of d.lines){let S=this.tmp.reset();for(let n=0;n<w.length;n+=3){let[u,K0]=I(w[n],w[n+1],N);S.p(u,K0,w[n+2])}U.poly(S,d.color,d.width,{alpha:d.alpha,hot:d.hot})}for(let d of X.shell){let w=this.tmp.reset();for(let S=0;S<d.w.length;S++){let n=d.a[3*S+2],[u,K0]=NX(Y,d.c[S],n,H.puff),[i,$0]=I(d.a[3*S]+u,d.a[3*S+1],N*d.w[S]);w.p(i,$0,n+K0)}U.poly(w,e.blueDim,0.85,{alpha:0.42})}let A=T6(J,Q,$);_(A.inset,e.blueDim,0.9,{alpha:0.5}),_(A.skull,e.blueDim,0.9,{close:!0,alpha:0.6}),_(A.brain,e.blueMid,1,{close:!0,alpha:0.75}),_(A.sulcus,e.blueDim,0.9),_(A.nasal,e.blueMid,1,{close:!0}),_(A.palOral,e.blueMid,1.1),_(A.palNasal,e.blueMid,1.1),_(A.skinLower,e.blue,1.5),_(A.skinUpper,e.blue,1.5),_(A.outerWall,e.blue,1.4,{hot:!0}),_(Q.inner,e.blue,1.3,{alpha:0.9}),_(A.glottisWall,e.blue,1.2,{alpha:0.8}),this.eyes(X,W),this.airway(J,Q,Z,K,Y),this.velum(Q,Y),this.epiglottis(Q,Y,C),this.larynx(J,Q,$,Z,Y,W,X.head.y0,F);let P=O(Q.tongue),k=(d,w)=>O(MJ(d.map((S)=>[S.x,S.y]),w).map(([S,n])=>({x:S,y:n}))),L=k(Q.upperLip,2),V=k(Q.lowerLip,2),m=this.lips(X,J,Q,$,N),j=X.chin,y=new Float32Array(j.length);for(let d=0;d<j.length;d+=3){let[w,S]=I(j[d],j[d+1],N);y[d]=w,y[d+1]=S}if(Z&&this.clock-this.lastEcho>=0.028){this.lastEcho=this.clock;let d=[{a:P,color:e.green},{a:y,color:e.red},{a:L,color:e.pink},{a:V,color:e.pink}];if(m)d.push({a:m,color:e.pink});this.echoes.push({t:this.clock,lines:d});while(this.echoes.length&&this.clock-this.echoes[0].t>0.12)this.echoes.shift()}if(Z)s5.forEach((d,w)=>{let S=this.nearestEcho(this.clock-d);if(!S)return;for(let n of S.lines)U.line(n.a,n.a.length/3,n.color,1,{alpha:(0.1+0.07*w)*C})});if(this.tongue(Q,$,Y),U.line(y,y.length/3,e.red,1.5,{hot:!0,alpha:C}),U.line(P,Q.tongue.length,e.green,1.6,{hot:!0,alpha:C}),U.line(L,L.length/3,e.pink,1.5,{hot:!0,alpha:C}),U.line(V,V.length/3,e.pink,1.5,{hot:!0,alpha:C}),_(MJ(Q.velum.map((d)=>[d.x,d.y]),3).map(([d,w])=>({x:d,y:w})),e.white,1.25,{alpha:0.92},C),K.particles&&Z)this.drawParticles(J,Q,Z,W);if(Z)this.drawTurbulence(J,Q,Z);if(this.caliper=null,K.calipers)this.drawCaliper(Q);U.end()}nearestEcho(J){let Q=null,$=0.016;for(let Z of this.echoes){let K=Math.abs(Z.t-J);if(K<$)$=K,Q=Z}return Q}headPose(J,Q){let $=this.beams.group,Z=this.v3.set(-2.4*Q,J.head.y0+0.42*(J.condyle.y-J.head.y0),0);this.turn.setFromEuler(this.euler.set(this.face.tilt,0,this.face.nod)),$.quaternion.copy(this.turn),$.position.copy(Z).sub(Z.applyQuaternion(this.turn)),$.updateMatrixWorld(!0),this.eye.copy(this.camera.position),$.worldToLocal(this.eye)}eyes(J,Q){let $=this.gaze,Z=this.face;$.update(this.clock,Q);let K=J.eyeR,W=$.pitch+1.3*Z.lookUp,X=[Math.cos(W)*Math.cos($.yaw),Math.sin(W),Math.cos(W)*Math.sin($.yaw)],Y=(U)=>{let G=Math.abs(U[1])>0.9?[1,0,0]:[0,1,0],E=FX(qX(G,U));return[E,qX(U,E)]},H=this.eye,N=1-z8(0.4,0.9,Z.lid),q=Math.max(0,Z.brow);for(let U of J.eyes){let G=FX([H.x-U[0],H.y-U[1],H.z-U[2]]),[E,O]=Y(G),B=new t8;B.ellipse(U,J6(E,K),J6(O,K),36);let[D,F]=Y(X),C=[U[0]+X[0]*K*0.86,U[1]+X[1]*K*0.86,U[2]+X[2]*K*0.86];B.ellipse(C,J6(D,K*0.5),J6(F,K*0.5),24);let _=[U[0]+X[0]*K*0.97,U[1]+X[1]*K*0.97,U[2]+X[2]*K*0.97];B.ellipse(_,J6(D,K*0.2),J6(F,K*0.2),14);let I=Math.sign(U[2]),A=(j,y,d)=>j*(1-y*y)+0.06*y*I*d,P=(j)=>{for(let y=0;y<=16;y++){let d=-1+y/8,w=I*d*0.95,S=A(-0.36,d,-1),n=j?A(0.5+0.2*q,d,1)*(1-Z.lid)+(S+0.03)*Z.lid:S;B.p(U[0]+1.04*K*Math.cos(n)*Math.cos(w),U[1]+1.04*K*Math.sin(n),U[2]+1.04*K*Math.cos(n)*Math.sin(w))}B.end()};P(!0),P(!1);let k=0.3*Z.brow,L=0.28*Math.max(0,-Z.brow),V=0.22*Z.lid*q;for(let j=0;j<=12;j++){let y=-1+j/6,d=I*(0.15+y*0.62),w=(1-y)/2,S=0.82+0.12*(1-y*y)-0.06*y+k+(V-L)*w;B.p(U[0]+1.32*K*Math.cos(S)*Math.cos(d),U[1]+1.32*K*Math.sin(S),U[2]+1.32*K*Math.cos(S)*Math.sin(d))}B.end();let m=[[e.blueMid,1,0.35],[e.blue,1,0.9*N],[e.blue,1,0.7*N],[e.blue,1.25,0.95],[e.blue,1.05,0.75],[e.blueMid,1.3,0.8]];B.lines.forEach((j,y)=>this.beams.line(j,j.length/3,m[y][0],m[y][1],{alpha:m[y][2]}))}}lips(J,Q,$,Z,K){let W=Q.tract.scale,X=J.condyle,Y=J.head,H=this.beams,N=Q.bodyParams.pharynx,q=J.lipHalf,U=Math.max(0.3*W,(1.1+(Q.bodyParams.lipWidth-1.1)*UX(Z.lipWidth))*W/2),G=$.upperLip.slice(6),E=$.lowerLip.slice(6).map((S)=>d7(S,X,-K)),O=zZ(G),B=zZ(E),D=G[0],F=E[0],C=(D.y+F.y)/2,_=(S,n)=>{let u=Y.at(S);return u?e7(u,n,!0):0},I=D.x-_(D.y,0),A=F.x-_(F.y,0),P=(I+A)/2,k=G[G.length-1].y,L=E[E.length-1].y,V=this.tmp,m=(S,n,u)=>{let K0=Math.sqrt(Math.max(0,1-(u/U)**2)),i=t7(S?G:E,S?O:B,n),$0=S?D:F,X0=S?k:L,w0=C+($0.y-C)*K0,_0=X0-$0.y,l0=w0+(i.y-$0.y)*(X0-w0)/(Math.abs(_0)<0.0001?0.0001:_0),m0=Math.pow(Math.max(0,1-(u/q)**2),1.5),T=i.x-_(i.y,0)+(P-(S?I:A))*(1-K0)*(1-n),g=_(l0,u)+T*m0,p=S?0.5*(1-K0)*(1-n):0.5*(1+K0)+0.5*(1-K0)*n,a=p+(DX(W,N,g,l0)-p)*z8(U,q,Math.abs(u)),[Q0,r]=NX(W,OX(W,N,g,l0),u,this.face.puff),[A0,q0]=a?GX(g+Q0,l0,X,K*a):[g+Q0,l0];return[A0,q0,u+r]},j=(S,n,u,K0,i)=>{V.reset();for(let $0=0;$0<=i;$0++){let X0=u+(K0-u)*$0/i;V.p(...m(S,n(X0),X0))}return V},y=[0.66,0.88];for(let S of[!0,!1]){for(let K0 of y)H.poly(j(S,()=>K0,-q,q,24),e.blueDim,0.85,{alpha:0.42});for(let K0 of[-0.8,-0.5,0.5,0.8].map((i)=>i*q)){V.reset();for(let i=0;i<=8;i++)V.p(...m(S,0.45+0.55*i/8,K0));H.poly(V,e.blueDim,0.85,{alpha:0.42})}let n=Math.min(q,U+0.3*W),u=(K0)=>{let i=Math.sqrt(Math.max(0,1-(K0/n)**2)),$0=S?-0.07*Math.exp(-((K0/(0.32*W))**2))+0.05*Math.exp(-(((Math.abs(K0)-0.55*W)/(0.3*W))**2)):0;return Math.max(0,(S?0.42:0.45)*i+$0*i)};H.poly(j(S,u,-n,n,28),e.pink,1.3,{alpha:0.95}),H.poly(j(S,(K0)=>0.45*u(K0),-n,n,28),e.pink,1,{alpha:0.45})}for(let S of[1,-1])H.poly(j(!0,()=>0,S*U,S*q,6),e.pink,1,{alpha:0.6});let d=$.upperLip[6].y-$.lowerLip[6].y>0.02*W,w=24;V.reset();for(let S=0;S<=w;S++)V.p(...m(!0,0,-U+2*U*S/w));if(d)for(let S=w-1;S>0;S--)V.p(...m(!1,0,-U+2*U*S/w));return H.poly(V,e.pink,2.1,{hot:!0,close:d}),d?V.a.slice(0,V.n*3):null}tongue(J,Q,$){let Z=J.tongue,K=0,W=1/0;Z.forEach((G,E)=>{let O=(G.x-J.tip.x)**2+(G.y-J.tip.y)**2;if(O<W)W=O,K=E});let X=22,Y=c5(Z.slice(0,K+1),X),H=UX(Q.lateral),N=Y.map((G,E)=>{let O=Y[Math.max(0,E-1)],B=Y[Math.min(X-1,E+1)],D=B.x-O.x,F=B.y-O.y,C=Math.hypot(D,F)||1;D/=C,F/=C;let _=E/(X-1);return{p:G,nx:-F,ny:D,W:f8(y5,_)*$,h:(f8(h5,_)+0.8*H*z8(0.45,0.8,_))*$}}),q=(G,E)=>{let O=G.h*(1-Math.cos(E));return[G.p.x-G.nx*O,G.p.y-G.ny*O,G.W*Math.sin(E)]},U=this.tmp;for(let G=1;G<X-1;G+=2){U.reset();for(let E=0;E<=12;E++)U.p(...q(N[G],-Math.PI/2+Math.PI*E/12));this.beams.poly(U,e.green,1,{alpha:0.5})}for(let G of[-Math.PI/2,-Math.PI/4,Math.PI/4,Math.PI/2]){U.reset();for(let E of N)U.p(...q(E,G));this.beams.poly(U,e.green,Math.abs(G)>1?1.25:1,{alpha:Math.abs(G)>1?0.8:0.45})}}airway(J,Q,$,Z,K){let W=Q.grid,X=this.ring;if(X.n=0,W.length<2)return;let Y=$?J.nodeS($.t.phLen,$.t.orLen):null,H=Z.pressure&&$&&Y&&Y.length===$.t.pressureRms.length,N=-1,q=0;for(let O=0;O<W.length&&X.n<X.s.length;O++){let B=W[O],D=B.outer.x-B.inner.x,F=B.outer.y-B.inner.y,C=Math.hypot(D,F);if(C>0.0001)N=D/C,q=F/C;let _=B.d/2,I=X.n++;X.s[I]=B.s,X.cx[I]=B.outer.x-N*_,X.cy[I]=B.outer.y-q*_,X.ux[I]=N,X.uy[I]=q,X.a[I]=_,X.b[I]=B.d>0.01?Math.min(3.5*K,2*B.area/(Math.PI*B.d)):0}let U=this.tmp,G=this.eye;for(let O=0;O<X.n;O+=2){U.reset();for(let I=0;I<=24;I++){let A=I/24*Math.PI*2,P=Math.cos(A)*X.a[O],k=Math.sin(A)*X.b[O];U.p(X.cx[O]+X.ux[O]*P,X.cy[O]+X.uy[O]*P,k)}let B=G.x-X.cx[O],D=G.y-X.cy[O],F=G.z,C=Math.abs(X.uy[O]*B-X.ux[O]*D)/(Math.hypot(B,D,F)||1),_=1-0.65*C*C;if(H){let I=Math.pow(m7(CZ($.t.pressureRms,Y,X.s[O])),0.85);this.beams.poly(U,p7(I),0.85,{alpha:(0.25+0.65*I)*_})}else this.beams.poly(U,e.blueDim,0.85,{alpha:(Z.grid?0.8:0.45)*_})}for(let O of[1,-1]){U.reset();for(let B=0;B<X.n;B++)U.p(X.cx[B],X.cy[B],O*X.b[B]);this.beams.poly(U,e.blue,1,{alpha:0.55})}let E=Q.glottis;for(let O of[0.3,0.65]){let B=E.x+(X.cx[0]-E.x)*O,D=E.y+(X.cy[0]-E.y)*O,F=(0.55+0.25*O)*K;U.reset();for(let C=0;C<=20;C++)U.p(B+F*Math.cos(C/20*Math.PI*2),D,F*Math.sin(C/20*Math.PI*2));this.beams.poly(U,e.blueDim,0.9,{alpha:0.6})}}airPoint(J,Q,$,Z){let K=this.ring;if(K.n<2)return null;if(Q<=K.s[0]){let U=Math.max(0,Q/Math.max(0.01,K.s[0])),G=J.glottis;return[G.x+(K.cx[0]-G.x)*U+$*0.3*this.k,G.y+(K.cy[0]-G.y)*U,Z*0.45*this.k]}let W=0,X=K.n-1;if(Q>=K.s[X])return null;while(X-W>1){let U=W+X>>1;if(K.s[U]<=Q)W=U;else X=U}let Y=(Q-K.s[W])/Math.max(0.000001,K.s[X]-K.s[W]),H=(U)=>U[W]+(U[X]-U[W])*Y,N=H(K.a)*$*0.82,q=H(K.b)*Z*0.82;return[H(K.cx)+H(K.ux)*N,H(K.cy)+H(K.uy)*N,q]}drawParticles(J,Q,$,Z){let K=$.t,W=J.nodeS(K.phLen,K.orLen),X=new Float32Array(K.phAreas.length+K.orAreas.length);X.set(K.phAreas,0),X.set(K.orAreas,K.phAreas.length);let Y=Q.lipS;for(let H of this.particles){let N=CZ(K.flow,W,H.s),q=Math.max(0.05,CZ(X,W,H.s)),U=N/q,G=Math.sign(U)*2.2*Math.log1p(Math.abs(U)/30);if(H.s+=G*Z,H.life-=Z*0.25,H.s>Y||H.s<0||H.life<=0||Math.abs(U)<3){if(!(Math.abs(U)<3&&H.life>0)){H.s=Math.random()*0.8,H.u=Math.random()*2-1,H.v=Math.random()*2-1,H.life=0.6+Math.random()*0.8,H.px=NaN;continue}}let E=this.airPoint(Q,H.s,H.u,H.v);if(!E)continue;if(Number.isFinite(H.px)){let O=Math.min(2,Math.floor(Math.min(1,Math.abs(G)/6)*Math.min(1,H.life)*3));this.beams.seg(H.px,H.py,H.pz,E[0],E[1],E[2],"#ffe2a8",1.05,0.16+0.2*O)}[H.px,H.py,H.pz]=E}}drawTurbulence(J,Q,$){let Z=$.t;if(!(Z.noiseLevel>1)||Z.noiseNode<0)return;let K=J.branchS(Z.noiseNode,Z.phLen,Z.orLen);if(K<0)return;let W=Math.min(1,Math.log10(Z.noiseLevel)/3.2);if(W<=0.05)return;let X=this.sparkSeed=this.sparkSeed*16807%2147483647,Y=()=>(X=X*16807%2147483647)/2147483647;for(let H=0;H<40;H++){let N=this.airPoint(Q,K+0.2+Y()*1.2,Y()*2-1,Y()*2-1);if(!N)continue;let q=0.02+Y()*0.05;this.beams.seg(N[0]-q,N[1],N[2],N[0]+q,N[1],N[2],"#f4fbff",1.6,0.15+0.7*W*Y())}}drawCaliper(J){let Q=this.ring,$=-1,Z=1/0;for(let X=2;X<J.grid.length-1;X++)if(J.grid[X].area<Z)Z=J.grid[X].area,$=X;if($<0||Z>=1.2||$>=Q.n)return;let K=this.tmp.reset();for(let X=0;X<=24;X++){let Y=X/24*Math.PI*2,H=Math.cos(Y)*Q.a[$],N=Math.sin(Y)*Q.b[$];K.p(Q.cx[$]+Q.ux[$]*H,Q.cy[$]+Q.uy[$]*H,N)}this.beams.poly(K,e.white,1.3,{hot:!0});let W=J.grid[$];this.caliper={x:W.outer.x,y:W.outer.y,z:0,area:Z}}velum(J,Q){let $=J.velum,Z=Math.floor($.length/2)-1,K=[];for(let Y=0;Y<=Z;Y++){let H=$[Y],N=$[$.length-1-Y],q=H.x-N.x,U=H.y-N.y,G=Math.hypot(q,U)||1;q/=G,U/=G;let E=Y/Z;K.push({x:(H.x+N.x)/2,y:(H.y+N.y)/2,nx:q,ny:U,W:(1.95-1.5*Math.pow(E,1.5))*Q,droop:0.45*Q*E})}let W=(Y,H)=>{let N=0.12*Q*(1-H*H)-Y.droop*H*H;return[Y.x+Y.nx*N,Y.y+Y.ny*N,Y.W*H]},X=this.tmp;for(let Y of[1,3,5,7,9].filter((H)=>H<=Z)){X.reset();for(let H=0;H<=12;H++)X.p(...W(K[Y],-1+H/6));this.beams.poly(X,e.white,1,{alpha:0.5})}for(let Y of[-1,1]){X.reset();for(let H of K)X.p(...W(H,Y));this.beams.poly(X,e.white,1,{alpha:0.65})}}epiglottis(J,Q,$){let[Z,K]=J.epiglottis,W=K.x-Z.x,X=K.y-Z.y,Y=Math.hypot(W,X)||1;W/=Y,X/=Y;let H={x:-X,y:W},N=(G)=>(0.22+0.9*Math.pow(Math.sin(G*Math.PI/2),1.3))*Q,q=this.tmp.reset(),U=10;for(let G=0;G<=U;G++){let E=G/U,O=N(E),B=0.28*Q*(O/(1.12*Q));q.p(Z.x+W*Y*E+H.x*B,Z.y+X*Y*E+H.y*B,O)}for(let G=1;G<12;G++){let E=N(1)*(1-2*G/12),O=0.28*Q*(Math.abs(E)/(1.12*Q))**2;q.p(K.x+H.x*O+W*0.08*Q*(1-(E/N(1))**2),K.y+H.y*O+X*0.08*Q*(1-(E/N(1))**2),E)}for(let G=U;G>=0;G--){let E=G/U,O=N(E),B=0.28*Q*(O/(1.12*Q));q.p(Z.x+W*Y*E+H.x*B,Z.y+X*Y*E+H.y*B,-O)}this.beams.poly(q,e.blue,1.1,{alpha:0.75}),this.beams.line(new Float32Array([Z.x,Z.y,0,K.x,K.y,0]),2,e.blue,2.1,{alpha:0.85*$})}larynx(J,Q,$,Z,K,W,X,Y){let H=Q.glottis,N=this.beams,q=new t8,U=(A,P,k)=>[H.x+A*K,H.y+P*K,k*K],G=(A,P=!1)=>{for(let[k,L,V]of A)q.p(...U(k,L,V));q.end(P)};for(let A of[1,-1])G([[1.45,1.75,0],[0.75,2,A*1.2],[-0.5,1.95,A*1.9],[-0.6,-0.6,A*1.85],[0.25,-0.85,A*1.5],[1.05,-0.8,A*0.55],[1.2,-0.75,0],[1.6,0.05,0],[1.9,1.15,0],[1.45,1.75,0]]),G([[-0.5,1.95,A*1.9],[-0.7,2.85,A*1.85]]),G([[-0.6,-0.6,A*1.85],[-0.45,-1.25,A*1.7]]);for(let[A,P]of[[-1.75,0.15],[-1.4,1.1]]){for(let k=0;k<=28;k++){let L=k/28*Math.PI*2;q.p(...U(0.1+1*Math.cos(L),A+P*(1-Math.cos(L))/2,1.1*Math.sin(L)))}q.end()}for(let A of q.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let E=new t8,O=H.y-2.1*K,B=H.x+0.08*K;for(let A=O;A>X;A-=0.5*K)E.ellipse([B,A,0],[0.82*K,0,0],[0,0,0.95*K],20,-0.8*Math.PI,0.8*Math.PI);for(let A of[1,-1])E.p(B,O,A*0.95*K).p(B,X,A*0.95*K).end();for(let A of E.lines)N.line(A,A.length/3,e.blueDim,0.9,{alpha:0.85});for(let A of[1,-1])N.line(new Float32Array([B+A*0.82*K,H.y,0,B+A*0.82*K,X,0]),2,e.blueMid,1,{alpha:Y});let D=new t8,F={x:J.tract.P(1.6,0).x,y:J.tract.P(0,2.9).y+0.6*$.larynx*K};for(let A of[-0.16,0.16]){for(let P=0;P<=20;P++){let k=-1+P/10;D.p(F.x+(0.35-0.65*k*k)*K,F.y+A*K,1.15*k*K)}D.end();for(let P of[1,-1])D.p(F.x-0.3*K,F.y+A*K,P*1.15*K).p(F.x-2.8*K,F.y+(0.7+A)*K,P*2.05*K).end()}for(let A of D.lines)N.line(A,A.length/3,e.blueMid,1,{alpha:0.85});let C=Z?.t.glottalArea,_=0;if(C&&C.length){this.strobe=(this.strobe+W/1.8)%1;let A=0.02;for(let P=0;P<C.length;P++)A=Math.max(A,C[P]);if(_=Math.min(0.45*K,C[Math.floor(this.strobe*C.length)%C.length]/(1.3*K)*2.2),!Number.isFinite(_))_=0}let I=new t8;for(let A of[1,-1])I.p(...U(0.72,0.1,0)).p(...U(-0.55,0.1,A*(0.06+_/K))).end(),I.p(...U(0.72,0,0)).p(...U(-0.6,0,A*0.62)).end(),I.p(...U(0.65,0.45,0)).p(...U(-0.5,0.45,A*0.45)).end(),I.ellipse(U(-0.72,0.15,A*(0.3+_/K)),[0.18*K,0,0],[0,0.12*K,0.12*K],10);I.lines.forEach((A,P)=>N.line(A,A.length/3,P%4===0?e.white:e.blueMid,P%4===0?1.3:1,{alpha:P%4===2?0.6:0.9,hot:P%4===0}))}}function GX(J,Q,$,Z){let K=J-$.x,W=Q-$.y,X=Math.cos(Z),Y=Math.sin(Z);return[$.x+K*X-W*Y,$.y+K*Y+W*X]}var qX=(J,Q)=>[J[1]*Q[2]-J[2]*Q[1],J[2]*Q[0]-J[0]*Q[2],J[0]*Q[1]-J[1]*Q[0]],FX=(J)=>{let Q=Math.hypot(J[0],J[1],J[2])||1;return[J[0]/Q,J[1]/Q,J[2]/Q]},J6=(J,Q)=>[J[0]*Q,J[1]*Q,J[2]*Q];function CZ(J,Q,$){let Z=0,K=1/0;for(let W=0;W<Q.length;W++){let X=Math.abs(Q[W]-$);if(X<K)K=X,Z=W}return J[Z]??0}var RX={type:"change"},_Z={type:"start"},LX={type:"end"},JQ=new L6,MX=new r9,i5=Math.cos(70*D6.DEG2RAD),B9=new x,l9=2*Math.PI,K9={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kZ=0.000001;class wZ extends v7{constructor(J,Q=null){super(J,Q);if(this.state=K9.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:i8.ROTATE,MIDDLE:i8.DOLLY,RIGHT:i8.PAN},this.touches={ONE:o8.ROTATE,TWO:o8.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new d9,this._lastTargetPosition=new x,this._quat=new d9().setFromUnitVectors(J.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new B6,this._sphericalDelta=new B6,this._scale=1,this._panOffset=new x,this._rotateStart=new h0,this._rotateEnd=new h0,this._rotateDelta=new h0,this._panStart=new h0,this._panEnd=new h0,this._panDelta=new h0,this._dollyStart=new h0,this._dollyEnd=new h0,this._dollyDelta=new h0,this._dollyDirection=new x,this._mouse=new h0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=a5.bind(this),this._onPointerDown=o5.bind(this),this._onPointerUp=r5.bind(this),this._onContextMenu=Kq.bind(this),this._onMouseWheel=Jq.bind(this),this._onKeyDown=Qq.bind(this),this._onTouchStart=$q.bind(this),this._onTouchMove=Zq.bind(this),this._onMouseDown=t5.bind(this),this._onMouseMove=e5.bind(this),this._interceptControlDown=Wq.bind(this),this._interceptControlUp=Xq.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=K9.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(RX),this.update(),this.state=K9.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(B9.copy(Q).sub(this.target),B9.applyQuaternion(this._quat),this._spherical.setFromVector3(B9),this.autoRotate&&this.state===K9.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=l9;else if($>Math.PI)$-=l9;if(Z<-Math.PI)Z+=l9;else if(Z>Math.PI)Z-=l9;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(B9.setFromSpherical(this._spherical),B9.applyQuaternion(this._quatInverse),Q.copy(this.target).add(B9),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=B9.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),K=!!Y}else if(this.object.isOrthographicCamera){let X=new x(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=Y!==this.object.zoom;let H=new x(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),W=B9.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(JQ.origin.copy(this.object.position),JQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(JQ.direction))<i5)this.object.lookAt(this.target);else MX.setFromNormalAndCoplanarPoint(this.object.up,this.target),JQ.intersectPlane(MX,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>kZ||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kZ||this._lastTargetPosition.distanceToSquared(this.target)>kZ)return this.dispatchEvent(RX),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return l9/60*this.autoRotateSpeed*J;else return l9/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){B9.setFromMatrixColumn(Q,0),B9.multiplyScalar(-J),this._panOffset.add(B9)}_panUp(J,Q){if(this.screenSpacePanning===!0)B9.setFromMatrixColumn(Q,1);else B9.setFromMatrixColumn(Q,0),B9.crossVectors(this.object.up,B9);B9.multiplyScalar(J),this._panOffset.add(B9)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;B9.copy(Z).sub(this.target);let K=B9.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/$.clientHeight,this.object.matrix),this._panUp(2*Q*K/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,K=Q-$.top,W=$.width,X=$.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(l9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(l9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(l9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-l9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(l9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-l9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),K=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(l9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(l9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new h0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function o5(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function a5(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function r5(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(LX),this.state=K9.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function t5(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case i8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=K9.DOLLY;break;case i8.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=K9.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=K9.ROTATE}break;case i8.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=K9.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=K9.PAN}break;default:this.state=K9.NONE}if(this.state!==K9.NONE)this.dispatchEvent(_Z)}function e5(J){switch(this.state){case K9.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case K9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case K9.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function Jq(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==K9.NONE)return;J.preventDefault(),this.dispatchEvent(_Z),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(LX)}function Qq(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function $q(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case o8.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=K9.TOUCH_ROTATE;break;case o8.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=K9.TOUCH_PAN;break;default:this.state=K9.NONE}break;case 2:switch(this.touches.TWO){case o8.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=K9.TOUCH_DOLLY_PAN;break;case o8.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=K9.TOUCH_DOLLY_ROTATE;break;default:this.state=K9.NONE}break;default:this.state=K9.NONE}if(this.state!==K9.NONE)this.dispatchEvent(_Z)}function Zq(J){switch(this._trackPointer(J),this.state){case K9.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case K9.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case K9.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case K9.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=K9.NONE}}function Kq(J){if(this.enabled===!1)return;J.preventDefault()}function Wq(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Xq(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var Q6=new XZ({alpha:!0,antialias:!0,powerPreference:"low-power"});Q6.setPixelRatio(Math.min(devicePixelRatio,1.5));Q6.setClearColor(0,0);document.body.appendChild(Q6.domElement);var x8=new PZ;x8.centred=!0;var v6=new wZ(x8.camera,Q6.domElement);v6.enablePan=!1;v6.enableZoom=!1;v6.enableDamping=!1;var j6,b6,TZ=0,IX=!1,Yq={pressure:!1,particles:!1,calipers:!1,grid:!1};function SZ(){let J=innerWidth,Q=innerHeight;if(Q6.setSize(J,Q),x8.resize(J,Q),b6&&!IX)VX()}function VX(){let J=x8.poses(b6);x8.camera.position.copy(J.home),v6.target.copy(J.target),v6.update(),IX=!0}window.motionScene=(J)=>{if(j6=J,!b6){let Q=J.body.scale,$=J.body.pharynx;b6={bodyParams:J.body,tract:{scale:Q,P:(Z,K)=>({x:(Z>0.5?0.5+(Z-0.5)*0.86:Z)*Q,y:(K<7?7-(7-K)*$:K)*Q}),unP:(Z,K)=>({x:Z/Q>0.5?0.5+(Z/Q-0.5)/0.86:Z/Q,y:K/Q<7?7-(7-K/Q)/$:K/Q})},frame:()=>j6.restFrame},SZ(),VX()}};function BX(J){if(requestAnimationFrame(BX),document.hidden||!j6||J-TZ<40)return;let Q=Math.min(0.08,(J-TZ)/1000);TZ=J,x8.face.update(null,Q),x8.update(b6,j6.frame,j6.artic,null,Yq,Q),Q6.render(x8.scene,x8.camera)}addEventListener("resize",SZ);SZ();requestAnimationFrame(BX);
