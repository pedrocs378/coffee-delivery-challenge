import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import coffee from '../../assets/coffee.png'

import * as S from './styles'

export function Home() {
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
      </S.OurCoffeesContainer>
    </S.HomeContainer>
  )
}
