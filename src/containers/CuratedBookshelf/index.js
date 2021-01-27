import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import books from '../../assets/images/bookshelf.svg';
import back from '../../assets/images/back-icon.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BookCard from '../../components/BooksCard';
import { withGoogleSheets } from 'react-db-google-sheets';
import PropTypes from 'prop-types';
import HorizontalScroll from 'react-scroll-horizontal'
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
  constructor(props) {
    super(props);

    this.state = {
      visibleAll: 9
    }
  }

  loadmore = () => {
    this.setState({
      visibleAll: this.state.visibleAll + 9
    })
  }
  
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
                          
                    </div>
                </div>

              {window.innerWidth>414 ?
               <div className='below-header'>
                <div className='header-complete-body'>
                  <div class='left-body-header'>
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
                  </div>
                      
                  <div className='image-books'>
                      <img src={books} alt='book-shelf'
                      className='book-shelf-image'
                      />
                  </div>                            
                </div>
              </div>
              :
              <div className='below-header'>
                <div className='header-complete-body'>
                  <div className='back-container'>
                      <img src={back} alt='back' className='back-button' />
                    <div>
                      <p className='back-button-book'>Book</p>
                      <p className='resources'>Resources</p>
                    </div>
                  </div>
                  <div className='image-books'>
                      <img src={books} alt='book-shelf'
                      className='book-shelf-image'
                      />
                  </div> 
                  <div class='left-body-header'>
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
                  </div>                     
                </div>
              </div>
              }

                <div className='recommended-by'>
                    <div className='list-container'>
                        <p className='text-recommended'>Books Recommended By</p>
                         
                      <div class="container-fluid"> 
                          <div class="row">
                          {this.props.db &&
                              this.props.db.Mentors &&
                              this.props.db.Mentors
                              .slice(0, this.state.visibleAll)
                              .map((data) => {
                                return(                                    
                                    <a href={`/mentor/${data.Name}`} >
                                      <div className='images-list-expert'>
                                              <div className='images' 
                                              style={{backgroundImage: "url("+`${data.Image}`+")", 
                                              backgroundRepeat:'no-repeat'}}>
                                                <div className='mentor-details'>
                                                  <p className='expert-name'>{data.Name}</p>
                                                  <p className='content-desc'>{data.Title}</p>
                                                  {data.Tagline? 
                                                  <p className='text-appear'>{data.Tagline}, </p> :
                                                  null}
                                                  <p className='text-appear'>{data.MentorDescription}</p>
                                                </div>
                                              </div>                          
                                      </div>
                                    </a>
                                    );
                              })}
                        </div>
                    </div>
                    
                    <div className='load-more-btn-container'>
                      <button 
                      onClick={this.loadmore} 
                      className='load-more'>
                        Load more
                      </button>
                    </div>

            <p className='crousal-title'>Most Recommended Books</p>
              <div className='crousal'>
                     
                {window.innerWidth < 768 ? (
                  
                  this.props.db &&
                  this.props.db.Books &&
                  this.props.db.Books
                
                  .map((data, index) => {
                    return (
                      <div className='item book-container-mobile' key={index}>
                          <BookCard
                            title={data.Title}
                            author={data.Author}
                            cardImg={data.Image}
                            rating={data.GlassdoorRatings}
                          />                        
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
                            <div className='top-space'>
                              <BookCard
                                title={data.Title}
                              author={data.Author}
                              cardImg={data.Image}
                              rating={data.GlassdoorRatings}
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


 