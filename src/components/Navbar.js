import Logo from "../assets/logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Avatar,
} from "@mui/material";

export default function Navbar() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                position: "sticky",
                top: "0",
                zIndex: "1000",
                paddingTop: "20px",
            }}>
            <AppBar
                position="static"
                sx={{
                    borderRadius: "20px",
                    backgroundColor: (theme) =>
                        theme.palette.background.default,
                }}>
                <Toolbar>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            gap: "10px",
                        }}
                        onClick={() => window.location.reload()}>
                        <Avatar
                            alt="Logo"
                            variant="square"
                            src={Logo}
                            sx={{ width: 32, height: 32 }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                userSelect: "none",
                                marginLeft: "5px",
                                fontFamily: "serif",
                                fontSize: "1.5em",
                                color: (theme) => theme.palette.primary.main,
                            }}>
                            Calculator
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <IconButton
                            size="large"
                            href="https://github.com/bilalabdulhadii/react-calculator"
                            target="_blank"
                            rel="noreferrer">
                            <GitHubIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
