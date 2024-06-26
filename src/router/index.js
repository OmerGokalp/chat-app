import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import { projectAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next ({ name: 'welcome'});
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next ({ name: 'chatroom'});
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
    beforeEnter: requireNoAuth,
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: () => import('../views/ChatroomView.vue'),
    beforeEnter: requireAuth,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
