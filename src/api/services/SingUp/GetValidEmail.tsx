import { BASE_URL, headers } from "@/api/config";
import { ISingUp } from "@/types/SingUp";

export async function GetValidEmail(email: string): Promise<ISingUp[] | Error> {
    try {
        const url = `${BASE_URL}/users?email=${email}`
        const request = await fetch(url, { headers: headers })

        const data = request.json().then(info => { return info })
        return data
    }
    catch (error) {
        throw error
    }
}