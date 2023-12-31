

type State= {
    value: string
}

type Action ={
    type: string,
    payload: {
        value: string
    }
}

type ReducerArgs = {
    state: State,
    action: Action,
}


// https://stackoverflow.com/a/57350191/7857134
type Reducers={
    [ key: string ]: ({state, action} : ReducerArgs)=> State,
}

type InitialState={
    value: string
}

// eslint-disable-next-line react-refresh/only-export-components
export const initialState: InitialState={
    value: ''
}

export default function FormDemoReducer (state = initialState, action: Action): State{

    const actionType: string = action?.type

    const reducers: Reducers = {
        SET_VALUE : ( {state, action} :  ReducerArgs ) =>{
            alert('reducer fired')
            return {
                ...state,
                value : action.payload.value
            }
        }
    }

    return actionType in reducers ? reducers[actionType]({state, action}) : { ...state }

}