import { Button } from "@mui/material";

export default function KeypadNumberButton({text, onClick}) {
    return (
        <Button
            className="calcBtn"
            variant="contained"
            sx={{ width: "100%" }}
            onClick={onClick}
        >
            <span class="buttonSpan">{text}</span>
        </Button>
    );
}
