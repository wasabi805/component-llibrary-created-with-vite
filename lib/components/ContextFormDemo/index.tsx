import React, {useState, useContext} from 'react';
import styles from './styles.module.css'
import {FormDemoContext} from "./context";
import { FormDemoStateManager } from './context';


interface Iprops {
    id: string,
    name: string,
    value: string,
    label: string,
}


export const ContextFormDemo = ({ label } : Iprops)=>{
    const contextState = useContext(FormDemoContext)
    console.log(contextState,)

    //temporary
    const [localState, setLocalState] = useState({
        value: ''
    })

    // https://stackoverflow.com/a/42085792/7857134
    const handleInputChange = ( e : React.ChangeEvent<HTMLInputElement> ) : void =>{
        return setLocalState({
            value : e.target.value
        })
    } 

    return (
            <FormDemoStateManager>
                <div className={styles.redux_form_demo_container}>
                <div className={styles.input_wrapper}>
                    <small>
                        <label>
                            { label }
                        </label>
                    </small>

                    
                    <input 
                        className={styles.input}
                        name={'demo-input'}
                        value={localState.value}
                        onChange={handleInputChange} />
                </div>
                </div>
            </FormDemoStateManager>

    )
}

