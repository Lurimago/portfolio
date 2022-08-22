import { Purchaces, Home, Login, ProductsDetail } from "./pages";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen, NavBar} from "./components";
import "./styles/ring.css";
import "./index.css";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Ring from './components/Ring';
// import Footer from './components/Footer';

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <section class="wrapper">
    <HashRouter>
    <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      <NavBar/>
      <Ring/>
      {isLoading && <LoadingScreen />}
      <Container className="mt-5">      
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Container>
      {/* <Footer/> */}
    

        </HashRouter>
    </section>
  );
}

export default App;
