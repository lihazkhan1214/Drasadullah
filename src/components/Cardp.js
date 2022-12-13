import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

const Cardp = (p) => {
    const [show, setShow] = useState(false);
    return (<>

        <div className="col-md-4 Research">
          
        <div className="card p-2" onClick={() => setShow(true)} >
        <img src={p.imgsrc} className="" alt="..." />  
        <div className="card-body">
           <p className='prgp text-center'>Click on image for Details</p>

        </div>
    </div>


<Modal
show={show}
onHide={() => setShow(false)}
dialogClassName="modal-90w"
aria-labelledby="example-custom-modal-styling-title"
>
<Modal.Header closeButton>
  <Modal.Title id="example-custom-modal-styling-title">
   title
  </Modal.Title>
</Modal.Header>
<Modal.Body>
<p className="modal-prgp  text-center">

{p.para}


</p>
</Modal.Body>
</Modal>
            
        </div>






    </>);
}

export default Cardp;