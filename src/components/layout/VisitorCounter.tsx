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
    configScript.id = '_wau3fw'
    configScript.innerHTML = 'var _wau = _wau || []; _wau.push(["dynamic", "wxcagsildc", "3fw", "c4302bffffff", "small"]);'

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
      className="mt-6 flex items-center justify-start opacity-70 hover:opacity-100 transition-opacity duration-300"
      style={{ minHeight: '30px' }}
    />
  )
}
