import { useMemo } from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeCard } from '../../components/CoffeeCard'

import { useCoffeesQuery } from '../../graphql/generated'

import coffee from '../../assets/coffee.png'

import * as S from './styles'

export function Home() {
  const { data } = useCoffeesQuery()

  const coffees = useMemo(() => {
    if (!data?.coffees) return []

    return data?.coffees.map((coffee) => {
      return {
        ...coffee,
        formattedPrice: coffee.price.toLocaleString('pt-BR', {
          style: 'decimal',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      }
    })
  }, [data?.coffees])

  return (
    <S.HomeContainer>
      <S.CoffeeDetailsContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <S.DeliveryInfoGrid>
            <S.DeliveryInfoLabel>
              <S.DeliveryInfoIcon backgroundColor="yellow-700">
                <ShoppingCart weight="fill" />
              </S.DeliveryInfoIcon>
              Compra simples e segura
            </S.DeliveryInfoLabel>
            <S.DeliveryInfoLabel>
              <S.DeliveryInfoIcon backgroundColor="gray-700">
                <Package weight="fill" />
              </S.DeliveryInfoIcon>
              Embalagem mantém o café intacto
            </S.DeliveryInfoLabel>
            <S.DeliveryInfoLabel>
              <S.DeliveryInfoIcon backgroundColor="yellow-500">
                <Timer weight="fill" />
              </S.DeliveryInfoIcon>
              Entrega rápida e rastreada
            </S.DeliveryInfoLabel>
            <S.DeliveryInfoLabel>
              <S.DeliveryInfoIcon backgroundColor="purple-500">
                <Coffee weight="fill" />
              </S.DeliveryInfoIcon>
              O Café chega fresquinho até você
            </S.DeliveryInfoLabel>
          </S.DeliveryInfoGrid>
        </div>

        <img src={coffee} alt="Grãos e copo de café" />
      </S.CoffeeDetailsContainer>

      <S.OurCoffeesContainer>
        <strong>Nossos cafés</strong>

        <S.CoffeesList>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.slug}
                name={coffee.name}
                description={coffee.description ?? undefined}
                types={coffee.types}
                imageUrl={coffee.image?.url}
                price={coffee.formattedPrice}
              />
            )
          })}
        </S.CoffeesList>
      </S.OurCoffeesContainer>
    </S.HomeContainer>
  )
}
