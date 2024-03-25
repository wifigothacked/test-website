import { createRouter,createWebHistory } from "vue-router";

//import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
import CovidStateCases from "../views/CovidStateCases.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";

const routes=[
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
      path:"/covidData",
      name:"CovidStateCases",
      component:CovidStateCases
    },
    {
      path:"/aboutus",
      name:"AboutUs",
      component:AboutUs
    },
    {
      path:"/contactus",
      name:"ContactUs",
      component:ContactUs
    }
];



const router=createRouter({
    history:createWebHistory(),
    routes
});


export default router;
/*
router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    //  Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

{
        path:"/",
        name:"home",
        component:Home
    }
*/