import React from 'react'
import { Card } from 'react-bootstrap';


function Expcard(p) {
    return (
        <>
        
      <div className=" Experience p-sm-5">
     
        <Card className="card " >
            <Card.Body>
                <p className="text-center date">{p.date}</p>
                <Card.Title className="text-center title">{p.title}</Card.Title>
               

                <Card.Text className="text-center para">
                    {p.para}
                </Card.Text>

            </Card.Body>
        </Card>
      
</div> 
        
        
        </>
    )
}

export default Expcard
