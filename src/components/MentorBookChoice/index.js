import React, { Component } from 'react';

//Custom Component
import ReactStars from 'react-rating-stars-component';

//images
import apastrophe from '../../assets/images/apostrophe.svg';

//Styles
import './styles.scss';

export default class Booksuggestions extends Component {
  render() {
    const {
      mentorName,
      bookImage,
      ratingnumber,
      booktitle,
      author,
      rating,
      bookdesc,
      mentorImage,
      book1,
      book2,
      book3,
      book4,
      book5,
      review1,
      review2,
      review3,
      review4,
      review5,
      book6,
      review6,
    } = this.props;
    return (
      <div>
        <div className='book-list-container'>
          <div className='image-conatiner'>
            <img src={bookImage} alt='book-suggestion' className='book-image' />
          </div>
          <div className='book-desc'>
            <p className='book-title'>{booktitle}</p>
            <p className='author'>by {author}</p>
            <div className='rating-container'>
              <p className='rating'>Goodreads Ratings </p>
              <ReactStars
                count={5}
                value={rating}
                size={24}
                isHalf={true}
                a11y={false}
                color='#D6D6D6'
                activeColor='#F3C117'
                classNames='stars-reviews'
              />

              <p className='rating-number'>
                {' '}
                {rating} ({ratingnumber} Ratings)
              </p>
            </div>

            <p className='book-description'>{bookdesc}</p>

            <div className='rating-container buttons top-books'>
              <a className='buy-now'>Buy Now</a>

              <a href={`/books/${booktitle}`} className='learn-more'>
                Learn More
              </a>
            </div>

            {(review1 ||
              review2 ||
              review3 ||
              review4 ||
              review5 ||
              review6) && (
              <div>
                <img src={apastrophe} alt='apostrophe' className='apostrophe' />
                <div className='mentor-review'>
                  <img
                    src={mentorImage}
                    alt='mentorname'
                    className='mentor-icon'
                  />
                  <p className='mentorName-review'>{mentorName}'s review</p>
                </div>
              </div>
            )}

            {book1 === booktitle ? (
              <p className='review-text'>{review1}</p>
            ) : (
              [
                book2 === booktitle ? (
                  <p className='review-text'>{review2}</p>
                ) : (
                  [
                    book3 === booktitle ? (
                      <p className='review-text'>{review3}</p>
                    ) : (
                      [
                        book4 === booktitle ? (
                          <p className='review-text'>{review4}</p>
                        ) : (
                          [
                            book5 === booktitle ? (
                              <p className='review-text'>{review5}</p>
                            ) : book6 === booktitle ? (
                              <p className='review-text'>{review6}</p>
                            ) : null,
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            )}
          </div>
        </div>
      </div>
    );
  }
}
