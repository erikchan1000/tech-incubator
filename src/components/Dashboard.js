import React, {useState} from 'react';
import {Card, Button, Alert, Container} from 'react-bootstrap';
import {useAuth} from './contexts/AuthContext';
import {Link, useNavigate} from 'react-router-dom';

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
      <Container className="d-flex align-items-center">
        <Card>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
          </Card.Body>

        </Card>
      </Container>
      <div className="w-100 text-center mt-2"> 
        <Button variant="link" onClick={handleLogout}>Logout</Button>
      </div>
    </>
  )
}
