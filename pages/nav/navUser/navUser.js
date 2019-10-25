Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:{
      accountName:'zcy',
      userName:'系统管理员（admin）',
      handPhone:'18538920603',
      dbName:'兰美人'
    }
    
  },
  toNavigate:function(event){
    var str = event.currentTarget.dataset.hi;
    var wsUrl='';
    if(str == 'changePwd'){
      wsUrl = '/pages/user/changePwd/changePwd';
    }else if(str == 'about'){
      wsUrl = '/pages/user/about/about';
    }
    wx.navigateTo({
      url: wsUrl,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})