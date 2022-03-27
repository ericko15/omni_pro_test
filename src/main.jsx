import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './router'

const App = () => (
  <>
    <Router/>
  </>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
