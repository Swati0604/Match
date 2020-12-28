import React, { Component } from 'react';
import './styles.scss';

//logos
import experienceIcon from '../../assets/images/experience-icon.svg';
import locationIcon from '../../assets/images/location.svg';
import jobTypeIcon from '../../assets/images/job-type.svg';

export default class AssignmentDescription extends Component{
    render(){
        const {summary, businessObjective, userScenario, task, companyName,Position, experience, location, jobType} = this.props;
        return(
            <div className='detail-banner-style'>
                <div>
                    <div className='description-text'>
                        <p className='summary'>What is the future of reading?</p>
                        <p className='summary-text'>{summary}</p>
                    </div>

                    <div className='description-text'>
                        <p className='sub-headings'>BUSINESS OBJECTIVE</p>
                        <p className='summary-text'>{businessObjective}</p>
                    </div>

                    <div className='description-text'>
                        <p className='sub-headings'>User Scenario</p>
                        <p className='summary-text'>{userScenario}</p>
                    </div>

                    <div className='description-text'>
                        <p className='sub-headings'>Task</p>
                        <p className='summary-text'>{task}</p>
                    </div>
                </div>
                <div className='similar-jobs'>
                    <p className='jobs-at'>jobs at {companyName}</p>

                    <div className='job-details'>
                        <p className='position'>{Position}</p>

                        <div className='job-content'>
                            <div className="job-description">
                                <img
                                src={jobTypeIcon}
                                alt='Job Type'
                                className="work-detail-icon"
                                />
                                <p className="work-detail">{jobType}</p>
                            </div>

                            <div className="job-description">
                                <img
                                src={locationIcon}
                                alt='Location'
                                className="work-detail-icon"
                                />
                                <p className="work-detail">{location}</p>
                            </div>

                            <div className="job-description">
                                <img
                                src={experienceIcon}
                                alt='experience'
                                className="work-detail-icon"
                                />
                                <p className="work-detail">{experience}</p>
                            </div>
                        </div>

                        <div>
                            <p className='apply-now'>Apply Now</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}