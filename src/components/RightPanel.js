import {Container, Grid} from "@mui/material";
import ChatRoom from "./ChatRoom";

function RightPanel () {
    return (
        <Container>
            <Grid container>
                This is the RightPanel page
            </Grid>
            <Grid container>
                This is the toolbar
            </Grid>
            <Grid container>
                <ChatRoom />
            </Grid>
        </Container>
    )
};

export default RightPanel;