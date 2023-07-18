import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { persistState, getPersistedState, PERSISTOR_KEYS } from "../utils";
import { request } from "../api";

const authAtom = atom(
  getPersistedState(PERSISTOR_KEYS.auth) ?? {
    isAuthenticated: false,
    token: "",
  }
);

const userAtom = atom(getPersistedState(PERSISTOR_KEYS.user) ?? {});
const personAtom = atom(getPersistedState(PERSISTOR_KEYS.person) ?? {});

export const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [user, setUser] = useAtom(userAtom);
  const [person, setPerson] = useAtom(personAtom);

  const logOut = () => {
    setAuth({ isAuthenticated: false, token: "" });
    setUser({});
    setPerson({});
  };

  useEffect(() => {
    persistState(PERSISTOR_KEYS.auth, auth);
    if (auth?.token === "") {
      request.defaults.headers.common["Authorization"] = "";
    } else {
      request.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${auth?.token}`;
    }
  }, [auth]);
  useEffect(() => persistState(PERSISTOR_KEYS.user, user), [user]);
  useEffect(() => persistState(PERSISTOR_KEYS.person, person), [person]);

  return {
    auth,
    setAuth,
    user,
    setUser,
    person,
    setPerson,
    logOut,
  };
};
