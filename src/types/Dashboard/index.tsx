export type ActionsButtonTable = 'edit' | 'delete' | 'default'

export type TRequestEquipaments = {
    data: IEquipamentsInfo[],
    first: number,
    items: number,
    last: number,
    next: number | null,
    pages: number,
    prev: number | null
}

export interface IEquipamentsInfo {
    id: number,
    codigo_ean: string,
    descricao: string,
    valor: number,
    marca: string,
    aquisicao: string
}

export type PaginationData = {
    first: number,
    items: number,
    last: number,
    next: number | null,
    pages: number,
    prev: number | null
}
