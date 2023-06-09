import './App.css';
import { Backdrop, CssBaseline, ThemeProvider } from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Fetching from "./pages/Fetching";
import Main from "./pages/main/Main";
import {createContext, useState} from "react";
import CreateAccount from "./pages/CreateAccount";
import ForgetPassword from "./pages/ForgetPassword";
import CustomDialog from "./components/CustomDialog";
import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        // green
        primary: {
            // main is for main button
            main: "#00A389",
            // light is for main button background
            light: "#E0F4F1",
            dark: ""
        },
        // also green
        secondary: {
            // 
            main: "#007A67",
            // 
            light: "#D1E7E8",
            dark: ""
        },
        // another green
        third: {
            // 
            main: "#0BA78E",
            // 
            light: "#0BA78E",
            dark: ""
        },
        // grey
        background: {
            // main is for main page background
            main: "#DCDFE6",
            // light is for chat room background
            light: "#EDF0F5",
            dark: ""
        },
    },
});

export const DialogContext = createContext({})

function App() {
    const [isLogin, setIsLogin] = useState(window.sessionStorage.getItem('accessToken') ? true : false);
    const [openDialog, setOpenDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const securityCheck = (component) => {
        if (isLogin) {
            return component
        }
        return <Login />
    }

    return (
        <>
            <DialogContext.Provider value={{ openDialog, setOpenDialog, setIsLoading }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route exact path="/" element={<Login setIsLogin={setIsLogin} />} />
                        <Route exact path="/landing" element={securityCheck(<Landing />)} />
                        <Route exact path="/fetching" element={securityCheck(<Fetching />)} />
                        <Route exact path="/main" element={securityCheck(<Main />)} />
                        <Route exact path="/createaccount" element={securityCheck(<CreateAccount />)} />
                        <Route exact path="/forgetpassword" element={securityCheck(<ForgetPassword />)} />
                    </Routes>
                    <CustomDialog
                        title="Testing dialog title"
                        content="Testing dialog content"
                    />
                    <Backdrop open={isLoading} />
                </ThemeProvider>
            </DialogContext.Provider>
        </>
  );
}

export default App;
