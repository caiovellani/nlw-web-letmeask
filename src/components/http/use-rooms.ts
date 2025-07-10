import type { TGetRoomsAPIResponse } from '@/components/http/types/get-rooms-response'
import { useQuery } from '@tanstack/react-query'

export function useRooms() {
  return useQuery({
    queryKey: ['get-rroms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: TGetRoomsAPIResponse = await response.json()

      return result
    },
  })
}
