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
        <h1 className="title" style={{ marginBottom: '0.25rem' }}>
          {title}
        </h1>
        <hr style={{ margin: '0.75rem 0 1.25rem' }} />
        {children}
        <hr style={{ margin: '2rem 0 1rem' }} />
        <Footer />
      </div>
    </div>
  )
}
