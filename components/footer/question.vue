<template lang="pug">
//- ?modal
#Question
  .menu-area
    .menu-title {{ "垃圾容量" }}
    .menu
      aIcon.trash.purple(type="delete", theme="filled") 
      div {{ "100% 已關閉" }}
      aIcon.trash.red(type="delete", theme="filled") 
      div {{ "75% ~ 90%" }}
      aIcon.trash.yellow(type="delete", theme="filled") 
      div {{ "50% ~ 74%" }}
      aIcon.trash.green(type="delete", theme="filled") 
      div {{ "0% ~ 49%" }}
</template>

<script>

export default {
  name: "Question",
  data() {
    return {};
  },

};
</script>

<style lang="scss" scoped>
// 排版
#Question {
  .menu-area {
    position: fixed;
    // top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 300px;
    bottom: 90px;
    width: 85%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    border-radius: 16px;

    // justify-content: center;
    padding: 16px 20px;
  }
  .menu {
    background-color: white;
    opacity: 0.85;
    height: 100%;
    border-radius: 16px;
    margin: 16px 0px 0px 0px;
    padding: 8px 16px;
    display: grid;
    gap: 16px;
    grid-template-columns: 60px 1fr;
    font-size: 22px;
    align-content: center;
  }

 @media (min-width: 769px) {
    .menu-area{
      position: fixed; /* 子元素使用绝对定位 */
      left: 50%; /* 将子元素的左侧定位到父元素中心 */
      top:50%;
      transform: translate(-50%, -50%); /* 使用 transform 居中子元素 */
      bottom: 50px;
      width: 350px;
    }
  
 }
}
// 元件
#Question {
  .menu-title {
    font-family: Inter;
    font-size: 26px;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
  }
  .menu {
    color: black;
  }
  .trash {
    font-size: 36px;
  }
  .purple {
    color: #a005d7;
  }
  .red {
    color: #e70000;
  }
  .yellow {
    color: #ece200;
  }
  .green {
    color: #84ce19;
  }
}
</style>
