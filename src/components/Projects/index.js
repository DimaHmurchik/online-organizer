import Projects from './Project'

import { connect } from 'react-redux'

//import actions from '../../store/actions'

const mapStateToProps = state => ({
  projects: state.menu.projects
})

// const mapDispatchToProps = dispatch => ({
//   getTasks: (data)=> dispatch(actions.tasks.getTasks(data)),
//   addTask: (description, projectId)=> dispatch(actions.tasks.addTask(description, projectId)),
//   removeTask: (idTask, projectId)=> dispatch(actions.tasks.removeTask(idTask, projectId)),
//   updateTask: (task, projectId)=> dispatch(actions.tasks.updateTask(task, projectId)),
//   updateStatusTask: (task, projectId)=> dispatch(actions.tasks.updateStatusTask(task, projectId))
// })

export default connect(mapStateToProps, null)(Projects)