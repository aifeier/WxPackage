<template>
  <div class="container">
    <toolBar  :title="title"></toolBar>
    <div :style="{marginTop:marginTop+'px',width:'100%'}">
      <div class="item_view" v-for="item in menus" :key="item">
        <div class="skill_view">
          <div v-for="(skill,ind) in item.skills" :key="skill">{{skill}}</div>
        </div>
        <div class="name">{{item.name}}</div>
        <div class="info_view">
          <div>
            <img src="/static/res/icon_menu.png" mode="aspectFit"/>
            <div>{{item.collection}}</div>
          </div>
          <div>
            <img src="/static/res/icon_menu.png" mode="aspectFit"/>
            <div>{{item.duration}}</div>
          </div>
          <div>
            <img src="/static/res/icon_menu.png" mode="aspectFit"/>
            <div>{{item.strCooker}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toolBar from "@/components/toolBar";
export default {
  components: {
    toolBar
  },
  onLoad(options) {
    this.title = options.item;
  },
  data() {
    return {
      marginTop:
        this.globalData.toolBarHeight + this.globalData.statusBarHeight,
      title: "方太小厨",
      menus: [
        {
          name: "番茄炒蛋",
          skills: ["技能一", "技能二", "技能三"],
          collection: "16",
          duration: "20分",
          cookers: ["灶具", "消毒柜"],
          strCooker: "灶具|消毒柜"
        },
        {
          name: "番茄不炒蛋",
          skills: ["技能H", "技能Z"],
          collection: "180",
          duration: "20分钟",
          cookers: ["灶具", "消毒柜"],
          strCooker: "灶具|消毒柜"
        },
        {
          name: "番茄炒蛋",
          skills: ["技技技能能能一", "技能二", "技能三"],
          collection: "16",
          duration: "30分钟",
          cookers: ["灶具技", "消毒柜"],
          strCooker: "灶具|消毒柜"
        },
        {
          name: "番茄哈哈哈哈哈",
          skills: ["技能一", "技能二", "技能三"],
          collection: "1600",
          duration: "40分钟",
          cookers: ["灶具", "消毒柜"],
          strCooker: "灶具|消毒柜"
        },
        {
          name: "没有番茄了",
          skills: ["技能一", "技能二", "技能三"],
          collection: "1",
          duration: "2分钟",
          cookers: ["灶具", "消毒柜"],
          strCooker: "灶具|消毒柜"
        }
      ],
      cooker: ""
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

.item_view {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 3% 5%;
  padding: 5% 5%;
  background-color: gainsboro;
  border-radius: 30rpx;
  text-align: center;
  color: black;
}

.item_view .skill_view,
.item_view .info_view {
  padding: 5% 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: medium;
}
.item_view .info_view {
  width: 90%;
}

.skill_view div {
  width: 180rpx;
  border: 2rpx black solid;
  border-radius: 5rpx;
  margin: 10rpx;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: medium;
}

.item_view .name {
  width: 90%;
  padding: 5%;
  border-bottom: 3rpx solid gray;
  font-size: x-large;
}

.info_view div {
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.info_view div div {
  width: 85%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-align: start;
}

.info_view img {
  width: 15%;
  height: 35rpx;
  margin-left: 5%;
  font-size: medium;
}
</style>
