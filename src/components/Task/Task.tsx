import React from 'react'
import "./Task.css"
import { constent } from '../../constent'
import { Col } from 'reactstrap';
interface Props {
  value: string;
}


const Task : React.FC<Props> = (props) => {
  const color = constent.color;
  const getColor = ()=>{
    return (color[Math.floor(Math.random()*color.length)])
  }
  return (
    <div className='task' style={{backgroundColor: getColor()}}>
      <p>{props.value}</p>
      <div className="icons">
        <i className="bi bi-trash3"></i>
        <i className="bi bi-pencil"></i>
      </div>
    </div>
  )
}

export default Task;