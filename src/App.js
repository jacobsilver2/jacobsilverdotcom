//! Dependencies
import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
//! Components
import Main from './containers/Main/Main'
import Layout from './hoc/Layout/layout'
import Logout from './containers/Auth/Logout/Logout'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import Music from './components/Music/Music';
import Booking from './components/Booking/Booking';
import Coding from './components/Coding/Coding';
import AddShow from './components/Music/AddShow/AddShow';
import Blog from './components/Blog/Blog';
import NewPost from './components/Blog/NewPost/NewPost'
import EditPost from './components/Blog/EditPost/EditPost';
import EditShow from './components/Music/EditShow/EditShow';
import Gigs from './components/Music/Gigs/musicGigs';

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
        <Route path="/coding" component={Coding}/>
        <Route path="/music/gigs" component={Gigs}/>
        <Route path="/music" component={Music}/>
        <Route path="/booking" component={Booking}/>
        <Route path="/blog" component={Blog}/>
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
          <Route path="/coding" component={Coding}/>
          <Route path="/music/addshow" component={AddShow}/>
          <Route path={`/music/:id`} component={EditShow} />
          <Route path="/music" component={Music}/>
          <Route path="/blog/newpost" component={NewPost}/>
          <Route path={`/blog/:id`} component={EditPost}/>  
          <Route path="/blog" component={Blog}/>
          <Route path="/booking" component={Booking}/>
          <Route path="/" exact component={Main}/>
          <Redirect to="/"/>
        </Switch>
      )
    }

    return (
      <div>
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
