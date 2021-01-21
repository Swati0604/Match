import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import StarRatings from './react-star-ratings';
import './styles.scss';
import apastrophe from '../../assets/images/apostrophe.svg';
import mentor from '../../assets/images/testmentor.svg';
import ReactStars from "react-rating-stars-component";

export default class Booksuggestions extends Component{
    render(){
        const {mentorName,bookImage, booktitle, author, rating,bookdesc,review, topbook} = this.props
        return(
            <div>
                

                <div className='book-list-container'>
                    <div className='image-conatiner'>
                        <img src={bookImage} 
                        alt='book-suggestion'
                        className='book-image'
                        />
                    </div>
                    <div className='book-desc'>
                            <p className='book-title'>{booktitle}</p>
                            <p className='author'>by {author}</p>
                            <div className='rating-container'>
                                <p className='rating'>GoodReads Ratings </p>
                                <ReactStars
                                count={5}
                                value={4.5}
                                size={24}
                                isHalf={true}
                                a11y={false}
                                activeColor="#ffd700"
                                classNames='stars-reviews'
                                />
                                <p className='rating-number'> {rating}</p>
                                
                            </div>                        
                            <p className='book-description'>{bookdesc}</p>
                            
                           { topbook ? null : <div>
                            <img src={apastrophe} alt='apostrophe'
                            className='apostrophe' />
                            <div className='mentor-review'>
                                <img src={mentor}
                                alt='mentorname'
                                className='mentor-icon'
                                />
                                <p className='mentorName-review'>{mentorName}'s review</p>
                            </div></div>}
                            
                            <p className='review-text'>{review}</p>
                            <div className='links'>
                            
                                <Link to={`/books/${booktitle}`} className='buy-now' >
                                Learn More
                                </Link>     
                                <Link to='/' className='buy-now'>
                                Buy Now
                                </Link>                            
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}