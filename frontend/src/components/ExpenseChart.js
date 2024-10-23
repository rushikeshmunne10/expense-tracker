import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register all necessary components

const ExpenseChart = ({ expenses }) => {
    const chartRef = useRef(null); // Reference to the chart component

    // Calculate spending per category
    const categories = {};
    expenses.forEach(expense => {
        categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
    });

    const data = {
        labels: Object.keys(categories),
        datasets: [{
            data: Object.values(categories),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#cd8df0'
            ],
            hoverOffset: 4,
        }],
    };

    useEffect(() => {
        // Cleanup the chart when the component unmounts
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy(); // Destroy chart instance
            }
        };
    }, []);

    return (

        <Pie data={data} ref={chartRef} className='mb-5'/>

    );
};

export default ExpenseChart;
