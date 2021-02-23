import react, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Row, Col } from 'antd';
import { DropboxOutlined, AppstoreOutlined, DingtalkSquareFilled, ChromeFilled, CloudFilled, 
    SettingFilled, PlusSquareFilled, EditFilled, CloseCircleFilled, CalculatorFilled} from '@ant-design/icons';
import userImg from '../../Common/img/user.jpg'

import '../../Common/css/aside.scss'

class LAside extends Component {
    render () {
        const { SubMenu } = Menu;
        return (
            <div style={{height: 'calc(100vh)', overflowY: 'auto'}}>
                <Row>
                    <span className='aside-user'>
                        <img className='aside-user-img' src= {userImg} />
                        <span className='aside-user-name'>唐家三少</span>
                    </span>
                </Row>
                <Row>
                    <Col span={24}>
                        <Menu mode="inline">
                            <Menu.Item key='dataAnalysis' icon={<DropboxOutlined />}>
                                <Link to={{pathname: '/'}}>数据分析</Link>
                            </Menu.Item>
                            <Menu.Item key='userCenter' icon={<AppstoreOutlined />}>
                                <Link to={{pathname: '/user'}}>用户中心</Link>
                            </Menu.Item>
                            <SubMenu key='courseManage' icon={<DingtalkSquareFilled />} title='课程管理' >
                                <Menu.Item key='sourseAdd' icon={<PlusSquareFilled />}>
                                    <Link to={{pathname: '/courseAdd'}}>课程添加</Link>
                                </Menu.Item>
                                <Menu.Item key='courseList' icon={<EditFilled />}>
                                    <Link to={{pathname: '/courselist'}}>课程列表</Link>
                                </Menu.Item>
                                <Menu.Item key='sourseCatgory' icon={<CloseCircleFilled />}>
                                    <Link to={{pathname: '/sourseCatgory'}}>课程分类</Link>
                                </Menu.Item>
                                <Menu.Item key='sourseTopic' icon={<CloseCircleFilled />}>
                                    <Link to={{pathname: '/sourseTopic'}}>课程专题</Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key='operCenter' icon={<ChromeFilled />}>运营中心</Menu.Item>
                            <Menu.Item key='lkCenter' icon={<CloudFilled />}>LK建模中心</Menu.Item>
                            <SubMenu key='setCenter' title='设置中心' icon={<SettingFilled />}>
                                <Menu.Item key='webSet' icon={<SettingFilled />}>站点设置</Menu.Item>
                                <Menu.Item key='userSet' icon={<SettingFilled />}>用户设置</Menu.Item>
                                <Menu.Item key='courseSet' icon={<SettingFilled />}>课程设置</Menu.Item>
                            </SubMenu>
                            
                        </Menu>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default LAside;