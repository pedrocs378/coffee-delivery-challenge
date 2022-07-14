import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

import * as S from './styles'

export function AppTemplate() {
  return (
    <S.TemplateContainer>
      <Header />

      <Outlet />
    </S.TemplateContainer>
  )
}
