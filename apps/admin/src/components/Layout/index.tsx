import React from 'react'
import {
  DashboardOutlined,
  GithubFilled,
  InfoCircleFilled,
  LoginOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons'
import { ProBreadcrumb, ProConfigProvider, ProSettings } from '@ant-design/pro-components'
import ProLayout from '@ant-design/pro-layout'
import { Input, Switch, Tooltip } from 'antd'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Settings } from 'utils'

import { AuthContext, useAppDispatch, useAppSelector, KeepAlive, useLocationListen } from '../../hooks'
import { baseRouterList } from '../../routes'
import { treeRouter } from 'utils'

export default () => {
  const { user } = useAppSelector((state) => state)
  const navigate = useNavigate()
  const location = useLocation()
  const [pathname, setPathname] = useState(location.pathname)
  const dispatch = useAppDispatch()
  const { signOut } = useContext(AuthContext)

  useLocationListen((listener) => {
    setPathname(listener.pathname)
  })

  const settings: ProSettings | undefined = {
    title: Settings.title.slice(0, 11),
    layout: 'mix',
  }

  return (
    <ProConfigProvider>
      <div
        id="admin-pro-layout"
        style={{
          height: '100vh',
        }}
      >
        <ProLayout
          fixSiderbar
          siderWidth={245}
          logo={Settings.logo}
          ErrorBoundary={false}
          route={{
            path: '/',
            routes: treeRouter([...baseRouterList]),
          }}
          {...settings}
          location={{
            pathname,
          }}
          waterMarkProps={{
            content: Settings.title,
          }}
          appList={[
            {
              icon: Settings.logo,
              title: 'Blog',
              desc: 'hzdjs.cn',
              url: 'https://hzdjs.cn',
            },
          ]}
          avatarProps={{
            src: Settings.logo,
            size: 'small',
            title: <div>{(user.token as unknown as { username: string })?.username}</div>,
          }}
          headerContentRender={() => <ProBreadcrumb />}
          actionsRender={(props) => {
            if (props.isMobile) return []
            return [
              props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                <div
                  key="SearchOutlined"
                  aria-hidden
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginInlineEnd: 24,
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                  }}
                ></div>
              ) : undefined,
              <Tooltip placement="bottom" title={'Sign Out'}>
                <a>
                  <LoginOutlined
                    onClick={async () => {
                      await signOut(dispatch)
                      navigate('/login')
                    }}
                  />
                </a>
              </Tooltip>,
            ]
          }}
          menuFooterRender={(props) => {
            if (props?.collapsed || props?.isMobile) return undefined
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <QuestionCircleFilled key="QuestionCircleFilled" />
                <InfoCircleFilled key="InfoCircleFilled" />
              </div>
            )
          }}
          menuItemRender={(item, dom) => (
            <Link
              to={item?.path || '/'}
              onClick={() => {
                setPathname(item.path || '/')
              }}
            >
              {dom}
            </Link>
          )}
          onMenuHeaderClick={() => navigate('/')}
        >
          <ErrorBoundary>
            <KeepAlive include={[]} keys={[]} />
          </ErrorBoundary>
        </ProLayout>
      </div>
    </ProConfigProvider>
  )
}
