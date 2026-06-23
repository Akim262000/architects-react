import Header from "./components/Header";
import Main from "./components/Main";
import Gallery from "./components/Gallery"
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router>
      <Header />
      <main class="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
