//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb,ecb){
    var that = this
    if(this.globalData.userInfo){
      //检查是否过期
      wx.checkSession({
        success: function () {
          typeof cb == "function" && cb(that.globalData.userInfo)
          },
        fail: function () {
          //调用登录接口
          wx.login({
            success: function () {
              wx.getUserInfo({
                success: function (res) {
                  that.globalData.userInfo = res.userInfo
                  typeof cb == "function" && cb(that.globalData.userInfo)
                },
                fail: function (e) {
                  console.log(e);
                  typeof ecb == "function" && ecb(that.globalData.userInfo)
                }
              })
            }
          })
        }
      })
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            },
            fail: function (e) {
              console.log(e);
              typeof ecb == "function" && ecb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})