import { BASE_URL, headers } from "@/api/config";

export async function DeleteEquipaments(id:number, code: string): Promise<string | Error> {
    try {
        const url = `${BASE_URL}/equipaments/${id}`
        const request = await fetch(url, { method: "DELETE" })

        if (!request.ok) {
            const errorText = await request.text();
            throw new Error(`Erro no processo de exclusão! Status: ${request.status}, Mensagem: ${errorText}`);
        }

        return `equipamento ${code} excluido!`
    }
    catch (error) {
        throw error
    }
}