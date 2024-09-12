
import { Area } from '@ant-design/charts';

const AreaChart = () => {
    const data = [
        { date: '2021-01', value: 20 },
        { date: '2021-02', value: 40 },
        { date: '2021-03', value: 30 },
        { date: '2021-04', value: 50 },
        { date: '2021-05', value: 60 },
    ];

    const props = {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'date',
        smooth: true,
    };
    return <Area {...props} />;
};

export default AreaChart;
