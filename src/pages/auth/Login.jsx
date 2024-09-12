import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined, SecurityScanOutlined } from '@ant-design/icons';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center p-9 border border-gray-300 rounded-lg shadow-lg bg-white w-96">
        <h1 className="font-bold mb-10 text-2xl">LegalSip</h1>
        <p className="font-bold text-blue-500 mb-4">Vendor Login</p>
        <Form
          name="basic"
          className="w-full"
          autoComplete="off"
        >
          <Form.Item
            name="e-mail"
            rules={[
              {
                required: true,
                message: 'Please input your e-mail!',
              },
            ]}
          >
            <Input placeholder="E-mail" prefix={<MailOutlined />} />
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

          <Form.Item>
            <Link to="/scan-history">
              <Button type="primary" htmlType="submit" className="w-full">
                Log In
              </Button>
            </Link>
          </Form.Item>
        </Form>
        <div className="flex mt-1 justify-center gap-1">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-blue-500 hover:underline">Sign Up!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
