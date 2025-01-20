import { BASE_URL, headers } from "@/api/config";
import { IEquipamentsInfo, TRequestEquipaments } from "@/types/Dashboard";

export type IRequestByField = {
    field: string,
    value: string,
    page: number,
    limit: number
}

export async function GetEquipamentByField({ field, value }: IRequestByField): Promise<IEquipamentsInfo[] | Error> {
    try {
        const url = `${BASE_URL}/equipaments?${field}=${value.trim()}`
        console.log('url', url)
        const request = await fetch(url, { headers: headers })

        const data = request.json().then(info => { return info })
        return data
    }
    catch (error) {
        throw error
    }
}