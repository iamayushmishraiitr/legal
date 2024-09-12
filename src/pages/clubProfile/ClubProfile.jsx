import { Button, Divider, Flex, Form, Input } from 'antd'
import PhoneInput from 'react-phone-input-2'
import QRCode from 'react-qr-code';
const { TextArea } = Input;

const ClubProfile = () => {
    return (
        <div className='flex flex-col'>
            <div className="text-gray-900 font-medium text-base">
                Club Profile
            </div>
            <Divider/>
            <div className='flex gap-[5vw] w-[60%]'>
                <Form layout="vertical">
                    <Flex gap={20}>
                        <Form.Item
                            name="clubName"
                            label="Club Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Club Name!',
                                },
                            ]}
                        >
                            <Input
                                className='w-[300px] h-[35px]'
                                placeholder='Club Name'
                            />
                        </Form.Item>
                        <Form.Item
                            name="ownerName"
                            label="Owner Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Owner Name!',
                                },
                            ]}
                        >
                            <Input
                                className='w-[300px] h-[35px]'
                                placeholder='Owner Name'
                            />
                        </Form.Item>
                    </Flex>

                    <Flex gap={20}>
                        <Form.Item
                            name="phoneNumber"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Phone Number!',
                                },
                            ]}
                        >
                            <PhoneInput
                                country={'in'}
                                enableSearch={true}
                                placeholder="Phone Number"
                                className='w-[300px] h-[35px]'
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email Id"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input
                                className='w-[300px] h-[35px]'
                                placeholder='Email Id'
                            />
                        </Form.Item>
                    </Flex>
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Address!',
                            },
                        ]}
                    >
                        <TextArea rows={4} maxLength={100} placeholder="Address" className='w-[25vw]' />
                    </Form.Item>
                    <Button type='primary' style={{ marginTop: "30px" }} htmlType="submit">Send Request</Button>
                </Form>
                <div className='flex flex-col gap-[20px] absolute right-[15vw]'>
                    <div className="text-gray-900 font-medium text-base text-center">
                        Generated QR Code of Club
                    </div>
                    <QRCode
                        className='h-65 w-65'
                        value="www.youtube.com"
                    />
                </div>
            </div>
        </div>
    )
}

export default ClubProfile