import { RoomWrapper } from '@/components/RoomWrapper'
import { ReactNode } from 'react'
import './globals.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <RoomWrapper>{children}</RoomWrapper>
      </body>
    </html>
  )
}
