import type { TCreateRoomRequest } from '@/components/http/types/create-room-request'
import type { TCreateRoomResponse } from '@/components/http/types/create-room-response'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: TCreateRoomRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: TCreateRoomResponse = await response.json()

      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] })
    },
  })
}
