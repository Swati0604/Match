import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Header from '../../components/header';
import JobProfileEmail from '../../components/JobProfileEmail';
import JobDescription from '../../components/JobDescription';
import EmailForms from '../../components/EmailForm';
import Footer from '../../components/footer';
import { withGoogleSheets } from 'react-db-google-sheets';
import AssignmentTitle from '../../components/AssignmentTitles';
// Style
import './styles.scss';

class EmailModule extends Component {
  render() {
    const selectedSlug = this.props.match.params.id;
    return (
      <div className='email-page-style' ref={this.myRef}>
        <Helmet>
          <meta
            charSet='utf-8'
            name='description'
            content='Match By Design Sundays'
          />
          <title>Match By Design Sundays</title>
        </Helmet>

        {this.props.db &&
          this.props.db.Jd &&
          this.props.db.Jd.map(
            (item, index) =>
              item.Slug === selectedSlug && (
                <div style={{ background: `${item.color}` }}>
                  <div class='header-banner-style'>
                    <Header statusColor={item.color} isBgColoured={true} />
                  </div>
                  <div className='job-details'>
                    {this.props.db &&
                      this.props.db.Sheet1 &&
                      this.props.db.Sheet1.map(
                        (data, index) =>
                          data.Slug === selectedSlug && (
                            <div className='body-card'>
                              <AssignmentTitle
                                companyLogo={data.Logo}
                                position={data.Position}
                                companyName={data.Company}
                                experience={data.Experience}
                                Location={data.Location}
                                JobType={data.JobType}
                                id={selectedSlug}
                              />
                            </div>
                          )
                      )}
                  </div>
                </div>
              )
          )}

        {this.props.db &&
          this.props.db.Sheet1 &&
          this.props.db.Sheet1.map(
            (data, index) =>
              data.Slug === selectedSlug && (
                <div className='body-card'>
                  <p className='position-title'>{data.Position}</p>
                  <div className='job-container'>
                    <p className='job-detail'>{data.JobType} </p>
                    <p className='job-detail'>{data.Experience} </p>
                    <p className='job-detail'>{data.Location} </p>
                  </div>
                </div>
              )
          )}

        {this.props.db &&
          this.props.db.Jd &&
          this.props.db.Jd.map(
            (data, index) =>
              data.Slug === selectedSlug && (
                <div className='body-card-description'>
                  <JobDescription
                    JobDescriptionText={data.JD_1}
                    JobDescriptionText2={data.JD2}
                  />
                </div>
              )
          )}

        {this.props.db &&
          this.props.db.Jd &&
          this.props.db.Jd.map(
            (item) =>
              item.Slug === selectedSlug && (
                <div>
                  {this.props.db &&
                    this.props.db.Sheet1 &&
                    this.props.db.Sheet1.map(
                      (data) =>
                        data.Slug === selectedSlug && (
                          <EmailForms
                            Person={item.Person}
                            Email={item.Email}
                            Position={data.Position}
                            Location={data.Location}
                          />
                        )
                    )}
                </div>
              )
          )}

        <Footer />
      </div>
    );
  }
}

export default withGoogleSheets(['Sheet1', 'Jd'])(EmailModule);

//Validation, Passing 'To' Props to Node, Deploy, scroll to Apply For Job
