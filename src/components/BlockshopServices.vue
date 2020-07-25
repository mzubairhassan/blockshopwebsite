<template>
  <div class="contentContainer">
    <div id="svgDIV1" v-html="require('!html-loader!../assets/svg/MaskGroup.svg')"> 

    </div>
    <div class="blockshop-about-text-centered">
      <span class="headingText" >We make great product</span>
      <br />
      <span class="headingText" >With great people</span>
    </div>
  </div>
</template>
<script>
export default {

  name: 'Blockshop-Services',
  // created() {
  //   this.handleView();
  //   window.addEventListener('resize', this.handleView);
  // },
  data() {
    return { 
    };
  },
  methods: {
    handleView() {
      //console.log(window.innerWidth);
      //this.setSVGWidth({currentWidth: window.innerWidth});
    },
    // setSVGWidth(params){
    //   console.log("W: " + params.currentWidth);
    //   let divEle = document.getElementById("svgDIV1");
    //   if (divEle != null){
    //     //divEle.children[0].setAttribute("width",(params.currentWidth));
    //     //divEle.children[0].setAttribute("viewBox",("0 0 " + params.currentWidth + " 865"));

    //   }
    // }
  },
};
</script>