<template>
  <a-layout id="components-layout-blogshop-top" class="blockshop-ant-layout">
    <a-layout-header class="header">
      <div class="logo"></div>
      <a-menu
        class="blockshop-ant-menu-horizontal"
        theme="light"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        :selectedKeys="[current]"
        @click="handleClick"
      >
        <a-menu-item key="1" class="blockshop-ant-menu-item"
          >Services</a-menu-item
        >
        <a-menu-item key="2" class="blockshop-ant-menu-item">About</a-menu-item>
        <a-menu-item key="3" class="blockshop-ant-menu-item">Work</a-menu-item>
        <a-menu-item key="4" class="blockshop-ant-menu-item">Blog</a-menu-item>
        <a-menu-item key="5" class="blockshop-ant-menu-item"
          >Connect</a-menu-item
        >
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </a-layout-content>
    <!-- <a-layout-footer :style="{'text-align': 'center', background: '#FFF'}">
      BlogShop © 2010-2020 Privacy - Terms
    </a-layout-footer>-->
  </a-layout>
</template>
<script>
export default {
  name: "Blockshop-Index",
  data() {
    return {
      current: "0",
    };
  },
  methods: {
    handleClick(e) {
      //console.log('click ', e);
      this.current = e.key;

      if (this.current === "1") {
        this.$router.push("/services");
      } else {
        this.$router.push("/");
      }
    }, // EOF Menu Click Event
  },
};
</script>
