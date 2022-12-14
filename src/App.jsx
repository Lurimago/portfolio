import { HashRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen, NavBar } from "./components";
import "./styles/ring.css";
import "./index.css";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Ring from "./components/Ring";
import AboutMe from "./components/AboutMe";
import Skills_FrontEnd from "./components/Skills_FrontEnd";
import ComponentTest from "./components/ComponentTest";

// import Footer from './components/Footer';

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <HashRouter>
      <NavBar />
      <Ring />
      {isLoading && <LoadingScreen />}
      <Container className="mt-5">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Container>
      {/* <AboutMe/> */}
      <AboutMe />
      <Skills_FrontEnd />
      <ComponentTest />
      {/* <Footer/> */}
    </HashRouter>
  );
}

export default App;
