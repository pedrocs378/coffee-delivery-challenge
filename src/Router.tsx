import { Route, Routes } from 'react-router-dom'

import { AppTemplate } from './templates/AppTemplate'

import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppTemplate />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
