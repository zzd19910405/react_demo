import react, { Component } from 'react'
import { Row, Col} from 'antd'
import { Route } from 'react-router-dom'

import LHeader from './Components/Header/LHeader'
import LAside from './Components/Aside/LAside'
import routes from './Router/index'

class App extends Component {
  render () {
    return (
      <div>
        <Row>
          {/* 侧边栏 */}
          <Col span={4}><LAside /></Col>
          {/* 右侧栏 */}
          <Col span={20}>
            <Row>     
              {/* 头部导航栏 */}
              <Col span={24}><LHeader /></Col>
            </Row>
            {/* 主体内容 */}
            <Row>
              <Col span={24} style={{height: 'calc(100vh) - 100px', overflowY: 'auto'}}>
                {
                  routes.map((route, key) => {
                    if ( route.exact ){
                      return (
                        <Route 
                            path={ route.path }
                            key={ key }
                            exact
                            render = {
                              (props) => (
                                <route.component {...props} />
                              )
                            }
                        />
                      )
                    } else {
                      return (
                        <Route 
                            path={ route.path }
                            key={ key }
                            render = {
                              (props) => (
                                <route.component {...props} />
                              )
                            }
                        />
                      )
                    }
                  })

                }
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;
