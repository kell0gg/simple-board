import { FETCH_TOTAL_PAGE, FETCH_POST_LIST } from './mutations-types';
import { FETCH_POST } from './mutations-types';
export default {
  [FETCH_TOTAL_PAGE](state, totalPage) {
    state.totalPage = totalPage;
  },
  [FETCH_POST_LIST](state, posts) {
    state.posts = posts;
  },
  [FETCH_POST](state, post) {
    state.post = post;
  },
};
