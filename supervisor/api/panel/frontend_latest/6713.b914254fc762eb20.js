export const ids=["6713"];export const modules={75011:function(e,i,t){t.d(i,{I:function(){return s},k:function(){return a}});t(92519),t(42179),t(89256),t(24931),t(88463),t(57449),t(19814);const a=new Set(["primary","accent","disabled","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white"]);function s(e){return a.has(e)?`var(--${e}-color)`:e}},22381:function(e,i,t){t.d(i,{D:function(){return a}});const a=(e,i,t=!1)=>{let a;const s=(...s)=>{const l=t&&!a;clearTimeout(a),a=window.setTimeout((()=>{a=void 0,t||e(...s)}),i),l&&e(...s)};return s.cancel=()=>{clearTimeout(a)},s}},96708:function(e,i,t){var a=t("44249"),s=(t("39527"),t("99790"),t("41360"),t("13334"),t("57243")),l=t("50778"),o=t("91583"),d=t("27486"),n=t("75011"),r=t("36522"),c=t("1416"),u=t("63860"),h=t("6736");const b=()=>Promise.all([t.e("513"),t.e("7983"),t.e("7019"),t.e("140")]).then(t.bind(t,96566)),v=(e,i)=>{(0,r.B)(e,"show-dialog",{dialogTag:"dialog-label-detail",dialogImport:b,dialogParams:i})};t("74666"),t("18756"),t("92519"),t("42179"),t("89256"),t("24931"),t("88463"),t("57449"),t("19814"),t("92181"),t("67670"),t("36993");var k=t("35359"),_=t("73850"),f=t("83377"),y=t("46329");t("94279"),t("23043"),t("7285"),t("37583");const p="___ADD_NEW___",m="___NO_LABELS___",g="___ADD_NEW_SUGGESTION___",C=e=>s.dy`<ha-list-item graphic="icon" class="${(0,k.$)({"add-new":e.label_id===p})}"> ${e.icon?s.dy`<ha-icon slot="graphic" .icon="${e.icon}"></ha-icon>`:s.Ld} ${e.name} </ha-list-item>`;(0,a.Z)([(0,l.Mo)("ha-label-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Array,attribute:"exclude-label"})],key:"excludeLabels",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_labels",value:void 0},{kind:"field",decorators:[(0,l.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"method",key:"open",value:async function(){await this.updateComplete,await(this.comboBox?.open())}},{kind:"method",key:"focus",value:async function(){await this.updateComplete,await(this.comboBox?.focus())}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,u.f4)(this.hass.connection,(e=>{this._labels=e}))]}},{kind:"field",key:"_getLabels",value(){return(0,d.Z)(((e,i,t,a,s,l,o,d,n,r,c)=>{let u,h,b={};(s||l||o||d||n)&&(b=(0,y.R6)(a),u=t,h=a.filter((e=>e.labels.length>0)),s&&(u=u.filter((e=>{const i=b[e.id];return!(!i||!i.length)&&b[e.id].some((e=>s.includes((0,_.M)(e.entity_id))))})),h=h.filter((e=>s.includes((0,_.M)(e.entity_id))))),l&&(u=u.filter((e=>{const i=b[e.id];return!i||!i.length||a.every((e=>!l.includes((0,_.M)(e.entity_id))))})),h=h.filter((e=>!l.includes((0,_.M)(e.entity_id))))),o&&(u=u.filter((e=>{const i=b[e.id];return!(!i||!i.length)&&b[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&o.includes(i.attributes.device_class))}))})),h=h.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&o.includes(i.attributes.device_class)}))),d&&(u=u.filter((e=>d(e)))),n&&(u=u.filter((e=>{const i=b[e.id];return!(!i||!i.length)&&b[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))})),h=h.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))));let v=e;const k=new Set;let f;return u&&(f=u.filter((e=>e.area_id)).map((e=>e.area_id)),u.forEach((e=>{e.labels.forEach((e=>k.add(e)))}))),h&&(f=(f??[]).concat(h.filter((e=>e.area_id)).map((e=>e.area_id))),h.forEach((e=>{e.labels.forEach((e=>k.add(e)))}))),f&&f.forEach((e=>{i[e].labels.forEach((e=>k.add(e)))})),c&&(v=v.filter((e=>!c.includes(e.label_id)))),(u||h)&&(v=v.filter((e=>k.has(e.label_id)))),v.length||(v=[{label_id:m,name:this.hass.localize("ui.components.label-picker.no_match"),icon:null,color:null,description:null,created_at:0,modified_at:0}]),r?v:[...v,{label_id:p,name:this.hass.localize("ui.components.label-picker.add_new"),icon:"mdi:plus",color:null,description:null,created_at:0,modified_at:0}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass&&this._labels||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getLabels(this._labels,this.hass.areas,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeLabels).map((e=>({...e,strings:[e.label_id,e.name]})));this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){return s.dy` <ha-combo-box .hass="${this.hass}" .helper="${this.helper}" item-value-path="label_id" item-id-path="label_id" item-label-path="name" .value="${this._value}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.label-picker.label"):this.label}" .placeholder="${this.placeholder?this._labels?.find((e=>e.label_id===this.placeholder))?.name:void 0}" .renderer="${C}" @filter-changed="${this._filterChanged}" @opened-changed="${this._openedChanged}" @value-changed="${this._labelChanged}"> </ha-combo-box> `}},{kind:"method",key:"_filterChanged",value:function(e){const i=e.target,t=e.detail.value;if(!t)return void(this.comboBox.filteredItems=this.comboBox.items);const a=(0,f.q)(t,i.items?.filter((e=>![m,p].includes(e.label_id)))||[]);0===a.length?this.noAdd?this.comboBox.filteredItems=[{label_id:m,name:this.hass.localize("ui.components.label-picker.no_match"),icon:null,color:null}]:(this._suggestion=t,this.comboBox.filteredItems=[{label_id:g,name:this.hass.localize("ui.components.label-picker.add_new_sugestion",{name:this._suggestion}),icon:"mdi:plus",color:null}]):this.comboBox.filteredItems=a}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_labelChanged",value:function(e){e.stopPropagation();let i=e.detail.value;if(i===m)return i="",void this.comboBox.setInputValue("");[g,p].includes(i)?(e.target.value=this._value,this.hass.loadFragmentTranslation("config"),v(this,{entry:void 0,suggestedName:i===g?this._suggestion:"",createEntry:async e=>{const i=await(0,u.jo)(this.hass,e),t=[...this._labels,i];return this.comboBox.filteredItems=this._getLabels(t,this.hass.areas,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeLabels),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(i.label_id),i}}),this._suggestion=void 0,this.comboBox.setInputValue("")):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,r.B)(this,"value-changed",{value:e}),(0,r.B)(this,"change")}),0)}}]}}),(0,h.f)(s.oi)),(0,a.Z)([(0,l.Mo)("ha-labels-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Array,attribute:"exclude-label"})],key:"excludeLabels",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_labels",value:void 0},{kind:"field",decorators:[(0,l.IO)("ha-label-picker",!0)],key:"labelPicker",value:void 0},{kind:"method",key:"open",value:async function(){await this.updateComplete,await(this.labelPicker?.open())}},{kind:"method",key:"focus",value:async function(){await this.updateComplete,await(this.labelPicker?.focus())}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,u.f4)(this.hass.connection,(e=>{const i={};e.forEach((e=>{i[e.label_id]=e})),this._labels=i}))]}},{kind:"field",key:"_sortedLabels",value:()=>(0,d.Z)(((e,i,t)=>e?.map((e=>i?.[e])).sort(((e,i)=>(0,c.$)(e?.name||"",i?.name||"",t)))))},{kind:"method",key:"render",value:function(){const e=this._sortedLabels(this.value,this._labels,this.hass.locale.language);return s.dy` ${e?.length?s.dy`<ha-chip-set> ${(0,o.r)(e,(e=>e?.label_id),(e=>{const i=e?.color?(0,n.I)(e.color):void 0;return s.dy` <ha-input-chip .item="${e}" @remove="${this._removeItem}" @click="${this._openDetail}" .label="${e?.name}" selected="selected" style="${i?`--color: ${i}`:""}"> ${e?.icon?s.dy`<ha-icon slot="icon" .icon="${e.icon}"></ha-icon>`:s.Ld} </ha-input-chip> `}))} </ha-chip-set>`:s.Ld} <ha-label-picker .hass="${this.hass}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.label-picker.add_label"):this.label}" .placeholder="${this.placeholder}" .excludeLabels="${this.value}" @value-changed="${this._labelChanged}"> </ha-label-picker> `}},{kind:"get",key:"_value",value:function(){return this.value||[]}},{kind:"method",key:"_removeItem",value:function(e){const i=e.currentTarget.item;this._setValue(this._value.filter((e=>e!==i.label_id)))}},{kind:"method",key:"_openDetail",value:function(e){const i=e.currentTarget.item;v(this,{entry:i,updateEntry:async e=>await(0,u.$0)(this.hass,i.label_id,e)})}},{kind:"method",key:"_labelChanged",value:function(e){e.stopPropagation();const i=e.detail.value;i&&!this._value.includes(i)&&(this._setValue([...this._value,i]),this.labelPicker.value="")}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,r.B)(this,"value-changed",{value:e}),(0,r.B)(this,"change")}),0)}},{kind:"field",static:!0,key:"styles",value:()=>s.iv`ha-chip-set{margin-bottom:8px}ha-input-chip{--md-input-chip-selected-container-color:var(--color, var(--grey-color));--ha-input-chip-selected-container-opacity:0.5;--md-input-chip-selected-outline-width:1px}`}]}}),(0,h.f)(s.oi))},63860:function(e,i,t){t.d(i,{$0:function(){return c},f4:function(){return n},jo:function(){return r}});var a=t(94787),s=t(1416),l=t(22381);const o=e=>e.sendMessagePromise({type:"config/label_registry/list"}).then((e=>e.sort(((e,i)=>(0,s.$)(e.name,i.name))))),d=(e,i)=>e.subscribeEvents((0,l.D)((()=>o(e).then((e=>i.setState(e,!0)))),500,!0),"label_registry_updated"),n=(e,i)=>(0,a.B)("_labelRegistry",o,d,e,i),r=(e,i)=>e.callWS({type:"config/label_registry/create",...i}),c=(e,i,t)=>e.callWS({type:"config/label_registry/update",label_id:i,...t})},6736:function(e,i,t){t.d(i,{f:function(){return o}});var a=t(44249),s=t(72621),l=(t(39527),t(36993),t(50778));const o=e=>(0,a.Z)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(t,"connectedCallback",this,3)([]),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,s.Z)(t,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,s.Z)(t,"updated",this,3)([e]),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const i of e.keys())if(this.hassSubscribeRequiredHostProps.includes(i))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&!this.hassSubscribeRequiredHostProps?.some((e=>void 0===this[e]))&&(this.__unsubs=this.hassSubscribe())}}]}}),e)}};
//# sourceMappingURL=6713.b914254fc762eb20.js.map