import React, { useState } from 'react';

// redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

const AddPost = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-dark'>
        <h3
          style={{
            color: 'white',
          }}
        >
          Say Something...
        </h3>
      </div>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          className='p-1'
          name='text'
          id=''
          required
          cols='30'
          rows='5'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Create a post'
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

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(AddPost);
