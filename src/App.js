import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./theme";
import {
    CssBaseline,
    Box,
    Container,
    Paper,
    TextField,
    Typography,
    Grid,
    Button,
} from "@mui/material";
import { useState } from "react";
import Toast from "./components/Toast";

function App() {
    const [calc, setCalc] = useState({
        first: "",
        second: "",
        opt: "",
        result: "",
    });

    const [toast, setToast] = useState({
        show: false,
        text: "",
        type: "error",
    });

    const showToast = (text, type = "error", duration = 5000) => {
        setToast({ show: true, text, type });

        setTimeout(() => {
            setToast((prev) => ({ ...prev, show: false }));
        }, duration);
    };

    const handleOperation = (opt) => {
        if (!calc.first || !calc.second) {
            showToast("Please fill both numbers !", "error");
            return;
        }
        
        setCalc((prev) => ({ ...prev, opt }));

        const firstNum = parseFloat(calc.first);
        const secondNum = parseFloat(calc.second);

        if (isNaN(firstNum) || isNaN(secondNum)) {
            showToast("Invalid number input!", "error");
            return;
        }

        let result = 0;

        switch (opt) {
            case "add":
                result = firstNum + secondNum;
                break;
            case "sub":
                result = firstNum - secondNum;
                break;
            case "mul":
                result = firstNum * secondNum;
                break;
            case "div":
                result =
                    secondNum === 0
                        ? showToast("Cannot divide by zero!", "error")
                        : firstNum / secondNum;
                break;
            default:
                return;
        }

        if (result !== null) {
            setCalc((prev) => ({ ...prev, result }));
        }
    };

    return (
        <ThemeProvider theme={lightTheme}>
            <div className="App">
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box
                        sx={{
                            bgcolor: "#e5e6e7",
                            padding: "20px",
                            width: "100%",
                            borderRadius: "12px",
                            boxShadow: "5px 5px 0px #a8aaac",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                gap: "10px",
                                justifyContent: "center",
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-basic"
                                label="First Number"
                                variant="outlined"
                                value={calc.first}
                                onChange={(e) =>
                                    setCalc({
                                        ...calc,
                                        first: e.target.value,
                                    })
                                }
                                sx={{ width: "50%" }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Second Number"
                                variant="outlined"
                                value={calc.second}
                                onChange={(e) =>
                                    setCalc({
                                        ...calc,
                                        second: e.target.value,
                                    })
                                }
                                sx={{ width: "50%" }}
                            />
                        </Box>
                        <Paper
                            variant="outlined"
                            sx={{ padding: "10px", border: "1px solid #aaa", minHeight: "75px" }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ textAlign: "center" }}
                            >
                                {calc.result}
                            </Typography>
                        </Paper>
                        <Box sx={{ width: "100%" }}>
                            <Grid container spacing={2}>
                                <Grid size={6}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: "100%" }}
                                        onClick={() => handleOperation("add")}
                                    >
                                        +
                                    </Button>
                                </Grid>
                                <Grid size={6}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: "100%" }}
                                        onClick={() => handleOperation("sub")}
                                    >
                                        -
                                    </Button>
                                </Grid>
                                <Grid size={6}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: "100%" }}
                                        onClick={() => handleOperation("mul")}
                                    >
                                        *
                                    </Button>
                                </Grid>
                                <Grid size={6}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: "100%" }}
                                        onClick={() => handleOperation("div")}
                                    >
                                        /
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
            {toast.show && (
                <Toast
                    text={toast.text}
                    type={toast.type}
                    onClose={() =>
                        setToast((prev) => ({ ...prev, show: false }))
                    }
                />
            )}
        </ThemeProvider>
    );
}

export default App;
