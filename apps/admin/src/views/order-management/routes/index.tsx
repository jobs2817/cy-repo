import { DashboardOutlined } from '@ant-design/icons'
import Layout from '../../../components/Layout/index'
import SalesOrder from '../pages/sales-order'
import SalesRecord from '../pages/sales-record'
import CardVerification from '../pages/card-verification'
import ServiceOrder from '../pages/service-order'

const storeManage = [
  {
    label: '订单管理',
    key: 'orderManagement',
    path: 'orderManagement',
    icon: <DashboardOutlined />,
    element: <Layout />,
    children: [
      {
        label: '销售订单',
        key: 'salesOrder',
        path: 'storeManage/salesOrder',
        icon: <DashboardOutlined />,
        element: <SalesOrder />,
      },
      {
        label: '销售流失单',
        key: 'salesRecord',
        path: 'storeManage/salesRecord',
        icon: <DashboardOutlined />,
        element: <SalesRecord />,
      },
      {
        label: '卡卷核销订单',
        key: 'cardVerification',
        path: 'storeManage/cardVerification',
        icon: <DashboardOutlined />,
        element: <CardVerification />,
      },
      {
        label: '服务订单',
        key: 'serviceOrder',
        path: 'storeManage/serviceOrder',
        icon: <DashboardOutlined />,
        element: <ServiceOrder />,
      },
    ],
  },
]

export default storeManage
