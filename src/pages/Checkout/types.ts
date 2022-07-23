export type OrderForm = {
  cep: string
  street: string
  number: number | null
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

export type PaymentType = 'credit_card' | 'debit_card' | 'cash'

export type CepData = {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}
