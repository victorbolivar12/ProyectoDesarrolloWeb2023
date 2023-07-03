import { useFormik } from "formik";
import * as yup from "yup";
import { request } from "../../api";
import { enqueueSnackbar } from "notistack";
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
  const signUp = async (values) => {
    if (values.password == values.confirmPassword) {
      const resp = await request.auth.signUp({
        nombre: values.name,
        apellido: values.lastName,
        email: values.email,
        contraseña: values.password,
      });
      if (resp.user) {
        enqueueSnackbar("Usuario registrado correctamente", {
          variant: "success",
        });
      } else {
        enqueueSnackbar(resp.response.data.message, {
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
