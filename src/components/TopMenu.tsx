// components/TopMenu.js
import { Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, AppstoreAddOutlined, ContactsOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const TopMenu = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="about" icon={<InfoCircleOutlined />}>
        About
      </Menu.Item>
      <Menu.Item key="services" icon={<AppstoreAddOutlined />}>
        Services
      </Menu.Item>
      <Menu.Item key="contact" icon={<ContactsOutlined />}>
        Contact
      </Menu.Item>
    </Menu>
  );
};

export default TopMenu;
