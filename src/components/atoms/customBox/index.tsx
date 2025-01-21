import React from 'react';
import Box from '@mui/material/Box';

interface CustomBox {
    children: React.ReactNode;
    sx?: object;
    [key: string]: unknown;
}

export const CustomBox: React.FC<CustomBox> = ({ children, sx, ...props }) => {
    return (
        <Box
            sx={sx}
            {...props}
        >
            {children}
        </Box>
    );
};


