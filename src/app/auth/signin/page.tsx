"use client";
import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  LinearProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import InputField from "@/components/__Shared/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "@/utils/schema";
import Copyright from "@/components/Atoms/Copyright";
import ApiClient from "@/utils/http";
import { LoadingButton } from "@mui/lab";
import { Send } from "@mui/icons-material";
import { useRouter } from "next/navigation";

type FormInputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    reValidateMode: "onBlur",
    resolver: yupResolver(signInSchema),
  });

  const handleSignin = async (data: FormInputs) => {
    setLoading(true);
    try {
      const signedUser: { email: string; id: string; token: string } =
        await new ApiClient().post("auth/signin", data);
      localStorage.setItem("token", signedUser?.token);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <LinearProgress color="primary" />}

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleSignin)}
            noValidate
            sx={{ mt: 1 }}
          >
            <InputField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              control={control}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              disabled={loading}
            />
            <InputField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              control={control}
              autoComplete="current-password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              disabled={loading}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={loading}
              loadingPosition="end"
              endIcon={<Send />}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}
