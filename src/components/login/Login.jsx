"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import {
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
  Stack,
  Link,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const handleLogin = () => {
    if (username === "adminPanel" && password === "admin") {
      router.push("/dashboard");
    } else {
      setError("Username or password is incorrect");
    }
  };

  return (
    <Grid className={styles.bg_login}>
      <Grid className={styles.left_login}>
        <Box className={styles.left_icon}>
          <Image src="/login/login-bg.svg" alt="bg" width={500} height={500} />
        </Box>
      </Grid>
      <Grid className={styles.right_login}>
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            mx: "auto",
          }}
          className={styles.right_login_box}
        >
          <Typography
            variant="h3"
            sx={{ mb: 1, fontWeight: 700, fontSize: 30 }}
          >
            Welcome to Panel
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            Your Admin Dashboard
          </Typography>

          <Stack className={styles.btn_social_login}>
            <Button
              className={styles.btn_social}
              variant="outlined"
              color="inherit"
              size="large"
              startIcon={
                <Avatar
                  src="/login/google-icon.svg"
                  alt="google-icon"
                  sx={{ width: 16, height: 16 }}
                />
              }
              sx={{ justifyContent: "flex-start", textTransform: "none" }}
            >
              {isSmallScreen ? "Google" : "Sign in with Google"}
            </Button>
            <Button
              className={styles.btn_social}
              variant="outlined"
              color="inherit"
              size="large"
              startIcon={
                <Avatar
                  src="/login/facebook-icon.svg"
                  alt="facebook-icon"
                  sx={{ width: 24, height: 24 }}
                />
              }
              sx={{ justifyContent: "flex-start", textTransform: "none" }}
            >
              {isSmallScreen ? "FB" : "Sign in with FB"}
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="h6" color="text.secondary">
              or sign in with
            </Typography>
          </Divider>

          <Stack spacing={2}>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                Username
              </Typography>
              <TextField
                id="username"
                fullWidth
                variant="outlined"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "grey",
                    },
                    "&:hover fieldset": {
                      borderColor: "blue",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "blue",
                      borderWidth: 2,
                    },
                  },
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Password
              </Typography>
              <TextField
                id="password"
                fullWidth
                variant="outlined"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "grey",
                    },
                    "&:hover fieldset": {
                      borderColor: "blue",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "blue",
                      borderWidth: 2,
                    },
                  },
                }}
              />
            </Box>
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#0000003b",
                      "&.Mui-checked": {
                        color: "#5D87FF",
                        "& .MuiSvgIcon-root": {
                          fill: "#5D87FF",
                        },
                      },
                    }}
                  />
                }
                label="Remember this Device"
              />
            </Stack>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 3, mb: 2, bgcolor: "#5D87FF", color: "#fff" }}
            onClick={handleLogin}
          >
            Sign In
          </Button>

          <Stack direction="row" spacing={1} justifyContent="start">
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontSize: 16, fontWeight: 700 }}
            >
              New to Modernize?
            </Typography>
            <Link
              href="/"
              component={NextLink}
              underline="hover"
              sx={{ color: "#5D87FF" }}
            >
              Create an account
            </Link>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
