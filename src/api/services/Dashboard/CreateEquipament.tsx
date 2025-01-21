import { BASE_URL, headers } from "@/api/config";
import { IFields } from "@/components/modules/Dashboard/FormEquipament";

export async function CreateEquipaments(data: IFields): Promise<string | Error> {
    try {
        const url = `${BASE_URL}/equipaments`
        
        const request = await fetch(url, { 
            headers: headers, 
            method: "POST",
            body: JSON.stringify(data)
        })

        if (!request.ok) {
            const errorText = await request.text();
            throw new Error(`Erro no processo de registro! Status: ${request.status}, Mensagem: ${errorText}`);
        }

        return `equipamento registrado!`
    }
    catch (error) {
        throw error
    }
}