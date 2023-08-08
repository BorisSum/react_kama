import { combineReducers, legacy_createStore as createStore} from "redux";
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { userReducer } from "./users-reducer";

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer
});

export const storeRedux = createStore(reducers);