import Header from "./components/Header";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project-detail" element={<ProjectDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
