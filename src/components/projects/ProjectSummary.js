import React, {useState} from 'react'
import {Form, Dropdown} from 'react-bootstrap'
import CompletedButtons from '../CompletedButtons'

const ProjectSummary = ({project}) => {

  return (
    <>
    <div className="test-2">
      
      <div className="project-summary card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <span>{project.data.company}</span>
        </div>
      </div>
      <div className="project-summary card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <span >{project.data.desc}</span>
        </div>
      </div>
      <div className="project-summary card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <Form>
            <Form.Control type="text" placeholder="Enter Link" />
          </Form>
        </div>
      </div>
      <div className="project-summary card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <span>{project.data.isCompleted}</span>
          <CompletedButtons project={project}></CompletedButtons>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProjectSummary