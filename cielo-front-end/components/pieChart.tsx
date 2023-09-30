'use client'

import { DataContext } from "@/context/data-context";
import { useContext } from "react";
import { Chart } from "react-google-charts";


export const options = {
    title: "TOTAIS",
    colors: ["violet", "blue", "green", "orange"]
};

export function PieChart() {
    const  { trns } = useContext(DataContext)
    
    if (!trns[0]) {
        return <div>Loading...</div>
    }

    const data = [
        ["Task", "valores totais"],
        ["QT", trns[0].summary.totalQuantity],
        ["MT", trns[0].summary.totalAmount],
        ["VLT", trns[0].summary.totalNetAmount],
        ["VMT", trns[0].summary.totalAverageAmount],
    ];
    
    if (!data) {
        return <div>Loading...</div>;
    } 
       
    return (
        <section>
            <div className="p-4 border-gray-300 rounded-lg shadow-md w[300px]">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
        </section>
    );
}