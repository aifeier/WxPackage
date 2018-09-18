<template>
  <div class="container">
    <toolBar :hideBack="true" title="备菜台"></toolBar>
    <div :style="{marginTop:marginTop+'px'}">
      哈哈哈哈哈
    </div>
  </div>
</template>

<script>
import toolBar from "@/components/toolBar";
export default {
  components: {
    toolBar
  },
  data() {
    return {
      marginTop: this.globalData.toolBarHeight + this.globalData.statusBarHeight
    };
  },
  methods: {}
};
</script>

<style scoped>
.container {
  padding: 0 0;
  height: 100%;
  width: 100%;
}
</style>
