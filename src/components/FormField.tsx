import React from "react";
import { TextField } from "@mui/material";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "password" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
    />
  );
};

export default FormField;
