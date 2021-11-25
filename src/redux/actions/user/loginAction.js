import { Loggin } from "../../../services/userService";

export const LoginAction = (username, password) => async (dispatch) => {
  try {
    const resp = await Loggin(username, password);
    if (!resp.hasError) {
      dispatch({
        type: "INICIAR_SESSION",
        payload: resp,
      });
    } else {
      dispatch({
        type: "LOGIN_ERROR",
        payload: {
          hasError: true,
          messageError: resp.messageError,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
