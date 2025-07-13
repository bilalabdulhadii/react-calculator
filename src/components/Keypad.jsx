import { Box, Grid } from "@mui/material";
import KeypadNumberButton from "./KeypadNumberButton";

export default function Keypad({
    handleOperation,
    onClick,
    handleEvaluate,
    clear,
    handleBackspace,
}) {
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <KeypadNumberButton text={"AC"} onClick={() => clear()} />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"←"}
                        onClick={() => handleBackspace()}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"%"}
                        onClick={() => onClick("%")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"/"}
                        onClick={() => onClick("/")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"1"}
                        onClick={() => onClick("1")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"2"}
                        onClick={() => onClick("2")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"3"}
                        onClick={() => onClick("3")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"*"}
                        onClick={() => onClick("*")}
                    />
                </Grid>

                <Grid size={3}>
                    <KeypadNumberButton
                        text={"4"}
                        onClick={() => onClick("4")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"5"}
                        onClick={() => onClick("5")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"6"}
                        onClick={() => onClick("6")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"-"}
                        onClick={() => onClick("-")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"7"}
                        onClick={() => onClick("7")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"8"}
                        onClick={() => onClick("8")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"9"}
                        onClick={() => onClick("9")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"+"}
                        onClick={() => onClick("+")}
                    />
                </Grid>
                <Grid size={3}></Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"0"}
                        onClick={() => onClick("0")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"."}
                        onClick={() => onClick(".")}
                    />
                </Grid>
                <Grid size={3}>
                    <KeypadNumberButton
                        text={"="}
                        onClick={() => handleEvaluate()}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
