import React from "react";
import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  const onChangeHandlerEvent = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(defaultValue);
  };

  return {
    value,
    onChange: onChangeHandlerEvent,
    reset,
  };
}

export default useInput;
