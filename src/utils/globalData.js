const data = {
  toolBarHeight: getToolBarHeight(),
  statusBarHeight: wx.getSystemInfoSync().statusBarHeight
};

function getToolBarHeight() {
  let statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
  let toolBarHeight =
    statusBarHeight > 30 ? statusBarHeight : statusBarHeight * 2.1;
  return toolBarHeight;
}

export default data;
