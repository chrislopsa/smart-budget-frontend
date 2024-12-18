import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('authToken');

    if (storedUserId && token) {
      setUserId(storedUserId);
      setIsAuthenticated(true);
    } else {
      sessionStorage.clear();
    }
  }, []);

  const logout = () => {
    sessionStorage.clear();
    setUserId(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  return { userId, isAuthenticated, logout };
};