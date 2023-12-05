
import React from 'react';
import Card from '../ui/dashboard/card/card';
import styles from '../ui/dashboard/dashboard.module.css';
import Chart from '../ui/dashboard/chart/chart';

const Dashboard = () => {
  return (
    <div>
      <h1>Status</h1>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
