import React, {useState, useEffect} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'
import ProjectList from './projects/ProjectList'
import AddProject from './AddProject'

export default function ListProjects() {
    
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
    }, [])

    useEffect(() => {
        console.log(projects)
    }, [projects])

    function getProjects() {
        const projectCollectionRef = collection(db, 'Projects')
        getDocs(projectCollectionRef)
        .then(response => {
            const proj = response.docs.map(doc => ({
                data: doc.data(), 
                id: doc.id
            }))
            setProjects(proj)
    })
        .catch(error => {
            console.log(error)
        }
        )
    }

    return (

        <div className="dashboard container">
          <div className="row shift-right-2">
            <div className="col s12 m6">
                <div className="margin-top test-2">
                  <div className="project-summary card z-depth-0">
                    <div className="card-content grey-text text-darken-3">
                      <p>Company</p>
                    </div>
                  </div>
                  <div className="project-summary card z-depth-0">
                    <div className="card-content grey-text text-darken-3">
                      <p >Description</p>
                    </div>
                  </div>
                  <div className="project-summary card z-depth-0">
                    <div className="card-content grey-text text-darken-3">
                      <p>Submission Link</p>
                    </div>
                  </div>
                  <div className="project-summary card z-depth-0">
                    <div className="card-content grey-text text-darken-3">
                      <p>Complete Status</p>
                    </div>
                  </div>
                </div>
              <ProjectList projects={projects}/>
            </div>
          </div>
          <button onClick={() => getProjects()} className="shift-right btn">Refresh Projects</button>
          <AddProject/>
        </div>

  )
}


