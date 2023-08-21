import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Coins" element={<Coins />} />
        <Route path="/Exchanges" element={<Exchanges />} />
        <Route path="/Coin/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
