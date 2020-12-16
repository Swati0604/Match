import React, { Component } from 'react';
import locationIcon from '../../assets/images/location.svg';
import jobTypeIcon from '../../assets/images/job-type.svg';
import experienceIcon from '../../assets/images/experience-icon.svg';
import backIcon from '../../assets/images/back-icon.svg';
import { Link } from 'react-router-dom';
import { ScrollTo } from "react-scroll-to";
// Style
import './styles.scss';

class JobProfileEmail extends Component {
    render(){
        const {companyLogo, position, companyName, experience, JobType, Location}=this.props
        return(
            <div className='job-profile-card-style'>

                <div className='top-section'>
                    <Link to='/' className='back-btns'>
                        <img
                        src={backIcon}
                        className='back-btn-icon'
                        alt='back-btn-icon'
                        />
                        Back to All Jobs
                    </Link>

                    <div className="profile-detail">
                        <img
                        src={companyLogo}
                        className='company-logo'
                        alt='company-logo'
                        /> 

                        <div className="position-applynow">
                            <p className="position">{position}</p>
                            <p className='apply'>Apply For Job</p>
                        </div>  

                        <div className="job-detail">
                            <p>{companyName}</p>

                            <div className="card-content">
                            <img
                            src={jobTypeIcon}
                            alt='Job Type'
                            className="work-detail-icon"
                            />
                            <p className="work-detail">{JobType}</p>
                            </div>

                            <div className="card-content">
                            <img
                            src={locationIcon}
                            alt='Location'
                            className="work-detail-icon"
                            />
                            <p className="work-detail">{Location}</p>
                            </div>

                            <div className="card-content">
                            <img
                            src={experienceIcon}
                            alt='experience'
                            className="work-detail-icon"
                            />
                            <p className="work-detail">{experience}</p>
                            </div>
                        </div>
                    </div>                 
                </div>               

            </div>

        )
    }
}

export default JobProfileEmail;