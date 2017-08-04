// list.js
var datas = {
  kindsList: [
    {
      id: 111,
      name: '春日密林'
    },
    {
      id: 112,
      name: '夏日密林'
    },
    {
      id: 113,
      name: '秋日密林'
    },
    {
      id: 114,
      name: '冬日密林'
    },
    {
      id: 115,
      name: '全季密林'
    }
  ],
  kinds: [],
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

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    kindsList:[],
    list: [],
    isLoading: false,
    isLoaded: false,
    isNoFind: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.showLoading({
      title: '加载中',
    })

    var kinds = Number(options.kind);
 
    this.setData({
      type: Number(options.type),
      kindsList: datas.kindsList.map(item => { item.checked = false; if (kinds === item.id) { item.checked = true}; return item}),
      //list: datas.list,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var that = this
    setTimeout(function () {
      that.setData({
        list: datas.list
      })
      wx.hideLoading()
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  //事件处理函数
  listTap: function (e) {
    wx.navigateTo({
      url: `../detail/detail?id=${e.currentTarget.dataset.id}`
    })
  },
  
  // 改变大分类
  changeType: function (e) {
    var _type = this.data.type === Number(e.currentTarget.dataset.key) ? 0 : Number(e.currentTarget.dataset.key)

    this.setData({
      type: _type
    })
  },

  // 改变小分类
  listenCheckboxChange: function (e) {
    var arr = e.detail.value.map( item => Number(item));
    var obj = this.data.kindsList;
    console.log(arr)
    obj.forEach( item => {
      if ( arr.includes(item.id) ) {
        item.checked = true;
      } else { 
        item.checked = false;
      }
    })
    
    this.setData({
      kindsList: obj
    })
    console.log(obj)
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
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if( this.data.isLoaded ) {
      return ;
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})