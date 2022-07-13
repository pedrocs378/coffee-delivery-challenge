import { Outlet } from 'react-router-dom'

export function AppTemplate() {
  return (
    <div>
      <header>Header</header>

      <Outlet />
    </div>
  )
}
