<template>
  <div class="contentContainer">
    <div style="overflow-hidden" v-html="require('!html-loader!../assets/svg/MaskGroupMobile.svg')"> 

    </div>
    <div class="blockshop-about-text-centered">
      <span class="headingText">We make great product</span>
      <br />
      <span class="headingText">With great people</span>
    </div>
  </div>
</template>
<script>
export default {

  name: 'Blockshop-Services',
  data() {
    return { 
    };
  },
};
</script>
<style>
.contentContainer { 
    height: calc(100% - 390px);
    position: relative;  
}

/* .divCenteredContent {

    display: grid;
    text-align: center;
    padding: 60px;
    padding-bottom: inherit;

} */
.blockshop-about-text-centered {
    text-align: center;
    position: absolute;
    top: calc(100vh - 86vh);
    left: calc(100vh - 73vh);
    transform: translate(-50%, -50%);
}
.headingText {

    font-family: Alegreya Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 4vw;
    line-height: calc(100% - -2vh);
    color: #34304E;

}
</style>