import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AssignmentLogo from '../../components/AssignmentCompanies';
import { withGoogleSheets } from 'react-db-google-sheets';
import { Link } from 'react-router-dom';
// Style
import './styles.scss';

class Assignment extends Component {
  render() {
    return (
      <div className='take-home-assignment' ref={this.myRef}>
        <Helmet>
          <meta
            charSet='utf-8'
            name='description'
            content='Match By Design Sundays'
          />
          <title>Take Home Design Challenges | Match By Design Sundays</title>
        </Helmet>
        <div>
          <div class='header-banner-style'>
            <Header />

            <div className='breadcrumbs-body'>
              <Link to='/' className='breadcrumbs'>
                Home/
              </Link>
              <p className='breadcrumbs'>Take Home Challenges</p>
            </div>

            <div className='text-box'>
              <h5 className='heading title'>Take Home Design Challenges</h5>
              <p className='post-info-para'>Look for challenges by companies</p>
            </div>

            <div className='row'>
              {this.props.db &&
                this.props.db.Assignment &&
                this.props.db.Assignment.map(
                  (data, index) =>
                    data && (
                      <div className='col-lg-2 col-6 company-card'>
                        <AssignmentLogo
                          companyLogos={data.Logo}
                          companyName={data.Company}
                        />
                      </div>
                    )
                )}
            </div>
          </div>

          <div className='footer-section'>
            <p className='job-guide-para text-center top-space'>
              All the content has been contributed by community members.
            </p>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withGoogleSheets(['Assignment'])(Assignment);
