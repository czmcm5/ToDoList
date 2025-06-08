import React from "react";
import Login from "../page/Login/Login";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const LoginRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  const isLogin = localStorage.getItem("login") || null;

  return isLogin ? <Component /> : <Login />;
};

export default LoginRoute;
