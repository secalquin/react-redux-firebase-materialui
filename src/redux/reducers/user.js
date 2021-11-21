const initialState = {
  user_info: {
    username: "",
    role: "",
    token: "",
  },
  isLoggedIn: false,
  hasError: false,
  messageError: "",
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CURRENT_USER":
      return { ...state, ...payload };

    case "INICIAR_SESSION":
      return { ...state, ...payload, hasError: false, messageError: "" };

    case "LOGIN_ERROR":
      return {
        ...state,
        hasError: payload.hasError,
        messageError: payload.messageError,
      };

    case "LOGOUT":
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default UserReducer;
