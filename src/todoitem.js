 import React, { Component } from 'react'

class TodoItem extends Component{
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
  }
  handleClick(){
    this.props.delete(this.props.index)
  }
  handleSelect(){
    this.props.select(this.props.index)
    
  }
  render(){
    return (
      <li >
        <input type="checkbox" checked={this.props.content.check} onChange={this.handleSelect}/>
        <span onClick={this.handleSelect}>{this.props.content.value+"--"+this.props.content.check}</span>
        <button onClick={this.handleClick}>删除</button>
      </li>
    )
  }
}
export default TodoItem