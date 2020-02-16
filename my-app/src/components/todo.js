import React from 'react';
import store from "../store/index";
import { TodoItem } from "./TodoItem";


export class Todo extends React.Component {
  constructor(props) {
    super()
    this.state = store.getState().todo
    store.subscribe(_ => {
      let { todo } = store.getState();
      this.setState(todo)
    })
  }

  inputChange = e => {
    store.dispatch({
      type: 'changeInput',
      data: e.target.value
    })
  }

  addItem = () => {
    store.dispatch({
      type: 'add',
      data: this.state.inputValue
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.inputChange} />
        <button onClick={this.addItem}> 添加</button>
        <ul>
          {this.state.list.map((item, index) => {
            return <TodoItem key={index} item={item}></TodoItem>
          })
          }
        </ul>
      </div>
    )
  }



}
