import { LoginType, RegisterType } from "@danishhansari/futureemail-common";
import axios from "axios";

export const signup = async (value: RegisterType) => {
  try {
    const res = await axios.post("/api/auth/signup", value);
    console.log(res);
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
