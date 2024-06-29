import { LoginType, RegisterType } from "@danishhansari/futureemail-common";
import axios from "axios";
import { queryOptions } from "@tanstack/react-query";

export const getCurrentUser = async () => {
  const res = await axios.get("/api/auth/current-user");
  if (!res) {
    throw new Error("Server error");
  }
  return res.data;
};

export const userQueryOptions = queryOptions({
  queryKey: ["get-current-user"],
  queryFn: getCurrentUser,
  staleTime: Infinity,
});

export const signup = async (value: RegisterType) => {
  try {
    const res = await axios.post("/api/auth/signup", value);
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const signin = async (value: LoginType) => {
  try {
    const res = await axios.post("/api/auth/signin", value);
    console.log(res);
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios.get("/api/auth/logout");
    return res;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
