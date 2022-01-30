import React, {Component, PureComponent} from "react";
import {RecommendBoard, RecommendItem} from '../style'
import {connect} from "react-redux";
import {SearchInfoItem} from "../../../common/header/style";

class Recommend extends PureComponent{
    render() {
        const {list, page} = this.props

        return(

            <RecommendBoard>
                {


                    list.map((item) => {
                        return(
                    <RecommendItem key = {item.get('id') }  href ={item.get('href')}>
                    <img alt=''   className='pic' src={item.get('imgUrl')} ></img>
                    </RecommendItem>
                    )
                })



                }

            </RecommendBoard>
        )
    }
}

const mapState = (state) => ({
    list : state.getIn(['home','recommendList'])
})

export default connect(mapState)(Recommend);
