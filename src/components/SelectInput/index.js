import React from 'react';

//icons
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

//styles
import './styles.scss';

function SelectPrimary(props) {
  return (
    <div className='select-input'>
      <div className='filter-desc'>
        <p className='label'>{props.label}</p>
        {props.selectedValue && (
          <button className='clear' onClick={props.onClick}>
            Clear
          </button>
        )}
      </div>

      <div
        className={props.listOpen ? 'list-header focus' : 'list-header'}
        onClick={props.toggleList}
      >
        <span className={`${props.selectedValue ? 'header-title' : 'title'}`}>
          {props.selectedValue ? props.selectedValue : props.title}
        </span>
        {!props.listOpen ? (
          <FiChevronDown className='dropdown-icons' />
        ) : (
          <FiChevronUp className='dropdown-icons' />
        )}
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
