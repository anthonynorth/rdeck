!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.rdeck=t():e.rdeck=t()}(globalThis,(function(){return(()=>{var e={3787:(e,t,r)=>{"use strict";r.r(t),r.d(t,{VERSION:()=>re,binding:()=>te});var n={};r.r(n),r.d(n,{AGGREGATION_OPERATION:()=>c.KM,ArcLayer:()=>s.zv,BitmapLayer:()=>s.hz,CPUGridLayer:()=>c.ab,ColumnLayer:()=>s.eJ,ContourLayer:()=>c.YY,GPUGridLayer:()=>c.ML,GeoJsonLayer:()=>s.UW,GreatCircleLayer:()=>u.GJ,GridCellLayer:()=>s.cJ,GridLayer:()=>c.mU,H3ClusterLayer:()=>u.cH,H3HexagonLayer:()=>u.bW,HeatmapLayer:()=>c.zP,HexagonLayer:()=>c.dX,IconLayer:()=>s.eE,LineLayer:()=>s.Ie,MVTLayer:()=>u.i3,PathLayer:()=>s.nr,PointCloudLayer:()=>s.U5,PolygonLayer:()=>s.dW,S2Layer:()=>u.jJ,ScatterplotLayer:()=>s.pU,ScenegraphLayer:()=>m.S,ScreenGridLayer:()=>c.p3,SimpleMeshLayer:()=>m.L,SolidPolygonLayer:()=>s.PJ,TerrainLayer:()=>u.tr,TextLayer:()=>s.AB,Tile3DLayer:()=>u.cY,TileLayer:()=>u.Im,TripsLayer:()=>u.Fw,_AggregationLayer:()=>c.Di,_BinSorter:()=>c.l0,_CPUAggregator:()=>c.oA,_GPUGridAggregator:()=>c.Wc,_MultiIconLayer:()=>s.vb});var a=r(7378),o=r(1542),i=r(1151),l=(r(4078),r(8376)),s=r(2632),c=r(9460),u=r(5494),m=r(8857);r(911);function p([e,t,r,n=255]){return`rgba(${e}, ${t}, ${r}, ${n/255})`}function d(e,t,r=0){return Array.isArray(e)||ArrayBuffer.isView(e)?t||4!==e.length?((t=t||[])[r+0]=e[0],t[r+1]=e[1],t[r+2]=e[2],t[r+3]=4===e.length?e[3]:255,t):e:"string"==typeof e?(function(e,t,r){if(7===e.length){const n=parseInt(e.substring(1),16);t[r+0]=Math.floor(n/65536),t[r+1]=Math.floor(n/256%256),t[r+2]=n%256,t[r+3]=255}else if(9===e.length){const n=parseInt(e.substring(1),16);t[r+0]=Math.floor(n/16777216),t[r+1]=Math.floor(n/65536%256),t[r+2]=Math.floor(n/256%256),t[r+3]=n%256}}(e,t=t||[],r),t):[0,0,0,255]}var y=r(8017),f=r(696),g=r(8159),h=r(7599),v=r(3891);class b{constructor({type:e,name:t,value:r,data:n,domain:a,range:o,exponent:i,base:l,legend:s}){this.type=void 0,this.name=void 0,this.value=void 0,this.field=void 0,this.data=void 0,this.scale=void 0,this.legend=void 0,this.type=e,this.name=t,this.field=r,this.data=n,this.legend=s,this.scale=function({type:e,domain:t,range:r,exponent:n,base:a}){switch(e){case"linear":return(0,y.Z)().domain(null!=t?t:[]).range(r);case"power":return(0,f.ZP)().domain(null!=t?t:[]).range(r).exponent(n);case"log":return(0,g.Z)().domain(null!=t?t:[]).range(r).base(a);case"quantize":return(0,h.Z)().domain(null!=t?t:[]).range(r);case"quantile":return(0,v.Z)().domain(null!=t?t:[]).range(r);default:throw TypeError(`scale type: ${e} not supported`)}}({type:e,domain:null!=a?a:n,range:o,exponent:i,base:l}),this.value=function(e,t){return(r,{index:n})=>e(t[n])}(this.scale,n)}get isContinuous(){return"interpolate"in this.scale}}const x={getHexagon:(e,{index:t,data:r})=>r.frame.hexagon[t],getHexagons:(e,{index:t,data:r})=>r.frame.hexagons[t],getS2Token:(e,{index:t,data:r})=>r.frame.token[t],getIcon:(e,{index:t,data:r})=>r.frame.icon[t],getText:(e,{index:t,data:r})=>r.frame.text[t],getPath:(e,{index:t,data:r})=>r.frame.path[t],getPolygon:(e,{index:t,data:r})=>r.frame.polygon[t],getPosition:(e,{index:t,data:r})=>r.frame.position[t],getSourcePosition:(e,{index:t,data:r})=>r.frame.source_position[t],getTargetPosition:(e,{index:t,data:r})=>r.frame.target_position[t]};class E{constructor(e){let{type:t}=e,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["type"]);this.layer=void 0,this.legend=void 0;const a=function(e){const t=Object.entries(e).filter((([e,t])=>L(e))).map((([e,t])=>[e,d(t)]));"colorRange"in e&&t.push(["colorRange",e.colorRange.map((e=>d(e)))]);return Object.fromEntries(t)}(r),o=function(e){const t=e=>function(e){return null!=e&&"object"==typeof e&&!Array.isArray(e)}(e)&&"type"in e;return Object.entries(e).filter((([e,r])=>function(e){return/(Radius|Elevation|Color|Weight|Width|Height|Size)$/.test(e)}(e)&&t(r))).map((([t,r])=>{let n=r.range;return L(t)&&(n=n.map((e=>d(e)))),new b(Object.assign({},r,{range:n,name:t,data:O(e.data,r.value)}))}))}(r),i=Object.fromEntries(o.map((({name:e,value:t})=>[e,t])));this.layer=new n[t](Object.assign({},x,r,a,i)),this.legend={name:r.id||t,scales:o.filter((e=>e.legend))}}static create(e){return new E(e)}}function L(e){return e.endsWith("Color")}function O(e,t){if(Array.isArray(e)&&0===e.length)return[];if("frame"in e)return e.frame[t];if("type"in e){const r=e=>{var r;return null==(r=e.properties)?void 0:r[t]};switch(e.type){case"Feature":return r(e);case"FeatureCollection":return e.features.map(r)}}throw TypeError("data type not suppported")}const k="_3rdxBLth1N2ey-DR8zZS3k",j="_3a-qtBZofjlel3EyiZrLe0",P="_3L9Gh0vaiKQ5lmrBXb1Ppa",w="_4LWuEkar5BaPjDJypGFMM",T="_1SNUXvO9jR7Km5I-4zWVkl",A=({info:e})=>{if(null==e)return null;const{index:t,layer:r,x:n,y:o}=e,{id:i,tooltip:l,data:s}=r.props,c=null==e.object,u=c?s.frame:e.object,m=c?e=>u[e][t]:e=>u[e],p="boolean"==typeof l?Object.keys(u):[l].flat();return a.createElement("div",{className:k,style:{transform:`translate(${n}px, ${o}px)`}},a.createElement("div",{className:j},i),a.createElement("table",{className:P},a.createElement("tbody",null,p.map((e=>a.createElement("tr",{key:e},a.createElement("td",{className:w},e),a.createElement("td",{className:T},String(m(e)))))))))},S=(0,a.memo)(A),_="_19x6CEViDqIUJgmzMHUO_L",M="_1O5QPr7CiTBczYArgl3S--",C="_1_q1TQIZ88zoNRCuCezvNi",N="ePCUM6mslf2Y-i0jhVFMh",G="_3YhhTqYy3O5ALWcQDpz_EK",z="lMTfZcYbDODR5PTtyG7HK",Z="_1ZfRjdxyTNRK4cGQvlu56G",H="_1mPi0Qw9KZYGIt5csk3PZh",I="UU3enfH0Fz4EvQztbQYag";function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const U=({layers:e})=>0===e.length?null:a.createElement("div",{className:_},e.map((e=>a.createElement(B,R({key:e.name},e))))),B=({name:e,scales:t})=>0===t.length?null:a.createElement("div",{className:M},a.createElement("div",{className:C},e),t.map((e=>a.createElement($,R({key:e.name},e,{isContinuous:e.isContinuous}))))),$=({name:e,field:t,scale:r,isContinuous:n})=>{const o=e.replace(/^get/,"").replace(/([A-Z])/g," $1").toLowerCase();const i=/color$/i.test(e);return a.createElement("div",{className:N},a.createElement("div",{className:G},o),a.createElement("span",{className:z},"by "),a.createElement("span",{className:Z},t),i&&!n&&a.createElement(W,{scale:r}),i&&n&&a.createElement(Y,{scale:r}))},W=({scale:e})=>{const t=(0,a.useMemo)((()=>"ticks"in e?e.ticks(6).map((t=>[p(e(t)),t])):[]),[e]),r=10+14*(t.length-1);return a.createElement("svg",{className:H,height:r},t.map((([e,t],r)=>a.createElement("svg",{key:t,y:14*r},a.createElement("rect",{width:20,height:10,fill:e}),a.createElement("text",{className:I,x:28,y:8},t)))))},Y=({scale:e})=>{const t=D("gradient"),r=(0,a.useMemo)((()=>e.ticks(6).map((t=>p(e(t))))),[e]),n=(0,a.useMemo)((()=>e.ticks(6)),[e]),o=10+14*(r.length-1);return a.createElement("svg",{className:H,height:o,width:"100%"},a.createElement("defs",null,a.createElement("linearGradient",{id:t,x1:0,x2:0,y1:0,y2:1},r.map(((e,t)=>a.createElement("stop",{key:t,offset:t/(r.length-1),stopColor:e}))))),a.createElement("rect",{width:20,height:"100%",fill:`url(#${t})`}),a.createElement("svg",{x:28},n.map(((e,t)=>a.createElement("text",{key:t,className:I,y:8+14*t},e)))))},D=e=>(0,a.useMemo)((()=>`${e}-${Q()}`),[e]),Q=(()=>{let e=0;return()=>e++})(),V=(0,a.memo)(U);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const J=({props:e,layers:t})=>{const r=(0,a.useRef)(null),{mapboxApiAccessToken:n,mapStyle:o,mapOptions:s}=e,c=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["mapboxApiAccessToken","mapStyle","mapOptions"]),[u,m]=(0,a.useMemo)((()=>{const e=t.map(E.create);return[e.map((({layer:e})=>e)),e.map((({legend:e})=>e))]}),[t]),[p,d]=q();return a.createElement(a.Fragment,null,a.createElement(l.Z,F({ref:r},c,{layers:u,onHover:d}),n&&a.createElement(i.Z3,{mapboxApiAccessToken:n,mapStyle:o,mapOptions:s})),a.createElement(S,{info:p}),a.createElement(V,{layers:m}))},K=(0,a.memo)(J),q=()=>{const[e,t]=(0,a.useState)(null);return[e,(0,a.useCallback)((e=>{if(!e.picked||!(null==e?void 0:e.layer.props.tooltip))return t(null);t(e)}),[])]},X="_2sPQeMeL-ij2kf0vrKzer9",ee={name:"rdeck",type:"output",factory:(e,t,r)=>(e.classList.add(X),{renderValue({props:n,layers:l}){if(Array.isArray(n.initialBounds)){const e=new i.DW({width:t,height:r}),{longitude:a,latitude:o,zoom:l}=e.fitBounds([n.initialBounds.slice(0,2),n.initialBounds.slice(2,4)]);n.initialViewState=Object.assign({},n.initialViewState,{longitude:a,latitude:o,zoom:l})}o.render(a.createElement(K,{props:n,layers:l}),e)},resize(e,t){}})};HTMLWidgets.widget(ee);const te=ee,re="0.2.6"},6561:()=>{},9559:()=>{},5533:()=>{}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}return r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={472:0},t=[[3787,950,514,291,340,736]],n=()=>{};function a(){for(var n,a=0;a<t.length;a++){for(var o=t[a],i=!0,l=1;l<o.length;l++){var s=o[l];0!==e[s]&&(i=!1)}i&&(t.splice(a--,1),n=r(r.s=o[0]))}return 0===t.length&&(r.x(),r.x=()=>{}),n}r.x=()=>{r.x=()=>{},i=i.slice();for(var e=0;e<i.length;e++)o(i[e]);return(n=a)()};var o=a=>{for(var o,i,[s,c,u,m]=a,p=0,d=[];p<s.length;p++)i=s[p],r.o(e,i)&&e[i]&&d.push(e[i][0]),e[i]=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);for(u&&u(r),l(a);d.length;)d.shift()();return m&&t.push.apply(t,m),n()},i=globalThis.webpackChunkrdeck=globalThis.webpackChunkrdeck||[],l=i.push.bind(i);i.push=o})(),r.x()})()}));