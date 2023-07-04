import { useState } from "react";
import axios from "axios";
// import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  // const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        import.meta.env.VITE_APP_API_URL + "/api/user/signup",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.message);
      setMsg(response.data.message);
      // localStorage.setItem("user", JSON.stringify(response.data));
      // dispatch({ type: "LOGIN", payload: response.data });
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.response.data.error);
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error, msg };
};
