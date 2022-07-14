import { ShoppingCartSimple } from 'phosphor-react'

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

        <S.AddCartButton type="button" title="Adicionar ao carrinho">
          <ShoppingCartSimple size={22} weight="fill" />
        </S.AddCartButton>
      </S.CardFooter>
    </S.CoffeeCardContainer>
  )
}
