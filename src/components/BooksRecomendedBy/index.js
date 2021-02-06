import React, { Component } from 'react';
// Style
import './styles.scss';
export default class recommendedcard extends Component{
    render(){
        const {test} = this.props ;
        return(
            <div>
                <img src={test}
                className='images'
                alt='images'
                />
                <h1>uuu</h1>
            </div>
        )
    }
}