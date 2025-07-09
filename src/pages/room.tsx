import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

type TRoomParams = {
  roomId: string
}

export function Room() {
  const params = useParams<TRoomParams>()

  if (!params.roomId) {
    return <Navigate to="/" replace />
  }

  return <div>Room Details {JSON.stringify(params)}</div>
}
