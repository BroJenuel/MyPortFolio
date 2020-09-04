import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Introduction',
        component: () => import(/* webpackChunkName: "introduction" */ './../views/Home/pages/introduction/introduction.vue')
      },
      {
        path: 'overview',
        name: 'overview',
        component: () => import(/* webpackChunkName: "overview" */ './../views/Home/pages/overview/Overview.vue')
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import(/* webpackChunkName: "portfolio" */ './../views/Home/pages/Portfolio/Portfolio.vue')
      },
      
    ]
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ './../views/blog/Blog.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "notfound" */ './../components/PageNotFound/PageNotFound.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//       // Start the route progress bar.
//       // NProgress.start()
//       console.log('to: ' + to + " from: "+from);
//   }
//   next()
// })

// router.afterEach((to, from) => {
//   // Complete the animation of the route progress bar.
//   // NProgress.done()
//   // console.log('Im done loading to: '+to + ' From: '+ from);
// })

export default router
