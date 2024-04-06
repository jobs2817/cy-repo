import { DashboardOutlined } from '@ant-design/icons'
import { Alert, Button, Result, Spin } from 'antd'
import { lazy, Suspense } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { TOKEN, getStorage } from 'utils'
import Layout from '../components/Layout/index'
import OutletLayoutRouter from '../components/OutletLayoutRouter'
import type { MenuItem } from '../components/Layout/layout'
import Dashboard from '@/views/dashboard'
import ErrorPage from '@/views/error-page'
import Login from '@/views/login'
import MemberCenter from '@/views/member-center/pages/list'

const Permissions = ({ children }: any) => {
  const token = getStorage(TOKEN)
  return token ? children : <Navigate to="/login" />
}

export const baseRouterList = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    path: 'dashboard',
    icon: <DashboardOutlined />,
    filepath: 'pages/dashboard/index.tsx',
  },
  {
    label: '会员中心',
    key: 'member',
    path: 'memberCenter',
    icon: <DashboardOutlined />,
    filepath: 'pages/dashboard/index.tsx',
  },
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
    path: 'memberCenter',
    element: <Permissions>{<Layout />}</Permissions>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'list',
        element: <MemberCenter />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]
