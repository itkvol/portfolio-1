const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed"
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };

    case "SIGNOUT_SUCCESS":
      return state;

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signUpError: null
      };

    case "SIGNUP_ERROR":
      return {
        ...state,
        signUpError: action.error.message
      };
    default:
      return state;
  }
};

export default authReducer;
