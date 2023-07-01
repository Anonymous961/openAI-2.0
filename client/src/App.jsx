import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GptForm from "./components/gptForm";
import Navbar from "./components/navbar";
import Dalle from "./pages/Dalle";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chatgpt" element={<GptForm />} />
        <Route exact path="/dall-e" element={<Dalle />} />
      </Routes>
    </Router>
  );
}

export default App;
