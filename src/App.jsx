import ReactGA from 'react-ga4'
import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import { Analytics } from '@vercel/analytics/react' // 📊 Vercel Analytics
import { SpeedInsights } from '@vercel/speed-insights/react' // ⚡ Vercel Speed Insights

/*
  IMPORTANTE: inline styles não respondem a CSS variables nem a [data-theme].
  Por isso o main e o container agora usam classes CSS definidas em theme.css.
  As classes .app-main e .app-container correspondem exatamente ao visual anterior.
*/

export default function App() {
  const location = useLocation()
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
    })
  }, [location])
  return (
    <>
      <Header />
      <main className="app-main">
        <div className="app-container">
          <Outlet />
        </div>
      </main>
      <Footer />
      <CookieBanner />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
