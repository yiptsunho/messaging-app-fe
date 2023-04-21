import { Avatar, Box, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
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
            size: "193MB",
            bgColor: "#DFE1F9",
            icon: <FileIcon sx={{ color: "#5A68DF" }} />
        },
        {
            name: "Photos",
            number: 53,
            size: "321MB",
            bgColor: "#F4EACF",
            icon: <PhotoIcon sx={{ color: "#C4B07A" }} />
        },
        {
            name: "Movies",
            number: 3,
            size: "210MB",
            bgColor: "#E4F7F9",
            icon: <VideoIcon sx={{ color: "#6DBEC6" }} />
        },
        {
            name: "Other",
            number: 49,
            size: "194MB",
            bgColor: "#FFE0DA",
            icon: <GifIcon sx={{ color: "#BE6E5F" }} />
        },
        {
            name: "Link",
            number: 49,
            size: "194MB",
            bgColor: "#E0EED5",
            icon: <LinkIcon sx={{ color: "#76A056", rotate: "-45deg" }} />
        },
    ]

    return (
        <React.Fragment>
            <Container sx={{ height: "7.5%", alignItems: "center", display: "flex" }}>
                <Grid container justifyContent={rightPanelCollapsed ? "center" : "space-between"} alignItems="center" columnSpacing={1}>
                    {rightPanelCollapsed ? 
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <IconButton size="medium" onClick={toggleRightPanel}>
                                <Avatar variant="rounded" sx={{ bgcolor: "#f1f3f4", maxHeight: "100%" }}>
                                    <DoubleLeftIcon sx={{ color: "#344445" }} />
                                </Avatar>
                            </IconButton>
                        </Box>
                        :
                        <React.Fragment>
                            <Grid item md={2} display="flex" justifyContent="center">
                                <IconButton size="medium" onClick={toggleRightPanel}>
                                    <Avatar variant="rounded" sx={{ bgcolor: "#f1f3f4" }}>
                                        <DoubleRightIcon sx={{ color: "#344445" }} />
                                    </Avatar>
                                </IconButton>
                            </Grid>
                            <Grid item md={10}>
                                <Typography variant="h6">
                                    Shared Files
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    }
                </Grid>
            </Container>
            <Divider variant="middle" />
            {rightPanelCollapsed ?
                <Container sx={{ height: "92.5%" }}>
                    <Grid container paddingY="0.5rem" justifyContent="center">
                        <Avatar
                            sx={{ width: 60, height: 60 }}
                        >
                            H
                        </Avatar>
                    </Grid>
                    <Grid container md={12} rowSpacing={2} justifyContent="center">
                            <Grid item>
                            Files
                            </Grid>
                        {
                            fileList.map(file => {
                                return (
                                    <Grid item>
                                        <IconButton>
                                            <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: file.bgColor }}>
                                                {file.icon}
                                            </Avatar>
                                        </IconButton>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
                :
                <React.Fragment>
                    <Container disableGutters sx={{ height: "40%", display: "flex", flexWrap: "wrap", alignContent: "space-evenly" }}>
                        <Container sx={{ display: "flex", justifyContent: "center" }}>
                            <Grid container md={8} rowSpacing={2}>
                                <Grid container item justifyContent="center">
                                    <Avatar
                                        sx={{ width: 100, height: 100 }}
                                    >
                                        H
                                    </Avatar>
                                </Grid>
                                <Grid container item justifyContent="center">
                                    <Typography variant="h6">
                                        Jacky
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                        <Container disableGutters sx={{ paddingX: "16px", justifyContent: "center" }}>
                            <Grid container md={12} justifyContent="space-between">
                                <Grid item md={6} display="flex" justifyContent="start">
                                    <Button variant="contained" sx={{ borderRadius: "0.5rem", padding: "1rem", width: "95%" }}>
                                        <Grid container>
                                            <Grid item md={6} alignItems="center" display="flex">
                                                <FolderIcon fontSize="large" />
                                            </Grid>
                                            <Grid item md={6}>
                                                Files
                                                <br />
                                                232
                                            </Grid>
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid item md={6} display="flex" justifyContent="end">
                                    <Button variant="contained" sx={{ borderRadius: "0.5rem", padding: "1rem", width: "95%" }}>
                                        <Grid container>
                                            <Grid item md={6} alignItems="center" display="flex">
                                                <LinkIcon fontSize="large" />
                                            </Grid>
                                            <Grid item md={6}>
                                                Links
                                                <br />
                                                45
                                            </Grid>
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
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
                                    {
                                        fileList.map(file => {
                                            if (file.name !== "Link") {
                                                return (
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
                                                                <Avatar variant="rounded" sx={{ borderRadius: "10px", bgcolor: file.bgColor }}>
                                                                    {file.icon}
                                                                </Avatar>
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={
                                                                    <Typography sx={{ fontWeight: "bold" }}>
                                                                        {file.name}
                                                                    </Typography>
                                                                }
                                                                secondary={
                                                                    <Typography variant="subtitle2">
                                                                        {`${file.number} files, ${file.size}`}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItemButton>
                                                    </ListItem>
                                                )
                                            }
                                        })
                                    }
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