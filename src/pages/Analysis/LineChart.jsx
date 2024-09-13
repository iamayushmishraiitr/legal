import { Line } from '@ant-design/charts';

const LineChart = () => { 
    const data = [
      
        { month: 'Jan', value: 20, type: 'Male' },
        { month: 'Feb', value: 22, type: 'Male' },
        { month: 'Mar', value: 18, type: 'Male' },
        { month: 'Apr', value: 25, type: 'Male' },
        { month: 'May', value: 30, type: 'Male' },
        { month: 'Jun', value: 32, type: 'Male' },
        { month: 'Jul', value: 28, type: 'Male' },
        { month: 'Aug', value: 35, type: 'Male' },
        { month: 'Sep', value: 37, type: 'Male' },
        { month: 'Oct', value: 34, type: 'Male' },
        { month: 'Nov', value: 40, type: 'Male' },
        { month: 'Dec', value: 42, type: 'Male' },

        { month: 'Jan', value: 10, type: 'Female' },
        { month: 'Feb', value: 14, type: 'Female' },
        { month: 'Mar', value: 12, type: 'Female' },
        { month: 'Apr', value: 15, type: 'Female' },
        { month: 'May', value: 18, type: 'Female' },
        { month: 'Jun', value: 20, type: 'Female' },
        { month: 'Jul', value: 22, type: 'Female' },
        { month: 'Aug', value: 25, type: 'Female' },
        { month: 'Sep', value: 28, type: 'Female' },
        { month: 'Oct', value: 24, type: 'Female' },
        { month: 'Nov', value: 30, type: 'Female' },
        { month: 'Dec', value: 32, type: 'Female' },
    ];
 
    const colorMap = {
        Total: '#1890ff',    
        Male: '#fa8c16',     
        Female: '#52c41a',  
    };
 
    const props = {
        data,
        xField: 'month',
        yField: 'value',
        seriesField: 'type', 
        color: (type) => colorMap[type],  
        lineStyle: {
            lineWidth: 2,
        },
        smooth: true,  
    };

    return <Line {...props} />;
};

export default LineChart;
