import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import mentor from '../../assets/images/testmentor.svg';
import twitter from '../../assets/images/twitter.svg';
import insta from '../../assets/images/insta.svg';
import linkedin from '../../assets/images/linkedin.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DesignerCard from '../../components/OtherDesigners';
import MentorBookChoice from '../../components/MentorBookChoice';
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

class MentorsDetails extends Component{
    render(){
      const mentorName = this.props.match.params.id;
        return(
            <div className='mentors-books-page' ref={this.myRef}>
                <Helmet>
                    <meta
                        charSet='utf-8'
                        name='description'
                        content='Match By Design Sundays'
                    />
                    <title>Match By Design Sundays</title>
                </Helmet>

                <div className='mentor-top-section'>
                    <div className='header-style-mentor'>
                        <Header />
                        {
                          this.props.db &&
                          this.props.db.Mentors &&
                          this.props.db.Mentors.map(
                            (data, index) =>
                            data.Name === mentorName && (

                          <div className='mentor-body'>
                            <div className='top-header-mentor'>
                            
                                <div className='top-header-text'>  
                                <div className='breadcrumbs-body'>
                                    <Link to='/' className='breadcrumbs'>
                                      Home/
                                    </Link>
                                    <p className='breadcrumbs'>Mentor/{data.Name}/ Book Recommendation</p>
                                  </div>                              
                                    <p>{data.Name}</p>
                                </div>
                                <p className='header-desc'>{data.Title}</p>
                                <p className='mentor-desc'>{data.MentorDescription}</p>
                                <div className='social-media'>
                                {data.Insta && <a href={`${data.Insta}`}>
                                  <img src={insta}
                                  alt='insta'
                                  className='logos'
                                  />
                                </a>}
                                {data.Twitter && <a href={`${data.Twitter}`}>
                                  <img src={twitter}
                                  alt='insta'
                                  className='logos'
                                  />
                                </a>}
                                {data.Linkedin && <a href={`${data.Linkedin}`}>
                                  <img src={linkedin}
                                  alt='insta'
                                  className='logos'
                                  />
                                </a>}
                                </div>
                            </div>

                            <div className='image-books'>
                                <img src={mentor} alt='book-shelf'
                                className='book-shelf-image'
                                />  
                                <div className='tag-body'>
                                    <p className='mentor-tag'>Mentor</p>
                                </div>
                            </div>
                           
                          </div>)

                           )}
                    </div>
                </div>
                
               
                <div className='books-by-mentor'>
                    <div className='book-list'>
                    <p className='book-suggestion'>6 books recommended by Menank</p>
                    {
                          this.props.db &&
                          this.props.db.Books &&
                          this.props.db.Books.map(
                            (data, index) =>{
                            return (
                           <MentorBookChoice 
                               numberofbook={6}   
                               mentorName={'Menaka'}
                               bookImage={data.Image}
                               booktitle={data.Title}
                               author={data.Author}
                               rating={data.GlassdoorRatings} 
                               ratingnumber={4545}
                               bookdesc={data.Description}
                               mentorImage={mentor}
                               review={' and it was just as amazing the second time around. Def recommend checking it out if you havent yet! #design #ux #Management'}
                           />  )} )}

                            <p className='crousal-title'>See suggestion by other designers</p>
                      <div className='crousal'>
                        {window.innerWidth < 451 ? (
                          this.props.db &&
                          this.props.db.Mentors &&
                          this.props.db.Mentors.map((data, index) => {
                            return (
                              <div className='item' key={index}>
                                <div className='top-space'>
                                  <DesignerCard
                                    title={data.Title}
                                    articleType='Job Application'
                                    readingTime={data.Time}
                                    selectedArticleId={data.Slug}
                                    cardImg={data.Image}
                                  />
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <OwlCarousel className='owl-theme' {...options}>
                            {this.props.db &&
                              this.props.db.Mentors &&
                              this.props.db.Mentors.map((data, index) => {
                                return (
                                  <div  key={index}>
                                    <div >
                                      <DesignerCard
                                        title={data.Title}
                                        selectedArticleId={data.Slug}
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
                </div>
                <Footer />
            </div>
        )
    }
}

MentorsDetails.propTypes = {
  db: PropTypes.shape({
    Sheet1: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets(['Sheet1', 'Guide', 'Books', 'Mentors'])(MentorsDetails);