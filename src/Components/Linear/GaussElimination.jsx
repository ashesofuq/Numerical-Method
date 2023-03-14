import React, { useState } from "react"
import { Button, Container, Form, Table, Row, Col } from "react-bootstrap";
import { det } from 'mathjs'

import 'bootstrap/dist/css/bootstrap.css';

const GaussElimination =()=>{
    const print = () =>{
        console.log(data)        
        return(
            
            <Container>
                {data.map((element, i) => {
                    return (
                        <div key={i}>
                            X{i+1}={element}
                        </div>
                    )
                })}
            </Container>
           
        );
    }
    

    
    const data =[];
   
    const CalGaussElimination = (A, B) => {
        let detA = det(A)
        if (detA === 0) {
            return;
        }
        
        for (let i=0; i<A.length; i++) {
            let Ax = A.map(value => value.slice());
            for (let j=0; j<Ax.length; j++){
                Ax[j][i] = B[j];
            }
            let detAx = det(Ax);
            data.push(detAx / detA);
        }
    }

    const [html, setHtml] = useState(null);        
    const [A,setA] = useState([])
    const [B,setB] = useState([])

    const [size, setSize] = useState(0);
    const [matrix, setMatrix] = useState([]);

    const SizeChange = (event) => {
        const InputValue = parseInt(event.target.value);
        setSize(InputValue);

        const newMatrix = [];
        for (let i = 0; i < InputValue; i++) {
            const newRow = [];
            for (let j = 0; j <= InputValue; j++){
                newRow.push(0);
            }
            newMatrix.push(newRow);
        }
        setMatrix(newMatrix);
    }

    const NumberChange = (event, rowIndex, ColIndex) => {
        const InputValue = parseInt(event.target.value);

        const newMatrix = matrix.map((row, i) => {
            if (i === rowIndex) {
                return row.map((col, j) => (j === ColIndex ? InputValue : col));
            } else {
                return row;
            }
        });
        const newA = newMatrix.map(row => row.slice(0, -1));
        const newB = newMatrix.map(row => row[newMatrix.length]);
        console.log(newA);
        console.log(newB);
        setA(newA);
        setB(newB);
        setMatrix(newMatrix);
    }
 
    const calculateMatrix = () =>{        
        CalGaussElimination(A, B);
        setHtml(print());
        
    }
    
    return (
            <Container fluid="md">
                <center>
                <br />
                <h2>GaussElimination Method</h2>
                <br />
                <Row>                    
                    <Col>                    
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label column sm={2}>Input Matrix Size</Form.Label>
                            <Col sm={2}><input type="number" id="InputSize" onChange={SizeChange} style={{width:"100%"}} className="form-control"></input></Col>
                        </Form.Group>
                        <p>Matrix {size} x {size}</p>
                        {matrix.map((row, i) => (
                            <div key={i}>
                                {row.map((col, j) => (
                                    <React.Fragment key={j}>
                                        <input type="number" value={col} onChange={(event) => NumberChange(event, i, j)} 
                                            style={{ margin:"1px", width:"3em", background:"white", color:"black", border:"1px solid black", borderRadius:"5px"}} />
                                    </React.Fragment>
                                ))}
                                <br />
                            </div>
                        ))}      
                        <br />
                        <Button variant="dark" onClick={calculateMatrix}>Calculate</Button>
                        <br />                        
                    </Form>
                
                    <br></br>
                    <h5>Answer</h5><br />
                    <Container fluid>{html}</Container>
                    </Col>
                </Row>       
                </center>
            </Container>           
    )
}

export default GaussElimination