



import React, { useState } from "react";
import { Form } from "react-bootstrap";


const Contact = () => {
    const [d, Sdata] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });


    const Inputfun = (event) => {
        const [name, value] = event.target;

        // Sdata((preval) => {
        //     return {
        //         ...preval,
        //         [name]: value,
        //     };

        // });

    };

    const Formsub = (e) => {
        e.preventDefault();
        alert("form submited successfully");
    };

    return (<>


      <div className="container Contact mt-5 " >
     
        <div className="row d-flex justify-content-start contact-p align-items-center ">

            <div className="col-md-4 p-4 contact">
                <Form onSubmit={Formsub}>
<h1 className="text-center">Contact Me</h1>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">FullName</label>
                        <input type="text"  name="fullname" onChange={Inputfun} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="text" onChange={Inputfun} name="email"  className="form-control" id="exampleFormControlInput1" placeholder="Eneter Your Email" />
                    </div>


                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea name="msg" onChange={Inputfun}  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>


                    <button type="submit" onChange={Inputfun} class="btn text-light">Send msg</button>
                </Form>
            </div>
          
        </div>
        
        </div>


    </>);
}
export default Contact;