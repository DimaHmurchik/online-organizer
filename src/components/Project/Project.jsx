import React, { Component } from 'react'

import { Button, List, Checkbox, Modal, Input, Spin, Menu, Dropdown, Icon } from 'antd'

class Project extends Component {

state = {
  id: '',
  done: '',
  description: '',
  visible: false,
  isEdit: false
}

handleCancel = () => {
  this.setState({
  visible: false
  })
}

handleOk = () => {
  const { id, description, done, isEdit } = this.state

  const task = {id, description, done}

  const projectId = this.props.location.state.id

  if (isEdit) {
    this.props.updateTask(task, projectId)
  } else {
    this.props.addTask(description, projectId)
  }

  this.setState({
    visible: false
  })
}

handleAdd = () => {
  this.setState({
    visible: true,
    description: ''
  })
}

handleEdit = task => {
  this.setState({
    id: task.id,
    description: task.description,
    done: task.done,
    visible: true,
    isEdit: true
  })
}

handleInput = value => {
  this.setState({
    description: value
  })
}

handleDelete = taskId=> {
  const projectId = this.props.location.state.id

  this.props.removeTask(taskId, projectId)
}

handleUpdateStatus = task=> {
  const projectId = this.props.location.state.id

  if (task.done) {
    task.done = false
  } else {
    task.done = true
  }

  this.props.updateStatusTask(task, projectId)
}

render() {
  const { tasks } = this.props.tasks

  const projectName = this.props.location.state.name
  
  const isFetching = this.props.tasks.isFetching

  const menu = task => (
    <Menu>
      <Menu.Item key="0">
      <div onClick={()=>this.handleEdit(task)}>Edit</div>
      </Menu.Item>
      <Menu.Item key="1">
        <div onClick={()=>this.handleDelete(task.id)}>Delete</div>
      </Menu.Item>
    </Menu>
  )

  return (
    <div style={{padding: '10px'}}>
      <Spin spinning={isFetching ? true : false}>

        <h1>Project {projectName}</h1>
        <Button type='primary' onClick={()=>this.handleAdd()}> Add </Button>
        
        <List
          style={{overflow: 'auto', height: '550px', marginTop: '10px'}}
          dataSource={tasks}
          renderItem={ task =>
            <List.Item>
              <Checkbox style = {{marginRight: '10px'}} checked={task.done} onClick={()=>this.handleUpdateStatus(task)}/>
              <List.Item.Meta description={task.description} />
              <Dropdown overlay={menu(task)} trigger={['click']}>
                <Icon type="more" />
              </Dropdown>
            </List.Item>
          }
        />

        <Modal
          title={ this.state.isEdit ? "Edit task" :  "Add new task"}
          closable={false}
          visible={ this.state.visible }
          onOk={ this.handleOk }
          onCancel= { this.handleCancel }
        >
          <Input value={this.state.description} onChange={e => this.handleInput(e.target.value)}/>
        </Modal>

      </Spin>
    </div>
  )}
}

export default Project