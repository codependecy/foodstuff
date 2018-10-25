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
    var posts_content = [
      {
        title: "健康生活实惠系列",
        imgone: "/images/foodstuff/1525934959106314.jpg",
        textone: "20KG泰香米/92.00",
        txtone: '泰香米',
        imgtwo: "/images/foodstuff/1525935747699575.jpg",
        texttwo: "15KG小泰香/70.00",
        txttwo: '小泰香',
        imgthree: "/images/foodstuff/1525935770208642.jpg",
        textthree: "10KG茉莉香米/46.00",
        txtthree: '茉莉香米',
        postId: 0,
      },
      {
        title: "饭堂餐饮特惠系列",
        imgone: "/images/foodstuff/1525934982784357.jpg",
        textone: "20kg年年红/74.00",
        txtone: '年年红',
        imgtwo: "/images/foodstuff/1525935162584080.jpg",
        texttwo: "20KG红华苑/76.00",
        txttwo: '红华苑',
        imgthree: "/images/foodstuff/1525934880524175.jpg",
        textthree: "25KG山水农夫/100",
        txtthree: '山水农夫',
        postId: 1,
      },
      {
        title: "品质生活臻品系列",
        imgone: "/images/foodstuff/thumb_20180510150504_592.jpg",
        textone: "5KG软香粘/50.00",
        txtone: '软香粘',
        imgtwo: "/images/foodstuff/thumb_20180510150359_327.jpg",
        texttwo: "5KG农家香/50.00",
        txttwo: '农家香',
        imgthree: "/images/foodstuff/1525935797505573.jpg",
        textthree: "5KG吴王贡米/50.00",
        txtthree: '吴王贡米',
        postId: 2,
      },
      {
        title: "小康生活精品系列",
        imgone: "/images/foodstuff/1525935595120312.jpg",
        textone: "15KG一品稻花香/75",
        txtone: '一品稻花香',
        imgtwo: "/images/foodstuff/1525935722904653.jpg",
        texttwo: "10KG鲜香米/60.00",
        txttwo: '鲜香米',
        imgthree: "/images/foodstuff/1525935623330085.jpg",
        textthree: "15KG全家福/75.00",
        txtthree: '全家福',
        postId: 3,
      },
      {
        title: "杂粮礼盒定制系列",
        imgone: "/images/foodstuff/20181025211901 (1).jpg",
        textone: "350g黑豆/5.00",
        txtone: '黑豆',
        imgtwo: "/images/foodstuff/20181025211901 (2).jpg",
        texttwo: "350g燕麦/5.00",
        txttwo: '燕麦',
        imgthree: "/images/foodstuff/20181025211901 (3).jpg",
        textthree: "350g黑米/5.00",
        txtthree: '黑米',
        postId: 4,
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
    var postText = event.currentTarget.dataset.text;
    var postImg = event.currentTarget.dataset.img;
    var that = this
    wx.navigateTo({
      url: '../food-info/food-info?TextData=' + postText + '&ImgData=' + postImg,
    })
  },
  listPostTap:function(event){
    var postId=event.currentTarget.dataset.postid;
    if(postId==0){
      wx.navigateTo({
        url: '../food-list-three/food-list-three',
        })
    }
    else if (postId == 1){
      wx.navigateTo({
        url: '../food-list-one/food-list-one',
        })
    }
    else if (postId == 2) {
      wx.navigateTo({
        url: '../food-list-four/food-list-four',
      })
    }
    else if (postId == 3){
      wx.navigateTo({
        url: '../food-list-two/food-list-two',
      })
    }
    else{
      wx.navigateTo({
        url: '../food-list-five/food-list-five',
      })
    }
  }
})