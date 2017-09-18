import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import HomeComponent from '@/components/Home/HomeComponent'
import FaXian from '@/components/Home/FaXian/FaXian'
import HaiTao from '@/components/Home/HaiTao/HaiTao'
import YouHui from '@/components/Home/YouHui/YouHui'
import YuanChuang from '@/components/Home/YuanChuang/YuanChuang'
import JingXuan from '@/components/Home/JingXuan/JingXuan'

import CategoryComponent from '@/components/Category/CategoryComponent'
import ProfileComponent from '@/components/Profile/ProfileComponent'

export default new Router({
  routes: [
    	{
    		path:'/',
    		component:HomeComponent
    	},
    	{
    		path:'/home',
    		component:HomeComponent,
            children:[
                {
                path:'jingxuan',
                component:JingXuan
                },
                {
                path:'faxian',
                component:FaXian
                },
                {
                path:'haitao',
                component:HaiTao
                },
                {
                path:'youhui',
                component:YouHui
                },
                {
                path:'yuanchuang',
                component:YuanChuang
                },
            ]
    	},
    	{
    		path:'/category',
    		component:CategoryComponent
    	},
    	{
    		path:'/profile',
    		component:ProfileComponent
    	}
  ]
})
