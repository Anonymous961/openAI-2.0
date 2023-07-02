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
        className="text-5xl font-bold mx-10 text-gray-50 flex items-center"
      >
        <img
          src="https://i.postimg.cc/FzxwzGqS/open-AIlogo.png"
          className="w-12 h-12 m-1"
          alt=""
        />
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
            <li className="flex items-center">
              <p className="mx-2">Hello, {user.username}</p>
              {user && (
                <button
                  className="border-2 p-2 rounded-md hover:text-orange-200 bg-red-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
                  onClick={handleClick}
                >
                  Logout
                </button>
              )}
            </li>
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
