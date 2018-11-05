import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-index-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Some text</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>3 November, 10:50AM</div>
        </div>
      </div>      
    </div>
  )
}

export default ProjectDetails
