import React, {useState} from "react";
import Signup from "./Signup";
import { Container } from 'react-bootstrap';
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Navbar from "./Navbar";
import {Form} from 'react-bootstrap';

function App() {


  return (

    <div className="App">
      <Container className="d-flex align-items-center"
      style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: '30rem', maxHeight: ''}}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                <Route exact path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
              </Routes>
            </AuthProvider>
          </Router>
          
        </div>
      </Container>

    </div>
  )
}

export default App;