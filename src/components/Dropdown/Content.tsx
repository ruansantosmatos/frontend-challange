import styles from '@/components/styles/Dropdown/content.module.css'
import React from 'react'

type ContentProps = {
    children: React.ReactNode
}

export function Content({ children }: ContentProps) {
    return (
        <div id='dropdownContent' className={styles.dropdownContent}>
            {children}
        </div>
    )
}