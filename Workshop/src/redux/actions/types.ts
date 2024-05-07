import { FetchUsersAction, DeleteUsersAction } from "./index";

export enum ActionTypes {
  fetchUsers = "FETCH_USERS",
  deleteUsers = "DELETE_USERS",
}

export type Action = FetchUsersAction | DeleteUsersAction;
