(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1294:function(e,t,o){var content=o(1340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(97).default)("ba482b56",content,!0,{sourceMap:!1})},1339:function(e,t,o){"use strict";o(1294)},1340:function(e,t,o){var d=o(96)((function(i){return i[1]}));d.push([e.i,"#ModalDemo .header[data-v-88d043bc]{display:flex;justify-content:space-between}#ModalDemo .header .title-name[data-v-88d043bc]{font-size:28px;line-height:52px;margin:0 10px;text-align:center}#ModalDemo .block-area[data-v-88d043bc]{background-color:rgba(0,0,0,.5);display:flex;flex-direction:column;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}#ModalDemo .block[data-v-88d043bc]{background:#fff;border:5px;border-radius:20px;margin:10px 3%;padding:20px 0 0}#ModalDemo .mask[data-v-88d043bc]{background-color:rgba(55,55,55,.6);bottom:0;left:0;position:fixed;right:0;top:0;z-index:0}#ModalDemo .article[data-v-88d043bc]{padding:30px}#ModalDemo .footer[data-v-88d043bc]{display:flex;justify-content:space-around}#ModalDemo .article[data-v-88d043bc]{font-size:20px;text-align:center}#ModalDemo .footer[data-v-88d043bc]{color:#fff;font-size:20px}#ModalDemo .footer .ok-btn[data-v-88d043bc]{background:#da0000;border-radius:0 0 0 20px;padding:20px;text-align:center;width:100%}#ModalDemo .footer .cancel-btn[data-v-88d043bc]{background:#8dda1e;border-radius:0 0 20px 0;padding:20px;text-align:center;width:100%}",""]),d.locals={},e.exports=d},1372:function(e,t,o){"use strict";o.r(t);var d={name:"ModalDemo",components:{},props:{visible:{type:Boolean,default:""},changeToLike:{type:Object,default:""}},data:function(){return{visible2:""}},computed:{modalArticle:function(){return console.log(this.changeToLike),!1===this.changeToLike.isLike?"加入我的最愛":"確定要從我的最愛移除嗎?"}},methods:{CloseModal:function(){this.visible2=!1,this.$emit("CloseModal",this.visible2)},SaveModal:function(){this.visible2=!1,!0===this.changeToLike.isLike?(this.changeToLike.isLike=!1,this.$emit("SaveModal",this.visible2,this.changeToLike)):(this.changeToLike.isLike=!0,this.$emit("SaveModal",this.visible2,this.changeToLike))}}},l=(o(1339),o(33)),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ModalDemo"}},[e.visible?t("div",[t("div",{staticClass:"mask"}),t("div",{staticClass:"block-area"},[t("div",{staticClass:"block"},[t("div",{staticClass:"header"},[t("div",{staticClass:"title-name"},[e._t("title")],2)]),t("div",{staticClass:"article"},[t("div",{attrs:{name:"article"}},[e._v(e._s(e.modalArticle))])]),t("div",{staticClass:"footer"},[t("div",{staticClass:"ok-btn"},[t("div",{on:{click:e.SaveModal}},[e._v(e._s("確定"))])]),t("div",{staticClass:"cancel-btn"},[t("div",{on:{click:e.CloseModal}},[e._v(e._s("取消"))])])])])])]):e._e()])}),[],!1,null,"88d043bc",null);t.default=component.exports}}]);