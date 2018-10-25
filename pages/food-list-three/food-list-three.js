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
      img: "/images/foodstuff/1525935770208642.jpg",
      title: "10KG茉莉香米/46.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '茉莉香米',
      postId: 0,
    },
    {
      img: "/images/foodstuff/1525935747699575.jpg",
      title: "15KG小泰香/70.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '小泰香',
      postId: 1,
    },
    {
      img: "/images/foodstuff/1525934959106314.jpg",
      title: "20KG泰香米/92.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '泰香米',
      postId: 2,
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