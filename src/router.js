import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import { routes } from './routes'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      {
        routes.map((route, i) => (
          <Route path={route.path} component={route.component} key={i} />
        ))
      }  
    </Router>
  );
}

export default RouterConfig;
