const Redux = require("./../../libs/redux/redux.js");
const combineReducers = Redux.combineReducers;
const initState = require("./../initState.js");

let pageShowMessage = (state = initState.pageShowMessage, action) => {
    // console.log(action.type);
    switch (action.type) {
        case "SHOW_INDEX":
            return "this in index page";
        case "SHOW_TEST":
            return "this in test page";
        default:
            return state;
    };
}

const rootReducers = combineReducers({
    pageShowMessage
})
module.exports = rootReducers;