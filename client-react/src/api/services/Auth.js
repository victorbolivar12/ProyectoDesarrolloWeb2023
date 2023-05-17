import { request } from "../base";

const endpoints = {
  post: "/auth",
  signUp: "/api/user",
  // logout: "/api/salir",
};

export const signIn = async (payload) => {
  const res = await request.post(endpoints.post, payload);
  return res.data;
};

export const signUp = async (payload) => {
  const res = await request.post(endpoints.signUp, payload);
  return res.data;
};

// export const logOut = async () => {
//   try {
//     const res = await request.get(endpoints.logout);
//     return res.data;
//   } catch (error) {
//     handleError(error);
//   }
// };
