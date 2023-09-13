import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type IInputField = TextFieldProps & {
  name: string;
  control: any;
};

const InputField = ({ name, control, defaultValue, ...props }: IInputField) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => {
        return <TextField {...field} {...props} />;
      }}
    />
  );
};

export default InputField;
