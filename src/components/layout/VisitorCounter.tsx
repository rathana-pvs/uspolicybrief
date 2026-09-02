'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function VisitorCounter() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // 1. Setup global queue
    window._wau = window._wau || []
    window._wau.push(['dynamic', '4e9mbhwyhk', 'xyn', 'c4302bffffff', 'small'])

    // 2. Ensure config script exists with exact ID required by whos.amung.us
    if (!document.getElementById('_wauxyn')) {
      const configScript = document.createElement('script')
      configScript.id = '_wauxyn'
      configScript.innerHTML = 'var _wau = _wau || []; _wau.push(["dynamic", "4e9mbhwyhk", "xyn", "c4302bffffff", "small"]);'
      document.body.appendChild(configScript)
    }

    // 3. Load dynamic.js from secure widgets.amung.us HTTPS CDN
    if (!document.getElementById('_wau_loader')) {
      const loaderScript = document.createElement('script')
      loaderScript.id = '_wau_loader'
      loaderScript.async = true
      loaderScript.src = 'https://widgets.amung.us/dynamic.js'
      document.body.appendChild(loaderScript)
    }

    // 4. Send ping to whos.amung.us with accurate title and URL after title settles
    const timeoutId = setTimeout(() => {
      const pageTitle = document.title || 'US Policy Brief'
      const pageUrl = window.location.href
      const referrer = document.referrer || ''
      const randomId = Math.ceil(99999 * Math.random())

      const pingScript = document.createElement('script')
      pingScript.id = `_wau_ping_${Date.now()}`
      pingScript.async = true
      pingScript.src = `https://whos.amung.us/pingjs/?k=4e9mbhwyhk&t=${encodeURIComponent(pageTitle)}&c=d&x=${encodeURIComponent(pageUrl)}&y=${encodeURIComponent(referrer)}&v=27&r=${randomId}`
      document.head.appendChild(pingScript)
    }, 150)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [pathname])

  return (
    <div
      id="wau-container-hidden"
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
        opacity: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
