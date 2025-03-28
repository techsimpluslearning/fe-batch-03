

function heading() {
    return(
    <div className="card-box ">
   
    <div className="title-section">
      <p>Title</p>
    </div>

   
    <div className="due-date-section">
      <p>Due Date</p>
    </div>

   
    <div className="priority-section">
      <p>Priority</p>
      <select className="form-select ">
        <option>Medium</option>
        <option >Easy</option>
        <option >Hard</option>
      </select>
    </div>

    
 
  </div>
    )
}

export default heading