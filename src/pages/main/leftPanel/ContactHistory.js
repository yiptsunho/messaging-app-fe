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

// const theme = createTheme({
//     components: {
//         // Name of the component
//         ListItemSecondaryAction: {
//             styleOverrides: {
//                 // Name of the slot
//                 root: {
//                     // Some CSS
//                     color: "white",
//                 },
//             },
//         },
//     },
// });

function ContactHistory() {
    return (
        // <ThemeProvider theme={theme}>
        <Grid>
            <List sx={{ height: "100%" }}>
                <Scrollbars autoHide style={{ height: "100%" }}>
                    {dummyContactHistory.map(contact => {
                        return (
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        borderRadius: "8px"
                                    }}
                                >
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
                                        primary={contact.name}
                                        secondary={contact.lastMessage}
                                    />
                                    <ListItemSecondaryAction
                                        sx={{
                                            top: "25%"
                                        }}
                                    >
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
        </Grid>
    )
};

export default ContactHistory;