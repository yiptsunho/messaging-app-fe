import {
    Avatar,
    Box, Button, Checkbox,
    Container,
    createTheme,
    CssBaseline, FormControlLabel, Grid,
    Link,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

function Login (props) {
    const { setIsLogin } = props;
    const navigate = useNavigate()
    const loginId = useRef('')
    const password = useRef('')
    const [loginIdValid, setLoginIdValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

    // useEffect(() => {
    //     window.sessionStorage.clear()
    // }, [])

    const handleSubmit = (event) => {

        event.preventDefault()
        const params = {
            loginId: loginId.current.value,
            password: password.current.value
        }

        console.log(params)
        if (params.loginId !== "jacky" && params.loginId !== "henry") {
            setLoginIdValid(false)
        }
        if (params.password !== "123456") {
            setPasswordValid(false)
        }
        // dummy login function
        if (loginIdValid && passwordValid) {
            sessionStorage.setItem('accessToken', 'fake token')
            if (params.loginId === "jacky") {
                sessionStorage.setItem('userId', 1)
            } else if (params.loginId === "henry") {
                sessionStorage.setItem('userId', 2)
            }
            // sessionStorage.setItem('userId', 1)
            setIsLogin(true)
            navigate("/main", { state: { userId: 1 } })

        }
        // real login function
        // login(params, setIsLogin, navigate, setOpenDialog, refreshToken)

        const loginSuccessCallback = () => {

        }

        const loginFailCallback = () => {

        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <form onSubmit={handleSubmit} style={{ display: "Contents" }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                error={!loginIdValid}
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                autoFocus
                                defaultValue=""
                                inputRef={loginId}
                                // onChange={(e) => handleChangeLoginId(e.target.value)}
                            />
                            <TextField
                                error={!passwordValid}
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                defaultValue=""
                                inputRef={password}
                                // onChange={(e) => handleChangePassword(e.target.value)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/forgetpassword" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/createaccount" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            {/*<CustomDialog.js*/}
                            {/*    open={openDialog}*/}
                            {/*    setOpen={setOpenDialog}*/}
                            {/*    title={dialogTitle.current}*/}
                            {/*    content={dialogContent.current}*/}
                            {/*/>*/}
                        </Box>
                    </form>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
};

export default Login;