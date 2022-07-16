import React, {useState, useEffect} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'
import ProjectList from './projects/ProjectList'

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
              <ProjectList projects={projects}/>
            </div>
            <button onClick={() => getProjects()} className="shift-right">Refresh Projects</button>
          </div>
        </div>

  )
}
