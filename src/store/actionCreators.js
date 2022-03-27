/*
 * @Author: Shu Yang
 * @Date: 2022-03-26 20:00:59
 * @LastEditors: Shu Yang
 * @LastEditTime: 2022-03-26 20:47:28
 * @Description:
 */
import {
  CHANGE_INPUT,
  ADD_ITEM,
  DELETE_ITEM,
  GET_LIST,
  GET_MY_LIST,
} from "../store/actionTypes";
import axios from "axios";
export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index,
});
export const getListAction = (data) => ({
  type: GET_LIST,
  data,
});
export const getTodoList = () => {
  return () => {
    axios
      .get(
        "https://mock.presstime.cn/mock/623f05127bad590021c4cdd1/example/codeshu"
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
      });
  };
};
export const getMyListAction = () => ({
  type: GET_MY_LIST,
});
