import React from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { ClockCircleOutlined, QrcodeOutlined, WalletOutlined, LineChartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const sidebarItems = [
  {
    key: '1',
    icon: <ClockCircleOutlined />,
    label: <Link to="/scan-history" className='font-semibold text-[14px]'>Scan History</Link>,
  },
  {
    key: '2',
    icon: <WalletOutlined />,
    label: <Link to="/wallet" className='font-semibold text-[14px]'>Wallet</Link>,
  },
  {
    key: '3',
    icon: <LineChartOutlined />,
    label: <Link to="/analysis" className='font-semibold text-[14px]'>Analysis</Link>,
  },
  {
    key: '4',
    icon: <UserOutlined />,
    label: <Link to="/club-profile" className='font-semibold text-[14px]'>Club Profile</Link>,
  },
];

const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          borderBottom: '2px solid #ccc',
          borderTop: '2px solid #ccc',
          padding: '0 24px',
        }}
      >
        <div className="flex items-center">
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              margin: 0,
            }}
          >
            LegalSip
          </p>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          className='flex flex-1 justify-center'
        />

        <div className="flex items-center gap-[20px]">
          <p
            style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            <UserOutlined />  DemoBar
          </p>
          <Button type="primary" size="medium">
            Logout
          </Button>
        </div>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            items={sidebarItems}
            className='h-[100vh] pt-6'
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
