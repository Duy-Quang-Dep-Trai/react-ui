import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPages from "./page/Product/ProductPages";
import Layout from "./page/Layout"; // nếu bạn để Layout.js trong /page
import About from "./page/About/About";
import History from "./page/History/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<ProductPages />} />
          <Route path="about" element={<About />} />
          <Route path="History" element={<History />} />
          {/* <Route path="contact" element={<Contact />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <Header />
    //   <Home />
    //   <Footer />
    // </div>
  );
}
export default App;
