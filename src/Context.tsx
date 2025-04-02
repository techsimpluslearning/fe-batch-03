import { createContext, useState } from "react";
import Addnewtaskbutton, { valuesType } from "./Components/Addnewtaskbutton";
import App from "./App";
interface  contextType{
  isOpen:boolean |null,
  setIsOpen:any,
  todos:valuesType[] | null,
  setTodos:any,
  values:valuesType |null ,
  setValues:any,
  btn:string,
  setBtn:any,
  index:number,
  setIndex:any
 }
 
 export const myContext=createContext<contextType>({
   isOpen:false,
   setIsOpen:()=> {},
   todos:[],
   setTodos:()=> {},
   values:null,
   setValues:()=>{},
   btn:"Add new Task",
   setBtn:()=>{},
   index:-1,
   setIndex:()=>{}

 }
 );

const Context=()=>{
  const allTasks=JSON.parse(localStorage.getItem("allTasks")) || []
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState<valuesType[]>(allTasks);
  const [values, setValues] = useState<valuesType>({
    title: "",
    description: "",
    status: null,
    dueDate: new Date(),
    importance: null,
  });
  const [btn,setBtn]=useState("Add new Task");
  const [index,setIndex]=useState(-1);


  return (
    <myContext.Provider value={ {isOpen ,setIsOpen,todos,setTodos,values,setValues,btn,setBtn,index,setIndex}} >
<App/>

    </myContext.Provider>
  )
}
export default Context;
