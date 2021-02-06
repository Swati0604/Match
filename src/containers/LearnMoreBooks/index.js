import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import Header from '../../components/header';
import Footer from '../../components/footer';
import ReviewCard from '../../components/ReviewsBooks';
import CuratedBookBanner from '../../components/CuratedBookBanner';

// Style
import './styles.scss';

class LearnMore extends Component {
  truncate = (str) => {
    return str.length > 20 ? str.substring(0, 37) + '...' : str;
  };

  truncateDescription = (strDesc) => {
    return strDesc.length > 20 ? strDesc.substring(0, 357) + '...' : strDesc;
  };

  render() {
    const bookName = this.props.match.params.id;
    return (
      <div className='books-page' ref={this.myRef}>
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
            {this.props.db &&
              this.props.db.Books &&
              this.props.db.Books.map(
                (data, index) =>
                  data.Title === bookName && (
                    <div className='books-container-body'>
                      <CuratedBookBanner
                        title={this.truncate(data.Title)}
                        author={data.Author}
                        glassdoorRatings={data.GlassdoorRatings}
                        numberofRatings={data.NumberofRatings}
                        description={this.truncateDescription(data.Description)}
                        bookName={bookName}
                        isBookPage='true'
                        currentPage=' Resources/ Books/ '
                        afterText={data.Title}
                        recommendedByText={
                          this.props.db &&
                          this.props.db.Mentors &&
                          this.props.db.Mentors.filter(
                            (data) =>
                              data.Book2 === bookName ||
                              data.Book1 === bookName ||
                              data.Book3 === bookName ||
                              data.Book4 === bookName ||
                              data.Book5 === bookName ||
                              data.Book6 === bookName
                          ).length >= 1
                        }
                        recommendedBy={
                          this.props.db &&
                          this.props.db.Mentors &&
                          this.props.db.Mentors.map(
                            (data, index) =>
                              (data.Book2 === bookName ||
                                data.Book1 === bookName ||
                                data.Book3 === bookName ||
                                data.Book4 === bookName ||
                                data.Book5 === bookName ||
                                data.Book6 === bookName) && (
                                <img
                                  src={data.Image}
                                  alt='icon'
                                  className='mentor-icon'
                                />
                              )
                          )
                        }
                      >
                        {this.props.db &&
                          this.props.db.Books &&
                          this.props.db.Books.map(
                            (data, index) =>
                              data.Title === bookName && (
                                <div className='banner-image-container'>
                                  <img
                                    src={data.Image}
                                    className='banner-image'
                                    alt='Book Banner'
                                  />
                                </div>
                              )
                          )}
                      </CuratedBookBanner>
                    </div>
                  )
              )}
            {this.props.db &&
              this.props.db.Mentors &&
              this.props.db.Mentors.filter(
                (data) =>
                  data.Book2 === bookName ||
                  data.Book1 === bookName ||
                  data.Book3 === bookName ||
                  data.Book4 === bookName ||
                  data.Book5 === bookName ||
                  data.Book6 === bookName
              ).length >= 1 && (
                <p className='text-recommended'>Design Leaders reviews</p>
              )}
          </div>
        </div>

        <div className='recommended-body'>
          <div className='review-comments'>
            <div className='row card-list'>
              {this.props.db &&
                this.props.db.Mentors &&
                this.props.db.Mentors.map(
                  (data) =>
                    (data.Book2 === bookName ||
                      data.Book1 === bookName ||
                      data.Book3 === bookName ||
                      data.Book4 === bookName ||
                      data.Book5 === bookName ||
                      data.Book6 === bookName) && (
                      <div className='col-md-6'>
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
                        />
                      </div>
                    )
                )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withGoogleSheets(['Sheet1', 'Guide', 'Books', 'Mentors'])(
  LearnMore
);
