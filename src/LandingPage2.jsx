import React, { Component } from 'react';
import { Link, Router } from "react-router-dom";
import logo from './logo.png';
import Video from './Video'
import IconCard from './IconCard';
import * as Icon from 'react-feather';

class LandingPage2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
        campaign : [],
        user : [],
        iconCards: [
          {type: "Add Staff", icon: <Icon.UserPlus/>},
          {type: "Invite Volunteers", icon: <Icon.Users />},
          {type: "Create Groups", icon: <Icon.Filter />},
          {type: "Manage Schedules", icon: <Icon.Clipboard />},
          {type: "Create Events", icon: <Icon.Calendar />},
          {type: "Monitor Progress", icon: <Icon.Activity />},
          {type: "Win", icon: <Icon.Award />}
        ]
    }
  }

  render() {
    return(
      <div style={{background: 'rgba(246,250,254)', height: 'fill'}}>

        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: 'white', borderBottom: 'solid grey 0.1px'}}>
          <div className="navbar-brand" to="/" style={{display: 'flex', height: '60px', marginLeft: '3vw'}}>
            <img className="navbar-brand-full h-75 mr-2" src={logo} alt="Poli USA Logo" style={{margin: 'auto 0'}}/>
            <span className="navbar-brand-full" style={{margin: 'auto 0'}}><strong>POLI</strong></span>
          </div>

          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" style={{marginRight: '3vw'}}>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" style={{paddingRight: '2vw'}}>
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item" style={{paddingRight: '2vw'}}>
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item" style={{paddingRight: '2vw'}}>
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item" style={{paddingRight: '2vw'}}>
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <button className='btn btn-outline-primary' style={{padding: '10px 20px', bordRadius: '0px'}}>
                  <strong>Sign in</strong>
                </button>
            </ul>
          </div>

        </nav>

          <div className='container-fluid' style={{display: 'flex', margin: '10vh 5vw 3vw 5vw'}}>
            <div className='container'>
              <h4 style={{opacity: 0.7}}>Field Ops CRM <em style={{fontSize: '1.4vh'}}>(Beta)</em></h4><br/>
              <h1 style={{fontSize: '4em'}}>Field tools for the modern campaign</h1><br/>
              <p style={{fontSize: '2vh', width: '35vw'}}>Running a field program is hard work.
                Streamline the mundane tasks, like volunteer and event management,
                and spend more time with your voters.
              </p>

              <div class="input-group mb-3" style={{width: '30vw', marginTop: '10vh'}}>
                <input type="text" class="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                  <button class="btn" id="basic-addon2" style={{backgroundColor: 'rgb(50,100,243)', color: 'white', height: '6vh', borderRadius: '2px', paddingLeft: '25px', paddingRight: '25px'}}>GET STARTED</button>
                </div>
              </div>

            </div>
            <div className='container'>
              <Video youtubeId='ScMzIvxBSi4' />
            </div>

          </div>

          <div className='container-fluid' style={{display: 'flex', textAlign: 'center', width: '90vw', paddingBottom: '2rem'}}>
            {this.state.iconCards.map(card => {
              return <IconCard name={card.type} icon={card.icon}/>
            })}
          </div>

      </div>
    )
  }

}

export default LandingPage2;
