import dayjs from 'dayjs';

// Helper function to generate random data
const generateRandomData = () => {
    const genders = ['Male', 'Female'];
    const requestTypes = ['Type A', 'Type B', 'Type C'];
    const ageGroup = '18-30';

    // Generate random date within the past year
    const randomDate = () => dayjs().subtract(Math.floor(Math.random() * 365), 'day').format('DD-MM-YYYY hh:mm A');
    // Generate random name
    const randomName = () => `${['John', 'Jane', 'Alex', 'Emily'][Math.floor(Math.random() * 4)]} ${['Doe', 'Smith', 'Johnson', 'Williams'][Math.floor(Math.random() * 4)]}`;
    // Generate random phone number
    const randomPhoneNumber = () => `+1${Math.floor(Math.random() * 1000000000)}`;
    // Generate random Aadhar number (just for example, not a real Aadhar format)
    const randomAadharNumber = () => `${Math.floor(Math.random() * 9000000000) + 1000000000}`;
    // Generate random email
    const randomEmail = () => `${['test', 'sample', 'demo'][Math.floor(Math.random() * 3)]}@example.com`;

    // Generate the data array
    return Array.from({ length: 50 }, () => ({
        "Date&Time": randomDate(),
        "Name": `${randomName()} + ${['IN', 'US', 'UK'][Math.floor(Math.random() * 3)]} ${randomPhoneNumber()}`,
        "Aadhar Number": randomAadharNumber(),
        "Phone Number": randomPhoneNumber(),
        "Gender": genders[Math.floor(Math.random() * genders.length)],
        "Age Group": ageGroup,
        "Request type": requestTypes[Math.floor(Math.random() * requestTypes.length)],
    }));
};

// Generate the data
const dummyData = generateRandomData();

// Format the data
const tableDataDummy = dummyData.map((data) => {
    return {
        date: data["Date&Time"], // Mapping to "Date&Time" field
        name: data["Name"], // Mapping to "Name" field
        aadharNumber: data["Aadhar Number"], // Mapping to "Aadhar Number" field
        phoneName: data["Phone Number"], // Mapping to "Phone Number" field
        gender: data["Gender"], // Mapping to "Gender" field
        ageGroup: data["Age Group"], // Mapping to "Age Group" field
    };
});

export default tableDataDummy
