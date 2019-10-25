Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrCartData:[
      {
        imgUrl:'../../../image/home_hot@3x.png',
        title:'这里是个商品一',
        content:'这是简介',
        num:1,
        isxit:0

      }, {
        imgUrl: '../../../image/home_hot@3x.png',
        title: '这里是个商品二',
        content: '这是简介',
        num: 1,
        isxit: 0

      }, {
        imgUrl: '../../../image/home_hot@3x.png',
        title: '这里是个商品三',
        content: '这是简介',
        num: 1,
        isxit: 0
      }
    ]
  },
  addNum(event){
    var index = event.currentTarget.dataset.index;
    this.data.arrCartData[index].num++;
    this.setData({ 
      arrCartData: this.data.arrCartData
       });
  },
  minNum(event){
    var index = event.currentTarget.dataset.index;
    this.data.arrCartData[index].num--;
    if (this.data.arrCartData[index].num == 0){
      this.data.arrCartData[index].num=1;
    }
    this.setData({
      arrCartData: this.data.arrCartData
    });
  },
  selectShop(event){
    var index = event.currentTarget.dataset.index;
    if (this.data.arrCartData[index].isxit == 0) {
      this.data.arrCartData[index].isxit = 1;
    }else{
      this.data.arrCartData[index].isxit = 0;
    }
    this.setData({
      arrCartData: this.data.arrCartData
    });
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