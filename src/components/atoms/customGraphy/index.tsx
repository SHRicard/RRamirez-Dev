import React from 'react';
import { Typography, useTheme } from "@mui/material";

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
    const theme = useTheme();
    return (
        <Typography
            noWrap={noWrap}
            component={component}
            onClick={onClick}
            sx={{
                fontFamily: theme?.typography?.fontFamily,
                fontWeight: theme?.typography[variant]?.fontWeight,
                fontSize: theme?.typography[variant]?.fontSize,
                ...sx
            }}
        >
            {children}
        </Typography >
    );
};


