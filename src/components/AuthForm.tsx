import React from "react";
import { Box, Button, Typography } from "@mui/material";
import FormField from "./FormField";

interface AuthFormProps {
  title: string;
  fields: {
    label: string;
    name: string;
    type?: "text" | "password" | "email";
  }[];
  buttonText: string;
  onSubmit: (data: { [key: string]: string }) => void;
  footer: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  fields,
  buttonText,
  onSubmit,
  footer,
}) => {
  const [formValues, setFormValues] = React.useState<{ [key: string]: string }>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        {title}
      </Typography>
      {fields.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          value={formValues[field.name] || ""}
          onChange={handleChange}
        />
      ))}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        {buttonText}
      </Button>
      <Box mt={2}>{footer}</Box>
    </Box>
  );
};

export default AuthForm;
