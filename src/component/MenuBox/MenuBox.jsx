import React from 'react';
import styles from './MenuBox.module.scss';
import { Link } from 'react-router-dom';

function MenuBox() {
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/form">Form</Link>
        <Link to="table">Table</Link>
      </nav>
    </header>
  );
}

export default MenuBox;
