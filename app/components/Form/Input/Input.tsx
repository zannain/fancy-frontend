import { forwardRef, PropsWithChildren, ComponentPropsWithRef } from "react"

type TextInputProps = ComponentPropsWithRef<'input'>;
const Input =  forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
    return (
        <input {...props} ref={ref} className="px-3 py-2 text-sm" />
    )
})

export default Input;

