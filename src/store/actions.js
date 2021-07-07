import api from '@/api';
import { FETCH_TOTAL_PAGE, FETCH_POST_LIST, FETCH_POST } from './mutations-types';

export default {
  fetchTotalPage({ commit }) {
    return api.get('/posts/size').then((res) => {
      // page가 0부터 시작함
      commit(FETCH_TOTAL_PAGE, res.data);
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
  fetchPost({ commit }, postId) {
    console.log('fetchPost');
    return api.get(`/post/${postId}`).then((res) => {
      console.log('getData');
      commit(FETCH_POST, res.data);
      console.log('commit');
    });
  },
};
