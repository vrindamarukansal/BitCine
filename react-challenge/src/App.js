import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import PostListContainer from './views/PostListContainer'
import SinglePostContainer from './views/SinglePostContainer' 
import {AppBar, Toolbar} from '@material-ui/core'

export default () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <AppBar position='relative' className='mb'>
          <Toolbar/>
        </AppBar>
        <Switch>
          <Route exact path="/" component={PostListContainer} />
          <Route path="/people/:slug" component={SinglePostContainer} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
)
