export default (instance) => {
  instance.interceptors.response.use(null, err => {
    if (err.response && err.response.status === 401) {
      window.localStorage.clear('token')
      window.location.href = '/login'
    }
    return Promise.reject(err)
  })
}