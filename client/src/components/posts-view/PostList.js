import React, { Fragment, useEffect } from 'react';

// redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';

// components
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import AddPost from './AddPost';

const PostList = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='container-bg'>
        <h1
          className='large'
          style={{
            color: 'white',
          }}
        >
          Posts
        </h1>

        <p className='text-light'>
          <i className='fas fa-user'> Welcome to the community</i>
        </p>
        <AddPost />
        <div className='posts p-2'>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

PostList.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(PostList);
