import React, {useState} from 'react';
import {Card, Button, Alert, Container} from 'react-bootstrap';
import {useAuth} from './contexts/AuthContext';
import {Link, useNavigate} from 'react-router-dom';
import ListProjects from './ListProjects';
import AddProject from './AddProject';

export default function Dashboard() {
  const [error, setError] = useState(null);
  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError(null)

    try {
      await logout()
      navigate('/')
    } catch (err) {
      setError('Error: ' + err.message)
    }
  }

  return (
    <>
    <div className="test2 text-center mt-2"> 
      <Container className="align-items-center">
        <ListProjects></ListProjects>
        <Card className='test'>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
          </Card.Body>

        </Card>
      </Container>
      
        <Button variant="link" onClick={handleLogout} className="shift-more">Logout</Button>
      </div>
      <AddProject/>
    </>
  )
}
