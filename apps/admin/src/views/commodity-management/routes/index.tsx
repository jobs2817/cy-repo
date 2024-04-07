import { DashboardOutlined } from '@ant-design/icons'
import Layout from '../../../components/Layout/index'
import CommodityList from '../pages/commodity-list'
import ProductPicture from '../pages/product-picture'
import PriceConfig from '../pages/price-configuration'
import ExchangeRates from '../pages/exchange-rates'

const commodityManagement = [
  {
    label: '商品管理',
    key: 'commodityManagement',
    path: 'commodityManagement',
    icon: <DashboardOutlined />,
    element: <Layout />,
    children: [
      {
        label: '商品列表',
        key: 'commodityList',
        path: 'storeManage/commodityList',
        icon: <DashboardOutlined />,
        element: <CommodityList />,
      },
      {
        label: '产品展示图片',
        key: 'productPicture',
        path: 'storeManage/productPicture',
        icon: <DashboardOutlined />,
        element: <ProductPicture />,
      },
      {
        label: '价格配置',
        key: 'priceConfig',
        path: 'storeManage/priceConfig',
        icon: <DashboardOutlined />,
        element: <PriceConfig />,
      },
      {
        label: '汇率表',
        key: 'exchangeRates',
        path: 'storeManage/exchangeRates',
        icon: <DashboardOutlined />,
        element: <ExchangeRates />,
      },
    ],
  },
]

export default commodityManagement
