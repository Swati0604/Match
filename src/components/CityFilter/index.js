import React, { Component, useState } from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
//styles
import './styles.scss';
import downArrow from '../../assets/images/downArrow.webp';

//data
function Tabs(){

const data = [
    {
        country:'Bangalore', 
        id: 1
    },
    {
        country:'Mumbai', 
        id: 2
    },
    {
        country:'Hyderabad', 
        id: 3
    },
    {
        country:'Gurgaon', 
        id: 4
    },
    {
        country:'Noida', 
        id: 5
    },
    {
        country:'Delhi', 
        id: 6
    },
    {
        country:'Ahmedabad', 
        id: 7
    }
]
    const [options] = useState(data);

        return(
            <div className='tab-box'>
             <div className='title-filter'>
              <p className='header-city'>Cities</p>
              <button className='clear-filter'>Clear</button>
             </div>

              <div className='multiselect'>
                    <Multiselect 
                    options={options} 
                    displayValue="country" 
                    showCheckbox={true} 
                    placeholder="All Cities"
                    closeIcon="none"
                    style={{ 
                        chips:{background:'transparent', color:'grey'},
                        option: {color: 'grey'},
                        searchBox: {width: 300, borderWidth: 0, height:42, overflow: 'hidden' },
                        inputField: { background: 'transparent', marginLeft:5, width:200},
                        optionContainer: {width: 330, marginTop: 10}
                        }}
                    avoidHighlightFirstOption={true}
                    />
                    <img
                    src={downArrow}
                    className='chevron'
                    />
                </div>
            </div>

        )
    
}

export default Tabs;