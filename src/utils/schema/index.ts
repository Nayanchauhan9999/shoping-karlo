import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email")
    .email("Please enter valid email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password should be atleast 8 characters"),
});
