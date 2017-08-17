import React from 'react';
import { connect } from 'dva';
import styles from './User.css';

function User() {
  return (
    <div className={styles.normal}>
      Route Component: User
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(User);
