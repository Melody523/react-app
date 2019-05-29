import { combineReducers } from 'redux-immutable';
import Home from '../page/Home/store/reducer';
import MakeUp from '../page/MakeUp/store/reducer';
import Info from '../page/Info/store/reducer';
import Comment from '../page/Comment/store/reducer';
import Cart from '../page/Cart/store/reducer';
import Search from '../page/Search/store/reducer';

export default combineReducers({
    home: Home,
    makeup: MakeUp,
    info: Info,
    comment: Comment,
    cart: Cart,
    search: Search
})