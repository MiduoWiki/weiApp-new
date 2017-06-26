//index.js
//获取应用实例
const { connect } = require("./../../libs/redux/wechat-weapp-redux.js");
const {} = require("./../../store/action.js");
var app = getApp();

const mapStateToData = state => ({

});

const mapDispatchToPage = dispatch => ({

});

const pageConfig = {
    data: {},
    //事件处理函数
    onLoad() {

    },
    onReady() {

    },
    onShow() {

    },
    onHide() {

    },
    onUnload() {

    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
    onShareAppMessage() {

    }
};

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);
Page(nextPageConfig);