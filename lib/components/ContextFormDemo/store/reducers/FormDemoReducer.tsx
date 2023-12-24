const initialState={}

type State= object

type Action ={
    type: string,
    payload: object
}

type ReducerArgs = {
    state: State,
    action: Action,
}


// https://stackoverflow.com/a/57350191/7857134
type Reducers={
    [ key: string ]: ({state, action} : ReducerArgs)=> State,
}

export default function FormDemoReducer (state = initialState, action: Action): State{

    const actionType: string = action.type

    const reducers: Reducers = {
        TEST : ( {state, action} :  ReducerArgs ) =>{
            return {
                ...state,
                test:{
                    ...action.payload
                }
            }
        }
    }

    return actionType in reducers ? reducers[actionType]({state, action}) : { ...state }

}