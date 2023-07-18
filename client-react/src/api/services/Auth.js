import { request } from "../base";

const endpoints = {
  post: "/auth",
  signUp: "/user",
  // logout: "/api/salir",
};

export const signIn = async (payload) => {
  try {
    const res = await request.post(endpoints.post, payload);
    return { data: user, statusCode: res.status };
  } catch (error) {
    return error;
  }
};

export const signUp = async (payload) => {
  try {
    const res = await request.post(endpoints.signUp, payload);
    return { data: res.data, statusCode: res.status };
  } catch (error) {
    return error;
  }
};

// export const logOut = async () => {
//   try {
//     const res = await request.get(endpoints.logout);
//     return res.data;
//   } catch (error) {
//     handleError(error);
//   }
// };
