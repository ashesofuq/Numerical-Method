import React from "react";
// import './App.css';

import Header from './Components/Home';
import Bisection from './Components/Bisection';
import FalsePosition from './Components/FalsePosition';
import Onepoint from "./Components/Onepoint";
import Newton from "./Components/Newton";
import Secant from "./Components/Secant";
import CramerRule from "./Components/Linear/CramerRule";
import MatrixInversion from "./Components/Linear/MatrixInversion";
import Test from "./Components/Linear/test";

import { NavDropdown, Container, Nav, Navbar } from 'react-bootstrap';

import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'


function App() {    
    return (
        <BrowserRouter>          
          <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
           <Container fluid>
            <Navbar.Brand href="/">Numerical Method</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Root of Equations" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/Bisection">Bisection</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/FalsePosition">False Position</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/OnePoint">OnePoint iteration</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Newton">Newton Raphson</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Secant">Secant</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Linear Algebre" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/CramerRule">Cramer Rule</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/MatrixInversion">Matrix Inversion</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/test">Gauss Eliminate</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/">Gauss Jordan</NavDropdown.Item>                  
                </NavDropdown>
              </Nav>              
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link href="/">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
           </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Bisection" element={<Bisection />} />
            <Route path="/FalsePosition" element={<FalsePosition />} />
            <Route path="/OnePoint" element={<Onepoint />} />
            <Route path="/Newton" element={<Newton />} />
            <Route path="/Secant" element={<Secant />} />
            <Route path="/CramerRule" element={<CramerRule />} />
            <Route path="/MatrixInversion" element={<MatrixInversion />} />
            <Route path="/test" element={<Test />} />
          </Routes>
          
        </BrowserRouter>
    )
}

export default App