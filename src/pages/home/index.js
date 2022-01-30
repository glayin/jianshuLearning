import React, {PureComponent} from "react";
import {HomeWrapper, HomeLeft, HomeRight,BackTop} from './style'
import Topic from './components/Topic';
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import {connect} from "react-redux";
import axios from "axios";
import {actionCreators} from "./store";

class Home extends PureComponent{



    handleScrollTop(){
        window.scrollTo(0,0)
    }
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src ='https://www.dreamboys.co.uk/images/blog-male-strippers.jpg'/>
               <Topic/>
               <List/>

                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll?<BackTop onClick = {this.handleScrollTop}>回到顶部</BackTop> :null}

            </HomeWrapper>
        )
    }
    componentDidMount() {
        // axios.get('/api/home.json').then((res) => {
        //     console.log(res)
        //     const result = res.data.data;
        //     const action = {
        //         type : 'change_home_data',
        //         topicList : result.topicList,
        //         articleList : result.articleList,
        //         recommendList: result.recommendList,
        //         list: result.list,
        //         page:result.page,
        //         total_WriterPage : result.total_WriterPage,
        //         getHome:true
        //     }
        //     this.props.changeHomeData()
        // })
        this.props.changeHomeData()
        this.bindEvents()

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) =>({
    showScroll :state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 200){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState, mapDispatch)(Home)
