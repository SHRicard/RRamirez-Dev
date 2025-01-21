import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AdbIcon from '@mui/icons-material/Adb';

interface CustomIcon extends SvgIconProps {
    type: 'Avatar' | 'PersonAdd' | 'Settings' | 'Logout' | 'AdbIcon';
    sx?: object;
}

export const CustomIcon: React.FC<CustomIcon> = ({ type, sx, ...props }) => {
    let IconComponent: React.ElementType;
    switch (type) {
        case 'Avatar':
            IconComponent = Avatar;
            break;
        case 'PersonAdd':
            IconComponent = PersonAdd;
            break;
        case 'Settings':
            IconComponent = Settings;
            break;
        case 'Logout':
            IconComponent = Logout;
            break;
        case 'AdbIcon':
            IconComponent = AdbIcon;
            break;
        default:
            IconComponent = PersonAdd;
    }

    return (
        <IconComponent
            sx={{
                fontSize: 'inherit',
                color: 'inherit',
                ...sx,
            }}
            {...props}
        />
    );
};

