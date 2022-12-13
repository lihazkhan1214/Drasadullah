import React from 'react'
import { Card } from 'react-bootstrap'
function AwardCard(p) {
    return (
        <>
        
        <div className=" awardcard p-sm-5" >
        <Card className="card " >
            <Card.Body>
                <p className="text-center  date">{p.date}</p>
                <div className="img d-flex justify-content-center ">
              
               <img src={p.imgsrc} className="img-top" width="50px" height="50px" alt="..."/>
               </div>
                <Card.Text className="mt-2 para">
                    {p.para}
                </Card.Text>

            </Card.Body>
        </Card>

    </div>
        
        
        </>
    )
}

export default AwardCard;
