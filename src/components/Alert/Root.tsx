import React, { useEffect } from 'react'
import styles from '../styles/Alert/root.module.css'

type RootProps = {
    isOpen: boolean
    children: React.ReactNode
}

export function Root({ isOpen, children }: RootProps) {
    return (
        <>
            {isOpen &&
                <div className={styles.root}>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            }
        </>
    );
}