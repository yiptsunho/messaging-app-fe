import React from 'react';
import {Grid, Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}
function ChatList () {
    return (
        <Grid>
            <List>
                {generate(
                    <ListItem
                        secondaryAction={"Time"}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Last message"
                        />
                    </ListItem>,
                )}
            </List>
        </Grid>
    )
};

export default ChatList;