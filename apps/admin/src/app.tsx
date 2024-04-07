import './App.scss'

import { cloneDeep } from 'lodash'
import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import { AuthContext, signIn, signOut, useAppDispatch, useAppSelector, useLocationListen } from './hooks'
import { MenuData } from '@/common/mock'
import { ADMIN } from 'utils'
import { Settings } from 'utils'

import { baseRouterList } from './routes'

function App() {
  const dispatch = useAppDispatch()

  const {
    user: { token, menu },
  } = useAppSelector((state) => state)

  const cloneDefaultRoutes = cloneDeep(baseRouterList)

  useLocationListen((r) => {
    document.title = `${Settings.title}: ${r.pathname.replace('/', '')}`
  })

  const element = useRoutes(cloneDefaultRoutes)

  return <AuthContext.Provider value={{ signIn, signOut }}>{element}</AuthContext.Provider>
}

export default App
