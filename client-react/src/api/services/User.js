import { request } from "../base";

const endpoints = {
  get: "/user",
};

export const getUsers = async (payload) => {
  try {
    const res = await request.get(endpoints.get, payload);
    return { data: res.data, statusCode: res.status };
  } catch (error) {
    return error;
  }
};
