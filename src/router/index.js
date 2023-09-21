import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("../views/ProductList.vue");
const About = () => import("../views/AboutView.vue");
const Contact = () => import("../views/ContactView.vue");
const ProductDetails=()=>import("../views/ProductDetails.vue")


const NotFound = () => import("../views/NotFound.vue")

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',  
      component:About
    },

    {
      path: '/contact',
      name: 'Contact',
      component:Contact

    },
    {
      path: '/product-details/:id',
      name:'ProductDetails',
      component: ProductDetails,
 
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component:NotFound
    }
   
  ]
})

export default router