import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error, msg } = useSignup();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
    console.log(error);
    setTimeout(() => {
      navigate("/login");
    }, 10000);
  };
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-cyan-200 to-blue-400 ">
      <div className="flex flex-col h-5/6 w-1/2  p-10 m-10 bg-slate-300 shadow-lg rounded-md">
        <h1 className="text-center m-10 text-4xl ">Signup</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center "
        >
          <input
            type="text"
            className="m-1 p-2 rounded-md "
            placeholder="full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="m-1 p-2 rounded-md"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="m-1 p-2 rounded-md"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="bg-green-300 w-48 p-2 m-5 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300"
            type="submit"
          >
            {isLoading && (
              <div
                className="inline-block h-8 w-8 animate-spin  rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            )}
            {!isLoading && <p>Sign up</p>}
          </button>
        </form>
        <div className="flex justify-center flex-col items-center">
          <p>Already an user ?</p>
          <Link className="text-green-500 underline mx-1" to="/login">
            login
          </Link>
          {msg && (
            <p className="text-green-500 border-2 border-green-500 p-4 rounded-md my-2">
              {msg}
            </p>
          )}
          {error && (
            <p className="text-red-500 text-center border-2 w-2/3 border-red-500 p-3 rounded-md">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
