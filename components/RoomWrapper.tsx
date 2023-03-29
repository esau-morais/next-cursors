'use client'

import { RoomProvider } from '@/liveblocks.config'
import { useSearchParams } from 'next/navigation'
import { ReactNode, useMemo } from 'react'

/**
 * This function is used when deploying an example on liveblocks.io.
 * You can ignore it completely if you run the example locally.
 */
function useOverrideRoomId(roomId: string) {
  const { get } = useSearchParams()
  const overrideRoomId = useMemo(() => {
    const roomIdQuery = get(roomId)
    return roomIdQuery ? `${roomId}-${roomIdQuery}` : roomId
  }, [get, roomId])

  return overrideRoomId
}
export function RoomWrapper({ children }: { children: ReactNode }) {
  const roomId = useOverrideRoomId('nextjs-live-cursors')

  return (
    <RoomProvider
      id={roomId}
      /**
       * Initialize the cursor position to null when joining the room
       */
      initialPresence={{
        cursor: null,
      }}
    >
      {children}
    </RoomProvider>
  )
}
