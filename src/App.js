import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./theme";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import toolsList from "./toolsList";
import Calculator from "./components/MathCalculator/Calculator";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomeLayout />}>
                        <Route index element={<Calculator />} />
                        {toolsList.map((tool) => (
                            <Route
                                path={tool.path}
                                element={tool.component}
                                key={tool.id}
                            />
                        ))}
                    </Route>
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
