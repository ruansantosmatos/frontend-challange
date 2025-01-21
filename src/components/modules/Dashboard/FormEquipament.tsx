'use client'
import styles from '../styles/formEquipament.module.css'
import * as yup from 'yup'
import { useEffect, useState } from "react";
import { Modal } from '@/components/Modal';
import { generateEAN13Code } from '@/functions/generateEAN13Code';
import { generateCode } from '@/functions/generateCode';
import { ServicesDashboard } from '@/api/services';
import { IEquipamentsInfo, TRequestEquipaments } from '@/types/Dashboard';
import { ErrorTypes } from '@/components/Alert/Icon';
import { Alert } from '@/components/Alert';
import { formatMoneyBRL } from '@/functions/formatMoney';

export type TAlertFild =
  | 'descricao'
  | 'valor'
  | 'marca'
  | 'aquisicao'

export interface IFieldsAtributes {
  id: string,
  type: string,
  label: string,
  value: any,
  placeholder: string,
  maxLength: number,
  disabled?: boolean
  alert?: `alert-${TAlertFild}`,
  onChange: (e: string) => void,
  onInput?: (e: string) => void
}

export interface IFields {
  id: string,
  codigo_ean: string,
  descricao: string,
  valor: number,
  marca: string,
  aquisicao: string
}

export type FormEquipamentProps = {
  isOpen: boolean,
  editInfo: boolean,
  idEquipament: string,
  reloadScreen: () => void,
  handleCloseForm: () => void,
  handleCloseFormEdit: () => void
}

