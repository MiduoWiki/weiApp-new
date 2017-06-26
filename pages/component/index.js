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
    data: {
        list: [{
            id: 'view',
            name: '视图容器',
            open: false,
            pages: ['view', 'scroll-view', 'swiper']
        }, {
            id: 'content',
            name: '基础内容',
            open: false,
            pages: ['text', 'icon', 'progress']
        }, {
            id: 'form',
            name: '表单组件',
            open: false,
            pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
        }, {
            id: 'nav',
            name: '导航',
            open: false,
            pages: ['navigator']
        }, {
            id: 'media',
            name: '媒体组件',
            open: false,
            pages: ['image', 'audio', 'video']
        }, {
            id: 'map',
            name: '地图',
            pages: ['map']
        }, {
            id: 'canvas',
            name: '画布',
            pages: ['canvas']
        }]
    },
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