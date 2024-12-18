import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { Helmet } from "react-helmet";
import axiosInstance from "../services/api";

const RegisterPage = () => {
  const handleRegister = async (data: { [key: string]: string }) => {
    try {
      await axiosInstance.post("/auth/register", data);
      alert("Registro exitoso:");
    } catch (error) {
      alert("Hubo un error al registrarse. Inténtalo de nuevo.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Registro</title>
      </Helmet>
      <AuthForm
        title="Registrarme"
        fields={[
          { label: "Nombre de Usuario", name: "username", type: "text" },
          { label: "Correo Electrónico", name: "email", type: "email" },
          { label: "Contraseña", name: "password", type: "password" },
          { label: "Celular", name: "phone", type: "text" },
        ]}
        buttonText="Registrarse"
        onSubmit={handleRegister}
        footer={
          <Link to="/login" style={{ textDecoration: "none" }}>
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        }
      />
    </div>
  );
};

export default RegisterPage;
