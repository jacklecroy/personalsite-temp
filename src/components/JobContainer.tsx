import React, { Component } from 'react';
import '../css/JobContainer.css';

interface JobProps {
  jobs: JobInfo[]
}

interface JobInfo {
  date: string,
  company: string,
  title: string
}

class JobContainer extends Component<JobProps> {
  jobBox = (job: JobInfo) => {
    return (
      <div className='jobRow'>
        <div className='jobDetails'>
          <h3>{job.date}</h3>
          <h1>{job.company}</h1>
          <h2>{job.title}</h2>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='jobContainer'>
        {this.props.jobs.map(this.jobBox)}
      </div>
    );
  }
}

export default JobContainer;