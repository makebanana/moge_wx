// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    type: 1,
    name: '',
    intro: '',
    pics: [],
    animationData: {},
    isLike: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      type: datas.type,
      name: datas.name,
      intro: datas.intro,
      pics: datas.pics
    })
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

    var animation = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease',
    })
    this.animation = animation
  },
  // 点击喜欢
  changeLike: function () {

    this.animation.scale(.5).step()
    this.animation.scale(1.2).step()
    this.animation.scale(1).step()

    this.setData({
      isLike: !this.data.isLike,
      animationData: this.animation.export()
    })
  },
  // 去列表
  goToList: function (e) {
    wx.navigateTo({
      url: `../list/list?kind=${e.currentTarget.dataset.kind}`
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

var datas = {
  i: 1001,
  type: 1,
  name: '盛夏森林',
  intro: '好看，超级好看看看 超级好看看看 超级好看看看超级好看看看 超级好看看看超级好看看看超级好看看看超级好看看看',
  pics:[
    'http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613WfWPEcyfc7.jpg',
    'http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613XGXcdwQSmD.jpg',
    'http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613j2dwHmYpZP.jpg',
    'http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613GnD6KyBAKb.jpg',
    'http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613sPTzbzzSXy.jpg'
  ]
}