<template>
  <!-- <div class="toolbar" :style="{display:'flex',position:'fixed',flexDirection:'row',height:'100rpx',backgroundColor:'gainsboro',top:'30rpx',left:'0',right:'0'}"> -->
<div class="toolbar" :style="{paddingTop:statusBarHeight+'px',height:toolBarHeight+'px'}">
   <img v-if="!hideBack" class="icon_back" src="/static/res/titlebar_left_back_icon.png" mode="aspectFit" @click="goBack">
   <div v-if="hideBack" style="width:10%"/>
   <div class="title">{{title?title:titleDefault}}</div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: ["title", "hideBack"],
  data: function() {
    return {
      toolBarHeight: Vue.prototype.globalData.toolBarHeight,
      statusBarHeight: Vue.prototype.globalData.statusBarHeight,
      titleDefault: "方太小厨"
    };
  },
  methods: {
    goBack() {
      console.log(this.statusBarHeight);
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style>
.toolbar {
  display: flex;
  position: fixed;
  flex-direction: row;
  height: 100rpx;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  border-bottom: 1rpx gainsboro solid;
}

.icon_back {
  height: 40%;
  width: 10%;
  align-self: center;
}

.title {
  width: 30%;
  margin: 0 25%;
  text-align: center;
  align-self: center;
  color: black;
  font-size: medium;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
