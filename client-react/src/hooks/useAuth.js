import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { persistState, getPersistedState, PERSISTOR_KEYS } from '../utils';

const authAtom = atom(
  getPersistedState(PERSISTOR_KEYS.auth) ?? { isAuthenticated: false }
);

const userAtom = atom(getPersistedState(PERSISTOR_KEYS.user) ?? {});

export const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => persistState(PERSISTOR_KEYS.auth, auth), [auth]);
  useEffect(() => persistState(PERSISTOR_KEYS.user, user), [user]);

  return {
    auth,
    setAuth,
    user,
    setUser,
  };
};
