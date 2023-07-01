import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar h-24 bg-cyan-600 items-center grid grid-cols-2 gap-5">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="text-5xl font-bold mx-10 text-gray-50"
      >
        OpenAI
      </h1>
      <div className="navs">
        <ul className="flex justify-evenly items-center text-xl">
          <li className=" mx-10 ">
            <Link to="/chatgpt">Chatgpt</Link>
          </li>
          <li className="mx-10">
            <Link to="/dall-e">Dall-e</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
