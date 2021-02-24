import * as constants from "./actionTypes";
import axios from 'axios'


//获取首页数据的action
export const getHomeDataAction = () => {
    //同步修改state直接返回action对象
    // return { type: constants.GET_HOME_DATA}
    //异步处理修改state返回以dispatch为参数的函数
    return (dispatch) => {
        axios.get('/api/homeData').then((res) => {
            if (res.data) {
                dispatch({
                    type: constants.GET_HOME_DATA,
                    homeData: res.data.homeData
                })
            }
        }).catch((err) => {
            alert("首页数据失败")
        })
    }
}