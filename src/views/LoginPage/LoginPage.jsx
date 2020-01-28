import React, { Component, Fragment } from 'react'

import { LoginForm, Carousel } from '../../components'

import { AntLayout } from './styled'

class LoginPage extends Component {
  render() {
    return (
      <Fragment>
          <AntLayout theme="light">

            <AntLayout.Content>
              <Carousel />
            </AntLayout.Content>

            <AntLayout.Sider width={'40%'}> 
              <LoginForm />
            </AntLayout.Sider>
            
          </AntLayout>
      </Fragment>
    )
  }
}

export default LoginPage