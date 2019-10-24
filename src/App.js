import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import './styles/common.css';

import routes from './routes';
import { store, sagaMiddleware } from './redux/store';
import rootSaga from './redux/saga';

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
