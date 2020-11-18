/**
 * State
 */
const INITIAL_STATE = {};

/**
 * Actions
 */
const ACTION_REGISTER = "REGISTER";

/**
 * Reducers
 */
export default function (state = INITIAL_STATE, action) {
  const { payload, type } = action;
  switch (action.type) {
    case "REGISTER":
      return { ...state, text: action.payload };
    default:
      return state;
  }
}
