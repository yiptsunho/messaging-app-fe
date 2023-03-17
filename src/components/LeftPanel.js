import ChatList from "./ChatList";
import {Container, Grid, TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function LeftPanel () {
    return (
        <React.Fragment>
            <Container>
                <Grid container>
                    <Grid md={9}>
                        Chats
                    </Grid>
                    <Grid md={3} display="flex" justifyContent="flex-end">
                        Icon
                    </Grid>
                </Grid>
                <Grid container>
                    <TextField
                        fullWidth
                        id="filled-search"
                        defaultValue="Search.."
                        type="search"
                        variant="filled"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Container>
            <ChatList />
        </React.Fragment>
    )
};

export default LeftPanel;