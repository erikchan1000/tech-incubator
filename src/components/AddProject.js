import React, {useState} from 'react'

export default function AddProject() {
    const [company, setCompany] = useState('');
    const [desc, setDesc] = useState('');
    const [showForm, setShowForm] = useState(false);

    const Show = () => {
      setShowForm(!showForm);
    }

  return (
    <div className='Center'>
        <button className="increase-width" onClick={Show}>Add Project</button>
            {showForm &&
                (<form>
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

                    <button type='submit'>Submit</button>
                </form>)
            }
    </div>
  )
}
