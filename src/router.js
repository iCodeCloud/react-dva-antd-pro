import React from 'react';
import {Router, Route} from 'dva/router';
import IndexPage from './routes/IndexPage';
import User from "./routes/User.js";
import Test from "./routes/Test.js";


function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <Route path="/user" component={User}/>
        <Route path="/test" component={Test}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
