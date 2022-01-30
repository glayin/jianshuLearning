import React, {Component, Fragment} from 'react'
import {CSSTransition} from "react-transition-group";
import {Addition, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, SearchWrapper,
    SearchInfo, SearchInfoTitle,SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import {actionCreators}from './store'
import {Link} from "react-router-dom";
import  "../../statics/iconfont/iconfont";
import {actionCreators as loginActionCreators} from "../../pages/login/store"
import {connect} from "react-redux";


// const getListArea = (show) =>{
//     if(show){
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>
//                     热门搜索
//                     <SearchInfoSwitch>换一匹</SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         )
//     }else {
//         return null
//     }
// }
// const Header = (props) => {
//     return(    <HeaderWrapper>
//         <Logo/>
//         <Nav>
//             <NavItem className = 'left active'>首页</NavItem>
//             <NavItem className = 'left'>下载APP</NavItem>
//             <NavItem className = 'right'>登录</NavItem>
//             <NavItem className = 'right'>
//                 <span className="iconfont">&#xe636; </span>
//
//             </NavItem>
//             <SearchWrapper>
//                 <CSSTransition
//                     in = {props.focused}
//                     timeout={200}
//                     classNames = "slide">
//                     <NavSearch className = {props.focused? 'focused' :''}
//                                onFocus = {props.handleInputFocus}
//                                onBlur = {props.handleInputBlur}
//                     ></NavSearch>
//                 </CSSTransition>
//                 <span className = {props.focused? 'focused iconfont' : 'iconfont'}  >&#xe617; </span>
//
//                 {getListArea(props.focused)}
//                 {/*<SearchInfo>*/}
//                 {/*    <SearchInfoTitle>*/}
//                 {/*        热门搜索*/}
//                 {/*        <SearchInfoSwitch>换一匹</SearchInfoSwitch>*/}
//                 {/*    </SearchInfoTitle>*/}
//                 {/*    <SearchInfoList>*/}
//                 {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
//                 {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
//                 {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
//                 {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
//                 {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
//                 {/*    </SearchInfoList>*/}
//                 {/*</SearchInfo>*/}
//             </SearchWrapper>
//         </Nav>
//         <Addition>
//             <Button className = 'writing'>
//                 <span className="iconfont">&#xe670; </span>
//             </Button>
//             <Button className = 'reg'>注册</Button>
//         </Addition>
//     </HeaderWrapper>)
//
// }

class Header extends Component{
    getListArea(){
        const {focused, list, page,mouseIn,totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
        const newList = list.toJS()
        const pageList = []
        if(newList.length){
            for(let i = (page-1) * 3; i < page * 3; i++){
                pageList.push(
                    <SearchInfoItem  key = {newList[i]} >{newList[i]}</SearchInfoItem>
                )
            }
        }

        if(focused || mouseIn ){
            return (
                <SearchInfo onMouseEnter = {this.props.handleMouseEnter}
                            onMouseLeave = {this.props.handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick ={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref = {(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851; </span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null
        }
    }
    render(){
        const {focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props
       return(
           <HeaderWrapper>
           <Link to='/'>
               <Logo/>
           </Link>
           <Nav>
               <NavItem className = 'left active'>首页</NavItem>
               <NavItem className = 'left'>下载APP</NavItem>
               {login?<NavItem className = 'right' onClick={logout} >退出</NavItem> :
                   <Link to ='/login'><NavItem className = 'right'>登录</NavItem></Link>}

               <NavItem className = 'right'>
                   <span className="iconfont">&#xe636; </span>

               </NavItem>
               <SearchWrapper>
                   <CSSTransition
                       in = {this.props.focused}
                       timeout={200}
                       classNames = "slide">
                       <NavSearch className = {focused? 'focused' :''}
                                  onFocus = {() =>handleInputFocus(list)}
                                  onBlur = {handleInputBlur}
                       ></NavSearch>

                   </CSSTransition>
                   <span className = {this.props.focused? 'focused iconfont zoom' : 'iconfont zoom'}  >&#xe617; </span>

                   {this.getListArea()}
                   {/*<SearchInfo>*/}
                   {/*    <SearchInfoTitle>*/}
                   {/*        热门搜索*/}
                   {/*        <SearchInfoSwitch>换一匹</SearchInfoSwitch>*/}
                   {/*    </SearchInfoTitle>*/}
                   {/*    <SearchInfoList>*/}
                   {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
                   {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
                   {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
                   {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
                   {/*        <SearchInfoItem>教育</SearchInfoItem>*/}
                   {/*    </SearchInfoList>*/}
                   {/*</SearchInfo>*/}
               </SearchWrapper>
           </Nav>
           <Addition>
               <Link to='/write'>
               <Button className = 'writing'>
                   <span className="iconfont">&#xe670; </span>
               </Button>
               </Link>
               <Button className = 'reg'>注册</Button>
           </Addition>
       </HeaderWrapper>)}
}
// class Header extends Component{
//
//     // constructor(props) {
//     //     super(props);
//     //     // this.handleInputFocus = this.handleInputFocus.bind(this)
//     //     // this.handleInputBlur = this.handleInputBlur.bind(this)
//     //
//     // }
//     render() {
//         return(
//             <HeaderWrapper>
//                 <Logo/>
//                 <Nav>
//                     <NavItem className = 'left active'>首页</NavItem>
//                     <NavItem className = 'left'>下载APP</NavItem>
//                     <NavItem className = 'right'>登录</NavItem>
//                     <NavItem className = 'right'>
//                         <span className="iconfont">&#xe636; </span>
//
//                     </NavItem>
//                     <SearchWrapper>
//                     <CSSTransition
//                         in = {this.props.focused}
//                         timeout={200}
//                         classNames = "slide">
//                     <NavSearch className = {this.props.focused? 'focused' :''}
//                                onFocus = {this.props.handleInputFocus}
//                                onBlur = {this.props.handleInputBlur}
//                     ></NavSearch>
//                     </CSSTransition>
//                         <span className = {this.props.focused? 'focused iconfont' : 'iconfont'}  >&#xe617; </span>
//
//                     </SearchWrapper>
//                 </Nav>
//                 <Addition>
//                     <Button className = 'writing'>
//                         <span className="iconfont">&#xe670; </span>
//                     </Button>
//                     <Button className = 'reg'>注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//
//
//
//         )
//     }
//     // handleInputFocus(){
//     //     this.setState({
//     //             focused: true
//     //         }
//     //     )
//     // }
//     // handleInputBlur(){
//     //     this.setState({
//     //         focused: false
//     //     })
//     // }
// //    redux的数据想要修改怎么办？ 必须按照这个流程：
// //    创建action给到store再给到reducer进行处理，reducer返回给store
// }
const mapStateToProps = (state) => {
    return{
        focused: state.getIn(['header', 'focused']),
        // focused: state.get('header').get('focused')
        list: state.getIn(['header','list']),
        totalPage:state.getIn(['header','totalPage']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        login: state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(list){

            (list.size === 0)&&dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            console.log(spin.style.transform)
            if(originAngle ){
                originAngle  = parseInt(originAngle , 10)
            }else{
                originAngle  = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            console.log(page,totalPage)
            if(page <totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }

        },
        logout(){
             dispatch(loginActionCreators.logout())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
