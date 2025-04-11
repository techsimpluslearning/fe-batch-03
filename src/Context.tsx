import { createContext, use, useState } from "react";
import Addnewtaskbutton, { valuesType } from "./Components/Addnewtaskbutton";
import App from "./App";
import { useNavigate } from "react-router";

// interface  contextType{
//   isOpen:boolean |null,
//   setIsOpen:any,
//   todos:valuesType[] | null,
//   setTodos:any,
//   values:valuesType |null ,
//   setValues:any,
//   btn:string,
//   setBtn:any,
//   index:number,
//   setIndex:any,
//   onDelete:any,
//    onEditClick:any,

//  }
 
 export const myContext=createContext<any>({
   isOpen:false,
   setIsOpen:()=> {},
   todos:[],
   setTodos:()=> {},
   values:null,
   setValues:()=>{},
   btn:"Add new Task",
   setBtn:()=>{},
   index:-1,
   setIndex:()=>{},
   onDelete:()=>{},
   onEditClick:()=>{},
   filterTask:null,
   setFilterTask:()=>{},
   taskMsg:"Add First task",
   setTaskMsg:()=>{},

 }
 );

const Context=(props:any)=>{
  const onDelete=(i:number)=>{
    const prevTodos=JSON.parse(JSON.stringify(todos));
  prevTodos.splice(i,1);
  setTodos(prevTodos);
  
}
const onEditClick = (item: valuesType,i:number) => {

  setIndex(i);
  setBtn("Update Task");
  setIsOpen(true);
  setValues({ ...item });
}

  const [filterTask,setFilterTask]=useState(null);
  // const [taskMsg,setTaskMsg]=useState("Add First Task");
  const allTasks=JSON.parse(localStorage.getItem("allTasks")) || []
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState<valuesType[]>(allTasks);
  const [values, setValues] = useState<valuesType>({
    title: "",
    description: "",
    status: null,
    dueDate: new Date().toDateString(),
    importance: null,
  });

  const [btn,setBtn]=useState("Add new Task");
  const [index,setIndex]=useState(-1);
  const {children}=props

  return (
    <myContext.Provider value={ {isOpen ,setIsOpen,todos,setTodos,values,setValues,btn,setBtn,index,setIndex,onDelete,onEditClick,filterTask,setFilterTask}} >
      {children}
    </myContext.Provider>
  )
}
export default Context;
