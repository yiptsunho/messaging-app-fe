import ContactHistory from "./ContactHistory";
import { Container, Divider, FilledInput, Grid, IconButton, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import { MainContext } from "../Main";

function LeftPanel() {

    useEffect(() => {
        // call api to fetch contact history
        // setContactHistory(responseData.data)
    }, [])

    return (
        <React.Fragment>
            <Container sx={{ height: "7.5%", display: "flex", alignItems: "center" }}>
                <Grid container>
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
            </Container>
                <Divider variant="middle" />
            <Grid container paddingX="16px" height="10%">
                <Grid container paddingY="0.5rem" height="100%">
                    <FilledInput
                        fullWidth
                        id="filled-search"
                        placeholder="Search"
                        type="search"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        inputProps={{
                            sx: {
                                paddingY: "16px",
                                paddingLeft: "16px"
                            }
                        }}
                        disableUnderline
                        sx={{
                            borderRadius: "12px",
                            height: "100%"
                        }}
                    />
                </Grid>
            </Grid>
            <Container disableGutters sx={{ paddingLeft: "16px", paddingRight: "8px", height: "7.5%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Grid md={4}>
                    <Typography sx={{ fontWeight: "bold" }}>
                        Last Chats
                    </Typography>
                </Grid>
                <Grid>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <MoreIcon />
                    </IconButton>
                </Grid>
            </Container>
            <Grid height="75%">
                <Divider />
                <ContactHistory />
            </Grid>
        </React.Fragment>
    )
};

export default LeftPanel;