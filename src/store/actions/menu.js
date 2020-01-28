import { api } from '../../services'

import {
  CREATE_GOAL,
  CREATE_PROJECT,
  GET_PROJECTS_LIST
} from '../types'

const getProjectsList = (data) => (dispatch)=>{
  dispatch({
    type: GET_PROJECTS_LIST,
    payload: data
  })
}

const addGoal = title => dispatch => {
  dispatch({
    type: CREATE_GOAL,
    payload: title
  })
}

const addProject = title => dispatch => {
  api.projects.addProject(title).then((res => {
    dispatch({
      type: CREATE_PROJECT,
      payload: res.data
    })
  }))
}

export {
  addGoal,
  addProject,
  getProjectsList
}