import { Avatar } from '@mui/material';
import React from 'react';

function DefaultAvatar(props) {
    const { name, ...rest } = props;
    const getAbbreviation = (name) => {
        const part = name.toUpperCase().split(' ')
        if (part.length === 0) {
            return null
        }
        if (part.length === 1) {
            const firstName = part[0]
            return firstName.charAt(0)
        }
        if (part.length > 1) {
            const firstName = part[0]
            const lastName = part[part.length - 1]
            return firstName.charAt(0) + lastName.charAt(0)
        }
    }

    return (
        <Avatar {...rest}>
            {getAbbreviation(name)}
        </Avatar>
    )
};

export default DefaultAvatar;
