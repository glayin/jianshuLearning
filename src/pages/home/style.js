import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top:30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    background: red;
    font-size: 14px;
    margin-left: 18px;
    line-height: 32px;
    padding-right: 10px;
    margin-bottom: 10px;
    margin-left: 18px;
    height: 32px;
    color: #dcdcdc;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
      //display: block;
      float: left;
      width: 32px;
      height: 32px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
`
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    width: 125px;
    display: block;
    height: 100px;
    float: right;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    color:#333;
  }
  .desc{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const RecommendBoard = styled.div`
  width: 240px;
  height: 228px;
  margin: 2px 2px;
`

export const RecommendItem = styled.a`
  overflow: hidden;
  margin-bottom: 5px;
  .pic{
    width: 240px;
    height: 50px;
  }
`
export const Writer = styled.div`
  width: 240px;
  height: 380px;
  
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  .spin{
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    cursor: pointer;
    transform-origin: center center;
  }
`

export const WriterItem = styled.div`
  height: 50px;
  width: 240px;
  .writer-pic{
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  margin-bottom: 10px;
  .info{
    margin-top: 10px;
  }
  .fo{
    float: right;
  }
`
export const WriterTop = styled.div`
  width: 280px;
  height: 20px;
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0 ;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align:center ;
    border: 1px solid #ccc;
    font-size: 14px;
`
