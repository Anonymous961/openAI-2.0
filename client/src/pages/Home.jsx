import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div className="home bg-gradient-to-r from-indigo-500 to-orange-500 min-h-screen py-10 flex flex-col items-center">
      {/* <h1 className="text-4xl font-bold text-slate-200 m-5 mx-11">Home</h1> */}
      <div className="bg-slate-200 w-2/3 p-8 mb-3 rounded-xl shadow-xl">
        <h1>
          {" "}
          Hello, <strong>{user.username}</strong>!
        </h1>
        <h1>
          {" "}
          <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Welcome to openAI 2.0",
                "Step into the future of artificial intelligence and innovation with our groundbreaking project, OpenAI 2.0. We are thrilled to invite you to join us on this incredible journey as we push the boundaries of what is possible in the realm of AI.",
                "Join us on this transformative journey, where innovation knows no bounds. OpenAI 2.0 is your gateway to a world of endless possibilities, where human ingenuity meets artificial intelligence. Together, let's shape the future and unlock new dimensions of human potential.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={10}
              delaySpeed={1000}
            />
          </span>
        </h1>
        {/* <p>Hello this is just to check</p> */}
      </div>
      <div className="flex flex-row justify-center items-center">
        <Link
          to="/chatgpt"
          className="card border-2 rounded-lg bg-slate-200 shadow-xl p-10 flex flex-col w-80 h-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-200 duration-300"
        >
          <p className="text-3xl my-2  float-left">ChatGpt</p>
          <p>
            ChatGPT is a language model developed by OpenAI that uses deep
            learning to generate human-like text responses in conversations. It
            can assist users in various tasks and formulate detailed responses.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 my-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
        <Link
          to="/Dall-e"
          className="card border-2 rounded-lg bg-slate-200  shadow-xl p-10 mx-4  flex flex-col w-80 h-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-200 duration-300"
        >
          <p className="text-3xl my-2">Dall-e</p>
          <p>
            DALL-E is an artificial intelligence program developed by OpenAI
            that creates surreal and realistic images from textual prompts,
            showcasing the power of generative models in the field of computer
            vision.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 my-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
      {/* <GptForm /> */}
    </div>
  );
};

export default Home;
