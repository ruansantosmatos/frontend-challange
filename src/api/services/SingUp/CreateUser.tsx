import { BASE_URL, headers } from "@/api/config";
import { IFields } from "@/components/modules/Dashboard/FormEquipament";
import { ISingUp } from "@/types/SingUp";

export async function CreateUser(data: ISingUp): Promise<string | Error> {
    try {
        const url = `${BASE_URL}/users`
        
        const request = await fetch(url, { 
            headers: headers, 
            method: "POST",
            body: JSON.stringify(data)
        })

        if (!request.ok) {
            const errorText = await request.text();
            throw new Error(`Erro no processo de registro! Status: ${request.status}, Mensagem: ${errorText}`);
        }

        return `usuário registrado`
    }
    catch (error) {
        throw error
    }
}