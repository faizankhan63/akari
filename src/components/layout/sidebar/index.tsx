/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { To, useLocation, useNavigate } from 'react-router-dom';

import akari from '../../../../assets/icons/app-icon/sidebar-icons/akari-logo.svg';
import dash from '../../../../assets/icons/app-icon/sidebar-icons/dash-icon.svg';
import auto from '../../../../assets/icons/app-icon/sidebar-icons/autolisting-icon.svg';
import acc from '../../../../assets/icons/app-icon/sidebar-icons/account-manager-icon.svg';
import csv from '../../../../assets/icons/app-icon/sidebar-icons/csv-icon.svg';
import setting from '../../../../assets/icons/app-icon/sidebar-icons/setting.svg';
import signout from '../../../../assets/icons/app-icon/sidebar-icons/signout.svg';

import style from './sidebar.module.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;

  const routes = [
    { path: '/', label: 'Dashboard', icon: dash },
    { path: '/auto-listing', label: 'Auto Listing', icon: auto },
    { path: '/account-manager', label: 'Account Manager', icon: acc },
    { path: '/csv', label: 'CSV Import/Export', icon: csv },
    { path: '/settings', label: 'Settings', icon: setting },
    { path: '/login', label: 'Sign Out', icon: signout },
  ];

  const handleNavigation = (path: To) => {
    navigate(path);
  };

  return (
    <div className={style.main}>
      <img src={akari} alt="akari-logo" />

      <div className={style.routes}>
        {routes.map((route) => (
          <div
            key={route.path}
            onClick={() => handleNavigation(route.path)}
            className={`${currentUrl === route.path ? style.active : ''} ${
              style.page
            }`}
          >
            <img src={route.icon} alt={`${route.label}Icon`} />
            <span>{route.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
