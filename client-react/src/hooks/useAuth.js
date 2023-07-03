import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { persistState, getPersistedState, PERSISTOR_KEYS } from "../utils";

const authAtom = atom(
  getPersistedState(PERSISTOR_KEYS.auth) ?? { isAuthenticated: false }
);

const userAtom = atom(getPersistedState(PERSISTOR_KEYS.user) ?? {});
const personAtom = atom(getPersistedState(PERSISTOR_KEYS.person) ?? {});

export const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [user, setUser] = useAtom(userAtom);
  const [person, setPerson] = useAtom(personAtom);

  useEffect(() => persistState(PERSISTOR_KEYS.auth, auth), [auth]);
  useEffect(() => persistState(PERSISTOR_KEYS.user, user), [user]);
  useEffect(() => persistState(PERSISTOR_KEYS.user, person), [person]);

  return {
    auth,
    setAuth,
    user,
    setUser,
    person,
    setPerson,
  };
};
