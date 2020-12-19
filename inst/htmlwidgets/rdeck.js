!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.rdeck=t():e.rdeck=t()}(self,(function(){return(()=>{var e={9455:(e,t,r)=>{"use strict";r.r(t),r.d(t,{VERSION:()=>ne,binding:()=>re});var n={};r.r(n),r.d(n,{AGGREGATION_OPERATION:()=>i.KM,ArcLayer:()=>l.zv,BitmapLayer:()=>l.hz,CPUGridLayer:()=>i.ab,ColumnLayer:()=>l.eJ,ContourLayer:()=>i.YY,GPUGridLayer:()=>i.ML,GeoJsonLayer:()=>l.UW,GreatCircleLayer:()=>s.GJ,GridCellLayer:()=>l.cJ,GridLayer:()=>i.mU,H3ClusterLayer:()=>s.cH,H3HexagonLayer:()=>s.bW,HeatmapLayer:()=>i.zP,HexagonLayer:()=>i.dX,IconLayer:()=>l.eE,LineLayer:()=>l.Ie,MVTLayer:()=>s.i3,PathLayer:()=>l.nr,PointCloudLayer:()=>l.U5,PolygonLayer:()=>l.dW,S2Layer:()=>s.jJ,ScatterplotLayer:()=>l.pU,ScenegraphLayer:()=>u.S,ScreenGridLayer:()=>i.p3,SimpleMeshLayer:()=>u.L,SolidPolygonLayer:()=>l.PJ,TerrainLayer:()=>s.tr,TextLayer:()=>l.AB,Tile3DLayer:()=>s.cY,TileLayer:()=>s.Im,TripsLayer:()=>s.Fw,_AggregationLayer:()=>i.Di,_BinSorter:()=>i.l0,_CPUAggregator:()=>i.oA,_GPUGridAggregator:()=>i.Wc,_MultiIconLayer:()=>l.vb});r(3948);var a=r(7294),o=r(3935),c=r(6042),l=(r(8559),r(7616)),i=r(6681),s=r(4527),u=r(1864);const p=[0,0,0,255];function d([e,t,r,n=255]){return"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(n/255,")")}function m(e,t){var r,n;return Array.isArray(e)?t||4!==e.length?((t=null!=(r=t)?r:[])[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=3===e.length?e[3]:255,t):e:"string"==typeof e?(function(e,t){if(7===e.length){const r=parseInt(e.substring(1),16);t[0]=Math.floor(r/65536),t[1]=Math.floor(r/256%256),t[2]=r%256,t[3]=255}else if(9===e.length){const r=parseInt(e.substring(1),16);t[0]=Math.floor(r/16777216),t[1]=Math.floor(r/65536%256),t[2]=Math.floor(r/256%256),t[3]=r%256}}(e,t=null!=(n=t)?n:[]),t):p}var y=r(1960),f=r(5128),h=r(3446),g=r(6297),b=r(7603),E=r(6602);function v(e){return null!==e&&"object"==typeof e&&"accessor"===e.type}function w(e,t){const r=function({col:e,dataType:t},r){if("highlightColor"===r)switch(t){case"table":return function(e){return({index:t,layer:r})=>m(r.props.data.frame[e][t])}(e);case"object":return function(e){return({object:t})=>m(t[e])}(e);case"geojson":return function(e){return({object:t})=>m(t.properties[e])}(e);default:throw TypeError("".concat(t," not supported"))}if(r.endsWith("Color"))switch(t){case"table":return function(e){return(t,{index:r,data:n,target:a})=>m(n.frame[e][r],a)}(e);case"object":return function(e){return(t,{target:r})=>m(t[e],r)}(e);case"geojson":return function(e){return(t,{target:r})=>m(t.properties[e],r)}(e);default:throw TypeError("".concat(t," not supported"))}switch(t){case"table":return function(e){return(t,{index:r,data:n})=>n.frame[e][r]}(e);case"object":return function(e){return t=>t[e]}(e);case"geojson":return function(e){return t=>t.properties[e]}(e);default:throw TypeError("".concat(t," not supported"))}}(e,t);return{...e,getData:r}}function k(e){return v(e)&&"scale"in e}function L(e,t){"palette"in e&&(e.range=e.palette.map((e=>m(e))),e.unknown=m(e.unknown));const r=function(e){switch(e.scale){case"linear":return(0,y.Z)().domain(e.domain).range(e.range).unknown(e.unknown).clamp(!0);case"power":return(0,f.ZP)().exponent(e.exponent).domain(e.domain).range(e.range).unknown(e.unknown).clamp(!0);case"log":return(0,h.Z)().base(e.base).domain(e.domain).range(e.range).unknown(e.unknown).clamp(!0);case"threshold":case"quantile":return(0,g.Z)().domain(e.domain).range(e.range).unknown(e.unknown);case"category":return(0,b.Z)().domain(e.domain).range(e.range).unknown(e.unknown);case"quantize":return(0,E.Z)().domain(e.domain).range(e.range).unknown(e.unknown);default:throw TypeError("scale ".concat(e.scale," not supported"))}}(e),n="highlightColor"===t?function({col:e,dataType:t},r){switch(t){case"table":return function(e,t){return({index:r,layer:n})=>{var a;return t(null!=(a=n.props.data.frame[e][r])?a:void 0)}}(e,r);case"object":return function(e,t){return({object:r})=>{var n;return t(null!=(n=r[e])?n:void 0)}}(e,r);case"geojson":return function(e,t){return({object:r})=>{var n;return t(null!=(n=r.properties[e])?n:void 0)}}(e,r);default:throw TypeError("".concat(t," not supported"))}}(e,r):function({col:e,dataType:t},r){switch(t){case"table":return function(e,t){return(r,{index:n,data:a})=>{var o;return t(null!=(o=a.frame[e][n])?o:void 0)}}(e,r);case"object":return function(e,t){return r=>{var n;return t(null!=(n=r[e])?n:void 0)}}(e,r);case"geojson":return function(e,t){return r=>{var n;return t(null!=(n=r.properties[e])?n:void 0)}}(e,r);default:throw TypeError("".concat(t," not supported"))}}(e,r);return{...e,name:t,getData:n,scaleData:r}}class x{constructor({type:e,...t}){this.type=void 0,this.props=void 0,this.scales=void 0;const r=Object.entries(t),n=function(e){const t=e.filter(j).map((([e,t])=>[e,m(t)])),r=e.find((([e])=>"colorRange"===e));r&&t.push([r[0],r[1].map((e=>m(e)))]);return t}(r),a=function(e){return e.filter((([,e])=>v(e))).map((([e,t])=>[e,k(t)?L(t,e):w(t,e)]))}(r);if(this.type=e,this.props=Object.fromEntries([...r,...n,...a.map((([e,t])=>[e,t.getData])),["updateTriggers",T(a)]]),this.scales=a.filter((([,e])=>k(e))).map((([,e])=>e)),"TextLayer"===e&&"fonts"in document){const e=t;document.fonts.load("16px ".concat(e.fontFamily))}}static create(e){return new x(e)}renderLayer(){return new n[this.type](this.props)}renderLegend(){const e=this.scales.filter((e=>e.legend));return{id:this.props.id,name:this.props.name,scales:e}}}function j([e,t]){return e.endsWith("Color")&&(Array.isArray(t)||"string"==typeof t)}function T(e){const t=e=>{const{getData:t,scaleData:r,palette:n,...a}=e;return a},r=e.map((([e,r])=>[e,t(r)]));return Object.fromEntries(r)}var M=r(7391),N=r(7590);const O="_3rdxBLth1N2ey-DR8zZS3k",S="_3a-qtBZofjlel3EyiZrLe0",_="_3L9Gh0vaiKQ5lmrBXb1Ppa",C="_4LWuEkar5BaPjDJypGFMM",P="_1SNUXvO9jR7Km5I-4zWVkl",A=({info:e})=>{if(null==e)return null;const{index:t,layer:r,x:n,y:o}=e,{name:c,tooltip:l}=r.props,i=function(e){switch(e){case"table":return(e,{index:t,data:r})=>{const n=Object.entries(r.frame).map((([e,r])=>[e,r[t]]));return Object.fromEntries(n)};case"object":return e=>e;case"geojson":return e=>e.properties;default:throw TypeError("".concat(e," not supported"))}}(l.dataType)(e.object,{index:t,data:r.props.data}),s=!0===l.cols?Object.keys(i):l.cols;return a.createElement("div",{className:O,style:{transform:"translate(".concat(n,"px, ").concat(o,"px)")}},a.createElement("div",{className:S},c),a.createElement("table",{className:_},a.createElement("tbody",null,s.map((e=>a.createElement("tr",{key:e},a.createElement("td",{className:C},e),a.createElement("td",{className:P},String(i[e]))))))))},Z=(0,a.memo)(A);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function z({props:e,layers:t}){const r=(0,a.useRef)(null),[n,o]=H(),{mapboxApiAccessToken:l,mapStyle:i,mapOptions:s,controller:u,...p}=e;return a.createElement(M.Z,G({ref:r},p,{layers:t,onHover:o}),i&&a.createElement(N.Z,{id:"map",controller:u,repeat:!0},a.createElement(c.Z3,G({reuseMaps:!0},{mapboxApiAccessToken:l,mapStyle:i,mapOptions:s}))),a.createElement(Z,{info:n}))}const H=()=>{const[e,t]=(0,a.useState)(null);return[e,(0,a.useCallback)((e=>{if(!e.picked||!e.layer.props.tooltip)return t(null);t(e)}),[])]};r(5306);function D(e){return e.clientHeight>0&&e.clientHeight>0?e:e.parentElement?D(e.parentElement):null}function I(e){const t=D(e);if(e===t||null==t)return[e.clientWidth,e.clientHeight];const{width:r,height:n}=getComputedStyle(e),a=document.createElement("div");Object.assign(a.style,{width:r,height:n,display:"hidden"}),t.appendChild(a);const o=[a.clientWidth,a.clientHeight];return t.removeChild(a),o}const W={legend:"_19x6CEViDqIUJgmzMHUO_L",kepler:"kepler",light:"light",layer:"_1O5QPr7CiTBczYArgl3S--","layer-name":"_1_q1TQIZ88zoNRCuCezvNi",layerName:"_1_q1TQIZ88zoNRCuCezvNi",scale:"ePCUM6mslf2Y-i0jhVFMh","scale-name":"_3YhhTqYy3O5ALWcQDpz_EK",scaleName:"_3YhhTqYy3O5ALWcQDpz_EK","scale-by":"lMTfZcYbDODR5PTtyG7HK",scaleBy:"lMTfZcYbDODR5PTtyG7HK","color-scale":"_1mPi0Qw9KZYGIt5csk3PZh",colorScale:"_1mPi0Qw9KZYGIt5csk3PZh",tick:"UU3enfH0Fz4EvQztbQYag",line:"_8tiBQbbvJsBZ-JMiVr_n9"};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const U=16;function Y({layers:e}){return 0===e.length?null:a.createElement("div",{className:W.legend},e.map((e=>a.createElement(R,B({key:e.id},e)))))}function R({name:e,scales:t}){return 0===t.length?null:a.createElement("div",{className:W.layer},a.createElement("div",{className:W.layerName},e),t.map((e=>a.createElement(Q,B({key:e.name},e)))))}function Q(e){const t=e.name.replace(/^get/,"").replace(/([A-Z])/g," $1").toLowerCase();const r="palette"in e;const n=function(e){return"linear"===e.scale||"power"===e.scale||"log"===e.scale}(e),o=function(e){return"threshold"===e.scale||"quantile"===e.scale||"quantize"===e.scale}(e);return a.createElement("div",{className:W.scale},a.createElement("div",{className:W.scaleName},t),a.createElement("span",{className:W.scaleBy},"by "),a.createElement("span",{className:W.fieldName},e.col),r&&n&&a.createElement(q,e),r&&o&&a.createElement(J,e),r&&"category"===e.scale&&a.createElement(K,e))}const q=({range:e,domain:t,ticks:r})=>{const n=F("gradient"),o=e.map(d),c=r.map(((e,t)=>t)).slice(1,-1),l=t[t.length-1]-t[0],i=U*(r.length-1),s=i+10+1;return a.createElement("svg",{className:W.colorScale,height:s,shapeRendering:"crispEdges"},a.createElement("svg",{y:5},a.createElement("defs",null,a.createElement("linearGradient",{id:n,x2:0,y2:1},o.map(((e,r)=>a.createElement("stop",{key:r,offset:t[r]/l,stopColor:e}))))),a.createElement("rect",{width:20,height:i,fill:"url(#".concat(n,")")}),c.map((e=>a.createElement("line",{key:e,className:W.line,x2:20,y1:U*e,y2:U*e})))),a.createElement(V,B({ticks:r},{y:-2})))},J=({ticks:e,range:t})=>{const r=t.map(d),n=U*(e.length-1)+10+1;return a.createElement("svg",{className:W.colorScale,height:n,shapeRendering:"crispEdges"},a.createElement("svg",{y:5},r.map(((e,t)=>a.createElement("rect",{key:t,width:20,height:U,y:t*U,fill:e})))),a.createElement(V,B({ticks:e},{y:-2})))};function K({ticks:e,range:t}){const r=t.map(d),n=U*e.length;return a.createElement("svg",{className:W.colorScale,height:n},a.createElement("svg",null,r.map(((e,t)=>a.createElement("rect",{key:t,width:20,height:14,y:1+t*U,fill:e})))),a.createElement(V,{ticks:e}))}function V({ticks:e,x:t=28,y:r=0}){return a.createElement("svg",{x:t,y:r},e.map(((e,t)=>a.createElement("text",{key:t,className:W.tick,y:U*t,dy:10},String(e)))))}const F=e=>(0,a.useMemo)((()=>"".concat(e,"-").concat(X())),[e]),X=(()=>{let e=0;return()=>e++})(),$="rdeck";function ee({props:e,layers:t,theme:r="kepler",width:n,height:o}){const{initialBounds:l,initialViewState:i,...s}=e,u=function(e,t,r,n){return(0,a.useMemo)((()=>{if(!Array.isArray(r))return n;const[a,o,l,i]=r,s=[[Math.max(-180,a),Math.max(o,-85.051129)],[Math.min(180,l),Math.min(i,85.051129)]],u=new c.DW({width:e,height:t}),{longitude:p,latitude:d,zoom:m}=u.fitBounds(s);return{...n,longitude:p,latitude:d,zoom:m}}),[r,n,e,t])}(n,o,l,i),p=t.map(x.create),d="".concat($," ").concat(r);return a.createElement("div",{className:d},a.createElement(z,{props:{...s,initialViewState:u},layers:p.map((e=>e.renderLayer()))}),a.createElement(Y,{layers:p.reverse().map((e=>e.renderLegend()))}))}const te={name:"rdeck",type:"output",factory(e,t,r){function n({props:n,layers:c,theme:l}){o.render(a.createElement(ee,{props:n,layers:c,theme:l,width:t,height:r}),e)}return 0!==t&&0!==r||([t,r]=I(e)),{renderValue({props:t,layers:r,theme:a}){n({props:t,layers:r,theme:a}),HTMLWidgets.shinyMode&&(Shiny.addCustomMessageHandler("".concat(e.id,":layer"),(e=>{r=function(e,t){const r=e.find((e=>e.id===t.id));if(!r)return[...e,t];return e.map((e=>{var n;return e!==r?e:{...t,data:null!=(n=t.data)?n:r.data}}))}(r,e),n({props:t,layers:r,theme:a})})),Shiny.addCustomMessageHandler("".concat(e.id,":deck"),(e=>{t={...t,...e.props},a=e.theme,n({props:t,layers:r,theme:a})})))},resize(e,t){}}}};HTMLWidgets.widget(te);const re=te,ne="0.3.0"},6561:()=>{},9559:()=>{},5533:()=>{}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}return r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={472:0},t=[[9455,950,514,291,340,637]],n=e=>{},a=(a,o)=>{for(var c,l,[i,s,u,p]=o,d=0,m=[];d<i.length;d++)l=i[d],r.o(e,l)&&e[l]&&m.push(e[l][0]),e[l]=0;for(c in s)r.o(s,c)&&(r.m[c]=s[c]);for(u&&u(r),a&&a(o);m.length;)m.shift()();return p&&t.push.apply(t,p),n()},o=self.webpackChunkrdeck=self.webpackChunkrdeck||[];function c(){for(var n,a=0;a<t.length;a++){for(var o=t[a],c=!0,l=1;l<o.length;l++){var i=o[l];0!==e[i]&&(c=!1)}c&&(t.splice(a--,1),n=r(r.s=o[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var l=r.x;r.x=()=>(r.x=l||(e=>{}),(n=c)())})(),r.x()})()}));