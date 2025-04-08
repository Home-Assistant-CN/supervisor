"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["4347"],{49976:function(e,t,o){o.d(t,{U:()=>r});const r=e=>e.stopPropagation()},68325:function(e,t,o){var r=o(73577),i=o(72621),d=(o(52247),o(71695),o(92745),o(40251),o(11740),o(13334),o(47021),o(57243)),a=o(50778),n=o(27486),s=o(36522),l=o(49976);let h,c=e=>e;const u={key:"Mod-s",run:e=>((0,s.B)(e.dom,"editor-save"),!0)},m=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};(0,r.Z)([(0,a.Mo)("ha-code-editor")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"mode",value(){return"yaml"}},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"autofocus",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({attribute:"read-only",type:Boolean})],key:"readOnly",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"linewrap",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"error",value(){return!1}},{kind:"field",decorators:[(0,a.SB)()],key:"_value",value(){return""}},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,i.Z)(r,"connectedCallback",this,3)([]),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",l.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,i.Z)(r,"disconnectedCallback",this,3)([]),this.removeEventListener("keydown",l.U),this.updateComplete.then((()=>{this.codemirror.destroy(),delete this.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:async function(){var e;null!==(e=this._loadedCodeMirror)&&void 0!==e||(this._loadedCodeMirror=await Promise.all([o.e("9525"),o.e("2439"),o.e("6153")]).then(o.bind(o,2765))),(0,i.Z)(r,"scheduleUpdate",this,3)([])}},{kind:"method",key:"update",value:function(e){if((0,i.Z)(r,"update",this,3)([e]),!this.codemirror)return void this._createCodeMirror();const t=[];e.has("mode")&&t.push({effects:[this._loadedCodeMirror.langCompartment.reconfigure(this._mode),this._loadedCodeMirror.foldingCompartment.reconfigure(this._getFoldingExtensions())]}),e.has("readOnly")&&t.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("linewrap")&&t.push({effects:this._loadedCodeMirror.linewrapCompartment.reconfigure(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[])}),e.has("_value")&&this._value!==this.value&&t.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),t.length>0&&this.codemirror.dispatch(...t),e.has("error")&&this.classList.toggle("error-state",this.error)}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.indentationMarkers({thickness:0,activeThickness:1,colors:{activeLight:"var(--secondary-text-color)",activeDark:"var(--secondary-text-color)"}}),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,u]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.linewrapCompartment.of(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[]),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate),this._loadedCodeMirror.foldingCompartment.of(this._getFoldingExtensions())];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value(){return(0,n.Z)((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))}},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=this._getStates(this.hass.states);return o&&o.length?{from:Number(t.from),options:o,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=[],this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:m})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=await this._getIconItems();return{from:Number(t.from),options:o,validFor:/^mdi:\S*$/}}},{kind:"field",key:"_onUpdate",value(){return e=>{e.docChanged&&(this._value=e.state.doc.toString(),(0,s.B)(this,"value-changed",{value:this._value}))}}},{kind:"field",key:"_getFoldingExtensions",value(){return()=>"yaml"===this.mode?[this._loadedCodeMirror.foldGutter(),this._loadedCodeMirror.foldingOnIndent]:[]}},{kind:"field",static:!0,key:"styles",value(){return(0,d.iv)(h||(h=c`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`))}}]}}),d.fl)},34363:function(e,t,o){var r=o(73577),i=(o(71695),o(47021),o(57243)),d=o(50778);let a,n,s=e=>e;(0,r.Z)([(0,d.Mo)("ha-input-helper-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return(0,i.dy)(a||(a=s`<slot></slot>`))}},{kind:"field",static:!0,key:"styles",value(){return(0,i.iv)(n||(n=s`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px;padding-inline-start:16px;padding-inline-end:16px}`))}}]}}),i.oi)},12234:function(e,t,o){o.r(t),o.d(t,{HaTemplateSelector:()=>f});var r=o(73577),i=(o(19083),o(71695),o(61006),o(47021),o(57243)),d=o(50778),a=o(36522),n=o(73192);o(68325),o(34363),o(99426);let s,l,h,c,u,m=e=>e;const p=["template:","sensor:","state:","trigger: template"];let f=(0,r.Z)([(0,d.Mo)("ha-selector-template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value(){return!0}},{kind:"field",decorators:[(0,d.SB)()],key:"warn",value(){}},{kind:"method",key:"render",value:function(){return(0,i.dy)(s||(s=m` ${0} ${0} <ha-code-editor mode="jinja2" .hass="${0}" .value="${0}" .readOnly="${0}" autofocus autocomplete-entities autocomplete-icons @value-changed="${0}" dir="ltr" linewrap></ha-code-editor> ${0} `),this.warn?(0,i.dy)(l||(l=m`<ha-alert alert-type="warning">${0} <br> <a target="_blank" rel="noopener noreferrer" href="${0}">${0}</a></ha-alert>`),this.hass.localize("ui.components.selectors.template.yaml_warning",{string:this.warn}),(0,n.R)(this.hass,"/docs/configuration/templating/"),this.hass.localize("ui.components.selectors.template.learn_more")):i.Ld,this.label?(0,i.dy)(h||(h=m`<p>${0}${0}</p>`),this.label,this.required?"*":""):i.Ld,this.hass,this.value,this.disabled,this._handleChange,this.helper?(0,i.dy)(c||(c=m`<ha-input-helper-text>${0}</ha-input-helper-text>`),this.helper):i.Ld)}},{kind:"method",key:"_handleChange",value:function(e){const t=e.target.value;this.value!==t&&(this.warn=p.find((e=>t.includes(e))),(0,a.B)(this,"value-changed",{value:t}))}},{kind:"field",static:!0,key:"styles",value(){return(0,i.iv)(u||(u=m`p{margin-top:0}`))}}]}}),i.oi)},73192:function(e,t,o){o.d(t,{R:()=>r});o(19083),o(61006);const r=(e,t)=>`https://${e.config.version.includes("b")?"rc":e.config.version.includes("dev")?"next":"www"}.home-assistant.io${t}`}}]);
//# sourceMappingURL=4347.b30c7914e16094c0.js.map