import React from 'react'
import { Card } from 'react-bootstrap'
export default function RPcard(p) {
  return (
    <>
    
    <div className="col-md-5 RP">
    
    <Card className=" card RPcard p-2">
     
      <Card.Body>
        <Card.Title className='subtitle'>{p.heading}</Card.Title>
        <Card.Text className='para'>
        {p.para}
        </Card.Text>
     
      </Card.Body>
    </Card>
    
    
    </div>
    
    
    
    
    
    </>
  )
}
