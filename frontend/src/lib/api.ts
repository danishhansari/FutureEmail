import { type RegisterType } from "@danishhansari/futureemail-common";
import axios from "axios";

export const signup = async (value: RegisterType) => {
  const res = await axios.post("/api/auth/signup", value);
  if (!res) {
    throw new Error("Server error");
  }
  console.log(res);
};
