import React, { Component} from 'react';
import {Form,Button,Card,ListGroup} from 'react-bootstrap';
export default class AddTodo extends Component {
	// Component that creates the form.
	state = {
		desc: '',
		status: '',
		estimate: '',
		name: ''
	}
		handleName = (e) => {
		this.setState({
			name: e.target.value
		})
	}
	handleChange = (e) => {
		this.setState({
			desc: e.target.value
		})
	}
	handleSelect = (e) => {
		this.setState({
			status: e.target.value
		})
	}
	handleEstimate = (e) => {
		e.preventDefault();
		this.setState({
			estimate: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state);
		document.getElementById("addForm").reset();
	}
	render(){
		//Creates the Form for adding a task.
		return(
			<div>
			<Card style={{ width: '100%' }}>
			<ListGroup variant="flush">
				<Form id="addForm" onSubmit ={this.handleSubmit}>
					<ListGroup.Item>
					<Form.Group>
						<Form.Label>Enter task name: </Form.Label>
						<Form.Control required type = "text" onChange={this.handleName} />
					</Form.Group>
					</ListGroup.Item>
				<ListGroup.Item>
					<Form.Group>
						<Form.Label>Enter task description: </Form.Label>
						<Form.Control required type = "text" onChange={this.handleChange} />
					</Form.Group>
					</ListGroup.Item>
					<ListGroup.Item>
					<Form.Group>
						<Form.Label> Select task progress: </Form.Label>
						<Form.Control required as="select" optionObject={this.handleSelect} onChange= {this.handleSelect}>
							<option value=""></option>
							<option value="Planned">Planned</option>
							<option value="In Progress">In Progress</option>
							<option value="Complete">Complete</option>
						</Form.Control>
					</Form.Group>
					</ListGroup.Item>
					<ListGroup.Item>
					<Form.Group>
						<Form.Label> Time estimate</Form.Label>
						<Form.Control required type="number"onChange={this.handleEstimate} step="0.1" min="0" />
					</Form.Group>
					</ListGroup.Item>
					<ListGroup.Item>
					<Button variant="outline-success" block type="submit" onSubmit={this.handleSubmit}>Submit task</Button>
					</ListGroup.Item>
				</Form>
			</ListGroup>
			</Card>
			</div>
			)
	}
} 