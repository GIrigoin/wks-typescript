import { User } from "../actions";
import { ActionTypes, Action } from "../actions/types";

export const usersReducer = (state: User[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchUsers:
      return action.payload;

    case ActionTypes.deleteUsers:
      const newState = state.filter((user) => user.id !== action.payload);
      return newState;
    default:
      return state;
  }
};
