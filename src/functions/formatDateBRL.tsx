
export function formatDateBRL(date: string) {
    const fullDate = date.split('-')

    if (fullDate.length < 0) {
        return date
    }

    const year = fullDate[0]
    const month = fullDate[1]

    const day = fullDate[2]
    const newDateFormat = `${day}/${month}/${year}`
    return newDateFormat
}