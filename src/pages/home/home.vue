<template>
  <div class="container">
    <div class="div_bottom">
      <scroll-view class="scroll_view" scroll-x :scroll-into-view="firstViewId">
        <div v-for="item in menus[current].menu" :key="item" :id="item.id">
          <img :src="item.imgUrl" mode="scaleToFill"/>
        </div>
      </scroll-view>
    </div>
    <swiper :circular="false" :current="current" @change="changePage">
      <block v-for="item in menus" :key="item">
        <swiper-item >
          <div @click="gotoDetail(item)" :style="{height:'100%',opacity:0.9,backgroundImage:'url(' + item.imgUrl + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover'}" >
            <div class="swiper_menu">
              <div class="top">
                <div>{{item.level}}</div>
                <img src="/static/search.png" mode="aspectFit">
              </div>
              <div class="memu_info">
                <div class="name">{{item.name}}</div>
                <div class="persons_view">
                  <img src="/static/icon_menu.png" mode="aspectFit"/>
                  <div class="persons">{{item.persons}}</div>
                </div>
              </div>
            </div>
          </div>
        </swiper-item>
      </block>
    </swiper>
    <img class="icon_left" v-if="current > 0" @click="changeCurrent(-1)"  src="/static/icon.png" mode="aspectFit"/>
    <img class="icon_right" v-if="current < (menus.length-1)" @click="changeCurrent(1)" src="/static/icon.png" mode="aspectFit"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstViewId: "",
      current: 0,
      menus: [
        {
          imgUrl:
            "http://5b0988e595225.cdn.sohucs.com/images/20180114/51143251595a4558be4fe260a260ded7.jpeg",
          level: "关卡一",
          name: "菜单夏季",
          persons: "三人份",
          menu: [
            {
              id: "id12",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536831241074&di=9eb693062059d220f3f52df8c84f8963&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85cccab3gw1etdlazjjufg206404ln3h.jpg"
              // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734073443&di=c98549dada6a47f37bf71c0655713a6b&imgtype=0&src=http%3A%2F%2Fpic.ecook.cn%2Fweb%2F249633227.jpg"
            },
            {
              id: "id11",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734445315&di=62cdc02eb4d099a4fef11513c0e251dc&imgtype=0&src=http%3A%2F%2Fmmb-toutiao.oss-cn-shanghai.aliyuncs.com%2FtoutiaoImage%2Fec72d5d27f2f4b8b0bcbb2538e229aee.jpeg"
            },
            {
              id: "id10",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734445315&di=9c2fd190a9760061101dd9ef881d5b98&imgtype=0&src=http%3A%2F%2Fmmb-toutiao.oss-cn-shanghai.aliyuncs.com%2FtoutiaoImage%2F11a7d3acaf2f5071c84aaf6a48adedc3.jpeg"
            },
            {
              id: "id9",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734445314&di=ce3f68028f2d10f88d496f50112bd11c&imgtype=0&src=http%3A%2F%2Fmmb-toutiao.oss-cn-shanghai.aliyuncs.com%2FtoutiaoImage%2F65baf1f8b0d736b58ef1265c229e4ba7.jpeg"
            }
          ]
        },
        {
          imgUrl:
            "http://5b0988e595225.cdn.sohucs.com/images/20180117/99aa06ab74ee49c285c7efa64bd93c8e.jpeg",
          level: "关卡二",
          name: "冬季菜单",
          persons: "两人份",
          menu: [
            {
              id: "id8",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734445312&di=6da41ec8d53b928b0c02330b581a57af&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn03%2F352%2Fw640h512%2F20180604%2Fcd2c-hcmurvh1796221.jpg"
            },
            {
              id: "id7",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734570883&di=7ca5e4fd89977f1400bdc3b5183ac4c7&imgtype=0&src=http%3A%2F%2Ftblg.k-img.com%2Frestaurant%2Fimages%2FRvw%2F28967%2F28967828.jpg"
            },
            {
              id: "id6",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734570885&di=dca0e5c10abc4d403297f963e75a9745&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180727%2Fea6a9e01e7b141558a52ddfcb8840765.jpeg"
            },
            {
              id: "id5",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734155753&di=f9b9e0ce9b4b099904c56f8d3fe72def&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170814%2F2080d7bac6944b4696e7a1f13dd04edd_th.png"
            }
          ]
        },
        {
          imgUrl:
            "http://5b0988e595225.cdn.sohucs.com/images/20171223/2262b6cc73704bef8ae9a368cc080a6f.jpeg",
          level: "关卡三",
          name: "秋季菜单",
          persons: "不知道几人份",
          menu: [
            {
              id: "id4",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734155753&di=ce70963ffda8eafed36e2257db2fba4b&imgtype=0&src=http%3A%2F%2Fs2.cdn.xiachufang.com%2Fb268b77a5bdc11e7947d0242ac110002_1280w_1024h.jpg"
            },
            {
              id: "id3",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734155753&di=2a46cb7fcba0413ddd940afd564ba627&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170908%2F663991d3d9d74c9c9919250625189e82.jpeg"
            },
            {
              id: "id2",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734155753&di=c2c26a6b2e57d4dc611a595c28e18142&imgtype=0&src=http%3A%2F%2Fyinshi.jiankangzu.com%2Fuploadfile%2F2013%2F0405%2F20130405055758363.jpg"
            },
            {
              id: "id1",
              imgUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536734155752&di=810594ec2063a32fb5d1979a2f828895&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fbbs4%2F20095%2F21%2F1242891692772.jpg"
            }
          ]
        }
      ]
    };
  },
  methods: {
    gotoDetail(res){
      this.app.navigateTo('../menu/main?item='+res.name)
    },
    changePage(res) {
      if (this.current === res.target.current) return;
      this.current = res.target.current;
      this.setFirstViewId();
    },
    changeCurrent(res) {
      this.current = this.current + res;
      this.setFirstViewId();
    },
    setFirstViewId() {
      let that = this;
      setTimeout(function() {
        that.firstViewId = that.menus[that.current].menu[0].id;
      }, 100);
      // console.log(wx.env)
      // let file = wx.env.USER_DATA_PATH + "/test.txt"
      // console.log(file)
      // wx.getFileSystemManager().appendFile({
      //   filePath: file,
      //   data: new Date(),
      //   encoding:'utf8',
      //   success: function(res) {
      //     console.log(res);
      //   },
      //   fail: function(err) {
      //     console.log(err);
      //   },
      //   complete:function(res){
      //    console.log('complete')
      //   }
      // });
      // wx.openDocument({
      //       filePath: file,
      //       success: function(res) {
      //           console.log('打开文档成功')
      //       },
      //       fail:function(err){
      //         console.log(err)
      //       }
      //   })
    }
  }
};
</script>

