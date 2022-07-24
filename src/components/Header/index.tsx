import { useQuery } from 'react-query'
import Loading from 'react-loading'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { positionApi } from '../../services/positionApi'

import { useCart } from '../../contexts/CartContext'

import { Logo } from '../Logo'

import { defaultTheme } from '../../styles/themes/default'

import * as S from './styles'

type Location = {
  name: string
  county: string
  region_code: string
}

type LocationResponse = {
  data: Location[]
}

const getGeolocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

const getCurrentLocation = async (): Promise<Location | undefined> => {
  if ('geolocation' in navigator) {
    try {
      const position = await getGeolocation()

      const response = await positionApi.get<LocationResponse>('/reverse', {
        params: {
          query: `${position.coords.latitude},${position.coords.longitude}`,
        },
      })

      return response.data.data[0]
    } catch {
      return undefined
    }
  } else {
    console.log('Geolocation services are not supported by this browser.')
  }
}

export function Header() {
  const { data: locationData, isLoading } = useQuery<Location | undefined>(
    'currentLocation',
    getCurrentLocation,
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 60, // 1 hour
    },
  )

  const { cart } = useCart()

  return (
    <S.HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>

      <div>
        <S.LocationBadge>
          <MapPin size={22} weight="fill" />
          {isLoading ? (
            <Loading
              width={22}
              height={22}
              type="bubbles"
              color={defaultTheme.colors['purple-500']}
            />
          ) : locationData ? (
            `${locationData.county}, ${locationData.region_code}`
          ) : (
            'Não disponível'
          )}
        </S.LocationBadge>

        <S.CartLink to="/checkout" title="Carrinho">
          {!!cart.items.length && (
            <S.QuantityItemsBadge>{cart.items.length}</S.QuantityItemsBadge>
          )}

          <ShoppingCart size={22} weight="fill" />
        </S.CartLink>
      </div>
    </S.HeaderContainer>
  )
}
