import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {store} from './store';
import JournalAPP from '../JournalAPP'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalAPP />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
