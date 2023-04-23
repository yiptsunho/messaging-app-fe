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
import {useContext, useEffect, useRef, useState} from "react";
import {DialogContext} from "../App";
import {login} from "../apis/UserApi";

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
    const { setOpenDialog, dialogParam } = useContext(DialogContext)

    // useEffect(() => {
    //     window.sessionStorage.clear()
    // }, [])

    const handleSubmit = (event) => {
        let params = {}
        event.preventDefault()
        const payload = {
            emailAddress: loginId.current.value,
            password: password.current.value
        }

        console.log(payload)
        if (!payload.emailAddress) {
            setLoginIdValid(false)
            return null
        }
        if (!payload.password) {
            setPasswordValid(false)
            return null
        }
        // sessionStorage.setItem('accessToken', 'fake token')
        // if (pay.loginId.toLowerCase() === "jacky") {
        //     sessionStorage.setItem('userId', "0001")
        //     sessionStorage.setItem('loginId', params.loginId)
        // } else if (params.loginId.toLowerCase() === "henry") {
        //     sessionStorage.setItem('userId', "0002")
        //     sessionStorage.setItem('loginId', params.loginId)
        // } else if (params.loginId.toLowerCase() === "timothy") {
        //     sessionStorage.setItem('userId', "0003")
        //     sessionStorage.setItem('loginId', params.loginId)
        // } else if (params.loginId.toLowerCase() === "ashley") {
        //     sessionStorage.setItem('userId', "0004")
        //     sessionStorage.setItem('loginId', params.loginId)
        // } else if (params.loginId.toLowerCase() === "gianna") {
        //     sessionStorage.setItem('userId', "0005")
        //     sessionStorage.setItem('loginId', params.loginId)
        // }
        // sessionStorage.setItem('userId', 1)
        // setIsLogin(true)
        // navigate("/main")

        // real login function
        params.payload = payload
        params.successCallback = (res) => {
            setIsLogin(true)
            navigate("/main")
        }
        params.failCallback = () => {
            password.current = ""
            dialogParam.current.title = "Warning"
            dialogParam.current.content = "Login failed, please try again"
            setOpenDialog(true)
        }
        login(params)
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
                                    <Link href="/createaccount" variant="body2">
                                        Don't have an account? Sign Up
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