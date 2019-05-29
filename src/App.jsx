import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux';
import Home from './page/Home/index.jsx';
import MakeUp from './page/MakeUp/index.jsx';
import { GlobalStyle } from './style';
import { IconFont } from './assets/iconfont/iconfont';
import store from './store/store.js';
import '../node_modules/antd/dist/antd.css';
import { BrowserRouter, Route } from "react-router-dom";
import Info from './page/Info/index.jsx';
import Comment from './page/Comment/index.jsx';
import Cart from './page/Cart/index.jsx';
import Mine from './page/Mine/index.jsx';
import Search from './page/Search/index.jsx';

class App extends PureComponent{
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconFont />
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/makeup" exact component={MakeUp}></Route>
            <Route path="/info" exact component={Info}></Route>
            <Route path="/comment" exact component={Comment}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/mine" exact component={Mine}></Route>
            <Route path="/search" exact component={Search}></Route>
          </BrowserRouter>
           {/* <Home></Home> */}
        </Provider>
      </Fragment>
      
    );
  }
}

export default App;