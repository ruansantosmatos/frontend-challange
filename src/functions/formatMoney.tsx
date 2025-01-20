type country = 'pt-Br' | 'en-US' 

type currency = 'USD' | 'BRL'

export interface IFormatCurrency {
    value: string,
    placeholder?: string,
    country: country,
    format: currency
}

export function formatMoney({value, placeholder, country, format }: IFormatCurrency) {
    const valor = value.replace(/\D/g, '')
    const convert = parseFloat(valor) / 100

    const formatMoney = new Intl.NumberFormat(country, { style: 'currency', currency: format, })
    const formatedValue = formatMoney.format(convert)

    const invalidValue = isNaN(convert)
    if (invalidValue) { return placeholder }
    else { return formatedValue }
}