<template>
<div>
    <div class="divCenteredContent">
        <span class="spanText">We provided high-quality coding to create a more intuitive experience.</span>
        <br />
        <span class="headingText">Quality Engineering.</span>
        <br />
        <span class="headingText">Quality Results.</span>
    </div>
    <div style="text-align: center">
        <a-button shape="round" class="blogshop-ant-btn-round btn-blockshop-text">Learn More</a-button>
        <a-button shape="round" class="blockshop-ant-btn-round btn-blockshop-text">Get Started</a-button>
    </div>
    <br />
    <div style="padding: 0 50px" v-html="require('!html-loader!../assets/svg/dashboardMobile.svg')">
    </div>
</div>
</template>
<script>
export default {

  name: 'Blockshop-Home',
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
.divCenteredContent {

    text-align: center;
    padding: 10vw;

}

.spanText {

    font-family: Josefin Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 3vw;
    line-height: 3vh;
    text-align: center;

    /* identical to box height */
    letter-spacing: -0.035em;
    color: #34304E;
}

.headingText {

    font-family: Alegreya Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 4vw;
    line-height: calc(100% - -2vh);
    color: #34304E;

}

.blogshop-ant-btn-round {

    margin: 5px;
    border: 2px solid #918FEF;
    box-sizing: border-box;
    border-radius: 48px;

}

.blockshop-ant-btn-round {

    margin: 5px;
    border: 2px solid #69BDD8;
    box-sizing: border-box;
    border-radius: 48px;

}

.btn-blockshop-text {

    font-family: Josefin Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

    /* identical to box height */
    text-align: center;
    letter-spacing: -0.03em;

    color: #34304E;

}
</style>