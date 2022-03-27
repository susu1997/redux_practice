/*
 * @Author: Shu Yang
 * @Date: 2022-03-26 19:06:50
 * @LastEditors: Shu Yang
 * @LastEditTime: 2022-03-27 11:49:38
 * @Description:
 */
import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "../store";
import axios from "axios";
//关键代码-------------start
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction,
  getTodoList,
  getMyListAction,
} from "../store/actionCreators";
//关键代码------------end
import TodoListUI from "./TodoListUI";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    //关键代码-----------start

    this.state = store.getState();
    //关键代码-----------endWWWSSSS
    console.log(this.state);
    this.storeChange = this.storeChange.bind(this); //转变this指向
    this.changeInputValue = this.changeInputValue.bind(this);
    //----------关键代码-----------start
    store.subscribe(this.storeChange); //订阅Redux的状态
    //----------关键代码-----------end

    //关键代码------------start----------
    this.clickBtn = this.clickBtn.bind(this);
    //关键代码------------end----------
    this.deleteItem = this.deleteItem.bind(this);
  }
  componentDidMount() {
    const action = getMyListAction();
    store.dispatch(action);
    console.log(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
  //--------关键代码------start
  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  clickBtn() {
    const action = addItemAction();
    store.dispatch(action);
  }
  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
  //--------关键代码------end
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }
}
export default TodoList;
