//app.js

import { createStore } from "./libs/redux/redux.js";

const WeAppRedux = require('./libs/redux/wechat-weapp-redux.js');
const { Provider } = WeAppRedux;

function addTodo() {
    return {
        type: "adddTodo",
        text: "add"
    }
}

const store = createStore(addTodo)

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