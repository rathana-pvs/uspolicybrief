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

    // 4. Send ping to whos.amung.us for real-time URL and active reader stats
    const pingScript = document.createElement('script')
    pingScript.async = true
    pingScript.src = `https://whos.amung.us/pingjs/?k=4e9mbhwyhk&c=d&x=xyn&u=${encodeURIComponent(window.location.href)}&r=${encodeURIComponent(document.referrer)}&t=${Date.now()}`
    document.head.appendChild(pingScript)

    return () => {
      if (pingScript.parentNode) {
        pingScript.parentNode.removeChild(pingScript)
      }
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
