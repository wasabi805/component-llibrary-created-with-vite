
// https://www.totaltypescript.com/jsx-element-vs-react-reactnode
// https://www.tutorialspoint.com/how-to-create-an-array-of-objects-in-typescript

type T ={
    species: string,
    legs: number
}

type FormProps = {
    one: string,
    two:{
         animals: Array<T>
    }
}

export const Form  = ( props : FormProps ) => {

    // const x = props.two.animals
    // console.log('what is x', x)

    return(
        <div>
            { props.one }
            { props.two.animals.map(item=>{
                return item.legs
            })}
        </div>
    )
}