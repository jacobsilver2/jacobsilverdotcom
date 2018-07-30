//! Dependencies
import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
//! CSS
import classes from './App.css';
//! Components
import Main from './containers/Main/Main'
import Layout from './hoc/Layout/layout'
import Logout from './containers/Auth/Logout/Logout'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
//! Actions
import * as actions from './store/actions/index';

//! ─── LAZY LOADING COMPONENTS ────────────────────────────────────────────────────
const asyncAuth = asyncComponent( () => {
  return import ('./containers/Auth/Auth')
})


//! ─── MAIN ───────────────────────────────────────────────────────────────────────

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {

    //all routes which don't require user to be logged in
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth}/>
        <Route path="/" exact component={Main}/>
        {/* if none of these routes are found, ie if user tries to go to a route he/she doesn't have access to, they are redirected to the root page */}
        <Redirect to="/"/>
      </Switch>
    )

    // all routes available to authenticated users
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout}/>
          <Route path="/auth" component={asyncAuth}/>
          <Route path="/" exact component={Main}/>
          <Redirect to="/"/>
        </Switch>
      )
    }

    return (
      <div className={classes.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

//! ─── REDUX ──────────────────────────────────────────────────────────────────────
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

 //! ─── EXPORT ─────────────────────────────────────────────────────────────────────
//using withRouter allows react router to work with connect
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
