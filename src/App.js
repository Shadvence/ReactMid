import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Posts from "./components/Reccomendation/Recommendation"



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Posts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;