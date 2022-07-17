import React, {useState} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebase'

export default function AddProject() {
    const [company, setCompany] = useState('');
    const [desc, setDesc] = useState('');
    const [showForm, setShowForm] = useState(false);
    const subLink = ""
    const isCompleted = "Incomplete"

    function handleSubmit(e) {
        e.preventDefault();

        if (company === '') {
            return
        }
        const projectCollection = collection(db, 'Projects');
        addDoc(projectCollection, {
            company: company,
            desc: desc,
            subLink: subLink,
            isCompleted: isCompleted,
        }).then(response => {
            console.log(response)
            console.log(desc)
            console.log(company)
            console.log(projectCollection)
    }).catch(error => {
        console.log(error)
    })
        alert('Project added!')
    }

    const Show = () => {
      setShowForm(!showForm);
    }

  return (
    <div className='shift-right'>
    <button className="increase-width btn" onClick={Show}>Add Project</button>
        {showForm &&
            (<form onSubmit={handleSubmit}>
                <label htmlFor='company'>Company Name</label>
                <input
                id='company' 
                type="text" 
                value={company} 
                onChange={
                    (e) => setCompany(e.target.value)
                }/>

                <label htmlFor='desc'>Project Description</label>
                <input
                id='desc'
                type="text"
                value={desc}
                onChange={
                    (e) => setDesc(e.target.value)
                }/>

                <button className="btn" type='submit'>Submit</button>
            </form>)
        }
   </div>
  )
}
