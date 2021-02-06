import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import './styles.scss';

class BooksCard extends Component {
  truncate = (str) => {
    return str.length > 20 ? str.substring(0, 27) + '...' : str;
  };
  render() {
    const { title, author, cardImg, Guides, rating } = this.props;
    return (
      <div className='recommended-books-cards-style'>
        <a
          href={`/books/${title}`}
          className={Guides ? 'Guides' : 'home-page-height'}
        >
          <div className='image-container'>
            <img alt='books' className='company-img img-fluid' src={cardImg} />
          </div>
        </a>

        <div className='book-desc'>
          <p className='title'>{this.truncate(title)}</p>
          <p className='author-name'>by {author}</p>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            color='#D6D6D6'
            activeColor='#F3C117'
            classNames='stars-review'
            edit='false'
          />
        </div>
      </div>
    );
  }
}

export default BooksCard;
