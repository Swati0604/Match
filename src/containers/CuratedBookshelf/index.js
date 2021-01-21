import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import books from '../../assets/images/bookshelf.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BookCard from '../../components/BooksCard';
import { withGoogleSheets } from 'react-db-google-sheets';
import PropTypes from 'prop-types';
// Style
import './styles.scss';

const options = {
    margin: 30,
    nav: true,
    dots: false,
    autoplay: false,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
class Bookshelf extends Component{
  
    render(){
        return(
            <div className='curated-books-page' ref={this.myRef}>
                <Helmet>
                    <meta
                        charSet='utf-8'
                        name='description'
                        content='Match By Design Sundays'
                    />
                    <title>Match By Design Sundays</title>
                </Helmet>

                <div className='header-top-section'>
                    <div className='header-style'>
                        <Header />
                          <div className='header-complete-body'>
                            <div className='top-header-body'>
                                <div className='top-header-text'>
                                  <div className='breadcrumbs-body'>
                                    <Link to='/' className='breadcrumbs'>
                                      Home/
                                    </Link>
                                    <p className='breadcrumbs'>Mentor/ Book Recommendation</p>
                                  </div>
                                    <p>Curated Bookshelf for Designers</p>
                                </div>
                                <p className='header-desc'>from the best designers, and design leaders you look
                                up to.</p>
                                <Link to='/topbooks' className='button-recommendations'>
                                See Top 100 book recommendations
                                </Link>
                            </div>

                      
                            <div className='image-books'>
                                <img src={books} alt='book-shelf'
                                className='book-shelf-image'
                                />
                            </div>
                            
                          </div>
                    </div>
                </div>

                <div className='recommended-by'>
                    <div className='list-container'>
                        <p className='text-recommended'>Books Recommended By</p>
                        {
                          this.props.db &&
                          this.props.db.Mentors &&
                          this.props.db.Mentors.map((data, index) => {
                              return(
                                <Link to={`/mentor/${data.Name}`} >
                                  <div className='images-list-expert'>
                                          <div className='images'>
                                              <p className='expert-name'>{data.Name}</p>
                                              <p className='content-desc'>{data.Title}</p>
                                              <p className='text-appear'>{data.Tagline}, {data.MentorDescription}</p>
                                          </div>                          
                                  </div>
                                </Link>)
                          })}

            <p className='crousal-title'>Most Recommended Books</p>
              <div className='crousal'>
                {window.innerWidth < 768 ? (
                  this.props.db &&
                  this.props.db.Books &&
                  this.props.db.Books.map((data, index) => {
                    return (
                      <div className='item' key={index}>
                        <div className='top-space'>
                          <BookCard
                            title={data.Title}
                            author={data.Author}
                            cardImg={data.Image}
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <OwlCarousel className='owl-theme' {...options}>
                    {this.props.db &&
                      this.props.db.Books &&
                      this.props.db.Books.map((data, index) => {
                        return (
                          <div  key={index}>
                            <div >
                              <BookCard
                                title={data.Title}
                              author={data.Author}
                              cardImg={data.Image}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </OwlCarousel>
                )}
              </div>

                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

Bookshelf.propTypes = {
    db: PropTypes.shape({
      Sheet1: PropTypes.arrayOf(PropTypes.object),
    }),
  };
  
  export default withGoogleSheets(['Sheet1', 'Guide', 'Mentors', 'Books'])(Bookshelf);