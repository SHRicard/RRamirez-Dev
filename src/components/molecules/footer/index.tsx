import { CustomGraphy } from '@atoms'
import { useTheme } from "@mui/material";

export const Footer = () => {
    const theme = useTheme();

    return (
        <CustomGraphy variant="h6"
            sx={{
                position: "fixed",
                top: "96%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
                zIndex: 10,
                width: "99%",
                borderRadius: 0.8,
                backgroundColor: theme.palette.primary.main,
            }}>{"2025 RRamirez-Dev."}</CustomGraphy>
    )
}
