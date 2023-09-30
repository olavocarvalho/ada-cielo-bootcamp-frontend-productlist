'use client'

import { DataContext } from '@/context/data-context';
import React, { useContext } from 'react'
import { Chart } from "react-google-charts";

export default function BarChart() {
    const  { trns } = useContext(DataContext)
    
    if (!trns[0]) {
        return <div>Loading...</div>
    }

    const dataBase = {
        title: ["Qty total", "Mont total", "Vl total", "Vm total"],
        values: [trns[0].summary.totalQuantity, trns[0].summary.totalAmount, trns[0].summary.totalNetAmount, trns[0].summary.totalAverageAmount]
    };

    let arrayIndex = Object.keys(dataBase)
    let arrayValues = Object.values(dataBase)
    
    let data: any = []
    
    for (let i = 0; i < arrayValues[0].length; i++) {
        data[i] = arrayValues.map((item) => {
            return item[i]
        })
    }
    
    data.unshift(arrayIndex)
    
    const options = {
        title: 'TOTAIS',
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: { format: 'currency' },
        animation: { duration: 500, easing: 'linear', startup: true }
    }

    return (
        <section>
            <div className="p-4 border-gray-300 rounded-lg shadow-md">
                <Chart
                    chartType="ColumnChart"
                    data={data}
                    width="100%"
                    height="400px"
                    options={options}
                    legendToggle
                />
            </div>
        </section>
    )
}
