const Redux = require("./../../libs/redux/redux.js");
const combineReducers = Redux.combineReducers;
const initState = require("./../initState.js");

let initRucers = (state = [], action) => {
    // console.log(action.type);
    return state;
}

const rootReducers = combineReducers({
    initRucers
})
module.exports = rootReducers;