<style scoped>
.container {
  padding: 0 0;
  height: 100%;
  width: 100%;
  color: white;
}

swiper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

.swiper_menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: center;
  font-size: x-large;
}

.swiper_menu .top {
  display: flex;
  flex-direction: row;
  width: 96%;
  margin: 20% 2%;
  justify-content: space-between;
}

.swiper_menu .top div {
}

.swiper_menu .memu_info {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  align-items: center;
}

.top img,
.memu_info img {
  width: 56rpx;
  height: 56rpx;
}

.memu_info .name {
  text-align: center;
  font-size: x-large;
}

.memu_info .persons_view {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5%;
}
.memu_info .persons_view .persons {
  text-align: center;
  font-size: medium;
}

.memu_info .persons_view img {
  width: 36rpx;
  height: 36rpx;
}

.icon_left {
  display: flex;
  position: fixed;
  width: 56rpx;
  height: 56rpx;
  top: 42.5%;
  left: 10%;
  opacity: 0.7;
}

.icon_right {
  display: flex;
  position: fixed;
  width: 56rpx;
  height: 56rpx;
  top: 42.5%;
  right: 10%;
  transform: rotate(180deg);
  opacity: 0.7;
}

.div_bottom {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  justify-content: flex-start;
}

.scroll_view {
  width: 100%;
  white-space: nowrap;
}

.scroll_view div {
  flex-direction: column;
  margin: 1%;
  display: inline-block;
  box-sizing: border-box;
}

.scroll_view div img {
  width: 320rpx;
  height: 256rpx;
  border-radius: 10%;
}
</style>
