import { Card, DatePicker } from 'antd';
import  { useState } from 'react';
const { RangePicker } = DatePicker;
import dayjs from 'dayjs';

const Statistics = ({ dataName, heading }) => {
    const [dateRange, setDateRange] = useState([
        dayjs(new Date().setHours(0, 0, 0)),
        dayjs(new Date().setHours(23, 59, 59)),
    ]);

    const dateFilter = async (date, dateString) => {
        const localDate = [
            dayjs(new Date(dateString[0]).setHours(0, 0, 0)),
            dayjs(new Date(dateString[1]).setHours(23, 59, 59)),
        ];
        setDateRange(localDate);
    };

    const color = ['#2C89E5', '#3ebb8e', '#722ED1', '#EB2F96', '#FAAD14', '#FF4D4F'];
       dateRange ;
    return (
        <Card className="bg-white rounded border border-gray-300">
            {
                heading === "analysis" &&
                <div className="flex justify-between items-center">
                    <div className="text-gray-900 font-medium text-base">
                        Statistics
                    </div>
                    <RangePicker
                        onChange={dateFilter}
                        allowClear={false}
                        ranges={{
                            Today: [dayjs(), dayjs()],
                            'This Week': [dayjs().startOf('week'), dayjs().endOf('week')],
                            'This Month': [dayjs().startOf('month'), dayjs().endOf('month')],
                        }}
                    />
                </div>
            }
            <div className="flex justify-between mt-5 gap-5">
                {dataName?.map((item, index = 0) => (
                    <div className="w-1/3 h-18 border-r border-gray-300 text-center">
                        <p className="text-black opacity-75 m-0">{item?.name}</p>
                        <p
                            className="text-3xl font-semibold m-0"
                            style={{ color: color[index % 6] }}
                        >
                            {item?.value}
                        </p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Statistics;