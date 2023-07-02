import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  const checkUser = () => {
    if (!user) {
      alert("User need to login first");
    }
  };
  return (
    <div className="navbar h-24 bg-indigo-500 items-center grid grid-cols-2 gap-5">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="text-5xl font-bold mx-10 text-gray-50"
      >
        OpenAI
      </h1>
      <div className="navs">
        {user ? (
          <ul className="flex justify-evenly items-center text-xl text-white">
            <li className=" mx-2 " onClick={checkUser}>
              <Link to="/chatgpt">Chatgpt</Link>
            </li>
            <li className="mx-2" onClick={checkUser}>
              <Link to="/dall-e">Dall-e</Link>
            </li>
            {user && (
              <button
                className="border-2 p-2 rounded-md hover:text-red-500 "
                onClick={handleClick}
              >
                Logout
              </button>
            )}
          </ul>
        ) : (
          <ul className="flex justify-evenly items-center text-xl text-white">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
