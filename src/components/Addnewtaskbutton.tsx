import  { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"; 
import "./Addnewtaskbutton.css"; 

const AddNewTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(""); 

  const onclicksidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleRadioChange = (event) => {
    setIsCompleted(event.target.value);
  };

  return (
    <div>
      <div className={`modal-overlay ${isOpen ? 'show' : ''}`}></div>
      
      <Button className="gradient-btn" onClick={onclicksidebar}>
        Create New Task
      </Button>
      <Modal isOpen={isOpen} toggle={onclicksidebar} centered className="gradient-modal">
        <ModalHeader toggle={onclicksidebar} className="gradient-header">
          Add New Task
        </ModalHeader>
        <ModalBody>

          <input
            type="text"
            placeholder="Title"
            className="searchbar"
          />

          <textarea
            placeholder="Description"
            className="searchbar">
          </textarea>
            
            <select className="priority-select" aria-label="Task Priority">
              <option value="none">Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <input
            type="date"
            placeholder="Due Date"
            className="searchbar"
          />

          <div className = "radio">
            <FormControl component="fieldset">
            <FormLabel id="completed-radio-buttons-group-label">
              Is the task completed?
            </FormLabel>
            <RadioGroup
              aria-labelledby="completed-radio-buttons-group-label"
              value={isCompleted}
              onChange={handleRadioChange}
              row
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          </div>

          <Button className="btnbackground" onClick={onclicksidebar}>
            Add new task
            </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddNewTaskButton;