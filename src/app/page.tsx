import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.header}>
          <h1>Login</h1>
          <p>Insira seus dados para acessar o sistema</p>
        </div>
        <form action="" method="POST" className={styles.form}>
          <div className={styles.inputArea}>
            <label htmlFor="login">Email</label>
            <input
              type="email"
              name="login"
              placeholder="exampleUser@gmail.com"
              className={styles.txtInput}
            />
            <span id="alert-login" className={styles.alertText}></span>
          </div>
          <div className={styles.inputArea}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              className={styles.txtInput}
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
