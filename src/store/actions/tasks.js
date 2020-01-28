import { api } from '../../services'

import {
  GET_TASKS_FETCHING,
  GET_TASKS_SUCCESS,

  ADD_TASK_FETCHING,
  ADD_TASK_SUCCESS,

  REMOVE_TASK_BY_ID_FETCHING,
  REMOVE_TASK_BY_ID_SUCCESS,

  UPDATE_TASK_BY_ID_FETCHING,
  UPDATE_TASK_BY_ID_SUCCESS,
  
  UPDATE_STATUS_TASK_BY_ID_FETCHING,
  UPDATE_STATUS_TASK_BY_ID_SUCCESS
} from '../types'

const getTasks = projectId => dispatch =>{
  dispatch({
    type: GET_TASKS_FETCHING,
    payload: true
  })
  api.tasks.getTasks(projectId)
    .then(({ data }) => {
      if(data) {
        dispatch({
          type: GET_TASKS_SUCCESS,
          payload: data.tasks
        })
      }
      dispatch({
        type: GET_TASKS_FETCHING,
        payload: false
      })
  })
}

const addTask = (description, projectId) => dispatch => {
  dispatch({
    type: ADD_TASK_FETCHING,
    payload: true
  })

  api.tasks.addTask(description, projectId)
    .then(({ data }) => {
      if(data) {
        dispatch({
          type: ADD_TASK_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: ADD_TASK_FETCHING,
        payload: false
      })
  })
}

const removeTask = (taskId, projectId) => dispatch => {
  dispatch({
    type: REMOVE_TASK_BY_ID_FETCHING,
    payload: true
  })

  api.tasks.removeTask(taskId, projectId)
    .then(({ data }) => {
      if(data) {
        dispatch({
          type: REMOVE_TASK_BY_ID_SUCCESS,
          payload: taskId
        })
      }
      dispatch({
        type: REMOVE_TASK_BY_ID_FETCHING,
        payload: false
      })
  })
}

const updateTask = (task, projectId) => dispatch => {
  dispatch({
    type: UPDATE_TASK_BY_ID_FETCHING,
    payload: true
  })

  api.tasks.updateTask(task, projectId)
    .then(({ data }) => {
      if(data) {
        dispatch({
          type: UPDATE_TASK_BY_ID_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: UPDATE_TASK_BY_ID_FETCHING,
        payload: false
      })
  })
}

const updateStatusTask = (task, projectId) => dispatch => {
  dispatch({
    type: UPDATE_STATUS_TASK_BY_ID_FETCHING,
    payload: true
  })

  api.tasks.updateStatusTask(task, projectId)
    .then(({ data }) => {
      if(data) {
        dispatch({
          type: UPDATE_STATUS_TASK_BY_ID_SUCCESS,
          payload: data
        })
      }
      dispatch({
        type: UPDATE_STATUS_TASK_BY_ID_FETCHING,
        payload: false
      })
  })
}

export {
  addTask,
  removeTask,
  getTasks,
  updateTask,
  updateStatusTask
}