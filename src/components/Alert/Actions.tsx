import React from "react";
import styles from '../styles/Alert/actions.module.css'

type ActionsProps = {
    children: React.ReactNode
}

export function Actions({ children }: ActionsProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}