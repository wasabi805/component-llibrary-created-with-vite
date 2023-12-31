
type Value = {
    value: string
}

export const setTestValue = ({value}: Value)=>{
    console.log('setTestValue action', value)
    return {
        type: 'SET_VALUE',
        payload:{
            value,
        }
    }
}
