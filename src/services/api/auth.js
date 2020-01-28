import http from './http'

const signUp = data => {
  return http({
    url: '/auth/signup',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return http({
    url: '/auth/signin',
    method: 'POST',
    data
  })
}

export {
  signUp,
  signIn
}