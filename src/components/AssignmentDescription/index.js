import React, { Component } from 'react';
import './styles.scss';

//similarjobs
import SimilarJob from '../AssignmentJobs';

//sheetGoogle
import { withGoogleSheets } from 'react-db-google-sheets';


class AssignmentDescription extends Component{
    render(){
        const {summary, businessObjective, userScenario, task, para5, companyName, heading1, heading2, heading3, heading4, heading5} = this.props;
        return(
            <div className="page-body">
            <div className='detail-banner-style'>
                <div>
                <p className='company-name'>{companyName}'s Design Challange</p>

                    <div className='description-text'>
                        <p className='sub-headings'>{heading1}</p>
                        <pre className='summary-para purposes-para '>
                        <p className='summary-text'>{summary}</p>
                        </pre>
                    </div>

                   { businessObjective &&<div className='description-text'>
                        <p className='sub-headings'>{heading2}</p>
                        <pre className='summary-para purposes-para '>
                        <p className='summary-text'>{businessObjective}</p>
                        </pre>
                    </div>}

                    {userScenario&&<div className='description-text'>
                        <p className='sub-headings'>{heading3}</p>
                        <pre className='summary-para purposes-para '>
                        <p className='summary-text'>{userScenario}</p>
                        </pre>
                    </div>}

                    {task && <div className='description-text'>
                        <p className='sub-headings'>{heading4}</p>
                        <pre className='summary-para purposes-para '>
                        <p className='summary-text'>{task}</p>
                        </pre>
                    </div>}

                    {para5 && <div className='description-text'>
                        <p className='sub-headings'>{heading5}</p>
                        <pre className='summary-para purposes-para '>
                        <p className='summary-text'>{para5}</p>
                        </pre>
                    </div>}

                    <p className='jobs-at'>Jobs at {companyName}</p>
                </div>
                </div>

               

             {
                this.props.db &&
                this.props.db.Sheet1 &&
                this.props.db.Sheet1.map(
                (item) =>
                item.Company === companyName && ( 
                    <div className='similar-jobs'>
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