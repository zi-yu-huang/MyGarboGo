(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1267:function(e,t,r){var content=r(1278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(97).default)("4220b8bf",content,!0,{sourceMap:!1})},1277:function(e,t,r){"use strict";r(1267)},1278:function(e,t,r){var o=r(96)((function(i){return i[1]}));o.push([e.i,"#RegisterStep3 .content-area[data-v-96e3c424]{display:flex;flex-direction:column;height:70vh;justify-content:center;padding:50px;text-align:center}#RegisterStep3 .title-content[data-v-96e3c424]{color:#fff;font-family:Inter;font-size:35px;font-weight:800;letter-spacing:0;line-height:42px;margin-bottom:40px}#RegisterStep3 .btn-area[data-v-96e3c424]{background-color:#241f1f;border-radius:14px;color:#fff;font-family:Inter;font-size:24px;font-weight:600;height:50px;letter-spacing:0;margin-top:12px;text-align:center;width:-webkit-fill-available}",""]),o.locals={},e.exports=o},1307:function(e,t,r){"use strict";r.r(t);var o={name:"RegisterStep3",data:function(){var e=this;return{memberForm:{Password:"",PasswordAgain:""},rules:{Password:[{required:!0,message:"不可為空"},{validator:this.rValidataPhoneFormat,trigger:"blur"}],PasswordAgain:[{required:!0,message:"不可為空"},{validator:function(t,r,o){var form=e.memberForm;r&&r!==form.Password?o("兩次密碼不一致!"):o()},trigger:"blur"}]}}},methods:{OnSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){t&&(e.memberForm.Password="",e.memberForm.PasswordAgain="",e.$emit("DoneStep3",!0))}))}}},n=(r(1277),r(33)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"RegisterStep3"}},[t("div",{staticClass:"content-area"},[t("div",{staticClass:"title-content"},[e._v("註冊")]),t("aFormModel",{ref:"ruleForm",staticClass:"form-area",attrs:{model:e.memberForm,rules:e.rules}},[t("aFormModelItem",{ref:"Password",attrs:{prop:"Password"}},[t("aInput",{staticClass:"input-font",attrs:{placeholder:"請輸入密碼",maxLength:9},model:{value:e.memberForm.Password,callback:function(t){e.$set(e.memberForm,"Password",t)},expression:"memberForm.Password"}})],1),t("aFormModelItem",{ref:"PasswordAgain",attrs:{prop:"PasswordAgain"}},[t("aInput",{staticClass:"input-font",attrs:{placeholder:"請再次輸入密碼",maxLength:9},model:{value:e.memberForm.PasswordAgain,callback:function(t){e.$set(e.memberForm,"PasswordAgain",t)},expression:"memberForm.PasswordAgain"}})],1),t("aFormModelItem",[t("Button",{staticClass:"btn-area",attrs:{type:"primary"},on:{click:e.OnSubmit}},[e._v(e._s("下一步 "))])],1)],1)],1)])}),[],!1,null,"96e3c424",null);t.default=component.exports}}]);