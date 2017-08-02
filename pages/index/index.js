//index.js

var datas = {
  "code": 200,
  "message": "请求成功",
  "banner": [
    {
      "id": 1001,
      "type": 1,
      "url": "http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613EiEKrMi3yj.jpg"
    },
    {
      "id": 1002,
      "type": 1,
      "url": "http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613M3jepFieTn.jpg"
    }, {
      "id": 1002,
      "type": 2,
      "url": "http://img.ojutao.com/1501077509912ccaf2512-60f3-489d-b4f5-79dbafe59613NzNZfGfxMx.jpg"
    }
  ],
  "picList": [
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
  ],
  "userList": [],
}
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    banner:[],
    piclist:[],
    useList:[],
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function(){
    var that = this
    that.setData({
      banner: datas.banner,
      picList: datas.picList,
      useList: datas.useList
    })
  },
  //拨打电话
  makeCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  //打开地图
  openMap: function () {
    wx.openLocation({
      name: '墨阁摄影',
      address: '诸暨市暨阳街道红旗路75号(柠檬夜市)',
      latitude: 29.71382,
      longitude: 120.23361,
      scale: 15
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onShareAppMessage: function (res) {
    return {
      title: '墨阁摄影',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
