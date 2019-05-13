import React, { Component } from 'react';
import { Link, Router } from "react-router-dom";
import logo from './logo.png';
import Video from './Video'
import IconCard from './IconCard';
import * as Icon from 'react-feather';

class LandingPage extends Component {

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

    // async componentDidMount() {
    //     let response = await window.apollo.query({
    //         query : gql`{
    //             getUser(id: ${userId}) {
    //             username
    //             email
    //         }}`
    //     })
    //     this.setState({ user : response.data.getUser })
    // }

  render() {
    const { campaign, user } = this.state
    return (
      <div style={{backgroundColor: 'rgba(246,250,254)'}}>
        <div>
          <header className="app-header navbar" style={{backgroundColor: 'white', height: '10vh'}}>
            <div className="navbar-brand" to="/" style={{display: 'flex', marginLeft: 'auto'}}>
                <img className="navbar-brand-full h-75 mr-2" src={logo} alt="Poli USA Logo" style={{height: '50px'}}/>
                <span className="navbar-brand-full" style={{margin: '16%'}}><strong>POLI</strong></span>
            </div>
            <div style={{textAlign: 'right', marginTop: '2%', marginRight: '3%'}}>
              <span style={{padding: '3%'}}>Home</span>
              <span style={{padding: '3%'}}>About</span>
              <span style={{padding: '3%'}}>Pricing</span>
              <span style={{padding: '3%'}}>Blog</span>
              <button style={{marginLeft: '3%'}} className='btn btn-primary'>Sign In</button>
            </div>
            <hr/>
          </header>
        </div>
        <div>
          <div style={{marginLeft: '5vw', marginTop: '10vh'}}>
            <div style={{display: 'flex', width: '90vw'}}>

              <div style={{marginRight: '5vw'}}>

                <div>
                  <h4 style={{opacity: 0.7}}>Field Ops CRM <em style={{fontSize: '1.4vh'}}>(Beta)</em></h4><br/>
                  <h1 style={{fontSize: '4em'}}>Field tools for the modern campaign</h1><br/>
                  <p style={{fontSize: '2vh'}}>Running a field program is hard work.
                    Streamline the mundane tasks, like volunteer and event management,
                    and spend more time with your voters.
                  </p>
                </div>

                <div class="input-group mb-3" style={{display: 'flex', marginTop: '10vh', width: '25vw'}}>
                  <input style={{padding: '25px'}} type="text" class="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <button class="btn" id="basic-addon2" style={{backgroundColor: 'rgb(50,100,243)', color: 'white', height: '6vh', borderRadius: 2, paddingLeft: '25px', paddingRight: '25px'}}>Get Started</button>
                  </div>
                </div>

              </div>
                <Video youtubeId='ScMzIvxBSi4' />
            </div>

            <div style={{display: 'flex', fontAlign: 'center', margin: 'auto', marginTop: '-40vh'}}>
              {this.state.iconCards.map(card => {
                return <IconCard name={card.type} icon={card.icon}/>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
