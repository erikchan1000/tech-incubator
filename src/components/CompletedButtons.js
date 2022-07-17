import React, {useState} from 'react'
import {db} from '../firebase'
import {doc, updateDoc, collection, getDocs} from 'firebase/firestore'

export default function CompletedButtons({project}) {

    const myProject = doc(collection(db, 'Projects'), project.id);
    const [isCompleted, setIsCompleted] = useState(project.data.isCompleted);

    return (
        <div className='cols completed-buttons'>
            <button className='btn' onClick={
                () => {
                    setIsCompleted('Complete')
                    console.log(isCompleted)
                    updateDoc(myProject, {
                        isCompleted: 'Complete'
                })
            }}>Complete</button>
            <button className='btn' onClick={
                () => {
                    setIsCompleted('In-Progress')   
                    updateDoc(myProject, {
                        isCompleted: 'In-Progress'
                }).then(
                    () => {
                        console.log('Updated')
                        
                    }
                )
                }
            }>In-Progress</button>
            <button className='btn' onClick={
                () => {
                    setIsCompleted('Incomplete')
                    updateDoc(myProject, {
                        isCompleted: 'Incomplete'
                })
                }
            }>Incomplete</button>
        </div>


  )
}
