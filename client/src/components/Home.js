import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/HomeGrid.css';
import { Input } from '@material-ui/core';
import { login } from '../BackendFunctions';
import Navbar from './Navbar/Navbar';


export default class HomeGrid2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

      this.onChange = this.onChange.bind(this);
      this.signin = this.signin.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    }
    
    signin(e) {
        e.preventDefault()

        const admin = {
            email: this.state.email,
            password: this.state.password
        }

        login(admin).then(res => {
            if (res) {
               // this.props.history.push(`/profile`)
              this.setState({ Redirect: true });
                //TODO apply redirect to profile if no errors
                
            }
        })
    }

  render() {

    if (this.state.Redirect) {
      return (
        <Redirect to={{
          pathname: '/profile',
        }}/>
      )
    }
    return (
      <div>
        
        {/* <div className="headerContainer">
           <div>
            <h1 className="sub-heading">
              Build Q-methodology research survey with autoQsurvey
            </h1>

            <ul className="sub-list">
              <li>Collaborate with fellow researchers</li>
              <li>Interactive survey design system</li>
              <li>Upload Q-sort statement cards from file</li>
            </ul>
          </div>
        </div>

        <div className="grid">
          

          <div className="item2 register-container">
            <h2 className="heading-two">Create an account</h2>

            <p className="sub-paragraph">
              Register with few clicks and discover full potential of
              autoQsurvey
            </p>

            <div className="center">
              <Link to={"/register"}>
                <button className="register-btn">SING UP</button>
              </Link>
            </div>
          </div>

          <div className="item3 sign-in-container">
            <h2 className="heading-two">Sign in</h2>

            <div className="center">
              <input
                className="inputBox"
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              ></input>
            </div>

            <div className="center">
              <input
                className="inputBox"
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              ></input>
            </div>

            <div className="center">
              <Link to={"/profile"}>
                <button className="log-in-btn" onClick={this.signin}>
                  SIGN IN
                </button>
              </Link>
            </div>

            <div className="center">
              <button className="pass-reset-btn">Reset password</button>
            </div>
          </div>

          <div className="item4 participant-container">
            <h2 className="heading-two">Participant corner</h2>

            <div className="center">
              <input className="inputBox" placeholder="Code"></input>
            </div>

            <div className="center">
              <button className="log-in-btn">START SURVEY</button>
            </div>

            <div className="center">
              <button className="pass-reset-btn">Manage my data</button>
            </div>
          </div>

          <div className="item5 quick-survey-container">
            <h2 className="heading-two">Quick survey</h2>

            <p className="sub-paragraph">
              Create and manage your survey without the account
            </p>

            <div className="center">
              <Link to={"/Create1Name"}>
                <button className="log-in-btn">NEW SURVEY</button>
              </Link>
            </div>

            <div className="center">
              <button className="log-in-btn">LOG IN SURVEY</button>
            </div>
          </div>
        </div> */}

        <div className='grid-container'>

          <div className="item1 header-container">
            <h1 className="heading">
              Build Q-methodology research survey
            </h1>
          </div>

          <div className=' item6 navbar-container'>
            <Navbar/>
          </div>

        </div>
        
        <div className='grid-container2'>
          
          <div className="item2 sub-container">
            <h2 className="heading-two">Create an account</h2>
            <p className="sub-paragraph">
                Register with few clicks and discover full potential of
                autoQsurvey
            </p>
              
            <div className="btn-container">
              <div className='btn-center'>
                <Link to={"/register"}>
                <button className="btn">SING UP</button>
                </Link>
              </div>
            </div>
            </div>
          
          <div className="item3 sub-container">
            <h2 className="heading-two">Sign in</h2>

            <div className="center">
              <input
                className="inputBox"
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              ></input>
            </div>

            <div className="center">
              <input
                className="inputBox"
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              ></input>
            </div>

            <div className="btn-container">
               <div className='btn-center'>
              <Link to={"/profile"}>
                <button className="btn" onClick={this.signin}>
                  SIGN IN
                </button>
                </Link>
                </div>
            </div>

            <div className="center">
              <button className="pass-reset-btn">Reset password</button>
            </div>
          </div>

          <div className="item4 sub-container">
            <h2 className="heading-two">Participant</h2>

            <div className="center">
              <input className="inputBox" placeholder="Code"></input>
            </div>

            <div className="btn-container">
              <div className="center">
                <button className="btn">START SURVEY</button>
                </div>
            </div>
 
            <div className="center">
              <button className="pass-reset-btn">Manage my data</button>
            </div>
          </div>
          
        </div>

      </div>
    );
  }
}