//index.js
//获取应用实例
const { connect } = require("./../../../../libs/redux/wechat-weapp-redux.js");
const {} = require("./../../../../store/action.js");
var app = getApp();

const mapStateToData = state => ({

});

const mapDispatchToPage = dispatch => ({

});

const pageConfig = {
    data: {
        scrollTop: 70,
        scrolltoupperstr: "",
        scrolltolowerstr: ""
    },
    //事件处理函数
    onLoad() {
        console.log("onload", "view");
    },
    onReady() {
        console.log("ready", "view");
    },
    onShow() {
        console.log("onshow", "view");
    },
    onHide() {
        console.log("onhide", "view");
    },
    onUnload() {
        console.log("onUnload", "view");
    },
    onPullDownRefresh() {
        console.log("onPullDownRresh", "view");
    },
    onReachBottom() {
        console.log("onReachBottom", "view");
    },
    scrolltoupperEvent() {
        console.log("scrolltoupperEvent");
        this.setData({
            scrolltoupperstr: "scrolltoupperstr"
        })
    },
    scrolltolowerEvent() {
        console.log("scrolltolowerEvent");
        this.setData({
            scrolltolowerstr: "scrolltolowerstr"
        })
    }
};

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);
Page(nextPageConfig);