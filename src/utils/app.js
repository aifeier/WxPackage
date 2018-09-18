// wixi提供api的二次封装
function navigateTo(url) {
  wx.showLoading({
    title: "请稍等...",
    mark: true
  });
  wx.navigateTo({
    url: url,
    success() {
      console.debug("success");
      wx.hideLoading();
    },
    fail(e) {
      console.debug("fail", e);
      wx.hideLoading();
      wx.showToast({
        title: "打开失败，请重试",
        mask: true,
        icon: "none"
      });
    },
    complete() {
      console.debug("complete");
    }
  });
}

function redirectTo(url) {
  wx.showLoading({
    title: "请稍等...",
    mark: true
  });
  wx.redirectTo({
    url: url,
    success() {
      console.debug("success");
      wx.hideLoading();
    },
    fail(e) {
      console.debug("fail", e);
      wx.hideLoading();
      wx.showToast({
        title: "打开失败，请重试",
        mask: true,
        icon: "none"
      });
    },
    complete() {
      console.debug("complete");
    }
  });
}

function navigateBack(page) {
  if (!page) {
    page = 1;
  }
  wx.navigateBack({
    delta: page
  });
}

const app = {
  navigateTo: navigateTo,
  navigateBack: navigateBack,
  redirectTo: redirectTo
};

export default app;
