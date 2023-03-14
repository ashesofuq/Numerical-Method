import { useState } from "react"
import { Button, Container, Form, Table, Row, Col } from "react-bootstrap";
import { evaluate } from 'mathjs'
import Plot from 'react-plotly.js';
import 'bootstrap/dist/css/bootstrap.css';

const Secant =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueX0(data.map((x)=>x.X_new));        
        setValueError(data.map((x)=>x.error));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">X</th>                            
                            <th width="30%">ERROR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.X_new}</td>                                
                                <td>{element.error}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
                
            </Container>
           
        );
    }
    

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const CalSecant = (x0, x1) => {
        var x2,fx0,fx1,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.000001;
        var obj={};
        do{
            scope = {
                x:x0
            }
            fx0 = evaluate(Equation, scope)

            scope = {
                x:x1
            }
            fx1 = evaluate(Equation, scope)
            
            x2 = x1 - fx1*(x1-x0) / (fx1-fx0);

            iter ++;
            x0 = x1;   
            x1 = x2;
            ea = error(x0, x1);
            obj = {
                iteration:iter,
                X_new:x2,
                error:ea
            }
            data.push(obj);                     
        }while(ea>e && iter<MAX)
        setX(x1)
    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueX0, setValueX0] = useState([]);    
    const [valueError, setValueError] = useState([]);
     
   
    const [html, setHtml] = useState(null);    
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [X0,setX0] = useState(0)
    const [X1,setX1] = useState(0)
    

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        console.log(event.target.value)
        setX0(event.target.value)
    }

    const inputX1 = (event) =>{
        console.log(event.target.value)
        setX1(event.target.value)
    }

    const data1 = {
        x: valueIter,
        y: valueX0,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'green'},
        name : 'X'
    };

    const data2 = {
        x: valueIter,
        y: valueError,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'red'},    
        name : 'Error'
    };
  
    const layout = {
        title: 'Chart',
        autosize: true,
        xaxis: {title: 'Iteration'},
        yaxis: {title: 'X and Error'}
    };
    let plot = [data1, data2];
    
    const calculateRoot = () =>{
        const x0 = parseFloat(X0);
        const x1 = parseFloat(X1);
        CalSecant(x0, x1);
     
        setHtml(print());
           
        console.log(valueIter)
        console.log(valueX0)
    }    

    return (
            <Container fluid="md">
                <br />
                <h2>Secant Method</h2>
                <br />
                <Row>
                    <Col sm={6}>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} className="">Input Re-Write f(x)</Form.Label>
                            <Col sm={8}><input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"100%"}} className="form-control"></input></Col>                        
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} className="">Input X0</Form.Label>
                            <Col sm={8}><input type="number" id="X0" onChange={inputX0} style={{width:"100%"}} className="form-control"></input></Col>
                        </Form.Group>       
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} className="">Input X1</Form.Label>
                            <Col sm={8}><input type="number" id="X1" onChange={inputX1} style={{width:"100%"}} className="form-control"></input></Col>
                        </Form.Group>             

                        <center><Button variant="dark" onClick={calculateRoot}>Calculate</Button></center><br />
                        
                    </Form>
                
                    <br></br>
                    <h5>Answer = {X.toPrecision(7)}</h5><br />
                    <Container fluid>{html}</Container>
                    </Col>
                    <Col sm={5}>      
                        <Container fluid>
                            <Plot data={plot} layout={layout} />
                            
                        </Container>                        
                    </Col>
                </Row>       
            </Container>           
    )
}

export default Secant