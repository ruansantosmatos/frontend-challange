import { BASE_URL, headers } from "@/api/config";

export interface IDataSingIn {
    email: string,
    password: string
}

export async function SingIn(email: string, password: string): Promise<IDataSingIn[] | Error> {
    try {
        const url = `${BASE_URL}/users?email=${email}&password=${password}`
        const request = await fetch(url, { headers: headers })

        const data = request.json().then(info => { return info })
        return data
    }
    catch (error) {
        throw error
    }
}