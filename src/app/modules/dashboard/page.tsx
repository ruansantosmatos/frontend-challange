'use client'
import Image from "next/image";
import TrashImage from '../../../../public/trash.png'
import EditImage from '../../../../public/pencil.png'
import PrintImage from '../../../../public/printer.png'
import styles from '@/styles/dashboard.module.css'
import { Table } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { ServicesDashboard } from "@/api/services";
import { ActionsButtonTable, IEquipamentsInfo, TRequestEquipaments } from "@/types/Dashboard";
import { Pagination } from "@/components/Pagination";
import { Alert } from "@/components/Alert";
import { formatMoney } from "@/functions/formatMoney";
import { formatDateBRL } from "@/functions/formatDateBRL";
import { ErrorTypes } from "@/components/Alert/Icon";

export default function Dashboard() {

    const [limit, setLimit] = useState<number>(10)
    const [items, setItems] = useState<IEquipamentsInfo[]>([])
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [alertOpen, setAlertOpen] = useState<boolean>(false)
    const [titleAlert, setTitleAlert] = useState<string>('')
    const [messageAlert, setMessageAlert] = useState<string>('')
    const [iconAlert, setIconAlert] = useState<ErrorTypes>('question')
    const [codeEquipament, setCodeEquipament] = useState<string>('')
    const [actionButtons, setActionsButton] = useState<ActionsButtonTable>('default')
    const [idEquipament, setIdEquipament] = useState<number>(0)

    useEffect(() => { getEquipaments() }, [])

    function showAlert() {
        setAlertOpen(true)
    }

    function closeAlert() {
        setAlertOpen(false)
        setActionsButton('default')
    }

    function handleLimitPage(value: number) {
        setLimit(value)
        getEquipaments(1, value)
    }

    async function getEquipaments(page: number = 1, limit: number = 10) {
        try {
            const request = await ServicesDashboard.GetEquipaments(page, limit) as TRequestEquipaments
            const data = request.data

            setItems(data)
            setCurrentPage(request.next !== null ? request.next - 1 : request.last)
            setTotalPages(request.pages)
        }
        catch (error) {
            const message = 'houve uma falha na busca das informações!'
            setTitleAlert('Oops!')
            setIconAlert('error')
            setMessageAlert(message)

            setActionsButton('default')
            showAlert()
        }
    }

    function showAlertDelete(id: number, codeEan: string){
        const message = `Deseja excluir o equipamento ${codeEan} ? 
        Essa ação não podera ser desfeita depois de executada.`

        setTitleAlert('Atenção!')
        setIconAlert('warning')
        
        setMessageAlert(message)
        setCodeEquipament(codeEan)
        setIdEquipament(id)

        setActionsButton('delete')
        showAlert()
    }

    async function deleteEquipaments(id: number, codeEAN: string) {
        try {
            const request = await ServicesDashboard.DeleteEquipaments(id, codeEAN) as string
            setTitleAlert('Sucesso!')
            
            setMessageAlert(request)
            setIconAlert('success')

            setActionsButton('default')
            getEquipaments()
            showAlert()
        }
        catch (error) {
            const message = 'houve uma falha na exclusão!'
            setTitleAlert('Oops!')
            setIconAlert('error')
            
            setActionsButton('default')
            setMessageAlert(message)
            showAlert()
        }
    }

    function switchActions(action: ActionsButtonTable){
        switch (action) {
            case 'delete':
                deleteEquipaments(idEquipament, codeEquipament)
                break;
        
            case 'default':
                closeAlert()
                break;
        }
    }

    function ActivateAlert() {
        return (
            <Alert.Root isOpen={alertOpen}>
                <Alert.Icon type={iconAlert} />
                <Alert.Title>
                    {titleAlert}
                </Alert.Title>
                <Alert.Message>
                    {messageAlert}
                </Alert.Message>
                <Alert.Actions>
                    <Alert.Button 
                        color='success' 
                        onClick={() => switchActions(actionButtons)}
                    >
                        confirmar
                    </Alert.Button>
                    <Alert.Button
                        color='error'
                        onClick={closeAlert}
                    >
                        cancelar
                    </Alert.Button>
                </Alert.Actions>
            </Alert.Root>
        )
    }

    return (
        <>
            {< ActivateAlert />}
            <div className={styles.root}>
                <Table.ScrollArea className={styles.container}>
                    <Table.Root interactive>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader className={styles.headerTitle}>Código</Table.ColumnHeader>
                                <Table.ColumnHeader className={styles.headerTitle}>Descrição</Table.ColumnHeader>

                                <Table.ColumnHeader className={styles.headerTitle}>Valor</Table.ColumnHeader>
                                <Table.ColumnHeader className={styles.headerTitleHidden}>Marca</Table.ColumnHeader>

                                <Table.ColumnHeader className={styles.headerTitleHidden}>Aquisição</Table.ColumnHeader>
                                <Table.ColumnHeader className={styles.headerTitle}>Ações</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {items.map((item, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell className={styles.items}>{item.codigo_ean}</Table.Cell>
                                    <Table.Cell className={styles.items}>{item.descricao}</Table.Cell>

                                    <Table.Cell className={styles.items}>{
                                        formatMoney({ value: item.valor.toString(), country: 'pt-Br', format: 'BRL' })}
                                    </Table.Cell>

                                    <Table.Cell className={styles.itemsHidden}>{item.marca}</Table.Cell>
                                    <Table.Cell className={styles.itemsHidden}>{formatDateBRL(item.data_aquisicao)}</Table.Cell>
                                    <Table.Cell className={styles.items}>
                                        <button className={styles.actionsButton}>
                                            <Image width={22} height={22} src={PrintImage} alt={"printer"} />
                                        </button>
                                        <button className={styles.actionsButton}>
                                            <Image width={22} height={22} src={EditImage} alt={"edit"} />
                                        </button>
                                        <button className={styles.actionsButton} onClick={() => showAlertDelete(item.id, item.codigo_ean)}>
                                            <Image width={22} height={22} src={TrashImage} alt={"trash"} />
                                        </button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Table.ScrollArea>
                <div className={styles.paginationContainer}>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => getEquipaments(page, limit)}
                        handleRecordsPerPageChange={(limit) => handleLimitPage(limit)}
                    />
                </div>
            </div>
        </>
    );
}