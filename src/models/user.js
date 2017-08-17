import {queryUserList} from '../services/userService';

export default {
  namespace: 'user',
  state: {
    userList: [],
  },
  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    }
  },
  effects: {
    *queryUserList({payload}, {call, put, select}) {
      const {data} = yield call(queryUserList, {...payload});
      yield put({
        type: 'save',
        payload: {
          userList: data
        }
      });
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        if (pathname === '/user') {
          dispatch({
            type: 'queryUserList',
            payload: {}
          });
        }
      });
    }
  },
};
