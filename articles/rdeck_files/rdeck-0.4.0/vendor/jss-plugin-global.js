(self.webpackChunkrdeck=self.webpackChunkrdeck||[]).push([[261],{5019:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var r=s(2122),n=s(4013),i="@global",o="@global ",u=function(){function t(t,e,s){for(var o in this.type="global",this.at=i,this.rules=void 0,this.options=void 0,this.key=void 0,this.isProcessed=!1,this.key=t,this.options=s,this.rules=new n.RB((0,r.Z)({},s,{parent:this})),e)this.rules.add(o,e[o]);this.rules.process()}var e=t.prototype;return e.getRule=function(t){return this.rules.get(t)},e.addRule=function(t,e,s){var r=this.rules.add(t,e,s);return r&&this.options.jss.plugins.onProcessRule(r),r},e.indexOf=function(t){return this.rules.indexOf(t)},e.toString=function(){return this.rules.toString()},t}(),l=function(){function t(t,e,s){this.type="global",this.at=i,this.options=void 0,this.rule=void 0,this.isProcessed=!1,this.key=void 0,this.key=t,this.options=s;var n=t.substr(o.length);this.rule=s.jss.createRule(n,e,(0,r.Z)({},s,{parent:this}))}return t.prototype.toString=function(t){return this.rule?this.rule.toString(t):""},t}(),h=/\s*,\s*/g;function a(t,e){for(var s=t.split(h),r="",n=0;n<s.length;n++)r+=e+" "+s[n].trim(),s[n+1]&&(r+=", ");return r}const c=function(){return{onCreateRule:function(t,e,s){if(!t)return null;if(t===i)return new u(t,e,s);if("@"===t[0]&&t.substr(0,o.length)===o)return new l(t,e,s);var r=s.parent;return r&&("global"===r.type||r.options.parent&&"global"===r.options.parent.type)&&(s.scoped=!1),!1===s.scoped&&(s.selector=t),null},onProcessRule:function(t,e){"style"===t.type&&e&&(function(t,e){var s=t.options,n=t.style,o=n?n[i]:null;if(o){for(var u in o)e.addRule(u,o[u],(0,r.Z)({},s,{selector:a(u,t.selector)}));delete n[i]}}(t,e),function(t,e){var s=t.options,n=t.style;for(var o in n)if("@"===o[0]&&o.substr(0,i.length)===i){var u=a(o.substr(i.length),t.selector);e.addRule(u,n[o],(0,r.Z)({},s,{selector:u})),delete n[o]}}(t,e))}}}}}]);