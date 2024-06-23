import { useEffect, useState } from "react"
import Input from "../Input/Input"
import Label from "../Label/Label"

interface FormFieldProps {
    htmlFor: string,
    label:string,
    type?: string,
    value: any,
    placeholder?: string,
    onChange?: (...args:any) => any,
    error?: string
}
export default function FormField({error,placeholder = "" ,htmlFor, label, type="text", value, onChange = () => {}}: FormFieldProps) {
    const [errorText, setErrorText] = useState(error)
    useEffect(() => {
        setErrorText(error)
    }, [error])
    return (
        <div className="flex flex-col">
            <Label htmlFor={htmlFor}>{label}</Label>

            <Input type={type} id={htmlFor} name={htmlFor} placeholder={placeholder} onChange={onChange} />
            <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full">
            {errorText || ''}
        </div>
        </div>
    )
}