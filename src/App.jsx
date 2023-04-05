import React from "react";
// import { useState, useEffect } from "react"
// import axios from 'axios'
// import './App.css';

import Header from './Components/Home';
import Bisection from './Components/Bisection';
import FalsePosition from './Components/FalsePosition';
import Onepoint from "./Components/Onepoint";
import Taylor from "./Components/Taylor";
import Newton from "./Components/Newton";
import Secant from "./Components/Secant";
import CramerRule from "./Components/Linear/CramerRule";
import MatrixInversion from "./Components/Linear/MatrixInversion";
import SimpleRegression from "./Components/Regression/SimpleRegression";
import Polynomial from "./Components/Regression/Polynomial";
import Multiple from "./Components/Regression/Multiple";
import Test from "./Components/Linear/test";

import { NavDropdown, Container, Nav, Navbar } from 'react-bootstrap';

import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'


function App() {    
    // const [Res, setRes] = useState(null)
    // useEffect(() => {
    //     axios.get('http://localhost:3000/numer')
    //         .then((Res) => setRes(Res.data))
    //     console.log(Res);
    // }, [])
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
                  <NavDropdown.Item as={NavLink} to="/Taylor">Taylor Series</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Newton">Newton Raphson</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Secant">Secant</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Linear Algebre" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/CramerRule">Cramer Rule</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/MatrixInversion">Matrix Inversion</NavDropdown.Item>
                  {/* <NavDropdown.Item as={NavLink} to="/GaussEliminate">Gauss Elimination</NavDropdown.Item> */}
                  {/* <NavDropdown.Item as={NavLink} to="/">Gauss Jordan</NavDropdown.Item> */}
                  <NavDropdown.Item as={NavLink} to="/test">Test</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Regression" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/SimpleRegression">Simple Linear</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Polynomial">Polynomial Linear</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Multiple">Multiple Linear</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/test">Test</NavDropdown.Item>
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
            <Route path="/FalsePosition" element={<FalsePosition  />} />
            <Route path="/OnePoint" element={<Onepoint  />} />
            <Route path="/Taylor" element={<Taylor  />} />
            <Route path="/Newton" element={<Newton  />} />
            <Route path="/Secant" element={<Secant  />} />
            <Route path="/CramerRule" element={<CramerRule />} />
            <Route path="/MatrixInversion" element={<MatrixInversion />} />
            <Route path="/SimpleRegression" element={<SimpleRegression />} />
            <Route path="/Polynomial" element={<Polynomial />} />
            <Route path="/Multiple" element={<Multiple />} />
            <Route path="/test" element={<Test />} />
          </Routes>
          
        </BrowserRouter>
    )
}

export default App