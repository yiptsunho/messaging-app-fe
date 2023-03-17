import {Container, Grid, Paper} from "@mui/material";
import React from "react";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

function Main () {
    return (
        <Container maxWidth="xl" height="100vh">
            {/*main chatbox*/}
            <Grid sx={{ mt: 2 }}>
                <Paper elevation={3} sx={{ borderRadius: "4px" }}>
                    <Grid container>
                        <Grid md={3} sx={{ background: "teal", borderTopLeftRadius: "4px"}}>
                            <LeftPanel />
                        </Grid>
                        <Grid md={9} sx={{ background: "bisque", borderTopRightRadius: "4px" }}>
                            <RightPanel />
                        </Grid>
                    </Grid>
                    This is the main page
                </Paper>
            </Grid>
        </Container>
    )
};

export default Main;