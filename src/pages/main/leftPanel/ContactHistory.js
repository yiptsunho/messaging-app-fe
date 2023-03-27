import React from 'react';
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

function ContactHistory() {
    return (
        <List sx={{ height: "100%" }}>
                <Scrollbars autoHide style={{ height: "100%" }}>
                    {dummyContactHistory.map(contact => {
                        return (
                            <ListItem>
                                <ListItemButton sx={{ borderRadius: "8px" }}>
                                    <ListItemAvatar>
                                        {contact.image ?
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                            :
                                            <DefaultAvatar
                                                name={contact.name}
                                            />
                                        }
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography sx={{ fontWeight: "bold" }}>
                                                {contact.name}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">
                                                {contact.lastMessage}
                                            </Typography>
                                        }
                                    />
                                    <ListItemSecondaryAction sx={{ top: "25%" }}>
                                        <Typography variant='body2'>
                                            {contact.lastUpdateTime}
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