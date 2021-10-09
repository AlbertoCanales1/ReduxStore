import { combinedReducers } from redux;
import home from './home_reducer';
import shop from './shop_reducer.js'

const rootReducer = combinedReducers ({
    home, shop
})

export default rootReducer;