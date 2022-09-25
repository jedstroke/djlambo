import { Routes, Route} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';
import Home from "./pages/Home";
import Pitch from "./pages/Pitch";

function App() {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/my-pitch" element={<Pitch />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;