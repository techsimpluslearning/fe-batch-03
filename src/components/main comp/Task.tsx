const Task=({task})=>{
    const fcolor=task.status=="completed"?"rgb(0, 169, 188)": "red";
    const  date=new Date(task.dueDate);
//   console.log(date.toDateString());
    return <div className="task"   >
        <div className="d-flex align-item-center justify-content-between">
            <h6>{task.todo}</h6>
            <div className="text-secondary"><i className="fa-solid fa-pen-to-square"></i> &ensp; <i className="fa-solid fa-trash"></i></div>
        </div>
        <div className="d-flex justify-content-between">
        <div >Status : <span style={{color:fcolor }}>{task.status}</span> </div>
        <div> Due Date : {date.toDateString()}</div>
        </div>

    </div>
}

export default Task;