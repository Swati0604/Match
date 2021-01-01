import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Headers from '../../components/HeaderSecondary';
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
          <div className='complete-header'>
            <div class='header-banner-style'>
              <Headers />            
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
                ))}
          </div>
          </div>
          <div>
            <div className=''>
              {this.props.db &&
              this.props.db.Assignment &&
              this.props.db.Assignment.map(
                (data, index) =>
                  data.Company === companyName && (
                <AssignmentDescriptions 
                  summary={data.Summary}
                  businessObjective={data.BusinessObjective}
                  userScenario={data.UserScenario}
                  task={data.Task}
                  companyName={data.Company}
                />))}
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
