import * as constants from './actionTypes'

//默认数据
const defaultState = {
    homeData: {
        loginUsers: '300',
        newUser: '10',
        newStudent: '15',
        classStudent: '11',
        answer: '15'
    }
}

export default (state = defaultState, action) => {
    if (action.type === constants.GET_HOME_DATA) {
        const newState = {}
        newState.homeData = action.homeData
        return newState
    }
    return state
   
}