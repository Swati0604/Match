import React, { Component } from 'react';
import './styles.scss';

//Images
import Logo1 from '../../assets/images/Ellipse 59.svg';
import Logo2 from '../../assets/images/ixigo half.svg';
import unacdemy from '../../assets/images/unacademy half.svg';
import Nyka from '../../assets/images/Nyka.svg';
import Myntra from '../../assets/images/Myntra.svg';
import mg from '../../assets/images/1mg.svg';
import Rivigo from '../../assets/images/Ellipse 64.svg';
import upgrad from '../../assets/images/upgrad full.svg';
import rupee from '../../assets/images/rupee full.svg';
import logo4 from '../../assets/images/Ellipse 60.svg';
import img from '../../assets/images/image 136.svg';

export default class StartupJobs extends Component{
    render(){
        return(
            <div className="startup-container">
                <div className='content'>
                    <p className='startup-title'>Design jobs at top startups</p>
                    <p className='container-description'>Work with companies creating great impact for 
                    people in India 🇮🇳</p>

                    <button className='view-startup-openings'>
                    View all openings
                    </button>
                </div>

                { window.innerWidth>414 ?<div className='logo-list'>
                    <div className='top-logos'>
                        <img src={Logo1} alt='logo1' className='startup-logos'/>
                        <img src={Logo2} alt='ixigo' className='startup-logos'/>
                        <img src={unacdemy} alt='unacdemy' className='startup-logos-middle'/>
                    </div>

                    <div>
                        <img src={Nyka} alt='Nyka' className='startup-logos'/>
                        <img src={Myntra} alt='ixigo' className='startup-logos'/>
                        <img src={mg} alt='unacdemy' className='startup-logos'/>
                        <img src={Rivigo} alt='unacdemy' className='startup-logos'/>
                    </div>
                    <div className='bottom-logos'>
                        <img src={upgrad} alt='upgrad' className='startup-logos-last'/>
                        <img src={rupee} alt='rupee' className='startup-logos-last'/>
                        <img src={logo4} alt='logo4' className='startup-logos-last'/>
                    </div>
                </div> : 
                <div>
                    <div className='mobile-logo'>
                        <img src={Nyka} alt='Nyka' className='logo-mobile'/>
                        <img src={Myntra} alt='myntra' className='logo-mobile'/>
                        <img src={mg} alt='mg' className='logo-mobile'/>
                        <img src={upgrad} alt='upgrad' className='logo-mobile'/>
                    </div>

                    <div className='mobile-logo'>
                        <img src={logo4} alt='Nyka' className='logo-mobile'/>
                        <img src={Rivigo} alt='Rivigo' className='logo-mobile'/>
                        <img src={img} alt='img' className='logo-mobile-last'/>
                    </div>
                </div>
                    }
            </div>
        )
    }
}