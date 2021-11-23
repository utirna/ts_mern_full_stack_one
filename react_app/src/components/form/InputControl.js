import React from "react";
import { Field } from "formik";
function InputControl(props) {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <Field
        type={props.type}
        name={props.name}
        placeholder={"Enter" + props.label}
      />
    </div>
  );
}

export default InputControl;
