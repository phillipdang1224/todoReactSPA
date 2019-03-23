import React from 'react';
import {Button,Card,ListGroup,Row,Col,Alert} from 'react-bootstrap';
export default class Total extends React.Component {
  render(){
    return(
      	<div>
					<Card style={{ width: '100%' }}>
  				<ListGroup variant="flush">
  					<Alert variant="success">
  						<Row>
  	     				<Col>
    							<h1>Total Time:</h1> 
    						</Col>
    						<Col>
    							<h1>
    								{this.props.todos.reduce((sum, i) => (
      							sum += parseFloat(i.estimate),
      							sum = parseFloat(sum)
    								), 0)} Hours
    							</h1>
    						</Col>
  	  				</Row>
	    			</Alert>
					</ListGroup>
					</Card>
       	</div>
        )
}
}
