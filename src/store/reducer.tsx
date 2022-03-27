/*
 * @Author: Shu Yang
 * @Date: 2022-03-26 19:12:32
 * @LastEditors: Shu Yang
 * @LastEditTime: 2022-03-27 10:41:02
 * @Description:
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";

const defaultState = {
  inputValue: "Write Something",
  list: [],
};
export default (state = defaultState, action: any) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  //state值只能传递，不能使用
  if (action.type === ADD_ITEM) {
    //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue); //push新的内容到列表中去
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1); //push新的内容到列表中去
    return newState;
  }
  //----关键代码--------start --------
  if (action.type === GET_LIST) {
    //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list; //复制性的List数组进去
    return newState;
  }
  //----关键代码--------en'd --------
  return state;
};
