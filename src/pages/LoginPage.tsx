import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  const handleLogin = (data: { [key: string]: string }) => {
    console.log("Login data:", data);
    // Lógica para autenticar al usuario
  };

  return (
    <AuthForm
      title="Iniciar Sesión"
      fields={[
        { label: "Correo Electrónico", name: "email", type: "email" },
        { label: "Contraseña", name: "password", type: "password" },
      ]}
      buttonText="Iniciar Sesión"
      onSubmit={handleLogin}
      footer={
        <Link to="/register" style={{ textDecoration: "none" }}>
          ¿No tienes cuenta? Regístrate
        </Link>
      }
    />
  );
};

export default LoginPage;
