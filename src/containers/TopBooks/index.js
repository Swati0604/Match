import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import Header from '../../components/header';
import Footer from '../../components/footer';
import mentor from '../../assets/images/testmentor.svg';
import MentorBookChoice from '../../components/MentorBookChoice';
import CuratedBookBanner from '../../components/CuratedBookBanner';

//images
import bookshelf from '../../assets/images/bookshelf.svg';

//Styles
import './styles.scss';

class TopBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleAll: 5,
    };
  }

  loadmore = () => {
    this.setState({
      visibleAll: this.state.visibleAll + 5,
    });
  };

  render() {
    return (
      <div className='top-books-page' ref={this.myRef}>
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
              title='Top 100 Design Books for you'
              subTitle='from the best designers, and design leaders you look up to.'
              currentPage=' Resources/ Books/ Top100'
            >
              <div className='banner-image-container'>
                <img
                  src={bookshelf}
                  className='banner-image'
                  alt='Book Banner'
                />
              </div>
            </CuratedBookBanner>

            <p className='text-recommended'>Books</p>
          </div>

          <div className='books-top-section'>
            {this.props.db &&
              this.props.db.Books &&
              this.props.db.Books.slice(0, this.state.visibleAll).map(
                (data, index) => {
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
                    </div>
                  );
                }
              )}
          </div>

          {this.state.visibleAll < this.props.db.Books.length && (
            <div className='load-more-btn-container'>
              <button onClick={this.loadmore} className='load-more'>
                Load more
              </button>
            </div>
          )}
          <Footer />
        </div>
      </div>
    );
  }
}

export default withGoogleSheets(['Sheet1', 'Guide', 'Books', 'Mentors'])(
  TopBooks
);
