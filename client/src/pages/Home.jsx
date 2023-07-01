import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/chatgpt">ChatGpt</Link>
      <Link to="/Dall-e">Dall-e</Link>
      {/* <GptForm /> */}
    </div>
  );
};

export default Home;
