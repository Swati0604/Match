import React from 'react';
import axios from 'axios';
import './styles.scss';

class DemoForm extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      button: false
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["phone"] = "";
        input["linkedin"] = "";
        input["portfolio"] = "";
        this.setState({input:input});

        let data = {
          name: this.state.input.name,
          email: this.state.input.email,
          phone: this.state.input.phone,
          linkedin: this.state.input.linkedin,
          portfolio: this.state.input.portfolio,
          person: this.props.Person,
          contact: this.props.Email
        }
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
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }

      if (!input["phone"]) {
        isValid = false;
        errors["phone"] = "Please enter your Phone No.";
      }

      if (typeof input["phone"] !== "undefined") {         

        var pattern = new RegExp(/^[0-9\b]+$/);
      
        if (!pattern.test(input["phone"])) {
      
          isValid = false;
      
          errors["phone"] = "Please enter only number.";
      
        }else if(input["phone"].length != 10){
      
          isValid = false;
      
          errors["phone"] = "Please enter valid phone number.";
      
        }
      
      }

      if (!input["linkedin"]) {
        
        isValid = false;
        errors["linkedin"] = "Enter LinkedIn Url*";
      }

      if (typeof input["linkedin"] !== "undefined") {  
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); 

      if (!pattern.test(input["linkedin"])) {
        isValid = false;
        errors["linkedin"] = "Enter Valid Url*";
      }

    }
  
      if (!input["portfolio"]) {
        isValid = false;
        errors["portfolio"] = "Please enter your portfolio Link.";
      }

      if (typeof input["portfolio"] !== "undefined") {  
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); 
  
        if (!pattern.test(input["portfolio"])) {
          isValid = false;
          errors["portfolio"] = "Enter Valid Url*";
        }
  
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div className='appplication-form'>
      
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group form-body">
          
            <label for="name" className="label">Full Name <span style={{color:'red'}}>*</span></label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Your Name" 
              id="name" 
              maxlength="350"
              />
  
              <div className="text-danger validation">{this.state.errors.name}</div>
          </div>
  
          <div class="form-group form-body">
            <label for="email" className="label">Email <span style={{color:'red'}}>*</span></label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Your Email Address" 
              id="email" 
              maxlength="350"
              />
   
              <div className="text-danger validation" >{this.state.errors.email}</div>
          </div>

          <div class="form-group form-body">
            <label for="phone" className="label">Phone No. <span style={{color:'red'}}>*</span></label>
            <input 
              type="text" 
              name="phone" 
              value={this.state.input.phone}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Your Phone No."
              id="phone" 
              maxlength="10"
              />
   
              <div className="text-danger validation">{this.state.errors.phone}</div>
          </div>

          <div class="form-group form-body">
            <label for="linkedin" className="label">LinkedIn Profile Link <span style={{color:'red'}}>*</span></label>
            <input 
              type="text" 
              name="linkedin" 
              value={this.state.input.linkedin}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="www.LinkedIn.com"
              id="linkedin" 
              maxlength="350"
              />
   
              <div className="text-danger validation">{this.state.errors.linkedin}</div>
          </div>

          <div class="form-group form-body">
            <label for="portfolio" className="label">Portfolio Link <span style={{color:'red'}}>*</span></label>
            <input 
              type="text" 
              name="portfolio" 
              value={this.state.input.portfolio}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="www.yoursite.com" 
              id="portfolio" 
              maxlength="350"
              />
   
              <div className="text-danger validation">{this.state.errors.portfolio}</div>
          </div>

          <div class="form-group form-body">
                  <p className="label">Resume <span style={{color:'red'}}>*</span></p>
                  <input 
                  type="file" 
                  name="file" 
                  id="" 
                  accept=".pdf" 
                  className="file-input"/>

                  <p className='upload-text'>We accept PDF, DOC, DOCX, JPG & PNG Files.</p>
              </div>
  
          
              { this.state.input.name && this.state.input.email && this.state.input.phone && this.state.input.linkedin
          && this.state.input.portfolio ? 
                <div class="form-group button-bottom">
          <input type="submit" value="Submit" className="submit-application"/>
              </div>
              : 
              <div class="form-group button-bottom">
                <input type="submit" value="Submit" className="submit-application-unfilled" disabled="disabled"/>
              </div>
              }

        </form>
      </div>
    );
  }
}
  
export default DemoForm;


/*import React, {Component} from 'react';
import axios from 'axios';
import './styles.scss';

export default class Forms extends Component{

  constructor(){
    super();

    this.state={
      isphone: true,
      NoName: false,
      NoEmail: false,
      name: '',
      email: '',
      phone: '',
      file: '',
    }
  }

  handleName=(names)=>{
      this.setState({       
        name: names,
        NoName: false
      })
  }

  handleEmail=(mail)=>{
    this.setState({
      email: mail,
      NoEmail: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.name.length>3){
      if(this.state.email.length>3){
    axios
      .post('http://localhost:9000/testApi/send', this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }else{
      this.setState({
        NoEmail: true
      })
    }
  }else{
      this.setState({
        NoName: true
      })
    }
  };

    render(){
        return(
            <div className='appplication-form'>

            <form onSubmit={this.handleSubmit}>
            
              <div class="form-group form-body">
                  <p className="label">Full Name <span style={{color:'red'}}>*</span></p>
                  <input 
                  className={this.state.NoName ? "form-control FormInput"  : "form-control FormInput-Validate" }                  
                  type="text" 
                  name="name"
                  placeholder="Enter Your Name" 
                  onChange={this.handleName}
                  /> 
                  {this.state.NoName ?  <p className='validation'>Enter Valid Name Here *</p> :null}                 
              </div>
              
              <div class="form-group form-body">
                <p className="label">Email <span style={{color:'red'}}>*</span></p>
                <input 
                type="text" 
                name="email" 
                onChange={this.handleEmail}
                className="form-control FormInput"
                placeholder="Your Email Address" 
                id="email" />
                {this.state.NoEmail ?  <p className='validation'>Enter Valid Email Here *</p> :null} 
              </div>

              <div class="form-group form-body">
                <p className="label">Phone No. <span style={{color:'red'}}>*</span></p>
                  <input 
                  type="text" 
                  class="form-control FormInput" 
                  name="phone" 
                  placeholder="Enter Your Phone No." 
                  id="" />
              </div>

              <div class="form-group form-body">
                <p className="label">LinkedIn Profile Link <span style={{color:'red'}}>*</span></p>
                  <input 
                  type="text" 
                  class="form-control FormInput" 
                  name="linkedin" 
                  placeholder="www.LinkedIn.com" 
                  id="" />
              </div>

              <div class="form-group form-body">
                <p className="label">Portfolio Link <span style={{color:'red'}}>*</span></p>
                  <input type="text" 
                  class="form-control FormInput" 
                  name="portfolio" 
                  placeholder="www.yourwebsite.com" 
                  id="" />
              </div>

              <div class="form-group form-body">
                  <p className="label">Resume <span style={{color:'red'}}>*</span></p>
                  <input 
                  type="file" 
                  name="file" 
                  id="" 
                  accept=".pdf" 
                  className="file-input"/>

                  <p className='upload-text'>We accept PDF, DOC, DOCX, JPG & PNG Files.</p>
              </div>

              <div class="form-group button-bottom">
                  <button type="submit" className="submit-application">
                      Submit Application
                  </button>
              </div>
          </form>
       </div>

        )
    }
}
*/