import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';


interface CustomIcon extends SvgIconProps {
    type:
    'Home'
    | 'Education'
    | 'Avatar'
    | 'Experience'
    | 'About'
    | 'Download'
    | 'PersonAdd'
    | 'Settings'
    | 'Logout'
    | 'AdbIcon';
    sx?: object;
}

export const CustomIcon: React.FC<CustomIcon> = ({ type, sx, ...props }) => {
    let IconComponent: React.ElementType;
    switch (type) {
        case 'Home':
            IconComponent = HomeIcon;
            break;
        case 'Experience':
            IconComponent = ConstructionIcon;
            break;
        case 'Education':
            IconComponent = AutoStoriesIcon;
            break;
        case 'About':
            IconComponent = PersonPinIcon;
            break;
        case 'Download':
            IconComponent = DownloadForOfflineIcon;
            break;
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

