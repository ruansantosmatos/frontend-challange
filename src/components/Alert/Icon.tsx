import styles from '../styles/Alert/icon.module.css'

type PropsIcon = {
    type:
    | 'warning'
    | 'error'
    | 'success'
    | 'question'
}

const Colors = {
    error: '#F27474',
    success: '#a5dc86',
    warning: '#f8bb86',
    question: '#87adbd'
}

export function Icon({ type }: PropsIcon) {

    return (
        <header className={styles.main}>
            <div 
                className={styles.container} 
                style={{ borderColor: Colors[type] }}
            >
                {
                    type == 'question' &&
                    <div className={styles.question}>?</div>
                }
                {
                    type == 'warning' &&
                    <div className={styles.warning}>!</div>}
                {
                    type == 'success' &&
                    <div className={styles.success}>
                        <div className={styles.lineTip}></div>
                        <div className={styles.lineLong}></div>
                    </div>
                }
                {
                    type == 'error' &&
                    <div className={styles.erro}>
                        <div className={styles.lineLeft}></div>
                        <div className={styles.lineRight}></div>
                    </div>
                }
            </div>
        </header>
    );
}