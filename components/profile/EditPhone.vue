<template lang="pug">
//- 修改電子信箱👈
#EditPhone
  .block-area(v-if="visible")
    .content
      aFormModel.form-area(
        ref="ruleForm"
        :model="memberForm"
        :rules="rules"
        )
        aFormModelItem(ref="memberEmail" prop="memberEmail")
          aInput.input-font(
            placeholder="請輸入新電子信箱"
            v-model="memberForm.memberEmail"
           )
        aFormModelItem
          aButton.btn-area( type="primary" @click="OnSubmit") {{"接收驗證碼 "}}
    Loading(v-if="loadingVisible")
</template>

<script>
import $ from "jquery";
import {SendEmailApi} from "@/services/sendEmail.js"
export default {
  components:{
    Loading:()=>import("@/components/modal/loadingModal.vue")
  },
  name: "EditPhone",
  props:{
    visible:{
      type:Boolean,
      default:""
    }
  },
  data () {
    return {
      loadingVisible:false,
      memberForm:{
        memberEmail: "",
      },
      rules: {
        memberEmail: [
          { required: true,message: "不可為空"},          
          {type: 'email',message: '請輸入有效的信箱'}

        ]
      }
    };
  },
  mounted(){
    $(document).click((event) => {
      if (this.visible === true) {
        console.log("sdjfldf")
        
        const target = $(event.target);
        const menuIcon = $(".content");
        const menuArea = $(".email-area");
        console.log(target)
        
        if (!target.closest(menuArea).length ) {
          if (!target.closest(menuIcon).length ) {
          console.log("jkjj")
          
          this.visible = false;
          this.CloseEmailModal();
          }
        }
      }
    });
  },
  methods:{
    OnSubmit(){
      this.$refs.ruleForm.validate(async(valid) => {
        if (valid) {
          this.loadingVisible=true
          const response = await this.GetSendEmailApi(this.memberForm.memberEmail)
          this.$emit("getVerify",true,response,this.memberForm.memberEmail)
          console.log(true,response,this.memberForm.memberEmail)
          this.loadingVisible=false
          this.memberForm.memberEmail=""
        }
      })
    },
    CloseEmailModal(){
      this.memberForm.memberEmail=""
      this.$emit("CloseEmailModal")
    },

    //API -----------
    async GetSendEmailApi(email){
      const response = await SendEmailApi(email);
      return response.data.message      

    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#EditPhone {
  .block-area{
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .content{
    text-align: center;
    justify-content: center; 
      .form-area{
        display: flex;
        flex-direction: column;
        height: 309px;
        justify-content: center;
    }
    .btn-area{
      width: -webkit-fill-available;
      text-align: center;
      background-color:  #8DDA1E;
      width: -webkit-fill-available;
      text-align: center;
      font-family: Inter;
      font-size: 24px;
      font-weight: 600;
      /* line-height: 24px; */
      letter-spacing: 0em;
      color: white;
      margin-top: 12px;
      border-radius: 14px;
      height: 50px;
    }
  }
}
// 元件
#EditPhone {
  .ant-row{
    margin: 0 !important;
  }
  .content{
    background: black;
    // opacity:80%;
    margin: 0px 21px;
    // width: 346px;
    // height: 309px;
    border-radius: 24px;
    padding: 0px 27px;

    .input-font{
    height: 50px;
    border-radius: 14px;
    font-size: 20px;
    padding: 0 20px;

  }
  }
  @media (min-width: 769px) {
    .block-area{
          align-items: center;

    }
    .content{
      width:600px
    }
  }
}
</style>
