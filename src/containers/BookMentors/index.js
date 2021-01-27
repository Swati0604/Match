import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import twitter from '../../assets/images/twitter.svg';
import insta from '../../assets/images/insta.svg';
import linkedin from '../../assets/images/linkedin.svg';
import location from '../../assets/images/location.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
        items: 3,
      },
    },
  };

class MentorsDetails extends Component{
    render(){
      const mentorName = this.props.match.params.id;
      const name = mentorName.split(" ")[0];
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
                    </div>
                </div>

                {window.innerWidth>414?
                <div className='mentor-header-body'>
                {
                          this.props.db &&
                          this.props.db.Mentors &&
                          this.props.db.Mentors.map(
                            (data, index) =>
                            data.Name === mentorName && (

                        <div className='mentor-body'>
                          <div class='left-body-header'>
                            <div className='top-header-mentor'>
                              
                              <div className='top-header-text'>  
                                <div className='breadcrumbs-body'>
                                    <Link to='/' className='breadcrumbs'>
                                      Home/
                                    </Link>
                                    <p className='breadcrumbs'>Mentor/ {data.Name}/ Book Recommendation</p>
                                  </div>                              
                                    <p>{data.Name}</p>
                                </div>
                                <p className='header-desc'>{data.Title}</p>
                                <p className='mentor-desc'>{data.MentorDescription}</p>
                                <div className='social-media'>
                                {data.Insta && <a href={`${data.Insta}`}>
                                  <div classsName='logo-container'>
                                    <img src={insta}
                                    alt='insta'
                                    className='logos'
                                    />
                                  </div>
                                </a>}
                                {data.Twitter && <a href={`${data.Twitter}`}>
                                <div classsName='logo-container'>
                                  <img src={twitter}
                                  alt='insta'
                                  className='logos'
                                  />
                                </div>
                                </a>}
                                {data.Linkedin && <a href={`${data.Linkedin}`}>
                                <div classsName='logo-container'>
                                  <img src={linkedin}
                                  alt='insta'
                                  className='logos'
                                  />
                                </div>
                                </a>}
                                </div>
                            </div>
                          </div>

                            <div className='image-books'>
                                <img src={`${data.Image}`} alt='book-shelf'
                                className='book-shelf-image'
                                />  
                                <div className='tag-body'>
                                    <p className='mentor-tag'>Mentor</p>
                                </div>
                            </div>
                           
                          </div>)

                           )}
                </div>
                : 
                <div className='mentor-header-body'>
                {
                          this.props.db &&
                          this.props.db.Mentors &&
                          this.props.db.Mentors.map(
                            (data, index) =>
                            data.Name === mentorName && (

                        <div className='mentor-body'>
                          <div class='left-body-header'>
                           <div className='top-header-mentor'>
                            <div className='header-container'>
                              <div className='image-books'>
                                  <img src={`${data.Image}`} alt='book-shelf'
                                  className='book-shelf-image'
                                  />  
                                  <div className='tag-body'>
                                      <p className='mentor-tag'>Mentor</p>
                                  </div>
                              </div>
                              <div className='top-header-text'>                              
                                    <p >{data.Name}</p>
                                    <div className='mentor-detail'>
                                      <img src={location} alt='location' className='logo-tag'/>
                                      <p className='logo-desc'>Delhi</p>
                                    </div>
                                    <div className='mentor-detail'>
                                      <img src={location} alt='location' className='logo-tag'/>
                                      <p className='logo-desc'>UX Designer</p>
                                    </div>
                              </div>
                            </div>

                                <p className='header-desc'>{data.Title}</p>
                                <p className='mentor-desc'>{data.MentorDescription}</p>
                                <div className='social-media'>
                                {data.Insta && <a href={`${data.Insta}`}>
                                  <div classsName='logo-container'>
                                    <img src={insta}
                                    alt='insta'
                                    className='logos'
                                    />
                                  </div>
                                </a>}
                                {data.Twitter && <a href={`${data.Twitter}`}>
                                <div classsName='logo-container'>
                                  <img src={twitter}
                                  alt='insta'
                                  className='logos'
                                  />
                                </div>
                                </a>}
                                {data.Linkedin && <a href={`${data.Linkedin}`}>
                                <div classsName='logo-container'>
                                  <img src={linkedin}
                                  alt='insta'
                                  className='logos'
                                  />
                                </div>
                                </a>}
                                </div>
                            </div>
                          </div>
                           
                          </div>)

                           )}
                </div>}
                
               
                <div className='books-by-mentor'>
                    <div className='book-list'>
                    <p className='book-suggestion'>Books recommended by {name}</p>
                    
                    {
                          this.props.db &&
                          this.props.db.Mentors &&
                          this.props.db.Mentors.map(
                            (data, index) =>{
                            return (
                              <div>
                            {this.props.db &&
                              this.props.db.Books &&
                              this.props.db.Books.filter(
                                (item) => (item.Title === data.Book1 || item.Title === data.Book2
                                || item.Title === data.Book3 || item.Title === data.Book4
                                || item.Title === data.Book5 || item.Title === data.Book6 ) && data.Name === mentorName
                              ).map((item) => {
                                return (
                                  <div>
                                    
                                      <MentorBookChoice 
                                        numberofbook={6}   
                                        mentorName={name}
                                        bookImage={item.Image}
                                        booktitle={item.Title}
                                        author={item.Author}
                                        rating={item.GlassdoorRatings} 
                                        ratingnumber={item.NumberofRatings}
                                        bookdesc={item.Description}
                                        mentorImage={data.Image}
                                        review1={data.Review1}
                                        book1={data.Book1}
                                        review2={data.Review2}
                                        book2={data.Book2}
                                        review3={data.Review3}
                                        book3={data.Book3}
                                        review4={data.Review4}
                                        book4={data.Book4}
                                        review5={data.Review5}
                                        book5={data.Book5}
                                        review6={data.Review6}
                                        book6={data.Book6}
                                    /> 
                                  </div>);
                              })}</div>
                           );
                           } )}

                            <p className='crousal-title'>See suggestion by other designers</p>
                      <div>
                            {window.innerWidth < 768 ? (
                        this.props.db &&
                        this.props.db.Mentors &&
                        this.props.db.Mentors.map((data, index) => {
                          return (
                            <a href={`/mentor/${data.Name}`} classsName='card'>
                              <div className='images-list-expert'>
                              <div className='images' 
                                  style={{backgroundImage: "url("+`${data.Image}`+")", 
                                  backgroundRepeat:'no-repeat'}}>
                                   <p className='expert-name'>{data.Name}</p>
                                   <p className='content-desc'>{data.Title}</p>
                                   <p className='text-appear'>{data.Tagline}, {data.MentorDescription}</p>
                                </div>                                                                                           
                              </div>
                            </a>
                          );
                        })
                      ) : (
                        <OwlCarousel className='owl-theme' {...options}>
                          {this.props.db &&
                            this.props.db.Mentors &&
                            this.props.db.Mentors.map((data, index) => {
                              return (
                                (mentorName===data.Name ?
                                 null :
                                 <a href={`/mentor/${data.Name}`}  classsName='card'>
                                            <div className='images-list-expert'>
                                                    <div className='images' 
                                                    style={{backgroundImage: "url("+`${data.Image}`+")", 
                                                            backgroundRepeat:'no-repeat'}}>
                                                        <p className='expert-name'>{data.Name}</p>
                                                        <p className='content-desc'>{data.Title}</p>
                                                        <p className='text-appear'>{data.Tagline}, {data.MentorDescription}</p>
                                                    </div>                          
                                            </div>
                                </a> )
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