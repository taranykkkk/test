import React from 'react';
import styles from './MenuBox.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

function MenuBox() {
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <nav>
        {routes.map((route) => (
          <li key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </nav>
    </header>
  );
}

export default MenuBox;
