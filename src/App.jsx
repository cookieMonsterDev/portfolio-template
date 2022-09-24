import styled from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage';
import Socials from './components/Socials/Socials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <Wrap>
        <Socials />
      </Wrap>
      <Footer />
    </>
  );
}

export default App;

const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  right: 3rem;
`;
