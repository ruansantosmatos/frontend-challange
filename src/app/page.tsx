'use client'
import * as yup from 'yup'
import styles from "../styles/home.module.css";
import { FormEvent, useState } from "react";
import { ILogin, ISession } from '@/types/Home';
import { ServicesHome } from '@/api/services';
import { IDataSingIn } from '@/api/services/Home/SingIn';
import { Alert } from '@/components/Alert';
import { useRouter } from 'next/navigation'
import { generateToken, storageSession } from './action';
import Link from 'next/link';

export default function Home() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [alertOpen, setAlertOpen] = useState<boolean>(false)
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [disableBtn, setDisableBtn] = useState<boolean>(false)
  const router = useRouter()

  function onchangeEmail(email: string) {
    setEmail(email)
  }

  function onChangePassword(password: string) {
    setPassword(password)
  }

  function openAlert() {
    setAlertOpen(true)
    setAlertMessage('email ou senha inválido.')
  }

  function closeAlert() {
    setAlertOpen(false)
    setDisableBtn(false)
  }

  function alertInvalidFields(id: string, message: string) {
    const alert = document.getElementById(id) as HTMLElement
    alert.innerHTML = message
  }

  function disableAlertFields(id: string) {
    const alert = document.getElementById(id) as HTMLElement
    alert.innerHTML = ''
  }

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    validantionFields()
  }

  function validantionFields() {
    try {
      const schema: yup.ObjectSchema<ILogin> = yup.object().shape(
        {
          email: yup.string().required().email(),
          password: yup.string().required().min(6)
        }
      )

      schema.validateSync({ email, password }, { abortEarly: false })
      schema.type == 'object' && singIn()
    }
    catch (error) {
      const yupErro = error as yup.ValidationError
      const erroValidation: Record<string, string> = {}

      yupErro.inner.forEach(erro => {
        if (erro.path == undefined) { return }
        erroValidation[erro.path] = erro.message
        alertInvalidFields(`alert-${erro.path}`, erro.message)
      })
    }
  }

  async function storageData({ id_user, token }: ISession) {
    setDisableBtn(false)
    await storageSession({ id_user, token })
    router.push('/modules/dashboard')
  }

  async function singIn() {
    try {
      const data = await ServicesHome.SingIn(email, password) as IDataSingIn[]
      const token = await generateToken()

      setDisableBtn(true)
      data.length > 0 ? storageData({ 'id_user': data[0].id, 'token': token }) : openAlert()
    }
    catch (error) {
      const message = 'ocorreu um erro inesperado. Tente novamente!'
      setAlertMessage(message)
    }
  }

  function ActivateAlert() {
    return (
      <Alert.Root isOpen={alertOpen}>
        <Alert.Icon type='error' />
        <Alert.Title>
          <p>Oops!</p>
        </Alert.Title>
        <Alert.Message>
          {alertMessage}
        </Alert.Message>
        <Alert.Actions>
          <Alert.Button onClick={closeAlert}>
            confirmar
          </Alert.Button>
        </Alert.Actions>
      </Alert.Root>
    )
  }

  return (
    <>
      {<ActivateAlert />}
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.header}>
            <h1>Login</h1>
            <p>Insira seus dados para acessar o sistema</p>
          </div>
          <form
            className={styles.form}
            onSubmit={(e) => handleSubmitForm(e)}
          >
            <div className={styles.inputArea}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="exampleUser@gmail.com"
                className={styles.txtInput}
                onChange={(e) => onchangeEmail(e.target.value)}
                onFocus={() => disableAlertFields('alert-email')}
              />
              <div className={styles.alertContainer}>
                <span id="alert-email" className={styles.alertText}></span>
              </div>
            </div>
            <div className={styles.inputArea}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                className={styles.txtInput}
                onChange={(e) => onChangePassword(e.target.value)}
                onFocus={() => disableAlertFields('alert-password')}
              />
              <div className={styles.alertContainer}>
                <span id="alert-password" className={styles.alertText}></span>
              </div>
            </div>
            <div className={styles.containerBtn}>
              <button
                type="submit"
                className={styles.btnSubmit}
                disabled={disableBtn}
              >
                Entrar
              </button>
            </div>
            <div className={styles.containerNewAccount}>
              <Link href={'/SingUp'}>
                Não possui conta? Registrar-se
              </Link>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
