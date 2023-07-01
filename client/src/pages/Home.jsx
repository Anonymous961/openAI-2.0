import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home bg-gradient-to-r from-indigo-500 to-orange-500 min-h-screen py-10">
      {/* <h1 className="text-4xl font-bold text-slate-200 m-5 mx-11">Home</h1> */}
      <div className="flex flex-row justify-center items-center">
        <Link
          to="/chatgpt"
          className="card border-2 rounded-lg bg-slate-300 shadow-xl p-10 flex flex-col w-80 h-96"
        >
          <p className="text-3xl my-2  float-left">ChatGpt</p>
          <p>
            ChatGPT is a language model developed by OpenAI that uses deep
            learning to generate human-like text responses in conversations. It
            can assist users in various tasks and formulate detailed responses.
          </p>
        </Link>
        <Link
          to="/Dall-e"
          className="card border-2 rounded-lg bg-slate-300  shadow-xl p-10 mx-4  flex flex-col w-80 h-96"
        >
          <p className="text-3xl my-2">Dall-e</p>
          <p>
            DALL-E is an artificial intelligence program developed by OpenAI
            that creates surreal and realistic images from textual prompts,
            showcasing the power of generative models in the field of computer
            vision.
          </p>
        </Link>
      </div>
      {/* <GptForm /> */}
    </div>
  );
};

export default Home;
