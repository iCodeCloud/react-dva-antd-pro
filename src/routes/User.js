import React from 'react';
import {connect} from 'dva';
import styles from './User.css';
import UserListTable from './UserListTable';


@connect((state) => {
  return {...state.user};
})

export default class UserList extends React.Component {
  render = () => {
    return (
      <div>
        <UserListTable />
      </div>
    );
  }
}
