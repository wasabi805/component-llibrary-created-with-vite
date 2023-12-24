import React from "react"
import styles from './styles.module.css'


export const InputUi = ( props: React.InputHTMLAttributes<HTMLInputElement> )=>{
    const {
        className, 
        name,
        value, 
        onChange, 
        ...restProps} = props
    return (
        <input className={`${className} ${styles.input}`} {...props} {...restProps} 
            name={ name }
            value={ value }
            onChange={onChange}
        />
    )
}