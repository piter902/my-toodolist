import React, { Component } from 'react'
import PropTypes from 'prop-types' 
class TodoItem extends Component{
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
    const {content} ={...this.props}
    this.state={
      content
    }
  }
  handleClick(){
    const { deleteItem ,index}=this.props
    deleteItem(index)
  }
  handleSelect(){
    const {index,select}=this.props
    select(index)
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content.check!==this.state.content){
      return true
    }else {
      return false
    }
  }
  render(){
    console.log('render')
    const {check,value}=this.props.content
    return (
      <li >
        <input type="checkbox" checked={check} onChange={this.handleSelect}/>
        <span onClick={this.handleSelect}>{value+"--"+check}</span>
        <button onClick={this.handleClick}>删除</button>
      </li>
    )
  }
}
TodoItem.propTypes={
  content:PropTypes.object.isRequired,
  select:PropTypes.func.isRequired,
  index:PropTypes.number.isRequired,
  deleteItem:PropTypes.func.isRequired
}
TodoItem.defaultProps={
  content:{}
}
export default TodoItem