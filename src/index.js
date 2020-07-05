import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

import { PersistGate } from 'redux-persist/lib/integration/react';

// import the two exports from the last code snippet.
import { persistor, store } from './store';
import './index.css';

render(
  <Provider store={store}>
      <PersistGate loading={<></>} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
  document.getElementById('root')
)