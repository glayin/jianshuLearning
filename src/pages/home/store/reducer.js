
import {fromJS} from "immutable";
import React from "react";
import  {constants} from "../store"


//header实际上是这里创建的
const defaultState = fromJS({
    topicList:[],
    articleList : [],
    recommendList : [],
    list: [],
    getHome: false,
    page:1,
    total_WriterPage: 1,
    articlePage: 1,
    showScroll: false

})

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        list: fromJS(action.list),
        page: fromJS(action.page),
        total_WriterPage:fromJS(action.total_WriterPage),
        getHome:fromJS(action.getHome)
    })
}

const addArticleList = (state,action) => {
    return state.merge({
        'articleList' : state.get('articleList').concat(action.list),
        'articlePage' : action.nextPage
    })
}
export default (state = defaultState, action) =>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
        return  changeHomeData(state, action)
        case constants.GET_TOTAL:
            return state.set('total_WriterPage', action.totalWriterPage)
        case constants.CHANGE_PAGE:
            return  state.set('page', action.page);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action)


            // return state.merge({
            //     'articleList' : state.get('articleList').concat(action.list),
            //     'articlePage' : action.nextPage
            // })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)

        default:
            return state
    }

}
