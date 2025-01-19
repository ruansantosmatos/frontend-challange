import styles from '@/components/styles/Dropdown/root.module.css'
import React from 'react'

type RootProps = {
    children: React.ReactNode
}

export function Root({ children }: RootProps) {
    return (
        <div className={styles.dropdown}>
            {children}
        </div>
    )
}