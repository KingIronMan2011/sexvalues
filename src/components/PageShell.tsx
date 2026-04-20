import type { PropsWithChildren } from 'react'

type PageShellProps = PropsWithChildren<{
  title?: string
}>

export default function PageShell({
  children,
  title = 'SexValues',
}: PageShellProps) {
  return (
    <div className="page-shell">
      <div className="page-container">
        <h1 className="title">{title}</h1>
        <hr className="my-3 border-white/10" />
        {children}
      </div>
    </div>
  )
}
