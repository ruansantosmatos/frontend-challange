import styles from '../styles/Dropdown/button.module.css'

type ButtonProps = {
    onActive?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, onActive, disabled }: ButtonProps) {
    
    function closeDropdown(){
        const element = document.getElementById('dropdownContent') as HTMLElement
        element.style.display = 'none'
        onActive !== undefined && onActive()
    }

    return (
        <button
            onClick={() => closeDropdown()}
            disabled={disabled}
            className={styles.dropdownButton}
        >
            {children}
        </button>
    );
}