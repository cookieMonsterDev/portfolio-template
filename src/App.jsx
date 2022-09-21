import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage";
import Links from "./components/Social/Social";

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <Wrap>
        <Links />
      </Wrap>
    </>
  );
}

export default App;

const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  right: 3rem;
`