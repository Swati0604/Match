import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Header from '../../components/header';
import JobProfileEmail from '../../components/JobProfileEmail';
import JobDescription from '../../components/JobDescription';
import Forms from '../../components/EmailForm';
import EmailSuccess from '../../components/EmailSucessPage';
import Footer from '../../components/footer';
import { withGoogleSheets } from 'react-db-google-sheets';
// Style
import './styles.scss';

class EmailModule extends Component {
  state = {
    name: '',
    Lname: '',
    email: '',
    message: '',
    sent: false,
    selectedFile: null,
    seeMore: false,
    success: false,
  };

  //handle input
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      Lname: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handleReadMore = () => {
    this.setState({
      seeMore: !this.state.seeMore,
    });
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  formSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append(
      'file',
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // console.log(this.state.selectedFile);

    // axios.post("api/uploadfile", formData);

    let data = {
      name: this.state.name,
      Lname: this.state.Lname,
      email: this.state.email,
      message: this.state.message,
      formData: formData,
    };

    axios
      .post('/api/forma', data)
      .then((res) => {
        this.setState(
          {
            sent: true,
            success: true,
          }.this.resetForm()
        );
      })
      .catch(() => {
        console.log('Not Sent');
      });
  };

  //resetform

  resetForm = () => {
    this.setState({
      name: '',
      Lname: '',
      email: '',
      message: '',
      success: true,
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

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

        <div className='header-banner'>
          <Header />
        </div>

        {this.props.db &&
          this.props.db.Sheet1 &&
          this.props.db.Sheet1.map(
            (data, index) =>
              data.Slug === selectedSlug && (
                <div className='body-card'>
                  <JobProfileEmail
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

        {this.props.db &&
          this.props.db.Jd &&
          this.props.db.Jd.map(
            (data, index) =>
              data.Slug === selectedSlug && (
                <div className='body-card'>
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
                <div className='body-card'>
                  <p className='apply-text-form'>Apply for this Job</p>
                  {this.props.db &&
                    this.props.db.Sheet1 &&
                    this.props.db.Sheet1.map(
                      (data) =>
                        data.Slug === selectedSlug && (
                          <Forms
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
