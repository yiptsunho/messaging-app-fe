import ContactHistory from "./ContactHistory";
import { Container, Divider, FilledInput, Grid, IconButton, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function LeftPanel() {
    return (
        <React.Fragment>
            <Container sx={{ height: "7.5%" }}>
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
            {/* <Container sx={{ height: "92.5%" }}> */}
            <Grid container paddingX="16px">
                <Grid container paddingY="0.5rem">
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
                            borderRadius: "12px"
                        }}
                    />
                </Grid>
            </Grid>
            <ContactHistory />
            {/* </Container> */}
        </React.Fragment>
    )
};

export default LeftPanel;