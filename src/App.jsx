import "./css/index.css";
import "./css/App.css";
import Favorites from "./pages/Favorites.jsx";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {
  return (
    <main className="main-content">
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </main>
  );
}

export default App;