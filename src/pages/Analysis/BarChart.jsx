import  { useState } from 'react';
import { Bar } from '@ant-design/charts';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const BarChart = () => {
    const [selectedCategory, setSelectedCategory] = useState('Total');
 
    const data = {
        Total: [
            { category: 'Mon', value: 30, type: 'Total' },
            { category: 'Tues', value: 70, type: 'Total' },
            { category: 'Wed', value: 50, type: 'Total' },
            { category: 'Thur', value: 90, type: 'Total' },
            { category: 'Fri', value: 60, type: 'Total' },
            { category: 'Sat', value: 60, type: 'Total' },
            { category: 'Sun', value: 60, type: 'Total' },
        ],
        Male: [
            { category: 'Mon', value: 20, type: 'Male' },
            { category: 'Tues', value: 50, type: 'Male' },
            { category: 'Wed', value: 40, type: 'Male' },
            { category: 'Thur', value: 70, type: 'Male' },
            { category: 'Fri', value: 45, type: 'Male' },
            { category: 'Sat', value: 40, type: 'Male' },
            { category: 'Sun', value: 50, type: 'Male' },
        ],
        Female: [
            { category: 'Mon', value: 10, type: 'Female' },
            { category: 'Tues', value: 20, type: 'Female' },
            { category: 'Wed', value: 10, type: 'Female' },
            { category: 'Thur', value: 20, type: 'Female' },
            { category: 'Fri', value: 15, type: 'Female' },
            { category: 'Sat', value: 20, type: 'Female' },
            { category: 'Sun', value: 10, type: 'Female' },
        ],
    };
 
    const menu = (
        <Menu>
            <Menu.Item key="Total" onClick={() => setSelectedCategory('Total')}>
                Total
            </Menu.Item>
            <Menu.Item key="Male" onClick={() => setSelectedCategory('Male')}>
                Male
            </Menu.Item>
            <Menu.Item key="Female" onClick={() => setSelectedCategory('Female')}>
                Female
            </Menu.Item>
        </Menu>
    );

    const chartData = data[selectedCategory];
    const colorMap = {
        Total: '#1890ff',
        Male: '#fa8c16',
        Female: '#52c41a',
    };
 
    const color = (type) => {
        return colorMap[selectedCategory];
    };
 
    const props = {
        data: chartData,
        xField: 'category',
        yField: 'value',
        color: color,  
    };

    return (
        <div>
            <Dropdown overlay={menu} className='abosulte top-0 left-[90%] w-[100px]'>
                <Button>
                    {selectedCategory} <DownOutlined />
                </Button>
            </Dropdown>
            <Bar {...props} />
        </div>
    );
};

export default BarChart;
