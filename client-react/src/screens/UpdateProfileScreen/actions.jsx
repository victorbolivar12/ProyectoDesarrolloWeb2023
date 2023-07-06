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
    birthDate: yup
      .date("Ingresa tu fecha de nacimiento").required("Fecha de Nacimiento es requerido"),
    age: yup
      .number("Ingresa tu edad").required("Edad es requerido"),
    dni: yup
      .string("Ingresa tu DNI").required("DNI es requerido"),
    contact: yup
      .string("Ingresa tu contacto").required("Contacto es requerido"),
    address: yup
      .string("Ingresa tu dirección").required("Dirección es requerido"),
  });

  const navigate = useNavigate();

  
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      birthDate: "",
      age: "",
      dni: "",
      contact: "",
      address: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => signUp(values),
  });

  return { formik };
};

export default Action;
