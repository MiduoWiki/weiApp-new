//index.js
//获取应用实例
const { connect } = require("./../../libs/redux/wechat-weapp-redux.js");
const { goTest, goIndex } = require("./../../store/action.js");
var app = getApp();

const mapStateToData = state => ({
    pageShowMessage: state.pageShowMessage
});

const mapDispatchToPage = dispatch => ({
    showIndexMessage: () => { dispatch(goIndex()) },
    showTestMessage: () => { dispatch(goTest()) }
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

    },
    showPageMessage(event) {

        if (event.currentTarget.dataset.page == "index") {
            this.showIndexMessage()
        } else if (event.currentTarget.dataset.page == "test") {
            this.showTestMessage();
        }

    }
};

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);
Page(nextPageConfig);