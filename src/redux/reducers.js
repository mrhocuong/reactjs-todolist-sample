import { combineReducers } from 'redux'
import {demoReducer} from '../modules/demo'
import {ToDoListReducer} from '../modules/toDoList'
/**
 * This place is to register all reducers of the app.
 */

export default combineReducers({
    demo: demoReducer,
    toDoList: ToDoListReducer
})