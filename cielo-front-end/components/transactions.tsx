
'use client'

import Card from './card';
import { useContext } from 'react';
import { DataContext } from '@/context/data-context';
import Loading from './loading';

export default function Transactions() {
    const { trns } = useContext(DataContext)

    if (!trns[0]) {
        return (
            <>
                <div>Loading...</div>
            </>
            
        )
    }
    
    const cardsData = [
        { title: 'QUANTIDADE TOTAL', description: `${trns[0].summary.totalQuantity}`, titleColor: "text-violet-400" },
        { title: 'MONTANTE TOTAL', description: `${trns[0].summary.totalAmount}`, titleColor: "text-blue-400" },
        { title: 'VALOR LIQUIDO TOTAL', description: `${trns[0].summary.totalNetAmount}`, titleColor: "text-green-400" },
        { title: 'VALOR MEDIO TOTAL', description: `${trns[0].summary.totalAverageAmount}`, titleColor: "text-orange-400" },
    ];

    const content = (
        <section>
            <div className="flex flex-wrap -mx-4">
                {cardsData.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <Card title={card.title} description={card.description} titleColor={card.titleColor} />
                    </div>
                ))}
            </div>
            <br />
        </section>
    )

    return content
}