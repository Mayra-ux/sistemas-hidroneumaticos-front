import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import logoImage from '../../assets/LOGO SHC.png'; 

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Cotizaciones', '1', <PieChartOutlined />),
  getItem('Ventas', '2', <DesktopOutlined />),
  getItem('Remisiones', '9', <FileOutlined />),
  getItem('Ordenes de compra', '10', <FileOutlined />),
  getItem('Ordenes de trabajo', '11', <FileOutlined />),
  getItem('Salidas', '12', <FileOutlined />),
  getItem('Catalogos', 'sub2', <TeamOutlined />, [getItem('Equipos', '6'), getItem('Clientes', '8'), getItem('Proveedores', '13')])
];

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
      onBreakpoint={broken => {
        console.log(broken);
      }}
    >
      {/*imagen del logo */}
      <div className="logo-container">
        <img src={logoImage} alt="Logo de la empresa" 
        style={{ width: '80%',
                margin: '24px auto', // Aumenta el margen superior e inferior
                display: 'block', }} />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
    </Sider>
  );
};