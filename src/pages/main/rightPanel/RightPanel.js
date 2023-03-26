import { Avatar, Box, Container, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import React, { useContext } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import LinkIcon from '@mui/icons-material/Link';
import MoreIcon from '@mui/icons-material/MoreVert';
import SingleRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import PhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoIcon from '@mui/icons-material/Movie';
import GifIcon from '@mui/icons-material/GifBox';
import { MainContext } from "../Main";
import DoubleLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DoubleRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function RightPanel() {
    const { rightPanelCollapsed, toggleRightPanel } = useContext(MainContext)
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
            {rightPanelCollapsed ?
                <React.Fragment>
                    <Container sx={{ height: "7.5%" }}>
                        <Grid container justifyContent="center">
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <IconButton size="medium" onClick={toggleRightPanel}>
                                    <Avatar sx={{ bgcolor: "#f1f3f4" }}>
                                        <DoubleLeftIcon sx={{ color: "#344445" }} />
                                    </Avatar>
                                </IconButton>
                            </Box>
                        </Grid>
                    </Container>
                    <Divider variant="middle" />
                    <Container sx={{ height: "92.5%" }}>
                        <Grid container paddingY="0.5rem">
                            <Grid container justifyContent="center">
                                <Grid container md={8}>
                                    <Grid container justifyContent="center">
                                        <Avatar>H</Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container md={12} rowSpacing={2} justifyContent="center">
                            <Grid item>
                                Files
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: "#DFE1F9" }}>
                                        <FileIcon sx={{ color: "#5A68DF" }} />
                                    </Avatar>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: "#F4EACF" }}>
                                        <PhotoIcon sx={{ color: "#C4B07A" }} />
                                    </Avatar>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: "#E4F7F9" }}>
                                        <VideoIcon sx={{ color: "#6DBEC6" }} />
                                    </Avatar>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: "#FFE0DA" }}>
                                        <GifIcon sx={{ color: "#BE6E5F" }} />
                                    </Avatar>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: "#E0EED5" }}>
                                        <LinkIcon sx={{ color: "#76A056", rotate: "-45deg" }} />
                                    </Avatar>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Container>
                    <Grid container justifyContent="center" paddingX="0.5rem">

                    </Grid>
                </React.Fragment>
                :
                <React.Fragment>
                    <Container>
                        <Grid container height="5rem" justifyContent="space-between" alignItems="center" columnSpacing={1}>
                            <Grid item md={2} display="flex" justifyContent="center">
                                <IconButton size="medium" onClick={toggleRightPanel}>
                                    <Avatar sx={{ bgcolor: "#f1f3f4" }}>
                                        <DoubleRightIcon sx={{ color: "#344445" }} />
                                    </Avatar>
                                </IconButton>
                            </Grid>
                            <Grid item md={10}>
                                <Typography variant="h6">
                                    Shared Files
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Divider variant="middle" />
                    <Container>
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
                            <Grid container alignItems="center">
                                <List disablePadding sx={{ width: "100%", paddingLeft: "0.5rem" }}>
                                    <ListItem
                                        disablePadding
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                <SingleRightIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemButton sx={{ paddingX: "0px", borderRadius: "8px" }}>
                                            <ListItemIcon>
                                                <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: "#DFE1F9" }}>
                                                    <FileIcon sx={{ color: "#5A68DF" }} />
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Documents"
                                                secondary="126 files, 193MB"
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem
                                        disablePadding
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                <SingleRightIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemButton sx={{ paddingX: "0px", borderRadius: "8px" }}>
                                            <ListItemIcon>
                                                <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: "#F4EACF" }}>
                                                    <PhotoIcon sx={{ color: "#C4B07A" }} />
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Photos"
                                                secondary="53 files, 321MB"
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem
                                        disablePadding
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                <SingleRightIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemButton sx={{ paddingX: "0px", borderRadius: "8px" }}>
                                            <ListItemIcon>
                                                <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: "#E4F7F9" }}>
                                                    <VideoIcon sx={{ color: "#6DBEC6" }} />
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Videos"
                                                secondary="3 files, 210MB"
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem
                                        disablePadding
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                <SingleRightIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemButton sx={{ paddingX: "0px", borderRadius: "8px" }}>
                                            <ListItemIcon>
                                                <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: "#FFE0DA" }}>
                                                    <GifIcon sx={{ color: "#BE6E5F" }} />
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Other"
                                                secondary="49 files, 194MB"
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </React.Fragment>
            }
        </React.Fragment>
    )
};

export default RightPanel;