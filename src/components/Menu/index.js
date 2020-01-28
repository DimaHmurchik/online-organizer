import { connect } from 'react-redux'

import Menu from './Menu'
import actions from '../../store/actions'

const mapStateToProps = state => ({
  projects: state.menu.projects,
  goals: state.menu.goals,
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  addProject: (title)=> dispatch(actions.menu.addProject(title)),
  addGoal: (title)=> dispatch(actions.menu.addGoal(title)),
  getProjectsList: (data)=> dispatch(actions.menu.getProjectsList(data)),
  getTasks: (projectId)=> dispatch(actions.tasks.getTasks(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)