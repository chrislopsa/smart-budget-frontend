import React from "react";
import { useAuth } from "../hooks/useAuth";

const Dashboard: React.FC = () => {
  const { userId, logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, user ID: {userId}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
