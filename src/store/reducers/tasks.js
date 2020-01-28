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

const initialState = {
  tasks: [],
  isFetching: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_TASKS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case GET_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload
      }
    }
    case ADD_TASK_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case ADD_TASK_SUCCESS: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      }
    }
    case REMOVE_TASK_BY_ID_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case REMOVE_TASK_BY_ID_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter(i => i.id !== action.payload)
      }
    }
    case UPDATE_TASK_BY_ID_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case UPDATE_TASK_BY_ID_SUCCESS: {
      const index = state.tasks.findIndex( i => i.id === action.payload.id)
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          action.payload,
          ...state.tasks.slice(index + 1)
        ]
      }
    }
    case UPDATE_STATUS_TASK_BY_ID_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case UPDATE_STATUS_TASK_BY_ID_SUCCESS: {
      const index = state.tasks.findIndex( i => i.id === action.payload.id)
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          action.payload,
          ...state.tasks.slice(index + 1)
        ]
      }
    }
    default: return state
  }
}