export default (instance) => {
  instance.interceptors.request.use(function (config) {
    const accessToken = 'Bearer' + window.localStorage.getItem('token')
    if (accessToken) {
      config.headers.Authorization = accessToken
      return Promise.resolve(config)
    } else {
      return new Error('Unauthorized')
    }
  })
}
