import Calendar from "react-calendar";
import {Card, CardBody, CardTitle, CardText,CardSubtitle, Button} from "reactstrap"
const TopRight = () =>{
    return (
        <div>
           <Card style={{margin:"4px"}}>
            
                 {/* <img alt="Sample"src="https://picsum.photos/300/200"/> */}
                     <CardBody>
                         <CardTitle tag="h5">
                             TopRight
                         </CardTitle>
                             <CardSubtitle className="mb-2 text-muted" tag="h6">
                                Card subtitle
                             </CardSubtitle>
                                 <CardText>
                                     Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                 </CardText>
                                    <Button> Button</Button>
                     </CardBody>
            </Card>
        </div>
    
    )
}
export default TopRight;