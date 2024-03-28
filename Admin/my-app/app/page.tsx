"use client"
import styles from '@/app/page.module.css';

import SideBar from "@/app/Dashboard/Sidebar";
import NavBar from "@/app/Dashboard/Navbar";
import Stats from "@/app/Dashboard/Charts/chart";
import Stackbars from "@/app/Dashboard/Charts/bars";
import Line from "@/app/Dashboard/Charts/line";
import Scatter from "@/app/Dashboard/Charts/stats";
import SparkLine from "@/app/Dashboard/Charts/Spark";
import Gauges from "@/app/Dashboard/Charts/Gauge";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <NavBar />
      <div className={styles.gaugecontainer}>
        <div className={` ${styles.gaugesChart}`} style={{ width: '80%' }}>
          <div className={`${styles.chartLabel}${styles.gaugesChart} ${styles.gaugesLabel}`}>Gauges Chart</div>
          <div className={`${styles.chartDescription}  ${styles.gaugesDescription}`}>Description of the Gauges Chart</div>
          <Gauges  />
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={`${styles.chartItem} ${styles.statsChart}`}>
          <div className={`${styles.chartLabel} ${styles.statsLabel}`}>Stats Chart</div>
          <div className={`${styles.chartDescription} ${styles.statsDescription}`}>Number of seekers and providers</div>
          <Stats />
        </div>
        <div className={`${styles.chartItem} ${styles.stackbarsChart}`}>
          <div className={`${styles.chartLabel} ${styles.stackbarsLabel}`}>Stackbars Chart</div>
          <div className={`${styles.chartDescription} ${styles.stackbarsDescription}`}>Opportunities categories</div>
          <Stackbars />
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={`${styles.chartItem} ${styles.lineChart}`}>
          <div className={`${styles.chartLabel} ${styles.lineLabel}`}>Line Chart</div>
          <div className={`${styles.chartDescription} ${styles.lineDescription}`}>Traffic Growth</div>
          <Line />
        </div>
        <div className={`${styles.chartItem} ${styles.scatterChart}`}>
          <div className={`${styles.chartLabel} ${styles.scatterLabel}`}>Scatter Chart</div>
          <div className={`${styles.chartDescription} ${styles.scatterDescription}`}>Providers and their opportunities</div>
          <Scatter />
        </div>
      </div>
      <div className={styles.SparkContainer}>
        <div className={`${styles.sparkItem} ${styles.sparkLineChart}`}>
          <div className={`${styles.chartLabel} ${styles.sparkLineLabel}`}>SparkLine Chart</div>
          <div className={`${styles.chartDescription} ${styles.sparkLineDescription}`}>Description of the SparkLine Chart</div>
          <SparkLine />
        </div>
      </div>
      <SideBar />
    </main>
  );
}
