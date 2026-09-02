'use client'

import { useEffect, useRef } from 'react'

export function VisitorCounter() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return

    // Clean up container
    if (containerRef.current) {
      containerRef.current.innerHTML = ''
    }

    // 1. Create whos.amung.us configuration script
    const configScript = document.createElement('script')
    configScript.id = '_wauxyn'
    configScript.innerHTML = 'var _wau = _wau || []; _wau.push(["dynamic", "4e9mbhwyhk", "xyn", "c4302bffffff", "small"]);'

    // 2. Create whos.amung.us execution script
    const execScript = document.createElement('script')
    execScript.async = true
    execScript.src = '//waust.at/d.js'

    // Append to container
    if (containerRef.current) {
      containerRef.current.appendChild(configScript)
      containerRef.current.appendChild(execScript)
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      style={{ display: 'none' }}
      aria-hidden="true"
    />
  )
}
