/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import './config/ReactotronConfig'; // precisa ser importado aqui
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { history } from './services/history';
import { store, persistor } from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
