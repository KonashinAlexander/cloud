import React from 'react'
import styles from './component.module.scss'

type TButton = {
    text: string,
    onClick: () => void,
}

const Button: React.FC<TButton> = ({ text, onClick }) => {
    return (
        <button className={styles.button_filled} onClick={onClick}>{text}</button>
    )
}

export default Button