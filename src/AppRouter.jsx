import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../src/components/nav/Nav";
import HomeMyPage from "./pages/home/HomeMyPage";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Notfound from "./pages/NotFound"

const AppRouter = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" index element={<HomeMyPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Notfound />}/>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
