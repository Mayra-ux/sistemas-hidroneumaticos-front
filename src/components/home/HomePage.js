import React from 'react';
import { Layout, theme, Space, Button } from 'antd';
import { Navbar } from '../ui/Navbar';
import maquinaImage from '../../assets/LOGO SHC_ MAQ.png';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
// Si usas un archivo .module.css
// import styles from './HomePage.module.css';

const { Header, Content, Footer } = Layout;

export const HomePage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const userName = "Victor Hugo Ramírez Leal";

  const handleLogout = () => {
    console.log('Cerrar sesión');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout className="site-layout">
        <Header style={{ padding: '0 24px', background: colorBgContainer, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Space size="middle">
            <span><UserOutlined style={{ marginRight: 8 }} /> Bienvenido {userName}</span>
            {/* Aplica la clase CSS al botón */}
            <Button onClick={handleLogout} icon={<LogoutOutlined />} danger className="logout-button">
              Log Out
            </Button>
          </Space>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 'calc(100vh - 64px - 48px)',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={maquinaImage} alt="Imagen de máquina" style={{
              maxWidth: '40%',
              maxHeight: '40%',
              objectFit: 'contain',
              opacity: 0.6,
            }} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Sistemas Hidroneumaticos Del Centro ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};