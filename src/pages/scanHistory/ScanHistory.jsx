import React, { useEffect, useState } from "react";
import {
  Select,
  Table,
  Button,
  message,
  DatePicker,
  Divider,
} from "antd";
import dayjs from "dayjs";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";
import tableDataDummy from "../../utils/generateDummyData";
import UserHistoryModal from "./UserHistoryModal";

const { RangePicker } = DatePicker;

const ScanHistory = () => {
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("all");
  const [open, setOpen] = useState(null); 
  const [add, setAdd] = useState("all");
  const currentDate = dayjs();
  const firstDayOfMonth = dayjs(currentDate)
    .startOf("month")
    .set("hour", 0)
    .set("minute", 0)
    .set("second", 0)
    .set("millisecond", 0);
  const lastDayOfMonth = dayjs(currentDate)
    .set("hour", 23)
    .set("minute", 59)
    .set("second", 59)
    .set("millisecond", 999);

  const [dateRange, setDateRange] = useState([firstDayOfMonth, lastDayOfMonth]);

  const dateFilter = async (date, dateString) => {
    const localDate = [
      dayjs(new Date(dateString[0]).setHours(0, 0, 0)),
      dayjs(new Date(dateString[1]).setHours(23, 59, 59)),
    ];
    setDateRange(localDate);
  };

  useEffect(() => {
    fetchData();
  }, [dateRange, selectedPlan, add]);

  // TABLE COLUMNS
  const columns = [
    {
      title: "Date & Time",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      render: (text) => {
        if (text) {
          const date = new Date(text);
          const formattedDate = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }).replace(/\//g, "-");

          const formattedTime = date
            .toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
            .toUpperCase();

          return (
            <>
              {formattedDate} <br />
              {formattedTime}
            </>
          );
        }
        return null;
      }
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Aadhar Number",
      dataIndex: "aadharNumber",
      key: "aadharNumber",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Age Group",
      dataIndex: "ageGroup",
      key: "ageGroup",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Button
            size="medium"
            type="primary"
            onClick={() => setOpen(true)}
          >
            User History
          </Button>
        );
      },
    },
  ];

  const ageOptions = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "below21",
      label: "Below 21 years",
    },
    {
      value: "between21-15",
      label: "Between 21-25 years",
    },
    {
      value: "above25",
      label: "Above 25 years",
    }
  ]

  const genderOptions = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    }
  ]

  const fetchData = async () => {
  };

  const tableData = tableDataDummy?.map((data) => {
    return {
      date: data?.createdAt,
      name: data?.Name,
      aadharNumber: data["Aadhar Number"],
      phoneName: data["Phone Number"],
      gender: data?.Gender,
      ageGroup: data["Age Group"],
    };
  });

  const exportData = tableDataDummy?.map((data) => {
    return {
      "Date&Time": `${dayjs(data.createAt).format("DD-MM-YYYY hh:mm A")}`,
      "Name": `${data?.lab?.name} + ${data?.lab?.countryCode} ${data?.lab?.contact}`,
      "Aadhar Number": data?.accountNumber,
      "Phone Number": data?.accountHolderName,
      "Gender": data?.ifsc,
      "Age Group": data?.email,
      "Request type": data["Request type"],
    };
  });

  const exportToCSV = (csvData, fileName) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div>
      <div className="text-gray-900 font-medium text-base">
        Scan History
      </div>
      <Divider />
      <div className="flex justify-end mb-[15px]">
        <div className="flex gap-[15px]">
          <Select
            className="w-[100px]"
            options={genderOptions}
            value={add}
            onChange={(value) => setAdd(value)}
          />
          <Select
            className="w-[170px]"
            options={ageOptions}
            value={selectedPlan}
            onChange={(value) => setSelectedPlan(value)}
          />
          <RangePicker
            className="w-[240px]"
            value={dateRange}
            onChange={dateFilter}
            allowClear={false}
            format="YYYY-MM-DD"
            presets={[
              {
                label: "Today",
                value: [dayjs().startOf("day"), dayjs().endOf("day")],
              },
              {
                label: "Last 5 days",
                value: [dayjs().add(-5, "d"), dayjs()],
              },
              {
                label: "This Week",
                value: [dayjs().startOf("week"), dayjs().endOf("week")],
              },
              {
                label: "This Month",
                value: [dayjs().startOf("month"), dayjs().endOf("month")],
              },
              {
                label: "Last 30 Days",
                value: [dayjs().add(-30, "d"), dayjs()],
              },
            ]}
          />
          <Button
            onClick={() =>
              exportToCSV(exportData, "Scan history")
            }
          >
            Excel Export
          </Button>
        </div>
      </div>
      <Table
        dataSource={tableDataDummy}
        columns={columns}
        loading={loading}
        pagination={{ pageSize: 7 }}
      />
      {
        open &&
        <UserHistoryModal
          open={open}
          setOpen={setOpen}
        />
      }
    </div>
  );
};

export default ScanHistory;
