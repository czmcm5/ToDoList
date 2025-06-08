import { useState } from "react";
import { Login } from "../utils/login";

const useLogin = () => {
  const [username, setUsername] = useState("");

  const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value.replace(" ", ""));

  const LoginFn = () => Login(username);

  return { username, updateUserName, LoginFn };
};

export default useLogin;
