import React from 'react'
import RPcard from './RPcard';
import RPcarddata from './RPcarddata';
import RPcarddata2 from './RPcarddata2';
import pic1 from '../images/Rectangle 3.png';
import pic2 from '../images/Rectangle 2.png';
export default function ResearchandPubliction() {
    return (
        <>
            <div className="row ResearchandPublicatin" id="naveed">
                <div className="col-12 mx-auto">
                    <h1 className='my-5 text-center'>Research & Publication</h1>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5">
                            <img src={pic1} className="img-fluid Transition" alt="" srcset="" />



                        </div>
                        {
                            RPcarddata.map((val, ind) => {
                                return <RPcard heading={val.heading} para={val.para} />

                            })
                        }






                    </div>
                    <div className="row d-flex justify-content-end align-items-center mt-5">
                        
                       
                        {
                            RPcarddata2.map((val, ind) => {
                                return <RPcard heading={val.heading} para={val.para} />

                            })
                        }

                        <div className="col-md-5">
                        <img src={pic2} className="img-fluid Transition" alt="" srcset="" />



                    </div>




                    </div>
                </div>

            </div>


        </>
    )
}
