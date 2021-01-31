import React from 'react';
import './styles.scss';

const PrimaryButton = (props) => {
  return (
    <div className='primary-button-container'>
      <a href={props.href} className='primary-button'>
        {props.title}
      </a>
    </div>
  );
};

export default PrimaryButton;
