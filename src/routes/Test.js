import React from 'react';
import { connect } from 'dva';
import styles from './Test.css';

function Test() {
  return (
    <div className={styles.normal}>
      Route Component: Test Page ~~~
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Test);
