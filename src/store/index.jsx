/*
 * @Author: Shu Yang
 * @Date: 2022-03-26 19:11:05
 * @LastEditors: Shu Yang
 * @LastEditTime: 2022-03-27 11:47:11
 * @Description:
 */

import { createStore, applyMiddleware, compose } from "redux"; //  引入createStore方法
import reducer from "./reducer";
//------关键代码----start-----------
import createSagaMiddleware from "redux-saga";
import mySagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();
//------关键代码----end-----------

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
//------关键代码----start-----------
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
//------关键代码----end-----------

const store = createStore(reducer, enhancer); // 创建数据存储仓库
sagaMiddleware.run(mySagas);
export default store; //暴露出去

// // 引入redux-thunk 并配置增强函数
// import { createStore, applyMiddleware, compose } from "redux"; //引入thunk//  引入createStore方法
// import thunk from "redux-thunk";
// import reducer from "./reducer";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk)); //配置redux-thunk  需要使用增强函数 compose

// const store = createStore(reducer, enhancer); // 创建数据存储仓库
// // 配置这个Redux Dev Tools插件 加上这句话 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// export default store; //暴露出去
