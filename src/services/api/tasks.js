import http from './http'

const getTasks = projectId => {
  return http({
    url: '/tasks/' + projectId,
    method: 'GET'
  })
}

const addTask = (description, projectId) => {
  return http({
    url: '/tasks/' + projectId,
    method: 'POST',
    data: { description: description }
  })
}

const removeTask = (taskId, projectId) => {
  return http({
    url: '/tasks/' + projectId,
    method: 'DELETE',
    data: { id: taskId }
  })
}

const updateTask = (task, projectId) => {
  return http({
    url: '/tasks/' + projectId,
    method: 'PUT',
    data: task
  })
}

const updateStatusTask  = (task, projectId) => {
  return http({
    url: '/tasks/' + projectId,
    method: 'PUT',
    data: task
  })
}

export {
  getTasks,
  addTask,
  removeTask,
  updateTask,
  updateStatusTask
}
