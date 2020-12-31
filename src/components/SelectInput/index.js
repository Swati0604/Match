import React, { useState } from 'react';

//icons
import downArrow from '../../assets/images/downArrow.webp';

//styles
import './styles.scss';

function SelectPrimary(props) {
  return (
    <div className='select-input'>

    <div className='filter-desc'>
      <p className='experience'>{props.title}</p>
      <button className='clear'>Clear</button>
    </div>

      <div className='list-header' onClick={props.toggleList}>
        <span className={`${props.selectedValue ? 'header-title' : 'title'}`}>
          {props.selectedValue ? props.selectedValue : 
          <div className='filter-body'>
            <p>{props.title}</p>
            <img src={downArrow}  
            className='chevron'
            />
          </div>}
        </span>
        {/* {!listOpen ? (
          <FiChevronDown className='dropdown-icons' />
        ) : (
          <FiChevronUp className='dropdown-icons' />
        )} */}
      </div>

      {props.listOpen && (
        <ul className='list'>
          {props.list.map((item, index) => (
            <li
              className='list-item'
              key={item.title}
              onClick={() => props.itemSelected(index)}
            >
              {item.title}
              <br />
              <span className='item-info'>{item.listInfo}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectPrimary;
