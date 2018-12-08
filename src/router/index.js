import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../pages/Home/Home');//首页
const Order = () => import('../pages/Order/Order');//订单
const Mine = () => import('../pages/Mine/Mine');//我的
import Login from '../pages/Login/Login'; //登录
import Search from '../pages/Home/Search/Search'; //搜索
import NeedPut from '../pages/Home/NeedPut/NeedPut'; //需求提交
import ServiceProject from '../pages/Home/ServiceProject/ServiceProject';//服务详情
import ServiceProjectDetail from '../pages/Home/ServiceProject/ServiceProjectDetail/ServiceProjectDetail';//服务方案详情
import EveryDetail from '../pages/Home/ServiceProject/EveryDetail/EveryDetail';//服务方案详情
import TroubleSend from '../pages/Home/TroubleSend/TroubleSend'; //故障方案
import TroubleDetail from '../pages/Home/TroubleSend/TroubleDetail/TroubleDetail'; //故障方案详情
import PerfectMessage from '../pages/Home/NeedPut/PerfectMessage/PerfectMessage'; //完善信息
import SelectAdress from '../pages/Home/NeedPut/SelectAddress/SelectAddress'; //选择服务地址
import NewAddress from '../pages/Home/NeedPut/NewAddress/NewAddress'; //选择服务地址
import PayPage from '../pages/Home/NeedPut/PayPage/PayPage'; //支付页面
import ServiceAgreement from '../pages/Home/NeedPut/PayPage/ServiceAgreement/ServiceAgreement';//服务协议页面
import WaitOrderDetail from '../pages/Order/WaitOrderDetail/WaitOrderDetail'//待分配页面详情
import AwaitOrderDetail from '../pages/Order/AwaitOrderDetail/AwaitOrderDetail'//待施工页面详情
import DaiquerenOrderDetail from '../pages/Order/DaiquerenOrderDetail/DaiquerenOrderDetail'//服务方案待确认页面详情
import WaitPayOrderDetail from '../pages/Order/WaitPayOrderDetail/WaitPayOrderDetail'///待支付页面详情
import ChargeBack from '../pages/Order/ChargeBack/ChargeBack'//申请退单页面
import SubmitTrouble from '../pages/Order/BeingOrderDetail/SubmitTrouble/SubmitTrouble'//故障申报页面
import BeingOrderDetail from '../pages/Order/BeingOrderDetail/BeingOrderDetail'//进行中页面详情
import FinishOrderDetail from '../pages/Order/FinishOrderDetail/FinishOrderDetail'//已完成页面详情
import RatingOrder from '../pages/Order/FinishOrderDetail/RatingOrder/RatingOrder'//评价订单页面
import SendTrouble from '../pages/Order/FinishOrderDetail/SendTrouble/SendTrouble'//故障申报页面
import ChangeMessage from '../pages/Mine/ChangeMessage/ChangeMessage' //修改信息页面
import CallService from '../pages/Mine/CallService/CallService' //联系客服页面
import MyOrder from '../pages/Mine/MyOrder/MyOrder' //我的非标准订单页面
import MyOrderDetail from '../pages/Mine/MyOrder/MyOrderDetail/MyOrderDetail' //我的非标准订单详情页面
import MyBack from '../pages/Mine/MyBack/MyBack' //我的退单页面
import BackDetails from '../pages/Mine/MyBack/BackDetails/BackDetails' //退单详情页面
import MySetting from '../pages/Mine/MySetting/MySetting' //我的设置页面
import ChangeNum from '../pages/Mine/MySetting/ChangeNum/ChangeNum' //更换号码页面

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
      mata: {
        keepAlive: true
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true,
        keepAlive: true,
      },
    },
    {
      path: '/search',
      component: Search,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/need_put',
      component: NeedPut,
    },
    {
      path: '/project',
      component: ServiceProject,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/project_detail',
      component: ServiceProjectDetail,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/every_detail',
      component: EveryDetail,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/trouble',
      component: TroubleSend,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/trouble_detail',
      component: TroubleDetail,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/perfect',
      component: PerfectMessage,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/address',
      component: SelectAdress,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/new_address',
      component: NewAddress,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/pay_page',
      component: PayPage,
      mata: {
        keepAlive: true
      }
    },
    {
      path: '/agreement',
      component: ServiceAgreement,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true,
        keepAlive: true
      }
    },
    {
      path: '/wait_detail',
      component: WaitOrderDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/await_orderdetail',
      component: AwaitOrderDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/daiqueren_orderdetail',
      component: DaiquerenOrderDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/waitpay_orderdetail',
      component: WaitPayOrderDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/charge_back',
      component: ChargeBack,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/submit_trouble',
      component: SubmitTrouble,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/being_detail',
      component: BeingOrderDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/finish_detail',
      component: FinishOrderDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/rating_order',
      component: RatingOrder,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/send_trouble',
      component: SendTrouble,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
        showFooter: true,
        keepAlive: true
      }
    },
    {
      path: '/change',
      component: ChangeMessage,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/setting',
      component: MySetting,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/change_num',
      component: ChangeNum,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/call',
      component: CallService,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/my_order',
      component: MyOrder,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/order_detail',
      component: MyOrderDetail,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/back',
      component: MyBack,
      mata: {
        keepAlive: false
      }
    },
    {
      path: '/back_details',
      component: BackDetails,
      mata: {
        keepAlive: false
      }
    }
  ]
})
