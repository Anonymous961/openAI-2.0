import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Check = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [msg, setMsg] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  //   console.log(params.id);
  useEffect(() => {
    // console.log("check");
    const verifyEmailUrl = async () => {
      try {
        // console.log("backend-" + import.meta.env.VITE_APP_API_URL);
        const response = await axios.get(
          import.meta.env.VITE_APP_API_URL +
            `/api/user/${params.id}/verify/${params.token}`
        );
        console.log(response.data);
        setMsg(response.data.message);
        setValidUrl(true);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } catch (error) {
        console.log(error);
        // setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [params]);
  return (
    <div className="max-h-screen">
      {validUrl ? (
        <div className="flex justify-center flex-col items-center p-20">
          <img
            className="w-40"
            src="https://i.postimg.cc/vHQkQFS3/success-img.png"
            alt="success-img"
          />
          <p className="text-green-500 font-bold text-2xl">{msg}</p>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold">404 Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default Check;
