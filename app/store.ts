import {Store} from 'redux'

export function rootReducer(state = {}, action){
  switch (action.type) {
    default:
      return state;
  }
};

export class AppStore {
  s = new Store();
}
