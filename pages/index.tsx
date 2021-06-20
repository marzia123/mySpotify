import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { LoginIcon } from '@heroicons/react/outline'
import Navbar from '../components/layout/navbar'

export default function HomePage() {
  const cookies = parseCookies();

  // Redirect the user if they are logged in
  useEffect(() => {
    if ({ cookies }.cookies['ms-user-code'])
      Router.push('/auth');
  }, []);

  return (
    <>
      <Navbar loggedIn={false} />

      <div className="px-4">
        <div className="text-center font-display mt-10">
          <h1 className="text-5xl md:text-7xl font-extrabold">Your music <span className="text-green-900">speaks</span>.</h1>
        </div>

        <div className="mx-auto max-w-md md:max-w-2xl w-100 text-center mt-3">
          <h2 className="md:text-xl">See which artists and tracks you've listened to the most within the past month, 
            six months, or even all-time in a single place.</h2>
        </div>

        <div className="text-center mt-5">
          <Link href="/auth">
            <a>
              <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <LoginIcon className="w-6 h-6 mr-2" /> Sign in via Spotify
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
