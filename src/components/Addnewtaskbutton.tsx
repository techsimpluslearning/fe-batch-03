// import { Button } from 'reactstrap'
// import {Offcanvas} from 'reactstrap';
// import {OffcanvasHeader} from 'reactstrap';
// import { OffcanvasBody } from 'reactstrap';
// const Addnewtaskbutton = () => {
//   return (

//     <div>
//         <Offcanvas toggle={function noRefCheck() {}}>
//         <OffcanvasHeader toggle={function noRefCheck() {}}>

//         </OffcanvasHeader>
//         <OffcanvasBody>
//           <strong>This is the Offcanvas body.</strong>
//         </OffcanvasBody>
//       </Offcanvas>
//       <Button  className="btnbackground" onClick={function noRefCheck() {}}>
//         Add new task
//       </Button>

//     </div>
//   );
// };

// export default Addnewtaskbutton;

// import { useState } from "react";
// import { Button, Placeholder } from "reactstrap";
// import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

// const Addnewtaskbutton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const onclicksidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <Offcanvas direction="end" isOpen={isOpen} toggle={onclicksidebar}>
//         <OffcanvasHeader toggle={onclicksidebar} className="offcanvasheader">
//           Add New Task
//         </OffcanvasHeader>
//         <OffcanvasBody>
//           <input type="text" placeholder="Title" className="searchbar" />
//           <input type="text" placeholder="Description" className="searchbar" />

//           <Button className="btnbackground" onClick={onclicksidebar}>
//             Create new task
//           </Button>
//         </OffcanvasBody>
//       </Offcanvas>
//       <div>
//         <Button className="btnbackground" onClick={onclicksidebar}>
//           Create new task
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Addnewtaskbutton;



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
          <textarea  
           type="text" 
            placeholder="Description" 
            className="searchbar mb-3 p-2" />


         <select className="searchbar mb-3 p-2">
            <option value="" disabled selected hidden>
               Status
            </option>
            <option value="progress">Progress</option>
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

