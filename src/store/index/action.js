import * as home from './action-type';


// 改变数字
export const changeNum = num =>{
  return {
    type: home.CHANGENUM,
    num,
  }
}

// 改变字符串
export const changeStr = str =>{
  return {
    type: home.CHANGESTR,
    str,
  }
}