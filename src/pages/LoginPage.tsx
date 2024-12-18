import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { Helmet } from "react-helmet";
import axiosInstance from "../services/api";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: { [key: string]: string }) => {
    try {
      const response = await axiosInstance.post("auth/login", data);
      const token = response.data.data.access_token;
      const userId = response.data.data.user.id;

      sessionStorage.setItem("authToken", token);
      sessionStorage.setItem("userId", userId);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
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
    </div>
  );
};

export default LoginPage;
