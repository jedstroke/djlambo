import { Routes, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
  );
}

export default App;