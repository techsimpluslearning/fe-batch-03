import { useState } from "react";
import { Button, Placeholder } from "reactstrap";

import { Modal, ModalHeader, ModalBody } from "reactstrap";


const Addnewtaskbutton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const onclicksidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [id]: value,
    }));
  };

  const handleAddTask = () => {
    console.log(task);
    setIsOpen(false);
    setTask({
      title: "",
      description: "",
      status: "",
      dueDate: "",
    });
  };

  return (
    <div className="model">
      <Modal isOpen={isOpen} toggle={onclicksidebar}>
        <ModalHeader toggle={onclicksidebar} className="offcanvasheader">
          Add New Task
        </ModalHeader>
        <ModalBody>

        <label htmlFor="title">Title</label>
          <div>
            
            <input
              id="title"
              type="text"
              placeholder="Title"
              className="searchbar"
              value={task.title}
              onChange={handleInputChange}
            />
          </div>
      
            <div>
            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              placeholder="Description"
              className="searchbar"
              value={task.description}
              onChange={handleInputChange}
            />
            </div>
            
            <label htmlFor="status">Priority</label>
          <div>
  <select
    id="status"
    className="searchbar"
    value={task.status}
    onChange={handleInputChange}
  >
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>
  </div>
          <label htmlFor="dueDate">Due date</label>
  
          <div>
            <input
              id="dueDate"
              type="date"
              placeholder="Due date"
              className="searchbar"
              value={task.dueDate}
              onChange={handleInputChange}
            />
          </div>
          <Button className="btnbackground addtaskbtn" onClick={handleAddTask}>
            Add new task
          </Button>
        </ModalBody>
      </Modal>
      <div>
        <Button className="btnbackground" onClick={onclicksidebar}>
          Create new task
        </Button>
      </div>
    </div>
  );
};

export default Addnewtaskbutton;