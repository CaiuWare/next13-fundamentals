import { ReactNode } from 'react'

export default function AuthLayout({ children }: { chidren: ReactNode }) {
  return (
    <div>
      <h1 className="text-xl font-bold">Logo do App</h1>
      <div>{children}</div>
    </div>
  )
}