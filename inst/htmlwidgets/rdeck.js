!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.rdeck=t():e.rdeck=t()}(window,(function(){return function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonprdeck=window.webpackJsonprdeck||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;return o.push([288,1]),n()}({146:function(e,t){},214:function(e,t,n){e.exports={rdeck:"_1cs5PYislJIo68n1tgI17r"}},264:function(e,t){},288:function(e,t,n){"use strict";n.r(t),n.d(t,"VERSION",(function(){return z})),n.d(t,"binding",(function(){return R}));var r={};n.r(r),n.d(r,"ArcLayer",(function(){return u.a})),n.d(r,"BitmapLayer",(function(){return u.b})),n.d(r,"IconLayer",(function(){return u.f})),n.d(r,"LineLayer",(function(){return u.g})),n.d(r,"PointCloudLayer",(function(){return u.i})),n.d(r,"ScatterplotLayer",(function(){return u.k})),n.d(r,"ColumnLayer",(function(){return u.c})),n.d(r,"GridCellLayer",(function(){return u.e})),n.d(r,"PathLayer",(function(){return u.h})),n.d(r,"PolygonLayer",(function(){return u.j})),n.d(r,"GeoJsonLayer",(function(){return u.d})),n.d(r,"TextLayer",(function(){return u.m})),n.d(r,"SolidPolygonLayer",(function(){return u.l})),n.d(r,"_MultiIconLayer",(function(){return u.n})),n.d(r,"ScreenGridLayer",(function(){return d.h})),n.d(r,"CPUGridLayer",(function(){return d.b})),n.d(r,"HexagonLayer",(function(){return d.g})),n.d(r,"ContourLayer",(function(){return d.c})),n.d(r,"GridLayer",(function(){return d.e})),n.d(r,"GPUGridLayer",(function(){return d.d})),n.d(r,"AGGREGATION_OPERATION",(function(){return d.a})),n.d(r,"HeatmapLayer",(function(){return d.f})),n.d(r,"_GPUGridAggregator",(function(){return d.l})),n.d(r,"_CPUAggregator",(function(){return d.k})),n.d(r,"_AggregationLayer",(function(){return d.i})),n.d(r,"_BinSorter",(function(){return d.j})),n.d(r,"GreatCircleLayer",(function(){return f.a})),n.d(r,"S2Layer",(function(){return f.e})),n.d(r,"TileLayer",(function(){return f.h})),n.d(r,"TripsLayer",(function(){return f.i})),n.d(r,"H3ClusterLayer",(function(){return f.b})),n.d(r,"H3HexagonLayer",(function(){return f.c})),n.d(r,"Tile3DLayer",(function(){return f.g})),n.d(r,"TerrainLayer",(function(){return f.f})),n.d(r,"MVTLayer",(function(){return f.d})),n.d(r,"SimpleMeshLayer",(function(){return p.b})),n.d(r,"ScenegraphLayer",(function(){return p.a}));var a=n(3),o=n.n(a),i=n(202),c=n.n(i),l=n(123),s=(n(106),n(306)),u=(n(255),n(35)),d=n(193),f=n(192),p=n(113);n(271),n(191);function m([e,t,n,r=255]){return"rgba(".concat(e,", ").concat(t,", ").concat(n,", ").concat(r/255,")")}function y(e,t,n=0){return Array.isArray(e)||ArrayBuffer.isView(e)?t||4!==e.length?((t=t||[])[n+0]=e[0],t[n+1]=e[1],t[n+2]=e[2],t[n+3]=4===e.length?e[3]:255,t):e:"string"==typeof e?(function(e,t,n){if(7===e.length){const r=parseInt(e.substring(1),16);t[n+0]=Math.floor(r/65536),t[n+1]=Math.floor(r/256%256),t[n+2]=r%256,t[n+3]=255}else if(9===e.length){const r=parseInt(e.substring(1),16);t[n+0]=Math.floor(r/16777216),t[n+1]=Math.floor(r/65536%256),t[n+2]=Math.floor(r/256%256),t[n+3]=r%256}}(e,t=t||[],n),t):[0,0,0,255]}var g=n(90);class h{constructor({type:e,name:t,value:n,data:r,domain:a,range:o,exponent:i,base:c,legend:l}){this.type=void 0,this.name=void 0,this.value=void 0,this.field=void 0,this.data=void 0,this.scale=void 0,this.legend=void 0,this.type=e,this.name=t,this.field=n,this.data=r,this.legend=l,this.scale=function({type:e,domain:t,range:n,exponent:r,base:a}){switch(e){case"linear":return Object(g.a)().domain(t).range(n);case"power":return Object(g.c)().domain(t).range(n).exponent(r);case"log":return Object(g.b)().domain(t).range(n).base(a);case"quantize":return Object(g.e)().domain(t).range(n);case"quantile":return Object(g.d)().domain(t).range(n);default:throw TypeError("scale type: ".concat(e," not supported"))}}({type:e,domain:null!=a?a:r,range:o,exponent:i,base:c}),this.value=function(e,t){return(n,{index:r})=>e(t[r])}(this.scale,r)}get isContinuous(){return"interpolate"in this.scale}}const b={getHexagon:(e,{index:t,data:n})=>n.frame.hexagon[t],getHexagons:(e,{index:t,data:n})=>n.frame.hexagons[t],getS2Token:(e,{index:t,data:n})=>n.frame.token[t],getIcon:(e,{index:t,data:n})=>n.frame.icon[t],getText:(e,{index:t,data:n})=>n.frame.text[t],getPath:(e,{index:t,data:n})=>n.frame.path[t],getPolygon:(e,{index:t,data:n})=>n.frame.polygon[t],getPosition:(e,{index:t,data:n})=>n.frame.position[t],getSourcePosition:(e,{index:t,data:n})=>n.frame.source_position[t],getTargetPosition:(e,{index:t,data:n})=>n.frame.target_position[t]};class x{constructor(e){let{type:t}=e,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["type"]);this.layer=void 0,this.legend=void 0;const a=function(e){const t=Object.entries(e).filter(([e,t])=>v(e)).map(([e,t])=>[e,y(t)]);"colorRange"in e&&t.push(["colorRange",e.colorRange.map(e=>y(e))]);return Object.fromEntries(t)}(n),o=function(e){const t=e=>function(e){return null!=e&&"object"==typeof e&&!Array.isArray(e)}(e)&&"type"in e;return Object.entries(e).filter(([e,n])=>function(e){return/(Radius|Elevation|Color)$/.test(e)}(e)&&t(n)).map(([t,n])=>{let r=n.range;return v(t)&&(r=r.map(e=>y(e))),new h(Object.assign({},n,{range:r,name:t,data:O(e.data,n.value)}))})}(n),i=Object.fromEntries(o.map(({name:e,value:t})=>[e,t]));this.layer=new r[t](Object.assign({},b,{},n,{},a,{},i)),this.legend={name:n.id||t,scales:o.filter(e=>e.legend)}}static create(e){return new x(e)}}function v(e){return e.endsWith("Color")}function O(e,t){if(Array.isArray(e)&&0===e.length)return[];if("frame"in e)return e.frame[t];if("type"in e){const n=e=>{var n;return null==(n=e.properties)?void 0:n[t]};switch(e.type){case"Feature":return n(e);case"FeatureCollection":return e.features.map(n)}}throw TypeError("data type not suppported")}n(287);var j=n(89),E=n.n(j);var k=Object(a.memo)(({info:e})=>{if(null==e)return null;const{index:t,layer:n,x:r,y:a}=e,{id:i,tooltip:c,data:l}=n.props,s=null==e.object,u=s?l.frame:e.object,d=s?e=>u[e][t]:e=>u[e],f="boolean"==typeof c?Object.keys(u):[c].flat();return o.a.createElement("div",{className:E.a.tooltip,style:{transform:"translate(".concat(r,"px, ").concat(a,"px)")}},o.a.createElement("div",{className:E.a.layerName},i),o.a.createElement("table",{className:E.a.table},o.a.createElement("tbody",null,f.map(e=>o.a.createElement("tr",{key:e},o.a.createElement("td",{className:E.a.fieldName},e),o.a.createElement("td",{className:E.a.fieldValue},String(d(e))))))))}),N=n(40),L=n.n(N);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const w=({name:e,scales:t})=>0===t.length?null:o.a.createElement("div",{className:L.a.layer},o.a.createElement("div",{className:L.a.layerName},e),t.map(e=>o.a.createElement(S,_({key:e.name},e,{isContinuous:e.isContinuous})))),S=({name:e,field:t,scale:n,isContinuous:r})=>{const a=e.replace(/^get/,"").replace(/([A-Z])/g," $1").toLowerCase();const i=/color$/i.test(e);return o.a.createElement("div",{className:L.a.scale},o.a.createElement("div",{className:L.a.scaleName},a),o.a.createElement("span",{className:L.a.scaleBy},"by "),o.a.createElement("span",{className:L.a.fieldName},t),i&&!r&&o.a.createElement(P,{scale:n}),i&&r&&o.a.createElement(A,{scale:n}))},P=({scale:e})=>{const t=Object(a.useMemo)(()=>"ticks"in e?e.ticks(6).map(t=>[m(e(t)),t]):[],[e]),n=10+14*(t.length-1);return o.a.createElement("svg",{className:L.a.colorScale,height:n},t.map(([e,t],n)=>o.a.createElement("svg",{key:t,y:14*n},o.a.createElement("rect",{width:20,height:10,fill:e}),o.a.createElement("text",{className:L.a.tick,x:28,y:8},t))))},A=({scale:e})=>{const t=G("gradient"),n=Object(a.useMemo)(()=>e.ticks(6).map(t=>m(e(t))),[e]),r=Object(a.useMemo)(()=>e.ticks(6),[e]),i=10+14*(n.length-1);return o.a.createElement("svg",{className:L.a.colorScale,height:i,width:"100%"},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:t,x1:0,x2:0,y1:0,y2:1},n.map((e,t)=>o.a.createElement("stop",{key:t,offset:t/(n.length-1),stopColor:e})))),o.a.createElement("rect",{width:20,height:"100%",fill:"url(#".concat(t,")")}),o.a.createElement("svg",{x:28},r.map((e,t)=>o.a.createElement("text",{key:t,className:L.a.tick,y:8+14*t},e))))},G=e=>Object(a.useMemo)(()=>"".concat(e,"-").concat(T()),[e]),T=(()=>{let e=0;return()=>e++})();var C=Object(a.memo)(({layers:e})=>0===e.length?null:o.a.createElement("div",{className:L.a.legend},e.map(e=>o.a.createElement(w,_({key:e.name},e)))));function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=Object(a.memo)(({props:e,layers:t})=>{const n=Object(a.useRef)(null),{mapboxApiAccessToken:r,mapStyle:i,mapOptions:c}=e,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["mapboxApiAccessToken","mapStyle","mapOptions"]),[d,f]=Object(a.useMemo)(()=>{const e=t.map(x.create);return[e.map(({layer:e})=>e),e.map(({legend:e})=>e)]},[t]),[p,m]=I();return o.a.createElement(a.Fragment,null,o.a.createElement(s.a,H({ref:n},u,{layers:d,onHover:m}),r&&o.a.createElement(l.a,{mapboxApiAccessToken:r,mapStyle:i,mapOptions:c})),o.a.createElement(k,{info:p}),o.a.createElement(C,{layers:f}))});const I=()=>{const[e,t]=Object(a.useState)(null);return[e,Object(a.useCallback)(e=>{if(!e.picked||!(null==e?void 0:e.layer.props.tooltip))return t(null);t(e)},[])]};var V=n(214),B=n.n(V);const F={name:"rdeck",type:"output",factory:(e,t,n)=>(e.classList.add(B.a.rdeck),{renderValue({props:r,layers:a}){if(Array.isArray(r.initialBounds)){const e=new l.b({width:t,height:n}),{longitude:a,latitude:o,zoom:i}=e.fitBounds([r.initialBounds.slice(0,2),r.initialBounds.slice(2,4)]);r.initialViewState=Object.assign({},r.initialViewState,{longitude:a,latitude:o,zoom:i})}c.a.render(o.a.createElement(M,{props:r,layers:a}),e)},resize(e,t){}})};HTMLWidgets.widget(F);var R=F;const z="0.2.3"},40:function(e,t,n){e.exports={legend:"_2GRwBFaZmS_r1QuTD40QTb",layer:"_2H616QgG84oJauALO4hHO9","layer-name":"_3jgOYHCNA8IXEGF-GcZfp1",layerName:"_3jgOYHCNA8IXEGF-GcZfp1",scale:"_3l1IrsNNlxgYFax5dgTxAW","scale-by":"_3WPf7mzaFF4kbhkWYxmKTy",scaleBy:"_3WPf7mzaFF4kbhkWYxmKTy","scale-name":"_2wJ0XatdYfxrDgpJ3eV93G",scaleName:"_2wJ0XatdYfxrDgpJ3eV93G","field-name":"_2rWI9appKk7uHlxFw2TCK2",fieldName:"_2rWI9appKk7uHlxFw2TCK2","color-scale":"_1SoB7VpHzrDYFxQD3QVa6E",colorScale:"_1SoB7VpHzrDYFxQD3QVa6E",tick:"YlPgLSlsk4JxXl1kumg6t"}},89:function(e,t,n){e.exports={tooltip:"_1o3vLW7Ljnp1RYgitRVcV7","layer-name":"_1EGHd-czbrt1MnwOIQDNjU",layerName:"_1EGHd-czbrt1MnwOIQDNjU",table:"_3xgUIUb5a3-Pb19yZND7SX","field-name":"_3V8HBKlx4eOkgGRNmc3Xmy",fieldName:"_3V8HBKlx4eOkgGRNmc3Xmy","field-value":"_2aerz5p_BktfQNNtqjZWXo",fieldValue:"_2aerz5p_BktfQNNtqjZWXo"}}})}));