import http from './http'

const getProjects = () => {
  return http({
    url: '/projects',
    method: 'GET'
  })
}

const addProject = (title) => {
  return http({
    url: '/projects',
    method: 'POST',
    data: { name: title}
  })
}

export {
  getProjects,
  addProject
}