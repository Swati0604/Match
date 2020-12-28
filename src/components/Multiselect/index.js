import React, { Component, useState } from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
//styles
import './styles.scss';
import downArrow from '../../assets/images/downArrow.webp';

//data
function Tabs(){

const data = [
    {
        experience:'1-2 Yrs', 
        id: 1
    },
    {
        experience:'2-3 Yrs', 
        id: 2
    },
    {
        experience:'3-4 Yrs', 
        id: 3
    },
    {
        experience:'4-5 Yrs', 
        id: 4
    },
    {
        experience:'5-6 Yrs', 
        id: 3
    },
    {
        experience:'7+ Yrs', 
        id: 3
    }
]
    const [options] = useState(data);

        return(
            <div className='tab-box'>
              

              <div className='multiselect'>
                    <Multiselect 
                    options={options} 
                    displayValue="experience" 
                    showCheckbox={true} 
                    placeholder="All Jobs"
                    closeIcon="none"
                    style={{ 
                        chips:{background:'transparent', color:'grey'},
                        option: {color: 'grey'},
                        searchBox: {width: 300, borderWidth: 0, height:42, overflow: 'hidden' },
                        inputField: { background: 'transparent', marginLeft:5, width:50},
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