import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useCallback, useState } from 'react'

import { CoffeeType } from '../../graphql/generated'

import * as S from './styles'

enum NormalizedCoffeeType {
  alcoholic = 'Alcoólico',
  frozen = 'Gelado',
  special = 'Especial',
  traditional = 'Tradicional',
  with_milk = 'Com Leite',
}

type CoffeeCardProps = {
  name: string
  description?: string
  types: CoffeeType[]
  imageUrl?: string
  price: string
}

export function CoffeeCard({
  name,
  description,
  types,
  imageUrl,
  price,
}: CoffeeCardProps) {
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

  return (
    <S.CoffeeCardContainer>
      {imageUrl && <img src={imageUrl} alt={name} />}

      <S.CoffeeTypesList>
        {types.map((coffeeType) => {
          return (
            <S.TypeBadge key={coffeeType}>
              {NormalizedCoffeeType[coffeeType]}
            </S.TypeBadge>
          )
        })}
      </S.CoffeeTypesList>

      <strong>{name}</strong>
      <p>{description}</p>

      <S.CardFooter>
        <S.CoffeePrice>
          <span>R$</span> {price}
        </S.CoffeePrice>

        <div>
          <S.CoffeeQuantityContainer>
            <button
              type="button"
              title="Diminuir"
              onClick={() => handleChangeCoffeeAmount('decrease')}
            >
              <Minus size={14} weight="bold" />
            </button>
            <span>{coffeeAmount}</span>
            <button
              type="button"
              title="Aumentar"
              onClick={() => handleChangeCoffeeAmount('increase')}
            >
              <Plus size={14} weight="bold" />
            </button>
          </S.CoffeeQuantityContainer>

          <S.AddCartButton type="button" title="Adicionar ao carrinho">
            <ShoppingCartSimple size={22} weight="fill" />
          </S.AddCartButton>
        </div>
      </S.CardFooter>
    </S.CoffeeCardContainer>
  )
}
