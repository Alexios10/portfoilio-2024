import React from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required(
      <span className="text-red-500 absolute">
        * Please enter you&lsquo;r name
      </span>
    ),
  email: yup
    .string()
    .email(<span className="text-red-500 absolute">* Enter a valid email</span>)
    .required(
      <span className="text-red-500 absolute ">
        * Please enter you&lsquo;r email
      </span>
    ),
  message: yup
    .string()
    .required(
      <span className="text-red-500 absolute">
        * Please type you&lsquo;r message
      </span>
    ),
});

export default schema;
