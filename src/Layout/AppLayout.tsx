import styled from "styled-components";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import ThemeColor from "../style/colorSet";

const AppLayout = () => {
  return (
    <Layout>
      <Header />

      <Container>
        <Outlet />
      </Container>
    </Layout>
  );
};

export default AppLayout;

const Layout = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
  background-color: ${ThemeColor.background};
  overflow: hidden;
`;
