import { useFormik } from "formik";
import * as yup from "yup";
import { request } from "../../api/base";

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
  
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (values.password == values.confirmPassword) {
        await request.auth.signIn(values);
        alert(JSON.stringify(values, null, 2));
      } else {
      }
    },
  });
  return { formik };
};

export default Action;
