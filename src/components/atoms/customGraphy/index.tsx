import React from 'react';
import Typography from '@mui/material/Typography';

interface CustomTypography {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
    noWrap?: boolean;
    component?: React.ElementType;
    onClick?: () => void;
    sx?: object;
}

export const CustomGraphy: React.FC<CustomTypography> = ({
    children,
    variant = 'h6',
    noWrap = false,
    component = 'a',
    onClick,
    sx,
}) => {
    return (
        <Typography
            variant={variant}
            noWrap={noWrap}
            component={component}
            onClick={onClick}
            sx={sx}
        >
            {children}
        </Typography>
    );
};


