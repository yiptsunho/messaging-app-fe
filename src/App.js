import './App.css';
import {Backdrop, CssBaseline} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Fetching from "./pages/Fetching";
import Main from "./pages/Main";
import {createContext, useState} from "react";
import CreateAccount from "./pages/CreateAccount";
import ForgetPassword from "./pages/ForgetPassword";
import CustomDialog from "./components/CustomDialog";

export const DialogContext = createContext({})

function App() {
    const [isLogin, setIsLogin] = useState(false);
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
              <CssBaseline />
              <Routes>
                  <Route exact path="/" element={<Login setIsLogin={setIsLogin}/>} />
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
              <Backdrop open={isLoading}/>
          </DialogContext.Provider>
      </>
      // {/*<header className="App-header">*/}
      // {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      // {/*  <p>*/}
      // {/*    Edit <code>src/App.js</code> and save to reload.*/}
      // {/*  </p>*/}
      // {/*  <a*/}
      // {/*    className="App-link"*/}
      // {/*    href="https://reactjs.org"*/}
      // {/*    target="_blank"*/}
      // {/*    rel="noopener noreferrer"*/}
      // {/*  >*/}
      // {/*    Learn React*/}
      // {/*  </a>*/}
      // {/*</header>*/}
  );
}

export default App;
