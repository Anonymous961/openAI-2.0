import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState("");
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      console.log("hello 1");
      const response = await axios.post(
        import.meta.env.VITE_APP_API_URL + "/api/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("hello 2");
      console.log(response.data);
      if (response.data.message) {
        setMsg(response.data.message);
      }
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      setIsLoading(false);
      setError(null);
    } catch (error) {
      if (error.response.request.status === 401) {
        setMsg(error.response.data.message);
      }
      setError(error.response.data.error);
      console.log(error);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, msg };
};
