import React from "react";
import BMICalculator from "@/components/calculate/BMICalculator";
import CaloriesBurnCalculator from "@/components/calculate/CaloriesBurnCalculator";
import Wrapper from "@/components/Wrapper";

const CalculatorPage: React.FC<{ params: { id: string } }> = ({ params }) => {
    let calculatorComponent;

    switch (params.id) {
        case "bmi":
            calculatorComponent = <BMICalculator />;
            break;
        case "calories":
            calculatorComponent = <CaloriesBurnCalculator />;
            break;
        default:
            calculatorComponent = <div>Invalid Calculator ID</div>;
            break;
    }

    return (
        <Wrapper>
            {calculatorComponent}
        </Wrapper>
    );
};

export default CalculatorPage;
