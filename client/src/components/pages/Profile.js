import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Context from "@mui/base/TabsUnstyled/TabsContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { notify } from "../templates/Toast";
import { Input, IconButton, InputAdornment } from "@mui/material";
const theme = createTheme();

export default function Profile() {

  const userData = JSON.parse(localStorage.getItem("user"))
  console.log(userData)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Typography component="h1" variant="h5">
            Your Profile
          </Typography>
          <section>
            <p>Username: {userData["username"]}</p>
            <p>Email: {userData["email"]}</p>
            {/* Add a button to change the password of the user */}
            {/* <Button onClick={() => {
              // Redirect to change password page
              window.location.href = "/change-password"
            }} >Change password</Button> */}
            {/* <button>Change Password</button> */}
            {/* <p>Password: {userData["password"]}</p> */}
          </section>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
