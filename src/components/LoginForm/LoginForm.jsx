import React, { Component } from 'react'

import { Form, Icon, Input, Button } from 'antd'

import { api } from '../../services'
import './style.css'

class LoginForm extends Component {

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, data) => {
      if (!err) {
        api.auth.signIn(data)
          .then(({data}) => {
            if (data) {
              window.localStorage.setItem('token', data.token)
              window.location.href = '/user'
            }
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <div>
              <a className="login-form-forgot" href="google.com"> Forgot password </a>
            </div>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <div>
              <a href="google.com">Register now!</a>
            </div>
          </Form.Item>
        </Form>
    )
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm)

export default WrappedLoginForm