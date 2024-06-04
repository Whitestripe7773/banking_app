'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

{ /* Here we put the data according to the docs of react-chartjs-2
     and add some example data */ }
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
            label: 'Banks',
            data: [1250, 2500, 3750],
            backgroundColor: [
                '#0747b6',
                '#2265d8',
                '#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }

    { /* Add a doughnut like chart and hide the legend of it */ }
    return (
        <Doughnut
            data={data}
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
    )
}

export default DoughnutChart