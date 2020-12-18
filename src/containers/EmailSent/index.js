import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Header from '../../components/header';
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

        <EmailSuccess userName={'Devanshu'} />

        <Footer />
      </div>
    );
  }
}

export default withGoogleSheets(['Sheet1', 'Jd'])(EmailModule);

//Validation, Passing 'To' Props to Node, Deploy, scroll to Apply For Job
