import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./theme";
import { Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import HomeLayout from "./layouts/HomeLayout";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomeLayout>
                                <Calculator />
                            </HomeLayout>
                        }
                    />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
