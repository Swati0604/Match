import React, { Component } from 'react';
import axios from 'axios';

class EmailModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      resume: '',
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:9000/testApi/send', this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className='FormPage'>
        <div className='Container'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <p className='label'>
                Full Name <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                class='form-control FormInput'
                type='text'
                name='name'
                required
                placeholder='Rohan'
                value={this.state.name}
                id=''
                onChange={this.changeHandler}
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
                value={this.state.email}
                id=''
                onChange={this.changeHandler}
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
                value={this.state.phone}
                id=''
                onChange={this.changeHandler}
              />
            </div>

            <div class='form-group'>
              <p className='label'>
                Resume <span style={{ color: 'red' }}>*</span>
              </p>
              <input
                type='file'
                class='form-control FormInput'
                name='resume'
                placeholder='Enter Your Phone No.'
                required
                value={this.state.resume}
                id=''
                onChange={this.changeHandler}
              />
            </div>

            <div
              className='form-group'
              style={{ marginTop: 20, marginBottom: 20, marginLeft: 26 }}
            >
              <button type='submit' className='btn btn-block btn-danger Submit'>
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
