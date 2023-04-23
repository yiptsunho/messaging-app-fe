import './App.css';
import { Backdrop, CssBaseline, ThemeProvider } from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Fetching from "./pages/Fetching";
import Main from "./pages/main/Main";
import {createContext, useRef, useState} from "react";
import CreateAccount from "./pages/CreateAccount";
import ForgetPassword from "./pages/ForgetPassword";
import CustomDialog from "./components/CustomDialog";
import { createTheme } from '@mui/material';
import NewMain from './pages/main/NewMain';

const theme = createTheme({
    palette: {
        // green
        primary: {
            // main is for main button
            main: "#00A389",
            // light is for main button background
            light: "#E0F4F1",
            // dark: ""
        },
        // darker green
        secondary: {
            // 
            main: "#007A67",
            // 
            light: "#D1E7E8",
            // dark: ""
        },
        // lighter green
        third: {
            // 
            main: "#E0F4F1",
            //
            // light: "#0BA78E",
            // dark: ""
        },
        // grey
        background: {
            // main is for main page background
            main: "#DCDFE6",
            // light is for chat room background
            light: "#EDF0F5",
            // dark: ""
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1800,
        },
    }
});

export const DialogContext = createContext({})

function App() {
    const [isLogin, setIsLogin] = useState(window.sessionStorage.getItem('accessToken') ? true : false);
    const [openDialog, setOpenDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dialogParam = useRef({
        title: "testing title",
        content: "testing content",
        leftLabel: null,
        leftAction: null,
        rightLabel: null,
        rightAction: null

    })
    const securityCheck = (component) => {
        if (isLogin) {
            return component
        }
        return <Login />
    }

    return (
        <>
            <DialogContext.Provider value={{ openDialog, setOpenDialog, setIsLoading, dialogParam }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route exact path="/" element={<Login setIsLogin={setIsLogin} />} />
                        {/* <Route exact path="/" element={<NewMain />} /> */}
                        <Route exact path="/landing" element={<Landing />} />
                        <Route exact path="/fetching" element={<Fetching />} />
                        <Route exact path="/main" element={<Main />} />
                        <Route exact path="/createaccount" element={<CreateAccount />} />
                        <Route exact path="/forgetpassword" element={<ForgetPassword />} />
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
