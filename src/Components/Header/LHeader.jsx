import react, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { DropboxOutlined, AppstoreOutlined, DingtalkSquareFilled, ChromeFilled, CloudFilled, BellFilled } from '@ant-design/icons';

import '../../Common/css/header.scss'

class LHeader extends Component {
    render () {
        return (
            <div>
                <Row>
                    <Col span={10}><span className='header-title'>撩课数据分发管理系统</span></Col>
                    <Col span={14}>
                        <Menu mode="horizontal">
                            <Menu.Item key='eduCenter' icon={ <CloudFilled /> }>
                                教育云中心
                            </Menu.Item>
                            <Menu.Item key='disCenter' icon={ <DropboxOutlined /> }>
                                分销中心
                            </Menu.Item>
                            <Menu.Item key='crmCenter' icon={ <ChromeFilled /> }>
                                CRM对接中心
                            </Menu.Item>
                            <Menu.Item key='personCenter' icon={ <DingtalkSquareFilled /> }>
                                <Link to={{pathname: '/mine'}}>个人中心</Link>
                            </Menu.Item>
                            <Menu.Item key='messageCenter' icon={ <BellFilled /> }>
                                
                            </Menu.Item>
                            <Menu.Item key='loginOut' icon={ <AppstoreOutlined /> }>
                                退出
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default LHeader