import { Link } from 'react-router-dom'

export default function ErrorPage() {
   return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
         <h1 className="text-9xl font-bold text-blue-600">404</h1>
         <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
         <p className="mt-2 text-lg text-gray-600">
            Sorry, the page you are looking for does not exist.
         </p>
         <Link
            to="/"
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white shadow transition-colors hover:bg-blue-700"
         >
            Go Back Home
         </Link>
      </div>
   )
}
