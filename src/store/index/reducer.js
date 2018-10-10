import * as home from './action-type';

let defaultState = {
  num: 9, // 数字
  str: '字符串', // 字符串
}

export const indexData = (state = defaultState , action = {}) => {
  switch(action.type){
    case home.CHANGENUM:
    return {...state, ...{num: action.num}};
    case home.CHANGESTR:
    return {...state, ...{str: action.str}};
    default:
      return state;
  }
}

