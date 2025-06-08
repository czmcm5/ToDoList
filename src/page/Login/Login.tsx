import styled from "styled-components";
import ThemeColor from "../../style/colorSet";
import useLogin from "../../hook/useLogin";

const Login = () => {
  const login = useLogin();

  return (
    <LoginBox>
      <h2>로그인</h2>
      <InputBox
        value={login.username}
        onChange={login.updateUserName}
        placeholder="사용자 이름을 입력하세요."
      />
      <LoginBtn>
        <span onClick={login.LoginFn}>로그인</span>
      </LoginBtn>
    </LoginBox>
  );
};
export default Login;

const LoginBox = styled.div`
  width: 100%;
  max-width: 15rem;
  height: 10rem;
  padding: 2rem;
  margin: auto;
  background-color: white;
  border-radius: 8px;
`;
const InputBox = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.7rem;
  &:hover,
  &:focus {
    border: 1px solid ${ThemeColor.main};
  }
`;
const LoginBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  span {
    width: 5rem;
    padding: 0.5rem;
    font-weight: bold;
    text-align: center;
    color: white;
    background-color: ${ThemeColor.main};
    border-radius: 50px;
    cursor: pointer;
  }
`;
