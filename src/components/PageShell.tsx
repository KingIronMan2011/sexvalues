import type { PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'

import Footer from './Footer'
import Header from './Header'

type PageShellProps = PropsWithChildren<{
  title?: string
}>

export default function PageShell({
  children,
  title = 'SexValues',
}: PageShellProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme')
    return stored === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="page-shell">
      <div className="page-container">
        <Header
          theme={theme}
          onToggleTheme={() =>
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
          }
        />
        <h1 className="title">{title}</h1>
        <hr className="my-3 border-white/10" />
        {children}
        <hr className="my-5 border-white/10" />
        <Footer />
      </div>
    </div>
  )
}
