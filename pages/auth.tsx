import { useEffect, useState } from "react"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import axios from 'axios'

export default function AuthPage() {
  const scopes = 'user-top-read user-read-recently-played';
  const cookies = parseCookies();
  const cookie_config = {
    path: '/',
    maxAge: 3600
  }

  useEffect(() => {
    // If there is a URL token, store that as a cookie.
    let urlToken = new URLSearchParams(window.location.hash.substr(1)).get('access_token');
    if (urlToken)
      setCookie(null, 'ms-user-code', urlToken, cookie_config);

    // Check if there is a cookie stored as a token, validate it, otherwise, redirect to Spotify login.
    let token = { cookies }.cookies['ms-user-code'];
    if (token) {
      axios.get('/api/validate').then((res) => {
        console.log(res.data);
      }, (err) => {
        console.log(err);
      });
    } else {
      window.location.href = 'https://accounts.spotify.com/authorize' +
        '?response_type=token' +
        '&client_id=' + process.env.NEXT_PUBLIC_CLIENT_ID +
        '&scope=' + encodeURIComponent(scopes) +
        '&redirect_uri=' + encodeURIComponent(process.env.NEXT_PUBLIC_REDIRECT_URL || '');
    }
  }, []);

  return (
    <p>Just a second..</p>
  )
}