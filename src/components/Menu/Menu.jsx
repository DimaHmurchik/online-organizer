import React, { Component, Fragment } from 'react'

import { Menu, Icon, Input, Modal } from 'antd'
import { Link } from 'react-router-dom'

import { api } from '../../services'

class SaidBar extends Component {

state = {
  isAddProject: false,
  isAddGoal: false,
  visible: false,
  title: '',
  openKeys: ['sub1']
}

componentDidMount(){
  const { getProjectsList } = this.props
  api.projects.getProjects().then(res => getProjectsList(res.data))
}

getTasks = projectId => {
  this.props.getTasks(projectId)
}

rootSubmenuKeys = ['sub1', 'sub2']

onOpenChange = openKeys => {
  const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
  if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    this.setState({ openKeys })
  } else {
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    })
  }
}

showModal = (param) => {
  this.setState({
    visible: true,
    [param]: true
  })
}

handleOk = () => {
  const { title, isAddProject, isAddGoal } = this.state

  if (isAddProject) { this.props.addProject(title) }
  else if (isAddGoal) { this.props.addGoal(title) }

  this.setState({
    visible: false,
    isAddProject: false,
    isAddGoal: false
  })
}

handleCancel = () => {
  this.setState({
    visible: false,
    isAddProject: false,
    isAddGoal: false
  })
}

handleInput = (key, value) => {
  this.setState({
    [key]: value
  })
}

render() {
  const { SubMenu } = Menu
  const { projects, goals } = this.props
  const { isAddProject, openKeys, visible, isAddGoal } = this.state
  const options = ['Today', 'This week', 'Inbox tasks']
  return (
    <Fragment>
      <Menu
        style={{height: '100%'}}
        theme='light'
        defaultSelectedKeys={['ToDay']}
        mode='inline'
        openKeys={openKeys}
        onOpenChange={this.onOpenChange}
      >
        {options.map(option => <Menu.Item key={option}> <Link to='/'>{option}</Link> </Menu.Item> )}
{/* Sub menu of projects */}
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type='mail' />
              <span>Projects</span>
            </span>
          }
        >
          {projects.slice(0, 6).map((project) =>
            <Menu.Item
              key={project._id}
              onClick = {()=> this.getTasks(project._id)}>
                <Link to={{ pathname: `/project/${project._id}`, state: { name: project.name, id: project._id} }}>
                  {project.name}
                </Link>
            </Menu.Item>
          )}
          <Menu.Divider />
            <Menu.Item>
                <Link to='/projects'>
                  <Icon type="unordered-list" />
                  Show all list
                </Link>
            </Menu.Item>
            <Menu.Item onClick={ ()=> this.showModal('isAddProject') }>
              <Icon type='plus-circle' />
              Add new project
            </Menu.Item>
        </SubMenu>
{/* Sub menu of goals */}
        <SubMenu
          key='sub2'
          title={
            <span>
              <Icon type='pushpin'/>
              <span>My golas</span>
            </span>
          }
        >
          {goals.map((goal) =>
            <Menu.Item key={goal}>
              <Link to="/goal">{goal}</Link>
            </Menu.Item>
          )}
          <Menu.Divider />
          <Menu.Item onClick={ ()=> this.showModal('isAddGoal') }>
            <Icon type='plus-circle' />
            Add new goal
          </Menu.Item>
        </SubMenu>
      </Menu>
{/* Modal */}
      <Modal
        title={ (isAddProject) ? 'Add new project' : (isAddGoal) ? 'Add new goal' : ''}
        closable={false}
        visible={ visible }
        onOk={ this.handleOk }
        onCancel= { this.handleCancel }
      >
        <Input onChange={e => this.handleInput('title', e.target.value)}/>
      </Modal>
      
    </Fragment>
    )
  }
}

export default SaidBar