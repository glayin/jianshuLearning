import  {constants} from "../store"
import axios from "axios";
import {fromJS} from "immutable";

const changeHomeData = (result) => ({
    type : constants.CHANGE_HOME_DATA,
    topicList : result.topicList,
    articleList : result.articleList,
    recommendList: result.recommendList,
    list: result.list,
    page:result.page,
    total_WriterPage : result.total_WriterPage,
    getHome:true
})
export const changePage = (page) => ({
    type : constants.CHANGE_PAGE,
    page
})

export const getTotal = (totalWriterPage) =>({
    type: constants.GET_TOTAL,
    totalWriterPage
})

export const getHomeInfo = () =>{
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            console.log(res)
            const result = res.data.data;
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {

        axios.get('/api/homeList.json?page'+ page).then((res) => {

            const result = res.data.data;

            dispatch(addHomeList(result, page + 1))
        })
    }

}

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
})

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})
