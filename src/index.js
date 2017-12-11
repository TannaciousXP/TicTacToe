import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import promise from 'react-promise';

import containers from './containers';
import registerServiceWorker from './registerServiceWorker';
import store from './reducers';
import './styles.css';

const { Welcome } = containers;


const App = () => (
  <Provider store={store}>
    <div className="Main">
      <Welcome />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));

registerServiceWorker();
