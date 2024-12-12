import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const RegisterPage = () => {
  const handleRegister = (data: { [key: string]: string }) => {
    console.log("Register data:", data);
    // Lógica para enviar datos al backend
  };

  return (
    <AuthForm
      title="Registro"
      fields={[
        { label: "Correo Electrónico", name: "email", type: "email" },
        { label: "Contraseña", name: "password", type: "password" },
      ]}
      buttonText="Registrarse"
      onSubmit={handleRegister}
      footer={
        <Link to="/login" style={{ textDecoration: "none" }}>
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      }
    />
  );
};

export default RegisterPage;
