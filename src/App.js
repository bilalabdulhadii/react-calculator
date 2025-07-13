import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./theme";
import { CssBaseline, Box, Container } from "@mui/material";
import { useState } from "react";
import { useToast } from "./context/ToastContext";
import DisplayPanel from "./components/DisplayPanel";
import Keypad from "./components/Keypad";
import { evaluate } from "mathjs";

function App() {
    const { showTimedToast } = useToast();
    const [calc, setCalc] = useState({
        first: "",
        second: "",
        opt: "",
        result: "",
    });

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleEvaluate = () => {
        try {
            const result = evaluate(input);
            setResult(result);
        } catch {
            setResult("Error");
        }
    };

    const handleBackspace = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleOperation = (opt) => {
        if (!calc.first || !calc.second) {
            showTimedToast("Please fill both numbers !", "error");
            return;
        }
        setCalc((prev) => ({ ...prev, opt }));

        const firstNum = parseFloat(calc.first);
        const secondNum = parseFloat(calc.second);
        if (isNaN(firstNum) || isNaN(secondNum)) {
            showTimedToast("Invalid number input!", "error");
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
                        ? showTimedToast("Cannot divide by zero!", "error")
                        : firstNum / secondNum;
                break;
            default:
                return;
        }

        if (result !== null) {
            setCalc((prev) => ({ ...prev, result }));
        }
    };

    const handleNumber = (num) => {
        setInput((prev) => prev + num);
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
                        <DisplayPanel result={input} />
                        <DisplayPanel result={result} />
                        <Keypad
                            handleOperation={handleOperation}
                            onClick={handleNumber}
                            handleEvaluate={handleEvaluate}
                            clear={() => {
                                setResult("");
                                setInput("");
                            }}
                            handleBackspace={handleBackspace}
                        />
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
