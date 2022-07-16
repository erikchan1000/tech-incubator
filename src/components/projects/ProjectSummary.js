import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <>
      <div className="project-summary card z-depth-0">
        <div className="card-content grey-text text-darken-3">
         
          <p>Posted by {project.data.Company}</p>
        </div>
      </div>
      <div className="project-summary card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{project.data.desc}</span>
        </div>
      </div>
      <div className="project-summary card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{project.data['Submission Link']}</span>
        </div>
      </div>
  </>
  )
}

export default ProjectSummary