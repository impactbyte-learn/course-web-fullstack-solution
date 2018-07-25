import { createStore } from "redux";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "EDIT_TODO": {
      let newState = state.slice();
      newState[action.payload.id] = action.payload.todo;
      return newState;
    }
    case "DELETE_TODO": {
      let newState = state.slice();
      newState.splice(action.payload, 1);
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log("store changed!"));

export default store;
