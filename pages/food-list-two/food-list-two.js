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
      img: "/images/foodstuff/1525935188121310.jpg",
      title: "10kg香谷米/80.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '香谷米',
      postId: 0,
    },
    {
      img: "/images/foodstuff/1525935431887598.jpg",
      title: "10KG福满堂/60.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '福满堂',
      postId: 1,
    },
    {
      img: "/images/foodstuff/1525935722904653.jpg",
      title: "10KG鲜香米/50.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '鲜香米',
      postId: 2,
    },
    {
      img: "/images/foodstuff/1525935623330085.jpg",
      title: "15kg全家福/75.00",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '全家福',
      postId: 3,
    },
    {
      img: "/images/foodstuff/1525935595120312.jpg",
      title: "15KG一品稻花香/75",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '一品稻花香',
      postId: 4,
    },
    {
      img: "/images/foodstuff/1525935041221888.jpg",
      title: "20KG黄华粘/100",
      info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
      txt: '黄华粘',
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