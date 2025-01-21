'use server'
import { ISession } from "@/types/Home";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";

export async function generateToken(){
    return randomUUID()
}

export async function storageSession({ id_user, token }: ISession){
    const cookiesData = await cookies()
    cookiesData.set({ name: 'token', value: token })
    cookiesData.set({ name: 'id_user', value: id_user })
}

export async function clearStorageSession() {
    const cookiesData = await cookies()
    cookiesData.delete('id_user')
    cookiesData.delete('token')
}

export async function getTokenSession() {
    const cookiesData = await cookies()
    const token = cookiesData.get('token')?.value
    return token
}