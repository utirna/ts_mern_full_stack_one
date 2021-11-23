import React from "react";
import InputControl from "./InputControl";
import TextAreaControl from "./TextAreaControl";
import RadioControl from "./RadioControl";

function FormControl(props) {
  return (
    <>
      {(() => {
        switch (props.type) {
          case "textarea":
            return <TextAreaControl {...props} />;
          case "radio":
            return <RadioControl {...props} />;

          default:
            return <InputControl {...props} />;
        }
      })()}
    </>
  );
}

export default FormControl;
