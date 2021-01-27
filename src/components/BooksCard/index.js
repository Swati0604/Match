import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import './styles.scss';

class BooksCard extends Component {
  render() {
    const {
      title,
      author,
      cardImg,
      Guides,
      rating
    } = this.props;
    return (
      <div className='recommended-books-cards-style'>
        <a  href={`/books/${title}`}
          className={Guides ? 'Guides' : 'home-page-height'}>
          <div className='image-container'>
            <img
              alt='books'
              className='company-img img-fluid'
              src={cardImg}
            />
          </div>       
        </a> 
         

        <div className='book-desc'>
              <p className='title'>{title}</p>
              <p className='author-name'>by {author}</p>
              <ReactStars
              count={5}
              value={rating}
              size={24}
              activeColor="#ffd700"
              classNames='stars-review'
            />
          </div>        
        
      </div>
    );
  }
}

export default BooksCard;
