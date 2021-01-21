import React, { Component } from 'react';
import './styles.scss';

export default class Reviews extends Component{
    render(){
        const {mentorImage, mentorName,reviewdetail} = this.props
        return(
            <div className='review-card'>
             <div className='title'>
                <img 
                src={mentorImage}
                alt="mentor"
                className="mentor-icon"
                />
                <p className='name'>{mentorName}'s review</p>
             </div>
             <p className='reviewdetail'>{reviewdetail}</p>

             <button className='all-recommendation'>
                 See all recommendations
             </button>
            </div>
        )
    }
}