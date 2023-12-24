import { createContext , useReducer} from 'react';


// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/

type FormDemoContextType = null | object
type FormDemoDispatchType = null | object

export const FormDemoContext = createContext<FormDemoContextType>({test: ''});
export const FormDemoDispatch = createContext<FormDemoDispatchType>(null)

type Props = {
    children: string | JSX.Element | JSX.Element[]  
  }

export const FormDemoStateManager = ({children}: Props)=>{
    const [reducer, dispatch] = useReducer( ()=>{return {    }},  ()=>{}
)

    return (
        <FormDemoContext.Provider value={reducer}>
            <FormDemoDispatch.Provider value={dispatch}>
                { children }
            </FormDemoDispatch.Provider>
        </FormDemoContext.Provider>
    )
}
