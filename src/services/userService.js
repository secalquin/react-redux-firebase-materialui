export const Loggin = async (username, password) => {
  if (username === "scalquin@sb.cl" && password === "sb123") {
    return {
      user_info: {
        username: "sebastian",
        role: "123",
        token: "1",
      },
      isLoggedIn: true,
      isAdmin: true,
    };
  } else {
    return {
      hasError: true,
      messageError: "Usuario o Contraseña invalidos.",
    };
  }
};

export const Whoami = async (token) => {
  return {
    user_info: {
      username: "sebastian",
      role: "123",
      token: "1",
    },
    isLoggedIn: true,
    isAdmin: true,
  };
};

export const Logout = () => {
  localStorage.removeItem("token");
  return true;
};
