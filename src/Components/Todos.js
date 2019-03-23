import React from 'react';
import {Button,Card,ListGroup,Row,Col} from 'react-bootstrap';
export default class Todos extends React.Component{
// Component that lists the tasks todo.
		render(){
			// Creates the todo list.
			const todoList = this.props.todos.length ? (
			this.props.todos.map(todo => {
				return (
				<Card style={{ width: '100%' }}>
  				<ListGroup variant="flush">
					<div key={todo.id}>

						<ListGroup.Item>
							<Row>
								<Col>
									<b>Task Name: </b>
								</Col>
								<Col>
									{todo.name}
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col>
									<b>Task Description: </b>
								</Col>
								<Col>
									{todo.desc}
								</Col>
							</Row>
						</ListGroup.Item>

						<ListGroup.Item>
							<Row>
								<Col>
									<b>Task Status: </b>
								</Col>
								<Col> 
									<Button block variant={todo.btnClr} 
									onClick={() =>{this.props.editState(todo.id)}}>
									{todo.status}
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>

						<ListGroup.Item>
							<Row>
								<Col>
									<b>Task Estimate: </b>
								</Col>
								<Col>
									{todo.estimate} Hours
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col>
								
								</Col>
								<Col>
									<Button variant="danger" onClick={() =>{this.props.deleteTodo(todo.id)}}>Click to Delete
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
					</div>
				</ListGroup>
				</Card>
					)
			})

			) : (
				<Card style={{ width: '100%' }}>
  				<ListGroup variant="flush">
  				<ListGroup.Item>No more tasks!</ListGroup.Item>
 				</ListGroup>
				</Card>
			)
			return(
			<div>
				{todoList}
			</div>
				)
		}
}