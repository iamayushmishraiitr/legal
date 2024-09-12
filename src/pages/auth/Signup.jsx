import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined, SecurityScanOutlined, EnvironmentOutlined, ShopOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center p-9 border border-gray-300 rounded-lg shadow-lg bg-white w-96">
        <h1 className="font-bold mb-10 text-2xl">LegalSip</h1>
        <p className="font-bold text-blue-500 mb-4">Vendor Registration</p>
        <Form
          name="basic"
          className="w-full"
          autoComplete="off"
        >
          <Form.Item
            name="company name"
            rules={[
              {
                required: true,
                message: 'Please input Company Name!',
              },
            ]}
          >
            <Input placeholder="Company Name" prefix={<ShopOutlined />} />
          </Form.Item>

          <Form.Item
            name="e-mail"
            rules={[
              {
                required: true,
                message: 'Please input your e-mail!',
              },
            ]}
          >
            <Input placeholder="Email" prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="Password" prefix={<SecurityScanOutlined />} />
          </Form.Item>

          <Form.Item
            name="mobile number"
            rules={[
              {
                required: true,
                message: 'Please input your Mobile Number!',
              },
            ]}
          >
            <PhoneInput
              country={'in'}
              enableSearch={true}
              placeholder="Phone Number"
            />
          </Form.Item>

          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: 'Please input your Address!',
              },
            ]}
          >
            <Input placeholder="Address" prefix={<EnvironmentOutlined />} />
          </Form.Item>

          <Form.Item>
            <Link to="/scan-history">
              <Button type="primary" htmlType="submit" className="w-full">
                Sign Up
              </Button>
            </Link>
          </Form.Item>
        </Form>

        <div className="flex mt-1 gap-1 justify-center">
          <p>I already have an account.</p>
          <Link to="/" className="text-blue-500 hover:underline">Log In!</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
