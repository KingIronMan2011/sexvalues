import type { PropsWithChildren } from 'react'

type PageShellProps = PropsWithChildren<{
  title?: string
}>

export default function PageShell({
  children,
  title = 'SexValues',
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#bbbbbb] px-0 py-0">
      <div className="mx-auto min-h-screen w-[80%] border-x-[20px] border-[#eeeeee] bg-[#dddddd] p-8">
        <h1 className="title">{title}</h1>
        <hr className="my-2 border-[#222222]" />
        {children}
      </div>
    </div>
  )
}
