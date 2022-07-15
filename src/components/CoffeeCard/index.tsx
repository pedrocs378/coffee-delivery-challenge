import { memo, useCallback, useState } from 'react'
import { ShoppingCartSimple } from 'phosphor-react'
import lodash from 'lodash'

import { CoffeeType } from '../../graphql/generated'

import { CartItemQuantity } from '../CoffeeQuantity'

import * as S from './styles'

enum NormalizedCoffeeType {
  alcoholic = 'Alcoólico',
  frozen = 'Gelado',
  special = 'Especial',
  traditional = 'Tradicional',
  with_milk = 'Com Leite',
}

type CoffeeCardProps = {
  coffee: {
    name: string
    description?: string
    types: CoffeeType[]
    imageUrl?: string
    formattedPrice: string
  }
  onAddToCardClick?: (amount: number) => void
}

function CoffeeCardComponent({ coffee, onAddToCardClick }: CoffeeCardProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  const handleChangeCoffeeAmount = useCallback(
    (operation: 'increase' | 'decrease') => {
      if (operation === 'increase') {
        setCoffeeAmount((amount) => amount + 1)
      } else {
        setCoffeeAmount((amount) => {
          if (amount <= 1) return amount

          return amount - 1
        })
      }
    },
    [],
  )

  const handleClickAddCoffeeToCart = () => {
    if (onAddToCardClick) {
      onAddToCardClick(coffeeAmount)

      setCoffeeAmount(1)
    }
  }

  return (
    <S.CoffeeCardContainer>
      {coffee.imageUrl && <img src={coffee.imageUrl} alt={coffee.name} />}

      <S.CoffeeTypesList>
        {coffee.types.map((coffeeType) => {
          return (
            <S.TypeBadge key={coffeeType}>
              {NormalizedCoffeeType[coffeeType]}
            </S.TypeBadge>
          )
        })}
      </S.CoffeeTypesList>

      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>

      <S.CardFooter>
        <S.CoffeePrice>
          <span>R$</span> {coffee.formattedPrice}
        </S.CoffeePrice>

        <div>
          <CartItemQuantity
            value={coffeeAmount}
            onChange={handleChangeCoffeeAmount}
          />

          <S.AddCartButton
            type="button"
            title="Adicionar ao carrinho"
            onClick={handleClickAddCoffeeToCart}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </S.AddCartButton>
        </div>
      </S.CardFooter>
    </S.CoffeeCardContainer>
  )
}

export const CoffeeCard = memo(CoffeeCardComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.coffee, nextProps.coffee)
})
