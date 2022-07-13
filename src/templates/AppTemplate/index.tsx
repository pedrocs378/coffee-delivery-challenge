import { Link, Outlet } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Logo } from '../../components/Logo'

import * as S from './styles'

export function AppTemplate() {
  return (
    <S.TemplateContainer>
      <header>
        <Link to="/">
          <Logo />
        </Link>

        <div>
          <S.LocationBadge>
            <MapPin size={22} weight="fill" />
            Valparaíso, SP
          </S.LocationBadge>

          <S.CartLink to="/">
            <ShoppingCart size={22} weight="fill" />
          </S.CartLink>
        </div>
      </header>

      <Outlet />
    </S.TemplateContainer>
  )
}
