import { useCallback, useMemo } from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { toast } from 'react-hot-toast'

import { useCart } from '../../contexts/CartContext'

import { useCoffeesQuery } from '../../graphql/generated'

import { CoffeeCard } from '../../components/CoffeeCard'

import coffee from '../../assets/images/coffee.png'

import * as S from './styles'
import { RoundedIcon } from '../../components/RoundedIcon'

export function Home() {
  const { data } = useCoffeesQuery()

  const { addNewItemToCart } = useCart()

  const handleAddCoffeeToCart = useCallback(
    (coffee: typeof coffees[0], amount: number) => {
      addNewItemToCart(
        {
          ...coffee,
          imageUrl: coffee.image?.url,
        },
        amount,
      )

      toast.success(`${amount}x ${coffee.name} adicionado`)
    },
    [addNewItemToCart],
  )

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
              <RoundedIcon icon={ShoppingCart} bgColor="yellow-700" />
              Compra simples e segura
            </S.DeliveryInfoLabel>
            <S.DeliveryInfoLabel>
              <RoundedIcon icon={Package} bgColor="gray-700" />
              Embalagem mantém o café intacto
            </S.DeliveryInfoLabel>
            <S.DeliveryInfoLabel>
              <RoundedIcon icon={Timer} bgColor="yellow-500" />
              Entrega rápida e rastreada
            </S.DeliveryInfoLabel>
            <S.DeliveryInfoLabel>
              <RoundedIcon icon={Coffee} />O Café chega fresquinho até você
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
                coffee={{
                  ...coffee,
                  imageUrl: coffee.image?.url,
                  description: coffee.description ?? undefined,
                }}
                onAddToCardClick={(amount) =>
                  handleAddCoffeeToCart(coffee, amount)
                }
              />
            )
          })}
        </S.CoffeesList>
      </S.OurCoffeesContainer>
    </S.HomeContainer>
  )
}
