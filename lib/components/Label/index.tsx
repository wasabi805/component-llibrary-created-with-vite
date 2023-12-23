import React from "react"
import styles from './styles.module.css'

export const Label = (props: React.InputHTMLAttributes<HTMLInputElement>)=>{
    const {className, ...restProps} = props

    return (
        <input {...props} className={`${className} ${styles.input} `} {...restProps} />
    ) 
}