import styles from '../styles/Modal/button.module.css'

type ButtonProps = {
    color: | 'cancel' | 'success'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Colors = {
    cancel: '#dc3545',
    success: '#28a745',
}

export function Button({ 
    children, onClick, 
    disabled, color 
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={styles.button}
            style={{ backgroundColor: Colors[color] }}
        >
            {children}
        </button>
    );
}