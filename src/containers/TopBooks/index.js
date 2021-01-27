import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header';
import Footer from '../../components/footer';
import mentor from '../../assets/images/testmentor.svg';
import { withGoogleSheets } from 'react-db-google-sheets';
import PropTypes from 'prop-types';  
import MentorBookChoice from '../../components/MentorBookChoice';
import { Link } from 'react-router-dom';
import './styles.scss';

class TopBooks extends Component{
    render(){
        return(
            <div className='top-books-page' ref={this.myRef}>
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
                        <div className='books-container-body'>
                            <div className='top-header-books'>
                                 
                                <div className='top-header-text'>
                                <div className='breadcrumbs-body'>
                                        <Link to='/' className='breadcrumbs'>
                                        Home/
                                        </Link>
                                        <p className='breadcrumbs'> Book Recommendation/ Top 100</p>
                                </div> 
                                        <p>Top 100 Books suggested by designers</p>
                                </div>
                                <p className='description-text'>
                                    from the best designers, and design leaders you look up to.
                                </p>
                            </div>
                        </div>
                        {
                          this.props.db &&
                          this.props.db.Books &&
                          this.props.db.Books.map(
                            (data, index) =>{
                            return (
                        <div className='top-books'>
                        <MentorBookChoice  
                               bookImage={data.Image}
                               booktitle={data.Title}
                               author={data.Author}
                               rating={data.GlassdoorRatings} 
                               bookdesc={data.Description}
                               ratingnumber={data.NumberofRatings}
                               mentorImage={mentor}   
                               topbook={'topbooks'}                            
                               />
                        </div>)})}

                    </div>
                    <Footer />
                </div>
            </div> 
        )
    }
}

TopBooks.propTypes = {
    db: PropTypes.shape({
      Sheet1: PropTypes.arrayOf(PropTypes.object),
    }),
  };
  
  export default withGoogleSheets(['Sheet1', 'Guide', 'Books', 'Mentors'])(TopBooks);