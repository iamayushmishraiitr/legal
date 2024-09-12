import React from 'react';
import { Pie } from '@ant-design/charts';

const PieChart = () => {
    const data = [
        { type: 'Below 21 Years', value: 30 },
        { type: '21-25 Years', value: 70 },
        { type: '25+ Years', value: 50 },
    ];

    const props = {
        data,
        angleField: 'value',
        colorField: 'type',
    };
    return (
        <div className='w-full'>
            <Pie {...props} />
        </div>
    );
};

export default PieChart;
