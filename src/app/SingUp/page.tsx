'use client'
import styles from '@/styles/singup.module.css'
import Link from 'next/link'
import * as yup from 'yup'
import { FormEvent, useState } from 'react'
import { ISingUp } from '@/types/SingUp'
import { Alert } from '@/components/Alert'
import { ErrorTypes } from '@/components/Alert/Icon'
import { useRouter } from 'next/navigation'
import { ServiceSingUp } from '@/api/services/SingUp'
import { generateCode } from '@/functions/generateCode'

export default function SingUp() {

    const [user, setUser] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [titleAlert, setTitleAlert] = useState<string>('')
    const [messageAlert, setMessageAlert] = useState<string>('')
    const [iconAlert, setIconAlert] = useState<ErrorTypes>('question')
    const [alertOpen, setAlertOpen] = useState<boolean>(false)
    const [disableBtn, setDisableBtn] = useState<boolean>(false)
    const router = useRouter()

    function onchangeUser(name: string) {
        setUser(name)
    }

    function onchangeEmail(email: string) {
        setEmail(email)
    }

    function onChangePassword(password: string) {
        setPassword(password)
    }

    function showAlert() {
        setAlertOpen(true)
    }

    function closeAlert() {
        setAlertOpen(false)
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

    async function verifyEmail() {
        try {
            const data = await ServiceSingUp.GetValidEmail(email) as ISingUp[]

            if (data.length > 0) {
                const message = 'Endereço de email indisponível'
                setTitleAlert('Atenção')
                setIconAlert('warning')
                setMessageAlert(message)
                showAlert()
            }
            else {
                singUp()
            }
        }
        catch (error) {
            const message = 'houve uma falha na validação do endereço de email!'
            setTitleAlert('Oops!')
            setIconAlert('error')
            setMessageAlert(message)
        }
    }

    function validantionFields() {
        try {
            const schema: yup.ObjectSchema<Omit<ISingUp, 'id'>> = yup.object().shape(
                {
                    name: yup.string().required().min(4),
                    email: yup.string().required().email(),
                    password: yup.string().required().min(6)
                }
            )

            schema.validateSync({ name: user, email, password }, { abortEarly: false })
            schema.type == 'object' && verifyEmail()
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

    async function singUp() {
        try {
            const info: ISingUp = { id: generateCode(6), name: user.toUpperCase(), email: email, password: password }
            await ServiceSingUp.CreateUser(info) 
            router.push('/')
        }
        catch (error) {
            const message = 'houve uma falha na criação da conta!'
            setTitleAlert('Oops!')
            setIconAlert('error')
            setMessageAlert(message)
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
            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.header}>
                        <h1>Registrar-se</h1>
                        <p>Insira seus dados para criar sua conta</p>
                    </div>
                    <form
                        method='POST'
                        className={styles.form}
                        onSubmit={(e) => handleSubmitForm(e)}
                    >
                        <div className={styles.inputArea}>
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ex: Usuário"
                                className={styles.txtInput}
                                onChange={(e) => onchangeUser(e.target.value)}
                                onFocus={() => disableAlertFields('alert-name')}
                            />
                            <div className={styles.alertContainer}>
                                <span id="alert-name" className={styles.alertText}></span>
                            </div>
                        </div>
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
                                Cadastrar
                            </button>
                        </div>
                        <div className={styles.containerNewAccount}>
                            <Link href={'/'}>
                                Já possui conta? Login
                            </Link>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}