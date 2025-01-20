import { BASE_URL, headers } from "@/api/config";
import { TRequestEquipaments } from "@/types/Dashboard";

export async function GetEquipaments(page: number = 1, limit: number = 10): Promise<TRequestEquipaments | Error> {
    try {
        const url = `${BASE_URL}/equipaments?_page=${page}&_per_page=${limit}`
        const request = await fetch(url, { headers: headers })

        const data = request.json().then(info => { return info })

        return data
    }
    catch (error) {
        throw error
    }
}