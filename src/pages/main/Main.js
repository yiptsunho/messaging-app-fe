import { Container, Grid, Paper } from "@mui/material";
import React, { createContext, useState } from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import MiddlePanel from "./middlePanel/MiddlePanel";
import RightPanel from "./rightPanel/RightPanel";

export const MainContext = createContext({});

function Main() {
    const [rightPanelCollapsed, setRightPanelCollapsed] = useState(true)
    const toggleRightPanel = () => {
        setRightPanelCollapsed(!rightPanelCollapsed)
    }
    const mainBorderRadius = "20px"

    return (
        <MainContext.Provider value={{ rightPanelCollapsed, toggleRightPanel }}>
            <Container maxWidth="xl" height="100vh">
                <Grid sx={{ mt: 2, height: "95vh" }}>
                    <Paper elevation={3} sx={{ borderRadius: mainBorderRadius, height: "100%" }}>
                        <Grid container sx={{ height: "100%", paddingY: "1rem" }}>
                            <Grid container sx={{ height: "100%" }}>
                                <Grid md={3} sx={{ borderTopLeftRadius: mainBorderRadius, borderBottomLeftRadius: mainBorderRadius }}>
                                    <LeftPanel />
                                </Grid>
                                <Grid md={rightPanelCollapsed ? 8 : 6} sx={{ borderTopRightRadius: mainBorderRadius, borderBottomLeftRadius: mainBorderRadius }}>
                                    <MiddlePanel />
                                </Grid>
                                <Grid md={rightPanelCollapsed ? 1 : 3}>
                                    <RightPanel />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </MainContext.Provider>
    )
};

export default Main;