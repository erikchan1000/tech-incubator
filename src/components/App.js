import React from "react";
import Signup from "./Signup";
import { Container } from 'react-bootstrap';
import "./App.css";

function App() {
  return (
    <Container className="d-flex align-items-center"
    style={{ minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: '30rem', maxHeight: ''}}>
      <Signup/>
      </div>
    </Container>
  )
}

export default App;