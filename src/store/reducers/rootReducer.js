//
import { combineReducers } from "redux";
import FormReducer from "./FormReducer";
//import GlobalReducer from "./GlobalReducer";
//import LoginReducer from "./LoginReducer";
//import UserReducer from "./UserReducer";
//import BookingReducer from "./BookingReducer";
//import SidebarReducer from "./SidebarReducer";





const rootReducer = combineReducers({
  FormFeed: FormReducer,
});

export default rootReducer;
