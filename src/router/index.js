import { createRouter, createWebHistory } from 'vue-router';
import PostCreate from '@/components/qnaComponents/PostCreate.vue';
import PostEdit from '@/components/qnaComponents/PostEdit.vue';
import PostView from '@/components/qnaComponents/PostView.vue';
import PostList from '@/components/qnaComponents/PostList.vue';
import HomeView from '@/views/HomeView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView, 
  },
  {
    path: '/postList',
    name: 'PostList',
    component: PostList, 
  },
  {
    path: '/post/create',
    name: 'PostCreate',
    component: PostCreate,
  },
  {
    path: '/post/:id',
    name: 'PostView',
    component: PostView,
  },
  {
    path: '/post/:id/edit',
    name: 'PostEdit',
    component: PostEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;