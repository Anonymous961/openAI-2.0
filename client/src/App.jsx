import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GptForm from "./pages/gptForm";
import Navbar from "./components/navbar";
import Dalle from "./pages/Dalle";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { useAuthContext } from "./hooks/useAuthContext";
import Check from "./pages/check";

function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/chatgpt"
          element={user ? <GptForm /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/dall-e"
          element={user ? <Dalle /> : <Navigate to="/login" />}
        />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        {/* <Route exact path="/check" element={<Check />} /> */}
        <Route path="/user/:id/verify/:token" element={<Check />} />
      </Routes>
    </Router>
  );
}

export default App;
