import React from 'react';
import axios from 'axios';
import PrimaryInput from '../../components/PrimaryInput';
import './styles.scss';

const emailRE = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const phoneRE = /^[0-9\b]+$/;

class DemoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      button: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;

    this.setState({
      input,
    });
    console.log(input);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};

      input['name'] = '';
      input['email'] = '';
      input['phone'] = '';
      input['linkedin'] = '';
      input['portfolio'] = '';
      input['resume'] = '';

      this.setState({ input: input });
      const datas = new FormData();
      datas.append('resume', this.state.input.resume);

      console.log('in');
      console.log(datas, 'check');

      let data = {
        name: this.state.input.name,
        email: this.state.input.email,
        phone: this.state.input.phone,
        linkedin: this.state.input.linkedin,
        portfolio: this.state.input.portfolio,
        resume: this.state.input.resume,
        position: this.props.Position,
        person: this.props.Person,
        contact: this.props.Email,
        location: this.props.Location,
      };

      console.log(data);

      axios
        .post('https://match-mailer.herokuapp.com/testApi/send', data)
        .then((res) => {
          console.log(res);
          alert(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input.name) {
      isValid = false;
      errors.name = 'Please enter your name.';
    }

    if (!input['email']) {
      isValid = false;
      errors['email'] = 'Please enter your email Address.';
    } else if (!emailRE.test(input['email'])) {
      errors['email'] = 'Email address is invalid';
    }

    if (!input['email']) {
      isValid = false;
      errors['phone'] = 'Please enter your Phone No.';
    } else if (!phoneRE.test(input['phone'])) {
      errors['phone'] = 'Please enter only number.';
    } else if (input['phone'].length !== 10) {
      isValid = false;
      errors['phone'] = 'Please enter valid phone number.';
    }

    if (!input['linkedin']) {
      isValid = false;
      errors['linkedin'] = 'Enter LinkedIn Url*';
    }

    if (typeof input['linkedin'] !== 'undefined') {
      var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      );

      if (!pattern.test(input['linkedin'])) {
        isValid = false;
        errors['linkedin'] = 'Enter Valid Url*';
      }
    }

    if (!input['portfolio']) {
      isValid = false;
      errors['portfolio'] = 'Please enter your portfolio Link.';
    }

    if (typeof input['portfolio'] !== 'undefined') {
      var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      );

      if (!pattern.test(input['portfolio'])) {
        isValid = false;
        errors['portfolio'] = 'Enter Valid Url*';
      }
    }

    if (!input['resume']) {
      isValid = false;
      errors['resume'] = 'Please enter your Resume Link.';
    }

    if (typeof input['resume'] !== 'undefined') {
      var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      );

      if (!pattern.test(input['resume'])) {
        isValid = false;
        errors['resume'] = 'Enter Valid Url*';
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    const { errors, input } = this.state;
    return (
      <div className='application-form'>
        <form>
          <div class='form-body'>
            <label className='label'>
              Full Name <span className='asterisk'>*</span>
            </label>

            <PrimaryInput
              type='text'
              name='name'
              value={input.name}
              onChange={(e) => this.handleChange(e)}
              placeholder='Enter Your Name'
              isActive={true}
              errorText={errors && errors.name}
            />
          </div>

          <div class='form-body'>
            <label className='label'>
              Email <span className='asterisk'>*</span>
            </label>

            <PrimaryInput
              type='text'
              name='email'
              value={input.email}
              onChange={this.handleChange}
              placeholder='Your Email Address'
              id='email'
              isActive={true}
              errorText={errors && errors.email}
            />
          </div>

          <div class='form-body'>
            <label className='label'>
              Phone No. <span className='asterisk'>*</span>
            </label>

            <PrimaryInput
              type='text'
              name='phone'
              value={input.phone}
              onChange={this.handleChange}
              placeholder='Enter Your Phone No.'
              maxlength='10'
              isActive={true}
              errorText={errors && errors.phone}
            />
          </div>

          <div class='form-body'>
            <label className='label'>
              LinkedIn Profile Link <span className='asterisk'>*</span>
            </label>

            <PrimaryInput
              type='text'
              name='linkedin'
              value={input.linkedin}
              onChange={this.handleChange}
              placeholder='www.LinkedIn.com'
              isActive={true}
              errorText={errors && errors.linkedin}
            />
          </div>

          <div class='form-body'>
            <label className='label'>
              Portfolio Link <span className='asterisk'>*</span>
            </label>
            <PrimaryInput
              type='text'
              name='portfolio'
              value={input.portfolio}
              onChange={this.handleChange}
              placeholder='www.yoursite.com'
              isActive={true}
              errorText={errors && errors.portfolio}
            />
          </div>

          <div class='form-body'>
            <label className='label'>
              Resume <span className='asterisk'>*</span>
            </label>

            <PrimaryInput
              type='text'
              name='resume'
              value={input.resume}
              onChange={(e) => this.handleChange(e)}
              placeholder='www.yoursite.com'
              isActive={true}
              errorText={errors && errors.resume}
            />
          </div>

          <div class='button-bottom'>
            <button
              type='button'
              onClick={(e) => this.handleSubmit(e)}
              className='submit-application'
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DemoForm;
