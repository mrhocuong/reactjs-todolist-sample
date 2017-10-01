import { ADD_TO_DO, CHANGE_SUBJECT, CLEAR_CREATE_OBJECT } from "../actions";

const initialState = {
  createToDo: {
    subject: ""
  },
  list: []
};

export default function toDoList(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_DO: {
      var data = action.payload;
      console.log(data);
      return {
        ...state,
        list: [data, ...state.list]
      };
    }
    case CHANGE_SUBJECT: {
      return {
        ...state,
        createToDo: {
          ...state.createToDo,
          subject: action.payload
        }
      };
    }
    case CLEAR_CREATE_OBJECT: {
      return {
        ...state,
        createToDo: {
          subject: ""
        }
      };
    }
    default:
      return state;
  }
}
