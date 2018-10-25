Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_content = [{
      img: "/images/foodstuff/20181025211901 (1).jpg",
      title: "350g黑豆/5.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '黑豆',
      postId: 0,
    },
    {
      img: "/images/foodstuff/20181025211901 (2).jpg",
      title: "350g燕麦/5.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '燕麦',
      postId: 1,
    },
    {
      img: "/images/foodstuff/20181025211901 (3).jpg",
      title: "350g黑米/5.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '黑米',
      postId: 2,
    },
    {
      img: "/images/foodstuff/20181025212620.jpg",
      title: "350g黄小米/5.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '黄小米',
      postId: 3,
    },
    {
      img: "/images/foodstuff/20181025212623.jpg",
      title: "350g红小豆/5.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '红小豆',
      postId: 4,
    },
      {
        img: "/images/foodstuff/20181025212611.jpg",
        title: "350g薏米仁/5.00",
        info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
        txt: '薏米仁',
        postId: 5,
      },
    ]
    this.setData({
      posts_key: posts_content
    });




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

  },
  onPostTap: function (event) {
    console.log(1);
    var postText = event.currentTarget.dataset.text;
    var postImg = event.currentTarget.dataset.img;
    var that = this
    wx.navigateTo({
      url: '../food-info/food-info?TextData=' + postText + '&ImgData=' + postImg,
    })
  }

})