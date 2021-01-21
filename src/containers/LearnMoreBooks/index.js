import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import RevieCard from '../../components/ReviewsBooks';
import mentor from '../../assets/images/testmentor.svg'; 
import ReactStars from "react-rating-stars-component";
import { withGoogleSheets } from 'react-db-google-sheets';
import PropTypes from 'prop-types';  
// Style
import './styles.scss';

class LearnMore extends Component{
    render(){
        const bookName = this.props.match.params.id;
        return(
            <div className='books-page' ref={this.myRef}>
                <Helmet>
                    <meta
                        charSet='utf-8'
                        name='description'
                        content='Match By Design Sundays'
                    />
                    <title>Match By Design Sundays</title>
                </Helmet>

                <div className='books-top-section'>
                    <div className='header-style-books'>
                        <Header />

                        
                         {
                          this.props.db &&
                          this.props.db.Books &&
                          this.props.db.Books.map(
                            (data, index) =>
                            data.Title === bookName && (
                          <div className='books-container-body'>
                            <div className='top-header-books'>
                           
                                <div>
                                <div className='top-header-text'>
                                    <p>{data.Title}</p>
                                </div>
                                <p className='header-desc'>by {data.Author}</p>
                                <div className='ratings'>
                                <p className='rating-desc'>Goodreads Rating</p>
                                <ReactStars
                                count={5}
                                value={4.5}
                                size={24}
                                isHalf={true}
                                a11y={false}
                                activeColor="#ffd700"
                                classNames='stars-reviews'
                                />
                                <p className='rating-desc'>{data.GlassdoorRatings}</p>
                                </div>
                                <p className='mentor-desc'> {data.Description}</p>
                                <Link to='/' className='buy-now'>Buy Now</Link>
                                <p className='recommended-by'> Recommended by: </p>
                                </div>
                                

                            </div>

                            <div className='image-books'>
                                <img src={data.Image} alt='book-shelf'
                                className='book-shelf-image'
                                />  
                            </div>
                            
                          </div>))}

                          <div className='review-comments'>
                                <p className='recommendation'>Recommendation</p>
                                <div className='card-list'>

                                {
                            this.props.db &&
                            this.props.db.Mentors &&
                            this.props.db.Mentors.map(
                                (data, index) =>
                                data.Book1 === bookName  && (
                                <RevieCard 
                                    className='review-card'
                                    mentorImage={mentor}
                                    mentorName={data.Name}
                                    reviewdetail={data.Review1}
                                />))}
                            </div>
                           </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
LearnMore.propTypes = {
    db: PropTypes.shape({
      Sheet1: PropTypes.arrayOf(PropTypes.object),
    }),
  };
  
  export default withGoogleSheets(['Sheet1', 'Guide', 'Books', 'Mentors'])(LearnMore);