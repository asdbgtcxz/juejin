import Vue from 'vue'
import Router  from 'vue-router'
Vue.use(Router )
import Home from "@/views/Home"
import Detail from "@/views/Detail"
import Editor from "@/views/editor/Editor"
const router = new Router ({
  routes: [
    {
      name:'Home',
      path:"/",
      component:Home
    },
    {
      name: "Detail",
      path: "/detail/:id",
      component:Detail
    },
    {
      name:'Editor',
      path:"/editor",
      component:Editor
    },
  ]
})
export default router