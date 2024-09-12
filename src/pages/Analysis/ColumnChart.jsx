import React from 'react';
import { Column } from '@ant-design/charts';

const ColumnChart = () => {
    const data = [
        { month: 'Jan', sales: 500 },
        { month: 'Feb', sales: 800 },
        { month: 'Mar', sales: 600 },
        { month: 'Apr', sales: 900 },
        { month: 'May', sales: 700 },
    ];

    const props = {
        data,
        xField: 'month',
        yField: 'sales',
    };
    return <Column {...props} />;
};

export default ColumnChart;
