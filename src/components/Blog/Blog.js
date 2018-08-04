import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Blog.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import Post from './Post/post'

class Blog extends Component {
  
  componentDidMount() {
    this.props.onFetchPosts();
  }

  render() {
    console.log(this.props)
    let posts = <Spinner />
    if (!this.props.loading) {
      posts = this.props.posts.map(post => <Post key={post.id} title={post.title} content={post.content}/>)
    }
    return (
      <div className={classes.Container}>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.blog.posts,
    loading: state.blog.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(actions.getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);