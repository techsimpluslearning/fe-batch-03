
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const Addnewtaskbutton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onclicksidebar = () => {
    setIsOpen(!isOpen);
  };

  const buttonText = "Add New Task";

  return (
    <div>
      <Modal 
        className="model"
        isOpen={isOpen} 
        toggle={onclicksidebar} 
        centered // This makes the modal open in the center
      >
        <ModalHeader toggle={onclicksidebar} className="modalheader">
          {buttonText}
        </ModalHeader>
        <ModalBody>
          <input 
            type="text" 
            placeholder="Title" 
            className="searchbar mb-2 p-2" 
          />
          <input 
            type="text" 
            placeholder="Description" 
            className="searchbar mb-3 p-2" 
          />



           <select className="searchbar mb-3 p-2">
            <option value="" disabled selected hidden>
               Status
            </option>
            <option value="Progress"> Progress</option>
            <option value="Pending">Pending</option>
            <option value="Complete">Complete</option>
          </select>
            <input 
            type="date" 
            placeholder="Due Date" 
            className="searchbar mb-3 p-2" 
          />
           
          <select className="searchbar mb-3 p-2">
            <option value="" disabled selected hidden>
               Priority
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <Button
            className="btnbackground" 
            onClick={onclicksidebar}
          >
           {buttonText}
          </Button>
        </ModalBody>
      </Modal>

      <div>
        <Button 
          color="" 
          className="btnbackground" 
          onClick={onclicksidebar}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Addnewtaskbutton;










