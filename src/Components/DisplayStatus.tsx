import"./DisplayStatus.css"

import {Card, CardBody, CardTitle, CardText,CardSubtitle, Button} from "reactstrap"

const DisplayStatus = () =>{
    return (
        <div>
           <Card  style={{margin:"4px"}}>
                 {/* <img alt="Sample"src="https://picsum.photos/300/200"/> */}
                    <div className="chip-div">1</div>
                    <div className="chip-div">2</div>
                    <div className="chip-div">3</div>
                    <div className="chip-div">4</div>
                    <div className="chip-div">5</div>
            </Card>
        </div>
    )
}
export default DisplayStatus;