export function FormEquipament({
  isOpen, editInfo, idEquipament,
  handleCloseForm, reloadScreen,
  handleCloseFormEdit
}: FormEquipamentProps) {

  const [id, setId] = useState<string>('0')
  const [codigo, setCodigo] = useState<string>(generateEAN13Code(generateCode(12)))
  const [descricao, setDescricao] = useState<string>('')
  const [marca, setMarca] = useState<string>('')
  const [valor, setValor] = useState<string>('R$ 0,00')
  const [aquisicao, setAquisicao] = useState<string>('')
  const [titleAlert, setTitleAlert] = useState<string>('')
  const [messageAlert, setMessageAlert] = useState<string>('')
  const [iconAlert, setIconAlert] = useState<ErrorTypes>('question')
  const [alertOpen, setAlertOpen] = useState<boolean>(false)

  const FIELDS: IFieldsAtributes[] = [
    { id: 'codigo', type: 'text', value: codigo, label: 'Código', placeholder: '000000000000', maxLength: 13, onChange: (e: string) => setCodigo(e), disabled: true },
    { id: 'descricao', type: 'text', value: descricao, label: 'Descrição', placeholder: 'Teclado Gamer', maxLength: 80, alert: 'alert-descricao', onChange: (e: string) => setDescricao(e) },
    { id: 'valor', type: 'text', value: valor, label: 'Valor', placeholder: 'R$ 0,00', maxLength: 50, alert: 'alert-valor', onChange: (e: string) => formatMoneyInput(e) },
    { id: 'marca', type: 'text', value: marca, label: 'Marca', placeholder: 'Dell', maxLength: 50, alert: 'alert-marca', onChange: (e: string) => setMarca(e) },
    { id: 'aquisição', type: 'date', value: aquisicao, label: 'Aquisição', placeholder: '', maxLength: 50, alert: 'alert-aquisicao', onChange: (e: string) => setAquisicao(e) },
  ]

  useEffect(() => { !editInfo && loadScreen() }, [isOpen])

  useEffect(() => { editInfo && getEquipamentById() }, [editInfo])

  function loadScreen() {
    clearField()
    isOpen && getEquipaments()
  }

  function showAlert() {
    setAlertOpen(true)
  }

  function closeAlert() {
    setAlertOpen(false)
  }

  function closeFormEquipament() {
    editInfo ? handleCloseFormEdit() : handleCloseForm()
  }

  function actionForm(data: IFields) {
    editInfo ? updateEquipament(data) : createEquipament(data)
  }

  function clearField() {
    setId('0')
    setCodigo(generateEAN13Code(generateCode(12)))
    setDescricao('')
    setMarca('')
    setAquisicao('')
    setValor('R$ 0,00')
  }

  function alertInvalidFields(message: string, display: string, alertType: any) {
    const alert = document.getElementById(alertType)
    if (alert == undefined) { return }

    alert.style.display = display
    alert.innerHTML = message
  }

  function formatMoneyInput(value: string) {
    const valor = value.replace(/\D/g, '')
    const convert = parseFloat(valor) / 100

    const placeholder = 'R$ 0,00'
    const formatMoney = new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', })

    const newValue = formatMoney.format(convert)
    const validValue = isNaN(convert)

    setValor(validValue ? placeholder : newValue)
    return validValue ? placeholder : newValue
  }

  async function getEquipaments(page: number = 1, limit: number = 10) {
    try {
      const request = await ServicesDashboard.GetEquipaments(page, limit) as TRequestEquipaments
      const nextId = request.items + 1
      setId(nextId.toString())
    }
    catch (error) {
      const message = 'houve uma falha na busca das informações!'
      setTitleAlert('Oops!')
      setIconAlert('error')

      setMessageAlert(message)
      clearField()
      handleCloseForm()
      showAlert()
    }
  }

  async function getEquipamentById() {
    try {
      const request = await ServicesDashboard.GetEquipamentById(idEquipament) as IEquipamentsInfo[]
      setId(request[0].id.toString())
      setCodigo(request[0].codigo_ean)
      setValor(formatMoneyBRL(request[0].valor))

      setDescricao(request[0].descricao)
      setMarca(request[0].marca)
      setAquisicao(request[0].aquisicao)
    }
    catch (error) {
      const message = 'houve uma falha na busca das informações!'
      setTitleAlert('Oops!')
      setIconAlert('error')

      setMessageAlert(message)
      clearField()
      handleCloseForm()
      showAlert()
    }
  }

  async function createEquipament(data: IFields) {
    try {
      const request = await ServicesDashboard.CreateEquipament(data) as string
      reloadScreen()
      setTitleAlert('Sucesso!')
      setIconAlert('success')

      setMessageAlert(request)
      clearField()
      handleCloseForm()
      showAlert()
    }
    catch (error) {
      const message = 'houve uma falha na processo de registro do equipamento!'
      setTitleAlert('Oops!')
      setIconAlert('error')

      setMessageAlert(message)
      handleCloseForm()
      clearField()
      showAlert()
    }
  }

  async function updateEquipament(data: IFields) {
    try {
      const request = await ServicesDashboard.UdpateEquipament(data) as string
      reloadScreen()
      clearField()
      setTitleAlert('Sucesso!')
      setIconAlert('success')

      setMessageAlert(request)
      handleCloseFormEdit()
      showAlert()
    }
    catch (error) {
      const message = 'houve uma falha na processo de atualização das informações!'
      setTitleAlert('Oops!')
      setIconAlert('error')

      setMessageAlert(message)
      clearField()
      handleCloseFormEdit()
      showAlert()
    }
  }

  function validationFilds() {
    try {
      const schema: yup.ObjectSchema<Omit<IFields, 'id'>> = yup.object().shape(
        {
          codigo_ean: yup.string().required().min(13).max(13),
          descricao: yup.string().required().max(80),
          valor: yup.number().required().moreThan(0),
          marca: yup.string().required().max(30),
          aquisicao: yup.string().required()
        }
      )

      const data: IFields = {
        id: id,
        codigo_ean: codigo,
        descricao: descricao.toUpperCase(),
        marca: marca.toUpperCase(),
        aquisicao: aquisicao,
        valor: parseFloat(valor.split('R$')[1].replace(/\./g, "").replace(",", ".")),
      }

      schema.validateSync(data, { abortEarly: false })
      schema.type == 'object' && actionForm(data)
    }
    catch (error) {
      const yupErro = error as yup.ValidationError
      yupErro.inner.forEach(erro => {
        if (erro.path == undefined) { return }
        const messageErro = erro.message
        alertInvalidFields(messageErro, 'block', `alert-${erro.path}`)
      })
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
            color='default'
            onClick={() => closeAlert()}
          >
            confirmar
          </Alert.Button>
        </Alert.Actions>
      </Alert.Root>
    )
  }

  return (
    <>
      {<ActivateAlert />}
      <Modal.Root isOpen={isOpen}>
        <Modal.Title>
          {editInfo ? `Equipamento: ${codigo}` : `Novo Equipamento`}
        </Modal.Title>
        <form className={styles.form}>
          {
            FIELDS.map((field, index) => {
              return (
                <div className={styles.inputArea} key={index}>
                  <label htmlFor={field.id}>{field.label}</label>
                  <input
                    id={field.id}
                    type={field.type}
                    name={field.id}
                    value={field.value}
                    disabled={field.disabled}
                    placeholder={field.placeholder}
                    className={styles.txtInput}
                    onChange={(e) => field.onChange(e.target.value)}
                    onFocus={() => alertInvalidFields('', 'none', field.alert)}
                  />
                  <div className={styles.alertContainer}>
                    <span id={field.alert} className={styles.alertText}></span>
                  </div>
                </div>
              )
            })
          }
        </form>
        <Modal.Actions>
          <Modal.Button
            color={'cancel'}
            onClick={() => closeFormEquipament()}
          >
            Cancelar
          </Modal.Button>
          <Modal.Button
            color={"success"}
            onClick={() => validationFilds()}
          >
            {editInfo ? 'Atualizar' : 'Registrar'}
          </Modal.Button>
        </Modal.Actions>
      </Modal.Root>
    </>
  )
}