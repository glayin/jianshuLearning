import React, {Component, PureComponent} from "react";
import {RecommendItem, WriterItem, WriterTop} from "../style"
import {connect} from "react-redux";

import {SearchInfoItem, SearchInfoSwitch, SearchInfoTitle} from "../../../common/header/style";

import {actionCreators } from"../store"

class Writer extends PureComponent{

    getList(){
        const {list, page, total_WriterPage, getWriterTotal, getHome} = this.props
        if(!getHome) return
        let newList = list.toJS()
        console.log(total_WriterPage)
        console.log(newList[0])
        getWriterTotal(newList)
        const pageList = []
        for(let i = (page-1) * 3; i < page * 3; i++){

            pageList.push(
                <WriterItem key = {newList[i].id} >
                    <img className='writer-pic'
                                 src={newList[i].img}/>
                              <span className='name'>{newList[i].name}</span>
                              <span className='fo'>+关注</span>
                             <p className='info'>写了{newList[i].number}字. {newList[i].likes}喜欢</p>
                </WriterItem>
            )
        }

        return(pageList)

        // return (            list.map((item) => {
        //     return(<WriterItem key={item.get('id')}>
        //         <img className='writer-pic'
        //             src={item.get('img')}/>
        //         <span className='name'>{item.get('name')}</span>
        //         <span className='fo'>+关注</span>
        //         <p className='info'>写了{item.get('number')}字. {item.get('likes')}喜欢</p>
        //     </WriterItem>)
        //
        // })
        // )

    }
    render() {
        const {list, page, total_WriterPage, handleChangePage} = this.props
        console.log(total_WriterPage, page)
        return(
            <div>
                <WriterTop>

                    <span>推荐作者</span>
                    <SearchInfoSwitch onClick ={() => handleChangePage(page, total_WriterPage, this.spinIcon)}>
                        <span ref = {(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851; </span>
                        换一批
                    </SearchInfoSwitch>

                </WriterTop>
                {this.getList()}


            </div>
        )
    }


}

const mapState = (state) =>{
    return{
        list:state.getIn(['home', 'list']),
        page:state.getIn(['home', 'page']),
        total_WriterPage: state.getIn(['home', 'total_WriterPage']),
        getHome: state.getIn(['home','getHome'])
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleChangePage(page, total_Page, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            console.log(spin.style.transform)
            if(originAngle ){
                originAngle  = parseInt(originAngle , 10)
            }else{
                originAngle  = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            console.log(page,total_Page)

            if(page <total_Page){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }

        },
        getWriterTotal(list){

           let totalWriterPage=Math.ceil(list.length/3)
            console.log(totalWriterPage)
            dispatch(actionCreators.getTotal(totalWriterPage))
        }
    }
}
export default connect(mapState, mapDispatchToProps)(Writer);
