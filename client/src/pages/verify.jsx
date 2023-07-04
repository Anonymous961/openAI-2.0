import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Verified = async () => {
  const [validUrl, setValidUrl] = useState(true);
  const [msg, setMsg] = useState("");
  const params = useParams();
  console.log("id-" + params.id);
  useEffect(() => {
    console.log("check");
    const verifyEmailUrl = async () => {
      try {
        console.log("backend-" + import.meta.env.VITE_APP_API_URL);
        const response = await axios.get(
          import.meta.env.VITE_APP_API_URL +
            `/api/user/${params.id}/verify/${params.token}`
        );
        console.log(response.data);
        setMsg(response.data.message);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [params]);
  return (
    <div>
      <h1>hello</h1>
      {validUrl ? (
        <div>
          <img
            src="https://i.postimg.cc/vHQkQFS3/success-img.png"
            alt="success-img"
          />
          {msg}
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
};

export default Verified;
