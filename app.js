//app.js

const WeAppRedux = require('./libs/redux/wechat-weapp-redux.js');
const { Provider } = WeAppRedux;

const { createStore } = require("./libs/redux/redux.js")
const rootReducers = require("./store/reducers/index.js");
const store = createStore(rootReducers);

App(Provider(store)({
    onLaunch: function(options) {
        // Do something initial when launch.
    },
    onShow: function(options) {
        // Do something when show.
    },
    onHide: function() {
        // Do something when hide.
    },
    onError: function() {

    }
}));