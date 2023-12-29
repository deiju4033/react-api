import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'


function AppiCalling() {
    const [data,setData]=useState([])
    const [randomId,setRandomId]=useState(Math.floor(Math.random() * (30 - 1 + 1)) + 1)
    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then((res)=>{
           setData(res.data.users)
        })
    },[])
  return (
    <div>
        {data.filter((items)=>items.id==randomId).map(items=>(<Row>
        <Col  className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <img width={191} height={191} style={{borderRadius:'100px'}} className='border border-2 ' src={items.image}   alt="" />
            <h3>{items.lastName}</h3>
            <p>{items.gender}</p>
            <div className='row'>
                <div className='col-5 text-center mb-3'>
                        <h5>Birth Date</h5>
                        <p>{items.birthDate}</p>
                </div>
                <div className='col-5 text-center mb-3'>
                        <h5>Age</h5>
                        <p>{items.age}</p>
                </div>
                <div className='col-5 text-center '>
                        <h5>Weight</h5>
                        <p>{items.weight}</p>
                </div>
                <div className='col-5 text-center '>
                        <h5>Height</h5>
                        <p>{items.height}</p>
                </div>
            </div>
            <Button onClick={()=>setRandomId(Math.floor(Math.random() * (30 - 1 + 1)) + 1)} variant="danger">Get New User</Button>
        </Col>
        <Col className='d-flex flex-column    mt-3 '>
            <div className='mb-5'>
                <h3>Home Address</h3>
                <h5>{items.address.address}</h5>
            </div>
            <div className='mb-5'>
                <h3>Mobile Phone</h3>
                <h5>{items.phone}</h5>
            </div>
            <div className='mb-5'>
                <h3>Company</h3>
                <h5>{items.company.name}</h5>
            </div>
            <div className='mb-5'>
                <h3>Job Title</h3>
                <h5>{items.company.title}</h5>
            </div>
            <div className=''>
                <h3>E-mail</h3>
                <h5>{items.email}</h5>
            </div>
        </Col>
      </Row>))}
    </div>
  )
}

export default AppiCalling