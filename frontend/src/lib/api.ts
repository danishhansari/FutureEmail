import { LoginType, RegisterType } from "@danishhansari/futureemail-common";
import axios from "axios";
import { queryOptions } from "@tanstack/react-query";

const baseUrl = import.meta.env.VITE_SERVER;

export const getCurrentUser = async () => {
  console.log(baseUrl);
  try {
    const res = await axios.get(`${baseUrl}/api/auth/current-user`);
    if (!res) {
      throw new Error("Server error");
    }
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const userQueryOptions = queryOptions({
  queryKey: ["get-current-user"],
  queryFn: getCurrentUser,
  staleTime: Infinity,
});

export const signup = async (value: RegisterType) => {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/signup`, value);
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const signin = async (value: LoginType) => {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/signin`, value);
    console.log(res);
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/auth/logout`);
    return res;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const sendToFutureEmail = async (email: string, date: Date) => {
  try {
    if (date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (date < today) {
        throw new Error("You cannot set past date");
      }
      const res = await axios.post(`${baseUrl}/api/email/post`, {
        email,
        date,
      });
      if (!res) {
        throw new Error("Error while sending");
      }
      console.log(res);
      return res;
    }
  } catch (error) {
    throw new Error("Error while sending to the db");
  }
};
