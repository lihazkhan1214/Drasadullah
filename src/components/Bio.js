import React from "react";
import pic from'../images/mainpic.png';
import {Link} from 'react-scroll';




// import pic from '';
function Bio() {
    return (<>
        <div className="container mx-auto mt-5">
            <div className="row">

                <div className="col-12 d-flex align-content-center">

                    <div className="row bio d-flex justify-content-between">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center">
                                <p className="para mt-4 me-2">Hi I’m</p>
                                <h1 className=" ">Asad Ullah</h1>

                            </div>
                           
                            <h6  className="prgp">Associate Professor & Chairman</h6>
                            <p className="prgp my-3">

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nec egestas posuere et habitant est enim laoreet.

                            </p>
                            <button className="btn contact-btn  my-3" ><Link spy={true} smooth={true} offset={5} duration={500}  to="Contact" >Contact Me</Link></button>
                            <button id="btn-seemore" className="btn  my-3 ms-3" >See More</button>
                        </div>
                        <div className="col-md-5 d-flex align-content-center">
                      <img className="img-fluid bio-img Transition" src={pic}  alt="" />
                        
                        </div>
                    </div>


                </div>
            </div>
        </div>


    </>);
}

export default Bio;