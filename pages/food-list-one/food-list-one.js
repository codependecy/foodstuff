Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var posts_content = [{
        img: "/images/foodstuff/1525934982784357.jpg",
        title: "20kg年年红/74.00",
        info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
        txt: '年年红',
        postId: 0,
      },
      {
        img: "/images/foodstuff/1525935162584080.jpg",
        title: "20KG红华苑/76.00",
        info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
        txt: '红华苑',
        postId: 1,
      },
      {
        img: "/images/foodstuff/1525934880524175.jpg",
        title: "25KG山水农夫/100",
        info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
        txt: '山水农夫',
        postId: 2,
      },
      {
        img: "/images/foodstuff/20180904173533.jpg",
        title: "20kg香籼绿/78.00",
        info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
        txt: '香籼绿',
        postId: 3,
      },
      {
        img: "/images/foodstuff/1525935251660082.jpg",
        title: "20KG韵之香/80.00",
        info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
        txt: '韵之香',
        postId: 4,
      },
      {
        img: "/images/foodstuff/1525935382973145.jpg",
        title: "25KG合家团圆/100",
        info: '“华苑”牌系列大米原料精选国家农业部门认定优质稻种，高标准全生态种植，低温绿色储藏，高科技无添加研磨。米质晶莹剔透，米饭香软可口，回味悠长，营养丰富。',
        txt: '合家团圆',
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
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

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