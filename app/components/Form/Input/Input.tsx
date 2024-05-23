import { forwardRef, PropsWithChildren, ComponentPropsWithRef } from "react"

type TextInputProps = ComponentPropsWithRef<'input'>;
const Input =  forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
    return (
        <input {...props} ref={ref} className="border" />
    )
})

export default Input;

