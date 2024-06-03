import React, { Children } from 'react';

import searchIcon from '../../../assets/icons/app-icon/search-icon.svg';
import notificationBell from '../../../assets/icons/app-icon/notification-bell.svg';
import accountIcon from '../../../assets/icons/app-icon/account-icon.svg';
import arrowDown from '../../../assets/icons/app-icon/arrow-head-down.svg';

import style from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <main className={style.mainLayout}>
      <div className={style.topHeader}>
        <div className={style.title}>
          <h1>Dashboard</h1>
        </div>
        <div className={style.search}>
          <img src={searchIcon} alt="searchIcon" />
          <input placeholder="Search here..." />
        </div>
        <div className={style.topRight}>
          <div className={style.notificationBadge}>
            <div className={style.dot} />
            <img src={notificationBell} alt="notification-bell" />
          </div>
          <div className={style.accountDiv}>
            <img src={accountIcon} alt="accountIcon" />
            <span>Faizan Ali</span>
            <img src={arrowDown} alt="arrowDown" />
          </div>
        </div>
      </div>
      <div className={style.childDiv}>{children}</div>
    </main>
  );
};

export default Layout;
