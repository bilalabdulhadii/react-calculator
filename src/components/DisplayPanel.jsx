import {
    Paper,
    Typography
} from "@mui/material";

export default function DisplayPanel({ result }) {
    return (
        <Paper
            variant="outlined"
            sx={{
                padding: "10px",
                border: "1px solid #aaa",
                minHeight: "75px",
            }}
        >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                {result}
            </Typography>
        </Paper>
    );
}
