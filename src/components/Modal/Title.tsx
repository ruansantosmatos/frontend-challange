import React from "react";
import styles from '../styles/Modal/title.module.css'

type TitleProps = {
    children: React.ReactNode
}

export function Title({ children }: TitleProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {children}
            </h2>
        </div>
    );
}