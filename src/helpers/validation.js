import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("You must enter an email address")
    .email("You must enter a valid email address"),
});
