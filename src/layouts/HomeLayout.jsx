import { useState } from "react";
import {
    Box,
    Container,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    ListSubheader,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import CalculateIcon from "@mui/icons-material/Calculate";


export default function HomeLayout({ children }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        )
            return;
        setOpen(open);
    };

    const drawerContent = (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{
                width: { xs: "100vw", sm: 300, md: 300 },
                maxWidth: "100%",
                p: 3,
                boxSizing: "border-box",
            }}
        >
            <List
                subheader={
                    <ListSubheader
                        sx={{
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            bgcolor: "transparent",
                            mb: 1,
                        }}
                    >
                        Tools
                    </ListSubheader>
                }
            >
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            borderRadius: 1,
                            px: 1.5,
                            "&:hover": {
                                bgcolor: "primary.light",
                                color: "primary.contrastText",
                            },
                        }}
                    >
                        <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                            <CalculateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Calculator" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    minHeight: "100vh",
                }}
            >
                <Container maxWidth="sm" sx={{marginTop:"200px"}}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                Calculator
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {children}
                </Container>
            </Box>

            <SwipeableDrawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {drawerContent}
            </SwipeableDrawer>
        </>
    );
}
