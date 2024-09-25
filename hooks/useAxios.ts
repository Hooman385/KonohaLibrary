"use client";
import axios from "axios";
import { useEffect} from "react";

const useAxios = () => {
  //   const [data, setData] = useState<{ [key: string]: any } | null>(null);
  //   const [error, setError] = useState<string | number>("");
  //   const [loading, setLoading] = useState(false);

  const axiosInstance = axios.create({
    baseURL: "https://narutodb.xyz/api",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      //   setError("");
      //   setLoading(true);
      //   config.signal = controller.signal;
      return config;
    },
    (error) => {
      //   setLoading(false);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      //   setLoading(false);
      return response;
    },
    (error) => {
      //   setLoading(false);
      //   if (axios.isCancel(error)) {
      //     console.error("Request cancelled", error.message);
      //   } else if (axios.isAxiosError(error)) {
      //     setError(error.response ? error.response.status : error.message);
      //     console.log(error);
      //   } else {
      //     setError("An unexpected error occurred");
      //     console.error("Unexpected error:", error);
      //   }
      return Promise.reject(error);
    }
  );

  let controller = new AbortController();

  useEffect(() => {
    return () => controller.abort();
  }, []);

  const getCharacters = async (
    url: string,
    method = "GET",
    params?: { [key: string]: string | number }
  ) => {
    controller.abort();
    controller = new AbortController();

    try {
      const result = await axiosInstance({
        url,
        method,
        params,
        // either add signal here or in interceptor
        signal: controller.signal,
      });
      return result.data;
    } catch (error) {
      // Error handling is already done in the interceptors
      // Or we let React query handle it
      // So no need to handle errors here again unless you want to add additional logic
    }
  };

  return { getCharacters };
};

export default useAxios;
