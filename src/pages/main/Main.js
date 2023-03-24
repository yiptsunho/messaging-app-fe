import { Container, Grid, Paper } from "@mui/material";
import React, { createContext, useState } from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import MiddlePanel from "./middlePanel/MiddlePanel";
import RightPanel from "./rightPanel/RightPanel";

export const MainContext = createContext({});

function Main() {
    const [RightPanelOpened, setRightPanelOpened] = useState(false)
    const toggleRightPanel = () => {
        if (RightPanelOpened) {
            setRightPanelOpened(false)
        } else {
            setRightPanelOpened(true)
        }
    }

    return (
        <MainContext.Provider value={{ toggleRightPanel }}>
            <Container maxWidth="xl" height="100vh">
                {/*main chatbox*/}
                <Grid sx={{ mt: 2, height: "95vh" }}>
                    <Paper elevation={3} sx={{ borderRadius: "4px", height: "100%" }}>
                        <Grid container sx={{ height: "100%" }}>
                            <Grid md={3} sx={{ background: "teal", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}>
                                <LeftPanel />
                            </Grid>
                            <Grid md={RightPanelOpened ? 6 : 9} sx={{ background: "bisque", borderTopRightRadius: "4px", borderBottomLeftRadius: "4px" }}>
                                <MiddlePanel />
                            </Grid>
                            {RightPanelOpened &&
                                <Grid md={3}>
                                    <RightPanel />
                                </Grid>
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </MainContext.Provider>
    )
};

export default Main;