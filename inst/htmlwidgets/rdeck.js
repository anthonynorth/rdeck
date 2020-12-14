!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.rdeck=t():e.rdeck=t()}(self,(function(){return(()=>{var e={9455:(e,t,r)=>{"use strict";r.r(t),r.d(t,{VERSION:()=>$,binding:()=>X});var n={};r.r(n),r.d(n,{AGGREGATION_OPERATION:()=>s.KM,ArcLayer:()=>l.zv,BitmapLayer:()=>l.hz,CPUGridLayer:()=>s.ab,ColumnLayer:()=>l.eJ,ContourLayer:()=>s.YY,GPUGridLayer:()=>s.ML,GeoJsonLayer:()=>l.UW,GreatCircleLayer:()=>i.GJ,GridCellLayer:()=>l.cJ,GridLayer:()=>s.mU,H3ClusterLayer:()=>i.cH,H3HexagonLayer:()=>i.bW,HeatmapLayer:()=>s.zP,HexagonLayer:()=>s.dX,IconLayer:()=>l.eE,LineLayer:()=>l.Ie,MVTLayer:()=>i.i3,PathLayer:()=>l.nr,PointCloudLayer:()=>l.U5,PolygonLayer:()=>l.dW,S2Layer:()=>i.jJ,ScatterplotLayer:()=>l.pU,ScenegraphLayer:()=>u.S,ScreenGridLayer:()=>s.p3,SimpleMeshLayer:()=>u.L,SolidPolygonLayer:()=>l.PJ,TerrainLayer:()=>i.tr,TextLayer:()=>l.AB,Tile3DLayer:()=>i.cY,TileLayer:()=>i.Im,TripsLayer:()=>i.Fw,_AggregationLayer:()=>s.Di,_BinSorter:()=>s.l0,_CPUAggregator:()=>s.oA,_GPUGridAggregator:()=>s.Wc,_MultiIconLayer:()=>l.vb});r(3948);var a=r(7294),o=r(3935),c=r(6042),l=(r(8559),r(7616)),s=r(6681),i=r(4527),u=r(1864);const p=[0,0,0,255];function m([e,t,r,n=255]){return"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(n/255,")")}function d(e,t){var r,n;return Array.isArray(e)?t||4!==e.length?((t=null!=(r=t)?r:[])[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=3===e.length?e[3]:255,t):e:"string"==typeof e?(function(e,t){if(7===e.length){const r=parseInt(e.substring(1),16);t[0]=Math.floor(r/65536),t[1]=Math.floor(r/256%256),t[2]=r%256,t[3]=255}else if(9===e.length){const r=parseInt(e.substring(1),16);t[0]=Math.floor(r/16777216),t[1]=Math.floor(r/65536%256),t[2]=Math.floor(r/256%256),t[3]=r%256}}(e,t=null!=(n=t)?n:[]),t):p}var y=r(1960),f=r(5128),g=r(3446),h=r(6297),b=r(7603),E=r(6602);function v(e){return null!==e&&"object"==typeof e&&"accessor"===e.type}function w(e,t){const r=function({col:e,dataType:t},r){if("highlightColor"===r)switch(t){case"table":return function(e){return({index:t,layer:r})=>d(r.props.data.frame[e][t])}(e);case"object":return function(e){return({object:t})=>d(t[e])}(e);case"geojson":return function(e){return({object:t})=>d(t.properties[e])}(e);default:throw TypeError("".concat(t," not supported"))}if(r.endsWith("Color"))switch(t){case"table":return function(e){return(t,{index:r,data:n,target:a})=>d(n.frame[e][r],a)}(e);case"object":return function(e){return(t,{target:r})=>d(t[e],r)}(e);case"geojson":return function(e){return(t,{target:r})=>d(t.properties[e],r)}(e);default:throw TypeError("".concat(t," not supported"))}switch(t){case"table":return function(e){return(t,{index:r,data:n})=>n.frame[e][r]}(e);case"object":return function(e){return t=>t[e]}(e);case"geojson":return function(e){return t=>t.properties[e]}(e);default:throw TypeError("".concat(t," not supported"))}}(e,t);return{...e,getData:r}}function k(e){return v(e)&&"scale"in e}function L(e,t){"palette"in e&&(e.range=e.palette.map((e=>d(e))),e.unknown=d(e.unknown));const r=function(e){switch(e.scale){case"linear":return(0,y.Z)().domain(e.domain).range(e.range).unknown(e.unknown).clamp(!0);case"power":return(0,f.ZP)().exponent(e.exponent).domain(e.domain).range(e.range).unknown(e.unknown).clamp(!0);case"log":return(0,g.Z)().base(e.base).domain(e.domain).range(e.range).unknown(e.unknown).clamp(!0);case"threshold":case"quantile":return(0,h.Z)().domain(e.domain).range(e.range).unknown(e.unknown);case"category":return(0,b.Z)().domain(e.domain).range(e.range).unknown(e.unknown);case"quantize":return(0,E.Z)().domain(e.domain).range(e.range).unknown(e.unknown);default:throw TypeError("scale ".concat(e.scale," not supported"))}}(e),n="highlightColor"===t?function({col:e,dataType:t},r){switch(t){case"table":return function(e,t){return({index:r,layer:n})=>{var a;return t(null!=(a=n.props.data.frame[e][r])?a:void 0)}}(e,r);case"object":return function(e,t){return({object:r})=>{var n;return t(null!=(n=r[e])?n:void 0)}}(e,r);case"geojson":return function(e,t){return({object:r})=>{var n;return t(null!=(n=r.properties[e])?n:void 0)}}(e,r);default:throw TypeError("".concat(t," not supported"))}}(e,r):function({col:e,dataType:t},r){switch(t){case"table":return function(e,t){return(r,{index:n,data:a})=>{var o;return t(null!=(o=a.frame[e][n])?o:void 0)}}(e,r);case"object":return function(e,t){return r=>{var n;return t(null!=(n=r[e])?n:void 0)}}(e,r);case"geojson":return function(e,t){return r=>{var n;return t(null!=(n=r.properties[e])?n:void 0)}}(e,r);default:throw TypeError("".concat(t," not supported"))}}(e,r);return{...e,name:t,getData:n,scaleData:r}}class x{constructor({type:e,...t}){this.layer=void 0,this.legend=void 0;const r=Object.entries(t),a=function(e){const t=e.filter(j).map((([e,t])=>[e,d(t)])),r=e.find((([e])=>"colorRange"===e));r&&t.push([r[0],r[1].map((e=>d(e)))]);return t}(r),o=function(e){return e.filter((([,e])=>v(e))).map((([e,t])=>[e,k(t)?L(t,e):w(t,e)]))}(r);if(this.layer=new n[e](Object.fromEntries([...r,...a,...o.map((([e,t])=>[e,t.getData]))])),"TextLayer"===e&&"fonts"in document){const e=t;document.fonts.load("16px ".concat(e.fontFamily))}const c=o.filter((([,e])=>k(e)&&e.legend)).map((([,e])=>e));this.legend={id:t.id,name:t.name,scales:c}}static create(e){return new x(e)}}function j([e,t]){return e.endsWith("Color")&&(Array.isArray(t)||"string"==typeof t)}var T=r(1322);const N="_3rdxBLth1N2ey-DR8zZS3k",M="_3a-qtBZofjlel3EyiZrLe0",_="_3L9Gh0vaiKQ5lmrBXb1Ppa",O="_4LWuEkar5BaPjDJypGFMM",S="_1SNUXvO9jR7Km5I-4zWVkl",P=({info:e})=>{if(null==e)return null;const{index:t,layer:r,x:n,y:o}=e,{name:c,tooltip:l}=r.props,s=function(e){switch(e){case"table":return(e,{index:t,data:r})=>{const n=Object.entries(r.frame).map((([e,r])=>[e,r[t]]));return Object.fromEntries(n)};case"object":return e=>e;case"geojson":return e=>e.properties;default:throw TypeError("".concat(e," not supported"))}}(l.dataType)(e.object,{index:t,data:r.props.data}),i=!0===l.cols?Object.keys(s):l.cols;return a.createElement("div",{className:N,style:{transform:"translate(".concat(n,"px, ").concat(o,"px)")}},a.createElement("div",{className:M},c),a.createElement("table",{className:_},a.createElement("tbody",null,i.map((e=>a.createElement("tr",{key:e},a.createElement("td",{className:O},e),a.createElement("td",{className:S},String(s[e]))))))))},C=(0,a.memo)(P);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function G({props:e,layers:t}){const r=(0,a.useRef)(null),[n,o]=Z(),{mapboxApiAccessToken:l,mapStyle:s,mapOptions:i,...u}=e;return a.createElement(T.Z,A({ref:r},u,{layers:t.map((e=>e.layer)),onHover:o}),l&&a.createElement(c.Z3,A({reuseMaps:!0},{mapboxApiAccessToken:l,mapStyle:s,mapOptions:i})),a.createElement(C,{info:n}))}const Z=()=>{const[e,t]=(0,a.useState)(null);return[e,(0,a.useCallback)((e=>{if(!e.picked||!e.layer.props.tooltip)return t(null);t(e)}),[])]};r(5306);const z={legend:"_19x6CEViDqIUJgmzMHUO_L",kepler:"kepler",light:"light",layer:"_1O5QPr7CiTBczYArgl3S--","layer-name":"_1_q1TQIZ88zoNRCuCezvNi",layerName:"_1_q1TQIZ88zoNRCuCezvNi",scale:"ePCUM6mslf2Y-i0jhVFMh","scale-name":"_3YhhTqYy3O5ALWcQDpz_EK",scaleName:"_3YhhTqYy3O5ALWcQDpz_EK","scale-by":"lMTfZcYbDODR5PTtyG7HK",scaleBy:"lMTfZcYbDODR5PTtyG7HK","color-scale":"_1mPi0Qw9KZYGIt5csk3PZh",colorScale:"_1mPi0Qw9KZYGIt5csk3PZh",tick:"UU3enfH0Fz4EvQztbQYag",line:"_8tiBQbbvJsBZ-JMiVr_n9"};function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const H=16;function I({layers:e}){return 0===e.length?null:a.createElement("div",{className:z.legend},e.map((e=>a.createElement(B,D({key:e.id},e)))))}function B({name:e,scales:t}){return 0===t.length?null:a.createElement("div",{className:z.layer},a.createElement("div",{className:z.layerName},e),t.map((e=>a.createElement(U,D({key:e.name},e)))))}function U(e){const t=e.name.replace(/^get/,"").replace(/([A-Z])/g," $1").toLowerCase();const r="palette"in e;const n=function(e){return"linear"===e.scale||"power"===e.scale||"log"===e.scale}(e),o=function(e){return"threshold"===e.scale||"quantile"===e.scale||"quantize"===e.scale}(e);return a.createElement("div",{className:z.scale},a.createElement("div",{className:z.scaleName},t),a.createElement("span",{className:z.scaleBy},"by "),a.createElement("span",{className:z.fieldName},e.col),r&&n&&a.createElement(Y,e),r&&o&&a.createElement(R,e),r&&"category"===e.scale&&a.createElement(W,e))}const Y=({range:e,ticks:t})=>{const r=q("gradient"),n=e.map(m),o=t.map(((e,t)=>t)).slice(1,-1),c=H*(t.length-1),l=c+10+1;return a.createElement("svg",{className:z.colorScale,height:l,shapeRendering:"crispEdges"},a.createElement("svg",{y:4},a.createElement("defs",null,a.createElement("linearGradient",{id:r,x1:0,x2:0,y1:0,y2:1},n.map(((e,t)=>a.createElement("stop",{key:t,offset:t/(n.length-1),stopColor:e}))))),a.createElement("rect",{width:20,height:c,fill:"url(#".concat(r,")")}),o.map((e=>a.createElement("line",{key:e,className:z.line,x2:20,y1:H*e,y2:H*e})))),a.createElement(Q,D({ticks:t},{y:-3})))},R=({ticks:e,range:t})=>{const r=t.map(m),n=H*(e.length-1)+10+1;return a.createElement("svg",{className:z.colorScale,height:n,shapeRendering:"crispEdges"},a.createElement("svg",{y:4},r.map(((e,t)=>a.createElement("rect",{key:t,width:20,height:H,y:t*H,fill:e})))),a.createElement(Q,D({ticks:e},{y:-3})))};function W({domain:e,range:t}){const r=t.map(m),n=H*e.length;return a.createElement("svg",{className:z.colorScale,height:n},a.createElement("svg",null,r.map(((e,t)=>a.createElement("rect",{key:t,width:20,height:14,y:1+t*H,fill:e})))),a.createElement(Q,{ticks:e}))}function Q({ticks:e,x:t=28,y:r=0}){return a.createElement("svg",{x:t,y:r},e.map(((e,t)=>a.createElement("text",{key:t,className:z.tick,y:H*t,dy:10},e))))}const q=e=>(0,a.useMemo)((()=>"".concat(e,"-").concat(J())),[e]),J=(()=>{let e=0;return()=>e++})(),K="rdeck";function V({props:e,layers:t,theme:r="kepler",width:n,height:o}){const{initialBounds:l,initialViewState:s,...i}=e,u=function(e,t,r,n){return(0,a.useMemo)((()=>{if(!Array.isArray(r))return n;const[a,o,l,s]=r,i=[[a,Math.max(o,-85)],[l,Math.min(s,85)]],u=t>0?t:e,p=new c.DW({width:e,height:u}),{longitude:m,latitude:d,zoom:y}=p.fitBounds(i);return{...n,longitude:m,latitude:d,zoom:y}}),[r,n,e,t])}(n,o,l,s),p=t.map(x.create),m="".concat(K," ").concat(r);return a.createElement("div",{className:m},a.createElement(G,{props:{...i,initialViewState:u},layers:p}),a.createElement(I,{layers:p.map((e=>e.legend))}))}const F={name:"rdeck",type:"output",factory(e,t,r){function n({props:n,layers:c,theme:l}){o.render(a.createElement(V,{props:n,layers:c,theme:l,width:t,height:r}),e)}return{renderValue({props:t,layers:r,theme:a}){n({props:t,layers:r,theme:a}),HTMLWidgets.shinyMode&&(Shiny.addCustomMessageHandler("".concat(e.id,":layer"),(e=>{r=function(e,t){const r=e.find((e=>e.id===t.id));if(!r)return[...e,t];return e.map((e=>e!==r?e:{...t,data:void 0!==t.data?t.data:r.data}))}(r,e),n({props:t,layers:r,theme:a})})),Shiny.addCustomMessageHandler("".concat(e.id,":map"),(e=>{t={...t,...e.props},a=e.theme,n({props:t,layers:r,theme:a})})))},resize(e,t){}}}};HTMLWidgets.widget(F);const X=F,$="0.3.0"},6561:()=>{},9559:()=>{},5533:()=>{}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}return r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={472:0},t=[[9455,950,514,291,340,637]],n=e=>{},a=(a,o)=>{for(var c,l,[s,i,u,p]=o,m=0,d=[];m<s.length;m++)l=s[m],r.o(e,l)&&e[l]&&d.push(e[l][0]),e[l]=0;for(c in i)r.o(i,c)&&(r.m[c]=i[c]);for(u&&u(r),a&&a(o);d.length;)d.shift()();return p&&t.push.apply(t,p),n()},o=self.webpackChunkrdeck=self.webpackChunkrdeck||[];function c(){for(var n,a=0;a<t.length;a++){for(var o=t[a],c=!0,l=1;l<o.length;l++){var s=o[l];0!==e[s]&&(c=!1)}c&&(t.splice(a--,1),n=r(r.s=o[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var l=r.x;r.x=()=>(r.x=l||(e=>{}),(n=c)())})(),r.x()})()}));