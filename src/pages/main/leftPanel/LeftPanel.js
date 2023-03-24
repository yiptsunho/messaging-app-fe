import ChatList from "./ChatList";
import { Container, Divider, Grid, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function LeftPanel () {
    return (
        <React.Fragment>
            <Container>
                <Grid container height="5rem">
                    <Grid md={9}>
                        <Typography variant="h6">
                            Chats
                        </Typography>
                    </Grid>
                    <Grid md={3} display="flex" justifyContent="flex-end">
                        <Typography variant="h6">
                            Icon
                        </Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid container paddingY="0.5rem">
                    <TextField
                        fullWidth
                        id="filled-search"
                        placeholder="Search.."
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