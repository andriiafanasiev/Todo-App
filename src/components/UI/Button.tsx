import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    title?: string;
}

function Button({
    children,
    disabled = false,
    onClick,
    title,
    ...rest
}: ButtonProps) {
    return (
        <button
            className={styles.button}
            disabled={disabled}
            onClick={onClick}
            title={title}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
