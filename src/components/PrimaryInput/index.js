import React from 'react';
import className from 'classnames';

// Style
import './styles.scss';

const PrimaryInput = (props) => {
  return (
    <div className='input-container-style'>
      {props.isLeftIconActive && (
        <div className='icon-style'>{props.iconLeft}</div>
      )}
      <input
        className={`input-item ${className ? props.className : ''} ${
          props.rightContent ? 'input-right-style' : ''
        } ${props.isActive ? '' : 'btn-inactive'} ${
          props.errorText ? 'btn-error' : ''
        }`}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        //style={props.style}
        //maxLength={props.maxLength ? props.maxLength : null}
        autoFocus={props.autoFocus}
        value={props.value}
        disabled={!props.isActive}
        onChange={props.onChange}
      />

      {props.errorText && (
        <div className='input-label error'>{props.errorText}</div>
      )}

      {props.isRightSection === props.rightContent ? null : (
        <div className='right-icon-style' onClick={props.clickIconHandler}>
          {props.rightContent}
        </div>
      )}
    </div>
  );
};

export default PrimaryInput;
