import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//header footer
import { ScrollTo } from 'react-scroll-to';
//import Header from './component/header/index';
// Style
//import './styles.css';

import backIcon from '../../assets/images/back-icon.svg';
import experienceIcon from '../../assets/images/experience-icon.svg';
import locationIcon from '../../assets/images/location.svg';
import jobTypeIcon from '../../assets/images/job-type.svg';

class EmailModule extends Component {
  state = {
    name: '',
    Lname: '',
    email: '',
    message: '',
    sent: false,
    selectedFile: null,
    seeMore: false,
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
      .post('https://match-mailer.herokuapp.com/testApi', data)
      .then((res) => {
        this.setState(
          {
            sent: true,
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
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <div className='FormPage'>
        <div className='PageHeader'>
          <div>
            <div className='top-section'>
              <div className='back-btn'>
                <img
                  src={backIcon}
                  className='back-btn-icon'
                  alt='back-btn-icon'
                />
                Back to Job Listings
              </div>
            </div>
            <img
              src='https://designsundays.in/wp-content/uploads/2020/10/PayU.png'
              className='JobIcon'
            />

            <div className='BelowHeader'>
              <h3 className='uidesigner'>UI/UX Designer</h3>
              <ScrollTo>
                {({ scroll }) => (
                  <a
                    onClick={() => scroll({ x: 20, y: 500 })}
                    className='Apply'
                  >
                    Apply For Job
                  </a>
                )}
                {/*  <p className="Apply">Apply For Job</p>*/}
              </ScrollTo>
            </div>

            <div className='aboutCompany'>
              <p className='CompanyName'>PayU</p>

              <div className='jobType'>
                <img src={jobTypeIcon} />
                <p className='jobTypeText'>Full Time</p>
              </div>
              <div className='jobType'>
                <img src={locationIcon} />
                <p className='jobTypeText'>Delhi</p>
              </div>
              <div className='jobType'>
                <img src={experienceIcon} />
                <p className='jobTypeText'>Work Experience 0-2 Years</p>
              </div>
            </div>
          </div>
        </div>

        <div className='jobDescription'>
          <h2 className='descriptionTitle'>Job Description</h2>
        </div>
        <div className='jobDescription'>
          <p className='descriptionText'>
            Own and drive product design vision and set the experience bar for
            millions of users. Mapping requirements by continuous interaction
            with product managers. Upholding the voice of the end-user and
            defending design choices{' '}
            {this.state.seeMore ? null : (
              <button onClick={this.handleReadMore} className='readmore'>
                ...read more
              </button>
            )}
            {this.state.seeMore ? (
              <p className='descriptionText'>
                Own and drive product design vision and set the experience bar
                for millions of users. Mapping requirements by continuous
                interaction with product managers. Upholding the voice of the
                end-user and defending design choices. Create quick sketches,
                comprehensive wireframes, rich visuals, and interactive
                prototypes to deliver finished design deliverables. Maintain and
                enrich our user experience across both web and native app
                platforms by continuous benchmarking and iterations (even
                post-launch)... read more Translate quantitative and qualitative
                behavioral data and competitive analysis into design solutions
                Offer multiple solutions to problems and make tradeoff
                recommendations Drive design quality, usability, and
                accessibility standards Collaborate across teams to improve,
                maintain and optimize our interaction and visual design systems
                Perpetually teach and learn with other designers in your team
                Requirement 3+ years of professional experience with the design
                and development of highly interactive products and digital
                interfaces such as websites, m-web, and native apps A basic
                understanding of semantically sound HTML5, CSS3 code and basic
                development practices such as sprints and debugging via detailed
                QA test cases to help achieve maximum impact with your developer
                colleagues A sound proficiency in user-centered design processes
                and interaction design principles. Excellent knowledge of web
                standards, native mobile design systems (iOS and Android),
                progressive improvements, dynamic content retrieval, and
                responsive/adaptive design techniques. You have a portfolio that
                details strong interaction, thought process, and visual design
                skills. Deep understanding of typography, layout and
                composition, information architecture, color theory, fluid grid
                systems, animation and transitions. A tendency to think between
                the layers and drive your goals via motion rich interactions. An
                ability to create detailed interconnected design flows while
                being able to imagine movement and co-relation between different
                components to create user delight.
              </p>
            ) : null}
          </p>
        </div>

        <div className='jobDescription'>
          <h2 className='ApplyJob'>Apply For This Job</h2>
        </div>

        <div className='Container'>
          <form action='/sendemail' method='POST' enctype='multipart/form-data'>
            <div class='form-group'>
              <p className='label'>
                Full Name <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                class='form-control FormInput'
                type='text'
                name='name'
                required
                placeholder='Rohan'
              />
            </div>

            <div class='form-group'>
              <p className='label'>
                Email <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type='email'
                class='form-control FormInput'
                name='email'
                placeholder='Your Email Address'
                required
                id=''
              />
            </div>

            <div class='form-group'>
              <p className='label'>
                Phone No. <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type='text'
                class='form-control FormInput'
                name='phone'
                placeholder='Enter Your Phone No.'
                required
                id=''
              />
            </div>

            <div class='form-group'>
              <p className='label'>
                LinkedIn Profile Link <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type='text'
                class='form-control FormInput'
                name='LinkedIn'
                placeholder='Your LinkedIn Profile'
                required
                id=''
              />
            </div>

            <div class='form-group'>
              <p className='label'>
                Portfolio Link <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type='text'
                class='form-control FormInput'
                name='PortFolio'
                placeholder='www.yoursite.com'
                required
                id=''
              />
            </div>

            <div class='form-group'>
              <p className='label'>
                Resume <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type='file'
                required
                class='form-control custom-file-input'
                name='file'
                id=''
                accept='.pdf'
              />

              <p
                style={{
                  fontSize: 10,
                  color: 'grey',
                  textAlign: 'left',
                  marginLeft: 27,
                  marginTop: 4,
                }}
              >
                We accept PDF, DOC, DOCX, JPG & PNG Files.
              </p>
            </div>
            <div
              class='form-group'
              style={{ marginTop: 20, marginBottom: 20, marginLeft: 26 }}
            >
              <button type='submit' class='btn btn-block btn-danger Submit'>
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EmailModule;
