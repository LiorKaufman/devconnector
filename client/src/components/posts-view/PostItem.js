import React from 'react';

//redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//react-router
import { Link } from 'react-router-dom';
//helpers
import Moment from 'react-moment';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  auth,
}) => {
  return (
    <div
      class='post bg-dark p-2 m-2'
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
          {' '}
          Posted on
          <Moment format='YYYY?MM?DD'> {date}</Moment>
        </p>
        <button type='button' className='btn btn-light m-1'>
          <i className='fas fa-thumbs-up' />
          {likes.length > 0 && <span className='ml-1'>{likes.length}</span>}
        </button>
        <button type='button' className='btn btn-warning m-1'>
          <i className='fas fa-thumbs-down ' />
        </button>
        <Link to={`/post/${_id}`} href='' className='btn btn-primary m-1'>
          Discussion
          {comments.length > 0 && (
            <span className='comment-count ml-1'>{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type='button' className='btn btn-danger'>
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PostItem);
