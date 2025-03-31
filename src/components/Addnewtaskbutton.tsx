import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="btn" color="primary" onClick={toggle}>
        Create new task
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add task</ModalHeader>
        <ModalBody>
          <div className="modalfield">
         
            <Label className="fw-bold">Title</Label>
            <Input type="text" placeholder="Enter title"></Input>
            <Label className="fw-bold">Description</Label>
            <Input type="text" placeholder="Enter description"></Input>
            <Label className="fw-bold">Priority:</Label>
            <Input type="select">
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Input>
            <Label className="fw-bold">Status:</Label>
            <Input type="select">
              <option value="">Select status</option>
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </Input>
            <Label className="fw-bold">Select date</Label>
            <Input type="date"></Input>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="createtask" onClick={toggle}>
            Add task
          </Button>{" "}
          <Button className="canceltask" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
