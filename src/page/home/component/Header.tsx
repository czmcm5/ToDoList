import styled from "styled-components";
import ThemeColor from "../../../style/colorSet";
import React from "react";
import { logout } from "../../../utils/login";

const Header = () => {
  console.log("Header 렌더링");
  const username = !!localStorage.getItem("login");

  return (
    <Container>
      <div>Website todo</div>
      {username && <div onClick={logout}>로그아웃</div>}
    </Container>
  );
};
export default React.memo(Header);

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  font-weight: bold;
  color: white;
  background-color: ${ThemeColor.main};
`;
