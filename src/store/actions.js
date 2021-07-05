import api from '@/api';
import { FETCH_TOTAL_PAGE, FETCH_POST_LIST, FETCH_POST, SET_ACCESS_TOKEN, SET_MY_INFO } from './mutations-types';

export default {
  fetchTotalPage({ commit }, pageInfo) {
    return api
      .get('/posts/size', {
        params: {
          page: pageInfo.page,
          size: pageInfo.size,
        },
      })
      .then((res) => {
        // page가 0부터 시작함
        commit(FETCH_TOTAL_PAGE, res.data - 1);
      });
  },
  fetchPostList({ commit }, pageInfo) {
    return api
      .get('/posts/', {
        params: {
          page: pageInfo.page,
          size: pageInfo.size,
        },
      })
      .then((res) => {
        commit(FETCH_POST_LIST, res.data);
      });
  },
  // fetchPost({ commit }, postId) {
  //   return api.get(`/posts/${postId}`).then(res => {
  //     commit(FETCH_POST, res.data);
  //   });
  // },
  fetchPost({ commit }, postId) {
    console.log('fetchPost');
    return api.get(`/posts/${postId}`).then((res) => {
      console.log('getData');
      commit(FETCH_POST, res.data);
      console.log('commit');
    });
  },
  signinByToken({ commit }, token) {
    commit(SET_ACCESS_TOKEN, token);
    return api.get('/users/me').then((res) => {
      commit(SET_MY_INFO, res.data);
    });
  },
  signin({ commit }, payload) {
    const { email, password } = payload;
    return api
      .post('/auth/signin', { email, password })
      .then((res) => {
        const { accessToken } = res.data;
        commit(SET_ACCESS_TOKEN, accessToken);
        return api.get('users/me');
      })
      .then((res) => {
        commit(SET_MY_INFO, res.data);
      });
  },
};
