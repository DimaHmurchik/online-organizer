import React, { Component } from 'react'

import { Button, List, Menu, Dropdown, Icon } from 'antd'

import { CountTasks } from './styled'

class Projects extends Component {

render() {
  const { projects } = this.props

  const menu = project => (
    <Menu>
      <Menu.Item key="0">
      <div onClick={()=>this.handleEdit(project)}>Edit</div>
      </Menu.Item>
      <Menu.Item key="1">
        <div onClick={()=>this.handleDelete(project.id)}>Delete</div>
      </Menu.Item>
    </Menu>
  )

return (
  <div style={{ padding: '10px'}}>
  
    <h1> Projects </h1> 
    <Button type='primary'> Add </Button>

    <List
      style={{overflow: 'auto', height: '550px', marginTop: '10px'}}
      dataSource={ projects }
      renderItem={ project =>
        <List.Item>
          <List.Item.Meta description={project.name} />
          <CountTasks> Count tasks: 0 </CountTasks>
          <Dropdown overlay={menu(project)} trigger={['click']}>
            <Icon type="more" />
          </Dropdown>
        </List.Item>
      }
    />

  </div>
  )}
}

export default Projects