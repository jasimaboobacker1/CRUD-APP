import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees'
import { useNavigate } from 'react-router-dom'

function Edit(){
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [id,setId] = useState('');

    let history = useNavigate();

   
    var index = Employees.map(function(e) {
        return e.id
      }).indexOf(id);

      const handlesubmit = (e) => {
        e.preventDefault();
         
       let a = Employees[index];
       a.Name = name;
       a.Age = age;

        history('/');
    }

    useEffect(()=>{
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))

    },[])

    
      return (
       <>
            <div>
                 <Form className='d-grid gap-2' style={{margin:"15rem"}}>
                <Form.Group className='mb-3' controlId='fromName'>
               <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='fromage'>
               <Form.Control type='text' placeholder='Enter age' value={age} required onChange={(e) => setAge(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' onClick={(e)=> handlesubmit(e)}>Update</Button>
                </Form>
            </div>
       </>
      )

}


export default Edit