import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_APP_API_URL + "/api/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.response.data.error);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
