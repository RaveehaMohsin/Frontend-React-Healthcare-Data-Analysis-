import React, { useState } from 'react';
import { Menu } from 'antd';
import './dashboard.css';
import picture from '../../../assets/Health Life Medical Center Logo (1).png';

const Dashboard = ({ itemsData }) => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const [selectedKey, setSelectedKey] = useState(null); // State to track the selected key

  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  const items = Object.values(itemsData).map((item, index) => ({
    key: `${index + 1}`,
    icon: item.icon,
    label: item.title,
    link: item.link,
  }));

  const handleClick = (e) => {
    setSelectedKey(e.key); // Set the clicked item as active
    const clickedItem = items.find(item => item.key === e.key);
    if (clickedItem && clickedItem.link) {
      window.location.href = clickedItem.link;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <img
          src={picture}
          alt="Dashboard Header"
          className="dashboard-header-image"
          style={{ maxHeight: '100px', width: 'auto', margin: 'auto', display: 'block' }}
        />
      </div>
      <div className="dashboard-content">
        <Menu
          className="dashboard-menu"
          selectedKeys={[selectedKey]} // Set the active key
          mode={mode}
          theme={theme}
          items={items}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Dashboard;
