import styles from './styles.module.css'
import Button , { ButtonProps} from "@mui/material/Button"
//see : https://hashnode.com/post/extending-material-ui-types-for-wrapper-components-in-typescript-ck5itic0i03qwqps147vdpayx
// also " https://stackoverflow.com/a/67690073/7857134"

interface IButtonProps extends ButtonProps{
    text: string,
    // className: string,
    // onClick: ()=>void
}

export const ButtonUi = ( props : IButtonProps ) => {
    const { className, text , onClick, sx } = props

    return (
        <Button 
            sx={sx}
            className={`${className} ${styles.button}`}
            onClick={ onClick }
        >
            {text}
        </Button>
    )
}