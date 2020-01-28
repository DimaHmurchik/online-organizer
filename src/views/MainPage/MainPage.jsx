import React, { Component } from 'react'
import {createBrowserHistory} from 'history'
import { Router, Route} from 'react-router-dom'

import { Layout, Icon } from 'antd'

import './style.css'

import {Project, Goal, Menu, Projects} from '../../components/index'

const { Header, Sider, Content } = Layout

class MainPage extends Component {
  render() {
    const history = createBrowserHistory()
    return (
      <Router history={history}>
          <Layout>
            <Sider>
              <Menu />
            </Sider>
            <Layout>
              <Header style={{textAlign: 'right'}}> <span><Icon type="setting" /> Setting </span></Header>
              <Content>
                <Route path='/goal' component={Goal} />
                <Route path='/project' component={Project} />
                <Route path='/projects' component={Projects} />
              </Content>
            </Layout>
          </Layout>
      </Router>
    )
  }
}

export default MainPage