export function formatMoneyBRL(value: number) {
    const valor = value
    const convert = valor / 100

    const formatMoney = new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', })
    const formatedValue = formatMoney.format(valor)

    const invalidValue = isNaN(convert)
    if (invalidValue) { return 'R$ 0,00' }
    else { return formatedValue }
}