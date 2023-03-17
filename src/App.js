import './App.css';
import {CssBaseline} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Fetching from "./pages/Fetching";
import Main from "./pages/Main";
import {createContext, useState} from "react";
import CreateAccount from "./pages/CreateAccount";
import ForgetPassword from "./pages/ForgetPassword";
import * as PropTypes from "prop-types";

const DialogContext = createContext({})

function CustomDialog(props) {
    return null;
}

CustomDialog.propTypes = {
    setOpen: PropTypes.func,
    open: PropTypes.bool
};

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    return (
      <>
          <DialogContext.Provider value={{ openDialog, setOpenDialog }}>
              <CssBaseline />
              <Routes>
                  <Route exact path="/" element={<Login setIsLogin={setIsLogin}/>} />
                  <Route exact path="/landing" element={<Landing />} />
                  <Route exact path="/fetching" element={<Fetching />} />
                  <Route exact path="/main" element={<Main />} />
                  <Route exact path="/createaccount" element={<CreateAccount />} />
                  <Route exact path="/forgetpassword" element={<ForgetPassword />} />
              </Routes>
              <CustomDialog
                  open={openDialog}
                  setOpen={setOpenDialog}
              />
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
