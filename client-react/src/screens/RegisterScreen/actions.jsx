import { useFormik } from "formik";
import * as yup from "yup";
import { request } from "../../api";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
const Action = () => {
  const validationSchema = yup.object({
    name: yup.string("Ingresa tu nombre").required("Nombre es requerido"),
    lastName: yup
      .string("Ingresa tu apellido")
      .required("Apellido es requerido"),
    email: yup
      .string("Ingresa tu email")
      .email("Ingresa un email valido")
      .required("Email es requerido"),
    password: yup
      .string("Ingresa tu password")
      .min(8, "Password debe tener una longitud mínima de 8 caracteres")
      .required("Password es requerido"),
    confirmPassword: yup
      .string("Ingresa tu password")
      .min(8, "Password debe tener una longitud mínima de 8 caracteres")
      .required("Password es requerido"),
  });

  const navigate = useNavigate();

  const signUp = async (values) => {
    if (values.password == values.confirmPassword) {
      const resp = await request.auth.signUp({ ...values, rol_id: 2 });
      console.log(resp);
      if (resp.statusCode == 201) {
        enqueueSnackbar("Usuario registrado correctamente", {
          variant: "success",
        });
        navigate("/login", { replace: true });
      } else {
        enqueueSnackbar(resp.response?.data?.message, {
          variant: "error",
        });
      }
    } else {
      enqueueSnackbar("Por favor verifica las contraseñas", {
        variant: "error",
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => signUp(values),
  });

  return { formik };
};

export default Action;
