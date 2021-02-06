import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { withGoogleSheets } from 'react-db-google-sheets';
import PropTypes from 'prop-types';

//Custom Component
import Header from '../../components/header';
import Footer from '../../components/footer';
import MentorBookChoice from '../../components/MentorBookChoice';
import CuratedBookBanner from '../../components/CuratedBookBanner';

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

const screenWidth = window.innerWidth;

class MentorsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
    };
  }
  componentDidMount() {
    this.checkViewportType();

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize = () => {
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  checkViewportType = () => {
    this.setState({
      isMobile: screenWidth > 768 ? false : true,
    });
  };
  render() {
    const mentorName = this.props.match.params.id;
    const name = mentorName.split(' ')[0];
    return (
      <div className='mentors-books-page' ref={this.myRef}>
        <Helmet>
          <meta
            charSet='utf-8'
            name='description'
            content='Match By Design Sundays'
          />
          <title>Match By Design Sundays</title>
        </Helmet>

        <div className='header-top-section'>
          <div className='header-background'>
            <Header />

            <div className='mentor-header-body'>
              {this.props.db &&
                this.props.db.Mentors &&
                this.props.db.Mentors.map(
                  (data, index) =>
                    data.Name === mentorName && (
                      <div>
                        <CuratedBookBanner
                          title={data.Name}
                          subTitle={data.Title}
                          subText={data.MentorDescription}
                          secondLinkName='Mentors/'
                          afterText='/ Books'
                          currentPage={data.Name}
                          socialMedia={true}
                          insta={data.Insta}
                          twitter={data.Twitter}
                          linkedin={data.Linkedin}
                        >
                          <div className='mentor-image-container'>
                            <div className='image-books'>
                              <img
                                src={`${data.Image}`}
                                alt='book-shelf'
                                className='book-shelf-image'
                              />
                            </div>
                            <div className='tag-body'>
                              <p className='mentor-tag'>Mentor</p>
                            </div>
                          </div>
                        </CuratedBookBanner>

                        <p className='text-recommended'>
                          {data.Name}’s recommended Bookshelf
                        </p>
                      </div>
                    )
                )}
            </div>
          </div>
        </div>

        <div className='book-list'>
          {this.props.db &&
            this.props.db.Mentors &&
            this.props.db.Mentors.map((data, index) => {
              return (
                <div>
                  {this.props.db &&
                    this.props.db.Books &&
                    this.props.db.Books.filter(
                      (item) =>
                        (item.Title === data.Book1 ||
                          item.Title === data.Book2 ||
                          item.Title === data.Book3 ||
                          item.Title === data.Book4 ||
                          item.Title === data.Book5 ||
                          item.Title === data.Book6) &&
                        data.Name === mentorName
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
                        </div>
                      );
                    })}
                </div>
              );
            })}

          <p className='text-recommended'>
            Suggestions by other Design Leaders
          </p>
          <div>
            {this.state.isMobile ? (
              this.props.db &&
              this.props.db.Mentors &&
              this.props.db.Mentors.map((data, index) => {
                return (
                  <a href={`/mentor/${data.Name}`} classsName='card'>
                    <div className='images-list-expert'>
                      <div
                        className='images'
                        style={{
                          backgroundImage: 'url(' + `${data.Image}` + ')',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <p className='expert-name'>{data.Name}</p>
                        {data.Title && (
                          <p className='content-desc'>{data.Title}</p>
                        )}
                        {data.Tagline && (
                          <p className='text-appear'>{data.Tagline}</p>
                        )}
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
                    return mentorName === data.Name ? null : (
                      <a href={`/mentor/${data.Name}`} classsName='card'>
                        <div className='images-list-expert'>
                          <div
                            className='images'
                            style={{
                              backgroundImage:
                                'linear-gradient(180deg, rgba(0, 0, 0, 0) 72.64%, #000000 100%), url(' +
                                `${data.Image}` +
                                ')',
                              backgroundRepeat: 'no-repeat',
                            }}
                          >
                            <p className='expert-name'>{data.Name}</p>
                            <p className='content-desc'>{data.Title}</p>
                            <p className='text-appear'>{data.Tagline}</p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
              </OwlCarousel>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

MentorsDetails.propTypes = {
  db: PropTypes.shape({
    Sheet1: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets(['Sheet1', 'Guide', 'Books', 'Mentors'])(
  MentorsDetails
);
