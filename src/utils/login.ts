export const Login = (username: string) => {
  if (username === "") return alert("이름을 입력하세요.");

  localStorage.setItem("login", username);
  window.location.href = "/";
};

export const logout = () => {
  localStorage.removeItem("login");
  window.location.href = "/";
};
