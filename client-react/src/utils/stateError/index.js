import { useEffect } from 'react';
// import { useSnackbar } from "notistack";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useAuth, useToken } from '../../hooks';

export const useNotify = (error, variant, title, path) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { setAuth, setUser } = useAuth();
  const { setToken } = useToken();

  useEffect(() => {
    if (error) {
      if (
        (error.status === 500 ||
        error.status === 401 ||
        error.request.status === 500 ||
        error.request.status === 401 ||
        error.message === 'Network Error') && path !== "ws" // eslint-disable-line react-hooks/exhaustive-deps
      ) {
        setToken('');
        setUser({});
        setAuth({ isAuthenticated: false });
        navigate('/', { replace: true });
        toast({
          title: 'Error',
          description: error.message,
          status: variant,
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      toast({
        title: title,
        status: variant,
        duration: 9000,
        isClosable: true,
      });
    }
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps
};
