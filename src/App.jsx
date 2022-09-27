import styled from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage';
import Socials from './components/Socials/Socials';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <ScrollableContent>
      <NavBar />
      <MainPage />
      <Footer />
      <SocialsWrapper>
        <Socials />
      </SocialsWrapper>
    </ScrollableContent>
  );
}

export default App;

const SocialsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 3rem;
`;

const ScrollableContent = styled.div`
  height: 100vh;
`;
