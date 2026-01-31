import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./theme";
import "./App.css";
import Calculator from "./components/Calculator";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <div
                className="App"
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "space-between",
                }}>
                <Container maxWidth="md">
                    <Navbar />
                    <Calculator />
                </Container>

                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
