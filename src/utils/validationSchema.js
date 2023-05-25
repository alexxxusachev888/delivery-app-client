import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  phone: Yup.string()
    .matches(/^[+]?\d+$/,"Phone number is not valid" )
    .required("Required"),
  address: Yup.string()
    .required("Required"),
});