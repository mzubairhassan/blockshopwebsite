<template>
  <div>
    <!-- main parent div -->
    <div class="first-heading">
      <p>
        We provided high-quality coding to create a more intuitive experience
      </p>
      <h2>
        Quality Engineering <br />
        Quality Results.
      </h2>
      <div class="heading-btn mt-3">
        <button>Learn More</button>
        <button>Get Started</button>
      </div>
    </div>
    <b-container>
      <div
        class="mt-3"
        id="dashboard-svg"
        v-html="require('!html-loader!../assets/svg/dashboard.svg')"
      ></div>
    </b-container>
    <div
      class="intersect-svg"
      v-html="require('!html-loader!../assets/svg/Intersect.svg')"
    ></div>

    <b-container class="bv-example-row">
      <b-row style=" margin-top: 4rem">
        <b-col>
          <h2 class="comp-sect-title mt-4">
            Trusted by the <br />
            World's Best Companies
          </h2>
        </b-col>
      </b-row>
      <b-row
        cols="3"
        cols-sm="12"
        cols-md="6"
        cols-lg="6"
        align-h="center"
        class="mt-5 companies-logos"
      >
        <b-col>
          <div
            class="ml-2 mr-2"
            v-html="require('!html-loader!../assets/svg/NikeLogo.svg')"
          ></div>
          <span class="imgTextWhite">Nike</span>
        </b-col>
        <b-col>
          <div
            class="ml-2 mr-2"
            v-html="require('!html-loader!../assets/svg/StarbucksLogo.svg')"
          ></div>
          <span class="imgTextWhite">Starbucks</span>
        </b-col>
        <b-col>
          <div
            class="ml-2 mr-2"
            v-html="require('!html-loader!../assets/svg/KFC.svg')"
          ></div>
          <span class="imgTextWhite">KFC</span>
        </b-col>
        <b-col>
          <div
            class="ml-2 mr-2"
            v-html="require('!html-loader!../assets/svg/Pepsi.svg')"
          ></div>
          <span class="imgTextWhite">Pepsi</span>
        </b-col>
        <b-col>
          <div
            class="ml-2 mr-2"
            v-html="require('!html-loader!../assets/svg/CocaCola.svg')"
          ></div>
          <span class="imgTextWhite">Coca-Cola</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col style="text-align: center; margin-top: 4rem">
          <button class="btn-showMore">Show More</button>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <!-- main parent div -->
</template>

<script>
export default {};
</script>

<style scoped>
.first-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.first-heading >>> p {
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.035em;

  color: #34304e;
}

.first-heading >>> h2 {
  font-family: Alegreya Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 67px;

  color: #34304e;
  text-align: center;
}

.heading-btn {
  display: flex;
  width: 300px;
  justify-content: space-between;
}

.heading-btn >>> button {
  box-sizing: border-box;
  border-radius: 48px;
  width: 144px;
  height: 48px;
}

.heading-btn >>> button:nth-child(1) {
  border: 2px solid #918fef;
}
.heading-btn >>> button:nth-child(2) {
  border: 2px solid #69bdd8;
}

.intersect-svg {
  transform: translateY(-36px);
  z-index: -1;
  position: absolute;
  right: 0;
  left: 0;
}

.comp-sect-title {
  font-family: Alegreya Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 97.25%;

  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
}

.imgTextWhite {
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 3rem;
  display: inherit;
  line-height: 20px;
  text-align: center;
  color: #020000;
}

.btn-showMore {
  width: 144px;
  height: 48px;
  margin-top: 3rem;
  background: #78a9f0;
  border-radius: 48px;
  border: none;
}
</style>
