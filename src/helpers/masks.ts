export function cepMask(value: string) {
  if (!value?.trim()) return ''

  return value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2')
}

export function currencyMask(value: string) {
  if (!value.trim()) return ''

  const valueWithoutDigits = value.replace(/(\D)/g, '')
  const isNumber = !isNaN(Number(valueWithoutDigits))
  const valueAsNumber = isNumber ? Number(valueWithoutDigits) : 0

  let formatedValue = (valueAsNumber / 100)
    .toFixed(2)
    .replace('.', ',')
    .replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
      return '.' + s
    })
  if (formatedValue.substring(0, 1) === '.') {
    formatedValue = formatedValue.substring(1)
  }

  return 'R$ ' + formatedValue
}

export function removeCurrencyMask(value: string): number {
  if (!value?.trim()) return 0

  const normalizedValue = value.replace(/\D/g, '')

  const valueAsNumber = Number(normalizedValue) / 100

  return valueAsNumber
}
