import { CreateRoom } from '@/pages/create-room'
import { Room } from '@/pages/room'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateRoom />} index />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  )
}
