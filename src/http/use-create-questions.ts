import type { TCreateQuestionRequest } from '@/http/types/create-question-request'
import type { TCreateQuestionResponse } from '@/http/types/create-question-response'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCreateQuestions(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: TCreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const result: TCreateQuestionResponse = await response.json()

      return result
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] })
    },
  })
}
