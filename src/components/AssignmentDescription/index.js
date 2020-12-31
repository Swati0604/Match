import React, { Component } from 'react';
import './styles.scss';

//similarjobs
import SimilarJob from '../AssignmentJobs';

//sheetGoogle
import { withGoogleSheets } from 'react-db-google-sheets';


class AssignmentDescription extends Component{
    render(){
        const {summary, businessObjective, userScenario, task, companyName} = this.props;
        return(
            <div className='detail-banner-style'>
                <div>
                    <div className='description-text'>
                        <p className='summary'>What is the future of reading?</p>
                        <p className='summary-text'>{summary}</p>
                    </div>

                   { businessObjective &&<div className='description-text'>
                        <p className='sub-headings'>BUSINESS OBJECTIVE</p>
                        <p className='summary-text'>{businessObjective}</p>
                    </div>}

                    {userScenario&&<div className='description-text'>
                        <p className='sub-headings'>User Scenario</p>
                        <p className='summary-text'>{userScenario}</p>
                    </div>}

                    {task && <div className='description-text'>
                        <p className='sub-headings'>Task</p>
                        <p className='summary-text'>{task}</p>
                    </div>}
                </div>

            {
                this.props.db &&
                this.props.db.Sheet1 &&
                this.props.db.Sheet1.map(
                (item) =>
                item.Company === companyName && (
                    <div>
                        <SimilarJob 
                            companyName={item.Company}
                            Position={item.Position}
                            experience={item.Experience}
                            location={item.Location}
                            jobType={item.JobType}
                        />
                    </div>
                    )
            )}
                
            </div>
        )
    }
}

export default withGoogleSheets(['Sheet1', 'Guide'])(AssignmentDescription);