import { IconProps } from 'phosphor-react'

import { defaultTheme } from '../../styles/themes/default'

import * as S from './styles'

type RoundedIconProps = {
  bgColor?: keyof typeof defaultTheme.colors
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

export function RoundedIcon({
  icon: Icon,
  bgColor = 'purple-500',
}: RoundedIconProps) {
  return (
    <S.RoundedIconContainer bgColor={bgColor}>
      <Icon weight="fill" />
    </S.RoundedIconContainer>
  )
}
