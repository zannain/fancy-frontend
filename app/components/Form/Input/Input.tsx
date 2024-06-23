import { forwardRef, PropsWithChildren, ComponentPropsWithRef } from "react"

type TextInputProps = ComponentPropsWithRef<'input'>;
const Input =  forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
    return (
        <input {...props} ref={ref} className="border-2 text-sm w-full p-2 rounded-xl my-2" />
    )
})

export default Input;

