import React from 'react';
import axios from 'axios';
import './styles.scss';

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
    input[event.target.name] = event.target.value;

    if (input['file']) {
      input[event.target.name] = event.target.files[0];
    }

    this.setState({
      input,
    });
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

      let data = {
        name: this.state.input.name,
        email: this.state.input.email,
        phone: this.state.input.phone,
        linkedin: this.state.input.linkedin,
        portfolio: this.state.input.portfolio,
        resume: this.state.input.resume,
        person: this.props.Person,
        contact: this.props.Email,
      };
      console.log(data);
      axios
        .post('http://localhost:9000/testApi/send', data)
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

    if (!input['name']) {
      isValid = false;
      errors['name'] = 'Please enter your name.';
    }

    if (!input['email']) {
      isValid = false;
      errors['email'] = 'Please enter your email Address.';
    }

    if (typeof input['email'] !== 'undefined') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input['email'])) {
        isValid = false;
        errors['email'] = 'Please enter valid email address.';
      }
    }

    if (!input['phone']) {
      isValid = false;
      errors['phone'] = 'Please enter your Phone No.';
    }

    if (typeof input['phone'] !== 'undefined') {
      var pattern = new RegExp(/^[0-9\b]+$/);

      if (!pattern.test(input['phone'])) {
        isValid = false;

        errors['phone'] = 'Please enter only number.';
      } else if (input['phone'].length != 10) {
        isValid = false;

        errors['phone'] = 'Please enter valid phone number.';
      }
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

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className='appplication-form'>
        <form onSubmit={this.handleSubmit}>
          <div class='form-group form-body'>
            <label for='name' className='label'>
              Full Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type='text'
              name='name'
              value={this.state.input.name}
              onChange={this.handleChange}
              class='form-control'
              placeholder='Enter Your Name'
              id='name'
              maxlength='350'
            />

            <div className='text-danger validation'>
              {this.state.errors.name}
            </div>
          </div>

          <div class='form-group form-body'>
            <label for='email' className='label'>
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type='text'
              name='email'
              value={this.state.input.email}
              onChange={this.handleChange}
              class='form-control'
              placeholder='Your Email Address'
              id='email'
              maxlength='350'
            />

            <div className='text-danger validation'>
              {this.state.errors.email}
            </div>
          </div>

          <div class='form-group form-body'>
            <label for='phone' className='label'>
              Phone No. <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type='text'
              name='phone'
              value={this.state.input.phone}
              onChange={this.handleChange}
              class='form-control'
              placeholder='Enter Your Phone No.'
              id='phone'
              maxlength='10'
            />

            <div className='text-danger validation'>
              {this.state.errors.phone}
            </div>
          </div>

          <div class='form-group form-body'>
            <label for='linkedin' className='label'>
              LinkedIn Profile Link <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type='text'
              name='linkedin'
              value={this.state.input.linkedin}
              onChange={this.handleChange}
              class='form-control'
              placeholder='www.LinkedIn.com'
              id='linkedin'
              maxlength='350'
            />

            <div className='text-danger validation'>
              {this.state.errors.linkedin}
            </div>
          </div>

          <div class='form-group form-body'>
            <label for='portfolio' className='label'>
              Portfolio Link <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type='text'
              name='portfolio'
              value={this.state.input.portfolio}
              onChange={this.handleChange}
              className='form-control'
              placeholder='www.yoursite.com'
              id='portfolio'
              maxlength='350'
            />

            <div className='text-danger validation'>
              {this.state.errors.portfolio}
            </div>
          </div>

          <div class='form-group form-body'>
            <p className='label'>
              Resume <span style={{ color: 'red' }}>*</span>
            </p>
            <input
              type='file'
              name='resume'
              value={this.state.input.resume}
              onChange={this.handleChange}
              id='resume'
              accept='.pdf'
              className='file-input'
            />

            <p className='upload-text'>
              We accept PDF, DOC, DOCX, JPG & PNG Files.
            </p>
          </div>

          {this.state.input.name &&
          this.state.input.email &&
          this.state.input.phone &&
          this.state.input.linkedin &&
          this.state.input.portfolio &&
          this.state.input.resume ? (
            <div class='form-group button-bottom'>
              <input
                type='submit'
                value='Submit'
                className='submit-application'
              />
            </div>
          ) : (
            <div class='form-group button-bottom'>
              <input
                type='submit'
                value='Submit'
                className='submit-application-unfilled'
                disabled='disabled'
              />
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default DemoForm;
