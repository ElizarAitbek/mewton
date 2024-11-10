import { links } from '@/utils/constants'
import { Link, useLocation } from 'react-router-dom'

export default function DockMenu() {
   const location = useLocation()

   return (
      <div className="bg-secondary-bg fixed bottom-4 left-1/2 w-11/12 max-w-md -translate-x-1/2 transform rounded-[15px] border py-2">
         <nav className="flex justify-around">
            {links.map((link) => (
               <Link
                  key={link.path}
                  to={link.path}
                  className={`flex flex-col items-center gap-1 px-3 py-1 ${
                     location.pathname === link.path
                        ? 'text-text-light'
                        : 'text-gray-500'
                  } transition-colors`}
               >
                  <link.icon className="w-8" />
                  <span className="text-xs">{link.label}</span>
               </Link>
            ))}
         </nav>
      </div>
   )
}
