import { DashboardOutlined } from '@ant-design/icons'
import Layout from '../../../components/Layout/index'
import SalesArea from '../pages/sales-area'
import CountrySetting from '../pages/country-setting'
import RoleManage from '../pages/role-management'
import AccountManage from '../pages/account-management'

const basicSetting = [
  {
    label: '基础设置',
    key: 'basicSetting',
    path: 'basicSetting',
    icon: <DashboardOutlined />,
    element: <Layout />,
    children: [
      {
        label: '销售区域',
        key: 'salesArea',
        path: '/basicSetting/salesArea',
        icon: <DashboardOutlined />,
        element: <SalesArea />,
      },
      {
        label: '国家设置',
        key: 'countrySetting',
        path: 'basicSetting/countrySetting',
        icon: <DashboardOutlined />,
        element: <CountrySetting />,
      },
      {
        label: '角色管理',
        key: 'roleManage',
        path: 'basicSetting/roleManage',
        icon: <DashboardOutlined />,
        element: <RoleManage />,
      },
      {
        label: '账号管理',
        key: 'accountManage',
        path: 'basicSetting/accountManage',
        icon: <DashboardOutlined />,
        element: <AccountManage />,
      },
    ],
  },
]

export default basicSetting
