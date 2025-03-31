import  { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

const Add_modal=()=>{
  const [modal, setModal] = useState(false);
  

  const toggle = () =>{
     setModal(!modal); }

  return (
    <div>
      <Button className='btn1' color="danger" onClick={toggle}>
        Add Task
      </Button>
      <Modal  isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader className='heading' toggle={toggle}><h2>Add New To-Do</h2></ModalHeader>
        <ModalBody >
         <div >
         <div className='field'> <input className='form-control' type='text'  placeholder='Enter Task name'/> <p>Title</p>  </div>
        <div className='field'> <textarea cols={12} rows={8} className='form-control' placeholder='Describe the task' /> <p>Description</p> </div>
        <div className='field'> <select className='form-control' name='priority'>
             <option value="High"> High</option>
             <option value="Medium">Medium</option>
             <option value="Low"> Low</option>
        </select> <p>Priority</p> </div>
        <div className='field'> <input className="form-control" type='date' /> <p>Today's Date</p></div>
        <div className='field'> <input className="calendar" type='date' /> <p>Due Date</p></div>
         </div>
        </ModalBody>
       
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Add Task
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Add_modal;