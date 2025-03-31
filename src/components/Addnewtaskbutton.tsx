import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Addnewtaskbutton =()=>{
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button className="btnColor"  onClick={toggle}>
        ADD NEW TASK
      </Button>
      <Modal className='main' isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className='header'>NEW TASK DETAILS</ModalHeader>
        <ModalBody className='inputField'>
          <h5 className='margin=2'>TITLE :</h5>
          <input className='d-flex' type="text" placeholder='title'/>
          <h5>DISCRIPTION :</h5>
          <input className='d-flex' type="text" placeholder='discription'/>
          <h5>DUE DATE :</h5>
          <div>
          <input className='d-flex' type="date" placeholder='due date'/>
          </div>
          <h5>STATUS :</h5>
          <input className='d-flex' type="dropbox" placeholder='status'/>
          <h5>PRIORITY :</h5>
          <input className='d-flex'  type="text" placeholder='priority'/>
        </ModalBody>
        <ModalFooter>
          <Button style={{color:"black",backgroundColor:"pink"}} onClick={toggle}>
            submit
          </Button>{' '}
          <Button style={{color:"white"}} onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Addnewtaskbutton;
