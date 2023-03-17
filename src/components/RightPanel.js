import {Container, Grid} from "@mui/material";
import ChatRoom from "./ChatRoom";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React from "react";

function RightPanel () {
    return (
        <Container>
            {/*<Grid container>*/}
            {/*    This is the RightPanel page*/}
            {/*</Grid>*/}
            <Container>
                <List>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <MoreIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Jacky"
                            secondary="Last message"
                        />
                    </ListItem>
                </List>
            </Container>
            <Grid container>
                <ChatRoom />
            </Grid>
        </Container>
    )
};

export default RightPanel;