/*
 * @Author: Shu Yang
 * @Date: 2022-03-26 20:43:22
 * @LastEditors: Shu Yang
 * @LastEditTime: 2022-03-27 10:46:14
 * @Description:
 */
import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import { getListAction } from "../store/actionCreators";
import axios from "axios";

//generator函数
function* mySaga() {
  //等待捕获action
  yield takeEvery(GET_MY_LIST, getList);
}
function* getList() {
  console.log("code shu");
  const res = yield axios.get(
    "https://mock.presstime.cn/mock/623f05127bad590021c4cdd1/example/codeshu"
  );
  const action = getListAction(res.data);
  yield put(action);
}
export default mySaga;
