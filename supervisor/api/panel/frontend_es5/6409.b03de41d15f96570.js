"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["6409"],{43537:function(t,e,i){i.d(e,{Z:()=>a});const n=t=>t<10?`0${t}`:t;function a(t){const e=Math.floor(t/3600),i=Math.floor(t%3600/60),a=Math.floor(t%3600%60);return e>0?`${e}:${n(i)}:${n(a)}`:i>0?`${i}:${n(a)}`:a>0?""+a:null}},84428:function(t,e,i){i.d(e,{rv:()=>r,eF:()=>a,mK:()=>s});i(19423),i(9359),i(70104);var n=i(43537);const a=(t,e)=>t.callWS(Object.assign({type:"timer/create"},e)),s=t=>{if(!t.attributes.remaining)return;let e=function(t){const e=t.split(":").map(Number);return 3600*e[0]+60*e[1]+e[2]}(t.attributes.remaining);if("active"===t.state){const i=(new Date).getTime(),n=new Date(t.attributes.finishes_at).getTime();e=Math.max((n-i)/1e3,0)}return e},r=(t,e,i)=>{if(!e)return null;if("idle"===e.state||0===i)return t.formatEntityState(e);let a=(0,n.Z)(i||0)||"0";return"paused"===e.state&&(a=`${a} (${t.formatEntityState(e)})`),a}},52478:function(t,e,i){i.r(e);var n=i(73577),a=i(72621),s=(i(71695),i(47021),i(57243)),r=i(50778),l=i(84428);(0,n.Z)([(0,r.Mo)("ha-timer-remaining-time")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"timeRemaining",value:void 0},{kind:"field",key:"_updateRemaining",value:void 0},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(t){var e;(0,a.Z)(i,"update",this,3)([t]),this.innerHTML=null!==(e=(0,l.rv)(this.hass,this.stateObj,this.timeRemaining))&&void 0!==e?e:"-"}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(i,"connectedCallback",this,3)([]),this.stateObj&&this._startInterval(this.stateObj)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(i,"disconnectedCallback",this,3)([]),this._clearInterval()}},{kind:"method",key:"willUpdate",value:function(t){(0,a.Z)(i,"willUpdate",this,3)([t]),t.has("stateObj")&&this._startInterval(this.stateObj)}},{kind:"method",key:"_clearInterval",value:function(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=null)}},{kind:"method",key:"_startInterval",value:function(t){this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._updateRemaining=setInterval((()=>this._calculateRemaining(this.stateObj)),1e3))}},{kind:"method",key:"_calculateRemaining",value:function(t){this.timeRemaining=(0,l.mK)(t)}}]}}),s.fl)}}]);
//# sourceMappingURL=6409.b03de41d15f96570.js.map