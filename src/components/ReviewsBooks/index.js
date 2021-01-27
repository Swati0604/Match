import React, { Component } from 'react';
import './styles.scss';

export default class Reviews extends Component{
    render(){
        const {mentorImage, mentorName,reviewdetail1, reviewdetail2, book1, book2,bookName, book3, book4,
        reviewdetail3, reviewdetail4, reviewdetail6, reviewdetail5, book5,book6} = this.props
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
            {book1 === bookName ? 
                 <p className='reviewdetail'>{reviewdetail1}</p> :  
                    [book2 === bookName?
                      <p className='reviewdetail'>{reviewdetail2}</p>:
                       [book3===bookName?
                        <p className='reviewdetail'>{reviewdetail3}</p>:
                         [book4===bookName?
                            <p className='reviewdetail'>{reviewdetail4}</p> : 
                             [book5===bookName?
                                <p className='reviewdetail'>{reviewdetail5}</p>:
                                 [book6===bookName?
                                    <p className='reviewdetail'>{reviewdetail6}</p>:null
                                     ]]]]]}

             <a href={`/mentor/${mentorName}`} className='all-recommendation'>
                 See all recommendations
             </a>
            </div>
        )
    }
}