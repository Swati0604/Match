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
import { CopyToClipboard } from 'react-copy-to-clipboard';
//Images
import backIcon from '../../assets/images/back-icon.svg';

// Style
import './styles.scss';

class Guides extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      value: 1,
      copied: false,
    };
  }

  loadMoreAll() {
    this.setState((prev) => {
      return { visibleAll: prev.visibleAll + 9 };
    });
  }

  render() {
    const selectedJobId = this.props.match.params.id;
    const { isMobile } = this.state;

    return (
      <div className='guides-page-style' ref={this.myRef}>
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

            <div className='breadcrumbs-body'>
              <Link to='/' className='breadcrumbs'>Home/</Link>
              <p className='breadcrumbs'>Guides</p>
            </div>
          </div>

        </div>

        <div className='job-guide-section'>
          <div className='job-guide-container'>
            <div className='text-box'>
              <h5 className='post-heading'>Guides</h5>
              <p className='post-info-para'>
                A few resources to help you ace your next opportunity
              </p>
            </div>

            <div className='row guide-card'>
              {this.props.db &&
                this.props.db.Guide &&
                this.props.db.Guide.map(
                  (data, index) =>
                    data.Slug !== selectedJobId && (
                      <div className='col-md-4 item' key={index}>
                        <div className='top-space'>
                          <JobGuideCard
                            title={data.Title}
                            selectedArticleId={data.Slug}
                            cardImg={data.Image}
                            Tags={data.Tags}
                            Time={data.Time}
                            Guides={'Guides'}
                          />
                        </div>
                      </div>
                    )
                )}
            </div>

            {this.props.db.Guide.length > 9 &&
              this.state.visibleFreelance < this.props.db.Guide.length && (
                <div className='load-more-btn-container'>
                  <button
                    onClick={this.loadMoreFreelance}
                    type='button'
                    className='load-more'
                  >
                    Load more
                  </button>
                </div>
              )}

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withGoogleSheets('Guide')(Guides);
