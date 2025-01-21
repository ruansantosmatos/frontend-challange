export function generateCode(limit: number){
    let code: string = ''
    let index: number = 0
    
    const converter: number = 10
    const digits: string = '0123456789'

    for (index; index < limit; index++) { code += digits[Math.floor(Math.random() * converter)] }
    return code
}