import React from 'react'; 

import { receiveTodo } from '../../actions/todo_actions'; 

class TodoForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      id: 1, 
      title: '', 
      body: '', 
      done: false 
    }; 

    this.updateTitle = this.updateTitle.bind(this); 
    this.updateBody = this.updateBody.bind(this); 
    this.updateDone = this.updateDone.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    }); 
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    }); 
  }

  updateDone(e) {
    this.setState({
      done: !this.state.done
    })
  }

  handleSubmit(e) {
    e.preventDefault(); 
    this.props.receiveTodo(this.state); 
    this.setState({
      id: this.state.id + 1, 
      title: '',
      body: '',
      done: false 
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <label>
          Title: 
          <input type="text"
                value={this.state.title}
                onChange={this.updateTitle}/>
        </label>

        <label>
          Body: 
          <input type="text"
                value={this.state.body}
                onChange={this.updateBody}/>
        </label>

        <label>
          Complete: 
          <input type="checkbox" 
                value="Done"
                onChange={this.updateDone}/>
        </label>

        <input type="submit" value="Add Todo!"/>
      </form> 
    )
  }
}

export default TodoForm; 