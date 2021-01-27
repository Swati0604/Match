import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ReviewCard from '../../components/ReviewsBooks';
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
                    </div>
                </div>
                                    
                      <div className='book-page-body'>  
                         {
                          this.props.db &&
                          this.props.db.Books &&
                          this.props.db.Books.map(
                            (data, index) =>
                            data.Title === bookName && (
                          <div className='books-container-body'>
                            <div className='left-header-body'> 
                                <div className='top-header-books'>
                               

                                <div className='top-header-text'>
                                 <div className='breadcrumbs-body'>
                                    <Link to='/' className='breadcrumbs'>
                                      Home/
                                    </Link>
                                    <p className='breadcrumbs'> Books-Recommendation/ {bookName}</p>
                                  </div> 
                                    <p>{data.Title}</p>
                                </div>
                                <p className='header-desc'>by {data.Author}</p>
                                <div className='ratings'>
                                <p className='rating-desc'>Goodreads Rating</p>
                                <ReactStars
                                count={5}
                                value={data.GlassdoorRatings}
                                size={24}
                                isHalf={true}
                                a11y={false}
                                activeColor="#ffd700"
                                classNames='stars-reviews'
                                />
                                <p className='rating-desc'>{data.GlassdoorRatings} ({data.NumberofRatings} Ratings) </p>
                                </div>
                                <p className='mentor-desc'> {data.Description}</p>
                                <Link to='/' className='buy-now'>Buy Now</Link>
                                <div className='recommend-container'>
                                        <p className='recommended-by'> Recommended by: </p>
                                        {
                                this.props.db &&
                                this.props.db.Mentors &&
                                this.props.db.Mentors.map(
                                    (data, index) =>
                                    (data.Book2 === bookName || data.Book1 === bookName || data.Book3 === bookName ||
                                    data.Book4 === bookName || data.Book5 === bookName || data.Book6 === bookName)
                                && (                                      
                                      <img src={`${data.Image}`} alt="icon" className='mentor-icon'/>
                                      
                                 ) )}
                                 </div>
                            </div>
                        </div>

                            <div className='image-books'>
                                <img src={data.Image} alt='book-shelf'
                                className='book-shelf-image'
                                />  
                            </div>
                            
                          </div>))}
                        
                        <div className='recommended-body'>
                          <div className='review-comments'>
                                <p className='recommendation'>Recommendation</p>
                                <div className='card-list'>

                                {
                            this.props.db &&
                            this.props.db.Mentors &&
                            this.props.db.Mentors.map(
                                (data, index) =>
                                (data.Book2 === bookName || data.Book1 === bookName || data.Book3 === bookName ||
                                data.Book4 === bookName || data.Book5 === bookName || data.Book6 === bookName) && (
                                <ReviewCard 
                                    className='review-card'
                                    mentorImage={data.Image}
                                    mentorName={data.Name}
                                    bookName={bookName}
                                    book1={data.Book1}
                                    book2={data.Book2}     
                                    book3={data.Book3}
                                    book4={data.Book4}  
                                    book5={data.Book5}
                                    book6={data.Book6}                                   
                                    reviewdetail1={data.Review1}
                                    reviewdetail2={data.Review2}
                                    reviewdetail3={data.Review3}
                                    reviewdetail4={data.Review4}
                                    reviewdetail5={data.Review5}
                                    reviewdetail6={data.Review6}
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