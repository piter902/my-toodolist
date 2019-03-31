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
    // 输入事件
    this.handleinput=this.handleinput.bind(this)
    // 增加内容
    this.handleAdd=this.handleAdd.bind(this)
    // 键盘事件
    this.keyHandler=this.keyHandler.bind(this)
    // 批量删除
    this.batchDelete=this.batchDelete.bind(this)
    // 删除
    this.handleDelete=this.handleDelete.bind(this)
    // 选择
    this.handleSelect=this.handleSelect.bind(this)
  }
  handleinput(e){
    const inputValue=this.input.value
    this.setState(()=>({
      inputValue
    }))
  }
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
  // shouldComponentUpdate(nextProps, nextState) {
  //    return false
  // }
  keyHandler(e){
    if(e.charCode===13){
      this.handleAdd()
    }
  }
  handleDelete(index){
    const {list}=this.state
    list.splice(index,1)
    this.setState(()=>({list}))
  }
  handleSelect(index){
    // debugger
    const {list}=this.state
    list[index].check=!list[index].check
    this.setState(()=>({list}))
  }
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
            deleteItem={this.handleDelete} 
            select={this.handleSelect} 
            content={ele} 
            index={index}/>
        )
      })
    ) 
  }
  // 全部删除按钮的逻辑
  alldelete(){
    if(this.state.list.length>1){
      return <div className="delete" onClick={this.batchDelete}>批量删除</div>
    }else {
      return ''
    }
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
            ref={(input)=>{this.input=input}}
            onKeyPress={this.keyHandler}
            />
          <button onClick={this.handleAdd} >增加</button>
        </div>
        <ul>
          {
            this.renderlist()
          }
        </ul>
        {
          this.alldelete()
        }
      </div>
    );
  }
}

export default MyToodoList;
