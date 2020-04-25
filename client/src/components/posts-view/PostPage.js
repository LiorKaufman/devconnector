import React, { Fragment, useEffect } from 'react';

// redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSinglePost } from '../../actions/postActions';

// components
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import CommentForm from '../comments/CommentForm';
import CommentItem from '../comments/CommentItem';

//react-router
import { Link } from 'react-router-dom';

const PostPage = ({ getSinglePost, post: { post, loading }, match }) => {
  useEffect(() => {
    getSinglePost(match.params.id);
  }, [getSinglePost, match]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/posts' className='btn btn-warning m-3'>
        Back to posts
      </Link>
      <div className='container-bg p-3'>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <div className='comments'>
          {post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

PostPage.propTypes = {
  getSinglePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getSinglePost })(PostPage);
