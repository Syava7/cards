import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer} from './reducers/loginReducer';
import {profileReducer} from './reducers/profileReducer';
import {registerReducer} from './reducers/registerReducer';
import {newPasswordReducer} from './reducers/newPasswordReducer';
import {recoveryPasswordReducer} from './reducers/recoveryPasswordReducer';
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  register: registerReducer,
  newPassword: newPasswordReducer,
  recovery: recoveryPasswordReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store

export type AppStateType = ReturnType<typeof rootReducer>