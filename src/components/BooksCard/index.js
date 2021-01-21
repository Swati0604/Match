import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import './styles.scss';

class BooksCard extends Component {
  render() {
    const {
      title,
      author,
      cardImg,
      Guides
    } = this.props;
    return (
      <div className='recommended-books-cards-style'>
        <Link  to={`/books/${title}`}
          className={Guides ? 'Guides' : 'home-page-height'}>
          <div className='image-container'>
            <img
              alt='books'
              className='company-img img-fluid'
              src={cardImg}
            />
          </div>       
        </Link> 
         

        <div className='book-desc'>
              <p className='title'>{title}</p>
              <p className='author-name'>by {author}</p>
              <ReactStars
              count={5}
              value={4.5}
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
