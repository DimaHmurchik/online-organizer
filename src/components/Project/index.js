import Project from '../Project/Project'

import { connect } from 'react-redux'

import actions from '../../store/actions'

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  getTasks: (data)=> dispatch(actions.tasks.getTasks(data)),
  addTask: (description, projectId)=> dispatch(actions.tasks.addTask(description, projectId)),
  removeTask: (idTask, projectId)=> dispatch(actions.tasks.removeTask(idTask, projectId)),
  updateTask: (task, projectId)=> dispatch(actions.tasks.updateTask(task, projectId)),
  updateStatusTask: (task, projectId)=> dispatch(actions.tasks.updateStatusTask(task, projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)