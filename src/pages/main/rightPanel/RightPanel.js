import ChatList from "../leftPanel/ChatList";
import { Avatar, Container, Divider, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import LinkIcon from '@mui/icons-material/Link';
import MoreIcon from '@mui/icons-material/MoreVert';
import RightIcon from '@mui/icons-material/KeyboardArrowRight';
import FileIcon from '@mui/icons-material/InsertDriveFile';

function RightPanel() {
    const fileList = [
        {
            name: "Documents",
            number: 126,
            size: "193MB"
        },
        {
            name: "Photos",
            number: 53,
            size: "321MB"
        },
        {
            name: "Movies",
            number: 3,
            size: "210MB"
        },
        {
            name: "Other",
            number: 49,
            size: "194MB"
        },
    ]

    return (
        <React.Fragment>
            <Container>
                <Grid container height="5rem">
                    <Grid md={12}>
                        <Typography variant="h6">
                            Shared Files
                        </Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid container paddingY="0.5rem">
                    <Grid container justifyContent="center">
                        <Grid container md={8}>
                            <Grid container justifyContent="center">
                                <Avatar>H</Avatar>
                            </Grid>
                            <Grid container justifyContent="center">
                                Contact name
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid container md={12} justifyContent="space-between">
                            <Grid item justifyContent="center">
                                <Paper sx={{ borderRadius: "0.5rem", padding: "1rem" }}>
                                    <Grid container>
                                        <Grid item md={6} alignItems="center" display="flex">
                                            <FolderIcon />
                                        </Grid>
                                        <Grid item md={6}>
                                            Files
                                            232
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item justifyContent="center">
                                <Paper sx={{ borderRadius: "0.5rem", padding: "1rem" }}>
                                    <Grid container>
                                        <Grid item md={6} alignItems="center" display="flex">
                                            <LinkIcon />
                                        </Grid>
                                        <Grid item md={6}>
                                            Links
                                            45
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Grid container justifyContent="center" paddingX="0.5rem">
                <Grid container md={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item paddingLeft="0.5rem">
                            File type
                        </Grid>
                        <Grid item>
                            <IconButton type="button" sx={{ p: '10px' }}>
                                <MoreIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" paddingLeft="0.5rem">
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Paper>
                                    <FileIcon sx={{ m: '10px' }} />
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Typography>

                                </Typography>
                                Documents
                            </Grid>
                            <Grid item>
                                <RightIcon sx={{ m: '10px' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

export default RightPanel;