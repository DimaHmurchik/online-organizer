import React, { Component } from 'react'

import { Button, Progress } from 'antd'

class Goal extends Component {
  render() {
    return (
      <div style={{padding: '10px'}}>
        <h1>Goal name</h1>
        <Button type='primary'> Add </Button> <br/><br/>
        <Progress type="circle" percent={6} format={percent => `${percent} Days`} />
      </div>
    )
  }
}

export default Goal