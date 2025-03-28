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

import { useState } from "react";
import { Button, Placeholder } from "reactstrap";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

const Addnewtaskbutton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onclicksidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Offcanvas direction="end" isOpen={isOpen} toggle={onclicksidebar}>
        <OffcanvasHeader toggle={onclicksidebar} className="offcanvasheader">
          Add New Task
        </OffcanvasHeader>
        <OffcanvasBody>
          <input type="text" placeholder="Title" className="searchbar" />
          <input type="text" placeholder="Description" className="searchbar" />

          <Button className="btnbackground" onClick={onclicksidebar}>
            Create new task
          </Button>
        </OffcanvasBody>
      </Offcanvas>
      <div>
        <Button className="btnbackground" onClick={onclicksidebar}>
          Create new task
        </Button>
      </div>
    </div>
  );
};

export default Addnewtaskbutton;
