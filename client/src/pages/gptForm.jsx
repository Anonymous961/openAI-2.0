import { useState } from "react";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";

const GptForm = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // console.log(import.meta.env.VITE_APP_API_URL);
  const handleClick = async (e) => {
    e.preventDefault();
    setData("");
    setIsLoading(true);
    const response = await axios.post(
      import.meta.env.VITE_APP_API_URL + "/openai/meta",
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.message.content);
    setData(response.data.message.content);
    setIsLoading(false);
  };

  return (
    <div className="gpt grid grid-cols-3 bg-cover px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen py-10">
      <div className="content bg-white grid justify-items-center items-center col-span-2 rounded-md shadow-xl p-10 ">
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
        {data && (
          <h1>
            {" "}
            <span>
              <Typewriter
                words={[data]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={20}
                deleteSpeed={100000}
                delaySpeed={1000}
              />
            </span>
          </h1>
        )}

        {data && (
          <button
            className="bg-green-200 p-4 rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300"
            onClick={handleClick}
          >
            Regenerate
          </button>
        )}
      </div>
      <div className="mx-5">
        <h1 className="text-5xl font-bold text-cyan-300 my-6">Chatgpt</h1>
        <p className="text-slate-200 my-4 w-80">
          Language model, conversational AI, text generation, deep learning,
          natural language understanding.
        </p>
        <div>
          <p className="text-white border-2 p-2 rounded-md w-80">
            <strong>NOTE :</strong>
            If the page is taking too long to load, please try reloading it.
          </p>
        </div>
        <form onSubmit={handleClick} className=" flex flex-col my-2">
          <label className="text-xl text-white">Ask anything</label>
          <input
            type="text"
            value={title}
            className="border-1 border-rose-500 rounded-md px-2 my-2 w-80 h-10"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
            placeholder="Generate 10 creative ideas"
          />
          <input
            type="submit"
            className="shadow-2xl py-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white  rounded-lg w-80 bg-sky-500"
          />
        </form>
      </div>
    </div>
  );
};

export default GptForm;
