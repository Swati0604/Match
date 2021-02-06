import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Custom Components
import Header from '../../components/header';
import Footer from '../../components/footer';
import CuratedBookBanner from '../../components/CuratedBookBanner';
import BookCard from '../../components/BooksCard';
import { withGoogleSheets } from 'react-db-google-sheets';

//images
import bookshelf from '../../assets/images/bookshelf.svg';

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

const screenWidth = window.innerWidth;

class Bookshelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleAll: 9,
      isMobile: false,
    };
  }

  loadmore = () => {
    this.setState({
      visibleAll: this.state.visibleAll + 9,
    });
  };

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
    return (
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
          <div className='header-background'>
            <Header />
            <CuratedBookBanner
              title='Curated Bookshelf for Designers'
              subTitle='Best reads suggested by designers you look up to. '
              topBooksButtonNeeded='true'
              currentPage=' Resources/ Books'
            >
              <div className='banner-image-container'>
                <img
                  src={bookshelf}
                  className='banner-image'
                  alt='Book Banner'
                />
              </div>
            </CuratedBookBanner>

            <p className='text-recommended'>Books recommended by</p>
          </div>
        </div>

        <div className='recommended-by'>
          <div className='list-container'>
            <div class='container-fluid'>
              <div class='row'>
                {this.props.db &&
                  this.props.db.Mentors &&
                  this.props.db.Mentors.slice(0, this.state.visibleAll).map(
                    (data) => {
                      return (
                        <a href={`/mentor/${data.Name}`}>
                          <div className='images-list-expert'>
                            <div
                              className='images'
                              style={{
                                backgroundImage:
                                  'linear-gradient(180deg, rgba(0, 0, 0, 0) 72.64%, #000000 100%), url(image.png), url(' +
                                  `${data.Image}` +
                                  ')',
                                backgroundRepeat: 'no-repeat',
                              }}
                            >
                              <div className='mentor-details'>
                                <p className='expert-name'>{data.Name}</p>
                                <p className='content-desc'>{data.Title}</p>
                                {data.Tagline ? (
                                  <p className='text-appear'>
                                    {data.Tagline},{' '}
                                  </p>
                                ) : null}
                                {/* <p className='text-appear'>
                                  {data.MentorDescription}
                                </p> */}
                              </div>
                            </div>
                          </div>
                        </a>
                      );
                    }
                  )}
              </div>
            </div>

            {this.state.visibleAll < this.props.db.Mentors.length && (
              <div className='load-more-btn-container'>
                <button onClick={this.loadmore} className='load-more'>
                  Load more
                </button>
              </div>
            )}

            <p className='crousal-title'>Recommended Books</p>
            <div className='crousal'>
              {this.state.isMobile ? (
                this.props.db &&
                this.props.db.Books &&
                this.props.db.Books.map((data, index) => {
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
                        <div key={index}>
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
    );
  }
}

export default withGoogleSheets(['Sheet1', 'Guide', 'Mentors', 'Books'])(
  Bookshelf
);
