import React from 'react';
import './styles.scss';

const ReadButton = (props) => {
  return (
    <div className='button'>
      <a href={`/guides/${props.selectedArticleId}`} className='apply-btn'>
        Read More
      </a>
    </div>
  );
};

export default ReadButton;
