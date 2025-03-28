import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    title?: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

function Button({
    children,
    disabled = false,
    onClick,
    title,
    type = 'button',
    className = '',
    ...rest
}: ButtonProps) {
    return (
        <button
            type={type}
            className={`${styles.button} ${className}`}
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
