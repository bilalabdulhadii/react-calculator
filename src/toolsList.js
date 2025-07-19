import CalculateIcon from "@mui/icons-material/Calculate";
import Calculator from "./components/MathCalculator/Calculator";
import AgeCalculator from "./components/AgeCalculator/AgeCalculator";

const toolsList = [
    {
        id: "calculator",
        title: "Math Calculator",
        path: "calculator",
        component: <Calculator />,
        icon: <CalculateIcon />,
        description: "",
        isActive: true,
    },
    {
        id: "age-calculator",
        title: "Age Calculator",
        path: "age-calculator",
        component: <AgeCalculator />,
        icon: <CalculateIcon />,
        description: "",
        isActive: true,
    },
];

export default toolsList;
