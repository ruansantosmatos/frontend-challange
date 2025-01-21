import { BASE_URL, headers } from "@/api/config";
import { IFields } from "@/components/modules/Dashboard/FormEquipament";

export async function UdpateEquipament(data: IFields): Promise<string | Error> {
    try {
        const id = data.id
        const url = `${BASE_URL}/equipaments/${id}`
        
        const request = await fetch(url, { 
            headers: headers, 
            method: "PATCH",
            body: JSON.stringify(data)
        })

        if (!request.ok) {
            const errorText = await request.text();
            throw new Error(`Erro no processo de atualização! Status: ${request.status}, Mensagem: ${errorText}`);
        }

        return `informações atualizadas`
    }
    catch (error) {
        throw error
    }
}