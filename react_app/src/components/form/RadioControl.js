import React from "react";
import { Field } from "formik";
function RadioControl(props) {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <Field name={props.name}>
        {({ field }) => {
          return props.radio_value.map((radio, index) => (
            <div key={index}>
              <input {...field} value={radio.value} type={props.type} />
              <label htmlFor="">{radio.label}</label>
            </div>
          ));
        }}
      </Field>
    </div>
  );
}

export default RadioControl;
