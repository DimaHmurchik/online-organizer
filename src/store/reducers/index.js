import { combineReducers } from 'redux'

import menu from './menu'
import tasks from './tasks'

export default combineReducers({
  menu,
  tasks
})
