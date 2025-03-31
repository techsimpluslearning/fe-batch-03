import "./Addnewtaskbutton.css";

import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Placeholder } from "reactstrap";
import Calendar from "./Calendar";
import TaskCalendar from "./TaskCalender";
// import { jsx } from "react/jsx-runtime";

const Addnewtaskbutton = ({setData,data}) => {
  const date=new Date();
  const [details,setDetails]=useState({title:"",description:"",priority:"",status:"",currDate:date.toDateString(),dueDate:""});
  const [isOpen, setIsOpen] = useState(false);
  
  const onclicksidebar = () => {
    setIsOpen(!isOpen);
  };

  const onInputChange=(e,f)=>{
      setDetails({...details,[f]:(e.target? e.target.value:e)});  
  }

  const onsubmit=()=>{
    if (details.title && details.description && details.dueDate && details.priority) {
      setData([...data,details]);
      setIsOpen(!isOpen)
    }else{
      alert("fill all details");
    }
  }
  console.log(data);
  localStorage.setItem("storedData",JSON.stringify(data));


  return (
    <div className="main">
      <button className="btn btn-dark mb-2" onClick={()=>setIsOpen(!isOpen)}>Add New Task</button>
      <Modal isOpen={isOpen}>
        <ModalHeader >
          <p className=""> New Task Details </p>
        </ModalHeader>
        <ModalBody>
          <div className="mBody ">
            <div>
              <label htmlFor="title">Title : </label>
            <input className="form-control" type="text"  placeholder="Title" id="title" onChange={(e)=>onInputChange(e,"title")}/>
            </div>
            <div>
              <label htmlFor="Desc">Description : </label>
            <input className="form-control" type="text"  placeholder="Description" id="Desc" onChange={(e)=>onInputChange(e,"description")}/>
            </div>
            <div > 
               
            <label htmlFor="prior">Priority : </label>
            <select className="form-control" name="priority" id="prior" onChange={(e)=>onInputChange(e,"priority")}>

              <option selected disabled value="">Select</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            </div>
            <div className="d-flex align-items-baseline gap-2">
              <p>Status :</p>
            
              <input type="radio" name="status" id="completed" value="completed" onChange={(e)=>onInputChange(e,"status")}/>
              <label htmlFor="completed">Completed</label>
            &ensp;
              <input type="radio" name="status" id="incompleted" value="incompleted" onChange={(e)=>onInputChange(e,"status")}/>
              <label htmlFor="incompleted">Incompleted</label>

            </div>
            <div className="d-flex">
              <p>Due Date :</p>
            <div className="calendar  ">
              <TaskCalendar onInputChange={onInputChange}/>
              </div>
            
          </div>
          </div>

        </ModalBody>
        <ModalFooter>
          <div className="mFoot d-flex gap-2">
                <button className="btn btn-dark" onClick={()=> onsubmit()}>Submit</button>
                <button className="btn btn-secondary" onClick={()=>setIsOpen(!isOpen)}
                >Cancel</button>

          </div>
        </ModalFooter>
      </Modal>
    </div>
  )}

export default Addnewtaskbutton;
