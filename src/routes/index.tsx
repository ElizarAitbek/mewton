import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/layout/layout'
import MainPage from '@/pages/main-page'
import ErrorPage from '@/pages/error-page'
import BoostPage from '@/pages/boost-page'
import TasksPage from '@/pages/tasks-page'
import FriendsPage from '@/pages/friends-page'
import InfoPage from '@/pages/info-page'
import WalletPage from '@/pages/wallet-page'

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <MainPage />,
         },
         {
            path: 'boosts',
            element: <BoostPage />,
         },
         {
            path: 'tasks',
            element: <TasksPage />,
         },
         {
            path: 'frens',
            element: <FriendsPage />,
         },
         {
            path: 'info',
            element: <InfoPage />,
         },
         {
            path: 'wallet',
            element: <WalletPage />,
         },
      ],
   },
])
