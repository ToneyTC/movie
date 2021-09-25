import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

// 引入页面
import City from '../../src/src/demo/src/views/City'
import Login from '../../src/src/demo/src/views/Login'
import Movie from '../../src/src/demo/src/views/Movie'
import Nav from '../../src/src/demo/src/views/Nav'
import Register from '../../src/src/demo/src/views/Register'
import Seat from '../../src/src/demo/src/views/Seat'
import Err404 from '../../src/src/demo/src/views/Err404'

export default function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/city" component={City} />
          <Route path="/movie" component={Movie} />
          <Route path="/nav" component={Nav} />
          <Route path="/register" component={Register} />
          <Route path="/seat" component={Seat} />
          <Route component={Err404} />
        </Switch>
      </HashRouter>
    </div>
  )
}
