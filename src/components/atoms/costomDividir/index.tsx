import React from 'react';
import { Divider, DividerProps } from '@mui/material';

interface CustomDivider extends DividerProps {
    color?: string;
    thickness?: number;
    sx?: object;
}

export const CustomDivider: React.FC<CustomDivider> = ({ color = 'grey', thickness = 1, sx, ...props }) => {
    return (
        <Divider
            sx={{
                borderColor: color,
                borderBottomWidth: thickness,
                ...sx,
            }}
            {...props}
        />
    );
};


