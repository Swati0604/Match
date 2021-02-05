import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import JobGuideCard from '../../components/JobGuideCard';
import { withGoogleSheets } from 'react-db-google-sheets';
import RicherGuide from '../../components/RicherGuides';

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

class JobGuide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      value: 1,
      copied: false,
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

  handleSubmit = async () => {
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/swati/google_sheets/BvYPVAuSukqkBQVR?tabId=Sheet1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([[this.state.value]]),
        }
      );
      await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const selectedJobId = this.props.match.params.id;
    const { isMobile } = this.state;

    return (
      <div className='job-guide-page-style' ref={this.myRef}>
        <Helmet>
          <meta
            charSet='utf-8'
            name='description'
            content='Match By Design Sundays'
          />
          <title>Job Guide | Match By Design Sundays</title>
        </Helmet>
        <div class='all-page-style'>
          <div class='header-banner-style'>
            <Header />

            <div className='top-section'>
              {/* <Link to='/' className='back-btn'>
                <img
                  src={backIcon}
                  className='back-btn-icon'
                  alt='back-btn-icon'
                />
                Back to Job Listings
              </Link> */}

              {this.props.db &&
                this.props.db.Guide &&
                this.props.db.Guide.map(
                  (data, index) =>
                    data.Slug === selectedJobId && (
                      <div className='breadcrumbs-body'>
                        <Link to='/' className='breadcrumbs'>
                          Home/
                        </Link>
                        <Link to='/guides' className='breadcrumbs'>
                          Guides/
                        </Link>
                        <p className='breadcrumbs'>{data.Title}</p>
                      </div>
                    )
                )}
            </div>

            {this.props.db &&
              this.props.db.Guide &&
              this.props.db.Guide.map(
                (data, index) =>
                  data.Slug === selectedJobId && (
                    <div key={index}>
                      <div class='text-box'>
                        <div className='header-body'>
                          <h5 class='heading'>{data.Title}</h5>
                        </div>
                        <p class='para'>{data.Time}</p>
                      </div>

                      <div className='purpose-box-container'>
                        <h5 class='heading purpose-heading'>🎯 Purpose</h5>
                        <p class='para purpose-para'>{data.Purpose}</p>
                      </div>

                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='methods'>
                            <h5 class='heading purpose-heading'>Do’s</h5>
                            <pre className='para purpose-para do-para'>
                              {/* {data.Do.split('\n').map((para, index) => para)} */}
                              {data.Do}
                            </pre>
                          </div>
                        </div>

                        <div className='col-md-6'>
                          <div className='methods'>
                            <h5 class='heading purpose-heading'>Dont’s</h5>
                            <pre className='para purpose-para do-para'>
                              {data.DoNots}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>

        <div>
          {this.props.db &&
            this.props.db.Guide &&
            this.props.db.Guide.map(
              (data) =>
                data.Slug === selectedJobId && (
                  <RicherGuide
                    externallink1={data.Resource1_Link}
                    externallink2={data.Resource1_Link}
                    author1={data.Resource1_Author}
                    author2={data.Resource2_Author}
                    title1={data.Resource1_Title}
                    title2={data.Resource2_Title}
                  />
                )
            )}
        </div>

        <div className='job-guide-section'>
          <div className='job-guide-container'>
            <div className='text-box'>
              <h5 className='post-heading'>Other helpful guides</h5>
              <p className='post-info-para'>
                A few resources to help you ace your next opportunity
              </p>
            </div>

            <div className='row'>
              {isMobile ? (
                this.props.db &&
                this.props.db.Guide &&
                this.props.db.Guide.map(
                  (data, index) =>
                    data.Slug !== selectedJobId && (
                      <div className='item' key={index}>
                        <div className='top-space'>
                          <JobGuideCard
                            title={data.Title}
                            articleType='Job Application'
                            readingTime={data.Time}
                            selectedArticleId={data.Slug}
                            cardImg={data.Image}
                          />
                        </div>
                      </div>
                    )
                )
              ) : (
                <OwlCarousel className='owl-theme' {...options}>
                  {this.props.db &&
                    this.props.db.Guide &&
                    this.props.db.Guide.map(
                      (data, index) =>
                        data.Slug !== selectedJobId && (
                          <div className='item' key={index}>
                            <div className='top-space'>
                              <JobGuideCard
                                title={data.Title}
                                selectedArticleId={data.Slug}
                                cardImg={data.Image}
                              />
                            </div>
                          </div>
                        )
                    )}
                </OwlCarousel>
              )}
            </div>

            <p className='job-guide-para text-center top-space'>
              Building an awesome knowledge base for designers.{' '}
              <span className='coming-soon'>Coming Soon 😉</span>
            </p>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withGoogleSheets('Guide')(JobGuide);
