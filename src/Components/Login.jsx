import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form, Table, Row, Col } from "react-bootstrap";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apikey, setApikey] = useState('');
  const [error, setError] = useState(null);
  const [Html, setHtml] = useState(null); 
  const [showButton, setShowButton] = useState(true);
  const [Html2, setHtml2] = useState(null);
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/login', { username, password });
      // Check response status code and handle success or error accordingly
      if (response.data.key === undefined) {        
        
      } else {
        
      }
    } catch (error) {
      setError(error.message);
    }     
    setHtml(printkey());    
  };
  const showkey = async () => {
    const response2 = await axios.get('http://localhost:3002/login');
    const data = response2.data.key;
    console.log(data);    
    
    if (data === undefined) {      
      setShowButton(true);
      setHtml2(printIncorrect());
    } else {
      setShowButton(false);
      setHtml2(printCorrect());
    }
    
  }

  const printkey = () => {   
    return(
      <Container>
        <br />
        <Button onClick={showkey}>Show Key</Button>
      </Container>
    )
  }
  const printIncorrect = () => {
    return(
      <Container>        
        <h3>Incorrect. Please try enter again.</h3>
      </Container>
    )
  }
  const printCorrect = () => {
    return(
      <Container>        
        <h3>Correct</h3>
        {/* <p>API KEY : {apikey}</p> */}
      </Container>
    )
  }

  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {error && <div>{error}</div>}
      {showButton && <Button type="submit">Login</Button>}    
    </form>

    {Html}
    {Html2}
    </Container>
  );
}

export default LoginPage;
