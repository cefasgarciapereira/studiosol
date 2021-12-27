import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Home } from './pages'
import { Provider } from 'react-redux'
import store from '@/redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
