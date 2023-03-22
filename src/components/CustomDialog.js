import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import PropTypes from "prop-types";
import { DialogContext } from '../App';

function CustomDialog(props, ref) {
    const { title, content, leftLabel, leftAction, rightLabel, rightAction } = props;
    const { openDialog, setOpenDialog } = useContext(DialogContext)
    const defaultHandleClose = () => {
        setOpenDialog(false);
    };

    return (
        <Dialog
            open={openDialog}
            onClose={rightAction ?? defaultHandleClose}
            PaperProps={{
                style: {
                    borderRadius: 15,
                    padding: '5px 10px'
                }
            }}
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography
                        style={{ whiteSpace: 'pre-wrap' }}>
                        {content}
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {leftLabel &&
                    <Button onClick={leftAction ?? defaultHandleClose}>{leftLabel ?? 'Cancel'}</Button>
                }
                <Button onClick={rightAction ?? defaultHandleClose}>{rightLabel ?? 'OK'}</Button>
            </DialogActions>
        </Dialog >
    );
}

CustomDialog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default CustomDialog;