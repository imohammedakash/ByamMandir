"use client"
import React, { useState } from "react";
import Input from "@/components/InputControl/Input";
import { BiChevronDown } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const BMICalculator: React.FC = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [selected, setSelected] = useState("KG / M");
    const [showSelected, setShowSelected] = useState(false);
    const [showBMI, setShowBMI] = useState(false);
    const [bmiValue, setBmiValue] = useState(0);
    const [category, setCategory] = useState("");
    const [categoryColor, setCategoryColor] = useState("");

    const catObj = {
        underWeight: {
            type: "UnderWeight",
            color: '#FF0000'
        },
        normalWeight: {
            type: "Normal Weight",
            color: 'green'
        },
        overWeight: {
            type: "Over Weight",
            color: 'yellow'
        },
        obesity: {
            type: "Obesity",
            color: '#FF0000'
        }
    };

    const handleCalculate = () => {
        if (height === '' || weight === '') {
            return alert('Please Enter a valid height and weight');
        }

        let bmi: number = parseFloat(weight) / Math.pow(parseFloat(height), 2);
        bmi = Number(bmi.toFixed(1));
        setBmiValue(bmi);

        if (bmi < 18.5) {
            setCategory(catObj.underWeight.type);
            setCategoryColor(catObj.underWeight.color);
            setShowBMI(true);
            return;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setCategory(catObj.normalWeight.type);
            setCategoryColor(catObj.normalWeight.color);
            setShowBMI(true);
            return;
        } else if (bmi >= 25 && bmi <= 29.9) {
            setCategory(catObj.overWeight.type);
            setCategoryColor(catObj.overWeight.color);
            setShowBMI(true);
            return;
        } else {
            setCategory(catObj.obesity.type);
            setCategoryColor(catObj.obesity.color);
            setShowBMI(true);
        }
    };

    const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        setSelected(e?.currentTarget?.innerText);
    };

    return (
        <div className="bg-[#060d20] h-[90vh] text-white w-full flex items-center justify-center p-2">
            <div className="w-[30rem] card p-5 flex flex-col gap-8">
                <h1 className="text-4xl text-center m-0 font-semibold ">
                    BMI Calculator
                </h1>
                <div
                    className="flex items-center justify-between card w-[10rem] py-2 px-3 cursor-pointer relative"
                    onClick={(e) => setShowSelected(!showSelected)}
                >
                    <span className="whitespace-nowrap">
                        {selected === "" ? "Select" : selected}
                    </span>
                    <BiChevronDown className="text-xl" />
                    {showSelected && (
                        <div className="absolute translate-y-1/2 -bottom-9 box-border left-0 bg-white shadow-xl rounded-b-lg">
                            <div className="flex flex-col gap-2 w-[7.9rem] p-2 text-gray-800">
                                <div onClick={handleSelect}>KG / M</div>
                                <div onClick={handleSelect}>Feet / Pounds</div>
                            </div>
                        </div>
                    )}
                </div>
                <Input
                    label={`weight in ${selected === "KG / M" ? "KG" : "Pound"}`}
                    onChange={(e: any) => setWeight(e.target.value)}
                    value={weight}
                    type="number"
                />
                <Input
                    label={`height in ${selected === "KG / M" ? "M" : "Feet"}`}
                    onChange={(e: any) => setHeight(e.target.value)}
                    value={height}
                    type="number"
                />
                <div className="flex items-center justify-start mb-3">
                    <button
                        className="border slider border-white py-2 px-12 flex items-center justify-center w-[8rem] text-center rounded transition-all tracking-wide hover:tracking-widest relative"
                        onClick={handleCalculate}
                    >
                        Calculate
                        <i className="absolute inset-0 block before:absolute before:content-[''] before:border-2 before:border-white before:w-[20px] before:h-[8px] before:top-[-3.5px] before:bg-[#060d20] before:left-[80%] before:transition-all after:absolute after:content-[''] after:border-2 after:border-white after:w-[20px] after:h-[8px] after:bottom-[-3.5px] after:bg-[#060d20] after:right-[80%] after:transition-all"></i>
                    </button>
                </div>
            </div>
            {showBMI && (
                <div
                    className={`z-[100] fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-[#000000bb] `}
                >
                    <div className="w-72 h-60 rounded card">
                        <div className="flex items-center justify-end p-3">
                            <RxCross2
                                className="text-xl cursor-pointer"
                                onClick={() => {
                                    setShowBMI(false);
                                    setHeight("");
                                    setWeight("");
                                }}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <span>
                                Your{" "}
                                <span className="text-2xl mx-1 tracking-wide font-semibold text-[#33a3ff]">
                                    BMI
                                </span>{" "}
                                is{" "}
                            </span>
                            <span className={`text-3xl font-bold tracking-wide`}>
                                {bmiValue ? bmiValue : ''}
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 outline-none">
                            <span className={`text-3xl font-bold text-[${categoryColor}]`}>{category}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BMICalculator;
