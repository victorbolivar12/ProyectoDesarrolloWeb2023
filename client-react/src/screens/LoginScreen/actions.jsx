import { useFormik } from "formik";
import * as yup from "yup";
import { request } from "../../api";
import { useAuth } from "../../hooks";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Action = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Ingresa tu email")
      .email("Ingresa un email valido")
      .required("Email es requerido"),
    password: yup
      .string("Ingresa tu password")
      .min(8, "Password debe tener una longitud mínima de 8 caracteres")
      .required("Password es requerido"),
  });
  const navigate = useNavigate();
  const { setUser, setAuth, setPerson } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn(values);
    },
  });

  const signIn = async (values) => {
    const resp = await request.auth.signIn(values);
    if (resp.statusCode == 200) {
      setUser(resp.data.user);
      setAuth({ isAuthenticated: true, token: resp.data.token });
      setPerson(resp.data.person);
      enqueueSnackbar("Usuario inicio sesión correctamente", {
        variant: "success",
      });
      navigate("/dashboard/calendar", { replace: true });
    } else {
      enqueueSnackbar(resp.response?.data?.message, {
        variant: "error",
      });
    }
  };

  return { formik };
};

export default Action;
