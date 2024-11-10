import { Outlet } from 'react-router-dom'
import DockMenu from './dock-menu'

export default function Layout() {
   return (
      <>
         <Outlet />
         <DockMenu />
      </>
   )
}
