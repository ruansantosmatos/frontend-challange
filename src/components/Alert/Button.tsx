import styles from '../styles/Alert/button.module.css'

type ButtonProps = {
    color?: | 'error' | 'success' | 'default'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Colors = {
    error: '#dc3545',
    success: '#28a745',
    default: '#7066e0'
}

export function Button({ children, onClick, color = 'default'}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={styles.button}
            style={{ backgroundColor: Colors[color] }}
        >
            {children}
        </button>
    );
}