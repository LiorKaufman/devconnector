import React from 'react';

//redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/postActions';

//react-router
import { Link } from 'react-router-dom';
//helpers
import Moment from 'react-moment';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  auth,
  addLike,
  removeLike,
  deletePost,
  showActions,
}) => {
  return (
    <div
      className='post bg-dark p-2 m-2'
      style={{
        borderRadius: '6px',
      }}
    >
      <div>
        <Link to={`/profile/${user}`}>
          <img
            src={avatar}
            alt='avatar'
            className='my-1'
            style={{
              borderRadius: '50%',
            }}
          />
          <h4 className='text-light'> {name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1 '>{text}</p>

        <p className='post-date'>
          Posted on
          <Moment format='YYYY/MM/DD' className='ml-1'>
            {date}
          </Moment>
        </p>

        {showActions && (
          <>
            <button
              type='button'
              className='btn btn-light m-1'
              onClick={() => addLike(_id)}
            >
              <i className='fas fa-thumbs-up' />
              {likes.length > 0 && <span className='ml-1'>{likes.length}</span>}
            </button>
            <button
              type='button'
              className='btn btn-warning m-1'
              onClick={() => removeLike(_id)}
            >
              <i className='fas fa-thumbs-down ' />
            </button>
            <Link to={`/posts/${_id}`} href='' className='btn btn-primary m-1'>
              Discussion
              {comments.length > 0 && (
                <span className='comment-count ml-1'>{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => deletePost(_id)}
              >
                <i className='fas fa-times'></i>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
