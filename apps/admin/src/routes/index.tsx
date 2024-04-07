import { DashboardOutlined } from '@ant-design/icons'
import { Alert, Button, Result, Spin } from 'antd'
import { Children, lazy, Suspense } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { TOKEN, getStorage } from 'utils'
import Layout from '../components/Layout/index'
import Dashboard from '@/views/dashboard'
import ErrorPage from '@/views/error-page'
import Login from '@/views/login'
// 基础设置
import BasicSettingRoutes from '@/views/basic-setting/routes/index'
// 门店管理
import StoreManage from '@/views/store-management/routes/index'
// 商品管理
import CommodityManagement from '@/views/commodity-management/routes/index'
// 订单管理
import OrderManagement from '@/views/order-management/routes'
// 会员管理
import MemberManagement from '@/views/member/routes'

const Permissions = ({ children }: any) => {
  const token = getStorage(TOKEN)
  return token ? children : <Navigate to="/login" />
}

export const baseRouterList = [
  ...BasicSettingRoutes,
  ...StoreManage,
  ...CommodityManagement,
  ...OrderManagement,
  ...MemberManagement,
]

export const defaultRoutes: any = [
  {
    path: '/',
    element: <Permissions>{<Layout />}</Permissions>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: '/*',
        element: (
          <ErrorPage>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={
                <Link to={'/'}>
                  <Button type="primary">Back Home</Button>
                </Link>
              }
            />
          </ErrorPage>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]
