"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["2670"],{53203:function(e,i,t){t.r(i),t.d(i,{HaFormFloat:function(){return f}});var a,d,r=t(63038),n=t(27862),o=t(52565),l=t(92776),s=t(5776),u=t(21475),h=(t(22152),t(20223),t(63721),t(38419),t(95078),t(19134),t(97499),t(97003),t(57243)),c=t(50778),v=t(36522),f=(t(83166),(0,u.Z)([(0,c.Mo)("ha-form-float")],(function(e,i){var t=function(i){function t(){var i;(0,o.Z)(this,t);for(var a=arguments.length,d=new Array(a),r=0;r<a;r++)d[r]=arguments[r];return i=(0,l.Z)(this,t,[].concat(d)),e(i),i}return(0,s.Z)(t,i),(0,n.Z)(t)}(i);return{F:t,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"localize",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,c.IO)("ha-textfield")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){var e,i;return(0,h.dy)(a||(a=(0,r.Z)([' <ha-textfield type="numeric" inputMode="decimal" .label="','" .helper="','" helperPersistent .value="','" .disabled="','" .required="','" .autoValidate="','" .suffix="','" .validationMessage="','" @input="','"></ha-textfield> '])),this.label,this.helper,void 0!==this.data?this.data:"",this.disabled,this.schema.required,this.schema.required,null===(e=this.schema.description)||void 0===e?void 0:e.suffix,this.schema.required?null===(i=this.localize)||void 0===i?void 0:i.call(this,"ui.common.error_required"):void 0,this._valueChanged)}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!!this.schema.required)}},{kind:"method",key:"_valueChanged",value:function(e){var i,t=e.target,a=t.value.replace(",",".");if(!a.endsWith(".")&&"-"!==a)if(""!==a&&(i=parseFloat(a),isNaN(i)&&(i=void 0)),this.data!==i)(0,v.B)(this,"value-changed",{value:i});else{var d=void 0===i?"":String(i);t.value!==d&&(t.value=d)}}},{kind:"field",static:!0,key:"styles",value:function(){return(0,h.iv)(d||(d=(0,r.Z)([":host([own-margin]){margin-bottom:5px}ha-textfield{display:block}"])))}}]}}),h.oi))}}]);
//# sourceMappingURL=2670.c34b60fb87ac3246.js.map