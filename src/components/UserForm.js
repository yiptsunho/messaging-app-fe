import React, { useState } from 'react';
import { Button, Grid, Paper, Typography, TextField, MenuItem, Box } from '@mui/material';
import * as _ from 'lodash';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Navigate, useNavigate } from 'react-router-dom';

function UserForm(props) {
    const { data, handleSubmit, formTitle } = props;
    const [form, setForm] = useState(data ?? {
        emailAddress: '',
        password: '',
        displayName: ''
    });
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleChange = (fieldName, value) => {
        let newData = _.cloneDeep(form)
        newData[fieldName] = value
        setForm(newData);
    }

    const handleReset = () => {
        setForm({
            emailAddress: '',
            password: '',
            displayName: ''
        });
        setShowPassword(false)
    }

    const handleClickVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleBack = () => {
        navigate("/")
    }


    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Grid container rowSpacing={3}>
                <h3>{formTitle ?? ''}</h3>
                <Grid container rowSpacing={2}>
                    <Grid container item md={12} alignItems='center'>
                        <Grid item md={4}>
                            <Typography>
                                <span style={{ color: "red" }}>
                                    *
                                </span>
                                Email address:
                            </Typography>
                        </Grid>
                        <Grid item md={8}>
                            <TextField
                                fullWidth
                                required
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                name="emailAddress"
                                defaultValue=''
                                helperText={data ?? "Please use a valid email address as you will receive a confirmation email afterwards"}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item md={12} alignItems='center'>
                        <Grid item md={4}>
                            <Typography>
                                <span style={{ color: "red" }}>
                                    *
                                </span>
                                Password:
                            </Typography>
                        </Grid>
                        <Grid item md={8}>
                            <TextField
                                fullWidth
                                required
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                name="password"
                                defaultValue=''
                                // InputProps={{
                                //     endAdornment:
                                //         <InputAdornment position="end" >
                                //             <IconButton
                                //                 aria-label="toggle password visibility"
                                //                 onClick={handleClickVisibility}
                                //                 edge="end"
                                //             >
                                //                 {showPassword ? <VisibilityOff /> : <Visibility />}
                                //             </IconButton>
                                //         </InputAdornment>
                                // }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item md={12} alignItems='center'>
                        <Grid item md={4}>
                            <Typography>
                                <span style={{ color: "red" }}>
                                    *
                                </span>
                                Display Name:
                            </Typography>
                        </Grid>
                        <Grid item md={8}>
                            <TextField
                                fullWidth
                                required
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                name="displayName"
                                defaultValue=''
                                helperText={data ?? "This will be shown as your username"}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item md={12} alignItems='center'>
                        <Grid item md={4}>
                            <Typography>
                                Avatar:
                            </Typography>
                        </Grid>
                        <Grid item md={8}>
                            <TextField
                                fullWidth
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                name="avatar"
                                defaultValue=''
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item rowSpacing={1} columnSpacing={2} justifyContent='end'>
                    <Grid item md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                    </Grid>
                    <Grid item md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </Grid>
                    <Grid item md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => handleSubmit(form)}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}

export default UserForm;
