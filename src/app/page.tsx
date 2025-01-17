'use client'
import * as yup from 'yup'
import styles from "../styles/home.module.css";
import { FormEvent, useState } from "react";
import { ILogin } from '@/types/Home';

export default function Home() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function onchangeEmail(email: string) {
    setEmail(email)
  }

  function onChangePassword(password: string) {
    setPassword(password)
  }

  function alertInvalidFields(id: string, message: string) {
    const alert = document.getElementById(id) as HTMLElement
    alert.innerHTML = message
  }

  function disableAlertFields(id: string) {
    const alert = document.getElementById(id) as HTMLElement
    alert.innerHTML = ''
  }

  function handleSubmitForm(event: FormEvent<HTMLFormElement>){
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
      schema.type == 'object' && alert('tudo certo')
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

  return (
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
            <span id="alert-email" className={styles.alertText}></span>
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
            <span id="alert-password" className={styles.alertText}></span>
          </div>
          <div className={styles.forgetPassword}>
            <a href="/" target="_self">
              Esqueceu a senha?
            </a>
          </div>
          <div className={styles.containerBtn}>
            <button type="submit" className={styles.btnSubmit}>
              Entrar
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
