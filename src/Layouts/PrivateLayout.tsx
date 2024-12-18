import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  CssBaseline,
  Container,
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";

interface PrivateLayoutProps {
  children?: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = () => {
  const { logout } = useAuth();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Budget-App
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // To compensate for the height of the AppBar
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default PrivateLayout;
