import { useEffect, useState } from 'react';
import {tasks} from '../constent';
import Task from './main comp/Task';
export default function MainComponent() {
const [currPage,SetCurrentPage]=useState(1);
const [ActivePage,setActivePage]=useState([]);
const limit=4;
const pagination =()=>{
  
  const totalpage=Math.floor(tasks.length/limit);
  console.log(tasks.length);
  
  let pages=Array.from(Array(totalpage+1).keys()).slice(1);
  let selectedPage=currPage;
  if (selectedPage>2 && selectedPage<(totalpage-1)) {
    selectedPage=selectedPage-2;
  }else if(selectedPage<=2){
    selectedPage=0;
  }
  else if(selectedPage=totalpage){
    selectedPage=selectedPage-3;
  }else if(selectedPage=(totalpage-1)){
    selectedPage=selectedPage-2;
  }
  let activePage=pages.slice(selectedPage,selectedPage+3);
  setActivePage(activePage);
  console.log(activePage);
  

}
useEffect(()=>{
  pagination()
},[currPage]);
let lowerLimit=(currPage*limit)-(limit-1);
  const currentTask=tasks?.filter((d,i)=>{
    console.log(i);
    
    return (currPage*limit)>=(i+1) && lowerLimit<=(i+1);
  })
  console.log(currentTask);
  
  
  return (

    <div className="card-box">
      <p className='title'>All Tasks</p>
      <hr />
        <div className="Tasks">
         
        {currentTask?.map((v,i )=>{
            return <Task key={i}  task={v}/>
          
        })}

        </div>
        <div className='pagination'>
          {ActivePage.map((d,i)=>{
            return <span key={i} className={` dot ${d==currPage && "bg-secondary"}`} onClick={()=>SetCurrentPage(d)}>{d}</span>
          })}
        </div>
    </div>
  )
}
