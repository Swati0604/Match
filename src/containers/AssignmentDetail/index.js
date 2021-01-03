import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AssignmentTitle from '../../components/AssignmentTitles';
import AssignmentDescriptions from '../../components/AssignmentDescription';
import { withGoogleSheets } from 'react-db-google-sheets';
// Style
import './styles.scss';

class AssignmentDetail extends Component {
  render() {
    const companyName = this.props.match.params.id;
    return (
      <div className='assignment-detail-page-style' ref={this.myRef}>
        <Helmet>
          <meta
            charSet='utf-8'
            name='description'
            content='Match By Design Sundays'
          />
          <title>Assignment Detail | Match By Design Sundays</title>
        </Helmet>
        <div>
          {this.props.db &&
            this.props.db.Assignment &&
            this.props.db.Assignment.map(
              (data, index) =>
                data.Company === companyName && (
                  <div style={{ background: `${data.color}` }}>
                    <div class='header-banner-style'>
                      <Header statusColor={data.color} isBgColoured={true} />
                    </div>

                    <div>
                      {this.props.db &&
                        this.props.db.Assignment &&
                        this.props.db.Assignment.map(
                          (data, index) =>
                            data.Company === companyName && (
                              <AssignmentTitle
                                companyName={data.Company}
                                companyLogo={data.Logo}
                                position={data.Position}
                              />
                            )
                        )}
                    </div>
                  </div>
                )
            )}
          <div>
            <div className=''>
              {this.props.db &&
                this.props.db.Assignment &&
                this.props.db.Assignment.map(
                  (data, index) =>
                    data.Company === companyName && (
                      <AssignmentDescriptions
                        summary={data.para1}
                        businessObjective={data.para2}
                        userScenario={data.para3}
                        task={data.para4}
                        para5={data.para5}
                        companyName={data.Company}
                        heading1={data.heading1}
                        heading2={data.heading2}
                        heading3={data.heading3}
                        heading4={data.heading4}
                        heading5={data.heading5}
                      />
                    )
                )}
            </div>
          </div>

          <div className='footer-section'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withGoogleSheets(['Assignment'])(AssignmentDetail);
