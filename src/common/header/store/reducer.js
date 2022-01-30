import {fromJS} from "immutable";
import * as constants from "./constants";
//header实际上是这里创建的
const defaultState = fromJS({
    focused:false,
    list:[],
    mouseIn:false,
    page:1,
    totalPage:1
})

export default (state = defaultState, action) =>{
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused',true)
        case constants.SEARCH_BLUR:
            return state.set('focused',false)
        case constants.CHANGE_LIST:
            return state.merge({
                list : action.data,
                totalPage :action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
    // if(action.type === constants.SEARCH_FOCUS){
    //     // return {
    //     //     focused: true
    //     // }
    //     return state.set('focused', true)
    //    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个新的全新的对象
    // //尝试去改变state，但实际上不改变，拿到原来的state和想要改变的部分，返回一个新的state
    // }
    // if(action.type === constants.SEARCH_BLUR){
    //     return state.set('focused', false)
    // }
    // if(action.type === constants.CHANGE_LIST){
    //     return state.set('list', action.data)
    // }
    // return state;
}
