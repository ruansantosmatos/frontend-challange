import React from "react";
import styles from '../styles/Alert/message.module.css'

type IMessageProps = {
    children: React.ReactNode
}
export function Message({children}: IMessageProps) {
    return (
        <div className={styles.container}>
            <p className={styles.message}>
                {children}
            </p>
        </div>
    );
}