import React from "react"
import styles from './styles.module.css'

export const Button = ( props: React.ButtonHTMLAttributes <HTMLButtonElement> ) => {
    const {className , ...restProps} =props

    return (
        <button {...props } className={`${className} ${styles.button}`} {...restProps} />
    )
}