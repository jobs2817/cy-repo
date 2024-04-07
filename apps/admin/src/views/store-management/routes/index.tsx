import { DashboardOutlined } from '@ant-design/icons'
import Layout from '../../../components/Layout/index'
import StoreList from '../pages/store-list'
import StoreRelated from '../pages/store-related'

const storeManage = [
  {
    label: '门店管理',
    key: 'storeManage',
    path: 'storeManage',
    icon: <DashboardOutlined />,
    element: <Layout />,
    children: [
      {
        label: '门店列表',
        key: 'storeList',
        path: 'storeManage/storeList',
        icon: <DashboardOutlined />,
        element: <StoreList />,
      },
      {
        label: '员工与门店关系',
        key: 'storeRelated',
        path: 'storeManage/storeRelated',
        icon: <DashboardOutlined />,
        element: <StoreRelated />,
      },
    ],
  },
]

export default storeManage
