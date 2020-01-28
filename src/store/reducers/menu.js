import {
  CREATE_GOAL,
  CREATE_PROJECT,
  GET_PROJECTS_LIST
} from '../types'

const initialState = {
  goals: ['Money'],
  projects: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_LIST:
      return {
        ...state,
        projects: action.payload
      }
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects,
          action.payload
        ],
      }
    case CREATE_GOAL:
      return {
        ...state,
        goals: [ 
          ...state.goals,
          action.payload
        ]
      }
    default: return state
  }
}