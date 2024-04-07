import { DashboardOutlined } from '@ant-design/icons'
import Layout from '../../../components/Layout/index'
import MemberList from '../pages/list'
import MemberGrade from '../pages/grade'
import TagGroup from '../pages/tag-group'
import GrowthConfig from '../pages/growth'
import PointTask from '../pages/point-task'
import EquityConfig from '../pages/equity'

const storeManage = [
  {
    label: '会员管理',
    key: 'memberManagement',
    path: 'memberManagement',
    icon: <DashboardOutlined />,
    element: <Layout />,
    children: [
      {
        label: '会员列表',
        key: 'memberList',
        path: 'memberManagement/list',
        icon: <DashboardOutlined />,
        element: <MemberList />,
      },
      {
        label: '会员等级',
        key: 'memberGrade',
        path: 'memberManagement/memberGrade',
        icon: <DashboardOutlined />,
        element: <MemberGrade />,
      },
      {
        label: '标签分组',
        key: 'tagGroup',
        path: 'memberManagement/tagGroup',
        icon: <DashboardOutlined />,
        element: <TagGroup />,
      },
      {
        label: '成长值配置',
        key: 'growth',
        path: 'memberManagement/growth',
        icon: <DashboardOutlined />,
        element: <GrowthConfig />,
      },
      {
        label: '积分任务配置',
        key: 'pointTask',
        path: 'memberManagement/pointTask',
        icon: <DashboardOutlined />,
        element: <PointTask />,
      },
      {
        label: '会员权益',
        key: 'equity',
        path: 'memberManagement/equity',
        icon: <DashboardOutlined />,
        element: <EquityConfig />,
      },
    ],
  },
]

export default storeManage
