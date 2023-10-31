import React from 'react'
import Employees from './Employees'
import {Button,Table} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate} from 'react-router-dom'


function Home() {


  let history = useNavigate();

  const handleEdit = (name , id , age) => {
    localStorage.getItem('Name',name);
    localStorage.getItem('Age',age)
    localStorage.getItem('Id',id)

}

  const handleDelete = (id) =>{
    var index = Employees.map(function(e) {
      return e.id
    }).indexOf(id);

    Employees.splice(index,1);
    history('/');
  }


  return (
    <>
    <div style={{margin:"10rem"}}>
      {/* <div><h1  style={{width:'95%',height:'100px'}}>CRUD APP</h1></div> */}
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Employees && Employees.length > 0
            ?
            Employees.map((item) =>{
              return(
                <tr>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>
                  {/* <Link to="/edit">
                    <Button onClick={() => handleEdit(item.id, item.Name,item.Age)}>Edit</Button>  
                    </Link> */}
                    &nbsp;
                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                 
                  </td>
                

                </tr>
                
              )
   
            } )
            :
            "No data available"
          }
        </tbody>
      </Table>
      <br />
      <br />
      <Link className='d-grid gap-1' to="/create">
        <Button size='lg'>ADD</Button>
      </Link>
    </div>
    </>
  )
}

export default Home