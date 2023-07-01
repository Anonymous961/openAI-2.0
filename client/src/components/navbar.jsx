import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        OpenAI
      </h1>
      <div className="navs">
        <ul>
          <li>
            <Link to="/chatgpt">Chatgpt</Link>
          </li>
          <li>
            <Link to="/dall-e">Dall-e</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
