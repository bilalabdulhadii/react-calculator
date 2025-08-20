import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./theme";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <div className="App">
                <Calculator />
            </div>
        </ThemeProvider>
    );
}

export default App;
