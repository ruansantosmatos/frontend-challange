export function generateEAN13Code(baseCode: string) {
    let sum = 0;

    for (let i = 0; i < 12; i++) {
        let digit = parseInt(baseCode[i], 10);
        sum += i % 2 === 0 ? digit : digit * 3;
    }

    const checksum = (10 - (sum % 10)) % 10;
    return baseCode + checksum;
}