import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Container, Toolbar, useTheme } from '@mui/material';
import { miniNavigation, navigation } from "@utils"
import { useThemeMode } from "@hooks"
import { CustomGraphy, CustomBox, CustomIcon, CustomDivider } from "@atoms"

export const AccountMenu = () => {
    const { toggleThemeMode } = useThemeMode()
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <Container maxWidth="xl" sx={{
            backgroundColor: theme.palette.primary.main,
        }}>
            <Toolbar disableGutters>
                <CustomBox
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: { xs: '50%', md: 'auto' },
                    }}
                >
                    <CustomIcon type={"AdbIcon"} sx={{ color: theme.palette.primary.dark, width: 32, height: 32, display: { md: 'auto' }, mr: 1 }} />
                    <CustomGraphy
                        variant="h6"

                        onClick={toggleThemeMode}
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        {"<R.Ramirez/>"}
                    </CustomGraphy>
                </CustomBox>

                {/* Menu Items Section */}
                <CustomBox
                    sx={{
                        justifyContent: "center",
                        textAlign: 'center',
                        display: { xs: 'none', sm: 'flex', md: 'flex', },
                        flexGrow: 1,
                    }}
                >
                    {
                        navigation.map((item, index) => {
                            return (
                                <CustomGraphy
                                    variant="h4"
                                    sx={{
                                        minWidth: 100,
                                    }}
                                    key={item.label}
                                >
                                    <Link to={item.path} key={index} style={{ textDecoration: "none", color: theme.palette.primary.contrastText }}>
                                        {item.label}
                                    </Link>
                                </CustomGraphy>
                            );
                        })
                    }
                </CustomBox>
                {/* Avatar Section */}
                <CustomBox
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: { xs: '50%', md: 'auto' },
                    }}
                >
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <CustomIcon type={"Avatar"} sx={{ width: 32, height: 32, }}>R</CustomIcon>
                        </IconButton>
                    </Tooltip>
                </CustomBox>

                {/* Account Menu */}
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {miniNavigation.map((item, index) => (
                        <React.Fragment key={index}>
                            <Link to={item.path} key={index} style={{ textDecoration: "none", color: theme.palette.primary.contrastText }}>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            minWidth: 0, // Ajusta el ancho mínimo para que no sea mayor al ícono
                                            mr: 1, // Margen derecho para separar del texto (opcional)
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    {item.label}
                                </MenuItem>
                            </Link>
                            {index === miniNavigation.length - 2 && <CustomDivider />}
                        </React.Fragment>
                    ))}

                </Menu>
            </Toolbar>
        </Container >
    );
};
