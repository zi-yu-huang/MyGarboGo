<template lang="pug">
//- 請填寫功能描述👈
#NotifyModal
  div(v-if="notifyVisible")
    .mask
    .block-area(@click="CloseModal")
      .block
        .setting-content(@click.stop="DontClose")
          .text-area {{ "垃圾桶清空通知" }}
          aSwitch.text-area(
            :defaultChecked="trashClearChange",
            @change="ChangeToClear"
          )
          .text-area {{ "快不能丟的通知" }}
          aSwitch.text-area(
            :defaultChecked="dontTrashChange",
            @change="ChangeToDontTrash"
          )
</template>

<script>
export default {
  name: "NotifyModal",
  props:{
    notifyVisible:{
      type:Boolean,
      default:""
    },
    notifyList:{
      type:Object,
      default:""
    }
  },
  data () {
    return {};
  },
  computed:{
    trashClearChange(){
      if(this.notifyList.notifyTrashClear ===1){
        return true
      }
      if(this.notifyList.notifyTrashClear ===0){
        return false
      }
    },
    dontTrashChange(){
      if(this.notifyList.notifyDontTrash ===1){
        return true
      }
      if(this.notifyList.notifyDontTrash ===0){
        return false
      }
    }
  },
  methods:{
    CloseModal(){
      this.$emit("CloseNotifyModal",false)
    },
    DontClose(){
    },
    ChangeToClear(){      
      
      this.notifyList.notifyTrashClear=!this.notifyList.notifyTrashClear
      this.$emit("ChangeTrashClearSwitch",this.notifyList)

    },
    ChangeToDontTrash(){
      this.notifyList.notifyDontTrash=!this.notifyList.notifyDontTrash
      this.$emit("ChangeDontTrashSwitch",this.notifyList)
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#NotifyModal {
  .block-area {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1000;
  }
  .block {
    // position: relative;
    // min-width: 100px;
    // min-height: 50px;
    background: #fff;
    border: 5px;
    border-radius: 20px;
    // box-shadow:0 4px 12px rgb(0 0 0 / 15%);
    margin: 10px 3%;
  }
  .mask {
    z-index: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55, 55, 55, 0.6);
  }
  .setting-content {
    padding: 50px 50px;
    font-family: Inter;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: black;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 25px;
  }
  @media (min-width: 769px) {
    .block-area {
      align-items: center;
    }
    .block {
      width: 400px;
    }
  }
}
// 元件
#NotifyModal {
  .ant-switch {
    background-color: rgba(255, 217, 217, 0.77) !important;
    border: 1px solid black;
  }
  .ant-switch-checked {
    background-color: rgba(
      230,
      255,
      194,
      0.59
    ) !important; /* 開關開啟時的底色 */
  }
  .ant-switch-checked::after {
    background-color: #8dda1e !important; /* 開關滑塊開啟時的icon顏色 */
  }
  .ant-switch::after {
    background-color: #e70000; /* 開關滑塊關閉時的icon顏色 */
  }
}
</style>
