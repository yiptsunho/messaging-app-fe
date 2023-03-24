import { Container, Divider, Grid } from "@mui/material";
import ChatRoom from "./ChatRoom";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React, { createContext, useContext, useState } from "react"
import InputBar from "./InputBar";
import CallIcon from '@mui/icons-material/CallRounded';
import _ from 'lodash';
import RightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MainContext } from "../Main";

export const MiddlePanelContext = createContext({})

function MiddlePanel() {
    const [messages, setMessages] = useState([
        {
            "id": 1,
            "type": "text",
            "content": "This is the 1st message",
            "time": "",
            "from": "some guy"
        },
        {
            "id": 2,
            "type": "text",
            "content": "This is the 2nd message",
            "time": "",
            "from": "some guy"
        },
        {
            "id": 3,
            "type": "text",
            "content": "This is the 3rd message",
            "time": "",
            "from": "yiptsunho"
        }
    ])

    const sendMessage = (newMessage) => {
        let newMessageList = _.cloneDeep(messages)
        newMessageList.push(newMessage)
        setMessages(newMessageList)
    }
    const { toggleRightPanel } = useContext(MainContext)

    return (
        <MiddlePanelContext.Provider value={{ messages, sendMessage }}>
            <Grid container direction="column" justifyContent="space-between" height="100%">
                <Grid container item height="5rem">
                    <Container>
                        <List>
                            <ListItem
                                secondaryAction={
                                    <Grid>
                                        <IconButton edge="end" aria-label="delete">
                                            <CallIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={toggleRightPanel}>
                                            <RightIcon />
                                        </IconButton>
                                    </Grid>
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
                </Grid>
                <Divider variant="middle" />
                <Grid container item sx={{ marginBottom: "auto" }}>
                    <ChatRoom />
                </Grid>
                <Grid container item>
                    <InputBar />
                </Grid>
            </Grid>
        </MiddlePanelContext.Provider>
    )
};

export default MiddlePanel;