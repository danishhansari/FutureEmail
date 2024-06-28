import { LoginType, RegisterType } from "@danishhansari/futureemail-common";
import axios from "axios";

export const signup = async (value: RegisterType) => {
  const res = await axios.post("/api/auth/signup", value);
  if (!res) {
    throw new Error("Server error");
  }
  console.log(res.data);
  return res.data;
};

export const signin = async (value: LoginType) => {
  const res = await axios.post("/api/auth/signin", value);
  if (!res) {
    throw new Error("Server error");
  }
  console.log(res.data);
  return res.data;
};

export const logout = async () => {
  const res = await axios.get("/api/auth/logout");
  if (!res) {
    throw new Error("Server error");
  }
  console.log(res.data);
  return res.data;
};
