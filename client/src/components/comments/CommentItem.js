import React from 'react';

// redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeComment } from '../../actions/postActions';

// react-router
import { Link } from 'react-router-dom';

//helpers
import Moment from 'react-moment';

const CommentItem = ({
  postId,
  comment: { _id, text, avatar, user, date, name },
  auth,
  removeComment,
}) => {
  return (
    <div className='post p-1 ml-2 mr-2 comment-border'>
      <div>
        <Link to={`/profile/${user}`}>
          <img
            src={avatar}
            alt='avatar'
            style={{
              marginTop: '1rem',
              borderRadius: '50%',
            }}
          />
        </Link>
        <h3 className='text-light'> {name}</h3>
      </div>

      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posten On <Moment format='YYYY/MM/DD'>{date}</Moment>{' '}
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
            className='btn btn-danger m-2'
            onClick={() => removeComment(postId, _id)}
            type='button'
          >
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { removeComment })(CommentItem);
