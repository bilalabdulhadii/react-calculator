import { Button } from "@mui/material";

export default function KeypadOptButton({text, handleOperation, opt}) {
    return (
        <Button
            className="calcBtn"
            variant="contained"
            sx={{ width: "100%" }}
            onClick={() => handleOperation(opt)}
        >
            <span class="buttonSpan">{text}</span>
        </Button>
    );
}
