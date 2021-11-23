import React from "react";
import { Field } from "formik";

function TextAreaControl(props) {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <Field
        as={props.type}
        name={props.name}
        placeholder={"Enter " + props.label}
      />
    </div>
  );
}

export default TextAreaControl;
