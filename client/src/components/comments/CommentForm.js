import React, { useState } from 'react';

// redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/postActions';

const CommentForm = ({ addComment, postId }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-ligt'>
        <h3>Leave a comment</h3>
      </div>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          className='p-1'
          name='text'
          id=''
          cols='30'
          required
          rows='5'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Write a comment'
          style={{
            display: 'block',
            width: '100%',
          }}
        ></textarea>
        <input type='submit' className='btn btn-dark m-2' value='submit' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
