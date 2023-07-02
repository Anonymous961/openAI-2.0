import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
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
            className="m-1 p-2 rounded-md"
            placeholder="full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="m-1 p-2 rounded-md"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            className="m-1 p-2 rounded-md"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="bg-green-300 w-48 p-2 m-5 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
