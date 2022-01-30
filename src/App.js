import React, {Component, Fragment} from 'react';
import Header from "./common/header";
import {GlobalStyle} from "./style";
import {IconStyle} from "./statics/iconfont/iconfont";
import store from "./store";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Write from "./pages/write";
import Login from "./pages/login"
import {Provider} from "react-redux";


function App() {
  return (
      <React.Fragment>
          <Provider store={store}>
          <GlobalStyle/>
        <IconStyle/>


            <BrowserRouter>
                <div>
                <Header/>

                <Route path = '/' exact  component={Home} ></Route>
                <Route path = '/login' exact  component={Login} ></Route>
                <Route path='/write' exact component={Write}></Route>
                <Route path='/detail/:id' exact component={Detail} ></Route>
                </div>
            </BrowserRouter>




      </Provider>
      </React.Fragment>

  );
}

export default App;
