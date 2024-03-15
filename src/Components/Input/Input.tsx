import Desktop from "./Desktop"
const Input = (params:any) => {
    return(
        <Desktop onChange={params.onChange} onClick={params.onClick} value={params.value}/>
    )
}

export default Input;