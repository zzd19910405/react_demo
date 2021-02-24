/**
 * mock模拟数据
 */
const Mock =  require('mockjs')


//模拟get请求
Mock.mock('/api/homeData','get',{
	status:200,
	message:'获取列表成功',	
    homeData: {
        loginUsers: '300',
        newUser: '10',
        newStudent: '15',
        classStudent: '11',
        answer: '15'
    }
})

export default Mock
