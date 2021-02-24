import React, {Component} from 'react'
import { connect } from 'react-redux'

import { Row, Col } from 'antd'
import { AndroidFilled, SlackSquareFilled, GitlabFilled, CalendarFilled, CodepenSquareFilled, MediumCircleFilled} from '@ant-design/icons'

import '../../Common/css/home.scss'

import { getHomeDataAction } from '../../Store/actionCreator'

class Home extends Component {
    componentDidMount () {
        this.props.reqHomeData()
    }
 
    render () {
        const { homeData } = this.props
        return (
            <div>
                <Row justify="space-around">
                   <Col span={7}>
                       <div className='home-login-user'>
                            <span><AndroidFilled style={{fontSize: '100px', color: '#fff'}}/></span>
                            <span>登录用户</span>
                            <span>{homeData.loginUsers}</span>
                        </div>
                   </Col>
                   <Col span={7}>
                       <div className='register-add'>
                            <span><SlackSquareFilled style={{fontSize: '100px', color: '#fff'}}/></span>
                            <span>新增注册</span>
                            <span>{homeData.newUser}</span>
                        </div>
                   </Col>
                   <Col span={7}>
                       <div className='student-add'>
                            <span><GitlabFilled style={{fontSize: '100px', color: '#fff'}}/></span>
                            <span>课程新增学员</span>
                            <span>{homeData.newStudent}</span>
                        </div>
                   </Col>
                </Row>
                <Row justify="space-around" style={{marginTop: '30px'}}>
                   <Col span={7}>
                       <div className='class-add'>
                            <span><CalendarFilled style={{fontSize: '100px', color: '#fff'}}/></span>
                            <span>班级新增学员</span>
                            <span>{homeData.classStudent}</span>
                        </div>
                   </Col>
                   <Col span={7}>
                       <div className='member-add'>
                            <span><MediumCircleFilled style={{fontSize: '100px', color: '#fff'}}/></span>
                            <span>新增会员</span>
                            <span>{homeData.answer}</span>
                        </div>
                   </Col>
                   <Col span={7}>
                       <div className='no-answer'>
                            <span><CodepenSquareFilled style={{fontSize: '100px', color: '#fff'}}/></span>
                            <span>未回复问答</span>
                            <span>{homeData.answer}</span>
                        </div>
                   </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        homeData: state.homeData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reqHomeData() {
            const homeAction = getHomeDataAction()
            dispatch(homeAction)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)