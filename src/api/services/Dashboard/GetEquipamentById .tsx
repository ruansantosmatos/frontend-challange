import { BASE_URL, headers } from "@/api/config";
import { IEquipamentsInfo } from "@/types/Dashboard";

export async function GetEquipamentById(id: string): Promise<IEquipamentsInfo[] | Error> {
    try {
        const url = `${BASE_URL}/equipaments?id=${id}`
        const request = await fetch(url, { headers: headers })

        const data = request.json().then(info => { return info })
        return data
    }
    catch (error) {
        throw error
    }
}