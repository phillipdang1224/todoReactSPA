import React, {Component} from 'react';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Total from './Components/Total';
import {Container,Row,Col} from 'react-bootstrap';
// Main application
export default class App extends Component {
  state = {
    //Initial state of the application 2 elements
    todos: [
      {id: 1,name:'Learn todolist',desc: 'do this task',status:'Planned',estimate:2,btnClr:'primary'},
      {id: 2,name:'Learn React',desc: 'do this task again',status:'Complete',estimate:3,btnClr:'success'},
      {id: 3,name:'Learn Angular',desc: 'do this task again',status:'In Progress',estimate:6,btnClr:'secondary'}
    ]
  }
  // adds a task to the list
  // ID is the number of elements in the list

    addTodo = (todo) => {
      todo.id = this.state.todos.length+1;
      
      if(todo.status == "Planned"){
        todo.btnClr = "primary"
      }else if (todo.status == "In Progress"){
        todo.btnClr = "secondary"
      }else{
        todo.btnClr = "success"
      }
      let todos = [...this.state.todos, todo]

      this.setState({
        todos
      })


  }
//Filters out the specified ID in the list
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  //Changes the state of the element
  editState = (id) =>{
    // Used hash table to change state of button and button styling
    const statusMap = {"Planned":"In Progress", "In Progress":"Complete","Complete":"Planned"}
    const colourMap = {"primary":"secondary","secondary":"success","success":"primary"}
    const todos = this.state.todos;
    todos[id-1]["status"] = statusMap[todos[id-1]["status"]]
    todos[id-1]["btnClr"] = colourMap[todos[id-1]["btnClr"]]
    this.setState({
      todos
    })


  }
  // Actual application
  render(){
    return (
      <div className="App">
      <Container>
      
      <Row>
      <Col>
      <h1>Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} editState={this.editState}/>
            <Total todos={this.state.todos}/>
      </Col>
      <Col>
      <h1>Add Todo</h1>
      <AddTodo addTodo={this.addTodo}/>
      </Col>
      </Row>
      </Container>

      </div>
      )
  }
}
