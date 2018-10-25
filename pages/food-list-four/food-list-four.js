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
      img: "/images/foodstuff/thumb_20180510150504_592.jpg",
      title: "5KG软香粘/50.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '软香粘',
      postId: 0,
    },
    {
      img: "/images/foodstuff/thumb_20180510150359_327.jpg",
      title: "5KG农家香/50.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '农家香',
      postId: 1,
    },
    {
      img: "/images/foodstuff/1525935797505573.jpg",
      title: "5KG吴王贡米(绿)/50",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '吴王贡米',
      postId: 2,
    },
    {
      img: "/images/foodstuff/1525935820189385.jpg",
      title: "5KG吴王贡米(红)/50",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '吴王贡米',
      postId: 3,
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