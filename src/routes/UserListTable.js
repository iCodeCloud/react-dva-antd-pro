import React from 'react';
import {connect} from 'dva';
import {Table} from 'antd';


@connect((state) => {
  return {...state.user};
})

export default class UserListTable extends React.Component {

  // dataSource = [{
  //   key: '1',
  //   name: '胡彦斌',
  //   age: 32,
  //   address: '西湖区湖底公园1号'
  // }, {
  //   key: '2',
  //   name: '胡彦祖',
  //   age: 42,
  //   address: '西湖区湖底公园1号'
  // }];

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: '1',
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: '2',
  }, {
    title: '电话',
    dataIndex: 'phone',
    key: '3',
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: '4',
  }];

  render = () => {
    const {userList} = this.props;
    userList.map((user) => {
      user.key = user.id; // Antd，你挺te啊。非点要加个key。
    });
    return (
      <Table
        dataSource={userList}
        columns={this.columns}/>
    );
  }

}
