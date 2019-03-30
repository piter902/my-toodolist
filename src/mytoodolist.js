import React, { Component } from 'react';
import './mytoodolist.css';
import TodoItem from './todoitem'

class MyToodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue:'',
      list:[]
    }
    this.handleinput=this.handleinput.bind(this)
    this.handleAdd=this.handleAdd.bind(this)
    this.keyHandler=this.keyHandler.bind(this)
    this.batchDelete=this.batchDelete.bind(this)
  }
  handleinput(e){
    const inputValue=e.target.value
    this.setState(()=>({
      inputValue
    }))
  }
  // 添加
  handleAdd(){
    const {list}=this.state
    if(this.state.inputValue.length>0){
      list.push({value:this.state.inputValue,check:false})
      this.setState(()=>{
        return {
          list, 
          inputValue:''
        }
      })
    }else{
      return
    }
  }
  // 键盘事件
  keyHandler(e){
    if(e.charCode===13){
      this.handleAdd()
    }
  }
  // 单个删除
  handleDelete(index){
    const {list}=this.state
    list.splice(index,1)
    this.setState(()=>({list}))
  }
  // 选择
  handleSelect(index){
    const {list}=this.state
    list[index].check=!list[index].check
    this.setState(()=>({list}))
  }
  // 批量删除
  batchDelete(){
    let {list}=this.state
    list=list.filter(e=>{
      console.log({e})
      return e.check===false
    })
    this.setState(()=>({list}))
  }
  renderlist(){
    return( 
      this.state.list.map((ele,index)=>{
        return (
          <TodoItem 
          key={index} 
          delete={this.handleDelete.bind(this)} 
          select={this.handleSelect.bind(this)} 
          content={ele} 
          index={index}/>
        )
      })
    ) 
  }
  render() {
    return (
      <div className="my-toodo-list">
        <div className="content">
          <label htmlFor="input">内容输入</label>
          <input 
            id="input"
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleinput}
            placeholder="请输入添加内容"
            onKeyPress={this.keyHandler}
            />
          <button onClick={this.handleAdd} >增加</button>
        </div>
        <ul>
          {
            this.renderlist()
          }
        </ul>
        <div className="delete" onClick={this.batchDelete}>批量删除</div>
      </div>
    );
  }
}

export default MyToodoList;
