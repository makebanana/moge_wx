// collection.js\
var datas = {
  list: [
    {
      "id": 2001,
      "name": "xxx",
      "url": "http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613WfWPEcyfc7.jpg"
    },
    {
      "id": 2002,
      "name": "xxx",
      "url": "http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613XGXcdwQSmD.jpg"
    },
    {
      "id": 2003,
      "name": "xxx",
      "url": "http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613j2dwHmYpZP.jpg"
    },
    {
      "id": 2004,
      "name": "xxx",
      "url": "http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613GnD6KyBAKb.jpg"
    },
    {
      "id": 2005,
      "name": "xxx",
      "url": "http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613sPTzbzzSXy.jpg"
    },
    {
      "id": 2006,
      "name": "xxx",
      "url": "http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613yFWjiEM53M.jpg"
    }
  ]
}
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isLoading: false,
    isLoaded: false,
    isLoged: false,
    isNoLoged: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    console.log(app.globalData.userInfo)
    //调用应用实例的方法获取全局数据
    app.getUserInfo(
      function (userInfo) {
        //更新数据
        that.setData({
          isLoged: true
        })
      },
      function (userInfo) {
        //更新数据
        that.setData({
          isNoLoged: true
        })
      }
    )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      //list: datas.list,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  // 改变大分类
  changeType: function (e) {
    var _type = this.data.type === Number(e.currentTarget.dataset.key) ? 0 : Number(e.currentTarget.dataset.key)

    this.setData({
      type: _type
    })
  },
  //事件处理函数
  listTap: function (e) {
    wx.navigateTo({
      url: `../detail/detail?id=${e.currentTarget.dataset.id}`
    })
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