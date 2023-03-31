import React, { useContext, useEffect } from 'react';
import { Grid, ListItemButton, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import dummyContactHistory from '../../../utils/ContactHistory.json'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import DefaultAvatar from '../../../components/DefaultAvatar';
import Scrollbars from 'react-custom-scrollbars';
import { MainContext } from '../Main';

function ContactHistory() {
    const { groupChats, privateChats, currentRoom, setCurrentRoom, joinRoom } = useContext(MainContext);
    let contactHistory = [];

    useEffect(() => {

    }, [groupChats])

    useEffect(() => {

        // contactHistory = []
        // for (let contact of privateChats) {
        //     contactHistory.push({
        //         id: contact.roomId,
        //         name: contact.receiverName,
        //         lastMessage: contact.messageList[0] ? contact.messageList[0] : "",
        //         lastUpdateTime: contact.messageList[0]?.dateTime ?? "",
        //         image: contact.avatar
        //     })
        // }

    }, [privateChats])

    return (
        <List sx={{ height: "100%" }}>
                <Scrollbars autoHide style={{ height: "100%" }}>
                {/* {contactHistory.map(contact => { */}
                {privateChats.filter(chat => chat.receiverId !== window.sessionStorage.getItem('userId')).map(chat => {
                        return (
                            <ListItem>
                                {/* <ListItemButton onClick={() => fetchMessages(contact.id)} sx={{ borderRadius: "8px" }}> */}
                                <ListItemButton sx={{ borderRadius: "8px" }} onClick={() => {
                                    let userArr = [chat.receiverId, window.sessionStorage.getItem('userId')]
                                    userArr.sort()
                                    joinRoom({
                                        roomId: userArr[0] + userArr[1],
                                        receiverId: chat.receiverId
                                    })
                                    setCurrentRoom(userArr[0] + userArr[1])
                                }}>
                                    <ListItemAvatar>
                                        {chat.image ?
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                            :
                                            <DefaultAvatar
                                                name={chat.receiverName}
                                            />
                                        }
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography sx={{ fontWeight: "bold" }}>
                                                {chat.receiverName}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">
                                                {chat.messageList[0] ? chat.messageList[0].content : ""}
                                            </Typography>
                                        }
                                    />
                                    <ListItemSecondaryAction sx={{ top: "25%" }}>
                                        <Typography variant='body2'>
                                            {chat.messageList[0]?.dateTime ?? ""}
                                        </Typography>
                                    </ListItemSecondaryAction>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </Scrollbars>
        </List>
    )
};

export default ContactHistory;