import { useFormik } from "formik";
import * as yup from "yup";
import { request } from "../../api";
import { useAuth } from "../../hooks";

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

  const { setUser, setAuth } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      signIn(values);
    },
  });

  const signIn = async (values) => {
    console.log(values);

    const resp = await request.auth.signIn(values);
    console.log(resp);

  };

  return { formik };
};

export default Action;
